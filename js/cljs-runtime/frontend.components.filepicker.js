goog.provide('frontend.components.filepicker');
frontend.components.filepicker.picker = (function (){var render_fn__47251__auto__ = (function frontend$components$filepicker$picker(p__90713){
var map__90714 = p__90713;
var map__90714__$1 = cljs.core.__destructure_map(map__90714);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90714__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.fn_QMARK_(on_change)){
} else {
throw (new Error("Assert failed: (fn? on-change)"));
}

var _STAR_input = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
logseq.shui.hooks.use_effect_BANG_((function (){
var element = goog.dom.getElement("filepicker");
if(cljs.core.truth_(element)){
cljs_drag_n_drop.core.subscribe_BANG_(element,new cljs.core.Keyword(null,"upload-files","upload-files",-771877630),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drop","drop",364481611),(function (e,files){
return (on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(e,files) : on_change.call(null,e,files));
})], null));
} else {
}

if(cljs.core.truth_(element)){
return (function (){
return cljs_drag_n_drop.core.unsubscribe_BANG_(element,new cljs.core.Keyword(null,"upload-files","upload-files",-771877630));
});
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_change], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#filepicker.border.border-dashed","div#filepicker.border.border-dashed",-1523953997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return logseq.shui.hooks.deref(_STAR_input).click();
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.flex.flex-col.gap-6.overflow-hidden","div.relative.flex.flex-col.gap-6.overflow-hidden",352901739),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(0),new cljs.core.Keyword(null,"class","class",-2030961996),"group relative grid h-52 w-full cursor-pointer place-items-center rounded-lg border-2 border-dashed border-muted-foreground/25 px-5 py-2.5 text-center transition hover:bg-muted/25 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.hidden","input.hidden",798529811),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__90712_SHARP_){
return logseq.shui.hooks.set_ref_BANG_(_STAR_input,p1__90712_SHARP_);
}),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(-1),new cljs.core.Keyword(null,"multiple","multiple",1244445549),true,new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var files = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(e.target.files);
return (on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(e,files) : on_change.call(null,e,files));
})], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col items-center justify-center gap-4 sm:px-5"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"rounded-full border border-dashed p-3"], null),logseq.shui.ui.tabler_icon("upload",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"!block text-muted-foreground",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(28),new cljs.core.Keyword(null,"height","height",1025178622),(28)], null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col gap-px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-medium text-muted-foreground"], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","drop-hint","asset/drop-hint",529059501)], 0))], null)], null)], null)], null)], null)], null);
});
var comp__47252__auto__ = (function() { 
var frontend$components$filepicker$picker__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__90722 = cljs.core.first(args__47253__auto__);
var G__90723 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__90722,G__90723) : io.factorhouse.hsx.core.obj_get.call(null,G__90722,G__90723));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"picker","picker",981141924,null),args__47253__auto__),frontend$components$filepicker$picker,args__47253__auto__,null);
}
};
var frontend$components$filepicker$picker = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__90741__i = 0, G__90741__a = new Array(arguments.length -  0);
while (G__90741__i < G__90741__a.length) {G__90741__a[G__90741__i] = arguments[G__90741__i + 0]; ++G__90741__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__90741__a,0,null);
} 
return frontend$components$filepicker$picker__delegate.call(this,args__47253__auto__);};
frontend$components$filepicker$picker.cljs$lang$maxFixedArity = 0;
frontend$components$filepicker$picker.cljs$lang$applyTo = (function (arglist__90742){
var args__47253__auto__ = cljs.core.seq(arglist__90742);
return frontend$components$filepicker$picker__delegate(args__47253__auto__);
});
frontend$components$filepicker$picker.cljs$core$IFn$_invoke$arity$variadic = frontend$components$filepicker$picker__delegate;
return frontend$components$filepicker$picker;
})()
;
var memo_comp__47254__auto__ = (function (){var G__90724 = comp__47252__auto__;
var G__90725 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__90724,G__90725) : io.factorhouse.hsx.core.react_memo.call(null,G__90724,G__90725));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"picker");

return comp__47252__auto__;
})();

//# sourceMappingURL=frontend.components.filepicker.js.map
