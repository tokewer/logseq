goog.provide('frontend.handler.page');
frontend.handler.page._LT_create_BANG_ = frontend.handler.common.page._LT_create_BANG_;
frontend.handler.page._LT_delete_BANG_ = frontend.handler.common.page._LT_delete_BANG_;
frontend.handler.page.edit_page_when_present_BANG_ = frontend.handler.common.page.edit_page_when_present_BANG_;
frontend.handler.page._LT_recycle_page = (function frontend$handler$page$_LT_recycle_page(){
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),logseq.common.config.recycle_page_name], null)], 0));
});
frontend.handler.page.open_recycle_BANG_ = (function frontend$handler$page$open_recycle_BANG_(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.page._LT_recycle_page()),(function (page){
return promesa.protocols._promise((function (){var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(temp__5825__auto__)){
var page_id = temp__5825__auto__;
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(page_id);
} else {
return null;
}
})());
}));
}));
});
frontend.handler.page._LT_page_block_uuid = (function frontend$handler$page$_LT_page_block_uuid(page_id_name_or_uuid){
if(cljs.core.truth_(page_id_name_or_uuid)){
var lookup_ref = ((cljs.core.uuid_QMARK_(page_id_name_or_uuid))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),page_id_name_or_uuid], null):(cljs.core.truth_((frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1(page_id_name_or_uuid) : frontend.util.uuid_string_QMARK_.call(null,page_id_name_or_uuid)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.uuid(page_id_name_or_uuid)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),logseq.common.util.page_name_sanity_lc(page_id_name_or_uuid)], null)
));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null),lookup_ref], 0))),(function (page){
return promesa.protocols._promise(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page));
}));
}));
} else {
return null;
}
});
frontend.handler.page._LT_today_journal_page = (function frontend$handler$page$_LT_today_journal_page(){
return frontend.db.async._LT_get_journal_page_by_day(frontend.state.get_current_repo(),frontend.date.today_journal_day());
});
frontend.handler.page.restore_recycled_BANG_ = (function frontend$handler$page$restore_recycled_BANG_(root_uuid){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
return frontend.modules.outliner.op.restore_recycled_BANG_(root_uuid);
} else {
var _STAR_outliner_ops_STAR__orig_val__67370 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__67371 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__67371);

try{frontend.modules.outliner.op.restore_recycled_BANG_(root_uuid);

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"restore-recycled","restore-recycled",-2050992683)], null));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__67370);
}}
})()),(function (___27434__auto__){
return promesa.protocols._promise(true);
}));
}));
});
frontend.handler.page.delete_recycled_permanently_BANG_ = (function frontend$handler$page$delete_recycled_permanently_BANG_(root_uuid){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
return frontend.modules.outliner.op.recycle_delete_permanently_BANG_(root_uuid);
} else {
var _STAR_outliner_ops_STAR__orig_val__67372 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__67373 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__67373);

try{frontend.modules.outliner.op.recycle_delete_permanently_BANG_(root_uuid);

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"recycle-delete-permanently","recycle-delete-permanently",-1939194401)], null));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__67372);
}}
})()),(function (___27434__auto__){
return promesa.protocols._promise(true);
}));
}));
});
frontend.handler.page._LT_unfavorite_page_BANG_ = (function frontend$handler$page$_LT_unfavorite_page_BANG_(page_name){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.page._LT_page_block_uuid(page_name)),(function (page_block_uuid){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(page_block_uuid)?frontend.handler.common.page._LT_db_unfavorite_page_BANG_(page_block_uuid):null)),(function (___27434__auto__){
return promesa.protocols._promise(frontend.state.update_favorites_updated_BANG_());
}));
}));
}));
});
frontend.handler.page._LT_favorite_page_BANG_ = (function frontend$handler$page$_LT_favorite_page_BANG_(page_name){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.page._LT_page_block_uuid(page_name)),(function (page_block_uuid){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(page_block_uuid)?frontend.handler.common.page._LT_db_favorite_page_BANG_(page_block_uuid):null)),(function (___27434__auto__){
return promesa.protocols._promise(frontend.state.update_favorites_updated_BANG_());
}));
}));
}));
});
frontend.handler.page._LT_favorited_QMARK_ = (function frontend$handler$page$_LT_favorited_QMARK_(page_name){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.page._LT_page_block_uuid(page_name)),(function (page_block_uuid){
return promesa.protocols._promise((cljs.core.truth_(page_block_uuid)?frontend.handler.common.page._LT_db_favorited_QMARK_(page_block_uuid):false));
}));
}));
});
/**
 * return page-block entities
 */
