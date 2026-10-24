goog.provide('frontend.handler.export$.common_impl');
/**
 * dynamic var, state used for exporting
 */
frontend.handler.export$.common_impl._STAR_state_STAR_ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"current-level","current-level",-11925890),(1),new cljs.core.Keyword(null,"outside-em-symbol","outside-em-symbol",478063381),null,new cljs.core.Keyword(null,"indent-after-break-line?","indent-after-break-line?",-736379041),false,new cljs.core.Keyword(null,"replace-ref-embed","replace-ref-embed",-2123548135),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-level","current-level",-11925890),(1),new cljs.core.Keyword(null,"block-ref-replaced?","block-ref-replaced?",-939904476),false,new cljs.core.Keyword(null,"block&page-embed-replaced?","block&page-embed-replaced?",-180485858),false], null),new cljs.core.Keyword(null,"newline-after-block","newline-after-block",137428571),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-block-is-first-heading-block?","current-block-is-first-heading-block?",2033274655),true], null),new cljs.core.Keyword(null,"export-options","export-options",672321679),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"indent-style","indent-style",855468755),"dashes",new cljs.core.Keyword(null,"remove-page-ref-brackets?","remove-page-ref-brackets?",-276534720),false,new cljs.core.Keyword(null,"remove-emphasis?","remove-emphasis?",-1751965539),false,new cljs.core.Keyword(null,"remove-tags?","remove-tags?",690905372),false,new cljs.core.Keyword(null,"remove-properties?","remove-properties?",1053410556),true,new cljs.core.Keyword(null,"keep-only-level<=N","keep-only-level<=N",-1010734857),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"newline-after-block","newline-after-block",137428571),false], null)], null);
frontend.handler.export$.common_impl._STAR_block_ast_resolver_STAR_ = null;
frontend.handler.export$.common_impl._STAR_block_children_ast_resolver_STAR_ = null;
frontend.handler.export$.common_impl._STAR_page_ast_resolver_STAR_ = null;
frontend.handler.export$.common_impl.required_resolver = (function frontend$handler$export$common_impl$required_resolver(resolver,var_name){
if(cljs.core.truth_(resolver)){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)+" must be bound before replacing block or page embeds."))+"\n"+"resolver")));
}

return resolver;
});

frontend.handler.export$.common_impl.block_uuid__GT_ast = (function frontend$handler$export$common_impl$block_uuid__GT_ast(block_uuid){
var fexpr__65279 = frontend.handler.export$.common_impl.required_resolver(frontend.handler.export$.common_impl._STAR_block_ast_resolver_STAR_,"*block-ast-resolver*");
return (fexpr__65279.cljs$core$IFn$_invoke$arity$1 ? fexpr__65279.cljs$core$IFn$_invoke$arity$1(block_uuid) : fexpr__65279.call(null,block_uuid));
});
frontend.handler.export$.common_impl.block_uuid__GT_ast_with_children = (function frontend$handler$export$common_impl$block_uuid__GT_ast_with_children(block_uuid){
var fexpr__65280 = frontend.handler.export$.common_impl.required_resolver(frontend.handler.export$.common_impl._STAR_block_children_ast_resolver_STAR_,"*block-children-ast-resolver*");
return (fexpr__65280.cljs$core$IFn$_invoke$arity$1 ? fexpr__65280.cljs$core$IFn$_invoke$arity$1(block_uuid) : fexpr__65280.call(null,block_uuid));
});
frontend.handler.export$.common_impl.page_name__GT_ast = (function frontend$handler$export$common_impl$page_name__GT_ast(page_name){
var fexpr__65281 = frontend.handler.export$.common_impl.required_resolver(frontend.handler.export$.common_impl._STAR_page_ast_resolver_STAR_,"*page-ast-resolver*");
return (fexpr__65281.cljs$core$IFn$_invoke$arity$1 ? fexpr__65281.cljs$core$IFn$_invoke$arity$1(page_name) : fexpr__65281.call(null,page_name));
});
frontend.handler.export$.common_impl.update_level_in_block_ast_coll = (function frontend$handler$export$common_impl$update_level_in_block_ast_coll(block_ast_coll,origin_level){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (block_ast){
var vec__65283 = block_ast;
var ast_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65283,(0),null);
var ast_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65283,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ast_type,"Heading")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ast_type,cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast_content,new cljs.core.Keyword(null,"level","level",1290497552),(function (p1__65282_SHARP_){
return ((p1__65282_SHARP_ - (1)) + origin_level);
}))], null);
} else {
return block_ast;
}
}),block_ast_coll);
});
frontend.handler.export$.common_impl.plain_indent_inline_ast = (function frontend$handler$export$common_impl$plain_indent_inline_ast(var_args){
var args__5882__auto__ = [];
var len__5876__auto___65571 = arguments.length;
var i__5877__auto___65572 = (0);
while(true){
if((i__5877__auto___65572 < len__5876__auto___65571)){
args__5882__auto__.push((arguments[i__5877__auto___65572]));

var G__65573 = (i__5877__auto___65572 + (1));
i__5877__auto___65572 = G__65573;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.handler.export$.common_impl.plain_indent_inline_ast.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.handler.export$.common_impl.plain_indent_inline_ast.cljs$core$IFn$_invoke$arity$variadic = (function (level,p__65288){
var map__65289 = p__65288;
var map__65289__$1 = cljs.core.__destructure_map(map__65289);
var spaces = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65289__$1,new cljs.core.Keyword(null,"spaces","spaces",365984563),"  ");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Plain",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((level - (1)),"\t")))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(spaces))], null);
}));

(frontend.handler.export$.common_impl.plain_indent_inline_ast.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.handler.export$.common_impl.plain_indent_inline_ast.cljs$lang$applyTo = (function (seq65286){
var G__65287 = cljs.core.first(seq65286);
var seq65286__$1 = cljs.core.next(seq65286);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65287,seq65286__$1);
}));

frontend.handler.export$.common_impl.mk_paragraph_ast = (function frontend$handler$export$common_impl$mk_paragraph_ast(inline_coll,meta){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Paragraph",inline_coll], null),meta);
});
frontend.handler.export$.common_impl.priority__GT_string = (function frontend$handler$export$common_impl$priority__GT_string(priority){
return (""+"[#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(priority)+"]");
});
frontend.handler.export$.common_impl.repetition_to_string = (function frontend$handler$export$common_impl$repetition_to_string(p__65290){
var vec__65291 = p__65290;
var vec__65294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65291,(0),null);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65294,(0),null);
var vec__65297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65291,(1),null);
var duration = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65297,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65291,(2),null);
var kind__$1 = (function (){var G__65300 = kind;
switch (G__65300) {
case "Dotted":
return ".";

break;
case "Plus":
return "+";

break;
case "DoublePlus":
return "++";

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65300))));

}
})();
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(duration))))));
});
frontend.handler.export$.common_impl.timestamp_to_string = (function frontend$handler$export$common_impl$timestamp_to_string(p__65301){
var map__65302 = p__65301;
var map__65302__$1 = cljs.core.__destructure_map(map__65302);
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65302__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65302__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var repetition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65302__$1,new cljs.core.Keyword(null,"repetition","repetition",1938392115));
var wday = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65302__$1,new cljs.core.Keyword(null,"wday","wday",-543142502));
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65302__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var map__65303 = date;
var map__65303__$1 = cljs.core.__destructure_map(map__65303);
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65303__$1,new cljs.core.Keyword(null,"year","year",335913393));
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65303__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var day = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65303__$1,new cljs.core.Keyword(null,"day","day",-274800446));
var map__65304 = time;
var map__65304__$1 = cljs.core.__destructure_map(map__65304);
var hour = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65304__$1,new cljs.core.Keyword(null,"hour","hour",-555989214));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65304__$1,new cljs.core.Keyword(null,"min","min",444991522));
var vec__65305 = (cljs.core.truth_(active)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<",">"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null));
var open = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65305,(0),null);
var close = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65305,(1),null);
var repetition__$1 = (cljs.core.truth_(repetition)?(""+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.handler.export$.common_impl.repetition_to_string(repetition))):"");
var hour__$1 = (cljs.core.truth_(hour)?logseq.common.util.zero_pad(hour):null);
var min__$1 = (cljs.core.truth_(min)?logseq.common.util.zero_pad(min):null);
var time__$1 = (cljs.core.truth_((function (){var and__5140__auto__ = hour__$1;
if(cljs.core.truth_(and__5140__auto__)){
return min__$1;
} else {
return and__5140__auto__;
}
})())?logseq.common.util.format.cljs$core$IFn$_invoke$arity$variadic(" %s:%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hour__$1,min__$1], 0)):(cljs.core.truth_(hour__$1)?logseq.common.util.format.cljs$core$IFn$_invoke$arity$variadic(" %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hour__$1], 0)):""
));
return logseq.common.util.format.cljs$core$IFn$_invoke$arity$variadic("%s%s-%s-%s %s%s%s%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([open,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)),logseq.common.util.zero_pad(month),logseq.common.util.zero_pad(day),wday,time__$1,repetition__$1,close], 0));
});
frontend.handler.export$.common_impl.hashtag_value__GT_string = (function frontend$handler$export$common_impl$hashtag_value__GT_string(inline_coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (inline){
var vec__65308 = inline;
var ast_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65308,(0),null);
var ast_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65308,(1),null);
var G__65311 = ast_type;
switch (G__65311) {
case "Nested_link":
return new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(ast_content);

break;
case "Link":
return new cljs.core.Keyword(null,"full_text","full_text",1634289075).cljs$core$IFn$_invoke$arity$1(ast_content);

break;
case "Plain":
return ast_content;

break;
case "Macro":
var map__65312 = ast_content;
var map__65312__$1 = cljs.core.__destructure_map(map__65312);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65312__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var arguments$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65312__$1,new cljs.core.Keyword(null,"arguments","arguments",-1182834456));
return (""+"{{"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.seq(arguments$))?(""+"("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",arguments$))+")"):null))+"}}");

