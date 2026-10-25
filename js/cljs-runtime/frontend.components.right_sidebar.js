goog.provide('frontend.components.right_sidebar');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
frontend.components.right_sidebar.toggle = (function (){var render_fn__31744__auto__ = (function frontend$components$right_sidebar$toggle(){
if(frontend.util.sm_breakpoint_QMARK_()){
return null;
} else {
return frontend.ui.with_shortcut(new cljs.core.Keyword("ui","toggle-right-sidebar","ui/toggle-right-sidebar",-1502060890),"left",logseq.shui.ui.button_ghost_icon(new cljs.core.Keyword(null,"layout-sidebar-right","layout-sidebar-right",405939392),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"toggle-right-sidebar",new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.ui.toggle_right_sidebar_BANG_], null)),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sidebar.right","toggle","sidebar.right/toggle",636891384)], 0)));
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$right_sidebar$toggle__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47442 = cljs.core.first(args__31746__auto__);
var G__47443 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47442,G__47443) : io.factorhouse.hsx.core.obj_get.call(null,G__47442,G__47443));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"toggle","toggle",-1362593739,null),args__31746__auto__),frontend$components$right_sidebar$toggle,args__31746__auto__,null);
}
};
var frontend$components$right_sidebar$toggle = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47594__i = 0, G__47594__a = new Array(arguments.length -  0);
while (G__47594__i < G__47594__a.length) {G__47594__a[G__47594__i] = arguments[G__47594__i + 0]; ++G__47594__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47594__a,0,null);
} 
return frontend$components$right_sidebar$toggle__delegate.call(this,args__31746__auto__);};
frontend$components$right_sidebar$toggle.cljs$lang$maxFixedArity = 0;
frontend$components$right_sidebar$toggle.cljs$lang$applyTo = (function (arglist__47595){
var args__31746__auto__ = cljs.core.seq(arglist__47595);
return frontend$components$right_sidebar$toggle__delegate(args__31746__auto__);
});
frontend$components$right_sidebar$toggle.cljs$core$IFn$_invoke$arity$variadic = frontend$components$right_sidebar$toggle__delegate;
return frontend$components$right_sidebar$toggle;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47444 = comp__31745__auto__;
var G__47445 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47444,G__47445) : io.factorhouse.hsx.core.react_memo.call(null,G__47444,G__47445));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"toggle");

return comp__31745__auto__;
})();
frontend.components.right_sidebar.block_cp = (function (){var render_fn__31744__auto__ = (function frontend$components$right_sidebar$block_cp(repo,idx,block){
var id = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-2","div.mt-2",-701876875),frontend.components.page.page_cp(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))], null)], null),new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),true,new cljs.core.Keyword("sidebar","idx","sidebar/idx",-1047236867),idx,new cljs.core.Keyword(null,"repo","repo",-1999060679),repo], null))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$right_sidebar$block_cp__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47446 = cljs.core.first(args__31746__auto__);
var G__47447 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47446,G__47447) : io.factorhouse.hsx.core.obj_get.call(null,G__47446,G__47447));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"block-cp","block-cp",-2085540934,null),args__31746__auto__),frontend$components$right_sidebar$block_cp,args__31746__auto__,null);
}
};
var frontend$components$right_sidebar$block_cp = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47596__i = 0, G__47596__a = new Array(arguments.length -  0);
while (G__47596__i < G__47596__a.length) {G__47596__a[G__47596__i] = arguments[G__47596__i + 0]; ++G__47596__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47596__a,0,null);
} 
return frontend$components$right_sidebar$block_cp__delegate.call(this,args__31746__auto__);};
frontend$components$right_sidebar$block_cp.cljs$lang$maxFixedArity = 0;
frontend$components$right_sidebar$block_cp.cljs$lang$applyTo = (function (arglist__47597){
var args__31746__auto__ = cljs.core.seq(arglist__47597);
return frontend$components$right_sidebar$block_cp__delegate(args__31746__auto__);
});
frontend$components$right_sidebar$block_cp.cljs$core$IFn$_invoke$arity$variadic = frontend$components$right_sidebar$block_cp__delegate;
return frontend$components$right_sidebar$block_cp;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47448 = comp__31745__auto__;
var G__47449 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47448,G__47449) : io.factorhouse.hsx.core.react_memo.call(null,G__47448,G__47449));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"block-cp");

return comp__31745__auto__;
})();
frontend.components.right_sidebar.get_scrollable_container = (function frontend$components$right_sidebar$get_scrollable_container(){
return document.querySelector(".sidebar-item-list");
});
frontend.components.right_sidebar.page_cp = (function (){var render_fn__31744__auto__ = (function frontend$components$right_sidebar$page_cp(repo,page_name){
return frontend.components.page.page_cp(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"page-name","page-name",974981762),page_name,new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),true,new cljs.core.Keyword(null,"scroll-container","scroll-container",-1938238550),frontend.components.right_sidebar.get_scrollable_container(),new cljs.core.Keyword(null,"repo","repo",-1999060679),repo], null));
});
var comp__31745__auto__ = (function() { 
var frontend$components$right_sidebar$page_cp__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47450 = cljs.core.first(args__31746__auto__);
var G__47451 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47450,G__47451) : io.factorhouse.hsx.core.obj_get.call(null,G__47450,G__47451));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"page-cp","page-cp",-1587873174,null),args__31746__auto__),frontend$components$right_sidebar$page_cp,args__31746__auto__,null);
}
};
var frontend$components$right_sidebar$page_cp = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47598__i = 0, G__47598__a = new Array(arguments.length -  0);
while (G__47598__i < G__47598__a.length) {G__47598__a[G__47598__i] = arguments[G__47598__i + 0]; ++G__47598__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47598__a,0,null);
} 
return frontend$components$right_sidebar$page_cp__delegate.call(this,args__31746__auto__);};
frontend$components$right_sidebar$page_cp.cljs$lang$maxFixedArity = 0;
frontend$components$right_sidebar$page_cp.cljs$lang$applyTo = (function (arglist__47599){
var args__31746__auto__ = cljs.core.seq(arglist__47599);
return frontend$components$right_sidebar$page_cp__delegate(args__31746__auto__);
});
frontend$components$right_sidebar$page_cp.cljs$core$IFn$_invoke$arity$variadic = frontend$components$right_sidebar$page_cp__delegate;
return frontend$components$right_sidebar$page_cp;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47452 = comp__31745__auto__;
var G__47453 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47452,G__47453) : io.factorhouse.hsx.core.react_memo.call(null,G__47452,G__47453));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"page-cp");

return comp__31745__auto__;
})();
frontend.components.right_sidebar.shortcut_settings = (function (){var render_fn__31744__auto__ = (function frontend$components$right_sidebar$shortcut_settings(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.contents.flex-col.flex.ml-3","div.contents.flex-col.flex.ml-3",922360118),frontend.components.shortcut_help.shortcut_page(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-title?","show-title?",1855789994),false], null))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$right_sidebar$shortcut_settings__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47454 = cljs.core.first(args__31746__auto__);
var G__47455 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47454,G__47455) : io.factorhouse.hsx.core.obj_get.call(null,G__47454,G__47455));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"shortcut-settings","shortcut-settings",-22818207,null),args__31746__auto__),frontend$components$right_sidebar$shortcut_settings,args__31746__auto__,null);
}
};
var frontend$components$right_sidebar$shortcut_settings = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47600__i = 0, G__47600__a = new Array(arguments.length -  0);
while (G__47600__i < G__47600__a.length) {G__47600__a[G__47600__i] = arguments[G__47600__i + 0]; ++G__47600__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47600__a,0,null);
} 
return frontend$components$right_sidebar$shortcut_settings__delegate.call(this,args__31746__auto__);};
frontend$components$right_sidebar$shortcut_settings.cljs$lang$maxFixedArity = 0;
frontend$components$right_sidebar$shortcut_settings.cljs$lang$applyTo = (function (arglist__47601){
var args__31746__auto__ = cljs.core.seq(arglist__47601);
return frontend$components$right_sidebar$shortcut_settings__delegate(args__31746__auto__);
});
frontend$components$right_sidebar$shortcut_settings.cljs$core$IFn$_invoke$arity$variadic = frontend$components$right_sidebar$shortcut_settings__delegate;
return frontend$components$right_sidebar$shortcut_settings;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47456 = comp__31745__auto__;
var G__47457 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47456,G__47457) : io.factorhouse.hsx.core.react_memo.call(null,G__47456,G__47457));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"shortcut-settings");

