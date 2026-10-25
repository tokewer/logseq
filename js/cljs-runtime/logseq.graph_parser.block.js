goog.provide('logseq.graph_parser.block');
logseq.graph_parser.block.heading_block_QMARK_ = (function logseq$graph_parser$block$heading_block_QMARK_(block){
return ((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Heading",cljs.core.first(block))));
});
logseq.graph_parser.block.get_tag = (function logseq$graph_parser$block$get_tag(block){
var temp__5825__auto__ = (function (){var and__5140__auto__ = cljs.core.vector_QMARK_(block);
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Tag",cljs.core.first(block));
if(and__5140__auto____$1){
return cljs.core.second(block);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var tag_value = temp__5825__auto__;
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__59044){
var vec__59045 = p__59044;
var elem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59045,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59045,(1),null);
var G__59048 = elem;
switch (G__59048) {
case "Plain":
return value;

break;
case "Link":
return new cljs.core.Keyword(null,"full_text","full_text",1634289075).cljs$core$IFn$_invoke$arity$1(value);

break;
case "Nested_link":
return new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(value);

break;
default:
return "";

}
}),tag_value));
} else {
return null;
}
});
/**
 * Collect visible text from mldoc inline AST, stripping Emphasis wrappers.
 * File-link labels can be Plain or nested Emphasis; page-name->map requires a string.
 */
logseq.graph_parser.block.inline_nodes__GT_plain_text = (function logseq$graph_parser$block$inline_nodes__GT_plain_text(nodes){
return cljs.core.not_empty(clojure.string.trim(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (form){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.vector_QMARK_(form);
if(and__5140__auto__){
var and__5140__auto____$1 = (function (){var G__59050 = cljs.core.first(form);
var fexpr__59049 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["Spaces",null,"Code",null,"Plain",null,"Verbatim",null], null), null);
return (fexpr__59049.cljs$core$IFn$_invoke$arity$1 ? fexpr__59049.cljs$core$IFn$_invoke$arity$1(G__59050) : fexpr__59049.call(null,G__59050));
})();
if(cljs.core.truth_(and__5140__auto____$1)){
return typeof cljs.core.second(form) === 'string';
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return cljs.core.second(form);
} else {
return null;
}
}),cljs.core.tree_seq(cljs.core.sequential_QMARK_,cljs.core.seq,nodes)))));
});
logseq.graph_parser.block.get_page_reference = (function logseq$graph_parser$block$get_page_reference(block,format){
var page = ((((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Link",cljs.core.first(block)))))?(function (){var url_type = cljs.core.first(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.second(block)));
var value = cljs.core.second(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.second(block)));
var or__5142__auto__ = (function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(url_type,"Page_ref");
if(and__5140__auto__){
var and__5140__auto____$1 = ((typeof value === 'string') && (cljs.core.not(logseq.common.config.local_relative_asset_QMARK_(value))));
if(and__5140__auto____$1){
return value;
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(url_type,"Search");
if(and__5140__auto__){
var and__5140__auto____$1 = logseq.common.util.page_ref.page_ref_QMARK_(value);
if(and__5140__auto____$1){
return (logseq.graph_parser.text.page_ref_un_brackets_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.graph_parser.text.page_ref_un_brackets_BANG_.cljs$core$IFn$_invoke$arity$1(value) : logseq.graph_parser.text.page_ref_un_brackets_BANG_.call(null,value));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = (function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(url_type,"Search");
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"org","org",1495985));
if(and__5140__auto____$1){
var and__5140__auto____$2 = cljs.core.not(logseq.common.config.local_relative_asset_QMARK_(value));
if(and__5140__auto____$2){
return value;
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
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(url_type,"File");
if(and__5140__auto__){
return logseq.graph_parser.block.inline_nodes__GT_plain_text(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.second(block)));
} else {
return and__5140__auto__;
}
}
}
}
})():((((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Nested_link",cljs.core.first(block)))))?(function (){var content = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.last(block));
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(2),(cljs.core.count(content) - (2)));
})():((((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Macro",cljs.core.first(block)))))?(function (){var map__59061 = cljs.core.second(block);
var map__59061__$1 = cljs.core.__destructure_map(map__59061);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59061__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var arguments$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59061__$1,new cljs.core.Keyword(null,"arguments","arguments",-1182834456));
var argument = clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",arguments$);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"embed")){
if(logseq.common.util.page_ref.page_ref_QMARK_(argument)){
return (logseq.graph_parser.text.page_ref_un_brackets_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.graph_parser.text.page_ref_un_brackets_BANG_.cljs$core$IFn$_invoke$arity$1(argument) : logseq.graph_parser.text.page_ref_un_brackets_BANG_.call(null,argument));
} else {
return null;
}
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"macro",new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"arguments","arguments",-1182834456),arguments$], null);
}
})():((((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Tag",cljs.core.first(block)))))?(function (){var text = logseq.graph_parser.block.get_tag(block);
return (logseq.graph_parser.text.page_ref_un_brackets_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.graph_parser.text.page_ref_un_brackets_BANG_.cljs$core$IFn$_invoke$arity$1(text) : logseq.graph_parser.text.page_ref_un_brackets_BANG_.call(null,text));
})():null
))));
if(cljs.core.truth_(page)){
var or__5142__auto__ = ((typeof page === 'string')?logseq.common.util.block_ref.get_block_ref_id(page):null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return page;
}
} else {
return null;
}
});
logseq.graph_parser.block.get_block_reference = (function logseq$graph_parser$block$get_block_reference(block){
var temp__5825__auto__ = ((((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Block_reference",cljs.core.first(block)))))?cljs.core.last(block):((((cljs.core.vector_QMARK_(block)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Link",cljs.core.first(block))) && (((cljs.core.map_QMARK_(cljs.core.second(block))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Block_ref",cljs.core.first(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.second(block)))))))))))?cljs.core.second(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.second(block))):((((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Macro",cljs.core.first(block)))))?(function (){var map__59067 = cljs.core.second(block);
var map__59067__$1 = cljs.core.__destructure_map(map__59067);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59067__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var arguments$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59067__$1,new cljs.core.Keyword(null,"arguments","arguments",-1182834456));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"embed")) && (((typeof cljs.core.first(arguments$) === 'string') && (logseq.common.util.block_ref.string_block_ref_QMARK_(cljs.core.first(arguments$))))))){
return logseq.common.util.block_ref.get_string_block_ref_id(cljs.core.first(arguments$));
} else {
return null;
}
})():((((cljs.core.vector_QMARK_(block)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Link",cljs.core.first(block))) && (cljs.core.map_QMARK_(cljs.core.second(block)))))))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("id",new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(cljs.core.second(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.second(block))))))?new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(cljs.core.second(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.second(block)))):(function (){var id = cljs.core.second(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.second(block)));
if(typeof id === 'string'){
var or__5142__auto__ = logseq.common.util.block_ref.get_block_ref_id(id);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return id;
}
} else {
return null;
}
})()):null
))));
if(cljs.core.truth_(temp__5825__auto__)){
var block_id = temp__5825__auto__;
if(cljs.core.truth_((function (){var G__59070 = block_id;
if((G__59070 == null)){
return null;
} else {
return cljs.core.parse_uuid(G__59070);
}
})())){
return block_id;
} else {
return null;
}
} else {
return null;
}
});
logseq.graph_parser.block.paragraph_block_QMARK_ = (function logseq$graph_parser$block$paragraph_block_QMARK_(block){
return ((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Paragraph",cljs.core.first(block))));
});
logseq.graph_parser.block.timestamp_block_QMARK_ = (function logseq$graph_parser$block$timestamp_block_QMARK_(block){
return ((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Timestamp",cljs.core.first(block))));
});
logseq.graph_parser.block.get_page_refs_from_property_names = (function logseq$graph_parser$block$get_page_refs_from_property_names(properties,p__59078){
var map__59079 = p__59078;
var map__59079__$1 = cljs.core.__destructure_map(map__59079);
var enabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59079__$1,new cljs.core.Keyword("property-pages","enabled?","property-pages/enabled?",-48336645));
var excludelist = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59079__$1,new cljs.core.Keyword("property-pages","excludelist","property-pages/excludelist",1710831097));
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,true,null], null), null),enabled_QMARK_)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.first)),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(clojure.string.blank_QMARK_),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,excludelist))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.name),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,logseq.graph_parser.property.editable_built_in_properties(),logseq.graph_parser.property.editable_linkable_built_in_properties),logseq.graph_parser.property.hidden_built_in_properties()))),cljs.core.distinct.cljs$core$IFn$_invoke$arity$0()], 0)),properties);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
logseq.graph_parser.block.get_page_ref_names_from_properties = (function logseq$graph_parser$block$get_page_ref_names_from_properties(properties,user_config){
var page_refs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__59084){
var vec__59085 = p__59084;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59085,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59085,(1),null);
var mldoc_ast = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59085,(2),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq(mldoc_ast))?logseq.graph_parser.text.extract_refs_from_mldoc_ast(mldoc_ast):null),((cljs.core.coll_QMARK_(v))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return ((typeof x === 'string') && ((!(clojure.string.blank_QMARK_(x)))));
}),v):null));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__59091){
var vec__59092 = p__59091;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59092,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59092,(1),null);
return cljs.core.contains_QMARK_(clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,logseq.graph_parser.property.editable_built_in_properties(),logseq.graph_parser.property.editable_linkable_built_in_properties),logseq.graph_parser.property.hidden_built_in_properties()),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k));
}),properties)], 0));
var page_refs_from_property_names = logseq.graph_parser.block.get_page_refs_from_property_names(properties,user_config);
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(page_refs,page_refs_from_property_names)));
});
logseq.graph_parser.block.extract_block_refs = (function logseq$graph_parser$block$extract_block_refs(nodes){
var ref_blocks = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
clojure.walk.postwalk((function (form){
var temp__5825__auto___59385 = logseq.graph_parser.block.get_block_reference(form);
if(cljs.core.truth_(temp__5825__auto___59385)){
var block_59386 = temp__5825__auto___59385;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ref_blocks,cljs.core.conj,block_59386);
} else {
}

return form;
}),nodes);

return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (block){
var temp__5825__auto__ = cljs.core.parse_uuid(block);
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
} else {
return null;
}
}),cljs.core.deref(ref_blocks));
});
logseq.graph_parser.block.extract_properties = (function logseq$graph_parser$block$extract_properties(properties,user_config){
if(cljs.core.seq(properties)){
var properties__$1 = cljs.core.seq(properties);
var _STAR_invalid_properties = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var properties__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__59100_SHARP_){
return (cljs.core.second(p1__59100_SHARP_) == null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__59103){
var vec__59104 = p__59103;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59104,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59104,(1),null);
var mldoc_ast = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59104,(2),null);
var k__$1 = (((((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)),(1)):k);
var k__$2 = clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.lower_case(k__$1),"/","-")," ","-"),"_","-");
if(logseq.graph_parser.property.valid_property_name_QMARK_((""+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__$2)))){
var k_SINGLEQUOTE_ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["custom-id",null,"custom_id",null], null), null),k__$2))?"id":k__$2));
var v_SINGLEQUOTE_ = logseq.graph_parser.text.parse_property(k__$2,v,mldoc_ast,user_config);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_SINGLEQUOTE_,v_SINGLEQUOTE_,mldoc_ast,v], null);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_invalid_properties,cljs.core.conj,k__$2);

