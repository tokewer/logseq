goog.provide('frontend.components.rtc.indicator');
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.rtc !== 'undefined') && (typeof frontend.components.rtc.indicator !== 'undefined') && (typeof frontend.components.rtc.indicator._STAR_detail_logs !== 'undefined')){
} else {
frontend.components.rtc.indicator._STAR_detail_logs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"download-logs","download-logs",-530842798),null,new cljs.core.Keyword(null,"upload-logs","upload-logs",66527418),null,new cljs.core.Keyword(null,"misc-logs","misc-logs",41710278),null], null));
}
frontend.components.rtc.indicator.rtc_state__GT_detail_info = (function frontend$components$rtc$indicator$rtc_state__GT_detail_info(state){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"rtc-state","rtc-state",1931374921),new cljs.core.Keyword(null,"local-tx","local-tx",1729212201),new cljs.core.Keyword(null,"pending-asset-ops","pending-asset-ops",-1886040529),new cljs.core.Keyword(null,"remote-tx","remote-tx",-1423802481),new cljs.core.Keyword(null,"local-checksum","local-checksum",-629254768),new cljs.core.Keyword(null,"remote-checksum","remote-checksum",363753456),new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),new cljs.core.Keyword(null,"missing-asset-upload-files","missing-asset-upload-files",-1505813133),new cljs.core.Keyword(null,"pending-server-ops","pending-server-ops",42835834),new cljs.core.Keyword(null,"pending-local-ops","pending-local-ops",-266254177)],[(cljs.core.truth_(new cljs.core.Keyword(null,"rtc-lock","rtc-lock",1338966560).cljs$core$IFn$_invoke$arity$1(state))?new cljs.core.Keyword(null,"open","open",-1763596448):new cljs.core.Keyword(null,"close","close",1835149582)),new cljs.core.Keyword(null,"local-tx","local-tx",1729212201).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"pending-asset-ops-count","pending-asset-ops-count",474948823).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"remote-tx","remote-tx",-1423802481).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"local-checksum","local-checksum",-629254768).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"remote-checksum","remote-checksum",363753456).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"missing-asset-upload-files","missing-asset-upload-files",-1505813133).cljs$core$IFn$_invoke$arity$1(state),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"pending-server-ops-count","pending-server-ops-count",1621669161).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(((typeof new cljs.core.Keyword(null,"remote-tx","remote-tx",-1423802481).cljs$core$IFn$_invoke$arity$1(state) === 'number') && (typeof new cljs.core.Keyword(null,"local-tx","local-tx",1729212201).cljs$core$IFn$_invoke$arity$1(state) === 'number'))){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),(new cljs.core.Keyword(null,"remote-tx","remote-tx",-1423802481).cljs$core$IFn$_invoke$arity$1(state) - new cljs.core.Keyword(null,"local-tx","local-tx",1729212201).cljs$core$IFn$_invoke$arity$1(state)));
} else {
return null;
}
}
})(),new cljs.core.Keyword(null,"unpushed-block-update-count","unpushed-block-update-count",-387210371).cljs$core$IFn$_invoke$arity$1(state)]);
});
frontend.components.rtc.indicator.update_detail_log_BANG_ = (function frontend$components$rtc$indicator$update_detail_log_BANG_(k,log){
if(cljs.core.truth_(log)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.components.rtc.indicator._STAR_detail_logs,cljs.core.update,k,(function (logs){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(logs,log));
}));
} else {
return null;
}
});
cljs.core.add_watch(frontend.handler.db_based.rtc_flows.rtc_download_log,new cljs.core.Keyword("frontend.components.rtc.indicator","update-detail-download-log","frontend.components.rtc.indicator/update-detail-download-log",-2089470100),(function (_,___$1,___$2,log){
return frontend.components.rtc.indicator.update_detail_log_BANG_(new cljs.core.Keyword(null,"download-logs","download-logs",-530842798),log);
}));
cljs.core.add_watch(frontend.handler.db_based.rtc_flows.rtc_upload_log,new cljs.core.Keyword("frontend.components.rtc.indicator","update-detail-upload-log","frontend.components.rtc.indicator/update-detail-upload-log",-1520880512),(function (_,___$1,___$2,log){
return frontend.components.rtc.indicator.update_detail_log_BANG_(new cljs.core.Keyword(null,"upload-logs","upload-logs",66527418),log);
}));
cljs.core.add_watch(frontend.handler.db_based.rtc_flows.rtc_misc_log,new cljs.core.Keyword("frontend.components.rtc.indicator","update-detail-misc-log","frontend.components.rtc.indicator/update-detail-misc-log",-1255381919),(function (_,___$1,___$2,log){
return frontend.components.rtc.indicator.update_detail_log_BANG_(new cljs.core.Keyword(null,"misc-logs","misc-logs",41710278),log);
}));
frontend.components.rtc.indicator.use_detail_info = (function frontend$components$rtc$indicator$use_detail_info(){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.components.rtc.indicator.rtc_state__GT_detail_info(frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rtc","state","rtc/state",-1988572624)], null))),logseq.shui.hooks.use_atom_value(frontend.components.rtc.indicator._STAR_detail_logs)], 0));
});
frontend.components.rtc.indicator.asset_transfer_counts = (function frontend$components$rtc$indicator$asset_transfer_counts(progress){
return cljs.core.reduce_kv((function (counts,_id,p__54039){
var map__54040 = p__54039;
var map__54040__$1 = cljs.core.__destructure_map(map__54040);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54040__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var loaded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54040__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54040__$1,new cljs.core.Keyword(null,"total","total",1916810418));
if(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"download","download",-300081668),null,new cljs.core.Keyword(null,"upload","upload",-255769218),null], null), null),direction)) && (((typeof loaded === 'number') && (((typeof total === 'number') && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(loaded,total)))))))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(counts,direction,cljs.core.inc);
} else {
return counts;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"upload","upload",-255769218),(0),new cljs.core.Keyword(null,"download","download",-300081668),(0)], null),(function (){var or__5142__auto__ = progress;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});
frontend.components.rtc.indicator.asset_status_rows = (function frontend$components$rtc$indicator$asset_status_rows(p__54041){
var map__54042 = p__54041;
var map__54042__$1 = cljs.core.__destructure_map(map__54042);
var transfer_counts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54042__$1,new cljs.core.Keyword(null,"asset-transfer-counts","asset-transfer-counts",1023340464));
var pending_asset_ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54042__$1,new cljs.core.Keyword(null,"pending-asset-ops","pending-asset-ops",-1886040529));
var missing_asset_upload_files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54042__$1,new cljs.core.Keyword(null,"missing-asset-upload-files","missing-asset-upload-files",-1505813133));
var map__54043 = transfer_counts;
var map__54043__$1 = cljs.core.__destructure_map(map__54043);
var upload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54043__$1,new cljs.core.Keyword(null,"upload","upload",-255769218));
var download = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54043__$1,new cljs.core.Keyword(null,"download","download",-300081668));
var missing_count = cljs.core.count(missing_asset_upload_files);
var pending_upload_count = cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),((function (){var or__5142__auto__ = pending_asset_ops;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() - missing_count));
var G__54044 = cljs.core.PersistentVector.EMPTY;
var G__54044__$1 = (((missing_count > (0)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__54044,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),missing_count,new cljs.core.Keyword(null,"label-key","label-key",1868394642),new cljs.core.Keyword("sync","missing-asset-files","sync/missing-asset-files",1086025439)], null)):G__54044);
var G__54044__$2 = (((pending_upload_count > (0)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__54044__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),pending_upload_count,new cljs.core.Keyword(null,"label-key","label-key",1868394642),new cljs.core.Keyword("sync","pending-asset-uploads","sync/pending-asset-uploads",-734526399)], null)):G__54044__$1);
var G__54044__$3 = ((((function (){var or__5142__auto__ = upload;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() > (0)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__54044__$2,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),upload,new cljs.core.Keyword(null,"label-key","label-key",1868394642),new cljs.core.Keyword("sync","assets-uploading","sync/assets-uploading",1462120479)], null)):G__54044__$2);
if(((function (){var or__5142__auto__ = download;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() > (0))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__54044__$3,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),download,new cljs.core.Keyword(null,"label-key","label-key",1868394642),new cljs.core.Keyword("sync","assets-downloading","sync/assets-downloading",2138268756)], null));
} else {
return G__54044__$3;
}
});
frontend.components.rtc.indicator.indicator_button_class = (function frontend$components$rtc$indicator$indicator_button_class(p__54045){
var map__54046 = p__54045;
var map__54046__$1 = cljs.core.__destructure_map(map__54046);
var online_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54046__$1,new cljs.core.Keyword(null,"online?","online?",-1144837492));
var rtc_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54046__$1,new cljs.core.Keyword(null,"rtc-state","rtc-state",1931374921));
var pending_local_ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54046__$1,new cljs.core.Keyword(null,"pending-local-ops","pending-local-ops",-266254177));
var pending_asset_ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54046__$1,new cljs.core.Keyword(null,"pending-asset-ops","pending-asset-ops",-1886040529));
var pending_server_ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54046__$1,new cljs.core.Keyword(null,"pending-server-ops","pending-server-ops",42835834));
var open_QMARK_ = (function (){var and__5140__auto__ = online_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open","open",-1763596448),rtc_state);
} else {
return and__5140__auto__;
}
})();
var syncing_QMARK_ = (function (){var and__5140__auto__ = open_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return ((function (){var or__5142__auto__ = pending_server_ops;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() > (0));
} else {
return and__5140__auto__;
}
})();
var idle_QMARK_ = (function (){var and__5140__auto__ = open_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return ((((function (){var or__5142__auto__ = pending_local_ops;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() === (0))) && (((((function (){var or__5142__auto__ = pending_asset_ops;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() === (0))) && (((function (){var or__5142__auto__ = pending_server_ops;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() === (0))))));
} else {
return and__5140__auto__;
}
})();
var queuing_QMARK_ = ((((function (){var or__5142__auto__ = pending_local_ops;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() > (0))) || (((function (){var or__5142__auto____$1 = pending_asset_ops;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return (0);
}
})() > (0))));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",(function (){var G__54047 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cloud"], null);
var G__54047__$1 = (cljs.core.truth_(open_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__54047,"on"):G__54047);
var G__54047__$2 = (cljs.core.truth_(syncing_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__54047__$1,"syncing"):G__54047__$1);
var G__54047__$3 = (cljs.core.truth_(idle_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__54047__$2,"idle"):G__54047__$2);
if(queuing_QMARK_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__54047__$3,"queuing");
} else {
return G__54047__$3;
}
})());
});
frontend.components.rtc.indicator.asset_status_label = (function frontend$components$rtc$indicator$asset_status_label(label_key){
var G__54048 = label_key;
var G__54048__$1 = (((G__54048 instanceof cljs.core.Keyword))?G__54048.fqn:null);
switch (G__54048__$1) {
case "sync/missing-asset-files":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync","missing-asset-files","sync/missing-asset-files",1086025439)], 0));

break;
case "sync/pending-asset-uploads":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync","pending-asset-uploads","sync/pending-asset-uploads",-734526399)], 0));

break;
case "sync/assets-uploading":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync","assets-uploading","sync/assets-uploading",1462120479)], 0));

break;
case "sync/assets-downloading":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync","assets-downloading","sync/assets-downloading",2138268756)], 0));

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54048__$1))));

}
});
frontend.components.rtc.indicator.missing_asset_files = (function (){var render_fn__31744__auto__ = (function frontend$components$rtc$indicator$missing_asset_files(files){
if(cljs.core.seq(files)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details.assets-missing-files","details.assets-missing-files",2011191713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync","missing-asset-files-count","sync/missing-asset-files-count",597904544),cljs.core.count(files)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-1.text-sm","div.flex.flex-col.gap-1.text-sm",504270069),(function (){var iter__5628__auto__ = (function frontend$components$rtc$indicator$missing_asset_files_$_iter__54049(s__54050){
return (new cljs.core.LazySeq(null,(function (){
var s__54050__$1 = s__54050;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__54050__$1);
if(temp__5825__auto__){
var s__54050__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54050__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__54050__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__54052 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__54051 = (0);
while(true){
if((i__54051 < size__5627__auto__)){
var map__54053 = cljs.core._nth(c__5626__auto__,i__54051);
var map__54053__$1 = cljs.core.__destructure_map(map__54053);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54053__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
cljs.core.chunk_append(b__54052,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.gap-1.items-center","div.flex.flex-row.gap-1.items-center",1211135204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),file], null),frontend.ui.icon("alert-triangle",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.truncate","span.truncate",60671082),file], null)], null));

var G__54180 = (i__54051 + (1));
i__54051 = G__54180;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54052),frontend$components$rtc$indicator$missing_asset_files_$_iter__54049(cljs.core.chunk_rest(s__54050__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54052),null);
}
} else {
var map__54054 = cljs.core.first(s__54050__$2);
var map__54054__$1 = cljs.core.__destructure_map(map__54054);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54054__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.gap-1.items-center","div.flex.flex-row.gap-1.items-center",1211135204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),file], null),frontend.ui.icon("alert-triangle",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.truncate","span.truncate",60671082),file], null)], null),frontend$components$rtc$indicator$missing_asset_files_$_iter__54049(cljs.core.rest(s__54050__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(files);
})()], null)], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$rtc$indicator$missing_asset_files__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__54055 = cljs.core.first(args__31746__auto__);
var G__54056 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__54055,G__54056) : io.factorhouse.hsx.core.obj_get.call(null,G__54055,G__54056));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"missing-asset-files","missing-asset-files",-1520832885,null),args__31746__auto__),frontend$components$rtc$indicator$missing_asset_files,args__31746__auto__,null);
}
};
var frontend$components$rtc$indicator$missing_asset_files = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__54181__i = 0, G__54181__a = new Array(arguments.length -  0);
while (G__54181__i < G__54181__a.length) {G__54181__a[G__54181__i] = arguments[G__54181__i + 0]; ++G__54181__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__54181__a,0,null);
} 
return frontend$components$rtc$indicator$missing_asset_files__delegate.call(this,args__31746__auto__);};
frontend$components$rtc$indicator$missing_asset_files.cljs$lang$maxFixedArity = 0;
frontend$components$rtc$indicator$missing_asset_files.cljs$lang$applyTo = (function (arglist__54182){
var args__31746__auto__ = cljs.core.seq(arglist__54182);
return frontend$components$rtc$indicator$missing_asset_files__delegate(args__31746__auto__);
});
frontend$components$rtc$indicator$missing_asset_files.cljs$core$IFn$_invoke$arity$variadic = frontend$components$rtc$indicator$missing_asset_files__delegate;
return frontend$components$rtc$indicator$missing_asset_files;
})()
;
var memo_comp__31747__auto__ = (function (){var G__54057 = comp__31745__auto__;
var G__54058 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__54057,G__54058) : io.factorhouse.hsx.core.react_memo.call(null,G__54057,G__54058));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"missing-asset-files");

