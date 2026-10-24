goog.provide('frontend.components.container');
goog.scope(function(){
  frontend.components.container.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.components.container.focus_main_content_container_if_body_BANG_ = (function frontend$components$container$focus_main_content_container_if_body_BANG_(){
var temp__5825__auto__ = goog.dom.getElement("main-content-container");
if(cljs.core.truth_(temp__5825__auto__)){
var element = temp__5825__auto__;
var active_element = document.activeElement;
if(((cljs.core.not(frontend.state.editing_QMARK_())) && ((((!(frontend.state.dialog_opened_QMARK_()))) && ((((active_element == null)) || ((active_element === document.body)))))))){
return element.focus(({"preventScroll": true}));
} else {
return null;
}
} else {
return null;
}
});
frontend.components.container.schedule_main_content_focus_BANG_ = (function frontend$components$container$schedule_main_content_focus_BANG_(){
return (frontend.util.schedule.cljs$core$IFn$_invoke$arity$1 ? frontend.util.schedule.cljs$core$IFn$_invoke$arity$1(frontend.components.container.focus_main_content_container_if_body_BANG_) : frontend.util.schedule.call(null,frontend.components.container.focus_main_content_container_if_body_BANG_));
});
frontend.components.container.main = (function (){var render_fn__31744__auto__ = (function frontend$components$container$main(p__47891){
var map__47892 = p__47891;
var map__47892__$1 = cljs.core.__destructure_map(map__47892);
var route_match = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47892__$1,new cljs.core.Keyword(null,"route-match","route-match",-1450985937));
var margin_less_pages_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47892__$1,new cljs.core.Keyword(null,"margin-less-pages?","margin-less-pages?",-1770705087));
var route_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47892__$1,new cljs.core.Keyword(null,"route-name","route-name",-932603717));
var db_restoring_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47892__$1,new cljs.core.Keyword(null,"db-restoring?","db-restoring?",-1548628664));
var main_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47892__$1,new cljs.core.Keyword(null,"main-content","main-content",1386726798));
var left_sidebar_open_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","left-sidebar-open?","ui/left-sidebar-open?",899579728)], null));
var onboarding_and_home_QMARK_ = (function (){var and__5140__auto__ = (function (){var or__5142__auto__ = (frontend.state.get_current_repo() == null);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$0();
}
})();
if(cljs.core.truth_(and__5140__auto__)){
return (((!(frontend.config.publishing_QMARK_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"home","home",-74557309),route_name)));
} else {
return and__5140__auto__;
}
})();
var margin_less_pages_QMARK___$1 = (function (){var or__5142__auto__ = (function (){var and__5140__auto__ = frontend.mobile.util.native_platform_QMARK_();
if(cljs.core.truth_(and__5140__auto__)){
return onboarding_and_home_QMARK_;
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return margin_less_pages_QMARK_;
}
})();
logseq.shui.hooks.use_effect_BANG_((function (){
var element = goog.dom.getElement("main-content-container");
if(cljs.core.truth_(element)){
cljs_drag_n_drop.core.subscribe_BANG_(element,new cljs.core.Keyword(null,"upload-files","upload-files",-771877630),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drop","drop",364481611),(function (_e,files){
var temp__5825__auto__ = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.state.get_edit_block(),new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword(null,"markdown","markdown",1227225089));
return frontend.handler.editor.assets.upload_asset_BANG_(id,files,format,frontend.handler.editor._STAR_asset_uploading_QMARK_,true);
} else {
return null;
}
})], null));

frontend.handler.common.listen_to_scroll_BANG_(element);

if(cljs.core.truth_(margin_less_pages_QMARK___$1)){
(element.scrollTop = (0));
} else {
}
} else {
}

frontend.components.container.schedule_main_content_focus_BANG_();

if(cljs.core.truth_(element)){
return (function (){
return cljs_drag_n_drop.core.unsubscribe_BANG_(element,new cljs.core.Keyword(null,"upload-files","upload-files",-771877630));
});
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [margin_less_pages_QMARK___$1], null));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#main-container.cp__sidebar-main-layout.flex-1.flex","div#main-container.cp__sidebar-main-layout.flex-1.flex",1084268297),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"is-left-sidebar-open","is-left-sidebar-open",-1193752939),left_sidebar_open_QMARK_], null)], null))], null),frontend.components.left_sidebar.left_sidebar(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left-sidebar-open?","left-sidebar-open?",899591356),left_sidebar_open_QMARK_,new cljs.core.Keyword(null,"route-match","route-match",-1450985937),route_match], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#main-content-container.scrollbar-spacing.w-full.flex.justify-center.flex-row.outline-none.relative","div#main-content-container.scrollbar-spacing.w-full.flex.justify-center.flex-row.outline-none.relative",-1671891838),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"-1",new cljs.core.Keyword(null,"data-is-margin-less-pages","data-is-margin-less-pages",1858094114),margin_less_pages_QMARK___$1], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__sidebar-main-content","div.cp__sidebar-main-content",-176649393),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-is-margin-less-pages","data-is-margin-less-pages",1858094114),margin_less_pages_QMARK___$1,new cljs.core.Keyword(null,"data-is-full-width","data-is-full-width",969792671),(function (){var or__5142__auto__ = margin_less_pages_QMARK___$1;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"my-publishing","my-publishing",227980452),null,new cljs.core.Keyword(null,"all-files","all-files",1120339891),null,new cljs.core.Keyword(null,"all-pages","all-pages",1017563062),null], null), null),route_name);
}
})()], null),frontend.mobile.footer.footer(),(cljs.core.truth_(db_restoring_QMARK_)?((frontend.config.publishing_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.space-y-2","div.space-y-2",-924002995),(function (){var G__47893 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-8 w-1/3 mb-8 bg-gray-400"], null);
return (logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1(G__47893) : logseq.shui.ui.skeleton.call(null,G__47893));
})(),(function (){var G__47894 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-6 w-full bg-gray-400"], null);
return (logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1(G__47894) : logseq.shui.ui.skeleton.call(null,G__47894));
})(),(function (){var G__47895 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-6 w-full bg-gray-400"], null);
return (logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1(G__47895) : logseq.shui.ui.skeleton.call(null,G__47895));
})()], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.space-y-2","div.space-y-2",-924002995),(function (){var G__47896 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-8 w-1/3 mb-8"], null);
return (logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1(G__47896) : logseq.shui.ui.skeleton.call(null,G__47896));
})(),(function (){var G__47897 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-6 w-full"], null);
return (logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1(G__47897) : logseq.shui.ui.skeleton.call(null,G__47897));
})(),(function (){var G__47898 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-6 w-full"], null);
return (logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1(G__47898) : logseq.shui.ui.skeleton.call(null,G__47898));
})()], null)):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var or__5142__auto__ = onboarding_and_home_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return margin_less_pages_QMARK___$1;
}
})())?"":frontend.util.hiccup__GT_class("mx-auto.pb-24")),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(cljs.core.truth_(margin_less_pages_QMARK___$1)?(0):(cljs.core.truth_(onboarding_and_home_QMARK_)?(0):(120)
))], null)], null),main_content], null)
)], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$container$main__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47899 = cljs.core.first(args__31746__auto__);
var G__47900 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47899,G__47900) : io.factorhouse.hsx.core.obj_get.call(null,G__47899,G__47900));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"main","main",-477271134,null),args__31746__auto__),frontend$components$container$main,args__31746__auto__,null);
}
};
var frontend$components$container$main = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__48030__i = 0, G__48030__a = new Array(arguments.length -  0);
while (G__48030__i < G__48030__a.length) {G__48030__a[G__48030__i] = arguments[G__48030__i + 0]; ++G__48030__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__48030__a,0,null);
} 
return frontend$components$container$main__delegate.call(this,args__31746__auto__);};
frontend$components$container$main.cljs$lang$maxFixedArity = 0;
frontend$components$container$main.cljs$lang$applyTo = (function (arglist__48031){
var args__31746__auto__ = cljs.core.seq(arglist__48031);
return frontend$components$container$main__delegate(args__31746__auto__);
});
frontend$components$container$main.cljs$core$IFn$_invoke$arity$variadic = frontend$components$container$main__delegate;
return frontend$components$container$main;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47901 = comp__31745__auto__;
var G__47902 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47901,G__47902) : io.factorhouse.hsx.core.react_memo.call(null,G__47901,G__47902));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"main");

