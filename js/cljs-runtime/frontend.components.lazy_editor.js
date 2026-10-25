goog.provide('frontend.components.lazy_editor');
goog.scope(function(){
  frontend.components.lazy_editor.goog$module$shadow$loader = goog.module.get('shadow.loader');
});
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.lazy_editor !== 'undefined') && (typeof frontend.components.lazy_editor._STAR_editor !== 'undefined')){
} else {
frontend.components.lazy_editor._STAR_editor = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.lazy_editor !== 'undefined') && (typeof frontend.components.lazy_editor._STAR_load_promise !== 'undefined')){
} else {
frontend.components.lazy_editor._STAR_load_promise = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.lazy_editor !== 'undefined') && (typeof frontend.components.lazy_editor.loaded_QMARK_ !== 'undefined')){
} else {
frontend.components.lazy_editor.loaded_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
frontend.components.lazy_editor.register_editor_BANG_ = (function frontend$components$lazy_editor$register_editor_BANG_(editor){
if(cljs.core.fn_QMARK_(editor)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid code editor component",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor","editor",-989377770),editor], null));
}

return cljs.core.reset_BANG_(frontend.components.lazy_editor._STAR_editor,editor);
});
frontend.components.lazy_editor.editor_placeholder_height = (function frontend$components$lazy_editor$editor_placeholder_height(rect,attr,code){
var estimated_height = (23.2 * cljs.core.count(clojure.string.split_lines(code)));
var or__5142__auto__ = (function (){var G__38102 = rect;
if((G__38102 == null)){
return null;
} else {
return G__38102.height;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data-lang","data-lang",969460304).cljs$core$IFn$_invoke$arity$1(attr),"calc")){
return estimated_height;
} else {
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(estimated_height,(1024));
}
}
});
frontend.components.lazy_editor.load_code_editor_BANG_ = (function frontend$components$lazy_editor$load_code_editor_BANG_(){
if(frontend.util.node_test_QMARK_){
return null;
} else {
var or__5142__auto__ = cljs.core.deref(frontend.components.lazy_editor._STAR_load_promise);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var result = promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.lazy_editor.goog$module$shadow$loader.load(new cljs.core.Keyword(null,"code-editor","code-editor",1902143804))),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.deref(frontend.components.lazy_editor._STAR_editor)),(function (editor){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core.fn_QMARK_(editor))?null:(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Code editor module did not register its component",cljs.core.PersistentArrayMap.EMPTY)})())),(function (___$1){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.all((function (){var temp__5825__auto__ = (function (){var and__5140__auto__ = frontend.config.lsp_enabled_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.seq(frontend.handler.plugin.hook_extensions_enhancers_by_key(new cljs.core.Keyword(null,"codemirror","codemirror",-1221931625)));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var enhancers = temp__5825__auto__;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__38103){
var map__38104 = p__38103;
var map__38104__$1 = cljs.core.__destructure_map(map__38104);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38104__$1,new cljs.core.Keyword(null,"enhancer","enhancer",-929020171));
if(cljs.core.fn_QMARK_(f)){
var G__38105 = window.CodeMirror;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__38105) : f.call(null,G__38105));
} else {
return null;
}
}),enhancers);
} else {
return null;
}
})())),(function (___$2){
return promesa.protocols._promise(cljs.core.reset_BANG_(frontend.components.lazy_editor.loaded_QMARK_,true));
}));
}));
}));
}));
}));
cljs.core.reset_BANG_(frontend.components.lazy_editor._STAR_load_promise,result);

