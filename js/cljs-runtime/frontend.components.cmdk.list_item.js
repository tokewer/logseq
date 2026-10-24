goog.provide('frontend.components.cmdk.list_item');
var module$node_modules$remove_accents$index=shadow.js.require("module$node_modules$remove_accents$index", {});
frontend.components.cmdk.list_item.to_string = (function frontend$components$cmdk$list_item$to_string(input){
if(typeof input === 'string'){
return input;
} else {
if((input instanceof cljs.core.Keyword)){
return cljs.core.name(input);
} else {
if((input instanceof cljs.core.Symbol)){
return cljs.core.name(input);
} else {
if(typeof input === 'number'){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(input));
} else {
if(cljs.core.uuid_QMARK_(input)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(input));
} else {
if((input == null)){
return "";
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));

}
}
}
}
}
}
});
frontend.components.cmdk.list_item.remove_accents_STAR_ = (function frontend$components$cmdk$list_item$remove_accents_STAR_(s){
var temp__5823__auto__ = module$node_modules$remove_accents$index.remove;
if(cljs.core.truth_(temp__5823__auto__)){
var remove_fn = temp__5823__auto__;
return (remove_fn.cljs$core$IFn$_invoke$arity$1 ? remove_fn.cljs$core$IFn$_invoke$arity$1(s) : remove_fn.call(null,s));
} else {
return module$node_modules$remove_accents$index(s);
}
});
frontend.components.cmdk.list_item.normalize_text = (function frontend$components$cmdk$list_item$normalize_text(app_config,text){
var G__54487 = frontend.components.cmdk.list_item.to_string(text);
var G__54487__$1 = G__54487.normalize("NFKC")
;
if(cljs.core.truth_(new cljs.core.Keyword("feature","enable-search-remove-accents?","feature/enable-search-remove-accents?",1106083837).cljs$core$IFn$_invoke$arity$1(app_config))){
return frontend.components.cmdk.list_item.remove_accents_STAR_(G__54487__$1);
} else {
return G__54487__$1;
}
});
frontend.components.cmdk.list_item.highlight_query_STAR_ = (function frontend$components$cmdk$list_item$highlight_query_STAR_(app_config,query,text){
if(((cljs.core.vector_QMARK_(text)) || (cljs.core.object_QMARK_(text)))){
return text;
} else {
if(clojure.string.blank_QMARK_(query)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.components.cmdk.list_item.to_string(text)], null);
} else {
var temp__5825__auto__ = cljs.core.not_empty(frontend.components.cmdk.list_item.to_string(text));
if(cljs.core.truth_(temp__5825__auto__)){
var text_string = temp__5825__auto__;
var normal_text = frontend.components.cmdk.list_item.normalize_text(app_config,text_string);
var normal_query = frontend.components.cmdk.list_item.normalize_text(app_config,query);
var query_terms = clojure.string.replace(goog.string.regExpEscape(normal_query),/\s+/,"|");
var query_re = (new RegExp((""+"("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_terms)+")"),"i"));
var highlighted_text = clojure.string.replace(normal_text,query_re,"<:hlmarker>$1<:hlmarker>");
var segs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(highlighted_text,/<:hlmarker>/);
if(cljs.core.seq(segs)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, ["data-testid",text_string], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,seg){
return cljs.core.with_meta(((cljs.core.even_QMARK_(i))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),seg], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(0)], null)], null),seg], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"highlight-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i))], null));
}),segs));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),normal_text], null);
}
} else {
return null;
}

}
}
});
frontend.components.cmdk.list_item.current_page_badge_label = "Current Page";
frontend.components.cmdk.list_item.current_page_badge_placement = (function frontend$components$cmdk$list_item$current_page_badge_placement(p__54488){
var map__54489 = p__54488;
var map__54489__$1 = cljs.core.__destructure_map(map__54489);
var current_page_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54489__$1,new cljs.core.Keyword(null,"current-page?","current-page?",-1491305079));
var result_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54489__$1,new cljs.core.Keyword(null,"result-type","result-type",-982013227));
if(cljs.core.truth_(current_page_QMARK_)){
var G__54490 = result_type;
var G__54490__$1 = (((G__54490 instanceof cljs.core.Keyword))?G__54490.fqn:null);
switch (G__54490__$1) {
case "page":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-badge","text-badge",-78260214),frontend.components.cmdk.list_item.current_page_badge_label], null);

break;
case "block":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header-badge","header-badge",-1952550544),frontend.components.cmdk.list_item.current_page_badge_label], null);

break;
default:
return null;

}
} else {
return null;
}
});
frontend.components.cmdk.list_item.current_page_badge_node = (function frontend$components$cmdk$list_item$current_page_badge_node(label){
if(clojure.string.blank_QMARK_(label)){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cp__cmdk-current-page-badge","span.cp__cmdk-current-page-badge",870852587),label], null);
}
});
frontend.components.cmdk.list_item.root = (function (){var render_fn__31744__auto__ = (function frontend$components$cmdk$list_item$root(p__54491,p__54492){
var map__54493 = p__54491;
var map__54493__$1 = cljs.core.__destructure_map(map__54493);
var props = map__54493__$1;
var rounded = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54493__$1,new cljs.core.Keyword(null,"rounded","rounded",85415706),true);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54493__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var hide_inline_icon_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54493__$1,new cljs.core.Keyword(null,"hide-inline-icon?","hide-inline-icon?",2041502557));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54493__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var on_mounted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54493__$1,new cljs.core.Keyword(null,"on-mounted","on-mounted",-1980352058));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54493__$1,new cljs.core.Keyword(null,"value","value",305978217));
var compact = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54493__$1,new cljs.core.Keyword(null,"compact","compact",-348732150));
var hoverable = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54493__$1,new cljs.core.Keyword(null,"hoverable","hoverable",1153998892),true);
var source_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54493__$1,new cljs.core.Keyword(null,"source-block","source-block",-878290804));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54493__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var highlighted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54493__$1,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733));
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54493__$1,new cljs.core.Keyword(null,"header","header",119441134));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54493__$1,new cljs.core.Keyword(null,"title","title",636505583));
var shortcut = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54493__$1,new cljs.core.Keyword(null,"shortcut","shortcut",-431647697));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54493__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var value_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54493__$1,new cljs.core.Keyword(null,"value-label","value-label",-1285712590));
var on_mouse_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54493__$1,new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54493__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var icon_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54493__$1,new cljs.core.Keyword(null,"icon-theme","icon-theme",1771652151));
var map__54494 = p__54492;
var map__54494__$1 = cljs.core.__destructure_map(map__54494);
var app_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54494__$1,new cljs.core.Keyword(null,"app-config","app-config",769785229));
var highlight_query = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(frontend.components.cmdk.list_item.highlight_query_STAR_,app_config,query);
var badge_placement = frontend.components.cmdk.list_item.current_page_badge_placement(props);
var text_badge = frontend.components.cmdk.list_item.current_page_badge_node(new cljs.core.Keyword(null,"text-badge","text-badge",-78260214).cljs$core$IFn$_invoke$arity$1(badge_placement));
var header_badge = frontend.components.cmdk.list_item.current_page_badge_node(new cljs.core.Keyword(null,"header-badge","header-badge",-1952550544).cljs$core$IFn$_invoke$arity$1(badge_placement));
var keyboard_highlighted_QMARK_ = (function (){var and__5140__auto__ = highlighted;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(hoverable);
} else {
return and__5140__auto__;
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"data-hoverable","data-hoverable",-380282688),new cljs.core.Keyword(null,"data-cmdk-item","data-cmdk-item",-1899696030),new cljs.core.Keyword(null,"data-kb-highlighted","data-kb-highlighted",-1677259836),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),new cljs.core.Keyword(null,"data-highlighted","data-highlighted",-1455204904)],[(cljs.core.truth_(hoverable)?true:null),true,(cljs.core.truth_(keyboard_highlighted_QMARK_)?true:null),(cljs.core.truth_(on_mounted)?on_mounted:null),(cljs.core.truth_(on_click)?on_click:null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(1)], null),(function (){var G__54495 = "flex flex-col transition-colors duration-75 ease-in";
var G__54495__$1 = (cljs.core.truth_(hoverable)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54495)+" cursor-pointer"):G__54495);
var G__54495__$2 = (cljs.core.truth_(rounded)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54495__$1)+" rounded-lg"):G__54495__$1);
var G__54495__$3 = ((cljs.core.not(compact))?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54495__$2)+" py-4 px-6 gap-1"):G__54495__$2);
if(cljs.core.truth_(compact)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54495__$3)+" py-1.5 px-3 gap-0.5");
} else {
return G__54495__$3;
}
})(),(cljs.core.truth_(on_mouse_move)?on_mouse_move:null),(cljs.core.truth_(highlighted)?true:null)])], 0)),(cljs.core.truth_(header)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.pl-8.font-light.flex.items-center.gap-2.overflow-hidden.min-w-0","div.text-xs.pl-8.font-light.flex.items-center.gap-2.overflow-hidden.min-w-0",1786330428),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"-mt-1",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"var(--lx-gray-11)",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"text-overflow","text-overflow",-1022366814),"ellipsis"], null)], null),highlight_query(header),header_badge], null):null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-start.gap-3","div.flex.items-start.gap-3",667384472),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-5.h-5.rounded.flex.items-center.justify-center","div.w-5.h-5.rounded.flex.items-center.justify-center",-740016128),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_((function (){var fexpr__54496 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gradient","gradient",-1983908971),null], null), null);
return (fexpr__54496.cljs$core$IFn$_invoke$arity$1 ? fexpr__54496.cljs$core$IFn$_invoke$arity$1(icon_theme) : fexpr__54496.call(null,icon_theme));
})())?"linear-gradient(-65deg, #8AE8FF, #5373E7, #369EFF, #00B1CC)":null),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),(cljs.core.truth_((function (){var fexpr__54497 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gradient","gradient",-1983908971),null], null), null);
return (fexpr__54497.cljs$core$IFn$_invoke$arity$1 ? fexpr__54497.cljs$core$IFn$_invoke$arity$1(icon_theme) : fexpr__54497.call(null,icon_theme));
})())?"inset 0 0 0 1px rgba(255,255,255,0.3) ":null)], null),new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__54498 = "w-5 h-5 rounded flex items-center justify-center";
var G__54498__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(icon_theme,new cljs.core.Keyword(null,"color","color",1011675173)))?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54498)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(highlighted)?"bg-accent-07-alpha":"bg-gray-05"))+" dark:text-white"):G__54498);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(icon_theme,new cljs.core.Keyword(null,"gray","gray",1013268388))){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54498__$1)+" bg-gray-05 dark:text-white");
} else {
return G__54498__$1;
}
})()], null),((typeof icon === 'string')?logseq.shui.ui.tabler_icon(icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),"14",new cljs.core.Keyword(null,"class","class",-2030961996),""], null)):icon)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-1.flex-col","div.flex.flex-1.flex-col",350787913),(cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.pb-2.font-bold.text-gray-11","div.text-sm.pb-2.font-bold.text-gray-11",-573368239),highlight_query(title)], null):null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"cp__cmdk-item-main-text text-sm font-medium text-gray-12 flex items-center gap-2 flex-wrap"], null),(cljs.core.truth_(hide_inline_icon_QMARK_)?highlight_query(text):frontend.handler.block.block_title_with_icon(source_block,highlight_query(text),frontend.components.icon.icon)),text_badge,(cljs.core.truth_(info)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.text-gray-11","span.text-xs.text-gray-11",-1576159523)," \u2014 ",highlight_query(info)], null):null)], null)], null),(cljs.core.truth_((function (){var or__5142__auto__ = value_label;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return value;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs"], null),(cljs.core.truth_((function (){var and__5140__auto__ = value_label;
if(cljs.core.truth_(and__5140__auto__)){
return value;
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-11","span.text-gray-11",1593857756),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.components.cmdk.list_item.to_string(value_label))+": ")], null):null),(cljs.core.truth_((function (){var and__5140__auto__ = value_label;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(value);
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-11","span.text-gray-11",1593857756),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.components.cmdk.list_item.to_string(value_label)))], null):null),(cljs.core.truth_(value)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-11","span.text-gray-11",1593857756),frontend.components.cmdk.list_item.to_string(value)], null):null)], null):null),(cljs.core.truth_(shortcut)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-1 shui-shortcut-row items-center",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(highlighted)?(1):0.9),new cljs.core.Keyword(null,"min-height","min-height",398480837),"20px",new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),"nowrap"], null)], null),logseq.shui.ui.shortcut(shortcut,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden?","aria-hidden?",592108098),true], null))], null):null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$cmdk$list_item$root__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__54499 = cljs.core.first(args__31746__auto__);
var G__54500 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__54499,G__54500) : io.factorhouse.hsx.core.obj_get.call(null,G__54499,G__54500));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"root","root",1191874074,null),args__31746__auto__),frontend$components$cmdk$list_item$root,args__31746__auto__,null);
}
};
var frontend$components$cmdk$list_item$root = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__54504__i = 0, G__54504__a = new Array(arguments.length -  0);
while (G__54504__i < G__54504__a.length) {G__54504__a[G__54504__i] = arguments[G__54504__i + 0]; ++G__54504__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__54504__a,0,null);
} 
return frontend$components$cmdk$list_item$root__delegate.call(this,args__31746__auto__);};
frontend$components$cmdk$list_item$root.cljs$lang$maxFixedArity = 0;
frontend$components$cmdk$list_item$root.cljs$lang$applyTo = (function (arglist__54505){
var args__31746__auto__ = cljs.core.seq(arglist__54505);
return frontend$components$cmdk$list_item$root__delegate(args__31746__auto__);
});
frontend$components$cmdk$list_item$root.cljs$core$IFn$_invoke$arity$variadic = frontend$components$cmdk$list_item$root__delegate;
return frontend$components$cmdk$list_item$root;
})()
;
var memo_comp__31747__auto__ = (function (){var G__54501 = comp__31745__auto__;
var G__54502 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__54501,G__54502) : io.factorhouse.hsx.core.react_memo.call(null,G__54501,G__54502));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"root");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.cmdk.list_item.js.map
