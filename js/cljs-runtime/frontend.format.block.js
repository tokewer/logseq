goog.provide('frontend.format.block');
frontend.format.block.standalone_display_block = (function frontend$format$block$standalone_display_block(block){
var raw_title = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block);
var title = ((typeof raw_title === 'string')?clojure.string.trim(raw_title):null);
var display_markup_QMARK_ = (function (){var and__5140__auto__ = title;
if(cljs.core.truth_(and__5140__auto__)){
var or__5142__auto__ = cljs.core.re_find(/^```.*```$/s,title);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.re_find(/^\$\$.*\$\$$/s,title);
}
} else {
return and__5140__auto__;
}
})();
var ast_body = (cljs.core.truth_(display_markup_QMARK_)?(function (){var or__5142__auto__ = new cljs.core.Keyword("block.temp","ast-body","block.temp/ast-body",-464258035).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,frontend.format.mldoc.__GT_edn(title,new cljs.core.Keyword(null,"markdown","markdown",1227225089)));
}
})():null);
var vec__61601 = ast_body;
var ast_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61601,(0),null);
var vec__61604 = ast_node;
var node_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61604,(0),null);
var node_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61604,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(ast_body))){
var G__61607 = node_type;
switch (G__61607) {
case "Src":
var map__61608 = node_data;
var map__61608__$1 = cljs.core.__destructure_map(map__61608);
var language = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61608__$1,new cljs.core.Keyword(null,"language","language",-1591107564));
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61608__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var G__61609 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block,new cljs.core.Keyword("block","title","block/title",710445684),clojure.string.replace(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,lines),/\r?\n$/,""),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("logseq.property.node","display-type","logseq.property.node/display-type",442446189),new cljs.core.Keyword(null,"code","code",1586293142)], 0));
if(cljs.core.truth_(cljs.core.not_empty(language))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61609,new cljs.core.Keyword("logseq.property.code","lang","logseq.property.code/lang",-857897165),language);
} else {
return G__61609;
}

break;
case "Displayed_Math":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block,new cljs.core.Keyword("block","title","block/title",710445684),clojure.string.trim(node_data),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("logseq.property.node","display-type","logseq.property.node/display-type",442446189),new cljs.core.Keyword(null,"math","math",-2026912803)], 0));

break;
default:
return block;

}
} else {
return block;
}
});
/**
 * Wrapper around logseq.graph-parser.block/extract-blocks that adds in system state
 * and handles unexpected failure.
 */
frontend.format.block.extract_blocks = (function frontend$format$block$extract_blocks(blocks,content,format,p__61610){
var map__61611 = p__61610;
var map__61611__$1 = cljs.core.__destructure_map(map__61611);
var page_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61611__$1,new cljs.core.Keyword(null,"page-name","page-name",974981762));
try{var blocks__$1 = logseq.graph_parser.block.extract_blocks(blocks,content,format,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"user-config","user-config",-1138679827),frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"block-pattern","block-pattern",297259959),logseq.common.config.block_pattern,new cljs.core.Keyword(null,"date-formatter","date-formatter",-223324709),frontend.state.get_date_formatter(),new cljs.core.Keyword(null,"page-name","page-name",974981762),page_name,new cljs.core.Keyword(null,"db-graph-mode?","db-graph-mode?",586979227),true], null));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
var block__$1 = frontend.format.block.standalone_display_block(block);
var heading = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"heading","heading",-1312171873)], null));
var heading__$1 = ((((heading === true) || (((cljs.core.integer_QMARK_(heading)) && (((((1) <= heading)) && ((heading <= (6)))))))))?heading:null);
var G__61613 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(block__$1,new cljs.core.Keyword("block","format","block/format",-1212045901),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword("block","macros","block/macros",650396438),new cljs.core.Keyword("block","properties-order","block/properties-order",-968493873),new cljs.core.Keyword("block","scheduled","block/scheduled",584810412),new cljs.core.Keyword("block","deadline","block/deadline",660945231),new cljs.core.Keyword("block","marker","block/marker",1231576318),new cljs.core.Keyword("block","priority","block/priority",1491369544),new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708),new cljs.core.Keyword("block","invalid-properties","block/invalid-properties",1509592872)], 0));
if(cljs.core.truth_(heading__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61613,new cljs.core.Keyword("logseq.property","heading","logseq.property/heading",1858749415),heading__$1);
} else {
return G__61613;
}
}),blocks__$1);
}catch (e61612){var e = e61612;
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.format.block",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exception","exception",-335277064),e,new cljs.core.Keyword(null,"line","line",212345235),73], null)),e);
} else {
}

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capture-error","capture-error",583122432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),e,new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"Extract-blocks"], null)], null)], null));

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","extraction-error","block/extraction-error",1480039028)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));

