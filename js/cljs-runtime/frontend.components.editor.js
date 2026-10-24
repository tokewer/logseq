goog.provide('frontend.components.editor');
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.editor !== 'undefined') && (typeof frontend.components.editor.no_matched_commands !== 'undefined')){
} else {
frontend.components.editor.no_matched_commands = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["No matched commands",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","move-cursor-to-end","editor/move-cursor-to-end",-95512412)], null)], null)], null)], null);
}
frontend.components.editor.use_current_edit_content = (function frontend$components$editor$use_current_edit_content(){
return frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","content","editor/content",-756190443),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block())], null));
});
frontend.components.editor.filter_commands = (function frontend$components$editor$filter_commands(page_QMARK_,has_heading_QMARK_,commands){
return cljs.core.seq((cljs.core.truth_(page_QMARK_)?(function (){var task_groups = cljs.core.PersistentHashSet.createAsIfByAssoc([frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor.slash","group-task-status","editor.slash/group-task-status",-1551991772)], 0)),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor.slash","group-priority","editor.slash/group-priority",1316518736)], 0)),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor.slash","group-task-date","editor.slash/group-task-date",-171305763)], 0))]);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (item){
var or__5142__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("command.editor","add-property","command.editor/add-property",1501848121)], 0)),cljs.core.first(item));
if(or__5142__auto__){
return or__5142__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item),(5))){
return cljs.core.contains_QMARK_(task_groups,cljs.core.last(item));
} else {
return null;
}
}
}),commands);
})():(cljs.core.truth_(has_heading_QMARK_)?commands:cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__47792_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor.slash","clear-heading","editor.slash/clear-heading",-742968696)], 0)),cljs.core.first(p1__47792_SHARP_));
}),commands))));
});
/**
 * True when the slash popup was narrowed by user search text.
 * 
 *   Contextual filters such as hiding Clear heading on non-heading blocks
 *   do not count as a search filter and must not hide group headings.
 */
frontend.components.editor.slash_commands_search_filtered_QMARK_ = (function frontend$components$editor$slash_commands_search_filtered_QMARK_(search_matched,initial_commands){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(search_matched,initial_commands);
});
frontend.components.editor.node_render = (function frontend$components$editor$node_render(block,q,p__47793){
var map__47794 = p__47793;
var map__47794__$1 = cljs.core.__destructure_map(map__47794);
var db_tag_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47794__$1,new cljs.core.Keyword(null,"db-tag?","db-tag?",-902027160));
var block_SINGLEQUOTE_ = (function (){var G__47795 = block;
if(cljs.core.truth_(new cljs.core.Keyword(null,"friendly-title","friendly-title",-1692351994).cljs$core$IFn$_invoke$arity$1(block))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47795,new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword(null,"friendly-title","friendly-title",-1692351994).cljs$core$IFn$_invoke$arity$1(block));
} else {
return G__47795;
}
})();
if(clojure.string.blank_QMARK_(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_))){
return null;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col","div.flex.flex-col",255067761),(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_);
if(cljs.core.truth_(and__5140__auto__)){
var or__5142__auto__ = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.not(new cljs.core.Keyword(null,"page?","page?",644039860).cljs$core$IFn$_invoke$arity$1(block));
}
} else {
return and__5140__auto__;
}
})())?(function (){var temp__5825__auto__ = frontend.state.get_component(new cljs.core.Keyword("block","breadcrumb","block/breadcrumb",1725167425));
if(cljs.core.truth_(temp__5825__auto__)){
var breadcrumb = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.opacity-70.mb-1","div.text-xs.opacity-70.mb-1",-2012304238),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(3)], null)], null),(function (){var G__47796 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search?","search?",785472524),true], null);
var G__47797 = frontend.state.get_current_repo();
var G__47798 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_);
var G__47799 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),true,new cljs.core.Keyword(null,"block","block",664686210),block_SINGLEQUOTE_], null);
return (breadcrumb.cljs$core$IFn$_invoke$arity$4 ? breadcrumb.cljs$core$IFn$_invoke$arity$4(G__47796,G__47797,G__47798,G__47799) : breadcrumb.call(null,G__47796,G__47797,G__47798,G__47799));
})()], null);
} else {
return null;
}
})():null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-start","div.flex.flex-row.items-start",-642182129),(cljs.core.truth_(db_tag_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.h-5.mr-1.opacity-50","div.flex.items-center.h-5.mr-1.opacity-50",1449542239),(cljs.core.truth_(new cljs.core.Keyword(null,"nlp-date?","nlp-date?",1961584384).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_))?frontend.ui.icon("calendar",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null)):((((clojure.string.starts_with_QMARK_((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_))),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","new-tag","editor/new-tag",-1492362953)], 0)))) || (clojure.string.starts_with_QMARK_((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_))),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","new-page","editor/new-page",650508245)], 0))))))?frontend.ui.icon("plus",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null)):frontend.components.icon.get_node_icon_cp(block_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore-current-icon?","ignore-current-icon?",-1279467710),true], null))
))], null)),(function (){var title = (function (){var alias = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alias","alias",-2039751630),new cljs.core.Keyword("block","title","block/title",710445684)], null));
return frontend.handler.block.block_unique_title.cljs$core$IFn$_invoke$arity$variadic(block_SINGLEQUOTE_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alias","alias",-2039751630),alias], null)], 0));
})();
if(((clojure.string.starts_with_QMARK_(title,frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","new-tag","editor/new-tag",-1492362953)], 0)))) || (clojure.string.starts_with_QMARK_(title,frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","new-page","editor/new-page",650508245)], 0)))))){
return title;
} else {
return frontend.handler.block.block_title_with_icon(block_SINGLEQUOTE_,frontend.handler.search.highlight_exact_query(title,q),frontend.components.icon.icon);
}
})()], null)], null);
}
});
frontend.components.editor.commands = (function (){var render_fn__31744__auto__ = (function frontend$components$editor$commands(id,format){
var vec__47800 = logseq.shui.hooks.use_atom(frontend.commands._STAR_matched_commands);
var matched_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47800,(0),null);
var edit_block = frontend.state.get_edit_block();
var page_QMARK_ = frontend.util.entity.page_QMARK_(edit_block);
var has_heading_QMARK_ = cljs.core.boolean$((frontend.handler.property.util.lookup.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.property.util.lookup.cljs$core$IFn$_invoke$arity$2(edit_block,new cljs.core.Keyword("logseq.property","heading","logseq.property/heading",1858749415)) : frontend.handler.property.util.lookup.call(null,edit_block,new cljs.core.Keyword("logseq.property","heading","logseq.property/heading",1858749415))));
var matched = (function (){var or__5142__auto__ = frontend.components.editor.filter_commands(page_QMARK_,has_heading_QMARK_,matched_SINGLEQUOTE_);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return frontend.components.editor.no_matched_commands;
}
})();
var filtered_QMARK_ = frontend.components.editor.slash_commands_search_filtered_QMARK_(matched_SINGLEQUOTE_,cljs.core.deref(frontend.commands._STAR_initial_commands));
return frontend.ui.auto_complete(matched,(function (){var G__47803 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"item-render","item-render",253627868),(function (item){
var command_name = cljs.core.first(item);
var command_doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,(2));
var plugin_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),new cljs.core.Keyword(null,"pid","pid",1018387698)], null));
var doc = (cljs.core.truth_(frontend.state.show_command_doc_QMARK_())?command_doc:null);
var options = (function (){var G__47804 = item;
if((G__47804 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__47804,(3));
}
})();
var icon_name = (function (){var G__47805 = ((cljs.core.map_QMARK_(options))?new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(options):options);
if((G__47805 == null)){
return null;
} else {
return cljs.core.name(G__47805);
}
})();
var command_name__$1 = (cljs.core.truth_(icon_name)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1","span.flex.items-center.gap-1",-111995724),logseq.shui.ui.tabler_icon(icon_name),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.font-normal","strong.font-normal",521441352),command_name], null)], null):command_name);
if(cljs.core.truth_((function (){var or__5142__auto__ = plugin_id;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.vector_QMARK_(doc);
}
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.has-help","div.has-help",152274947),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),plugin_id], null),command_name__$1,(cljs.core.truth_(doc)?frontend.ui.tooltip(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),frontend.components.svg.help_circle.cljs$core$IFn$_invoke$arity$0()], null),doc):null)], null);
} else {
if(typeof doc === 'string'){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),doc], null),command_name__$1], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),command_name__$1], null);

}
}
}),new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (chosen_item){
var command = cljs.core.first(chosen_item);
cljs.core.reset_BANG_(frontend.commands._STAR_current_command,command);

var command_steps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,matched),command);
var restore_slash_QMARK_ = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["Yesterday",null,"Tomorrow",null,"Today",null,"Current time",null], null), null),command)) || ((((!(cljs.core.fn_QMARK_(command_steps)))) && ((((!(cljs.core.contains_QMARK_(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,command_steps)),new cljs.core.Keyword("editor","input","editor/input",-288966104))))) && ((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["Deadline",null,"Template",null,"Scheduled",null,"Date picker",null,"Upload an image",null], null), null),command)))))))));
var G__47806 = id;
var G__47807 = command_steps;
var G__47808 = format;
var G__47809 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"restore?","restore?",1172240305),restore_slash_QMARK_,new cljs.core.Keyword(null,"command","command",-894540724),command], null);
return (frontend.handler.editor.insert_command_BANG_.cljs$core$IFn$_invoke$arity$4 ? frontend.handler.editor.insert_command_BANG_.cljs$core$IFn$_invoke$arity$4(G__47806,G__47807,G__47808,G__47809) : frontend.handler.editor.insert_command_BANG_.call(null,G__47806,G__47807,G__47808,G__47809));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"cp__commands-slash"], null);
if((!(filtered_QMARK_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47803,new cljs.core.Keyword(null,"get-group-name","get-group-name",-160379696),(function (item){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item),(5))){
return cljs.core.last(item);
} else {
return null;
}
}));
} else {
return G__47803;
}
})());
});
var comp__31745__auto__ = (function() { 
var frontend$components$editor$commands__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47810 = cljs.core.first(args__31746__auto__);
var G__47811 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47810,G__47811) : io.factorhouse.hsx.core.obj_get.call(null,G__47810,G__47811));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"commands","commands",1801540185,null),args__31746__auto__),frontend$components$editor$commands,args__31746__auto__,null);
}
};
var frontend$components$editor$commands = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47938__i = 0, G__47938__a = new Array(arguments.length -  0);
while (G__47938__i < G__47938__a.length) {G__47938__a[G__47938__i] = arguments[G__47938__i + 0]; ++G__47938__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47938__a,0,null);
} 
return frontend$components$editor$commands__delegate.call(this,args__31746__auto__);};
frontend$components$editor$commands.cljs$lang$maxFixedArity = 0;
frontend$components$editor$commands.cljs$lang$applyTo = (function (arglist__47939){
var args__31746__auto__ = cljs.core.seq(arglist__47939);
return frontend$components$editor$commands__delegate(args__31746__auto__);
});
frontend$components$editor$commands.cljs$core$IFn$_invoke$arity$variadic = frontend$components$editor$commands__delegate;
return frontend$components$editor$commands;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47812 = comp__31745__auto__;
var G__47813 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47812,G__47813) : io.factorhouse.hsx.core.react_memo.call(null,G__47812,G__47813));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"commands");

