goog.provide('frontend.handler.db_based.page');
/**
 * Returns a boolean indicating whether the new tag passes all valid checks.
 * When returning false, this fn also displays appropriate notifications to the user
 */
frontend.handler.db_based.page._LT_valid_tag_QMARK_ = (function frontend$handler$db_based$page$_LT_valid_tag_QMARK_(repo,block_id,tag_id){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","validate-block-tag","thread-api/validate-block-tag",1183154384),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,block_id,tag_id], 0))),(function (result){
return promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword(null,"valid?","valid?",-212412379).cljs$core$IFn$_invoke$arity$1(result))?true:(function (){var payload = new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(result);
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(payload),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(payload));

return false;
})()));
}));
}));
});
frontend.handler.db_based.page.add_tag = (function frontend$handler$db_based$page$add_tag(repo,block_id,tag_entity){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0(),(function (_){
return frontend.handler.db_based.page._LT_valid_tag_QMARK_(repo,block_id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(tag_entity));
})),(function (valid_QMARK_){
if(cljs.core.truth_(valid_QMARK_)){
return frontend.handler.db_based.property.set_block_property_BANG_(block_id,new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(tag_entity));
} else {
return null;
}
}));
});
/**
 * Converts a Page to a Tag
 */
frontend.handler.db_based.page.convert_page_to_tag_BANG_ = (function frontend$handler$db_based$page$convert_page_to_tag_BANG_(page_entity){
var repo = frontend.state.get_current_repo();
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_page_exists_QMARK_(repo,new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page_entity),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.class","Tag","logseq.class/Tag",-538902083),null], null), null))),(function (tag_exists_QMARK_){
return promesa.protocols._promise((cljs.core.truth_(tag_exists_QMARK_)?frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page.convert","page-to-tag-duplicate","page.convert/page-to-tag-duplicate",1102738993),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page_entity)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671),false):(cljs.core.truth_(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(page_entity))?frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page.convert","page-to-tag-namespaced","page.convert/page-to-tag-namespaced",24187996)], 0)),new cljs.core.Keyword(null,"error","error",-978969032),false):(cljs.core.truth_((logseq.db.built_in_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.built_in_QMARK_.cljs$core$IFn$_invoke$arity$1(page_entity) : logseq.db.built_in_QMARK_.call(null,page_entity)))?frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page.convert","page-to-tag-built-in","page.convert/page-to-tag-built-in",1355032372)], 0)),new cljs.core.Keyword(null,"error","error",-978969032)):frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","convert-page-to-tag","thread-api/convert-page-to-tag",1690712253),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page_entity)], 0))
))));
}));
}));
});
frontend.handler.db_based.page.convert_tag_to_page_BANG_ = (function frontend$handler$db_based$page$convert_tag_to_page_BANG_(entity){
var repo = frontend.state.get_current_repo();
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_page_exists_QMARK_(repo,new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(entity),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329),null], null), null))),(function (page_exists_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_structured_children(repo,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity))),(function (class_children){
return promesa.protocols._promise((cljs.core.truth_(page_exists_QMARK_)?frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page.convert","tag-to-page-duplicate","page.convert/tag-to-page-duplicate",1292301014),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(entity)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671),false):(cljs.core.truth_((logseq.db.built_in_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.built_in_QMARK_.cljs$core$IFn$_invoke$arity$1(entity) : logseq.db.built_in_QMARK_.call(null,entity)))?frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page.convert","tag-to-page-built-in","page.convert/tag-to-page-built-in",606795200)], 0)),new cljs.core.Keyword(null,"error","error",-978969032)):((cljs.core.seq(class_children))?frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page.convert","tag-to-page-has-children","page.convert/tag-to-page-has-children",-283391908)], 0)),new cljs.core.Keyword(null,"error","error",-978969032),false):(function (){var convert_fn = (function frontend$handler$db_based$page$convert_tag_to_page_BANG__$_convert_fn(_){
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","convert-tag-to-page","thread-api/convert-tag-to-page",-1439065026),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity)], 0));
});
return promesa.core.then.cljs$core$IFn$_invoke$arity$2((function (){var G__67337 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page.convert","tag-to-page-confirm-desc","page.convert/tag-to-page-confirm-desc",643070478)], 0));
var G__67338 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"convert-tag-to-page","convert-tag-to-page",-1819851675),new cljs.core.Keyword(null,"data-reminder","data-reminder",1296338874),new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"data-reminder-label","data-reminder-label",149396844),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","dont-remind-me-again","ui/dont-remind-me-again",-993434342)], 0)),new cljs.core.Keyword(null,"cancel-label","cancel-label",-1093310551),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","cancel","ui/cancel",-1964089788)], 0)),new cljs.core.Keyword(null,"ok-label","ok-label",808114315),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","confirm","ui/confirm",-2003996372)], 0))], null);
return (logseq.shui.ui.dialog_confirm_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_confirm_BANG_.cljs$core$IFn$_invoke$arity$2(G__67337,G__67338) : logseq.shui.ui.dialog_confirm_BANG_.call(null,G__67337,G__67338));
})(),convert_fn);
})())
)));
}));
}));
}));
});
/**
 * Creates a class page and provides class-specific error handling
 */
