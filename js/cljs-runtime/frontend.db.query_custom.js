goog.provide('frontend.db.query_custom');
frontend.db.query_custom.function_bearing_QMARK_ = (function frontend$db$query_custom$function_bearing_QMARK_(value){
if(cljs.core.fn_QMARK_(value)){
return true;
} else {
if(cljs.core.map_QMARK_(value)){
var or__5142__auto__ = cljs.core.some(frontend.db.query_custom.function_bearing_QMARK_,cljs.core.keys(value));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.some(frontend.db.query_custom.function_bearing_QMARK_,cljs.core.vals(value));
}
} else {
if(cljs.core.coll_QMARK_(value)){
return cljs.core.some(frontend.db.query_custom.function_bearing_QMARK_,value);
} else {
return false;

}
}
}
});
frontend.db.query_custom.current_page = (function frontend$db$query_custom$current_page(){
var or__5142__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(frontend.state.get_default_home());
}
});
frontend.db.query_custom.query_context = (function frontend$db$query_custom$query_context(query_opts){
if(cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-page-fn","current-page-fn",1987406514),null], null), null),cljs.core.keys(query_opts))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid custom query options",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),query_opts], null));
}

var current_page_fn = new cljs.core.Keyword(null,"current-page-fn","current-page-fn",1987406514).cljs$core$IFn$_invoke$arity$1(query_opts);
var _ = (((((current_page_fn == null)) || (cljs.core.fn_QMARK_(current_page_fn))))?null:(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid current page function",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-page-fn","current-page-fn",1987406514),current_page_fn], null))})());
var current_page_title = (cljs.core.truth_(current_page_fn)?(current_page_fn.cljs$core$IFn$_invoke$arity$0 ? current_page_fn.cljs$core$IFn$_invoke$arity$0() : current_page_fn.call(null)):null);
var page_identity = frontend.db.query_custom.current_page();
if((((current_page_title == null)) || (((typeof current_page_title === 'string') && ((!(clojure.string.blank_QMARK_(current_page_title)))))))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid current page title",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-page-title","current-page-title",209597702),current_page_title], null));
}

if((((page_identity == null)) || (((cljs.core.uuid_QMARK_(page_identity)) || (((typeof page_identity === 'string') && ((!(clojure.string.blank_QMARK_(page_identity)))))))))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid current page",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),page_identity], null));
}

var G__100217 = cljs.core.PersistentArrayMap.EMPTY;
var G__100217__$1 = (cljs.core.truth_(page_identity)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__100217,new cljs.core.Keyword(null,"current-page","current-page",-101294180),page_identity):G__100217);
if(cljs.core.truth_(current_page_title)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__100217__$1,new cljs.core.Keyword(null,"current-page-title","current-page-title",209597702),current_page_title);
} else {
return G__100217__$1;
}
});
frontend.db.query_custom.require_datalog_query_BANG_ = (function frontend$db$query_custom$require_datalog_query_BANG_(query_m){
if(((cljs.core.map_QMARK_(query_m)) && (((cljs.core.vector_QMARK_(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(query_m))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"find","find",496279456),cljs.core.first(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(query_m)))) && (cljs.core.not(frontend.db.query_custom.function_bearing_QMARK_(query_m))))))))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid custom query",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),query_m], null));
}

return query_m;
});
/**
 * Executes one custom query through a direct worker API.
 */
frontend.db.query_custom.custom_query = (function frontend$db$query_custom$custom_query(var_args){
var G__100219 = arguments.length;
switch (G__100219) {
case 1:
return frontend.db.query_custom.custom_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.query_custom.custom_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.db.query_custom.custom_query.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.db.query_custom.custom_query.cljs$core$IFn$_invoke$arity$1 = (function (query){
return frontend.db.query_custom.custom_query.cljs$core$IFn$_invoke$arity$2(query,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.db.query_custom.custom_query.cljs$core$IFn$_invoke$arity$2 = (function (query,query_opts){
return frontend.db.query_custom.custom_query.cljs$core$IFn$_invoke$arity$3(frontend.state.get_current_repo(),query,query_opts);
}));

(frontend.db.query_custom.custom_query.cljs$core$IFn$_invoke$arity$3 = (function (repo,query_m,query_opts){
if(((cljs.core.list_QMARK_(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(query_m))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"find","find",496279456),cljs.core.first(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(query_m)))))){
return frontend.db.query_dsl.custom_query(repo,query_m,query_opts);
} else {
return frontend.db.async._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","query-custom","thread-api/query-custom",1553046116),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,frontend.db.query_custom.require_datalog_query_BANG_(query_m),frontend.db.query_custom.query_context(query_opts)], 0));
}
}));

(frontend.db.query_custom.custom_query.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=frontend.db.query_custom.js.map