return comp__31745__auto__;
})();
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.container !== 'undefined') && (typeof frontend.components.container.sidebar_inited_QMARK_ !== 'undefined')){
} else {
frontend.components.container.sidebar_inited_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
/**
 * Home-route start page. Prefer :default-home; publishing with no journals
 *   falls back to all-pages.
 */
frontend.components.container.home_redirect_target = (function frontend$components$container$home_redirect_target(p__47903){
var map__47904 = p__47903;
var map__47904__$1 = cljs.core.__destructure_map(map__47904);
var default_home = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47904__$1,new cljs.core.Keyword(null,"default-home","default-home",171104159));
var current_route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47904__$1,new cljs.core.Keyword(null,"current-route","current-route",2067529448));
var route_has_p_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47904__$1,new cljs.core.Keyword(null,"route-has-p?","route-has-p?",1401466401));
var publishing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47904__$1,new cljs.core.Keyword(null,"publishing?","publishing?",1526914455));
var latest_journals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47904__$1,new cljs.core.Keyword(null,"latest-journals","latest-journals",338704153));
if(cljs.core.truth_((function (){var and__5140__auto__ = default_home;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"home","home",-74557309),current_route);
if(and__5140__auto____$1){
var and__5140__auto____$2 = cljs.core.not(route_has_p_QMARK_);
if(and__5140__auto____$2){
return new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(default_home);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(default_home)], null);
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = publishing_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.not(default_home)) && ((((!((latest_journals == null)))) && (cljs.core.empty_QMARK_(latest_journals)))));
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"all-pages","all-pages",1017563062)], null);
} else {
return null;
}
}
});
frontend.components.container.main_content = (function (){var render_fn__31744__auto__ = (function frontend$components$container$main_content(){
var default_home = frontend.components.left_sidebar.use_default_home_if_valid();
var current_repo = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("git","current-repo","git/current-repo",107438825)], null));
var vec__47905 = logseq.shui.hooks.use_state(null);
var latest_journals = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47905,(0),null);
var set_latest_journals_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47905,(1),null);
var redirect_target = frontend.components.container.home_redirect_target(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"default-home","default-home",171104159),default_home,new cljs.core.Keyword(null,"current-route","current-route",2067529448),frontend.state.get_current_route(),new cljs.core.Keyword(null,"route-has-p?","route-has-p?",1401466401),frontend.state.route_has_p_QMARK_(),new cljs.core.Keyword(null,"publishing?","publishing?",1526914455),frontend.config.publishing_QMARK_,new cljs.core.Keyword(null,"latest-journals","latest-journals",338704153),latest_journals], null));
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_((function (){var and__5140__auto__ = frontend.config.publishing_QMARK_;
if(and__5140__auto__){
var and__5140__auto____$1 = current_repo;
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.not(default_home);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_latest_journals.cljs$core$IFn$_invoke$arity$2(current_repo,(1))),(function (journals){
return promesa.protocols._promise((set_latest_journals_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_latest_journals_BANG_.cljs$core$IFn$_invoke$arity$1(journals) : set_latest_journals_BANG_.call(null,journals)));
}));
}));
} else {
(set_latest_journals_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_latest_journals_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_latest_journals_BANG_.call(null,null));
}

return null;
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_repo,default_home], null));

logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(cljs.core.deref(frontend.components.container.sidebar_inited_QMARK_))){
return null;
} else {
var sidebar = new cljs.core.Keyword(null,"sidebar","sidebar",35784458).cljs$core$IFn$_invoke$arity$1(default_home);
var sidebar__$1 = ((typeof sidebar === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sidebar], null):sidebar);
var temp__5825__auto__ = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.seq(sidebar__$1));
if(cljs.core.truth_(temp__5825__auto__)){
var pages = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.all(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (page){
var page__$1 = (frontend.util.safe_page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.safe_page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page) : frontend.util.safe_page_name_sanity_lc.call(null,page));
var block_type = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page__$1,"contents"))?new cljs.core.Keyword(null,"contents","contents",-1567174023):new cljs.core.Keyword(null,"page","page",849072397));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(current_repo,page__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (page_entity){
return promesa.protocols._promise(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db-id","db-id",747248515),(function (){var or__5142__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page_entity);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page__$1,"contents")){
return "contents";
} else {
return null;
}
}
})(),new cljs.core.Keyword(null,"block-type","block-type",1348400470),block_type], null));
}));
}));
}),pages))),(function (page_items){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var seq__47919 = cljs.core.seq(page_items);
var chunk__47920 = null;
var count__47921 = (0);
var i__47922 = (0);
while(true){
if((i__47922 < count__47921)){
var map__47925 = chunk__47920.cljs$core$IIndexed$_nth$arity$2(null,i__47922);
var map__47925__$1 = cljs.core.__destructure_map(map__47925);
var db_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47925__$1,new cljs.core.Keyword(null,"db-id","db-id",747248515));
var block_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47925__$1,new cljs.core.Keyword(null,"block-type","block-type",1348400470));
frontend.state.sidebar_add_block_BANG_(current_repo,db_id,block_type);


var G__48032 = seq__47919;
var G__48033 = chunk__47920;
var G__48034 = count__47921;
var G__48035 = (i__47922 + (1));
seq__47919 = G__48032;
chunk__47920 = G__48033;
count__47921 = G__48034;
i__47922 = G__48035;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__47919);
if(temp__5825__auto____$1){
var seq__47919__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__47919__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__47919__$1);
var G__48036 = cljs.core.chunk_rest(seq__47919__$1);
var G__48037 = c__5673__auto__;
var G__48038 = cljs.core.count(c__5673__auto__);
var G__48039 = (0);
seq__47919 = G__48036;
chunk__47920 = G__48037;
count__47921 = G__48038;
i__47922 = G__48039;
continue;
} else {
var map__47926 = cljs.core.first(seq__47919__$1);
var map__47926__$1 = cljs.core.__destructure_map(map__47926);
var db_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47926__$1,new cljs.core.Keyword(null,"db-id","db-id",747248515));
var block_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47926__$1,new cljs.core.Keyword(null,"block-type","block-type",1348400470));
frontend.state.sidebar_add_block_BANG_(current_repo,db_id,block_type);


var G__48040 = cljs.core.next(seq__47919__$1);
var G__48041 = null;
var G__48042 = (0);
var G__48043 = (0);
seq__47919 = G__48040;
chunk__47920 = G__48041;
count__47921 = G__48042;
i__47922 = G__48043;
continue;
}
} else {
return null;
}
}
break;
}
})()),(function (___21901__auto__){
return promesa.protocols._promise(cljs.core.reset_BANG_(frontend.components.container.sidebar_inited_QMARK_,true));
}));
}));
}));
} else {
return null;
}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_repo,default_home], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var G__47929 = cljs.core.first(redirect_target);
var G__47929__$1 = (((G__47929 instanceof cljs.core.Keyword))?G__47929.fqn:null);
switch (G__47929__$1) {
case "page":
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.second(redirect_target));

break;
case "route":
return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),cljs.core.second(redirect_target)], null));

break;
default:
return null;

}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [redirect_target], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(redirect_target)?null:frontend.components.journal.all_journals())], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$container$main_content__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47932 = cljs.core.first(args__31746__auto__);
var G__47933 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47932,G__47933) : io.factorhouse.hsx.core.obj_get.call(null,G__47932,G__47933));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"main-content","main-content",-1267708971,null),args__31746__auto__),frontend$components$container$main_content,args__31746__auto__,null);
}
};
var frontend$components$container$main_content = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__48045__i = 0, G__48045__a = new Array(arguments.length -  0);
while (G__48045__i < G__48045__a.length) {G__48045__a[G__48045__i] = arguments[G__48045__i + 0]; ++G__48045__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__48045__a,0,null);
} 
return frontend$components$container$main_content__delegate.call(this,args__31746__auto__);};
frontend$components$container$main_content.cljs$lang$maxFixedArity = 0;
frontend$components$container$main_content.cljs$lang$applyTo = (function (arglist__48046){
var args__31746__auto__ = cljs.core.seq(arglist__48046);
return frontend$components$container$main_content__delegate(args__31746__auto__);
});
frontend$components$container$main_content.cljs$core$IFn$_invoke$arity$variadic = frontend$components$container$main_content__delegate;
return frontend$components$container$main_content;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47934 = comp__31745__auto__;
var G__47935 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47934,G__47935) : io.factorhouse.hsx.core.react_memo.call(null,G__47934,G__47935));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"main-content");

