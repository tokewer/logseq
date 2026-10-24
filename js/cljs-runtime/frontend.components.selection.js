goog.provide('frontend.components.selection');
frontend.components.selection.show_comment_action_QMARK_ = (function frontend$components$selection$show_comment_action_QMARK_(outliner_QMARK_,comment_targets){
return cljs.core.boolean$((function (){var and__5140__auto__ = outliner_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.seq(comment_targets);
} else {
return and__5140__auto__;
}
})());
});
/**
 * Hide the action bar, then re-show it if blocks are still selected.
 */
frontend.components.selection.restore_action_bar = (function frontend$components$selection$restore_action_bar(){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","hide-action-bar","editor/hide-action-bar",-1927566378)], null));

return frontend.handler.editor.show_action_bar_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delay","delay",-574225219),(50)], null)], 0));
});
frontend.components.selection.unset_property_event = (function frontend$components$selection$unset_property_event(target,selected_blocks,view_parent){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","new-property","editor/new-property",-1370252491),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"selected-blocks","selected-blocks",-96882948),selected_blocks,new cljs.core.Keyword(null,"view-parent","view-parent",675596601),view_parent,new cljs.core.Keyword(null,"remove-property?","remove-property?",-521702287),true,new cljs.core.Keyword(null,"select-opts","select-opts",855704004),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-new-when-not-exact-match?","show-new-when-not-exact-match?",1510536201),false], null),new cljs.core.Keyword(null,"on-dialog-close","on-dialog-close",-900873769),frontend.components.selection.restore_action_bar], null)], null);
});
frontend.components.selection.action_group = (function (){var render_fn__31744__auto__ = (function frontend$components$selection$action_group(p__44722){
var map__44723 = p__44722;
var map__44723__$1 = cljs.core.__destructure_map(map__44723);
var on_cut = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44723__$1,new cljs.core.Keyword(null,"on-cut","on-cut",-1019124687),(function (){
return frontend.handler.editor.cut_selection_blocks(true);
}));
var on_copy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44723__$1,new cljs.core.Keyword(null,"on-copy","on-copy",-227435882));
var selected_blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44723__$1,new cljs.core.Keyword(null,"selected-blocks","selected-blocks",-96882948));
var hide_dots_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44723__$1,new cljs.core.Keyword(null,"hide-dots?","hide-dots?",-901521952));
var button_border_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44723__$1,new cljs.core.Keyword(null,"button-border?","button-border?",-2028710343));
var view_parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44723__$1,new cljs.core.Keyword(null,"view-parent","view-parent",675596601));
var outliner_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44723__$1,new cljs.core.Keyword(null,"outliner?","outliner?",854604974),true);
var search_mode = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("search","mode","search/mode",1628111395)], null));
var property_dialog_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","show-property-dialog?","ui/show-property-dialog?",241122918)], null));
var selected_block_ids = ((cljs.core.seq(selected_blocks))?cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__44721_SHARP_){
if(typeof p1__44721_SHARP_ === 'number'){
return p1__44721_SHARP_;
} else {
return null;
}
}),selected_blocks):frontend.state.get_selection_block_ids());
var direct_selected_blocks = ((cljs.core.seq(selected_blocks))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.util.entity.as_block_map,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.number_QMARK_,selected_blocks)):null);
var vec__44724 = logseq.shui.hooks.use_state(null);
var loaded_selected_blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44724,(0),null);
var set_loaded_selected_blocks_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44724,(1),null);
logseq.shui.hooks.use_effect_BANG_((function (){
promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_blocks(frontend.state.get_current_repo(),selected_block_ids)),(function (results){
return promesa.protocols._promise((function (){var G__44730 = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block","block",664686210),results));
return (set_loaded_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_loaded_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(G__44730) : set_loaded_selected_blocks_BANG_.call(null,G__44730));
})());
}));
}));

return null;
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected_block_ids], null));

