goog.provide('frontend.handler.worker');
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.worker !== 'undefined') && (typeof frontend.handler.worker.handle !== 'undefined')){
} else {
frontend.handler.worker.handle = (function (){var method_table__5747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__66589 = cljs.core.get_global_hierarchy;
return (fexpr__66589.cljs$core$IFn$_invoke$arity$0 ? fexpr__66589.cljs$core$IFn$_invoke$arity$0() : fexpr__66589.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("frontend.handler.worker","handle"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5751__auto__,method_table__5747__auto__,prefer_table__5748__auto__,method_cache__5749__auto__,cached_hierarchy__5750__auto__));
})();
}
frontend.handler.worker.normalize_notification_payload = (function frontend$handler$worker$normalize_notification_payload(p__66590){
var vec__66591 = p__66590;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66591,(0),null);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66591,(1),null);
var clear_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66591,(2),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66591,(3),null);
var timeout = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66591,(4),null);
var extra = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66591,(5),null);
var i18n_data = ((((cljs.core.map_QMARK_(extra)) && (cljs.core.contains_QMARK_(extra,new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124)))))?extra:null);
var close_cb = ((cljs.core.fn_QMARK_(extra))?extra:null);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"clear?","clear?",1363344639),clear_QMARK_,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout,new cljs.core.Keyword(null,"close-cb","close-cb",-1532621281),close_cb,new cljs.core.Keyword(null,"i18n-data","i18n-data",-693144492),i18n_data], null);
});
frontend.handler.worker.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"notification","notification",-222338233),(function (_,_worker,data){
var map__66594 = frontend.handler.worker.normalize_notification_payload(data);
var map__66594__$1 = cljs.core.__destructure_map(map__66594);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66594__$1,new cljs.core.Keyword(null,"content","content",15833224));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66594__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var clear_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66594__$1,new cljs.core.Keyword(null,"clear?","clear?",1363344639));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66594__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66594__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var close_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66594__$1,new cljs.core.Keyword(null,"close-cb","close-cb",-1532621281));
var i18n_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66594__$1,new cljs.core.Keyword(null,"i18n-data","i18n-data",-693144492));
var translated_content = (function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124).cljs$core$IFn$_invoke$arity$1(i18n_data);
if(cljs.core.truth_(temp__5823__auto__)){
var i18n_key = temp__5823__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t,i18n_key,(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"i18n-args","i18n-args",-1847411217).cljs$core$IFn$_invoke$arity$1(i18n_data);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
} else {
return content;
}
})();
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$6(translated_content,status,clear_QMARK_,uid,timeout,close_cb);
}));
frontend.handler.worker.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"log","log",-1595516004),(function (_,_worker,p__66595){
var vec__66596 = p__66595;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66596,(0),null);
var level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66596,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66596,(2),null);
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$3(name,level,data);
}));
frontend.handler.worker.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"add-repo","add-repo",1885345931),(function (_,_worker,data){
return frontend.state.add_repo_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1(data)], null));
}));
frontend.handler.worker.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rtc-sync-state","rtc-sync-state",-661353236),(function (_,_worker,data){
var state = data;
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rtc","sync-state","rtc/sync-state",-1325028836),state], null));
}));
frontend.handler.worker.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rtc-asset-upload-download-progress","rtc-asset-upload-download-progress",1626921044),(function (_,_worker,p__66599){
var map__66600 = p__66599;
var map__66600__$1 = cljs.core.__destructure_map(map__66600);
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66600__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679));
var asset_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66600__$1,new cljs.core.Keyword(null,"asset-id","asset-id",249736185));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66600__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
if(((cljs.core.seq(repo)) && (((cljs.core.seq(asset_id)) && (cljs.core.map_QMARK_(progress)))))){
return frontend.state.update_state_BANG_(new cljs.core.Keyword("rtc","asset-upload-download-progress","rtc/asset-upload-download-progress",-940899343),(function (m){
return cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,asset_id], null),progress);
}));
} else {
return null;
}
}));
frontend.handler.worker.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"asset-file-write-finish","asset-file-write-finish",1535708623),(function (_,_worker,p__66601){
var map__66602 = p__66601;
var map__66602__$1 = cljs.core.__destructure_map(map__66602);
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66602__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679));
var asset_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66602__$1,new cljs.core.Keyword(null,"asset-id","asset-id",249736185));
var ts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66602__$1,new cljs.core.Keyword(null,"ts","ts",1617209904));
if(((cljs.core.seq(repo)) && (cljs.core.seq(asset_id)))){
return frontend.state.update_state_BANG_(new cljs.core.Keyword("assets","asset-file-write-finish","assets/asset-file-write-finish",1870176846),(function (m){
return cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,asset_id], null),(function (){var or__5142__auto__ = ts;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return Date.now();
}
})());
}));
} else {
return null;
}
}));
frontend.handler.worker.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("thread-api","set-ui-state","thread-api/set-ui-state",-1077821946),(function (_,_worker,args){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.common.thread_api._STAR_thread_apis),new cljs.core.Keyword("thread-api","set-ui-state","thread-api/set-ui-state",-1077821946));
if(cljs.core.truth_(temp__5825__auto__)){
var f = temp__5825__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
return null;
}
}));
frontend.handler.worker.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("thread-api","search-index-build-progress","thread-api/search-index-build-progress",-1351606820),(function (_,_worker,args){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.common.thread_api._STAR_thread_apis),new cljs.core.Keyword("thread-api","search-index-build-progress","thread-api/search-index-build-progress",-1351606820));
if(cljs.core.truth_(temp__5825__auto__)){
var f = temp__5825__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
return null;
}
}));
frontend.handler.worker.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"sync-db-changes","sync-db-changes",-1236993461),(function (_,_worker,data){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","sync-changes","db/sync-changes",584814072),data], null));
}));
frontend.handler.worker.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"sync-conflicts-updated","sync-conflicts-updated",1416803662),(function (_,_worker,p__66603){
var map__66604 = p__66603;
var map__66604__$1 = cljs.core.__destructure_map(map__66604);
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66604__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679));
var block_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66604__$1,new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638));
var conflicts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66604__$1,new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816));
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.seq(repo);
if(and__5140__auto__){
return block_uuid;
} else {
return and__5140__auto__;
}
})())){
return frontend.state.set_sync_block_conflicts_BANG_.cljs$core$IFn$_invoke$arity$3(repo,block_uuid,conflicts);
} else {
return null;
}
}));
frontend.handler.worker.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rtc-log","rtc-log",1926627661),(function (_,_worker,log){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rtc","log","rtc/log",-1596481285),log], null));
}));
frontend.handler.worker.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"export-current-db","export-current-db",-728527384),(function (_){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","export-sqlite","db/export-sqlite",703008892)], null));
}));
frontend.handler.worker.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"record-worker-client-id","record-worker-client-id",-389572085),(function (_,_worker,data){
var temp__5825__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__5825__auto__)){
var client_id = temp__5825__auto__;
return frontend.state.set_db_worker_client_id_BANG_(client_id);
} else {
return null;
}
}));
frontend.handler.worker.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"capture-error","capture-error",583122432),(function (_,_worker,data){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capture-error","capture-error",583122432),data], null));
}));
frontend.handler.worker.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"backup-file","backup-file",-560755353),(function (_,_worker,data){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","backup-file","graph/backup-file",-457945391),data], null));
}));
frontend.handler.worker.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"notify-existing-file","notify-existing-file",1395099748),(function (_,_worker,data){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","notify-existing-file","graph/notify-existing-file",1565444534),data], null));
}));
frontend.handler.worker.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"remote-graph-gone","remote-graph-gone",1686829224),(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rtc","remote-graph-gone","rtc/remote-graph-gone",1686698503)], null));
}));
frontend.handler.worker._LT_invoke_worker_thread_api = (function frontend$handler$worker$_LT_invoke_worker_thread_api(var_args){
var args__5882__auto__ = [];
var len__5876__auto___66640 = arguments.length;
var i__5877__auto___66641 = (0);
while(true){
if((i__5877__auto___66641 < len__5876__auto___66640)){
args__5882__auto__.push((arguments[i__5877__auto___66641]));

var G__66642 = (i__5877__auto___66641 + (1));
i__5877__auto___66641 = G__66642;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return frontend.handler.worker._LT_invoke_worker_thread_api.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(frontend.handler.worker._LT_invoke_worker_thread_api.cljs$core$IFn$_invoke$arity$variadic = (function (wrapped_worker,qkw,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(wrapped_worker,qkw,args);
}));

(frontend.handler.worker._LT_invoke_worker_thread_api.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.handler.worker._LT_invoke_worker_thread_api.cljs$lang$applyTo = (function (seq66605){
var G__66606 = cljs.core.first(seq66605);
var seq66605__$1 = cljs.core.next(seq66605);
var G__66607 = cljs.core.first(seq66605__$1);
var seq66605__$2 = cljs.core.next(seq66605__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66606,G__66607,seq66605__$2);
}));

frontend.handler.worker.ui_request_error__GT_payload = (function frontend$handler$worker$ui_request_error__GT_payload(error){
var data = cljs.core.ex_data(error);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"ui-request-failed","ui-request-failed",-283312139);
}
})(),new cljs.core.Keyword(null,"message","message",-406056002),(function (){var or__5142__auto__ = cljs.core.ex_message(error);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(error));
}
})()], null),((cljs.core.seq(data))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null):null)], 0));
});
frontend.handler.worker._LT_db_worker_ui_action = (function frontend$handler$worker$_LT_db_worker_ui_action(action,payload){
var G__66617 = action;
var G__66617__$1 = (((G__66617 instanceof cljs.core.Keyword))?G__66617.fqn:null);
switch (G__66617__$1) {
case "request-e2ee-password":
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rtc","request-e2ee-password","rtc/request-e2ee-password",433988363),payload], null))),(function (password_promise){
return promesa.protocols._mcat(promesa.protocols._promise(password_promise),(function (password){
return promesa.protocols._promise(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"password","password",417022471),password], null));
}));
}));
}));

