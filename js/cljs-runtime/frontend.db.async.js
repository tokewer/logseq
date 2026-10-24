goog.provide('frontend.db.async');
frontend.db.async._LT_q = frontend.db.async.util._LT_q;
frontend.db.async.parent_chains = (function frontend$db$async$parent_chains(id__GT_parent_id,parent_ids){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (chains,parent_id){
var path = (function (){var pid = parent_id;
var path = cljs.core.PersistentVector.EMPTY;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if((((!(cljs.core.integer_QMARK_(pid)))) || (((cljs.core.contains_QMARK_(chains,pid)) || (cljs.core.contains_QMARK_(seen,pid)))))){
return path;
} else {
var G__56648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(id__GT_parent_id,pid);
var G__56649 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,pid);
var G__56650 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,pid);
pid = G__56648;
path = G__56649;
seen = G__56650;
continue;
}
break;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,pid){
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(result,cljs.core.get.cljs$core$IFn$_invoke$arity$2(id__GT_parent_id,pid));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,pid,(function (){var G__56197 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),pid], null);
if(cljs.core.truth_(parent)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56197,new cljs.core.Keyword("block","parent","block/parent",-918309064),parent);
} else {
return G__56197;
}
})());
}),chains,cljs.core.rseq(path));
}),cljs.core.PersistentArrayMap.EMPTY,parent_ids);
});
frontend.db.async.row_parent_index = (function frontend$db$async$row_parent_index(rows){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p__56221){
var vec__56226 = p__56221;
var db_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56226,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56226,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56226,(2),null);
var parent_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56226,(3),null);
if(cljs.core.integer_QMARK_(parent_id)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_id,parent_id], null);
} else {
return null;
}
})),rows);
});
frontend.db.async.order_block_summaries = (function frontend$db$async$order_block_summaries(ids,rows,id__GT_parent_id){
var chains = frontend.db.async.parent_chains(id__GT_parent_id,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56238_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__56238_SHARP_,(3));
}),rows));
var blocks_by_uuid = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__56240){
var vec__56241 = p__56240;
var db_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56241,(0),null);
var block_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56241,(1),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56241,(2),null);
var parent_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56241,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_uuid,(function (){var G__56244 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),db_id,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid,new cljs.core.Keyword("block","title","block/title",710445684),title], null);
if(cljs.core.integer_QMARK_(parent_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56244,new cljs.core.Keyword("block","parent","block/parent",-918309064),cljs.core.get.cljs$core$IFn$_invoke$arity$2(chains,parent_id));
} else {
return G__56244;
}
})()], null);
})),rows);
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(blocks_by_uuid,ids));
});
frontend.db.async._LT_parent_index = (function frontend$db$async$_LT_parent_index(graph,eids){
var step = (function frontend$db$async$_LT_parent_index_$_step(pending,index){
if(cljs.core.empty_QMARK_(pending)){
return promesa.core.resolved(index);
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__56266 = graph;
var G__56267 = cljs.core.PersistentArrayMap.EMPTY;
var G__56268 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null)], null)], null);
var G__56269 = cljs.core.vec(pending);
return (frontend.db.async._LT_q.cljs$core$IFn$_invoke$arity$4 ? frontend.db.async._LT_q.cljs$core$IFn$_invoke$arity$4(G__56266,G__56267,G__56268,G__56269) : frontend.db.async._LT_q.call(null,G__56266,G__56267,G__56268,G__56269));
})()),(function (rows){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.into.cljs$core$IFn$_invoke$arity$3(index,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p__56271){
var vec__56272 = p__56271;
var eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56272,(0),null);
var parent_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56272,(1),null);
if(cljs.core.integer_QMARK_(parent_id)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid,parent_id], null);
} else {
return null;
}
})),rows)),(function (index_SINGLEQUOTE_){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__56275){
var vec__56276 = p__56275;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56276,(0),null);
var parent_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56276,(1),null);
if(((cljs.core.integer_QMARK_(parent_id)) && ((!(cljs.core.contains_QMARK_(index_SINGLEQUOTE_,parent_id)))))){
return parent_id;
} else {
return null;
}
}),rows))),(function (next_ids){
return promesa.protocols._promise(frontend$db$async$_LT_parent_index_$_step(next_ids,index_SINGLEQUOTE_));
}));
}));
}));
}));
}
});
return step(cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.integer_QMARK_,eids)),cljs.core.PersistentArrayMap.EMPTY);
});
frontend.db.async._LT_get_block_summaries = (function frontend$db$async$_LT_get_block_summaries(graph,ids){
if(cljs.core.seq(ids)){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__56279 = graph;
var G__56280 = cljs.core.PersistentArrayMap.EMPTY;
var G__56281 = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?uuid","?uuid",-396116544,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?uuid","?uuid",-396116544,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Symbol(null,"?uuid","?uuid",-396116544,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null)], null)], null);
var G__56282 = ids;
return (frontend.db.async._LT_q.cljs$core$IFn$_invoke$arity$4 ? frontend.db.async._LT_q.cljs$core$IFn$_invoke$arity$4(G__56279,G__56280,G__56281,G__56282) : frontend.db.async._LT_q.call(null,G__56279,G__56280,G__56281,G__56282));
})()),(function (rows){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async.row_parent_index(rows)),(function (seed_index){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(seed_index,cljs.core.vals(seed_index))),(function (missing_parents){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core.seq(missing_parents))?frontend.db.async._LT_parent_index(graph,missing_parents):cljs.core.PersistentArrayMap.EMPTY)),(function (extra_index){
return promesa.protocols._promise(frontend.db.async.order_block_summaries(ids,rows,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([seed_index,extra_index], 0))));
}));
}));
}));
}));
}));
} else {
return null;
}
});
frontend.db.async._LT_invoke_db_worker = (function frontend$db$async$_LT_invoke_db_worker(var_args){
var args__5882__auto__ = [];
var len__5876__auto___56654 = arguments.length;
var i__5877__auto___56655 = (0);
while(true){
if((i__5877__auto___56655 < len__5876__auto___56654)){
args__5882__auto__.push((arguments[i__5877__auto___56655]));

var G__56656 = (i__5877__auto___56655 + (1));
i__5877__auto___56655 = G__56656;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.db.async._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.db.async._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic = (function (api,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(frontend.state._LT_invoke_db_worker,api,args);
}));

(frontend.db.async._LT_invoke_db_worker.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.db.async._LT_invoke_db_worker.cljs$lang$applyTo = (function (seq56285){
var G__56286 = cljs.core.first(seq56285);
var seq56285__$1 = cljs.core.next(seq56285);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56286,seq56285__$1);
}));

frontend.db.async._LT_get_all_properties_from_worker = (function frontend$db$async$_LT_get_all_properties_from_worker(graph,opts){
return frontend.db.async._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-all-properties","thread-api/get-all-properties",868545353),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph,opts], 0));
});
frontend.db.async._LT_get_class_objects_from_worker = (function frontend$db$async$_LT_get_class_objects_from_worker(graph,class_id){
return frontend.db.async._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-class-objects","thread-api/get-class-objects",965349342),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph,class_id], 0));
});
frontend.db.async._LT_get_date_scheduled_or_deadlines_from_worker = (function frontend$db$async$_LT_get_date_scheduled_or_deadlines_from_worker(graph,start_time,end_time){
return frontend.db.async._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-date-scheduled-or-deadlines","thread-api/get-date-scheduled-or-deadlines",1260657950),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph,start_time,end_time], 0));
});
frontend.db.async._LT_get_today_journal_title = (function frontend$db$async$_LT_get_today_journal_title(graph){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-journal-page-by-day","thread-api/get-journal-page-by-day",212502840),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph,frontend.date.today_journal_day()], 0))),(function (page){
return promesa.protocols._promise((function (){var or__5142__auto__ = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.date.today();
}
})());
}));
}));
});
frontend.db.async._LT_get_date_formatter = (function frontend$db$async$_LT_get_date_formatter(graph){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.property.journal","title-format","logseq.property.journal/title-format",-1536497954)], null),new cljs.core.Keyword("logseq.class","Journal","logseq.class/Journal",1979741081)], 0))),(function (journal_class){
return promesa.protocols._promise((function (){var or__5142__auto__ = new cljs.core.Keyword("logseq.property.journal","title-format","logseq.property.journal/title-format",-1536497954).cljs$core$IFn$_invoke$arity$1(journal_class);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "MMM do, yyyy";
}
})());
}));
}));
});
frontend.db.async._LT_get_journal_page_title = (function frontend$db$async$_LT_get_journal_page_title(graph,journal_title){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-journal-page-by-day","thread-api/get-journal-page-by-day",212502840),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph,frontend.date.journal_title__GT_int(journal_title)], 0))),(function (page){
return promesa.protocols._promise((function (){var or__5142__auto__ = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return journal_title;
}
})());
}));
}));
});
frontend.db.async._LT_get_journal_page_by_day = (function frontend$db$async$_LT_get_journal_page_by_day(graph,journal_day){
return frontend.db.async._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-journal-page-by-day","thread-api/get-journal-page-by-day",212502840),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph,journal_day], 0));
});
frontend.db.async._LT_get_latest_journals = (function frontend$db$async$_LT_get_latest_journals(var_args){
var G__56311 = arguments.length;
switch (G__56311) {
case 1:
return frontend.db.async._LT_get_latest_journals.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.async._LT_get_latest_journals.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.db.async._LT_get_latest_journals.cljs$core$IFn$_invoke$arity$1 = (function (graph){
return frontend.db.async._LT_get_latest_journals.cljs$core$IFn$_invoke$arity$2(graph,Number.MAX_SAFE_INTEGER);
}));

(frontend.db.async._LT_get_latest_journals.cljs$core$IFn$_invoke$arity$2 = (function (graph,n){
return frontend.db.async._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-latest-journals","thread-api/get-latest-journals",774601340),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph,n], 0));
}));

(frontend.db.async._LT_get_latest_journals.cljs$lang$maxFixedArity = 2);

frontend.db.async._LT_get_file_content = (function frontend$db$async$_LT_get_file_content(graph,path){
return frontend.db.async._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-file-content","thread-api/get-file-content",-718755763),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph,path], 0));
});
frontend.db.async._LT_page_exists_QMARK_ = (function frontend$db$async$_LT_page_exists_QMARK_(graph,page_name,tags){
return frontend.db.async._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","page-exists?","thread-api/page-exists?",1142084674),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph,page_name,tags], 0));
});
frontend.db.async._LT_get_case_page = (function frontend$db$async$_LT_get_case_page(graph,page_name_or_uuid){
return frontend.db.async._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-case-page","thread-api/get-case-page",204116056),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph,page_name_or_uuid], 0));
});
frontend.db.async._LT_get_tags_by_name = (function frontend$db$async$_LT_get_tags_by_name(graph,name){
return frontend.db.async._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-tags-by-name","thread-api/get-tags-by-name",1112905828),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph,name], 0));
});
frontend.db.async._LT_resolve_query_inputs = (function frontend$db$async$_LT_resolve_query_inputs(graph,inputs,opts){
return frontend.db.async._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","resolve-query-inputs","thread-api/resolve-query-inputs",1998070994),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph,inputs,opts], 0));
});
frontend.db.async._LT_get_block_parent = (function frontend$db$async$_LT_get_block_parent(graph,block_uuid){
return frontend.db.async._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-block-parent","thread-api/get-block-parent",2014186505),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph,block_uuid], 0));
});
frontend.db.async._LT_get_block_page_info = (function frontend$db$async$_LT_get_block_page_info(graph,block_ref){
return frontend.db.async._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-block-page-info","thread-api/get-block-page-info",1273348641),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph,block_ref], 0));
});
frontend.db.async._LT_get_block_immediate_children = (function frontend$db$async$_LT_get_block_immediate_children(graph,block_uuid){
return frontend.db.async._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-block-immediate-children","thread-api/get-block-immediate-children",1891136953),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph,block_uuid], 0));
});
frontend.db.async._LT_get_block_sibling = (function frontend$db$async$_LT_get_block_sibling(graph,block_id,direction){
return frontend.db.async._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-block-sibling","thread-api/get-block-sibling",782414080),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph,block_id,direction], 0));
});
frontend.db.async._LT_get_page_blocks_tree = (function frontend$db$async$_LT_get_page_blocks_tree(var_args){
var G__56325 = arguments.length;
switch (G__56325) {
case 2:
return frontend.db.async._LT_get_page_blocks_tree.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.db.async._LT_get_page_blocks_tree.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.db.async._LT_get_page_blocks_tree.cljs$core$IFn$_invoke$arity$2 = (function (graph,page_id_name_or_uuid){
return frontend.db.async._LT_get_page_blocks_tree.cljs$core$IFn$_invoke$arity$3(graph,page_id_name_or_uuid,null);
}));

(frontend.db.async._LT_get_page_blocks_tree.cljs$core$IFn$_invoke$arity$3 = (function (graph,page_id_name_or_uuid,option){
return frontend.db.async._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-page-blocks-tree","thread-api/get-page-blocks-tree",1781847832),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph,page_id_name_or_uuid,option], 0));
}));

(frontend.db.async._LT_get_page_blocks_tree.cljs$lang$maxFixedArity = 3);

frontend.db.async._LT_get_block_class_default_properties = (function frontend$db$async$_LT_get_block_class_default_properties(graph,block_id){
return frontend.db.async._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-block-class-default-properties","thread-api/get-block-class-default-properties",-1469062673),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph,block_id], 0));
});
frontend.db.async._LT_get_all_classes = (function frontend$db$async$_LT_get_all_classes(graph,opts){
return frontend.db.async._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-all-classes","thread-api/get-all-classes",-107622866),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph,opts], 0));
});
frontend.db.async._LT_get_structured_children = (function frontend$db$async$_LT_get_structured_children(graph,class_id){
return frontend.db.async._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-structured-children","thread-api/get-structured-children",-75275691),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph,class_id], 0));
});
frontend.db.async._LT_get_class_extends_children_tree = (function frontend$db$async$_LT_get_class_extends_children_tree(graph,class_id){
return frontend.db.async._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-class-extends-children-tree","thread-api/get-class-extends-children-tree",659231315),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph,class_id], 0));
});
frontend.db.async._LT_get_alias_source_page = (function frontend$db$async$_LT_get_alias_source_page(graph,page_id){
return frontend.db.async._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-alias-source-page","thread-api/get-alias-source-page",366607680),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph,page_id], 0));
});
frontend.db.async._LT_get_property_closed_values = (function frontend$db$async$_LT_get_property_closed_values(graph,property_ident){
return frontend.db.async._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-property-closed-values","thread-api/get-property-closed-values",1707997643),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph,property_ident], 0));
});
frontend.db.async._LT_get_property_node_selector_data = (function frontend$db$async$_LT_get_property_node_selector_data(graph,option){
return frontend.db.async._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-property-node-selector-data","thread-api/get-property-node-selector-data",-438300357),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph,option], 0));
});
frontend.db.async._LT_get_files = (function frontend$db$async$_LT_get_files(graph){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__56347 = graph;
var G__56348 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact-db?","transact-db?",1279612399),false], null);
var G__56349 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?file","?file",-1121006094,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Keyword("file","last-modified-at","file/last-modified-at",473527310)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?file","?file",-1121006094,null),new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Symbol(null,"?path","?path",385070032,null)], null)], null);
return (frontend.db.async._LT_q.cljs$core$IFn$_invoke$arity$3 ? frontend.db.async._LT_q.cljs$core$IFn$_invoke$arity$3(G__56347,G__56348,G__56349) : frontend.db.async._LT_q.call(null,G__56347,G__56348,G__56349));
})()),(function (result){
return promesa.protocols._promise(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56346_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(p1__56346_SHARP_),(function (){var or__5142__auto__ = new cljs.core.Keyword("file","last-modified-at","file/last-modified-at",473527310).cljs$core$IFn$_invoke$arity$1(p1__56346_SHARP_);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})()],null));
}),cljs.core.reverse(cljs.core.seq(result))));
}));
}));
});
/**
 * Returns all public properties as property maps including their
 *   :block/title and :db/ident
 */
