goog.provide('logseq.graph_parser.mldoc');
goog.scope(function(){
  logseq.graph_parser.mldoc.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$mldoc$index=shadow.js.require("module$node_modules$mldoc$index", {});
if((typeof logseq !== 'undefined') && (typeof logseq.graph_parser !== 'undefined') && (typeof logseq.graph_parser.mldoc !== 'undefined') && (typeof logseq.graph_parser.mldoc.parseJson !== 'undefined')){
} else {
logseq.graph_parser.mldoc.parseJson = logseq.graph_parser.mldoc.goog$module$goog$object.get(module$node_modules$mldoc$index.Mldoc,"parseJson");
}
if((typeof logseq !== 'undefined') && (typeof logseq.graph_parser !== 'undefined') && (typeof logseq.graph_parser.mldoc !== 'undefined') && (typeof logseq.graph_parser.mldoc.parseInlineJson !== 'undefined')){
} else {
logseq.graph_parser.mldoc.parseInlineJson = logseq.graph_parser.mldoc.goog$module$goog$object.get(module$node_modules$mldoc$index.Mldoc,"parseInlineJson");
}
if((typeof logseq !== 'undefined') && (typeof logseq.graph_parser !== 'undefined') && (typeof logseq.graph_parser.mldoc !== 'undefined') && (typeof logseq.graph_parser.mldoc.astExportMarkdown !== 'undefined')){
} else {
logseq.graph_parser.mldoc.astExportMarkdown = logseq.graph_parser.mldoc.goog$module$goog$object.get(module$node_modules$mldoc$index.Mldoc,"astExportMarkdown");
}
if((typeof logseq !== 'undefined') && (typeof logseq.graph_parser !== 'undefined') && (typeof logseq.graph_parser.mldoc !== 'undefined') && (typeof logseq.graph_parser.mldoc.getReferences !== 'undefined')){
} else {
logseq.graph_parser.mldoc.getReferences = logseq.graph_parser.mldoc.goog$module$goog$object.get(module$node_modules$mldoc$index.Mldoc,"getReferences");
}
logseq.graph_parser.mldoc.default_references = JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"embed_blocks","embed_blocks",785928846),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"embed_pages","embed_pages",94877387),cljs.core.PersistentVector.EMPTY], null)));
logseq.graph_parser.mldoc.convert_export_md_remove_options = (function logseq$graph_parser$mldoc$convert_export_md_remove_options(opts){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (opt){
var G__51566 = opt;
var G__51566__$1 = (((G__51566 instanceof cljs.core.Keyword))?G__51566.fqn:null);
switch (G__51566__$1) {
case "page-ref":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Page_ref"], null);

break;
case "emphasis":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Emphasis"], null);

break;
default:
return cljs.core.PersistentVector.EMPTY;

}
}),opts));
});
logseq.graph_parser.mldoc.parse_json = (function logseq$graph_parser$mldoc$parse_json(content,config){
return (logseq.graph_parser.mldoc.parseJson.cljs$core$IFn$_invoke$arity$2 ? logseq.graph_parser.mldoc.parseJson.cljs$core$IFn$_invoke$arity$2(content,config) : logseq.graph_parser.mldoc.parseJson.call(null,content,config));
});
logseq.graph_parser.mldoc.inline_parse_json = (function logseq$graph_parser$mldoc$inline_parse_json(text,config){
return (logseq.graph_parser.mldoc.parseInlineJson.cljs$core$IFn$_invoke$arity$2 ? logseq.graph_parser.mldoc.parseInlineJson.cljs$core$IFn$_invoke$arity$2(text,config) : logseq.graph_parser.mldoc.parseInlineJson.call(null,text,config));
});
logseq.graph_parser.mldoc.get_references = (function logseq$graph_parser$mldoc$get_references(text,config){
if(clojure.string.blank_QMARK_(text)){
return null;
} else {
return logseq.common.util.json__GT_clj((logseq.graph_parser.mldoc.getReferences.cljs$core$IFn$_invoke$arity$2 ? logseq.graph_parser.mldoc.getReferences.cljs$core$IFn$_invoke$arity$2(text,config) : logseq.graph_parser.mldoc.getReferences.call(null,text,config)));
}
});
logseq.graph_parser.mldoc.ast_export_markdown = (function logseq$graph_parser$mldoc$ast_export_markdown(ast,config,references){
var G__51567 = ast;
var G__51568 = config;
var G__51569 = (function (){var or__5142__auto__ = references;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.graph_parser.mldoc.default_references;
}
})();
return (logseq.graph_parser.mldoc.astExportMarkdown.cljs$core$IFn$_invoke$arity$3 ? logseq.graph_parser.mldoc.astExportMarkdown.cljs$core$IFn$_invoke$arity$3(G__51567,G__51568,G__51569) : logseq.graph_parser.mldoc.astExportMarkdown.call(null,G__51567,G__51568,G__51569));
});
logseq.graph_parser.mldoc.default_config_map = (function logseq$graph_parser$mldoc$default_config_map(var_args){
var G__51572 = arguments.length;
switch (G__51572) {
case 1:
return logseq.graph_parser.mldoc.default_config_map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return logseq.graph_parser.mldoc.default_config_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.graph_parser.mldoc.default_config_map.cljs$core$IFn$_invoke$arity$1 = (function (format){
return logseq.graph_parser.mldoc.default_config_map.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"export-heading-to-list?","export-heading-to-list?",-596132321),false], null));
}));

