goog.provide('frontend.components.content');
goog.scope(function(){
  frontend.components.content.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
frontend.components.content.custom_context_menu_content = (function (){var render_fn__31744__auto__ = (function frontend$components$content$custom_context_menu_content(){
var selection_block_ids = frontend.state.get_selection_block_ids();
var vec__46039 = logseq.shui.hooks.use_state(null);
var selected_blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46039,(0),null);
var set_selected_blocks_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46039,(1),null);
var vec__46042 = logseq.shui.hooks.use_state(false);
var set_icon_sub_menu_open_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46042,(0),null);
var set_icon_sub_menu_open = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46042,(1),null);
var comment_targets = frontend.components.block.comments_model.comment_target_blocks(selected_blocks);
logseq.shui.hooks.use_effect_BANG_((function (){
promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_blocks(frontend.state.get_current_repo(),selection_block_ids)),(function (results){
return promesa.protocols._promise((function (){var G__46045 = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block","block",664686210),results));
return (set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(G__46045) : set_selected_blocks_BANG_.call(null,G__46045));
})());
}));
}));

return null;
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selection_block_ids], null));

return new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),frontend.ui.menu_background_color((function (p1__46036_SHARP_){
return frontend.handler.property.batch_set_block_property_BANG_(frontend.state.get_selection_block_ids(),new cljs.core.Keyword("logseq.property","background-color","logseq.property/background-color",-519126606),p1__46036_SHARP_);
}),(function (){
return frontend.handler.property.batch_remove_block_property_BANG_(frontend.state.get_selection_block_ids(),new cljs.core.Keyword("logseq.property","background-color","logseq.property/background-color",-519126606));
})),frontend.ui.menu_heading((function (p1__46037_SHARP_){
return frontend.handler.editor.batch_set_heading_BANG_(frontend.state.get_selection_block_ids(),p1__46037_SHARP_);
}),(function (){
return frontend.handler.editor.batch_set_heading_BANG_(frontend.state.get_selection_block_ids(),true);
}),(function (){
return frontend.handler.editor.batch_remove_heading_BANG_(frontend.state.get_selection_block_ids());
})),(function (){var G__46046 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),set_icon_sub_menu_open_QMARK_,new cljs.core.Keyword(null,"onOpenChange","onOpenChange",-675762944),(function (v,event_details){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__46049 = logseq.shui.popup.core.get_last_popup();
if((G__46049 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__46049);
}
})(),new cljs.core.Keyword(null,"icons-color-picker","icons-color-picker",-691438129))){
var G__46050 = event_details;
if((G__46050 == null)){
return null;
} else {
return G__46050.cancel();
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(logseq.shui.popup.core._STAR_opened_sub_menus,(cljs.core.truth_(v)?cljs.core.conj:cljs.core.disj),new cljs.core.Keyword(null,"set-icon","set-icon",519379170));

return (set_icon_sub_menu_open.cljs$core$IFn$_invoke$arity$1 ? set_icon_sub_menu_open.cljs$core$IFn$_invoke$arity$1(v) : set_icon_sub_menu_open.call(null,v));
}
})], null);
var G__46047 = (function (){var G__46051 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("context-menu","set-icon","context-menu/set-icon",-557431901)], 0));
return (logseq.shui.ui.dropdown_menu_sub_trigger.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dropdown_menu_sub_trigger.cljs$core$IFn$_invoke$arity$1(G__46051) : logseq.shui.ui.dropdown_menu_sub_trigger.call(null,G__46051));
})();
var G__46048 = (function (){var G__46052 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-1","div.p-1",-1297123687),frontend.components.icon.icon_search(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (_e,icon){
var block_ids_46225 = frontend.state.get_selection_block_ids();
if(cljs.core.truth_(icon)){
frontend.handler.property.batch_set_block_property_BANG_(block_ids_46225,new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285),cljs.core.select_keys(icon,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"color","color",1011675173)], null)));
} else {
frontend.handler.property.batch_remove_block_property_BANG_(block_ids_46225,new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285));
}

frontend.state.hide_custom_context_menu_BANG_();

