goog.provide('frontend.handler.auto_save');
frontend.handler.auto_save.debounce_ms = (1000);
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.auto_save !== 'undefined') && (typeof frontend.handler.auto_save._STAR_persistence_state !== 'undefined')){
} else {
frontend.handler.auto_save._STAR_persistence_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
frontend.handler.auto_save.get_repo_state = (function frontend$handler$auto_save$get_repo_state(repo){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(frontend.handler.auto_save._STAR_persistence_state),repo,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"current-version","current-version",326454225),(0),new cljs.core.Keyword(null,"saved-version","saved-version",124724095),(0),new cljs.core.Keyword(null,"timer","timer",-1266967739),null,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"last-error","last-error",1848699973),null,new cljs.core.Keyword(null,"write-chain","write-chain",-671468236),promesa.core.resolved(null)], null));
});
/**
 * Get persistence status for current repo: :idle, :saving, :dirty, or :error
 */
frontend.handler.auto_save.get_status = (function frontend$handler$auto_save$get_status(var_args){
var G__47980 = arguments.length;
switch (G__47980) {
case 0:
return frontend.handler.auto_save.get_status.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.auto_save.get_status.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.auto_save.get_status.cljs$core$IFn$_invoke$arity$0 = (function (){
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return frontend.handler.auto_save.get_status.cljs$core$IFn$_invoke$arity$1(repo);
} else {
return null;
}
}));

(frontend.handler.auto_save.get_status.cljs$core$IFn$_invoke$arity$1 = (function (repo){
return new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(frontend.handler.auto_save.get_repo_state(repo));
}));

(frontend.handler.auto_save.get_status.cljs$lang$maxFixedArity = 1);

frontend.handler.auto_save.now_iso = (function frontend$handler$auto_save$now_iso(){
return (new Date()).toISOString();
});
/**
 * Executes a single save step for `repo` with target version snapshot `target-version`.
 */
frontend.handler.auto_save.do_save_step_BANG_ = (function frontend$handler$auto_save$do_save_step_BANG_(repo,target_version){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.handler.auto_save._STAR_persistence_state,cljs.core.update,repo,(function (st){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var or__5142__auto__ = st;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"saving","saving",-567560703));
}));

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.backup_db_graph.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interactive?","interactive?",367617676),false], null)),(function (result){
var st = frontend.handler.auto_save.get_repo_state(repo);
var curr = new cljs.core.Keyword(null,"current-version","current-version",326454225).cljs$core$IFn$_invoke$arity$1(st);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_version,curr)){
var now_d = new Date();
var pad_fn = function(n) { return n < 10 ? ('0' + n) : ('' + n); };
var now_time_str = pad_fn(now_d.getHours()) + ':' + pad_fn(now_d.getMinutes()) + ':' + pad_fn(now_d.getSeconds());
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.handler.auto_save._STAR_persistence_state,cljs.core.update,repo,(function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"saved-version","saved-version",124724095),target_version,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"last-saved-time","last-saved-time",-1829910412),now_time_str,new cljs.core.Keyword(null,"last-error","last-error",1848699973),null], 0));
}));

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.Keyword(null,"graph-not-changed","graph-not-changed",1463753852))){
console.log((""+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.handler.auto_save.now_iso())+"] [AutoSave] Successfully persisted version "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(target_version)+" for "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo)));
} else {
}

return result;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.handler.auto_save._STAR_persistence_state,cljs.core.update,repo,(function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"saved-version","saved-version",124724095),target_version,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"dirty","dirty",729553281)], 0));
}));

console.log((""+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.handler.auto_save.now_iso())+"] [AutoSave] Dirty in flight detected (saved "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(target_version)+", current "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(curr)+"), triggering catch-up save..."));

