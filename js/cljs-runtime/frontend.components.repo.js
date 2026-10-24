goog.provide('frontend.components.repo');
goog.scope(function(){
  frontend.components.repo.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.components.repo.graph_sync_icon_name = (function frontend$components$repo$graph_sync_icon_name(p__55132){
var map__55133 = p__55132;
var map__55133__$1 = cljs.core.__destructure_map(map__55133);
var remote_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55133__$1,new cljs.core.Keyword(null,"remote?","remote?",-517415110));
var graph_e2ee_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55133__$1,new cljs.core.Keyword(null,"graph-e2ee?","graph-e2ee?",-1495428226));
if(cljs.core.truth_(remote_QMARK_)){
if(cljs.core.truth_(graph_e2ee_QMARK_)){
return "lock";
} else {
return "cloud";
}
} else {
return null;
}
});
frontend.components.repo.repo_display_name = (function frontend$components$repo$repo_display_name(repo_url){
var repo_name = frontend.util.text.get_graph_name_from_path(repo_url);
if(frontend.config.db_based_graph_QMARK_.cljs$core$IFn$_invoke$arity$1(repo_name)){
return frontend.config.db_graph_name(repo_name);
} else {
return repo_name;
}
});
frontend.components.repo.local_uploadable_graph_QMARK_ = (function frontend$components$repo$local_uploadable_graph_QMARK_(p__55144){
var map__55145 = p__55144;
var map__55145__$1 = cljs.core.__destructure_map(map__55145);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55145__$1,new cljs.core.Keyword(null,"root","root",-448657453));
var remote_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55145__$1,new cljs.core.Keyword(null,"remote?","remote?",-517415110));
var rtc_graph_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55145__$1,new cljs.core.Keyword(null,"rtc-graph?","rtc-graph?",-203036448));
var and__5140__auto__ = (function (){var or__5142__auto__ = root;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
})();
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = cljs.core.not(remote_QMARK_);
if(and__5140__auto____$1){
var and__5140__auto____$2 = cljs.core.not(rtc_graph_QMARK_);
if(and__5140__auto____$2){
var and__5140__auto____$3 = frontend.handler.user.logged_in_QMARK_();
if(cljs.core.truth_(and__5140__auto____$3)){
return frontend.handler.user.rtc_group_QMARK_();
} else {
return and__5140__auto____$3;
}
} else {
return and__5140__auto____$2;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
});
frontend.components.repo._LT_invoke_db_worker = (function frontend$components$repo$_LT_invoke_db_worker(var_args){
var args__5882__auto__ = [];
var len__5876__auto___55465 = arguments.length;
var i__5877__auto___55466 = (0);
while(true){
if((i__5877__auto___55466 < len__5876__auto___55465)){
args__5882__auto__.push((arguments[i__5877__auto___55466]));

var G__55467 = (i__5877__auto___55466 + (1));
i__5877__auto___55466 = G__55467;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.components.repo._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.components.repo._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic = (function (op,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(frontend.state._LT_invoke_db_worker,op,args);
}));

(frontend.components.repo._LT_invoke_db_worker.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.components.repo._LT_invoke_db_worker.cljs$lang$applyTo = (function (seq55147){
var G__55148 = cljs.core.first(seq55147);
var seq55147__$1 = cljs.core.next(seq55147);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55148,seq55147__$1);
}));

frontend.components.repo.handle_cloud_graph_error_BANG_ = (function frontend$components$repo$handle_cloud_graph_error_BANG_(error){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.repo",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db-sync","cloud-graph-failed","db-sync/cloud-graph-failed",-1132323927),error,new cljs.core.Keyword(null,"line","line",212345235),55], null)),null);
} else {
}

if(frontend.handler.events.rtc_error.e2ee_decrypt_failed_QMARK_(error)){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","wrong-password","encryption/wrong-password",-1583660719)], 0)),new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
return null;
}
});
frontend.components.repo.graph_e2ee_enabled_QMARK_ = (function frontend$components$repo$graph_e2ee_enabled_QMARK_(p__55174){
var map__55175 = p__55174;
var map__55175__$1 = cljs.core.__destructure_map(map__55175);
var graph = map__55175__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55175__$1,new cljs.core.Keyword(null,"url","url",276297046));
var graph_e2ee_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55175__$1,new cljs.core.Keyword(null,"graph-e2ee?","graph-e2ee?",-1495428226));
if(cljs.core.contains_QMARK_(graph,new cljs.core.Keyword(null,"graph-e2ee?","graph-e2ee?",-1495428226))){
return promesa.core.resolved(graph_e2ee_QMARK_ === true);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(url,frontend.state.get_current_repo())){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.repo._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-key-value","thread-api/get-key-value",940412851),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url,new cljs.core.Keyword("logseq.kv","graph-rtc-e2ee?","logseq.kv/graph-rtc-e2ee?",1988827753)], 0))),(function (e2ee_QMARK_){
return promesa.protocols._promise((((e2ee_QMARK_ == null))?true:e2ee_QMARK_ === true));
}));
}));
} else {
return promesa.core.resolved(true);

}
}
});
frontend.components.repo._LT_ensure_current_graph_for_upload_BANG_ = (function frontend$components$repo$_LT_ensure_current_graph_for_upload_BANG_(repo){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(repo,frontend.state.get_current_repo())){
return promesa.core.resolved(null);
} else {
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","switch","graph/switch",178853840),repo], null));
}
});
frontend.components.repo.upload_local_graph_with_confirm_BANG_ = (function frontend$components$repo$upload_local_graph_with_confirm_BANG_(p__55196){
var map__55197 = p__55196;
var map__55197__$1 = cljs.core.__destructure_map(map__55197);
var graph = map__55197__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55197__$1,new cljs.core.Keyword(null,"url","url",276297046));
var graph_name = frontend.config.db_graph_name(url);
var dialog_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cancel-label","cancel-label",-1093310551),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","cancel","ui/cancel",-1964089788)], 0)),new cljs.core.Keyword(null,"ok-label","ok-label",808114315),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","confirm","ui/confirm",-2003996372)], 0))], null);
return promesa.core.then.cljs$core$IFn$_invoke$arity$2((function (){var G__55200 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.font-medium.mb-6","p.font-medium.mb-6",-182244990),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","upload-local-confirm-desc","graph/upload-local-confirm-desc",1265732475),graph_name], 0))], null);
var G__55201 = dialog_config;
return (logseq.shui.ui.dialog_confirm_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_confirm_BANG_.cljs$core$IFn$_invoke$arity$2(G__55200,G__55201) : logseq.shui.ui.dialog_confirm_BANG_.call(null,G__55200,G__55201));
})(),(function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.repo._LT_ensure_current_graph_for_upload_BANG_(url)),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.repo.graph_e2ee_enabled_QMARK_(graph)),(function (graph_e2ee_QMARK_){
return promesa.protocols._promise((function (){var mobile_QMARK_ = frontend.util.mobile_QMARK_();
var hide_upload_log_BANG_ = (function (){
if(cljs.core.truth_(mobile_QMARK_)){
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rtc-graph-upload-log","rtc-graph-upload-log",-47658615)) : logseq.shui.ui.popup_hide_BANG_.call(null,new cljs.core.Keyword(null,"rtc-graph-upload-log","rtc-graph-upload-log",-47658615)));
} else {
return null;
}
});
if(cljs.core.truth_(mobile_QMARK_)){
var G__55202_55468 = null;
var G__55203_55469 = (function (){
return frontend.components.rtc.indicator.uploading_logs();
});
var G__55204_55470 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"rtc-graph-upload-log","rtc-graph-upload-log",-47658615)], null);
(logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__55202_55468,G__55203_55469,G__55204_55470) : logseq.shui.ui.popup_show_BANG_.call(null,G__55202_55468,G__55203_55469,G__55204_55470));
} else {
}

frontend.components.rtc.indicator.on_upload_finished_task(hide_upload_log_BANG_);

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(frontend.handler.db_based.sync._LT_rtc_upload_graph_BANG_(url,graph_e2ee_QMARK_),(function (error){
frontend.components.repo.handle_cloud_graph_error_BANG_(error);

return promesa.core.rejected(error);
})),hide_upload_log_BANG_);
})());
}));
}));
}));
}));
});
frontend.components.repo.normalized_graph_label = (function (){var render_fn__31744__auto__ = (function frontend$components$repo$normalized_graph_label(p__55205,on_click){
var map__55206 = p__55205;
var map__55206__$1 = cljs.core.__destructure_map(map__55206);
var graph = map__55206__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55206__$1,new cljs.core.Keyword(null,"url","url",276297046));
var remote_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55206__$1,new cljs.core.Keyword(null,"remote?","remote?",-517415110));
if(cljs.core.truth_(graph)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center","span.flex.items-center",-463750193),(function (){var local_dir = frontend.config.get_local_dir(url);
var graph_name = frontend.util.text.get_graph_name_from_path(url);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.items-center","a.flex.items-center",46069439),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),local_dir,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(graph) : on_click.call(null,graph));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),graph_name], null),(cljs.core.truth_(remote_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.px-1.flex.items-center","strong.px-1.flex.items-center",1916101233),frontend.ui.icon(frontend.components.repo.graph_sync_icon_name(graph))], null):null)], null)], null);
})()], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$repo$normalized_graph_label__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__55208 = cljs.core.first(args__31746__auto__);
var G__55209 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__55208,G__55209) : io.factorhouse.hsx.core.obj_get.call(null,G__55208,G__55209));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"normalized-graph-label","normalized-graph-label",-242848331,null),args__31746__auto__),frontend$components$repo$normalized_graph_label,args__31746__auto__,null);
}
};
var frontend$components$repo$normalized_graph_label = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__55471__i = 0, G__55471__a = new Array(arguments.length -  0);
while (G__55471__i < G__55471__a.length) {G__55471__a[G__55471__i] = arguments[G__55471__i + 0]; ++G__55471__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__55471__a,0,null);
} 
return frontend$components$repo$normalized_graph_label__delegate.call(this,args__31746__auto__);};
frontend$components$repo$normalized_graph_label.cljs$lang$maxFixedArity = 0;
frontend$components$repo$normalized_graph_label.cljs$lang$applyTo = (function (arglist__55472){
var args__31746__auto__ = cljs.core.seq(arglist__55472);
return frontend$components$repo$normalized_graph_label__delegate(args__31746__auto__);
});
frontend$components$repo$normalized_graph_label.cljs$core$IFn$_invoke$arity$variadic = frontend$components$repo$normalized_graph_label__delegate;
return frontend$components$repo$normalized_graph_label;
})()
;
var memo_comp__31747__auto__ = (function (){var G__55210 = comp__31745__auto__;
var G__55211 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__55210,G__55211) : io.factorhouse.hsx.core.react_memo.call(null,G__55210,G__55211));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"normalized-graph-label");