return null;
}
}),properties__$1));
var page_refs = logseq.graph_parser.block.get_page_ref_names_from_properties(properties__$2,user_config);
var block_refs = logseq.graph_parser.block.extract_block_refs(properties__$2);
var properties_text_values = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__59107){
var vec__59108 = p__59107;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59108,(0),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59108,(1),null);
var _refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59108,(2),null);
var original_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59108,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,original_text], null);
}),properties__$2));
var properties__$3 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__59111){
var vec__59112 = p__59111;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59112,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59112,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59112,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}),properties__$2);
var properties_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,properties__$3);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"properties","properties",685819552),properties_SINGLEQUOTE_,new cljs.core.Keyword(null,"properties-order","properties-order",-768725444),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,properties__$3),new cljs.core.Keyword(null,"properties-text-values","properties-text-values",1110303535),properties_text_values,new cljs.core.Keyword(null,"invalid-properties","invalid-properties",1416774099),cljs.core.deref(_STAR_invalid_properties),new cljs.core.Keyword(null,"page-refs","page-refs",1204379971),page_refs,new cljs.core.Keyword(null,"block-refs","block-refs",1507119654),block_refs], null);
} else {
return null;
}
});
logseq.graph_parser.block.paragraph_timestamp_block_QMARK_ = (function logseq$graph_parser$block$paragraph_timestamp_block_QMARK_(block){
return ((logseq.graph_parser.block.paragraph_block_QMARK_(block)) && (((logseq.graph_parser.block.timestamp_block_QMARK_(cljs.core.first(cljs.core.second(block)))) || (logseq.graph_parser.block.timestamp_block_QMARK_(cljs.core.second(cljs.core.second(block)))))));
});
logseq.graph_parser.block.extract_timestamps = (function logseq$graph_parser$block$extract_timestamps(block){
var G__59120 = cljs.core.second(block);
var G__59120__$1 = (((G__59120 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.block.timestamp_block_QMARK_,G__59120));
var G__59120__$2 = (((G__59120__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,G__59120__$1));
if((G__59120__$2 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__59120__$2);
}
});
logseq.graph_parser.block.timestamp__GT_scheduled_or_deadline_value = (function logseq$graph_parser$block$timestamp__GT_scheduled_or_deadline_value(p__59128){
var map__59129 = p__59128;
var map__59129__$1 = cljs.core.__destructure_map(map__59129);
var timestamp_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59129__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59129__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var repetition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59129__$1,new cljs.core.Keyword(null,"repetition","repetition",1938392115));
var map__59131 = date;
var map__59131__$1 = cljs.core.__destructure_map(map__59131);
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59131__$1,new cljs.core.Keyword(null,"year","year",335913393));
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59131__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var day = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59131__$1,new cljs.core.Keyword(null,"day","day",-274800446));
var day__$1 = parseInt((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.util.zero_pad(month))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.util.zero_pad(day))));
if(cljs.core.truth_((function (){var or__5142__auto__ = timestamp_time;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return repetition;
}
})())){
var G__59135 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"date-int","date-int",-2147055777),day__$1], null);
var G__59135__$1 = (cljs.core.truth_(timestamp_time)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59135,new cljs.core.Keyword(null,"time","time",1385887882),timestamp_time):G__59135);
if(cljs.core.truth_(repetition)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59135__$1,new cljs.core.Keyword(null,"repetition","repetition",1938392115),repetition);
} else {
return G__59135__$1;
}
} else {
return day__$1;
}
});
logseq.graph_parser.block.timestamps__GT_scheduled_and_deadline = (function logseq$graph_parser$block$timestamps__GT_scheduled_and_deadline(timestamps){
var timestamps__$1 = cljs.core.update_keys(timestamps,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,clojure.string.lower_case));
var m = (function (){var G__59140 = cljs.core.select_keys(timestamps__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"deadline","deadline",628964572)], null));
if((G__59140 == null)){
return null;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__59141){
var vec__59143 = p__59141;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59143,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59143,(1),null);
var value = logseq.graph_parser.block.timestamp__GT_scheduled_or_deadline_value(v);
var G__59149 = k;
var G__59149__$1 = (((G__59149 instanceof cljs.core.Keyword))?G__59149.fqn:null);
switch (G__59149__$1) {
case "scheduled":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),value], null);

break;
case "deadline":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"deadline","deadline",628964572),value], null);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59149__$1))));

}
}),G__59140);
}
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,m);
});
/**
 * Convert journal file name to user' custom date format
 */