frontend.db.async._LT_get_all_properties = (function frontend$db$async$_LT_get_all_properties(var_args){
var args__5882__auto__ = [];
var len__5876__auto___56666 = arguments.length;
var i__5877__auto___56667 = (0);
while(true){
if((i__5877__auto___56667 < len__5876__auto___56666)){
args__5882__auto__.push((arguments[i__5877__auto___56667]));

var G__56668 = (i__5877__auto___56667 + (1));
i__5877__auto___56667 = G__56668;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return frontend.db.async._LT_get_all_properties.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(frontend.db.async._LT_get_all_properties.cljs$core$IFn$_invoke$arity$variadic = (function (p__56361){
var map__56362 = p__56361;
var map__56362__$1 = cljs.core.__destructure_map(map__56362);
var opts = map__56362__$1;
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var graph = temp__5825__auto__;
return frontend.db.async._LT_get_all_properties_from_worker(graph,opts);
} else {
return null;
}
}));

(frontend.db.async._LT_get_all_properties.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.db.async._LT_get_all_properties.cljs$lang$applyTo = (function (seq56353){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56353));
}));

/**
 * For db graphs, returns a vec of property value maps for given property
 *   db-ident.  The map contains a :label key which can be a string or number (for
 *   query builder) and a :value key which contains the entity or scalar property value
 */
frontend.db.async._LT_get_property_values = (function frontend$db$async$_LT_get_property_values(var_args){
var args__5882__auto__ = [];
var len__5876__auto___56669 = arguments.length;
var i__5877__auto___56670 = (0);
while(true){
if((i__5877__auto___56670 < len__5876__auto___56669)){
args__5882__auto__.push((arguments[i__5877__auto___56670]));

var G__56671 = (i__5877__auto___56670 + (1));
i__5877__auto___56670 = G__56671;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.db.async._LT_get_property_values.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.db.async._LT_get_property_values.cljs$core$IFn$_invoke$arity$variadic = (function (property_id,p__56371){
var map__56372 = p__56371;
var map__56372__$1 = cljs.core.__destructure_map(map__56372);
var opts = map__56372__$1;
if(cljs.core.truth_(property_id)){
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-property-values","thread-api/get-property-values",60992180),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"property-ident","property-ident",697145839),property_id)], 0));
} else {
return null;
}
}));

(frontend.db.async._LT_get_property_values.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.db.async._LT_get_property_values.cljs$lang$applyTo = (function (seq56365){
var G__56366 = cljs.core.first(seq56365);
var seq56365__$1 = cljs.core.next(seq56365);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56366,seq56365__$1);
}));

frontend.db.async._LT_get_view_filter_data = (function frontend$db$async$_LT_get_view_filter_data(var_args){
var args__5882__auto__ = [];
var len__5876__auto___56672 = arguments.length;
var i__5877__auto___56673 = (0);
while(true){
if((i__5877__auto___56673 < len__5876__auto___56672)){
args__5882__auto__.push((arguments[i__5877__auto___56673]));

var G__56678 = (i__5877__auto___56673 + (1));
i__5877__auto___56673 = G__56678;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.db.async._LT_get_view_filter_data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.db.async._LT_get_view_filter_data.cljs$core$IFn$_invoke$arity$variadic = (function (property,p__56390){
var map__56391 = p__56390;
var map__56391__$1 = cljs.core.__destructure_map(map__56391);
var opts = map__56391__$1;
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-view-filter-data","thread-api/get-view-filter-data",1144694506),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"property","property",-1114278232),property,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"property-ident","property-ident",697145839),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property)], 0))], 0));
} else {
return null;
}
}));

(frontend.db.async._LT_get_view_filter_data.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.db.async._LT_get_view_filter_data.cljs$lang$applyTo = (function (seq56386){
var G__56387 = cljs.core.first(seq56386);
var seq56386__$1 = cljs.core.next(seq56386);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56387,seq56386__$1);
}));

frontend.db.async._LT_get_display_properties = (function frontend$db$async$_LT_get_display_properties(repo,block,opts,show_empty_and_hidden_properties_QMARK_){
if(cljs.core.truth_((function (){var and__5140__auto__ = repo;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
} else {
return and__5140__auto__;
}
})())){
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-display-properties","thread-api/get-display-properties",1966881223),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"block","block",664686210),block,new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"show-empty-and-hidden-properties?","show-empty-and-hidden-properties?",1338372112),show_empty_and_hidden_properties_QMARK_], null)], 0));
} else {
return null;
}
});
frontend.db.async._LT_get_class_properties = (function frontend$db$async$_LT_get_class_properties(repo,class_id){
if(cljs.core.truth_((function (){var and__5140__auto__ = repo;
if(cljs.core.truth_(and__5140__auto__)){
return class_id;
} else {
return and__5140__auto__;
}
})())){
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-class-properties","thread-api/get-class-properties",-2125086574),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,class_id], 0));
} else {
return null;
}
});
frontend.db.async._LT_reorder_display_property_BANG_ = (function frontend$db$async$_LT_reorder_display_property_BANG_(repo,block,active_id,over_id,direction,property_idents){
if(cljs.core.truth_((function (){var and__5140__auto__ = repo;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(and__5140__auto____$1)){
var and__5140__auto____$2 = active_id;
if(cljs.core.truth_(and__5140__auto____$2)){
var and__5140__auto____$3 = over_id;
if(cljs.core.truth_(and__5140__auto____$3)){
return direction;
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
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","reorder-display-property","thread-api/reorder-display-property",991740454),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"block-id","block-id",-70582834),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"active-ident","active-ident",2060304151),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(active_id),new cljs.core.Keyword(null,"over-ident","over-ident",1253793782),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(over_id),new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"property-idents","property-idents",-111798291),property_idents], null)], 0));
} else {
return null;
}
});
frontend.db.async.worker_get_blocks_requests = (function frontend$db$async$worker_get_blocks_requests(requests){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__56408){
var map__56409 = p__56408;
var map__56409__$1 = cljs.core.__destructure_map(map__56409);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56409__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56409__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.select_keys(opts,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all?","all?",1103779750),new cljs.core.Keyword(null,"children?","children?",-1199594108),new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"render-data?","render-data?",493490624),new cljs.core.Keyword(null,"root-render-data?","root-render-data?",1524152408),new cljs.core.Keyword(null,"block-metadata?","block-metadata?",-1892649781),new cljs.core.Keyword(null,"include-collapsed-children?","include-collapsed-children?",2120012437),new cljs.core.Keyword(null,"include-property-block?","include-property-block?",-211563499)], null))], null);
}),requests);
});
frontend.db.async._LT_invoke_worker_get_blocks = (function frontend$db$async$_LT_invoke_worker_get_blocks(graph,requests){
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-blocks","thread-api/get-blocks",-999880266),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph,requests], 0));
});
if((typeof frontend !== 'undefined') && (typeof frontend.db !== 'undefined') && (typeof frontend.db.async !== 'undefined') && (typeof frontend.db.async._STAR_get_blocks_batch_state !== 'undefined')){
} else {
frontend.db.async._STAR_get_blocks_batch_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scheduled?","scheduled?",-1060544918),false,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"in-flight","in-flight",1251893790),cljs.core.PersistentArrayMap.EMPTY], null));
}
frontend.db.async.get_blocks_batch_limit = (25);
frontend.db.async.complete_tree_entry_group_QMARK_ = (function frontend$db$async$complete_tree_entry_group_QMARK_(entries){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.first(entries),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"all?","all?",1103779750)], null)) === true;
});
frontend.db.async.get_blocks_entry_batches = (function frontend$db$async$get_blocks_entry_batches(entry_groups){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (same_kind_groups){
if(frontend.db.async.complete_tree_entry_group_QMARK_(cljs.core.first(same_kind_groups))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,same_kind_groups);
} else {
return cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2(frontend.db.async.get_blocks_batch_limit,same_kind_groups);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(frontend.db.async.complete_tree_entry_group_QMARK_,entry_groups)], 0));
});
frontend.db.async.schedule_get_blocks_batch_flush_BANG_ = (function frontend$db$async$schedule_get_blocks_batch_flush_BANG_(){
var should_schedule_QMARK_ = cljs.core.not(new cljs.core.Keyword(null,"scheduled?","scheduled?",-1060544918).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.db.async._STAR_get_blocks_batch_state)));
if(should_schedule_QMARK_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.db.async._STAR_get_blocks_batch_state,cljs.core.assoc,new cljs.core.Keyword(null,"scheduled?","scheduled?",-1060544918),true);

