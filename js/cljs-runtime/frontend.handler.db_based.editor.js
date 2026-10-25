goog.provide('frontend.handler.db_based.editor');
frontend.handler.db_based.editor.remove_empty_refs = (function frontend$handler$db_based$editor$remove_empty_refs(refs){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,refs);
});
frontend.handler.db_based.editor.ref_summary = (function frontend$handler$db_based$editor$ref_summary(ref){
return cljs.core.select_keys(ref,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("block","tags","block/tags",1814948340)], null));
});
frontend.handler.db_based.editor.collect_known_refs = (function frontend$handler$db_based$editor$collect_known_refs(block){
var G__63506 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552);
var G__63507 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(frontend.state.get_state(new cljs.core.Keyword("editor","block-refs","editor/block-refs",-2016894855)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.handler.db_based.editor.ref_summary,new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(block)));
return (frontend.util.distinct_by_last_wins.cljs$core$IFn$_invoke$arity$2 ? frontend.util.distinct_by_last_wins.cljs$core$IFn$_invoke$arity$2(G__63506,G__63507) : frontend.util.distinct_by_last_wins.call(null,G__63506,G__63507));
});
frontend.handler.db_based.editor.use_cached_refs = (function frontend$handler$db_based$editor$use_cached_refs(refs,block,cached_refs){
var refs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__63508_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(p1__63508_SHARP_));
}),refs);
var title__GT_ref = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","title","block/title",710445684),cached_refs),cached_refs);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
var temp__5823__auto__ = (function (){var and__5140__auto__ = cljs.core.map_QMARK_(x);
if(and__5140__auto__){
var G__63512 = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(x);
return (title__GT_ref.cljs$core$IFn$_invoke$arity$1 ? title__GT_ref.cljs$core$IFn$_invoke$arity$1(G__63512) : title__GT_ref.call(null,G__63512));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var ref = temp__5823__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ref,new cljs.core.Keyword("block.temp","original-page-name","block.temp/original-page-name",1371358508),new cljs.core.Keyword("block.temp","original-page-name","block.temp/original-page-name",1371358508).cljs$core$IFn$_invoke$arity$1(x));
} else {
return x;
}
}),refs__$1);
});
frontend.handler.db_based.editor.markdown_heading_level = (function frontend$handler$db_based$editor$markdown_heading_level(content){
var temp__5825__auto__ = (function (){var G__63514 = content;
var G__63514__$1 = (((G__63514 == null))?null:clojure.string.triml(G__63514));
if((G__63514__$1 == null)){
return null;
} else {
return cljs.core.re_find(/^(#{1,6})\s+/,G__63514__$1);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var heading = temp__5825__auto__;
return cljs.core.count(cljs.core.second(heading));
} else {
return null;
}
});
frontend.handler.db_based.editor.normalize_markdown_heading_QMARK_ = (function frontend$handler$db_based$editor$normalize_markdown_heading_QMARK_(block){
return (!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),null,new cljs.core.Keyword(null,"math","math",-2026912803),null], null), null),new cljs.core.Keyword("logseq.property.node","display-type","logseq.property.node/display-type",442446189).cljs$core$IFn$_invoke$arity$1(block))));
});
frontend.handler.db_based.editor.markdown_hashtag_link_target = (function frontend$handler$db_based$editor$markdown_hashtag_link_target(target){
if(((typeof target === 'string') && (clojure.string.starts_with_QMARK_(target,"#")))){
var page_name = (function (){var G__63516 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(target,(1));
return (logseq.graph_parser.text.page_ref_un_brackets_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.graph_parser.text.page_ref_un_brackets_BANG_.cljs$core$IFn$_invoke$arity$1(G__63516) : logseq.graph_parser.text.page_ref_un_brackets_BANG_.call(null,G__63516));
})();
if(clojure.string.blank_QMARK_(page_name)){
return null;
} else {
return page_name;
}
} else {
return null;
}
});
frontend.handler.db_based.editor.tag_page_QMARK_ = (function frontend$handler$db_based$editor$tag_page_QMARK_(page){
return cljs.core.some((function (p1__63517_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.class","Tag","logseq.class/Tag",-538902083),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(p1__63517_SHARP_));
}),new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(page));
});
frontend.handler.db_based.editor.ref_dedupe_key = (function frontend$handler$db_based$editor$ref_dedupe_key(ref){
if(((cljs.core.vector_QMARK_(ref)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.first(ref))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.second(ref)], null);
} else {
if(cljs.core.map_QMARK_(ref)){
var temp__5823__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(ref);
if(cljs.core.truth_(temp__5823__auto__)){
var uuid = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid], null);
} else {
return ref;
}
} else {
return ref;

}
}
});
frontend.handler.db_based.editor.existing_markdown_hashtag_link_refs = (function frontend$handler$db_based$editor$existing_markdown_hashtag_link_refs(ast,cached_refs){
var title__GT_ref = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","title","block/title",710445684),cached_refs),cached_refs);
var G__63521 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552);
var G__63522 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63520_SHARP_){
return cljs.core.select_keys(p1__63520_SHARP_,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("block","tags","block/tags",1814948340)], null));
}),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (form){
if(((cljs.core.vector_QMARK_(form)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Link",cljs.core.first(form))) && (cljs.core.map_QMARK_(cljs.core.second(form))))))){
var vec__63524 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.second(form));
var url_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63524,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63524,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Search",url_type)){
var temp__5825__auto__ = (function (){var G__63535 = target;
var G__63535__$1 = (((G__63535 == null))?null:frontend.handler.db_based.editor.markdown_hashtag_link_target(G__63535));
if((G__63535__$1 == null)){
return null;
} else {
return (title__GT_ref.cljs$core$IFn$_invoke$arity$1 ? title__GT_ref.cljs$core$IFn$_invoke$arity$1(G__63535__$1) : title__GT_ref.call(null,G__63535__$1));
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var page = temp__5825__auto__;
if(cljs.core.truth_(frontend.handler.db_based.editor.tag_page_QMARK_(page))){
return page;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}),cljs.core.tree_seq(cljs.core.coll_QMARK_,cljs.core.seq,ast)));
return (frontend.util.distinct_by_last_wins.cljs$core$IFn$_invoke$arity$2 ? frontend.util.distinct_by_last_wins.cljs$core$IFn$_invoke$arity$2(G__63521,G__63522) : frontend.util.distinct_by_last_wins.call(null,G__63521,G__63522));
});
/**
 * Warn once per [:block/uuid id] ref that doesn't resolve to an entity.
 */
frontend.handler.db_based.editor.warn_missing_uuid_refs_BANG_ = (function frontend$handler$db_based$editor$warn_missing_uuid_refs_BANG_(refs){
var temp__5825__auto__ = cljs.core.seq(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (ref){
if(((cljs.core.vector_QMARK_(ref)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.first(ref))) && (cljs.core.uuid_QMARK_(cljs.core.second(ref))))))){
return cljs.core.second(ref);
} else {
return null;
}
})),refs));
if(temp__5825__auto__){
var uuids = temp__5825__auto__;
var temp__5825__auto____$1 = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto____$1)){
var repo = temp__5825__auto____$1;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_blocks(repo,uuids)),(function (results){
return promesa.protocols._promise((function (){var seq__63543 = cljs.core.seq(results);
var chunk__63544 = null;
var count__63545 = (0);
var i__63546 = (0);
while(true){
if((i__63546 < count__63545)){
var map__63549 = chunk__63544.cljs$core$IIndexed$_nth$arity$2(null,i__63546);
var map__63549__$1 = cljs.core.__destructure_map(map__63549);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63549__$1,new cljs.core.Keyword(null,"block","block",664686210));
if((block == null)){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","ref-not-exist","block/ref-not-exist",446573681)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));
} else {
}


var G__63575 = seq__63543;
var G__63576 = chunk__63544;
var G__63577 = count__63545;
var G__63578 = (i__63546 + (1));
seq__63543 = G__63575;
chunk__63544 = G__63576;
count__63545 = G__63577;
i__63546 = G__63578;
continue;
} else {
var temp__5825__auto____$2 = cljs.core.seq(seq__63543);
if(temp__5825__auto____$2){
var seq__63543__$1 = temp__5825__auto____$2;
if(cljs.core.chunked_seq_QMARK_(seq__63543__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__63543__$1);
var G__63579 = cljs.core.chunk_rest(seq__63543__$1);
var G__63580 = c__5673__auto__;
var G__63581 = cljs.core.count(c__5673__auto__);
var G__63582 = (0);
seq__63543 = G__63579;
chunk__63544 = G__63580;
count__63545 = G__63581;
i__63546 = G__63582;
continue;
} else {
var map__63550 = cljs.core.first(seq__63543__$1);
var map__63550__$1 = cljs.core.__destructure_map(map__63550);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63550__$1,new cljs.core.Keyword(null,"block","block",664686210));
if((block == null)){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","ref-not-exist","block/ref-not-exist",446573681)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));
} else {
}


var G__63583 = cljs.core.next(seq__63543__$1);
var G__63584 = null;
var G__63585 = (0);
var G__63586 = (0);
seq__63543 = G__63583;
chunk__63544 = G__63584;
count__63545 = G__63585;
i__63546 = G__63586;
continue;
}
} else {
return null;
}
}
break;
}
})());
}));
}));
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.db_based.editor.wrap_parse_block = (function frontend$handler$db_based$editor$wrap_parse_block(p__63551){
var map__63552 = p__63551;
var map__63552__$1 = cljs.core.__destructure_map(map__63552);
var block = map__63552__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63552__$1,new cljs.core.Keyword("block","title","block/title",710445684));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63552__$1,new cljs.core.Keyword("block","level","block/level",1182509971));
var block__$1 = (((title == null))?block:(function (){var heading_level = ((frontend.handler.db_based.editor.normalize_markdown_heading_QMARK_(block))?frontend.handler.db_based.editor.markdown_heading_level(title):null);
var title__$1 = (cljs.core.truth_(heading_level)?(function (){var G__63553 = clojure.string.triml(title);
return (frontend.commands.clear_markdown_heading.cljs$core$IFn$_invoke$arity$1 ? frontend.commands.clear_markdown_heading.cljs$core$IFn$_invoke$arity$1(G__63553) : frontend.commands.clear_markdown_heading.call(null,G__63553));
})():title);
var ast = frontend.format.mldoc.__GT_edn(clojure.string.trim(title__$1),new cljs.core.Keyword(null,"markdown","markdown",1227225089));
var first_elem_type = cljs.core.first(cljs.core.ffirst(ast));
var block_with_title_QMARK_ = (frontend.format.mldoc.block_with_title_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.format.mldoc.block_with_title_QMARK_.cljs$core$IFn$_invoke$arity$1(first_elem_type) : frontend.format.mldoc.block_with_title_QMARK_.call(null,first_elem_type));
var content_SINGLEQUOTE_ = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.config.block_pattern)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(block_with_title_QMARK_)?" ":"\n"))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(title__$1));
var cached_refs = frontend.handler.db_based.editor.collect_known_refs(block);
var hashtag_link_refs = frontend.handler.db_based.editor.existing_markdown_hashtag_link_refs(ast,cached_refs);
var parsed_block = frontend.format.block.parse_block(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","title","block/title",710445684),content_SINGLEQUOTE_));
var new_display_block_QMARK_ = (((new cljs.core.Keyword("logseq.property.node","display-type","logseq.property.node/display-type",442446189).cljs$core$IFn$_invoke$arity$1(block) == null)) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),null,new cljs.core.Keyword(null,"math","math",-2026912803),null], null), null),new cljs.core.Keyword("logseq.property.node","display-type","logseq.property.node/display-type",442446189).cljs$core$IFn$_invoke$arity$1(parsed_block))));
var block_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block,parsed_block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","title","block/title",710445684),((new_display_block_QMARK_)?new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(parsed_block):title__$1)], null),(cljs.core.truth_(heading_level)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.property","heading","logseq.property/heading",1858749415),heading_level], null):null)], 0)),new cljs.core.Keyword("block","format","block/format",-1212045901));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(block_SINGLEQUOTE_,new cljs.core.Keyword("block","refs","block/refs",-1214495349),(function (refs){
var G__63554 = frontend.handler.db_based.editor.ref_dedupe_key;
var G__63555 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(frontend.handler.db_based.editor.use_cached_refs(frontend.handler.db_based.editor.remove_empty_refs(refs),block,cached_refs),hashtag_link_refs));
return (frontend.util.distinct_by_last_wins.cljs$core$IFn$_invoke$arity$2 ? frontend.util.distinct_by_last_wins.cljs$core$IFn$_invoke$arity$2(G__63554,G__63555) : frontend.util.distinct_by_last_wins.call(null,G__63554,G__63555));
}));
})());
var _ = frontend.handler.db_based.editor.warn_missing_uuid_refs_BANG_(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(block__$1));
var title_SINGLEQUOTE_ = logseq.db.frontend.content.title_ref__GT_id_ref((function (){var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(block__$1,new cljs.core.Keyword("block","title","block/title",710445684));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return title;
}
})(),new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(block__$1));
var result = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block__$1,(cljs.core.truth_(level)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","level","block/level",1182509971),level], null):cljs.core.PersistentArrayMap.EMPTY)], 0)),new cljs.core.Keyword("block","title","block/title",710445684),title_SINGLEQUOTE_);
return result;
});
/**
 * This fn is the db version of file-handler/alter-file
 */