return comp__31745__auto__;
})();
frontend.components.right_sidebar.sidebar_block_breadcrumb = (function (){var render_fn__31744__auto__ = (function frontend$components$right_sidebar$sidebar_block_breadcrumb(config,repo,block){
var block_id = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
var breadcrumb_data = frontend.db.hooks.use_resource(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block-breadcrumb","block-breadcrumb",1527541786),block_id,(16)], null));
if(cljs.core.truth_(breadcrumb_data)){
return frontend.components.block.breadcrumb.breadcrumb(config,repo,block_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indent?","indent?",1381429379),false,new cljs.core.Keyword(null,"block","block",664686210),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block,new cljs.core.Keyword("block.temp","breadcrumb","block.temp/breadcrumb",598913897),frontend.components.block.breadcrumb_model.resource_ancestors(breadcrumb_data),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.temp","breadcrumb-ref-titles","block.temp/breadcrumb-ref-titles",-797162198),new cljs.core.Keyword(null,"ref-titles","ref-titles",1814381807).cljs$core$IFn$_invoke$arity$1(breadcrumb_data)], 0))], null));
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$right_sidebar$sidebar_block_breadcrumb__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47458 = cljs.core.first(args__31746__auto__);
var G__47459 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47458,G__47459) : io.factorhouse.hsx.core.obj_get.call(null,G__47458,G__47459));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"sidebar-block-breadcrumb","sidebar-block-breadcrumb",-105886477,null),args__31746__auto__),frontend$components$right_sidebar$sidebar_block_breadcrumb,args__31746__auto__,null);
}
};
var frontend$components$right_sidebar$sidebar_block_breadcrumb = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47602__i = 0, G__47602__a = new Array(arguments.length -  0);
while (G__47602__i < G__47602__a.length) {G__47602__a[G__47602__i] = arguments[G__47602__i + 0]; ++G__47602__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47602__a,0,null);
} 
return frontend$components$right_sidebar$sidebar_block_breadcrumb__delegate.call(this,args__31746__auto__);};
frontend$components$right_sidebar$sidebar_block_breadcrumb.cljs$lang$maxFixedArity = 0;
frontend$components$right_sidebar$sidebar_block_breadcrumb.cljs$lang$applyTo = (function (arglist__47603){
var args__31746__auto__ = cljs.core.seq(arglist__47603);
return frontend$components$right_sidebar$sidebar_block_breadcrumb__delegate(args__31746__auto__);
});
frontend$components$right_sidebar$sidebar_block_breadcrumb.cljs$core$IFn$_invoke$arity$variadic = frontend$components$right_sidebar$sidebar_block_breadcrumb__delegate;
return frontend$components$right_sidebar$sidebar_block_breadcrumb;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47460 = comp__31745__auto__;
var G__47461 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47460,G__47461) : io.factorhouse.hsx.core.react_memo.call(null,G__47460,G__47461));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"sidebar-block-breadcrumb");

return comp__31745__auto__;
})();
frontend.components.right_sidebar.block_with_breadcrumb = (function frontend$components$right_sidebar$block_with_breadcrumb(repo,block,idx,sidebar_key,ref_QMARK_){
if(cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex.items-center",".flex.items-center",-697647768),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(ref_QMARK_)?"ml-2":null)], null),frontend.components.right_sidebar.sidebar_block_breadcrumb(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"block-parent",new cljs.core.Keyword(null,"block?","block?",1102479923),true,new cljs.core.Keyword(null,"sidebar-key","sidebar-key",2034878565),sidebar_key], null),repo,block)], null),frontend.components.right_sidebar.block_cp(repo,idx,block)], null);
} else {
return null;
}
});
frontend.components.right_sidebar.search_title = (function (){var render_fn__31744__auto__ = (function frontend$components$right_sidebar$search_title(_STAR_input){
var input = cljs.core.first(logseq.shui.hooks.use_atom(_STAR_input));
var input_SINGLEQUOTE_ = ((clojure.string.blank_QMARK_(input))?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("search","blank-input","search/blank-input",2082494287)], 0)):input);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.overflow-hidden.text-ellipsis","span.overflow-hidden.text-ellipsis",1998457561),input_SINGLEQUOTE_], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$right_sidebar$search_title__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47462 = cljs.core.first(args__31746__auto__);
var G__47463 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47462,G__47463) : io.factorhouse.hsx.core.obj_get.call(null,G__47462,G__47463));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"search-title","search-title",456666540,null),args__31746__auto__),frontend$components$right_sidebar$search_title,args__31746__auto__,null);
}
};
var frontend$components$right_sidebar$search_title = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47604__i = 0, G__47604__a = new Array(arguments.length -  0);
while (G__47604__i < G__47604__a.length) {G__47604__a[G__47604__i] = arguments[G__47604__i + 0]; ++G__47604__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47604__a,0,null);
} 
return frontend$components$right_sidebar$search_title__delegate.call(this,args__31746__auto__);};
frontend$components$right_sidebar$search_title.cljs$lang$maxFixedArity = 0;
frontend$components$right_sidebar$search_title.cljs$lang$applyTo = (function (arglist__47605){
var args__31746__auto__ = cljs.core.seq(arglist__47605);
return frontend$components$right_sidebar$search_title__delegate(args__31746__auto__);
});
frontend$components$right_sidebar$search_title.cljs$core$IFn$_invoke$arity$variadic = frontend$components$right_sidebar$search_title__delegate;
return frontend$components$right_sidebar$search_title;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47464 = comp__31745__auto__;
var G__47465 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47464,G__47465) : io.factorhouse.hsx.core.react_memo.call(null,G__47464,G__47465));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"search-title");

return comp__31745__auto__;
})();
frontend.components.right_sidebar.sidebar_search = (function (){var render_fn__31744__auto__ = (function frontend$components$right_sidebar$sidebar_search(repo,block_type,init_key,input,_STAR_input){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.cmdk.core.cmdk_block,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-input","initial-input",1864686534),input,new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),true,new cljs.core.Keyword(null,"on-input-change","on-input-change",-1203383147),(function (new_value){
return cljs.core.reset_BANG_(_STAR_input,new_value);
}),new cljs.core.Keyword(null,"on-input-blur","on-input-blur",938716471),(function (new_value){
return frontend.state.sidebar_replace_block_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,input,block_type], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,new_value,block_type], null));
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(init_key))], null));
});
var comp__31745__auto__ = (function() { 
var frontend$components$right_sidebar$sidebar_search__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47466 = cljs.core.first(args__31746__auto__);
var G__47467 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47466,G__47467) : io.factorhouse.hsx.core.obj_get.call(null,G__47466,G__47467));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"sidebar-search","sidebar-search",-1163680868,null),args__31746__auto__),frontend$components$right_sidebar$sidebar_search,args__31746__auto__,null);
}
};
var frontend$components$right_sidebar$sidebar_search = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47606__i = 0, G__47606__a = new Array(arguments.length -  0);
while (G__47606__i < G__47606__a.length) {G__47606__a[G__47606__i] = arguments[G__47606__i + 0]; ++G__47606__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47606__a,0,null);
} 
return frontend$components$right_sidebar$sidebar_search__delegate.call(this,args__31746__auto__);};
frontend$components$right_sidebar$sidebar_search.cljs$lang$maxFixedArity = 0;
frontend$components$right_sidebar$sidebar_search.cljs$lang$applyTo = (function (arglist__47607){
var args__31746__auto__ = cljs.core.seq(arglist__47607);
return frontend$components$right_sidebar$sidebar_search__delegate(args__31746__auto__);
});
frontend$components$right_sidebar$sidebar_search.cljs$core$IFn$_invoke$arity$variadic = frontend$components$right_sidebar$sidebar_search__delegate;
return frontend$components$right_sidebar$sidebar_search;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47468 = comp__31745__auto__;
var G__47469 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47468,G__47469) : io.factorhouse.hsx.core.react_memo.call(null,G__47468,G__47469));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"sidebar-search");

return comp__31745__auto__;
})();
frontend.components.right_sidebar.page_title = (function (){var render_fn__31744__auto__ = (function frontend$components$right_sidebar$page_title(page_uuid){
var temp__5825__auto__ = frontend.db.hooks.use_block(page_uuid);
if(cljs.core.truth_(temp__5825__auto__)){
var page = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex.items-center.page-title.gap-1",".flex.items-center.page-title.gap-1",601821301),frontend.components.icon.get_node_icon_cp(page,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-md"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.overflow-hidden.text-ellipsis","span.overflow-hidden.text-ellipsis",1998457561),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page)], null)], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$right_sidebar$page_title__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47470 = cljs.core.first(args__31746__auto__);
var G__47471 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47470,G__47471) : io.factorhouse.hsx.core.obj_get.call(null,G__47470,G__47471));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"page-title","page-title",724632792,null),args__31746__auto__),frontend$components$right_sidebar$page_title,args__31746__auto__,null);
}
};
var frontend$components$right_sidebar$page_title = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47608__i = 0, G__47608__a = new Array(arguments.length -  0);
while (G__47608__i < G__47608__a.length) {G__47608__a[G__47608__i] = arguments[G__47608__i + 0]; ++G__47608__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47608__a,0,null);
} 
return frontend$components$right_sidebar$page_title__delegate.call(this,args__31746__auto__);};
frontend$components$right_sidebar$page_title.cljs$lang$maxFixedArity = 0;
frontend$components$right_sidebar$page_title.cljs$lang$applyTo = (function (arglist__47609){
var args__31746__auto__ = cljs.core.seq(arglist__47609);
return frontend$components$right_sidebar$page_title__delegate(args__31746__auto__);
});
frontend$components$right_sidebar$page_title.cljs$core$IFn$_invoke$arity$variadic = frontend$components$right_sidebar$page_title__delegate;
return frontend$components$right_sidebar$page_title;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47472 = comp__31745__auto__;
var G__47473 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47472,G__47473) : io.factorhouse.hsx.core.react_memo.call(null,G__47472,G__47473));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"page-title");

return comp__31745__auto__;
})();
frontend.components.right_sidebar.build_sidebar_item = (function frontend$components$right_sidebar$build_sidebar_item(repo,idx,db_id,block_type,_STAR_db_id,init_key,entity,contents_page){
var page_QMARK_ = frontend.util.entity.page_QMARK_(entity);
var item_meta = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drag-name","drag-name",1281161199),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(entity)], null);
var block_render = (function (){
if(cljs.core.truth_(entity)){
if(cljs.core.truth_(page_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.right_sidebar.page_title(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(entity)),frontend.components.right_sidebar.page_cp(repo,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(entity)))),item_meta], null);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frontend.components.right_sidebar.block_with_breadcrumb(repo,entity,idx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,db_id,block_type], null),false),item_meta);
}
} else {
return null;
}
});
var G__47474 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(block_type);
var G__47474__$1 = (((G__47474 instanceof cljs.core.Keyword))?G__47474.fqn:null);
switch (G__47474__$1) {
case "contents":
var temp__5825__auto__ = contents_page;
if(cljs.core.truth_(temp__5825__auto__)){
var page = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex.items-center",".flex.items-center",-697647768),frontend.ui.icon("list-details",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-md mr-2"], null)),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","contents","page/contents",-1566345974)], 0))], null),frontend.components.right_sidebar.page_cp(repo,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drag-name","drag-name",1281161199),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page)], null)], null);
} else {
return null;
}

