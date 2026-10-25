goog.provide('frontend.components.bug_report');
frontend.components.bug_report.paste_shortcut_label = (function frontend$components$bug_report$paste_shortcut_label(mac_QMARK_){
if(cljs.core.truth_(mac_QMARK_)){
return "\u2318+V";
} else {
return "Ctrl+V";
}
});
/**
 * parse dataTransfer
 * 
 * input: dataTransfer
 * 
 * output: {:types {:type :data} :items {:kind :type} :files {:name :size :type}}
 */
frontend.components.bug_report.parse_clipboard_data_transfer = (function frontend$components$bug_report$parse_clipboard_data_transfer(data){
var items = data.items;
var types = data.types;
var files = data.files;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.conj.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),item.kind,new cljs.core.Keyword(null,"type","type",1174270348),item.type], null);
}),items))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"types","types",590030639),cljs.core.conj.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (type){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"data","data",-232669377),data.getData(type)], null);
}),types))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"files","files",-472457450),cljs.core.conj.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (file){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),file.name,new cljs.core.Keyword(null,"type","type",1174270348),file.type,new cljs.core.Keyword(null,"size","size",1098693007),file.size], null);
}),files))], null)], 0));
});
/**
 * bug report tool for clipboard
 */
frontend.components.bug_report.clipboard_data_inspector = (function (){var render_fn__31744__auto__ = (function frontend$components$bug_report$clipboard_data_inspector(){
var vec__47908 = logseq.shui.hooks.use_state(cljs.core.PersistentArrayMap.EMPTY);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47908,(0),null);
var set_result_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47908,(1),null);
var vec__47911 = logseq.shui.hooks.use_state((0));
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47911,(0),null);
var set_step_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47911,(1),null);
var paste_handler_BANG_ = (function (e){
var clipboard_data = e.clipboardData;
var result__$1 = frontend.components.bug_report.parse_clipboard_data_transfer(clipboard_data);
var result__$2 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,result__$1);
(set_result_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_result_BANG_.cljs$core$IFn$_invoke$arity$1(result__$2) : set_result_BANG_.call(null,result__$2));

return (set_step_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_step_BANG_.cljs$core$IFn$_invoke$arity$1((1)) : set_step_BANG_.call(null,(1)));
});
var copy_result_to_clipboard_BANG_ = (function (result__$1){
frontend.util.copy_to_clipboard_BANG_(result__$1);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("bug-report.inspector","copied","bug-report.inspector/copied",1416950333)], 0)));
});
var reset_step_BANG_ = (function (){
(set_step_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_step_BANG_.cljs$core$IFn$_invoke$arity$1((0)) : set_step_BANG_.call(null,(0)));

var G__47914 = cljs.core.PersistentArrayMap.EMPTY;
return (set_result_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_result_BANG_.cljs$core$IFn$_invoke$arity$1(G__47914) : set_result_BANG_.call(null,G__47914));
});
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(step,(0))){
addEventListener("paste",paste_handler_BANG_);
} else {
}