return comp__31745__auto__;
})();
frontend.components.container.hide_context_menu_and_clear_selection = (function frontend$components$container$hide_context_menu_and_clear_selection(var_args){
var args__5882__auto__ = [];
var len__5876__auto___48047 = arguments.length;
var i__5877__auto___48048 = (0);
while(true){
if((i__5877__auto___48048 < len__5876__auto___48047)){
args__5882__auto__.push((arguments[i__5877__auto___48048]));

var G__48049 = (i__5877__auto___48048 + (1));
i__5877__auto___48048 = G__48049;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.components.container.hide_context_menu_and_clear_selection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.components.container.hide_context_menu_and_clear_selection.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__47952){
var map__47953 = p__47952;
var map__47953__$1 = cljs.core.__destructure_map(map__47953);
var esc_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47953__$1,new cljs.core.Keyword(null,"esc?","esc?",926265416));
frontend.state.hide_custom_context_menu_BANG_();

if(cljs.core.truth_((function (){var or__5142__auto__ = frontend.components.container.goog$module$goog$object.get(e,"shiftKey");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = frontend.util.meta_key_QMARK_(e);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = frontend.state.get_edit_input_id();
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
var or__5142__auto____$3 = (function (){var G__47954 = e.target;
if((G__47954 == null)){
return null;
} else {
return frontend.util.input_QMARK_(G__47954);
}
})();
if(cljs.core.truth_(or__5142__auto____$3)){
return or__5142__auto____$3;
} else {
var or__5142__auto____$4 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(logseq.shui.dialog.core.get_last_dialog_id(),new cljs.core.Keyword(null,"property-dialog","property-dialog",1885514281));
if(or__5142__auto____$4){
return or__5142__auto____$4;
} else {
var or__5142__auto____$5 = (function (){var G__47955 = e.target;
if((G__47955 == null)){
return null;
} else {
return G__47955.closest(".ls-block");
}
})();
if(cljs.core.truth_(or__5142__auto____$5)){
return or__5142__auto____$5;
} else {
var G__47956 = e.target;
if((G__47956 == null)){
return null;
} else {
return G__47956.closest("[data-keep-selection]");
}
}
}
}
}
}
}
})())){
return null;
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = esc_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.handler.editor.popup_exists_QMARK_(new cljs.core.Keyword(null,"selection-action-bar","selection-action-bar",885868555));
} else {
return and__5140__auto__;
}
})())){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","hide-action-bar","editor/hide-action-bar",-1927566378)], null));
} else {
return (frontend.handler.editor.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.editor.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.handler.editor.clear_selection_BANG_.call(null));
}
}
}));

(frontend.components.container.hide_context_menu_and_clear_selection.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.components.container.hide_context_menu_and_clear_selection.cljs$lang$applyTo = (function (seq47941){
var G__47951 = cljs.core.first(seq47941);
var seq47941__$1 = cljs.core.next(seq47941);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47951,seq47941__$1);
}));

frontend.components.container.render_custom_context_menu = (function (){var render_fn__31744__auto__ = (function frontend$components$container$render_custom_context_menu(links,position){
var ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
logseq.shui.hooks.use_effect_BANG_.cljs$core$IFn$_invoke$arity$1((function (){
var el = logseq.shui.hooks.deref(ref);
var map__47958 = frontend.util.calc_delta_rect_offset(el,document.documentElement);
var map__47958__$1 = cljs.core.__destructure_map(map__47958);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47958__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47958__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return (el.style.transform = (""+"translate3d("+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((x < (0)))?x:(0)))+"px,"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((y < (0)))?(y - (10)):(0)))+"px"+",0)"));
}));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu-backdrop","div.menu-backdrop",672642916),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
return frontend.components.container.hide_context_menu_and_clear_selection(e);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#custom-context-menu","div#custom-context-menu",16263198),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(999),new cljs.core.Keyword(null,"left","left",-399115937),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(position))+"px"),new cljs.core.Keyword(null,"top","top",-1856271961),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(position))+"px")], null)], null),links], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$container$render_custom_context_menu__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47963 = cljs.core.first(args__31746__auto__);
var G__47964 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47963,G__47964) : io.factorhouse.hsx.core.obj_get.call(null,G__47963,G__47964));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"render-custom-context-menu","render-custom-context-menu",-198250299,null),args__31746__auto__),frontend$components$container$render_custom_context_menu,args__31746__auto__,null);
}
};
var frontend$components$container$render_custom_context_menu = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__48050__i = 0, G__48050__a = new Array(arguments.length -  0);
while (G__48050__i < G__48050__a.length) {G__48050__a[G__48050__i] = arguments[G__48050__i + 0]; ++G__48050__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__48050__a,0,null);
} 
return frontend$components$container$render_custom_context_menu__delegate.call(this,args__31746__auto__);};
frontend$components$container$render_custom_context_menu.cljs$lang$maxFixedArity = 0;
frontend$components$container$render_custom_context_menu.cljs$lang$applyTo = (function (arglist__48051){
var args__31746__auto__ = cljs.core.seq(arglist__48051);
return frontend$components$container$render_custom_context_menu__delegate(args__31746__auto__);
});
frontend$components$container$render_custom_context_menu.cljs$core$IFn$_invoke$arity$variadic = frontend$components$container$render_custom_context_menu__delegate;
return frontend$components$container$render_custom_context_menu;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47967 = comp__31745__auto__;
var G__47968 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47967,G__47968) : io.factorhouse.hsx.core.react_memo.call(null,G__47967,G__47968));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"render-custom-context-menu");

return comp__31745__auto__;
})();
frontend.components.container.custom_context_menu = (function (){var render_fn__31744__auto__ = (function frontend$components$container$custom_context_menu(){
var show_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("custom-context-menu","show?","custom-context-menu/show?",2074408902)], null));
var links = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("custom-context-menu","links","custom-context-menu/links",-1197608677)], null));
var position = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("custom-context-menu","position","custom-context-menu/position",666089423)], null));
if(cljs.core.truth_((function (){var and__5140__auto__ = show_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = links;
if(cljs.core.truth_(and__5140__auto____$1)){
return position;
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return frontend.components.container.render_custom_context_menu(links,position);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$container$custom_context_menu__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47971 = cljs.core.first(args__31746__auto__);
var G__47972 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47971,G__47972) : io.factorhouse.hsx.core.obj_get.call(null,G__47971,G__47972));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"custom-context-menu","custom-context-menu",155344231,null),args__31746__auto__),frontend$components$container$custom_context_menu,args__31746__auto__,null);
}
};
var frontend$components$container$custom_context_menu = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__48052__i = 0, G__48052__a = new Array(arguments.length -  0);
while (G__48052__i < G__48052__a.length) {G__48052__a[G__48052__i] = arguments[G__48052__i + 0]; ++G__48052__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__48052__a,0,null);
} 
return frontend$components$container$custom_context_menu__delegate.call(this,args__31746__auto__);};
frontend$components$container$custom_context_menu.cljs$lang$maxFixedArity = 0;
frontend$components$container$custom_context_menu.cljs$lang$applyTo = (function (arglist__48053){
var args__31746__auto__ = cljs.core.seq(arglist__48053);
return frontend$components$container$custom_context_menu__delegate(args__31746__auto__);
});
frontend$components$container$custom_context_menu.cljs$core$IFn$_invoke$arity$variadic = frontend$components$container$custom_context_menu__delegate;
return frontend$components$container$custom_context_menu;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47973 = comp__31745__auto__;
var G__47974 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47973,G__47974) : io.factorhouse.hsx.core.react_memo.call(null,G__47973,G__47974));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"custom-context-menu");

