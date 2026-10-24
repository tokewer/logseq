goog.provide('frontend.handler.events.export$');
frontend.handler.events.export$.indicator_progress = (function (){var render_fn__31744__auto__ = (function frontend$handler$events$export$indicator_progress(){
var map__46911 = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","exporting-state","graph/exporting-state",-650713812)], null));
var map__46911__$1 = cljs.core.__destructure_map(map__46911);
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46911__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var current_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46911__$1,new cljs.core.Keyword(null,"current-idx","current-idx",1734114444));
var current_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46911__$1,new cljs.core.Keyword(null,"current-page","current-page",-101294180));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46911__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var label__$1 = (function (){var or__5142__auto__ = label;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","exporting","export/exporting",952032247)], 0));
}
})();
var left_label = (cljs.core.truth_((function (){var and__5140__auto__ = current_idx;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = total;
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_idx,total);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.font-bold","div.flex.flex-row.font-bold",2116828028),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","loading","ui/loading",-736989697)], 0))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.font-bold","div.flex.flex-row.font-bold",2116828028),label__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hidden.md:flex.flex-row","div.hidden.md:flex.flex-row",-212067351),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mr-1","span.mr-1",127520086),": "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-ellipsis-wrapper","div.text-ellipsis-wrapper",-595927398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(300)], null)], null),current_page], null)], null)], null));
var width = Math.round(((current_idx / total).toFixed((2)) * (100)));
var process__$1 = (cljs.core.truth_((function (){var and__5140__auto__ = total;
if(cljs.core.truth_(and__5140__auto__)){
return current_idx;
} else {
return and__5140__auto__;
}
})())?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_idx)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total)):null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-5","div.p-5",194272525),frontend.ui.progress_bar_with_label(width,left_label,process__$1)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$handler$events$export$indicator_progress__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46916 = cljs.core.first(args__31746__auto__);
var G__46917 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46916,G__46917) : io.factorhouse.hsx.core.obj_get.call(null,G__46916,G__46917));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"indicator-progress","indicator-progress",1180289509,null),args__31746__auto__),frontend$handler$events$export$indicator_progress,args__31746__auto__,null);
}
};
var frontend$handler$events$export$indicator_progress = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46944__i = 0, G__46944__a = new Array(arguments.length -  0);
while (G__46944__i < G__46944__a.length) {G__46944__a[G__46944__i] = arguments[G__46944__i + 0]; ++G__46944__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46944__a,0,null);
} 
return frontend$handler$events$export$indicator_progress__delegate.call(this,args__31746__auto__);};
frontend$handler$events$export$indicator_progress.cljs$lang$maxFixedArity = 0;
frontend$handler$events$export$indicator_progress.cljs$lang$applyTo = (function (arglist__46948){
var args__31746__auto__ = cljs.core.seq(arglist__46948);
return frontend$handler$events$export$indicator_progress__delegate(args__31746__auto__);
});
frontend$handler$events$export$indicator_progress.cljs$core$IFn$_invoke$arity$variadic = frontend$handler$events$export$indicator_progress__delegate;
return frontend$handler$events$export$indicator_progress;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46921 = comp__31745__auto__;
var G__46922 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46921,G__46922) : io.factorhouse.hsx.core.react_memo.call(null,G__46921,G__46922));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"indicator-progress");

return comp__31745__auto__;
})();
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("dialog","export-zip","dialog/export-zip",-1816696992),(function (p__46925){
var vec__46929 = p__46925;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46929,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46929,(1),null);
(logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dialog_close_BANG_.call(null));

frontend.state.set_state_BANG_(new cljs.core.Keyword("graph","exporting","graph/exporting",-2054731251),new cljs.core.Keyword(null,"export-zip","export-zip",1141726392));

frontend.state.set_state_BANG_(new cljs.core.Keyword("graph","exporting-state","graph/exporting-state",-650713812),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"total","total",1916810418),(100),new cljs.core.Keyword(null,"current-idx","current-idx",1734114444),(0),new cljs.core.Keyword(null,"current-page","current-page",-101294180),label,new cljs.core.Keyword(null,"label","label",1718410804),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","exporting","export/exporting",952032247)], 0))], null));

if(cljs.core.truth_(logseq.shui.dialog.core.get_dialog(new cljs.core.Keyword(null,"export-indicator","export-indicator",276756512)))){
return null;
} else {
var G__46932 = frontend.handler.events.export$.indicator_progress;
var G__46933 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"export-indicator","export-indicator",276756512),new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onPointerDownOutside","onPointerDownOutside",404933036),(function (p1__46923_SHARP_){
return p1__46923_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"onOpenAutoFocus","onOpenAutoFocus",-99363202),(function (p1__46924_SHARP_){
return p1__46924_SHARP_.preventDefault();
})], null)], null);
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2(G__46932,G__46933) : logseq.shui.ui.dialog_open_BANG_.call(null,G__46932,G__46933));
}
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("dialog","close-export-zip","dialog/close-export-zip",317970357),(function (_){
frontend.state.set_state_BANG_(new cljs.core.Keyword("graph","exporting","graph/exporting",-2054731251),null);

frontend.state.set_state_BANG_(new cljs.core.Keyword("graph","exporting-state","graph/exporting-state",-650713812),null);

return (logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"export-indicator","export-indicator",276756512)) : logseq.shui.ui.dialog_close_BANG_.call(null,new cljs.core.Keyword(null,"export-indicator","export-indicator",276756512)));
}));

//# sourceMappingURL=frontend.handler.events.export.js.map
