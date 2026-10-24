goog.provide('frontend.state');
goog.scope(function(){
  frontend.state.goog$module$goog$object = goog.module.get('goog.object');
});
if((typeof frontend !== 'undefined') && (typeof frontend.state !== 'undefined') && (typeof frontend.state._STAR_profile_state !== 'undefined')){
} else {
frontend.state._STAR_profile_state = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof frontend !== 'undefined') && (typeof frontend.state !== 'undefined') && (typeof frontend.state._STAR_db_worker !== 'undefined')){
} else {
frontend.state._STAR_db_worker = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.state !== 'undefined') && (typeof frontend.state._STAR_db_worker_thread !== 'undefined')){
} else {
frontend.state._STAR_db_worker_thread = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.state !== 'undefined') && (typeof frontend.state._STAR_db_worker_client_id !== 'undefined')){
} else {
frontend.state._STAR_db_worker_client_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(frontend.storage.get(new cljs.core.Keyword(null,"db-worker-client-id","db-worker-client-id",1493290080)));
}
if((typeof frontend !== 'undefined') && (typeof frontend.state !== 'undefined') && (typeof frontend.state._STAR_editor_info !== 'undefined')){
} else {
frontend.state._STAR_editor_info = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.state !== 'undefined') && (typeof frontend.state.app_ready_promise !== 'undefined')){
} else {
frontend.state.app_ready_promise = promesa.core.deferred();
}
frontend.state.supported_locale_tags = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (locale){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.lower_case(cljs.core.name(locale)),locale], null);
}),cljs.core.keys(frontend.dicts.dicts)));
/**
 * Convert browser/storage locale tags into one supported locale string.
 */
frontend.state.canonical_preferred_language = (function frontend$state$canonical_preferred_language(language){
var tag = (((language instanceof cljs.core.Keyword))?cljs.core.name(language):((typeof language === 'string')?language:null
));
if(clojure.string.blank_QMARK_(tag)){
return null;
} else {
var normalized_tag = (function (){var G__50945 = tag;
var G__50945__$1 = (((G__50945 == null))?null:clojure.string.trim(G__50945));
if((G__50945__$1 == null)){
return null;
} else {
return clojure.string.lower_case(G__50945__$1);
}
})();
var base_tag = (function (){var G__50946 = normalized_tag;
var G__50946__$1 = (((G__50946 == null))?null:clojure.string.split.cljs$core$IFn$_invoke$arity$2(G__50946,/-/));
if((G__50946__$1 == null)){
return null;
} else {
return cljs.core.first(G__50946__$1);
}
})();
var G__50947 = (function (){var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.supported_locale_tags,normalized_tag);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.supported_locale_tags,base_tag);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword(null,"en","en",88457073);
}
}
})();
if((G__50947 == null)){
return null;
} else {
return cljs.core.name(G__50947);
}
}
});
/**
 * `<invoke-db-worker` throws err if `*db-worker` not ready yet.
 *   Use this atom to wait till db-worker ready.
 */
frontend.state.db_worker_ready_QMARK_ = (function (){var ready_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.fn_QMARK_(cljs.core.deref(frontend.state._STAR_db_worker)));
cljs.core.add_watch(frontend.state._STAR_db_worker,new cljs.core.Keyword("frontend.state","db-worker-ready?","frontend.state/db-worker-ready?",-972181113),(function (_,___$1,___$2,worker){
return cljs.core.reset_BANG_(ready_QMARK_,cljs.core.fn_QMARK_(worker));
}));

return ready_QMARK_;
})();
/**
 * invoke db-worker thread api
 */
frontend.state._LT_invoke_db_worker = (function frontend$state$_LT_invoke_db_worker(var_args){
var args__5882__auto__ = [];
var len__5876__auto___51580 = arguments.length;
var i__5877__auto___51581 = (0);
while(true){
if((i__5877__auto___51581 < len__5876__auto___51580)){
args__5882__auto__.push((arguments[i__5877__auto___51581]));

var G__51582 = (i__5877__auto___51581 + (1));
i__5877__auto___51581 = G__51582;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic = (function (qkw,args){
var worker = cljs.core.deref(frontend.state._STAR_db_worker);
if((worker == null)){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<invoke-db-worker-error","<invoke-db-worker-error",1539171917),qkw], 0));

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("db-worker has not been initialized",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(worker,qkw,args)),(function (result){
return promesa.protocols._promise((((((result instanceof cljs.core.ExceptionInfo)) || ((result instanceof Error))))?promesa.core.rejected(result):result));
}));
}));
}));

(frontend.state._LT_invoke_db_worker.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.state._LT_invoke_db_worker.cljs$lang$applyTo = (function (seq50948){
var G__50949 = cljs.core.first(seq50948);
var seq50948__$1 = cljs.core.next(seq50948);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50949,seq50948__$1);
}));

/**
 * Skip the thread-api request when db-worker is not initialized.
 *   Returns nil in that case. UI effects that need the result should
 *   depend on `db-worker-ready?` so they re-run after the worker starts.
 */
frontend.state._LT_invoke_db_worker_when_ready = (function frontend$state$_LT_invoke_db_worker_when_ready(var_args){
var args__5882__auto__ = [];
var len__5876__auto___51583 = arguments.length;
var i__5877__auto___51584 = (0);
while(true){
if((i__5877__auto___51584 < len__5876__auto___51583)){
args__5882__auto__.push((arguments[i__5877__auto___51584]));

var G__51585 = (i__5877__auto___51584 + (1));
i__5877__auto___51584 = G__51585;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.state._LT_invoke_db_worker_when_ready.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.state._LT_invoke_db_worker_when_ready.cljs$core$IFn$_invoke$arity$variadic = (function (qkw,args){
if(cljs.core.truth_(cljs.core.deref(frontend.state.db_worker_ready_QMARK_))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(frontend.state._LT_invoke_db_worker,qkw,args);
} else {
return null;
}
}));

(frontend.state._LT_invoke_db_worker_when_ready.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.state._LT_invoke_db_worker_when_ready.cljs$lang$applyTo = (function (seq50950){
var G__50951 = cljs.core.first(seq50950);
var seq50950__$1 = cljs.core.next(seq50950);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50951,seq50950__$1);
}));

frontend.state.export_block_text_indent_styles = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["dashes",null,"spaces",null,"no-indent",null], null), null);
frontend.state.legacy_export_block_text_indent_styles = new cljs.core.PersistentArrayMap(null, 3, ["indent-style-dashes","dashes","indent-style-spaces","spaces","indent-style-none","no-indent"], null);
frontend.state.normalize_export_block_text_indent_style = (function frontend$state$normalize_export_block_text_indent_style(v){
if((v == null)){
return null;
} else {
if(cljs.core.contains_QMARK_(frontend.state.export_block_text_indent_styles,v)){
return v;
} else {
if(cljs.core.contains_QMARK_(frontend.state.legacy_export_block_text_indent_styles,v)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.legacy_export_block_text_indent_styles,v);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid export block text indent style",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null));

}
}
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.state !== 'undefined') && (typeof frontend.state.initial_state !== 'undefined')){
} else {
frontend.state.initial_state = (function (){var document_mode_QMARK_ = (function (){var or__5142__auto__ = frontend.storage.get(new cljs.core.Keyword("document","mode?","document/mode?",-994203479));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return false;
}
})();
var current_graph = (function (){var url_graph = new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(frontend.util.parse_params());
var graph = (function (){var or__5142__auto__ = url_graph;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = frontend.graph_tab.get_tab_repo();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return frontend.storage.get(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825));
}
}
})();
if(cljs.core.truth_(graph)){
electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["setCurrentGraph",graph], 0));
} else {
}

return graph;
})();
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("ui","container-id","ui/container-id",1274679328),new cljs.core.Keyword("ui","select-query-cache","ui/select-query-cache",-103472992),new cljs.core.Keyword("ui","navigation-item-collapsed?","ui/navigation-item-collapsed?",-1247120960),new cljs.core.Keyword("editor","set-timestamp-block","editor/set-timestamp-block",1136443872),new cljs.core.Keyword("ui","radix-color","ui/radix-color",1454689984),new cljs.core.Keyword("ui","fullscreen?","ui/fullscreen?",-1171714336),new cljs.core.Keyword("plugin","updates-downloading?","plugin/updates-downloading?",1294108608),new cljs.core.Keyword("ui","shortcut-handler-refreshing?","ui/shortcut-handler-refreshing?",741908481),new cljs.core.Keyword("user","info","user/info",-345834271),new cljs.core.Keyword("feature","enable-sync?","feature/enable-sync?",-817494751),new cljs.core.Keyword("ui","collapsed-blocks","ui/collapsed-blocks",-968043167),new cljs.core.Keyword("reactive","query-dbs","reactive/query-dbs",1169865121),new cljs.core.Keyword("assets","alias-enabled?","assets/alias-enabled?",-40753727),new cljs.core.Keyword("editor","op","editor/op",-441449246),new cljs.core.Keyword("pdf","block-highlight-colored?","pdf/block-highlight-colored?",1763046626),new cljs.core.Keyword("plugin","marketplace-stats","plugin/marketplace-stats",1801405730),new cljs.core.Keyword("mobile","show-tabbar?","mobile/show-tabbar?",925227298),new cljs.core.Keyword("block-ref","context","block-ref/context",-2102048446),new cljs.core.Keyword("instrument","disabled?","instrument/disabled?",165654178),new cljs.core.Keyword("rtc","users-info","rtc/users-info",8288930),new cljs.core.Keyword("ui","handbooks-open?","ui/handbooks-open?",1677401058),new cljs.core.Keyword("pdf","current","pdf/current",-1087936477),new cljs.core.Keyword("selection","blocks","selection/blocks",638970019),new cljs.core.Keyword("plugin","installing","plugin/installing",-755703581),new cljs.core.Keyword("ui","custom-theme","ui/custom-theme",1944833347),new cljs.core.Keyword("editor","virtualized-scroll-fn","editor/virtualized-scroll-fn",-343790237),new cljs.core.Keyword("search","mode","search/mode",1628111395),new cljs.core.Keyword("ui","main-container-scroll-top","ui/main-container-scroll-top",1193942851),new cljs.core.Keyword("ui","cached-key->container-id","ui/cached-key->container-id",-989519868),new cljs.core.Keyword("plugin","simple-commands","plugin/simple-commands",234820996),new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword("plugin","installed-ui-items","plugin/installed-ui-items",1418448868),new cljs.core.Keyword("ui","anchor-mount","ui/anchor-mount",1065207909),new cljs.core.Keyword("editor","action","editor/action",449993861),new cljs.core.Keyword("search","index-build","search/index-build",-900651803),new cljs.core.Keyword("editor","block-op-type","editor/block-op-type",1578820069),new cljs.core.Keyword("ui","loading?","ui/loading?",1905710757),new cljs.core.Keyword("system","info","system/info",-1203399931),new cljs.core.Keyword("ui","paths-scroll-positions","ui/paths-scroll-positions",1953998950),new cljs.core.Keyword("electron","server","electron/server",1484164422),new cljs.core.Keyword("ui","show-property-dialog?","ui/show-property-dialog?",241122918),new cljs.core.Keyword("electron","auto-updater-downloaded","electron/auto-updater-downloaded",760067750),new cljs.core.Keyword("ui","system-theme?","ui/system-theme?",1330390822),new cljs.core.Keyword("auth","id-token","auth/id-token",-332149946),new cljs.core.Keyword("custom-context-menu","show?","custom-context-menu/show?",2074408902),new cljs.core.Keyword("plugin","focused-settings","plugin/focused-settings",-1699334137),new cljs.core.Keyword("plugin","updates-coming","plugin/updates-coming",104160263),new cljs.core.Keyword("ui","viewport","ui/viewport",443348007),new cljs.core.Keyword("auth","oauth-token-url","auth/oauth-token-url",-75786009),new cljs.core.Keyword("editor","document-mode?","editor/document-mode?",-2096420601),new cljs.core.Keyword("editor","container-id","editor/container-id",1915616583),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword("db","restoring?","db/restoring?",-1653366233),new cljs.core.Keyword("sync-graph","init?","sync-graph/init?",608792103),new cljs.core.Keyword("ui","settings-open?","ui/settings-open?",1491870343),new cljs.core.Keyword("modal","id","modal/id",-1274892409),new cljs.core.Keyword("editor","raw-mode-block","editor/raw-mode-block",-1788505944),new cljs.core.Keyword("auth","oauth-domain","auth/oauth-domain",-1446567608),new cljs.core.Keyword("rtc","loading-graphs?","rtc/loading-graphs?",493247976),new cljs.core.Keyword("auth","refresh-token","auth/refresh-token",-1024820760),new cljs.core.Keyword("comments","inline-thread","comments/inline-thread",2063931272),new cljs.core.Keyword("ui","sidebar-collapsed-blocks","ui/sidebar-collapsed-blocks",395046921),new cljs.core.Keyword("document","mode?","document/mode?",-994203479),new cljs.core.Keyword("auth","access-token","auth/access-token",-657486615),new cljs.core.Keyword("ui","scrolling?","ui/scrolling?",-365025943),new cljs.core.Keyword("rtc","downloading-graph-uuid","rtc/downloading-graph-uuid",460109193),new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887),new cljs.core.Keyword("electron","window-maximized?","electron/window-maximized?",-1905378935),new cljs.core.Keyword("plugin","installed-hooks","plugin/installed-hooks",-227057271),new cljs.core.Keyword("editor","editing?","editor/editing?",807325417),new cljs.core.Keyword("git","current-repo","git/current-repo",107438825),new cljs.core.Keyword("page-title","context","page-title/context",1788836745),new cljs.core.Keyword("graph","importing","graph/importing",1647644617),new cljs.core.Keyword("srs","cards-due-count","srs/cards-due-count",950004746),new cljs.core.Keyword("view","table-selection","view/table-selection",-2120640246),new cljs.core.Keyword("pdf","system-win?","pdf/system-win?",-2028066550),new cljs.core.Keyword("ui","developer-mode?","ui/developer-mode?",-664501878),new cljs.core.Keyword("electron","updater","electron/updater",454456683),new cljs.core.Keyword("rtc","uploading?","rtc/uploading?",316154315),new cljs.core.Keyword("history","paused?","history/paused?",-21834005),new cljs.core.Keyword(null,"today","today",945271563),new cljs.core.Keyword("search","result","search/result",443756363),new cljs.core.Keyword("plugin","active-readme","plugin/active-readme",-677043988),new cljs.core.Keyword("graph","exporting-state","graph/exporting-state",-650713812),new cljs.core.Keyword("youtube","players","youtube/players",1844913740),new cljs.core.Keyword("assets","alias-dirs","assets/alias-dirs",627599020),new cljs.core.Keyword("mobile","container-urls","mobile/container-urls",149073836),new cljs.core.Keyword("plugin","selected-theme","plugin/selected-theme",-172679220),new cljs.core.Keyword("plugin","updates-auto-checking?","plugin/updates-auto-checking?",1617323181),new cljs.core.Keyword("pdf","ref-highlight","pdf/ref-highlight",-1374529267),new cljs.core.Keyword("view","components","view/components",-1071666675),new cljs.core.Keyword("graph","exporting","graph/exporting",-2054731251),new cljs.core.Keyword("ui","find-in-page","ui/find-in-page",-941396467),new cljs.core.Keyword("plugin","installed-resources","plugin/installed-resources",-1742961043),new cljs.core.Keyword("editor","last-replace-ref-content-tx","editor/last-replace-ref-content-tx",831177325),new cljs.core.Keyword("editor","args","editor/args",208005741),new cljs.core.Keyword("editor","last-saved-cursor","editor/last-saved-cursor",-284040435),new cljs.core.Keyword("encryption","graph-parsing?","encryption/graph-parsing?",1059330925),new cljs.core.Keyword("ui","shortcut-tooltip?","ui/shortcut-tooltip?",1921963086),new cljs.core.Keyword("plugin","marketplace-pkgs","plugin/marketplace-pkgs",637462798),new cljs.core.Keyword("assets","asset-file-write-finish","assets/asset-file-write-finish",1870176846),new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034),new cljs.core.Keyword("ui","recent-pages","ui/recent-pages",1527475247),new cljs.core.Keyword("plugin","selected-unpacked-pkg","plugin/selected-unpacked-pkg",-286319185),new cljs.core.Keyword(null,"route-match","route-match",-1450985937),new cljs.core.Keyword("selection","selected-all?","selection/selected-all?",208605839),new cljs.core.Keyword("editor","start-pos","editor/start-pos",-40843537),new cljs.core.Keyword("plugin","enabled","plugin/enabled",-2065640529),new cljs.core.Keyword("custom-context-menu","position","custom-context-menu/position",666089423),new cljs.core.Keyword("plugin","indicator-text","plugin/indicator-text",-221282032),new cljs.core.Keyword("plugin","navs-settings?","plugin/navs-settings?",-615901808),new cljs.core.Keyword("mobile","show-action-bar?","mobile/show-action-bar?",-1280463440),new cljs.core.Keyword("ui","highlight-recent-days","ui/highlight-recent-days",388728304),new cljs.core.Keyword("rtc","state","rtc/state",-1988572624),new cljs.core.Keyword("srs","mode?","srs/mode?",-258295984),new cljs.core.Keyword("ui","left-sidebar-open?","ui/left-sidebar-open?",899579728),new cljs.core.Keyword("plugin","updates-pending","plugin/updates-pending",-1190878256),new cljs.core.Keyword("selection","direction","selection/direction",1172907345),new cljs.core.Keyword("editor","next-edit-block","editor/next-edit-block",800596433),new cljs.core.Keyword("rtc","asset-upload-download-progress","rtc/asset-upload-download-progress",-940899343),new cljs.core.Keyword("editor","code-mode?","editor/code-mode?",1404453234),new cljs.core.Keyword("copy","export-block-text-other-options","copy/export-block-text-other-options",1053932178),new cljs.core.Keyword("editor","latest-shortcut","editor/latest-shortcut",-2095243213),new cljs.core.Keyword("ui","wide-mode?","ui/wide-mode?",-1881882061),new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475),new cljs.core.Keyword("date-picker","date","date-picker/date",-1622069581),new cljs.core.Keyword("copy","export-block-text-remove-options","copy/export-block-text-remove-options",-1213505869),new cljs.core.Keyword("ui","sidebar-width","ui/sidebar-width",929889300),new cljs.core.Keyword("copy","export-block-text-indent-style","copy/export-block-text-indent-style",1531384180),new cljs.core.Keyword("ui","toggle-highlight-recent-blocks?","ui/toggle-highlight-recent-blocks?",261743188),new cljs.core.Keyword("ui","help-open?","ui/help-open?",-1862197612),new cljs.core.Keyword("rtc","editing-users-by-block","rtc/editing-users-by-block",-1404947660),new cljs.core.Keyword("editor","hidden-editors","editor/hidden-editors",254075860),new cljs.core.Keyword("ui","theme","ui/theme",-1247877132),new cljs.core.Keyword("editor","last-input-time","editor/last-input-time",-2008067915),new cljs.core.Keyword("electron","updater-pending?","electron/updater-pending?",-1675811595),new cljs.core.Keyword("editor","block","editor/block",1699377461),new cljs.core.Keyword("rtc","graphs","rtc/graphs",-1584628267),new cljs.core.Keyword("editor","content","editor/content",-756190443),new cljs.core.Keyword("network","online?","network/online?",1306822774),new cljs.core.Keyword("db","async-queries","db/async-queries",1853808854),new cljs.core.Keyword("sync","block-conflicts","sync/block-conflicts",-273067594),new cljs.core.Keyword("notification","contents","notification/contents",-1760740618),new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017),new cljs.core.Keyword("plugin","updates-unchecked","plugin/updates-unchecked",723985111),new cljs.core.Keyword("editor","cursor-range","editor/cursor-range",1691491127),new cljs.core.Keyword("plugin","installed-services","plugin/installed-services",-1672478696),new cljs.core.Keyword("electron","app-base-info","electron/app-base-info",1025481912),new cljs.core.Keyword("block","component-editing-mode?","block/component-editing-mode?",-1744931560),new cljs.core.Keyword("search","args","search/args",-462145864),new cljs.core.Keyword("editor","action-data","editor/action-data",969703128),new cljs.core.Keyword("search","q","search/q",-553992135),new cljs.core.Keyword("editor","block-refs","editor/block-refs",-2016894855),new cljs.core.Keyword("ui","global-last-key-code","ui/global-last-key-code",-1972103495),new cljs.core.Keyword("search","engines","search/engines",-1270836455),new cljs.core.Keyword("modal","dropdowns","modal/dropdowns",901161881),new cljs.core.Keyword("electron","window-fullscreen?","electron/window-fullscreen?",-499490630),new cljs.core.Keyword("handbook","route-chan","handbook/route-chan",1649058330),new cljs.core.Keyword("rtc","log","rtc/log",-1596481285),new cljs.core.Keyword("editor","on-paste?","editor/on-paste?",1852983579),new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword("custom-context-menu","links","custom-context-menu/links",-1197608677),new cljs.core.Keyword("graph","loading?","graph/loading?",1937181019),new cljs.core.Keyword("pdf","auto-open-ctx-menu?","pdf/auto-open-ctx-menu?",-1579137381),new cljs.core.Keyword("favorites","updated?","favorites/updated?",-1904365701),new cljs.core.Keyword("ui","show-empty-and-hidden-properties?","ui/show-empty-and-hidden-properties?",1338368380),new cljs.core.Keyword("selection","start-block","selection/start-block",-832131492),new cljs.core.Keyword("ui","file-component","ui/file-component",-1447074212),new cljs.core.Keyword("editor","last-key-code","editor/last-key-code",607982236),new cljs.core.Keyword("plugin","preferences","plugin/preferences",668527388),new cljs.core.Keyword("view","selected-blocks","view/selected-blocks",-92053027),new cljs.core.Keyword("auth","oauth-client-id","auth/oauth-client-id",174297597),new cljs.core.Keyword("plugin","installed-slash-commands","plugin/installed-slash-commands",-58447235),new cljs.core.Keyword("plugin","installed-themes","plugin/installed-themes",1969555197),new cljs.core.Keyword("editor","code-block-context","editor/code-block-context",-1384305346),new cljs.core.Keyword("editor","in-composition?","editor/in-composition?",-259037730),new cljs.core.Keyword("rtc","online-info","rtc/online-info",-1915777921),new cljs.core.Keyword("graph","importing-state","graph/importing-state",34918559),new cljs.core.Keyword("command-palette","commands","command-palette/commands",-168367617),new cljs.core.Keyword("ui","editor-font","ui/editor-font",582019775),new cljs.core.Keyword("auth","current-login-user","auth/current-login-user",2127074079)],[(0),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,frontend.storage.get(new cljs.core.Keyword("ui","radix-color","ui/radix-color",1454689984)),false,false,false,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"UserGroups","UserGroups",1693861388),frontend.storage.get(new cljs.core.Keyword(null,"user-groups","user-groups",-1264926454))], null),frontend.storage.get(new cljs.core.Keyword(null,"logseq-sync-enabled","logseq-sync-enabled",-1886165044)),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,(function (){var or__5142__auto__ = frontend.storage.get(new cljs.core.Keyword("assets","alias-enabled?","assets/alias-enabled?",-40753727));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return false;
}
})(),null,(function (){var or__5142__auto__ = frontend.storage.get("ls-pdf-hl-block-is-colored");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return true;
}
})(),null,false,null,frontend.storage.get("instrument-disabled"),cljs.core.PersistentArrayMap.EMPTY,false,null,cljs.core.PersistentVector.EMPTY,null,(function (){var or__5142__auto__ = frontend.storage.get(new cljs.core.Keyword("ui","custom-theme","ui/custom-theme",1944833347));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),"light"], null),new cljs.core.Keyword(null,"dark","dark",1818973999),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),"dark"], null)], null);
}
})(),null,null,null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"running?","running?",-257884763),false,new cljs.core.Keyword(null,"repo","repo",-1999060679),null,new cljs.core.Keyword(null,"progress","progress",244323547),(0),new cljs.core.Keyword(null,"processed","processed",800622264),(0),new cljs.core.Keyword(null,"total","total",1916810418),(0)], null),null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,false,false,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (){var or__5142__auto__ = frontend.util.mac_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = frontend.util.win32_QMARK_;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return false;
}
}
})())(frontend.storage.get(new cljs.core.Keyword("ui","system-theme?","ui/system-theme?",1330390822))),null,false,null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,document_mode_QMARK_,null,cljs.core.PersistentArrayMap.EMPTY,null,null,false,null,null,null,null,(function (){var G__50952 = frontend.storage.get("refresh-token");
if((G__50952 == null)){
return null;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50952));
}
})(),null,cljs.core.PersistentArrayMap.EMPTY,document_mode_QMARK_,null,false,null,false,false,cljs.core.PersistentArrayMap.EMPTY,null,current_graph,null,null,null,cljs.core.PersistentArrayMap.EMPTY,false,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.storage.get("developer-mode"),"true")) || (false)),cljs.core.PersistentArrayMap.EMPTY,false,false,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,(function (){var or__5142__auto__ = frontend.storage.get(new cljs.core.Keyword("assets","alias-dirs","assets/alias-dirs",627599020));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),null,null,false,null,cljs.core.PersistentArrayMap.EMPTY,null,null,cljs.core.PersistentArrayMap.EMPTY,null,null,cljs.core.PersistentArrayMap.EMPTY,false,((frontend.storage.get(new cljs.core.Keyword("ui","shortcut-tooltip?","ui/shortcut-tooltip?",1921963086)) === false)?false:true),null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,(function (){var or__5142__auto__ = frontend.storage.get(new cljs.core.Keyword("ui","recent-pages","ui/recent-pages",1527475247));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),null,null,false,null,(function (){var and__5140__auto__ = frontend.util.plugin_platform_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,true)(frontend.storage.get(new cljs.core.Keyword("frontend.spec.storage","lsp-core-enabled","frontend.spec.storage/lsp-core-enabled",-1474488934)));
} else {
return and__5140__auto__;
}
})(),null,null,true,false,(function (){var or__5142__auto__ = frontend.storage.get(new cljs.core.Keyword("ui","highlight-recent-days","ui/highlight-recent-days",388728304));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (3);
}
})(),cljs.core.PersistentArrayMap.EMPTY,false,cljs.core.boolean$(frontend.storage.get(new cljs.core.Keyword(null,"ls-left-sidebar-open?","ls-left-sidebar-open?",-1185405802))),cljs.core.PersistentArrayMap.EMPTY,null,null,cljs.core.PersistentArrayMap.EMPTY,false,(function (){var or__5142__auto__ = frontend.storage.get(new cljs.core.Keyword("copy","export-block-text-other-options","copy/export-block-text-other-options",1053932178));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),null,frontend.storage.get(new cljs.core.Keyword("ui","wide-mode","ui/wide-mode",2105536944)),cljs.core.List.EMPTY,null,(function (){var or__5142__auto__ = frontend.storage.get(new cljs.core.Keyword("copy","export-block-text-remove-options","copy/export-block-text-remove-options",-1213505869));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),"40%",(function (){var or__5142__auto__ = frontend.state.normalize_export_block_text_indent_style(frontend.storage.get(new cljs.core.Keyword("copy","export-block-text-indent-style","copy/export-block-text-indent-style",1531384180)));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "dashes";
}
})(),false,false,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY,(function (){var or__5142__auto__ = frontend.storage.get(new cljs.core.Keyword("ui","theme","ui/theme",-1247877132));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "light";
}
})(),cljs.core.PersistentArrayMap.EMPTY,false,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,true,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,frontend.state.canonical_preferred_language(frontend.storage.get(new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017))),cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null,false,null,null,"",cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,false,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1))),null,false,null,null,null,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(false,frontend.storage.get("ls-pdf-auto-open-ctx-menu")),(0),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"show?","show?",1543842127),false], null),null,null,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,null,false,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,frontend.storage.get(new cljs.core.Keyword("ui","editor-font","ui/editor-font",582019775)),null]);
})();
}
frontend.rfx.init_once_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-value","initial-value",470619381),frontend.state.initial_state,new cljs.core.Keyword(null,"registry","registry",1021159018),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)], null));
frontend.state.register_rfx_state_subs_BANG_ = (function frontend$state$register_rfx_state_subs_BANG_(){
frontend.rfx.reg_sub_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frontend.state","state-key","frontend.state/state-key",2122706412),(function (db,p__50954){
var vec__50955 = p__50954;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50955,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50955,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,k);
}));

