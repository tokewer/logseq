goog.provide('frontend.components.graph_actions');
frontend.components.graph_actions.redirect_to_node_BANG_ = (function frontend$components$graph_actions$redirect_to_node_BANG_(node){
var temp__5825__auto__ = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(node);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var node_ref = temp__5825__auto__;
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(node_ref);
} else {
return null;
}
});
frontend.components.graph_actions.open_node_in_sidebar_BANG_ = (function frontend$components$graph_actions$open_node_in_sidebar_BANG_(node){
var temp__5825__auto__ = new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__5825__auto__)){
var db_id = temp__5825__auto__;
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),db_id,(cljs.core.truth_(new cljs.core.Keyword(null,"page?","page?",644039860).cljs$core$IFn$_invoke$arity$1(node))?new cljs.core.Keyword(null,"page","page",849072397):new cljs.core.Keyword(null,"block","block",664686210)));
} else {
return null;
}
});
frontend.components.graph_actions.node_preview_ref = (function frontend$components$graph_actions$node_preview_ref(node){
var temp__5823__auto__ = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(node);
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var node_ref = temp__5823__auto__;
return promesa.core.resolved((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_ref)));
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__5825__auto__)){
var db_id = temp__5825__auto__;
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null),db_id], 0));
} else {
return null;
}
})()),(function (block){
return promesa.protocols._promise((function (){var or__5142__auto__ = (function (){var G__90541 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
if((G__90541 == null)){
return null;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__90541));
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"page?","page?",644039860).cljs$core$IFn$_invoke$arity$1(node))){
return new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(node);
} else {
return null;
}
}
})());
}));
}));
}
});
frontend.components.graph_actions.preview_node_BANG_ = (function frontend$components$graph_actions$preview_node_BANG_(node,event){
if(cljs.core.truth_(node)){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.graph_actions.node_preview_ref(node)),(function (page_name){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__90545 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"repo","repo",-1999060679),frontend.state.get_current_repo(),new cljs.core.Keyword(null,"page-name","page-name",974981762),page_name,new cljs.core.Keyword(null,"scroll-container","scroll-container",-1938238550),(function (){var G__90546 = document;
if((G__90546 == null)){
return null;
} else {
return G__90546.querySelector(".ls-preview-popup");
}
})(),new cljs.core.Keyword(null,"preview?","preview?",590561578),true], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(node))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__90545,new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(node));
} else {
return G__90545;
}
})()),(function (page_preview_option){
return promesa.protocols._mcat(promesa.protocols._promise((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tippy-wrapper.as-page","div.tippy-wrapper.as-page",-1396021158),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"min(760px, calc(100vh - 64px))",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),(64)], null)], null),(function (){var temp__5825__auto__ = frontend.state.get_page_blocks_cp();
if(cljs.core.truth_(temp__5825__auto__)){
var page_cp = temp__5825__auto__;
return (page_cp.cljs$core$IFn$_invoke$arity$1 ? page_cp.cljs$core$IFn$_invoke$arity$1(page_preview_option) : page_cp.call(null,page_preview_option));
} else {
return null;
}
})()], null);
})),(function (content){
return promesa.protocols._promise((function (){var G__90549 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event.clientX,event.clientY], null);
var G__90550 = content;
var G__90551 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"graph-node-preview","graph-node-preview",-1934990690),new cljs.core.Keyword(null,"root-props","root-props",-1015460595),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modal","modal",-1031880850),false], null),new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"ls-preview-popup",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"min(1120px, calc(100vw - 16px))",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"none",new cljs.core.Keyword(null,"color","color",1011675173),"var(--lx-gray-12, var(--ls-primary-text-color))",new cljs.core.Keyword(null,"background-color","background-color",570434026),"var(--lx-gray-01, var(--ls-primary-background-color))"], null),new cljs.core.Keyword(null,"onInteractOutside","onInteractOutside",-1720265251),(function (e){
return e.preventDefault();
})], null),new cljs.core.Keyword(null,"as-dropdown?","as-dropdown?",-37553558),false,new cljs.core.Keyword(null,"force-popover?","force-popover?",237318839),true], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__90549,G__90550,G__90551) : logseq.shui.ui.popup_show_BANG_.call(null,G__90549,G__90550,G__90551));
})());
}));
}));
}));
}));
} else {
return null;
}
});
frontend.components.graph_actions.activate_node_BANG_ = (function frontend$components$graph_actions$activate_node_BANG_(node,event){
if(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword("graph","open-in-sidebar?","graph/open-in-sidebar?",1446850044).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var G__90557 = event;
if((G__90557 == null)){
return null;
} else {
return G__90557.shiftKey;
}
}
})())){
return frontend.components.graph_actions.open_node_in_sidebar_BANG_(node);
} else {
return frontend.components.graph_actions.redirect_to_node_BANG_(node);
}
});

//# sourceMappingURL=frontend.components.graph_actions.js.map
