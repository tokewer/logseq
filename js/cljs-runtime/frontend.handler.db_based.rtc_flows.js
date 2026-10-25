goog.provide('frontend.handler.db_based.rtc_flows');
frontend.handler.db_based.rtc_flows.rtc_log = (function (){var state_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var source = frontend.flows.sub_atom(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rtc","log","rtc/log",-1596481285)], null));
cljs.core.add_watch(source,new cljs.core.Keyword("frontend.handler.db-based.rtc-flows","rtc-log","frontend.handler.db-based.rtc-flows/rtc-log",-241703298),(function (_,___$1,___$2,log){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"skip","skip",602715391),new cljs.core.Keyword(null,"sub-type","sub-type",-997954412).cljs$core$IFn$_invoke$arity$1(log))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("rtc.log","apply-remote-update","rtc.log/apply-remote-update",-1307545458),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(log))))){
return null;
} else {
return cljs.core.reset_BANG_(state_STAR_,log);
}
}));

return state_STAR_;
})();
frontend.handler.db_based.rtc_flows.rtc_download_log = (function (){var state_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
cljs.core.add_watch(frontend.handler.db_based.rtc_flows.rtc_log,new cljs.core.Keyword("frontend.handler.db-based.rtc-flows","rtc-download-log","frontend.handler.db-based.rtc-flows/rtc-download-log",-948994974),(function (_,___$1,___$2,log){
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("rtc.log","download","rtc.log/download",-2144210573),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(log))){
return cljs.core.reset_BANG_(state_STAR_,log);
} else {
return null;
}
}));

return state_STAR_;
})();
frontend.handler.db_based.rtc_flows.rtc_upload_log = (function (){var state_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
cljs.core.add_watch(frontend.handler.db_based.rtc_flows.rtc_log,new cljs.core.Keyword("frontend.handler.db-based.rtc-flows","rtc-upload-log","frontend.handler.db-based.rtc-flows/rtc-upload-log",-1046344655),(function (_,___$1,___$2,log){
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("rtc.log","upload","rtc.log/upload",-1832742059),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(log))){
return cljs.core.reset_BANG_(state_STAR_,log);
} else {
return null;
}
}));

return state_STAR_;
})();
frontend.handler.db_based.rtc_flows.rtc_misc_log = (function (){var state_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
cljs.core.add_watch(frontend.handler.db_based.rtc_flows.rtc_log,new cljs.core.Keyword("frontend.handler.db-based.rtc-flows","rtc-misc-log","frontend.handler.db-based.rtc-flows/rtc-misc-log",-232156239),(function (_,___$1,___$2,log){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rtc.log","download","rtc.log/download",-2144210573),null,new cljs.core.Keyword("rtc.log","upload","rtc.log/upload",-1832742059),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(log))){
return null;
} else {
return cljs.core.reset_BANG_(state_STAR_,log);
}
}));

return state_STAR_;
})();
frontend.handler.db_based.rtc_flows.rtc_state = frontend.flows.sub_atom(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rtc","state","rtc/state",-1988572624)], null));
/**
 * Updates when it's time to restart rtc loop.
 * conditions:
 * - user logged in
 * - no rtc loop running now
 * - last rtc stop-reason is websocket message timeout
 * - online
 * - throttle 5000ms
 */
frontend.handler.db_based.rtc_flows.rtc_try_restart = (function (){var state_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var last_emitted_at = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var update_BANG_ = (function (){
var map__92827 = cljs.core.deref(frontend.handler.db_based.rtc_flows.rtc_state);
var map__92827__$1 = cljs.core.__destructure_map(map__92827);
var rtc_lock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92827__$1,new cljs.core.Keyword(null,"rtc-lock","rtc-lock",1338966560));
var last_stop_exception_ex_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92827__$1,new cljs.core.Keyword(null,"last-stop-exception-ex-data","last-stop-exception-ex-data",800047332));
var graph_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92827__$1,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522));
var login_user = cljs.core.deref(frontend.flows.current_login_user);
var online_QMARK_ = cljs.core.deref(frontend.flows.network_online_QMARK_);
var now = logseq.common.util.time_ms();
if(cljs.core.truth_((function (){var and__5140__auto__ = online_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (((!((new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(login_user) == null)))) && ((((!((graph_uuid == null)))) && (((cljs.core.not(rtc_lock)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("rtc.exception","ws-timeout","rtc.exception/ws-timeout",456034739),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(last_stop_exception_ex_data))) && (((now - cljs.core.deref(last_emitted_at)) >= (5000))))))))));
} else {
return and__5140__auto__;
}
})())){
cljs.core.reset_BANG_(last_emitted_at,now);

return cljs.core.reset_BANG_(state_STAR_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),graph_uuid,new cljs.core.Keyword(null,"t","t",-1397832519),now], null));
} else {
return null;
}
});
var seq__92830_92947 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("frontend.handler.db-based.rtc-flows","rtc-try-restart-state","frontend.handler.db-based.rtc-flows/rtc-try-restart-state",1419024767),frontend.handler.db_based.rtc_flows.rtc_state,new cljs.core.Keyword("frontend.handler.db-based.rtc-flows","rtc-try-restart-online","frontend.handler.db-based.rtc-flows/rtc-try-restart-online",1498512115),frontend.flows.network_online_QMARK_,new cljs.core.Keyword("frontend.handler.db-based.rtc-flows","rtc-try-restart-user","frontend.handler.db-based.rtc-flows/rtc-try-restart-user",-1166873980),frontend.flows.current_login_user], null));
var chunk__92831_92948 = null;
var count__92832_92949 = (0);
var i__92833_92950 = (0);
while(true){
if((i__92833_92950 < count__92832_92949)){
var vec__92857_92953 = chunk__92831_92948.cljs$core$IIndexed$_nth$arity$2(null,i__92833_92950);
var watch_key_92954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92857_92953,(0),null);
var atom_SINGLEQUOTE__92955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92857_92953,(1),null);
cljs.core.add_watch(atom_SINGLEQUOTE__92955,watch_key_92954,((function (seq__92830_92947,chunk__92831_92948,count__92832_92949,i__92833_92950,vec__92857_92953,watch_key_92954,atom_SINGLEQUOTE__92955,state_STAR_,last_emitted_at,update_BANG_){
return (function (_,___$1,___$2,___$3){
return update_BANG_();
});})(seq__92830_92947,chunk__92831_92948,count__92832_92949,i__92833_92950,vec__92857_92953,watch_key_92954,atom_SINGLEQUOTE__92955,state_STAR_,last_emitted_at,update_BANG_))
);