return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
}),new cljs.core.Keyword(null,"color-auto-chosen?","color-auto-chosen?",841472508),false,new cljs.core.Keyword(null,"del-btn?","del-btn?",-1094924362),true,new cljs.core.Keyword(null,"icon-value","icon-value",-510636889),null], null))], null);
return (logseq.shui.ui.dropdown_menu_sub_content.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dropdown_menu_sub_content.cljs$core$IFn$_invoke$arity$1(G__46052) : logseq.shui.ui.dropdown_menu_sub_content.call(null,G__46052));
})();
return (logseq.shui.ui.dropdown_menu_sub.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.dropdown_menu_sub.cljs$core$IFn$_invoke$arity$3(G__46046,G__46047,G__46048) : logseq.shui.ui.dropdown_menu_sub.call(null,G__46046,G__46047,G__46048));
})(),(logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dropdown_menu_separator.call(null)),(function (){var G__46053 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"cut",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.editor.cut_selection_blocks(true);
})], null);
var G__46054 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","cut","editor/cut",803621444)], 0));
var G__46055 = frontend.ui.dropdown_shortcut(new cljs.core.Keyword("editor","cut","editor/cut",803621444));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3(G__46053,G__46054,G__46055) : logseq.shui.ui.dropdown_menu_item.call(null,G__46053,G__46054,G__46055));
})(),(function (){var G__46056 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__46038_SHARP_){
frontend.handler.editor.delete_selection(p1__46038_SHARP_);

frontend.state.hide_custom_context_menu_BANG_();

return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
})], null);
var G__46057 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","delete-selection","editor/delete-selection",-1313454836)], 0));
var G__46058 = frontend.ui.dropdown_shortcut(new cljs.core.Keyword("editor","delete","editor/delete",1285565589));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3(G__46056,G__46057,G__46058) : logseq.shui.ui.dropdown_menu_item.call(null,G__46056,G__46057,G__46058));
})(),(function (){var G__46059 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"copy",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.editor.copy_selection_blocks(true);
})], null);
var G__46060 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","copy","ui/copy",-1077613577)], 0));
var G__46061 = frontend.ui.dropdown_shortcut(new cljs.core.Keyword("editor","copy","editor/copy",-1849165166));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3(G__46059,G__46060,G__46061) : logseq.shui.ui.dropdown_menu_item.call(null,G__46059,G__46060,G__46061));
})(),(function (){var G__46062 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"copy as",new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
frontend.util.stop_propagation(e);

var block_uuids = frontend.state.get_selection_block_ids();
(logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));

var G__46064 = (function (){
return frontend.components.export$.export_blocks(block_uuids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"export-type","export-type",-2087639167),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null));
});
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1(G__46064) : logseq.shui.ui.dialog_open_BANG_.call(null,G__46064));
})], null);
var G__46063 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","copy-or-export-as","export/copy-or-export-as",365185652)], 0));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__46062,G__46063) : logseq.shui.ui.dropdown_menu_item.call(null,G__46062,G__46063));
})(),(function (){var G__46065 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"copy block refs",new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.editor.copy_block_refs], null);
var G__46066 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","copy-ref","block/copy-ref",1559721441)], 0));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__46065,G__46066) : logseq.shui.ui.dropdown_menu_item.call(null,G__46065,G__46066));
})(),(logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dropdown_menu_separator.call(null)),(cljs.core.truth_(frontend.state.enable_flashcards_QMARK_.cljs$core$IFn$_invoke$arity$0())?(function (){var G__46067 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Make a Card",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.extensions.fsrs.batch_make_cards_BANG_.cljs$core$IFn$_invoke$arity$0();
})], null);
var G__46068 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("context-menu","make-a-flashcard","context-menu/make-a-flashcard",942504552)], 0));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__46067,G__46068) : logseq.shui.ui.dropdown_menu_item.call(null,G__46067,G__46068));
})():null),((cljs.core.seq(comment_targets))?(function (){var G__46069 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Add comment",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.comments.ensure_comments_area_for_selected_blocks_BANG_(comment_targets)),(function (comments_area){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(comments_area)?frontend.handler.comments.reveal_comments_area_BANG_.cljs$core$IFn$_invoke$arity$1(comments_area):null)),(function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.hide_custom_context_menu_BANG_()),(function (___21901__auto____$1){
return promesa.protocols._promise((logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null)));
}));
}));
}));
}));
})], null);
var G__46070 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.comments","add-comment","block.comments/add-comment",-1902079159)], 0));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__46069,G__46070) : logseq.shui.ui.dropdown_menu_item.call(null,G__46069,G__46070));
})():null),(function (){var G__46071 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Toggle number list",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","toggle-own-number-list","editor/toggle-own-number-list",835416153),frontend.state.get_selection_block_ids()], null));
})], null);
var G__46072 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("context-menu","toggle-number-list","context-menu/toggle-number-list",-1283735842)], 0));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__46071,G__46072) : logseq.shui.ui.dropdown_menu_item.call(null,G__46071,G__46072));
})(),(function (){var G__46073 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"cycle todos",new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.editor.cycle_todos_BANG_], null);
var G__46074 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","cycle-todo","editor/cycle-todo",1017593231)], 0));
var G__46075 = frontend.ui.dropdown_shortcut(new cljs.core.Keyword("editor","cycle-todo","editor/cycle-todo",1017593231));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3(G__46073,G__46074,G__46075) : logseq.shui.ui.dropdown_menu_item.call(null,G__46073,G__46074,G__46075));
})(),(logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dropdown_menu_separator.call(null)),(function (){var G__46076 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Expand all",new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
frontend.util.stop(e);

return frontend.handler.editor.expand_all_selection_BANG_();
})], null);
var G__46077 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","expand-block-children","editor/expand-block-children",2088308354)], 0));
var G__46078 = frontend.ui.dropdown_shortcut(new cljs.core.Keyword("editor","expand-block-children","editor/expand-block-children",2088308354));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3(G__46076,G__46077,G__46078) : logseq.shui.ui.dropdown_menu_item.call(null,G__46076,G__46077,G__46078));
})(),(function (){var G__46079 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Collapse all",new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
frontend.util.stop(e);

return frontend.handler.editor.collapse_all_selection_BANG_();
})], null);
var G__46080 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","collapse-block-children","editor/collapse-block-children",1709191392)], 0));
var G__46081 = frontend.ui.dropdown_shortcut(new cljs.core.Keyword("editor","collapse-block-children","editor/collapse-block-children",1709191392));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3(G__46079,G__46080,G__46081) : logseq.shui.ui.dropdown_menu_item.call(null,G__46079,G__46080,G__46081));
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$content$custom_context_menu_content__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46082 = cljs.core.first(args__31746__auto__);
var G__46083 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46082,G__46083) : io.factorhouse.hsx.core.obj_get.call(null,G__46082,G__46083));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"custom-context-menu-content","custom-context-menu-content",1288937867,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$content$custom_context_menu_content,args__31746__auto__,null);
}
};
var frontend$components$content$custom_context_menu_content = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46226__i = 0, G__46226__a = new Array(arguments.length -  0);
while (G__46226__i < G__46226__a.length) {G__46226__a[G__46226__i] = arguments[G__46226__i + 0]; ++G__46226__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46226__a,0,null);
} 
return frontend$components$content$custom_context_menu_content__delegate.call(this,args__31746__auto__);};
frontend$components$content$custom_context_menu_content.cljs$lang$maxFixedArity = 0;
frontend$components$content$custom_context_menu_content.cljs$lang$applyTo = (function (arglist__46227){
var args__31746__auto__ = cljs.core.seq(arglist__46227);
return frontend$components$content$custom_context_menu_content__delegate(args__31746__auto__);
});
frontend$components$content$custom_context_menu_content.cljs$core$IFn$_invoke$arity$variadic = frontend$components$content$custom_context_menu_content__delegate;
return frontend$components$content$custom_context_menu_content;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46084 = comp__31745__auto__;
var G__46085 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46084,G__46085) : io.factorhouse.hsx.core.react_memo.call(null,G__46084,G__46085));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"custom-context-menu-content");

return comp__31745__auto__;
})();
frontend.components.content.block_context_menu_content = (function (){var render_fn__31744__auto__ = (function frontend$components$content$block_context_menu_content(_target,block_id,property_default_value_QMARK_){
var vec__46086 = logseq.shui.hooks.use_state(null);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46086,(0),null);
var set_block_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46086,(1),null);
var simple_commands = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","simple-commands","plugin/simple-commands",234820996)], null));
var developer_mode_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","developer-mode?","ui/developer-mode?",-664501878)], null));
var vec__46089 = logseq.shui.hooks.use_state(false);
var set_icon_sub_menu_open_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46089,(0),null);
var set_icon_sub_menu_open = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46089,(1),null);
var vec__46092 = logseq.shui.hooks.use_state(false);
var heading = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46092,(0),null);
var set_heading_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46092,(1),null);
var vec__46095 = logseq.shui.hooks.use_state((frontend.handler.property.util.lookup.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.property.util.lookup.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword("logseq.property","background-color","logseq.property/background-color",-519126606)) : frontend.handler.property.util.lookup.call(null,block,new cljs.core.Keyword("logseq.property","background-color","logseq.property/background-color",-519126606))));
var current_color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46095,(0),null);
var set_current_color_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46095,(1),null);
logseq.shui.hooks.use_effect_BANG_((function (){
promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),block_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (block__$1){
return promesa.protocols._mcat(promesa.protocols._promise((set_block_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_block_BANG_.cljs$core$IFn$_invoke$arity$1(block__$1) : set_block_BANG_.call(null,block__$1))),(function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__46098 = (function (){var or__5142__auto__ = (frontend.handler.property.util.lookup.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.property.util.lookup.cljs$core$IFn$_invoke$arity$2(block__$1,new cljs.core.Keyword("logseq.property","heading","logseq.property/heading",1858749415)) : frontend.handler.property.util.lookup.call(null,block__$1,new cljs.core.Keyword("logseq.property","heading","logseq.property/heading",1858749415)));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return false;
}
})();
return (set_heading_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_heading_BANG_.cljs$core$IFn$_invoke$arity$1(G__46098) : set_heading_BANG_.call(null,G__46098));
})()),(function (___21901__auto____$1){
return promesa.protocols._promise((function (){var G__46099 = (frontend.handler.property.util.lookup.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.property.util.lookup.cljs$core$IFn$_invoke$arity$2(block__$1,new cljs.core.Keyword("logseq.property","background-color","logseq.property/background-color",-519126606)) : frontend.handler.property.util.lookup.call(null,block__$1,new cljs.core.Keyword("logseq.property","background-color","logseq.property/background-color",-519126606)));
return (set_current_color_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_color_BANG_.cljs$core$IFn$_invoke$arity$1(G__46099) : set_current_color_BANG_.call(null,G__46099));
})());
}));
}));
}));
}));