return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(step,(0))){
return removeEventListener("paste",paste_handler_BANG_);
} else {
return null;
}
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [step], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col","div.flex.flex-col",255067761),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(step,(0)))?(new cljs.core.List(null,(function (){var iter__5628__auto__ = (function frontend$components$bug_report$clipboard_data_inspector_$_iter__47915(s__47916){
return (new cljs.core.LazySeq(null,(function (){
var s__47916__$1 = s__47916;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__47916__$1);
if(temp__5825__auto__){
var s__47916__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47916__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__47916__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__47918 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__47917 = (0);
while(true){
if((i__47917 < size__5627__auto__)){
var line = cljs.core._nth(c__5626__auto__,i__47917);
cljs.core.chunk_append(b__47918,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mx-auto","div.mx-auto",1496936017),line], null));

var G__47957 = (i__47917 + (1));
i__47917 = G__47957;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47918),frontend$components$bug_report$clipboard_data_inspector_$_iter__47915(cljs.core.chunk_rest(s__47916__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47918),null);
}
} else {
var line = cljs.core.first(s__47916__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mx-auto","div.mx-auto",1496936017),line], null),frontend$components$bug_report$clipboard_data_inspector_$_iter__47915(cljs.core.rest(s__47916__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(clojure.string.split_lines(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("bug-report.inspector","desc","bug-report.inspector/desc",-973192262),frontend.components.bug_report.paste_shortcut_label(frontend.util.mac_QMARK_)], 0))));
})(),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-input.is-large.transition.duration-150.ease-in-out","input.form-input.is-large.transition.duration-150.ease-in-out",210857947),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("bug-report.inspector","placeholder","bug-report.inspector/placeholder",280392315)], 0))], null)], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-between.items-center.mt-2","div.flex.justify-between.items-center.mt-2",-1737297366),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("bug-report.inspector","tip","bug-report.inspector/tip",-1844917322)], 0))], null),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("bug-report.inspector","back","bug-report.inspector/back",-1344038562)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.util.open_url(reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bug-report","bug-report",-903169180)));
})], 0))], null),null,(1),null)),(2),null)),(3),null)):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(step,(1)))?(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("bug-report.inspector","clipboard-desc","bug-report.inspector/clipboard-desc",-959420374)], 0))], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-between.items-center.mt-2","div.flex.justify-between.items-center.mt-2",-1737297366),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("bug-report.inspector","copy-desc","bug-report.inspector/copy-desc",-196992209)], 0))], null),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("bug-report.inspector","copy","bug-report.inspector/copy",-1224046071)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return copy_result_to_clipboard_BANG_(JSON.stringify(cljs.core.clj__GT_js(result),null,(2)));
})], 0))], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-between.items-center.mt-2","div.flex.justify-between.items-center.mt-2",-1737297366),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("bug-report.inspector","create-issue-desc","bug-report.inspector/create-issue-desc",1324658364)], 0))], null),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("bug-report.inspector","create-issue","bug-report.inspector/create-issue",-1459052908)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"href","href",-793805698),frontend.components.header.bug_report_url()], 0))], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-between.items-center.mt-2","div.flex.justify-between.items-center.mt-2",-1737297366),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("bug-report.inspector","tip","bug-report.inspector/tip",-1844917322)], 0))], null),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("bug-report.inspector","back","bug-report.inspector/back",-1344038562)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),reset_step_BANG_], 0))], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.whitespace-pre-wrap","pre.whitespace-pre-wrap",824829807),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),JSON.stringify(cljs.core.clj__GT_js(result),null,(2))], null)], null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)):null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$bug_report$clipboard_data_inspector__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47927 = cljs.core.first(args__31746__auto__);
var G__47928 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47927,G__47928) : io.factorhouse.hsx.core.obj_get.call(null,G__47927,G__47928));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"clipboard-data-inspector","clipboard-data-inspector",-55279092,null),args__31746__auto__),frontend$components$bug_report$clipboard_data_inspector,args__31746__auto__,null);
}
};
var frontend$components$bug_report$clipboard_data_inspector = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47959__i = 0, G__47959__a = new Array(arguments.length -  0);
while (G__47959__i < G__47959__a.length) {G__47959__a[G__47959__i] = arguments[G__47959__i + 0]; ++G__47959__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47959__a,0,null);
} 
return frontend$components$bug_report$clipboard_data_inspector__delegate.call(this,args__31746__auto__);};
frontend$components$bug_report$clipboard_data_inspector.cljs$lang$maxFixedArity = 0;
frontend$components$bug_report$clipboard_data_inspector.cljs$lang$applyTo = (function (arglist__47960){
var args__31746__auto__ = cljs.core.seq(arglist__47960);
return frontend$components$bug_report$clipboard_data_inspector__delegate(args__31746__auto__);
});
frontend$components$bug_report$clipboard_data_inspector.cljs$core$IFn$_invoke$arity$variadic = frontend$components$bug_report$clipboard_data_inspector__delegate;
return frontend$components$bug_report$clipboard_data_inspector;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47930 = comp__31745__auto__;
var G__47931 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47930,G__47931) : io.factorhouse.hsx.core.react_memo.call(null,G__47930,G__47931));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"clipboard-data-inspector");

