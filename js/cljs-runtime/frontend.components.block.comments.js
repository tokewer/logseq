goog.provide('frontend.components.block.comments');
goog.scope(function(){
  frontend.components.block.comments.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.components.block.comments.comment_time_title = (function frontend$components$block$comments$comment_time_title(created_at){
if(typeof created_at === 'number'){
return frontend.date.int__GT_local_time_2(created_at);
} else {
return null;
}
});
frontend.components.block.comments.focus_comment_input_BANG_ = (function frontend$components$block$comments$focus_comment_input_BANG_(input_id){
return setTimeout((function (){
var G__40032 = goog.dom.getElement(input_id);
if((G__40032 == null)){
return null;
} else {
return G__40032.focus();
}
}),(0));
});
frontend.components.block.comments.comment_editor_value = (function frontend$components$block$comments$comment_editor_value(input_id){
var G__40033 = goog.dom.getElement(input_id);
if((G__40033 == null)){
return null;
} else {
return frontend.components.block.comments.goog$module$goog$object.get(G__40033,"value");
}
});
frontend.components.block.comments.closest_comments_area = (function frontend$components$block$comments$closest_comments_area(target){
var temp__5825__auto__ = (function (){var and__5140__auto__ = target;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.components.block.comments.goog$module$goog$object.get(target,"closest");
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var closest_fn = temp__5825__auto__;
return closest_fn.call(target,".ls-comments-area");
} else {
return null;
}
});
frontend.components.block.comments.closest_editor_autocomplete = (function frontend$components$block$comments$closest_editor_autocomplete(target){
var temp__5825__auto__ = (function (){var and__5140__auto__ = target;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.components.block.comments.goog$module$goog$object.get(target,"closest");
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var closest_fn = temp__5825__auto__;
return closest_fn.call(target,"#ui__ac");
} else {
return null;
}
});
frontend.components.block.comments.inside_comments_area_QMARK_ = (function frontend$components$block$comments$inside_comments_area_QMARK_(target){
return cljs.core.boolean$(frontend.components.block.comments.closest_comments_area(target));
});
frontend.components.block.comments.inside_editor_autocomplete_QMARK_ = (function frontend$components$block$comments$inside_editor_autocomplete_QMARK_(target){
return cljs.core.boolean$(frontend.components.block.comments.closest_editor_autocomplete(target));
});
frontend.components.block.comments.activate_comment_editor_BANG_ = (function frontend$components$block$comments$activate_comment_editor_BANG_(var_args){
var G__40048 = arguments.length;
switch (G__40048) {
case 4:
return frontend.components.block.comments.activate_comment_editor_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return frontend.components.block.comments.activate_comment_editor_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return frontend.components.block.comments.activate_comment_editor_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.components.block.comments.activate_comment_editor_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (input_id,block,content,container_id){
return frontend.components.block.comments.activate_comment_editor_BANG_.cljs$core$IFn$_invoke$arity$6(input_id,block,content,container_id,true,null);
}));

(frontend.components.block.comments.activate_comment_editor_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (input_id,block,content,container_id,sync_input_QMARK_){
return frontend.components.block.comments.activate_comment_editor_BANG_.cljs$core$IFn$_invoke$arity$6(input_id,block,content,container_id,sync_input_QMARK_,null);
}));

(frontend.components.block.comments.activate_comment_editor_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (input_id,block,content,container_id,sync_input_QMARK_,cursor_position){
frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","block-refs","editor/block-refs",-2016894855),cljs.core.PersistentHashSet.EMPTY);

frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","block","editor/block",1699377461),block);

frontend.state.set_editing_block_id_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5142__auto__ = container_id;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"comments-area","comments-area",1191144113);
}
})(),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null));

frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","container-id","editor/container-id",1915616583),container_id);

frontend.state.set_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("editor","content","editor/content",-756190443),(function (){var or__5142__auto__ = content;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], 0));

frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","last-key-code","editor/last-key-code",607982236),null);

frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","set-timestamp-block","editor/set-timestamp-block",1136443872),null);

frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","cursor-range","editor/cursor-range",1691491127),null);

if(typeof cursor_position === 'number'){
frontend.state.set_editor_last_pos_BANG_(cursor_position);
} else {
}

if(cljs.core.truth_(sync_input_QMARK_)){
var temp__5825__auto__ = goog.dom.getElement(input_id);
if(cljs.core.truth_(temp__5825__auto__)){
var input = temp__5825__auto__;
return frontend.util.set_change_value.cljs$core$IFn$_invoke$arity$2(input,(function (){var or__5142__auto__ = content;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})());
} else {
return null;
}
} else {
return null;
}
}));

(frontend.components.block.comments.activate_comment_editor_BANG_.cljs$lang$maxFixedArity = 6);

