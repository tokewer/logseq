goog.provide('logseq.graph_parser.extract');
logseq.graph_parser.extract.mldoc_support_QMARK_ = (function logseq$graph_parser$extract$mldoc_support_QMARK_(format_SINGLEQUOTE_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),null,new cljs.core.Keyword(null,"org","org",1495985),null,new cljs.core.Keyword(null,"md","md",707286655),null], null), null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(format_SINGLEQUOTE_));
});
logseq.graph_parser.extract.path__GT_file_name = (function logseq$graph_parser$extract$path__GT_file_name(path){
if(clojure.string.includes_QMARK_(path,"/")){
return cljs.core.last(logseq.common.util.split_last("/",path));
} else {
return path;
}
});
logseq.graph_parser.extract.path__GT_file_body = (function logseq$graph_parser$extract$path__GT_file_body(path){
var temp__5825__auto__ = logseq.graph_parser.extract.path__GT_file_name(path);
if(cljs.core.truth_(temp__5825__auto__)){
var file_name = temp__5825__auto__;
if(clojure.string.includes_QMARK_(file_name,".")){
return cljs.core.first(logseq.common.util.split_last(".",file_name));
} else {
return file_name;
}
} else {
return null;
}
});
logseq.graph_parser.extract.safe_url_decode = (function logseq$graph_parser$extract$safe_url_decode(string){
if(clojure.string.includes_QMARK_(string,"%")){
var G__82900 = string;
var G__82900__$1 = (((G__82900 == null))?null:(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__82900)));
if((G__82900__$1 == null)){
return null;
} else {
return logseq.common.util.safe_decode_uri_component(G__82900__$1);
}
} else {
return string;
}
});
/**
 * Decode namespace underlines to slashed;
 * If continuous underlines, only decode at start;
 * Having empty namespace is invalid.
 */
logseq.graph_parser.extract.decode_namespace_underlines = (function logseq$graph_parser$extract$decode_namespace_underlines(string){
return clojure.string.replace(string,"___","/");
});
/**
 * Remove those empty namespaces from title to make it a valid page name.
 */
logseq.graph_parser.extract.make_valid_namespaces = (function logseq$graph_parser$extract$make_valid_namespaces(title){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,clojure.string.split.cljs$core$IFn$_invoke$arity$2(title,"/")));
});
/**
 * Parsing file name under the new file name format
 * Avoid calling directly
 */
logseq.graph_parser.extract.tri_lb_title_parsing = (function logseq$graph_parser$extract$tri_lb_title_parsing(file_name){
var G__82917 = file_name;
var G__82917__$1 = (((G__82917 == null))?null:logseq.graph_parser.extract.decode_namespace_underlines(G__82917));
var G__82917__$2 = (((G__82917__$1 == null))?null:clojure.string.replace(G__82917__$1,logseq.common.util.url_encoded_pattern,logseq.graph_parser.extract.safe_url_decode));
if((G__82917__$2 == null)){
return null;
} else {
return logseq.graph_parser.extract.make_valid_namespaces(G__82917__$2);
}
});
logseq.graph_parser.extract.legacy_title_parsing = (function logseq$graph_parser$extract$legacy_title_parsing(file_name_body){
var title = clojure.string.replace(file_name_body,".","/");
var or__5142__auto__ = logseq.common.util.safe_decode_uri_component(title);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return title;
}
});
/**
 * Convert file name in the given file name format to page title
 */
logseq.graph_parser.extract.title_parsing = (function logseq$graph_parser$extract$title_parsing(file_name_body,filename_format){
var G__82927 = filename_format;
var G__82927__$1 = (((G__82927 instanceof cljs.core.Keyword))?G__82927.fqn:null);
switch (G__82927__$1) {
case "triple-lowbar":
return logseq.graph_parser.extract.tri_lb_title_parsing(file_name_body);

break;
default:
return logseq.graph_parser.extract.legacy_title_parsing(file_name_body);

}
});
/**
 * Get page name with overridden order of
 *   `title::` property
 *   file name parsing
 *   first block content
 * note: `page-name-order` is deprecated on Apr. 2021
 * uri-encoded? - since paths on mobile are uri-encoded, need to decode them first
 * filename-format - the format used to parse file name
 * 
 */
