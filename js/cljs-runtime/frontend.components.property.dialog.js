goog.provide('frontend.components.property.dialog');
frontend.components.property.dialog.built_in_property = (function frontend$components$property$dialog$built_in_property(ident){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.property.built_in_properties,ident);
if(cljs.core.truth_(temp__5825__auto__)){
var map__54841 = temp__5825__auto__;
var map__54841__$1 = cljs.core.__destructure_map(map__54841);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54841__$1,new cljs.core.Keyword(null,"title","title",636505583));
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54841__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var closed_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54841__$1,new cljs.core.Keyword(null,"closed-values","closed-values",364658811));
var G__54842 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),ident,new cljs.core.Keyword("db","ident","db/ident",-737096),ident,new cljs.core.Keyword("block","title","block/title",710445684),title,new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(schema)], null);
if(cljs.core.seq(closed_values)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54842,new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952),closed_values);
} else {
return G__54842;
}
} else {
return null;
}
});
frontend.components.property.dialog.dialog = (function (){var render_fn__31744__auto__ = (function frontend$components$property$dialog$dialog(blocks,opts){
frontend.modules.shortcut.core.use_disable_all_shortcuts_BANG_();

var has_blocks_QMARK_ = cljs.core.seq(blocks);
var k = new cljs.core.Keyword(null,"property-key","property-key",972402246).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_property_key = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(k);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var _STAR_property = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1((((k instanceof cljs.core.Keyword))?frontend.components.property.dialog.built_in_property(k):null));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var block = cljs.core.first(blocks);
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(k)){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.get_current_repo()),(function (repo){
return promesa.protocols._mcat(promesa.protocols._promise((((k instanceof cljs.core.Keyword))?frontend.components.property.dialog.built_in_property(k):null)),(function (initial_property){
return promesa.protocols._mcat(promesa.protocols._promise((((k instanceof cljs.core.Keyword))?frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),k], 0)):frontend.db.async._LT_get_case_page(repo,k))),(function (property){
return promesa.protocols._promise((cljs.core.truth_(property)?cljs.core.reset_BANG_(_STAR_property,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([initial_property,property], 0))):null));
}));
}));
}));
}));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));

logseq.shui.hooks.use_effect_BANG_((function (){
if(has_blocks_QMARK_){
var temp__5825__auto___54858 = new cljs.core.Keyword(null,"selected-blocks","selected-blocks",-96882948).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5825__auto___54858)){
var view_selected_blocks_54859 = temp__5825__auto___54858;
frontend.state.set_state_BANG_(new cljs.core.Keyword("view","selected-blocks","view/selected-blocks",-92053027),view_selected_blocks_54859);
} else {
}

frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","show-property-dialog?","ui/show-property-dialog?",241122918),true);

return (function (){
var temp__5825__auto___54860 = new cljs.core.Keyword(null,"on-dialog-close","on-dialog-close",-900873769).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5825__auto___54860)){
var close_fn_54861 = temp__5825__auto___54860;
(close_fn_54861.cljs$core$IFn$_invoke$arity$0 ? close_fn_54861.cljs$core$IFn$_invoke$arity$0() : close_fn_54861.call(null));
} else {
}

frontend.state.set_state_BANG_(new cljs.core.Keyword("view","selected-blocks","view/selected-blocks",-92053027),null);

return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","show-property-dialog?","ui/show-property-dialog?",241122918),false);
});
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [has_blocks_QMARK_], null));

if(has_blocks_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-property-dialog","div.ls-property-dialog",-1355561376),frontend.components.property.property_input(block,_STAR_property_key,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"*property","*property",1796678517),_STAR_property))], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$dialog$dialog__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__54853 = cljs.core.first(args__31746__auto__);
var G__54854 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__54853,G__54854) : io.factorhouse.hsx.core.obj_get.call(null,G__54853,G__54854));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"dialog","dialog",-1239285634,null),args__31746__auto__),frontend$components$property$dialog$dialog,args__31746__auto__,null);
}
};
var frontend$components$property$dialog$dialog = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__54863__i = 0, G__54863__a = new Array(arguments.length -  0);
while (G__54863__i < G__54863__a.length) {G__54863__a[G__54863__i] = arguments[G__54863__i + 0]; ++G__54863__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__54863__a,0,null);
} 
return frontend$components$property$dialog$dialog__delegate.call(this,args__31746__auto__);};
frontend$components$property$dialog$dialog.cljs$lang$maxFixedArity = 0;
frontend$components$property$dialog$dialog.cljs$lang$applyTo = (function (arglist__54864){
var args__31746__auto__ = cljs.core.seq(arglist__54864);
return frontend$components$property$dialog$dialog__delegate(args__31746__auto__);
});
frontend$components$property$dialog$dialog.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$dialog$dialog__delegate;
return frontend$components$property$dialog$dialog;
})()
;
var memo_comp__31747__auto__ = (function (){var G__54855 = comp__31745__auto__;
var G__54856 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__54855,G__54856) : io.factorhouse.hsx.core.react_memo.call(null,G__54855,G__54856));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"dialog");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.property.dialog.js.map