return comp__31745__auto__;
})();
frontend.components.bug_report.bug_report_tool_route = (function (){var render_fn__31744__auto__ = (function frontend$components$bug_report$bug_report_tool_route(route_match){
var name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_match,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"tool","tool",-1298696470)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col","div.flex.flex-col",255067761),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"clipboard-data-inspector"))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-2xl.mx-auto.mb-4","h1.text-2xl.mx-auto.mb-4",-711374832),frontend.ui.icon("clipboard")," ",clojure.string.capitalize(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("bug-report.inspector","title","bug-report.inspector/title",1562828517)], 0)))], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"clipboard-data-inspector"))?frontend.components.bug_report.clipboard_data_inspector():null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$bug_report$bug_report_tool_route__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47936 = cljs.core.first(args__31746__auto__);
var G__47937 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47936,G__47937) : io.factorhouse.hsx.core.obj_get.call(null,G__47936,G__47937));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"bug-report-tool-route","bug-report-tool-route",1387888298,null),args__31746__auto__),frontend$components$bug_report$bug_report_tool_route,args__31746__auto__,null);
}
};
var frontend$components$bug_report$bug_report_tool_route = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47961__i = 0, G__47961__a = new Array(arguments.length -  0);
while (G__47961__i < G__47961__a.length) {G__47961__a[G__47961__i] = arguments[G__47961__i + 0]; ++G__47961__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47961__a,0,null);
} 
return frontend$components$bug_report$bug_report_tool_route__delegate.call(this,args__31746__auto__);};
frontend$components$bug_report$bug_report_tool_route.cljs$lang$maxFixedArity = 0;
frontend$components$bug_report$bug_report_tool_route.cljs$lang$applyTo = (function (arglist__47962){
var args__31746__auto__ = cljs.core.seq(arglist__47962);
return frontend$components$bug_report$bug_report_tool_route__delegate(args__31746__auto__);
});
frontend$components$bug_report$bug_report_tool_route.cljs$core$IFn$_invoke$arity$variadic = frontend$components$bug_report$bug_report_tool_route__delegate;
return frontend$components$bug_report$bug_report_tool_route;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47938 = comp__31745__auto__;
var G__47939 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47938,G__47939) : io.factorhouse.hsx.core.react_memo.call(null,G__47938,G__47939));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"bug-report-tool-route");

return comp__31745__auto__;
})();
frontend.components.bug_report.report_item_button = (function (){var render_fn__31744__auto__ = (function frontend$components$bug_report$report_item_button(title,description,icon_name,p__47940){
var map__47942 = p__47940;
var map__47942__$1 = cljs.core.__destructure_map(map__47942);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47942__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.cp__bug-report-item-button.flex.items-center.px-4.py-2.my-2.rounded-lg","a.cp__bug-report-item-button.flex.items-center.px-4.py-2.my-2.rounded-lg",1479012054),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.ui.icon(icon_name),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.ml-2","div.flex.flex-col.ml-2",-512688702),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-60","div.opacity-60",-1650446509),description], null)], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$bug_report$report_item_button__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47943 = cljs.core.first(args__31746__auto__);
var G__47944 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47943,G__47944) : io.factorhouse.hsx.core.obj_get.call(null,G__47943,G__47944));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"report-item-button","report-item-button",-479177308,null),args__31746__auto__),frontend$components$bug_report$report_item_button,args__31746__auto__,null);
}
};
var frontend$components$bug_report$report_item_button = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47965__i = 0, G__47965__a = new Array(arguments.length -  0);
while (G__47965__i < G__47965__a.length) {G__47965__a[G__47965__i] = arguments[G__47965__i + 0]; ++G__47965__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47965__a,0,null);
} 
return frontend$components$bug_report$report_item_button__delegate.call(this,args__31746__auto__);};
frontend$components$bug_report$report_item_button.cljs$lang$maxFixedArity = 0;
frontend$components$bug_report$report_item_button.cljs$lang$applyTo = (function (arglist__47966){
var args__31746__auto__ = cljs.core.seq(arglist__47966);
return frontend$components$bug_report$report_item_button__delegate(args__31746__auto__);
});
frontend$components$bug_report$report_item_button.cljs$core$IFn$_invoke$arity$variadic = frontend$components$bug_report$report_item_button__delegate;
return frontend$components$bug_report$report_item_button;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47945 = comp__31745__auto__;
var G__47946 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47945,G__47946) : io.factorhouse.hsx.core.react_memo.call(null,G__47945,G__47946));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"report-item-button");