logseq.graph_parser.block.convert_page_if_journal_impl = (function logseq$graph_parser$block$convert_page_if_journal_impl(var_args){
var args__5882__auto__ = [];
var len__5876__auto___59388 = arguments.length;
var i__5877__auto___59389 = (0);
while(true){
if((i__5877__auto___59389 < len__5876__auto___59388)){
args__5882__auto__.push((arguments[i__5877__auto___59389]));

var G__59390 = (i__5877__auto___59389 + (1));
i__5877__auto___59389 = G__59390;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return logseq.graph_parser.block.convert_page_if_journal_impl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(logseq.graph_parser.block.convert_page_if_journal_impl.cljs$core$IFn$_invoke$arity$variadic = (function (original_page_name,date_formatter,p__59159){
var map__59160 = p__59159;
var map__59160__$1 = cljs.core.__destructure_map(map__59160);
var export_to_db_graph_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59160__$1,new cljs.core.Keyword(null,"export-to-db-graph?","export-to-db-graph?",2008973423));
if(cljs.core.truth_(original_page_name)){
var page_name = logseq.common.util.page_name_sanity_lc(original_page_name);
var day = (cljs.core.truth_(date_formatter)?logseq.common.util.date_time.journal_title__GT_int(page_name,(cljs.core.truth_(export_to_db_graph_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [date_formatter], null):logseq.common.util.date_time.safe_journal_title_formatters(date_formatter))):null);
if(cljs.core.truth_(day)){
var original_page_name_SINGLEQUOTE_ = logseq.common.util.date_time.int__GT_journal_title(day,date_formatter);
var default_journal_page_name = logseq.common.util.date_time.int__GT_journal_title(day,logseq.common.util.date_time.default_journal_title_formatter);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [original_page_name_SINGLEQUOTE_,logseq.common.util.page_name_sanity_lc(default_journal_page_name),day], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [original_page_name,page_name,day], null);
}
} else {
return null;
}
}));

(logseq.graph_parser.block.convert_page_if_journal_impl.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(logseq.graph_parser.block.convert_page_if_journal_impl.cljs$lang$applyTo = (function (seq59152){
var G__59153 = cljs.core.first(seq59152);
var seq59152__$1 = cljs.core.next(seq59152);
var G__59154 = cljs.core.first(seq59152__$1);
var seq59152__$2 = cljs.core.next(seq59152__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59153,G__59154,seq59152__$2);
}));

logseq.graph_parser.block.convert_page_if_journal = cljs.core.memoize(logseq.graph_parser.block.convert_page_if_journal_impl);
logseq.graph_parser.block._STAR_export_to_db_graph_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
/**
 * Similar to get-page but only for file graphs
 */
logseq.graph_parser.block.get_page = (function logseq$graph_parser$block$get_page(db,page_name){
if(cljs.core.truth_((function (){var and__5140__auto__ = db;
if(cljs.core.truth_(and__5140__auto__)){
return typeof page_name === 'string';
} else {
return and__5140__auto__;
}
})())){
var G__59165 = db;
var G__59166 = cljs.core.first(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),logseq.db.frontend.entity_util.get_pages_by_name(db,page_name))));
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59165,G__59166) : datascript.core.entity.call(null,G__59165,G__59166));
} else {
return null;
}
});
logseq.graph_parser.block.page_name_string__GT_map = (function logseq$graph_parser$block$page_name_string__GT_map(original_page_name,db,date_formatter,p__59172){
var map__59173 = p__59172;
var map__59173__$1 = cljs.core.__destructure_map(map__59173);
var with_timestamp_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59173__$1,new cljs.core.Keyword(null,"with-timestamp?","with-timestamp?",-1639768666));
var page_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59173__$1,new cljs.core.Keyword(null,"page-uuid","page-uuid",1152600915));
var from_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59173__$1,new cljs.core.Keyword(null,"from-page","from-page",75165656));
var class_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59173__$1,new cljs.core.Keyword(null,"class?","class?",385834571));
var skip_existing_page_check_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59173__$1,new cljs.core.Keyword(null,"skip-existing-page-check?","skip-existing-page-check?",1358622588));
var skip_journal_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59173__$1,new cljs.core.Keyword(null,"skip-journal?","skip-journal?",-2111577079));
var db_based_QMARK_ = logseq.db.common.entity_plus.db_based_graph_QMARK_(db);
var original_page_name__$1 = logseq.common.util.remove_boundary_slashes(original_page_name);
var vec__59174 = (cljs.core.truth_(skip_journal_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [original_page_name__$1,logseq.common.util.page_name_sanity_lc(original_page_name__$1),null], null):logseq.graph_parser.block.convert_page_if_journal(original_page_name__$1,date_formatter,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"export-to-db-graph?","export-to-db-graph?",2008973423),cljs.core.deref(logseq.graph_parser.block._STAR_export_to_db_graph_QMARK_)], null)));
var original_page_name_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59174,(0),null);
var page_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59174,(1),null);
var journal_day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59174,(2),null);
var namespace_QMARK_ = (function (){var and__5140__auto__ = (function (){var or__5142__auto__ = cljs.core.not(db_based_QMARK_);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return cljs.core.deref(logseq.graph_parser.block._STAR_export_to_db_graph_QMARK_);
}
})();
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = cljs.core.not(journal_day);
if(and__5140__auto____$1){
var and__5140__auto____$2 = (!(cljs.core.boolean$(logseq.graph_parser.text.get_nested_page_name(original_page_name_SINGLEQUOTE_))));
if(and__5140__auto____$2){
return (logseq.graph_parser.text.namespace_page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.graph_parser.text.namespace_page_QMARK_.cljs$core$IFn$_invoke$arity$1(original_page_name_SINGLEQUOTE_) : logseq.graph_parser.text.namespace_page_QMARK_.call(null,original_page_name_SINGLEQUOTE_));
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
var page_entity = (cljs.core.truth_((function (){var and__5140__auto__ = db;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(skip_existing_page_check_QMARK_);
} else {
return and__5140__auto__;
}
})())?(cljs.core.truth_(journal_day)?logseq.db.get_journal_page_by_day(db,journal_day):(cljs.core.truth_((function (){var and__5140__auto__ = class_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return db_based_QMARK_;
} else {
return and__5140__auto__;
}
})())?(function (){var G__59179 = logseq.db.page_exists_QMARK_(db,original_page_name_SINGLEQUOTE_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.class","Tag","logseq.class/Tag",-538902083),null], null), null));
var G__59179__$1 = (((G__59179 == null))?null:cljs.core.first(G__59179));
if((G__59179__$1 == null)){
return null;
} else {
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,G__59179__$1) : datascript.core.entity.call(null,db,G__59179__$1));
}
})():logseq.graph_parser.block.get_page(db,original_page_name_SINGLEQUOTE_)
)):null);
var original_page_name_SINGLEQUOTE___$1 = (function (){var or__5142__auto__ = from_page;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page_entity);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return original_page_name_SINGLEQUOTE_;
}
}
})();
var page_name_SINGLEQUOTE_ = (cljs.core.truth_((function (){var and__5140__auto__ = journal_day;
if(cljs.core.truth_(and__5140__auto__)){
return page_entity;
} else {
return and__5140__auto__;
}
})())?new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page_entity):page_name);
var page = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name_SINGLEQUOTE_,new cljs.core.Keyword("block","title","block/title",710445684),original_page_name_SINGLEQUOTE___$1], null),(cljs.core.truth_((function (){var and__5140__auto__ = original_page_name__$1;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(original_page_name__$1),clojure.string.lower_case(original_page_name_SINGLEQUOTE___$1))) && (cljs.core.not(cljs.core.deref(logseq.graph_parser.block._STAR_export_to_db_graph_QMARK_))));
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block.temp","original-page-name","block.temp/original-page-name",1371358508),original_page_name__$1], null):null),(cljs.core.truth_((function (){var and__5140__auto__ = class_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = page_entity;
if(cljs.core.truth_(and__5140__auto____$1)){
return new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(page_entity);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page_entity),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(page_entity)], null):(function (){var new_uuid_STAR_ = ((cljs.core.uuid_QMARK_(page_uuid))?page_uuid:(cljs.core.truth_(journal_day)?logseq.common.uuid.gen_uuid.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"journal-page-uuid","journal-page-uuid",1859101489),journal_day):logseq.common.uuid.gen_uuid.cljs$core$IFn$_invoke$arity$0()));
var new_uuid = (cljs.core.truth_(skip_existing_page_check_QMARK_)?new_uuid_STAR_:(function (){var or__5142__auto__ = (cljs.core.truth_(page_entity)?new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page_entity):((cljs.core.uuid_QMARK_(page_uuid))?page_uuid:null));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new_uuid_STAR_;
}
})());
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new_uuid], null);
})()),(cljs.core.truth_(namespace_QMARK_)?(function (){var namespace_SINGLEQUOTE_ = cljs.core.first(logseq.common.util.split_last("/",original_page_name__$1));
if(clojure.string.blank_QMARK_(namespace_SINGLEQUOTE_)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","namespace","block/namespace",-282500695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),clojure.string.trim(logseq.common.util.page_name_sanity_lc(namespace_SINGLEQUOTE_))], null)], null);
}
})():null),(cljs.core.truth_((function (){var and__5140__auto__ = with_timestamp_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var or__5142__auto__ = skip_existing_page_check_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.not(page_entity);
}
} else {
return and__5140__auto__;
}
})())?(function (){var current_ms = logseq.common.util.time_ms();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","created-at","block/created-at",1440015),current_ms,new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),current_ms], null);
})():null),(cljs.core.truth_(journal_day)?(function (){var G__59180 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),journal_day], null);
var G__59180__$1 = (cljs.core.truth_(db_based_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59180,new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.class","Journal","logseq.class/Journal",1979741081)], null)):G__59180);
if(cljs.core.not(db_based_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59180__$1,new cljs.core.Keyword("block","type","block/type",1537584409),"journal");
} else {
return G__59180__$1;
}
})():cljs.core.PersistentArrayMap.EMPTY)], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page,page_entity], null);
});
/**
 * This must be kept in sync with its reverse operation in logseq.db.frontend.content
 */
logseq.graph_parser.block.sanitize_hashtag_name = (function logseq$graph_parser$block$sanitize_hashtag_name(s){
return clojure.string.replace(s,"#","HashTag-");
});
/**
 * Support DB or file graphs because of exporter
 */
logseq.graph_parser.block.page_entity_QMARK_ = (function logseq$graph_parser$block$page_entity_QMARK_(entity){
var or__5142__auto__ = logseq.db.frontend.entity_util.page_QMARK_(entity);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["page",null,"journal",null], null), null),new cljs.core.Keyword("block","type","block/type",1537584409).cljs$core$IFn$_invoke$arity$1(entity));
}
});
/**
 * Create a page's map structure given a original page name (string).
 * map as input is supported for legacy compatibility.
 * `with-timestamp?`: assign timestampes to the map structure.
 *  Useful when creating new pages from references or namespaces,
 *  as there's no chance to introduce timestamps via editing in page
 * `skip-existing-page-check?`: if true, allows pages to have the same name
 */
