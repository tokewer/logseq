goog.provide('frontend.components.select');
frontend.components.select.render_item = (function (){var render_fn__31744__auto__ = (function frontend$components$select$render_item(result,chosen_QMARK_,multiple_choices_QMARK_,_STAR_selected_choices){
var value = ((cljs.core.map_QMARK_(result))?(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(result);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(result);
}
})():result);
var header = new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(result);
var vec__44727 = logseq.shui.hooks.use_atom(_STAR_selected_choices);
var selected_choices = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44727,(0),null);
var row = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.justify-between.w-full","div.flex.flex-row.justify-between.w-full",1036490182),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(chosen_QMARK_)?"chosen":null),new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),frontend.util.stop_propagation], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.gap-1","div.flex.flex-row.items-center.gap-1",-1023433319),(cljs.core.truth_(multiple_choices_QMARK_)?frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.boolean$((function (){var G__44731 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(result);
return (selected_choices.cljs$core$IFn$_invoke$arity$1 ? selected_choices.cljs$core$IFn$_invoke$arity$1(G__44731) : selected_choices.call(null,G__44731));
})()),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return e.preventDefault();
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(result)], null)):null),value], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tip.flex.items-center.gap-1","div.tip.flex.items-center.gap-1",-1406769970),(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not(multiple_choices_QMARK_);
if(and__5140__auto__){
var G__44732 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(result);
return (selected_choices.cljs$core$IFn$_invoke$arity$1 ? selected_choices.cljs$core$IFn$_invoke$arity$1(G__44732) : selected_choices.call(null,G__44732));
} else {
return and__5140__auto__;
}
})())?frontend.ui.icon("check",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null)):null),(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.map_QMARK_(result);
if(and__5140__auto__){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(result);
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.opacity-20.bg-transparent","code.opacity-20.bg-transparent",-2039164517),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(result)], null):null)], null)], null);
if(cljs.core.truth_(header)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-1","div.flex.flex-col.gap-1",1246857632),header,row], null);
} else {
return row;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$select$render_item__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__44733 = cljs.core.first(args__31746__auto__);
var G__44734 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__44733,G__44734) : io.factorhouse.hsx.core.obj_get.call(null,G__44733,G__44734));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"render-item","render-item",-164592544,null),args__31746__auto__),frontend$components$select$render_item,args__31746__auto__,null);
}
};
var frontend$components$select$render_item = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__44842__i = 0, G__44842__a = new Array(arguments.length -  0);
while (G__44842__i < G__44842__a.length) {G__44842__a[G__44842__i] = arguments[G__44842__i + 0]; ++G__44842__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__44842__a,0,null);
} 
return frontend$components$select$render_item__delegate.call(this,args__31746__auto__);};
frontend$components$select$render_item.cljs$lang$maxFixedArity = 0;
frontend$components$select$render_item.cljs$lang$applyTo = (function (arglist__44843){
var args__31746__auto__ = cljs.core.seq(arglist__44843);
return frontend$components$select$render_item__delegate(args__31746__auto__);
});
frontend$components$select$render_item.cljs$core$IFn$_invoke$arity$variadic = frontend$components$select$render_item__delegate;
return frontend$components$select$render_item;
})()
;
var memo_comp__31747__auto__ = (function (){var G__44745 = comp__31745__auto__;
var G__44746 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__44745,G__44746) : io.factorhouse.hsx.core.react_memo.call(null,G__44745,G__44746));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"render-item");