frontend.handler.page._LT_get_favorites = (function frontend$handler$page$_LT_get_favorites(){
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-favorite-pages","thread-api/get-favorite-pages",894906067),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo], 0));
} else {
return null;
}
});
frontend.handler.page.toggle_favorite_BANG_ = (function frontend$handler$page$toggle_favorite_BANG_(){
var temp__5825__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(temp__5825__auto__)){
var page_name = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.page._LT_favorited_QMARK_(page_name)),(function (page_favorited_QMARK_){
return promesa.protocols._promise((cljs.core.truth_(page_favorited_QMARK_)?frontend.handler.page._LT_unfavorite_page_BANG_(page_name):frontend.handler.page._LT_favorite_page_BANG_(page_name)));
}));
}));
} else {
return null;
}
});
frontend.handler.page.rename_BANG_ = (function frontend$handler$page$rename_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___67406 = arguments.length;
var i__5877__auto___67407 = (0);
while(true){
if((i__5877__auto___67407 < len__5876__auto___67406)){
args__5882__auto__.push((arguments[i__5877__auto___67407]));

var G__67408 = (i__5877__auto___67407 + (1));
i__5877__auto___67407 = G__67408;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return frontend.handler.page.rename_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(frontend.handler.page.rename_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (page_uuid,new_name,p__67377){
var map__67378 = p__67377;
var map__67378__$1 = cljs.core.__destructure_map(map__67378);
var _opts = map__67378__$1;
var page_uuid__$1 = (cljs.core.truth_((frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1(page_uuid) : frontend.util.uuid_string_QMARK_.call(null,page_uuid)))?cljs.core.uuid(page_uuid):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid page uuid",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page-uuid","page-uuid",1152600915),page_uuid], null))})());
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
return frontend.modules.outliner.op.rename_page_BANG_(page_uuid__$1,new_name);
} else {
var _STAR_outliner_ops_STAR__orig_val__67379 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__67380 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__67380);

try{frontend.modules.outliner.op.rename_page_BANG_(page_uuid__$1,new_name);

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"rename-page","rename-page",-2094129371)], null));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__67379);
}}
})()),(function (___27434__auto__){
return promesa.protocols._promise(true);
}));
}));
}));

(frontend.handler.page.rename_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.handler.page.rename_BANG_.cljs$lang$applyTo = (function (seq67374){
var G__67375 = cljs.core.first(seq67374);
var seq67374__$1 = cljs.core.next(seq67374);
var G__67376 = cljs.core.first(seq67374__$1);
var seq67374__$2 = cljs.core.next(seq67374__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67375,G__67376,seq67374__$2);
}));