logseq.graph_parser.extract.get_page_name = (function logseq$graph_parser$extract$get_page_name(file_path,ast,uri_encoded_QMARK_,filename_format){
var ast__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ast);
var file = (cljs.core.truth_(uri_encoded_QMARK_)?decodeURI(file_path):file_path);
if(clojure.string.starts_with_QMARK_(file,"pages/contents.")){
return "Contents";
} else {
var first_block = cljs.core.last(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.block.heading_block_QMARK_,ast__$1)));
var property_name = cljs.core.some((function (ast_node){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Property_Drawer",null,"Properties",null], null), null),cljs.core.first(ast_node))){
var properties_ast = cljs.core.second(ast_node);
var properties = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.keyword,clojure.string.lower_case,cljs.core.first),properties_ast),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,properties_ast));
return new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(properties);
} else {
return null;
}
}),ast__$1);
var first_block_name = (function (){var title = cljs.core.last(cljs.core.first(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(first_block)));
var and__5140__auto__ = first_block;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = typeof title === 'string';
if(and__5140__auto____$1){
return title;
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
var file_name = (function (){var temp__5825__auto__ = logseq.graph_parser.extract.path__GT_file_body(file);
if(cljs.core.truth_(temp__5825__auto__)){
var result = temp__5825__auto__;
if(logseq.graph_parser.extract.mldoc_support_QMARK_(logseq.common.util.get_file_ext(file))){
return logseq.graph_parser.extract.title_parsing(result,filename_format);
} else {
return result;
}
} else {
return null;
}
})();
var or__5142__auto__ = property_name;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = file_name;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return first_block_name;
}
}
}
});
logseq.graph_parser.extract.extract_page_alias_and_tags = (function logseq$graph_parser$extract$extract_page_alias_and_tags(page_m,page_name,properties){
var alias = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(properties);
var alias_SINGLEQUOTE_ = ((cljs.core.coll_QMARK_(alias))?alias:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias))], null));
var aliases = (function (){var and__5140__auto__ = alias_SINGLEQUOTE_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__82936_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_name,logseq.common.util.page_name_sanity_lc(p1__82936_SHARP_))) || (clojure.string.blank_QMARK_(p1__82936_SHARP_)));
}),alias_SINGLEQUOTE_));
} else {
return and__5140__auto__;
}
})();
var aliases_SINGLEQUOTE_ = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (alias__$1){
var page_name__$1 = logseq.common.util.page_name_sanity_lc(alias__$1);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name__$1,new cljs.core.Keyword("block","title","block/title",710445684),alias__$1], null);
}),aliases);
var result = (function (){var G__82946 = page_m;
var G__82946__$1 = ((cljs.core.seq(aliases_SINGLEQUOTE_))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82946,new cljs.core.Keyword("block","alias","block/alias",-2112644699),aliases_SINGLEQUOTE_):G__82946);
if(cljs.core.truth_(new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(properties))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82946__$1,new cljs.core.Keyword("block","tags","block/tags",1814948340),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(page_m),(function (){var tags = new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(properties);
var tags__$1 = ((cljs.core.coll_QMARK_(tags))?tags:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tags))], null));
var tags__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,tags__$1);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (tag){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","name","block/name",1619760316),logseq.common.util.page_name_sanity_lc(tag),new cljs.core.Keyword("block","title","block/title",710445684),tag], null);
}),tags__$2);
})()));
} else {
return G__82946__$1;
}
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword("block","properties","block/properties",708347145),(function (p1__82937_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,p1__82937_SHARP_,logseq.graph_parser.property.editable_linkable_built_in_properties);
}));
});
logseq.graph_parser.extract.build_page_map = (function logseq$graph_parser$extract$build_page_map(properties,invalid_properties,properties_text_values,file,page,page_name,p__82949){
var map__82950 = p__82949;
var map__82950__$1 = cljs.core.__destructure_map(map__82950);
var date_formatter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82950__$1,new cljs.core.Keyword(null,"date-formatter","date-formatter",-223324709));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82950__$1,new cljs.core.Keyword(null,"db","db",993250759));
var from_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82950__$1,new cljs.core.Keyword(null,"from-page","from-page",75165656));
var skip_journal_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82950__$1,new cljs.core.Keyword(null,"skip-journal?","skip-journal?",-2111577079));
var vec__82951 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove)((function (p__82956){
var vec__82957 = p__82956;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82957,(0),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82957,(1),null);
return logseq.graph_parser.property.valid_property_name_QMARK_((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)));
}),properties);
var _STAR_valid_properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82951,(0),null);
var _STAR_invalid_properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82951,(1),null);
var valid_properties = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,_STAR_valid_properties);
var invalid_properties__$1 = cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(invalid_properties,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.first),_STAR_invalid_properties)));
var page_m = logseq.graph_parser.extract.extract_page_alias_and_tags(logseq.common.util.remove_nils_non_nested(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(logseq.graph_parser.block.page_name__GT_map.cljs$core$IFn$_invoke$arity$variadic(page,db,true,date_formatter,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"from-page","from-page",75165656),from_page,new cljs.core.Keyword(null,"skip-journal?","skip-journal?",-2111577079),skip_journal_QMARK_], 0)),new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("file","path","file/path",-191335748),logseq.common.util.path_normalize(file)], null))),page_name,properties);
var G__82965 = page_m;
var G__82965__$1 = ((cljs.core.seq(valid_properties))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__82965,new cljs.core.Keyword("block","properties","block/properties",708347145),valid_properties,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708),cljs.core.select_keys(properties_text_values,cljs.core.keys(valid_properties))], 0)):G__82965);
if(cljs.core.seq(invalid_properties__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82965__$1,new cljs.core.Keyword("block","invalid-properties","block/invalid-properties",1509592872),invalid_properties__$1);
} else {
return G__82965__$1;
}
});
/**
 * If block-ids are provided and match the number of blocks, attach them to blocks
 * If block-ids are provided but don't match the number of blocks, WARN and ignore
 * If block-ids are not provided (nil), just ignore
 */
