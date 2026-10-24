goog.provide('frontend.components.e2ee');
frontend.components.e2ee.e2ee_request_new_password = (function (){var render_fn__31744__auto__ = (function frontend$components$e2ee$e2ee_request_new_password(password_promise){
var vec__54270 = logseq.shui.hooks.use_state("");
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54270,(0),null);
var set_password_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54270,(1),null);
var vec__54273 = logseq.shui.hooks.use_state("");
var password_confirm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54273,(0),null);
var set_password_confirm_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54273,(1),null);
var vec__54276 = logseq.shui.hooks.use_state(null);
var matched_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54276,(0),null);
var set_matched_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54276,(1),null);
var on_submit = (function (){
promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(password_promise,password);

return (logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dialog_close_BANG_.call(null));
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.e2ee-password-modal-overlay","div.e2ee-password-modal-overlay",883961074),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.encryption-password.max-w-2xl.e2ee-password-modal-content.flex.flex-col.gap-8.p-4","div.encryption-password.max-w-2xl.e2ee-password-modal-content.flex.flex-col.gap-8.p-4",281531315),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-2xl.font-medium","div.text-2xl.font-medium",1757307673),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","set-password-title","encryption/set-password-title",-1350191657)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.init-remote-pw-tips.space-x-4.hidden.sm:flex","div.init-remote-pw-tips.space-x-4.hidden.sm:flex",-65566699),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-1.flex.items-center","div.flex-1.flex.items-center",1890061527),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.px-3.flex","span.px-3.flex",-847786888),frontend.ui.icon("key")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","remember-password-rich","encryption/remember-password-rich",464590241)], 0))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-1.flex.items-center","div.flex-1.flex.items-center",1890061527),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.px-3.flex","span.px-3.flex",-847786888),frontend.ui.icon("lock")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","cloud-password-rich","encryption/cloud-password-rich",62160664)], 0))], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-4","div.flex.flex-col.gap-4",-1215558137),logseq.shui.ui.toggle_password(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","enter-password","encryption/enter-password",1860798442)], 0)),new cljs.core.Keyword(null,"value","value",305978217),password,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__54279 = e.target.value;
return (set_password_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_password_BANG_.cljs$core$IFn$_invoke$arity$1(G__54279) : set_password_BANG_.call(null,G__54279));
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
if(clojure.string.blank_QMARK_(password_confirm)){
return null;
} else {
var G__54280 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(password_confirm,password);
return (set_matched_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_matched_BANG_.cljs$core$IFn$_invoke$arity$1(G__54280) : set_matched_BANG_.call(null,G__54280));
}
})], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-2","div.flex.flex-col.gap-2",1564729900),logseq.shui.ui.toggle_password(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","enter-password-again","encryption/enter-password-again",-71586873)], 0)),new cljs.core.Keyword(null,"value","value",305978217),password_confirm,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__54281 = e.target.value;
return (set_password_confirm_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_password_confirm_BANG_.cljs$core$IFn$_invoke$arity$1(G__54281) : set_password_confirm_BANG_.call(null,G__54281));
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
var G__54282 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(password_confirm,password);
return (set_matched_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_matched_BANG_.cljs$core$IFn$_invoke$arity$1(G__54282) : set_matched_BANG_.call(null,G__54282));
})], null)),((matched_QMARK_ === false)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-warning.text-sm","div.text-warning.text-sm",-112479027),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","password-not-matched","encryption/password-not-matched",-537099278)], 0))], null):null)], null),(function (){var G__54283 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_submit,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),((clojure.string.blank_QMARK_(password)) || (matched_QMARK_ === false))], null);
var G__54284 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","submit","ui/submit",-49310281)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__54283,G__54284) : logseq.shui.ui.button.call(null,G__54283,G__54284));
})()], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$e2ee$e2ee_request_new_password__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__54285 = cljs.core.first(args__31746__auto__);
var G__54286 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__54285,G__54286) : io.factorhouse.hsx.core.obj_get.call(null,G__54285,G__54286));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"e2ee-request-new-password","e2ee-request-new-password",-484451785,null),args__31746__auto__),frontend$components$e2ee$e2ee_request_new_password,args__31746__auto__,null);
}
};
var frontend$components$e2ee$e2ee_request_new_password = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__54312__i = 0, G__54312__a = new Array(arguments.length -  0);
while (G__54312__i < G__54312__a.length) {G__54312__a[G__54312__i] = arguments[G__54312__i + 0]; ++G__54312__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__54312__a,0,null);
} 
return frontend$components$e2ee$e2ee_request_new_password__delegate.call(this,args__31746__auto__);};
frontend$components$e2ee$e2ee_request_new_password.cljs$lang$maxFixedArity = 0;
frontend$components$e2ee$e2ee_request_new_password.cljs$lang$applyTo = (function (arglist__54313){
var args__31746__auto__ = cljs.core.seq(arglist__54313);
return frontend$components$e2ee$e2ee_request_new_password__delegate(args__31746__auto__);
});
frontend$components$e2ee$e2ee_request_new_password.cljs$core$IFn$_invoke$arity$variadic = frontend$components$e2ee$e2ee_request_new_password__delegate;
return frontend$components$e2ee$e2ee_request_new_password;
})()
;
var memo_comp__31747__auto__ = (function (){var G__54287 = comp__31745__auto__;
var G__54288 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__54287,G__54288) : io.factorhouse.hsx.core.react_memo.call(null,G__54287,G__54288));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"e2ee-request-new-password");