break;
case "decrypt-user-e2ee-private-key":
var encrypted_private_key = new cljs.core.Keyword(null,"encrypted-private-key","encrypted-private-key",1069899594).cljs$core$IFn$_invoke$arity$1(payload);
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rtc","decrypt-user-e2ee-private-key","rtc/decrypt-user-e2ee-private-key",1893665628),encrypted_private_key], null))),(function (private_key_promise){
return promesa.protocols._mcat(promesa.protocols._promise(private_key_promise),(function (private_key){
return promesa.protocols._promise(frontend.common.crypt._LT_export_private_key(private_key));
}));
}));
}));

break;
case "native-save-e2ee-password":
var map__66618 = payload;
var map__66618__$1 = cljs.core.__destructure_map(map__66618);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66618__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var encrypted_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66618__$1,new cljs.core.Keyword(null,"encrypted-text","encrypted-text",1858712453));
if((!(((typeof key === 'string') && (typeof encrypted_text === 'string'))))){
return promesa.core.rejected(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid native-save-e2ee-password payload",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"invalid-ui-action-payload","invalid-ui-action-payload",527431816),new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"payload","payload",-383036092),payload], null)));
} else {
if(cljs.core.not(frontend.handler.e2ee.native_storage_supported_QMARK_())){
return promesa.core.resolved(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"supported?","supported?",-202949746),false], null));
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.e2ee._LT_native_save_secret_BANG_(key,encrypted_text)),(function (_){
return promesa.protocols._promise(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"supported?","supported?",-202949746),true], null));
}));
}));
}
}

