goog.provide('frontend.components.left_sidebar');
goog.scope(function(){
  frontend.components.left_sidebar.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Keep :page when it is a usable start page. The app waits for page-identity;
 *   publishing trusts a non-blank configured page because that lookup is not
 *   ready on first paint.
 */
frontend.components.left_sidebar.default_home_if_valid = (function frontend$components$left_sidebar$default_home_if_valid(default_home,p__57823){
var map__57824 = p__57823;
var map__57824__$1 = cljs.core.__destructure_map(map__57824);
var publishing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57824__$1,new cljs.core.Keyword(null,"publishing?","publishing?",1526914455));
var page_identity_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57824__$1,new cljs.core.Keyword(null,"page-identity-status","page-identity-status",1055812712));
var page_identity_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57824__$1,new cljs.core.Keyword(null,"page-identity-value","page-identity-value",1343154719));
if(cljs.core.truth_(default_home)){
var page = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(default_home);
var valid_page_QMARK_ = ((typeof page === 'string') && ((!(clojure.string.blank_QMARK_(page)))));
if(cljs.core.truth_((function (){var or__5142__auto__ = (function (){var and__5140__auto__ = publishing_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return valid_page_QMARK_;
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ready","ready",1086465795),page_identity_status);
if(and__5140__auto__){
return page_identity_value;
} else {
return and__5140__auto__;
}
}
})())){
return default_home;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(default_home,new cljs.core.Keyword(null,"page","page",849072397));
}
} else {
return null;
}
});
frontend.components.left_sidebar.use_default_home_if_valid = (function frontend$components$left_sidebar$use_default_home_if_valid(){
var default_home = frontend.state.get_default_home();
var page = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(default_home);
var valid_page_QMARK_ = ((typeof page === 'string') && ((!(clojure.string.blank_QMARK_(page)))));
var map__57825 = frontend.db.hooks.use_resource_snapshot(((valid_page_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-identity","page-identity",-899314184),page], null):null));
var map__57825__$1 = cljs.core.__destructure_map(map__57825);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57825__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57825__$1,new cljs.core.Keyword(null,"value","value",305978217));
return frontend.components.left_sidebar.default_home_if_valid(default_home,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"publishing?","publishing?",1526914455),frontend.config.publishing_QMARK_,new cljs.core.Keyword(null,"page-identity-status","page-identity-status",1055812712),status,new cljs.core.Keyword(null,"page-identity-value","page-identity-value",1343154719),value], null));
});
frontend.components.left_sidebar.page_title_content = (function (){var render_fn__31744__auto__ = (function frontend$components$left_sidebar$page_title_content(page_id,display_title,tooltip_title,untitled_QMARK_,left_sidebar_resized_at){
var _STAR_title_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var vec__57826 = logseq.shui.hooks.use_state(false);
var truncated_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57826,(0),null);
var set_truncated_QMARK__BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57826,(1),null);
var sync_truncated_BANG_ = (function (){
var temp__5823__auto__ = logseq.shui.hooks.deref(_STAR_title_ref);
if(cljs.core.truth_(temp__5823__auto__)){
var el = temp__5823__auto__;
var G__57829 = (el.scrollWidth > (el.clientWidth + (1)));
return (set_truncated_QMARK__BANG_.cljs$core$IFn$_invoke$arity$1 ? set_truncated_QMARK__BANG_.cljs$core$IFn$_invoke$arity$1(G__57829) : set_truncated_QMARK__BANG_.call(null,G__57829));
} else {
return (set_truncated_QMARK__BANG_.cljs$core$IFn$_invoke$arity$1 ? set_truncated_QMARK__BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_truncated_QMARK__BANG_.call(null,false));
}
});
var title_el = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.page-title","span.page-title",-1546529363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_title_ref,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(untitled_QMARK_)?"opacity-50":null)], null),display_title], null);
logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5823__auto__ = logseq.shui.hooks.deref(_STAR_title_ref);
if(cljs.core.truth_(temp__5823__auto__)){
var el = temp__5823__auto__;
var observer = (new ResizeObserver((function (_){
return sync_truncated_BANG_();
})));
observer.observe(el);

sync_truncated_BANG_();

return (function (){
return observer.disconnect();
});
} else {
(set_truncated_QMARK__BANG_.cljs$core$IFn$_invoke$arity$1 ? set_truncated_QMARK__BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_truncated_QMARK__BANG_.call(null,false));

return null;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_id,display_title,tooltip_title], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var raf_id = requestAnimationFrame(sync_truncated_BANG_);
return (function (){
return cancelAnimationFrame(raf_id);
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [left_sidebar_resized_at], null));

if(cljs.core.truth_((function (){var and__5140__auto__ = truncated_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (!(clojure.string.blank_QMARK_(tooltip_title)));
} else {
return and__5140__auto__;
}
})())){
return frontend.ui.tooltip(title_el,tooltip_title);
} else {
return title_el;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$left_sidebar$page_title_content__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__57830 = cljs.core.first(args__31746__auto__);
var G__57831 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__57830,G__57831) : io.factorhouse.hsx.core.obj_get.call(null,G__57830,G__57831));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"page-title-content","page-title-content",1516266246,null),args__31746__auto__),frontend$components$left_sidebar$page_title_content,args__31746__auto__,null);
}
};
var frontend$components$left_sidebar$page_title_content = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__57987__i = 0, G__57987__a = new Array(arguments.length -  0);
while (G__57987__i < G__57987__a.length) {G__57987__a[G__57987__i] = arguments[G__57987__i + 0]; ++G__57987__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__57987__a,0,null);
} 
return frontend$components$left_sidebar$page_title_content__delegate.call(this,args__31746__auto__);};
frontend$components$left_sidebar$page_title_content.cljs$lang$maxFixedArity = 0;
frontend$components$left_sidebar$page_title_content.cljs$lang$applyTo = (function (arglist__57988){
var args__31746__auto__ = cljs.core.seq(arglist__57988);
return frontend$components$left_sidebar$page_title_content__delegate(args__31746__auto__);
});
frontend$components$left_sidebar$page_title_content.cljs$core$IFn$_invoke$arity$variadic = frontend$components$left_sidebar$page_title_content__delegate;
return frontend$components$left_sidebar$page_title_content;
})()
;
var memo_comp__31747__auto__ = (function (){var G__57832 = comp__31745__auto__;
var G__57833 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__57832,G__57833) : io.factorhouse.hsx.core.react_memo.call(null,G__57832,G__57833));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"page-title-content");

return comp__31745__auto__;
})();
frontend.components.left_sidebar.page_name = (function (){var render_fn__31744__auto__ = (function frontend$components$left_sidebar$page_name(page,recent_QMARK_){
var vec__57836 = logseq.shui.hooks.use_atom(frontend.handler.ui._STAR_left_sidebar_resized_at);
var left_sidebar_resized_at = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57836,(0),null);
var id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(id)){
var icon = frontend.components.icon.get_node_icon_cp(page,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(16)], null));
var title = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page);
var untitled_QMARK_ = (frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1(title) : frontend.util.uuid_string_QMARK_.call(null,title));
var display_title = ((cljs.core.not(frontend.util.entity.page_QMARK_(page)))?frontend.components.block.inline_text.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"markdown","markdown",1227225089),clojure.string.replace(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take.cljs$core$IFn$_invoke$arity$2((64),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page))),"\n"," ")):(cljs.core.truth_(untitled_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","untitled","ui/untitled",301271588)], 0)):frontend.handler.block.block_unique_title(page)
));
var tooltip_title = (function (){var or__5142__auto__ = frontend.handler.block.block_unique_title(page);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.truth_(untitled_QMARK_)){
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","untitled","ui/untitled",301271588)], 0));
} else {
return null;
}
}
})();
var ctx_icon = (function (p1__57834_SHARP_){
return logseq.shui.ui.tabler_icon(p1__57834_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"scale-90 pr-1 opacity-80"], null));
});
var open_in_sidebar = (function (){
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"page","page",849072397));
});
var x_menu_content = (function (){
var x_menu_item = logseq.shui.ui.dropdown_menu_item;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(cljs.core.truth_(recent_QMARK_)?null:(function (){var G__57839 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"unfavorite",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.page._LT_unfavorite_page_BANG_((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page))));
})], null);
var G__57840 = ctx_icon("star-off");
var G__57841 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","unfavorite","page/unfavorite",578994300)], 0));
var G__57842 = frontend.ui.dropdown_shortcut(new cljs.core.Keyword("page","toggle-favorite","page/toggle-favorite",1256887292));
return (x_menu_item.cljs$core$IFn$_invoke$arity$4 ? x_menu_item.cljs$core$IFn$_invoke$arity$4(G__57839,G__57840,G__57841,G__57842) : x_menu_item.call(null,G__57839,G__57840,G__57841,G__57842));
})()),(function (){var G__57843 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"open in sidebar",new cljs.core.Keyword(null,"on-click","on-click",1632826543),open_in_sidebar], null);
var G__57844 = ctx_icon("layout-sidebar-right");
var G__57845 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sidebar.right","open","sidebar.right/open",1036509782)], 0));
var G__57846 = frontend.ui.dropdown_shortcut("shift+click");
return (x_menu_item.cljs$core$IFn$_invoke$arity$4 ? x_menu_item.cljs$core$IFn$_invoke$arity$4(G__57843,G__57844,G__57845,G__57846) : x_menu_item.call(null,G__57843,G__57844,G__57845,G__57846));
})()], null);
});
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.link-item.group","a.link-item.group",312605155),(cljs.core.truth_(frontend.util.mobile_QMARK_())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),frontend.util.stop_propagation,new cljs.core.Keyword(null,"on-pointer-up","on-pointer-up",385194000),(function (_e){
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click-from-recent?","click-from-recent?",-1191845464),recent_QMARK_], null));
})], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(cljs.core.truth_(frontend.components.left_sidebar.goog$module$goog$object.get(e,"shiftKey"))){
return open_in_sidebar();
} else {
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click-from-recent?","click-from-recent?",-1191845464),recent_QMARK_], null));
}
}),new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),(function (e){
var G__57847_57989 = e;
var G__57848_57990 = x_menu_content();
var G__57849_57991 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-dropdown?","as-dropdown?",-37553558),true,new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"w-60"], null)], null);
(logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__57847_57989,G__57848_57990,G__57849_57991) : logseq.shui.ui.popup_show_BANG_.call(null,G__57847_57989,G__57848_57990,G__57849_57991));

return frontend.util.stop(e);
})], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.page-icon","span.page-icon",789462027),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"page-icon"], null),icon], null),frontend.components.left_sidebar.page_title_content(id,display_title,tooltip_title,untitled_QMARK_,left_sidebar_resized_at),(function (){var G__57850 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),"more actions",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"class","class",-2030961996),"sidebar-page-actions absolute !bg-transparent right-0 top-0 px-1.5 scale-75 opacity-40 hover:opacity-80 active:opacity-100",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__57835_SHARP_){
var G__57852_57992 = p1__57835_SHARP_.target;
var G__57853_57993 = x_menu_content();
var G__57854_57994 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-dropdown?","as-dropdown?",-37553558),true,new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"w-60"], null)], null);
(logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__57852_57992,G__57853_57993,G__57854_57994) : logseq.shui.ui.popup_show_BANG_.call(null,G__57852_57992,G__57853_57993,G__57854_57994));