return (frontend.handler.auto_save.flush_save_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.auto_save.flush_save_BANG_.cljs$core$IFn$_invoke$arity$1(repo) : frontend.handler.auto_save.flush_save_BANG_.call(null,repo));
}
})),(function (error){
var err_name = (function (){var or__5142__auto__ = (function (){var G__47981 = error;
if((G__47981 == null)){
return null;
} else {
return G__47981.name;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (function (){var G__47982 = error;
if((G__47982 == null)){
return null;
} else {
return G__47982.message;
}
})();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return "UnknownError";
}
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.handler.auto_save._STAR_persistence_state,cljs.core.update,repo,(function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"last-error","last-error",1848699973),error], 0));
}));

console.error((""+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.handler.auto_save.now_iso())+"] [AutoSave] Failed to persist graph "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo)+":"),error);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(err_name,"NotAllowedError")){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export.backup","permission-expired","export.backup/permission-expired",337754400)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));
} else {
}

return promesa.core.rejected(error);
}));
});
/**
 * Immediately flushes pending modifications into the serialized write queue,
 * bypassing any running debounce timer.
 */
frontend.handler.auto_save.flush_save_BANG_ = (function frontend$handler$auto_save$flush_save_BANG_(var_args){
var G__47984 = arguments.length;
switch (G__47984) {
case 0:
return frontend.handler.auto_save.flush_save_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.auto_save.flush_save_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.auto_save.flush_save_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return frontend.handler.auto_save.flush_save_BANG_.cljs$core$IFn$_invoke$arity$1(repo);
} else {
return null;
}
}));

(frontend.handler.auto_save.flush_save_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (repo){
if(cljs.core.truth_((function (){var and__5140__auto__ = frontend.util.web_platform_QMARK_;
if(and__5140__auto__){
return repo;
} else {
return and__5140__auto__;
}
})())){
var temp__5825__auto___47991 = new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(frontend.handler.auto_save.get_repo_state(repo));
if(cljs.core.truth_(temp__5825__auto___47991)){
var timer_47992 = temp__5825__auto___47991;
clearTimeout(timer_47992);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.handler.auto_save._STAR_persistence_state,cljs.core.update,repo,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"timer","timer",-1266967739),null], 0));
} else {
}

var curr_st = frontend.handler.auto_save.get_repo_state(repo);
var curr_ver = new cljs.core.Keyword(null,"current-version","current-version",326454225).cljs$core$IFn$_invoke$arity$1(curr_st);
var saved_ver = new cljs.core.Keyword(null,"saved-version","saved-version",124724095).cljs$core$IFn$_invoke$arity$1(curr_st);
var prev_chain = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"write-chain","write-chain",-671468236).cljs$core$IFn$_invoke$arity$1(curr_st);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return promesa.core.resolved(null);
}
})();
if((curr_ver > saved_ver)){
var next_chain = promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(prev_chain,cljs.core.constantly(null)),(function (_){
var target_ver = new cljs.core.Keyword(null,"current-version","current-version",326454225).cljs$core$IFn$_invoke$arity$1(frontend.handler.auto_save.get_repo_state(repo));
if((target_ver > new cljs.core.Keyword(null,"saved-version","saved-version",124724095).cljs$core$IFn$_invoke$arity$1(frontend.handler.auto_save.get_repo_state(repo)))){
return frontend.handler.auto_save.do_save_step_BANG_(repo,target_ver);
} else {
return promesa.core.resolved(new cljs.core.Keyword(null,"already-saved","already-saved",-128592861));
}
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.handler.auto_save._STAR_persistence_state,cljs.core.update,repo,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"write-chain","write-chain",-671468236),next_chain], 0));

return next_chain;
} else {
return promesa.core.resolved(new cljs.core.Keyword(null,"unchanged","unchanged",-1458452600));
}
} else {
return null;
}
}));

(frontend.handler.auto_save.flush_save_BANG_.cljs$lang$maxFixedArity = 1);

/**
 * Marks current repo dirty, increments version, and schedules debounce flush.
 */