return comp__31745__auto__;
})();
frontend.components.repo.sort_repos_with_metadata_local = (function frontend$components$repo$sort_repos_with_metadata_local(repos){
var temp__5823__auto__ = (function (){var and__5140__auto__ = cljs.core.seq(repos);
if(and__5140__auto__){
return frontend.handler.graph.get_metadata_local();
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (r1,r2){
return cljs.core.compare((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"last-seen-at","last-seen-at",1929467667).cljs$core$IFn$_invoke$arity$1(r2);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"created-at","created-at",-89248644).cljs$core$IFn$_invoke$arity$1(r2);
}
})(),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"last-seen-at","last-seen-at",1929467667).cljs$core$IFn$_invoke$arity$1(r1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"created-at","created-at",-89248644).cljs$core$IFn$_invoke$arity$1(r1);
}
})());
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (r){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r))], 0));
}),repos));
} else {
return repos;
}
});
frontend.components.repo.safe_locale_date = (function frontend$components$repo$safe_locale_date(dst){
if(typeof dst === 'number'){
try{return frontend.context.i18n.locale_format_date.cljs$core$IFn$_invoke$arity$1((new Date(dst)));
}catch (e55212){if((e55212 instanceof Error)){
var _e = e55212;
return null;
} else {
throw e55212;

}
}} else {
return null;
}
});
frontend.components.repo.open_repo_folder_BANG_ = (function frontend$components$repo$open_repo_folder_BANG_(p__55220){
var map__55221 = p__55220;
var map__55221__$1 = cljs.core.__destructure_map(map__55221);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55221__$1,new cljs.core.Keyword(null,"root","root",-448657453));
return frontend.util.open_url((""+"file://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(root)));
});
frontend.components.repo.can_delete_local_graph_QMARK_ = (function frontend$components$repo$can_delete_local_graph_QMARK_(repo){
return frontend.handler.repo.removable_repo_QMARK_(repo,frontend.state.get_repos());
});
frontend.components.repo.delete_local_graph_BANG_ = (function frontend$components$repo$delete_local_graph_BANG_(p__55226){
var map__55227 = p__55226;
var map__55227__$1 = cljs.core.__destructure_map(map__55227);
var repo = map__55227__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55227__$1,new cljs.core.Keyword(null,"url","url",276297046));
if(frontend.components.repo.can_delete_local_graph_QMARK_(repo)){
var graph_name = frontend.config.db_graph_name(url);
var dialog_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cancel-label","cancel-label",-1093310551),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","cancel","ui/cancel",-1964089788)], 0)),new cljs.core.Keyword(null,"ok-label","ok-label",808114315),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","confirm","ui/confirm",-2003996372)], 0))], null);
return promesa.core.then.cljs$core$IFn$_invoke$arity$2((function (){var G__55234 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(dialog_config,new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","delete-local-confirm-desc","graph/delete-local-confirm-desc",-654515798),graph_name], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"description","description",-1428560544),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","delete-warning","graph/delete-warning",799212915)], 0))], 0));
return (logseq.shui.ui.dialog_confirm_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_confirm_BANG_.cljs$core$IFn$_invoke$arity$1(G__55234) : logseq.shui.ui.dialog_confirm_BANG_.call(null,G__55234));
})(),(function (){
return frontend.handler.repo.remove_repo_BANG_(repo);
}));
} else {
return null;
}
});
frontend.components.repo.graph_open_new_window_target = (function frontend$components$repo$graph_open_new_window_target(p__55236){
var map__55237 = p__55236;
var map__55237__$1 = cljs.core.__destructure_map(map__55237);
var repo = map__55237__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55237__$1,new cljs.core.Keyword(null,"url","url",276297046));
var temp__5825__auto__ = new cljs.core.Keyword(null,"graph-id","graph-id",-205404489).cljs$core$IFn$_invoke$arity$1(frontend.handler.graph.repo_summary__GT_registry_entry(repo));
if(cljs.core.truth_(temp__5825__auto__)){
var graph_id = temp__5825__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repo","repo",-1999060679),url,new cljs.core.Keyword(null,"graph-id","graph-id",-205404489),graph_id], null);
} else {
return null;
}
});
frontend.components.repo._LT_graph_open_new_window_target = (function frontend$components$repo$_LT_graph_open_new_window_target(p__55241){
var map__55242 = p__55241;
var map__55242__$1 = cljs.core.__destructure_map(map__55242);
var repo = map__55242__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55242__$1,new cljs.core.Keyword(null,"url","url",276297046));
var temp__5823__auto__ = frontend.components.repo.graph_open_new_window_target(repo);
if(cljs.core.truth_(temp__5823__auto__)){
var target = temp__5823__auto__;
return promesa.core.resolved(target);
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.graph._LT_get_graph_registry()),(function (registry){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__55249 = registry;
var G__55250 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"graph-identifier","graph-identifier",-1698375724),url], null);
return (frontend.handler.graph.resolve_registry_target.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.graph.resolve_registry_target.cljs$core$IFn$_invoke$arity$2(G__55249,G__55250) : frontend.handler.graph.resolve_registry_target.call(null,G__55249,G__55250));
})()),(function (entry){
return promesa.protocols._promise((cljs.core.truth_(entry)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repo","repo",-1999060679),new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1(entry),new cljs.core.Keyword(null,"graph-id","graph-id",-205404489),new cljs.core.Keyword(null,"graph-id","graph-id",-205404489).cljs$core$IFn$_invoke$arity$1(entry)], null):null));
}));
}));
}));
}
});
frontend.components.repo.open_in_another_tab_action_QMARK_ = (function frontend$components$repo$open_in_another_tab_action_QMARK_(p__55251){
var map__55252 = p__55251;
var map__55252__$1 = cljs.core.__destructure_map(map__55252);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55252__$1,new cljs.core.Keyword(null,"root","root",-448657453));
return cljs.core.boolean$((function (){var and__5140__auto__ = frontend.util.web_platform_QMARK_;
if(and__5140__auto__){
return root;
} else {
return and__5140__auto__;
}
})());
});
frontend.components.repo.open_graph_in_another_tab_BANG_ = (function frontend$components$repo$open_graph_in_another_tab_BANG_(repo){
var temp__5823__auto__ = frontend.components.repo.graph_open_new_window_target(repo);
if(cljs.core.truth_(temp__5823__auto__)){
var target = temp__5823__auto__;
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","open-new-window","graph/open-new-window",-397266781),target], null));
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.repo._LT_graph_open_new_window_target(repo)),(function (target){
return promesa.protocols._promise((cljs.core.truth_(target)?frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","open-new-window","graph/open-new-window",-397266781),target], null)):null));
}));
}));
}
});
/**
 * Graph list in `All graphs` page
 */
