goog.provide('frontend.handler.journal');
frontend.handler.journal.redirect_to_journal_BANG_ = (function frontend$handler$journal$redirect_to_journal_BANG_(page){
if(cljs.core.truth_(page)){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.get_current_repo()),(function (repo){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,page,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"children?","children?",-1199594108),false], 0))),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_page_exists_QMARK_(repo,page,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.class","Journal","logseq.class/Journal",1979741081),null], null), null))),(function (exists_QMARK_){
return promesa.protocols._promise((cljs.core.truth_(exists_QMARK_)?frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),page], null)], null)):(frontend.handler.page._LT_create_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.page._LT_create_BANG_.cljs$core$IFn$_invoke$arity$1(page) : frontend.handler.page._LT_create_BANG_.call(null,page))));
}));
}));
}));
}));
} else {
return null;
}
});
frontend.handler.journal.go_to_tomorrow_BANG_ = (function frontend$handler$journal$go_to_tomorrow_BANG_(){
return frontend.handler.journal.redirect_to_journal_BANG_(frontend.date.tomorrow());
});
frontend.handler.journal._LT_get_current_journal = (function frontend$handler$journal$_LT_get_current_journal(){
var current_page = frontend.state.get_current_page();
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(current_page)?frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),current_page,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0)):null)),(function (block){
return promesa.protocols._promise((function (){var or__5142__auto__ = (function (){var G__67412 = block;
var G__67412__$1 = (((G__67412 == null))?null:new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(G__67412));
if((G__67412__$1 == null)){
return null;
} else {
return frontend.date.journal_title__GT_long(G__67412__$1);
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (frontend.util.time_ms.cljs$core$IFn$_invoke$arity$0 ? frontend.util.time_ms.cljs$core$IFn$_invoke$arity$0() : frontend.util.time_ms.call(null));
}
})());
}));
}));
});
frontend.handler.journal.go_to_prev_journal_BANG_ = (function frontend$handler$journal$go_to_prev_journal_BANG_(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.journal._LT_get_current_journal()),(function (current_journal){
return promesa.protocols._mcat(promesa.protocols._promise(cljs_time.coerce.from_long(current_journal)),(function (day){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.date.journal_name.cljs$core$IFn$_invoke$arity$1(cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(day,cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1))))),(function (page){
return promesa.protocols._promise(frontend.handler.journal.redirect_to_journal_BANG_(page));
}));
}));
}));
}));
});
frontend.handler.journal.go_to_next_journal_BANG_ = (function frontend$handler$journal$go_to_next_journal_BANG_(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.journal._LT_get_current_journal()),(function (current_journal){
return promesa.protocols._mcat(promesa.protocols._promise(cljs_time.coerce.from_long(current_journal)),(function (day){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.date.journal_name.cljs$core$IFn$_invoke$arity$1(cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(day,cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1))))),(function (page){
return promesa.protocols._promise(frontend.handler.journal.redirect_to_journal_BANG_(page));
}));
}));
}));
}));
});

//# sourceMappingURL=frontend.handler.journal.js.map
