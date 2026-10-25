goog.provide('frontend.handler.editor.format');
goog.scope(function(){
  frontend.handler.editor.format.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.handler.editor.format.get_selection_and_format = (function frontend$handler$editor$format$get_selection_and_format(){
var temp__5825__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5825__auto__)){
var block = temp__5825__auto__;
if(cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))){
var temp__5825__auto____$1 = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5825__auto____$1)){
var edit_id = temp__5825__auto____$1;
var temp__5825__auto____$2 = goog.dom.getElement(edit_id);
if(cljs.core.truth_(temp__5825__auto____$2)){
var input = temp__5825__auto____$2;
var selection_start = frontend.util.get_selection_start(input);
var selection_end = frontend.util.get_selection_end(input);
var value = frontend.handler.editor.format.goog$module$goog$object.get(input,"value");
var selection = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selection_start,selection_end))?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,selection_start,selection_end):null);
var selection_start__$1 = (selection_start + cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__66196_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(" ",p1__66196_SHARP_);
}),selection)));
var selection_end__$1 = (selection_end - cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__66197_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(" ",p1__66197_SHARP_);
}),cljs.core.reverse(selection))));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"selection-start","selection-start",-888859581),selection_start__$1,new cljs.core.Keyword(null,"selection-end","selection-end",696987835),selection_end__$1,new cljs.core.Keyword(null,"selection","selection",975998651),(function (){var G__66198 = selection;
if((G__66198 == null)){
return null;
} else {
return clojure.string.trim(G__66198);
}
})(),new cljs.core.Keyword(null,"format","format",-1306924766),cljs.core.get.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword(null,"markdown","markdown",1227225089)),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"block","block",664686210),block,new cljs.core.Keyword(null,"edit-id","edit-id",-639876554),edit_id,new cljs.core.Keyword(null,"input","input",556931961),input], null);
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
});
frontend.handler.editor.format.format_text_BANG_ = (function frontend$handler$editor$format$format_text_BANG_(pattern_fn){
var temp__5825__auto__ = frontend.handler.editor.format.get_selection_and_format();
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
var map__66204 = m;
var map__66204__$1 = cljs.core.__destructure_map(map__66204);
var selection_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66204__$1,new cljs.core.Keyword(null,"selection-start","selection-start",-888859581));
var selection_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66204__$1,new cljs.core.Keyword(null,"selection-end","selection-end",696987835));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66204__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66204__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66204__$1,new cljs.core.Keyword(null,"value","value",305978217));
var edit_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66204__$1,new cljs.core.Keyword(null,"edit-id","edit-id",-639876554));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66204__$1,new cljs.core.Keyword(null,"input","input",556931961));
var pattern = (pattern_fn.cljs$core$IFn$_invoke$arity$1 ? pattern_fn.cljs$core$IFn$_invoke$arity$1(format) : pattern_fn.call(null,format));
var pattern_count = cljs.core.count(pattern);
var pattern_prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),(selection_start - pattern_count)),selection_start);
var pattern_suffix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,selection_end,cljs.core.min.cljs$core$IFn$_invoke$arity$2(cljs.core.count(value),(selection_end + pattern_count)));
var already_wrapped_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(pattern,pattern_prefix,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern_suffix], 0));
var prefix = ((already_wrapped_QMARK_)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),(selection_start - pattern_count)):cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),selection_start));
var postfix = ((already_wrapped_QMARK_)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,(selection_end + pattern_count)):cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,selection_end));
var inner_value = (function (){var G__66205 = selection;
if((!(already_wrapped_QMARK_))){
return (function (p1__66200_SHARP_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pattern)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__66200_SHARP_)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pattern));
})(G__66205);
} else {
return G__66205;
}
})();
var new_value = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inner_value)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(postfix));
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(edit_id,new_value);