return queueMicrotask(frontend.db.async.flush_get_blocks_batch_BANG_);
} else {
return null;
}
});
frontend.db.async.get_blocks_request_key = (function frontend$db$async$get_blocks_request_key(graph,request){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [graph,cljs.core.first(frontend.db.async.worker_get_blocks_requests(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null)))], null);
});
frontend.db.async.enqueue_get_blocks_request_BANG_ = (function frontend$db$async$enqueue_get_blocks_request_BANG_(graph,request){
var request_key = frontend.db.async.get_blocks_request_key(graph,request);
var or__5142__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.db.async._STAR_get_blocks_batch_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in-flight","in-flight",1251893790),request_key], null));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var result = promesa.core.deferred();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.db.async._STAR_get_blocks_batch_state,(function (state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in-flight","in-flight",1251893790),request_key], null),result),new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"graph","graph",1558099509),graph,new cljs.core.Keyword(null,"request","request",1772954723),request,new cljs.core.Keyword(null,"request-key","request-key",-1868902758),request_key,new cljs.core.Keyword(null,"result","result",1415092211),result], null));
}));

frontend.db.async.schedule_get_blocks_batch_flush_BANG_();

return result;
}
});
frontend.db.async.clear_get_blocks_in_flight_BANG_ = (function frontend$db$async$clear_get_blocks_in_flight_BANG_(p__56433){
var map__56434 = p__56433;
var map__56434__$1 = cljs.core.__destructure_map(map__56434);
var request_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56434__$1,new cljs.core.Keyword(null,"request-key","request-key",-1868902758));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56434__$1,new cljs.core.Keyword(null,"result","result",1415092211));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.db.async._STAR_get_blocks_batch_state,(function (state){
if((result === cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in-flight","in-flight",1251893790),request_key], null)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"in-flight","in-flight",1251893790),cljs.core.dissoc,request_key);
} else {
return state;
}
}));
});
frontend.db.async.resolve_batched_get_block_groups_BANG_ = (function frontend$db$async$resolve_batched_get_block_groups_BANG_(entry_groups,responses){
var seq__56435 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,entry_groups));
var chunk__56440 = null;
var count__56441 = (0);
var i__56442 = (0);
while(true){
if((i__56442 < count__56441)){
var vec__56477 = chunk__56440.cljs$core$IIndexed$_nth$arity$2(null,i__56442);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56477,(0),null);
var entries = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56477,(1),null);
var seq__56443_56679 = cljs.core.seq(entries);
var chunk__56444_56680 = null;
var count__56445_56681 = (0);
var i__56446_56682 = (0);
while(true){
if((i__56446_56682 < count__56445_56681)){
var map__56487_56686 = chunk__56444_56680.cljs$core$IIndexed$_nth$arity$2(null,i__56446_56682);
var map__56487_56687__$1 = cljs.core.__destructure_map(map__56487_56686);
var entry_56688 = map__56487_56687__$1;
var result_56689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56487_56687__$1,new cljs.core.Keyword(null,"result","result",1415092211));
promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(result_56689,cljs.core.nth.cljs$core$IFn$_invoke$arity$3(responses,idx,null));

frontend.db.async.clear_get_blocks_in_flight_BANG_(entry_56688);


var G__56690 = seq__56443_56679;
var G__56691 = chunk__56444_56680;
var G__56692 = count__56445_56681;
var G__56693 = (i__56446_56682 + (1));
seq__56443_56679 = G__56690;
chunk__56444_56680 = G__56691;
count__56445_56681 = G__56692;
i__56446_56682 = G__56693;
continue;
} else {
var temp__5825__auto___56694 = cljs.core.seq(seq__56443_56679);
if(temp__5825__auto___56694){
var seq__56443_56695__$1 = temp__5825__auto___56694;
if(cljs.core.chunked_seq_QMARK_(seq__56443_56695__$1)){
var c__5673__auto___56696 = cljs.core.chunk_first(seq__56443_56695__$1);
var G__56697 = cljs.core.chunk_rest(seq__56443_56695__$1);
var G__56698 = c__5673__auto___56696;
var G__56699 = cljs.core.count(c__5673__auto___56696);
var G__56700 = (0);
seq__56443_56679 = G__56697;
chunk__56444_56680 = G__56698;
count__56445_56681 = G__56699;
i__56446_56682 = G__56700;
continue;
} else {
var map__56488_56701 = cljs.core.first(seq__56443_56695__$1);
var map__56488_56702__$1 = cljs.core.__destructure_map(map__56488_56701);
var entry_56703 = map__56488_56702__$1;
var result_56704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56488_56702__$1,new cljs.core.Keyword(null,"result","result",1415092211));
promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(result_56704,cljs.core.nth.cljs$core$IFn$_invoke$arity$3(responses,idx,null));

frontend.db.async.clear_get_blocks_in_flight_BANG_(entry_56703);


var G__56705 = cljs.core.next(seq__56443_56695__$1);
var G__56706 = null;
var G__56707 = (0);
var G__56708 = (0);
seq__56443_56679 = G__56705;
chunk__56444_56680 = G__56706;
count__56445_56681 = G__56707;
i__56446_56682 = G__56708;
continue;
}
} else {
}
}
break;
}

