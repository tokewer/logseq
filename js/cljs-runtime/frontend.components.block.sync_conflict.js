goog.provide('frontend.components.block.sync_conflict');
frontend.components.block.sync_conflict.sync_conflict_attr_label = (function frontend$components$block$sync_conflict$sync_conflict_attr_label(attr){
var G__44651 = attr;
var G__44651__$1 = (((G__44651 instanceof cljs.core.Keyword))?G__44651.fqn:null);
switch (G__44651__$1) {
case "block/title":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property.built-in","title","property.built-in/title",-418511564)], 0));

break;
default:
return cljs.core.name(attr);

}
});
frontend.components.block.sync_conflict.visible_sync_conflicts = (function frontend$components$block$sync_conflict$visible_sync_conflicts(block,conflicts){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__44656){
var map__44657 = p__44656;
var map__44657__$1 = cljs.core.__destructure_map(map__44657);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44657__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44657__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,attr));
}),conflicts));
});
frontend.components.block.sync_conflict.sync_conflict_item = (function (){var render_fn__31744__auto__ = (function frontend$components$block$sync_conflict$sync_conflict_item(p__44663){
var map__44664 = p__44663;
var map__44664__$1 = cljs.core.__destructure_map(map__44664);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44664__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44664__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44664__$1,new cljs.core.Keyword(null,"value","value",305978217));
var created_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44664__$1,new cljs.core.Keyword(null,"created-at","created-at",-89248644));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.border.rounded.p-3","div.border.rounded.p-3",2065941908),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.justify-between.gap-3.mb-2.text-xs.text-muted-foreground","div.flex.flex-row.items-center.justify-between.gap-3.mb-2.text-xs.text-muted-foreground",-55715561),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.components.block.sync_conflict.sync_conflict_attr_label(attr)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.date.int__GT_local_time_2(created_at)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.whitespace-pre-wrap.text-sm.bg-muted.p-2.rounded.max-h-64.overflow-auto","pre.whitespace-pre-wrap.text-sm.bg-muted.p-2.rounded.max-h-64.overflow-auto",1770268597),value], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-end.mt-2","div.flex.justify-end.mt-2",2127427556),(function (){var G__44666 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.util.copy_to_clipboard_BANG_(value);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("notification","copied","notification/copied",-1717318998)], 0)),new cljs.core.Keyword(null,"success","success",1890645906));
})], null);
var G__44667 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","copy","ui/copy",-1077613577)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__44666,G__44667) : logseq.shui.ui.button.call(null,G__44666,G__44667));
})()], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$sync_conflict$sync_conflict_item__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__44672 = cljs.core.first(args__31746__auto__);
var G__44673 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__44672,G__44673) : io.factorhouse.hsx.core.obj_get.call(null,G__44672,G__44673));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"sync-conflict-item","sync-conflict-item",1846188063,null),args__31746__auto__),frontend$components$block$sync_conflict$sync_conflict_item,args__31746__auto__,null);
}
};
var frontend$components$block$sync_conflict$sync_conflict_item = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__44714__i = 0, G__44714__a = new Array(arguments.length -  0);
while (G__44714__i < G__44714__a.length) {G__44714__a[G__44714__i] = arguments[G__44714__i + 0]; ++G__44714__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__44714__a,0,null);
} 
return frontend$components$block$sync_conflict$sync_conflict_item__delegate.call(this,args__31746__auto__);};
frontend$components$block$sync_conflict$sync_conflict_item.cljs$lang$maxFixedArity = 0;
frontend$components$block$sync_conflict$sync_conflict_item.cljs$lang$applyTo = (function (arglist__44715){
var args__31746__auto__ = cljs.core.seq(arglist__44715);
return frontend$components$block$sync_conflict$sync_conflict_item__delegate(args__31746__auto__);
});
frontend$components$block$sync_conflict$sync_conflict_item.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$sync_conflict$sync_conflict_item__delegate;
return frontend$components$block$sync_conflict$sync_conflict_item;
})()
;
var memo_comp__31747__auto__ = (function (){var G__44674 = comp__31745__auto__;
var G__44675 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__44674,G__44675) : io.factorhouse.hsx.core.react_memo.call(null,G__44674,G__44675));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"sync-conflict-item");

