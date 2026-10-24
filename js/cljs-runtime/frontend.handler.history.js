goog.provide('frontend.handler.history');
frontend.handler.history._LT_pull_block = (function frontend$handler$history$_LT_pull_block(block_uuid){
var temp__5825__auto__ = (function (){var and__5140__auto__ = block_uuid;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.state.get_current_repo();
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null)], 0));
} else {
return null;
}
});
frontend.handler.history.restore_cursor_BANG_ = (function frontend$handler$history$restore_cursor_BANG_(p__67285){
var map__67286 = p__67285;
var map__67286__$1 = cljs.core.__destructure_map(map__67286);
var editor_cursors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67286__$1,new cljs.core.Keyword(null,"editor-cursors","editor-cursors",1786594845));
var block_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67286__$1,new cljs.core.Keyword(null,"block-content","block-content",476919690));
var undo_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67286__$1,new cljs.core.Keyword(null,"undo?","undo?",85877626));
var cursor = (cljs.core.truth_(undo_QMARK_)?cljs.core.first(editor_cursors):(function (){var or__5142__auto__ = cljs.core.last(editor_cursors);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.first(editor_cursors);
}
})());
var map__67287 = cursor;
var map__67287__$1 = cljs.core.__destructure_map(map__67287);
var selected_block_uuids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67287__$1,new cljs.core.Keyword(null,"selected-block-uuids","selected-block-uuids",-1135597388));
var selection_direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67287__$1,new cljs.core.Keyword(null,"selection-direction","selection-direction",2031740782));
var block_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67287__$1,new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67287__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var start_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67287__$1,new cljs.core.Keyword(null,"start-pos","start-pos",668789086));
var end_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67287__$1,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
var selected_blocks = ((cljs.core.seq(selected_block_uuids))?cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(frontend.util.get_blocks_by_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([selected_block_uuids], 0))):null);
var pos = (cljs.core.truth_(undo_QMARK_)?(function (){var or__5142__auto__ = start_pos;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return end_pos;
}
})():(function (){var or__5142__auto__ = end_pos;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return start_pos;
}
})());
if(cljs.core.seq(selected_blocks)){
frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$2(selected_blocks,selection_direction);

return null;
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.history._LT_pull_block(block_uuid)),(function (block){
return promesa.protocols._promise((cljs.core.truth_(block)?(function (){var G__67288 = block;
var G__67289 = pos;
var G__67290 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id,new cljs.core.Keyword(null,"custom-content","custom-content",-8240001),block_content,new cljs.core.Keyword(null,"save-current-block?","save-current-block?",-1892646594),false], null);
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__67288,G__67289,G__67290) : frontend.handler.editor.edit_block_BANG_.call(null,G__67288,G__67289,G__67290));
})():null));
}));
}));
}
});
frontend.handler.history.restore_app_state_BANG_ = (function frontend$handler$history$restore_app_state_BANG_(state){
var route_data = new cljs.core.Keyword(null,"route-data","route-data",626955263).cljs$core$IFn$_invoke$arity$1(state);
var current_route = new cljs.core.Keyword(null,"route-match","route-match",-1450985937).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0());
var current_route_data = frontend.persist_db.browser.get_route_data(current_route);
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(route_data,current_route_data);
if(and__5140__auto__){
var and__5140__auto____$1 = route_data;
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"home","home",-74557309),null,new cljs.core.Keyword(null,"all-journals","all-journals",-347015095),null,new cljs.core.Keyword(null,"page","page",849072397),null,new cljs.core.Keyword(null,"page-block","page-block",504302814),null], null), null),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(route_data));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
frontend.handler.route.redirect_BANG_(route_data);
} else {
}

