goog.provide('electron.listener');
/**
 * Force the callback result to be nil, otherwise, ipc calls could lead to
 *   window crash.
 */
electron.listener.safe_api_call = (function electron$listener$safe_api_call(k,f){
return window.apis.on(k,(function (data){
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(data) : f.call(null,data));

return null;
}));
});
electron.listener.listen_to_electron_BANG_ = (function electron$listener$listen_to_electron_BANG_(){
electron.listener.safe_api_call("graph-lifecycle",(function (data){
var map__38197 = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
var map__38197__$1 = cljs.core.__destructure_map(map__38197);
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38197__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38197__$1,new cljs.core.Keyword(null,"phase","phase",575722892));
var generation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38197__$1,new cljs.core.Keyword(null,"generation","generation",-2132542044));
return frontend.persist_db._LT_invalidate_remote_repo_BANG_.cljs$core$IFn$_invoke$arity$3(repo,phase,generation);
}));

electron.listener.safe_api_call("notification",(function (data){
var map__38198 = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
var map__38198__$1 = cljs.core.__destructure_map(map__38198);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38198__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38198__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var i18n_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38198__$1,new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124));
var i18n_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38198__$1,new cljs.core.Keyword(null,"i18n-args","i18n-args",-1847411217));
var type__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type);
var i18n_key__$1 = (cljs.core.truth_(i18n_key)?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(i18n_key):null);
var content = (cljs.core.truth_(i18n_key__$1)?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t,i18n_key__$1,i18n_args):(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(payload)));
var comp = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),content], null);
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(comp,type__$1,false);
}));

electron.listener.safe_api_call("rebuildSearchIndice",(function (_data){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Rebuild search indices"], 0));

return frontend.handler.search.rebuild_indices_BANG_.cljs$core$IFn$_invoke$arity$0();
}));

electron.listener.safe_api_call("setGitUsernameAndEmail",(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","set-git-username-and-email","modal/set-git-username-and-email",-1189789991)], null));
}));

electron.listener.safe_api_call("setCurrentGraph",(function (){
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var graph = temp__5825__auto__;
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"setCurrentGraph","setCurrentGraph",391110974),graph], 0));
} else {
return null;
}
}));

electron.listener.safe_api_call("redirect",(function (data){
var map__38204 = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
var map__38204__$1 = cljs.core.__destructure_map(map__38204);
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38204__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var payload__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(payload,new cljs.core.Keyword(null,"to","to",192099007),cljs.core.keyword);
return frontend.handler.route.redirect_BANG_(payload__$1);
}));

electron.listener.safe_api_call("redirectWhenExists",(function (data){
var map__38205 = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
var map__38205__$1 = cljs.core.__destructure_map(map__38205);
var page_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38205__$1,new cljs.core.Keyword(null,"page-name","page-name",974981762));
var block_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38205__$1,new cljs.core.Keyword(null,"block-id","block-id",-70582834));
if(cljs.core.truth_(page_name)){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),page_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (page){
return promesa.protocols._promise((cljs.core.truth_(page)?frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$2(page_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block-id","block-id",-70582834),block_id], null)):null));
}));
}));
} else {
if(cljs.core.truth_(block_id)){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),block_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (block){
return promesa.protocols._promise((cljs.core.truth_(block)?frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(block_id):frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("electron","block-not-exist","electron/block-not-exist",-1259878071),block_id], 0)),new cljs.core.Keyword(null,"error","error",-978969032),false)));
}));
}));
} else {
return null;
}
}
}));

electron.listener.safe_api_call("foundInPage",(function (data){
var data_SINGLEQUOTE_ = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","find-in-page","ui/find-in-page",-941396467),new cljs.core.Keyword(null,"matches","matches",635497998)], null),data_SINGLEQUOTE_);

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(document.getElementById("search-in-page-input"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"visibility","visibility",1338380893)], 0));

dommy.core.set_text_BANG_(document.getElementById("search-in-page-placeholder"),"");

return frontend.ui.focus_element("search-in-page-input");
}));

electron.listener.safe_api_call("loginCallback",(function (code){
return frontend.handler.user.login_callback(code);
}));

electron.listener.safe_api_call("quickCapture",(function (args){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","quick-capture","editor/quick-capture",799865811),args], null));
}));

electron.listener.safe_api_call("invokeCommand",(function (args){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","invoke-command","editor/invoke-command",-185441947),args], null));
}));

electron.listener.safe_api_call("openNewWindowOfGraph",(function (repo){
return frontend.handler.ui.open_new_window_or_tab_BANG_(repo);
}));

electron.listener.safe_api_call("invokeLogseqAPI",(function (data){
var sync_id = data.syncId;
var method = data.method;
var ns_method = (function (){var G__38211 = method;
if((G__38211 == null)){
return null;
} else {
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(G__38211,"@");
}
})();
var ns_SINGLEQUOTE_ = cljs.core.first(ns_method);
var method_SINGLEQUOTE_ = cljs.core.last(ns_method);
var args = data.args;
var ret_fn_BANG_ = (function (p1__38192_SHARP_){
return electron.ipc.invoke.cljs$core$IFn$_invoke$arity$variadic((""+new cljs.core.Keyword("electron.server","sync!","electron.server/sync!",749164490)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sync_id)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__38192_SHARP_], 0));
});
var app_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["cli",null,"app",null,"db",null,"editor",null], null), null),ns_SINGLEQUOTE_);
var sdk1 = (window.logseq["api"]);
var sdk2 = (window.logseq["sdk"]);
try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["invokeLogseqAPI:",method,", args:",args], 0));

var methodTarget = ((app_QMARK_)?sdk1:(sdk2[ns_SINGLEQUOTE_]));
if(cljs.core.truth_(methodTarget)){
} else {
throw (new Error((""+"MethodNotExist: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method))));
}

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.promise.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.js_invoke,methodTarget,method_SINGLEQUOTE_,args)),(function (p1__38193_SHARP_){
return ret_fn_BANG_(p1__38193_SHARP_);
})),(function (p1__38194_SHARP_){
console.error("Unexpected error:",p1__38194_SHARP_);

return ret_fn_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),p1__38194_SHARP_.message], null));
}));
}catch (e38213){var e = e38213;
console.error("Unexpected error:",e);

return ret_fn_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}}));

electron.listener.safe_api_call("syncAPIServerState",(function (data){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("electron","server","electron/server",1484164422),cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(data));
}));

return electron.listener.safe_api_call("handbook",(function (data){
var temp__5825__auto__ = (function (){var and__5140__auto__ = data;
if(cljs.core.truth_(and__5140__auto__)){
return data.key;
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var k = temp__5825__auto__;
return frontend.state.open_handbook_pane_BANG_(k);
} else {
return null;
}
}));
});
electron.listener.listen_BANG_ = (function electron$listener$listen_BANG_(){
electron.listener.listen_to_electron_BANG_();

return electron.locale.push_locale_BANG_(frontend.state.get_state(new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017)));
});

//# sourceMappingURL=electron.listener.js.map