return comp__31745__auto__;
})();
frontend.components.container.new_block_mode = (function (){var render_fn__31744__auto__ = (function frontend$components$container$new_block_mode(){
if(cljs.core.truth_(frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("document","mode?","document/mode?",-994203479)], null)))){
return frontend.ui.tooltip(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.block.px-1.text-sm.font-medium.bg-base-2.rounded-md.mx-2","a.block.px-1.text-sm.font-medium.bg-base-2.rounded-md.mx-2",700721131),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.state.toggle_document_mode_BANG_], null),"D"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-2","div.p-2",-325121057),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mb-2","p.mb-2",-1476899286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor.document-mode","title","editor.document-mode/title",-2010271109)], 0))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.inline-block.mr-1","p.inline-block.mr-1",1865795813),frontend.context.i18n.interpolate_rich_text_node.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor.document-mode","new-block-hint","editor.document-mode/new-block-hint",-447852329)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-block.mr-1","div.inline-block.mr-1",803362566),frontend.ui.render_keyboard_shortcut.cljs$core$IFn$_invoke$arity$variadic(frontend.modules.shortcut.data_helper.gen_shortcut_seq(new cljs.core.Keyword("editor","new-line","editor/new-line",363787014)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shortcut-id","shortcut-id",2068609942),new cljs.core.Keyword("editor","new-line","editor/new-line",363787014)], 0))], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.inline-block.mr-1","p.inline-block.mr-1",1865795813),frontend.context.i18n.interpolate_rich_text_node.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor.document-mode","toggle-desc","editor.document-mode/toggle-desc",-1333427346)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-block.mr-1","div.inline-block.mr-1",803362566),frontend.ui.render_keyboard_shortcut.cljs$core$IFn$_invoke$arity$variadic(frontend.modules.shortcut.data_helper.gen_shortcut_seq(new cljs.core.Keyword("ui","toggle-document-mode","ui/toggle-document-mode",-1556999601)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shortcut-id","shortcut-id",2068609942),new cljs.core.Keyword("ui","toggle-document-mode","ui/toggle-document-mode",-1556999601)], 0))], null)], null))], null)], null)], null)], null)], null));
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$container$new_block_mode__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47975 = cljs.core.first(args__31746__auto__);
var G__47976 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47975,G__47976) : io.factorhouse.hsx.core.obj_get.call(null,G__47975,G__47976));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"new-block-mode","new-block-mode",-1465102260,null),args__31746__auto__),frontend$components$container$new_block_mode,args__31746__auto__,null);
}
};
var frontend$components$container$new_block_mode = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__48054__i = 0, G__48054__a = new Array(arguments.length -  0);
while (G__48054__i < G__48054__a.length) {G__48054__a[G__48054__i] = arguments[G__48054__i + 0]; ++G__48054__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__48054__a,0,null);
} 
return frontend$components$container$new_block_mode__delegate.call(this,args__31746__auto__);};
frontend$components$container$new_block_mode.cljs$lang$maxFixedArity = 0;
frontend$components$container$new_block_mode.cljs$lang$applyTo = (function (arglist__48055){
var args__31746__auto__ = cljs.core.seq(arglist__48055);
return frontend$components$container$new_block_mode__delegate(args__31746__auto__);
});
frontend$components$container$new_block_mode.cljs$core$IFn$_invoke$arity$variadic = frontend$components$container$new_block_mode__delegate;
return frontend$components$container$new_block_mode;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47977 = comp__31745__auto__;
var G__47978 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47977,G__47978) : io.factorhouse.hsx.core.react_memo.call(null,G__47977,G__47978));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"new-block-mode");

