goog.provide('frontend.components.property');
/**
 * Same parent check as convert-page-to-tag!: namespace children and
 * Library-parented namespace roots cannot become properties.
 */
frontend.components.property.namespaced_page_for_property_convert_QMARK_ = (function frontend$components$property$namespaced_page_for_property_convert_QMARK_(page){
var and__5140__auto__ = frontend.util.entity.internal_page_QMARK_(page);
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(page);
} else {
return and__5140__auto__;
}
});
/**
 * Adds an existing or new property from dropdown. Used from a block or page context.
 */
frontend.components.property._LT_add_property_from_dropdown = (function frontend$components$property$_LT_add_property_from_dropdown(entity,id_or_name_STAR_,schema,p__46032){
var map__46033 = p__46032;
var map__46033__$1 = cljs.core.__destructure_map(map__46033);
var class_schema_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46033__$1,new cljs.core.Keyword(null,"class-schema?","class-schema?",508813900));
var block_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46033__$1,new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.get_current_repo()),(function (repo){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = block_uuid;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return id_or_name_STAR_;
}
})()),(function (id_or_name){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var and__5140__auto__ = frontend.util.entity.class_QMARK_(entity);
if(cljs.core.truth_(and__5140__auto__)){
return class_schema_QMARK_;
} else {
return and__5140__auto__;
}
})()),(function (add_class_property_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,id_or_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (property){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.util.entity.property_QMARK_(property)),(function (property_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(property);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return id_or_name;
}
})()),(function (property_title){
return promesa.protocols._promise((cljs.core.truth_(property_QMARK_)?(function (){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not((logseq.db.public_built_in_property_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.public_built_in_property_QMARK_.cljs$core$IFn$_invoke$arity$1(property) : logseq.db.public_built_in_property_QMARK_.call(null,property)));
if(and__5140__auto__){
return (logseq.db.built_in_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.built_in_QMARK_.cljs$core$IFn$_invoke$arity$1(property) : logseq.db.built_in_QMARK_.call(null,property));
} else {
return and__5140__auto__;
}
})())){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","private-built-in-not-usable","property/private-built-in-not-usable",1033007701)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
} else {
}

return property;
})()
:(cljs.core.truth_(frontend.components.property.namespaced_page_for_property_convert_QMARK_(property))?(function (){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page.convert","page-to-property-namespaced","page.convert/page-to-property-namespaced",2070677392)], 0)),new cljs.core.Keyword(null,"error","error",-978969032),false);

return promesa.core.rejected(new cljs.core.Keyword(null,"namespaced-page","namespaced-page",1832450560));
})()
:((logseq.db.frontend.property.valid_property_name_QMARK_(property_title))?promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__46037 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"property-name","property-name",-1399851434),property_title], null);
if(cljs.core.truth_(frontend.util.entity.internal_page_QMARK_(property))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46037,new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property)], null));
} else {
return G__46037;
}
})()),(function (opts){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property.upsert_property_BANG_(null,schema,opts)),(function (result){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(result),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (property__$1){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(add_class_property_QMARK_)?frontend.components.property.value._LT_add_property_BANG_.cljs$core$IFn$_invoke$arity$4(entity,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property__$1),"",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class-schema?","class-schema?",508813900),class_schema_QMARK_,new cljs.core.Keyword(null,"exit-edit?","exit-edit?",1607853059),false], null)):null)),(function (_){
return promesa.protocols._promise(property__$1);
}));
}));
}));
}));
})):frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property.validation","invalid-name","property.validation/invalid-name",-1629565033)], 0)),new cljs.core.Keyword(null,"error","error",-978969032))
))));
}));
}));
}));
}));
}));
}));
}));
});
frontend.components.property.enable_block_properties_renderers_QMARK_ = (function frontend$components$property$enable_block_properties_renderers_QMARK_(p__46040,class_QMARK_){
var map__46041 = p__46040;
var map__46041__$1 = cljs.core.__destructure_map(map__46041);
var sidebar_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46041__$1,new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672));
var sidebar_properties_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46041__$1,new cljs.core.Keyword(null,"sidebar-properties?","sidebar-properties?",606274147));
var and__5140__auto__ = frontend.config.lsp_enabled_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.not(class_QMARK_)) && (((cljs.core.not(sidebar_QMARK_)) && (cljs.core.not(sidebar_properties_QMARK_)))));
} else {
return and__5140__auto__;
}
});
frontend.components.property.prefer_exact_property_title_match = (function frontend$components$property$prefer_exact_property_title_match(results,input){
if(clojure.string.blank_QMARK_(input)){
return results;
} else {
var exact_title_QMARK_ = (function (item){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__46044 = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(item);
if((G__46044 == null)){
return null;
} else {
return clojure.string.lower_case(G__46044);
}
})(),clojure.string.lower_case(input));
});
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (item){
if(exact_title_QMARK_(item)){
return (0);
} else {
return (1);
}
}),results);
}
});
frontend.components.property.property_type_select = (function (){var render_fn__31744__auto__ = (function frontend$components$property$property_type_select(property,p__46046){
var map__46047 = p__46046;
var map__46047__$1 = cljs.core.__destructure_map(map__46047);
var opts = map__46047__$1;
var _STAR_show_class_select_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46047__$1,new cljs.core.Keyword(null,"*show-class-select?","*show-class-select?",-546938727));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46047__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var _STAR_show_new_property_config_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46047__$1,new cljs.core.Keyword(null,"*show-new-property-config?","*show-new-property-config?",-1054571618));
var show_type_change_hints_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46047__$1,new cljs.core.Keyword(null,"show-type-change-hints?","show-type-change-hints?",317068223));
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46047__$1,new cljs.core.Keyword(null,"block","block",664686210));
var _STAR_property_schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46047__$1,new cljs.core.Keyword(null,"*property-schema","*property-schema",-393273980));
var built_in_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46047__$1,new cljs.core.Keyword(null,"built-in?","built-in?",2078421512));
var class_schema_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46047__$1,new cljs.core.Keyword(null,"class-schema?","class-schema?",508813900));
var _STAR_property_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46047__$1,new cljs.core.Keyword(null,"*property-name","*property-name",1273599183));
var _STAR_property = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46047__$1,new cljs.core.Keyword(null,"*property","*property",1796678517));
var default_open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46047__$1,new cljs.core.Keyword(null,"default-open?","default-open?",-2082763144));
frontend.modules.shortcut.core.use_disable_all_shortcuts_BANG_();

var property_name = (function (){var or__5142__auto__ = (function (){var and__5140__auto__ = _STAR_property_name;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.deref(_STAR_property_name);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.db.frontend.property.built_in_display_title(property,frontend.context.i18n.t);
}
})();
var property_schema = (function (){var or__5142__auto__ = (function (){var and__5140__auto__ = _STAR_property_schema;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.deref(_STAR_property_schema);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.select_keys(property,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404)], null));
}
})();
var schema_types = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (type){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),frontend.components.property.config.property_type_label(type),new cljs.core.Keyword(null,"value","value",305978217),type], null);
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.property.type.user_built_in_property_types,(cljs.core.truth_(built_in_QMARK_)?logseq.db.frontend.property.type.internal_built_in_property_types:null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center"], null),(function (){var G__46049 = (function (){var G__46052 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-open","default-open",936459665),cljs.core.boolean$(default_open_QMARK_),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_,new cljs.core.Keyword(null,"on-value-change","on-value-change",-621835289),(function (v){
var type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(v));
var update_schema_fn = (function (p1__46045_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__46045_SHARP_,new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404),type);
});
if(cljs.core.truth_(_STAR_property_schema)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_property_schema,update_schema_fn);
} else {
}

var schema = (function (){var or__5142__auto__ = (function (){var and__5140__auto__ = _STAR_property_schema;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.deref(_STAR_property_schema);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return update_schema_fn(property_schema);
}
})();
if(cljs.core.truth_(_STAR_show_new_property_config_QMARK_)){
cljs.core.reset_BANG_(_STAR_show_new_property_config_QMARK_,new cljs.core.Keyword(null,"adding-property","adding-property",724640812));
} else {
}

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(block)?frontend.components.property._LT_add_property_from_dropdown(block,property_name,schema,opts):null)),(function (property_SINGLEQUOTE_){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = property_SINGLEQUOTE_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return property;
}
})()),(function (property__$1){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var and__5140__auto__ = frontend.util.entity.class_QMARK_(block);
if(cljs.core.truth_(and__5140__auto__)){
return class_schema_QMARK_;
} else {
return and__5140__auto__;
}
})()),(function (add_class_property_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(_STAR_property)?cljs.core.reset_BANG_(_STAR_property,property__$1):null)),(function (___21901__auto__){
return promesa.protocols._promise(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(_STAR_show_new_property_config_QMARK_)?cljs.core.reset_BANG_(_STAR_show_new_property_config_QMARK_,false):null)),(function (___21901__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(schema),new cljs.core.Keyword(null,"node","node",581201198)))?cljs.core.reset_BANG_(_STAR_show_class_select_QMARK_,true):null)),(function (___21901__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property.upsert_property_BANG_(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property__$1),schema,cljs.core.PersistentArrayMap.EMPTY)),(function (___21901__auto____$3){
return promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = _STAR_show_class_select_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.deref(_STAR_show_class_select_QMARK_);
} else {
return and__5140__auto__;
}
})())?null:(cljs.core.truth_(add_class_property_QMARK_)?(logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null)):((frontend.components.property.value.batch_operation_QMARK_())?null:(cljs.core.truth_((function (){var and__5140__auto__ = block;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655));
} else {
return and__5140__auto__;
}
})())?promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.ui.hide_popups_until_preview_popup_BANG_()),(function (___21901__auto____$4){
return promesa.protocols._promise((function (){var value = (function (){var temp__5827__auto__ = new cljs.core.Keyword("logseq.property","scalar-default-value","logseq.property/scalar-default-value",1595723014).cljs$core$IFn$_invoke$arity$1(property__$1);
if((temp__5827__auto__ == null)){
return false;
} else {
var value = temp__5827__auto__;
return value;
}
})();
return frontend.components.property.value._LT_add_property_BANG_.cljs$core$IFn$_invoke$arity$4(block,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property__$1),value,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exit-edit?","exit-edit?",1607853059),true], null));
})());
}));
})):(cljs.core.truth_((function (){var and__5140__auto__ = block;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"url","url",276297046),null], null), null),type)) && (cljs.core.not(cljs.core.seq(new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952).cljs$core$IFn$_invoke$arity$1(property__$1)))));
} else {
return and__5140__auto__;
}
})())?frontend.components.property.value._LT_create_new_block_BANG_.cljs$core$IFn$_invoke$arity$variadic(block,property__$1,"",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"batch-op?","batch-op?",-2122405648),true], null)], 0)):null))))));
}));
}));
}));
})));
}));
}));
}));
}));
}));
})], null);
if(cljs.core.truth_((function (){var and__5140__auto__ = _STAR_property_name;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property_schema);
} else {
return and__5140__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46052,new cljs.core.Keyword(null,"default-value","default-value",232220170),cljs.core.name(new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property_schema)));
} else {
return G__46052;
}
})();
var G__46050 = (function (){var G__46060 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"!px-2 !py-0 !h-8"], null);
var G__46061 = (function (){var G__46062 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","select-type-placeholder","property/select-type-placeholder",-1158917520)], 0))], null);
return (logseq.shui.ui.select_value.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.select_value.cljs$core$IFn$_invoke$arity$1(G__46062) : logseq.shui.ui.select_value.call(null,G__46062));
})();
return (logseq.shui.ui.select_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_trigger.cljs$core$IFn$_invoke$arity$2(G__46060,G__46061) : logseq.shui.ui.select_trigger.call(null,G__46060,G__46061));
})();
var G__46051 = (function (){var G__46063 = (function (){var G__46064 = (function (){var iter__5628__auto__ = (function frontend$components$property$property_type_select_$_iter__46065(s__46066){
return (new cljs.core.LazySeq(null,(function (){
var s__46066__$1 = s__46066;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__46066__$1);
if(temp__5825__auto__){
var s__46066__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46066__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__46066__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__46068 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__46067 = (0);
while(true){
if((i__46067 < size__5627__auto__)){
var map__46071 = cljs.core._nth(c__5626__auto__,i__46067);
var map__46071__$1 = cljs.core.__destructure_map(map__46071);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46071__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46071__$1,new cljs.core.Keyword(null,"value","value",305978217));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46071__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
cljs.core.chunk_append(b__46068,(function (){var G__46072 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),label,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (i__46067,map__46071,map__46071__$1,label,value,disabled,c__5626__auto__,size__5627__auto__,b__46068,s__46066__$2,temp__5825__auto__,G__46049,G__46050,property_name,property_schema,schema_types,map__46047,map__46047__$1,opts,_STAR_show_class_select_QMARK_,disabled_QMARK_,_STAR_show_new_property_config_QMARK_,show_type_change_hints_QMARK_,block,_STAR_property_schema,built_in_QMARK_,class_schema_QMARK_,_STAR_property_name,_STAR_property,default_open_QMARK_){
return (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",e.key)){
return frontend.util.stop_propagation(e);
} else {
return null;
}
});})(i__46067,map__46071,map__46071__$1,label,value,disabled,c__5626__auto__,size__5627__auto__,b__46068,s__46066__$2,temp__5825__auto__,G__46049,G__46050,property_name,property_schema,schema_types,map__46047,map__46047__$1,opts,_STAR_show_class_select_QMARK_,disabled_QMARK_,_STAR_show_new_property_config_QMARK_,show_type_change_hints_QMARK_,block,_STAR_property_schema,built_in_QMARK_,class_schema_QMARK_,_STAR_property_name,_STAR_property,default_open_QMARK_))
], null);
var G__46073 = label;
return (logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2(G__46072,G__46073) : logseq.shui.ui.select_item.call(null,G__46072,G__46073));
})());

var G__46450 = (i__46067 + (1));
i__46067 = G__46450;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46068),frontend$components$property$property_type_select_$_iter__46065(cljs.core.chunk_rest(s__46066__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46068),null);
}
} else {
var map__46076 = cljs.core.first(s__46066__$2);
var map__46076__$1 = cljs.core.__destructure_map(map__46076);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46076__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46076__$1,new cljs.core.Keyword(null,"value","value",305978217));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46076__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
return cljs.core.cons((function (){var G__46077 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),label,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (map__46076,map__46076__$1,label,value,disabled,s__46066__$2,temp__5825__auto__,G__46049,G__46050,property_name,property_schema,schema_types,map__46047,map__46047__$1,opts,_STAR_show_class_select_QMARK_,disabled_QMARK_,_STAR_show_new_property_config_QMARK_,show_type_change_hints_QMARK_,block,_STAR_property_schema,built_in_QMARK_,class_schema_QMARK_,_STAR_property_name,_STAR_property,default_open_QMARK_){
return (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",e.key)){
return frontend.util.stop_propagation(e);
} else {
return null;
}
});})(map__46076,map__46076__$1,label,value,disabled,s__46066__$2,temp__5825__auto__,G__46049,G__46050,property_name,property_schema,schema_types,map__46047,map__46047__$1,opts,_STAR_show_class_select_QMARK_,disabled_QMARK_,_STAR_show_new_property_config_QMARK_,show_type_change_hints_QMARK_,block,_STAR_property_schema,built_in_QMARK_,class_schema_QMARK_,_STAR_property_name,_STAR_property,default_open_QMARK_))
], null);
var G__46078 = label;
return (logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2(G__46077,G__46078) : logseq.shui.ui.select_item.call(null,G__46077,G__46078));
})(),frontend$components$property$property_type_select_$_iter__46065(cljs.core.rest(s__46066__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(schema_types);
})();
return (logseq.shui.ui.select_group.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.select_group.cljs$core$IFn$_invoke$arity$1(G__46064) : logseq.shui.ui.select_group.call(null,G__46064));
})();
return (logseq.shui.ui.select_content.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.select_content.cljs$core$IFn$_invoke$arity$1(G__46063) : logseq.shui.ui.select_content.call(null,G__46063));
})();
return (logseq.shui.ui.select.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.select.cljs$core$IFn$_invoke$arity$3(G__46049,G__46050,G__46051) : logseq.shui.ui.select.call(null,G__46049,G__46050,G__46051));
})(),(cljs.core.truth_(show_type_change_hints_QMARK_)?frontend.ui.tooltip(frontend.components.svg.info(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","type-change-warning","property/type-change-warning",-1778843540)], 0))], null)):null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$property_type_select__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46082 = cljs.core.first(args__31746__auto__);
var G__46083 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46082,G__46083) : io.factorhouse.hsx.core.obj_get.call(null,G__46082,G__46083));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"property-type-select","property-type-select",-1832271720,null),args__31746__auto__),frontend$components$property$property_type_select,args__31746__auto__,null);
}
};
var frontend$components$property$property_type_select = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46451__i = 0, G__46451__a = new Array(arguments.length -  0);
while (G__46451__i < G__46451__a.length) {G__46451__a[G__46451__i] = arguments[G__46451__i + 0]; ++G__46451__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46451__a,0,null);
} 
return frontend$components$property$property_type_select__delegate.call(this,args__31746__auto__);};
frontend$components$property$property_type_select.cljs$lang$maxFixedArity = 0;
frontend$components$property$property_type_select.cljs$lang$applyTo = (function (arglist__46452){
var args__31746__auto__ = cljs.core.seq(arglist__46452);
return frontend$components$property$property_type_select__delegate(args__31746__auto__);
});
frontend$components$property$property_type_select.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$property_type_select__delegate;
return frontend$components$property$property_type_select;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46084 = comp__31745__auto__;
var G__46085 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46084,G__46085) : io.factorhouse.hsx.core.react_memo.call(null,G__46084,G__46085));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"property-type-select");