return comp__31745__auto__;
})();
frontend.components.rtc.indicator.assets_progressing = (function (){var render_fn__31744__auto__ = (function frontend$components$rtc$indicator$assets_progressing(progress){
var ids = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__54062){
var vec__54063 = p__54062;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54063,(0),null);
var map__54066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54063,(1),null);
var map__54066__$1 = cljs.core.__destructure_map(map__54066);
var loaded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54066__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54066__$1,new cljs.core.Keyword(null,"total","total",1916810418));
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(loaded,total)) && (((typeof loaded === 'number') && (typeof total === 'number'))))){
return cljs.core.uuid(id);
} else {
return null;
}
}),progress)));
var vec__54059 = logseq.shui.hooks.use_state(cljs.core.PersistentArrayMap.EMPTY);
var id__GT_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54059,(0),null);
var set_id__GT_block_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54059,(1),null);
var _ = logseq.shui.hooks.use_effect_BANG_((function (){
promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_blocks.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),ids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (results){
return promesa.protocols._promise((function (){var G__54067 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__54068){
var map__54069 = p__54068;
var map__54069__$1 = cljs.core.__destructure_map(map__54069);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54069__$1,new cljs.core.Keyword(null,"block","block",664686210));
var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,block], null);
} else {
return null;
}
}),results));
return (set_id__GT_block_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_id__GT_block_BANG_.cljs$core$IFn$_invoke$arity$1(G__54067) : set_id__GT_block_BANG_.call(null,G__54067));
})());
}));
}));

