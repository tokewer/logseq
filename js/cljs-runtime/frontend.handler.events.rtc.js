goog.provide('frontend.handler.events.rtc');
frontend.handler.events.rtc.rtc_collaborators_dialog_QMARK_ = (function frontend$handler$events$rtc$rtc_collaborators_dialog_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rtc-collaborators","rtc-collaborators",680405025),frontend.state.get_dialog_id());
});
frontend.handler.events.rtc.close_e2ee_blocking_ui_BANG_ = (function frontend$handler$events$rtc$close_e2ee_blocking_ui_BANG_(){
if(frontend.handler.events.rtc.rtc_collaborators_dialog_QMARK_()){
} else {
(logseq.shui.ui.dialog_close_all_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dialog_close_all_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dialog_close_all_BANG_.call(null));
}

return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"download-rtc-graph","download-rtc-graph",3232266)) : logseq.shui.ui.popup_hide_BANG_.call(null,new cljs.core.Keyword(null,"download-rtc-graph","download-rtc-graph",3232266)));
});
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("rtc","decrypt-user-e2ee-private-key","rtc/decrypt-user-e2ee-private-key",1893665628),(function (p__46886){
var vec__46887 = p__46886;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46887,(0),null);
var encrypted_private_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46887,(1),null);
var private_key_promise = promesa.core.deferred();
var refresh_token = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.state.get_auth_refresh_token()));
frontend.handler.events.rtc.close_e2ee_blocking_ui_BANG_();

promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-e2ee-password","thread-api/get-e2ee-password",754926947),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([refresh_token], 0))),(function (p__46890){
var map__46891 = p__46890;
var map__46891__$1 = cljs.core.__destructure_map(map__46891);
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46891__$1,new cljs.core.Keyword(null,"password","password",417022471));
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.crypt._LT_decrypt_private_key(password,encrypted_private_key)),(function (private_key){
return promesa.protocols._promise(promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(private_key_promise,private_key));
}));
}));
})),(function (error){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.events.rtc",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-e2ee-password-failed","read-e2ee-password-failed",1047235661),error,new cljs.core.Keyword(null,"line","line",212345235),36], null)),null);
} else {
}

var G__46892 = (function (){
return frontend.components.e2ee.e2ee_password_to_decrypt_private_key(encrypted_private_key,private_key_promise);
});
var G__46893 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"auto-width?","auto-width?",93515862),true,new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onPointerDownOutside","onPointerDownOutside",404933036),(function (p1__46885_SHARP_){
return p1__46885_SHARP_.preventDefault();
})], null),new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (){
promesa.core.reject_BANG_(private_key_promise,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("input E2EE password cancelled",cljs.core.PersistentArrayMap.EMPTY));

return (logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dialog_close_BANG_.call(null));
})], null);
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2(G__46892,G__46893) : logseq.shui.ui.dialog_open_BANG_.call(null,G__46892,G__46893));
}));

return private_key_promise;
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("rtc","request-e2ee-password","rtc/request-e2ee-password",433988363),(function (p__46895){
var vec__46896 = p__46895;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46896,(0),null);
var map__46899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46896,(1),null);
var map__46899__$1 = cljs.core.__destructure_map(map__46899);
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46899__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var password_promise = promesa.core.deferred();
var decrypt_reason_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"decrypt-user-rsa-private-key","decrypt-user-rsa-private-key",495118826),reason);
frontend.handler.events.rtc.close_e2ee_blocking_ui_BANG_();

var G__46900_46962 = (function (){
if(decrypt_reason_QMARK_){
return frontend.components.e2ee.e2ee_request_password(password_promise);
} else {
return frontend.components.e2ee.e2ee_request_new_password(password_promise);
}
});
var G__46901_46963 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"auto-width?","auto-width?",93515862),true,new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onPointerDownOutside","onPointerDownOutside",404933036),(function (p1__46894_SHARP_){
return p1__46894_SHARP_.preventDefault();
})], null),new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (){
promesa.core.reject_BANG_(password_promise,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cancelled",cljs.core.PersistentArrayMap.EMPTY));

return (logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dialog_close_BANG_.call(null));
})], null);
(logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2(G__46900_46962,G__46901_46963) : logseq.shui.ui.dialog_open_BANG_.call(null,G__46900_46962,G__46901_46963));