return comp__31745__auto__;
})();
frontend.components.property.property_select = (function (){var render_fn__31744__auto__ = (function frontend$components$property$property_select(select_opts){
var vec__46090 = logseq.shui.hooks.use_state(null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46090,(0),null);
var set_properties_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46090,(1),null);
var vec__46093 = logseq.shui.hooks.use_state("");
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46093,(0),null);
var set_q_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46093,(1),null);
logseq.shui.hooks.use_effect_BANG_((function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword(null,"class-schema?","class-schema?",508813900).cljs$core$IFn$_invoke$arity$1(select_opts))?frontend.handler.property.get_class_property_choices():frontend.db.async._LT_get_all_properties.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"remove-ui-non-suitable-properties?","remove-ui-non-suitable-properties?",603866281),true,new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(select_opts)], 0)))),(function (properties__$1){
return promesa.protocols._promise((set_properties_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_properties_BANG_.cljs$core$IFn$_invoke$arity$1(properties__$1) : set_properties_BANG_.call(null,properties__$1)));
}));
}));
}),cljs.core.PersistentVector.EMPTY);

logseq.shui.hooks.use_effect_BANG_((function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.get_current_repo()),(function (repo){
return promesa.protocols._mcat(promesa.protocols._promise(((clojure.string.blank_QMARK_(q))?null:frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,q,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0)))),(function (block){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.util.entity.internal_page_QMARK_(block)),(function (internal_page_exists_QMARK_){
return promesa.protocols._promise((cljs.core.truth_(internal_page_exists_QMARK_)?(function (){var G__46096 = cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword(null,"convert-page-to-property?","convert-page-to-property?",341733040),true),properties);
return (set_properties_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_properties_BANG_.cljs$core$IFn$_invoke$arity$1(G__46096) : set_properties_BANG_.call(null,G__46096));
})():null));
}));
}));
}));
}));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [q], null));

var transform_fn = new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327).cljs$core$IFn$_invoke$arity$1(select_opts);
var items = (function (){var G__46097 = (function (item){
var or__5142__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(item);
}
});
var G__46098 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
var convert_QMARK_ = new cljs.core.Keyword(null,"convert-page-to-property?","convert-page-to-property?",341733040).cljs$core$IFn$_invoke$arity$1(x);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"label","label",1718410804),(cljs.core.truth_(convert_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","convert-page-to-property","property/convert-page-to-property",-647375917),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(x)], 0)):(function (){var property_title = (function (){var or__5142__auto__ = logseq.db.frontend.property.built_in_display_title(x,frontend.context.i18n.t);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(x);
}
})();
var ident = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(x);
var ns_SINGLEQUOTE_ = (function (){var G__46099 = ident;
if((G__46099 == null)){
return null;
} else {
return cljs.core.namespace(G__46099);
}
})();
var plugin_QMARK_ = (function (){var G__46100 = ident;
if((G__46100 == null)){
return null;
} else {
return logseq.api.block.plugin_property_key_QMARK_(G__46100);
}
})();
var _plugin_name = (function (){var and__5140__auto__ = plugin_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.second(cljs.core.re_find(/^plugin\.property\.([^.]+)/,ns_SINGLEQUOTE_));
} else {
return and__5140__auto__;
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.gap-1.items-center","span.flex.gap-1.items-center",1593939632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ident))], null),(cljs.core.truth_(plugin_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pt-1","span.pt-1",254343170),logseq.shui.ui.tabler_icon("puzzle",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(15),new cljs.core.Keyword(null,"class","class",-2030961996),"opacity-40"], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pt-1","span.pt-1",254343170),logseq.shui.ui.tabler_icon("letter-t",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(15),new cljs.core.Keyword(null,"class","class",-2030961996),"opacity-40"], null))], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.font-normal","strong.font-normal",521441352),property_title,(cljs.core.truth_(plugin_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ml-1.text-xs.opacity-40","span.ml-1.text-xs.opacity-40",2049359625),(""+""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(_plugin_name))], null):null)], null)], null);
})()),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5142__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(x);
}
})(),new cljs.core.Keyword(null,"property","property",-1114278232),x,new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword("block","title","block/title",710445684),(function (){var or__5142__auto__ = logseq.db.frontend.property.built_in_display_title(x,frontend.context.i18n.t);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(x);
}
})(),new cljs.core.Keyword(null,"convert-page-to-property?","convert-page-to-property?",341733040),convert_QMARK_], null);
}),properties);
return (frontend.util.distinct_by_last_wins.cljs$core$IFn$_invoke$arity$2 ? frontend.util.distinct_by_last_wins.cljs$core$IFn$_invoke$arity$2(G__46097,G__46098) : frontend.util.distinct_by_last_wins.call(null,G__46097,G__46098));
})();
var property_transform_fn = (function (results,input){
var results__$1 = frontend.components.property.prefer_exact_property_title_match(results,input);
var tags_item = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tags",clojure.string.lower_case((function (){var or__5142__auto__ = input;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})())))?cljs.core.some((function (p1__46086_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(p1__46086_SHARP_))){
return p1__46086_SHARP_;
} else {
return null;
}
}),items):null);
var results__$2 = (cljs.core.truth_(tags_item)?cljs.core.cons(tags_item,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__46089_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(p1__46089_SHARP_));
}),results__$1)):results__$1);
var G__46101 = results__$2;
if(cljs.core.fn_QMARK_(transform_fn)){
return (transform_fn.cljs$core$IFn$_invoke$arity$2 ? transform_fn.cljs$core$IFn$_invoke$arity$2(G__46101,input) : transform_fn.call(null,G__46101,input));
} else {
return G__46101;
}
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-property-add.flex.flex-row.items-center.property-key","div.ls-property-add.flex.flex-row.items-center.property-key",-1811514259),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-keep-selection","data-keep-selection",-2035432191),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-property-key","div.ls-property-key",-1181286783),frontend.components.select.select(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"dropdown?","dropdown?",-1027769147),new cljs.core.Keyword(null,"show-new-when-not-exact-match?","show-new-when-not-exact-match?",1510536201),new cljs.core.Keyword(null,"new-case-sensitive?","new-case-sensitive?",-581012500),new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),new cljs.core.Keyword(null,"input-default-placeholder","input-default-placeholder",-1040139250),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),new cljs.core.Keyword(null,"close-modal?","close-modal?",-207518383),new cljs.core.Keyword(null,"grouped?","grouped?",531080948),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword(null,"on-input","on-input",-267523366)],[false,true,true,new cljs.core.Keyword("block","title","block/title",710445684),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","add-or-change","property/add-or-change",80450856)], 0)),property_transform_fn,false,true,items,set_q_BANG_]),select_opts], 0)))], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$property_select__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46102 = cljs.core.first(args__31746__auto__);
var G__46103 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46102,G__46103) : io.factorhouse.hsx.core.obj_get.call(null,G__46102,G__46103));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"property-select","property-select",636280284,null),args__31746__auto__),frontend$components$property$property_select,args__31746__auto__,null);
}
};
var frontend$components$property$property_select = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46454__i = 0, G__46454__a = new Array(arguments.length -  0);
while (G__46454__i < G__46454__a.length) {G__46454__a[G__46454__i] = arguments[G__46454__i + 0]; ++G__46454__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46454__a,0,null);
} 
return frontend$components$property$property_select__delegate.call(this,args__31746__auto__);};
frontend$components$property$property_select.cljs$lang$maxFixedArity = 0;
frontend$components$property$property_select.cljs$lang$applyTo = (function (arglist__46455){
var args__31746__auto__ = cljs.core.seq(arglist__46455);
return frontend$components$property$property_select__delegate(args__31746__auto__);
});
frontend$components$property$property_select.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$property_select__delegate;
return frontend$components$property$property_select;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46104 = comp__31745__auto__;
var G__46105 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46104,G__46105) : io.factorhouse.hsx.core.react_memo.call(null,G__46104,G__46105));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"property-select");

return comp__31745__auto__;
})();
frontend.components.property.property_icon = (function (){var render_fn__31744__auto__ = (function frontend$components$property$property_icon(property,property_type){
var type = (function (){var or__5142__auto__ = new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = property_type;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
}
})();
var ident = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property);
var icon = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ident,new cljs.core.Keyword("block","tags","block/tags",1814948340)))?"hash":((clojure.string.starts_with_QMARK_((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ident)),":plugin."))?"puzzle":(function (){var G__46106 = type;
var G__46106__$1 = (((G__46106 instanceof cljs.core.Keyword))?G__46106.fqn:null);
switch (G__46106__$1) {
case "number":
return "number";

break;
case "date":
return "calendar";

break;
case "datetime":
return "calendar";

break;
case "checkbox":
return "checkbox";

break;
case "url":
return "link";

break;
case "property":
return "letter-p";

break;
case "page":
return "page";

break;
case "node":
return "point-filled";

break;
case "asset":
return "letter-a";

break;
default:
return null;

}
})()
));
if(cljs.core.truth_(icon)){
return frontend.ui.icon(icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"opacity-50",new cljs.core.Keyword(null,"size","size",1098693007),(15)], null));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bullet-container","span.bullet-container",-1847146553),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bullet","span.bullet",1911638461)], null)], null);
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$property_icon__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46107 = cljs.core.first(args__31746__auto__);
var G__46108 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46107,G__46108) : io.factorhouse.hsx.core.obj_get.call(null,G__46107,G__46108));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"property-icon","property-icon",-667872621,null),args__31746__auto__),frontend$components$property$property_icon,args__31746__auto__,null);
}
};
var frontend$components$property$property_icon = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46457__i = 0, G__46457__a = new Array(arguments.length -  0);
while (G__46457__i < G__46457__a.length) {G__46457__a[G__46457__i] = arguments[G__46457__i + 0]; ++G__46457__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46457__a,0,null);
} 
return frontend$components$property$property_icon__delegate.call(this,args__31746__auto__);};
frontend$components$property$property_icon.cljs$lang$maxFixedArity = 0;
frontend$components$property$property_icon.cljs$lang$applyTo = (function (arglist__46458){
var args__31746__auto__ = cljs.core.seq(arglist__46458);
return frontend$components$property$property_icon__delegate(args__31746__auto__);
});
frontend$components$property$property_icon.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$property_icon__delegate;
return frontend$components$property$property_icon;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46109 = comp__31745__auto__;
var G__46110 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46109,G__46110) : io.factorhouse.hsx.core.react_memo.call(null,G__46109,G__46110));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"property-icon");

return comp__31745__auto__;
})();
frontend.components.property.property_input_on_chosen = (function frontend$components$property$property_input_on_chosen(block,_STAR_property,_STAR_property_key,_STAR_show_new_property_config_QMARK_,p__46111){
var map__46112 = p__46111;
var map__46112__$1 = cljs.core.__destructure_map(map__46112);
var class_schema_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46112__$1,new cljs.core.Keyword(null,"class-schema?","class-schema?",508813900));
var remove_property_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46112__$1,new cljs.core.Keyword(null,"remove-property?","remove-property?",-521702287));
var view_parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46112__$1,new cljs.core.Keyword(null,"view-parent","view-parent",675596601));
return (function (p__46113){
var map__46114 = p__46113;
var map__46114__$1 = cljs.core.__destructure_map(map__46114);
var selected_property = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46114__$1,new cljs.core.Keyword(null,"property","property",-1114278232));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46114__$1,new cljs.core.Keyword(null,"value","value",305978217));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46114__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var convert_page_to_property_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46114__$1,new cljs.core.Keyword(null,"convert-page-to-property?","convert-page-to-property?",341733040));
if(cljs.core.truth_((function (){var and__5140__auto__ = convert_page_to_property_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.components.property.namespaced_page_for_property_convert_QMARK_(selected_property);
} else {
return and__5140__auto__;
}
})())){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page.convert","page-to-property-namespaced","page.convert/page-to-property-namespaced",2070677392)], 0)),new cljs.core.Keyword(null,"error","error",-978969032),false);

return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(selected_property),(function (property){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.reset_BANG_(_STAR_property_key,(cljs.core.truth_(property)?(cljs.core.truth_(convert_page_to_property_QMARK_)?new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(property):label):value))),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.property.value.batch_operation_QMARK_()),(function (batch_QMARK_){
return promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = property;
if(cljs.core.truth_(and__5140__auto__)){
return remove_property_QMARK_;
} else {
return and__5140__auto__;
}
})())?(function (){var block_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),frontend.components.property.value.get_operating_blocks(block));
frontend.handler.property.batch_remove_block_property_BANG_.cljs$core$IFn$_invoke$arity$variadic(block_ids,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"preserve-task-tag?","preserve-task-tag?",422655630),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.class","Task","logseq.class/Task",-1282181457),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(view_parent))], null)], 0));