return comp__31745__auto__;
})();
frontend.components.e2ee.e2ee_request_password = (function (){var render_fn__31744__auto__ = (function frontend$components$e2ee$e2ee_request_password(password_promise){
var _STAR_password_input = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var vec__54289 = logseq.shui.hooks.use_state("");
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54289,(0),null);
var set_password_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54289,(1),null);
var on_submit = (function (){
promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(password_promise,logseq.shui.hooks.deref(_STAR_password_input).value);

return (logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dialog_close_BANG_.call(null));
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.e2ee-password-modal-overlay","div.e2ee-password-modal-overlay",883961074),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.e2ee-password-modal-content.flex.flex-col.gap-8.p-4","div.e2ee-password-modal-content.flex.flex-col.gap-8.p-4",-1834750529),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-2xl.font-medium","div.text-2xl.font-medium",1757307673),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","enter-password-title","encryption/enter-password-title",-438829286)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-4","div.flex.flex-col.gap-4",-1215558137),logseq.shui.ui.toggle_password(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_password_input,new cljs.core.Keyword(null,"value","value",305978217),password,new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",frontend.util.ekey(e))){
return on_submit();
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__54292 = e.target.value;
return (set_password_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_password_BANG_.cljs$core$IFn$_invoke$arity$1(G__54292) : set_password_BANG_.call(null,G__54292));
})], null)),(function (){var G__54293 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_submit,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),clojure.string.blank_QMARK_(password),new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",frontend.util.ekey(e))){
return on_submit();
} else {
return null;
}
})], null);
var G__54294 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","submit","ui/submit",-49310281)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__54293,G__54294) : logseq.shui.ui.button.call(null,G__54293,G__54294));
})()], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$e2ee$e2ee_request_password__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__54295 = cljs.core.first(args__31746__auto__);
var G__54296 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__54295,G__54296) : io.factorhouse.hsx.core.obj_get.call(null,G__54295,G__54296));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"e2ee-request-password","e2ee-request-password",162110891,null),args__31746__auto__),frontend$components$e2ee$e2ee_request_password,args__31746__auto__,null);
}
};
var frontend$components$e2ee$e2ee_request_password = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__54314__i = 0, G__54314__a = new Array(arguments.length -  0);
while (G__54314__i < G__54314__a.length) {G__54314__a[G__54314__i] = arguments[G__54314__i + 0]; ++G__54314__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__54314__a,0,null);
} 
return frontend$components$e2ee$e2ee_request_password__delegate.call(this,args__31746__auto__);};
frontend$components$e2ee$e2ee_request_password.cljs$lang$maxFixedArity = 0;
frontend$components$e2ee$e2ee_request_password.cljs$lang$applyTo = (function (arglist__54315){
var args__31746__auto__ = cljs.core.seq(arglist__54315);
return frontend$components$e2ee$e2ee_request_password__delegate(args__31746__auto__);
});
frontend$components$e2ee$e2ee_request_password.cljs$core$IFn$_invoke$arity$variadic = frontend$components$e2ee$e2ee_request_password__delegate;
return frontend$components$e2ee$e2ee_request_password;
})()
;
var memo_comp__31747__auto__ = (function (){var G__54297 = comp__31745__auto__;
var G__54298 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__54297,G__54298) : io.factorhouse.hsx.core.react_memo.call(null,G__54297,G__54298));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"e2ee-request-password");