return comp__31745__auto__;
})();
frontend.components.container.help_menu_items = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help","handbook","help/handbook",798366943)], 0)),new cljs.core.Keyword(null,"icon","icon",1679606541),"book-2",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.components.handbooks.toggle_handbooks();
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help.shortcuts","label","help.shortcuts/label",827224244)], 0)),new cljs.core.Keyword(null,"icon","icon",1679606541),"command",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),"shortcut-settings",new cljs.core.Keyword(null,"shortcut-settings","shortcut-settings",-1663349734));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help","docs","help/docs",-1973211639)], 0)),new cljs.core.Keyword(null,"icon","icon",1679606541),"help",new cljs.core.Keyword(null,"href","href",-793805698),"https://docs.logseq.com/"], null),new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help","bug","help/bug",52277326)], 0)),new cljs.core.Keyword(null,"icon","icon",1679606541),"bug",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bug-report","bug-report",-903169180));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help","feature","help/feature",26403165)], 0)),new cljs.core.Keyword(null,"icon","icon",1679606541),"git-pull-request",new cljs.core.Keyword(null,"href","href",-793805698),"https://discuss.logseq.com/c/feedback/feature-requests/"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help","submit-feedback","help/submit-feedback",-820676018)], 0)),new cljs.core.Keyword(null,"icon","icon",1679606541),"messages",new cljs.core.Keyword(null,"href","href",-793805698),"https://discuss.logseq.com/c/feedback/13"], null),new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help","ask-community","help/ask-community",-1475153898)], 0)),new cljs.core.Keyword(null,"icon","icon",1679606541),"brand-discord",new cljs.core.Keyword(null,"href","href",-793805698),"https://discord.com/invite/KpN4eHY"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help","support-forum","help/support-forum",474553130)], 0)),new cljs.core.Keyword(null,"icon","icon",1679606541),"message",new cljs.core.Keyword(null,"href","href",-793805698),"https://discuss.logseq.com/"], null),new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help","release-notes","help/release-notes",1216169715)], 0)),new cljs.core.Keyword(null,"icon","icon",1679606541),"asterisk",new cljs.core.Keyword(null,"href","href",-793805698),"https://docs.logseq.com/#/page/changelog"], null)], null);
frontend.components.container.help_menu_popup = (function (){var render_fn__31744__auto__ = (function frontend$components$container$help_menu_popup(){
logseq.shui.hooks.use_effect_BANG_((function (){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","handbooks-open?","ui/handbooks-open?",1677401058),false);
}),cljs.core.PersistentVector.EMPTY);

logseq.shui.hooks.use_effect_BANG_((function (){
var h = (function (e){
if(cljs.core.truth_((function (){var G__47979 = e.target;
if((G__47979 == null)){
return null;
} else {
return G__47979.closest(".cp__sidebar-help-btn, .cp__sidebar-help-menu-popup");
}
})())){
return null;
} else {
return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","help-open?","ui/help-open?",-1862197612),false);
}
});
document.body.addEventListener("click",h);

return (function (){
return document.body.removeEventListener("click",h);
});
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__sidebar-help-menu-popup","div.cp__sidebar-help-menu-popup",1340188022),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.list-wrap","div.list-wrap",-1441276241),(function (){var iter__5628__auto__ = (function frontend$components$container$help_menu_popup_$_iter__47980(s__47981){
return (new cljs.core.LazySeq(null,(function (){
var s__47981__$1 = s__47981;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__47981__$1);
if(temp__5825__auto__){
var s__47981__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47981__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__47981__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__47983 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__47982 = (0);
while(true){
if((i__47982 < size__5627__auto__)){
var vec__47984 = cljs.core._nth(c__5626__auto__,i__47982);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47984,(0),null);
var map__47987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47984,(1),null);
var map__47987__$1 = cljs.core.__destructure_map(map__47987);
var item = map__47987__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47987__$1,new cljs.core.Keyword(null,"title","title",636505583));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47987__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47987__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47987__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
cljs.core.chunk_append(b__47983,(function (){var G__47988 = item;
var G__47988__$1 = (((G__47988 instanceof cljs.core.Keyword))?G__47988.fqn:null);
switch (G__47988__$1) {
case "hr":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"!my-2",new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)], null);

break;
default:
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.it.flex.items-center.px-4.py-1.select-none","a.it.flex.items-center.px-4.py-1.select-none",1255286724),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),title,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__47982,G__47988,G__47988__$1,vec__47984,idx,map__47987,map__47987__$1,item,title,icon,href,on_click,c__5626__auto__,size__5627__auto__,b__47983,s__47981__$2,temp__5825__auto__){
return (function (){
if(cljs.core.fn_QMARK_(on_click)){
(on_click.cljs$core$IFn$_invoke$arity$0 ? on_click.cljs$core$IFn$_invoke$arity$0() : on_click.call(null));
} else {
if(typeof href === 'string'){
frontend.util.open_url(href);
} else {
}
}

return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","help-open?","ui/help-open?",-1862197612),false);
});})(i__47982,G__47988,G__47988__$1,vec__47984,idx,map__47987,map__47987__$1,item,title,icon,href,on_click,c__5626__auto__,size__5627__auto__,b__47983,s__47981__$2,temp__5825__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.pr-2.opacity-40","span.flex.items-center.pr-2.opacity-40",-411030228),frontend.ui.icon(icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(20)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.font-normal","strong.font-normal",521441352),title], null)], null);

}
})());

var G__48057 = (i__47982 + (1));
i__47982 = G__48057;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47983),frontend$components$container$help_menu_popup_$_iter__47980(cljs.core.chunk_rest(s__47981__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47983),null);
}
} else {
var vec__47989 = cljs.core.first(s__47981__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47989,(0),null);
var map__47992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47989,(1),null);
var map__47992__$1 = cljs.core.__destructure_map(map__47992);
var item = map__47992__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47992__$1,new cljs.core.Keyword(null,"title","title",636505583));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47992__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47992__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47992__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return cljs.core.cons((function (){var G__47993 = item;
var G__47993__$1 = (((G__47993 instanceof cljs.core.Keyword))?G__47993.fqn:null);
switch (G__47993__$1) {
case "hr":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"!my-2",new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)], null);

break;
default:
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.it.flex.items-center.px-4.py-1.select-none","a.it.flex.items-center.px-4.py-1.select-none",1255286724),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),title,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (G__47993,G__47993__$1,vec__47989,idx,map__47992,map__47992__$1,item,title,icon,href,on_click,s__47981__$2,temp__5825__auto__){
return (function (){
if(cljs.core.fn_QMARK_(on_click)){
(on_click.cljs$core$IFn$_invoke$arity$0 ? on_click.cljs$core$IFn$_invoke$arity$0() : on_click.call(null));
} else {
if(typeof href === 'string'){
frontend.util.open_url(href);
} else {
}
}

return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","help-open?","ui/help-open?",-1862197612),false);
});})(G__47993,G__47993__$1,vec__47989,idx,map__47992,map__47992__$1,item,title,icon,href,on_click,s__47981__$2,temp__5825__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.pr-2.opacity-40","span.flex.items-center.pr-2.opacity-40",-411030228),frontend.ui.icon(icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(20)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.font-normal","strong.font-normal",521441352),title], null)], null);

}
})(),frontend$components$container$help_menu_popup_$_iter__47980(cljs.core.rest(s__47981__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(medley.core.indexed.cljs$core$IFn$_invoke$arity$1(frontend.components.container.help_menu_items));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ft.pl-11.pb-3.flex.flex-col.gap-1","div.ft.pl-11.pb-3.flex.flex-col.gap-1",-588382638),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity.text-xs.opacity-30","span.opacity.text-xs.opacity-30",1430090403),"Logseq ",frontend.version.version], null),(function (){var temp__5825__auto__ = cljs.core.not_empty(logseq.common.version.revision());
if(cljs.core.truth_(temp__5825__auto__)){
var revision = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity.text-xs.opacity-30","span.opacity.text-xs.opacity-30",1430090403),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help","revision","help/revision",-1351141531),revision], 0))], null);
} else {
return null;
}
})()], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$container$help_menu_popup__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47994 = cljs.core.first(args__31746__auto__);
var G__47995 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47994,G__47995) : io.factorhouse.hsx.core.obj_get.call(null,G__47994,G__47995));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"help-menu-popup","help-menu-popup",204530143,null),args__31746__auto__),frontend$components$container$help_menu_popup,args__31746__auto__,null);
}
};
var frontend$components$container$help_menu_popup = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__48059__i = 0, G__48059__a = new Array(arguments.length -  0);
while (G__48059__i < G__48059__a.length) {G__48059__a[G__48059__i] = arguments[G__48059__i + 0]; ++G__48059__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__48059__a,0,null);
} 
return frontend$components$container$help_menu_popup__delegate.call(this,args__31746__auto__);};
frontend$components$container$help_menu_popup.cljs$lang$maxFixedArity = 0;
frontend$components$container$help_menu_popup.cljs$lang$applyTo = (function (arglist__48060){
var args__31746__auto__ = cljs.core.seq(arglist__48060);
return frontend$components$container$help_menu_popup__delegate(args__31746__auto__);
});
frontend$components$container$help_menu_popup.cljs$core$IFn$_invoke$arity$variadic = frontend$components$container$help_menu_popup__delegate;
return frontend$components$container$help_menu_popup;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47996 = comp__31745__auto__;
var G__47997 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47996,G__47997) : io.factorhouse.hsx.core.react_memo.call(null,G__47996,G__47997));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"help-menu-popup");

return comp__31745__auto__;
})();
frontend.components.container.help_button = (function (){var render_fn__31744__auto__ = (function frontend$components$container$help_button(){
var help_open_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","help-open?","ui/help-open?",-1862197612)], null));
var handbooks_open_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","handbooks-open?","ui/handbooks-open?",1677401058)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__sidebar-help-btn","div.cp__sidebar-help-btn",18364934),frontend.ui.tooltip(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inner","div.inner",-1581324128),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop_propagation(e);

return frontend.state.toggle_BANG_(new cljs.core.Keyword("ui","help-open?","ui/help-open?",-1862197612));
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.scale-125","svg.scale-125",-856681834),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),new cljs.core.Keyword(null,"view-box","view-box",-1792199155),new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"height","height",1025178622)],["currentColor","none","round","24","http://www.w3.org/2000/svg","0 0 24 24","round","2","icon icon-tabler icon-tabler-help-small","24"]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"d","d",1972142424),"M0 0h24v24H0z",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M12 16v.01"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"], null)], null)], null)], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help.shortcuts","desc","help.shortcuts/desc",279151172)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"root-props","root-props",-1015460595),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delay-duration","delay-duration",278940904),(100)], null)], null))], null),(cljs.core.truth_(help_open_QMARK_)?frontend.components.container.help_menu_popup():null),(cljs.core.truth_(handbooks_open_QMARK_)?frontend.components.handbooks.handbooks_popup():null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$container$help_button__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47998 = cljs.core.first(args__31746__auto__);
var G__47999 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47998,G__47999) : io.factorhouse.hsx.core.obj_get.call(null,G__47998,G__47999));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"help-button","help-button",1787566080,null),args__31746__auto__),frontend$components$container$help_button,args__31746__auto__,null);
}
};
var frontend$components$container$help_button = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__48061__i = 0, G__48061__a = new Array(arguments.length -  0);
while (G__48061__i < G__48061__a.length) {G__48061__a[G__48061__i] = arguments[G__48061__i + 0]; ++G__48061__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__48061__a,0,null);
} 
return frontend$components$container$help_button__delegate.call(this,args__31746__auto__);};
frontend$components$container$help_button.cljs$lang$maxFixedArity = 0;
frontend$components$container$help_button.cljs$lang$applyTo = (function (arglist__48062){
var args__31746__auto__ = cljs.core.seq(arglist__48062);
return frontend$components$container$help_button__delegate(args__31746__auto__);
});
frontend$components$container$help_button.cljs$core$IFn$_invoke$arity$variadic = frontend$components$container$help_button__delegate;
return frontend$components$container$help_button;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48000 = comp__31745__auto__;
var G__48001 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48000,G__48001) : io.factorhouse.hsx.core.react_memo.call(null,G__48000,G__48001));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"help-button");