frontend.components.repo.repos_inner = (function (){var render_fn__31744__auto__ = (function frontend$components$repo$repos_inner(repos){
var iter__5628__auto__ = (function frontend$components$repo$repos_inner_$_iter__55257(s__55258){
return (new cljs.core.LazySeq(null,(function (){
var s__55258__$1 = s__55258;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__55258__$1);
if(temp__5825__auto__){
var s__55258__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55258__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__55258__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__55260 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__55259 = (0);
while(true){
if((i__55259 < size__5627__auto__)){
var map__55261 = cljs.core._nth(c__5626__auto__,i__55259);
var map__55261__$1 = cljs.core.__destructure_map(map__55261);
var repo = map__55261__$1;
var remote_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55261__$1,new cljs.core.Keyword(null,"remote?","remote?",-517415110));
var created_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55261__$1,new cljs.core.Keyword(null,"created-at","created-at",-89248644));
var graph_e2ee_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55261__$1,new cljs.core.Keyword(null,"graph-e2ee?","graph-e2ee?",-1495428226));
var GraphName = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55261__$1,new cljs.core.Keyword(null,"GraphName","GraphName",-960661337));
var GraphSchemaVersion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55261__$1,new cljs.core.Keyword(null,"GraphSchemaVersion","GraphSchemaVersion",1094848752));
var last_seen_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55261__$1,new cljs.core.Keyword(null,"last-seen-at","last-seen-at",1929467667));
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55261__$1,new cljs.core.Keyword(null,"root","root",-448657453));
var GraphUUID = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55261__$1,new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55261__$1,new cljs.core.Keyword(null,"url","url",276297046));
var graph_name = frontend.config.db_graph_name(url);
cljs.core.chunk_append(b__55260,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-between.mb-2.items-center.group","div.flex.justify-between.mb-2.items-center.group",-1347837045),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(function (){var or__5142__auto__ = url;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return GraphUUID;
}
})(),"data-testid",url], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1","span.flex.items-center.gap-1",-111995724),frontend.components.repo.normalized_graph_label(repo,((function (i__55259,graph_name,map__55261,map__55261__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,c__5626__auto__,size__5627__auto__,b__55260,s__55258__$2,temp__5825__auto__){
return (function (){
if(cljs.core.truth_(frontend.state.get_state(new cljs.core.Keyword("rtc","downloading-graph-uuid","rtc/downloading-graph-uuid",460109193)))){
return null;
} else {
if(cljs.core.truth_(root)){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","switch","graph/switch",178853840),url], null));
} else {
if(cljs.core.truth_(remote_QMARK_)){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rtc","download-remote-graph","rtc/download-remote-graph",508601916),GraphName,GraphUUID,GraphSchemaVersion,graph_e2ee_QMARK_], null));
} else {
return null;

}
}
}
});})(i__55259,graph_name,map__55261,map__55261__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,c__5626__auto__,size__5627__auto__,b__55260,s__55258__$2,temp__5825__auto__))
)], null),(function (){var temp__5825__auto____$1 = (function (){var G__55262 = (function (){var or__5142__auto__ = last_seen_at;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return created_at;
}
})();
if((G__55262 == null)){
return null;
} else {
return frontend.components.repo.safe_locale_date(G__55262);
}
})();
if(cljs.core.truth_(temp__5825__auto____$1)){
var time = temp__5825__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.text-muted-foreground","small.text-muted-foreground",-1082719920),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","last-opened-at-label","graph/last-opened-at-label",-1471074481),time], 0))], null);
} else {
return null;
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.controls","div.controls",1658515593),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center","div.flex.flex-row.items-center",2086153476),(cljs.core.truth_((function (){var and__5140__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5140__auto__)){
return root;
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-xs.items-center.text-gray-08.hover:underline.hidden.group-hover:flex","a.text-xs.items-center.text-gray-08.hover:underline.hidden.group-hover:flex",-411328347),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55259,graph_name,map__55261,map__55261__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,c__5626__auto__,size__5627__auto__,b__55260,s__55258__$2,temp__5825__auto__){
return (function (){
return frontend.components.repo.open_repo_folder_BANG_(repo);
});})(i__55259,graph_name,map__55261,map__55261__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,c__5626__auto__,size__5627__auto__,b__55260,s__55258__$2,temp__5825__auto__))
], null),logseq.shui.ui.tabler_icon("folder-pin"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pl-1","span.pl-1",-1236384439),root], null)], null):null),(function (){var manager_QMARK_ = frontend.handler.user.manager_QMARK_(url);
var dialog_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cancel-label","cancel-label",-1093310551),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","cancel","ui/cancel",-1964089788)], 0)),new cljs.core.Keyword(null,"ok-label","ok-label",808114315),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","confirm","ui/confirm",-2003996372)], 0))], null);
var G__55265 = (function (){var G__55267 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"asChild","asChild",682531623),true], null);
var G__55268 = (function (){var G__55269 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"ghost",new cljs.core.Keyword(null,"class","class",-2030961996),"graph-action-btn !px-1",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065)], null);
var G__55270 = frontend.ui.icon("dots",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(15)], null));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__55269,G__55270) : logseq.shui.ui.button.call(null,G__55269,G__55270));
})();
return (logseq.shui.ui.dropdown_menu_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_trigger.cljs$core$IFn$_invoke$arity$2(G__55267,G__55268) : logseq.shui.ui.dropdown_menu_trigger.call(null,G__55267,G__55268));
})();
var G__55266 = (function (){var G__55271 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align","align",1964212802),"end"], null);
var G__55272 = ((frontend.components.repo.open_in_another_tab_action_QMARK_(repo))?(function (){var G__55277 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"open-in-another-tab",new cljs.core.Keyword(null,"class","class",-2030961996),"open-in-another-tab-menu-item",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55259,G__55271,G__55265,manager_QMARK_,dialog_config,graph_name,map__55261,map__55261__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,c__5626__auto__,size__5627__auto__,b__55260,s__55258__$2,temp__5825__auto__){
return (function (){
return frontend.components.repo.open_graph_in_another_tab_BANG_(repo);
});})(i__55259,G__55271,G__55265,manager_QMARK_,dialog_config,graph_name,map__55261,map__55261__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,c__5626__auto__,size__5627__auto__,b__55260,s__55258__$2,temp__5825__auto__))
], null);
var G__55278 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","open-in-another-tab-action","graph/open-in-another-tab-action",2074138388)], 0));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__55277,G__55278) : logseq.shui.ui.dropdown_menu_item.call(null,G__55277,G__55278));
})():null);
var G__55273 = (cljs.core.truth_(root)?(function (){var disabled_QMARK_ = (!(frontend.components.repo.can_delete_local_graph_QMARK_(repo)));
var G__55279 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),"delete-locally",new cljs.core.Keyword(null,"class","class",-2030961996),"delete-local-graph-menu-item",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55259,disabled_QMARK_,G__55271,G__55272,G__55265,manager_QMARK_,dialog_config,graph_name,map__55261,map__55261__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,c__5626__auto__,size__5627__auto__,b__55260,s__55258__$2,temp__5825__auto__){
return (function (){
if(disabled_QMARK_){
return null;
} else {
return frontend.components.repo.delete_local_graph_BANG_(repo);
}
});})(i__55259,disabled_QMARK_,G__55271,G__55272,G__55265,manager_QMARK_,dialog_config,graph_name,map__55261,map__55261__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,c__5626__auto__,size__5627__auto__,b__55260,s__55258__$2,temp__5825__auto__))
], null);
var G__55280 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","delete-local-action","graph/delete-local-action",369637721)], 0));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__55279,G__55280) : logseq.shui.ui.dropdown_menu_item.call(null,G__55279,G__55280));
})():null);
var G__55274 = (cljs.core.truth_((function (){var and__5140__auto__ = root;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = frontend.handler.user.logged_in_QMARK_();
if(cljs.core.truth_(and__5140__auto____$1)){
return ((frontend.handler.user.rtc_group_QMARK_()) && (((cljs.core.not(remote_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(url,frontend.state.get_current_repo())))));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?(function (){var G__55281 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"logseq-sync",new cljs.core.Keyword(null,"class","class",-2030961996),"use-logseq-sync-menu-item",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55259,G__55271,G__55272,G__55273,G__55265,manager_QMARK_,dialog_config,graph_name,map__55261,map__55261__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,c__5626__auto__,size__5627__auto__,b__55260,s__55258__$2,temp__5825__auto__){
return (function (){
return frontend.components.repo.upload_local_graph_with_confirm_BANG_(repo);
});})(i__55259,G__55271,G__55272,G__55273,G__55265,manager_QMARK_,dialog_config,graph_name,map__55261,map__55261__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,c__5626__auto__,size__5627__auto__,b__55260,s__55258__$2,temp__5825__auto__))
], null);
var G__55282 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","use-sync-beta","graph/use-sync-beta",433246085)], 0));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__55281,G__55282) : logseq.shui.ui.dropdown_menu_item.call(null,G__55281,G__55282));
})():null);
var G__55275 = (cljs.core.truth_((function (){var and__5140__auto__ = remote_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return manager_QMARK_;
} else {
return and__5140__auto__;
}
})())?(function (){var G__55283 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"delete-remotely",new cljs.core.Keyword(null,"class","class",-2030961996),"delete-remote-graph-menu-item",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55259,G__55271,G__55272,G__55273,G__55274,G__55265,manager_QMARK_,dialog_config,graph_name,map__55261,map__55261__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,c__5626__auto__,size__5627__auto__,b__55260,s__55258__$2,temp__5825__auto__){
return (function (){
var prompt_str = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","delete-server-confirm-desc","graph/delete-server-confirm-desc",1107402730),graph_name], 0));
return promesa.core.then.cljs$core$IFn$_invoke$arity$2((function (){var G__55285 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(dialog_config,new cljs.core.Keyword(null,"title","title",636505583),prompt_str,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"description","description",-1428560544),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","delete-warning","graph/delete-warning",799212915)], 0))], 0));
return (logseq.shui.ui.dialog_confirm_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_confirm_BANG_.cljs$core$IFn$_invoke$arity$1(G__55285) : logseq.shui.ui.dialog_confirm_BANG_.call(null,G__55285));
})(),((function (i__55259,prompt_str,G__55271,G__55272,G__55273,G__55274,G__55265,manager_QMARK_,dialog_config,graph_name,map__55261,map__55261__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,c__5626__auto__,size__5627__auto__,b__55260,s__55258__$2,temp__5825__auto__){
return (function (){
frontend.state.set_state_BANG_(new cljs.core.Keyword("rtc","loading-graphs?","rtc/loading-graphs?",493247976),true);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),repo)){
frontend.handler.db_based.sync._LT_rtc_stop_BANG_();
} else {
}

return promesa.protocols._mcat(promesa.protocols._promise(null),((function (i__55259,prompt_str,G__55271,G__55272,G__55273,G__55274,G__55265,manager_QMARK_,dialog_config,graph_name,map__55261,map__55261__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,c__5626__auto__,size__5627__auto__,b__55260,s__55258__$2,temp__5825__auto__){
return (function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.sync._LT_rtc_delete_graph_BANG_(GraphUUID,GraphSchemaVersion)),((function (i__55259,prompt_str,G__55271,G__55272,G__55273,G__55274,G__55265,manager_QMARK_,dialog_config,graph_name,map__55261,map__55261__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,c__5626__auto__,size__5627__auto__,b__55260,s__55258__$2,temp__5825__auto__){
return (function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.set_state_BANG_(new cljs.core.Keyword("rtc","loading-graphs?","rtc/loading-graphs?",493247976),false)),((function (i__55259,prompt_str,G__55271,G__55272,G__55273,G__55274,G__55265,manager_QMARK_,dialog_config,graph_name,map__55261,map__55261__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,c__5626__auto__,size__5627__auto__,b__55260,s__55258__$2,temp__5825__auto__){
return (function (___21901__auto____$1){
return promesa.protocols._promise(frontend.handler.db_based.sync._LT_get_remote_graphs());
});})(i__55259,prompt_str,G__55271,G__55272,G__55273,G__55274,G__55265,manager_QMARK_,dialog_config,graph_name,map__55261,map__55261__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,c__5626__auto__,size__5627__auto__,b__55260,s__55258__$2,temp__5825__auto__))
);
});})(i__55259,prompt_str,G__55271,G__55272,G__55273,G__55274,G__55265,manager_QMARK_,dialog_config,graph_name,map__55261,map__55261__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,c__5626__auto__,size__5627__auto__,b__55260,s__55258__$2,temp__5825__auto__))
);
});})(i__55259,prompt_str,G__55271,G__55272,G__55273,G__55274,G__55265,manager_QMARK_,dialog_config,graph_name,map__55261,map__55261__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,c__5626__auto__,size__5627__auto__,b__55260,s__55258__$2,temp__5825__auto__))
);
});})(i__55259,prompt_str,G__55271,G__55272,G__55273,G__55274,G__55265,manager_QMARK_,dialog_config,graph_name,map__55261,map__55261__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,c__5626__auto__,size__5627__auto__,b__55260,s__55258__$2,temp__5825__auto__))
);
});})(i__55259,G__55271,G__55272,G__55273,G__55274,G__55265,manager_QMARK_,dialog_config,graph_name,map__55261,map__55261__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,c__5626__auto__,size__5627__auto__,b__55260,s__55258__$2,temp__5825__auto__))
], null);
var G__55284 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","delete-server-action","graph/delete-server-action",885911213)], 0));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__55283,G__55284) : logseq.shui.ui.dropdown_menu_item.call(null,G__55283,G__55284));
})():null);
var G__55276 = (cljs.core.truth_((function (){var and__5140__auto__ = remote_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (!(manager_QMARK_));
} else {
return and__5140__auto__;
}
})())?(function (){var G__55286 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"leave-shared-graph",new cljs.core.Keyword(null,"class","class",-2030961996),"leave-shared-graph-menu-item",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55259,G__55271,G__55272,G__55273,G__55274,G__55275,G__55265,manager_QMARK_,dialog_config,graph_name,map__55261,map__55261__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,c__5626__auto__,size__5627__auto__,b__55260,s__55258__$2,temp__5825__auto__){
return (function (){
var prompt_str = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","leave-confirm-desc","graph/leave-confirm-desc",1125556217)], 0));
return promesa.core.then.cljs$core$IFn$_invoke$arity$2((function (){var G__55288 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.font-medium.-my-4","p.font-medium.-my-4",-390241889),prompt_str], null);
var G__55289 = dialog_config;
return (logseq.shui.ui.dialog_confirm_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_confirm_BANG_.cljs$core$IFn$_invoke$arity$2(G__55288,G__55289) : logseq.shui.ui.dialog_confirm_BANG_.call(null,G__55288,G__55289));
})(),((function (i__55259,prompt_str,G__55271,G__55272,G__55273,G__55274,G__55275,G__55265,manager_QMARK_,dialog_config,graph_name,map__55261,map__55261__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,c__5626__auto__,size__5627__auto__,b__55260,s__55258__$2,temp__5825__auto__){
return (function (){
frontend.state.set_state_BANG_(new cljs.core.Keyword("rtc","loading-graphs?","rtc/loading-graphs?",493247976),true);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),repo)){
frontend.handler.db_based.sync._LT_rtc_stop_BANG_();
} else {
}

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.handler.db_based.sync._LT_rtc_leave_graph_BANG_(GraphUUID),((function (i__55259,prompt_str,G__55271,G__55272,G__55273,G__55274,G__55275,G__55265,manager_QMARK_,dialog_config,graph_name,map__55261,map__55261__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,c__5626__auto__,size__5627__auto__,b__55260,s__55258__$2,temp__5825__auto__){
return (function (){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","left","graph/left",-438928631)], 0)),new cljs.core.Keyword(null,"success","success",1890645906));

return frontend.handler.db_based.sync._LT_get_remote_graphs();
});})(i__55259,prompt_str,G__55271,G__55272,G__55273,G__55274,G__55275,G__55265,manager_QMARK_,dialog_config,graph_name,map__55261,map__55261__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,c__5626__auto__,size__5627__auto__,b__55260,s__55258__$2,temp__5825__auto__))
),((function (i__55259,prompt_str,G__55271,G__55272,G__55273,G__55274,G__55275,G__55265,manager_QMARK_,dialog_config,graph_name,map__55261,map__55261__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,c__5626__auto__,size__5627__auto__,b__55260,s__55258__$2,temp__5825__auto__){
return (function (e){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","leave-error","graph/leave-error",1439163651)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));

if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.repo",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db-sync","leave-graph-failed","db-sync/leave-graph-failed",1439038341),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),e,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),GraphUUID], null),new cljs.core.Keyword(null,"line","line",212345235),300], null)),null);
} else {
return null;
}
});})(i__55259,prompt_str,G__55271,G__55272,G__55273,G__55274,G__55275,G__55265,manager_QMARK_,dialog_config,graph_name,map__55261,map__55261__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,c__5626__auto__,size__5627__auto__,b__55260,s__55258__$2,temp__5825__auto__))
),((function (i__55259,prompt_str,G__55271,G__55272,G__55273,G__55274,G__55275,G__55265,manager_QMARK_,dialog_config,graph_name,map__55261,map__55261__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,c__5626__auto__,size__5627__auto__,b__55260,s__55258__$2,temp__5825__auto__){
return (function (){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("rtc","loading-graphs?","rtc/loading-graphs?",493247976),false);
});})(i__55259,prompt_str,G__55271,G__55272,G__55273,G__55274,G__55275,G__55265,manager_QMARK_,dialog_config,graph_name,map__55261,map__55261__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,c__5626__auto__,size__5627__auto__,b__55260,s__55258__$2,temp__5825__auto__))
);
});})(i__55259,prompt_str,G__55271,G__55272,G__55273,G__55274,G__55275,G__55265,manager_QMARK_,dialog_config,graph_name,map__55261,map__55261__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,c__5626__auto__,size__5627__auto__,b__55260,s__55258__$2,temp__5825__auto__))
);
});})(i__55259,G__55271,G__55272,G__55273,G__55274,G__55275,G__55265,manager_QMARK_,dialog_config,graph_name,map__55261,map__55261__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,c__5626__auto__,size__5627__auto__,b__55260,s__55258__$2,temp__5825__auto__))
], null);
var G__55287 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","leave-action","graph/leave-action",1556225926)], 0));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__55286,G__55287) : logseq.shui.ui.dropdown_menu_item.call(null,G__55286,G__55287));
})():null);
return (logseq.shui.ui.dropdown_menu_content.cljs$core$IFn$_invoke$arity$6 ? logseq.shui.ui.dropdown_menu_content.cljs$core$IFn$_invoke$arity$6(G__55271,G__55272,G__55273,G__55274,G__55275,G__55276) : logseq.shui.ui.dropdown_menu_content.call(null,G__55271,G__55272,G__55273,G__55274,G__55275,G__55276));
})();
return (logseq.shui.ui.dropdown_menu.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu.cljs$core$IFn$_invoke$arity$2(G__55265,G__55266) : logseq.shui.ui.dropdown_menu.call(null,G__55265,G__55266));
})()], null)], null)], null));