return frontend.state.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"route-data","route-data",626955263))], 0));
});
frontend.handler.history.restore_cursor_and_state_BANG_ = (function frontend$handler$history$restore_cursor_and_state_BANG_(result){
frontend.state.set_state_BANG_(new cljs.core.Keyword("history","paused?","history/paused?",-21834005),true);

var map__67295 = result;
var map__67295__$1 = cljs.core.__destructure_map(map__67295);
var data = map__67295__$1;
var ui_state_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67295__$1,new cljs.core.Keyword(null,"ui-state-str","ui-state-str",1589208687));
var undo_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67295__$1,new cljs.core.Keyword(null,"undo?","undo?",85877626));
var restore_result = (cljs.core.truth_(ui_state_str)?(function (){var map__67296 = logseq.db.read_transit_str(ui_state_str);
var map__67296__$1 = cljs.core.__destructure_map(map__67296);
var old_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67296__$1,new cljs.core.Keyword(null,"old-state","old-state",1039580704));
var new_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67296__$1,new cljs.core.Keyword(null,"new-state","new-state",-490349212));
if(cljs.core.truth_(undo_QMARK_)){
return frontend.handler.history.restore_app_state_BANG_(old_state);
} else {
return frontend.handler.history.restore_app_state_BANG_(new_state);
}
})():frontend.handler.history.restore_cursor_BANG_(data));
if(promesa.core.promise_QMARK_(restore_result)){
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(restore_result,(function (){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("history","paused?","history/paused?",-21834005),false);
}));
} else {
frontend.state.set_state_BANG_(new cljs.core.Keyword("history","paused?","history/paused?",-21834005),false);

return restore_result;
}
});
var _STAR_last_request_67303 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
frontend.handler.history.undo_aux_BANG_ = (function frontend$handler$history$undo_aux_BANG_(e){
if(cljs.core.truth_(new cljs.core.Keyword("editor","code-block-context","editor/code-block-context",-1384305346).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()))){
return null;
} else {
frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","op","editor/op",-441449246),new cljs.core.Keyword(null,"undo","undo",-1818036302));

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.deref(_STAR_last_request_67303)),(function (___27434__auto__){
return promesa.protocols._promise((function (){var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
frontend.util.stop(e);

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","last-replace-ref-content-tx","editor/last-replace-ref-content-tx",831177325),repo], null),null)),(function (___27434__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0()),(function (___27434__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.clear_editor_action_BANG_()),(function (___27434__auto____$3){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.reset_BANG_(_STAR_last_request_67303,frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","undo-redo-undo","thread-api/undo-redo-undo",-1150708709),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo], 0)))),(function (___27434__auto____$4){
return promesa.protocols._promise(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.deref(_STAR_last_request_67303)),(function (result){
return promesa.protocols._promise(frontend.handler.history.restore_cursor_and_state_BANG_(result));
}));
})));
}));
}));
}));
}));
}));
} else {
return null;
}
})());
}));
}));
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.history !== 'undefined') && (typeof frontend.handler.history.undo_BANG_ !== 'undefined')){
} else {
frontend.handler.history.undo_BANG_ = goog.functions.debounce(frontend.handler.history.undo_aux_BANG_,(20));
}
var _STAR_last_request_67305 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
frontend.handler.history.redo_aux_BANG_ = (function frontend$handler$history$redo_aux_BANG_(e){
if(cljs.core.truth_(new cljs.core.Keyword("editor","code-block-context","editor/code-block-context",-1384305346).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()))){
return null;
} else {
frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","op","editor/op",-441449246),new cljs.core.Keyword(null,"redo","redo",501190664));

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.deref(_STAR_last_request_67305)),(function (___27434__auto__){
return promesa.protocols._promise((function (){var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
frontend.util.stop(e);

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0()),(function (___27434__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.clear_editor_action_BANG_()),(function (___27434__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.reset_BANG_(_STAR_last_request_67305,frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","undo-redo-redo","thread-api/undo-redo-redo",-173277310),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo], 0)))),(function (___27434__auto____$3){
return promesa.protocols._promise(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.deref(_STAR_last_request_67305)),(function (result){
return promesa.protocols._promise(frontend.handler.history.restore_cursor_and_state_BANG_(result));
}));
})));
}));
}));
}));
}));
} else {
return null;
}
})());
}));
}));
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.history !== 'undefined') && (typeof frontend.handler.history.redo_BANG_ !== 'undefined')){
} else {
frontend.handler.history.redo_BANG_ = goog.functions.debounce(frontend.handler.history.redo_aux_BANG_,(20));
}

//# sourceMappingURL=frontend.handler.history.js.map