var G__56709 = seq__56435;
var G__56710 = chunk__56440;
var G__56711 = count__56441;
var G__56712 = (i__56442 + (1));
seq__56435 = G__56709;
chunk__56440 = G__56710;
count__56441 = G__56711;
i__56442 = G__56712;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__56435);
if(temp__5825__auto__){
var seq__56435__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56435__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__56435__$1);
var G__56716 = cljs.core.chunk_rest(seq__56435__$1);
var G__56717 = c__5673__auto__;
var G__56718 = cljs.core.count(c__5673__auto__);
var G__56719 = (0);
seq__56435 = G__56716;
chunk__56440 = G__56717;
count__56441 = G__56718;
i__56442 = G__56719;
continue;
} else {
var vec__56491 = cljs.core.first(seq__56435__$1);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56491,(0),null);
var entries = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56491,(1),null);
var seq__56436_56720 = cljs.core.seq(entries);
var chunk__56437_56721 = null;
var count__56438_56722 = (0);
var i__56439_56723 = (0);
while(true){
if((i__56439_56723 < count__56438_56722)){
var map__56496_56725 = chunk__56437_56721.cljs$core$IIndexed$_nth$arity$2(null,i__56439_56723);
var map__56496_56726__$1 = cljs.core.__destructure_map(map__56496_56725);
var entry_56727 = map__56496_56726__$1;
var result_56728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56496_56726__$1,new cljs.core.Keyword(null,"result","result",1415092211));
promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(result_56728,cljs.core.nth.cljs$core$IFn$_invoke$arity$3(responses,idx,null));

frontend.db.async.clear_get_blocks_in_flight_BANG_(entry_56727);


var G__56729 = seq__56436_56720;
var G__56730 = chunk__56437_56721;
var G__56731 = count__56438_56722;
var G__56732 = (i__56439_56723 + (1));
seq__56436_56720 = G__56729;
chunk__56437_56721 = G__56730;
count__56438_56722 = G__56731;
i__56439_56723 = G__56732;
continue;
} else {
var temp__5825__auto___56733__$1 = cljs.core.seq(seq__56436_56720);
if(temp__5825__auto___56733__$1){
var seq__56436_56734__$1 = temp__5825__auto___56733__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56436_56734__$1)){
var c__5673__auto___56735 = cljs.core.chunk_first(seq__56436_56734__$1);
var G__56736 = cljs.core.chunk_rest(seq__56436_56734__$1);
var G__56737 = c__5673__auto___56735;
var G__56738 = cljs.core.count(c__5673__auto___56735);
var G__56739 = (0);
seq__56436_56720 = G__56736;
chunk__56437_56721 = G__56737;
count__56438_56722 = G__56738;
i__56439_56723 = G__56739;
continue;
} else {
var map__56501_56741 = cljs.core.first(seq__56436_56734__$1);
var map__56501_56742__$1 = cljs.core.__destructure_map(map__56501_56741);
var entry_56743 = map__56501_56742__$1;
var result_56744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56501_56742__$1,new cljs.core.Keyword(null,"result","result",1415092211));
promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(result_56744,cljs.core.nth.cljs$core$IFn$_invoke$arity$3(responses,idx,null));

frontend.db.async.clear_get_blocks_in_flight_BANG_(entry_56743);


var G__56745 = cljs.core.next(seq__56436_56734__$1);
var G__56746 = null;
var G__56747 = (0);
var G__56748 = (0);
seq__56436_56720 = G__56745;
chunk__56437_56721 = G__56746;
count__56438_56722 = G__56747;
i__56439_56723 = G__56748;
continue;
}
} else {
}
}
break;
}

