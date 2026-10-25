goog.provide('frontend.components.quick_add');
frontend.components.quick_add.page_blocks = (function (){var render_fn__31744__auto__ = (function frontend$components$quick_add$page_blocks(page){
var vec__46550 = logseq.shui.hooks.use_state(null);
var scroll_container = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46550,(0),null);
var set_scroll_container = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46550,(1),null);
var _STAR_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var container_id = frontend.state.use_container_id.cljs$core$IFn$_invoke$arity$0();
logseq.shui.hooks.use_effect_BANG_((function (){
var G__46553 = logseq.shui.hooks.deref(_STAR_ref);
return (set_scroll_container.cljs$core$IFn$_invoke$arity$1 ? set_scroll_container.cljs$core$IFn$_invoke$arity$1(G__46553) : set_scroll_container.call(null,G__46553));
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content-inner","div.content-inner",1608384529),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_ref], null),(cljs.core.truth_(scroll_container)?frontend.components.page.page_blocks_cp(page,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scroll-container","scroll-container",-1938238550),scroll_container,new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id], null)):null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$quick_add$page_blocks__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46554 = cljs.core.first(args__31746__auto__);
var G__46555 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46554,G__46555) : io.factorhouse.hsx.core.obj_get.call(null,G__46554,G__46555));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"page-blocks","page-blocks",-785347079,null),args__31746__auto__),frontend$components$quick_add$page_blocks,args__31746__auto__,null);
}
};
var frontend$components$quick_add$page_blocks = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46571__i = 0, G__46571__a = new Array(arguments.length -  0);
while (G__46571__i < G__46571__a.length) {G__46571__a[G__46571__i] = arguments[G__46571__i + 0]; ++G__46571__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46571__a,0,null);
} 
return frontend$components$quick_add$page_blocks__delegate.call(this,args__31746__auto__);};
frontend$components$quick_add$page_blocks.cljs$lang$maxFixedArity = 0;
frontend$components$quick_add$page_blocks.cljs$lang$applyTo = (function (arglist__46572){
var args__31746__auto__ = cljs.core.seq(arglist__46572);
return frontend$components$quick_add$page_blocks__delegate(args__31746__auto__);
});
frontend$components$quick_add$page_blocks.cljs$core$IFn$_invoke$arity$variadic = frontend$components$quick_add$page_blocks__delegate;
return frontend$components$quick_add$page_blocks;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46556 = comp__31745__auto__;
var G__46557 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46556,G__46557) : io.factorhouse.hsx.core.react_memo.call(null,G__46556,G__46557));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"page-blocks");

return comp__31745__auto__;
})();
frontend.components.quick_add.quick_add = (function (){var render_fn__31744__auto__ = (function frontend$components$quick_add$quick_add(){
var vec__46558 = logseq.shui.hooks.use_state(null);
var add_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46558,(0),null);
var set_add_page_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46558,(1),null);
var vec__46561 = logseq.shui.hooks.use_state(null);
var today_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46561,(0),null);
var set_today_page_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46561,(1),null);
logseq.shui.hooks.use_effect_BANG_((function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),logseq.common.config.quick_add_page_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (page){
return promesa.protocols._promise((set_add_page_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_add_page_BANG_.cljs$core$IFn$_invoke$arity$1(page) : set_add_page_BANG_.call(null,page)));
}));
}));
}),cljs.core.PersistentVector.EMPTY);

logseq.shui.hooks.use_effect_BANG_((function (){
promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_journal_page_by_day(frontend.state.get_current_repo(),frontend.date.today_journal_day())),(function (page){
return promesa.protocols._promise((set_today_page_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_today_page_BANG_.cljs$core$IFn$_invoke$arity$1(page) : set_today_page_BANG_.call(null,page)));
}));
}));

return null;
}),cljs.core.PersistentVector.EMPTY);

logseq.shui.hooks.use_effect_BANG_((function (){
frontend.state.clear_selection_BANG_();

if(cljs.core.truth_(frontend.util.mobile_QMARK_())){
} else {
frontend.handler.editor.quick_add.quick_add_open_last_block_BANG_();
}

return (function (){
return frontend.state.clear_selection_BANG_();
});
}),cljs.core.PersistentVector.EMPTY);

if(cljs.core.truth_(today_page)){
if(cljs.core.truth_(add_page)){
var mobile_QMARK_ = frontend.util.mobile_QMARK_();
var add_button = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__46564 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
return frontend.handler.editor.quick_add.quick_add_blocks_BANG_();
})], null);
var G__46565 = (cljs.core.truth_(mobile_QMARK_)?null:(cljs.core.truth_(frontend.util.mac_QMARK_)?logseq.shui.ui.shortcut(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mod","e"], null)):logseq.shui.ui.shortcut(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mod","alt","e"], null))));
var G__46566 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor.quick-add","add-to-today","editor.quick-add/add-to-today",-358518730)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__46564,G__46565,G__46566) : logseq.shui.ui.button.call(null,G__46564,G__46565,G__46566));
})()], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-quick-add.flex.flex-1.flex-col.w-full.gap-4","div.ls-quick-add.flex.flex-1.flex-col.w-full.gap-4",-1447578972),(cljs.core.truth_(mobile_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.justify-between.gap-4.items-center","div.flex.flex-row.justify-between.gap-4.items-center",-1305722522),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-b pb-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-medium","div.font-medium",-70133240),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor.quick-add","title","editor.quick-add/title",-1953436817)], 0))], null)], null)),(cljs.core.truth_(mobile_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full.mt-4","div.w-full.mt-4",-1298118174),frontend.components.quick_add.page_blocks(add_page)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block -ml-6"], null),frontend.components.quick_add.page_blocks(add_page)], null)),(cljs.core.truth_(mobile_QMARK_)?null:add_button)], null);
} else {
return null;
}
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$quick_add$quick_add__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46567 = cljs.core.first(args__31746__auto__);
var G__46568 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46567,G__46568) : io.factorhouse.hsx.core.obj_get.call(null,G__46567,G__46568));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"quick-add","quick-add",549897355,null),args__31746__auto__),frontend$components$quick_add$quick_add,args__31746__auto__,null);
}
};
var frontend$components$quick_add$quick_add = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46573__i = 0, G__46573__a = new Array(arguments.length -  0);
while (G__46573__i < G__46573__a.length) {G__46573__a[G__46573__i] = arguments[G__46573__i + 0]; ++G__46573__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46573__a,0,null);
} 
return frontend$components$quick_add$quick_add__delegate.call(this,args__31746__auto__);};
frontend$components$quick_add$quick_add.cljs$lang$maxFixedArity = 0;
frontend$components$quick_add$quick_add.cljs$lang$applyTo = (function (arglist__46574){
var args__31746__auto__ = cljs.core.seq(arglist__46574);
return frontend$components$quick_add$quick_add__delegate(args__31746__auto__);
});
frontend$components$quick_add$quick_add.cljs$core$IFn$_invoke$arity$variadic = frontend$components$quick_add$quick_add__delegate;
return frontend$components$quick_add$quick_add;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46569 = comp__31745__auto__;
var G__46570 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46569,G__46570) : io.factorhouse.hsx.core.react_memo.call(null,G__46569,G__46570));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"quick-add");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.quick_add.js.map
