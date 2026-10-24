goog.provide('frontend.extensions.highlight');
frontend.extensions.highlight.highlight_BANG_ = (function frontend$extensions$highlight$highlight_BANG_(id,attr){
if(cljs.core.truth_(new cljs.core.Keyword(null,"data-lang","data-lang",969460304).cljs$core$IFn$_invoke$arity$1(attr))){
var temp__5825__auto__ = document.getElementById(id);
if(cljs.core.truth_(temp__5825__auto__)){
var element = temp__5825__auto__;
return hljs.highlightElement(element);
} else {
return null;
}
} else {
return null;
}
});
frontend.extensions.highlight.highlight = (function (){var render_fn__47251__auto__ = (function frontend$extensions$highlight$highlight(id,attr,code){
logseq.shui.hooks.use_effect_BANG_((function (){
return frontend.extensions.highlight.highlight_BANG_(id,attr);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,attr], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.code.pre-wrap-white-space","pre.code.pre-wrap-white-space",745348454),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attr,new cljs.core.Keyword(null,"id","id",-1388402092),id),code], null)], null);
});
var comp__47252__auto__ = (function() { 
var frontend$extensions$highlight$highlight__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__82173 = cljs.core.first(args__47253__auto__);
var G__82174 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__82173,G__82174) : io.factorhouse.hsx.core.obj_get.call(null,G__82173,G__82174));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"highlight","highlight",839600654,null),args__47253__auto__),frontend$extensions$highlight$highlight,args__47253__auto__,null);
}
};
var frontend$extensions$highlight$highlight = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__82178__i = 0, G__82178__a = new Array(arguments.length -  0);
while (G__82178__i < G__82178__a.length) {G__82178__a[G__82178__i] = arguments[G__82178__i + 0]; ++G__82178__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__82178__a,0,null);
} 
return frontend$extensions$highlight$highlight__delegate.call(this,args__47253__auto__);};
frontend$extensions$highlight$highlight.cljs$lang$maxFixedArity = 0;
frontend$extensions$highlight$highlight.cljs$lang$applyTo = (function (arglist__82179){
var args__47253__auto__ = cljs.core.seq(arglist__82179);
return frontend$extensions$highlight$highlight__delegate(args__47253__auto__);
});
frontend$extensions$highlight$highlight.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$highlight$highlight__delegate;
return frontend$extensions$highlight$highlight;
})()
;
var memo_comp__47254__auto__ = (function (){var G__82175 = comp__47252__auto__;
var G__82176 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__82175,G__82176) : io.factorhouse.hsx.core.react_memo.call(null,G__82175,G__82176));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"highlight");

return comp__47252__auto__;
})();
frontend.extensions.highlight.html_export = (function frontend$extensions$highlight$html_export(attr,code){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.pre-wrap-white-space","pre.pre-wrap-white-space",-614870903),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),attr,code], null)], null);
});

//# sourceMappingURL=frontend.extensions.highlight.js.map