var seq__50958_51608 = cljs.core.seq(cljs.core.keys(frontend.rfx.snapshot()));
var chunk__50959_51609 = null;
var count__50960_51610 = (0);
var i__50961_51611 = (0);
while(true){
if((i__50961_51611 < count__50960_51610)){
var k_51612 = chunk__50959_51609.cljs$core$IIndexed$_nth$arity$2(null,i__50961_51611);
frontend.rfx.reg_sub_BANG_.cljs$core$IFn$_invoke$arity$3(k_51612,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.state","state-key","frontend.state/state-key",2122706412),k_51612], null)], null),((function (seq__50958_51608,chunk__50959_51609,count__50960_51610,i__50961_51611,k_51612){
return (function (value,p__50970){
var vec__50971 = p__50970;
var seq__50972 = cljs.core.seq(vec__50971);
var first__50973 = cljs.core.first(seq__50972);
var seq__50972__$1 = cljs.core.next(seq__50972);
var _ = first__50973;
var path = seq__50972__$1;
if(cljs.core.seq(path)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value,path);
} else {
return value;
}
});})(seq__50958_51608,chunk__50959_51609,count__50960_51610,i__50961_51611,k_51612))
);


var G__51616 = seq__50958_51608;
var G__51617 = chunk__50959_51609;
var G__51618 = count__50960_51610;
var G__51619 = (i__50961_51611 + (1));
seq__50958_51608 = G__51616;
chunk__50959_51609 = G__51617;
count__50960_51610 = G__51618;
i__50961_51611 = G__51619;
continue;
} else {
var temp__5825__auto___51620 = cljs.core.seq(seq__50958_51608);
if(temp__5825__auto___51620){
var seq__50958_51621__$1 = temp__5825__auto___51620;
if(cljs.core.chunked_seq_QMARK_(seq__50958_51621__$1)){
var c__5673__auto___51622 = cljs.core.chunk_first(seq__50958_51621__$1);
var G__51623 = cljs.core.chunk_rest(seq__50958_51621__$1);
var G__51624 = c__5673__auto___51622;
var G__51625 = cljs.core.count(c__5673__auto___51622);
var G__51626 = (0);
seq__50958_51608 = G__51623;
chunk__50959_51609 = G__51624;
count__50960_51610 = G__51625;
i__50961_51611 = G__51626;
continue;
} else {
var k_51627 = cljs.core.first(seq__50958_51621__$1);
frontend.rfx.reg_sub_BANG_.cljs$core$IFn$_invoke$arity$3(k_51627,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.state","state-key","frontend.state/state-key",2122706412),k_51627], null)], null),((function (seq__50958_51608,chunk__50959_51609,count__50960_51610,i__50961_51611,k_51627,seq__50958_51621__$1,temp__5825__auto___51620){
return (function (value,p__50974){
var vec__50975 = p__50974;
var seq__50976 = cljs.core.seq(vec__50975);
var first__50977 = cljs.core.first(seq__50976);
var seq__50976__$1 = cljs.core.next(seq__50976);
var _ = first__50977;
var path = seq__50976__$1;
if(cljs.core.seq(path)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value,path);
} else {
return value;
}
});})(seq__50958_51608,chunk__50959_51609,count__50960_51610,i__50961_51611,k_51627,seq__50958_51621__$1,temp__5825__auto___51620))
);


var G__51631 = cljs.core.next(seq__50958_51621__$1);
var G__51632 = null;
var G__51633 = (0);
var G__51634 = (0);
seq__50958_51608 = G__51631;
chunk__50959_51609 = G__51632;
count__50960_51610 = G__51633;
i__50961_51611 = G__51634;
continue;
}
} else {
}
}
break;
}

frontend.rfx.reg_sub_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("selection","block-selected?","selection/block-selected?",-267929369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selection","blocks","selection/blocks",638970019)], null)], null),(function (selection_blocks,p__50978){
var vec__50979 = p__50978;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50979,(0),null);
var block_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50979,(1),null);
return cljs.core.boolean$(cljs.core.some((function (p1__50953_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(block_id,(function (){var G__50982 = p1__50953_SHARP_;
var G__50982__$1 = (((G__50982 == null))?null:dommy.core.attr(G__50982,"blockid"));
if((G__50982__$1 == null)){
return null;
} else {
return cljs.core.uuid(G__50982__$1);
}
})());
}),selection_blocks));
}));

return true;
});
frontend.state.register_rfx_state_subs_BANG_();


frontend.state.clear_async_queries_BANG_ = (function frontend$state$clear_async_queries_BANG_(){
var G__50983 = new cljs.core.Keyword("db","async-queries","db/async-queries",1853808854);
var G__50984 = cljs.core.PersistentArrayMap.EMPTY;
return (frontend.state.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.state.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(G__50983,G__50984) : frontend.state.set_state_BANG_.call(null,G__50983,G__50984));
});
frontend.state.set_sync_block_conflicts_BANG_ = (function frontend$state$set_sync_block_conflicts_BANG_(var_args){
var G__50986 = arguments.length;
switch (G__50986) {
case 2:
return frontend.state.set_sync_block_conflicts_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.state.set_sync_block_conflicts_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.state.set_sync_block_conflicts_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (repo,conflicts_by_block){
if(cljs.core.map_QMARK_(conflicts_by_block)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Expected sync conflicts grouped by block",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816),conflicts_by_block], null));
}

var G__50987 = new cljs.core.Keyword("sync","block-conflicts","sync/block-conflicts",-273067594);
var G__50988 = conflicts_by_block;
var G__50989 = new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908);
var G__50990 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo], null);
return (frontend.state.set_state_BANG_.cljs$core$IFn$_invoke$arity$4 ? frontend.state.set_state_BANG_.cljs$core$IFn$_invoke$arity$4(G__50987,G__50988,G__50989,G__50990) : frontend.state.set_state_BANG_.call(null,G__50987,G__50988,G__50989,G__50990));
}));

(frontend.state.set_sync_block_conflicts_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (repo,block_id,conflicts){
if(cljs.core.vector_QMARK_(conflicts)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Expected block sync conflicts",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"block-id","block-id",-70582834),block_id,new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816),conflicts], null));
}

var G__50991 = new cljs.core.Keyword("sync","block-conflicts","sync/block-conflicts",-273067594);
var G__50992 = conflicts;
var G__50993 = new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908);
var G__50994 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id))], null);
return (frontend.state.set_state_BANG_.cljs$core$IFn$_invoke$arity$4 ? frontend.state.set_state_BANG_.cljs$core$IFn$_invoke$arity$4(G__50991,G__50992,G__50993,G__50994) : frontend.state.set_state_BANG_.call(null,G__50991,G__50992,G__50993,G__50994));
}));

(frontend.state.set_sync_block_conflicts_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Common default config for a user's repo config
 */
frontend.state.common_default_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("feature","enable-search-remove-accents?","feature/enable-search-remove-accents?",1106083837),true,new cljs.core.Keyword("ui","auto-expand-block-refs?","ui/auto-expand-block-refs?",-1188664588),true], null);
/**
 * Default repo config for DB graphs
 */
frontend.state.db_default_config = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.common_default_config,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-queries","default-queries",1508774260),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"journals","journals",-1915761091),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title-key","title-key",830482796),new cljs.core.Keyword("journal.default-query","doing","journal.default-query/doing",-658567963),new cljs.core.Keyword(null,"title-icon","title-icon",1268733588),"InProgress50",new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?start","?start",-1182059288,null),new cljs.core.Symbol(null,"?today","?today",-1774948230,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"task","task",163923534,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Doing","null"], null), null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),new cljs.core.Symbol(null,"?d","?d",-1851543854,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"?d","?d",-1851543854,null),new cljs.core.Symbol(null,"?start","?start",-1182059288,null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"?d","?d",-1851543854,null),new cljs.core.Symbol(null,"?today","?today",-1774948230,null))], null)], null),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"14d","14d",922220438),new cljs.core.Keyword(null,"today","today",945271563)], null),new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title-key","title-key",830482796),new cljs.core.Keyword("journal.default-query","todo","journal.default-query/todo",106070385),new cljs.core.Keyword(null,"title-icon","title-icon",1268733588),"Todo",new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?start","?start",-1182059288,null),new cljs.core.Symbol(null,"?next","?next",-211781622,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"task","task",163923534,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Todo","null"], null), null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),new cljs.core.Symbol(null,"?d","?d",-1851543854,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"?d","?d",-1851543854,null),new cljs.core.Symbol(null,"?start","?start",-1182059288,null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"?d","?d",-1851543854,null),new cljs.core.Symbol(null,"?next","?next",-211781622,null))], null)], null),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"today","today",945271563),new cljs.core.Keyword(null,"7d-after","7d-after",-1361075404)], null),new cljs.core.Keyword(null,"group-by-page?","group-by-page?",1520059448),false,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true], null)], null)], null),new cljs.core.Keyword("ui","hide-empty-properties?","ui/hide-empty-properties?",-2048102776),false,new cljs.core.Keyword("ui","mask-email?","ui/mask-email?",-561370782),true], null)], 0));
/**
 * Merges user configs in given orders. All values are overridden except for maps
 *   which are merged.
 */
frontend.state.merge_configs = (function frontend$state$merge_configs(var_args){
var args__5882__auto__ = [];
var len__5876__auto___51649 = arguments.length;
var i__5877__auto___51650 = (0);
while(true){
if((i__5877__auto___51650 < len__5876__auto___51649)){
args__5882__auto__.push((arguments[i__5877__auto___51650]));

var G__51651 = (i__5877__auto___51650 + (1));
i__5877__auto___51650 = G__51651;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return frontend.state.merge_configs.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(frontend.state.merge_configs.cljs$core$IFn$_invoke$arity$variadic = (function (configs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,(function frontend$state$merge_config(current,new$){
if(((cljs.core.map_QMARK_(current)) && (cljs.core.map_QMARK_(new$)))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([current,new$], 0));
} else {
return new$;
}
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,configs));
}));

(frontend.state.merge_configs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.state.merge_configs.cljs$lang$applyTo = (function (seq50995){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50995));
}));

frontend.state.get_global_config = (function frontend$state$get_global_config(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.rfx.snapshot(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword("frontend.state","global-config","frontend.state/global-config",1533356)], null));
});
frontend.state.get_global_config_str_content = (function frontend$state$get_global_config_str_content(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.rfx.snapshot(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword("frontend.state","global-config-str-content","frontend.state/global-config-str-content",-1141146708)], null));
});
frontend.state.get_graph_config = (function frontend$state$get_graph_config(var_args){
var G__50997 = arguments.length;
switch (G__50997) {
case 0:
return frontend.state.get_graph_config.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.state.get_graph_config.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.state.get_graph_config.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.state.get_graph_config.cljs$core$IFn$_invoke$arity$1((frontend.state.get_current_repo.cljs$core$IFn$_invoke$arity$0 ? frontend.state.get_current_repo.cljs$core$IFn$_invoke$arity$0() : frontend.state.get_current_repo.call(null)));
}));

(frontend.state.get_graph_config.cljs$core$IFn$_invoke$arity$1 = (function (repo_url){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.rfx.snapshot(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),repo_url], null));
}));

(frontend.state.get_graph_config.cljs$lang$maxFixedArity = 1);

/**
 * User config for the given repo or current repo if none given. All config fetching
 * should be done through this fn in order to get global config and config defaults
 */
frontend.state.get_config = (function frontend$state$get_config(var_args){
var G__50999 = arguments.length;
switch (G__50999) {
case 0:
return frontend.state.get_config.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.state.get_config.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.state.get_config.cljs$core$IFn$_invoke$arity$1((frontend.state.get_current_repo.cljs$core$IFn$_invoke$arity$0 ? frontend.state.get_current_repo.cljs$core$IFn$_invoke$arity$0() : frontend.state.get_current_repo.call(null)));
}));

(frontend.state.get_config.cljs$core$IFn$_invoke$arity$1 = (function (repo_url){
return frontend.state.merge_configs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.db_default_config,frontend.state.get_global_config(),frontend.state.get_graph_config.cljs$core$IFn$_invoke$arity$1(repo_url)], 0));
}));

(frontend.state.get_config.cljs$lang$maxFixedArity = 1);