return cljs.core.PersistentVector.EMPTY;
}});
frontend.format.block.parse_block = (function frontend$format$block$parse_block(p__61614){
var map__61615 = p__61614;
var map__61615__$1 = cljs.core.__destructure_map(map__61615);
var block = map__61615__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61615__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61615__$1,new cljs.core.Keyword("block","title","block/title",710445684));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61615__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var block__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521));
var format__$1 = (function (){var or__5142__auto__ = format;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"markdown","markdown",1227225089);
}
})();
var parse_config = frontend.format.mldoc.get_default_config(format__$1);
var blocks = (cljs.core.truth_(new cljs.core.Keyword("logseq.property.node","display-type","logseq.property.node/display-type",442446189).cljs$core$IFn$_invoke$arity$1(block__$1))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block__$1], null):(function (){var ast = frontend.format.to_edn(title,parse_config);
return frontend.format.block.extract_blocks(ast,title,format__$1,cljs.core.PersistentArrayMap.EMPTY);
})());
var new_block = cljs.core.first(blocks);
var block__$2 = (function (){var G__61616 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block__$1,new_block], 0));
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__61616,new cljs.core.Keyword("block","format","block/format",-1212045901));

})();
var block__$3 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(block__$2,new cljs.core.Keyword("block.temp","ast-body","block.temp/ast-body",-464258035),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","level","block/level",1182509971)], 0));
if(cljs.core.truth_(uuid)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block__$3,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid);
} else {
return block__$3;
}
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.format !== 'undefined') && (typeof frontend.format.block !== 'undefined') && (typeof frontend.format.block._STAR_blocks_ast_cache !== 'undefined')){
} else {
frontend.format.block._STAR_blocks_ast_cache = cljs.core.volatile_BANG_(frontend.common.cache.empty_lru((5000)));
}
frontend.format.block.markdown_heading_level = (function frontend$format$block$markdown_heading_level(content){
var temp__5825__auto__ = (function (){var G__61617 = content;
var G__61617__$1 = (((G__61617 == null))?null:clojure.string.triml(G__61617));
if((G__61617__$1 == null)){
return null;
} else {
return cljs.core.re_find(/^(#{1,6})\s+/,G__61617__$1);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var heading = temp__5825__auto__;
return cljs.core.count(cljs.core.second(heading));
} else {
return null;
}
});
frontend.format.block.parse_title_and_body_helper = (function frontend$format$block$parse_title_and_body_helper(_format,raw_content,content){
var parse_config = frontend.format.mldoc.get_default_config(new cljs.core.Keyword(null,"markdown","markdown",1227225089));
var ast = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,frontend.format.to_edn(content,parse_config));
var heading = ((logseq.graph_parser.block.heading_block_QMARK_(cljs.core.first(ast)))?cljs.core.second(cljs.core.first(ast)):null);
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(heading);
var heading_level = frontend.format.block.markdown_heading_level(raw_content);
var body = cljs.core.vec((cljs.core.truth_(title)?cljs.core.rest(ast):ast));
var body__$1 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.property.properties_ast_QMARK_,body);
var G__61618 = ((cljs.core.seq(body__$1))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block.temp","ast-body","block.temp/ast-body",-464258035),body__$1], null):cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core.truth_(title)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__61618,new cljs.core.Keyword("block.temp","ast-title","block.temp/ast-title",-940352067),title,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.temp","heading","block.temp/heading",1137221906),heading_level], 0));
} else {
return G__61618;
}
});
frontend.format.block.cached_parse_title_and_body_helper = frontend.common.cache.cache_fn(frontend.format.block._STAR_blocks_ast_cache,(function (format,raw_content,content){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [format,raw_content,content], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [format,raw_content,content], null)], null);
}),frontend.format.block.parse_title_and_body_helper);
frontend.format.block.parse_title_and_body = (function frontend$format$block$parse_title_and_body(var_args){
var G__61620 = arguments.length;
switch (G__61620) {
case 1:
return frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$1 = (function (block){
if(cljs.core.map_QMARK_(block)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block,frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),cljs.core.get.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword(null,"markdown","markdown",1227225089)),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block))], 0));
} else {
return null;
}
}));

(frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$3 = (function (_block_uuid,format,content){
if(clojure.string.blank_QMARK_(content)){
return null;
} else {
var raw_content = content;
var content__$1 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.config.block_pattern)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.triml(content)));
return frontend.format.block.cached_parse_title_and_body_helper(format,raw_content,content__$1);
}
}));

(frontend.format.block.parse_title_and_body.cljs$lang$maxFixedArity = 3);

frontend.format.block.break_line_paragraph_QMARK_ = (function frontend$format$block$break_line_paragraph_QMARK_(p__61622){
var vec__61623 = p__61622;
var typ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61623,(0),null);
var break_lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61623,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typ,"Paragraph")) && (cljs.core.every_QMARK_((function (p1__61621_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__61621_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Break_Line"], null));
}),break_lines)));
});
frontend.format.block.trim_paragraph_special_break_lines = (function frontend$format$block$trim_paragraph_special_break_lines(ast){
var vec__61628 = ast;
var typ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61628,(0),null);
var paras = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61628,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typ,"Paragraph")){
var indexed_paras = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,paras);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [typ,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__61627_SHARP_){
return cljs.core.last(p1__61627_SHARP_);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__61626_SHARP_){
var vec__61631 = p1__61626_SHARP_;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61631,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61631,(1),null);
return (!((((index > (0))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Break_Line"], null))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Timestamp",null,"Macro",null], null), null),cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(paras,(index - (1)))))))))));
}),indexed_paras))], null);
} else {
return ast;
}
});
frontend.format.block.trim_break_lines_BANG_ = (function frontend$format$block$trim_break_lines_BANG_(ast){
return cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(frontend.format.block.break_line_paragraph_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.format.block.trim_paragraph_special_break_lines,ast));
});

//# sourceMappingURL=frontend.format.block.js.map