return comp__31745__auto__;
})();
frontend.components.editor.page_on_chosen_handler = (function frontend$components$editor$page_on_chosen_handler(embed_QMARK_,input,id,q,pos,format){
if(cljs.core.truth_(embed_QMARK_)){
return (function (chosen_item,_e){
var value = input.value;
var value_SINGLEQUOTE_ = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.util.safe_subs.cljs$core$IFn$_invoke$arity$3(value,(0),q))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.util.safe_subs.cljs$core$IFn$_invoke$arity$2(value,((cljs.core.count(q) + (4)) + pos))));
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(input.id,value_SINGLEQUOTE_);

frontend.state.clear_editor_action_BANG_();

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),chosen_item,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (page){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = page;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var G__47814 = chosen_item;
var G__47815 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),false,new cljs.core.Keyword(null,"reference?","reference?",983881698),true], null);
return (frontend.handler.page._LT_create_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.page._LT_create_BANG_.cljs$core$IFn$_invoke$arity$2(G__47814,G__47815) : frontend.handler.page._LT_create_BANG_.call(null,G__47814,G__47815));
}
})()),(function (page_SINGLEQUOTE_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.get_edit_block()),(function (current_block){
return promesa.protocols._promise(frontend.handler.editor.api_insert_new_block_BANG_(chosen_item,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block),new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),true,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),true,new cljs.core.Keyword(null,"other-attrs","other-attrs",-951608726),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","link","block/link",-1872399993),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page_SINGLEQUOTE_)], null)], null)));
}));
}));
}));
}));
});
} else {
return frontend.handler.page.on_chosen_handler(input,id,pos,format);
}
});
frontend.components.editor.class_alias_QMARK_ = (function frontend$components$editor$class_alias_QMARK_(page){
return new cljs.core.Keyword("block","alias-source-page-class?","block/alias-source-page-class?",-1466843803).cljs$core$IFn$_invoke$arity$1(page);
});
frontend.components.editor.matched_pages_with_new_page = (function frontend$components$editor$matched_pages_with_new_page(partial_matched_pages,db_tag_QMARK_,q,exact_page){
if((!((partial_matched_pages == null)))){
var page_exists_QMARK_ = (function (){var and__5140__auto__ = (new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(exact_page) == null);
if(and__5140__auto__){
if(cljs.core.truth_(db_tag_QMARK_)){
return frontend.util.entity.class_QMARK_(exact_page);
} else {
return frontend.util.entity.page_QMARK_(exact_page);
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_((function (){var or__5142__auto__ = page_exists_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto__ = db_tag_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.components.editor.class_alias_QMARK_(exact_page);
} else {
return and__5140__auto__;
}
}
})())){
return partial_matched_pages;
} else {
if(cljs.core.truth_(db_tag_QMARK_)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((function (){var and__5140__auto__ = frontend.util.entity.internal_page_QMARK_(exact_page);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(exact_page),q);
} else {
return and__5140__auto__;
}
})())?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","title","block/title",710445684),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","new-tag","editor/new-tag",-1492362953)], 0)))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(q))], null)], null)),partial_matched_pages);
} else {
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","title","block/title",710445684),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","new-page","editor/new-page",650508245)], 0)))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(q))], null),partial_matched_pages);
}
}
} else {
return null;
}
});
frontend.components.editor.search_pages = (function frontend$components$editor$search_pages(q,db_tag_QMARK_,set_matched_pages_BANG_,set_exact_page_BANG_){
if(clojure.string.blank_QMARK_(q)){
if(cljs.core.truth_(db_tag_QMARK_)){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_all_classes(frontend.state.get_current_repo(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"except-root-class?","except-root-class?",-345353595),true], null))),(function (classes){
return promesa.protocols._mcat(promesa.protocols._promise((set_exact_page_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_exact_page_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_exact_page_BANG_.call(null,null))),(function (___21901__auto__){
return promesa.protocols._promise((set_matched_pages_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_matched_pages_BANG_.cljs$core$IFn$_invoke$arity$1(classes) : set_matched_pages_BANG_.call(null,classes)));
}));
}));
}));
} else {
return null;
}
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),q,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (block){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(db_tag_QMARK_)?promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.get_matched_classes(q)),(function (classes){
return promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = frontend.util.entity.internal_page_QMARK_(block);
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block),q)) && (((cljs.core.not((logseq.db.built_in_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.built_in_QMARK_.cljs$core$IFn$_invoke$arity$1(block) : logseq.db.built_in_QMARK_.call(null,block)))) && (cljs.core.not(frontend.components.editor.class_alias_QMARK_(block))))));
} else {
return and__5140__auto__;
}
})())?cljs.core.cons(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("block","title","block/title",710445684),q,new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"convert-page-to-tag?","convert-page-to-tag?",-274352532),true,new cljs.core.Keyword(null,"friendly-title","friendly-title",-1692351994),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page.convert","page-to-tag-action","page.convert/page-to-tag-action",1569545872),q], 0))], null),classes):classes));
}));
})):frontend.handler.editor._LT_get_matched_blocks.cljs$core$IFn$_invoke$arity$variadic(q,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nlp-pages?","nlp-pages?",-1155813873),true,new cljs.core.Keyword(null,"built-in?","built-in?",2078421512),true,new cljs.core.Keyword(null,"page-only?","page-only?",654695800),false], null)], 0)))),(function (result){
return promesa.protocols._mcat(promesa.protocols._promise((set_exact_page_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_exact_page_BANG_.cljs$core$IFn$_invoke$arity$1(block) : set_exact_page_BANG_.call(null,block))),(function (___21901__auto__){
return promesa.protocols._promise((set_matched_pages_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_matched_pages_BANG_.cljs$core$IFn$_invoke$arity$1(result) : set_matched_pages_BANG_.call(null,result)));
}));
}));
}));
}));
}
});
frontend.components.editor.page_search_aux = (function (){var render_fn__31744__auto__ = (function frontend$components$editor$page_search_aux(id,format,embed_QMARK_,db_tag_QMARK_,q,input,pos){
var q__$1 = clojure.string.trim(q);
var vec__47816 = logseq.shui.hooks.use_state(null);
var matched_pages = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47816,(0),null);
var set_matched_pages_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47816,(1),null);
var vec__47819 = logseq.shui.hooks.use_state(null);
var exact_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47819,(0),null);
var set_exact_page_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47819,(1),null);
var search_f = (function (){
return frontend.components.editor.search_pages(q__$1,db_tag_QMARK_,set_matched_pages_BANG_,set_exact_page_BANG_);
});
logseq.shui.hooks.use_effect_BANG_(search_f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.shui.hooks.use_debounced_value(q__$1,(150))], null));

