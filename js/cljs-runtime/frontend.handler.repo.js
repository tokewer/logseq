goog.provide('frontend.handler.repo');
frontend.handler.repo.repo_urls = (function frontend$handler$repo$repo_urls(repos){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046),repos));
});
frontend.handler.repo.demo_only_repo_QMARK_ = (function frontend$handler$repo$demo_only_repo_QMARK_(repo,repos){
var url = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(repo);
var urls = frontend.handler.repo.repo_urls(repos);
return (((!((url == null)))) && (((frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$1(url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(urls))))));
});
frontend.handler.repo.removable_repo_QMARK_ = (function frontend$handler$repo$removable_repo_QMARK_(repo,repos){
return (!(frontend.handler.repo.demo_only_repo_QMARK_(repo,repos)));
});
frontend.handler.repo.remove_repo_BANG_ = (function frontend$handler$repo$remove_repo_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___67592 = arguments.length;
var i__5877__auto___67593 = (0);
while(true){
if((i__5877__auto___67593 < len__5876__auto___67592)){
args__5882__auto__.push((arguments[i__5877__auto___67593]));

var G__67594 = (i__5877__auto___67593 + (1));
i__5877__auto___67593 = G__67594;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.handler.repo.remove_repo_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.handler.repo.remove_repo_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__67564,p__67565){
var map__67566 = p__67564;
var map__67566__$1 = cljs.core.__destructure_map(map__67566);
var repo = map__67566__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67566__$1,new cljs.core.Keyword(null,"url","url",276297046));
var map__67567 = p__67565;
var map__67567__$1 = cljs.core.__destructure_map(map__67567);
var switch_graph_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67567__$1,new cljs.core.Keyword(null,"switch-graph?","switch-graph?",1080858350),true);
if((!(frontend.handler.repo.removable_repo_QMARK_(repo,frontend.state.get_repos())))){
return promesa.core.rejected(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot delete the demo graph when it is the only graph",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"demo-only-graph-delete","demo-only-graph-delete",1848182281),new cljs.core.Keyword(null,"repo","repo",-1999060679),url], null)));
} else {
var current_repo = frontend.state.get_current_repo();
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.persist.delete_graph_BANG_(url)),(function (___27434__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.search.remove_db_BANG_(url)),(function (___27434__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.delete_repo_BANG_(repo)),(function (___27434__auto____$2){
return promesa.protocols._promise((cljs.core.truth_(switch_graph_QMARK_)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_repo,url))?(function (){
frontend.state.set_current_repo_BANG_(null);

frontend.db.subs.reset_graph_BANG_(null);

var temp__5825__auto__ = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.first(frontend.state.get_repos()));
if(cljs.core.truth_(temp__5825__auto__)){
var graph = temp__5825__auto__;
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","removed-and-redirecting","graph/removed-and-redirecting",-684210287),frontend.util.text.get_graph_name_from_path(url),frontend.util.text.get_graph_name_from_path(graph)], 0)),new cljs.core.Keyword(null,"success","success",1890645906));

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","switch","graph/switch",178853840),graph,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"persist?","persist?",-1772568760),false], null)], null));
} else {
return null;
}
})()
:frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","removed","graph/removed",523626672),frontend.util.text.get_graph_name_from_path(url)], 0)),new cljs.core.Keyword(null,"success","success",1890645906))):null));
}));
}));
}));
}));
}
}));

(frontend.handler.repo.remove_repo_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.handler.repo.remove_repo_BANG_.cljs$lang$applyTo = (function (seq67562){
var G__67563 = cljs.core.first(seq67562);
var seq67562__$1 = cljs.core.next(seq67562);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67563,seq67562__$1);
}));

/**
 * Load the graph's persisted journal title format into UI state.
 * 
 *   Must finish before journals or Settings render so :ui/date-formatter is not
 *   left at the default after startup or a graph switch.
 */