return frontend.util.stop(p1__57835_SHARP_);
})], null);
var G__57851 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.relative","i.relative",-2078662318),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),"4px"], null)], null),logseq.shui.ui.tabler_icon("dots")], null);
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__57850,G__57851) : logseq.shui.ui.button.call(null,G__57850,G__57851));
})()], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$left_sidebar$page_name__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__57855 = cljs.core.first(args__31746__auto__);
var G__57856 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__57855,G__57856) : io.factorhouse.hsx.core.obj_get.call(null,G__57855,G__57856));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"page-name","page-name",-1679454007,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$left_sidebar$page_name,args__31746__auto__,null);
}
};
var frontend$components$left_sidebar$page_name = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__57995__i = 0, G__57995__a = new Array(arguments.length -  0);
while (G__57995__i < G__57995__a.length) {G__57995__a[G__57995__i] = arguments[G__57995__i + 0]; ++G__57995__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__57995__a,0,null);
} 
return frontend$components$left_sidebar$page_name__delegate.call(this,args__31746__auto__);};
frontend$components$left_sidebar$page_name.cljs$lang$maxFixedArity = 0;
frontend$components$left_sidebar$page_name.cljs$lang$applyTo = (function (arglist__57996){
var args__31746__auto__ = cljs.core.seq(arglist__57996);
return frontend$components$left_sidebar$page_name__delegate(args__31746__auto__);
});
frontend$components$left_sidebar$page_name.cljs$core$IFn$_invoke$arity$variadic = frontend$components$left_sidebar$page_name__delegate;
return frontend$components$left_sidebar$page_name;
})()
;
var memo_comp__31747__auto__ = (function (){var G__57857 = comp__31745__auto__;
var G__57858 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__57857,G__57858) : io.factorhouse.hsx.core.react_memo.call(null,G__57857,G__57858));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"page-name");

return comp__31745__auto__;
})();
frontend.components.left_sidebar.sidebar_item = (function frontend$components$left_sidebar$sidebar_item(p__57859){
var map__57860 = p__57859;
var map__57860__$1 = cljs.core.__destructure_map(map__57860);
var icon_extension_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57860__$1,new cljs.core.Keyword(null,"icon-extension?","icon-extension?",507506462));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57860__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57860__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57860__$1,new cljs.core.Keyword(null,"title","title",636505583));
var shortcut = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57860__$1,new cljs.core.Keyword(null,"shortcut","shortcut",-431647697));
var on_click_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57860__$1,new cljs.core.Keyword(null,"on-click-handler","on-click-handler",746440723));
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57860__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57860__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var more = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57860__$1,new cljs.core.Keyword(null,"more","more",-2058821800));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),class$,new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),active], null)], null))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.item.group.flex.items-center.text-sm.rounded-md.font-medium","a.item.group.flex.items-center.text-sm.rounded-md.font-medium",-1380714428),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click_handler,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(active)?"active":null),new cljs.core.Keyword(null,"href","href",-793805698),href], null),frontend.ui.icon((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extension?","extension?",-1574402873),icon_extension_QMARK_,new cljs.core.Keyword(null,"size","size",1098693007),(16)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex-1","span.flex-1",1756749525),title], null),(cljs.core.truth_(shortcut)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ml-1.mr-2.flex.items-center","span.ml-1.mr-2.flex.items-center",-386889057),frontend.ui.render_keyboard_shortcut.cljs$core$IFn$_invoke$arity$variadic(frontend.ui.keyboard_shortcut_from_config.cljs$core$IFn$_invoke$arity$variadic(shortcut,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pick-first?","pick-first?",-2055544652),true], null)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shortcut-id","shortcut-id",2068609942),shortcut], 0))], null):null),more], null)], null);
});
frontend.components.left_sidebar.sidebar_graphs = (function (){var render_fn__31744__auto__ = (function frontend$components$left_sidebar$sidebar_graphs(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sidebar-graphs","div.sidebar-graphs",322616139),frontend.components.repo.graphs_selector()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$left_sidebar$sidebar_graphs__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__57861 = cljs.core.first(args__31746__auto__);
var G__57862 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__57861,G__57862) : io.factorhouse.hsx.core.obj_get.call(null,G__57861,G__57862));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"sidebar-graphs","sidebar-graphs",-503292669,null),args__31746__auto__),frontend$components$left_sidebar$sidebar_graphs,args__31746__auto__,null);
}
};
var frontend$components$left_sidebar$sidebar_graphs = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__57997__i = 0, G__57997__a = new Array(arguments.length -  0);
while (G__57997__i < G__57997__a.length) {G__57997__a[G__57997__i] = arguments[G__57997__i + 0]; ++G__57997__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__57997__a,0,null);
} 
return frontend$components$left_sidebar$sidebar_graphs__delegate.call(this,args__31746__auto__);};
frontend$components$left_sidebar$sidebar_graphs.cljs$lang$maxFixedArity = 0;
frontend$components$left_sidebar$sidebar_graphs.cljs$lang$applyTo = (function (arglist__57998){
var args__31746__auto__ = cljs.core.seq(arglist__57998);
return frontend$components$left_sidebar$sidebar_graphs__delegate(args__31746__auto__);
});
frontend$components$left_sidebar$sidebar_graphs.cljs$core$IFn$_invoke$arity$variadic = frontend$components$left_sidebar$sidebar_graphs__delegate;
return frontend$components$left_sidebar$sidebar_graphs;
})()
;
var memo_comp__31747__auto__ = (function (){var G__57863 = comp__31745__auto__;
var G__57864 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__57863,G__57864) : io.factorhouse.hsx.core.react_memo.call(null,G__57863,G__57864));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"sidebar-graphs");