frontend.state.publishing_enable_editing_QMARK_ = (function frontend$state$publishing_enable_editing_QMARK_(){
var and__5140__auto__ = logseq.common.config.PUBLISHING;
if(and__5140__auto__){
return new cljs.core.Keyword("publishing","enable-editing?","publishing/enable-editing?",-39045505).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
} else {
return and__5140__auto__;
}
});
frontend.state.enable_editing_QMARK_ = (function frontend$state$enable_editing_QMARK_(){
var or__5142__auto__ = (!(logseq.common.config.PUBLISHING));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("publishing","enable-editing?","publishing/enable-editing?",-39045505).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.state !== 'undefined') && (typeof frontend.state.built_in_macros !== 'undefined')){
} else {
frontend.state.built_in_macros = new cljs.core.PersistentArrayMap(null, 1, ["img","[:img.$4 {:src \"$1\" :style {:width $2 :height $3}}]"], null);
}
frontend.state.get_macros = (function frontend$state$get_macros(){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.built_in_macros,new cljs.core.Keyword(null,"macros","macros",811339431).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0())], 0));
});
frontend.state.set_assets_alias_enabled_BANG_ = (function frontend$state$set_assets_alias_enabled_BANG_(v){
var G__51000_51658 = new cljs.core.Keyword("assets","alias-enabled?","assets/alias-enabled?",-40753727);
var G__51001_51659 = cljs.core.boolean$(v);
(frontend.state.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.state.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(G__51000_51658,G__51001_51659) : frontend.state.set_state_BANG_.call(null,G__51000_51658,G__51001_51659));

return frontend.storage.set(new cljs.core.Keyword("assets","alias-enabled?","assets/alias-enabled?",-40753727),cljs.core.boolean$(v));
});
frontend.state.set_assets_alias_dirs_BANG_ = (function frontend$state$set_assets_alias_dirs_BANG_(dirs){
if(cljs.core.truth_(dirs)){
(frontend.state.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.state.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("assets","alias-dirs","assets/alias-dirs",627599020),dirs) : frontend.state.set_state_BANG_.call(null,new cljs.core.Keyword("assets","alias-dirs","assets/alias-dirs",627599020),dirs));

return frontend.storage.set(new cljs.core.Keyword("assets","alias-dirs","assets/alias-dirs",627599020),dirs);
} else {
return null;
}
});
frontend.state.get_custom_css_link = (function frontend$state$get_custom_css_link(){
return new cljs.core.Keyword(null,"custom-css-url","custom-css-url",442165452).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
});
frontend.state.get_custom_js_link = (function frontend$state$get_custom_js_link(){
return new cljs.core.Keyword(null,"custom-js-url","custom-js-url",1268122982).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
});
frontend.state.all_pages_public_QMARK_ = (function frontend$state$all_pages_public_QMARK_(){
var value = new cljs.core.Keyword("publishing","all-pages-public?","publishing/all-pages-public?",-386830034).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
var value__$1 = (((!((value == null))))?value:new cljs.core.Keyword(null,"all-pages-public?","all-pages-public?",-1773298253).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0()));
return value__$1 === true;
});
frontend.state.get_default_home = (function frontend$state$get_default_home(){
return new cljs.core.Keyword(null,"default-home","default-home",171104159).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
});
frontend.state.custom_home_page_QMARK_ = (function frontend$state$custom_home_page_QMARK_(){
return (!((new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(frontend.state.get_default_home()) == null)));
});
frontend.state.get_preferred_format = (function frontend$state$get_preferred_format(var_args){
var args__5882__auto__ = [];
var len__5876__auto___51662 = arguments.length;
var i__5877__auto___51663 = (0);
while(true){
if((i__5877__auto___51663 < len__5876__auto___51662)){
args__5882__auto__.push((arguments[i__5877__auto___51663]));

var G__51664 = (i__5877__auto___51663 + (1));
i__5877__auto___51663 = G__51664;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$variadic = (function (_args){
return new cljs.core.Keyword(null,"markdown","markdown",1227225089);
}));

(frontend.state.get_preferred_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.state.get_preferred_format.cljs$lang$applyTo = (function (seq51002){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51002));
}));

frontend.state.markdown_QMARK_ = (function frontend$state$markdown_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.state.get_preferred_format()),new cljs.core.Keyword(null,"markdown","markdown",1227225089));
});
frontend.state.default_date_formatter = "MMM do, yyyy";
frontend.state.set_date_formatter_BANG_ = (function frontend$state$set_date_formatter_BANG_(repo,formatter){
if(cljs.core.truth_(repo)){
var G__51003 = new cljs.core.Keyword("ui","date-formatter","ui/date-formatter",-223328401);
var G__51004 = (function (){var or__5142__auto__ = formatter;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.state.default_date_formatter;
}
})();
var G__51005 = new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908);
var G__51006 = repo;
return (frontend.state.set_state_BANG_.cljs$core$IFn$_invoke$arity$4 ? frontend.state.set_state_BANG_.cljs$core$IFn$_invoke$arity$4(G__51003,G__51004,G__51005,G__51006) : frontend.state.set_state_BANG_.call(null,G__51003,G__51004,G__51005,G__51006));
} else {
return null;
}
});
frontend.state.get_date_formatter = (function frontend$state$get_date_formatter(){
var or__5142__auto__ = (function (){var temp__5825__auto__ = (frontend.state.get_current_repo.cljs$core$IFn$_invoke$arity$0 ? frontend.state.get_current_repo.cljs$core$IFn$_invoke$arity$0() : frontend.state.get_current_repo.call(null));
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return (frontend.state.get_state.cljs$core$IFn$_invoke$arity$3 ? frontend.state.get_state.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("ui","date-formatter","ui/date-formatter",-223328401),new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908),repo) : frontend.state.get_state.call(null,new cljs.core.Keyword("ui","date-formatter","ui/date-formatter",-223328401),new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908),repo));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.state.default_date_formatter;
}
});
frontend.state.custom_shortcuts = (function frontend$state$custom_shortcuts(){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){try{return frontend.storage.get(new cljs.core.Keyword(null,"ls-shortcuts","ls-shortcuts",-1222790504));
}catch (e51007){var e = e51007;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shortcut","storage-read-error","shortcut/storage-read-error",-496356718),e], 0));

return null;
}})(),new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0())], 0));
});
frontend.state.get_commands = (function frontend$state$get_commands(){
return new cljs.core.Keyword(null,"commands","commands",161008658).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
});
frontend.state.get_scheduled_future_days = (function frontend$state$get_scheduled_future_days(){
var days = new cljs.core.Keyword("scheduled","future-days","scheduled/future-days",-104348029).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
var or__5142__auto__ = ((cljs.core.int_QMARK_(days))?days:null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (7);
}
});
frontend.state.get_start_of_week = (function frontend$state$get_start_of_week(){
var or__5142__auto__ = new cljs.core.Keyword(null,"start-of-week","start-of-week",-1590603824).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.rfx.snapshot(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"start-of-week","start-of-week",-1590603824)], null));
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return (6);
}
}
});
frontend.state.get_ref_open_blocks_level = (function frontend$state$get_ref_open_blocks_level(){
var temp__5823__auto__ = new cljs.core.Keyword("ref","default-open-blocks-level","ref/default-open-blocks-level",-51352945).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
if(cljs.core.truth_(temp__5823__auto__)){
var value = temp__5823__auto__;
if(((cljs.core.int_QMARK_(value)) && ((value >= (0))))){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(value,(9));
} else {
return (2);
}
} else {
return (2);
}
});
frontend.state.get_export_bullet_indentation = (function frontend$state$get_export_bullet_indentation(){
var G__51008 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("export","bullet-indentation","export/bullet-indentation",-647274253),new cljs.core.Keyword(null,"tab","tab",-559583621));
var G__51008__$1 = (((G__51008 instanceof cljs.core.Keyword))?G__51008.fqn:null);
switch (G__51008__$1) {
case "eight-spaces":
return "        ";

break;
case "four-spaces":
return "    ";

break;
case "two-spaces":
return "  ";

break;
case "tab":
return "\t";

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51008__$1))));

}
});
frontend.state.enable_search_remove_accents_QMARK_ = (function frontend$state$enable_search_remove_accents_QMARK_(){
return new cljs.core.Keyword("feature","enable-search-remove-accents?","feature/enable-search-remove-accents?",1106083837).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
});
frontend.state.enable_semantic_search_QMARK_ = (function frontend$state$enable_semantic_search_QMARK_(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.rfx.snapshot(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("feature","enable-semantic-search?","feature/enable-semantic-search?",-1561249444)], null)) === true;
});
frontend.state.read_state_value = (function frontend$state$read_state_value(db,ks,nested_path){
var ks_coll_QMARK_ = cljs.core.coll_QMARK_(ks);
var get_fn = ((ks_coll_QMARK_)?cljs.core.get_in:cljs.core.get);
var s = (get_fn.cljs$core$IFn$_invoke$arity$2 ? get_fn.cljs$core$IFn$_invoke$arity$2(db,ks) : get_fn.call(null,db,ks));
var nested_path_coll_QMARK_ = cljs.core.coll_QMARK_(nested_path);
if(cljs.core.truth_((function (){var and__5140__auto__ = nested_path;
if(cljs.core.truth_(and__5140__auto__)){
return nested_path_coll_QMARK_;
} else {
return and__5140__auto__;
}
})())){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,nested_path);
} else {
if(cljs.core.truth_(nested_path)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,nested_path);
} else {
return s;

}
}
});
/**
 * Returns a plain state value.
 * 
 *   Use this outside component rendering or when the caller does not need reactive
 *   rendering. Components that render from state should use `frontend.rfx/use-sub`.
 */
frontend.state.get_state = (function frontend$state$get_state(var_args){
var G__51012 = arguments.length;
switch (G__51012) {
case 0:
return frontend.state.get_state.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__5901__auto__ = [];
var len__5876__auto___51696 = arguments.length;
var i__5877__auto___51697 = (0);
while(true){
if((i__5877__auto___51697 < len__5876__auto___51696)){
args_arr__5901__auto__.push((arguments[i__5877__auto___51697]));

var G__51698 = (i__5877__auto___51697 + (1));
i__5877__auto___51697 = G__51698;
continue;
} else {
}
break;
}

var argseq__5902__auto__ = ((((1) < args_arr__5901__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5901__auto__.slice((1)),(0),null)):null);
return frontend.state.get_state.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5902__auto__);

}
});

(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.rfx.snapshot();
}));

(frontend.state.get_state.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__51013){
var map__51014 = p__51013;
var map__51014__$1 = cljs.core.__destructure_map(map__51014);
var nested_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51014__$1,new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908));
return frontend.state.read_state_value(frontend.rfx.snapshot(),ks,nested_path);
}));

/** @this {Function} */
(frontend.state.get_state.cljs$lang$applyTo = (function (seq51010){
var G__51011 = cljs.core.first(seq51010);
var seq51010__$1 = cljs.core.next(seq51010);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51011,seq51010__$1);
}));

(frontend.state.get_state.cljs$lang$maxFixedArity = (1));

frontend.state.set_editing_block_id_BANG_ = (function frontend$state$set_editing_block_id_BANG_(container_block){
var G__51015 = new cljs.core.Keyword("editor","editing?","editor/editing?",807325417);
var G__51016 = cljs.core.PersistentArrayMap.createAsIfByAssoc([container_block,true]);
return (frontend.state.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.state.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(G__51015,G__51016) : frontend.state.set_state_BANG_.call(null,G__51015,G__51016));
});
frontend.state.config_for_repo = (function frontend$state$config_for_repo(config,repo){
return frontend.state.merge_configs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.db_default_config,cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.Keyword("frontend.state","global-config","frontend.state/global-config",1533356)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,repo)], 0));
});
frontend.state.enable_grammarly_QMARK_ = (function frontend$state$enable_grammarly_QMARK_(){
return new cljs.core.Keyword("feature","enable-grammarly?","feature/enable-grammarly?",816531392).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0()) === true;
});
frontend.state.scheduled_deadlines_disabled_QMARK_ = (function frontend$state$scheduled_deadlines_disabled_QMARK_(){
return new cljs.core.Keyword("feature","disable-scheduled-and-deadline-query?","feature/disable-scheduled-and-deadline-query?",-1605937327).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0()) === true;
});
frontend.state.enable_fold_button_right_QMARK_ = (function frontend$state$enable_fold_button_right_QMARK_(){
var and__5140__auto__ = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(and__5140__auto__)){
return frontend.util.sm_breakpoint_QMARK_();
} else {
return and__5140__auto__;
}
});
frontend.state.use_enable_fold_button_right_QMARK_ = (function frontend$state$use_enable_fold_button_right_QMARK_(){
var _ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","viewport","ui/viewport",443348007)], null));
return frontend.state.enable_fold_button_right_QMARK_();
});
frontend.state.enable_flashcards_QMARK_ = (function frontend$state$enable_flashcards_QMARK_(var_args){
var G__51019 = arguments.length;
switch (G__51019) {
case 0:
return frontend.state.enable_flashcards_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.state.enable_flashcards_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.state.enable_flashcards_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.state.enable_flashcards_QMARK_.cljs$core$IFn$_invoke$arity$1((frontend.state.get_current_repo.cljs$core$IFn$_invoke$arity$0 ? frontend.state.get_current_repo.cljs$core$IFn$_invoke$arity$0() : frontend.state.get_current_repo.call(null)));
}));

(frontend.state.enable_flashcards_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (repo){
return (!(new cljs.core.Keyword("feature","enable-flashcards?","feature/enable-flashcards?",1572039243).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$1(repo)) === false));
}));

(frontend.state.enable_flashcards_QMARK_.cljs$lang$maxFixedArity = 1);

frontend.state.show_brackets_QMARK_ = (function frontend$state$show_brackets_QMARK_(){
return (!(new cljs.core.Keyword("ui","show-brackets?","ui/show-brackets?",659790606).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0()) === false));
});
frontend.state.get_selected_block_ids = (function frontend$state$get_selected_block_ids(blocks){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(frontend.util.selection_node_block_id,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,blocks)));
});
frontend.state.block_content_max_length = (function frontend$state$block_content_max_length(repo){
var or__5142__auto__ = new cljs.core.Keyword("block","title-max-length","block/title-max-length",-2027904267).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$1(repo));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword("block","content-max-length","block/content-max-length",1087086620).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$1(repo));
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return (10000);
}
}
});
frontend.state.mobile_QMARK_ = (function frontend$state$mobile_QMARK_(){
var or__5142__auto__ = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
});
frontend.state.enable_tooltip_QMARK_ = (function frontend$state$enable_tooltip_QMARK_(){
if(cljs.core.truth_(frontend.state.mobile_QMARK_())){
return false;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("ui","enable-tooltip?","ui/enable-tooltip?",1082007831),true);
}
});
frontend.state.show_command_doc_QMARK_ = (function frontend$state$show_command_doc_QMARK_(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("ui","show-command-doc?","ui/show-command-doc?",-23052835),true);
});
frontend.state.logical_outdenting_QMARK_ = (function frontend$state$logical_outdenting_QMARK_(){
return new cljs.core.Keyword("editor","logical-outdenting?","editor/logical-outdenting?",-234289706).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
});
frontend.state.show_full_blocks_QMARK_ = (function frontend$state$show_full_blocks_QMARK_(){
return new cljs.core.Keyword("ui","show-full-blocks?","ui/show-full-blocks?",-87079885).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
});
frontend.state.preferred_pasting_file_QMARK_ = (function frontend$state$preferred_pasting_file_QMARK_(){
return new cljs.core.Keyword("editor","preferred-pasting-file?","editor/preferred-pasting-file?",-1242172921).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
});
frontend.state.auto_expand_block_refs_QMARK_ = (function frontend$state$auto_expand_block_refs_QMARK_(){
return new cljs.core.Keyword("ui","auto-expand-block-refs?","ui/auto-expand-block-refs?",-1188664588).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
});
frontend.state.doc_mode_enter_for_new_line_QMARK_ = (function frontend$state$doc_mode_enter_for_new_line_QMARK_(){
var and__5140__auto__ = (frontend.state.document_mode_QMARK_.cljs$core$IFn$_invoke$arity$0 ? frontend.state.document_mode_QMARK_.cljs$core$IFn$_invoke$arity$0() : frontend.state.document_mode_QMARK_.call(null));
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(new cljs.core.Keyword("shortcut","doc-mode-enter-for-new-block?","shortcut/doc-mode-enter-for-new-block?",936132327).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0()));
} else {
return and__5140__auto__;
}
});
frontend.state.user_groups = (function frontend$state$user_groups(){
return cljs.core.set(frontend.state.get_state(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","info","user/info",-345834271),new cljs.core.Keyword(null,"UserGroups","UserGroups",1693861388)], null)));
});
frontend.state.assoc_state_db = (function frontend$state$assoc_state_db(db,path,value,nested_path){
var path_coll_QMARK_ = cljs.core.coll_QMARK_(path);
var nested_path_coll_QMARK_ = cljs.core.coll_QMARK_(nested_path);
if(cljs.core.truth_((function (){var and__5140__auto__ = nested_path;
if(cljs.core.truth_(and__5140__auto__)){
return nested_path_coll_QMARK_;
} else {
return and__5140__auto__;
}
})())){
if(path_coll_QMARK_){
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(path),nested_path),value);
} else {
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),nested_path),value);
}
} else {
if(cljs.core.truth_(nested_path)){
if(path_coll_QMARK_){
return cljs.core.assoc_in(db,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(path),nested_path),value);
} else {
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,nested_path], null),value);
}
} else {
if(path_coll_QMARK_){
return cljs.core.assoc_in(db,path,value);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,path,value);

}
}
}
});
frontend.state.full_state_path = (function frontend$state$full_state_path(path,nested_path){
var base_path = ((cljs.core.coll_QMARK_(path))?cljs.core.vec(path):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
if(cljs.core.truth_((function (){var and__5140__auto__ = nested_path;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.coll_QMARK_(nested_path);
} else {
return and__5140__auto__;
}
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(base_path,nested_path);
} else {
if(cljs.core.truth_(nested_path)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(base_path,nested_path);
} else {
return base_path;

}
}
});
frontend.state.update_state_db = (function frontend$state$update_state_db(db,path,f,nested_path){
var path_coll_QMARK_ = cljs.core.coll_QMARK_(path);
var nested_path_coll_QMARK_ = cljs.core.coll_QMARK_(nested_path);
if(cljs.core.truth_((function (){var and__5140__auto__ = nested_path;
if(cljs.core.truth_(and__5140__auto__)){
return nested_path_coll_QMARK_;
} else {
return and__5140__auto__;
}
})())){
if(path_coll_QMARK_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(path),nested_path),f);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),nested_path),f);
}
} else {
if(cljs.core.truth_(nested_path)){
if(path_coll_QMARK_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(path),nested_path),f);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,nested_path], null),f);
}
} else {
if(path_coll_QMARK_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,path,f);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,path,f);

}
}
}
});
frontend.state.set_state_BANG_ = (function frontend$state$set_state_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___51722 = arguments.length;
var i__5877__auto___51723 = (0);
while(true){
if((i__5877__auto___51723 < len__5876__auto___51722)){
args__5882__auto__.push((arguments[i__5877__auto___51723]));

var G__51724 = (i__5877__auto___51723 + (1));
i__5877__auto___51723 = G__51724;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return frontend.state.set_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(frontend.state.set_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,value,p__51034){
var map__51036 = p__51034;
var map__51036__$1 = cljs.core.__destructure_map(map__51036);
var nested_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51036__$1,new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908));
var changed_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51036__$1,new cljs.core.Keyword(null,"changed-paths","changed-paths",801656790));
frontend.state._STAR_profile_state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.update.cljs$core$IFn$_invoke$arity$3(frontend.state._STAR_profile_state.cljs$core$IDeref$_deref$arity$1(null),path,cljs.core.inc));

var old_v_51726 = frontend.state.read_state_value(frontend.rfx.snapshot(),path,nested_path);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_v_51726,value)){
var db_SINGLEQUOTE__51727 = frontend.state.assoc_state_db(frontend.rfx.snapshot(),path,value,nested_path);
if(cljs.core.seq(changed_paths)){
frontend.rfx.replace_state_paths_BANG_(db_SINGLEQUOTE__51727,changed_paths);
} else {
frontend.rfx.replace_state_BANG_.cljs$core$IFn$_invoke$arity$2(db_SINGLEQUOTE__51727,frontend.state.full_state_path(path,nested_path));
}
} else {
}

return null;
}));

(frontend.state.set_state_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.state.set_state_BANG_.cljs$lang$applyTo = (function (seq51031){
var G__51032 = cljs.core.first(seq51031);
var seq51031__$1 = cljs.core.next(seq51031);
var G__51033 = cljs.core.first(seq51031__$1);
var seq51031__$2 = cljs.core.next(seq51031__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51032,G__51033,seq51031__$2);
}));

frontend.state.update_state_BANG_ = (function frontend$state$update_state_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___51728 = arguments.length;
var i__5877__auto___51729 = (0);
while(true){
if((i__5877__auto___51729 < len__5876__auto___51728)){
args__5882__auto__.push((arguments[i__5877__auto___51729]));

var G__51730 = (i__5877__auto___51729 + (1));
i__5877__auto___51729 = G__51730;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return frontend.state.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(frontend.state.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,f,p__51042){
var map__51043 = p__51042;
var map__51043__$1 = cljs.core.__destructure_map(map__51043);
var nested_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51043__$1,new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908));
frontend.state._STAR_profile_state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.update.cljs$core$IFn$_invoke$arity$3(frontend.state._STAR_profile_state.cljs$core$IDeref$_deref$arity$1(null),path,cljs.core.inc));

var db_SINGLEQUOTE__51737 = frontend.state.update_state_db(frontend.rfx.snapshot(),path,f,nested_path);
frontend.rfx.replace_state_BANG_.cljs$core$IFn$_invoke$arity$2(db_SINGLEQUOTE__51737,frontend.state.full_state_path(path,nested_path));

return null;
}));

(frontend.state.update_state_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.state.update_state_BANG_.cljs$lang$applyTo = (function (seq51038){
var G__51039 = cljs.core.first(seq51038);
var seq51038__$1 = cljs.core.next(seq51038);
var G__51040 = cljs.core.first(seq51038__$1);
var seq51038__$2 = cljs.core.next(seq51038__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51039,G__51040,seq51038__$2);
}));

frontend.state.replace_state_BANG_ = (function frontend$state$replace_state_BANG_(db){
frontend.rfx.replace_state_BANG_.cljs$core$IFn$_invoke$arity$1(db);

return null;
});
frontend.state.swap_state_BANG_ = (function frontend$state$swap_state_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___51738 = arguments.length;
var i__5877__auto___51739 = (0);
while(true){
if((i__5877__auto___51739 < len__5876__auto___51738)){
args__5882__auto__.push((arguments[i__5877__auto___51739]));

var G__51740 = (i__5877__auto___51739 + (1));
i__5877__auto___51739 = G__51740;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.state.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.state.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return frontend.state.replace_state_BANG_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,frontend.rfx.snapshot(),args));
}));

(frontend.state.swap_state_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.state.swap_state_BANG_.cljs$lang$applyTo = (function (seq51046){
var G__51047 = cljs.core.first(seq51046);
var seq51046__$1 = cljs.core.next(seq51046);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51047,seq51046__$1);
}));

frontend.state.get_route_match = (function frontend$state$get_route_match(){
return new cljs.core.Keyword(null,"route-match","route-match",-1450985937).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot());
});
frontend.state.get_current_route = (function frontend$state$get_current_route(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.get_route_match(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null));
});
frontend.state.home_QMARK_ = (function frontend$state$home_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"home","home",-74557309),frontend.state.get_current_route());
});
frontend.state.get_current_page = (function frontend$state$get_current_page(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),frontend.state.get_current_route())){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.get_route_match(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"name","name",1843675177)], null));
} else {
return null;
}
});
frontend.state.route_has_p_QMARK_ = (function frontend$state$route_has_p_QMARK_(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.get_route_match(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"p","p",151049309)], null));
});
/**
 * Returns the current repo URL, or else open demo graph
 */