return null;
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id], null));

if(cljs.core.truth_(block)){
return new cljs.core.PersistentVector(null, 23, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),frontend.ui.menu_background_color(current_color,(function (color){
(set_current_color_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_color_BANG_.cljs$core$IFn$_invoke$arity$1(color) : set_current_color_BANG_.call(null,color));

return frontend.handler.property.set_block_property_BANG_(block_id,new cljs.core.Keyword("logseq.property","background-color","logseq.property/background-color",-519126606),color);
}),(function (){
(set_current_color_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_color_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_current_color_BANG_.call(null,null));

return frontend.handler.property.remove_block_property_BANG_(block_id,new cljs.core.Keyword("logseq.property","background-color","logseq.property/background-color",-519126606));
})),frontend.ui.menu_heading(heading,(function (i){
(set_heading_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_heading_BANG_.cljs$core$IFn$_invoke$arity$1(i) : set_heading_BANG_.call(null,i));

return frontend.handler.editor.set_heading_BANG_(block_id,i);
}),(function (){
(set_heading_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_heading_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_heading_BANG_.call(null,true));

return frontend.handler.editor.set_heading_BANG_(block_id,true);
}),(function (){
(set_heading_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_heading_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_heading_BANG_.call(null,false));

return frontend.handler.editor.remove_heading_BANG_(block_id);
})),(logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dropdown_menu_separator.call(null)),(function (){var G__46100 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Open in sidebar",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
return frontend.handler.editor.format.open_block_in_sidebar_BANG_(block_id);
})], null);
var G__46101 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sidebar.right","open","sidebar.right/open",1036509782)], 0));
var G__46102 = frontend.ui.dropdown_shortcut("shift+click");
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3(G__46100,G__46101,G__46102) : logseq.shui.ui.dropdown_menu_item.call(null,G__46100,G__46101,G__46102));
})(),(function (){var G__46103 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Add comment",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.comments.ensure_comments_area_BANG_(block_id)),(function (comments_area){
return promesa.protocols._promise(frontend.handler.comments.reveal_comments_area_BANG_.cljs$core$IFn$_invoke$arity$2(comments_area,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus-editor?","focus-editor?",78997739),true], null)));
}));
}));
})], null);
var G__46104 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.comments","add-comment","block.comments/add-comment",-1902079159)], 0));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__46103,G__46104) : logseq.shui.ui.dropdown_menu_item.call(null,G__46103,G__46104));
})(),(function (){var G__46105 = (function (){var G__46107 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("command.editor","add-reaction","command.editor/add-reaction",31898964)], 0));
return (logseq.shui.ui.dropdown_menu_sub_trigger.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dropdown_menu_sub_trigger.cljs$core$IFn$_invoke$arity$1(G__46107) : logseq.shui.ui.dropdown_menu_sub_trigger.call(null,G__46107));
})();
var G__46106 = (function (){var G__46108 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-1","div.p-1",-1297123687),frontend.components.icon.icon_search(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (_e,icon){
var emoji_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(icon);
var emoji_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"emoji","emoji",1031230144),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(icon));
if(emoji_QMARK_){
frontend.handler.reaction.toggle_reaction_BANG_(block_id,emoji_id);

frontend.state.hide_custom_context_menu_BANG_();

return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.reaction","emoji-required-warning","block.reaction/emoji-required-warning",788886574)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));
}
}),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emoji","emoji",1031230144),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("icon","tab-emojis","icon/tab-emojis",-1889512558)], 0))], null)], null),new cljs.core.Keyword(null,"default-tab","default-tab",-566872037),new cljs.core.Keyword(null,"emoji","emoji",1031230144),new cljs.core.Keyword(null,"show-used?","show-used?",4329186),true,new cljs.core.Keyword(null,"icon-value","icon-value",-510636889),null], null))], null);
return (logseq.shui.ui.dropdown_menu_sub_content.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dropdown_menu_sub_content.cljs$core$IFn$_invoke$arity$1(G__46108) : logseq.shui.ui.dropdown_menu_sub_content.call(null,G__46108));
})();
return (logseq.shui.ui.dropdown_menu_sub.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_sub.cljs$core$IFn$_invoke$arity$2(G__46105,G__46106) : logseq.shui.ui.dropdown_menu_sub.call(null,G__46105,G__46106));
})(),(function (){var G__46109 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),set_icon_sub_menu_open_QMARK_,new cljs.core.Keyword(null,"onOpenChange","onOpenChange",-675762944),(function (v,event_details){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__46112 = logseq.shui.popup.core.get_last_popup();
if((G__46112 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__46112);
}
})(),new cljs.core.Keyword(null,"icons-color-picker","icons-color-picker",-691438129))){
var G__46113 = event_details;
if((G__46113 == null)){
return null;
} else {
return G__46113.cancel();
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(logseq.shui.popup.core._STAR_opened_sub_menus,(cljs.core.truth_(v)?cljs.core.conj:cljs.core.disj),new cljs.core.Keyword(null,"set-icon","set-icon",519379170));

return (set_icon_sub_menu_open.cljs$core$IFn$_invoke$arity$1 ? set_icon_sub_menu_open.cljs$core$IFn$_invoke$arity$1(v) : set_icon_sub_menu_open.call(null,v));
}
})], null);
var G__46110 = (function (){var G__46114 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("context-menu","set-icon","context-menu/set-icon",-557431901)], 0));
return (logseq.shui.ui.dropdown_menu_sub_trigger.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dropdown_menu_sub_trigger.cljs$core$IFn$_invoke$arity$1(G__46114) : logseq.shui.ui.dropdown_menu_sub_trigger.call(null,G__46114));
})();
var G__46111 = (function (){var G__46115 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-1","div.p-1",-1297123687),(function (){var icon_value = new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285).cljs$core$IFn$_invoke$arity$1(block);
return frontend.components.icon.icon_search(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (_e,icon){
if(cljs.core.truth_(icon)){
frontend.handler.property.set_block_property_BANG_(block_id,new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285),cljs.core.select_keys(icon,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"color","color",1011675173)], null)));
} else {
frontend.handler.property.remove_block_property_BANG_(block_id,new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285));
}