return comp__31745__auto__;
})();
frontend.components.select.search_input = (function (){var render_fn__31744__auto__ = (function frontend$components$select$search_input(_STAR_input,p__44751){
var map__44752 = p__44751;
var map__44752__$1 = cljs.core.__destructure_map(map__44752);
var prompt_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44752__$1,new cljs.core.Keyword(null,"prompt-key","prompt-key",1549371683));
var input_default_placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44752__$1,new cljs.core.Keyword(null,"input-default-placeholder","input-default-placeholder",-1040139250));
var input_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44752__$1,new cljs.core.Keyword(null,"input-opts","input-opts",1688681135));
var on_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44752__$1,new cljs.core.Keyword(null,"on-input","on-input",-267523366));
var vec__44753 = logseq.shui.hooks.use_state(cljs.core.deref(_STAR_input));
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44753,(0),null);
var set_input_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44753,(1),null);
var _STAR_input_el = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var auto_focus_QMARK_ = cljs.core.not(frontend.util.mobile_QMARK_());
logseq.shui.hooks.use_effect_BANG_((function (){
if(auto_focus_QMARK_){
var timeout = setTimeout((function (){
var G__44758 = logseq.shui.hooks.deref(_STAR_input_el);
if((G__44758 == null)){
return null;
} else {
return G__44758.focus();
}
}),(16));
return (function (){
return clearTimeout(timeout);
});
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [auto_focus_QMARK_], null));

logseq.shui.hooks.use_effect_BANG_((function (){
cljs.core.reset_BANG_(_STAR_input,input);

if(cljs.core.fn_QMARK_(on_input)){
return (on_input.cljs$core$IFn$_invoke$arity$1 ? on_input.cljs$core$IFn$_invoke$arity$1(input) : on_input.call(null,input));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.shui.hooks.use_debounced_value(input,(100))], null));

logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.deref(_STAR_input))){
return (set_input_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_input_BANG_.call(null,""));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.shui.hooks.use_debounced_value(cljs.core.deref(_STAR_input),(100))], null));

logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(frontend.util.mobile_QMARK_())){
} else {
setTimeout((function (){
var G__44765 = logseq.shui.hooks.deref(_STAR_input_el);
if((G__44765 == null)){
return null;
} else {
return G__44765.focus();
}
}),(0));
}

return (function (){
return null;
});
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-wrap","div.input-wrap",1613697488),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.cp__select-input.w-full","input.cp__select-input.w-full",-394661933),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_input_el,new cljs.core.Keyword(null,"class","class",-2030961996),"!p-1.5",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),(function (){var or__5142__auto__ = input_default_placeholder;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prompt_key], 0));
}
})(),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),auto_focus_QMARK_,new cljs.core.Keyword(null,"value","value",305978217),input,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var v = frontend.util.evalue(e);
return (set_input_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_BANG_.cljs$core$IFn$_invoke$arity$1(v) : set_input_BANG_.call(null,v));
})], null),input_opts], 0))], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$select$search_input__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__44772 = cljs.core.first(args__31746__auto__);
var G__44773 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__44772,G__44773) : io.factorhouse.hsx.core.obj_get.call(null,G__44772,G__44773));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"search-input","search-input",1063615378,null),args__31746__auto__),frontend$components$select$search_input,args__31746__auto__,null);
}
};
var frontend$components$select$search_input = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__44844__i = 0, G__44844__a = new Array(arguments.length -  0);
while (G__44844__i < G__44844__a.length) {G__44844__a[G__44844__i] = arguments[G__44844__i + 0]; ++G__44844__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__44844__a,0,null);
} 
return frontend$components$select$search_input__delegate.call(this,args__31746__auto__);};
frontend$components$select$search_input.cljs$lang$maxFixedArity = 0;
frontend$components$select$search_input.cljs$lang$applyTo = (function (arglist__44845){
var args__31746__auto__ = cljs.core.seq(arglist__44845);
return frontend$components$select$search_input__delegate(args__31746__auto__);
});
frontend$components$select$search_input.cljs$core$IFn$_invoke$arity$variadic = frontend$components$select$search_input__delegate;
return frontend$components$select$search_input;
})()
;
var memo_comp__31747__auto__ = (function (){var G__44774 = comp__31745__auto__;
var G__44775 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__44774,G__44775) : io.factorhouse.hsx.core.react_memo.call(null,G__44774,G__44775));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"search-input");

