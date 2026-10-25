goog.provide('logseq.graph_parser.exporter.finalize');
logseq.graph_parser.exporter.finalize.remove_block_ref_from_title = (function logseq$graph_parser$exporter$finalize$remove_block_ref_from_title(title,block_uuid){
if(typeof title === 'string'){
return clojure.string.trim(clojure.string.replace(clojure.string.replace(clojure.string.replace(title,logseq.common.util.block_ref.__GT_block_ref(block_uuid),""),logseq.common.util.page_ref.__GT_page_ref(block_uuid),""),/ {2,}/," "));
} else {
return null;
}
});
logseq.graph_parser.exporter.finalize.placeholder_block_ref_QMARK_ = (function logseq$graph_parser$exporter$finalize$placeholder_block_ref_QMARK_(entity){
var and__5140__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(entity);
if(cljs.core.truth_(and__5140__auto__)){
return (new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(entity) == null);
} else {
return and__5140__auto__;
}
});
logseq.graph_parser.exporter.finalize.missing_placeholder_ref_datoms = (function logseq$graph_parser$exporter$finalize$missing_placeholder_ref_datoms(db,attr,candidate_ref_uuids){
if(cljs.core.seq(candidate_ref_uuids)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (ref_uuid){
var temp__5825__auto__ = (function (){var G__82845 = (function (){var G__82846 = db;
var G__82847 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),ref_uuid], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__82846,G__82847) : datascript.core.entity.call(null,G__82846,G__82847));
})();
if((G__82845 == null)){
return null;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(G__82845);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var ref_id = temp__5825__auto__;
if(cljs.core.truth_(logseq.graph_parser.exporter.finalize.placeholder_block_ref_QMARK_((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,ref_id) : datascript.core.entity.call(null,db,ref_id))))){
var iter__5628__auto__ = (function logseq$graph_parser$exporter$finalize$missing_placeholder_ref_datoms_$_iter__82849(s__82850){
return (new cljs.core.LazySeq(null,(function (){
var s__82850__$1 = s__82850;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__82850__$1);
if(temp__5825__auto____$1){
var s__82850__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__82850__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__82850__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__82852 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__82851 = (0);
while(true){
if((i__82851 < size__5627__auto__)){
var datom = cljs.core._nth(c__5626__auto__,i__82851);
cljs.core.chunk_append(b__82852,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source-id","source-id",-585995304),new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom),new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884),ref_id,new cljs.core.Keyword(null,"ref-uuid","ref-uuid",1176722901),ref_uuid], null));

var G__82962 = (i__82851 + (1));
i__82851 = G__82962;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82852),logseq$graph_parser$exporter$finalize$missing_placeholder_ref_datoms_$_iter__82849(cljs.core.chunk_rest(s__82850__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82852),null);
}
} else {
var datom = cljs.core.first(s__82850__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source-id","source-id",-585995304),new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom),new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884),ref_id,new cljs.core.Keyword(null,"ref-uuid","ref-uuid",1176722901),ref_uuid], null),logseq$graph_parser$exporter$finalize$missing_placeholder_ref_datoms_$_iter__82849(cljs.core.rest(s__82850__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),attr,ref_id));
} else {
return null;
}
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([candidate_ref_uuids], 0));
} else {
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (datom){
var ref_entity = (function (){var G__82857 = db;
var G__82858 = new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__82857,G__82858) : datascript.core.entity.call(null,G__82857,G__82858));
})();
if(cljs.core.truth_(logseq.graph_parser.exporter.finalize.placeholder_block_ref_QMARK_(ref_entity))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source-id","source-id",-585995304),new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom),new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom),new cljs.core.Keyword(null,"ref-uuid","ref-uuid",1176722901),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(ref_entity)], null);
} else {
return null;
}
}),datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"aevt","aevt",-585148059),attr));
}
});
logseq.graph_parser.exporter.finalize.cleanup_missing_block_refs_tx = (function logseq$graph_parser$exporter$finalize$cleanup_missing_block_refs_tx(var_args){
var G__82860 = arguments.length;
switch (G__82860) {
case 1:
return logseq.graph_parser.exporter.finalize.cleanup_missing_block_refs_tx.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return logseq.graph_parser.exporter.finalize.cleanup_missing_block_refs_tx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.graph_parser.exporter.finalize.cleanup_missing_block_refs_tx.cljs$core$IFn$_invoke$arity$1 = (function (db){
return logseq.graph_parser.exporter.finalize.cleanup_missing_block_refs_tx.cljs$core$IFn$_invoke$arity$3(db,null,null);
}));

(logseq.graph_parser.exporter.finalize.cleanup_missing_block_refs_tx.cljs$core$IFn$_invoke$arity$3 = (function (db,candidate_ref_uuids,embed_child_uuids){
var missing_ref_datoms = logseq.graph_parser.exporter.finalize.missing_placeholder_ref_datoms(db,new cljs.core.Keyword("block","refs","block/refs",-1214495349),candidate_ref_uuids);
var missing_link_datoms = logseq.graph_parser.exporter.finalize.missing_placeholder_ref_datoms(db,new cljs.core.Keyword("block","link","block/link",-1872399993),candidate_ref_uuids);
var refs_by_source_id = cljs.core.group_by(new cljs.core.Keyword(null,"source-id","source-id",-585995304),missing_ref_datoms);
var retract_ref_tx = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__82861){
var vec__82862 = p__82861;
var source_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82862,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82862,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__82867){
var map__82868 = p__82867;
var map__82868__$1 = cljs.core.__destructure_map(map__82868);
var ref_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82868__$1,new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),source_id,new cljs.core.Keyword("block","refs","block/refs",-1214495349),ref_id], null);
}),refs);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([refs_by_source_id], 0));
var retract_link_tx = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__82870){
var map__82871 = p__82870;
var map__82871__$1 = cljs.core.__destructure_map(map__82871);
var source_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82871__$1,new cljs.core.Keyword(null,"source-id","source-id",-585995304));
var ref_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82871__$1,new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884));
if(cljs.core.contains_QMARK_(embed_child_uuids,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,source_id) : datascript.core.entity.call(null,db,source_id))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),source_id], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),source_id,new cljs.core.Keyword("block","link","block/link",-1872399993),ref_id], null);
}
}),missing_link_datoms);
var update_title_tx = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__82874){
var vec__82875 = p__82874;
var source_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82875,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82875,(1),null);
var source = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,source_id) : datascript.core.entity.call(null,db,source_id));
var title = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(source);
var title_SINGLEQUOTE_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(logseq.graph_parser.exporter.finalize.remove_block_ref_from_title,title,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ref-uuid","ref-uuid",1176722901),refs));
if(((typeof title_SINGLEQUOTE_ === 'string') && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(title,title_SINGLEQUOTE_)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),source_id,new cljs.core.Keyword("block","title","block/title",710445684),title_SINGLEQUOTE_], null);
} else {
return null;
}
}),refs_by_source_id);
var retract_placeholder_tx = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__82880){
var vec__82881 = p__82880;
var ref_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82881,(0),null);
var ref_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82881,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),ref_id,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),ref_uuid], null);
}),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884),new cljs.core.Keyword(null,"ref-uuid","ref-uuid",1176722901)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(missing_ref_datoms,missing_link_datoms))));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(retract_ref_tx,retract_link_tx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([update_title_tx,retract_placeholder_tx], 0));
}));

