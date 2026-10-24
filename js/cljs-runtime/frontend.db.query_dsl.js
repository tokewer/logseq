goog.provide('frontend.db.query_dsl');
frontend.db.query_dsl.pre_transform = logseq.db.frontend.query_dsl.pre_transform;
frontend.db.query_dsl.simplify_query = logseq.db.frontend.query_dsl.simplify_query;
frontend.db.query_dsl.get_timestamp_property = logseq.db.frontend.query_dsl.get_timestamp_property;
frontend.db.query_dsl.custom_readers = logseq.db.frontend.query_dsl.custom_readers;
frontend.db.query_dsl.pre_transform_query = (function frontend$db$query_dsl$pre_transform_query(q){
var q_SINGLEQUOTE_ = frontend.template.resolve_dynamic_template_BANG_(q);
return (frontend.db.query_dsl.pre_transform.cljs$core$IFn$_invoke$arity$1 ? frontend.db.query_dsl.pre_transform.cljs$core$IFn$_invoke$arity$1(q_SINGLEQUOTE_) : frontend.db.query_dsl.pre_transform.call(null,q_SINGLEQUOTE_));
});
/**
 * Block fields needed to render query results without a renderer DB.
 */
frontend.db.query_dsl.db_block_attrs = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("block","raw-title","block/raw-title",1833669090)], null);
frontend.db.query_dsl.require_query_string_BANG_ = (function frontend$db$query_dsl$require_query_string_BANG_(query_string){
if(((typeof query_string === 'string') && ((((!(clojure.string.blank_QMARK_(query_string)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("\"\"",query_string)))))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid DSL query",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),query_string], null));
}

return query_string;
});
frontend.db.query_dsl.require_custom_query_BANG_ = (function frontend$db$query_dsl$require_custom_query_BANG_(query_m){
if(((cljs.core.map_QMARK_(query_m)) && (cljs.core.seq(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(query_m))))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid custom query",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),query_m], null));
}

return query_m;
});
/**
 * Runs a dsl query with query as a string. Primary use is from '/query' or '{{query }}'.
 */
frontend.db.query_dsl.query = (function frontend$db$query_dsl$query(var_args){
var G__81641 = arguments.length;
switch (G__81641) {
case 2:
return frontend.db.query_dsl.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.db.query_dsl.query.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.db.query_dsl.query.cljs$core$IFn$_invoke$arity$2 = (function (repo,query_string){
return frontend.db.query_dsl.query.cljs$core$IFn$_invoke$arity$3(repo,query_string,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.db.query_dsl.query.cljs$core$IFn$_invoke$arity$3 = (function (repo,query_string,query_opts){
frontend.db.query_dsl.require_query_string_BANG_(query_string);

return frontend.db.async._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","query-dsl-query","thread-api/query-dsl-query",710933597),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,query_string,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cards?","cards?",1232384109),new cljs.core.Keyword(null,"cards?","cards?",1232384109).cljs$core$IFn$_invoke$arity$1(query_opts),new cljs.core.Keyword(null,"block-attrs","block-attrs",-451459398),frontend.db.query_dsl.db_block_attrs], null)], 0));
}));

(frontend.db.query_dsl.query.cljs$lang$maxFixedArity = 3);

/**
 * Runs a dsl query with query as a seq. Primary use is from advanced query.
 */
frontend.db.query_dsl.custom_query = (function frontend$db$query_dsl$custom_query(repo,query_m,_query_opts){
frontend.db.query_dsl.require_custom_query_BANG_(query_m);

return frontend.db.async._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","query-dsl-custom-query","thread-api/query-dsl-custom-query",221164841),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,query_m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block-attrs","block-attrs",-451459398),frontend.db.query_dsl.db_block_attrs], null)], 0));
});

//# sourceMappingURL=frontend.db.query_dsl.js.map
