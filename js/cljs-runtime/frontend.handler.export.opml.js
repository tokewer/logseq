goog.provide('frontend.handler.export$.opml');
frontend.handler.export$.opml._STAR_opml_state_STAR_ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outside-em-symbol","outside-em-symbol",478063381),null], null);
frontend.handler.export$.opml.branch_QMARK_ = (function frontend$handler$export$opml$branch_QMARK_(node){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"outline","outline",793464534),cljs.core.first(node));
});
frontend.handler.export$.opml.outline_hiccup_zip = (function frontend$handler$export$opml$outline_hiccup_zip(root){
return clojure.zip.zipper(frontend.handler.export$.opml.branch_QMARK_,cljs.core.rest,(function (node,children){
return cljs.core.with_meta(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"outline","outline",793464534),children),cljs.core.meta(node));
}),root);
});
frontend.handler.export$.opml.init_opml_body_hiccup = clojure.zip.down(frontend.handler.export$.opml.outline_hiccup_zip(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083)], null)], null)));
/**
 * [:outline [:outline [:outline]]]
 *                     ^
 *                 goto here
 */
frontend.handler.export$.opml.goto_last_outline = (function frontend$handler$export$opml$goto_last_outline(loc){
return clojure.zip.up(frontend.handler.export$.zip_helper.goto_last(loc));
});
frontend.handler.export$.opml.add_same_level_outline_at_right = (function frontend$handler$export$opml$add_same_level_outline_at_right(loc,attr_map){
if(cljs.core.map_QMARK_(attr_map)){
} else {
throw (new Error("Assert failed: (map? attr-map)"));
}

return clojure.zip.right(clojure.zip.insert_right(loc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"outline","outline",793464534),attr_map], null)));
});
frontend.handler.export$.opml.add_next_level_outline = (function frontend$handler$export$opml$add_next_level_outline(loc,attr_map){
if(cljs.core.map_QMARK_(attr_map)){
} else {
throw (new Error("Assert failed: (map? attr-map)"));
}

return frontend.handler.export$.opml.goto_last_outline(clojure.zip.append_child(loc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"outline","outline",793464534),attr_map], null)));
});
frontend.handler.export$.opml.append_text_to_current_outline = (function frontend$handler$export$opml$append_text_to_current_outline(loc,text){
return clojure.zip.up(clojure.zip.edit(clojure.zip.down(loc),(function (p1__85222_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__85222_SHARP_,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.str,text);
})));
});
/**
 * if current-level = 0(it's just `init-opml-body-hiccup`), need to add a new outline item.
 */
frontend.handler.export$.opml.append_text_to_current_outline_STAR_ = (function frontend$handler$export$opml$append_text_to_current_outline_STAR_(loc,text){
if((frontend.handler.export$.zip_helper.get_level(loc) > (0))){
return frontend.handler.export$.opml.append_text_to_current_outline(loc,text);
} else {
return frontend.handler.export$.opml.append_text_to_current_outline(frontend.handler.export$.opml.add_same_level_outline_at_right(clojure.zip.down(loc),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null)),text);
}
});
frontend.handler.export$.opml.zip_loc__GT_opml = (function frontend$handler$export$opml$zip_loc__GT_opml(hiccup,title){
var vec__85224 = hiccup;
var seq__85225 = cljs.core.seq(vec__85224);
var first__85226 = cljs.core.first(seq__85225);
var seq__85225__$1 = cljs.core.next(seq__85225);
var _ = first__85226;
var first__85226__$1 = cljs.core.first(seq__85225__$1);
var seq__85225__$2 = cljs.core.next(seq__85225__$1);
var ___$1 = first__85226__$1;
var body = seq__85225__$2;
return (""+"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(module$frontend$utils.prettifyXml(hiccups.runtime.render_html(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opml","opml",2114938640),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"version","version",425292698),"2.0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),title], null)], null),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),body))], null)))));
});