var matched_pages_SINGLEQUOTE_ = ((clojure.string.blank_QMARK_(q__$1))?(cljs.core.truth_(db_tag_QMARK_)?matched_pages:cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),frontend.date.nlp_pages_i18n.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"nlp-date?","nlp-date?",1961584384),true], 0)))):(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.seq(matched_pages);
if(and__5140__auto__){
return goog.string.caseInsensitiveStartsWith(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(cljs.core.first(matched_pages)),q__$1);
} else {
return and__5140__auto__;
}
})())?cljs.core.cons(cljs.core.first(matched_pages),frontend.components.editor.matched_pages_with_new_page(cljs.core.rest(matched_pages),db_tag_QMARK_,q__$1,exact_page)):frontend.components.editor.matched_pages_with_new_page(matched_pages,db_tag_QMARK_,q__$1,exact_page)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),frontend.ui.auto_complete(matched_pages_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),frontend.components.editor.page_on_chosen_handler(embed_QMARK_,input,id,q__$1,pos,format),new cljs.core.Keyword(null,"on-enter","on-enter",-928988216),(function (){
return frontend.handler.page.page_not_exists_handler(input);
}),new cljs.core.Keyword(null,"item-render","item-render",253627868),(function (block,_chosen_QMARK_){
return frontend.components.editor.node_render(block,q__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db-tag?","db-tag?",-902027160),db_tag_QMARK_], null));
}),new cljs.core.Keyword(null,"empty-placeholder","empty-placeholder",-68202085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-gray-500.text-sm.px-4.py-2","div.text-gray-500.text-sm.px-4.py-2",1407624634),(cljs.core.truth_(db_tag_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","search-for-tag","editor/search-for-tag",-643842103)], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","search-for-node","editor/search-for-node",-322045345)], 0)))], null),new cljs.core.Keyword(null,"class","class",-2030961996),"black"], null)),(cljs.core.truth_((function (){var and__5140__auto__ = db_tag_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (((!(clojure.string.blank_QMARK_(q__$1)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("page",clojure.string.lower_case(q__$1))));
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.px-1.opacity-50.text-sm.flex.flex-row.items-center.gap-2","p.px-1.opacity-50.text-sm.flex.flex-row.items-center.gap-2",150351777),logseq.shui.ui.shortcut("mod+enter"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","display-tag-inline-hint","editor/display-tag-inline-hint",1023743904)], 0))], null)], null):null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$editor$page_search_aux__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47822 = cljs.core.first(args__31746__auto__);
var G__47823 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47822,G__47823) : io.factorhouse.hsx.core.obj_get.call(null,G__47822,G__47823));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"page-search-aux","page-search-aux",-1398273781,null),args__31746__auto__),frontend$components$editor$page_search_aux,args__31746__auto__,null);
}
};
var frontend$components$editor$page_search_aux = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47940__i = 0, G__47940__a = new Array(arguments.length -  0);
while (G__47940__i < G__47940__a.length) {G__47940__a[G__47940__i] = arguments[G__47940__i + 0]; ++G__47940__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47940__a,0,null);
} 
return frontend$components$editor$page_search_aux__delegate.call(this,args__31746__auto__);};
frontend$components$editor$page_search_aux.cljs$lang$maxFixedArity = 0;
frontend$components$editor$page_search_aux.cljs$lang$applyTo = (function (arglist__47941){
var args__31746__auto__ = cljs.core.seq(arglist__47941);
return frontend$components$editor$page_search_aux__delegate(args__31746__auto__);
});
frontend$components$editor$page_search_aux.cljs$core$IFn$_invoke$arity$variadic = frontend$components$editor$page_search_aux__delegate;
return frontend$components$editor$page_search_aux;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47824 = comp__31745__auto__;
var G__47825 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47824,G__47825) : io.factorhouse.hsx.core.react_memo.call(null,G__47824,G__47825));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"page-search-aux");

return comp__31745__auto__;
})();
/**
 * Page or tag searching popup
 */
frontend.components.editor.page_search = (function (){var render_fn__31744__auto__ = (function frontend$components$editor$page_search(id,format){
var pos = logseq.shui.hooks.use_memo(frontend.state.get_editor_last_pos,cljs.core.PersistentVector.EMPTY);
var action = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","action","editor/action",449993861)], null));
var embed_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.commands._STAR_current_command),"Page embed");
var tag_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,new cljs.core.Keyword(null,"page-search-hashtag","page-search-hashtag",1121040573));
var db_tag_QMARK_ = tag_QMARK_;
var input = goog.dom.getElement(id);
var edit_content = frontend.components.editor.use_current_edit_content();
logseq.shui.hooks.use_effect_BANG_((function (){
return (function (){
return cljs.core.reset_BANG_(frontend.commands._STAR_current_command,null);
});
}),cljs.core.PersistentVector.EMPTY);

if(cljs.core.truth_(input)){
var current_pos = frontend.util.cursor.pos(input);
var q = (function (){var or__5142__auto__ = frontend.handler.editor.get_selected_text();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,new cljs.core.Keyword(null,"page-search-hashtag","page-search-hashtag",1121040573)))?logseq.common.util.safe_subs.cljs$core$IFn$_invoke$arity$3(edit_content,pos,current_pos):null);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = (((cljs.core.count(edit_content) > current_pos))?logseq.common.util.safe_subs.cljs$core$IFn$_invoke$arity$3(edit_content,pos,current_pos):null);
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return "";
}
}
}
})();
return frontend.components.editor.page_search_aux(id,format,embed_QMARK_,db_tag_QMARK_,q,input,pos);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$editor$page_search__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47826 = cljs.core.first(args__31746__auto__);
var G__47827 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47826,G__47827) : io.factorhouse.hsx.core.obj_get.call(null,G__47826,G__47827));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"page-search","page-search",-811510489,null),args__31746__auto__),frontend$components$editor$page_search,args__31746__auto__,null);
}
};
var frontend$components$editor$page_search = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47942__i = 0, G__47942__a = new Array(arguments.length -  0);
while (G__47942__i < G__47942__a.length) {G__47942__a[G__47942__i] = arguments[G__47942__i + 0]; ++G__47942__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47942__a,0,null);
} 
return frontend$components$editor$page_search__delegate.call(this,args__31746__auto__);};
frontend$components$editor$page_search.cljs$lang$maxFixedArity = 0;
frontend$components$editor$page_search.cljs$lang$applyTo = (function (arglist__47943){
var args__31746__auto__ = cljs.core.seq(arglist__47943);
return frontend$components$editor$page_search__delegate(args__31746__auto__);
});
frontend$components$editor$page_search.cljs$core$IFn$_invoke$arity$variadic = frontend$components$editor$page_search__delegate;
return frontend$components$editor$page_search;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47828 = comp__31745__auto__;
var G__47829 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47828,G__47829) : io.factorhouse.hsx.core.react_memo.call(null,G__47828,G__47829));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"page-search");

return comp__31745__auto__;
})();
frontend.components.editor.search_blocks_BANG_ = (function frontend$components$editor$search_blocks_BANG_(q,result){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(((clojure.string.blank_QMARK_(q))?null:frontend.handler.editor._LT_get_matched_blocks(q))),(function (matched_blocks){
return promesa.protocols._promise(cljs.core.reset_BANG_(result,matched_blocks));
}));
}));
});
frontend.components.editor.block_on_chosen_handler = (function frontend$components$editor$block_on_chosen_handler(embed_QMARK_,input,id,q,format,selected_text){
if(cljs.core.truth_(embed_QMARK_)){
return (function (chosen_item){
var pos = frontend.state.get_editor_last_pos();
var value = input.value;
var value_SINGLEQUOTE_ = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.util.safe_subs.cljs$core$IFn$_invoke$arity$3(value,(0),q))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.util.safe_subs.cljs$core$IFn$_invoke$arity$2(value,((cljs.core.count(q) + (4)) + pos))));
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(input.id,value_SINGLEQUOTE_);

frontend.state.clear_editor_action_BANG_();

var current_block = frontend.state.get_edit_block();
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.api_insert_new_block_BANG_("",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block),new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),true,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),true,new cljs.core.Keyword(null,"other-attrs","other-attrs",-951608726),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","link","block/link",-1872399993),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(chosen_item)], null)], null))),(function (___21901__auto__){
return promesa.protocols._promise(frontend.state.clear_edit_BANG_());
}));
}));
});
} else {
return frontend.handler.editor.block_on_chosen_handler(id,q,format,selected_text);
}
});
frontend.components.editor.block_search_auto_complete = (function (){var render_fn__31744__auto__ = (function frontend$components$editor$block_search_auto_complete(_edit_block,input,id,q,format,selected_text){
var result_STAR_ = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}),cljs.core.PersistentVector.EMPTY);
var vec__47830 = logseq.shui.hooks.use_memo((function (){
return frontend.util.cancelable_debounce(frontend.components.editor.search_blocks_BANG_,(150));
}),cljs.core.PersistentVector.EMPTY);
var debounced_search = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47830,(0),null);
var stop_search_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47830,(1),null);
var vec__47833 = logseq.shui.hooks.use_atom(result_STAR_);
var result_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47833,(0),null);
logseq.shui.hooks.use_effect_BANG_((function (){
if(clojure.string.blank_QMARK_(q)){
return cljs.core.reset_BANG_(result_STAR_,null);
} else {
return (debounced_search.cljs$core$IFn$_invoke$arity$2 ? debounced_search.cljs$core$IFn$_invoke$arity$2(q,result_STAR_) : debounced_search.call(null,q,result_STAR_));
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [q], null));

logseq.shui.hooks.use_effect_BANG_((function (){
return stop_search_BANG_;
}),cljs.core.PersistentVector.EMPTY);

var result = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (b){
return (new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b) == null);
}),result_value);
var embed_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.commands._STAR_current_command),"Block embed");
var chosen_handler = frontend.components.editor.block_on_chosen_handler(embed_QMARK_,input,id,q,format,selected_text);
var non_exist_block_handler = frontend.handler.editor.block_non_exist_handler(input);
return frontend.ui.auto_complete(result,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),chosen_handler,new cljs.core.Keyword(null,"on-enter","on-enter",-928988216),non_exist_block_handler,new cljs.core.Keyword(null,"empty-placeholder","empty-placeholder",-68202085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-gray-500.text-sm.px-4.py-2","div.text-gray-500.text-sm.px-4.py-2",1407624634),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","block-search","editor/block-search",-2131454160)], 0))], null),new cljs.core.Keyword(null,"item-render","item-render",253627868),(function (block){
return frontend.components.editor.node_render(block,q,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db-tag?","db-tag?",-902027160),false], null));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"ac-block-search"], null));
});
var comp__31745__auto__ = (function() { 
var frontend$components$editor$block_search_auto_complete__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47836 = cljs.core.first(args__31746__auto__);
var G__47837 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47836,G__47837) : io.factorhouse.hsx.core.obj_get.call(null,G__47836,G__47837));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"block-search-auto-complete","block-search-auto-complete",1146034656,null),args__31746__auto__),frontend$components$editor$block_search_auto_complete,args__31746__auto__,null);
}
};
var frontend$components$editor$block_search_auto_complete = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47944__i = 0, G__47944__a = new Array(arguments.length -  0);
while (G__47944__i < G__47944__a.length) {G__47944__a[G__47944__i] = arguments[G__47944__i + 0]; ++G__47944__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47944__a,0,null);
} 
return frontend$components$editor$block_search_auto_complete__delegate.call(this,args__31746__auto__);};
frontend$components$editor$block_search_auto_complete.cljs$lang$maxFixedArity = 0;
frontend$components$editor$block_search_auto_complete.cljs$lang$applyTo = (function (arglist__47945){
var args__31746__auto__ = cljs.core.seq(arglist__47945);
return frontend$components$editor$block_search_auto_complete__delegate(args__31746__auto__);
});
frontend$components$editor$block_search_auto_complete.cljs$core$IFn$_invoke$arity$variadic = frontend$components$editor$block_search_auto_complete__delegate;
return frontend$components$editor$block_search_auto_complete;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47838 = comp__31745__auto__;
var G__47839 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47838,G__47839) : io.factorhouse.hsx.core.react_memo.call(null,G__47838,G__47839));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"block-search-auto-complete");

