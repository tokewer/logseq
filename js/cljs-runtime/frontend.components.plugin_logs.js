goog.provide('frontend.components.plugin_logs');
frontend.components.plugin_logs.levels = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DEBUG","INFO","WARN","ERROR"], null);
frontend.components.plugin_logs.get_plugin_logger = (function frontend$components$plugin_logs$get_plugin_logger(pid){
var temp__5825__auto__ = (function (){var and__5140__auto__ = pid;
if(cljs.core.truth_(and__5140__auto__)){
return window.LSPluginCore;
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var core = temp__5825__auto__;
try{return core.getPluginLogger(pid);
}catch (e38122){var _ = e38122;
return null;
}} else {
return null;
}
});
frontend.components.plugin_logs.get_entries = (function frontend$components$plugin_logs$get_entries(pid){
var temp__5825__auto__ = frontend.components.plugin_logs.get_plugin_logger(pid);
if(cljs.core.truth_(temp__5825__auto__)){
var logger = temp__5825__auto__;
return cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(logger.getEntries());
} else {
return null;
}
});
frontend.components.plugin_logs.format_time = (function frontend$components$plugin_logs$format_time(ts){
var d = (new Date(ts));
return d.toLocaleTimeString();
});
frontend.components.plugin_logs.entry__GT_text = (function frontend$components$plugin_logs$entry__GT_text(p__38125){
var map__38126 = p__38125;
var map__38126__$1 = cljs.core.__destructure_map(map__38126);
var ts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38126__$1,new cljs.core.Keyword(null,"ts","ts",1617209904));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38126__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38126__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38126__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return (""+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.components.plugin_logs.format_time(ts))+"] "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(level)+" ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+"] "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
frontend.components.plugin_logs.copy_all_BANG_ = (function frontend$components$plugin_logs$copy_all_BANG_(entries){
frontend.util.copy_to_clipboard_BANG_(clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.components.plugin_logs.entry__GT_text,entries)));

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","logs-copied","plugin/logs-copied",852954377)], 0)),new cljs.core.Keyword(null,"success","success",1890645906));
});
frontend.components.plugin_logs.plugin_logs_panel = (function (){var render_fn__31744__auto__ = (function frontend$components$plugin_logs$plugin_logs_panel(p__38132){
var map__38133 = p__38132;
var map__38133__$1 = cljs.core.__destructure_map(map__38133);
var pid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38133__$1,new cljs.core.Keyword(null,"pid","pid",1018387698));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38133__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__38134 = logseq.shui.hooks.use_state((function (){var or__5142__auto__ = frontend.components.plugin_logs.get_entries(pid);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
var entries = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38134,(0),null);
var set_entries_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38134,(1),null);
var vec__38137 = logseq.shui.hooks.use_state(null);
var level_filter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38137,(0),null);
var set_level_filter_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38137,(1),null);
var vec__38140 = logseq.shui.hooks.use_state("");
var keyword_filter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38140,(0),null);
var set_keyword_filter_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38140,(1),null);
var logger = frontend.components.plugin_logs.get_plugin_logger(pid);
var refresh_BANG_ = logseq.shui.hooks.use_callback((function (){
var G__38143 = (function (){var or__5142__auto__ = frontend.components.plugin_logs.get_entries(pid);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
return (set_entries_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_entries_BANG_.cljs$core$IFn$_invoke$arity$1(G__38143) : set_entries_BANG_.call(null,G__38143));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid], null));
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(logger)){
var h = (function (){
return (refresh_BANG_.cljs$core$IFn$_invoke$arity$0 ? refresh_BANG_.cljs$core$IFn$_invoke$arity$0() : refresh_BANG_.call(null));
});
logger.on("change",h);

return (function (){
return logger.off("change",h);
});
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [logger,refresh_BANG_], null));

