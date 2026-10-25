goog.provide('logseq.graph_parser.exporter');
goog.scope(function(){
  logseq.graph_parser.exporter.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$path$path=shadow.js.require("module$node_modules$path$path", {});
var module$node_modules$sanitize_filename$index=shadow.js.require("module$node_modules$sanitize_filename$index", {});
/**
 * Add updated-at or created-at timestamps if they doesn't exist.
 * File-backed pages always use the file's birthtime/mtime when those exist,
 * including when the page was first mentioned from a journal.
 * Journal pages and their blocks keep the journal day, not filesystem times.
 * Reference-only pages created from a journal keep the journal date, even when
 * extract already stamped them with import time.
 */
logseq.graph_parser.exporter.add_missing_timestamps = (function logseq$graph_parser$exporter$add_missing_timestamps(var_args){
var G__83297 = arguments.length;
switch (G__83297) {
case 1:
return logseq.graph_parser.exporter.add_missing_timestamps.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return logseq.graph_parser.exporter.add_missing_timestamps.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.graph_parser.exporter.add_missing_timestamps.cljs$core$IFn$_invoke$arity$1 = (function (block){
return logseq.graph_parser.exporter.add_missing_timestamps.cljs$core$IFn$_invoke$arity$2(block,null);
}));

(logseq.graph_parser.exporter.add_missing_timestamps.cljs$core$IFn$_invoke$arity$2 = (function (block,p__83298){
var map__83299 = p__83298;
var map__83299__$1 = cljs.core.__destructure_map(map__83299);
var file_created_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83299__$1,new cljs.core.Keyword(null,"file-created-at","file-created-at",1855423146));
var file_updated_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83299__$1,new cljs.core.Keyword(null,"file-updated-at","file-updated-at",1716406379));
var current_journal_created_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83299__$1,new cljs.core.Keyword(null,"current-journal-created-at","current-journal-created-at",563907882));
var file_page_QMARK_ = new cljs.core.Keyword("logseq.graph-parser.exporter","file-page?","logseq.graph-parser.exporter/file-page?",-397151291).cljs$core$IFn$_invoke$arity$1(block);
var file_times_QMARK_ = (function (){var and__5140__auto__ = file_page_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = cljs.core.not(new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(block));
if(and__5140__auto____$1){
var or__5142__auto__ = file_created_at;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return file_updated_at;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
var journal_ref_page_QMARK_ = (function (){var and__5140__auto__ = current_journal_created_at;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(and__5140__auto____$1)){
return ((cljs.core.not(new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(block))) && (cljs.core.not(file_page_QMARK_)));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
var updated_at = (cljs.core.truth_(file_times_QMARK_)?(function (){var or__5142__auto__ = file_updated_at;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return file_created_at;
}
})():(cljs.core.truth_(journal_ref_page_QMARK_)?current_journal_created_at:(cljs.core.truth_(file_updated_at)?file_updated_at:logseq.common.util.time_ms()
)));
var created_at = (cljs.core.truth_(file_times_QMARK_)?(function (){var or__5142__auto__ = file_created_at;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return file_updated_at;
}
})():(cljs.core.truth_(journal_ref_page_QMARK_)?current_journal_created_at:(cljs.core.truth_(file_created_at)?file_created_at:updated_at
)));
var G__83302 = block;
var G__83302__$1 = (cljs.core.truth_((function (){var or__5142__auto__ = file_times_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = journal_ref_page_QMARK_;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return (new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551).cljs$core$IFn$_invoke$arity$1(block) == null);
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83302,new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),updated_at):G__83302);
if(cljs.core.truth_((function (){var or__5142__auto__ = file_times_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = journal_ref_page_QMARK_;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return (new cljs.core.Keyword("block","created-at","block/created-at",1440015).cljs$core$IFn$_invoke$arity$1(block) == null);
}
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83302__$1,new cljs.core.Keyword("block","created-at","block/created-at",1440015),created_at);
} else {
return G__83302__$1;
}
}));

(logseq.graph_parser.exporter.add_missing_timestamps.cljs$lang$maxFixedArity = 2);

logseq.graph_parser.exporter.build_new_namespace_page = (function logseq$graph_parser$exporter$build_new_namespace_page(block){
var new_title = logseq.common.util.namespace.get_last_part(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","title","block/title",710445684),new_title,new cljs.core.Keyword("block","name","block/name",1619760316),logseq.common.util.page_name_sanity_lc(new_title)], null)], 0));
});
logseq.graph_parser.exporter.template_file_property_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"template-including-parent","template-including-parent",1449989665),null,new cljs.core.Keyword(null,"template","template",-702405684),null], null), null);
logseq.graph_parser.exporter.get_template_name = (function logseq$graph_parser$exporter$get_template_name(block){
var template_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"template","template",-702405684)], null));
if(typeof template_name === 'string'){
return cljs.core.not_empty(clojure.string.trim(template_name));
} else {
return null;
}
});
logseq.graph_parser.exporter.template_including_parent_QMARK_ = (function logseq$graph_parser$exporter$template_including_parent_QMARK_(block){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(false,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"template-including-parent","template-including-parent",1449989665)], null)));
});
logseq.graph_parser.exporter.remove_template_property_lines = (function logseq$graph_parser$exporter$remove_template_property_lines(title){
if(typeof title === 'string'){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (line){
var trimmed_line = clojure.string.triml(line);
return ((clojure.string.starts_with_QMARK_(trimmed_line,"template::")) || (clojure.string.starts_with_QMARK_(trimmed_line,"template-including-parent::")));
}),clojure.string.split_lines(title)));
} else {
return title;
}
});
logseq.graph_parser.exporter.group_block_children_by_parent = (function logseq$graph_parser$exporter$group_block_children_by_parent(blocks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__83309){
var map__83310 = p__83309;
var map__83310__$1 = cljs.core.__destructure_map(map__83310);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83310__$1,new cljs.core.Keyword("block","parent","block/parent",-918309064));
var child_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83310__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
if(((cljs.core.vector_QMARK_(parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.first(parent))))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(result,cljs.core.second(parent),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),child_uuid);
} else {
return result;
}
}),cljs.core.PersistentArrayMap.EMPTY,blocks);
});
logseq.graph_parser.exporter.get_block_subtree_uuids = (function logseq$graph_parser$exporter$get_block_subtree_uuids(block_children,root_uuid){
var queue = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_uuid], null);
var result = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5823__auto__ = cljs.core.first(queue);
if(cljs.core.truth_(temp__5823__auto__)){
var current_uuid = temp__5823__auto__;
var G__84087 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.rest(queue)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(block_children,current_uuid));
var G__84088 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,current_uuid);
queue = G__84087;
result = G__84088;
continue;
} else {
return result;
}
break;
}
});
logseq.graph_parser.exporter.get_parent_uuid = (function logseq$graph_parser$exporter$get_parent_uuid(parent){
if(((cljs.core.vector_QMARK_(parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.first(parent))))){
return cljs.core.second(parent);
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.map_QMARK_(parent);
if(and__5140__auto__){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(parent);
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(parent);
} else {
return null;

}
}
});
/**
 * Handles creating #Template blocks and their children and calculates
 *   :preserve-empty-properties-uuids for use later
 */
logseq.graph_parser.exporter.handle_template_blocks = (function logseq$graph_parser$exporter$handle_template_blocks(blocks_STAR_){
var include_parent_template_uuids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (block){
var and__5140__auto__ = logseq.graph_parser.exporter.get_template_name(block);
if(cljs.core.truth_(and__5140__auto__)){
return logseq.graph_parser.exporter.template_including_parent_QMARK_(block);
} else {
return and__5140__auto__;
}
}),blocks_STAR_)));
var content_uuids_by_template = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (template_uuid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [template_uuid,logseq.common.uuid.gen_uuid.cljs$core$IFn$_invoke$arity$0()], null);
})),include_parent_template_uuids);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__83314,block){
var map__83315 = p__83314;
var map__83315__$1 = cljs.core.__destructure_map(map__83315);
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83315__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var preserve_empty_properties_uuids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83315__$1,new cljs.core.Keyword(null,"preserve-empty-properties-uuids","preserve-empty-properties-uuids",2046150499));
var temp__5823__auto__ = logseq.graph_parser.exporter.get_template_name(block);
if(cljs.core.truth_(temp__5823__auto__)){
var template_name = temp__5823__auto__;
var block_children = logseq.graph_parser.exporter.group_block_children_by_parent(blocks_STAR_);
var parent_uuid = logseq.graph_parser.exporter.get_parent_uuid(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block));
var content_uuid = (cljs.core.truth_(parent_uuid)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(content_uuids_by_template,parent_uuid):null);
var cleaned_block_SINGLEQUOTE_ = (cljs.core.truth_(content_uuid)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),content_uuid], null)):block);
var source_preserve_empty_properties_uuids = cljs.core.set(logseq.graph_parser.exporter.get_block_subtree_uuids(block_children,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)));
var template_root_block = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cleaned_block_SINGLEQUOTE_,new cljs.core.Keyword("block","title","block/title",710445684),template_name),new cljs.core.Keyword("block","tags","block/tags",1814948340),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("logseq.class","Template","logseq.class/Template",1720854846)),new cljs.core.Keyword("block","properties","block/properties",708347145));
var template_content_block = ((logseq.graph_parser.exporter.template_including_parent_QMARK_(block))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var G__83316 = block;
if(cljs.core.seq(new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__83316,new cljs.core.Keyword("block","properties","block/properties",708347145),(function (p1__83312_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,p1__83312_SHARP_,logseq.graph_parser.exporter.template_file_property_names);
}));
} else {
return G__83316;
}
})(),new cljs.core.Keyword("block","title","block/title",710445684),logseq.graph_parser.exporter.remove_template_property_lines),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.get.cljs$core$IFn$_invoke$arity$2(content_uuids_by_template,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null),new cljs.core.Keyword("block","order","block/order",-1429282437),logseq.db.common.order.gen_key.cljs$core$IFn$_invoke$arity$0()], 0)),new cljs.core.Keyword("db","id","db/id",-1388397098)):null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),(function (){var G__83317 = blocks;
var G__83317__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__83317,template_root_block)
;
if(cljs.core.truth_(template_content_block)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__83317__$1,template_content_block);
} else {
return G__83317__$1;
}
})(),new cljs.core.Keyword(null,"preserve-empty-properties-uuids","preserve-empty-properties-uuids",2046150499),clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(preserve_empty_properties_uuids,source_preserve_empty_properties_uuids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__83318 = cljs.core.PersistentHashSet.EMPTY;
if(cljs.core.truth_(template_content_block)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__83318,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(template_content_block));
} else {
return G__83318;
}
})()], 0))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),(function (){var temp__5823__auto____$1 = (function (){var G__83319 = logseq.graph_parser.exporter.get_parent_uuid(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block));
if((G__83319 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(content_uuids_by_template,G__83319);
}
})();
if(cljs.core.truth_(temp__5823__auto____$1)){
var content_uuid = temp__5823__auto____$1;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(blocks,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),content_uuid], null)));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(blocks,block);
}
})(),new cljs.core.Keyword(null,"preserve-empty-properties-uuids","preserve-empty-properties-uuids",2046150499),preserve_empty_properties_uuids], null);
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"preserve-empty-properties-uuids","preserve-empty-properties-uuids",2046150499),cljs.core.PersistentHashSet.EMPTY], null),blocks_STAR_);
});
logseq.graph_parser.exporter.get_page_uuid = (function logseq$graph_parser$exporter$get_page_uuid(page_names_to_uuids,page_name,ex_data_SINGLEQUOTE_){
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(page_names_to_uuids),(function (){var G__83320 = ((clojure.string.includes_QMARK_((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_name)),"#"))?clojure.string.lower_case(logseq.graph_parser.block.sanitize_hashtag_name(page_name)):page_name);
if((G__83320 == null)){
return null;
} else {
return clojure.string.trimr(G__83320);
}
})());
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"No uuid found for page name "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([page_name], 0)))),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ex_data_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page-name","page-name",974981762),page_name,new cljs.core.Keyword(null,"page-names","page-names",-802013696),cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(cljs.core.deref(page_names_to_uuids)))], null)], 0)));
}
});
logseq.graph_parser.exporter.replace_namespace_with_parent = (function logseq$graph_parser$exporter$replace_namespace_with_parent(block,page_names_to_uuids,parent_k){
if(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword("block","namespace","block/namespace",-282500695).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(block));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword("block","namespace","block/namespace",-282500695)),parent_k,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),logseq.graph_parser.exporter.get_page_uuid(page_names_to_uuids,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","namespace","block/namespace",-282500695),new cljs.core.Keyword("block","name","block/name",1619760316)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),block,new cljs.core.Keyword("block","namespace","block/namespace",-282500695),new cljs.core.Keyword("block","namespace","block/namespace",-282500695).cljs$core$IFn$_invoke$arity$1(block)], null))], null));
} else {
return block;
}
});
logseq.graph_parser.exporter.build_class_ident_name = (function logseq$graph_parser$exporter$build_class_ident_name(class_name){
return clojure.string.replace(class_name,"/","___");
});
logseq.graph_parser.exporter.user_property_ident_QMARK_ = (function logseq$graph_parser$exporter$user_property_ident_QMARK_(db_ident){
return ((cljs.core.qualified_keyword_QMARK_(db_ident)) && (logseq.db.frontend.malli_schema.user_property_QMARK_(db_ident)));
});
/**
 * True when uuid already belongs to a property. Property and class may share a title.
 */
logseq.graph_parser.exporter.property_entity_uuid_QMARK_ = (function logseq$graph_parser$exporter$property_entity_uuid_QMARK_(db,block_uuid){
return cljs.core.boolean$((cljs.core.truth_(block_uuid)?(function (){var temp__5825__auto__ = (function (){var G__83323 = db;
var G__83324 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__83323,G__83324) : datascript.core.entity.call(null,G__83323,G__83324));
})();
if(cljs.core.truth_(temp__5825__auto__)){
var e = temp__5825__auto__;
var or__5142__auto__ = (logseq.db.property_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.property_QMARK_.cljs$core$IFn$_invoke$arity$1(e) : logseq.db.property_QMARK_.call(null,e));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var G__83325 = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(e);
if((G__83325 == null)){
return null;
} else {
return logseq.graph_parser.exporter.user_property_ident_QMARK_(G__83325);
}
}
} else {
return null;
}
})():null));
});
/**
 * Existing class ident for class-name. Ignores a property ident that may share
 * the same unqualified name when the property page was imported first.
 */
logseq.graph_parser.exporter.find_class_ident = (function logseq$graph_parser$exporter$find_class_ident(all_idents,class_name){
var ident = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(class_name);
var existing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_idents,ident);
var lc = clojure.string.lower_case(class_name);
var or__5142__auto__ = (cljs.core.truth_((function (){var and__5140__auto__ = existing;
if(cljs.core.truth_(and__5140__auto__)){
return (!(logseq.graph_parser.exporter.user_property_ident_QMARK_(existing)));
} else {
return and__5140__auto__;
}
})())?existing:null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.some((function (p__83326){
var vec__83327 = p__83326;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83327,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83327,(1),null);
if(((cljs.core.qualified_keyword_QMARK_(v)) && (((logseq.db.frontend.malli_schema.class_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lc,clojure.string.lower_case(cljs.core.name(v)))))))){
return v;
} else {
return null;
}
}),all_idents);
}
});
logseq.graph_parser.exporter.find_or_create_class = (function logseq$graph_parser$exporter$find_or_create_class(var_args){
var G__83331 = arguments.length;
switch (G__83331) {
case 3:
return logseq.graph_parser.exporter.find_or_create_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return logseq.graph_parser.exporter.find_or_create_class.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.graph_parser.exporter.find_or_create_class.cljs$core$IFn$_invoke$arity$3 = (function (db,class_name,all_idents){
return logseq.graph_parser.exporter.find_or_create_class.cljs$core$IFn$_invoke$arity$4(db,class_name,all_idents,cljs.core.PersistentArrayMap.EMPTY);
}));

(logseq.graph_parser.exporter.find_or_create_class.cljs$core$IFn$_invoke$arity$4 = (function (db,class_name,all_idents,class_block){
var ident = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(class_name);
var temp__5823__auto__ = logseq.graph_parser.exporter.find_class_ident(cljs.core.deref(all_idents),class_name);
if(cljs.core.truth_(temp__5823__auto__)){
var db_ident = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),db_ident], null);
} else {
var m = (cljs.core.truth_(new cljs.core.Keyword("block","namespace","block/namespace",-282500695).cljs$core$IFn$_invoke$arity$1(class_block))?logseq.graph_parser.exporter.build_new_namespace_page(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.db.frontend.class$.build_new_class(db,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","title","block/title",710445684),logseq.graph_parser.exporter.build_class_ident_name(class_name)], null),cljs.core.select_keys(class_block,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","tags","block/tags",1814948340)], null))], 0))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","title","block/title",710445684),class_name,new cljs.core.Keyword("block","name","block/name",1619760316),logseq.common.util.page_name_sanity_lc(class_name)], null)], 0))):logseq.db.frontend.class$.build_new_class(db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","title","block/title",710445684),class_name,new cljs.core.Keyword("block","name","block/name",1619760316),logseq.common.util.page_name_sanity_lc(class_name)], null),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(class_block))));
var ident_key = ((logseq.graph_parser.exporter.user_property_ident_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(all_idents),ident)))?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.exporter.build_class_ident_name(class_name))+"#class")):ident);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(all_idents,cljs.core.assoc,ident_key,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(m));

return cljs.core.with_meta(m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-class?","new-class?",1140916821),true], null));
}
}));

(logseq.graph_parser.exporter.find_or_create_class.cljs$lang$maxFixedArity = 4);

logseq.graph_parser.exporter.find_or_gen_class_uuid = (function logseq$graph_parser$exporter$find_or_gen_class_uuid(var_args){
var args__5882__auto__ = [];
var len__5876__auto___84093 = arguments.length;
var i__5877__auto___84094 = (0);
while(true){
if((i__5877__auto___84094 < len__5876__auto___84093)){
args__5882__auto__.push((arguments[i__5877__auto___84094]));

var G__84095 = (i__5877__auto___84094 + (1));
i__5877__auto___84094 = G__84095;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((4) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((4)),(0),null)):null);
return logseq.graph_parser.exporter.find_or_gen_class_uuid.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5883__auto__);
});

(logseq.graph_parser.exporter.find_or_gen_class_uuid.cljs$core$IFn$_invoke$arity$variadic = (function (db,page_names_to_uuids,page_name,db_ident,p__83339){
var map__83340 = p__83339;
var map__83340__$1 = cljs.core.__destructure_map(map__83340);
var temp_new_class_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83340__$1,new cljs.core.Keyword(null,"temp-new-class?","temp-new-class?",-1690331086));
var existing = (cljs.core.truth_(temp_new_class_QMARK_)?(function (){var or__5142__auto__ = cljs.core.some((function (p1__83333_SHARP_){
if(clojure.string.ends_with_QMARK_(cljs.core.key(p1__83333_SHARP_),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.util.namespace.parent_char)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_name)))){
return cljs.core.val(p1__83333_SHARP_);
} else {
return null;
}
}),cljs.core.deref(page_names_to_uuids));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(page_names_to_uuids),page_name);
}
})():cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(page_names_to_uuids),page_name));
if(cljs.core.truth_((function (){var and__5140__auto__ = existing;
if(cljs.core.truth_(and__5140__auto__)){
return (!(logseq.graph_parser.exporter.property_entity_uuid_QMARK_(db,existing)));
} else {
return and__5140__auto__;
}
})())){
return existing;
} else {
var new_uuid = logseq.common.uuid.gen_uuid.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db-ident-block-uuid","db-ident-block-uuid",-2020167291),db_ident);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(page_names_to_uuids,cljs.core.assoc,page_name,new_uuid);

return new_uuid;
}
}));

(logseq.graph_parser.exporter.find_or_gen_class_uuid.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(logseq.graph_parser.exporter.find_or_gen_class_uuid.cljs$lang$applyTo = (function (seq83334){
var G__83335 = cljs.core.first(seq83334);
var seq83334__$1 = cljs.core.next(seq83334);
var G__83336 = cljs.core.first(seq83334__$1);
var seq83334__$2 = cljs.core.next(seq83334__$1);
var G__83337 = cljs.core.first(seq83334__$2);
var seq83334__$3 = cljs.core.next(seq83334__$2);
var G__83338 = cljs.core.first(seq83334__$3);
var seq83334__$4 = cljs.core.next(seq83334__$3);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__83335,G__83336,G__83337,G__83338,seq83334__$4);
}));

logseq.graph_parser.exporter.convert_tag_QMARK_ = (function logseq$graph_parser$exporter$convert_tag_QMARK_(tag_name,p__83345){
var map__83346 = p__83345;
var map__83346__$1 = cljs.core.__destructure_map(map__83346);
var convert_all_tags_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83346__$1,new cljs.core.Keyword(null,"convert-all-tags?","convert-all-tags?",-1869310481));
var tag_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83346__$1,new cljs.core.Keyword(null,"tag-classes","tag-classes",835362327));
var and__5140__auto__ = (function (){var or__5142__auto__ = convert_all_tags_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return ((cljs.core.contains_QMARK_(tag_classes,tag_name)) || (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["card",null], null), null),tag_name)));
}
})();
if(cljs.core.truth_(and__5140__auto__)){
return (!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["tags",null], null), null),tag_name)));
} else {
return and__5140__auto__;
}
});
/**
 * Finds a class by :block/name (indexed, not unique) and, for namespaced tags, parent path.
 *   Returns its :block/uuid if found.
 */
logseq.graph_parser.exporter.find_existing_class = (function logseq$graph_parser$exporter$find_existing_class(db,p__83349){
var map__83350 = p__83349;
var map__83350__$1 = cljs.core.__destructure_map(map__83350);
var full_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83350__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
var block_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83350__$1,new cljs.core.Keyword("block","namespace","block/namespace",-282500695));
var name_entities = (function (page_name){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (datom){
var e = (function (){var G__83351 = db;
var G__83352 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__83351,G__83352) : datascript.core.entity.call(null,G__83351,G__83352));
})();
if(cljs.core.truth_((logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1(e) : logseq.db.class_QMARK_.call(null,e)))){
return e;
} else {
return null;
}
}),datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","name","block/name",1619760316),page_name));
});
if(cljs.core.truth_(block_ns)){
return cljs.core.some((function (e){
var parent = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.class","Root","logseq.class/Root",273783827),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(p));
}),(logseq.db.get_class_extends.cljs$core$IFn$_invoke$arity$1 ? logseq.db.get_class_extends.cljs$core$IFn$_invoke$arity$1(e) : logseq.db.get_class_extends.call(null,e))));
var parent_ancestors = (cljs.core.truth_(parent)?(logseq.db.get_page_parents.cljs$core$IFn$_invoke$arity$1 ? logseq.db.get_page_parents.cljs$core$IFn$_invoke$arity$1(parent) : logseq.db.get_page_parents.call(null,parent)):null);
var parents = (function (){var G__83353 = (function (){var or__5142__auto__ = parent_ancestors;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
if(cljs.core.truth_(parent)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__83353,parent);
} else {
return G__83353;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(full_name,clojure.string.join.cljs$core$IFn$_invoke$arity$2(logseq.common.util.namespace.namespace_char,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,e))))){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(e);
} else {
return null;
}
}),name_entities(logseq.common.util.namespace.get_last_part(full_name)));
} else {
return cljs.core.some(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),name_entities(full_name));
}
});
/**
 * Converts a tag block with class or returns nil if this tag should be removed
 * because it has been moved
 */
logseq.graph_parser.exporter.convert_tag_to_class = (function logseq$graph_parser$exporter$convert_tag_to_class(db,tag_block,p__83354,user_options,all_idents){
var map__83355 = p__83354;
var map__83355__$1 = cljs.core.__destructure_map(map__83355);
var page_names_to_uuids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83355__$1,new cljs.core.Keyword(null,"page-names-to-uuids","page-names-to-uuids",-875423247));
var classes_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83355__$1,new cljs.core.Keyword(null,"classes-tx","classes-tx",664490242));
var temp__5823__auto__ = new cljs.core.Keyword("block.temp","new-class","block.temp/new-class",348616617).cljs$core$IFn$_invoke$arity$1(tag_block);
if(cljs.core.truth_(temp__5823__auto__)){
var new_class = temp__5823__auto__;
var class_m = logseq.graph_parser.exporter.find_or_create_class.cljs$core$IFn$_invoke$arity$3(db,new_class,all_idents);
var class_m_SINGLEQUOTE_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([class_m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),logseq.graph_parser.exporter.find_or_gen_class_uuid.cljs$core$IFn$_invoke$arity$variadic(db,page_names_to_uuids,logseq.common.util.page_name_sanity_lc(new_class),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(class_m),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"temp-new-class?","temp-new-class?",-1690331086),true], null)], 0))], null)], 0));
if(cljs.core.truth_(new cljs.core.Keyword(null,"new-class?","new-class?",1140916821).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(class_m)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(classes_tx,cljs.core.conj,class_m_SINGLEQUOTE_);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(class_m_SINGLEQUOTE_))){
} else {
throw (new Error((""+"Assert failed: "+"Class must have a :block/uuid"+"\n"+"(:block/uuid class-m')")));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(class_m_SINGLEQUOTE_)], null);
} else {
if(cljs.core.truth_(logseq.graph_parser.exporter.convert_tag_QMARK_(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(tag_block),user_options))){
var existing_tag_uuid = logseq.graph_parser.exporter.find_existing_class(db,tag_block);
var internal_tag_conflict_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["asset",null,"tag",null,"property",null,"page",null,"journal",null], null), null),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(tag_block));
if(cljs.core.truth_((function (){var and__5140__auto__ = existing_tag_uuid;
if(cljs.core.truth_(and__5140__auto__)){
return (!(internal_tag_conflict_QMARK_));
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),existing_tag_uuid], null);
} else {
var class_m = logseq.graph_parser.exporter.find_or_create_class.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(tag_block),all_idents,tag_block);
var property_uuid_QMARK_ = logseq.graph_parser.exporter.property_entity_uuid_QMARK_(db,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(tag_block));
var class_m_SINGLEQUOTE_ = logseq.graph_parser.exporter.replace_namespace_with_parent(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag_block,class_m,((internal_tag_conflict_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),logseq.common.uuid.gen_uuid.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db-ident-block-uuid","db-ident-block-uuid",-2020167291),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(class_m))], null):((((property_uuid_QMARK_) || (cljs.core.not(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(tag_block)))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),logseq.graph_parser.exporter.find_or_gen_class_uuid(db,page_names_to_uuids,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(tag_block),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(class_m))], null):null))], 0)),new cljs.core.Keyword("block","created-at","block/created-at",1440015),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551)], 0)),logseq.graph_parser.exporter.add_missing_timestamps.cljs$core$IFn$_invoke$arity$1(cljs.core.select_keys(tag_block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","created-at","block/created-at",1440015),new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551)], null)))], 0)),page_names_to_uuids,new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803));
if(cljs.core.truth_(new cljs.core.Keyword(null,"new-class?","new-class?",1140916821).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(class_m)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(classes_tx,cljs.core.conj,class_m_SINGLEQUOTE_);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(class_m_SINGLEQUOTE_))){
} else {
throw (new Error((""+"Assert failed: "+"Class must have a :block/uuid"+"\n"+"(:block/uuid class-m')")));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(class_m_SINGLEQUOTE_)], null);

}
} else {
return null;
}
}
});
logseq.graph_parser.exporter.logseq_class_ident_QMARK_ = (function logseq$graph_parser$exporter$logseq_class_ident_QMARK_(k){
return ((cljs.core.qualified_keyword_QMARK_(k)) && (logseq.db.frontend.class$.logseq_class_QMARK_(k)));
});
/**
 * Converts tags to classes in input order, keeping only non-nil results.
 */
logseq.graph_parser.exporter.convert_tags_to_classes = (function logseq$graph_parser$exporter$convert_tags_to_classes(tags,db,per_file_state,user_options,all_idents){
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__83358_SHARP_){
if(logseq.graph_parser.exporter.logseq_class_ident_QMARK_(p1__83358_SHARP_)){
return p1__83358_SHARP_;
} else {
return logseq.graph_parser.exporter.convert_tag_to_class(db,p1__83358_SHARP_,per_file_state,user_options,all_idents);
}
}),tags));
});
logseq.graph_parser.exporter.update_page_tags = (function logseq$graph_parser$exporter$update_page_tags(block,db,user_options,per_file_state,all_idents){
if(cljs.core.seq(new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(block))){
var page_tags = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83360_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),logseq.graph_parser.exporter.get_page_uuid(new cljs.core.Keyword(null,"page-names-to-uuids","page-names-to-uuids",-875423247).cljs$core$IFn$_invoke$arity$1(per_file_state),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(p1__83360_SHARP_),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block","block",664686210),p1__83360_SHARP_], null))],null));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__83359_SHARP_){
var or__5142__auto__ = new cljs.core.Keyword("block.temp","new-class","block.temp/new-class",348616617).cljs$core$IFn$_invoke$arity$1(p1__83359_SHARP_);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = logseq.graph_parser.exporter.convert_tag_QMARK_(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(p1__83359_SHARP_),user_options);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return logseq.graph_parser.exporter.logseq_class_ident_QMARK_(p1__83359_SHARP_);
}
}
}),new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(block))));
var G__83363 = block;
var G__83363__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(G__83363,new cljs.core.Keyword("block","tags","block/tags",1814948340),logseq.graph_parser.exporter.convert_tags_to_classes,db,per_file_state,user_options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([all_idents], 0))
;
var G__83363__$2 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__83363__$1,new cljs.core.Keyword("block","tags","block/tags",1814948340),(function (tags){
var G__83366 = cljs.core.set(tags);
var G__83366__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__83366,new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329))
;
if(cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(tags),new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329)),logseq.db.frontend.class$.page_classes))){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(G__83366__$1,new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329));
} else {
return G__83366__$1;
}
}))
;
if(cljs.core.seq(page_tags)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__83363__$2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.property","page-tags","logseq.property/page-tags",-2133531185),page_tags], null)], 0));
} else {
return G__83363__$2;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329)], null));
}
});
logseq.graph_parser.exporter.add_uuid_to_page_map = (function logseq$graph_parser$exporter$add_uuid_to_page_map(m,page_names_to_uuids){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),logseq.graph_parser.exporter.get_page_uuid(page_names_to_uuids,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block","block",664686210),m], null)));
});
/**
 * Ignore case because tags in content can have any case and still have a valid ref
 */
logseq.graph_parser.exporter.content_without_tags_ignore_case = (function logseq$graph_parser$exporter$content_without_tags_ignore_case(content,tags){
return clojure.string.trim(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (content__$1,tag){
return logseq.common.util.replace_ignore_case(logseq.common.util.replace_ignore_case(content__$1,(""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)),""),(""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.util.page_ref.left_brackets)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.util.page_ref.right_brackets)),"");
}),content,cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,tags)));
});
logseq.graph_parser.exporter.replace_namespaced_tags_with_id_refs = (function logseq$graph_parser$exporter$replace_namespaced_tags_with_id_refs(content,tags){
return clojure.string.trim(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (content__$1,tag){
if(logseq.common.util.namespace.namespace_page_QMARK_(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(tag))){
var id_ref = logseq.common.util.page_ref.__GT_page_ref(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(tag));
return logseq.common.util.replace_ignore_case(logseq.common.util.replace_ignore_case(content__$1,(""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(tag))),(""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_ref))),(""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.util.page_ref.__GT_page_ref(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(tag)))),(""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_ref)));
} else {
return content__$1;
}
}),content,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,new cljs.core.Keyword("block","name","block/name",1619760316)),cljs.core._GT_,tags)));
});
logseq.graph_parser.exporter.update_block_tags = (function logseq$graph_parser$exporter$update_block_tags(block,db,p__83370,per_file_state,all_idents){
var map__83371 = p__83370;
var map__83371__$1 = cljs.core.__destructure_map(map__83371);
var user_options = map__83371__$1;
var remove_inline_tags_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83371__$1,new cljs.core.Keyword(null,"remove-inline-tags?","remove-inline-tags?",-1198387053));
var block_SINGLEQUOTE_ = ((cljs.core.seq(new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(block)))?(function (){var original_tags = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__83367_SHARP_){
var or__5142__auto__ = new cljs.core.Keyword("block.temp","new-class","block.temp/new-class",348616617).cljs$core$IFn$_invoke$arity$1(p1__83367_SHARP_);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.graph_parser.exporter.logseq_class_ident_QMARK_(p1__83367_SHARP_);
}
}),new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(block));
var convert_tag_QMARK__SINGLEQUOTE_ = (function (p1__83368_SHARP_){
return logseq.graph_parser.exporter.convert_tag_QMARK_(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(p1__83368_SHARP_),user_options);
});
var G__83372 = block;
var G__83372__$1 = (cljs.core.truth_(remove_inline_tags_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__83372,new cljs.core.Keyword("block","title","block/title",710445684),logseq.graph_parser.exporter.content_without_tags_ignore_case,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","title","block/title",710445684),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(convert_tag_QMARK__SINGLEQUOTE_,original_tags))):G__83372);
var G__83372__$2 = ((cljs.core.not(remove_inline_tags_QMARK_))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__83372__$1,new cljs.core.Keyword("block","title","block/title",710445684),logseq.graph_parser.exporter.replace_namespaced_tags_with_id_refs,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(convert_tag_QMARK__SINGLEQUOTE_,original_tags)):G__83372__$1);
var G__83372__$3 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__83372__$2,new cljs.core.Keyword("block","title","block/title",710445684),logseq.db.frontend.content.replace_tags_with_id_refs,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83369_SHARP_){
return logseq.graph_parser.exporter.add_uuid_to_page_map(p1__83369_SHARP_,new cljs.core.Keyword(null,"page-names-to-uuids","page-names-to-uuids",-875423247).cljs$core$IFn$_invoke$arity$1(per_file_state));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(convert_tag_QMARK__SINGLEQUOTE_,original_tags)))
;
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(G__83372__$3,new cljs.core.Keyword("block","tags","block/tags",1814948340),logseq.graph_parser.exporter.convert_tags_to_classes,db,per_file_state,user_options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([all_idents], 0));

})():block);
return block_SINGLEQUOTE_;
});
logseq.graph_parser.exporter.built_in_status_markers = new cljs.core.PersistentArrayMap(null, 7, ["TODO",new cljs.core.Keyword("logseq.property","status.todo","logseq.property/status.todo",-1615585377),"LATER",new cljs.core.Keyword("logseq.property","status.todo","logseq.property/status.todo",-1615585377),"NOW",new cljs.core.Keyword("logseq.property","status.doing","logseq.property/status.doing",1840122908),"DOING",new cljs.core.Keyword("logseq.property","status.doing","logseq.property/status.doing",1840122908),"DONE",new cljs.core.Keyword("logseq.property","status.done","logseq.property/status.done",-1827582082),"CANCELED",new cljs.core.Keyword("logseq.property","status.canceled","logseq.property/status.canceled",752643262),"CANCELLED",new cljs.core.Keyword("logseq.property","status.canceled","logseq.property/status.canceled",752643262)], null);
logseq.graph_parser.exporter.custom_status_marker_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["IN-PROGRESS",null,"WAITING",null,"WAIT",null], null), null);
logseq.graph_parser.exporter.status_markers = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(logseq.graph_parser.exporter.built_in_status_markers)),logseq.graph_parser.exporter.custom_status_marker_QMARK_);
logseq.graph_parser.exporter.marker_only_block_title = (function logseq$graph_parser$exporter$marker_only_block_title(block){
var temp__5825__auto__ = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5825__auto__)){
var title = temp__5825__auto__;
var title_SINGLEQUOTE_ = clojure.string.trim(title);
if(cljs.core.contains_QMARK_(logseq.graph_parser.exporter.status_markers,title_SINGLEQUOTE_)){
return title_SINGLEQUOTE_;
} else {
return null;
}
} else {
return null;
}
});
logseq.graph_parser.exporter.find_status_choice_by_content = (function logseq$graph_parser$exporter$find_status_choice_by_content(db,marker){
return cljs.core.some((function (p1__83373_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(marker,logseq.db.frontend.property.closed_value_content(p1__83373_SHARP_))){
return p1__83373_SHARP_;
} else {
return null;
}
}),logseq.db.frontend.property.get_closed_property_values(db,new cljs.core.Keyword("logseq.property","status","logseq.property/status",-907216853)));
});
logseq.graph_parser.exporter.build_status_choice_tx = (function logseq$graph_parser$exporter$build_status_choice_tx(marker,block_uuid){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(logseq.db.frontend.property.build.build_closed_value_block(block_uuid,new cljs.core.Keyword(null,"default","default",-1987822328),marker,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("logseq.property","status","logseq.property/status",-907216853)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("block","order","block/order",-1429282437),logseq.db.common.order.gen_key.cljs$core$IFn$_invoke$arity$0());
});
logseq.graph_parser.exporter.custom_marker_status_ref = (function logseq$graph_parser$exporter$custom_marker_status_ref(db,marker,p__83379){
var map__83380 = p__83379;
var map__83380__$1 = cljs.core.__destructure_map(map__83380);
var import_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83380__$1,new cljs.core.Keyword(null,"import-state","import-state",1493794865));
var custom_status_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83380__$1,new cljs.core.Keyword(null,"custom-status-tx","custom-status-tx",1561056861));
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"custom-status-markers","custom-status-markers",-1629016106).cljs$core$IFn$_invoke$arity$1(import_state)),marker);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var status_ref = (function (){var temp__5823__auto__ = logseq.graph_parser.exporter.find_status_choice_by_content(db,marker);
if(cljs.core.truth_(temp__5823__auto__)){
var status = temp__5823__auto__;
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(status);
} else {
var block_uuid = logseq.common.uuid.gen_uuid.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(custom_status_tx,cljs.core.conj,logseq.graph_parser.exporter.build_status_choice_tx(marker,block_uuid));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null);
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"custom-status-markers","custom-status-markers",-1629016106).cljs$core$IFn$_invoke$arity$1(import_state),cljs.core.assoc,marker,status_ref);

return status_ref;
}
});
/**
 * If a block has a marker, convert it to a task object
 */
logseq.graph_parser.exporter.update_block_marker = (function logseq$graph_parser$exporter$update_block_marker(block,db,p__83386){
var map__83387 = p__83386;
var map__83387__$1 = cljs.core.__destructure_map(map__83387);
var options = map__83387__$1;
var log_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83387__$1,new cljs.core.Keyword(null,"log-fn","log-fn",-2003241282));
var temp__5823__auto__ = (function (){var or__5142__auto__ = new cljs.core.Keyword("block","marker","block/marker",1231576318).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.graph_parser.exporter.marker_only_block_title(block);
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var marker = temp__5823__auto__;
var status_ident = ((cljs.core.contains_QMARK_(logseq.graph_parser.exporter.built_in_status_markers,marker))?(logseq.graph_parser.exporter.built_in_status_markers.cljs$core$IFn$_invoke$arity$1 ? logseq.graph_parser.exporter.built_in_status_markers.cljs$core$IFn$_invoke$arity$1(marker) : logseq.graph_parser.exporter.built_in_status_markers.call(null,marker)):(cljs.core.truth_((logseq.graph_parser.exporter.custom_status_marker_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.graph_parser.exporter.custom_status_marker_QMARK_.cljs$core$IFn$_invoke$arity$1(marker) : logseq.graph_parser.exporter.custom_status_marker_QMARK_.call(null,marker)))?logseq.graph_parser.exporter.custom_marker_status_ref(db,marker,options):(function (){
var G__83388_84105 = new cljs.core.Keyword(null,"invalid-todo","invalid-todo",1926538319);
var G__83389_84106 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([marker], 0)))+" is not a valid marker so setting it to TODO");
(log_fn.cljs$core$IFn$_invoke$arity$2 ? log_fn.cljs$core$IFn$_invoke$arity$2(G__83388_84105,G__83389_84106) : log_fn.call(null,G__83388_84105,G__83389_84106));

return new cljs.core.Keyword("logseq.property","status.todo","logseq.property/status.todo",-1615585377);
})()

));
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("logseq.property","status","logseq.property/status",-907216853),status_ident),new cljs.core.Keyword("block","title","block/title",710445684),clojure.string.replace_first,cljs.core.re_pattern((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(marker)+"\\s*")),""),new cljs.core.Keyword("block","tags","block/tags",1814948340),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("logseq.class","Task","logseq.class/Task",-1282181457)),new cljs.core.Keyword("block","marker","block/marker",1231576318));
} else {
return block;
}
});
logseq.graph_parser.exporter.update_block_priority = (function logseq$graph_parser$exporter$update_block_priority(block,p__83391){
var map__83392 = p__83391;
var map__83392__$1 = cljs.core.__destructure_map(map__83392);
var log_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83392__$1,new cljs.core.Keyword(null,"log-fn","log-fn",-2003241282));
var temp__5823__auto__ = new cljs.core.Keyword("block","priority","block/priority",1491369544).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5823__auto__)){
var priority = temp__5823__auto__;
var old_to_new = new cljs.core.PersistentArrayMap(null, 3, ["A",new cljs.core.Keyword("logseq.property","priority.high","logseq.property/priority.high",567227668),"B",new cljs.core.Keyword("logseq.property","priority.medium","logseq.property/priority.medium",-1829322278),"C",new cljs.core.Keyword("logseq.property","priority.low","logseq.property/priority.low",2107453748)], null);
var priority_value = (function (){var or__5142__auto__ = (old_to_new.cljs$core$IFn$_invoke$arity$1 ? old_to_new.cljs$core$IFn$_invoke$arity$1(priority) : old_to_new.call(null,priority));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var G__83395_84109 = new cljs.core.Keyword(null,"invalid-priority","invalid-priority",2067271516);
var G__83396_84110 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([priority], 0)))+" is not a valid priority so setting it to low");
(log_fn.cljs$core$IFn$_invoke$arity$2 ? log_fn.cljs$core$IFn$_invoke$arity$2(G__83395_84109,G__83396_84110) : log_fn.call(null,G__83395_84109,G__83396_84110));

return new cljs.core.Keyword("logseq.property","priority.low","logseq.property/priority.low",2107453748);
}
})();
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("logseq.property","priority","logseq.property/priority",239228411),priority_value),new cljs.core.Keyword("block","title","block/title",710445684),clojure.string.replace_first,cljs.core.re_pattern((""+"\\[#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(priority)+"\\]"+"\\s*")),""),new cljs.core.Keyword("block","priority","block/priority",1491369544));
} else {
return block;
}
});
logseq.graph_parser.exporter.markdown_heading_level = (function logseq$graph_parser$exporter$markdown_heading_level(title){
if(typeof title === 'string'){
var temp__5825__auto__ = cljs.core.re_find(/^(#{1,6})\s+/,clojure.string.triml(title));
if(cljs.core.truth_(temp__5825__auto__)){
var heading = temp__5825__auto__;
return cljs.core.count(cljs.core.second(heading));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Strip markdown heading markers from imported titles and store the level as
 * :logseq.property/heading, matching native DB headings.
 */
logseq.graph_parser.exporter.update_block_heading = (function logseq$graph_parser$exporter$update_block_heading(block){
if(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"quote","quote",-262615245),null,new cljs.core.Keyword(null,"code","code",1586293142),null,new cljs.core.Keyword(null,"math","math",-2026912803),null], null), null),new cljs.core.Keyword("logseq.property.node","display-type","logseq.property.node/display-type",442446189).cljs$core$IFn$_invoke$arity$1(block))) || ((!(typeof new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block) === 'string'))))){
return block;
} else {
var title = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block);
var heading_level = logseq.graph_parser.exporter.markdown_heading_level(title);
var G__83400 = block;
var G__83400__$1 = (cljs.core.truth_((function (){var or__5142__auto__ = heading_level;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (!((new cljs.core.Keyword("logseq.property","heading","logseq.property/heading",1858749415).cljs$core$IFn$_invoke$arity$1(block) == null)));
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83400,new cljs.core.Keyword("block","title","block/title",710445684),logseq.common.util.clear_markdown_heading(clojure.string.triml(title))):G__83400);
if(cljs.core.truth_(heading_level)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83400__$1,new cljs.core.Keyword("logseq.property","heading","logseq.property/heading",1858749415),heading_level);
} else {
return G__83400__$1;
}
}
});
logseq.graph_parser.exporter.get_date_formatter = (function logseq$graph_parser$exporter$get_date_formatter(config){
var or__5142__auto__ = new cljs.core.Keyword("journal","page-title-format","journal/page-title-format",2033061997).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword(null,"date-formatter","date-formatter",-223324709).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return "MMM do, yyyy";
}
}
});
logseq.graph_parser.exporter.journal_entity_QMARK_ = (function logseq$graph_parser$exporter$journal_entity_QMARK_(entity){
var or__5142__auto__ = logseq.db.frontend.entity_util.journal_QMARK_(entity);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return ("journal" === new cljs.core.Keyword("block","type","block/type",1537584409).cljs$core$IFn$_invoke$arity$1(entity));
}
});
logseq.graph_parser.exporter.page_entity_QMARK_ = (function logseq$graph_parser$exporter$page_entity_QMARK_(entity){
var or__5142__auto__ = logseq.db.frontend.entity_util.page_QMARK_(entity);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["page",null,"journal",null], null), null),new cljs.core.Keyword("block","type","block/type",1537584409).cljs$core$IFn$_invoke$arity$1(entity));
}
});
logseq.graph_parser.exporter.deadline_scheduled_date_int = (function logseq$graph_parser$exporter$deadline_scheduled_date_int(value){
if(cljs.core.map_QMARK_(value)){
return new cljs.core.Keyword(null,"date-int","date-int",-2147055777).cljs$core$IFn$_invoke$arity$1(value);
} else {
return value;
}
});
logseq.graph_parser.exporter.deadline_scheduled_time_ms = (function logseq$graph_parser$exporter$deadline_scheduled_time_ms(value){
var date_int = logseq.graph_parser.exporter.deadline_scheduled_date_int(value);
var date = logseq.common.util.date_time.int__GT_local_date(date_int);
var map__83408 = ((cljs.core.map_QMARK_(value))?new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(value):null);
var map__83408__$1 = cljs.core.__destructure_map(map__83408);
var timestamp_min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83408__$1,new cljs.core.Keyword(null,"min","min",444991522));
var hour = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83408__$1,new cljs.core.Keyword(null,"hour","hour",-555989214));
if(cljs.core.truth_(hour)){
date.setHours(hour,(function (){var or__5142__auto__ = timestamp_min;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})(),(0),(0));
} else {
}

return cljs_time.coerce.to_long(date);
});
logseq.graph_parser.exporter.repeat_recur_units = new cljs.core.PersistentArrayMap(null, 6, ["Minute",new cljs.core.Keyword("logseq.property.repeat","recur-unit.minute","logseq.property.repeat/recur-unit.minute",-1513655085),"Hour",new cljs.core.Keyword("logseq.property.repeat","recur-unit.hour","logseq.property.repeat/recur-unit.hour",1438884954),"Day",new cljs.core.Keyword("logseq.property.repeat","recur-unit.day","logseq.property.repeat/recur-unit.day",392417858),"Week",new cljs.core.Keyword("logseq.property.repeat","recur-unit.week","logseq.property.repeat/recur-unit.week",2130924449),"Month",new cljs.core.Keyword("logseq.property.repeat","recur-unit.month","logseq.property.repeat/recur-unit.month",-2073393797),"Year",new cljs.core.Keyword("logseq.property.repeat","recur-unit.year","logseq.property.repeat/recur-unit.year",-1520438524)], null);
/**
 * Maps the mldoc repetition kind to the corresponding `:repeat-type`
 *   closed-value db-ident. `:double-plus` matches the scheduler's fallback for
 *   unknown values.
 */
logseq.graph_parser.exporter.repeat_types = new cljs.core.PersistentArrayMap(null, 3, ["Dotted",new cljs.core.Keyword("logseq.property.repeat","repeat-type.dotted-plus","logseq.property.repeat/repeat-type.dotted-plus",-1406533106),"Plus",new cljs.core.Keyword("logseq.property.repeat","repeat-type.plus","logseq.property.repeat/repeat-type.plus",1646406359),"DoublePlus",new cljs.core.Keyword("logseq.property.repeat","repeat-type.double-plus","logseq.property.repeat/repeat-type.double-plus",-744196153)], null);
logseq.graph_parser.exporter.repeat_properties = (function logseq$graph_parser$exporter$repeat_properties(temporal_property,value){
var temp__5825__auto__ = (function (){var and__5140__auto__ = cljs.core.map_QMARK_(value);
if(and__5140__auto__){
return new cljs.core.Keyword(null,"repetition","repetition",1938392115).cljs$core$IFn$_invoke$arity$1(value);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var vec__83414 = temp__5825__auto__;
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83414,(0),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83414,(1),null);
var frequency = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83414,(2),null);
var unit_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.exporter.repeat_recur_units,cljs.core.first(unit));
var repeat_type_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$3(logseq.graph_parser.exporter.repeat_types,cljs.core.first(kind),new cljs.core.Keyword("logseq.property.repeat","repeat-type.double-plus","logseq.property.repeat/repeat-type.double-plus",-744196153));
if(cljs.core.truth_(unit_ident)){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Unknown repeat unit: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([unit], 0)))))+"\n"+"unit-ident")));
}

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("logseq.property.repeat","repeated?","logseq.property.repeat/repeated?",1908121789),true,new cljs.core.Keyword("logseq.property.repeat","temporal-property","logseq.property.repeat/temporal-property",834610784),temporal_property,new cljs.core.Keyword("logseq.property.repeat","repeat-type","logseq.property.repeat/repeat-type",-1984297281),repeat_type_ident,new cljs.core.Keyword("logseq.property.repeat","recur-frequency","logseq.property.repeat/recur-frequency",871615922),frequency,new cljs.core.Keyword("logseq.property.repeat","recur-unit","logseq.property.repeat/recur-unit",690306247),unit_ident], null);
} else {
return null;
}
});
logseq.graph_parser.exporter.build_repeat_properties = (function logseq$graph_parser$exporter$build_repeat_properties(block,properties){
var pvalue_tx_m = (function (){var G__83423 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword("block","page","block/page",822314108));
var G__83424 = properties;
var G__83425 = cljs.core.constantly(null);
var G__83426 = cljs.core.PersistentArrayMap.EMPTY;
return (logseq.graph_parser.exporter.__GT_property_value_tx_m.cljs$core$IFn$_invoke$arity$4 ? logseq.graph_parser.exporter.__GT_property_value_tx_m.cljs$core$IFn$_invoke$arity$4(G__83423,G__83424,G__83425,G__83426) : logseq.graph_parser.exporter.__GT_property_value_tx_m.call(null,G__83423,G__83424,G__83425,G__83426));
})();
var pvalues_tx = cljs.core.into.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__83419_SHARP_){
if(cljs.core.set_QMARK_(p1__83419_SHARP_)){
return p1__83419_SHARP_;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__83419_SHARP_], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(pvalue_tx_m)], 0)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block-properties","block-properties",306554248),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([properties,logseq.db.frontend.property.build.build_properties_with_ref_values(pvalue_tx_m)], 0)),new cljs.core.Keyword(null,"properties-tx","properties-tx",-1476843279),pvalues_tx], null);
});
logseq.graph_parser.exporter.fallback_repeat_type_property = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Repeating type",new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"public?","public?",786025269),false], null),new cljs.core.Keyword(null,"closed-values","closed-values",364658811),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db-ident","db-ident",-992686073),new cljs.core.Keyword("logseq.property.repeat","repeat-type.dotted-plus","logseq.property.repeat/repeat-type.dotted-plus",-1406533106),new cljs.core.Keyword(null,"value","value",305978217),"Advance from completion",new cljs.core.Keyword(null,"uuid","uuid",-2145095719),logseq.common.uuid.gen_uuid.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db-ident-block-uuid","db-ident-block-uuid",-2020167291),new cljs.core.Keyword("logseq.property.repeat","repeat-type.dotted-plus","logseq.property.repeat/repeat-type.dotted-plus",-1406533106))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db-ident","db-ident",-992686073),new cljs.core.Keyword("logseq.property.repeat","repeat-type.plus","logseq.property.repeat/repeat-type.plus",1646406359),new cljs.core.Keyword(null,"value","value",305978217),"Advance from scheduled",new cljs.core.Keyword(null,"uuid","uuid",-2145095719),logseq.common.uuid.gen_uuid.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db-ident-block-uuid","db-ident-block-uuid",-2020167291),new cljs.core.Keyword("logseq.property.repeat","repeat-type.plus","logseq.property.repeat/repeat-type.plus",1646406359))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db-ident","db-ident",-992686073),new cljs.core.Keyword("logseq.property.repeat","repeat-type.double-plus","logseq.property.repeat/repeat-type.double-plus",-744196153),new cljs.core.Keyword(null,"value","value",305978217),"Advance from scheduled, skip to future",new cljs.core.Keyword(null,"uuid","uuid",-2145095719),logseq.common.uuid.gen_uuid.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db-ident-block-uuid","db-ident-block-uuid",-2020167291),new cljs.core.Keyword("logseq.property.repeat","repeat-type.double-plus","logseq.property.repeat/repeat-type.double-plus",-744196153))], null)], null),new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.property","hide-empty-value","logseq.property/hide-empty-value",2062325899),true,new cljs.core.Keyword("logseq.property","default-value","logseq.property/default-value",-892079662),new cljs.core.Keyword("logseq.property.repeat","repeat-type.double-plus","logseq.property.repeat/repeat-type.double-plus",-744196153)], null)], null);
logseq.graph_parser.exporter.missing_repeat_type_property_tx = (function logseq$graph_parser$exporter$missing_repeat_type_property_tx(db,repeat_property_values){
if(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword("logseq.property.repeat","repeat-type","logseq.property.repeat/repeat-type",-1984297281).cljs$core$IFn$_invoke$arity$1(repeat_property_values);
if(cljs.core.truth_(and__5140__auto__)){
return ((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("logseq.property.repeat","repeat-type","logseq.property.repeat/repeat-type",-1984297281)) : datascript.core.entity.call(null,db,new cljs.core.Keyword("logseq.property.repeat","repeat-type","logseq.property.repeat/repeat-type",-1984297281))) == null);
} else {
return and__5140__auto__;
}
})())){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83427_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__83427_SHARP_,new cljs.core.Keyword("logseq.property","built-in?","logseq.property/built-in?",-1125958160),true);
}),logseq.db.sqlite.create_graph.build_properties((function (){var or__5142__auto__ = cljs.core.not_empty(cljs.core.select_keys(logseq.db.frontend.property.built_in_properties,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.property.repeat","repeat-type","logseq.property.repeat/repeat-type",-1984297281)], null)));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.property.repeat","repeat-type","logseq.property.repeat/repeat-type",-1984297281),logseq.graph_parser.exporter.fallback_repeat_type_property], null);
}
})()));
} else {
return null;
}
});
/**
 * Given a :block/scheduled or :block/deadline value, creates the datetime property value
 * and any optional journal tx associated with that value
 */
logseq.graph_parser.exporter.find_or_create_deadline_scheduled_value = (function logseq$graph_parser$exporter$find_or_create_deadline_scheduled_value(value,page_names_to_uuids,user_config){
var date_int = logseq.graph_parser.exporter.deadline_scheduled_date_int(value);
var title = logseq.common.util.date_time.int__GT_journal_title(date_int,logseq.graph_parser.exporter.get_date_formatter(user_config));
var existing_journal_page = (function (){var G__83429 = title;
var G__83429__$1 = (((G__83429 == null))?null:logseq.common.util.page_name_sanity_lc(G__83429));
var G__83429__$2 = (((G__83429__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(page_names_to_uuids),G__83429__$1));
if((G__83429__$2 == null)){
return null;
} else {
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)],[G__83429__$2]);
}
})();
var journal_page = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var or__5142__auto__ = existing_journal_page;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var page_m = logseq.db.sqlite.util.build_new_page(title);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(page_m,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),logseq.common.uuid.gen_uuid.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"journal-page-uuid","journal-page-uuid",1859101489),date_int),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),date_int], 0));
}
})(),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.class","Journal","logseq.class/Journal",1979741081),null], null), null));
var time_long = logseq.graph_parser.exporter.deadline_scheduled_time_ms(value);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"property-value","property-value",1516163307),time_long,new cljs.core.Keyword(null,"journal-tx","journal-tx",-1718024708),(cljs.core.truth_(existing_journal_page)?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [journal_page], null))], null);
});
/**
 * Converts :block/deadline and :block/scheduled to their new logseq properties.
 */
logseq.graph_parser.exporter.update_block_deadline_and_scheduled = (function logseq$graph_parser$exporter$update_block_deadline_and_scheduled(db,block,page_names_to_uuids,p__83434){
var map__83435 = p__83434;
var map__83435__$1 = cljs.core.__destructure_map(map__83435);
var user_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83435__$1,new cljs.core.Keyword(null,"user-config","user-config",-1138679827));
var deadline = new cljs.core.Keyword("block","deadline","block/deadline",660945231).cljs$core$IFn$_invoke$arity$1(block);
var scheduled = new cljs.core.Keyword("block","scheduled","block/scheduled",584810412).cljs$core$IFn$_invoke$arity$1(block);
var map__83436 = (cljs.core.truth_(deadline)?logseq.graph_parser.exporter.find_or_create_deadline_scheduled_value(deadline,page_names_to_uuids,user_config):null);
var map__83436__$1 = cljs.core.__destructure_map(map__83436);
var deadline_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83436__$1,new cljs.core.Keyword(null,"property-value","property-value",1516163307));
var deadline_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83436__$1,new cljs.core.Keyword(null,"journal-tx","journal-tx",-1718024708));
var map__83437 = (cljs.core.truth_(scheduled)?logseq.graph_parser.exporter.find_or_create_deadline_scheduled_value(scheduled,page_names_to_uuids,user_config):null);
var map__83437__$1 = cljs.core.__destructure_map(map__83437);
var scheduled_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83437__$1,new cljs.core.Keyword(null,"property-value","property-value",1516163307));
var scheduled_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83437__$1,new cljs.core.Keyword(null,"journal-tx","journal-tx",-1718024708));
var repeat_properties_SINGLEQUOTE_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.graph_parser.exporter.repeat_properties(new cljs.core.Keyword("logseq.property","deadline","logseq.property/deadline",1685901604),deadline),logseq.graph_parser.exporter.repeat_properties(new cljs.core.Keyword("logseq.property","scheduled","logseq.property/scheduled",1644520943),scheduled)], 0));
var map__83438 = logseq.graph_parser.exporter.build_repeat_properties(block,repeat_properties_SINGLEQUOTE_);
var map__83438__$1 = cljs.core.__destructure_map(map__83438);
var repeat_block_properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83438__$1,new cljs.core.Keyword(null,"block-properties","block-properties",306554248));
var repeat_properties_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83438__$1,new cljs.core.Keyword(null,"properties-tx","properties-tx",-1476843279));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),(function (){var G__83440 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(block,new cljs.core.Keyword("block","deadline","block/deadline",660945231),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","scheduled","block/scheduled",584810412),new cljs.core.Keyword("block","repeated?","block/repeated?",-1344319799)], 0));
var G__83440__$1 = (((!((deadline_value == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83440,new cljs.core.Keyword("logseq.property","deadline","logseq.property/deadline",1685901604),deadline_value):G__83440);
var G__83440__$2 = (((!((scheduled_value == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83440__$1,new cljs.core.Keyword("logseq.property","scheduled","logseq.property/scheduled",1644520943),scheduled_value):G__83440__$1);
if(cljs.core.seq(repeat_block_properties)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__83440__$2,repeat_block_properties], 0));
} else {
return G__83440__$2;
}
})(),new cljs.core.Keyword(null,"properties-tx","properties-tx",-1476843279),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(logseq.graph_parser.exporter.missing_repeat_type_property_tx(db,repeat_properties_SINGLEQUOTE_),deadline_tx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([scheduled_tx,repeat_properties_tx], 0)))], null);
});
/**
 * Detects if a property value has text with refs e.g. `#Logseq is #awesome`
 *   instead of `#Logseq #awesome`. If so the property type is :default instead of :page
 */
logseq.graph_parser.exporter.text_with_refs_QMARK_ = (function logseq$graph_parser$exporter$text_with_refs_QMARK_(prop_vals,val_text){
var replace_regex = cljs.core.re_pattern((""+"([#[])"+"("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(logseq.common.util.escape_regex_chars,cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,prop_vals))))+")"));
var remaining_text = clojure.string.replace(val_text,replace_regex,"$1");
var non_ref_char = cljs.core.some((function (p1__83443_SHARP_){
if(cljs.core.truth_((function (){var or__5142__auto__ = clojure.string.blank_QMARK_(p1__83443_SHARP_);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var fexpr__83444 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["]",null,",",null,"[",null,"#",null], null), null);
return (fexpr__83444.cljs$core$IFn$_invoke$arity$1 ? fexpr__83444.cljs$core$IFn$_invoke$arity$1(p1__83443_SHARP_) : fexpr__83444.call(null,p1__83443_SHARP_));
}
})())){
return false;
} else {
return p1__83443_SHARP_;
}
}),remaining_text);
return (!((non_ref_char == null)));
});
logseq.graph_parser.exporter.create_property_ident = (function logseq$graph_parser$exporter$create_property_ident(db,all_idents,property_name){
var db_ident = logseq.db.frontend.db_ident.ensure_unique_db_ident(db,logseq.db.frontend.property.create_user_property_ident_from_name.cljs$core$IFn$_invoke$arity$1(cljs.core.name(property_name)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(all_idents,cljs.core.assoc,property_name,db_ident);
});
logseq.graph_parser.exporter.get_ident = (function logseq$graph_parser$exporter$get_ident(all_idents,kw){
if(((cljs.core.qualified_keyword_QMARK_(kw)) && (logseq.db.frontend.property.logseq_property_QMARK_(kw)))){
return kw;
} else {
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_idents,kw);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"No ident found for "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([kw], 0)))),cljs.core.PersistentArrayMap.EMPTY);
}
}
});
logseq.graph_parser.exporter.get_property_schema = (function logseq$graph_parser$exporter$get_property_schema(property_schemas,kw){
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(property_schemas,kw);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"No property schema found for "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([kw], 0)))),cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Infers a property's schema from the given _user_ property value and adds new ones to
 *   the property-schemas atom. If a property's :logseq.property/type changes, returns a map of
 *   the schema attribute changed and how it changed e.g. `{:type {:from :default :to :url}}`
 */
logseq.graph_parser.exporter.infer_property_schema_and_get_property_change = (function logseq$graph_parser$exporter$infer_property_schema_and_get_property_change(db,prop_val,prop,prop_val_text,refs,p__83453,macros){
var map__83454 = p__83453;
var map__83454__$1 = cljs.core.__destructure_map(map__83454);
var property_schemas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83454__$1,new cljs.core.Keyword(null,"property-schemas","property-schemas",-1631291569));
var all_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83454__$1,new cljs.core.Keyword(null,"all-idents","all-idents",-980997938));
if(((cljs.core.coll_QMARK_(prop_val)) && ((!(cljs.core.every_QMARK_(cljs.core.string_QMARK_,prop_val)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Import cannot infer schema of unknown property value "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prop_val], 0)))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),prop_val,new cljs.core.Keyword(null,"property","property",-1114278232),prop], null));
} else {
}

var prop_type = ((((cljs.core.coll_QMARK_(prop_val)) && (((cljs.core.seq(prop_val)) && (clojure.set.subset_QMARK_(prop_val,cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__83450_SHARP_){
if(cljs.core.truth_(logseq.graph_parser.exporter.journal_entity_QMARK_(p1__83450_SHARP_))){
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(p1__83450_SHARP_);
} else {
return null;
}
}),refs))))))))?new cljs.core.Keyword(null,"date","date",-1463434462):((((cljs.core.coll_QMARK_(prop_val)) && (((cljs.core.seq(prop_val)) && (logseq.graph_parser.exporter.text_with_refs_QMARK_(prop_val,prop_val_text))))))?new cljs.core.Keyword(null,"default","default",-1987822328):((cljs.core.coll_QMARK_(prop_val))?new cljs.core.Keyword(null,"node","node",581201198):logseq.db.frontend.property.type.infer_property_type_from_value(logseq.common.util.macro.expand_value_if_macro(prop_val,macros))
)));
var prev_type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(property_schemas),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404)], null));
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(property_schemas),prop))){
} else {
logseq.graph_parser.exporter.create_property_ident(db,all_idents,prop);

var schema_84116 = (function (){var G__83458 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404),prop_type], null);
if(cljs.core.truth_((function (){var fexpr__83459 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),null,new cljs.core.Keyword(null,"node","node",581201198),null], null), null);
return (fexpr__83459.cljs$core$IFn$_invoke$arity$1 ? fexpr__83459.cljs$core$IFn$_invoke$arity$1(prop_type) : fexpr__83459.call(null,prop_type));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83458,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword(null,"many","many",1092119164));
} else {
return G__83458;
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(property_schemas,cljs.core.assoc,prop,schema_84116);
}

if(cljs.core.truth_((function (){var and__5140__auto__ = prev_type;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev_type,prop_type);
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),prev_type,new cljs.core.Keyword(null,"to","to",192099007),prop_type], null)], null);
} else {
return null;
}
});
/**
 * Gets file graph property id given the db graph ident
 */
logseq.graph_parser.exporter.get_file_pid = (function logseq$graph_parser$exporter$get_file_pid(db_ident){
var unique_file_ids = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.property","order-list-type","logseq.property/order-list-type",607817111),new cljs.core.Keyword(null,"logseq.order-list-type","logseq.order-list-type",-1819806366),new cljs.core.Keyword("logseq.property","publishing-public?","logseq.property/publishing-public?",-1094657939),new cljs.core.Keyword(null,"public","public",1566243851)], null);
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(unique_file_ids,db_ident);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(db_ident));
}
});
/**
 * Map of built-in property file ids to their db graph idents
 */
logseq.graph_parser.exporter.built_in_property_file_to_db_idents = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.graph_parser.exporter.get_file_pid(k),k], null);
}),cljs.core.keys(logseq.db.frontend.property.built_in_properties)));
/**
 * All built-in property file ids as a set of keywords
 */
logseq.graph_parser.exporter.all_built_in_property_file_ids = clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(logseq.graph_parser.exporter.built_in_property_file_to_db_idents)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"query-sort-by","query-sort-by",488160033),null,new cljs.core.Keyword(null,"query-table","query-table",2095143554),null,new cljs.core.Keyword(null,"filters","filters",974726919),null,new cljs.core.Keyword(null,"hl-stamp","hl-stamp",-695479513),null,new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"file-path","file-path",-2005501162),null,new cljs.core.Keyword(null,"query-sort-desc","query-sort-desc",123730008),null,new cljs.core.Keyword(null,"query-properties","query-properties",-953532199),null], null), null)),logseq.graph_parser.exporter.template_file_property_names);
/**
 * All built-in properties and classes as a set of keywords
 */
logseq.graph_parser.exporter.all_built_in_names = clojure.set.union.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.exporter.all_built_in_property_file_ids,cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83460_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(p1__83460_SHARP_));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.common.config.library_page_name], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"title","title",636505583),cljs.core.vals(logseq.db.frontend.class$.built_in_classes))))));
/**
 * File-graph built-in property names that are supported. Expressed as set of keywords
 */
logseq.graph_parser.exporter.file_built_in_property_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 23, [new cljs.core.Keyword(null,"tags","tags",1771418977),null,new cljs.core.Keyword(null,"template-including-parent","template-including-parent",1449989665),null,new cljs.core.Keyword(null,"query-sort-by","query-sort-by",488160033),null,new cljs.core.Keyword(null,"logseq.order-list-type","logseq.order-list-type",-1819806366),null,new cljs.core.Keyword(null,"query-table","query-table",2095143554),null,new cljs.core.Keyword(null,"hl-type","hl-type",992471876),null,new cljs.core.Keyword(null,"hl-value","hl-value",-755264538),null,new cljs.core.Keyword(null,"filters","filters",974726919),null,new cljs.core.Keyword(null,"hl-stamp","hl-stamp",-695479513),null,new cljs.core.Keyword(null,"hl-page","hl-page",949012424),null,new cljs.core.Keyword(null,"ls-type","ls-type",1383834313),null,new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"background-color","background-color",570434026),null,new cljs.core.Keyword(null,"public","public",1566243851),null,new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"icon","icon",1679606541),null,new cljs.core.Keyword(null,"exclude-from-graph-view","exclude-from-graph-view",-1509369969),null,new cljs.core.Keyword(null,"alias","alias",-2039751630),null,new cljs.core.Keyword(null,"file-path","file-path",-2005501162),null,new cljs.core.Keyword(null,"query-sort-desc","query-sort-desc",123730008),null,new cljs.core.Keyword(null,"query-properties","query-properties",-953532199),null,new cljs.core.Keyword(null,"hl-color","hl-color",1100781725),null,new cljs.core.Keyword(null,"heading","heading",-1312171873),null], null), null);
if(clojure.set.subset_QMARK_(logseq.graph_parser.exporter.file_built_in_property_names,logseq.graph_parser.exporter.all_built_in_property_file_ids)){
} else {
throw (new Error((""+"Assert failed: "+"All file-built-in properties are used in db graph"+"\n"+"(set/subset? file-built-in-property-names all-built-in-property-file-ids)")));
}
/**
 * Special keywords in previous query table
 */
logseq.graph_parser.exporter.query_table_special_keys = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword(null,"alias","alias",-2039751630),new cljs.core.Keyword("block","alias","block/alias",-2112644699),new cljs.core.Keyword(null,"created-at","created-at",-89248644),new cljs.core.Keyword("block","created-at","block/created-at",1440015),new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336),new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551)], null);
logseq.graph_parser.exporter.translate_query_properties = (function logseq$graph_parser$exporter$translate_query_properties(prop_value,all_idents,options){
var property_classes = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword(null,"property-classes","property-classes",1129964490).cljs$core$IFn$_invoke$arity$1(options)));
try{return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__83462_SHARP_){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.exporter.query_table_special_keys,p1__83462_SHARP_))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.exporter.query_table_special_keys,p1__83462_SHARP_);
} else {
if(cljs.core.truth_((property_classes.cljs$core$IFn$_invoke$arity$1 ? property_classes.cljs$core$IFn$_invoke$arity$1(p1__83462_SHARP_) : property_classes.call(null,p1__83462_SHARP_)))){
return new cljs.core.Keyword("block","tags","block/tags",1814948340);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tags","tags",1771418977),p1__83462_SHARP_)){
return new cljs.core.Keyword("block","tags","block/tags",1814948340);
} else {
return logseq.graph_parser.exporter.get_ident(cljs.core.deref(all_idents),p1__83462_SHARP_);

}
}
}
}),clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(prop_value))));
}catch (e83464){var e = e83464;
console.error("Translating query properties failed with:",e);

return cljs.core.PersistentVector.EMPTY;
}});
logseq.graph_parser.exporter.translate_linked_ref_filters = (function logseq$graph_parser$exporter$translate_linked_ref_filters(prop_value,page_names_to_uuids){
try{var filters = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(prop_value);
var filter_by = cljs.core.group_by(cljs.core.val,filters);
var includes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__83466_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),p1__83466_SHARP_],null));
}),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__83465_SHARP_){
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(page_names_to_uuids),p1__83465_SHARP_);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return console.error((""+"No uuid found for linked reference filter page "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__83465_SHARP_], 0)))));
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(filter_by.cljs$core$IFn$_invoke$arity$1 ? filter_by.cljs$core$IFn$_invoke$arity$1(true) : filter_by.call(null,true)))));
var excludes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__83468_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),p1__83468_SHARP_],null));
}),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__83467_SHARP_){
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(page_names_to_uuids),p1__83467_SHARP_);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return console.error((""+"No uuid found for linked reference filter page "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__83467_SHARP_], 0)))));
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(filter_by.cljs$core$IFn$_invoke$arity$1 ? filter_by.cljs$core$IFn$_invoke$arity$1(false) : filter_by.call(null,false)))));
var G__83473 = cljs.core.PersistentVector.EMPTY;
var G__83473__$1 = ((cljs.core.seq(includes))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__83473,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.property.linked-references","includes","logseq.property.linked-references/includes",1680577703),includes], null)):G__83473);
if(cljs.core.seq(excludes)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__83473__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.property.linked-references","excludes","logseq.property.linked-references/excludes",242675889),excludes], null));
} else {
return G__83473__$1;
}
}catch (e83470){var e = e83470;
return console.error("Translating linked reference filters failed with: ",e);
}});
logseq.graph_parser.exporter.emoji_icons = (new cljs.core.Delay((function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (emoji){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (skin_index,skin){
var native$ = logseq.graph_parser.exporter.goog$module$goog$object.get(skin,"native");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [native$,(function (){var G__83476 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"emoji","emoji",1031230144),new cljs.core.Keyword(null,"id","id",-1388402092),native$], null);
if((skin_index > (0))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83476,new cljs.core.Keyword(null,"skin","skin",2146317821),(skin_index + (1)));
} else {
return G__83476;
}
})()], null);
}),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.exporter.goog$module$goog$object.get(emoji,"skins")));
})),logseq.graph_parser.exporter.goog$module$goog$object.getValues(logseq.graph_parser.exporter.goog$module$goog$object.get(logseq.graph_parser.emoji_data.data,"emojis")));
}),null));
/**
 * Converts a file-graph `:icon` string to a DB icon when the emoji data supports it.
 */
logseq.graph_parser.exporter.file_icon_value__GT_db_icon = (function logseq$graph_parser$exporter$file_icon_value__GT_db_icon(prop_value){
if(typeof prop_value === 'string'){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(logseq.graph_parser.exporter.emoji_icons),clojure.string.trim(prop_value));
} else {
return null;
}
});
logseq.graph_parser.exporter.ignored_built_in_property_value = (function logseq$graph_parser$exporter$ignored_built_in_property_value(prop,prop_value,p__83481){
var map__83484 = p__83481;
var map__83484__$1 = cljs.core.__destructure_map(map__83484);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83484__$1,new cljs.core.Keyword("block","title","block/title",710445684));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83484__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"property","property",-1114278232),prop,new cljs.core.Keyword(null,"value","value",305978217),prop_value,new cljs.core.Keyword(null,"location","location",1815599388),(cljs.core.truth_(name)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),name], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block","block",664686210),title], null))], null);
});
logseq.graph_parser.exporter.update_built_in_property_values = (function logseq$graph_parser$exporter$update_built_in_property_values(props,page_names_to_uuids,p__83487,block,options){
var map__83488 = p__83487;
var map__83488__$1 = cljs.core.__destructure_map(map__83488);
var ignored_properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83488__$1,new cljs.core.Keyword(null,"ignored-properties","ignored-properties",-2000184055));
var all_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83488__$1,new cljs.core.Keyword(null,"all-idents","all-idents",-980997938));
var m = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__83491){
var vec__83492 = p__83491;
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83492,(0),null);
var prop_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83492,(1),null);
if(cljs.core.truth_((function (){var fexpr__83495 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hl-stamp","hl-stamp",-695479513),null,new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"file-path","file-path",-2005501162),null], null), null);
return (fexpr__83495.cljs$core$IFn$_invoke$arity$1 ? fexpr__83495.cljs$core$IFn$_invoke$arity$1(prop) : fexpr__83495.call(null,prop));
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ignored_properties,cljs.core.conj,logseq.graph_parser.exporter.ignored_built_in_property_value(prop,prop_value,block));

return null;
} else {
var G__83496 = prop;
var G__83496__$1 = (((G__83496 instanceof cljs.core.Keyword))?G__83496.fqn:null);
switch (G__83496__$1) {
case "icon":
var temp__5823__auto__ = logseq.graph_parser.exporter.file_icon_value__GT_db_icon(prop_value);
if(cljs.core.truth_(temp__5823__auto__)){
var icon = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285),icon], null)], null);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ignored_properties,cljs.core.conj,logseq.graph_parser.exporter.ignored_built_in_property_value(prop,prop_value,block));

return null;
}

break;
case "query-properties":
var temp__5825__auto__ = cljs.core.not_empty(logseq.graph_parser.exporter.translate_query_properties(prop_value,all_idents,options));
if(cljs.core.truth_(temp__5825__auto__)){
var cols = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.property.table","ordered-columns","logseq.property.table/ordered-columns",1485587100),cols], null)], null);
} else {
return null;
}

break;
case "query-table":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.property.view","type","logseq.property.view/type",218237607),(cljs.core.truth_(prop_value)?new cljs.core.Keyword("logseq.property.view","type.table","logseq.property.view/type.table",194254240):new cljs.core.Keyword("logseq.property.view","type.list","logseq.property.view/type.list",-1164828502))], null)], null);

break;
case "query-sort-by":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.property.table","sorting","logseq.property.table/sorting",208102594),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__5142__auto__ = (function (){var G__83499 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(prop_value);
return (logseq.graph_parser.exporter.query_table_special_keys.cljs$core$IFn$_invoke$arity$1 ? logseq.graph_parser.exporter.query_table_special_keys.cljs$core$IFn$_invoke$arity$1(G__83499) : logseq.graph_parser.exporter.query_table_special_keys.call(null,G__83499));
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.graph_parser.exporter.get_ident(cljs.core.deref(all_idents),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(prop_value));
}
})(),new cljs.core.Keyword(null,"asc?","asc?",891093427),true], null)], null)], null)], null);

break;
case "query-sort-desc":
return null;

break;
case "filters":
return logseq.graph_parser.exporter.translate_linked_ref_filters(prop_value,page_names_to_uuids);

break;
case "ls-type":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.property","ls-type","logseq.property/ls-type",326979345),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(prop_value)], null)], null);

break;
case "hl-color":
var color_text_idents = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"db-ident","db-ident",-992686073)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.property.built_in_properties,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.property.pdf","hl-color","logseq.property.pdf/hl-color",-674793887),new cljs.core.Keyword(null,"closed-values","closed-values",364658811)], null))));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.property.pdf","hl-color","logseq.property.pdf/hl-color",-674793887),cljs.core.get.cljs$core$IFn$_invoke$arity$2(color_text_idents,prop_value)], null)], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(logseq.graph_parser.exporter.built_in_property_file_to_db_idents.cljs$core$IFn$_invoke$arity$1 ? logseq.graph_parser.exporter.built_in_property_file_to_db_idents.cljs$core$IFn$_invoke$arity$1(prop) : logseq.graph_parser.exporter.built_in_property_file_to_db_idents.call(null,prop)),prop_value], null)], null);

}
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0)));
var G__83502 = m;
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.contains_QMARK_(props,new cljs.core.Keyword(null,"query-sort-desc","query-sort-desc",123730008));
if(and__5140__auto__){
return new cljs.core.Keyword(null,"query-sort-by","query-sort-by",488160033).cljs$core$IFn$_invoke$arity$1(props);
} else {
return and__5140__auto__;
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__83502,new cljs.core.Keyword("logseq.property.table","sorting","logseq.property.table/sorting",208102594),(function (v){
return cljs.core.assoc_in(v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.Keyword(null,"asc?","asc?",891093427)], null),cljs.core.not(new cljs.core.Keyword(null,"query-sort-desc","query-sort-desc",123730008).cljs$core$IFn$_invoke$arity$1(props)));
}));
} else {
return G__83502;
}
});
logseq.graph_parser.exporter.property_ref_name__GT_page_name = (function logseq$graph_parser$exporter$property_ref_name__GT_page_name(page_name,user_config){
var vec__83503 = logseq.graph_parser.block.convert_page_if_journal(page_name,logseq.graph_parser.exporter.get_date_formatter(user_config),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"export-to-db-graph?","export-to-db-graph?",2008973423),true], null));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83503,(0),null);
var page_name_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83503,(1),null);
var _journal_day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83503,(2),null);
return page_name_SINGLEQUOTE_;
});
/**
 * Converts :node or :date names to entity values
 */
logseq.graph_parser.exporter.update_page_or_date_values = (function logseq$graph_parser$exporter$update_page_or_date_values(page_names_to_uuids,property_values,user_config){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83506_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),logseq.graph_parser.exporter.get_page_uuid(page_names_to_uuids,logseq.graph_parser.exporter.property_ref_name__GT_page_name(p1__83506_SHARP_,user_config),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"original-name","original-name",-1427702839),p1__83506_SHARP_], null))],null));
}),property_values));
});
/**
 * Handles a property's schema changing across blocks. Handling usually means
 *   converting a property value to a new changed value or nil if the property is
 *   to be ignored. Sometimes handling a property change results in changing a
 *   property's previous usages instead of its current value e.g. when changing to
 *   a :default type. This is done by adding an entry to upstream-properties and
 *   building the additional tx to ensure this happens
 */
logseq.graph_parser.exporter.handle_changed_property = (function logseq$graph_parser$exporter$handle_changed_property(val,prop,page_names_to_uuids,properties_text_values,p__83507,p__83508){
var map__83509 = p__83507;
var map__83509__$1 = cljs.core.__destructure_map(map__83509);
var ignored_properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83509__$1,new cljs.core.Keyword(null,"ignored-properties","ignored-properties",-2000184055));
var property_schemas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83509__$1,new cljs.core.Keyword(null,"property-schemas","property-schemas",-1631291569));
var map__83510 = p__83508;
var map__83510__$1 = cljs.core.__destructure_map(map__83510);
var property_changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83510__$1,new cljs.core.Keyword(null,"property-changes","property-changes",-938944732));
var log_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83510__$1,new cljs.core.Keyword(null,"log-fn","log-fn",-2003241282));
var upstream_properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83510__$1,new cljs.core.Keyword(null,"upstream-properties","upstream-properties",1757374284));
var user_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83510__$1,new cljs.core.Keyword(null,"user-config","user-config",-1138679827));
var type_change = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(property_changes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,new cljs.core.Keyword(null,"type","type",1174270348)], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(type_change))){
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties_text_values,prop);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(val));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"date","date",-1463434462)], null),type_change)){
return logseq.graph_parser.exporter.update_page_or_date_values(page_names_to_uuids,val,user_config);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"node","node",581201198)], null),type_change)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(upstream_properties,cljs.core.assoc,prop,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404),new cljs.core.Keyword(null,"node","node",581201198)], null),new cljs.core.Keyword(null,"from-type","from-type",-2097724678),new cljs.core.Keyword(null,"date","date",-1463434462)], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(property_schemas,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404)], null),new cljs.core.Keyword(null,"node","node",581201198));

return logseq.graph_parser.exporter.update_page_or_date_values(page_names_to_uuids,val,user_config);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(type_change))){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(upstream_properties),prop))){
var G__83511_84126 = new cljs.core.Keyword(null,"prop-to-change-ignored","prop-to-change-ignored",89276774);
var G__83512_84127 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"property","property",-1114278232),prop,new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"change","change",-1163046502),type_change], null);
(log_fn.cljs$core$IFn$_invoke$arity$2 ? log_fn.cljs$core$IFn$_invoke$arity$2(G__83511_84126,G__83512_84127) : log_fn.call(null,G__83511_84126,G__83512_84127));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ignored_properties,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"property","property",-1114278232),prop,new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.get.cljs$core$IFn$_invoke$arity$2(property_changes,prop)], null));

return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(upstream_properties,cljs.core.assoc,prop,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404),new cljs.core.Keyword(null,"default","default",-1987822328)], null),new cljs.core.Keyword(null,"from-type","from-type",-2097724678),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(type_change)], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(property_schemas,cljs.core.assoc,prop,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404),new cljs.core.Keyword(null,"default","default",-1987822328)], null));

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties_text_values,prop);
}
} else {
var G__83513_84128 = new cljs.core.Keyword(null,"prop-change-ignored","prop-change-ignored",1905674983);
var G__83514_84129 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"property","property",-1114278232),prop,new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"change","change",-1163046502),type_change], null);
(log_fn.cljs$core$IFn$_invoke$arity$2 ? log_fn.cljs$core$IFn$_invoke$arity$2(G__83513_84128,G__83514_84129) : log_fn.call(null,G__83513_84128,G__83514_84129));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ignored_properties,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"property","property",-1114278232),prop,new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.get.cljs$core$IFn$_invoke$arity$2(property_changes,prop)], null));

return null;

}
}
}
}
});
logseq.graph_parser.exporter.update_user_property_values = (function logseq$graph_parser$exporter$update_user_property_values(props,page_names_to_uuids,properties_text_values,p__83515,p__83516){
var map__83517 = p__83515;
var map__83517__$1 = cljs.core.__destructure_map(map__83517);
var import_state = map__83517__$1;
var property_schemas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83517__$1,new cljs.core.Keyword(null,"property-schemas","property-schemas",-1631291569));
var map__83518 = p__83516;
var map__83518__$1 = cljs.core.__destructure_map(map__83518);
var options = map__83518__$1;
var property_changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83518__$1,new cljs.core.Keyword(null,"property-changes","property-changes",-938944732));
var user_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83518__$1,new cljs.core.Keyword(null,"user-config","user-config",-1138679827));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__83519){
var vec__83520 = p__83519;
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83520,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83520,(1),null);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(property_changes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,new cljs.core.Keyword(null,"type","type",1174270348)], null)))){
var temp__5825__auto__ = logseq.graph_parser.exporter.handle_changed_property(val,prop,page_names_to_uuids,properties_text_values,import_state,options);
if(cljs.core.truth_(temp__5825__auto__)){
var val_SINGLEQUOTE_ = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,val_SINGLEQUOTE_], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,((cljs.core.set_QMARK_(val))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(property_schemas),prop))))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties_text_values,prop):logseq.graph_parser.exporter.update_page_or_date_values(page_names_to_uuids,val,user_config)):val)], null);
}
}),props));
});
/**
 * Given a new block and its properties, creates a map of properties which have values of property value tx.
 * Similar to sqlite.build/->property-value-tx-m
 */
logseq.graph_parser.exporter.__GT_property_value_tx_m = (function logseq$graph_parser$exporter$__GT_property_value_tx_m(new_block,properties,get_schema_fn,all_idents){
return logseq.db.frontend.property.build.build_property_values_tx_m(new_block,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__83523){
var vec__83524 = p__83523;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83524,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83524,(1),null);
var temp__5823__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.property.built_in_properties,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"type","type",1174270348)], null));
if(cljs.core.truth_(temp__5823__auto__)){
var built_in_type = temp__5823__auto__;
if(cljs.core.truth_((function (){var and__5140__auto__ = (logseq.db.frontend.property.type.value_ref_property_types.cljs$core$IFn$_invoke$arity$1 ? logseq.db.frontend.property.type.value_ref_property_types.cljs$core$IFn$_invoke$arity$1(built_in_type) : logseq.db.frontend.property.type.value_ref_property_types.call(null,built_in_type));
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.property.built_in_properties,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"closed-values","closed-values",364658811)], null)));
} else {
return and__5140__auto__;
}
})())){
var property_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),k,new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404),built_in_type], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [property_map,v], null);
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var G__83527 = new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1((get_schema_fn.cljs$core$IFn$_invoke$arity$1 ? get_schema_fn.cljs$core$IFn$_invoke$arity$1(k) : get_schema_fn.call(null,k)));
return (logseq.db.frontend.property.type.value_ref_property_types.cljs$core$IFn$_invoke$arity$1 ? logseq.db.frontend.property.type.value_ref_property_types.cljs$core$IFn$_invoke$arity$1(G__83527) : logseq.db.frontend.property.type.value_ref_property_types.call(null,G__83527));
})())){
var property_map = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),logseq.graph_parser.exporter.get_ident(all_idents,k),new cljs.core.Keyword(null,"original-property-id","original-property-id",-123524497),k], null),(get_schema_fn.cljs$core$IFn$_invoke$arity$1 ? get_schema_fn.cljs$core$IFn$_invoke$arity$1(k) : get_schema_fn.call(null,k))], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [property_map,v], null);
} else {
return null;
}
}
}),properties));
});
/**
 * For given block properties, builds property values tx and returns a map with
 *   updated properties in :block-properties and any property values tx in :pvalues-tx
 */
logseq.graph_parser.exporter.build_properties_and_values = (function logseq$graph_parser$exporter$build_properties_and_values(props,_db,page_names_to_uuids,p__83531,p__83532){
var map__83533 = p__83531;
var map__83533__$1 = cljs.core.__destructure_map(map__83533);
var block = map__83533__$1;
var properties_text_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83533__$1,new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708));
var map__83534 = p__83532;
var map__83534__$1 = cljs.core.__destructure_map(map__83534);
var options = map__83534__$1;
var import_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83534__$1,new cljs.core.Keyword(null,"import-state","import-state",1493794865));
var user_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83534__$1,new cljs.core.Keyword(null,"user-options","user-options",-84696866));
var map__83535 = import_state;
var map__83535__$1 = cljs.core.__destructure_map(map__83535);
var all_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83535__$1,new cljs.core.Keyword(null,"all-idents","all-idents",-980997938));
var property_schemas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83535__$1,new cljs.core.Keyword(null,"property-schemas","property-schemas",-1631291569));
var get_ident_SINGLEQUOTE_ = (function (p1__83528_SHARP_){
return logseq.graph_parser.exporter.get_ident(cljs.core.deref(all_idents),p1__83528_SHARP_);
});
var user_properties = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,props,logseq.graph_parser.exporter.file_built_in_property_names);
if(cljs.core.seq(user_properties)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"block-properties-text-values","block-properties-text-values",-525710723).cljs$core$IFn$_invoke$arity$1(import_state),cljs.core.assoc,(cljs.core.truth_(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block))?logseq.graph_parser.exporter.get_page_uuid(page_names_to_uuids,cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.graph-parser.exporter","original-name","logseq.graph-parser.exporter/original-name",-559626865),new cljs.core.Keyword("block","name","block/name",1619760316))(block),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block","block",664686210),block], null)):new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)),properties_text_values);
} else {
}

var props_SINGLEQUOTE_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.graph_parser.exporter.update_built_in_property_values(cljs.core.select_keys(props,logseq.graph_parser.exporter.file_built_in_property_names),page_names_to_uuids,cljs.core.select_keys(import_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ignored-properties","ignored-properties",-2000184055),new cljs.core.Keyword(null,"all-idents","all-idents",-980997938)], null)),cljs.core.select_keys(block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","title","block/title",710445684)], null)),cljs.core.select_keys(user_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"property-classes","property-classes",1129964490)], null))),logseq.graph_parser.exporter.update_user_property_values(user_properties,page_names_to_uuids,properties_text_values,import_state,options)], 0));
var pvalue_tx_m = logseq.graph_parser.exporter.__GT_property_value_tx_m(block,props_SINGLEQUOTE_,(function (p1__83529_SHARP_){
return logseq.graph_parser.exporter.get_property_schema(cljs.core.deref(property_schemas),p1__83529_SHARP_);
}),cljs.core.deref(all_idents));
var block_properties = cljs.core.update_keys(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props_SINGLEQUOTE_,logseq.db.frontend.property.build.build_properties_with_ref_values(pvalue_tx_m)], 0)),get_ident_SINGLEQUOTE_);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block-properties","block-properties",306554248),block_properties,new cljs.core.Keyword(null,"pvalues-tx","pvalues-tx",-418668372),cljs.core.into.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__83530_SHARP_){
if(cljs.core.set_QMARK_(p1__83530_SHARP_)){
return p1__83530_SHARP_;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__83530_SHARP_], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(pvalue_tx_m)], 0)))], null);
});
/**
 * Ignore built-in properties that are already imported or not supported in db graphs
 */
logseq.graph_parser.exporter.ignored_built_in_properties = new cljs.core.PersistentVector(null, 31, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"alias","alias",-2039751630),new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"now","now",-1650525531),new cljs.core.Keyword(null,"later","later",961723974),new cljs.core.Keyword(null,"doing","doing",-3342172),new cljs.core.Keyword(null,"done","done",-889844188),new cljs.core.Keyword(null,"canceled","canceled",452728464),new cljs.core.Keyword(null,"cancelled","cancelled",488726224),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),new cljs.core.Keyword(null,"todo","todo",-1046442570),new cljs.core.Keyword(null,"wait","wait",-260664777),new cljs.core.Keyword(null,"waiting","waiting",895906735),new cljs.core.Keyword(null,"background-image","background-image",-1142314704),new cljs.core.Keyword(null,"macros","macros",811339431),new cljs.core.Keyword("logseq.query","nlp-date","logseq.query/nlp-date",-145078221),new cljs.core.Keyword(null,"card-last-interval","card-last-interval",-1889773077),new cljs.core.Keyword(null,"card-repeats","card-repeats",1071489736),new cljs.core.Keyword(null,"card-last-reviewed","card-last-reviewed",-965683716),new cljs.core.Keyword(null,"card-next-schedule","card-next-schedule",2132454825),new cljs.core.Keyword(null,"card-ease-factor","card-ease-factor",-2122824488),new cljs.core.Keyword(null,"card-last-score","card-last-score",2121541607),new cljs.core.Keyword(null,"logseq.color","logseq.color",-42542213),new cljs.core.Keyword(null,"logseq.table.borders","logseq.table.borders",-1178350466),new cljs.core.Keyword(null,"logseq.table.stripes","logseq.table.stripes",1430094207),new cljs.core.Keyword(null,"logseq.table.max-width","logseq.table.max-width",-767146077),new cljs.core.Keyword(null,"logseq.table.version","logseq.table.version",63322881),new cljs.core.Keyword(null,"logseq.table.compact","logseq.table.compact",615654834),new cljs.core.Keyword(null,"logseq.table.headers","logseq.table.headers",-900536583),new cljs.core.Keyword(null,"logseq.table.hover","logseq.table.hover",-1465923417)], null);
/**
 * Updates page and block properties before their property types are inferred
 */
logseq.graph_parser.exporter.pre_update_properties = (function logseq$graph_parser$exporter$pre_update_properties(properties,class_related_properties,p__83536){
var map__83537 = p__83536;
var map__83537__$1 = cljs.core.__destructure_map(map__83537);
var preserve_empty_properties_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83537__$1,new cljs.core.Keyword(null,"preserve-empty-properties?","preserve-empty-properties?",-2060450647));
var dissoced_props = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(logseq.graph_parser.exporter.ignored_built_in_properties,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"created-at","created-at",-89248644),new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([class_related_properties], 0));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__83538){
var vec__83539 = p__83538;
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83539,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83539,(1),null);
if((!(cljs.core.contains_QMARK_(logseq.graph_parser.exporter.file_built_in_property_names,prop)))){
if(typeof val === 'string'){
if(cljs.core.truth_((function (){var or__5142__auto__ = preserve_empty_properties_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (!(clojure.string.blank_QMARK_(val)));
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,(function (){var n = cljs.core.parse_double(val);
if(cljs.core.truth_((function (){var and__5140__auto__ = n;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)),clojure.string.trim(val));
} else {
return and__5140__auto__;
}
})())){
return n;
} else {
return val;
}
})()], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,val], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,val], null);
}
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,properties,dissoced_props)));
});
/**
 * Returns a map of :block with updated block and :properties-tx with any properties tx.
 * Handles modifying block properties, updating classes from property-classes
 *   and removing any deprecated property related attributes. Before updating most
 *   block properties, their property schemas are inferred as that can affect how
 *   a property is updated. Only infers property schemas on user properties as
 *   built-in ones must not change
 */
logseq.graph_parser.exporter.handle_page_and_block_properties = (function logseq$graph_parser$exporter$handle_page_and_block_properties(p__83543,db,page_names_to_uuids,refs,p__83544){
var map__83545 = p__83543;
var map__83545__$1 = cljs.core.__destructure_map(map__83545);
var block = map__83545__$1;
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83545__$1,new cljs.core.Keyword("block","properties","block/properties",708347145));
var map__83546 = p__83544;
var map__83546__$1 = cljs.core.__destructure_map(map__83546);
var options = map__83546__$1;
var map__83547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83546__$1,new cljs.core.Keyword(null,"user-options","user-options",-84696866));
var map__83547__$1 = cljs.core.__destructure_map(map__83547);
var property_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83547__$1,new cljs.core.Keyword(null,"property-classes","property-classes",1129964490));
var property_parent_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83547__$1,new cljs.core.Keyword(null,"property-parent-classes","property-parent-classes",1972741305));
var import_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83546__$1,new cljs.core.Keyword(null,"import-state","import-state",1493794865));
var macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83546__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(((cljs.core.seq(properties))?(function (){var preserve_empty_properties_QMARK_ = cljs.core.contains_QMARK_((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"preserve-empty-property-block-uuids","preserve-empty-property-block-uuids",-1063010862).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
var classes_from_properties = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__83549){
var vec__83550 = p__83549;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83550,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83550,(1),null);
if(cljs.core.coll_QMARK_(v)){
return v;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(properties,property_classes)], 0)));
var properties_SINGLEQUOTE_ = logseq.graph_parser.exporter.pre_update_properties(properties,cljs.core.into.cljs$core$IFn$_invoke$arity$2(property_classes,property_parent_classes),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"preserve-empty-properties?","preserve-empty-properties?",-2060450647),preserve_empty_properties_QMARK_], null));
var properties_to_infer = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,properties_SINGLEQUOTE_,logseq.graph_parser.exporter.file_built_in_property_names);
var property_changes = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__83553){
var vec__83554 = p__83553;
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83554,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83554,(1),null);
var temp__5825__auto__ = logseq.graph_parser.exporter.infer_property_schema_and_get_property_change(db,val,prop,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708).cljs$core$IFn$_invoke$arity$1(block),prop),refs,import_state,macros);
if(cljs.core.truth_(temp__5825__auto__)){
var property_change = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,property_change], null);
} else {
return null;
}
}),properties_to_infer));
var options_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"property-changes","property-changes",-938944732),property_changes);
var map__83548 = logseq.graph_parser.exporter.build_properties_and_values(properties_SINGLEQUOTE_,db,page_names_to_uuids,cljs.core.select_keys(block,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("logseq.graph-parser.exporter","original-name","logseq.graph-parser.exporter/original-name",-559626865)], null)),options_SINGLEQUOTE_);
var map__83548__$1 = cljs.core.__destructure_map(map__83548);
var block_properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83548__$1,new cljs.core.Keyword(null,"block-properties","block-properties",306554248));
var pvalues_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83548__$1,new cljs.core.Keyword(null,"pvalues-tx","pvalues-tx",-418668372));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),(function (){var G__83557 = block;
var G__83557__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__83557,block_properties], 0))
;
if(cljs.core.seq(classes_from_properties)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__83557__$1,new cljs.core.Keyword("block","tags","block/tags",1814948340),(function (tags){
var tags_SINGLEQUOTE_ = ((cljs.core.sequential_QMARK_(tags))?tags:cljs.core.set(tags));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(tags_SINGLEQUOTE_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83542_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("block.temp","new-class","block.temp/new-class",348616617)],[p1__83542_SHARP_]);
}),classes_from_properties));
}));
} else {
return G__83557__$1;
}
})(),new cljs.core.Keyword(null,"properties-tx","properties-tx",-1476843279),pvalues_tx], null);
})():new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),block,new cljs.core.Keyword(null,"properties-tx","properties-tx",-1476843279),cljs.core.PersistentVector.EMPTY], null)),new cljs.core.Keyword(null,"block","block",664686210),cljs.core.dissoc,new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708),new cljs.core.Keyword("block","properties-order","block/properties-order",-968493873),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","invalid-properties","block/invalid-properties",1509592872)], 0));
});
/**
 * Adds page properties including special handling for :logseq.property.class/extends or :block/parent
 */
logseq.graph_parser.exporter.handle_page_properties = (function logseq$graph_parser$exporter$handle_page_properties(p__83558,db,p__83559,refs,p__83560){
var map__83561 = p__83558;
var map__83561__$1 = cljs.core.__destructure_map(map__83561);
var block_STAR_ = map__83561__$1;
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83561__$1,new cljs.core.Keyword("block","properties","block/properties",708347145));
var map__83562 = p__83559;
var map__83562__$1 = cljs.core.__destructure_map(map__83562);
var page_names_to_uuids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83562__$1,new cljs.core.Keyword(null,"page-names-to-uuids","page-names-to-uuids",-875423247));
var classes_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83562__$1,new cljs.core.Keyword(null,"classes-tx","classes-tx",664490242));
var map__83563 = p__83560;
var map__83563__$1 = cljs.core.__destructure_map(map__83563);
var options = map__83563__$1;
var user_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83563__$1,new cljs.core.Keyword(null,"user-options","user-options",-84696866));
var log_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83563__$1,new cljs.core.Keyword(null,"log-fn","log-fn",-2003241282));
var import_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83563__$1,new cljs.core.Keyword(null,"import-state","import-state",1493794865));
var map__83564 = logseq.graph_parser.exporter.handle_page_and_block_properties(block_STAR_,db,page_names_to_uuids,refs,options);
var map__83564__$1 = cljs.core.__destructure_map(map__83564);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83564__$1,new cljs.core.Keyword(null,"block","block",664686210));
var properties_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83564__$1,new cljs.core.Keyword(null,"properties-tx","properties-tx",-1476843279));
var block_SINGLEQUOTE_ = (function (){var temp__5823__auto__ = cljs.core.seq(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__83565){
var vec__83566 = p__83565;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83566,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83566,(1),null);
if(cljs.core.coll_QMARK_(v)){
return v;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(properties,new cljs.core.Keyword(null,"property-parent-classes","property-parent-classes",1972741305).cljs$core$IFn$_invoke$arity$1(user_options))], 0))));
if(temp__5823__auto__){
var parent_classes_from_properties = temp__5823__auto__;
var _ = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"classes-from-property-parents","classes-from-property-parents",371081959).cljs$core$IFn$_invoke$arity$1(import_state),cljs.core.conj,new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block_STAR_));
var class_m = logseq.graph_parser.exporter.find_or_create_class.cljs$core$IFn$_invoke$arity$4(db,cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.graph-parser.exporter","original-title","logseq.graph-parser.exporter/original-title",881456337),new cljs.core.Keyword("block","title","block/title",710445684))(block),new cljs.core.Keyword(null,"all-idents","all-idents",-980997938).cljs$core$IFn$_invoke$arity$1(import_state),block);
var class_m_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block,class_m], 0)),new cljs.core.Keyword("block","namespace","block/namespace",-282500695)),new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803),(function (){var new_class = cljs.core.first(parent_classes_from_properties);
var class_m__$1 = logseq.graph_parser.exporter.find_or_create_class.cljs$core$IFn$_invoke$arity$3(db,new_class,new cljs.core.Keyword(null,"all-idents","all-idents",-980997938).cljs$core$IFn$_invoke$arity$1(import_state));
var class_m_SINGLEQUOTE_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([class_m__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),logseq.graph_parser.exporter.find_or_gen_class_uuid(db,page_names_to_uuids,logseq.common.util.page_name_sanity_lc(new_class),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(class_m__$1))], null)], 0));
if((cljs.core.count(parent_classes_from_properties) > (1))){
(log_fn.cljs$core$IFn$_invoke$arity$4 ? log_fn.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"skipped-parent-classes","skipped-parent-classes",276764793),"Only one parent class is allowed so skipped ones after the first one",new cljs.core.Keyword(null,"classes","classes",2037804510),parent_classes_from_properties) : log_fn.call(null,new cljs.core.Keyword(null,"skipped-parent-classes","skipped-parent-classes",276764793),"Only one parent class is allowed so skipped ones after the first one",new cljs.core.Keyword(null,"classes","classes",2037804510),parent_classes_from_properties));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"new-class?","new-class?",1140916821).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(class_m__$1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(classes_tx,cljs.core.conj,class_m_SINGLEQUOTE_);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(class_m_SINGLEQUOTE_)], null);
})());
return class_m_SINGLEQUOTE_;
} else {
return logseq.graph_parser.exporter.replace_namespace_with_parent(block,page_names_to_uuids,new cljs.core.Keyword("block","parent","block/parent",-918309064));
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),block_SINGLEQUOTE_,new cljs.core.Keyword(null,"properties-tx","properties-tx",-1476843279),properties_tx], null);
});
/**
 * Remove list of keys from a given map string while preserving whitespace
 */
logseq.graph_parser.exporter.pretty_print_dissoc = (function logseq$graph_parser$exporter$pretty_print_dissoc(s,dissoc_keys){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(borkdude.rewrite_edn.dissoc,borkdude.rewrite_edn.parse_string(s),dissoc_keys)));
});
logseq.graph_parser.exporter.migrate_advanced_query_string = (function logseq$graph_parser$exporter$migrate_advanced_query_string(query_str){
try{return logseq.graph_parser.exporter.pretty_print_dissoc(query_str,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"group-by-page?","group-by-page?",1520059448),new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674)], null));
}catch (e83569){var _e = e83569;
console.error("Failed to parse advanced query string. Falling back to full query string: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([query_str], 0)));

var temp__5823__auto__ = cljs.core.not_empty(logseq.common.util.safe_read_map_string.cljs$core$IFn$_invoke$arity$1(query_str));
if(cljs.core.truth_(temp__5823__auto__)){
var query_map = temp__5823__auto__;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(query_map,new cljs.core.Keyword(null,"title","title",636505583),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"group-by-page?","group-by-page?",1520059448),new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674)], 0))], 0));
} else {
return query_str;
}
}});

logseq.graph_parser.exporter.extract_block_list_item = (function logseq$graph_parser$exporter$extract_block_list_item(p__83571){
var map__83572 = p__83571;
var map__83572__$1 = cljs.core.__destructure_map(map__83572);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83572__$1,new cljs.core.Keyword(null,"content","content",15833224));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83572__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83572__$1,new cljs.core.Keyword(null,"number","number",1570378438));
var checkbox = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83572__$1,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655));
var content_STAR_ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__83570_SHARP_){
var G__83573 = p1__83570_SHARP_;
var G__83574 = cljs.core.PersistentArrayMap.EMPTY;
return (logseq.graph_parser.exporter.ast__GT_text.cljs$core$IFn$_invoke$arity$2 ? logseq.graph_parser.exporter.ast__GT_text.cljs$core$IFn$_invoke$arity$2(G__83573,G__83574) : logseq.graph_parser.exporter.ast__GT_text.call(null,G__83573,G__83574));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([content], 0));
var number_STAR_ = (cljs.core.truth_(number)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(number)+". "):"* ");
var checkbox_STAR_ = (((!((checkbox == null))))?((cljs.core.boolean$(checkbox))?"[X]":"[ ]"):"");
var items_STAR_ = (logseq.graph_parser.exporter.extract_block_list.cljs$core$IFn$_invoke$arity$3 ? logseq.graph_parser.exporter.extract_block_list.cljs$core$IFn$_invoke$arity$3(items,new cljs.core.Keyword(null,"in-list?","in-list?",-632658365),true) : logseq.graph_parser.exporter.extract_block_list.call(null,items,new cljs.core.Keyword(null,"in-list?","in-list?",-632658365),true));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [number_STAR_,checkbox_STAR_," "], null),content_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n"], null),items_STAR_,((cljs.core.seq(items_STAR_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n"], null):null)], 0));
});
logseq.graph_parser.exporter.extract_block_list = (function logseq$graph_parser$exporter$extract_block_list(var_args){
var args__5882__auto__ = [];
var len__5876__auto___84149 = arguments.length;
var i__5877__auto___84150 = (0);
while(true){
if((i__5877__auto___84150 < len__5876__auto___84149)){
args__5882__auto__.push((arguments[i__5877__auto___84150]));

var G__84151 = (i__5877__auto___84150 + (1));
i__5877__auto___84150 = G__84151;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return logseq.graph_parser.exporter.extract_block_list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(logseq.graph_parser.exporter.extract_block_list.cljs$core$IFn$_invoke$arity$variadic = (function (l,p__83577){
var map__83578 = p__83577;
var map__83578__$1 = cljs.core.__destructure_map(map__83578);
var in_list_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83578__$1,new cljs.core.Keyword(null,"in-list?","in-list?",-632658365));
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(in_list_QMARK_)?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n"], null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(logseq.graph_parser.exporter.extract_block_list_item,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((cljs.core.count(l) > (0))) && (cljs.core.not(in_list_QMARK_))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n\n"], null):null)], 0)));
}));

(logseq.graph_parser.exporter.extract_block_list.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(logseq.graph_parser.exporter.extract_block_list.cljs$lang$applyTo = (function (seq83575){
var G__83576 = cljs.core.first(seq83575);
var seq83575__$1 = cljs.core.next(seq83575);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__83576,seq83575__$1);
}));

/**
 * Given an ast block, convert it to text for use as a block title. This is a
 *   slimmer version of handler.export.text/export-blocks-as-markdown
 */
logseq.graph_parser.exporter.ast__GT_text = (function logseq$graph_parser$exporter$ast__GT_text(ast_block,p__83579){
var map__83580 = p__83579;
var map__83580__$1 = cljs.core.__destructure_map(map__83580);
var log_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83580__$1,new cljs.core.Keyword(null,"log-fn","log-fn",-2003241282),cljs.core.prn);
var extract = (function logseq$graph_parser$exporter$ast__GT_text_$_extract(node){
var extract_emphasis = (function logseq$graph_parser$exporter$ast__GT_text_$_extract_$_extract_emphasis(node__$1){
var vec__83581 = node__$1;
var vec__83584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83581,(0),null);
var type_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83584,(0),null);
var coll_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83581,(1),null);
var G__83587 = type_SINGLEQUOTE_;
switch (G__83587) {
case "Bold":
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["**"], null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(logseq$graph_parser$exporter$ast__GT_text_$_extract,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll_SINGLEQUOTE_], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["**"], null)], 0)));

break;
case "Italic":
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*"], null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(logseq$graph_parser$exporter$ast__GT_text_$_extract,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll_SINGLEQUOTE_], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*"], null)], 0)));

break;
case "Strike_through":
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~~"], null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(logseq$graph_parser$exporter$ast__GT_text_$_extract,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll_SINGLEQUOTE_], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~~"], null)], 0)));

break;
case "Highlight":
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^^"], null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(logseq$graph_parser$exporter$ast__GT_text_$_extract,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll_SINGLEQUOTE_], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^^"], null)], 0)));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Failed to wrap Emphasis AST block of type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_SINGLEQUOTE_], 0)))),cljs.core.PersistentArrayMap.EMPTY);

}
});
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.vector_QMARK_(node);
if(and__5140__auto__){
var G__83589 = cljs.core.first(node);
var fexpr__83588 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Inline_Html",null,"Inline_Hiccup",null,"Plain",null], null), null);
return (fexpr__83588.cljs$core$IFn$_invoke$arity$1 ? fexpr__83588.cljs$core$IFn$_invoke$arity$1(G__83589) : fexpr__83588.call(null,G__83589));
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(node)], null);
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.vector_QMARK_(node);
if(and__5140__auto__){
var G__83591 = cljs.core.first(node);
var fexpr__83590 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Hard_Break_Line",null,"Break_Line",null], null), null);
return (fexpr__83590.cljs$core$IFn$_invoke$arity$1 ? fexpr__83590.cljs$core$IFn$_invoke$arity$1(G__83591) : fexpr__83590.call(null,G__83591));
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n"], null);
} else {
if(((cljs.core.vector_QMARK_(node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(node),"Link")))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full_text","full_text",1634289075).cljs$core$IFn$_invoke$arity$1(cljs.core.second(node))], null);
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.vector_QMARK_(node);
if(and__5140__auto__){
var G__83593 = cljs.core.first(node);
var fexpr__83592 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Paragraph",null,"Quote",null], null), null);
return (fexpr__83592.cljs$core$IFn$_invoke$arity$1 ? fexpr__83592.cljs$core$IFn$_invoke$arity$1(G__83593) : fexpr__83592.call(null,G__83593));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(logseq$graph_parser$exporter$ast__GT_text_$_extract,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.second(node)], 0));
} else {
if(((cljs.core.vector_QMARK_(node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(node),"Tag")))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#"], null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(logseq$graph_parser$exporter$ast__GT_text_$_extract,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.second(node)], 0)));
} else {
if(((cljs.core.vector_QMARK_(node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(node),"Emphasis")))){
return extract_emphasis(cljs.core.second(node));
} else {
if(((cljs.core.vector_QMARK_(node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Custom","query"], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),node))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(node,(4))], null);
} else {
if(((cljs.core.vector_QMARK_(node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(node),"Code")))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`",cljs.core.second(node),"`"], null);
} else {
if(((cljs.core.vector_QMARK_(node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(node),"Email")))){
var map__83594 = cljs.core.second(node);
var map__83594__$1 = cljs.core.__destructure_map(map__83594);
var local_part = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83594__$1,new cljs.core.Keyword(null,"local_part","local_part",-1705904558));
var domain = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83594__$1,new cljs.core.Keyword(null,"domain","domain",1847214937));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"<"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(local_part)+"@"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(domain)+">")], null);
} else {
if(((cljs.core.vector_QMARK_(node)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Macro",cljs.core.first(node))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("query",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second(node)))))))){
return new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(node));
} else {
if(((cljs.core.vector_QMARK_(node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(node),"Example")))){
return cljs.core.second(node);
} else {
if(((cljs.core.vector_QMARK_(node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(node),"Latex_Fragment")))){
var vec__83595 = cljs.core.second(node);
var type_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83595,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83595,(1),null);
var wrapper = (function (){var G__83598 = type_SINGLEQUOTE_;
switch (G__83598) {
case "Inline":
return "$";

break;
case "Displayed":
return "$$";

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__83598))));

}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wrapper,content,wrapper], null);
} else {
if(((cljs.core.vector_QMARK_(node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(node),"Src")))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"\n```"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"language","language",-1591107564).cljs$core$IFn$_invoke$arity$1(cljs.core.second(node));
if(cljs.core.truth_(temp__5825__auto__)){
var lang = temp__5825__auto__;
return lang;
} else {
return null;
}
})())),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"\n",new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(cljs.core.second(node))),"```"], null);
} else {
if(((cljs.core.vector_QMARK_(node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(node),"Displayed_Math")))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["$$",cljs.core.second(node),"$$"], null);
} else {
if(((cljs.core.vector_QMARK_(node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(node),"List")))){
return logseq.graph_parser.exporter.extract_block_list(cljs.core.second(node));
} else {
(log_fn.cljs$core$IFn$_invoke$arity$4 ? log_fn.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"ast->text","ast->text",2105030693),"Ignored ast node",new cljs.core.Keyword(null,"node","node",581201198),node) : log_fn.call(null,new cljs.core.Keyword(null,"ast->text","ast->text",2105030693),"Ignored ast node",new cljs.core.Keyword(null,"node","node",581201198),node));

return cljs.core.PersistentVector.EMPTY;

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return clojure.string.trim(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,extract(ast_block)));
});
logseq.graph_parser.exporter.get_zotero_local_pdf_path = (function logseq$graph_parser$exporter$get_zotero_local_pdf_path(config,m){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("zotero",new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(cljs.core.second(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))))){
var link = new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(cljs.core.second(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m)));
var label = cljs.core.second(cljs.core.first(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(m)));
var id = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(link,/\//));
if(cljs.core.truth_((function (){var and__5140__auto__ = link;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = id;
if(cljs.core.truth_(and__5140__auto____$1)){
return label;
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
var temp__5825__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zotero","settings-v2","zotero/settings-v2",-666496103),"default",new cljs.core.Keyword(null,"zotero-data-directory","zotero-data-directory",-218308088)], null));
if(cljs.core.truth_(temp__5825__auto__)){
var zotero_data_dir = temp__5825__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"link","link",-1769163468),(""+"zotero://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(link)),new cljs.core.Keyword(null,"path","path",-188191168),logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(zotero_data_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["storage",id,label], 0)),new cljs.core.Keyword(null,"base","base",185279322),label], null);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
logseq.graph_parser.exporter.remote_http_url_QMARK_ = (function logseq$graph_parser$exporter$remote_http_url_QMARK_(s){
return cljs.core.boolean$((function (){var and__5140__auto__ = typeof s === 'string';
if(and__5140__auto__){
return cljs.core.re_find(/^https?:\/\//,s);
} else {
return and__5140__auto__;
}
})());
});
/**
 * Reconstruct a file, HTTP, or HTTPS URL from an mldoc Complex link map.
 */
logseq.graph_parser.exporter.link_map__GT_url = (function logseq$graph_parser$exporter$link_map__GT_url(m){
if(((cljs.core.map_QMARK_(m)) && (((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["https",null,"http",null,"file",null], null), null),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))) && (typeof new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(m) === 'string'))))){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))+"://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(m)));
} else {
return null;
}
});
logseq.graph_parser.exporter.external_pdf_url_QMARK_ = (function logseq$graph_parser$exporter$external_pdf_url_QMARK_(s){
return ((typeof s === 'string') && (((clojure.string.starts_with_QMARK_(s,"file://")) || (logseq.graph_parser.exporter.remote_http_url_QMARK_(s)))));
});
logseq.graph_parser.exporter.windows_drive_path_QMARK_ = (function logseq$graph_parser$exporter$windows_drive_path_QMARK_(s){
return cljs.core.boolean$((function (){var and__5140__auto__ = typeof s === 'string';
if(and__5140__auto__){
return cljs.core.re_find(/^[a-zA-Z]:[\/\\]/,s);
} else {
return and__5140__auto__;
}
})());
});
logseq.graph_parser.exporter.pdf_target_path = (function logseq$graph_parser$exporter$pdf_target_path(target){
if(logseq.graph_parser.exporter.remote_http_url_QMARK_(target)){
try{return (new URL(target)).pathname;
}catch (e83599){var _ = e83599;
return null;
}} else {
return target;
}
});
logseq.graph_parser.exporter.pdf_file_QMARK_ = (function logseq$graph_parser$exporter$pdf_file_QMARK_(target){
var path = logseq.graph_parser.exporter.pdf_target_path(target);
return ((typeof path === 'string') && (((typeof logseq.common.path.filename(path) === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("pdf",logseq.common.path.file_ext(path))))));
});
logseq.graph_parser.exporter.file_url__GT_path = (function logseq$graph_parser$exporter$file_url__GT_path(file_url){
try{return decodeURI(logseq.common.path.url_to_path(file_url));
}catch (e83600){var _ = e83600;
return logseq.common.path.url_to_path(file_url);
}});
/**
 * Walks each ast block in order to its full depth. Saves multiple ast types for
 *   use in build-block-tx. This walk is only done once for perf reasons
 */
logseq.graph_parser.exporter.walk_ast_blocks = (function logseq$graph_parser$exporter$walk_ast_blocks(config,ast_blocks){
var results = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"simple-queries","simple-queries",1594320349),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"asset-links","asset-links",-567435187),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"embeds","embeds",833349080),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"zotero-imported-files","zotero-imported-files",1437504380),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"zotero-linked-files","zotero-linked-files",1422706796),cljs.core.PersistentVector.EMPTY], null));
clojure.walk.prewalk((function (x){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.vector_QMARK_(x);
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Link",cljs.core.first(x));
if(and__5140__auto____$1){
var path_or_map = cljs.core.second(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.second(x)));
if(typeof path_or_map === 'string'){
var or__5142__auto__ = logseq.common.config.local_relative_asset_QMARK_(path_or_map);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return clojure.string.ends_with_QMARK_(path_or_map,".pdf");
}
} else {
if(((cljs.core.map_QMARK_(path_or_map)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("zotero",new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(path_or_map))) && (typeof new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(path_or_map) === 'string'))))){
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.exporter.get_zotero_local_pdf_path(config,cljs.core.second(x)));
} else {
return logseq.graph_parser.exporter.pdf_file_QMARK_(logseq.graph_parser.exporter.link_map__GT_url(path_or_map));

}
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,new cljs.core.Keyword(null,"asset-links","asset-links",-567435187),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
if(((cljs.core.vector_QMARK_(x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Macro",cljs.core.first(x))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("embed",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second(x)))))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,new cljs.core.Keyword(null,"embeds","embeds",833349080),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
if(((cljs.core.vector_QMARK_(x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Macro",cljs.core.first(x))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("zotero-imported-file",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second(x)))))))){
var vec__83601_84160 = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(x));
var item_key_84161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83601_84160,(0),null);
var filename_84162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83601_84160,(1),null);
if(cljs.core.truth_((function (){var and__5140__auto__ = item_key_84161;
if(cljs.core.truth_(and__5140__auto__)){
return filename_84162;
} else {
return and__5140__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,new cljs.core.Keyword(null,"zotero-imported-files","zotero-imported-files",1437504380),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item_key_84161,logseq.common.util.safe_read_string.cljs$core$IFn$_invoke$arity$1(filename_84162)], 0));
} else {
}
} else {
if(((cljs.core.vector_QMARK_(x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Macro",cljs.core.first(x))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("zotero-linked-file",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second(x)))))))){
var vec__83604_84163 = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(x));
var relative_path_84164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83604_84163,(0),null);
var parsed_path_84165 = logseq.common.util.safe_read_string.cljs$core$IFn$_invoke$arity$1(relative_path_84164);
if(typeof parsed_path_84165 === 'string'){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,new cljs.core.Keyword(null,"zotero-linked-files","zotero-linked-files",1422706796),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parsed_path_84165], 0));
} else {
}
} else {
if(((cljs.core.vector_QMARK_(x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Macro",cljs.core.first(x))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("cards",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second(x)))))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
if(((cljs.core.vector_QMARK_(x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Macro",cljs.core.first(x))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("query",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second(x)))))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,new cljs.core.Keyword(null,"simple-queries","simple-queries",1594320349),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
}
}
}
}
}
}

return x;
}),ast_blocks);

return cljs.core.deref(results);
});
/**
 * Cheap filter before parsing property values for asset links.
 */
logseq.graph_parser.exporter.maybe_asset_link_text_QMARK_ = (function logseq$graph_parser$exporter$maybe_asset_link_text_QMARK_(s){
return ((typeof s === 'string') && (((clojure.string.includes_QMARK_(s,"assets/")) || (((clojure.string.includes_QMARK_(s,"assets\\")) || (((clojure.string.includes_QMARK_(clojure.string.lower_case(s),".pdf")) || (clojure.string.includes_QMARK_(s,"zotero")))))))));
});
logseq.graph_parser.exporter.asset_links_from_text = (function logseq$graph_parser$exporter$asset_links_from_text(user_config,text,format){
if(logseq.graph_parser.exporter.maybe_asset_link_text_QMARK_(text)){
return new cljs.core.Keyword(null,"asset-links","asset-links",-567435187).cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.exporter.walk_ast_blocks(user_config,logseq.graph_parser.mldoc.inline__GT_edn(text,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = format;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"markdown","markdown",1227225089);
}
})()))));
} else {
return null;
}
});
logseq.graph_parser.exporter.property_value_asset_title_QMARK_ = (function logseq$graph_parser$exporter$property_value_asset_title_QMARK_(pvalue){
var and__5140__auto__ = cljs.core.map_QMARK_(pvalue);
if(and__5140__auto__){
var and__5140__auto____$1 = new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(pvalue);
if(cljs.core.truth_(and__5140__auto____$1)){
return logseq.graph_parser.exporter.maybe_asset_link_text_QMARK_(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(pvalue));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
});
/**
 * If a block contains a simple or advanced queries, converts block to a #Query node. If a block
 * contains a cards query converts to a #Cards node
 */
logseq.graph_parser.exporter.handle_queries = (function logseq$graph_parser$exporter$handle_queries(p__83608,db,page_names_to_uuids,walked_ast_blocks,options){
var map__83609 = p__83608;
var map__83609__$1 = cljs.core.__destructure_map(map__83609);
var block = map__83609__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83609__$1,new cljs.core.Keyword("block","title","block/title",710445684));
var temp__5823__auto__ = (function (){var G__83610 = cljs.core.first(new cljs.core.Keyword(null,"simple-queries","simple-queries",1594320349).cljs$core$IFn$_invoke$arity$1(walked_ast_blocks));
var G__83610__$1 = (((G__83610 == null))?null:logseq.graph_parser.exporter.ast__GT_text(G__83610,cljs.core.select_keys(options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"log-fn","log-fn",-2003241282)], null))));
if((G__83610__$1 == null)){
return null;
} else {
return clojure.string.trim(G__83610__$1);
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var query = temp__5823__auto__;
var props = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.property","query","logseq.property/query",-97414126),query], null);
var map__83611 = logseq.graph_parser.exporter.build_properties_and_values(props,db,page_names_to_uuids,cljs.core.select_keys(block,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null)),options);
var map__83611__$1 = cljs.core.__destructure_map(map__83611);
var block_properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83611__$1,new cljs.core.Keyword(null,"block-properties","block-properties",306554248));
var pvalues_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83611__$1,new cljs.core.Keyword(null,"pvalues-tx","pvalues-tx",-418668372));
var block_SINGLEQUOTE_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(block,new cljs.core.Keyword("block","tags","block/tags",1814948340),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("logseq.class","Query","logseq.class/Query",-232480166)),block_properties,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","title","block/title",710445684),clojure.string.trim(clojure.string.replace_first(title,/\{\{query(.*)\}\}/,""))], null)], 0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),block_SINGLEQUOTE_,new cljs.core.Keyword(null,"pvalues-tx","pvalues-tx",-418668372),pvalues_tx], null);
} else {
var temp__5823__auto____$1 = (function (){var G__83612 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__83607_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Custom","query"], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),p1__83607_SHARP_));
}),new cljs.core.Keyword("block.temp","ast-blocks","block.temp/ast-blocks",1272022732).cljs$core$IFn$_invoke$arity$1(block)));
var G__83612__$1 = (((G__83612 == null))?null:logseq.graph_parser.exporter.ast__GT_text(G__83612,cljs.core.select_keys(options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"log-fn","log-fn",-2003241282)], null))));
if((G__83612__$1 == null)){
return null;
} else {
return clojure.string.trim(G__83612__$1);
}
})();
if(cljs.core.truth_(temp__5823__auto____$1)){
var advanced_query = temp__5823__auto____$1;
var props = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.property","query","logseq.property/query",-97414126),logseq.graph_parser.exporter.migrate_advanced_query_string(advanced_query)], null);
var map__83613 = logseq.graph_parser.exporter.build_properties_and_values(props,db,page_names_to_uuids,cljs.core.select_keys(block,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null)),options);
var map__83613__$1 = cljs.core.__destructure_map(map__83613);
var block_properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83613__$1,new cljs.core.Keyword(null,"block-properties","block-properties",306554248));
var pvalues_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83613__$1,new cljs.core.Keyword(null,"pvalues-tx","pvalues-tx",-418668372));
var pvalues_tx_SINGLEQUOTE_ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pvalues_tx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.second(new cljs.core.Keyword("logseq.property","query","logseq.property/query",-97414126).cljs$core$IFn$_invoke$arity$1(block_properties)),new cljs.core.Keyword("logseq.property.code","lang","logseq.property.code/lang",-857897165),"clojure",new cljs.core.Keyword("logseq.property.node","display-type","logseq.property.node/display-type",442446189),new cljs.core.Keyword(null,"code","code",1586293142)], null)], null));
var block_SINGLEQUOTE_ = (function (){var query_map = logseq.common.util.safe_read_map_string.cljs$core$IFn$_invoke$arity$1(advanced_query);
var G__83614 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(block,new cljs.core.Keyword("block","tags","block/tags",1814948340),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("logseq.class","Query","logseq.class/Query",-232480166));
var G__83614__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__83614,block_properties], 0))
;
var G__83614__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83614__$1,new cljs.core.Keyword("block","title","block/title",710445684),(function (){var or__5142__auto__ = (function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(query_map);
if(cljs.core.truth_(temp__5825__auto__)){
var title_SINGLEQUOTE_ = temp__5825__auto__;
if(typeof title_SINGLEQUOTE_ === 'string'){
return title_SINGLEQUOTE_;
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([title_SINGLEQUOTE_], 0));
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return clojure.string.trim(clojure.string.replace_first(title,/#\+BEGIN_QUERY(.*)#\+END_QUERY/s,""));
}
})())
;
if(cljs.core.truth_(new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674).cljs$core$IFn$_invoke$arity$1(query_map))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83614__$2,new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),true);
} else {
return G__83614__$2;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),block_SINGLEQUOTE_,new cljs.core.Keyword(null,"pvalues-tx","pvalues-tx",-418668372),pvalues_tx_SINGLEQUOTE_], null);
} else {
var temp__5823__auto____$2 = cljs.core.first(new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(walked_ast_blocks));
if(cljs.core.truth_(temp__5823__auto____$2)){
var cards_macro = temp__5823__auto____$2;
var temp__5823__auto____$3 = (function (){var G__83615 = cards_macro;
var G__83615__$1 = (((G__83615 == null))?null:cljs.core.second(G__83615));
var G__83615__$2 = (((G__83615__$1 == null))?null:new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(G__83615__$1));
var G__83615__$3 = (((G__83615__$2 == null))?null:cljs.core.first(G__83615__$2));
var G__83615__$4 = (((G__83615__$3 == null))?null:clojure.string.trim(G__83615__$3));
if((G__83615__$4 == null)){
return null;
} else {
return cljs.core.not_empty(G__83615__$4);
}
})();
if(cljs.core.truth_(temp__5823__auto____$3)){
var query = temp__5823__auto____$3;
var props = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.property","query","logseq.property/query",-97414126),query], null);
var map__83616 = logseq.graph_parser.exporter.build_properties_and_values(props,db,page_names_to_uuids,cljs.core.select_keys(block,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null)),options);
var map__83616__$1 = cljs.core.__destructure_map(map__83616);
var block_properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83616__$1,new cljs.core.Keyword(null,"block-properties","block-properties",306554248));
var pvalues_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83616__$1,new cljs.core.Keyword(null,"pvalues-tx","pvalues-tx",-418668372));
var block_SINGLEQUOTE_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(block,new cljs.core.Keyword("block","tags","block/tags",1814948340),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("logseq.class","Cards","logseq.class/Cards",-1284265167)),block_properties,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","title","block/title",710445684),clojure.string.trim(clojure.string.replace_first(title,/\{\{cards(.*)\}\}/,""))], null)], 0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),block_SINGLEQUOTE_,new cljs.core.Keyword(null,"pvalues-tx","pvalues-tx",-418668372),pvalues_tx], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block","block",664686210),block], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block","block",664686210),block], null);
}
}
}
});
/**
 * Does everything page properties does and updates a couple of block specific attributes
 */
logseq.graph_parser.exporter.handle_block_properties = (function logseq$graph_parser$exporter$handle_block_properties(block_STAR_,db,page_names_to_uuids,refs,walked_ast_blocks,p__83618){
var map__83619 = p__83618;
var map__83619__$1 = cljs.core.__destructure_map(map__83619);
var options = map__83619__$1;
var map__83620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83619__$1,new cljs.core.Keyword(null,"user-options","user-options",-84696866));
var map__83620__$1 = cljs.core.__destructure_map(map__83620);
var property_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83620__$1,new cljs.core.Keyword(null,"property-classes","property-classes",1129964490));
var map__83621 = logseq.graph_parser.exporter.handle_page_and_block_properties(block_STAR_,db,page_names_to_uuids,refs,options);
var map__83621__$1 = cljs.core.__destructure_map(map__83621);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83621__$1,new cljs.core.Keyword(null,"block","block",664686210));
var properties_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83621__$1,new cljs.core.Keyword(null,"properties-tx","properties-tx",-1476843279));
var map__83622 = logseq.graph_parser.exporter.handle_queries(block,db,page_names_to_uuids,walked_ast_blocks,options);
var map__83622__$1 = cljs.core.__destructure_map(map__83622);
var block_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83622__$1,new cljs.core.Keyword(null,"block","block",664686210));
var pvalues_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83622__$1,new cljs.core.Keyword(null,"pvalues-tx","pvalues-tx",-418668372));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),(function (){var G__83623 = block_SINGLEQUOTE_;
if(((cljs.core.seq(property_classes)) && (cljs.core.seq(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(block_STAR_))))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__83623,new cljs.core.Keyword("block","refs","block/refs",-1214495349),(function (refs__$1){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__83617_SHARP_){
var G__83624 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(p1__83617_SHARP_));
return (property_classes.cljs$core$IFn$_invoke$arity$1 ? property_classes.cljs$core$IFn$_invoke$arity$1(G__83624) : property_classes.call(null,G__83624));
}),refs__$1);
}));
} else {
return G__83623;
}
})(),new cljs.core.Keyword(null,"properties-tx","properties-tx",-1476843279),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(properties_tx,(cljs.core.truth_(pvalues_tx)?pvalues_tx:null))], null);
});
/**
 * Converts ((uuid)) block-ref syntax to [[uuid]] page-ref syntax in a title string.
 *   DB graphs use [[uuid]] for all node references.
 */
logseq.graph_parser.exporter.convert_block_refs_to_page_refs = (function logseq$graph_parser$exporter$convert_block_refs_to_page_refs(title){
return clojure.string.replace(title,logseq.common.util.block_ref.block_ref_re,(function (p__83625){
var vec__83626 = p__83625;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83626,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83626,(1),null);
return logseq.common.util.page_ref.__GT_page_ref(id);
}));
});
/**
 * Updates the attributes of a block ref as this is where a new page is defined. Also
 * updates block content effected by refs
 */
logseq.graph_parser.exporter.update_block_refs = (function logseq$graph_parser$exporter$update_block_refs(block,page_names_to_uuids){
if(cljs.core.seq(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(block))){
var G__83631 = block;
var G__83631__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__83631,new cljs.core.Keyword("block","refs","block/refs",-1214495349),(function (refs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (ref){
if(cljs.core.map_QMARK_(ref)){
var temp__5823__auto__ = (function (){var G__83632 = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(ref);
if((G__83632 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(page_names_to_uuids),G__83632);
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var existing_uuid = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),existing_uuid], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(ref)], null);
}
} else {
return ref;
}
}),refs);
}))
;
if(cljs.core.truth_(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83631__$1,new cljs.core.Keyword("block","title","block/title",710445684),(function (){var refs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83630_SHARP_){
return logseq.graph_parser.exporter.add_uuid_to_page_map(p1__83630_SHARP_,page_names_to_uuids);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__83629_SHARP_){
return ((((cljs.core.vector_QMARK_(p1__83629_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.first(p1__83629_SHARP_))))) || ((((p1__83629_SHARP_ instanceof cljs.core.Keyword)) && (logseq.db.frontend.malli_schema.internal_ident_QMARK_(p1__83629_SHARP_)))));
}),new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(block)));
return logseq.graph_parser.exporter.convert_block_refs_to_page_refs(logseq.db.frontend.content.title_ref__GT_id_ref.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block),refs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"replace-tag?","replace-tag?",-1653793949),false], null)], 0)));
})());
} else {
return G__83631__$1;
}
} else {
return block;
}
});
/**
 * Point pre-block children to parents since pre blocks don't exist in db graphs
 */
logseq.graph_parser.exporter.fix_pre_block_references = (function logseq$graph_parser$exporter$fix_pre_block_references(p__83633,pre_blocks,page_names_to_uuids){
var map__83634 = p__83633;
var map__83634__$1 = cljs.core.__destructure_map(map__83634);
var block = map__83634__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83634__$1,new cljs.core.Keyword("block","parent","block/parent",-918309064));
var G__83635 = block;
if(((cljs.core.vector_QMARK_(parent)) && (cljs.core.contains_QMARK_(pre_blocks,cljs.core.second(parent))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83635,new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),logseq.graph_parser.exporter.get_page_uuid(page_names_to_uuids,cljs.core.second(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),block,new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block)], null))], null));
} else {
return G__83635;
}
});
/**
 * Some graph-parser attributes return :block/name as a lookup ref. This fixes
 *   those to use uuids since block/name is not unique for db graphs
 */
logseq.graph_parser.exporter.fix_block_name_lookup_ref = (function logseq$graph_parser$exporter$fix_block_name_lookup_ref(block,page_names_to_uuids){
var G__83638 = block;
var G__83638__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),cljs.core.first(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83638,new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),logseq.graph_parser.exporter.get_page_uuid(page_names_to_uuids,cljs.core.second(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),block,new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block)], null))], null)):G__83638);
if(cljs.core.truth_(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83638__$1,new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),logseq.graph_parser.exporter.get_page_uuid(page_names_to_uuids,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),block,new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block)], null))], null));
} else {
return G__83638__$1;
}
});
/**
 * Given an asset's relative or full path, create a unique name for identifying an asset.
 * Must handle to paths as ../assets/*, assets/* and with subdirectories
 */
logseq.graph_parser.exporter.asset_path__GT_name = (function logseq$graph_parser$exporter$asset_path__GT_name(path){
if(typeof path === 'string'){
var or__5142__auto__ = cljs.core.re_find(/assets\/.*$/,path);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(logseq.graph_parser.exporter.pdf_file_QMARK_(path)){
return path;
} else {
return null;
}
}
} else {
return null;
}
});
logseq.graph_parser.exporter.update_asset_links_in_block_title = (function logseq$graph_parser$exporter$update_asset_links_in_block_title(block_title,asset_name_to_uuids,ignored_assets){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__83639){
var vec__83640 = p__83639;
var asset_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83640,(0),null);
var asset_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83640,(1),null);
var new_title = clojure.string.replace(acc,cljs.core.re_pattern((""+"!?\\[[^\\]]*?\\]\\([^\\)]*?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.util.escape_regex_chars(asset_name))+"\\)(\\{[^}]*\\})?")),logseq.common.util.page_ref.__GT_page_ref(asset_uuid));
if(clojure.string.includes_QMARK_(new_title,asset_name)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ignored_assets,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reason","reason",-2070751759),"Some asset links were not updated to block references",new cljs.core.Keyword(null,"path","path",-188191168),asset_name,new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block","block",664686210),new_title], null)], null));
} else {
}

return new_title;
}),block_title,asset_name_to_uuids);
});
/**
 * Given a list of blocks and a set of parent uuids, return all blocks that are
 * descendants via :block/parent of given parent uuids
 */
logseq.graph_parser.exporter.find_annotation_children_blocks = (function logseq$graph_parser$exporter$find_annotation_children_blocks(blocks,parent_uuids){
var get_descendant_uuids = (function logseq$graph_parser$exporter$find_annotation_children_blocks_$_get_descendant_uuids(acc_uuids,seen){
while(true){
var new_blocks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (acc_uuids,seen){
return (function (p1__83646_SHARP_){
return cljs.core.contains_QMARK_(acc_uuids,cljs.core.second(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(p1__83646_SHARP_)));
});})(acc_uuids,seen))
,blocks);
var new_uuids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new_blocks));
var unseen = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new_uuids,seen);
if(cljs.core.empty_QMARK_(unseen)){
return seen;
} else {
var G__84191 = unseen;
var G__84192 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(seen,unseen);
acc_uuids = G__84191;
seen = G__84192;
continue;
}
break;
}
});
var parent_and_descendant_uuids = get_descendant_uuids(parent_uuids,parent_uuids);
var only_descendants = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(parent_and_descendant_uuids,parent_uuids);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__83647_SHARP_){
return cljs.core.contains_QMARK_(only_descendants,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(p1__83647_SHARP_));
}),blocks);
});
logseq.graph_parser.exporter.build_annotation_block = (function logseq$graph_parser$exporter$build_annotation_block(m,color_text_idents,parent_asset,image_asset_name_to_uuids,md_blocks,p__83652){
var map__83653 = p__83652;
var map__83653__$1 = cljs.core.__destructure_map(map__83653);
var log_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83653__$1,new cljs.core.Keyword(null,"log-fn","log-fn",-2003241282),cljs.core.prn);
var user_attributes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("logseq.property.pdf","hl-color","logseq.property.pdf/hl-color",-674793887),cljs.core.get.cljs$core$IFn$_invoke$arity$2(color_text_idents,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"color","color",1011675173)], null))),new cljs.core.Keyword("logseq.property.pdf","hl-page","logseq.property.pdf/hl-page",-753284596),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword("block","title","block/title",710445684),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"text","text",-1790561697)], null))], null);
var _ = (cljs.core.truth_(cljs.core.some(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.val),user_attributes))?(function (){var G__83654 = new cljs.core.Keyword(null,"missing-annotation-attributes","missing-annotation-attributes",2042305263);
var G__83655 = "Annotation is missing some attributes so set reasonable defaults for them";
var G__83656 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"annotation","annotation",-344661666),user_attributes,new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(parent_asset)], null);
return (log_fn.cljs$core$IFn$_invoke$arity$3 ? log_fn.cljs$core$IFn$_invoke$arity$3(G__83654,G__83655,G__83656) : log_fn.call(null,G__83654,G__83655,G__83656));
})():null);
var asset_image_uuid = cljs.core.some((function (p__83657){
var vec__83658 = p__83657;
var asset_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83658,(0),null);
var image_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83658,(1),null);
if(clojure.string.includes_QMARK_(asset_name,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(m))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"image","image",-58725096)], null)))?(""+"_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"image","image",-58725096)], null)))):null))))){
return image_uuid;
} else {
return null;
}
}),image_asset_name_to_uuids);
var md_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(md_blocks,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(m));
var annotation = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("logseq.property.pdf","hl-color","logseq.property.pdf/hl-color",-674793887),new cljs.core.Keyword("logseq.property","color.yellow","logseq.property/color.yellow",1752103002),new cljs.core.Keyword("logseq.property.pdf","hl-page","logseq.property.pdf/hl-page",-753284596),(1),new cljs.core.Keyword("block","title","block/title",710445684),""], null),logseq.common.util.remove_nils_non_nested(user_attributes),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword("block","order","block/order",-1429282437),logseq.db.common.order.gen_key.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("logseq.property","ls-type","logseq.property/ls-type",326979345),new cljs.core.Keyword(null,"annotation","annotation",-344661666),new cljs.core.Keyword("logseq.property.pdf","hl-value","logseq.property.pdf/hl-value",545829402),m,new cljs.core.Keyword("logseq.property","asset","logseq.property/asset",876856790),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(parent_asset)], null),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.class","Pdf-annotation","logseq.class/Pdf-annotation",-504959620)], null),new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(parent_asset)], null),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("logseq.class","Asset","logseq.class/Asset",-797502970)], null),(cljs.core.truth_(asset_image_uuid)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.property.pdf","hl-image","logseq.property.pdf/hl-image",137767009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),asset_image_uuid], null),new cljs.core.Keyword("logseq.property.pdf","hl-type","logseq.property.pdf/hl-type",-998437832),new cljs.core.Keyword(null,"area","area",472007256)], null):null),(function (){var temp__5829__auto__ = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(md_block);
if((temp__5829__auto__ == null)){
return null;
} else {
var title = temp__5829__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","title","block/title",710445684),title], null);
}
})()], 0));
return (logseq.db.sqlite.util.block_with_timestamps.cljs$core$IFn$_invoke$arity$1 ? logseq.db.sqlite.util.block_with_timestamps.cljs$core$IFn$_invoke$arity$1(annotation) : logseq.db.sqlite.util.block_with_timestamps.call(null,annotation));
});
/**
 * Creates annotations for a pdf asset given the asset's edn map and parsed markdown file
 */
logseq.graph_parser.exporter.build_pdf_annotations_tx_STAR_ = (function logseq$graph_parser$exporter$build_pdf_annotations_tx_STAR_(asset_edn_map,parsed_md,parent_asset,image_asset_name_to_uuids,opts){
var color_text_idents = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"db-ident","db-ident",-992686073)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.property.built_in_properties,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.property.pdf","hl-color","logseq.property.pdf/hl-color",-674793887),new cljs.core.Keyword(null,"closed-values","closed-values",364658811)], null))));
var md_blocks = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83661_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(p1__83661_SHARP_),cljs.core.select_keys(p1__83661_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null))],null));
}),new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(parsed_md)));
var annotation_blocks = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__83662_SHARP_){
return logseq.graph_parser.exporter.build_annotation_block(p1__83662_SHARP_,color_text_idents,parent_asset,image_asset_name_to_uuids,md_blocks,opts);
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(asset_edn_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn-content","edn-content",-1018522727),new cljs.core.Keyword(null,"highlights","highlights",945143465)], null)));
var md_children_blocks_STAR_ = logseq.graph_parser.exporter.find_annotation_children_blocks(cljs.core.vals(md_blocks),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(asset_edn_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn-content","edn-content",-1018522727),new cljs.core.Keyword(null,"highlights","highlights",945143465)], null)))));
var md_children_blocks = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__83663_SHARP_){
var G__83664 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__83663_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("logseq.class","Asset","logseq.class/Asset",-797502970)], null)], 0));
return (logseq.db.sqlite.util.block_with_timestamps.cljs$core$IFn$_invoke$arity$1 ? logseq.db.sqlite.util.block_with_timestamps.cljs$core$IFn$_invoke$arity$1(G__83664) : logseq.db.sqlite.util.block_with_timestamps.call(null,G__83664));
}),md_children_blocks_STAR_);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(annotation_blocks,md_children_blocks);
});
logseq.graph_parser.exporter.build_new_asset = (function logseq$graph_parser$exporter$build_new_asset(asset_data){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__83668 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","order","block/order",-1429282437),logseq.db.common.order.gen_key.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("logseq.class","Asset","logseq.class/Asset",-797502970),new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("logseq.class","Asset","logseq.class/Asset",-797502970)], null);
return (logseq.db.sqlite.util.block_with_timestamps.cljs$core$IFn$_invoke$arity$1 ? logseq.db.sqlite.util.block_with_timestamps.cljs$core$IFn$_invoke$arity$1(G__83668) : logseq.db.sqlite.util.block_with_timestamps.call(null,G__83668));
})(),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.class","Asset","logseq.class/Asset",-797502970)], null),new cljs.core.Keyword("logseq.property.asset","type","logseq.property.asset/type",-1142083098),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(asset_data),new cljs.core.Keyword("logseq.property.asset","checksum","logseq.property.asset/checksum",-1011416979),new cljs.core.Keyword(null,"checksum","checksum",549736371).cljs$core$IFn$_invoke$arity$1(asset_data),new cljs.core.Keyword("logseq.property.asset","size","logseq.property.asset/size",-116786219),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(asset_data)], null),(function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"external-url","external-url",-1665502145).cljs$core$IFn$_invoke$arity$1(asset_data);
if(cljs.core.truth_(temp__5825__auto__)){
var external_url = temp__5825__auto__;
var G__83669 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.property.asset","external-url","logseq.property.asset/external-url",-1364775163),external_url], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"external-file-name","external-file-name",-863571118).cljs$core$IFn$_invoke$arity$1(asset_data))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83669,new cljs.core.Keyword("logseq.property.asset","external-file-name","logseq.property.asset/external-file-name",-399529720),new cljs.core.Keyword(null,"external-file-name","external-file-name",-863571118).cljs$core$IFn$_invoke$arity$1(asset_data));
} else {
return G__83669;
}
} else {
return null;
}
})()], 0));
});
logseq.graph_parser.exporter.get_asset_block_id = (function logseq$graph_parser$exporter$get_asset_block_id(assets,path){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(assets),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new cljs.core.Keyword(null,"asset-id","asset-id",249736185)], null));
});
/**
 * Builds tx for annotation images and provides a map for mapping image asset names
 * to their new uuids
 */
logseq.graph_parser.exporter.build_annotation_images = (function logseq$graph_parser$exporter$build_annotation_images(parent_asset_paths,assets,p__83677){
var map__83678 = p__83677;
var map__83678__$1 = cljs.core.__destructure_map(map__83678);
var notify_user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83678__$1,new cljs.core.Keyword(null,"notify-user","notify-user",-268964208));
var image_dirs = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83674_SHARP_){
return clojure.string.replace_first(p1__83674_SHARP_,/\.pdf$/i,"");
}),parent_asset_paths));
var image_paths = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__83675_SHARP_){
return cljs.core.contains_QMARK_(image_dirs,module$node_modules$path$path.dirname(p1__83675_SHARP_));
}),cljs.core.keys(cljs.core.deref(assets)));
var txs = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__83676_SHARP_){
var asset_id = logseq.graph_parser.exporter.get_asset_block_id(assets,p1__83676_SHARP_);
if(cljs.core.not(asset_id)){
var G__83679 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"msg","msg",-1386103444),(""+"Skipped creating asset "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__83676_SHARP_], 0)))+" because it has no asset id"),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"error","error",-978969032)], null);
return (notify_user.cljs$core$IFn$_invoke$arity$1 ? notify_user.cljs$core$IFn$_invoke$arity$1(G__83679) : notify_user.call(null,G__83679));
} else {
var new_asset = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.graph_parser.exporter.build_new_asset(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(assets),p1__83676_SHARP_)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","title","block/title",710445684),"pdf area highlight",new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),asset_id], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(assets,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__83676_SHARP_,new cljs.core.Keyword(null,"asset-created?","asset-created?",1151848542)], null),true);

return new_asset;
}
}),image_paths);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"txs","txs",2056038378),txs,new cljs.core.Keyword(null,"image-asset-name-to-uuids","image-asset-name-to-uuids",-137997647),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (image_path,tx){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$path$path.basename(image_path),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(tx)], null);
}),image_paths,txs))], null);
});
logseq.graph_parser.exporter.sanitizeFilename_SINGLEQUOTE_ = (cljs.core.truth_(cljs.core.find_ns(new cljs.core.Symbol(null,"nbb.core","nbb.core",-227618172,null)))?(module$node_modules$sanitize_filename$index["default"]):module$node_modules$sanitize_filename$index);
/**
 * Sanitizes filenames for pdf assets
 */
logseq.graph_parser.exporter.safe_sanitize_file_name = (function logseq$graph_parser$exporter$safe_sanitize_file_name(s){
var G__83682 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
return (logseq.graph_parser.exporter.sanitizeFilename_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? logseq.graph_parser.exporter.sanitizeFilename_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(G__83682) : logseq.graph_parser.exporter.sanitizeFilename_SINGLEQUOTE_.call(null,G__83682));
});
logseq.graph_parser.exporter.pdf_annotation_edn_path = (function logseq$graph_parser$exporter$pdf_annotation_edn_path(parent_asset_path){
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(logseq.common.config.local_assets_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.graph_parser.exporter.safe_sanitize_file_name(module$node_modules$path$path.basename(clojure.string.replace_first(parent_asset_path,/\.pdf$/i,".edn")))], 0));
});
logseq.graph_parser.exporter.pdf_annotation_md_name = (function logseq$graph_parser$exporter$pdf_annotation_md_name(parent_asset_path){
return (""+"hls__"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.exporter.safe_sanitize_file_name(module$node_modules$path$path.basename(clojure.string.replace_first(parent_asset_path,/\.pdf$/i,".md")))));
});
/**
 * Builds tx for pdf annotations when a pdf has an annotations EDN file under assets/
 */
logseq.graph_parser.exporter.build_pdf_annotations_tx = (function logseq$graph_parser$exporter$build_pdf_annotations_tx(parent_asset_paths,assets,parent_asset,pdf_annotation_pages,opts){
var parent_asset_paths__$1 = ((cljs.core.sequential_QMARK_(parent_asset_paths))?cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(parent_asset_paths):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_asset_paths], null));
var asset_edn_entry = cljs.core.some((function (parent_asset_path){
var asset_edn_path = logseq.graph_parser.exporter.pdf_annotation_edn_path(parent_asset_path);
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(assets),asset_edn_path);
if(cljs.core.truth_(temp__5825__auto__)){
var asset_edn_map = temp__5825__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"asset-edn-map","asset-edn-map",-1472283984),asset_edn_map,new cljs.core.Keyword(null,"asset-md-name","asset-md-name",1880103863),logseq.graph_parser.exporter.pdf_annotation_md_name(parent_asset_path)], null);
} else {
return null;
}
}),parent_asset_paths__$1);
var temp__5825__auto__ = new cljs.core.Keyword(null,"asset-edn-map","asset-edn-map",-1472283984).cljs$core$IFn$_invoke$arity$1(asset_edn_entry);
if(cljs.core.truth_(temp__5825__auto__)){
var asset_edn_map = temp__5825__auto__;
var map__83687 = logseq.graph_parser.exporter.build_annotation_images(parent_asset_paths__$1,assets,opts);
var map__83687__$1 = cljs.core.__destructure_map(map__83687);
var txs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83687__$1,new cljs.core.Keyword(null,"txs","txs",2056038378));
var image_asset_name_to_uuids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83687__$1,new cljs.core.Keyword(null,"image-asset-name-to-uuids","image-asset-name-to-uuids",-137997647));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(txs,logseq.graph_parser.exporter.build_pdf_annotations_tx_STAR_(asset_edn_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(pdf_annotation_pages),new cljs.core.Keyword(null,"asset-md-name","asset-md-name",1880103863).cljs$core$IFn$_invoke$arity$1(asset_edn_entry)),parent_asset,image_asset_name_to_uuids,opts));
} else {
return null;
}
});
logseq.graph_parser.exporter.resolve_asset_data = (function logseq$graph_parser$exporter$resolve_asset_data(asset_link,user_config,linked_files,linked_base_dir,zotero_imported_files){
var link_map = cljs.core.second(asset_link);
var path_STAR_ = cljs.core.second(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(link_map));
var link_url = (function (){var or__5142__auto__ = logseq.graph_parser.exporter.link_map__GT_url(path_STAR_);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(((typeof path_STAR_ === 'string') && (((logseq.graph_parser.exporter.external_pdf_url_QMARK_(path_STAR_)) || (logseq.graph_parser.exporter.windows_drive_path_QMARK_(path_STAR_)))))){
return path_STAR_;
} else {
return null;
}
}
})();
var remote_url_QMARK_ = logseq.graph_parser.exporter.remote_http_url_QMARK_(link_url);
var file_url = ((((typeof link_url === 'string') && (clojure.string.starts_with_QMARK_(link_url,"file://"))))?link_url:null);
var zotero_path_data = ((cljs.core.map_QMARK_(path_STAR_))?logseq.graph_parser.exporter.get_zotero_local_pdf_path(user_config,link_map):null);
var zotero_asset_QMARK_ = (!((zotero_path_data == null)));
var linked_relative = (cljs.core.truth_((function (){var and__5140__auto__ = linked_files;
if(cljs.core.truth_(and__5140__auto__)){
return ((zotero_asset_QMARK_) && (cljs.core.seq(cljs.core.deref(linked_files))));
} else {
return and__5140__auto__;
}
})())?(function (){var value = cljs.core.first(cljs.core.deref(linked_files));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(linked_files,cljs.core.rest);

return clojure.string.replace_first(value,"attachments:","");
})():null);
var linked_base = ((typeof linked_relative === 'string')?module$node_modules$path$path.basename(linked_relative):null);
var linked_path = ((((typeof linked_relative === 'string') && (((typeof linked_base_dir === 'string') && ((!(clojure.string.blank_QMARK_(linked_base_dir))))))))?module$node_modules$path$path.join(linked_base_dir,linked_relative):null);
var map__83692 = (cljs.core.truth_(linked_path)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),linked_path,new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(zotero_path_data),new cljs.core.Keyword(null,"base","base",185279322),linked_base], null):((zotero_asset_QMARK_)?zotero_path_data:((remote_url_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),link_url,new cljs.core.Keyword(null,"link","link",-1769163468),link_url,new cljs.core.Keyword(null,"base","base",185279322),logseq.common.path.filename(logseq.graph_parser.exporter.pdf_target_path(link_url))], null):(cljs.core.truth_(file_url)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),logseq.graph_parser.exporter.file_url__GT_path(file_url),new cljs.core.Keyword(null,"link","link",-1769163468),file_url,new cljs.core.Keyword(null,"base","base",185279322),logseq.common.path.filename(file_url)], null):((logseq.graph_parser.exporter.windows_drive_path_QMARK_(path_STAR_))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),path_STAR_,new cljs.core.Keyword(null,"link","link",-1769163468),(""+"file://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_STAR_)),new cljs.core.Keyword(null,"base","base",185279322),logseq.common.path.filename(path_STAR_)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),path_STAR_], null)
)))));
var map__83692__$1 = cljs.core.__destructure_map(map__83692);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83692__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83692__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var base = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83692__$1,new cljs.core.Keyword(null,"base","base",185279322));
var asset_name = (cljs.core.truth_(linked_path)?base:((zotero_asset_QMARK_)?(function (){var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(zotero_imported_files,cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(link,/\//)));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return base;
}
})():(function (){var G__83699 = path;
var G__83699__$1 = (((G__83699 == null))?null:logseq.graph_parser.exporter.pdf_target_path(G__83699));
if((G__83699__$1 == null)){
return null;
} else {
return logseq.graph_parser.exporter.asset_path__GT_name(G__83699__$1);
}
})()
));
var path__$1 = (cljs.core.truth_(linked_path)?path:(cljs.core.truth_((function (){var and__5140__auto__ = zotero_asset_QMARK_;
if(and__5140__auto__){
return asset_name;
} else {
return and__5140__auto__;
}
})())?clojure.string.replace(path,/[^\/]+$/,asset_name):path
));
var asset_link_or_name = (function (){var or__5142__auto__ = link;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return asset_name;
}
})();
var asset_path = ((zotero_asset_QMARK_)?(cljs.core.truth_(linked_path)?(""+"zotero-link://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(linked_relative)):(""+"zotero-path://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(logseq.common.util.namespace.namespace_char,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(link,/\//)),asset_name], null))))):null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"asset-link-or-name","asset-link-or-name",582914032),asset_link_or_name,new cljs.core.Keyword(null,"asset-name","asset-name",-1412454368),asset_name,new cljs.core.Keyword(null,"asset-path","asset-path",1500889617),asset_path,new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"zotero-asset?","zotero-asset?",-2087493197),zotero_asset_QMARK_], null);
});
logseq.graph_parser.exporter.external_linked_pdf_QMARK_ = (function logseq$graph_parser$exporter$external_linked_pdf_QMARK_(asset_link_or_name,path){
return ((logseq.graph_parser.exporter.external_pdf_url_QMARK_(asset_link_or_name)) || (((logseq.graph_parser.exporter.external_pdf_url_QMARK_(path)) || (logseq.graph_parser.exporter.windows_drive_path_QMARK_(path)))));
});
logseq.graph_parser.exporter.put_linked_pdf_asset_BANG_ = (function logseq$graph_parser$exporter$put_linked_pdf_asset_BANG_(assets,asset_link_or_name,path,asset_path,stat){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(assets,cljs.core.assoc,asset_link_or_name,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"asset-id","asset-id",249736185),(datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 ? datascript.core.squuid.cljs$core$IFn$_invoke$arity$0() : datascript.core.squuid.call(null)),new cljs.core.Keyword(null,"type","type",1174270348),"pdf",new cljs.core.Keyword(null,"checksum","checksum",549736371),"0000000000000000000000000000000000000000000000000000000000000000",new cljs.core.Keyword(null,"size","size",1098693007),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(stat);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (function (){var G__83702 = stat;
if((G__83702 == null)){
return null;
} else {
return G__83702.size;
}
})();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return (0);
}
}
})(),new cljs.core.Keyword(null,"external-url","external-url",-1665502145),(function (){var or__5142__auto__ = asset_link_or_name;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return path;
}
})(),new cljs.core.Keyword(null,"external-file-name","external-file-name",-863571118),asset_path], null));
});
logseq.graph_parser.exporter._LT_ensure_asset_data_BANG_ = (function logseq$graph_parser$exporter$_LT_ensure_asset_data_BANG_(assets,asset_link_or_name,path,asset_path,_LT_get_file_stat){
if(cljs.core.truth_((function (){var and__5140__auto__ = asset_link_or_name;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(assets),asset_link_or_name))) && (logseq.graph_parser.exporter.pdf_file_QMARK_(path)));
} else {
return and__5140__auto__;
}
})())){
var external_QMARK_ = logseq.graph_parser.exporter.external_linked_pdf_QMARK_(asset_link_or_name,path);
var remote_QMARK_ = ((logseq.graph_parser.exporter.remote_http_url_QMARK_(asset_link_or_name)) || (logseq.graph_parser.exporter.remote_http_url_QMARK_(path)));
if(remote_QMARK_){
logseq.graph_parser.exporter.put_linked_pdf_asset_BANG_(assets,asset_link_or_name,path,asset_path,null);

return promesa.core.resolved(null);
} else {
if(cljs.core.fn_QMARK_(_LT_get_file_stat)){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((_LT_get_file_stat.cljs$core$IFn$_invoke$arity$1 ? _LT_get_file_stat.cljs$core$IFn$_invoke$arity$1(path) : _LT_get_file_stat.call(null,path))),(function (stat){
return promesa.protocols._promise(logseq.graph_parser.exporter.put_linked_pdf_asset_BANG_(assets,asset_link_or_name,path,asset_path,stat));
}));
})),(function (_){
if(external_QMARK_){
return logseq.graph_parser.exporter.put_linked_pdf_asset_BANG_(assets,asset_link_or_name,path,asset_path,null);
} else {
return null;
}
}));
} else {
if(external_QMARK_){
logseq.graph_parser.exporter.put_linked_pdf_asset_BANG_(assets,asset_link_or_name,path,asset_path,null);

return promesa.core.resolved(null);
} else {
return null;
}
}
}
} else {
return null;
}
});
logseq.graph_parser.exporter.build_asset_tx = (function logseq$graph_parser$exporter$build_asset_tx(asset_data,asset_name,asset_link_or_name,asset_link,pdf_annotation_pages,opts,assets,zotero_asset_QMARK_){
var new_asset = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.graph_parser.exporter.build_new_asset(asset_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","title","block/title",710445684),logseq.db.frontend.asset.asset_name__GT_title(module$node_modules$path$path.basename(asset_name)),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),logseq.graph_parser.exporter.get_asset_block_id(assets,asset_link_or_name)], null),(function (){var temp__5825__auto__ = cljs.core.not_empty(logseq.common.util.safe_read_map_string.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(cljs.core.second(asset_link))));
if(cljs.core.truth_(temp__5825__auto__)){
var metadata = temp__5825__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.property.asset","resize-metadata","logseq.property.asset/resize-metadata",-1297523055),metadata], null);
} else {
return null;
}
})()], 0));
var external_file_asset_QMARK_ = ((typeof asset_name === 'string') && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(asset_name,asset_link_or_name)) || (((logseq.graph_parser.exporter.external_pdf_url_QMARK_(asset_link_or_name)) || (logseq.graph_parser.exporter.windows_drive_path_QMARK_(asset_name)))))));
var pdf_annotations_paths = (function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"pdf-annotation-file","pdf-annotation-file",-1905484372).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5823__auto__)){
var annotation_file = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(logseq.common.config.local_assets_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.replace(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(module$node_modules$path$path.basename(annotation_file),(5)),/\.md$/i,".pdf")], 0))], null);
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = (function (){var or__5142__auto__ = zotero_asset_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return external_file_asset_QMARK_;
}
})();
if(cljs.core.truth_(and__5140__auto__)){
return typeof asset_name === 'string';
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(logseq.common.config.local_assets_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([module$node_modules$path$path.basename(asset_name)], 0)),logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(logseq.common.config.local_assets_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([asset_name], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5142__auto__ = asset_name;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return asset_link_or_name;
}
})()], null);
}
}
})();
var pdf_annotations_tx = (cljs.core.truth_(cljs.core.some(logseq.graph_parser.exporter.pdf_file_QMARK_,pdf_annotations_paths))?logseq.graph_parser.exporter.build_pdf_annotations_tx(pdf_annotations_paths,assets,new_asset,pdf_annotation_pages,opts):null);
var asset_tx = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_asset], null),pdf_annotations_tx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(assets,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [asset_link_or_name,new cljs.core.Keyword(null,"asset-created?","asset-created?",1151848542)], null),true);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"asset-name-uuid","asset-name-uuid",-614777555),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [asset_link_or_name,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(new_asset)], null),new cljs.core.Keyword(null,"asset-tx","asset-tx",419148290),asset_tx], null);
});
/**
 * If a block contains assets, creates them as #Asset nodes in the Asset page and references them in the block.
 */
logseq.graph_parser.exporter._LT_handle_assets_in_block = (function logseq$graph_parser$exporter$_LT_handle_assets_in_block(block,p__83715,p__83716,p__83717){
var map__83718 = p__83715;
var map__83718__$1 = cljs.core.__destructure_map(map__83718);
var asset_links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83718__$1,new cljs.core.Keyword(null,"asset-links","asset-links",-567435187));
var zotero_imported_files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83718__$1,new cljs.core.Keyword(null,"zotero-imported-files","zotero-imported-files",1437504380));
var zotero_linked_files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83718__$1,new cljs.core.Keyword(null,"zotero-linked-files","zotero-linked-files",1422706796));
var map__83719 = p__83716;
var map__83719__$1 = cljs.core.__destructure_map(map__83719);
var assets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83719__$1,new cljs.core.Keyword(null,"assets","assets",210278279));
var ignored_assets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83719__$1,new cljs.core.Keyword(null,"ignored-assets","ignored-assets",-1801165201));
var pdf_annotation_pages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83719__$1,new cljs.core.Keyword(null,"pdf-annotation-pages","pdf-annotation-pages",-277368378));
var map__83720 = p__83717;
var map__83720__$1 = cljs.core.__destructure_map(map__83720);
var opts = map__83720__$1;
var notify_user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83720__$1,new cljs.core.Keyword(null,"notify-user","notify-user",-268964208));
var _LT_get_file_stat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83720__$1,new cljs.core.Keyword(null,"<get-file-stat","<get-file-stat",1615437898));
var user_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83720__$1,new cljs.core.Keyword(null,"user-config","user-config",-1138679827));
var linked_files = ((cljs.core.seq(zotero_linked_files))?cljs.core.atom.cljs$core$IFn$_invoke$arity$1(zotero_linked_files):null);
var linked_base_dir = (cljs.core.truth_(linked_files)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(user_config,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zotero","settings-v2","zotero/settings-v2",-666496103),"default",new cljs.core.Keyword(null,"zotero-linked-attachment-base-directory","zotero-linked-attachment-base-directory",-799816118)], null)):null);
if(cljs.core.seq(asset_links)){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (asset_link){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.resolve_asset_data(asset_link,user_config,linked_files,linked_base_dir,zotero_imported_files)),(function (p__83721){
var map__83722 = p__83721;
var map__83722__$1 = cljs.core.__destructure_map(map__83722);
var asset_link_or_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83722__$1,new cljs.core.Keyword(null,"asset-link-or-name","asset-link-or-name",582914032));
var asset_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83722__$1,new cljs.core.Keyword(null,"asset-name","asset-name",-1412454368));
var asset_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83722__$1,new cljs.core.Keyword(null,"asset-path","asset-path",1500889617));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83722__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var zotero_asset_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83722__$1,new cljs.core.Keyword(null,"zotero-asset?","zotero-asset?",-2087493197));
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter._LT_ensure_asset_data_BANG_(assets,asset_link_or_name,path,asset_path,_LT_get_file_stat)),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(asset_link_or_name)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(assets),asset_link_or_name):null)),(function (asset_data){
return promesa.protocols._promise((cljs.core.truth_(asset_data)?((cljs.core.not(logseq.graph_parser.exporter.get_asset_block_id(assets,asset_link_or_name)))?(function (){var G__83723 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"msg","msg",-1386103444),(""+"Skipped creating asset "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([asset_link_or_name], 0)))+" because it has no asset id"),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"error","error",-978969032)], null);
return (notify_user.cljs$core$IFn$_invoke$arity$1 ? notify_user.cljs$core$IFn$_invoke$arity$1(G__83723) : notify_user.call(null,G__83723));
})():(cljs.core.truth_(new cljs.core.Keyword(null,"asset-created?","asset-created?",1151848542).cljs$core$IFn$_invoke$arity$1(asset_data))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"asset-name-uuid","asset-name-uuid",-614777555),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [asset_link_or_name,new cljs.core.Keyword(null,"asset-id","asset-id",249736185).cljs$core$IFn$_invoke$arity$1(asset_data)], null)], null):logseq.graph_parser.exporter.build_asset_tx(asset_data,asset_name,asset_link_or_name,asset_link,pdf_annotation_pages,opts,assets,zotero_asset_QMARK_)
)):(cljs.core.truth_(zotero_asset_QMARK_)?null:(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ignored_assets,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reason","reason",-2070751759),"No asset data found for this asset path",new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.second(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.second(asset_link))),new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block)], null)], null));

return null;
})()
)));
}));
}));
}));
}));
}),asset_links))),(function (asset_maps_STAR_){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,asset_maps_STAR_)),(function (asset_maps){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"asset-tx","asset-tx",419148290),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([asset_maps], 0))),(function (asset_blocks){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asset-name-uuid","asset-name-uuid",-614777555),asset_maps))),(function (asset_names_to_uuids){
return promesa.protocols._promise((function (){var G__83728 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block","block",664686210),cljs.core.update.cljs$core$IFn$_invoke$arity$5(block,new cljs.core.Keyword("block","title","block/title",710445684),logseq.graph_parser.exporter.update_asset_links_in_block_title,asset_names_to_uuids,ignored_assets)], null);
if(cljs.core.seq(asset_blocks)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83728,new cljs.core.Keyword(null,"asset-blocks-tx","asset-blocks-tx",-1804784438),asset_blocks);
} else {
return G__83728;
}
})());
}));
}));
}));
}));
}));
} else {
return promesa.core.resolved(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block","block",664686210),block], null));
}
});
logseq.graph_parser.exporter.import_user_config = (function logseq$graph_parser$exporter$import_user_config(options){
var or__5142__auto__ = new cljs.core.Keyword(null,"user-config","user-config",-1138679827).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extract-options","extract-options",-572164844),new cljs.core.Keyword(null,"user-config","user-config",-1138679827)], null));
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}
});
logseq.graph_parser.exporter.options_file_format = (function logseq$graph_parser$exporter$options_file_format(options){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("org",(function (){var G__83729 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(options);
if((G__83729 == null)){
return null;
} else {
return logseq.common.path.file_ext(G__83729);
}
})())){
return new cljs.core.Keyword(null,"org","org",1495985);
} else {
return new cljs.core.Keyword(null,"markdown","markdown",1227225089);
}
});
logseq.graph_parser.exporter.asset_handle_opts = (function logseq$graph_parser$exporter$asset_handle_opts(options){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.select_keys(options,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"log-fn","log-fn",-2003241282),new cljs.core.Keyword(null,"notify-user","notify-user",-268964208),new cljs.core.Keyword(null,"<get-file-stat","<get-file-stat",1615437898)], null)),new cljs.core.Keyword(null,"user-config","user-config",-1138679827),logseq.graph_parser.exporter.import_user_config(options),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"format","format",-1306924766),logseq.graph_parser.exporter.options_file_format(options)], 0));
});
logseq.graph_parser.exporter._LT_handle_assets_in_property_value = (function logseq$graph_parser$exporter$_LT_handle_assets_in_property_value(pvalue,import_state,opts){
var temp__5823__auto__ = cljs.core.seq(logseq.graph_parser.exporter.asset_links_from_text(new cljs.core.Keyword(null,"user-config","user-config",-1138679827).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(pvalue),new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(opts)));
if(temp__5823__auto__){
var asset_links = temp__5823__auto__;
return logseq.graph_parser.exporter._LT_handle_assets_in_block(pvalue,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"asset-links","asset-links",-567435187),cljs.core.vec(asset_links)], null),import_state,opts);
} else {
return promesa.core.resolved(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block","block",664686210),pvalue], null));
}
});
/**
 * Convert asset markdown links in property value entities the same way block
 * bodies are converted, and create the referenced Asset entities.
 */
logseq.graph_parser.exporter._LT_handle_assets_in_property_values = (function logseq$graph_parser$exporter$_LT_handle_assets_in_property_values(pvalues_tx,import_state,opts){
if(cljs.core.truth_(cljs.core.some(logseq.graph_parser.exporter.property_value_asset_title_QMARK_,pvalues_tx))){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.all(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (pvalue){
if(cljs.core.truth_(logseq.graph_parser.exporter.property_value_asset_title_QMARK_(pvalue))){
return logseq.graph_parser.exporter._LT_handle_assets_in_property_value(pvalue,import_state,opts);
} else {
return promesa.core.resolved(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block","block",664686210),pvalue], null));
}
}),pvalues_tx))),(function (results){
return promesa.protocols._promise(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pvalues-tx","pvalues-tx",-418668372),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block","block",664686210),results),new cljs.core.Keyword(null,"asset-blocks-tx","asset-blocks-tx",-1804784438),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"asset-blocks-tx","asset-blocks-tx",-1804784438)),results)], null));
}));
}));
} else {
return promesa.core.resolved(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pvalues-tx","pvalues-tx",-418668372),pvalues_tx,new cljs.core.Keyword(null,"asset-blocks-tx","asset-blocks-tx",-1804784438),cljs.core.PersistentVector.EMPTY], null));
}
});
logseq.graph_parser.exporter.hls_annotation_md_file_QMARK_ = (function logseq$graph_parser$exporter$hls_annotation_md_file_QMARK_(file){
return clojure.string.starts_with_QMARK_((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.path.basename(file))),"hls__");
});
logseq.graph_parser.exporter.pdf_url_from_text = (function logseq$graph_parser$exporter$pdf_url_from_text(s){
if(typeof s === 'string'){
var trimmed = clojure.string.trim(s);
var url = (function (){var or__5142__auto__ = cljs.core.second(cljs.core.re_find(/\[[^\]]*\]\(([^)\s]+)\)/,trimmed));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return trimmed;
}
})();
if(((logseq.graph_parser.exporter.pdf_file_QMARK_(url)) && (((logseq.graph_parser.exporter.external_pdf_url_QMARK_(url)) || (logseq.graph_parser.exporter.windows_drive_path_QMARK_(url)))))){
return url;
} else {
return null;
}
} else {
return null;
}
});
logseq.graph_parser.exporter.url__GT_complex_link_map = (function logseq$graph_parser$exporter$url__GT_complex_link_map(url){
if(clojure.string.starts_with_QMARK_(url,"https://")){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),"https",new cljs.core.Keyword(null,"link","link",-1769163468),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(url,(8))], null);
} else {
if(clojure.string.starts_with_QMARK_(url,"http://")){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),"http",new cljs.core.Keyword(null,"link","link",-1769163468),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(url,(7))], null);
} else {
if(clojure.string.starts_with_QMARK_(url,"file://")){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),"file",new cljs.core.Keyword(null,"link","link",-1769163468),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(url,(7))], null);
} else {
if(logseq.graph_parser.exporter.windows_drive_path_QMARK_(url)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),"file",new cljs.core.Keyword(null,"link","link",-1769163468),url], null);
} else {
return null;
}
}
}
}
});
logseq.graph_parser.exporter.synthetic_pdf_asset_link = (function logseq$graph_parser$exporter$synthetic_pdf_asset_link(url){
var temp__5825__auto__ = logseq.graph_parser.exporter.url__GT_complex_link_map(url);
if(cljs.core.truth_(temp__5825__auto__)){
var link_map = temp__5825__auto__;
var label = (function (){var or__5142__auto__ = logseq.common.path.filename(url);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "pdf";
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Link",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Complex",link_map], null),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Plain",label], null)], null),new cljs.core.Keyword(null,"full_text","full_text",1634289075),(""+"!["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+"]("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+")"),new cljs.core.Keyword(null,"metadata","metadata",1799301597),""], null)], null);
} else {
return null;
}
});
logseq.graph_parser.exporter.hls_extracted_pdf_urls = (function logseq$graph_parser$exporter$hls_extracted_pdf_urls(extracted){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.exporter.pdf_url_from_text,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__83730_SHARP_){
return cljs.core.vals(cljs.core.select_keys(new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708).cljs$core$IFn$_invoke$arity$1(p1__83730_SHARP_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"file-path","file-path",-2005501162)], null)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pages","pages",-285406513).cljs$core$IFn$_invoke$arity$1(extracted),new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(extracted))], 0))));
});
/**
 * Create PDF assets from an annotation page's file properties.
 */
logseq.graph_parser.exporter._LT_import_hls_linked_pdf_assets_BANG_ = (function logseq$graph_parser$exporter$_LT_import_hls_linked_pdf_assets_BANG_(file,p__83732){
var map__83733 = p__83732;
var map__83733__$1 = cljs.core.__destructure_map(map__83733);
var options = map__83733__$1;
var import_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83733__$1,new cljs.core.Keyword(null,"import-state","import-state",1493794865));
var extracted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"pdf-annotation-pages","pdf-annotation-pages",-277368378).cljs$core$IFn$_invoke$arity$1(import_state)),module$node_modules$path$path.basename(file));
var asset_links = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.exporter.synthetic_pdf_asset_link),logseq.graph_parser.exporter.hls_extracted_pdf_urls(extracted));
if(cljs.core.seq(asset_links)){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter._LT_handle_assets_in_block(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","title","block/title",710445684),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"asset-links","asset-links",-567435187),asset_links], null),import_state,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"pdf-annotation-file","pdf-annotation-file",-1905484372),file))),(function (result){
return promesa.protocols._promise(new cljs.core.Keyword(null,"asset-blocks-tx","asset-blocks-tx",-1804784438).cljs$core$IFn$_invoke$arity$1(result));
}));
}));
} else {
return null;
}
});
/**
 * Converts a Quote AST node to markdown, preserving nested quote structure.
 * Content at depth=0 (used for Quote-block titles) has no outer prefix — the
 * Quote-block display-type provides the outermost blockquote styling.
 * Content at depth>=1 (used for mixed blocks) gets '> ' prefix at each level.
 */
logseq.graph_parser.exporter.quote_node__GT_markdown = (function logseq$graph_parser$exporter$quote_node__GT_markdown(quote_node,opts,depth){
var inner_elements = cljs.core.second(quote_node);
var parts = (function (){var iter__5628__auto__ = (function logseq$graph_parser$exporter$quote_node__GT_markdown_$_iter__83743(s__83744){
return (new cljs.core.LazySeq(null,(function (){
var s__83744__$1 = s__83744;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__83744__$1);
if(temp__5825__auto__){
var s__83744__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__83744__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__83744__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__83746 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__83745 = (0);
while(true){
if((i__83745 < size__5627__auto__)){
var el = cljs.core._nth(c__5626__auto__,i__83745);
var el_type = cljs.core.first(el);
cljs.core.chunk_append(b__83746,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Quote",el_type))?(function (){var G__83747 = el;
var G__83748 = opts;
var G__83749 = (depth + (1));
return (logseq.graph_parser.exporter.quote_node__GT_markdown.cljs$core$IFn$_invoke$arity$3 ? logseq.graph_parser.exporter.quote_node__GT_markdown.cljs$core$IFn$_invoke$arity$3(G__83747,G__83748,G__83749) : logseq.graph_parser.exporter.quote_node__GT_markdown.call(null,G__83747,G__83748,G__83749));
})():(function (){var text = logseq.graph_parser.exporter.ast__GT_text(el,opts);
if((depth > (0))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__83745,text,el_type,el,c__5626__auto__,size__5627__auto__,b__83746,s__83744__$2,temp__5825__auto__,inner_elements){
return (function (p1__83734_SHARP_){
return (""+"> "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__83734_SHARP_));
});})(i__83745,text,el_type,el,c__5626__auto__,size__5627__auto__,b__83746,s__83744__$2,temp__5825__auto__,inner_elements))
,clojure.string.split_lines(text)));
} else {
return text;
}
})()
));

var G__84212 = (i__83745 + (1));
i__83745 = G__84212;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__83746),logseq$graph_parser$exporter$quote_node__GT_markdown_$_iter__83743(cljs.core.chunk_rest(s__83744__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__83746),null);
}
} else {
var el = cljs.core.first(s__83744__$2);
var el_type = cljs.core.first(el);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Quote",el_type))?(function (){var G__83750 = el;
var G__83751 = opts;
var G__83752 = (depth + (1));
return (logseq.graph_parser.exporter.quote_node__GT_markdown.cljs$core$IFn$_invoke$arity$3 ? logseq.graph_parser.exporter.quote_node__GT_markdown.cljs$core$IFn$_invoke$arity$3(G__83750,G__83751,G__83752) : logseq.graph_parser.exporter.quote_node__GT_markdown.call(null,G__83750,G__83751,G__83752));
})():(function (){var text = logseq.graph_parser.exporter.ast__GT_text(el,opts);
if((depth > (0))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (text,el_type,el,s__83744__$2,temp__5825__auto__,inner_elements){
return (function (p1__83734_SHARP_){
return (""+"> "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__83734_SHARP_));
});})(text,el_type,el,s__83744__$2,temp__5825__auto__,inner_elements))
,clojure.string.split_lines(text)));
} else {
return text;
}
})()
),logseq$graph_parser$exporter$quote_node__GT_markdown_$_iter__83743(cljs.core.rest(s__83744__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(inner_elements);
})();
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,parts));
});
/**
 * Handles blocks containing markdown blockquotes or #+BEGIN_QUOTE:
 * - Pure quote blocks (empty heading + all body elements are Quote nodes):
 *   convert to #Quote-block with quote content as title. Nested quotes are
 *   preserved using '> ' markdown prefix at each nesting level.
 * - Blocks where the title contains #+BEGIN_QUOTE and has Quote body elements
 *   but are not pure quote blocks: retain as regular block with '> ' prefix
 *   added to quote content so it renders as a blockquote in the DB graph.
 */
logseq.graph_parser.exporter.handle_quotes = (function logseq$graph_parser$exporter$handle_quotes(block,opts){
var ast_blocks = new cljs.core.Keyword("block.temp","ast-blocks","block.temp/ast-blocks",1272022732).cljs$core$IFn$_invoke$arity$1(block);
var heading = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__83757_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Heading",cljs.core.first(p1__83757_SHARP_));
}),ast_blocks));
var heading_title = (cljs.core.truth_(heading)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.second(heading),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583)], null)):null);
var heading_empty_QMARK_ = (((heading == null)) || (cljs.core.empty_QMARK_(heading_title)));
var body_elements = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__83758_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Heading",cljs.core.first(p1__83758_SHARP_));
}),ast_blocks);
var all_body_quotes_QMARK_ = ((cljs.core.seq(body_elements)) && (cljs.core.every_QMARK_((function (p1__83759_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Quote",cljs.core.first(p1__83759_SHARP_));
}),body_elements)));
var has_quote_body_QMARK_ = cljs.core.some((function (p1__83760_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Quote",cljs.core.first(p1__83760_SHARP_));
}),body_elements);
var org_quote_QMARK_ = cljs.core.boolean$(cljs.core.re_find(/#\+BEGIN_QUOTE/i,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block)))));
if(((heading_empty_QMARK_) && (all_body_quotes_QMARK_))){
var combined_title = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83761_SHARP_){
return logseq.graph_parser.exporter.quote_node__GT_markdown(p1__83761_SHARP_,opts,(0));
}),body_elements)));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","title","block/title",710445684),combined_title,new cljs.core.Keyword("logseq.property.node","display-type","logseq.property.node/display-type",442446189),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.class","Quote-block","logseq.class/Quote-block",-1176166617)], null)], null)], 0));
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = has_quote_body_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return org_quote_QMARK_;
} else {
return and__5140__auto__;
}
})())){
var ordered_blocks = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(ast_blocks)], null),cljs.core.reverse(cljs.core.rest(ast_blocks)));
var tagged_parts = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__83762_SHARP_){
return clojure.string.blank_QMARK_(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(p1__83762_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (el){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"quote?","quote?",-1114029317),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Quote",cljs.core.first(el)),new cljs.core.Keyword(null,"text","text",-1790561697),(function (){var G__83763 = cljs.core.first(el);
switch (G__83763) {
case "Heading":
var title = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.second(el),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583)], null));
if(cljs.core.seq(title)){
return logseq.graph_parser.exporter.ast__GT_text(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Paragraph",title], null),opts);
} else {
return null;
}

break;
case "Quote":
return logseq.graph_parser.exporter.quote_node__GT_markdown(el,opts,(1));

break;
default:
return logseq.graph_parser.exporter.ast__GT_text(el,opts);

}
})()], null);
}),ordered_blocks));
var combined = cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__83764,p__83765){
var vec__83766 = p__83764;
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83766,(0),null);
var prev_quote_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83766,(1),null);
var map__83769 = p__83765;
var map__83769__$1 = cljs.core.__destructure_map(map__83769);
var quote_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83769__$1,new cljs.core.Keyword(null,"quote?","quote?",-1114029317));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83769__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((clojure.string.blank_QMARK_(result))?text:(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(result)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(prev_quote_QMARK_)?"\n\n":"\n"))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text))),quote_QMARK_], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",false], null),tagged_parts));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","title","block/title",710445684),combined);
} else {
return block;

}
}
});
/**
 * If a block's entire content is a single displayed math formula, convert to #Math node.
 *   Detects blocks whose title is entirely delimited by $$ markers.
 */
logseq.graph_parser.exporter.handle_math = (function logseq$graph_parser$exporter$handle_math(block){
var title = clojure.string.trim(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block));
if(((clojure.string.starts_with_QMARK_(title,"$$")) && (((clojure.string.ends_with_QMARK_(title,"$$")) && ((((((title).length) > (4))) && ((!(clojure.string.includes_QMARK_(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(title,(2),(((title).length) - (2))),"$$")))))))))){
var math_content = clojure.string.trim(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(title,(2),(((title).length) - (2))));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","title","block/title",710445684),math_content,new cljs.core.Keyword("logseq.property.node","display-type","logseq.property.node/display-type",442446189),new cljs.core.Keyword(null,"math","math",-2026912803)], null)], 0)),new cljs.core.Keyword("block","tags","block/tags",1814948340),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("logseq.class","Math-block","logseq.class/Math-block",-2038963121));
} else {
return block;
}
});
/**
 * Parses a block title string line-by-line, splitting into non-code text parts
 * and code fence segments. All code fences are extracted regardless of whether
 * they have a language tag; :lang is nil when not specified.
 * Returns {:text-parts [...] :code-segs [{:text ... :lang ...}]}.
 */
logseq.graph_parser.exporter.split_title_by_code_fences = (function logseq$graph_parser$exporter$split_title_by_code_fences(title){
var lines = clojure.string.split_lines(title);
var remaining = lines;
var in_code_QMARK_ = false;
var lang = null;
var current = cljs.core.PersistentVector.EMPTY;
var text_parts = cljs.core.PersistentVector.EMPTY;
var code_segs = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(remaining)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-parts","text-parts",574213229),((cljs.core.seq(current))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(text_parts,clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",current)):text_parts),new cljs.core.Keyword(null,"code-segs","code-segs",-889652742),code_segs], null);
} else {
var line = cljs.core.first(remaining);
var trimmed_line = clojure.string.trim(line);
var fence_start_QMARK_ = (function (){var and__5140__auto__ = cljs.core.not(in_code_QMARK_);
if(and__5140__auto__){
return cljs.core.re_matches(/```.*/,trimmed_line);
} else {
return and__5140__auto__;
}
})();
var fence_end_QMARK_ = (function (){var and__5140__auto__ = in_code_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(trimmed_line,"```");
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(fence_start_QMARK_)){
var G__84222 = cljs.core.rest(remaining);
var G__84223 = true;
var G__84224 = cljs.core.not_empty(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(trimmed_line,(3)));
var G__84225 = cljs.core.PersistentVector.EMPTY;
var G__84226 = ((cljs.core.seq(current))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(text_parts,clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",current)):text_parts);
var G__84227 = code_segs;
remaining = G__84222;
in_code_QMARK_ = G__84223;
lang = G__84224;
current = G__84225;
text_parts = G__84226;
code_segs = G__84227;
continue;
} else {
if(cljs.core.truth_(fence_end_QMARK_)){
var G__84228 = cljs.core.rest(remaining);
var G__84229 = false;
var G__84230 = null;
var G__84231 = cljs.core.PersistentVector.EMPTY;
var G__84232 = text_parts;
var G__84233 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(code_segs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",current),new cljs.core.Keyword(null,"lang","lang",-1819677104),lang], null));
remaining = G__84228;
in_code_QMARK_ = G__84229;
lang = G__84230;
current = G__84231;
text_parts = G__84232;
code_segs = G__84233;
continue;
} else {
var G__84234 = cljs.core.rest(remaining);
var G__84235 = in_code_QMARK_;
var G__84236 = lang;
var G__84237 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,line);
var G__84238 = text_parts;
var G__84239 = code_segs;
remaining = G__84234;
in_code_QMARK_ = G__84235;
lang = G__84236;
current = G__84237;
text_parts = G__84238;
code_segs = G__84239;
continue;

}
}
}
break;
}
});
/**
 * Builds child block tx maps for extracted code snippets, tagging each as a
 * Code-block with its detected language.
 */
logseq.graph_parser.exporter.build_code_snippet_child_blocks = (function logseq$graph_parser$exporter$build_code_snippet_child_blocks(parent_block,code_segs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__83770){
var map__83771 = p__83770;
var map__83771__$1 = cljs.core.__destructure_map(map__83771);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83771__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83771__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var G__83772 = (function (){var G__83773 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),(datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 ? datascript.core.squuid.cljs$core$IFn$_invoke$arity$0() : datascript.core.squuid.call(null)),new cljs.core.Keyword("block","title","block/title",710445684),text,new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(parent_block)], null),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(parent_block),new cljs.core.Keyword("block","order","block/order",-1429282437),logseq.db.common.order.gen_key.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.class","Code-block","logseq.class/Code-block",1454986641)], null),new cljs.core.Keyword("logseq.property.node","display-type","logseq.property.node/display-type",442446189),new cljs.core.Keyword(null,"code","code",1586293142)], null);
return (logseq.db.sqlite.util.block_with_timestamps.cljs$core$IFn$_invoke$arity$1 ? logseq.db.sqlite.util.block_with_timestamps.cljs$core$IFn$_invoke$arity$1(G__83773) : logseq.db.sqlite.util.block_with_timestamps.call(null,G__83773));
})();
if(cljs.core.truth_(lang)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83772,new cljs.core.Keyword("logseq.property.code","lang","logseq.property.code/lang",-857897165),lang);
} else {
return G__83772;
}
}),code_segs);
});
/**
 * Locate embed macros in UTF-8 source, excluding code blocks and code spans.
 */
logseq.graph_parser.exporter.embed_macro_spans = (function logseq$graph_parser$exporter$embed_macro_spans(title,format){
var encoded = logseq.graph_parser.utf8.encode(title);
var config = JSON.stringify(cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(logseq.graph_parser.mldoc.default_config_map.cljs$core$IFn$_invoke$arity$1(format),new cljs.core.Keyword(null,"inline_type_with_pos","inline_type_with_pos",-757273428),true)));
var ast = logseq.common.util.json__GT_clj(logseq.graph_parser.mldoc.parse_json(title,config));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p__83774){
var vec__83775 = p__83774;
var vec__83778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83775,(0),null);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83778,(0),null);
var map__83781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83775,(1),null);
var map__83781__$1 = cljs.core.__destructure_map(map__83781);
var start_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83781__$1,new cljs.core.Keyword(null,"start_pos","start_pos",272375959));
var end_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83781__$1,new cljs.core.Keyword(null,"end_pos","end_pos",-1418940));
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Example",null,"Src",null], null), null),kind)){
return null;
} else {
var source = logseq.graph_parser.utf8.substring.cljs$core$IFn$_invoke$arity$3(encoded,start_pos,end_pos);
var inlines = logseq.common.util.json__GT_clj(logseq.graph_parser.mldoc.inline_parse_json(source,config));
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__83782){
var vec__83783 = p__83782;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83783,(0),null);
var positions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83783,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Macro",cljs.core.first(node))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("embed",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second(node)))))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"start","start",-355208981),(start_pos + new cljs.core.Keyword(null,"start_pos","start_pos",272375959).cljs$core$IFn$_invoke$arity$1(positions)),new cljs.core.Keyword(null,"end","end",-268185958),(start_pos + new cljs.core.Keyword(null,"end_pos","end_pos",-1418940).cljs$core$IFn$_invoke$arity$1(positions))], null);
} else {
return null;
}
}),inlines);
}
})),ast);
});
/**
 * Remove embed source spans while leaving task and heading conversion to their handlers.
 */
logseq.graph_parser.exporter.title_without_embed = (function logseq$graph_parser$exporter$title_without_embed(title,marker,spans){
var encoded = logseq.graph_parser.utf8.encode(title);
var map__83786 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__83787,p__83788){
var map__83789 = p__83787;
var map__83789__$1 = cljs.core.__destructure_map(map__83789);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83789__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var fragments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83789__$1,new cljs.core.Keyword(null,"fragments","fragments",1456109445));
var map__83790 = p__83788;
var map__83790__$1 = cljs.core.__destructure_map(map__83790);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83790__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83790__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var fragment_end = (((((start > offset)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((32),(encoded[(start - (1))]))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((32),(encoded[end])))))))?(start - (1)):start);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"offset","offset",296498311),end,new cljs.core.Keyword(null,"fragments","fragments",1456109445),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fragments,logseq.graph_parser.utf8.substring.cljs$core$IFn$_invoke$arity$3(encoded,offset,fragment_end))], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"offset","offset",296498311),(0),new cljs.core.Keyword(null,"fragments","fragments",1456109445),cljs.core.PersistentVector.EMPTY], null),spans);
var map__83786__$1 = cljs.core.__destructure_map(map__83786);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83786__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var fragments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83786__$1,new cljs.core.Keyword(null,"fragments","fragments",1456109445));
var text = clojure.string.trim(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fragments,logseq.graph_parser.utf8.substring.cljs$core$IFn$_invoke$arity$2(encoded,offset))));
var body = clojure.string.replace(text,/^#+(?:\s+|$)/,"");
var body_without_marker = (cljs.core.truth_((function (){var and__5140__auto__ = marker;
if(cljs.core.truth_(and__5140__auto__)){
return clojure.string.starts_with_QMARK_(body,marker);
} else {
return and__5140__auto__;
}
})())?clojure.string.trim(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(body,cljs.core.count(marker))):body);
if(clojure.string.blank_QMARK_(body_without_marker)){
return null;
} else {
return text;
}
});
logseq.graph_parser.exporter.embed_target_uuid = (function logseq$graph_parser$exporter$embed_target_uuid(block,page_names_to_uuids,embed_node,log_fn){
var arg = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(embed_node)))));
if(logseq.common.util.page_ref.page_ref_QMARK_(arg)){
var page_name = logseq.graph_parser.text.get_page_name(arg);
if(logseq.common.util.uuid_string_QMARK_(page_name)){
return cljs.core.uuid(page_name);
} else {
var or__5142__auto__ = (function (){try{return logseq.graph_parser.exporter.get_page_uuid(page_names_to_uuids,logseq.common.util.page_name_sanity_lc(page_name),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block","block",664686210),block], null));
}catch (e83791){var _ = e83791;
return null;
}})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (log_fn.cljs$core$IFn$_invoke$arity$4 ? log_fn.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"missing-embed-page","missing-embed-page",1847575998),"Ignore embed of a page that is not found",new cljs.core.Keyword(null,"page-name","page-name",974981762),page_name) : log_fn.call(null,new cljs.core.Keyword(null,"missing-embed-page","missing-embed-page",1847575998),"Ignore embed of a page that is not found",new cljs.core.Keyword(null,"page-name","page-name",974981762),page_name));
}
}
} else {
if(logseq.common.util.block_ref.block_ref_QMARK_(arg)){
return cljs.core.uuid(logseq.common.util.block_ref.get_block_ref_id(arg));
} else {
var G__83792 = new cljs.core.Keyword(null,"invalid-embed-arguments","invalid-embed-arguments",1562607594);
var G__83793 = "Ignore embed because of invalid arguments";
var G__83794 = new cljs.core.Keyword(null,"args","args",1315556576);
var G__83795 = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(embed_node));
return (log_fn.cljs$core$IFn$_invoke$arity$4 ? log_fn.cljs$core$IFn$_invoke$arity$4(G__83792,G__83793,G__83794,G__83795) : log_fn.call(null,G__83792,G__83793,G__83794,G__83795));

}
}
});
/**
 * Convert a single standalone embed to a link; keep other embeds as ordered child blocks.
 */
logseq.graph_parser.exporter.handle_embeds = (function logseq$graph_parser$exporter$handle_embeds(block,page_names_to_uuids,p__83796,p__83797){
var map__83798 = p__83796;
var map__83798__$1 = cljs.core.__destructure_map(map__83798);
var embeds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83798__$1,new cljs.core.Keyword(null,"embeds","embeds",833349080));
var map__83799 = p__83797;
var map__83799__$1 = cljs.core.__destructure_map(map__83799);
var log_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83799__$1,new cljs.core.Keyword(null,"log-fn","log-fn",-2003241282),cljs.core.prn);
if(cljs.core.seq(embeds)){
var spans = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p__83800){
var map__83801 = p__83800;
var map__83801__$1 = cljs.core.__destructure_map(map__83801);
var span = map__83801__$1;
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83801__$1,new cljs.core.Keyword(null,"node","node",581201198));
var target = logseq.graph_parser.exporter.embed_target_uuid(block,page_names_to_uuids,node,log_fn);
if(cljs.core.uuid_QMARK_(target)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(span,new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),target], null));
} else {
return null;
}
})),logseq.graph_parser.exporter.embed_macro_spans(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block)));
var text = logseq.graph_parser.exporter.title_without_embed(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","marker","block/marker",1231576318).cljs$core$IFn$_invoke$arity$1(block),spans);
if(cljs.core.empty_QMARK_(spans)){
return block;
} else {
if((((text == null)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(spans))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block,new cljs.core.Keyword("block","title","block/title",710445684),"",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","link","block/link",-1872399993),new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(cljs.core.first(spans))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block,new cljs.core.Keyword("block","title","block/title",710445684),(function (){var or__5142__auto__ = text;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.temp","embed-links","block.temp/embed-links",1750508749),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"link","link",-1769163468),spans)], 0));

}
}
} else {
return block;
}
});
/**
 * The embed of a block that also has text, as its child block
 */
logseq.graph_parser.exporter.build_embed_child_block = (function logseq$graph_parser$exporter$build_embed_child_block(parent_block,link){
var G__83802 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),(datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 ? datascript.core.squuid.cljs$core$IFn$_invoke$arity$0() : datascript.core.squuid.call(null)),new cljs.core.Keyword("block","title","block/title",710445684),"",new cljs.core.Keyword("block","link","block/link",-1872399993),link,new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(parent_block)], null),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(parent_block),new cljs.core.Keyword("block","order","block/order",-1429282437),logseq.db.common.order.gen_key.cljs$core$IFn$_invoke$arity$0()], null);
return (logseq.db.sqlite.util.block_with_timestamps.cljs$core$IFn$_invoke$arity$1 ? logseq.db.sqlite.util.block_with_timestamps.cljs$core$IFn$_invoke$arity$1(G__83802) : logseq.db.sqlite.util.block_with_timestamps.call(null,G__83802));
});
logseq.graph_parser.exporter.dissoc_nil_block_refs = (function logseq$graph_parser$exporter$dissoc_nil_block_refs(block){
var G__83803 = block;
if((new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(block) == null)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__83803,new cljs.core.Keyword("block","refs","block/refs",-1214495349));
} else {
return G__83803;
}
});
logseq.graph_parser.exporter.at_least_two_QMARK_ = (function logseq$graph_parser$exporter$at_least_two_QMARK_(s,substr){
if(cljs.core.empty_QMARK_(substr)){
return false;
} else {
var start = (0);
var cnt = (0);
while(true){
var idx = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(s,substr,start);
if((cnt >= (2))){
return true;
} else {
if((idx == null)){
return false;
} else {
var G__84251 = (idx + cljs.core.count(substr));
var G__84252 = (cnt + (1));
start = G__84251;
cnt = G__84252;
continue;

}
}
break;
}
}
});
/**
 * Returns a vector of block and optional block children tx. If a block
 *   contains code fence(s) i.e. ```, converts block to a #Code node.  If user
 *   enables :extract-code-snippets? option, multiple code fences are extracted out
 *   of text and put into children blocks in the order they appear
 */
logseq.graph_parser.exporter.handle_code_blocks = (function logseq$graph_parser$exporter$handle_code_blocks(block_SINGLEQUOTE_,options){
var title = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_);
var has_fence_QMARK_ = ((typeof title === 'string') && (logseq.graph_parser.exporter.at_least_two_QMARK_(title,"```")));
var extract_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-options","user-options",-84696866),new cljs.core.Keyword(null,"extract-code-snippets?","extract-code-snippets?",-1243056406)], null));
var vec__83805 = ((has_fence_QMARK_)?(function (){var map__83808 = logseq.graph_parser.exporter.split_title_by_code_fences(title);
var map__83808__$1 = cljs.core.__destructure_map(map__83808);
var text_parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83808__$1,new cljs.core.Keyword(null,"text-parts","text-parts",574213229));
var code_segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83808__$1,new cljs.core.Keyword(null,"code-segs","code-segs",-889652742));
var pure_single_code_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(code_segs))) && (cljs.core.every_QMARK_(clojure.string.blank_QMARK_,text_parts)));
var has_mixed_content_QMARK_ = (function (){var and__5140__auto__ = extract_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = cljs.core.seq(code_segs);
if(and__5140__auto____$1){
return cljs.core.some((function (p1__83804_SHARP_){
return (!(clojure.string.blank_QMARK_(p1__83804_SHARP_)));
}),text_parts);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
if(pure_single_code_QMARK_){
var map__83809 = cljs.core.first(code_segs);
var map__83809__$1 = cljs.core.__destructure_map(map__83809);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83809__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83809__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__83810 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block_SINGLEQUOTE_,new cljs.core.Keyword("block","title","block/title",710445684),text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("logseq.property.node","display-type","logseq.property.node/display-type",442446189),new cljs.core.Keyword(null,"code","code",1586293142)], 0)),new cljs.core.Keyword("block","tags","block/tags",1814948340),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("logseq.class","Code-block","logseq.class/Code-block",1454986641));
if(cljs.core.truth_(lang)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83810,new cljs.core.Keyword("logseq.property.code","lang","logseq.property.code/lang",-857897165),lang);
} else {
return G__83810;
}
})(),cljs.core.PersistentVector.EMPTY], null);
} else {
if(cljs.core.truth_(has_mixed_content_QMARK_)){
var remaining_title = clojure.string.trim(clojure.string.replace(clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",text_parts),/\n{2,}/,"\n"));
var updated_block = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block_SINGLEQUOTE_,new cljs.core.Keyword("block","title","block/title",710445684),remaining_title);
var code_children = logseq.graph_parser.exporter.build_code_snippet_child_blocks(updated_block,code_segs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_block,code_children], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_SINGLEQUOTE_,cljs.core.PersistentVector.EMPTY], null);

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_SINGLEQUOTE_,cljs.core.PersistentVector.EMPTY], null));
var final_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83805,(0),null);
var code_children_tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83805,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [final_block,code_children_tx], null);
});
logseq.graph_parser.exporter.build_block_tx_core = (function logseq$graph_parser$exporter$build_block_tx_core(db,block_STAR_,_pre_blocks,p__83811,walked_ast_blocks,options){
var map__83812 = p__83811;
var map__83812__$1 = cljs.core.__destructure_map(map__83812);
var _per_file_state = map__83812__$1;
var page_names_to_uuids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83812__$1,new cljs.core.Keyword(null,"page-names-to-uuids","page-names-to-uuids",-875423247));
var map__83813 = logseq.graph_parser.exporter.handle_block_properties(block_STAR_,db,page_names_to_uuids,new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(block_STAR_),walked_ast_blocks,options);
var map__83813__$1 = cljs.core.__destructure_map(map__83813);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83813__$1,new cljs.core.Keyword(null,"block","block",664686210));
var properties_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83813__$1,new cljs.core.Keyword(null,"properties-tx","properties-tx",-1476843279));
var map__83814 = logseq.graph_parser.exporter.update_block_deadline_and_scheduled(db,block,page_names_to_uuids,options);
var map__83814__$1 = cljs.core.__destructure_map(map__83814);
var block_after_built_in_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83814__$1,new cljs.core.Keyword(null,"block","block",664686210));
var deadline_properties_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83814__$1,new cljs.core.Keyword(null,"properties-tx","properties-tx",-1476843279));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block-after-built-in-props","block-after-built-in-props",-978813230),block_after_built_in_props,new cljs.core.Keyword(null,"properties-tx","properties-tx",-1476843279),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(properties_tx,deadline_properties_tx)], null);
});
logseq.graph_parser.exporter.complete_block_tx_data = (function logseq$graph_parser$exporter$complete_block_tx_data(db,block_STAR_,block_after_assets,pre_blocks,per_file_state,walked_ast_blocks,p__83816,p__83817,asset_blocks_tx){
var map__83818 = p__83816;
var map__83818__$1 = cljs.core.__destructure_map(map__83818);
var options = map__83818__$1;
var import_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83818__$1,new cljs.core.Keyword(null,"import-state","import-state",1493794865));
var journal_created_ats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83818__$1,new cljs.core.Keyword(null,"journal-created-ats","journal-created-ats",339724852));
var map__83819 = p__83817;
var map__83819__$1 = cljs.core.__destructure_map(map__83819);
var properties_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83819__$1,new cljs.core.Keyword(null,"properties-tx","properties-tx",-1476843279));
var map__83820 = per_file_state;
var map__83820__$1 = cljs.core.__destructure_map(map__83820);
var page_names_to_uuids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83820__$1,new cljs.core.Keyword(null,"page-names-to-uuids","page-names-to-uuids",-875423247));
var journal_page_created_at = (function (){var G__83824 = new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block_STAR_);
var G__83824__$1 = (((G__83824 == null))?null:cljs.core.second(G__83824));
if((G__83824__$1 == null)){
return null;
} else {
return (journal_created_ats.cljs$core$IFn$_invoke$arity$1 ? journal_created_ats.cljs$core$IFn$_invoke$arity$1(G__83824__$1) : journal_created_ats.call(null,G__83824__$1));
}
})();
var prepared_block = (function (){var G__83825 = block_after_assets;
if(cljs.core.truth_(journal_page_created_at)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83825,new cljs.core.Keyword("block","created-at","block/created-at",1440015),journal_page_created_at);
} else {
return G__83825;
}
})();
var block_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(logseq.graph_parser.exporter.add_missing_timestamps.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.exporter.update_block_heading(logseq.graph_parser.exporter.update_block_priority(logseq.graph_parser.exporter.handle_math(logseq.graph_parser.exporter.update_block_marker(logseq.graph_parser.exporter.handle_quotes(logseq.graph_parser.exporter.handle_embeds(logseq.graph_parser.exporter.update_block_tags(logseq.graph_parser.exporter.dissoc_nil_block_refs(logseq.graph_parser.exporter.update_block_refs(logseq.graph_parser.exporter.fix_block_name_lookup_ref(logseq.graph_parser.exporter.fix_pre_block_references(prepared_block,pre_blocks,page_names_to_uuids),page_names_to_uuids),page_names_to_uuids)),db,new cljs.core.Keyword(null,"user-options","user-options",-84696866).cljs$core$IFn$_invoke$arity$1(options),per_file_state,new cljs.core.Keyword(null,"all-idents","all-idents",-980997938).cljs$core$IFn$_invoke$arity$1(import_state)),page_names_to_uuids,walked_ast_blocks,cljs.core.select_keys(options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"log-fn","log-fn",-2003241282)], null))),cljs.core.select_keys(options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"log-fn","log-fn",-2003241282)], null))),db,options)),options)),options),new cljs.core.Keyword("block","format","block/format",-1212045901),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.temp","ast-blocks","block.temp/ast-blocks",1272022732)], 0));
var embed_links = new cljs.core.Keyword("block.temp","embed-links","block.temp/embed-links",1750508749).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_);
var vec__83821 = logseq.graph_parser.exporter.handle_code_blocks(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(block_SINGLEQUOTE_,new cljs.core.Keyword("block.temp","embed-links","block.temp/embed-links",1750508749)),options);
var final_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83821,(0),null);
var code_children_tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83821,(1),null);
var embed_children = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__83815_SHARP_){
return logseq.graph_parser.exporter.build_embed_child_block(final_block,p1__83815_SHARP_);
}),embed_links);
if(cljs.core.seq(embed_children)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"embed-child-uuids","embed-child-uuids",2120073418).cljs$core$IFn$_invoke$arity$1(import_state),cljs.core.into,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),embed_children));
} else {
}

return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(properties_tx,asset_blocks_tx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [final_block], null),embed_children,code_children_tx], 0));
});
logseq.graph_parser.exporter.import_progress_BANG_ = (function logseq$graph_parser$exporter$import_progress_BANG_(options,m){
logseq.graph_parser.import_profile.set_import_progress_BANG_(options,m);

return null;
});
logseq.graph_parser.exporter.log_phase_ms_BANG_ = (function logseq$graph_parser$exporter$log_phase_ms_BANG_(log_fn,phase,start,extra){
if(cljs.core.truth_((function (){var and__5140__auto__ = log_fn;
if(cljs.core.truth_(and__5140__auto__)){
return start;
} else {
return and__5140__auto__;
}
})())){
return logseq.graph_parser.import_profile.log_phase_BANG_.cljs$core$IFn$_invoke$arity$4(log_fn,phase,start,extra);
} else {
return null;
}
});
logseq.graph_parser.exporter.build_block_tx_sync = (function logseq$graph_parser$exporter$build_block_tx_sync(db,block_STAR_,pre_blocks,per_file_state,walked_ast_blocks,options){
var core = logseq.graph_parser.exporter.build_block_tx_core(db,block_STAR_,pre_blocks,per_file_state,walked_ast_blocks,options);
return logseq.graph_parser.exporter.complete_block_tx_data(db,block_STAR_,new cljs.core.Keyword(null,"block-after-built-in-props","block-after-built-in-props",-978813230).cljs$core$IFn$_invoke$arity$1(core),pre_blocks,per_file_state,walked_ast_blocks,options,core,null);
});
logseq.graph_parser.exporter._LT_complete_block_tx_with_assets = (function logseq$graph_parser$exporter$_LT_complete_block_tx_with_assets(db,block_STAR_,pre_blocks,per_file_state,walked_ast_blocks,options,core){
var asset_opts = logseq.graph_parser.exporter.asset_handle_opts(options);
var import_state = new cljs.core.Keyword(null,"import-state","import-state",1493794865).cljs$core$IFn$_invoke$arity$1(options);
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core.seq(new cljs.core.Keyword(null,"asset-links","asset-links",-567435187).cljs$core$IFn$_invoke$arity$1(walked_ast_blocks)))?logseq.graph_parser.exporter._LT_handle_assets_in_block(new cljs.core.Keyword(null,"block-after-built-in-props","block-after-built-in-props",-978813230).cljs$core$IFn$_invoke$arity$1(core),walked_ast_blocks,import_state,asset_opts):promesa.core.resolved(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"block-after-built-in-props","block-after-built-in-props",-978813230).cljs$core$IFn$_invoke$arity$1(core)], null)))),(function (p__83826){
var map__83827 = p__83826;
var map__83827__$1 = cljs.core.__destructure_map(map__83827);
var block_after_assets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83827__$1,new cljs.core.Keyword(null,"block","block",664686210));
var asset_blocks_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83827__$1,new cljs.core.Keyword(null,"asset-blocks-tx","asset-blocks-tx",-1804784438));
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter._LT_handle_assets_in_property_values(new cljs.core.Keyword(null,"properties-tx","properties-tx",-1476843279).cljs$core$IFn$_invoke$arity$1(core),import_state,asset_opts)),(function (p__83828){
var map__83829 = p__83828;
var map__83829__$1 = cljs.core.__destructure_map(map__83829);
var pvalue_asset_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83829__$1,new cljs.core.Keyword(null,"asset-blocks-tx","asset-blocks-tx",-1804784438));
var pvalues_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83829__$1,new cljs.core.Keyword(null,"pvalues-tx","pvalues-tx",-418668372));
return promesa.protocols._promise(logseq.graph_parser.exporter.complete_block_tx_data(db,block_STAR_,block_after_assets,pre_blocks,per_file_state,walked_ast_blocks,options,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(core,new cljs.core.Keyword(null,"properties-tx","properties-tx",-1476843279),pvalues_tx),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(asset_blocks_tx,pvalue_asset_tx)));
}));
}));
}));
});
logseq.graph_parser.exporter._LT_build_block_tx = (function logseq$graph_parser$exporter$_LT_build_block_tx(db,block_STAR_,pre_blocks,per_file_state,walked_ast_blocks,options){
return logseq.graph_parser.exporter._LT_complete_block_tx_with_assets(db,block_STAR_,pre_blocks,per_file_state,walked_ast_blocks,options,logseq.graph_parser.exporter.build_block_tx_core(db,block_STAR_,pre_blocks,per_file_state,walked_ast_blocks,options));
});
logseq.graph_parser.exporter.update_page_alias = (function logseq$graph_parser$exporter$update_page_alias(m,page_names_to_uuids){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("block","alias","block/alias",-2112644699),(function (aliases){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83830_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),logseq.graph_parser.exporter.get_page_uuid(page_names_to_uuids,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(p1__83830_SHARP_),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block","block",664686210),p1__83830_SHARP_], null))],null));
}),aliases);
}));
});
logseq.graph_parser.exporter.build_new_page_or_class = (function logseq$graph_parser$exporter$build_new_page_or_class(m,db,per_file_state,all_idents,p__83831){
var map__83832 = p__83831;
var map__83832__$1 = cljs.core.__destructure_map(map__83832);
var options = map__83832__$1;
var user_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83832__$1,new cljs.core.Keyword(null,"user-options","user-options",-84696866));
var journal_created_ats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83832__$1,new cljs.core.Keyword(null,"journal-created-ats","journal-created-ats",339724852));
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.exporter.update_page_tags(logseq.graph_parser.exporter.add_missing_timestamps.cljs$core$IFn$_invoke$arity$2((function (){var G__83833 = m;
var G__83833__$1 = ((cljs.core.not(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(m)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83833,new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(m)):G__83833);
var G__83833__$2 = ((cljs.core.seq(new cljs.core.Keyword("block","alias","block/alias",-2112644699).cljs$core$IFn$_invoke$arity$1(m)))?logseq.graph_parser.exporter.update_page_alias(G__83833__$1,new cljs.core.Keyword(null,"page-names-to-uuids","page-names-to-uuids",-875423247).cljs$core$IFn$_invoke$arity$1(per_file_state)):G__83833__$1);
if(cljs.core.truth_((function (){var G__83834 = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(m);
return (journal_created_ats.cljs$core$IFn$_invoke$arity$1 ? journal_created_ats.cljs$core$IFn$_invoke$arity$1(G__83834) : journal_created_ats.call(null,G__83834));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83833__$2,new cljs.core.Keyword("block","created-at","block/created-at",1440015),(function (){var G__83835 = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(m);
return (journal_created_ats.cljs$core$IFn$_invoke$arity$1 ? journal_created_ats.cljs$core$IFn$_invoke$arity$1(G__83835) : journal_created_ats.call(null,G__83835));
})());
} else {
return G__83833__$2;
}
})(),options),db,user_options,per_file_state,all_idents),new cljs.core.Keyword("logseq.graph-parser.exporter","file-page?","logseq.graph-parser.exporter/file-page?",-397151291));
});
/**
 * Like ldb/get-page-parents but using all-existing-page-uuids
 */
logseq.graph_parser.exporter.get_page_parents = (function logseq$graph_parser$exporter$get_page_parents(node,all_existing_page_uuids){
var get_parent = (function logseq$graph_parser$exporter$get_page_parents_$_get_parent(n){
var parent = (function (){var or__5142__auto__ = new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803).cljs$core$IFn$_invoke$arity$1(n);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(n);
}
})();
var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(parent);
if(cljs.core.truth_(temp__5825__auto__)){
var parent_id = temp__5825__auto__;
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_existing_page_uuids,parent_id);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"No parent page found for "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(parent)], 0)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),n], null));
}
} else {
return null;
}
});
var temp__5825__auto__ = get_parent(node);
if(cljs.core.truth_(temp__5825__auto__)){
var parent = temp__5825__auto__;
var current_parent = parent;
var parents_SINGLEQUOTE_ = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_((function (){var and__5140__auto__ = current_parent;
if(cljs.core.truth_(and__5140__auto__)){
return (!(cljs.core.contains_QMARK_(parents_SINGLEQUOTE_,current_parent)));
} else {
return and__5140__auto__;
}
})())){
var G__84269 = get_parent(current_parent);
var G__84270 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents_SINGLEQUOTE_,current_parent);
current_parent = G__84269;
parents_SINGLEQUOTE_ = G__84270;
continue;
} else {
return cljs.core.vec(cljs.core.reverse(parents_SINGLEQUOTE_));
}
break;
}
} else {
return null;
}
});
logseq.graph_parser.exporter.page_name_lookup_key = (function logseq$graph_parser$exporter$page_name_lookup_key(p,classes_from_property_parents,all_existing_page_uuids){
var temp__5823__auto__ = (function (){var and__5140__auto__ = ((cljs.core.contains_QMARK_(new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword("logseq.class","Tag","logseq.class/Tag",-538902083))) || (cljs.core.contains_QMARK_(new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329))));
if(and__5140__auto__){
var and__5140__auto____$1 = (!(cljs.core.contains_QMARK_(classes_from_property_parents,new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(p))));
if(and__5140__auto____$1){
return logseq.graph_parser.exporter.get_page_parents(p,all_existing_page_uuids);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var parents = temp__5823__auto__;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(logseq.common.util.namespace.namespace_char,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(parents),p)));
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(p);
}
});
/**
 * Index only the pages saved from the current file. Rebuilding name->uuid from
 * every existing page on every file is O(files * pages).
 * Properties are omitted so a later #tag cannot reuse a property uuid when
 * convert-all-tags? is on (property and class may share a title).
 */
logseq.graph_parser.exporter.index_saved_page_names_BANG_ = (function logseq$graph_parser$exporter$index_saved_page_names_BANG_(import_state,pages){
var uuid__GT_page = cljs.core.deref(new cljs.core.Keyword(null,"all-existing-page-uuids","all-existing-page-uuids",2010169990).cljs$core$IFn$_invoke$arity$1(import_state));
var classes = cljs.core.deref(new cljs.core.Keyword(null,"classes-from-property-parents","classes-from-property-parents",371081959).cljs$core$IFn$_invoke$arity$1(import_state));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page-names-to-uuids","page-names-to-uuids",-875423247).cljs$core$IFn$_invoke$arity$1(import_state),(function (m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p){
if(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.not(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.class","Property","logseq.class/Property",1038767048),null], null), null),new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(p)))) && (cljs.core.not((function (){var G__83836 = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(p);
if((G__83836 == null)){
return null;
} else {
return logseq.db.frontend.malli_schema.user_property_QMARK_(G__83836);
}
})())));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,logseq.graph_parser.exporter.page_name_lookup_key(p,classes,uuid__GT_page),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(p));
} else {
return acc;
}
}),m,pages);
}));
});
/**
 * Saved pages only. Journal name->uuid stays in :journal-page-name-uuids and is
 * merged last onto the per-file lookup atom so unpublished journal files are
 * still created via build-new-page-or-class.
 */
logseq.graph_parser.exporter.get_page_names_to_uuids = (function logseq$graph_parser$exporter$get_page_names_to_uuids(p__83837){
var map__83838 = p__83837;
var map__83838__$1 = cljs.core.__destructure_map(map__83838);
var page_names_to_uuids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83838__$1,new cljs.core.Keyword(null,"page-names-to-uuids","page-names-to-uuids",-875423247));
return cljs.core.deref(page_names_to_uuids);
});
logseq.graph_parser.exporter.index_walked_ast_blocks = (function logseq$graph_parser$exporter$index_walked_ast_blocks(user_config,blocks){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (block){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),logseq.graph_parser.exporter.walk_ast_blocks(user_config,new cljs.core.Keyword("block.temp","ast-blocks","block.temp/ast-blocks",1272022732).cljs$core$IFn$_invoke$arity$1(block))], null);
})),blocks);
});
logseq.graph_parser.exporter.block_has_asset_links_QMARK_ = (function logseq$graph_parser$exporter$block_has_asset_links_QMARK_(walked_by_uuid,block){
return cljs.core.seq(new cljs.core.Keyword(null,"asset-links","asset-links",-567435187).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(walked_by_uuid,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))));
});
logseq.graph_parser.exporter.block_has_property_asset_links_QMARK_ = (function logseq$graph_parser$exporter$block_has_property_asset_links_QMARK_(block){
return cljs.core.boolean$(cljs.core.some(logseq.graph_parser.exporter.maybe_asset_link_text_QMARK_,cljs.core.vals(new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708).cljs$core$IFn$_invoke$arity$1(block))));
});
logseq.graph_parser.exporter.block_needs_async_asset_handling_QMARK_ = (function logseq$graph_parser$exporter$block_needs_async_asset_handling_QMARK_(walked_by_uuid,block){
return ((logseq.graph_parser.exporter.block_has_asset_links_QMARK_(walked_by_uuid,block)) || (logseq.graph_parser.exporter.block_has_property_asset_links_QMARK_(block)));
});
logseq.graph_parser.exporter.block_uuid_ref_QMARK_ = (function logseq$graph_parser$exporter$block_uuid_ref_QMARK_(ref){
return ((cljs.core.vector_QMARK_(ref)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.first(ref))));
});
logseq.graph_parser.exporter.block_uuid_index = (function logseq$graph_parser$exporter$block_uuid_index(ref){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.second(ref)], null);
});
/**
 * Uuid for a page already in this import or already imported into the db.
 * Ignore built-in pages so names like alias do not collide with the schema.
 * Ignore properties so a later #tag cannot reuse a property uuid when
 * convert-all-tags? is on (property and class may share a title).
 */
logseq.graph_parser.exporter.lookup_imported_page_uuid = (function logseq$graph_parser$exporter$lookup_imported_page_uuid(db,all_existing_page_uuids,page_name){
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_existing_page_uuids,page_name);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.truth_(page_name)){
var temp__5825__auto__ = logseq.db.get_page(db,page_name);
if(cljs.core.truth_(temp__5825__auto__)){
var page = temp__5825__auto__;
if(((cljs.core.not((logseq.db.built_in_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.built_in_QMARK_.cljs$core$IFn$_invoke$arity$1(page) : logseq.db.built_in_QMARK_.call(null,page)))) && (cljs.core.not((logseq.db.property_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.property_QMARK_.cljs$core$IFn$_invoke$arity$1(page) : logseq.db.property_QMARK_.call(null,page)))))){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}
});
logseq.graph_parser.exporter.journal_file_title = (function logseq$graph_parser$exporter$journal_file_title(path){
var normalized_path = (function (){var G__83839 = path;
var G__83839__$1 = (((G__83839 == null))?null:(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__83839)));
var G__83839__$2 = (((G__83839__$1 == null))?null:clojure.string.replace(G__83839__$1,"\\","/"));
if((G__83839__$2 == null)){
return null;
} else {
return clojure.string.lower_case(G__83839__$2);
}
})();
return cljs.core.second(cljs.core.re_find(/(?:^|\/)journals\/(\d{4}_\d{2}_\d{2})\.(?:md|markdown|org)$/,normalized_path));
});
/**
 * Created-at for pages first mentioned in this journal file, from the filename day.
 */
logseq.graph_parser.exporter.journal_file_created_at = (function logseq$graph_parser$exporter$journal_file_created_at(file){
var temp__5825__auto__ = logseq.graph_parser.exporter.journal_file_title(file);
if(cljs.core.truth_(temp__5825__auto__)){
var journal_title = temp__5825__auto__;
var temp__5825__auto____$1 = logseq.common.util.date_time.journal_title__GT_int(journal_title,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["yyyy_MM_dd"], null));
if(cljs.core.truth_(temp__5825__auto____$1)){
var journal_day = temp__5825__auto____$1;
return logseq.common.util.date_time.journal_day__GT_ms(journal_day);
} else {
return null;
}
} else {
return null;
}
});
logseq.graph_parser.exporter.journal_page_name_uuid_entries = (function logseq$graph_parser$exporter$journal_page_name_uuid_entries(p__83840){
var map__83841 = p__83840;
var map__83841__$1 = cljs.core.__destructure_map(map__83841);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83841__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var temp__5825__auto__ = logseq.graph_parser.exporter.journal_file_title(path);
if(cljs.core.truth_(temp__5825__auto__)){
var journal_title = temp__5825__auto__;
var temp__5825__auto____$1 = logseq.common.util.date_time.journal_title__GT_int(journal_title,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["yyyy_MM_dd"], null));
if(cljs.core.truth_(temp__5825__auto____$1)){
var journal_day = temp__5825__auto____$1;
var journal_uuid = logseq.common.uuid.gen_uuid.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"journal-page-uuid","journal-page-uuid",1859101489),journal_day);
var canonical_page_name = logseq.common.util.page_name_sanity_lc(logseq.common.util.date_time.int__GT_journal_title(journal_day,logseq.common.util.date_time.default_journal_title_formatter));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [journal_title,journal_uuid], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canonical_page_name,journal_uuid], null)], null);
} else {
return null;
}
} else {
return null;
}
});
logseq.graph_parser.exporter.index_journal_page_name_uuids_BANG_ = (function logseq$graph_parser$exporter$index_journal_page_name_uuids_BANG_(doc_files,import_state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"journal-page-name-uuids","journal-page-name-uuids",-816877935).cljs$core$IFn$_invoke$arity$1(import_state),cljs.core.merge,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.exporter.journal_page_name_uuid_entries),doc_files));
});
logseq.graph_parser.exporter.build_existing_page = (function logseq$graph_parser$exporter$build_existing_page(m,db,page_uuid,p__83843,p__83844){
var map__83845 = p__83843;
var map__83845__$1 = cljs.core.__destructure_map(map__83845);
var per_file_state = map__83845__$1;
var page_names_to_uuids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83845__$1,new cljs.core.Keyword(null,"page-names-to-uuids","page-names-to-uuids",-875423247));
var map__83846 = p__83844;
var map__83846__$1 = cljs.core.__destructure_map(map__83846);
var options = map__83846__$1;
var notify_user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83846__$1,new cljs.core.Keyword(null,"notify-user","notify-user",-268964208));
var import_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83846__$1,new cljs.core.Keyword(null,"import-state","import-state",1493794865));
var file_created_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83846__$1,new cljs.core.Keyword(null,"file-created-at","file-created-at",1855423146));
var file_updated_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83846__$1,new cljs.core.Keyword(null,"file-updated-at","file-updated-at",1716406379));
var file_page_QMARK_ = new cljs.core.Keyword("logseq.graph-parser.exporter","file-page?","logseq.graph-parser.exporter/file-page?",-397151291).cljs$core$IFn$_invoke$arity$1(m);
var file_times_QMARK_ = (function (){var and__5140__auto__ = file_page_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = cljs.core.not(new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(m));
if(and__5140__auto____$1){
var or__5142__auto__ = file_created_at;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return file_updated_at;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
var m__$1 = (function (){var G__83847 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("logseq.graph-parser.exporter","file-page?","logseq.graph-parser.exporter/file-page?",-397151291));
if(cljs.core.truth_(file_times_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__83847,new cljs.core.Keyword("block","created-at","block/created-at",1440015),(function (){var or__5142__auto__ = file_created_at;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return file_updated_at;
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),(function (){var or__5142__auto__ = file_updated_at;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return file_created_at;
}
})()], 0));
} else {
return G__83847;
}
})();
var disallowed_attributes = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),new cljs.core.Keyword("block","created-at","block/created-at",1440015),new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551)], null);
var allowed_attributes = (function (){var G__83848 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("block","alias","block/alias",-2112644699),new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803),new cljs.core.Keyword("db","ident","db/ident",-737096)], null),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__83842_SHARP_){
if(logseq.db.frontend.malli_schema.user_property_QMARK_(cljs.core.key(p1__83842_SHARP_))){
return cljs.core.key(p1__83842_SHARP_);
} else {
return null;
}
}),m__$1));
if(cljs.core.truth_(file_times_QMARK_)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__83848,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","created-at","block/created-at",1440015),new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551)], null));
} else {
return G__83848;
}
})();
var block_changes = cljs.core.select_keys(m__$1,allowed_attributes);
var temp__5825__auto___84294 = cljs.core.not_empty(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,m__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(disallowed_attributes,allowed_attributes)));
if(cljs.core.truth_(temp__5825__auto___84294)){
var ignored_attrs_84296 = temp__5825__auto___84294;
var G__83849_84298 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),(""+"Import ignored the following attributes on page "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(m__$1)], 0)))+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ignored_attrs_84296))], null);
(notify_user.cljs$core$IFn$_invoke$arity$1 ? notify_user.cljs$core$IFn$_invoke$arity$1(G__83849_84298) : notify_user.call(null,G__83849_84298));
} else {
}

if(cljs.core.seq(block_changes)){
var G__83850 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_changes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),page_uuid], null)], 0));
var G__83850__$1 = ((cljs.core.seq(new cljs.core.Keyword("block","alias","block/alias",-2112644699).cljs$core$IFn$_invoke$arity$1(m__$1)))?logseq.graph_parser.exporter.update_page_alias(G__83850,page_names_to_uuids):G__83850);
if(cljs.core.truth_(new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(m__$1))){
return logseq.graph_parser.exporter.update_page_tags(G__83850__$1,db,new cljs.core.Keyword(null,"user-options","user-options",-84696866).cljs$core$IFn$_invoke$arity$1(options),per_file_state,new cljs.core.Keyword(null,"all-idents","all-idents",-980997938).cljs$core$IFn$_invoke$arity$1(import_state));
} else {
return G__83850__$1;
}
} else {
return null;
}
});
/**
 * Modifies page tx from graph-parser for use with DB graphs. Currently modifies
 *   namespaces and blocks with built-in page names
 */
logseq.graph_parser.exporter.modify_page_tx = (function logseq$graph_parser$exporter$modify_page_tx(page,all_existing_page_uuids){
var page_SINGLEQUOTE_ = ((cljs.core.contains_QMARK_(all_existing_page_uuids,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page)))?(function (){var G__83851 = page;
if(cljs.core.truth_(new cljs.core.Keyword("block","namespace","block/namespace",-282500695).cljs$core$IFn$_invoke$arity$1(page))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83851,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),(function (){var or__5142__auto__ = (function (){var G__83852 = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page);
return (all_existing_page_uuids.cljs$core$IFn$_invoke$arity$1 ? all_existing_page_uuids.cljs$core$IFn$_invoke$arity$1(G__83852) : all_existing_page_uuids.call(null,G__83852));
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"No uuid found for existing namespace page "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page)], 0)))),cljs.core.select_keys(page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","namespace","block/namespace",-282500695)], null)));
}
})());
} else {
return G__83851;
}
})():(function (){var built_in_name_QMARK_ = ((cljs.core.contains_QMARK_(logseq.graph_parser.exporter.all_built_in_names,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page)))) && ((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"card","card",-1430355152),null], null), null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page)))))));
var G__83853 = page;
var G__83853__$1 = ((built_in_name_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83853,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),(datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 ? datascript.core.squuid.cljs$core$IFn$_invoke$arity$0() : datascript.core.squuid.call(null))):G__83853);
if(((built_in_name_QMARK_) && (cljs.core.not(new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(page))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83853__$1,new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329)], null));
} else {
return G__83853__$1;
}
})());
var G__83854 = page_SINGLEQUOTE_;
var G__83854__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__83854,new cljs.core.Keyword("block","format","block/format",-1212045901))
;
if(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword("block","namespace","block/namespace",-282500695).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(page));
} else {
return and__5140__auto__;
}
})())){
return (function (block_SINGLEQUOTE_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.graph_parser.exporter.build_new_namespace_page(block_SINGLEQUOTE_),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.graph-parser.exporter","original-name","logseq.graph-parser.exporter/original-name",-559626865),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_),new cljs.core.Keyword("logseq.graph-parser.exporter","original-title","logseq.graph-parser.exporter/original-title",881456337),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_)], null)], 0));
})(G__83854__$1);
} else {
return G__83854__$1;
}
});
/**
 * Removes alias declarations that violate ownership invariants across imported files.
 *   Mutates alias-owners-atom (alias-name -> canonical-name map) and ignored-properties-atom.
 *   Violations detected: duplicate owner (two pages claiming same alias),
 *   alias-of-alias (a page used as alias that itself owns aliases),
 *   cross-file source-is-alias (a page that is already an alias across files trying to own aliases), and
 *   cross-file alias-owns-aliases (an alias target that already owns aliases in a previous file).
 *   Returns a vec of pages with conflicting aliases stripped.
 */
logseq.graph_parser.exporter.sanitize_page_aliases_for_import_BANG_ = (function logseq$graph_parser$exporter$sanitize_page_aliases_for_import_BANG_(pages,alias_owners_atom,ignored_properties_atom){
var batch_alias__GT_owner = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,page){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc2,alias_m){
var n = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(alias_m);
if(cljs.core.contains_QMARK_(acc2,n)){
return acc2;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc2,n,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page));
}
}),acc,new cljs.core.Keyword("block","alias","block/alias",-2112644699).cljs$core$IFn$_invoke$arity$1(page));
}),cljs.core.PersistentArrayMap.EMPTY,pages);
var batch_pages_with_aliases = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__83855_SHARP_){
return cljs.core.seq(new cljs.core.Keyword("block","alias","block/alias",-2112644699).cljs$core$IFn$_invoke$arity$1(p1__83855_SHARP_));
}),pages)));
var cross_file_alias_owners = cljs.core.set(cljs.core.vals(cljs.core.deref(alias_owners_atom)));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (page){
var temp__5823__auto__ = cljs.core.seq(new cljs.core.Keyword("block","alias","block/alias",-2112644699).cljs$core$IFn$_invoke$arity$1(page));
if(temp__5823__auto__){
var aliases = temp__5823__auto__;
var canonical = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.contains_QMARK_(cljs.core.deref(alias_owners_atom),canonical)){
var seq__83856_84311 = cljs.core.seq(aliases);
var chunk__83857_84312 = null;
var count__83858_84313 = (0);
var i__83859_84314 = (0);
while(true){
if((i__83859_84314 < count__83858_84313)){
var alias_m_84316 = chunk__83857_84312.cljs$core$IIndexed$_nth$arity$2(null,i__83859_84314);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ignored_properties_atom,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword("block","alias","block/alias",-2112644699),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(alias_m_84316),new cljs.core.Keyword(null,"location","location",1815599388),canonical,new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("alias","source-is-alias","alias/source-is-alias",-301490252)], null));


var G__84317 = seq__83856_84311;
var G__84318 = chunk__83857_84312;
var G__84319 = count__83858_84313;
var G__84320 = (i__83859_84314 + (1));
seq__83856_84311 = G__84317;
chunk__83857_84312 = G__84318;
count__83858_84313 = G__84319;
i__83859_84314 = G__84320;
continue;
} else {
var temp__5825__auto___84321 = cljs.core.seq(seq__83856_84311);
if(temp__5825__auto___84321){
var seq__83856_84324__$1 = temp__5825__auto___84321;
if(cljs.core.chunked_seq_QMARK_(seq__83856_84324__$1)){
var c__5673__auto___84325 = cljs.core.chunk_first(seq__83856_84324__$1);
var G__84326 = cljs.core.chunk_rest(seq__83856_84324__$1);
var G__84327 = c__5673__auto___84325;
var G__84328 = cljs.core.count(c__5673__auto___84325);
var G__84329 = (0);
seq__83856_84311 = G__84326;
chunk__83857_84312 = G__84327;
count__83858_84313 = G__84328;
i__83859_84314 = G__84329;
continue;
} else {
var alias_m_84333 = cljs.core.first(seq__83856_84324__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ignored_properties_atom,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword("block","alias","block/alias",-2112644699),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(alias_m_84333),new cljs.core.Keyword(null,"location","location",1815599388),canonical,new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("alias","source-is-alias","alias/source-is-alias",-301490252)], null));


var G__84340 = cljs.core.next(seq__83856_84324__$1);
var G__84341 = null;
var G__84342 = (0);
var G__84343 = (0);
seq__83856_84311 = G__84340;
chunk__83857_84312 = G__84341;
count__83858_84313 = G__84342;
i__83859_84314 = G__84343;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword("block","alias","block/alias",-2112644699));
} else {
var valid = cljs.core.filterv((function (alias_m){
var aname = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(alias_m);
var cross_owner = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(alias_owners_atom),aname);
var batch_owner = cljs.core.get.cljs$core$IFn$_invoke$arity$2(batch_alias__GT_owner,aname);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(aname,canonical)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ignored_properties_atom,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword("block","alias","block/alias",-2112644699),new cljs.core.Keyword(null,"value","value",305978217),aname,new cljs.core.Keyword(null,"location","location",1815599388),canonical,new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("alias","self","alias/self",-1385319795)], null));

return false;
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = cross_owner;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cross_owner,canonical);
} else {
return and__5140__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ignored_properties_atom,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword("block","alias","block/alias",-2112644699),new cljs.core.Keyword(null,"value","value",305978217),aname,new cljs.core.Keyword(null,"location","location",1815599388),canonical,new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("alias","duplicate-owner","alias/duplicate-owner",1274573913)], null));

return false;
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = batch_owner;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(batch_owner,canonical);
} else {
return and__5140__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ignored_properties_atom,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword("block","alias","block/alias",-2112644699),new cljs.core.Keyword(null,"value","value",305978217),aname,new cljs.core.Keyword(null,"location","location",1815599388),canonical,new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("alias","duplicate-owner","alias/duplicate-owner",1274573913)], null));

return false;
} else {
if(cljs.core.contains_QMARK_(cross_file_alias_owners,aname)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ignored_properties_atom,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword("block","alias","block/alias",-2112644699),new cljs.core.Keyword(null,"value","value",305978217),aname,new cljs.core.Keyword(null,"location","location",1815599388),canonical,new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("alias","alias-owns-aliases","alias/alias-owns-aliases",1405128906)], null));

return false;
} else {
if(cljs.core.contains_QMARK_(batch_pages_with_aliases,aname)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ignored_properties_atom,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword("block","alias","block/alias",-2112644699),new cljs.core.Keyword(null,"value","value",305978217),aname,new cljs.core.Keyword(null,"location","location",1815599388),canonical,new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("alias","alias-owns-aliases","alias/alias-owns-aliases",1405128906)], null));

return false;
} else {
return true;

}
}
}
}
}
}),aliases);
var seq__83860_84354 = cljs.core.seq(valid);
var chunk__83861_84355 = null;
var count__83862_84356 = (0);
var i__83863_84357 = (0);
while(true){
if((i__83863_84357 < count__83862_84356)){
var alias_m_84358 = chunk__83861_84355.cljs$core$IIndexed$_nth$arity$2(null,i__83863_84357);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(alias_owners_atom,cljs.core.assoc,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(alias_m_84358),canonical);


var G__84360 = seq__83860_84354;
var G__84361 = chunk__83861_84355;
var G__84362 = count__83862_84356;
var G__84363 = (i__83863_84357 + (1));
seq__83860_84354 = G__84360;
chunk__83861_84355 = G__84361;
count__83862_84356 = G__84362;
i__83863_84357 = G__84363;
continue;
} else {
var temp__5825__auto___84364 = cljs.core.seq(seq__83860_84354);
if(temp__5825__auto___84364){
var seq__83860_84365__$1 = temp__5825__auto___84364;
if(cljs.core.chunked_seq_QMARK_(seq__83860_84365__$1)){
var c__5673__auto___84366 = cljs.core.chunk_first(seq__83860_84365__$1);
var G__84367 = cljs.core.chunk_rest(seq__83860_84365__$1);
var G__84368 = c__5673__auto___84366;
var G__84369 = cljs.core.count(c__5673__auto___84366);
var G__84370 = (0);
seq__83860_84354 = G__84367;
chunk__83861_84355 = G__84368;
count__83862_84356 = G__84369;
i__83863_84357 = G__84370;
continue;
} else {
var alias_m_84371 = cljs.core.first(seq__83860_84365__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(alias_owners_atom,cljs.core.assoc,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(alias_m_84371),canonical);


var G__84372 = cljs.core.next(seq__83860_84365__$1);
var G__84373 = null;
var G__84374 = (0);
var G__84375 = (0);
seq__83860_84354 = G__84372;
chunk__83861_84355 = G__84373;
count__83862_84356 = G__84374;
i__83863_84357 = G__84375;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq(valid)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(page,new cljs.core.Keyword("block","alias","block/alias",-2112644699),valid);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword("block","alias","block/alias",-2112644699));
}
}
} else {
return page;
}
}),pages);
});
/**
 * Given all the pages and blocks parsed from a file, return a map containing
 *   all pages to be transacted, pages' properties and additional
 *   data for subsequent steps
 */
logseq.graph_parser.exporter.build_pages_tx = (function logseq$graph_parser$exporter$build_pages_tx(conn,pages,blocks,p__83869){
var map__83870 = p__83869;
var map__83870__$1 = cljs.core.__destructure_map(map__83870);
var options = map__83870__$1;
var import_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83870__$1,new cljs.core.Keyword(null,"import-state","import-state",1493794865));
var user_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83870__$1,new cljs.core.Keyword(null,"user-options","user-options",-84696866));
var file_created_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83870__$1,new cljs.core.Keyword(null,"file-created-at","file-created-at",1855423146));
var file_updated_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83870__$1,new cljs.core.Keyword(null,"file-updated-at","file-updated-at",1716406379));
var journal_page_name_uuids = cljs.core.deref(new cljs.core.Keyword(null,"journal-page-name-uuids","journal-page-name-uuids",-816877935).cljs$core$IFn$_invoke$arity$1(import_state));
var file_page_created_at = (function (){var or__5142__auto__ = file_created_at;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return file_updated_at;
}
})();
var file_page_updated_at = (function (){var or__5142__auto__ = file_updated_at;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return file_created_at;
}
})();
var all_pages_STAR_ = logseq.graph_parser.exporter.sanitize_page_aliases_for_import_BANG_(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83866_SHARP_){
var file_page_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(p1__83866_SHARP_));
var apply_file_times_QMARK_ = ((file_page_QMARK_) && (cljs.core.not(new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(p1__83866_SHARP_))));
var G__83871 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__83866_SHARP_,new cljs.core.Keyword("block","file","block/file",183171933));
var G__83871__$1 = ((file_page_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83871,new cljs.core.Keyword("logseq.graph-parser.exporter","file-page?","logseq.graph-parser.exporter/file-page?",-397151291),true):G__83871);
var G__83871__$2 = (cljs.core.truth_((function (){var and__5140__auto__ = apply_file_times_QMARK_;
if(and__5140__auto__){
return file_page_created_at;
} else {
return and__5140__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83871__$1,new cljs.core.Keyword("block","created-at","block/created-at",1440015),file_page_created_at):G__83871__$1);
if(cljs.core.truth_((function (){var and__5140__auto__ = apply_file_times_QMARK_;
if(and__5140__auto__){
return file_page_updated_at;
} else {
return and__5140__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83871__$2,new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),file_page_updated_at);
} else {
return G__83871__$2;
}
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__83865_SHARP_){
return ((cljs.core.contains_QMARK_(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"property-classes","property-classes",1129964490).cljs$core$IFn$_invoke$arity$1(user_options),new cljs.core.Keyword(null,"property-parent-classes","property-parent-classes",1972741305).cljs$core$IFn$_invoke$arity$1(user_options)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(p1__83865_SHARP_)))) && (cljs.core.not(new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(p1__83865_SHARP_))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__83864_SHARP_){
return ((cljs.core.not(new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(p1__83864_SHARP_))) && (cljs.core.contains_QMARK_(journal_page_name_uuids,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(p1__83864_SHARP_))));
}),logseq.graph_parser.extract.with_ref_pages(pages,blocks)))),new cljs.core.Keyword(null,"alias-owners","alias-owners",123432271).cljs$core$IFn$_invoke$arity$1(import_state),new cljs.core.Keyword(null,"ignored-properties","ignored-properties",-2000184055).cljs$core$IFn$_invoke$arity$1(import_state));
var all_existing_page_uuids = logseq.graph_parser.exporter.get_page_names_to_uuids(import_state);
var all_pages = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83867_SHARP_){
return logseq.graph_parser.exporter.modify_page_tx(p1__83867_SHARP_,all_existing_page_uuids);
}),all_pages_STAR_);
var existing_page_uuid = (function (m){
return logseq.graph_parser.exporter.lookup_imported_page_uuid(cljs.core.deref(conn),all_existing_page_uuids,(function (){var or__5142__auto__ = new cljs.core.Keyword("logseq.graph-parser.exporter","original-name","logseq.graph-parser.exporter/original-name",-559626865).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(m);
}
})());
});
var db_existing_page_uuids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (page){
var temp__5825__auto__ = existing_page_uuid(page);
if(cljs.core.truth_(temp__5825__auto__)){
var page_uuid = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5142__auto__ = new cljs.core.Keyword("logseq.graph-parser.exporter","original-name","logseq.graph-parser.exporter/original-name",-559626865).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page);
}
})(),page_uuid], null);
} else {
return null;
}
}),all_pages));
var all_new_page_uuids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.graph-parser.exporter","original-name","logseq.graph-parser.exporter/original-name",-559626865),new cljs.core.Keyword("block","name","block/name",1619760316)),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(existing_page_uuid,all_pages)));
var page_names_to_uuids = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([all_existing_page_uuids,db_existing_page_uuids,all_new_page_uuids,journal_page_name_uuids], 0)));
var per_file_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page-names-to-uuids","page-names-to-uuids",-875423247),page_names_to_uuids,new cljs.core.Keyword(null,"classes-tx","classes-tx",664490242),new cljs.core.Keyword(null,"classes-tx","classes-tx",664490242).cljs$core$IFn$_invoke$arity$1(options)], null);
var all_pages_m = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__83868_SHARP_){
return logseq.graph_parser.exporter.handle_page_properties(p1__83868_SHARP_,cljs.core.deref(conn),per_file_state,all_pages,options);
}),all_pages);
var pages_tx = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__83872){
var map__83873 = p__83872;
var map__83873__$1 = cljs.core.__destructure_map(map__83873);
var m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83873__$1,new cljs.core.Keyword(null,"block","block",664686210));
var _properties_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83873__$1,new cljs.core.Keyword(null,"properties-tx","properties-tx",-1476843279));
var page = (function (){var temp__5823__auto__ = existing_page_uuid(m);
if(cljs.core.truth_(temp__5823__auto__)){
var page_uuid = temp__5823__auto__;
return logseq.graph_parser.exporter.build_existing_page(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword("logseq.graph-parser.exporter","original-name","logseq.graph-parser.exporter/original-name",-559626865),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("logseq.graph-parser.exporter","original-title","logseq.graph-parser.exporter/original-title",881456337)], 0)),cljs.core.deref(conn),page_uuid,per_file_state,options);
} else {
if(cljs.core.truth_((function (){var or__5142__auto__ = (logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1(m) : logseq.db.class_QMARK_.call(null,m));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.not((function (){var G__83874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"all-idents","all-idents",-980997938).cljs$core$IFn$_invoke$arity$1(import_state)),(function (){var G__83875 = (function (){var or__5142__auto____$1 = new cljs.core.Keyword("logseq.graph-parser.exporter","original-title","logseq.graph-parser.exporter/original-title",881456337).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(m);
}
})();
var G__83875__$1 = (((G__83875 == null))?null:logseq.graph_parser.exporter.build_class_ident_name(G__83875));
if((G__83875__$1 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__83875__$1);
}
})());
if((G__83874 == null)){
return null;
} else {
return logseq.db.frontend.malli_schema.class_QMARK_(G__83874);
}
})());
}
})())){
return logseq.graph_parser.exporter.build_new_page_or_class(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword("logseq.graph-parser.exporter","original-name","logseq.graph-parser.exporter/original-name",-559626865),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("logseq.graph-parser.exporter","original-title","logseq.graph-parser.exporter/original-title",881456337)], 0)),cljs.core.deref(conn),per_file_state,new cljs.core.Keyword(null,"all-idents","all-idents",-980997938).cljs$core$IFn$_invoke$arity$1(import_state),options);
} else {
return null;
}
}
})();
return page;
}),all_pages_m));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pages-tx","pages-tx",1327748306),pages_tx,new cljs.core.Keyword(null,"page-properties-tx","page-properties-tx",914545875),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"properties-tx","properties-tx",-1476843279),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([all_pages_m], 0)),new cljs.core.Keyword(null,"existing-pages","existing-pages",-2146396109),cljs.core.select_keys(all_existing_page_uuids,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),all_pages_STAR_)),new cljs.core.Keyword(null,"per-file-state","per-file-state",113566168),per_file_state], null);
});
/**
 * Builds upstream-properties-tx for properties that change to :default type
 */
logseq.graph_parser.exporter.build_upstream_properties_tx_for_default = (function logseq$graph_parser$exporter$build_upstream_properties_tx_for_default(db,prop,property_ident,from_prop_type,block_properties_text_values){
var get_pvalue_content = (function logseq$graph_parser$exporter$build_upstream_properties_tx_for_default_$_get_pvalue_content(block_uuid,prop_SINGLEQUOTE_){
var or__5142__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block_properties_text_values,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_uuid,prop_SINGLEQUOTE_], null));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"No :block/text-properties-values found when changing property values: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_uuid], 0)))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"property","property",-1114278232),prop_SINGLEQUOTE_,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null));
}
});
var existing_blocks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var G__83877 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"has-property","has-property",-130314949,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null))], null);
var G__83878 = db;
var G__83879 = property_ident;
var G__83880 = logseq.db.frontend.rules.extract_rules.cljs$core$IFn$_invoke$arity$1(logseq.db.frontend.rules.db_query_dsl_rules);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__83877,G__83878,G__83879,G__83880) : datascript.core.q.call(null,G__83877,G__83878,G__83879,G__83880));
})());
var existing_blocks_tx = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (m){
var prop_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,property_ident);
var retract_tx = (cljs.core.truth_((function (){var fexpr__83881 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),null,new cljs.core.Keyword(null,"node","node",581201198),null], null), null);
return (fexpr__83881.cljs$core$IFn$_invoke$arity$1 ? fexpr__83881.cljs$core$IFn$_invoke$arity$1(from_prop_type) : fexpr__83881.call(null,from_prop_type));
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(m),property_ident], null)], null):cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__83876_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p1__83876_SHARP_)],null));
}),((cljs.core.sequential_QMARK_(prop_value))?prop_value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop_value], null))));
var prop_value_content = get_pvalue_content(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(m),prop);
var new_value = logseq.db.frontend.property.build.build_property_value_block(m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),property_ident], null),prop_value_content);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(retract_tx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_value,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(m),property_ident,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(new_value)], null)])], null));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([existing_blocks], 0));
return existing_blocks_tx;
});
/**
 * Builds tx for upstream properties that have changed and any instances of its
 *   use in db or in given blocks-tx. Upstream properties can be properties that
 *   already exist in the DB from another file or from earlier uses of a property
 *   in the same file
 */
logseq.graph_parser.exporter.build_upstream_properties_tx = (function logseq$graph_parser$exporter$build_upstream_properties_tx(db,upstream_properties,import_state,log_fn){
if(cljs.core.seq(upstream_properties)){
var block_properties_text_values = cljs.core.deref(new cljs.core.Keyword(null,"block-properties-text-values","block-properties-text-values",-525710723).cljs$core$IFn$_invoke$arity$1(import_state));
var all_idents = cljs.core.deref(new cljs.core.Keyword(null,"all-idents","all-idents",-980997938).cljs$core$IFn$_invoke$arity$1(import_state));
var _ = (cljs.core.truth_(log_fn)?(log_fn.cljs$core$IFn$_invoke$arity$2 ? log_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"props-upstream-to-change","props-upstream-to-change",313097928),upstream_properties) : log_fn.call(null,new cljs.core.Keyword(null,"props-upstream-to-change","props-upstream-to-change",313097928),upstream_properties)):null);
var txs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__83882){
var vec__83883 = p__83882;
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83883,(0),null);
var map__83886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83883,(1),null);
var map__83886__$1 = cljs.core.__destructure_map(map__83886);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83886__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var from_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83886__$1,new cljs.core.Keyword(null,"from-type","from-type",-2097724678));
var prop_ident = logseq.graph_parser.exporter.get_ident(all_idents,prop);
var upstream_tx = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(schema)))?logseq.graph_parser.exporter.build_upstream_properties_tx_for_default(db,prop,prop_ident,from_type,block_properties_text_values):null);
var property_pages_tx = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),prop_ident], null),schema], 0))], null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(property_pages_tx,upstream_tx);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([upstream_properties], 0));
return txs;
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * New import state that is used for import of one graph. State is atom per
 * key to make code more readable and encourage local mutations
 */
logseq.graph_parser.exporter.new_import_state = (function logseq$graph_parser$exporter$new_import_state(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"pdf-annotation-pages","pdf-annotation-pages",-277368378),new cljs.core.Keyword(null,"all-existing-page-uuids","all-existing-page-uuids",2010169990),new cljs.core.Keyword(null,"classes-from-property-parents","classes-from-property-parents",371081959),new cljs.core.Keyword(null,"assets","assets",210278279),new cljs.core.Keyword(null,"ignored-files","ignored-files",-257976),new cljs.core.Keyword(null,"ignored-properties","ignored-properties",-2000184055),new cljs.core.Keyword(null,"embed-child-uuids","embed-child-uuids",2120073418),new cljs.core.Keyword(null,"all-idents","all-idents",-980997938),new cljs.core.Keyword(null,"alias-owners","alias-owners",123432271),new cljs.core.Keyword(null,"placeholder-ref-uuids","placeholder-ref-uuids",1671444975),new cljs.core.Keyword(null,"ignored-assets","ignored-assets",-1801165201),new cljs.core.Keyword(null,"property-schemas","property-schemas",-1631291569),new cljs.core.Keyword(null,"page-names-to-uuids","page-names-to-uuids",-875423247),new cljs.core.Keyword(null,"journal-page-name-uuids","journal-page-name-uuids",-816877935),new cljs.core.Keyword(null,"custom-status-markers","custom-status-markers",-1629016106),new cljs.core.Keyword(null,"block-properties-text-values","block-properties-text-values",-525710723)],[cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)]);
});
logseq.graph_parser.exporter.build_tx_options = (function logseq$graph_parser$exporter$build_tx_options(p__83887){
var map__83888 = p__83887;
var map__83888__$1 = cljs.core.__destructure_map(map__83888);
var options = map__83888__$1;
var user_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83888__$1,new cljs.core.Keyword(null,"user-options","user-options",-84696866));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword(null,"extract-options","extract-options",-572164844),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"user-options","user-options",-84696866)], 0)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"import-state","import-state",1493794865),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"import-state","import-state",1493794865).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.graph_parser.exporter.new_import_state();
}
})(),new cljs.core.Keyword(null,"upstream-properties","upstream-properties",1757374284),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"classes-tx","classes-tx",664490242),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"custom-status-tx","custom-status-tx",1561056861),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"user-options","user-options",-84696866),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([user_options,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag-classes","tag-classes",835362327),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,new cljs.core.Keyword(null,"tag-classes","tag-classes",835362327).cljs$core$IFn$_invoke$arity$1(user_options))),new cljs.core.Keyword(null,"property-classes","property-classes",1129964490),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,clojure.string.lower_case),new cljs.core.Keyword(null,"property-classes","property-classes",1129964490).cljs$core$IFn$_invoke$arity$1(user_options))),logseq.graph_parser.exporter.file_built_in_property_names),new cljs.core.Keyword(null,"property-parent-classes","property-parent-classes",1972741305),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,clojure.string.lower_case),new cljs.core.Keyword(null,"property-parent-classes","property-parent-classes",1972741305).cljs$core$IFn$_invoke$arity$1(user_options))),logseq.graph_parser.exporter.file_built_in_property_names)], null)], 0))], null)], 0));
});
logseq.graph_parser.exporter.retract_parent_and_page_tag = (function logseq$graph_parser$exporter$retract_parent_and_page_tag(col){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (b){
var eid = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b)], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),eid,new cljs.core.Keyword("block","parent","block/parent",-918309064)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),eid,new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329)], null)], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([col], 0)));
});
logseq.graph_parser.exporter.existing_named_page_is_class_QMARK_ = (function logseq$graph_parser$exporter$existing_named_page_is_class_QMARK_(import_state,page_uuid){
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"all-existing-page-uuids","all-existing-page-uuids",2010169990).cljs$core$IFn$_invoke$arity$1(import_state)),page_uuid);
return cljs.core.boolean$((function (){var or__5142__auto__ = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.class","Tag","logseq.class/Tag",-538902083),null], null), null),new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(p));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var G__83889 = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(p);
var G__83889__$1 = (((G__83889 == null))?null:cljs.core.namespace(G__83889));
if((G__83889__$1 == null)){
return null;
} else {
return logseq.db.frontend.class$.user_class_namespace_QMARK_(G__83889__$1);
}
}
})());
});
/**
 * Separates new pages from new properties tx in preparation for properties to
 *   be transacted separately. Also builds property pages tx and converts existing
 *   pages that are now properties. Existing classes with the same title stay
 *   classes; a distinct property entity is created instead.
 */
logseq.graph_parser.exporter.split_pages_and_properties_tx = (function logseq$graph_parser$exporter$split_pages_and_properties_tx(pages_tx,old_properties,existing_pages,import_state,upstream_properties){
var new_properties = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(cljs.core.deref(new cljs.core.Keyword(null,"property-schemas","property-schemas",-1631291569).cljs$core$IFn$_invoke$arity$1(import_state)))),cljs.core.set(old_properties));
var class_occupied_property_names = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (kw_name){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(existing_pages,cljs.core.name(kw_name));
if(cljs.core.truth_(temp__5825__auto__)){
var existing_uuid = temp__5825__auto__;
if(logseq.graph_parser.exporter.existing_named_page_is_class_QMARK_(import_state,existing_uuid)){
return kw_name;
} else {
return null;
}
} else {
return null;
}
})),new_properties);
var page_tx_for_new_property_QMARK_ = (function (page){
var property_name = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page));
return ((cljs.core.contains_QMARK_(new_properties,property_name)) && ((((!(cljs.core.contains_QMARK_(class_occupied_property_names,property_name)))) && ((!(logseq.graph_parser.exporter.existing_named_page_is_class_QMARK_(import_state,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page))))))));
});
var vec__83891 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove)(page_tx_for_new_property_QMARK_,pages_tx);
var properties_tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83891,(0),null);
var pages_tx_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83891,(1),null);
var build_property_page = (function (title,block_uuid){
var property_name = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(title));
var db_ident = logseq.graph_parser.exporter.get_ident(cljs.core.deref(new cljs.core.Keyword(null,"all-idents","all-idents",-980997938).cljs$core$IFn$_invoke$arity$1(import_state)),property_name);
var upstream_property = cljs.core.get.cljs$core$IFn$_invoke$arity$2(upstream_properties,property_name);
return logseq.db.sqlite.util.build_new_property.cljs$core$IFn$_invoke$arity$3(db_ident,(cljs.core.truth_((function (){var and__5140__auto__ = upstream_property;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = (function (){var G__83895 = new cljs.core.Keyword(null,"from-type","from-type",-2097724678).cljs$core$IFn$_invoke$arity$1(upstream_property);
var fexpr__83894 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),null,new cljs.core.Keyword(null,"node","node",581201198),null], null), null);
return (fexpr__83894.cljs$core$IFn$_invoke$arity$1 ? fexpr__83894.cljs$core$IFn$_invoke$arity$1(G__83895) : fexpr__83894.call(null,G__83895));
})();
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(upstream_property,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404)], null)));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404),new cljs.core.Keyword(null,"from-type","from-type",-2097724678).cljs$core$IFn$_invoke$arity$1(upstream_property),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword(null,"many","many",1092119164)], null):logseq.graph_parser.exporter.get_property_schema(cljs.core.deref(new cljs.core.Keyword(null,"property-schemas","property-schemas",-1631291569).cljs$core$IFn$_invoke$arity$1(import_state)),property_name)),(function (){var G__83896 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),title], null);
if(cljs.core.truth_(block_uuid)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83896,new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),block_uuid);
} else {
return G__83896;
}
})());
});
var property_pages_tx = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__83897){
var map__83898 = p__83897;
var map__83898__$1 = cljs.core.__destructure_map(map__83898);
var block_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83898__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83898__$1,new cljs.core.Keyword("block","title","block/title",710445684));
return build_property_page(title,block_uuid);
}),properties_tx);
var converted_property_pages_tx = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (kw_name){
if(cljs.core.contains_QMARK_(class_occupied_property_names,kw_name)){
return null;
} else {
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(existing_pages,cljs.core.name(kw_name));
if(cljs.core.truth_(temp__5825__auto__)){
var existing_page_uuid = temp__5825__auto__;
var new_prop = build_property_page(cljs.core.name(kw_name),existing_page_uuid);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(new_prop,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404),new cljs.core.Keyword("db","index","db/index",-1531680669),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db","valueType","db/valueType",1827971944)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),existing_page_uuid], null)], 0));
} else {
return null;
}
}
}),new_properties);
var class_occupied_property_pages_tx = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (kw_name){
return build_property_page(cljs.core.name(kw_name),null);
}),class_occupied_property_names);
var retract_page_tag_from_properties_tx = logseq.graph_parser.exporter.retract_parent_and_page_tag(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(property_pages_tx,converted_property_pages_tx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([class_occupied_property_pages_tx], 0)));
var property_page_properties_tx = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (b){
var temp__5825__auto__ = cljs.core.not_empty(logseq.db.frontend.property.properties(b));
if(cljs.core.truth_(temp__5825__auto__)){
var page_properties = temp__5825__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([page_properties,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.Keyword("block","tags","block/tags",1814948340),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__83890_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329),p1__83890_SHARP_);
}),new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(page_properties)),new cljs.core.Keyword("logseq.class","Property","logseq.class/Property",1038767048))], null)], 0));
} else {
return null;
}
}),properties_tx);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pages-tx","pages-tx",1327748306),pages_tx_SINGLEQUOTE_,new cljs.core.Keyword(null,"property-pages-tx","property-pages-tx",859116570),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(property_pages_tx,converted_property_pages_tx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([class_occupied_property_pages_tx,retract_page_tag_from_properties_tx], 0)),new cljs.core.Keyword(null,"property-page-properties-tx","property-page-properties-tx",-1086975165),property_page_properties_tx], null);
});
/**
 * A tag or ref can have different :block/uuid's across extracted blocks. This makes
 * sense for most in-app uses but not for importing where we want consistent identity.
 * This fn fixes that issue. This fn also ensures that tags and pages have the same uuid
 */
logseq.graph_parser.exporter.fix_extracted_block_tags_and_refs = (function logseq$graph_parser$exporter$fix_extracted_block_tags_and_refs(blocks){
var name_uuids = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var fix_block_uuids = (function logseq$graph_parser$exporter$fix_extracted_block_tags_and_refs_$_fix_block_uuids(tags_or_refs,p__83899){
var map__83900 = p__83899;
var map__83900__$1 = cljs.core.__destructure_map(map__83900);
var ref_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83900__$1,new cljs.core.Keyword(null,"ref?","ref?",1932693720));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83900__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (b){
if(cljs.core.truth_((function (){var and__5140__auto__ = ref_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(b)));
} else {
return and__5140__auto__;
}
})())){
return b;
} else {
var temp__5823__auto__ = (function (){var G__83901 = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(b);
if((G__83901 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(name_uuids),G__83901);
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var existing_uuid = temp__5823__auto__;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(existing_uuid,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),existing_uuid);
} else {
return b;
}
} else {
if(cljs.core.vector_QMARK_(b)){
return b;
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b);
} else {
return and__5140__auto__;
}
})())){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Extracted block tag/ref must have a name and uuid: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([b], 0)))))+"\n"+"(and (:block/name b) (:block/uuid b))")));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(name_uuids,cljs.core.assoc,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b));

return b;
}
}
}
}),tags_or_refs);
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
var G__83902 = b;
var G__83902__$1 = ((cljs.core.seq(new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(b)))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__83902,new cljs.core.Keyword("block","tags","block/tags",1814948340),fix_block_uuids,cljs.core.PersistentArrayMap.EMPTY):G__83902);
if(cljs.core.seq(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(b))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__83902__$1,new cljs.core.Keyword("block","refs","block/refs",-1214495349),fix_block_uuids,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref?","ref?",1932693720),true,new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(b)], null));
} else {
return G__83902__$1;
}
}),blocks);
});
logseq.graph_parser.exporter.get_block_pattern = (function logseq$graph_parser$exporter$get_block_pattern(format){
var format_SINGLEQUOTE_ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(format);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format_SINGLEQUOTE_,new cljs.core.Keyword(null,"org","org",1495985))){
return "*";
} else {
return "-";
}
});
/**
 * File-to-db import uses outline parse for headings, properties, refs and tags.
 * Full parse is required when later import steps walk Src, Macro, Quote, Drawer,
 * org blocks, or markdown links, and when a heading line is itself a property.
 * Quote detection includes list-item quotes (`- > ...`), not only line-start `>`.
 * Render/editor never call this path.
 */
logseq.graph_parser.exporter.import_parse_outline_only_QMARK_ = (function logseq$graph_parser$exporter$import_parse_outline_only_QMARK_(format,content){
return ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),null,new cljs.core.Keyword(null,"md","md",707286655),null], null), null),format)) && (cljs.core.not(cljs.core.re_find(/```|\$\$|\{\{|#\+BEGIN_|:LOGBOOK:|^\s*(?:(?:[-*+]|\d+\.)\s+)?>|\]\(|^\s*-\s+\S+::|^\s*(?:[-*+]\s+)?(?:-{3,}|\*{3,}|_{3,})\s*$/im,content))));
});
/**
 * Main fn which calls graph-parser to convert markdown into data
 */
logseq.graph_parser.exporter.extract_pages_and_blocks = (function logseq$graph_parser$exporter$extract_pages_and_blocks(db,file,content,p__83903){
var map__83904 = p__83903;
var map__83904__$1 = cljs.core.__destructure_map(map__83904);
var extract_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83904__$1,new cljs.core.Keyword(null,"extract-options","extract-options",-572164844));
var import_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83904__$1,new cljs.core.Keyword(null,"import-state","import-state",1493794865));
var file_created_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83904__$1,new cljs.core.Keyword(null,"file-created-at","file-created-at",1855423146));
var file_updated_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83904__$1,new cljs.core.Keyword(null,"file-updated-at","file-updated-at",1716406379));
var format = logseq.common.util.get_format(file);
var journal_file_QMARK_ = (!((logseq.graph_parser.exporter.journal_file_title(file) == null)));
var with_file_timestamps = (function (node){
var G__83905 = node;
var G__83905__$1 = (cljs.core.truth_((function (){var or__5142__auto__ = file_created_at;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return file_updated_at;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83905,new cljs.core.Keyword("block","created-at","block/created-at",1440015),(function (){var or__5142__auto__ = file_created_at;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return file_updated_at;
}
})()):G__83905);
if(cljs.core.truth_(file_updated_at)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83905__$1,new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),file_updated_at);
} else {
return G__83905__$1;
}
});
var extract_options_SINGLEQUOTE_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"block-pattern","block-pattern",297259959),logseq.graph_parser.exporter.get_block_pattern(format),new cljs.core.Keyword(null,"date-formatter","date-formatter",-223324709),"MMM do, yyyy",new cljs.core.Keyword(null,"uri-encoded?","uri-encoded?",663370134),false,new cljs.core.Keyword(null,"export-to-db-graph?","export-to-db-graph?",2008973423),true,new cljs.core.Keyword(null,"filename-format","filename-format",-1193264412),new cljs.core.Keyword(null,"legacy","legacy",1434943289),new cljs.core.Keyword(null,"parse-outline-only?","parse-outline-only?",399017842),logseq.graph_parser.exporter.import_parse_outline_only_QMARK_(format,content)], null),extract_options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"skip-journal?","skip-journal?",-2111577079),(!(journal_file_QMARK_))], null)], 0));
var extracted = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),null,new cljs.core.Keyword(null,"org","org",1495985),null,new cljs.core.Keyword(null,"md","md",707286655),null], null), null),format))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(logseq.graph_parser.extract.extract(file,content,extract_options_SINGLEQUOTE_),new cljs.core.Keyword(null,"pages","pages",-285406513),(function (pages){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (page){
var page__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword("block.temp","original-page-name","block.temp/original-page-name",1371358508));
if(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(page__$1);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(page__$1));
} else {
return and__5140__auto__;
}
})())){
return with_file_timestamps(page__$1);
} else {
return page__$1;
}
}),pages);
})),new cljs.core.Keyword(null,"blocks","blocks",-610462153),(function (blocks){
return logseq.graph_parser.exporter.fix_extracted_block_tags_and_refs(cljs.core.map.cljs$core$IFn$_invoke$arity$2(with_file_timestamps,blocks));
})):(cljs.core.truth_(cljs.core.re_find(/whiteboards\/.*\.edn$/,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))))?null:cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"ignored-files","ignored-files",-257976).cljs$core$IFn$_invoke$arity$1(import_state),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),file,new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword(null,"unsupported-file-format","unsupported-file-format",794096404)], null)))
);
if(logseq.graph_parser.exporter.hls_annotation_md_file_QMARK_(file)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"pdf-annotation-pages","pdf-annotation-pages",-277368378).cljs$core$IFn$_invoke$arity$1(import_state),cljs.core.assoc,module$node_modules$path$path.basename(file),extracted);

return null;
} else {
return extracted;
}
});
/**
 * Calculate created-at timestamps for journals
 */
logseq.graph_parser.exporter.build_journal_created_ats = (function logseq$graph_parser$exporter$build_journal_created_ats(pages){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83906_SHARP_){
var temp__5825__auto__ = new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(p1__83906_SHARP_);
if(cljs.core.truth_(temp__5825__auto__)){
var journal_day = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(p1__83906_SHARP_),logseq.common.util.date_time.journal_day__GT_ms(journal_day)], null);
} else {
return null;
}
}),pages));
});
/**
 * If a page/class tx is an existing property or a new or existing class, ensure that
 *   it only has one tag by removing :logseq.class/Page from its tx
 */
logseq.graph_parser.exporter.clean_extra_invalid_tags = (function logseq$graph_parser$exporter$clean_extra_invalid_tags(db,pages_tx_SINGLEQUOTE_,classes_tx,existing_pages){
var existing_classes = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83907_SHARP_){
var G__83911 = db;
var G__83912 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(p1__83907_SHARP_);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__83911,G__83912) : datascript.core.entity.call(null,G__83911,G__83912));
}),datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("logseq.class","Tag","logseq.class/Tag",-538902083)))));
var classes = clojure.set.union.cljs$core$IFn$_invoke$arity$2(existing_classes,cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),classes_tx)));
var existing_properties = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83908_SHARP_){
var G__83913 = db;
var G__83914 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(p1__83908_SHARP_);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__83913,G__83914) : datascript.core.entity.call(null,G__83913,G__83914));
}),datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("logseq.class","Property","logseq.class/Property",1038767048)))));
var existing_pages_SINGLEQUOTE_ = clojure.set.map_invert(existing_pages);
var retract_page_tag_from_existing_pages = logseq.graph_parser.exporter.retract_parent_and_page_tag(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__83909_SHARP_){
var and__5140__auto__ = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(p1__83909_SHARP_);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(existing_pages_SINGLEQUOTE_,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(p1__83909_SHARP_));
} else {
return and__5140__auto__;
}
}),pages_tx_SINGLEQUOTE_));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pages-tx","pages-tx",1327748306),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (page){
if(((cljs.core.contains_QMARK_(classes,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page))) || (cljs.core.contains_QMARK_(existing_properties,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page))))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(page,new cljs.core.Keyword("block","tags","block/tags",1814948340),(function (tags){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__83910_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__83910_SHARP_,new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329));
}),tags));
})),new cljs.core.Keyword("block","parent","block/parent",-918309064));
} else {
return page;
}
}),pages_tx_SINGLEQUOTE_),new cljs.core.Keyword(null,"retract-page-tags-tx","retract-page-tags-tx",-932957972),cljs.core.into.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.exporter.retract_parent_and_page_tag(classes_tx),retract_page_tag_from_existing_pages)], null);
});
/**
 * Save importer state from given txs
 */
logseq.graph_parser.exporter.save_from_tx = (function logseq$graph_parser$exporter$save_from_tx(txs,p__83915){
var map__83916 = p__83915;
var map__83916__$1 = cljs.core.__destructure_map(map__83916);
var _opts = map__83916__$1;
var import_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83916__$1,new cljs.core.Keyword(null,"import-state","import-state",1493794865));
var temp__5825__auto__ = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),txs));
if(temp__5825__auto__){
var nodes = temp__5825__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"all-existing-page-uuids","all-existing-page-uuids",2010169990).cljs$core$IFn$_invoke$arity$1(import_state),cljs.core.merge,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.identity),nodes)));

return logseq.graph_parser.exporter.index_saved_page_names_BANG_(import_state,nodes);
} else {
return null;
}
});
logseq.graph_parser.exporter.transact_imported_data_BANG_ = (function logseq$graph_parser$exporter$transact_imported_data_BANG_(conn,tx,tx_meta,options){
if(cljs.core.seq(tx)){
var tx_report = logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx,tx_meta);
logseq.graph_parser.exporter.save_from_tx(tx,options);

return tx_report;
} else {
return null;
}
});
logseq.graph_parser.exporter.track_placeholder_ref_uuids_BANG_ = (function logseq$graph_parser$exporter$track_placeholder_ref_uuids_BANG_(p__83918,blocks_tx){
var map__83919 = p__83918;
var map__83919__$1 = cljs.core.__destructure_map(map__83919);
var _import_state = map__83919__$1;
var placeholder_ref_uuids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83919__$1,new cljs.core.Keyword(null,"placeholder-ref-uuids","placeholder-ref-uuids",1671444975));
var temp__5825__auto__ = cljs.core.seq(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__83917_SHARP_){
var G__83920 = cljs.core.vec(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(p1__83917_SHARP_));
if(cljs.core.truth_(new cljs.core.Keyword("block","link","block/link",-1872399993).cljs$core$IFn$_invoke$arity$1(p1__83917_SHARP_))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__83920,new cljs.core.Keyword("block","link","block/link",-1872399993).cljs$core$IFn$_invoke$arity$1(p1__83917_SHARP_));
} else {
return G__83920;
}
})),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.exporter.block_uuid_ref_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.second)),blocks_tx));
if(temp__5825__auto__){
var ref_uuids = temp__5825__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(placeholder_ref_uuids,cljs.core.into,ref_uuids);
} else {
return null;
}
});
logseq.graph_parser.exporter._LT_build_blocks_tx = (function logseq$graph_parser$exporter$_LT_build_blocks_tx(conn,blocks,pre_blocks,per_file_state,tx_options,walked_by_uuid){
var blocks_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83921_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__83921_SHARP_,new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521),blocks));
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve_fn_83926,reject_fn_83925){
var loop_fn_83922 = (function logseq$graph_parser$exporter$_LT_build_blocks_tx_$_loop_fn_83922(tx_data,blocks__$1){
return promesa.core.fnly.cljs$core$IFn$_invoke$arity$2((function (res_83923,err_83924){
if((!((err_83924 == null)))){
return (reject_fn_83925.cljs$core$IFn$_invoke$arity$1 ? reject_fn_83925.cljs$core$IFn$_invoke$arity$1(err_83924) : reject_fn_83925.call(null,err_83924));
} else {
if(promesa.core.recur_QMARK_(res_83923)){
promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vthread","vthread",441141075),promesa.exec.wrap_bindings((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(logseq$graph_parser$exporter$_LT_build_blocks_tx_$_loop_fn_83922,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(res_83923));
})));

return null;
} else {
return (resolve_fn_83926.cljs$core$IFn$_invoke$arity$1 ? resolve_fn_83926.cljs$core$IFn$_invoke$arity$1(res_83923) : resolve_fn_83926.call(null,res_83923));
}
}
}),promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(tx_data),(function (tx_data__$1){
return promesa.protocols._mcat(promesa.protocols._promise(blocks__$1),(function (blocks__$2){
return promesa.protocols._promise((function (){var temp__5823__auto__ = cljs.core.first(blocks__$2);
if(cljs.core.truth_(temp__5823__auto__)){
var block = temp__5823__auto__;
if(logseq.graph_parser.exporter.block_needs_async_asset_handling_QMARK_(walked_by_uuid,block)){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter._LT_build_block_tx(cljs.core.deref(conn),block,pre_blocks,per_file_state,cljs.core.get.cljs$core$IFn$_invoke$arity$2(walked_by_uuid,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)),tx_options)),(function (block_tx_data){
return promesa.protocols._promise(promesa.core.__GT_Recur(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(tx_data__$1,block_tx_data),cljs.core.rest(blocks__$2)], null)));
}));
}));
} else {
return promesa.core.__GT_Recur(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(tx_data__$1,logseq.graph_parser.exporter.build_block_tx_sync(cljs.core.deref(conn),block,pre_blocks,per_file_state,cljs.core.get.cljs$core$IFn$_invoke$arity$2(walked_by_uuid,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)),tx_options)),cljs.core.rest(blocks__$2)], null));
}
} else {
return tx_data__$1;
}
})());
}));
}));
})));
});
return promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vthread","vthread",441141075),promesa.exec.wrap_bindings((function (){
return loop_fn_83922(cljs.core.PersistentVector.EMPTY,blocks_SINGLEQUOTE_);
})));
}));
});
logseq.graph_parser.exporter.build_file_import_blocks_index = (function logseq$graph_parser$exporter$build_file_import_blocks_index(blocks_tx){
var block_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (block){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null);
})),blocks_tx);
var block_refs_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","refs","block/refs",-1214495349)),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.exporter.block_uuid_ref_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.exporter.block_uuid_index)),blocks_tx);
var block_link_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","link","block/link",-1872399993)),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.exporter.block_uuid_ref_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.exporter.block_uuid_index)),blocks_tx);
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(block_ids),cljs.core.set(block_refs_ids),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.set(block_link_ids)], 0));
});
logseq.graph_parser.exporter.build_file_import_main_tx = (function logseq$graph_parser$exporter$build_file_import_main_tx(pages_tx_SINGLEQUOTE__SINGLEQUOTE_,page_properties_tx,property_page_properties_tx,classes_tx,classes_tx_SINGLEQUOTE_,custom_status_tx,blocks_tx){
var pages_index = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__83927_SHARP_){
return cljs.core.select_keys(p1__83927_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null));
})),cljs.core.distinct.cljs$core$IFn$_invoke$arity$0()),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pages_tx_SINGLEQUOTE__SINGLEQUOTE_,classes_tx));
var blocks_index = logseq.graph_parser.exporter.build_file_import_blocks_index(blocks_tx);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cat,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.nil_QMARK_)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [pages_index,page_properties_tx,property_page_properties_tx,pages_tx_SINGLEQUOTE__SINGLEQUOTE_,classes_tx_SINGLEQUOTE_,custom_status_tx,blocks_index,blocks_tx], null));
});
logseq.graph_parser.exporter.file_graph_tx_options = (function logseq$graph_parser$exporter$file_graph_tx_options(options,pages,file,preserve_empty_properties_uuids){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.graph_parser.exporter.build_tx_options(options),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"journal-created-ats","journal-created-ats",339724852),logseq.graph_parser.exporter.build_journal_created_ats(pages),new cljs.core.Keyword(null,"current-journal-created-at","current-journal-created-at",563907882),logseq.graph_parser.exporter.journal_file_created_at(file),new cljs.core.Keyword(null,"preserve-empty-property-block-uuids","preserve-empty-property-block-uuids",-1063010862),preserve_empty_properties_uuids], null)], 0));
});
logseq.graph_parser.exporter._LT_build_pages_and_property_assets = (function logseq$graph_parser$exporter$_LT_build_pages_and_property_assets(conn,pages,blocks,tx_options){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.build_pages_tx(conn,pages,blocks,tx_options)),(function (p__83928){
var map__83929 = p__83928;
var map__83929__$1 = cljs.core.__destructure_map(map__83929);
var pages_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83929__$1,new cljs.core.Keyword(null,"pages-tx","pages-tx",1327748306));
var page_properties_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83929__$1,new cljs.core.Keyword(null,"page-properties-tx","page-properties-tx",914545875));
var per_file_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83929__$1,new cljs.core.Keyword(null,"per-file-state","per-file-state",113566168));
var existing_pages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83929__$1,new cljs.core.Keyword(null,"existing-pages","existing-pages",-2146396109));
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter._LT_handle_assets_in_property_values(page_properties_tx,new cljs.core.Keyword(null,"import-state","import-state",1493794865).cljs$core$IFn$_invoke$arity$1(tx_options),logseq.graph_parser.exporter.asset_handle_opts(tx_options))),(function (p__83930){
var map__83931 = p__83930;
var map__83931__$1 = cljs.core.__destructure_map(map__83931);
var pvalues_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83931__$1,new cljs.core.Keyword(null,"pvalues-tx","pvalues-tx",-418668372));
var asset_blocks_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83931__$1,new cljs.core.Keyword(null,"asset-blocks-tx","asset-blocks-tx",-1804784438));
return promesa.protocols._promise(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pages-tx","pages-tx",1327748306),pages_tx,new cljs.core.Keyword(null,"page-properties-tx","page-properties-tx",914545875),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pvalues_tx,asset_blocks_tx),new cljs.core.Keyword(null,"per-file-state","per-file-state",113566168),per_file_state,new cljs.core.Keyword(null,"existing-pages","existing-pages",-2146396109),existing_pages], null));
}));
}));
}));
});
/**
 * Parse file and save parsed data to the given db graph.
 * 
 *   Options: :extract-options, :user-options (:tag-classes :property-classes
 *   :property-parent-classes :convert-all-tags? :remove-inline-tags?
 *   :extract-code-snippets?), :import-state, :macros, :notify-user, and optional :log-fn.
 */
logseq.graph_parser.exporter._LT_add_file_to_db_graph = (function logseq$graph_parser$exporter$_LT_add_file_to_db_graph(conn,file,content,p__83934){
var map__83935 = p__83934;
var map__83935__$1 = cljs.core.__destructure_map(map__83935);
var _STAR_options = map__83935__$1;
var notify_user = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83935__$1,new cljs.core.Keyword(null,"notify-user","notify-user",-268964208),(function (p1__83932_SHARP_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[WARNING]",new cljs.core.Keyword(null,"msg","msg",-1386103444).cljs$core$IFn$_invoke$arity$1(p1__83932_SHARP_)], 0));
}));
var log_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83935__$1,new cljs.core.Keyword(null,"log-fn","log-fn",-2003241282));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(log_fn)?logseq.graph_parser.import_profile.now_ms():null)),(function (file_start){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(_STAR_options,new cljs.core.Keyword(null,"notify-user","notify-user",-268964208),notify_user,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-fn","log-fn",-2003241282),(function (){var or__5142__auto__ = log_fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.constantly(null);
}
})(),new cljs.core.Keyword(null,"file","file",-1269645878),file], 0))),(function (options){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.import_progress_BANG_(options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"file","file",-1269645878),file], null))),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(log_fn)?logseq.graph_parser.import_profile.now_ms():null)),(function (parse_start){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.extract_pages_and_blocks(cljs.core.deref(conn),file,content,options)),(function (p__83936){
var map__83937 = p__83936;
var map__83937__$1 = cljs.core.__destructure_map(map__83937);
var pages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83937__$1,new cljs.core.Keyword(null,"pages","pages",-285406513));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83937__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.log_phase_ms_BANG_(log_fn,new cljs.core.Keyword(null,"parse","parse",-1162164619),parse_start,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",-1269645878),file], null))),(function (___$1){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(log_fn)?logseq.graph_parser.import_profile.now_ms():null)),(function (prep_start){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.handle_template_blocks(blocks)),(function (p__83938){
var map__83939 = p__83938;
var map__83939__$1 = cljs.core.__destructure_map(map__83939);
var blocks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83939__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var preserve_empty_properties_uuids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83939__$1,new cljs.core.Keyword(null,"preserve-empty-properties-uuids","preserve-empty-properties-uuids",2046150499));
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.index_walked_ast_blocks(logseq.graph_parser.exporter.import_user_config(options),blocks__$1)),(function (walked_by_uuid){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.file_graph_tx_options(options,pages,file,preserve_empty_properties_uuids)),(function (tx_options){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.keys(cljs.core.deref(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"import-state","import-state",1493794865),new cljs.core.Keyword(null,"property-schemas","property-schemas",-1631291569)], null))))),(function (old_properties){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.log_phase_ms_BANG_(log_fn,new cljs.core.Keyword(null,"prep","prep",2123042288),prep_start,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",-1269645878),file], null))),(function (___$2){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.import_progress_BANG_(options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"pages-tx","pages-tx",1327748306),new cljs.core.Keyword(null,"file","file",-1269645878),file], null))),(function (___$3){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(log_fn)?logseq.graph_parser.import_profile.now_ms():null)),(function (pages_start){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter._LT_build_pages_and_property_assets(conn,pages,blocks__$1,tx_options)),(function (p__83940){
var map__83941 = p__83940;
var map__83941__$1 = cljs.core.__destructure_map(map__83941);
var pages_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83941__$1,new cljs.core.Keyword(null,"pages-tx","pages-tx",1327748306));
var page_properties_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83941__$1,new cljs.core.Keyword(null,"page-properties-tx","page-properties-tx",914545875));
var per_file_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83941__$1,new cljs.core.Keyword(null,"per-file-state","per-file-state",113566168));
var existing_pages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83941__$1,new cljs.core.Keyword(null,"existing-pages","existing-pages",-2146396109));
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.log_phase_ms_BANG_(log_fn,new cljs.core.Keyword(null,"pages-tx","pages-tx",1327748306),pages_start,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",-1269645878),file], null))),(function (___$4){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__83933_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(p1__83933_SHARP_))){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(p1__83933_SHARP_);
} else {
return null;
}
}),blocks__$1))),(function (pre_blocks){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.import_progress_BANG_(options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"blocks-tx","blocks-tx",-1349877329),new cljs.core.Keyword(null,"file","file",-1269645878),file], null))),(function (___$5){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(log_fn)?logseq.graph_parser.import_profile.now_ms():null)),(function (blocks_start){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter._LT_build_blocks_tx(conn,blocks__$1,pre_blocks,per_file_state,tx_options,walked_by_uuid)),(function (blocks_tx){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.log_phase_ms_BANG_(log_fn,new cljs.core.Keyword(null,"blocks-tx","blocks-tx",-1349877329),blocks_start,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.count(blocks__$1)], null))),(function (___$6){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.track_placeholder_ref_uuids_BANG_(new cljs.core.Keyword(null,"import-state","import-state",1493794865).cljs$core$IFn$_invoke$arity$1(options),blocks_tx)),(function (___$7){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(log_fn)?logseq.graph_parser.import_profile.now_ms():null)),(function (split_start){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.split_pages_and_properties_tx(pages_tx,old_properties,existing_pages,new cljs.core.Keyword(null,"import-state","import-state",1493794865).cljs$core$IFn$_invoke$arity$1(options),cljs.core.deref(new cljs.core.Keyword(null,"upstream-properties","upstream-properties",1757374284).cljs$core$IFn$_invoke$arity$1(tx_options)))),(function (p__83942){
var map__83943 = p__83942;
var map__83943__$1 = cljs.core.__destructure_map(map__83943);
var pages_tx_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83943__$1,new cljs.core.Keyword(null,"pages-tx","pages-tx",1327748306));
var property_pages_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83943__$1,new cljs.core.Keyword(null,"property-pages-tx","property-pages-tx",859116570));
var property_page_properties_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83943__$1,new cljs.core.Keyword(null,"property-page-properties-tx","property-page-properties-tx",-1086975165));
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.log_phase_ms_BANG_(log_fn,new cljs.core.Keyword(null,"split","split",-599435118),split_start,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",-1269645878),file], null))),(function (___$8){
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("logseq.graph-parser.exporter","imported-data?","logseq.graph-parser.exporter/imported-data?",1785602641),true,new cljs.core.Keyword("logseq.graph-parser.exporter","path","logseq.graph-parser.exporter/path",-1467341446),file,new cljs.core.Keyword("logseq.graph-parser.exporter","new-graph?","logseq.graph-parser.exporter/new-graph?",-2038807565),true], null)),(function (tx_meta){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.import_progress_BANG_(options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"property-transact","property-transact",-1401720038),new cljs.core.Keyword(null,"file","file",-1269645878),file], null))),(function (___$9){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(log_fn)?logseq.graph_parser.import_profile.now_ms():null)),(function (prop_tx_start){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.transact_imported_data_BANG_(conn,property_pages_tx,tx_meta,options)),(function (___$10){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.log_phase_ms_BANG_(log_fn,new cljs.core.Keyword(null,"prop-tx","prop-tx",-1389246885),prop_tx_start,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"tx-count","tx-count",1987743336),cljs.core.count(property_pages_tx)], null))),(function (___$11){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.deref(new cljs.core.Keyword(null,"classes-tx","classes-tx",664490242).cljs$core$IFn$_invoke$arity$1(tx_options))),(function (classes_tx){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(log_fn)?logseq.graph_parser.import_profile.now_ms():null)),(function (clean_start){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.clean_extra_invalid_tags(cljs.core.deref(conn),pages_tx_SINGLEQUOTE_,classes_tx,existing_pages)),(function (p__83944){
var map__83945 = p__83944;
var map__83945__$1 = cljs.core.__destructure_map(map__83945);
var pages_tx_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83945__$1,new cljs.core.Keyword(null,"pages-tx","pages-tx",1327748306));
var retract_page_tags_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83945__$1,new cljs.core.Keyword(null,"retract-page-tags-tx","retract-page-tags-tx",-932957972));
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.log_phase_ms_BANG_(log_fn,new cljs.core.Keyword(null,"clean-tags","clean-tags",1418002940),clean_start,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",-1269645878),file], null))),(function (___$12){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(classes_tx,retract_page_tags_tx)),(function (classes_tx_SINGLEQUOTE_){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.deref(new cljs.core.Keyword(null,"custom-status-tx","custom-status-tx",1561056861).cljs$core$IFn$_invoke$arity$1(tx_options))),(function (custom_status_tx){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(log_fn)?logseq.graph_parser.import_profile.now_ms():null)),(function (main_tx_start){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.build_file_import_main_tx(pages_tx_SINGLEQUOTE__SINGLEQUOTE_,page_properties_tx,property_page_properties_tx,classes_tx,classes_tx_SINGLEQUOTE_,custom_status_tx,blocks_tx)),(function (tx_SINGLEQUOTE_){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.log_phase_ms_BANG_(log_fn,new cljs.core.Keyword(null,"main-tx","main-tx",659110760),main_tx_start,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"tx-count","tx-count",1987743336),cljs.core.count(tx_SINGLEQUOTE_)], null))),(function (___$13){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.import_progress_BANG_(options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.Keyword(null,"file","file",-1269645878),file], null))),(function (___$14){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(log_fn)?logseq.graph_parser.import_profile.now_ms():null)),(function (transact_start){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx_SINGLEQUOTE_,tx_meta)),(function (main_tx_report){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.log_phase_ms_BANG_(log_fn,new cljs.core.Keyword(null,"transact","transact",-267998670),transact_start,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"tx-count","tx-count",1987743336),cljs.core.count(tx_SINGLEQUOTE_)], null))),(function (___$15){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(log_fn)?logseq.graph_parser.import_profile.now_ms():null)),(function (save_start){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.save_from_tx(tx_SINGLEQUOTE_,options)),(function (___$16){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.log_phase_ms_BANG_(log_fn,new cljs.core.Keyword(null,"save-tx","save-tx",1440004358),save_start,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",-1269645878),file], null))),(function (___$17){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.import_progress_BANG_(options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"upstream-properties","upstream-properties",1757374284),new cljs.core.Keyword(null,"file","file",-1269645878),file], null))),(function (___$18){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(log_fn)?logseq.graph_parser.import_profile.now_ms():null)),(function (upstream_start){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.build_upstream_properties_tx(cljs.core.deref(conn),cljs.core.deref(new cljs.core.Keyword(null,"upstream-properties","upstream-properties",1757374284).cljs$core$IFn$_invoke$arity$1(tx_options)),new cljs.core.Keyword(null,"import-state","import-state",1493794865).cljs$core$IFn$_invoke$arity$1(options),log_fn)),(function (upstream_properties_tx){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.transact_imported_data_BANG_(conn,upstream_properties_tx,tx_meta,options)),(function (upstream_tx_report){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.log_phase_ms_BANG_(log_fn,new cljs.core.Keyword(null,"upstream","upstream",1461280379),upstream_start,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",-1269645878),file], null))),(function (___$19){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.log_phase_ms_BANG_(log_fn,new cljs.core.Keyword(null,"file","file",-1269645878),file_start,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",-1269645878),file], null))),(function (___$20){
return promesa.protocols._promise(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main_tx_report,upstream_tx_report], null));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
});
logseq.graph_parser.exporter.export_doc_file = (function logseq$graph_parser$exporter$export_doc_file(p__83946,conn,_LT_read_file,p__83947){
var map__83948 = p__83946;
var map__83948__$1 = cljs.core.__destructure_map(map__83948);
var file = map__83948__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83948__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83948__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var map__83949 = p__83947;
var map__83949__$1 = cljs.core.__destructure_map(map__83949);
var options = map__83949__$1;
var notify_user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83949__$1,new cljs.core.Keyword(null,"notify-user","notify-user",-268964208));
var set_ui_state = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83949__$1,new cljs.core.Keyword(null,"set-ui-state","set-ui-state",1991288653),cljs.core.constantly(null));
var _LT_export_file = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83949__$1,new cljs.core.Keyword(null,"<export-file","<export-file",-1771768011),(function logseq$graph_parser$exporter$export_doc_file_$__LT_export_file(conn__$1,m,opts){
return logseq.graph_parser.exporter._LT_add_file_to_db_graph(conn__$1,new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword("file","content","file/content",12680964).cljs$core$IFn$_invoke$arity$1(m),opts);
}));
var _LT_get_file_stat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83949__$1,new cljs.core.Keyword(null,"<get-file-stat","<get-file-stat",1615437898));
logseq.graph_parser.exporter.import_progress_BANG_(options,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"doc-files","doc-files",-1143623675),new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"read-file","read-file",-1584858601),new cljs.core.Keyword(null,"file","file",-1269645878),path,new cljs.core.Keyword(null,"file-idx","file-idx",2008975387),(idx + (1))], null));

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__83950 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","importing-state","graph/importing-state",34918559),new cljs.core.Keyword(null,"step","step",1288888124)], null);
var G__83951 = new cljs.core.Keyword(null,"pages","pages",-285406513);
return (set_ui_state.cljs$core$IFn$_invoke$arity$2 ? set_ui_state.cljs$core$IFn$_invoke$arity$2(G__83950,G__83951) : set_ui_state.call(null,G__83950,G__83951));
})()),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__83952 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","importing-state","graph/importing-state",34918559),new cljs.core.Keyword(null,"label","label",1718410804)], null);
var G__83953 = new cljs.core.Keyword("import","loading","import/loading",-1917645552);
return (set_ui_state.cljs$core$IFn$_invoke$arity$2 ? set_ui_state.cljs$core$IFn$_invoke$arity$2(G__83952,G__83953) : set_ui_state.call(null,G__83952,G__83953));
})()),(function (___$1){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__83954 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","importing-state","graph/importing-state",34918559),new cljs.core.Keyword(null,"current-idx","current-idx",1734114444)], null);
var G__83955 = (idx + (1));
return (set_ui_state.cljs$core$IFn$_invoke$arity$2 ? set_ui_state.cljs$core$IFn$_invoke$arity$2(G__83954,G__83955) : set_ui_state.call(null,G__83954,G__83955));
})()),(function (___$2){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__83956 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","importing-state","graph/importing-state",34918559),new cljs.core.Keyword(null,"current-page","current-page",-101294180)], null);
var G__83957 = path;
return (set_ui_state.cljs$core$IFn$_invoke$arity$2 ? set_ui_state.cljs$core$IFn$_invoke$arity$2(G__83956,G__83957) : set_ui_state.call(null,G__83956,G__83957));
})()),(function (___$3){
return promesa.protocols._mcat(promesa.protocols._promise((_LT_read_file.cljs$core$IFn$_invoke$arity$1 ? _LT_read_file.cljs$core$IFn$_invoke$arity$1(file) : _LT_read_file.call(null,file))),(function (content){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core.fn_QMARK_(_LT_get_file_stat))?(function (){var G__83958 = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"fs-path","fs-path",760699783).cljs$core$IFn$_invoke$arity$1(file);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return path;
}
})();
return (_LT_get_file_stat.cljs$core$IFn$_invoke$arity$1 ? _LT_get_file_stat.cljs$core$IFn$_invoke$arity$1(G__83958) : _LT_get_file_stat.call(null,G__83958));
})():null)),(function (stat){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = logseq.common.util.timestamp_ms(new cljs.core.Keyword(null,"file-updated-at","file-updated-at",1716406379).cljs$core$IFn$_invoke$arity$1(file));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.common.util.timestamp_ms((function (){var or__5142__auto____$1 = new cljs.core.Keyword(null,"mtime","mtime",963165087).cljs$core$IFn$_invoke$arity$1(stat);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = (function (){var G__83959 = stat;
if((G__83959 == null)){
return null;
} else {
return G__83959.mtime;
}
})();
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return new cljs.core.Keyword(null,"last-modified-at","last-modified-at",478765450).cljs$core$IFn$_invoke$arity$1(file);
}
}
})());
}
})()),(function (modified_at){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = logseq.common.util.timestamp_ms(new cljs.core.Keyword(null,"file-created-at","file-created-at",1855423146).cljs$core$IFn$_invoke$arity$1(file));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = logseq.common.util.timestamp_ms((function (){var or__5142__auto____$1 = new cljs.core.Keyword(null,"birthtime","birthtime",-2055640037).cljs$core$IFn$_invoke$arity$1(stat);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var G__83960 = stat;
if((G__83960 == null)){
return null;
} else {
return G__83960.birthtime;
}
}
})());
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return modified_at;
}
}
})()),(function (created_at){
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("file","path","file/path",-191335748),path,new cljs.core.Keyword("file","content","file/content",12680964),content], null)),(function (m){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__83961 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword(null,"set-ui-state","set-ui-state",1991288653),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<export-file","<export-file",-1771768011)], 0));
var G__83961__$1 = (cljs.core.truth_(created_at)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83961,new cljs.core.Keyword(null,"file-created-at","file-created-at",1855423146),created_at):G__83961);
if(cljs.core.truth_(modified_at)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83961__$1,new cljs.core.Keyword(null,"file-updated-at","file-updated-at",1716406379),modified_at);
} else {
return G__83961__$1;
}
})()),(function (export_options){
return promesa.protocols._mcat(promesa.protocols._promise((_LT_export_file.cljs$core$IFn$_invoke$arity$3 ? _LT_export_file.cljs$core$IFn$_invoke$arity$3(conn,m,export_options) : _LT_export_file.call(null,conn,m,export_options))),(function (___$4){
return promesa.protocols._promise(m);
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
})),(function (error){
var G__83962_84508 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"msg","msg",-1386103444),(""+"Import failed on "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)))+" with error:\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(error.message)),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"error","error",-978969032),error], null)], null);
(notify_user.cljs$core$IFn$_invoke$arity$1 ? notify_user.cljs$core$IFn$_invoke$arity$1(G__83962_84508) : notify_user.call(null,G__83962_84508));

var temp__5825__auto___84509 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"import-state","import-state",1493794865),new cljs.core.Keyword(null,"ignored-files","ignored-files",-257976)], null));
if(cljs.core.truth_(temp__5825__auto___84509)){
var ignored_files_84511 = temp__5825__auto___84509;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ignored_files_84511,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword(null,"export-failed","export-failed",1111495921)], null));
} else {
}

return null;
}));
});
/**
 * Exports all user created files i.e. under journals/ and pages/.
 * Recommended to use build-doc-options and pass that as options
 */
logseq.graph_parser.exporter.export_doc_files = (function logseq$graph_parser$exporter$export_doc_files(conn,_STAR_doc_files,_LT_read_file,p__83966){
var map__83967 = p__83966;
var map__83967__$1 = cljs.core.__destructure_map(map__83967);
var options = map__83967__$1;
var notify_user = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83967__$1,new cljs.core.Keyword(null,"notify-user","notify-user",-268964208),cljs.core.prn);
var set_ui_state = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83967__$1,new cljs.core.Keyword(null,"set-ui-state","set-ui-state",1991288653),cljs.core.constantly(null));
var on_tx_report = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83967__$1,new cljs.core.Keyword(null,"on-tx-report","on-tx-report",854171101),cljs.core.constantly(null));
var G__83968_84514 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","importing-state","graph/importing-state",34918559),new cljs.core.Keyword(null,"step","step",1288888124)], null);
var G__83969_84515 = new cljs.core.Keyword(null,"pages","pages",-285406513);
(set_ui_state.cljs$core$IFn$_invoke$arity$2 ? set_ui_state.cljs$core$IFn$_invoke$arity$2(G__83968_84514,G__83969_84515) : set_ui_state.call(null,G__83968_84514,G__83969_84515));

var G__83970_84516 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","importing-state","graph/importing-state",34918559),new cljs.core.Keyword(null,"label","label",1718410804)], null);
var G__83971_84517 = new cljs.core.Keyword("import","loading","import/loading",-1917645552);
(set_ui_state.cljs$core$IFn$_invoke$arity$2 ? set_ui_state.cljs$core$IFn$_invoke$arity$2(G__83970_84516,G__83971_84517) : set_ui_state.call(null,G__83970_84516,G__83971_84517));

var G__83972_84518 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","importing-state","graph/importing-state",34918559),new cljs.core.Keyword(null,"total","total",1916810418)], null);
var G__83973_84519 = cljs.core.count(_STAR_doc_files);
(set_ui_state.cljs$core$IFn$_invoke$arity$2 ? set_ui_state.cljs$core$IFn$_invoke$arity$2(G__83972_84518,G__83973_84519) : set_ui_state.call(null,G__83972_84518,G__83973_84519));

logseq.graph_parser.exporter.import_progress_BANG_(options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"doc-files","doc-files",-1143623675),new cljs.core.Keyword(null,"total-files","total-files",-833744967),cljs.core.count(_STAR_doc_files)], null));

var doc_files = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p1__83963_SHARP_,p2__83964_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__83963_SHARP_,new cljs.core.Keyword(null,"idx","idx",1053688473),p2__83964_SHARP_);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__83974){
var map__83975 = p__83974;
var map__83975__$1 = cljs.core.__destructure_map(map__83975);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83975__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(!(clojure.string.starts_with_QMARK_(module$node_modules$path$path.basename(path),"hls__"))),path], null);
}),_STAR_doc_files),cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(_STAR_doc_files)));
logseq.graph_parser.exporter.index_journal_page_name_uuids_BANG_(doc_files,new cljs.core.Keyword(null,"import-state","import-state",1493794865).cljs$core$IFn$_invoke$arity$1(options));

var vec__83976 = cljs.core.split_with((function (p1__83965_SHARP_){
return logseq.graph_parser.exporter.hls_annotation_md_file_QMARK_(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__83965_SHARP_));
}),doc_files);
var annotation_files = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83976,(0),null);
var other_files = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83976,(1),null);
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.run_BANG_.cljs$core$IFn$_invoke$arity$2((function (file){
return promesa.protocols._promise(logseq.graph_parser.exporter.export_doc_file(file,conn,_LT_read_file,options));
}),annotation_files)),(function (___27434__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.run_BANG_.cljs$core$IFn$_invoke$arity$2((function (p__83979){
var map__83980 = p__83979;
var map__83980__$1 = cljs.core.__destructure_map(map__83980);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83980__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return promesa.protocols._promise(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter._LT_import_hls_linked_pdf_assets_BANG_(file,options)),(function (tx){
return promesa.protocols._promise(((cljs.core.seq(tx))?(function (){var report = logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("logseq.graph-parser.exporter","imported-data?","logseq.graph-parser.exporter/imported-data?",1785602641),true,new cljs.core.Keyword("logseq.graph-parser.exporter","path","logseq.graph-parser.exporter/path",-1467341446),file,new cljs.core.Keyword("logseq.graph-parser.exporter","new-graph?","logseq.graph-parser.exporter/new-graph?",-2038807565),true], null));
logseq.graph_parser.exporter.save_from_tx(tx,options);

return (on_tx_report.cljs$core$IFn$_invoke$arity$1 ? on_tx_report.cljs$core$IFn$_invoke$arity$1(report) : on_tx_report.call(null,report));
})():null));
}));
})));
}),annotation_files)),(function (___27434__auto____$1){
return promesa.protocols._promise(promesa.core.run_BANG_.cljs$core$IFn$_invoke$arity$2((function (file){
return promesa.protocols._promise(logseq.graph_parser.exporter.export_doc_file(file,conn,_LT_read_file,options));
}),other_files));
}));
}));
})),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.finalize.set_finishing_import_ui_BANG_(set_ui_state)),(function (___$1){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.import_progress_BANG_(options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"normalize-journal-uuids","normalize-journal-uuids",-348609458)], null))),(function (___$2){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.finalize.normalize_journal_uuids_BANG_(conn)),(function (normalize_tx_report){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(normalize_tx_report)?(on_tx_report.cljs$core$IFn$_invoke$arity$1 ? on_tx_report.cljs$core$IFn$_invoke$arity$1(normalize_tx_report) : on_tx_report.call(null,normalize_tx_report)):null)),(function (___$3){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.import_progress_BANG_(options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"cleanup-missing-block-refs","cleanup-missing-block-refs",1883016407)], null))),(function (___$4){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.finalize.cleanup_missing_block_refs_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.Keyword(null,"import-state","import-state",1493794865).cljs$core$IFn$_invoke$arity$1(options))),(function (cleanup_tx_report){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(cleanup_tx_report)?(on_tx_report.cljs$core$IFn$_invoke$arity$1 ? on_tx_report.cljs$core$IFn$_invoke$arity$1(cleanup_tx_report) : on_tx_report.call(null,cleanup_tx_report)):null)),(function (___$5){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.finalize.ensure_imported_page_parent_orders_BANG_(conn)),(function (page_order_tx_report){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(page_order_tx_report)?(on_tx_report.cljs$core$IFn$_invoke$arity$1 ? on_tx_report.cljs$core$IFn$_invoke$arity$1(page_order_tx_report) : on_tx_report.call(null,page_order_tx_report)):null)),(function (___$6){
return promesa.protocols._mcat(promesa.protocols._promise((((!(new cljs.core.Keyword(null,"finalize-imported-graph?","finalize-imported-graph?",-854748808).cljs$core$IFn$_invoke$arity$1(options) === false)))?(function (){
logseq.graph_parser.exporter.import_progress_BANG_(options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"finalize-imported-graph","finalize-imported-graph",1564413341)], null));

var finalize_start = (cljs.core.truth_(new cljs.core.Keyword(null,"log-fn","log-fn",-2003241282).cljs$core$IFn$_invoke$arity$1(options))?logseq.graph_parser.import_profile.now_ms():null);
logseq.graph_parser.exporter.finalize.finalize_imported_graph_BANG_(conn);

return logseq.graph_parser.exporter.log_phase_ms_BANG_(new cljs.core.Keyword(null,"log-fn","log-fn",-2003241282).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"finalize-imported-graph","finalize-imported-graph",1564413341),finalize_start,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entities","entities",1940967403),new cljs.core.Keyword(null,"post-doc-files","post-doc-files",565938892)], null));
})()
:null)),(function (___$7){
return promesa.protocols._promise(cleanup_tx_report);
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
})),(function (e){
var G__83981_84528 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"msg","msg",-1386103444),(""+"Import has unexpected error:\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e], null)], null);
(notify_user.cljs$core$IFn$_invoke$arity$1 ? notify_user.cljs$core$IFn$_invoke$arity$1(G__83981_84528) : notify_user.call(null,G__83981_84528));

throw e;
}));
});
logseq.graph_parser.exporter.default_save_file = (function logseq$graph_parser$exporter$default_save_file(conn,path,content){
return logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("file","path","file/path",-191335748),path,new cljs.core.Keyword("file","content","file/content",12680964),content,new cljs.core.Keyword("file","last-modified-at","file/last-modified-at",473527310),(new Date())], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.graph-parser.exporter","imported-data?","logseq.graph-parser.exporter/imported-data?",1785602641),true], null));
});
/**
 * Exports files under logseq/
 */
logseq.graph_parser.exporter.export_logseq_files = (function logseq$graph_parser$exporter$export_logseq_files(repo_or_conn,logseq_files,_LT_read_file,p__83986){
var map__83987 = p__83986;
var map__83987__$1 = cljs.core.__destructure_map(map__83987);
var _LT_save_file = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83987__$1,new cljs.core.Keyword(null,"<save-file","<save-file",1293534470),logseq.graph_parser.exporter.default_save_file);
var notify_user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83987__$1,new cljs.core.Keyword(null,"notify-user","notify-user",-268964208));
var custom_css = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__83982_SHARP_){
return clojure.string.ends_with_QMARK_(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__83982_SHARP_),"logseq/custom.css");
}),logseq_files));
var custom_js = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__83983_SHARP_){
return clojure.string.ends_with_QMARK_(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__83983_SHARP_),"logseq/custom.js");
}),logseq_files));
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(custom_css)?promesa.core.then.cljs$core$IFn$_invoke$arity$2((_LT_read_file.cljs$core$IFn$_invoke$arity$1 ? _LT_read_file.cljs$core$IFn$_invoke$arity$1(custom_css) : _LT_read_file.call(null,custom_css)),(function (p1__83984_SHARP_){
return (_LT_save_file.cljs$core$IFn$_invoke$arity$3 ? _LT_save_file.cljs$core$IFn$_invoke$arity$3(repo_or_conn,"logseq/custom.css",p1__83984_SHARP_) : _LT_save_file.call(null,repo_or_conn,"logseq/custom.css",p1__83984_SHARP_));
})):null)),(function (___27434__auto__){
return promesa.protocols._promise((cljs.core.truth_(custom_js)?promesa.core.then.cljs$core$IFn$_invoke$arity$2((_LT_read_file.cljs$core$IFn$_invoke$arity$1 ? _LT_read_file.cljs$core$IFn$_invoke$arity$1(custom_js) : _LT_read_file.call(null,custom_js)),(function (p1__83985_SHARP_){
return (_LT_save_file.cljs$core$IFn$_invoke$arity$3 ? _LT_save_file.cljs$core$IFn$_invoke$arity$3(repo_or_conn,"logseq/custom.js",p1__83985_SHARP_) : _LT_save_file.call(null,repo_or_conn,"logseq/custom.js",p1__83985_SHARP_));
})):null));
}));
})),(function (error){
var G__83988 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"msg","msg",-1386103444),(""+"Import unexpectedly failed while reading logseq files:\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(error.message)),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null)], null);
return (notify_user.cljs$core$IFn$_invoke$arity$1 ? notify_user.cljs$core$IFn$_invoke$arity$1(G__83988) : notify_user.call(null,G__83988));
}));
});
logseq.graph_parser.exporter.resolve_zotero_config_path = (function logseq$graph_parser$exporter$resolve_zotero_config_path(config,config_file){
var config_path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(config_file);
var base_dir = (cljs.core.truth_((function (){var and__5140__auto__ = typeof config_path === 'string';
if(and__5140__auto__){
return module$node_modules$path$path.isAbsolute(config_path);
} else {
return and__5140__auto__;
}
})())?module$node_modules$path$path.dirname(module$node_modules$path$path.dirname(config_path)):null);
var to_abs = (function (p){
if(cljs.core.truth_((function (){var and__5140__auto__ = base_dir;
if(cljs.core.truth_(and__5140__auto__)){
return ((typeof p === 'string') && ((((!(clojure.string.blank_QMARK_(p)))) && (cljs.core.not(module$node_modules$path$path.isAbsolute(p))))));
} else {
return and__5140__auto__;
}
})())){
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(base_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p], 0));
} else {
return p;
}
});
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zotero","settings-v2","zotero/settings-v2",-666496103),"default",new cljs.core.Keyword(null,"zotero-data-directory","zotero-data-directory",-218308088)], null),to_abs),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zotero","settings-v2","zotero/settings-v2",-666496103),"default",new cljs.core.Keyword(null,"zotero-linked-attachment-base-directory","zotero-linked-attachment-base-directory",-799816118)], null),to_abs);
});
/**
 * Exports logseq/config.edn by saving to database and setting any properties related to config
 */
logseq.graph_parser.exporter.export_config_file = (function logseq$graph_parser$exporter$export_config_file(repo_or_conn,config_file,_LT_read_file,p__83990){
var map__83991 = p__83990;
var map__83991__$1 = cljs.core.__destructure_map(map__83991);
var _LT_save_file = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83991__$1,new cljs.core.Keyword(null,"<save-file","<save-file",1293534470),logseq.graph_parser.exporter.default_save_file);
var notify_user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83991__$1,new cljs.core.Keyword(null,"notify-user","notify-user",-268964208));
var default_config = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83991__$1,new cljs.core.Keyword(null,"default-config","default-config",-695396957),cljs.core.PersistentArrayMap.EMPTY);
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2((_LT_read_file.cljs$core$IFn$_invoke$arity$1 ? _LT_read_file.cljs$core$IFn$_invoke$arity$1(config_file) : _LT_read_file.call(null,config_file)),(function (p1__83989_SHARP_){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__83992 = repo_or_conn;
var G__83993 = "logseq/config.edn";
var G__83994 = logseq.graph_parser.exporter.pretty_print_dissoc(p1__83989_SHARP_,cljs.core.keys(logseq.common.config.file_only_config));
return (_LT_save_file.cljs$core$IFn$_invoke$arity$3 ? _LT_save_file.cljs$core$IFn$_invoke$arity$3(G__83992,G__83993,G__83994) : _LT_save_file.call(null,G__83992,G__83993,G__83994));
})()),(function (___27434__auto__){
return promesa.protocols._promise((function (){var config = logseq.graph_parser.exporter.resolve_zotero_config_path(clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(p1__83989_SHARP_),config_file);
var temp__5825__auto___84537 = (function (){var or__5142__auto__ = new cljs.core.Keyword("journal","page-title-format","journal/page-title-format",2033061997).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"date-formatter","date-formatter",-223324709).cljs$core$IFn$_invoke$arity$1(config);
}
})();
if(cljs.core.truth_(temp__5825__auto___84537)){
var title_format_84538 = temp__5825__auto___84537;
logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(repo_or_conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("logseq.class","Journal","logseq.class/Journal",1979741081),new cljs.core.Keyword("logseq.property.journal","title-format","logseq.property.journal/title-format",-1536497954),title_format_84538], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.graph-parser.exporter","imported-data?","logseq.graph-parser.exporter/imported-data?",1785602641),true], null));
} else {
}

return config;
})());
}));
}));
})),(function (err){
var G__83995_84539 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"Import may have mistakes due to an invalid config.edn. Recommend re-importing with a valid config.edn",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),err], null)], null);
(notify_user.cljs$core$IFn$_invoke$arity$1 ? notify_user.cljs$core$IFn$_invoke$arity$1(G__83995_84539) : notify_user.call(null,G__83995_84539));

return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(default_config);
}));
});
logseq.graph_parser.exporter.export_class_properties = (function logseq$graph_parser$exporter$export_class_properties(conn,repo_or_conn){
var user_classes = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__83996_SHARP_){
var G__83998 = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(p1__83996_SHARP_);
return (logseq.db.frontend.class$.built_in_classes.cljs$core$IFn$_invoke$arity$1 ? logseq.db.frontend.class$.built_in_classes.cljs$core$IFn$_invoke$arity$1(G__83998) : logseq.db.frontend.class$.built_in_classes.call(null,G__83998));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var G__83999 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","ident","db/ident",-737096)], null)),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("logseq.class","Tag","logseq.class/Tag",-538902083)], null)], null);
var G__84000 = cljs.core.deref(conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__83999,G__84000) : datascript.core.q.call(null,G__83999,G__84000));
})()));
var class_to_prop_uuids = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__84001){
var vec__84002 = p__84001;
var class_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84002,(0),null);
var prop_ident = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84002,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,class_id,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),prop_ident);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__83997_SHARP_){
var G__84005 = (function (){var G__84006 = cljs.core.deref(conn);
var G__84007 = cljs.core.second(p1__83997_SHARP_);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__84006,G__84007) : datascript.core.entity.call(null,G__84006,G__84007));
})();
return (logseq.db.built_in_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.built_in_QMARK_.cljs$core$IFn$_invoke$arity$1(G__84005) : logseq.db.built_in_QMARK_.call(null,G__84005));
}),(function (){var G__84008 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Symbol(null,"?prop","?prop",1880869414,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?user-classes","?user-classes",-1375813354,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Symbol(null,"?class","?class",919269736,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"?user-classes","?user-classes",-1375813354,null),new cljs.core.Symbol(null,"?class","?class",919269736,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Symbol(null,"?prop","?prop",1880869414,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?prop-e","?prop-e",-213176507,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Symbol(null,"?prop","?prop",1880869414,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?prop-e","?prop-e",-213176507,null),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("logseq.class","Property","logseq.class/Property",1038767048)], null)], null);
var G__84009 = cljs.core.deref(conn);
var G__84010 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096),user_classes));
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__84008,G__84009,G__84010) : datascript.core.q.call(null,G__84008,G__84009,G__84010));
})()));
var tx = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__84011){
var vec__84012 = p__84011;
var class_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84012,(0),null);
var prop_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84012,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),class_id,new cljs.core.Keyword("logseq.property.class","properties","logseq.property.class/properties",-2123712050),cljs.core.vec(prop_ids)], null);
}),class_to_prop_uuids);
return logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(repo_or_conn,tx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.graph-parser.exporter","imported-data?","logseq.graph-parser.exporter/imported-data?",1785602641),true,new cljs.core.Keyword("logseq.graph-parser.exporter","new-graph?","logseq.graph-parser.exporter/new-graph?",-2038807565),true], null));
});
/**
 * Calls async-fn with each element in args-to-loop. Catches an unexpected error in loop and notifies user
 */
logseq.graph_parser.exporter._LT_safe_async_loop = (function logseq$graph_parser$exporter$_LT_safe_async_loop(async_fn,args_to_loop,notify_user){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve_fn_84019,reject_fn_84018){
var loop_fn_84015 = (function logseq$graph_parser$exporter$_LT_safe_async_loop_$_loop_fn_84015(_,i){
return promesa.core.fnly.cljs$core$IFn$_invoke$arity$2((function (res_84016,err_84017){
if((!((err_84017 == null)))){
return (reject_fn_84018.cljs$core$IFn$_invoke$arity$1 ? reject_fn_84018.cljs$core$IFn$_invoke$arity$1(err_84017) : reject_fn_84018.call(null,err_84017));
} else {
if(promesa.core.recur_QMARK_(res_84016)){
promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vthread","vthread",441141075),promesa.exec.wrap_bindings((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(logseq$graph_parser$exporter$_LT_safe_async_loop_$_loop_fn_84015,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(res_84016));
})));

return null;
} else {
return (resolve_fn_84019.cljs$core$IFn$_invoke$arity$1 ? resolve_fn_84019.cljs$core$IFn$_invoke$arity$1(res_84016) : resolve_fn_84019.call(null,res_84016));
}
}
}),promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(_),(function (___$1){
return promesa.protocols._mcat(promesa.protocols._promise(i),(function (i__$1){
return promesa.protocols._promise((((i__$1 >= (cljs.core.count(args_to_loop) - (1))))?null:promesa.core.__GT_Recur(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__84020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(args_to_loop,(i__$1 + (1)));
return (async_fn.cljs$core$IFn$_invoke$arity$1 ? async_fn.cljs$core$IFn$_invoke$arity$1(G__84020) : async_fn.call(null,G__84020));
})(),(i__$1 + (1))], null))));
}));
}));
})));
});
return promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vthread","vthread",441141075),promesa.exec.wrap_bindings((function (){
return loop_fn_84015((function (){var G__84021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(args_to_loop,(0));
return (async_fn.cljs$core$IFn$_invoke$arity$1 ? async_fn.cljs$core$IFn$_invoke$arity$1(G__84021) : async_fn.call(null,G__84021));
})(),(0));
})));
})),(function (e){
var G__84022 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"msg","msg",-1386103444),(""+"Import has an unexpected error:\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e], null)], null);
return (notify_user.cljs$core$IFn$_invoke$arity$1 ? notify_user.cljs$core$IFn$_invoke$arity$1(G__84022) : notify_user.call(null,G__84022));
}));
});
/**
 * Reads and copies files under assets/
 */
logseq.graph_parser.exporter.read_and_copy_asset_files = (function logseq$graph_parser$exporter$read_and_copy_asset_files(_STAR_asset_files,_LT_read_and_copy_asset_file,p__84025){
var map__84026 = p__84025;
var map__84026__$1 = cljs.core.__destructure_map(map__84026);
var notify_user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84026__$1,new cljs.core.Keyword(null,"notify-user","notify-user",-268964208));
var set_ui_state = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__84026__$1,new cljs.core.Keyword(null,"set-ui-state","set-ui-state",1991288653),cljs.core.constantly(null));
var assets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84026__$1,new cljs.core.Keyword(null,"assets","assets",210278279));
var rpath_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84026__$1,new cljs.core.Keyword(null,"rpath-key","rpath-key",1154764950));
var import_watchdog = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84026__$1,new cljs.core.Keyword(null,"import-watchdog","import-watchdog",1052593713));
if(cljs.core.truth_(_LT_read_and_copy_asset_file)){
} else {
throw (new Error((""+"Assert failed: "+"read-and-copy-asset-file fn required"+"\n"+"<read-and-copy-asset-file")));
}

var asset_files = (function (){var assets__$1 = (((rpath_key instanceof cljs.core.Keyword))?logseq.common.util.distinct_by(rpath_key,_STAR_asset_files):_STAR_asset_files);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p1__84023_SHARP_,p2__84024_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__84023_SHARP_,new cljs.core.Keyword(null,"idx","idx",1053688473),p2__84024_SHARP_);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),assets__$1),cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(assets__$1)));
})();
var read_and_copy_asset = (function logseq$graph_parser$exporter$read_and_copy_asset_files_$_read_and_copy_asset(p__84027){
var map__84028 = p__84027;
var map__84028__$1 = cljs.core.__destructure_map(map__84028);
var file = map__84028__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84028__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84028__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
logseq.graph_parser.import_profile.set_import_progress_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"import-watchdog","import-watchdog",1052593713),import_watchdog], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"assets","assets",210278279),new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"read-and-copy","read-and-copy",-1166885179),new cljs.core.Keyword(null,"file","file",-1269645878),path,new cljs.core.Keyword(null,"file-idx","file-idx",2008975387),(idx + (1)),new cljs.core.Keyword(null,"total-files","total-files",-833744967),cljs.core.count(asset_files)], null));

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__84029 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","importing-state","graph/importing-state",34918559),new cljs.core.Keyword(null,"step","step",1288888124)], null);
var G__84030 = new cljs.core.Keyword(null,"assets","assets",210278279);
return (set_ui_state.cljs$core$IFn$_invoke$arity$2 ? set_ui_state.cljs$core$IFn$_invoke$arity$2(G__84029,G__84030) : set_ui_state.call(null,G__84029,G__84030));
})()),(function (___27434__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__84031 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","importing-state","graph/importing-state",34918559),new cljs.core.Keyword(null,"label","label",1718410804)], null);
var G__84032 = new cljs.core.Keyword("import","copying-assets","import/copying-assets",990025184);
return (set_ui_state.cljs$core$IFn$_invoke$arity$2 ? set_ui_state.cljs$core$IFn$_invoke$arity$2(G__84031,G__84032) : set_ui_state.call(null,G__84031,G__84032));
})()),(function (___27434__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__84033 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","importing-state","graph/importing-state",34918559),new cljs.core.Keyword(null,"total","total",1916810418)], null);
var G__84034 = cljs.core.count(asset_files);
return (set_ui_state.cljs$core$IFn$_invoke$arity$2 ? set_ui_state.cljs$core$IFn$_invoke$arity$2(G__84033,G__84034) : set_ui_state.call(null,G__84033,G__84034));
})()),(function (___27434__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__84035 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","importing-state","graph/importing-state",34918559),new cljs.core.Keyword(null,"current-idx","current-idx",1734114444)], null);
var G__84036 = (idx + (1));
return (set_ui_state.cljs$core$IFn$_invoke$arity$2 ? set_ui_state.cljs$core$IFn$_invoke$arity$2(G__84035,G__84036) : set_ui_state.call(null,G__84035,G__84036));
})()),(function (___27434__auto____$3){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__84037 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","importing-state","graph/importing-state",34918559),new cljs.core.Keyword(null,"current-page","current-page",-101294180)], null);
var G__84038 = path;
return (set_ui_state.cljs$core$IFn$_invoke$arity$2 ? set_ui_state.cljs$core$IFn$_invoke$arity$2(G__84037,G__84038) : set_ui_state.call(null,G__84037,G__84038));
})()),(function (___27434__auto____$4){
return promesa.protocols._promise((function (){var G__84039 = file;
var G__84040 = assets;
var G__84041 = (function (buffer){
var edn_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("edn",logseq.common.path.file_ext(path));
var edn_content = ((edn_QMARK_)?logseq.common.util.safe_read_map_string.cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.utf8.decode(buffer)):null);
var pdf_annotation_QMARK_ = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"highlights","highlights",945143465),null], null), null),cljs.core.keys(edn_content));
var with_edn_content = (function (m){
var G__84042 = m;
if(cljs.core.truth_(edn_content)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__84042,new cljs.core.Keyword(null,"edn-content","edn-content",-1018522727),edn_content);
} else {
return G__84042;
}
});
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-edn-content","with-edn-content",-658298678),with_edn_content,new cljs.core.Keyword(null,"pdf-annotation?","pdf-annotation?",1362191639),pdf_annotation_QMARK_], null);
});
return (_LT_read_and_copy_asset_file.cljs$core$IFn$_invoke$arity$3 ? _LT_read_and_copy_asset_file.cljs$core$IFn$_invoke$arity$3(G__84039,G__84040,G__84041) : _LT_read_and_copy_asset_file.call(null,G__84039,G__84040,G__84041));
})());
}));
}));
}));
}));
}));
})),(function (error){
var G__84043 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"msg","msg",-1386103444),(""+"Import failed to read and copy "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)))+" with error:\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(error.message)),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"error","error",-978969032),error], null)], null);
return (notify_user.cljs$core$IFn$_invoke$arity$1 ? notify_user.cljs$core$IFn$_invoke$arity$1(G__84043) : notify_user.call(null,G__84043));
}));
});
if(cljs.core.seq(asset_files)){
return logseq.graph_parser.exporter._LT_safe_async_loop(read_and_copy_asset,asset_files,notify_user);
} else {
return null;
}
});
/**
 * Inserts favorited pages as uuids into a new favorite page
 */
logseq.graph_parser.exporter.insert_favorites = (function logseq$graph_parser$exporter$insert_favorites(repo_or_conn,favorited_ids,page_id){
var tx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,favorite_id){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,(function (){var G__84044 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(logseq.db.build_favorite_tx.cljs$core$IFn$_invoke$arity$1 ? logseq.db.build_favorite_tx.cljs$core$IFn$_invoke$arity$1(favorite_id) : logseq.db.build_favorite_tx.call(null,favorite_id)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),(datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 ? datascript.core.squuid.cljs$core$IFn$_invoke$arity$0() : datascript.core.squuid.call(null)),new cljs.core.Keyword("db","id","db/id",-1388397098),(function (){var or__5142__auto__ = (function (){var G__84045 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.last(acc));
if((G__84045 == null)){
return null;
} else {
return (G__84045 - (1));
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (-1);
}
})(),new cljs.core.Keyword("block","order","block/order",-1429282437),logseq.db.common.order.gen_key.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword("block","parent","block/parent",-918309064),page_id,new cljs.core.Keyword("block","page","block/page",822314108),page_id], null)], 0));
return (logseq.db.sqlite.util.block_with_timestamps.cljs$core$IFn$_invoke$arity$1 ? logseq.db.sqlite.util.block_with_timestamps.cljs$core$IFn$_invoke$arity$1(G__84044) : logseq.db.sqlite.util.block_with_timestamps.call(null,G__84044));
})());
}),cljs.core.PersistentVector.EMPTY,favorited_ids);
return logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(repo_or_conn,tx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.graph-parser.exporter","imported-data?","logseq.graph-parser.exporter/imported-data?",1785602641),true,new cljs.core.Keyword("logseq.graph-parser.exporter","new-graph?","logseq.graph-parser.exporter/new-graph?",-2038807565),true], null));
});
/**
 * OG :favorites may be a bare name or a [[page]] ref.
 */
logseq.graph_parser.exporter.favorite_config_page_name = (function logseq$graph_parser$exporter$favorite_config_page_name(page_name){
if(typeof page_name === 'string'){
return logseq.common.util.page_ref.get_page_name_BANG_(clojure.string.trim(page_name));
} else {
return page_name;
}
});
/**
 * Resolve a flattened namespace page by walking parent/child after import.
 * OG `foo/bar` is stored as page `bar` whose parent is `foo`.
 */
logseq.graph_parser.exporter.find_namespace_page = (function logseq$graph_parser$exporter$find_namespace_page(db,page_name){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(page_name,logseq.common.util.namespace.namespace_char);
if(cljs.core.next(parts)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (parent,part){
if(cljs.core.truth_(parent)){
return cljs.core.some((function (child){
if(cljs.core.truth_((function (){var and__5140__auto__ = logseq.graph_parser.exporter.page_entity_QMARK_(child);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(logseq.common.util.page_name_sanity_lc(part),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(child));
} else {
return and__5140__auto__;
}
})())){
return child;
} else {
return null;
}
}),new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(parent));
} else {
return null;
}
}),logseq.db.get_page(db,cljs.core.first(parts)),cljs.core.rest(parts));
} else {
return null;
}
});
logseq.graph_parser.exporter.get_imported_favorite_page = (function logseq$graph_parser$exporter$get_imported_favorite_page(db,page_name){
var page_name_SINGLEQUOTE_ = logseq.graph_parser.exporter.favorite_config_page_name(page_name);
var or__5142__auto__ = logseq.db.get_page(db,page_name_SINGLEQUOTE_);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(((typeof page_name_SINGLEQUOTE_ === 'string') && (logseq.common.util.namespace.namespace_page_QMARK_(page_name_SINGLEQUOTE_)))){
return logseq.graph_parser.exporter.find_namespace_page(db,page_name_SINGLEQUOTE_);
} else {
return null;
}
}
});
logseq.graph_parser.exporter.export_favorites_from_config_edn = (function logseq$graph_parser$exporter$export_favorites_from_config_edn(conn,repo,config,p__84046){
var map__84047 = p__84046;
var map__84047__$1 = cljs.core.__destructure_map(map__84047);
var log_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__84047__$1,new cljs.core.Keyword(null,"log-fn","log-fn",-2003241282),cljs.core.prn);
var temp__5825__auto__ = cljs.core.seq(new cljs.core.Keyword(null,"favorites","favorites",1740773480).cljs$core$IFn$_invoke$arity$1(config));
if(temp__5825__auto__){
var favorites = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._promise((function (){var temp__5823__auto__ = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (page_name){
var G__84048 = logseq.graph_parser.exporter.get_imported_favorite_page(cljs.core.deref(conn),page_name);
if((G__84048 == null)){
return null;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(G__84048);
}
}),favorites));
if(temp__5823__auto__){
var favorited_ids = temp__5823__auto__;
var page_entity = logseq.db.get_page(cljs.core.deref(conn),logseq.common.config.favorites_page_name);
return logseq.graph_parser.exporter.insert_favorites(repo,favorited_ids,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page_entity));
} else {
var G__84049 = new cljs.core.Keyword(null,"no-favorites-found","no-favorites-found",943306035);
var G__84050 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"favorites","favorites",1740773480),favorites], null);
return (log_fn.cljs$core$IFn$_invoke$arity$2 ? log_fn.cljs$core$IFn$_invoke$arity$2(G__84049,G__84050) : log_fn.call(null,G__84049,G__84050));
}
})());
}));
} else {
return null;
}
});
/**
 * Builds options for use with export-doc-files and assets
 */
logseq.graph_parser.exporter.build_doc_options = (function logseq$graph_parser$exporter$build_doc_options(config,options){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extract-options","extract-options",-572164844),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"date-formatter","date-formatter",-223324709),logseq.graph_parser.exporter.get_date_formatter(config),new cljs.core.Keyword(null,"user-config","user-config",-1138679827),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword("property-pages","excludelist","property-pages/excludelist",1710831097),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property-pages","enabled?","property-pages/enabled?",-48336645)], 0)),new cljs.core.Keyword(null,"filename-format","filename-format",-1193264412),(function (){var or__5142__auto__ = new cljs.core.Keyword("file","name-format","file/name-format",1975432459).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"legacy","legacy",1434943289);
}
})(),new cljs.core.Keyword(null,"verbose","verbose",1694226060),new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(options)], null),new cljs.core.Keyword(null,"user-config","user-config",-1138679827),config,new cljs.core.Keyword(null,"user-options","user-options",-84696866),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remove-inline-tags?","remove-inline-tags?",-1198387053),true,new cljs.core.Keyword(null,"convert-all-tags?","convert-all-tags?",-1869310481),true], null),new cljs.core.Keyword(null,"user-options","user-options",-84696866).cljs$core$IFn$_invoke$arity$1(options)], 0)),new cljs.core.Keyword(null,"import-state","import-state",1493794865),logseq.graph_parser.exporter.new_import_state(),new cljs.core.Keyword(null,"macros","macros",811339431),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"macros","macros",811339431).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"macros","macros",811339431).cljs$core$IFn$_invoke$arity$1(config);
}
})()], null),cljs.core.select_keys(options,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-ui-state","set-ui-state",1991288653),new cljs.core.Keyword(null,"<export-file","<export-file",-1771768011),new cljs.core.Keyword(null,"notify-user","notify-user",-268964208),new cljs.core.Keyword(null,"<get-file-stat","<get-file-stat",1615437898),new cljs.core.Keyword(null,"on-tx-report","on-tx-report",854171101),new cljs.core.Keyword(null,"import-watchdog","import-watchdog",1052593713),new cljs.core.Keyword(null,"log-fn","log-fn",-2003241282),new cljs.core.Keyword(null,"import-timeout-ms","import-timeout-ms",-442107688),new cljs.core.Keyword(null,"import-heartbeat-ms","import-heartbeat-ms",-2107140529)], null))], 0));
});
logseq.graph_parser.exporter.move_top_parent_pages_to_library = (function logseq$graph_parser$exporter$move_top_parent_pages_to_library(conn,repo_or_conn){
var db = cljs.core.deref(conn);
var library_page = (logseq.db.get_built_in_page.cljs$core$IFn$_invoke$arity$2 ? logseq.db.get_built_in_page.cljs$core$IFn$_invoke$arity$2(db,logseq.common.config.library_page_name) : logseq.db.get_built_in_page.call(null,db,logseq.common.config.library_page_name));
var library_id = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(library_page);
var top_parent_pages = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__84051_SHARP_){
var or__5142__auto__ = (logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__84051_SHARP_) : logseq.db.class_QMARK_.call(null,p1__84051_SHARP_));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (logseq.db.property_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.property_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__84051_SHARP_) : logseq.db.property_QMARK_.call(null,p1__84051_SHARP_));
}
}),logseq.common.util.distinct_by(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (d){
var child = (function (){var G__84052 = db;
var G__84053 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(d);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__84052,G__84053) : datascript.core.entity.call(null,G__84052,G__84053));
})();
var parent = (function (){var G__84054 = db;
var G__84055 = new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(d);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__84054,G__84055) : datascript.core.entity.call(null,G__84054,G__84055));
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = (new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(parent) == null);
if(and__5140__auto__){
var and__5140__auto____$1 = logseq.graph_parser.exporter.page_entity_QMARK_(child);
if(cljs.core.truth_(and__5140__auto____$1)){
return logseq.graph_parser.exporter.page_entity_QMARK_(parent);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return parent;
} else {
return null;
}
}),datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","parent","block/parent",-918309064)))));
var tx_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (parent){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),library_id], null),new cljs.core.Keyword("block","order","block/order",-1429282437),logseq.db.common.order.gen_key.cljs$core$IFn$_invoke$arity$0()], null);
}),top_parent_pages);
return logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(repo_or_conn,tx_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.graph-parser.exporter","imported-data?","logseq.graph-parser.exporter/imported-data?",1785602641),true], null));
});
logseq.graph_parser.exporter.partition_graph_files = (function logseq$graph_parser$exporter$partition_graph_files(_STAR_files,config,rpath_key){
var files = logseq.common.config.remove_hidden_files(_STAR_files,config,rpath_key);
var normalized_rpath = (function (f){
var G__84060 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(f,rpath_key);
if((G__84060 == null)){
return null;
} else {
return logseq.common.path.path_normalize(G__84060);
}
});
var logseq_file_QMARK_ = (function (p1__84056_SHARP_){
return clojure.string.starts_with_QMARK_(normalized_rpath(p1__84056_SHARP_),"logseq/");
});
var asset_file_QMARK_ = (function (p1__84057_SHARP_){
return clojure.string.starts_with_QMARK_(normalized_rpath(p1__84057_SHARP_),"assets/");
});
var doc_files = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__84059_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["org",null,"md",null,"markdown",null,"edn",null], null), null),logseq.common.path.file_ext(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__84059_SHARP_)));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__84058_SHARP_){
return ((logseq_file_QMARK_(p1__84058_SHARP_)) || (asset_file_QMARK_(p1__84058_SHARP_)));
}),files));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"files","files",-472457450),files,new cljs.core.Keyword(null,"logseq-files","logseq-files",-2075363413),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(logseq_file_QMARK_,files),new cljs.core.Keyword(null,"asset-files","asset-files",-1563400401),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(asset_file_QMARK_,files),new cljs.core.Keyword(null,"doc-files","doc-files",-1143623675),doc_files], null);
});
logseq.graph_parser.exporter._LT_export_file_graph_steps = (function logseq$graph_parser$exporter$_LT_export_file_graph_steps(repo_or_conn,conn,config,p__84061,_LT_read_file,_LT_read_and_copy_asset,doc_options,options,log_fn){
var map__84062 = p__84061;
var map__84062__$1 = cljs.core.__destructure_map(map__84062);
var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84062__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var logseq_files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84062__$1,new cljs.core.Keyword(null,"logseq-files","logseq-files",-2075363413));
var asset_files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84062__$1,new cljs.core.Keyword(null,"asset-files","asset-files",-1563400401));
var doc_files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84062__$1,new cljs.core.Keyword(null,"doc-files","doc-files",-1143623675));
var set_ui_state = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"set-ui-state","set-ui-state",1991288653).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.constantly(null);
}
})();
if(cljs.core.truth_(log_fn)){
var G__84063_84577 = "Importing";
var G__84064_84578 = cljs.core.count(doc_files);
var G__84065_84579 = "files ...";
(log_fn.cljs$core$IFn$_invoke$arity$3 ? log_fn.cljs$core$IFn$_invoke$arity$3(G__84063_84577,G__84064_84578,G__84065_84579) : log_fn.call(null,G__84063_84577,G__84064_84578,G__84065_84579));
} else {
}

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.import_progress_BANG_(doc_options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"logseq-files","logseq-files",-2075363413)], null))),(function (___27434__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.export_logseq_files(repo_or_conn,logseq_files,_LT_read_file,clojure.set.rename_keys(cljs.core.select_keys(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notify-user","notify-user",-268964208),new cljs.core.Keyword(null,"<save-logseq-file","<save-logseq-file",289148715)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"<save-logseq-file","<save-logseq-file",289148715),new cljs.core.Keyword(null,"<save-file","<save-file",1293534470)], null)))),(function (___27434__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.import_progress_BANG_(doc_options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"assets","assets",210278279)], null))),(function (___27434__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.read_and_copy_asset_files(asset_files,_LT_read_and_copy_asset,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(options,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notify-user","notify-user",-268964208),new cljs.core.Keyword(null,"set-ui-state","set-ui-state",1991288653),new cljs.core.Keyword(null,"rpath-key","rpath-key",1154764950),new cljs.core.Keyword(null,"import-watchdog","import-watchdog",1052593713)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assets","assets",210278279),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(doc_options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"import-state","import-state",1493794865),new cljs.core.Keyword(null,"assets","assets",210278279)], null))], null)], 0)))),(function (___27434__auto____$3){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.import_progress_BANG_(doc_options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"doc-files","doc-files",-1143623675),new cljs.core.Keyword(null,"total-files","total-files",-833744967),cljs.core.count(doc_files)], null))),(function (___27434__auto____$4){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.export_doc_files(conn,doc_files,_LT_read_file,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doc_options,new cljs.core.Keyword(null,"finalize-imported-graph?","finalize-imported-graph?",-854748808),false))),(function (___27434__auto____$5){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.finalize.set_finishing_import_ui_BANG_(set_ui_state)),(function (___27434__auto____$6){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.import_progress_BANG_(doc_options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"favorites","favorites",1740773480)], null))),(function (___27434__auto____$7){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.export_favorites_from_config_edn(conn,repo_or_conn,config,(function (){var G__84066 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(log_fn)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__84066,new cljs.core.Keyword(null,"log-fn","log-fn",-2003241282),log_fn);
} else {
return G__84066;
}
})())),(function (___27434__auto____$8){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.import_progress_BANG_(doc_options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"class-properties","class-properties",1351279702)], null))),(function (___27434__auto____$9){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.export_class_properties(conn,repo_or_conn)),(function (___27434__auto____$10){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.import_progress_BANG_(doc_options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"move-to-library","move-to-library",-707370941)], null))),(function (___27434__auto____$11){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.move_top_parent_pages_to_library(conn,repo_or_conn)),(function (___27434__auto____$12){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.import_progress_BANG_(doc_options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"finalize-imported-graph","finalize-imported-graph",1564413341)], null))),(function (___27434__auto____$13){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var finalize_start = (cljs.core.truth_(log_fn)?logseq.graph_parser.import_profile.now_ms():null);
logseq.graph_parser.exporter.finalize.finalize_imported_graph_BANG_(conn);

return logseq.graph_parser.exporter.log_phase_ms_BANG_(log_fn,new cljs.core.Keyword(null,"finalize-imported-graph","finalize-imported-graph",1564413341),finalize_start,cljs.core.PersistentArrayMap.EMPTY);
})()),(function (___27434__auto____$14){
return promesa.protocols._promise(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"import-state","import-state",1493794865),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"import-state","import-state",1493794865).cljs$core$IFn$_invoke$arity$1(doc_options),new cljs.core.Keyword(null,"assets","assets",210278279)),new cljs.core.Keyword(null,"files","files",-472457450),files], null));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
});
/**
 * Exports a file graph into a DB graph. Files is a seq of maps with :path.
 *   Options include :set-ui-state, :notify-user, :log-fn, :rpath-key, :<read-file,
 *   :<get-file-stat, :default-config, :user-options, :<save-config-file,
 *   :<save-logseq-file, :<read-and-copy-asset, :import-timeout-ms, and
 *   :import-heartbeat-ms. See export-doc-files for additional options.
 */
logseq.graph_parser.exporter.export_file_graph = (function logseq$graph_parser$exporter$export_file_graph(repo_or_conn,conn,config_file,_STAR_files,p__84067){
var map__84068 = p__84067;
var map__84068__$1 = cljs.core.__destructure_map(map__84068);
var options = map__84068__$1;
var _LT_read_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84068__$1,new cljs.core.Keyword(null,"<read-file","<read-file",-785932647));
var _LT_read_and_copy_asset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84068__$1,new cljs.core.Keyword(null,"<read-and-copy-asset","<read-and-copy-asset",378527692));
var rpath_key = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__84068__$1,new cljs.core.Keyword(null,"rpath-key","rpath-key",1154764950),new cljs.core.Keyword(null,"path","path",-188191168));
var log_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84068__$1,new cljs.core.Keyword(null,"log-fn","log-fn",-2003241282));
var import_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84068__$1,new cljs.core.Keyword(null,"import-timeout-ms","import-timeout-ms",-442107688));
var import_heartbeat_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84068__$1,new cljs.core.Keyword(null,"import-heartbeat-ms","import-heartbeat-ms",-2107140529));
var verbose = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__84068__$1,new cljs.core.Keyword(null,"verbose","verbose",1694226060),false);
var log_fn__$1 = (function (){var or__5142__auto__ = log_fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.truth_(verbose)){
return cljs.core.println;
} else {
return null;
}
}
})();
var watchdog = (cljs.core.truth_(import_timeout_ms)?logseq.graph_parser.import_profile.new_watchdog(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),import_timeout_ms,new cljs.core.Keyword(null,"heartbeat-ms","heartbeat-ms",-1083597683),import_heartbeat_ms,new cljs.core.Keyword(null,"log-fn","log-fn",-2003241282),log_fn__$1], null)):null);
var options__$1 = (function (){var G__84069 = options;
var G__84069__$1 = (cljs.core.truth_(log_fn__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__84069,new cljs.core.Keyword(null,"log-fn","log-fn",-2003241282),log_fn__$1):G__84069);
if(cljs.core.truth_(watchdog)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__84069__$1,new cljs.core.Keyword(null,"import-watchdog","import-watchdog",1052593713),watchdog);
} else {
return G__84069__$1;
}
})();
cljs.core.reset_BANG_(logseq.graph_parser.block._STAR_export_to_db_graph_QMARK_,true);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(conn,cljs.core.assoc,new cljs.core.Keyword(null,"skip-store?","skip-store?",-484019625),true);

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.import_profile.with_import_watchdog.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.import_progress_BANG_(options__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"read-config","read-config",1200917324)], null))),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"set-ui-state","set-ui-state",1991288653).cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.constantly(null);
}
})()),(function (set_ui_state){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__84070 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","importing-state","graph/importing-state",34918559),new cljs.core.Keyword(null,"step","step",1288888124)], null);
var G__84071 = new cljs.core.Keyword(null,"config","config",994861415);
return (set_ui_state.cljs$core$IFn$_invoke$arity$2 ? set_ui_state.cljs$core$IFn$_invoke$arity$2(G__84070,G__84071) : set_ui_state.call(null,G__84070,G__84071));
})()),(function (___$1){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__84072 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","importing-state","graph/importing-state",34918559),new cljs.core.Keyword(null,"label","label",1718410804)], null);
var G__84073 = new cljs.core.Keyword("import","loading","import/loading",-1917645552);
return (set_ui_state.cljs$core$IFn$_invoke$arity$2 ? set_ui_state.cljs$core$IFn$_invoke$arity$2(G__84072,G__84073) : set_ui_state.call(null,G__84072,G__84073));
})()),(function (___$2){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__84074 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","importing-state","graph/importing-state",34918559),new cljs.core.Keyword(null,"current-page","current-page",-101294180)], null);
var G__84075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config_file,rpath_key);
return (set_ui_state.cljs$core$IFn$_invoke$arity$2 ? set_ui_state.cljs$core$IFn$_invoke$arity$2(G__84074,G__84075) : set_ui_state.call(null,G__84074,G__84075));
})()),(function (___$3){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.export_config_file(repo_or_conn,config_file,_LT_read_file,clojure.set.rename_keys(cljs.core.select_keys(options__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notify-user","notify-user",-268964208),new cljs.core.Keyword(null,"default-config","default-config",-695396957),new cljs.core.Keyword(null,"<save-config-file","<save-config-file",1332025175)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"<save-config-file","<save-config-file",1332025175),new cljs.core.Keyword(null,"<save-file","<save-file",1293534470)], null)))),(function (config){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.partition_graph_files(_STAR_files,config,rpath_key)),(function (partitioned){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.graph_parser.exporter.build_doc_options(config,options__$1)),(function (doc_options){
return promesa.protocols._promise(logseq.graph_parser.exporter._LT_export_file_graph_steps(repo_or_conn,conn,config,partitioned,_LT_read_file,_LT_read_and_copy_asset,doc_options,options__$1,log_fn__$1));
}));
}));
}));
}));
}));
}));
}));
}));
})),watchdog),(function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.dissoc,new cljs.core.Keyword(null,"skip-store?","skip-store?",-484019625));

if(cljs.core.truth_(datascript.storage.storage(cljs.core.deref(conn)))){
var G__84076_84594 = cljs.core.deref(conn);
(datascript.core.store.cljs$core$IFn$_invoke$arity$1 ? datascript.core.store.cljs$core$IFn$_invoke$arity$1(G__84076_84594) : datascript.core.store.call(null,G__84076_84594));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"atom","atom",-397043653).cljs$core$IFn$_invoke$arity$1(conn),cljs.core.assoc,new cljs.core.Keyword(null,"tx-tail","tx-tail",1116487556),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"db-last-stored","db-last-stored",-2068760702),cljs.core.deref(conn)], 0));
} else {
}

return cljs.core.reset_BANG_(logseq.graph_parser.block._STAR_export_to_db_graph_QMARK_,false);
})),(function (e){
cljs.core.reset_BANG_(logseq.graph_parser.block._STAR_export_to_db_graph_QMARK_,false);

console.error(e);

var G__84078_84595 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"msg","msg",-1386103444),(""+"Import has unexpected error:\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e], null)], null);
var fexpr__84077_84596 = new cljs.core.Keyword(null,"notify-user","notify-user",-268964208).cljs$core$IFn$_invoke$arity$1(options__$1);
(fexpr__84077_84596.cljs$core$IFn$_invoke$arity$1 ? fexpr__84077_84596.cljs$core$IFn$_invoke$arity$1(G__84078_84595) : fexpr__84077_84596.call(null,G__84078_84595));

throw e;
}));
});

//# sourceMappingURL=logseq.graph_parser.exporter.js.map