if(already_wrapped_QMARK_){
return frontend.util.cursor.set_selection_to(input,(selection_start - pattern_count),(selection_end - pattern_count));
} else {
if(cljs.core.truth_(selection)){
return frontend.util.cursor.move_cursor_to.cljs$core$IFn$_invoke$arity$2(input,(selection_end + pattern_count));
} else {
return frontend.util.cursor.set_selection_to(input,(selection_start + pattern_count),(selection_end + pattern_count));

}
}
} else {
return null;
}
});
frontend.handler.editor.format.bold_format_BANG_ = (function frontend$handler$editor$format$bold_format_BANG_(){
return frontend.handler.editor.format.format_text_BANG_(frontend.config.get_bold);
});
frontend.handler.editor.format.italics_format_BANG_ = (function frontend$handler$editor$format$italics_format_BANG_(){
return frontend.handler.editor.format.format_text_BANG_(frontend.config.get_italic);
});
frontend.handler.editor.format.highlight_format_BANG_ = (function frontend$handler$editor$format$highlight_format_BANG_(){
var temp__5825__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5825__auto__)){
var block = temp__5825__auto__;
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword(null,"markdown","markdown",1227225089));
return frontend.handler.editor.format.format_text_BANG_((function (){
return frontend.config.get_highlight(format);
}));
} else {
return null;
}
});
frontend.handler.editor.format.strike_through_format_BANG_ = (function frontend$handler$editor$format$strike_through_format_BANG_(){
return frontend.handler.editor.format.format_text_BANG_(frontend.config.get_strike_through);
});
frontend.handler.editor.format.html_link_format_BANG_ = (function frontend$handler$editor$format$html_link_format_BANG_(var_args){
var G__66209 = arguments.length;
switch (G__66209) {
case 0:
return frontend.handler.editor.format.html_link_format_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.editor.format.html_link_format_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.editor.format.html_link_format_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.handler.editor.format.html_link_format_BANG_.cljs$core$IFn$_invoke$arity$1(null);
}));

(frontend.handler.editor.format.html_link_format_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (text){
var temp__5825__auto__ = frontend.handler.editor.format.get_selection_and_format();
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
var map__66210 = m;
var map__66210__$1 = cljs.core.__destructure_map(map__66210);
var selection_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66210__$1,new cljs.core.Keyword(null,"selection-start","selection-start",-888859581));
var selection_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66210__$1,new cljs.core.Keyword(null,"selection-end","selection-end",696987835));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66210__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66210__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66210__$1,new cljs.core.Keyword(null,"value","value",305978217));
var edit_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66210__$1,new cljs.core.Keyword(null,"edit-id","edit-id",-639876554));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66210__$1,new cljs.core.Keyword(null,"input","input",556931961));
var empty_selection_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selection_start,selection_end);
var selection_link_QMARK_ = (function (){var and__5140__auto__ = selection;
if(cljs.core.truth_(and__5140__auto__)){
return logseq.graph_parser.mldoc.mldoc_link_QMARK_(format,selection);
} else {
return and__5140__auto__;
}
})();
var vec__66211 = ((empty_selection_QMARK_)?frontend.config.get_empty_link_and_forward_pos(format):(cljs.core.truth_((function (){var and__5140__auto__ = text;
if(cljs.core.truth_(and__5140__auto__)){
return selection_link_QMARK_;
} else {
return and__5140__auto__;
}
})())?frontend.config.with_label_link(format,text,selection):(cljs.core.truth_(text)?frontend.config.with_label_link(format,selection,text):(cljs.core.truth_(selection_link_QMARK_)?frontend.config.with_default_link(format,selection):frontend.config.with_default_label(format,selection)
))));
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66211,(0),null);
var forward_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66211,(1),null);
var new_value = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),selection_start))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,selection_end)));
var cur_pos = (function (){var or__5142__auto__ = selection_start;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.util.cursor.pos(input);
}
})();
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(edit_id,new_value);

return frontend.util.cursor.move_cursor_to.cljs$core$IFn$_invoke$arity$2(input,(cur_pos + forward_pos));
} else {
return null;
}
}));

(frontend.handler.editor.format.html_link_format_BANG_.cljs$lang$maxFixedArity = 1);