frontend.state.get_current_repo = (function frontend$state$get_current_repo(){
return new cljs.core.Keyword("git","current-repo","git/current-repo",107438825).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot());
});
frontend.state.get_rtc_graphs = (function frontend$state$get_rtc_graphs(){
return new cljs.core.Keyword("rtc","graphs","rtc/graphs",-1584628267).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot());
});
frontend.state.get_repos = (function frontend$state$get_repos(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.rfx.snapshot(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword(null,"repos","repos",647483789)], null));
});
frontend.state.set_repos_BANG_ = (function frontend$state$set_repos_BANG_(repos){
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword(null,"repos","repos",647483789)], null),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(repos));
});
frontend.state.add_repo_BANG_ = (function frontend$state$add_repo_BANG_(repo){
if((!(clojure.string.blank_QMARK_(repo)))){
return frontend.state.update_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword(null,"repos","repos",647483789)], null),(function (repos){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(repos,repo));
}));
} else {
return null;
}
});
frontend.state.set_current_repo_BANG_ = (function frontend$state$set_current_repo_BANG_(repo){
frontend.state.set_state_BANG_(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825),repo);

if(cljs.core.truth_(repo)){
frontend.storage.set(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825),repo);
} else {
frontend.storage.remove(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825));
}

return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["setCurrentGraph",repo], 0));
});
frontend.state.set_preferred_language_BANG_ = (function frontend$state$set_preferred_language_BANG_(language){
var old_language = new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot());
var new_language = frontend.state.canonical_preferred_language(language);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_language,old_language)){
frontend.state.set_state_BANG_(new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017),new_language);

frontend.storage.set(new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017),new_language);

return electron.locale.push_locale_BANG_(new_language);
} else {
return null;
}
});
frontend.state.delete_repo_BANG_ = (function frontend$state$delete_repo_BANG_(repo){
return frontend.state.swap_state_BANG_((function (db){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword(null,"repos","repos",647483789)], null),(function (repos){
var G__51055 = new cljs.core.Keyword(null,"url","url",276297046);
var G__51056 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__51054_SHARP_){
var or__5142__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(repo),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__51054_SHARP_));
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto__ = new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531).cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531).cljs$core$IFn$_invoke$arity$1(p1__51054_SHARP_);
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531).cljs$core$IFn$_invoke$arity$1(repo),new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531).cljs$core$IFn$_invoke$arity$1(p1__51054_SHARP_));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}
}),repos);
return (frontend.util.distinct_by.cljs$core$IFn$_invoke$arity$2 ? frontend.util.distinct_by.cljs$core$IFn$_invoke$arity$2(G__51055,G__51056) : frontend.util.distinct_by.call(null,G__51055,G__51056));
})),new cljs.core.Keyword("sync","block-conflicts","sync/block-conflicts",-273067594),cljs.core.dissoc,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(repo));
}));
});
frontend.state.set_timestamp_block_BANG_ = (function frontend$state$set_timestamp_block_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","set-timestamp-block","editor/set-timestamp-block",1136443872),value);
});
frontend.state.get_timestamp_block = (function frontend$state$get_timestamp_block(){
return frontend.state.get_state(new cljs.core.Keyword("editor","set-timestamp-block","editor/set-timestamp-block",1136443872));
});
frontend.state.get_edit_block = (function frontend$state$get_edit_block(){
return frontend.state.get_state(new cljs.core.Keyword("editor","block","editor/block",1699377461));
});
frontend.state.editing_QMARK_ = (function frontend$state$editing_QMARK_(){
return cljs.core.seq(frontend.state.get_state(new cljs.core.Keyword("editor","editing?","editor/editing?",807325417)));
});
frontend.state.get_edit_input_id = (function frontend$state$get_edit_input_id(){
if((typeof process !== 'undefined')){
return null;
} else {
if(frontend.state.editing_QMARK_()){
try{var temp__5825__auto__ = (function (){var or__5142__auto__ = (function (){var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block());
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return goog.dom.getElement((""+"edit-block-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return document.activeElement;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var elem = temp__5825__auto__;
if(cljs.core.truth_(frontend.util.input_QMARK_(elem))){
var id = frontend.state.goog$module$goog$object.get(elem,"id");
if(clojure.string.starts_with_QMARK_(id,"edit-block-")){
return id;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}catch (e51059){var _e = e51059;
return null;
}} else {
return null;
}
}
});
frontend.state.set_edit_content_BANG_ = (function frontend$state$set_edit_content_BANG_(var_args){
var G__51061 = arguments.length;
switch (G__51061) {
case 1:
return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (value){
return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_edit_input_id(),value);
}));

(frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (input_id,value){
return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$3(input_id,value,true);
}));

(frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (input_id,value,set_input_value_QMARK_){
return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$4(input_id,value,set_input_value_QMARK_,null);
}));

(frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (input_id,value,set_input_value_QMARK_,caret_pos){
if(cljs.core.truth_(input_id)){
if(cljs.core.truth_(set_input_value_QMARK_)){
var temp__5825__auto___51751 = goog.dom.getElement(input_id);
if(cljs.core.truth_(temp__5825__auto___51751)){
var input_51753 = temp__5825__auto___51751;
frontend.util.set_change_value.cljs$core$IFn$_invoke$arity$3(input_51753,value,caret_pos);
} else {
}
} else {
}

return frontend.state.set_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("editor","content","editor/content",-756190443),value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908),(function (){var or__5142__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block());
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return input_id;
}
})()], 0));
} else {
return null;
}
}));

(frontend.state.set_edit_content_BANG_.cljs$lang$maxFixedArity = 4);

frontend.state.get_input = (function frontend$state$get_input(){
var temp__5825__auto__ = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return goog.dom.getElement(id);
} else {
return null;
}
});
frontend.state.get_edit_content = (function frontend$state$get_edit_content(){
var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block());
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.get_state(new cljs.core.Keyword("editor","content","editor/content",-756190443)),id);
} else {
return null;
}
});
frontend.state.set_selection_start_block_BANG_ = (function frontend$state$set_selection_start_block_BANG_(start_block){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("selection","start-block","selection/start-block",-832131492),start_block);
});
frontend.state.get_selection_start_block = (function frontend$state$get_selection_start_block(){
var or__5142__auto__ = frontend.state.get_state(new cljs.core.Keyword("selection","start-block","selection/start-block",-832131492));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var temp__5825__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5825__auto__)){
var edit_block = temp__5825__auto__;
var node = frontend.util.rec_get_node(edit_block,"ls-block");
frontend.state.set_selection_start_block_BANG_(node);

return node;
} else {
return null;
}
}
});
frontend.state.get_cursor_range = (function frontend$state$get_cursor_range(){
return frontend.state.get_state(new cljs.core.Keyword("editor","cursor-range","editor/cursor-range",1691491127));
});
frontend.state.set_cursor_range_BANG_ = (function frontend$state$set_cursor_range_BANG_(range){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","cursor-range","editor/cursor-range",1691491127),range);
});
frontend.state.set_search_mode_BANG_ = (function frontend$state$set_search_mode_BANG_(var_args){
var G__51063 = arguments.length;
switch (G__51063) {
case 1:
return frontend.state.set_search_mode_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.state.set_search_mode_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.state.set_search_mode_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (value){
return frontend.state.set_search_mode_BANG_.cljs$core$IFn$_invoke$arity$2(value,null);
}));

(frontend.state.set_search_mode_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (value,args){
frontend.state.set_state_BANG_(new cljs.core.Keyword("search","mode","search/mode",1628111395),value);

return frontend.state.set_state_BANG_(new cljs.core.Keyword("search","args","search/args",-462145864),args);
}));

(frontend.state.set_search_mode_BANG_.cljs$lang$maxFixedArity = 2);

frontend.state.set_editor_action_BANG_ = (function frontend$state$set_editor_action_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","action","editor/action",449993861),value);
});
frontend.state.set_editor_action_data_BANG_ = (function frontend$state$set_editor_action_data_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","action-data","editor/action-data",969703128),value);
});
frontend.state.get_editor_action = (function frontend$state$get_editor_action(){
return frontend.state.get_state(new cljs.core.Keyword("editor","action","editor/action",449993861));
});
frontend.state.get_editor_action_data = (function frontend$state$get_editor_action_data(){
return frontend.state.get_state(new cljs.core.Keyword("editor","action-data","editor/action-data",969703128));
});
frontend.state.get_editor_show_page_search_QMARK_ = (function frontend$state$get_editor_show_page_search_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_editor_action(),new cljs.core.Keyword(null,"page-search","page-search",1842925280));
});
frontend.state.get_editor_show_page_search_hashtag_QMARK_ = (function frontend$state$get_editor_show_page_search_hashtag_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_editor_action(),new cljs.core.Keyword(null,"page-search-hashtag","page-search-hashtag",1121040573));
});
frontend.state.get_editor_show_block_search_QMARK_ = (function frontend$state$get_editor_show_block_search_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_editor_action(),new cljs.core.Keyword(null,"block-search","block-search",-897517253));
});
frontend.state.set_editor_show_input_BANG_ = (function frontend$state$set_editor_show_input_BANG_(value){
if(cljs.core.truth_(value)){
frontend.state.set_editor_action_data_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.state.get_editor_action_data(),new cljs.core.Keyword(null,"options","options",99638489),value));

return frontend.state.set_editor_action_BANG_(new cljs.core.Keyword(null,"input","input",556931961));
} else {
frontend.state.set_editor_action_BANG_(null);

return frontend.state.set_editor_action_data_BANG_(null);
}
});
frontend.state.get_editor_show_input = (function frontend$state$get_editor_show_input(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_editor_action(),new cljs.core.Keyword(null,"input","input",556931961))){
return frontend.state.get_state(new cljs.core.Keyword("editor","action-data","editor/action-data",969703128));
} else {
return null;
}
});
frontend.state.set_editor_show_commands_BANG_ = (function frontend$state$set_editor_show_commands_BANG_(){
if(cljs.core.truth_(frontend.state.get_editor_action())){
return null;
} else {
return frontend.state.set_editor_action_BANG_(new cljs.core.Keyword(null,"commands","commands",161008658));
}
});
frontend.state.clear_editor_action_BANG_ = (function frontend$state$clear_editor_action_BANG_(){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","action","editor/action",449993861),null);
});
/**
 * Slash commands and other editor popups belong to the current edit block.
 * Entering edit on a different block closes them. Re-editing the same block
 * keeps the current action.
 */
frontend.state.clear_editor_action_if_switching_block_BANG_ = (function frontend$state$clear_editor_action_if_switching_block_BANG_(new_block){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(new_block),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block()))){
return frontend.state.clear_editor_action_BANG_();
} else {
return null;
}
});
frontend.state.get_edit_pos = (function frontend$state$get_edit_pos(){
var temp__5825__auto__ = frontend.state.get_input();
if(cljs.core.truth_(temp__5825__auto__)){
var input = temp__5825__auto__;
return frontend.util.get_selection_start(input);
} else {
return null;
}
});
frontend.state.get_selection_direction = (function frontend$state$get_selection_direction(){
return frontend.state.get_state(new cljs.core.Keyword("selection","direction","selection/direction",1172907345));
});
frontend.state.get_unsorted_selection_blocks = (function frontend$state$get_unsorted_selection_blocks(){
return frontend.state.get_state(new cljs.core.Keyword("selection","blocks","selection/blocks",638970019));
});
frontend.state.get_selection_blocks = (function frontend$state$get_selection_blocks(){
var result = frontend.state.get_unsorted_selection_blocks();
var direction = frontend.state.get_selection_direction();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"up","up",-269712113))){
return cljs.core.vec(cljs.core.reverse(result));
} else {
return result;
}
});
frontend.state.get_selection_block_ids = (function frontend$state$get_selection_block_ids(){
return frontend.state.get_selected_block_ids(frontend.state.get_selection_blocks());
});
frontend.state.dom_clear_selection_BANG_ = (function frontend$state$dom_clear_selection_BANG_(){
var seq__51076 = cljs.core.seq(dommy.utils.__GT_Array(document.getElementsByClassName("selected")));
var chunk__51077 = null;
var count__51078 = (0);
var i__51079 = (0);
while(true){
if((i__51079 < count__51078)){
var node = chunk__51077.cljs$core$IIndexed$_nth$arity$2(null,i__51079);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(node,"selected");


var G__51766 = seq__51076;
var G__51767 = chunk__51077;
var G__51768 = count__51078;
var G__51769 = (i__51079 + (1));
seq__51076 = G__51766;
chunk__51077 = G__51767;
count__51078 = G__51768;
i__51079 = G__51769;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__51076);
if(temp__5825__auto__){
var seq__51076__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51076__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__51076__$1);
var G__51770 = cljs.core.chunk_rest(seq__51076__$1);
var G__51771 = c__5673__auto__;
var G__51772 = cljs.core.count(c__5673__auto__);
var G__51773 = (0);
seq__51076 = G__51770;
chunk__51077 = G__51771;
count__51078 = G__51772;
i__51079 = G__51773;
continue;
} else {
var node = cljs.core.first(seq__51076__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(node,"selected");


var G__51774 = cljs.core.next(seq__51076__$1);
var G__51775 = null;
var G__51776 = (0);
var G__51777 = (0);
seq__51076 = G__51774;
chunk__51077 = G__51775;
count__51078 = G__51776;
i__51079 = G__51777;
continue;
}
} else {
return null;
}
}
break;
}
});
frontend.state.mark_dom_blocks_as_selected = (function frontend$state$mark_dom_blocks_as_selected(nodes){
var seq__51080 = cljs.core.seq(nodes);
var chunk__51081 = null;
var count__51082 = (0);
var i__51083 = (0);
while(true){
if((i__51083 < count__51082)){
var node = chunk__51081.cljs$core$IIndexed$_nth$arity$2(null,i__51083);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(node,"selected");

if(dommy.core.has_class_QMARK_(node,"ls-table-row")){
node.focus();
} else {
}


var G__51779 = seq__51080;
var G__51780 = chunk__51081;
var G__51781 = count__51082;
var G__51782 = (i__51083 + (1));
seq__51080 = G__51779;
chunk__51081 = G__51780;
count__51082 = G__51781;
i__51083 = G__51782;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__51080);
if(temp__5825__auto__){
var seq__51080__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51080__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__51080__$1);
var G__51783 = cljs.core.chunk_rest(seq__51080__$1);
var G__51784 = c__5673__auto__;
var G__51785 = cljs.core.count(c__5673__auto__);
var G__51786 = (0);
seq__51080 = G__51783;
chunk__51081 = G__51784;
count__51082 = G__51785;
i__51083 = G__51786;
continue;
} else {
var node = cljs.core.first(seq__51080__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(node,"selected");

if(dommy.core.has_class_QMARK_(node,"ls-table-row")){
node.focus();
} else {
}


var G__51787 = cljs.core.next(seq__51080__$1);
var G__51788 = null;
var G__51789 = (0);
var G__51790 = (0);
seq__51080 = G__51787;
chunk__51081 = G__51788;
count__51082 = G__51789;
i__51083 = G__51790;
continue;
}
} else {
return null;
}
}
break;
}
});
frontend.state.pub_event_BANG_ = (function frontend$state$pub_event_BANG_(payload){
return frontend.rfx.pub_event_BANG_(payload);
});
frontend.state.unselect_node = (function frontend$state$unselect_node(node){
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(node,"selected");

if(dommy.core.has_class_QMARK_(node,"ls-table-row")){
return node.blur();
} else {
return null;
}
});
frontend.state.set_selection_blocks_aux_BANG_ = (function frontend$state$set_selection_blocks_aux_BANG_(blocks){
frontend.state.set_state_BANG_(new cljs.core.Keyword("view","selected-blocks","view/selected-blocks",-92053027),null);

var selected_blocks = frontend.state.get_state(new cljs.core.Keyword("selection","blocks","selection/blocks",638970019));
var selected_ids = cljs.core.set(frontend.state.get_selected_block_ids(selected_blocks));
var _ = frontend.state.set_state_BANG_(new cljs.core.Keyword("selection","blocks","selection/blocks",638970019),blocks);
var new_ids = cljs.core.set(frontend.state.get_selection_block_ids());
var removed = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(selected_ids,new_ids);
var next_blocks = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,blocks));
var removed_nodes_without_blockid = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__51085_SHARP_){
return dommy.core.attr(p1__51085_SHARP_,"blockid");
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__51084_SHARP_){
return cljs.core.contains_QMARK_(next_blocks,p1__51084_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,selected_blocks)));
frontend.state.mark_dom_blocks_as_selected(blocks);

var seq__51086_51792 = cljs.core.seq(removed);
var chunk__51087_51793 = null;
var count__51088_51794 = (0);
var i__51089_51795 = (0);
while(true){
if((i__51089_51795 < count__51088_51794)){
var id_51796 = chunk__51087_51793.cljs$core$IIndexed$_nth$arity$2(null,i__51089_51795);
var seq__51100_51797 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector((frontend.util.format.cljs$core$IFn$_invoke$arity$2 ? frontend.util.format.cljs$core$IFn$_invoke$arity$2("[blockid='%s']",id_51796) : frontend.util.format.call(null,"[blockid='%s']",id_51796))))));
var chunk__51101_51798 = null;
var count__51102_51799 = (0);
var i__51103_51800 = (0);
while(true){
if((i__51103_51800 < count__51102_51799)){
var node_51801 = chunk__51101_51798.cljs$core$IIndexed$_nth$arity$2(null,i__51103_51800);
frontend.state.unselect_node(node_51801);


var G__51802 = seq__51100_51797;
var G__51803 = chunk__51101_51798;
var G__51804 = count__51102_51799;
var G__51805 = (i__51103_51800 + (1));
seq__51100_51797 = G__51802;
chunk__51101_51798 = G__51803;
count__51102_51799 = G__51804;
i__51103_51800 = G__51805;
continue;
} else {
var temp__5825__auto___51806 = cljs.core.seq(seq__51100_51797);
if(temp__5825__auto___51806){
var seq__51100_51807__$1 = temp__5825__auto___51806;
if(cljs.core.chunked_seq_QMARK_(seq__51100_51807__$1)){
var c__5673__auto___51808 = cljs.core.chunk_first(seq__51100_51807__$1);
var G__51809 = cljs.core.chunk_rest(seq__51100_51807__$1);
var G__51810 = c__5673__auto___51808;
var G__51811 = cljs.core.count(c__5673__auto___51808);
var G__51812 = (0);
seq__51100_51797 = G__51809;
chunk__51101_51798 = G__51810;
count__51102_51799 = G__51811;
i__51103_51800 = G__51812;
continue;
} else {
var node_51813 = cljs.core.first(seq__51100_51807__$1);
frontend.state.unselect_node(node_51813);


var G__51814 = cljs.core.next(seq__51100_51807__$1);
var G__51815 = null;
var G__51816 = (0);
var G__51817 = (0);
seq__51100_51797 = G__51814;
chunk__51101_51798 = G__51815;
count__51102_51799 = G__51816;
i__51103_51800 = G__51817;
continue;
}
} else {
}
}
break;
}


var G__51818 = seq__51086_51792;
var G__51819 = chunk__51087_51793;
var G__51820 = count__51088_51794;
var G__51821 = (i__51089_51795 + (1));
seq__51086_51792 = G__51818;
chunk__51087_51793 = G__51819;
count__51088_51794 = G__51820;
i__51089_51795 = G__51821;
continue;
} else {
var temp__5825__auto___51822 = cljs.core.seq(seq__51086_51792);
if(temp__5825__auto___51822){
var seq__51086_51823__$1 = temp__5825__auto___51822;
if(cljs.core.chunked_seq_QMARK_(seq__51086_51823__$1)){
var c__5673__auto___51824 = cljs.core.chunk_first(seq__51086_51823__$1);
var G__51825 = cljs.core.chunk_rest(seq__51086_51823__$1);
var G__51826 = c__5673__auto___51824;
var G__51827 = cljs.core.count(c__5673__auto___51824);
var G__51828 = (0);
seq__51086_51792 = G__51825;
chunk__51087_51793 = G__51826;
count__51088_51794 = G__51827;
i__51089_51795 = G__51828;
continue;
} else {
var id_51829 = cljs.core.first(seq__51086_51823__$1);
var seq__51120_51830 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector((frontend.util.format.cljs$core$IFn$_invoke$arity$2 ? frontend.util.format.cljs$core$IFn$_invoke$arity$2("[blockid='%s']",id_51829) : frontend.util.format.call(null,"[blockid='%s']",id_51829))))));
var chunk__51121_51831 = null;
var count__51122_51832 = (0);
var i__51123_51833 = (0);
while(true){
if((i__51123_51833 < count__51122_51832)){
var node_51834 = chunk__51121_51831.cljs$core$IIndexed$_nth$arity$2(null,i__51123_51833);
frontend.state.unselect_node(node_51834);


var G__51835 = seq__51120_51830;
var G__51836 = chunk__51121_51831;
var G__51837 = count__51122_51832;
var G__51838 = (i__51123_51833 + (1));
seq__51120_51830 = G__51835;
chunk__51121_51831 = G__51836;
count__51122_51832 = G__51837;
i__51123_51833 = G__51838;
continue;
} else {
var temp__5825__auto___51839__$1 = cljs.core.seq(seq__51120_51830);
if(temp__5825__auto___51839__$1){
var seq__51120_51840__$1 = temp__5825__auto___51839__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51120_51840__$1)){
var c__5673__auto___51841 = cljs.core.chunk_first(seq__51120_51840__$1);
var G__51842 = cljs.core.chunk_rest(seq__51120_51840__$1);
var G__51843 = c__5673__auto___51841;
var G__51844 = cljs.core.count(c__5673__auto___51841);
var G__51845 = (0);
seq__51120_51830 = G__51842;
chunk__51121_51831 = G__51843;
count__51122_51832 = G__51844;
i__51123_51833 = G__51845;
continue;
} else {
var node_51847 = cljs.core.first(seq__51120_51840__$1);
frontend.state.unselect_node(node_51847);


var G__51848 = cljs.core.next(seq__51120_51840__$1);
var G__51849 = null;
var G__51850 = (0);
var G__51851 = (0);
seq__51120_51830 = G__51848;
chunk__51121_51831 = G__51849;
count__51122_51832 = G__51850;
i__51123_51833 = G__51851;
continue;
}
} else {
}
}
break;
}


