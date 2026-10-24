goog.provide('logseq.db');
logseq.db.built_in_QMARK_ = logseq.db.frontend.entity_util.built_in_QMARK_;
logseq.db.built_in_class_property_QMARK_ = logseq.db.frontend.db.built_in_class_property_QMARK_;
logseq.db.private_built_in_page_QMARK_ = logseq.db.frontend.db.private_built_in_page_QMARK_;
logseq.db.write_transit_str = logseq.db.sqlite.util.write_transit_str;
logseq.db.read_transit_str = logseq.db.sqlite.util.read_transit_str;
logseq.db.build_favorite_tx = logseq.db.frontend.db.build_favorite_tx;
if((typeof logseq !== 'undefined') && (typeof logseq.db !== 'undefined') && (typeof logseq.db._STAR_transact_fn !== 'undefined')){
} else {
logseq.db._STAR_transact_fn = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof logseq !== 'undefined') && (typeof logseq.db !== 'undefined') && (typeof logseq.db._STAR_transact_invalid_callback !== 'undefined')){
} else {
logseq.db._STAR_transact_invalid_callback = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof logseq !== 'undefined') && (typeof logseq.db !== 'undefined') && (typeof logseq.db._STAR_transact_pipeline_fn !== 'undefined')){
} else {
logseq.db._STAR_transact_pipeline_fn = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof logseq !== 'undefined') && (typeof logseq.db !== 'undefined') && (typeof logseq.db._STAR_debounce_fn !== 'undefined')){
} else {
logseq.db._STAR_debounce_fn = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
logseq.db._STAR_batch_tx_report_QMARK__STAR_ = false;
logseq.db.register_transact_fn_BANG_ = (function logseq$db$register_transact_fn_BANG_(f){
if(cljs.core.truth_(f)){
return cljs.core.reset_BANG_(logseq.db._STAR_transact_fn,f);
} else {
return null;
}
});
logseq.db.register_transact_invalid_callback_fn_BANG_ = (function logseq$db$register_transact_invalid_callback_fn_BANG_(f){
if(cljs.core.truth_(f)){
return cljs.core.reset_BANG_(logseq.db._STAR_transact_invalid_callback,f);
} else {
return null;
}
});
logseq.db.register_transact_pipeline_fn_BANG_ = (function logseq$db$register_transact_pipeline_fn_BANG_(f){
if(cljs.core.truth_(f)){
return cljs.core.reset_BANG_(logseq.db._STAR_transact_pipeline_fn,f);
} else {
return null;
}
});
logseq.db.register_debounce_fn_BANG_ = (function logseq$db$register_debounce_fn_BANG_(f){
if(cljs.core.truth_(f)){
return cljs.core.reset_BANG_(logseq.db._STAR_debounce_fn,f);
} else {
return null;
}
});
logseq.db.remove_temp_block_data = (function logseq$db$remove_temp_block_data(tx_data){
var remove_block_temp_f = (function (m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__50274){
var vec__50275 = p__50274;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50275,(0),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50275,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("block.temp",cljs.core.namespace(k));
}),m));
});
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (data){
if(cljs.core.map_QMARK_(data)){
var G__50279 = remove_block_temp_f(data);
if(cljs.core.seq(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(data))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__50279,new cljs.core.Keyword("block","refs","block/refs",-1214495349),(function (refs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ref){
if(cljs.core.map_QMARK_(ref)){
return remove_block_temp_f(ref);
} else {
return ref;
}
}),refs);
}));
} else {
return G__50279;
}
} else {
if(((cljs.core.vector_QMARK_(data)) && (((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),null,new cljs.core.Keyword("db","add","db/add",235286841),null], null), null),cljs.core.first(data))) && ((((cljs.core.count(data) > (2))) && ((((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(2)) instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("block.temp",cljs.core.namespace(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(2))))))))))))){
return null;
} else {
return data;

}
}
}),tx_data);
});
logseq.db.entity__GT_db_id = (function logseq$db$entity__GT_db_id(tx_data){
return clojure.walk.prewalk((function (f){
if(datascript.impl.entity.entity_QMARK_(f)){
var temp__5823__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(f);
if(cljs.core.truth_(temp__5823__auto__)){
var id = temp__5823__auto__;
return id;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("ldb/transact! doesn't support Entity",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entity","entity",-450970276),f,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),tx_data], null));
}
} else {
return f;
}
}),tx_data);
});
logseq.db.throw_if_page_has_block_parent_BANG_ = (function logseq$db$throw_if_page_has_block_parent_BANG_(db,tx_data){
if(cljs.core.truth_(cljs.core.some((function (d){
var and__5140__auto__ = new cljs.core.Keyword(null,"added","added",2057651688).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(d));
if(and__5140__auto____$1){
var entity = (function (){var G__50287 = db;
var G__50288 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(d);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__50287,G__50288) : datascript.core.entity.call(null,G__50287,G__50288));
})();
var parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(entity);
var and__5140__auto____$2 = logseq.db.frontend.entity_util.page_QMARK_(entity);
if(cljs.core.truth_(and__5140__auto____$2)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent))) && (cljs.core.not(logseq.db.frontend.entity_util.page_QMARK_((function (){var G__50290 = db;
var G__50291 = new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(d);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__50290,G__50291) : datascript.core.entity.call(null,G__50290,G__50291));
})()))));
} else {
return and__5140__auto____$2;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}),tx_data))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Page can't have block as parent",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-count","tx-count",1987743336),cljs.core.count(tx_data)], null));
} else {
return null;
}
});
logseq.db.should_run_transact_pipeline_QMARK_ = (function logseq$db$should_run_transact_pipeline_QMARK_(conn,db,tx_meta){
var and__5140__auto__ = logseq.db.common.entity_plus.db_based_graph_QMARK_(db);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"rtc-download-graph?","rtc-download-graph?",-1013530237).cljs$core$IFn$_invoke$arity$1(tx_meta);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379).cljs$core$IFn$_invoke$arity$1(tx_meta);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = new cljs.core.Keyword(null,"initial-db?","initial-db?",-930665302).cljs$core$IFn$_invoke$arity$1(tx_meta);
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
var or__5142__auto____$3 = new cljs.core.Keyword(null,"skip-validate-db?","skip-validate-db?",-140194140).cljs$core$IFn$_invoke$arity$2(tx_meta,false);
if(cljs.core.truth_(or__5142__auto____$3)){
return or__5142__auto____$3;
} else {
var or__5142__auto____$4 = new cljs.core.Keyword(null,"skip-validate-db?","skip-validate-db?",-140194140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(conn));
if(cljs.core.truth_(or__5142__auto____$4)){
return or__5142__auto____$4;
} else {
var or__5142__auto____$5 = new cljs.core.Keyword("logseq.graph-parser.exporter","new-graph?","logseq.graph-parser.exporter/new-graph?",-2038807565).cljs$core$IFn$_invoke$arity$1(tx_meta);
if(cljs.core.truth_(or__5142__auto____$5)){
return or__5142__auto____$5;
} else {
return new cljs.core.Keyword(null,"transact-new-graph-refs?","transact-new-graph-refs?",403866193).cljs$core$IFn$_invoke$arity$1(tx_meta);
}
}
}
}
}
}
})());
} else {
return and__5140__auto__;
}
});
logseq.db.should_validate_pipeline_result_QMARK_ = (function logseq$db$should_validate_pipeline_result_QMARK_(tx_meta){
return cljs.core.not(new cljs.core.Keyword(null,"fix-db?","fix-db?",1698780521).cljs$core$IFn$_invoke$arity$1(tx_meta));
});
logseq.db.transact_failed_log_data = (function logseq$db$transact_failed_log_data(tx_meta,tx_data,error){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta,new cljs.core.Keyword(null,"tx-count","tx-count",1987743336),cljs.core.count(tx_data),new cljs.core.Keyword(null,"error","error",-978969032),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(error))], null);
});
logseq.db.invalid_tx_log_data = (function logseq$db$invalid_tx_log_data(tx_meta,tx_data,errors,tx_report){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta,new cljs.core.Keyword(null,"tx-count","tx-count",1987743336),cljs.core.count(tx_data),new cljs.core.Keyword(null,"pipeline-tx-count","pipeline-tx-count",-1453266548),cljs.core.count(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(tx_report)),new cljs.core.Keyword(null,"error-count","error-count",1790949450),cljs.core.count(errors),new cljs.core.Keyword(null,"errors","errors",-908790718),errors], null);
});
logseq.db.throw_invalid_tx_BANG_ = (function logseq$db$throw_invalid_tx_BANG_(tx_meta,tx_data,errors,tx_report){
var temp__5825__auto___50517 = cljs.core.deref(logseq.db._STAR_transact_invalid_callback);
if(cljs.core.truth_(temp__5825__auto___50517)){
var f_50518 = temp__5825__auto___50517;
(f_50518.cljs$core$IFn$_invoke$arity$2 ? f_50518.cljs$core$IFn$_invoke$arity$2(tx_report,errors) : f_50518.call(null,tx_report,errors));
} else {
}

var debug_data = logseq.db.invalid_tx_log_data(tx_meta,tx_data,errors,tx_report);
logseq.common.log.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"invalid-data","invalid-data",-496587860),debug_data], 0));

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("DB write failed with invalid data",debug_data);
});
logseq.db.transact_sync = (function logseq$db$transact_sync(conn,tx_data,tx_meta){
try{while(true){
var db = cljs.core.deref(conn);
var run_pipeline_QMARK_ = logseq.db.should_run_transact_pipeline_QMARK_(conn,db,tx_meta);
if(cljs.core.truth_(run_pipeline_QMARK_)){
var tx_report_STAR_ = (datascript.core.with$.cljs$core$IFn$_invoke$arity$3 ? datascript.core.with$.cljs$core$IFn$_invoke$arity$3(db,tx_data,tx_meta) : datascript.core.with$.call(null,db,tx_data,tx_meta));
var pipeline_f = cljs.core.deref(logseq.db._STAR_transact_pipeline_fn);
var tx_report = (cljs.core.truth_(pipeline_f)?(pipeline_f.cljs$core$IFn$_invoke$arity$1 ? pipeline_f.cljs$core$IFn$_invoke$arity$1(tx_report_STAR_) : pipeline_f.call(null,tx_report_STAR_)):tx_report_STAR_);
var _ = logseq.db.throw_if_page_has_block_parent_BANG_(new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(tx_report),new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(tx_report));
var vec__50298 = ((logseq.db.should_validate_pipeline_result_QMARK_(tx_meta))?logseq.db.frontend.validate.validate_tx_report(tx_report,null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null));
var validate_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50298,(0),null);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50298,(1),null);
if(cljs.core.not(validate_result)){
if((db === cljs.core.deref(conn))){
return logseq.db.throw_invalid_tx_BANG_(tx_meta,tx_data,errors,tx_report);
} else {
continue;
}
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = tx_report;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.seq(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(tx_report));
} else {
return and__5140__auto__;
}
})())){
if(cljs.core.compare_and_set_BANG_(conn,db,new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(tx_report))){
datascript.conn.store_after_transact_BANG_(conn,tx_report);

datascript.conn.run_callbacks(conn,tx_report);

return tx_report;
} else {
continue;
}
} else {
return tx_report;

}
}
} else {
return (datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx_data,tx_meta) : datascript.core.transact_BANG_.call(null,conn,tx_data,tx_meta));
}
break;
}
}catch (e50297){var e = e50297;
if(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword("db-sync","suppress-transact-failed-log?","db-sync/suppress-transact-failed-log?",1389175083).cljs$core$IFn$_invoke$arity$1(tx_meta);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto__ = new cljs.core.Keyword("db-sync","suppress-stale-rebase-transact-failed-log?","db-sync/suppress-stale-rebase-transact-failed-log?",2143487048).cljs$core$IFn$_invoke$arity$1(tx_meta);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("entity-id","missing","entity-id/missing",1234588374),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e)));
} else {
return and__5140__auto__;
}
}
})())){
} else {
logseq.common.log.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"transact-failed","transact-failed",-1049262566),logseq.db.transact_failed_log_data(tx_meta,tx_data,e)], 0));
}