return comp__31745__auto__;
})();
frontend.components.block.sync_conflict.sync_conflicts_popup = (function (){var render_fn__31744__auto__ = (function frontend$components$block$sync_conflict$sync_conflicts_popup(conflicts,on_mark_resolved){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-3.w-96","div.p-3.w-96",1284139854),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"90vw"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-lg.font-medium.mb-2","h2.text-lg.font-medium.mb-2",-373619480),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync","conflicts-title","sync/conflicts-title",-592607760)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm.text-muted-foreground.mb-3","p.text-sm.text-muted-foreground.mb-3",690410735),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync","conflicts-description","sync/conflicts-description",-583314139)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-3","div.flex.flex-col.gap-3",-1634021513),(function (){var iter__5628__auto__ = (function frontend$components$block$sync_conflict$sync_conflicts_popup_$_iter__44680(s__44681){
return (new cljs.core.LazySeq(null,(function (){
var s__44681__$1 = s__44681;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__44681__$1);
if(temp__5825__auto__){
var s__44681__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44681__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__44681__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__44683 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__44682 = (0);
while(true){
if((i__44682 < size__5627__auto__)){
var conflict = cljs.core._nth(c__5626__auto__,i__44682);
cljs.core.chunk_append(b__44683,frontend.components.block.sync_conflict.sync_conflict_item(conflict));

var G__44716 = (i__44682 + (1));
i__44682 = G__44716;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44683),frontend$components$block$sync_conflict$sync_conflicts_popup_$_iter__44680(cljs.core.chunk_rest(s__44681__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44683),null);
}
} else {
var conflict = cljs.core.first(s__44681__$2);
return cljs.core.cons(frontend.components.block.sync_conflict.sync_conflict_item(conflict),frontend$components$block$sync_conflict$sync_conflicts_popup_$_iter__44680(cljs.core.rest(s__44681__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(conflicts);
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-end.mt-3","div.flex.justify-end.mt-3",2011928298),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync","mark-conflicts-resolved","sync/mark-conflicts-resolved",1381028275)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_mark_resolved], 0))], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$sync_conflict$sync_conflicts_popup__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__44693 = cljs.core.first(args__31746__auto__);
var G__44694 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__44693,G__44694) : io.factorhouse.hsx.core.obj_get.call(null,G__44693,G__44694));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"sync-conflicts-popup","sync-conflicts-popup",-1471086664,null),args__31746__auto__),frontend$components$block$sync_conflict$sync_conflicts_popup,args__31746__auto__,null);
}
};
var frontend$components$block$sync_conflict$sync_conflicts_popup = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__44717__i = 0, G__44717__a = new Array(arguments.length -  0);
while (G__44717__i < G__44717__a.length) {G__44717__a[G__44717__i] = arguments[G__44717__i + 0]; ++G__44717__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__44717__a,0,null);
} 
return frontend$components$block$sync_conflict$sync_conflicts_popup__delegate.call(this,args__31746__auto__);};
frontend$components$block$sync_conflict$sync_conflicts_popup.cljs$lang$maxFixedArity = 0;
frontend$components$block$sync_conflict$sync_conflicts_popup.cljs$lang$applyTo = (function (arglist__44718){
var args__31746__auto__ = cljs.core.seq(arglist__44718);
return frontend$components$block$sync_conflict$sync_conflicts_popup__delegate(args__31746__auto__);
});
frontend$components$block$sync_conflict$sync_conflicts_popup.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$sync_conflict$sync_conflicts_popup__delegate;
return frontend$components$block$sync_conflict$sync_conflicts_popup;
})()
;
var memo_comp__31747__auto__ = (function (){var G__44695 = comp__31745__auto__;
var G__44696 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__44695,G__44696) : io.factorhouse.hsx.core.react_memo.call(null,G__44695,G__44696));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"sync-conflicts-popup");

return comp__31745__auto__;
})();
frontend.components.block.sync_conflict.sync_conflicts_warning_button = (function (){var render_fn__31744__auto__ = (function frontend$components$block$sync_conflict$sync_conflicts_warning_button(block){
var repo = frontend.state.get_current_repo();
var block_id = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
var conflicts = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sync","block-conflicts","sync/block-conflicts",-273067594),repo,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id))], null));
var visible_conflicts = frontend.components.block.sync_conflict.visible_sync_conflicts(block,conflicts);
if(cljs.core.seq(visible_conflicts)){
return frontend.ui.tooltip((function (){var G__44699 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync","show-conflicts","sync/show-conflicts",1820699160)], 0)),new cljs.core.Keyword(null,"class","class",-2030961996),"ls-sync-conflict-warning ls-small-icon px-1 !py-0 h-5",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

var G__44701 = e.target;
var G__44702 = (function (){
return frontend.components.block.sync_conflict.sync_conflicts_popup(visible_conflicts,(function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","db-sync-clear-block-conflicts","thread-api/db-sync-clear-block-conflicts",-1126751705),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,block_id], 0))),(function (_){
return promesa.protocols._promise((logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null)));
}));
}));
}));
});
var G__44703 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"end","end",-268185958)], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__44701,G__44702,G__44703) : logseq.shui.ui.popup_show_BANG_.call(null,G__44701,G__44702,G__44703));
})], null);
var G__44700 = frontend.ui.icon("alert-triangle",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__44699,G__44700) : logseq.shui.ui.button.call(null,G__44699,G__44700));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync","show-conflicts","sync/show-conflicts",1820699160)], 0))], null));
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$sync_conflict$sync_conflicts_warning_button__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__44707 = cljs.core.first(args__31746__auto__);
var G__44708 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__44707,G__44708) : io.factorhouse.hsx.core.obj_get.call(null,G__44707,G__44708));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"sync-conflicts-warning-button","sync-conflicts-warning-button",-1980304587,null),args__31746__auto__),frontend$components$block$sync_conflict$sync_conflicts_warning_button,args__31746__auto__,null);
}
};
var frontend$components$block$sync_conflict$sync_conflicts_warning_button = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__44719__i = 0, G__44719__a = new Array(arguments.length -  0);
while (G__44719__i < G__44719__a.length) {G__44719__a[G__44719__i] = arguments[G__44719__i + 0]; ++G__44719__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__44719__a,0,null);
} 
return frontend$components$block$sync_conflict$sync_conflicts_warning_button__delegate.call(this,args__31746__auto__);};
frontend$components$block$sync_conflict$sync_conflicts_warning_button.cljs$lang$maxFixedArity = 0;
frontend$components$block$sync_conflict$sync_conflicts_warning_button.cljs$lang$applyTo = (function (arglist__44720){
var args__31746__auto__ = cljs.core.seq(arglist__44720);
return frontend$components$block$sync_conflict$sync_conflicts_warning_button__delegate(args__31746__auto__);
});
frontend$components$block$sync_conflict$sync_conflicts_warning_button.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$sync_conflict$sync_conflicts_warning_button__delegate;
return frontend$components$block$sync_conflict$sync_conflicts_warning_button;
})()
;
var memo_comp__31747__auto__ = (function (){var G__44709 = comp__31745__auto__;
var G__44710 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__44709,G__44710) : io.factorhouse.hsx.core.react_memo.call(null,G__44709,G__44710));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"sync-conflicts-warning-button");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.block.sync_conflict.js.map