var G__51852 = cljs.core.next(seq__51086_51823__$1);
var G__51853 = null;
var G__51854 = (0);
var G__51855 = (0);
seq__51086_51792 = G__51852;
chunk__51087_51793 = G__51853;
count__51088_51794 = G__51854;
i__51089_51795 = G__51855;
continue;
}
} else {
}
}
break;
}

var seq__51134 = cljs.core.seq(removed_nodes_without_blockid);
var chunk__51135 = null;
var count__51136 = (0);
var i__51137 = (0);
while(true){
if((i__51137 < count__51136)){
var node = chunk__51135.cljs$core$IIndexed$_nth$arity$2(null,i__51137);
frontend.state.unselect_node(node);


var G__51857 = seq__51134;
var G__51858 = chunk__51135;
var G__51859 = count__51136;
var G__51860 = (i__51137 + (1));
seq__51134 = G__51857;
chunk__51135 = G__51858;
count__51136 = G__51859;
i__51137 = G__51860;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__51134);
if(temp__5825__auto__){
var seq__51134__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51134__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__51134__$1);
var G__51861 = cljs.core.chunk_rest(seq__51134__$1);
var G__51862 = c__5673__auto__;
var G__51863 = cljs.core.count(c__5673__auto__);
var G__51864 = (0);
seq__51134 = G__51861;
chunk__51135 = G__51862;
count__51136 = G__51863;
i__51137 = G__51864;
continue;
} else {
var node = cljs.core.first(seq__51134__$1);
frontend.state.unselect_node(node);


var G__51865 = cljs.core.next(seq__51134__$1);
var G__51866 = null;
var G__51867 = (0);
var G__51868 = (0);
seq__51134 = G__51865;
chunk__51135 = G__51866;
count__51136 = G__51867;
i__51137 = G__51868;
continue;
}
} else {
return null;
}
}
break;
}
});
frontend.state.set_selection_blocks_BANG_ = (function frontend$state$set_selection_blocks_BANG_(var_args){
var G__51155 = arguments.length;
switch (G__51155) {
case 1:
return frontend.state.set_selection_blocks_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.state.set_selection_blocks_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.state.set_selection_blocks_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (blocks){
return frontend.state.set_selection_blocks_BANG_.cljs$core$IFn$_invoke$arity$2(blocks,null);
}));

(frontend.state.set_selection_blocks_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (blocks,direction){
if(cljs.core.seq(blocks)){
var blocks__$1 = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (block){
var class_list = (function (){var G__51164 = block;
if((G__51164 == null)){
return null;
} else {
return G__51164.classList;
}
})();
var and__5140__auto__ = class_list;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = class_list.contains("line-through");
if(cljs.core.truth_(and__5140__auto____$1)){
return class_list.contains("opacity-70");
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,blocks)));
frontend.state.set_selection_blocks_aux_BANG_(blocks__$1);

if(cljs.core.truth_(direction)){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("selection","direction","selection/direction",1172907345),direction);
} else {
return null;
}
} else {
return null;
}
}));

(frontend.state.set_selection_blocks_BANG_.cljs$lang$maxFixedArity = 2);

frontend.state.state_clear_selection_BANG_ = (function frontend$state$state_clear_selection_BANG_(){
frontend.state.set_state_BANG_(new cljs.core.Keyword("selection","blocks","selection/blocks",638970019),null);

frontend.state.set_state_BANG_(new cljs.core.Keyword("selection","direction","selection/direction",1172907345),null);

frontend.state.set_state_BANG_(new cljs.core.Keyword("selection","start-block","selection/start-block",-832131492),null);

frontend.state.set_state_BANG_(new cljs.core.Keyword("selection","selected-all?","selection/selected-all?",208605839),false);

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","hide-action-bar","editor/hide-action-bar",-1927566378)], null));
});
frontend.state.clear_selection_BANG_ = (function frontend$state$clear_selection_BANG_(){
frontend.state.dom_clear_selection_BANG_();

return frontend.state.state_clear_selection_BANG_();
});
frontend.state.get_selection_start_block_or_first = (function frontend$state$get_selection_start_block_or_first(){
var or__5142__auto__ = frontend.state.get_selection_start_block();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var G__51180 = cljs.core.first(frontend.state.get_selection_blocks());
if((G__51180 == null)){
return null;
} else {
return frontend.state.goog$module$goog$object.get(G__51180,"id");
}
}
});
/**
 * True sense of selection mode with valid selected block
 */
frontend.state.selection_QMARK_ = (function frontend$state$selection_QMARK_(){
return cljs.core.seq(frontend.state.get_selection_blocks());
});
frontend.state.conj_selection_block_BANG_ = (function frontend$state$conj_selection_block_BANG_(var_args){
var G__51191 = arguments.length;
switch (G__51191) {
case 1:
return frontend.state.conj_selection_block_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.state.conj_selection_block_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.state.conj_selection_block_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (block_or_blocks){
return frontend.state.conj_selection_block_BANG_.cljs$core$IFn$_invoke$arity$2(block_or_blocks,frontend.state.get_selection_direction());
}));

(frontend.state.conj_selection_block_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (block_or_blocks,direction){
var selection_blocks = frontend.state.get_unsorted_selection_blocks();
var block_or_blocks__$1 = ((cljs.core.sequential_QMARK_(block_or_blocks))?block_or_blocks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_or_blocks], null));
var blocks = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(selection_blocks,block_or_blocks__$1));
return frontend.state.set_selection_blocks_BANG_.cljs$core$IFn$_invoke$arity$2(blocks,direction);
}));

(frontend.state.conj_selection_block_BANG_.cljs$lang$maxFixedArity = 2);

frontend.state.drop_selection_block_BANG_ = (function frontend$state$drop_selection_block_BANG_(block){
return frontend.state.set_selection_blocks_aux_BANG_(cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__51199_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(block.id,p1__51199_SHARP_.id);
}),frontend.state.get_unsorted_selection_blocks())));
});
frontend.state.drop_selection_blocks_starts_with_BANG_ = (function frontend$state$drop_selection_blocks_starts_with_BANG_(block){
var blocks = frontend.state.get_unsorted_selection_blocks();
var blocks_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(b.id,block.id);
}),blocks)),block);
return frontend.state.set_selection_blocks_aux_BANG_(blocks_SINGLEQUOTE_);
});
frontend.state.drop_last_selection_block_BANG_ = (function frontend$state$drop_last_selection_block_BANG_(){
var blocks = frontend.state.get_state(new cljs.core.Keyword("selection","blocks","selection/blocks",638970019));
var blocks_SINGLEQUOTE_ = cljs.core.vec(cljs.core.butlast(blocks));
frontend.state.set_selection_blocks_aux_BANG_(blocks_SINGLEQUOTE_);

return cljs.core.last(blocks);
});
frontend.state.hide_custom_context_menu_BANG_ = (function frontend$state$hide_custom_context_menu_BANG_(){
return frontend.state.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("custom-context-menu","show?","custom-context-menu/show?",2074408902),false,new cljs.core.Keyword("custom-context-menu","links","custom-context-menu/links",-1197608677),null,new cljs.core.Keyword("custom-context-menu","position","custom-context-menu/position",666089423),null], 0));
});
frontend.state.toggle_navigation_item_collapsed_BANG_ = (function frontend$state$toggle_navigation_item_collapsed_BANG_(item){
return frontend.state.update_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","navigation-item-collapsed?","ui/navigation-item-collapsed?",-1247120960),item], null),cljs.core.not);
});
frontend.state.sidebar_add_content_when_open_BANG_ = (function frontend$state$sidebar_add_content_when_open_BANG_(){
if(cljs.core.empty_QMARK_(new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot()))){
var G__51220 = frontend.state.get_current_repo();
var G__51221 = "contents";
var G__51222 = new cljs.core.Keyword(null,"contents","contents",-1567174023);
return (frontend.state.sidebar_add_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.state.sidebar_add_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__51220,G__51221,G__51222) : frontend.state.sidebar_add_block_BANG_.call(null,G__51220,G__51221,G__51222));
} else {
return null;
}
});
frontend.state.open_right_sidebar_BANG_ = (function frontend$state$open_right_sidebar_BANG_(){
frontend.state.sidebar_add_content_when_open_BANG_();

return frontend.state.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887),true], 0));
});
frontend.state.hide_right_sidebar_BANG_ = (function frontend$state$hide_right_sidebar_BANG_(){
return frontend.state.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887),false], 0));
});
frontend.state.toggle_sidebar_open_QMARK__BANG_ = (function frontend$state$toggle_sidebar_open_QMARK__BANG_(){
if(cljs.core.truth_(new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot()))){
return frontend.state.hide_right_sidebar_BANG_();
} else {
return frontend.state.open_right_sidebar_BANG_();
}
});
frontend.state.sidebar_move_block_BANG_ = (function frontend$state$sidebar_move_block_BANG_(from,to){
return frontend.state.update_state_BANG_(new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475),(function (blocks){
var to__$1 = (((from > to))?(to + (1)):to);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(to__$1,from)){
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(blocks,from);
var blocks__$1 = cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__51229_SHARP_,p2__51230_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__51229_SHARP_,from)){
return p2__51230_SHARP_;
} else {
return null;
}
}),blocks);
var vec__51235 = cljs.core.split_at(to__$1,blocks__$1);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51235,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51235,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));
} else {
return blocks;
}
}));
});
frontend.state.sidebar_remove_block_BANG_ = (function frontend$state$sidebar_remove_block_BANG_(idx){
frontend.state.update_state_BANG_(new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475),(function (blocks){
if(typeof idx === 'string'){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__51240_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__51240_SHARP_),idx);
}),blocks);
} else {
return frontend.util.drop_nth(idx,blocks);
}
}));

if(cljs.core.empty_QMARK_(new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot()))){
return frontend.state.hide_right_sidebar_BANG_();
} else {
return null;
}
});
frontend.state.sidebar_remove_deleted_block_BANG_ = (function frontend$state$sidebar_remove_deleted_block_BANG_(ids){
var ids_set = cljs.core.set(ids);
frontend.state.update_state_BANG_(new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475),(function (items){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__51243){
var vec__51244 = p__51243;
var repo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51244,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51244,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51244,(2),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(repo,frontend.state.get_current_repo())) && (cljs.core.contains_QMARK_(ids_set,id)));
}),items);
}));

if(cljs.core.empty_QMARK_(new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot()))){
return frontend.state.hide_right_sidebar_BANG_();
} else {
return null;
}
});
frontend.state.sidebar_remove_rest_BANG_ = (function frontend$state$sidebar_remove_rest_BANG_(db_id){
frontend.state.update_state_BANG_(new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475),(function (blocks){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__51249_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__51249_SHARP_),db_id);
}),blocks);
}));

return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","sidebar-collapsed-blocks","ui/sidebar-collapsed-blocks",395046921),db_id], null),false);
});
frontend.state.sidebar_replace_block_BANG_ = (function frontend$state$sidebar_replace_block_BANG_(old_sidebar_key,new_sidebar_key){
return frontend.state.update_state_BANG_(new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475),(function (blocks){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51254_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__51254_SHARP_,old_sidebar_key)){
return new_sidebar_key;
} else {
return p1__51254_SHARP_;
}
}),blocks);
}));
});
frontend.state.sidebar_block_exists_QMARK_ = (function frontend$state$sidebar_block_exists_QMARK_(idx){
return cljs.core.some((function (p1__51257_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__51257_SHARP_),idx);
}),new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot()));
});
frontend.state.clear_sidebar_blocks_BANG_ = (function frontend$state$clear_sidebar_blocks_BANG_(){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475),cljs.core.List.EMPTY);
});
frontend.state.sidebar_block_toggle_collapse_BANG_ = (function frontend$state$sidebar_block_toggle_collapse_BANG_(db_id){
if(cljs.core.truth_(db_id)){
return frontend.state.update_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","sidebar-collapsed-blocks","ui/sidebar-collapsed-blocks",395046921),db_id], null),cljs.core.not);
} else {
return null;
}
});
frontend.state.sidebar_block_collapse_rest_BANG_ = (function frontend$state$sidebar_block_collapse_rest_BANG_(db_id){
var items = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot()))),db_id);
var seq__51267 = cljs.core.seq(items);
var chunk__51268 = null;
var count__51269 = (0);
var i__51270 = (0);
while(true){
if((i__51270 < count__51269)){
var item = chunk__51268.cljs$core$IIndexed$_nth$arity$2(null,i__51270);
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","sidebar-collapsed-blocks","ui/sidebar-collapsed-blocks",395046921),item], null),true);


var G__51899 = seq__51267;
var G__51900 = chunk__51268;
var G__51901 = count__51269;
var G__51902 = (i__51270 + (1));
seq__51267 = G__51899;
chunk__51268 = G__51900;
count__51269 = G__51901;
i__51270 = G__51902;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__51267);
if(temp__5825__auto__){
var seq__51267__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51267__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__51267__$1);
var G__51903 = cljs.core.chunk_rest(seq__51267__$1);
var G__51904 = c__5673__auto__;
var G__51905 = cljs.core.count(c__5673__auto__);
var G__51906 = (0);
seq__51267 = G__51903;
chunk__51268 = G__51904;
count__51269 = G__51905;
i__51270 = G__51906;
continue;
} else {
var item = cljs.core.first(seq__51267__$1);
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","sidebar-collapsed-blocks","ui/sidebar-collapsed-blocks",395046921),item], null),true);


var G__51907 = cljs.core.next(seq__51267__$1);
var G__51908 = null;
var G__51909 = (0);
var G__51910 = (0);
seq__51267 = G__51907;
chunk__51268 = G__51908;
count__51269 = G__51909;
i__51270 = G__51910;
continue;
}
} else {
return null;
}
}
break;
}
});
frontend.state.sidebar_block_set_collapsed_all_BANG_ = (function frontend$state$sidebar_block_set_collapsed_all_BANG_(collapsed_QMARK_){
var items = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot()));
var seq__51288 = cljs.core.seq(items);
var chunk__51289 = null;
var count__51290 = (0);
var i__51291 = (0);
while(true){
if((i__51291 < count__51290)){
var item = chunk__51289.cljs$core$IIndexed$_nth$arity$2(null,i__51291);
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","sidebar-collapsed-blocks","ui/sidebar-collapsed-blocks",395046921),item], null),collapsed_QMARK_);


var G__51914 = seq__51288;
var G__51915 = chunk__51289;
var G__51916 = count__51290;
var G__51917 = (i__51291 + (1));
seq__51288 = G__51914;
chunk__51289 = G__51915;
count__51290 = G__51916;
i__51291 = G__51917;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__51288);
if(temp__5825__auto__){
var seq__51288__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51288__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__51288__$1);
var G__51918 = cljs.core.chunk_rest(seq__51288__$1);
var G__51919 = c__5673__auto__;
var G__51920 = cljs.core.count(c__5673__auto__);
var G__51921 = (0);
seq__51288 = G__51918;
chunk__51289 = G__51919;
count__51290 = G__51920;
i__51291 = G__51921;
continue;
} else {
var item = cljs.core.first(seq__51288__$1);
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","sidebar-collapsed-blocks","ui/sidebar-collapsed-blocks",395046921),item], null),collapsed_QMARK_);


var G__51922 = cljs.core.next(seq__51288__$1);
var G__51923 = null;
var G__51924 = (0);
var G__51925 = (0);
seq__51288 = G__51922;
chunk__51289 = G__51923;
count__51290 = G__51924;
i__51291 = G__51925;
continue;
}
} else {
return null;
}
}
break;
}
});
frontend.state.clear_edit_BANG_ = (function frontend$state$clear_edit_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___51927 = arguments.length;
var i__5877__auto___51928 = (0);
while(true){
if((i__5877__auto___51928 < len__5876__auto___51927)){
args__5882__auto__.push((arguments[i__5877__auto___51928]));

var G__51929 = (i__5877__auto___51928 + (1));
i__5877__auto___51928 = G__51929;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return frontend.state.clear_edit_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(frontend.state.clear_edit_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__51297){
var map__51298 = p__51297;
var map__51298__$1 = cljs.core.__destructure_map(map__51298);
var clear_editing_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51298__$1,new cljs.core.Keyword(null,"clear-editing-block?","clear-editing-block?",901540541),true);
var online_users_51935 = (function (){var G__51299 = frontend.state.get_state(new cljs.core.Keyword("rtc","state","rtc/state",-1988572624));
if((G__51299 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"online-users","online-users",-747563810).cljs$core$IFn$_invoke$arity$1(G__51299);
}
})();
frontend.state.swap_state_BANG_((function (db){
var G__51302 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("editor","action","editor/action",449993861),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","args","editor/args",208005741),null,new cljs.core.Keyword("editor","start-pos","editor/start-pos",-40843537),null,new cljs.core.Keyword("editor","last-saved-cursor","editor/last-saved-cursor",-284040435),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("editor","cursor-range","editor/cursor-range",1691491127),null,new cljs.core.Keyword("ui","select-query-cache","ui/select-query-cache",-103472992),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("editor","block-refs","editor/block-refs",-2016894855),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("editor","action-data","editor/action-data",969703128),null,new cljs.core.Keyword("view","selected-blocks","view/selected-blocks",-92053027),null], 0));
if(cljs.core.truth_(clear_editing_block_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__51302,new cljs.core.Keyword("editor","editing?","editor/editing?",807325417),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","block","editor/block",1699377461),null,new cljs.core.Keyword("editor","content","editor/content",-756190443),cljs.core.PersistentArrayMap.EMPTY], 0));
} else {
return G__51302;
}
}));

if(cljs.core.truth_((function (){var and__5140__auto__ = clear_editing_block_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.coll_QMARK_(online_users_51935)) && ((cljs.core.count(online_users_51935) > (1))));
} else {
return and__5140__auto__;
}
})())){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rtc","presence-update","rtc/presence-update",-419325405),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing-block-uuid","editing-block-uuid",-858399034),null], null)], null));
} else {
}

return null;
}));

(frontend.state.clear_edit_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.state.clear_edit_BANG_.cljs$lang$applyTo = (function (seq51294){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51294));
}));

frontend.state.set_editor_last_pos_BANG_ = (function frontend$state$set_editor_last_pos_BANG_(new_pos){
return frontend.state.update_state_BANG_(new cljs.core.Keyword("editor","last-saved-cursor","editor/last-saved-cursor",-284040435),(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block()),new_pos);
}));
});
frontend.state.get_editor_last_pos = (function frontend$state$get_editor_last_pos(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.get_state(new cljs.core.Keyword("editor","last-saved-cursor","editor/last-saved-cursor",-284040435)),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block()));
});
frontend.state.set_block_content_and_last_pos_BANG_ = (function frontend$state$set_block_content_and_last_pos_BANG_(edit_input_id,content,new_pos){
if(cljs.core.truth_(edit_input_id)){
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$4(edit_input_id,content,true,new_pos);

return frontend.state.set_editor_last_pos_BANG_(new_pos);
} else {
return null;
}
});
frontend.state.set_theme_mode_BANG_ = (function frontend$state$set_theme_mode_BANG_(var_args){
var G__51317 = arguments.length;
switch (G__51317) {
case 1:
return frontend.state.set_theme_mode_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.state.set_theme_mode_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.state.set_theme_mode_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (mode){
return frontend.state.set_theme_mode_BANG_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword("ui","system-theme?","ui/system-theme?",1330390822).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot()));
}));

(frontend.state.set_theme_mode_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (mode,system_theme_QMARK_){
if(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"light")){
frontend.util.set_theme_light();
} else {
frontend.util.set_theme_dark();
}
} else {
}

if(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())){
frontend.mobile.util.set_native_interface_style_BANG_(mode,system_theme_QMARK_);
} else {
}

frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","theme","ui/theme",-1247877132),mode);

return frontend.storage.set(new cljs.core.Keyword("ui","theme","ui/theme",-1247877132),mode);
}));

(frontend.state.set_theme_mode_BANG_.cljs$lang$maxFixedArity = 2);

frontend.state.sync_system_theme_BANG_ = (function frontend$state$sync_system_theme_BANG_(){
if(cljs.core.truth_(new cljs.core.Keyword("ui","system-theme?","ui/system-theme?",1330390822).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot()))){
var system_dark_QMARK_ = window.matchMedia("(prefers-color-scheme: dark)").matches;
frontend.state.set_theme_mode_BANG_.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(system_dark_QMARK_)?"dark":"light"),true);

frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","system-theme?","ui/system-theme?",1330390822),true);