break;
case "help":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex.items-center",".flex.items-center",-697647768),frontend.ui.icon("help",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-md mr-2"], null)),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nav","help","nav/help",-439328953)], 0))], null),frontend.components.onboarding.help()], null);

break;
case "page-graph":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex.items-center",".flex.items-center",-697647768),frontend.ui.icon("hierarchy",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-md mr-2"], null)),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph.page","title","graph.page/title",-1431710306)], 0))], null),frontend.components.page.page_graph()], null);

break;
case "block-ref":
var block = entity;
if(cljs.core.truth_(block)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("reference","blocks","reference/blocks",347657444)], 0)),frontend.components.right_sidebar.block_with_breadcrumb(repo,block,idx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,db_id,block_type], null),true),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drag-name","drag-name",1281161199),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block)], null)], null);
} else {
return null;
}

break;
case "block":
return block_render();

break;
case "page":
return block_render();

break;
case "plugin":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex.items-center.page-title",".flex.items-center.page-title",345752768),frontend.ui.icon("puzzle",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-md mr-2"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),db_id], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(db_id))], null)], null),frontend.components.plugins.renderer_resolver(db_id)], null);

break;
case "search":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex.items-center.page-title",".flex.items-center.page-title",345752768),frontend.ui.icon("search",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-md mr-2"], null)),frontend.components.right_sidebar.search_title(_STAR_db_id)], null),frontend.components.right_sidebar.sidebar_search(repo,block_type,init_key,db_id,_STAR_db_id)], null);

break;
case "shortcut-settings":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex.items-center",".flex.items-center",-697647768),frontend.ui.icon("command",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-md mr-2"], null)),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help.shortcuts","label","help.shortcuts/label",827224244)], 0))], null),frontend.components.right_sidebar.shortcut_settings()], null);

break;
case "rtc":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex.items-center",".flex.items-center",-697647768),frontend.ui.icon("cloud",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-md mr-2"], null)),"(Dev) RTC"], null),frontend.db.rtc.debug_ui.rtc_debug_ui()], null);

break;
case "undo-redo":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex.items-center",".flex.items-center",-697647768),frontend.ui.icon("rotate-clockwise",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-md mr-2"], null)),"(Dev) Undo/Redo"], null),frontend.undo_redo.debug_ui.undo_redo_debug_ui()], null);

break;
case "profiler":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex.items-center",".flex.items-center",-697647768),frontend.ui.icon("cloud",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-md mr-2"], null)),"(Dev) Profiler"], null),frontend.components.profiler.profiler()], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null)], null);

}
});
frontend.components.right_sidebar._LT_build_sidebar_item = (function frontend$components$right_sidebar$_LT_build_sidebar_item(repo,idx,db_id,block_type,_STAR_db_id,init_key){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(((((cljs.core.integer_QMARK_(db_id)) || (cljs.core.uuid_QMARK_(db_id))))?frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,db_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false,new cljs.core.Keyword(null,"block-metadata?","block-metadata?",-1892649781),true], null)], 0)):null)),(function (entity){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contents","contents",-1567174023),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(block_type)))?frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,"Contents",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0)):null)),(function (contents_page){
return promesa.protocols._promise(frontend.components.right_sidebar.build_sidebar_item(repo,idx,db_id,block_type,_STAR_db_id,init_key,entity,contents_page));
}));
}));
})),(function (error){
return console.error(error);
}));
});
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.right_sidebar !== 'undefined') && (typeof frontend.components.right_sidebar._STAR_drag_to !== 'undefined')){
} else {
frontend.components.right_sidebar._STAR_drag_to = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.right_sidebar !== 'undefined') && (typeof frontend.components.right_sidebar._STAR_drag_from !== 'undefined')){
} else {
frontend.components.right_sidebar._STAR_drag_from = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.components.right_sidebar.dev_sidebar_items = (function frontend$components$right_sidebar$dev_sidebar_items(developer_mode_QMARK_){
var G__47475 = cljs.core.PersistentVector.EMPTY;
var G__47475__$1 = (cljs.core.truth_((function (){var and__5140__auto__ = developer_mode_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (!(frontend.config.publishing_QMARK_));
} else {
return and__5140__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__47475,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db-id","db-id",747248515),"rtc",new cljs.core.Keyword(null,"block-type","block-type",1348400470),new cljs.core.Keyword(null,"rtc","rtc",-229444279),new cljs.core.Keyword(null,"label","label",1718410804),"(Dev) RTC"], null)):G__47475);
var G__47475__$2 = (cljs.core.truth_(developer_mode_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__47475__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db-id","db-id",747248515),"undo-redo",new cljs.core.Keyword(null,"block-type","block-type",1348400470),new cljs.core.Keyword(null,"undo-redo","undo-redo",568614235),new cljs.core.Keyword(null,"label","label",1718410804),"(Dev) Undo/Redo"], null)):G__47475__$1);
if(cljs.core.truth_(developer_mode_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__47475__$2,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db-id","db-id",747248515),"profiler",new cljs.core.Keyword(null,"block-type","block-type",1348400470),new cljs.core.Keyword(null,"profiler","profiler",-1649150682),new cljs.core.Keyword(null,"label","label",1718410804),"(Dev) Profiler"], null));
} else {
return G__47475__$2;
}
});
frontend.components.right_sidebar.actions_menu_content = (function (){var render_fn__31744__auto__ = (function frontend$components$right_sidebar$actions_menu_content(db_id,idx,type,collapsed_QMARK_,block_count){
var multi_items_QMARK_ = (block_count > (1));
var menu_item = logseq.shui.ui.dropdown_menu_item;
var vec__47476 = logseq.shui.hooks.use_state(null);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47476,(0),null);
var set_block_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47476,(1),null);
var page_QMARK_ = (function (){var or__5142__auto__ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),null,new cljs.core.Keyword(null,"contents","contents",-1567174023),null], null), null),type);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return frontend.util.entity.page_QMARK_(block);
}
})();
logseq.shui.hooks.use_effect_BANG_((function (){
promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.right_sidebar_util._LT_sidebar_action_block(frontend.state.get_current_repo(),db_id,type)),(function (block__$1){
return promesa.protocols._promise((set_block_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_block_BANG_.cljs$core$IFn$_invoke$arity$1(block__$1) : set_block_BANG_.call(null,block__$1)));
}));
}));

return null;
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_id,type], null));

