goog.provide('logseq.api.db');
logseq.api.db.q = (function logseq$api$db$q(query_string){
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.query_dsl.query.cljs$core$IFn$_invoke$arity$2(repo,query_string)),(function (result){
return promesa.protocols._promise(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1(cljs.core.flatten(result))));
}));
}));
} else {
return null;
}
});
logseq.api.db.datascript_query = (function logseq$api$db$datascript_query(var_args){
var args__5882__auto__ = [];
var len__5876__auto___48169 = arguments.length;
var i__5877__auto___48170 = (0);
while(true){
if((i__5877__auto___48170 < len__5876__auto___48169)){
args__5882__auto__.push((arguments[i__5877__auto___48170]));

var G__48171 = (i__5877__auto___48170 + (1));
i__5877__auto___48170 = G__48171;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return logseq.api.db.datascript_query.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(logseq.api.db.datascript_query.cljs$core$IFn$_invoke$arity$variadic = (function (query,inputs){
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var temp__5825__auto____$1 = frontend.state.get_current_page();
if(cljs.core.truth_(temp__5825__auto____$1)){
var name_or_uuid = temp__5825__auto____$1;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,name_or_uuid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (page){
return promesa.protocols._promise(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page));
}));
}));
} else {
return null;
}
})()),(function (current_page_title){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_today_journal_title(repo)),(function (today_title){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(query)),(function (query__$1){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,input){
if(cljs.core.fn_QMARK_(input)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,(function() { 
var G__48172__delegate = function (args){
return input.apply(null,cljs.core.clj__GT_js(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs_bean.core.__GT_js,args)));
};
var G__48172 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48173__i = 0, G__48173__a = new Array(arguments.length -  0);
while (G__48173__i < G__48173__a.length) {G__48173__a[G__48173__i] = arguments[G__48173__i + 0]; ++G__48173__i;}
  args = new cljs.core.IndexedSeq(G__48173__a,0,null);
} 
return G__48172__delegate.call(this,args);};
G__48172.cljs$lang$maxFixedArity = 0;
G__48172.cljs$lang$applyTo = (function (arglist__48174){
var args = cljs.core.seq(arglist__48174);
return G__48172__delegate(args);
});
G__48172.cljs$core$IFn$_invoke$arity$variadic = G__48172__delegate;
return G__48172;
})()
], null);
} else {
return null;
}
}),inputs))),(function (fn_inputs){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__48166_SHARP_){
if(cljs.core.fn_QMARK_(p1__48166_SHARP_)){
return null;
} else {
return p1__48166_SHARP_;
}
}),inputs)),(function (serializable_inputs){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_resolve_query_inputs(repo,serializable_inputs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-page-title","current-page-title",209597702),current_page_title,new cljs.core.Keyword(null,"today-title","today-title",2102915035),today_title], null))),(function (resolved_inputs){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,input){
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fn_inputs,idx);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return input;
}
}),resolved_inputs)),(function (resolved_inputs__$1){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(frontend.db.async._LT_q,repo,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact-db?","transact-db?",1279612399),false], null),cljs.core.cons(query__$1,resolved_inputs__$1))),(function (result){
return promesa.protocols._promise(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$2(result,false)));
}));
}));
}));
}));
}));
}));
}));
}));
}));
} else {
return null;
}
}));

(logseq.api.db.datascript_query.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(logseq.api.db.datascript_query.cljs$lang$applyTo = (function (seq48167){
var G__48168 = cljs.core.first(seq48167);
var seq48167__$1 = cljs.core.next(seq48167);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48168,seq48167__$1);
}));

logseq.api.db.custom_query = (function logseq$api$db$custom_query(query_string){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var query = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(query_string);
return frontend.db.query_custom.custom_query.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),query], null));
})()),(function (result){
return promesa.protocols._promise(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1(cljs.core.flatten(result))));
}));
}));
});
logseq.api.db.set_file_content = (function logseq$api$db$set_file_content(path,content){
var built_in_paths = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["logseq/publish.js",null,"logseq/publish.css",null,"logseq/custom.js",null,"logseq/custom.css",null], null), null);
if((!(typeof content === 'string'))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("content should be a string",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),content], null));
} else {
if((!(cljs.core.contains_QMARK_(built_in_paths,path)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid path",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"supported-paths","supported-paths",-1481530382),built_in_paths], null));
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","transact","thread-api/transact",917721609),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("file","path","file/path",-191335748),path,new cljs.core.Keyword("file","content","file/content",12680964),content], null)], null),null,null], 0))),(function (___21901__auto__){
return promesa.protocols._promise(true);
}));
}));

}
}
});
logseq.api.db.get_file_content = (function logseq$api$db$get_file_content(path){
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return frontend.db.async._LT_get_file_content(repo,path);
} else {
return null;
}
});

//# sourceMappingURL=logseq.api.db.js.map