(logseq.graph_parser.mldoc.default_config_map.cljs$core$IFn$_invoke$arity$2 = (function (format,p__51573){
var map__51574 = p__51573;
var map__51574__$1 = cljs.core.__destructure_map(map__51574);
var export_heading_to_list_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51574__$1,new cljs.core.Keyword(null,"export-heading-to-list?","export-heading-to-list?",-596132321));
var export_keep_properties_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51574__$1,new cljs.core.Keyword(null,"export-keep-properties?","export-keep-properties?",1001383866));
var export_md_indent_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51574__$1,new cljs.core.Keyword(null,"export-md-indent-style","export-md-indent-style",481813710));
var export_md_remove_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51574__$1,new cljs.core.Keyword(null,"export-md-remove-options","export-md-remove-options",-1015252352));
var parse_outline_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51574__$1,new cljs.core.Keyword(null,"parse_outline_only?","parse_outline_only?",-731229637));
var format__$1 = clojure.string.capitalize(cljs.core.name((function (){var or__5142__auto__ = format;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"markdown","markdown",1227225089);
}
})()));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51570_SHARP_){
return (!((cljs.core.second(p1__51570_SHARP_) == null)));
}),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"toc","toc",2050089251),new cljs.core.Keyword(null,"export_md_indent_style","export_md_indent_style",-323704308),new cljs.core.Keyword(null,"exporting_keep_properties","exporting_keep_properties",-955323347),new cljs.core.Keyword(null,"parse_outline_only","parse_outline_only",-1224318063),new cljs.core.Keyword(null,"export_md_remove_options","export_md_remove_options",-1267687277),new cljs.core.Keyword(null,"heading_to_list","heading_to_list",-525406087),new cljs.core.Keyword(null,"heading_number","heading_number",1357313628),new cljs.core.Keyword(null,"keep_line_break","keep_line_break",-1954057059)],[format__$1,false,export_md_indent_style,export_keep_properties_QMARK_,(function (){var or__5142__auto__ = parse_outline_only_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return false;
}
})(),logseq.graph_parser.mldoc.convert_export_md_remove_options(export_md_remove_options),(function (){var or__5142__auto__ = export_heading_to_list_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return false;
}
})(),false,true])));
}));

(logseq.graph_parser.mldoc.default_config_map.cljs$lang$maxFixedArity = 2);

logseq.graph_parser.mldoc.default_config = (function logseq$graph_parser$mldoc$default_config(var_args){
var G__51576 = arguments.length;
switch (G__51576) {
case 1:
return logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1 = (function (format){
return logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"export-heading-to-list?","export-heading-to-list?",-596132321),false], null));
}));

(logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$2 = (function (format,opts){
return JSON.stringify(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.mldoc.default_config_map.cljs$core$IFn$_invoke$arity$2(format,opts)));
}));

(logseq.graph_parser.mldoc.default_config.cljs$lang$maxFixedArity = 2);

/**
 * Remove the indentation spaces from the content. Only for markdown.
 * level - ast level + 1 (2 for the first level, 3 for the second level, etc., as the non-first line of multi-line block has 2 more space
 *         Ex.
 *            - level 1 multiline block first line
 *              level 1 multiline block second line
 *            	- level 2 multiline block first line
 *            	  level 2 multiline block second line
 * remove-first-line? - apply the indentation removal to the first line or not
 */
