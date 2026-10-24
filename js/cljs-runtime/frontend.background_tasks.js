goog.provide('frontend.background_tasks');
frontend.background_tasks.search_input_idle_sync_interval_ms = (500);
frontend.background_tasks.search_input_idle_diff_ms = (1000);
if((typeof frontend !== 'undefined') && (typeof frontend.background_tasks !== 'undefined') && (typeof frontend.background_tasks._STAR_background_cancelers !== 'undefined')){
} else {
frontend.background_tasks._STAR_background_cancelers = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
}
frontend.background_tasks.run_background_BANG_ = (function frontend$background_tasks$run_background_BANG_(key_SINGLEQUOTE_,start_BANG_){
var temp__5825__auto___51666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.background_tasks._STAR_background_cancelers),key_SINGLEQUOTE_);
if(cljs.core.truth_(temp__5825__auto___51666)){
var cancel_BANG__51667 = temp__5825__auto___51666;
(cancel_BANG__51667.cljs$core$IFn$_invoke$arity$0 ? cancel_BANG__51667.cljs$core$IFn$_invoke$arity$0() : cancel_BANG__51667.call(null));
} else {
}

frontend.background_tasks._STAR_background_cancelers.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.background_tasks._STAR_background_cancelers.cljs$core$IDeref$_deref$arity$1(null),key_SINGLEQUOTE_,(start_BANG_.cljs$core$IFn$_invoke$arity$0 ? start_BANG_.cljs$core$IFn$_invoke$arity$0() : start_BANG_.call(null))));

return null;
});
frontend.background_tasks.watch_atoms_BANG_ = (function frontend$background_tasks$watch_atoms_BANG_(key_SINGLEQUOTE_,atoms,f){
var watch_keys = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__51592_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(key_SINGLEQUOTE_))+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key_SINGLEQUOTE_))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__51592_SHARP_)));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(atoms)));
var seq__51593_51668 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,watch_keys,atoms));
var chunk__51594_51669 = null;
var count__51595_51670 = (0);
var i__51596_51671 = (0);
while(true){
if((i__51596_51671 < count__51595_51670)){
var vec__51613_51672 = chunk__51594_51669.cljs$core$IIndexed$_nth$arity$2(null,i__51596_51671);
var watch_key_51673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51613_51672,(0),null);
var atom_SINGLEQUOTE__51674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51613_51672,(1),null);
cljs.core.add_watch(atom_SINGLEQUOTE__51674,watch_key_51673,((function (seq__51593_51668,chunk__51594_51669,count__51595_51670,i__51596_51671,vec__51613_51672,watch_key_51673,atom_SINGLEQUOTE__51674,watch_keys){
return (function (_,___$1,___$2,___$3){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});})(seq__51593_51668,chunk__51594_51669,count__51595_51670,i__51596_51671,vec__51613_51672,watch_key_51673,atom_SINGLEQUOTE__51674,watch_keys))
);


var G__51677 = seq__51593_51668;
var G__51678 = chunk__51594_51669;
var G__51679 = count__51595_51670;
var G__51680 = (i__51596_51671 + (1));
seq__51593_51668 = G__51677;
chunk__51594_51669 = G__51678;
count__51595_51670 = G__51679;
i__51596_51671 = G__51680;
continue;
} else {
var temp__5825__auto___51681 = cljs.core.seq(seq__51593_51668);
if(temp__5825__auto___51681){
var seq__51593_51682__$1 = temp__5825__auto___51681;
if(cljs.core.chunked_seq_QMARK_(seq__51593_51682__$1)){
var c__5673__auto___51683 = cljs.core.chunk_first(seq__51593_51682__$1);
var G__51684 = cljs.core.chunk_rest(seq__51593_51682__$1);
var G__51685 = c__5673__auto___51683;
var G__51686 = cljs.core.count(c__5673__auto___51683);
var G__51687 = (0);
seq__51593_51668 = G__51684;
chunk__51594_51669 = G__51685;
count__51595_51670 = G__51686;
i__51596_51671 = G__51687;
continue;
} else {
var vec__51628_51688 = cljs.core.first(seq__51593_51682__$1);
var watch_key_51689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51628_51688,(0),null);
var atom_SINGLEQUOTE__51690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51628_51688,(1),null);
cljs.core.add_watch(atom_SINGLEQUOTE__51690,watch_key_51689,((function (seq__51593_51668,chunk__51594_51669,count__51595_51670,i__51596_51671,vec__51628_51688,watch_key_51689,atom_SINGLEQUOTE__51690,seq__51593_51682__$1,temp__5825__auto___51681,watch_keys){
return (function (_,___$1,___$2,___$3){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});})(seq__51593_51668,chunk__51594_51669,count__51595_51670,i__51596_51671,vec__51628_51688,watch_key_51689,atom_SINGLEQUOTE__51690,seq__51593_51682__$1,temp__5825__auto___51681,watch_keys))
);


var G__51692 = cljs.core.next(seq__51593_51682__$1);
var G__51693 = null;
var G__51694 = (0);
var G__51695 = (0);
seq__51593_51668 = G__51692;
chunk__51594_51669 = G__51693;
count__51595_51670 = G__51694;
i__51596_51671 = G__51695;
continue;
}
} else {
}
}
break;
}

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