break;
case "native-get-e2ee-password":
var map__66619 = payload;
var map__66619__$1 = cljs.core.__destructure_map(map__66619);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66619__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
if((!(typeof key === 'string'))){
return promesa.core.rejected(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid native-get-e2ee-password payload",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"invalid-ui-action-payload","invalid-ui-action-payload",527431816),new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"payload","payload",-383036092),payload], null)));
} else {
if(cljs.core.not(frontend.handler.e2ee.native_storage_supported_QMARK_())){
return promesa.core.resolved(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"supported?","supported?",-202949746),false], null));
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.e2ee._LT_native_get_secret(key)),(function (encrypted_text){
return promesa.protocols._promise(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"supported?","supported?",-202949746),true,new cljs.core.Keyword(null,"encrypted-text","encrypted-text",1858712453),encrypted_text], null));
}));
}));
}
}

break;
case "native-delete-e2ee-password":
var map__66622 = payload;
var map__66622__$1 = cljs.core.__destructure_map(map__66622);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66622__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
if((!(typeof key === 'string'))){
return promesa.core.rejected(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid native-delete-e2ee-password payload",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"invalid-ui-action-payload","invalid-ui-action-payload",527431816),new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"payload","payload",-383036092),payload], null)));
} else {
if(cljs.core.not(frontend.handler.e2ee.native_storage_supported_QMARK_())){
return promesa.core.resolved(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"supported?","supported?",-202949746),false], null));
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.e2ee._LT_native_delete_secret_BANG_(key)),(function (_){
return promesa.protocols._promise(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"supported?","supported?",-202949746),true], null));
}));
}));
}
}

