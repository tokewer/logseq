goog.provide('frontend.components.shell');
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.shell !== 'undefined') && (typeof frontend.components.shell._STAR_command !== 'undefined')){
} else {
frontend.components.shell._STAR_command = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.shell !== 'undefined') && (typeof frontend.components.shell._STAR_loading_QMARK_ !== 'undefined')){
} else {
frontend.components.shell._STAR_loading_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.components.shell.run_command = (function frontend$components$shell$run_command(){
cljs.core.reset_BANG_(frontend.components.shell._STAR_loading_QMARK_,true);

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(((clojure.string.blank_QMARK_(cljs.core.deref(frontend.components.shell._STAR_command)))?null:frontend.handler.shell.run_command_BANG_(cljs.core.deref(frontend.components.shell._STAR_command)))),(function (_){
return promesa.protocols._promise(cljs.core.reset_BANG_(frontend.components.shell._STAR_loading_QMARK_,false));
}));
})),(function (){
return cljs.core.reset_BANG_(frontend.components.shell._STAR_loading_QMARK_,false);
}));
});
frontend.components.shell.shell = (function (){var render_fn__31744__auto__ = (function frontend$components$shell$shell(){
var vec__56053 = logseq.shui.hooks.use_atom(frontend.components.shell._STAR_loading_QMARK_);
var loading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56053,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col","div.flex.flex-col",255067761),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),e.keyCode)){
return frontend.components.shell.run_command();
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",-2139952071),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shell","input-command-title","shell/input-command-title",1655809479)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-4.mb-4.relative.rounded-md.shadow-sm","div.mt-4.mb-4.relative.rounded-md.shadow-sm",1971304436),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#run-command.form-input.font-mono.block.w-full.sm:text-sm.sm:leading-5","input#run-command.form-input.font-mono.block.w-full.sm:text-sm.sm:leading-5",-865505401),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"autoFocus","autoFocus",-552622425),true,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),frontend.util.stop_propagation,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"git commit -m ...",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.reset_BANG_(frontend.components.shell._STAR_command,frontend.util.evalue(e));
})], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center","div.flex.flex-row.items-center",2086153476),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","run","ui/run",-1821171881)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.components.shell.run_command], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ml-4","div.ml-4",1591705073),(cljs.core.truth_(loading_QMARK_)?frontend.ui.loading.cljs$core$IFn$_invoke$arity$1(""):null)], null)], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$shell$shell__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56056 = cljs.core.first(args__31746__auto__);
var G__56057 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56056,G__56057) : io.factorhouse.hsx.core.obj_get.call(null,G__56056,G__56057));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"shell","shell",-1251494750,null),args__31746__auto__),frontend$components$shell$shell,args__31746__auto__,null);
}
};
var frontend$components$shell$shell = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56060__i = 0, G__56060__a = new Array(arguments.length -  0);
while (G__56060__i < G__56060__a.length) {G__56060__a[G__56060__i] = arguments[G__56060__i + 0]; ++G__56060__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56060__a,0,null);
} 
return frontend$components$shell$shell__delegate.call(this,args__31746__auto__);};
frontend$components$shell$shell.cljs$lang$maxFixedArity = 0;
frontend$components$shell$shell.cljs$lang$applyTo = (function (arglist__56061){
var args__31746__auto__ = cljs.core.seq(arglist__56061);
return frontend$components$shell$shell__delegate(args__31746__auto__);
});
frontend$components$shell$shell.cljs$core$IFn$_invoke$arity$variadic = frontend$components$shell$shell__delegate;
return frontend$components$shell$shell;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56058 = comp__31745__auto__;
var G__56059 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56058,G__56059) : io.factorhouse.hsx.core.react_memo.call(null,G__56058,G__56059));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"shell");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.shell.js.map