var G__55473 = (i__55259 + (1));
i__55259 = G__55473;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55260),frontend$components$repo$repos_inner_$_iter__55257(cljs.core.chunk_rest(s__55258__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55260),null);
}
} else {
var map__55290 = cljs.core.first(s__55258__$2);
var map__55290__$1 = cljs.core.__destructure_map(map__55290);
var repo = map__55290__$1;
var remote_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55290__$1,new cljs.core.Keyword(null,"remote?","remote?",-517415110));
var created_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55290__$1,new cljs.core.Keyword(null,"created-at","created-at",-89248644));
var graph_e2ee_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55290__$1,new cljs.core.Keyword(null,"graph-e2ee?","graph-e2ee?",-1495428226));
var GraphName = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55290__$1,new cljs.core.Keyword(null,"GraphName","GraphName",-960661337));
var GraphSchemaVersion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55290__$1,new cljs.core.Keyword(null,"GraphSchemaVersion","GraphSchemaVersion",1094848752));
var last_seen_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55290__$1,new cljs.core.Keyword(null,"last-seen-at","last-seen-at",1929467667));
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55290__$1,new cljs.core.Keyword(null,"root","root",-448657453));
var GraphUUID = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55290__$1,new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55290__$1,new cljs.core.Keyword(null,"url","url",276297046));
var graph_name = frontend.config.db_graph_name(url);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-between.mb-2.items-center.group","div.flex.justify-between.mb-2.items-center.group",-1347837045),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(function (){var or__5142__auto__ = url;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return GraphUUID;
}
})(),"data-testid",url], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1","span.flex.items-center.gap-1",-111995724),frontend.components.repo.normalized_graph_label(repo,((function (graph_name,map__55290,map__55290__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,s__55258__$2,temp__5825__auto__){
return (function (){
if(cljs.core.truth_(frontend.state.get_state(new cljs.core.Keyword("rtc","downloading-graph-uuid","rtc/downloading-graph-uuid",460109193)))){
return null;
} else {
if(cljs.core.truth_(root)){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","switch","graph/switch",178853840),url], null));
} else {
if(cljs.core.truth_(remote_QMARK_)){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rtc","download-remote-graph","rtc/download-remote-graph",508601916),GraphName,GraphUUID,GraphSchemaVersion,graph_e2ee_QMARK_], null));
} else {
return null;

}
}
}
});})(graph_name,map__55290,map__55290__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,s__55258__$2,temp__5825__auto__))
)], null),(function (){var temp__5825__auto____$1 = (function (){var G__55291 = (function (){var or__5142__auto__ = last_seen_at;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return created_at;
}
})();
if((G__55291 == null)){
return null;
} else {
return frontend.components.repo.safe_locale_date(G__55291);
}
})();
if(cljs.core.truth_(temp__5825__auto____$1)){
var time = temp__5825__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.text-muted-foreground","small.text-muted-foreground",-1082719920),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","last-opened-at-label","graph/last-opened-at-label",-1471074481),time], 0))], null);
} else {
return null;
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.controls","div.controls",1658515593),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center","div.flex.flex-row.items-center",2086153476),(cljs.core.truth_((function (){var and__5140__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5140__auto__)){
return root;
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-xs.items-center.text-gray-08.hover:underline.hidden.group-hover:flex","a.text-xs.items-center.text-gray-08.hover:underline.hidden.group-hover:flex",-411328347),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (graph_name,map__55290,map__55290__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,s__55258__$2,temp__5825__auto__){
return (function (){
return frontend.components.repo.open_repo_folder_BANG_(repo);
});})(graph_name,map__55290,map__55290__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,s__55258__$2,temp__5825__auto__))
], null),logseq.shui.ui.tabler_icon("folder-pin"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pl-1","span.pl-1",-1236384439),root], null)], null):null),(function (){var manager_QMARK_ = frontend.handler.user.manager_QMARK_(url);
var dialog_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cancel-label","cancel-label",-1093310551),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","cancel","ui/cancel",-1964089788)], 0)),new cljs.core.Keyword(null,"ok-label","ok-label",808114315),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","confirm","ui/confirm",-2003996372)], 0))], null);
var G__55292 = (function (){var G__55294 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"asChild","asChild",682531623),true], null);
var G__55295 = (function (){var G__55296 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"ghost",new cljs.core.Keyword(null,"class","class",-2030961996),"graph-action-btn !px-1",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065)], null);
var G__55297 = frontend.ui.icon("dots",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(15)], null));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__55296,G__55297) : logseq.shui.ui.button.call(null,G__55296,G__55297));
})();
return (logseq.shui.ui.dropdown_menu_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_trigger.cljs$core$IFn$_invoke$arity$2(G__55294,G__55295) : logseq.shui.ui.dropdown_menu_trigger.call(null,G__55294,G__55295));
})();
var G__55293 = (function (){var G__55298 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align","align",1964212802),"end"], null);
var G__55299 = ((frontend.components.repo.open_in_another_tab_action_QMARK_(repo))?(function (){var G__55304 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"open-in-another-tab",new cljs.core.Keyword(null,"class","class",-2030961996),"open-in-another-tab-menu-item",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (G__55298,G__55292,manager_QMARK_,dialog_config,graph_name,map__55290,map__55290__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,s__55258__$2,temp__5825__auto__){
return (function (){
return frontend.components.repo.open_graph_in_another_tab_BANG_(repo);
});})(G__55298,G__55292,manager_QMARK_,dialog_config,graph_name,map__55290,map__55290__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,s__55258__$2,temp__5825__auto__))
], null);
var G__55305 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","open-in-another-tab-action","graph/open-in-another-tab-action",2074138388)], 0));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__55304,G__55305) : logseq.shui.ui.dropdown_menu_item.call(null,G__55304,G__55305));
})():null);
var G__55300 = (cljs.core.truth_(root)?(function (){var disabled_QMARK_ = (!(frontend.components.repo.can_delete_local_graph_QMARK_(repo)));
var G__55306 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),"delete-locally",new cljs.core.Keyword(null,"class","class",-2030961996),"delete-local-graph-menu-item",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (disabled_QMARK_,G__55298,G__55299,G__55292,manager_QMARK_,dialog_config,graph_name,map__55290,map__55290__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,s__55258__$2,temp__5825__auto__){
return (function (){
if(disabled_QMARK_){
return null;
} else {
return frontend.components.repo.delete_local_graph_BANG_(repo);
}
});})(disabled_QMARK_,G__55298,G__55299,G__55292,manager_QMARK_,dialog_config,graph_name,map__55290,map__55290__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,s__55258__$2,temp__5825__auto__))
], null);
var G__55307 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","delete-local-action","graph/delete-local-action",369637721)], 0));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__55306,G__55307) : logseq.shui.ui.dropdown_menu_item.call(null,G__55306,G__55307));
})():null);
var G__55301 = (cljs.core.truth_((function (){var and__5140__auto__ = root;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = frontend.handler.user.logged_in_QMARK_();
if(cljs.core.truth_(and__5140__auto____$1)){
return ((frontend.handler.user.rtc_group_QMARK_()) && (((cljs.core.not(remote_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(url,frontend.state.get_current_repo())))));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?(function (){var G__55308 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"logseq-sync",new cljs.core.Keyword(null,"class","class",-2030961996),"use-logseq-sync-menu-item",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (G__55298,G__55299,G__55300,G__55292,manager_QMARK_,dialog_config,graph_name,map__55290,map__55290__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,s__55258__$2,temp__5825__auto__){
return (function (){
return frontend.components.repo.upload_local_graph_with_confirm_BANG_(repo);
});})(G__55298,G__55299,G__55300,G__55292,manager_QMARK_,dialog_config,graph_name,map__55290,map__55290__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,s__55258__$2,temp__5825__auto__))
], null);
var G__55309 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","use-sync-beta","graph/use-sync-beta",433246085)], 0));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__55308,G__55309) : logseq.shui.ui.dropdown_menu_item.call(null,G__55308,G__55309));
})():null);
var G__55302 = (cljs.core.truth_((function (){var and__5140__auto__ = remote_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return manager_QMARK_;
} else {
return and__5140__auto__;
}
})())?(function (){var G__55311 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"delete-remotely",new cljs.core.Keyword(null,"class","class",-2030961996),"delete-remote-graph-menu-item",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (G__55298,G__55299,G__55300,G__55301,G__55292,manager_QMARK_,dialog_config,graph_name,map__55290,map__55290__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,s__55258__$2,temp__5825__auto__){
return (function (){
var prompt_str = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","delete-server-confirm-desc","graph/delete-server-confirm-desc",1107402730),graph_name], 0));
return promesa.core.then.cljs$core$IFn$_invoke$arity$2((function (){var G__55313 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(dialog_config,new cljs.core.Keyword(null,"title","title",636505583),prompt_str,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"description","description",-1428560544),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","delete-warning","graph/delete-warning",799212915)], 0))], 0));
return (logseq.shui.ui.dialog_confirm_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_confirm_BANG_.cljs$core$IFn$_invoke$arity$1(G__55313) : logseq.shui.ui.dialog_confirm_BANG_.call(null,G__55313));
})(),(function (){
frontend.state.set_state_BANG_(new cljs.core.Keyword("rtc","loading-graphs?","rtc/loading-graphs?",493247976),true);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),repo)){
frontend.handler.db_based.sync._LT_rtc_stop_BANG_();
} else {
}

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.sync._LT_rtc_delete_graph_BANG_(GraphUUID,GraphSchemaVersion)),(function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.set_state_BANG_(new cljs.core.Keyword("rtc","loading-graphs?","rtc/loading-graphs?",493247976),false)),(function (___21901__auto____$1){
return promesa.protocols._promise(frontend.handler.db_based.sync._LT_get_remote_graphs());
}));
}));
}));
}));
});})(G__55298,G__55299,G__55300,G__55301,G__55292,manager_QMARK_,dialog_config,graph_name,map__55290,map__55290__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,s__55258__$2,temp__5825__auto__))
], null);
var G__55312 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","delete-server-action","graph/delete-server-action",885911213)], 0));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__55311,G__55312) : logseq.shui.ui.dropdown_menu_item.call(null,G__55311,G__55312));
})():null);
var G__55303 = (cljs.core.truth_((function (){var and__5140__auto__ = remote_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (!(manager_QMARK_));
} else {
return and__5140__auto__;
}
})())?(function (){var G__55314 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"leave-shared-graph",new cljs.core.Keyword(null,"class","class",-2030961996),"leave-shared-graph-menu-item",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (G__55298,G__55299,G__55300,G__55301,G__55302,G__55292,manager_QMARK_,dialog_config,graph_name,map__55290,map__55290__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,s__55258__$2,temp__5825__auto__){
return (function (){
var prompt_str = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","leave-confirm-desc","graph/leave-confirm-desc",1125556217)], 0));
return promesa.core.then.cljs$core$IFn$_invoke$arity$2((function (){var G__55316 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.font-medium.-my-4","p.font-medium.-my-4",-390241889),prompt_str], null);
var G__55317 = dialog_config;
return (logseq.shui.ui.dialog_confirm_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_confirm_BANG_.cljs$core$IFn$_invoke$arity$2(G__55316,G__55317) : logseq.shui.ui.dialog_confirm_BANG_.call(null,G__55316,G__55317));
})(),(function (){
frontend.state.set_state_BANG_(new cljs.core.Keyword("rtc","loading-graphs?","rtc/loading-graphs?",493247976),true);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),repo)){
frontend.handler.db_based.sync._LT_rtc_stop_BANG_();
} else {
}

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.handler.db_based.sync._LT_rtc_leave_graph_BANG_(GraphUUID),(function (){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","left","graph/left",-438928631)], 0)),new cljs.core.Keyword(null,"success","success",1890645906));

return frontend.handler.db_based.sync._LT_get_remote_graphs();
})),(function (e){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","leave-error","graph/leave-error",1439163651)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));

if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.repo",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db-sync","leave-graph-failed","db-sync/leave-graph-failed",1439038341),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),e,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),GraphUUID], null),new cljs.core.Keyword(null,"line","line",212345235),300], null)),null);
} else {
return null;
}
})),(function (){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("rtc","loading-graphs?","rtc/loading-graphs?",493247976),false);
}));
}));
});})(G__55298,G__55299,G__55300,G__55301,G__55302,G__55292,manager_QMARK_,dialog_config,graph_name,map__55290,map__55290__$1,repo,remote_QMARK_,created_at,graph_e2ee_QMARK_,GraphName,GraphSchemaVersion,last_seen_at,root,GraphUUID,url,s__55258__$2,temp__5825__auto__))
], null);
var G__55315 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","leave-action","graph/leave-action",1556225926)], 0));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__55314,G__55315) : logseq.shui.ui.dropdown_menu_item.call(null,G__55314,G__55315));
})():null);
return (logseq.shui.ui.dropdown_menu_content.cljs$core$IFn$_invoke$arity$6 ? logseq.shui.ui.dropdown_menu_content.cljs$core$IFn$_invoke$arity$6(G__55298,G__55299,G__55300,G__55301,G__55302,G__55303) : logseq.shui.ui.dropdown_menu_content.call(null,G__55298,G__55299,G__55300,G__55301,G__55302,G__55303));
})();
return (logseq.shui.ui.dropdown_menu.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu.cljs$core$IFn$_invoke$arity$2(G__55292,G__55293) : logseq.shui.ui.dropdown_menu.call(null,G__55292,G__55293));
})()], null)], null)], null),frontend$components$repo$repos_inner_$_iter__55257(cljs.core.rest(s__55258__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(frontend.components.repo.sort_repos_with_metadata_local(repos));
});
var comp__31745__auto__ = (function() { 
var frontend$components$repo$repos_inner__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__55318 = cljs.core.first(args__31746__auto__);
var G__55319 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__55318,G__55319) : io.factorhouse.hsx.core.obj_get.call(null,G__55318,G__55319));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"repos-inner","repos-inner",-198594530,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$repo$repos_inner,args__31746__auto__,null);
}
};
var frontend$components$repo$repos_inner = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__55474__i = 0, G__55474__a = new Array(arguments.length -  0);
while (G__55474__i < G__55474__a.length) {G__55474__a[G__55474__i] = arguments[G__55474__i + 0]; ++G__55474__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__55474__a,0,null);
} 
return frontend$components$repo$repos_inner__delegate.call(this,args__31746__auto__);};
frontend$components$repo$repos_inner.cljs$lang$maxFixedArity = 0;
frontend$components$repo$repos_inner.cljs$lang$applyTo = (function (arglist__55475){
var args__31746__auto__ = cljs.core.seq(arglist__55475);
return frontend$components$repo$repos_inner__delegate(args__31746__auto__);
});
frontend$components$repo$repos_inner.cljs$core$IFn$_invoke$arity$variadic = frontend$components$repo$repos_inner__delegate;
return frontend$components$repo$repos_inner;
})()
;
var memo_comp__31747__auto__ = (function (){var G__55320 = comp__31745__auto__;
var G__55321 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__55320,G__55321) : io.factorhouse.hsx.core.react_memo.call(null,G__55320,G__55321));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"repos-inner");

