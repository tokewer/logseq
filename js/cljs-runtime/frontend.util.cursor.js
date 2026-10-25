goog.provide('frontend.util.cursor');
goog.scope(function(){
  frontend.util.cursor.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.util.cursor.closer = (function frontend$util$cursor$closer(a,b,c){
var a_left = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(a);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})();
var b_left = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(b);
var c_left = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return Number.MAX_SAFE_INTEGER;
}
})();
if(((b_left - a_left) < (c_left - b_left))){
return a;
} else {
return c;
}
});
frontend.util.cursor.mock_char_pos = (function frontend$util$cursor$mock_char_pos(e){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),e.offsetLeft,new cljs.core.Keyword(null,"top","top",-1856271961),e.offsetTop,new cljs.core.Keyword(null,"pos","pos",-864607220),(cljs.core.second(clojure.string.split.cljs$core$IFn$_invoke$arity$2(e.id,"_")) | 0)], null);
});
/**
 * The .mock-text mirror that belongs to `input`: the one inside the same
 * .editor-inner, so two mounted editors each keep their own. Nil without an
 * input: the comments UI mounts several editors at once, and another
 * editor's mirror holds another block's text in a box of another width, so a
 * caret measured against it lands on the wrong row and column.
 */
frontend.util.cursor.mock_text_el = (function frontend$util$cursor$mock_text_el(input){
var G__41006 = input;
var G__41006__$1 = (((G__41006 == null))?null:G__41006.closest(".editor-inner"));
if((G__41006__$1 == null)){
return null;
} else {
return G__41006__$1.querySelector(".mock-text");
}
});
/**
 * Fills the input's .mock-text mirror (the hidden copy of the editing
 * textarea) with one span per grapheme of the input's value plus a trailing
 * "0", ids mock-text_<char index>, a newline rendered as "0" followed by
 * <br>. The caret helpers below read this DOM. Built on demand, and only when
 * the value changed since the last build, so a keystroke runs none of this.
 */
frontend.util.cursor.build_mock_text_BANG_ = (function frontend$util$cursor$build_mock_text_BANG_(input){
var temp__5825__auto__ = frontend.util.cursor.mock_text_el(input);
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
var value = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(input.value)+"0");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,frontend.util.cursor.goog$module$goog$object.get(el,"__mockValue"))){
return null;
} else {
var frag = document.createDocumentFragment();
var idx_41111 = (0);
var graphemes_41112 = cljs.core.seq(frontend.util.split_graphemes(value));
while(true){
var temp__5825__auto___41113__$1 = cljs.core.first(graphemes_41112);
if(cljs.core.truth_(temp__5825__auto___41113__$1)){
var c_41114 = temp__5825__auto___41113__$1;
var span_41115 = document.createElement("span");
(span_41115.id = (""+"mock-text_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx_41111)));

(span_41115.textContent = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c_41114,"\n"))?"0":c_41114));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c_41114,"\n")){
span_41115.appendChild(document.createElement("br"));
} else {
}

frag.appendChild(span_41115);

var G__41117 = (idx_41111 + cljs.core.count(c_41114));
var G__41118 = cljs.core.rest(graphemes_41112);
idx_41111 = G__41117;
graphemes_41112 = G__41118;
continue;
} else {
}
break;
}

(el.textContent = "");

el.appendChild(frag);

return frontend.util.cursor.goog$module$goog$object.set(el,"__mockValue",value);
}
} else {
return null;
}
});
/**
 * Get caret offset position as well as input element rect.
 * 
 *   This function is only used by autocomplete command or up/down command
 *   where offset position is needed.
 * 
 *   If you only need character position, use `pos` instead. Do NOT call this.
 */
frontend.util.cursor.get_caret_pos = (function frontend$util$cursor$get_caret_pos(var_args){
var G__41010 = arguments.length;
switch (G__41010) {
case 1:
return frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1 = (function (input){
return frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$2(input,frontend.util.get_selection_start(input));
}));

(frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$2 = (function (input,pos){
if(cljs.core.truth_(input)){
var rect = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(input.getBoundingClientRect().toJSON());
var grapheme_pos = frontend.util.get_graphemes_pos(input.value,pos);
frontend.util.cursor.build_mock_text_BANG_(input);

try{var G__41013 = frontend.util.cursor.mock_text_el(input);
var G__41013__$1 = (((G__41013 == null))?null:G__41013.children);
var G__41013__$2 = (((G__41013__$1 == null))?null:G__41013__$1.item(grapheme_pos));
var G__41013__$3 = (((G__41013__$2 == null))?null:frontend.util.cursor.mock_char_pos(G__41013__$2));
if((G__41013__$3 == null)){
return null;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41013__$3,new cljs.core.Keyword(null,"rect","rect",-108902628),rect);
}
}catch (e41012){var e = e41012;
console.log("index error",e);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"rect","rect",-108902628),rect,new cljs.core.Keyword(null,"left","left",-399115937),Number.MAX_SAFE_INTEGER,new cljs.core.Keyword(null,"top","top",-1856271961),Number.MAX_SAFE_INTEGER], null);
}} else {
return null;
}
}));