return comp__31745__auto__;
})();
frontend.components.left_sidebar.navigation_label_key = (function frontend$components$left_sidebar$navigation_label_key(nav){
var G__57865 = nav;
var G__57865__$1 = (((G__57865 instanceof cljs.core.Keyword))?G__57865.fqn:null);
switch (G__57865__$1) {
case "flashcards":
return new cljs.core.Keyword("nav","flashcards","nav/flashcards",2038178913);

break;
case "all-pages":
return new cljs.core.Keyword("nav.all-pages","label","nav.all-pages/label",437498813);

break;
case "graph-view":
return new cljs.core.Keyword("nav","graph-view","nav/graph-view",-233600484);

break;
case "tag/tasks":
return new cljs.core.Keyword("nav","tasks","nav/tasks",-1754788503);

break;
case "tag/assets":
return new cljs.core.Keyword("nav","assets","nav/assets",210448034);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57865__$1))));

}
});
frontend.components.left_sidebar.sidebar_navigations_edit_content = (function (){var render_fn__31744__auto__ = (function frontend$components$left_sidebar$sidebar_navigations_edit_content(p__57867){
var map__57868 = p__57867;
var map__57868__$1 = cljs.core.__destructure_map(map__57868);
var _id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57868__$1,new cljs.core.Keyword(null,"_id","_id",-789960287));
var navs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57868__$1,new cljs.core.Keyword(null,"navs","navs",-1350609868));
var checked_navs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57868__$1,new cljs.core.Keyword(null,"checked-navs","checked-navs",774369896));
var set_checked_navs_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57868__$1,new cljs.core.Keyword(null,"set-checked-navs!","set-checked-navs!",-2081871382));
var vec__57869 = logseq.shui.hooks.use_state(checked_navs);
var local_navs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57869,(0),null);
var set_local_navs_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57869,(1),null);
logseq.shui.hooks.use_effect_BANG_((function (){
return (set_checked_navs_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_checked_navs_BANG_.cljs$core$IFn$_invoke$arity$1(local_navs) : set_checked_navs_BANG_.call(null,local_navs));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [local_navs], null));

var iter__5628__auto__ = (function frontend$components$left_sidebar$sidebar_navigations_edit_content_$_iter__57872(s__57873){
return (new cljs.core.LazySeq(null,(function (){
var s__57873__$1 = s__57873;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__57873__$1);
if(temp__5825__auto__){
var s__57873__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57873__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__57873__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__57875 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__57874 = (0);
while(true){
if((i__57874 < size__5627__auto__)){
var nav = cljs.core._nth(c__5626__auto__,i__57874);
cljs.core.chunk_append(b__57875,(function (){var G__57876 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(cljs.core.set(local_navs),nav),new cljs.core.Keyword(null,"onCheckedChange","onCheckedChange",842153815),((function (i__57874,nav,c__5626__auto__,size__5627__auto__,b__57875,s__57873__$2,temp__5825__auto__,vec__57869,local_navs,set_local_navs_BANG_,map__57868,map__57868__$1,_id,navs,checked_navs,set_checked_navs_BANG_){
return (function (v){
var G__57878 = ((function (i__57874,nav,c__5626__auto__,size__5627__auto__,b__57875,s__57873__$2,temp__5825__auto__,vec__57869,local_navs,set_local_navs_BANG_,map__57868,map__57868__$1,_id,navs,checked_navs,set_checked_navs_BANG_){
return (function (){
if(cljs.core.truth_(v)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(local_navs,nav);
} else {
return cljs.core.filterv(((function (i__57874,nav,c__5626__auto__,size__5627__auto__,b__57875,s__57873__$2,temp__5825__auto__,vec__57869,local_navs,set_local_navs_BANG_,map__57868,map__57868__$1,_id,navs,checked_navs,set_checked_navs_BANG_){
return (function (p1__57866_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(nav,p1__57866_SHARP_);
});})(i__57874,nav,c__5626__auto__,size__5627__auto__,b__57875,s__57873__$2,temp__5825__auto__,vec__57869,local_navs,set_local_navs_BANG_,map__57868,map__57868__$1,_id,navs,checked_navs,set_checked_navs_BANG_))
,local_navs);
}
});})(i__57874,nav,c__5626__auto__,size__5627__auto__,b__57875,s__57873__$2,temp__5825__auto__,vec__57869,local_navs,set_local_navs_BANG_,map__57868,map__57868__$1,_id,navs,checked_navs,set_checked_navs_BANG_))
;
return (set_local_navs_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_local_navs_BANG_.cljs$core$IFn$_invoke$arity$1(G__57878) : set_local_navs_BANG_.call(null,G__57878));
});})(i__57874,nav,c__5626__auto__,size__5627__auto__,b__57875,s__57873__$2,temp__5825__auto__,vec__57869,local_navs,set_local_navs_BANG_,map__57868,map__57868__$1,_id,navs,checked_navs,set_checked_navs_BANG_))
], null);
var G__57877 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.components.left_sidebar.navigation_label_key(nav)], 0));
return (logseq.shui.ui.dropdown_menu_checkbox_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_checkbox_item.cljs$core$IFn$_invoke$arity$2(G__57876,G__57877) : logseq.shui.ui.dropdown_menu_checkbox_item.call(null,G__57876,G__57877));
})());

var G__58000 = (i__57874 + (1));
i__57874 = G__58000;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57875),frontend$components$left_sidebar$sidebar_navigations_edit_content_$_iter__57872(cljs.core.chunk_rest(s__57873__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57875),null);
}
} else {
var nav = cljs.core.first(s__57873__$2);
return cljs.core.cons((function (){var G__57879 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(cljs.core.set(local_navs),nav),new cljs.core.Keyword(null,"onCheckedChange","onCheckedChange",842153815),((function (nav,s__57873__$2,temp__5825__auto__,vec__57869,local_navs,set_local_navs_BANG_,map__57868,map__57868__$1,_id,navs,checked_navs,set_checked_navs_BANG_){
return (function (v){
var G__57881 = (function (){
if(cljs.core.truth_(v)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(local_navs,nav);
} else {
return cljs.core.filterv((function (p1__57866_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(nav,p1__57866_SHARP_);
}),local_navs);
}
});
return (set_local_navs_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_local_navs_BANG_.cljs$core$IFn$_invoke$arity$1(G__57881) : set_local_navs_BANG_.call(null,G__57881));
});})(nav,s__57873__$2,temp__5825__auto__,vec__57869,local_navs,set_local_navs_BANG_,map__57868,map__57868__$1,_id,navs,checked_navs,set_checked_navs_BANG_))
], null);
var G__57880 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.components.left_sidebar.navigation_label_key(nav)], 0));
return (logseq.shui.ui.dropdown_menu_checkbox_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_checkbox_item.cljs$core$IFn$_invoke$arity$2(G__57879,G__57880) : logseq.shui.ui.dropdown_menu_checkbox_item.call(null,G__57879,G__57880));
})(),frontend$components$left_sidebar$sidebar_navigations_edit_content_$_iter__57872(cljs.core.rest(s__57873__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(navs);
});
var comp__31745__auto__ = (function() { 
var frontend$components$left_sidebar$sidebar_navigations_edit_content__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__57882 = cljs.core.first(args__31746__auto__);
var G__57883 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__57882,G__57883) : io.factorhouse.hsx.core.obj_get.call(null,G__57882,G__57883));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"sidebar-navigations-edit-content","sidebar-navigations-edit-content",-703047879,null),args__31746__auto__),frontend$components$left_sidebar$sidebar_navigations_edit_content,args__31746__auto__,null);
}
};
var frontend$components$left_sidebar$sidebar_navigations_edit_content = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58001__i = 0, G__58001__a = new Array(arguments.length -  0);
while (G__58001__i < G__58001__a.length) {G__58001__a[G__58001__i] = arguments[G__58001__i + 0]; ++G__58001__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58001__a,0,null);
} 
return frontend$components$left_sidebar$sidebar_navigations_edit_content__delegate.call(this,args__31746__auto__);};
frontend$components$left_sidebar$sidebar_navigations_edit_content.cljs$lang$maxFixedArity = 0;
frontend$components$left_sidebar$sidebar_navigations_edit_content.cljs$lang$applyTo = (function (arglist__58002){
var args__31746__auto__ = cljs.core.seq(arglist__58002);
return frontend$components$left_sidebar$sidebar_navigations_edit_content__delegate(args__31746__auto__);
});
frontend$components$left_sidebar$sidebar_navigations_edit_content.cljs$core$IFn$_invoke$arity$variadic = frontend$components$left_sidebar$sidebar_navigations_edit_content__delegate;
return frontend$components$left_sidebar$sidebar_navigations_edit_content;
})()
;
var memo_comp__31747__auto__ = (function (){var G__57884 = comp__31745__auto__;
var G__57885 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__57884,G__57885) : io.factorhouse.hsx.core.react_memo.call(null,G__57884,G__57885));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"sidebar-navigations-edit-content");

return comp__31745__auto__;
})();
frontend.components.left_sidebar.sidebar_content_group_body = (function (){var render_fn__31744__auto__ = (function frontend$components$left_sidebar$sidebar_content_group_body(child){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bd","div.bd",-367379221),child], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$left_sidebar$sidebar_content_group_body__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__57886 = cljs.core.first(args__31746__auto__);
var G__57887 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__57886,G__57887) : io.factorhouse.hsx.core.obj_get.call(null,G__57886,G__57887));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"sidebar-content-group-body","sidebar-content-group-body",-276167410,null),args__31746__auto__),frontend$components$left_sidebar$sidebar_content_group_body,args__31746__auto__,null);
}
};
var frontend$components$left_sidebar$sidebar_content_group_body = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58003__i = 0, G__58003__a = new Array(arguments.length -  0);
while (G__58003__i < G__58003__a.length) {G__58003__a[G__58003__i] = arguments[G__58003__i + 0]; ++G__58003__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58003__a,0,null);
} 
return frontend$components$left_sidebar$sidebar_content_group_body__delegate.call(this,args__31746__auto__);};
frontend$components$left_sidebar$sidebar_content_group_body.cljs$lang$maxFixedArity = 0;
frontend$components$left_sidebar$sidebar_content_group_body.cljs$lang$applyTo = (function (arglist__58004){
var args__31746__auto__ = cljs.core.seq(arglist__58004);
return frontend$components$left_sidebar$sidebar_content_group_body__delegate(args__31746__auto__);
});
frontend$components$left_sidebar$sidebar_content_group_body.cljs$core$IFn$_invoke$arity$variadic = frontend$components$left_sidebar$sidebar_content_group_body__delegate;
return frontend$components$left_sidebar$sidebar_content_group_body;
})()
;
var memo_comp__31747__auto__ = (function (){var G__57888 = comp__31745__auto__;
var G__57889 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__57888,G__57889) : io.factorhouse.hsx.core.react_memo.call(null,G__57888,G__57889));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"sidebar-content-group-body");

return comp__31745__auto__;
})();
frontend.components.left_sidebar.sidebar_content_group = (function (){var render_fn__31744__auto__ = (function frontend$components$left_sidebar$sidebar_content_group(name,p__57890,child){
var map__57891 = p__57890;
var map__57891__$1 = cljs.core.__destructure_map(map__57891);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57891__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57891__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var more = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57891__$1,new cljs.core.Keyword(null,"more","more",-2058821800));
var header_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57891__$1,new cljs.core.Keyword(null,"header-props","header-props",742830512));
var enter_show_more_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57891__$1,new cljs.core.Keyword(null,"enter-show-more?","enter-show-more?",-1295464885));
var collapsable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57891__$1,new cljs.core.Keyword(null,"collapsable?","collapsable?",-634623825));
var collapsed_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","navigation-item-collapsed?","ui/navigation-item-collapsed?",-1247120960),class$], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sidebar-content-group","div.sidebar-content-group",-356339179),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"is-expand","is-expand",-1852164794),cljs.core.not(collapsed_QMARK_),new cljs.core.Keyword(null,"has-children","has-children",-934485512),((typeof count === 'number') && ((count > (0))))], null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sidebar-content-group-inner","div.sidebar-content-group-inner",-88648139),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hd.items-center","div.hd.items-center",-2112906525),(function (){var G__57892 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([header_props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(header_props),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"non-collapsable","non-collapsable",1791768854),collapsable_QMARK_ === false,new cljs.core.Keyword(null,"enter-show-more","enter-show-more",-1028935444),enter_show_more_QMARK_ === true], null)], null))], null)], 0));
if((!(collapsable_QMARK_ === false))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57892,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
return frontend.state.toggle_navigation_item_collapsed_BANG_(class$);
}));
} else {
return G__57892;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.a","span.a",1574938613),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.b","span.b",-1984977699),(function (){var or__5142__auto__ = more;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.ui.icon("chevron-right",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"more",new cljs.core.Keyword(null,"size","size",1098693007),(15)], null));
}
})()], null)], null),(cljs.core.truth_(child)?cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.left_sidebar.sidebar_content_group_body,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = class$;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "group";
}
})())+"-body")], null)):null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$left_sidebar$sidebar_content_group__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__57893 = cljs.core.first(args__31746__auto__);
var G__57894 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__57893,G__57894) : io.factorhouse.hsx.core.obj_get.call(null,G__57893,G__57894));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"sidebar-content-group","sidebar-content-group",-221694743,null),args__31746__auto__),frontend$components$left_sidebar$sidebar_content_group,args__31746__auto__,null);
}
};
var frontend$components$left_sidebar$sidebar_content_group = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58005__i = 0, G__58005__a = new Array(arguments.length -  0);
while (G__58005__i < G__58005__a.length) {G__58005__a[G__58005__i] = arguments[G__58005__i + 0]; ++G__58005__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58005__a,0,null);
} 
return frontend$components$left_sidebar$sidebar_content_group__delegate.call(this,args__31746__auto__);};
frontend$components$left_sidebar$sidebar_content_group.cljs$lang$maxFixedArity = 0;
frontend$components$left_sidebar$sidebar_content_group.cljs$lang$applyTo = (function (arglist__58006){
var args__31746__auto__ = cljs.core.seq(arglist__58006);
return frontend$components$left_sidebar$sidebar_content_group__delegate(args__31746__auto__);
});
frontend$components$left_sidebar$sidebar_content_group.cljs$core$IFn$_invoke$arity$variadic = frontend$components$left_sidebar$sidebar_content_group__delegate;
return frontend$components$left_sidebar$sidebar_content_group;
})()
;
var memo_comp__31747__auto__ = (function (){var G__57895 = comp__31745__auto__;
var G__57896 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__57895,G__57896) : io.factorhouse.hsx.core.react_memo.call(null,G__57895,G__57896));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"sidebar-content-group");