return comp__31745__auto__;
})();
frontend.components.editor.block_search = (function (){var render_fn__31744__auto__ = (function frontend$components$editor$block_search(id,_format){
logseq.shui.hooks.use_effect_BANG_((function (){
return (function (){
cljs.core.reset_BANG_(frontend.commands._STAR_current_command,null);

return frontend.state.clear_search_result_BANG_();
});
}),cljs.core.PersistentVector.EMPTY);

var vec__47840 = logseq.shui.hooks.use_atom(frontend.commands._STAR_current_command);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47840,(0),null);
var pos = frontend.state.get_editor_last_pos();
var input = goog.dom.getElement(id);
var format = _format;
var current_pos = frontend.util.cursor.pos(input);
var edit_content = frontend.components.editor.use_current_edit_content();
var edit_block = frontend.state.get_edit_block();
var selected_text = frontend.handler.editor.get_selected_text();
var q = (function (){var or__5142__auto__ = selected_text;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if((cljs.core.count(edit_content) >= current_pos)){
return logseq.common.util.safe_subs.cljs$core$IFn$_invoke$arity$3(edit_content,pos,current_pos);
} else {
return null;
}
}
})();
if(cljs.core.truth_(input)){
var embed_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,"Block embed");
var page = ((embed_QMARK_)?logseq.common.util.page_ref.get_page_name(edit_content):null);
var embed_block_id = (cljs.core.truth_((function (){var and__5140__auto__ = embed_QMARK_;
if(and__5140__auto__){
var and__5140__auto____$1 = page;
if(cljs.core.truth_(and__5140__auto____$1)){
return logseq.common.util.uuid_string_QMARK_(page);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?cljs.core.uuid(page):null);
if(cljs.core.truth_(embed_block_id)){
var f = frontend.components.editor.block_on_chosen_handler(true,input,id,q,format,null);
var repo = frontend.state.get_current_repo();
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,embed_block_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (block){
return promesa.protocols._promise((cljs.core.truth_(block)?f(block):null));
}));
}));
} else {
return frontend.components.editor.block_search_auto_complete(edit_block,input,id,q,format,selected_text);
}
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$editor$block_search__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47843 = cljs.core.first(args__31746__auto__);
var G__47844 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47843,G__47844) : io.factorhouse.hsx.core.obj_get.call(null,G__47843,G__47844));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"block-search","block-search",743014274,null),args__31746__auto__),frontend$components$editor$block_search,args__31746__auto__,null);
}
};
var frontend$components$editor$block_search = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47946__i = 0, G__47946__a = new Array(arguments.length -  0);
while (G__47946__i < G__47946__a.length) {G__47946__a[G__47946__i] = arguments[G__47946__i + 0]; ++G__47946__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47946__a,0,null);
} 
return frontend$components$editor$block_search__delegate.call(this,args__31746__auto__);};
frontend$components$editor$block_search.cljs$lang$maxFixedArity = 0;
frontend$components$editor$block_search.cljs$lang$applyTo = (function (arglist__47947){
var args__31746__auto__ = cljs.core.seq(arglist__47947);
return frontend$components$editor$block_search__delegate(args__31746__auto__);
});
frontend$components$editor$block_search.cljs$core$IFn$_invoke$arity$variadic = frontend$components$editor$block_search__delegate;
return frontend$components$editor$block_search;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47845 = comp__31745__auto__;
var G__47846 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47845,G__47846) : io.factorhouse.hsx.core.react_memo.call(null,G__47845,G__47846));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"block-search");

return comp__31745__auto__;
})();
frontend.components.editor.template_search_aux = (function (){var render_fn__31744__auto__ = (function frontend$components$editor$template_search_aux(id,q){
var vec__47847 = logseq.shui.hooks.use_state(null);
var matched_templates = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47847,(0),null);
var set_matched_templates_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47847,(1),null);
logseq.shui.hooks.use_effect_BANG_((function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor._LT_get_matched_templates(q)),(function (result){
return promesa.protocols._promise((function (){var G__47850 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","title","block/title",710445684),result);
return (set_matched_templates_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_matched_templates_BANG_.cljs$core$IFn$_invoke$arity$1(G__47850) : set_matched_templates_BANG_.call(null,G__47850));
})());
}));
}));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [q], null));

return frontend.ui.auto_complete(matched_templates,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),frontend.handler.editor.template_on_chosen_handler(id),new cljs.core.Keyword(null,"on-enter","on-enter",-928988216),(function (_state){
return frontend.state.clear_editor_action_BANG_();
}),new cljs.core.Keyword(null,"empty-placeholder","empty-placeholder",-68202085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-gray-500.px-4.py-2.text-sm","div.text-gray-500.px-4.py-2.text-sm",1030522825),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","search-template-placeholder","editor/search-template-placeholder",-1291861462)], 0))], null),new cljs.core.Keyword(null,"item-render","item-render",253627868),(function (template){
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(template);
}),new cljs.core.Keyword(null,"class","class",-2030961996),"black"], null));
});
var comp__31745__auto__ = (function() { 
var frontend$components$editor$template_search_aux__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47851 = cljs.core.first(args__31746__auto__);
var G__47852 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47851,G__47852) : io.factorhouse.hsx.core.obj_get.call(null,G__47851,G__47852));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"template-search-aux","template-search-aux",1691415540,null),args__31746__auto__),frontend$components$editor$template_search_aux,args__31746__auto__,null);
}
};
var frontend$components$editor$template_search_aux = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47948__i = 0, G__47948__a = new Array(arguments.length -  0);
while (G__47948__i < G__47948__a.length) {G__47948__a[G__47948__i] = arguments[G__47948__i + 0]; ++G__47948__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47948__a,0,null);
} 
return frontend$components$editor$template_search_aux__delegate.call(this,args__31746__auto__);};
frontend$components$editor$template_search_aux.cljs$lang$maxFixedArity = 0;
frontend$components$editor$template_search_aux.cljs$lang$applyTo = (function (arglist__47949){
var args__31746__auto__ = cljs.core.seq(arglist__47949);
return frontend$components$editor$template_search_aux__delegate(args__31746__auto__);
});
frontend$components$editor$template_search_aux.cljs$core$IFn$_invoke$arity$variadic = frontend$components$editor$template_search_aux__delegate;
return frontend$components$editor$template_search_aux;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47853 = comp__31745__auto__;
var G__47854 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47853,G__47854) : io.factorhouse.hsx.core.react_memo.call(null,G__47853,G__47854));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"template-search-aux");

return comp__31745__auto__;
})();
frontend.components.editor.template_search = (function (){var render_fn__31744__auto__ = (function frontend$components$editor$template_search(id,_format){
var pos = logseq.shui.hooks.use_memo(frontend.state.get_editor_last_pos,cljs.core.PersistentVector.EMPTY);
var input = goog.dom.getElement(id);
var edit_content = frontend.components.editor.use_current_edit_content();
if(cljs.core.truth_(input)){
var current_pos = frontend.util.cursor.pos(input);
var q = (function (){var or__5142__auto__ = (((cljs.core.count(edit_content) >= current_pos))?logseq.common.util.safe_subs.cljs$core$IFn$_invoke$arity$3(edit_content,pos,current_pos):null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})();
return frontend.components.editor.template_search_aux(id,q);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$editor$template_search__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47855 = cljs.core.first(args__31746__auto__);
var G__47856 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47855,G__47856) : io.factorhouse.hsx.core.obj_get.call(null,G__47855,G__47856));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"template-search","template-search",-221401361,null),args__31746__auto__),frontend$components$editor$template_search,args__31746__auto__,null);
}
};
var frontend$components$editor$template_search = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47950__i = 0, G__47950__a = new Array(arguments.length -  0);
while (G__47950__i < G__47950__a.length) {G__47950__a[G__47950__i] = arguments[G__47950__i + 0]; ++G__47950__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47950__a,0,null);
} 
return frontend$components$editor$template_search__delegate.call(this,args__31746__auto__);};
frontend$components$editor$template_search.cljs$lang$maxFixedArity = 0;
frontend$components$editor$template_search.cljs$lang$applyTo = (function (arglist__47951){
var args__31746__auto__ = cljs.core.seq(arglist__47951);
return frontend$components$editor$template_search__delegate(args__31746__auto__);
});
frontend$components$editor$template_search.cljs$core$IFn$_invoke$arity$variadic = frontend$components$editor$template_search__delegate;
return frontend$components$editor$template_search;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47857 = comp__31745__auto__;
var G__47858 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47857,G__47858) : io.factorhouse.hsx.core.react_memo.call(null,G__47857,G__47858));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"template-search");