return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(function (){var G__47479 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.sidebar_remove_block_BANG_(idx);
})], null);
var G__47480 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sidebar.right","close","sidebar.right/close",-2037129704)], 0));
return (menu_item.cljs$core$IFn$_invoke$arity$2 ? menu_item.cljs$core$IFn$_invoke$arity$2(G__47479,G__47480) : menu_item.call(null,G__47479,G__47480));
})(),((multi_items_QMARK_)?(function (){var G__47481 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.sidebar_remove_rest_BANG_(db_id);
})], null);
var G__47482 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sidebar.right","close-others","sidebar.right/close-others",-2043022820)], 0));
return (menu_item.cljs$core$IFn$_invoke$arity$2 ? menu_item.cljs$core$IFn$_invoke$arity$2(G__47481,G__47482) : menu_item.call(null,G__47481,G__47482));
})():null),((multi_items_QMARK_)?(function (){var G__47483 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.state.clear_sidebar_blocks_BANG_();

return frontend.state.hide_right_sidebar_BANG_();
})], null);
var G__47484 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sidebar.right","close-all","sidebar.right/close-all",1972537663)], 0));
return (menu_item.cljs$core$IFn$_invoke$arity$2 ? menu_item.cljs$core$IFn$_invoke$arity$2(G__47483,G__47484) : menu_item.call(null,G__47483,G__47484));
})():null),((((cljs.core.not(collapsed_QMARK_)) && (multi_items_QMARK_)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.menu-separator","hr.menu-separator",-527266614)], null):null),(cljs.core.truth_(collapsed_QMARK_)?null:(function (){var G__47485 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.sidebar_block_toggle_collapse_BANG_(db_id);
})], null);
var G__47486 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sidebar.right","collapse","sidebar.right/collapse",1628396206)], 0));
return (menu_item.cljs$core$IFn$_invoke$arity$2 ? menu_item.cljs$core$IFn$_invoke$arity$2(G__47485,G__47486) : menu_item.call(null,G__47485,G__47486));
})()),((multi_items_QMARK_)?(function (){var G__47487 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.sidebar_block_collapse_rest_BANG_(db_id);
})], null);
var G__47488 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sidebar.right","collapse-others","sidebar.right/collapse-others",1492555691)], 0));
return (menu_item.cljs$core$IFn$_invoke$arity$2 ? menu_item.cljs$core$IFn$_invoke$arity$2(G__47487,G__47488) : menu_item.call(null,G__47487,G__47488));
})():null),((multi_items_QMARK_)?(function (){var G__47489 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.sidebar_block_set_collapsed_all_BANG_(true);
})], null);
var G__47490 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sidebar.right","collapse-all","sidebar.right/collapse-all",1646213171)], 0));
return (menu_item.cljs$core$IFn$_invoke$arity$2 ? menu_item.cljs$core$IFn$_invoke$arity$2(G__47489,G__47490) : menu_item.call(null,G__47489,G__47490));
})():null),(cljs.core.truth_((function (){var and__5140__auto__ = collapsed_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return multi_items_QMARK_;
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.menu-separator","hr.menu-separator",-527266614)], null):null),(cljs.core.truth_(collapsed_QMARK_)?(function (){var G__47491 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.sidebar_block_toggle_collapse_BANG_(db_id);
})], null);
var G__47492 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sidebar.right","expand","sidebar.right/expand",-2140108469)], 0));
return (menu_item.cljs$core$IFn$_invoke$arity$2 ? menu_item.cljs$core$IFn$_invoke$arity$2(G__47491,G__47492) : menu_item.call(null,G__47491,G__47492));
})():null),((multi_items_QMARK_)?(function (){var G__47493 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.sidebar_block_set_collapsed_all_BANG_(false);
})], null);
var G__47494 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sidebar.right","expand-all","sidebar.right/expand-all",-1900903699)], 0));
return (menu_item.cljs$core$IFn$_invoke$arity$2 ? menu_item.cljs$core$IFn$_invoke$arity$2(G__47493,G__47494) : menu_item.call(null,G__47493,G__47494));
})():null),(cljs.core.truth_(page_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.menu-separator","hr.menu-separator",-527266614)], null):null),(cljs.core.truth_(page_QMARK_)?(function (){var G__47495 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.right_sidebar_util._LT_sidebar_action_block(frontend.state.get_current_repo(),db_id,type)),(function (target){
return promesa.protocols._promise(frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(target)));
}));
}));
})], null);
var G__47496 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sidebar.right","open-as-page","sidebar.right/open-as-page",642623411)], 0));
return (menu_item.cljs$core$IFn$_invoke$arity$2 ? menu_item.cljs$core$IFn$_invoke$arity$2(G__47495,G__47496) : menu_item.call(null,G__47495,G__47496));
})():null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$right_sidebar$actions_menu_content__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47497 = cljs.core.first(args__31746__auto__);
var G__47498 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47497,G__47498) : io.factorhouse.hsx.core.obj_get.call(null,G__47497,G__47498));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"actions-menu-content","actions-menu-content",2114655309,null),args__31746__auto__),frontend$components$right_sidebar$actions_menu_content,args__31746__auto__,null);
}
};
var frontend$components$right_sidebar$actions_menu_content = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47611__i = 0, G__47611__a = new Array(arguments.length -  0);
while (G__47611__i < G__47611__a.length) {G__47611__a[G__47611__i] = arguments[G__47611__i + 0]; ++G__47611__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47611__a,0,null);
} 
return frontend$components$right_sidebar$actions_menu_content__delegate.call(this,args__31746__auto__);};
frontend$components$right_sidebar$actions_menu_content.cljs$lang$maxFixedArity = 0;
frontend$components$right_sidebar$actions_menu_content.cljs$lang$applyTo = (function (arglist__47612){
var args__31746__auto__ = cljs.core.seq(arglist__47612);
return frontend$components$right_sidebar$actions_menu_content__delegate(args__31746__auto__);
});
frontend$components$right_sidebar$actions_menu_content.cljs$core$IFn$_invoke$arity$variadic = frontend$components$right_sidebar$actions_menu_content__delegate;
return frontend$components$right_sidebar$actions_menu_content;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47499 = comp__31745__auto__;
var G__47500 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47499,G__47500) : io.factorhouse.hsx.core.react_memo.call(null,G__47499,G__47500));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"actions-menu-content");

return comp__31745__auto__;
})();
frontend.components.right_sidebar.drop_indicator = (function (){var render_fn__31744__auto__ = (function frontend$components$right_sidebar$drop_indicator(idx,drag_to){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".sidebar-drop-indicator",".sidebar-drop-indicator",-1864246719),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),(function (){
if(cljs.core.truth_(drag_to)){
return cljs.core.reset_BANG_(frontend.components.right_sidebar._STAR_drag_to,idx);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),frontend.util.stop,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,drag_to))?"drag-over":null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$right_sidebar$drop_indicator__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47501 = cljs.core.first(args__31746__auto__);
var G__47502 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47501,G__47502) : io.factorhouse.hsx.core.obj_get.call(null,G__47501,G__47502));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"drop-indicator","drop-indicator",1966971975,null),args__31746__auto__),frontend$components$right_sidebar$drop_indicator,args__31746__auto__,null);
}
};
var frontend$components$right_sidebar$drop_indicator = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47613__i = 0, G__47613__a = new Array(arguments.length -  0);
while (G__47613__i < G__47613__a.length) {G__47613__a[G__47613__i] = arguments[G__47613__i + 0]; ++G__47613__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47613__a,0,null);
} 
return frontend$components$right_sidebar$drop_indicator__delegate.call(this,args__31746__auto__);};
frontend$components$right_sidebar$drop_indicator.cljs$lang$maxFixedArity = 0;
frontend$components$right_sidebar$drop_indicator.cljs$lang$applyTo = (function (arglist__47614){
var args__31746__auto__ = cljs.core.seq(arglist__47614);
return frontend$components$right_sidebar$drop_indicator__delegate(args__31746__auto__);
});
frontend$components$right_sidebar$drop_indicator.cljs$core$IFn$_invoke$arity$variadic = frontend$components$right_sidebar$drop_indicator__delegate;
return frontend$components$right_sidebar$drop_indicator;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47503 = comp__31745__auto__;
var G__47504 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47503,G__47504) : io.factorhouse.hsx.core.react_memo.call(null,G__47503,G__47504));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"drop-indicator");

return comp__31745__auto__;
})();
frontend.components.right_sidebar.drop_area = (function (){var render_fn__31744__auto__ = (function frontend$components$right_sidebar$drop_area(idx){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".sidebar-item-drop-area",".sidebar-item-drop-area",-599889715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),frontend.util.stop], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".sidebar-item-drop-area-overlay.top",".sidebar-item-drop-area-overlay.top",1142400713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),(function (){
return cljs.core.reset_BANG_(frontend.components.right_sidebar._STAR_drag_to,(idx - (1)));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".sidebar-item-drop-area-overlay.bottom",".sidebar-item-drop-area-overlay.bottom",-848444673),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),(function (){
return cljs.core.reset_BANG_(frontend.components.right_sidebar._STAR_drag_to,idx);
})], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$right_sidebar$drop_area__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47505 = cljs.core.first(args__31746__auto__);
var G__47506 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47505,G__47506) : io.factorhouse.hsx.core.obj_get.call(null,G__47505,G__47506));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"drop-area","drop-area",-181666884,null),args__31746__auto__),frontend$components$right_sidebar$drop_area,args__31746__auto__,null);
}
};
var frontend$components$right_sidebar$drop_area = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47615__i = 0, G__47615__a = new Array(arguments.length -  0);
while (G__47615__i < G__47615__a.length) {G__47615__a[G__47615__i] = arguments[G__47615__i + 0]; ++G__47615__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47615__a,0,null);
} 
return frontend$components$right_sidebar$drop_area__delegate.call(this,args__31746__auto__);};
frontend$components$right_sidebar$drop_area.cljs$lang$maxFixedArity = 0;
frontend$components$right_sidebar$drop_area.cljs$lang$applyTo = (function (arglist__47616){
var args__31746__auto__ = cljs.core.seq(arglist__47616);
return frontend$components$right_sidebar$drop_area__delegate(args__31746__auto__);
});
frontend$components$right_sidebar$drop_area.cljs$core$IFn$_invoke$arity$variadic = frontend$components$right_sidebar$drop_area__delegate;
return frontend$components$right_sidebar$drop_area;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47507 = comp__31745__auto__;
var G__47508 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47507,G__47508) : io.factorhouse.hsx.core.react_memo.call(null,G__47507,G__47508));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"drop-area");

return comp__31745__auto__;
})();
frontend.components.right_sidebar.inner_component_inner = (function (){var render_fn__31744__auto__ = (function frontend$components$right_sidebar$inner_component_inner(component,_should_update_QMARK_){
return component;
});
var comp__31745__auto__ = (function() { 
var frontend$components$right_sidebar$inner_component_inner__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47509 = cljs.core.first(args__31746__auto__);
var G__47510 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47509,G__47510) : io.factorhouse.hsx.core.obj_get.call(null,G__47509,G__47510));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"inner-component-inner","inner-component-inner",756272895,null),args__31746__auto__),frontend$components$right_sidebar$inner_component_inner,args__31746__auto__,null);
}
};
var frontend$components$right_sidebar$inner_component_inner = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47617__i = 0, G__47617__a = new Array(arguments.length -  0);
while (G__47617__i < G__47617__a.length) {G__47617__a[G__47617__i] = arguments[G__47617__i + 0]; ++G__47617__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47617__a,0,null);
} 
return frontend$components$right_sidebar$inner_component_inner__delegate.call(this,args__31746__auto__);};
frontend$components$right_sidebar$inner_component_inner.cljs$lang$maxFixedArity = 0;
frontend$components$right_sidebar$inner_component_inner.cljs$lang$applyTo = (function (arglist__47618){
var args__31746__auto__ = cljs.core.seq(arglist__47618);
return frontend$components$right_sidebar$inner_component_inner__delegate(args__31746__auto__);
});
frontend$components$right_sidebar$inner_component_inner.cljs$core$IFn$_invoke$arity$variadic = frontend$components$right_sidebar$inner_component_inner__delegate;
return frontend$components$right_sidebar$inner_component_inner;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47511 = comp__31745__auto__;
var G__47512 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47511,G__47512) : io.factorhouse.hsx.core.react_memo.call(null,G__47511,G__47512));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"inner-component-inner");

