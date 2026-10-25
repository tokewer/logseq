goog.provide('frontend.search');
frontend.search.fuzzy_search = frontend.common.search_fuzzy.fuzzy_search;
frontend.search.fuzzy_search_multi = frontend.common.search_fuzzy.fuzzy_search_multi;
frontend.search.hanzi__GT_initials = frontend.common.search_fuzzy.hanzi__GT_initials;
frontend.search.get_engine = (function frontend$search$get_engine(repo){
return frontend.search.agency.__GT_Agency(repo);
});
frontend.search.block_search = (function frontend$search$block_search(repo,q,option){
var temp__5825__auto__ = frontend.search.get_engine(repo);
if(cljs.core.truth_(temp__5825__auto__)){
var engine = temp__5825__auto__;
var q__$1 = frontend.common.search_fuzzy.search_normalize(q,frontend.state.enable_search_remove_accents_QMARK_());
if(clojure.string.blank_QMARK_(q__$1)){
return null;
} else {
return engine.frontend$search$protocol$Engine$query$arity$3(null,q__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(option,new cljs.core.Keyword("feature","enable-semantic-search?","feature/enable-semantic-search?",-1561249444),frontend.state.enable_semantic_search_QMARK_()));
}
} else {
return null;
}
});
frontend.search.file_search = (function frontend$search$file_search(var_args){
var G__61424 = arguments.length;
switch (G__61424) {
case 1:
return frontend.search.file_search.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.search.file_search.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.search.file_search.cljs$core$IFn$_invoke$arity$1 = (function (q){
return frontend.search.file_search.cljs$core$IFn$_invoke$arity$2(q,(3));
}));

(frontend.search.file_search.cljs$core$IFn$_invoke$arity$2 = (function (q,limit){
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
var q__$1 = frontend.common.search_fuzzy.clean_str(q);
if(clojure.string.blank_QMARK_(q__$1)){
return null;
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["md",null,"markdown",null], null), null)),(function (mldoc_exts){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_files(repo)),(function (result){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (file){
var G__61425 = frontend.util.get_file_ext(file);
return (mldoc_exts.cljs$core$IFn$_invoke$arity$1 ? mldoc_exts.cljs$core$IFn$_invoke$arity$1(G__61425) : mldoc_exts.call(null,G__61425));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,result))),(function (files){
return promesa.protocols._promise(((cljs.core.seq(files))?frontend.common.search_fuzzy.fuzzy_search.cljs$core$IFn$_invoke$arity$variadic(files,q__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"limit","limit",-1355822363),limit], 0)):null));
}));
}));
}));
}));
}
} else {
return null;
}
}));

(frontend.search.file_search.cljs$lang$maxFixedArity = 2);

frontend.search.template_search = (function frontend$search$template_search(var_args){
var G__61427 = arguments.length;
switch (G__61427) {
case 1:
return frontend.search.template_search.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.search.template_search.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.search.template_search.cljs$core$IFn$_invoke$arity$1 = (function (q){
return frontend.search.template_search.cljs$core$IFn$_invoke$arity$2(q,(100));
}));

(frontend.search.template_search.cljs$core$IFn$_invoke$arity$2 = (function (q,limit){
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
if(cljs.core.truth_(q)){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.search_fuzzy.clean_str(q)),(function (q__$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null),new cljs.core.Keyword("logseq.class","Template","logseq.class/Template",1720854846)], 0))),(function (template_class){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_tag_objects(repo,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(template_class))),(function (templates){
return promesa.protocols._promise(((cljs.core.seq(templates))?(function (){var extract_fn = new cljs.core.Keyword("block","title","block/title",710445684);
return frontend.common.search_fuzzy.fuzzy_search.cljs$core$IFn$_invoke$arity$variadic(templates,q__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"limit","limit",-1355822363),limit,new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),extract_fn], null)], 0));
})():null));
}));
}));
}));
}));
} else {
return null;
}
} else {
return null;
}
}));

(frontend.search.template_search.cljs$lang$maxFixedArity = 2);

frontend.search.rebuild_indices_BANG_ = (function frontend$search$rebuild_indices_BANG_(var_args){
var G__61429 = arguments.length;
switch (G__61429) {
case 0:
return frontend.search.rebuild_indices_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.search.rebuild_indices_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.search.rebuild_indices_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.search.rebuild_indices_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo());
}));

(frontend.search.rebuild_indices_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (repo){
if(cljs.core.truth_(repo)){
var temp__5825__auto__ = frontend.search.get_engine(repo);
if(cljs.core.truth_(temp__5825__auto__)){
var engine = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(engine.frontend$search$protocol$Engine$rebuild_pages_indice_BANG_$arity$1(null)),(function (___27434__auto__){
return promesa.protocols._promise(engine.frontend$search$protocol$Engine$rebuild_blocks_indice_BANG_$arity$1(null));
}));
}));
} else {
return null;
}
} else {
return null;
}
}));

(frontend.search.rebuild_indices_BANG_.cljs$lang$maxFixedArity = 1);

frontend.search.remove_db_BANG_ = (function frontend$search$remove_db_BANG_(repo){
var temp__5825__auto__ = frontend.search.get_engine(repo);
if(cljs.core.truth_(temp__5825__auto__)){
var engine = temp__5825__auto__;
return engine.frontend$search$protocol$Engine$remove_db_BANG_$arity$1(null);
} else {
return null;
}
});

//# sourceMappingURL=frontend.search.js.map