break;
default:
return null;

}
}),inline_coll));
});
/**
 * The inlines that replace inline: the referenced block's title for a block
 *   ref, or inline itself. A ref to a block that does not exist (or has no
 *   title) stays as written, `((uuid))`, so its text is not lost.
 */
frontend.handler.export$.common_impl.replace_block_reference_inline = (function frontend$handler$export$common_impl$replace_block_reference_inline(inline){
try{if(((cljs.core.vector_QMARK_(inline)) && ((cljs.core.count(inline) === 2)))){
try{var inline_0__65314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inline,(0));
if((inline_0__65314 === "Link")){
try{var inline_1__65315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inline,(1));
if((((!((inline_1__65315 == null))))?(((((inline_1__65315.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === inline_1__65315.cljs$core$ILookup$))))?true:(((!inline_1__65315.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,inline_1__65315):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,inline_1__65315))){
try{var inline_1__65315_url__65322 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inline_1__65315,new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(((cljs.core.vector_QMARK_(inline_1__65315_url__65322)) && ((cljs.core.count(inline_1__65315_url__65322) === 2)))){
try{var inline_1__65315_url__65322_0__65325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inline_1__65315_url__65322,(0));
if((inline_1__65315_url__65322_0__65325 === "Block_ref")){
var block_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inline_1__65315_url__65322,(1));
var temp__5823__auto__ = (function (){var G__65337 = frontend.handler.export$.common_impl.block_uuid__GT_ast(cljs.core.uuid(block_uuid));
var G__65337__$1 = (((G__65337 == null))?null:cljs.core.first(G__65337));
var G__65337__$2 = (((G__65337__$1 == null))?null:cljs.core.second(G__65337__$1));
var G__65337__$3 = (((G__65337__$2 == null))?null:new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(G__65337__$2));
var G__65337__$4 = (((G__65337__$3 == null))?null:cljs.core.seq(G__65337__$3));
if((G__65337__$4 == null)){
return null;
} else {
return cljs.core.vec(G__65337__$4);
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var title_inline_coll = temp__5823__auto__;
(frontend.handler.export$.common_impl._STAR_state_STAR_ = cljs.core.assoc_in(frontend.handler.export$.common_impl._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-ref-embed","replace-ref-embed",-2123548135),new cljs.core.Keyword(null,"block-ref-replaced?","block-ref-replaced?",-939904476)], null),true));

return title_inline_coll;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Plain",(""+"(("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_uuid)+"))")], null)], null);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e65336){if((e65336 instanceof Error)){
var e__64282__auto__ = e65336;
if((e__64282__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64282__auto__;
}
} else {
throw e65336;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65335){if((e65335 instanceof Error)){
var e__64282__auto__ = e65335;
if((e__64282__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64282__auto__;
}
} else {
throw e65335;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65330){if((e65330 instanceof Error)){
var e__64282__auto__ = e65330;
if((e__64282__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64282__auto__;
}
} else {
throw e65330;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65329){if((e65329 instanceof Error)){
var e__64282__auto__ = e65329;
if((e__64282__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64282__auto__;
}
} else {
throw e65329;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65328){if((e65328 instanceof Error)){
var e__64282__auto__ = e65328;
if((e__64282__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inline], null);
} else {
throw e__64282__auto__;
}
} else {
throw e65328;

}
}});
frontend.handler.export$.common_impl.replace_block_reference_in_heading = (function frontend$handler$export$common_impl$replace_block_reference_in_heading(p__65338){
var map__65339 = p__65338;
var map__65339__$1 = cljs.core.__destructure_map(map__65339);
var ast_content = map__65339__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65339__$1,new cljs.core.Keyword(null,"title","title",636505583));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast_content,new cljs.core.Keyword(null,"title","title",636505583),cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(frontend.handler.export$.common_impl.replace_block_reference_inline,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([title], 0))));
});
frontend.handler.export$.common_impl.replace_block_reference_in_paragraph = (function frontend$handler$export$common_impl$replace_block_reference_in_paragraph(inline_coll){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(frontend.handler.export$.common_impl.replace_block_reference_inline,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inline_coll], 0)));
});
frontend.handler.export$.common_impl.replace_block_reference_in_list = (function frontend$handler$export$common_impl$replace_block_reference_in_list(list_items){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__65340){
var map__65341 = p__65340;
var map__65341__$1 = cljs.core.__destructure_map(map__65341);
var item = map__65341__$1;
var block_ast_coll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65341__$1,new cljs.core.Keyword(null,"content","content",15833224));
var sub_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65341__$1,new cljs.core.Keyword(null,"items","items",1031954938));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(item,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common_impl.replace_block_references,block_ast_coll),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"items","items",1031954938),(frontend.handler.export$.common_impl.replace_block_reference_in_list.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.export$.common_impl.replace_block_reference_in_list.cljs$core$IFn$_invoke$arity$1(sub_items) : frontend.handler.export$.common_impl.replace_block_reference_in_list.call(null,sub_items))], 0));
}),list_items);
});
frontend.handler.export$.common_impl.replace_block_reference_in_quote = (function frontend$handler$export$common_impl$replace_block_reference_in_quote(block_ast_coll){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common_impl.replace_block_references,block_ast_coll);
});
frontend.handler.export$.common_impl.replace_block_reference_in_table = (function frontend$handler$export$common_impl$replace_block_reference_in_table(p__65342){
var map__65343 = p__65342;
var map__65343__$1 = cljs.core.__destructure_map(map__65343);
var table = map__65343__$1;
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65343__$1,new cljs.core.Keyword(null,"header","header",119441134));
var groups = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65343__$1,new cljs.core.Keyword(null,"groups","groups",-136896102));
var header_STAR_ = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (col){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(frontend.handler.export$.common_impl.replace_block_reference_inline,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([col], 0)));
}),header);
var groups_STAR_ = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (group){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (col){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(frontend.handler.export$.common_impl.replace_block_reference_inline,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([col], 0)));
}),row);
}),group);
}),groups);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(table,new cljs.core.Keyword(null,"header","header",119441134),header_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"groups","groups",-136896102),groups_STAR_], 0));
});
frontend.handler.export$.common_impl.replace_block_references = (function frontend$handler$export$common_impl$replace_block_references(block_ast){
var vec__65344 = block_ast;
var ast_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65344,(0),null);
var ast_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65344,(1),null);
var G__65347 = ast_type;
switch (G__65347) {
case "Heading":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ast_type,frontend.handler.export$.common_impl.replace_block_reference_in_heading(ast_content)], null);

break;
case "Paragraph":
return frontend.handler.export$.common_impl.mk_paragraph_ast(frontend.handler.export$.common_impl.replace_block_reference_in_paragraph(ast_content),cljs.core.meta(block_ast));

break;
case "List":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ast_type,frontend.handler.export$.common_impl.replace_block_reference_in_list(ast_content)], null);

break;
case "Quote":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ast_type,frontend.handler.export$.common_impl.replace_block_reference_in_quote(ast_content)], null);

break;
case "Table":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ast_type,frontend.handler.export$.common_impl.replace_block_reference_in_table(ast_content)], null);