return comp__31745__auto__;
})();
frontend.components.left_sidebar._LT_load_nav_class_uuids = (function frontend$components$left_sidebar$_LT_load_nav_class_uuids(repo,db_worker_ready_QMARK_){
if(cljs.core.truth_((function (){var and__5140__auto__ = repo;
if(cljs.core.truth_(and__5140__auto__)){
return db_worker_ready_QMARK_;
} else {
return and__5140__auto__;
}
})())){
return promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (class_ident){
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null),class_ident], 0));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.class","Asset","logseq.class/Asset",-797502970),new cljs.core.Keyword("logseq.class","Task","logseq.class/Task",-1282181457)], null)));
} else {
return null;
}
});
frontend.components.left_sidebar.sidebar_navigations_loaded = (function (){var render_fn__31744__auto__ = (function frontend$components$left_sidebar$sidebar_navigations_loaded(p__57898){
var map__57899 = p__57898;
var map__57899__$1 = cljs.core.__destructure_map(map__57899);
var default_home = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57899__$1,new cljs.core.Keyword(null,"default-home","default-home",171104159));
var route_match = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57899__$1,new cljs.core.Keyword(null,"route-match","route-match",-1450985937));
var route_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57899__$1,new cljs.core.Keyword(null,"route-name","route-name",-932603717));
var srs_open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57899__$1,new cljs.core.Keyword(null,"srs-open?","srs-open?",407120677));
var navs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flashcards","flashcards",2038329166),new cljs.core.Keyword(null,"all-pages","all-pages",1017563062),new cljs.core.Keyword(null,"graph-view","graph-view",-233626947),new cljs.core.Keyword("tag","tasks","tag/tasks",-1754778910),new cljs.core.Keyword("tag","assets","tag/assets",210425625)], null);
var _preferred_language = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017)], null));
var repo = frontend.state.get_current_repo();
var db_worker_ready_QMARK_ = logseq.shui.hooks.use_atom_value(frontend.state.db_worker_ready_QMARK_);
var vec__57900 = logseq.shui.hooks.use_state(cljs.core.PersistentArrayMap.EMPTY);
var class_ident__GT_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57900,(0),null);
var set_class_ident__GT_uuid_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57900,(1),null);
var vec__57903 = logseq.shui.hooks.use_state((function (){var or__5142__auto__ = frontend.storage.get(new cljs.core.Keyword(null,"ls-sidebar-navigations","ls-sidebar-navigations",1383970328));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flashcards","flashcards",2038329166),new cljs.core.Keyword(null,"all-pages","all-pages",1017563062),new cljs.core.Keyword(null,"graph-view","graph-view",-233626947)], null);
}
})());
var checked_navs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57903,(0),null);
var set_checked_navs_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57903,(1),null);
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.vector_QMARK_(checked_navs)){
return frontend.storage.set(new cljs.core.Keyword(null,"ls-sidebar-navigations","ls-sidebar-navigations",1383970328),checked_navs);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [checked_navs], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5823__auto__ = frontend.components.left_sidebar._LT_load_nav_class_uuids(repo,db_worker_ready_QMARK_);
if(cljs.core.truth_(temp__5823__auto__)){
var classes_request = temp__5823__auto__;
var cancelled_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(classes_request,(function (classes){
if(cljs.core.truth_(cljs.core.deref(cancelled_QMARK_))){
return null;
} else {
var G__57906 = cljs.core.zipmap(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.class","Asset","logseq.class/Asset",-797502970),new cljs.core.Keyword("logseq.class","Task","logseq.class/Task",-1282181457)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),classes));
return (set_class_ident__GT_uuid_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_class_ident__GT_uuid_BANG_.cljs$core$IFn$_invoke$arity$1(G__57906) : set_class_ident__GT_uuid_BANG_.call(null,G__57906));
}
})),(function (_){
return null;
}));

return (function (){
return cljs.core.reset_BANG_(cancelled_QMARK_,true);
});
} else {
var G__57907_58007 = cljs.core.PersistentArrayMap.EMPTY;
(set_class_ident__GT_uuid_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_class_ident__GT_uuid_BANG_.cljs$core$IFn$_invoke$arity$1(G__57907_58007) : set_class_ident__GT_uuid_BANG_.call(null,G__57907_58007));

return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,db_worker_ready_QMARK_], null));

return frontend.components.left_sidebar.sidebar_content_group(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.wrap-th","a.wrap-th",1385261646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.flex-1","strong.flex-1",-332188689),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sidebar.left","navigations","sidebar.left/navigations",169413899)], 0))], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"collapsable?","collapsable?",-634623825),false,new cljs.core.Keyword(null,"enter-show-more?","enter-show-more?",-1295464885),true,new cljs.core.Keyword(null,"header-props","header-props",742830512),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var temp__5825__auto__ = (function (){var G__57908 = e.target;
if((G__57908 == null)){
return null;
} else {
return G__57908.closest(".as-edit");
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var _el = temp__5825__auto__;
var G__57909 = _el;
var G__57910 = (function (p1__57897_SHARP_){
return frontend.components.left_sidebar.sidebar_navigations_edit_content(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__57897_SHARP_),new cljs.core.Keyword(null,"navs","navs",-1350609868),navs,new cljs.core.Keyword(null,"checked-navs","checked-navs",774369896),checked_navs,new cljs.core.Keyword(null,"set-checked-navs!","set-checked-navs!",-2081871382),set_checked_navs_BANG_], null));
});
var G__57911 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-dropdown?","as-dropdown?",-37553558),false], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__57909,G__57910,G__57911) : logseq.shui.ui.popup_show_BANG_.call(null,G__57909,G__57910,G__57911));
} else {
return null;
}
})], null),new cljs.core.Keyword(null,"more","more",-2058821800),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.as-edit","a.as-edit",1392106955),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"!opacity-60 hover:!opacity-80 relative -top-0.5 -right-0.5"], null),logseq.shui.ui.tabler_icon("filter-edit",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sidebar-navigations.flex.flex-col.mt-1","div.sidebar-navigations.flex.flex-col.mt-1",-947305194),(function (){var page = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(default_home);
if(cljs.core.truth_(page)){
return frontend.components.left_sidebar.sidebar_item(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),"home-nav",new cljs.core.Keyword(null,"title","title",636505583),page,new cljs.core.Keyword(null,"on-click-handler","on-click-handler",746440723),frontend.handler.route.redirect_to_home_BANG_,new cljs.core.Keyword(null,"active","active",1895962068),((cljs.core.not(srs_open_QMARK_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route_name,new cljs.core.Keyword(null,"page","page",849072397))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"name","name",1843675177)], null))))))),new cljs.core.Keyword(null,"icon","icon",1679606541),"home",new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),new cljs.core.Keyword("go","home","go/home",-74562325)], null));
} else {
return frontend.components.left_sidebar.sidebar_item(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),"journals-nav",new cljs.core.Keyword(null,"active","active",1895962068),((cljs.core.not(srs_open_QMARK_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route_name,new cljs.core.Keyword(null,"all-journals","all-journals",-347015095))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route_name,new cljs.core.Keyword(null,"home","home",-74557309)))))),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nav","journals","nav/journals",-1915603168)], 0)),new cljs.core.Keyword(null,"on-click-handler","on-click-handler",746440723),(function (e){
if(cljs.core.truth_(frontend.components.left_sidebar.goog$module$goog$object.get(e,"shiftKey"))){
return frontend.handler.route.sidebar_journals_BANG_();
} else {
return frontend.handler.route.go_to_journals_BANG_();
}
}),new cljs.core.Keyword(null,"icon","icon",1679606541),"calendar",new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),new cljs.core.Keyword("go","journals","go/journals",-1915759787)], null));
}
})(),(function (){var iter__5628__auto__ = (function frontend$components$left_sidebar$sidebar_navigations_loaded_$_iter__57912(s__57913){
return (new cljs.core.LazySeq(null,(function (){
var s__57913__$1 = s__57913;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__57913__$1);
if(temp__5825__auto__){
var s__57913__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57913__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__57913__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__57915 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__57914 = (0);
while(true){
if((i__57914 < size__5627__auto__)){
var nav = cljs.core._nth(c__5626__auto__,i__57914);
cljs.core.chunk_append(b__57915,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nav,new cljs.core.Keyword(null,"flashcards","flashcards",2038329166)))?((frontend.state.enable_flashcards_QMARK_.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo()))?(function (){var num = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("srs","cards-due-count","srs/cards-due-count",950004746)], null));
return frontend.components.left_sidebar.sidebar_item(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"class","class",-2030961996),"flashcards-nav",new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nav","flashcards","nav/flashcards",2038178913)], 0)),new cljs.core.Keyword(null,"icon","icon",1679606541),"cards",new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),new cljs.core.Keyword("go","flashcards","go/flashcards",2038317222),new cljs.core.Keyword(null,"active","active",1895962068),srs_open_QMARK_,new cljs.core.Keyword(null,"on-click-handler","on-click-handler",746440723),((function (i__57914,num,nav,c__5626__auto__,size__5627__auto__,b__57915,s__57913__$2,temp__5825__auto__,navs,_preferred_language,repo,db_worker_ready_QMARK_,vec__57900,class_ident__GT_uuid,set_class_ident__GT_uuid_BANG_,vec__57903,checked_navs,set_checked_navs_BANG_,map__57899,map__57899__$1,default_home,route_match,route_name,srs_open_QMARK_){
return (function (){
frontend.extensions.fsrs.update_due_cards_count();

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","show-cards","modal/show-cards",1918730906)], null));
});})(i__57914,num,nav,c__5626__auto__,size__5627__auto__,b__57915,s__57913__$2,temp__5825__auto__,navs,_preferred_language,repo,db_worker_ready_QMARK_,vec__57900,class_ident__GT_uuid,set_class_ident__GT_uuid_BANG_,vec__57903,checked_navs,set_checked_navs_BANG_,map__57899,map__57899__$1,default_home,route_match,route_name,srs_open_QMARK_))
,new cljs.core.Keyword(null,"more","more",-2058821800),(cljs.core.truth_((function (){var and__5140__auto__ = num;
if(cljs.core.truth_(and__5140__auto__)){
return (!((num === (0))));
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ml-1.inline-block.py-0.5.px-3.text-xs.font-medium.rounded-full.fade-in","span.ml-1.inline-block.py-0.5.px-3.text-xs.font-medium.rounded-full.fade-in",-2063677125),num], null):null)], null));
})():null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nav,new cljs.core.Keyword(null,"graph-view","graph-view",-233626947)))?frontend.components.left_sidebar.sidebar_item(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),"graph-view-nav",new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nav","graph-view","nav/graph-view",-233600484)], 0)),new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"graph","graph",1558099509)),new cljs.core.Keyword(null,"active","active",1895962068),((cljs.core.not(srs_open_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route_name,new cljs.core.Keyword(null,"graph","graph",1558099509)))),new cljs.core.Keyword(null,"icon","icon",1679606541),"hierarchy",new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),new cljs.core.Keyword("go","graph-view","go/graph-view",-233622043)], null)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nav,new cljs.core.Keyword(null,"all-pages","all-pages",1017563062)))?frontend.components.left_sidebar.sidebar_item(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"all-pages-nav",new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nav.all-pages","label","nav.all-pages/label",437498813)], 0)),new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"all-pages","all-pages",1017563062)),new cljs.core.Keyword(null,"active","active",1895962068),((cljs.core.not(srs_open_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route_name,new cljs.core.Keyword(null,"all-pages","all-pages",1017563062)))),new cljs.core.Keyword(null,"icon","icon",1679606541),"files"], null)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(nav),"tag"))?(function (){var name_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.name(nav);
var class_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, ["assets",new cljs.core.Keyword("logseq.class","Asset","logseq.class/Asset",-797502970),"tasks",new cljs.core.Keyword("logseq.class","Task","logseq.class/Task",-1282181457)], null),name_SINGLEQUOTE__SINGLEQUOTE_);
var temp__5825__auto____$1 = (function (){var and__5140__auto__ = class_ident;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class_ident__GT_uuid,class_ident);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto____$1)){
var tag_uuid = temp__5825__auto____$1;
return frontend.components.left_sidebar.sidebar_item(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"tag-view-nav "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_SINGLEQUOTE__SINGLEQUOTE_)),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.components.left_sidebar.navigation_label_key(nav)], 0)),new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),tag_uuid], null)),new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_uuid)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"name","name",1843675177)], null))),new cljs.core.Keyword(null,"icon","icon",1679606541),"hash"], null));
} else {
return null;
}
})():null)))));

