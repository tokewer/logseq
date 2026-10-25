goog.provide('logseq.db.common.sqlite');
var module$node_modules$path$path=shadow.js.require("module$node_modules$path$path", {});
/**
 * Creates a sqlite table for use with datascript.storage if one doesn't exist
 */
logseq.db.common.sqlite.create_kvs_table_BANG_ = (function logseq$db$common$sqlite$create_kvs_table_BANG_(sqlite_db){
return sqlite_db.exec("create table if not exists kvs (addr INTEGER primary key, content TEXT, addresses JSON)");
});
/**
 * The largest tx among the datoms of the stored tail restore-conn replayed.
 */
logseq.db.common.sqlite.tail_max_tx = (function logseq$db$common$sqlite$tail_max_tx(conn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (max_tx,datoms){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (max_tx__$1,datom){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2(max_tx__$1,new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(datom));
}),max_tx,datoms);
}),(0),new cljs.core.Keyword(null,"tx-tail","tx-tail",1116487556).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"atom","atom",-397043653).cljs$core$IFn$_invoke$arity$1(conn))));
});
/**
 * Given a datascript storage, returns a datascript connection for it.
 *   A restore replays each stored tail entry (the datoms of 1 transact!) and
 *   sets :max-tx to the tx of its first datom. A transaction the worker
 *   pipeline extends spans several tx ids (1 d/with each) in 1 entry, and the
 *   replayed datoms keep their own tx ids, so the restored :max-tx fell short
 *   of the one the graph had: the next transaction took a tx id the graph's
 *   datoms already carried, and the checksum, stored with the :max-tx it
 *   covers, was recomputed on every such reopen. Take the largest tx of the
 *   tail's datoms.
 */
logseq.db.common.sqlite.get_storage_conn = (function logseq$db$common$sqlite$get_storage_conn(storage,schema){
var temp__5823__auto__ = (datascript.core.restore_conn.cljs$core$IFn$_invoke$arity$1 ? datascript.core.restore_conn.cljs$core$IFn$_invoke$arity$1(storage) : datascript.core.restore_conn.call(null,storage));
if(cljs.core.truth_(temp__5823__auto__)){
var conn = temp__5823__auto__;
var max_tx = logseq.db.common.sqlite.tail_max_tx(conn);
if((max_tx > new cljs.core.Keyword(null,"max-tx","max-tx",1119558339).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(conn)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(conn,cljs.core.assoc,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),max_tx);
} else {
}

return conn;
} else {
var G__67247 = schema;
var G__67248 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"storage","storage",1867247511),storage], null);
return (datascript.core.create_conn.cljs$core$IFn$_invoke$arity$2 ? datascript.core.create_conn.cljs$core$IFn$_invoke$arity$2(G__67247,G__67248) : datascript.core.create_conn.call(null,G__67247,G__67248));
}
});
logseq.db.common.sqlite.sanitize_db_name = (function logseq$db$common$sqlite$sanitize_db_name(db_name){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(db_name,logseq.db.sqlite.util.db_version_prefix,""),"/","_"),"\\","_"),":","_");
});
logseq.db.common.sqlite.get_db_full_path = (function logseq$db$common$sqlite$get_db_full_path(graphs_dir,db_name){
var graph_dir_name = logseq.common.graph_dir.repo__GT_encoded_graph_dir_name(db_name);
var graph_dir = module$node_modules$path$path.join(graphs_dir,graph_dir_name);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [graph_dir_name,logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(graph_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["db.sqlite"], 0))], null);
});
logseq.db.common.sqlite.get_db_backups_path = (function logseq$db$common$sqlite$get_db_backups_path(graphs_dir,db_name){
var graph_dir_name = logseq.common.graph_dir.repo__GT_encoded_graph_dir_name(db_name);
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(graphs_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph_dir_name,"backups"], 0));
});

//# sourceMappingURL=logseq.db.common.sqlite.js.map
