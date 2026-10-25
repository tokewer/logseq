goog.provide('frontend.handler.editor.lifecycle');
frontend.handler.editor.lifecycle._LT_record_editor_info_BANG_ = (function frontend$handler$editor$lifecycle$_LT_record_editor_info_BANG_(repo,edit_block_db_id,editor_info){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block_page_info(repo,edit_block_db_id)),(function (page_info){
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page_info)),(function (page_id){
return promesa.protocols._promise((cljs.core.truth_(page_id)?frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","undo-redo-record-editor-info","thread-api/undo-redo-record-editor-info",2076838667),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,editor_info], 0)):null));
}));
}));
}));
});
frontend.handler.editor.lifecycle.did_mount_BANG_ = (function frontend$handler$editor$lifecycle$did_mount_BANG_(id,config){
var content = frontend.state.get_edit_content();
var input = frontend.state.get_input();
var node = frontend.util.rec_get_node(input,"ls-block");
var container_id = (cljs.core.truth_(node)?(function (){var temp__5825__auto__ = dommy.core.attr(node,"containerid");
if(cljs.core.truth_(temp__5825__auto__)){
var container_id_str = temp__5825__auto__;
return frontend.util.safe_parse_int(container_id_str);
} else {
return null;
}
})():null);
if(cljs.core.truth_(input)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"skip-focus?","skip-focus?",-969271680).cljs$core$IFn$_invoke$arity$1(config))){
} else {
input.focus();
}
} else {
}

if(cljs.core.truth_(container_id)){
frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","container-id","editor/container-id",1915616583),container_id);
} else {
}

if(cljs.core.truth_(content)){
frontend.handler.editor.format.restore_cursor_pos_BANG_(id,content);
} else {
}

var temp__5825__auto___84608 = goog.dom.getElement(id);
if(cljs.core.truth_(temp__5825__auto___84608)){
var element_84609 = temp__5825__auto___84608;
setTimeout((function (){
return frontend.util.scroll_editor_cursor.cljs$core$IFn$_invoke$arity$1(element_84609);
}),(50));
} else {
}

if(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"skip-focus?","skip-focus?",-969271680).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"redo","redo",501190664),null,new cljs.core.Keyword(null,"undo","undo",-1818036302),null], null), null),frontend.state.get_state(new cljs.core.Keyword("editor","op","editor/op",-441449246)));
}
})())){
} else {
var temp__5825__auto___84610 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block());
if(cljs.core.truth_(temp__5825__auto___84610)){
var edit_block_db_id_84611 = temp__5825__auto___84610;
var repo_84612 = frontend.state.get_current_repo();
var editor_info_84613 = frontend.state.get_editor_info();
frontend.handler.editor.lifecycle._LT_record_editor_info_BANG_(repo_84612,edit_block_db_id_84611,editor_info_84613);
} else {
}
}

return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","op","editor/op",-441449246),null);
});
frontend.handler.editor.lifecycle.use_did_mount_BANG_ = (function frontend$handler$editor$lifecycle$use_did_mount_BANG_(id,config){
return logseq.shui.hooks.use_layout_effect_BANG_((function (){
return frontend.handler.editor.lifecycle.did_mount_BANG_(id,config);
}),cljs.core.PersistentVector.EMPTY);
});

//# sourceMappingURL=frontend.handler.editor.lifecycle.js.map
