goog.provide('frontend.components.find_in_page');
goog.scope(function(){
  frontend.components.find_in_page.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.components.find_in_page.search_input = (function (){var render_fn__31744__auto__ = (function frontend$components$find_in_page$search_input(q,matches){
var _STAR_composing_QMARK_ = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(false) : logseq.shui.hooks.use_ref.call(null,false));
var on_change_fn = (function (e){
var value = frontend.util.evalue(e);
var e_type = frontend.components.find_in_page.goog$module$goog$object.getValueByKeys(e,"type");
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","find-in-page","ui/find-in-page",-941396467),new cljs.core.Keyword(null,"q","q",689001697)], null),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e_type,"compositionstart")){
logseq.shui.hooks.set_ref_BANG_(_STAR_composing_QMARK_,true);

(frontend.handler.search.stop_debounced_search_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.search.stop_debounced_search_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.handler.search.stop_debounced_search_BANG_.call(null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e_type,"compositionend")){
logseq.shui.hooks.set_ref_BANG_(_STAR_composing_QMARK_,false);
} else {
}
}

if(cljs.core.truth_(logseq.shui.hooks.deref(_STAR_composing_QMARK_))){
return null;
} else {
return (frontend.handler.search.debounced_search.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.search.debounced_search.cljs$core$IFn$_invoke$arity$0() : frontend.handler.search.debounced_search.call(null));
}
});
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.w-48.relative","div.flex.w-48.relative",655523488),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#search-in-page-input.form-input.block.sm:text-sm.sm:leading-5.my-2.border-none.mr-4.outline-none","input#search-in-page-input.form-input.block.sm:text-sm.sm:leading-5.my-2.border-none.mr-4.outline-none",336970289),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("search.find-in-page","input-placeholder","search.find-in-page/input-placeholder",-1063069541)], 0)),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("search.find-in-page","input-placeholder","search.find-in-page/input-placeholder",-1063069541)], 0)),new cljs.core.Keyword(null,"value","value",305978217),q,new cljs.core.Keyword(null,"on-composition-start","on-composition-start",-1518620253),on_change_fn,new cljs.core.Keyword(null,"on-composition-end","on-composition-end",581757376),on_change_fn,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change_fn], null)], null),((clojure.string.blank_QMARK_(q))?null:(function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(matches);
if(cljs.core.truth_(temp__5825__auto__)){
var total = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.absolute.top-2.right-0.py-2.px-4","div.text-sm.absolute.top-2.right-0.py-2.px-4",-1595919410),new cljs.core.Keyword(null,"activeMatchOrdinal","activeMatchOrdinal",-867250467).cljs$core$IFn$_invoke$arity$2(matches,(0)),"/",total], null);
} else {
return null;
}
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#search-in-page-placeholder.absolute.top-2.left-0.p-2.sm:text-sm","div#search-in-page-placeholder.absolute.top-2.left-0.p-2.sm:text-sm",-1597436952)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$find_in_page$search_input__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56101 = cljs.core.first(args__31746__auto__);
var G__56102 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56101,G__56102) : io.factorhouse.hsx.core.obj_get.call(null,G__56101,G__56102));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"search-input","search-input",1063615378,null),args__31746__auto__),frontend$components$find_in_page$search_input,args__31746__auto__,null);
}
};
var frontend$components$find_in_page$search_input = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56134__i = 0, G__56134__a = new Array(arguments.length -  0);
while (G__56134__i < G__56134__a.length) {G__56134__a[G__56134__i] = arguments[G__56134__i + 0]; ++G__56134__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56134__a,0,null);
} 
return frontend$components$find_in_page$search_input__delegate.call(this,args__31746__auto__);};
frontend$components$find_in_page$search_input.cljs$lang$maxFixedArity = 0;
frontend$components$find_in_page$search_input.cljs$lang$applyTo = (function (arglist__56135){
var args__31746__auto__ = cljs.core.seq(arglist__56135);
return frontend$components$find_in_page$search_input__delegate(args__31746__auto__);
});
frontend$components$find_in_page$search_input.cljs$core$IFn$_invoke$arity$variadic = frontend$components$find_in_page$search_input__delegate;
return frontend$components$find_in_page$search_input;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56105 = comp__31745__auto__;
var G__56106 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56105,G__56106) : io.factorhouse.hsx.core.react_memo.call(null,G__56105,G__56106));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"search-input");