return null;
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ids], null));
var downloading = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__54070){
var map__54071 = p__54070;
var map__54071__$1 = cljs.core.__destructure_map(map__54071);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54071__$1,new cljs.core.Keyword(null,"block","block",664686210));
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block);
}),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__54072){
var vec__54073 = p__54072;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54073,(0),null);
var map__54076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54073,(1),null);
var map__54076__$1 = cljs.core.__destructure_map(map__54076);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54076__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var loaded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54076__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54076__$1,new cljs.core.Keyword(null,"total","total",1916810418));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"download","download",-300081668))) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(loaded,total)) && (((typeof loaded === 'number') && (typeof total === 'number'))))))){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(id__GT_block,cljs.core.uuid(id));
if(cljs.core.truth_(temp__5825__auto__)){
var block = temp__5825__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),block,new cljs.core.Keyword(null,"percent","percent",2031453817),(((100) * (loaded / total)) | 0)], null);
} else {
return null;
}
} else {
return null;
}
}),progress));
var uploading = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__54077){
var map__54078 = p__54077;
var map__54078__$1 = cljs.core.__destructure_map(map__54078);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54078__$1,new cljs.core.Keyword(null,"block","block",664686210));
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block);
}),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__54079){
var vec__54080 = p__54079;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54080,(0),null);
var map__54083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54080,(1),null);
var map__54083__$1 = cljs.core.__destructure_map(map__54083);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54083__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var loaded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54083__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54083__$1,new cljs.core.Keyword(null,"total","total",1916810418));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"upload","upload",-255769218))) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(loaded,total)) && (((typeof loaded === 'number') && (typeof total === 'number'))))))){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(id__GT_block,cljs.core.uuid(id));
if(cljs.core.truth_(temp__5825__auto__)){
var block = temp__5825__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),block,new cljs.core.Keyword(null,"percent","percent",2031453817),(((100) * (loaded / total)) | 0)], null);
} else {
return null;
}
} else {
return null;
}
}),progress));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.assets-sync-progress.flex.flex-col.gap-2","div.assets-sync-progress.flex.flex-col.gap-2",1678962727),((cljs.core.seq(downloading))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync","assets-downloading-count","sync/assets-downloading-count",1887094406),cljs.core.count(downloading)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-1.text-sm","div.flex.flex-col.gap-1.text-sm",504270069),(function (){var iter__5628__auto__ = (function frontend$components$rtc$indicator$assets_progressing_$_iter__54084(s__54085){
return (new cljs.core.LazySeq(null,(function (){
var s__54085__$1 = s__54085;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__54085__$1);
if(temp__5825__auto__){
var s__54085__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54085__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__54085__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__54087 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__54086 = (0);
while(true){
if((i__54086 < size__5627__auto__)){
var map__54088 = cljs.core._nth(c__5626__auto__,i__54086);
var map__54088__$1 = cljs.core.__destructure_map(map__54088);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54088__$1,new cljs.core.Keyword(null,"block","block",664686210));
var percent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54088__$1,new cljs.core.Keyword(null,"percent","percent",2031453817));
cljs.core.chunk_append(b__54087,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.gap-1.items-center","div.flex.flex-row.gap-1.items-center",1211135204),frontend.ui.indicator_progress_pie(percent),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block)], null));

var G__54183 = (i__54086 + (1));
i__54086 = G__54183;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54087),frontend$components$rtc$indicator$assets_progressing_$_iter__54084(cljs.core.chunk_rest(s__54085__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54087),null);
}
} else {
var map__54089 = cljs.core.first(s__54085__$2);
var map__54089__$1 = cljs.core.__destructure_map(map__54089);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54089__$1,new cljs.core.Keyword(null,"block","block",664686210));
var percent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54089__$1,new cljs.core.Keyword(null,"percent","percent",2031453817));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.gap-1.items-center","div.flex.flex-row.gap-1.items-center",1211135204),frontend.ui.indicator_progress_pie(percent),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block)], null),frontend$components$rtc$indicator$assets_progressing_$_iter__54084(cljs.core.rest(s__54085__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(downloading);
})()], null)], null):null),((cljs.core.seq(uploading))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync","assets-uploading-count","sync/assets-uploading-count",1478058645),cljs.core.count(uploading)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-1.text-sm","div.flex.flex-col.gap-1.text-sm",504270069),(function (){var iter__5628__auto__ = (function frontend$components$rtc$indicator$assets_progressing_$_iter__54090(s__54091){
return (new cljs.core.LazySeq(null,(function (){
var s__54091__$1 = s__54091;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__54091__$1);
if(temp__5825__auto__){
var s__54091__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54091__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__54091__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__54093 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__54092 = (0);
while(true){
if((i__54092 < size__5627__auto__)){
var map__54094 = cljs.core._nth(c__5626__auto__,i__54092);
var map__54094__$1 = cljs.core.__destructure_map(map__54094);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54094__$1,new cljs.core.Keyword(null,"block","block",664686210));
var percent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54094__$1,new cljs.core.Keyword(null,"percent","percent",2031453817));
cljs.core.chunk_append(b__54093,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.gap-1.items-center","div.flex.flex-row.gap-1.items-center",1211135204),frontend.ui.indicator_progress_pie(percent),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block)], null));

var G__54184 = (i__54092 + (1));
i__54092 = G__54184;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54093),frontend$components$rtc$indicator$assets_progressing_$_iter__54090(cljs.core.chunk_rest(s__54091__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54093),null);
}
} else {
var map__54095 = cljs.core.first(s__54091__$2);
var map__54095__$1 = cljs.core.__destructure_map(map__54095);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54095__$1,new cljs.core.Keyword(null,"block","block",664686210));
var percent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54095__$1,new cljs.core.Keyword(null,"percent","percent",2031453817));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.gap-1.items-center","div.flex.flex-row.gap-1.items-center",1211135204),frontend.ui.indicator_progress_pie(percent),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block)], null),frontend$components$rtc$indicator$assets_progressing_$_iter__54090(cljs.core.rest(s__54091__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(uploading);
})()], null)], null):null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$rtc$indicator$assets_progressing__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__54096 = cljs.core.first(args__31746__auto__);
var G__54097 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__54096,G__54097) : io.factorhouse.hsx.core.obj_get.call(null,G__54096,G__54097));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"assets-progressing","assets-progressing",899107120,null),args__31746__auto__),frontend$components$rtc$indicator$assets_progressing,args__31746__auto__,null);
}
};
var frontend$components$rtc$indicator$assets_progressing = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__54185__i = 0, G__54185__a = new Array(arguments.length -  0);
while (G__54185__i < G__54185__a.length) {G__54185__a[G__54185__i] = arguments[G__54185__i + 0]; ++G__54185__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__54185__a,0,null);
} 
return frontend$components$rtc$indicator$assets_progressing__delegate.call(this,args__31746__auto__);};
frontend$components$rtc$indicator$assets_progressing.cljs$lang$maxFixedArity = 0;
frontend$components$rtc$indicator$assets_progressing.cljs$lang$applyTo = (function (arglist__54186){
var args__31746__auto__ = cljs.core.seq(arglist__54186);
return frontend$components$rtc$indicator$assets_progressing__delegate(args__31746__auto__);
});
frontend$components$rtc$indicator$assets_progressing.cljs$core$IFn$_invoke$arity$variadic = frontend$components$rtc$indicator$assets_progressing__delegate;
return frontend$components$rtc$indicator$assets_progressing;
})()
;
var memo_comp__31747__auto__ = (function (){var G__54098 = comp__31745__auto__;
var G__54099 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__54098,G__54099) : io.factorhouse.hsx.core.react_memo.call(null,G__54098,G__54099));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"assets-progressing");