throw e;
}});
/**
 * `repo-or-conn`: repo for UI thread and conn for worker/node
 */
logseq.db.transact_BANG_ = (function logseq$db$transact_BANG_(var_args){
var G__50302 = arguments.length;
switch (G__50302) {
case 2:
return logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (repo_or_conn,tx_data){
return logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(repo_or_conn,tx_data,null);
}));

(logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (repo_or_conn,tx_data,tx_meta){
var tx_data__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (m){
return ((cljs.core.integer_QMARK_(m)) || (cljs.core.empty_QMARK_(m)));
}),logseq.common.util.fast_remove_nils(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (m){
return ((cljs.core.map_QMARK_(m)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352))));
}),logseq.db.remove_temp_block_data(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
if(cljs.core.map_QMARK_(m)){
var G__50303 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword("block","children","block/children",-1040716209),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","meta","block/meta",1064819153),new cljs.core.Keyword("block","top?","block/top?",-1838733025),new cljs.core.Keyword("block","bottom?","block/bottom?",-1886197289),new cljs.core.Keyword("block","anchor","block/anchor",1325786860),new cljs.core.Keyword("block","level","block/level",1182509971),new cljs.core.Keyword("block","container","block/container",510671002),new cljs.core.Keyword("db","other-tx","db/other-tx",337296620),new cljs.core.Keyword("block","unordered","block/unordered",-772044101)], 0));
if(cljs.core.not(cljs.core.deref(logseq.db._STAR_transact_fn))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50303,new cljs.core.Keyword("block.temp","load-status","block.temp/load-status",-1066723049));
} else {
return G__50303;
}
} else {
return m;
}
}),logseq.db.entity__GT_db_id(tx_data))))));
var tx_data__$2 = (((!(typeof repo_or_conn === 'string')))?logseq.db.common.delete_blocks.expand_delete_blocks_tx(cljs.core.deref(repo_or_conn),tx_data__$1,tx_meta):tx_data__$1);
var delete_blocks_tx = ((typeof repo_or_conn === 'string')?null:logseq.db.common.delete_blocks.update_refs_history(cljs.core.deref(repo_or_conn),tx_data__$2,tx_meta));
var tx_data__$3 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx_data__$2,delete_blocks_tx);
if(cljs.core.seq(tx_data__$3)){
var tx_meta__$1 = (function (){var G__50304 = tx_meta;
if(cljs.core.truth_(logseq.db._STAR_batch_tx_report_QMARK__STAR_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50304,new cljs.core.Keyword(null,"batch-tx-report?","batch-tx-report?",1998845119),true);
} else {
return G__50304;
}
})();
var temp__5823__auto__ = cljs.core.deref(logseq.db._STAR_transact_fn);
if(cljs.core.truth_(temp__5823__auto__)){
var transact_fn = temp__5823__auto__;
return (transact_fn.cljs$core$IFn$_invoke$arity$3 ? transact_fn.cljs$core$IFn$_invoke$arity$3(repo_or_conn,tx_data__$3,tx_meta__$1) : transact_fn.call(null,repo_or_conn,tx_data__$3,tx_meta__$1));
} else {
return logseq.db.transact_sync(repo_or_conn,tx_data__$3,tx_meta__$1);
}
} else {
return null;
}
}));

(logseq.db.transact_BANG_.cljs$lang$maxFixedArity = 3);

logseq.db.make_conn = (function logseq$db$make_conn(db,opts){
var conn = (function (){var G__50305 = new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(db);
return (datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1 ? datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(G__50305) : datascript.core.create_conn.call(null,G__50305));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"atom","atom",-397043653).cljs$core$IFn$_invoke$arity$1(conn),cljs.core.merge,opts);

return conn;
});
/**
 * Forked conn-from-db to not invoke `d/store`, it's unsafe to store during nested batch tx.
 */
logseq.db.conn_from_db = (function logseq$db$conn_from_db(db){
var temp__5827__auto__ = datascript.storage.storage(db);
if((temp__5827__auto__ == null)){
return logseq.db.make_conn(db,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null));
} else {
var _storage = temp__5827__auto__;
return logseq.db.make_conn(db,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"tx-tail","tx-tail",1116487556),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"db-last-stored","db-last-stored",-2068760702),db], null));
}
});
/**
 * Create an isolated in-memory conn from `db` that can read storage-backed data without storing writes.
 */
logseq.db.temp_conn_from_db = (function logseq$db$temp_conn_from_db(db){
var G__50306 = logseq.db.conn_from_db(db);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__50306,cljs.core.assoc,new cljs.core.Keyword(null,"skip-store?","skip-store?",-484019625),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"skip-validate-db?","skip-validate-db?",-140194140),true], 0));

return G__50306;
});
/**
 * Run batched tx work against a temporary conn, then apply all collected tx-data
 *   to `conn` with a single final `transact!`.
 * 
 *   Semantics:
 *   - Uses `d/conn-from-db` so batch work runs on an isolated in-memory conn.
 *   - Temp conn can still read from storage-backed db state, but cannot write to disk
 *  (`:skip-store? true`).
 *   - Defers db validation during inner batch ops (`:skip-validate-db? true`), then
 *  validates on the final `transact!` to `conn`.
 *   - Supports nested usage.
 * 
 *   Notes:
 *   - `batch-tx-fn` is called as `(batch-tx-fn temp-conn *batch-tx-data)`.
 *   - `listen-db` (if provided) receives each intermediate tx-report from temp conn.
 *   - `transform-tx-meta` runs after the batch body to finalize operation metadata.
 *   - Do not rely on returned tx-report shape for undo/redo behavior.
 */
logseq.db.batch_transact_with_temp_conn_BANG_ = (function logseq$db$batch_transact_with_temp_conn_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___50520 = arguments.length;
var i__5877__auto___50521 = (0);
while(true){
if((i__5877__auto___50521 < len__5876__auto___50520)){
args__5882__auto__.push((arguments[i__5877__auto___50521]));

var G__50522 = (i__5877__auto___50521 + (1));
i__5877__auto___50521 = G__50522;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return logseq.db.batch_transact_with_temp_conn_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(logseq.db.batch_transact_with_temp_conn_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (conn,tx_meta,batch_tx_fn,p__50311){
var map__50312 = p__50311;
var map__50312__$1 = cljs.core.__destructure_map(map__50312);
var listen_db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50312__$1,new cljs.core.Keyword(null,"listen-db","listen-db",1775571058));
var before_commit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50312__$1,new cljs.core.Keyword(null,"before-commit","before-commit",-2016969416));
var transform_tx_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50312__$1,new cljs.core.Keyword(null,"transform-tx-meta","transform-tx-meta",-1096637950),cljs.core.identity);
var temp_conn = logseq.db.temp_conn_from_db(cljs.core.deref(conn));
var _STAR_batch_tx_data = cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY);
var _STAR_complete_QMARK_ = cljs.core.volatile_BANG_(false);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(temp_conn,cljs.core.assoc,new cljs.core.Keyword(null,"batch-tx?","batch-tx?",-1729150581),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"skip-validate-db?","skip-validate-db?",-140194140),true], 0));

