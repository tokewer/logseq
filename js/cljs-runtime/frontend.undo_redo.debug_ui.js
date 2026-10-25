goog.provide('frontend.undo_redo.debug_ui');
frontend.undo_redo.debug_ui.strip_tx_data = (function frontend$undo_redo$debug_ui$strip_tx_data(x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv((function (m,k,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),k)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(frontend.undo_redo.debug_ui.strip_tx_data.cljs$core$IFn$_invoke$arity$1 ? frontend.undo_redo.debug_ui.strip_tx_data.cljs$core$IFn$_invoke$arity$1(v) : frontend.undo_redo.debug_ui.strip_tx_data.call(null,v)));
}
}),cljs.core.PersistentArrayMap.EMPTY,x);
} else {
if(cljs.core.vector_QMARK_(x)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.undo_redo.debug_ui.strip_tx_data,x);
} else {
if(cljs.core.seq_QMARK_(x)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.undo_redo.debug_ui.strip_tx_data,x);
} else {
if(cljs.core.set_QMARK_(x)){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.undo_redo.debug_ui.strip_tx_data,x));
} else {
return x;

}
}
}
}
});
frontend.undo_redo.debug_ui.entry_title = (function frontend$undo_redo$debug_ui$entry_title(entry){
var entry_SINGLEQUOTE_ = ((cljs.core.vector_QMARK_(entry))?entry:cljs.core.vec(entry));
var or__5142__auto__ = "entry";
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.first(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (item){
if((item instanceof cljs.core.Keyword)){
return cljs.core.name(item);
} else {
if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.first(item) instanceof cljs.core.Keyword)))){
return cljs.core.name(cljs.core.first(item));
} else {
return null;

}
}
}),entry_SINGLEQUOTE_));
}
});
frontend.undo_redo.debug_ui.ui_entry_tags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("frontend.worker.undo-redo","ui-state","frontend.worker.undo-redo/ui-state",-396823612),null,new cljs.core.Keyword("frontend.undo-redo","record-editor-info","frontend.undo-redo/record-editor-info",-1249633720),null,new cljs.core.Keyword("frontend.undo-redo","ui-state","frontend.undo-redo/ui-state",-1855927540),null,new cljs.core.Keyword("frontend.worker.undo-redo","record-editor-info","frontend.worker.undo-redo/record-editor-info",713803536),null], null), null);
frontend.undo_redo.debug_ui.ui_entry_item_QMARK_ = (function frontend$undo_redo$debug_ui$ui_entry_item_QMARK_(item){
return ((cljs.core.vector_QMARK_(item)) && (cljs.core.contains_QMARK_(frontend.undo_redo.debug_ui.ui_entry_tags,cljs.core.first(item))));
});
frontend.undo_redo.debug_ui.filter_ui_items = (function frontend$undo_redo$debug_ui$filter_ui_items(entry){
if(cljs.core.vector_QMARK_(entry)){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(frontend.undo_redo.debug_ui.ui_entry_item_QMARK_,entry));
} else {
return entry;
}
});
frontend.undo_redo.debug_ui.empty_filtered_entry_QMARK_ = (function frontend$undo_redo$debug_ui$empty_filtered_entry_QMARK_(entry){
return ((cljs.core.vector_QMARK_(entry)) && (cljs.core.empty_QMARK_(entry)));
});
frontend.undo_redo.debug_ui.payload_entry = (function (){var render_fn__31744__auto__ = (function frontend$undo_redo$debug_ui$payload_entry(expanded_QMARK__STAR_,id,entry){
var expanded_QMARK_ = cljs.core.contains_QMARK_(cljs.core.deref(expanded_QMARK__STAR_),id);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rounded-md.border.p-2","div.rounded-md.border.p-2",-1755978293),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.flex.w-full.items-center.justify-between.text-left","button.flex.w-full.items-center.justify-between.text-left",852811648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aria-expanded","aria-expanded",-1360942393),expanded_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK__STAR_,(function (expanded){
if(cljs.core.contains_QMARK_(expanded,id)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(expanded,id);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(expanded,id);
}
}));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.font-medium","span.text-sm.font-medium",-2002622722),frontend.undo_redo.debug_ui.entry_title(entry)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-60","span.opacity-60",-1080417386),frontend.ui.rotating_arrow((!(expanded_QMARK_)))], null)], null),((expanded_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.select-text.mt-2.text-xs.overflow-auto","pre.select-text.mt-2.text-xs.overflow-auto",-2048784793),(function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57445_57493 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57446_57494 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57447_57495 = true;
var _STAR_print_fn_STAR__temp_val__57448_57496 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57447_57495);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57448_57496);