return comp__31745__auto__;
})();
frontend.components.container.context_menu_click_should_hide_QMARK_ = (function frontend$components$container$context_menu_click_should_hide_QMARK_(target){
var menu_item = (function (){var G__48002 = target;
if((G__48002 == null)){
return null;
} else {
return G__48002.closest("[role='menuitem']");
}
})();
var submenu_trigger_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("menu",(function (){var G__48003 = menu_item;
if((G__48003 == null)){
return null;
} else {
return G__48003.getAttribute("aria-haspopup");
}
})());
return cljs.core.boolean$((function (){var and__5140__auto__ = target;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = cljs.core.not(frontend.util.input_QMARK_(target));
if(and__5140__auto____$1){
var and__5140__auto____$2 = menu_item;
if(cljs.core.truth_(and__5140__auto____$2)){
return (!(submenu_trigger_QMARK_));
} else {
return and__5140__auto____$2;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})());
});
frontend.components.container.app_context_menu_observer = (function (){var render_fn__31744__auto__ = (function frontend$components$container$app_context_menu_observer(){
logseq.shui.hooks.use_effect_BANG_((function (){
var handler = (function (e){
var target = frontend.components.container.goog$module$goog$object.get(e,"target");
var block_el = target.closest(".bullet-container[blockid]");
var ls_block_el = (function (){var G__48006 = target;
if((G__48006 == null)){
return null;
} else {
return G__48006.closest(".ls-block");
}
})();
var block_id = (function (){var or__5142__auto__ = (function (){var G__48007 = ls_block_el;
if((G__48007 == null)){
return null;
} else {
return G__48007.getAttribute("originalblockid");
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var G__48008 = block_el;
if((G__48008 == null)){
return null;
} else {
return G__48008.getAttribute("blockid");
}
}
})();
var map__48004 = frontend.state.get_state(new cljs.core.Keyword("block-ref","context","block-ref/context",-2102048446));
var map__48004__$1 = cljs.core.__destructure_map(map__48004);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48004__$1,new cljs.core.Keyword(null,"block","block",664686210));
var block_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48004__$1,new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
var map__48005 = frontend.state.get_state(new cljs.core.Keyword("page-title","context","page-title/context",1788836745));
var map__48005__$1 = cljs.core.__destructure_map(map__48005);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48005__$1,new cljs.core.Keyword(null,"page","page",849072397));
var page_entity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48005__$1,new cljs.core.Keyword(null,"page-entity","page-entity",1168837897));
var show_BANG_ = (function() { 
var G__48063__delegate = function (content,p__48009){
var map__48010 = p__48009;
var map__48010__$1 = cljs.core.__destructure_map(map__48010);
var option = map__48010__$1;
var G__48011 = e;
var G__48012 = (function (p__48014){
var map__48015 = p__48014;
var map__48015__$1 = cljs.core.__destructure_map(map__48015);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48015__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e__$1){
var temp__5825__auto__ = e__$1.target;
if(cljs.core.truth_(temp__5825__auto__)){
var target__$1 = temp__5825__auto__;
if(frontend.components.container.context_menu_click_should_hide_QMARK_(target__$1)){
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(id) : logseq.shui.ui.popup_hide_BANG_.call(null,id));
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"data-keep-selection","data-keep-selection",-2035432191),true], null),((cljs.core.fn_QMARK_(content))?(function (){var G__48016 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
return (content.cljs$core$IFn$_invoke$arity$1 ? content.cljs$core$IFn$_invoke$arity$1(G__48016) : content.call(null,G__48016));
})():content)], null);
});
var G__48013 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-before-hide","on-before-hide",782449747),frontend.state.dom_clear_selection_BANG_,new cljs.core.Keyword(null,"on-after-hide","on-after-hide",-1040754229),frontend.state.state_clear_selection_BANG_,new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-[280px] ls-context-menu-content"], null),new cljs.core.Keyword(null,"as-dropdown?","as-dropdown?",-37553558),true], null),option], 0));
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__48011,G__48012,G__48013) : logseq.shui.ui.popup_show_BANG_.call(null,G__48011,G__48012,G__48013));
};
var G__48063 = function (content,var_args){
var p__48009 = null;
if (arguments.length > 1) {
var G__48064__i = 0, G__48064__a = new Array(arguments.length -  1);
while (G__48064__i < G__48064__a.length) {G__48064__a[G__48064__i] = arguments[G__48064__i + 1]; ++G__48064__i;}
  p__48009 = new cljs.core.IndexedSeq(G__48064__a,0,null);
} 
return G__48063__delegate.call(this,content,p__48009);};
G__48063.cljs$lang$maxFixedArity = 1;
G__48063.cljs$lang$applyTo = (function (arglist__48065){
var content = cljs.core.first(arglist__48065);
var p__48009 = cljs.core.rest(arglist__48065);
return G__48063__delegate(content,p__48009);
});
G__48063.cljs$core$IFn$_invoke$arity$variadic = G__48063__delegate;
return G__48063;
})()
;
var handled = (cljs.core.truth_((function (){var and__5140__auto__ = page;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(block_id);
} else {
return and__5140__auto__;
}
})())?(function (){
show_BANG_((function (p__48017){
var map__48018 = p__48017;
var map__48018__$1 = cljs.core.__destructure_map(map__48018);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48018__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return frontend.components.content.page_title_custom_context_menu_content(page_entity,id);
}));

return frontend.state.set_state_BANG_(new cljs.core.Keyword("page-title","context","page-title/context",1788836745),null);
})()
:(cljs.core.truth_(block_ref)?(function (){
show_BANG_(frontend.components.content.block_ref_custom_context_menu_content(block,block_ref));

return frontend.state.set_state_BANG_(new cljs.core.Keyword("block-ref","context","block-ref/context",-2102048446),null);
})()
:((((frontend.state.selection_QMARK_()) && ((!(dommy.core.has_class_QMARK_(target,"bullet"))))))?(function (){var selection_blocks = frontend.state.get_selection_blocks();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(selection_blocks))){
var selected_block = cljs.core.first(selection_blocks);
var property_default_value_QMARK_ = (cljs.core.truth_(selected_block)?cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",dommy.core.attr(selected_block,"data-is-property-default-value")):null);
var temp__5825__auto__ = (function (){var G__48019 = selected_block;
var G__48019__$1 = (((G__48019 == null))?null:G__48019.getAttribute("blockid"));
if((G__48019__$1 == null)){
return null;
} else {
return cljs.core.parse_uuid(G__48019__$1);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var sel_block_id = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),sel_block_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (___21901__auto__){
return promesa.protocols._promise(show_BANG_(frontend.components.content.block_context_menu_content(target,sel_block_id,property_default_value_QMARK_)));
}));
}));
} else {
return null;
}
} else {
return show_BANG_(frontend.components.content.custom_context_menu_content(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"blocks-selection-context-menu","blocks-selection-context-menu",695587257)], null));
}
})():(cljs.core.truth_((function (){var and__5140__auto__ = block_id;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.parse_uuid(block_id);
} else {
return and__5140__auto__;
}
})())?(function (){var block__$1 = target.closest(".ls-block");
var property_default_value_QMARK_ = (cljs.core.truth_(block__$1)?cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",dommy.core.attr(block__$1,"data-is-property-default-value")):null);
if(cljs.core.truth_(block__$1)){
frontend.state.clear_selection_BANG_();

frontend.state.conj_selection_block_BANG_.cljs$core$IFn$_invoke$arity$2(block__$1,new cljs.core.Keyword(null,"down","down",1565245570));
} else {
}

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),cljs.core.uuid(block_id),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (___21901__auto__){
return promesa.protocols._promise(show_BANG_(frontend.components.content.block_context_menu_content(target,cljs.core.uuid(block_id),property_default_value_QMARK_)));
}));
}));
})():false
))));
if((!(handled === false))){
return frontend.util.stop(e);
} else {
return null;
}
});
window.addEventListener("contextmenu",handler);

return (function (){
return window.removeEventListener("contextmenu",handler);
});
}),cljs.core.PersistentVector.EMPTY);