frontend.components.block.comments.comment_box_editor_view = (function frontend$components$block$comments$comment_box_editor_view(p__40067){
var map__40068 = p__40067;
var map__40068__$1 = cljs.core.__destructure_map(map__40068);
var input_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40068__$1,new cljs.core.Keyword(null,"input-id","input-id",1217549113));
var editor_box = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40068__$1,new cljs.core.Keyword(null,"editor-box","editor-box",708759870));
var activate_reply_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40068__$1,new cljs.core.Keyword(null,"activate-reply!","activate-reply!",-1449824480));
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40068__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var asset_target_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40068__$1,new cljs.core.Keyword(null,"asset-target-block","asset-target-block",-1768360476));
var update_draft_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40068__$1,new cljs.core.Keyword(null,"update-draft!","update-draft!",215006340));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40068__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var create_sibling_block_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40068__$1,new cljs.core.Keyword(null,"create-sibling-block!","create-sibling-block!",501046439));
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40068__$1,new cljs.core.Keyword(null,"config","config",994861415));
var focus_editor_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40068__$1,new cljs.core.Keyword(null,"focus-editor?","focus-editor?",78997739));
var draft_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40068__$1,new cljs.core.Keyword(null,"draft'","draft'",830120463));
var draft = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40068__$1,new cljs.core.Keyword(null,"draft","draft",1421831058));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40068__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var editor_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40068__$1,new cljs.core.Keyword(null,"editor-block","editor-block",-717612713));
var exit_comment_editor_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40068__$1,new cljs.core.Keyword(null,"exit-comment-editor!","exit-comment-editor!",-669304008));
var submit_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40068__$1,new cljs.core.Keyword(null,"submit!","submit!",-851629128));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-comment-box-editor","div.ls-comment-box-editor",-1554297958),(cljs.core.truth_((function (){var and__5140__auto__ = active_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return editor_box;
} else {
return and__5140__auto__;
}
})())?(function (){var G__40072 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"block","block",664686210),editor_block,new cljs.core.Keyword(null,"block-id","block-id",-70582834),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(editor_block),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"markdown","markdown",1227225089)], null);
var G__40073 = input_id;
var G__40074 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"comment-editor?","comment-editor?",-485501961),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"comment-asset-target-block","comment-asset-target-block",1883101500),asset_target_block,new cljs.core.Keyword(null,"skip-focus?","skip-focus?",-969271680),cljs.core.not(focus_editor_QMARK_),new cljs.core.Keyword(null,"editor-opts","editor-opts",-1306154715),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"on-paste","on-paste",-50859856),new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765)],[placeholder,(function (_e){
return frontend.components.block.comments.activate_comment_editor_BANG_.cljs$core$IFn$_invoke$arity$4(input_id,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(editor_block,new cljs.core.Keyword("block","title","block/title",710445684),draft),(function (){var or__5142__auto__ = frontend.components.block.comments.comment_editor_value(input_id);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return draft;
}
})(),container_id);
}),draft,(function (_e){
return setTimeout((function (){
if(frontend.components.block.comments.inside_comments_area_QMARK_(document.activeElement)){
return null;
} else {
return (exit_comment_editor_BANG_.cljs$core$IFn$_invoke$arity$0 ? exit_comment_editor_BANG_.cljs$core$IFn$_invoke$arity$0() : exit_comment_editor_BANG_.call(null));
}
}),(0));
}),(function (e){
if(cljs.core.truth_(frontend.handler.comments.paste_assets_BANG_(asset_target_block,e))){
return null;
} else {
frontend.handler.paste.editor_on_paste_BANG_(input_id)(e);

return setTimeout(update_draft_BANG_,(0));
}
}),(function (_e){
return (update_draft_BANG_.cljs$core$IFn$_invoke$arity$0 ? update_draft_BANG_.cljs$core$IFn$_invoke$arity$0() : update_draft_BANG_.call(null));
}),placeholder,frontend.util.stop_propagation,(function (_e){
return (update_draft_BANG_.cljs$core$IFn$_invoke$arity$0 ? update_draft_BANG_.cljs$core$IFn$_invoke$arity$0() : update_draft_BANG_.call(null));
}),(function (e){
if(frontend.components.block.comments_model.comment_submit_shortcut_QMARK_.cljs$core$IFn$_invoke$arity$2(e,frontend.state.get_editor_action())){
if(cljs.core.truth_(frontend.components.block.comments_model.submittable_comment_content((function (){var or__5142__auto__ = frontend.components.block.comments.comment_editor_value(input_id);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return draft;
}
})()))){
return (submit_BANG_.cljs$core$IFn$_invoke$arity$1 ? submit_BANG_.cljs$core$IFn$_invoke$arity$1(e) : submit_BANG_.call(null,e));
} else {
return (create_sibling_block_BANG_.cljs$core$IFn$_invoke$arity$1 ? create_sibling_block_BANG_.cljs$core$IFn$_invoke$arity$1(e) : create_sibling_block_BANG_.call(null,e));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Escape",frontend.util.ekey(e))){
frontend.util.stop(e);

return (exit_comment_editor_BANG_.cljs$core$IFn$_invoke$arity$0 ? exit_comment_editor_BANG_.cljs$core$IFn$_invoke$arity$0() : exit_comment_editor_BANG_.call(null));
} else {
return null;
}
}
})])], 0));
return (editor_box.cljs$core$IFn$_invoke$arity$3 ? editor_box.cljs$core$IFn$_invoke$arity$3(G__40072,G__40073,G__40074) : editor_box.call(null,G__40072,G__40073,G__40074));
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-comment-reply-placeholder","div.ls-comment-reply-placeholder",-294664129),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"role","role",-736691072),"button",new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(0),new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),frontend.util.stop_propagation,new cljs.core.Keyword(null,"on-click","on-click",1632826543),activate_reply_BANG_,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"Enter",null], null), null),frontend.util.ekey(e))){
return (activate_reply_BANG_.cljs$core$IFn$_invoke$arity$1 ? activate_reply_BANG_.cljs$core$IFn$_invoke$arity$1(e) : activate_reply_BANG_.call(null,e));
} else {
return null;
}
})], null),(function (){var or__5142__auto__ = draft_SINGLEQUOTE_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return placeholder;
}
})()], null))], null);
});
frontend.components.block.comments.comment_box_actions = (function frontend$components$block$comments$comment_box_actions(p__40078){
var map__40079 = p__40078;
var map__40079__$1 = cljs.core.__destructure_map(map__40079);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40079__$1,new cljs.core.Keyword(null,"content","content",15833224));
var on_cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40079__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932));
var submit_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40079__$1,new cljs.core.Keyword(null,"submit!","submit!",-851629128));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-comment-box-actions","div.ls-comment-box-actions",-1187335774),(cljs.core.truth_(on_cancel)?(function (){var G__40080 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),frontend.util.stop_propagation,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