break;
default:
return block_ast;

}
});
frontend.handler.export$.common_impl.replace_block_references_until_stable = (function frontend$handler$export$common_impl$replace_block_references_until_stable(block_ast){
var _STAR_state_STAR__orig_val__65348 = frontend.handler.export$.common_impl._STAR_state_STAR_;
var _STAR_state_STAR__temp_val__65349 = frontend.handler.export$.common_impl._STAR_state_STAR_;
(frontend.handler.export$.common_impl._STAR_state_STAR_ = _STAR_state_STAR__temp_val__65349);

try{var block_ast__$1 = block_ast;
while(true){
var block_ast_STAR_ = frontend.handler.export$.common_impl.replace_block_references(block_ast__$1);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common_impl._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-ref-embed","replace-ref-embed",-2123548135),new cljs.core.Keyword(null,"block-ref-replaced?","block-ref-replaced?",-939904476)], null)))){
(frontend.handler.export$.common_impl._STAR_state_STAR_ = cljs.core.assoc_in(frontend.handler.export$.common_impl._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-ref-embed","replace-ref-embed",-2123548135),new cljs.core.Keyword(null,"block-ref-replaced?","block-ref-replaced?",-939904476)], null),false));

var G__65589 = block_ast_STAR_;
block_ast__$1 = G__65589;
continue;
} else {
return block_ast_STAR_;
}
break;
}
}finally {(frontend.handler.export$.common_impl._STAR_state_STAR_ = _STAR_state_STAR__orig_val__65348);
}});
frontend.handler.export$.common_impl.replace_block_embeds_helper = (function frontend$handler$export$common_impl$replace_block_embeds_helper(current_paragraph_inlines,block_uuid,blocks_tcoll,level){
var block_uuid_STAR_ = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(block_uuid,(2),(cljs.core.count(block_uuid) - (2)));
var ast_coll = frontend.handler.export$.common_impl.update_level_in_block_ast_coll(frontend.handler.export$.common_impl.block_uuid__GT_ast_with_children(cljs.core.uuid(block_uuid_STAR_)),level);
var G__65351 = blocks_tcoll;
var G__65351__$1 = ((cljs.core.seq(current_paragraph_inlines))?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__65351,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Paragraph",current_paragraph_inlines], null)):G__65351);
return (function (p1__65350_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,p1__65350_SHARP_,ast_coll);
})(G__65351__$1);

});
frontend.handler.export$.common_impl.replace_page_embeds_helper = (function frontend$handler$export$common_impl$replace_page_embeds_helper(current_paragraph_inlines,page_name,blocks_tcoll,level){
var page_name_STAR_ = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(page_name,(2),(cljs.core.count(page_name) - (2)));
var ast_coll = frontend.handler.export$.common_impl.update_level_in_block_ast_coll(frontend.handler.export$.common_impl.page_name__GT_ast(page_name_STAR_),level);
var G__65355 = blocks_tcoll;
var G__65355__$1 = ((cljs.core.seq(current_paragraph_inlines))?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__65355,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Paragraph",current_paragraph_inlines], null)):G__65355);
return (function (p1__65353_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,p1__65353_SHARP_,ast_coll);
})(G__65355__$1);

});
frontend.handler.export$.common_impl.replace_block_AMPERSAND_page_embeds_in_heading = (function frontend$handler$export$common_impl$replace_block_AMPERSAND_page_embeds_in_heading(p__65357){
var map__65358 = p__65357;
var map__65358__$1 = cljs.core.__destructure_map(map__65358);
var ast_content = map__65358__$1;
var inline_coll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65358__$1,new cljs.core.Keyword(null,"title","title",636505583));
var origin_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65358__$1,new cljs.core.Keyword(null,"level","level",1290497552));
(frontend.handler.export$.common_impl._STAR_state_STAR_ = cljs.core.assoc_in(frontend.handler.export$.common_impl._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-ref-embed","replace-ref-embed",-2123548135),new cljs.core.Keyword(null,"current-level","current-level",-11925890)], null),origin_level));

if(cljs.core.empty_QMARK_(inline_coll)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Heading",ast_content], null)], null);
} else {
var G__65362 = inline_coll;
var vec__65363 = G__65362;
var seq__65364 = cljs.core.seq(vec__65363);
var first__65365 = cljs.core.first(seq__65364);
var seq__65364__$1 = cljs.core.next(seq__65364);
var inline = first__65365;
var other_inlines = seq__65364__$1;
var heading_exist_QMARK_ = false;
var current_paragraph_inlines = cljs.core.PersistentVector.EMPTY;
var r = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__65362__$1 = G__65362;
var heading_exist_QMARK___$1 = heading_exist_QMARK_;
var current_paragraph_inlines__$1 = current_paragraph_inlines;
var r__$1 = r;
while(true){
var vec__65384 = G__65362__$1;
var seq__65385 = cljs.core.seq(vec__65384);
var first__65386 = cljs.core.first(seq__65385);
var seq__65385__$1 = cljs.core.next(seq__65385);
var inline__$1 = first__65386;
var other_inlines__$1 = seq__65385__$1;
var heading_exist_QMARK___$2 = heading_exist_QMARK___$1;
var current_paragraph_inlines__$2 = current_paragraph_inlines__$1;
var r__$2 = r__$1;
if(cljs.core.not(inline__$1)){
return cljs.core.persistent_BANG_(((cljs.core.seq(current_paragraph_inlines__$2))?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r__$2,((heading_exist_QMARK___$2)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Paragraph",current_paragraph_inlines__$2], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Heading",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast_content,new cljs.core.Keyword(null,"title","title",636505583),current_paragraph_inlines__$2)], null))):r__$2));
} else {
if(((cljs.core.vector_QMARK_(inline__$1)) && ((cljs.core.count(inline__$1) === 2)))){
var inline_0__65388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inline__$1,(0));
if((inline_0__65388 === "Macro")){
var inline_1__65389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inline__$1,(1));
if((((!((inline_1__65389 == null))))?(((((inline_1__65389.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === inline_1__65389.cljs$core$ILookup$))))?true:(((!inline_1__65389.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,inline_1__65389):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,inline_1__65389))){
var inline_1__65389_arguments__65393 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inline_1__65389,new cljs.core.Keyword(null,"arguments","arguments",-1182834456),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(((cljs.core.vector_QMARK_(inline_1__65389_arguments__65393)) && ((cljs.core.count(inline_1__65389_arguments__65393) === 1)))){
var inline_1__65389_name__65394 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inline_1__65389,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((inline_1__65389_name__65394 === "embed")){
var block_uuid_or_page_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inline_1__65389_arguments__65393,(0));
if(((clojure.string.starts_with_QMARK_(block_uuid_or_page_name,"((")) && (clojure.string.ends_with_QMARK_(block_uuid_or_page_name,"))")))){
(frontend.handler.export$.common_impl._STAR_state_STAR_ = cljs.core.assoc_in(frontend.handler.export$.common_impl._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-ref-embed","replace-ref-embed",-2123548135),new cljs.core.Keyword(null,"block&page-embed-replaced?","block&page-embed-replaced?",-180485858)], null),true));

var G__65592 = other_inlines__$1;
var G__65593 = true;
var G__65594 = cljs.core.PersistentVector.EMPTY;
var G__65595 = frontend.handler.export$.common_impl.replace_block_embeds_helper(current_paragraph_inlines__$2,block_uuid_or_page_name,r__$2,origin_level);
G__65362__$1 = G__65592;
heading_exist_QMARK___$1 = G__65593;
current_paragraph_inlines__$1 = G__65594;
r__$1 = G__65595;
continue;
} else {
if(((clojure.string.starts_with_QMARK_(block_uuid_or_page_name,"[[")) && (clojure.string.ends_with_QMARK_(block_uuid_or_page_name,"]]")))){
(frontend.handler.export$.common_impl._STAR_state_STAR_ = cljs.core.assoc_in(frontend.handler.export$.common_impl._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-ref-embed","replace-ref-embed",-2123548135),new cljs.core.Keyword(null,"block&page-embed-replaced?","block&page-embed-replaced?",-180485858)], null),true));

var G__65596 = other_inlines__$1;
var G__65597 = true;
var G__65598 = cljs.core.PersistentVector.EMPTY;
var G__65599 = frontend.handler.export$.common_impl.replace_page_embeds_helper(current_paragraph_inlines__$2,block_uuid_or_page_name,r__$2,origin_level);
G__65362__$1 = G__65596;
heading_exist_QMARK___$1 = G__65597;
current_paragraph_inlines__$1 = G__65598;
r__$1 = G__65599;
continue;
} else {
var G__65600 = other_inlines__$1;
var G__65601 = heading_exist_QMARK___$2;
var G__65602 = current_paragraph_inlines__$2;
var G__65603 = r__$2;
G__65362__$1 = G__65600;
heading_exist_QMARK___$1 = G__65601;
current_paragraph_inlines__$1 = G__65602;
r__$1 = G__65603;
continue;

}
}
} else {
var current_paragraph_inlines_STAR_ = ((((cljs.core.empty_QMARK_(current_paragraph_inlines__$2)) && (heading_exist_QMARK___$2)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines__$2,frontend.handler.export$.common_impl.plain_indent_inline_ast(origin_level)):current_paragraph_inlines__$2);
var G__65604 = other_inlines__$1;
var G__65605 = heading_exist_QMARK___$2;
var G__65606 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines_STAR_,inline__$1);
var G__65607 = r__$2;
G__65362__$1 = G__65604;
heading_exist_QMARK___$1 = G__65605;
current_paragraph_inlines__$1 = G__65606;
r__$1 = G__65607;
continue;

}
} else {
var current_paragraph_inlines_STAR_ = ((((cljs.core.empty_QMARK_(current_paragraph_inlines__$2)) && (heading_exist_QMARK___$2)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines__$2,frontend.handler.export$.common_impl.plain_indent_inline_ast(origin_level)):current_paragraph_inlines__$2);
var G__65608 = other_inlines__$1;
var G__65609 = heading_exist_QMARK___$2;
var G__65610 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines_STAR_,inline__$1);
var G__65611 = r__$2;
G__65362__$1 = G__65608;
heading_exist_QMARK___$1 = G__65609;
current_paragraph_inlines__$1 = G__65610;
r__$1 = G__65611;
continue;

}
} else {
var current_paragraph_inlines_STAR_ = ((((cljs.core.empty_QMARK_(current_paragraph_inlines__$2)) && (heading_exist_QMARK___$2)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines__$2,frontend.handler.export$.common_impl.plain_indent_inline_ast(origin_level)):current_paragraph_inlines__$2);
var G__65612 = other_inlines__$1;
var G__65613 = heading_exist_QMARK___$2;
var G__65614 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines_STAR_,inline__$1);
var G__65615 = r__$2;
G__65362__$1 = G__65612;
heading_exist_QMARK___$1 = G__65613;
current_paragraph_inlines__$1 = G__65614;
r__$1 = G__65615;
continue;

}
} else {
var current_paragraph_inlines_STAR_ = ((((cljs.core.empty_QMARK_(current_paragraph_inlines__$2)) && (heading_exist_QMARK___$2)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines__$2,frontend.handler.export$.common_impl.plain_indent_inline_ast(origin_level)):current_paragraph_inlines__$2);
var G__65616 = other_inlines__$1;
var G__65617 = heading_exist_QMARK___$2;
var G__65618 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines_STAR_,inline__$1);
var G__65619 = r__$2;
G__65362__$1 = G__65616;
heading_exist_QMARK___$1 = G__65617;
current_paragraph_inlines__$1 = G__65618;
r__$1 = G__65619;
continue;

}
} else {
var current_paragraph_inlines_STAR_ = ((((cljs.core.empty_QMARK_(current_paragraph_inlines__$2)) && (heading_exist_QMARK___$2)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines__$2,frontend.handler.export$.common_impl.plain_indent_inline_ast(origin_level)):current_paragraph_inlines__$2);
var G__65620 = other_inlines__$1;
var G__65621 = heading_exist_QMARK___$2;
var G__65622 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines_STAR_,inline__$1);
var G__65623 = r__$2;
G__65362__$1 = G__65620;
heading_exist_QMARK___$1 = G__65621;
current_paragraph_inlines__$1 = G__65622;
r__$1 = G__65623;
continue;

}
}
break;
}
}
});
frontend.handler.export$.common_impl.replace_block_AMPERSAND_page_embeds_in_paragraph = (function frontend$handler$export$common_impl$replace_block_AMPERSAND_page_embeds_in_paragraph(inline_coll,meta){
var current_level = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common_impl._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-ref-embed","replace-ref-embed",-2123548135),new cljs.core.Keyword(null,"current-level","current-level",-11925890)], null));
var G__65400 = inline_coll;
var vec__65401 = G__65400;
var seq__65402 = cljs.core.seq(vec__65401);
var first__65403 = cljs.core.first(seq__65402);
var seq__65402__$1 = cljs.core.next(seq__65402);
var inline = first__65403;
var other_inlines = seq__65402__$1;
var current_paragraph_inlines = cljs.core.PersistentVector.EMPTY;
var just_after_embed_QMARK_ = false;
var blocks = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__65400__$1 = G__65400;
var current_paragraph_inlines__$1 = current_paragraph_inlines;
var just_after_embed_QMARK___$1 = just_after_embed_QMARK_;
var blocks__$1 = blocks;
while(true){
var vec__65420 = G__65400__$1;
var seq__65421 = cljs.core.seq(vec__65420);
var first__65422 = cljs.core.first(seq__65421);
var seq__65421__$1 = cljs.core.next(seq__65421);
var inline__$1 = first__65422;
var other_inlines__$1 = seq__65421__$1;
var current_paragraph_inlines__$2 = current_paragraph_inlines__$1;
var just_after_embed_QMARK___$2 = just_after_embed_QMARK___$1;
var blocks__$2 = blocks__$1;
if(cljs.core.not(inline__$1)){
var vec__65423 = cljs.core.persistent_BANG_(((cljs.core.seq(current_paragraph_inlines__$2))?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(blocks__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Paragraph",current_paragraph_inlines__$2], null)):blocks__$2));
var seq__65424 = cljs.core.seq(vec__65423);
var first__65425 = cljs.core.first(seq__65424);
var seq__65424__$1 = cljs.core.next(seq__65424);
var first_block = first__65425;
var other_blocks = seq__65424__$1;
if(cljs.core.truth_(first_block)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.with_meta(first_block,meta),other_blocks);
} else {
return cljs.core.PersistentVector.EMPTY;
}
} else {
if(((cljs.core.vector_QMARK_(inline__$1)) && ((cljs.core.count(inline__$1) === 2)))){
var inline_0__65427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inline__$1,(0));
if((inline_0__65427 === "Macro")){
var inline_1__65428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inline__$1,(1));
if((((!((inline_1__65428 == null))))?(((((inline_1__65428.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === inline_1__65428.cljs$core$ILookup$))))?true:(((!inline_1__65428.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,inline_1__65428):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,inline_1__65428))){
var inline_1__65428_arguments__65432 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inline_1__65428,new cljs.core.Keyword(null,"arguments","arguments",-1182834456),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(((cljs.core.vector_QMARK_(inline_1__65428_arguments__65432)) && ((cljs.core.count(inline_1__65428_arguments__65432) === 1)))){
var inline_1__65428_name__65433 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inline_1__65428,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((inline_1__65428_name__65433 === "embed")){
var block_uuid_or_page_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inline_1__65428_arguments__65432,(0));
if(((clojure.string.starts_with_QMARK_(block_uuid_or_page_name,"((")) && (clojure.string.ends_with_QMARK_(block_uuid_or_page_name,"))")))){
(frontend.handler.export$.common_impl._STAR_state_STAR_ = cljs.core.assoc_in(frontend.handler.export$.common_impl._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-ref-embed","replace-ref-embed",-2123548135),new cljs.core.Keyword(null,"block&page-embed-replaced?","block&page-embed-replaced?",-180485858)], null),true));

var G__65628 = other_inlines__$1;
var G__65629 = cljs.core.PersistentVector.EMPTY;
var G__65630 = true;
var G__65631 = frontend.handler.export$.common_impl.replace_block_embeds_helper(current_paragraph_inlines__$2,block_uuid_or_page_name,blocks__$2,current_level);
G__65400__$1 = G__65628;
current_paragraph_inlines__$1 = G__65629;
just_after_embed_QMARK___$1 = G__65630;
blocks__$1 = G__65631;
continue;
} else {
if(((clojure.string.starts_with_QMARK_(block_uuid_or_page_name,"[[")) && (clojure.string.ends_with_QMARK_(block_uuid_or_page_name,"]]")))){
(frontend.handler.export$.common_impl._STAR_state_STAR_ = cljs.core.assoc_in(frontend.handler.export$.common_impl._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-ref-embed","replace-ref-embed",-2123548135),new cljs.core.Keyword(null,"block&page-embed-replaced?","block&page-embed-replaced?",-180485858)], null),true));

var G__65632 = other_inlines__$1;
var G__65633 = cljs.core.PersistentVector.EMPTY;
var G__65634 = true;
var G__65635 = frontend.handler.export$.common_impl.replace_page_embeds_helper(current_paragraph_inlines__$2,block_uuid_or_page_name,blocks__$2,current_level);
G__65400__$1 = G__65632;
current_paragraph_inlines__$1 = G__65633;
just_after_embed_QMARK___$1 = G__65634;
blocks__$1 = G__65635;
continue;
} else {
var G__65638 = other_inlines__$1;
var G__65639 = current_paragraph_inlines__$2;
var G__65640 = false;
var G__65641 = blocks__$2;
G__65400__$1 = G__65638;
current_paragraph_inlines__$1 = G__65639;
just_after_embed_QMARK___$1 = G__65640;
blocks__$1 = G__65641;
continue;

}
}
} else {
var current_paragraph_inlines_STAR_ = ((just_after_embed_QMARK___$2)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines__$2,frontend.handler.export$.common_impl.plain_indent_inline_ast(current_level)):current_paragraph_inlines__$2);
var G__65642 = other_inlines__$1;
var G__65643 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines_STAR_,inline__$1);
var G__65644 = false;
var G__65645 = blocks__$2;
G__65400__$1 = G__65642;
current_paragraph_inlines__$1 = G__65643;
just_after_embed_QMARK___$1 = G__65644;
blocks__$1 = G__65645;
continue;

}
} else {
var current_paragraph_inlines_STAR_ = ((just_after_embed_QMARK___$2)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines__$2,frontend.handler.export$.common_impl.plain_indent_inline_ast(current_level)):current_paragraph_inlines__$2);
var G__65646 = other_inlines__$1;
var G__65647 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines_STAR_,inline__$1);
var G__65648 = false;
var G__65649 = blocks__$2;
G__65400__$1 = G__65646;
current_paragraph_inlines__$1 = G__65647;
just_after_embed_QMARK___$1 = G__65648;
blocks__$1 = G__65649;
continue;

}
} else {
var current_paragraph_inlines_STAR_ = ((just_after_embed_QMARK___$2)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines__$2,frontend.handler.export$.common_impl.plain_indent_inline_ast(current_level)):current_paragraph_inlines__$2);
var G__65650 = other_inlines__$1;
var G__65651 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines_STAR_,inline__$1);
var G__65652 = false;
var G__65653 = blocks__$2;
G__65400__$1 = G__65650;
current_paragraph_inlines__$1 = G__65651;
just_after_embed_QMARK___$1 = G__65652;
blocks__$1 = G__65653;
continue;

}
} else {
var current_paragraph_inlines_STAR_ = ((just_after_embed_QMARK___$2)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines__$2,frontend.handler.export$.common_impl.plain_indent_inline_ast(current_level)):current_paragraph_inlines__$2);
var G__65654 = other_inlines__$1;
var G__65655 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines_STAR_,inline__$1);
var G__65656 = false;
var G__65657 = blocks__$2;
G__65400__$1 = G__65654;
current_paragraph_inlines__$1 = G__65655;
just_after_embed_QMARK___$1 = G__65656;
blocks__$1 = G__65657;
continue;

}
} else {
var current_paragraph_inlines_STAR_ = ((just_after_embed_QMARK___$2)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines__$2,frontend.handler.export$.common_impl.plain_indent_inline_ast(current_level)):current_paragraph_inlines__$2);
var G__65658 = other_inlines__$1;
var G__65659 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines_STAR_,inline__$1);
var G__65660 = false;
var G__65661 = blocks__$2;
G__65400__$1 = G__65658;
current_paragraph_inlines__$1 = G__65659;
just_after_embed_QMARK___$1 = G__65660;
blocks__$1 = G__65661;
continue;

}
}
break;
}
});
frontend.handler.export$.common_impl.replace_block_AMPERSAND_page_embeds_in_list_helper = (function frontend$handler$export$common_impl$replace_block_AMPERSAND_page_embeds_in_list_helper(list_items){
var _STAR_state_STAR__orig_val__65436 = frontend.handler.export$.common_impl._STAR_state_STAR_;
var _STAR_state_STAR__temp_val__65437 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(frontend.handler.export$.common_impl._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-ref-embed","replace-ref-embed",-2123548135),new cljs.core.Keyword(null,"current-level","current-level",-11925890)], null),cljs.core.inc);
(frontend.handler.export$.common_impl._STAR_state_STAR_ = _STAR_state_STAR__temp_val__65437);

try{return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__65438){
var map__65439 = p__65438;
var map__65439__$1 = cljs.core.__destructure_map(map__65439);
var item = map__65439__$1;
var block_ast_coll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65439__$1,new cljs.core.Keyword(null,"content","content",15833224));
var sub_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65439__$1,new cljs.core.Keyword(null,"items","items",1031954938));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(item,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(frontend.handler.export$.common_impl.replace_block_AMPERSAND_page_embeds,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_ast_coll], 0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"items","items",1031954938),(frontend.handler.export$.common_impl.replace_block_AMPERSAND_page_embeds_in_list_helper.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.export$.common_impl.replace_block_AMPERSAND_page_embeds_in_list_helper.cljs$core$IFn$_invoke$arity$1(sub_items) : frontend.handler.export$.common_impl.replace_block_AMPERSAND_page_embeds_in_list_helper.call(null,sub_items))], 0));
}),list_items);
}finally {(frontend.handler.export$.common_impl._STAR_state_STAR_ = _STAR_state_STAR__orig_val__65436);
}});
frontend.handler.export$.common_impl.replace_block_AMPERSAND_page_embeds_in_list = (function frontend$handler$export$common_impl$replace_block_AMPERSAND_page_embeds_in_list(list_items){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["List",frontend.handler.export$.common_impl.replace_block_AMPERSAND_page_embeds_in_list_helper(list_items)], null)], null);
});
frontend.handler.export$.common_impl.replace_block_AMPERSAND_page_embeds_in_quote = (function frontend$handler$export$common_impl$replace_block_AMPERSAND_page_embeds_in_quote(block_ast_coll){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,["Quote",cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(frontend.handler.export$.common_impl.replace_block_AMPERSAND_page_embeds,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_ast_coll], 0)))],null))],null));
});
frontend.handler.export$.common_impl.replace_block_AMPERSAND_page_embeds = (function frontend$handler$export$common_impl$replace_block_AMPERSAND_page_embeds(block_ast){
var vec__65444 = block_ast;
var ast_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65444,(0),null);
var ast_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65444,(1),null);
var G__65447 = ast_type;
switch (G__65447) {
case "Heading":
return frontend.handler.export$.common_impl.replace_block_AMPERSAND_page_embeds_in_heading(ast_content);

break;
case "Paragraph":
return frontend.handler.export$.common_impl.replace_block_AMPERSAND_page_embeds_in_paragraph(ast_content,cljs.core.meta(block_ast));

break;
case "List":
return frontend.handler.export$.common_impl.replace_block_AMPERSAND_page_embeds_in_list(ast_content);

break;
case "Quote":
return frontend.handler.export$.common_impl.replace_block_AMPERSAND_page_embeds_in_quote(ast_content);

break;
case "Table":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_ast], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_ast], null);

}
});
/**
 * add meta :embed-depth to the embed replaced block-ast,
 *   to avoid too deep block-ref&embed (or maybe it's a cycle)
 */