return comp__31745__auto__;
})();
frontend.components.repo.repos_cp = (function (){var render_fn__31744__auto__ = (function frontend$components$repo$repos_cp(){
var login_QMARK_ = cljs.core.boolean$(frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("auth","id-token","auth/id-token",-332149946)], null)));
var repos = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword(null,"repos","repos",647483789)], null));
var repos__$1 = (frontend.util.distinct_by.cljs$core$IFn$_invoke$arity$2 ? frontend.util.distinct_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046),repos) : frontend.util.distinct_by.call(null,new cljs.core.Keyword(null,"url","url",276297046),repos));
var remotes = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rtc","graphs","rtc/graphs",-1584628267)], null));
var remotes_loading_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rtc","loading-graphs?","rtc/loading-graphs?",493247976)], null));
var repos__$2 = (function (){var G__55325 = new cljs.core.Keyword(null,"url","url",276297046);
var G__55326 = ((((login_QMARK_) && (cljs.core.seq(remotes))))?frontend.handler.repo.combine_local__AMPERSAND__remote_graphs(repos__$1,remotes):repos__$1);
return (frontend.util.distinct_by.cljs$core$IFn$_invoke$arity$2 ? frontend.util.distinct_by.cljs$core$IFn$_invoke$arity$2(G__55325,G__55326) : frontend.util.distinct_by.call(null,G__55325,G__55326));
})();
var repos__$3 = (function (){var G__55327 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__55322_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__55322_SHARP_),frontend.config.demo_repo);
}),repos__$2);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (item){
return frontend.config.db_based_graph_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(item));
}),G__55327);

})();
var map__55323 = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$,new cljs.core.Keyword(null,"remote?","remote?",-517415110)),repos__$3);
var map__55323__$1 = cljs.core.__destructure_map(map__55323);
var remote_graphs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55323__$1,true);
var local_graphs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55323__$1,false);
var map__55324 = cljs.core.group_by((function (graph){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("manager",new cljs.core.Keyword(null,"graph<->user-user-type","graph<->user-user-type",1524958981).cljs$core$IFn$_invoke$arity$1(graph));
}),remote_graphs);
var map__55324__$1 = cljs.core.__destructure_map(map__55324);
var own_graphs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55324__$1,true);
var shared_graphs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55324__$1,false);
logseq.shui.hooks.use_effect_BANG_((function (){
if(((login_QMARK_) && (frontend.handler.user.rtc_group_QMARK_()))){
return frontend.handler.db_based.sync._LT_get_remote_graphs();
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [login_QMARK_], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#graphs","div#graphs",1249293305),(cljs.core.truth_(frontend.util.capacitor_QMARK_())?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",-2139952071),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","all-graphs","graph/all-graphs",-193046305)], 0))], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pl-1.content","div.pl-1.content",1143905206),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(frontend.util.mobile_QMARK_())?null:"mt-8")], null),(cljs.core.truth_(frontend.util.mobile_QMARK_())?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.my-8","div.flex.flex-row.my-8",9207321),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mr-8","div.mr-8",674865009),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","create-new","graph/create-new",1636314094)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","new-db-graph","graph/new-db-graph",-1877792394)], null));
})], 0))], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-lg.font-medium.mb-4","h2.text-lg.font-medium.mb-4",-1314288166),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","local-graphs","graph/local-graphs",-729146600)], 0))], null),((cljs.core.seq(local_graphs))?frontend.components.repo.repos_inner(local_graphs):null)], null),((((frontend.handler.user.rtc_group_QMARK_()) && (((cljs.core.seq(remote_graphs)) && (login_QMARK_)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),((cljs.core.seq(own_graphs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.mt-8","hr.mt-8",59474258)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.align-items.justify-between","div.flex.align-items.justify-between",1123151828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-lg.font-medium.mb-4","h2.text-lg.font-medium.mb-4",-1314288166),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","remote-graphs","graph/remote-graphs",-1737922715)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center","span.flex.items-center",-463750193),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","refresh","ui/refresh",1947418185)], 0)),(cljs.core.truth_(remotes_loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.pl-2","small.pl-2",-778303966),frontend.ui.loading.cljs$core$IFn$_invoke$arity$1(null)], null):null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"background","background",-863952629),"gray",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),remotes_loading_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.db_based.sync._LT_get_remote_graphs();
})], 0))], null)], null),frontend.components.repo.repos_inner(own_graphs)], null):null),((cljs.core.seq(shared_graphs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.mt-8","hr.mt-8",59474258)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.align-items.justify-between","div.flex.align-items.justify-between",1123151828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-lg.font-medium.mb-4","h2.text-lg.font-medium.mb-4",-1314288166),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","shared-graphs","graph/shared-graphs",-1046842340)], 0))], null)], null),frontend.components.repo.repos_inner(shared_graphs)], null):null)], null):null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$repo$repos_cp__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__55328 = cljs.core.first(args__31746__auto__);
var G__55329 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__55328,G__55329) : io.factorhouse.hsx.core.obj_get.call(null,G__55328,G__55329));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"repos-cp","repos-cp",-1835132114,null),args__31746__auto__),frontend$components$repo$repos_cp,args__31746__auto__,null);
}
};
var frontend$components$repo$repos_cp = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__55476__i = 0, G__55476__a = new Array(arguments.length -  0);
while (G__55476__i < G__55476__a.length) {G__55476__a[G__55476__i] = arguments[G__55476__i + 0]; ++G__55476__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__55476__a,0,null);
} 
return frontend$components$repo$repos_cp__delegate.call(this,args__31746__auto__);};
frontend$components$repo$repos_cp.cljs$lang$maxFixedArity = 0;
frontend$components$repo$repos_cp.cljs$lang$applyTo = (function (arglist__55477){
var args__31746__auto__ = cljs.core.seq(arglist__55477);
return frontend$components$repo$repos_cp__delegate(args__31746__auto__);
});
frontend$components$repo$repos_cp.cljs$core$IFn$_invoke$arity$variadic = frontend$components$repo$repos_cp__delegate;
return frontend$components$repo$repos_cp;
})()
;
var memo_comp__31747__auto__ = (function (){var G__55330 = comp__31745__auto__;
var G__55331 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__55330,G__55331) : io.factorhouse.hsx.core.react_memo.call(null,G__55330,G__55331));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"repos-cp");

return comp__31745__auto__;
})();
frontend.components.repo.repos_dropdown_links = (function frontend$components$repo$repos_dropdown_links(var_args){
var args__5882__auto__ = [];
var len__5876__auto___55478 = arguments.length;
var i__5877__auto___55479 = (0);
while(true){
if((i__5877__auto___55479 < len__5876__auto___55478)){
args__5882__auto__.push((arguments[i__5877__auto___55479]));

var G__55480 = (i__5877__auto___55479 + (1));
i__5877__auto___55479 = G__55480;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return frontend.components.repo.repos_dropdown_links.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(frontend.components.repo.repos_dropdown_links.cljs$core$IFn$_invoke$arity$variadic = (function (repos,current_repo,downloading_graph_id,p__55336){
var map__55337 = p__55336;
var map__55337__$1 = cljs.core.__destructure_map(map__55337);
var opts = map__55337__$1;
var switch_repos = (((!((current_repo == null))))?cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (repo){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_repo,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(repo));
}),repos):repos);
var repo_links = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__55338){
var map__55339 = p__55338;
var map__55339__$1 = cljs.core.__destructure_map(map__55339);
var graph = map__55339__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55339__$1,new cljs.core.Keyword(null,"url","url",276297046));
var remote_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55339__$1,new cljs.core.Keyword(null,"remote?","remote?",-517415110));
var graph_e2ee_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55339__$1,new cljs.core.Keyword(null,"graph-e2ee?","graph-e2ee?",-1495428226));
var rtc_graph_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55339__$1,new cljs.core.Keyword(null,"rtc-graph?","rtc-graph?",-203036448));
var GraphName = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55339__$1,new cljs.core.Keyword(null,"GraphName","GraphName",-960661337));
var GraphSchemaVersion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55339__$1,new cljs.core.Keyword(null,"GraphSchemaVersion","GraphSchemaVersion",1094848752));
var GraphUUID = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55339__$1,new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531));
var graph_ready_for_use_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55339__$1,new cljs.core.Keyword(null,"graph-ready-for-use?","graph-ready-for-use?",-1081605254));
var repo_url = url;
var short_repo_name = frontend.util.text.get_graph_name_from_path(repo_url);
var downloading_QMARK_ = (function (){var and__5140__auto__ = downloading_graph_id;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(GraphUUID,downloading_graph_id);
} else {
return and__5140__auto__;
}
})();
var ready_for_use_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(false,graph_ready_for_use_QMARK_);
var title = (""+"<"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(GraphName)+"> #"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(GraphUUID));
if(cljs.core.truth_(short_repo_name)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.title-wrap","span.flex.items-center.title-wrap",-366003245),short_repo_name,(cljs.core.truth_(remote_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pl-1.flex.items-center","span.pl-1.flex.items-center",-1526306913),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),title], null),frontend.ui.icon((cljs.core.truth_(graph_e2ee_QMARK_)?"lock":"cloud"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(18)], null)),((ready_for_use_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity.text-sm.pl-1","span.opacity.text-sm.pl-1",1925395303),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","preparing","graph/preparing",1413494195)], 0))], null)),(cljs.core.truth_(downloading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity.text-sm.pl-1","span.opacity.text-sm.pl-1",1925395303),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","downloading","graph/downloading",-244906567)], 0))], null):null)], null):null)], null),new cljs.core.Keyword(null,"hover-detail","hover-detail",-1668874248),repo_url,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(((ready_for_use_QMARK_) && (cljs.core.not(downloading_QMARK_)))){
var temp__5825__auto___55481 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5825__auto___55481)){
var on_click_55482 = temp__5825__auto___55481;
(on_click_55482.cljs$core$IFn$_invoke$arity$1 ? on_click_55482.cljs$core$IFn$_invoke$arity$1(e) : on_click_55482.call(null,e));
} else {
}

if(cljs.core.truth_((function (){var and__5140__auto__ = frontend.components.repo.goog$module$goog$object.get(e,"shiftKey");
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(graph);
} else {
return and__5140__auto__;
}
})())){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","open-new-window","graph/open-new-window",-397266781),url], null));
} else {
var temp__5823__auto__ = frontend.components.repo.graph_open_new_window_target(graph);
if(cljs.core.truth_(temp__5823__auto__)){
var target = temp__5823__auto__;
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","open-new-window","graph/open-new-window",-397266781),target], null));
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.repo._LT_graph_open_new_window_target(graph)),(function (target){
return promesa.protocols._promise((cljs.core.truth_(target)?frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","open-new-window","graph/open-new-window",-397266781),target], null)):null));
}));
}));
}
}
} else {
if(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(graph);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.not(rtc_graph_QMARK_);
}
})())){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","switch","graph/switch",178853840),url], null));
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = rtc_graph_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return remote_QMARK_;
} else {
return and__5140__auto__;
}
})())){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rtc","download-remote-graph","rtc/download-remote-graph",508601916),GraphName,GraphUUID,GraphSchemaVersion,graph_e2ee_QMARK_], null));
} else {
return null;

}
}
}
} else {
return null;
}
})], null)], null);
} else {
return null;
}
}),switch_repos);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,repo_links);
}));