(logseq.graph_parser.exporter.finalize.cleanup_missing_block_refs_tx.cljs$lang$maxFixedArity = 3);

logseq.graph_parser.exporter.finalize.set_finishing_import_ui_BANG_ = (function logseq$graph_parser$exporter$finalize$set_finishing_import_ui_BANG_(set_ui_state){
var G__82885_82977 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","importing-state","graph/importing-state",34918559),new cljs.core.Keyword(null,"step","step",1288888124)], null);
var G__82886_82978 = new cljs.core.Keyword(null,"finishing","finishing",1917048513);
(set_ui_state.cljs$core$IFn$_invoke$arity$2 ? set_ui_state.cljs$core$IFn$_invoke$arity$2(G__82885_82977,G__82886_82978) : set_ui_state.call(null,G__82885_82977,G__82886_82978));

var G__82888_82979 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","importing-state","graph/importing-state",34918559),new cljs.core.Keyword(null,"label","label",1718410804)], null);
var G__82889_82980 = new cljs.core.Keyword("import","finishing","import/finishing",166086760);
(set_ui_state.cljs$core$IFn$_invoke$arity$2 ? set_ui_state.cljs$core$IFn$_invoke$arity$2(G__82888_82979,G__82889_82980) : set_ui_state.call(null,G__82888_82979,G__82889_82980));

var G__82890 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","importing-state","graph/importing-state",34918559),new cljs.core.Keyword(null,"current-page","current-page",-101294180)], null);
var G__82891 = null;
return (set_ui_state.cljs$core$IFn$_invoke$arity$2 ? set_ui_state.cljs$core$IFn$_invoke$arity$2(G__82890,G__82891) : set_ui_state.call(null,G__82890,G__82891));
});
/**
 * Stamp :block/tx-id and rebuild :block/refs once after file import.
 * 
 *   Per-file import txs set :logseq.graph-parser.exporter/new-graph?, so CLI listeners and worker
 *   transact-pipeline skip refs. This pass writes both in one transact.
 *   File-graph import does not notify renderer clients; :logseq.graph-parser.exporter/imported-data?
 *   skips worker render-delta broadcast. :transact-new-graph-refs? skips
 *   the worker pipeline so refs are not rebuilt a second time.
 */