frontend.handler.export$.common_impl.replace_block_AMPERSAND_page_reference_AMPERSAND_embed = (function frontend$handler$export$common_impl$replace_block_AMPERSAND_page_reference_AMPERSAND_embed(block_ast_coll){
var block_ast_coll__$1 = block_ast_coll;
var result_block_ast_tcoll = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var block_ast_coll_to_replace_references = cljs.core.PersistentVector.EMPTY;
var block_ast_coll_to_replace_embeds = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq(block_ast_coll_to_replace_references)){
var vec__65463 = block_ast_coll_to_replace_references;
var seq__65464 = cljs.core.seq(vec__65463);
var first__65465 = cljs.core.first(seq__65464);
var seq__65464__$1 = cljs.core.next(seq__65464);
var block_ast_to_replace_ref = first__65465;
var other_block_asts_to_replace_ref = seq__65464__$1;
var embed_depth = new cljs.core.Keyword(null,"embed-depth","embed-depth",874062386).cljs$core$IFn$_invoke$arity$2(cljs.core.meta(block_ast_to_replace_ref),(0));
var block_ast_replaced = cljs.core.with_meta(frontend.handler.export$.common_impl.replace_block_references_until_stable(block_ast_to_replace_ref),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"embed-depth","embed-depth",874062386),embed_depth], null));
if((embed_depth >= (5))){
var G__65666 = block_ast_coll__$1;
var G__65667 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result_block_ast_tcoll,block_ast_replaced);
var G__65668 = cljs.core.vec(other_block_asts_to_replace_ref);
var G__65669 = block_ast_coll_to_replace_embeds;
block_ast_coll__$1 = G__65666;
result_block_ast_tcoll = G__65667;
block_ast_coll_to_replace_references = G__65668;
block_ast_coll_to_replace_embeds = G__65669;
continue;
} else {
var G__65671 = block_ast_coll__$1;
var G__65672 = result_block_ast_tcoll;
var G__65673 = cljs.core.vec(other_block_asts_to_replace_ref);
var G__65674 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block_ast_coll_to_replace_embeds,block_ast_replaced);
block_ast_coll__$1 = G__65671;
result_block_ast_tcoll = G__65672;
block_ast_coll_to_replace_references = G__65673;
block_ast_coll_to_replace_embeds = G__65674;
continue;
}
} else {
if(cljs.core.seq(block_ast_coll_to_replace_embeds)){
var vec__65466 = block_ast_coll_to_replace_embeds;
var seq__65467 = cljs.core.seq(vec__65466);
var first__65468 = cljs.core.first(seq__65467);
var seq__65467__$1 = cljs.core.next(seq__65467);
var block_ast_to_replace_embed = first__65468;
var other_block_asts_to_replace_embed = seq__65467__$1;
var embed_depth = new cljs.core.Keyword(null,"embed-depth","embed-depth",874062386).cljs$core$IFn$_invoke$arity$2(cljs.core.meta(block_ast_to_replace_embed),(0));
var block_ast_coll_replaced = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (block_ast_coll__$1,result_block_ast_tcoll,block_ast_coll_to_replace_references,block_ast_coll_to_replace_embeds,vec__65466,seq__65467,first__65468,seq__65467__$1,block_ast_to_replace_embed,other_block_asts_to_replace_embed,embed_depth){
return (function (p1__65449_SHARP_){
return cljs.core.with_meta(p1__65449_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"embed-depth","embed-depth",874062386),(embed_depth + (1))], null));
});})(block_ast_coll__$1,result_block_ast_tcoll,block_ast_coll_to_replace_references,block_ast_coll_to_replace_embeds,vec__65466,seq__65467,first__65468,seq__65467__$1,block_ast_to_replace_embed,other_block_asts_to_replace_embed,embed_depth))
,frontend.handler.export$.common_impl.replace_block_AMPERSAND_page_embeds(block_ast_to_replace_embed));
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common_impl._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-ref-embed","replace-ref-embed",-2123548135),new cljs.core.Keyword(null,"block&page-embed-replaced?","block&page-embed-replaced?",-180485858)], null)))){
(frontend.handler.export$.common_impl._STAR_state_STAR_ = cljs.core.assoc_in(frontend.handler.export$.common_impl._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-ref-embed","replace-ref-embed",-2123548135),new cljs.core.Keyword(null,"block&page-embed-replaced?","block&page-embed-replaced?",-180485858)], null),false));

var G__65677 = block_ast_coll__$1;
var G__65678 = result_block_ast_tcoll;
var G__65679 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(block_ast_coll_to_replace_references,block_ast_coll_replaced));
var G__65680 = cljs.core.vec(other_block_asts_to_replace_embed);
block_ast_coll__$1 = G__65677;
result_block_ast_tcoll = G__65678;
block_ast_coll_to_replace_references = G__65679;
block_ast_coll_to_replace_embeds = G__65680;
continue;
} else {
var G__65681 = block_ast_coll__$1;
var G__65682 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,result_block_ast_tcoll,block_ast_coll_replaced);
var G__65683 = cljs.core.vec(block_ast_coll_to_replace_references);
var G__65684 = cljs.core.vec(other_block_asts_to_replace_embed);
block_ast_coll__$1 = G__65681;
result_block_ast_tcoll = G__65682;
block_ast_coll_to_replace_references = G__65683;
block_ast_coll_to_replace_embeds = G__65684;
continue;
}
} else {
var vec__65471 = block_ast_coll__$1;
var seq__65472 = cljs.core.seq(vec__65471);
var first__65473 = cljs.core.first(seq__65472);
var seq__65472__$1 = cljs.core.next(seq__65472);
var block_ast = first__65473;
var other_block_ast = seq__65472__$1;
if(cljs.core.not(block_ast)){
return cljs.core.persistent_BANG_(result_block_ast_tcoll);
} else {
var G__65685 = other_block_ast;
var G__65686 = result_block_ast_tcoll;
var G__65687 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block_ast_coll_to_replace_references,block_ast);
var G__65688 = cljs.core.vec(block_ast_coll_to_replace_embeds);
block_ast_coll__$1 = G__65685;
result_block_ast_tcoll = G__65686;
block_ast_coll_to_replace_references = G__65687;
block_ast_coll_to_replace_embeds = G__65688;
continue;
}

}
}
break;
}
});
/**
 * [[ast-type ast-content] _pos] -> [ast-type ast-content]
 */