logseq.graph_parser.mldoc.remove_indentation_spaces = (function logseq$graph_parser$mldoc$remove_indentation_spaces(s,level,remove_first_line_QMARK_){
var lines = clojure.string.split_lines(s);
var vec__51577 = lines;
var seq__51578 = cljs.core.seq(vec__51577);
var first__51579 = cljs.core.first(seq__51578);
var seq__51578__$1 = cljs.core.next(seq__51578);
var f = first__51579;
var r = seq__51578__$1;
var body = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (line){
if(clojure.string.blank_QMARK_(logseq.common.util.safe_subs.cljs$core$IFn$_invoke$arity$3(line,(0),level))){
return logseq.common.util.safe_subs.cljs$core$IFn$_invoke$arity$2(line,level);
} else {
return clojure.string.triml(line);
}
}),(cljs.core.truth_(remove_first_line_QMARK_)?lines:r));
var content = (cljs.core.truth_(remove_first_line_QMARK_)?body:cljs.core.cons(f,body));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",content);
});
logseq.graph_parser.mldoc.update_src_full_content = (function logseq$graph_parser$mldoc$update_src_full_content(ast,content){
var content__$1 = logseq.graph_parser.utf8.encode(content);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51586){
var vec__51587 = p__51586;
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51587,(0),null);
var pos_meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51587,(1),null);
if(((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Src",cljs.core.first(block))))){
var map__51590 = pos_meta;
var map__51590__$1 = cljs.core.__destructure_map(map__51590);
var start_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51590__$1,new cljs.core.Keyword(null,"start_pos","start_pos",272375959));
var end_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51590__$1,new cljs.core.Keyword(null,"end_pos","end_pos",-1418940));
var content__$2 = logseq.graph_parser.utf8.substring.cljs$core$IFn$_invoke$arity$3(content__$1,start_pos,end_pos);
var spaces = cljs.core.re_find(/^[\t ]+/,cljs.core.first(clojure.string.split_lines(content__$2)));
var content__$3 = (cljs.core.truth_(spaces)?logseq.graph_parser.mldoc.remove_indentation_spaces(content__$2,cljs.core.count(spaces),true):content__$2);
var block__$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Src",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.second(block),new cljs.core.Keyword(null,"full_content","full_content",-1214517830),content__$3)], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block__$1,pos_meta], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block,pos_meta], null);
}
}),ast);
});
logseq.graph_parser.mldoc.inline_ast_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 24, ["Inline_Source_Block",null,"Export_Snippet",null,"Nested_link",null,"Footnote_Reference",null,"Link",null,"Email",null,"Latex_Fragment",null,"Hard_Break_Line",null,"Break_Line",null,"Spaces",null,"Cookie",null,"Subscript",null,"Superscript",null,"Inline_Html",null,"Timestamp",null,"Inline_Hiccup",null,"Entity",null,"Target",null,"Code",null,"Radio_Target",null,"Macro",null,"Emphasis",null,"Plain",null,"Verbatim",null], null), null);
logseq.graph_parser.mldoc.inline_coll_QMARK_ = (function logseq$graph_parser$mldoc$inline_coll_QMARK_(x){
return ((cljs.core.vector_QMARK_(x)) && (((cljs.core.seq(x)) && (cljs.core.every_QMARK_((function (p1__51591_SHARP_){
return ((cljs.core.vector_QMARK_(p1__51591_SHARP_)) && (((typeof cljs.core.first(p1__51591_SHARP_) === 'string') && (cljs.core.contains_QMARK_(logseq.graph_parser.mldoc.inline_ast_types,cljs.core.first(p1__51591_SHARP_))))));
}),x)))));
});
logseq.graph_parser.mldoc.inline_ast__GT_source = (function logseq$graph_parser$mldoc$inline_ast__GT_source(p__51603){
var vec__51604 = p__51603;
var typ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51604,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51604,(1),null);
var G__51607 = typ;
switch (G__51607) {
case "Plain":
return content;

break;
case "Spaces":
return content;

break;
case "Link":
return new cljs.core.Keyword(null,"full_text","full_text",1634289075).cljs$core$IFn$_invoke$arity$1(content);

break;
case "Nested_link":
return new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(content);

break;
case "Superscript":
return (""+"^{"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.mldoc.inline_ast__GT_source,content)))+"}");