(frontend.components.repo.repos_dropdown_links.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(frontend.components.repo.repos_dropdown_links.cljs$lang$applyTo = (function (seq55332){
var G__55333 = cljs.core.first(seq55332);
var seq55332__$1 = cljs.core.next(seq55332);
var G__55334 = cljs.core.first(seq55332__$1);
var seq55332__$2 = cljs.core.next(seq55332__$1);
var G__55335 = cljs.core.first(seq55332__$2);
var seq55332__$3 = cljs.core.next(seq55332__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55333,G__55334,G__55335,seq55332__$3);
}));

frontend.components.repo.repos_footer = (function frontend$components$repo$repos_footer(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__repos-quick-actions","div.cp__repos-quick-actions",1707798218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
})], null),((frontend.config.publishing_QMARK_)?null:(function (){var G__55351 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","new-db-graph","graph/new-db-graph",-1877792394)], null));
})], null);
var G__55352 = logseq.shui.ui.tabler_icon("database-plus");
var G__55353 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(frontend.util.electron_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","create-db","graph/create-db",870861422)], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","create-new","graph/create-new",1636314094)], 0)))], null);
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__55351,G__55352,G__55353) : logseq.shui.ui.button.call(null,G__55351,G__55352,G__55353));
})()),((frontend.config.publishing_QMARK_)?null:(function (){var G__55354 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"import","import",-1399500709)], null));
})], null);
var G__55355 = logseq.shui.ui.tabler_icon("database-import");
var G__55356 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","notes","import/notes",115894224)], 0))], null);
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__55354,G__55355,G__55356) : logseq.shui.ui.button.call(null,G__55354,G__55355,G__55356));
})()),((frontend.config.publishing_QMARK_)?null:(function (){var G__55357 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(frontend.util.capacitor_QMARK_())){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("mobile","set-tab","mobile/set-tab",-1818190267),"graphs"], null));
} else {
return frontend.handler.route.redirect_to_all_graphs();
}
})], null);
var G__55358 = logseq.shui.ui.tabler_icon("layout-2");
var G__55359 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","all-graphs","graph/all-graphs",-193046305)], 0))], null);
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__55357,G__55358,G__55359) : logseq.shui.ui.button.call(null,G__55357,G__55358,G__55359));
})())], null);
});
frontend.components.repo.close_sidebar_after_repo_popup_action_BANG_ = (function frontend$components$repo$close_sidebar_after_repo_popup_action_BANG_(){
if(frontend.util.sm_breakpoint_QMARK_()){
return setTimeout((function (){
return frontend.state.set_left_sidebar_open_BANG_(false);
}),(0));
} else {
return null;
}
});
frontend.components.repo.repo_popup_action_target_QMARK_ = (function frontend$components$repo$repo_popup_action_target_QMARK_(target){
return cljs.core.boolean$(target.closest("a, button, [role='menuitem']"));
});
frontend.components.repo.repos_dropdown_content = (function (){var render_fn__31744__auto__ = (function() { 
var frontend$components$repo$repos_dropdown_content__delegate = function (p__55379){
var map__55380 = p__55379;
var map__55380__$1 = cljs.core.__destructure_map(map__55380);
var opts = map__55380__$1;
var contentid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55380__$1,new cljs.core.Keyword(null,"contentid","contentid",-911323860));
var footer_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55380__$1,new cljs.core.Keyword(null,"footer?","footer?",-986176238),true);
var current_repo = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("git","current-repo","git/current-repo",107438825)], null));
var login_QMARK_ = cljs.core.boolean$(frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("auth","id-token","auth/id-token",-332149946)], null)));
var repos = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword(null,"repos","repos",647483789)], null));
var rtc_graphs = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rtc","graphs","rtc/graphs",-1584628267)], null));
var downloading_graph_id = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rtc","downloading-graph-uuid","rtc/downloading-graph-uuid",460109193)], null));
var remotes_loading_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rtc","loading-graphs?","rtc/loading-graphs?",493247976)], null));
var repos__$1 = frontend.components.repo.sort_repos_with_metadata_local(repos);
var repos__$2 = (function (){var G__55383 = new cljs.core.Keyword(null,"url","url",276297046);
var G__55384 = ((((cljs.core.seq(rtc_graphs)) && (login_QMARK_)))?frontend.handler.repo.combine_local__AMPERSAND__remote_graphs(repos__$1,rtc_graphs):repos__$1);
return (frontend.util.distinct_by.cljs$core$IFn$_invoke$arity$2 ? frontend.util.distinct_by.cljs$core$IFn$_invoke$arity$2(G__55383,G__55384) : frontend.util.distinct_by.call(null,G__55383,G__55384));
})();
var items_fn = (function (){
return frontend.components.repo.repos_dropdown_links.cljs$core$IFn$_invoke$arity$variadic(repos__$2,current_repo,downloading_graph_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0));
});
var header_fn = (function (){
if((cljs.core.count(repos__$2) > (1))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-medium.md:text-sm.md:opacity-50.p-2.flex.flex-row.justify-between.items-center","div.font-medium.md:text-sm.md:opacity-50.p-2.flex.flex-row.justify-between.items-center",-1911989152),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.pb-1","h4.pb-1",89664618),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph.switch","prompt","graph.switch/prompt",-2146566747)], 0))], null),((login_QMARK_)?(cljs.core.truth_(remotes_loading_QMARK_)?frontend.ui.loading.cljs$core$IFn$_invoke$arity$1(""):(function (){var G__55392 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","refresh-remote-graphs","graph/refresh-remote-graphs",1421782749)], 0)),new cljs.core.Keyword(null,"class","class",-2030961996),"!h-6 !px-1 relative right-[-4px]",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.db_based.sync._LT_get_remote_graphs();
})], null);
var G__55393 = frontend.ui.icon("refresh",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(15)], null));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__55392,G__55393) : logseq.shui.ui.button.call(null,G__55392,G__55393));
})()):null)], null);
} else {
return null;
}
});
var _remote_QMARK_ = (function (){var and__5140__auto__ = current_repo;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"remote?","remote?",-517415110).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55376_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_repo,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__55376_SHARP_));
}),repos__$2)));
} else {
return and__5140__auto__;
}
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(((cljs.core.count(repos__$2) <= (1)))?"no-repos":null)], null),header_fn(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__repos-list-wrap","div.cp__repos-list-wrap",-148548684),(function (){var iter__5628__auto__ = (function frontend$components$repo$repos_dropdown_content_$_iter__55394(s__55395){
return (new cljs.core.LazySeq(null,(function (){
var s__55395__$1 = s__55395;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__55395__$1);
if(temp__5825__auto__){
var s__55395__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55395__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__55395__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__55397 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__55396 = (0);
while(true){
if((i__55396 < size__5627__auto__)){
var vec__55398 = cljs.core._nth(c__5626__auto__,i__55396);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55398,(0),null);
var map__55401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55398,(1),null);
var map__55401__$1 = cljs.core.__destructure_map(map__55401);
var hr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55401__$1,new cljs.core.Keyword(null,"hr","hr",1377740067));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55401__$1,new cljs.core.Keyword(null,"item","item",249373802));
var hover_detail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55401__$1,new cljs.core.Keyword(null,"hover-detail","hover-detail",-1668874248));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55401__$1,new cljs.core.Keyword(null,"title","title",636505583));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55401__$1,new cljs.core.Keyword(null,"options","options",99638489));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55401__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
cljs.core.chunk_append(b__55397,(function (){var on_click_SINGLEQUOTE_ = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(options);
var href_SINGLEQUOTE_ = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(options);
var menu_item = (cljs.core.truth_(frontend.util.mobile_QMARK_())?frontend.ui.menu_link:logseq.shui.ui.dropdown_menu_item);
if(cljs.core.truth_(hr)){
if(cljs.core.truth_(frontend.util.mobile_QMARK_())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.py-2","hr.py-2",-1810532693),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"separator-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx))], null)], null);
} else {
var G__55402 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"separator-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx))], null);
return (logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$1(G__55402) : logseq.shui.ui.dropdown_menu_separator.call(null,G__55402));
}
} else {
var G__55403 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword(null,"key","key",-1516042587),(function (){var or__5142__auto__ = href_SINGLEQUOTE_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = hover_detail;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return (""+"repo-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx));
}
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"title","title",636505583),hover_detail,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55396,on_click_SINGLEQUOTE_,href_SINGLEQUOTE_,menu_item,vec__55398,idx,map__55401,map__55401__$1,hr,item,hover_detail,title,options,icon,c__5626__auto__,size__5627__auto__,b__55397,s__55395__$2,temp__5825__auto__,current_repo,login_QMARK_,repos,rtc_graphs,downloading_graph_id,remotes_loading_QMARK_,repos__$1,repos__$2,items_fn,header_fn,_remote_QMARK_,map__55380,map__55380__$1,opts,contentid,footer_QMARK_){
return (function (e){
if(cljs.core.truth_(on_click_SINGLEQUOTE_)){
if((on_click_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? on_click_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(e) : on_click_SINGLEQUOTE_.call(null,e)) === false){
return null;
} else {
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(contentid) : logseq.shui.ui.popup_hide_BANG_.call(null,contentid));
}
} else {
return null;
}
});})(i__55396,on_click_SINGLEQUOTE_,href_SINGLEQUOTE_,menu_item,vec__55398,idx,map__55401,map__55401__$1,hr,item,hover_detail,title,options,icon,c__5626__auto__,size__5627__auto__,b__55397,s__55395__$2,temp__5825__auto__,current_repo,login_QMARK_,repos,rtc_graphs,downloading_graph_id,remotes_loading_QMARK_,repos__$1,repos__$2,items_fn,header_fn,_remote_QMARK_,map__55380,map__55380__$1,opts,contentid,footer_QMARK_))
], 0));
var G__55404 = (function (){var or__5142__auto__ = item;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.truth_(href_SINGLEQUOTE_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.items-center.w-full","a.flex.items-center.w-full",578384940),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),href_SINGLEQUOTE_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55396,or__5142__auto__,G__55403,on_click_SINGLEQUOTE_,href_SINGLEQUOTE_,menu_item,vec__55398,idx,map__55401,map__55401__$1,hr,item,hover_detail,title,options,icon,c__5626__auto__,size__5627__auto__,b__55397,s__55395__$2,temp__5825__auto__,current_repo,login_QMARK_,repos,rtc_graphs,downloading_graph_id,remotes_loading_QMARK_,repos__$1,repos__$2,items_fn,header_fn,_remote_QMARK_,map__55380,map__55380__$1,opts,contentid,footer_QMARK_){
return (function (){
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(contentid) : logseq.shui.ui.popup_hide_BANG_.call(null,contentid));
});})(i__55396,or__5142__auto__,G__55403,on_click_SINGLEQUOTE_,href_SINGLEQUOTE_,menu_item,vec__55398,idx,map__55401,map__55401__$1,hr,item,hover_detail,title,options,icon,c__5626__auto__,size__5627__auto__,b__55397,s__55395__$2,temp__5825__auto__,current_repo,login_QMARK_,repos,rtc_graphs,downloading_graph_id,remotes_loading_QMARK_,repos__$1,repos__$2,items_fn,header_fn,_remote_QMARK_,map__55380,map__55380__$1,opts,contentid,footer_QMARK_))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"inherit"], null)], null),title], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1.w-full","span.flex.items-center.gap-1.w-full",1802139938),icon,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),title], null)], null);
}
}
})();
return (menu_item.cljs$core$IFn$_invoke$arity$2 ? menu_item.cljs$core$IFn$_invoke$arity$2(G__55403,G__55404) : menu_item.call(null,G__55403,G__55404));
}
})());

var G__55483 = (i__55396 + (1));
i__55396 = G__55483;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55397),frontend$components$repo$repos_dropdown_content_$_iter__55394(cljs.core.chunk_rest(s__55395__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55397),null);
}
} else {
var vec__55405 = cljs.core.first(s__55395__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55405,(0),null);
var map__55408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55405,(1),null);
var map__55408__$1 = cljs.core.__destructure_map(map__55408);
var hr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55408__$1,new cljs.core.Keyword(null,"hr","hr",1377740067));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55408__$1,new cljs.core.Keyword(null,"item","item",249373802));
var hover_detail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55408__$1,new cljs.core.Keyword(null,"hover-detail","hover-detail",-1668874248));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55408__$1,new cljs.core.Keyword(null,"title","title",636505583));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55408__$1,new cljs.core.Keyword(null,"options","options",99638489));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55408__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
return cljs.core.cons((function (){var on_click_SINGLEQUOTE_ = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(options);
var href_SINGLEQUOTE_ = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(options);
var menu_item = (cljs.core.truth_(frontend.util.mobile_QMARK_())?frontend.ui.menu_link:logseq.shui.ui.dropdown_menu_item);
if(cljs.core.truth_(hr)){
if(cljs.core.truth_(frontend.util.mobile_QMARK_())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.py-2","hr.py-2",-1810532693),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"separator-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx))], null)], null);
} else {
var G__55409 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"separator-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx))], null);
return (logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$1(G__55409) : logseq.shui.ui.dropdown_menu_separator.call(null,G__55409));
}
} else {
var G__55410 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword(null,"key","key",-1516042587),(function (){var or__5142__auto__ = href_SINGLEQUOTE_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = hover_detail;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return (""+"repo-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx));
}
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"title","title",636505583),hover_detail,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (on_click_SINGLEQUOTE_,href_SINGLEQUOTE_,menu_item,vec__55405,idx,map__55408,map__55408__$1,hr,item,hover_detail,title,options,icon,s__55395__$2,temp__5825__auto__,current_repo,login_QMARK_,repos,rtc_graphs,downloading_graph_id,remotes_loading_QMARK_,repos__$1,repos__$2,items_fn,header_fn,_remote_QMARK_,map__55380,map__55380__$1,opts,contentid,footer_QMARK_){
return (function (e){
if(cljs.core.truth_(on_click_SINGLEQUOTE_)){
if((on_click_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? on_click_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(e) : on_click_SINGLEQUOTE_.call(null,e)) === false){
return null;
} else {
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(contentid) : logseq.shui.ui.popup_hide_BANG_.call(null,contentid));
}
} else {
return null;
}
});})(on_click_SINGLEQUOTE_,href_SINGLEQUOTE_,menu_item,vec__55405,idx,map__55408,map__55408__$1,hr,item,hover_detail,title,options,icon,s__55395__$2,temp__5825__auto__,current_repo,login_QMARK_,repos,rtc_graphs,downloading_graph_id,remotes_loading_QMARK_,repos__$1,repos__$2,items_fn,header_fn,_remote_QMARK_,map__55380,map__55380__$1,opts,contentid,footer_QMARK_))
], 0));
var G__55411 = (function (){var or__5142__auto__ = item;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.truth_(href_SINGLEQUOTE_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.items-center.w-full","a.flex.items-center.w-full",578384940),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),href_SINGLEQUOTE_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (or__5142__auto__,G__55410,on_click_SINGLEQUOTE_,href_SINGLEQUOTE_,menu_item,vec__55405,idx,map__55408,map__55408__$1,hr,item,hover_detail,title,options,icon,s__55395__$2,temp__5825__auto__,current_repo,login_QMARK_,repos,rtc_graphs,downloading_graph_id,remotes_loading_QMARK_,repos__$1,repos__$2,items_fn,header_fn,_remote_QMARK_,map__55380,map__55380__$1,opts,contentid,footer_QMARK_){
return (function (){
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(contentid) : logseq.shui.ui.popup_hide_BANG_.call(null,contentid));
});})(or__5142__auto__,G__55410,on_click_SINGLEQUOTE_,href_SINGLEQUOTE_,menu_item,vec__55405,idx,map__55408,map__55408__$1,hr,item,hover_detail,title,options,icon,s__55395__$2,temp__5825__auto__,current_repo,login_QMARK_,repos,rtc_graphs,downloading_graph_id,remotes_loading_QMARK_,repos__$1,repos__$2,items_fn,header_fn,_remote_QMARK_,map__55380,map__55380__$1,opts,contentid,footer_QMARK_))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"inherit"], null)], null),title], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1.w-full","span.flex.items-center.gap-1.w-full",1802139938),icon,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),title], null)], null);
}
}
})();
return (menu_item.cljs$core$IFn$_invoke$arity$2 ? menu_item.cljs$core$IFn$_invoke$arity$2(G__55410,G__55411) : menu_item.call(null,G__55410,G__55411));
}
})(),frontend$components$repo$repos_dropdown_content_$_iter__55394(cljs.core.rest(s__55395__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,items_fn()));
})()], null),(cljs.core.truth_(footer_QMARK_)?frontend.components.repo.repos_footer():null)], null);
};
var frontend$components$repo$repos_dropdown_content = function (var_args){
var p__55379 = null;
if (arguments.length > 0) {
var G__55484__i = 0, G__55484__a = new Array(arguments.length -  0);
while (G__55484__i < G__55484__a.length) {G__55484__a[G__55484__i] = arguments[G__55484__i + 0]; ++G__55484__i;}
  p__55379 = new cljs.core.IndexedSeq(G__55484__a,0,null);
} 
return frontend$components$repo$repos_dropdown_content__delegate.call(this,p__55379);};
frontend$components$repo$repos_dropdown_content.cljs$lang$maxFixedArity = 0;
frontend$components$repo$repos_dropdown_content.cljs$lang$applyTo = (function (arglist__55485){
var p__55379 = cljs.core.seq(arglist__55485);
return frontend$components$repo$repos_dropdown_content__delegate(p__55379);
});
frontend$components$repo$repos_dropdown_content.cljs$core$IFn$_invoke$arity$variadic = frontend$components$repo$repos_dropdown_content__delegate;
return frontend$components$repo$repos_dropdown_content;
})()
;
var comp__31745__auto__ = (function() { 
var frontend$components$repo$repos_dropdown_content__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__55412 = cljs.core.first(args__31746__auto__);
var G__55413 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__55412,G__55413) : io.factorhouse.hsx.core.obj_get.call(null,G__55412,G__55413));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"repos-dropdown-content","repos-dropdown-content",-500417918,null),args__31746__auto__),frontend$components$repo$repos_dropdown_content,args__31746__auto__,null);
}
};
var frontend$components$repo$repos_dropdown_content = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__55486__i = 0, G__55486__a = new Array(arguments.length -  0);
while (G__55486__i < G__55486__a.length) {G__55486__a[G__55486__i] = arguments[G__55486__i + 0]; ++G__55486__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__55486__a,0,null);
} 
return frontend$components$repo$repos_dropdown_content__delegate.call(this,args__31746__auto__);};
frontend$components$repo$repos_dropdown_content.cljs$lang$maxFixedArity = 0;
frontend$components$repo$repos_dropdown_content.cljs$lang$applyTo = (function (arglist__55487){
var args__31746__auto__ = cljs.core.seq(arglist__55487);
return frontend$components$repo$repos_dropdown_content__delegate(args__31746__auto__);
});
frontend$components$repo$repos_dropdown_content.cljs$core$IFn$_invoke$arity$variadic = frontend$components$repo$repos_dropdown_content__delegate;
return frontend$components$repo$repos_dropdown_content;
})()
;
var memo_comp__31747__auto__ = (function (){var G__55414 = comp__31745__auto__;
var G__55415 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__55414,G__55415) : io.factorhouse.hsx.core.react_memo.call(null,G__55414,G__55415));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"repos-dropdown-content");