frontend.handler.export$.common_impl.remove_block_ast_pos = cljs.core.first;
frontend.handler.export$.common_impl.Properties_block_ast_QMARK_ = (function frontend$handler$export$common_impl$Properties_block_ast_QMARK_(p__65475){
var vec__65476 = p__65475;
var tp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65476,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65476,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tp,"Properties");
});
/**
 * works on block-ast
 *   replace all heading with paragraph when indent-style is no-indent
 */
frontend.handler.export$.common_impl.replace_Heading_with_Paragraph = (function frontend$handler$export$common_impl$replace_Heading_with_Paragraph(heading_ast){
var vec__65480 = heading_ast;
var heading_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65480,(0),null);
var map__65483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65480,(1),null);
var map__65483__$1 = cljs.core.__destructure_map(map__65483);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65483__$1,new cljs.core.Keyword(null,"title","title",636505583));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65483__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65483__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65483__$1,new cljs.core.Keyword(null,"size","size",1098693007));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(heading_type,"Heading")){
var inline_coll = (function (){var G__65484 = title;
var G__65484__$1 = (cljs.core.truth_(priority)?cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Plain",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.handler.export$.common_impl.priority__GT_string(priority))+" ")], null),G__65484):G__65484);
var G__65484__$2 = (cljs.core.truth_(marker)?cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Plain",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(marker)+" ")], null),G__65484__$1):G__65484__$1);
var G__65484__$3 = (cljs.core.truth_(size)?cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Plain",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(size,"#")))+" ")], null),G__65484__$2):G__65484__$2);
return cljs.core.vec(G__65484__$3);

})();
return frontend.handler.export$.common_impl.mk_paragraph_ast(inline_coll,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"origin-ast","origin-ast",915928394),heading_ast], null));
} else {
return heading_ast;
}
});
frontend.handler.export$.common_impl.keep_only_level_LT__EQ_n = (function frontend$handler$export$common_impl$keep_only_level_LT__EQ_n(block_ast_coll,n){
return cljs.core.persistent_BANG_(new cljs.core.Keyword(null,"result-ast-tcoll","result-ast-tcoll",1530092637).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__65486,ast){
var map__65487 = p__65486;
var map__65487__$1 = cljs.core.__destructure_map(map__65487);
var r = map__65487__$1;
var result_ast_tcoll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65487__$1,new cljs.core.Keyword(null,"result-ast-tcoll","result-ast-tcoll",1530092637));
var accepted_heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65487__$1,new cljs.core.Keyword(null,"accepted-heading","accepted-heading",-1816434288));
var vec__65488 = ast;
var heading_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65488,(0),null);
var map__65491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65488,(1),null);
var map__65491__$1 = cljs.core.__destructure_map(map__65491);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65491__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var is_heading_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(heading_type,"Heading");
if(cljs.core.truth_((function (){var and__5140__auto__ = (!(is_heading_QMARK_));
if(and__5140__auto__){
return accepted_heading;
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result-ast-tcoll","result-ast-tcoll",1530092637),cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result_ast_tcoll,ast),new cljs.core.Keyword(null,"accepted-heading","accepted-heading",-1816434288),accepted_heading], null);
} else {
if((((!(is_heading_QMARK_))) && (cljs.core.not(accepted_heading)))){
return r;
} else {
if(((is_heading_QMARK_) && ((level <= n)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result-ast-tcoll","result-ast-tcoll",1530092637),cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result_ast_tcoll,ast),new cljs.core.Keyword(null,"accepted-heading","accepted-heading",-1816434288),true], null);
} else {
if(((is_heading_QMARK_) && ((level > n)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result-ast-tcoll","result-ast-tcoll",1530092637),result_ast_tcoll,new cljs.core.Keyword(null,"accepted-heading","accepted-heading",-1816434288),false], null);
} else {
return null;
}
}
}
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result-ast-tcoll","result-ast-tcoll",1530092637),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"accepted-heading","accepted-heading",-1816434288),false], null),block_ast_coll)));
});
/**
 * :mapcat-fns-on-inline-ast
 */
frontend.handler.export$.common_impl.remove_emphasis = (function frontend$handler$export$common_impl$remove_emphasis(inline_ast){
var vec__65492 = inline_ast;
var ast_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65492,(0),null);
var ast_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65492,(1),null);
var G__65495 = ast_type;
switch (G__65495) {
case "Emphasis":
var vec__65496 = ast_content;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65496,(0),null);
var inline_coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65496,(1),null);
return inline_coll;

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inline_ast], null);

}
});
/**
 * :map-fns-on-inline-ast
 */
frontend.handler.export$.common_impl.remove_page_ref_brackets = (function frontend$handler$export$common_impl$remove_page_ref_brackets(inline_ast){
var vec__65499 = inline_ast;
var ast_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65499,(0),null);
var ast_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65499,(1),null);
var G__65502 = ast_type;
switch (G__65502) {
case "Link":
var map__65503 = ast_content;
var map__65503__$1 = cljs.core.__destructure_map(map__65503);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65503__$1,new cljs.core.Keyword(null,"url","url",276297046));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65503__$1,new cljs.core.Keyword(null,"label","label",1718410804));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Page_ref",cljs.core.first(url))) && (((cljs.core.empty_QMARK_(label)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(label,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Plain",""], null)], null))))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Plain",cljs.core.second(url)], null);
} else {
return inline_ast;
}

