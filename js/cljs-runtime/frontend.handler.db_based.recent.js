goog.provide('frontend.handler.db_based.recent');
frontend.handler.db_based.recent.add_page_to_recent_BANG_ = (function frontend$handler$db_based$recent$add_page_to_recent_BANG_(db_id,_click_from_recent_QMARK_){
if(cljs.core.truth_(db_id)){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(typeof db_id === 'number')+"\n"+"db-id")));
}

if(cljs.core.truth_(new cljs.core.Keyword("db","restoring?","db/restoring?",-1653366233).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()))){
return null;
} else {
var pages = frontend.state.get_recent_pages();
if(cljs.core.truth_((function (){var fexpr__65485 = cljs.core.set(pages);
return (fexpr__65485.cljs$core$IFn$_invoke$arity$1 ? fexpr__65485.cljs$core$IFn$_invoke$arity$1(db_id) : fexpr__65485.call(null,db_id));
})())){
return null;
} else {
var new_pages = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((15),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(db_id,pages))));
return frontend.state.set_recent_pages_BANG_(new_pages);
}
}
});
frontend.handler.db_based.recent.get_recent_pages = (function frontend$handler$db_based$recent$get_recent_pages(){
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-recent-pages","thread-api/get-recent-pages",1621117941),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,frontend.state.get_recent_pages()], 0));
} else {
return null;
}
});

//# sourceMappingURL=frontend.handler.db_based.recent.js.map