return comp__31745__auto__;
})();
frontend.components.repo.current_repo_context_menu_content = (function frontend$components$repo$current_repo_context_menu_content(repo){
var disabled_QMARK_ = (!(frontend.components.repo.can_delete_local_graph_QMARK_(repo)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(function (){var G__55416 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"open-repo-folder",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.components.repo.open_repo_folder_BANG_(repo);
})], null);
var G__55417 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1","span.flex.items-center.gap-1",-111995724),frontend.ui.icon("folder-pin"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","open-folder-action","graph/open-folder-action",-1644143201)], 0))], null);
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__55416,G__55417) : logseq.shui.ui.dropdown_menu_item.call(null,G__55416,G__55417));
})(),(logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dropdown_menu_separator.call(null)),(function (){var G__55418 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),"delete-locally",new cljs.core.Keyword(null,"class","class",-2030961996),"delete-local-graph-menu-item",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(disabled_QMARK_){
return null;
} else {
return frontend.components.repo.delete_local_graph_BANG_(repo);
}
})], null);
var G__55419 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1.text-red-700","span.flex.items-center.gap-1.text-red-700",1004940826),frontend.ui.icon("trash"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","delete-local-action","graph/delete-local-action",369637721)], 0))], null);
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__55418,G__55419) : logseq.shui.ui.dropdown_menu_item.call(null,G__55418,G__55419));
})()], null);
});
frontend.components.repo.graphs_selector = (function (){var render_fn__31744__auto__ = (function frontend$components$repo$graphs_selector(){
var current_repo = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("git","current-repo","git/current-repo",107438825)], null));
var user_repos = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword(null,"repos","repos",647483789)], null));
var current_repo_SINGLEQUOTE_ = (function (){var G__55421 = user_repos;
if((G__55421 == null)){
return null;
} else {
return medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p1__55420_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_repo,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__55420_SHARP_));
}),G__55421);
}
})();
var remote_QMARK_ = new cljs.core.Keyword(null,"remote?","remote?",-517415110).cljs$core$IFn$_invoke$arity$1(current_repo_SINGLEQUOTE_);
var short_repo_name = (cljs.core.truth_(current_repo)?frontend.components.repo.repo_display_name(current_repo):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph.switch","select-prompt","graph.switch/select-prompt",-1925461736)], 0)));
var selector_opts = (function (){var G__55422 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var G__55423 = e.target.closest("a");
var G__55424 = (function (p__55426){
var map__55427 = p__55426;
var map__55427__$1 = cljs.core.__destructure_map(map__55427);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55427__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return frontend.components.repo.repos_dropdown_content(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contentid","contentid",-911323860),id], null));
});
var G__55425 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"as-dropdown?","as-dropdown?",-37553558),true,new cljs.core.Keyword(null,"focus-trigger?","focus-trigger?",799847826),false,new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"repos-list",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e__$1){
if(frontend.components.repo.repo_popup_action_target_QMARK_(e__$1.target)){
return frontend.components.repo.close_sidebar_after_repo_popup_action_BANG_();
} else {
return null;
}
})], null),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981)], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__55423,G__55424,G__55425) : logseq.shui.ui.popup_show_BANG_.call(null,G__55423,G__55424,G__55425));
})], null);
if(cljs.core.truth_((function (){var and__5140__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(current_repo_SINGLEQUOTE_);
} else {
return and__5140__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55422,new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),(function (e){
frontend.util.stop(e);

var G__55428 = e;
var G__55429 = (function (){
return frontend.components.repo.current_repo_context_menu_content(current_repo_SINGLEQUOTE_);
});
var G__55430 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-dropdown?","as-dropdown?",-37553558),true,new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"w-60"], null)], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__55428,G__55429,G__55430) : logseq.shui.ui.popup_show_BANG_.call(null,G__55428,G__55429,G__55430));
}));
} else {
return G__55422;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__graphs-selector.flex.items-center.justify-between","div.cp__graphs-selector.flex.items-center.justify-between",104180877),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.item.flex.items-center.gap-1.select-none","a.item.flex.items-center.gap-1.select-none",-394554971),selector_opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.thumb","span.thumb",-1041947659),logseq.shui.ui.tabler_icon((cljs.core.truth_(remote_QMARK_)?"cloud":"topology-star"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(16)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),short_repo_name], null),logseq.shui.ui.tabler_icon("selector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(18)], null))], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$repo$graphs_selector__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__55431 = cljs.core.first(args__31746__auto__);
var G__55432 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__55431,G__55432) : io.factorhouse.hsx.core.obj_get.call(null,G__55431,G__55432));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"graphs-selector","graphs-selector",1414247005,null),args__31746__auto__),frontend$components$repo$graphs_selector,args__31746__auto__,null);
}
};
var frontend$components$repo$graphs_selector = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__55488__i = 0, G__55488__a = new Array(arguments.length -  0);
while (G__55488__i < G__55488__a.length) {G__55488__a[G__55488__i] = arguments[G__55488__i + 0]; ++G__55488__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__55488__a,0,null);
} 
return frontend$components$repo$graphs_selector__delegate.call(this,args__31746__auto__);};
frontend$components$repo$graphs_selector.cljs$lang$maxFixedArity = 0;
frontend$components$repo$graphs_selector.cljs$lang$applyTo = (function (arglist__55489){
var args__31746__auto__ = cljs.core.seq(arglist__55489);
return frontend$components$repo$graphs_selector__delegate(args__31746__auto__);
});
frontend$components$repo$graphs_selector.cljs$core$IFn$_invoke$arity$variadic = frontend$components$repo$graphs_selector__delegate;
return frontend$components$repo$graphs_selector;
})()
;
var memo_comp__31747__auto__ = (function (){var G__55433 = comp__31745__auto__;
var G__55434 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__55433,G__55434) : io.factorhouse.hsx.core.react_memo.call(null,G__55433,G__55434));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"graphs-selector");

return comp__31745__auto__;
})();
frontend.components.repo.multiplatform_reserved_chars = ":\\*\\?\"<>|\\#\\\\";
frontend.components.repo.reserved_chars_pattern = cljs.core.re_pattern((""+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.components.repo.multiplatform_reserved_chars)+"]+"));
/**
 * Includes reserved characters that would broken FS
 */
frontend.components.repo.include_reserved_chars_QMARK_ = (function frontend$components$repo$include_reserved_chars_QMARK_(s){
return logseq.common.util.safe_re_find(frontend.components.repo.reserved_chars_pattern,s);
});
frontend.components.repo.reserved_character_item = (function frontend$components$repo$reserved_character_item(character,label){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(character)+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+")")], null);
});
frontend.components.repo.invalid_graph_name_warning = (function frontend$components$repo$invalid_graph_name_warning(){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph.validation","name-reserved-characters-warning","graph.validation/name-reserved-characters-warning",405067400)], 0))], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),frontend.components.repo.reserved_character_item("<",frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph.validation","reserved-character-less-than","graph.validation/reserved-character-less-than",2062776967)], 0))),frontend.components.repo.reserved_character_item(">",frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph.validation","reserved-character-greater-than","graph.validation/reserved-character-greater-than",-1335993777)], 0))),frontend.components.repo.reserved_character_item(":",frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph.validation","reserved-character-colon","graph.validation/reserved-character-colon",667984903)], 0))),frontend.components.repo.reserved_character_item("\"",frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph.validation","reserved-character-double-quote","graph.validation/reserved-character-double-quote",-1350599054)], 0))),frontend.components.repo.reserved_character_item("/",frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph.validation","reserved-character-forward-slash","graph.validation/reserved-character-forward-slash",862104700)], 0))),frontend.components.repo.reserved_character_item("\\",frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph.validation","reserved-character-backslash","graph.validation/reserved-character-backslash",-1365470723)], 0))),frontend.components.repo.reserved_character_item("|",frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph.validation","reserved-character-pipe","graph.validation/reserved-character-pipe",-631536633)], 0))),frontend.components.repo.reserved_character_item("?",frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph.validation","reserved-character-question-mark","graph.validation/reserved-character-question-mark",-1519909670)], 0))),frontend.components.repo.reserved_character_item("*",frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph.validation","reserved-character-asterisk","graph.validation/reserved-character-asterisk",-134276001)], 0))),frontend.components.repo.reserved_character_item("#",frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph.validation","reserved-character-hash","graph.validation/reserved-character-hash",787482699)], 0))),frontend.components.repo.reserved_character_item("+",frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph.validation","reserved-character-plus","graph.validation/reserved-character-plus",1162802357)], 0)))], null)], null),new cljs.core.Keyword(null,"warning","warning",-1685650671),false);
});
/**
 * Returns boolean indicating if DB graph name is invalid. Must be kept in sync with invalid-graph-name-warning
 */