break;
default:
return inline_ast;

}
});
/**
 * :mapcat-fns-on-inline-ast
 */
frontend.handler.export$.common_impl.remove_tags = (function frontend$handler$export$common_impl$remove_tags(inline_ast){
var vec__65504 = inline_ast;
var ast_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65504,(0),null);
var _ast_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65504,(1),null);
var G__65507 = ast_type;
switch (G__65507) {
case "Tag":
return cljs.core.PersistentVector.EMPTY;

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inline_ast], null);

}
});
frontend.handler.export$.common_impl.remove_prefix_spaces_in_Plain = (function frontend$handler$export$common_impl$remove_prefix_spaces_in_Plain(inline_coll){
return new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__65508,ast){
var map__65509 = p__65508;
var map__65509__$1 = cljs.core.__destructure_map(map__65509);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65509__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var after_break_line_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65509__$1,new cljs.core.Keyword(null,"after-break-line?","after-break-line?",-2088072838));
var vec__65510 = ast;
var ast_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65510,(0),null);
var ast_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65510,(1),null);
var G__65513 = ast_type;
switch (G__65513) {
case "Plain":
var trimmed_content = clojure.string.triml(ast_content);
if(cljs.core.truth_(after_break_line_QMARK_)){
if(cljs.core.empty_QMARK_(trimmed_content)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"after-break-line?","after-break-line?",-2088072838),false], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Plain",trimmed_content], null)),new cljs.core.Keyword(null,"after-break-line?","after-break-line?",-2088072838),false], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,ast),new cljs.core.Keyword(null,"after-break-line?","after-break-line?",-2088072838),false], null);
}

break;
case "Break_Line":
case "Hard_Break_Line":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,ast),new cljs.core.Keyword(null,"after-break-line?","after-break-line?",-2088072838),true], null);

break;
default:
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,ast),new cljs.core.Keyword(null,"after-break-line?","after-break-line?",-2088072838),false], null);

}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"after-break-line?","after-break-line?",-2088072838),true], null),inline_coll));
});
frontend.handler.export$.common_impl.walk_block_ast_helper = (function frontend$handler$export$common_impl$walk_block_ast_helper(inline_coll,map_fns_on_inline_ast,mapcat_fns_on_inline_ast,fns_on_inline_coll){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__65515_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (inline_ast_coll,f){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inline_ast_coll], 0)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__65515_SHARP_], null),mapcat_fns_on_inline_ast);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__65514_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (inline_ast,f){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inline_ast) : f.call(null,inline_ast));
}),p1__65514_SHARP_,map_fns_on_inline_ast);
}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (inline_coll__$1,f){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inline_coll__$1) : f.call(null,inline_coll__$1));
}),inline_coll,fns_on_inline_coll))], 0)));
});
frontend.handler.export$.common_impl.walk_block_ast_for_list = (function frontend$handler$export$common_impl$walk_block_ast_for_list(list_items,map_fns_on_inline_ast,mapcat_fns_on_inline_ast){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__65516){
var map__65517 = p__65516;
var map__65517__$1 = cljs.core.__destructure_map(map__65517);
var item = map__65517__$1;
var block_ast_coll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65517__$1,new cljs.core.Keyword(null,"content","content",15833224));
var sub_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65517__$1,new cljs.core.Keyword(null,"items","items",1031954938));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(item,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common_impl.walk_block_ast,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"map-fns-on-inline-ast","map-fns-on-inline-ast",-1834139513),map_fns_on_inline_ast,new cljs.core.Keyword(null,"mapcat-fns-on-inline-ast","mapcat-fns-on-inline-ast",-988900078),mapcat_fns_on_inline_ast], null)),block_ast_coll),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"items","items",1031954938),(frontend.handler.export$.common_impl.walk_block_ast_for_list.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.export$.common_impl.walk_block_ast_for_list.cljs$core$IFn$_invoke$arity$3(sub_items,map_fns_on_inline_ast,mapcat_fns_on_inline_ast) : frontend.handler.export$.common_impl.walk_block_ast_for_list.call(null,sub_items,map_fns_on_inline_ast,mapcat_fns_on_inline_ast))], 0));
}),list_items);
});
frontend.handler.export$.common_impl.walk_block_ast = (function frontend$handler$export$common_impl$walk_block_ast(p__65519,block_ast){
var map__65520 = p__65519;
var map__65520__$1 = cljs.core.__destructure_map(map__65520);
var fns = map__65520__$1;
var map_fns_on_inline_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65520__$1,new cljs.core.Keyword(null,"map-fns-on-inline-ast","map-fns-on-inline-ast",-1834139513));
var mapcat_fns_on_inline_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65520__$1,new cljs.core.Keyword(null,"mapcat-fns-on-inline-ast","mapcat-fns-on-inline-ast",-988900078));
var fns_on_inline_coll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65520__$1,new cljs.core.Keyword(null,"fns-on-inline-coll","fns-on-inline-coll",-2007934714));
var vec__65521 = block_ast;
var ast_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65521,(0),null);
var ast_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65521,(1),null);
var G__65524 = ast_type;
switch (G__65524) {
case "Paragraph":
return frontend.handler.export$.common_impl.mk_paragraph_ast(frontend.handler.export$.common_impl.walk_block_ast_helper(ast_content,map_fns_on_inline_ast,mapcat_fns_on_inline_ast,fns_on_inline_coll),cljs.core.meta(block_ast));

break;
case "Heading":
var map__65525 = ast_content;
var map__65525__$1 = cljs.core.__destructure_map(map__65525);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65525__$1,new cljs.core.Keyword(null,"title","title",636505583));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Heading",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast_content,new cljs.core.Keyword(null,"title","title",636505583),frontend.handler.export$.common_impl.walk_block_ast_helper(title,map_fns_on_inline_ast,mapcat_fns_on_inline_ast,fns_on_inline_coll))], null);

break;
case "List":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["List",frontend.handler.export$.common_impl.walk_block_ast_for_list(ast_content,map_fns_on_inline_ast,mapcat_fns_on_inline_ast)], null);

break;
case "Quote":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Quote",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common_impl.walk_block_ast,fns),ast_content)], null);

break;
case "Footnote_Definition":
var vec__65526 = cljs.core.rest(block_ast);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65526,(0),null);
var contents = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65526,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Footnote_Definition",name,frontend.handler.export$.common_impl.walk_block_ast_helper(contents,map_fns_on_inline_ast,mapcat_fns_on_inline_ast,fns_on_inline_coll)], null);

break;
case "Table":
var map__65529 = ast_content;
var map__65529__$1 = cljs.core.__destructure_map(map__65529);
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65529__$1,new cljs.core.Keyword(null,"header","header",119441134));
var groups = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65529__$1,new cljs.core.Keyword(null,"groups","groups",-136896102));
var header_STAR_ = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__65518_SHARP_){
return frontend.handler.export$.common_impl.walk_block_ast_helper(p1__65518_SHARP_,map_fns_on_inline_ast,mapcat_fns_on_inline_ast,fns_on_inline_coll);
}),header);
var groups_STAR_ = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (group){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (col){
return frontend.handler.export$.common_impl.walk_block_ast_helper(col,map_fns_on_inline_ast,mapcat_fns_on_inline_ast,fns_on_inline_coll);
}),row);
}),group);
}),groups);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Table",cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ast_content,new cljs.core.Keyword(null,"header","header",119441134),header_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"groups","groups",-136896102),groups_STAR_], 0))], null);

