goog.provide('frontend.components.block.status_history');
frontend.components.block.status_history.status_history_row = (function (){var render_fn__31744__auto__ = (function frontend$components$block$status_history$status_history_row(p__44650){
var map__44652 = p__44650;
var map__44652__$1 = cljs.core.__destructure_map(map__44652);
var created_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44652__$1,new cljs.core.Keyword(null,"created-at","created-at",-89248644));
var status_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44652__$1,new cljs.core.Keyword(null,"status-uuid","status-uuid",1673124471));
var map__44653 = frontend.db.hooks.use_block(status_uuid);
var map__44653__$1 = cljs.core.__destructure_map(map__44653);
var status = map__44653__$1;
var status_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44653__$1,new cljs.core.Keyword("block","title","block/title",710445684));
if(cljs.core.truth_(status)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.gap-1.items-center.text-sm.justify-between","div.flex.flex-row.gap-1.items-center.text-sm.justify-between",-1899333013),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.gap-1.items-center","div.flex.flex-row.gap-1.items-center",1211135204),frontend.components.icon.get_node_icon_cp(status,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(14),new cljs.core.Keyword(null,"color?","color?",-1891974356),true], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),status_title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.date.int__GT_local_time_2(created_at)], null)], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$status_history$status_history_row__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__44654 = cljs.core.first(args__31746__auto__);
var G__44655 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__44654,G__44655) : io.factorhouse.hsx.core.obj_get.call(null,G__44654,G__44655));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"status-history-row","status-history-row",1377001789,null),args__31746__auto__),frontend$components$block$status_history$status_history_row,args__31746__auto__,null);
}
};
var frontend$components$block$status_history$status_history_row = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__44697__i = 0, G__44697__a = new Array(arguments.length -  0);
while (G__44697__i < G__44697__a.length) {G__44697__a[G__44697__i] = arguments[G__44697__i + 0]; ++G__44697__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__44697__a,0,null);
} 
return frontend$components$block$status_history$status_history_row__delegate.call(this,args__31746__auto__);};
frontend$components$block$status_history$status_history_row.cljs$lang$maxFixedArity = 0;
frontend$components$block$status_history$status_history_row.cljs$lang$applyTo = (function (arglist__44698){
var args__31746__auto__ = cljs.core.seq(arglist__44698);
return frontend$components$block$status_history$status_history_row__delegate(args__31746__auto__);
});
frontend$components$block$status_history$status_history_row.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$status_history$status_history_row__delegate;
return frontend$components$block$status_history$status_history_row;
})()
;
var memo_comp__31747__auto__ = (function (){var G__44658 = comp__31745__auto__;
var G__44659 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__44658,G__44659) : io.factorhouse.hsx.core.react_memo.call(null,G__44658,G__44659));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"status-history-row");

return comp__31745__auto__;
})();
frontend.components.block.status_history.status_history_cp = (function (){var render_fn__31744__auto__ = (function frontend$components$block$status_history$status_history_cp(status_history){
var vec__44660 = logseq.shui.hooks.use_state(true);
var sort_desc_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44660,(0),null);
var set_sort_desc_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44660,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-2.text-muted-foreground.text-sm.max-h-96","div.p-2.text-muted-foreground.text-sm.max-h-96",1370897407),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-medium.mb-2.flex.flex-row.gap-2.items-center","div.font-medium.mb-2.flex.flex-row.gap-2.items-center",382661901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","status-history","block/status-history",1550430869)], 0))], null),logseq.shui.ui.button_ghost_icon((cljs.core.truth_(sort_desc_QMARK_)?new cljs.core.Keyword(null,"arrow-down","arrow-down",141510279):new cljs.core.Keyword(null,"arrow-up","arrow-up",-1363214427)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","sort-order","block/sort-order",2030963154)], 0)),new cljs.core.Keyword(null,"class","class",-2030961996),"text-muted-foreground !h-4 !w-4",new cljs.core.Keyword(null,"icon-props","icon-props",-895221875),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__44665 = cljs.core.not(sort_desc_QMARK_);
return (set_sort_desc_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_sort_desc_BANG_.cljs$core$IFn$_invoke$arity$1(G__44665) : set_sort_desc_BANG_.call(null,G__44665));
})], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-1","div.flex.flex-col.gap-1",1246857632),(function (){var iter__5628__auto__ = (function frontend$components$block$status_history$status_history_cp_$_iter__44668(s__44669){
return (new cljs.core.LazySeq(null,(function (){
var s__44669__$1 = s__44669;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__44669__$1);
if(temp__5825__auto__){
var s__44669__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44669__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__44669__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__44671 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__44670 = (0);
while(true){
if((i__44670 < size__5627__auto__)){
var item = cljs.core._nth(c__5626__auto__,i__44670);
cljs.core.chunk_append(b__44671,frontend.components.block.status_history.status_history_row(item));

var G__44704 = (i__44670 + (1));
i__44670 = G__44704;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44671),frontend$components$block$status_history$status_history_cp_$_iter__44668(cljs.core.chunk_rest(s__44669__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44671),null);
}
} else {
var item = cljs.core.first(s__44669__$2);
return cljs.core.cons(frontend.components.block.status_history.status_history_row(item),frontend$components$block$status_history$status_history_cp_$_iter__44668(cljs.core.rest(s__44669__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__((cljs.core.truth_(sort_desc_QMARK_)?cljs.core.reverse(status_history):status_history));
})()], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$status_history$status_history_cp__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__44676 = cljs.core.first(args__31746__auto__);
var G__44677 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__44676,G__44677) : io.factorhouse.hsx.core.obj_get.call(null,G__44676,G__44677));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"status-history-cp","status-history-cp",452423963,null),args__31746__auto__),frontend$components$block$status_history$status_history_cp,args__31746__auto__,null);
}
};
var frontend$components$block$status_history$status_history_cp = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__44705__i = 0, G__44705__a = new Array(arguments.length -  0);
while (G__44705__i < G__44705__a.length) {G__44705__a[G__44705__i] = arguments[G__44705__i + 0]; ++G__44705__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__44705__a,0,null);
} 
return frontend$components$block$status_history$status_history_cp__delegate.call(this,args__31746__auto__);};
frontend$components$block$status_history$status_history_cp.cljs$lang$maxFixedArity = 0;
frontend$components$block$status_history$status_history_cp.cljs$lang$applyTo = (function (arglist__44706){
var args__31746__auto__ = cljs.core.seq(arglist__44706);
return frontend$components$block$status_history$status_history_cp__delegate(args__31746__auto__);
});
frontend$components$block$status_history$status_history_cp.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$status_history$status_history_cp__delegate;
return frontend$components$block$status_history$status_history_cp;
})()
;
var memo_comp__31747__auto__ = (function (){var G__44678 = comp__31745__auto__;
var G__44679 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__44678,G__44679) : io.factorhouse.hsx.core.react_memo.call(null,G__44678,G__44679));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"status-history-cp");