return (on_cancel.cljs$core$IFn$_invoke$arity$0 ? on_cancel.cljs$core$IFn$_invoke$arity$0() : on_cancel.call(null));
})], null);
var G__40081 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","cancel","ui/cancel",-1964089788)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__40080,G__40081) : logseq.shui.ui.button.call(null,G__40080,G__40081));
})():null),(function (){var G__40082 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),"ls-comment-submit",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(content == null),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","submit","ui/submit",-49310281)], 0)),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","submit","ui/submit",-49310281)], 0)),new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),frontend.util.stop_propagation,new cljs.core.Keyword(null,"on-click","on-click",1632826543),submit_BANG_], null);
var G__40083 = logseq.shui.ui.tabler_icon("send",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(16)], null));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__40082,G__40083) : logseq.shui.ui.button.call(null,G__40082,G__40083));
})()], null);
});
frontend.components.block.comments.clear_comment_box_draft_BANG_ = (function frontend$components$block$comments$clear_comment_box_draft_BANG_(comments_block,input_id,set_draft_BANG_){
if(cljs.core.truth_(comments_block)){
frontend.components.block.comments_model.clear_comment_draft_BANG_(comments_block);
} else {
}

frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(input_id,"");

return (set_draft_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_draft_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_draft_BANG_.call(null,""));
});
frontend.components.block.comments.use_comment_box_outside_click_BANG_ = (function frontend$components$block$comments$use_comment_box_outside_click_BANG_(active_QMARK_,editor_block,exit_comment_editor_BANG_){
return logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(active_QMARK_)){
var on_pointer_down = (function (e){
if(((frontend.components.block.comments.inside_comments_area_QMARK_(e.target)) || (frontend.components.block.comments.inside_editor_autocomplete_QMARK_(e.target)))){
return null;
} else {
return (exit_comment_editor_BANG_.cljs$core$IFn$_invoke$arity$0 ? exit_comment_editor_BANG_.cljs$core$IFn$_invoke$arity$0() : exit_comment_editor_BANG_.call(null));
}
});
document.addEventListener("pointerdown",on_pointer_down,true);

return (function (){
return document.removeEventListener("pointerdown",on_pointer_down,true);
});
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [active_QMARK_,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(editor_block)], null));
});
frontend.components.block.comments.comment_box_editor_props = (function frontend$components$block$comments$comment_box_editor_props(p__40090){
var map__40091 = p__40090;
var map__40091__$1 = cljs.core.__destructure_map(map__40091);
var input_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40091__$1,new cljs.core.Keyword(null,"input-id","input-id",1217549113));
var editor_box = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40091__$1,new cljs.core.Keyword(null,"editor-box","editor-box",708759870));
var activate_reply_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40091__$1,new cljs.core.Keyword(null,"activate-reply!","activate-reply!",-1449824480));
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40091__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var asset_target_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40091__$1,new cljs.core.Keyword(null,"asset-target-block","asset-target-block",-1768360476));
var update_draft_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40091__$1,new cljs.core.Keyword(null,"update-draft!","update-draft!",215006340));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40091__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var create_sibling_block_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40091__$1,new cljs.core.Keyword(null,"create-sibling-block!","create-sibling-block!",501046439));
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40091__$1,new cljs.core.Keyword(null,"config","config",994861415));
var focus_editor_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40091__$1,new cljs.core.Keyword(null,"focus-editor?","focus-editor?",78997739));
var draft_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40091__$1,new cljs.core.Keyword(null,"draft'","draft'",830120463));
var draft = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40091__$1,new cljs.core.Keyword(null,"draft","draft",1421831058));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40091__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var editor_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40091__$1,new cljs.core.Keyword(null,"editor-block","editor-block",-717612713));
var exit_comment_editor_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40091__$1,new cljs.core.Keyword(null,"exit-comment-editor!","exit-comment-editor!",-669304008));
var submit_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40091__$1,new cljs.core.Keyword(null,"submit!","submit!",-851629128));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"active?","active?",459499776),new cljs.core.Keyword(null,"activate-reply!","activate-reply!",-1449824480),new cljs.core.Keyword(null,"update-draft!","update-draft!",215006340),new cljs.core.Keyword(null,"asset-target-block","asset-target-block",-1768360476),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"create-sibling-block!","create-sibling-block!",501046439),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"focus-editor?","focus-editor?",78997739),new cljs.core.Keyword(null,"draft'","draft'",830120463),new cljs.core.Keyword(null,"draft","draft",1421831058),new cljs.core.Keyword(null,"container-id","container-id",1274665684),new cljs.core.Keyword(null,"editor-block","editor-block",-717612713),new cljs.core.Keyword(null,"exit-comment-editor!","exit-comment-editor!",-669304008),new cljs.core.Keyword(null,"submit!","submit!",-851629128),new cljs.core.Keyword(null,"input-id","input-id",1217549113),new cljs.core.Keyword(null,"editor-box","editor-box",708759870)],[active_QMARK_,activate_reply_BANG_,update_draft_BANG_,asset_target_block,placeholder,create_sibling_block_BANG_,config,focus_editor_QMARK_,draft_SINGLEQUOTE_,draft,container_id,editor_block,exit_comment_editor_BANG_,submit_BANG_,input_id,editor_box]);
});
frontend.components.block.comments.comment_box = (function (){var render_fn__31744__auto__ = (function frontend$components$block$comments$comment_box(p__40096){
var map__40097 = p__40096;
var map__40097__$1 = cljs.core.__destructure_map(map__40097);
var on_cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40097__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932));
var comment_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40097__$1,new cljs.core.Keyword(null,"comment-block","comment-block",-402237087));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40097__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40097__$1,new cljs.core.Keyword(null,"config","config",994861415));
var refocus_after_submit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40097__$1,new cljs.core.Keyword(null,"refocus-after-submit?","refocus-after-submit?",-1736450198),true);
var focus_on_mount_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40097__$1,new cljs.core.Keyword(null,"focus-on-mount?","focus-on-mount?",-371581718),false);
var comments_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40097__$1,new cljs.core.Keyword(null,"comments-block","comments-block",-465179953));
var initial_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40097__$1,new cljs.core.Keyword(null,"initial-value","initial-value",470619381));
var on_submit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40097__$1,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159));
var vec__40100 = logseq.shui.hooks.use_state(cljs.core.random_uuid());
var draft_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40100,(0),null);
var vec__40103 = logseq.shui.hooks.use_state((function (){var or__5142__auto__ = initial_value;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = frontend.components.block.comments_model.saved_comment_draft(comments_block);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return "";
}
}
})());
var draft = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40103,(0),null);
var set_draft_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40103,(1),null);
var draft_SINGLEQUOTE_ = ((clojure.string.blank_QMARK_(draft))?null:draft);
var editor_block = (function (){var or__5142__auto__ = comment_block;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.components.block.comments_model.comment_draft_block(comments_block,draft_uuid,draft);
}
})();
var input_id = (""+"edit-block-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(editor_block)));
var editor_box = frontend.state.get_component(new cljs.core.Keyword("editor","box","editor/box",-1921770435));
var container_id = new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(config);
var initial_active_QMARK_ = (function (){var or__5142__auto__ = comment_block;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = focus_on_mount_QMARK_;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return frontend.components.block.comments_model.comments_block_current_page_QMARK_(comments_block,frontend.state.get_current_page());
}
}
})();
var vec__40106 = logseq.shui.hooks.use_state(initial_active_QMARK_);
var active_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40106,(0),null);
var set_active_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40106,(1),null);
var vec__40109 = logseq.shui.hooks.use_state(focus_on_mount_QMARK_);
var focus_editor_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40109,(0),null);
var set_focus_editor_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40109,(1),null);
var activate_reply_BANG_ = (function (e){
frontend.util.stop(e);

(set_focus_editor_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_focus_editor_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_focus_editor_BANG_.call(null,true));

return (set_active_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_active_BANG_.call(null,true));
});
var clear_comment_edit_BANG_ = (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block()),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(editor_block))){
return frontend.state.clear_edit_BANG_();
} else {
return null;
}
});
var exit_comment_editor_BANG_ = (function (){
clear_comment_edit_BANG_();

(set_focus_editor_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_focus_editor_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_focus_editor_BANG_.call(null,false));

(set_active_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_active_BANG_.call(null,false));

if(cljs.core.truth_(on_cancel)){
return (on_cancel.cljs$core$IFn$_invoke$arity$0 ? on_cancel.cljs$core$IFn$_invoke$arity$0() : on_cancel.call(null));
} else {
return null;
}
});
var update_draft_BANG_ = (function (){
var value = (function (){var or__5142__auto__ = frontend.components.block.comments.comment_editor_value(input_id);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})();
frontend.components.block.comments.activate_comment_editor_BANG_.cljs$core$IFn$_invoke$arity$5(input_id,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(editor_block,new cljs.core.Keyword("block","title","block/title",710445684),value),value,container_id,false);

if(cljs.core.truth_(comments_block)){
frontend.components.block.comments_model.save_comment_draft_BANG_(comments_block,value);
} else {
}

return (set_draft_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_draft_BANG_.cljs$core$IFn$_invoke$arity$1(value) : set_draft_BANG_.call(null,value));
});
var content = frontend.components.block.comments_model.submittable_comment_content(draft);
var create_sibling_block_BANG_ = (function (e){
frontend.util.stop(e);

if(cljs.core.truth_((function (){var and__5140__auto__ = comments_block;
if(cljs.core.truth_(and__5140__auto__)){
return (comment_block == null);
} else {
return and__5140__auto__;
}
})())){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.comments.create_sibling_block_after_comments_BANG_(comments_block)),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.block.comments.clear_comment_box_draft_BANG_(comments_block,input_id,set_draft_BANG_)),(function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((set_active_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_active_BANG_.call(null,false))),(function (___21901__auto____$1){
return promesa.protocols._promise((set_focus_editor_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_focus_editor_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_focus_editor_BANG_.call(null,false)));
}));
}));
}));
}));
} else {
return null;
}
});
var submit_BANG_ = (function (e){
frontend.util.stop(e);

var content__$1 = frontend.components.block.comments_model.submittable_comment_content((function (){var or__5142__auto__ = frontend.components.block.comments.comment_editor_value(input_id);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return draft;
}
})());
if(cljs.core.truth_(content__$1)){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((on_submit.cljs$core$IFn$_invoke$arity$1 ? on_submit.cljs$core$IFn$_invoke$arity$1(content__$1) : on_submit.call(null,content__$1))),(function (_){
return promesa.protocols._promise((cljs.core.truth_(refocus_after_submit_QMARK_)?(function (){
frontend.components.block.comments.clear_comment_box_draft_BANG_(comments_block,input_id,set_draft_BANG_);

(set_active_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_active_BANG_.call(null,true));

(set_focus_editor_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_focus_editor_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_focus_editor_BANG_.call(null,true));

return frontend.components.block.comments.focus_comment_input_BANG_(input_id);
})()
:null));
}));
}));
} else {
return null;
}
});
logseq.shui.hooks.use_effect_BANG_((function (){
return clear_comment_edit_BANG_;
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(editor_block)], null));

logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_((function (){var and__5140__auto__ = active_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return focus_editor_QMARK_;
} else {
return and__5140__auto__;
}
})())){
frontend.components.block.comments.activate_comment_editor_BANG_.cljs$core$IFn$_invoke$arity$6(input_id,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(editor_block,new cljs.core.Keyword("block","title","block/title",710445684),draft),draft,container_id,true,frontend.components.block.comments_model.comment_edit_cursor_position(draft));
} else {
}

return null;
}),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [active_QMARK_,focus_editor_QMARK_,input_id,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(editor_block),draft,container_id], null));

frontend.components.block.comments.use_comment_box_outside_click_BANG_(active_QMARK_,editor_block,exit_comment_editor_BANG_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-comment-box","div.ls-comment-box",-1889134149),frontend.components.block.comments.comment_box_editor_view(frontend.components.block.comments.comment_box_editor_props(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"active?","active?",459499776),new cljs.core.Keyword(null,"activate-reply!","activate-reply!",-1449824480),new cljs.core.Keyword(null,"update-draft!","update-draft!",215006340),new cljs.core.Keyword(null,"asset-target-block","asset-target-block",-1768360476),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"create-sibling-block!","create-sibling-block!",501046439),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"focus-editor?","focus-editor?",78997739),new cljs.core.Keyword(null,"draft'","draft'",830120463),new cljs.core.Keyword(null,"draft","draft",1421831058),new cljs.core.Keyword(null,"container-id","container-id",1274665684),new cljs.core.Keyword(null,"editor-block","editor-block",-717612713),new cljs.core.Keyword(null,"exit-comment-editor!","exit-comment-editor!",-669304008),new cljs.core.Keyword(null,"submit!","submit!",-851629128),new cljs.core.Keyword(null,"input-id","input-id",1217549113),new cljs.core.Keyword(null,"editor-box","editor-box",708759870)],[active_QMARK_,activate_reply_BANG_,update_draft_BANG_,(function (){var or__5142__auto__ = comments_block;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(comment_block);
}
})(),placeholder,create_sibling_block_BANG_,config,focus_editor_QMARK_,draft_SINGLEQUOTE_,draft,container_id,editor_block,exit_comment_editor_BANG_,submit_BANG_,input_id,editor_box]))),frontend.components.block.comments.comment_box_actions(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),on_cancel,new cljs.core.Keyword(null,"submit!","submit!",-851629128),submit_BANG_], null))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$comments$comment_box__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__40120 = cljs.core.first(args__31746__auto__);
var G__40121 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__40120,G__40121) : io.factorhouse.hsx.core.obj_get.call(null,G__40120,G__40121));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"comment-box","comment-box",1794001596,null),args__31746__auto__),frontend$components$block$comments$comment_box,args__31746__auto__,null);
}
};
var frontend$components$block$comments$comment_box = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__40426__i = 0, G__40426__a = new Array(arguments.length -  0);
while (G__40426__i < G__40426__a.length) {G__40426__a[G__40426__i] = arguments[G__40426__i + 0]; ++G__40426__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__40426__a,0,null);
} 
return frontend$components$block$comments$comment_box__delegate.call(this,args__31746__auto__);};
frontend$components$block$comments$comment_box.cljs$lang$maxFixedArity = 0;
frontend$components$block$comments$comment_box.cljs$lang$applyTo = (function (arglist__40427){
var args__31746__auto__ = cljs.core.seq(arglist__40427);
return frontend$components$block$comments$comment_box__delegate(args__31746__auto__);
});
frontend$components$block$comments$comment_box.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$comments$comment_box__delegate;
return frontend$components$block$comments$comment_box;
})()
;
var memo_comp__31747__auto__ = (function (){var G__40123 = comp__31745__auto__;
var G__40124 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__40123,G__40124) : io.factorhouse.hsx.core.react_memo.call(null,G__40123,G__40124));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"comment-box");

