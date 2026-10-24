goog.provide('frontend.page');
frontend.page.setup_fns_BANG_ = (function frontend$page$setup_fns_BANG_(){
try{return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(frontend.ui.setup_active_keystroke_BANG_(),frontend.ui.setup_viewport_listeners_BANG_());
}catch (e48175){var _e = e48175;
return null;
}});
/**
 * This screen is displayed when the UI has crashed hard. It provides the user
 *   with basic troubleshooting steps to get them back to a working state. This
 *   component is purposefully stupid simple as it needs to render under any number
 *   of broken conditions
 */
frontend.page.helpful_default_error_screen = (function (){var render_fn__31744__auto__ = (function frontend$page$helpful_default_error_screen(){
var current_repo = frontend.state.get_current_repo();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#main-container.cp__sidebar-main-layout.flex-1.flex","div#main-container.cp__sidebar-main-layout.flex-1.flex",1084268297),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.#app-container","div.#app-container",-2087174968),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#left-container","div#left-container",1782073488),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#main-container.cp__sidebar-main-layout.flex-1.flex","div#main-container.cp__sidebar-main-layout.flex-1.flex",1084268297),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#main-content-container.scrollbar-spacing.w-full.flex.justify-center","div#main-content-container.scrollbar-spacing.w-full.flex.justify-center",-1052219503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__sidebar-main-content","div.cp__sidebar-main-content",-176649393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-center.px-4.py-10.sm:px-6.sm:py-14","div.flex.justify-center.px-4.py-10.sm:px-6.sm:py-14",1954135685),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full.max-w-3xl.flex.flex-col.gap-10.sm:gap-14","div.w-full.max-w-3xl.flex.flex-col.gap-10.sm:gap-14",2020546164),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full.max-w-2xl.mx-auto","div.w-full.max-w-2xl.mx-auto",-1235584261),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.items-start.gap-3.mb-6","div.flex.flex-col.items-start.gap-3.mb-6",-1720412185),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.icon-box.p-1.rounded","div.icon-box.p-1.rounded",1524846214),frontend.ui.icon("bug",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),frontend.ui.icon_size], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-2xl.font-bold","div.text-2xl.font-bold",-1769759923),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","something-went-wrong","page/something-went-wrong",1299552111)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-lg.leading-8","div.text-lg.leading-8",-220606269),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","logseq-is-having-a-problem","page/logseq-is-having-a-problem",1811118491)], 0))], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-4.sm:flex-row.sm:items-center.sm:justify-between.py-4","div.flex.flex-col.gap-4.sm:flex-row.sm:items-center.sm:justify-between.py-4",-2049417256),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.items-start.pr-4","div.flex.flex-col.items-start.pr-4",64463837),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-2xs.font-bold.uppercase.toned-down","div.text-2xs.font-bold.uppercase.toned-down",677458635),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","step","page/step",1292828841),"1"], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.leading-8","div.leading-8",-213770781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.highlighted.font-bold","span.highlighted.font-bold",-882224506),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","rebuild","page/rebuild",1526421570)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.toned-down","span.toned-down",-876866144),(""+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","search-index","page/search-index",1829613797)], 0))))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sm:self-start","div.sm:self-start",1180006991),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","try","page/try",1385175055)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.search.rebuild_indices_BANG_.cljs$core$IFn$_invoke$arity$1(true);
})], 0))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-4.sm:flex-row.sm:items-center.sm:justify-between.separator-top.py-4","div.flex.flex-col.gap-4.sm:flex-row.sm:items-center.sm:justify-between.separator-top.py-4",-1066828576),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.items-start.pr-4","div.flex.flex-col.items-start.pr-4",64463837),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-2xs.font-bold.uppercase.toned-down","div.text-2xs.font-bold.uppercase.toned-down",677458635),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","step","page/step",1292828841),"2"], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.leading-8","div.leading-8",-213770781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.highlighted.font-bold","span.highlighted.font-bold",-882224506),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","relaunch","page/relaunch",278842880)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.toned-down","span.toned-down",-876866144),(""+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","the-app","page/the-app",-359841993)], 0))))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.leading-6.toned-down","div.text-xs.leading-6.toned-down",-1822981016),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","relaunch-desc","page/relaunch-desc",-638091819)], 0))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sm:self-start","div.sm:self-start",1180006991),logseq.shui.ui.shortcut(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cmd",(cljs.core.truth_(frontend.util.electron_QMARK_())?"q":"r")], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-4.sm:flex-row.sm:items-center.sm:justify-between.separator-top.py-4","div.flex.flex-col.gap-4.sm:flex-row.sm:items-center.sm:justify-between.separator-top.py-4",-1066828576),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.items-start.pr-4","div.flex.flex-col.items-start.pr-4",64463837),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-2xs.font-bold.uppercase.toned-down","div.text-2xs.font-bold.uppercase.toned-down",677458635),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","step","page/step",1292828841),"3"], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.leading-8","div.leading-8",-213770781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.highlighted.font-bold","span.highlighted.font-bold",-882224506),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","export","ui/export",214376850)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.toned-down","span.toned-down",-876866144),(""+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","current-graph-as-sqlite-db","page/current-graph-as-sqlite-db",956021494)], 0))))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.leading-6.toned-down","div.text-xs.leading-6.toned-down",-1822981016),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","send-db-for-debugging","page/send-db-for-debugging",-886922722)], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#download-as-sqlite-db.hidden","a#download-as-sqlite-db.hidden",1318065699)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sm:self-start","div.sm:self-start",1180006991),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","graph","export/graph",297159273)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.export$.export_repo_as_sqlite_db_BANG_(current_repo);
})], 0))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-4.sm:flex-row.sm:items-center.sm:justify-between.separator-top.py-4","div.flex.flex-col.gap-4.sm:flex-row.sm:items-center.sm:justify-between.separator-top.py-4",-1066828576),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.items-start.pr-4","div.flex.flex-col.items-start.pr-4",64463837),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-2xs.font-bold.uppercase.toned-down","div.text-2xs.font-bold.uppercase.toned-down",677458635),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","step","page/step",1292828841),"4"], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.leading-8","div.leading-8",-213770781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.highlighted.font-bold","span.highlighted.font-bold",-882224506),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","clear","page/clear",1875752624)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.toned-down","span.toned-down",-876866144),(""+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","local-storage","page/local-storage",-1297146163)], 0))))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.leading-6.toned-down","div.text-xs.leading-6.toned-down",-1822981016),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","clear-local-storage-desc","page/clear-local-storage-desc",1655604649)], 0))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sm:self-start","div.sm:self-start",1180006991),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","try","page/try",1385175055)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
localStorage.clear();

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","cleared","page/cleared",-1270524951)], 0)),new cljs.core.Keyword(null,"success","success",1890645906));
})], 0))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.max-w-2xl.mx-auto.mt-6.space-y-2.text-base.leading-8","div.max-w-2xl.mx-auto.mt-6.space-y-2.text-base.leading-8",1635312132),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.m-0","p.m-0",-595141747),frontend.context.i18n.interpolate_sentence.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","open-all-graphs-desc","page/open-all-graphs-desc",-294177014)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(frontend.util.capacitor_QMARK_())){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("mobile","set-tab","mobile/set-tab",-1818190267),"graphs"], null));
} else {
return frontend.handler.route.redirect_to_all_graphs();
}
})], null)], null)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.m-0","p.m-0",-595141747),frontend.context.i18n.interpolate_sentence.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","open-issue-desc","page/open-issue-desc",-198370069)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/logseq/db-test/issues/new?labels=from:in-app&template=bug_report.yaml"], null)], null)], 0))], null)], null)], null)], null)], null)], null)], null)], null)], null)], null),logseq.shui.toaster.core.install_toaster()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$page$helpful_default_error_screen__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48176 = cljs.core.first(args__31746__auto__);
var G__48177 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48176,G__48177) : io.factorhouse.hsx.core.obj_get.call(null,G__48176,G__48177));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"helpful-default-error-screen","helpful-default-error-screen",-429255116,null),args__31746__auto__),frontend$page$helpful_default_error_screen,args__31746__auto__,null);
}
};
var frontend$page$helpful_default_error_screen = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__48199__i = 0, G__48199__a = new Array(arguments.length -  0);
while (G__48199__i < G__48199__a.length) {G__48199__a[G__48199__i] = arguments[G__48199__i + 0]; ++G__48199__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__48199__a,0,null);
} 
return frontend$page$helpful_default_error_screen__delegate.call(this,args__31746__auto__);};
frontend$page$helpful_default_error_screen.cljs$lang$maxFixedArity = 0;
frontend$page$helpful_default_error_screen.cljs$lang$applyTo = (function (arglist__48200){
var args__31746__auto__ = cljs.core.seq(arglist__48200);
return frontend$page$helpful_default_error_screen__delegate(args__31746__auto__);
});
frontend$page$helpful_default_error_screen.cljs$core$IFn$_invoke$arity$variadic = frontend$page$helpful_default_error_screen__delegate;
return frontend$page$helpful_default_error_screen;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48178 = comp__31745__auto__;
var G__48179 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48178,G__48179) : io.factorhouse.hsx.core.react_memo.call(null,G__48178,G__48179));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"helpful-default-error-screen");