if(cljs.core.truth_((function (){var or__5142__auto__ = search_mode;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return property_dialog_QMARK_;
}
})())){
return null;
} else {
var selected_blocks__$1 = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(direct_selected_blocks,loaded_selected_blocks));
var comment_targets = frontend.components.block.comments_model.comment_target_blocks(selected_blocks__$1);
var on_copy__$1 = ((((selected_blocks__$1) && ((on_copy == null))))?(function (){
return frontend.handler.editor.copy_selection_blocks.cljs$core$IFn$_invoke$arity$variadic(true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected-blocks","selected-blocks",-96882948),selected_blocks__$1], 0));
}):(function (){var or__5142__auto__ = on_copy;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (function (){
return frontend.handler.editor.copy_selection_blocks(true);
});
}
})());
var button_opts = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),(""+"selection-action-button -ml-px h-8 rounded-none border-border bg-background px-2 py-0 text-xs first:ml-0 first:rounded-l-md last:rounded-r-md"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(button_border_QMARK_)?null:" !border-b-0")))], null);
var G__44735 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"selection-action-group !gap-0"], null);
var G__44736 = (function (){var G__44743 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(button_opts,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
frontend.util.stop(e);

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","new-property","editor/new-property",-1370252491),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),e.currentTarget,new cljs.core.Keyword(null,"selected-blocks","selected-blocks",-96882948),selected_blocks__$1,new cljs.core.Keyword(null,"property-key","property-key",972402246),"Tags",new cljs.core.Keyword(null,"on-dialog-close","on-dialog-close",-900873769),frontend.components.selection.restore_action_bar], null)], null));
}));
var G__44744 = frontend.ui.tooltip(frontend.ui.icon("hash",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(13)], null)),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","set-tags","property/set-tags",1171910031)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"trigger-props","trigger-props",1619401213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex"], null)], null));
return (logseq.shui.ui.toolbar_button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.toolbar_button.cljs$core$IFn$_invoke$arity$2(G__44743,G__44744) : logseq.shui.ui.toolbar_button.call(null,G__44743,G__44744));
})();
var G__44737 = ((frontend.components.selection.show_comment_action_QMARK_(outliner_QMARK_,comment_targets))?(function (){var G__44747 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(button_opts,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
frontend.util.stop(e);

return frontend.handler.comments.add_comment_to_blocks_BANG_(comment_targets);
}));
var G__44748 = frontend.ui.tooltip(frontend.ui.icon("message-circle",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(13)], null)),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.comments","add-comment","block.comments/add-comment",-1902079159)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"trigger-props","trigger-props",1619401213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex"], null)], null));
return (logseq.shui.ui.toolbar_button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.toolbar_button.cljs$core$IFn$_invoke$arity$2(G__44747,G__44748) : logseq.shui.ui.toolbar_button.call(null,G__44747,G__44748));
})():null);
var G__44738 = (function (){var G__44749 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(button_opts,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
frontend.util.stop(e);

(on_copy__$1.cljs$core$IFn$_invoke$arity$0 ? on_copy__$1.cljs$core$IFn$_invoke$arity$0() : on_copy__$1.call(null));

frontend.state.clear_selection_BANG_();

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","hide-action-bar","editor/hide-action-bar",-1927566378)], null));
}));
var G__44750 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","copy","ui/copy",-1077613577)], 0));
return (logseq.shui.ui.toolbar_button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.toolbar_button.cljs$core$IFn$_invoke$arity$2(G__44749,G__44750) : logseq.shui.ui.toolbar_button.call(null,G__44749,G__44750));
})();
var G__44739 = (function (){var G__44756 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(button_opts,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
frontend.util.stop(e);

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","new-property","editor/new-property",-1370252491),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),e.currentTarget,new cljs.core.Keyword(null,"selected-blocks","selected-blocks",-96882948),selected_blocks__$1,new cljs.core.Keyword(null,"on-dialog-close","on-dialog-close",-900873769),frontend.components.selection.restore_action_bar], null)], null));
}));
var G__44757 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","set-property","property/set-property",1457602755)], 0));
return (logseq.shui.ui.toolbar_button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.toolbar_button.cljs$core$IFn$_invoke$arity$2(G__44756,G__44757) : logseq.shui.ui.toolbar_button.call(null,G__44756,G__44757));
})();
var G__44740 = (function (){var G__44759 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(button_opts,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
frontend.util.stop(e);

return frontend.state.pub_event_BANG_(frontend.components.selection.unset_property_event(e.target,selected_blocks__$1,view_parent));
}));
var G__44760 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","unset-property","property/unset-property",-1169646965)], 0));
return (logseq.shui.ui.toolbar_button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.toolbar_button.cljs$core$IFn$_invoke$arity$2(G__44759,G__44760) : logseq.shui.ui.toolbar_button.call(null,G__44759,G__44760));
})();
var G__44741 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329),null], null), null),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(view_parent)))?null:(function (){var G__44761 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(button_opts,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
frontend.util.stop(e);

(on_cut.cljs$core$IFn$_invoke$arity$0 ? on_cut.cljs$core$IFn$_invoke$arity$0() : on_cut.call(null));

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","hide-action-bar","editor/hide-action-bar",-1927566378)], null));
}));
var G__44762 = frontend.ui.icon("trash",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(13)], null));
return (logseq.shui.ui.toolbar_button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.toolbar_button.cljs$core$IFn$_invoke$arity$2(G__44761,G__44762) : logseq.shui.ui.toolbar_button.call(null,G__44761,G__44762));
})());
var G__44742 = (cljs.core.truth_(hide_dots_QMARK_)?null:(function (){var G__44763 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(button_opts,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
frontend.util.stop(e);

(logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));

var G__44766 = e;
var G__44767 = (function (p__44769){
var map__44770 = p__44769;
var map__44770__$1 = cljs.core.__destructure_map(map__44770);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44770__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(id) : logseq.shui.ui.popup_hide_BANG_.call(null,id));
}),new cljs.core.Keyword(null,"data-keep-selection","data-keep-selection",-2035432191),true], null),(function (){var fexpr__44771 = frontend.state.get_component(new cljs.core.Keyword("selection","context-menu","selection/context-menu",1845974273));
return (fexpr__44771.cljs$core$IFn$_invoke$arity$0 ? fexpr__44771.cljs$core$IFn$_invoke$arity$0() : fexpr__44771.call(null));
})()], null);
});
var G__44768 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-[280px] ls-context-menu-content"], null),new cljs.core.Keyword(null,"as-dropdown?","as-dropdown?",-37553558),true], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__44766,G__44767,G__44768) : logseq.shui.ui.popup_show_BANG_.call(null,G__44766,G__44767,G__44768));
}));
var G__44764 = frontend.ui.icon("dots",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(13)], null));
return (logseq.shui.ui.toolbar_button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.toolbar_button.cljs$core$IFn$_invoke$arity$2(G__44763,G__44764) : logseq.shui.ui.toolbar_button.call(null,G__44763,G__44764));
})());
return (logseq.shui.ui.toolbar_group.cljs$core$IFn$_invoke$arity$8 ? logseq.shui.ui.toolbar_group.cljs$core$IFn$_invoke$arity$8(G__44735,G__44736,G__44737,G__44738,G__44739,G__44740,G__44741,G__44742) : logseq.shui.ui.toolbar_group.call(null,G__44735,G__44736,G__44737,G__44738,G__44739,G__44740,G__44741,G__44742));
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$selection$action_group__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__44776 = cljs.core.first(args__31746__auto__);
var G__44777 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__44776,G__44777) : io.factorhouse.hsx.core.obj_get.call(null,G__44776,G__44777));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"action-group","action-group",2072427302,null),args__31746__auto__),frontend$components$selection$action_group,args__31746__auto__,null);
}
};
var frontend$components$selection$action_group = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__44813__i = 0, G__44813__a = new Array(arguments.length -  0);
while (G__44813__i < G__44813__a.length) {G__44813__a[G__44813__i] = arguments[G__44813__i + 0]; ++G__44813__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__44813__a,0,null);
} 
return frontend$components$selection$action_group__delegate.call(this,args__31746__auto__);};
frontend$components$selection$action_group.cljs$lang$maxFixedArity = 0;
frontend$components$selection$action_group.cljs$lang$applyTo = (function (arglist__44814){
var args__31746__auto__ = cljs.core.seq(arglist__44814);
return frontend$components$selection$action_group__delegate(args__31746__auto__);
});
frontend$components$selection$action_group.cljs$core$IFn$_invoke$arity$variadic = frontend$components$selection$action_group__delegate;
return frontend$components$selection$action_group;
})()
;
var memo_comp__31747__auto__ = (function (){var G__44778 = comp__31745__auto__;
var G__44779 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__44778,G__44779) : io.factorhouse.hsx.core.react_memo.call(null,G__44778,G__44779));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"action-group");