logseq.graph_parser.block.page_name__GT_map = (function logseq$graph_parser$block$page_name__GT_map(var_args){
var args__5882__auto__ = [];
var len__5876__auto___59397 = arguments.length;
var i__5877__auto___59398 = (0);
while(true){
if((i__5877__auto___59398 < len__5876__auto___59397)){
args__5882__auto__.push((arguments[i__5877__auto___59398]));

var G__59399 = (i__5877__auto___59398 + (1));
i__5877__auto___59398 = G__59399;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((4) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((4)),(0),null)):null);
return logseq.graph_parser.block.page_name__GT_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5883__auto__);
});

(logseq.graph_parser.block.page_name__GT_map.cljs$core$IFn$_invoke$arity$variadic = (function (original_page_name,db,with_timestamp_QMARK_,date_formatter,p__59188){
var map__59189 = p__59188;
var map__59189__$1 = cljs.core.__destructure_map(map__59189);
var options = map__59189__$1;
var page_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59189__$1,new cljs.core.Keyword(null,"page-uuid","page-uuid",1152600915));
var class_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59189__$1,new cljs.core.Keyword(null,"class?","class?",385834571));
if(cljs.core.truth_((function (){var and__5140__auto__ = db;
if(cljs.core.truth_(and__5140__auto__)){
return ((logseq.common.util.uuid_string_QMARK_(original_page_name)) && (cljs.core.not(logseq.graph_parser.block.page_entity_QMARK_((function (){var G__59190 = db;
var G__59191 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.uuid(original_page_name)], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59190,G__59191) : datascript.core.entity.call(null,G__59190,G__59191));
})()))));
} else {
return and__5140__auto__;
}
})())){
return null;
} else {
var db_based_QMARK_ = logseq.db.common.entity_plus.db_based_graph_QMARK_(db);
var original_page_name__$1 = (function (){var G__59197 = clojure.string.trim(original_page_name);
if(cljs.core.truth_(db_based_QMARK_)){
return logseq.graph_parser.block.sanitize_hashtag_name(G__59197);
} else {
return G__59197;
}
})();
var vec__59194 = (cljs.core.truth_((function (){var and__5140__auto__ = original_page_name__$1;
if(cljs.core.truth_(and__5140__auto__)){
return typeof original_page_name__$1 === 'string';
} else {
return and__5140__auto__;
}
})())?logseq.graph_parser.block.page_name_string__GT_map(original_page_name__$1,db,date_formatter,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"with-timestamp?","with-timestamp?",-1639768666),with_timestamp_QMARK_)):(function (){var page = (cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.map_QMARK_(original_page_name__$1);
if(and__5140__auto__){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(original_page_name__$1);
} else {
return and__5140__auto__;
}
})())?original_page_name__$1:((cljs.core.map_QMARK_(original_page_name__$1))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original_page_name__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),(function (){var or__5142__auto__ = page_uuid;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 ? datascript.core.squuid.cljs$core$IFn$_invoke$arity$0() : datascript.core.squuid.call(null));
}
})()):null
));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page,null], null);
})()
);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59194,(0),null);
var _page_entity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59194,(1),null);
if(cljs.core.truth_(page)){
if(cljs.core.truth_(db_based_QMARK_)){
var tags = (cljs.core.truth_(class_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.class","Tag","logseq.class/Tag",-538902083)], null):(function (){var or__5142__auto__ = new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329)], null);
}
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(page,new cljs.core.Keyword("block","tags","block/tags",1814948340),tags);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(page,new cljs.core.Keyword("block","type","block/type",1537584409),(function (){var or__5142__auto__ = new cljs.core.Keyword("block","type","block/type",1537584409).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "page";
}
})());
}
} else {
return null;
}
}
}));

(logseq.graph_parser.block.page_name__GT_map.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(logseq.graph_parser.block.page_name__GT_map.cljs$lang$applyTo = (function (seq59181){
var G__59182 = cljs.core.first(seq59181);
var seq59181__$1 = cljs.core.next(seq59181);
var G__59183 = cljs.core.first(seq59181__$1);
var seq59181__$2 = cljs.core.next(seq59181__$1);
var G__59184 = cljs.core.first(seq59181__$2);
var seq59181__$3 = cljs.core.next(seq59181__$2);
var G__59185 = cljs.core.first(seq59181__$3);
var seq59181__$4 = cljs.core.next(seq59181__$3);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59182,G__59183,G__59184,G__59185,seq59181__$4);
}));

/**
 * Namespace page that're not journal pages
 */
logseq.graph_parser.block.db_namespace_page_QMARK_ = (function logseq$graph_parser$block$db_namespace_page_QMARK_(db_based_QMARK_,page){
var and__5140__auto__ = db_based_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = (logseq.graph_parser.text.namespace_page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.graph_parser.text.namespace_page_QMARK_.cljs$core$IFn$_invoke$arity$1(page) : logseq.graph_parser.text.namespace_page_QMARK_.call(null,page));
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.not(logseq.common.date.valid_journal_title_with_slash_QMARK_(page));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
});
logseq.graph_parser.block.ref__GT_map = (function logseq$graph_parser$block$ref__GT_map(db,_STAR_col,p__59204){
var map__59205 = p__59204;
var map__59205__$1 = cljs.core.__destructure_map(map__59205);
var date_formatter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59205__$1,new cljs.core.Keyword(null,"date-formatter","date-formatter",-223324709));
var _STAR_name__GT_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59205__$1,new cljs.core.Keyword(null,"*name->id","*name->id",-486855390));
var tag_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59205__$1,new cljs.core.Keyword(null,"tag?","tag?",1714008252));
var db_based_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59205__$1,new cljs.core.Keyword(null,"db-based?","db-based?",-1746581232));
var structured_tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59205__$1,new cljs.core.Keyword(null,"structured-tags","structured-tags",1177605704));
var col = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.deref(_STAR_col)));
var children_pages = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p){
var p__$1 = ((cljs.core.map_QMARK_(p))?new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(p):p);
if(typeof p__$1 === 'string'){
var p__$2 = (function (){var or__5142__auto__ = logseq.graph_parser.text.get_nested_page_name(p__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return p__$1;
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = (logseq.graph_parser.text.namespace_page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.graph_parser.text.namespace_page_QMARK_.cljs$core$IFn$_invoke$arity$1(p__$2) : logseq.graph_parser.text.namespace_page_QMARK_.call(null,p__$2));
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.not(logseq.common.date.valid_journal_title_with_slash_QMARK_(p__$2))) && (cljs.core.not(tag_QMARK_)));
} else {
return and__5140__auto__;
}
})())){
return logseq.common.util.split_namespace_pages(p__$2);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p__$2], null);
}
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([col], 0))));
var col__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(col,children_pages)));
var export_to_db_graph_QMARK_ = cljs.core.deref(logseq.graph_parser.block._STAR_export_to_db_graph_QMARK_);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
var macro_QMARK_ = ((cljs.core.map_QMARK_(item)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("macro",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item))));
var tag_QMARK___$1 = (cljs.core.truth_(export_to_db_graph_QMARK_)?tag_QMARK_:(function (){var or__5142__auto__ = cljs.core.contains_QMARK_(structured_tags,item);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return tag_QMARK_;
}
})());
if(macro_QMARK_){
return null;
} else {
var m = logseq.graph_parser.block.page_name__GT_map.cljs$core$IFn$_invoke$arity$variadic(item,db,true,date_formatter,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class?","class?",385834571),tag_QMARK___$1], null)], 0));
var result = (function (){var G__59209 = m;
if(cljs.core.truth_((function (){var and__5140__auto__ = db_based_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = tag_QMARK___$1;
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.not(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(m));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return logseq.db.frontend.class$.build_new_class(db,G__59209);
} else {
return G__59209;
}
})();
var page_name = (cljs.core.truth_(db_based_QMARK_)?new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(result):new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(result));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_name__GT_id),page_name);
if((id == null)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_STAR_name__GT_id,cljs.core.assoc,page_name,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(result));
} else {
}

if(cljs.core.truth_((function (){var and__5140__auto__ = id;
if(cljs.core.truth_(and__5140__auto__)){
var or__5142__auto__ = (function (){var temp__5825__auto__ = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(result);
if(cljs.core.truth_(temp__5825__auto__)){
var ident = temp__5825__auto__;
return ((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,ident) : datascript.core.entity.call(null,db,ident)) == null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return export_to_db_graph_QMARK_;
}
} else {
return and__5140__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id);
} else {
return result;
}
}
}),col__$1);
});
logseq.graph_parser.block.with_page_refs_and_tags = (function logseq$graph_parser$block$with_page_refs_and_tags(p__59211,db,date_formatter,p__59212){
var map__59213 = p__59211;
var map__59213__$1 = cljs.core.__destructure_map(map__59213);
var block = map__59213__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59213__$1,new cljs.core.Keyword(null,"title","title",636505583));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59213__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59213__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59213__$1,new cljs.core.Keyword(null,"refs","refs",-1560051448));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59213__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59213__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
var map__59214 = p__59212;
var map__59214__$1 = cljs.core.__destructure_map(map__59214);
var structured_tags = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59214__$1,new cljs.core.Keyword(null,"structured-tags","structured-tags",1177605704),cljs.core.PersistentHashSet.EMPTY);
var db_based_QMARK_ = (function (){var and__5140__auto__ = logseq.db.common.entity_plus.db_based_graph_QMARK_(db);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(cljs.core.deref(logseq.graph_parser.block._STAR_export_to_db_graph_QMARK_));
} else {
return and__5140__auto__;
}
})();
var refs__$1 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(tags,refs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(db_based_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [marker,priority], null))], 0))));
var _STAR_refs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(refs__$1);
var _STAR_structured_tags = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.set(structured_tags));
clojure.walk.prewalk((function (form){
if(((cljs.core.vector_QMARK_(form)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(form),"Custom")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(form),"query")))))){
return null;
} else {
var temp__5825__auto___59400 = logseq.graph_parser.block.get_page_reference(form,cljs.core.get.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"markdown","markdown",1227225089)));
if(cljs.core.truth_(temp__5825__auto___59400)){
var page_59401 = temp__5825__auto___59400;
var temp__5825__auto___59402__$1 = (cljs.core.truth_(logseq.graph_parser.block.db_namespace_page_QMARK_(db_based_QMARK_,page_59401))?null:page_59401);
if(cljs.core.truth_(temp__5825__auto___59402__$1)){
var page_SINGLEQUOTE__59403 = temp__5825__auto___59402__$1;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_refs,cljs.core.conj,page_SINGLEQUOTE__59403);
} else {
}
} else {
}