return comp__31745__auto__;
})();
frontend.page.not_found = (function (){var render_fn__31744__auto__ = (function frontend$page$not_found(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col items-center justify-center min-h-screen bg-background"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-6xl font-bold text-gray-12 mb-4"], null),"404"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-2xl font-semibold text-gray-10 mb-6"], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","not-found-title","page/not-found-title",1734592167)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-500 mb-8"], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","not-found-desc","page/not-found-desc",1892256452)], 0))], null),(function (){var G__48180 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"home","home",-74557309));
}),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534)], null);
var G__48181 = logseq.shui.ui.tabler_icon("home");
var G__48182 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","go-back-home","page/go-back-home",-1065474583)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__48180,G__48181,G__48182) : logseq.shui.ui.button.call(null,G__48180,G__48181,G__48182));
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$page$not_found__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48183 = cljs.core.first(args__31746__auto__);
var G__48184 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48183,G__48184) : io.factorhouse.hsx.core.obj_get.call(null,G__48183,G__48184));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"not-found","not-found",1011451547,null),args__31746__auto__),frontend$page$not_found,args__31746__auto__,null);
}
};
var frontend$page$not_found = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__48201__i = 0, G__48201__a = new Array(arguments.length -  0);
while (G__48201__i < G__48201__a.length) {G__48201__a[G__48201__i] = arguments[G__48201__i + 0]; ++G__48201__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__48201__a,0,null);
} 
return frontend$page$not_found__delegate.call(this,args__31746__auto__);};
frontend$page$not_found.cljs$lang$maxFixedArity = 0;
frontend$page$not_found.cljs$lang$applyTo = (function (arglist__48202){
var args__31746__auto__ = cljs.core.seq(arglist__48202);
return frontend$page$not_found__delegate(args__31746__auto__);
});
frontend$page$not_found.cljs$core$IFn$_invoke$arity$variadic = frontend$page$not_found__delegate;
return frontend$page$not_found;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48185 = comp__31745__auto__;
var G__48186 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48185,G__48186) : io.factorhouse.hsx.core.react_memo.call(null,G__48185,G__48186));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"not-found");

