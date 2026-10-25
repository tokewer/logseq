goog.provide('frontend.flows');
if((typeof frontend !== 'undefined') && (typeof frontend.flows !== 'undefined') && (typeof frontend.flows._STAR_sub_atoms !== 'undefined')){
} else {
frontend.flows._STAR_sub_atoms = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
frontend.flows.sub_atom = (function frontend$flows$sub_atom(sub){
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.flows._STAR_sub_atoms),sub);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var state_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.rfx.snapshot(),sub));
var listener_id = cljs.core.random_uuid();
frontend.rfx.listen_BANG_(listener_id,(function (_prev_db,db){
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,sub);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state_STAR_),value)){
return null;
} else {
return cljs.core.reset_BANG_(state_STAR_,value);
}
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.flows._STAR_sub_atoms,cljs.core.assoc,sub,state_STAR_);

return state_STAR_;
}
});
/**
 * Like get-current-repo.
 */
frontend.flows.current_repo = frontend.flows.sub_atom(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("git","current-repo","git/current-repo",107438825)], null));
frontend.flows.current_login_user = frontend.flows.sub_atom(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("auth","current-login-user","auth/current-login-user",2127074079)], null));
frontend.flows.document_visibility_state = (function (){var document__$1 = (function (){var G__28175 = globalThis;
if((G__28175 == null)){
return null;
} else {
return G__28175.document;
}
})();
var state_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var G__28176 = document__$1;
if((G__28176 == null)){
return null;
} else {
return G__28176.visibilityState;
}
})());
var callback_fn = (function (){
return cljs.core.reset_BANG_(state_STAR_,(function (){var G__28177 = document__$1;
if((G__28177 == null)){
return null;
} else {
return G__28177.visibilityState;
}
})());
});
var G__28178_28183 = document__$1;
if((G__28178_28183 == null)){
} else {
G__28178_28183.addEventListener("visibilitychange",callback_fn);
}

return state_STAR_;
})();
frontend.flows.network_online_QMARK_ = (cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())?(function (){var state_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"connected","connected",-169833045).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(frontend.mobile.flows._STAR_mobile_network_status),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))));
cljs.core.add_watch(frontend.mobile.flows._STAR_mobile_network_status,new cljs.core.Keyword("frontend.flows","network-online","frontend.flows/network-online",-1588595968),(function (_,___$1,___$2,status){
return cljs.core.reset_BANG_(state_STAR_,new cljs.core.Keyword(null,"connected","connected",-169833045).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(status,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))));
}));

return state_STAR_;
})():frontend.flows.sub_atom(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("network","online?","network/online?",1306822774)], null)));

//# sourceMappingURL=frontend.flows.js.map