return comp__31745__auto__;
})();
frontend.components.selection.action_bar = (function (){var render_fn__31744__auto__ = (function() { 
var frontend$components$selection$action_bar__delegate = function (p__44780){
var vec__44781 = p__44780;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44781,(0),null);
var G__44784 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"selection-action-bar !gap-0"], null);
var G__44785 = frontend.components.selection.action_group((function (){var or__5142__auto__ = opts;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
return (logseq.shui.ui.toolbar.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.toolbar.cljs$core$IFn$_invoke$arity$2(G__44784,G__44785) : logseq.shui.ui.toolbar.call(null,G__44784,G__44785));
};
var frontend$components$selection$action_bar = function (var_args){
var p__44780 = null;
if (arguments.length > 0) {
var G__44815__i = 0, G__44815__a = new Array(arguments.length -  0);
while (G__44815__i < G__44815__a.length) {G__44815__a[G__44815__i] = arguments[G__44815__i + 0]; ++G__44815__i;}
  p__44780 = new cljs.core.IndexedSeq(G__44815__a,0,null);
} 
return frontend$components$selection$action_bar__delegate.call(this,p__44780);};
frontend$components$selection$action_bar.cljs$lang$maxFixedArity = 0;
frontend$components$selection$action_bar.cljs$lang$applyTo = (function (arglist__44816){
var p__44780 = cljs.core.seq(arglist__44816);
return frontend$components$selection$action_bar__delegate(p__44780);
});
frontend$components$selection$action_bar.cljs$core$IFn$_invoke$arity$variadic = frontend$components$selection$action_bar__delegate;
return frontend$components$selection$action_bar;
})()
;
var comp__31745__auto__ = (function() { 
var frontend$components$selection$action_bar__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__44787 = cljs.core.first(args__31746__auto__);
var G__44788 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__44787,G__44788) : io.factorhouse.hsx.core.obj_get.call(null,G__44787,G__44788));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"action-bar","action-bar",-906678316,null),args__31746__auto__),frontend$components$selection$action_bar,args__31746__auto__,null);
}
};
var frontend$components$selection$action_bar = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__44818__i = 0, G__44818__a = new Array(arguments.length -  0);
while (G__44818__i < G__44818__a.length) {G__44818__a[G__44818__i] = arguments[G__44818__i + 0]; ++G__44818__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__44818__a,0,null);
} 
return frontend$components$selection$action_bar__delegate.call(this,args__31746__auto__);};
frontend$components$selection$action_bar.cljs$lang$maxFixedArity = 0;
frontend$components$selection$action_bar.cljs$lang$applyTo = (function (arglist__44819){
var args__31746__auto__ = cljs.core.seq(arglist__44819);
return frontend$components$selection$action_bar__delegate(args__31746__auto__);
});
frontend$components$selection$action_bar.cljs$core$IFn$_invoke$arity$variadic = frontend$components$selection$action_bar__delegate;
return frontend$components$selection$action_bar;
})()
;
var memo_comp__31747__auto__ = (function (){var G__44790 = comp__31745__auto__;
var G__44791 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__44790,G__44791) : io.factorhouse.hsx.core.react_memo.call(null,G__44790,G__44791));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"action-bar");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.selection.js.map