return comp__31745__auto__;
})();
frontend.components.rtc.indicator.details = (function (){var render_fn__31744__auto__ = (function frontend$components$rtc$indicator$details(){
var online_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("network","online?","network/online?",1306822774)], null));
var repo = frontend.state.get_current_repo();
var asset_progress = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rtc","asset-upload-download-progress","rtc/asset-upload-download-progress",-940899343),repo], null));
var vec__54100 = logseq.shui.hooks.use_state(false);
var expand_debug_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54100,(0),null);
var set_expand_debug_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54100,(1),null);
var show_checksums_QMARK_ = (function (){var or__5142__auto__ = frontend.config.dev_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.util.node_test_QMARK_;
}
})();
var detail_info = frontend.components.rtc.indicator.use_detail_info();
var map__54103 = detail_info;
var map__54103__$1 = cljs.core.__destructure_map(map__54103);
var pending_server_ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54103__$1,new cljs.core.Keyword(null,"pending-server-ops","pending-server-ops",42835834));
var upload_logs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54103__$1,new cljs.core.Keyword(null,"upload-logs","upload-logs",66527418));
var pending_local_ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54103__$1,new cljs.core.Keyword(null,"pending-local-ops","pending-local-ops",-266254177));
var misc_logs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54103__$1,new cljs.core.Keyword(null,"misc-logs","misc-logs",41710278));
var local_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54103__$1,new cljs.core.Keyword(null,"local-tx","local-tx",1729212201));
var rtc_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54103__$1,new cljs.core.Keyword(null,"rtc-state","rtc-state",1931374921));
var pending_asset_ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54103__$1,new cljs.core.Keyword(null,"pending-asset-ops","pending-asset-ops",-1886040529));
var remote_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54103__$1,new cljs.core.Keyword(null,"remote-tx","remote-tx",-1423802481));
var remote_checksum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54103__$1,new cljs.core.Keyword(null,"remote-checksum","remote-checksum",363753456));
var local_checksum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54103__$1,new cljs.core.Keyword(null,"local-checksum","local-checksum",-629254768));
var graph_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54103__$1,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522));
var download_logs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54103__$1,new cljs.core.Keyword(null,"download-logs","download-logs",-530842798));
var missing_asset_upload_files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54103__$1,new cljs.core.Keyword(null,"missing-asset-upload-files","missing-asset-upload-files",-1505813133));
var asset_rows = frontend.components.rtc.indicator.asset_status_rows(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pending-asset-ops","pending-asset-ops",-1886040529),pending_asset_ops,new cljs.core.Keyword(null,"missing-asset-upload-files","missing-asset-upload-files",-1505813133),missing_asset_upload_files,new cljs.core.Keyword(null,"asset-transfer-counts","asset-transfer-counts",1023340464),frontend.components.rtc.indicator.asset_transfer_counts(asset_progress)], null));
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rtc-info.flex.flex-col.gap-1.p-2.text-gray-11","div.rtc-info.flex.flex-col.gap-1.p-2.text-gray-11",1681365040),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-medium.mb-2","div.font-medium.mb-2",1753808039),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(online_QMARK_)?new cljs.core.Keyword("sync","online","sync/online",880766200):new cljs.core.Keyword("sync","offline","sync/offline",-112439220))], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-medium.mr-1","span.font-medium.mr-1",-1994988386),(function (){var or__5142__auto__ = pending_local_ops;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})()], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync","pending-local-changes","sync/pending-local-changes",708785298)], 0))], null),(function (){var iter__5628__auto__ = (function frontend$components$rtc$indicator$details_$_iter__54104(s__54105){
return (new cljs.core.LazySeq(null,(function (){
var s__54105__$1 = s__54105;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__54105__$1);
if(temp__5825__auto__){
var s__54105__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54105__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__54105__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__54107 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__54106 = (0);
while(true){
if((i__54106 < size__5627__auto__)){
var map__54108 = cljs.core._nth(c__5626__auto__,i__54106);
var map__54108__$1 = cljs.core.__destructure_map(map__54108);
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54108__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var label_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54108__$1,new cljs.core.Keyword(null,"label-key","label-key",1868394642));
cljs.core.chunk_append(b__54107,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(label_key)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-medium.mr-1","span.font-medium.mr-1",-1994988386),count], null),frontend.components.rtc.indicator.asset_status_label(label_key)], null));

var G__54187 = (i__54106 + (1));
i__54106 = G__54187;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54107),frontend$components$rtc$indicator$details_$_iter__54104(cljs.core.chunk_rest(s__54105__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54107),null);
}
} else {
var map__54109 = cljs.core.first(s__54105__$2);
var map__54109__$1 = cljs.core.__destructure_map(map__54109);
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54109__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var label_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54109__$1,new cljs.core.Keyword(null,"label-key","label-key",1868394642));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(label_key)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-medium.mr-1","span.font-medium.mr-1",-1994988386),count], null),frontend.components.rtc.indicator.asset_status_label(label_key)], null),frontend$components$rtc$indicator$details_$_iter__54104(cljs.core.rest(s__54105__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(asset_rows);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-medium.mr-1","span.font-medium.mr-1",-1994988386),(function (){var or__5142__auto__ = pending_server_ops;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})()], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync","pending-server-changes","sync/pending-server-changes",1975079700)], 0))], null),frontend.components.rtc.indicator.missing_asset_files(missing_asset_upload_files),frontend.components.rtc.indicator.assets_progressing(asset_progress),(function (){var temp__5825__auto__ = cljs.core.some((function (l){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rtc.log","push-local-update","rtc.log/push-local-update",-860881879),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(l))){
return l;
} else {
return null;
}
}),misc_logs);
if(cljs.core.truth_(temp__5825__auto__)){
var latest_log = temp__5825__auto__;
var temp__5825__auto____$1 = new cljs.core.Keyword(null,"created-at","created-at",-89248644).cljs$core$IFn$_invoke$arity$1(latest_log);
if(cljs.core.truth_(temp__5825__auto____$1)){
var time = temp__5825__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm","div.text-sm",1753784969),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync","last-synced-time-label","sync/last-synced-time-label",624073921),frontend.context.i18n.locale_format_date.cljs$core$IFn$_invoke$arity$1(time)], 0))], null);
} else {
return null;
}
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.fade-link.text-sm","a.fade-link.text-sm",235077236),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__54110 = cljs.core.not(expand_debug_QMARK_);
return (set_expand_debug_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_expand_debug_BANG_.cljs$core$IFn$_invoke$arity$1(G__54110) : set_expand_debug_BANG_.call(null,G__54110));
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync","more-debug-info","sync/more-debug-info",-2131854189)], 0))], null),(cljs.core.truth_(expand_debug_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rtc-info-debug","div.rtc-info-debug",-517116522),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.select-text","pre.select-text",896223886),(function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__54111_54188 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__54112_54189 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__54113_54190 = true;
var _STAR_print_fn_STAR__temp_val__54114_54191 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54113_54190);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54114_54191);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((function (){var G__54115 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pending-local-ops","pending-local-ops",-266254177),pending_local_ops], null);
var G__54115__$1 = (cljs.core.truth_(download_logs)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54115,new cljs.core.Keyword(null,"download","download",-300081668),download_logs):G__54115);
var G__54115__$2 = (cljs.core.truth_(upload_logs)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54115__$1,new cljs.core.Keyword(null,"upload","upload",-255769218),upload_logs):G__54115__$1);
var G__54115__$3 = (cljs.core.truth_(misc_logs)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54115__$2,new cljs.core.Keyword(null,"misc","misc",-222218601),misc_logs):G__54115__$2);
var G__54115__$4 = (cljs.core.truth_(graph_uuid)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54115__$3,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),graph_uuid):G__54115__$3);
var G__54115__$5 = (cljs.core.truth_(local_tx)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54115__$4,new cljs.core.Keyword(null,"local-tx","local-tx",1729212201),local_tx):G__54115__$4);
var G__54115__$6 = (cljs.core.truth_(remote_tx)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54115__$5,new cljs.core.Keyword(null,"remote-tx","remote-tx",-1423802481),remote_tx):G__54115__$5);
var G__54115__$7 = (cljs.core.truth_((function (){var and__5140__auto__ = show_checksums_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return local_checksum;
} else {
return and__5140__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54115__$6,new cljs.core.Keyword(null,"local-checksum","local-checksum",-629254768),local_checksum):G__54115__$6);
var G__54115__$8 = (cljs.core.truth_((function (){var and__5140__auto__ = show_checksums_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return remote_checksum;
} else {
return and__5140__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54115__$7,new cljs.core.Keyword(null,"remote-checksum","remote-checksum",363753456),remote_checksum):G__54115__$7);
if(cljs.core.truth_(rtc_state)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54115__$8,new cljs.core.Keyword(null,"rtc-state","rtc-state",1931374921),rtc_state);
} else {
return G__54115__$8;
}
})());
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54112_54189);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54111_54188);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})()], null)], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rtc_state,new cljs.core.Keyword(null,"open","open",-1763596448)))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-4","div.mt-4",-1531088843),(function (){var G__54116 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.db_based.sync._LT_rtc_start_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stop-before-start?","stop-before-start?",1190543403),true], null)], 0));
})], null);
var G__54117 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync","start-sync","sync/start-sync",-899047938)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__54116,G__54117) : logseq.shui.ui.button.call(null,G__54116,G__54117));
})()], null))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$rtc$indicator$details__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__54118 = cljs.core.first(args__31746__auto__);
var G__54119 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__54118,G__54119) : io.factorhouse.hsx.core.obj_get.call(null,G__54118,G__54119));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"details","details",-697640358,null),args__31746__auto__),frontend$components$rtc$indicator$details,args__31746__auto__,null);
}
};
var frontend$components$rtc$indicator$details = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__54192__i = 0, G__54192__a = new Array(arguments.length -  0);
while (G__54192__i < G__54192__a.length) {G__54192__a[G__54192__i] = arguments[G__54192__i + 0]; ++G__54192__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__54192__a,0,null);
} 
return frontend$components$rtc$indicator$details__delegate.call(this,args__31746__auto__);};
frontend$components$rtc$indicator$details.cljs$lang$maxFixedArity = 0;
frontend$components$rtc$indicator$details.cljs$lang$applyTo = (function (arglist__54193){
var args__31746__auto__ = cljs.core.seq(arglist__54193);
return frontend$components$rtc$indicator$details__delegate(args__31746__auto__);
});
frontend$components$rtc$indicator$details.cljs$core$IFn$_invoke$arity$variadic = frontend$components$rtc$indicator$details__delegate;
return frontend$components$rtc$indicator$details;
})()
;
var memo_comp__31747__auto__ = (function (){var G__54120 = comp__31745__auto__;
var G__54121 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__54120,G__54121) : io.factorhouse.hsx.core.react_memo.call(null,G__54120,G__54121));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"details");