return password_promise;
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("rtc","storage-exceed-limit","rtc/storage-exceed-limit",757157830),(function (p__46902){
var vec__46903 = p__46902;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46903,(0),null);
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync","storage-exceed-limit","sync/storage-exceed-limit",659877936)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671),false);
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("rtc","graph-count-exceed-limit","rtc/graph-count-exceed-limit",1010066001),(function (p__46906){
var vec__46907 = p__46906;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46907,(0),null);
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync","graph-count-exceed-limit","sync/graph-count-exceed-limit",996721243)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671),false);
}));
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.events !== 'undefined') && (typeof frontend.handler.events.rtc !== 'undefined') && (typeof frontend.handler.events.rtc._STAR_sync_app_state_cancel_BANG_ !== 'undefined')){
} else {
frontend.handler.events.rtc._STAR_sync_app_state_cancel_BANG_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.handler.events.rtc.sync_app_state_BANG_ = (function frontend$handler$events$rtc$sync_app_state_BANG_(){
var temp__5825__auto___46964 = cljs.core.deref(frontend.handler.events.rtc._STAR_sync_app_state_cancel_BANG_);
if(cljs.core.truth_(temp__5825__auto___46964)){
var cancel_BANG__46965 = temp__5825__auto___46964;
(cancel_BANG__46965.cljs$core$IFn$_invoke$arity$0 ? cancel_BANG__46965.cljs$core$IFn$_invoke$arity$0() : cancel_BANG__46965.call(null));
} else {
}

var state_atoms = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("user","info","user/info",-345834271),new cljs.core.Keyword("auth","id-token","auth/id-token",-332149946),new cljs.core.Keyword("auth","oauth-token-url","auth/oauth-token-url",-75786009),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword("auth","oauth-domain","auth/oauth-domain",-1446567608),new cljs.core.Keyword("auth","refresh-token","auth/refresh-token",-1024820760),new cljs.core.Keyword("auth","access-token","auth/access-token",-657486615),new cljs.core.Keyword("git","current-repo","git/current-repo",107438825),new cljs.core.Keyword("auth","oauth-client-id","auth/oauth-client-id",174297597)],[frontend.flows.sub_atom(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","info","user/info",-345834271)], null)),frontend.flows.sub_atom(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("auth","id-token","auth/id-token",-332149946)], null)),frontend.flows.sub_atom(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("auth","oauth-token-url","auth/oauth-token-url",-75786009)], null)),frontend.flows.sub_atom(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415)], null)),frontend.flows.sub_atom(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("auth","oauth-domain","auth/oauth-domain",-1446567608)], null)),frontend.flows.sub_atom(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("auth","refresh-token","auth/refresh-token",-1024820760)], null)),frontend.flows.sub_atom(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("auth","access-token","auth/access-token",-657486615)], null)),frontend.flows.current_repo,frontend.flows.sub_atom(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("auth","oauth-client-id","auth/oauth-client-id",174297597)], null))]);
var _LT_init_sync_done_QMARK_ = promesa.core.deferred();
var last_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("frontend.handler.events.rtc","not-set","frontend.handler.events.rtc/not-set",-568019954));
var app_state = (function (){
var G__46910 = cljs.core.update_vals(state_atoms,cljs.core.deref);
var G__46910__$1 = ((cljs.core.seq(frontend.config.OAUTH_DOMAIN))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46910,new cljs.core.Keyword("auth","oauth-domain","auth/oauth-domain",-1446567608),frontend.config.OAUTH_DOMAIN):G__46910);
if(cljs.core.seq(frontend.config.COGNITO_CLIENT_ID)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46910__$1,new cljs.core.Keyword("auth","oauth-client-id","auth/oauth-client-id",174297597),frontend.config.COGNITO_CLIENT_ID);
} else {
return G__46910__$1;
}
});
var sync_BANG_ = (function (){
var m = app_state();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(last_state),m)){
return null;
} else {
cljs.core.reset_BANG_(last_state,m);

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825).cljs$core$IFn$_invoke$arity$1(m))?frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","sync-app-state","thread-api/sync-app-state",1507174044),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0)):null)),(function (_){
return promesa.protocols._promise(promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$1(_LT_init_sync_done_QMARK_));
}));
}));
}
});
var seq__46912_46966 = cljs.core.seq(state_atoms);
var chunk__46913_46967 = null;
var count__46914_46968 = (0);
var i__46915_46969 = (0);
while(true){
if((i__46915_46969 < count__46914_46968)){
var vec__46934_46970 = chunk__46913_46967.cljs$core$IIndexed$_nth$arity$2(null,i__46915_46969);
var k_46971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46934_46970,(0),null);
var atom_SINGLEQUOTE__46972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46934_46970,(1),null);
cljs.core.add_watch(atom_SINGLEQUOTE__46972,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.handler.events.rtc","sync-app-state","frontend.handler.events.rtc/sync-app-state",1835053775),k_46971], null),((function (seq__46912_46966,chunk__46913_46967,count__46914_46968,i__46915_46969,vec__46934_46970,k_46971,atom_SINGLEQUOTE__46972,state_atoms,_LT_init_sync_done_QMARK_,last_state,app_state,sync_BANG_){
return (function (_,___$1,___$2,___$3){
return sync_BANG_();
});})(seq__46912_46966,chunk__46913_46967,count__46914_46968,i__46915_46969,vec__46934_46970,k_46971,atom_SINGLEQUOTE__46972,state_atoms,_LT_init_sync_done_QMARK_,last_state,app_state,sync_BANG_))
);