return comp__31745__auto__;
})();
frontend.components.right_sidebar.inner_component = (function (){var memo_class = module$node_modules$react$index.memo((function (props){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(frontend.components.right_sidebar.inner_component_inner,props.args);
}),(function (_prev_props,next_props){
return cljs.core.not(cljs.core.last(next_props.args));
}));
return (function() { 
var G__47619__delegate = function (args){
return module$node_modules$react$index.createElement(memo_class,({"args": cljs.core.vec(args)}));
};
var G__47619 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47620__i = 0, G__47620__a = new Array(arguments.length -  0);
while (G__47620__i < G__47620__a.length) {G__47620__a[G__47620__i] = arguments[G__47620__i + 0]; ++G__47620__i;}
  args = new cljs.core.IndexedSeq(G__47620__a,0,null);
} 
return G__47619__delegate.call(this,args);};
G__47619.cljs$lang$maxFixedArity = 0;
G__47619.cljs$lang$applyTo = (function (arglist__47621){
var args = cljs.core.seq(arglist__47621);
return G__47619__delegate(args);
});
G__47619.cljs$core$IFn$_invoke$arity$variadic = G__47619__delegate;
return G__47619;
})()
;
})();
frontend.components.right_sidebar.sidebar_item_inner = (function (){var render_fn__31744__auto__ = (function frontend$components$right_sidebar$sidebar_item_inner(db_id,p__47514){
var map__47515 = p__47514;
var map__47515__$1 = cljs.core.__destructure_map(map__47515);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47515__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var drag_from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47515__$1,new cljs.core.Keyword(null,"drag-from","drag-from",2105951417));
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47515__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679));
var collapsed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47515__$1,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674));
var block_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47515__$1,new cljs.core.Keyword(null,"block-count","block-count",237453570));
var _STAR_db_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47515__$1,new cljs.core.Keyword(null,"*db-id","*db-id",2087619142));
var drag_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47515__$1,new cljs.core.Keyword(null,"drag-to","drag-to",1628899148));
var init_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47515__$1,new cljs.core.Keyword(null,"init-key","init-key",496347888));
var block_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47515__$1,new cljs.core.Keyword(null,"block-type","block-type",1348400470));
var vec__47516 = logseq.shui.hooks.use_state(null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47516,(0),null);
var set_item_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47516,(1),null);
logseq.shui.hooks.use_effect_BANG_((function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.right_sidebar._LT_build_sidebar_item(repo,idx,db_id,block_type,_STAR_db_id,init_key)),(function (item__$1){
return promesa.protocols._promise((set_item_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_item_BANG_.cljs$core$IFn$_invoke$arity$1(item__$1) : set_item_BANG_.call(null,item__$1)));
}));
}));
}),cljs.core.PersistentVector.EMPTY);

if(cljs.core.truth_(item)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(((idx === (0)))?frontend.components.right_sidebar.drop_indicator((idx - (1)),drag_to):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.sidebar-item.content.color-level.rounded-md.shadow-lg","div.flex.sidebar-item.content.color-level.rounded-md.shadow-lg",-2111217494),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"item-type-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(block_type))),(cljs.core.truth_(collapsed_QMARK_)?"collapsed":null)], null)], null),(function (){var vec__47519 = item;
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47519,(0),null);
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47519,(1),null);
var map__47522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47519,(2),null);
var map__47522__$1 = cljs.core.__destructure_map(map__47522);
var drag_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47522__$1,new cljs.core.Keyword(null,"drag-name","drag-name",1281161199));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.w-full.relative","div.flex.flex-col.w-full.relative",-1948653117),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex.flex-row.justify-between.sidebar-item-header.color-level.rounded-t-md",".flex.flex-row.justify-between.sidebar-item-header.color-level.rounded-t-md",176393748),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(collapsed_QMARK_)?"rounded-b-md":null),new cljs.core.Keyword(null,"draggable","draggable",1676206163),true,new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),(function (e){
frontend.util.stop(e);

var G__47523 = e;
var G__47524 = frontend.components.right_sidebar.actions_menu_content(db_id,idx,block_type,collapsed_QMARK_,block_count);
var G__47525 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-dropdown?","as-dropdown?",-37553558),true,new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
})], null)], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__47523,G__47524,G__47525) : logseq.shui.ui.popup_show_BANG_.call(null,G__47523,G__47524,G__47525));
}),new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),(function (event){
frontend.handler.editor.block__GT_data_transfer_BANG_(drag_name,event,true);

return cljs.core.reset_BANG_(frontend.components.right_sidebar._STAR_drag_from,idx);
}),new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671),(function (_event){
if(cljs.core.truth_(drag_to)){
frontend.state.sidebar_move_block_BANG_(idx,drag_to);
} else {
}

cljs.core.reset_BANG_(frontend.components.right_sidebar._STAR_drag_to,null);

return cljs.core.reset_BANG_(frontend.components.right_sidebar._STAR_drag_from,null);
}),new cljs.core.Keyword(null,"on-pointer-up","on-pointer-up",385194000),(function (event){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.nativeEvent.which,(2))){
return frontend.state.sidebar_remove_block_BANG_(idx);
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.flex.flex-row.px-2.items-center.w-full.overflow-hidden","button.flex.flex-row.px-2.items-center.w-full.overflow-hidden",-1524293561),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"aria-expanded","aria-expanded",-1360942393),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.not(collapsed_QMARK_))),new cljs.core.Keyword(null,"id","id",-1388402092),(""+"sidebar-panel-header-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),new cljs.core.Keyword(null,"aria-controls","aria-controls",-1872379154),(""+"sidebar-panel-content-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
frontend.util.stop(event);

return frontend.state.sidebar_block_toggle_collapse_BANG_(db_id);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-50.hover:opacity-100.flex.items-center.pr-1","span.opacity-50.hover:opacity-100.flex.items-center.pr-1",42743927),frontend.ui.rotating_arrow(collapsed_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ml-1.font-medium.text-sm.overflow-hidden.whitespace-nowrap","div.ml-1.font-medium.text-sm.overflow-hidden.whitespace-nowrap",40315473),title], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".item-actions.flex.items-center",".item-actions.flex.items-center",-1346421487),frontend.ui.tooltip((function (){var G__47526 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-2 py-2 h-8 w-8 text-muted-foreground",new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"data-testid","data-testid",102116723),"sidebar-item-more",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__47513_SHARP_){
var G__47528 = p1__47513_SHARP_.target;
var G__47529 = frontend.components.right_sidebar.actions_menu_content(db_id,idx,block_type,collapsed_QMARK_,block_count);
var G__47530 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-dropdown?","as-dropdown?",-37553558),true,new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
})], null)], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__47528,G__47529,G__47530) : logseq.shui.ui.popup_show_BANG_.call(null,G__47528,G__47529,G__47530));
})], null);
var G__47527 = frontend.ui.icon("dots");
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__47526,G__47527) : logseq.shui.ui.button.call(null,G__47526,G__47527));
})(),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sidebar.right","more","sidebar.right/more",1830725694)], 0))),frontend.ui.tooltip((function (){var G__47531 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"class","class",-2030961996),"px-2 py-2 h-8 w-8 text-muted-foreground",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.sidebar_remove_block_BANG_(idx);
})], null);
var G__47532 = frontend.ui.icon("x");
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__47531,G__47532) : logseq.shui.ui.button.call(null,G__47531,G__47532));
})(),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sidebar.right","close","sidebar.right/close",-2037129704)], 0)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"role","role",-736691072),"region",new cljs.core.Keyword(null,"id","id",-1388402092),(""+"sidebar-panel-content-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),(""+"sidebar-panel-header-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),collapsed_QMARK_,new cljs.core.Keyword(null,"initial","initial",1854648214),cljs.core.not(collapsed_QMARK_),new cljs.core.Keyword(null,"sidebar-panel-content","sidebar-panel-content",-777475157),true,new cljs.core.Keyword(null,"px-2","px-2",-2089219718),(!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"search","search",1564939822),null,new cljs.core.Keyword(null,"shortcut-settings","shortcut-settings",-1663349734),null], null), null),block_type)))], null)], null))], null),frontend.components.right_sidebar.inner_component(component,cljs.core.not(drag_from))], null),(cljs.core.truth_(drag_from)?frontend.components.right_sidebar.drop_area(idx):null)], null);
})()], null),frontend.components.right_sidebar.drop_indicator(idx,drag_to)], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$right_sidebar$sidebar_item_inner__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47533 = cljs.core.first(args__31746__auto__);
var G__47534 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47533,G__47534) : io.factorhouse.hsx.core.obj_get.call(null,G__47533,G__47534));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"sidebar-item-inner","sidebar-item-inner",1406261569,null),args__31746__auto__),frontend$components$right_sidebar$sidebar_item_inner,args__31746__auto__,null);
}
};
var frontend$components$right_sidebar$sidebar_item_inner = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47622__i = 0, G__47622__a = new Array(arguments.length -  0);
while (G__47622__i < G__47622__a.length) {G__47622__a[G__47622__i] = arguments[G__47622__i + 0]; ++G__47622__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47622__a,0,null);
} 
return frontend$components$right_sidebar$sidebar_item_inner__delegate.call(this,args__31746__auto__);};
frontend$components$right_sidebar$sidebar_item_inner.cljs$lang$maxFixedArity = 0;
frontend$components$right_sidebar$sidebar_item_inner.cljs$lang$applyTo = (function (arglist__47623){
var args__31746__auto__ = cljs.core.seq(arglist__47623);
return frontend$components$right_sidebar$sidebar_item_inner__delegate(args__31746__auto__);
});
frontend$components$right_sidebar$sidebar_item_inner.cljs$core$IFn$_invoke$arity$variadic = frontend$components$right_sidebar$sidebar_item_inner__delegate;
return frontend$components$right_sidebar$sidebar_item_inner;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47535 = comp__31745__auto__;
var G__47536 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47535,G__47536) : io.factorhouse.hsx.core.react_memo.call(null,G__47535,G__47536));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"sidebar-item-inner");