return comp__31745__auto__;
})();
frontend.components.rtc.indicator.indicator = (function (){var render_fn__31744__auto__ = (function frontend$components$rtc$indicator$indicator(){
var detail_info = frontend.components.rtc.indicator.use_detail_info();
var _ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("auth","current-login-user","auth/current-login-user",2127074079)], null));
var online_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("network","online?","network/online?",1306822774)], null));
var rtc_state = new cljs.core.Keyword(null,"rtc-state","rtc-state",1931374921).cljs$core$IFn$_invoke$arity$1(detail_info);
var unpushed_block_update_count = new cljs.core.Keyword(null,"pending-local-ops","pending-local-ops",-266254177).cljs$core$IFn$_invoke$arity$1(detail_info);
var pending_asset_ops = new cljs.core.Keyword(null,"pending-asset-ops","pending-asset-ops",-1886040529).cljs$core$IFn$_invoke$arity$1(detail_info);
var pending_server_ops = new cljs.core.Keyword(null,"pending-server-ops","pending-server-ops",42835834).cljs$core$IFn$_invoke$arity$1(detail_info);
var map__54123 = detail_info;
var map__54123__$1 = cljs.core.__destructure_map(map__54123);
var local_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54123__$1,new cljs.core.Keyword(null,"local-tx","local-tx",1729212201));
var remote_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54123__$1,new cljs.core.Keyword(null,"remote-tx","remote-tx",-1423802481));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__rtc-sync","div.cp__rtc-sync",702697221),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hidden","div.hidden",-470755407),new cljs.core.PersistentArrayMap(null, 1, ["data-testid","rtc-tx"], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"local-tx","local-tx",1729212201),local_tx,new cljs.core.Keyword(null,"remote-tx","remote-tx",-1423802481),remote_tx], null)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__rtc-sync-indicator.flex.flex-row.items-center.gap-1","div.cp__rtc-sync-indicator.flex.flex-row.items-center.gap-1",-1055548242),logseq.shui.ui.button_ghost_icon(new cljs.core.Keyword(null,"cloud","cloud",-1976521303),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__54122_SHARP_){
var G__54124 = p1__54122_SHARP_.target;
var G__54125 = frontend.components.rtc.indicator.details();
var G__54126 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"align","align",1964212802),"end",new cljs.core.Keyword(null,"dropdown-menu?","dropdown-menu?",-682398029),true], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__54124,G__54125,G__54126) : logseq.shui.ui.popup_show_BANG_.call(null,G__54124,G__54125,G__54126));
}),new cljs.core.Keyword(null,"class","class",-2030961996),frontend.components.rtc.indicator.indicator_button_class(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"online?","online?",-1144837492),online_QMARK_,new cljs.core.Keyword(null,"rtc-state","rtc-state",1931374921),rtc_state,new cljs.core.Keyword(null,"pending-local-ops","pending-local-ops",-266254177),unpushed_block_update_count,new cljs.core.Keyword(null,"pending-asset-ops","pending-asset-ops",-1886040529),pending_asset_ops,new cljs.core.Keyword(null,"pending-server-ops","pending-server-ops",42835834),pending_server_ops], null))], null))], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$rtc$indicator$indicator__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__54127 = cljs.core.first(args__31746__auto__);
var G__54128 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__54127,G__54128) : io.factorhouse.hsx.core.obj_get.call(null,G__54127,G__54128));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"indicator","indicator",-726216132,null),args__31746__auto__),frontend$components$rtc$indicator$indicator,args__31746__auto__,null);
}
};
var frontend$components$rtc$indicator$indicator = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__54194__i = 0, G__54194__a = new Array(arguments.length -  0);
while (G__54194__i < G__54194__a.length) {G__54194__a[G__54194__i] = arguments[G__54194__i + 0]; ++G__54194__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__54194__a,0,null);
} 
return frontend$components$rtc$indicator$indicator__delegate.call(this,args__31746__auto__);};
frontend$components$rtc$indicator$indicator.cljs$lang$maxFixedArity = 0;
frontend$components$rtc$indicator$indicator.cljs$lang$applyTo = (function (arglist__54195){
var args__31746__auto__ = cljs.core.seq(arglist__54195);
return frontend$components$rtc$indicator$indicator__delegate(args__31746__auto__);
});
frontend$components$rtc$indicator$indicator.cljs$core$IFn$_invoke$arity$variadic = frontend$components$rtc$indicator$indicator__delegate;
return frontend$components$rtc$indicator$indicator;
})()
;
var memo_comp__31747__auto__ = (function (){var G__54129 = comp__31745__auto__;
var G__54130 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__54129,G__54130) : io.factorhouse.hsx.core.react_memo.call(null,G__54129,G__54130));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"indicator");