return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
})():(function (){
if(cljs.core.truth_((function (){var and__5140__auto__ = _STAR_show_new_property_config_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(frontend.util.entity.property_QMARK_(property));
} else {
return and__5140__auto__;
}
})())){
cljs.core.reset_BANG_(_STAR_show_new_property_config_QMARK_,true);
} else {
}

cljs.core.reset_BANG_(_STAR_property,property);

if(cljs.core.truth_(convert_page_to_property_QMARK_)){
return null;
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = property;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.util.entity.property_QMARK_(property);
} else {
return and__5140__auto__;
}
})())){
var add_class_property_QMARK_ = (function (){var and__5140__auto__ = frontend.util.entity.class_QMARK_(block);
if(cljs.core.truth_(and__5140__auto__)){
return class_schema_QMARK_;
} else {
return and__5140__auto__;
}
})();
var type = new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property);
var default_or_url_QMARK_ = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"url","url",276297046),null], null), null),type)) && (cljs.core.not(cljs.core.seq(new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952).cljs$core$IFn$_invoke$arity$1(property)))));
if(cljs.core.truth_(add_class_property_QMARK_)){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.property.value._LT_add_property_BANG_.cljs$core$IFn$_invoke$arity$4(block,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),"",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-schema?","class-schema?",508813900),class_schema_QMARK_], null))),(function (___21901__auto__){
return promesa.protocols._promise((logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null)));
}));
}));
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = batch_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var or__5142__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),type);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto____$1 = batch_QMARK_;
if(cljs.core.truth_(and__5140__auto____$1)){
return default_or_url_QMARK_;
} else {
return and__5140__auto____$1;
}
}
} else {
return and__5140__auto__;
}
})())){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),type)){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.ui.hide_popups_until_preview_popup_BANG_()),(function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null))),(function (___21901__auto____$1){
return promesa.protocols._promise((function (){var value__$1 = (function (){var temp__5827__auto__ = new cljs.core.Keyword("logseq.property","scalar-default-value","logseq.property/scalar-default-value",1595723014).cljs$core$IFn$_invoke$arity$1(property);
if((temp__5827__auto__ == null)){
return false;
} else {
var value__$1 = temp__5827__auto__;
return value__$1;
}
})();
return frontend.components.property.value._LT_add_property_BANG_.cljs$core$IFn$_invoke$arity$4(block,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),value__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exit-edit?","exit-edit?",1607853059),true], null));
})());
}));
}));
}));
} else {
if(default_or_url_QMARK_){
return frontend.components.property.value._LT_create_new_block_BANG_.cljs$core$IFn$_invoke$arity$variadic(block,property,"",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"batch-op?","batch-op?",-2122405648),true], null)], 0));
} else {
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),type)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),type)) && (cljs.core.seq(new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952).cljs$core$IFn$_invoke$arity$1(property))))))){
return cljs.core.reset_BANG_(_STAR_show_new_property_config_QMARK_,false);
} else {
return null;
}
}
}
}
}
} else {
return null;
}
}
})()
));
}));
}));
}));
}));
}
});
});
frontend.components.property.property_description_title = (function frontend$components$property$property_description_title(property){
return new cljs.core.Keyword("logseq.property","description-title","logseq.property/description-title",-495212427).cljs$core$IFn$_invoke$arity$1(property);
});
frontend.components.property.property_key_title = (function (){var render_fn__31744__auto__ = (function frontend$components$property$property_key_title(block,property,class_schema_QMARK_){
var title = logseq.db.frontend.property.built_in_display_title(property,frontend.context.i18n.t);
var description = frontend.components.property.property_description_title(property);
var key_title = (function (){var G__46115 = new cljs.core.Keyword(null,"a","a",-2123407586);
var G__46116 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(0),new cljs.core.Keyword(null,"class","class",-2030961996),"property-k flex select-none jtrigger w-full",new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
if(cljs.core.truth_(frontend.util.meta_key_QMARK_(e))){
frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(property));

return e.preventDefault();
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(cljs.core.truth_(frontend.util.meta_key_QMARK_(e))){
return null;
} else {
var G__46118 = e.target;
var G__46119 = (function (){
return frontend.components.property.config.property_dropdown(property,block,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"debug?","debug?",-1831756173),e.altKey,new cljs.core.Keyword(null,"class-schema?","class-schema?",508813900),class_schema_QMARK_], null));
});
var G__46120 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"ls-property-dropdown as-root",new cljs.core.Keyword(null,"onEscapeKeyDown","onEscapeKeyDown",1908839912),(function (e__$1){
frontend.util.stop(e__$1);

(logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));

var temp__5825__auto__ = frontend.state.get_input();
if(cljs.core.truth_(temp__5825__auto__)){
var input = temp__5825__auto__;
return input.focus();
} else {
return null;
}
})], null),new cljs.core.Keyword(null,"align","align",1964212802),"start",new cljs.core.Keyword(null,"dropdown-menu?","dropdown-menu?",-682398029),true,new cljs.core.Keyword(null,"as-dropdown?","as-dropdown?",-37553558),true], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__46118,G__46119,G__46120) : logseq.shui.ui.popup_show_BANG_.call(null,G__46118,G__46119,G__46120));
}
})], null);
var G__46117 = title;
return (logseq.shui.ui.trigger_as.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.trigger_as.cljs$core$IFn$_invoke$arity$3(G__46115,G__46116,G__46117) : logseq.shui.ui.trigger_as.call(null,G__46115,G__46116,G__46117));
})();
if(clojure.string.blank_QMARK_(description)){
return key_title;
} else {
return frontend.ui.tooltip(key_title,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.max-w-96.whitespace-pre-wrap","div.max-w-96.whitespace-pre-wrap",-863605252),description], null));
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$property_key_title__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46127 = cljs.core.first(args__31746__auto__);
var G__46128 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46127,G__46128) : io.factorhouse.hsx.core.obj_get.call(null,G__46127,G__46128));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"property-key-title","property-key-title",162199887,null),args__31746__auto__),frontend$components$property$property_key_title,args__31746__auto__,null);
}
};
var frontend$components$property$property_key_title = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46459__i = 0, G__46459__a = new Array(arguments.length -  0);
while (G__46459__i < G__46459__a.length) {G__46459__a[G__46459__i] = arguments[G__46459__i + 0]; ++G__46459__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46459__a,0,null);
} 
return frontend$components$property$property_key_title__delegate.call(this,args__31746__auto__);};
frontend$components$property$property_key_title.cljs$lang$maxFixedArity = 0;
frontend$components$property$property_key_title.cljs$lang$applyTo = (function (arglist__46460){
var args__31746__auto__ = cljs.core.seq(arglist__46460);
return frontend$components$property$property_key_title__delegate(args__31746__auto__);
});
frontend$components$property$property_key_title.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$property_key_title__delegate;
return frontend$components$property$property_key_title;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46129 = comp__31745__auto__;
var G__46130 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46129,G__46130) : io.factorhouse.hsx.core.react_memo.call(null,G__46129,G__46130));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"property-key-title");

return comp__31745__auto__;
})();
frontend.components.property.property_key_cp = (function (){var render_fn__31744__auto__ = (function frontend$components$property$property_key_cp(block,property,p__46132){
var map__46133 = p__46132;
var map__46133__$1 = cljs.core.__destructure_map(map__46133);
var other_position_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46133__$1,new cljs.core.Keyword(null,"other-position?","other-position?",-1396628322));
var class_schema_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46133__$1,new cljs.core.Keyword(null,"class-schema?","class-schema?",508813900));
var icon = new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285).cljs$core$IFn$_invoke$arity$1(property);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.property-key-inner.jtrigger-view","div.property-key-inner.jtrigger-view",-1740212964),(cljs.core.truth_(other_position_QMARK_)?null:(function (){var content_fn = (function (p__46134){
var map__46135 = p__46134;
var map__46135__$1 = cljs.core.__destructure_map(map__46135);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46135__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return frontend.components.icon.icon_search(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (_e,icon__$1){
if(cljs.core.truth_(icon__$1)){
frontend.handler.db_based.property.set_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285),icon__$1);
} else {
frontend.handler.db_based.property.remove_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285));
}

return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(id) : logseq.shui.ui.popup_hide_BANG_.call(null,id));
}),new cljs.core.Keyword(null,"icon-value","icon-value",-510636889),icon,new cljs.core.Keyword(null,"del-btn?","del-btn?",-1094924362),cljs.core.boolean$(icon)], null));
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.property-icon","div.property-icon",1069463696),(function (){var G__46136 = new cljs.core.Keyword(null,"button.property-m","button.property-m",-373431520);
var G__46137 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(((frontend.config.publishing_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var G__46139 = e.target;
var G__46140 = content_fn;
var G__46141 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"as-dropdown?","as-dropdown?",-37553558),true,new cljs.core.Keyword(null,"auto-focus?","auto-focus?",1021654593),true,new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onEscapeKeyDown","onEscapeKeyDown",1908839912),(function (p1__46131_SHARP_){
return p1__46131_SHARP_.preventDefault();
})], null)], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__46139,G__46140,G__46141) : logseq.shui.ui.popup_show_BANG_.call(null,G__46139,G__46140,G__46141));
})], null)),new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center");
var G__46138 = (cljs.core.truth_(icon)?frontend.components.icon.icon.cljs$core$IFn$_invoke$arity$variadic(icon,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(15),new cljs.core.Keyword(null,"color?","color?",-1891974356),true], null)], 0)):frontend.components.property.property_icon(property,null));
return (logseq.shui.ui.trigger_as.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.trigger_as.cljs$core$IFn$_invoke$arity$3(G__46136,G__46137,G__46138) : logseq.shui.ui.trigger_as.call(null,G__46136,G__46137,G__46138));
})()], null);
})()),((frontend.config.publishing_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.property-k.flex.select-none.jtrigger","a.property-k.flex.select-none.jtrigger",1580488048),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(property));
})], null),logseq.db.frontend.property.built_in_display_title(property,frontend.context.i18n.t)], null):frontend.components.property.property_key_title(block,property,class_schema_QMARK_))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$property_key_cp__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46142 = cljs.core.first(args__31746__auto__);
var G__46143 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46142,G__46143) : io.factorhouse.hsx.core.obj_get.call(null,G__46142,G__46143));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"property-key-cp","property-key-cp",1304863312,null),args__31746__auto__),frontend$components$property$property_key_cp,args__31746__auto__,null);
}
};
var frontend$components$property$property_key_cp = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46461__i = 0, G__46461__a = new Array(arguments.length -  0);
while (G__46461__i < G__46461__a.length) {G__46461__a[G__46461__i] = arguments[G__46461__i + 0]; ++G__46461__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46461__a,0,null);
} 
return frontend$components$property$property_key_cp__delegate.call(this,args__31746__auto__);};
frontend$components$property$property_key_cp.cljs$lang$maxFixedArity = 0;
frontend$components$property$property_key_cp.cljs$lang$applyTo = (function (arglist__46462){
var args__31746__auto__ = cljs.core.seq(arglist__46462);
return frontend$components$property$property_key_cp__delegate(args__31746__auto__);
});
frontend$components$property$property_key_cp.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$property_key_cp__delegate;
return frontend$components$property$property_key_cp;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46144 = comp__31745__auto__;
var G__46145 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46144,G__46145) : io.factorhouse.hsx.core.react_memo.call(null,G__46144,G__46145));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"property-key-cp");

return comp__31745__auto__;
})();
frontend.components.property.bidirectional_values_cp = (function (){var render_fn__31744__auto__ = (function frontend$components$property$bidirectional_values_cp(entity_uuids){
var blocks_container = frontend.state.get_component(new cljs.core.Keyword("block","blocks-container","block/blocks-container",409697112));
var container_id = frontend.state.use_container_id.cljs$core$IFn$_invoke$arity$0();
var config = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"default-collapsed?","default-collapsed?",-1350393823),new cljs.core.Keyword(null,"hide-block-icon?","hide-block-icon?",-1943840601),new cljs.core.Keyword(null,"bidirectional?","bidirectional?",-1903635769),new cljs.core.Keyword(null,"hide-block-tags?","hide-block-tags?",1725570958),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"container-id","container-id",1274665684),new cljs.core.Keyword(null,"page-title?","page-title?",534381078),new cljs.core.Keyword(null,"ref?","ref?",1932693720),new cljs.core.Keyword(null,"editor-box","editor-box",708759870)],[true,true,true,true,(""+"bidirectional-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(container_id)),container_id,false,true,frontend.state.get_component(new cljs.core.Keyword("editor","box","editor/box",-1921770435))]);
if(cljs.core.truth_((function (){var and__5140__auto__ = blocks_container;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.seq(entity_uuids);
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-bidirectional-block-container.w-full","div.ls-bidirectional-block-container.w-full",268927131),(blocks_container.cljs$core$IFn$_invoke$arity$2 ? blocks_container.cljs$core$IFn$_invoke$arity$2(config,entity_uuids) : blocks_container.call(null,config,entity_uuids))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-60","span.opacity-60",-1080417386),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.filter","empty","view.filter/empty",1520428739)], 0))], null);
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$bidirectional_values_cp__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46148 = cljs.core.first(args__31746__auto__);
var G__46149 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46148,G__46149) : io.factorhouse.hsx.core.obj_get.call(null,G__46148,G__46149));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"bidirectional-values-cp","bidirectional-values-cp",1982351872,null),args__31746__auto__),frontend$components$property$bidirectional_values_cp,args__31746__auto__,null);
}
};
var frontend$components$property$bidirectional_values_cp = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46463__i = 0, G__46463__a = new Array(arguments.length -  0);
while (G__46463__i < G__46463__a.length) {G__46463__a[G__46463__i] = arguments[G__46463__i + 0]; ++G__46463__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46463__a,0,null);
} 
return frontend$components$property$bidirectional_values_cp__delegate.call(this,args__31746__auto__);};
frontend$components$property$bidirectional_values_cp.cljs$lang$maxFixedArity = 0;
frontend$components$property$bidirectional_values_cp.cljs$lang$applyTo = (function (arglist__46464){
var args__31746__auto__ = cljs.core.seq(arglist__46464);
return frontend$components$property$bidirectional_values_cp__delegate(args__31746__auto__);
});
frontend$components$property$bidirectional_values_cp.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$bidirectional_values_cp__delegate;
return frontend$components$property$bidirectional_values_cp;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46150 = comp__31745__auto__;
var G__46151 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46150,G__46151) : io.factorhouse.hsx.core.react_memo.call(null,G__46150,G__46151));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"bidirectional-values-cp");