var G__92960 = seq__92830_92947;
var G__92961 = chunk__92831_92948;
var G__92962 = count__92832_92949;
var G__92963 = (i__92833_92950 + (1));
seq__92830_92947 = G__92960;
chunk__92831_92948 = G__92961;
count__92832_92949 = G__92962;
i__92833_92950 = G__92963;
continue;
} else {
var temp__5825__auto___92964 = cljs.core.seq(seq__92830_92947);
if(temp__5825__auto___92964){
var seq__92830_92969__$1 = temp__5825__auto___92964;
if(cljs.core.chunked_seq_QMARK_(seq__92830_92969__$1)){
var c__5673__auto___92970 = cljs.core.chunk_first(seq__92830_92969__$1);
var G__92971 = cljs.core.chunk_rest(seq__92830_92969__$1);
var G__92972 = c__5673__auto___92970;
var G__92973 = cljs.core.count(c__5673__auto___92970);
var G__92974 = (0);
seq__92830_92947 = G__92971;
chunk__92831_92948 = G__92972;
count__92832_92949 = G__92973;
i__92833_92950 = G__92974;
continue;
} else {
var vec__92868_92975 = cljs.core.first(seq__92830_92969__$1);
var watch_key_92976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92868_92975,(0),null);
var atom_SINGLEQUOTE__92977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92868_92975,(1),null);
cljs.core.add_watch(atom_SINGLEQUOTE__92977,watch_key_92976,((function (seq__92830_92947,chunk__92831_92948,count__92832_92949,i__92833_92950,vec__92868_92975,watch_key_92976,atom_SINGLEQUOTE__92977,seq__92830_92969__$1,temp__5825__auto___92964,state_STAR_,last_emitted_at,update_BANG_){
return (function (_,___$1,___$2,___$3){
return update_BANG_();
});})(seq__92830_92947,chunk__92831_92948,count__92832_92949,i__92833_92950,vec__92868_92975,watch_key_92976,atom_SINGLEQUOTE__92977,seq__92830_92969__$1,temp__5825__auto___92964,state_STAR_,last_emitted_at,update_BANG_))
);


var G__92978 = cljs.core.next(seq__92830_92969__$1);
var G__92979 = null;
var G__92980 = (0);
var G__92981 = (0);
seq__92830_92947 = G__92978;
chunk__92831_92948 = G__92979;
count__92832_92949 = G__92980;
i__92833_92950 = G__92981;
continue;
}
} else {
}
}
break;
}

return state_STAR_;
})();
frontend.handler.db_based.rtc_flows.logout = (function (){var state_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
cljs.core.add_watch(frontend.flows.current_login_user,new cljs.core.Keyword("frontend.handler.db-based.rtc-flows","logout","frontend.handler.db-based.rtc-flows/logout",1780427840),(function (_,___$1,___$2,user){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"logout","logout",1418564329),user)){
return cljs.core.reset_BANG_(state_STAR_,new cljs.core.Keyword(null,"logout","logout",1418564329));
} else {
return null;
}
}));