frontend.state.hide_custom_context_menu_BANG_();

return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
}),new cljs.core.Keyword(null,"color-auto-chosen?","color-auto-chosen?",841472508),false,new cljs.core.Keyword(null,"del-btn?","del-btn?",-1094924362),cljs.core.boolean$(icon_value),new cljs.core.Keyword(null,"icon-value","icon-value",-510636889),icon_value], null));
})()], null);
return (logseq.shui.ui.dropdown_menu_sub_content.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dropdown_menu_sub_content.cljs$core$IFn$_invoke$arity$1(G__46115) : logseq.shui.ui.dropdown_menu_sub_content.call(null,G__46115));
})();
return (logseq.shui.ui.dropdown_menu_sub.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.dropdown_menu_sub.cljs$core$IFn$_invoke$arity$3(G__46109,G__46110,G__46111) : logseq.shui.ui.dropdown_menu_sub.call(null,G__46109,G__46110,G__46111));
})(),(logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dropdown_menu_separator.call(null)),(function (){var G__46116 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Copy block ref",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
return frontend.handler.editor.copy_block_ref_BANG_.cljs$core$IFn$_invoke$arity$2(block_id,frontend.util.ref.__GT_block_ref);
})], null);
var G__46117 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","copy-ref","block/copy-ref",1559721441)], 0));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__46116,G__46117) : logseq.shui.ui.dropdown_menu_item.call(null,G__46116,G__46117));
})(),(cljs.core.truth_(frontend.util.electron_QMARK_())?(function (){var G__46118 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Copy block URL",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
var temp__5823__auto__ = frontend.util.url.entity_url_for_copy(frontend.config.app_website,frontend.handler.graph.current_graph_id(),frontend.state.get_current_repo(),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id)),new cljs.core.Keyword(null,"block","block",664686210));
if(cljs.core.truth_(temp__5823__auto__)){
var url = temp__5823__auto__;
return frontend.handler.editor.copy_block_ref_BANG_.cljs$core$IFn$_invoke$arity$2(block_id,(function (_){
return url;
}));
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","copy-url-unavailable-warning","block/copy-url-unavailable-warning",389276624)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));
}
})], null);
var G__46119 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","copy-url","block/copy-url",175059405)], 0));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__46118,G__46119) : logseq.shui.ui.dropdown_menu_item.call(null,G__46118,G__46119));
})():null),(cljs.core.truth_((function (){var and__5140__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5140__auto__)){
return (logseq.db.asset_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.asset_QMARK_.cljs$core$IFn$_invoke$arity$1(block) : logseq.db.asset_QMARK_.call(null,block));
} else {
return and__5140__auto__;
}
})())?(function (){var G__46120 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Show asset in folder",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
var assets_dir = frontend.config.get_current_repo_assets_root();
var repo_dir = frontend.config.get_repo_dir(frontend.state.get_current_repo());
var ext = new cljs.core.Keyword("logseq.property.asset","type","logseq.property.asset/type",-1142083098).cljs$core$IFn$_invoke$arity$1(block);
var ext_url = new cljs.core.Keyword("logseq.property.asset","external-url","logseq.property.asset/external-url",-1364775163).cljs$core$IFn$_invoke$arity$1(block);
var file_path = (cljs.core.truth_((function (){var and__5140__auto__ = (!(clojure.string.blank_QMARK_(ext_url)));
if(and__5140__auto__){
return logseq.common.config.local_relative_asset_QMARK_(ext_url);
} else {
return and__5140__auto__;
}
})())?logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.replace(ext_url,/^[.\/]+/,"")], 0)):(((((!(clojure.string.blank_QMARK_(ext_url)))) && (logseq.common.path.absolute_QMARK_(ext_url))))?logseq.common.path.file_url_or_path__GT_path(ext_url):logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(assets_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(ext)?(""+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(ext))):null)))], 0))
));
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.fs.file_exists_QMARK_.cljs$core$IFn$_invoke$arity$1(file_path),(function (exists_QMARK_){
if(cljs.core.truth_(exists_QMARK_)){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["openFileInFolder",file_path], 0));
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","missing-file","asset/missing-file",2087445095),file_path], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));
}
}));
})], null);
var G__46121 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","show-file-in-folder","asset/show-file-in-folder",-1802838352)], 0));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__46120,G__46121) : logseq.shui.ui.dropdown_menu_item.call(null,G__46120,G__46121));
})():null),(function (){var G__46122 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Copy as",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
var G__46124 = (function (){
return frontend.components.export$.export_blocks(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"export-type","export-type",-2087639167),new cljs.core.Keyword(null,"block","block",664686210)], null));
});
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1(G__46124) : logseq.shui.ui.dialog_open_BANG_.call(null,G__46124));
})], null);
var G__46123 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","copy-or-export-as","export/copy-or-export-as",365185652)], 0));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__46122,G__46123) : logseq.shui.ui.dropdown_menu_item.call(null,G__46122,G__46123));
})(),(cljs.core.truth_(property_default_value_QMARK_)?null:(function (){var G__46125 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Cut",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
return frontend.handler.editor.cut_block_BANG_(block_id);
})], null);
var G__46126 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","cut","editor/cut",803621444)], 0));
var G__46127 = frontend.ui.dropdown_shortcut(new cljs.core.Keyword("editor","cut","editor/cut",803621444));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3(G__46125,G__46126,G__46127) : logseq.shui.ui.dropdown_menu_item.call(null,G__46125,G__46126,G__46127));
})()),(cljs.core.truth_(property_default_value_QMARK_)?null:(function (){var G__46128 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.editor.delete_block_aux_BANG_.cljs$core$IFn$_invoke$arity$1(block);
})], null);
var G__46129 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","delete-selection","editor/delete-selection",-1313454836)], 0));
var G__46130 = frontend.ui.dropdown_shortcut(new cljs.core.Keyword("editor","delete","editor/delete",1285565589));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3(G__46128,G__46129,G__46130) : logseq.shui.ui.dropdown_menu_item.call(null,G__46128,G__46129,G__46130));
})()),(logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dropdown_menu_separator.call(null)),(cljs.core.truth_(frontend.state.enable_flashcards_QMARK_.cljs$core$IFn$_invoke$arity$0())?(function (){var G__46131 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Make a Card",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.extensions.fsrs.batch_make_cards_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id], null));
})], null);
var G__46132 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("context-menu","make-a-flashcard","context-menu/make-a-flashcard",942504552)], 0));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__46131,G__46132) : logseq.shui.ui.dropdown_menu_item.call(null,G__46131,G__46132));
})():null
),(function (){var G__46133 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Toggle number list",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","toggle-own-number-list","editor/toggle-own-number-list",835416153),frontend.state.get_selection_block_ids()], null));
})], null);
var G__46134 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("context-menu","toggle-number-list","context-menu/toggle-number-list",-1283735842)], 0));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__46133,G__46134) : logseq.shui.ui.dropdown_menu_item.call(null,G__46133,G__46134));
})(),(logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dropdown_menu_separator.call(null)),(function (){var G__46135 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Expand all",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
return frontend.handler.editor.expand_all_BANG_.cljs$core$IFn$_invoke$arity$1(block_id);
})], null);
var G__46136 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","expand-block-children","editor/expand-block-children",2088308354)], 0));
var G__46137 = frontend.ui.dropdown_shortcut(new cljs.core.Keyword("editor","expand-block-children","editor/expand-block-children",2088308354));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3(G__46135,G__46136,G__46137) : logseq.shui.ui.dropdown_menu_item.call(null,G__46135,G__46136,G__46137));
})(),(function (){var G__46138 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Collapse all",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
return frontend.handler.editor.collapse_all_BANG_.cljs$core$IFn$_invoke$arity$2(block_id,cljs.core.PersistentArrayMap.EMPTY);
})], null);
var G__46139 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","collapse-block-children","editor/collapse-block-children",1709191392)], 0));
var G__46140 = frontend.ui.dropdown_shortcut(new cljs.core.Keyword("editor","collapse-block-children","editor/collapse-block-children",1709191392));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3(G__46138,G__46139,G__46140) : logseq.shui.ui.dropdown_menu_item.call(null,G__46138,G__46139,G__46140));
})(),(cljs.core.truth_(simple_commands)?(function (){var temp__5825__auto__ = frontend.state.get_plugins_commands_with_type(new cljs.core.Keyword(null,"block-context-menu-item","block-context-menu-item",-1128965744));
if(cljs.core.truth_(temp__5825__auto__)){
var cmds = temp__5825__auto__;
var iter__5628__auto__ = (function frontend$components$content$block_context_menu_content_$_iter__46141(s__46142){
return (new cljs.core.LazySeq(null,(function (){
var s__46142__$1 = s__46142;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__46142__$1);
if(temp__5825__auto____$1){
var s__46142__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46142__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__46142__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__46144 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__46143 = (0);
while(true){
if((i__46143 < size__5627__auto__)){
var vec__46145 = cljs.core._nth(c__5626__auto__,i__46143);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46145,(0),null);
var map__46148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46145,(1),null);
var map__46148__$1 = cljs.core.__destructure_map(map__46148);
var cmd = map__46148__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46148__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46148__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46145,(2),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46145,(3),null);
cljs.core.chunk_append(b__46144,(function (){var G__46149 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__46143,vec__46145,_,map__46148,map__46148__$1,cmd,key,label,action,pid,c__5626__auto__,size__5627__auto__,b__46144,s__46142__$2,temp__5825__auto____$1,cmds,temp__5825__auto__,vec__46086,block,set_block_BANG_,simple_commands,developer_mode_QMARK_,vec__46089,set_icon_sub_menu_open_QMARK_,set_icon_sub_menu_open,vec__46092,heading,set_heading_BANG_,vec__46095,current_color,set_current_color_BANG_){
return (function (){
return frontend.commands.exec_plugin_simple_command_BANG_(pid,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cmd,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),block_id),action);
});})(i__46143,vec__46145,_,map__46148,map__46148__$1,cmd,key,label,action,pid,c__5626__auto__,size__5627__auto__,b__46144,s__46142__$2,temp__5825__auto____$1,cmds,temp__5825__auto__,vec__46086,block,set_block_BANG_,simple_commands,developer_mode_QMARK_,vec__46089,set_icon_sub_menu_open_QMARK_,set_icon_sub_menu_open,vec__46092,heading,set_heading_BANG_,vec__46095,current_color,set_current_color_BANG_))
], null);
var G__46150 = label;
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__46149,G__46150) : logseq.shui.ui.dropdown_menu_item.call(null,G__46149,G__46150));
})());

