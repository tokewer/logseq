goog.provide('frontend.handler.editor.quick_add');
frontend.handler.editor.quick_add.quick_add_ensure_new_block_exists_BANG_ = (function frontend$handler$editor$quick_add$quick_add_ensure_new_block_exists_BANG_(){
var graph = frontend.state.get_current_repo();
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block(graph,frontend.date.today())),(function (___27434__auto__){
return promesa.protocols._promise(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block_with_children(graph,logseq.common.config.quick_add_page_name)),(function (add_page_result){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.worker_block_with_children(add_page_result)),(function (add_page){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var temp__5825__auto__ = frontend.handler.user.user_uuid();
if(cljs.core.truth_(temp__5825__auto__)){
var id_str = temp__5825__auto__;
return cljs.core.uuid(id_str);
} else {
return null;
}
})()),(function (user_id){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(user_id)?frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(graph,user_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0)):null)),(function (user){
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(user)),(function (user_db_id){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.worker_children(add_page)),(function (children){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(user_db_id)?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (block){
var create_by_id = frontend.handler.editor.ref_db_id(new cljs.core.Keyword("logseq.property","created-by-ref","logseq.property/created-by-ref",854433908).cljs$core$IFn$_invoke$arity$1(block));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_db_id,create_by_id);
}),children):children)),(function (children_SINGLEQUOTE_){
return promesa.protocols._promise(((cljs.core.empty_QMARK_(children_SINGLEQUOTE_))?frontend.handler.editor.api_insert_new_block_BANG_("",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(add_page),new cljs.core.Keyword(null,"container-id","container-id",1274665684),new cljs.core.Keyword(null,"unknown-container","unknown-container",1739831473),new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),false], null)):null));
}));
}));
}));
}));
}));
}));
}));
})));
}));
}));
});
frontend.handler.editor.quick_add.show_quick_add = (function frontend$handler$editor$quick_add$show_quick_add(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.quick_add.quick_add_ensure_new_block_exists_BANG_()),(function (___27434__auto__){
return promesa.protocols._promise(frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dialog","quick-add","dialog/quick-add",802706812)], null)));
}));
}));
});
frontend.handler.editor.quick_add.quick_add_blocks_BANG_ = (function frontend$handler$editor$quick_add$quick_add_blocks_BANG_(){
var graph = frontend.state.get_current_repo();
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0()),(function (___27434__auto__){
return promesa.protocols._promise(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block_with_children(graph,frontend.date.today())),(function (today_result){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.worker_block_with_children(today_result)),(function (today){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block_with_children(graph,logseq.common.config.quick_add_page_name)),(function (add_page_result){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.worker_block_with_children(add_page_result)),(function (add_page){
return promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = today;
if(cljs.core.truth_(and__5140__auto__)){
return add_page;
} else {
return and__5140__auto__;
}
})())?(function (){var children = frontend.handler.editor.worker_children(add_page);
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core.seq(children))?(function (){var temp__5823__auto__ = cljs.core.last(logseq.db.sort_by_order(frontend.handler.editor.worker_children(today)));
if(cljs.core.truth_(temp__5823__auto__)){
var today_last_child = temp__5823__auto__;
return frontend.handler.editor.move_blocks_BANG_(children,today_last_child,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),true], null));
} else {
return frontend.handler.editor.move_blocks_BANG_(children,today,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),false], null));
}
})():null)),(function (___27434__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.close_dialog_BANG_()),(function (___27434__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise((logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null))),(function (___27434__auto____$3){
return promesa.protocols._promise(((cljs.core.seq(children))?frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("journal","add-blocks-to-today-success","journal/add-blocks-to-today-success",1779814409)], 0)),new cljs.core.Keyword(null,"success","success",1890645906)):null));
}));
}));
}));
}));
})():null));
}));
}));
}));
}));
})));
}));
}));
});
frontend.handler.editor.quick_add.quick_add = (function frontend$handler$editor$quick_add$quick_add(){
if(cljs.core.truth_(logseq.shui.dialog.core.get_dialog(new cljs.core.Keyword(null,"ls-dialog-quick-add","ls-dialog-quick-add",442995164)))){
return frontend.handler.editor.quick_add.quick_add_blocks_BANG_();
} else {
return frontend.handler.editor.quick_add.show_quick_add();
}
});
/**
 * Get quick add blocks for the current user if logged in
 */
frontend.handler.editor.quick_add._LT_get_user_quick_add_blocks = (function frontend$handler$editor$quick_add$_LT_get_user_quick_add_blocks(){
var repo = frontend.state.get_current_repo();
var user_id_str = frontend.handler.user.user_uuid();
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block_with_children(repo,logseq.common.config.quick_add_page_name)),(function (page_result){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.worker_block_with_children(page_result)),(function (page){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-rtc-graph-uuid","thread-api/get-rtc-graph-uuid",-249168913),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo], 0))),(function (graph_rtc_uuid){
return promesa.protocols._promise((cljs.core.truth_(page)?(function (){var children = frontend.handler.editor.worker_children(page);
if(cljs.core.truth_((function (){var and__5140__auto__ = user_id_str;
if(cljs.core.truth_(and__5140__auto__)){
return graph_rtc_uuid;
} else {
return and__5140__auto__;
}
})())){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,cljs.core.uuid(user_id_str),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (user){
return promesa.protocols._promise((function (){var temp__5823__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(user);
if(cljs.core.truth_(temp__5823__auto__)){
var user_db_id = temp__5823__auto__;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (block){
var create_by_id = frontend.handler.editor.ref_db_id(new cljs.core.Keyword("logseq.property","created-by-ref","logseq.property/created-by-ref",854433908).cljs$core$IFn$_invoke$arity$1(block));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_db_id,create_by_id)) || ((create_by_id == null)));
}),children);
} else {
return children;
}
})());
}));
}));
} else {
return children;
}
})():(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Quick add page doesn't exists",cljs.core.PersistentArrayMap.EMPTY)})()));
}));
}));
}));
}));
});
frontend.handler.editor.quick_add.quick_add_open_last_block_BANG_ = (function frontend$handler$editor$quick_add$quick_add_open_last_block_BANG_(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.quick_add._LT_get_user_quick_add_blocks()),(function (blocks){
return promesa.protocols._promise(((cljs.core.seq(blocks))?(function (){var block = cljs.core.last(logseq.db.sort_by_order(blocks));
var G__66872 = block;
var G__66873 = new cljs.core.Keyword(null,"max","max",61366548);
var G__66874 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container-id","container-id",1274665684),new cljs.core.Keyword(null,"unknown-container","unknown-container",1739831473)], null);
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__66872,G__66873,G__66874) : frontend.handler.editor.edit_block_BANG_.call(null,G__66872,G__66873,G__66874));
})():null));
}));
}));
});

//# sourceMappingURL=frontend.handler.editor.quick_add.js.map
