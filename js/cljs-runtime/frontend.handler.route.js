goog.provide('frontend.handler.route');
/**
 * If `push` is truthy, previous page will be left in history.
 */
frontend.handler.route.redirect_BANG_ = (function frontend$handler$route$redirect_BANG_(p__66024){
var map__66025 = p__66024;
var map__66025__$1 = cljs.core.__destructure_map(map__66025);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66025__$1,new cljs.core.Keyword(null,"to","to",192099007));
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66025__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66025__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var push = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66025__$1,new cljs.core.Keyword(null,"push","push",799791267),true);
(logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));

var route_fn_66046 = (cljs.core.truth_(push)?reitit.frontend.easy.push_state:reitit.frontend.easy.replace_state);
(route_fn_66046.cljs$core$IFn$_invoke$arity$3 ? route_fn_66046.cljs$core$IFn$_invoke$arity$3(to,path_params,query_params) : route_fn_66046.call(null,to,path_params,query_params));

return null;
});
frontend.handler.route.redirect_to_home_BANG_ = (function frontend$handler$route$redirect_to_home_BANG_(var_args){
var G__66027 = arguments.length;
switch (G__66027) {
case 0:
return frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$1(true);
}));

(frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (pub_event_QMARK_){
if(cljs.core.truth_(pub_event_QMARK_)){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"redirect-to-home","redirect-to-home",236144576)], null));
} else {
}

return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"home","home",-74557309)], null));
}));

(frontend.handler.route.redirect_to_home_BANG_.cljs$lang$maxFixedArity = 1);

frontend.handler.route.history_length = (function frontend$handler$route$history_length(){
return window.history.length;
});
frontend.handler.route.history_go_back_BANG_ = (function frontend$handler$route$history_go_back_BANG_(){
return window.history.back();
});
/**
 * Leave the current history entry by going back to the previous page/block.
 * Replaces the current entry with home when there is no previous history entry.
 */
frontend.handler.route.redirect_to_previous_BANG_ = (function frontend$handler$route$redirect_to_previous_BANG_(){
if((frontend.handler.route.history_length() > (1))){
return frontend.handler.route.history_go_back_BANG_();
} else {
return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"push","push",799791267),false], null));
}
});
frontend.handler.route.redirect_to_all_pages_BANG_ = (function frontend$handler$route$redirect_to_all_pages_BANG_(){
return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"all-pages","all-pages",1017563062)], null));
});
frontend.handler.route.redirect_to_graph_view_BANG_ = (function frontend$handler$route$redirect_to_graph_view_BANG_(){
return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"graph","graph",1558099509)], null));
});
frontend.handler.route.redirect_to_all_graphs = (function frontend$handler$route$redirect_to_all_graphs(){
return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"graphs","graphs",-1584479112)], null));
});
if(frontend.util.web_platform_QMARK_){
frontend.handler.route.default_page_route = (function frontend$handler$route$default_page_route(var_args){
var G__66029 = arguments.length;
switch (G__66029) {
case 1:
return frontend.handler.route.default_page_route.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.route.default_page_route.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.route.default_page_route.cljs$core$IFn$_invoke$arity$1 = (function (page_name_or_block_uuid){
return frontend.handler.route.default_page_route.cljs$core$IFn$_invoke$arity$2(page_name_or_block_uuid,null);
}));

(frontend.handler.route.default_page_route.cljs$core$IFn$_invoke$arity$2 = (function (page_name_or_block_uuid,route_info){
if(cljs.core.truth_(new cljs.core.Keyword(null,"block-route-name","block-route-name",1558267328).cljs$core$IFn$_invoke$arity$1(route_info))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"page-block","page-block",504302814),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"block-page-name","block-page-name",158092942).cljs$core$IFn$_invoke$arity$1(route_info),new cljs.core.Keyword(null,"block-route-name","block-route-name",1558267328),new cljs.core.Keyword(null,"block-route-name","block-route-name",1558267328).cljs$core$IFn$_invoke$arity$1(route_info)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),((typeof page_name_or_block_uuid === 'string')?(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name_or_block_uuid) : frontend.util.page_name_sanity_lc.call(null,page_name_or_block_uuid)):(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_name_or_block_uuid)))], null)], null);
}
}));