return comp__31745__auto__;
})();
frontend.components.rtc.indicator._STAR_accumulated_download_logs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
if(frontend.config.publishing_QMARK_){
} else {
cljs.core.add_watch(frontend.handler.db_based.rtc_flows.rtc_download_log,new cljs.core.Keyword("frontend.components.rtc.indicator","update-accumulated-download-logs","frontend.components.rtc.indicator/update-accumulated-download-logs",-2072245028),(function (_,___$1,___$2,log){
if(cljs.core.truth_(log)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"download-completed","download-completed",-1038223761),new cljs.core.Keyword(null,"sub-type","sub-type",-997954412).cljs$core$IFn$_invoke$arity$1(log))){
return cljs.core.reset_BANG_(frontend.components.rtc.indicator._STAR_accumulated_download_logs,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.components.rtc.indicator._STAR_accumulated_download_logs,(function (logs){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((20),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(logs,log));
}));
}
} else {
return null;
}
}));
}
frontend.components.rtc.indicator._STAR_accumulated_upload_logs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
if(frontend.config.publishing_QMARK_){
} else {
cljs.core.add_watch(frontend.handler.db_based.rtc_flows.rtc_upload_log,new cljs.core.Keyword("frontend.components.rtc.indicator","update-accumulated-upload-logs","frontend.components.rtc.indicator/update-accumulated-upload-logs",1470961731),(function (_,___$1,___$2,log){
if(cljs.core.truth_(log)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"upload-completed","upload-completed",-769495446),new cljs.core.Keyword(null,"sub-type","sub-type",-997954412).cljs$core$IFn$_invoke$arity$1(log))){
return cljs.core.reset_BANG_(frontend.components.rtc.indicator._STAR_accumulated_upload_logs,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.components.rtc.indicator._STAR_accumulated_upload_logs,(function (logs){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((20),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(logs,log));
}));
}
} else {
return null;
}
}));
}
frontend.components.rtc.indicator.current_graph_logs = (function frontend$components$rtc$indicator$current_graph_logs(logs){
var temp__5825__auto__ = cljs.core.first(logs);
if(cljs.core.truth_(temp__5825__auto__)){
var first_log = temp__5825__auto__;
var graph_uuid = new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522).cljs$core$IFn$_invoke$arity$1(first_log);
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (log){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(graph_uuid)),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522).cljs$core$IFn$_invoke$arity$1(log))));
}),logs);
} else {
return null;
}
});
frontend.components.rtc.indicator.log_row_key = (function frontend$components$rtc$indicator$log_row_key(prefix,idx,log){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522).cljs$core$IFn$_invoke$arity$1(log))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sub-type","sub-type",-997954412).cljs$core$IFn$_invoke$arity$1(log))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(log))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx));
});
frontend.components.rtc.indicator.downloading_logs = (function (){var render_fn__31744__auto__ = (function frontend$components$rtc$indicator$downloading_logs(){
var download_logs = frontend.components.rtc.indicator.current_graph_logs(logseq.shui.hooks.use_atom_value(frontend.components.rtc.indicator._STAR_accumulated_download_logs));
if(cljs.core.seq(download_logs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-1","div.flex.flex-col.gap-1",1246857632),(function (){var iter__5628__auto__ = (function frontend$components$rtc$indicator$downloading_logs_$_iter__54131(s__54132){
return (new cljs.core.LazySeq(null,(function (){
var s__54132__$1 = s__54132;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__54132__$1);
if(temp__5825__auto__){
var s__54132__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54132__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__54132__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__54134 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__54133 = (0);
while(true){
if((i__54133 < size__5627__auto__)){
var vec__54135 = cljs.core._nth(c__5626__auto__,i__54133);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54135,(0),null);
var log = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54135,(1),null);
cljs.core.chunk_append(b__54134,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),clojure.string.capitalize(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(log))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),frontend.components.rtc.indicator.log_row_key("download",idx,log)], null)));

var G__54196 = (i__54133 + (1));
i__54133 = G__54196;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54134),frontend$components$rtc$indicator$downloading_logs_$_iter__54131(cljs.core.chunk_rest(s__54132__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54134),null);
}
} else {
var vec__54138 = cljs.core.first(s__54132__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54138,(0),null);
var log = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54138,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),clojure.string.capitalize(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(log))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),frontend.components.rtc.indicator.log_row_key("download",idx,log)], null)),frontend$components$rtc$indicator$downloading_logs_$_iter__54131(cljs.core.rest(s__54132__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,download_logs));
})()], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$rtc$indicator$downloading_logs__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__54141 = cljs.core.first(args__31746__auto__);
var G__54142 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__54141,G__54142) : io.factorhouse.hsx.core.obj_get.call(null,G__54141,G__54142));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"downloading-logs","downloading-logs",-700464562,null),args__31746__auto__),frontend$components$rtc$indicator$downloading_logs,args__31746__auto__,null);
}
};
var frontend$components$rtc$indicator$downloading_logs = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__54197__i = 0, G__54197__a = new Array(arguments.length -  0);
while (G__54197__i < G__54197__a.length) {G__54197__a[G__54197__i] = arguments[G__54197__i + 0]; ++G__54197__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__54197__a,0,null);
} 
return frontend$components$rtc$indicator$downloading_logs__delegate.call(this,args__31746__auto__);};
frontend$components$rtc$indicator$downloading_logs.cljs$lang$maxFixedArity = 0;
frontend$components$rtc$indicator$downloading_logs.cljs$lang$applyTo = (function (arglist__54198){
var args__31746__auto__ = cljs.core.seq(arglist__54198);
return frontend$components$rtc$indicator$downloading_logs__delegate(args__31746__auto__);
});
frontend$components$rtc$indicator$downloading_logs.cljs$core$IFn$_invoke$arity$variadic = frontend$components$rtc$indicator$downloading_logs__delegate;
return frontend$components$rtc$indicator$downloading_logs;
})()
;
var memo_comp__31747__auto__ = (function (){var G__54143 = comp__31745__auto__;
var G__54144 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__54143,G__54144) : io.factorhouse.hsx.core.react_memo.call(null,G__54143,G__54144));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"downloading-logs");