var G__46228 = (i__46143 + (1));
i__46143 = G__46228;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46144),frontend$components$content$block_context_menu_content_$_iter__46141(cljs.core.chunk_rest(s__46142__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46144),null);
}
} else {
var vec__46151 = cljs.core.first(s__46142__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46151,(0),null);
var map__46154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46151,(1),null);
var map__46154__$1 = cljs.core.__destructure_map(map__46154);
var cmd = map__46154__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46154__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46154__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46151,(2),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46151,(3),null);
return cljs.core.cons((function (){var G__46155 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__46151,_,map__46154,map__46154__$1,cmd,key,label,action,pid,s__46142__$2,temp__5825__auto____$1,cmds,temp__5825__auto__,vec__46086,block,set_block_BANG_,simple_commands,developer_mode_QMARK_,vec__46089,set_icon_sub_menu_open_QMARK_,set_icon_sub_menu_open,vec__46092,heading,set_heading_BANG_,vec__46095,current_color,set_current_color_BANG_){
return (function (){
return frontend.commands.exec_plugin_simple_command_BANG_(pid,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cmd,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),block_id),action);
});})(vec__46151,_,map__46154,map__46154__$1,cmd,key,label,action,pid,s__46142__$2,temp__5825__auto____$1,cmds,temp__5825__auto__,vec__46086,block,set_block_BANG_,simple_commands,developer_mode_QMARK_,vec__46089,set_icon_sub_menu_open_QMARK_,set_icon_sub_menu_open,vec__46092,heading,set_heading_BANG_,vec__46095,current_color,set_current_color_BANG_))
], null);
var G__46156 = label;
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__46155,G__46156) : logseq.shui.ui.dropdown_menu_item.call(null,G__46155,G__46156));
})(),frontend$components$content$block_context_menu_content_$_iter__46141(cljs.core.rest(s__46142__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cmds);
} else {
return null;
}
})():null),(cljs.core.truth_(developer_mode_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dropdown_menu_separator.call(null)),(function (){var G__46157 = (function (){var G__46159 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("context-menu","developer-tools","context-menu/developer-tools",-330471021)], 0));
return (logseq.shui.ui.dropdown_menu_sub_trigger.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dropdown_menu_sub_trigger.cljs$core$IFn$_invoke$arity$1(G__46159) : logseq.shui.ui.dropdown_menu_sub_trigger.call(null,G__46159));
})();
var G__46158 = (function (){var G__46160 = (function (){var G__46162 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("dev","show-block-data","dev/show-block-data",299125726),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.common.developer.show_entity_data(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null));
})], null);
var G__46163 = frontend.modules.shortcut.data_helper.shortcut_desc_by_id(new cljs.core.Keyword("dev","show-block-data","dev/show-block-data",299125726));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__46162,G__46163) : logseq.shui.ui.dropdown_menu_item.call(null,G__46162,G__46163));
})();
var G__46161 = (function (){var G__46164 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("dev","show-block-ast","dev/show-block-ast",-227225549),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.common.developer.show_content_ast(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block),cljs.core.get.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword(null,"markdown","markdown",1227225089)));
})], null);
var G__46165 = frontend.modules.shortcut.data_helper.shortcut_desc_by_id(new cljs.core.Keyword("dev","show-block-ast","dev/show-block-ast",-227225549));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__46164,G__46165) : logseq.shui.ui.dropdown_menu_item.call(null,G__46164,G__46165));
})();
return (logseq.shui.ui.dropdown_menu_sub_content.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_sub_content.cljs$core$IFn$_invoke$arity$2(G__46160,G__46161) : logseq.shui.ui.dropdown_menu_sub_content.call(null,G__46160,G__46161));
})();
return (logseq.shui.ui.dropdown_menu_sub.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_sub.cljs$core$IFn$_invoke$arity$2(G__46157,G__46158) : logseq.shui.ui.dropdown_menu_sub.call(null,G__46157,G__46158));
})()], null):null)], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$content$block_context_menu_content__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46166 = cljs.core.first(args__31746__auto__);
var G__46167 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46166,G__46167) : io.factorhouse.hsx.core.obj_get.call(null,G__46166,G__46167));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"block-context-menu-content","block-context-menu-content",-855719930,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$content$block_context_menu_content,args__31746__auto__,null);
}
};
var frontend$components$content$block_context_menu_content = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46229__i = 0, G__46229__a = new Array(arguments.length -  0);
while (G__46229__i < G__46229__a.length) {G__46229__a[G__46229__i] = arguments[G__46229__i + 0]; ++G__46229__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46229__a,0,null);
} 
return frontend$components$content$block_context_menu_content__delegate.call(this,args__31746__auto__);};
frontend$components$content$block_context_menu_content.cljs$lang$maxFixedArity = 0;
frontend$components$content$block_context_menu_content.cljs$lang$applyTo = (function (arglist__46230){
var args__31746__auto__ = cljs.core.seq(arglist__46230);
return frontend$components$content$block_context_menu_content__delegate(args__31746__auto__);
});
frontend$components$content$block_context_menu_content.cljs$core$IFn$_invoke$arity$variadic = frontend$components$content$block_context_menu_content__delegate;
return frontend$components$content$block_context_menu_content;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46168 = comp__31745__auto__;
var G__46169 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46168,G__46169) : io.factorhouse.hsx.core.react_memo.call(null,G__46168,G__46169));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"block-context-menu-content");