return comp__31745__auto__;
})();
/**
 * Provides a select dropdown powered by a fuzzy search. Takes the following options:
 * * :items - Vec of things to select from. Assumes a vec of maps with :value key by default. Required option
 * * :limit - Limit number of items to search. Default is 100
 * * :on-chosen - Optional fn to perform an action with chosen item
 * * :extract-fn - Fn applied to each item during fuzzy search. Default is :value
 * * :extract-chosen-fn - Fn applied to each item when choosing an item. Default is identity
 * * :show-new-when-not-exact-match? - Boolean to allow new values be entered. Default is false
 * * :exact-match-exclude-items - A set of strings that can't be added as a new item. Default is #{}
 * * :transform-fn - Optional fn to transform search results given results and current input
 * * :new-case-sensitive? - Boolean to allow new values to be case sensitive
 * * :loading? - whether it's loading the items
 * TODO: Describe more options
 */
frontend.components.select.select = (function (){var render_fn__31744__auto__ = (function frontend$components$select$select(p__44786){
var map__44789 = p__44786;
var map__44789__$1 = cljs.core.__destructure_map(map__44789);
var opts = map__44789__$1;
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44789__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var on_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44789__$1,new cljs.core.Keyword(null,"on-input","on-input",-267523366));
var empty_placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44789__$1,new cljs.core.Keyword(null,"empty-placeholder","empty-placeholder",-68202085),(function (_t){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
}));
var initial_open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44789__$1,new cljs.core.Keyword(null,"initial-open?","initial-open?",1869534108),true);
var tap__STAR_selected_choices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44789__$1,new cljs.core.Keyword(null,"tap-*selected-choices","tap-*selected-choices",1550705437));
var exact_match_exclude_items = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44789__$1,new cljs.core.Keyword(null,"exact-match-exclude-items","exact-match-exclude-items",-668398850),cljs.core.PersistentHashSet.EMPTY);
var clear_input_on_chosen_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44789__$1,new cljs.core.Keyword(null,"clear-input-on-chosen?","clear-input-on-chosen?",-1498359231),true);
var prompt_key = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44789__$1,new cljs.core.Keyword(null,"prompt-key","prompt-key",1549371683),new cljs.core.Keyword("select","default-prompt","select/default-prompt",-657561626));
var on_chosen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44789__$1,new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900));
var tap__STAR_input_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44789__$1,new cljs.core.Keyword(null,"tap-*input-val","tap-*input-val",1531539652));
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44789__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),(100));
var dropdown_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44789__$1,new cljs.core.Keyword(null,"dropdown?","dropdown?",-1027769147));
var show_new_when_not_exact_match_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44789__$1,new cljs.core.Keyword(null,"show-new-when-not-exact-match?","show-new-when-not-exact-match?",1510536201));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44789__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var input_container = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44789__$1,new cljs.core.Keyword(null,"input-container","input-container",-1901353206));
var item_cp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44789__$1,new cljs.core.Keyword(null,"item-cp","item-cp",294728683));
var new_case_sensitive_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44789__$1,new cljs.core.Keyword(null,"new-case-sensitive?","new-case-sensitive?",-581012500));
var extract_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44789__$1,new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),new cljs.core.Keyword(null,"value","value",305978217));
var input_default_placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44789__$1,new cljs.core.Keyword(null,"input-default-placeholder","input-default-placeholder",-1040139250));
var extract_chosen_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44789__$1,new cljs.core.Keyword(null,"extract-chosen-fn","extract-chosen-fn",1058364622),cljs.core.identity);
var input_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44789__$1,new cljs.core.Keyword(null,"input-opts","input-opts",1688681135));
var transform_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44789__$1,new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327));
var host_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44789__$1,new cljs.core.Keyword(null,"host-opts","host-opts",-933691505));
var on_apply = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44789__$1,new cljs.core.Keyword(null,"on-apply","on-apply",-1897056081));
var close_modal_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44789__$1,new cljs.core.Keyword(null,"close-modal?","close-modal?",-207518383),true);
var grouped_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44789__$1,new cljs.core.Keyword(null,"grouped?","grouped?",531080948));
var multiple_choices_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44789__$1,new cljs.core.Keyword(null,"multiple-choices?","multiple-choices?",-1858892490));
frontend.modules.shortcut.core.use_disable_all_shortcuts_BANG_();