frontend.handler.db_based.editor.save_file_BANG_ = (function frontend$handler$db_based$editor$save_file_BANG_(path,content){
var file_valid_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,"logseq/config.edn"))?(function (){
frontend.handler.common.config_edn.detect_deprecations(path,content);

return frontend.handler.common.config_edn.validate_config_edn(path,content,frontend.schema.handler.repo_config.Config_edn);
})()
:true);
if(file_valid_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.get_current_repo()),(function (repo){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","path","file/path",-191335748),path], null)], 0))),(function (file_entity){
return promesa.protocols._promise(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","transact","thread-api/transact",917721609),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__63556 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("file","path","file/path",-191335748),path,new cljs.core.Keyword("file","content","file/content",12680964),content,new cljs.core.Keyword("file","created-at","file/created-at",-92397056),(new Date()),new cljs.core.Keyword("file","last-modified-at","file/last-modified-at",473527310),(new Date())], null);
if((file_entity == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63556,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),logseq.common.uuid.gen_uuid.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"builtin-block-uuid","builtin-block-uuid",-652923992),path));
} else {
return G__63556;
}
})()], null),null,null], 0))),(function (___27434__auto__){
return promesa.protocols._promise(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,"logseq/config.edn"))?promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.repo_config.restore_repo_config_BANG_.cljs$core$IFn$_invoke$arity$2(repo,content)),(function (_){
return promesa.protocols._promise(frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shortcut","refresh","shortcut/refresh",-1755508577)], null)));
}));
})):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,"logseq/custom.css"))?frontend.handler.ui.add_style_if_exists_BANG_():null)));
}));
})));
}));
}));
}));
} else {
return null;
}
});
frontend.handler.db_based.editor.batch_set_heading_BANG_ = (function frontend$handler$db_based$editor$batch_set_heading_BANG_(block_ids,heading){
var repo = frontend.state.get_current_repo();
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_blocks(repo,block_ids)),(function (results){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block","block",664686210),results)),(function (blocks){
return promesa.protocols._promise((function (){var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
var seq__63557_63592 = cljs.core.seq(blocks);
var chunk__63558_63593 = null;
var count__63559_63594 = (0);
var i__63560_63595 = (0);
while(true){
if((i__63560_63595 < count__63559_63594)){
var map__63563_63596 = chunk__63558_63593.cljs$core$IIndexed$_nth$arity$2(null,i__63560_63595);
var map__63563_63597__$1 = cljs.core.__destructure_map(map__63563_63596);
var uuid_63598 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63563_63597__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var raw_title_63599 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63563_63597__$1,new cljs.core.Keyword("block","raw-title","block/raw-title",1833669090));
var new_raw_title_63600 = (frontend.commands.clear_markdown_heading.cljs$core$IFn$_invoke$arity$1 ? frontend.commands.clear_markdown_heading.cljs$core$IFn$_invoke$arity$1(raw_title_63599) : frontend.commands.clear_markdown_heading.call(null,raw_title_63599));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_raw_title_63600,raw_title_63599)){
frontend.handler.property.set_block_property_BANG_(uuid_63598,new cljs.core.Keyword("block","title","block/title",710445684),new_raw_title_63600);
} else {
}


var G__63601 = seq__63557_63592;
var G__63602 = chunk__63558_63593;
var G__63603 = count__63559_63594;
var G__63604 = (i__63560_63595 + (1));
seq__63557_63592 = G__63601;
chunk__63558_63593 = G__63602;
count__63559_63594 = G__63603;
i__63560_63595 = G__63604;
continue;
} else {
var temp__5825__auto___63605 = cljs.core.seq(seq__63557_63592);
if(temp__5825__auto___63605){
var seq__63557_63606__$1 = temp__5825__auto___63605;
if(cljs.core.chunked_seq_QMARK_(seq__63557_63606__$1)){
var c__5673__auto___63607 = cljs.core.chunk_first(seq__63557_63606__$1);
var G__63608 = cljs.core.chunk_rest(seq__63557_63606__$1);
var G__63609 = c__5673__auto___63607;
var G__63610 = cljs.core.count(c__5673__auto___63607);
var G__63611 = (0);
seq__63557_63592 = G__63608;
chunk__63558_63593 = G__63609;
count__63559_63594 = G__63610;
i__63560_63595 = G__63611;
continue;
} else {
var map__63564_63612 = cljs.core.first(seq__63557_63606__$1);
var map__63564_63613__$1 = cljs.core.__destructure_map(map__63564_63612);
var uuid_63614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63564_63613__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var raw_title_63615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63564_63613__$1,new cljs.core.Keyword("block","raw-title","block/raw-title",1833669090));
var new_raw_title_63616 = (frontend.commands.clear_markdown_heading.cljs$core$IFn$_invoke$arity$1 ? frontend.commands.clear_markdown_heading.cljs$core$IFn$_invoke$arity$1(raw_title_63615) : frontend.commands.clear_markdown_heading.call(null,raw_title_63615));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_raw_title_63616,raw_title_63615)){
frontend.handler.property.set_block_property_BANG_(uuid_63614,new cljs.core.Keyword("block","title","block/title",710445684),new_raw_title_63616);
} else {
}


var G__63617 = cljs.core.next(seq__63557_63606__$1);
var G__63618 = null;
var G__63619 = (0);
var G__63620 = (0);
seq__63557_63592 = G__63617;
chunk__63558_63593 = G__63618;
count__63559_63594 = G__63619;
i__63560_63595 = G__63620;
continue;
}
} else {
}
}
break;
}