return comp__31745__auto__;
})();
frontend.components.content.block_ref_custom_context_menu_content = (function (){var render_fn__31744__auto__ = (function frontend$components$content$block_ref_custom_context_menu_content(block,block_ref_id){
if(cljs.core.truth_((function (){var and__5140__auto__ = block;
if(cljs.core.truth_(and__5140__auto__)){
return block_ref_id;
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(function (){var G__46170 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"open-in-sidebar",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),block_ref_id,new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
})], null);
var G__46171 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sidebar.right","open","sidebar.right/open",1036509782)], 0));
var G__46172 = frontend.ui.dropdown_shortcut("shift+click");
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$3(G__46170,G__46171,G__46172) : logseq.shui.ui.dropdown_menu_item.call(null,G__46170,G__46171,G__46172));
})(),(function (){var G__46173 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"copy",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.editor.copy_current_ref(block_ref_id);
})], null);
var G__46174 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("reference","copy","reference/copy",-1994842976)], 0));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__46173,G__46174) : logseq.shui.ui.dropdown_menu_item.call(null,G__46173,G__46174));
})(),(function (){var G__46175 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.editor.delete_current_ref_BANG_(block,block_ref_id);
})], null);
var G__46176 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("reference","delete","reference/delete",1441860279)], 0));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__46175,G__46176) : logseq.shui.ui.dropdown_menu_item.call(null,G__46175,G__46176));
})(),(function (){var G__46177 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"replace-with-text",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.editor.replace_ref_with_text_BANG_(block,block_ref_id);
})], null);
var G__46178 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("reference","replace-with-text","reference/replace-with-text",-1081209159)], 0));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__46177,G__46178) : logseq.shui.ui.dropdown_menu_item.call(null,G__46177,G__46178));
})(),(function (){var G__46179 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"replace-with-embed",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.editor.replace_ref_with_embed_BANG_(block,block_ref_id);
})], null);
var G__46180 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("reference","replace-with-embed","reference/replace-with-embed",1279299726)], 0));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__46179,G__46180) : logseq.shui.ui.dropdown_menu_item.call(null,G__46179,G__46180));
})()], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$content$block_ref_custom_context_menu_content__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46181 = cljs.core.first(args__31746__auto__);
var G__46182 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46181,G__46182) : io.factorhouse.hsx.core.obj_get.call(null,G__46181,G__46182));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"block-ref-custom-context-menu-content","block-ref-custom-context-menu-content",-890252762,null),args__31746__auto__),frontend$components$content$block_ref_custom_context_menu_content,args__31746__auto__,null);
}
};
var frontend$components$content$block_ref_custom_context_menu_content = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46231__i = 0, G__46231__a = new Array(arguments.length -  0);
while (G__46231__i < G__46231__a.length) {G__46231__a[G__46231__i] = arguments[G__46231__i + 0]; ++G__46231__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46231__a,0,null);
} 
return frontend$components$content$block_ref_custom_context_menu_content__delegate.call(this,args__31746__auto__);};
frontend$components$content$block_ref_custom_context_menu_content.cljs$lang$maxFixedArity = 0;
frontend$components$content$block_ref_custom_context_menu_content.cljs$lang$applyTo = (function (arglist__46232){
var args__31746__auto__ = cljs.core.seq(arglist__46232);
return frontend$components$content$block_ref_custom_context_menu_content__delegate(args__31746__auto__);
});
frontend$components$content$block_ref_custom_context_menu_content.cljs$core$IFn$_invoke$arity$variadic = frontend$components$content$block_ref_custom_context_menu_content__delegate;
return frontend$components$content$block_ref_custom_context_menu_content;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46183 = comp__31745__auto__;
var G__46184 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46183,G__46184) : io.factorhouse.hsx.core.react_memo.call(null,G__46183,G__46184));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"block-ref-custom-context-menu-content");