return comp__31745__auto__;
})();
frontend.components.property.icon_id = (function frontend$components$property$icon_id(icon){
if(typeof icon === 'string'){
return icon;
} else {
if((icon instanceof cljs.core.Keyword)){
return cljs.core.name(icon);
} else {
if(cljs.core.map_QMARK_(icon)){
var or__5142__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(icon);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(icon,"id");
}
} else {
return null;
}
}
}
});
frontend.components.property.bidirectional_tab_icon = (function frontend$components$property$bidirectional_tab_icon(class$){
var icon = (function (){var or__5142__auto__ = new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285).cljs$core$IFn$_invoke$arity$1(class$);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.some(new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(class$)));
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = icon;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("hash",frontend.components.property.icon_id(icon));
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inline-flex.items-center.shrink-0","span.inline-flex.items-center.shrink-0",-1950946888),frontend.components.icon.icon.cljs$core$IFn$_invoke$arity$variadic(icon,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(16),new cljs.core.Keyword(null,"color?","color?",-1891974356),true], null)], 0))], null);
} else {
return null;
}
});
frontend.components.property.bidirectional_property_group = (function (){var render_fn__31744__auto__ = (function frontend$components$property$bidirectional_property_group(value,class_uuid,entity_uuids){
var class$ = frontend.db.hooks.use_block(class_uuid);
if(cljs.core.truth_(class$)){
var G__46152 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"bidirectional-tab-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"class","class",-2030961996),"px-0 py-1 text-base text-foreground",new cljs.core.Keyword(null,"data-entity-count","data-entity-count",226149182),cljs.core.count(entity_uuids)], null);
var G__46153 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inline-flex.items-center.gap-1.5","span.inline-flex.items-center.gap-1.5",1346868156),frontend.components.property.bidirectional_tab_icon(class$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(class$)], null)], null);
return (logseq.shui.ui.tabs_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.tabs_trigger.cljs$core$IFn$_invoke$arity$2(G__46152,G__46153) : logseq.shui.ui.tabs_trigger.call(null,G__46152,G__46153));
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$bidirectional_property_group__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46157 = cljs.core.first(args__31746__auto__);
var G__46158 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46157,G__46158) : io.factorhouse.hsx.core.obj_get.call(null,G__46157,G__46158));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"bidirectional-property-group","bidirectional-property-group",-1928846701,null),args__31746__auto__),frontend$components$property$bidirectional_property_group,args__31746__auto__,null);
}
};
var frontend$components$property$bidirectional_property_group = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46465__i = 0, G__46465__a = new Array(arguments.length -  0);
while (G__46465__i < G__46465__a.length) {G__46465__a[G__46465__i] = arguments[G__46465__i + 0]; ++G__46465__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46465__a,0,null);
} 
return frontend$components$property$bidirectional_property_group__delegate.call(this,args__31746__auto__);};
frontend$components$property$bidirectional_property_group.cljs$lang$maxFixedArity = 0;
frontend$components$property$bidirectional_property_group.cljs$lang$applyTo = (function (arglist__46467){
var args__31746__auto__ = cljs.core.seq(arglist__46467);
return frontend$components$property$bidirectional_property_group__delegate(args__31746__auto__);
});
frontend$components$property$bidirectional_property_group.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$bidirectional_property_group__delegate;
return frontend$components$property$bidirectional_property_group;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46159 = comp__31745__auto__;
var G__46160 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46159,G__46160) : io.factorhouse.hsx.core.react_memo.call(null,G__46159,G__46160));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"bidirectional-property-group");

return comp__31745__auto__;
})();
frontend.components.property.bidirectional_properties_section = (function (){var render_fn__31744__auto__ = (function frontend$components$property$bidirectional_properties_section(groups){
if(cljs.core.seq(groups)){
var groups__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__46168){
var map__46169 = p__46168;
var map__46169__$1 = cljs.core.__destructure_map(map__46169);
var group = map__46169__$1;
var class_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46169__$1,new cljs.core.Keyword(null,"class-uuid","class-uuid",-176096828));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(group,new cljs.core.Keyword(null,"value","value",305978217),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_uuid)));
}),groups);
var default_value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.first(groups__$1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full.ls-bidirectional-properties.mt-8","div.w-full.ls-bidirectional-properties.mt-8",-1810227344),(function (){var G__46170 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),default_value,new cljs.core.Keyword(null,"class","class",-2030961996),"w-full"], null);
var G__46171 = (function (){var G__46173 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"class","class",-2030961996),"h-8 gap-3"], null);
var G__46174 = (function (){var iter__5628__auto__ = (function frontend$components$property$bidirectional_properties_section_$_iter__46175(s__46176){
return (new cljs.core.LazySeq(null,(function (){
var s__46176__$1 = s__46176;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__46176__$1);
if(temp__5825__auto__){
var s__46176__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46176__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__46176__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__46178 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__46177 = (0);
while(true){
if((i__46177 < size__5627__auto__)){
var map__46179 = cljs.core._nth(c__5626__auto__,i__46177);
var map__46179__$1 = cljs.core.__destructure_map(map__46179);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46179__$1,new cljs.core.Keyword(null,"value","value",305978217));
var class_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46179__$1,new cljs.core.Keyword(null,"class-uuid","class-uuid",-176096828));
var entity_uuids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46179__$1,new cljs.core.Keyword(null,"entity-uuids","entity-uuids",1205737779));
cljs.core.chunk_append(b__46178,frontend.components.property.bidirectional_property_group(value,class_uuid,entity_uuids));

var G__46468 = (i__46177 + (1));
i__46177 = G__46468;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46178),frontend$components$property$bidirectional_properties_section_$_iter__46175(cljs.core.chunk_rest(s__46176__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46178),null);
}
} else {
var map__46180 = cljs.core.first(s__46176__$2);
var map__46180__$1 = cljs.core.__destructure_map(map__46180);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46180__$1,new cljs.core.Keyword(null,"value","value",305978217));
var class_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46180__$1,new cljs.core.Keyword(null,"class-uuid","class-uuid",-176096828));
var entity_uuids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46180__$1,new cljs.core.Keyword(null,"entity-uuids","entity-uuids",1205737779));
return cljs.core.cons(frontend.components.property.bidirectional_property_group(value,class_uuid,entity_uuids),frontend$components$property$bidirectional_properties_section_$_iter__46175(cljs.core.rest(s__46176__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(groups__$1);
})();
return (logseq.shui.ui.tabs_list.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.tabs_list.cljs$core$IFn$_invoke$arity$2(G__46173,G__46174) : logseq.shui.ui.tabs_list.call(null,G__46173,G__46174));
})();
var G__46172 = (function (){var iter__5628__auto__ = (function frontend$components$property$bidirectional_properties_section_$_iter__46181(s__46182){
return (new cljs.core.LazySeq(null,(function (){
var s__46182__$1 = s__46182;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__46182__$1);
if(temp__5825__auto__){
var s__46182__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46182__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__46182__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__46184 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__46183 = (0);
while(true){
if((i__46183 < size__5627__auto__)){
var map__46185 = cljs.core._nth(c__5626__auto__,i__46183);
var map__46185__$1 = cljs.core.__destructure_map(map__46185);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46185__$1,new cljs.core.Keyword(null,"value","value",305978217));
var entity_uuids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46185__$1,new cljs.core.Keyword(null,"entity-uuids","entity-uuids",1205737779));
cljs.core.chunk_append(b__46184,(function (){var G__46186 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"bidirectional-tab-content-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)),new cljs.core.Keyword(null,"value","value",305978217),value], null);
var G__46187 = frontend.components.property.bidirectional_values_cp(entity_uuids);
return (logseq.shui.ui.tabs_content.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.tabs_content.cljs$core$IFn$_invoke$arity$2(G__46186,G__46187) : logseq.shui.ui.tabs_content.call(null,G__46186,G__46187));
})());

var G__46470 = (i__46183 + (1));
i__46183 = G__46470;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46184),frontend$components$property$bidirectional_properties_section_$_iter__46181(cljs.core.chunk_rest(s__46182__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46184),null);
}
} else {
var map__46188 = cljs.core.first(s__46182__$2);
var map__46188__$1 = cljs.core.__destructure_map(map__46188);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46188__$1,new cljs.core.Keyword(null,"value","value",305978217));
var entity_uuids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46188__$1,new cljs.core.Keyword(null,"entity-uuids","entity-uuids",1205737779));
return cljs.core.cons((function (){var G__46189 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"bidirectional-tab-content-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)),new cljs.core.Keyword(null,"value","value",305978217),value], null);
var G__46190 = frontend.components.property.bidirectional_values_cp(entity_uuids);
return (logseq.shui.ui.tabs_content.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.tabs_content.cljs$core$IFn$_invoke$arity$2(G__46189,G__46190) : logseq.shui.ui.tabs_content.call(null,G__46189,G__46190));
})(),frontend$components$property$bidirectional_properties_section_$_iter__46181(cljs.core.rest(s__46182__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(groups__$1);
})();
return (logseq.shui.ui.tabs.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.tabs.cljs$core$IFn$_invoke$arity$3(G__46170,G__46171,G__46172) : logseq.shui.ui.tabs.call(null,G__46170,G__46171,G__46172));
})()], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$bidirectional_properties_section__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46191 = cljs.core.first(args__31746__auto__);
var G__46192 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46191,G__46192) : io.factorhouse.hsx.core.obj_get.call(null,G__46191,G__46192));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"bidirectional-properties-section","bidirectional-properties-section",1639937249,null),args__31746__auto__),frontend$components$property$bidirectional_properties_section,args__31746__auto__,null);
}
};
var frontend$components$property$bidirectional_properties_section = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46471__i = 0, G__46471__a = new Array(arguments.length -  0);
while (G__46471__i < G__46471__a.length) {G__46471__a[G__46471__i] = arguments[G__46471__i + 0]; ++G__46471__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46471__a,0,null);
} 
return frontend$components$property$bidirectional_properties_section__delegate.call(this,args__31746__auto__);};
frontend$components$property$bidirectional_properties_section.cljs$lang$maxFixedArity = 0;
frontend$components$property$bidirectional_properties_section.cljs$lang$applyTo = (function (arglist__46472){
var args__31746__auto__ = cljs.core.seq(arglist__46472);
return frontend$components$property$bidirectional_properties_section__delegate(args__31746__auto__);
});
frontend$components$property$bidirectional_properties_section.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$bidirectional_properties_section__delegate;
return frontend$components$property$bidirectional_properties_section;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46193 = comp__31745__auto__;
var G__46194 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46193,G__46194) : io.factorhouse.hsx.core.react_memo.call(null,G__46193,G__46194));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"bidirectional-properties-section");

return comp__31745__auto__;
})();
frontend.components.property.property_input = (function (){var render_fn__31744__auto__ = (function frontend$components$property$property_input(block,_STAR_property_key,p__46195){
var map__46196 = p__46195;
var map__46196__$1 = cljs.core.__destructure_map(map__46196);
var opts = map__46196__$1;
var class_schema_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46196__$1,new cljs.core.Keyword(null,"class-schema?","class-schema?",508813900));
var _STAR_property = logseq.shui.hooks.use_memo((function (){
var or__5142__auto__ = new cljs.core.Keyword(null,"*property","*property",1796678517).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*property","*property",1796678517).cljs$core$IFn$_invoke$arity$1(opts)], null));
var _STAR_show_new_property_config_QMARK_ = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}),cljs.core.PersistentVector.EMPTY);
var _STAR_show_class_select_QMARK_ = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}),cljs.core.PersistentVector.EMPTY);
var _STAR_property_schema = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}),cljs.core.PersistentVector.EMPTY);
var latest_args_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var vec__46197 = logseq.shui.hooks.use_atom(_STAR_property);
var property = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46197,(0),null);
var vec__46200 = logseq.shui.hooks.use_atom(_STAR_property_key);
var property_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46200,(0),null);
var vec__46203 = logseq.shui.hooks.use_atom(_STAR_show_new_property_config_QMARK_);
var show_new_property_config_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46203,(0),null);
var vec__46206 = logseq.shui.hooks.use_atom(_STAR_show_class_select_QMARK_);
var show_class_select_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46206,(0),null);
var vec__46209 = logseq.shui.hooks.use_atom(_STAR_property_schema);
var property_schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46209,(0),null);
var batch_QMARK_ = frontend.components.property.value.batch_operation_QMARK_();
var hide_property_key_QMARK_ = (function (){var or__5142__auto__ = frontend.components.property.value.direct_value_picker_type_QMARK_(new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property));
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285));
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = frontend.components.property.value.select_type_QMARK_(block,property);
if(or__5142__auto____$2){
return or__5142__auto____$2;
} else {
var or__5142__auto____$3 = ((batch_QMARK_) && (((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"url","url",276297046),null], null), null),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property))) && (cljs.core.not(cljs.core.seq(new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952).cljs$core$IFn$_invoke$arity$1(property)))))));
if(or__5142__auto____$3){
return or__5142__auto____$3;
} else {
var and__5140__auto__ = property;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.util.entity.class_QMARK_(property);
} else {
return and__5140__auto__;
}
}
}
}
}
})();
logseq.shui.hooks.set_ref_BANG_(latest_args_ref,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [block,_STAR_property_key,opts], null));

logseq.shui.hooks.use_effect_BANG_((function (){
frontend.state.set_editor_action_BANG_(new cljs.core.Keyword(null,"property-input","property-input",1989427557));

var on_key_down = (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((27),e.keyCode)){
(logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));

(logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));

var temp__5825__auto__ = frontend.state.get_input();
if(cljs.core.truth_(temp__5825__auto__)){
var input = temp__5825__auto__;
return input.focus();
} else {
return null;
}
} else {
return null;
}
});
window.addEventListener("keydown",on_key_down);

return (function (){
window.removeEventListener("keydown",on_key_down);

var vec__46212_46483 = logseq.shui.hooks.deref(latest_args_ref);
var _block_46484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46212_46483,(0),null);
var _STAR_property_key_46485__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46212_46483,(1),null);
var map__46215_46486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46212_46483,(2),null);
var map__46215_46487__$1 = cljs.core.__destructure_map(map__46215_46486);
var original_block_46488 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46215_46487__$1,new cljs.core.Keyword(null,"original-block","original-block",1808045862));
var edit_original_block_46489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46215_46487__$1,new cljs.core.Keyword(null,"edit-original-block","edit-original-block",179766995));
var editing_default_property_QMARK__46490 = (function (){var and__5140__auto__ = original_block_46488;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = frontend.state.get_edit_block();
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(original_block_46488),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block()));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(_STAR_property_key_46485__$1)){
cljs.core.reset_BANG_(_STAR_property_key_46485__$1,null);
} else {
}

if(cljs.core.truth_((function (){var and__5140__auto__ = original_block_46488;
if(cljs.core.truth_(and__5140__auto__)){
return edit_original_block_46489;
} else {
return and__5140__auto__;
}
})())){
var G__46218_46493 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing-default-property?","editing-default-property?",1361962686),editing_default_property_QMARK__46490], null);
(edit_original_block_46489.cljs$core$IFn$_invoke$arity$1 ? edit_original_block_46489.cljs$core$IFn$_invoke$arity$1(G__46218_46493) : edit_original_block_46489.call(null,G__46218_46493));
} else {
}

