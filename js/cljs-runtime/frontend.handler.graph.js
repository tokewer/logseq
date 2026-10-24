goog.provide('frontend.handler.graph');
frontend.handler.graph.graph_registry_key = "ls-graph-registry";
frontend.handler.graph.normalize_registry_entry = logseq.common.graph_registry.normalize_entry;
frontend.handler.graph.resolve_registry_target = logseq.common.graph_registry.resolve_target;
frontend.handler.graph.set_tab_graph_BANG_ = frontend.graph_tab.set_tab_graph_BANG_;
frontend.handler.graph.get_tab_graph = frontend.graph_tab.get_tab_graph;
frontend.handler.graph.storage_registry__GT_clj = (function frontend$handler$graph$storage_registry__GT_clj(registry){
var registry_SINGLEQUOTE_ = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(registry);
if(cljs.core.sequential_QMARK_(registry_SINGLEQUOTE_)){
return cljs.core.vec(registry_SINGLEQUOTE_);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
frontend.handler.graph._LT_get_graph_registry = (function frontend$handler$graph$_LT_get_graph_registry(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.idb.get_item(frontend.handler.graph.graph_registry_key)),(function (registry){
return promesa.protocols._promise(frontend.handler.graph.storage_registry__GT_clj(registry));
}));
}));
});
frontend.handler.graph._LT_upsert_graph_registry_entry_BANG_ = (function frontend$handler$graph$_LT_upsert_graph_registry_entry_BANG_(entry){
var entry_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((frontend.handler.graph.normalize_registry_entry.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.graph.normalize_registry_entry.cljs$core$IFn$_invoke$arity$1(entry) : frontend.handler.graph.normalize_registry_entry.call(null,entry)),new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336),Date.now());
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["upsertGraphRegistryEntry",entry_SINGLEQUOTE_], 0));
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.graph._LT_get_graph_registry()),(function (registry){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.common.graph_registry.upsert_entry(registry,entry_SINGLEQUOTE_)),(function (registry_SINGLEQUOTE_){
return promesa.protocols._promise(frontend.common.idb.set_item_BANG_(frontend.handler.graph.graph_registry_key,cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(registry_SINGLEQUOTE_)));
}));
}));
}));
}
});
frontend.handler.graph.repo_summary__GT_registry_entry = (function frontend$handler$graph$repo_summary__GT_registry_entry(p__65440){
var map__65441 = p__65440;
var map__65441__$1 = cljs.core.__destructure_map(map__65441);
var repo = map__65441__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65441__$1,new cljs.core.Keyword(null,"url","url",276297046));
var GraphName = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65441__$1,new cljs.core.Keyword(null,"GraphName","GraphName",-960661337));
var GraphUUID = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65441__$1,new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531));
var metadata = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65441__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));
var sync_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65441__$1,new cljs.core.Keyword(null,"sync-meta","sync-meta",-164400022));
if(cljs.core.truth_(url)){
var graph_id = (function (){var G__65442 = (function (){var or__5142__auto__ = GraphUUID;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword("kv","value","kv/value",305981670).cljs$core$IFn$_invoke$arity$1(metadata);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return cljs.core.second(sync_meta);
}
}
})();
if((G__65442 == null)){
return null;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65442));
}
})();
var local_graph_id = (function (){var G__65443 = new cljs.core.Keyword(null,"local-graph-id","local-graph-id",-1284410817).cljs$core$IFn$_invoke$arity$1(repo);
if((G__65443 == null)){
return null;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65443));
}
})();
if(cljs.core.truth_((function (){var or__5142__auto__ = graph_id;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return local_graph_id;
}
})())){
var G__65448 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"repo","repo",-1999060679),url,new cljs.core.Keyword(null,"graph-name","graph-name",416773857),(function (){var or__5142__auto__ = GraphName;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.common.config.strip_leading_db_version_prefix(url);
}
})(),new cljs.core.Keyword(null,"graph-id","graph-id",-205404489),graph_id,new cljs.core.Keyword(null,"local-graph-id","local-graph-id",-1284410817),local_graph_id], null);
return (frontend.handler.graph.normalize_registry_entry.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.graph.normalize_registry_entry.cljs$core$IFn$_invoke$arity$1(G__65448) : frontend.handler.graph.normalize_registry_entry.call(null,G__65448));
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.graph.registry_from_repo_summaries = (function frontend$handler$graph$registry_from_repo_summaries(repos){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(frontend.handler.graph.repo_summary__GT_registry_entry,repos);
});
frontend.handler.graph.resolve_startup_repo = (function frontend$handler$graph$resolve_startup_repo(registry,repos,url_target,tab_graph,current_repo){
var registry_SINGLEQUOTE_ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(registry,frontend.handler.graph.registry_from_repo_summaries(repos));
var tab_repo = new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1(tab_graph);
var tab_graph_id = new cljs.core.Keyword(null,"graph-id","graph-id",-205404489).cljs$core$IFn$_invoke$arity$1(tab_graph);
var repo_exists_QMARK_ = (function (repo){
return cljs.core.some((function (p1__65450_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__65450_SHARP_));
}),repos);
});
var url_target_repo = new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1((frontend.handler.graph.resolve_registry_target.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.graph.resolve_registry_target.cljs$core$IFn$_invoke$arity$2(registry_SINGLEQUOTE_,url_target) : frontend.handler.graph.resolve_registry_target.call(null,registry_SINGLEQUOTE_,url_target)));
var tab_target_repo = (((((url_target_repo == null)) && (clojure.string.blank_QMARK_(new cljs.core.Keyword(null,"graph-id","graph-id",-205404489).cljs$core$IFn$_invoke$arity$1(url_target)))))?(function (){var or__5142__auto__ = (cljs.core.truth_((function (){var and__5140__auto__ = (!(clojure.string.blank_QMARK_(tab_repo)));
if(and__5140__auto__){
return repo_exists_QMARK_(tab_repo);
} else {
return and__5140__auto__;
}
})())?tab_repo:null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1((function (){var G__65457 = registry_SINGLEQUOTE_;
var G__65458 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"graph-id","graph-id",-205404489),tab_graph_id], null);
return (frontend.handler.graph.resolve_registry_target.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.graph.resolve_registry_target.cljs$core$IFn$_invoke$arity$2(G__65457,G__65458) : frontend.handler.graph.resolve_registry_target.call(null,G__65457,G__65458));
})());
}
})():null);
var or__5142__auto__ = url_target_repo;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = tab_target_repo;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = current_repo;
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.first(repos));
}
}
}
});
frontend.handler.graph.current_graph_id = (function frontend$handler$graph$current_graph_id(){
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
var map__65462 = (frontend.handler.graph.get_tab_graph.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.graph.get_tab_graph.cljs$core$IFn$_invoke$arity$0() : frontend.handler.graph.get_tab_graph.call(null));
var map__65462__$1 = cljs.core.__destructure_map(map__65462);
var tab_repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65462__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679));
var graph_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65462__$1,new cljs.core.Keyword(null,"graph-id","graph-id",-205404489));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(repo,tab_repo)) && (cljs.core.seq(graph_id)))){
return graph_id;
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.graph._LT_ensure_local_graph_uuid_BANG_ = (function frontend$handler$graph$_LT_ensure_local_graph_uuid_BANG_(repo){
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","ensure-local-graph-uuid","thread-api/ensure-local-graph-uuid",1278205019),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo], 0));
});
frontend.handler.graph.remember_current_graph_id_in_tab_BANG_ = (function frontend$handler$graph$remember_current_graph_id_in_tab_BANG_(){
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-graph-uuid","thread-api/get-graph-uuid",-1291239316),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo], 0))),(function (graph_id){
return promesa.protocols._promise((cljs.core.truth_(graph_id)?(function (){var G__65469 = repo;
var G__65470 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(graph_id));
return (frontend.handler.graph.set_tab_graph_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.graph.set_tab_graph_BANG_.cljs$core$IFn$_invoke$arity$2(G__65469,G__65470) : frontend.handler.graph.set_tab_graph_BANG_.call(null,G__65469,G__65470));
})():null));
}));
}));
} else {
return null;
}
});
frontend.handler.graph._LT_upsert_current_graph_registry_BANG_ = (function frontend$handler$graph$_LT_upsert_current_graph_registry_BANG_(){
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.graph._LT_ensure_local_graph_uuid_BANG_(repo)),(function (local_graph_uuid){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-graph-uuid","thread-api/get-graph-uuid",-1291239316),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo], 0))),(function (graph_uuid){
return promesa.protocols._promise(frontend.handler.graph._LT_upsert_graph_registry_entry_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"graph-name","graph-name",416773857),logseq.common.config.strip_leading_db_version_prefix(repo),new cljs.core.Keyword(null,"local-graph-id","local-graph-id",-1284410817),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(local_graph_uuid)),new cljs.core.Keyword(null,"graph-id","graph-id",-205404489),(function (){var G__65474 = (function (){var or__5142__auto__ = graph_uuid;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return local_graph_uuid;
}
})();
if((G__65474 == null)){
return null;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65474));
}
})()], null)));
}));
}));
}));
} else {
return null;
}
});
frontend.handler.graph.settle_metadata_to_local_BANG_ = (function frontend$handler$graph$settle_metadata_to_local_BANG_(m){
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
try{var k = new cljs.core.Keyword(null,"ls-graphs-metadata","ls-graphs-metadata",-1508025687);
var ret = (function (){var or__5142__auto__ = frontend.storage.get(k);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var ret__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(ret,repo,cljs.core.merge,m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_v","_v",-1396693276),Date.now()], null));
return frontend.storage.set(k,ret__$1);
}catch (e65479){if((e65479 instanceof Error)){
var e = e65479;
return console.warn(e);
} else {
throw e65479;

}
}} else {
return null;
}
});
frontend.handler.graph.get_metadata_local = (function frontend$handler$graph$get_metadata_local(){
var k = new cljs.core.Keyword(null,"ls-graphs-metadata","ls-graphs-metadata",-1508025687);
return frontend.storage.get(k);
});

//# sourceMappingURL=frontend.handler.graph.js.map