var _STAR_input = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1("");
}),cljs.core.PersistentVector.EMPTY);
var _STAR_toggle = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}),cljs.core.PersistentVector.EMPTY);
var _STAR_selected_choices = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.set(new cljs.core.Keyword(null,"selected-choices","selected-choices",1913324317).cljs$core$IFn$_invoke$arity$1(opts)));
}),cljs.core.PersistentVector.EMPTY);
var vec__44792 = logseq.shui.hooks.use_atom(_STAR_input);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44792,(0),null);
var vec__44795 = logseq.shui.hooks.use_atom(_STAR_selected_choices);
var selected_choices = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44795,(0),null);
var _ = logseq.shui.hooks.use_effect_BANG_((function (){
var choices = cljs.core.set(new cljs.core.Keyword(null,"selected-choices","selected-choices",1913324317).cljs$core$IFn$_invoke$arity$1(opts));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(choices,cljs.core.deref(_STAR_selected_choices))){
return cljs.core.reset_BANG_(_STAR_selected_choices,choices);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-choices","selected-choices",1913324317).cljs$core$IFn$_invoke$arity$1(opts)], null));
var ___$1 = logseq.shui.hooks.use_effect_BANG_((function (){
return (function (){
return (logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ls-select-modal","ls-select-modal",-1423366619)) : logseq.shui.ui.dialog_close_BANG_.call(null,new cljs.core.Keyword(null,"ls-select-modal","ls-select-modal",-1423366619)));
});
}),cljs.core.PersistentVector.EMPTY);
var ___$2 = logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.fn_QMARK_(tap__STAR_input_val)){
return (tap__STAR_input_val.cljs$core$IFn$_invoke$arity$1 ? tap__STAR_input_val.cljs$core$IFn$_invoke$arity$1(_STAR_input) : tap__STAR_input_val.call(null,_STAR_input));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tap__STAR_input_val,_STAR_input], null));
var ___$3 = logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.fn_QMARK_(tap__STAR_selected_choices)){
(tap__STAR_selected_choices.cljs$core$IFn$_invoke$arity$1 ? tap__STAR_selected_choices.cljs$core$IFn$_invoke$arity$1(_STAR_selected_choices) : tap__STAR_selected_choices.call(null,_STAR_selected_choices));
} else {
}