break;
case "Subscript":
return (""+"_{"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.mldoc.inline_ast__GT_source,content)))+"}");

break;
default:
return null;

}
});
logseq.graph_parser.mldoc.starts_with_at_QMARK_ = (function logseq$graph_parser$mldoc$starts_with_at_QMARK_(s,prefix,idx){
var end = (idx + cljs.core.count(prefix));
return (((end <= cljs.core.count(s))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prefix,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,idx,end))));
});
logseq.graph_parser.mldoc.unclosed_script_markup_QMARK_ = (function logseq$graph_parser$mldoc$unclosed_script_markup_QMARK_(s){
var idx = (0);
var depth = (0);
while(true){
if((idx < cljs.core.count(s))){
if(((logseq.graph_parser.mldoc.starts_with_at_QMARK_(s,"^{",idx)) || (logseq.graph_parser.mldoc.starts_with_at_QMARK_(s,"_{",idx)))){
var G__51958 = (idx + (2));
var G__51959 = (depth + (1));
idx = G__51958;
depth = G__51959;
continue;
} else {
if((((depth > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("}",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,idx))))){
var G__51960 = (idx + (1));
var G__51961 = (depth - (1));
idx = G__51960;
depth = G__51961;
continue;
} else {
var G__51962 = (idx + (1));
var G__51963 = depth;
idx = G__51962;
depth = G__51963;
continue;

}
}
} else {
return (depth > (0));
}
break;
}
});
logseq.graph_parser.mldoc.split_macro_arguments = (function logseq$graph_parser$mldoc$split_macro_arguments(s){
if(clojure.string.blank_QMARK_(s)){
return cljs.core.PersistentVector.EMPTY;
} else {
var idx = (0);
var start = (0);
var page_ref_depth = (0);
var script_depth = (0);
var quoted_QMARK_ = false;
var escaped_QMARK_ = false;
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if((idx < cljs.core.count(s))){
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,idx);
if(escaped_QMARK_){
var G__51964 = (idx + (1));
var G__51965 = start;
var G__51966 = page_ref_depth;
var G__51967 = script_depth;
var G__51968 = quoted_QMARK_;
var G__51969 = false;
var G__51970 = result;
idx = G__51964;
start = G__51965;
page_ref_depth = G__51966;
script_depth = G__51967;
quoted_QMARK_ = G__51968;
escaped_QMARK_ = G__51969;
result = G__51970;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\\",c)){
var G__51971 = (idx + (1));
var G__51972 = start;
var G__51973 = page_ref_depth;
var G__51974 = script_depth;
var G__51975 = quoted_QMARK_;
var G__51976 = true;
var G__51977 = result;
idx = G__51971;
start = G__51972;
page_ref_depth = G__51973;
script_depth = G__51974;
quoted_QMARK_ = G__51975;
escaped_QMARK_ = G__51976;
result = G__51977;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",c)){
var G__51978 = (idx + (1));
var G__51979 = start;
var G__51980 = page_ref_depth;
var G__51981 = script_depth;
var G__51982 = cljs.core.not(quoted_QMARK_);
var G__51983 = false;
var G__51984 = result;
idx = G__51978;
start = G__51979;
page_ref_depth = G__51980;
script_depth = G__51981;
quoted_QMARK_ = G__51982;
escaped_QMARK_ = G__51983;
result = G__51984;
continue;
} else {
if(cljs.core.truth_(quoted_QMARK_)){
var G__51985 = (idx + (1));
var G__51986 = start;
var G__51987 = page_ref_depth;
var G__51988 = script_depth;
var G__51989 = quoted_QMARK_;
var G__51990 = false;
var G__51991 = result;
idx = G__51985;
start = G__51986;
page_ref_depth = G__51987;
script_depth = G__51988;
quoted_QMARK_ = G__51989;
escaped_QMARK_ = G__51990;
result = G__51991;
continue;
} else {
if(logseq.graph_parser.mldoc.starts_with_at_QMARK_(s,"[[",idx)){
var G__51992 = (idx + (2));
var G__51993 = start;
var G__51994 = (page_ref_depth + (1));
var G__51995 = script_depth;
var G__51996 = quoted_QMARK_;
var G__51997 = false;
var G__51998 = result;
idx = G__51992;
start = G__51993;
page_ref_depth = G__51994;
script_depth = G__51995;
quoted_QMARK_ = G__51996;
escaped_QMARK_ = G__51997;
result = G__51998;
continue;
} else {
if((((page_ref_depth > (0))) && (logseq.graph_parser.mldoc.starts_with_at_QMARK_(s,"]]",idx)))){
var G__52004 = (idx + (2));
var G__52005 = start;
var G__52006 = (page_ref_depth - (1));
var G__52007 = script_depth;
var G__52008 = quoted_QMARK_;
var G__52009 = false;
var G__52010 = result;
idx = G__52004;
start = G__52005;
page_ref_depth = G__52006;
script_depth = G__52007;
quoted_QMARK_ = G__52008;
escaped_QMARK_ = G__52009;
result = G__52010;
continue;
} else {
if(((logseq.graph_parser.mldoc.starts_with_at_QMARK_(s,"^{",idx)) || (logseq.graph_parser.mldoc.starts_with_at_QMARK_(s,"_{",idx)))){
var G__52011 = (idx + (2));
var G__52012 = start;
var G__52013 = page_ref_depth;
var G__52014 = (script_depth + (1));
var G__52015 = quoted_QMARK_;
var G__52016 = false;
var G__52017 = result;
idx = G__52011;
start = G__52012;
page_ref_depth = G__52013;
script_depth = G__52014;
quoted_QMARK_ = G__52015;
escaped_QMARK_ = G__52016;
result = G__52017;
continue;
} else {
if((((script_depth > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("}",c)))){
var G__52018 = (idx + (1));
var G__52019 = start;
var G__52020 = page_ref_depth;
var G__52021 = (script_depth - (1));
var G__52022 = quoted_QMARK_;
var G__52023 = false;
var G__52024 = result;
idx = G__52018;
start = G__52019;
page_ref_depth = G__52020;
script_depth = G__52021;
quoted_QMARK_ = G__52022;
escaped_QMARK_ = G__52023;
result = G__52024;
continue;
} else {
if((((page_ref_depth === (0))) && ((((script_depth === (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",c)))))){
var G__52025 = (idx + (1));
var G__52026 = (idx + (1));
var G__52027 = page_ref_depth;
var G__52028 = script_depth;
var G__52029 = quoted_QMARK_;
var G__52030 = false;
var G__52031 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,clojure.string.trim(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,start,idx)));
idx = G__52025;
start = G__52026;
page_ref_depth = G__52027;
script_depth = G__52028;
quoted_QMARK_ = G__52029;
escaped_QMARK_ = G__52030;
result = G__52031;
continue;
} else {
var G__52032 = (idx + (1));
var G__52033 = start;
var G__52034 = page_ref_depth;
var G__52035 = script_depth;
var G__52036 = quoted_QMARK_;
var G__52037 = false;
var G__52038 = result;
idx = G__52032;
start = G__52033;
page_ref_depth = G__52034;
script_depth = G__52035;
quoted_QMARK_ = G__52036;
escaped_QMARK_ = G__52037;
result = G__52038;
continue;

}
}
}
}
}
}
}
}
}
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,clojure.string.trim(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,start)));
}
break;
}
}
});
logseq.graph_parser.mldoc.macro_source__GT_ast = (function logseq$graph_parser$mldoc$macro_source__GT_ast(s){
if(((clojure.string.starts_with_QMARK_(s,"{{")) && (clojure.string.ends_with_QMARK_(s,"}}")))){
var content = clojure.string.triml(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),(cljs.core.count(s) - (2))));
var vec__51713 = cljs.core.re_matches(/([^\s]+)(?:\s+([\s\S]*))?/,content);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51713,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51713,(1),null);
var arguments$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51713,(2),null);
if(cljs.core.truth_(name)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Macro",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"arguments","arguments",-1182834456),logseq.graph_parser.mldoc.split_macro_arguments(arguments$)], null)], null);
} else {
return null;
}
} else {
return null;
}
});
logseq.graph_parser.mldoc.collect_macro_source = (function logseq$graph_parser$mldoc$collect_macro_source(items,start){
var remaining = items;
var offset = start;
var fragments = cljs.core.PersistentVector.EMPTY;
var scanned = (0);
while(true){
var temp__5823__auto__ = cljs.core.seq(remaining);
if(temp__5823__auto__){
var vec__51731 = temp__5823__auto__;
var seq__51732 = cljs.core.seq(vec__51731);
var first__51733 = cljs.core.first(seq__51732);
var seq__51732__$1 = cljs.core.next(seq__51732);
var item = first__51733;
var more = seq__51732__$1;
var vec__51734 = item;
var typ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51734,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51734,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Plain",typ)){
var temp__5823__auto____$1 = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(content,"}}",offset);
if(cljs.core.truth_(temp__5823__auto____$1)){
var idx = temp__5823__auto____$1;
var end = (idx + (2));
var source = clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fragments,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,offset,end)));
var temp__5823__auto____$2 = logseq.graph_parser.mldoc.macro_source__GT_ast(source);
if(cljs.core.truth_(temp__5823__auto____$2)){
var macro = temp__5823__auto____$2;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"macro","macro",-867863404),macro,new cljs.core.Keyword(null,"remaining","remaining",-138926777),remaining,new cljs.core.Keyword(null,"offset","offset",296498311),end], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip","skip",602715391),cljs.core.max.cljs$core$IFn$_invoke$arity$2((1),scanned)], null);
}
} else {
var G__52046 = more;
var G__52047 = (0);
var G__52048 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fragments,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(content,offset));
var G__52049 = (scanned + (1));
remaining = G__52046;
offset = G__52047;
fragments = G__52048;
scanned = G__52049;
continue;
}
} else {
var temp__5823__auto____$1 = logseq.graph_parser.mldoc.inline_ast__GT_source(item);
if(cljs.core.truth_(temp__5823__auto____$1)){
var item_source = temp__5823__auto____$1;
var G__52050 = more;
var G__52051 = (0);
var G__52052 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fragments,item_source);
var G__52053 = (scanned + (1));
remaining = G__52050;
offset = G__52051;
fragments = G__52052;
scanned = G__52053;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip","skip",602715391),scanned], null);
}

}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip","skip",602715391),scanned], null);
}
break;
}
});
logseq.graph_parser.mldoc.close_script_markup_in_macro = (function logseq$graph_parser$mldoc$close_script_markup_in_macro(macro){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(macro,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"arguments","arguments",-1182834456)], null),(function (arguments$){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(arguments$,(cljs.core.count(arguments$) - (1)),cljs.core.str,"}");
}));
});
logseq.graph_parser.mldoc.recover_inline_macros = (function logseq$graph_parser$mldoc$recover_inline_macros(inline_list){
var remaining = inline_list;
var offset = (0);
var result = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5823__auto__ = cljs.core.seq(remaining);
if(temp__5823__auto__){
var vec__51758 = temp__5823__auto__;
var seq__51759 = cljs.core.seq(vec__51758);
var first__51760 = cljs.core.first(seq__51759);
var seq__51759__$1 = cljs.core.next(seq__51759);
var item = first__51760;
var more = seq__51759__$1;
var vec__51761 = item;
var typ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51761,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51761,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Plain",typ)){
var temp__5823__auto____$1 = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(content,"{{",offset);
if(cljs.core.truth_(temp__5823__auto____$1)){
var idx = temp__5823__auto____$1;
var map__51764 = logseq.graph_parser.mldoc.collect_macro_source(remaining,idx);
var map__51764__$1 = cljs.core.__destructure_map(map__51764);
var scan = map__51764__$1;
var macro = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51764__$1,new cljs.core.Keyword(null,"macro","macro",-867863404));
var skip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51764__$1,new cljs.core.Keyword(null,"skip","skip",602715391));
if(cljs.core.truth_(macro)){
var prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,offset,idx);
var G__52059 = new cljs.core.Keyword(null,"remaining","remaining",-138926777).cljs$core$IFn$_invoke$arity$1(scan);
var G__52060 = new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(scan);
var G__52061 = (function (){var G__51765 = result;
var G__51765__$1 = (((!(clojure.string.blank_QMARK_(prefix))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__51765,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Plain",prefix], null)):G__51765);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__51765__$1,macro);

})();
remaining = G__52059;
offset = G__52060;
result = G__52061;
continue;
} else {
var G__52062 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(skip,remaining);
var G__52063 = (0);
var G__52064 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,(((offset === (0)))?item:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Plain",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(content,offset)], null))),cljs.core.take.cljs$core$IFn$_invoke$arity$2((skip - (1)),more));
remaining = G__52062;
offset = G__52063;
result = G__52064;
continue;
}
} else {
var suffix = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(content,offset);
var G__52069 = more;
var G__52070 = (0);
var G__52071 = (function (){var G__51778 = result;
if((((offset === (0))) || ((!(clojure.string.blank_QMARK_(suffix)))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__51778,(((offset === (0)))?item:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Plain",suffix], null)));
} else {
return G__51778;
}
})();
remaining = G__52069;
offset = G__52070;
result = G__52071;
continue;
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Macro",typ)) && (((cljs.core.seq(new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(content))) && (((logseq.graph_parser.mldoc.unclosed_script_markup_QMARK_(cljs.core.last(new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(content)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Plain",cljs.core.ffirst(more))) && (clojure.string.starts_with_QMARK_(cljs.core.second(cljs.core.first(more)),"}")))))))))){
var G__52073 = more;
var G__52074 = (1);
var G__52075 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,logseq.graph_parser.mldoc.close_script_markup_in_macro(item));
remaining = G__52073;
offset = G__52074;
result = G__52075;
continue;
} else {
var G__52076 = more;
var G__52077 = (0);
var G__52078 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,item);
remaining = G__52076;
offset = G__52077;
result = G__52078;
continue;

}
}
} else {
return result;
}
break;
}
});
logseq.graph_parser.mldoc.normalize_macro_asts = (function logseq$graph_parser$mldoc$normalize_macro_asts(ast){
return clojure.walk.postwalk((function (x){
if(logseq.graph_parser.mldoc.inline_coll_QMARK_(x)){
return logseq.graph_parser.mldoc.recover_inline_macros(x);
} else {
return x;
}
}),ast);
});
logseq.graph_parser.mldoc.macro_with_script_markup_QMARK_ = (function logseq$graph_parser$mldoc$macro_with_script_markup_QMARK_(content){
return ((clojure.string.includes_QMARK_(content,"{{")) && (((clojure.string.includes_QMARK_(content,"^{")) || (clojure.string.includes_QMARK_(content,"_{")))));
});
logseq.graph_parser.mldoc.collect_page_properties = (function logseq$graph_parser$mldoc$collect_page_properties(ast,config){
if(cljs.core.seq(ast)){
var original_ast = ast;
var directive_QMARK_ = (function (p__51875){
var vec__51876 = p__51875;
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51876,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51876,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("directive",clojure.string.lower_case(cljs.core.first(item)));
});
var grouped_ast = cljs.core.group_by(directive_QMARK_,original_ast);
var vec__51869 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.get.cljs$core$IFn$_invoke$arity$2(grouped_ast,true)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(grouped_ast,false)], null);
var properties_ast = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51869,(0),null);
var other_ast = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51869,(1),null);
var properties = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51884){
var vec__51885 = p__51884;
var _directive = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51885,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51885,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51885,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v,logseq.graph_parser.mldoc.get_references(v,config)], null);
}),properties_ast);
if(cljs.core.seq(properties)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Properties",properties], null),null], null),other_ast);
} else {
return original_ast;
}
} else {
return null;
}
});
/**
 * Gets a mldoc default config for the given format. Works for DB and file graphs
 */