break;
case "read-import-file":
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(payload);
if((!(typeof path === 'string'))){
return promesa.core.rejected(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid read-import-file payload",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"invalid-ui-action-payload","invalid-ui-action-payload",527431816),new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"payload","payload",-383036092),payload], null)));
} else {
return frontend.handler.file_graph_import._LT_read_file_graph_import_file(path);
}

break;
default:
return promesa.core.rejected(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unsupported db-worker ui action",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"unsupported-ui-action","unsupported-ui-action",-521122061),new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"payload","payload",-383036092),payload], null)));

}
});
frontend.handler.worker._LT_handle_db_worker_ui_request = (function frontend$handler$worker$_LT_handle_db_worker_ui_request(wrapped_worker,p__66623){
var map__66624 = p__66623;
var map__66624__$1 = cljs.core.__destructure_map(map__66624);
var request_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66624__$1,new cljs.core.Keyword(null,"request-id","request-id",-985684093));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66624__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66624__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
if(((typeof request_id === 'string') && ((action instanceof cljs.core.Keyword)))){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.handler.worker._LT_db_worker_ui_action(action,payload),(function (result){
return frontend.handler.worker._LT_invoke_worker_thread_api.cljs$core$IFn$_invoke$arity$variadic(wrapped_worker,new cljs.core.Keyword("thread-api","resolve-ui-request","thread-api/resolve-ui-request",-125626719),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([request_id,result], 0));
})),(function (error){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.worker",new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db-worker","ui-request-failed","db-worker/ui-request-failed",-971621560),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"request-id","request-id",-985684093),request_id,new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"error","error",-978969032),error], null),new cljs.core.Keyword(null,"line","line",212345235),185], null)),null);
} else {
}

