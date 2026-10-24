goog.provide('frontend.handler.paste');
goog.scope(function(){
  frontend.handler.paste.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.handler.paste._LT_ref_with_id = (function frontend$handler$paste$_LT_ref_with_id(repo,date_formatter,ref){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.map_QMARK_(ref);
if(and__5140__auto__){
var and__5140__auto____$1 = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(ref);
if(cljs.core.truth_(and__5140__auto____$1)){
return (new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(ref) == null);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("block","name","block/name",1619760316)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),logseq.common.util.page_name_sanity_lc(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(ref))], null)], 0))),(function (page){
return promesa.protocols._promise((function (){var or__5142__auto__ = page;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.graph_parser.block.page_name__GT_map(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(ref),null,true,date_formatter);
}
})());
}));
}));
} else {
return ref;
}
});
frontend.handler.paste._LT_with_ref_ids = (function frontend$handler$paste$_LT_with_ref_ids(repo,date_formatter,refs){
return promesa.core.all(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__67533_SHARP_){
return frontend.handler.paste._LT_ref_with_id(repo,date_formatter,p1__67533_SHARP_);
}),refs));
});
frontend.handler.paste.paste_text_parseable = (function frontend$handler$paste$paste_text_parseable(format,text){
var temp__5825__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5825__auto__)){
var editing_block = temp__5825__auto__;
var repo = frontend.state.get_current_repo();
var date_formatter = frontend.state.get_date_formatter();
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block_page_info(repo,(function (){var or__5142__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(editing_block);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(editing_block);
}
})())),(function (page_info){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.format.block.extract_blocks(frontend.format.mldoc.__GT_edn(text,format),text,format,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page-name","page-name",974981762),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page_info)], null))),(function (blocks){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.block.with_parent_and_order(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page_info),blocks)),(function (blocks__$1){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.all(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (block){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__67535 = new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(block);
if((G__67535 == null)){
return null;
} else {
return frontend.handler.paste._LT_with_ref_ids(repo,date_formatter,G__67535);
}
})()),(function (refs){
return promesa.protocols._promise(cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var G__67536 = (function (){var G__67537 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword("block","tags","block/tags",1814948340));
if(cljs.core.truth_(refs)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67537,new cljs.core.Keyword("block","refs","block/refs",-1214495349),refs);
} else {
return G__67537;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword("logseq.property","heading","logseq.property/heading",1858749415).cljs$core$IFn$_invoke$arity$1(block))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__67536,new cljs.core.Keyword("block","title","block/title",710445684),frontend.commands.clear_markdown_heading);
} else {
return G__67536;
}
})(),new cljs.core.Keyword("block","title","block/title",710445684),(function (title){
var title_SINGLEQUOTE_ = logseq.db.frontend.content.replace_tags_with_id_refs(title,refs);
return logseq.db.frontend.content.title_ref__GT_id_ref(title_SINGLEQUOTE_,refs);
})));
}));
}));
}),blocks__$1))),(function (blocks_SINGLEQUOTE_){
return promesa.protocols._promise(frontend.handler.editor.paste_blocks(blocks_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),true,new cljs.core.Keyword(null,"outliner-real-op","outliner-real-op",1093934358),new cljs.core.Keyword(null,"paste-text","paste-text",103138595)], null)));
}));
}));
}));
}));
}));
} else {
return null;
}
});
frontend.handler.paste.paste_segmented_text = (function frontend$handler$paste$paste_segmented_text(format,text){
var paragraphs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(text,/(?:\r?\n){2,}/);
var updated_paragraphs = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p){
return (function (p__$1){
if(cljs.core.truth_((function (){var G__67538 = /\s*-\s+/;
var G__67539 = p__$1;
return (frontend.util.safe_re_find.cljs$core$IFn$_invoke$arity$2 ? frontend.util.safe_re_find.cljs$core$IFn$_invoke$arity$2(G__67538,G__67539) : frontend.util.safe_re_find.call(null,G__67538,G__67539));
})())){
return p__$1;
} else {
return (""+"- "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1));
}
})(clojure.string.trim(p));
}),paragraphs));
return frontend.handler.paste.paste_text_parseable(format,updated_paragraphs);
});
frontend.handler.paste.wrap_macro_url = (function frontend$handler$paste$wrap_macro_url(url){
if(cljs.core.boolean$(frontend.extensions.video.get_matched_video(url))){
return (frontend.util.format.cljs$core$IFn$_invoke$arity$2 ? frontend.util.format.cljs$core$IFn$_invoke$arity$2("{{video %s}}",url) : frontend.util.format.call(null,"{{video %s}}",url));
} else {
if(cljs.core.truth_((function (){var or__5142__auto__ = cljs.core.re_matches(/^https:\/\/twitter\.com.*?$/,url);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.re_matches(/^https:\/\/x\.com.*?$/,url);
}
})())){
return (frontend.util.format.cljs$core$IFn$_invoke$arity$2 ? frontend.util.format.cljs$core$IFn$_invoke$arity$2("{{twitter %s}}",url) : frontend.util.format.call(null,"{{twitter %s}}",url));
} else {
return null;
}
}
});
frontend.handler.paste.selection_within_link_QMARK_ = (function frontend$handler$paste$selection_within_link_QMARK_(selection_and_format){
var map__67540 = selection_and_format;
var map__67540__$1 = cljs.core.__destructure_map(map__67540);
var selection_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67540__$1,new cljs.core.Keyword(null,"selection-start","selection-start",-888859581));
var selection_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67540__$1,new cljs.core.Keyword(null,"selection-end","selection-end",696987835));
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67540__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67540__$1,new cljs.core.Keyword(null,"value","value",305978217));
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selection_start,selection_end)) && ((!((cljs.core.some((function (p__67541){
var vec__67542 = p__67541;
var start_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67542,(0),null);
var matched_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67542,(1),null);
return (((start_index <= selection_start)) && (((((start_index + cljs.core.count(matched_text)) >= selection_end)) && (clojure.string.includes_QMARK_(matched_text,selection)))));
}),frontend.util.re_pos(/\[.*?\]\(.*?\)/,value)) == null)))));
});
frontend.handler.paste.get_copied_blocks = (function frontend$handler$paste$get_copied_blocks(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not(frontend.mobile.util.native_android_QMARK_());
if(and__5140__auto__){
var and__5140__auto____$1 = window;
if(cljs.core.truth_(and__5140__auto____$1)){
var and__5140__auto____$2 = frontend.handler.paste.goog$module$goog$object.get(window,"navigator");
if(cljs.core.truth_(and__5140__auto____$2)){
return navigator.clipboard;
} else {
return and__5140__auto____$2;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?navigator.clipboard.read():null)),(function (clipboard_items){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(clipboard_items)?(function (){var types = cljs.core.first(clipboard_items).types;
if(cljs.core.contains_QMARK_(cljs.core.set(types),"web application/logseq")){
return cljs.core.first(clipboard_items).getType("web application/logseq");
} else {
return null;
}
})():null)),(function (blocks_blob){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = blocks_blob;
if(cljs.core.truth_(and__5140__auto__)){
return (blocks_blob.size > (0));
} else {
return and__5140__auto__;
}
})())?blocks_blob.text():null)),(function (blocks_str){
return promesa.protocols._promise((cljs.core.truth_(blocks_str)?logseq.common.util.safe_read_map_string.cljs$core$IFn$_invoke$arity$1(blocks_str):null));
}));
}));
}));
}));
});
frontend.handler.paste.get_copied_blocks_from_memory = (function frontend$handler$paste$get_copied_blocks_from_memory(text){
var temp__5825__auto__ = module$frontend$utils.getCopiedBlocksFromMemory(text);
if(cljs.core.truth_(temp__5825__auto__)){
var blocks_str = temp__5825__auto__;
var copied_blocks = (function (){var and__5140__auto__ = typeof blocks_str === 'string';
if(and__5140__auto__){
var and__5140__auto____$1 = (!(clojure.string.blank_QMARK_(blocks_str)));
if(and__5140__auto____$1){
var and__5140__auto____$2 = clojure.string.starts_with_QMARK_(clojure.string.triml(blocks_str),"{");
if(and__5140__auto____$2){
return logseq.common.util.safe_read_map_string.cljs$core$IFn$_invoke$arity$1(blocks_str);
} else {
return and__5140__auto____$2;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.seq(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(copied_blocks))){
return copied_blocks;
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.paste.markdown_blocks_QMARK_ = (function frontend$handler$paste$markdown_blocks_QMARK_(text){
return cljs.core.boolean$((function (){var or__5142__auto__ = (function (){var G__67545 = /^\s*(?:[-+*]|#+)\s+/m;
var G__67546 = text;
return (frontend.util.safe_re_find.cljs$core$IFn$_invoke$arity$2 ? frontend.util.safe_re_find.cljs$core$IFn$_invoke$arity$2(G__67545,G__67546) : frontend.util.safe_re_find.call(null,G__67545,G__67546));
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (function (){var G__67547 = /^\s*```[^\r\n]*\r?$/m;
var G__67548 = text;
return (frontend.util.safe_re_find.cljs$core$IFn$_invoke$arity$2 ? frontend.util.safe_re_find.cljs$core$IFn$_invoke$arity$2(G__67547,G__67548) : frontend.util.safe_re_find.call(null,G__67547,G__67548));
})();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var G__67549 = /^\s*\$\$\s*\r?$/m;
var G__67550 = text;
return (frontend.util.safe_re_find.cljs$core$IFn$_invoke$arity$2 ? frontend.util.safe_re_find.cljs$core$IFn$_invoke$arity$2(G__67549,G__67550) : frontend.util.safe_re_find.call(null,G__67549,G__67550));
}
}
})());
});
/**
 * Get reverted previous cut tx when paste
 */
frontend.handler.paste.get_revert_cut_txs = (function frontend$handler$paste$get_revert_cut_txs(blocks){
var map__67551 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","last-replace-ref-content-tx","editor/last-replace-ref-content-tx",831177325),frontend.state.get_current_repo()], null));
var map__67551__$1 = cljs.core.__destructure_map(map__67551);
var retracted_block_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67551__$1,new cljs.core.Keyword(null,"retracted-block-ids","retracted-block-ids",-491940807));
var revert_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67551__$1,new cljs.core.Keyword(null,"revert-tx","revert-tx",1745816539));
var recent_cut_block_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,retracted_block_ids));
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","last-replace-ref-content-tx","editor/last-replace-ref-content-tx",831177325),frontend.state.get_current_repo()], null),null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),blocks)),recent_cut_block_ids)){
return cljs.core.seq(revert_tx);
} else {
return null;
}
});
frontend.handler.paste.paste_copied_text = (function frontend$handler$paste$paste_copied_text(input,_STAR_text,html){
var replace_text_f = (function (text){
var input_id = frontend.state.get_edit_input_id();
frontend.commands.delete_selection_BANG_(input_id);

return frontend.commands.simple_insert_BANG_(input_id,text,null);
});
var text = clojure.string.replace(_STAR_text,"\r\n","\n");
var input_id = frontend.state.get_edit_input_id();
var map__67552 = frontend.handler.editor.format.get_selection_and_format();
var map__67552__$1 = cljs.core.__destructure_map(map__67552);
var selection_and_format = map__67552__$1;
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67552__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var text_url_QMARK_ = logseq.common.util.url_QMARK_(text);
var selection_url_QMARK_ = logseq.common.util.url_QMARK_(selection);
if(((((((text_url_QMARK_) || (selection_url_QMARK_))) && (frontend.handler.paste.selection_within_link_QMARK_(selection_and_format)))) || (((text_url_QMARK_) && (selection_url_QMARK_))))){
return replace_text_f(text);
} else {
if(((((text_url_QMARK_) || (selection_url_QMARK_))) && ((!(clojure.string.blank_QMARK_(frontend.util.get_selected_text())))))){
return frontend.handler.editor.format.html_link_format_BANG_.cljs$core$IFn$_invoke$arity$1(text);
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = logseq.common.util.block_ref.block_ref_QMARK_(text);
if(and__5140__auto__){
return frontend.handler.editor.autopair.wrapped_by_QMARK_(input,logseq.common.util.block_ref.left_parens,logseq.common.util.block_ref.right_parens);
} else {
return and__5140__auto__;
}
})())){
return frontend.commands.simple_insert_BANG_(input_id,logseq.common.util.block_ref.get_block_ref_id(text),null);
} else {
var format = new cljs.core.Keyword(null,"markdown","markdown",1227225089);
var html_text = (function (){var result = ((clojure.string.blank_QMARK_(html))?null:(function (){try{return frontend.extensions.html_parser.convert(html);
}catch (e67553){var e = e67553;
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.paste",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exception","exception",-335277064),e,new cljs.core.Keyword(null,"line","line",212345235),185], null)),e);
} else {
}

return null;
}})());
if(clojure.string.blank_QMARK_(result)){
return null;
} else {
return result;
}
})();
var text_SINGLEQUOTE_ = (function (){var or__5142__auto__ = html_text;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = ((logseq.common.util.url_QMARK_(text))?frontend.handler.paste.wrap_macro_url(text):null);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return text;
}
}
})();
var blocks_QMARK_ = frontend.handler.paste.markdown_blocks_QMARK_(text_SINGLEQUOTE_);
if(blocks_QMARK_){
return frontend.handler.paste.paste_text_parseable(format,text_SINGLEQUOTE_);
} else {
if(cljs.core.truth_((function (){var G__67554 = /(?:\r?\n){2,}/;
var G__67555 = text_SINGLEQUOTE_;
return (frontend.util.safe_re_find.cljs$core$IFn$_invoke$arity$2 ? frontend.util.safe_re_find.cljs$core$IFn$_invoke$arity$2(G__67554,G__67555) : frontend.util.safe_re_find.call(null,G__67554,G__67555));
})())){
return frontend.handler.paste.paste_segmented_text(format,text_SINGLEQUOTE_);
} else {
return replace_text_f(text_SINGLEQUOTE_);

}
}

}
}
}
});
frontend.handler.paste._LT_block_with_db_id = (function frontend$handler$paste$_LT_block_with_db_id(repo,block){
if(cljs.core.truth_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))){
return promesa.core.resolved(block);
} else {
return frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0));
}
});
frontend.handler.paste.paste_copied_blocks_or_text = (function frontend$handler$paste$paste_copied_blocks_or_text(input,text,e,html){
frontend.util.stop(e);

var repo = frontend.state.get_current_repo();
var copied_blocks_from_memory = frontend.handler.paste.get_copied_blocks_from_memory(text);
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = copied_blocks_from_memory;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.handler.paste.get_copied_blocks();
}
})()),(function (p__67557){
var map__67558 = p__67557;
var map__67558__$1 = cljs.core.__destructure_map(map__67558);
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67558__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67558__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var embed_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67558__$1,new cljs.core.Keyword(null,"embed-block?","embed-block?",402074593));
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67558__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
return promesa.protocols._promise(((((cljs.core.seq(blocks)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(graph,repo))))?(function (){var revert_cut_txs = frontend.handler.paste.get_revert_cut_txs(blocks);
var keep_uuid_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cut","cut",-1042666209),(function (){var or__5142__auto__ = op;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.state.get_block_op_type();
}
})());
var blocks__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.Keyword("block","properties","block/properties",708347145));
}),blocks);
if(cljs.core.truth_(embed_block_QMARK_)){
var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks__$1));
if(cljs.core.truth_(temp__5825__auto__)){
var block_id = temp__5825__auto__;
var temp__5825__auto____$1 = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5825__auto____$1)){
var current_block = temp__5825__auto____$1;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.paste._LT_block_with_db_id(repo,current_block)),(function (current_block_SINGLEQUOTE_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block_parents(repo,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(current_block_SINGLEQUOTE_),(100))),(function (parents){
return promesa.protocols._promise((cljs.core.truth_(cljs.core.some((function (p1__67556_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(block_id,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(p1__67556_SHARP_));
}),parents))?frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","cannot-embed-parent-as-own-property","asset/cannot-embed-parent-as-own-property",1198503632)], 0)),new cljs.core.Keyword(null,"error","error",-978969032)):promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,block_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (linked_block){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.api_insert_new_block_BANG_("",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block),new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),true,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"paste","paste",1975741548),new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),true,new cljs.core.Keyword(null,"other-attrs","other-attrs",-951608726),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","link","block/link",-1872399993),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(linked_block)], null)], null))),(function (_){
return promesa.protocols._promise(frontend.state.clear_edit_BANG_());
}));
}));
}))
));
}));
}));
}));
} else {
return null;
}
} else {
return null;
}
} else {
return frontend.handler.editor.paste_blocks(blocks__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"revert-cut-txs","revert-cut-txs",1919904845),revert_cut_txs,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),keep_uuid_QMARK_], null));
}
})():frontend.handler.paste.paste_copied_text(input,text,html)));
}));
})),(function (error){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.paste",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"Paste failed",new cljs.core.Keyword(null,"exception","exception",-335277064),error,new cljs.core.Keyword(null,"line","line",212345235),244], null)),error);
} else {
}

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capture-error","capture-error",583122432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),error,new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("frontend.handler.paste","paste-copied-blocks-or-text","frontend.handler.paste/paste-copied-blocks-or-text",963557176)], null)], null)], null));
}));
});
frontend.handler.paste.paste_text_in_one_block_at_point = (function frontend$handler$paste$paste_text_in_one_block_at_point(){
return module$frontend$utils.getClipText((function (clipboard_data){
var temp__5825__auto__ = frontend.state.get_input();
if(cljs.core.truth_(temp__5825__auto__)){
var _ = temp__5825__auto__;
if(logseq.common.util.url_QMARK_(clipboard_data)){
if(clojure.string.blank_QMARK_(frontend.util.get_selected_text())){
return frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$2((function (){var or__5142__auto__ = frontend.handler.paste.wrap_macro_url(clipboard_data);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return clipboard_data;
}
})(),true);
} else {
return frontend.handler.editor.format.html_link_format_BANG_.cljs$core$IFn$_invoke$arity$1(clipboard_data);
}
} else {
return frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$2(clipboard_data,true);
}
} else {
return null;
}
}),(function (error){
return console.error(error);
}));
});
frontend.handler.paste.editing_display_type_block_QMARK_ = (function frontend$handler$paste$editing_display_type_block_QMARK_(){
return cljs.core.boolean$(new cljs.core.Keyword("logseq.property.node","display-type","logseq.property.node/display-type",442446189).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block()));
});
frontend.handler.paste.paste_text_or_blocks_aux = (function frontend$handler$paste$paste_text_or_blocks_aux(input,e,text,html){
if(cljs.core.truth_((function (){var or__5142__auto__ = frontend.handler.paste.editing_display_type_block_QMARK_();
if(or__5142__auto__){
return or__5142__auto__;
} else {
return frontend.util.thingatpt.markdown_src_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
}
})())){
if(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())){
return null;
} else {
frontend.util.stop(e);

return frontend.handler.paste.paste_text_in_one_block_at_point();
}
} else {
return frontend.handler.paste.paste_copied_blocks_or_text(input,text,e,html);
}
});
frontend.handler.paste.paste_file_if_exists = (function frontend$handler$paste$paste_file_if_exists(id,e){
if(cljs.core.truth_(id)){
var clipboard_data = frontend.handler.paste.goog$module$goog$object.get(e,"clipboardData");
var files = clipboard_data.files;
promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.assets.upload_asset_BANG_(id,files,cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.state.get_edit_block(),new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword(null,"markdown","markdown",1227225089)),frontend.handler.editor._STAR_asset_uploading_QMARK_,true)),(function (blocks){
return promesa.protocols._promise((function (){var temp__5825__auto__ = cljs.core.first(blocks);
if(cljs.core.truth_(temp__5825__auto__)){
var asset = temp__5825__auto__;
var G__67559 = asset;
var G__67560 = new cljs.core.Keyword(null,"max","max",61366548);
var G__67561 = cljs.core.PersistentArrayMap.EMPTY;
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__67559,G__67560,G__67561) : frontend.handler.editor.edit_block_BANG_.call(null,G__67559,G__67560,G__67561));
} else {
return null;
}
})());
}));
}));

return frontend.util.stop(e);
} else {
return null;
}
});
/**
 * Pastes with formatting and includes the following features:
 * - handles internal pastes to correctly paste at the block level
 * - formatted paste includes HTML if detected
 * - special handling for newline and new blocks
 * - pastes file if it exists
 * - wraps certain urls with macros
 * - wraps selected urls with link formatting
 * - paste replaces selected text
 */
frontend.handler.paste.editor_on_paste_BANG_ = (function frontend$handler$paste$editor_on_paste_BANG_(id){
return (function (e){
frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","on-paste?","editor/on-paste?",1852983579),true);

var clipboard_data = frontend.handler.paste.goog$module$goog$object.get(e,"clipboardData");
var html = clipboard_data.getData("text/html");
var text = clipboard_data.getData("text");
var has_files_QMARK_ = cljs.core.seq(clipboard_data.files);
if(has_files_QMARK_){
return frontend.handler.paste.paste_file_if_exists(id,e);
} else {
return frontend.handler.paste.paste_text_or_blocks_aux(frontend.state.get_input(),e,text,html);
}
});
});
/**
 * Raw pastes without _any_ formatting. Can also replace selected text with a paste
 */
frontend.handler.paste.editor_on_paste_raw_BANG_ = (function frontend$handler$paste$editor_on_paste_raw_BANG_(){
frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","on-paste?","editor/on-paste?",1852983579),true);

return module$frontend$utils.getClipText((function (clipboard_data){
if(cljs.core.truth_(frontend.state.get_input())){
frontend.commands.delete_selection_BANG_(frontend.state.get_edit_input_id());

return frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$2(clipboard_data,true);
} else {
return null;
}
}),(function (error){
return console.error(error);
}));
});

//# sourceMappingURL=frontend.handler.paste.js.map
