goog.provide('frontend.components.theme');
/**
 * Load graph-dependent CSS and notify plugins only after db-worker is ready.
 */
frontend.components.theme.apply_current_graph_changed_BANG_ = (function frontend$components$theme$apply_current_graph_changed_BANG_(db_worker_ready_QMARK_){
if(cljs.core.truth_(db_worker_ready_QMARK_)){
frontend.handler.ui.reset_custom_css_BANG_();

return frontend.handler.plugin.hook_plugin_app.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-graph-changed","current-graph-changed",1449126454),cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
frontend.components.theme.scrollbar_measure = (function (){var render_fn__31744__auto__ = (function frontend$components$theme$scrollbar_measure(){
var _STAR_el = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto__ = logseq.shui.hooks.deref(_STAR_el);
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
var w = (el.offsetWidth - el.clientWidth);
var c = "custom-scrollbar";
var l = document.documentElement.classList;
if(((cljs.core.not(frontend.util.mac_QMARK_)) || ((w > (2))))){
return l.add(c);
} else {
return l.remove(c);
}
} else {
return null;
}
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fixed.w-16.h-16.overflow-scroll.opacity-0","div.fixed.w-16.h-16.overflow-scroll.opacity-0",-2135635962),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el,new cljs.core.Keyword(null,"class","class",-2030961996),"top-1/2 -left-1/2 z-[-999]"], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$theme$scrollbar_measure__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__58828 = cljs.core.first(args__31746__auto__);
var G__58829 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__58828,G__58829) : io.factorhouse.hsx.core.obj_get.call(null,G__58828,G__58829));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"scrollbar-measure","scrollbar-measure",610484182,null),args__31746__auto__),frontend$components$theme$scrollbar_measure,args__31746__auto__,null);
}
};
var frontend$components$theme$scrollbar_measure = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58849__i = 0, G__58849__a = new Array(arguments.length -  0);
while (G__58849__i < G__58849__a.length) {G__58849__a[G__58849__i] = arguments[G__58849__i + 0]; ++G__58849__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58849__a,0,null);
} 
return frontend$components$theme$scrollbar_measure__delegate.call(this,args__31746__auto__);};
frontend$components$theme$scrollbar_measure.cljs$lang$maxFixedArity = 0;
frontend$components$theme$scrollbar_measure.cljs$lang$applyTo = (function (arglist__58850){
var args__31746__auto__ = cljs.core.seq(arglist__58850);
return frontend$components$theme$scrollbar_measure__delegate(args__31746__auto__);
});
frontend$components$theme$scrollbar_measure.cljs$core$IFn$_invoke$arity$variadic = frontend$components$theme$scrollbar_measure__delegate;
return frontend$components$theme$scrollbar_measure;
})()
;
var memo_comp__31747__auto__ = (function (){var G__58830 = comp__31745__auto__;
var G__58831 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__58830,G__58831) : io.factorhouse.hsx.core.react_memo.call(null,G__58830,G__58831));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"scrollbar-measure");

return comp__31745__auto__;
})();
frontend.components.theme.container = (function (){var render_fn__31744__auto__ = (function frontend$components$theme$container(p__58833,child){
var map__58834 = p__58833;
var map__58834__$1 = cljs.core.__destructure_map(map__58834);
var system_theme_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58834__$1,new cljs.core.Keyword(null,"system-theme?","system-theme?",1330394234));
var settings_open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58834__$1,new cljs.core.Keyword(null,"settings-open?","settings-open?",1491874651));
var sidebar_open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58834__$1,new cljs.core.Keyword(null,"sidebar-open?","sidebar-open?",-1099774467));
var current_repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58834__$1,new cljs.core.Keyword(null,"current-repo","current-repo",134812359));
var db_restoring_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58834__$1,new cljs.core.Keyword(null,"db-restoring?","db-restoring?",-1548628664));
var sidebar_blocks_len = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58834__$1,new cljs.core.Keyword(null,"sidebar-blocks-len","sidebar-blocks-len",235708585));
var accent_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58834__$1,new cljs.core.Keyword(null,"accent-color","accent-color",908336425));
var editor_font = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58834__$1,new cljs.core.Keyword(null,"editor-font","editor-font",582015595));
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58834__$1,new cljs.core.Keyword(null,"route","route",329891309));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58834__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58834__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var preferred_language = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58834__$1,new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017));
var mounted_fn = logseq.shui.hooks.use_mounted();
var vec__58835 = logseq.shui.hooks.use_state(false);
var restored_sidebar_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58835,(0),null);
var set_restored_sidebar_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58835,(1),null);
var db_worker_ready_QMARK_ = logseq.shui.hooks.use_atom_value(frontend.state.db_worker_ready_QMARK_);
logseq.shui.hooks.use_effect_BANG_((function (){
var doc = document.documentElement;
var cls = doc.classList;
var cls_body = document.body.classList;
doc.setAttribute("data-theme",theme);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(theme,"dark")){
cls.add("dark");

var G__58838_58851 = cls_body;
G__58838_58851.remove("white-theme","light-theme");

G__58838_58851.add("dark-theme");

} else {
cls.remove("dark");

var G__58839_58852 = cls_body;
G__58839_58852.remove("dark-theme");

G__58839_58852.add("white-theme","light-theme");

}

frontend.ui.apply_custom_theme_effect_BANG_(theme);

return frontend.handler.plugin.hook_plugin_app.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"theme-mode-changed","theme-mode-changed",-761875935),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),theme], null));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [theme], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var G__58840 = document.documentElement;
if((G__58840 == null)){
return null;
} else {
return G__58840.setAttribute("data-color",(function (){var or__5142__auto__ = accent_color;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "logseq";
}
})());
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [accent_color], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto__ = editor_font;
if(cljs.core.truth_(temp__5825__auto__)){
var map__58841 = temp__5825__auto__;
var map__58841__$1 = cljs.core.__destructure_map(map__58841);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58841__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var global__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58841__$1,new cljs.core.Keyword(null,"global","global",93595047));
var G__58842 = document.documentElement;
G__58842.setAttribute("data-font",(function (){var or__5142__auto__ = type;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "default";
}
})());