try{fipp.edn.pprint.cljs$core$IFn$_invoke$arity$2(frontend.undo_redo.debug_ui.strip_tx_data(entry),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(60)], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57446_57494);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57445_57493);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})()], null):null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$undo_redo$debug_ui$payload_entry__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__57449 = cljs.core.first(args__31746__auto__);
var G__57450 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__57449,G__57450) : io.factorhouse.hsx.core.obj_get.call(null,G__57449,G__57450));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"payload-entry","payload-entry",-792517452,null),args__31746__auto__),frontend$undo_redo$debug_ui$payload_entry,args__31746__auto__,null);
}
};
var frontend$undo_redo$debug_ui$payload_entry = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__57497__i = 0, G__57497__a = new Array(arguments.length -  0);
while (G__57497__i < G__57497__a.length) {G__57497__a[G__57497__i] = arguments[G__57497__i + 0]; ++G__57497__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__57497__a,0,null);
} 
return frontend$undo_redo$debug_ui$payload_entry__delegate.call(this,args__31746__auto__);};
frontend$undo_redo$debug_ui$payload_entry.cljs$lang$maxFixedArity = 0;
frontend$undo_redo$debug_ui$payload_entry.cljs$lang$applyTo = (function (arglist__57498){
var args__31746__auto__ = cljs.core.seq(arglist__57498);
return frontend$undo_redo$debug_ui$payload_entry__delegate(args__31746__auto__);
});
frontend$undo_redo$debug_ui$payload_entry.cljs$core$IFn$_invoke$arity$variadic = frontend$undo_redo$debug_ui$payload_entry__delegate;
return frontend$undo_redo$debug_ui$payload_entry;
})()
;
var memo_comp__31747__auto__ = (function (){var G__57451 = comp__31745__auto__;
var G__57452 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__57451,G__57452) : io.factorhouse.hsx.core.react_memo.call(null,G__57451,G__57452));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"payload-entry");

return comp__31745__auto__;
})();
frontend.undo_redo.debug_ui.payload_stack = (function (){var render_fn__31744__auto__ = (function frontend$undo_redo$debug_ui$payload_stack(expanded_QMARK__STAR_,label,entries){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-2","div.flex.flex-col.gap-2",1564729900),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.font-medium","div.text-sm.font-medium",-120265550),label], null),((cljs.core.seq(entries))?(function (){var iter__5628__auto__ = (function frontend$undo_redo$debug_ui$payload_stack_$_iter__57453(s__57454){
return (new cljs.core.LazySeq(null,(function (){
var s__57454__$1 = s__57454;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__57454__$1);
if(temp__5825__auto__){
var s__57454__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57454__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__57454__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__57456 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__57455 = (0);
while(true){
if((i__57455 < size__5627__auto__)){
var vec__57457 = cljs.core._nth(c__5626__auto__,i__57455);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57457,(0),null);
var entry = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57457,(1),null);
cljs.core.chunk_append(b__57456,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.undo_redo.debug_ui.payload_entry,expanded_QMARK__STAR_,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),entry], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx))], null)));

var G__57499 = (i__57455 + (1));
i__57455 = G__57499;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57456),frontend$undo_redo$debug_ui$payload_stack_$_iter__57453(cljs.core.chunk_rest(s__57454__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57456),null);
}
} else {
var vec__57460 = cljs.core.first(s__57454__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57460,(0),null);
var entry = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57460,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.undo_redo.debug_ui.payload_entry,expanded_QMARK__STAR_,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),entry], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx))], null)),frontend$undo_redo$debug_ui$payload_stack_$_iter__57453(cljs.core.rest(s__57454__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.reverse(entries)));
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.opacity-50","div.text-sm.opacity-50",829333122),"Empty"], null))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$undo_redo$debug_ui$payload_stack__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__57463 = cljs.core.first(args__31746__auto__);
var G__57464 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__57463,G__57464) : io.factorhouse.hsx.core.obj_get.call(null,G__57463,G__57464));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"payload-stack","payload-stack",-150452,null),args__31746__auto__),frontend$undo_redo$debug_ui$payload_stack,args__31746__auto__,null);
}
};
var frontend$undo_redo$debug_ui$payload_stack = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__57500__i = 0, G__57500__a = new Array(arguments.length -  0);
while (G__57500__i < G__57500__a.length) {G__57500__a[G__57500__i] = arguments[G__57500__i + 0]; ++G__57500__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__57500__a,0,null);
} 
return frontend$undo_redo$debug_ui$payload_stack__delegate.call(this,args__31746__auto__);};
frontend$undo_redo$debug_ui$payload_stack.cljs$lang$maxFixedArity = 0;
frontend$undo_redo$debug_ui$payload_stack.cljs$lang$applyTo = (function (arglist__57501){
var args__31746__auto__ = cljs.core.seq(arglist__57501);
return frontend$undo_redo$debug_ui$payload_stack__delegate(args__31746__auto__);
});
frontend$undo_redo$debug_ui$payload_stack.cljs$core$IFn$_invoke$arity$variadic = frontend$undo_redo$debug_ui$payload_stack__delegate;
return frontend$undo_redo$debug_ui$payload_stack;
})()
;
var memo_comp__31747__auto__ = (function (){var G__57465 = comp__31745__auto__;
var G__57466 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__57465,G__57466) : io.factorhouse.hsx.core.react_memo.call(null,G__57465,G__57466));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"payload-stack");