return frontend.handler.worker._LT_invoke_worker_thread_api.cljs$core$IFn$_invoke$arity$variadic(wrapped_worker,new cljs.core.Keyword("thread-api","reject-ui-request","thread-api/reject-ui-request",-1821228685),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([request_id,frontend.handler.worker.ui_request_error__GT_payload(error)], 0));
}));
} else {
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.worker",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db-worker","ui-request-invalid","db-worker/ui-request-invalid",1456492247),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"request-id","request-id",-985684093),request_id,new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"payload","payload",-383036092),payload], null),new cljs.core.Keyword(null,"line","line",212345235),193], null)),null);
} else {
return null;
}
}
});
frontend.handler.worker.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("db-worker","ui-request","db-worker/ui-request",1358890100),(function (_,wrapped_worker,data){
return frontend.handler.worker._LT_handle_db_worker_ui_request(wrapped_worker,data);
}));
frontend.handler.worker.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,_worker,data){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"debug","debug",-1608172596),"Worker data not handled: ",data], 0));
}));
frontend.handler.worker.report_worker_error_BANG_ = (function frontend$handler$worker$report_worker_error_BANG_(error_value){
var message = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error_value);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(error_value,"message");
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return "Unexpected webworker error";
}
}
})();
var error_data = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(error_value);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(error_value,"data");
}
})();
var cause_data = (function (){var or__5142__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(error_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),new cljs.core.Keyword(null,"data","data",-232669377)], null));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(error_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cause","data"], null));
}
})();
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capture-error","capture-error",583122432),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(message,(function (){var or__5142__auto__ = ((cljs.core.map_QMARK_(error_data))?error_data:null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"worker-error?","worker-error?",61763377),true], null),new cljs.core.Keyword(null,"extra","extra",1612569067),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"worker-error","worker-error",-1820227890),error_value,new cljs.core.Keyword(null,"worker-error-data","worker-error-data",1968811186),error_data,new cljs.core.Keyword(null,"worker-cause-data","worker-cause-data",1064879197),cause_data], null)], null)], null));
});
frontend.handler.worker.suppress_worker_error_log_QMARK_ = (function frontend$handler$worker$suppress_worker_error_log_QMARK_(error_value){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Non-transact outliner ops contain numeric entity ids",(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error_value);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(error_value,"message");
}
})());
});
frontend.handler.worker.handle_message_BANG_ = (function frontend$handler$worker$handle_message_BANG_(worker,wrapped_worker){
if(cljs.core.truth_(worker)){
} else {
throw (new Error((""+"Assert failed: "+"worker doesn't exists"+"\n"+"worker")));
}

var handle_worker_failure_BANG__66644 = (function (event){
if((worker === cljs.core.deref(frontend.state._STAR_db_worker_thread))){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.worker",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db-worker","stopped-unexpectedly","db-worker/stopped-unexpectedly",1591783213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event], null),new cljs.core.Keyword(null,"line","line",212345235),233], null)),null);
} else {
}

(worker.onmessage = null);

(worker.onerror = null);

(worker.onmessageerror = null);

cljs.core.reset_BANG_(frontend.state._STAR_db_worker_thread,null);

return cljs.core.reset_BANG_(frontend.state._STAR_db_worker,null);
} else {
return null;
}
});
(worker.onerror = handle_worker_failure_BANG__66644);

(worker.onmessageerror = handle_worker_failure_BANG__66644);

return (worker.onmessage = (function (event){
var data = event.data;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(data,"keepAliveResponse")){
return worker.postMessage("keepAliveRequest");
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["RELEASE",null,"RAW",null,"APPLY",null], null), null),data.type)){
return null;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("HANDLER",data.type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("throw",data.name)))){
if(cljs.core.truth_(data.value.isError)){
var error_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217)], null));
if(frontend.handler.worker.suppress_worker_error_log_QMARK_(error_value)){
} else {
console.error("Unexpected webworker error:",error_value);

var temp__5825__auto___66645 = new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(error_value);
if(cljs.core.truth_(temp__5825__auto___66645)){
var stack_66646 = temp__5825__auto___66645;
console.log(stack_66646);
} else {
}
}

return frontend.handler.worker.report_worker_error_BANG_(error_value);
} else {
return console.error("Unexpected webworker error :",data);
}
} else {
if(typeof data === 'string'){
var vec__66628 = logseq.db.read_transit_str(data);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66628,(0),null);
var payload = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66628,(1),null);
return frontend.handler.worker.handle.cljs$core$IFn$_invoke$arity$3(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(e),wrapped_worker,payload);
} else {
if(clojure.string.starts_with_QMARK_(data.type,"MP_")){
return null;
} else {
return console.error("Worker received invalid data from worker: ",data);
}
}
}
}
}
}));
});

//# sourceMappingURL=frontend.handler.worker.js.map