return frontend.state.set_editor_action_BANG_(null);
});
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-property-input.flex.flex-1.flex-row.items-center.flex-wrap.gap-1","div.ls-property-input.flex.flex-1.flex-row.items-center.flex-wrap.gap-1",468629574),(cljs.core.truth_(property_key)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-property-add.gap-1.flex.flex-1.flex-row.items-center","div.ls-property-add.gap-1.flex.flex-1.flex-row.items-center",94343345),(cljs.core.truth_(hide_property_key_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.property-key.gap-1","div.flex.flex-row.items-center.property-key.gap-1",-1757034910),(cljs.core.truth_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property))?null:frontend.components.property.property_icon(property,new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property_schema))),(cljs.core.truth_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property))?frontend.components.property.property_key_cp(block,property,opts):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),property_key], null))], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row","div.flex.flex-row",209103675),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
return frontend.util.stop_propagation(e);
})], null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(show_new_property_config_QMARK_,new cljs.core.Keyword(null,"adding-property","adding-property",724640812)))?(cljs.core.truth_((function (){var or__5142__auto__ = (property == null);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return show_new_property_config_QMARK_;
}
})())?frontend.components.property.property_type_select(property,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"*property","*property",1796678517),_STAR_property,new cljs.core.Keyword(null,"*property-name","*property-name",1273599183),_STAR_property_key,new cljs.core.Keyword(null,"*property-schema","*property-schema",-393273980),_STAR_property_schema,new cljs.core.Keyword(null,"default-open?","default-open?",-2082763144),true,new cljs.core.Keyword(null,"block","block",664686210),block,new cljs.core.Keyword(null,"*show-new-property-config?","*show-new-property-config?",-1054571618),_STAR_show_new_property_config_QMARK_,new cljs.core.Keyword(null,"*show-class-select?","*show-class-select?",-546938727),_STAR_show_class_select_QMARK_], null)], 0))):(cljs.core.truth_((function (){var and__5140__auto__ = property;
if(cljs.core.truth_(and__5140__auto__)){
return show_class_select_QMARK_;
} else {
return and__5140__auto__;
}
})())?frontend.components.property.config.class_select(property,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),(function (){
return cljs.core.reset_BANG_(_STAR_show_class_select_QMARK_,false);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"multiple-choices?","multiple-choices?",-1858892490),false,new cljs.core.Keyword(null,"default-open?","default-open?",-2082763144),true,new cljs.core.Keyword(null,"no-class?","no-class?",-42395826),true], 0))):(cljs.core.truth_((function (){var and__5140__auto__ = property;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(class_schema_QMARK_);
} else {
return and__5140__auto__;
}
})())?frontend.components.property.value.property_value(block,property,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"editing?","editing?",1646440800),true)):null)
)):null)], null)], null):(function (){var on_chosen = frontend.components.property.property_input_on_chosen(block,_STAR_property,_STAR_property_key,_STAR_show_new_property_config_QMARK_,opts);
var input_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.ekey(e),"Backspace")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",e.target.value)))){
frontend.util.stop(e);

return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
} else {
return null;
}
})], null);
return frontend.components.property.property_select(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"select-opts","select-opts",855704004).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),on_chosen,new cljs.core.Keyword(null,"input-opts","input-opts",1688681135),input_opts,new cljs.core.Keyword(null,"block","block",664686210),block,new cljs.core.Keyword(null,"class-schema?","class-schema?",508813900),class_schema_QMARK_], null)], 0)));
})())], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$property_input__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46219 = cljs.core.first(args__31746__auto__);
var G__46220 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46219,G__46220) : io.factorhouse.hsx.core.obj_get.call(null,G__46219,G__46220));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"property-input","property-input",-665008212,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$property$property_input,args__31746__auto__,null);
}
};
var frontend$components$property$property_input = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46502__i = 0, G__46502__a = new Array(arguments.length -  0);
while (G__46502__i < G__46502__a.length) {G__46502__a[G__46502__i] = arguments[G__46502__i + 0]; ++G__46502__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46502__a,0,null);
} 
return frontend$components$property$property_input__delegate.call(this,args__31746__auto__);};
frontend$components$property$property_input.cljs$lang$maxFixedArity = 0;
frontend$components$property$property_input.cljs$lang$applyTo = (function (arglist__46503){
var args__31746__auto__ = cljs.core.seq(arglist__46503);
return frontend$components$property$property_input__delegate(args__31746__auto__);
});
frontend$components$property$property_input.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$property_input__delegate;
return frontend$components$property$property_input;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46221 = comp__31745__auto__;
var G__46222 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46221,G__46222) : io.factorhouse.hsx.core.react_memo.call(null,G__46221,G__46222));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"property-input");

return comp__31745__auto__;
})();
frontend.components.property.new_property = (function (){var render_fn__31744__auto__ = (function frontend$components$property$new_property(block,opts){
if(frontend.config.publishing_QMARK_){
return null;
} else {
var icon_only_QMARK_ = new cljs.core.Keyword(null,"icon-only?","icon-only?",343876238).cljs$core$IFn$_invoke$arity$1(opts);
var bottom_property_add_button_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-below","block-below",1808846787),new cljs.core.Keyword(null,"property-position","property-position",-1150084538).cljs$core$IFn$_invoke$arity$1(opts));
var tab_index = new cljs.core.Keyword(null,"tab-index","tab-index",895755393).cljs$core$IFn$_invoke$arity$1(opts);
var bottom_row_nav_QMARK_ = new cljs.core.Keyword(null,"bottom-row-nav?","bottom-row-nav?",1987926131).cljs$core$IFn$_invoke$arity$1(opts);
var add_new_property_BANG_ = (function (e){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","new-property","editor/new-property",-1370252491),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),block,new cljs.core.Keyword(null,"target","target",253001721),e.target], null)], 0))], null));
});
var button = (function (){var G__46227 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),(""+"jtrigger flex"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((bottom_property_add_button_QMARK_)?" bottom-property-add-btn":null))),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(function (){var or__5142__auto__ = tab_index;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"data-bottom-row-nav","data-bottom-row-nav",165590860),(cljs.core.truth_(bottom_row_nav_QMARK_)?true:null),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","add-new","property/add-new",-523324509)], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),add_new_property_BANG_,new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),(function (e){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"Enter",null], null), null),frontend.util.ekey(e))){
e.preventDefault();

return add_new_property_BANG_(e);
} else {
return null;
}
})], null);
var G__46228 = frontend.ui.icon("plus",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(16),new cljs.core.Keyword(null,"class","class",-2030961996),"bottom-property-action-icon"], null));
var G__46229 = (cljs.core.truth_(icon_only_QMARK_)?null:frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","add-new","property/add-new",-523324509)], 0)));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__46227,G__46228,G__46229) : logseq.shui.ui.button.call(null,G__46227,G__46228,G__46229));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-new-property","div.ls-new-property",-652285623),(cljs.core.truth_(icon_only_QMARK_)?frontend.ui.tooltip(button,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","add-new","property/add-new",-523324509)], 0))], null)):button)], null);
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$new_property__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46230 = cljs.core.first(args__31746__auto__);
var G__46231 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46230,G__46231) : io.factorhouse.hsx.core.obj_get.call(null,G__46230,G__46231));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"new-property","new-property",-1039135031,null),args__31746__auto__),frontend$components$property$new_property,args__31746__auto__,null);
}
};
var frontend$components$property$new_property = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46506__i = 0, G__46506__a = new Array(arguments.length -  0);
while (G__46506__i < G__46506__a.length) {G__46506__a[G__46506__i] = arguments[G__46506__i + 0]; ++G__46506__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46506__a,0,null);
} 
return frontend$components$property$new_property__delegate.call(this,args__31746__auto__);};
frontend$components$property$new_property.cljs$lang$maxFixedArity = 0;
frontend$components$property$new_property.cljs$lang$applyTo = (function (arglist__46507){
var args__31746__auto__ = cljs.core.seq(arglist__46507);
return frontend$components$property$new_property__delegate(args__31746__auto__);
});
frontend$components$property$new_property.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$new_property__delegate;
return frontend$components$property$new_property;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46232 = comp__31745__auto__;
var G__46233 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46232,G__46233) : io.factorhouse.hsx.core.react_memo.call(null,G__46232,G__46233));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"new-property");

return comp__31745__auto__;
})();
/**
 * Properties will be updated for the linked page instead of the refed block.
 *   For example, the block below has a reference to the page "How to solve it",
 *   we'd like the properties of the class "book" (e.g. Authors, Published year)
 *   to be assigned for the page `How to solve it` instead of the referenced block.
 * 
 *   Block:
 *   - [[How to solve it]] #book
 *   
 */
frontend.components.property.resolve_linked_block_if_exists = (function frontend$components$property$resolve_linked_block_if_exists(block){
var or__5142__auto__ = new cljs.core.Keyword("block","link","block/link",-1872399993).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return block;
}
});
frontend.components.property.show_property_panel_edit_button_QMARK_ = (function frontend$components$property$show_property_panel_edit_button_QMARK_(property,opts){
return ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),null,new cljs.core.Keyword(null,"datetime","datetime",494675702),null], null), null),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-below","block-below",1808846787),new cljs.core.Keyword(null,"property-position","property-position",-1150084538).cljs$core$IFn$_invoke$arity$1(opts))));
});
frontend.components.property.empty_panel_property_value_QMARK_ = (function frontend$components$property$empty_panel_property_value_QMARK_(value){
return (((value == null)) || (((((cljs.core.map_QMARK_(value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","empty-placeholder","logseq.property/empty-placeholder",-1595021837),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(value))))) || (((cljs.core.coll_QMARK_(value)) && (((cljs.core.empty_QMARK_(value)) || (cljs.core.every_QMARK_((function (item){
return ((cljs.core.map_QMARK_(item)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","empty-placeholder","logseq.property/empty-placeholder",-1595021837),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(item))));
}),value)))))))));
});
frontend.components.property.show_property_panel_bullet_QMARK_ = (function frontend$components$property$show_property_panel_bullet_QMARK_(property,value){
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(property,new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404),new cljs.core.Keyword(null,"default","default",-1987822328));
return ((cljs.core.seq(new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952).cljs$core$IFn$_invoke$arity$1(property))) || ((((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"url","url",276297046),null], null), null),type)))) || (frontend.components.property.empty_panel_property_value_QMARK_(value)))));
});
frontend.components.property.entity_value_uuids = (function frontend$components$property$entity_value_uuids(value){
if(cljs.core.uuid_QMARK_(value)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null);
} else {
if(cljs.core.coll_QMARK_(value)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(frontend.components.property.entity_value_uuids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));
} else {
return cljs.core.PersistentVector.EMPTY;

}
}
});
frontend.components.property.restore_resource_entity_values = (function frontend$components$property$restore_resource_entity_values(value,entities){
var restore = (function frontend$components$property$restore_resource_entity_values_$_restore(item){
if(cljs.core.uuid_QMARK_(item)){
var entity = cljs.core.get.cljs$core$IFn$_invoke$arity$3(entities,item,new cljs.core.Keyword("frontend.components.property","missing","frontend.components.property/missing",771959626));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(entity,new cljs.core.Keyword("frontend.components.property","missing","frontend.components.property/missing",771959626))){
return item;
} else {
return entity;
}
} else {
if(cljs.core.set_QMARK_(item)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(frontend$components$property$restore_resource_entity_values_$_restore),item);
} else {
if(cljs.core.vector_QMARK_(item)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(frontend$components$property$restore_resource_entity_values_$_restore),item);
} else {
if(cljs.core.sequential_QMARK_(item)){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(frontend$components$property$restore_resource_entity_values_$_restore,item);
} else {
return item;

}
}
}
}
});
return restore(value);
});
/**
 * Page property rows load the definition through use-block. Canonical
 *   snapshots omit :property/closed-values, so select-type? fell through to
 *   property-normal-block-value and mounted a 0-width nested ls-block.
 */
frontend.components.property.restore_closed_values = (function frontend$components$property$restore_closed_values(property,closed_value_uuids,closed_value_entities){
if(cljs.core.seq(new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952).cljs$core$IFn$_invoke$arity$1(property))){
return property;
} else {
if(cljs.core.seq(closed_value_entities)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(property,new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952),cljs.core.vec(closed_value_entities));
} else {
if(cljs.core.seq(closed_value_uuids)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(property,new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (block_uuid){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null);
}),closed_value_uuids));
} else {
return property;

}
}
}
});
frontend.components.property.class_schema_property_value = (function (){var render_fn__31744__auto__ = (function frontend$components$property$class_schema_property_value(property,description_property_uuid,opts){
var description_property = frontend.db.hooks.use_block(description_property_uuid);
if(cljs.core.truth_(description_property)){
return frontend.components.property.value.property_value(property,description_property,opts);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$class_schema_property_value__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46253 = cljs.core.first(args__31746__auto__);
var G__46254 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46253,G__46254) : io.factorhouse.hsx.core.obj_get.call(null,G__46253,G__46254));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"class-schema-property-value","class-schema-property-value",-671494941,null),args__31746__auto__),frontend$components$property$class_schema_property_value,args__31746__auto__,null);
}
};
var frontend$components$property$class_schema_property_value = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46510__i = 0, G__46510__a = new Array(arguments.length -  0);
while (G__46510__i < G__46510__a.length) {G__46510__a[G__46510__i] = arguments[G__46510__i + 0]; ++G__46510__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46510__a,0,null);
} 
return frontend$components$property$class_schema_property_value__delegate.call(this,args__31746__auto__);};
frontend$components$property$class_schema_property_value.cljs$lang$maxFixedArity = 0;
frontend$components$property$class_schema_property_value.cljs$lang$applyTo = (function (arglist__46511){
var args__31746__auto__ = cljs.core.seq(arglist__46511);
return frontend$components$property$class_schema_property_value__delegate(args__31746__auto__);
});
frontend$components$property$class_schema_property_value.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$class_schema_property_value__delegate;
return frontend$components$property$class_schema_property_value;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46258 = comp__31745__auto__;
var G__46259 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46258,G__46259) : io.factorhouse.hsx.core.react_memo.call(null,G__46258,G__46259));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"class-schema-property-value");