frontend.handler.export$.opml.emphasis_wrap_with = (function frontend$handler$export$opml$emphasis_wrap_with(inline_coll,em_symbol){
var _STAR_opml_state_STAR__orig_val__85227 = frontend.handler.export$.opml._STAR_opml_state_STAR_;
var _STAR_opml_state_STAR__temp_val__85228 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.handler.export$.opml._STAR_opml_state_STAR_,new cljs.core.Keyword(null,"outside-em-symbol","outside-em-symbol",478063381),cljs.core.first(em_symbol));
(frontend.handler.export$.opml._STAR_opml_state_STAR_ = _STAR_opml_state_STAR__temp_val__85228);

try{return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common_impl.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([em_symbol], 0))], null),cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(frontend.handler.export$.opml.inline_ast__GT_simple_ast,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inline_coll], 0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common_impl.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([em_symbol], 0))], null)], 0)));
}finally {(frontend.handler.export$.opml._STAR_opml_state_STAR_ = _STAR_opml_state_STAR__orig_val__85227);
}});
frontend.handler.export$.opml.inline_emphasis = (function frontend$handler$export$opml$inline_emphasis(p__85230){
var vec__85231 = p__85230;
var vec__85234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85231,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85234,(0),null);
var inline_coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85231,(1),null);
var outside_em_symbol = new cljs.core.Keyword(null,"outside-em-symbol","outside-em-symbol",478063381).cljs$core$IFn$_invoke$arity$1(frontend.handler.export$.opml._STAR_opml_state_STAR_);
var G__85237 = type;
switch (G__85237) {
case "Bold":
return frontend.handler.export$.opml.emphasis_wrap_with(inline_coll,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(outside_em_symbol,"*"))?"__":"**"));

break;
case "Italic":
return frontend.handler.export$.opml.emphasis_wrap_with(inline_coll,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(outside_em_symbol,"*"))?"_":"*"));

break;
case "Underline":
var _STAR_opml_state_STAR__orig_val__85238 = frontend.handler.export$.opml._STAR_opml_state_STAR_;
var _STAR_opml_state_STAR__temp_val__85239 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.handler.export$.opml._STAR_opml_state_STAR_,new cljs.core.Keyword(null,"outside-em-symbol","outside-em-symbol",478063381),outside_em_symbol);
(frontend.handler.export$.opml._STAR_opml_state_STAR_ = _STAR_opml_state_STAR__temp_val__85239);

try{return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (inline){
return cljs.core.cons(frontend.handler.export$.common_impl.space,(frontend.handler.export$.opml.inline_ast__GT_simple_ast.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.export$.opml.inline_ast__GT_simple_ast.cljs$core$IFn$_invoke$arity$1(inline) : frontend.handler.export$.opml.inline_ast__GT_simple_ast.call(null,inline)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inline_coll], 0)));
}finally {(frontend.handler.export$.opml._STAR_opml_state_STAR_ = _STAR_opml_state_STAR__orig_val__85238);
}
break;
case "Strike_through":
return frontend.handler.export$.opml.emphasis_wrap_with(inline_coll,"~~");

break;
case "Highlight":
return frontend.handler.export$.opml.emphasis_wrap_with(inline_coll,"^^");

break;
default:
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"inline-emphasis","inline-emphasis",1774829182),type,"is invalid"], 0)))+"\n"+"false")));


}
});
frontend.handler.export$.opml.inline_break_line = (function frontend$handler$export$opml$inline_break_line(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common_impl.space], null);
});
frontend.handler.export$.opml.inline_link = (function frontend$handler$export$opml$inline_link(p__85242){
var map__85245 = p__85242;
var map__85245__$1 = cljs.core.__destructure_map(map__85245);
var full_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85245__$1,new cljs.core.Keyword(null,"full_text","full_text",1634289075));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common_impl.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([full_text], 0))], null);
});
frontend.handler.export$.opml.inline_nested_link = (function frontend$handler$export$opml$inline_nested_link(p__85246){
var map__85248 = p__85246;
var map__85248__$1 = cljs.core.__destructure_map(map__85248);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85248__$1,new cljs.core.Keyword(null,"content","content",15833224));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common_impl.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([content], 0))], null);
});
frontend.handler.export$.opml.inline_subscript = (function frontend$handler$export$opml$inline_subscript(inline_coll){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common_impl.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["_{"], 0))], null),cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (inline){
return cljs.core.cons(frontend.handler.export$.common_impl.space,(frontend.handler.export$.opml.inline_ast__GT_simple_ast.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.export$.opml.inline_ast__GT_simple_ast.cljs$core$IFn$_invoke$arity$1(inline) : frontend.handler.export$.opml.inline_ast__GT_simple_ast.call(null,inline)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inline_coll], 0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common_impl.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0))], null)], 0)));
});
frontend.handler.export$.opml.inline_superscript = (function frontend$handler$export$opml$inline_superscript(inline_coll){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common_impl.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["^{"], 0))], null),cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (inline){
return cljs.core.cons(frontend.handler.export$.common_impl.space,(frontend.handler.export$.opml.inline_ast__GT_simple_ast.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.export$.opml.inline_ast__GT_simple_ast.cljs$core$IFn$_invoke$arity$1(inline) : frontend.handler.export$.opml.inline_ast__GT_simple_ast.call(null,inline)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inline_coll], 0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common_impl.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0))], null)], 0)));
});
frontend.handler.export$.opml.inline_footnote_reference = (function frontend$handler$export$opml$inline_footnote_reference(p__85253){
var map__85254 = p__85253;
var map__85254__$1 = cljs.core.__destructure_map(map__85254);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85254__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common_impl.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[",name,"]"], 0))], null);
});
frontend.handler.export$.opml.inline_cookie = (function frontend$handler$export$opml$inline_cookie(ast_content){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common_impl.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__85258 = cljs.core.first(ast_content);
switch (G__85258) {
case "Absolute":
var vec__85261 = ast_content;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85261,(0),null);
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85261,(1),null);
var total = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85261,(2),null);
return (""+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total)+"]");