return comp__31745__auto__;
})();
frontend.components.editor.code_block_mode_keyup_listener = (function (){var render_fn__31744__auto__ = (function frontend$components$editor$code_block_mode_keyup_listener(_q,_edit_content,last_pos,current_pos){
logseq.shui.hooks.use_effect_BANG_((function (){
if((current_pos < last_pos)){
return frontend.state.clear_editor_action_BANG_();
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_pos,current_pos], null));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$editor$code_block_mode_keyup_listener__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47859 = cljs.core.first(args__31746__auto__);
var G__47860 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47859,G__47860) : io.factorhouse.hsx.core.obj_get.call(null,G__47859,G__47860));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"code-block-mode-keyup-listener","code-block-mode-keyup-listener",-809666832,null),args__31746__auto__),frontend$components$editor$code_block_mode_keyup_listener,args__31746__auto__,null);
}
};
var frontend$components$editor$code_block_mode_keyup_listener = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47952__i = 0, G__47952__a = new Array(arguments.length -  0);
while (G__47952__i < G__47952__a.length) {G__47952__a[G__47952__i] = arguments[G__47952__i + 0]; ++G__47952__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47952__a,0,null);
} 
return frontend$components$editor$code_block_mode_keyup_listener__delegate.call(this,args__31746__auto__);};
frontend$components$editor$code_block_mode_keyup_listener.cljs$lang$maxFixedArity = 0;
frontend$components$editor$code_block_mode_keyup_listener.cljs$lang$applyTo = (function (arglist__47953){
var args__31746__auto__ = cljs.core.seq(arglist__47953);
return frontend$components$editor$code_block_mode_keyup_listener__delegate(args__31746__auto__);
});
frontend$components$editor$code_block_mode_keyup_listener.cljs$core$IFn$_invoke$arity$variadic = frontend$components$editor$code_block_mode_keyup_listener__delegate;
return frontend$components$editor$code_block_mode_keyup_listener;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47861 = comp__31745__auto__;
var G__47862 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47861,G__47862) : io.factorhouse.hsx.core.react_memo.call(null,G__47861,G__47862));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"code-block-mode-keyup-listener");

return comp__31745__auto__;
})();
frontend.components.editor.code_block_mode_picker = (function (){var render_fn__31744__auto__ = (function frontend$components$editor$code_block_mode_picker(id,format){
var pos = logseq.shui.hooks.use_memo(frontend.state.get_editor_last_pos,cljs.core.PersistentVector.EMPTY);
var edit_content = (function (){var or__5142__auto__ = frontend.components.editor.use_current_edit_content();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})();
var modes = (function (){var G__47864 = window.CodeMirror;
var G__47864__$1 = (((G__47864 == null))?null:G__47864.modes);
var G__47864__$2 = (((G__47864__$1 == null))?null:Object.keys(G__47864__$1));
var G__47864__$3 = (((G__47864__$2 == null))?null:cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(G__47864__$2));
if((G__47864__$3 == null)){
return null;
} else {
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__47863_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("null",p1__47863_SHARP_);
}),G__47864__$3);
}
})();
var input = goog.dom.getElement(id);
if(cljs.core.truth_((function (){var and__5140__auto__ = modes;
if(cljs.core.truth_(and__5140__auto__)){
return input;
} else {
return and__5140__auto__;
}
})())){
var current_pos = frontend.util.cursor.pos(input);
var q = (function (){var or__5142__auto__ = frontend.handler.editor.get_selected_text();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = logseq.common.util.safe_subs.cljs$core$IFn$_invoke$arity$3(edit_content,pos,current_pos);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return "";
}
}
})();
var matched = cljs.core.seq((frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$2 ? frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$2(modes,q) : frontend.search.fuzzy_search.call(null,modes,q)));
var matched__$1 = (function (){var or__5142__auto__ = matched;
if(or__5142__auto__){
return or__5142__auto__;
} else {
if(clojure.string.blank_QMARK_(q)){
return modes;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [q], null);
}
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.components.editor.code_block_mode_keyup_listener(q,edit_content,pos,current_pos),frontend.ui.auto_complete(matched__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (chosen,_click_QMARK_){
frontend.state.clear_editor_action_BANG_();

var prefix = (""+"```"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(chosen));
var last_pattern = (""+"```"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(q));
var G__47865_47954 = id;
var G__47866_47955 = prefix;
var G__47867_47956 = format;
var G__47868_47957 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),last_pattern], null);
(frontend.handler.editor.insert_command_BANG_.cljs$core$IFn$_invoke$arity$4 ? frontend.handler.editor.insert_command_BANG_.cljs$core$IFn$_invoke$arity$4(G__47865_47954,G__47866_47955,G__47867_47956,G__47868_47957) : frontend.handler.editor.insert_command_BANG_.call(null,G__47865_47954,G__47866_47955,G__47867_47956,G__47868_47957));

return promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.state.get_current_repo(),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block()),input.value),(function (){
return frontend.commands.handle_step.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("codemirror","focus","codemirror/focus",-19393885)], null));
}));
}),new cljs.core.Keyword(null,"on-enter","on-enter",-928988216),(function (){
frontend.state.clear_editor_action_BANG_();

return frontend.commands.handle_step.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("codemirror","focus","codemirror/focus",-19393885)], null));
}),new cljs.core.Keyword(null,"item-render","item-render",253627868),(function (mode,_chosen_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),mode], null);
}),new cljs.core.Keyword(null,"class","class",-2030961996),"code-block-mode-picker"], null))], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$editor$code_block_mode_picker__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47869 = cljs.core.first(args__31746__auto__);
var G__47870 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47869,G__47870) : io.factorhouse.hsx.core.obj_get.call(null,G__47869,G__47870));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"code-block-mode-picker","code-block-mode-picker",-112967052,null),args__31746__auto__),frontend$components$editor$code_block_mode_picker,args__31746__auto__,null);
}
};
var frontend$components$editor$code_block_mode_picker = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47958__i = 0, G__47958__a = new Array(arguments.length -  0);
while (G__47958__i < G__47958__a.length) {G__47958__a[G__47958__i] = arguments[G__47958__i + 0]; ++G__47958__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47958__a,0,null);
} 
return frontend$components$editor$code_block_mode_picker__delegate.call(this,args__31746__auto__);};
frontend$components$editor$code_block_mode_picker.cljs$lang$maxFixedArity = 0;
frontend$components$editor$code_block_mode_picker.cljs$lang$applyTo = (function (arglist__47959){
var args__31746__auto__ = cljs.core.seq(arglist__47959);
return frontend$components$editor$code_block_mode_picker__delegate(args__31746__auto__);
});
frontend$components$editor$code_block_mode_picker.cljs$core$IFn$_invoke$arity$variadic = frontend$components$editor$code_block_mode_picker__delegate;
return frontend$components$editor$code_block_mode_picker;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47871 = comp__31745__auto__;
var G__47872 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47871,G__47872) : io.factorhouse.hsx.core.react_memo.call(null,G__47871,G__47872));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"code-block-mode-picker");

return comp__31745__auto__;
})();
frontend.components.editor.editor_input = (function (){var render_fn__31744__auto__ = (function frontend$components$editor$editor_input(_id,on_submit,_on_cancel){
var input_value = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}),cljs.core.PersistentVector.EMPTY);
var latest_args_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
logseq.shui.hooks.set_ref_BANG_(latest_args_ref,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_id,on_submit,_on_cancel], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var on_key_down = (function (e){
var G__47873 = e.keyCode;
switch (G__47873) {
case (13):
var vec__47874 = logseq.shui.hooks.deref(latest_args_ref);
var _id__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47874,(0),null);
var on_submit__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47874,(1),null);
var input_option = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(frontend.state.get_editor_show_input());
if(cljs.core.seq(cljs.core.deref(input_value))){
frontend.util.stop(e);

var command_47961 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(cljs.core.first(input_option));
var G__47877_47962 = command_47961;
var G__47878_47963 = cljs.core.deref(input_value);
(on_submit__$1.cljs$core$IFn$_invoke$arity$2 ? on_submit__$1.cljs$core$IFn$_invoke$arity$2(G__47877_47962,G__47878_47963) : on_submit__$1.call(null,G__47877_47962,G__47878_47963));

return cljs.core.reset_BANG_(input_value,null);
} else {
return null;
}

break;
case (27):
var vec__47879 = logseq.shui.hooks.deref(latest_args_ref);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47879,(0),null);
var _on_submit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47879,(1),null);
var on_cancel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47879,(2),null);
return (on_cancel.cljs$core$IFn$_invoke$arity$1 ? on_cancel.cljs$core$IFn$_invoke$arity$1(id) : on_cancel.call(null,id));

break;
default:
return null;

}
});
window.addEventListener("keydown",on_key_down);

return (function (){
return window.removeEventListener("keydown",on_key_down);
});
}),cljs.core.PersistentVector.EMPTY);