var temp__5825__auto___59404 = logseq.graph_parser.block.get_tag(form);
if(cljs.core.truth_(temp__5825__auto___59404)){
var tag_59405 = temp__5825__auto___59404;
var tag_59406__$1 = (logseq.graph_parser.text.page_ref_un_brackets_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.graph_parser.text.page_ref_un_brackets_BANG_.cljs$core$IFn$_invoke$arity$1(tag_59405) : logseq.graph_parser.text.page_ref_un_brackets_BANG_.call(null,tag_59405));
var temp__5825__auto___59407__$1 = (cljs.core.truth_(logseq.graph_parser.block.db_namespace_page_QMARK_(db_based_QMARK_,tag_59406__$1))?null:tag_59406__$1);
if(cljs.core.truth_(temp__5825__auto___59407__$1)){
var tag_SINGLEQUOTE__59408 = temp__5825__auto___59407__$1;
if(cljs.core.truth_(logseq.common.util.tag_valid_QMARK_(tag_SINGLEQUOTE__59408))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_refs,cljs.core.conj,tag_SINGLEQUOTE__59408);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_structured_tags,cljs.core.conj,tag_SINGLEQUOTE__59408);
} else {
}
} else {
}
} else {
}

return form;
}
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(title,body));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_refs,(function (p1__59210_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,p1__59210_SHARP_);
}));

var _STAR_name__GT_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ref__GT_map_options = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"db-based?","db-based?",-1746581232),db_based_QMARK_,new cljs.core.Keyword(null,"date-formatter","date-formatter",-223324709),date_formatter,new cljs.core.Keyword(null,"*name->id","*name->id",-486855390),_STAR_name__GT_id,new cljs.core.Keyword(null,"structured-tags","structured-tags",1177605704),cljs.core.set(cljs.core.deref(_STAR_structured_tags))], null);
var refs__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ref){
var G__59215 = ref;
if(cljs.core.truth_(new cljs.core.Keyword("block.temp","original-page-name","block.temp/original-page-name",1371358508).cljs$core$IFn$_invoke$arity$1(ref))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59215,new cljs.core.Keyword("block.temp","original-page-name","block.temp/original-page-name",1371358508),new cljs.core.Keyword("block.temp","original-page-name","block.temp/original-page-name",1371358508).cljs$core$IFn$_invoke$arity$1(ref));
} else {
return G__59215;
}
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,logseq.graph_parser.block.ref__GT_map(db,_STAR_refs,ref__GT_map_options)));
var tags__$1 = logseq.graph_parser.block.ref__GT_map(db,_STAR_structured_tags,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ref__GT_map_options,new cljs.core.Keyword(null,"tag?","tag?",1714008252),true));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block,new cljs.core.Keyword(null,"refs","refs",-1560051448),refs__$2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tags","tags",1771418977),tags__$1], 0));
});
logseq.graph_parser.block.with_block_refs = (function logseq$graph_parser$block$with_block_refs(p__59217){
var map__59218 = p__59217;
var map__59218__$1 = cljs.core.__destructure_map(map__59218);
var block = map__59218__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59218__$1,new cljs.core.Keyword(null,"title","title",636505583));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59218__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ref_blocks = logseq.graph_parser.block.extract_block_refs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(title,body));
var refs = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refs","refs",-1560051448).cljs$core$IFn$_invoke$arity$1(block),ref_blocks));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword(null,"refs","refs",-1560051448),refs);
});
logseq.graph_parser.block.block_keywordize = (function logseq$graph_parser$block$block_keywordize(block){
return cljs.core.update_keys(block,(function (k){
if(cljs.core.truth_(cljs.core.namespace(k))){
return k;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("block",k);
}
}));
});
/**
 * Clean up blocks data and add `block` ns to all keys
 */
logseq.graph_parser.block.sanity_blocks_data = (function logseq$graph_parser$block$sanity_blocks_data(blocks){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
if(cljs.core.map_QMARK_(block)){
return logseq.graph_parser.block.block_keywordize(logseq.common.util.remove_nils_non_nested(block));
} else {
return block;
}
}),blocks);
});
logseq.graph_parser.block.get_block_content = (function logseq$graph_parser$block$get_block_content(utf8_content,block,format,meta_SINGLEQUOTE_,block_pattern){
var content = (function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"end_pos","end_pos",-1418940).cljs$core$IFn$_invoke$arity$1(meta_SINGLEQUOTE_);
if(cljs.core.truth_(temp__5823__auto__)){
var end_pos = temp__5823__auto__;
return logseq.graph_parser.utf8.substring.cljs$core$IFn$_invoke$arity$3(utf8_content,new cljs.core.Keyword(null,"start_pos","start_pos",272375959).cljs$core$IFn$_invoke$arity$1(meta_SINGLEQUOTE_),end_pos);
} else {
return logseq.graph_parser.utf8.substring.cljs$core$IFn$_invoke$arity$2(utf8_content,new cljs.core.Keyword(null,"start_pos","start_pos",272375959).cljs$core$IFn$_invoke$arity$1(meta_SINGLEQUOTE_));
}
})();
var content__$1 = (cljs.core.truth_(content)?(function (){var content__$1 = logseq.graph_parser.text.remove_level_spaces.cljs$core$IFn$_invoke$arity$3(content,format,block_pattern);
if(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"pre-block?","pre-block?",-1762448460).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"markdown","markdown",1227225089)),new cljs.core.Keyword(null,"org","org",1495985));
}
})())){
return content__$1;
} else {
return logseq.graph_parser.mldoc.remove_indentation_spaces(content__$1,(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(block) + (1)),false);
}
})():null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"org","org",1495985))){
return content__$1;
} else {
return logseq.graph_parser.property.__GT_new_properties(content__$1);
}
});
logseq.graph_parser.block.get_custom_id_or_new_id = (function logseq$graph_parser$block$get_custom_id_or_new_id(properties){
var or__5142__auto__ = (function (){var temp__5825__auto__ = (function (){var or__5142__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(properties,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"custom-id","custom-id",-615733336)], null));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(properties,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"custom_id","custom_id",834948303)], null));
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(properties,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
}
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var custom_id = temp__5825__auto__;
var temp__5825__auto____$1 = (function (){var and__5140__auto__ = typeof custom_id === 'string';
if(and__5140__auto__){
return clojure.string.trim(custom_id);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto____$1)){
var custom_id__$1 = temp__5825__auto____$1;
var G__59223 = custom_id__$1;
if((G__59223 == null)){
return null;
} else {
return cljs.core.parse_uuid(G__59223);
}
} else {
return null;
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 ? datascript.core.squuid.cljs$core$IFn$_invoke$arity$0() : datascript.core.squuid.call(null));
}
});
logseq.graph_parser.block.with_page_block_refs = (function logseq$graph_parser$block$with_page_block_refs(block,db,date_formatter,opts){
var G__59230 = block;
var G__59230__$1 = (((G__59230 == null))?null:logseq.graph_parser.block.with_page_refs_and_tags(G__59230,db,date_formatter,opts));
var G__59230__$2 = (((G__59230__$1 == null))?null:logseq.graph_parser.block.with_block_refs(G__59230__$1));
if((G__59230__$2 == null)){
return null;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__59230__$2,new cljs.core.Keyword(null,"refs","refs",-1560051448),(function (col){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,col);
}));
}
});
/**
 * macro: {:name "" arguments [""]}
 */