frontend.components.repo.invalid_graph_name_QMARK_ = (function frontend$components$repo$invalid_graph_name_QMARK_(graph_name){
var or__5142__auto__ = frontend.components.repo.include_reserved_chars_QMARK_(graph_name);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return ((clojure.string.includes_QMARK_(graph_name,"+")) || (clojure.string.includes_QMARK_(graph_name,"/")));
}
});
frontend.components.repo.ensure_e2ee_rsa_key_for_cloud_BANG_ = (function frontend$components$repo$ensure_e2ee_rsa_key_for_cloud_BANG_(p__55435,set_e2ee_rsa_key_ensured_QMARK_){
var map__55436 = p__55435;
var map__55436__$1 = cljs.core.__destructure_map(map__55436);
var cloud_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55436__$1,new cljs.core.Keyword(null,"cloud?","cloud?",1568476951));
var graph_e2ee_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55436__$1,new cljs.core.Keyword(null,"graph-e2ee?","graph-e2ee?",-1495428226));
var refresh_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55436__$1,new cljs.core.Keyword(null,"refresh-token","refresh-token",-1032003584));
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55436__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var user_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55436__$1,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048));
var e2ee_rsa_key_ensured_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55436__$1,new cljs.core.Keyword(null,"e2ee-rsa-key-ensured?","e2ee-rsa-key-ensured?",1733960865));
if(cljs.core.truth_((function (){var and__5140__auto__ = cloud_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = graph_e2ee_QMARK_;
if(cljs.core.truth_(and__5140__auto____$1)){
var and__5140__auto____$2 = refresh_token;
if(cljs.core.truth_(and__5140__auto____$2)){
var and__5140__auto____$3 = token;
if(cljs.core.truth_(and__5140__auto____$3)){
var and__5140__auto____$4 = user_uuid;
if(cljs.core.truth_(and__5140__auto____$4)){
return cljs.core.not(e2ee_rsa_key_ensured_QMARK_);
} else {
return and__5140__auto____$4;
}
} else {
return and__5140__auto____$3;
}
} else {
return and__5140__auto____$2;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rtc","sync-app-state","rtc/sync-app-state",-1693789406)], null))),(function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.repo._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","set-db-sync-config","thread-api/set-db-sync-config",-619924056),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"ws-url","ws-url",-1466481235),frontend.config.db_sync_ws_url(),new cljs.core.Keyword(null,"http-base","http-base",2042022955),frontend.config.db_sync_http_base()], null)], 0))),(function (___21901__auto____$1){
return promesa.protocols._promise(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.repo._LT_invoke_db_worker(new cljs.core.Keyword("thread-api","db-sync-ensure-user-rsa-keys","thread-api/db-sync-ensure-user-rsa-keys",973720503))),(function (rsa_key_pair){
return promesa.protocols._promise((function (){var G__55437 = (!((rsa_key_pair == null)));
return (set_e2ee_rsa_key_ensured_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_e2ee_rsa_key_ensured_QMARK_.cljs$core$IFn$_invoke$arity$1(G__55437) : set_e2ee_rsa_key_ensured_QMARK_.call(null,G__55437));
})());
}));
})));
}));
}));
})),(function (e){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.repo",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db-sync","ensure-user-rsa-keys-failed","db-sync/ensure-user-rsa-keys-failed",-1415114600),e,new cljs.core.Keyword(null,"line","line",212345235),638], null)),null);
} else {
}

return e;
}));
} else {
return promesa.core.resolved(null);
}
});
frontend.components.repo.new_db_graph_inner = (function (){var render_fn__31744__auto__ = (function frontend$components$repo$new_db_graph_inner(rtc_group_QMARK_){
var vec__55439 = logseq.shui.hooks.use_state(false);
var creating_db_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55439,(0),null);
var set_creating_db_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55439,(1),null);
var vec__55442 = logseq.shui.hooks.use_state(false);
var cloud_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55442,(0),null);
var set_cloud_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55442,(1),null);
var vec__55445 = logseq.shui.hooks.use_state(true);
var graph_e2ee_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55445,(0),null);
var set_graph_e2ee_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55445,(1),null);
var vec__55448 = logseq.shui.hooks.use_state(null);
var e2ee_rsa_key_ensured_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55448,(0),null);
var set_e2ee_rsa_key_ensured_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55448,(1),null);
var input_ref = (logseq.shui.hooks.create_ref.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.hooks.create_ref.cljs$core$IFn$_invoke$arity$0() : logseq.shui.hooks.create_ref.call(null));
var new_db_f = (function frontend$components$repo$new_db_graph_inner_$_new_db_f(graph_name){
if(cljs.core.truth_((function (){var or__5142__auto__ = clojure.string.blank_QMARK_(graph_name);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return creating_db_QMARK_;
}
})())){
return null;
} else {
if(cljs.core.truth_(frontend.components.repo.invalid_graph_name_QMARK_(graph_name))){
return frontend.components.repo.invalid_graph_name_warning();
} else {
(set_creating_db_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_creating_db_QMARK_.cljs$core$IFn$_invoke$arity$1(true) : set_creating_db_QMARK_.call(null,true));

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.repo.new_db_BANG_.cljs$core$IFn$_invoke$arity$2(graph_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"creating-remote-graph?","creating-remote-graph?",-249407044),cloud_QMARK_], null))),(function (repo){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(cloud_QMARK_)?promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._promise(frontend.handler.db_based.sync._LT_rtc_create_graph_and_start_sync_BANG_(repo,graph_e2ee_QMARK_));
})),frontend.components.repo.handle_cloud_graph_error_BANG_),(function (){
return (set_creating_db_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_creating_db_QMARK_.cljs$core$IFn$_invoke$arity$1(false) : set_creating_db_QMARK_.call(null,false));
})):null)),(function (___21901__auto__){
return promesa.protocols._promise((logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dialog_close_BANG_.call(null)));
}));
}));
}));
}
}
});
var submit_BANG_ = (function frontend$components$repo$new_db_graph_inner_$_submit_BANG_(e,click_QMARK_){
var temp__5825__auto__ = (function (){var and__5140__auto__ = (function (){var or__5142__auto__ = click_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.components.repo.goog$module$goog$object.get(e,"key"),"Enter");
}
})();
if(cljs.core.truth_(and__5140__auto__)){
return frontend.util.trim_safe(logseq.shui.hooks.deref(input_ref).value);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var value = temp__5825__auto__;
return new_db_f(value);
} else {
return null;
}
});
logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto__ = logseq.shui.hooks.deref(input_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var input = temp__5825__auto__;
return setTimeout((function (){
return input.focus();
}),(32));
} else {
return null;
}
}),cljs.core.PersistentVector.EMPTY);

logseq.shui.hooks.use_effect_BANG_((function (){
var token = frontend.state.get_auth_id_token();
var user_uuid = frontend.handler.user.user_uuid();
var refresh_token = frontend.state.get_auth_refresh_token();
return frontend.components.repo.ensure_e2ee_rsa_key_for_cloud_BANG_(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cloud?","cloud?",1568476951),cloud_QMARK_,new cljs.core.Keyword(null,"graph-e2ee?","graph-e2ee?",-1495428226),graph_e2ee_QMARK_,new cljs.core.Keyword(null,"refresh-token","refresh-token",-1032003584),refresh_token,new cljs.core.Keyword(null,"token","token",-1211463215),token,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),user_uuid,new cljs.core.Keyword(null,"e2ee-rsa-key-ensured?","e2ee-rsa-key-ensured?",1733960865),e2ee_rsa_key_ensured_QMARK_], null),set_e2ee_rsa_key_ensured_QMARK_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_QMARK_,graph_e2ee_QMARK_], null));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.new-graph.flex.flex-col.gap-4.p-1.pt-2","div.new-graph.flex.flex-col.gap-4.p-1.pt-2",1067788170),(function (){var G__55451 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),creating_db_QMARK_,new cljs.core.Keyword(null,"ref","ref",1289896967),input_ref,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","name-placeholder","graph/name-placeholder",-135929394)], 0)),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),submit_BANG_,new cljs.core.Keyword(null,"autoComplete","autoComplete",-219243415),"off"], null);
return (logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1(G__55451) : logseq.shui.ui.input.call(null,G__55451));
})(),(cljs.core.truth_(rtc_group_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col","div.flex.flex-col",255067761),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.gap-1","div.flex.flex-row.items-center.gap-1",-1023433319),(function (){var G__55452 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"rtc-sync",new cljs.core.Keyword(null,"checked","checked",-50955819),cloud_QMARK_,new cljs.core.Keyword(null,"on-checked-change","on-checked-change",-482086819),(function (){
var v = cljs.core.not(cloud_QMARK_);
return (set_cloud_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_cloud_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : set_cloud_QMARK_.call(null,v));
})], null);
return (logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1(G__55452) : logseq.shui.ui.checkbox.call(null,G__55452));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.opacity-70.text-sm","label.opacity-70.text-sm",-516988342),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"rtc-sync"], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","use-sync-label","graph/use-sync-label",376706845)], 0))], null),(cljs.core.truth_(cloud_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.gap-1.ml-3","div.flex.flex-row.items-center.gap-1.ml-3",-307050230),(function (){var G__55453 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"rtc-graph-e2ee",new cljs.core.Keyword(null,"checked","checked",-50955819),graph_e2ee_QMARK_,new cljs.core.Keyword(null,"on-checked-change","on-checked-change",-482086819),(function (){
var G__55454 = cljs.core.not(graph_e2ee_QMARK_);
return (set_graph_e2ee_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_graph_e2ee_QMARK_.cljs$core$IFn$_invoke$arity$1(G__55454) : set_graph_e2ee_QMARK_.call(null,G__55454));
})], null);
return (logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1(G__55453) : logseq.shui.ui.checkbox.call(null,G__55453));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.opacity-70.text-sm","label.opacity-70.text-sm",-516988342),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"rtc-graph-e2ee"], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","encrypt-data-label","graph/encrypt-data-label",-1542160507)], 0))], null)], null):null)], null)], null):null),(function (){var G__55455 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var and__5140__auto__ = cloud_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = graph_e2ee_QMARK_;
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.not(e2ee_rsa_key_ensured_QMARK_);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__55438_SHARP_){
return submit_BANG_(p1__55438_SHARP_,true);
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),submit_BANG_], null);
var G__55456 = (cljs.core.truth_(creating_db_QMARK_)?frontend.ui.loading.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","creating","graph/creating",-528411726)], 0))):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","submit","ui/submit",-49310281)], 0)));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__55455,G__55456) : logseq.shui.ui.button.call(null,G__55455,G__55456));
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$repo$new_db_graph_inner__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__55457 = cljs.core.first(args__31746__auto__);
var G__55458 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__55457,G__55458) : io.factorhouse.hsx.core.obj_get.call(null,G__55457,G__55458));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"new-db-graph-inner","new-db-graph-inner",-2090883196,null),args__31746__auto__),frontend$components$repo$new_db_graph_inner,args__31746__auto__,null);
}
};
var frontend$components$repo$new_db_graph_inner = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__55490__i = 0, G__55490__a = new Array(arguments.length -  0);
while (G__55490__i < G__55490__a.length) {G__55490__a[G__55490__i] = arguments[G__55490__i + 0]; ++G__55490__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__55490__a,0,null);
} 
return frontend$components$repo$new_db_graph_inner__delegate.call(this,args__31746__auto__);};
frontend$components$repo$new_db_graph_inner.cljs$lang$maxFixedArity = 0;
frontend$components$repo$new_db_graph_inner.cljs$lang$applyTo = (function (arglist__55491){
var args__31746__auto__ = cljs.core.seq(arglist__55491);
return frontend$components$repo$new_db_graph_inner__delegate(args__31746__auto__);
});
frontend$components$repo$new_db_graph_inner.cljs$core$IFn$_invoke$arity$variadic = frontend$components$repo$new_db_graph_inner__delegate;
return frontend$components$repo$new_db_graph_inner;
})()
;
var memo_comp__31747__auto__ = (function (){var G__55459 = comp__31745__auto__;
var G__55460 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__55459,G__55460) : io.factorhouse.hsx.core.react_memo.call(null,G__55459,G__55460));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"new-db-graph-inner");

return comp__31745__auto__;
})();
frontend.components.repo.new_db_graph = (function (){var render_fn__31744__auto__ = (function frontend$components$repo$new_db_graph(){
var rtc_group_QMARK_ = frontend.handler.user.rtc_group_QMARK_();
return frontend.components.repo.new_db_graph_inner(rtc_group_QMARK_);
});
var comp__31745__auto__ = (function() { 
var frontend$components$repo$new_db_graph__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__55461 = cljs.core.first(args__31746__auto__);
var G__55462 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__55461,G__55462) : io.factorhouse.hsx.core.obj_get.call(null,G__55461,G__55462));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"new-db-graph","new-db-graph",-67444629,null),args__31746__auto__),frontend$components$repo$new_db_graph,args__31746__auto__,null);
}
};
var frontend$components$repo$new_db_graph = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__55492__i = 0, G__55492__a = new Array(arguments.length -  0);
while (G__55492__i < G__55492__a.length) {G__55492__a[G__55492__i] = arguments[G__55492__i + 0]; ++G__55492__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__55492__a,0,null);
} 
return frontend$components$repo$new_db_graph__delegate.call(this,args__31746__auto__);};
frontend$components$repo$new_db_graph.cljs$lang$maxFixedArity = 0;
frontend$components$repo$new_db_graph.cljs$lang$applyTo = (function (arglist__55493){
var args__31746__auto__ = cljs.core.seq(arglist__55493);
return frontend$components$repo$new_db_graph__delegate(args__31746__auto__);
});
frontend$components$repo$new_db_graph.cljs$core$IFn$_invoke$arity$variadic = frontend$components$repo$new_db_graph__delegate;
return frontend$components$repo$new_db_graph;
})()
;
var memo_comp__31747__auto__ = (function (){var G__55463 = comp__31745__auto__;
var G__55464 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__55463,G__55464) : io.factorhouse.hsx.core.react_memo.call(null,G__55463,G__55464));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"new-db-graph");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.repo.js.map