return comp__31745__auto__;
})();
frontend.components.property.property_cp = (function (){var render_fn__31744__auto__ = (function frontend$components$property$property_cp(block,p__46261,p__46262){
var map__46263 = p__46261;
var map__46263__$1 = cljs.core.__destructure_map(map__46263);
var property_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46263__$1,new cljs.core.Keyword(null,"property-uuid","property-uuid",72739916));
var property_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46263__$1,new cljs.core.Keyword(null,"property-ident","property-ident",697145839));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46263__$1,new cljs.core.Keyword(null,"value","value",305978217));
var closed_value_uuids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46263__$1,new cljs.core.Keyword(null,"closed-value-uuids","closed-value-uuids",-1932617996));
var map__46264 = p__46262;
var map__46264__$1 = cljs.core.__destructure_map(map__46264);
var opts = map__46264__$1;
var sortable_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46264__$1,new cljs.core.Keyword(null,"sortable-opts","sortable-opts",-21832640));
var description_property_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46264__$1,new cljs.core.Keyword(null,"description-property-uuid","description-property-uuid",-796278871));
var property = frontend.db.hooks.use_block(property_uuid);
var closed_value_uuids__$1 = cljs.core.vec(closed_value_uuids);
var value_uuids = cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(frontend.components.property.entity_value_uuids(value))));
var closed_value_entities = frontend.db.hooks.use_blocks(closed_value_uuids__$1);
var value_entities = frontend.db.hooks.use_blocks(value_uuids);
var value_ready_QMARK_ = ((cljs.core.empty_QMARK_(value_uuids)) || ((!((value_entities == null)))));
var entities_by_uuid = cljs.core.zipmap(value_uuids,value_entities);
var property__$1 = frontend.components.property.restore_closed_values(property,closed_value_uuids__$1,closed_value_entities);
if(cljs.core.truth_((function (){var and__5140__auto__ = (property_ident instanceof cljs.core.Keyword);
if(and__5140__auto__){
return property__$1;
} else {
return and__5140__auto__;
}
})())){
var value__$1 = ((value_ready_QMARK_)?frontend.components.property.restore_resource_entity_values(value,entities_by_uuid):null);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(property__$1,new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404),new cljs.core.Keyword(null,"default","default",-1987822328));
var empty_value_QMARK_ = frontend.components.property.empty_panel_property_value_QMARK_(value__$1);
var show_panel_bullet_QMARK_ = frontend.components.property.show_property_panel_bullet_QMARK_(property__$1,value__$1);
var property_key_cp_SINGLEQUOTE_ = frontend.components.property.property_key_cp(block,property__$1,cljs.core.select_keys(opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-schema?","class-schema?",508813900)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"property-pair-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property__$1))),new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["property-pair property-panel-row",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"property-panel-row-empty","property-panel-row-empty",771701601),empty_value_QMARK_], null)], null)),new cljs.core.Keyword(null,"data-property-title","data-property-title",1098931919),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(property__$1),new cljs.core.Keyword(null,"data-property-type","data-property-type",1092158877),cljs.core.name(type)], null),((cljs.core.seq(sortable_opts))?frontend.components.dnd.sortable_item(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sortable_opts,new cljs.core.Keyword(null,"class","class",-2030961996),"property-key-panel"),property_key_cp_SINGLEQUOTE_):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.property-key-panel","div.property-key-panel",-859026255),property_key_cp_SINGLEQUOTE_], null)),(function (){var block_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,property_ident,value__$1);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-block.property-value-container.property-value-panel","div.ls-block.property-value-container.property-value-panel",-642585171),((show_panel_bullet_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.property-panel-bullet","div.property-panel-bullet",-238513724),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bullet-container","span.bullet-container",-1847146553),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bullet","span.bullet",1911638461)], null)], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.property-value.property-value-panel-inner.flex.flex-1","div.property-value.property-value-panel-inner.flex.flex-1",-1754194559),(cljs.core.truth_(new cljs.core.Keyword(null,"class-schema?","class-schema?",508813900).cljs$core$IFn$_invoke$arity$1(opts))?(cljs.core.truth_(description_property_uuid)?frontend.components.property.class_schema_property_value(property__$1,description_property_uuid,opts):null):frontend.components.property.value.property_value(block_SINGLEQUOTE_,property__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"suppress-inline-edit-icon?","suppress-inline-edit-icon?",-890762700),true)))], null),((frontend.components.property.show_property_panel_edit_button_QMARK_(property__$1,opts))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.property-panel-edit-btn.select-none","button.property-panel-edit-btn.select-none",925754688),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

var temp__5825__auto__ = (function (){var G__46269 = e.currentTarget;
var G__46269__$1 = (((G__46269 == null))?null:G__46269.closest(".property-value-panel"));
if((G__46269__$1 == null)){
return null;
} else {
return G__46269__$1.querySelector(".jtrigger");
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var trigger = temp__5825__auto__;
trigger.click();

var G__46270 = trigger;
if((G__46270 == null)){
return null;
} else {
return G__46270.focus();
}
} else {
return null;
}
})], null),frontend.ui.icon("edit",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(15)], null))], null):null)], null);
})()], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$property_cp__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46271 = cljs.core.first(args__31746__auto__);
var G__46272 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46271,G__46272) : io.factorhouse.hsx.core.obj_get.call(null,G__46271,G__46272));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"property-cp","property-cp",970659898,null),args__31746__auto__),frontend$components$property$property_cp,args__31746__auto__,null);
}
};
var frontend$components$property$property_cp = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46527__i = 0, G__46527__a = new Array(arguments.length -  0);
while (G__46527__i < G__46527__a.length) {G__46527__a[G__46527__i] = arguments[G__46527__i + 0]; ++G__46527__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46527__a,0,null);
} 
return frontend$components$property$property_cp__delegate.call(this,args__31746__auto__);};
frontend$components$property$property_cp.cljs$lang$maxFixedArity = 0;
frontend$components$property$property_cp.cljs$lang$applyTo = (function (arglist__46528){
var args__31746__auto__ = cljs.core.seq(arglist__46528);
return frontend$components$property$property_cp__delegate(args__31746__auto__);
});
frontend$components$property$property_cp.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$property_cp__delegate;
return frontend$components$property$property_cp;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46273 = comp__31745__auto__;
var G__46274 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46273,G__46274) : io.factorhouse.hsx.core.react_memo.call(null,G__46273,G__46274));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"property-cp");

return comp__31745__auto__;
})();
frontend.components.property.ordered_properties = (function (){var render_fn__31744__auto__ = (function frontend$components$property$ordered_properties(block,properties_STAR_,opts){
var vec__46279 = logseq.shui.hooks.use_state(properties_STAR_);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46279,(0),null);
var set_properties_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46279,(1),null);
var vec__46282 = logseq.shui.hooks.use_state(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"property-ident","property-ident",697145839),properties));
var properties_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46282,(0),null);
var set_properties_order_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46282,(1),null);
var properties_by_id = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"property-ident","property-ident",697145839),properties_STAR_),properties_STAR_);
var properties__$1 = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(properties_by_id,properties_order));
var choices = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46287){
var map__46288 = p__46287;
var map__46288__$1 = cljs.core.__destructure_map(map__46288);
var row = map__46288__$1;
var property_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46288__$1,new cljs.core.Keyword(null,"property-ident","property-ident",697145839));
var id = cljs.core.subs.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(property_ident)),(1));
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"sortable-opts","sortable-opts",-21832640),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"value","value",305978217),property_ident,new cljs.core.Keyword(null,"content","content",15833224),frontend.components.property.property_cp(block,row,opts__$1)], null);
}),properties__$1);
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(properties__$1,properties_STAR_)){
(set_properties_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_properties_BANG_.cljs$core$IFn$_invoke$arity$1(properties_STAR_) : set_properties_BANG_.call(null,properties_STAR_));
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"property-ident","property-ident",697145839),properties_STAR_)),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"property-ident","property-ident",697145839),properties__$1)))){
var G__46290 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"property-ident","property-ident",697145839),properties_STAR_);
return (set_properties_order_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_properties_order_BANG_.cljs$core$IFn$_invoke$arity$1(G__46290) : set_properties_order_BANG_.call(null,G__46290));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [properties_STAR_], null));

return frontend.components.dnd.items(choices,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sort-by-inner-element?","sort-by-inner-element?",235482267),true,new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671),(function (properties_order__$1,p__46291){
var map__46296 = p__46291;
var map__46296__$1 = cljs.core.__destructure_map(map__46296);
var active_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46296__$1,new cljs.core.Keyword(null,"active-id","active-id",-59238656));
var over_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46296__$1,new cljs.core.Keyword(null,"over-id","over-id",257293900));
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46296__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
(set_properties_order_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_properties_order_BANG_.cljs$core$IFn$_invoke$arity$1(properties_order__$1) : set_properties_order_BANG_.call(null,properties_order__$1));

return frontend.db.async._LT_reorder_display_property_BANG_(frontend.state.get_current_repo(),block,active_id,over_id,direction,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"property-ident","property-ident",697145839),properties__$1));
})], null));
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$ordered_properties__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46297 = cljs.core.first(args__31746__auto__);
var G__46298 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46297,G__46298) : io.factorhouse.hsx.core.obj_get.call(null,G__46297,G__46298));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"ordered-properties","ordered-properties",-1565157194,null),args__31746__auto__),frontend$components$property$ordered_properties,args__31746__auto__,null);
}
};
var frontend$components$property$ordered_properties = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46535__i = 0, G__46535__a = new Array(arguments.length -  0);
while (G__46535__i < G__46535__a.length) {G__46535__a[G__46535__i] = arguments[G__46535__i + 0]; ++G__46535__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46535__a,0,null);
} 
return frontend$components$property$ordered_properties__delegate.call(this,args__31746__auto__);};
frontend$components$property$ordered_properties.cljs$lang$maxFixedArity = 0;
frontend$components$property$ordered_properties.cljs$lang$applyTo = (function (arglist__46536){
var args__31746__auto__ = cljs.core.seq(arglist__46536);
return frontend$components$property$ordered_properties__delegate(args__31746__auto__);
});
frontend$components$property$ordered_properties.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$ordered_properties__delegate;
return frontend$components$property$ordered_properties;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46299 = comp__31745__auto__;
var G__46300 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46299,G__46300) : io.factorhouse.hsx.core.react_memo.call(null,G__46299,G__46300));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"ordered-properties");

return comp__31745__auto__;
})();
frontend.components.property.properties_section = (function (){var render_fn__31744__auto__ = (function frontend$components$property$properties_section(block,properties,opts){
if(cljs.core.seq(properties)){
return frontend.components.property.ordered_properties(block,properties,opts);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$properties_section__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46301 = cljs.core.first(args__31746__auto__);
var G__46302 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46301,G__46302) : io.factorhouse.hsx.core.obj_get.call(null,G__46301,G__46302));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"properties-section","properties-section",-501973152,null),args__31746__auto__),frontend$components$property$properties_section,args__31746__auto__,null);
}
};
var frontend$components$property$properties_section = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46537__i = 0, G__46537__a = new Array(arguments.length -  0);
while (G__46537__i < G__46537__a.length) {G__46537__a[G__46537__i] = arguments[G__46537__i + 0]; ++G__46537__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46537__a,0,null);
} 
return frontend$components$property$properties_section__delegate.call(this,args__31746__auto__);};
frontend$components$property$properties_section.cljs$lang$maxFixedArity = 0;
frontend$components$property$properties_section.cljs$lang$applyTo = (function (arglist__46538){
var args__31746__auto__ = cljs.core.seq(arglist__46538);
return frontend$components$property$properties_section__delegate(args__31746__auto__);
});
frontend$components$property$properties_section.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$properties_section__delegate;
return frontend$components$property$properties_section;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46303 = comp__31745__auto__;
var G__46304 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46303,G__46304) : io.factorhouse.hsx.core.react_memo.call(null,G__46303,G__46304));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"properties-section");

return comp__31745__auto__;
})();
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.property !== 'undefined') && (typeof frontend.components.property._STAR_show_hidden_properties_block_ids !== 'undefined')){
} else {
frontend.components.property._STAR_show_hidden_properties_block_ids = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
frontend.components.property.toggle_hidden_properties_visibility_BANG_ = (function frontend$components$property$toggle_hidden_properties_visibility_BANG_(block_uuid){
if(cljs.core.truth_(block_uuid)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.components.property._STAR_show_hidden_properties_block_ids,(function (ids){
if(cljs.core.contains_QMARK_(ids,block_uuid)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ids,block_uuid);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ids,block_uuid);
}
}));
} else {
return null;
}
});
frontend.components.property.hidden_properties_visible_QMARK_ = (function frontend$components$property$hidden_properties_visible_QMARK_(block_uuid){
return cljs.core.contains_QMARK_(cljs.core.deref(frontend.components.property._STAR_show_hidden_properties_block_ids),block_uuid);
});
frontend.components.property.use_hidden_properties_visible = (function frontend$components$property$use_hidden_properties_visible(block_uuid){
var vec__46311 = logseq.shui.hooks.use_state(frontend.components.property.hidden_properties_visible_QMARK_(block_uuid));
var visible_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46311,(0),null);
var set_visible_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46311,(1),null);
var watch_key = logseq.shui.hooks.use_memo((function (){
return (""+"hidden-properties-visible-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()));
}),cljs.core.PersistentVector.EMPTY);
logseq.shui.hooks.use_effect_BANG_((function (){
var G__46314_46545 = frontend.components.property.hidden_properties_visible_QMARK_(block_uuid);
(set_visible_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_visible_BANG_.cljs$core$IFn$_invoke$arity$1(G__46314_46545) : set_visible_BANG_.call(null,G__46314_46545));

if(cljs.core.truth_(block_uuid)){
cljs.core.add_watch(frontend.components.property._STAR_show_hidden_properties_block_ids,watch_key,(function (_key,_ref,old_ids,new_ids){
var old_visible_QMARK_ = cljs.core.contains_QMARK_(old_ids,block_uuid);
var new_visible_QMARK_ = cljs.core.contains_QMARK_(new_ids,block_uuid);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_visible_QMARK_,new_visible_QMARK_)){
return (set_visible_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_visible_BANG_.cljs$core$IFn$_invoke$arity$1(new_visible_QMARK_) : set_visible_BANG_.call(null,new_visible_QMARK_));
} else {
return null;
}
}));

return (function (){
return cljs.core.remove_watch(frontend.components.property._STAR_show_hidden_properties_block_ids,watch_key);
});
} else {
return (function (){
return null;
});
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_uuid], null));