logseq.graph_parser.mldoc.get_default_config = (function logseq$graph_parser$mldoc$get_default_config(repo,format){
var db_based_QMARK_ = logseq.db.sqlite.util.db_based_graph_QMARK_(repo);
return JSON.stringify(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1((function (){var G__51890 = logseq.graph_parser.mldoc.default_config_map.cljs$core$IFn$_invoke$arity$1(format);
if(cljs.core.truth_(db_based_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__51890,new cljs.core.Keyword(null,"enable_drawers","enable_drawers",741491867),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parse_marker","parse_marker",767731762),false,new cljs.core.Keyword(null,"parse_priority","parse_priority",-1503633537),false], 0));
} else {
return G__51890;
}
})()));
});
logseq.graph_parser.mldoc.__GT_edn = (function logseq$graph_parser$mldoc$__GT_edn(var_args){
var G__51892 = arguments.length;
switch (G__51892) {
case 2:
return logseq.graph_parser.mldoc.__GT_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return logseq.graph_parser.mldoc.__GT_edn.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.graph_parser.mldoc.__GT_edn.cljs$core$IFn$_invoke$arity$2 = (function (content,config){
if(typeof content === 'string'){
try{if(clojure.string.blank_QMARK_(content)){
return cljs.core.PersistentVector.EMPTY;
} else {
return logseq.graph_parser.mldoc.collect_page_properties(logseq.graph_parser.mldoc.update_src_full_content((function (){var G__51897 = logseq.common.util.json__GT_clj(logseq.graph_parser.mldoc.parse_json(content,config));
if(logseq.graph_parser.mldoc.macro_with_script_markup_QMARK_(content)){
return logseq.graph_parser.mldoc.normalize_macro_asts(G__51897);
} else {
return G__51897;
}
})(),content),config);
}
}catch (e51895){var e = e51895;
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("logseq.graph-parser.mldoc",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unexpected-error","unexpected-error",1973845951),e,new cljs.core.Keyword(null,"line","line",212345235),373], null)),null);
} else {
}

return cljs.core.PersistentVector.EMPTY;
}} else {
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("logseq.graph-parser.mldoc",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("edn","wrong-content-type","edn/wrong-content-type",-1345928079),content,new cljs.core.Keyword(null,"line","line",212345235),375], null)),null);
} else {
return null;
}
}
}));