var G__58008 = (i__57914 + (1));
i__57914 = G__58008;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57915),frontend$components$left_sidebar$sidebar_navigations_loaded_$_iter__57912(cljs.core.chunk_rest(s__57913__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57915),null);
}
} else {
var nav = cljs.core.first(s__57913__$2);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nav,new cljs.core.Keyword(null,"flashcards","flashcards",2038329166)))?((frontend.state.enable_flashcards_QMARK_.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo()))?(function (){var num = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("srs","cards-due-count","srs/cards-due-count",950004746)], null));
return frontend.components.left_sidebar.sidebar_item(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"class","class",-2030961996),"flashcards-nav",new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nav","flashcards","nav/flashcards",2038178913)], 0)),new cljs.core.Keyword(null,"icon","icon",1679606541),"cards",new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),new cljs.core.Keyword("go","flashcards","go/flashcards",2038317222),new cljs.core.Keyword(null,"active","active",1895962068),srs_open_QMARK_,new cljs.core.Keyword(null,"on-click-handler","on-click-handler",746440723),((function (num,nav,s__57913__$2,temp__5825__auto__,navs,_preferred_language,repo,db_worker_ready_QMARK_,vec__57900,class_ident__GT_uuid,set_class_ident__GT_uuid_BANG_,vec__57903,checked_navs,set_checked_navs_BANG_,map__57899,map__57899__$1,default_home,route_match,route_name,srs_open_QMARK_){
return (function (){
frontend.extensions.fsrs.update_due_cards_count();

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","show-cards","modal/show-cards",1918730906)], null));
});})(num,nav,s__57913__$2,temp__5825__auto__,navs,_preferred_language,repo,db_worker_ready_QMARK_,vec__57900,class_ident__GT_uuid,set_class_ident__GT_uuid_BANG_,vec__57903,checked_navs,set_checked_navs_BANG_,map__57899,map__57899__$1,default_home,route_match,route_name,srs_open_QMARK_))
,new cljs.core.Keyword(null,"more","more",-2058821800),(cljs.core.truth_((function (){var and__5140__auto__ = num;
if(cljs.core.truth_(and__5140__auto__)){
return (!((num === (0))));
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ml-1.inline-block.py-0.5.px-3.text-xs.font-medium.rounded-full.fade-in","span.ml-1.inline-block.py-0.5.px-3.text-xs.font-medium.rounded-full.fade-in",-2063677125),num], null):null)], null));
})():null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nav,new cljs.core.Keyword(null,"graph-view","graph-view",-233626947)))?frontend.components.left_sidebar.sidebar_item(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),"graph-view-nav",new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nav","graph-view","nav/graph-view",-233600484)], 0)),new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"graph","graph",1558099509)),new cljs.core.Keyword(null,"active","active",1895962068),((cljs.core.not(srs_open_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route_name,new cljs.core.Keyword(null,"graph","graph",1558099509)))),new cljs.core.Keyword(null,"icon","icon",1679606541),"hierarchy",new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),new cljs.core.Keyword("go","graph-view","go/graph-view",-233622043)], null)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nav,new cljs.core.Keyword(null,"all-pages","all-pages",1017563062)))?frontend.components.left_sidebar.sidebar_item(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"all-pages-nav",new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nav.all-pages","label","nav.all-pages/label",437498813)], 0)),new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"all-pages","all-pages",1017563062)),new cljs.core.Keyword(null,"active","active",1895962068),((cljs.core.not(srs_open_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route_name,new cljs.core.Keyword(null,"all-pages","all-pages",1017563062)))),new cljs.core.Keyword(null,"icon","icon",1679606541),"files"], null)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(nav),"tag"))?(function (){var name_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.name(nav);
var class_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, ["assets",new cljs.core.Keyword("logseq.class","Asset","logseq.class/Asset",-797502970),"tasks",new cljs.core.Keyword("logseq.class","Task","logseq.class/Task",-1282181457)], null),name_SINGLEQUOTE__SINGLEQUOTE_);
var temp__5825__auto____$1 = (function (){var and__5140__auto__ = class_ident;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class_ident__GT_uuid,class_ident);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto____$1)){
var tag_uuid = temp__5825__auto____$1;
return frontend.components.left_sidebar.sidebar_item(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"tag-view-nav "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_SINGLEQUOTE__SINGLEQUOTE_)),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.components.left_sidebar.navigation_label_key(nav)], 0)),new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),tag_uuid], null)),new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_uuid)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"name","name",1843675177)], null))),new cljs.core.Keyword(null,"icon","icon",1679606541),"hash"], null));
} else {
return null;
}
})():null)))),frontend$components$left_sidebar$sidebar_navigations_loaded_$_iter__57912(cljs.core.rest(s__57913__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(checked_navs);
})()], null));
});
var comp__31745__auto__ = (function() { 
var frontend$components$left_sidebar$sidebar_navigations_loaded__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__57916 = cljs.core.first(args__31746__auto__);
var G__57917 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__57916,G__57917) : io.factorhouse.hsx.core.obj_get.call(null,G__57916,G__57917));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"sidebar-navigations-loaded","sidebar-navigations-loaded",684926119,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$left_sidebar$sidebar_navigations_loaded,args__31746__auto__,null);
}
};
var frontend$components$left_sidebar$sidebar_navigations_loaded = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58009__i = 0, G__58009__a = new Array(arguments.length -  0);
while (G__58009__i < G__58009__a.length) {G__58009__a[G__58009__i] = arguments[G__58009__i + 0]; ++G__58009__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58009__a,0,null);
} 
return frontend$components$left_sidebar$sidebar_navigations_loaded__delegate.call(this,args__31746__auto__);};
frontend$components$left_sidebar$sidebar_navigations_loaded.cljs$lang$maxFixedArity = 0;
frontend$components$left_sidebar$sidebar_navigations_loaded.cljs$lang$applyTo = (function (arglist__58010){
var args__31746__auto__ = cljs.core.seq(arglist__58010);
return frontend$components$left_sidebar$sidebar_navigations_loaded__delegate(args__31746__auto__);
});
frontend$components$left_sidebar$sidebar_navigations_loaded.cljs$core$IFn$_invoke$arity$variadic = frontend$components$left_sidebar$sidebar_navigations_loaded__delegate;
return frontend$components$left_sidebar$sidebar_navigations_loaded;
})()
;
var memo_comp__31747__auto__ = (function (){var G__57918 = comp__31745__auto__;
var G__57919 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__57918,G__57919) : io.factorhouse.hsx.core.react_memo.call(null,G__57918,G__57919));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"sidebar-navigations-loaded");

return comp__31745__auto__;
})();
frontend.components.left_sidebar.sidebar_navigations = (function (){var render_fn__31744__auto__ = (function frontend$components$left_sidebar$sidebar_navigations(opts){
var db_restoring_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","restoring?","db/restoring?",-1653366233)], null));
if(cljs.core.truth_(db_restoring_QMARK_)){
return null;
} else {
return frontend.components.left_sidebar.sidebar_navigations_loaded(opts);
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$left_sidebar$sidebar_navigations__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__57920 = cljs.core.first(args__31746__auto__);
var G__57921 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__57920,G__57921) : io.factorhouse.hsx.core.obj_get.call(null,G__57920,G__57921));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"sidebar-navigations","sidebar-navigations",-1291186029,null),args__31746__auto__),frontend$components$left_sidebar$sidebar_navigations,args__31746__auto__,null);
}
};
var frontend$components$left_sidebar$sidebar_navigations = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58011__i = 0, G__58011__a = new Array(arguments.length -  0);
while (G__58011__i < G__58011__a.length) {G__58011__a[G__58011__i] = arguments[G__58011__i + 0]; ++G__58011__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58011__a,0,null);
} 
return frontend$components$left_sidebar$sidebar_navigations__delegate.call(this,args__31746__auto__);};
frontend$components$left_sidebar$sidebar_navigations.cljs$lang$maxFixedArity = 0;
frontend$components$left_sidebar$sidebar_navigations.cljs$lang$applyTo = (function (arglist__58012){
var args__31746__auto__ = cljs.core.seq(arglist__58012);
return frontend$components$left_sidebar$sidebar_navigations__delegate(args__31746__auto__);
});
frontend$components$left_sidebar$sidebar_navigations.cljs$core$IFn$_invoke$arity$variadic = frontend$components$left_sidebar$sidebar_navigations__delegate;
return frontend$components$left_sidebar$sidebar_navigations;
})()
;
var memo_comp__31747__auto__ = (function (){var G__57922 = comp__31745__auto__;
var G__57923 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__57922,G__57923) : io.factorhouse.hsx.core.react_memo.call(null,G__57922,G__57923));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"sidebar-navigations");