frontend.handler.repo._LT_restore_date_formatter_BANG_ = (function frontend$handler$repo$_LT_restore_date_formatter_BANG_(repo){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_date_formatter(repo)),(function (date_formatter){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.set_date_formatter_BANG_(repo,date_formatter)),(function (___27434__auto__){
return promesa.protocols._promise(date_formatter);
}));
}));
}));
});
/**
 * Restore the db of a graph from the persisted data, and setup. Create a new
 *   conn, or replace the conn in state with a new one.
 */
frontend.handler.repo.restore_and_setup_repo_BANG_ = (function frontend$handler$repo$restore_and_setup_repo_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___67595 = arguments.length;
var i__5877__auto___67596 = (0);
while(true){
if((i__5877__auto___67596 < len__5876__auto___67595)){
args__5882__auto__.push((arguments[i__5877__auto___67596]));

var G__67597 = (i__5877__auto___67596 + (1));
i__5877__auto___67596 = G__67597;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.handler.repo.restore_and_setup_repo_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.handler.repo.restore_and_setup_repo_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (repo,p__67570){
var map__67571 = p__67570;
var map__67571__$1 = cljs.core.__destructure_map(map__67571);
var opts = map__67571__$1;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(((new cljs.core.Keyword(null,"file-graph-import?","file-graph-import?",-2126895083).cljs$core$IFn$_invoke$arity$1(opts) === true)?null:frontend.state.set_db_restoring_BANG_(true))),(function (___27434__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.restore.restore_graph_BANG_.cljs$core$IFn$_invoke$arity$variadic(repo,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0))),(function (___27434__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.repo._LT_restore_date_formatter_BANG_(repo)),(function (___27434__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.repo_config.restore_repo_config_BANG_.cljs$core$IFn$_invoke$arity$1(repo)),(function (___27434__auto____$3){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(frontend.config.global_config_enabled_QMARK_())?frontend.handler.global_config.restore_global_config_BANG_():null)),(function (___27434__auto____$4){
return promesa.protocols._mcat(promesa.protocols._promise(((new cljs.core.Keyword(null,"ignore-style?","ignore-style?",-1936882338).cljs$core$IFn$_invoke$arity$1(opts) === true)?null:frontend.handler.ui.add_style_if_exists_BANG_())),(function (___27434__auto____$5){
return promesa.protocols._promise(((((frontend.config.publishing_QMARK_) || (new cljs.core.Keyword(null,"file-graph-import?","file-graph-import?",-2126895083).cljs$core$IFn$_invoke$arity$1(opts) === true)))?null:frontend.state.set_db_restoring_BANG_(false)));
}));
}));
}));
}));
}));
}));
}));
}));

(frontend.handler.repo.restore_and_setup_repo_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.handler.repo.restore_and_setup_repo_BANG_.cljs$lang$applyTo = (function (seq67568){
var G__67569 = cljs.core.first(seq67568);
var seq67568__$1 = cljs.core.next(seq67568);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67569,seq67568__$1);
}));