return comp__31745__auto__;
})();
frontend.components.find_in_page.search_inner = (function (){var render_fn__31744__auto__ = (function frontend$components$find_in_page$search_inner(p__56107){
var map__56110 = p__56107;
var map__56110__$1 = cljs.core.__destructure_map(map__56110);
var matches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56110__$1,new cljs.core.Keyword(null,"matches","matches",635497998));
var match_case_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56110__$1,new cljs.core.Keyword(null,"match-case?","match-case?",-1836393163));
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56110__$1,new cljs.core.Keyword(null,"q","q",689001697));
logseq.shui.hooks.use_effect_BANG_((function (){
var hide_BANG_ = (function (_e){
return frontend.handler.search.electron_exit_find_in_page_BANG_();
});
var key_handler = (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((27),e.keyCode)){
return hide_BANG_(e);
} else {
return null;
}
});
var mouse_handler = (function (e){
var node = goog.dom.getElement("search-in-page");
var target = e.target;
if(cljs.core.truth_((function (){var and__5140__auto__ = node;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.not(goog.dom.contains(node,target))) && (cljs.core.not(target.classList.contains("ignore-outside-event"))));
} else {
return and__5140__auto__;
}
})())){
return hide_BANG_(e);
} else {
return null;
}
});
window.addEventListener("keydown",key_handler);

window.addEventListener("mousedown",mouse_handler);

return (function (){
window.removeEventListener("keydown",key_handler);

return window.removeEventListener("mousedown",mouse_handler);
});
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#search-in-page.flex.flex-row.absolute.top-10.right-4.shadow-lg.px-2.py-1.faster.fade-in.items-center","div#search-in-page.flex.flex-row.absolute.top-10.right-4.shadow-lg.px-2.py-1.faster.fade-in.items-center",2136078877),frontend.components.find_in_page.search_input(q,matches),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.ui.icon("letter-case"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.state.update_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","find-in-page","ui/find-in-page",-941396467),new cljs.core.Keyword(null,"match-case?","match-case?",-1836393163)], null),cljs.core.not);