var G__50314_50523 = temp_conn;
var G__50315_50524 = new cljs.core.Keyword("logseq.db","temp-conn-batch-tx","logseq.db/temp-conn-batch-tx",691657992);
var G__50316_50525 = (function (p__50317){
var map__50318 = p__50317;
var map__50318__$1 = cljs.core.__destructure_map(map__50318);
var tx_report = map__50318__$1;
var tx_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50318__$1,new cljs.core.Keyword(null,"tx-data","tx-data",934159761));
_STAR_batch_tx_data.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.into.cljs$core$IFn$_invoke$arity$2(_STAR_batch_tx_data.cljs$core$IDeref$_deref$arity$1(null),tx_data));

if(cljs.core.fn_QMARK_(listen_db)){
return (listen_db.cljs$core$IFn$_invoke$arity$1 ? listen_db.cljs$core$IFn$_invoke$arity$1(tx_report) : listen_db.call(null,tx_report));
} else {
return null;
}
});
(datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3 ? datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(G__50314_50523,G__50315_50524,G__50316_50525) : datascript.core.listen_BANG_.call(null,G__50314_50523,G__50315_50524,G__50316_50525));

try{(batch_tx_fn.cljs$core$IFn$_invoke$arity$2 ? batch_tx_fn.cljs$core$IFn$_invoke$arity$2(temp_conn,_STAR_batch_tx_data) : batch_tx_fn.call(null,temp_conn,_STAR_batch_tx_data));

if(cljs.core.fn_QMARK_(before_commit)){
(before_commit.cljs$core$IFn$_invoke$arity$0 ? before_commit.cljs$core$IFn$_invoke$arity$0() : before_commit.call(null));
} else {
}

cljs.core.vreset_BANG_(_STAR_complete_QMARK_,true);

var tx_data = cljs.core.deref(_STAR_batch_tx_data);
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.deref(_STAR_complete_QMARK_);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.seq(tx_data);
} else {
return and__5140__auto__;
}
})())){
return logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx_data,(transform_tx_meta.cljs$core$IFn$_invoke$arity$1 ? transform_tx_meta.cljs$core$IFn$_invoke$arity$1(tx_meta) : transform_tx_meta.call(null,tx_meta)));
} else {
return null;
}
}finally {(datascript.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$2(temp_conn,new cljs.core.Keyword("logseq.db","temp-conn-batch-tx","logseq.db/temp-conn-batch-tx",691657992)) : datascript.core.unlisten_BANG_.call(null,temp_conn,new cljs.core.Keyword("logseq.db","temp-conn-batch-tx","logseq.db/temp-conn-batch-tx",691657992)));

cljs.core.reset_BANG_(temp_conn,null);

cljs.core.vreset_BANG_(_STAR_batch_tx_data,null);
}}));

(logseq.db.batch_transact_with_temp_conn_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(logseq.db.batch_transact_with_temp_conn_BANG_.cljs$lang$applyTo = (function (seq50307){
var G__50308 = cljs.core.first(seq50307);
var seq50307__$1 = cljs.core.next(seq50307);
var G__50309 = cljs.core.first(seq50307__$1);
var seq50307__$2 = cljs.core.next(seq50307__$1);
var G__50310 = cljs.core.first(seq50307__$2);
var seq50307__$3 = cljs.core.next(seq50307__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50308,G__50309,G__50310,seq50307__$3);
}));

logseq.db.batch_transact_listen_BANG_ = (function logseq$db$batch_transact_listen_BANG_(conn,_STAR_tx_data,listen_db){
var G__50321 = conn;
var G__50322 = new cljs.core.Keyword("logseq.db","batch-tx","logseq.db/batch-tx",-1440100264);
var G__50323 = (function (tx_report){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_tx_data,cljs.core.into,new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(tx_report));

if(cljs.core.fn_QMARK_(listen_db)){
return (listen_db.cljs$core$IFn$_invoke$arity$1 ? listen_db.cljs$core$IFn$_invoke$arity$1(tx_report) : listen_db.call(null,tx_report));
} else {
return null;
}
});
return (datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3 ? datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(G__50321,G__50322,G__50323) : datascript.core.listen_BANG_.call(null,G__50321,G__50322,G__50323));
});
logseq.db.batch_transact_cleanup_BANG_ = (function logseq$db$batch_transact_cleanup_BANG_(conn){
(datascript.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.Keyword("logseq.db","batch-tx","logseq.db/batch-tx",-1440100264)) : datascript.core.unlisten_BANG_.call(null,conn,new cljs.core.Keyword("logseq.db","batch-tx","logseq.db/batch-tx",-1440100264)));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(conn,cljs.core.dissoc,new cljs.core.Keyword(null,"skip-store?","skip-store?",-484019625),new cljs.core.Keyword(null,"batch-tx?","batch-tx?",-1729150581));
});
/**
 * Run batched tx work on `conn` and persist once at the end.
 *   Not nestable; throws when called inside another `:batch-tx?`.
 */
logseq.db.batch_transact_BANG_ = (function logseq$db$batch_transact_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___50526 = arguments.length;
var i__5877__auto___50527 = (0);
while(true){
if((i__5877__auto___50527 < len__5876__auto___50526)){
args__5882__auto__.push((arguments[i__5877__auto___50527]));

var G__50528 = (i__5877__auto___50527 + (1));
i__5877__auto___50527 = G__50528;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return logseq.db.batch_transact_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(logseq.db.batch_transact_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (conn,tx_meta,batch_tx_fn,p__50329){
var map__50330 = p__50329;
var map__50330__$1 = cljs.core.__destructure_map(map__50330);
var listen_db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50330__$1,new cljs.core.Keyword(null,"listen-db","listen-db",1775571058));
var db_before = cljs.core.deref(conn);
var _STAR_tx_data = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
try{if(cljs.core.truth_(new cljs.core.Keyword(null,"batch-tx?","batch-tx?",-1729150581).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(conn)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("batch-transact! can't be nested called",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null));
} else {
}

logseq.db.batch_transact_listen_BANG_(conn,_STAR_tx_data,listen_db);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(conn,cljs.core.assoc,new cljs.core.Keyword(null,"skip-store?","skip-store?",-484019625),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"batch-tx?","batch-tx?",-1729150581),true], 0));

var _STAR_batch_tx_report_QMARK__STAR__orig_val__50332_50529 = logseq.db._STAR_batch_tx_report_QMARK__STAR_;
var _STAR_batch_tx_report_QMARK__STAR__temp_val__50333_50530 = true;
(logseq.db._STAR_batch_tx_report_QMARK__STAR_ = _STAR_batch_tx_report_QMARK__STAR__temp_val__50333_50530);

try{(batch_tx_fn.cljs$core$IFn$_invoke$arity$1 ? batch_tx_fn.cljs$core$IFn$_invoke$arity$1(conn) : batch_tx_fn.call(null,conn));
}finally {(logseq.db._STAR_batch_tx_report_QMARK__STAR_ = _STAR_batch_tx_report_QMARK__STAR__orig_val__50332_50529);
}
logseq.db.batch_transact_cleanup_BANG_(conn);

var temp__5829__auto___50531 = datascript.storage.storage(cljs.core.deref(conn));
if((temp__5829__auto___50531 == null)){
} else {
var _storage_50532 = temp__5829__auto___50531;
var G__50334_50533 = cljs.core.deref(conn);
(datascript.core.store.cljs$core$IFn$_invoke$arity$1 ? datascript.core.store.cljs$core$IFn$_invoke$arity$1(G__50334_50533) : datascript.core.store.call(null,G__50334_50533));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"atom","atom",-397043653).cljs$core$IFn$_invoke$arity$1(conn),cljs.core.assoc,new cljs.core.Keyword(null,"tx-tail","tx-tail",1116487556),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"db-last-stored","db-last-stored",-2068760702),cljs.core.deref(conn)], 0));
}

var batch_tx_data = cljs.core.deref(_STAR_tx_data);
var _ = cljs.core.reset_BANG_(_STAR_tx_data,null);
var tx_report = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),db_before,new cljs.core.Keyword(null,"db-after","db-after",-571884666),cljs.core.deref(conn),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_meta,new cljs.core.Keyword(null,"batch-final-tx-report?","batch-final-tx-report?",1725246658),true),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),batch_tx_data], null);
datascript.conn.run_callbacks(conn,tx_report);

return tx_report;
}catch (e50331){var e = e50331;
logseq.common.log.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));

cljs.core.reset_BANG_(conn,db_before);

throw e;
}finally {logseq.db.batch_transact_cleanup_BANG_(conn);

cljs.core.reset_BANG_(_STAR_tx_data,null);
}}));