return comp__31745__auto__;
})();
frontend.components.bug_report.bug_report = (function (){var render_fn__31744__auto__ = (function frontend$components$bug_report$bug_report(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col","div.flex.flex-col",255067761),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.items-center","div.flex.flex-col.items-center",740436618),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.mb-2","div.flex.items-center.mb-2",-1649520745),frontend.ui.icon("bug"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-3xl.ml-2","h1.text-3xl.ml-2",1470513522),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("bug-report","title","bug-report/title",237942868)], 0))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-60","div.opacity-60",-1650446509),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("bug-report","desc","bug-report/desc",-1794759017)], 0))], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__bug-report-reporter.rounded-lg.p-8.mt-8","div.cp__bug-report-reporter.rounded-lg.p-8.mt-8",479543697),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-2xl","h1.text-2xl",-598012964),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("bug-report.clipboard","title","bug-report.clipboard/title",-1180238532)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-60","div.opacity-60",-1650446509),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("bug-report.clipboard","desc","bug-report.clipboard/desc",-545414305)], 0))], null),frontend.components.bug_report.report_item_button(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("bug-report.clipboard","action-title","bug-report.clipboard/action-title",-1368793279)], 0)),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("bug-report.clipboard","action-desc","bug-report.clipboard/action-desc",-2088400791)], 0)),"clipboard",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.util.open_url(reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bug-report-tools","bug-report-tools",-1364232926),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tool","tool",-1298696470),"clipboard-data-inspector"], null)));
})], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.py-2","div.py-2",-1233160868)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col","div.flex.flex-col",255067761),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-2xl","h1.text-2xl",-598012964),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("bug-report.issue","title","bug-report.issue/title",51665031)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-60","div.opacity-60",-1650446509),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("bug-report.issue","desc","bug-report.issue/desc",-2144597732)], 0))], null),frontend.components.bug_report.report_item_button(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("bug-report.issue","action-title","bug-report.issue/action-title",-1902889852)], 0)),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("bug-report.issue","action-desc","bug-report.issue/action-desc",-481744986)], 0)),"message-report",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.util.open_url(frontend.components.header.bug_report_url());
})], null))], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$bug_report$bug_report__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47947 = cljs.core.first(args__31746__auto__);
var G__47948 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47947,G__47948) : io.factorhouse.hsx.core.obj_get.call(null,G__47947,G__47948));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"bug-report","bug-report",737362347,null),args__31746__auto__),frontend$components$bug_report$bug_report,args__31746__auto__,null);
}
};
var frontend$components$bug_report$bug_report = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47969__i = 0, G__47969__a = new Array(arguments.length -  0);
while (G__47969__i < G__47969__a.length) {G__47969__a[G__47969__i] = arguments[G__47969__i + 0]; ++G__47969__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47969__a,0,null);
} 
return frontend$components$bug_report$bug_report__delegate.call(this,args__31746__auto__);};
frontend$components$bug_report$bug_report.cljs$lang$maxFixedArity = 0;
frontend$components$bug_report$bug_report.cljs$lang$applyTo = (function (arglist__47970){
var args__31746__auto__ = cljs.core.seq(arglist__47970);
return frontend$components$bug_report$bug_report__delegate(args__31746__auto__);
});
frontend$components$bug_report$bug_report.cljs$core$IFn$_invoke$arity$variadic = frontend$components$bug_report$bug_report__delegate;
return frontend$components$bug_report$bug_report;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47949 = comp__31745__auto__;
var G__47950 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47949,G__47950) : io.factorhouse.hsx.core.react_memo.call(null,G__47949,G__47950));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"bug-report");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.bug_report.js.map