return comp__31745__auto__;
})();
frontend.components.right_sidebar.sidebar_item_component = (function (){var render_fn__31744__auto__ = (function frontend$components$right_sidebar$sidebar_item_component(repo,idx,db_id,block_type,block_count){
var _STAR_db_id = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(db_id);
}),cljs.core.PersistentVector.EMPTY);
var init_key = logseq.shui.hooks.use_memo((function (){
return cljs.core.random_uuid();
}),cljs.core.PersistentVector.EMPTY);
var drag_from = cljs.core.first(logseq.shui.hooks.use_atom(frontend.components.right_sidebar._STAR_drag_from));
var drag_to = cljs.core.first(logseq.shui.hooks.use_atom(frontend.components.right_sidebar._STAR_drag_to));
var collapsed_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","sidebar-collapsed-blocks","ui/sidebar-collapsed-blocks",395046921),db_id], null));
return frontend.components.right_sidebar.sidebar_item_inner(db_id,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"block-count","block-count",237453570),new cljs.core.Keyword(null,"*db-id","*db-id",2087619142),new cljs.core.Keyword(null,"drag-to","drag-to",1628899148),new cljs.core.Keyword(null,"init-key","init-key",496347888),new cljs.core.Keyword(null,"block-type","block-type",1348400470),new cljs.core.Keyword(null,"drag-from","drag-from",2105951417),new cljs.core.Keyword(null,"repo","repo",-1999060679),new cljs.core.Keyword(null,"idx","idx",1053688473),new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674)],[block_count,_STAR_db_id,drag_to,init_key,block_type,drag_from,repo,idx,collapsed_QMARK_]));
});
var comp__31745__auto__ = (function() { 
var frontend$components$right_sidebar$sidebar_item_component__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47537 = cljs.core.first(args__31746__auto__);
var G__47538 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47537,G__47538) : io.factorhouse.hsx.core.obj_get.call(null,G__47537,G__47538));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"sidebar-item-component","sidebar-item-component",348432624,null),args__31746__auto__),frontend$components$right_sidebar$sidebar_item_component,args__31746__auto__,null);
}
};
var frontend$components$right_sidebar$sidebar_item_component = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47624__i = 0, G__47624__a = new Array(arguments.length -  0);
while (G__47624__i < G__47624__a.length) {G__47624__a[G__47624__i] = arguments[G__47624__i + 0]; ++G__47624__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47624__a,0,null);
} 
return frontend$components$right_sidebar$sidebar_item_component__delegate.call(this,args__31746__auto__);};
frontend$components$right_sidebar$sidebar_item_component.cljs$lang$maxFixedArity = 0;
frontend$components$right_sidebar$sidebar_item_component.cljs$lang$applyTo = (function (arglist__47625){
var args__31746__auto__ = cljs.core.seq(arglist__47625);
return frontend$components$right_sidebar$sidebar_item_component__delegate(args__31746__auto__);
});
frontend$components$right_sidebar$sidebar_item_component.cljs$core$IFn$_invoke$arity$variadic = frontend$components$right_sidebar$sidebar_item_component__delegate;
return frontend$components$right_sidebar$sidebar_item_component;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47539 = comp__31745__auto__;
var G__47540 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47539,G__47540) : io.factorhouse.hsx.core.react_memo.call(null,G__47539,G__47540));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"sidebar-item-component");

return comp__31745__auto__;
})();
frontend.components.right_sidebar.sidebar_item = (function (){var memo_class = module$node_modules$react$index.memo((function (props){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(frontend.components.right_sidebar.sidebar_item_component,props.args);
}),(function (prev_props,next_props){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prev_props.args,next_props.args);
}));
return (function() { 
var G__47626__delegate = function (args){
return module$node_modules$react$index.createElement(memo_class,({"args": cljs.core.vec(args)}));
};
var G__47626 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47627__i = 0, G__47627__a = new Array(arguments.length -  0);
while (G__47627__i < G__47627__a.length) {G__47627__a[G__47627__i] = arguments[G__47627__i + 0]; ++G__47627__i;}
  args = new cljs.core.IndexedSeq(G__47627__a,0,null);
} 
return G__47626__delegate.call(this,args);};
G__47626.cljs$lang$maxFixedArity = 0;
G__47626.cljs$lang$applyTo = (function (arglist__47628){
var args = cljs.core.seq(arglist__47628);
return G__47626__delegate(args);
});
G__47626.cljs$core$IFn$_invoke$arity$variadic = G__47626__delegate;
return G__47626;
})()
;
})();
frontend.components.right_sidebar.get_page = (function frontend$components$right_sidebar$get_page(match){
var route_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var page = (function (){var G__47541 = route_name;
var G__47541__$1 = (((G__47541 instanceof cljs.core.Keyword))?G__47541.fqn:null);
switch (G__47541__$1) {
case "page":
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"name","name",1843675177)], null));

break;
case "file":
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168)], null));

break;
default:
return frontend.date.today();

}
})();
if(cljs.core.truth_(page)){
return clojure.string.lower_case(page);
} else {
return null;
}
});
frontend.components.right_sidebar.get_current_page = (function frontend$components$right_sidebar$get_current_page(){
var match = frontend.state.get_state(new cljs.core.Keyword(null,"route-match","route-match",-1450985937));
return frontend.components.right_sidebar.get_page(match);
});
frontend.components.right_sidebar.sidebar_resizer = (function (){var render_fn__31744__auto__ = (function frontend$components$right_sidebar$sidebar_resizer(sidebar_open_QMARK_,sidebar_id,handler_position){
var el_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var min_px_width = (320);
var min_ratio = 0.1;
var max_ratio = 0.7;
var keyboard_step = (5);
var add_resizing_class = (function (){
return document.documentElement.classList.add("is-resizing-buf");
});
var remove_resizing_class = (function (){
document.documentElement.classList.remove("is-resizing-buf");

return cljs.core.reset_BANG_(frontend.handler.ui._STAR_right_sidebar_resized_at,Date.now());
});
var set_width_BANG_ = (function (ratio){
if(cljs.core.truth_(el_ref)){
var value = (ratio * (100));
var width = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+"%");
logseq.shui.hooks.deref(el_ref).setAttribute("aria-valuenow",value);

return frontend.handler.ui.persist_right_sidebar_width_BANG_(width);
} else {
return null;
}
});
logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto___47630 = (function (){var and__5140__auto__ = cljs.core.fn_QMARK_(window.interact);
if(and__5140__auto__){
return logseq.shui.hooks.deref(el_ref);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto___47630)){
var el_47631 = temp__5825__auto___47630;
interact(el_47631).draggable(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"move","move",-2110884309),(function (e){
var width = document.documentElement.clientWidth;
var min_ratio__$1 = cljs.core.max.cljs$core$IFn$_invoke$arity$2(min_ratio,(min_px_width / width));
var sidebar_el = document.getElementById(sidebar_id);
var offset = e.pageX;
var ratio = (offset / width).toFixed((6));
var ratio__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(handler_position,new cljs.core.Keyword(null,"west","west",708776677)))?((1) - ratio):ratio);
var cursor_class = (""+"cursor-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.name(handler_position)))+"-resize");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el_47631.getAttribute("data-expanded"),"true")){
if((ratio__$1 < (min_ratio__$1 / (2)))){
return frontend.state.hide_right_sidebar_BANG_();
} else {
if((ratio__$1 < min_ratio__$1)){
return document.documentElement.classList.add(cursor_class);
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = (ratio__$1 < max_ratio);
if(and__5140__auto__){
return sidebar_el;
} else {
return and__5140__auto__;
}
})())){
if(cljs.core.truth_(sidebar_el)){
return (function (){
return document.documentElement.classList.remove(cursor_class);
})(set_width_BANG_(ratio__$1));
} else {
return null;
}
} else {
return (function (){
return document.documentElement.classList.remove(cursor_class);
});

}
}
}
} else {
if((ratio__$1 > (min_ratio__$1 / (2)))){
return frontend.state.open_right_sidebar_BANG_();
} else {
return null;
}
}
})], null)], null))).styleCursor(false).on("dragstart",add_resizing_class).on("dragend",remove_resizing_class).on("keydown",(function (e){
var temp__5825__auto____$1 = document.getElementById(sidebar_id);
if(cljs.core.truth_(temp__5825__auto____$1)){
var sidebar_el = temp__5825__auto____$1;
var width = document.documentElement.clientWidth;
var min_ratio__$1 = cljs.core.max.cljs$core$IFn$_invoke$arity$2(min_ratio,(min_px_width / width));
var keyboard_step__$1 = (function (){var G__47542 = e.code;
switch (G__47542) {
case "ArrowLeft":
return (- keyboard_step);

break;
case "ArrowRight":
return keyboard_step;

break;
default:
return (0);

}
})();
var offset = (sidebar_el.getBoundingClientRect().x + keyboard_step__$1);
var ratio = (offset / width).toFixed((6));
var ratio__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(handler_position,new cljs.core.Keyword(null,"west","west",708776677)))?((1) - ratio):ratio);
if((((ratio__$1 > min_ratio__$1)) && ((((ratio__$1 < max_ratio)) && ((!((keyboard_step__$1 === (0))))))))){
add_resizing_class();

return set_width_BANG_(ratio__$1);
} else {
return null;
}
} else {
return null;
}
})).on("keyup",remove_resizing_class);
} else {
}

return (function (){
return cljs.core.List.EMPTY;
});
}),cljs.core.PersistentVector.EMPTY);