return comp__31745__auto__;
})();
frontend.components.e2ee.e2ee_password_to_decrypt_private_key = (function (){var render_fn__31744__auto__ = (function frontend$components$e2ee$e2ee_password_to_decrypt_private_key(encrypted_private_key,private_key_promise){
var _STAR_password_input = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var vec__54299 = logseq.shui.hooks.use_state("");
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54299,(0),null);
var set_password_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54299,(1),null);
var vec__54302 = logseq.shui.hooks.use_state(false);
var decrypt_fail_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54302,(0),null);
var set_decrypt_fail_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54302,(1),null);
var on_submit = (function (){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.shui.hooks.deref(_STAR_password_input).value),(function (entered_password){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.crypt._LT_decrypt_private_key(entered_password,encrypted_private_key)),(function (private_key){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","save-e2ee-password","thread-api/save-e2ee-password",1162123659),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entered_password], 0))),(function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(private_key_promise,private_key)),(function (___21901__auto____$1){
return promesa.protocols._promise((logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dialog_close_BANG_.call(null)));
}));
}));
}));
}));
})),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("decrypt-private-key",cljs.core.ex_message(e))){
return (set_decrypt_fail_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_decrypt_fail_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_decrypt_fail_BANG_.call(null,true));
} else {
return null;
}
}));
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.e2ee-password-modal-overlay","div.e2ee-password-modal-overlay",883961074),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.e2ee-password-modal-content.flex.flex-col.gap-8.p-4","div.e2ee-password-modal-content.flex.flex-col.gap-8.p-4",-1834750529),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-2xl.font-medium","div.text-2xl.font-medium",1757307673),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","enter-password-title","encryption/enter-password-title",-438829286)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-4","div.flex.flex-col.gap-4",-1215558137),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-1","div.flex.flex-col.gap-1",1246857632),logseq.shui.ui.toggle_password(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_password_input,new cljs.core.Keyword(null,"value","value",305978217),password,new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",frontend.util.ekey(e))){
return on_submit();
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
(set_decrypt_fail_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_decrypt_fail_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_decrypt_fail_BANG_.call(null,false));

var G__54305 = e.target.value;
return (set_password_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_password_BANG_.cljs$core$IFn$_invoke$arity$1(G__54305) : set_password_BANG_.call(null,G__54305));
})], null)),(cljs.core.truth_(decrypt_fail_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-warning.text-sm","p.text-warning.text-sm",-1804139329),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","wrong-password","encryption/wrong-password",-1583660719)], 0))], null):null)], null),(function (){var G__54306 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_submit,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),clojure.string.blank_QMARK_(password),new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",frontend.util.ekey(e))){
return on_submit();
} else {
return null;
}
})], null);
var G__54307 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","submit","ui/submit",-49310281)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__54306,G__54307) : logseq.shui.ui.button.call(null,G__54306,G__54307));
})()], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$e2ee$e2ee_password_to_decrypt_private_key__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__54308 = cljs.core.first(args__31746__auto__);
var G__54309 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__54308,G__54309) : io.factorhouse.hsx.core.obj_get.call(null,G__54308,G__54309));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"e2ee-password-to-decrypt-private-key","e2ee-password-to-decrypt-private-key",66297454,null),args__31746__auto__),frontend$components$e2ee$e2ee_password_to_decrypt_private_key,args__31746__auto__,null);
}
};
var frontend$components$e2ee$e2ee_password_to_decrypt_private_key = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__54316__i = 0, G__54316__a = new Array(arguments.length -  0);
while (G__54316__i < G__54316__a.length) {G__54316__a[G__54316__i] = arguments[G__54316__i + 0]; ++G__54316__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__54316__a,0,null);
} 
return frontend$components$e2ee$e2ee_password_to_decrypt_private_key__delegate.call(this,args__31746__auto__);};
frontend$components$e2ee$e2ee_password_to_decrypt_private_key.cljs$lang$maxFixedArity = 0;
frontend$components$e2ee$e2ee_password_to_decrypt_private_key.cljs$lang$applyTo = (function (arglist__54317){
var args__31746__auto__ = cljs.core.seq(arglist__54317);
return frontend$components$e2ee$e2ee_password_to_decrypt_private_key__delegate(args__31746__auto__);
});
frontend$components$e2ee$e2ee_password_to_decrypt_private_key.cljs$core$IFn$_invoke$arity$variadic = frontend$components$e2ee$e2ee_password_to_decrypt_private_key__delegate;
return frontend$components$e2ee$e2ee_password_to_decrypt_private_key;
})()
;
var memo_comp__31747__auto__ = (function (){var G__54310 = comp__31745__auto__;
var G__54311 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__54310,G__54311) : io.factorhouse.hsx.core.react_memo.call(null,G__54310,G__54311));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"e2ee-password-to-decrypt-private-key");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.e2ee.js.map