break;
default:
return block_ast;

}
});
frontend.handler.export$.common_impl.simple_ast_malli_schema = malli.util.closed_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"raw-text","raw-text",-959335662)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"space","space",348133475)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"newline","newline",1790071323)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line-count","line-count",871713181),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra-space-count","extra-space-count",1763210890),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null)], null));
frontend.handler.export$.common_impl.raw_text = (function frontend$handler$export$common_impl$raw_text(var_args){
var args__5882__auto__ = [];
var len__5876__auto___65702 = arguments.length;
var i__5877__auto___65703 = (0);
while(true){
if((i__5877__auto___65703 < len__5876__auto___65702)){
args__5882__auto__.push((arguments[i__5877__auto___65703]));

var G__65704 = (i__5877__auto___65703 + (1));
i__5877__auto___65703 = G__65704;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return frontend.handler.export$.common_impl.raw_text.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(frontend.handler.export$.common_impl.raw_text.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"raw-text","raw-text",-959335662),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,contents)], null);
}));

(frontend.handler.export$.common_impl.raw_text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.handler.export$.common_impl.raw_text.cljs$lang$applyTo = (function (seq65530){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65530));
}));

frontend.handler.export$.common_impl.space = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"space","space",348133475)], null);
frontend.handler.export$.common_impl.newline_STAR_ = (function frontend$handler$export$common_impl$newline_STAR_(line_count){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"line-count","line-count",871713181),line_count], null);
});
frontend.handler.export$.common_impl.indent = (function frontend$handler$export$common_impl$indent(level,extra_space_count){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"level","level",1290497552),level,new cljs.core.Keyword(null,"extra-space-count","extra-space-count",1763210890),extra_space_count], null);
});
frontend.handler.export$.common_impl.simple_ast__GT_string = (function frontend$handler$export$common_impl$simple_ast__GT_string(simple_ast){
if(cljs.core.truth_(malli.core.validate.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common_impl.simple_ast_malli_schema,simple_ast))){
} else {
throw (new Error("Assert failed: (m/validate simple-ast-malli-schema simple-ast)"));
}

var G__65531 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(simple_ast);
var G__65531__$1 = (((G__65531 instanceof cljs.core.Keyword))?G__65531.fqn:null);
switch (G__65531__$1) {
case "raw-text":
return new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(simple_ast);

break;
case "space":
return " ";

break;
case "newline":
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line-count","line-count",871713181).cljs$core$IFn$_invoke$arity$1(simple_ast),"\n"));

break;
case "indent":
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(simple_ast),"\t"),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"extra-space-count","extra-space-count",1763210890).cljs$core$IFn$_invoke$arity$1(simple_ast)," "))));

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65531__$1))));

}
});
frontend.handler.export$.common_impl.merge_adjacent_spaces_AMPERSAND_newlines = (function frontend$handler$export$common_impl$merge_adjacent_spaces_AMPERSAND_newlines(simple_ast_coll){
var r = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var last_ast = null;
var last_raw_text_space_suffix_QMARK_ = false;
var last_raw_text_newline_suffix_QMARK_ = false;
var G__65535 = simple_ast_coll;
var vec__65536 = G__65535;
var seq__65537 = cljs.core.seq(vec__65536);
var first__65538 = cljs.core.first(seq__65537);
var seq__65537__$1 = cljs.core.next(seq__65537);
var simple_ast = first__65538;
var other_ast_coll = seq__65537__$1;
var r__$1 = r;
var last_ast__$1 = last_ast;
var last_raw_text_space_suffix_QMARK___$1 = last_raw_text_space_suffix_QMARK_;
var last_raw_text_newline_suffix_QMARK___$1 = last_raw_text_newline_suffix_QMARK_;
var G__65535__$1 = G__65535;
while(true){
var r__$2 = r__$1;
var last_ast__$2 = last_ast__$1;
var last_raw_text_space_suffix_QMARK___$2 = last_raw_text_space_suffix_QMARK___$1;
var last_raw_text_newline_suffix_QMARK___$2 = last_raw_text_newline_suffix_QMARK___$1;
var vec__65555 = G__65535__$1;
var seq__65556 = cljs.core.seq(vec__65555);
var first__65557 = cljs.core.first(seq__65556);
var seq__65556__$1 = cljs.core.next(seq__65556);
var simple_ast__$1 = first__65557;
var other_ast_coll__$1 = seq__65556__$1;
if((simple_ast__$1 == null)){
return cljs.core.persistent_BANG_((cljs.core.truth_(last_ast__$2)?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r__$2,last_ast__$2):r__$2));
} else {
var tp = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(simple_ast__$1);
var last_ast_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(last_ast__$2);
var G__65558 = tp;
var G__65558__$1 = (((G__65558 instanceof cljs.core.Keyword))?G__65558.fqn:null);
switch (G__65558__$1) {
case "space":
if(cljs.core.truth_((function (){var or__5142__auto__ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"space","space",348133475),null,new cljs.core.Keyword(null,"indent","indent",-148200125),null,new cljs.core.Keyword(null,"newline","newline",1790071323),null], null), null),last_ast_type);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = last_raw_text_space_suffix_QMARK___$2;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return last_raw_text_newline_suffix_QMARK___$2;
}
}
})())){
var G__65717 = r__$2;
var G__65718 = last_ast__$2;
var G__65719 = last_raw_text_space_suffix_QMARK___$2;
var G__65720 = last_raw_text_newline_suffix_QMARK___$2;
var G__65721 = other_ast_coll__$1;
r__$1 = G__65717;
last_ast__$1 = G__65718;
last_raw_text_space_suffix_QMARK___$1 = G__65719;
last_raw_text_newline_suffix_QMARK___$1 = G__65720;
G__65535__$1 = G__65721;
continue;
} else {
var G__65722 = (cljs.core.truth_(last_ast__$2)?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r__$2,last_ast__$2):r__$2);
var G__65723 = simple_ast__$1;
var G__65724 = false;
var G__65725 = false;
var G__65726 = other_ast_coll__$1;
r__$1 = G__65722;
last_ast__$1 = G__65723;
last_raw_text_space_suffix_QMARK___$1 = G__65724;
last_raw_text_newline_suffix_QMARK___$1 = G__65725;
G__65535__$1 = G__65726;
continue;
}

break;
case "newline":
var G__65559 = last_ast_type;
var G__65559__$1 = (((G__65559 instanceof cljs.core.Keyword))?G__65559.fqn:null);
switch (G__65559__$1) {
case "space":
case "indent":
var G__65728 = r__$2;
var G__65729 = simple_ast__$1;
var G__65730 = false;
var G__65731 = false;
var G__65732 = other_ast_coll__$1;
r__$1 = G__65728;
last_ast__$1 = G__65729;
last_raw_text_space_suffix_QMARK___$1 = G__65730;
last_raw_text_newline_suffix_QMARK___$1 = G__65731;
G__65535__$1 = G__65732;
continue;

break;
case "newline":
var last_newline_count = new cljs.core.Keyword(null,"line-count","line-count",871713181).cljs$core$IFn$_invoke$arity$1(last_ast__$2);
var current_newline_count = new cljs.core.Keyword(null,"line-count","line-count",871713181).cljs$core$IFn$_invoke$arity$1(simple_ast__$1);
var kept_ast = (((last_newline_count > current_newline_count))?last_ast__$2:simple_ast__$1);
var G__65733 = r__$2;
var G__65734 = kept_ast;
var G__65735 = false;
var G__65736 = false;
var G__65737 = other_ast_coll__$1;
r__$1 = G__65733;
last_ast__$1 = G__65734;
last_raw_text_space_suffix_QMARK___$1 = G__65735;
last_raw_text_newline_suffix_QMARK___$1 = G__65736;
G__65535__$1 = G__65737;
continue;

break;
case "raw-text":
if(cljs.core.truth_(last_raw_text_newline_suffix_QMARK___$2)){
var G__65738 = r__$2;
var G__65739 = last_ast__$2;
var G__65740 = last_raw_text_space_suffix_QMARK___$2;
var G__65741 = last_raw_text_newline_suffix_QMARK___$2;
var G__65742 = other_ast_coll__$1;
r__$1 = G__65738;
last_ast__$1 = G__65739;
last_raw_text_space_suffix_QMARK___$1 = G__65740;
last_raw_text_newline_suffix_QMARK___$1 = G__65741;
G__65535__$1 = G__65742;
continue;
} else {
var G__65743 = (cljs.core.truth_(last_ast__$2)?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r__$2,last_ast__$2):r__$2);
var G__65744 = simple_ast__$1;
var G__65745 = false;
var G__65746 = false;
var G__65747 = other_ast_coll__$1;
r__$1 = G__65743;
last_ast__$1 = G__65744;
last_raw_text_space_suffix_QMARK___$1 = G__65745;
last_raw_text_newline_suffix_QMARK___$1 = G__65746;
G__65535__$1 = G__65747;
continue;
}

break;
default:
var G__65748 = r__$2;
var G__65749 = simple_ast__$1;
var G__65750 = false;
var G__65751 = false;
var G__65752 = other_ast_coll__$1;
r__$1 = G__65748;
last_ast__$1 = G__65749;
last_raw_text_space_suffix_QMARK___$1 = G__65750;
last_raw_text_newline_suffix_QMARK___$1 = G__65751;
G__65535__$1 = G__65752;
continue;

}

