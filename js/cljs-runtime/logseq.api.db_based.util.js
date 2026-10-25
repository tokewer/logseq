goog.provide('logseq.api.db_based.util');
/**
 * Given an entity map, remove properties that shouldn't be returned in api calls.
 */
logseq.api.db_based.util.remove_hidden_properties = (function logseq$api$db_based$util$remove_hidden_properties(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__79688){
var vec__79689 = p__79688;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79689,(0),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79689,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("block.temp",cljs.core.namespace(k))) || (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","tx-id","block/tx-id",547556161),null], null), null),k)));
}),m));
});
logseq.api.db_based.util.summarize_upsert_operations = (function logseq$api$db_based$util$summarize_upsert_operations(operations,p__79692){
var map__79693 = p__79692;
var map__79693__$1 = cljs.core.__destructure_map(map__79693);
var dry_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79693__$1,new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647));
var counts = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,op){
var entity_type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"entityType","entityType",1983940029).cljs$core$IFn$_invoke$arity$1(op));
var operation_type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(op));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [operation_type,entity_type], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
}),cljs.core.PersistentArrayMap.EMPTY,operations);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(dry_run)?"Dry run: ":""))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((counts.cljs$core$IFn$_invoke$arity$1 ? counts.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"add","add",235287739)) : counts.call(null,new cljs.core.Keyword(null,"add","add",235287739))))?(""+"Added: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(counts.cljs$core$IFn$_invoke$arity$1 ? counts.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"add","add",235287739)) : counts.call(null,new cljs.core.Keyword(null,"add","add",235287739)))], 0)))+"."):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((counts.cljs$core$IFn$_invoke$arity$1 ? counts.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"edit","edit",-1641834166)) : counts.call(null,new cljs.core.Keyword(null,"edit","edit",-1641834166))))?(""+" Edited: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(counts.cljs$core$IFn$_invoke$arity$1 ? counts.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"edit","edit",-1641834166)) : counts.call(null,new cljs.core.Keyword(null,"edit","edit",-1641834166)))], 0)))+"."):null)));
});

//# sourceMappingURL=logseq.api.db_based.util.js.map