var temp__5825__auto__ = frontend.state.get_editor_action_data();
if(cljs.core.truth_(temp__5825__auto__)){
var action_data = temp__5825__auto__;
var map__47882 = action_data;
var map__47882__$1 = cljs.core.__destructure_map(map__47882);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47882__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47882__$1,new cljs.core.Keyword(null,"options","options",99638489));
var input_value__$1 = input_value;
if(cljs.core.seq(options)){
var command = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(cljs.core.first(options));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-2.rounded-md.flex.flex-col.gap-2","div.p-2.rounded-md.flex.flex-col.gap-2",877557921),(function (){var iter__5628__auto__ = (function frontend$components$editor$editor_input_$_iter__47883(s__47884){
return (new cljs.core.LazySeq(null,(function (){
var s__47884__$1 = s__47884;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__47884__$1);
if(temp__5825__auto____$1){
var s__47884__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47884__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__47884__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__47886 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__47885 = (0);
while(true){
if((i__47885 < size__5627__auto__)){
var map__47887 = cljs.core._nth(c__5626__auto__,i__47885);
var map__47887__$1 = cljs.core.__destructure_map(map__47887);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47887__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47887__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47887__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var auto_focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47887__$1,new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231));
cljs.core.chunk_append(b__47886,(function (){var G__47888 = (function (){var G__47889 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"modal-input-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(id))),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__5142__auto__ = type;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "text";
}
})(),new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),((frontend.util.chrome_QMARK_())?"chrome-off":"off"),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__47885,map__47887,map__47887__$1,id,placeholder,type,auto_focus,c__5626__auto__,size__5627__auto__,b__47886,s__47884__$2,temp__5825__auto____$1,command,map__47882,map__47882__$1,pos,options,input_value__$1,action_data,temp__5825__auto__,input_value,latest_args_ref){
return (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(input_value__$1,cljs.core.assoc,id,frontend.util.evalue(e));
});})(i__47885,map__47887,map__47887__$1,id,placeholder,type,auto_focus,c__5626__auto__,size__5627__auto__,b__47886,s__47884__$2,temp__5825__auto____$1,command,map__47882,map__47882__$1,pos,options,input_value__$1,action_data,temp__5825__auto__,input_value,latest_args_ref))
], null);
var G__47889__$1 = (cljs.core.truth_(placeholder)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47889,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder):G__47889);
if(cljs.core.truth_(auto_focus)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47889__$1,new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true);
} else {
return G__47889__$1;
}
})();
return (logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1(G__47888) : logseq.shui.ui.input.call(null,G__47888));
})());

var G__47964 = (i__47885 + (1));
i__47885 = G__47964;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47886),frontend$components$editor$editor_input_$_iter__47883(cljs.core.chunk_rest(s__47884__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47886),null);
}
} else {
var map__47890 = cljs.core.first(s__47884__$2);
var map__47890__$1 = cljs.core.__destructure_map(map__47890);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47890__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47890__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47890__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var auto_focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47890__$1,new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231));
return cljs.core.cons((function (){var G__47891 = (function (){var G__47892 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"modal-input-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(id))),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__5142__auto__ = type;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "text";
}
})(),new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),((frontend.util.chrome_QMARK_())?"chrome-off":"off"),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__47890,map__47890__$1,id,placeholder,type,auto_focus,s__47884__$2,temp__5825__auto____$1,command,map__47882,map__47882__$1,pos,options,input_value__$1,action_data,temp__5825__auto__,input_value,latest_args_ref){
return (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(input_value__$1,cljs.core.assoc,id,frontend.util.evalue(e));
});})(map__47890,map__47890__$1,id,placeholder,type,auto_focus,s__47884__$2,temp__5825__auto____$1,command,map__47882,map__47882__$1,pos,options,input_value__$1,action_data,temp__5825__auto__,input_value,latest_args_ref))
], null);
var G__47892__$1 = (cljs.core.truth_(placeholder)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47892,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder):G__47892);
if(cljs.core.truth_(auto_focus)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47892__$1,new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true);
} else {
return G__47892__$1;
}
})();
return (logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1(G__47891) : logseq.shui.ui.input.call(null,G__47891));
})(),frontend$components$editor$editor_input_$_iter__47883(cljs.core.rest(s__47884__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(options);
})(),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","submit","ui/submit",-49310281)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

var G__47893 = command;
var G__47894 = cljs.core.deref(input_value__$1);
var G__47895 = pos;
return (on_submit.cljs$core$IFn$_invoke$arity$3 ? on_submit.cljs$core$IFn$_invoke$arity$3(G__47893,G__47894,G__47895) : on_submit.call(null,G__47893,G__47894,G__47895));
})], 0))], null);
} else {
return null;
}
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$editor$editor_input__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47896 = cljs.core.first(args__31746__auto__);
var G__47897 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47896,G__47897) : io.factorhouse.hsx.core.obj_get.call(null,G__47896,G__47897));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"editor-input","editor-input",-1352533659,null),args__31746__auto__),frontend$components$editor$editor_input,args__31746__auto__,null);
}
};
var frontend$components$editor$editor_input = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47965__i = 0, G__47965__a = new Array(arguments.length -  0);
while (G__47965__i < G__47965__a.length) {G__47965__a[G__47965__i] = arguments[G__47965__i + 0]; ++G__47965__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47965__a,0,null);
} 
return frontend$components$editor$editor_input__delegate.call(this,args__31746__auto__);};
frontend$components$editor$editor_input.cljs$lang$maxFixedArity = 0;
frontend$components$editor$editor_input.cljs$lang$applyTo = (function (arglist__47966){
var args__31746__auto__ = cljs.core.seq(arglist__47966);
return frontend$components$editor$editor_input__delegate(args__31746__auto__);
});
frontend$components$editor$editor_input.cljs$core$IFn$_invoke$arity$variadic = frontend$components$editor$editor_input__delegate;
return frontend$components$editor$editor_input;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47898 = comp__31745__auto__;
var G__47899 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47898,G__47899) : io.factorhouse.hsx.core.react_memo.call(null,G__47898,G__47899));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"editor-input");

return comp__31745__auto__;
})();
frontend.components.editor.image_uploader = (function (){var render_fn__31744__auto__ = (function frontend$components$editor$image_uploader(id,format){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.image-uploader","div.image-uploader",420034551),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"upload-file",new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var files = e.target.files;
return frontend.handler.editor.assets.upload_asset_BANG_(id,files,format,frontend.handler.editor._STAR_asset_uploading_QMARK_,false);
}),new cljs.core.Keyword(null,"hidden","hidden",-312506092),true], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$editor$image_uploader__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47900 = cljs.core.first(args__31746__auto__);
var G__47901 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47900,G__47901) : io.factorhouse.hsx.core.obj_get.call(null,G__47900,G__47901));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"image-uploader","image-uploader",1904481453,null),args__31746__auto__),frontend$components$editor$image_uploader,args__31746__auto__,null);
}
};
var frontend$components$editor$image_uploader = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47967__i = 0, G__47967__a = new Array(arguments.length -  0);
while (G__47967__i < G__47967__a.length) {G__47967__a[G__47967__i] = arguments[G__47967__i + 0]; ++G__47967__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47967__a,0,null);
} 
return frontend$components$editor$image_uploader__delegate.call(this,args__31746__auto__);};
frontend$components$editor$image_uploader.cljs$lang$maxFixedArity = 0;
frontend$components$editor$image_uploader.cljs$lang$applyTo = (function (arglist__47968){
var args__31746__auto__ = cljs.core.seq(arglist__47968);
return frontend$components$editor$image_uploader__delegate(args__31746__auto__);
});
frontend$components$editor$image_uploader.cljs$core$IFn$_invoke$arity$variadic = frontend$components$editor$image_uploader__delegate;
return frontend$components$editor$image_uploader;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47902 = comp__31745__auto__;
var G__47903 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47902,G__47903) : io.factorhouse.hsx.core.react_memo.call(null,G__47902,G__47903));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"image-uploader");

return comp__31745__auto__;
})();
frontend.components.editor.search_timeout = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
frontend.components.editor.use_key_listeners_BANG_ = (function frontend$components$editor$use_key_listeners_BANG_(component_state,id,format){
return logseq.shui.hooks.use_effect_BANG_((function (){
var input_SINGLEQUOTE_ = goog.dom.getElement(id);
var keydown_handler = frontend.handler.editor.keydown_not_matched_handler(format);
var keyup_handler = frontend.handler.editor.keyup_handler(component_state,input_SINGLEQUOTE_);
var on_key_down = (function (p1__47904_SHARP_){
return keydown_handler(p1__47904_SHARP_,p1__47904_SHARP_.keyCode);
});
var on_key_up = (function (p1__47905_SHARP_){
return keyup_handler(p1__47905_SHARP_,p1__47905_SHARP_.keyCode);
});
window.addEventListener("keydown",on_key_down);

window.addEventListener("keyup",on_key_up);

return (function (){
window.removeEventListener("keydown",on_key_down);

return window.removeEventListener("keyup",on_key_up);
});
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,format], null));
});
/**
 * Get textarea css class according to it's content
 */
frontend.components.editor.get_editor_style_class = (function frontend$components$editor$get_editor_style_class(block,content,format){
var content__$1 = (cljs.core.truth_(content)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)):"");
var heading = frontend.handler.property.util.get_block_property_value(block,new cljs.core.Keyword("logseq.property","heading","logseq.property/heading",1858749415));
var heading__$1 = ((heading === true)?cljs.core.min.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(block) + (1)),(6)):heading);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((content__$1.length > (1000))) || (clojure.string.includes_QMARK_(content__$1,"\n"))))?"multiline-block":"uniline-block"))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__47907 = format;
var G__47907__$1 = (((G__47907 instanceof cljs.core.Keyword))?G__47907.fqn:null);
switch (G__47907__$1) {
case "markdown":
if(cljs.core.truth_(heading__$1)){
return (""+"h"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading__$1));
} else {
if(clojure.string.starts_with_QMARK_(content__$1,"# ")){
return "h1";
} else {
if(clojure.string.starts_with_QMARK_(content__$1,"## ")){
return "h2";
} else {
if(clojure.string.starts_with_QMARK_(content__$1,"### ")){
return "h3";
} else {
if(clojure.string.starts_with_QMARK_(content__$1,"#### ")){
return "h4";
} else {
if(clojure.string.starts_with_QMARK_(content__$1,"##### ")){
return "h5";
} else {
if(clojure.string.starts_with_QMARK_(content__$1,"###### ")){
return "h6";
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = clojure.string.starts_with_QMARK_(content__$1,"---\n");
if(and__5140__auto__){
return content__$1.endsWith("\n---");
} else {
return and__5140__auto__;
}
})())){
return "page-properties";
} else {
return "normal-block";

}
}
}
}
}
}
}
}