break;
case "Percent":
return (""+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(ast_content))+"%]");

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__85258))));

}
})()], 0))], null);
});
frontend.handler.export$.opml.inline_latex_fragment = (function frontend$handler$export$opml$inline_latex_fragment(ast_content){
var vec__85264 = ast_content;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85264,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85264,(1),null);
var wrapper = (function (){var G__85267 = type;
switch (G__85267) {
case "Inline":
return "$";

break;
case "Displayed":
return "$$";

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__85267))));

}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common_impl.space,frontend.handler.export$.common_impl.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(wrapper)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(wrapper))], 0)),frontend.handler.export$.common_impl.space], null);
});
frontend.handler.export$.opml.inline_macro = (function frontend$handler$export$opml$inline_macro(p__85268){
var map__85269 = p__85268;
var map__85269__$1 = cljs.core.__destructure_map(map__85269);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85269__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var arguments$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85269__$1,new cljs.core.Keyword(null,"arguments","arguments",-1182834456));
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[frontend.handler.export$.common_impl.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"cloze"))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",arguments$):(function (){var l = (function (){var G__85270 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["{{",name], null);
var G__85270__$1 = (((cljs.core.count(arguments$) > (0)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__85270,"(",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",arguments$),")"], 0)):G__85270);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__85270__$1,"}}");

})();
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(l);
})())], 0))],null));
});
frontend.handler.export$.opml.inline_entity = (function frontend$handler$export$opml$inline_entity(p__85271){
var map__85272 = p__85271;
var map__85272__$1 = cljs.core.__destructure_map(map__85272);
var unicode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85272__$1,new cljs.core.Keyword(null,"unicode","unicode",-542572710));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common_impl.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([unicode], 0))], null);
});
frontend.handler.export$.opml.inline_timestamp = (function frontend$handler$export$opml$inline_timestamp(ast_content){
var vec__85274 = ast_content;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85274,(0),null);
var timestamp_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85274,(1),null);
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[frontend.handler.export$.common_impl.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$1((function (){var G__85278 = type;
switch (G__85278) {
case "Scheduled":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SCHEDULED: ",(frontend.handler.export$.common.timestamp_to_string.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.export$.common.timestamp_to_string.cljs$core$IFn$_invoke$arity$1(timestamp_content) : frontend.handler.export$.common.timestamp_to_string.call(null,timestamp_content))], null);

break;
case "Deadline":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DEADLINE: ",(frontend.handler.export$.common.timestamp_to_string.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.export$.common.timestamp_to_string.cljs$core$IFn$_invoke$arity$1(timestamp_content) : frontend.handler.export$.common.timestamp_to_string.call(null,timestamp_content))], null);

break;
case "Date":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(frontend.handler.export$.common.timestamp_to_string.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.export$.common.timestamp_to_string.cljs$core$IFn$_invoke$arity$1(timestamp_content) : frontend.handler.export$.common.timestamp_to_string.call(null,timestamp_content))], null);

break;
case "Closed":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CLOSED: ",(frontend.handler.export$.common.timestamp_to_string.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.export$.common.timestamp_to_string.cljs$core$IFn$_invoke$arity$1(timestamp_content) : frontend.handler.export$.common.timestamp_to_string.call(null,timestamp_content))], null);

break;
case "Clock":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CLOCK: ",(function (){var G__85279 = cljs.core.second(timestamp_content);
return (frontend.handler.export$.common.timestamp_to_string.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.export$.common.timestamp_to_string.cljs$core$IFn$_invoke$arity$1(G__85279) : frontend.handler.export$.common.timestamp_to_string.call(null,G__85279));
})()], null);