return null;
});
var comp__31745__auto__ = (function() { 
var frontend$components$container$app_context_menu_observer__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48020 = cljs.core.first(args__31746__auto__);
var G__48021 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48020,G__48021) : io.factorhouse.hsx.core.obj_get.call(null,G__48020,G__48021));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"app-context-menu-observer","app-context-menu-observer",-1738804288,null),args__31746__auto__),frontend$components$container$app_context_menu_observer,args__31746__auto__,null);
}
};
var frontend$components$container$app_context_menu_observer = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__48066__i = 0, G__48066__a = new Array(arguments.length -  0);
while (G__48066__i < G__48066__a.length) {G__48066__a[G__48066__i] = arguments[G__48066__i + 0]; ++G__48066__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__48066__a,0,null);
} 
return frontend$components$container$app_context_menu_observer__delegate.call(this,args__31746__auto__);};
frontend$components$container$app_context_menu_observer.cljs$lang$maxFixedArity = 0;
frontend$components$container$app_context_menu_observer.cljs$lang$applyTo = (function (arglist__48067){
var args__31746__auto__ = cljs.core.seq(arglist__48067);
return frontend$components$container$app_context_menu_observer__delegate(args__31746__auto__);
});
frontend$components$container$app_context_menu_observer.cljs$core$IFn$_invoke$arity$variadic = frontend$components$container$app_context_menu_observer__delegate;
return frontend$components$container$app_context_menu_observer;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48022 = comp__31745__auto__;
var G__48023 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48022,G__48023) : io.factorhouse.hsx.core.react_memo.call(null,G__48022,G__48023));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"app-context-menu-observer");

return comp__31745__auto__;
})();
frontend.components.container.skip_selection_action_bar_target_QMARK_ = (function frontend$components$container$skip_selection_action_bar_target_QMARK_(target){
if(cljs.core.truth_(target)){
var or__5142__auto__ = target.closest(".block-control-wrap");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = target.closest("button");
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = target.closest("input");
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
var or__5142__auto____$3 = target.closest("textarea");
if(cljs.core.truth_(or__5142__auto____$3)){
return or__5142__auto____$3;
} else {
return target.closest("a");
}
}
}
}
} else {
return null;
}
});
frontend.components.container.maybe_show_selection_action_bar_BANG_ = (function frontend$components$container$maybe_show_selection_action_bar_BANG_(target){
if(cljs.core.truth_(frontend.components.container.skip_selection_action_bar_target_QMARK_(target))){
return null;
} else {
return frontend.handler.editor.show_action_bar_BANG_();
}
});
frontend.components.container.show_selection_action_bar_for_pointer_BANG_ = (function frontend$components$container$show_selection_action_bar_for_pointer_BANG_(button,target){
if((button === (0))){
return frontend.components.container.maybe_show_selection_action_bar_BANG_(target);
} else {
return null;
}
});
frontend.components.container.on_mouse_up = (function frontend$components$container$on_mouse_up(e){
return frontend.components.container.show_selection_action_bar_for_pointer_BANG_(e.button,e.target);
});
frontend.components.container.on_pointer_up = (function frontend$components$container$on_pointer_up(e){
frontend.components.block.selection.clear_pointer_down_BANG_.cljs$core$IFn$_invoke$arity$0();

var button = e.button;
var target = e.target;
return setTimeout((function (){
return frontend.components.container.show_selection_action_bar_for_pointer_BANG_(button,target);
}),(0));
});
frontend.components.container.root_container = (function (){var render_fn__31744__auto__ = (function frontend$components$container$root_container(route_match,main_content_SINGLEQUOTE_){
var current_repo = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("git","current-repo","git/current-repo",107438825)], null));
var theme = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","theme","ui/theme",-1247877132)], null));
var accent_color = (function (){var G__48024 = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","radix-color","ui/radix-color",1454689984)], null));
if((G__48024 == null)){
return null;
} else {
return cljs.core.name(G__48024);
}
})();
var editor_font = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","editor-font","ui/editor-font",582019775)], null));
var system_theme_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","system-theme?","ui/system-theme?",1330390822)], null));
var light_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("light",theme);
var sidebar_open_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887)], null));
var settings_open_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","settings-open?","ui/settings-open?",1491870343)], null));
var left_sidebar_open_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","left-sidebar-open?","ui/left-sidebar-open?",899579728)], null));
var wide_mode_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","wide-mode?","ui/wide-mode?",-1881882061)], null));
var ls_block_hl_colored_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","block-highlight-colored?","pdf/block-highlight-colored?",1763046626)], null));
var right_sidebar_blocks = frontend.state.use_right_sidebar_blocks();
var route_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var margin_less_pages_QMARK_ = cljs.core.boolean$((function (){var fexpr__48025 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"graph","graph",1558099509),null], null), null);
return (fexpr__48025.cljs$core$IFn$_invoke$arity$1 ? fexpr__48025.cljs$core$IFn$_invoke$arity$1(route_name) : fexpr__48025.call(null,route_name));
})());
var db_restoring_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","restoring?","db/restoring?",-1653366233)], null));
var page_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),route_name);
var home_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"home","home",-74557309),route_name);
var native_titlebar_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("window","native-titlebar?","window/native-titlebar?",195665142)], null));
var window_controls_QMARK_ = (function (){var and__5140__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.not(frontend.util.mac_QMARK_)) && (cljs.core.not(native_titlebar_QMARK_)));
} else {
return and__5140__auto__;
}
})();
var edit_QMARK_ = frontend.state.editing_QMARK_();
var default_home = frontend.components.left_sidebar.use_default_home_if_valid();
var logged_QMARK_ = frontend.handler.user.logged_in_QMARK_();
var fold_button_on_right_QMARK_ = frontend.state.use_enable_fold_button_right_QMARK_();
var show_action_bar_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("mobile","show-action-bar?","mobile/show-action-bar?",-1280463440)], null));
var preferred_language = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017)], null));
var uploading_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rtc","uploading?","rtc/uploading?",316154315)], null));
logseq.shui.hooks.use_effect_BANG_((function (){
var keydown_handler = (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((27),e.keyCode)){
if(((frontend.state.dialog_opened_QMARK_()) && ((!(((frontend.util.node_test_QMARK_) && (frontend.state.editing_QMARK_()))))))){
frontend.state.close_dialog_BANG_();
} else {
frontend.components.container.hide_context_menu_and_clear_selection.cljs$core$IFn$_invoke$arity$variadic(e,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"esc?","esc?",926265416),true], null)], 0));
}
} else {
}

return frontend.state.set_ui_last_key_code_BANG_(e.key);
});
var keyup_handler = (function (_e){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","latest-shortcut","editor/latest-shortcut",-2095243213),null);
});
window.addEventListener("pointerdown",frontend.components.container.hide_context_menu_and_clear_selection);

window.addEventListener("pointerup",frontend.components.container.on_pointer_up);

window.addEventListener("pointercancel",frontend.components.block.selection.clear_pointer_down_BANG_);

window.addEventListener("blur",frontend.components.block.selection.clear_pointer_down_BANG_);

window.addEventListener("keydown",keydown_handler);

window.addEventListener("keyup",keyup_handler);

return (function (){
window.removeEventListener("pointerdown",frontend.components.container.hide_context_menu_and_clear_selection);

window.removeEventListener("pointerup",frontend.components.container.on_pointer_up);

window.removeEventListener("pointercancel",frontend.components.block.selection.clear_pointer_down_BANG_);

window.removeEventListener("blur",frontend.components.block.selection.clear_pointer_down_BANG_);

window.removeEventListener("keydown",keydown_handler);

return window.removeEventListener("keyup",keyup_handler);
});
}),cljs.core.PersistentVector.EMPTY);