return result;
}
}
});
frontend.components.lazy_editor.editor_aux = (function (){var render_fn__31744__auto__ = (function frontend$components$lazy_editor$editor_aux(config,id,attr,code,options,codemirror_loaded_QMARK_){
var state = (function (){var G__38109 = ({"rootMargin": "0px"});
return (frontend.ui.useInView.cljs$core$IFn$_invoke$arity$1 ? frontend.ui.useInView.cljs$core$IFn$_invoke$arity$1(G__38109) : frontend.ui.useInView.call(null,G__38109));
})();
var in_view_QMARK_ = state.inView;
var vec__38106 = logseq.shui.hooks.use_bounding_client_rect.cljs$core$IFn$_invoke$arity$0();
var set_size_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38106,(0),null);
var rect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38106,(1),null);
var placeholder = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),frontend.components.lazy_editor.editor_placeholder_height(rect,attr,code)], null)], null)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),state.ref], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),set_size_ref], null),(cljs.core.truth_((function (){var and__5140__auto__ = codemirror_loaded_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return in_view_QMARK_;
} else {
return and__5140__auto__;
}
})())?(function (){var fexpr__38110 = cljs.core.deref(frontend.components.lazy_editor._STAR_editor);
return (fexpr__38110.cljs$core$IFn$_invoke$arity$5 ? fexpr__38110.cljs$core$IFn$_invoke$arity$5(config,id,attr,code,options) : fexpr__38110.call(null,config,id,attr,code,options));
})():placeholder)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$lazy_editor$editor_aux__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38111 = cljs.core.first(args__31746__auto__);
var G__38112 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38111,G__38112) : io.factorhouse.hsx.core.obj_get.call(null,G__38111,G__38112));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"editor-aux","editor-aux",1919170349,null),args__31746__auto__),frontend$components$lazy_editor$editor_aux,args__31746__auto__,null);
}
};
var frontend$components$lazy_editor$editor_aux = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38123__i = 0, G__38123__a = new Array(arguments.length -  0);
while (G__38123__i < G__38123__a.length) {G__38123__a[G__38123__i] = arguments[G__38123__i + 0]; ++G__38123__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38123__a,0,null);
} 
return frontend$components$lazy_editor$editor_aux__delegate.call(this,args__31746__auto__);};
frontend$components$lazy_editor$editor_aux.cljs$lang$maxFixedArity = 0;
frontend$components$lazy_editor$editor_aux.cljs$lang$applyTo = (function (arglist__38124){
var args__31746__auto__ = cljs.core.seq(arglist__38124);
return frontend$components$lazy_editor$editor_aux__delegate(args__31746__auto__);
});
frontend$components$lazy_editor$editor_aux.cljs$core$IFn$_invoke$arity$variadic = frontend$components$lazy_editor$editor_aux__delegate;
return frontend$components$lazy_editor$editor_aux;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38113 = comp__31745__auto__;
var G__38114 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38113,G__38114) : io.factorhouse.hsx.core.react_memo.call(null,G__38113,G__38114));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"editor-aux");

return comp__31745__auto__;
})();
frontend.components.lazy_editor.editor = (function (){var render_fn__31744__auto__ = (function frontend$components$lazy_editor$editor(config,id,attr,code,options){
logseq.shui.hooks.use_effect_BANG_((function (){
frontend.components.lazy_editor.load_code_editor_BANG_();

return null;
}),cljs.core.PersistentVector.EMPTY);

var vec__38115 = logseq.shui.hooks.use_atom(frontend.components.lazy_editor.loaded_QMARK_);
var loaded_QMARK__SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38115,(0),null);
var code__$1 = (function (){var or__5142__auto__ = code;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})();
var code__$2 = clojure.string.replace_first(code__$1,/\n$/,"");
return frontend.components.lazy_editor.editor_aux(config,id,attr,code__$2,options,loaded_QMARK__SINGLEQUOTE_);
});
var comp__31745__auto__ = (function() { 
var frontend$components$lazy_editor$editor__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38118 = cljs.core.first(args__31746__auto__);
var G__38119 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38118,G__38119) : io.factorhouse.hsx.core.obj_get.call(null,G__38118,G__38119));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"editor","editor",651153757,null),args__31746__auto__),frontend$components$lazy_editor$editor,args__31746__auto__,null);
}
};
var frontend$components$lazy_editor$editor = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38127__i = 0, G__38127__a = new Array(arguments.length -  0);
while (G__38127__i < G__38127__a.length) {G__38127__a[G__38127__i] = arguments[G__38127__i + 0]; ++G__38127__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38127__a,0,null);
} 
return frontend$components$lazy_editor$editor__delegate.call(this,args__31746__auto__);};
frontend$components$lazy_editor$editor.cljs$lang$maxFixedArity = 0;
frontend$components$lazy_editor$editor.cljs$lang$applyTo = (function (arglist__38128){
var args__31746__auto__ = cljs.core.seq(arglist__38128);
return frontend$components$lazy_editor$editor__delegate(args__31746__auto__);
});
frontend$components$lazy_editor$editor.cljs$core$IFn$_invoke$arity$variadic = frontend$components$lazy_editor$editor__delegate;
return frontend$components$lazy_editor$editor;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38120 = comp__31745__auto__;
var G__38121 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38120,G__38121) : io.factorhouse.hsx.core.react_memo.call(null,G__38120,G__38121));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"editor");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.lazy_editor.js.map
