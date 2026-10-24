goog.provide('frontend.components.email');
frontend.components.email.stop_event_BANG_ = (function frontend$components$email$stop_event_BANG_(e){
e.preventDefault();

return e.stopPropagation();
});
frontend.components.email.with_tooltip = (function frontend$components$email$with_tooltip(trigger,tooltip_content,tooltip_QMARK_){
if(cljs.core.truth_(tooltip_QMARK_)){
return frontend.ui.tooltip(trigger,tooltip_content);
} else {
return trigger;
}
});
frontend.components.email.email_address = (function (){var render_fn__31744__auto__ = (function frontend$components$email$email_address(p__55494){
var map__55495 = p__55494;
var map__55495__$1 = cljs.core.__destructure_map(map__55495);
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55495__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55495__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var text_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55495__$1,new cljs.core.Keyword(null,"text-class","text-class",603048680));
var icon_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55495__$1,new cljs.core.Keyword(null,"icon-class","icon-class",-216197803));
var tooltip_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55495__$1,new cljs.core.Keyword(null,"tooltip?","tooltip?",-642753154),cljs.core.not(frontend.state.mobile_QMARK_()));
var config = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415)], null));
var mask_email_QMARK_ = frontend.util.email.mask_email_QMARK_(config);
var reveal_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [email,mask_email_QMARK_], null);
var vec__55496 = logseq.shui.hooks.use_state(null);
var revealed_for = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55496,(0),null);
var set_revealed_for_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55496,(1),null);
var revealed_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(revealed_for,reveal_key);
var masked_QMARK_ = ((mask_email_QMARK_) && ((!(revealed_QMARK_))));
var text = ((masked_QMARK_)?frontend.util.email.mask_email(email):email);
var tooltip_content = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((masked_QMARK_)?new cljs.core.Keyword("account","show-email-address","account/show-email-address",1563480483):new cljs.core.Keyword("account","hide-email-address","account/hide-email-address",-1550095238))], 0));
var button = (function (){var G__55499 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var or__5142__auto__ = icon_class;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "ml-1 inline-flex h-auto w-auto min-w-0 border-0 bg-transparent p-0 text-current opacity-70 hover:opacity-100";
}
})(),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),tooltip_content,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),frontend.components.email.stop_event_BANG_,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"Enter",null], null), null),e.key)){
return e.stopPropagation();
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.components.email.stop_event_BANG_(e);

var G__55501 = ((revealed_QMARK_)?null:reveal_key);
return (set_revealed_for_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_revealed_for_BANG_.cljs$core$IFn$_invoke$arity$1(G__55501) : set_revealed_for_BANG_.call(null,G__55501));
})], null);
var G__55500 = logseq.shui.ui.tabler_icon(((masked_QMARK_)?"eye":"eye-off"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__55499,G__55500) : logseq.shui.ui.button.call(null,G__55499,G__55500));
})();
if((!((email == null)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ls-email-address.inline-flex.items-center","span.ls-email-address.inline-flex.items-center",1865226257),(function (){var G__55502 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null);
if(mask_email_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55502,new cljs.core.Keyword(null,"data-masked","data-masked",-997291969),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(masked_QMARK_)));
} else {
return G__55502;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),text_class], null),text], null),((mask_email_QMARK_)?frontend.components.email.with_tooltip(button,tooltip_content,tooltip_QMARK_):null)], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$email$email_address__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__55503 = cljs.core.first(args__31746__auto__);
var G__55504 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__55503,G__55504) : io.factorhouse.hsx.core.obj_get.call(null,G__55503,G__55504));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"email-address","email-address",729981279,null),args__31746__auto__),frontend$components$email$email_address,args__31746__auto__,null);
}
};
var frontend$components$email$email_address = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__55507__i = 0, G__55507__a = new Array(arguments.length -  0);
while (G__55507__i < G__55507__a.length) {G__55507__a[G__55507__i] = arguments[G__55507__i + 0]; ++G__55507__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__55507__a,0,null);
} 
return frontend$components$email$email_address__delegate.call(this,args__31746__auto__);};
frontend$components$email$email_address.cljs$lang$maxFixedArity = 0;
frontend$components$email$email_address.cljs$lang$applyTo = (function (arglist__55508){
var args__31746__auto__ = cljs.core.seq(arglist__55508);
return frontend$components$email$email_address__delegate(args__31746__auto__);
});
frontend$components$email$email_address.cljs$core$IFn$_invoke$arity$variadic = frontend$components$email$email_address__delegate;
return frontend$components$email$email_address;
})()
;
var memo_comp__31747__auto__ = (function (){var G__55505 = comp__31745__auto__;
var G__55506 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__55505,G__55506) : io.factorhouse.hsx.core.react_memo.call(null,G__55505,G__55506));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"email-address");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.email.js.map
