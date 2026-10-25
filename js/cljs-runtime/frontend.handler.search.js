goog.provide('frontend.handler.search');
frontend.handler.search._LT_resolve_page_db_id = (function frontend$handler$search$_LT_resolve_page_db_id(repo,page_db_id){
if(typeof page_db_id === 'string'){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_db_id], null)], 0))),(function (page){
return promesa.protocols._promise(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page));
}));
}));
} else {
return page_db_id;
}
});
/**
 * The aggregation of search results
 */
frontend.handler.search.search = (function frontend$handler$search$search(var_args){
var G__65989 = arguments.length;
switch (G__65989) {
case 1:
return frontend.handler.search.search.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.search.search.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.handler.search.search.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.search.search.cljs$core$IFn$_invoke$arity$1 = (function (q){
return frontend.handler.search.search.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),q);
}));

(frontend.handler.search.search.cljs$core$IFn$_invoke$arity$2 = (function (repo,q){
return frontend.handler.search.search.cljs$core$IFn$_invoke$arity$3(repo,q,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"limit","limit",-1355822363),(10)], null));
}));

(frontend.handler.search.search.cljs$core$IFn$_invoke$arity$3 = (function (repo,q,p__65990){
var map__65991 = p__65990;
var map__65991__$1 = cljs.core.__destructure_map(map__65991);
var opts = map__65991__$1;
var page_db_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65991__$1,new cljs.core.Keyword(null,"page-db-id","page-db-id",-761574235),null);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65991__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),(10));
var more_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65991__$1,new cljs.core.Keyword(null,"more?","more?",519437444));
if(clojure.string.blank_QMARK_(q)){
return null;
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.search._LT_resolve_page_db_id(repo,page_db_id)),(function (page_db_id__$1){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(page_db_id__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"page","page",849072397),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_db_id__$1))):opts)),(function (opts__$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.search.block_search(repo,q,opts__$1)),(function (blocks){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.search.file_search.cljs$core$IFn$_invoke$arity$1(q)),(function (files){
return promesa.protocols._promise((function (){var result = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),blocks,new cljs.core.Keyword(null,"has-more?","has-more?",-1528440566),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(limit,cljs.core.count(blocks))], null),(cljs.core.truth_(page_db_id__$1)?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"files","files",-472457450),files], null))], 0));
var search_key = (cljs.core.truth_(more_QMARK_)?new cljs.core.Keyword("search","more-result","search/more-result",1439170242):new cljs.core.Keyword("search","result","search/result",443756363));
frontend.state.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([search_key,result], 0));

return result;
})());
}));
}));
}));
}));
}));
}
}));

(frontend.handler.search.search.cljs$lang$maxFixedArity = 3);

frontend.handler.search.open_find_in_page_BANG_ = (function frontend$handler$search$open_find_in_page_BANG_(){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
var map__65992 = new cljs.core.Keyword("ui","find-in-page","ui/find-in-page",-941396467).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0());
var map__65992__$1 = cljs.core.__destructure_map(map__65992);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65992__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
if(cljs.core.truth_(active_QMARK_)){
return null;
} else {
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","find-in-page","ui/find-in-page",-941396467),new cljs.core.Keyword(null,"active?","active?",459499776)], null),true);
}
} else {
return null;
}
});
frontend.handler.search.electron_find_in_page_BANG_ = (function frontend$handler$search$electron_find_in_page_BANG_(){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
var map__65993 = new cljs.core.Keyword("ui","find-in-page","ui/find-in-page",-941396467).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0());
var map__65993__$1 = cljs.core.__destructure_map(map__65993);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65993__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var backward_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65993__$1,new cljs.core.Keyword(null,"backward?","backward?",-1388361117));
var match_case_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65993__$1,new cljs.core.Keyword(null,"match-case?","match-case?",-1836393163));
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65993__$1,new cljs.core.Keyword(null,"q","q",689001697));
var option = (function (){var G__65994 = cljs.core.PersistentArrayMap.EMPTY;
var G__65994__$1 = ((cljs.core.not(active_QMARK_))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65994,new cljs.core.Keyword(null,"findNext","findNext",648169934),true):G__65994);
var G__65994__$2 = (cljs.core.truth_(backward_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65994__$1,new cljs.core.Keyword(null,"forward","forward",-557345303),false):G__65994__$1);
if(cljs.core.truth_(match_case_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65994__$2,new cljs.core.Keyword(null,"matchCase","matchCase",-1316588853),true);
} else {
return G__65994__$2;
}
})();
frontend.handler.search.open_find_in_page_BANG_();