logseq.graph_parser.extract.attach_block_ids_if_match = (function logseq$graph_parser$extract$attach_block_ids_if_match(block_ids,blocks){
var or__5142__auto__ = (cljs.core.truth_(block_ids)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(block_ids),cljs.core.count(blocks)))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (block_id,block){
if((!((block_id == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.uuid(block_id));
} else {
return block;
}
}),block_ids,blocks):((goog.debug.LOGGING_ENABLED)?lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("logseq.graph-parser.extract",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("gp-extract","attach-block-ids-not-match","gp-extract/attach-block-ids-not-match",951510152),"attach-block-ids-if-match: block-ids provided, but doesn't match the number of blocks, ignoring",new cljs.core.Keyword(null,"line","line",212345235),190], null)),null):null)):null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return blocks;
}
});
logseq.graph_parser.extract.build_pages_aux = (function logseq$graph_parser$extract$build_pages_aux(db,page_map,ref_pages,date_formatter,format){
var namespace_pages = (function (){var page = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page_map);
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not(new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(page_map));
if(and__5140__auto__){
return (logseq.graph_parser.text.namespace_page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.graph_parser.text.namespace_page_QMARK_.cljs$core$IFn$_invoke$arity$1(page) : logseq.graph_parser.text.namespace_page_QMARK_.call(null,page));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (page__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(logseq.graph_parser.block.page_name__GT_map(page__$1,db,true,date_formatter),new cljs.core.Keyword("block","format","block/format",-1212045901),format);
}),logseq.common.util.split_namespace_pages(page));
} else {
return null;
}
})();
var pages = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_map], null),cljs.core.deref(ref_pages),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([namespace_pages], 0)))));
var pages__$1 = logseq.common.util.distinct_by(new cljs.core.Keyword("block","name","block/name",1619760316),pages);
var pages__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,pages__$1);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (page){
var page_id = (function (){var temp__5823__auto__ = new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(temp__5823__auto__)){
var journal_day = temp__5823__auto__;
return logseq.common.uuid.gen_uuid.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"journal-page-uuid","journal-page-uuid",1859101489),journal_day);
} else {
var or__5142__auto__ = (cljs.core.truth_(db)?new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(logseq.db.get_page(db,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page))):null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 ? datascript.core.squuid.cljs$core$IFn$_invoke$arity$0() : datascript.core.squuid.call(null));
}
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(page,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),page_id);
}),pages__$2);
});
/**
 * uri-encoded? - if is true, apply URL decode on the file path
 * options -
 *   :resolve-uuid-fn - Optional fn which is called to resolve uuids of each block. Enables diff-merge
 *     (2 ways diff) based uuid resolution upon external editing.
 *     returns a list of the uuids, given the receiving ast, or nil if not able to resolve.
 *     Implemented in reset-file-handler/diff-merge-uuids-2ways for IoC
 *     Called in gp-extract/extract as AST is being parsed and properties are extracted there
 */
