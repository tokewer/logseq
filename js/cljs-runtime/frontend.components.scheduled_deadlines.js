goog.provide('frontend.components.scheduled_deadlines');
frontend.components.scheduled_deadlines.scheduled_or_deadlines_QMARK_ = (function frontend$components$scheduled_deadlines$scheduled_or_deadlines_QMARK_(page_name){
return ((frontend.date.valid_journal_title_QMARK_(clojure.string.capitalize(page_name))) && ((((!(frontend.state.scheduled_deadlines_disabled_QMARK_() === true))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.date.journal_title__GT_int(clojure.string.capitalize(page_name)),frontend.date.today_journal_day())))));
});
frontend.components.scheduled_deadlines.scheduled_and_deadlines = (function (){var render_fn__31744__auto__ = (function frontend$components$scheduled_deadlines$scheduled_and_deadlines(page_name){
var vec__46244 = logseq.shui.hooks.use_state(null);
var scheduled_or_deadlines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46244,(0),null);
var set_scheduled_or_deadlines_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46244,(1),null);
logseq.shui.hooks.use_effect_BANG_((function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(((frontend.components.scheduled_deadlines.scheduled_or_deadlines_QMARK_(page_name))?frontend.db.async._LT_get_date_scheduled_or_deadlines(clojure.string.capitalize(page_name)):null)),(function (result){
return promesa.protocols._promise((set_scheduled_or_deadlines_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_scheduled_or_deadlines_BANG_.cljs$core$IFn$_invoke$arity$1(result) : set_scheduled_or_deadlines_BANG_.call(null,result)));
}));
}));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_name], null));

if(cljs.core.seq(scheduled_or_deadlines)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.scheduled-or-deadlines","div.scheduled-or-deadlines",-2080684124),frontend.ui.foldable(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.font-medium","div.text-sm.font-medium",-120265550),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","scheduled-and-deadline","page/scheduled-and-deadline",859516508)], 0))], null),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.scheduled-deadlines.references-blocks.mb-6","div.scheduled-deadlines.references-blocks.mb-6",563614237),(function (){var ref_hiccup = frontend.components.block.__GT_hiccup(scheduled_or_deadlines,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_name)+"-agenda"),new cljs.core.Keyword(null,"ref?","ref?",1932693720),true,new cljs.core.Keyword(null,"group-by-page?","group-by-page?",1520059448),true,new cljs.core.Keyword(null,"editor-box","editor-box",708759870),frontend.components.editor.box], null),cljs.core.PersistentArrayMap.EMPTY);
return frontend.components.content.content(page_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),ref_hiccup], null));
})()], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title-trigger?","title-trigger?",-613599873),true,new cljs.core.Keyword(null,"default-collapsed?","default-collapsed?",-1350393823),true], null))], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$scheduled_deadlines$scheduled_and_deadlines__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46247 = cljs.core.first(args__31746__auto__);
var G__46248 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46247,G__46248) : io.factorhouse.hsx.core.obj_get.call(null,G__46247,G__46248));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"scheduled-and-deadlines","scheduled-and-deadlines",735751588,null),args__31746__auto__),frontend$components$scheduled_deadlines$scheduled_and_deadlines,args__31746__auto__,null);
}
};
var frontend$components$scheduled_deadlines$scheduled_and_deadlines = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46251__i = 0, G__46251__a = new Array(arguments.length -  0);
while (G__46251__i < G__46251__a.length) {G__46251__a[G__46251__i] = arguments[G__46251__i + 0]; ++G__46251__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46251__a,0,null);
} 
return frontend$components$scheduled_deadlines$scheduled_and_deadlines__delegate.call(this,args__31746__auto__);};
frontend$components$scheduled_deadlines$scheduled_and_deadlines.cljs$lang$maxFixedArity = 0;
frontend$components$scheduled_deadlines$scheduled_and_deadlines.cljs$lang$applyTo = (function (arglist__46252){
var args__31746__auto__ = cljs.core.seq(arglist__46252);
return frontend$components$scheduled_deadlines$scheduled_and_deadlines__delegate(args__31746__auto__);
});
frontend$components$scheduled_deadlines$scheduled_and_deadlines.cljs$core$IFn$_invoke$arity$variadic = frontend$components$scheduled_deadlines$scheduled_and_deadlines__delegate;
return frontend$components$scheduled_deadlines$scheduled_and_deadlines;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46249 = comp__31745__auto__;
var G__46250 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46249,G__46250) : io.factorhouse.hsx.core.react_memo.call(null,G__46249,G__46250));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"scheduled-and-deadlines");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.scheduled_deadlines.js.map