return frontend.storage.set(new cljs.core.Keyword("ui","system-theme?","ui/system-theme?",1330390822),true);
} else {
return null;
}
});
frontend.state.use_theme_mode_BANG_ = (function frontend$state$use_theme_mode_BANG_(theme_mode){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(theme_mode,"system")){
frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","system-theme?","ui/system-theme?",1330390822),true);

frontend.storage.set(new cljs.core.Keyword("ui","system-theme?","ui/system-theme?",1330390822),true);

return frontend.state.sync_system_theme_BANG_();
} else {
frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","system-theme?","ui/system-theme?",1330390822),false);

frontend.storage.set(new cljs.core.Keyword("ui","system-theme?","ui/system-theme?",1330390822),false);

return frontend.state.set_theme_mode_BANG_.cljs$core$IFn$_invoke$arity$2(theme_mode,false);
}
});
frontend.state.toggle_theme = (function frontend$state$toggle_theme(theme){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(theme,"dark")){
return "light";
} else {
return "dark";
}
});
frontend.state.toggle_theme_BANG_ = (function frontend$state$toggle_theme_BANG_(){
return frontend.state.use_theme_mode_BANG_(frontend.state.toggle_theme(new cljs.core.Keyword("ui","theme","ui/theme",-1247877132).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot())));
});
frontend.state.set_custom_theme_BANG_ = (function frontend$state$set_custom_theme_BANG_(var_args){
var G__51336 = arguments.length;
switch (G__51336) {
case 1:
return frontend.state.set_custom_theme_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.state.set_custom_theme_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.state.set_custom_theme_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (custom_theme){
return frontend.state.set_custom_theme_BANG_.cljs$core$IFn$_invoke$arity$2(null,custom_theme);
}));

(frontend.state.set_custom_theme_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (mode,theme){
frontend.state.set_state_BANG_((cljs.core.truth_(mode)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","custom-theme","ui/custom-theme",1944833347),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(mode)], null):new cljs.core.Keyword("ui","custom-theme","ui/custom-theme",1944833347)),theme);

return frontend.storage.set(new cljs.core.Keyword("ui","custom-theme","ui/custom-theme",1944833347),new cljs.core.Keyword("ui","custom-theme","ui/custom-theme",1944833347).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot()));
}));

(frontend.state.set_custom_theme_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Restore mobile theme setting from local storage
 */
frontend.state.restore_mobile_theme_BANG_ = (function frontend$state$restore_mobile_theme_BANG_(){
var mode = (function (){var or__5142__auto__ = frontend.storage.get(new cljs.core.Keyword("ui","theme","ui/theme",-1247877132));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "light";
}
})();
var system_theme_QMARK_ = frontend.storage.get(new cljs.core.Keyword("ui","system-theme?","ui/system-theme?",1330390822));
if(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())){
frontend.mobile.util.set_native_interface_style_BANG_(mode,system_theme_QMARK_);
} else {
}

if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not(system_theme_QMARK_);
if(and__5140__auto__){
return frontend.mobile.util.native_platform_QMARK_();
} else {
return and__5140__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"light")){
return frontend.util.set_theme_light();
} else {
return frontend.util.set_theme_dark();
}
} else {
return null;
}
});
frontend.state.load_app_user_cfgs = (function frontend$state$load_app_user_cfgs(var_args){
var G__51342 = arguments.length;
switch (G__51342) {
case 0:
return frontend.state.load_app_user_cfgs.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.state.load_app_user_cfgs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.state.load_app_user_cfgs.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.state.load_app_user_cfgs.cljs$core$IFn$_invoke$arity$1(false);
}));

(frontend.state.load_app_user_cfgs.cljs$core$IFn$_invoke$arity$1 = (function (refresh_QMARK_){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_((function (){var or__5142__auto__ = refresh_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot()) == null);
}
})())?electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"userAppCfgs","userAppCfgs",-1274935350)], 0)):new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot()))),(function (cfgs){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core.object_QMARK_(cfgs))?cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(cfgs):cfgs)),(function (cfgs__$1){
return promesa.protocols._promise(frontend.state.set_state_BANG_(new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),cfgs__$1));
}));
}));
}));
} else {
return null;
}
}));

(frontend.state.load_app_user_cfgs.cljs$lang$maxFixedArity = 1);

frontend.state.load_electron_app_base_info = (function frontend$state$load_electron_app_base_info(){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"getAppBaseInfo","getAppBaseInfo",-1406218507)], 0))),(function (info){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core.object_QMARK_(info))?cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(info):info)),(function (info__$1){
return promesa.protocols._promise(frontend.state.set_state_BANG_(new cljs.core.Keyword("electron","app-base-info","electron/app-base-info",1025481912),info__$1));
}));
}));
}));
} else {
return null;
}
});
frontend.state.setup_electron_updater_BANG_ = (function frontend$state$setup_electron_updater_BANG_(){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return window.apis.setUpdatesCallback((function (_,args){
var data = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(args);
var pending_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data),"completed");
frontend.state.set_state_BANG_(new cljs.core.Keyword("electron","updater-pending?","electron/updater-pending?",-1675811595),pending_QMARK_);

if(pending_QMARK_){
frontend.state.set_state_BANG_(new cljs.core.Keyword("electron","updater","electron/updater",454456683),data);
} else {
}

return null;
}));
} else {
return null;
}
});
frontend.state.clear_file_component_BANG_ = (function frontend$state$clear_file_component_BANG_(){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","file-component","ui/file-component",-1447074212),null);
});
frontend.state.save_scroll_position_BANG_ = (function frontend$state$save_scroll_position_BANG_(var_args){
var G__51361 = arguments.length;
switch (G__51361) {
case 1:
return frontend.state.save_scroll_position_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.state.save_scroll_position_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.state.save_scroll_position_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (value){
return frontend.state.save_scroll_position_BANG_.cljs$core$IFn$_invoke$arity$2(value,window.location.hash);
}));

(frontend.state.save_scroll_position_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (value,path){
return frontend.state.set_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("ui","paths-scroll-positions","ui/paths-scroll-positions",1953998950),value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908),path], 0));
}));

(frontend.state.save_scroll_position_BANG_.cljs$lang$maxFixedArity = 2);

frontend.state.save_main_container_position_BANG_ = (function frontend$state$save_main_container_position_BANG_(value){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,frontend.state.get_state(new cljs.core.Keyword("ui","main-container-scroll-top","ui/main-container-scroll-top",1193942851)))){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","main-container-scroll-top","ui/main-container-scroll-top",1193942851),value);
} else {
return null;
}
});
frontend.state.get_saved_scroll_position = (function frontend$state$get_saved_scroll_position(var_args){
var G__51366 = arguments.length;
switch (G__51366) {
case 0:
return frontend.state.get_saved_scroll_position.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.state.get_saved_scroll_position.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.state.get_saved_scroll_position.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.state.get_saved_scroll_position.cljs$core$IFn$_invoke$arity$1(window.location.hash);
}));

(frontend.state.get_saved_scroll_position.cljs$core$IFn$_invoke$arity$1 = (function (path){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.state.get_state(new cljs.core.Keyword("ui","paths-scroll-positions","ui/paths-scroll-positions",1953998950)),path,(0));
}));

(frontend.state.get_saved_scroll_position.cljs$lang$maxFixedArity = 1);

frontend.state.set_today_BANG_ = (function frontend$state$set_today_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword(null,"today","today",945271563),value);
});
frontend.state.get_me = (function frontend$state$get_me(){
return new cljs.core.Keyword(null,"me","me",-139006693).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot());
});
frontend.state.set_db_restoring_BANG_ = (function frontend$state$set_db_restoring_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("db","restoring?","db/restoring?",-1653366233),value);
});
frontend.state.dialog_opened_QMARK_ = (function frontend$state$dialog_opened_QMARK_(){
return logseq.shui.dialog.core.has_dialog_QMARK_();
});
frontend.state.close_dialog_BANG_ = (function frontend$state$close_dialog_BANG_(){
return (logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dialog_close_BANG_.call(null));
});
frontend.state.get_left_sidebar_open_QMARK_ = (function frontend$state$get_left_sidebar_open_QMARK_(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.rfx.snapshot(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","left-sidebar-open?","ui/left-sidebar-open?",899579728)], null));
});
frontend.state.set_left_sidebar_open_BANG_ = (function frontend$state$set_left_sidebar_open_BANG_(value){
frontend.storage.set("ls-left-sidebar-open?",cljs.core.boolean$(value));

return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","left-sidebar-open?","ui/left-sidebar-open?",899579728),value);
});
frontend.state.toggle_left_sidebar_BANG_ = (function frontend$state$toggle_left_sidebar_BANG_(){
return frontend.state.set_left_sidebar_open_BANG_(cljs.core.not(frontend.state.get_left_sidebar_open_QMARK_()));
});
frontend.state.set_developer_mode_BANG_ = (function frontend$state$set_developer_mode_BANG_(value){
frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","developer-mode?","ui/developer-mode?",-664501878),value);

return frontend.storage.set("developer-mode",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));
});
frontend.state.developer_mode_QMARK_ = (function frontend$state$developer_mode_QMARK_(){
return new cljs.core.Keyword("ui","developer-mode?","ui/developer-mode?",-664501878).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot());
});
frontend.state.document_mode_QMARK_ = (function frontend$state$document_mode_QMARK_(){
return frontend.state.get_state(new cljs.core.Keyword("document","mode?","document/mode?",-994203479));
});
frontend.state.toggle_document_mode_BANG_ = (function frontend$state$toggle_document_mode_BANG_(){
var mode = frontend.state.document_mode_QMARK_();
frontend.state.set_state_BANG_(new cljs.core.Keyword("document","mode?","document/mode?",-994203479),cljs.core.not(mode));

return frontend.storage.set(new cljs.core.Keyword("document","mode?","document/mode?",-994203479),cljs.core.not(mode));
});
frontend.state.toggle_highlight_recent_blocks_BANG_ = (function frontend$state$toggle_highlight_recent_blocks_BANG_(){
var value = frontend.state.get_state(new cljs.core.Keyword("ui","toggle-highlight-recent-blocks?","ui/toggle-highlight-recent-blocks?",261743188));
return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","toggle-highlight-recent-blocks?","ui/toggle-highlight-recent-blocks?",261743188),cljs.core.not(value));
});
frontend.state.shortcut_tooltip_enabled_QMARK_ = (function frontend$state$shortcut_tooltip_enabled_QMARK_(){
return frontend.state.get_state(new cljs.core.Keyword("ui","shortcut-tooltip?","ui/shortcut-tooltip?",1921963086));
});
frontend.state.toggle_shortcut_tooltip_BANG_ = (function frontend$state$toggle_shortcut_tooltip_BANG_(){
var mode = frontend.state.shortcut_tooltip_enabled_QMARK_();
frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","shortcut-tooltip?","ui/shortcut-tooltip?",1921963086),cljs.core.not(mode));

return frontend.storage.set(new cljs.core.Keyword("ui","shortcut-tooltip?","ui/shortcut-tooltip?",1921963086),cljs.core.not(mode));
});
frontend.state.set_config_BANG_ = (function frontend$state$set_config_BANG_(repo_url,value){
if(cljs.core.truth_(value)){
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),repo_url], null),value);
} else {
return null;
}
});
frontend.state.set_global_config_BANG_ = (function frontend$state$set_global_config_BANG_(value,str_content){
if(cljs.core.truth_(value)){
frontend.state.set_config_BANG_(new cljs.core.Keyword("frontend.state","global-config","frontend.state/global-config",1533356),value);

return frontend.state.set_config_BANG_(new cljs.core.Keyword("frontend.state","global-config-str-content","frontend.state/global-config-str-content",-1141146708),str_content);
} else {
return null;
}
});
frontend.state.get_wide_mode_QMARK_ = (function frontend$state$get_wide_mode_QMARK_(){
return new cljs.core.Keyword("ui","wide-mode?","ui/wide-mode?",-1881882061).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot());
});
frontend.state.toggle_wide_mode_BANG_ = (function frontend$state$toggle_wide_mode_BANG_(){
return frontend.state.update_state_BANG_(new cljs.core.Keyword("ui","wide-mode?","ui/wide-mode?",-1881882061),cljs.core.not);
});
frontend.state.set_online_BANG_ = (function frontend$state$set_online_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("network","online?","network/online?",1306822774),value);
});
frontend.state.get_plugins_slash_commands = (function frontend$state$get_plugins_slash_commands(){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.flatten(cljs.core.vals(new cljs.core.Keyword("plugin","installed-slash-commands","plugin/installed-slash-commands",-58447235).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot())))], 0));
});
frontend.state.get_plugins_commands_with_type = (function frontend$state$get_plugins_commands_with_type(type){
return cljs.core.filterv((function (p1__51391_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__51391_SHARP_)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type));
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(new cljs.core.Keyword("plugin","simple-commands","plugin/simple-commands",234820996).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot()))));
});
frontend.state.get_plugins_ui_items_with_type = (function frontend$state$get_plugins_ui_items_with_type(type){
return cljs.core.filterv((function (p1__51393_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__51393_SHARP_)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type));
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(new cljs.core.Keyword("plugin","installed-ui-items","plugin/installed-ui-items",1418448868).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot()))));
});
frontend.state.get_plugin_resources_with_type = (function frontend$state$get_plugin_resources_with_type(pid,type){
var temp__5825__auto__ = (function (){var and__5140__auto__ = type;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var pid__$1 = temp__5825__auto__;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.rfx.snapshot(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-resources","plugin/installed-resources",-1742961043),pid__$1,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type)], null));
} else {
return null;
}
});
frontend.state.get_plugin_resource = (function frontend$state$get_plugin_resource(pid,type,key){
var temp__5825__auto__ = frontend.state.get_plugin_resources_with_type(pid,type);
if(cljs.core.truth_(temp__5825__auto__)){
var resources = temp__5825__auto__;
var G__51418 = key;
var G__51418__$1 = (((G__51418 == null))?null:cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__51418));
if((G__51418__$1 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(resources,G__51418__$1);
}
} else {
return null;
}
});
frontend.state.upt_plugin_resource = (function frontend$state$upt_plugin_resource(pid,type,key,attr,val){
var temp__5825__auto__ = frontend.state.get_plugin_resource(pid,type,key);
if(cljs.core.truth_(temp__5825__auto__)){
var resource = temp__5825__auto__;
var resource__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(resource,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr),val);
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-resources","plugin/installed-resources",-1742961043),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),key], null),resource__$1);

return resource__$1;
} else {
return null;
}
});
frontend.state.get_plugin_services = (function frontend$state$get_plugin_services(pid,type){
var temp__5825__auto__ = (function (){var and__5140__auto__ = pid;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword("plugin","installed-services","plugin/installed-services",-1672478696).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot());
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var installed = temp__5825__auto__;
var G__51429 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(installed,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid)));
if((G__51429 == null)){
return null;
} else {
return cljs.core.filterv((function (p1__51427_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__51427_SHARP_));
}),G__51429);
}
} else {
return null;
}
});
frontend.state.install_plugin_service = (function frontend$state$install_plugin_service(var_args){
var G__51437 = arguments.length;
switch (G__51437) {
case 3:
return frontend.state.install_plugin_service.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return frontend.state.install_plugin_service.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.state.install_plugin_service.cljs$core$IFn$_invoke$arity$3 = (function (pid,type,name){
return frontend.state.install_plugin_service.cljs$core$IFn$_invoke$arity$4(pid,type,name,null);
}));

(frontend.state.install_plugin_service.cljs$core$IFn$_invoke$arity$4 = (function (pid,type,name,opts){
var temp__5825__auto__ = (function (){var and__5140__auto__ = pid;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = type;
if(cljs.core.truth_(and__5140__auto____$1)){
var and__5140__auto____$2 = name;
if(cljs.core.truth_(and__5140__auto____$2)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
} else {
return and__5140__auto____$2;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var pid__$1 = temp__5825__auto__;
var exists = frontend.state.get_plugin_services(pid__$1,type);
var temp__5825__auto____$1 = (function (){var and__5140__auto__ = ((cljs.core.not(exists)) || (cljs.core.not(cljs.core.some((function (p1__51432_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__51432_SHARP_));
}),exists))));
if(and__5140__auto__){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pid","pid",1018387698),pid__$1,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"opts","opts",155075701),opts], null);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto____$1)){
var service = temp__5825__auto____$1;
frontend.state.update_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-services","plugin/installed-services",-1672478696),pid__$1], null),(function (p1__51433_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(p1__51433_SHARP_),service);
}));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"search","search",1564939822))){
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("search","engines","search/engines",-1270836455),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pid__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name))], null),service);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}));

(frontend.state.install_plugin_service.cljs$lang$maxFixedArity = 4);

frontend.state.uninstall_plugin_service = (function frontend$state$uninstall_plugin_service(pid,type_or_all){
var temp__5825__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
if(cljs.core.truth_(temp__5825__auto__)){
var pid__$1 = temp__5825__auto__;
var temp__5825__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("plugin","installed-services","plugin/installed-services",-1672478696).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot()),pid__$1);
if(cljs.core.truth_(temp__5825__auto____$1)){
var installed = temp__5825__auto____$1;
var remove_all_QMARK_ = ((type_or_all === true) || ((type_or_all == null)));
var remains = ((remove_all_QMARK_)?null:cljs.core.filterv((function (p1__51441_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(type_or_all,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__51441_SHARP_));
}),installed));
var removed = ((remove_all_QMARK_)?installed:cljs.core.filterv((function (p1__51442_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_or_all,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__51442_SHARP_));
}),installed));
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-services","plugin/installed-services",-1672478696),pid__$1], null),remains);

var temp__5825__auto____$2 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51443_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__51443_SHARP_));
}),removed));
if(temp__5825__auto____$2){
var removed_SINGLEQUOTE_ = temp__5825__auto____$2;
return frontend.state.update_state_BANG_(new cljs.core.Keyword("search","engines","search/engines",-1270836455),(function (p1__51444_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,p1__51444_SHARP_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__51449){
var map__51450 = p__51449;
var map__51450__$1 = cljs.core.__destructure_map(map__51450);
var pid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51450__$1,new cljs.core.Keyword(null,"pid","pid",1018387698));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51450__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pid__$2)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
}),removed_SINGLEQUOTE_));
}));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
frontend.state.get_all_plugin_services_with_type = (function frontend$state$get_all_plugin_services_with_type(type){
var temp__5825__auto__ = cljs.core.vals(new cljs.core.Keyword("plugin","installed-services","plugin/installed-services",-1672478696).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot()));
if(cljs.core.truth_(temp__5825__auto__)){
var installed = temp__5825__auto__;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (s){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51452_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__51452_SHARP_));
}),s);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([installed], 0));
} else {
return null;
}
});
frontend.state.get_all_plugin_search_engines = (function frontend$state$get_all_plugin_search_engines(){
return new cljs.core.Keyword("search","engines","search/engines",-1270836455).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot());
});
frontend.state.update_plugin_search_engine = (function frontend$state$update_plugin_search_engine(pid,name,f){
var temp__5825__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
if(cljs.core.truth_(temp__5825__auto__)){
var pid__$1 = temp__5825__auto__;
return frontend.state.set_state_BANG_(new cljs.core.Keyword("search","engines","search/engines",-1270836455),cljs.core.update_vals(frontend.state.get_all_plugin_search_engines(),(function (p1__51453_SHARP_){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pid__$1,new cljs.core.Keyword(null,"pid","pid",1018387698).cljs$core$IFn$_invoke$arity$1(p1__51453_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__51453_SHARP_))))){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__51453_SHARP_) : f.call(null,p1__51453_SHARP_));
} else {
return p1__51453_SHARP_;
}
})));
} else {
return null;
}
});
frontend.state.reset_plugin_search_engines = (function frontend$state$reset_plugin_search_engines(){
var temp__5825__auto__ = frontend.state.get_all_plugin_search_engines();
if(cljs.core.truth_(temp__5825__auto__)){
var engines = temp__5825__auto__;
return frontend.state.set_state_BANG_(new cljs.core.Keyword("search","engines","search/engines",-1270836455),cljs.core.update_vals(engines,(function (p1__51454_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51454_SHARP_,new cljs.core.Keyword(null,"result","result",1415092211),null);
})));
} else {
return null;
}
});
frontend.state.install_plugin_hook = (function frontend$state$install_plugin_hook(var_args){
var G__51456 = arguments.length;
switch (G__51456) {
case 2:
return frontend.state.install_plugin_hook.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.state.install_plugin_hook.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.state.install_plugin_hook.cljs$core$IFn$_invoke$arity$2 = (function (pid,hook){
return frontend.state.install_plugin_hook.cljs$core$IFn$_invoke$arity$3(pid,hook,true);
}));

(frontend.state.install_plugin_hook.cljs$core$IFn$_invoke$arity$3 = (function (pid,hook,opts){
var temp__5825__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
if(cljs.core.truth_(temp__5825__auto__)){
var pid__$1 = temp__5825__auto__;
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-hooks","plugin/installed-hooks",-227057271),hook], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.PersistentArrayMap.EMPTY)(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.rfx.snapshot(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-hooks","plugin/installed-hooks",-227057271),hook], null))),pid__$1,opts));

return true;
} else {
return null;
}
}));

(frontend.state.install_plugin_hook.cljs$lang$maxFixedArity = 3);

