goog.provide('frontend.util.entity');
/**
 * View rows are UUIDs. Callers that read :block/uuid need a map.
 */
frontend.util.entity.as_block_map = (function frontend$util$entity$as_block_map(block_or_id){
if(cljs.core.uuid_QMARK_(block_or_id)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_or_id], null);
} else {
if(((cljs.core.map_QMARK_(block_or_id)) && ((((new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block_or_id) == null)) && (cljs.core.uuid_QMARK_(new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(block_or_id))))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block_or_id,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(block_or_id));
} else {
return block_or_id;

}
}
});
frontend.util.entity.tag_ident = (function frontend$util$entity$tag_ident(tag){
if((tag instanceof cljs.core.Keyword)){
return tag;
} else {
if(cljs.core.map_QMARK_(tag)){
return new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(tag);
} else {
return null;

}
}
});
frontend.util.entity.tagged_with_QMARK_ = (function frontend$util$entity$tagged_with_QMARK_(entity,expected_ident){
if(cljs.core.map_QMARK_(entity)){
return cljs.core.some((function (tag){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected_ident,frontend.util.entity.tag_ident(tag));
}),new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(entity));
} else {
return null;
}
});
frontend.util.entity.internal_page_QMARK_ = (function frontend$util$entity$internal_page_QMARK_(entity){
return frontend.util.entity.tagged_with_QMARK_(entity,new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329));
});
frontend.util.entity.class_QMARK_ = (function frontend$util$entity$class_QMARK_(entity){
return frontend.util.entity.tagged_with_QMARK_(entity,new cljs.core.Keyword("logseq.class","Tag","logseq.class/Tag",-538902083));
});
frontend.util.entity.property_QMARK_ = (function frontend$util$entity$property_QMARK_(entity){
return frontend.util.entity.tagged_with_QMARK_(entity,new cljs.core.Keyword("logseq.class","Property","logseq.class/Property",1038767048));
});
frontend.util.entity.journal_QMARK_ = (function frontend$util$entity$journal_QMARK_(entity){
return frontend.util.entity.tagged_with_QMARK_(entity,new cljs.core.Keyword("logseq.class","Journal","logseq.class/Journal",1979741081));
});
frontend.util.entity.page_QMARK_ = (function frontend$util$entity$page_QMARK_(entity){
var or__5142__auto__ = frontend.util.entity.internal_page_QMARK_(entity);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = frontend.util.entity.journal_QMARK_(entity);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = frontend.util.entity.class_QMARK_(entity);
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return frontend.util.entity.property_QMARK_(entity);
}
}
}
});
/**
 * Library outlines nested pages, not normal blocks.
 */
frontend.util.entity.library_outline_child_uuids = (function frontend$util$entity$library_outline_child_uuids(child_blocks){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (block){
if(cljs.core.truth_((function (){var and__5140__auto__ = block;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.util.entity.page_QMARK_(block);
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
} else {
return null;
}
})),child_blocks);
});
/**
 * URL-type property values are leaves. They must not have child blocks
 *   or expose sub-block UX when zoomed.
 */
frontend.util.entity.url_property_value_QMARK_ = (function frontend$util$entity$url_property_value_QMARK_(entity){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(entity)));
});
frontend.util.entity.ref_db_id = (function frontend$util$entity$ref_db_id(value){
if(typeof value === 'number'){
return value;
} else {
if(cljs.core.map_QMARK_(value)){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(value);
} else {
return null;

}
}
});
/**
 * A property's :logseq.property/default-value block is a leaf. It must not
 *   have child blocks or expose sub-block UX.
 */
frontend.util.entity.default_value_block_QMARK_ = (function frontend$util$entity$default_value_block_QMARK_(entity){
if(cljs.core.map_QMARK_(entity)){
var parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(entity);
var parent_default_id = frontend.util.entity.ref_db_id(new cljs.core.Keyword("logseq.property","default-value","logseq.property/default-value",-892079662).cljs$core$IFn$_invoke$arity$1(parent));
var entity_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);
return cljs.core.boolean$((function (){var or__5142__auto__ = (function (){var and__5140__auto__ = entity_id;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = parent_default_id;
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(entity_id,parent_default_id);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto__ = (new cljs.core.Keyword("block","closed-value-property","block/closed-value-property",1157792813).cljs$core$IFn$_invoke$arity$1(entity) == null);
if(and__5140__auto__){
var parent_id = frontend.util.entity.ref_db_id(parent);
var from_id = frontend.util.entity.ref_db_id(new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(entity));
var and__5140__auto____$1 = parent_id;
if(cljs.core.truth_(and__5140__auto____$1)){
var and__5140__auto____$2 = from_id;
if(cljs.core.truth_(and__5140__auto____$2)){
var and__5140__auto____$3 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent_id,from_id);
if(and__5140__auto____$3){
return frontend.util.entity.property_QMARK_((function (){var or__5142__auto____$1 = parent;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(entity);
}
})());
} else {
return and__5140__auto____$3;
}
} else {
return and__5140__auto____$2;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}
})());
} else {
return null;
}
});
/**
 * Property values that keep the block editor but must not have children.
 */
frontend.util.entity.leaf_property_value_QMARK_ = (function frontend$util$entity$leaf_property_value_QMARK_(entity){
var or__5142__auto__ = frontend.util.entity.url_property_value_QMARK_(entity);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return frontend.util.entity.default_value_block_QMARK_(entity);
}
});
frontend.util.entity.get_entity_types = (function frontend$util$entity$get_entity_types(entity){
var G__41247 = cljs.core.PersistentHashSet.EMPTY;
var G__41247__$1 = (cljs.core.truth_(frontend.util.entity.internal_page_QMARK_(entity))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__41247,new cljs.core.Keyword(null,"page","page",849072397)):G__41247);
var G__41247__$2 = (cljs.core.truth_(frontend.util.entity.journal_QMARK_(entity))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__41247__$1,new cljs.core.Keyword(null,"journal","journal",1585898830)):G__41247__$1);
var G__41247__$3 = (cljs.core.truth_(frontend.util.entity.class_QMARK_(entity))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__41247__$2,new cljs.core.Keyword(null,"class","class",-2030961996)):G__41247__$2);
if(cljs.core.truth_(frontend.util.entity.property_QMARK_(entity))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__41247__$3,new cljs.core.Keyword(null,"property","property",-1114278232));
} else {
return G__41247__$3;
}
});

//# sourceMappingURL=frontend.util.entity.js.map