return comp__31745__auto__;
})();
frontend.components.block.comments.open_comment_reaction_picker_BANG_ = (function frontend$components$block$comments$open_comment_reaction_picker_BANG_(comment_block,e){
frontend.util.stop(e);

var target = e.currentTarget;
var G__40129 = target;
var G__40130 = (function (p__40132){
var map__40133 = p__40132;
var map__40133__$1 = cljs.core.__destructure_map(map__40133);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40133__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return frontend.components.icon.icon_search(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (_emoji_event,emoji,_keep_popup_QMARK_){
frontend.handler.reaction.toggle_reaction_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(comment_block),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(emoji));

return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(id) : logseq.shui.ui.popup_hide_BANG_.call(null,id));
}),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emoji","emoji",1031230144),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("icon","tab-emojis","icon/tab-emojis",-1889512558)], 0))], null)], null),new cljs.core.Keyword(null,"default-tab","default-tab",-566872037),new cljs.core.Keyword(null,"emoji","emoji",1031230144),new cljs.core.Keyword(null,"show-used?","show-used?",4329186),true,new cljs.core.Keyword(null,"icon-value","icon-value",-510636889),null], null));
});
var G__40131 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ls-icon-picker"], null)], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__40129,G__40130,G__40131) : logseq.shui.ui.popup_show_BANG_.call(null,G__40129,G__40130,G__40131));
});
frontend.components.block.comments.comment_display_block = (function frontend$components$block$comments$comment_display_block(comment_block){
var comment_uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(comment_block);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([comment_block,frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$3(comment_uuid,cljs.core.get.cljs$core$IFn$_invoke$arity$3(comment_block,new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword(null,"markdown","markdown",1227225089)),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(comment_block))], 0));
});
frontend.components.block.comments.comment_row_view = (function (){var render_fn__31744__auto__ = (function frontend$components$block$comments$comment_row_view(config,comment_block,current_user_uuid,_STAR_hide_block_refs_QMARK_,_STAR_show_query_QMARK_,p__40148){
var map__40149 = p__40148;
var map__40149__$1 = cljs.core.__destructure_map(map__40149);
var block_content_or_editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40149__$1,new cljs.core.Keyword(null,"block-content-or-editor","block-content-or-editor",-1996059595));
var block_reactions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40149__$1,new cljs.core.Keyword(null,"block-reactions","block-reactions",76584951));
var vec__40152 = logseq.shui.hooks.use_state(false);
var editing_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40152,(0),null);
var set_editing_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40152,(1),null);
var map__40155 = frontend.components.block.comments_model.comment_row(comment_block);
var map__40155__$1 = cljs.core.__destructure_map(map__40155);
var author = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40155__$1,new cljs.core.Keyword(null,"author","author",2111686192));
var avatar_src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40155__$1,new cljs.core.Keyword(null,"avatar-src","avatar-src",2143818962));
var author_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40155__$1,new cljs.core.Keyword(null,"author-uuid","author-uuid",371566491));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40155__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var created_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40155__$1,new cljs.core.Keyword(null,"created-at","created-at",-89248644));
var show_author_QMARK_ = frontend.components.block.comments_model.comment_author_visible_QMARK_(current_user_uuid);
var comment_uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(comment_block);
var edit_input_id = (""+"edit-block-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(comment_uuid));
var parsed_block = frontend.components.block.comments.comment_display_block(comment_block);
var time_label = frontend.components.block.comments_model.comment_time_label.cljs$core$IFn$_invoke$arity$1(created_at);
var time_title = frontend.components.block.comments.comment_time_title(created_at);
var actions = cljs.core.set(frontend.components.block.comments_model.comment_actions(comment_block,current_user_uuid));
var placeholder = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.comments","placeholder","block.comments/placeholder",1568902332)], 0));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-comment-row","div.ls-comment-row",-1579571181),((show_author_QMARK_)?frontend.components.avatar.user_avatar(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"ls-comment-avatar",new cljs.core.Keyword(null,"title","title",636505583),author,new cljs.core.Keyword(null,"name","name",1843675177),author,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),author_uuid,new cljs.core.Keyword(null,"avatar-src","avatar-src",2143818962),avatar_src], null)):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-comment-main","div.ls-comment-main",1857986199),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-comment-meta","div.ls-comment-meta",-1302253923),((show_author_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ls-comment-author","span.ls-comment-author",-1890388936),author], null):null),(cljs.core.truth_(time_label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ls-comment-time","span.ls-comment-time",-1394035418),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),time_title], null),time_label], null):null)], null),(cljs.core.truth_(editing_QMARK_)?frontend.components.block.comments.comment_box(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"config","config",994861415),config,new cljs.core.Keyword(null,"comment-block","comment-block",-402237087),comment_block,new cljs.core.Keyword(null,"initial-value","initial-value",470619381),body,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"focus-on-mount?","focus-on-mount?",-371581718),true,new cljs.core.Keyword(null,"refocus-after-submit?","refocus-after-submit?",-1736450198),false,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),(function (){
return (set_editing_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_editing_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_editing_BANG_.call(null,false));
}),new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (content){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.handler.comments.save_comment_BANG_(comment_block,content),(function (_){
return (set_editing_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_editing_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_editing_BANG_.call(null,false));
})),(function (_error){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.comments","save-error","block.comments/save-error",-595628141)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
}));
})], null)):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-comment-body","div.ls-comment-body",1102366411),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_content_or_editor,config,parsed_block,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"edit-input-id","edit-input-id",-1876858101),edit_input_id,new cljs.core.Keyword(null,"block-id","block-id",-70582834),comment_uuid,new cljs.core.Keyword(null,"edit?","edit?",-842131310),false,new cljs.core.Keyword(null,"refs-count","refs-count",643531144),null,new cljs.core.Keyword(null,"*hide-block-refs?","*hide-block-refs?",-1362658712),_STAR_hide_block_refs_QMARK_,new cljs.core.Keyword(null,"hide-block-refs-count?","hide-block-refs-count?",-1723688145),true,new cljs.core.Keyword(null,"*show-query?","*show-query?",279819510),_STAR_show_query_QMARK_], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_reactions,comment_block], null)], null))], null),((frontend.config.publishing_QMARK_)?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-comment-actions","div.ls-comment-actions",530618587),(function (){var G__40161 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"class","class",-2030961996),"ls-comment-action",new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("command.editor","add-reaction","command.editor/add-reaction",31898964)], 0)),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("command.editor","add-reaction","command.editor/add-reaction",31898964)], 0)),new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),frontend.util.stop_propagation,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__40145_SHARP_){
return frontend.components.block.comments.open_comment_reaction_picker_BANG_(comment_block,p1__40145_SHARP_);
})], null);
var G__40162 = logseq.shui.ui.tabler_icon("mood-smile",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__40161,G__40162) : logseq.shui.ui.button.call(null,G__40161,G__40162));
})(),((cljs.core.contains_QMARK_(actions,new cljs.core.Keyword(null,"edit","edit",-1641834166)))?(function (){var G__40163 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"class","class",-2030961996),"ls-comment-action",new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","click-to-edit","editor/click-to-edit",1855770305)], 0)),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","click-to-edit","editor/click-to-edit",1855770305)], 0)),new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),frontend.util.stop_propagation,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

return (set_editing_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_editing_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_editing_BANG_.call(null,true));
})], null);
var G__40164 = logseq.shui.ui.tabler_icon("edit",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__40163,G__40164) : logseq.shui.ui.button.call(null,G__40163,G__40164));
})():null),((cljs.core.contains_QMARK_(actions,new cljs.core.Keyword(null,"delete","delete",-1768633620)))?(function (){var G__40165 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"class","class",-2030961996),"ls-comment-action ls-comment-delete",new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","delete","ui/delete",-1768677056)], 0)),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","delete","ui/delete",-1768677056)], 0)),new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),frontend.util.stop_propagation,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

return frontend.handler.comments.delete_comment_BANG_(comment_block);
})], null);
var G__40166 = logseq.shui.ui.tabler_icon("trash",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__40165,G__40166) : logseq.shui.ui.button.call(null,G__40165,G__40166));
})():null)], null))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$comments$comment_row_view__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__40167 = cljs.core.first(args__31746__auto__);
var G__40168 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__40167,G__40168) : io.factorhouse.hsx.core.obj_get.call(null,G__40167,G__40168));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"comment-row-view","comment-row-view",60350575,null),args__31746__auto__),frontend$components$block$comments$comment_row_view,args__31746__auto__,null);
}
};
var frontend$components$block$comments$comment_row_view = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__40446__i = 0, G__40446__a = new Array(arguments.length -  0);
while (G__40446__i < G__40446__a.length) {G__40446__a[G__40446__i] = arguments[G__40446__i + 0]; ++G__40446__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__40446__a,0,null);
} 
return frontend$components$block$comments$comment_row_view__delegate.call(this,args__31746__auto__);};
frontend$components$block$comments$comment_row_view.cljs$lang$maxFixedArity = 0;
frontend$components$block$comments$comment_row_view.cljs$lang$applyTo = (function (arglist__40447){
var args__31746__auto__ = cljs.core.seq(arglist__40447);
return frontend$components$block$comments$comment_row_view__delegate(args__31746__auto__);
});
frontend$components$block$comments$comment_row_view.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$comments$comment_row_view__delegate;
return frontend$components$block$comments$comment_row_view;
})()
;
var memo_comp__31747__auto__ = (function (){var G__40169 = comp__31745__auto__;
var G__40170 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__40169,G__40170) : io.factorhouse.hsx.core.react_memo.call(null,G__40169,G__40170));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"comment-row-view");