var G__56749 = cljs.core.next(seq__56435__$1);
var G__56750 = null;
var G__56751 = (0);
var G__56752 = (0);
seq__56435 = G__56749;
chunk__56440 = G__56750;
count__56441 = G__56751;
i__56442 = G__56752;
continue;
}
} else {
return null;
}
}
break;
}
});
frontend.db.async.reject_batched_get_blocks_BANG_ = (function frontend$db$async$reject_batched_get_blocks_BANG_(entries,error){
var seq__56504 = cljs.core.seq(entries);
var chunk__56505 = null;
var count__56506 = (0);
var i__56507 = (0);
while(true){
if((i__56507 < count__56506)){
var map__56515 = chunk__56505.cljs$core$IIndexed$_nth$arity$2(null,i__56507);
var map__56515__$1 = cljs.core.__destructure_map(map__56515);
var entry = map__56515__$1;
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56515__$1,new cljs.core.Keyword(null,"result","result",1415092211));
promesa.core.reject_BANG_(result,error);

frontend.db.async.clear_get_blocks_in_flight_BANG_(entry);


var G__56753 = seq__56504;
var G__56754 = chunk__56505;
var G__56755 = count__56506;
var G__56756 = (i__56507 + (1));
seq__56504 = G__56753;
chunk__56505 = G__56754;
count__56506 = G__56755;
i__56507 = G__56756;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__56504);
if(temp__5825__auto__){
var seq__56504__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56504__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__56504__$1);
var G__56760 = cljs.core.chunk_rest(seq__56504__$1);
var G__56761 = c__5673__auto__;
var G__56762 = cljs.core.count(c__5673__auto__);
var G__56763 = (0);
seq__56504 = G__56760;
chunk__56505 = G__56761;
count__56506 = G__56762;
i__56507 = G__56763;
continue;
} else {
var map__56516 = cljs.core.first(seq__56504__$1);
var map__56516__$1 = cljs.core.__destructure_map(map__56516);
var entry = map__56516__$1;
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56516__$1,new cljs.core.Keyword(null,"result","result",1415092211));
promesa.core.reject_BANG_(result,error);

frontend.db.async.clear_get_blocks_in_flight_BANG_(entry);


var G__56764 = cljs.core.next(seq__56504__$1);
var G__56765 = null;
var G__56766 = (0);
var G__56767 = (0);
seq__56504 = G__56764;
chunk__56505 = G__56765;
count__56506 = G__56766;
i__56507 = G__56767;
continue;
}
} else {
return null;
}
}
break;
}
});
frontend.db.async.flush_get_blocks_batch_BANG_ = (function frontend$db$async$flush_get_blocks_batch_BANG_(){
var queue = new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.db.async._STAR_get_blocks_batch_state));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.db.async._STAR_get_blocks_batch_state,(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"scheduled?","scheduled?",-1060544918),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.PersistentVector.EMPTY], 0));
}));

var seq__56517 = cljs.core.seq(cljs.core.group_by(new cljs.core.Keyword(null,"graph","graph",1558099509),queue));
var chunk__56522 = null;
var count__56523 = (0);
var i__56524 = (0);
while(true){
if((i__56524 < count__56523)){
var vec__56553 = chunk__56522.cljs$core$IIndexed$_nth$arity$2(null,i__56524);
var graph = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56553,(0),null);
var graph_entries = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56553,(1),null);
var seq__56525_56768 = cljs.core.seq(frontend.db.async.get_blocks_entry_batches(cljs.core.vals(cljs.core.group_by(new cljs.core.Keyword(null,"request","request",1772954723),graph_entries))));
var chunk__56526_56769 = null;
var count__56527_56770 = (0);
var i__56528_56771 = (0);
while(true){
if((i__56528_56771 < count__56527_56770)){
var entry_batch_56772 = chunk__56526_56769.cljs$core$IIndexed$_nth$arity$2(null,i__56528_56771);
var requests_56773 = frontend.db.async.worker_get_blocks_requests(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.first),entry_batch_56772));
promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),((function (seq__56525_56768,chunk__56526_56769,count__56527_56770,i__56528_56771,seq__56517,chunk__56522,count__56523,i__56524,requests_56773,entry_batch_56772,vec__56553,graph,graph_entries,queue){
return (function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_invoke_worker_get_blocks(graph,requests_56773)),((function (seq__56525_56768,chunk__56526_56769,count__56527_56770,i__56528_56771,seq__56517,chunk__56522,count__56523,i__56524,requests_56773,entry_batch_56772,vec__56553,graph,graph_entries,queue){
return (function (result){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(result),cljs.core.count(requests_56773)))?null:(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected get-blocks response count",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request-count","request-count",426155899),cljs.core.count(requests_56773),new cljs.core.Keyword(null,"response-count","response-count",2046999942),cljs.core.count(result)], null))})())),((function (seq__56525_56768,chunk__56526_56769,count__56527_56770,i__56528_56771,seq__56517,chunk__56522,count__56523,i__56524,requests_56773,entry_batch_56772,vec__56553,graph,graph_entries,queue){
return (function (_){
return promesa.protocols._promise(frontend.db.async.resolve_batched_get_block_groups_BANG_(entry_batch_56772,result));
});})(seq__56525_56768,chunk__56526_56769,count__56527_56770,i__56528_56771,seq__56517,chunk__56522,count__56523,i__56524,requests_56773,entry_batch_56772,vec__56553,graph,graph_entries,queue))
);
});})(seq__56525_56768,chunk__56526_56769,count__56527_56770,i__56528_56771,seq__56517,chunk__56522,count__56523,i__56524,requests_56773,entry_batch_56772,vec__56553,graph,graph_entries,queue))
);
});})(seq__56525_56768,chunk__56526_56769,count__56527_56770,i__56528_56771,seq__56517,chunk__56522,count__56523,i__56524,requests_56773,entry_batch_56772,vec__56553,graph,graph_entries,queue))
),((function (seq__56525_56768,chunk__56526_56769,count__56527_56770,i__56528_56771,seq__56517,chunk__56522,count__56523,i__56524,requests_56773,entry_batch_56772,vec__56553,graph,graph_entries,queue){
return (function (error){
return frontend.db.async.reject_batched_get_blocks_BANG_(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entry_batch_56772], 0)),error);
});})(seq__56525_56768,chunk__56526_56769,count__56527_56770,i__56528_56771,seq__56517,chunk__56522,count__56523,i__56524,requests_56773,entry_batch_56772,vec__56553,graph,graph_entries,queue))
);