(logseq.db.batch_transact_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(logseq.db.batch_transact_BANG_.cljs$lang$applyTo = (function (seq50325){
var G__50326 = cljs.core.first(seq50325);
var seq50325__$1 = cljs.core.next(seq50325);
var G__50327 = cljs.core.first(seq50325__$1);
var seq50325__$2 = cljs.core.next(seq50325__$1);
var G__50328 = cljs.core.first(seq50325__$2);
var seq50325__$3 = cljs.core.next(seq50325__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50326,G__50327,G__50328,seq50325__$3);
}));

logseq.db.page_QMARK_ = logseq.db.frontend.entity_util.page_QMARK_;
logseq.db.internal_page_QMARK_ = logseq.db.frontend.entity_util.internal_page_QMARK_;
logseq.db.class_QMARK_ = logseq.db.frontend.entity_util.class_QMARK_;
logseq.db.property_QMARK_ = logseq.db.frontend.entity_util.property_QMARK_;
logseq.db.closed_value_QMARK_ = logseq.db.frontend.entity_util.closed_value_QMARK_;
logseq.db.journal_QMARK_ = logseq.db.frontend.entity_util.journal_QMARK_;
logseq.db.hidden_QMARK_ = logseq.db.frontend.entity_util.hidden_QMARK_;
logseq.db.recycled_QMARK_ = logseq.db.frontend.entity_util.recycled_QMARK_;
logseq.db.some_parent = logseq.db.frontend.entity_util.some_parent;
logseq.db.object_QMARK_ = logseq.db.frontend.entity_util.object_QMARK_;
logseq.db.asset_QMARK_ = logseq.db.frontend.entity_util.asset_QMARK_;
logseq.db.public_built_in_property_QMARK_ = logseq.db.frontend.property.public_built_in_property_QMARK_;
logseq.db.get_entity_types = logseq.db.frontend.entity_util.get_entity_types;
logseq.db.internal_tags = logseq.db.frontend.class$.internal_tags;
logseq.db.private_tags = logseq.db.frontend.class$.private_tags;
logseq.db.private_tag_titles = logseq.db.frontend.class$.private_tag_titles;
logseq.db.private_create_page_tag_QMARK_ = logseq.db.frontend.class$.private_create_page_tag_QMARK_;
logseq.db.extends_hidden_tags = logseq.db.frontend.class$.extends_hidden_tags;
logseq.db.hidden_tags = logseq.db.frontend.class$.hidden_tags;
logseq.db.sort_by_order = (function logseq$db$sort_by_order(blocks){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","order","block/order",-1429282437),blocks);
});
logseq.db.get_block_and_children_aux = (function logseq$db$get_block_and_children_aux(var_args){
var args__5882__auto__ = [];
var len__5876__auto___50534 = arguments.length;
var i__5877__auto___50535 = (0);
while(true){
if((i__5877__auto___50535 < len__5876__auto___50534)){
args__5882__auto__.push((arguments[i__5877__auto___50535]));

var G__50536 = (i__5877__auto___50535 + (1));
i__5877__auto___50535 = G__50536;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return logseq.db.get_block_and_children_aux.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(logseq.db.get_block_and_children_aux.cljs$core$IFn$_invoke$arity$variadic = (function (entity,p__50338){
var map__50339 = p__50338;
var map__50339__$1 = cljs.core.__destructure_map(map__50339);
var opts = map__50339__$1;
var include_property_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50339__$1,new cljs.core.Keyword(null,"include-property-block?","include-property-block?",-211563499),false);
var temp__5823__auto__ = logseq.db.sort_by_order((cljs.core.truth_(include_property_block_QMARK_)?(function (){var children = logseq.db.common.entity_plus.lookup_kv_then_entity.cljs$core$IFn$_invoke$arity$2(entity,new cljs.core.Keyword("block","_raw-parent","block/_raw-parent",628025875));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(children,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (c){
return new cljs.core.Keyword("logseq.property","query","logseq.property/query",-97414126).cljs$core$IFn$_invoke$arity$1(c);
}),children));
})():logseq.db.common.entity_plus.lookup_kv_then_entity.cljs$core$IFn$_invoke$arity$2(entity,new cljs.core.Keyword("block","_parent","block/_parent",-639389670))));
if(cljs.core.truth_(temp__5823__auto__)){
var children = temp__5823__auto__;
return cljs.core.cons(entity,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__50335_SHARP_){
return logseq.db.get_block_and_children_aux.cljs$core$IFn$_invoke$arity$variadic(p1__50335_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children], 0)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity], null);
}
}));

(logseq.db.get_block_and_children_aux.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(logseq.db.get_block_and_children_aux.cljs$lang$applyTo = (function (seq50336){
var G__50337 = cljs.core.first(seq50336);
var seq50336__$1 = cljs.core.next(seq50336);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50337,seq50336__$1);
}));

logseq.db.get_block_and_children = (function logseq$db$get_block_and_children(var_args){
var args__5882__auto__ = [];
var len__5876__auto___50537 = arguments.length;
var i__5877__auto___50538 = (0);
while(true){
if((i__5877__auto___50538 < len__5876__auto___50537)){
args__5882__auto__.push((arguments[i__5877__auto___50538]));

var G__50539 = (i__5877__auto___50538 + (1));
i__5877__auto___50538 = G__50539;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return logseq.db.get_block_and_children.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(logseq.db.get_block_and_children.cljs$core$IFn$_invoke$arity$variadic = (function (db,block_uuid,p__50343){
var map__50344 = p__50343;
var map__50344__$1 = cljs.core.__destructure_map(map__50344);
var opts = map__50344__$1;
var temp__5825__auto__ = (function (){var G__50345 = db;
var G__50346 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__50345,G__50346) : datascript.core.entity.call(null,G__50345,G__50346));
})();
if(cljs.core.truth_(temp__5825__auto__)){
var e = temp__5825__auto__;
return logseq.db.get_block_and_children_aux.cljs$core$IFn$_invoke$arity$variadic(e,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0));
} else {
return null;
}
}));

(logseq.db.get_block_and_children.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(logseq.db.get_block_and_children.cljs$lang$applyTo = (function (seq50340){
var G__50341 = cljs.core.first(seq50340);
var seq50340__$1 = cljs.core.next(seq50340);
var G__50342 = cljs.core.first(seq50340__$1);
var seq50340__$2 = cljs.core.next(seq50340__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50341,G__50342,seq50340__$2);
}));

/**
 * Return blocks of the designated page, without using cache.
 * page-id - eid
 */
logseq.db.get_page_blocks = (function logseq$db$get_page_blocks(var_args){
var args__5882__auto__ = [];
var len__5876__auto___50540 = arguments.length;
var i__5877__auto___50541 = (0);
while(true){
if((i__5877__auto___50541 < len__5876__auto___50540)){
args__5882__auto__.push((arguments[i__5877__auto___50541]));

var G__50542 = (i__5877__auto___50541 + (1));
i__5877__auto___50541 = G__50542;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return logseq.db.get_page_blocks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(logseq.db.get_page_blocks.cljs$core$IFn$_invoke$arity$variadic = (function (db,page_id,p__50350){
var map__50351 = p__50350;
var map__50351__$1 = cljs.core.__destructure_map(map__50351);
var pull_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50351__$1,new cljs.core.Keyword(null,"pull-keys","pull-keys",-768938808),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null));
if(cljs.core.truth_(page_id)){
var datoms = datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","page","block/page",822314108),page_id);
var block_eids = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),datoms);
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(db,pull_keys,block_eids) : datascript.core.pull_many.call(null,db,pull_keys,block_eids));
} else {
return null;
}
}));

(logseq.db.get_page_blocks.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(logseq.db.get_page_blocks.cljs$lang$applyTo = (function (seq50347){
var G__50348 = cljs.core.first(seq50347);
var seq50347__$1 = cljs.core.next(seq50347);
var G__50349 = cljs.core.first(seq50347__$1);
var seq50347__$2 = cljs.core.next(seq50347__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50348,G__50349,seq50347__$2);
}));

logseq.db.get_page_blocks_count = (function logseq$db$get_page_blocks_count(db,page_id){
return cljs.core.count(datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","page","block/page",822314108),page_id));
});
logseq.db.get_block_children_or_property_children = (function logseq$db$get_block_children_or_property_children(block,parent){
var from_property = new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(block);
var closed_property = new cljs.core.Keyword("block","closed-value-property","block/closed-value-property",1157792813).cljs$core$IFn$_invoke$arity$1(block);
return logseq.db.sort_by_order((cljs.core.truth_(closed_property)?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("block","_closed-value-property","block/_closed-value-property",-1361451442),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([closed_property], 0)):(cljs.core.truth_(from_property)?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (e){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(e)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(from_property));
}),new cljs.core.Keyword("block","_raw-parent","block/_raw-parent",628025875).cljs$core$IFn$_invoke$arity$1(parent)):new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(parent)
)));
});
logseq.db.get_right_sibling_for_property_children = (function logseq$db$get_right_sibling_for_property_children(block,parent){
if(((datascript.impl.entity.entity_QMARK_(block)) || ((block == null)))){
} else {
throw (new Error("Assert failed: (or (de/entity? block) (nil? block))"));
}

var children = logseq.db.get_block_children_or_property_children(block,parent);
var right = cljs.core.some((function (child){
if((cljs.core.compare(new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(child),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block)) > (0))){
return child;
} else {
return null;
}
}),children);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(right),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))){
return right;
} else {
return null;
}
});
logseq.db.get_ordinary_sibling = (function logseq$db$get_ordinary_sibling(block,direction){
var db = block.db;
var parent_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block));
var block_order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block);
var vec__50352 = (function (){var G__50358 = direction;
var G__50358__$1 = (((G__50358 instanceof cljs.core.Keyword))?G__50358.fqn:null);
switch (G__50358__$1) {
case "left":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.neg_QMARK_,cljs.core.pos_QMARK_], null);

break;
case "right":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.pos_QMARK_,cljs.core.neg_QMARK_], null);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50358__$1))));

}
})();
var eligible_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50352,(0),null);
var closer_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50352,(1),null);
var vec__50355 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__50359,datom){
var vec__50360 = p__50359;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50360,(0),null);
var best_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50360,(1),null);
var best = vec__50360;
var child_id = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom);
var child_order = (function (){var G__50363 = datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),child_id,new cljs.core.Keyword("block","order","block/order",-1429282437));
var G__50363__$1 = (((G__50363 == null))?null:cljs.core.first(G__50363));
if((G__50363__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__50363__$1);
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = child_order;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = (function (){var G__50364 = cljs.core.compare(child_order,block_order);
return (eligible_QMARK_.cljs$core$IFn$_invoke$arity$1 ? eligible_QMARK_.cljs$core$IFn$_invoke$arity$1(G__50364) : eligible_QMARK_.call(null,G__50364));
})();
if(cljs.core.truth_(and__5140__auto____$1)){
var and__5140__auto____$2 = cljs.core.not(cljs.core.seq(datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),child_id,new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267))));
if(and__5140__auto____$2){
var and__5140__auto____$3 = cljs.core.not(cljs.core.seq(datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),child_id,new cljs.core.Keyword("block","closed-value-property","block/closed-value-property",1157792813))));
if(and__5140__auto____$3){
var or__5142__auto__ = (best_order == null);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var G__50365 = cljs.core.compare(child_order,best_order);
return (closer_QMARK_.cljs$core$IFn$_invoke$arity$1 ? closer_QMARK_.cljs$core$IFn$_invoke$arity$1(G__50365) : closer_QMARK_.call(null,G__50365));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [child_id,child_order], null);
} else {
return best;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null),datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","parent","block/parent",-918309064),parent_id));
var sibling_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50355,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50355,(1),null);
if(cljs.core.truth_(sibling_id)){
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,sibling_id) : datascript.core.entity.call(null,db,sibling_id));
} else {
return null;
}
});
logseq.db.get_right_sibling = (function logseq$db$get_right_sibling(block){
if(((datascript.impl.entity.entity_QMARK_(block)) || ((block == null)))){
} else {
throw (new Error("Assert failed: (or (de/entity? block) (nil? block))"));
}

var temp__5825__auto__ = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5825__auto__)){
var parent = temp__5825__auto__;
if(cljs.core.truth_(new cljs.core.Keyword("block","closed-value-property","block/closed-value-property",1157792813).cljs$core$IFn$_invoke$arity$1(block))){
return logseq.db.get_right_sibling_for_property_children(block,parent);
} else {
if(cljs.core.truth_(new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(block))){
return logseq.db.get_right_sibling_for_property_children(block,parent);
} else {
return logseq.db.get_ordinary_sibling(block,new cljs.core.Keyword(null,"right","right",-452581833));

}
}
} else {
return null;
}
});
logseq.db.get_left_sibling_for_property_children = (function logseq$db$get_left_sibling_for_property_children(block,parent){
if(((datascript.impl.entity.entity_QMARK_(block)) || ((block == null)))){
} else {
throw (new Error("Assert failed: (or (de/entity? block) (nil? block))"));
}

var children = cljs.core.reverse(logseq.db.get_block_children_or_property_children(block,parent));
var left = cljs.core.some((function (child){
if((cljs.core.compare(new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(child),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block)) < (0))){
return child;
} else {
return null;
}
}),children);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))){
return left;
} else {
return null;
}
});
logseq.db.get_left_sibling = (function logseq$db$get_left_sibling(block){
if(((datascript.impl.entity.entity_QMARK_(block)) || ((block == null)))){
} else {
throw (new Error("Assert failed: (or (de/entity? block) (nil? block))"));
}

var temp__5825__auto__ = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5825__auto__)){
var parent = temp__5825__auto__;
if(cljs.core.truth_(new cljs.core.Keyword("block","closed-value-property","block/closed-value-property",1157792813).cljs$core$IFn$_invoke$arity$1(block))){
return logseq.db.get_left_sibling_for_property_children(block,parent);
} else {
if(cljs.core.truth_(new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(block))){
return logseq.db.get_left_sibling_for_property_children(block,parent);
} else {
return logseq.db.get_ordinary_sibling(block,new cljs.core.Keyword(null,"left","left",-399115937));

}
}
} else {
return null;
}
});
logseq.db.get_down = (function logseq$db$get_down(block){
if(((datascript.impl.entity.entity_QMARK_(block)) || ((block == null)))){
} else {
throw (new Error("Assert failed: (or (de/entity? block) (nil? block))"));
}

return cljs.core.first(logseq.db.sort_by_order(new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(block)));
});
logseq.db.get_pages = (function logseq$db$get_pages(db){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(logseq.db.hidden_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var G__50366 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?page-title","?page-title",-2070092934,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null)),new cljs.core.Symbol(null,"?page-title","?page-title",-2070092934,null)], null)], null);
var G__50367 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__50366,G__50367) : datascript.core.q.call(null,G__50366,G__50367));
})()));
});
logseq.db.get_first_page_by_name = logseq.db.common.initial_data.get_first_page_by_name;
/**
 * Returns all page db ids that given title and one of the given `tags`.
 */