logseq.graph_parser.block.macro__GT_block = (function logseq$graph_parser$block$macro__GT_block(macro){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),logseq.common.uuid.gen_uuid.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("block","type","block/type",1537584409),"macro",new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"logseq.macro-name","logseq.macro-name",1789949403),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(macro),new cljs.core.Keyword(null,"logseq.macro-arguments","logseq.macro-arguments",-655551868),new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(macro)], null)], null);
});
logseq.graph_parser.block.extract_macros_from_ast = (function logseq$graph_parser$block$extract_macros_from_ast(ast){
var _STAR_result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
clojure.walk.postwalk((function (f){
if(((cljs.core.vector_QMARK_(f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(f),"Macro")))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_result,cljs.core.conj,cljs.core.second(f));

return null;
} else {
return f;
}
}),ast);

return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.block.macro__GT_block,cljs.core.deref(_STAR_result));
});
logseq.graph_parser.block.with_pre_block_if_exists = (function logseq$graph_parser$block$with_pre_block_if_exists(blocks,body,pre_block_properties,encoded_content,p__59242){
var map__59243 = p__59242;
var map__59243__$1 = cljs.core.__destructure_map(map__59243);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59243__$1,new cljs.core.Keyword(null,"db","db",993250759));
var date_formatter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59243__$1,new cljs.core.Keyword(null,"date-formatter","date-formatter",-223324709));
var first_block = cljs.core.first(blocks);
var first_block_start_pos = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(first_block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","meta","block/meta",1064819153),new cljs.core.Keyword(null,"start_pos","start_pos",272375959)], null));
var blocks__$1 = (((((first_block_start_pos > (0))) || (cljs.core.empty_QMARK_(blocks))))?cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var content = logseq.graph_parser.utf8.substring.cljs$core$IFn$_invoke$arity$3(encoded_content,(0),first_block_start_pos);
var map__59244 = pre_block_properties;
var map__59244__$1 = cljs.core.__destructure_map(map__59244);
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59244__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var properties_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59244__$1,new cljs.core.Keyword(null,"properties-order","properties-order",-768725444));
var properties_text_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59244__$1,new cljs.core.Keyword(null,"properties-text-values","properties-text-values",1110303535));
var invalid_properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59244__$1,new cljs.core.Keyword(null,"invalid-properties","invalid-properties",1416774099));
var page_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59244__$1,new cljs.core.Keyword(null,"page-refs","page-refs",1204379971));
var id = logseq.graph_parser.block.get_custom_id_or_new_id(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"properties","properties",685819552),properties], null));
var property_refs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (page){
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.block.page_name__GT_map(page,db,true,date_formatter));
}),page_refs);
var pre_block_QMARK_ = (cljs.core.truth_(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(properties))?false:true);
var block = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","invalid-properties","block/invalid-properties",1509592872),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword("block.temp","ast-body","block.temp/ast-body",-464258035),new cljs.core.Keyword("block","properties-order","block/properties-order",-968493873),new cljs.core.Keyword("block","level","block/level",1182509971),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("block","macros","block/macros",650396438)],[properties_text_values,pre_block_QMARK_,id,invalid_properties,properties,body,cljs.core.vec(properties_order),(1),content,logseq.graph_parser.block.extract_macros_from_ast(body)]);
var map__59245 = logseq.graph_parser.block.with_page_block_refs(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"refs","refs",-1560051448),property_refs], null),db,date_formatter,cljs.core.PersistentArrayMap.EMPTY);
var map__59245__$1 = cljs.core.__destructure_map(map__59245);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59245__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59245__$1,new cljs.core.Keyword(null,"refs","refs",-1560051448));
var G__59248 = block;
var G__59248__$1 = (cljs.core.truth_(tags)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59248,new cljs.core.Keyword("block","tags","block/tags",1814948340),tags):G__59248);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59248__$1,new cljs.core.Keyword("block","refs","block/refs",-1214495349),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(refs,new cljs.core.Keyword(null,"block-refs","block-refs",1507119654).cljs$core$IFn$_invoke$arity$1(pre_block_properties)));

})(),cljs.core.select_keys(first_block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword("block","page","block/page",822314108)], null))], 0)),blocks):blocks);
return blocks__$1;
});
logseq.graph_parser.block.with_heading_property = (function logseq$graph_parser$block$with_heading_property(properties,markdown_heading_QMARK_,size){
if(cljs.core.truth_(markdown_heading_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(properties,new cljs.core.Keyword(null,"heading","heading",-1312171873),size);
} else {
return properties;
}
});
logseq.graph_parser.block.construct_block = (function logseq$graph_parser$block$construct_block(block,properties_STAR_,timestamps,body,encoded_content,format,pos_meta,p__59266){
var map__59267 = p__59266;
var map__59267__$1 = cljs.core.__destructure_map(map__59267);
var block_pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59267__$1,new cljs.core.Keyword(null,"block-pattern","block-pattern",297259959));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59267__$1,new cljs.core.Keyword(null,"db","db",993250759));
var date_formatter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59267__$1,new cljs.core.Keyword(null,"date-formatter","date-formatter",-223324709));
var remove_properties_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59267__$1,new cljs.core.Keyword(null,"remove-properties?","remove-properties?",1053410556));
var remove_logbook_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59267__$1,new cljs.core.Keyword(null,"remove-logbook?","remove-logbook?",-99656066));
var remove_deadline_scheduled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59267__$1,new cljs.core.Keyword(null,"remove-deadline-scheduled?","remove-deadline-scheduled?",-1628136509));
var db_graph_mode_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59267__$1,new cljs.core.Keyword(null,"db-graph-mode?","db-graph-mode?",586979227));
var export_to_db_graph_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59267__$1,new cljs.core.Keyword(null,"export-to-db-graph?","export-to-db-graph?",2008973423));
var id = logseq.graph_parser.block.get_custom_id_or_new_id(properties_STAR_);
var block_tags = (function (){var and__5140__auto__ = export_to_db_graph_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(properties_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"tags","tags",1771418977)], null));
} else {
return and__5140__auto__;
}
})();
var properties = ((cljs.core.seq(block_tags))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(properties_STAR_,new cljs.core.Keyword(null,"properties","properties",685819552),(function (p1__59254_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__59254_SHARP_,new cljs.core.Keyword(null,"tags","tags",1771418977));
})),new cljs.core.Keyword(null,"properties-text-values","properties-text-values",1110303535),(function (p1__59255_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__59255_SHARP_,new cljs.core.Keyword(null,"tags","tags",1771418977));
})),new cljs.core.Keyword(null,"properties-order","properties-order",-768725444),(function (v){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__59256_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tags","tags",1771418977),p1__59256_SHARP_);
}),v);
})),new cljs.core.Keyword(null,"page-refs","page-refs",1204379971),(function (v){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__59257_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tags",p1__59257_SHARP_);
}),v);
})):properties_STAR_);
var ref_pages_in_properties = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,new cljs.core.Keyword(null,"page-refs","page-refs",1204379971).cljs$core$IFn$_invoke$arity$1(properties));
var block__$1 = cljs.core.second(block);
var unordered_QMARK_ = new cljs.core.Keyword(null,"unordered","unordered",-731655096).cljs$core$IFn$_invoke$arity$1(block__$1);
var markdown_heading_QMARK_ = (function (){var and__5140__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(block__$1);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"markdown","markdown",1227225089),format);
} else {
return and__5140__auto__;
}
})();
var block__$2 = (cljs.core.truth_(markdown_heading_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block__$1,new cljs.core.Keyword(null,"level","level",1290497552),(cljs.core.truth_(unordered_QMARK_)?new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(block__$1):(1))):block__$1);
var block__$3 = (function (){var G__59271 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block__$2,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"refs","refs",-1560051448),ref_pages_in_properties,new cljs.core.Keyword(null,"format","format",-1306924766),format,new cljs.core.Keyword(null,"meta","meta",1499536964),pos_meta], 0)),new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unordered","unordered",-731655096)], 0));
var G__59271__$1 = (cljs.core.truth_((function (){var or__5142__auto__ = cljs.core.seq(new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(properties));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return markdown_heading_QMARK_;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__59271,new cljs.core.Keyword(null,"properties","properties",685819552),logseq.graph_parser.block.with_heading_property(new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(properties),markdown_heading_QMARK_,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(block__$2)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"properties-text-values","properties-text-values",1110303535),new cljs.core.Keyword(null,"properties-text-values","properties-text-values",1110303535).cljs$core$IFn$_invoke$arity$1(properties),new cljs.core.Keyword(null,"properties-order","properties-order",-768725444),cljs.core.vec(new cljs.core.Keyword(null,"properties-order","properties-order",-768725444).cljs$core$IFn$_invoke$arity$1(properties))], 0)):G__59271);
if(cljs.core.seq(new cljs.core.Keyword(null,"invalid-properties","invalid-properties",1416774099).cljs$core$IFn$_invoke$arity$1(properties))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59271__$1,new cljs.core.Keyword(null,"invalid-properties","invalid-properties",1416774099),new cljs.core.Keyword(null,"invalid-properties","invalid-properties",1416774099).cljs$core$IFn$_invoke$arity$1(properties));
} else {
return G__59271__$1;
}
})();
var block__$4 = (cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"collapsed","collapsed",-628494523)], null)))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block__$3,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true),new cljs.core.Keyword(null,"properties","properties",685819552),(function (m){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"collapsed","collapsed",-628494523));
})),new cljs.core.Keyword(null,"properties-text-values","properties-text-values",1110303535),cljs.core.dissoc,new cljs.core.Keyword(null,"collapsed","collapsed",-628494523)),new cljs.core.Keyword(null,"properties-order","properties-order",-768725444),(function (keys_SINGLEQUOTE_){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),null], null), null),keys_SINGLEQUOTE_));
})):block__$3);
var title = (function (){var G__59274 = logseq.graph_parser.block.get_block_content(encoded_content,block__$4,format,pos_meta,block_pattern);
var G__59274__$1 = (cljs.core.truth_(remove_properties_QMARK_)?(function (p1__59258_SHARP_){
return logseq.graph_parser.property.remove_properties.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$3(block__$4,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"markdown","markdown",1227225089)),p1__59258_SHARP_,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(block__$4));
})(G__59274):G__59274);
var G__59274__$2 = (cljs.core.truth_(remove_logbook_QMARK_)?logseq.graph_parser.property.remove_logbook(G__59274__$1):G__59274__$1);
if(cljs.core.truth_(remove_deadline_scheduled_QMARK_)){
return logseq.graph_parser.property.remove_deadline_scheduled(G__59274__$2);
} else {
return G__59274__$2;
}
})();
var block__$5 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block__$4,new cljs.core.Keyword("block","title","block/title",710445684),title);
var block__$6 = ((cljs.core.seq(timestamps))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block__$5,logseq.graph_parser.block.timestamps__GT_scheduled_and_deadline(timestamps)], 0)):block__$5);
var db_based_QMARK_ = (function (){var or__5142__auto__ = db_graph_mode_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return export_to_db_graph_QMARK_;
}
})();
var block__$7 = logseq.graph_parser.block.with_page_block_refs(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block__$6,new cljs.core.Keyword(null,"body","body",-2049205669),body),db,date_formatter,(function (){var G__59280 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.seq(block_tags)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59280,new cljs.core.Keyword(null,"structured-tags","structured-tags",1177605704),block_tags);
} else {
return G__59280;
}
})());
var block__$8 = (cljs.core.truth_(db_based_QMARK_)?block__$7:cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(block__$7,new cljs.core.Keyword(null,"tags","tags",1771418977),(function (tags){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59259_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__59259_SHARP_,new cljs.core.Keyword("block","format","block/format",-1212045901),format);
}),tags);
})),new cljs.core.Keyword(null,"refs","refs",-1560051448),(function (refs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59260_SHARP_){
if(cljs.core.map_QMARK_(p1__59260_SHARP_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__59260_SHARP_,new cljs.core.Keyword("block","format","block/format",-1212045901),format);
} else {
return p1__59260_SHARP_;
}
}),refs);
})));
var block__$9 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(block__$8,new cljs.core.Keyword(null,"refs","refs",-1560051448),cljs.core.concat,new cljs.core.Keyword(null,"block-refs","block-refs",1507119654).cljs$core$IFn$_invoke$arity$1(properties));
var map__59269 = new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(properties);
var map__59269__$1 = cljs.core.__destructure_map(map__59269);
var created_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59269__$1,new cljs.core.Keyword(null,"created-at","created-at",-89248644));
var updated_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59269__$1,new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336));
var block__$10 = (function (){var G__59287 = block__$9;
var G__59287__$1 = (cljs.core.truth_((function (){var and__5140__auto__ = created_at;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.integer_QMARK_(created_at);
} else {
return and__5140__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59287,new cljs.core.Keyword("block","created-at","block/created-at",1440015),created_at):G__59287);
if(cljs.core.truth_((function (){var and__5140__auto__ = updated_at;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.integer_QMARK_(updated_at);
} else {
return and__5140__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59287__$1,new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),updated_at);
} else {
return G__59287__$1;
}
})();
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(block__$10,new cljs.core.Keyword(null,"title","title",636505583),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"anchor","anchor",1549638489)], 0));
});
logseq.graph_parser.block.fix_duplicate_id = (function logseq$graph_parser$block$fix_duplicate_id(block){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Logseq will assign a new id for block with content:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block)], 0))], 0));

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),(datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 ? datascript.core.squuid.cljs$core$IFn$_invoke$arity$0() : datascript.core.squuid.call(null))),new cljs.core.Keyword("block","properties","block/properties",708347145),cljs.core.dissoc,new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708),cljs.core.dissoc,new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword("block","properties-order","block/properties-order",-968493873),(function (p1__59293_SHARP_){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),null], null), null),p1__59293_SHARP_));
})),new cljs.core.Keyword("block","title","block/title",710445684),(function (c){
var replace_str = cljs.core.re_pattern((""+"\n*\\s*"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"markdown","markdown",1227225089),cljs.core.get.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword(null,"markdown","markdown",1227225089))))?(""+"id"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.property.colons)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))):(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.property.colons_org("id"))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)))))));
return clojure.string.replace_first(c,replace_str,"");
}));
});
/**
 * If the block exists in another page or the current page, we need to fix it
 */