frontend.handler.db_based.page._LT_create_class_BANG_ = (function frontend$handler$db_based$page$_LT_create_class_BANG_(title,options){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(frontend.handler.common.page._LT_create_BANG_.cljs$core$IFn$_invoke$arity$2(title,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"class?","class?",385834571),true)),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e)))){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.ex_data(e),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Keyword(null,"message","message",-406056002)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.ex_data(e),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Keyword(null,"type","type",1174270348)], null)));
} else {
}

throw e;
}));
});
frontend.handler.db_based.page.tag_on_chosen_handler = (function frontend$handler$db_based$page$tag_on_chosen_handler(chosen,chosen_result,class_QMARK_,edit_content,current_pos,last_pattern){
var tag = clojure.string.trim(chosen);
var edit_block = frontend.state.get_edit_block();
var create_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),false], null);
var existing_result_QMARK_ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(chosen_result);
if(cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(edit_block))){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(existing_result_QMARK_)?null:(cljs.core.truth_(class_QMARK_)?frontend.handler.db_based.page._LT_create_class_BANG_(tag,create_opts):frontend.handler.common.page._LT_create_BANG_.cljs$core$IFn$_invoke$arity$2(tag,create_opts)))),(function (result){
return promesa.protocols._promise((cljs.core.truth_(class_QMARK_)?(function (){var tag_entity = (function (){var or__5142__auto__ = (cljs.core.truth_(existing_result_QMARK_)?chosen_result:null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return result;
}
})();
var hash_idx = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(edit_content,(0),current_pos),last_pattern);
var add_tag_to_nearest_node_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(logseq.common.util.page_ref.right_brackets,logseq.common.util.safe_subs.cljs$core$IFn$_invoke$arity$3(edit_content,(hash_idx - (2)),hash_idx));
var nearest_node = (function (){var G__67339 = frontend.handler.editor.get_nearest_page();
if((G__67339 == null)){
return null;
} else {
return clojure.string.trim(G__67339);
}
})();
if(((add_tag_to_nearest_node_QMARK_) && ((!(clojure.string.blank_QMARK_(nearest_node)))))){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_case_page(frontend.state.get_current_repo(),nearest_node)),(function (node_ent){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(node_ent)?null:frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0())),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = node_ent;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.db.async._LT_get_case_page(frontend.state.get_current_repo(),nearest_node);
}
})()),(function (node_ent_SINGLEQUOTE_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.page.add_tag(frontend.state.get_current_repo(),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(node_ent_SINGLEQUOTE_),tag_entity)),(function (___$1){
return promesa.protocols._promise(frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","added-tag-to-node","page/added-tag-to-node",-188773204),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(tag_entity),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(node_ent_SINGLEQUOTE_)], 0))));
}));
}));
}));
}));
}));
} else {
return frontend.handler.db_based.page.add_tag(frontend.state.get_current_repo(),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(edit_block),tag_entity);
}
})():null));
}));
}));
} else {
return null;
}
});

//# sourceMappingURL=frontend.handler.db_based.page.js.map