return (frontend.handler.search.debounced_search.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.search.debounced_search.cljs$core$IFn$_invoke$arity$0() : frontend.handler.search.debounced_search.call(null));
}),new cljs.core.Keyword(null,"intent","intent",-390846953),"link",new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("search.find-in-page","match-case","search.find-in-page/match-case",-456061754)], 0)),new cljs.core.Keyword(null,"class","class",-2030961996),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(match_case_QMARK_)?"active ":null))+"text-lg")], 0)),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.ui.icon("caret-up"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","find-in-page","ui/find-in-page",-941396467),new cljs.core.Keyword(null,"backward?","backward?",-1388361117)], null),true);

return (frontend.handler.search.debounced_search.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.search.debounced_search.cljs$core$IFn$_invoke$arity$0() : frontend.handler.search.debounced_search.call(null));
}),new cljs.core.Keyword(null,"intent","intent",-390846953),"link",new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"class","class",-2030961996),"text-lg",new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("search.find-in-page","previous-result","search.find-in-page/previous-result",-365017083)], 0))], 0)),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.ui.icon("caret-down"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","find-in-page","ui/find-in-page",-941396467),new cljs.core.Keyword(null,"backward?","backward?",-1388361117)], null),false);

return (frontend.handler.search.debounced_search.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.search.debounced_search.cljs$core$IFn$_invoke$arity$0() : frontend.handler.search.debounced_search.call(null));
}),new cljs.core.Keyword(null,"intent","intent",-390846953),"link",new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"class","class",-2030961996),"text-lg",new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("search.find-in-page","next-result","search.find-in-page/next-result",-1330093136)], 0))], 0)),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.ui.icon("x"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.search.electron_exit_find_in_page_BANG_();
}),new cljs.core.Keyword(null,"intent","intent",-390846953),"link",new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"class","class",-2030961996),"text-lg",new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","close","ui/close",1835153538)], 0))], 0))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$find_in_page$search_inner__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56116 = cljs.core.first(args__31746__auto__);
var G__56117 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56116,G__56117) : io.factorhouse.hsx.core.obj_get.call(null,G__56116,G__56117));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"search-inner","search-inner",1253666012,null),args__31746__auto__),frontend$components$find_in_page$search_inner,args__31746__auto__,null);
}
};
var frontend$components$find_in_page$search_inner = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56140__i = 0, G__56140__a = new Array(arguments.length -  0);
while (G__56140__i < G__56140__a.length) {G__56140__a[G__56140__i] = arguments[G__56140__i + 0]; ++G__56140__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56140__a,0,null);
} 
return frontend$components$find_in_page$search_inner__delegate.call(this,args__31746__auto__);};
frontend$components$find_in_page$search_inner.cljs$lang$maxFixedArity = 0;
frontend$components$find_in_page$search_inner.cljs$lang$applyTo = (function (arglist__56141){
var args__31746__auto__ = cljs.core.seq(arglist__56141);
return frontend$components$find_in_page$search_inner__delegate(args__31746__auto__);
});
frontend$components$find_in_page$search_inner.cljs$core$IFn$_invoke$arity$variadic = frontend$components$find_in_page$search_inner__delegate;
return frontend$components$find_in_page$search_inner;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56118 = comp__31745__auto__;
var G__56119 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56118,G__56119) : io.factorhouse.hsx.core.react_memo.call(null,G__56118,G__56119));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"search-inner");

return comp__31745__auto__;
})();
frontend.components.find_in_page.search = (function (){var render_fn__31744__auto__ = (function frontend$components$find_in_page$search(){
var map__56122 = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","find-in-page","ui/find-in-page",-941396467)], null));
var map__56122__$1 = cljs.core.__destructure_map(map__56122);
var opt = map__56122__$1;
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56122__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
if(cljs.core.truth_(active_QMARK_)){
return frontend.components.find_in_page.search_inner(opt);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$find_in_page$search__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56127 = cljs.core.first(args__31746__auto__);
var G__56128 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56127,G__56128) : io.factorhouse.hsx.core.obj_get.call(null,G__56127,G__56128));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"search","search",-1089495947,null),args__31746__auto__),frontend$components$find_in_page$search,args__31746__auto__,null);
}
};
var frontend$components$find_in_page$search = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56145__i = 0, G__56145__a = new Array(arguments.length -  0);
while (G__56145__i < G__56145__a.length) {G__56145__a[G__56145__i] = arguments[G__56145__i + 0]; ++G__56145__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56145__a,0,null);
} 
return frontend$components$find_in_page$search__delegate.call(this,args__31746__auto__);};
frontend$components$find_in_page$search.cljs$lang$maxFixedArity = 0;
frontend$components$find_in_page$search.cljs$lang$applyTo = (function (arglist__56146){
var args__31746__auto__ = cljs.core.seq(arglist__56146);
return frontend$components$find_in_page$search__delegate(args__31746__auto__);
});
frontend$components$find_in_page$search.cljs$core$IFn$_invoke$arity$variadic = frontend$components$find_in_page$search__delegate;
return frontend$components$find_in_page$search;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56129 = comp__31745__auto__;
var G__56130 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56129,G__56130) : io.factorhouse.hsx.core.react_memo.call(null,G__56129,G__56130));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"search");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.find_in_page.js.map