(frontend.util.cursor.get_caret_pos.cljs$lang$maxFixedArity = 2);

frontend.util.cursor.pos = (function frontend$util$cursor$pos(input){
if(cljs.core.truth_(input)){
return frontend.util.get_selection_start(input);
} else {
return null;
}
});
frontend.util.cursor.start_QMARK_ = (function frontend$util$cursor$start_QMARK_(input){
var and__5140__auto__ = input;
if(cljs.core.truth_(and__5140__auto__)){
return (frontend.util.get_selection_start(input) === (0));
} else {
return and__5140__auto__;
}
});
frontend.util.cursor.end_QMARK_ = (function frontend$util$cursor$end_QMARK_(input){
var and__5140__auto__ = input;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(input.value),frontend.util.get_selection_start(input));
} else {
return and__5140__auto__;
}
});
frontend.util.cursor.set_selection_to = (function frontend$util$cursor$set_selection_to(input,n,m){
return input.setSelectionRange(n,m);
});
frontend.util.cursor.move_cursor_to = (function frontend$util$cursor$move_cursor_to(var_args){
var G__41019 = arguments.length;
switch (G__41019) {
case 2:
return frontend.util.cursor.move_cursor_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.util.cursor.move_cursor_to.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.util.cursor.move_cursor_to.cljs$core$IFn$_invoke$arity$2 = (function (input,n){
return frontend.util.cursor.move_cursor_to.cljs$core$IFn$_invoke$arity$3(input,n,false);
}));

(frontend.util.cursor.move_cursor_to.cljs$core$IFn$_invoke$arity$3 = (function (input,n,delay_QMARK__SINGLEQUOTE_){
if(typeof n === 'number'){
input.setSelectionRange(n,n);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.activeElement,input)){
return null;
} else {
var focus = (function (){
return input.focus();
});
if(cljs.core.truth_(delay_QMARK__SINGLEQUOTE_)){
return setTimeout(focus,(16));
} else {
return focus();
}
}
} else {
return null;
}
}));

(frontend.util.cursor.move_cursor_to.cljs$lang$maxFixedArity = 3);

frontend.util.cursor.move_cursor_forward = (function frontend$util$cursor$move_cursor_forward(var_args){
var G__41023 = arguments.length;
switch (G__41023) {
case 1:
return frontend.util.cursor.move_cursor_forward.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.util.cursor.move_cursor_forward.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.util.cursor.move_cursor_forward.cljs$core$IFn$_invoke$arity$1 = (function (input){
return frontend.util.cursor.move_cursor_forward.cljs$core$IFn$_invoke$arity$2(input,(1));
}));

(frontend.util.cursor.move_cursor_forward.cljs$core$IFn$_invoke$arity$2 = (function (input,n){
if(cljs.core.truth_(input)){
var map__41026 = frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input);
var map__41026__$1 = cljs.core.__destructure_map(map__41026);
var pos_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41026__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var pos_SINGLEQUOTE__SINGLEQUOTE_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1)))?(function (){var or__5142__auto__ = frontend.util.safe_inc_current_pos_from_start(input.value,pos_SINGLEQUOTE_);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (pos_SINGLEQUOTE_ + (1));
}
})():(pos_SINGLEQUOTE_ + n));
return frontend.util.cursor.move_cursor_to.cljs$core$IFn$_invoke$arity$2(input,pos_SINGLEQUOTE__SINGLEQUOTE_);
} else {
return null;
}
}));

(frontend.util.cursor.move_cursor_forward.cljs$lang$maxFixedArity = 2);

