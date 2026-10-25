goog.provide('frontend.db.restore');
/**
 * Restore db from SQLite
 */
frontend.db.restore.restore_graph_BANG_ = (function frontend$db$restore$restore_graph_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___67501 = arguments.length;
var i__5877__auto___67503 = (0);
while(true){
if((i__5877__auto___67503 < len__5876__auto___67501)){
args__5882__auto__.push((arguments[i__5877__auto___67503]));

var G__67504 = (i__5877__auto___67503 + (1));
i__5877__auto___67503 = G__67504;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.db.restore.restore_graph_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.db.restore.restore_graph_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (repo,p__67490){
var map__67491 = p__67490;
var map__67491__$1 = cljs.core.__destructure_map(map__67491);
var opts = map__67491__$1;
frontend.state.set_state_BANG_(new cljs.core.Keyword("graph","loading?","graph/loading?",1937181019),true);

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(cljs_time.core.now()),(function (start_time){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.persist_db._LT_open_and_fetch_schema.cljs$core$IFn$_invoke$arity$2(repo,opts)),(function (p__67492){
var map__67493 = p__67492;
var map__67493__$1 = cljs.core.__destructure_map(map__67493);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67493__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
return promesa.protocols._mcat(promesa.protocols._promise((((schema == null))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No valid schema found when reloading db",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"repo","repo",-1999060679),repo], null))})():null)),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(((frontend.config.publishing_QMARK_)?cljs.core.PersistentArrayMap.EMPTY:frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","db-sync-get-all-block-conflicts","thread-api/db-sync-get-all-block-conflicts",104513469),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo], 0)))),(function (conflicts_by_block){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.set_current_repo_BANG_(repo)),(function (___$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.subs.reset_graph_BANG_(repo)),(function (___$2){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.set_sync_block_conflicts_BANG_.cljs$core$IFn$_invoke$arity$2(repo,conflicts_by_block)),(function (___$3){
return promesa.protocols._mcat(promesa.protocols._promise(cljs_time.core.now()),(function (end_time){
return promesa.protocols._mcat(promesa.protocols._promise(((goog.debug.LOGGING_ENABLED)?lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.db.restore",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("frontend.db.restore","restore-graph!","frontend.db.restore/restore-graph!",1952543649),(""+"opens worker graph in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.core.in_millis(cljs_time.core.interval(start_time,end_time)))+" ms"),new cljs.core.Keyword(null,"line","line",212345235),30], null)),null):null)),(function (___27434__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","restored","graph/restored",1296384092),repo], null))),(function (___27434__auto____$1){
return promesa.protocols._promise(frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","re-render-root","ui/re-render-root",-1358783476)], null)));
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
})),(function (){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("graph","loading?","graph/loading?",1937181019),false);
}));
}));

(frontend.db.restore.restore_graph_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.db.restore.restore_graph_BANG_.cljs$lang$applyTo = (function (seq67488){
var G__67489 = cljs.core.first(seq67488);
var seq67488__$1 = cljs.core.next(seq67488);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67489,seq67488__$1);
}));


//# sourceMappingURL=frontend.db.restore.js.map