return null;
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tap__STAR_selected_choices], null));
var full_choices = (function (){var G__44798 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,items);
if(cljs.core.seq(input)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear?","clear?",1363344639),G__44798);
} else {
return G__44798;
}
})();
var search_result_SINGLEQUOTE_ = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var G__44799 = (frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$6 ? frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$6(full_choices,input,new cljs.core.Keyword(null,"limit","limit",-1355822363),limit,new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),extract_fn) : frontend.search.fuzzy_search.call(null,full_choices,input,new cljs.core.Keyword(null,"limit","limit",-1355822363),limit,new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),extract_fn));
if(cljs.core.fn_QMARK_(transform_fn)){
return (transform_fn.cljs$core$IFn$_invoke$arity$2 ? transform_fn.cljs$core$IFn$_invoke$arity$2(G__44799,input) : transform_fn.call(null,G__44799,input));
} else {
return G__44799;
}
})());
var exact_transform_fn = (cljs.core.truth_(new_case_sensitive_QMARK_)?cljs.core.identity:clojure.string.lower_case);
var exact_match_QMARK_ = cljs.core.contains_QMARK_(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(exact_transform_fn,cljs.core.str,extract_fn),search_result_SINGLEQUOTE_)),(exact_transform_fn.cljs$core$IFn$_invoke$arity$1 ? exact_transform_fn.cljs$core$IFn$_invoke$arity$1(input) : exact_transform_fn.call(null,input)));
var search_result_SINGLEQUOTE___$1 = (cljs.core.truth_((function (){var and__5140__auto__ = multiple_choices_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (!(clojure.string.blank_QMARK_(input)));
} else {
return and__5140__auto__;
}
})())?cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (item){
return (!(cljs.core.contains_QMARK_(selected_choices,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(item))));
}),search_result_SINGLEQUOTE_):search_result_SINGLEQUOTE_);
var new_option = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),input,new cljs.core.Keyword(null,"label","label",1718410804),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("select","new-option","select/new-option",1786655181),input], 0))], null);
var search_result = (cljs.core.truth_((function (){var and__5140__auto__ = show_new_when_not_exact_match_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (((!(exact_match_QMARK_))) && ((((!(clojure.string.blank_QMARK_(input)))) && (cljs.core.not((exact_match_exclude_items.cljs$core$IFn$_invoke$arity$1 ? exact_match_exclude_items.cljs$core$IFn$_invoke$arity$1(input) : exact_match_exclude_items.call(null,input)))))));
} else {
return and__5140__auto__;
}
})())?(function (){var current_input = (exact_transform_fn.cljs$core$IFn$_invoke$arity$1 ? exact_transform_fn.cljs$core$IFn$_invoke$arity$1(input) : exact_transform_fn.call(null,input));
var matches_QMARK_ = cljs.core.some((function (item){
return ((typeof item === 'string') && (((typeof current_input === 'string') && (clojure.string.includes_QMARK_(clojure.string.lower_case(item),clojure.string.lower_case(current_input))))));
}),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(exact_transform_fn,cljs.core.str,extract_fn),search_result_SINGLEQUOTE___$1)));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(cljs.core.truth_(matches_QMARK_)?cljs.core.cons(cljs.core.first(search_result_SINGLEQUOTE___$1),cljs.core.cons(new_option,cljs.core.rest(search_result_SINGLEQUOTE___$1))):cljs.core.cons(new_option,search_result_SINGLEQUOTE___$1)));
})():search_result_SINGLEQUOTE___$1);
var choose_result_BANG_ = (function (raw_chosen,e){
frontend.util.stop_propagation(e);

if(cljs.core.truth_(clear_input_on_chosen_QMARK_)){
cljs.core.reset_BANG_(_STAR_input,"");
} else {
}

var chosen = (extract_chosen_fn.cljs$core$IFn$_invoke$arity$1 ? extract_chosen_fn.cljs$core$IFn$_invoke$arity$1(raw_chosen) : extract_chosen_fn.call(null,raw_chosen));
if(cljs.core.truth_(multiple_choices_QMARK_)){
if(cljs.core.truth_((selected_choices.cljs$core$IFn$_invoke$arity$1 ? selected_choices.cljs$core$IFn$_invoke$arity$1(chosen) : selected_choices.call(null,chosen)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_selected_choices,cljs.core.disj,chosen);

if(cljs.core.truth_(on_chosen)){
var G__44800 = chosen;
var G__44801 = false;
var G__44802 = cljs.core.deref(_STAR_selected_choices);
var G__44803 = e;
return (on_chosen.cljs$core$IFn$_invoke$arity$4 ? on_chosen.cljs$core$IFn$_invoke$arity$4(G__44800,G__44801,G__44802,G__44803) : on_chosen.call(null,G__44800,G__44801,G__44802,G__44803));
} else {
return null;
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_selected_choices,cljs.core.conj,chosen);

if(cljs.core.truth_(on_chosen)){
var G__44804 = chosen;
var G__44805 = true;
var G__44806 = cljs.core.deref(_STAR_selected_choices);
var G__44807 = e;
return (on_chosen.cljs$core$IFn$_invoke$arity$4 ? on_chosen.cljs$core$IFn$_invoke$arity$4(G__44804,G__44805,G__44806,G__44807) : on_chosen.call(null,G__44804,G__44805,G__44806,G__44807));
} else {
return null;
}
}
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = close_modal_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(multiple_choices_QMARK_);
} else {
return and__5140__auto__;
}
})())){
frontend.state.close_dialog_BANG_();
} else {
}