return comp__31745__auto__;
})();
frontend.components.rtc.indicator.uploading_logs = (function (){var render_fn__31744__auto__ = (function frontend$components$rtc$indicator$uploading_logs(){
var upload_logs = frontend.components.rtc.indicator.current_graph_logs(logseq.shui.hooks.use_atom_value(frontend.components.rtc.indicator._STAR_accumulated_upload_logs));
if(cljs.core.seq(upload_logs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.capitalize.flex.flex-col.gap-1","div.capitalize.flex.flex-col.gap-1",636350723),(function (){var iter__5628__auto__ = (function frontend$components$rtc$indicator$uploading_logs_$_iter__54145(s__54146){
return (new cljs.core.LazySeq(null,(function (){
var s__54146__$1 = s__54146;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__54146__$1);
if(temp__5825__auto__){
var s__54146__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54146__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__54146__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__54148 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__54147 = (0);
while(true){
if((i__54147 < size__5627__auto__)){
var vec__54149 = cljs.core._nth(c__5626__auto__,i__54147);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54149,(0),null);
var log = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54149,(1),null);
cljs.core.chunk_append(b__54148,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(log)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),frontend.components.rtc.indicator.log_row_key("upload",idx,log)], null)));

var G__54199 = (i__54147 + (1));
i__54147 = G__54199;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54148),frontend$components$rtc$indicator$uploading_logs_$_iter__54145(cljs.core.chunk_rest(s__54146__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54148),null);
}
} else {
var vec__54152 = cljs.core.first(s__54146__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54152,(0),null);
var log = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54152,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(log)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),frontend.components.rtc.indicator.log_row_key("upload",idx,log)], null)),frontend$components$rtc$indicator$uploading_logs_$_iter__54145(cljs.core.rest(s__54146__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.reverse(upload_logs)));
})()], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$rtc$indicator$uploading_logs__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__54155 = cljs.core.first(args__31746__auto__);
var G__54156 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__54155,G__54156) : io.factorhouse.hsx.core.obj_get.call(null,G__54155,G__54156));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"uploading-logs","uploading-logs",780994939,null),args__31746__auto__),frontend$components$rtc$indicator$uploading_logs,args__31746__auto__,null);
}
};
var frontend$components$rtc$indicator$uploading_logs = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__54200__i = 0, G__54200__a = new Array(arguments.length -  0);
while (G__54200__i < G__54200__a.length) {G__54200__a[G__54200__i] = arguments[G__54200__i + 0]; ++G__54200__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__54200__a,0,null);
} 
return frontend$components$rtc$indicator$uploading_logs__delegate.call(this,args__31746__auto__);};
frontend$components$rtc$indicator$uploading_logs.cljs$lang$maxFixedArity = 0;
frontend$components$rtc$indicator$uploading_logs.cljs$lang$applyTo = (function (arglist__54201){
var args__31746__auto__ = cljs.core.seq(arglist__54201);
return frontend$components$rtc$indicator$uploading_logs__delegate(args__31746__auto__);
});
frontend$components$rtc$indicator$uploading_logs.cljs$core$IFn$_invoke$arity$variadic = frontend$components$rtc$indicator$uploading_logs__delegate;
return frontend$components$rtc$indicator$uploading_logs;
})()
;
var memo_comp__31747__auto__ = (function (){var G__54157 = comp__31745__auto__;
var G__54158 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__54157,G__54158) : io.factorhouse.hsx.core.react_memo.call(null,G__54157,G__54158));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"uploading-logs");