(frontend.handler.route.default_page_route.cljs$lang$maxFixedArity = 2);

} else {
frontend.handler.route.default_page_route = (function frontend$handler$route$default_page_route(var_args){
var G__66031 = arguments.length;
switch (G__66031) {
case 1:
return frontend.handler.route.default_page_route.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.route.default_page_route.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.route.default_page_route.cljs$core$IFn$_invoke$arity$1 = (function (page_name){
return frontend.handler.route.default_page_route.cljs$core$IFn$_invoke$arity$2(page_name,null);
}));

(frontend.handler.route.default_page_route.cljs$core$IFn$_invoke$arity$2 = (function (page_name,_route_info){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_name))], null)], null);
}));

(frontend.handler.route.default_page_route.cljs$lang$maxFixedArity = 2);

}
frontend.handler.route.current_graph_query_params = (function frontend$handler$route$current_graph_query_params(){
var temp__5825__auto__ = frontend.handler.graph.current_graph_id();
if(cljs.core.truth_(temp__5825__auto__)){
var graph_id = temp__5825__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"graph-id","graph-id",-205404489),graph_id], null);
} else {
return null;
}
});
frontend.handler.route.merge_query_params = (function frontend$handler$route$merge_query_params(route,params){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(route,new cljs.core.Keyword(null,"query-params","query-params",900640534),cljs.core.merge,params);
});
frontend.handler.route._LT_page_route_info = (function frontend$handler$route$_LT_page_route_info(page_name){
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-page-route-info","thread-api/get-page-route-info",-755869939),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,page_name], 0));
} else {
return null;
}
});
/**
 * `page-name` can be a block uuid or name, prefer to use uuid than name when possible
 */