var G__56774 = seq__56525_56768;
var G__56775 = chunk__56526_56769;
var G__56776 = count__56527_56770;
var G__56777 = (i__56528_56771 + (1));
seq__56525_56768 = G__56774;
chunk__56526_56769 = G__56775;
count__56527_56770 = G__56776;
i__56528_56771 = G__56777;
continue;
} else {
var temp__5825__auto___56778 = cljs.core.seq(seq__56525_56768);
if(temp__5825__auto___56778){
var seq__56525_56779__$1 = temp__5825__auto___56778;
if(cljs.core.chunked_seq_QMARK_(seq__56525_56779__$1)){
var c__5673__auto___56780 = cljs.core.chunk_first(seq__56525_56779__$1);
var G__56781 = cljs.core.chunk_rest(seq__56525_56779__$1);
var G__56782 = c__5673__auto___56780;
var G__56783 = cljs.core.count(c__5673__auto___56780);
var G__56784 = (0);
seq__56525_56768 = G__56781;
chunk__56526_56769 = G__56782;
count__56527_56770 = G__56783;
i__56528_56771 = G__56784;
continue;
} else {
var entry_batch_56785 = cljs.core.first(seq__56525_56779__$1);
var requests_56786 = frontend.db.async.worker_get_blocks_requests(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.first),entry_batch_56785));
promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),((function (seq__56525_56768,chunk__56526_56769,count__56527_56770,i__56528_56771,seq__56517,chunk__56522,count__56523,i__56524,requests_56786,entry_batch_56785,seq__56525_56779__$1,temp__5825__auto___56778,vec__56553,graph,graph_entries,queue){
return (function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_invoke_worker_get_blocks(graph,requests_56786)),((function (seq__56525_56768,chunk__56526_56769,count__56527_56770,i__56528_56771,seq__56517,chunk__56522,count__56523,i__56524,requests_56786,entry_batch_56785,seq__56525_56779__$1,temp__5825__auto___56778,vec__56553,graph,graph_entries,queue){
return (function (result){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(result),cljs.core.count(requests_56786)))?null:(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected get-blocks response count",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request-count","request-count",426155899),cljs.core.count(requests_56786),new cljs.core.Keyword(null,"response-count","response-count",2046999942),cljs.core.count(result)], null))})())),((function (seq__56525_56768,chunk__56526_56769,count__56527_56770,i__56528_56771,seq__56517,chunk__56522,count__56523,i__56524,requests_56786,entry_batch_56785,seq__56525_56779__$1,temp__5825__auto___56778,vec__56553,graph,graph_entries,queue){
return (function (_){
return promesa.protocols._promise(frontend.db.async.resolve_batched_get_block_groups_BANG_(entry_batch_56785,result));
});})(seq__56525_56768,chunk__56526_56769,count__56527_56770,i__56528_56771,seq__56517,chunk__56522,count__56523,i__56524,requests_56786,entry_batch_56785,seq__56525_56779__$1,temp__5825__auto___56778,vec__56553,graph,graph_entries,queue))
);
});})(seq__56525_56768,chunk__56526_56769,count__56527_56770,i__56528_56771,seq__56517,chunk__56522,count__56523,i__56524,requests_56786,entry_batch_56785,seq__56525_56779__$1,temp__5825__auto___56778,vec__56553,graph,graph_entries,queue))
);
});})(seq__56525_56768,chunk__56526_56769,count__56527_56770,i__56528_56771,seq__56517,chunk__56522,count__56523,i__56524,requests_56786,entry_batch_56785,seq__56525_56779__$1,temp__5825__auto___56778,vec__56553,graph,graph_entries,queue))
),((function (seq__56525_56768,chunk__56526_56769,count__56527_56770,i__56528_56771,seq__56517,chunk__56522,count__56523,i__56524,requests_56786,entry_batch_56785,seq__56525_56779__$1,temp__5825__auto___56778,vec__56553,graph,graph_entries,queue){
return (function (error){
return frontend.db.async.reject_batched_get_blocks_BANG_(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entry_batch_56785], 0)),error);
});})(seq__56525_56768,chunk__56526_56769,count__56527_56770,i__56528_56771,seq__56517,chunk__56522,count__56523,i__56524,requests_56786,entry_batch_56785,seq__56525_56779__$1,temp__5825__auto___56778,vec__56553,graph,graph_entries,queue))
);


var G__56790 = cljs.core.next(seq__56525_56779__$1);
var G__56791 = null;
var G__56792 = (0);
var G__56793 = (0);
seq__56525_56768 = G__56790;
chunk__56526_56769 = G__56791;
count__56527_56770 = G__56792;
i__56528_56771 = G__56793;
continue;
}
} else {
}
}
break;
}

var G__56796 = seq__56517;
var G__56797 = chunk__56522;
var G__56798 = count__56523;
var G__56799 = (i__56524 + (1));
seq__56517 = G__56796;
chunk__56522 = G__56797;
count__56523 = G__56798;
i__56524 = G__56799;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__56517);
if(temp__5825__auto__){
var seq__56517__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56517__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__56517__$1);
var G__56800 = cljs.core.chunk_rest(seq__56517__$1);
var G__56801 = c__5673__auto__;
var G__56802 = cljs.core.count(c__5673__auto__);
var G__56803 = (0);
seq__56517 = G__56800;
chunk__56522 = G__56801;
count__56523 = G__56802;
i__56524 = G__56803;
continue;
} else {
var vec__56566 = cljs.core.first(seq__56517__$1);
var graph = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56566,(0),null);
var graph_entries = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56566,(1),null);
var seq__56518_56804 = cljs.core.seq(frontend.db.async.get_blocks_entry_batches(cljs.core.vals(cljs.core.group_by(new cljs.core.Keyword(null,"request","request",1772954723),graph_entries))));
var chunk__56519_56805 = null;
var count__56520_56806 = (0);
var i__56521_56807 = (0);
while(true){
if((i__56521_56807 < count__56520_56806)){
var entry_batch_56808 = chunk__56519_56805.cljs$core$IIndexed$_nth$arity$2(null,i__56521_56807);
var requests_56812 = frontend.db.async.worker_get_blocks_requests(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.first),entry_batch_56808));
promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),((function (seq__56518_56804,chunk__56519_56805,count__56520_56806,i__56521_56807,seq__56517,chunk__56522,count__56523,i__56524,requests_56812,entry_batch_56808,vec__56566,graph,graph_entries,seq__56517__$1,temp__5825__auto__,queue){
return (function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_invoke_worker_get_blocks(graph,requests_56812)),((function (seq__56518_56804,chunk__56519_56805,count__56520_56806,i__56521_56807,seq__56517,chunk__56522,count__56523,i__56524,requests_56812,entry_batch_56808,vec__56566,graph,graph_entries,seq__56517__$1,temp__5825__auto__,queue){
return (function (result){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(result),cljs.core.count(requests_56812)))?null:(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected get-blocks response count",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request-count","request-count",426155899),cljs.core.count(requests_56812),new cljs.core.Keyword(null,"response-count","response-count",2046999942),cljs.core.count(result)], null))})())),((function (seq__56518_56804,chunk__56519_56805,count__56520_56806,i__56521_56807,seq__56517,chunk__56522,count__56523,i__56524,requests_56812,entry_batch_56808,vec__56566,graph,graph_entries,seq__56517__$1,temp__5825__auto__,queue){
return (function (_){
return promesa.protocols._promise(frontend.db.async.resolve_batched_get_block_groups_BANG_(entry_batch_56808,result));
});})(seq__56518_56804,chunk__56519_56805,count__56520_56806,i__56521_56807,seq__56517,chunk__56522,count__56523,i__56524,requests_56812,entry_batch_56808,vec__56566,graph,graph_entries,seq__56517__$1,temp__5825__auto__,queue))
);
});})(seq__56518_56804,chunk__56519_56805,count__56520_56806,i__56521_56807,seq__56517,chunk__56522,count__56523,i__56524,requests_56812,entry_batch_56808,vec__56566,graph,graph_entries,seq__56517__$1,temp__5825__auto__,queue))
);
});})(seq__56518_56804,chunk__56519_56805,count__56520_56806,i__56521_56807,seq__56517,chunk__56522,count__56523,i__56524,requests_56812,entry_batch_56808,vec__56566,graph,graph_entries,seq__56517__$1,temp__5825__auto__,queue))
),((function (seq__56518_56804,chunk__56519_56805,count__56520_56806,i__56521_56807,seq__56517,chunk__56522,count__56523,i__56524,requests_56812,entry_batch_56808,vec__56566,graph,graph_entries,seq__56517__$1,temp__5825__auto__,queue){
return (function (error){
return frontend.db.async.reject_batched_get_blocks_BANG_(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entry_batch_56808], 0)),error);
});})(seq__56518_56804,chunk__56519_56805,count__56520_56806,i__56521_56807,seq__56517,chunk__56522,count__56523,i__56524,requests_56812,entry_batch_56808,vec__56566,graph,graph_entries,seq__56517__$1,temp__5825__auto__,queue))
);