return (function (){
var seq__51635 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,watch_keys,atoms));
var chunk__51636 = null;
var count__51637 = (0);
var i__51638 = (0);
while(true){
if((i__51638 < count__51637)){
var vec__51646 = chunk__51636.cljs$core$IIndexed$_nth$arity$2(null,i__51638);
var watch_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51646,(0),null);
var atom_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51646,(1),null);
cljs.core.remove_watch(atom_SINGLEQUOTE_,watch_key);


var G__51699 = seq__51635;
var G__51700 = chunk__51636;
var G__51701 = count__51637;
var G__51702 = (i__51638 + (1));
seq__51635 = G__51699;
chunk__51636 = G__51700;
count__51637 = G__51701;
i__51638 = G__51702;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__51635);
if(temp__5825__auto__){
var seq__51635__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51635__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__51635__$1);
var G__51703 = cljs.core.chunk_rest(seq__51635__$1);
var G__51704 = c__5673__auto__;
var G__51705 = cljs.core.count(c__5673__auto__);
var G__51706 = (0);
seq__51635 = G__51703;
chunk__51636 = G__51704;
count__51637 = G__51705;
i__51638 = G__51706;
continue;
} else {
var vec__51652 = cljs.core.first(seq__51635__$1);
var watch_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51652,(0),null);
var atom_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51652,(1),null);
cljs.core.remove_watch(atom_SINGLEQUOTE_,watch_key);