break;
case "Range":
var map__85280 = timestamp_content;
var map__85280__$1 = cljs.core.__destructure_map(map__85280);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85280__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85280__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((frontend.handler.export$.common.timestamp_to_string.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.export$.common.timestamp_to_string.cljs$core$IFn$_invoke$arity$1(start) : frontend.handler.export$.common.timestamp_to_string.call(null,start)))+"--"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((frontend.handler.export$.common.timestamp_to_string.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.export$.common.timestamp_to_string.cljs$core$IFn$_invoke$arity$1(stop) : frontend.handler.export$.common.timestamp_to_string.call(null,stop))))], null);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__85278))));

}
})())], 0))],null));
});
frontend.handler.export$.opml.inline_email = (function frontend$handler$export$opml$inline_email(p__85282){
var map__85283 = p__85282;
var map__85283__$1 = cljs.core.__destructure_map(map__85283);
var local_part = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85283__$1,new cljs.core.Keyword(null,"local_part","local_part",-1705904558));
var domain = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85283__$1,new cljs.core.Keyword(null,"domain","domain",1847214937));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common_impl.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"<"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(local_part)+"@"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(domain)+">")], 0))], null);
});
frontend.handler.export$.opml.inline_ast__GT_simple_ast = (function frontend$handler$export$opml$inline_ast__GT_simple_ast(inline){
var vec__85288 = inline;
var ast_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85288,(0),null);
var ast_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85288,(1),null);
var G__85291 = ast_type;
switch (G__85291) {
case "Emphasis":
return frontend.handler.export$.opml.inline_emphasis(ast_content);

break;
case "Break_Line":
case "Hard_Break_Line":
return frontend.handler.export$.opml.inline_break_line();

break;
case "Verbatim":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common_impl.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast_content], 0))], null);

break;
case "Code":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common_impl.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["`",ast_content,"`"], 0))], null);

break;
case "Tag":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common_impl.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#",(frontend.handler.export$.common.hashtag_value__GT_string.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.export$.common.hashtag_value__GT_string.cljs$core$IFn$_invoke$arity$1(ast_content) : frontend.handler.export$.common.hashtag_value__GT_string.call(null,ast_content))], 0))], null);

break;
case "Spaces":
return null;

break;
case "Plain":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common_impl.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast_content], 0))], null);

break;
case "Link":
return frontend.handler.export$.opml.inline_link(ast_content);

break;
case "Nested_link":
return frontend.handler.export$.opml.inline_nested_link(ast_content);

break;
case "Target":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common_impl.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"<<"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ast_content)+">>")], 0))], null);

break;
case "Subscript":
return frontend.handler.export$.opml.inline_subscript(ast_content);

break;
case "Superscript":
return frontend.handler.export$.opml.inline_superscript(ast_content);

break;
case "Footnote_Reference":
return frontend.handler.export$.opml.inline_footnote_reference(ast_content);

break;
case "Cookie":
return frontend.handler.export$.opml.inline_cookie(ast_content);

break;
case "Latex_Fragment":
return frontend.handler.export$.opml.inline_latex_fragment(ast_content);

break;
case "Macro":
return frontend.handler.export$.opml.inline_macro(ast_content);

break;
case "Entity":
return frontend.handler.export$.opml.inline_entity(ast_content);

break;
case "Timestamp":
return frontend.handler.export$.opml.inline_timestamp(ast_content);

break;
case "Radio_Target":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common_impl.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"<<<"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ast_content)+">>>")], 0))], null);

break;
case "Email":
return frontend.handler.export$.opml.inline_email(ast_content);

break;
case "Inline_Hiccup":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common_impl.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast_content], 0))], null);

break;
case "Inline_Html":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common_impl.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast_content], 0))], null);

break;
case "Export_Snippet":
case "Inline_Source_Block":
return null;