G__58842.setAttribute("data-font-global",cljs.core.boolean$(global__$1));

return G__58842;
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [editor_font], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var doc = document.documentElement;
var preferred_language_SINGLEQUOTE_ = frontend.context.i18n.locale_tag(preferred_language);
return doc.setAttribute("lang",preferred_language_SINGLEQUOTE_);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [preferred_language], null));

logseq.shui.hooks.use_effect_BANG_((function (){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"theme-loaded","theme-loaded",405446380)], 0));
}),cljs.core.PersistentVector.EMPTY);

logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_((function (){var and__5140__auto__ = restored_sidebar_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return mounted_fn();
} else {
return and__5140__auto__;
}
})())){
frontend.handler.plugin.hook_plugin_app.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sidebar-visible-changed","sidebar-visible-changed",946926799),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visible","visible",-1024216805),sidebar_open_QMARK_], null));

return frontend.handler.ui.persist_right_sidebar_state_BANG_();
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sidebar_open_QMARK_,restored_sidebar_QMARK_,sidebar_blocks_len], null));

logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(frontend.config.lsp_enabled_QMARK_)){
frontend.handler.plugin.load_plugin_preferences();

return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.setup_install_listener_BANG_(),frontend.handler.plugin_config.setup_install_listener_BANG_());
} else {
return null;
}
}),cljs.core.PersistentVector.EMPTY);

logseq.shui.hooks.use_effect_BANG_((function (){
frontend.extensions.pdf.core.reset_current_pdf_BANG_();

return null;
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_repo], null));

logseq.shui.hooks.use_effect_BANG_((function (){
frontend.components.theme.apply_current_graph_changed_BANG_(db_worker_ready_QMARK_);

return null;
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_repo,db_worker_ready_QMARK_], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var db_restored_QMARK_ = db_restoring_QMARK_ === false;
if(cljs.core.truth_(db_restoring_QMARK_)){
return frontend.util.set_title_BANG_(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","loading","ui/loading",-736989697)], 0)));
} else {
if(db_restored_QMARK_){
return frontend.handler.route.update_page_title_BANG_(route);
} else {
return null;
}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_restoring_QMARK_,route], null));

logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(db_restoring_QMARK_)){
return null;
} else {
var repos = frontend.state.get_repos();
if((!(((frontend.config.publishing_QMARK_) || (cljs.core.seq(repos)))))){
return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"graphs","graphs",-1584479112)], null));
} else {
frontend.handler.ui.restore_right_sidebar_state_BANG_();

return (set_restored_sidebar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_restored_sidebar_QMARK_.cljs$core$IFn$_invoke$arity$1(true) : set_restored_sidebar_QMARK_.call(null,true));
}
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_restoring_QMARK_], null));

logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(system_theme_QMARK_)){
return frontend.ui.setup_system_theme_effect_BANG_();
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [system_theme_QMARK_], null));

logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(settings_open_QMARK_)){
var G__58843 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.settings-modal","div.settings-modal",666226730),frontend.components.settings.settings(settings_open_QMARK_)], null);
});
var G__58844 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"app-settings","app-settings",-105159640),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onOpenAutoFocus","onOpenAutoFocus",-99363202),(function (p1__58832_SHARP_){
return p1__58832_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"min(1024px, calc(100vw - 2rem))",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"calc(100vw - 2rem)"], null)], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"app-settings","app-settings",-105159640)], null);
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2(G__58843,G__58844) : logseq.shui.ui.dialog_open_BANG_.call(null,G__58843,G__58844));
} else {
return (logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"app-settings","app-settings",-105159640)) : logseq.shui.ui.dialog_close_BANG_.call(null,new cljs.core.Keyword(null,"app-settings","app-settings",-105159640)));
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [settings_open_QMARK_], null));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#root-container.theme-container","div#root-container.theme-container",2042038595),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),child,frontend.extensions.pdf.core.default_embed_playground(),frontend.components.theme.scrollbar_measure()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$theme$container__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__58845 = cljs.core.first(args__31746__auto__);
var G__58846 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__58845,G__58846) : io.factorhouse.hsx.core.obj_get.call(null,G__58845,G__58846));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"container","container",-96406180,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$theme$container,args__31746__auto__,null);
}
};
var frontend$components$theme$container = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58853__i = 0, G__58853__a = new Array(arguments.length -  0);
while (G__58853__i < G__58853__a.length) {G__58853__a[G__58853__i] = arguments[G__58853__i + 0]; ++G__58853__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58853__a,0,null);
} 
return frontend$components$theme$container__delegate.call(this,args__31746__auto__);};
frontend$components$theme$container.cljs$lang$maxFixedArity = 0;
frontend$components$theme$container.cljs$lang$applyTo = (function (arglist__58854){
var args__31746__auto__ = cljs.core.seq(arglist__58854);
return frontend$components$theme$container__delegate(args__31746__auto__);
});
frontend$components$theme$container.cljs$core$IFn$_invoke$arity$variadic = frontend$components$theme$container__delegate;
return frontend$components$theme$container;
})()
;
var memo_comp__31747__auto__ = (function (){var G__58847 = comp__31745__auto__;
var G__58848 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__58847,G__58848) : io.factorhouse.hsx.core.react_memo.call(null,G__58847,G__58848));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"container");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.theme.js.map