frontend.state.uninstall_plugin_hook = (function frontend$state$uninstall_plugin_hook(pid,hook_or_all){
var temp__5825__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
if(cljs.core.truth_(temp__5825__auto__)){
var pid__$1 = temp__5825__auto__;
if((hook_or_all == null)){
frontend.state.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","installed-hooks","plugin/installed-hooks",-227057271),(function (p1__51459_SHARP_){
return cljs.core.update_vals(p1__51459_SHARP_,(function (ids){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ids,pid__$1);
}));
})], 0));
} else {
var temp__5825__auto___52084__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.rfx.snapshot(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-hooks","plugin/installed-hooks",-227057271),hook_or_all], null));
if(cljs.core.truth_(temp__5825__auto___52084__$1)){
var coll_52085 = temp__5825__auto___52084__$1;
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-hooks","plugin/installed-hooks",-227057271),hook_or_all], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(coll_52085,pid__$1));
} else {
}
}

return true;
} else {
return null;
}
});
frontend.state.slot_hook_exist_QMARK_ = (function frontend$state$slot_hook_exist_QMARK_(uuid){
var temp__5825__auto__ = (function (){var and__5140__auto__ = uuid;
if(cljs.core.truth_(and__5140__auto__)){
return clojure.string.replace((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)),"-","_");
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var type = temp__5825__auto__;
var temp__5825__auto____$1 = frontend.state.get_state(new cljs.core.Keyword("plugin","installed-hooks","plugin/installed-hooks",-227057271));
if(cljs.core.truth_(temp__5825__auto____$1)){
var hooks = temp__5825__auto____$1;
return cljs.core.contains_QMARK_(hooks,(""+"hook:editor:slot_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)));
} else {
return null;
}
} else {
return null;
}
});
frontend.state.set_editor_in_composition_BANG_ = (function frontend$state$set_editor_in_composition_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","in-composition?","editor/in-composition?",-259037730),value);
});
frontend.state.editor_in_composition_QMARK_ = (function frontend$state$editor_in_composition_QMARK_(){
return new cljs.core.Keyword("editor","in-composition?","editor/in-composition?",-259037730).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot());
});
frontend.state.set_editor_last_input_time_BANG_ = (function frontend$state$set_editor_last_input_time_BANG_(repo,time){
return frontend.state.set_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("editor","last-input-time","editor/last-input-time",-2008067915),time,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908),repo], 0));
});
frontend.state.input_idle_QMARK_ = (function frontend$state$input_idle_QMARK_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___52087 = arguments.length;
var i__5877__auto___52088 = (0);
while(true){
if((i__5877__auto___52088 < len__5876__auto___52087)){
args__5882__auto__.push((arguments[i__5877__auto___52088]));

var G__52089 = (i__5877__auto___52088 + (1));
i__5877__auto___52088 = G__52089;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.state.input_idle_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.state.input_idle_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (repo,p__51467){
var map__51468 = p__51467;
var map__51468__$1 = cljs.core.__destructure_map(map__51468);
var diff = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51468__$1,new cljs.core.Keyword(null,"diff","diff",2135942783),(1000));
if(cljs.core.truth_(repo)){
var last_input_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.get_state(new cljs.core.Keyword("editor","last-input-time","editor/last-input-time",-2008067915)),repo);
var or__5142__auto__ = (last_input_time == null);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (function (){var now = (frontend.util.time_ms.cljs$core$IFn$_invoke$arity$0 ? frontend.util.time_ms.cljs$core$IFn$_invoke$arity$0() : frontend.util.time_ms.call(null));
return ((now - last_input_time) >= diff);
})();
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
return cljs.core.not(frontend.state.get_edit_input_id());
}
}
} else {
return null;
}
}));

(frontend.state.input_idle_QMARK_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.state.input_idle_QMARK_.cljs$lang$applyTo = (function (seq51465){
var G__51466 = cljs.core.first(seq51465);
var seq51465__$1 = cljs.core.next(seq51465);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51466,seq51465__$1);
}));

frontend.state.set_search_result_BANG_ = (function frontend$state$set_search_result_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("search","result","search/result",443756363),value);
});
frontend.state.clear_search_result_BANG_ = (function frontend$state$clear_search_result_BANG_(){
return frontend.state.set_search_result_BANG_(null);
});
frontend.state.get_search_mode = (function frontend$state$get_search_mode(){
return new cljs.core.Keyword("search","mode","search/mode",1628111395).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot());
});
frontend.state.toggle_BANG_ = (function frontend$state$toggle_BANG_(path){
return frontend.state.update_state_BANG_(path,cljs.core.not);
});
frontend.state.toggle_settings_BANG_ = (function frontend$state$toggle_settings_BANG_(){
return frontend.state.toggle_BANG_(new cljs.core.Keyword("ui","settings-open?","ui/settings-open?",1491870343));
});
frontend.state.close_settings_BANG_ = (function frontend$state$close_settings_BANG_(){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","settings-open?","ui/settings-open?",1491870343),false);
});
frontend.state.open_settings_BANG_ = (function frontend$state$open_settings_BANG_(var_args){
var G__51470 = arguments.length;
switch (G__51470) {
case 0:
return frontend.state.open_settings_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.state.open_settings_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.state.open_settings_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.state.open_settings_BANG_.cljs$core$IFn$_invoke$arity$1(true);
}));

(frontend.state.open_settings_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (active_tab){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","settings-open?","ui/settings-open?",1491870343),active_tab);
}));

(frontend.state.open_settings_BANG_.cljs$lang$maxFixedArity = 1);

frontend.state.sidebar_add_block_BANG_ = (function frontend$state$sidebar_add_block_BANG_(repo,db_id,block_type){
if((!(frontend.util.sm_breakpoint_QMARK_()))){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = repo;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),block_type)) && (typeof db_id === 'number'));
} else {
return and__5140__auto__;
}
})())?frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("logseq.property","hide?","logseq.property/hide?",68365746),new cljs.core.Keyword("logseq.property","deleted-at","logseq.property/deleted-at",685213751),new cljs.core.Keyword("logseq.property","built-in?","logseq.property/built-in?",-1125958160),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("logseq.property","hide?","logseq.property/hide?",68365746),new cljs.core.Keyword("logseq.property","deleted-at","logseq.property/deleted-at",685213751)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096)], null)], null)], null),db_id], 0)):null)),(function (page){
return promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = page;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = cljs.core.not(goog.DEBUG);
if(and__5140__auto____$1){
var and__5140__auto____$2 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(logseq.common.config.recycle_page_name,new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page));
if(and__5140__auto____$2){
var or__5142__auto__ = (function (){var and__5140__auto____$3 = (logseq.db.hidden_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.hidden_QMARK_.cljs$core$IFn$_invoke$arity$1(page) : logseq.db.hidden_QMARK_.call(null,page));
if(cljs.core.truth_(and__5140__auto____$3)){
return cljs.core.not(frontend.util.entity.property_QMARK_(page));
} else {
return and__5140__auto____$3;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto____$3 = (logseq.db.built_in_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.built_in_QMARK_.cljs$core$IFn$_invoke$arity$1(page) : logseq.db.built_in_QMARK_.call(null,page));
if(cljs.core.truth_(and__5140__auto____$3)){
return (logseq.db.private_built_in_page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.private_built_in_page_QMARK_.cljs$core$IFn$_invoke$arity$1(page) : logseq.db.private_built_in_page_QMARK_.call(null,page));
} else {
return and__5140__auto____$3;
}
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
})())?frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("notification","show","notification/show",1864741804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",15833224),"Cannot open an internal page.",new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"warning","warning",-1685650671)], null)], null)):(cljs.core.truth_(db_id)?(function (){
frontend.state.update_state_BANG_(new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475),(function (blocks){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,db_id,block_type], null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__51471_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__51471_SHARP_),db_id);
}),blocks)));
}));

frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","sidebar-collapsed-blocks","ui/sidebar-collapsed-blocks",395046921),db_id], null),false);

frontend.state.open_right_sidebar_BANG_();

var temp__5825__auto__ = goog.dom.getElementByClass("sidebar-item-list");
if(cljs.core.truth_(temp__5825__auto__)){
var elem = temp__5825__auto__;
return frontend.util.scroll_to.cljs$core$IFn$_invoke$arity$2(elem,(0));
} else {
return null;
}
})()
:null)));
}));
}));
} else {
return null;
}
});
frontend.state.get_export_block_text_indent_style = (function frontend$state$get_export_block_text_indent_style(){
return frontend.state.normalize_export_block_text_indent_style(new cljs.core.Keyword("copy","export-block-text-indent-style","copy/export-block-text-indent-style",1531384180).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot()));
});
frontend.state.set_export_block_text_indent_style_BANG_ = (function frontend$state$set_export_block_text_indent_style_BANG_(v){
var v_STAR_ = frontend.state.normalize_export_block_text_indent_style(v);
frontend.state.set_state_BANG_(new cljs.core.Keyword("copy","export-block-text-indent-style","copy/export-block-text-indent-style",1531384180),v_STAR_);

return frontend.storage.set(new cljs.core.Keyword("copy","export-block-text-indent-style","copy/export-block-text-indent-style",1531384180),v_STAR_);
});
frontend.state.get_recent_pages = (function frontend$state$get_recent_pages(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.rfx.snapshot(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","recent-pages","ui/recent-pages",1527475247),frontend.state.get_current_repo()], null));
});
frontend.state.set_recent_pages_BANG_ = (function frontend$state$set_recent_pages_BANG_(v){
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","recent-pages","ui/recent-pages",1527475247),frontend.state.get_current_repo()], null),v);

return frontend.storage.set(new cljs.core.Keyword("ui","recent-pages","ui/recent-pages",1527475247),new cljs.core.Keyword("ui","recent-pages","ui/recent-pages",1527475247).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot()));
});
frontend.state.remove_pages_from_recent_BANG_ = (function frontend$state$remove_pages_from_recent_BANG_(page_ids){
if(cljs.core.seq(page_ids)){
var page_ids__$1 = cljs.core.set(page_ids);
var recent_pages = frontend.state.get_recent_pages();
var remaining_pages = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(page_ids__$1,recent_pages));
if(((cljs.core.seq(recent_pages)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(recent_pages,remaining_pages)))){
return frontend.state.set_recent_pages_BANG_(remaining_pages);
} else {
return null;
}
} else {
return null;
}
});
frontend.state.get_export_block_text_remove_options = (function frontend$state$get_export_block_text_remove_options(){
return new cljs.core.Keyword("copy","export-block-text-remove-options","copy/export-block-text-remove-options",-1213505869).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot());
});
frontend.state.update_export_block_text_remove_options_BANG_ = (function frontend$state$update_export_block_text_remove_options_BANG_(e,k){
var f = (cljs.core.truth_(frontend.util.echecked_QMARK_(e))?cljs.core.conj:cljs.core.disj);
frontend.state.update_state_BANG_(new cljs.core.Keyword("copy","export-block-text-remove-options","copy/export-block-text-remove-options",-1213505869),(function (p1__51472_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__51472_SHARP_,k) : f.call(null,p1__51472_SHARP_,k));
}));

return frontend.storage.set(new cljs.core.Keyword("copy","export-block-text-remove-options","copy/export-block-text-remove-options",-1213505869),frontend.state.get_export_block_text_remove_options());
});
frontend.state.get_export_block_text_other_options = (function frontend$state$get_export_block_text_other_options(){
return new cljs.core.Keyword("copy","export-block-text-other-options","copy/export-block-text-other-options",1053932178).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot());
});
frontend.state.update_export_block_text_other_options_BANG_ = (function frontend$state$update_export_block_text_other_options_BANG_(k,v){
return frontend.state.update_state_BANG_(new cljs.core.Keyword("copy","export-block-text-other-options","copy/export-block-text-other-options",1053932178),(function (p1__51473_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51473_SHARP_,k,v);
}));
});
frontend.state.set_editor_args_BANG_ = (function frontend$state$set_editor_args_BANG_(args){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","args","editor/args",208005741),args);
});
frontend.state.block_component_editing_QMARK_ = (function frontend$state$block_component_editing_QMARK_(){
return new cljs.core.Keyword("block","component-editing-mode?","block/component-editing-mode?",-1744931560).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot());
});
frontend.state.set_block_component_editing_mode_BANG_ = (function frontend$state$set_block_component_editing_mode_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("block","component-editing-mode?","block/component-editing-mode?",-1744931560),value);
});
frontend.state.get_editor_args = (function frontend$state$get_editor_args(){
return frontend.state.get_state(new cljs.core.Keyword("editor","args","editor/args",208005741));
});
frontend.state.get_editor_block_container = (function frontend$state$get_editor_block_container(){
var G__51477 = frontend.state.get_edit_input_id();
var G__51477__$1 = (((G__51477 == null))?null:goog.dom.getElement(G__51477));
if((G__51477__$1 == null)){
return null;
} else {
return frontend.util.rec_get_node(G__51477__$1,"ls-block");
}
});
frontend.state.set_page_blocks_cp_BANG_ = (function frontend$state$set_page_blocks_cp_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view","components","view/components",-1071666675),new cljs.core.Keyword(null,"page-blocks","page-blocks",1869088690)], null),value);
});
frontend.state.get_page_blocks_cp = (function frontend$state$get_page_blocks_cp(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.rfx.snapshot(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view","components","view/components",-1071666675),new cljs.core.Keyword(null,"page-blocks","page-blocks",1869088690)], null));
});
frontend.state.set_component_BANG_ = (function frontend$state$set_component_BANG_(k,value){
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view","components","view/components",-1071666675),k], null),value);
});
frontend.state.get_component = (function frontend$state$get_component(k){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.rfx.snapshot(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view","components","view/components",-1071666675),k], null));
});
frontend.state.exit_editing_and_set_selected_blocks_BANG_ = (function frontend$state$exit_editing_and_set_selected_blocks_BANG_(var_args){
var G__51479 = arguments.length;
switch (G__51479) {
case 1:
return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (blocks){
return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$2(blocks,null);
}));

(frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (blocks,direction){
frontend.state.clear_edit_BANG_();

return frontend.state.set_selection_blocks_BANG_.cljs$core$IFn$_invoke$arity$2(blocks,direction);
}));

(frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$lang$maxFixedArity = 2);

frontend.state.set_editing_BANG_ = (function frontend$state$set_editing_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___52107 = arguments.length;
var i__5877__auto___52109 = (0);
while(true){
if((i__5877__auto___52109 < len__5876__auto___52107)){
args__5882__auto__.push((arguments[i__5877__auto___52109]));

var G__52112 = (i__5877__auto___52109 + (1));
i__5877__auto___52109 = G__52112;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((4) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((4)),(0),null)):null);
return frontend.state.set_editing_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5883__auto__);
});

(frontend.state.set_editing_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (edit_input_id,content,block,cursor_range,p__51485){
var map__51486 = p__51485;
var map__51486__$1 = cljs.core.__destructure_map(map__51486);
var move_cursor_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51486__$1,new cljs.core.Keyword(null,"move-cursor?","move-cursor?",-229137728),true);
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51486__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var property_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51486__$1,new cljs.core.Keyword(null,"property-block","property-block",2113998707));
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51486__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51486__$1,new cljs.core.Keyword(null,"event","event",301435442));
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51486__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
frontend.state.clear_editor_action_if_switching_block_BANG_(block);

if((typeof process !== 'undefined')){
return null;
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = edit_input_id;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = block;
if(cljs.core.truth_(and__5140__auto____$1)){
var or__5142__auto__ = frontend.state.publishing_enable_editing_QMARK_();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (!(logseq.common.config.PUBLISHING));
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
var block_element = goog.dom.getElement(clojure.string.replace(edit_input_id,"edit-block","ls-block"));
var container = frontend.util.get_block_container(block_element);
var block__$1 = (cljs.core.truth_(container)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block.temp","container","block.temp/container",-493626206),frontend.state.goog$module$goog$object.get(container,"id")):block);
var block__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block__$1,new cljs.core.Keyword("block.editing","direction","block.editing/direction",-1821464148),direction,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.editing","event","block.editing/event",-649798439),event,new cljs.core.Keyword("block.editing","pos","block.editing/pos",-1255653791),pos], 0));
var content__$1 = clojure.string.trim((function (){var or__5142__auto__ = content;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})());
var block_id = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block__$2);
var editing_block_id = (cljs.core.truth_(property_block)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [container_id,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(property_block),block_id], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [container_id,block_id], null));
var native_platform_QMARK_ = frontend.mobile.util.native_platform_QMARK_();
if(cljs.core.truth_((function (){var and__5140__auto__ = container_id;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block__$2);
} else {
return and__5140__auto__;
}
})())){
} else {
throw (new Error((""+"Assert failed: "+"container-id or block uuid is missing"+"\n"+"(and container-id (:block/uuid block))")));
}

frontend.state.swap_state_BANG_((function (db){
var G__51487 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("editor","block-refs","editor/block-refs",-2016894855),cljs.core.PersistentHashSet.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","block","editor/block",1699377461),block__$2,new cljs.core.Keyword("editor","editing?","editor/editing?",807325417),cljs.core.PersistentArrayMap.createAsIfByAssoc([editing_block_id,true]),new cljs.core.Keyword("editor","container-id","editor/container-id",1915616583),container_id,new cljs.core.Keyword("editor","last-key-code","editor/last-key-code",607982236),null,new cljs.core.Keyword("editor","set-timestamp-block","editor/set-timestamp-block",1136443872),null,new cljs.core.Keyword("editor","cursor-range","editor/cursor-range",1691491127),cursor_range], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","content","editor/content",-756190443),block_id], null),content__$1);
if(cljs.core.truth_(native_platform_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51487,new cljs.core.Keyword("mobile","show-action-bar?","mobile/show-action-bar?",-1280463440),false);
} else {
return G__51487;
}
}));

var online_users_52115 = (function (){var G__51488 = frontend.state.get_state(new cljs.core.Keyword("rtc","state","rtc/state",-1988572624));
if((G__51488 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"online-users","online-users",-747563810).cljs$core$IFn$_invoke$arity$1(G__51488);
}
})();
if(((cljs.core.coll_QMARK_(online_users_52115)) && ((cljs.core.count(online_users_52115) > (1))))){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rtc","presence-update","rtc/presence-update",-419325405),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing-block-uuid","editing-block-uuid",-858399034),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id))], null)], null));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword("logseq.property.node","display-type","logseq.property.node/display-type",442446189).cljs$core$IFn$_invoke$arity$1(block__$2))){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","focus-code-editor","editor/focus-code-editor",-682196012),block__$2,block_element], null));
} else {
}

var temp__5825__auto__ = goog.dom.getElement(edit_input_id);
if(cljs.core.truth_(temp__5825__auto__)){
var input = temp__5825__auto__;
var pos__$1 = cljs.core.count(cursor_range);
if(cljs.core.truth_(content__$1)){
frontend.util.set_change_value.cljs$core$IFn$_invoke$arity$2(input,content__$1);
} else {
}

if(cljs.core.truth_((function (){var and__5140__auto__ = move_cursor_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(frontend.state.block_component_editing_QMARK_());
} else {
return and__5140__auto__;
}
})())){
return frontend.util.cursor.move_cursor_to.cljs$core$IFn$_invoke$arity$2(input,pos__$1);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}
}));

(frontend.state.set_editing_BANG_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(frontend.state.set_editing_BANG_.cljs$lang$applyTo = (function (seq51480){
var G__51481 = cljs.core.first(seq51480);
var seq51480__$1 = cljs.core.next(seq51480);
var G__51482 = cljs.core.first(seq51480__$1);
var seq51480__$2 = cljs.core.next(seq51480__$1);
var G__51483 = cljs.core.first(seq51480__$2);
var seq51480__$3 = cljs.core.next(seq51480__$2);
var G__51484 = cljs.core.first(seq51480__$3);
var seq51480__$4 = cljs.core.next(seq51480__$3);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51481,G__51482,G__51483,G__51484,seq51480__$4);
}));

frontend.state.set_last_key_code_BANG_ = (function frontend$state$set_last_key_code_BANG_(key_code){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","last-key-code","editor/last-key-code",607982236),key_code);
});
frontend.state.set_ui_last_key_code_BANG_ = (function frontend$state$set_ui_last_key_code_BANG_(key_code){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","global-last-key-code","ui/global-last-key-code",-1972103495),key_code);
});
frontend.state.get_ui_last_key_code = (function frontend$state$get_ui_last_key_code(){
return frontend.state.get_state(new cljs.core.Keyword("ui","global-last-key-code","ui/global-last-key-code",-1972103495));
});
frontend.state.set_block_op_type_BANG_ = (function frontend$state$set_block_op_type_BANG_(op_type){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","block-op-type","editor/block-op-type",1578820069),op_type);
});
frontend.state.get_block_op_type = (function frontend$state$get_block_op_type(){
return new cljs.core.Keyword("editor","block-op-type","editor/block-op-type",1578820069).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot());
});
frontend.state.feature_http_server_enabled_QMARK_ = (function frontend$state$feature_http_server_enabled_QMARK_(){
return cljs.core.boolean$(frontend.storage.get(new cljs.core.Keyword("frontend.spec.storage","http-server-enabled","frontend.spec.storage/http-server-enabled",-1753032348)));
});
frontend.state.get_plugin_by_id = (function frontend$state$get_plugin_by_id(id){
var temp__5825__auto__ = (function (){var and__5140__auto__ = id;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(id);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var id__$1 = temp__5825__auto__;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.rfx.snapshot(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034),id__$1], null));
} else {
return null;
}
});
frontend.state.get_enabled_QMARK__installed_plugins = (function frontend$state$get_enabled_QMARK__installed_plugins(var_args){
var G__51500 = arguments.length;
switch (G__51500) {
case 1:
return frontend.state.get_enabled_QMARK__installed_plugins.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return frontend.state.get_enabled_QMARK__installed_plugins.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.state.get_enabled_QMARK__installed_plugins.cljs$core$IFn$_invoke$arity$1 = (function (theme_QMARK_){
return frontend.state.get_enabled_QMARK__installed_plugins.cljs$core$IFn$_invoke$arity$4(theme_QMARK_,true,false,false);
}));

(frontend.state.get_enabled_QMARK__installed_plugins.cljs$core$IFn$_invoke$arity$4 = (function (theme_QMARK_,enabled_QMARK_,include_unpacked_QMARK_,include_all_QMARK_){
return cljs.core.filterv((function (p1__51498_SHARP_){
var and__5140__auto__ = (cljs.core.truth_(include_unpacked_QMARK_)?true:(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"webMode","webMode",-1168030481).cljs$core$IFn$_invoke$arity$1(p1__51498_SHARP_);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"iir","iir",-231680811).cljs$core$IFn$_invoke$arity$1(p1__51498_SHARP_);
}
})());
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = (((!(cljs.core.boolean_QMARK_(enabled_QMARK_))))?true:cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.not(enabled_QMARK_),cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__51498_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"disabled","disabled",-1529784218)], null)))));
if(and__5140__auto____$1){
var or__5142__auto__ = include_all_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.boolean_QMARK_(theme_QMARK_)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$(theme_QMARK_),new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(p1__51498_SHARP_));
} else {
return true;
}
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}),cljs.core.vals(new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot())));
}));

(frontend.state.get_enabled_QMARK__installed_plugins.cljs$lang$maxFixedArity = 4);

