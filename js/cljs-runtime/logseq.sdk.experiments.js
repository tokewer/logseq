goog.provide('logseq.sdk.experiments');
logseq.sdk.experiments.cp_page_editor = (function logseq$sdk$experiments$cp_page_editor(props){
var props1 = logseq.sdk.utils.jsx__GT_clj(props);
var page_name = (function (){var G__46486 = props1;
if((G__46486 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(G__46486);
}
})();
if(cljs.core.truth_(page_name)){
return frontend.components.page.page_cp(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page-name","page-name",974981762),page_name,new cljs.core.Keyword(null,"container-id","container-id",1274665684),frontend.state.get_next_container_id()], null));
} else {
return null;
}
});
goog.exportSymbol('logseq.sdk.experiments.cp_page_editor', logseq.sdk.experiments.cp_page_editor);
logseq.sdk.experiments.register_fenced_code_renderer = (function logseq$sdk$experiments$register_fenced_code_renderer(pid,type,opts){
var temp__5825__auto__ = frontend.handler.plugin.get_plugin_inst(pid);
if(cljs.core.truth_(temp__5825__auto__)){
var _pl = temp__5825__auto__;
return frontend.handler.plugin.register_fenced_code_renderer(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid),type,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__46487_SHARP_,p2__46488_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__46487_SHARP_,p2__46488_SHARP_,(opts[cljs.core.name(p2__46488_SHARP_)]));
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"before","before",-1633692388),new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.Keyword(null,"render","render",-1408033454)], null)));
} else {
return null;
}
});
goog.exportSymbol('logseq.sdk.experiments.register_fenced_code_renderer', logseq.sdk.experiments.register_fenced_code_renderer);
logseq.sdk.experiments.register_route_renderer = (function logseq$sdk$experiments$register_route_renderer(pid,key,opts){
var temp__5825__auto__ = frontend.handler.plugin.get_plugin_inst(pid);
if(cljs.core.truth_(temp__5825__auto__)){
var _pl = temp__5825__auto__;
var key__$1 = frontend.util.safe_keyword(key);
return frontend.handler.plugin.register_route_renderer(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid),key__$1,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,k,(function (){var G__46490 = (opts[cljs.core.name(k)]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),k)){
return (function (p1__46489_SHARP_){
if(cljs.core.truth_(p1__46489_SHARP_)){
return frontend.util.safe_keyword(p1__46489_SHARP_);
} else {
return key__$1;
}
})(G__46490);
} else {
return G__46490;
}
})());
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.Keyword(null,"render","render",-1408033454)], null)));
} else {
return null;
}
});
goog.exportSymbol('logseq.sdk.experiments.register_route_renderer', logseq.sdk.experiments.register_route_renderer);
logseq.sdk.experiments.register_daemon_renderer = (function logseq$sdk$experiments$register_daemon_renderer(pid,key,opts){
var temp__5825__auto__ = frontend.handler.plugin.get_plugin_inst(pid);
if(cljs.core.truth_(temp__5825__auto__)){
var _pl = temp__5825__auto__;
return frontend.handler.plugin.register_daemon_renderer(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid),key,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__46491_SHARP_,p2__46492_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__46491_SHARP_,p2__46492_SHARP_,(opts[cljs.core.name(p2__46492_SHARP_)]));
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"before","before",-1633692388),new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.Keyword(null,"render","render",-1408033454)], null)));
} else {
return null;
}
});
goog.exportSymbol('logseq.sdk.experiments.register_daemon_renderer', logseq.sdk.experiments.register_daemon_renderer);
/**
 * Extract keys from a JS opts object into a clj map.
 * `transforms` is an optional map of {keyword transform-fn} for per-key processing.
 * Keys whose JS value is nil/undefined are omitted.
 */