return comp__31745__auto__;
})();
frontend.components.block.comments.subscribed_comment_row = (function (){var render_fn__31744__auto__ = (function frontend$components$block$comments$subscribed_comment_row(config,comment_uuid,_STAR_hide_block_refs_QMARK_,_STAR_show_query_QMARK_,renderers){
var comment_block = frontend.db.hooks.use_block(comment_uuid);
var id_token = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("auth","id-token","auth/id-token",-332149946)], null));
var current_user_uuid = (function (){var G__40177 = id_token;
var G__40177__$1 = (((G__40177 == null))?null:frontend.handler.user.parse_jwt(G__40177));
if((G__40177__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"sub","sub",-2093760025).cljs$core$IFn$_invoke$arity$1(G__40177__$1);
}
})();
if(cljs.core.truth_(comment_block)){
return frontend.components.block.comments.comment_row_view(config,comment_block,current_user_uuid,_STAR_hide_block_refs_QMARK_,_STAR_show_query_QMARK_,renderers);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$comments$subscribed_comment_row__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__40180 = cljs.core.first(args__31746__auto__);
var G__40181 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__40180,G__40181) : io.factorhouse.hsx.core.obj_get.call(null,G__40180,G__40181));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"subscribed-comment-row","subscribed-comment-row",-1388388566,null),args__31746__auto__),frontend$components$block$comments$subscribed_comment_row,args__31746__auto__,null);
}
};
var frontend$components$block$comments$subscribed_comment_row = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__40451__i = 0, G__40451__a = new Array(arguments.length -  0);
while (G__40451__i < G__40451__a.length) {G__40451__a[G__40451__i] = arguments[G__40451__i + 0]; ++G__40451__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__40451__a,0,null);
} 
return frontend$components$block$comments$subscribed_comment_row__delegate.call(this,args__31746__auto__);};
frontend$components$block$comments$subscribed_comment_row.cljs$lang$maxFixedArity = 0;
frontend$components$block$comments$subscribed_comment_row.cljs$lang$applyTo = (function (arglist__40452){
var args__31746__auto__ = cljs.core.seq(arglist__40452);
return frontend$components$block$comments$subscribed_comment_row__delegate(args__31746__auto__);
});
frontend$components$block$comments$subscribed_comment_row.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$comments$subscribed_comment_row__delegate;
return frontend$components$block$comments$subscribed_comment_row;
})()
;
var memo_comp__31747__auto__ = (function (){var G__40182 = comp__31745__auto__;
var G__40183 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__40182,G__40183) : io.factorhouse.hsx.core.react_memo.call(null,G__40182,G__40183));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"subscribed-comment-row");

return comp__31745__auto__;
})();
frontend.components.block.comments.add_comment_button = (function (){var render_fn__31744__auto__ = (function frontend$components$block$comments$add_comment_button(config,comments_block,p__40184){
var map__40185 = p__40184;
var map__40185__$1 = cljs.core.__destructure_map(map__40185);
var focus_on_mount_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40185__$1,new cljs.core.Keyword(null,"focus-on-mount?","focus-on-mount?",-371581718));
var placeholder = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.comments","placeholder","block.comments/placeholder",1568902332)], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-comment-add","div.ls-comment-add",-895279000),frontend.components.block.comments.comment_box(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"config","config",994861415),config,new cljs.core.Keyword(null,"comments-block","comments-block",-465179953),comments_block,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"focus-on-mount?","focus-on-mount?",-371581718),focus_on_mount_QMARK_,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (content){
return frontend.handler.comments.insert_comment_BANG_(comments_block,content);
})], null))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$comments$add_comment_button__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__40186 = cljs.core.first(args__31746__auto__);
var G__40187 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__40186,G__40187) : io.factorhouse.hsx.core.obj_get.call(null,G__40186,G__40187));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"add-comment-button","add-comment-button",-926855080,null),args__31746__auto__),frontend$components$block$comments$add_comment_button,args__31746__auto__,null);
}
};
var frontend$components$block$comments$add_comment_button = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__40455__i = 0, G__40455__a = new Array(arguments.length -  0);
while (G__40455__i < G__40455__a.length) {G__40455__a[G__40455__i] = arguments[G__40455__i + 0]; ++G__40455__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__40455__a,0,null);
} 
return frontend$components$block$comments$add_comment_button__delegate.call(this,args__31746__auto__);};
frontend$components$block$comments$add_comment_button.cljs$lang$maxFixedArity = 0;
frontend$components$block$comments$add_comment_button.cljs$lang$applyTo = (function (arglist__40456){
var args__31746__auto__ = cljs.core.seq(arglist__40456);
return frontend$components$block$comments$add_comment_button__delegate(args__31746__auto__);
});
frontend$components$block$comments$add_comment_button.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$comments$add_comment_button__delegate;
return frontend$components$block$comments$add_comment_button;
})()
;
var memo_comp__31747__auto__ = (function (){var G__40188 = comp__31745__auto__;
var G__40189 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__40188,G__40189) : io.factorhouse.hsx.core.react_memo.call(null,G__40188,G__40189));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"add-comment-button");

