goog.provide('frontend.db.persist');
frontend.db.persist.local_file_based_graph_QMARK_ = (function frontend$db$persist$local_file_based_graph_QMARK_(s){
return ((typeof s === 'string') && (clojure.string.starts_with_QMARK_(s,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.config.db_version_prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.config.file_version_prefix)))));
});
frontend.db.persist.upload_temp_graph_QMARK_ = (function frontend$db$persist$upload_temp_graph_QMARK_(graph_name){
var graph_name__$1 = (function (){var G__67479 = graph_name;
var G__67479__$1 = (((G__67479 == null))?null:(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67479)));
if((G__67479__$1 == null)){
return null;
} else {
return clojure.string.lower_case(G__67479__$1);
}
})();
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("upload-temp",graph_name__$1)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(logseq.common.config.db_version_prefix))+"upload-temp"),graph_name__$1)));
});
frontend.db.persist.get_all_graphs = (function frontend$db$persist$get_all_graphs(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.persist_db._LT_list_db()),(function (repos){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__67483){
var map__67484 = p__67483;
var map__67484__$1 = cljs.core.__destructure_map(map__67484);
var repo = map__67484__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67484__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.Keyword(null,"name","name",1843675177),logseq.common.config.canonicalize_db_version_repo(name));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__67485){
var map__67486 = p__67485;
var map__67486__$1 = cljs.core.__destructure_map(map__67486);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67486__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return ((frontend.db.persist.local_file_based_graph_QMARK_(name)) || (frontend.db.persist.upload_temp_graph_QMARK_(name)));
}),repos))),(function (repos_SINGLEQUOTE_){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(frontend.util.electron_QMARK_())?electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["getGraphs"], 0)):null)),(function (electron_disk_graphs){
return promesa.protocols._promise(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(repos_SINGLEQUOTE_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (repo_name){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),logseq.common.config.canonicalize_db_version_repo(repo_name)], null);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(frontend.db.persist.upload_temp_graph_QMARK_,(function (){var G__67487 = electron_disk_graphs;
if((G__67487 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(G__67487);
}
})())))));
}));
}));
}));
}));
});
frontend.db.persist.delete_graph_BANG_ = (function frontend$db$persist$delete_graph_BANG_(graph){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.persist_db._LT_invalidate_remote_repo_BANG_.cljs$core$IFn$_invoke$arity$2(graph,"deleting")),(function (___27434__auto__){
return promesa.protocols._promise(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["deleteGraph",graph], 0)));
}));
}));
} else {
return frontend.persist_db._LT_unsafe_delete(graph);
}
});

//# sourceMappingURL=frontend.db.persist.js.map