frontend.handler.repo.get_repos = (function frontend$handler$repo$get_repos(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.persist.get_all_graphs()),(function (dbs){
return promesa.protocols._promise(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (db){
var graph_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"url","url",276297046),graph_name,new cljs.core.Keyword(null,"metadata","metadata",1799301597),new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"root","root",-448657453),frontend.config.get_local_dir(graph_name),new cljs.core.Keyword(null,"nfs?","nfs?",-544337673),true], null);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__67572){
var map__67573 = p__67572;
var map__67573__$1 = cljs.core.__destructure_map(map__67573);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67573__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("upload-temp",(function (){var G__67574 = name;
var G__67574__$1 = (((G__67574 == null))?null:(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67574)));
if((G__67574__$1 == null)){
return null;
} else {
return clojure.string.lower_case(G__67574__$1);
}
})());
}),dbs)));
}));
}));
});
frontend.handler.repo.combine_local__AMPERSAND__remote_graphs = (function frontend$handler$repo$combine_local__AMPERSAND__remote_graphs(local_repos,remote_repos){
var temp__5825__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__67577){
var map__67578 = p__67577;
var map__67578__$1 = cljs.core.__destructure_map(map__67578);
var repo = map__67578__$1;
var sync_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67578__$1,new cljs.core.Keyword(null,"sync-meta","sync-meta",-164400022));
var metadata = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67578__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));
var graph_id = (function (){var G__67579 = (function (){var or__5142__auto__ = new cljs.core.Keyword("kv","value","kv/value",305981670).cljs$core$IFn$_invoke$arity$1(metadata);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.second(sync_meta);
}
})();
if((G__67579 == null)){
return null;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67579));
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = graph_id;
if(cljs.core.truth_(and__5140__auto__)){
return (new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531).cljs$core$IFn$_invoke$arity$1(repo) == null);
} else {
return and__5140__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),graph_id);
} else {
return repo;
}
}),local_repos),(function (){var G__67580 = remote_repos;
if((G__67580 == null)){
return null;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67575_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__67575_SHARP_,new cljs.core.Keyword(null,"remote?","remote?",-517415110),true);
}),G__67580);
}
})()));
if(temp__5825__auto__){
var repos_SINGLEQUOTE_ = temp__5825__auto__;
var app_major_schema_version = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"major","major",-27376078).cljs$core$IFn$_invoke$arity$1(logseq.db.frontend.schema.parse_schema_version(logseq.db.frontend.schema.version))));
var repos_SINGLEQUOTE___$1 = cljs.core.group_by(new cljs.core.Keyword(null,"url","url",276297046),repos_SINGLEQUOTE_);
var repos_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__67581){
var vec__67582 = p__67581;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67582,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67582,(1),null);
if((!((k == null)))){
var remote_repos__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote?","remote?",-517415110),vs);
var version_matched_remote_repo = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__67576_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app_major_schema_version,new cljs.core.Keyword(null,"GraphSchemaVersion","GraphSchemaVersion",1094848752).cljs$core$IFn$_invoke$arity$1(p1__67576_SHARP_));
}),remote_repos__$1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(vs),cljs.core.second(vs),version_matched_remote_repo], 0))], null);
} else {
return vs;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repos_SINGLEQUOTE___$1], 0));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (repo){
var graph_name = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"GraphName","GraphName",-960661337).cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(repo),/\//));
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote?","remote?",-517415110).cljs$core$IFn$_invoke$arity$1(repo),clojure.string.lower_case(graph_name)], null);
}),repos_SINGLEQUOTE__SINGLEQUOTE_);
} else {
return null;
}
});
frontend.handler.repo.refresh_repos_BANG_ = (function frontend$handler$repo$refresh_repos_BANG_(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.repo.get_repos()),(function (repos){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.repo.combine_local__AMPERSAND__remote_graphs(repos,frontend.state.get_rtc_graphs())),(function (repos_SINGLEQUOTE_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.set_repos_BANG_(repos_SINGLEQUOTE_)),(function (___27434__auto__){
return promesa.protocols._promise(repos_SINGLEQUOTE_);
}));
}));
}));
}));
});
frontend.handler.repo.graph_ready_BANG_ = (function frontend$handler$repo$graph_ready_BANG_(graph){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["graphReady",graph], 0));
} else {
return null;
}
});
/**
 * Checks to see if given db graph name already exists
 */