frontend.handler.editor.format.open_block_in_sidebar_BANG_ = (function frontend$handler$editor$format$open_block_in_sidebar_BANG_(block_id){
if(cljs.core.truth_(block_id)){
var repo = frontend.state.get_current_repo();
var lookup_ref = ((typeof block_id === 'number')?block_id:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null)], null)], null),lookup_ref], 0))),(function (block){
return promesa.protocols._promise((function (){var temp__5825__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5825__auto__)){
var db_id = temp__5825__auto__;
return frontend.state.sidebar_add_block_BANG_(repo,db_id,(cljs.core.truth_(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block))?new cljs.core.Keyword(null,"block","block",664686210):new cljs.core.Keyword(null,"page","page",849072397)));
} else {
return null;
}
})());
}));
}));
} else {
return null;
}
});
frontend.handler.editor.format.reset_cursor_range_BANG_ = (function frontend$handler$editor$format$reset_cursor_range_BANG_(node){
if(cljs.core.truth_(node)){
return frontend.state.set_cursor_range_BANG_(frontend.util.caret_range(node));
} else {
return null;
}
});
frontend.handler.editor.format.restore_cursor_pos_BANG_ = (function frontend$handler$editor$format$restore_cursor_pos_BANG_(id,markup){
var temp__5825__auto__ = goog.dom.getElement((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
var cursor_range = frontend.state.get_cursor_range();
var pos = (function (){var or__5142__auto__ = frontend.state.get_editor_last_pos();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto__ = cursor_range;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.diff.find_position(markup,cursor_range);
} else {
return and__5140__auto__;
}
}
})();
return frontend.util.cursor.move_cursor_to.cljs$core$IFn$_invoke$arity$2(node,pos);
} else {
return null;
}
});
frontend.handler.editor.format.highlight_block_BANG_ = (function frontend$handler$editor$format$highlight_block_BANG_(block_uuid){
var blocks = frontend.util.get_blocks_by_id(block_uuid);
var seq__66224 = cljs.core.seq(blocks);
var chunk__66225 = null;
var count__66226 = (0);
var i__66227 = (0);
while(true){
if((i__66227 < count__66226)){
var block = chunk__66225.cljs$core$IIndexed$_nth$arity$2(null,i__66227);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(block,"block-highlight");


var G__66248 = seq__66224;
var G__66249 = chunk__66225;
var G__66250 = count__66226;
var G__66251 = (i__66227 + (1));
seq__66224 = G__66248;
chunk__66225 = G__66249;
count__66226 = G__66250;
i__66227 = G__66251;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__66224);
if(temp__5825__auto__){
var seq__66224__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66224__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__66224__$1);
var G__66253 = cljs.core.chunk_rest(seq__66224__$1);
var G__66254 = c__5673__auto__;
var G__66255 = cljs.core.count(c__5673__auto__);
var G__66256 = (0);
seq__66224 = G__66253;
chunk__66225 = G__66254;
count__66226 = G__66255;
i__66227 = G__66256;
continue;
} else {
var block = cljs.core.first(seq__66224__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(block,"block-highlight");


var G__66257 = cljs.core.next(seq__66224__$1);
var G__66258 = null;
var G__66259 = (0);
var G__66260 = (0);
seq__66224 = G__66257;
chunk__66225 = G__66258;
count__66226 = G__66259;
i__66227 = G__66260;
continue;
}
} else {
return null;
}
}
break;
}
});
frontend.handler.editor.format.unhighlight_blocks_BANG_ = (function frontend$handler$editor$format$unhighlight_blocks_BANG_(){
var blocks = (function (){var G__66228 = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.getElementsByClassName("block-highlight"));
var G__66228__$1 = (((G__66228 == null))?null:cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((2),G__66228));
if((G__66228__$1 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,G__66228__$1);
}
})();
var seq__66231 = cljs.core.seq(blocks);
var chunk__66232 = null;
var count__66233 = (0);
var i__66234 = (0);
while(true){
if((i__66234 < count__66233)){
var block = chunk__66232.cljs$core$IIndexed$_nth$arity$2(null,i__66234);
goog.dom.classes.remove(block,"block-highlight");


var G__66263 = seq__66231;
var G__66264 = chunk__66232;
var G__66265 = count__66233;
var G__66266 = (i__66234 + (1));
seq__66231 = G__66263;
chunk__66232 = G__66264;
count__66233 = G__66265;
i__66234 = G__66266;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__66231);
if(temp__5825__auto__){
var seq__66231__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66231__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__66231__$1);
var G__66267 = cljs.core.chunk_rest(seq__66231__$1);
var G__66268 = c__5673__auto__;
var G__66269 = cljs.core.count(c__5673__auto__);
var G__66270 = (0);
seq__66231 = G__66267;
chunk__66232 = G__66268;
count__66233 = G__66269;
i__66234 = G__66270;
continue;
} else {
var block = cljs.core.first(seq__66231__$1);
goog.dom.classes.remove(block,"block-highlight");


var G__66271 = cljs.core.next(seq__66231__$1);
var G__66272 = null;
var G__66273 = (0);
var G__66274 = (0);
seq__66231 = G__66271;
chunk__66232 = G__66272;
count__66233 = G__66273;
i__66234 = G__66274;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=frontend.handler.editor.format.js.map