logseq.graph_parser.extract.extract_pages_and_blocks = (function logseq$graph_parser$extract$extract_pages_and_blocks(format,ast,properties,file,content,p__82997){
var map__82998 = p__82997;
var map__82998__$1 = cljs.core.__destructure_map(map__82998);
var options = map__82998__$1;
var date_formatter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82998__$1,new cljs.core.Keyword(null,"date-formatter","date-formatter",-223324709));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82998__$1,new cljs.core.Keyword(null,"db","db",993250759));
var filename_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82998__$1,new cljs.core.Keyword(null,"filename-format","filename-format",-1193264412));
var resolve_uuid_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82998__$1,new cljs.core.Keyword(null,"resolve-uuid-fn","resolve-uuid-fn",-1951054525),cljs.core.constantly(null));
var skip_journal_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82998__$1,new cljs.core.Keyword(null,"skip-journal?","skip-journal?",-2111577079));
if(cljs.core.truth_(db)){
} else {
throw (new Error((""+"Assert failed: "+"Datascript DB is required"+"\n"+"db")));
}

try{var page = logseq.graph_parser.extract.get_page_name(file,ast,false,filename_format);
var vec__83013 = (cljs.core.truth_(skip_journal_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [page,logseq.common.util.page_name_sanity_lc(page),null], null):logseq.graph_parser.block.convert_page_if_journal(page,date_formatter));
var page__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83013,(0),null);
var page_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83013,(1),null);
var _journal_day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83013,(2),null);
var options_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"page-name","page-name",974981762),page_name);
var override_uuids = (resolve_uuid_fn.cljs$core$IFn$_invoke$arity$4 ? resolve_uuid_fn.cljs$core$IFn$_invoke$arity$4(format,ast,content,options_SINGLEQUOTE_) : resolve_uuid_fn.call(null,format,ast,content,options_SINGLEQUOTE_));
var _STAR_extracted_block_ids = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var blocks = cljs.core.vec(logseq.graph_parser.block.with_parent_and_order(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__82992_SHARP_){
return logseq.graph_parser.block.fix_block_id_if_duplicated_BANG_(db,page_name,_STAR_extracted_block_ids,p1__82992_SHARP_);
}),logseq.graph_parser.extract.attach_block_ids_if_match(override_uuids,logseq.graph_parser.block.extract_blocks(ast,content,format,options_SINGLEQUOTE_)))));
var ref_pages = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var blocks__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","type","block/type",1537584409).cljs$core$IFn$_invoke$arity$1(block),"macro")){
return block;
} else {
var block_ref_pages = cljs.core.seq(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(block));
if(block_ref_pages){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ref_pages,clojure.set.union,cljs.core.set(block_ref_pages));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword(null,"ref-pages","ref-pages",3688243)),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","refs","block/refs",-1214495349),block_ref_pages,new cljs.core.Keyword("block","format","block/format",-1212045901),format], 0));
}
}),blocks);
var vec__83016 = (cljs.core.truth_(new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks__$1)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks__$1)),new cljs.core.Keyword("block","invalid-properties","block/invalid-properties",1509592872).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks__$1)),new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks__$1))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [properties,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null));
var properties__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83016,(0),null);
var invalid_properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83016,(1),null);
var properties_text_values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83016,(2),null);
var page_map = logseq.graph_parser.extract.build_page_map(properties__$1,invalid_properties,properties_text_values,file,page__$1,page_name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options_SINGLEQUOTE_,new cljs.core.Keyword(null,"from-page","from-page",75165656),page__$1));
var pages = logseq.graph_parser.extract.build_pages_aux(db,page_map,ref_pages,date_formatter,format);
var blocks__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(b,new cljs.core.Keyword("block.temp","ast-title","block.temp/ast-title",-940352067),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.temp","ast-body","block.temp/ast-body",-464258035),new cljs.core.Keyword("block","level","block/level",1182509971),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Keyword("block","meta","block/meta",1064819153)], 0));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,blocks__$1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pages,blocks__$2], null);
}catch (e83008){var e = e83008;
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("logseq.graph-parser.extract",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exception","exception",-335277064),e,new cljs.core.Keyword(null,"line","line",212345235),275], null)),e);
} else {
return null;
}
}});
/**
 * Extracts pages, blocks and ast from given file.
 * 
 *   `:parse-outline-only?` is for file-to-db import of outline-shaped markdown
 *   (headings, properties, refs, tags). Render, editor, and import conversions
 *   that walk Src/Macro/Quote/Drawer AST must leave it unset so mldoc full-parses.
 */