logseq.db.page_exists_QMARK_ = (function logseq$db$page_exists_QMARK_(db,page_name,tags){
if(cljs.core.truth_(page_name)){
var tags_SINGLEQUOTE_ = ((cljs.core.coll_QMARK_(tags))?cljs.core.set(tags):cljs.core.PersistentHashSet.createAsIfByAssoc([tags]));
if(((cljs.core.seq(tags_SINGLEQUOTE_)) && (cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.class","Property","logseq.class/Property",1038767048),null,new cljs.core.Keyword("logseq.class","Tag","logseq.class/Tag",-538902083),null], null), null),tags_SINGLEQUOTE_)))){
return cljs.core.seq((function (){var G__50368 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?name","?name",2050703390,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?tag-ident","?tag-ident",-1384320875,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Symbol(null,"?name","?name",2050703390,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Symbol(null,"?tag","?tag",157764474,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?tag","?tag",157764474,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Symbol(null,"?tag-ident","?tag-ident",-1384320875,null)], null)], null);
var G__50369 = db;
var G__50370 = page_name;
var G__50371 = tags_SINGLEQUOTE_;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__50368,G__50369,G__50370,G__50371) : datascript.core.q.call(null,G__50368,G__50369,G__50370,G__50371));
})());
} else {
return cljs.core.seq((function (){var G__50372 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?name","?name",2050703390,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?tag-ident","?tag-ident",-1384320875,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?name","?name",2050703390,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Symbol(null,"?tag","?tag",157764474,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?tag","?tag",157764474,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Symbol(null,"?tag-ident","?tag-ident",-1384320875,null)], null)], null);
var G__50373 = db;
var G__50374 = logseq.common.util.page_name_sanity_lc(page_name);
var G__50375 = tags_SINGLEQUOTE_;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__50372,G__50373,G__50374,G__50375) : datascript.core.q.call(null,G__50372,G__50373,G__50374,G__50375));
})());
}
} else {
return null;
}
});
/**
 * Get a page given its unsanitized name or uuid
 */
logseq.db.get_page = (function logseq$db$get_page(db,page_id_name_or_uuid){
if(cljs.core.truth_(db)){
if(typeof page_id_name_or_uuid === 'number'){
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,page_id_name_or_uuid) : datascript.core.entity.call(null,db,page_id_name_or_uuid));
} else {
var temp__5823__auto__ = ((cljs.core.uuid_QMARK_(page_id_name_or_uuid))?page_id_name_or_uuid:cljs.core.parse_uuid(page_id_name_or_uuid));
if(cljs.core.truth_(temp__5823__auto__)){
var id = temp__5823__auto__;
var G__50377 = db;
var G__50378 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__50377,G__50378) : datascript.core.entity.call(null,G__50377,G__50378));
} else {
var G__50379 = db;
var G__50380 = (function (){var G__50381 = db;
var G__50382 = cljs.core.name(page_id_name_or_uuid);
return (logseq.db.get_first_page_by_name.cljs$core$IFn$_invoke$arity$2 ? logseq.db.get_first_page_by_name.cljs$core$IFn$_invoke$arity$2(G__50381,G__50382) : logseq.db.get_first_page_by_name.call(null,G__50381,G__50382));
})();
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__50379,G__50380) : datascript.core.entity.call(null,G__50379,G__50380));
}
}
} else {
return null;
}
});
/**
 * Get a journal page given its unsanitized name.
 * This will be useful for DB graphs later as we can switch to a different lookup
 * approach for journals e.g. like get-built-in-page
 */
logseq.db.get_journal_page = (function logseq$db$get_journal_page(db,page_name){
if(cljs.core.truth_(db)){
var G__50384 = db;
var G__50385 = (logseq.db.get_first_page_by_name.cljs$core$IFn$_invoke$arity$2 ? logseq.db.get_first_page_by_name.cljs$core$IFn$_invoke$arity$2(db,page_name) : logseq.db.get_first_page_by_name.call(null,db,page_name));
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__50384,G__50385) : datascript.core.entity.call(null,G__50384,G__50385));
} else {
return null;
}
});
/**
 * Get a journal page given its :block/journal-day value.
 */
logseq.db.get_journal_page_by_day = (function logseq$db$get_journal_page_by_day(db,journal_day){
if(cljs.core.truth_((function (){var and__5140__auto__ = db;
if(cljs.core.truth_(and__5140__auto__)){
return journal_day;
} else {
return and__5140__auto__;
}
})())){
var temp__5825__auto__ = (function (){var G__50391 = cljs.core.first(datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),journal_day));
if((G__50391 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(G__50391);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var eid = temp__5825__auto__;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,eid) : datascript.core.entity.call(null,db,eid));
} else {
return null;
}
} else {
return null;
}
});
logseq.db.get_built_in_page = logseq.db.frontend.db.get_built_in_page;
logseq.db.library_QMARK_ = logseq.db.frontend.db.library_QMARK_;
logseq.db.get_library_page = (function logseq$db$get_library_page(db){
return (logseq.db.get_built_in_page.cljs$core$IFn$_invoke$arity$2 ? logseq.db.get_built_in_page.cljs$core$IFn$_invoke$arity$2(db,logseq.common.config.library_page_name) : logseq.db.get_built_in_page.call(null,db,logseq.common.config.library_page_name));
});
/**
 * Case sensitive version of get-page. For use with DB graphs
 */