if(clojure.string.blank_QMARK_(q)){
return null;
} else {
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(document.getElementById("search-in-page-input"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden"], 0));

if((cljs.core.count(q) > (1))){
dommy.core.set_html_BANG_(document.getElementById("search-in-page-placeholder"),(function (){var G__65995 = "<span><span>%s</span><span style=\"margin-left: -4px;\">%s</span></span>";
var G__65996 = cljs.core.first(q);
var G__65997 = (""+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(q,(1))));
return (frontend.util.format.cljs$core$IFn$_invoke$arity$3 ? frontend.util.format.cljs$core$IFn$_invoke$arity$3(G__65995,G__65996,G__65997) : frontend.util.format.call(null,G__65995,G__65996,G__65997));
})());
} else {
}

return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["find-in-page",q,option], 0));
}
} else {
return null;
}
});
var cancelable_debounce_search_66011 = frontend.util.cancelable_debounce(frontend.handler.search.electron_find_in_page_BANG_,(500));
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.search !== 'undefined') && (typeof frontend.handler.search.debounced_search !== 'undefined')){
} else {
frontend.handler.search.debounced_search = cljs.core.first(cancelable_debounce_search_66011);
}

if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.search !== 'undefined') && (typeof frontend.handler.search.stop_debounced_search_BANG_ !== 'undefined')){
} else {
frontend.handler.search.stop_debounced_search_BANG_ = cljs.core.second(cancelable_debounce_search_66011);
}
frontend.handler.search.loop_find_in_page_BANG_ = (function frontend$handler$search$loop_find_in_page_BANG_(backward_QMARK_){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","find-in-page","ui/find-in-page",-941396467),new cljs.core.Keyword(null,"active?","active?",459499776)], null));
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(frontend.state.editing_QMARK_());
} else {
return and__5140__auto__;
}
})())){
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","find-in-page","ui/find-in-page",-941396467),new cljs.core.Keyword(null,"backward?","backward?",-1388361117)], null),backward_QMARK_);

return (frontend.handler.search.debounced_search.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.search.debounced_search.cljs$core$IFn$_invoke$arity$0() : frontend.handler.search.debounced_search.call(null));
} else {
return false;
}
});
frontend.handler.search.electron_exit_find_in_page_BANG_ = (function frontend$handler$search$electron_exit_find_in_page_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___66012 = arguments.length;
var i__5877__auto___66013 = (0);
while(true){
if((i__5877__auto___66013 < len__5876__auto___66012)){
args__5882__auto__.push((arguments[i__5877__auto___66013]));

var G__66014 = (i__5877__auto___66013 + (1));
i__5877__auto___66013 = G__66014;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return frontend.handler.search.electron_exit_find_in_page_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(frontend.handler.search.electron_exit_find_in_page_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__65999){
var map__66000 = p__65999;
var map__66000__$1 = cljs.core.__destructure_map(map__66000);
var clear_state_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66000__$1,new cljs.core.Keyword(null,"clear-state?","clear-state?",-1950459393),true);
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["clear-find-in-page"], 0));

if(cljs.core.truth_(clear_state_QMARK_)){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","find-in-page","ui/find-in-page",-941396467),null);
} else {
return null;
}
} else {
return null;
}
}));

(frontend.handler.search.electron_exit_find_in_page_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.handler.search.electron_exit_find_in_page_BANG_.cljs$lang$applyTo = (function (seq65998){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65998));
}));

frontend.handler.search.clear_search_BANG_ = (function frontend$handler$search$clear_search_BANG_(var_args){
var G__66002 = arguments.length;
switch (G__66002) {
case 0:
return frontend.handler.search.clear_search_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.search.clear_search_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.search.clear_search_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.handler.search.clear_search_BANG_.cljs$core$IFn$_invoke$arity$1(true);
}));

(frontend.handler.search.clear_search_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (clear_search_mode_QMARK_){
var m_66016 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("search","result","search/result",443756363),null,new cljs.core.Keyword("search","q","search/q",-553992135),""], null);
frontend.state.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m_66016], 0));

