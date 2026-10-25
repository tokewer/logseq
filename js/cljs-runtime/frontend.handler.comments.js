goog.provide('frontend.handler.comments');
goog.scope(function(){
  frontend.handler.comments.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.handler.comments._LT_block_ref = (function frontend$handler$comments$_LT_block_ref(block_ref){
if(cljs.core.map_QMARK_(block_ref)){
return promesa.core.resolved(block_ref);
} else {
if(cljs.core.uuid_QMARK_(block_ref)){
return frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),block_ref,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0));
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = typeof block_ref === 'string';
if(and__5140__auto__){
return (frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1(block_ref) : frontend.util.uuid_string_QMARK_.call(null,block_ref));
} else {
return and__5140__auto__;
}
})())){
return frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),cljs.core.uuid(block_ref),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0));
} else {
if(typeof block_ref === 'number'){
return frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),block_ref,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0));
} else {
return promesa.core.resolved(null);

}
}
}
}
});
frontend.handler.comments.worker_block_ref = (function frontend$handler$comments$worker_block_ref(block_ref){
if(cljs.core.map_QMARK_(block_ref)){
var or__5142__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block_ref);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block_ref);
}
} else {
return block_ref;

}
});
frontend.handler.comments._LT_comments_area_block = (function frontend$handler$comments$_LT_comments_area_block(comments_area){
var temp__5823__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5823__auto__)){
var repo = temp__5823__auto__;
return frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,frontend.handler.comments.worker_block_ref(comments_area),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0));
} else {
return promesa.core.resolved(null);
}
});
frontend.handler.comments.ensure_comments_area_BANG_ = (function frontend$handler$comments$ensure_comments_area_BANG_(block_id){
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","ensure-comments-area","thread-api/ensure-comments-area",-1131519305),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,frontend.handler.comments.worker_block_ref(block_id)], 0));
} else {
return null;
}
});
frontend.handler.comments.ensure_comments_area_for_selected_blocks_BANG_ = (function frontend$handler$comments$ensure_comments_area_for_selected_blocks_BANG_(block_refs){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.all(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.handler.comments._LT_block_ref,block_refs))),(function (blocks){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.block.comments_model.comment_target_blocks(frontend.handler.block.get_top_level_blocks(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,blocks)))),(function (blocks__$1){
return promesa.protocols._promise(((cljs.core.seq(blocks__$1))?promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","ensure-comments-area-for-blocks","thread-api/ensure-comments-area-for-blocks",491003172),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.handler.comments.worker_block_ref,blocks__$1)], 0))),(function (comments_area){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(comments_area)?frontend.handler.editor.expand_block_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(comments_area)):null)),(function (___27434__auto__){
return promesa.protocols._promise(comments_area);
}));
}));
})):null));
}));
}));
}));
});
frontend.handler.comments.focus_comments_reply_BANG_ = (function frontend$handler$comments$focus_comments_reply_BANG_(comments_area_el){
if(cljs.core.truth_(comments_area_el)){
var temp__5823__auto__ = comments_area_el.querySelector(".ls-comment-add textarea, .ls-comment-box textarea, .ls-comment-box input, .ls-comment-box [contenteditable='true']");
if(cljs.core.truth_(temp__5823__auto__)){
var input = temp__5823__auto__;
return input.focus();
} else {
var G__66981 = comments_area_el;
var G__66981__$1 = (((G__66981 == null))?null:G__66981.querySelector(".ls-comment-reply-placeholder"));
if((G__66981__$1 == null)){
return null;
} else {
return G__66981__$1.click();
}
}
} else {
return null;
}
});
frontend.handler.comments.reveal_comments_area_BANG_ = (function frontend$handler$comments$reveal_comments_area_BANG_(var_args){
var G__66983 = arguments.length;
switch (G__66983) {
case 1:
return frontend.handler.comments.reveal_comments_area_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.comments.reveal_comments_area_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.comments.reveal_comments_area_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (comments_area){
return frontend.handler.comments.reveal_comments_area_BANG_.cljs$core$IFn$_invoke$arity$2(comments_area,null);
}));

(frontend.handler.comments.reveal_comments_area_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (comments_area,p__66984){
var map__66985 = p__66984;
var map__66985__$1 = cljs.core.__destructure_map(map__66985);
var focus_editor_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66985__$1,new cljs.core.Keyword(null,"focus-editor?","focus-editor?",78997739));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.comments._LT_comments_area_block(comments_area)),(function (comments_area__$1){
return promesa.protocols._promise((function (){var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(comments_area__$1);
if(cljs.core.truth_(temp__5825__auto__)){
var uuid = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.expand_block_BANG_(uuid)),(function (___27434__auto__){
return promesa.protocols._promise(requestAnimationFrame((function (){
var temp__5825__auto____$1 = goog.dom.getElement((""+"ls-block-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)));
if(cljs.core.truth_(temp__5825__auto____$1)){
var comments_area_el = temp__5825__auto____$1;
comments_area_el.scrollIntoView(({"block": "nearest", "behavior": "smooth"}));

if(cljs.core.truth_(focus_editor_QMARK_)){
return setTimeout((function (){
var G__66987 = goog.dom.getElement((""+"ls-block-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)));
if((G__66987 == null)){
return null;
} else {
return frontend.handler.comments.focus_comments_reply_BANG_(G__66987);
}
}),(0));
} else {
return null;
}
} else {
return null;
}
})));
}));
}));
} else {
return null;
}
})());
}));
}));
}));