break;
default:
if(cljs.core.truth_(heading__$1)){
return (""+"h"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading__$1));
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = clojure.string.starts_with_QMARK_(content__$1,"---\n");
if(and__5140__auto__){
return content__$1.endsWith("\n---");
} else {
return and__5140__auto__;
}
})())){
return "page-properties";
} else {
return "normal-block";

}
}

}
})()));
});
/**
 * Sets the textarea's class (uniline/multiline, heading level) from its
 * current content. Called from the change handler on each keystroke; the box
 * passes the same class as a prop, so a render writes the current class too.
 */
frontend.components.editor.update_heading_class_BANG_ = (function frontend$components$editor$update_heading_class_BANG_(el,block,format,value){
var class_SINGLEQUOTE_ = frontend.components.editor.get_editor_style_class(block,value,format);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(class_SINGLEQUOTE_,el.className)){
return (el.className = class_SINGLEQUOTE_);
} else {
return null;
}
});
/**
 * The hidden mirror of the textarea that the caret-position helpers read.
 * Its spans are built on demand by frontend.util.cursor/build-mock-text!,
 * only when a caret position is needed.
 */
frontend.components.editor.mock_textarea = (function frontend$components$editor$mock_textarea(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mock-text","div.mock-text",1253160035),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0)], null)], null)], null);
});
frontend.components.editor.open_editor_popup_BANG_ = (function frontend$components$editor$open_editor_popup_BANG_(id,content,opts){
var input = frontend.state.get_input();
var line_height = (function (){var or__5142__auto__ = (cljs.core.truth_(input)?(function (){var G__47913 = window.getComputedStyle(input).lineHeight;
var G__47913__$1 = (((G__47913 == null))?null:parseFloat(G__47913));
if((G__47913__$1 == null)){
return null;
} else {
return (G__47913__$1 - (4));
}
})():null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (20);
}
})();
var map__47911 = frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input);
var map__47911__$1 = cljs.core.__destructure_map(map__47911);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47911__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47911__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var rect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47911__$1,new cljs.core.Keyword(null,"rect","rect",-108902628));
var pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((left + new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(rect)) + (-20)),((top + new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(rect)) + line_height)], null);
var map__47912 = opts;
var map__47912__$1 = cljs.core.__destructure_map(map__47912);
var root_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47912__$1,new cljs.core.Keyword(null,"root-props","root-props",-1015460595));
var content_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47912__$1,new cljs.core.Keyword(null,"content-props","content-props",687449284));
var G__47914 = pos;
var G__47915 = content;
var G__47916 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"editor.commands","editor.commands",-1806363459),id),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"root-props","root-props",-1015460595),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onOpenChange","onOpenChange",-675762944),(function (p1__47908_SHARP_){
if(cljs.core.truth_(p1__47908_SHARP_)){
return null;
} else {
return frontend.state.clear_editor_action_BANG_();
}
})], null),root_props], 0)),new cljs.core.Keyword(null,"content-props","content-props",687449284),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onOpenAutoFocus","onOpenAutoFocus",-99363202),(function (p1__47909_SHARP_){
return p1__47909_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"onCloseAutoFocus","onCloseAutoFocus",-349969117),(function (p1__47910_SHARP_){
return p1__47910_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"data-editor-popup-ref","data-editor-popup-ref",2109070097),cljs.core.name(id)], null),content_props], 0)),new cljs.core.Keyword(null,"force-popover?","force-popover?",237318839),true], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"root-props","root-props",-1015460595),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content-props","content-props",687449284)], 0))], 0));
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__47914,G__47915,G__47916) : logseq.shui.ui.popup_show_BANG_.call(null,G__47914,G__47915,G__47916));
});
frontend.components.editor.shui_editor_popups = (function (){var render_fn__31744__auto__ = (function frontend$components$editor$shui_editor_popups(id,format,action,_data){
logseq.shui.hooks.use_effect_BANG_((function (){
var pid = (function (){var G__47918 = action;
var G__47918__$1 = (((G__47918 instanceof cljs.core.Keyword))?G__47918.fqn:null);
switch (G__47918__$1) {
case "commands":
return frontend.components.editor.open_editor_popup_BANG_(new cljs.core.Keyword(null,"commands","commands",161008658),frontend.components.editor.commands(id,format),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"withoutAnimation","withoutAnimation",-1934166132),false], null)], null));

break;
case "block-search":
case "page-search":
case "page-search-hashtag":
return frontend.components.editor.open_editor_popup_BANG_(action,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-search","block-search",-897517253),action))?frontend.components.editor.block_search(id,format):frontend.components.editor.page_search(id,format)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"root-props","root-props",-1015460595),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onOpenChange","onOpenChange",-675762944),(function (p1__47917_SHARP_){
if(cljs.core.truth_(p1__47917_SHARP_)){
return null;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page-search","page-search",1842925280),null,new cljs.core.Keyword(null,"block-search","block-search",-897517253),null,new cljs.core.Keyword(null,"page-search-hashtag","page-search-hashtag",1121040573),null], null), null),frontend.state.get_editor_action())){
return frontend.state.clear_editor_action_BANG_();
} else {
return null;
}
}
})], null)], null));

break;
case "datepicker":
return frontend.components.editor.open_editor_popup_BANG_(new cljs.core.Keyword(null,"datepicker","datepicker",821741450),frontend.components.datepicker.date_picker(id,format),cljs.core.PersistentArrayMap.EMPTY);

break;
case "input":
return frontend.components.editor.open_editor_popup_BANG_(new cljs.core.Keyword(null,"input","input",556931961),frontend.components.editor.editor_input(id,(function (command,m){
return frontend.handler.editor.handle_command_input(command,id,format,m);
}),(function (){
return frontend.handler.editor.handle_command_input_close(id);
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onOpenAutoFocus","onOpenAutoFocus",-99363202),(function (){
return cljs.core.List.EMPTY;
})], null)], null));

break;
case "select-code-block-mode":
return frontend.components.editor.open_editor_popup_BANG_(new cljs.core.Keyword(null,"code-block-mode-picker","code-block-mode-picker",-1753498579),frontend.components.editor.code_block_mode_picker(id,format),cljs.core.PersistentArrayMap.EMPTY);

break;
case "template-search":
return frontend.components.editor.open_editor_popup_BANG_(new cljs.core.Keyword(null,"template-search","template-search",-1861932888),frontend.components.editor.template_search(id,format),cljs.core.PersistentArrayMap.EMPTY);

break;
default:
return false;

}
})();
return (function (){
if(cljs.core.truth_(pid)){
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(pid) : logseq.shui.ui.popup_hide_BANG_.call(null,pid));
} else {
return null;
}
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action], null));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$editor$shui_editor_popups__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47919 = cljs.core.first(args__31746__auto__);
var G__47920 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47919,G__47920) : io.factorhouse.hsx.core.obj_get.call(null,G__47919,G__47920));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"shui-editor-popups","shui-editor-popups",-1879787691,null),args__31746__auto__),frontend$components$editor$shui_editor_popups,args__31746__auto__,null);
}
};
var frontend$components$editor$shui_editor_popups = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47971__i = 0, G__47971__a = new Array(arguments.length -  0);
while (G__47971__i < G__47971__a.length) {G__47971__a[G__47971__i] = arguments[G__47971__i + 0]; ++G__47971__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47971__a,0,null);
} 
return frontend$components$editor$shui_editor_popups__delegate.call(this,args__31746__auto__);};
frontend$components$editor$shui_editor_popups.cljs$lang$maxFixedArity = 0;
frontend$components$editor$shui_editor_popups.cljs$lang$applyTo = (function (arglist__47972){
var args__31746__auto__ = cljs.core.seq(arglist__47972);
return frontend$components$editor$shui_editor_popups__delegate(args__31746__auto__);
});
frontend$components$editor$shui_editor_popups.cljs$core$IFn$_invoke$arity$variadic = frontend$components$editor$shui_editor_popups__delegate;
return frontend$components$editor$shui_editor_popups;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47921 = comp__31745__auto__;
var G__47922 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47921,G__47922) : io.factorhouse.hsx.core.react_memo.call(null,G__47921,G__47922));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"shui-editor-popups");

return comp__31745__auto__;
})();
/**
 * React to atom changes, find and render the correct popup
 */
frontend.components.editor.command_popups = (function (){var render_fn__31744__auto__ = (function frontend$components$editor$command_popups(id,format){
var action = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","action","editor/action",449993861)], null));
return frontend.components.editor.shui_editor_popups(id,format,action,null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$editor$command_popups__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47923 = cljs.core.first(args__31746__auto__);
var G__47924 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47923,G__47924) : io.factorhouse.hsx.core.obj_get.call(null,G__47923,G__47924));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"command-popups","command-popups",1101333758,null),args__31746__auto__),frontend$components$editor$command_popups,args__31746__auto__,null);
}
};
var frontend$components$editor$command_popups = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47973__i = 0, G__47973__a = new Array(arguments.length -  0);
while (G__47973__i < G__47973__a.length) {G__47973__a[G__47973__i] = arguments[G__47973__i + 0]; ++G__47973__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47973__a,0,null);
} 
return frontend$components$editor$command_popups__delegate.call(this,args__31746__auto__);};
frontend$components$editor$command_popups.cljs$lang$maxFixedArity = 0;
frontend$components$editor$command_popups.cljs$lang$applyTo = (function (arglist__47974){
var args__31746__auto__ = cljs.core.seq(arglist__47974);
return frontend$components$editor$command_popups__delegate(args__31746__auto__);
});
frontend$components$editor$command_popups.cljs$core$IFn$_invoke$arity$variadic = frontend$components$editor$command_popups__delegate;
return frontend$components$editor$command_popups;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47925 = comp__31745__auto__;
var G__47926 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47925,G__47926) : io.factorhouse.hsx.core.react_memo.call(null,G__47925,G__47926));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"command-popups");