var G__56818 = seq__56518_56804;
var G__56819 = chunk__56519_56805;
var G__56820 = count__56520_56806;
var G__56821 = (i__56521_56807 + (1));
seq__56518_56804 = G__56818;
chunk__56519_56805 = G__56819;
count__56520_56806 = G__56820;
i__56521_56807 = G__56821;
continue;
} else {
var temp__5825__auto___56822__$1 = cljs.core.seq(seq__56518_56804);
if(temp__5825__auto___56822__$1){
var seq__56518_56823__$1 = temp__5825__auto___56822__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56518_56823__$1)){
var c__5673__auto___56824 = cljs.core.chunk_first(seq__56518_56823__$1);
var G__56825 = cljs.core.chunk_rest(seq__56518_56823__$1);
var G__56826 = c__5673__auto___56824;
var G__56827 = cljs.core.count(c__5673__auto___56824);
var G__56828 = (0);
seq__56518_56804 = G__56825;
chunk__56519_56805 = G__56826;
count__56520_56806 = G__56827;
i__56521_56807 = G__56828;
continue;
} else {
var entry_batch_56829 = cljs.core.first(seq__56518_56823__$1);
var requests_56830 = frontend.db.async.worker_get_blocks_requests(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.first),entry_batch_56829));
promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),((function (seq__56518_56804,chunk__56519_56805,count__56520_56806,i__56521_56807,seq__56517,chunk__56522,count__56523,i__56524,requests_56830,entry_batch_56829,seq__56518_56823__$1,temp__5825__auto___56822__$1,vec__56566,graph,graph_entries,seq__56517__$1,temp__5825__auto__,queue){
return (function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_invoke_worker_get_blocks(graph,requests_56830)),((function (seq__56518_56804,chunk__56519_56805,count__56520_56806,i__56521_56807,seq__56517,chunk__56522,count__56523,i__56524,requests_56830,entry_batch_56829,seq__56518_56823__$1,temp__5825__auto___56822__$1,vec__56566,graph,graph_entries,seq__56517__$1,temp__5825__auto__,queue){
return (function (result){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(result),cljs.core.count(requests_56830)))?null:(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected get-blocks response count",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request-count","request-count",426155899),cljs.core.count(requests_56830),new cljs.core.Keyword(null,"response-count","response-count",2046999942),cljs.core.count(result)], null))})())),((function (seq__56518_56804,chunk__56519_56805,count__56520_56806,i__56521_56807,seq__56517,chunk__56522,count__56523,i__56524,requests_56830,entry_batch_56829,seq__56518_56823__$1,temp__5825__auto___56822__$1,vec__56566,graph,graph_entries,seq__56517__$1,temp__5825__auto__,queue){
return (function (_){
return promesa.protocols._promise(frontend.db.async.resolve_batched_get_block_groups_BANG_(entry_batch_56829,result));
});})(seq__56518_56804,chunk__56519_56805,count__56520_56806,i__56521_56807,seq__56517,chunk__56522,count__56523,i__56524,requests_56830,entry_batch_56829,seq__56518_56823__$1,temp__5825__auto___56822__$1,vec__56566,graph,graph_entries,seq__56517__$1,temp__5825__auto__,queue))
);
});})(seq__56518_56804,chunk__56519_56805,count__56520_56806,i__56521_56807,seq__56517,chunk__56522,count__56523,i__56524,requests_56830,entry_batch_56829,seq__56518_56823__$1,temp__5825__auto___56822__$1,vec__56566,graph,graph_entries,seq__56517__$1,temp__5825__auto__,queue))
);
});})(seq__56518_56804,chunk__56519_56805,count__56520_56806,i__56521_56807,seq__56517,chunk__56522,count__56523,i__56524,requests_56830,entry_batch_56829,seq__56518_56823__$1,temp__5825__auto___56822__$1,vec__56566,graph,graph_entries,seq__56517__$1,temp__5825__auto__,queue))
),((function (seq__56518_56804,chunk__56519_56805,count__56520_56806,i__56521_56807,seq__56517,chunk__56522,count__56523,i__56524,requests_56830,entry_batch_56829,seq__56518_56823__$1,temp__5825__auto___56822__$1,vec__56566,graph,graph_entries,seq__56517__$1,temp__5825__auto__,queue){
return (function (error){
return frontend.db.async.reject_batched_get_blocks_BANG_(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entry_batch_56829], 0)),error);
});})(seq__56518_56804,chunk__56519_56805,count__56520_56806,i__56521_56807,seq__56517,chunk__56522,count__56523,i__56524,requests_56830,entry_batch_56829,seq__56518_56823__$1,temp__5825__auto___56822__$1,vec__56566,graph,graph_entries,seq__56517__$1,temp__5825__auto__,queue))
);


var G__56831 = cljs.core.next(seq__56518_56823__$1);
var G__56832 = null;
var G__56833 = (0);
var G__56834 = (0);
seq__56518_56804 = G__56831;
chunk__56519_56805 = G__56832;
count__56520_56806 = G__56833;
i__56521_56807 = G__56834;
continue;
}
} else {
}
}
break;
}

var G__56835 = cljs.core.next(seq__56517__$1);
var G__56836 = null;
var G__56837 = (0);
var G__56838 = (0);
seq__56517 = G__56835;
chunk__56522 = G__56836;
count__56523 = G__56837;
i__56524 = G__56838;
continue;
}
} else {
return null;
}
}
break;
}
});
frontend.db.async._LT_fetch_blocks_from_worker_batched = (function frontend$db$async$_LT_fetch_blocks_from_worker_batched(graph,requests){
if(cljs.core.seq(requests)){
return promesa.core.all(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56583_SHARP_){
return frontend.db.async.enqueue_get_blocks_request_BANG_(graph,p1__56583_SHARP_);
}),requests));
} else {
return null;
}
});
frontend.db.async.block_fetch_error = (function frontend$db$async$block_fetch_error(operation,block,error){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.db.async",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","block-fetch-failed","db/block-fetch-failed",1096697876),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"block","block",664686210),block,new cljs.core.Keyword(null,"error","error",-978969032),error], null),new cljs.core.Keyword(null,"line","line",212345235),392], null)),null);
} else {
}

return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(operation))+" error"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block","block",664686210),block], null),error);
});
frontend.db.async._LT_get_block = (function frontend$db$async$_LT_get_block(var_args){
var args__5882__auto__ = [];
var len__5876__auto___56842 = arguments.length;
var i__5877__auto___56843 = (0);
while(true){
if((i__5877__auto___56843 < len__5876__auto___56842)){
args__5882__auto__.push((arguments[i__5877__auto___56843]));

var G__56844 = (i__5877__auto___56843 + (1));
i__5877__auto___56843 = G__56844;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic = (function (graph,id_uuid_or_name,p__56596){
var map__56598 = p__56596;
var map__56598__$1 = cljs.core.__destructure_map(map__56598);
var opts = map__56598__$1;
var children_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56598__$1,new cljs.core.Keyword(null,"children?","children?",-1199594108),true);
var name_SINGLEQUOTE_ = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_uuid_or_name));
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"children?","children?",-1199594108),children_QMARK_);
var id = (cljs.core.truth_((frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1(name_SINGLEQUOTE_) : frontend.util.uuid_string_QMARK_.call(null,name_SINGLEQUOTE_)))?name_SINGLEQUOTE_:id_uuid_or_name);
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_fetch_blocks_from_worker_batched(graph,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"opts","opts",155075701),opts__$1], null)], null))),(function (result){
return promesa.protocols._promise(new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(cljs.core.first(result)));
}));
})),(function (error){
throw frontend.db.async.block_fetch_error(new cljs.core.Keyword(null,"get-block","get-block",775914369),id_uuid_or_name,error);
}));
}));

(frontend.db.async._LT_get_block.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.db.async._LT_get_block.cljs$lang$applyTo = (function (seq56592){
var G__56593 = cljs.core.first(seq56592);
var seq56592__$1 = cljs.core.next(seq56592);
var G__56594 = cljs.core.first(seq56592__$1);
var seq56592__$2 = cljs.core.next(seq56592__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56593,G__56594,seq56592__$2);
}));

frontend.db.async._LT_get_block_with_children = (function frontend$db$async$_LT_get_block_with_children(var_args){
var args__5882__auto__ = [];
var len__5876__auto___56846 = arguments.length;
var i__5877__auto___56847 = (0);
while(true){
if((i__5877__auto___56847 < len__5876__auto___56846)){
args__5882__auto__.push((arguments[i__5877__auto___56847]));

var G__56848 = (i__5877__auto___56847 + (1));
i__5877__auto___56847 = G__56848;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return frontend.db.async._LT_get_block_with_children.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(frontend.db.async._LT_get_block_with_children.cljs$core$IFn$_invoke$arity$variadic = (function (graph,id_uuid_or_name,p__56602){
var map__56603 = p__56602;
var map__56603__$1 = cljs.core.__destructure_map(map__56603);
var opts = map__56603__$1;
var children_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56603__$1,new cljs.core.Keyword(null,"children?","children?",-1199594108),true);
var name_SINGLEQUOTE_ = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_uuid_or_name));
var opts__$1 = (function (){var G__56605 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"children?","children?",-1199594108),children_QMARK_);
if((!(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"render-data?","render-data?",493490624))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56605,new cljs.core.Keyword(null,"render-data?","render-data?",493490624),true);
} else {
return G__56605;
}
})();
var id = (cljs.core.truth_((frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1(name_SINGLEQUOTE_) : frontend.util.uuid_string_QMARK_.call(null,name_SINGLEQUOTE_)))?name_SINGLEQUOTE_:id_uuid_or_name);
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_fetch_blocks_from_worker_batched(graph,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"opts","opts",155075701),opts__$1], null)], null))),(function (result){
return promesa.protocols._promise(cljs.core.first(result));
}));
})),(function (error){
throw frontend.db.async.block_fetch_error(new cljs.core.Keyword(null,"get-block-with-children","get-block-with-children",-83850611),id_uuid_or_name,error);
}));
}));