(frontend.handler.comments.reveal_comments_area_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.comments.expand_comments_area_BANG_ = (function frontend$handler$comments$expand_comments_area_BANG_(comments_area){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.comments._LT_comments_area_block(comments_area)),(function (comments_area__$1){
return promesa.protocols._promise((function (){var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(comments_area__$1);
if(cljs.core.truth_(temp__5825__auto__)){
var uuid = temp__5825__auto__;
return frontend.handler.editor.expand_block_BANG_(uuid);
} else {
return null;
}
})());
}));
}));
});
frontend.handler.comments.edit_comments_area_title_BANG_ = (function frontend$handler$comments$edit_comments_area_title_BANG_(comments_area,container_id){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.comments._LT_comments_area_block(comments_area)),(function (comments_area__$1){
return promesa.protocols._promise((cljs.core.truth_(comments_area__$1)?(function (){var G__66988 = comments_area__$1;
var G__66989 = new cljs.core.Keyword(null,"max","max",61366548);
var G__66990 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container-id","container-id",1274665684),(function (){var or__5142__auto__ = container_id;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"unknown-container","unknown-container",1739831473);
}
})()], null);
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__66988,G__66989,G__66990) : frontend.handler.editor.edit_block_BANG_.call(null,G__66988,G__66989,G__66990));
})():null));
}));
}));
});
frontend.handler.comments.selected_block_entities = (function frontend$handler$comments$selected_block_entities(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.all(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.handler.comments._LT_block_ref,frontend.state.get_selection_block_ids()))),(function (blocks){
return promesa.protocols._promise(cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,blocks)));
}));
}));
});
frontend.handler.comments.edit_block_entity = (function frontend$handler$comments$edit_block_entity(){
var temp__5825__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5825__auto__)){
var block = temp__5825__auto__;
return frontend.handler.comments._LT_block_ref(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
} else {
return null;
}
});
frontend.handler.comments.comment_shortcut_targets = (function frontend$handler$comments$comment_shortcut_targets(){
if(frontend.state.editing_QMARK_()){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.comments.edit_block_entity()),(function (block){
return promesa.protocols._promise((function (){var G__66994 = block;
var G__66994__$1 = (((G__66994 == null))?null:(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__66994],null)));
if((G__66994__$1 == null)){
return null;
} else {
return cljs.core.seq(G__66994__$1);
}
})());
}));
}));
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.comments.selected_block_entities()),(function (blocks){
return promesa.protocols._promise(cljs.core.seq(blocks));
}));
}));
}
});
frontend.handler.comments.current_edit_block_blank_QMARK_ = (function frontend$handler$comments$current_edit_block_blank_QMARK_(){
var temp__5825__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5825__auto__)){
var block = temp__5825__auto__;
return clojure.string.blank_QMARK_((function (){var or__5142__auto__ = frontend.state.get_edit_content();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return "";
}
}
})());
} else {
return null;
}
});
frontend.handler.comments.set_current_block_as_comments_area_BANG_ = (function frontend$handler$comments$set_current_block_as_comments_area_BANG_(){
var temp__5825__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5825__auto__)){
var block = temp__5825__auto__;
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.property.set_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","tags","block/tags",1814948340),frontend.components.block.comments_model.comments_tag_ident)),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.clear_edit_BANG_()),(function (___27434__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.comments.reveal_comments_area_BANG_.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus-editor?","focus-editor?",78997739),true], null))),(function (___27434__auto____$1){
return promesa.protocols._promise(block);
}));
}));
}));
}));
} else {
return null;
}
});
frontend.handler.comments.add_comment_to_blocks_BANG_ = (function frontend$handler$comments$add_comment_to_blocks_BANG_(blocks){
var temp__5825__auto__ = cljs.core.seq(frontend.components.block.comments_model.comment_target_blocks(blocks));
if(temp__5825__auto__){
var comment_targets = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.comments.ensure_comments_area_for_selected_blocks_BANG_(comment_targets)),(function (comments_area){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(comments_area)?frontend.handler.comments.reveal_comments_area_BANG_.cljs$core$IFn$_invoke$arity$2(comments_area,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus-editor?","focus-editor?",78997739),true], null)):null)),(function (___27434__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.clear_selection_BANG_()),(function (___27434__auto____$1){
return promesa.protocols._promise(frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","hide-action-bar","editor/hide-action-bar",-1927566378)], null)));
}));
}));
}));
}));
} else {
return null;
}
});
frontend.handler.comments.add_comment_to_current_context_BANG_ = (function frontend$handler$comments$add_comment_to_current_context_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___67044 = arguments.length;
var i__5877__auto___67045 = (0);
while(true){
if((i__5877__auto___67045 < len__5876__auto___67044)){
args__5882__auto__.push((arguments[i__5877__auto___67045]));

var G__67046 = (i__5877__auto___67045 + (1));
i__5877__auto___67045 = G__67046;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return frontend.handler.comments.add_comment_to_current_context_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(frontend.handler.comments.add_comment_to_current_context_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_){
if(cljs.core.truth_((function (){var and__5140__auto__ = frontend.state.editing_QMARK_();
if(and__5140__auto__){
return frontend.handler.comments.current_edit_block_blank_QMARK_();
} else {
return and__5140__auto__;
}
})())){
return frontend.handler.comments.set_current_block_as_comments_area_BANG_();
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.comments.comment_shortcut_targets()),(function (comment_targets){
return promesa.protocols._mcat(promesa.protocols._promise(((frontend.state.editing_QMARK_())?(function (){
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

return frontend.state.clear_edit_BANG_();
})()
:null)),(function (___27434__auto__){
return promesa.protocols._promise(frontend.handler.comments.add_comment_to_blocks_BANG_(comment_targets));
}));
}));
}));
}
}));