return comp__31745__auto__;
})();
frontend.components.content.page_title_custom_context_menu_items = (function (){var render_fn__31744__auto__ = (function frontend$components$content$page_title_custom_context_menu_items(page,popup_id){
var favorited_QMARK_ = frontend.db.hooks.use_resource(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"favorite-status","favorite-status",259358769),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page)], null));
var page_menu_options = frontend.components.page_menu.page_menu(page,favorited_QMARK_);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(function (){var iter__5628__auto__ = (function frontend$components$content$page_title_custom_context_menu_items_$_iter__46185(s__46186){
return (new cljs.core.LazySeq(null,(function (){
var s__46186__$1 = s__46186;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__46186__$1);
if(temp__5825__auto__){
var s__46186__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46186__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__46186__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__46188 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__46187 = (0);
while(true){
if((i__46187 < size__5627__auto__)){
var vec__46189 = cljs.core._nth(c__5626__auto__,i__46187);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46189,(0),null);
var map__46192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46189,(1),null);
var map__46192__$1 = cljs.core.__destructure_map(map__46192);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46192__$1,new cljs.core.Keyword(null,"title","title",636505583));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46192__$1,new cljs.core.Keyword(null,"options","options",99638489));
cljs.core.chunk_append(b__46188,(function (){var on_click = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(options);
var key = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (""+"page-menu-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx));
}
})();
return module$node_modules$react$index.cloneElement((function (){var G__46193 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__46187,on_click,key,vec__46189,idx,map__46192,map__46192__$1,title,options,c__5626__auto__,size__5627__auto__,b__46188,s__46186__$2,temp__5825__auto__,favorited_QMARK_,page_menu_options){
return (function (e){
if((cljs.core.truth_(on_click)?(on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(e) : on_click.call(null,e)):null) === false){
return null;
} else {
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(popup_id) : logseq.shui.ui.popup_hide_BANG_.call(null,popup_id));
}
});})(i__46187,on_click,key,vec__46189,idx,map__46192,map__46192__$1,title,options,c__5626__auto__,size__5627__auto__,b__46188,s__46186__$2,temp__5825__auto__,favorited_QMARK_,page_menu_options))
);
var G__46194 = title;
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__46193,G__46194) : logseq.shui.ui.dropdown_menu_item.call(null,G__46193,G__46194));
})(),({"key": (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key))}));
})());

var G__46233 = (i__46187 + (1));
i__46187 = G__46233;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46188),frontend$components$content$page_title_custom_context_menu_items_$_iter__46185(cljs.core.chunk_rest(s__46186__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46188),null);
}
} else {
var vec__46195 = cljs.core.first(s__46186__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46195,(0),null);
var map__46198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46195,(1),null);
var map__46198__$1 = cljs.core.__destructure_map(map__46198);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46198__$1,new cljs.core.Keyword(null,"title","title",636505583));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46198__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.cons((function (){var on_click = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(options);
var key = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (""+"page-menu-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx));
}
})();
return module$node_modules$react$index.cloneElement((function (){var G__46199 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (on_click,key,vec__46195,idx,map__46198,map__46198__$1,title,options,s__46186__$2,temp__5825__auto__,favorited_QMARK_,page_menu_options){
return (function (e){
if((cljs.core.truth_(on_click)?(on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(e) : on_click.call(null,e)):null) === false){
return null;
} else {
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(popup_id) : logseq.shui.ui.popup_hide_BANG_.call(null,popup_id));
}
});})(on_click,key,vec__46195,idx,map__46198,map__46198__$1,title,options,s__46186__$2,temp__5825__auto__,favorited_QMARK_,page_menu_options))
);
var G__46200 = title;
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__46199,G__46200) : logseq.shui.ui.dropdown_menu_item.call(null,G__46199,G__46200));
})(),({"key": (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key))}));
})(),frontend$components$content$page_title_custom_context_menu_items_$_iter__46185(cljs.core.rest(s__46186__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,page_menu_options));
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$content$page_title_custom_context_menu_items__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46201 = cljs.core.first(args__31746__auto__);
var G__46202 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46201,G__46202) : io.factorhouse.hsx.core.obj_get.call(null,G__46201,G__46202));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"page-title-custom-context-menu-items","page-title-custom-context-menu-items",-765598417,null),args__31746__auto__),frontend$components$content$page_title_custom_context_menu_items,args__31746__auto__,null);
}
};
var frontend$components$content$page_title_custom_context_menu_items = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46234__i = 0, G__46234__a = new Array(arguments.length -  0);
while (G__46234__i < G__46234__a.length) {G__46234__a[G__46234__i] = arguments[G__46234__i + 0]; ++G__46234__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46234__a,0,null);
} 
return frontend$components$content$page_title_custom_context_menu_items__delegate.call(this,args__31746__auto__);};
frontend$components$content$page_title_custom_context_menu_items.cljs$lang$maxFixedArity = 0;
frontend$components$content$page_title_custom_context_menu_items.cljs$lang$applyTo = (function (arglist__46235){
var args__31746__auto__ = cljs.core.seq(arglist__46235);
return frontend$components$content$page_title_custom_context_menu_items__delegate(args__31746__auto__);
});
frontend$components$content$page_title_custom_context_menu_items.cljs$core$IFn$_invoke$arity$variadic = frontend$components$content$page_title_custom_context_menu_items__delegate;
return frontend$components$content$page_title_custom_context_menu_items;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46203 = comp__31745__auto__;
var G__46204 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46203,G__46204) : io.factorhouse.hsx.core.react_memo.call(null,G__46203,G__46204));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"page-title-custom-context-menu-items");

return comp__31745__auto__;
})();
frontend.components.content.page_title_custom_context_menu_content = (function (){var render_fn__31744__auto__ = (function frontend$components$content$page_title_custom_context_menu_content(page,popup_id){
if(cljs.core.truth_(page)){
return frontend.components.content.page_title_custom_context_menu_items(page,popup_id);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$content$page_title_custom_context_menu_content__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46205 = cljs.core.first(args__31746__auto__);
var G__46206 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46205,G__46206) : io.factorhouse.hsx.core.obj_get.call(null,G__46205,G__46206));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"page-title-custom-context-menu-content","page-title-custom-context-menu-content",805616194,null),args__31746__auto__),frontend$components$content$page_title_custom_context_menu_content,args__31746__auto__,null);
}
};
var frontend$components$content$page_title_custom_context_menu_content = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46236__i = 0, G__46236__a = new Array(arguments.length -  0);
while (G__46236__i < G__46236__a.length) {G__46236__a[G__46236__i] = arguments[G__46236__i + 0]; ++G__46236__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46236__a,0,null);
} 
return frontend$components$content$page_title_custom_context_menu_content__delegate.call(this,args__31746__auto__);};
frontend$components$content$page_title_custom_context_menu_content.cljs$lang$maxFixedArity = 0;
frontend$components$content$page_title_custom_context_menu_content.cljs$lang$applyTo = (function (arglist__46237){
var args__31746__auto__ = cljs.core.seq(arglist__46237);
return frontend$components$content$page_title_custom_context_menu_content__delegate(args__31746__auto__);
});
frontend$components$content$page_title_custom_context_menu_content.cljs$core$IFn$_invoke$arity$variadic = frontend$components$content$page_title_custom_context_menu_content__delegate;
return frontend$components$content$page_title_custom_context_menu_content;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46207 = comp__31745__auto__;
var G__46208 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46207,G__46208) : io.factorhouse.hsx.core.react_memo.call(null,G__46207,G__46208));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"page-title-custom-context-menu-content");