return comp__31745__auto__;
})();
frontend.components.rtc.indicator._STAR_downloading_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
cljs.core.add_watch(frontend.handler.db_based.rtc_flows.rtc_download_log,new cljs.core.Keyword("frontend.components.rtc.indicator","update-downloading?","frontend.components.rtc.indicator/update-downloading?",1144528406),(function (_,___$1,___$2,log){
return cljs.core.reset_BANG_(frontend.components.rtc.indicator._STAR_downloading_QMARK_,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"download-completed","download-completed",-1038223761),new cljs.core.Keyword(null,"sub-type","sub-type",-997954412).cljs$core$IFn$_invoke$arity$1(log)));
}));
frontend.components.rtc.indicator.downloading_detail = (function (){var render_fn__31744__auto__ = (function frontend$components$rtc$indicator$downloading_detail(){
if(logseq.shui.hooks.use_atom_value(frontend.components.rtc.indicator._STAR_downloading_QMARK_) === true){
var G__54160 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"opacity-50",new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__54159_SHARP_){
var G__54162 = p1__54159_SHARP_.target;
var G__54163 = frontend.components.rtc.indicator.downloading_logs();
var G__54164 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align","align",1964212802),"end"], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__54162,G__54163,G__54164) : logseq.shui.ui.popup_show_BANG_.call(null,G__54162,G__54163,G__54164));
})], null);
var G__54161 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync","downloading","sync/downloading",-217330580)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__54160,G__54161) : logseq.shui.ui.button.call(null,G__54160,G__54161));
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$rtc$indicator$downloading_detail__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__54165 = cljs.core.first(args__31746__auto__);
var G__54166 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__54165,G__54166) : io.factorhouse.hsx.core.obj_get.call(null,G__54165,G__54166));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"downloading-detail","downloading-detail",-174153892,null),args__31746__auto__),frontend$components$rtc$indicator$downloading_detail,args__31746__auto__,null);
}
};
var frontend$components$rtc$indicator$downloading_detail = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__54202__i = 0, G__54202__a = new Array(arguments.length -  0);
while (G__54202__i < G__54202__a.length) {G__54202__a[G__54202__i] = arguments[G__54202__i + 0]; ++G__54202__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__54202__a,0,null);
} 
return frontend$components$rtc$indicator$downloading_detail__delegate.call(this,args__31746__auto__);};
frontend$components$rtc$indicator$downloading_detail.cljs$lang$maxFixedArity = 0;
frontend$components$rtc$indicator$downloading_detail.cljs$lang$applyTo = (function (arglist__54203){
var args__31746__auto__ = cljs.core.seq(arglist__54203);
return frontend$components$rtc$indicator$downloading_detail__delegate(args__31746__auto__);
});
frontend$components$rtc$indicator$downloading_detail.cljs$core$IFn$_invoke$arity$variadic = frontend$components$rtc$indicator$downloading_detail__delegate;
return frontend$components$rtc$indicator$downloading_detail;
})()
;
var memo_comp__31747__auto__ = (function (){var G__54167 = comp__31745__auto__;
var G__54168 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__54167,G__54168) : io.factorhouse.hsx.core.react_memo.call(null,G__54167,G__54168));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"downloading-detail");

return comp__31745__auto__;
})();
frontend.components.rtc.indicator._STAR_uploading_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
cljs.core.add_watch(frontend.handler.db_based.rtc_flows.rtc_upload_log,new cljs.core.Keyword("frontend.components.rtc.indicator","update-uploading?","frontend.components.rtc.indicator/update-uploading?",1803545742),(function (_,___$1,___$2,log){
return cljs.core.reset_BANG_(frontend.components.rtc.indicator._STAR_uploading_QMARK_,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"upload-completed","upload-completed",-769495446),new cljs.core.Keyword(null,"sub-type","sub-type",-997954412).cljs$core$IFn$_invoke$arity$1(log)));
}));
frontend.components.rtc.indicator.on_upload_finished_task = (function frontend$components$rtc$indicator$on_upload_finished_task(on_success){
var watch_key = cljs.core.random_uuid();
cljs.core.add_watch(frontend.handler.db_based.rtc_flows.rtc_upload_log,watch_key,(function (_,___$1,___$2,log){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"upload-completed","upload-completed",-769495446),new cljs.core.Keyword(null,"sub-type","sub-type",-997954412).cljs$core$IFn$_invoke$arity$1(log))){
cljs.core.remove_watch(frontend.handler.db_based.rtc_flows.rtc_upload_log,watch_key);

return (on_success.cljs$core$IFn$_invoke$arity$0 ? on_success.cljs$core$IFn$_invoke$arity$0() : on_success.call(null));
} else {
return null;
}
}));

return (function (){
return cljs.core.remove_watch(frontend.handler.db_based.rtc_flows.rtc_upload_log,watch_key);
});
});
frontend.components.rtc.indicator.uploading_detail = (function (){var render_fn__31744__auto__ = (function frontend$components$rtc$indicator$uploading_detail(){
if(logseq.shui.hooks.use_atom_value(frontend.components.rtc.indicator._STAR_uploading_QMARK_) === true){
var G__54170 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"opacity-50",new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__54169_SHARP_){
var G__54172 = p1__54169_SHARP_.target;
var G__54173 = frontend.components.rtc.indicator.uploading_logs();
var G__54174 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align","align",1964212802),"end"], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__54172,G__54173,G__54174) : logseq.shui.ui.popup_show_BANG_.call(null,G__54172,G__54173,G__54174));
})], null);
var G__54171 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync","uploading","sync/uploading",1065117022)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__54170,G__54171) : logseq.shui.ui.button.call(null,G__54170,G__54171));
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$rtc$indicator$uploading_detail__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__54175 = cljs.core.first(args__31746__auto__);
var G__54176 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__54175,G__54176) : io.factorhouse.hsx.core.obj_get.call(null,G__54175,G__54176));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"uploading-detail","uploading-detail",-1103698033,null),args__31746__auto__),frontend$components$rtc$indicator$uploading_detail,args__31746__auto__,null);
}
};
var frontend$components$rtc$indicator$uploading_detail = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__54204__i = 0, G__54204__a = new Array(arguments.length -  0);
while (G__54204__i < G__54204__a.length) {G__54204__a[G__54204__i] = arguments[G__54204__i + 0]; ++G__54204__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__54204__a,0,null);
} 
return frontend$components$rtc$indicator$uploading_detail__delegate.call(this,args__31746__auto__);};
frontend$components$rtc$indicator$uploading_detail.cljs$lang$maxFixedArity = 0;
frontend$components$rtc$indicator$uploading_detail.cljs$lang$applyTo = (function (arglist__54205){
var args__31746__auto__ = cljs.core.seq(arglist__54205);
return frontend$components$rtc$indicator$uploading_detail__delegate(args__31746__auto__);
});
frontend$components$rtc$indicator$uploading_detail.cljs$core$IFn$_invoke$arity$variadic = frontend$components$rtc$indicator$uploading_detail__delegate;
return frontend$components$rtc$indicator$uploading_detail;
})()
;
var memo_comp__31747__auto__ = (function (){var G__54177 = comp__31745__auto__;
var G__54178 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__54177,G__54178) : io.factorhouse.hsx.core.react_memo.call(null,G__54177,G__54178));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"uploading-detail");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.rtc.indicator.js.map