return comp__31745__auto__;
})();
frontend.undo_redo.debug_ui.undo_redo_debug_ui = (function (){var render_fn__31744__auto__ = (function frontend$undo_redo$debug_ui$undo_redo_debug_ui(){
var repo = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("git","current-repo","git/current-repo",107438825)], null));
var expanded_QMARK__STAR_ = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}),cljs.core.PersistentVector.EMPTY);
var filter_ui_state_QMARK__STAR_ = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}),cljs.core.PersistentVector.EMPTY);
var history_STAR_ = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}),cljs.core.PersistentVector.EMPTY);
var vec__57468 = logseq.shui.hooks.use_atom(history_STAR_);
var history__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57468,(0),null);
var vec__57471 = logseq.shui.hooks.use_atom(filter_ui_state_QMARK__STAR_);
var filter_ui_state_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57471,(0),null);
var _ = logseq.shui.hooks.use_atom(expanded_QMARK__STAR_);
var refresh_BANG_ = (function (){
if(cljs.core.truth_(repo)){
frontend.undo_redo._LT_get_debug_state(repo).then((function (p1__57467_SHARP_){
return cljs.core.reset_BANG_(history_STAR_,p1__57467_SHARP_);
}));
} else {
}

return null;
});
var undo_stack = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"undo-ops","undo-ops",446217419).cljs$core$IFn$_invoke$arity$1(history__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var redo_stack = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"redo-ops","redo-ops",1056638168).cljs$core$IFn$_invoke$arity$1(history__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var filter_stack = (function (stack){
if(cljs.core.truth_(filter_ui_state_QMARK_)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(frontend.undo_redo.debug_ui.empty_filtered_entry_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.undo_redo.debug_ui.filter_ui_items,stack));
} else {
return stack;
}
});
var undo_stack_SINGLEQUOTE_ = filter_stack(undo_stack);
var redo_stack_SINGLEQUOTE_ = filter_stack(redo_stack);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-3","div.flex.flex-col.gap-3",-1634021513),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.gap-2.flex-wrap.items-center","div.flex.gap-2.flex-wrap.items-center",-484417061),(function (){var G__57474 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(((repo == null)) || (cljs.core.empty_QMARK_(undo_stack))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
(frontend.handler.history.undo_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.history.undo_BANG_.cljs$core$IFn$_invoke$arity$1(e) : frontend.handler.history.undo_BANG_.call(null,e));

return setTimeout(refresh_BANG_,(0));
})], null);
var G__57475 = logseq.shui.ui.tabler_icon("arrow-back-up");
var G__57476 = "undo";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__57474,G__57475,G__57476) : logseq.shui.ui.button.call(null,G__57474,G__57475,G__57476));
})(),(function (){var G__57477 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(((repo == null)) || (cljs.core.empty_QMARK_(redo_stack))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
(frontend.handler.history.redo_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.history.redo_BANG_.cljs$core$IFn$_invoke$arity$1(e) : frontend.handler.history.redo_BANG_.call(null,e));

return setTimeout(refresh_BANG_,(0));
})], null);
var G__57478 = logseq.shui.ui.tabler_icon("arrow-forward-up");
var G__57479 = "redo";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__57477,G__57478,G__57479) : logseq.shui.ui.button.call(null,G__57477,G__57478,G__57479));
})(),(function (){var G__57480 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(repo == null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (___$1){
frontend.undo_redo.clear_history_BANG_(repo);

return setTimeout(refresh_BANG_,(0));
})], null);
var G__57481 = logseq.shui.ui.tabler_icon("trash");
var G__57482 = "clear-history";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__57480,G__57481,G__57482) : logseq.shui.ui.button.call(null,G__57480,G__57481,G__57482));
})(),(function (){var G__57483 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(repo == null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (___$1){
return refresh_BANG_();
})], null);
var G__57484 = logseq.shui.ui.tabler_icon("refresh");
var G__57485 = "refresh";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__57483,G__57484,G__57485) : logseq.shui.ui.button.call(null,G__57483,G__57484,G__57485));
})(),(function (){var G__57486 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"variant","variant",-424354234),(cljs.core.truth_(filter_ui_state_QMARK_)?new cljs.core.Keyword(null,"default","default",-1987822328):new cljs.core.Keyword(null,"outline","outline",793464534)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (___$1){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(filter_ui_state_QMARK__STAR_,cljs.core.not);
})], null);
var G__57487 = logseq.shui.ui.tabler_icon("filter");
var G__57488 = "filter-ui-entry-global";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__57486,G__57487,G__57488) : logseq.shui.ui.button.call(null,G__57486,G__57487,G__57488));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.opacity-70","div.text-sm.opacity-70",630172022),(""+"undo="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(undo_stack_SINGLEQUOTE_))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(filter_ui_state_QMARK_)?(""+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(undo_stack))):null))+" redo="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(redo_stack_SINGLEQUOTE_))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(filter_ui_state_QMARK_)?(""+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(redo_stack))):null)))], null),frontend.undo_redo.debug_ui.payload_stack(expanded_QMARK__STAR_,"Undo",undo_stack_SINGLEQUOTE_),frontend.undo_redo.debug_ui.payload_stack(expanded_QMARK__STAR_,"Redo",redo_stack_SINGLEQUOTE_)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$undo_redo$debug_ui$undo_redo_debug_ui__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__57489 = cljs.core.first(args__31746__auto__);
var G__57490 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__57489,G__57490) : io.factorhouse.hsx.core.obj_get.call(null,G__57489,G__57490));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"undo-redo-debug-ui","undo-redo-debug-ui",-1769940289,null),args__31746__auto__),frontend$undo_redo$debug_ui$undo_redo_debug_ui,args__31746__auto__,null);
}
};
var frontend$undo_redo$debug_ui$undo_redo_debug_ui = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__57502__i = 0, G__57502__a = new Array(arguments.length -  0);
while (G__57502__i < G__57502__a.length) {G__57502__a[G__57502__i] = arguments[G__57502__i + 0]; ++G__57502__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__57502__a,0,null);
} 
return frontend$undo_redo$debug_ui$undo_redo_debug_ui__delegate.call(this,args__31746__auto__);};
frontend$undo_redo$debug_ui$undo_redo_debug_ui.cljs$lang$maxFixedArity = 0;
frontend$undo_redo$debug_ui$undo_redo_debug_ui.cljs$lang$applyTo = (function (arglist__57503){
var args__31746__auto__ = cljs.core.seq(arglist__57503);
return frontend$undo_redo$debug_ui$undo_redo_debug_ui__delegate(args__31746__auto__);
});
frontend$undo_redo$debug_ui$undo_redo_debug_ui.cljs$core$IFn$_invoke$arity$variadic = frontend$undo_redo$debug_ui$undo_redo_debug_ui__delegate;
return frontend$undo_redo$debug_ui$undo_redo_debug_ui;
})()
;
var memo_comp__31747__auto__ = (function (){var G__57491 = comp__31745__auto__;
var G__57492 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__57491,G__57492) : io.factorhouse.hsx.core.react_memo.call(null,G__57491,G__57492));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"undo-redo-debug-ui");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.undo_redo.debug_ui.js.map