logseq.graph_parser.block.fix_block_id_if_duplicated_BANG_ = (function logseq$graph_parser$block$fix_block_id_if_duplicated_BANG_(db,page_name,_STAR_extracted_block_ids,block){
var block_page_name = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1((function (){var G__59302 = db;
var G__59303 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59302,G__59303) : datascript.core.entity.call(null,G__59302,G__59303));
})()));
var block__$1 = (cljs.core.truth_((function (){var or__5142__auto__ = (function (){var and__5140__auto__ = block_page_name;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(block_page_name,page_name);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.contains_QMARK_(cljs.core.deref(_STAR_extracted_block_ids),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
}
})())?logseq.graph_parser.block.fix_duplicate_id(block):block);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_extracted_block_ids,cljs.core.conj,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block__$1));

return block__$1;
});
/**
 * Extract headings from mldoc ast. Args:
 *   * `ast`: mldoc ast.
 *   * `content`: markdown or org-mode text.
 *   * `format`: content's format, it could be either :markdown or :org-mode.
 *   * `options`: Options are :user-config, :block-pattern, :date-formatter, :db and
 *   * :db-graph-mode? : Set when a db graph in the frontend
 *   * :export-to-db-graph? : Set when exporting to a db graph
 */
logseq.graph_parser.block.extract_blocks = (function logseq$graph_parser$block$extract_blocks(ast,content,format,p__59309){
var map__59310 = p__59309;
var map__59310__$1 = cljs.core.__destructure_map(map__59310);
var options = map__59310__$1;
var user_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59310__$1,new cljs.core.Keyword(null,"user-config","user-config",-1138679827));
var db_graph_mode_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59310__$1,new cljs.core.Keyword(null,"db-graph-mode?","db-graph-mode?",586979227));
var export_to_db_graph_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59310__$1,new cljs.core.Keyword(null,"export-to-db-graph?","export-to-db-graph?",2008973423));
if(cljs.core.seq(ast)){
} else {
throw (new Error("Assert failed: (seq ast)"));
}

if(typeof content === 'string'){
} else {
throw (new Error("Assert failed: (string? content)"));
}

if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),null,new cljs.core.Keyword(null,"org","org",1495985),null], null), null),format)){
} else {
throw (new Error("Assert failed: (contains? #{:markdown :org} format)"));
}

