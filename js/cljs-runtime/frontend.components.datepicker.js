goog.provide('frontend.components.datepicker');
frontend.components.datepicker.focused_day_selector = "[role='gridcell'][aria-selected='true'] button, [role='gridcell'] button[tabindex='0']";
frontend.components.datepicker.same_calendar_day_QMARK_ = (function frontend$components$datepicker$same_calendar_day_QMARK_(a,b){
return cljs.core.boolean$((function (){var and__5140__auto__ = a;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = b;
if(cljs.core.truth_(and__5140__auto____$1)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a.getFullYear(),b.getFullYear())) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a.getMonth(),b.getMonth())) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a.getDate(),b.getDate())))));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})());
});
frontend.components.datepicker.focus_calendar_day_BANG_ = (function frontend$components$datepicker$focus_calendar_day_BANG_(root_id,remaining){
if((remaining > (0))){
var temp__5823__auto__ = (function (){var G__47706 = root_id;
var G__47706__$1 = (((G__47706 == null))?null:document.getElementById(G__47706));
if((G__47706__$1 == null)){
return null;
} else {
return G__47706__$1.querySelector(frontend.components.datepicker.focused_day_selector);
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var day = temp__5823__auto__;
return day.focus();
} else {
return setTimeout((function (){
var G__47707 = root_id;
var G__47708 = (remaining - (1));
return (frontend.components.datepicker.focus_calendar_day_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.components.datepicker.focus_calendar_day_BANG_.cljs$core$IFn$_invoke$arity$2(G__47707,G__47708) : frontend.components.datepicker.focus_calendar_day_BANG_.call(null,G__47707,G__47708));
}),(16));
}
} else {
return null;
}
});
frontend.components.datepicker.date_picker = (function (){var render_fn__31744__auto__ = (function frontend$components$datepicker$date_picker(dom_id,format){
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(frontend.state.get_state(new cljs.core.Keyword("date-picker","date","date-picker/date",-1622069581)))){
return null;
} else {
return frontend.state.set_state_BANG_(new cljs.core.Keyword("date-picker","date","date-picker/date",-1622069581),cljs_time.core.today());
}
}),cljs.core.PersistentVector.EMPTY);

var selected_date = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("date-picker","date","date-picker/date",-1622069581)], null));
var select_handler_BANG_ = logseq.shui.hooks.use_callback((function (d){
var temp__5825__auto__ = (function (){var or__5142__auto__ = d;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return selected_date;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var d__$1 = temp__5825__auto__;
var gd = (new goog.date.Date(d__$1.getFullYear(),d__$1.getMonth(),d__$1.getDate()));
var journal = frontend.date.js_date__GT_journal_title(gd);
var G__47709_47717 = dom_id;
var G__47710_47718 = logseq.common.util.page_ref.__GT_page_ref(journal);
var G__47711_47719 = format;
var G__47712_47720 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"page-ref","page-ref",-1047131151)], null);
(frontend.handler.editor.insert_command_BANG_.cljs$core$IFn$_invoke$arity$4 ? frontend.handler.editor.insert_command_BANG_.cljs$core$IFn$_invoke$arity$4(G__47709_47717,G__47710_47718,G__47711_47719,G__47712_47720) : frontend.handler.editor.insert_command_BANG_.call(null,G__47709_47717,G__47710_47718,G__47711_47719,G__47712_47720));

frontend.state.clear_editor_action_BANG_();

cljs.core.reset_BANG_(frontend.commands._STAR_current_command,null);

return frontend.state.set_state_BANG_(new cljs.core.Keyword("date-picker","date","date-picker/date",-1622069581),d__$1);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_id,format,selected_date], null));
var focus_handler_BANG_ = logseq.shui.hooks.use_callback((function (d){
if(cljs.core.truth_((function (){var and__5140__auto__ = d;
if(cljs.core.truth_(and__5140__auto__)){
return (!(frontend.components.datepicker.same_calendar_day_QMARK_(d,selected_date)));
} else {
return and__5140__auto__;
}
})())){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("date-picker","date","date-picker/date",-1622069581),d);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected_date], null));
logseq.shui.hooks.use_effect_BANG_((function (){
setTimeout((function (){
return frontend.components.datepicker.focus_calendar_day_BANG_("date-time-picker",(10));
}),(16));

return null;
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected_date], null));

logseq.shui.hooks.use_window_keydown.cljs$core$IFn$_invoke$arity$2((function (e){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",e.key)) && ((!(frontend.ui.date_picker_form_target_QMARK_(e)))))){
(select_handler_BANG_.cljs$core$IFn$_invoke$arity$1 ? select_handler_BANG_.cljs$core$IFn$_invoke$arity$1(selected_date) : select_handler_BANG_.call(null,selected_date));

return frontend.util.stop(e);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected_date,select_handler_BANG_], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#date-time-picker.ls-editor-date-picker.flex.flex-col","div#date-time-picker.ls-editor-date-picker.flex.flex-col",1931888317),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.border-red-500","div.border-red-500",1200393123),frontend.ui.nlp_calendar(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"mode","mode",654403691),"single",new cljs.core.Keyword(null,"initial-focus","initial-focus",1154999719),true,new cljs.core.Keyword(null,"show-week-number","show-week-number",532916714),false,new cljs.core.Keyword(null,"selected","selected",574897764),selected_date,new cljs.core.Keyword(null,"on-select","on-select",-192407950),select_handler_BANG_,new cljs.core.Keyword(null,"on-day-focus","on-day-focus",-1662473824),focus_handler_BANG_,new cljs.core.Keyword(null,"on-day-key-down","on-day-key-down",-466083153),(function (d,_,e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",e.key)){
(select_handler_BANG_.cljs$core$IFn$_invoke$arity$1 ? select_handler_BANG_.cljs$core$IFn$_invoke$arity$1(d) : select_handler_BANG_.call(null,d));

return frontend.util.stop(e);
} else {
return null;
}
})], null))], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$datepicker$date_picker__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47713 = cljs.core.first(args__31746__auto__);
var G__47714 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47713,G__47714) : io.factorhouse.hsx.core.obj_get.call(null,G__47713,G__47714));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"date-picker","date-picker",-1771878759,null),args__31746__auto__),frontend$components$datepicker$date_picker,args__31746__auto__,null);
}
};
var frontend$components$datepicker$date_picker = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47721__i = 0, G__47721__a = new Array(arguments.length -  0);
while (G__47721__i < G__47721__a.length) {G__47721__a[G__47721__i] = arguments[G__47721__i + 0]; ++G__47721__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47721__a,0,null);
} 
return frontend$components$datepicker$date_picker__delegate.call(this,args__31746__auto__);};
frontend$components$datepicker$date_picker.cljs$lang$maxFixedArity = 0;
frontend$components$datepicker$date_picker.cljs$lang$applyTo = (function (arglist__47722){
var args__31746__auto__ = cljs.core.seq(arglist__47722);
return frontend$components$datepicker$date_picker__delegate(args__31746__auto__);
});
frontend$components$datepicker$date_picker.cljs$core$IFn$_invoke$arity$variadic = frontend$components$datepicker$date_picker__delegate;
return frontend$components$datepicker$date_picker;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47715 = comp__31745__auto__;
var G__47716 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47715,G__47716) : io.factorhouse.hsx.core.react_memo.call(null,G__47715,G__47716));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"date-picker");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.datepicker.js.map