return comp__31745__auto__;
})();
frontend.components.left_sidebar.sidebar_favorites_loaded = (function (){var render_fn__31744__auto__ = (function frontend$components$left_sidebar$sidebar_favorites_loaded(){
var _preferred_language = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017)], null));
var favorite_entities = frontend.db.hooks.use_resource(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"favorites","favorites",1740773480)], null));
return frontend.components.left_sidebar.sidebar_content_group(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.wrap-th","a.wrap-th",1385261646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.flex-1","strong.flex-1",-332188689),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sidebar.left","favorites","sidebar.left/favorites",1589547215)], 0))], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"favorites",new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.count(favorite_entities),new cljs.core.Keyword(null,"edit-fn","edit-fn",-1974067620),(function (e){
reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Favorites"], null));

return frontend.util.stop(e);
})], null),((cljs.core.seq(favorite_entities))?(function (){var favorite_items = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (e){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(e))),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.favorite-item.font-medium","li.favorite-item.font-medium",692268096),frontend.components.left_sidebar.page_name(e,false)], null)], null);
}),favorite_entities);
return frontend.components.dnd.items(favorite_items,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671),(function (favorites_SINGLEQUOTE_){
return frontend.handler.page._LT_reorder_favorites_BANG_(favorites_SINGLEQUOTE_);
}),new cljs.core.Keyword(null,"parent-node","parent-node",-605954869),new cljs.core.Keyword(null,"ul.favorites.text-sm","ul.favorites.text-sm",800189534)], null));
})():null));
});
var comp__31745__auto__ = (function() { 
var frontend$components$left_sidebar$sidebar_favorites_loaded__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__57924 = cljs.core.first(args__31746__auto__);
var G__57925 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__57924,G__57925) : io.factorhouse.hsx.core.obj_get.call(null,G__57924,G__57925));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"sidebar-favorites-loaded","sidebar-favorites-loaded",-688344076,null),args__31746__auto__),frontend$components$left_sidebar$sidebar_favorites_loaded,args__31746__auto__,null);
}
};
var frontend$components$left_sidebar$sidebar_favorites_loaded = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58013__i = 0, G__58013__a = new Array(arguments.length -  0);
while (G__58013__i < G__58013__a.length) {G__58013__a[G__58013__i] = arguments[G__58013__i + 0]; ++G__58013__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58013__a,0,null);
} 
return frontend$components$left_sidebar$sidebar_favorites_loaded__delegate.call(this,args__31746__auto__);};
frontend$components$left_sidebar$sidebar_favorites_loaded.cljs$lang$maxFixedArity = 0;
frontend$components$left_sidebar$sidebar_favorites_loaded.cljs$lang$applyTo = (function (arglist__58014){
var args__31746__auto__ = cljs.core.seq(arglist__58014);
return frontend$components$left_sidebar$sidebar_favorites_loaded__delegate(args__31746__auto__);
});
frontend$components$left_sidebar$sidebar_favorites_loaded.cljs$core$IFn$_invoke$arity$variadic = frontend$components$left_sidebar$sidebar_favorites_loaded__delegate;
return frontend$components$left_sidebar$sidebar_favorites_loaded;
})()
;
var memo_comp__31747__auto__ = (function (){var G__57926 = comp__31745__auto__;
var G__57927 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__57926,G__57927) : io.factorhouse.hsx.core.react_memo.call(null,G__57926,G__57927));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"sidebar-favorites-loaded");

return comp__31745__auto__;
})();
frontend.components.left_sidebar.sidebar_favorites = (function (){var render_fn__31744__auto__ = (function frontend$components$left_sidebar$sidebar_favorites(){
var db_restoring_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","restoring?","db/restoring?",-1653366233)], null));
if(cljs.core.truth_(db_restoring_QMARK_)){
return null;
} else {
return frontend.components.left_sidebar.sidebar_favorites_loaded();
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$left_sidebar$sidebar_favorites__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__57928 = cljs.core.first(args__31746__auto__);
var G__57929 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__57928,G__57929) : io.factorhouse.hsx.core.obj_get.call(null,G__57928,G__57929));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"sidebar-favorites","sidebar-favorites",-1672957070,null),args__31746__auto__),frontend$components$left_sidebar$sidebar_favorites,args__31746__auto__,null);
}
};
var frontend$components$left_sidebar$sidebar_favorites = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58015__i = 0, G__58015__a = new Array(arguments.length -  0);
while (G__58015__i < G__58015__a.length) {G__58015__a[G__58015__i] = arguments[G__58015__i + 0]; ++G__58015__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58015__a,0,null);
} 
return frontend$components$left_sidebar$sidebar_favorites__delegate.call(this,args__31746__auto__);};
frontend$components$left_sidebar$sidebar_favorites.cljs$lang$maxFixedArity = 0;
frontend$components$left_sidebar$sidebar_favorites.cljs$lang$applyTo = (function (arglist__58016){
var args__31746__auto__ = cljs.core.seq(arglist__58016);
return frontend$components$left_sidebar$sidebar_favorites__delegate(args__31746__auto__);
});
frontend$components$left_sidebar$sidebar_favorites.cljs$core$IFn$_invoke$arity$variadic = frontend$components$left_sidebar$sidebar_favorites__delegate;
return frontend$components$left_sidebar$sidebar_favorites;
})()
;
var memo_comp__31747__auto__ = (function (){var G__57930 = comp__31745__auto__;
var G__57931 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__57930,G__57931) : io.factorhouse.hsx.core.react_memo.call(null,G__57930,G__57931));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"sidebar-favorites");

return comp__31745__auto__;
})();
frontend.components.left_sidebar.sidebar_recent_pages_loaded = (function (){var render_fn__31744__auto__ = (function frontend$components$left_sidebar$sidebar_recent_pages_loaded(){
var _preferred_language = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017)], null));
var current_repo = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("git","current-repo","git/current-repo",107438825)], null));
var recent_page_ids = cljs.core.vec(frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","recent-pages","ui/recent-pages",1527475247),current_repo], null)));
var pages = frontend.db.hooks.use_resource(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recent-pages","recent-pages",1527471771),recent_page_ids], null));
return frontend.components.left_sidebar.sidebar_content_group(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.wrap-th","a.wrap-th",1385261646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.flex-1","strong.flex-1",-332188689),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sidebar.left","recent-pages","sidebar.left/recent-pages",1678042374)], 0))], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"recent",new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.count(pages)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.text-sm","ul.text-sm",423832983),(function (){var iter__5628__auto__ = (function frontend$components$left_sidebar$sidebar_recent_pages_loaded_$_iter__57932(s__57933){
return (new cljs.core.LazySeq(null,(function (){
var s__57933__$1 = s__57933;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__57933__$1);
if(temp__5825__auto__){
var s__57933__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57933__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__57933__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__57935 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__57934 = (0);
while(true){
if((i__57934 < size__5627__auto__)){
var page = cljs.core._nth(c__5626__auto__,i__57934);
cljs.core.chunk_append(b__57935,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.recent-item.select-none.font-medium","li.recent-item.select-none.font-medium",-1331506661),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"recent-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page)))], null),frontend.components.left_sidebar.page_name(page,true)], null));

var G__58017 = (i__57934 + (1));
i__57934 = G__58017;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57935),frontend$components$left_sidebar$sidebar_recent_pages_loaded_$_iter__57932(cljs.core.chunk_rest(s__57933__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57935),null);
}
} else {
var page = cljs.core.first(s__57933__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.recent-item.select-none.font-medium","li.recent-item.select-none.font-medium",-1331506661),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"recent-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page)))], null),frontend.components.left_sidebar.page_name(page,true)], null),frontend$components$left_sidebar$sidebar_recent_pages_loaded_$_iter__57932(cljs.core.rest(s__57933__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(pages);
})()], null));
});
var comp__31745__auto__ = (function() { 
var frontend$components$left_sidebar$sidebar_recent_pages_loaded__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__57936 = cljs.core.first(args__31746__auto__);
var G__57937 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__57936,G__57937) : io.factorhouse.hsx.core.obj_get.call(null,G__57936,G__57937));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"sidebar-recent-pages-loaded","sidebar-recent-pages-loaded",-1963297026,null),args__31746__auto__),frontend$components$left_sidebar$sidebar_recent_pages_loaded,args__31746__auto__,null);
}
};
var frontend$components$left_sidebar$sidebar_recent_pages_loaded = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58018__i = 0, G__58018__a = new Array(arguments.length -  0);
while (G__58018__i < G__58018__a.length) {G__58018__a[G__58018__i] = arguments[G__58018__i + 0]; ++G__58018__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58018__a,0,null);
} 
return frontend$components$left_sidebar$sidebar_recent_pages_loaded__delegate.call(this,args__31746__auto__);};
frontend$components$left_sidebar$sidebar_recent_pages_loaded.cljs$lang$maxFixedArity = 0;
frontend$components$left_sidebar$sidebar_recent_pages_loaded.cljs$lang$applyTo = (function (arglist__58019){
var args__31746__auto__ = cljs.core.seq(arglist__58019);
return frontend$components$left_sidebar$sidebar_recent_pages_loaded__delegate(args__31746__auto__);
});
frontend$components$left_sidebar$sidebar_recent_pages_loaded.cljs$core$IFn$_invoke$arity$variadic = frontend$components$left_sidebar$sidebar_recent_pages_loaded__delegate;
return frontend$components$left_sidebar$sidebar_recent_pages_loaded;
})()
;
var memo_comp__31747__auto__ = (function (){var G__57938 = comp__31745__auto__;
var G__57939 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__57938,G__57939) : io.factorhouse.hsx.core.react_memo.call(null,G__57938,G__57939));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"sidebar-recent-pages-loaded");