frontend.handler.route.redirect_to_page_BANG_ = (function frontend$handler$route$redirect_to_page_BANG_(var_args){
var G__66033 = arguments.length;
switch (G__66033) {
case 1:
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (page_name){
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$2(page_name,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (page_name,p__66034){
var map__66035 = p__66034;
var map__66035__$1 = cljs.core.__destructure_map(map__66035);
var anchor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66035__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
var push = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66035__$1,new cljs.core.Keyword(null,"push","push",799791267));
var click_from_recent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66035__$1,new cljs.core.Keyword(null,"click-from-recent?","click-from-recent?",-1191845464),false);
var block_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66035__$1,new cljs.core.Keyword(null,"block-id","block-id",-70582834));
var ignore_alias_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66035__$1,new cljs.core.Keyword(null,"ignore-alias?","ignore-alias?",1336725364));
if(((cljs.core.uuid_QMARK_(page_name)) || (((typeof page_name === 'string') && ((!(clojure.string.blank_QMARK_(page_name)))))))){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.route._LT_page_route_info(page_name)),(function (route_info){
return promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not(frontend.config.dev_QMARK_);
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(logseq.common.config.recycle_page_name,new cljs.core.Keyword(null,"page-title","page-title",-915898735).cljs$core$IFn$_invoke$arity$1(route_info));
if(and__5140__auto____$1){
var or__5142__auto__ = (function (){var and__5140__auto____$2 = new cljs.core.Keyword(null,"hidden?","hidden?",1339691380).cljs$core$IFn$_invoke$arity$1(route_info);
if(cljs.core.truth_(and__5140__auto____$2)){
return cljs.core.not(new cljs.core.Keyword(null,"property?","property?",2060031741).cljs$core$IFn$_invoke$arity$1(route_info));
} else {
return and__5140__auto____$2;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto____$2 = new cljs.core.Keyword(null,"built-in?","built-in?",2078421512).cljs$core$IFn$_invoke$arity$1(route_info);
if(cljs.core.truth_(and__5140__auto____$2)){
return new cljs.core.Keyword(null,"private-built-in?","private-built-in?",839002398).cljs$core$IFn$_invoke$arity$1(route_info);
} else {
return and__5140__auto____$2;
}
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nav","cannot-go-to-internal-page","nav/cannot-go-to-internal-page",-593280125)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671)):(function (){var temp__5823__auto__ = (function (){var and__5140__auto__ = cljs.core.not(ignore_alias_QMARK_);
if(and__5140__auto__){
return new cljs.core.Keyword(null,"alias-source-uuid","alias-source-uuid",94807613).cljs$core$IFn$_invoke$arity$1(route_info);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var source_uuid = temp__5823__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.route._LT_page_route_info(source_uuid)),(function (source_route_info){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"alias-source-id","alias-source-id",-409045471).cljs$core$IFn$_invoke$arity$1(route_info);
if(cljs.core.truth_(temp__5825__auto__)){
var source_id = temp__5825__auto__;
return frontend.handler.recent.add_page_to_recent_BANG_(source_id,click_from_recent_QMARK_);
} else {
return null;
}
})()),(function (___27434__auto__){
return promesa.protocols._promise((function (){var m = (function (){var G__66036 = frontend.handler.route.merge_query_params(frontend.handler.route.default_page_route.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(source_uuid)),source_route_info),frontend.handler.route.current_graph_query_params());
var G__66036__$1 = (cljs.core.truth_(block_id)?frontend.handler.route.merge_query_params(G__66036,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),(""+"ls-block-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id))], null)):G__66036);
var G__66036__$2 = (cljs.core.truth_(anchor)?frontend.handler.route.merge_query_params(G__66036__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),anchor], null)):G__66036__$1);
if(cljs.core.boolean_QMARK_(push)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66036__$2,new cljs.core.Keyword(null,"push","push",799791267),push);
} else {
return G__66036__$2;
}
})();
return frontend.handler.route.redirect_BANG_(m);
})());
}));
}));
}));
} else {
var temp__5825__auto___66051 = new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(route_info);
if(cljs.core.truth_(temp__5825__auto___66051)){
var db_id_66052 = temp__5825__auto___66051;
frontend.handler.recent.add_page_to_recent_BANG_(db_id_66052,click_from_recent_QMARK_);
} else {
}

var m = (function (){var G__66037 = frontend.handler.route.merge_query_params(frontend.handler.route.default_page_route.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_name)),route_info),frontend.handler.route.current_graph_query_params());
var G__66037__$1 = (cljs.core.truth_(block_id)?frontend.handler.route.merge_query_params(G__66037,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),(""+"ls-block-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id))], null)):G__66037);
var G__66037__$2 = (cljs.core.truth_(anchor)?frontend.handler.route.merge_query_params(G__66037__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),anchor], null)):G__66037__$1);
if(cljs.core.boolean_QMARK_(push)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66037__$2,new cljs.core.Keyword(null,"push","push",799791267),push);
} else {
return G__66037__$2;
}
})();
return frontend.handler.route.redirect_BANG_(m);
}
})()));
}));
}));
} else {
return null;
}
}));

(frontend.handler.route.redirect_to_page_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.route.built_in_page_title = (function frontend$handler$route$built_in_page_title(page_name){
var G__66038 = page_name;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("common-config","library-page-name","common-config/library-page-name",310273579,null),G__66038)){
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("library","title","library/title",667446050)], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("common-config","quick-add-page-name","common-config/quick-add-page-name",319493435,null),G__66038)){
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor.quick-add","title","editor.quick-add/title",-1953436817)], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("common-config","recycle-page-name","common-config/recycle-page-name",671810660,null),G__66038)){
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("storage.recycle","title","storage.recycle/title",-1988135985)], 0));
} else {
return null;

}
}
}
});
frontend.handler.route.static_title = (function frontend$handler$route$static_title(name,path_params){
var G__66039 = name;
var G__66039__$1 = (((G__66039 instanceof cljs.core.Keyword))?G__66039.fqn:null);
switch (G__66039__$1) {
case "home":
return "Logseq";

break;
case "graphs":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("mobile.tab","graphs","mobile.tab/graphs",588454941)], 0));

break;
case "graph":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nav","graph","nav/graph",1552998074)], 0));