return visible_QMARK_;
});
frontend.components.property.hidden_properties_toggle_label = (function frontend$components$property$hidden_properties_toggle_label(show_hidden_properties_QMARK_){
if(cljs.core.truth_(show_hidden_properties_QMARK_)){
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","collapse-hidden-properties","property/collapse-hidden-properties",644442870)], 0));
} else {
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","show-hidden-properties","property/show-hidden-properties",606280049)], 0));
}
});
frontend.components.property.empty_display_properties = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"full-properties","full-properties",-22614160),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"hidden-properties","hidden-properties",681150496),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"description-property-uuid","description-property-uuid",-796278871),null,new cljs.core.Keyword(null,"class-properties-property-uuid","class-properties-property-uuid",2079015668),null], null);
frontend.components.property.show_empty_and_hidden_properties_enabled_QMARK_ = (function frontend$components$property$show_empty_and_hidden_properties_enabled_QMARK_(block){
var show_empty_and_hidden_state = frontend.state.get_state(new cljs.core.Keyword("ui","show-empty-and-hidden-properties?","ui/show-empty-and-hidden-properties?",1338368380));
var map__46317 = show_empty_and_hidden_state;
var map__46317__$1 = cljs.core.__destructure_map(map__46317);
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46317__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46317__$1,new cljs.core.Keyword(null,"show?","show?",1543842127));
var ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46317__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var and__5140__auto__ = show_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"global","global",93595047))) || (((cljs.core.set_QMARK_(ids)) && (cljs.core.contains_QMARK_(ids,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))))));
} else {
return and__5140__auto__;
}
});
frontend.components.property.display_properties_resource_key = (function frontend$components$property$display_properties_resource_key(block_uuid,opts,show_empty_and_hidden_properties_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block-display-properties","block-display-properties",1009320813),block_uuid,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"gallery-view?","gallery-view?",1298131224),cljs.core.boolean$(new cljs.core.Keyword(null,"gallery-view?","gallery-view?",1298131224).cljs$core$IFn$_invoke$arity$1(opts)),new cljs.core.Keyword(null,"page-title?","page-title?",534381078),cljs.core.boolean$(new cljs.core.Keyword(null,"page-title?","page-title?",534381078).cljs$core$IFn$_invoke$arity$1(opts)),new cljs.core.Keyword(null,"sidebar-properties?","sidebar-properties?",606274147),cljs.core.boolean$(new cljs.core.Keyword(null,"sidebar-properties?","sidebar-properties?",606274147).cljs$core$IFn$_invoke$arity$1(opts)),new cljs.core.Keyword(null,"tag-dialog?","tag-dialog?",1083464494),cljs.core.boolean$(new cljs.core.Keyword(null,"tag-dialog?","tag-dialog?",1083464494).cljs$core$IFn$_invoke$arity$1(opts)),new cljs.core.Keyword(null,"publishing?","publishing?",1526914455),cljs.core.boolean$(frontend.config.publishing_QMARK_),new cljs.core.Keyword(null,"state-hide-empty-properties?","state-hide-empty-properties?",2051042635),cljs.core.boolean$(new cljs.core.Keyword("ui","hide-empty-properties?","ui/hide-empty-properties?",-2048102776).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0())),new cljs.core.Keyword(null,"show-empty-and-hidden-properties?","show-empty-and-hidden-properties?",1338372112),cljs.core.boolean$(show_empty_and_hidden_properties_QMARK_)], null)], null);
});
frontend.components.property.use_display_properties = (function frontend$components$property$use_display_properties(block,opts,enabled_QMARK_,show_empty_and_hidden_QMARK_){
var result = frontend.db.hooks.use_resource(frontend.components.property.display_properties_resource_key(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),opts,show_empty_and_hidden_QMARK_));
if(cljs.core.truth_((function (){var and__5140__auto__ = enabled_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (!(new cljs.core.Keyword(null,"block-metadata-ready?","block-metadata-ready?",1488736426).cljs$core$IFn$_invoke$arity$1(opts) === false));
} else {
return and__5140__auto__;
}
})())){
var or__5142__auto__ = result;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.components.property.empty_display_properties;
}
} else {
return frontend.components.property.empty_display_properties;
}
});
frontend.components.property.use_has_hidden_properties = (function frontend$components$property$use_has_hidden_properties(block,opts,enabled_QMARK_){
var show_empty_and_hidden_QMARK_ = frontend.components.property.show_empty_and_hidden_properties_enabled_QMARK_(block);
var map__46331 = frontend.components.property.use_display_properties(block,opts,enabled_QMARK_,show_empty_and_hidden_QMARK_);
var map__46331__$1 = cljs.core.__destructure_map(map__46331);
var hidden_properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46331__$1,new cljs.core.Keyword(null,"hidden-properties","hidden-properties",681150496));
return cljs.core.boolean$(cljs.core.seq(hidden_properties));
});
/**
 * True when the block-below pill row already renders the hidden-properties
 *   toggle: an outliner zoom-in root with block-below positioned properties.
 *   The properties area must not render a second toggle in that case.
 */
frontend.components.property.block_below_pill_owns_hidden_toggle_QMARK_ = (function frontend$components$property$block_below_pill_owns_hidden_toggle_QMARK_(block,opts){
return cljs.core.boolean$((function (){var and__5140__auto__ = (!(frontend.config.publishing_QMARK_));
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core.not(frontend.util.entity.page_QMARK_(block));
if(and__5140__auto____$1){
var and__5140__auto____$2 = new cljs.core.Keyword(null,"block?","block?",1102479923).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__5140__auto____$2)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(opts),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))))) && (cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block.temp","positioned-properties","block.temp/positioned-properties",1836546803),new cljs.core.Keyword(null,"block-below","block-below",1808846787)], null)))));
} else {
return and__5140__auto____$2;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})());
});
frontend.components.property.hidden_properties_toggle_button = (function (){var render_fn__31744__auto__ = (function frontend$components$property$hidden_properties_toggle_button(block,p__46337){
var map__46339 = p__46337;
var map__46339__$1 = cljs.core.__destructure_map(map__46339);
var _opts = map__46339__$1;
var icon_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46339__$1,new cljs.core.Keyword(null,"icon-only?","icon-only?",343876238));
var tab_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46339__$1,new cljs.core.Keyword(null,"tab-index","tab-index",895755393));
var bottom_row_nav_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46339__$1,new cljs.core.Keyword(null,"bottom-row-nav?","bottom-row-nav?",1987926131));
var bottom_pill_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46339__$1,new cljs.core.Keyword(null,"bottom-pill?","bottom-pill?",-1605145468));
var block_uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
var show_hidden_properties_QMARK_ = frontend.components.property.use_hidden_properties_visible(block_uuid);
var label = frontend.components.property.hidden_properties_toggle_label(show_hidden_properties_QMARK_);
if(cljs.core.truth_(block_uuid)){
if(cljs.core.truth_(bottom_pill_QMARK_)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.bottom-property-pill.bottom-property-pill-focusable.bottom-property-hidden-toggle-btn","button.bottom-property-pill.bottom-property-pill-focusable.bottom-property-hidden-toggle-btn",-132250891),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-bottom-pill-focusable","data-bottom-pill-focusable",1383987387),true,new cljs.core.Keyword(null,"data-bottom-row-nav","data-bottom-row-nav",165590860),(cljs.core.truth_(bottom_row_nav_QMARK_)?true:null),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(function (){var or__5142__auto__ = tab_index;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (-1);
}
})(),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),label,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

return frontend.components.property.toggle_hidden_properties_visibility_BANG_(block_uuid);
})], null),frontend.ui.icon((cljs.core.truth_(show_hidden_properties_QMARK_)?"chevron-up":"chevron-down"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(16),new cljs.core.Keyword(null,"class","class",-2030961996),"bottom-property-action-icon"], null)),label], null);
} else {
if(cljs.core.truth_(icon_only_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-new-property","div.ls-new-property",-652285623),(function (){var G__46344 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),"jtrigger flex bottom-property-add-btn",new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(function (){var or__5142__auto__ = tab_index;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"data-bottom-row-nav","data-bottom-row-nav",165590860),(cljs.core.truth_(bottom_row_nav_QMARK_)?true:null),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),label,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

return frontend.components.property.toggle_hidden_properties_visibility_BANG_(block_uuid);
})], null);
var G__46345 = frontend.ui.icon((cljs.core.truth_(show_hidden_properties_QMARK_)?"chevron-up":"chevron-down"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(16),new cljs.core.Keyword(null,"class","class",-2030961996),"bottom-property-action-icon"], null));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__46344,G__46345) : logseq.shui.ui.button.call(null,G__46344,G__46345));
})()], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.property-pair.property-panel-row.hidden-properties-toggle-row","div.property-pair.property-panel-row.hidden-properties-toggle-row",-247271469),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.property-key-panel","div.property-key-panel",-859026255),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.property-key-inner.jtrigger-view.hidden-properties-toggle-key","button.property-key-inner.jtrigger-view.hidden-properties-toggle-key",816684344),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(function (){var or__5142__auto__ = tab_index;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),label,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

return frontend.components.property.toggle_hidden_properties_visibility_BANG_(block_uuid);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.property-icon","span.property-icon",-1520352073),frontend.ui.icon((cljs.core.truth_(show_hidden_properties_QMARK_)?"chevron-up":"chevron-down"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(16)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.property-k","span.property-k",-213041077),label], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.property-value-panel.ls-block.property-value-container","div.property-value-panel.ls-block.property-value-container",1781736334)], null)], null);
}
}
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$hidden_properties_toggle_button__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46346 = cljs.core.first(args__31746__auto__);
var G__46347 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46346,G__46347) : io.factorhouse.hsx.core.obj_get.call(null,G__46346,G__46347));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"hidden-properties-toggle-button","hidden-properties-toggle-button",1611682809,null),args__31746__auto__),frontend$components$property$hidden_properties_toggle_button,args__31746__auto__,null);
}
};
var frontend$components$property$hidden_properties_toggle_button = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46565__i = 0, G__46565__a = new Array(arguments.length -  0);
while (G__46565__i < G__46565__a.length) {G__46565__a[G__46565__i] = arguments[G__46565__i + 0]; ++G__46565__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46565__a,0,null);
} 
return frontend$components$property$hidden_properties_toggle_button__delegate.call(this,args__31746__auto__);};
frontend$components$property$hidden_properties_toggle_button.cljs$lang$maxFixedArity = 0;
frontend$components$property$hidden_properties_toggle_button.cljs$lang$applyTo = (function (arglist__46566){
var args__31746__auto__ = cljs.core.seq(arglist__46566);
return frontend$components$property$hidden_properties_toggle_button__delegate(args__31746__auto__);
});
frontend$components$property$hidden_properties_toggle_button.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$hidden_properties_toggle_button__delegate;
return frontend$components$property$hidden_properties_toggle_button;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46349 = comp__31745__auto__;
var G__46350 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46349,G__46350) : io.factorhouse.hsx.core.react_memo.call(null,G__46349,G__46350));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"hidden-properties-toggle-button");

return comp__31745__auto__;
})();
frontend.components.property.hidden_properties_cp = (function (){var render_fn__31744__auto__ = (function frontend$components$property$hidden_properties_cp(block,hidden_properties,p__46351){
var map__46352 = p__46351;
var map__46352__$1 = cljs.core.__destructure_map(map__46352);
var opts = map__46352__$1;
var show_hidden_properties_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46352__$1,new cljs.core.Keyword(null,"show-hidden-properties?","show-hidden-properties?",498514842));
if(cljs.core.truth_((function (){var and__5140__auto__ = show_hidden_properties_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.seq(hidden_properties);
} else {
return and__5140__auto__;
}
})())){
return frontend.components.property.properties_section(block,hidden_properties,opts);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$hidden_properties_cp__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46354 = cljs.core.first(args__31746__auto__);
var G__46355 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46354,G__46355) : io.factorhouse.hsx.core.obj_get.call(null,G__46354,G__46355));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"hidden-properties-cp","hidden-properties-cp",-30477600,null),args__31746__auto__),frontend$components$property$hidden_properties_cp,args__31746__auto__,null);
}
};
var frontend$components$property$hidden_properties_cp = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46567__i = 0, G__46567__a = new Array(arguments.length -  0);
while (G__46567__i < G__46567__a.length) {G__46567__a[G__46567__i] = arguments[G__46567__i + 0]; ++G__46567__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46567__a,0,null);
} 
return frontend$components$property$hidden_properties_cp__delegate.call(this,args__31746__auto__);};
frontend$components$property$hidden_properties_cp.cljs$lang$maxFixedArity = 0;
frontend$components$property$hidden_properties_cp.cljs$lang$applyTo = (function (arglist__46570){
var args__31746__auto__ = cljs.core.seq(arglist__46570);
return frontend$components$property$hidden_properties_cp__delegate(args__31746__auto__);
});
frontend$components$property$hidden_properties_cp.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$hidden_properties_cp__delegate;
return frontend$components$property$hidden_properties_cp;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46358 = comp__31745__auto__;
var G__46359 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46358,G__46359) : io.factorhouse.hsx.core.react_memo.call(null,G__46358,G__46359));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"hidden-properties-cp");

return comp__31745__auto__;
})();
frontend.components.property.bidirectional_properties_area = (function (){var render_fn__31744__auto__ = (function frontend$components$property$bidirectional_properties_area(target_block,opts){
var block = frontend.components.property.resolve_linked_block_if_exists(target_block);
var block_uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
var bidirectional_properties = frontend.db.hooks.use_resource(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block-bidirectional-properties","block-bidirectional-properties",209456375),block_uuid], null));
var root_block_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(opts))) && (cljs.core.not(frontend.util.entity.page_QMARK_(block))));
if(cljs.core.truth_((function (){var or__5142__auto__ = root_block_QMARK_;
if(or__5142__auto__){
return or__5142__auto__;
} else {
return frontend.util.entity.page_QMARK_(block);
}
})())){
return frontend.components.property.bidirectional_properties_section(bidirectional_properties);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$bidirectional_properties_area__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46362 = cljs.core.first(args__31746__auto__);
var G__46363 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46362,G__46363) : io.factorhouse.hsx.core.obj_get.call(null,G__46362,G__46363));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"bidirectional-properties-area","bidirectional-properties-area",1349636014,null),args__31746__auto__),frontend$components$property$bidirectional_properties_area,args__31746__auto__,null);
}
};
var frontend$components$property$bidirectional_properties_area = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46577__i = 0, G__46577__a = new Array(arguments.length -  0);
while (G__46577__i < G__46577__a.length) {G__46577__a[G__46577__i] = arguments[G__46577__i + 0]; ++G__46577__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46577__a,0,null);
} 
return frontend$components$property$bidirectional_properties_area__delegate.call(this,args__31746__auto__);};
frontend$components$property$bidirectional_properties_area.cljs$lang$maxFixedArity = 0;
frontend$components$property$bidirectional_properties_area.cljs$lang$applyTo = (function (arglist__46578){
var args__31746__auto__ = cljs.core.seq(arglist__46578);
return frontend$components$property$bidirectional_properties_area__delegate(args__31746__auto__);
});
frontend$components$property$bidirectional_properties_area.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$bidirectional_properties_area__delegate;
return frontend$components$property$bidirectional_properties_area;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46365 = comp__31745__auto__;
var G__46366 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46365,G__46366) : io.factorhouse.hsx.core.react_memo.call(null,G__46365,G__46366));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"bidirectional-properties-area");

return comp__31745__auto__;
})();
frontend.components.property.class_properties_key = (function (){var render_fn__31744__auto__ = (function frontend$components$property$class_properties_key(block,class_properties_property_uuid){
var property = frontend.db.hooks.use_block(class_properties_property_uuid);
if(cljs.core.truth_(property)){
return frontend.components.property.property_key_cp(block,property,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$class_properties_key__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46371 = cljs.core.first(args__31746__auto__);
var G__46372 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46371,G__46372) : io.factorhouse.hsx.core.obj_get.call(null,G__46371,G__46372));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"class-properties-key","class-properties-key",647962669,null),args__31746__auto__),frontend$components$property$class_properties_key,args__31746__auto__,null);
}
};
var frontend$components$property$class_properties_key = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46584__i = 0, G__46584__a = new Array(arguments.length -  0);
while (G__46584__i < G__46584__a.length) {G__46584__a[G__46584__i] = arguments[G__46584__i + 0]; ++G__46584__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46584__a,0,null);
} 
return frontend$components$property$class_properties_key__delegate.call(this,args__31746__auto__);};
frontend$components$property$class_properties_key.cljs$lang$maxFixedArity = 0;
frontend$components$property$class_properties_key.cljs$lang$applyTo = (function (arglist__46585){
var args__31746__auto__ = cljs.core.seq(arglist__46585);
return frontend$components$property$class_properties_key__delegate(args__31746__auto__);
});
frontend$components$property$class_properties_key.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$class_properties_key__delegate;
return frontend$components$property$class_properties_key;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46373 = comp__31745__auto__;
var G__46374 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46373,G__46374) : io.factorhouse.hsx.core.react_memo.call(null,G__46373,G__46374));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"class-properties-key");