logseq.db.get_case_page = (function logseq$db$get_case_page(db,page_name_or_uuid){
if(cljs.core.truth_(db)){
var temp__5823__auto__ = ((cljs.core.uuid_QMARK_(page_name_or_uuid))?page_name_or_uuid:cljs.core.parse_uuid(page_name_or_uuid));
if(cljs.core.truth_(temp__5823__auto__)){
var id = temp__5823__auto__;
var G__50397 = db;
var G__50398 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__50397,G__50398) : datascript.core.entity.call(null,G__50397,G__50398));
} else {
var G__50399 = db;
var G__50400 = logseq.db.common.initial_data.get_first_page_by_title(db,page_name_or_uuid);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__50399,G__50400) : datascript.core.entity.call(null,G__50399,G__50400));
}
} else {
return null;
}
});
/**
 * Whether a page is empty. Does it has a non-page block?
 *   `page-id` could be either a string or a db/id.
 */
logseq.db.page_empty_QMARK_ = (function logseq$db$page_empty_QMARK_(db,page_id){
var page_id__$1 = ((typeof page_id === 'string')?(logseq.db.get_first_page_by_name.cljs$core$IFn$_invoke$arity$2 ? logseq.db.get_first_page_by_name.cljs$core$IFn$_invoke$arity$2(db,page_id) : logseq.db.get_first_page_by_name.call(null,db,page_id)):page_id);
var page = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,page_id__$1) : datascript.core.entity.call(null,db,page_id__$1));
return cljs.core.empty_QMARK_(new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(page));
});
logseq.db.get_first_child = (function logseq$db$get_first_child(db,id){
return cljs.core.first(logseq.db.sort_by_order(new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,id) : datascript.core.entity.call(null,db,id)))));
});
logseq.db.get_orphaned_pages = (function logseq$db$get_orphaned_pages(db,p__50403){
var map__50404 = p__50403;
var map__50404__$1 = cljs.core.__destructure_map(map__50404);
var pages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50404__$1,new cljs.core.Keyword(null,"pages","pages",-285406513));
var empty_ref_f = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50404__$1,new cljs.core.Keyword(null,"empty-ref-f","empty-ref-f",666507359),(function (page){
return (cljs.core.count(new cljs.core.Keyword("block","_refs","block/_refs",830218531).cljs$core$IFn$_invoke$arity$1(page)) === (0));
}));
var built_in_pages_names = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50404__$1,new cljs.core.Keyword(null,"built-in-pages-names","built-in-pages-names",-104089994),cljs.core.PersistentHashSet.EMPTY);
var pages__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var or__5142__auto__ = pages;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.db.get_pages(db);
}
})());
var built_in_pages = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,built_in_pages_names));
var orphaned_pages = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(logseq.db.hidden_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.false_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (page){
var temp__5825__auto__ = logseq.db.get_page(db,page);
if(cljs.core.truth_(temp__5825__auto__)){
var page__$1 = temp__5825__auto__;
var name_SINGLEQUOTE_ = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page__$1);
var and__5140__auto__ = (empty_ref_f.cljs$core$IFn$_invoke$arity$1 ? empty_ref_f.cljs$core$IFn$_invoke$arity$1(page__$1) : empty_ref_f.call(null,page__$1));
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = (function (){var or__5142__auto__ = logseq.db.page_empty_QMARK_(db,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page__$1));
if(or__5142__auto__){
return or__5142__auto__;
} else {
var first_child = logseq.db.get_first_child(db,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page__$1));
var children = new cljs.core.Keyword("block","_page","block/_page",1150043350).cljs$core$IFn$_invoke$arity$1(page__$1);
var and__5140__auto____$1 = first_child;
if(cljs.core.truth_(and__5140__auto____$1)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(children))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["",null,"*",null,"-",null], null), null),clojure.string.trim(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(first_child)))));
} else {
return and__5140__auto____$1;
}
}
})();
if(cljs.core.truth_(and__5140__auto____$1)){
var and__5140__auto____$2 = (!(cljs.core.contains_QMARK_(built_in_pages,name_SINGLEQUOTE_)));
if(and__5140__auto____$2){
var and__5140__auto____$3 = cljs.core.not((logseq.db.property_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.property_QMARK_.cljs$core$IFn$_invoke$arity$1(page__$1) : logseq.db.property_QMARK_.call(null,page__$1)));
if(and__5140__auto____$3){
var and__5140__auto____$4 = (!(((clojure.string.includes_QMARK_(name_SINGLEQUOTE_,"/")) && (cljs.core.not((logseq.db.journal_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.journal_QMARK_.cljs$core$IFn$_invoke$arity$1(page__$1) : logseq.db.journal_QMARK_.call(null,page__$1)))))));
if(and__5140__auto____$4){
var and__5140__auto____$5 = cljs.core.not(new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(page__$1));
if(and__5140__auto____$5){
return page__$1;
} else {
return and__5140__auto____$5;
}
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
} else {
return null;
}
}),pages__$1))));
return orphaned_pages;
});
logseq.db.has_children_QMARK_ = (function logseq$db$has_children_QMARK_(db,block_id){
var eid = ((cljs.core.uuid_QMARK_(block_id))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null):block_id);
return (!((new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,eid) : datascript.core.entity.call(null,db,eid))) == null)));
});
logseq.db.collapsed_and_has_children_QMARK_ = (function logseq$db$collapsed_and_has_children_QMARK_(db,block){
var and__5140__auto__ = new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(and__5140__auto__)){
return logseq.db.has_children_QMARK_(db,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
} else {
return and__5140__auto__;
}
});
/**
 * Notice: if `not-collapsed?` is true, will skip searching for any collapsed block.
 */
logseq.db.get_block_last_direct_child_id = (function logseq$db$get_block_last_direct_child_id(var_args){
var G__50424 = arguments.length;
switch (G__50424) {
case 2:
return logseq.db.get_block_last_direct_child_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return logseq.db.get_block_last_direct_child_id.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.db.get_block_last_direct_child_id.cljs$core$IFn$_invoke$arity$2 = (function (db,db_id){
return logseq.db.get_block_last_direct_child_id.cljs$core$IFn$_invoke$arity$3(db,db_id,false);
}));

(logseq.db.get_block_last_direct_child_id.cljs$core$IFn$_invoke$arity$3 = (function (db,db_id,not_collapsed_QMARK_){
var temp__5825__auto__ = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,db_id) : datascript.core.entity.call(null,db,db_id));
if(cljs.core.truth_(temp__5825__auto__)){
var block = temp__5825__auto__;
if((cljs.core.truth_(not_collapsed_QMARK_)?cljs.core.not(logseq.db.collapsed_and_has_children_QMARK_(db,block)):true)){
var children = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(block));
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.last(children));
} else {
return null;
}
} else {
return null;
}
}));

(logseq.db.get_block_last_direct_child_id.cljs$lang$maxFixedArity = 3);

/**
 * Doesn't include nested children.
 */
logseq.db.get_children = (function logseq$db$get_children(var_args){
var G__50427 = arguments.length;
switch (G__50427) {
case 1:
return logseq.db.get_children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return logseq.db.get_children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.db.get_children.cljs$core$IFn$_invoke$arity$1 = (function (block_entity){
return logseq.db.get_children.cljs$core$IFn$_invoke$arity$2(null,block_entity);
}));

(logseq.db.get_children.cljs$core$IFn$_invoke$arity$2 = (function (db,block_entity_or_eid){
var temp__5825__auto__ = ((typeof block_entity_or_eid === 'number')?(datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,block_entity_or_eid) : datascript.core.entity.call(null,db,block_entity_or_eid)):((cljs.core.uuid_QMARK_(block_entity_or_eid))?(function (){var G__50434 = db;
var G__50435 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_entity_or_eid], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__50434,G__50435) : datascript.core.entity.call(null,G__50434,G__50435));
})():block_entity_or_eid
));
if(cljs.core.truth_(temp__5825__auto__)){
var parent = temp__5825__auto__;
return logseq.db.sort_by_order(new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(parent));
} else {
return null;
}
}));

(logseq.db.get_children.cljs$lang$maxFixedArity = 2);

/**
 * Returns parents entities
 */
logseq.db.get_block_parents = (function logseq$db$get_block_parents(var_args){
var args__5882__auto__ = [];
var len__5876__auto___50546 = arguments.length;
var i__5877__auto___50547 = (0);
while(true){
if((i__5877__auto___50547 < len__5876__auto___50546)){
args__5882__auto__.push((arguments[i__5877__auto___50547]));

var G__50548 = (i__5877__auto___50547 + (1));
i__5877__auto___50547 = G__50548;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return logseq.db.get_block_parents.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(logseq.db.get_block_parents.cljs$core$IFn$_invoke$arity$variadic = (function (db,block_id,p__50440){
var map__50441 = p__50440;
var map__50441__$1 = cljs.core.__destructure_map(map__50441);
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50441__$1,new cljs.core.Keyword(null,"depth","depth",1768663640),(100));
var block_id__$1 = block_id;
var parents_SINGLEQUOTE_ = cljs.core.List.EMPTY;
var d = (1);
while(true){
if((d > depth)){
return parents_SINGLEQUOTE_;
} else {
var temp__5823__auto__ = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1((function (){var G__50442 = db;
var G__50443 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id__$1], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__50442,G__50443) : datascript.core.entity.call(null,G__50442,G__50443));
})());
if(cljs.core.truth_(temp__5823__auto__)){
var parent = temp__5823__auto__;
var G__50549 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(parent);
var G__50550 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents_SINGLEQUOTE_,parent);
var G__50551 = (d + (1));
block_id__$1 = G__50549;
parents_SINGLEQUOTE_ = G__50550;
d = G__50551;
continue;
} else {
return parents_SINGLEQUOTE_;
}
}
break;
}
}));