break;
default:
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"inline-ast->simple-ast","inline-ast->simple-ast",-258439344),ast_type,"not implemented yet"], 0)))+"\n"+"false")));


}
});
frontend.handler.export$.opml.block_paragraph = (function frontend$handler$export$opml$block_paragraph(loc,inline_coll){
return frontend.handler.export$.opml.append_text_to_current_outline_STAR_(frontend.handler.export$.opml.goto_last_outline(loc),frontend.handler.export$.common_impl.simple_asts__GT_string(cljs.core.cons(frontend.handler.export$.common_impl.space,cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(frontend.handler.export$.opml.inline_ast__GT_simple_ast,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inline_coll], 0))))));
});
frontend.handler.export$.opml.block_heading = (function frontend$handler$export$opml$block_heading(loc,p__85304){
var map__85305 = p__85304;
var map__85305__$1 = cljs.core.__destructure_map(map__85305);
var _meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85305__$1,new cljs.core.Keyword(null,"_meta","_meta",937543236));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85305__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var _size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85305__$1,new cljs.core.Keyword(null,"_size","_size",-746489012));
var _anchor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85305__$1,new cljs.core.Keyword(null,"_anchor","_anchor",-1041309458));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85305__$1,new cljs.core.Keyword(null,"title","title",636505583));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85305__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85305__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
var _tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85305__$1,new cljs.core.Keyword(null,"_tags","_tags",58828915));
var _numbering = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85305__$1,new cljs.core.Keyword(null,"_numbering","_numbering",1825467892));
var _unordered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85305__$1,new cljs.core.Keyword(null,"_unordered","_unordered",1249595382));
var loc__$1 = frontend.handler.export$.opml.goto_last_outline(loc);
var current_level = frontend.handler.export$.zip_helper.get_level(loc__$1);
var title_STAR_ = cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(frontend.handler.export$.opml.inline_ast__GT_simple_ast,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([title], 0)));
var marker_STAR_ = (function (){var and__5140__auto__ = marker;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.handler.export$.common_impl.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([marker], 0));
} else {
return and__5140__auto__;
}
})();
var priority_STAR_ = (function (){var and__5140__auto__ = priority;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.handler.export$.common_impl.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(frontend.handler.export$.common.priority__GT_string.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.export$.common.priority__GT_string.cljs$core$IFn$_invoke$arity$1(priority) : frontend.handler.export$.common.priority__GT_string.call(null,priority))], 0));
} else {
return and__5140__auto__;
}
})();
var simple_asts = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [marker_STAR_,frontend.handler.export$.common_impl.space,priority_STAR_,frontend.handler.export$.common_impl.space], null),title_STAR_))));
var simple_asts__$1 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__85302_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__85302_SHARP_,frontend.handler.export$.common_impl.space);
}),simple_asts);
var s = frontend.handler.export$.common_impl.simple_asts__GT_string(simple_asts__$1);
if((level > current_level)){
return frontend.handler.export$.opml.add_next_level_outline(loc__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),s], null));
} else {
return frontend.handler.export$.opml.add_same_level_outline_at_right(clojure.zip.rightmost(frontend.handler.export$.zip_helper.goto_level(loc__$1,level)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),s], null));
}
});
frontend.handler.export$.opml.block_list_item = (function frontend$handler$export$opml$block_list_item(loc,p__85316){
var map__85317 = p__85316;
var map__85317__$1 = cljs.core.__destructure_map(map__85317);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85317__$1,new cljs.core.Keyword(null,"content","content",15833224));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85317__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var current_level = frontend.handler.export$.zip_helper.get_level(loc);
var loc__$1 = ((cljs.core.empty_QMARK_(cljs.core.second(clojure.zip.node(loc))))?loc:frontend.handler.export$.opml.add_same_level_outline_at_right(loc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null)));
var loc_STAR_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(frontend.handler.export$.opml.block_ast__GT_hiccup,loc__$1,content);
var loc_STAR__STAR_ = ((cljs.core.seq(items))?(frontend.handler.export$.opml.block_list.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.export$.opml.block_list.cljs$core$IFn$_invoke$arity$2(loc_STAR_,items) : frontend.handler.export$.opml.block_list.call(null,loc_STAR_,items)):loc_STAR_);
return clojure.zip.rightmost(frontend.handler.export$.zip_helper.goto_level(loc_STAR__STAR_,current_level));
});
frontend.handler.export$.opml.block_list = (function frontend$handler$export$opml$block_list(loc,list_items){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(frontend.handler.export$.opml.block_list_item,frontend.handler.export$.opml.add_next_level_outline(loc,cljs.core.PersistentArrayMap.EMPTY),list_items);
});
frontend.handler.export$.opml.block_example = (function frontend$handler$export$opml$block_example(loc,str_coll){
return frontend.handler.export$.opml.append_text_to_current_outline_STAR_(loc,clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",str_coll));
});
frontend.handler.export$.opml.block_src = (function frontend$handler$export$opml$block_src(loc,p__85321){
var map__85322 = p__85321;
var map__85322__$1 = cljs.core.__destructure_map(map__85322);
var _language = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85322__$1,new cljs.core.Keyword(null,"_language","_language",460812073));
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85322__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
return frontend.handler.export$.opml.append_text_to_current_outline_STAR_(loc,clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",lines));
});
frontend.handler.export$.opml.block_quote = (function frontend$handler$export$opml$block_quote(loc,block_ast_coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(frontend.handler.export$.opml.block_ast__GT_hiccup,loc,block_ast_coll);
});
frontend.handler.export$.opml.block_latex_env = (function frontend$handler$export$opml$block_latex_env(loc,p__85327){
var vec__85328 = p__85327;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85328,(0),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85328,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85328,(2),null);
return frontend.handler.export$.opml.append_text_to_current_outline_STAR_(loc,(""+"\\begin{"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+"}"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(options)+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)+"\n"+"\\end{"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+"}"));
});
frontend.handler.export$.opml.block_displayed_math = (function frontend$handler$export$opml$block_displayed_math(loc,s){
return frontend.handler.export$.opml.append_text_to_current_outline_STAR_(loc,s);
});
frontend.handler.export$.opml.block_footnote_definition = (function frontend$handler$export$opml$block_footnote_definition(loc,p__85335){
var vec__85336 = p__85335;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85336,(0),null);
var inline_coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85336,(1),null);
var inline_simple_asts = cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(frontend.handler.export$.opml.inline_ast__GT_simple_ast,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inline_coll], 0)));
return frontend.handler.export$.opml.append_text_to_current_outline_STAR_(loc,(""+"[^"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+"]: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.handler.export$.common_impl.simple_asts__GT_string(inline_simple_asts))));
});
frontend.handler.export$.opml.block_ast__GT_hiccup = (function frontend$handler$export$opml$block_ast__GT_hiccup(loc,block_ast){
var vec__85339 = block_ast;
var ast_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85339,(0),null);
var ast_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85339,(1),null);
var G__85342 = ast_type;
switch (G__85342) {
case "Paragraph":
return frontend.handler.export$.opml.block_paragraph(loc,ast_content);

break;
case "Paragraph_line":
throw (new Error((""+"Assert failed: "+"Paragraph_line is mldoc internal ast"+"\n"+"false")));


break;
case "Paragraph_Sep":
return loc;

break;
case "Heading":
return frontend.handler.export$.opml.block_heading(loc,ast_content);

break;
case "List":
return frontend.handler.export$.opml.block_list(loc,ast_content);

break;
case "Directive":
case "Results":
case "Property_Drawer":
case "Export":
case "CommentBlock":
case "Custom":
return loc;

break;
case "Example":
return frontend.handler.export$.opml.block_example(loc,ast_content);

break;
case "Src":
return frontend.handler.export$.opml.block_src(loc,ast_content);

break;
case "Quote":
return frontend.handler.export$.opml.block_quote(loc,ast_content);

break;
case "Latex_Fragment":
return frontend.handler.export$.opml.append_text_to_current_outline_STAR_(loc,frontend.handler.export$.common_impl.simple_asts__GT_string(frontend.handler.export$.opml.inline_latex_fragment(ast_content)));

break;
case "Latex_Environment":
return frontend.handler.export$.opml.block_latex_env(loc,cljs.core.rest(block_ast));

break;
case "Displayed_Math":
return frontend.handler.export$.opml.block_displayed_math(loc,ast_content);

break;
case "Drawer":
return loc;

break;
case "Footnote_Definition":
return frontend.handler.export$.opml.block_footnote_definition(loc,cljs.core.rest(block_ast));

break;
case "Horizontal_Rule":
return loc;

break;
case "Table":
return loc;

break;
case "Comment":
return loc;

break;
case "Raw_Html":
return loc;

break;
case "Hiccup":
return loc;

break;
default:
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"block-ast->simple-ast","block-ast->simple-ast",1296273434),ast_type,"not implemented yet"], 0)))+"\n"+"false")));


}
});
frontend.handler.export$.opml.export_helper = (function frontend$handler$export$opml$export_helper(var_args){
var args__5882__auto__ = [];
var len__5876__auto___85412 = arguments.length;
var i__5877__auto___85413 = (0);
while(true){
if((i__5877__auto___85413 < len__5876__auto___85412)){
args__5882__auto__.push((arguments[i__5877__auto___85413]));

var G__85414 = (i__5877__auto___85413 + (1));
i__5877__auto___85413 = G__85414;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return frontend.handler.export$.opml.export_helper.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(frontend.handler.export$.opml.export_helper.cljs$core$IFn$_invoke$arity$variadic = (function (content,format,options,p__85348){
var map__85349 = p__85348;
var map__85349__$1 = cljs.core.__destructure_map(map__85349);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__85349__$1,new cljs.core.Keyword(null,"title","title",636505583),"untitled");
var remove_options = cljs.core.set(new cljs.core.Keyword(null,"remove-options","remove-options",768737839).cljs$core$IFn$_invoke$arity$1(options));
var other_options = new cljs.core.Keyword(null,"other-options","other-options",170412142).cljs$core$IFn$_invoke$arity$1(options);
var _STAR_state_STAR__orig_val__85350 = frontend.handler.export$.common_impl._STAR_state_STAR_;
var _STAR_opml_state_STAR__orig_val__85351 = frontend.handler.export$.opml._STAR_opml_state_STAR_;
var _STAR_state_STAR__temp_val__85352 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.handler.export$.common_impl._STAR_state_STAR_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"export-options","export-options",672321679),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"remove-emphasis?","remove-emphasis?",-1751965539),cljs.core.contains_QMARK_(remove_options,new cljs.core.Keyword(null,"emphasis","emphasis",293543451)),new cljs.core.Keyword(null,"remove-page-ref-brackets?","remove-page-ref-brackets?",-276534720),cljs.core.contains_QMARK_(remove_options,new cljs.core.Keyword(null,"page-ref","page-ref",-1047131151)),new cljs.core.Keyword(null,"remove-tags?","remove-tags?",690905372),cljs.core.contains_QMARK_(remove_options,new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.Keyword(null,"keep-only-level<=N","keep-only-level<=N",-1010734857),new cljs.core.Keyword(null,"keep-only-level<=N","keep-only-level<=N",-1010734857).cljs$core$IFn$_invoke$arity$1(other_options)], null)], null)], 0));
var _STAR_opml_state_STAR__temp_val__85353 = frontend.handler.export$.opml._STAR_opml_state_STAR_;
(frontend.handler.export$.common_impl._STAR_state_STAR_ = _STAR_state_STAR__temp_val__85352);