logseq.graph_parser.exporter.finalize.finalize_imported_graph_BANG_ = (function logseq$graph_parser$exporter$finalize$finalize_imported_graph_BANG_(conn){
var db = cljs.core.deref(conn);
var entity_ids = (function (){var G__82892 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","title","block/title",710445684)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"missing?","missing?",-1710383910,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","tx-id","block/tx-id",547556161))], null)], null);
var G__82893 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__82892,G__82893) : datascript.core.q.call(null,G__82892,G__82893));
})();
if(cljs.core.seq(entity_ids)){
var tx_id = (new cljs.core.Keyword(null,"max-tx","max-tx",1119558339).cljs$core$IFn$_invoke$arity$1(db) + (1));
var rebuild_refs = logseq.outliner.pipeline.db_rebuild_block_refs_fn(db);
var tx = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (id){
var block = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,id) : datascript.core.entity.call(null,db,id));
var refs = (cljs.core.truth_(new cljs.core.Keyword("logseq.property.reaction","target","logseq.property.reaction/target",1127571850).cljs$core$IFn$_invoke$arity$1(block))?null:cljs.core.set(rebuild_refs(block)));
var old_refs = ((cljs.core.seq(refs))?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"v","v",21465059)),datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),id,new cljs.core.Keyword("block","refs","block/refs",-1214495349))):null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),id,new cljs.core.Keyword("block","tx-id","block/tx-id",547556161),tx_id], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ref){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),id,new cljs.core.Keyword("block","refs","block/refs",-1214495349),ref], null);
}),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(old_refs,refs)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ref){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),id,new cljs.core.Keyword("block","refs","block/refs",-1214495349),ref], null);
}),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(refs,old_refs))], 0));
})),entity_ids);
return logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("logseq.graph-parser.exporter","imported-data?","logseq.graph-parser.exporter/imported-data?",1785602641),true,new cljs.core.Keyword("logseq.graph-parser.exporter","new-graph?","logseq.graph-parser.exporter/new-graph?",-2038807565),true,new cljs.core.Keyword(null,"transact-new-graph-refs?","transact-new-graph-refs?",403866193),true], null));
} else {
return null;
}
});
logseq.graph_parser.exporter.finalize.cleanup_missing_block_refs_BANG_ = (function logseq$graph_parser$exporter$finalize$cleanup_missing_block_refs_BANG_(var_args){
var G__82896 = arguments.length;
switch (G__82896) {
case 1:
return logseq.graph_parser.exporter.finalize.cleanup_missing_block_refs_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return logseq.graph_parser.exporter.finalize.cleanup_missing_block_refs_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.graph_parser.exporter.finalize.cleanup_missing_block_refs_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (conn){
return logseq.graph_parser.exporter.finalize.cleanup_missing_block_refs_BANG_.cljs$core$IFn$_invoke$arity$2(conn,null);
}));

(logseq.graph_parser.exporter.finalize.cleanup_missing_block_refs_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,import_state){
var candidate_ref_uuids = (cljs.core.truth_(import_state)?cljs.core.deref(new cljs.core.Keyword(null,"placeholder-ref-uuids","placeholder-ref-uuids",1671444975).cljs$core$IFn$_invoke$arity$1(import_state)):null);
var embed_child_uuids = (function (){var G__82897 = import_state;
var G__82897__$1 = (((G__82897 == null))?null:new cljs.core.Keyword(null,"embed-child-uuids","embed-child-uuids",2120073418).cljs$core$IFn$_invoke$arity$1(G__82897));
if((G__82897__$1 == null)){
return null;
} else {
return cljs.core.deref(G__82897__$1);
}
})();
var tx = logseq.graph_parser.exporter.finalize.cleanup_missing_block_refs_tx.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(conn),candidate_ref_uuids,embed_child_uuids);
if(cljs.core.seq(tx)){
return logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.graph-parser.exporter","imported-data?","logseq.graph-parser.exporter/imported-data?",1785602641),true], null));
} else {
return null;
}
}));