return comp__31745__auto__;
})();
/**
 * React key for the painted route view. Title and path strings change while
 * typing; the resolved page or zoomed-block uuid does not.
 */
frontend.page.route_view_key = (function frontend$page$route_view_key(route_match,paint){
var or__5142__auto__ = (function (){var G__48187 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(paint,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null));
if((G__48187 == null)){
return null;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48187));
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(route_match);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null));
}
}
});
/**
 * A route switch unmounts the previous view at once. Keep it on screen until
 * the next route can paint in a single commit instead of flashing an empty
 * main area while its snapshots load.
 */
frontend.page.route_view = (function (){var render_fn__31744__auto__ = (function frontend$page$route_view(route_match){
var paint = frontend.routes.use_route_paint(route_match);
var ready_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(paint));
var vec__48188 = logseq.shui.hooks.use_state(null);
var held = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48188,(0),null);
var set_held_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48188,(1),null);
var current = ((ready_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route-match","route-match",-1450985937),route_match,new cljs.core.Keyword(null,"key","key",-1516042587),frontend.page.route_view_key(route_match,paint)], null):null);
if(cljs.core.truth_((function (){var and__5140__auto__ = current;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current,held);
} else {
return and__5140__auto__;
}
})())){
(set_held_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_held_BANG_.cljs$core$IFn$_invoke$arity$1(current) : set_held_BANG_.call(null,current));
} else {
}

var temp__5825__auto__ = (function (){var or__5142__auto__ = current;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return held;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var painted = temp__5825__auto__;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"route-match","route-match",-1450985937).cljs$core$IFn$_invoke$arity$1(painted))),new cljs.core.Keyword(null,"route-match","route-match",-1450985937).cljs$core$IFn$_invoke$arity$1(painted)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(painted)], null));
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$page$route_view__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48191 = cljs.core.first(args__31746__auto__);
var G__48192 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48191,G__48192) : io.factorhouse.hsx.core.obj_get.call(null,G__48191,G__48192));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"route-view","route-view",995926087,null),args__31746__auto__),frontend$page$route_view,args__31746__auto__,null);
}
};
var frontend$page$route_view = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__48203__i = 0, G__48203__a = new Array(arguments.length -  0);
while (G__48203__i < G__48203__a.length) {G__48203__a[G__48203__i] = arguments[G__48203__i + 0]; ++G__48203__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__48203__a,0,null);
} 
return frontend$page$route_view__delegate.call(this,args__31746__auto__);};
frontend$page$route_view.cljs$lang$maxFixedArity = 0;
frontend$page$route_view.cljs$lang$applyTo = (function (arglist__48204){
var args__31746__auto__ = cljs.core.seq(arglist__48204);
return frontend$page$route_view__delegate(args__31746__auto__);
});
frontend$page$route_view.cljs$core$IFn$_invoke$arity$variadic = frontend$page$route_view__delegate;
return frontend$page$route_view;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48193 = comp__31745__auto__;
var G__48194 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48193,G__48194) : io.factorhouse.hsx.core.react_memo.call(null,G__48193,G__48194));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"route-view");