return comp__31745__auto__;
})();
frontend.components.left_sidebar.sidebar_recent_pages = (function (){var render_fn__31744__auto__ = (function frontend$components$left_sidebar$sidebar_recent_pages(){
var db_restoring_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","restoring?","db/restoring?",-1653366233)], null));
if(cljs.core.truth_(db_restoring_QMARK_)){
return null;
} else {
return frontend.components.left_sidebar.sidebar_recent_pages_loaded();
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$left_sidebar$sidebar_recent_pages__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__57940 = cljs.core.first(args__31746__auto__);
var G__57941 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__57940,G__57941) : io.factorhouse.hsx.core.obj_get.call(null,G__57940,G__57941));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"sidebar-recent-pages","sidebar-recent-pages",-542440782,null),args__31746__auto__),frontend$components$left_sidebar$sidebar_recent_pages,args__31746__auto__,null);
}
};
var frontend$components$left_sidebar$sidebar_recent_pages = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58020__i = 0, G__58020__a = new Array(arguments.length -  0);
while (G__58020__i < G__58020__a.length) {G__58020__a[G__58020__i] = arguments[G__58020__i + 0]; ++G__58020__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58020__a,0,null);
} 
return frontend$components$left_sidebar$sidebar_recent_pages__delegate.call(this,args__31746__auto__);};
frontend$components$left_sidebar$sidebar_recent_pages.cljs$lang$maxFixedArity = 0;
frontend$components$left_sidebar$sidebar_recent_pages.cljs$lang$applyTo = (function (arglist__58021){
var args__31746__auto__ = cljs.core.seq(arglist__58021);
return frontend$components$left_sidebar$sidebar_recent_pages__delegate(args__31746__auto__);
});
frontend$components$left_sidebar$sidebar_recent_pages.cljs$core$IFn$_invoke$arity$variadic = frontend$components$left_sidebar$sidebar_recent_pages__delegate;
return frontend$components$left_sidebar$sidebar_recent_pages;
})()
;
var memo_comp__31747__auto__ = (function (){var G__57942 = comp__31745__auto__;
var G__57943 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__57942,G__57943) : io.factorhouse.hsx.core.react_memo.call(null,G__57942,G__57943));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"sidebar-recent-pages");

return comp__31745__auto__;
})();
frontend.components.left_sidebar.sidebar_container = (function (){var render_fn__31744__auto__ = (function frontend$components$left_sidebar$sidebar_container(route_match,close_modal_fn,left_sidebar_open_QMARK_,srs_open_QMARK_,_STAR_closing_QMARK_,close_signal,touching_x_offset){
var vec__57946 = logseq.shui.hooks.use_state(false);
var local_closing_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57946,(0),null);
var set_local_closing_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57946,(1),null);
var vec__57949 = logseq.shui.hooks.use_state(null);
var el_rect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57949,(0),null);
var set_el_rect_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57949,(1),null);
var ref_el = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var ref_open_QMARK_ = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(left_sidebar_open_QMARK_) : logseq.shui.hooks.use_ref.call(null,left_sidebar_open_QMARK_));
var default_home = frontend.components.left_sidebar.use_default_home_if_valid();
var route_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var on_contents_scroll = (function (p1__57944_SHARP_){
var temp__5825__auto__ = p1__57944_SHARP_.target;
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
var top = el.scrollTop;
var cls = el.classList;
var cls_SINGLEQUOTE_ = "is-scrolled";
if((top > (2))){
return cls.add(cls_SINGLEQUOTE_);
} else {
return cls.remove(cls_SINGLEQUOTE_);
}
} else {
return null;
}
});
var close_fn = (function (){
return (set_local_closing_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_local_closing_QMARK_.cljs$core$IFn$_invoke$arity$1(true) : set_local_closing_QMARK_.call(null,true));
});
var touching_x_offset__$1 = ((typeof touching_x_offset === 'number')?((cljs.core.not(left_sidebar_open_QMARK_))?(((touching_x_offset > (0)))?cljs.core.min.cljs$core$IFn$_invoke$arity$2(touching_x_offset,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(el_rect)):null):(((touching_x_offset < (0)))?cljs.core.max.cljs$core$IFn$_invoke$arity$2(touching_x_offset,((0) - new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(el_rect))):null)):null);
var offset_ratio = (function (){var and__5140__auto__ = typeof touching_x_offset__$1 === 'number';
if(and__5140__auto__){
var G__57952 = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(el_rect);
if((G__57952 == null)){
return null;
} else {
return (touching_x_offset__$1 / G__57952);
}
} else {
return and__5140__auto__;
}
})();
logseq.shui.hooks.use_effect_BANG_((function (){
return setTimeout((function (){
var G__57953 = logseq.shui.hooks.deref(ref_el);
var G__57953__$1 = (((G__57953 == null))?null:G__57953.getBoundingClientRect());
var G__57953__$2 = (((G__57953__$1 == null))?null:G__57953__$1.toJSON());
var G__57953__$3 = (((G__57953__$2 == null))?null:cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(G__57953__$2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
if((G__57953__$3 == null)){
return null;
} else {
return (set_el_rect_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_el_rect_BANG_.cljs$core$IFn$_invoke$arity$1(G__57953__$3) : set_el_rect_BANG_.call(null,G__57953__$3));
}
}),(16));
}),cljs.core.PersistentVector.EMPTY);

logseq.shui.hooks.use_layout_effect_BANG_((function (){
if(cljs.core.truth_((function (){var and__5140__auto__ = logseq.shui.hooks.deref(ref_open_QMARK_);
if(cljs.core.truth_(and__5140__auto__)){
return local_closing_QMARK_;
} else {
return and__5140__auto__;
}
})())){
cljs.core.reset_BANG_(_STAR_closing_QMARK_,true);
} else {
}

logseq.shui.hooks.set_ref_BANG_(ref_open_QMARK_,left_sidebar_open_QMARK_);

return (function (){
return cljs.core.List.EMPTY;
});
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [local_closing_QMARK_,left_sidebar_open_QMARK_], null));

logseq.shui.hooks.use_effect_BANG_((function (){
if((close_signal < (0))){
return null;
} else {
return close_fn();
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [close_signal], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.left-sidebar-inner.as-container.flex-1.flex.flex-col.min-h-0","div.left-sidebar-inner.as-container.flex-1.flex.flex-col.min-h-0",1735106098),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),"left-sidebar",new cljs.core.Keyword(null,"ref","ref",1289896967),ref_el,new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__57954 = cljs.core.PersistentArrayMap.EMPTY;
var G__57954__$1 = ((((typeof offset_ratio === 'number') && ((touching_x_offset__$1 > (0)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57954,new cljs.core.Keyword(null,"transform","transform",1381301764),(""+"translate3d(calc("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(touching_x_offset__$1)+"px - 100%), 0, 0)")):G__57954);
if(((typeof offset_ratio === 'number') && ((touching_x_offset__$1 < (0))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57954__$1,new cljs.core.Keyword(null,"transform","transform",1381301764),(""+"translate3d("+cljs.core.str.cljs$core$IFn$_invoke$arity$1((offset_ratio * (100)))+"%, 0, 0)"));
} else {
return G__57954__$1;
}
})(),new cljs.core.Keyword(null,"on-transition-end","on-transition-end",-1169027318),(function (){
if(cljs.core.truth_(local_closing_QMARK_)){
cljs.core.reset_BANG_(_STAR_closing_QMARK_,false);

(set_local_closing_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_local_closing_QMARK_.cljs$core$IFn$_invoke$arity$1(false) : set_local_closing_QMARK_.call(null,false));

return (close_modal_fn.cljs$core$IFn$_invoke$arity$0 ? close_modal_fn.cljs$core$IFn$_invoke$arity$0() : close_modal_fn.call(null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__57945_SHARP_){
var temp__5825__auto__ = (function (){var and__5140__auto__ = frontend.util.sm_breakpoint_QMARK_();
if(and__5140__auto__){
return p1__57945_SHARP_.target;
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var target = temp__5825__auto__;
if(frontend.components.left_sidebar_util.mobile_navigation_target_QMARK_(target)){
return close_fn();
} else {
return null;
}
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.wrap","div.wrap",1832950772),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sidebar-header-container","div.sidebar-header-container",-785300881),(((!(frontend.config.publishing_QMARK_)))?frontend.components.left_sidebar.sidebar_graphs():null),frontend.components.left_sidebar.sidebar_navigations(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-home","default-home",171104159),default_home,new cljs.core.Keyword(null,"route-match","route-match",-1450985937),route_match,new cljs.core.Keyword(null,"route-name","route-name",-932603717),route_name,new cljs.core.Keyword(null,"srs-open?","srs-open?",407120677),srs_open_QMARK_], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sidebar-contents-container","div.sidebar-contents-container",1663558839),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-scroll","on-scroll",1590848677),on_contents_scroll], null),frontend.components.left_sidebar.sidebar_favorites(),(((!(frontend.config.publishing_QMARK_)))?frontend.components.left_sidebar.sidebar_recent_pages():null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shade-mask","span.shade-mask",-2004250283),(function (){var G__57955 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),close_fn,new cljs.core.Keyword(null,"key","key",-1516042587),"shade-mask"], null);
if(typeof offset_ratio === 'number'){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57955,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(function (){var G__57956 = offset_ratio;
if((offset_ratio < (0))){
return (G__57956 + (1));
} else {
return G__57956;
}
})()], null));
} else {
return G__57955;
}
})()], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$left_sidebar$sidebar_container__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__57957 = cljs.core.first(args__31746__auto__);
var G__57958 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__57957,G__57958) : io.factorhouse.hsx.core.obj_get.call(null,G__57957,G__57958));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"sidebar-container","sidebar-container",980681473,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$left_sidebar$sidebar_container,args__31746__auto__,null);
}
};
var frontend$components$left_sidebar$sidebar_container = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58022__i = 0, G__58022__a = new Array(arguments.length -  0);
while (G__58022__i < G__58022__a.length) {G__58022__a[G__58022__i] = arguments[G__58022__i + 0]; ++G__58022__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58022__a,0,null);
} 
return frontend$components$left_sidebar$sidebar_container__delegate.call(this,args__31746__auto__);};
frontend$components$left_sidebar$sidebar_container.cljs$lang$maxFixedArity = 0;
frontend$components$left_sidebar$sidebar_container.cljs$lang$applyTo = (function (arglist__58023){
var args__31746__auto__ = cljs.core.seq(arglist__58023);
return frontend$components$left_sidebar$sidebar_container__delegate(args__31746__auto__);
});
frontend$components$left_sidebar$sidebar_container.cljs$core$IFn$_invoke$arity$variadic = frontend$components$left_sidebar$sidebar_container__delegate;
return frontend$components$left_sidebar$sidebar_container;
})()
;
var memo_comp__31747__auto__ = (function (){var G__57959 = comp__31745__auto__;
var G__57960 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__57959,G__57960) : io.factorhouse.hsx.core.react_memo.call(null,G__57959,G__57960));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"sidebar-container");