logseq.shui.hooks.use_effect_BANG_((function (){
return setTimeout((function (){
return cljs.core.reset_BANG_(frontend.handler.ui._STAR_right_sidebar_resized_at,Date.now());
}),(300));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sidebar_open_QMARK_], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".resizer",".resizer",1680442843),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"data-expanded","data-expanded",-1733463200),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"aria-valuemax","aria-valuemax",-1167670164),new cljs.core.Keyword(null,"aria-orientation","aria-orientation",-218196331),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),new cljs.core.Keyword(null,"aria-valuemin","aria-valuemin",138532158),new cljs.core.Keyword(null,"aria-valuenow","aria-valuenow",-773142658)],["separator",sidebar_open_QMARK_,"0",el_ref,(max_ratio * (100)),"vertical",frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sidebar.right","resize-handle","sidebar.right/resize-handle",-1724057043)], 0)),(min_ratio * (100)),(50)])], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$right_sidebar$sidebar_resizer__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47543 = cljs.core.first(args__31746__auto__);
var G__47544 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47543,G__47544) : io.factorhouse.hsx.core.obj_get.call(null,G__47543,G__47544));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"sidebar-resizer","sidebar-resizer",1448918789,null),args__31746__auto__),frontend$components$right_sidebar$sidebar_resizer,args__31746__auto__,null);
}
};
var frontend$components$right_sidebar$sidebar_resizer = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47633__i = 0, G__47633__a = new Array(arguments.length -  0);
while (G__47633__i < G__47633__a.length) {G__47633__a[G__47633__i] = arguments[G__47633__i + 0]; ++G__47633__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47633__a,0,null);
} 
return frontend$components$right_sidebar$sidebar_resizer__delegate.call(this,args__31746__auto__);};
frontend$components$right_sidebar$sidebar_resizer.cljs$lang$maxFixedArity = 0;
frontend$components$right_sidebar$sidebar_resizer.cljs$lang$applyTo = (function (arglist__47634){
var args__31746__auto__ = cljs.core.seq(arglist__47634);
return frontend$components$right_sidebar$sidebar_resizer__delegate(args__31746__auto__);
});
frontend$components$right_sidebar$sidebar_resizer.cljs$core$IFn$_invoke$arity$variadic = frontend$components$right_sidebar$sidebar_resizer__delegate;
return frontend$components$right_sidebar$sidebar_resizer;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47545 = comp__31745__auto__;
var G__47546 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47545,G__47546) : io.factorhouse.hsx.core.react_memo.call(null,G__47545,G__47546));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"sidebar-resizer");

return comp__31745__auto__;
})();
frontend.components.right_sidebar.plugin_renderer_menu_items = (function (){var render_fn__31744__auto__ = (function frontend$components$right_sidebar$plugin_renderer_menu_items(renderers){
var iter__5628__auto__ = (function frontend$components$right_sidebar$plugin_renderer_menu_items_$_iter__47547(s__47548){
return (new cljs.core.LazySeq(null,(function (){
var s__47548__$1 = s__47548;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__47548__$1);
if(temp__5825__auto__){
var s__47548__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47548__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__47548__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__47550 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__47549 = (0);
while(true){
if((i__47549 < size__5627__auto__)){
var r = cljs.core._nth(c__5626__auto__,i__47549);
cljs.core.chunk_append(b__47550,(function (){var G__47551 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__47549,r,c__5626__auto__,size__5627__auto__,b__47550,s__47548__$2,temp__5825__auto__){
return (function (){
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pid","pid",1018387698).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(r)),new cljs.core.Keyword(null,"plugin","plugin",-1688841923));
});})(i__47549,r,c__5626__auto__,size__5627__auto__,b__47550,s__47548__$2,temp__5825__auto__))
], null);
var G__47552 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pid","pid",1018387698).cljs$core$IFn$_invoke$arity$1(r)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pr-1.flex.items-center","span.pr-1.flex.items-center",-1037160668),logseq.shui.ui.tabler_icon("puzzle")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(r)], null)], null);
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__47551,G__47552) : logseq.shui.ui.dropdown_menu_item.call(null,G__47551,G__47552));
})());

var G__47635 = (i__47549 + (1));
i__47549 = G__47635;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47550),frontend$components$right_sidebar$plugin_renderer_menu_items_$_iter__47547(cljs.core.chunk_rest(s__47548__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47550),null);
}
} else {
var r = cljs.core.first(s__47548__$2);
return cljs.core.cons((function (){var G__47553 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (r,s__47548__$2,temp__5825__auto__){
return (function (){
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pid","pid",1018387698).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(r)),new cljs.core.Keyword(null,"plugin","plugin",-1688841923));
});})(r,s__47548__$2,temp__5825__auto__))
], null);
var G__47554 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pid","pid",1018387698).cljs$core$IFn$_invoke$arity$1(r)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pr-1.flex.items-center","span.pr-1.flex.items-center",-1037160668),logseq.shui.ui.tabler_icon("puzzle")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(r)], null)], null);
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__47553,G__47554) : logseq.shui.ui.dropdown_menu_item.call(null,G__47553,G__47554));
})(),frontend$components$right_sidebar$plugin_renderer_menu_items_$_iter__47547(cljs.core.rest(s__47548__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(renderers);
});
var comp__31745__auto__ = (function() { 
var frontend$components$right_sidebar$plugin_renderer_menu_items__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47555 = cljs.core.first(args__31746__auto__);
var G__47556 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47555,G__47556) : io.factorhouse.hsx.core.obj_get.call(null,G__47555,G__47556));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"plugin-renderer-menu-items","plugin-renderer-menu-items",1763759270,null),args__31746__auto__),frontend$components$right_sidebar$plugin_renderer_menu_items,args__31746__auto__,null);
}
};
var frontend$components$right_sidebar$plugin_renderer_menu_items = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47636__i = 0, G__47636__a = new Array(arguments.length -  0);
while (G__47636__i < G__47636__a.length) {G__47636__a[G__47636__i] = arguments[G__47636__i + 0]; ++G__47636__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47636__a,0,null);
} 
return frontend$components$right_sidebar$plugin_renderer_menu_items__delegate.call(this,args__31746__auto__);};
frontend$components$right_sidebar$plugin_renderer_menu_items.cljs$lang$maxFixedArity = 0;
frontend$components$right_sidebar$plugin_renderer_menu_items.cljs$lang$applyTo = (function (arglist__47637){
var args__31746__auto__ = cljs.core.seq(arglist__47637);
return frontend$components$right_sidebar$plugin_renderer_menu_items__delegate(args__31746__auto__);
});
frontend$components$right_sidebar$plugin_renderer_menu_items.cljs$core$IFn$_invoke$arity$variadic = frontend$components$right_sidebar$plugin_renderer_menu_items__delegate;
return frontend$components$right_sidebar$plugin_renderer_menu_items;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47557 = comp__31745__auto__;
var G__47558 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47557,G__47558) : io.factorhouse.hsx.core.react_memo.call(null,G__47557,G__47558));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"plugin-renderer-menu-items");

return comp__31745__auto__;
})();
frontend.components.right_sidebar.sidebar_inner = (function (){var render_fn__31744__auto__ = (function frontend$components$right_sidebar$sidebar_inner(repo,t,blocks){
var block_count = cljs.core.count(blocks);
var developer_mode_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","developer-mode?","ui/developer-mode?",-664501878)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__right-sidebar-inner.flex.flex-col.h-full#right-sidebar-container","div.cp__right-sidebar-inner.flex.flex-col.h-full#right-sidebar-container",934271982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__right-sidebar-scrollable","div.cp__right-sidebar-scrollable",-1283257071),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),frontend.util.stop], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__right-sidebar-topbar.flex.flex-row.justify-between.items-center","div.cp__right-sidebar-topbar.flex.flex-row.justify-between.items-center",-1090904106),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__right-sidebar-settings.hide-scrollbar.gap-1","div.cp__right-sidebar-settings.hide-scrollbar.gap-1",1840839984),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"right-sidebar-settings"], null),(function (){var temp__5825__auto__ = (function (){var and__5140__auto__ = frontend.config.lsp_enabled_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var G__47560 = frontend.handler.plugin.get_hosted_renderers();
var G__47560__$1 = (((G__47560 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__47559_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__47559_SHARP_),"sidebar");
}),G__47560));
if((G__47560__$1 == null)){
return null;
} else {
return cljs.core.seq(G__47560__$1);
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var renderers = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm","div.text-sm",1753784969),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.cp__right-sidebar-settings-btn","button.button.cp__right-sidebar-settings-btn",69897147),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var G__47561 = e;
var G__47562 = frontend.components.right_sidebar.plugin_renderer_menu_items(renderers);
var G__47563 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-dropdown?","as-dropdown?",-37553558),true,new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
})], null)], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__47561,G__47562,G__47563) : logseq.shui.ui.popup_show_BANG_.call(null,G__47561,G__47562,G__47563));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.nu.flex.items-center.opacity-80","span.nu.flex.items-center.opacity-80",-415502710),logseq.shui.ui.tabler_icon("cube-plus")], null)], null)], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm","div.text-sm",1753784969),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.cp__right-sidebar-settings-btn","button.button.cp__right-sidebar-settings-btn",69897147),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
return frontend.state.sidebar_add_block_BANG_(repo,"contents",new cljs.core.Keyword(null,"contents","contents",-1567174023));
})], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("page","contents","page/contents",-1566345974)) : t.call(null,new cljs.core.Keyword("page","contents","page/contents",-1566345974)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm","div.text-sm",1753784969),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.cp__right-sidebar-settings-btn","button.button.cp__right-sidebar-settings-btn",69897147),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var temp__5825__auto__ = frontend.components.right_sidebar.get_current_page();
if(cljs.core.truth_(temp__5825__auto__)){
var page = temp__5825__auto__;
return frontend.state.sidebar_add_block_BANG_(repo,page,new cljs.core.Keyword(null,"page-graph","page-graph",1691909522));
} else {
return null;
}
})], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("graph.page","title","graph.page/title",-1431710306)) : t.call(null,new cljs.core.Keyword("graph.page","title","graph.page/title",-1431710306)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm","div.text-sm",1753784969),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.cp__right-sidebar-settings-btn","button.button.cp__right-sidebar-settings-btn",69897147),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
return frontend.state.sidebar_add_block_BANG_(repo,"help",new cljs.core.Keyword(null,"help","help",-439233446));
})], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nav","help","nav/help",-439328953)) : t.call(null,new cljs.core.Keyword("nav","help","nav/help",-439328953)))], null)], null),(function (){var iter__5628__auto__ = (function frontend$components$right_sidebar$sidebar_inner_$_iter__47564(s__47565){
return (new cljs.core.LazySeq(null,(function (){
var s__47565__$1 = s__47565;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__47565__$1);
if(temp__5825__auto__){
var s__47565__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47565__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__47565__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__47567 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__47566 = (0);
while(true){
if((i__47566 < size__5627__auto__)){
var map__47568 = cljs.core._nth(c__5626__auto__,i__47566);
var map__47568__$1 = cljs.core.__destructure_map(map__47568);
var db_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47568__$1,new cljs.core.Keyword(null,"db-id","db-id",747248515));
var block_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47568__$1,new cljs.core.Keyword(null,"block-type","block-type",1348400470));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47568__$1,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.chunk_append(b__47567,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm","div.text-sm",1753784969),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"dev-sidebar-item-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(block_type)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.cp__right-sidebar-settings-btn","button.button.cp__right-sidebar-settings-btn",69897147),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__47566,map__47568,map__47568__$1,db_id,block_type,label,c__5626__auto__,size__5627__auto__,b__47567,s__47565__$2,temp__5825__auto__,block_count,developer_mode_QMARK_){
return (function (_e){
return frontend.state.sidebar_add_block_BANG_(repo,db_id,block_type);
});})(i__47566,map__47568,map__47568__$1,db_id,block_type,label,c__5626__auto__,size__5627__auto__,b__47567,s__47565__$2,temp__5825__auto__,block_count,developer_mode_QMARK_))
], null),label], null)], null));

