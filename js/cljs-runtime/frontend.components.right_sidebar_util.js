goog.provide('frontend.components.right_sidebar_util');
/**
 * Return the id or page name used to load the sidebar item that Open as Page
 *   should open.
 * 
 *   Contents sidebar items use the string db-id "contents", which is not a block
 *   entity id. Resolve them by the built-in Contents page name, matching
 *   `<build-sidebar-item`.
 */
frontend.components.right_sidebar_util.sidebar_action_block_lookup = (function frontend$components$right_sidebar_util$sidebar_action_block_lookup(db_id,type){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contents","contents",-1567174023),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type))){
return "Contents";
} else {
if(((cljs.core.integer_QMARK_(db_id)) || (cljs.core.uuid_QMARK_(db_id)))){
return db_id;
} else {
return null;

}
}
});
frontend.components.right_sidebar_util._LT_sidebar_action_block = (function frontend$components$right_sidebar_util$_LT_sidebar_action_block(repo,db_id,type){
var temp__5823__auto__ = frontend.components.right_sidebar_util.sidebar_action_block_lookup(db_id,type);
if(cljs.core.truth_(temp__5823__auto__)){
var id = temp__5823__auto__;
return frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0));
} else {
return promesa.core.resolved(null);
}
});

//# sourceMappingURL=frontend.components.right_sidebar_util.js.map