break;
case "all-files":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nav","all-files","nav/all-files",1119972926)], 0));

break;
case "all-pages":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nav.all-pages","title","nav.all-pages/title",-1891146892)], 0));

break;
case "all-journals":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nav","all-journals","nav/all-journals",-346943122)], 0));

break;
case "file":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file","title","file/title",629185379),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(path_params)], 0));

break;
case "new-page":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","create","page/create",-1304816391)], 0));

break;
case "tag":
return (""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(path_params)));

break;
case "diff":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","diff","graph/diff",-1989105971)], 0));

break;
case "settings":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nav","settings","nav/settings",1557080534)], 0));

break;
case "import":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","title","import/title",1984896332)], 0));

break;
default:
return "Logseq";

}
});
frontend.handler.route.format_page_route_title = (function frontend$handler$route$format_page_route_title(p__66040){
var map__66041 = p__66040;
var map__66041__$1 = cljs.core.__destructure_map(map__66041);
var page_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66041__$1,new cljs.core.Keyword(null,"page-title","page-title",-915898735));
var block_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66041__$1,new cljs.core.Keyword(null,"block-title","block-title",1222645287));
var or__5142__auto__ = (cljs.core.truth_(page_title)?((logseq.common.util.uuid_string_QMARK_(page_title))?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","untitled","ui/untitled",301271588)], 0)):(function (){var or__5142__auto__ = frontend.handler.route.built_in_page_title(page_title);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return page_title;
}
})()):null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (cljs.core.truth_(block_title)?(function (){var content = logseq.graph_parser.text.remove_level_spaces.cljs$core$IFn$_invoke$arity$3(block_title,new cljs.core.Keyword(null,"markdown","markdown",1227225089),logseq.common.config.block_pattern);
if((cljs.core.count(content) > (48))){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(0),(48)))+"...");
} else {
return content;
}
})():null);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return "Logseq";
}
}
});
frontend.handler.route._LT_page_route_title = (function frontend$handler$route$_LT_page_route_title(route_name){
var temp__5823__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5823__auto__)){
var repo = temp__5823__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-route-title","thread-api/get-route-title",564574075),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,route_name], 0))),(function (title_info){
return promesa.protocols._promise(frontend.handler.route.format_page_route_title(title_info));
}));
}));
} else {
return "Logseq";
}
});
frontend.handler.route.get_title = (function frontend$handler$route$get_title(name,path_params){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),name)){
return frontend.handler.route._LT_page_route_title(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(path_params));
} else {
return promesa.core.resolved(frontend.handler.route.static_title(name,path_params));
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.route !== 'undefined') && (typeof frontend.handler.route._STAR_page_title_update_id !== 'undefined')){
} else {
frontend.handler.route._STAR_page_title_update_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
frontend.handler.route.apply_page_title_BANG_ = (function frontend$handler$route$apply_page_title_BANG_(title){
frontend.util.set_title_BANG_(title);

return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"set-window-title","set-window-title",78425348),title], 0));
});
frontend.handler.route.update_page_title_BANG_ = (function frontend$handler$route$update_page_title_BANG_(route){
var update_id = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.handler.route._STAR_page_title_update_id,cljs.core.inc);
var map__66042 = route;
var map__66042__$1 = cljs.core.__destructure_map(map__66042);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66042__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66042__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.route.get_title(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(data),path_params)),(function (title){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.extensions.pdf.utils.hls_file_QMARK_(title)),(function (hls_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(hls_QMARK_)?frontend.extensions.pdf.utils.fix_local_asset_pagename(title):title)),(function (title__$1){
return promesa.protocols._promise(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(update_id,cljs.core.deref(frontend.handler.route._STAR_page_title_update_id)))?(function (){
frontend.handler.route.apply_page_title_BANG_(title__$1);

return setTimeout((function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(update_id,cljs.core.deref(frontend.handler.route._STAR_page_title_update_id))){
return frontend.handler.route.apply_page_title_BANG_(title__$1);
} else {
return null;
}
}),(0));
})()
:null));
}));
}));
}));
}));
});
frontend.handler.route.update_page_label_BANG_ = (function frontend$handler$route$update_page_label_BANG_(route){
var map__66043 = route;
var map__66043__$1 = cljs.core.__destructure_map(map__66043);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66043__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var temp__5825__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__5825__auto__)){
var data_name = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.route.get_title(data_name,new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(route))),(function (title){
return promesa.protocols._promise((document.body.dataset.page = title));
}));
}));
} else {
return null;
}
});
frontend.handler.route.jump_to_anchor_BANG_ = (function frontend$handler$route$jump_to_anchor_BANG_(anchor_text){
if(cljs.core.truth_(anchor_text)){
setTimeout((function (){
return frontend.handler.ui.highlight_element_BANG_(anchor_text);
}),(200));

var temp__5825__auto__ = new cljs.core.Keyword("editor","virtualized-scroll-fn","editor/virtualized-scroll-fn",-343790237).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0());
if(cljs.core.truth_(temp__5825__auto__)){
var f = temp__5825__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.route.set_route_match_BANG_ = (function frontend$handler$route$set_route_match_BANG_(route){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(route),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(frontend.state.get_route_match()))){
frontend.state.clear_selection_BANG_();
} else {
}

frontend.state.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-match","route-match",-1450985937),route], 0));

frontend.handler.route.update_page_title_BANG_(route);

frontend.handler.route.update_page_label_BANG_(route);

var temp__5825__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"anchor","anchor",1549638489)], null));
if(cljs.core.truth_(temp__5825__auto__)){
var anchor = temp__5825__auto__;
return frontend.handler.route.jump_to_anchor_BANG_(anchor);
} else {
return null;
}
});
frontend.handler.route.restore_scroll_pos = (function frontend$handler$route$restore_scroll_pos(){
return setTimeout((function (){
return frontend.util.scroll_to.cljs$core$IFn$_invoke$arity$3(frontend.util.app_scroll_container_node.cljs$core$IFn$_invoke$arity$0(),frontend.state.get_saved_scroll_position.cljs$core$IFn$_invoke$arity$0(),false);
}),(100));
});
frontend.handler.route.go_to_search_BANG_ = (function frontend$handler$route$go_to_search_BANG_(var_args){
var G__66045 = arguments.length;
switch (G__66045) {
case 1:
return frontend.handler.route.go_to_search_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.route.go_to_search_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.route.go_to_search_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (search_mode){
return frontend.handler.route.go_to_search_BANG_.cljs$core$IFn$_invoke$arity$2(search_mode,null);
}));

(frontend.handler.route.go_to_search_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (search_mode,args){
frontend.handler.search.clear_search_BANG_.cljs$core$IFn$_invoke$arity$1(false);

if(cljs.core.truth_(search_mode)){
frontend.state.set_search_mode_BANG_.cljs$core$IFn$_invoke$arity$2(search_mode,args);
} else {
}

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("go","search","go/search",1564957958)], null));
}));

(frontend.handler.route.go_to_search_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.route.sidebar_journals_BANG_ = (function frontend$handler$route$sidebar_journals_BANG_(){
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_journal_page_by_day(repo,frontend.date.today_journal_day())),(function (page){
return promesa.protocols._promise((function (){var temp__5825__auto____$1 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(temp__5825__auto____$1)){
var page_id = temp__5825__auto____$1;
return frontend.state.sidebar_add_block_BANG_(repo,page_id,new cljs.core.Keyword(null,"page","page",849072397));
} else {
return null;
}
})());
}));
}));
} else {
return null;
}
});
frontend.handler.route.go_to_journals_BANG_ = (function frontend$handler$route$go_to_journals_BANG_(){
frontend.state.clear_edit_BANG_();

var route_66055 = ((frontend.state.custom_home_page_QMARK_())?new cljs.core.Keyword(null,"all-journals","all-journals",-347015095):new cljs.core.Keyword(null,"home","home",-74557309));
frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),route_66055], null));

return frontend.util.scroll_to_top.cljs$core$IFn$_invoke$arity$0();
});

//# sourceMappingURL=frontend.handler.route.js.map