return comp__31745__auto__;
})();
frontend.components.block.comments.scroll_comments_list_to_bottom_BANG_ = (function frontend$components$block$comments$scroll_comments_list_to_bottom_BANG_(el){
return (el.scrollTop = el.scrollHeight);
});
frontend.components.block.comments.set_comment_thread_targets_hover_BANG_ = (function frontend$components$block$comments$set_comment_thread_targets_hover_BANG_(comments_area,hover_QMARK_){
var seq__40196 = cljs.core.seq(frontend.components.block.comments_model.comment_thread_target_blocks(comments_area));
var chunk__40199 = null;
var count__40200 = (0);
var i__40201 = (0);
while(true){
if((i__40201 < count__40200)){
var target = chunk__40199.cljs$core$IIndexed$_nth$arity$2(null,i__40201);
var uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(target);
if(cljs.core.truth_(uuid)){
var temp__5825__auto___40462 = goog.dom.getElement((""+"ls-block-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)));
if(cljs.core.truth_(temp__5825__auto___40462)){
var el_40463 = temp__5825__auto___40462;
if(cljs.core.truth_(hover_QMARK_)){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(el_40463,"is-comment-thread-hovered");
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(el_40463,"is-comment-thread-hovered");
}
} else {
}


var G__40464 = seq__40196;
var G__40465 = chunk__40199;
var G__40466 = count__40200;
var G__40467 = (i__40201 + (1));
seq__40196 = G__40464;
chunk__40199 = G__40465;
count__40200 = G__40466;
i__40201 = G__40467;
continue;
} else {
var G__40468 = seq__40196;
var G__40469 = chunk__40199;
var G__40470 = count__40200;
var G__40471 = (i__40201 + (1));
seq__40196 = G__40468;
chunk__40199 = G__40469;
count__40200 = G__40470;
i__40201 = G__40471;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__40196);
if(temp__5825__auto__){
var seq__40196__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40196__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__40196__$1);
var G__40472 = cljs.core.chunk_rest(seq__40196__$1);
var G__40473 = c__5673__auto__;
var G__40474 = cljs.core.count(c__5673__auto__);
var G__40475 = (0);
seq__40196 = G__40472;
chunk__40199 = G__40473;
count__40200 = G__40474;
i__40201 = G__40475;
continue;
} else {
var target = cljs.core.first(seq__40196__$1);
var uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(target);
if(cljs.core.truth_(uuid)){
var temp__5825__auto___40476__$1 = goog.dom.getElement((""+"ls-block-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)));
if(cljs.core.truth_(temp__5825__auto___40476__$1)){
var el_40480 = temp__5825__auto___40476__$1;
if(cljs.core.truth_(hover_QMARK_)){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(el_40480,"is-comment-thread-hovered");
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(el_40480,"is-comment-thread-hovered");
}
} else {
}


var G__40483 = cljs.core.next(seq__40196__$1);
var G__40484 = null;
var G__40485 = (0);
var G__40486 = (0);
seq__40196 = G__40483;
chunk__40199 = G__40484;
count__40200 = G__40485;
i__40201 = G__40486;
continue;
} else {
var G__40487 = cljs.core.next(seq__40196__$1);
var G__40488 = null;
var G__40489 = (0);
var G__40490 = (0);
seq__40196 = G__40487;
chunk__40199 = G__40488;
count__40200 = G__40489;
i__40201 = G__40490;
continue;
}
}
} else {
return null;
}
}
break;
}
});
frontend.components.block.comments.comment_thread_targets_view = (function (){var render_fn__31744__auto__ = (function frontend$components$block$comments$comment_thread_targets_view(comments_area){
var targets = frontend.components.block.comments_model.comment_thread_target_blocks(comments_area);
if((cljs.core.count(targets) > (1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-comments-targets","div.ls-comments-targets",1518162920),(function (){var iter__5628__auto__ = (function frontend$components$block$comments$comment_thread_targets_view_$_iter__40229(s__40230){
return (new cljs.core.LazySeq(null,(function (){
var s__40230__$1 = s__40230;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__40230__$1);
if(temp__5825__auto__){
var s__40230__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40230__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__40230__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__40232 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__40231 = (0);
while(true){
if((i__40231 < size__5627__auto__)){
var target = cljs.core._nth(c__5626__auto__,i__40231);
cljs.core.chunk_append(b__40232,(function (){var uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(target);
var reference = frontend.state.get_component(new cljs.core.Keyword("block","reference","block/reference",1588749254));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-comments-target","div.ls-comments-target",-1337210500),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)),new cljs.core.Keyword(null,"data-block-id","data-block-id",-3939797),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid))], null),(cljs.core.truth_(reference)?(function (){var G__40233 = cljs.core.PersistentArrayMap.EMPTY;
var G__40234 = uuid;
return (reference.cljs$core$IFn$_invoke$arity$2 ? reference.cljs$core$IFn$_invoke$arity$2(G__40233,G__40234) : reference.call(null,G__40233,G__40234));
})():clojure.string.trim((function (){var or__5142__auto__ = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(target);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})()))], null);
})());

var G__40491 = (i__40231 + (1));
i__40231 = G__40491;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40232),frontend$components$block$comments$comment_thread_targets_view_$_iter__40229(cljs.core.chunk_rest(s__40230__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40232),null);
}
} else {
var target = cljs.core.first(s__40230__$2);
return cljs.core.cons((function (){var uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(target);
var reference = frontend.state.get_component(new cljs.core.Keyword("block","reference","block/reference",1588749254));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-comments-target","div.ls-comments-target",-1337210500),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)),new cljs.core.Keyword(null,"data-block-id","data-block-id",-3939797),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid))], null),(cljs.core.truth_(reference)?(function (){var G__40240 = cljs.core.PersistentArrayMap.EMPTY;
var G__40241 = uuid;
return (reference.cljs$core$IFn$_invoke$arity$2 ? reference.cljs$core$IFn$_invoke$arity$2(G__40240,G__40241) : reference.call(null,G__40240,G__40241));
})():clojure.string.trim((function (){var or__5142__auto__ = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(target);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})()))], null);
})(),frontend$components$block$comments$comment_thread_targets_view_$_iter__40229(cljs.core.rest(s__40230__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(targets);
})()], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$comments$comment_thread_targets_view__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__40242 = cljs.core.first(args__31746__auto__);
var G__40243 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__40242,G__40243) : io.factorhouse.hsx.core.obj_get.call(null,G__40242,G__40243));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"comment-thread-targets-view","comment-thread-targets-view",1842413367,null),args__31746__auto__),frontend$components$block$comments$comment_thread_targets_view,args__31746__auto__,null);
}
};
var frontend$components$block$comments$comment_thread_targets_view = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__40492__i = 0, G__40492__a = new Array(arguments.length -  0);
while (G__40492__i < G__40492__a.length) {G__40492__a[G__40492__i] = arguments[G__40492__i + 0]; ++G__40492__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__40492__a,0,null);
} 
return frontend$components$block$comments$comment_thread_targets_view__delegate.call(this,args__31746__auto__);};
frontend$components$block$comments$comment_thread_targets_view.cljs$lang$maxFixedArity = 0;
frontend$components$block$comments$comment_thread_targets_view.cljs$lang$applyTo = (function (arglist__40493){
var args__31746__auto__ = cljs.core.seq(arglist__40493);
return frontend$components$block$comments$comment_thread_targets_view__delegate(args__31746__auto__);
});
frontend$components$block$comments$comment_thread_targets_view.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$comments$comment_thread_targets_view__delegate;
return frontend$components$block$comments$comment_thread_targets_view;
})()
;
var memo_comp__31747__auto__ = (function (){var G__40244 = comp__31745__auto__;
var G__40245 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__40244,G__40245) : io.factorhouse.hsx.core.react_memo.call(null,G__40244,G__40245));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"comment-thread-targets-view");

return comp__31745__auto__;
})();
frontend.components.block.comments.comments_area_title_editing_QMARK_ = (function frontend$components$block$comments$comments_area_title_editing_QMARK_(config,block){
var block_uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
var container_id = new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(config);
var editing_in_container_QMARK_ = cljs.core.boolean$(frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","editing?","editor/editing?",807325417),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [container_id,block_uuid], null)], null)));
var editing_in_unknown_container_QMARK_ = cljs.core.boolean$(frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","editing?","editor/editing?",807325417),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unknown-container","unknown-container",1739831473),block_uuid], null)], null)));
var and__5140__auto__ = block_uuid;
if(cljs.core.truth_(and__5140__auto__)){
return ((editing_in_container_QMARK_) || (editing_in_unknown_container_QMARK_));
} else {
return and__5140__auto__;
}
});
frontend.components.block.comments.comments_area_title_view = (function frontend$components$block$comments$comments_area_title_view(config,block,editing_QMARK_,_STAR_hide_block_refs_QMARK_,_STAR_show_query_QMARK_,p__40252){
var map__40253 = p__40252;
var map__40253__$1 = cljs.core.__destructure_map(map__40253);
var block_content_or_editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40253__$1,new cljs.core.Keyword(null,"block-content-or-editor","block-content-or-editor",-1996059595));
var block_uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
var edit_input_id = (""+"edit-block-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_uuid));
if(cljs.core.truth_((function (){var and__5140__auto__ = editing_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return block_content_or_editor;
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-comments-title-editor","div.ls-comments-title-editor",-2012189032),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_content_or_editor,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"table-block-title?","table-block-title?",-1188462014),true),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block,frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$3(block_uuid,cljs.core.get.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword(null,"markdown","markdown",1227225089)),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block))], 0)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"edit-input-id","edit-input-id",-1876858101),edit_input_id,new cljs.core.Keyword(null,"block-id","block-id",-70582834),block_uuid,new cljs.core.Keyword(null,"edit?","edit?",-842131310),true,new cljs.core.Keyword(null,"refs-count","refs-count",643531144),null,new cljs.core.Keyword(null,"*hide-block-refs?","*hide-block-refs?",-1362658712),_STAR_hide_block_refs_QMARK_,new cljs.core.Keyword(null,"hide-block-refs-count?","hide-block-refs-count?",-1723688145),true,new cljs.core.Keyword(null,"*show-query?","*show-query?",279819510),_STAR_show_query_QMARK_], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.ls-comments-label","button.ls-comments-label",-1313742775),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","click-to-edit","editor/click-to-edit",1855770305)], 0)),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","click-to-edit","editor/click-to-edit",1855770305)], 0)),new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),frontend.util.stop,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