frontend.util.cursor.move_cursor_backward = (function frontend$util$cursor$move_cursor_backward(var_args){
var G__41028 = arguments.length;
switch (G__41028) {
case 1:
return frontend.util.cursor.move_cursor_backward.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.util.cursor.move_cursor_backward.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.util.cursor.move_cursor_backward.cljs$core$IFn$_invoke$arity$1 = (function (input){
return frontend.util.cursor.move_cursor_backward.cljs$core$IFn$_invoke$arity$2(input,(1));
}));

(frontend.util.cursor.move_cursor_backward.cljs$core$IFn$_invoke$arity$2 = (function (input,n){
if(cljs.core.truth_(input)){
var map__41029 = frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input);
var map__41029__$1 = cljs.core.__destructure_map(map__41029);
var pos_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41029__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var pos_SINGLEQUOTE__SINGLEQUOTE_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1)))?frontend.util.safe_dec_current_pos_from_end(input.value,pos_SINGLEQUOTE_):(pos_SINGLEQUOTE_ - n));
return frontend.util.cursor.move_cursor_to.cljs$core$IFn$_invoke$arity$2(input,pos_SINGLEQUOTE__SINGLEQUOTE_);
} else {
return null;
}
}));

(frontend.util.cursor.move_cursor_backward.cljs$lang$maxFixedArity = 2);

frontend.util.cursor.get_input_content_AMPERSAND_pos = (function frontend$util$cursor$get_input_content_AMPERSAND_pos(input){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.cursor.goog$module$goog$object.get(input,"value"),frontend.util.cursor.pos(input)], null);
});
frontend.util.cursor.beginning_of_line_QMARK_ = (function frontend$util$cursor$beginning_of_line_QMARK_(input){
var vec__41030 = frontend.util.cursor.get_input_content_AMPERSAND_pos(input);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41030,(0),null);
var pos_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41030,(1),null);
if(cljs.core.truth_(content)){
var or__5142__auto__ = (pos_SINGLEQUOTE_ === (0));
if(or__5142__auto__){
return or__5142__auto__;
} else {
var temp__5825__auto__ = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(pos_SINGLEQUOTE_ - (1)),pos_SINGLEQUOTE_);
if(cljs.core.truth_(temp__5825__auto__)){
var pre_char = temp__5825__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pre_char,"\n");
} else {
return null;
}
}
} else {
return null;
}
});
frontend.util.cursor.move_cursor_to_start = (function frontend$util$cursor$move_cursor_to_start(input){
return frontend.util.cursor.move_cursor_to.cljs$core$IFn$_invoke$arity$2(input,(0));
});
frontend.util.cursor.move_cursor_to_end = (function frontend$util$cursor$move_cursor_to_end(input){
var pos_SINGLEQUOTE_ = cljs.core.count(frontend.util.cursor.goog$module$goog$object.get(input,"value"));
return frontend.util.cursor.move_cursor_to.cljs$core$IFn$_invoke$arity$2(input,pos_SINGLEQUOTE_);
});
frontend.util.cursor.move_cursor_forward_by_word = (function frontend$util$cursor$move_cursor_forward_by_word(input){
var val = input.value;
var current = frontend.util.get_selection_start(input);
var current__$1 = (function (){var idx = current;
while(true){
if(cljs.core.truth_((function (){var G__41038 = frontend.util.nth_safe(val,idx);
var fexpr__41037 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"\n",null], null), null);
return (fexpr__41037.cljs$core$IFn$_invoke$arity$1 ? fexpr__41037.cljs$core$IFn$_invoke$arity$1(G__41038) : fexpr__41037.call(null,G__41038));
})())){
var G__41150 = (idx + (1));
idx = G__41150;
continue;
} else {
return idx;
}
break;
}
})();
var idx = (function (){var or__5142__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(val," ",current__$1),clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(val,"\n",current__$1)], null)));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.count(val);
}
})();
return frontend.util.cursor.move_cursor_to.cljs$core$IFn$_invoke$arity$2(input,idx);
});
frontend.util.cursor.move_cursor_backward_by_word = (function frontend$util$cursor$move_cursor_backward_by_word(input){
var val = input.value;
var current = frontend.util.get_selection_start(input);
var prev = (function (){var or__5142__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$3(val," ",(current - (1))),clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$3(val,"\n",(current - (1)))], null)));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})();
var idx = (((prev === (0)))?(0):((function (){var idx = prev;
while(true){
if(cljs.core.truth_((function (){var G__41051 = frontend.util.nth_safe(val,idx);
var fexpr__41050 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"\n",null], null), null);
return (fexpr__41050.cljs$core$IFn$_invoke$arity$1 ? fexpr__41050.cljs$core$IFn$_invoke$arity$1(G__41051) : fexpr__41050.call(null,G__41051));
})())){
var G__41155 = (idx - (1));
idx = G__41155;
continue;
} else {
return idx;
}
break;
}
})() + (1)));
return frontend.util.cursor.move_cursor_to.cljs$core$IFn$_invoke$arity$2(input,idx);
});
frontend.util.cursor.textarea_cursor_rect_first_row_QMARK_ = (function frontend$util$cursor$textarea_cursor_rect_first_row_QMARK_(cursor,input){
var first_elm = (function (){var G__41053 = frontend.util.cursor.mock_text_el(input);
if((G__41053 == null)){
return null;
} else {
return G__41053.firstElementChild;
}
})();
var and__5140__auto__ = first_elm;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_elm.offsetTop,new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(cursor));
} else {
return and__5140__auto__;
}
});
frontend.util.cursor.textarea_cursor_first_row_QMARK_ = (function frontend$util$cursor$textarea_cursor_first_row_QMARK_(input){
return frontend.util.cursor.textarea_cursor_rect_first_row_QMARK_(frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input),input);
});
frontend.util.cursor.textarea_cursor_rect_last_row_QMARK_ = (function frontend$util$cursor$textarea_cursor_rect_last_row_QMARK_(cursor,input){
var last_elm = (function (){var G__41063 = frontend.util.cursor.mock_text_el(input);
if((G__41063 == null)){
return null;
} else {
return G__41063.lastElementChild;
}
})();
var and__5140__auto__ = last_elm;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_elm.offsetTop,new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(cursor));
} else {
return and__5140__auto__;
}
});
frontend.util.cursor.textarea_cursor_last_row_QMARK_ = (function frontend$util$cursor$textarea_cursor_last_row_QMARK_(input){
return frontend.util.cursor.textarea_cursor_rect_last_row_QMARK_(frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input),input);
});
/**
 * The caret offset one visual row above or below `cursor`, read from the
 * input's own mirror, which both callers have already built through
 * get-caret-pos. Nil when the mirror is gone or when `cursor` sits on no row
 * of it: the row arithmetic below reads a caret on an unknown row as one
 * partition and would then move the caret to the far end of the block.
 */