return comp__31745__auto__;
})();
frontend.components.block.status_history.task_spent_time_cp = (function (){var render_fn__31744__auto__ = (function frontend$components$block$status_history$task_spent_time_cp(block){
var resource = frontend.db.hooks.use_resource(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block-task-time","block-task-time",-1756560847),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null));
var history__$1 = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(resource);
var seconds = new cljs.core.Keyword(null,"seconds","seconds",-445266194).cljs$core$IFn$_invoke$arity$1(resource);
if(cljs.core.truth_((function (){var and__5140__auto__ = seconds;
if(cljs.core.truth_(and__5140__auto__)){
return (seconds > (0));
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.time-spent.ml-1","div.text-sm.time-spent.ml-1",908707952),(function (){var G__44684 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),"text-muted-foreground !py-0 !px-1 h-6 font-normal",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var G__44686 = e.target;
var G__44687 = (function (){
return frontend.components.block.status_history.status_history_cp(history__$1);
});
var G__44688 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"end","end",-268185958)], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__44686,G__44687,G__44688) : logseq.shui.ui.popup_show_BANG_.call(null,G__44686,G__44687,G__44688));
})], null);
var G__44685 = frontend.util.clock.seconds__GT_days_COLON_hours_COLON_minutes_COLON_seconds(seconds);
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__44684,G__44685) : logseq.shui.ui.button.call(null,G__44684,G__44685));
})()], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$status_history$task_spent_time_cp__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__44689 = cljs.core.first(args__31746__auto__);
var G__44690 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__44689,G__44690) : io.factorhouse.hsx.core.obj_get.call(null,G__44689,G__44690));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"task-spent-time-cp","task-spent-time-cp",-466829849,null),args__31746__auto__),frontend$components$block$status_history$task_spent_time_cp,args__31746__auto__,null);
}
};
var frontend$components$block$status_history$task_spent_time_cp = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__44711__i = 0, G__44711__a = new Array(arguments.length -  0);
while (G__44711__i < G__44711__a.length) {G__44711__a[G__44711__i] = arguments[G__44711__i + 0]; ++G__44711__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__44711__a,0,null);
} 
return frontend$components$block$status_history$task_spent_time_cp__delegate.call(this,args__31746__auto__);};
frontend$components$block$status_history$task_spent_time_cp.cljs$lang$maxFixedArity = 0;
frontend$components$block$status_history$task_spent_time_cp.cljs$lang$applyTo = (function (arglist__44712){
var args__31746__auto__ = cljs.core.seq(arglist__44712);
return frontend$components$block$status_history$task_spent_time_cp__delegate(args__31746__auto__);
});
frontend$components$block$status_history$task_spent_time_cp.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$status_history$task_spent_time_cp__delegate;
return frontend$components$block$status_history$task_spent_time_cp;
})()
;
var memo_comp__31747__auto__ = (function (){var G__44691 = comp__31745__auto__;
var G__44692 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__44691,G__44692) : io.factorhouse.hsx.core.react_memo.call(null,G__44691,G__44692));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"task-spent-time-cp");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.block.status_history.js.map