return comp__31745__auto__;
})();
/**
 * Add property belongs on the page itself (title, sidebar, tag dialog), not
 *   on a page nested in an outline.
 */
frontend.components.property.page_title_property_surface_QMARK_ = (function frontend$components$property$page_title_property_surface_QMARK_(p__46375){
var map__46376 = p__46375;
var map__46376__$1 = cljs.core.__destructure_map(map__46376);
var page_title_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46376__$1,new cljs.core.Keyword(null,"page-title?","page-title?",534381078));
var sidebar_properties_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46376__$1,new cljs.core.Keyword(null,"sidebar-properties?","sidebar-properties?",606274147));
var tag_dialog_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46376__$1,new cljs.core.Keyword(null,"tag-dialog?","tag-dialog?",1083464494));
return cljs.core.boolean$((function (){var or__5142__auto__ = page_title_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = sidebar_properties_QMARK_;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return tag_dialog_QMARK_;
}
}
})());
});
frontend.components.property.properties_area = (function (){var render_fn__31744__auto__ = (function frontend$components$property$properties_area(target_block,p__46381){
var map__46382 = p__46381;
var map__46382__$1 = cljs.core.__destructure_map(map__46382);
var opts = map__46382__$1;
var sidebar_properties_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46382__$1,new cljs.core.Keyword(null,"sidebar-properties?","sidebar-properties?",606274147));
var tag_dialog_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46382__$1,new cljs.core.Keyword(null,"tag-dialog?","tag-dialog?",1083464494));
var skip_bidirectional_properties_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46382__$1,new cljs.core.Keyword(null,"skip-bidirectional-properties?","skip-bidirectional-properties?",-1547429475));
var id = logseq.shui.hooks.use_memo((function (){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()));
}),cljs.core.PersistentVector.EMPTY);
var block = frontend.components.property.resolve_linked_block_if_exists(target_block);
var block_uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
var root_block_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_uuid)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(opts))) && (cljs.core.not(frontend.util.entity.page_QMARK_(block))));
var show_hidden_properties_QMARK_ = frontend.components.property.use_hidden_properties_visible(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
var show_properties_QMARK_ = (function (){var or__5142__auto__ = sidebar_properties_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return tag_dialog_QMARK_;
}
})();
var class_QMARK_ = frontend.util.entity.class_QMARK_(block);
var show_empty_and_hidden_QMARK_ = (function (){var map__46385 = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","show-empty-and-hidden-properties?","ui/show-empty-and-hidden-properties?",1338368380)], null));
var map__46385__$1 = cljs.core.__destructure_map(map__46385);
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46385__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46385__$1,new cljs.core.Keyword(null,"show?","show?",1543842127));
var ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46385__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var and__5140__auto__ = show_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"global","global",93595047))) || (((cljs.core.set_QMARK_(ids)) && (cljs.core.contains_QMARK_(ids,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))))));
} else {
return and__5140__auto__;
}
})();
var map__46384 = frontend.components.property.use_display_properties(block,opts,true,show_empty_and_hidden_QMARK_);
var map__46384__$1 = cljs.core.__destructure_map(map__46384);
var full_properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46384__$1,new cljs.core.Keyword(null,"full-properties","full-properties",-22614160));
var hidden_properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46384__$1,new cljs.core.Keyword(null,"hidden-properties","hidden-properties",681150496));
var description_property_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46384__$1,new cljs.core.Keyword(null,"description-property-uuid","description-property-uuid",-796278871));
var class_properties_property_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46384__$1,new cljs.core.Keyword(null,"class-properties-property-uuid","class-properties-property-uuid",2079015668));
var current_route_page_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))),frontend.state.get_current_page());
var show_hidden_properties_toggle_button_QMARK_ = ((cljs.core.seq(hidden_properties)) && (((((current_route_page_QMARK_) || (root_block_QMARK_))) && ((!(frontend.components.property.block_below_pill_owns_hidden_toggle_QMARK_(target_block,opts)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),((((cljs.core.empty_QMARK_(full_properties)) && (((cljs.core.seq(hidden_properties)) && ((((!(root_block_QMARK_))) && (((cljs.core.not(sidebar_properties_QMARK_)) && (((cljs.core.not(class_QMARK_)) && (cljs.core.not(show_hidden_properties_QMARK_))))))))))))?null:((((cljs.core.empty_QMARK_(full_properties)) && (((cljs.core.empty_QMARK_(hidden_properties)) && (cljs.core.not(class_QMARK_))))))?(cljs.core.truth_(show_properties_QMARK_)?cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.property.new_property,block,opts], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"-add-property")], null)):null):(function (){var remove_properties = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.property","query","logseq.property/query",-97414126),null,new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285),null], null), null);
var properties_SINGLEQUOTE_ = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__46394){
var map__46395 = p__46394;
var map__46395__$1 = cljs.core.__destructure_map(map__46395);
var property_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46395__$1,new cljs.core.Keyword(null,"property-ident","property-ident",697145839));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_ident,new cljs.core.Keyword("logseq.property.class","properties","logseq.property.class/properties",-2123712050));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__46396){
var map__46397 = p__46396;
var map__46397__$1 = cljs.core.__destructure_map(map__46397);
var property_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46397__$1,new cljs.core.Keyword(null,"property-ident","property-ident",697145839));
return cljs.core.contains_QMARK_(remove_properties,property_ident);
}),full_properties));
var show_properties_panel_QMARK_ = cljs.core.seq(properties_SINGLEQUOTE_);
var page_QMARK_ = frontend.util.entity.page_QMARK_(block);
var page_properties_area_QMARK_ = (function (){var and__5140__auto__ = page_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.components.property.page_title_property_surface_QMARK_(opts);
} else {
return and__5140__auto__;
}
})();
var opts_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"page-property?","page-property?",838444754),page_properties_area_QMARK_);
var plugin_properties = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46400){
var map__46401 = p__46400;
var map__46401__$1 = cljs.core.__destructure_map(map__46401);
var property_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46401__$1,new cljs.core.Keyword(null,"property-ident","property-ident",697145839));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46401__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [property_ident,value], null);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__46402){
var map__46403 = p__46402;
var map__46403__$1 = cljs.core.__destructure_map(map__46403);
var property_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46403__$1,new cljs.core.Keyword(null,"property-ident","property-ident",697145839));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_ident,new cljs.core.Keyword("logseq.property.class","properties","logseq.property.class/properties",-2123712050));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(full_properties,hidden_properties))));
var props_for_plugin = (cljs.core.truth_(frontend.components.property.enable_block_properties_renderers_QMARK_(opts_SINGLEQUOTE_,class_QMARK_))?cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blockId","blockId",-1419159445),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))),new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46405){
var vec__46406 = p__46405;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46406,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46406,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)),(1)),frontend.handler.plugin.serialize_property_value_for_plugin(v)], null);
}),plugin_properties))], null)):null);
var plugin_renderers = (cljs.core.truth_(props_for_plugin)?frontend.handler.plugin.get_matched_block_properties_renderers(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"block-id","block-id",-70582834),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))),new cljs.core.Keyword(null,"properties-map","properties-map",-1636902782),plugin_properties,new cljs.core.Keyword(null,"props","props",453281727),props_for_plugin], null)):null);
var prepend_renderers = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__46377_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("prepend",new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(p1__46377_SHARP_));
}),plugin_renderers);
var replace_renderer = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__46378_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("replace",new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(p1__46378_SHARP_));
}),plugin_renderers));
var append_renderers = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__46379_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["prepend",null,"replace",null], null), null),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(p1__46379_SHARP_));
}),plugin_renderers);
var show_hidden_properties_area_QMARK_ = (function (){var and__5140__auto__ = cljs.core.not(class_QMARK_);
if(and__5140__auto__){
var or__5142__auto__ = show_hidden_properties_toggle_button_QMARK_;
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto____$1 = show_hidden_properties_QMARK_;
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.seq(hidden_properties);
} else {
return and__5140__auto____$1;
}
}
} else {
return and__5140__auto__;
}
})();
var show_class_properties_area_QMARK_ = class_QMARK_;
var show_properties_area_QMARK_ = (function (){var or__5142__auto__ = cljs.core.seq(prepend_renderers);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = replace_renderer;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = show_properties_panel_QMARK_;
if(or__5142__auto____$2){
return or__5142__auto____$2;
} else {
var or__5142__auto____$3 = show_hidden_properties_area_QMARK_;
if(cljs.core.truth_(or__5142__auto____$3)){
return or__5142__auto____$3;
} else {
var or__5142__auto____$4 = cljs.core.seq(append_renderers);
if(or__5142__auto____$4){
return or__5142__auto____$4;
} else {
return show_class_properties_area_QMARK_;
}
}
}
}
}
})();
if(cljs.core.truth_(show_properties_area_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-properties-area","div.ls-properties-area",1786574030),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ls-page-properties","ls-page-properties",1028732986),page_QMARK_,new cljs.core.Keyword(null,"ls-block-properties","ls-block-properties",922660508),cljs.core.not(page_QMARK_)], null)], null)),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(0)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (r){
if(cljs.core.fn_QMARK_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(r),props_for_plugin], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"plugin-prepend-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(r)))], null));
} else {
return null;
}
}),prepend_renderers),(cljs.core.truth_((function (){var and__5140__auto__ = replace_renderer;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.fn_QMARK_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(replace_renderer));
} else {
return and__5140__auto__;
}
})())?((cljs.core.fn_QMARK_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(replace_renderer)))?cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(replace_renderer),props_for_plugin], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"plugin-replace-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(replace_renderer)))], null)):null):((show_properties_panel_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.properties-panel","div.properties-panel",-1602203773),frontend.components.property.properties_section(block,properties_SINGLEQUOTE_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts_SINGLEQUOTE_,new cljs.core.Keyword(null,"description-property-uuid","description-property-uuid",-796278871),description_property_uuid))], null):null)),(cljs.core.truth_(class_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),((show_hidden_properties_toggle_button_QMARK_)?frontend.components.property.hidden_properties_toggle_button(block,cljs.core.PersistentArrayMap.EMPTY):null),(cljs.core.truth_((function (){var and__5140__auto__ = show_hidden_properties_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.seq(hidden_properties);
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.properties-panel","div.properties-panel",-1602203773),frontend.components.property.hidden_properties_cp(block,hidden_properties,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts_SINGLEQUOTE_,new cljs.core.Keyword(null,"show-hidden-properties?","show-hidden-properties?",498514842),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"description-property-uuid","description-property-uuid",-796278871),description_property_uuid], 0)))], null):null)], null)),(cljs.core.truth_((function (){var and__5140__auto__ = page_properties_area_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(class_QMARK_);
} else {
return and__5140__auto__;
}
})())?cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.property.new_property,block,opts_SINGLEQUOTE_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"-add-property")], null)):null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (r){
if(cljs.core.fn_QMARK_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(r),props_for_plugin], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"plugin-append-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(r)))], null));
} else {
return null;
}
}),append_renderers),(cljs.core.truth_(class_QMARK_)?(function (){var properties = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (property){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"property-uuid","property-uuid",72739916),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword(null,"property-ident","property-ident",697145839),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword(null,"value","value",305978217),null], null);
}),new cljs.core.Keyword("logseq.property.class","properties","logseq.property.class/properties",-2123712050).cljs$core$IFn$_invoke$arity$1(block));
var opts_SINGLEQUOTE___$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"class-schema?","class-schema?",508813900),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"description-property-uuid","description-property-uuid",-796278871),description_property_uuid], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-1.mt-2","div.flex.flex-col.gap-1.mt-2",-1582153963),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(15)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.property-key.text-sm","div.property-key.text-sm",-496163430),(cljs.core.truth_(class_properties_property_uuid)?frontend.components.property.class_properties_key(block,class_properties_property_uuid):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-muted-foreground.ml-5","div.text-muted-foreground.ml-5",2083579778),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("class","tag-properties-desc","class/tag-properties-desc",1696834854)], 0))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gap-1.flex.flex-col","div.gap-1.flex.flex-col",-369929626),frontend.components.property.properties_section(block,properties,opts_SINGLEQUOTE___$1),frontend.components.property.hidden_properties_cp(block,hidden_properties,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"show-hidden-properties?","show-hidden-properties?",498514842),show_hidden_properties_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"description-property-uuid","description-property-uuid",-796278871),description_property_uuid], 0))),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ml-5","div.ml-5",878444494),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.property.new_property,block,opts_SINGLEQUOTE___$1], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"-class-add-property")], null))], null)], null);
})():null)], null)], null);
} else {
return null;
}
})()
)),(cljs.core.truth_((function (){var and__5140__auto__ = (function (){var or__5142__auto__ = root_block_QMARK_;
if(or__5142__auto__){
return or__5142__auto__;
} else {
return frontend.util.entity.page_QMARK_(block);
}
})();
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(skip_bidirectional_properties_QMARK_);
} else {
return and__5140__auto__;
}
})())?frontend.components.property.bidirectional_properties_area(block,opts):null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$properties_area__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46433 = cljs.core.first(args__31746__auto__);
var G__46434 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46433,G__46434) : io.factorhouse.hsx.core.obj_get.call(null,G__46433,G__46434));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"properties-area","properties-area",1400373126,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$property$properties_area,args__31746__auto__,null);
}
};
var frontend$components$property$properties_area = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46606__i = 0, G__46606__a = new Array(arguments.length -  0);
while (G__46606__i < G__46606__a.length) {G__46606__a[G__46606__i] = arguments[G__46606__i + 0]; ++G__46606__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46606__a,0,null);
} 
return frontend$components$property$properties_area__delegate.call(this,args__31746__auto__);};
frontend$components$property$properties_area.cljs$lang$maxFixedArity = 0;
frontend$components$property$properties_area.cljs$lang$applyTo = (function (arglist__46607){
var args__31746__auto__ = cljs.core.seq(arglist__46607);
return frontend$components$property$properties_area__delegate(args__31746__auto__);
});
frontend$components$property$properties_area.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$properties_area__delegate;
return frontend$components$property$properties_area;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46435 = comp__31745__auto__;
var G__46436 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46435,G__46436) : io.factorhouse.hsx.core.react_memo.call(null,G__46435,G__46436));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"properties-area");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.property.js.map