if(cljs.core.truth_(on_chosen)){
var G__44808 = chosen;
var G__44809 = true;
var G__44810 = cljs.core.deref(_STAR_selected_choices);
var G__44811 = e;
return (on_chosen.cljs$core$IFn$_invoke$arity$4 ? on_chosen.cljs$core$IFn$_invoke$arity$4(G__44808,G__44809,G__44810,G__44811) : on_chosen.call(null,G__44808,G__44809,G__44810,G__44811));
} else {
return null;
}
}
});
var input_opts_STAR_ = ((cljs.core.fn_QMARK_(input_opts))?(function (){var G__44812 = cljs.core.empty_QMARK_(search_result);
return (input_opts.cljs$core$IFn$_invoke$arity$1 ? input_opts.cljs$core$IFn$_invoke$arity$1(G__44812) : input_opts.call(null,G__44812));
})():input_opts);
var input_container__$1 = (function (){var or__5142__auto__ = input_container;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.components.select.search_input(_STAR_input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"prompt-key","prompt-key",1549371683),prompt_key,new cljs.core.Keyword(null,"input-default-placeholder","input-default-placeholder",-1040139250),input_default_placeholder,new cljs.core.Keyword(null,"input-opts","input-opts",1688681135),input_opts_STAR_,new cljs.core.Keyword(null,"on-input","on-input",-267523366),on_input], null));
}
})();
var results_container_f = (function (){
if(cljs.core.truth_(loading_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-1.py-2","div.px-1.py-2",1183803022),frontend.ui.loading.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","loading","ui/loading",-736989697)], 0)))], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.seq(search_result))?"py-1":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item-results-wrap","div.item-results-wrap",1314997010),frontend.ui.auto_complete(search_result,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"grouped?","grouped?",531080948),grouped_QMARK_,new cljs.core.Keyword(null,"item-render","item-render",253627868),(function (){var or__5142__auto__ = item_cp;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (function (result,chosen_QMARK_){
return frontend.components.select.render_item(result,chosen_QMARK_,multiple_choices_QMARK_,_STAR_selected_choices);
});
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),"cp__select-results",new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),choose_result_BANG_,new cljs.core.Keyword(null,"empty-placeholder","empty-placeholder",-68202085),(empty_placeholder.cljs$core$IFn$_invoke$arity$1 ? empty_placeholder.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t) : empty_placeholder.call(null,frontend.context.i18n.t))], null))], null),(cljs.core.truth_((function (){var and__5140__auto__ = multiple_choices_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.fn_QMARK_(on_apply);
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4","div.p-4",-165933168),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","apply","ui/apply",1320389185)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
frontend.util.stop(e);

if(cljs.core.truth_(cljs.core.deref(_STAR_toggle))){
var fexpr__44817_44846 = cljs.core.deref(_STAR_toggle);
(fexpr__44817_44846.cljs$core$IFn$_invoke$arity$0 ? fexpr__44817_44846.cljs$core$IFn$_invoke$arity$0() : fexpr__44817_44846.call(null));
} else {
}

(on_apply.cljs$core$IFn$_invoke$arity$1 ? on_apply.cljs$core$IFn$_invoke$arity$1(selected_choices) : on_apply.call(null,selected_choices));

if(cljs.core.truth_(close_modal_QMARK_)){
return frontend.state.close_dialog_BANG_();
} else {
return null;
}
})], null)], 0))], null):null)], null);
}
});
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.fn_QMARK_(tap__STAR_input_val)){
(tap__STAR_input_val.cljs$core$IFn$_invoke$arity$1 ? tap__STAR_input_val.cljs$core$IFn$_invoke$arity$1(_STAR_input) : tap__STAR_input_val.call(null,_STAR_input));
} else {
}