return comp__31745__auto__;
})();
frontend.components.content.hiccup_content = (function (){var render_fn__31744__auto__ = (function frontend$components$content$hiccup_content(id,p__46209){
var map__46210 = p__46209;
var map__46210__$1 = cljs.core.__destructure_map(map__46210);
var hiccup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46210__$1,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),(cljs.core.truth_(hiccup)?hiccup:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cursor","div.cursor",792839124),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","click-to-edit","editor/click-to-edit",1855770305)], 0))], null))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$content$hiccup_content__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46211 = cljs.core.first(args__31746__auto__);
var G__46212 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46211,G__46212) : io.factorhouse.hsx.core.obj_get.call(null,G__46211,G__46212));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"hiccup-content","hiccup-content",1720591327,null),args__31746__auto__),frontend$components$content$hiccup_content,args__31746__auto__,null);
}
};
var frontend$components$content$hiccup_content = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46238__i = 0, G__46238__a = new Array(arguments.length -  0);
while (G__46238__i < G__46238__a.length) {G__46238__a[G__46238__i] = arguments[G__46238__i + 0]; ++G__46238__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46238__a,0,null);
} 
return frontend$components$content$hiccup_content__delegate.call(this,args__31746__auto__);};
frontend$components$content$hiccup_content.cljs$lang$maxFixedArity = 0;
frontend$components$content$hiccup_content.cljs$lang$applyTo = (function (arglist__46239){
var args__31746__auto__ = cljs.core.seq(arglist__46239);
return frontend$components$content$hiccup_content__delegate(args__31746__auto__);
});
frontend$components$content$hiccup_content.cljs$core$IFn$_invoke$arity$variadic = frontend$components$content$hiccup_content__delegate;
return frontend$components$content$hiccup_content;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46213 = comp__31745__auto__;
var G__46214 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46213,G__46214) : io.factorhouse.hsx.core.react_memo.call(null,G__46213,G__46214));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"hiccup-content");

return comp__31745__auto__;
})();
frontend.components.content.non_hiccup_content = (function (){var render_fn__31744__auto__ = (function frontend$components$content$non_hiccup_content(id,content,on_click,on_hide,config,format){
var edit_QMARK_ = cljs.core.boolean$(cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","editing?","editor/editing?",807325417)], null)),id));
if(edit_QMARK_){
return frontend.components.editor.box(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),on_hide,new cljs.core.Keyword(null,"format","format",-1306924766),format], null),id,config);
} else {
var on_click__$1 = (function (e){
if(frontend.util.link_QMARK_(frontend.components.content.goog$module$goog$object.get(e,"target"))){
return null;
} else {
frontend.util.stop(e);

frontend.handler.editor.format.reset_cursor_range_BANG_(goog.dom.getElement((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))));

frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(id,content);

if(cljs.core.truth_(on_click)){
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(e) : on_click.call(null,e));
} else {
return null;
}
}
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.cursor.content.pre-white-space","pre.cursor.content.pre-white-space",1013553453),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click__$1], null),((clojure.string.blank_QMARK_(content))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cursor","div.cursor",792839124),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","click-to-edit","editor/click-to-edit",1855770305)], 0))], null):content)], null);
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$content$non_hiccup_content__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46215 = cljs.core.first(args__31746__auto__);
var G__46216 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46215,G__46216) : io.factorhouse.hsx.core.obj_get.call(null,G__46215,G__46216));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"non-hiccup-content","non-hiccup-content",772104007,null),args__31746__auto__),frontend$components$content$non_hiccup_content,args__31746__auto__,null);
}
};
var frontend$components$content$non_hiccup_content = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46240__i = 0, G__46240__a = new Array(arguments.length -  0);
while (G__46240__i < G__46240__a.length) {G__46240__a[G__46240__i] = arguments[G__46240__i + 0]; ++G__46240__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46240__a,0,null);
} 
return frontend$components$content$non_hiccup_content__delegate.call(this,args__31746__auto__);};
frontend$components$content$non_hiccup_content.cljs$lang$maxFixedArity = 0;
frontend$components$content$non_hiccup_content.cljs$lang$applyTo = (function (arglist__46241){
var args__31746__auto__ = cljs.core.seq(arglist__46241);
return frontend$components$content$non_hiccup_content__delegate(args__31746__auto__);
});
frontend$components$content$non_hiccup_content.cljs$core$IFn$_invoke$arity$variadic = frontend$components$content$non_hiccup_content__delegate;
return frontend$components$content$non_hiccup_content;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46217 = comp__31745__auto__;
var G__46218 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46217,G__46218) : io.factorhouse.hsx.core.react_memo.call(null,G__46217,G__46218));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"non-hiccup-content");

return comp__31745__auto__;
})();
frontend.components.content.content = (function (){var render_fn__31744__auto__ = (function frontend$components$content$content(id,p__46219){
var map__46220 = p__46219;
var map__46220__$1 = cljs.core.__destructure_map(map__46220);
var option = map__46220__$1;
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46220__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46220__$1,new cljs.core.Keyword(null,"config","config",994861415));
var hiccup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46220__$1,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46220__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var on_hide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46220__$1,new cljs.core.Keyword(null,"on-hide","on-hide",1263105709));
if(cljs.core.truth_(hiccup)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.components.content.hiccup_content(id,option)], null);
} else {
var format__$1 = logseq.common.util.normalize_format(format);
return frontend.components.content.non_hiccup_content(id,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(option),on_click,on_hide,config,format__$1);
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$content$content__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46221 = cljs.core.first(args__31746__auto__);
var G__46222 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46221,G__46222) : io.factorhouse.hsx.core.obj_get.call(null,G__46221,G__46222));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"content","content",1656364751,null),args__31746__auto__),frontend$components$content$content,args__31746__auto__,null);
}
};
var frontend$components$content$content = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46242__i = 0, G__46242__a = new Array(arguments.length -  0);
while (G__46242__i < G__46242__a.length) {G__46242__a[G__46242__i] = arguments[G__46242__i + 0]; ++G__46242__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46242__a,0,null);
} 
return frontend$components$content$content__delegate.call(this,args__31746__auto__);};
frontend$components$content$content.cljs$lang$maxFixedArity = 0;
frontend$components$content$content.cljs$lang$applyTo = (function (arglist__46243){
var args__31746__auto__ = cljs.core.seq(arglist__46243);
return frontend$components$content$content__delegate(args__31746__auto__);
});
frontend$components$content$content.cljs$core$IFn$_invoke$arity$variadic = frontend$components$content$content__delegate;
return frontend$components$content$content;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46223 = comp__31745__auto__;
var G__46224 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46223,G__46224) : io.factorhouse.hsx.core.react_memo.call(null,G__46223,G__46224));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"content");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.content.js.map