if(cljs.core.truth_(frontend.config.lsp_enabled_QMARK_)){
frontend.state.reset_plugin_search_engines();
} else {
}

if(cljs.core.truth_(clear_search_mode_QMARK_)){
return frontend.state.set_search_mode_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"global","global",93595047));
} else {
return null;
}
}));

(frontend.handler.search.clear_search_BANG_.cljs$lang$maxFixedArity = 1);

frontend.handler.search.rebuild_indices_BANG_ = (function frontend$handler$search$rebuild_indices_BANG_(var_args){
var G__66004 = arguments.length;
switch (G__66004) {
case 0:
return frontend.handler.search.rebuild_indices_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.search.rebuild_indices_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.search.rebuild_indices_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.handler.search.rebuild_indices_BANG_.cljs$core$IFn$_invoke$arity$1(false);
}));

(frontend.handler.search.rebuild_indices_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (notice_QMARK_){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Starting to rebuild search indices!"], 0));

var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
if(cljs.core.truth_(notice_QMARK_)){
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("search","index-build-notify-repos","search/index-build-notify-repos",248727980),repo], null),true);
} else {
}

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._promise(frontend.search.rebuild_indices_BANG_.cljs$core$IFn$_invoke$arity$0());
}));
} else {
return null;
}
}));

(frontend.handler.search.rebuild_indices_BANG_.cljs$lang$maxFixedArity = 1);

frontend.handler.search.highlight_exact_query = (function frontend$handler$search$highlight_exact_query(content,q){
if(((clojure.string.blank_QMARK_(content)) || (clojure.string.blank_QMARK_(q)))){
return content;
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = content;
if(cljs.core.truth_(and__5140__auto__)){
return q;
} else {
return and__5140__auto__;
}
})())){
var q_words = clojure.string.split.cljs$core$IFn$_invoke$arity$2(q,/ /);
var lc_content = frontend.common.search_fuzzy.search_normalize(content,frontend.state.enable_search_remove_accents_QMARK_());
var lc_q = frontend.common.search_fuzzy.search_normalize(q,frontend.state.enable_search_remove_accents_QMARK_());
if(((clojure.string.includes_QMARK_(lc_content,lc_q)) && (cljs.core.not((function (){var G__66005 = / /;
var G__66006 = q;
return (frontend.util.safe_re_find.cljs$core$IFn$_invoke$arity$2 ? frontend.util.safe_re_find.cljs$core$IFn$_invoke$arity$2(G__66005,G__66006) : frontend.util.safe_re_find.call(null,G__66005,G__66006));
})())))){
var i = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(lc_content,lc_q);
var vec__66007 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(content,(i + cljs.core.count(q)))], null);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66007,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66007,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((clojure.string.blank_QMARK_(before))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),before], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(0)], null)], null),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,i,(i + cljs.core.count(q)))], null),((clojure.string.blank_QMARK_(after))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),after], null))], null);
} else {
var elements = (function (){var words = q_words;
var content__$1 = content;
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.seq(words);
if(and__5140__auto__){
return content__$1;
} else {
return and__5140__auto__;
}
})())){
var word = cljs.core.first(words);
var lc_word = frontend.common.search_fuzzy.search_normalize(word,frontend.state.enable_search_remove_accents_QMARK_());
var lc_content__$1 = frontend.common.search_fuzzy.search_normalize(content__$1,frontend.state.enable_search_remove_accents_QMARK_());
var temp__5823__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(lc_content__$1,lc_word);
if(cljs.core.truth_(temp__5823__auto__)){
var i = temp__5823__auto__;
var G__66018 = cljs.core.rest(words);
var G__66019 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(content__$1,(i + cljs.core.count(word)));
var G__66020 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content__$1,(0),i)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(0)], null)], null),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content__$1,i,(i + cljs.core.count(word)))], null)], null)));
words = G__66018;
content__$1 = G__66019;
result = G__66020;
continue;
} else {
var G__66021 = null;
var G__66022 = content__$1;
var G__66023 = result;
words = G__66021;
content__$1 = G__66022;
result = G__66023;
continue;
}
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),content__$1], null));
}
break;
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"m-0"], null)], null),elements);
}
} else {
return null;
}
}
});

//# sourceMappingURL=frontend.handler.search.js.map