logseq.graph_parser.extract.extract = (function logseq$graph_parser$extract$extract(file_path,content,p__83040){
var map__83043 = p__83040;
var map__83043__$1 = cljs.core.__destructure_map(map__83043);
var options = map__83043__$1;
var user_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83043__$1,new cljs.core.Keyword(null,"user-config","user-config",-1138679827));
var verbose = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83043__$1,new cljs.core.Keyword(null,"verbose","verbose",1694226060),true);
var parse_outline_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83043__$1,new cljs.core.Keyword(null,"parse-outline-only?","parse-outline-only?",399017842));
if(clojure.string.blank_QMARK_(content)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var format = logseq.common.util.get_format(file_path);
var _ = (cljs.core.truth_(verbose)?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Parsing start: ",file_path], 0)):null);
var ast = logseq.graph_parser.mldoc.__GT_edn.cljs$core$IFn$_invoke$arity$2(content,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parse_outline_only?","parse_outline_only?",-731229637),cljs.core.boolean$(parse_outline_only_QMARK_)], null)));
if(cljs.core.truth_(verbose)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Parsing finished: ",file_path], 0));
} else {
}

var first_block = cljs.core.ffirst(ast);
var properties = (function (){var properties = (function (){var and__5140__auto__ = logseq.graph_parser.property.properties_ast_QMARK_(first_block);
if(and__5140__auto__){
return clojure.walk.keywordize_keys(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__83051){
var vec__83052 = p__83051;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83052,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83052,(1),null);
var mldoc_ast = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83052,(2),null);
var k = (((x instanceof cljs.core.Keyword))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),(1)):x);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.lower_case(k),logseq.graph_parser.text.parse_property(k,y,mldoc_ast,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(user_config,new cljs.core.Keyword(null,"format","format",-1306924766),format))], null);
}),cljs.core.last(first_block))));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = properties;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.seq(properties);
} else {
return and__5140__auto__;
}
})())){
if(cljs.core.truth_(new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(properties))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(properties,new cljs.core.Keyword(null,"filters","filters",974726919),(function (v){
return clojure.string.replace((function (){var or__5142__auto__ = v;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})(),"\\","");
}));
} else {
return properties;
}
} else {
return null;
}
})();
var vec__83047 = logseq.graph_parser.extract.extract_pages_and_blocks(format,ast,properties,file_path,content,options);
var pages = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83047,(0),null);
var blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83047,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pages","pages",-285406513),pages,new cljs.core.Keyword(null,"blocks","blocks",-610462153),blocks,new cljs.core.Keyword(null,"ast","ast",-860334068),ast], null);
}
});
logseq.graph_parser.extract.with_block_uuid = (function logseq$graph_parser$extract$with_block_uuid(pages){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (page){
var temp__5823__auto__ = new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(temp__5823__auto__)){
var journal_day = temp__5823__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(page,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),logseq.common.uuid.gen_uuid.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"journal-page-uuid","journal-page-uuid",1859101489),journal_day));
} else {
var G__83059 = page;
if((new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__83059,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),(datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 ? datascript.core.squuid.cljs$core$IFn$_invoke$arity$0() : datascript.core.squuid.call(null)));
} else {
return G__83059;
}
}
}),logseq.common.util.distinct_by(new cljs.core.Keyword("block","name","block/name",1619760316),pages));
});
logseq.graph_parser.extract.with_ref_pages = (function logseq$graph_parser$extract$with_ref_pages(pages,blocks){
var ref_pages = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("block","refs","block/refs",-1214495349),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([blocks], 0)));
return logseq.graph_parser.extract.with_block_uuid(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,cljs.core.merge),cljs.core.vals(cljs.core.group_by(new cljs.core.Keyword("block","name","block/name",1619760316),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pages,ref_pages)))));
});

//# sourceMappingURL=logseq.graph_parser.extract.js.map