frontend.state.lsp_enabled_QMARK__or_theme = (function frontend$state$lsp_enabled_QMARK__or_theme(){
return new cljs.core.Keyword("plugin","enabled","plugin/enabled",-2065640529).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot());
});
frontend.state.lsp_enabled_QMARK_ = frontend.state.lsp_enabled_QMARK__or_theme();
frontend.state.consume_updates_from_coming_plugin_BANG_ = (function frontend$state$consume_updates_from_coming_plugin_BANG_(payload,updated_QMARK_){
var temp__5825__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(payload));
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
var prev_pending_QMARK_ = cljs.core.boolean$(cljs.core.seq(new cljs.core.Keyword("plugin","updates-pending","plugin/updates-pending",-1190878256).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot())));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Updates: consumed pending - ",id], 0));

frontend.state.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","updates-pending","plugin/updates-pending",-1190878256),cljs.core.dissoc,id], 0));

if(cljs.core.truth_(updated_QMARK_)){
var temp__5823__auto___52124 = new cljs.core.Keyword(null,"error-code","error-code",180497232).cljs$core$IFn$_invoke$arity$1(payload);
if(cljs.core.truth_(temp__5823__auto___52124)){
var error_52125 = temp__5823__auto___52124;
frontend.state.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","updates-coming","plugin/updates-coming",104160263),id], null),cljs.core.assoc,new cljs.core.Keyword(null,"error-code","error-code",180497232),error_52125], 0));
} else {
frontend.state.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","updates-coming","plugin/updates-coming",104160263),cljs.core.dissoc,id], 0));
}
} else {
frontend.state.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","updates-coming","plugin/updates-coming",104160263),cljs.core.assoc,id,payload], 0));
}

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","consume-updates","plugin/consume-updates",-331798674),id,prev_pending_QMARK_,updated_QMARK_], null));
} else {
return null;
}
});
frontend.state.coming_update_new_version_QMARK_ = (function frontend$state$coming_update_new_version_QMARK_(pkg){
var and__5140__auto__ = pkg;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"latest-version","latest-version",-1985110248).cljs$core$IFn$_invoke$arity$1(pkg);
} else {
return and__5140__auto__;
}
});
frontend.state.plugin_update_available_QMARK_ = (function frontend$state$plugin_update_available_QMARK_(id){
var temp__5825__auto__ = (function (){var and__5140__auto__ = id;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("plugin","updates-coming","plugin/updates-coming",104160263).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot()),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(id));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var pkg = temp__5825__auto__;
return frontend.state.coming_update_new_version_QMARK_(pkg);
} else {
return null;
}
});
frontend.state.all_available_coming_updates = (function frontend$state$all_available_coming_updates(var_args){
var G__51510 = arguments.length;
switch (G__51510) {
case 0:
return frontend.state.all_available_coming_updates.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.state.all_available_coming_updates.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.state.all_available_coming_updates.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.state.all_available_coming_updates.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("plugin","updates-coming","plugin/updates-coming",104160263).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot()));
}));

(frontend.state.all_available_coming_updates.cljs$core$IFn$_invoke$arity$1 = (function (updates){
var temp__5825__auto__ = cljs.core.vals(updates);
if(cljs.core.truth_(temp__5825__auto__)){
var updates__$1 = temp__5825__auto__;
return cljs.core.filterv((function (p1__51508_SHARP_){
return frontend.state.coming_update_new_version_QMARK_(p1__51508_SHARP_);
}),updates__$1);
} else {
return null;
}
}));

(frontend.state.all_available_coming_updates.cljs$lang$maxFixedArity = 1);

frontend.state.get_next_selected_coming_update = (function frontend$state$get_next_selected_coming_update(){
var temp__5825__auto__ = frontend.state.all_available_coming_updates.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(temp__5825__auto__)){
var updates = temp__5825__auto__;
var unchecked = new cljs.core.Keyword("plugin","updates-unchecked","plugin/updates-unchecked",723985111).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot());
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51513_SHARP_){
return (((!(((cljs.core.seq(unchecked)) && (cljs.core.contains_QMARK_(unchecked,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__51513_SHARP_))))))) && (cljs.core.not(new cljs.core.Keyword(null,"error-code","error-code",180497232).cljs$core$IFn$_invoke$arity$1(p1__51513_SHARP_))));
}),updates));
} else {
return null;
}
});
frontend.state.set_unchecked_update = (function frontend$state$set_unchecked_update(id,unchecked_QMARK_){
return frontend.state.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","updates-unchecked","plugin/updates-unchecked",723985111),(cljs.core.truth_(unchecked_QMARK_)?cljs.core.conj:cljs.core.disj),id], 0));
});
frontend.state.reset_unchecked_update = (function frontend$state$reset_unchecked_update(){
return frontend.state.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","updates-unchecked","plugin/updates-unchecked",723985111),cljs.core.PersistentHashSet.EMPTY], 0));
});
frontend.state.reset_all_updates_state = (function frontend$state$reset_all_updates_state(){
return frontend.state.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","updates-auto-checking?","plugin/updates-auto-checking?",1617323181),false,new cljs.core.Keyword("plugin","updates-pending","plugin/updates-pending",-1190878256),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("plugin","updates-coming","plugin/updates-coming",104160263),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("plugin","updates-downloading?","plugin/updates-downloading?",1294108608),false], 0));
});
frontend.state.use_right_sidebar_blocks = (function frontend$state$use_right_sidebar_blocks(){
var current_repo = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("git","current-repo","git/current-repo",107438825)], null));
var blocks = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475)], null));
if(cljs.core.truth_(current_repo)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51515_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__51515_SHARP_),current_repo);
}),blocks);
} else {
return null;
}
});
frontend.state.get_current_editor_container_id = (function frontend$state$get_current_editor_container_id(){
return frontend.state.get_state(new cljs.core.Keyword("editor","container-id","editor/container-id",1915616583));
});
frontend.state.resolve_container_id = (function frontend$state$resolve_container_id(container_id){
var or__5142__auto__ = container_id;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = frontend.state.get_current_editor_container_id();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword(null,"unknown-container","unknown-container",1739831473);
}
}
});
frontend.state.toggle_collapsed_block_BANG_ = (function frontend$state$toggle_collapsed_block_BANG_(var_args){
var G__51521 = arguments.length;
switch (G__51521) {
case 1:
return frontend.state.toggle_collapsed_block_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.state.toggle_collapsed_block_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.state.toggle_collapsed_block_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (block_id){
return frontend.state.toggle_collapsed_block_BANG_.cljs$core$IFn$_invoke$arity$2(block_id,null);
}));

(frontend.state.toggle_collapsed_block_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (block_id,container_id){
var current_repo = frontend.state.get_current_repo();
var container_id__$1 = frontend.state.resolve_container_id(container_id);
return frontend.state.update_state_BANG_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","collapsed-blocks","ui/collapsed-blocks",-968043167),current_repo,container_id__$1,block_id], null),cljs.core.not);
}));

(frontend.state.toggle_collapsed_block_BANG_.cljs$lang$maxFixedArity = 2);

frontend.state.set_collapsed_block_BANG_ = (function frontend$state$set_collapsed_block_BANG_(var_args){
var G__51524 = arguments.length;
switch (G__51524) {
case 2:
return frontend.state.set_collapsed_block_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.state.set_collapsed_block_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.state.set_collapsed_block_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (block_id,value){
return frontend.state.set_collapsed_block_BANG_.cljs$core$IFn$_invoke$arity$3(block_id,value,null);
}));

(frontend.state.set_collapsed_block_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (block_id,value,container_id){
var current_repo = frontend.state.get_current_repo();
var container_id__$1 = frontend.state.resolve_container_id(container_id);
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","collapsed-blocks","ui/collapsed-blocks",-968043167),current_repo,container_id__$1,block_id], null),value);
}));

(frontend.state.set_collapsed_block_BANG_.cljs$lang$maxFixedArity = 3);

frontend.state.get_block_collapsed = (function frontend$state$get_block_collapsed(var_args){
var G__51530 = arguments.length;
switch (G__51530) {
case 1:
return frontend.state.get_block_collapsed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.state.get_block_collapsed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.state.get_block_collapsed.cljs$core$IFn$_invoke$arity$1 = (function (block_id){
return frontend.state.get_block_collapsed.cljs$core$IFn$_invoke$arity$2(block_id,null);
}));

(frontend.state.get_block_collapsed.cljs$core$IFn$_invoke$arity$2 = (function (block_id,container_id){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.rfx.snapshot(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","collapsed-blocks","ui/collapsed-blocks",-968043167),frontend.state.get_current_repo(),frontend.state.resolve_container_id(container_id),block_id], null));
}));

(frontend.state.get_block_collapsed.cljs$lang$maxFixedArity = 2);

frontend.state.get_dialog_id = (function frontend$state$get_dialog_id(){
return logseq.shui.dialog.core.get_last_dialog_id();
});
frontend.state.set_auth_id_token = (function frontend$state$set_auth_id_token(id_token){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("auth","id-token","auth/id-token",-332149946),id_token);
});
frontend.state.set_auth_refresh_token = (function frontend$state$set_auth_refresh_token(refresh_token){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("auth","refresh-token","auth/refresh-token",-1024820760),refresh_token);
});
frontend.state.set_auth_access_token = (function frontend$state$set_auth_access_token(access_token){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("auth","access-token","auth/access-token",-657486615),access_token);
});
frontend.state.get_auth_id_token = (function frontend$state$get_auth_id_token(){
return frontend.state.get_state(new cljs.core.Keyword("auth","id-token","auth/id-token",-332149946));
});
frontend.state.get_auth_refresh_token = (function frontend$state$get_auth_refresh_token(){
return new cljs.core.Keyword("auth","refresh-token","auth/refresh-token",-1024820760).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot());
});
frontend.state.http_proxy_enabled_or_val_QMARK_ = (function frontend$state$http_proxy_enabled_or_val_QMARK_(){
var temp__5825__auto__ = frontend.state.get_state(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("settings","agent","settings/agent",2144439922)], null));
if(cljs.core.truth_(temp__5825__auto__)){
var map__51540 = temp__5825__auto__;
var map__51540__$1 = cljs.core.__destructure_map(map__51540);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51540__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51540__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51540__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51540__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var proxy_type = (function (){var or__5142__auto__ = type;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return protocol;
}
})();
if(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["http",null,"socks5",null], null), null),proxy_type)) && (cljs.core.every_QMARK_(cljs.core.not_empty,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [proxy_type,host,port], null))))){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(proxy_type)+"://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(host)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(port));
} else {
return null;
}
} else {
return null;
}
});
frontend.state.get_current_pdf = (function frontend$state$get_current_pdf(){
return new cljs.core.Keyword("pdf","current","pdf/current",-1087936477).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot());
});
frontend.state.set_current_pdf_BANG_ = (function frontend$state$set_current_pdf_BANG_(inflated_file){
var settle_file_BANG_ = (function (){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","current","pdf/current",-1087936477),inflated_file);
});
if(cljs.core.not(frontend.state.get_current_pdf())){
return settle_file_BANG_();
} else {
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identity","identity",1647396035),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inflated_file,frontend.state.get_current_pdf()], null))))){
frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","current","pdf/current",-1087936477),null);

return setTimeout((function (){
return settle_file_BANG_();
}),(16));
} else {
return null;
}
}
});
frontend.state.set_user_info_BANG_ = (function frontend$state$set_user_info_BANG_(info){
if(cljs.core.truth_(info)){
frontend.state.set_state_BANG_(new cljs.core.Keyword("user","info","user/info",-345834271),info);

var groups = new cljs.core.Keyword(null,"UserGroups","UserGroups",1693861388).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.seq(groups)){
return frontend.storage.set(new cljs.core.Keyword(null,"user-groups","user-groups",-1264926454),groups);
} else {
return null;
}
} else {
return null;
}
});
frontend.state.clear_user_info_BANG_ = (function frontend$state$clear_user_info_BANG_(){
return frontend.storage.remove(new cljs.core.Keyword(null,"user-groups","user-groups",-1264926454));
});
frontend.state.set_color_accent_BANG_ = (function frontend$state$set_color_accent_BANG_(color){
frontend.state.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","radix-color","ui/radix-color",1454689984),color], 0));

return frontend.storage.set(new cljs.core.Keyword("ui","radix-color","ui/radix-color",1454689984),color);
});
frontend.state.set_editor_font_BANG_ = (function frontend$state$set_editor_font_BANG_(config){
var config_SINGLEQUOTE_ = new cljs.core.Keyword("ui","editor-font","ui/editor-font",582019775).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot());
var config__$1 = ((cljs.core.map_QMARK_(config_SINGLEQUOTE_))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config_SINGLEQUOTE_,config], 0)):cljs.core.PersistentArrayMap.EMPTY);
frontend.state.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","editor-font","ui/editor-font",582019775),config__$1], 0));

return frontend.storage.set(new cljs.core.Keyword("ui","editor-font","ui/editor-font",582019775),config__$1);
});
frontend.state.handbook_open_QMARK_ = (function frontend$state$handbook_open_QMARK_(){
return new cljs.core.Keyword("ui","handbooks-open?","ui/handbooks-open?",1677401058).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot());
});
frontend.state.get_handbook_route_chan = (function frontend$state$get_handbook_route_chan(){
return new cljs.core.Keyword("handbook","route-chan","handbook/route-chan",1649058330).cljs$core$IFn$_invoke$arity$1(frontend.rfx.snapshot());
});
frontend.state.open_handbook_pane_BANG_ = (function frontend$state$open_handbook_pane_BANG_(k){
if(cljs.core.truth_(frontend.state.handbook_open_QMARK_())){
} else {
frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","handbooks-open?","ui/handbooks-open?",1677401058),true);
}

return setTimeout((function (){
var c__29891__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29892__auto__ = (function (){var switch__29702__auto__ = (function (state_51554){
var state_val_51555 = (state_51554[(1)]);
if((state_val_51555 === (1))){
var inst_51550 = frontend.state.get_handbook_route_chan();
var state_51554__$1 = state_51554;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51554__$1,(2),inst_51550,k);
} else {
if((state_val_51555 === (2))){
var inst_51552 = (state_51554[(2)]);
var state_51554__$1 = state_51554;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51554__$1,inst_51552);
} else {
return null;
}
}
});
return (function() {
var frontend$state$open_handbook_pane_BANG__$_state_machine__29703__auto__ = null;
var frontend$state$open_handbook_pane_BANG__$_state_machine__29703__auto____0 = (function (){
var statearr_51556 = [null,null,null,null,null,null,null];
(statearr_51556[(0)] = frontend$state$open_handbook_pane_BANG__$_state_machine__29703__auto__);

(statearr_51556[(1)] = (1));

return statearr_51556;
});
var frontend$state$open_handbook_pane_BANG__$_state_machine__29703__auto____1 = (function (state_51554){
while(true){
var ret_value__29704__auto__ = (function (){try{while(true){
var result__29705__auto__ = switch__29702__auto__(state_51554);
if(cljs.core.keyword_identical_QMARK_(result__29705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29705__auto__;
}
break;
}
}catch (e51557){var ex__29706__auto__ = e51557;
var statearr_51558_52144 = state_51554;
(statearr_51558_52144[(2)] = ex__29706__auto__);


if(cljs.core.seq((state_51554[(4)]))){
var statearr_51559_52145 = state_51554;
(statearr_51559_52145[(1)] = cljs.core.first((state_51554[(4)])));

} else {
throw ex__29706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52146 = state_51554;
state_51554 = G__52146;
continue;
} else {
return ret_value__29704__auto__;
}
break;
}
});
frontend$state$open_handbook_pane_BANG__$_state_machine__29703__auto__ = function(state_51554){
switch(arguments.length){
case 0:
return frontend$state$open_handbook_pane_BANG__$_state_machine__29703__auto____0.call(this);
case 1:
return frontend$state$open_handbook_pane_BANG__$_state_machine__29703__auto____1.call(this,state_51554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$state$open_handbook_pane_BANG__$_state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$state$open_handbook_pane_BANG__$_state_machine__29703__auto____0;
frontend$state$open_handbook_pane_BANG__$_state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$state$open_handbook_pane_BANG__$_state_machine__29703__auto____1;
return frontend$state$open_handbook_pane_BANG__$_state_machine__29703__auto__;
})()
})();
var state__29893__auto__ = (function (){var statearr_51560 = f__29892__auto__();
(statearr_51560[(6)] = c__29891__auto__);

return statearr_51560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29893__auto__);
}));

return c__29891__auto__;
}));
});
frontend.state.update_favorites_updated_BANG_ = (function frontend$state$update_favorites_updated_BANG_(){
return frontend.state.update_state_BANG_(new cljs.core.Keyword("favorites","updated?","favorites/updated?",-1904365701),cljs.core.inc);
});
frontend.state.get_next_container_id = (function frontend$state$get_next_container_id(){
var next_id = ((function (){var or__5142__auto__ = frontend.state.get_state(new cljs.core.Keyword("ui","container-id","ui/container-id",1274679328));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() + (1));
frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","container-id","ui/container-id",1274679328),next_id);

return next_id;
});
/**
 * Either cached container-id or a new id
 */
frontend.state.get_container_id = (function frontend$state$get_container_id(key){
if(cljs.core.seq(key)){
var db = frontend.rfx.snapshot();
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("ui","cached-key->container-id","ui/cached-key->container-id",-989519868).cljs$core$IFn$_invoke$arity$1(db),key);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var id = ((function (){var or__5142__auto____$1 = new cljs.core.Keyword("ui","container-id","ui/container-id",1274679328).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return (0);
}
})() + (1));
var db_SINGLEQUOTE_ = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("ui","container-id","ui/container-id",1274679328),id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","cached-key->container-id","ui/cached-key->container-id",-989519868),key], null),id);
frontend.state._STAR_profile_state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.update.cljs$core$IFn$_invoke$arity$3(frontend.state._STAR_profile_state.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.Keyword("ui","container-id","ui/container-id",1274679328),cljs.core.inc));

frontend.state._STAR_profile_state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.update.cljs$core$IFn$_invoke$arity$3(frontend.state._STAR_profile_state.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.Keyword("ui","cached-key->container-id","ui/cached-key->container-id",-989519868),cljs.core.inc));

frontend.rfx.replace_state_paths_BANG_(db_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","container-id","ui/container-id",1274679328)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","cached-key->container-id","ui/cached-key->container-id",-989519868),key], null)], null));

return id;
}
} else {
return frontend.state.get_next_container_id();
}
});
/**
 * Return a stable container id for the component lifetime.
 */
frontend.state.use_container_id = (function frontend$state$use_container_id(var_args){
var G__51562 = arguments.length;
switch (G__51562) {
case 0:
return frontend.state.use_container_id.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.state.use_container_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.state.use_container_id.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.state.use_container_id.cljs$core$IFn$_invoke$arity$1(null);
}));

(frontend.state.use_container_id.cljs$core$IFn$_invoke$arity$1 = (function (key){
return logseq.shui.hooks.use_memo((function (){
return frontend.state.get_container_id(key);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null));
}));

(frontend.state.use_container_id.cljs$lang$maxFixedArity = 1);

frontend.state.get_editor_info = (function frontend$state$get_editor_info(){
var selected_block_uuids = (function (){var G__51564 = frontend.state.get_selection_block_ids();
var G__51564__$1 = (((G__51564 == null))?null:cljs.core.seq(G__51564));
if((G__51564__$1 == null)){
return null;
} else {
return cljs.core.vec(G__51564__$1);
}
})();
var selection_info = (cljs.core.truth_(selected_block_uuids)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected-block-uuids","selected-block-uuids",-1135597388),selected_block_uuids,new cljs.core.Keyword(null,"selection-direction","selection-direction",2031740782),frontend.state.get_selection_direction()], null):null);
var temp__5823__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5823__auto__)){
var edit_block = temp__5823__auto__;
var G__51565 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(edit_block),new cljs.core.Keyword(null,"container-id","container-id",1274665684),(function (){var or__5142__auto__ = frontend.state.get_state(new cljs.core.Keyword("editor","container-id","editor/container-id",1915616583));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"unknown-container","unknown-container",1739831473);
}
})(),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),frontend.state.get_state(new cljs.core.Keyword("editor","start-pos","editor/start-pos",-40843537)),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),frontend.state.get_edit_pos()], null);
if(cljs.core.truth_(selection_info)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__51565,selection_info], 0));
} else {
return G__51565;
}
} else {
return selection_info;
}
});
frontend.state.conj_block_ref_BANG_ = (function frontend$state$conj_block_ref_BANG_(ref_entity){
return frontend.state.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("editor","block-refs","editor/block-refs",-2016894855),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ref_entity], 0));
});
frontend.state.get_highlight_recent_days = (function frontend$state$get_highlight_recent_days(){
return frontend.state.get_state(new cljs.core.Keyword("ui","highlight-recent-days","ui/highlight-recent-days",388728304));
});
frontend.state.set_highlight_recent_days_BANG_ = (function frontend$state$set_highlight_recent_days_BANG_(days){
frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","highlight-recent-days","ui/highlight-recent-days",388728304),days);

return frontend.storage.set(new cljs.core.Keyword("ui","highlight-recent-days","ui/highlight-recent-days",388728304),days);
});
frontend.state.set_db_worker_client_id_BANG_ = (function frontend$state$set_db_worker_client_id_BANG_(new_id){
if(cljs.core.truth_(new_id)){
cljs.core.reset_BANG_(frontend.state._STAR_db_worker_client_id,new_id);

return frontend.storage.set(new cljs.core.Keyword(null,"db-worker-client-id","db-worker-client-id",1493290080),new_id);
} else {
return null;
}
});

//# sourceMappingURL=frontend.state.js.map