return frontend.handler.property.batch_set_block_property_BANG_(block_ids,new cljs.core.Keyword("logseq.property","heading","logseq.property/heading",1858749415),heading);
} else {
var _STAR_outliner_ops_STAR__orig_val__63565 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__63566 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__63566);

try{var seq__63567_63621 = cljs.core.seq(blocks);
var chunk__63568_63622 = null;
var count__63569_63623 = (0);
var i__63570_63624 = (0);
while(true){
if((i__63570_63624 < count__63569_63623)){
var map__63573_63625 = chunk__63568_63622.cljs$core$IIndexed$_nth$arity$2(null,i__63570_63624);
var map__63573_63626__$1 = cljs.core.__destructure_map(map__63573_63625);
var uuid_63627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63573_63626__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var raw_title_63628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63573_63626__$1,new cljs.core.Keyword("block","raw-title","block/raw-title",1833669090));
var new_raw_title_63629 = (frontend.commands.clear_markdown_heading.cljs$core$IFn$_invoke$arity$1 ? frontend.commands.clear_markdown_heading.cljs$core$IFn$_invoke$arity$1(raw_title_63628) : frontend.commands.clear_markdown_heading.call(null,raw_title_63628));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_raw_title_63629,raw_title_63628)){
frontend.handler.property.set_block_property_BANG_(uuid_63627,new cljs.core.Keyword("block","title","block/title",710445684),new_raw_title_63629);
} else {
}


