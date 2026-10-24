goog.provide('frontend.mobile.footer');
frontend.mobile.footer.mobile_bar_command = (function (){var render_fn__31744__auto__ = (function frontend$mobile$footer$mobile_bar_command(command_handler,icon){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.bottom-action","button.bottom-action",1642014506),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
frontend.util.stop(e);

return (command_handler.cljs$core$IFn$_invoke$arity$0 ? command_handler.cljs$core$IFn$_invoke$arity$0() : command_handler.call(null));
})], null),frontend.ui.icon(icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(24)], null))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$mobile$footer$mobile_bar_command__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__58855 = cljs.core.first(args__31746__auto__);
var G__58856 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__58855,G__58856) : io.factorhouse.hsx.core.obj_get.call(null,G__58855,G__58856));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"mobile-bar-command","mobile-bar-command",1294281194,null),args__31746__auto__),frontend$mobile$footer$mobile_bar_command,args__31746__auto__,null);
}
};
var frontend$mobile$footer$mobile_bar_command = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58864__i = 0, G__58864__a = new Array(arguments.length -  0);
while (G__58864__i < G__58864__a.length) {G__58864__a[G__58864__i] = arguments[G__58864__i + 0]; ++G__58864__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58864__a,0,null);
} 
return frontend$mobile$footer$mobile_bar_command__delegate.call(this,args__31746__auto__);};
frontend$mobile$footer$mobile_bar_command.cljs$lang$maxFixedArity = 0;
frontend$mobile$footer$mobile_bar_command.cljs$lang$applyTo = (function (arglist__58865){
var args__31746__auto__ = cljs.core.seq(arglist__58865);
return frontend$mobile$footer$mobile_bar_command__delegate(args__31746__auto__);
});
frontend$mobile$footer$mobile_bar_command.cljs$core$IFn$_invoke$arity$variadic = frontend$mobile$footer$mobile_bar_command__delegate;
return frontend$mobile$footer$mobile_bar_command;
})()
;
var memo_comp__31747__auto__ = (function (){var G__58857 = comp__31745__auto__;
var G__58858 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__58857,G__58858) : io.factorhouse.hsx.core.react_memo.call(null,G__58857,G__58858));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"mobile-bar-command");

return comp__31745__auto__;
})();
frontend.mobile.footer.footer = (function (){var render_fn__31744__auto__ = (function frontend$mobile$footer$footer(){
var route_name = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-match","route-match",-1450985937),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var show_tabbar_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("mobile","show-tabbar?","mobile/show-tabbar?",925227298)], null));
if(cljs.core.truth_((function (){var and__5140__auto__ = (function (){var fexpr__58859 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"home","home",-74557309),null,new cljs.core.Keyword(null,"page","page",849072397),null], null), null);
return (fexpr__58859.cljs$core$IFn$_invoke$arity$1 ? fexpr__58859.cljs$core$IFn$_invoke$arity$1(route_name) : fexpr__58859.call(null,route_name));
})();
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = cljs.core.not(frontend.state.editing_QMARK_());
if(and__5140__auto____$1){
var and__5140__auto____$2 = show_tabbar_QMARK_;
if(cljs.core.truth_(and__5140__auto____$2)){
return frontend.state.get_current_repo();
} else {
return and__5140__auto____$2;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__footer.w-full.bottom-0.justify-between","div.cp__footer.w-full.bottom-0.justify-between",-1556122002),frontend.mobile.footer.mobile_bar_command((function (){
if(cljs.core.truth_(frontend.mobile.util.native_ipad_QMARK_())){
} else {
frontend.state.set_left_sidebar_open_BANG_(false);
}

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("go","search","go/search",1564957958)], null));
}),"search"),frontend.mobile.footer.mobile_bar_command(frontend.state.toggle_document_mode_BANG_,"notes"),frontend.mobile.footer.mobile_bar_command((function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_today_journal_title(frontend.state.get_current_repo())),(function (today_page_title){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return clojure.string.lower_case(today_page_title);
}
})()),(function (page){
return promesa.protocols._promise(frontend.handler.editor.api_insert_new_block_BANG_("",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page","page",849072397),page,new cljs.core.Keyword(null,"edit-block?","edit-block?",-310383789),true,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),true], null)));
}));
}));
}));
}),"edit")], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$mobile$footer$footer__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__58860 = cljs.core.first(args__31746__auto__);
var G__58861 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__58860,G__58861) : io.factorhouse.hsx.core.obj_get.call(null,G__58860,G__58861));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"footer","footer",-1047990379,null),args__31746__auto__),frontend$mobile$footer$footer,args__31746__auto__,null);
}
};
var frontend$mobile$footer$footer = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58866__i = 0, G__58866__a = new Array(arguments.length -  0);
while (G__58866__i < G__58866__a.length) {G__58866__a[G__58866__i] = arguments[G__58866__i + 0]; ++G__58866__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58866__a,0,null);
} 
return frontend$mobile$footer$footer__delegate.call(this,args__31746__auto__);};
frontend$mobile$footer$footer.cljs$lang$maxFixedArity = 0;
frontend$mobile$footer$footer.cljs$lang$applyTo = (function (arglist__58867){
var args__31746__auto__ = cljs.core.seq(arglist__58867);
return frontend$mobile$footer$footer__delegate(args__31746__auto__);
});
frontend$mobile$footer$footer.cljs$core$IFn$_invoke$arity$variadic = frontend$mobile$footer$footer__delegate;
return frontend$mobile$footer$footer;
})()
;
var memo_comp__31747__auto__ = (function (){var G__58862 = comp__31745__auto__;
var G__58863 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__58862,G__58863) : io.factorhouse.hsx.core.react_memo.call(null,G__58862,G__58863));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"footer");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.mobile.footer.js.map
