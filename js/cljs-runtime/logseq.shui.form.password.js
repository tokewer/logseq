goog.provide('logseq.shui.form.password');
logseq.shui.form.password.toggle_password = (function (){var render_fn__47251__auto__ = (function logseq$shui$form$password$toggle_password(option){
var vec__49759 = logseq.shui.hooks.use_state(false);
var visible_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49759,(0),null);
var set_visible_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49759,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-toggle-password-input.relative","div.ls-toggle-password-input.relative",-662862357),(function (){var G__49762 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([option,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(option);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.truth_(visible_QMARK_)){
return "text";
} else {
return "password";
}
}
})()], null)], 0));
return (logseq.shui.form.core.input.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.form.core.input.cljs$core$IFn$_invoke$arity$1(G__49762) : logseq.shui.form.core.input.call(null,G__49762));
})(),((clojure.string.blank_QMARK_(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(option)))?null:logseq.shui.base.core.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"class","class",-2030961996),"absolute right-1",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),(6)], null),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__49766 = cljs.core.not(visible_QMARK_);
return (set_visible_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_visible_BANG_.cljs$core$IFn$_invoke$arity$1(G__49766) : set_visible_BANG_.call(null,G__49766));
})], null),logseq.shui.icon.v2.root((cljs.core.truth_(visible_QMARK_)?"eye-off":"eye"))], 0)))], null);
});
var comp__47252__auto__ = (function() { 
var logseq$shui$form$password$toggle_password__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__49767 = cljs.core.first(args__47253__auto__);
var G__49768 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__49767,G__49768) : io.factorhouse.hsx.core.obj_get.call(null,G__49767,G__49768));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"toggle-password","toggle-password",-234548955,null),args__47253__auto__),logseq$shui$form$password$toggle_password,args__47253__auto__,null);
}
};
var logseq$shui$form$password$toggle_password = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__49774__i = 0, G__49774__a = new Array(arguments.length -  0);
while (G__49774__i < G__49774__a.length) {G__49774__a[G__49774__i] = arguments[G__49774__i + 0]; ++G__49774__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__49774__a,0,null);
} 
return logseq$shui$form$password$toggle_password__delegate.call(this,args__47253__auto__);};
logseq$shui$form$password$toggle_password.cljs$lang$maxFixedArity = 0;
logseq$shui$form$password$toggle_password.cljs$lang$applyTo = (function (arglist__49775){
var args__47253__auto__ = cljs.core.seq(arglist__49775);
return logseq$shui$form$password$toggle_password__delegate(args__47253__auto__);
});
logseq$shui$form$password$toggle_password.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$form$password$toggle_password__delegate;
return logseq$shui$form$password$toggle_password;
})()
;
var memo_comp__47254__auto__ = (function (){var G__49769 = comp__47252__auto__;
var G__49770 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__49769,G__49770) : io.factorhouse.hsx.core.react_memo.call(null,G__49769,G__49770));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"toggle-password");

return comp__47252__auto__;
})();

//# sourceMappingURL=logseq.shui.form.password.js.map