(frontend.handler.comments.add_comment_to_current_context_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.handler.comments.add_comment_to_current_context_BANG_.cljs$lang$applyTo = (function (seq67003){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67003));
}));

frontend.handler.comments.insert_comment_BANG_ = (function frontend$handler$comments$insert_comment_BANG_(comments_block,content){
return frontend.handler.editor.api_insert_new_block_BANG_(content,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(comments_block),new cljs.core.Keyword(null,"end?","end?",-1423391609),true,new cljs.core.Keyword(null,"edit-block?","edit-block?",-310383789),false,new cljs.core.Keyword(null,"other-attrs","other-attrs",-951608726),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","tags","block/tags",1814948340),cljs.core.PersistentHashSet.createAsIfByAssoc([frontend.components.block.comments_model.comment_tag_ident])], null)], null));
});
frontend.handler.comments.create_sibling_block_after_comments_BANG_ = (function frontend$handler$comments$create_sibling_block_after_comments_BANG_(comments_block){
return frontend.handler.editor.api_insert_new_block_BANG_("",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(comments_block),new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),true,new cljs.core.Keyword(null,"edit-block?","edit-block?",-310383789),true], null));
});
frontend.handler.comments.save_comment_BANG_ = (function frontend$handler$comments$save_comment_BANG_(comment_block,content){
return frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.state.get_current_repo(),comment_block,content);
});
frontend.handler.comments.delete_comment_BANG_ = (function frontend$handler$comments$delete_comment_BANG_(comment_block){
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","delete-comment","thread-api/delete-comment",-342525314),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,frontend.handler.comments.worker_block_ref(comment_block)], 0));
} else {
return null;
}
});
frontend.handler.comments.paste_assets_BANG_ = (function frontend$handler$comments$paste_assets_BANG_(target_block,e){
var clipboard_data = frontend.handler.comments.goog$module$goog$object.get(e,"clipboardData");
var files = (function (){var G__67036 = clipboard_data;
if((G__67036 == null)){
return null;
} else {
return frontend.handler.comments.goog$module$goog$object.get(G__67036,"files");
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = target_block;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.seq(files);
} else {
return and__5140__auto__;
}
})())){
frontend.util.stop(e);

frontend.handler.editor.assets.db_based_save_assets_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(files),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"target-block","target-block",348392017),target_block], 0));

return true;
} else {
return null;
}
});

//# sourceMappingURL=frontend.handler.comments.js.map