return frontend.handler.comments.edit_comments_area_title_BANG_(block,new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(config));
})], null),frontend.components.block.comments_model.comments_area_title(block)], null);
}
});
frontend.components.block.comments.comments_area_view = (function (){var render_fn__31744__auto__ = (function frontend$components$block$comments$comments_area_view(config,block,comment_uuids,collapsed_QMARK_,_STAR_hide_block_refs_QMARK_,_STAR_show_query_QMARK_,renderers,p__40255){
var map__40256 = p__40255;
var map__40256__$1 = cljs.core.__destructure_map(map__40256);
var focus_editor_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40256__$1,new cljs.core.Keyword(null,"focus-editor?","focus-editor?",78997739));
var inline_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40256__$1,new cljs.core.Keyword(null,"inline?","inline?",-1674483791));
var _STAR_comments_list_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var vec__40257 = logseq.shui.hooks.use_state(false);
var targets_open_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40257,(0),null);
var set_targets_open_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40257,(1),null);
var title_editing_QMARK_ = frontend.components.block.comments.comments_area_title_editing_QMARK_(config,block);
var summary = frontend.db.hooks.use_resource(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block-comment-summary","block-comment-summary",1540797395),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null));
var render_token = cljs.core.vec(comment_uuids);
var count = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(summary);
logseq.shui.hooks.use_effect_BANG_((function (){
if(((cljs.core.not(collapsed_QMARK_)) && (cljs.core.seq(comment_uuids)))){
requestAnimationFrame((function (){
var G__40278 = logseq.shui.hooks.deref(_STAR_comments_list_ref);
if((G__40278 == null)){
return null;
} else {
return frontend.components.block.comments.scroll_comments_list_to_bottom_BANG_(G__40278);
}
}));
} else {
}

return null;
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [collapsed_QMARK_,render_token], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-comments-area","div.ls-comments-area",-803307875),(function (){var G__40280 = cljs.core.PersistentArrayMap.EMPTY;
var G__40280__$1 = (cljs.core.truth_(inline_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40280,new cljs.core.Keyword(null,"class","class",-2030961996),"ls-comments-area-inline"):G__40280);
if(frontend.components.block.comments_model.range_comments_area_QMARK_(block)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__40280__$1,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (){
return frontend.components.block.comments.set_comment_thread_targets_hover_BANG_(block,true);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (){
return frontend.components.block.comments.set_comment_thread_targets_hover_BANG_(block,false);
}),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (){
return frontend.components.block.comments.set_comment_thread_targets_hover_BANG_(block,true);
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return frontend.components.block.comments.set_comment_thread_targets_hover_BANG_(block,false);
})], 0));
} else {
return G__40280__$1;
}
})(),(cljs.core.truth_(collapsed_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.ls-comments-summary","button.ls-comments-summary",400417352),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),frontend.util.stop,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

return frontend.handler.comments.expand_comments_area_BANG_(block);
})], null),frontend.components.block.comments_model.collapsed_comments_label(summary)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-comments-header","div.ls-comments-header",-634279456),frontend.components.block.comments.comments_area_title_view(config,block,title_editing_QMARK_,_STAR_hide_block_refs_QMARK_,_STAR_show_query_QMARK_,renderers),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ls-comments-count","span.ls-comments-count",-181236868),count], null),((frontend.components.block.comments_model.comment_thread_targets_toggle_visible_QMARK_(block))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.ls-comments-targets-toggle","button.ls-comments-targets-toggle",794840417),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),frontend.util.stop,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

var G__40291 = cljs.core.not(targets_open_QMARK_);
return (set_targets_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_targets_open_BANG_.cljs$core$IFn$_invoke$arity$1(G__40291) : set_targets_open_BANG_.call(null,G__40291));
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.comments","on-those-blocks","block.comments/on-those-blocks",-470172917)], 0))], null):null)], null),((frontend.components.block.comments_model.show_comment_thread_targets_QMARK_(block,targets_open_QMARK_))?frontend.components.block.comments.comment_thread_targets_view(block):null),((cljs.core.seq(comment_uuids))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-comments-list","div.ls-comments-list",1846035436),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_comments_list_ref], null),(function (){var iter__5628__auto__ = (function frontend$components$block$comments$comments_area_view_$_iter__40299(s__40300){
return (new cljs.core.LazySeq(null,(function (){
var s__40300__$1 = s__40300;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__40300__$1);
if(temp__5825__auto__){
var s__40300__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40300__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__40300__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__40302 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__40301 = (0);
while(true){
if((i__40301 < size__5627__auto__)){
var comment_uuid = cljs.core._nth(c__5626__auto__,i__40301);
cljs.core.chunk_append(b__40302,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.block.comments.subscribed_comment_row,config,comment_uuid,_STAR_hide_block_refs_QMARK_,_STAR_show_query_QMARK_,renderers], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(comment_uuid))], null)));

var G__40494 = (i__40301 + (1));
i__40301 = G__40494;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40302),frontend$components$block$comments$comments_area_view_$_iter__40299(cljs.core.chunk_rest(s__40300__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40302),null);
}
} else {
var comment_uuid = cljs.core.first(s__40300__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.block.comments.subscribed_comment_row,config,comment_uuid,_STAR_hide_block_refs_QMARK_,_STAR_show_query_QMARK_,renderers], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(comment_uuid))], null)),frontend$components$block$comments$comments_area_view_$_iter__40299(cljs.core.rest(s__40300__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(comment_uuids);
})()], null):null),frontend.components.block.comments.add_comment_button(config,block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus-on-mount?","focus-on-mount?",-371581718),focus_editor_QMARK_], null))], null))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$comments$comments_area_view__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__40341 = cljs.core.first(args__31746__auto__);
var G__40342 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__40341,G__40342) : io.factorhouse.hsx.core.obj_get.call(null,G__40341,G__40342));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"comments-area-view","comments-area-view",-1717792654,null),args__31746__auto__),frontend$components$block$comments$comments_area_view,args__31746__auto__,null);
}
};
var frontend$components$block$comments$comments_area_view = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__40495__i = 0, G__40495__a = new Array(arguments.length -  0);
while (G__40495__i < G__40495__a.length) {G__40495__a[G__40495__i] = arguments[G__40495__i + 0]; ++G__40495__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__40495__a,0,null);
} 
return frontend$components$block$comments$comments_area_view__delegate.call(this,args__31746__auto__);};
frontend$components$block$comments$comments_area_view.cljs$lang$maxFixedArity = 0;
frontend$components$block$comments$comments_area_view.cljs$lang$applyTo = (function (arglist__40496){
var args__31746__auto__ = cljs.core.seq(arglist__40496);
return frontend$components$block$comments$comments_area_view__delegate(args__31746__auto__);
});
frontend$components$block$comments$comments_area_view.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$comments$comments_area_view__delegate;
return frontend$components$block$comments$comments_area_view;
})()
;
var memo_comp__31747__auto__ = (function (){var G__40347 = comp__31745__auto__;
var G__40348 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__40347,G__40348) : io.factorhouse.hsx.core.react_memo.call(null,G__40347,G__40348));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"comments-area-view");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.block.comments.js.map