return frontend.components.theme.container(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"current-repo","current-repo",134812359),new cljs.core.Keyword(null,"db-restoring?","db-restoring?",-1548628664),new cljs.core.Keyword(null,"sidebar-blocks-len","sidebar-blocks-len",235708585),new cljs.core.Keyword(null,"accent-color","accent-color",908336425),new cljs.core.Keyword(null,"editor-font","editor-font",582015595),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"edit?","edit?",-842131310),new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"system-theme?","system-theme?",1330394234),new cljs.core.Keyword(null,"settings-open?","settings-open?",1491874651),new cljs.core.Keyword(null,"sidebar-open?","sidebar-open?",-1099774467)],[current_repo,db_restoring_QMARK_,cljs.core.count(right_sidebar_blocks),accent_color,editor_font,route_match,(function (e){
frontend.handler.editor.format.unhighlight_blocks_BANG_();

return frontend.util.fix_open_external_with_shift_BANG_(e);
}),theme,edit_QMARK_,preferred_language,frontend.context.i18n.t,system_theme_QMARK_,settings_open_QMARK_,sidebar_open_QMARK_]),new cljs.core.PersistentVector(null, 23, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.theme-container-inner#app-container-wrapper","main.theme-container-inner#app-container-wrapper",-537901372),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ls-left-sidebar-open","ls-left-sidebar-open",-1583098913),left_sidebar_open_QMARK_,new cljs.core.Keyword(null,"ls-right-sidebar-open","ls-right-sidebar-open",2065397740),sidebar_open_QMARK_,new cljs.core.Keyword(null,"ls-wide-mode","ls-wide-mode",1888272579),wide_mode_QMARK_,new cljs.core.Keyword(null,"ls-window-controls","ls-window-controls",17376007),window_controls_QMARK_,new cljs.core.Keyword(null,"ls-fold-button-on-right","ls-fold-button-on-right",-1787568911),fold_button_on_right_QMARK_,new cljs.core.Keyword(null,"ls-hl-colored","ls-hl-colored",1822824926),ls_block_hl_colored_QMARK_], null)], null)),new cljs.core.Keyword(null,"on-pointer-up","on-pointer-up",385194000),(function (){
var temp__5825__auto___48068 = goog.dom.getElement("app-container-wrapper");
if(cljs.core.truth_(temp__5825__auto___48068)){
var container_48069 = temp__5825__auto___48068;
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(container_48069,"blocks-selection-mode");

if((((cljs.core.count(frontend.state.get_selection_blocks()) > (1))) && (cljs.core.not(frontend.util.input_QMARK_(document.activeElement))))){
(frontend.util.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.util.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.util.clear_selection_BANG_.call(null));
} else {
}
} else {
}

return frontend.components.container.schedule_main_content_focus_BANG_();
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#skip-to-main","button#skip-to-main",-1395479666),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.ui.focus_element(frontend.ui.main_node());
}),new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",e.key)){
return frontend.ui.focus_element(frontend.ui.main_node());
} else {
return null;
}
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nav","skip-to-main-content","nav/skip-to-main-content",188542273)], 0))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.#app-container","div.#app-container",-2087174968),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),frontend.components.container.on_mouse_up], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#left-container","div#left-container",1782073488),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(sidebar_open_QMARK_)?"overflow-hidden":"w-full")], null),frontend.components.header.header(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"light?","light?",1454164744),light_QMARK_,new cljs.core.Keyword(null,"current-repo","current-repo",134812359),current_repo,new cljs.core.Keyword(null,"logged?","logged?",-814149905),logged_QMARK_,new cljs.core.Keyword(null,"page?","page?",644039860),page_QMARK_,new cljs.core.Keyword(null,"route-match","route-match",-1450985937),route_match,new cljs.core.Keyword(null,"default-home","default-home",171104159),default_home,new cljs.core.Keyword(null,"new-block-mode","new-block-mode",1189333509),frontend.components.container.new_block_mode], null)),frontend.components.test_site_banner.banner(),(cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.components.find_in_page.search():null),(cljs.core.truth_(uploading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.justify-center.full-height-without-header","div.flex.items-center.justify-center.full-height-without-header",2052347988),frontend.ui.loading.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync","creating-remote-graph","sync/creating-remote-graph",-1835746208)], 0)))], null):frontend.components.container.main(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"margin-less-pages?","margin-less-pages?",-1770705087),new cljs.core.Keyword(null,"db-restoring?","db-restoring?",-1548628664),new cljs.core.Keyword(null,"light?","light?",1454164744),new cljs.core.Keyword(null,"main-content","main-content",1386726798),new cljs.core.Keyword(null,"show-action-bar?","show-action-bar?",1936923598),new cljs.core.Keyword(null,"route-match","route-match",-1450985937),new cljs.core.Keyword(null,"logged?","logged?",-814149905),new cljs.core.Keyword(null,"home?","home?",806196596),new cljs.core.Keyword(null,"route-name","route-name",-932603717)],[margin_less_pages_QMARK_,db_restoring_QMARK_,light_QMARK_,main_content_SINGLEQUOTE_,show_action_bar_QMARK_,route_match,logged_QMARK_,home_QMARK_,route_name])))], null),(cljs.core.truth_(window_controls_QMARK_)?frontend.components.window_controls.container():null),frontend.components.right_sidebar.sidebar(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#app-single-container","div#app-single-container",-126204141)], null)], null),logseq.shui.toaster.core.install_toaster(),logseq.shui.dialog.core.install_dialogs(),logseq.shui.popup.core.install_popups(),frontend.components.container.custom_context_menu(),frontend.components.plugins.custom_js_installer(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t","t",-1397832519),frontend.context.i18n.t,new cljs.core.Keyword(null,"current-repo","current-repo",134812359),current_repo,new cljs.core.Keyword(null,"db-restoring?","db-restoring?",-1548628664),db_restoring_QMARK_], null)),frontend.components.container.app_context_menu_observer(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#download.hidden","a#download.hidden",2057981313)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#download-as-edn-v2.hidden","a#download-as-edn-v2.hidden",35025946)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#download-as-json-v2.hidden","a#download-as-json-v2.hidden",-1429454050)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#download-as-transit-debug.hidden","a#download-as-transit-debug.hidden",-1127249060)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#download-as-sqlite-db.hidden","a#download-as-sqlite-db.hidden",1318065699)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#download-as-db-edn.hidden","a#download-as-db-edn.hidden",-215919181)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#download-as-roam-json.hidden","a#download-as-roam-json.hidden",1957328973)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#download-as-html.hidden","a#download-as-html.hidden",-1218412359)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#download-as-zip.hidden","a#download-as-zip.hidden",-1589405338)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#export-as-markdown.hidden","a#export-as-markdown.hidden",-1156151275)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#export-as-opml.hidden","a#export-as-opml.hidden",679727892)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#convert-markdown-to-unordered-list-or-heading.hidden","a#convert-markdown-to-unordered-list-or-heading.hidden",196834605)], null),((((cljs.core.not(frontend.config.mobile_QMARK_)) && ((!(frontend.config.publishing_QMARK_)))))?frontend.components.container.help_button():null)], null));
});
var comp__31745__auto__ = (function() { 
var frontend$components$container$root_container__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48026 = cljs.core.first(args__31746__auto__);
var G__48027 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48026,G__48027) : io.factorhouse.hsx.core.obj_get.call(null,G__48026,G__48027));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"root-container","root-container",1233520131,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$container$root_container,args__31746__auto__,null);
}
};
var frontend$components$container$root_container = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__48070__i = 0, G__48070__a = new Array(arguments.length -  0);
while (G__48070__i < G__48070__a.length) {G__48070__a[G__48070__i] = arguments[G__48070__i + 0]; ++G__48070__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__48070__a,0,null);
} 
return frontend$components$container$root_container__delegate.call(this,args__31746__auto__);};
frontend$components$container$root_container.cljs$lang$maxFixedArity = 0;
frontend$components$container$root_container.cljs$lang$applyTo = (function (arglist__48071){
var args__31746__auto__ = cljs.core.seq(arglist__48071);
return frontend$components$container$root_container__delegate(args__31746__auto__);
});
frontend$components$container$root_container.cljs$core$IFn$_invoke$arity$variadic = frontend$components$container$root_container__delegate;
return frontend$components$container$root_container;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48028 = comp__31745__auto__;
var G__48029 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48028,G__48029) : io.factorhouse.hsx.core.react_memo.call(null,G__48028,G__48029));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"root-container");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.container.js.map