frontend.handler.page._LT_reorder_favorites_BANG_ = (function frontend$handler$page$_LT_reorder_favorites_BANG_(favorites){
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","reorder-favorites","thread-api/reorder-favorites",-1266873854),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,favorites], 0))),(function (_){
return promesa.protocols._promise(frontend.state.update_favorites_updated_BANG_());
}));
}));
} else {
return null;
}
});
frontend.handler.page.update_public_attribute_BANG_ = (function frontend$handler$page$update_public_attribute_BANG_(page,value){
return frontend.handler.db_based.property.set_block_property_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword("logseq.property","publishing-public?","logseq.property/publishing-public?",-1094657939),value);
});
frontend.handler.page.get_page_ref_text = (function frontend$handler$page$get_page_ref_text(page){
return (frontend.util.ref.__GT_page_ref.cljs$core$IFn$_invoke$arity$1 ? frontend.util.ref.__GT_page_ref.cljs$core$IFn$_invoke$arity$1(page) : frontend.util.ref.__GT_page_ref.call(null,page));
});
frontend.handler.page.init_commands_BANG_ = (function frontend$handler$page$init_commands_BANG_(){
return frontend.commands.init_commands_BANG_(frontend.handler.page.get_page_ref_text);
});
frontend.handler.page.rebuild_slash_commands_list_BANG_ = goog.functions.debounce(frontend.handler.page.init_commands_BANG_,(1500));
frontend.handler.page.db_based_save_filter_BANG_ = (function frontend$handler$page$db_based_save_filter_BANG_(page,filter_page_id,p__67381){
var map__67382 = p__67381;
var map__67382__$1 = cljs.core.__destructure_map(map__67382);
var include_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67382__$1,new cljs.core.Keyword(null,"include?","include?",859165569));
var add_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67382__$1,new cljs.core.Keyword(null,"add?","add?",1263018409));
var property_id = (cljs.core.truth_(include_QMARK_)?new cljs.core.Keyword("logseq.property.linked-references","includes","logseq.property.linked-references/includes",1680577703):new cljs.core.Keyword("logseq.property.linked-references","excludes","logseq.property.linked-references/excludes",242675889));
if(cljs.core.truth_(add_QMARK_)){
return frontend.handler.property.set_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page),property_id,filter_page_id);
} else {
return frontend.handler.db_based.property.delete_property_value_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page),property_id,filter_page_id);
}
});
frontend.handler.page.page_not_exists_handler = (function frontend$handler$page$page_not_exists_handler(input){
frontend.state.clear_editor_action_BANG_();

var current_selected = frontend.util.get_selected_text();
return frontend.util.cursor.move_cursor_forward.cljs$core$IFn$_invoke$arity$2(input,((2) + cljs.core.count(current_selected)));
});
frontend.handler.page.existing_chosen_result_QMARK_ = (function frontend$handler$page$existing_chosen_result_QMARK_(chosen_result){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(chosen_result);
});
frontend.handler.page._LT_chosen_result = (function frontend$handler$page$_LT_chosen_result(repo,chosen_result){
if(cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(chosen_result))){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(chosen_result),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (block){
return promesa.protocols._promise((function (){var or__5142__auto__ = block;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return chosen_result;
}
})());
}));
}));
} else {
if(cljs.core.truth_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(chosen_result))){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("db","ident","db/ident",-737096)], null),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(chosen_result)], 0))),(function (block){
return promesa.protocols._promise((function (){var or__5142__auto__ = block;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return chosen_result;
}
})());
}));
}));
} else {
return chosen_result;

}
}
});
frontend.handler.page._LT_page_by_title = (function frontend$handler$page$_LT_page_by_title(repo,page){
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","tags","block/tags",1814948340)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page) : frontend.util.page_name_sanity_lc.call(null,page))], null)], 0));
});
frontend.handler.page.tag_on_chosen_handler = (function frontend$handler$page$tag_on_chosen_handler(input,id,pos,format,current_pos,edit_content,q){
return (function (chosen_result,e){
frontend.util.stop(e);

frontend.state.clear_editor_action_BANG_();

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.get_current_repo()),(function (repo){
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.Keyword(null,"convert-page-to-tag?","convert-page-to-tag?",-274352532).cljs$core$IFn$_invoke$arity$1(chosen_result)),(function (convert_page_to_tag_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.page._LT_chosen_result(repo,chosen_result)),(function (chosen_result__$1){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = convert_page_to_tag_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = frontend.util.entity.page_QMARK_(chosen_result__$1);
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.not(frontend.util.entity.class_QMARK_(chosen_result__$1));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?frontend.handler.db_based.page.convert_page_to_tag_BANG_(chosen_result__$1):null)),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(convert_page_to_tag_QMARK_)?frontend.handler.page._LT_chosen_result(repo,chosen_result__$1):chosen_result__$1)),(function (chosen_result__$2){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var and__5140__auto__ = convert_page_to_tag_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(frontend.util.entity.class_QMARK_(chosen_result__$2));
} else {
return and__5140__auto__;
}
})()),(function (conversion_rejected_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(chosen_result__$2);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(frontend.util.entity.class_QMARK_(chosen_result__$2));
} else {
return and__5140__auto__;
}
})())?frontend.db.async._LT_get_alias_source_page(repo,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(chosen_result__$2)):null)),(function (target){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = target;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = cljs.core.not(frontend.util.entity.class_QMARK_(chosen_result__$2));
if(and__5140__auto____$1){
return frontend.util.entity.class_QMARK_(target);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?target:chosen_result__$2)),(function (chosen_result__$3){
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(chosen_result__$3)),(function (chosen){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = clojure.string.includes_QMARK_(chosen,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","new-tag","editor/new-tag",-1492362953)], 0)))+" "));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return frontend.util.entity.class_QMARK_(chosen_result__$3);
}
})()),(function (class_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var and__5140__auto__ = class_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.identifier,"auto-complete/meta-complete")) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(chosen,"Page")));
} else {
return and__5140__auto__;
}
})()),(function (inline_tag_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise(clojure.string.replace_first(clojure.string.replace_first(chosen,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","new-tag","editor/new-tag",-1492362953)], 0)))+" "),""),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","new-page","editor/new-page",650508245)], 0)))+" "),"")),(function (chosen__$1){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(logseq.common.util.page_ref.left_brackets,logseq.common.util.safe_subs.cljs$core$IFn$_invoke$arity$3(edit_content,(pos - (2)),pos))),(function (wrapped_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_((logseq.graph_parser.text.namespace_page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.graph_parser.text.namespace_page_QMARK_.cljs$core$IFn$_invoke$arity$1(chosen__$1) : logseq.graph_parser.text.namespace_page_QMARK_.call(null,chosen__$1)))?(logseq.graph_parser.text.get_namespace_last_part.cljs$core$IFn$_invoke$arity$1 ? logseq.graph_parser.text.get_namespace_last_part.cljs$core$IFn$_invoke$arity$1(chosen__$1) : logseq.graph_parser.text.get_namespace_last_part.call(null,chosen__$1)):chosen__$1)),(function (chosen_last_part){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = (function (){var G__67383 = /\s+/;
var G__67384 = chosen_last_part;
return (frontend.util.safe_re_find.cljs$core$IFn$_invoke$arity$2 ? frontend.util.safe_re_find.cljs$core$IFn$_invoke$arity$2(G__67383,G__67384) : frontend.util.safe_re_find.call(null,G__67383,G__67384));
})();
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(wrapped_QMARK_);
} else {
return and__5140__auto__;
}
})())?(frontend.util.ref.__GT_page_ref.cljs$core$IFn$_invoke$arity$1 ? frontend.util.ref.__GT_page_ref.cljs$core$IFn$_invoke$arity$1(chosen_last_part) : frontend.util.ref.__GT_page_ref.call(null,chosen_last_part)):chosen_last_part)),(function (wrapped_tag){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(frontend.handler.editor.get_selected_text())?"":q)),(function (q__$1){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(wrapped_QMARK_)?q__$1:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.first(q__$1)))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(q__$1,(1)):q__$1))),(function (last_pattern){
return promesa.protocols._mcat(promesa.protocols._promise((""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(wrapped_QMARK_)?logseq.common.util.page_ref.left_brackets:null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_pattern))),(function (last_pattern__$1){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(logseq.common.util.page_ref.right_brackets,logseq.common.util.safe_subs.cljs$core$IFn$_invoke$arity$3(edit_content,current_pos,(current_pos + (2))))),(function (tag_in_page_auto_complete_QMARK_){
return promesa.protocols._promise((cljs.core.truth_(conversion_rejected_QMARK_)?(cljs.core.truth_(input)?input.focus():null):promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__67385 = id;
var G__67386 = (cljs.core.truth_((function (){var and__5140__auto__ = class_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(inline_tag_QMARK_);
} else {
return and__5140__auto__;
}
})())?"":(""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(wrapped_tag)));
var G__67387 = format;
var G__67388 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),last_pattern__$1,new cljs.core.Keyword(null,"end-pattern","end-pattern",-963594078),(cljs.core.truth_(wrapped_QMARK_)?logseq.common.util.page_ref.right_brackets:null),new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"page-ref","page-ref",-1047131151)], null);
return (frontend.handler.editor.insert_command_BANG_.cljs$core$IFn$_invoke$arity$4 ? frontend.handler.editor.insert_command_BANG_.cljs$core$IFn$_invoke$arity$4(G__67385,G__67386,G__67387,G__67388) : frontend.handler.editor.insert_command_BANG_.call(null,G__67385,G__67386,G__67387,G__67388));
})()),(function (___27434__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(tag_in_page_auto_complete_QMARK_)?null:frontend.handler.db_based.page.tag_on_chosen_handler(chosen__$1,chosen_result__$3,class_QMARK_,edit_content,current_pos,last_pattern__$1))),(function (___27434__auto____$1){
return promesa.protocols._promise((cljs.core.truth_(input)?input.focus():null));
}));
}));
}))));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
});
});
frontend.handler.page.page_on_chosen_handler = (function frontend$handler$page$page_on_chosen_handler(id,format,q){
return (function (chosen_result,e){
frontend.util.stop(e);

frontend.state.clear_editor_action_BANG_();

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.get_current_repo()),(function (repo){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.page._LT_chosen_result(repo,chosen_result)),(function (chosen_result__$1){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(chosen_result__$1)?null:(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No chosen item",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chosen","chosen",-1422409985),chosen_result__$1], null))})())),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(chosen_result__$1)),(function (chosen){
return promesa.protocols._mcat(promesa.protocols._promise(clojure.string.replace_first(chosen,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","new-page","editor/new-page",650508245)], 0)))+" "),"")),(function (chosen_SINGLEQUOTE_){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"nlp-original-title","nlp-original-title",2141342504).cljs$core$IFn$_invoke$arity$1(chosen_result__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return chosen_SINGLEQUOTE_;
}
})()),(function (nlp_title){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = (cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword(null,"nlp-date?","nlp-date?",1961584384).cljs$core$IFn$_invoke$arity$1(chosen_result__$1);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(frontend.handler.page.existing_chosen_result_QMARK_(chosen_result__$1));
} else {
return and__5140__auto__;
}
})())?(function (){var temp__5825__auto__ = frontend.date.nld_parse(nlp_title);
if(cljs.core.truth_(temp__5825__auto__)){
var result = temp__5825__auto__;
var d = (function (){var G__67389 = (new goog.date.DateTime());
G__67389.setTime(result.getTime());

return G__67389;
})();
var gd = (new goog.date.Date(d.getFullYear(),d.getMonth(),d.getDate()));
var page = frontend.date.js_date__GT_journal_title(gd);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page,frontend.handler.page._LT_page_by_title(repo,page)], null);
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [chosen_SINGLEQUOTE_,chosen_result__$1], null);
}
})()),(function (p__67390){
var vec__67391 = p__67390;
var chosen_SINGLEQUOTE___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67391,(0),null);
var chosen_result__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67391,(1),null);
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","datoms","thread-api/datoms",-1106869259),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(chosen_SINGLEQUOTE___$1) : frontend.util.page_name_sanity_lc.call(null,chosen_SINGLEQUOTE___$1))], 0))),(function (datoms){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.count(datoms) > (1))),(function (multiple_pages_same_name_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = frontend.handler.page.existing_chosen_result_QMARK_(chosen_result__$2);
if(cljs.core.truth_(and__5140__auto__)){
var or__5142__auto__ = multiple_pages_same_name_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.not(frontend.util.entity.page_QMARK_(chosen_result__$2));
}
} else {
return and__5140__auto__;
}
})())?(function (){var G__67394 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(chosen_result__$2);
return (frontend.util.ref.__GT_page_ref.cljs$core$IFn$_invoke$arity$1 ? frontend.util.ref.__GT_page_ref.cljs$core$IFn$_invoke$arity$1(G__67394) : frontend.util.ref.__GT_page_ref.call(null,G__67394));
})():frontend.handler.page.get_page_ref_text(chosen_SINGLEQUOTE___$1))),(function (ref_text){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(frontend.handler.page.existing_chosen_result_QMARK_(chosen_result__$2))?null:(function (){var G__67395 = chosen_SINGLEQUOTE___$1;
var G__67396 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),false,new cljs.core.Keyword(null,"split-namespace?","split-namespace?",-1035468161),true], null);
return (frontend.handler.page._LT_create_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.page._LT_create_BANG_.cljs$core$IFn$_invoke$arity$2(G__67395,G__67396) : frontend.handler.page._LT_create_BANG_.call(null,G__67395,G__67396));
})())),(function (result){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(result)?(function (){var title = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(result);
return (frontend.util.ref.__GT_page_ref.cljs$core$IFn$_invoke$arity$1 ? frontend.util.ref.__GT_page_ref.cljs$core$IFn$_invoke$arity$1(title) : frontend.util.ref.__GT_page_ref.call(null,title));
})():ref_text)),(function (ref_text_SINGLEQUOTE_){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__67397 = id;
var G__67398 = ref_text_SINGLEQUOTE_;
var G__67399 = format;
var G__67400 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.util.page_ref.left_brackets)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(frontend.handler.editor.get_selected_text())?"":q))),new cljs.core.Keyword(null,"end-pattern","end-pattern",-963594078),logseq.common.util.page_ref.right_brackets,new cljs.core.Keyword(null,"postfix-fn","postfix-fn",-1393704144),(function (s){
return frontend.util.replace_first(logseq.common.util.page_ref.right_brackets,s,"");
}),new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"page-ref","page-ref",-1047131151)], null);
return (frontend.handler.editor.insert_command_BANG_.cljs$core$IFn$_invoke$arity$4 ? frontend.handler.editor.insert_command_BANG_.cljs$core$IFn$_invoke$arity$4(G__67397,G__67398,G__67399,G__67400) : frontend.handler.editor.insert_command_BANG_.call(null,G__67397,G__67398,G__67399,G__67400));
})()),(function (___$1){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = result;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return chosen_result__$2;
}
})()),(function (chosen_result__$3){
return promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(chosen_result__$3))?frontend.state.conj_block_ref_BANG_(chosen_result__$3):null));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
});
});
frontend.handler.page.on_chosen_handler = (function frontend$handler$page$on_chosen_handler(input,id,pos,format){
var cursor_pos = frontend.util.cursor.pos(input);
var input_value = (function (){var G__67401 = input;
if((G__67401 == null)){
return null;
} else {
return G__67401.value;
}
})();
var edit_content = (((input_value == null))?frontend.state.get_edit_content():input_value);
var current_pos = ((((typeof cursor_pos === 'number') && (((typeof pos === 'number') && ((cursor_pos < pos))))))?cljs.core.count(edit_content):cursor_pos);
var action = frontend.state.get_editor_action();
var hashtag_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,new cljs.core.Keyword(null,"page-search-hashtag","page-search-hashtag",1121040573));
var q = (function (){var or__5142__auto__ = frontend.handler.editor.get_selected_text();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = ((hashtag_QMARK_)?logseq.common.util.safe_subs.cljs$core$IFn$_invoke$arity$3(edit_content,pos,current_pos):null);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
if((cljs.core.count(edit_content) > current_pos)){
return logseq.common.util.safe_subs.cljs$core$IFn$_invoke$arity$3(edit_content,pos,current_pos);
} else {
return null;
}
}
}
})();
if(hashtag_QMARK_){
if(frontend.handler.editor.org_directive_hashtag_query_QMARK_(q)){
return (function (_chosen_result,e){
frontend.util.stop(e);

return frontend.state.clear_editor_action_BANG_();
});
} else {
return frontend.handler.page.tag_on_chosen_handler(input,id,pos,format,current_pos,edit_content,q);
}
} else {
return frontend.handler.page.page_on_chosen_handler(id,format,q);
}
});
frontend.handler.page.create_today_journal_BANG_ = (function frontend$handler$page$create_today_journal_BANG_(){
if(((cljs.core.not(new cljs.core.Keyword("graph","loading?","graph/loading?",1937181019).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()))) && (((cljs.core.not(new cljs.core.Keyword("graph","importing","graph/importing",1647644617).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()))) && ((!(frontend.config.publishing_QMARK_))))))){
var temp__5825__auto__ = frontend.date.today();
if(cljs.core.truth_(temp__5825__auto__)){
var title = temp__5825__auto__;
frontend.state.set_today_BANG_(title);

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(title) : frontend.util.page_name_sanity_lc.call(null,title))),(function (today_page_lc_title){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.page._LT_today_journal_page()),(function (page){
return promesa.protocols._promise((cljs.core.truth_(page)?null:promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__67402 = title;
var G__67403 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),false,new cljs.core.Keyword(null,"split-namespace?","split-namespace?",-1035468161),false,new cljs.core.Keyword(null,"today-journal?","today-journal?",-388258460),true], null);
return (frontend.handler.page._LT_create_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.page._LT_create_BANG_.cljs$core$IFn$_invoke$arity$2(G__67402,G__67403) : frontend.handler.page._LT_create_BANG_.call(null,G__67402,G__67403));
})()),(function (result){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.plugin.hook_plugin_app.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"today-journal-created","today-journal-created",-908154954),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),today_page_lc_title], null))),(function (___27434__auto__){
return promesa.protocols._promise(result);
}));
}));
}))));
}));
}));
}));
} else {
return null;
}
} else {
return null;
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.page !== 'undefined') && (typeof frontend.handler.page._STAR_date_watch_interval !== 'undefined')){
} else {
frontend.handler.page._STAR_date_watch_interval = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.handler.page.watch_for_date_BANG_ = (function frontend$handler$page$watch_for_date_BANG_(){
var temp__5829__auto___67409 = cljs.core.deref(frontend.handler.page._STAR_date_watch_interval);
if((temp__5829__auto___67409 == null)){
} else {
var interval_67410 = temp__5829__auto___67409;
clearInterval(interval_67410);
}

var _STAR_last_date = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var check_date_BANG_ = (function (){
var today = frontend.date.today();
if(cljs.core.truth_((function (){var and__5140__auto__ = today;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(today,cljs.core.deref(_STAR_last_date));
} else {
return and__5140__auto__;
}
})())){
cljs.core.reset_BANG_(_STAR_last_date,today);

return frontend.handler.page.create_today_journal_BANG_();
} else {
return null;
}
});
check_date_BANG_();

return cljs.core.reset_BANG_(frontend.handler.page._STAR_date_watch_interval,setInterval(check_date_BANG_,(3000)));
});
frontend.handler.page.open_today_in_sidebar = (function frontend$handler$page$open_today_in_sidebar(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.page._LT_today_journal_page()),(function (page){
return promesa.protocols._promise((function (){var temp__5825__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(temp__5825__auto__)){
var page_id = temp__5825__auto__;
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),page_id,new cljs.core.Keyword(null,"page","page",849072397));
} else {
return null;
}
})());
}));
}));
});
frontend.handler.page.copy_page_url = (function frontend$handler$page$copy_page_url(var_args){
var G__67405 = arguments.length;
switch (G__67405) {
case 0:
return frontend.handler.page.copy_page_url.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.page.copy_page_url.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.page.copy_page_url.cljs$core$IFn$_invoke$arity$0 = (function (){
var id = frontend.util.page.get_current_page_uuid();
return frontend.handler.page.copy_page_url.cljs$core$IFn$_invoke$arity$1(id);
}));

(frontend.handler.page.copy_page_url.cljs$core$IFn$_invoke$arity$1 = (function (page_uuid){
if(cljs.core.not(page_uuid)){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","no-page-found-to-copy","page/no-page-found-to-copy",128017520)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));
} else {
var temp__5823__auto__ = frontend.util.url.entity_url_for_copy(frontend.config.app_website,frontend.handler.graph.current_graph_id(),frontend.state.get_current_repo(),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_uuid)),new cljs.core.Keyword(null,"page","page",849072397));
if(cljs.core.truth_(temp__5823__auto__)){
var url = temp__5823__auto__;
return frontend.util.copy_to_clipboard_BANG_(url);
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","copy-url-unavailable-warning","page/copy-url-unavailable-warning",475090382)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));
}
}
}));

(frontend.handler.page.copy_page_url.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=frontend.handler.page.js.map