var encoded_content = logseq.graph_parser.utf8.encode(content);
var all_blocks = cljs.core.vec(cljs.core.reverse(ast));
var vec__59315 = (function (){var headings = cljs.core.PersistentVector.EMPTY;
var ast_blocks = cljs.core.reverse(ast);
var block_idx = (0);
var timestamps = cljs.core.PersistentArrayMap.EMPTY;
var properties = cljs.core.PersistentArrayMap.EMPTY;
var body = cljs.core.PersistentVector.EMPTY;
var prev_block_num = (0);
while(true){
if(cljs.core.seq(ast_blocks)){
var vec__59325 = cljs.core.first(ast_blocks);
var ast_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59325,(0),null);
var pos_meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59325,(1),null);
if(logseq.graph_parser.block.paragraph_timestamp_block_QMARK_(ast_block)){
var ts = logseq.graph_parser.block.extract_timestamps(ast_block);
var timestamps_SINGLEQUOTE_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([timestamps,ts], 0));
var G__59506 = headings;
var G__59507 = cljs.core.rest(ast_blocks);
var G__59508 = (block_idx + (1));
var G__59509 = timestamps_SINGLEQUOTE_;
var G__59510 = properties;
var G__59511 = body;
var G__59512 = (prev_block_num + (1));
headings = G__59506;
ast_blocks = G__59507;
block_idx = G__59508;
timestamps = G__59509;
properties = G__59510;
body = G__59511;
prev_block_num = G__59512;
continue;
} else {
if(logseq.graph_parser.property.properties_ast_QMARK_(ast_block)){
var properties__$1 = logseq.graph_parser.block.extract_properties(cljs.core.second(ast_block),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(user_config,new cljs.core.Keyword(null,"format","format",-1306924766),format));
var G__59513 = headings;
var G__59514 = cljs.core.rest(ast_blocks);
var G__59515 = (block_idx + (1));
var G__59516 = timestamps;
var G__59517 = properties__$1;
var G__59518 = body;
var G__59519 = (prev_block_num + (1));
headings = G__59513;
ast_blocks = G__59514;
block_idx = G__59515;
timestamps = G__59516;
properties = G__59517;
body = G__59518;
prev_block_num = G__59519;
continue;
} else {
if(logseq.graph_parser.block.heading_block_QMARK_(ast_block)){
var cut_multiline_QMARK_ = (function (){var and__5140__auto__ = export_to_db_graph_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prev_block_num,(0));
} else {
return and__5140__auto__;
}
})();
var prev_blocks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(all_blocks,cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),(block_idx - prev_block_num)),block_idx));
var pos_meta_SINGLEQUOTE_ = (cljs.core.truth_(cut_multiline_QMARK_)?pos_meta:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pos_meta,new cljs.core.Keyword(null,"end_pos","end_pos",-1418940),((cljs.core.seq(headings))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(headings),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"start_pos","start_pos",272375959)], null)):null)));
var options_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword(null,"remove-properties?","remove-properties?",1053410556),(function (){var and__5140__auto__ = export_to_db_graph_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.some(logseq.graph_parser.property.properties_ast_QMARK_,prev_blocks);
} else {
return and__5140__auto__;
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"remove-logbook?","remove-logbook?",-99656066),(function (){var and__5140__auto__ = export_to_db_graph_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.some(((function (headings,ast_blocks,block_idx,timestamps,properties,body,prev_block_num,and__5140__auto__,cut_multiline_QMARK_,prev_blocks,pos_meta_SINGLEQUOTE_,vec__59325,ast_block,pos_meta,encoded_content,all_blocks,map__59310,map__59310__$1,options,user_config,db_graph_mode_QMARK_,export_to_db_graph_QMARK_){
return (function (p1__59305_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Drawer","logbook"], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),p1__59305_SHARP_));
});})(headings,ast_blocks,block_idx,timestamps,properties,body,prev_block_num,and__5140__auto__,cut_multiline_QMARK_,prev_blocks,pos_meta_SINGLEQUOTE_,vec__59325,ast_block,pos_meta,encoded_content,all_blocks,map__59310,map__59310__$1,options,user_config,db_graph_mode_QMARK_,export_to_db_graph_QMARK_))
,prev_blocks);
} else {
return and__5140__auto__;
}
})(),new cljs.core.Keyword(null,"remove-deadline-scheduled?","remove-deadline-scheduled?",-1628136509),(function (){var and__5140__auto__ = export_to_db_graph_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.some(((function (headings,ast_blocks,block_idx,timestamps,properties,body,prev_block_num,and__5140__auto__,cut_multiline_QMARK_,prev_blocks,pos_meta_SINGLEQUOTE_,vec__59325,ast_block,pos_meta,encoded_content,all_blocks,map__59310,map__59310__$1,options,user_config,db_graph_mode_QMARK_,export_to_db_graph_QMARK_){
return (function (p1__59306_SHARP_){
return cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.flatten(p1__59306_SHARP_)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Deadline",null,"Scheduled",null], null), null)));
});})(headings,ast_blocks,block_idx,timestamps,properties,body,prev_block_num,and__5140__auto__,cut_multiline_QMARK_,prev_blocks,pos_meta_SINGLEQUOTE_,vec__59325,ast_block,pos_meta,encoded_content,all_blocks,map__59310,map__59310__$1,options,user_config,db_graph_mode_QMARK_,export_to_db_graph_QMARK_))
,prev_blocks);
} else {
return and__5140__auto__;
}
})()], 0));
var block_SINGLEQUOTE_ = logseq.graph_parser.block.construct_block(ast_block,properties,timestamps,body,encoded_content,format,pos_meta_SINGLEQUOTE_,options_SINGLEQUOTE_);
var block_SINGLEQUOTE__SINGLEQUOTE_ = (cljs.core.truth_(db_graph_mode_QMARK_)?block_SINGLEQUOTE_:(cljs.core.truth_(export_to_db_graph_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block_SINGLEQUOTE_,new cljs.core.Keyword("block.temp","ast-blocks","block.temp/ast-blocks",1272022732),cljs.core.cons(ast_block,body)):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block_SINGLEQUOTE_,new cljs.core.Keyword(null,"macros","macros",811339431),logseq.graph_parser.block.extract_macros_from_ast(cljs.core.cons(ast_block,body)))
));
var G__59525 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(headings,block_SINGLEQUOTE__SINGLEQUOTE_);
var G__59526 = cljs.core.rest(ast_blocks);
var G__59527 = (block_idx + (1));
var G__59528 = cljs.core.PersistentArrayMap.EMPTY;
var G__59529 = cljs.core.PersistentArrayMap.EMPTY;
var G__59530 = cljs.core.PersistentVector.EMPTY;
var G__59531 = (0);
headings = G__59525;
ast_blocks = G__59526;
block_idx = G__59527;
timestamps = G__59528;
properties = G__59529;
body = G__59530;
prev_block_num = G__59531;
continue;
} else {
var G__59532 = headings;
var G__59533 = cljs.core.rest(ast_blocks);
var G__59534 = (block_idx + (1));
var G__59535 = timestamps;
var G__59536 = properties;
var G__59537 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(body,ast_block);
var G__59538 = (prev_block_num + (1));
headings = G__59532;
ast_blocks = G__59533;
block_idx = G__59534;
timestamps = G__59535;
properties = G__59536;
body = G__59537;
prev_block_num = G__59538;
continue;

}
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.graph_parser.block.sanity_blocks_data(cljs.core.reverse(headings)),body,properties], null);
}
break;
}
})();
var blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59315,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59315,(1),null);
var pre_block_properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59315,(2),null);
var result = logseq.graph_parser.block.with_pre_block_if_exists(blocks,body,pre_block_properties,encoded_content,options);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59307_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__59307_SHARP_,new cljs.core.Keyword("block","meta","block/meta",1064819153));
}),result);
});
logseq.graph_parser.block.with_parent_and_order = (function logseq$graph_parser$block$with_parent_and_order(page_id,blocks){
var vec__59338 = cljs.core.split_with((function (b){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("macro",new cljs.core.Keyword("block","type","block/type",1537584409).cljs$core$IFn$_invoke$arity$1(b));
}),blocks);
var blocks__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59338,(0),null);
var other_blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59338,(1),null);
var result = (function (){var remaining_blocks = blocks__$1;
var frames = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),page_id,new cljs.core.Keyword(null,"level","level",1290497552),(0),new cljs.core.Keyword(null,"indent","indent",-148200125),(0)], null)], null);
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(remaining_blocks)){
return result;
} else {
var vec__59362 = remaining_blocks;
var seq__59363 = cljs.core.seq(vec__59362);
var first__59364 = cljs.core.first(seq__59363);
var seq__59363__$1 = cljs.core.next(seq__59363);
var block = first__59364;
var others = seq__59363__$1;
var input_level = new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(block);
var vec__59365 = (function (){var stack = frames;
var last_popped_frame = null;
while(true){
var top_frame = cljs.core.peek(stack);
if((input_level < new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(top_frame))){
var G__59547 = cljs.core.pop(stack);
var G__59548 = top_frame;
stack = G__59547;
last_popped_frame = G__59548;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,last_popped_frame], null);
}
break;
}
})();
var ancestor_frames = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59365,(0),null);
var last_popped_frame = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59365,(1),null);
var map__59368 = cljs.core.peek(ancestor_frames);
var map__59368__$1 = cljs.core.__destructure_map(map__59368);
var top_frame = map__59368__$1;
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59368__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59368__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var indent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59368__$1,new cljs.core.Keyword(null,"indent","indent",-148200125));
var vec__59369 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_level,indent))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block,new cljs.core.Keyword("block","parent","block/parent",-918309064),parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","level","block/level",1182509971),level], 0)),cljs.core.pop(ancestor_frames),input_level], null):(((last_popped_frame == null))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__59373 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(top_frame));
if(((input_level - indent) >= (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59373,new cljs.core.Keyword("block","level","block/level",1182509971),(level + (1)));
} else {
return G__59373;
}
})(),ancestor_frames,input_level], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block,new cljs.core.Keyword("block","parent","block/parent",-918309064),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(top_frame);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return page_id;
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","level","block/level",1182509971),new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(last_popped_frame)], 0)),ancestor_frames,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(last_popped_frame)], null)
));
var resolved_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59369,(0),null);
var base_frames = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59369,(1),null);
var comparison_indent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59369,(2),null);
var frame = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (){var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(resolved_block);
if(cljs.core.truth_(temp__5825__auto__)){
var block_uuid = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(resolved_block),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(resolved_block),new cljs.core.Keyword(null,"indent","indent",-148200125),comparison_indent], null);
var G__59556 = others;
var G__59557 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(base_frames,frame);
var G__59558 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,resolved_block);
remaining_blocks = G__59556;
frames = G__59557;
result = G__59558;
continue;
}
break;
}
})();
var result_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","order","block/order",-1429282437),logseq.db.common.order.gen_key.cljs$core$IFn$_invoke$arity$0());
}),result);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(result_SINGLEQUOTE_,other_blocks);
});

//# sourceMappingURL=logseq.graph_parser.block.js.map