(logseq.graph_parser.mldoc.__GT_edn.cljs$core$IFn$_invoke$arity$3 = (function (repo,content,format){
return logseq.graph_parser.mldoc.__GT_edn.cljs$core$IFn$_invoke$arity$2(content,logseq.graph_parser.mldoc.get_default_config(repo,format));
}));

(logseq.graph_parser.mldoc.__GT_edn.cljs$lang$maxFixedArity = 3);

/**
 * Wrapper around ->edn for DB graphs
 */
logseq.graph_parser.mldoc.__GT_db_edn = (function logseq$graph_parser$mldoc$__GT_db_edn(content,format){
return logseq.graph_parser.mldoc.__GT_edn.cljs$core$IFn$_invoke$arity$3("logseq_db_repo_stub",content,format);
});
logseq.graph_parser.mldoc.inline__GT_edn = (function logseq$graph_parser$mldoc$inline__GT_edn(text,config){
try{if(clojure.string.blank_QMARK_(text)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var G__51913 = logseq.common.util.json__GT_clj(logseq.graph_parser.mldoc.inline_parse_json(text,config));
if(logseq.graph_parser.mldoc.macro_with_script_markup_QMARK_(text)){
return logseq.graph_parser.mldoc.normalize_macro_asts(G__51913);
} else {
return G__51913;
}
}
}catch (e51911){var _e = e51911;
return cljs.core.PersistentVector.EMPTY;
}});
logseq.graph_parser.mldoc.ast_link_QMARK_ = (function logseq$graph_parser$mldoc$ast_link_QMARK_(p__51930){
var vec__51931 = p__51930;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51931,(0),null);
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51931,(1),null);
var vec__51936 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(link);
var ref_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51936,(0),null);
var ref_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51936,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Link",type)) && ((((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Page_ref",null,"Block_ref",null], null), null),ref_type)))) || (((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Page_ref",null], null), null),ref_type)) && (cljs.core.boolean$(logseq.common.config.local_relative_asset_QMARK_(ref_value))))))));
});
/**
 * Check whether s is a link (including page/block refs).
 */
logseq.graph_parser.mldoc.mldoc_link_QMARK_ = (function logseq$graph_parser$mldoc$mldoc_link_QMARK_(format,s){
var result = logseq.graph_parser.mldoc.inline__GT_edn(s,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format));
var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(result));
if(and__5140__auto__){
var result_SINGLEQUOTE_ = cljs.core.first(result);
return ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Nested_link",null], null), null),cljs.core.first(result_SINGLEQUOTE_))) || (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Complex",null,"Page_ref",null,"Block_ref",null], null), null),cljs.core.first(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.second(result_SINGLEQUOTE_))))));
} else {
return and__5140__auto__;
}
});
logseq.graph_parser.mldoc.block_with_title_QMARK_ = (function logseq$graph_parser$mldoc$block_with_title_QMARK_(type){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["Raw_Html",null,"Hiccup",null,"Paragraph",null,"Heading",null], null), null),type);
});

//# sourceMappingURL=logseq.graph_parser.mldoc.js.map