frontend.handler.repo.graph_already_exists_QMARK_ = (function frontend$handler$repo$graph_already_exists_QMARK_(graph_name){
var full_graph_name = clojure.string.lower_case((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.db_version_prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.trim(graph_name))));
return cljs.core.some((function (p1__67585_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__67586 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__67585_SHARP_);
if((G__67586 == null)){
return null;
} else {
return clojure.string.lower_case(G__67586);
}
})(),full_graph_name);
}),frontend.state.get_repos());
});
frontend.handler.repo.create_db = (function frontend$handler$repo$create_db(full_graph_name,p__67587){
var map__67588 = p__67587;
var map__67588__$1 = cljs.core.__destructure_map(map__67588);
var file_graph_import_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67588__$1,new cljs.core.Keyword(null,"file-graph-import?","file-graph-import?",-2126895083));
var creating_remote_graph_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67588__$1,new cljs.core.Keyword(null,"creating-remote-graph?","creating-remote-graph?",-249407044));
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.config.config_default_content),(function (config){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.persist_db._LT_new(full_graph_name,(function (){var G__67589 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"config","config",994861415),config,new cljs.core.Keyword(null,"graph-git-sha","graph-git-sha",-266655130),logseq.common.version.revision(),new cljs.core.Keyword(null,"creating-remote-graph?","creating-remote-graph?",-249407044),creating_remote_graph_QMARK_], null);
if(cljs.core.truth_(file_graph_import_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67589,new cljs.core.Keyword(null,"import-type","import-type",-499283032),new cljs.core.Keyword(null,"file-graph","file-graph",-246966187));
} else {
return G__67589;
}
})())),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.add_repo_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),full_graph_name,new cljs.core.Keyword(null,"root","root",-448657453),frontend.config.get_local_dir(full_graph_name)], null))),(function (___$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.repo.restore_and_setup_repo_BANG_.cljs$core$IFn$_invoke$arity$variadic(full_graph_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-graph-import?","file-graph-import?",-2126895083),file_graph_import_QMARK_], null)], 0))),(function (___$2){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(file_graph_import_QMARK_)?null:frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$0())),(function (___$3){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.repo_config.set_repo_config_state_BANG_(full_graph_name,frontend.config.config_default_content)),(function (___$4){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("init","commands","init/commands",315507426)], null))),(function (___$5){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(file_graph_import_QMARK_)?null:frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","create","page/create",-1304816391),frontend.date.today(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),false], null)], null)))),(function (___$6){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(file_graph_import_QMARK_)?null:promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.graph._LT_upsert_current_graph_registry_BANG_()),(function (___27434__auto__){
return promesa.protocols._promise(frontend.handler.graph.remember_current_graph_id_in_tab_BANG_());
}));
})))),(function (___$7){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shortcut","refresh","shortcut/refresh",-1755508577)], null))),(function (___27434__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(file_graph_import_QMARK_)?null:(function (){
frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$0();

return frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0();
})()
)),(function (___27434__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.graph.settle_metadata_to_local_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"created-at","created-at",-89248644),Date.now()], null))),(function (___27434__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["New db created: ",full_graph_name], 0))),(function (___27434__auto____$3){
return promesa.protocols._promise(full_graph_name);
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
})),(function (error){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","create-error","graph/create-error",-1285055035)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));

if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.repo",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph-create-failed","graph-create-failed",-1884638694),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null),new cljs.core.Keyword(null,"line","line",212345235),198], null)),null);
} else {
}

if(cljs.core.truth_(file_graph_import_QMARK_)){
throw error;
} else {
return null;
}
}));
});
/**
 * Handler for creating a new database graph
 */
frontend.handler.repo.new_db_BANG_ = (function frontend$handler$repo$new_db_BANG_(var_args){
var G__67591 = arguments.length;
switch (G__67591) {
case 1:
return frontend.handler.repo.new_db_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.repo.new_db_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.repo.new_db_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (graph){
return frontend.handler.repo.new_db_BANG_.cljs$core$IFn$_invoke$arity$2(graph,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.handler.repo.new_db_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (graph,opts){
var trimmed_graph = clojure.string.trim(graph);
var full_graph_name = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.db_version_prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(trimmed_graph));
if(cljs.core.truth_(frontend.handler.repo.graph_already_exists_QMARK_(trimmed_graph))){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("notification","show","notification/show",1864741804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",15833224),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","already-exists-error","graph/already-exists-error",-1846664366),trimmed_graph], 0)),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032)], null)], null));
} else {
return frontend.handler.repo.create_db(full_graph_name,opts);
}
}));

(frontend.handler.repo.new_db_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.repo.gc_graph_BANG_ = (function frontend$handler$repo$gc_graph_BANG_(graph){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","gc-graph","thread-api/gc-graph",1137283006),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph], 0))),(function (___27434__auto__){
return promesa.protocols._promise(frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("notification","show","notification/show",1864741804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",15833224),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","gc-success","graph/gc-success",-573174552)], 0)),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906)], null)], null)));
}));
}));
});

//# sourceMappingURL=frontend.handler.repo.js.map