(frontend.handler.export$.opml._STAR_opml_state_STAR_ = _STAR_opml_state_STAR__temp_val__85353);

try{var ast = frontend.format.mldoc.__GT_edn(content,format);
var ast__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common.remove_block_ast_pos,ast);
var ast__$2 = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common.Properties_block_ast_QMARK_,ast__$1));
var keep_level_LT__EQ_n = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common_impl._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"export-options","export-options",672321679),new cljs.core.Keyword(null,"keep-only-level<=N","keep-only-level<=N",-1010734857)], null));
var ast__$3 = (((keep_level_LT__EQ_n > (0)))?(frontend.handler.export$.common.keep_only_level_LT__EQ_n.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.export$.common.keep_only_level_LT__EQ_n.cljs$core$IFn$_invoke$arity$2(ast__$2,keep_level_LT__EQ_n) : frontend.handler.export$.common.keep_only_level_LT__EQ_n.call(null,ast__$2,keep_level_LT__EQ_n)):ast__$2);
var ast_STAR_ = (frontend.handler.export$.common.replace_block_AMPERSAND_page_reference_AMPERSAND_embed.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.export$.common.replace_block_AMPERSAND_page_reference_AMPERSAND_embed.cljs$core$IFn$_invoke$arity$1(ast__$3) : frontend.handler.export$.common.replace_block_AMPERSAND_page_reference_AMPERSAND_embed.call(null,ast__$3));
var ast_STAR__STAR_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("no-indent",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common_impl._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"export-options","export-options",672321679),new cljs.core.Keyword(null,"indent-style","indent-style",855468755)], null))))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common.replace_Heading_with_Paragraph,ast_STAR_):ast_STAR_);
var config_for_walk_block_ast = (function (){var G__85354 = cljs.core.PersistentArrayMap.EMPTY;
var G__85354__$1 = (cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common_impl._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"export-options","export-options",672321679),new cljs.core.Keyword(null,"remove-emphasis?","remove-emphasis?",-1751965539)], null)))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__85354,new cljs.core.Keyword(null,"mapcat-fns-on-inline-ast","mapcat-fns-on-inline-ast",-988900078),cljs.core.conj,frontend.handler.export$.common.remove_emphasis):G__85354);
var G__85354__$2 = (cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common_impl._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"export-options","export-options",672321679),new cljs.core.Keyword(null,"remove-page-ref-brackets?","remove-page-ref-brackets?",-276534720)], null)))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__85354__$1,new cljs.core.Keyword(null,"map-fns-on-inline-ast","map-fns-on-inline-ast",-1834139513),cljs.core.conj,frontend.handler.export$.common.remove_page_ref_brackets):G__85354__$1);
var G__85354__$3 = (cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common_impl._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"export-options","export-options",672321679),new cljs.core.Keyword(null,"remove-tags?","remove-tags?",690905372)], null)))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__85354__$2,new cljs.core.Keyword(null,"mapcat-fns-on-inline-ast","mapcat-fns-on-inline-ast",-988900078),cljs.core.conj,frontend.handler.export$.common.remove_tags):G__85354__$2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("no-indent",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common_impl._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"export-options","export-options",672321679),new cljs.core.Keyword(null,"indent-style","indent-style",855468755)], null)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__85354__$3,new cljs.core.Keyword(null,"mapcat-fns-on-inline-ast","mapcat-fns-on-inline-ast",-988900078),cljs.core.conj,frontend.handler.export$.common.remove_prefix_spaces_in_Plain);
} else {
return G__85354__$3;
}
})();
var ast_STAR__STAR__STAR_ = (((!(cljs.core.empty_QMARK_(config_for_walk_block_ast))))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common.walk_block_ast,config_for_walk_block_ast),ast_STAR__STAR_):ast_STAR__STAR_);
var hiccup = clojure.zip.root(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(frontend.handler.export$.opml.block_ast__GT_hiccup,frontend.handler.export$.opml.init_opml_body_hiccup,ast_STAR__STAR__STAR_));
return frontend.handler.export$.opml.zip_loc__GT_opml(hiccup,title);
}finally {(frontend.handler.export$.opml._STAR_opml_state_STAR_ = _STAR_opml_state_STAR__orig_val__85351);

(frontend.handler.export$.common_impl._STAR_state_STAR_ = _STAR_state_STAR__orig_val__85350);
}}));

