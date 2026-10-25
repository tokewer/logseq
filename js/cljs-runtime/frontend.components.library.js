goog.provide('frontend.components.library');
frontend.components.library.select_pages = (function (){var render_fn__31744__auto__ = (function frontend$components$library$select_pages(library_page){
var vec__53150 = logseq.shui.hooks.use_state(null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53150,(0),null);
var set_result_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53150,(1),null);
var vec__53153 = logseq.shui.hooks.use_state("");
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53153,(0),null);
var set_input_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53153,(1),null);
var vec__53156 = logseq.shui.hooks.use_state(cljs.core.PersistentHashSet.EMPTY);
var selected_choices = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53156,(0),null);
var set_selected_choices_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53156,(1),null);
var items = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block)], null);
}),result);
logseq.shui.hooks.use_effect_BANG_((function (){
if(clojure.string.blank_QMARK_(input)){
return (set_result_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_result_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_result_BANG_.call(null,null));
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.search.block_search(frontend.state.get_current_repo(),input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"enable-snippet?","enable-snippet?",-692858749),false,new cljs.core.Keyword(null,"built-in?","built-in?",2078421512),false,new cljs.core.Keyword(null,"page-only?","page-only?",654695800),true,new cljs.core.Keyword(null,"library-page-search?","library-page-search?",281824332),true], null))),(function (result__$1){
return promesa.protocols._promise((set_result_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_result_BANG_.cljs$core$IFn$_invoke$arity$1(result__$1) : set_result_BANG_.call(null,result__$1)));
}));
}));
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.shui.hooks.use_debounced_value(input,(200))], null));

return frontend.components.select.select(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"clear-input-on-chosen?","clear-input-on-chosen?",-1498359231),new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),new cljs.core.Keyword(null,"show-new-when-not-exact-match?","show-new-when-not-exact-match?",1510536201),new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),new cljs.core.Keyword(null,"input-default-placeholder","input-default-placeholder",-1040139250),new cljs.core.Keyword(null,"extract-chosen-fn","extract-chosen-fn",1058364622),new cljs.core.Keyword(null,"input-opts","input-opts",1688681135),new cljs.core.Keyword(null,"multiple-choices?","multiple-choices?",-1858892490),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword(null,"on-input","on-input",-267523366),new cljs.core.Keyword(null,"selected-choices","selected-choices",1913324317)],[false,(function (chosen,selected_QMARK_){
if(cljs.core.truth_(selected_QMARK_)){
var chosen_block = cljs.core.some((function (p1__53149_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(chosen,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p1__53149_SHARP_))){
return p1__53149_SHARP_;
} else {
return null;
}
}),result);
frontend.handler.editor.move_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chosen_block], null),library_page,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bottom?","bottom?",-1926481628),true], null));

var G__53159 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(selected_choices,chosen);
return (set_selected_choices_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_selected_choices_BANG_.cljs$core$IFn$_invoke$arity$1(G__53159) : set_selected_choices_BANG_.call(null,G__53159));
} else {
frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","transact","thread-api/transact",917721609),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),chosen,new cljs.core.Keyword("block","parent","block/parent",-918309064)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null),null], 0));

var G__53160 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(selected_choices,chosen);
return (set_selected_choices_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_selected_choices_BANG_.cljs$core$IFn$_invoke$arity$1(G__53160) : set_selected_choices_BANG_.call(null,G__53160));
}
}),false,new cljs.core.Keyword(null,"label","label",1718410804),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("library","add-pages","library/add-pages",657874631)], 0)),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"!p-1 !text-sm"], null),true,items,set_input_BANG_,selected_choices]));
});
var comp__31745__auto__ = (function() { 
var frontend$components$library$select_pages__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__53161 = cljs.core.first(args__31746__auto__);
var G__53162 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__53161,G__53162) : io.factorhouse.hsx.core.obj_get.call(null,G__53161,G__53162));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"select-pages","select-pages",589046252,null),args__31746__auto__),frontend$components$library$select_pages,args__31746__auto__,null);
}
};
var frontend$components$library$select_pages = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__53175__i = 0, G__53175__a = new Array(arguments.length -  0);
while (G__53175__i < G__53175__a.length) {G__53175__a[G__53175__i] = arguments[G__53175__i + 0]; ++G__53175__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__53175__a,0,null);
} 
return frontend$components$library$select_pages__delegate.call(this,args__31746__auto__);};
frontend$components$library$select_pages.cljs$lang$maxFixedArity = 0;
frontend$components$library$select_pages.cljs$lang$applyTo = (function (arglist__53176){
var args__31746__auto__ = cljs.core.seq(arglist__53176);
return frontend$components$library$select_pages__delegate(args__31746__auto__);
});
frontend$components$library$select_pages.cljs$core$IFn$_invoke$arity$variadic = frontend$components$library$select_pages__delegate;
return frontend$components$library$select_pages;
})()
;
var memo_comp__31747__auto__ = (function (){var G__53163 = comp__31745__auto__;
var G__53164 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__53163,G__53164) : io.factorhouse.hsx.core.react_memo.call(null,G__53163,G__53164));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"select-pages");

return comp__31745__auto__;
})();
frontend.components.library.add_pages = (function (){var render_fn__31744__auto__ = (function frontend$components$library$add_pages(library_page){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-add-pages.px-1.mt-4","div.ls-add-pages.px-1.mt-4",52440696),(function (){var G__53165 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),"text-muted-foreground hover:text-foreground",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var G__53168 = e.target;
var G__53169 = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),(120)], null)], null),frontend.components.library.select_pages(library_page)], null);
});
var G__53170 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981)], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__53168,G__53169,G__53170) : logseq.shui.ui.popup_show_BANG_.call(null,G__53168,G__53169,G__53170));
})], null);
var G__53166 = frontend.ui.icon("plus",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(16)], null));
var G__53167 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("library","add-existing-pages","library/add-existing-pages",1573051043)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__53165,G__53166,G__53167) : logseq.shui.ui.button.call(null,G__53165,G__53166,G__53167));
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$library$add_pages__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__53171 = cljs.core.first(args__31746__auto__);
var G__53172 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__53171,G__53172) : io.factorhouse.hsx.core.obj_get.call(null,G__53171,G__53172));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"add-pages","add-pages",-1836663223,null),args__31746__auto__),frontend$components$library$add_pages,args__31746__auto__,null);
}
};
var frontend$components$library$add_pages = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__53177__i = 0, G__53177__a = new Array(arguments.length -  0);
while (G__53177__i < G__53177__a.length) {G__53177__a[G__53177__i] = arguments[G__53177__i + 0]; ++G__53177__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__53177__a,0,null);
} 
return frontend$components$library$add_pages__delegate.call(this,args__31746__auto__);};
frontend$components$library$add_pages.cljs$lang$maxFixedArity = 0;
frontend$components$library$add_pages.cljs$lang$applyTo = (function (arglist__53178){
var args__31746__auto__ = cljs.core.seq(arglist__53178);
return frontend$components$library$add_pages__delegate(args__31746__auto__);
});
frontend$components$library$add_pages.cljs$core$IFn$_invoke$arity$variadic = frontend$components$library$add_pages__delegate;
return frontend$components$library$add_pages;
})()
;
var memo_comp__31747__auto__ = (function (){var G__53173 = comp__31745__auto__;
var G__53174 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__53173,G__53174) : io.factorhouse.hsx.core.react_memo.call(null,G__53173,G__53174));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"add-pages");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.library.js.map