return state_STAR_;
})();
frontend.handler.db_based.rtc_flows._STAR_rtc_start_trigger = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
frontend.handler.db_based.rtc_flows.trigger_rtc_start = (function frontend$handler$db_based$rtc_flows$trigger_rtc_start(repo){
if((!((repo == null)))){
} else {
throw (new Error("Assert failed: (some? repo)"));
}

return cljs.core.reset_BANG_(frontend.handler.db_based.rtc_flows._STAR_rtc_start_trigger,repo);
});
frontend.handler.db_based.rtc_flows.document_visible__GT_restart_event = (function frontend$handler$db_based$rtc_flows$document_visible__GT_restart_event(visibility){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("visible",visibility)){
return new cljs.core.Keyword(null,"document-visible&rtc-not-running","document-visible&rtc-not-running",-1278071938);
} else {
return null;
}
});
frontend.handler.db_based.rtc_flows.network_online__GT_restart_event = (function frontend$handler$db_based$rtc_flows$network_online__GT_restart_event(online_QMARK_){
if(cljs.core.truth_(online_QMARK_)){
return new cljs.core.Keyword(null,"network-online&rtc-not-running","network-online&rtc-not-running",-1315392544);
} else {
return null;
}
});
frontend.handler.db_based.rtc_flows.mobile_app_active__GT_restart_event = (function frontend$handler$db_based$rtc_flows$mobile_app_active__GT_restart_event(app_active_QMARK_){
if(cljs.core.truth_(app_active_QMARK_)){
return new cljs.core.Keyword(null,"mobile-app-active&rtc-not-running","mobile-app-active&rtc-not-running",-334043858);
} else {
return null;
}
});
frontend.handler.db_based.rtc_flows.trigger_start_rtc = (function (){var state_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var timeout_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var emit_BANG_ = (function (event){
if(cljs.core.truth_(new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.flows.current_login_user)))){
var temp__5825__auto___92986 = cljs.core.deref(timeout_id);
if(cljs.core.truth_(temp__5825__auto___92986)){
var id_92987 = temp__5825__auto___92986;
clearTimeout(id_92987);
} else {
}

return cljs.core.reset_BANG_(timeout_id,setTimeout((function (){
return cljs.core.reset_BANG_(state_STAR_,event);
}),(50)));
} else {
return null;
}
});
cljs.core.add_watch(frontend.flows.current_login_user,new cljs.core.Keyword("frontend.handler.db-based.rtc-flows","trigger-start-rtc-login","frontend.handler.db-based.rtc-flows/trigger-start-rtc-login",-549567607),(function (_,___$1,___$2,user){
if(cljs.core.truth_(new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(user))){
return emit_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519)], null));
} else {
return null;
}
}));

cljs.core.add_watch(frontend.flows.current_repo,new cljs.core.Keyword("frontend.handler.db-based.rtc-flows","trigger-start-rtc-repo","frontend.handler.db-based.rtc-flows/trigger-start-rtc-repo",1886593044),(function (_,___$1,___$2,repo){
if(cljs.core.truth_(repo)){
return emit_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph-switch","graph-switch",1110417387),repo], null));
} else {
return null;
}
}));

cljs.core.add_watch(frontend.handler.db_based.rtc_flows._STAR_rtc_start_trigger,new cljs.core.Keyword("frontend.handler.db-based.rtc-flows","trigger-start-rtc-manual","frontend.handler.db-based.rtc-flows/trigger-start-rtc-manual",1126719768),(function (_,___$1,___$2,repo){
if(cljs.core.truth_(repo)){
return emit_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trigger-rtc","trigger-rtc",-286448335),repo], null));
} else {
return null;
}
}));

cljs.core.add_watch(frontend.flows.document_visibility_state,new cljs.core.Keyword("frontend.handler.db-based.rtc-flows","trigger-start-rtc-visible","frontend.handler.db-based.rtc-flows/trigger-start-rtc-visible",59577011),(function (_,___$1,___$2,visibility){
var temp__5825__auto__ = frontend.handler.db_based.rtc_flows.document_visible__GT_restart_event(visibility);
if(cljs.core.truth_(temp__5825__auto__)){
var event = temp__5825__auto__;
return emit_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null));
} else {
return null;
}
}));

cljs.core.add_watch(frontend.flows.network_online_QMARK_,new cljs.core.Keyword("frontend.handler.db-based.rtc-flows","trigger-start-rtc-online","frontend.handler.db-based.rtc-flows/trigger-start-rtc-online",1064095783),(function (_,___$1,___$2,online_QMARK_){
var temp__5825__auto__ = frontend.handler.db_based.rtc_flows.network_online__GT_restart_event(online_QMARK_);
if(cljs.core.truth_(temp__5825__auto__)){
var event = temp__5825__auto__;
return emit_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null));
} else {
return null;
}
}));

cljs.core.add_watch(frontend.mobile.flows._STAR_mobile_app_state,new cljs.core.Keyword("frontend.handler.db-based.rtc-flows","trigger-start-rtc-mobile-active","frontend.handler.db-based.rtc-flows/trigger-start-rtc-mobile-active",265543047),(function (_,___$1,___$2,app_active_QMARK_){
var temp__5825__auto__ = frontend.handler.db_based.rtc_flows.mobile_app_active__GT_restart_event(app_active_QMARK_);
if(cljs.core.truth_(temp__5825__auto__)){
var event = temp__5825__auto__;
return emit_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null));
} else {
return null;
}
}));

return state_STAR_;
})();

//# sourceMappingURL=frontend.handler.db_based.rtc_flows.js.map