return null;
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tap__STAR_input_val], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__select","div.cp__select",344443062),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"cp__select-main"], null),host_opts], 0)),(cljs.core.truth_(dropdown_QMARK_)?frontend.ui.dropdown(((cljs.core.fn_QMARK_(input_container__$1))?input_container__$1:(function (){
return input_container__$1;
})),results_container_f,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-open?","initial-open?",1869534108),initial_open_QMARK_,new cljs.core.Keyword(null,"*toggle-fn","*toggle-fn",458369769),_STAR_toggle], null)):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),((cljs.core.fn_QMARK_(input_container__$1))?(input_container__$1.cljs$core$IFn$_invoke$arity$0 ? input_container__$1.cljs$core$IFn$_invoke$arity$0() : input_container__$1.call(null)):input_container__$1),results_container_f()], null))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$select$select__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__44820 = cljs.core.first(args__31746__auto__);
var G__44821 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__44820,G__44821) : io.factorhouse.hsx.core.obj_get.call(null,G__44820,G__44821));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"select","select",-1506602266,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$select$select,args__31746__auto__,null);
}
};
var frontend$components$select$select = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__44847__i = 0, G__44847__a = new Array(arguments.length -  0);
while (G__44847__i < G__44847__a.length) {G__44847__a[G__44847__i] = arguments[G__44847__i + 0]; ++G__44847__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__44847__a,0,null);
} 
return frontend$components$select$select__delegate.call(this,args__31746__auto__);};
frontend$components$select$select.cljs$lang$maxFixedArity = 0;
frontend$components$select$select.cljs$lang$applyTo = (function (arglist__44848){
var args__31746__auto__ = cljs.core.seq(arglist__44848);
return frontend$components$select$select__delegate(args__31746__auto__);
});
frontend$components$select$select.cljs$core$IFn$_invoke$arity$variadic = frontend$components$select$select__delegate;
return frontend$components$select$select;
})()
;
var memo_comp__31747__auto__ = (function (){var G__44822 = comp__31745__auto__;
var G__44823 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__44822,G__44823) : io.factorhouse.hsx.core.react_memo.call(null,G__44822,G__44823));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"select");

return comp__31745__auto__;
})();
/**
 * Config that supports multiple types (uses) of this component. To add a new
 *   type, add a key with the value being a map with the following keys:
 * 
 *   * :items-fn - fn that returns items with a :value key that are used for the
 *  fuzzy search and selection. Items can have an optional :id and are displayed
 *  lightly for a given item.
 *   * :on-chosen - fn that is given item when it is chosen.
 *   * :empty-placeholder (optional) - fn that returns hiccup html to render if no
 *  matched graphs found.
 *   * :prompt-key (optional) - dictionary keyword that prompts when components is
 *  first open. Defaults to :select/default-prompt.
 */