(frontend.handler.export$.opml.export_helper.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(frontend.handler.export$.opml.export_helper.cljs$lang$applyTo = (function (seq85344){
var G__85345 = cljs.core.first(seq85344);
var seq85344__$1 = cljs.core.next(seq85344);
var G__85346 = cljs.core.first(seq85344__$1);
var seq85344__$2 = cljs.core.next(seq85344__$1);
var G__85347 = cljs.core.first(seq85344__$2);
var seq85344__$3 = cljs.core.next(seq85344__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__85345,G__85346,G__85347,seq85344__$3);
}));

/**
 * options: see also `export-blocks-as-markdown`
 */
frontend.handler.export$.opml.export_blocks_as_opml = (function frontend$handler$export$opml$export_blocks_as_opml(repo,root_block_uuids_or_page_uuid,options){
if(((cljs.core.coll_QMARK_(root_block_uuids_or_page_uuid)) || (cljs.core.uuid_QMARK_(root_block_uuids_or_page_uuid)))){
} else {
throw (new Error("Assert failed: (or (coll? root-block-uuids-or-page-uuid) (uuid? root-block-uuids-or-page-uuid))"));
}

var remove_options = cljs.core.set(new cljs.core.Keyword(null,"remove-options","remove-options",768737839).cljs$core$IFn$_invoke$arity$1(options));
var include_properties_QMARK_ = (!(cljs.core.contains_QMARK_(remove_options,new cljs.core.Keyword(null,"property","property",-1114278232))));
var open_blocks_only_QMARK_ = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"other-options","other-options",170412142),new cljs.core.Keyword(null,"open-blocks-only","open-blocks-only",2015107442)], null)));
if(cljs.core.truth_(goog.DEBUG)){
var k__34199__auto__ = new cljs.core.Keyword(null,"export-blocks-as-opml","export-blocks-as-opml",-1592224678);
console.time(k__34199__auto__);

var res__34200__auto__ = promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.export$.common._LT_get_blocks_export_data(repo,root_block_uuids_or_page_uuid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open-blocks-only?","open-blocks-only?",-1267402991),open_blocks_only_QMARK_,new cljs.core.Keyword(null,"include-properties?","include-properties?",1631601018),include_properties_QMARK_], null))),(function (p__85357){
var map__85358 = p__85357;
var map__85358__$1 = cljs.core.__destructure_map(map__85358);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85358__$1,new cljs.core.Keyword(null,"content","content",15833224));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85358__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85358__$1,new cljs.core.Keyword(null,"title","title",636505583));
return promesa.protocols._promise(frontend.handler.export$.opml.export_helper.cljs$core$IFn$_invoke$arity$variadic(content,format,options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"title","title",636505583),title], 0)));
}));
}));
console.timeEnd(k__34199__auto__);

return res__34200__auto__;
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.export$.common._LT_get_blocks_export_data(repo,root_block_uuids_or_page_uuid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open-blocks-only?","open-blocks-only?",-1267402991),open_blocks_only_QMARK_,new cljs.core.Keyword(null,"include-properties?","include-properties?",1631601018),include_properties_QMARK_], null))),(function (p__85359){
var map__85360 = p__85359;
var map__85360__$1 = cljs.core.__destructure_map(map__85360);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85360__$1,new cljs.core.Keyword(null,"content","content",15833224));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85360__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85360__$1,new cljs.core.Keyword(null,"title","title",636505583));
return promesa.protocols._promise(frontend.handler.export$.opml.export_helper.cljs$core$IFn$_invoke$arity$variadic(content,format,options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"title","title",636505583),title], 0)));
}));
}));
}
});

//# sourceMappingURL=frontend.handler.export.opml.js.map