(frontend.db.async._LT_get_block_with_children.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.db.async._LT_get_block_with_children.cljs$lang$applyTo = (function (seq56599){
var G__56600 = cljs.core.first(seq56599);
var seq56599__$1 = cljs.core.next(seq56599);
var G__56601 = cljs.core.first(seq56599__$1);
var seq56599__$2 = cljs.core.next(seq56599__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56600,G__56601,seq56599__$2);
}));

frontend.db.async._LT_get_blocks = (function frontend$db$async$_LT_get_blocks(var_args){
var args__5882__auto__ = [];
var len__5876__auto___56849 = arguments.length;
var i__5877__auto___56850 = (0);
while(true){
if((i__5877__auto___56850 < len__5876__auto___56849)){
args__5882__auto__.push((arguments[i__5877__auto___56850]));

var G__56851 = (i__5877__auto___56850 + (1));
i__5877__auto___56850 = G__56851;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return frontend.db.async._LT_get_blocks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(frontend.db.async._LT_get_blocks.cljs$core$IFn$_invoke$arity$variadic = (function (graph,ids_STAR_,p__56609){
var map__56610 = p__56609;
var map__56610__$1 = cljs.core.__destructure_map(map__56610);
var opts = map__56610__$1;
if(cljs.core.seq(ids_STAR_)){
return frontend.db.async._LT_fetch_blocks_from_worker_batched(graph,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"children?","children?",-1199594108),false)], null);
}),ids_STAR_));
} else {
return null;
}
}));

(frontend.db.async._LT_get_blocks.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.db.async._LT_get_blocks.cljs$lang$applyTo = (function (seq56606){
var G__56607 = cljs.core.first(seq56606);
var seq56606__$1 = cljs.core.next(seq56606);
var G__56608 = cljs.core.first(seq56606__$1);
var seq56606__$2 = cljs.core.next(seq56606__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56607,G__56608,seq56606__$2);
}));

frontend.db.async._LT_get_block_parents = (function frontend$db$async$_LT_get_block_parents(graph,id,depth){
if(cljs.core.integer_QMARK_(id)){
} else {
throw (new Error("Assert failed: (integer? id)"));
}

return frontend.db.async._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-block-parents","thread-api/get-block-parents",-1793488563),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph,id,depth], 0));
});
frontend.db.async._LT_get_block_source = (function frontend$db$async$_LT_get_block_source(graph,id){
if(cljs.core.integer_QMARK_(id)){
} else {
throw (new Error("Assert failed: (integer? id)"));
}

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-block-source","thread-api/get-block-source",-1166162422),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph,id], 0))),(function (source_id){
return promesa.protocols._promise((cljs.core.truth_(source_id)?frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(graph,source_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0)):null));
}));
}));
});
frontend.db.async._LT_get_block_refs = (function frontend$db$async$_LT_get_block_refs(graph,eid){
if(cljs.core.integer_QMARK_(eid)){
} else {
throw (new Error("Assert failed: (integer? eid)"));
}

return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-block-refs","thread-api/get-block-refs",-862947599),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph,eid], 0));
});
frontend.db.async._LT_get_block_refs_count = (function frontend$db$async$_LT_get_block_refs_count(graph,eid){
if(cljs.core.integer_QMARK_(eid)){
} else {
throw (new Error("Assert failed: (integer? eid)"));
}

return promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(graph,eid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false,new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block.temp","refs-count","block.temp/refs-count",-598132499)], null)], null)], 0)),new cljs.core.Keyword("block.temp","refs-count","block.temp/refs-count",-598132499));
});
frontend.db.async._LT_get_date_scheduled_or_deadlines = (function frontend$db$async$_LT_get_date_scheduled_or_deadlines(journal_title){
var temp__5825__auto__ = frontend.date.journal_title__GT_int(journal_title);
if(cljs.core.truth_(temp__5825__auto__)){
var date = temp__5825__auto__;
var temp__5825__auto____$1 = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto____$1)){
var repo = temp__5825__auto____$1;
var temp__5825__auto____$2 = (function (){var G__56613 = date;
var G__56614 = frontend.state.get_scheduled_future_days();
return (frontend.date.journal_day_local_range_ms.cljs$core$IFn$_invoke$arity$2 ? frontend.date.journal_day_local_range_ms.cljs$core$IFn$_invoke$arity$2(G__56613,G__56614) : frontend.date.journal_day_local_range_ms.call(null,G__56613,G__56614));
})();
if(cljs.core.truth_(temp__5825__auto____$2)){
var vec__56615 = temp__5825__auto____$2;
var start_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56615,(0),null);
var future_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56615,(1),null);
return frontend.db.async._LT_get_date_scheduled_or_deadlines_from_worker(repo,start_time,future_time);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
frontend.db.async._LT_get_tag_objects = (function frontend$db$async$_LT_get_tag_objects(graph,class_id){
return frontend.db.async._LT_get_class_objects_from_worker(graph,class_id);
});
frontend.db.async._LT_get_views = (function frontend$db$async$_LT_get_views(graph,class_id,view_feature_type){
var G__56619 = graph;
var G__56620 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact-db?","transact-db?",1279612399),false], null);
var G__56621 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.property.view","type","logseq.property.view/type",218237607),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.property.view","group-by-property","logseq.property.view/group-by-property",809216236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285)], null)], null)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?class-id","?class-id",-1653001743,null),new cljs.core.Symbol(null,"?view-feature-type","?view-feature-type",-215777938,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("logseq.property","view-for","logseq.property/view-for",-36274319),new cljs.core.Symbol(null,"?class-id","?class-id",-1653001743,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("logseq.property.view","feature-type","logseq.property.view/feature-type",-939141871),new cljs.core.Symbol(null,"?view-feature-type","?view-feature-type",-215777938,null)], null)], null);
var G__56622 = class_id;
var G__56623 = view_feature_type;
return (frontend.db.async._LT_q.cljs$core$IFn$_invoke$arity$5 ? frontend.db.async._LT_q.cljs$core$IFn$_invoke$arity$5(G__56619,G__56620,G__56621,G__56622,G__56623) : frontend.db.async._LT_q.call(null,G__56619,G__56620,G__56621,G__56622,G__56623));
});
frontend.db.async._LT_get_asset_with_checksum = (function frontend$db$async$_LT_get_asset_with_checksum(graph,checksum){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__56626 = graph;
var G__56627 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact-db?","transact-db?",1279612399),false], null);
var G__56628 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?checksum","?checksum",-1212627352,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("logseq.property.asset","checksum","logseq.property.asset/checksum",-1011416979),new cljs.core.Symbol(null,"?checksum","?checksum",-1212627352,null)], null)], null);
var G__56629 = checksum;
return (frontend.db.async._LT_q.cljs$core$IFn$_invoke$arity$4 ? frontend.db.async._LT_q.cljs$core$IFn$_invoke$arity$4(G__56626,G__56627,G__56628,G__56629) : frontend.db.async._LT_q.call(null,G__56626,G__56627,G__56628,G__56629));
})()),(function (result){
return promesa.protocols._promise(cljs.core.first(result));
}));
}));
});
frontend.db.async._LT_get_block_properties_history = (function frontend$db$async$_LT_get_block_properties_history(graph,block_id){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__56635 = graph;
var G__56636 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact-db?","transact-db?",1279612399),false], null);
var G__56637 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?block-id","?block-id",491120905,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("logseq.property.history","block","logseq.property.history/block",114255416),new cljs.core.Symbol(null,"?block-id","?block-id",491120905,null)], null)], null);
var G__56638 = block_id;
return (frontend.db.async._LT_q.cljs$core$IFn$_invoke$arity$4 ? frontend.db.async._LT_q.cljs$core$IFn$_invoke$arity$4(G__56635,G__56636,G__56637,G__56638) : frontend.db.async._LT_q.call(null,G__56635,G__56636,G__56637,G__56638));
})()),(function (result){
return promesa.protocols._promise(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","created-at","block/created-at",1440015),result));
}));
}));
});

//# sourceMappingURL=frontend.db.async.js.map