var G__63630 = seq__63567_63621;
var G__63631 = chunk__63568_63622;
var G__63632 = count__63569_63623;
var G__63633 = (i__63570_63624 + (1));
seq__63567_63621 = G__63630;
chunk__63568_63622 = G__63631;
count__63569_63623 = G__63632;
i__63570_63624 = G__63633;
continue;
} else {
var temp__5825__auto___63634 = cljs.core.seq(seq__63567_63621);
if(temp__5825__auto___63634){
var seq__63567_63635__$1 = temp__5825__auto___63634;
if(cljs.core.chunked_seq_QMARK_(seq__63567_63635__$1)){
var c__5673__auto___63636 = cljs.core.chunk_first(seq__63567_63635__$1);
var G__63637 = cljs.core.chunk_rest(seq__63567_63635__$1);
var G__63638 = c__5673__auto___63636;
var G__63639 = cljs.core.count(c__5673__auto___63636);
var G__63640 = (0);
seq__63567_63621 = G__63637;
chunk__63568_63622 = G__63638;
count__63569_63623 = G__63639;
i__63570_63624 = G__63640;
continue;
} else {
var map__63574_63641 = cljs.core.first(seq__63567_63635__$1);
var map__63574_63642__$1 = cljs.core.__destructure_map(map__63574_63641);
var uuid_63643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63574_63642__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var raw_title_63644 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63574_63642__$1,new cljs.core.Keyword("block","raw-title","block/raw-title",1833669090));
var new_raw_title_63645 = (frontend.commands.clear_markdown_heading.cljs$core$IFn$_invoke$arity$1 ? frontend.commands.clear_markdown_heading.cljs$core$IFn$_invoke$arity$1(raw_title_63644) : frontend.commands.clear_markdown_heading.call(null,raw_title_63644));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_raw_title_63645,raw_title_63644)){
frontend.handler.property.set_block_property_BANG_(uuid_63643,new cljs.core.Keyword("block","title","block/title",710445684),new_raw_title_63645);
} else {
}


var G__63646 = cljs.core.next(seq__63567_63635__$1);
var G__63647 = null;
var G__63648 = (0);
var G__63649 = (0);
seq__63567_63621 = G__63646;
chunk__63568_63622 = G__63647;
count__63569_63623 = G__63648;
i__63570_63624 = G__63649;
continue;
}
} else {
}
}
break;
}

frontend.handler.property.batch_set_block_property_BANG_(block_ids,new cljs.core.Keyword("logseq.property","heading","logseq.property/heading",1858749415),heading);

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__63565);
}}
})());
}));
}));
}));
});

//# sourceMappingURL=frontend.handler.db_based.editor.js.map