frontend.components.select.select_config = (function frontend$components$select$select_config(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"graph-open","graph-open",-328022081),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"items-fn","items-fn",1580041737),(function (){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44827){
var map__44828 = p__44827;
var map__44828__$1 = cljs.core.__destructure_map(map__44828);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44828__$1,new cljs.core.Keyword(null,"url","url",276297046));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),frontend.util.text.get_graph_name_from_path(url),new cljs.core.Keyword(null,"id","id",-1388402092),frontend.config.get_repo_dir(url),new cljs.core.Keyword(null,"graph","graph",1558099509),url], null);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__44829){
var map__44830 = p__44829;
var map__44830__$1 = cljs.core.__destructure_map(map__44830);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44830__$1,new cljs.core.Keyword(null,"url","url",276297046));
return ((frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$1(url)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(url,frontend.state.get_current_repo())));
}),frontend.state.get_repos()));
}),new cljs.core.Keyword(null,"prompt-key","prompt-key",1549371683),new cljs.core.Keyword("graph.switch","select-prompt","graph.switch/select-prompt",-1925461736),new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (p1__44824_SHARP_){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","switch","graph/switch",178853840),new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(p1__44824_SHARP_)], null));
}),new cljs.core.Keyword(null,"empty-placeholder","empty-placeholder",-68202085),(function (t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-4.py-2","div.px-4.py-2",441645500),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-2","div.mb-2",-710047800),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("graph.switch","empty-desc","graph.switch/empty-desc",-779922096)) : t.call(null,new cljs.core.Keyword("graph.switch","empty-desc","graph.switch/empty-desc",-779922096)))], null),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("graph.switch","add-graph-action","graph.switch/add-graph-action",-2086007386)) : t.call(null,new cljs.core.Keyword("graph.switch","add-graph-action","graph.switch/add-graph-action",-2086007386))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"graphs","graphs",-1584479112)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.state.close_dialog_BANG_], 0))], null);
})], null),new cljs.core.Keyword(null,"graph-remove","graph-remove",-143683669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items-fn","items-fn",1580041737),(function (){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44831){
var map__44832 = p__44831;
var map__44832__$1 = cljs.core.__destructure_map(map__44832);
var original_graph = map__44832__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44832__$1,new cljs.core.Keyword(null,"url","url",276297046));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),frontend.util.text.get_graph_name_from_path(url),new cljs.core.Keyword(null,"id","id",-1388402092),frontend.config.get_repo_dir(url),new cljs.core.Keyword(null,"graph","graph",1558099509),url,new cljs.core.Keyword(null,"original-graph","original-graph",1959751157),original_graph], null);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__44833){
var map__44834 = p__44833;
var map__44834__$1 = cljs.core.__destructure_map(map__44834);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44834__$1,new cljs.core.Keyword(null,"url","url",276297046));
return frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$1(url);
}),frontend.state.get_repos()));
}),new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (p1__44825_SHARP_){
return frontend.handler.repo.remove_repo_BANG_(new cljs.core.Keyword(null,"original-graph","original-graph",1959751157).cljs$core$IFn$_invoke$arity$1(p1__44825_SHARP_));
})], null),new cljs.core.Keyword(null,"db-graph-replace","db-graph-replace",542096376),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items-fn","items-fn",1580041737),(function (){
var current_repo = frontend.state.get_current_repo();
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44835){
var map__44836 = p__44835;
var map__44836__$1 = cljs.core.__destructure_map(map__44836);
var original_graph = map__44836__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44836__$1,new cljs.core.Keyword(null,"url","url",276297046));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),frontend.util.text.get_graph_name_from_path(url),new cljs.core.Keyword(null,"id","id",-1388402092),frontend.config.get_repo_dir(url),new cljs.core.Keyword(null,"graph","graph",1558099509),url,new cljs.core.Keyword(null,"original-graph","original-graph",1959751157),original_graph], null);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__44837){
var map__44838 = p__44837;
var map__44838__$1 = cljs.core.__destructure_map(map__44838);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44838__$1,new cljs.core.Keyword(null,"url","url",276297046));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(url,current_repo);
}),frontend.state.get_repos()));
}),new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (p1__44826_SHARP_){
return frontend.handler.common.developer.import_chosen_graph(new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(p1__44826_SHARP_));
})], null)], null);
});
frontend.components.select.dialog_select_BANG_ = (function frontend$components$select$dialog_select_BANG_(select_type){
if(cljs.core.truth_(select_type)){
var select_type_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.components.select.select_config(),select_type);
var on_chosen_SINGLEQUOTE_ = new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900).cljs$core$IFn$_invoke$arity$1(select_type_config);
var G__44839 = (function (){
return frontend.components.select.select(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.select_keys(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(select_type_config,new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (it){
(on_chosen_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? on_chosen_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(it) : on_chosen_SINGLEQUOTE_.call(null,it));

return (logseq.shui.ui.dialog_close_all_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dialog_close_all_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dialog_close_all_BANG_.call(null));
})),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),new cljs.core.Keyword(null,"empty-placeholder","empty-placeholder",-68202085),new cljs.core.Keyword(null,"prompt-key","prompt-key",1549371683)], null)),new cljs.core.Keyword(null,"items","items",1031954938),(function (){var fexpr__44841 = new cljs.core.Keyword(null,"items-fn","items-fn",1580041737).cljs$core$IFn$_invoke$arity$1(select_type_config);
return (fexpr__44841.cljs$core$IFn$_invoke$arity$0 ? fexpr__44841.cljs$core$IFn$_invoke$arity$0() : fexpr__44841.call(null));
})()));
});
var G__44840 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ls-select-modal","ls-select-modal",-1423366619),new cljs.core.Keyword(null,"close-btn?","close-btn?",336318726),false,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ls-dialog-select"], null)], null);
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2(G__44839,G__44840) : logseq.shui.ui.dialog_open_BANG_.call(null,G__44839,G__44840));
} else {
return null;
}
});

//# sourceMappingURL=frontend.components.select.js.map