frontend.util.cursor.next_cursor_pos_up_down = (function frontend$util$cursor$next_cursor_pos_up_down(input,direction,cursor){
var temp__5825__auto__ = frontend.util.cursor.mock_text_el(input);
if(cljs.core.truth_(temp__5825__auto__)){
var mock_text = temp__5825__auto__;
var elms = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getChildren(mock_text));
var chars_SINGLEQUOTE_ = cljs.core.group_by(new cljs.core.Keyword(null,"top","top",-1856271961),cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.util.cursor.mock_char_pos,elms));
var tops = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(chars_SINGLEQUOTE_));
if(cljs.core.contains_QMARK_(chars_SINGLEQUOTE_,new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(cursor))){
var tops_p = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2((function (p1__41071_SHARP_){
return (new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(cursor) === p1__41071_SHARP_);
}),tops);
var line_next = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),direction))?cljs.core.last(cljs.core.first(tops_p)):cljs.core.first(cljs.core.last(tops_p)));
var lefts = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2((function (char_pos){
return (new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(char_pos) <= new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(cursor));
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(chars_SINGLEQUOTE_,line_next));
var left_a = cljs.core.last(cljs.core.first(lefts));
var left_c = cljs.core.first(cljs.core.last(lefts));
var closer_SINGLEQUOTE_ = ((((2) > cljs.core.count(lefts)))?left_a:frontend.util.cursor.closer(left_a,cursor,left_c));
return new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(closer_SINGLEQUOTE_);
} else {
return null;
}
} else {
return null;
}
});
frontend.util.cursor.move_cursor_up_down = (function frontend$util$cursor$move_cursor_up_down(input,direction){
return frontend.util.cursor.move_cursor_to.cljs$core$IFn$_invoke$arity$2(input,frontend.util.cursor.next_cursor_pos_up_down(input,direction,frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input)));
});
frontend.util.cursor.move_cursor_up = (function frontend$util$cursor$move_cursor_up(input){
return frontend.util.cursor.move_cursor_up_down(input,new cljs.core.Keyword(null,"up","up",-269712113));
});
frontend.util.cursor.move_cursor_down = (function frontend$util$cursor$move_cursor_down(input){
return frontend.util.cursor.move_cursor_up_down(input,new cljs.core.Keyword(null,"down","down",1565245570));
});
frontend.util.cursor.select_up_down = (function frontend$util$cursor$select_up_down(input,direction,anchor,cursor_rect){
var temp__5825__auto__ = frontend.util.cursor.next_cursor_pos_up_down(input,direction,cursor_rect);
if(cljs.core.truth_(temp__5825__auto__)){
var next_cursor = temp__5825__auto__;
if((anchor <= next_cursor)){
return input.setSelectionRange(anchor,next_cursor,"forward");
} else {
return input.setSelectionRange(next_cursor,anchor,"backward");
}
} else {
return null;
}
});

//# sourceMappingURL=frontend.util.cursor.js.map