var G__47638 = (i__47566 + (1));
i__47566 = G__47638;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47567),frontend$components$right_sidebar$sidebar_inner_$_iter__47564(cljs.core.chunk_rest(s__47565__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47567),null);
}
} else {
var map__47569 = cljs.core.first(s__47565__$2);
var map__47569__$1 = cljs.core.__destructure_map(map__47569);
var db_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47569__$1,new cljs.core.Keyword(null,"db-id","db-id",747248515));
var block_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47569__$1,new cljs.core.Keyword(null,"block-type","block-type",1348400470));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47569__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm","div.text-sm",1753784969),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"dev-sidebar-item-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(block_type)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.cp__right-sidebar-settings-btn","button.button.cp__right-sidebar-settings-btn",69897147),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__47569,map__47569__$1,db_id,block_type,label,s__47565__$2,temp__5825__auto__,block_count,developer_mode_QMARK_){
return (function (_e){
return frontend.state.sidebar_add_block_BANG_(repo,db_id,block_type);
});})(map__47569,map__47569__$1,db_id,block_type,label,s__47565__$2,temp__5825__auto__,block_count,developer_mode_QMARK_))
], null),label], null)], null),frontend$components$right_sidebar$sidebar_inner_$_iter__47564(cljs.core.rest(s__47565__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(frontend.components.right_sidebar.dev_sidebar_items(developer_mode_QMARK_));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".sidebar-item-list.flex-1.scrollbar-spacing.px-2",".sidebar-item-list.flex-1.scrollbar-spacing.px-2",2005945577),(function (){var iter__5628__auto__ = (function frontend$components$right_sidebar$sidebar_inner_$_iter__47570(s__47571){
return (new cljs.core.LazySeq(null,(function (){
var s__47571__$1 = s__47571;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__47571__$1);
if(temp__5825__auto__){
var s__47571__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47571__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__47571__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__47573 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__47572 = (0);
while(true){
if((i__47572 < size__5627__auto__)){
var vec__47574 = cljs.core._nth(c__5626__auto__,i__47572);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47574,(0),null);
var vec__47577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47574,(1),null);
var repo__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47577,(0),null);
var db_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47577,(1),null);
var block_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47577,(2),null);
cljs.core.chunk_append(b__47573,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),frontend.components.right_sidebar.sidebar_item(repo__$1,idx,db_id,block_type,block_count)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"sidebar-block-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(db_id))], null)));

var G__47639 = (i__47572 + (1));
i__47572 = G__47639;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47573),frontend$components$right_sidebar$sidebar_inner_$_iter__47570(cljs.core.chunk_rest(s__47571__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47573),null);
}
} else {
var vec__47580 = cljs.core.first(s__47571__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47580,(0),null);
var vec__47583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47580,(1),null);
var repo__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47583,(0),null);
var db_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47583,(1),null);
var block_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47583,(2),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),frontend.components.right_sidebar.sidebar_item(repo__$1,idx,db_id,block_type,block_count)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"sidebar-block-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(db_id))], null)),frontend$components$right_sidebar$sidebar_inner_$_iter__47570(cljs.core.rest(s__47571__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(medley.core.indexed.cljs$core$IFn$_invoke$arity$1(blocks));
})()], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$right_sidebar$sidebar_inner__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47586 = cljs.core.first(args__31746__auto__);
var G__47587 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47586,G__47587) : io.factorhouse.hsx.core.obj_get.call(null,G__47586,G__47587));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"sidebar-inner","sidebar-inner",2050417465,null),args__31746__auto__),frontend$components$right_sidebar$sidebar_inner,args__31746__auto__,null);
}
};
var frontend$components$right_sidebar$sidebar_inner = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47640__i = 0, G__47640__a = new Array(arguments.length -  0);
while (G__47640__i < G__47640__a.length) {G__47640__a[G__47640__i] = arguments[G__47640__i + 0]; ++G__47640__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47640__a,0,null);
} 
return frontend$components$right_sidebar$sidebar_inner__delegate.call(this,args__31746__auto__);};
frontend$components$right_sidebar$sidebar_inner.cljs$lang$maxFixedArity = 0;
frontend$components$right_sidebar$sidebar_inner.cljs$lang$applyTo = (function (arglist__47641){
var args__31746__auto__ = cljs.core.seq(arglist__47641);
return frontend$components$right_sidebar$sidebar_inner__delegate(args__31746__auto__);
});
frontend$components$right_sidebar$sidebar_inner.cljs$core$IFn$_invoke$arity$variadic = frontend$components$right_sidebar$sidebar_inner__delegate;
return frontend$components$right_sidebar$sidebar_inner;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47588 = comp__31745__auto__;
var G__47589 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47588,G__47589) : io.factorhouse.hsx.core.react_memo.call(null,G__47588,G__47589));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"sidebar-inner");

return comp__31745__auto__;
})();
frontend.components.right_sidebar.sidebar_component = (function (){var render_fn__31744__auto__ = (function frontend$components$right_sidebar$sidebar_component(){
var blocks = frontend.state.use_right_sidebar_blocks();
var blocks__$1 = ((cljs.core.empty_QMARK_(blocks))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.state.get_current_repo(),"contents",new cljs.core.Keyword(null,"contents","contents",-1567174023),null], null)], null):blocks);
var sidebar_open_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887)], null));
var width = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","sidebar-width","ui/sidebar-width",929889300)], null));
var repo = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("git","current-repo","git/current-repo",107438825)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#right-sidebar.cp__right-sidebar.h-screen","div#right-sidebar.cp__right-sidebar.h-screen",645295672),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(sidebar_open_QMARK_)?"open":"closed"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null)], null),frontend.components.right_sidebar.sidebar_resizer(sidebar_open_QMARK_,"right-sidebar",new cljs.core.Keyword(null,"west","west",708776677)),(cljs.core.truth_(sidebar_open_QMARK_)?frontend.components.right_sidebar.sidebar_inner(repo,frontend.context.i18n.t,blocks__$1):null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$right_sidebar$sidebar_component__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47590 = cljs.core.first(args__31746__auto__);
var G__47591 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47590,G__47591) : io.factorhouse.hsx.core.obj_get.call(null,G__47590,G__47591));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"sidebar-component","sidebar-component",-1019630236,null),args__31746__auto__),frontend$components$right_sidebar$sidebar_component,args__31746__auto__,null);
}
};
var frontend$components$right_sidebar$sidebar_component = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47642__i = 0, G__47642__a = new Array(arguments.length -  0);
while (G__47642__i < G__47642__a.length) {G__47642__a[G__47642__i] = arguments[G__47642__i + 0]; ++G__47642__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47642__a,0,null);
} 
return frontend$components$right_sidebar$sidebar_component__delegate.call(this,args__31746__auto__);};
frontend$components$right_sidebar$sidebar_component.cljs$lang$maxFixedArity = 0;
frontend$components$right_sidebar$sidebar_component.cljs$lang$applyTo = (function (arglist__47643){
var args__31746__auto__ = cljs.core.seq(arglist__47643);
return frontend$components$right_sidebar$sidebar_component__delegate(args__31746__auto__);
});
frontend$components$right_sidebar$sidebar_component.cljs$core$IFn$_invoke$arity$variadic = frontend$components$right_sidebar$sidebar_component__delegate;
return frontend$components$right_sidebar$sidebar_component;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47592 = comp__31745__auto__;
var G__47593 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47592,G__47593) : io.factorhouse.hsx.core.react_memo.call(null,G__47592,G__47593));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"sidebar-component");

return comp__31745__auto__;
})();
frontend.components.right_sidebar.sidebar = (function (){var memo_class = module$node_modules$react$index.memo((function (_props){
return frontend.components.right_sidebar.sidebar_component();
}));
return (function (){
return module$node_modules$react$index.createElement(memo_class,({}));
});
})();

//# sourceMappingURL=frontend.components.right_sidebar.js.map