var filtered = (function (){var G__38144 = entries;
var G__38144__$1 = ((cljs.core.seq(level_filter))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38129_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(p1__38129_SHARP_),level_filter);
}),G__38144):G__38144);
var G__38144__$2 = (((!(clojure.string.blank_QMARK_(keyword_filter))))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38130_SHARP_){
return clojure.string.includes_QMARK_(clojure.string.lower_case((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__38130_SHARP_)))),clojure.string.lower_case(keyword_filter));
}),G__38144__$1):G__38144__$1);
return cljs.core.reverse(G__38144__$2);

})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__plugins-logs.flex.flex-col.gap-3","div.cp__plugins-logs.flex.flex-col.gap-3",196202857),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"720px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"960px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__plugins-logs-head.flex.items-center.justify-between.gap-3.flex-wrap","div.cp__plugins-logs-head.flex.items-center.justify-between.gap-3.flex-wrap",1638432017),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-lg.font-semibold.flex.items-center.gap-2.m-0","h1.text-lg.font-semibold.flex.items-center.gap-2.m-0",1412644074),frontend.ui.icon("file-description"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","logs-title","plugin/logs-title",-417914965)], 0))], null),(cljs.core.truth_(name)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.opacity-70.text-xs.px-1.5.py-0.5.rounded.bg-gray-03","code.opacity-70.text-xs.px-1.5.py-0.5.rounded.bg-gray-03",-700255326),name], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-3.text-xs.opacity-70","div.flex.items-center.gap-3.text-xs.opacity-70",812787621),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(filtered))+" / "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(entries)))], null),(cljs.core.truth_(logger)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1","span.flex.items-center.gap-1",-111995724),"level:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),logger.getLevel()], null)], null):null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__plugins-logs-toolbar.flex.items-center.gap-2.flex-wrap","div.cp__plugins-logs-toolbar.flex.items-center.gap-2.flex-wrap",808852322),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.flex-1.min-w-48.flex.items-center","div.relative.flex-1.min-w-48.flex.items-center",1547523947),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.absolute.opacity-50.pointer-events-none.flex.items-center","span.absolute.opacity-50.pointer-events-none.flex.items-center",39741842),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),"8px",new cljs.core.Keyword(null,"top","top",-1856271961),"0",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"0"], null)], null),frontend.ui.icon("search",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-input.text-xs.h-8.w-full","input.form-input.text-xs.h-8.w-full",607186414),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"28px"], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","logs-filter-placeholder","plugin/logs-filter-placeholder",503913017)], 0)),new cljs.core.Keyword(null,"value","value",305978217),keyword_filter,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__38131_SHARP_){
var G__38145 = frontend.util.evalue(p1__38131_SHARP_);
return (set_keyword_filter_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_keyword_filter_BANG_.cljs$core$IFn$_invoke$arity$1(G__38145) : set_keyword_filter_BANG_.call(null,G__38145));
})], null)], null)], null),(function (){var G__38146 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5142__auto__ = level_filter;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "*";
}
})(),new cljs.core.Keyword(null,"on-value-change","on-value-change",-621835289),(function (v){
var G__38149 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,"*"))?null:v);
return (set_level_filter_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_level_filter_BANG_.cljs$core$IFn$_invoke$arity$1(G__38149) : set_level_filter_BANG_.call(null,G__38149));
})], null);
var G__38147 = (function (){var G__38150 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-32 h-8 text-xs shrink-0"], null);
var G__38151 = (function (){var G__38152 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","logs-level-all","plugin/logs-level-all",2092298537)], 0))], null);
return (logseq.shui.ui.select_value.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.select_value.cljs$core$IFn$_invoke$arity$1(G__38152) : logseq.shui.ui.select_value.call(null,G__38152));
})();
return (logseq.shui.ui.select_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_trigger.cljs$core$IFn$_invoke$arity$2(G__38150,G__38151) : logseq.shui.ui.select_trigger.call(null,G__38150,G__38151));
})();
var G__38148 = (function (){var G__38153 = (function (){var G__38155 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"*"], null);
var G__38156 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","logs-level-all","plugin/logs-level-all",2092298537)], 0));
return (logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2(G__38155,G__38156) : logseq.shui.ui.select_item.call(null,G__38155,G__38156));
})();
var G__38154 = (function (){var iter__5628__auto__ = (function frontend$components$plugin_logs$plugin_logs_panel_$_iter__38157(s__38158){
return (new cljs.core.LazySeq(null,(function (){
var s__38158__$1 = s__38158;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__38158__$1);
if(temp__5825__auto__){
var s__38158__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38158__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__38158__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__38160 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__38159 = (0);
while(true){
if((i__38159 < size__5627__auto__)){
var lvl = cljs.core._nth(c__5626__auto__,i__38159);
cljs.core.chunk_append(b__38160,(function (){var G__38161 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),lvl,new cljs.core.Keyword(null,"key","key",-1516042587),lvl], null);
var G__38162 = lvl;
return (logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2(G__38161,G__38162) : logseq.shui.ui.select_item.call(null,G__38161,G__38162));
})());

var G__38203 = (i__38159 + (1));
i__38159 = G__38203;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38160),frontend$components$plugin_logs$plugin_logs_panel_$_iter__38157(cljs.core.chunk_rest(s__38158__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38160),null);
}
} else {
var lvl = cljs.core.first(s__38158__$2);
return cljs.core.cons((function (){var G__38163 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),lvl,new cljs.core.Keyword(null,"key","key",-1516042587),lvl], null);
var G__38164 = lvl;
return (logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2(G__38163,G__38164) : logseq.shui.ui.select_item.call(null,G__38163,G__38164));
})(),frontend$components$plugin_logs$plugin_logs_panel_$_iter__38157(cljs.core.rest(s__38158__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(frontend.components.plugin_logs.levels);
})();
return (logseq.shui.ui.select_content.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_content.cljs$core$IFn$_invoke$arity$2(G__38153,G__38154) : logseq.shui.ui.select_content.call(null,G__38153,G__38154));
})();
return (logseq.shui.ui.select.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.select.cljs$core$IFn$_invoke$arity$3(G__38146,G__38147,G__38148) : logseq.shui.ui.select.call(null,G__38146,G__38147,G__38148));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.h-5.w-px.bg-gray-05.shrink-0","div.h-5.w-px.bg-gray-05.shrink-0",1919021090)], null),(function (){var G__38165 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"class","class",-2030961996),"h-8 shrink-0",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.components.plugin_logs.copy_all_BANG_(cljs.core.reverse(filtered));
}),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","logs-copy","plugin/logs-copy",1563754268)], 0))], null);
var G__38166 = frontend.ui.icon("copy",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null));
var G__38167 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ml-1.5","span.ml-1.5",1108170680),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","logs-copy","plugin/logs-copy",1563754268)], 0))], null);
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__38165,G__38166,G__38167) : logseq.shui.ui.button.call(null,G__38165,G__38166,G__38167));
})(),(function (){var G__38168 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"class","class",-2030961996),"h-8 shrink-0",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(logger)){
logger.clear();

return (refresh_BANG_.cljs$core$IFn$_invoke$arity$0 ? refresh_BANG_.cljs$core$IFn$_invoke$arity$0() : refresh_BANG_.call(null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","logs-clear","plugin/logs-clear",254836830)], 0))], null);
var G__38169 = frontend.ui.icon("trash",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null));
var G__38170 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ml-1.5","span.ml-1.5",1108170680),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","logs-clear","plugin/logs-clear",254836830)], 0))], null);
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__38168,G__38169,G__38170) : logseq.shui.ui.button.call(null,G__38168,G__38169,G__38170));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__plugins-logs-body.text-xs.font-mono.rounded.border","div.cp__plugins-logs-body.text-xs.font-mono.rounded.border",-45081272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"60vh",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"8px",new cljs.core.Keyword(null,"background","background",-863952629),"var(--ls-secondary-background-color)"], null)], null),((cljs.core.empty_QMARK_(filtered))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-60.p-4.text-center","div.opacity-60.p-4.text-center",2020527799),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","logs-empty","plugin/logs-empty",-1123353956)], 0))], null):(function (){var iter__5628__auto__ = (function frontend$components$plugin_logs$plugin_logs_panel_$_iter__38171(s__38172){
return (new cljs.core.LazySeq(null,(function (){
var s__38172__$1 = s__38172;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__38172__$1);
if(temp__5825__auto__){
var s__38172__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38172__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__38172__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__38174 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__38173 = (0);
while(true){
if((i__38173 < size__5627__auto__)){
var vec__38175 = cljs.core._nth(c__5626__auto__,i__38173);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38175,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38175,(1),null);
cljs.core.chunk_append(b__38174,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__plugins-logs-row.flex.gap-1.py-0.5.items-start","div.cp__plugins-logs-row.flex.gap-1.py-0.5.items-start",-347134343),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ts","ts",1617209904).cljs$core$IFn$_invoke$arity$1(e))),new cljs.core.Keyword(null,"data-level","data-level",1364295892),new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(e)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-60.shrink-0","span.opacity-60.shrink-0",2125120686),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"80px"], null)], null),frontend.components.plugin_logs.format_time(new cljs.core.Keyword(null,"ts","ts",1617209904).cljs$core$IFn$_invoke$arity$1(e))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shrink-0.font-bold","span.shrink-0.font-bold",-1426315402),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"56px",new cljs.core.Keyword(null,"color","color",1011675173),(function (){var G__38178 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(e);
switch (G__38178) {
case "ERROR":
return "var(--ls-error-text-color, #ef4444)";

break;
case "WARN":
return "#d97706";

break;
case "INFO":
return "var(--ls-active-primary-color)";

break;
case "DEBUG":
return "var(--ls-icon-color)";

break;
default:
return null;

}
})()], null)], null),new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(e)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-70.shrink-0","span.opacity-70.shrink-0",-1762103935),(""+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(e))+"]")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.whitespace-pre-wrap.break-all.flex-1","span.whitespace-pre-wrap.break-all.flex-1",1357289373),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e)], null)], null));