var G__46973 = seq__46912_46966;
var G__46974 = chunk__46913_46967;
var G__46975 = count__46914_46968;
var G__46976 = (i__46915_46969 + (1));
seq__46912_46966 = G__46973;
chunk__46913_46967 = G__46974;
count__46914_46968 = G__46975;
i__46915_46969 = G__46976;
continue;
} else {
var temp__5825__auto___46977 = cljs.core.seq(seq__46912_46966);
if(temp__5825__auto___46977){
var seq__46912_46978__$1 = temp__5825__auto___46977;
if(cljs.core.chunked_seq_QMARK_(seq__46912_46978__$1)){
var c__5673__auto___46979 = cljs.core.chunk_first(seq__46912_46978__$1);
var G__46980 = cljs.core.chunk_rest(seq__46912_46978__$1);
var G__46981 = c__5673__auto___46979;
var G__46982 = cljs.core.count(c__5673__auto___46979);
var G__46983 = (0);
seq__46912_46966 = G__46980;
chunk__46913_46967 = G__46981;
count__46914_46968 = G__46982;
i__46915_46969 = G__46983;
continue;
} else {
var vec__46937_46984 = cljs.core.first(seq__46912_46978__$1);
var k_46985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46937_46984,(0),null);
var atom_SINGLEQUOTE__46986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46937_46984,(1),null);
cljs.core.add_watch(atom_SINGLEQUOTE__46986,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.handler.events.rtc","sync-app-state","frontend.handler.events.rtc/sync-app-state",1835053775),k_46985], null),((function (seq__46912_46966,chunk__46913_46967,count__46914_46968,i__46915_46969,vec__46937_46984,k_46985,atom_SINGLEQUOTE__46986,seq__46912_46978__$1,temp__5825__auto___46977,state_atoms,_LT_init_sync_done_QMARK_,last_state,app_state,sync_BANG_){
return (function (_,___$1,___$2,___$3){
return sync_BANG_();
});})(seq__46912_46966,chunk__46913_46967,count__46914_46968,i__46915_46969,vec__46937_46984,k_46985,atom_SINGLEQUOTE__46986,seq__46912_46978__$1,temp__5825__auto___46977,state_atoms,_LT_init_sync_done_QMARK_,last_state,app_state,sync_BANG_))
);


var G__46987 = cljs.core.next(seq__46912_46978__$1);
var G__46988 = null;
var G__46989 = (0);
var G__46990 = (0);
seq__46912_46966 = G__46987;
chunk__46913_46967 = G__46988;
count__46914_46968 = G__46989;
i__46915_46969 = G__46990;
continue;
}
} else {
}
}
break;
}

sync_BANG_();

cljs.core.reset_BANG_(frontend.handler.events.rtc._STAR_sync_app_state_cancel_BANG_,(function (){
var seq__46940 = cljs.core.seq(state_atoms);
var chunk__46941 = null;
var count__46942 = (0);
var i__46943 = (0);
while(true){
if((i__46943 < count__46942)){
var vec__46952 = chunk__46941.cljs$core$IIndexed$_nth$arity$2(null,i__46943);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46952,(0),null);
var atom_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46952,(1),null);
cljs.core.remove_watch(atom_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.handler.events.rtc","sync-app-state","frontend.handler.events.rtc/sync-app-state",1835053775),k], null));


var G__46991 = seq__46940;
var G__46992 = chunk__46941;
var G__46993 = count__46942;
var G__46994 = (i__46943 + (1));
seq__46940 = G__46991;
chunk__46941 = G__46992;
count__46942 = G__46993;
i__46943 = G__46994;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__46940);
if(temp__5825__auto__){
var seq__46940__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46940__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__46940__$1);
var G__46995 = cljs.core.chunk_rest(seq__46940__$1);
var G__46996 = c__5673__auto__;
var G__46997 = cljs.core.count(c__5673__auto__);
var G__46998 = (0);
seq__46940 = G__46995;
chunk__46941 = G__46996;
count__46942 = G__46997;
i__46943 = G__46998;
continue;
} else {
var vec__46955 = cljs.core.first(seq__46940__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46955,(0),null);
var atom_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46955,(1),null);
cljs.core.remove_watch(atom_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.handler.events.rtc","sync-app-state","frontend.handler.events.rtc/sync-app-state",1835053775),k], null));


var G__46999 = cljs.core.next(seq__46940__$1);
var G__47000 = null;
var G__47001 = (0);
var G__47002 = (0);
seq__46940 = G__46999;
chunk__46941 = G__47000;
count__46942 = G__47001;
i__46943 = G__47002;
continue;
}
} else {
return null;
}
}
break;
}
}));

return _LT_init_sync_done_QMARK_;
});
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("rtc","sync-app-state","rtc/sync-app-state",-1693789406),(function (p__46958){
var vec__46959 = p__46958;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46959,(0),null);
return frontend.handler.events.rtc.sync_app_state_BANG_();
}));

//# sourceMappingURL=frontend.handler.events.rtc.js.map