(logseq.graph_parser.exporter.finalize.cleanup_missing_block_refs_BANG_.cljs$lang$maxFixedArity = 2);

logseq.graph_parser.exporter.finalize.journal_uuid_normalizations = (function logseq$graph_parser$exporter$finalize$journal_uuid_normalizations(db){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (datom){
var entity = (function (){var G__82898 = db;
var G__82899 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__82898,G__82899) : datascript.core.entity.call(null,G__82898,G__82899));
})();
var old_uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(entity);
var journal_day = new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(entity);
var standard_uuid = logseq.common.uuid.gen_uuid.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"journal-page-uuid","journal-page-uuid",1859101489),journal_day);
if(cljs.core.truth_((function (){var and__5140__auto__ = old_uuid;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_uuid,standard_uuid);
} else {
return and__5140__auto__;
}
})())){
var temp__5825__auto___82990 = (function (){var G__82901 = db;
var G__82902 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),standard_uuid], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__82901,G__82902) : datascript.core.entity.call(null,G__82901,G__82902));
})();
if(cljs.core.truth_(temp__5825__auto___82990)){
var target_82991 = temp__5825__auto___82990;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_82991),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot normalize journal uuid because the standard uuid is already used",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"journal-day","journal-day",-82304259),journal_day,new cljs.core.Keyword(null,"old-uuid","old-uuid",-514194358),old_uuid,new cljs.core.Keyword(null,"standard-uuid","standard-uuid",-272545495),standard_uuid,new cljs.core.Keyword(null,"target-id","target-id",-1438159155),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_82991)], null));
} else {
}
} else {
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eid","eid",559519930),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity),new cljs.core.Keyword(null,"old-uuid","old-uuid",-514194358),old_uuid,new cljs.core.Keyword(null,"standard-uuid","standard-uuid",-272545495),standard_uuid], null);
} else {
return null;
}
}),datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366)));
});
logseq.graph_parser.exporter.finalize.replace_journal_uuid_refs = (function logseq$graph_parser$exporter$finalize$replace_journal_uuid_refs(value,uuid_replacements){
if(cljs.core.seq(uuid_replacements)){
return clojure.walk.postwalk((function (x){
if(typeof x === 'string'){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__82921){
var vec__82922 = p__82921;
var old_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82922,(0),null);
var standard_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82922,(1),null);
return clojure.string.replace(clojure.string.replace(s,logseq.common.util.page_ref.__GT_page_ref(old_uuid),logseq.common.util.page_ref.__GT_page_ref(standard_uuid)),logseq.common.util.block_ref.__GT_block_ref(old_uuid),logseq.common.util.block_ref.__GT_block_ref(standard_uuid));
}),x,uuid_replacements);
} else {
return x;
}
}),value);
} else {
return value;
}
});
logseq.graph_parser.exporter.finalize.normalize_journal_uuids_tx = (function logseq$graph_parser$exporter$finalize$normalize_journal_uuids_tx(db){
var normalizations = cljs.core.vec(logseq.graph_parser.exporter.finalize.journal_uuid_normalizations(db));
var uuid_replacements = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old-uuid","old-uuid",-514194358),new cljs.core.Keyword(null,"standard-uuid","standard-uuid",-272545495)),normalizations);
var uuid_tx = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__82930){
var map__82931 = p__82930;
var map__82931__$1 = cljs.core.__destructure_map(map__82931);
var eid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82931__$1,new cljs.core.Keyword(null,"eid","eid",559519930));
var old_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82931__$1,new cljs.core.Keyword(null,"old-uuid","old-uuid",-514194358));
var standard_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82931__$1,new cljs.core.Keyword(null,"standard-uuid","standard-uuid",-272545495));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),eid,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),old_uuid], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),standard_uuid], null)], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([normalizations], 0));
var text_tx = ((cljs.core.seq(uuid_replacements))?cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (datom){
var value = new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom);
var value_SINGLEQUOTE_ = ((((typeof value === 'string') || (cljs.core.coll_QMARK_(value))))?logseq.graph_parser.exporter.finalize.replace_journal_uuid_refs(value,uuid_replacements):null);
if((((!((value_SINGLEQUOTE_ == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,value_SINGLEQUOTE_)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom),value_SINGLEQUOTE_], null);
} else {
return null;
}
}),datascript.core.datoms.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073))):null);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(uuid_tx,text_tx));
});
logseq.graph_parser.exporter.finalize.normalize_journal_uuids_BANG_ = (function logseq$graph_parser$exporter$finalize$normalize_journal_uuids_BANG_(conn){
var tx = logseq.graph_parser.exporter.finalize.normalize_journal_uuids_tx(cljs.core.deref(conn));
if(cljs.core.seq(tx)){
return logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.graph-parser.exporter","imported-data?","logseq.graph-parser.exporter/imported-data?",1785602641),true], null));
} else {
return null;
}
});
logseq.graph_parser.exporter.finalize.ensure_imported_page_parent_orders_BANG_ = (function logseq$graph_parser$exporter$finalize$ensure_imported_page_parent_orders_BANG_(conn){
var tx_data = logseq.db.common.order.missing_internal_page_parent_order_tx(cljs.core.deref(conn));
if(cljs.core.seq(tx_data)){
var report = logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.graph-parser.exporter","imported-data?","logseq.graph-parser.exporter/imported-data?",1785602641),true], null));
var seq__82938_83019 = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","order","block/order",-1429282437),tx_data));
var chunk__82939_83020 = null;
var count__82940_83021 = (0);
var i__82941_83022 = (0);
while(true){
if((i__82941_83022 < count__82940_83021)){
var order_83023 = chunk__82939_83020.cljs$core$IIndexed$_nth$arity$2(null,i__82941_83022);
logseq.db.common.order.reset_max_key_BANG_.cljs$core$IFn$_invoke$arity$1(order_83023);


var G__83024 = seq__82938_83019;
var G__83025 = chunk__82939_83020;
var G__83026 = count__82940_83021;
var G__83027 = (i__82941_83022 + (1));
seq__82938_83019 = G__83024;
chunk__82939_83020 = G__83025;
count__82940_83021 = G__83026;
i__82941_83022 = G__83027;
continue;
} else {
var temp__5825__auto___83028 = cljs.core.seq(seq__82938_83019);
if(temp__5825__auto___83028){
var seq__82938_83029__$1 = temp__5825__auto___83028;
if(cljs.core.chunked_seq_QMARK_(seq__82938_83029__$1)){
var c__5673__auto___83030 = cljs.core.chunk_first(seq__82938_83029__$1);
var G__83031 = cljs.core.chunk_rest(seq__82938_83029__$1);
var G__83032 = c__5673__auto___83030;
var G__83033 = cljs.core.count(c__5673__auto___83030);
var G__83034 = (0);
seq__82938_83019 = G__83031;
chunk__82939_83020 = G__83032;
count__82940_83021 = G__83033;
i__82941_83022 = G__83034;
continue;
} else {
var order_83035 = cljs.core.first(seq__82938_83029__$1);
logseq.db.common.order.reset_max_key_BANG_.cljs$core$IFn$_invoke$arity$1(order_83035);


var G__83036 = cljs.core.next(seq__82938_83029__$1);
var G__83037 = null;
var G__83038 = (0);
var G__83039 = (0);
seq__82938_83019 = G__83036;
chunk__82939_83020 = G__83037;
count__82940_83021 = G__83038;
i__82941_83022 = G__83039;
continue;
}
} else {
}
}
break;
}

return report;
} else {
return null;
}
});

//# sourceMappingURL=logseq.graph_parser.exporter.finalize.js.map