break;
case "indent":
var G__65560 = last_ast_type;
var G__65560__$1 = (((G__65560 instanceof cljs.core.Keyword))?G__65560.fqn:null);
switch (G__65560__$1) {
case "space":
case "indent":
var G__65754 = r__$2;
var G__65755 = simple_ast__$1;
var G__65756 = false;
var G__65757 = false;
var G__65758 = other_ast_coll__$1;
r__$1 = G__65754;
last_ast__$1 = G__65755;
last_raw_text_space_suffix_QMARK___$1 = G__65756;
last_raw_text_newline_suffix_QMARK___$1 = G__65757;
G__65535__$1 = G__65758;
continue;

break;
case "newline":
var G__65759 = (cljs.core.truth_(last_ast__$2)?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r__$2,last_ast__$2):r__$2);
var G__65760 = simple_ast__$1;
var G__65761 = false;
var G__65762 = false;
var G__65763 = other_ast_coll__$1;
r__$1 = G__65759;
last_ast__$1 = G__65760;
last_raw_text_space_suffix_QMARK___$1 = G__65761;
last_raw_text_newline_suffix_QMARK___$1 = G__65762;
G__65535__$1 = G__65763;
continue;

break;
case "raw-text":
if(cljs.core.truth_(last_raw_text_space_suffix_QMARK___$2)){
var G__65764 = r__$2;
var G__65765 = last_ast__$2;
var G__65766 = last_raw_text_space_suffix_QMARK___$2;
var G__65767 = last_raw_text_newline_suffix_QMARK___$2;
var G__65768 = other_ast_coll__$1;
r__$1 = G__65764;
last_ast__$1 = G__65765;
last_raw_text_space_suffix_QMARK___$1 = G__65766;
last_raw_text_newline_suffix_QMARK___$1 = G__65767;
G__65535__$1 = G__65768;
continue;
} else {
var G__65769 = (cljs.core.truth_(last_ast__$2)?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r__$2,last_ast__$2):r__$2);
var G__65770 = simple_ast__$1;
var G__65771 = false;
var G__65772 = false;
var G__65773 = other_ast_coll__$1;
r__$1 = G__65769;
last_ast__$1 = G__65770;
last_raw_text_space_suffix_QMARK___$1 = G__65771;
last_raw_text_newline_suffix_QMARK___$1 = G__65772;
G__65535__$1 = G__65773;
continue;
}

break;
default:
var G__65774 = r__$2;
var G__65775 = simple_ast__$1;
var G__65776 = false;
var G__65777 = false;
var G__65778 = other_ast_coll__$1;
r__$1 = G__65774;
last_ast__$1 = G__65775;
last_raw_text_space_suffix_QMARK___$1 = G__65776;
last_raw_text_newline_suffix_QMARK___$1 = G__65777;
G__65535__$1 = G__65778;
continue;

}

break;
case "raw-text":
var content = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(simple_ast__$1);
var empty_content_QMARK_ = cljs.core.empty_QMARK_(content);
var first_ch = cljs.core.first(content);
var last_ch = (function (){var num = cljs.core.count(content);
if((num > (0))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(content,(num - (1)));
} else {
return null;
}
})();
var newline_prefix_QMARK_ = (function (){var G__65561 = first_ch;
var G__65561__$1 = (((G__65561 == null))?null:(function (){var fexpr__65562 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\r",null,"\n",null], null), null);
return (fexpr__65562.cljs$core$IFn$_invoke$arity$1 ? fexpr__65562.cljs$core$IFn$_invoke$arity$1(G__65561) : fexpr__65562.call(null,G__65561));
})());
if((G__65561__$1 == null)){
return null;
} else {
return cljs.core.boolean$(G__65561__$1);
}
})();
var newline_suffix_QMARK_ = (function (){var G__65563 = last_ch;
var G__65563__$1 = (((G__65563 == null))?null:(function (){var fexpr__65564 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null);
return (fexpr__65564.cljs$core$IFn$_invoke$arity$1 ? fexpr__65564.cljs$core$IFn$_invoke$arity$1(G__65563) : fexpr__65564.call(null,G__65563));
})());
if((G__65563__$1 == null)){
return null;
} else {
return cljs.core.boolean$(G__65563__$1);
}
})();
var space_prefix_QMARK_ = (function (){var G__65565 = first_ch;
var G__65565__$1 = (((G__65565 == null))?null:(function (){var fexpr__65566 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [" ",null], null), null);
return (fexpr__65566.cljs$core$IFn$_invoke$arity$1 ? fexpr__65566.cljs$core$IFn$_invoke$arity$1(G__65565) : fexpr__65566.call(null,G__65565));
})());
if((G__65565__$1 == null)){
return null;
} else {
return cljs.core.boolean$(G__65565__$1);
}
})();
var space_suffix_QMARK_ = (function (){var G__65567 = last_ch;
var G__65567__$1 = (((G__65567 == null))?null:(function (){var fexpr__65568 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [" ",null], null), null);
return (fexpr__65568.cljs$core$IFn$_invoke$arity$1 ? fexpr__65568.cljs$core$IFn$_invoke$arity$1(G__65567) : fexpr__65568.call(null,G__65567));
})());
if((G__65567__$1 == null)){
return null;
} else {
return cljs.core.boolean$(G__65567__$1);
}
})();
if(empty_content_QMARK_){
var G__65783 = r__$2;
var G__65784 = last_ast__$2;
var G__65785 = last_raw_text_space_suffix_QMARK___$2;
var G__65786 = last_raw_text_newline_suffix_QMARK___$2;
var G__65787 = other_ast_coll__$1;
r__$1 = G__65783;
last_ast__$1 = G__65784;
last_raw_text_space_suffix_QMARK___$1 = G__65785;
last_raw_text_newline_suffix_QMARK___$1 = G__65786;
G__65535__$1 = G__65787;
continue;
} else {
if(cljs.core.truth_(newline_prefix_QMARK_)){
var G__65569 = last_ast_type;
var G__65569__$1 = (((G__65569 instanceof cljs.core.Keyword))?G__65569.fqn:null);
switch (G__65569__$1) {
case "space":
case "indent":
case "newline":
var G__65789 = r__$2;
var G__65790 = simple_ast__$1;
var G__65791 = space_suffix_QMARK_;
var G__65792 = newline_suffix_QMARK_;
var G__65793 = other_ast_coll__$1;
r__$1 = G__65789;
last_ast__$1 = G__65790;
last_raw_text_space_suffix_QMARK___$1 = G__65791;
last_raw_text_newline_suffix_QMARK___$1 = G__65792;
G__65535__$1 = G__65793;
continue;

break;
case "raw-text":
var G__65794 = (cljs.core.truth_(last_ast__$2)?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r__$2,last_ast__$2):r__$2);
var G__65795 = simple_ast__$1;
var G__65796 = space_suffix_QMARK_;
var G__65797 = newline_suffix_QMARK_;
var G__65798 = other_ast_coll__$1;
r__$1 = G__65794;
last_ast__$1 = G__65795;
last_raw_text_space_suffix_QMARK___$1 = G__65796;
last_raw_text_newline_suffix_QMARK___$1 = G__65797;
G__65535__$1 = G__65798;
continue;

break;
default:
var G__65799 = r__$2;
var G__65800 = simple_ast__$1;
var G__65801 = space_suffix_QMARK_;
var G__65802 = newline_suffix_QMARK_;
var G__65803 = other_ast_coll__$1;
r__$1 = G__65799;
last_ast__$1 = G__65800;
last_raw_text_space_suffix_QMARK___$1 = G__65801;
last_raw_text_newline_suffix_QMARK___$1 = G__65802;
G__65535__$1 = G__65803;
continue;

}
} else {
if(cljs.core.truth_(space_prefix_QMARK_)){
var G__65570 = last_ast_type;
var G__65570__$1 = (((G__65570 instanceof cljs.core.Keyword))?G__65570.fqn:null);
switch (G__65570__$1) {
case "space":
case "indent":
var G__65805 = r__$2;
var G__65806 = simple_ast__$1;
var G__65807 = space_suffix_QMARK_;
var G__65808 = newline_suffix_QMARK_;
var G__65809 = other_ast_coll__$1;
r__$1 = G__65805;
last_ast__$1 = G__65806;
last_raw_text_space_suffix_QMARK___$1 = G__65807;
last_raw_text_newline_suffix_QMARK___$1 = G__65808;
G__65535__$1 = G__65809;
continue;

break;
case "newline":
case "raw-text":
var G__65810 = (cljs.core.truth_(last_ast__$2)?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r__$2,last_ast__$2):r__$2);
var G__65811 = simple_ast__$1;
var G__65812 = space_suffix_QMARK_;
var G__65813 = newline_suffix_QMARK_;
var G__65814 = other_ast_coll__$1;
r__$1 = G__65810;
last_ast__$1 = G__65811;
last_raw_text_space_suffix_QMARK___$1 = G__65812;
last_raw_text_newline_suffix_QMARK___$1 = G__65813;
G__65535__$1 = G__65814;
continue;

break;
default:
var G__65815 = r__$2;
var G__65816 = simple_ast__$1;
var G__65817 = space_suffix_QMARK_;
var G__65818 = newline_suffix_QMARK_;
var G__65819 = other_ast_coll__$1;
r__$1 = G__65815;
last_ast__$1 = G__65816;
last_raw_text_space_suffix_QMARK___$1 = G__65817;
last_raw_text_newline_suffix_QMARK___$1 = G__65818;
G__65535__$1 = G__65819;
continue;

}
} else {
var G__65824 = (cljs.core.truth_(last_ast__$2)?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r__$2,last_ast__$2):r__$2);
var G__65825 = simple_ast__$1;
var G__65826 = space_suffix_QMARK_;
var G__65827 = newline_suffix_QMARK_;
var G__65828 = other_ast_coll__$1;
r__$1 = G__65824;
last_ast__$1 = G__65825;
last_raw_text_space_suffix_QMARK___$1 = G__65826;
last_raw_text_newline_suffix_QMARK___$1 = G__65827;
G__65535__$1 = G__65828;
continue;

}
}
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65558__$1))));

}
}
break;
}
});
frontend.handler.export$.common_impl.simple_asts__GT_string = (function frontend$handler$export$common_impl$simple_asts__GT_string(simple_ast_coll){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common_impl.simple_ast__GT_string,frontend.handler.export$.common_impl.merge_adjacent_spaces_AMPERSAND_newlines(frontend.handler.export$.common_impl.merge_adjacent_spaces_AMPERSAND_newlines(simple_ast_coll))));
});

//# sourceMappingURL=frontend.handler.export.common_impl.js.map