logseq.sdk.experiments.extract_js_renderer_opts = (function logseq$sdk$experiments$extract_js_renderer_opts(opts,ks,transforms){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,k){
var v = (opts[cljs.core.name(k)]);
if((!((v == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,k,(function (){var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(transforms,k);
if(cljs.core.truth_(temp__5823__auto__)){
var xf = temp__5823__auto__;
return (xf.cljs$core$IFn$_invoke$arity$1 ? xf.cljs$core$IFn$_invoke$arity$1(v) : xf.call(null,v));
} else {
return v;
}
})());
} else {
return r;
}
}),cljs.core.PersistentArrayMap.EMPTY,ks);
});
logseq.sdk.experiments.register_hosted_renderer = (function logseq$sdk$experiments$register_hosted_renderer(pid,key,opts){
var temp__5825__auto__ = frontend.handler.plugin.get_plugin_inst(pid);
if(cljs.core.truth_(temp__5825__auto__)){
var _pl = temp__5825__auto__;
return frontend.handler.plugin.register_hosted_renderer(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid),key,logseq.sdk.experiments.extract_js_renderer_opts(opts,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.Keyword(null,"render","render",-1408033454)], null),null));
} else {
return null;
}
});
goog.exportSymbol('logseq.sdk.experiments.register_hosted_renderer', logseq.sdk.experiments.register_hosted_renderer);
logseq.sdk.experiments.register_block_properties_renderer = (function logseq$sdk$experiments$register_block_properties_renderer(pid,key,opts){
var temp__5825__auto__ = frontend.handler.plugin.get_plugin_inst(pid);
if(cljs.core.truth_(temp__5825__auto__)){
var _pl = temp__5825__auto__;
var clj_opts = logseq.sdk.experiments.extract_js_renderer_opts(opts,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.Keyword(null,"render","render",-1408033454)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"when","when",-576417306),(function (v){
if(cljs.core.fn_QMARK_(v)){
return v;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}
})], null));
return frontend.handler.plugin.register_hosted_renderer(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid),key,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(clj_opts,new cljs.core.Keyword(null,"type","type",1174270348),"block-properties"));
} else {
return null;
}
});
goog.exportSymbol('logseq.sdk.experiments.register_block_properties_renderer', logseq.sdk.experiments.register_block_properties_renderer);
logseq.sdk.experiments.register_block_renderer = (function logseq$sdk$experiments$register_block_renderer(pid,key,opts){
var temp__5825__auto__ = frontend.handler.plugin.get_plugin_inst(pid);
if(cljs.core.truth_(temp__5825__auto__)){
var _pl = temp__5825__auto__;
var when_predicate = (opts["when"]);
if((((!((when_predicate == null)))) && ((!(cljs.core.fn_QMARK_(when_predicate)))))){
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("logseq.sdk.experiments",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"register-block-renderer-invalid-when","register-block-renderer-invalid-when",1613877354),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pid","pid",1018387698),pid,new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"message","message",-406056002),"`when` for registerBlockRenderer must be a synchronous predicate function."], null),new cljs.core.Keyword(null,"line","line",212345235),82], null)),null);
} else {
return null;
}
} else {
var include_children = (opts["includeChildren"]);
var clj_opts = logseq.sdk.experiments.extract_js_renderer_opts(opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.Keyword(null,"render","render",-1408033454)], null),null);
return frontend.handler.plugin.register_hosted_renderer(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid),key,(function (){var G__46493 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(clj_opts,new cljs.core.Keyword(null,"type","type",1174270348),"block");
if((!((include_children == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46493,new cljs.core.Keyword(null,"include-children","include-children",-2064494275),include_children);
} else {
return G__46493;
}
})());
}
} else {
return null;
}
});
goog.exportSymbol('logseq.sdk.experiments.register_block_renderer', logseq.sdk.experiments.register_block_renderer);
logseq.sdk.experiments.register_extensions_enhancer = (function logseq$sdk$experiments$register_extensions_enhancer(pid,type,enhancer){
var temp__5825__auto__ = (function (){var and__5140__auto__ = cljs.core.fn_QMARK_(enhancer);
if(and__5140__auto__){
return frontend.handler.plugin.get_plugin_inst(pid);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var _pl = temp__5825__auto__;
return frontend.handler.plugin.register_extensions_enhancer(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid),type,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enhancer","enhancer",-929020171),enhancer], null));
} else {
return null;
}
});
goog.exportSymbol('logseq.sdk.experiments.register_extensions_enhancer', logseq.sdk.experiments.register_extensions_enhancer);

//# sourceMappingURL=logseq.sdk.experiments.js.map
