goog.provide('frontend.components.query.result');
frontend.components.query.result.get_group_by_page = (function frontend$components$query$result$get_group_by_page(p__80653,p__80654){
var map__80655 = p__80653;
var map__80655__$1 = cljs.core.__destructure_map(map__80655);
var query_config = map__80655__$1;
var result_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80655__$1,new cljs.core.Keyword(null,"result-transform","result-transform",1904908186));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80655__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var map__80656 = p__80654;
var map__80656__$1 = cljs.core.__destructure_map(map__80656);
var table_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80656__$1,new cljs.core.Keyword(null,"table?","table?",-1064705406));
var db_graph_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80656__$1,new cljs.core.Keyword(null,"db-graph?","db-graph?",-533494876));
if(cljs.core.truth_((function (){var or__5142__auto__ = table_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return db_graph_QMARK_;
}
})())){
return false;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(query_config,new cljs.core.Keyword(null,"group-by-page?","group-by-page?",1520059448),((cljs.core.not(result_transform)) && ((!(((typeof query === 'string') && (clojure.string.includes_QMARK_(query,"(by-page false)"))))))));
}
});
frontend.components.query.result.uses_current_page_QMARK_ = (function frontend$components$query$result$uses_current_page_QMARK_(kind,query){
var G__80661 = kind;
var G__80661__$1 = (((G__80661 instanceof cljs.core.Keyword))?G__80661.fqn:null);
switch (G__80661__$1) {
case "dsl":
return ((typeof new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(query) === 'string') && (cljs.core.boolean$(cljs.core.re_find(/<%\s*current\s+page\s*%>/i,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(query)))));

break;
case "datalog":
return cljs.core.boolean$(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [":current-page",null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),null], null), null),new cljs.core.Keyword(null,"inputs","inputs",865803858).cljs$core$IFn$_invoke$arity$1(query)));

break;
default:
return false;

}
});
frontend.components.query.result.query_spec = (function frontend$components$query$result$query_spec(config,query){
var kind = (cljs.core.truth_(new cljs.core.Keyword(null,"dsl-query?","dsl-query?",-1061528662).cljs$core$IFn$_invoke$arity$1(config))?new cljs.core.Keyword(null,"dsl","dsl",397853177):new cljs.core.Keyword(null,"datalog","datalog",-1248728420));
var current_block_uuid = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"current-block-uuid","current-block-uuid",-559721957).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(config));
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(config);
}
}
})();
var G__80662 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),kind,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(query)], null);
var G__80662__$1 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dsl","dsl",397853177),kind)) && (cljs.core.contains_QMARK_(config,new cljs.core.Keyword(null,"cards?","cards?",1232384109)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80662,new cljs.core.Keyword(null,"cards?","cards?",1232384109),cljs.core.boolean$(new cljs.core.Keyword(null,"cards?","cards?",1232384109).cljs$core$IFn$_invoke$arity$1(config))):G__80662);
var G__80662__$2 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"datalog","datalog",-1248728420),kind)) && (cljs.core.contains_QMARK_(query,new cljs.core.Keyword(null,"inputs","inputs",865803858)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80662__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858),cljs.core.vec(new cljs.core.Keyword(null,"inputs","inputs",865803858).cljs$core$IFn$_invoke$arity$1(query))):G__80662__$1);
var G__80662__$3 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"datalog","datalog",-1248728420),kind)) && (cljs.core.contains_QMARK_(query,new cljs.core.Keyword(null,"rules","rules",1198912366)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80662__$2,new cljs.core.Keyword(null,"rules","rules",1198912366),cljs.core.vec(new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(query))):G__80662__$2);
var G__80662__$4 = (cljs.core.truth_(current_block_uuid)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80662__$3,new cljs.core.Keyword(null,"current-block-uuid","current-block-uuid",-559721957),current_block_uuid):G__80662__$3);
var G__80662__$5 = (cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword(null,"current-page-title","current-page-title",209597702).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__5140__auto__)){
return frontend.components.query.result.uses_current_page_QMARK_(kind,query);
} else {
return and__5140__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80662__$4,new cljs.core.Keyword(null,"current-page-title","current-page-title",209597702),new cljs.core.Keyword(null,"current-page-title","current-page-title",209597702).cljs$core$IFn$_invoke$arity$1(config)):G__80662__$4);
var G__80662__$6 = (cljs.core.truth_(new cljs.core.Keyword(null,"today-day","today-day",2113928411).cljs$core$IFn$_invoke$arity$1(config))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80662__$5,new cljs.core.Keyword(null,"today-day","today-day",2113928411),new cljs.core.Keyword(null,"today-day","today-day",2113928411).cljs$core$IFn$_invoke$arity$1(config)):G__80662__$5);
var G__80662__$7 = ((cljs.core.contains_QMARK_(query,new cljs.core.Keyword(null,"remove-block-children?","remove-block-children?",-228491460)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80662__$6,new cljs.core.Keyword(null,"remove-block-children?","remove-block-children?",-228491460),cljs.core.boolean$(new cljs.core.Keyword(null,"remove-block-children?","remove-block-children?",-228491460).cljs$core$IFn$_invoke$arity$1(query))):G__80662__$6);
if(cljs.core.truth_(new cljs.core.Keyword(null,"result-transform","result-transform",1904908186).cljs$core$IFn$_invoke$arity$1(query))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80662__$7,new cljs.core.Keyword(null,"result-transform-edn","result-transform-edn",458311772),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"result-transform","result-transform",1904908186).cljs$core$IFn$_invoke$arity$1(query)], 0)));
} else {
return G__80662__$7;
}
});
frontend.components.query.result.use_query_result = (function frontend$components$query$result$use_query_result(config,query){
var resource = frontend.db.hooks.use_resource(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),frontend.components.query.result.query_spec(config,query)], null));
var result = new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(resource);
var query_result = new cljs.core.Keyword(null,"query-result","query-result",-833644142).cljs$core$IFn$_invoke$arity$1(config);
var error = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(resource);
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(query_result)){
return cljs.core.reset_BANG_(query_result,result);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_result,result], null));

if(cljs.core.truth_(error)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Query failed";
}
})(),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(error);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
} else {
}

return result;
});

//# sourceMappingURL=frontend.components.query.result.js.map