return comp__31745__auto__;
})();
frontend.components.left_sidebar.sidebar_resizer = (function (){var render_fn__31744__auto__ = (function frontend$components$left_sidebar$sidebar_resizer(){
var _STAR_el_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var el_doc = document.documentElement;
var adjust_size_BANG_ = (function (width){
el_doc.style.setProperty("--ls-left-sidebar-width",width);

return frontend.storage.set(new cljs.core.Keyword(null,"ls-left-sidebar-width","ls-left-sidebar-width",1579560028),width);
});
logseq.shui.hooks.use_layout_effect_BANG_.cljs$core$IFn$_invoke$arity$1((function (){
var temp__5825__auto__ = frontend.storage.get(new cljs.core.Keyword(null,"ls-left-sidebar-width","ls-left-sidebar-width",1579560028));
if(cljs.core.truth_(temp__5825__auto__)){
var width = temp__5825__auto__;
return el_doc.style.setProperty("--ls-left-sidebar-width",width);
} else {
return null;
}
}));

logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto__ = (function (){var and__5140__auto__ = cljs.core.fn_QMARK_(window.interact);
if(and__5140__auto__){
return logseq.shui.hooks.deref(_STAR_el_ref);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
var sidebar_el_58024 = el_doc.querySelector("#left-sidebar");
interact(el).draggable(({"listeners": ({"move": (function (e){
var temp__5825__auto____$1 = e.rect.left;
if(cljs.core.truth_(temp__5825__auto____$1)){
var offset = temp__5825__auto____$1;
var width = cljs.core.max.cljs$core$IFn$_invoke$arity$2(cljs.core.min.cljs$core$IFn$_invoke$arity$2(offset,(460)),(240)).toFixed((2));
return adjust_size_BANG_((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(width)+"px"));
} else {
return null;
}
})})})).styleCursor(false).on("dragstart",(function (){
sidebar_el_58024.classList.add("is-resizing");

return el_doc.classList.add("is-resizing-buf");
})).on("dragend",(function (){
sidebar_el_58024.classList.remove("is-resizing");

el_doc.classList.remove("is-resizing-buf");

return cljs.core.reset_BANG_(frontend.handler.ui._STAR_left_sidebar_resized_at,Date.now());
}));

return (function (){
return cljs.core.List.EMPTY;
});
} else {
return null;
}
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.left-sidebar-resizer","span.left-sidebar-resizer",1497676233),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el_ref], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$left_sidebar$sidebar_resizer__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__57961 = cljs.core.first(args__31746__auto__);
var G__57962 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__57961,G__57962) : io.factorhouse.hsx.core.obj_get.call(null,G__57961,G__57962));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"sidebar-resizer","sidebar-resizer",1448918789,null),args__31746__auto__),frontend$components$left_sidebar$sidebar_resizer,args__31746__auto__,null);
}
};
var frontend$components$left_sidebar$sidebar_resizer = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58025__i = 0, G__58025__a = new Array(arguments.length -  0);
while (G__58025__i < G__58025__a.length) {G__58025__a[G__58025__i] = arguments[G__58025__i + 0]; ++G__58025__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58025__a,0,null);
} 
return frontend$components$left_sidebar$sidebar_resizer__delegate.call(this,args__31746__auto__);};
frontend$components$left_sidebar$sidebar_resizer.cljs$lang$maxFixedArity = 0;
frontend$components$left_sidebar$sidebar_resizer.cljs$lang$applyTo = (function (arglist__58026){
var args__31746__auto__ = cljs.core.seq(arglist__58026);
return frontend$components$left_sidebar$sidebar_resizer__delegate(args__31746__auto__);
});
frontend$components$left_sidebar$sidebar_resizer.cljs$core$IFn$_invoke$arity$variadic = frontend$components$left_sidebar$sidebar_resizer__delegate;
return frontend$components$left_sidebar$sidebar_resizer;
})()
;
var memo_comp__31747__auto__ = (function (){var G__57963 = comp__31745__auto__;
var G__57964 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__57963,G__57964) : io.factorhouse.hsx.core.react_memo.call(null,G__57963,G__57964));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"sidebar-resizer");

return comp__31745__auto__;
})();
frontend.components.left_sidebar.left_sidebar = (function (){var render_fn__31744__auto__ = (function frontend$components$left_sidebar$left_sidebar(p__57966){
var map__57967 = p__57966;
var map__57967__$1 = cljs.core.__destructure_map(map__57967);
var left_sidebar_open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57967__$1,new cljs.core.Keyword(null,"left-sidebar-open?","left-sidebar-open?",899591356));
var route_match = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57967__$1,new cljs.core.Keyword(null,"route-match","route-match",-1450985937));
var close_fn = (function (){
return frontend.state.set_left_sidebar_open_BANG_(false);
});
var _STAR_closing_QMARK_ = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}),cljs.core.PersistentVector.EMPTY);
var vec__57968 = logseq.shui.hooks.use_atom(_STAR_closing_QMARK_);
var closing_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57968,(0),null);
var vec__57971 = logseq.shui.hooks.use_state(null);
var touch_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57971,(0),null);
var set_touch_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57971,(1),null);
var vec__57974 = logseq.shui.hooks.use_state((-1));
var close_signal = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57974,(0),null);
var set_close_signal_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57974,(1),null);
var touch_point_fn = (function (e){
var G__57977 = frontend.components.left_sidebar.goog$module$goog$object.get(e,"touches");
var G__57977__$1 = (((G__57977 == null))?null:(G__57977[(0)]));
if((G__57977__$1 == null)){
return null;
} else {
return (function (p1__57965_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)],[p1__57965_SHARP_.clientX,p1__57965_SHARP_.clientY]);
})(G__57977__$1);
}
});
var srs_open_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"srs","srs",1327991978),frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","id","modal/id",-1274892409)], null)));
var touching_x_offset = (function (){var and__5140__auto__ = (function (){var G__57978 = touch_state;
if((G__57978 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"after","after",594996914).cljs$core$IFn$_invoke$arity$1(G__57978);
}
})();
if(cljs.core.truth_(and__5140__auto__)){
var G__57979 = touch_state;
var G__57979__$1 = (((G__57979 == null))?null:cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.Keyword(null,"before","before",-1633692388))(G__57979));
var G__57979__$2 = (((G__57979__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),G__57979__$1));
if((G__57979__$2 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._,G__57979__$2);
}
} else {
return and__5140__auto__;
}
})();
var touch_pending_QMARK_ = (cljs.core.abs(touching_x_offset) > (20));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#left-sidebar.cp__sidebar-left-layout","div#left-sidebar.cp__sidebar-left-layout",1084765208),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"is-open","is-open",1660707069),left_sidebar_open_QMARK_,new cljs.core.Keyword(null,"is-closing","is-closing",1975869223),closing_QMARK_,new cljs.core.Keyword(null,"is-touching","is-touching",-546912701),touch_pending_QMARK_], null)], null)),new cljs.core.Keyword(null,"on-touch-start","on-touch-start",447239419),(function (e){
var G__57980 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"before","before",-1633692388),touch_point_fn(e)], null);
return (set_touch_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_touch_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__57980) : set_touch_state_BANG_.call(null,G__57980));
}),new cljs.core.Keyword(null,"on-touch-move","on-touch-move",1587118423),(function (e){
if(cljs.core.truth_(touch_state)){
var G__57981 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(touch_state,new cljs.core.Keyword(null,"after","after",594996914),touch_point_fn(e));
return (set_touch_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_touch_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__57981) : set_touch_state_BANG_.call(null,G__57981));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-touch-end","on-touch-end",1515667389),(function (){
if(touch_pending_QMARK_){
if(((cljs.core.not(left_sidebar_open_QMARK_)) && ((touching_x_offset > (40))))){
frontend.state.set_left_sidebar_open_BANG_(true);
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = left_sidebar_open_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (touching_x_offset < (-30));
} else {
return and__5140__auto__;
}
})())){
var G__57982_58027 = (close_signal + (1));
(set_close_signal_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_close_signal_BANG_.cljs$core$IFn$_invoke$arity$1(G__57982_58027) : set_close_signal_BANG_.call(null,G__57982_58027));
} else {
}
}
} else {
}

return (set_touch_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_touch_state_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_touch_state_BANG_.call(null,null));
})], null),frontend.components.left_sidebar.sidebar_container(route_match,close_fn,left_sidebar_open_QMARK_,srs_open_QMARK_,_STAR_closing_QMARK_,close_signal,(function (){var and__5140__auto__ = touch_pending_QMARK_;
if(and__5140__auto__){
return touching_x_offset;
} else {
return and__5140__auto__;
}
})()),frontend.components.left_sidebar.sidebar_resizer()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$left_sidebar$left_sidebar__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__57983 = cljs.core.first(args__31746__auto__);
var G__57984 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__57983,G__57984) : io.factorhouse.hsx.core.obj_get.call(null,G__57983,G__57984));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"left-sidebar","left-sidebar",226897170,null),args__31746__auto__),frontend$components$left_sidebar$left_sidebar,args__31746__auto__,null);
}
};
var frontend$components$left_sidebar$left_sidebar = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58028__i = 0, G__58028__a = new Array(arguments.length -  0);
while (G__58028__i < G__58028__a.length) {G__58028__a[G__58028__i] = arguments[G__58028__i + 0]; ++G__58028__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58028__a,0,null);
} 
return frontend$components$left_sidebar$left_sidebar__delegate.call(this,args__31746__auto__);};
frontend$components$left_sidebar$left_sidebar.cljs$lang$maxFixedArity = 0;
frontend$components$left_sidebar$left_sidebar.cljs$lang$applyTo = (function (arglist__58029){
var args__31746__auto__ = cljs.core.seq(arglist__58029);
return frontend$components$left_sidebar$left_sidebar__delegate(args__31746__auto__);
});
frontend$components$left_sidebar$left_sidebar.cljs$core$IFn$_invoke$arity$variadic = frontend$components$left_sidebar$left_sidebar__delegate;
return frontend$components$left_sidebar$left_sidebar;
})()
;
var memo_comp__31747__auto__ = (function (){var G__57985 = comp__31745__auto__;
var G__57986 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__57985,G__57986) : io.factorhouse.hsx.core.react_memo.call(null,G__57985,G__57986));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"left-sidebar");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.left_sidebar.js.map