return comp__31745__auto__;
})();
frontend.page.current_page = (function (){var render_fn__31744__auto__ = (function frontend$page$current_page(){
logseq.shui.hooks.use_effect_BANG_((function (){
frontend.state.setup_electron_updater_BANG_();

frontend.state.load_app_user_cfgs.cljs$core$IFn$_invoke$arity$0();

frontend.ui.inject_document_devices_envs_BANG_();

frontend.ui.inject_dynamic_style_node_BANG_();

frontend.handler.plugin.host_mounted_BANG_();

return frontend.page.setup_fns_BANG_();
}),cljs.core.PersistentVector.EMPTY);

var temp__5823__auto__ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-match","route-match",-1450985937)], null));
if(cljs.core.truth_(temp__5823__auto__)){
var route_match = temp__5823__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route_match)))){
return frontend.ui.catch_error_and_notify(frontend.page.helpful_default_error_screen(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),frontend.components.container.root_container(route_match,frontend.page.route_view(route_match)),(cljs.core.truth_(frontend.config.lsp_enabled_QMARK_)?frontend.components.plugins.hook_daemon_renderers():null)], null));
} else {
return null;
}
} else {
return frontend.page.not_found();
}
});
var comp__31745__auto__ = (function() { 
var frontend$page$current_page__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48195 = cljs.core.first(args__31746__auto__);
var G__48196 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48195,G__48196) : io.factorhouse.hsx.core.obj_get.call(null,G__48195,G__48196));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"current-page","current-page",1539237347,null),args__31746__auto__),frontend$page$current_page,args__31746__auto__,null);
}
};
var frontend$page$current_page = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__48205__i = 0, G__48205__a = new Array(arguments.length -  0);
while (G__48205__i < G__48205__a.length) {G__48205__a[G__48205__i] = arguments[G__48205__i + 0]; ++G__48205__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__48205__a,0,null);
} 
return frontend$page$current_page__delegate.call(this,args__31746__auto__);};
frontend$page$current_page.cljs$lang$maxFixedArity = 0;
frontend$page$current_page.cljs$lang$applyTo = (function (arglist__48206){
var args__31746__auto__ = cljs.core.seq(arglist__48206);
return frontend$page$current_page__delegate(args__31746__auto__);
});
frontend$page$current_page.cljs$core$IFn$_invoke$arity$variadic = frontend$page$current_page__delegate;
return frontend$page$current_page;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48197 = comp__31745__auto__;
var G__48198 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48197,G__48198) : io.factorhouse.hsx.core.react_memo.call(null,G__48197,G__48198));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"current-page");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.page.js.map