(logseq.db.get_block_parents.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(logseq.db.get_block_parents.cljs$lang$applyTo = (function (seq50436){
var G__50437 = cljs.core.first(seq50436);
var seq50436__$1 = cljs.core.next(seq50436);
var G__50438 = cljs.core.first(seq50436__$1);
var seq50436__$2 = cljs.core.next(seq50436__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50437,G__50438,seq50436__$2);
}));

logseq.db.get_block_children_ids = logseq.db.common.initial_data.get_block_children_ids;
logseq.db.get_block_full_children_ids = logseq.db.common.initial_data.get_block_full_children_ids;
/**
 * The :block/order keys from the page's top-level children down to `block`,
 * sorted root-first. Comparing two paths lexicographically gives the same
 * relative order as a full preorder traversal of the page.
 * Returns nil when `block` isn't reachable from the page through :block/_parent
 * (e.g. property-created blocks).
 */
logseq.db.block_order_path = (function logseq$db$block_order_path(page_id,block){
var block__$1 = block;
var path = cljs.core.List.EMPTY;
while(true){
if(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(block__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","closed-value-property","block/closed-value-property",1157792813).cljs$core$IFn$_invoke$arity$1(block__$1);
}
})())){
return null;
} else {
var parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block__$1);
var path__$1 = cljs.core.cons(new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block__$1),path);
if((parent == null)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent))){
return cljs.core.vec(path__$1);
} else {
var G__50552 = parent;
var G__50553 = path__$1;
block__$1 = G__50552;
path = G__50553;
continue;

}
}
}
break;
}
});
logseq.db.compare_order_paths = (function logseq$db$compare_order_paths(path_1,path_2){
var path_1__$1 = cljs.core.seq(path_1);
var path_2__$1 = cljs.core.seq(path_2);
while(true){
if((((path_1__$1 == null)) && ((path_2__$1 == null)))){
return (0);
} else {
if((path_1__$1 == null)){
return (-1);
} else {
if((path_2__$1 == null)){
return (1);
} else {
var c = cljs.core.compare(cljs.core.first(path_1__$1),cljs.core.first(path_2__$1));
if((c === (0))){
var G__50554 = cljs.core.next(path_1__$1);
var G__50555 = cljs.core.next(path_2__$1);
path_1__$1 = G__50554;
path_2__$1 = G__50555;
continue;
} else {
return c;
}

}
}
}
break;
}
});
/**
 * Blocks could be non consecutive.
 */
logseq.db.sort_page_random_blocks = (function logseq$db$sort_page_random_blocks(_db,blocks){
if(cljs.core.every_QMARK_((function (p1__50447_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(p1__50447_SHARP_),new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks)));
}),blocks)){
} else {
throw (new Error((""+"Assert failed: "+"Blocks must to be in a same page."+"\n"+"(every? (fn* [p1__50447#] (= (:block/page p1__50447#) (:block/page (first blocks)))) blocks)")));
}

var page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks)));
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (p__50452,p__50453){
var vec__50456 = p__50452;
var path_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50456,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50456,(1),null);
var vec__50459 = p__50453;
var path_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50459,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50459,(1),null);
return logseq.db.compare_order_paths(path_1,path_2);
}),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (block){
var temp__5825__auto__ = logseq.db.block_order_path(page_id,block);
if(cljs.core.truth_(temp__5825__auto__)){
var path = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,block], null);
} else {
return null;
}
}),blocks))));
});
/**
 * The child block could be collapsed.
 */
logseq.db.last_child_block_QMARK_ = (function logseq$db$last_child_block_QMARK_(db,parent_id,child_id){
var temp__5825__auto__ = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,child_id) : datascript.core.entity.call(null,db,child_id));
if(cljs.core.truth_(temp__5825__auto__)){
var child = temp__5825__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent_id,child_id)){
return true;
} else {
if(cljs.core.truth_(logseq.db.get_right_sibling(child))){
return false;
} else {
var G__50465 = db;
var G__50466 = parent_id;
var G__50467 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(child));
return (logseq.db.last_child_block_QMARK_.cljs$core$IFn$_invoke$arity$3 ? logseq.db.last_child_block_QMARK_.cljs$core$IFn$_invoke$arity$3(G__50465,G__50466,G__50467) : logseq.db.last_child_block_QMARK_.call(null,G__50465,G__50466,G__50467));

}
}
} else {
return null;
}
});
logseq.db.consecutive_block_QMARK_ = (function logseq$db$consecutive_block_QMARK_(db,block_1,block_2){
var aux_fn = (function (block_1__$1,block_2__$1){
var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block_1__$1),new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block_2__$1));
if(and__5140__auto__){
var or__5142__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(logseq.db.get_left_sibling(block_2__$1)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block_1__$1));
if(or__5142__auto__){
return or__5142__auto__;
} else {
var temp__5825__auto__ = logseq.db.get_left_sibling((function (){var G__50470 = db;
var G__50471 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block_2__$1);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__50470,G__50471) : datascript.core.entity.call(null,G__50470,G__50471));
})());
if(cljs.core.truth_(temp__5825__auto__)){
var prev_sibling = temp__5825__auto__;
return logseq.db.last_child_block_QMARK_(db,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(prev_sibling),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block_1__$1));
} else {
return null;
}
}
} else {
return and__5140__auto__;
}
});
var or__5142__auto__ = aux_fn(block_1,block_2);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return aux_fn(block_2,block_1);
}
});
logseq.db.get_non_consecutive_blocks = (function logseq$db$get_non_consecutive_blocks(db,blocks){
return cljs.core.vec(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,_block){
if(((i + (1)) < cljs.core.count(blocks))){
if(cljs.core.truth_(logseq.db.consecutive_block_QMARK_(db,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(blocks,i),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(blocks,(i + (1)))))){
return null;
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(blocks,i);
}
} else {
return null;
}
}),blocks));
});
logseq.db.new_block_id = (function logseq$db$new_block_id(){
return logseq.common.uuid.gen_uuid.cljs$core$IFn$_invoke$arity$0();
});
/**
 * return the source page of an alias
 */
logseq.db.get_alias_source_page = (function logseq$db$get_alias_source_page(db,alias_id){
if(cljs.core.truth_(alias_id)){
return cljs.core.first(new cljs.core.Keyword("block","_alias","block/_alias",444442061).cljs$core$IFn$_invoke$arity$1((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,alias_id) : datascript.core.entity.call(null,db,alias_id))));
} else {
return null;
}
});
logseq.db.get_block_alias = logseq.db.common.initial_data.get_block_alias;
logseq.db.page_alias_set = (function logseq$db$page_alias_set(db,page_id){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([page_id]),cljs.core.set((logseq.db.get_block_alias.cljs$core$IFn$_invoke$arity$2 ? logseq.db.get_block_alias.cljs$core$IFn$_invoke$arity$2(db,page_id) : logseq.db.get_block_alias.call(null,db,page_id))));
});
logseq.db.get_block_refs_count = logseq.db.common.initial_data.get_block_refs_count;
logseq.db.hidden_or_internal_tag_QMARK_ = (function logseq$db$hidden_or_internal_tag_QMARK_(e){
var or__5142__auto__ = logseq.db.frontend.entity_util.hidden_QMARK_(e);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var G__50484 = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(e);
return (logseq.db.frontend.class$.internal_tags.cljs$core$IFn$_invoke$arity$1 ? logseq.db.frontend.class$.internal_tags.cljs$core$IFn$_invoke$arity$1(G__50484) : logseq.db.frontend.class$.internal_tags.call(null,G__50484));
}
});
logseq.db.get_all_pages = (function logseq$db$get_all_pages(db){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (d){
var e = (function (){var G__50487 = db;
var G__50488 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(d);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__50487,G__50488) : datascript.core.entity.call(null,G__50487,G__50488));
})();
if(cljs.core.truth_(logseq.db.hidden_or_internal_tag_QMARK_(e))){
return null;
} else {
return e;
}
}),datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","name","block/name",1619760316)));
});
logseq.db.get_key_value = (function logseq$db$get_key_value(db,key_ident){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("logseq.kv",cljs.core.namespace(key_ident))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key_ident)+"\n"+"(= \"logseq.kv\" (namespace key-ident))")));
}