var G__38210 = (i__38173 + (1));
i__38173 = G__38210;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38174),frontend$components$plugin_logs$plugin_logs_panel_$_iter__38171(cljs.core.chunk_rest(s__38172__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38174),null);
}
} else {
var vec__38179 = cljs.core.first(s__38172__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38179,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38179,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__plugins-logs-row.flex.gap-1.py-0.5.items-start","div.cp__plugins-logs-row.flex.gap-1.py-0.5.items-start",-347134343),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ts","ts",1617209904).cljs$core$IFn$_invoke$arity$1(e))),new cljs.core.Keyword(null,"data-level","data-level",1364295892),new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(e)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-60.shrink-0","span.opacity-60.shrink-0",2125120686),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"80px"], null)], null),frontend.components.plugin_logs.format_time(new cljs.core.Keyword(null,"ts","ts",1617209904).cljs$core$IFn$_invoke$arity$1(e))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shrink-0.font-bold","span.shrink-0.font-bold",-1426315402),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"56px",new cljs.core.Keyword(null,"color","color",1011675173),(function (){var G__38182 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(e);
switch (G__38182) {
case "ERROR":
return "var(--ls-error-text-color, #ef4444)";

break;
case "WARN":
return "#d97706";

break;
case "INFO":
return "var(--ls-active-primary-color)";

break;
case "DEBUG":
return "var(--ls-icon-color)";

break;
default:
return null;

}
})()], null)], null),new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(e)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-70.shrink-0","span.opacity-70.shrink-0",-1762103935),(""+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(e))+"]")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.whitespace-pre-wrap.break-all.flex-1","span.whitespace-pre-wrap.break-all.flex-1",1357289373),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e)], null)], null),frontend$components$plugin_logs$plugin_logs_panel_$_iter__38171(cljs.core.rest(s__38172__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,filtered));
})())], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugin_logs$plugin_logs_panel__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38183 = cljs.core.first(args__31746__auto__);
var G__38184 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38183,G__38184) : io.factorhouse.hsx.core.obj_get.call(null,G__38183,G__38184));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"plugin-logs-panel","plugin-logs-panel",2091883543,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$plugin_logs$plugin_logs_panel,args__31746__auto__,null);
}
};
var frontend$components$plugin_logs$plugin_logs_panel = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38214__i = 0, G__38214__a = new Array(arguments.length -  0);
while (G__38214__i < G__38214__a.length) {G__38214__a[G__38214__i] = arguments[G__38214__i + 0]; ++G__38214__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38214__a,0,null);
} 
return frontend$components$plugin_logs$plugin_logs_panel__delegate.call(this,args__31746__auto__);};
frontend$components$plugin_logs$plugin_logs_panel.cljs$lang$maxFixedArity = 0;
frontend$components$plugin_logs$plugin_logs_panel.cljs$lang$applyTo = (function (arglist__38215){
var args__31746__auto__ = cljs.core.seq(arglist__38215);
return frontend$components$plugin_logs$plugin_logs_panel__delegate(args__31746__auto__);
});
frontend$components$plugin_logs$plugin_logs_panel.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugin_logs$plugin_logs_panel__delegate;
return frontend$components$plugin_logs$plugin_logs_panel;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38185 = comp__31745__auto__;
var G__38186 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38185,G__38186) : io.factorhouse.hsx.core.react_memo.call(null,G__38185,G__38186));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"plugin-logs-panel");

return comp__31745__auto__;
})();
frontend.components.plugin_logs.open_plugin_logs_BANG_ = (function frontend$components$plugin_logs$open_plugin_logs_BANG_(p__38188){
var map__38189 = p__38188;
var map__38189__$1 = cljs.core.__destructure_map(map__38189);
var opts = map__38189__$1;
var _pid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38189__$1,new cljs.core.Keyword(null,"_pid","_pid",-925264248));
var _name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38189__$1,new cljs.core.Keyword(null,"_name","_name",-1979660747));
var G__38190 = (function (){
return frontend.components.plugin_logs.plugin_logs_panel(opts);
});
var G__38191 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"plugin-logs-modal",new cljs.core.Keyword(null,"class","class",-2030961996),"lsp-plugin-logs-dialog",new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open-auto-focus","on-open-auto-focus",391348920),(function (p1__38187_SHARP_){
return p1__38187_SHARP_.preventDefault();
})], null)], null);
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2(G__38190,G__38191) : logseq.shui.ui.dialog_open_BANG_.call(null,G__38190,G__38191));
});

//# sourceMappingURL=frontend.components.plugin_logs.js.map