return comp__31745__auto__;
})();
frontend.components.editor.editor_on_hide = (function frontend$components$editor$editor_on_hide(state,type,e,editing_another_block_QMARK_){
var action = frontend.state.get_editor_action();
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_((function (){var and__5140__auto__ = editing_another_block_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return action;
} else {
return and__5140__auto__;
}
})())){
return frontend.state.clear_editor_action_BANG_();
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"esc","esc",-1671924121));
if(and__5140__auto__){
return frontend.handler.editor.editor_commands_popup_exists_QMARK_();
} else {
return and__5140__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(frontend.state.editor_in_composition_QMARK_())){
return null;
} else {
if(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"page-search","page-search",1842925280),null,new cljs.core.Keyword(null,"template-search","template-search",-1861932888),null,new cljs.core.Keyword(null,"datepicker","datepicker",821741450),null,new cljs.core.Keyword(null,"commands","commands",161008658),null,new cljs.core.Keyword(null,"block-search","block-search",-897517253),null,new cljs.core.Keyword(null,"page-search-hashtag","page-search-hashtag",1121040573),null], null), null),action)) || ((((action instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(action),"editor.action")))))){
if(cljs.core.truth_(e)){
return frontend.util.stop(e);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"input","input",556931961),action)){
return null;
} else {
var select_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"esc","esc",-1671924121));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.escape_editing.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"select?","select?",-1012224063),select_QMARK_,new cljs.core.Keyword(null,"editing-another-block?","editing-another-block?",-1574709757),editing_another_block_QMARK_], null)], 0))),(function (___21901__auto__){
return promesa.protocols._promise((function (){var G__47927 = config;
var G__47927__$1 = (((G__47927 == null))?null:new cljs.core.Keyword(null,"on-escape-editing","on-escape-editing",531842882).cljs$core$IFn$_invoke$arity$1(G__47927));
if((G__47927__$1 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__47927__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.uuid)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"esc","esc",-1671924121))], null));
}
})());
}));
}));

}
}
}
}
}
});
frontend.components.editor.editor_readonly_QMARK_ = (function frontend$components$editor$editor_readonly_QMARK_(block){
return cljs.core.boolean$(new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(block));
});
frontend.components.editor.box = (function (){var render_fn__31744__auto__ = (function frontend$components$editor$box(p__47931,id,config){
var map__47932 = p__47931;
var map__47932__$1 = cljs.core.__destructure_map(map__47932);
var opts = map__47932__$1;
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47932__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47932__$1,new cljs.core.Keyword(null,"block","block",664686210));
var parent_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47932__$1,new cljs.core.Keyword(null,"parent-block","parent-block",-1919487774));
var _STAR_ref = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}),cljs.core.PersistentVector.EMPTY);
var component_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"config","config",994861415),config], null);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.get_state(new cljs.core.Keyword("editor","content","editor/content",-756190443)),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
var heading_class = frontend.components.editor.get_editor_style_class(block,content,format);
var editor_opts = new cljs.core.Keyword(null,"editor-opts","editor-opts",-1306154715).cljs$core$IFn$_invoke$arity$1(config);
var on_change = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"on-change","on-change",-732046149).cljs$core$IFn$_invoke$arity$1(editor_opts);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.handler.editor.editor_on_change_BANG_(block,id,frontend.components.editor.search_timeout);
}
})();
var read_only_QMARK_ = frontend.components.editor.editor_readonly_QMARK_(block);
var _ = frontend.handler.editor.lifecycle.use_did_mount_BANG_(id,config);
var ___$1 = frontend.components.editor.use_key_listeners_BANG_(component_state,id,format);
var ___$2 = logseq.shui.hooks.use_effect_BANG_((function (){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","on-paste?","editor/on-paste?",1852983579),false);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
var ___$3 = logseq.shui.hooks.use_layout_effect_BANG_((function (){
return frontend.state.set_editor_args_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,id,config], null));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),config], null));
var ___$4 = logseq.shui.hooks.use_effect_BANG_((function (){
return (function (){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","raw-mode-block","editor/raw-mode-block",-1788505944),null);
});
}),cljs.core.PersistentVector.EMPTY);
var ___$5 = logseq.shui.hooks.use_hide_on_esc_or_outside(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active?","active?",459499776),true,new cljs.core.Keyword(null,"root-ref","root-ref",1229703250),(function (){
var or__5142__auto__ = cljs.core.deref(_STAR_ref);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return goog.dom.getElement(id);
}
}),new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),(function (e){
var esc_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",e.type);
var target = e.target;
var block_container = ((esc_QMARK_)?null:target.closest(".ls-block"));
var editing_another_block_QMARK_ = (function (){var and__5140__auto__ = block_container;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = (!(dommy.core.has_class_QMARK_(block_container,"block-add-button")));
if(and__5140__auto____$1){
return goog.dom.contains(block_container,target);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
return frontend.components.editor.editor_on_hide(component_state,((esc_QMARK_)?new cljs.core.Keyword(null,"esc","esc",-1671924121):new cljs.core.Keyword(null,"click","click",1912301393)),e,editing_another_block_QMARK_);
})], null));
var opts__$1 = (function (){var G__47933 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"auto-capitalize","auto-capitalize",352725029),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"on-paste","on-paste",-50859856),new cljs.core.Keyword(null,"minRows","minRows",-1979722096),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),new cljs.core.Keyword(null,"auto-correct","auto-correct",555552927)],[(cljs.core.truth_(frontend.util.mobile_QMARK_())?"sentences":"off"),(function (p1__47928_SHARP_){
return cljs.core.reset_BANG_(_STAR_ref,p1__47928_SHARP_);
}),(function (){var or__5142__auto__ = content;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})(),frontend.handler.editor.editor_on_click_BANG_(id),frontend.handler.paste.editor_on_paste_BANG_(id),((frontend.state.enable_grammarly_QMARK_())?(2):(1)),id,heading_class,true,(function (e){
var temp__5825__auto___47975 = e.target;
if(cljs.core.truth_(temp__5825__auto___47975)){
var el_47976 = temp__5825__auto___47975;
frontend.components.editor.update_heading_class_BANG_(el_47976,block,format,frontend.util.evalue(e));
} else {
}

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(e) : on_change.call(null,e));
}),(function (e){
var temp__5823__auto__ = new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__5823__auto__)){
var on_key_down = temp__5823__auto__;
return (on_key_down.cljs$core$IFn$_invoke$arity$1 ? on_key_down.cljs$core$IFn$_invoke$arity$1(e) : on_key_down.call(null,e));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.ekey(e),"Escape")){
if(cljs.core.truth_(frontend.handler.editor.editor_commands_popup_exists_QMARK_())){
} else {
e.stopPropagation();
}

return frontend.components.editor.editor_on_hide(component_state,new cljs.core.Keyword(null,"esc","esc",-1671924121),e,false);
} else {
return null;
}
}
}),(cljs.core.truth_(frontend.util.mobile_QMARK_())?"true":"false")]);
var G__47933__$1 = ((read_only_QMARK_)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__47933,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-before-input","on-before-input",-1582133469),(function (p1__47929_SHARP_){
return p1__47929_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"on-paste","on-paste",-50859856),(function (p1__47930_SHARP_){
return p1__47930_SHARP_.preventDefault();
})], null)], 0)):G__47933);
var G__47933__$2 = (((!((parent_block == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47933__$1,new cljs.core.Keyword(null,"parentblockid","parentblockid",1382468055),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(parent_block)))):G__47933__$1);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__47933__$2,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(editor_opts,new cljs.core.Keyword(null,"on-change","on-change",-732046149))], 0));

})();
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.editor-inner.flex.flex-1","div.editor-inner.flex.flex-1",-31898353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(block)?"block-editor":"non-block-editor")], null),frontend.ui.ls_textarea(opts__$1),frontend.components.editor.mock_textarea(),frontend.components.editor.command_popups(id,format),(cljs.core.truth_(format)?frontend.components.editor.image_uploader(id,format):null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$editor$box__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47934 = cljs.core.first(args__31746__auto__);
var G__47935 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47934,G__47935) : io.factorhouse.hsx.core.obj_get.call(null,G__47934,G__47935));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"box","box",-1123515375,null),args__31746__auto__),frontend$components$editor$box,args__31746__auto__,null);
}
};
var frontend$components$editor$box = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47977__i = 0, G__47977__a = new Array(arguments.length -  0);
while (G__47977__i < G__47977__a.length) {G__47977__a[G__47977__i] = arguments[G__47977__i + 0]; ++G__47977__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47977__a,0,null);
} 
return frontend$components$editor$box__delegate.call(this,args__31746__auto__);};
frontend$components$editor$box.cljs$lang$maxFixedArity = 0;
frontend$components$editor$box.cljs$lang$applyTo = (function (arglist__47978){
var args__31746__auto__ = cljs.core.seq(arglist__47978);
return frontend$components$editor$box__delegate(args__31746__auto__);
});
frontend$components$editor$box.cljs$core$IFn$_invoke$arity$variadic = frontend$components$editor$box__delegate;
return frontend$components$editor$box;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47936 = comp__31745__auto__;
var G__47937 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47936,G__47937) : io.factorhouse.hsx.core.react_memo.call(null,G__47936,G__47937));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"box");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.editor.js.map