return new cljs.core.Keyword("kv","value","kv/value",305981670).cljs$core$IFn$_invoke$arity$1((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,key_ident) : datascript.core.entity.call(null,db,key_ident)));
});
logseq.db.kv = logseq.db.sqlite.util.kv;
logseq.db.get_graph_rtc_uuid = (function logseq$db$get_graph_rtc_uuid(db){
if(cljs.core.truth_(db)){
return logseq.db.get_key_value(db,new cljs.core.Keyword("logseq.kv","graph-uuid","logseq.kv/graph-uuid",339522676));
} else {
return null;
}
});
logseq.db.get_graph_local_uuid = (function logseq$db$get_graph_local_uuid(db){
if(cljs.core.truth_(db)){
return logseq.db.get_key_value(db,new cljs.core.Keyword("logseq.kv","local-graph-uuid","logseq.kv/local-graph-uuid",1789980105));
} else {
return null;
}
});
logseq.db.get_graph_schema_version = (function logseq$db$get_graph_schema_version(db){
if(cljs.core.truth_(db)){
return logseq.db.get_key_value(db,new cljs.core.Keyword("logseq.kv","schema-version","logseq.kv/schema-version",-1467606676));
} else {
return null;
}
});
logseq.db.get_graph_remote_schema_version = (function logseq$db$get_graph_remote_schema_version(db){
if(cljs.core.truth_(db)){
return logseq.db.get_key_value(db,new cljs.core.Keyword("logseq.kv","remote-schema-version","logseq.kv/remote-schema-version",988970829));
} else {
return null;
}
});
logseq.db.get_graph_rtc_e2ee_QMARK_ = (function logseq$db$get_graph_rtc_e2ee_QMARK_(db){
if(cljs.core.truth_(db)){
return logseq.db.get_key_value(db,new cljs.core.Keyword("logseq.kv","graph-rtc-e2ee?","logseq.kv/graph-rtc-e2ee?",1988827753));
} else {
return null;
}
});
logseq.db.get_all_properties = logseq.db.frontend.db.get_all_properties;
logseq.db.get_class_extends = logseq.db.frontend.class$.get_class_extends;
logseq.db.get_classes_parents = logseq.db.frontend.db.get_classes_parents;
logseq.db.get_page_parents = logseq.db.frontend.db.get_page_parents;
logseq.db.get_title_with_parents = logseq.db.frontend.db.get_title_with_parents;
logseq.db.class_instance_QMARK_ = logseq.db.frontend.db.class_instance_QMARK_;
logseq.db.inline_tag_QMARK_ = logseq.db.frontend.db.inline_tag_QMARK_;
logseq.db.node_display_type_classes = logseq.db.frontend.db.node_display_type_classes;
logseq.db.get_class_ident_by_display_type = logseq.db.frontend.db.get_class_ident_by_display_type;
logseq.db.get_display_type_by_class_ident = logseq.db.frontend.db.get_display_type_by_class_ident;
logseq.db.get_recent_updated_pages = logseq.db.common.initial_data.get_recent_updated_pages;
logseq.db.get_latest_journals = logseq.db.common.initial_data.get_latest_journals;
logseq.db.get_pages_relation = (function logseq$db$get_pages_relation(db,with_journal_QMARK_){
var q = (cljs.core.truth_(with_journal_QMARK_)?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?ref-page","?ref-page",-893277661,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?ref-page","?ref-page",-893277661,null)], null)], null):new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?ref-page","?ref-page",-893277661,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","tags","block/tags",1814948340)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("logseq.class","Journal","logseq.class/Journal",1979741081)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?ref-page","?ref-page",-893277661,null)], null)], null));
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(q,db) : datascript.core.q.call(null,q,db));
});
logseq.db.get_all_tagged_pages = (function logseq$db$get_all_tagged_pages(db){
var G__50496 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Symbol(null,"?tag","?tag",157764474,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Symbol(null,"?tag","?tag",157764474,null)], null)], null);
var G__50497 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__50496,G__50497) : datascript.core.q.call(null,G__50496,G__50497));
});
/**
 * Check whether a `page` exists on the Library page
 */
logseq.db.page_in_library_QMARK_ = (function logseq$db$page_in_library_QMARK_(db,page){
if(cljs.core.truth_((logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1(page) : logseq.db.page_QMARK_.call(null,page)))){
var temp__5825__auto__ = (logseq.db.get_built_in_page.cljs$core$IFn$_invoke$arity$2 ? logseq.db.get_built_in_page.cljs$core$IFn$_invoke$arity$2(db,logseq.common.config.library_page_name) : logseq.db.get_built_in_page.call(null,db,logseq.common.config.library_page_name));
if(cljs.core.truth_(temp__5825__auto__)){
var library_page = temp__5825__auto__;
var parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(page);
while(true){
if((parent == null)){
return false;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(library_page))){
return true;
} else {
var G__50557 = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(parent);
parent = G__50557;
continue;

}
}
break;
}
} else {
return null;
}
} else {
return null;
}
});
logseq.db.get_class_title_with_extends = logseq.db.frontend.db.get_class_title_with_extends;
logseq.db.bidirectional_property_attr_QMARK_ = (function logseq$db$bidirectional_property_attr_QMARK_(db,attr){
if(cljs.core.qualified_keyword_QMARK_(attr)){
var attr_ns = cljs.core.namespace(attr);
var and__5140__auto__ = ((logseq.db.frontend.property.user_property_namespace_QMARK_(attr_ns)) || (logseq.db.frontend.property.plugin_property_QMARK_(attr)));
if(and__5140__auto__){
var temp__5825__auto__ = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,attr) : datascript.core.entity.call(null,db,attr));
if(cljs.core.truth_(temp__5825__auto__)){
var property = temp__5825__auto__;
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(property))) && (cljs.core.seq(new cljs.core.Keyword("logseq.property","classes","logseq.property/classes",913750486).cljs$core$IFn$_invoke$arity$1(property))));
} else {
return null;
}
} else {
return and__5140__auto__;
}
} else {
return null;
}
});
logseq.db.get_bidirectional_property_attrs = (function logseq$db$get_bidirectional_property_attrs(db){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(logseq.db.bidirectional_property_attr_QMARK_,db),(function (){var G__50499 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?a","?a",1314302913,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?property","?property",-192641124,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Symbol(null,"?a","?a",1314302913,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?property","?property",-192641124,null),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?property","?property",-192641124,null),new cljs.core.Keyword("logseq.property","classes","logseq.property/classes",913750486),new cljs.core.Symbol(null,"?class","?class",919269736,null)], null)], null);
var G__50500 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__50499,G__50500) : datascript.core.q.call(null,G__50499,G__50500));
})());
});
logseq.db.get_ea_by_v = (function logseq$db$get_ea_by_v(db,attrs,v){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (attr){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (datom){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom),attr], null);
}),datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),attr,v));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs], 0));
});
logseq.db.add_entity = (function logseq$db$add_entity(acc,class_id,entity){
if(cljs.core.truth_(class_id)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,class_id,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),entity);
} else {
return acc;
}
});
logseq.db.build_bidirectional_property_group = (function logseq$db$build_bidirectional_property_group(db,p__50505){
var vec__50506 = p__50505;
var class_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50506,(0),null);
var entities = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50506,(1),null);
var class$ = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,class_id) : datascript.core.entity.call(null,db,class_id));
if(new cljs.core.Keyword("logseq.property.class","enable-bidirectional?","logseq.property.class/enable-bidirectional?",-291786138).cljs$core$IFn$_invoke$arity$1(class$) === true){
var custom_title = (function (){var temp__5825__auto__ = new cljs.core.Keyword("logseq.property.class","bidirectional-property-title","logseq.property.class/bidirectional-property-title",-605054187).cljs$core$IFn$_invoke$arity$1(class$);
if(cljs.core.truth_(temp__5825__auto__)){
var custom = temp__5825__auto__;
if(typeof custom === 'string'){
return custom;
} else {
return logseq.db.frontend.property.property_value_content(custom);
}
} else {
return null;
}
})();
var title = ((clojure.string.blank_QMARK_(custom_title))?logseq.common.plural.plural(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(class$)):custom_title);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,class$),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(class$)),new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","created-at","block/created-at",1440015),entities)], null);
} else {
return null;
}
});
/**
 * Given a target entity id, returns a seq of maps with:
 * * :class - class entity
 * * :title - pluralized class title
 * * :entities - node entities that reference the target via ref properties
 */
logseq.db.get_bidirectional_properties = (function logseq$db$get_bidirectional_properties(db,target_id){
if(cljs.core.truth_((function (){var and__5140__auto__ = db;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = target_id;
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.not(new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,target_id) : datascript.core.entity.call(null,db,target_id))));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
var bidirectional_attrs = logseq.db.get_bidirectional_property_attrs(db);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","created-at","block/created-at",1440015),new cljs.core.Keyword(null,"class","class",-2030961996)),cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(logseq.db.build_bidirectional_property_group,db),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__50509){
var vec__50510 = p__50509;
var class_ent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50510,(0),null);
var entity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50510,(1),null);
return logseq.db.add_entity(acc,class_ent,entity);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__50513){
var vec__50514 = p__50513;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50514,(0),null);
var _a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50514,(1),null);
var temp__5825__auto__ = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,e) : datascript.core.entity.call(null,db,e));
if(cljs.core.truth_(temp__5825__auto__)){
var entity = temp__5825__auto__;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity),target_id)) && ((((!(logseq.db.frontend.entity_util.recycled_QMARK_(entity)))) && (((cljs.core.not(logseq.db.frontend.entity_util.class_QMARK_(entity))) && (cljs.core.not(logseq.db.frontend.entity_util.property_QMARK_(entity))))))))){
var classes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.entity_util.class_QMARK_,new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(entity));
if(cljs.core.seq(classes)){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (class_ent){
if(((cljs.core.not((logseq.db.built_in_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.built_in_QMARK_.cljs$core$IFn$_invoke$arity$1(class_ent) : logseq.db.built_in_QMARK_.call(null,class_ent)))) && ((!(logseq.db.frontend.entity_util.recycled_QMARK_(class_ent)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(class_ent),entity], null);
} else {
return null;
}
}),classes);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}),logseq.db.get_ea_by_v(db,bidirectional_attrs,target_id))], 0)))));
} else {
return null;
}
});

//# sourceMappingURL=logseq.db.js.map