frontend.handler.auto_save.schedule_auto_save_BANG_ = (function frontend$handler$auto_save$schedule_auto_save_BANG_(var_args){
var G__47986 = arguments.length;
switch (G__47986) {
case 0:
return frontend.handler.auto_save.schedule_auto_save_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.auto_save.schedule_auto_save_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.auto_save.schedule_auto_save_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return frontend.handler.auto_save.schedule_auto_save_BANG_.cljs$core$IFn$_invoke$arity$1(repo);
} else {
return null;
}
}));

(frontend.handler.auto_save.schedule_auto_save_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (repo){
if(cljs.core.truth_((function (){var and__5140__auto__ = frontend.util.web_platform_QMARK_;
if(and__5140__auto__){
return repo;
} else {
return and__5140__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.handler.auto_save._STAR_persistence_state,cljs.core.update,repo,(function (st){
var curr = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"current-version","current-version",326454225).cljs$core$IFn$_invoke$arity$1(st);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var or__5142__auto__ = st;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"current-version","current-version",326454225),(curr + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"dirty","dirty",729553281)], 0));
}));

var temp__5825__auto___47994 = new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(frontend.handler.auto_save.get_repo_state(repo));
if(cljs.core.truth_(temp__5825__auto___47994)){
var old_timer_47995 = temp__5825__auto___47994;
clearTimeout(old_timer_47995);
} else {
}

var timer = setTimeout((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.handler.auto_save._STAR_persistence_state,cljs.core.update,repo,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"timer","timer",-1266967739),null], 0));

return frontend.handler.auto_save.flush_save_BANG_.cljs$core$IFn$_invoke$arity$1(repo);
}),frontend.handler.auto_save.debounce_ms);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.handler.auto_save._STAR_persistence_state,cljs.core.update,repo,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"timer","timer",-1266967739),timer], 0));
} else {
return null;
}
}));

(frontend.handler.auto_save.schedule_auto_save_BANG_.cljs$lang$maxFixedArity = 1);

/**
 * Cancels running timers and clears persistence state for repo.
 */
frontend.handler.auto_save.cancel_auto_save_BANG_ = (function frontend$handler$auto_save$cancel_auto_save_BANG_(var_args){
var G__47988 = arguments.length;
switch (G__47988) {
case 0:
return frontend.handler.auto_save.cancel_auto_save_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.auto_save.cancel_auto_save_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.auto_save.cancel_auto_save_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return frontend.handler.auto_save.cancel_auto_save_BANG_.cljs$core$IFn$_invoke$arity$1(repo);
} else {
return null;
}
}));

(frontend.handler.auto_save.cancel_auto_save_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (repo){
var temp__5825__auto___47997 = new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(frontend.handler.auto_save.get_repo_state(repo));
if(cljs.core.truth_(temp__5825__auto___47997)){
var timer_47998 = temp__5825__auto___47997;
clearTimeout(timer_47998);
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.handler.auto_save._STAR_persistence_state,cljs.core.dissoc,repo);
}));

(frontend.handler.auto_save.cancel_auto_save_BANG_.cljs$lang$maxFixedArity = 1);

if((typeof window !== 'undefined')){
(window.logseqAutoSave = ({"schedule": (function (repo){
return frontend.handler.auto_save.schedule_auto_save_BANG_.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = repo;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.state.get_current_repo();
}
})());
}), "flush": (function (repo){
return frontend.handler.auto_save.flush_save_BANG_.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = repo;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.state.get_current_repo();
}
})());
}), "getStatus": (function (repo){
return cljs.core.name(frontend.handler.auto_save.get_status.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = repo;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.state.get_current_repo();
}
})()));
}), "getCurrentRepo": (function (){
return frontend.state.get_current_repo();
}), "getState": (function (repo){
if(cljs.core.truth_(repo)){
return cljs.core.clj__GT_js(frontend.handler.auto_save.get_repo_state(repo));
} else {
return cljs.core.clj__GT_js(cljs.core.deref(frontend.handler.auto_save._STAR_persistence_state));
}
})}));
} else {
}

//# sourceMappingURL=frontend.handler.auto_save.js.map