var G__51707 = cljs.core.next(seq__51635__$1);
var G__51708 = null;
var G__51709 = (0);
var G__51710 = (0);
seq__51635 = G__51707;
chunk__51636 = G__51708;
count__51637 = G__51709;
i__51638 = G__51710;
continue;
}
} else {
return null;
}
}
break;
}
});
});
frontend.background_tasks.run_background_BANG_(new cljs.core.Keyword("logseq.db.common.entity-plus","reset-immutable-entities-cache!","logseq.db.common.entity-plus/reset-immutable-entities-cache!",876655830),(function (){
return frontend.background_tasks.watch_atoms_BANG_(new cljs.core.Keyword("logseq.db.common.entity-plus","reset-immutable-entities-cache!","logseq.db.common.entity-plus/reset-immutable-entities-cache!",876655830),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.flows.current_repo], null),(function (){
if((!((cljs.core.deref(frontend.flows.current_repo) == null)))){
return logseq.db.common.entity_plus.reset_immutable_entities_cache_BANG_();
} else {
return null;
}
}));
}));
frontend.background_tasks.run_background_BANG_(new cljs.core.Keyword("frontend.background-tasks","sync-to-worker-network-online-status","frontend.background-tasks/sync-to-worker-network-online-status",2102264102),(function (){
return frontend.background_tasks.watch_atoms_BANG_(new cljs.core.Keyword("frontend.background-tasks","sync-to-worker-network-online-status","frontend.background-tasks/sync-to-worker-network-online-status",2102264102),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.flows.network_online_QMARK_,frontend.state.db_worker_ready_QMARK_], null),(function (){
if(cljs.core.truth_(cljs.core.deref(frontend.state.db_worker_ready_QMARK_))){
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","update-thread-atom","thread-api/update-thread-atom",-496405616),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("thread-atom","online-event","thread-atom/online-event",-68671588),cljs.core.deref(frontend.flows.network_online_QMARK_)], 0));
} else {
return null;
}
}));
}));
frontend.background_tasks.run_background_BANG_(new cljs.core.Keyword("frontend.background-tasks","sync-to-worker-search-input-idle-status","frontend.background-tasks/sync-to-worker-search-input-idle-status",1346371508),(function (){
var sync_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var sync_BANG_ = (function (){
var db_worker_ready_QMARK_ = cljs.core.deref(frontend.state.db_worker_ready_QMARK_);
var repo = cljs.core.deref(frontend.flows.current_repo);
var map__51661 = cljs.core.deref(sync_state);
var map__51661__$1 = cljs.core.__destructure_map(map__51661);
var last_synced_repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51661__$1,new cljs.core.Keyword(null,"last-synced-repo","last-synced-repo",-1905632366));
var last_synced_idle_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51661__$1,new cljs.core.Keyword(null,"last-synced-idle?","last-synced-idle?",-1387700148));
var prev_db_worker_ready_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51661__$1,new cljs.core.Keyword(null,"prev-db-worker-ready?","prev-db-worker-ready?",-486636240));
if(cljs.core.truth_((function (){var and__5140__auto__ = db_worker_ready_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.seq(repo);
} else {
return and__5140__auto__;
}
})())){
var idle_QMARK_ = frontend.state.input_idle_QMARK_.cljs$core$IFn$_invoke$arity$variadic(repo,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"diff","diff",2135942783),frontend.background_tasks.search_input_idle_diff_ms], 0));
var should_sync_QMARK_ = (function (){var or__5142__auto__ = (last_synced_repo == null);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(last_synced_repo,repo);
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = (function (){var and__5140__auto__ = db_worker_ready_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(prev_db_worker_ready_QMARK_);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(last_synced_idle_QMARK_,idle_QMARK_);
}
}
}
})();
if(cljs.core.truth_(should_sync_QMARK_)){
frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","update-thread-atom","thread-api/update-thread-atom",-496405616),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("thread-atom","search-input-idle-status","thread-atom/search-input-idle-status",756053487),cljs.core.PersistentArrayMap.createAsIfByAssoc([repo,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idle?","idle?",1779138705),idle_QMARK_,new cljs.core.Keyword(null,"ts","ts",1617209904),Date.now()], null)])], 0));
} else {
}

return cljs.core.reset_BANG_(sync_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"last-synced-repo","last-synced-repo",-1905632366),repo,new cljs.core.Keyword(null,"last-synced-idle?","last-synced-idle?",-1387700148),idle_QMARK_,new cljs.core.Keyword(null,"prev-db-worker-ready?","prev-db-worker-ready?",-486636240),db_worker_ready_QMARK_], null));
} else {
return cljs.core.reset_BANG_(sync_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"last-synced-repo","last-synced-repo",-1905632366),null,new cljs.core.Keyword(null,"last-synced-idle?","last-synced-idle?",-1387700148),null,new cljs.core.Keyword(null,"prev-db-worker-ready?","prev-db-worker-ready?",-486636240),db_worker_ready_QMARK_], null));
}
});
var cancel_watch_BANG_ = frontend.background_tasks.watch_atoms_BANG_(new cljs.core.Keyword("frontend.background-tasks","sync-to-worker-search-input-idle-status","frontend.background-tasks/sync-to-worker-search-input-idle-status",1346371508),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.state.db_worker_ready_QMARK_,frontend.flows.current_repo], null),sync_BANG_);
var interval_id = setInterval(sync_BANG_,frontend.background_tasks.search_input_idle_sync_interval_ms);
return (function (){
cancel_watch_BANG_();

return clearInterval(interval_id);
});
}));

//# sourceMappingURL=frontend.background_tasks.js.map
