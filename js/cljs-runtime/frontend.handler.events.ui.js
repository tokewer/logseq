goog.provide('frontend.handler.events.ui');
frontend.handler.events.ui._LT_asset_file_ready_QMARK_ = (function frontend$handler$events$ui$_LT_asset_file_ready_QMARK_(asset,file_name){
if(((frontend.config.publishing_QMARK_) || (cljs.core.seq(new cljs.core.Keyword("logseq.property.asset","external-url","logseq.property.asset/external-url",-1364775163).cljs$core$IFn$_invoke$arity$1(asset))))){
return promesa.core.resolved(true);
} else {
return frontend.fs.file_exists_QMARK_.cljs$core$IFn$_invoke$arity$2(frontend.config.get_repo_dir(frontend.state.get_current_repo()),logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(logseq.common.config.local_assets_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([file_name], 0)));
}
});
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("go","search","go/search",1564957958),(function (_){
if(cljs.core.truth_(frontend.handler.editor.dialog_exists_QMARK_(new cljs.core.Keyword(null,"ls-dialog-cmdk","ls-dialog-cmdk",-1613937560)))){
return null;
} else {
var G__47003 = frontend.components.cmdk.core.cmdk_modal;
var G__47004 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ls-dialog-cmdk","ls-dialog-cmdk",-1613937560),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ls-dialog-cmdk"], null),new cljs.core.Keyword(null,"close-btn?","close-btn?",336318726),false,new cljs.core.Keyword(null,"onEscapeKeyDown","onEscapeKeyDown",1908839912),(function (e){
return e.preventDefault();
})], null);
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2(G__47003,G__47004) : logseq.shui.ui.dialog_open_BANG_.call(null,G__47003,G__47004));
}
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("notification","show","notification/show",1864741804),(function (p__47005){
var vec__47006 = p__47005;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47006,(0),null);
var map__47009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47006,(1),null);
var map__47009__$1 = cljs.core.__destructure_map(map__47009);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47009__$1,new cljs.core.Keyword(null,"content","content",15833224));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47009__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var clear_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47009__$1,new cljs.core.Keyword(null,"clear?","clear?",1363344639));
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(content,status,clear_QMARK_);
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("shell","run","shell/run",1845268019),(function (_){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.components.shell.shell) : logseq.shui.ui.dialog_open_BANG_.call(null,frontend.components.shell.shell));
} else {
return null;
}
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("go","plugins","go/plugins",1900072925),(function (_){
return frontend.components.plugins.open_plugins_modal_BANG_();
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("go","plugins-waiting-lists","go/plugins-waiting-lists",-660383344),(function (_){
return frontend.components.plugins.open_waiting_updates_modal_BANG_();
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("go","plugins-from-file","go/plugins-from-file",-231716743),(function (p__47010){
var vec__47011 = p__47010;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47011,(0),null);
var plugins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47011,(1),null);
return frontend.components.plugins.open_plugins_from_file_modal_BANG_(plugins);
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("go","install-plugin-from-github","go/install-plugin-from-github",1433230947),(function (p__47014){
var vec__47015 = p__47014;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47015,(0),null);
var G__47018 = frontend.components.plugins.install_from_github_release_container();
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1(G__47018) : logseq.shui.ui.dialog_open_BANG_.call(null,G__47018));
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("go","plugins-settings","go/plugins-settings",-583021288),(function (p__47019){
var vec__47020 = p__47019;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47020,(0),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47020,(1),null);
var nav_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47020,(2),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47020,(3),null);
if(cljs.core.truth_(pid)){
frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","focused-settings","plugin/focused-settings",-1699334137),pid);

frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","navs-settings?","plugin/navs-settings?",-615901808),(!(nav_QMARK_ === false)));

return frontend.components.plugins.open_focused_settings_modal_BANG_(title);
} else {
return null;
}
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("go","proxy-settings","go/proxy-settings",1019838469),(function (p__47023){
var vec__47024 = p__47023;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47024,(0),null);
var agent_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47024,(1),null);
var G__47027 = frontend.components.plugins.user_proxy_settings_container(agent_opts);
var G__47028 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"https-proxy-panel","https-proxy-panel",-1589308406),new cljs.core.Keyword(null,"center?","center?",-323116631),true,new cljs.core.Keyword(null,"class","class",-2030961996),"lg:max-w-2xl"], null);
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2(G__47027,G__47028) : logseq.shui.ui.dialog_open_BANG_.call(null,G__47027,G__47028));
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("go","sync-server-settings","go/sync-server-settings",-1870453283),(function (p__47029){
var vec__47030 = p__47029;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47030,(0),null);
var G__47033 = frontend.components.settings.sync_server_url_settings_container();
var G__47034 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sync-server-panel","sync-server-panel",-1438089722),new cljs.core.Keyword(null,"center?","center?",-323116631),true,new cljs.core.Keyword(null,"class","class",-2030961996),"lg:max-w-2xl"], null);
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2(G__47033,G__47034) : logseq.shui.ui.dialog_open_BANG_.call(null,G__47033,G__47034));
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("go","publish-server-settings","go/publish-server-settings",1151535113),(function (p__47035){
var vec__47036 = p__47035;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47036,(0),null);
var G__47039 = frontend.components.settings.publish_server_url_settings_container();
var G__47040 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"publish-server-panel","publish-server-panel",-960086854),new cljs.core.Keyword(null,"center?","center?",-323116631),true,new cljs.core.Keyword(null,"class","class",-2030961996),"lg:max-w-2xl"], null);
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2(G__47039,G__47040) : logseq.shui.ui.dialog_open_BANG_.call(null,G__47039,G__47040));
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword(null,"redirect-to-home","redirect-to-home",236144576),(function (_){
frontend.handler.page.create_today_journal_BANG_();

if(cljs.core.truth_(frontend.util.capacitor_QMARK_())){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("mobile","set-tab","mobile/set-tab",-1818190267),"home"], null));
} else {
return null;
}
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("page","show-delete-dialog","page/show-delete-dialog",1559514803),(function (p__47041){
var vec__47042 = p__47041;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47042,(0),null);
var selected_rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47042,(1),null);
var ok_handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47042,(2),null);
var G__47045 = frontend.components.page.batch_delete_dialog(selected_rows,ok_handler);
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1(G__47045) : logseq.shui.ui.dialog_open_BANG_.call(null,G__47045));
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("modal","show-cards","modal/show-cards",1918730906),(function (p__47046){
var vec__47047 = p__47046;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47047,(0),null);
var cards_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47047,(1),null);
var G__47050 = (function (){
return frontend.extensions.fsrs.cards_view(cards_id,null);
});
var G__47051 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"srs","srs",1327991978),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"flashcards__cp","flashcards__cp",-1703002439)], null);
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2(G__47050,G__47051) : logseq.shui.ui.dialog_open_BANG_.call(null,G__47050,G__47051));
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("modal","show-themes-modal","modal/show-themes-modal",238725999),(function (p__47052){
var vec__47053 = p__47052;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47053,(0),null);
var classic_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47053,(1),null);
if(cljs.core.truth_(classic_QMARK_)){
return frontend.components.plugins.open_select_theme_BANG_();
} else {
return frontend.handler.route.go_to_search_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"themes","themes",-702786642));
}
}));
frontend.handler.events.ui._LT_page_for_publish_dialog = (function frontend$handler$events$ui$_LT_page_for_publish_dialog(page_name){
var lookup = (cljs.core.truth_((frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.uuid_string_QMARK_.call(null,page_name)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.uuid(page_name)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null));
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096)], null)], null)], null),lookup], 0));
});
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("publish","open-dialog","publish/open-dialog",-1147291730),(function (_){
if(frontend.config.publishing_QMARK_){
return null;
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var temp__5825__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(temp__5825__auto__)){
var page_name = temp__5825__auto__;
return frontend.handler.events.ui._LT_page_for_publish_dialog(page_name);
} else {
return null;
}
})()),(function (page){
return promesa.protocols._promise((cljs.core.truth_(frontend.util.entity.page_QMARK_(page))?(function (){var G__47056 = (function (){
return frontend.components.page_menu.publish_page_dialog(page);
});
var G__47057 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-auto max-w-md"], null);
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2(G__47056,G__47057) : logseq.shui.ui.dialog_open_BANG_.call(null,G__47056,G__47057));
})():null));
}));
}));
}
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("ui","toggle-appearance","ui/toggle-appearance",1527686942),(function (_){
var popup_id = "appearance_settings";
if(cljs.core.truth_(goog.dom.getElement(popup_id))){
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(popup_id) : logseq.shui.ui.popup_hide_BANG_.call(null,popup_id));
} else {
var G__47058 = document.querySelector(".toolbar-dots-btn");
var G__47059 = (function (){
return frontend.components.settings.appearance();
});
var G__47060 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),popup_id,new cljs.core.Keyword(null,"focus-trigger?","focus-trigger?",799847826),false,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"end","end",-268185958)], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__47058,G__47059,G__47060) : logseq.shui.ui.popup_show_BANG_.call(null,G__47058,G__47059,G__47060));
}
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("plugin","consume-updates","plugin/consume-updates",-331798674),(function (p__47061){
var vec__47062 = p__47061;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47062,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47062,(1),null);
var prev_pending_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47062,(2),null);
var updated_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47062,(3),null);
var downloading_QMARK_ = new cljs.core.Keyword("plugin","updates-downloading?","plugin/updates-downloading?",1294108608).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0());
var auto_checking_QMARK_ = frontend.handler.plugin.get_auto_checking_QMARK_();
var temp__5825__auto___47270 = (function (){var and__5140__auto__ = cljs.core.not(downloading_QMARK_);
if(and__5140__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","updates-coming","plugin/updates-coming",104160263),id], null));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto___47270)){
var coming_47271 = temp__5825__auto___47270;
var error_code_47272 = new cljs.core.Keyword(null,"error-code","error-code",180497232).cljs$core$IFn$_invoke$arity$1(coming_47271);
var error_code_47273__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(error_code_47272,(""+new cljs.core.Keyword(null,"no-new-version","no-new-version",-944956961))))?null:error_code_47272);
var title_47274 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(coming_47271);
if(cljs.core.truth_((function (){var and__5140__auto__ = prev_pending_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(auto_checking_QMARK_);
} else {
return and__5140__auto__;
}
})())){
if(cljs.core.not(error_code_47273__$1)){
frontend.components.plugins.set_updates_sub_content_BANG_((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(title_47274)+"..."),(0));
} else {
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2((""+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","checked","plugin/checked",-1237382262)], 0)))+"]<"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(title_47274)+"> "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(error_code_47273__$1)),new cljs.core.Keyword(null,"error","error",-978969032));
}
} else {
}
} else {
}

if(cljs.core.truth_((function (){var and__5140__auto__ = updated_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return downloading_QMARK_;
} else {
return and__5140__auto__;
}
})())){
var temp__5823__auto__ = frontend.state.get_next_selected_coming_update();
if(cljs.core.truth_(temp__5823__auto__)){
var next_coming = temp__5823__auto__;
return frontend.handler.plugin.check_or_update_marketplace_plugin_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(next_coming,new cljs.core.Keyword(null,"only-check","only-check",-1961506795),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error-code","error-code",180497232),null], 0)),(function (e){
return console.error("[Download Err]",next_coming,e);
}));
} else {
return frontend.handler.plugin.close_updates_downloading();
}
} else {
var temp__5823__auto__ = cljs.core.second(cljs.core.first(new cljs.core.Keyword("plugin","updates-pending","plugin/updates-pending",-1190878256).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0())));
if(cljs.core.truth_(temp__5823__auto__)){
var next_pending = temp__5823__auto__;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Updates: take next pending - ",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(next_pending)], 0));

return setTimeout((function (){
return frontend.handler.plugin.check_or_update_marketplace_plugin_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(next_pending,new cljs.core.Keyword(null,"only-check","only-check",-1961506795),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"auto-check","auto-check",-393148337),auto_checking_QMARK_,new cljs.core.Keyword(null,"error-code","error-code",180497232),null], 0)),(function (e){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(e.toString(),new cljs.core.Keyword(null,"error","error",-978969032));

return console.error("[Check Err]",next_pending,e);
}));
}),(500));
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = prev_pending_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.not(auto_checking_QMARK_)) && (cljs.core.seq(frontend.state.all_available_coming_updates.cljs$core$IFn$_invoke$arity$0())));
} else {
return and__5140__auto__;
}
})())){
frontend.components.plugins.open_waiting_updates_modal_BANG_();
} else {
}

return frontend.handler.plugin.set_auto_checking_BANG_(false);
}
}
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("plugin","loader-perf-tip","plugin/loader-perf-tip",1893085954),(function (p__47065){
var vec__47066 = p__47065;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47066,(0),null);
var map__47069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47066,(1),null);
var map__47069__$1 = cljs.core.__destructure_map(map__47069);
var o = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47069__$1,new cljs.core.Keyword(null,"o","o",-1350007228));
var _s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47069__$1,new cljs.core.Keyword(null,"_s","_s",1698028404));
var _e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47069__$1,new cljs.core.Keyword(null,"_e","_e",1598460374));
var temp__5825__auto__ = o.options;
if(cljs.core.truth_(temp__5825__auto__)){
var opts = temp__5825__auto__;
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.components.plugins.perf_tip_content(o.id,opts.name,opts.url),new cljs.core.Keyword(null,"warning","warning",-1685650671),false,o.id);
} else {
return null;
}
}));
frontend.handler.events.ui._LT_block_ref = (function frontend$handler$events$ui$_LT_block_ref(block_ref){
if(cljs.core.map_QMARK_(block_ref)){
return promesa.core.resolved(block_ref);
} else {
if(cljs.core.uuid_QMARK_(block_ref)){
return frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),block_ref,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0));
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = typeof block_ref === 'string';
if(and__5140__auto__){
return (frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1(block_ref) : frontend.util.uuid_string_QMARK_.call(null,block_ref));
} else {
return and__5140__auto__;
}
})())){
return frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),cljs.core.uuid(block_ref),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0));
} else {
if(typeof block_ref === 'number'){
return frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),block_ref,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0));
} else {
return promesa.core.resolved(null);

}
}
}
}
});
frontend.handler.events.ui._LT_selection_blocks = (function frontend$handler$events$ui$_LT_selection_blocks(){
var temp__5825__auto__ = (function (){var and__5140__auto__ = cljs.core.seq(frontend.state.get_selection_block_ids());
if(and__5140__auto__){
return frontend.state.get_current_repo();
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_blocks(repo,frontend.state.get_selection_block_ids())),(function (results){
return promesa.protocols._promise(cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block","block",664686210),results)));
}));
}));
} else {
return null;
}
});
frontend.handler.events.ui.edit_original_block_BANG_ = (function frontend$handler$events$ui$edit_original_block_BANG_(editing_block,pos,p__47070){
var map__47071 = p__47070;
var map__47071__$1 = cljs.core.__destructure_map(map__47071);
var editing_default_property_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47071__$1,new cljs.core.Keyword(null,"editing-default-property?","editing-default-property?",1361962686));
if(cljs.core.truth_(editing_block)){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.events.ui._LT_block_ref(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(editing_block))),(function (editing_block__$1){
return promesa.protocols._promise((cljs.core.truth_(editing_block__$1)?(function (){var content = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(editing_block__$1);
var esc_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Escape",frontend.state.get_ui_last_key_code());
var vec__47072 = ((esc_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,pos], null):(((((cljs.core.count(content) >= pos)) && ((((pos >= (2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(frontend.util.nth_safe(content,(pos - (1))),frontend.util.nth_safe(content,(pos - (2))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0)))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.util.safe_subs.cljs$core$IFn$_invoke$arity$3(content,(0),(pos - (2))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.util.safe_subs.cljs$core$IFn$_invoke$arity$2(content,pos))),(pos - (2))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,pos], null)
));
var content_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47072,(0),null);
var pos__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47072,(1),null);
if(cljs.core.truth_(content_SINGLEQUOTE_)){
if(cljs.core.truth_(editing_default_property_QMARK_)){
return frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.state.get_current_repo(),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(editing_block__$1),content_SINGLEQUOTE_);
} else {
var G__47075 = editing_block__$1;
var G__47076 = (function (){var or__5142__auto__ = pos__$1;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"max","max",61366548);
}
})();
var G__47077 = (function (){var G__47078 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(content_SINGLEQUOTE_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47078,new cljs.core.Keyword(null,"custom-content","custom-content",-8240001),content_SINGLEQUOTE_);
} else {
return G__47078;
}
})();
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__47075,G__47076,G__47077) : frontend.handler.editor.edit_block_BANG_.call(null,G__47075,G__47076,G__47077));
}
} else {
return null;
}
})():null));
}));
}));
} else {
return null;
}
});
frontend.handler.events.ui.editor_new_property = (function frontend$handler$events$ui$editor_new_property(block,target,p__47080){
var map__47081 = p__47080;
var map__47081__$1 = cljs.core.__destructure_map(map__47081);
var opts = map__47081__$1;
var selected_blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47081__$1,new cljs.core.Keyword(null,"selected-blocks","selected-blocks",-96882948));
var popup_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47081__$1,new cljs.core.Keyword(null,"popup-id","popup-id",-224931026));
var editing_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47081__$1,new cljs.core.Keyword(null,"editing-block","editing-block",1298863681));
var editing_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47081__$1,new cljs.core.Keyword(null,"editing-pos","editing-pos",-1684121107));
var editing_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47081__$1,new cljs.core.Keyword(null,"editing-target","editing-target",1582498804));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(editing_block)?promesa.core.resolved(editing_block):frontend.handler.events.ui._LT_block_ref((function (){var G__47082 = frontend.state.get_edit_block();
if((G__47082 == null)){
return null;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(G__47082);
}
})()))),(function (editing_block__$1){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(editing_block__$1)?promesa.core.resolved(null):((cljs.core.seq(selected_blocks))?promesa.core.resolved(selected_blocks):frontend.handler.events.ui._LT_selection_blocks()
))),(function (selected_blocks__$1){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var temp__5825__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(temp__5825__auto__)){
var s = temp__5825__auto__;
if(cljs.core.truth_((frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1(s) : frontend.util.uuid_string_QMARK_.call(null,s)))){
return frontend.handler.events.ui._LT_block_ref(cljs.core.uuid(s));
} else {
return null;
}
} else {
return null;
}
})()),(function (current_block){
return promesa.protocols._promise((function (){var opts__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"editing-block","editing-block",1298863681),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"editing-pos","editing-pos",-1684121107),new cljs.core.Keyword(null,"editing-target","editing-target",1582498804)], 0));
var pos = (function (){var or__5142__auto__ = editing_pos;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.state.get_edit_pos();
}
})();
var edit_block_or_selected = (cljs.core.truth_(editing_block__$1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [editing_block__$1], null):((cljs.core.seq(selected_blocks__$1))?selected_blocks__$1:null));
var blocks = (function (){var or__5142__auto__ = (cljs.core.truth_(block)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null):null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = edit_block_or_selected;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
if(cljs.core.truth_(current_block)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_block], null);
} else {
return null;
}
}
}
})();
var opts_SINGLEQUOTE_ = (function (){var G__47083 = opts__$1;
if(cljs.core.truth_(editing_block__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__47083,new cljs.core.Keyword(null,"original-block","original-block",1808045862),editing_block__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edit-original-block","edit-original-block",179766995),(function (p1__47079_SHARP_){
return frontend.handler.events.ui.edit_original_block_BANG_(editing_block__$1,pos,p1__47079_SHARP_);
})], 0));
} else {
return G__47083;
}
})();
if(cljs.core.seq(blocks)){
var target_SINGLEQUOTE_ = (function (){var or__5142__auto__ = target;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = editing_target;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = (function (){var G__47084 = frontend.state.get_edit_input_id();
if((G__47084 == null)){
return null;
} else {
return goog.dom.getElement(G__47084);
}
})();
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return cljs.core.first(frontend.state.get_selection_blocks());
}
}
}
})();
if(cljs.core.truth_(target_SINGLEQUOTE_)){
var G__47085 = target_SINGLEQUOTE_;
var G__47086 = (function (){
return frontend.components.property.dialog.dialog(blocks,opts_SINGLEQUOTE_);
});
var G__47087 = (function (){var G__47088 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"align","align",1964212802),"start",new cljs.core.Keyword(null,"force-popover?","force-popover?",237318839),true], null);
if(cljs.core.truth_(popup_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47088,new cljs.core.Keyword(null,"id","id",-1388402092),popup_id);
} else {
return G__47088;
}
})();
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__47085,G__47086,G__47087) : logseq.shui.ui.popup_show_BANG_.call(null,G__47085,G__47086,G__47087));
} else {
var G__47089 = (function (){
return frontend.components.property.dialog.dialog(blocks,opts_SINGLEQUOTE_);
});
var G__47090 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"property-dialog","property-dialog",1885514281),new cljs.core.Keyword(null,"align","align",1964212802),"start"], null);
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2(G__47089,G__47090) : logseq.shui.ui.dialog_open_BANG_.call(null,G__47089,G__47090));
}
} else {
return null;
}
})());
}));
}));
}));
}));
});
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("editor","new-property","editor/new-property",-1370252491),(function (p__47091){
var vec__47092 = p__47091;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47092,(0),null);
var map__47095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47092,(1),null);
var map__47095__$1 = cljs.core.__destructure_map(map__47095);
var opts = map__47095__$1;
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47095__$1,new cljs.core.Keyword(null,"block","block",664686210));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47095__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(frontend.config.publishing_QMARK_){
return null;
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.events.ui._LT_block_ref((function (){var G__47096 = frontend.state.get_edit_block();
if((G__47096 == null)){
return null;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(G__47096);
}
})())),(function (editing_block){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__47097 = frontend.state.get_edit_input_id();
if((G__47097 == null)){
return null;
} else {
return goog.dom.getElement(G__47097);
}
})()),(function (editing_target){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__47098 = opts;
var G__47098__$1 = (cljs.core.truth_(editing_block)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__47098,new cljs.core.Keyword(null,"editing-block","editing-block",1298863681),editing_block,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"editing-pos","editing-pos",-1684121107),frontend.state.get_edit_pos()], 0)):G__47098);
if(cljs.core.truth_(editing_target)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47098__$1,new cljs.core.Keyword(null,"editing-target","editing-target",1582498804),editing_target);
} else {
return G__47098__$1;
}
})()),(function (opts_SINGLEQUOTE_){
return promesa.protocols._promise(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flush-input?","flush-input?",691997124),true], null))),(function (___21901__auto__){
return promesa.protocols._promise(frontend.handler.events.ui.editor_new_property(block,target,opts_SINGLEQUOTE_));
}));
})));
}));
}));
}));
}));
}
}));
frontend.handler.events.ui.reaction_target_block_ids = (function frontend$handler$events$ui$reaction_target_block_ids(blocks){
var blocks_SINGLEQUOTE_ = (((blocks == null))?null:((cljs.core.sequential_QMARK_(blocks))?blocks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blocks], null)
));
return cljs.core.vec((function (){var or__5142__auto__ = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),blocks_SINGLEQUOTE_));
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (function (){var G__47099 = frontend.state.get_edit_block();
var G__47099__$1 = (((G__47099 == null))?null:new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(G__47099));
if((G__47099__$1 == null)){
return null;
} else {
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__47099__$1],null));
}
})();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return cljs.core.seq(frontend.state.get_selection_block_ids());
}
}
})());
});
frontend.handler.events.ui.editor_new_reaction = (function frontend$handler$events$ui$editor_new_reaction(blocks,target){
var target_block_ids = frontend.handler.events.ui.reaction_target_block_ids(blocks);
var target_SINGLEQUOTE_ = (function (){var or__5142__auto__ = target;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (function (){var G__47100 = frontend.state.get_edit_input_id();
if((G__47100 == null)){
return null;
} else {
return goog.dom.getElement(G__47100);
}
})();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return cljs.core.first(frontend.state.get_selection_blocks());
}
}
})();
var on_pick = (function (popup_id,icon){
var emoji_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(icon);
var emoji_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"emoji","emoji",1031230144),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(icon));
if(emoji_QMARK_){
var seq__47101_47275 = cljs.core.seq(target_block_ids);
var chunk__47102_47276 = null;
var count__47103_47277 = (0);
var i__47104_47278 = (0);
while(true){
if((i__47104_47278 < count__47103_47277)){
var target_block_id_47279 = chunk__47102_47276.cljs$core$IIndexed$_nth$arity$2(null,i__47104_47278);
frontend.handler.reaction.toggle_reaction_BANG_(target_block_id_47279,emoji_id);


var G__47280 = seq__47101_47275;
var G__47281 = chunk__47102_47276;
var G__47282 = count__47103_47277;
var G__47283 = (i__47104_47278 + (1));
seq__47101_47275 = G__47280;
chunk__47102_47276 = G__47281;
count__47103_47277 = G__47282;
i__47104_47278 = G__47283;
continue;
} else {
var temp__5825__auto___47284 = cljs.core.seq(seq__47101_47275);
if(temp__5825__auto___47284){
var seq__47101_47285__$1 = temp__5825__auto___47284;
if(cljs.core.chunked_seq_QMARK_(seq__47101_47285__$1)){
var c__5673__auto___47286 = cljs.core.chunk_first(seq__47101_47285__$1);
var G__47287 = cljs.core.chunk_rest(seq__47101_47285__$1);
var G__47288 = c__5673__auto___47286;
var G__47289 = cljs.core.count(c__5673__auto___47286);
var G__47290 = (0);
seq__47101_47275 = G__47287;
chunk__47102_47276 = G__47288;
count__47103_47277 = G__47289;
i__47104_47278 = G__47290;
continue;
} else {
var target_block_id_47291 = cljs.core.first(seq__47101_47285__$1);
frontend.handler.reaction.toggle_reaction_BANG_(target_block_id_47291,emoji_id);


var G__47292 = cljs.core.next(seq__47101_47285__$1);
var G__47293 = null;
var G__47294 = (0);
var G__47295 = (0);
seq__47101_47275 = G__47292;
chunk__47102_47276 = G__47293;
count__47103_47277 = G__47294;
i__47104_47278 = G__47295;
continue;
}
} else {
}
}
break;
}

return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(popup_id) : logseq.shui.ui.popup_hide_BANG_.call(null,popup_id));
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.reaction","emoji-required-warning","block.reaction/emoji-required-warning",788886574)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));
}
});
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.seq(target_block_ids);
if(and__5140__auto__){
return target_SINGLEQUOTE_;
} else {
return and__5140__auto__;
}
})())){
(logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selection-action-bar","selection-action-bar",885868555)) : logseq.shui.ui.popup_hide_BANG_.call(null,new cljs.core.Keyword(null,"selection-action-bar","selection-action-bar",885868555)));

var G__47105 = target_SINGLEQUOTE_;
var G__47106 = (function (p__47108){
var map__47109 = p__47108;
var map__47109__$1 = cljs.core.__destructure_map(map__47109);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47109__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return frontend.components.icon.icon_search(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (_e,icon,_keep_popup_QMARK_){
return on_pick(id,icon);
}),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emoji","emoji",1031230144),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("icon","tab-emojis","icon/tab-emojis",-1889512558)], 0))], null)], null),new cljs.core.Keyword(null,"default-tab","default-tab",-566872037),new cljs.core.Keyword(null,"emoji","emoji",1031230144),new cljs.core.Keyword(null,"show-used?","show-used?",4329186),true,new cljs.core.Keyword(null,"icon-value","icon-value",-510636889),null], null));
});
var G__47107 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ls-icon-picker"], null)], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__47105,G__47106,G__47107) : logseq.shui.ui.popup_show_BANG_.call(null,G__47105,G__47106,G__47107));
} else {
return null;
}
});
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("editor","new-reaction","editor/new-reaction",303252261),(function (p__47110){
var vec__47111 = p__47110;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47111,(0),null);
var map__47114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47111,(1),null);
var map__47114__$1 = cljs.core.__destructure_map(map__47114);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47114__$1,new cljs.core.Keyword(null,"block","block",664686210));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47114__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47114__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(frontend.config.publishing_QMARK_){
return null;
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0()),(function (___21901__auto__){
return promesa.protocols._promise(frontend.handler.events.ui.editor_new_reaction(((cljs.core.seq(blocks))?blocks:block),target));
}));
}));
}
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("graph","new-db-graph","graph/new-db-graph",-1877792394),(function (p__47115){
var vec__47116 = p__47115;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47116,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47116,(1),null);
var G__47119 = frontend.components.repo.new_db_graph;
var G__47120 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"new-db-graph","new-db-graph",-1707976156),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","create-new","graph/create-new",1636314094)], 0)),new cljs.core.Keyword(null,"align","align",1964212802),(cljs.core.truth_(frontend.util.mobile_QMARK_())?new cljs.core.Keyword(null,"top","top",-1856271961):new cljs.core.Keyword(null,"center","center",-748944368)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"500px"], null)], null);
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2(G__47119,G__47120) : logseq.shui.ui.dialog_open_BANG_.call(null,G__47119,G__47120));
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("dialog-select","graph-open","dialog-select/graph-open",-404346606),(function (_event){
return frontend.components.select.dialog_select_BANG_(new cljs.core.Keyword(null,"graph-open","graph-open",-328022081));
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("dialog-select","graph-remove","dialog-select/graph-remove",-555470642),(function (_event){
return frontend.components.select.dialog_select_BANG_(new cljs.core.Keyword(null,"graph-remove","graph-remove",-143683669));
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("dialog-select","db-graph-replace","dialog-select/db-graph-replace",1491312407),(function (_event){
return frontend.components.select.dialog_select_BANG_(new cljs.core.Keyword(null,"db-graph-replace","db-graph-replace",542096376));
}));
frontend.handler.events.ui.hide_action_bar_BANG_ = (function frontend$handler$events$ui$hide_action_bar_BANG_(){
if(cljs.core.truth_(frontend.handler.editor.popup_exists_QMARK_(new cljs.core.Keyword(null,"selection-action-bar","selection-action-bar",885868555)))){
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selection-action-bar","selection-action-bar",885868555)) : logseq.shui.ui.popup_hide_BANG_.call(null,new cljs.core.Keyword(null,"selection-action-bar","selection-action-bar",885868555)));
} else {
return null;
}
});
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("editor","show-action-bar","editor/show-action-bar",-1302945332),(function (_event){
var selection = frontend.state.get_selection_blocks();
var first_visible_block = cljs.core.some((function (p1__47121_SHARP_){
if(cljs.core.truth_((frontend.util.el_visible_in_viewport_QMARK_.cljs$core$IFn$_invoke$arity$2 ? frontend.util.el_visible_in_viewport_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__47121_SHARP_,true) : frontend.util.el_visible_in_viewport_QMARK_.call(null,p1__47121_SHARP_,true)))){
return p1__47121_SHARP_;
} else {
return null;
}
}),selection);
if(cljs.core.truth_((function (){var and__5140__auto__ = first_visible_block;
if(cljs.core.truth_(and__5140__auto__)){
return (!(logseq.shui.dialog.core.has_dialog_QMARK_()));
} else {
return and__5140__auto__;
}
})())){
frontend.handler.events.ui.hide_action_bar_BANG_();

var G__47123 = first_visible_block;
var G__47124 = (function (){
return frontend.components.selection.action_bar();
});
var G__47125 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"selection-action-bar","selection-action-bar",885868555),new cljs.core.Keyword(null,"focus-trigger?","focus-trigger?",799847826),false,new cljs.core.Keyword(null,"force-popover?","force-popover?",237318839),true,new cljs.core.Keyword(null,"root-props","root-props",-1015460595),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modal","modal",-1031880850),false], null),new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"side","side",389652279),"top",new cljs.core.Keyword(null,"onCloseAutoFocus","onCloseAutoFocus",-349969117),(function (p1__47122_SHARP_){
return p1__47122_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"class","class",-2030961996),"!w-max !max-w-none !overflow-visible !py-0 !px-0 !border-none"], null),new cljs.core.Keyword(null,"auto-side?","auto-side?",-577583716),false,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981)], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__47123,G__47124,G__47125) : logseq.shui.ui.popup_show_BANG_.call(null,G__47123,G__47124,G__47125));
} else {
return null;
}
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("editor","hide-action-bar","editor/hide-action-bar",-1927566378),(function (_event){
frontend.handler.events.ui.hide_action_bar_BANG_();

return frontend.state.set_state_BANG_(new cljs.core.Keyword("mobile","show-action-bar?","mobile/show-action-bar?",-1280463440),false);
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("user","logout","user/logout",1413770948),(function (p__47126){
var vec__47127 = p__47126;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47127,(0),null);
return frontend.components.user.login.sign_out_BANG_();
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("user","login","user/login",51503538),(function (p__47130){
var vec__47131 = p__47130;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47131,(0),null);
if(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())){
return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"user-login","user-login",1532000569)], null));
} else {
return frontend.components.user.login.open_login_modal_BANG_();
}
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("asset","dialog-edit-external-url","asset/dialog-edit-external-url",175071068),(function (p__47134){
var vec__47135 = p__47134;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47135,(0),null);
var asset_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47135,(1),null);
var pdf_current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47135,(2),null);
var G__47138 = frontend.components.assets.edit_external_url_content(asset_block,pdf_current);
var G__47139 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"edit-external-asset-source-dialog","edit-external-asset-source-dialog",-319557659),new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(asset_block)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","edit-title","asset/edit-title",290484637)], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","create-title","asset/create-title",1932605922)], 0))),new cljs.core.Keyword(null,"center?","center?",-323116631),true], null);
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2(G__47138,G__47139) : logseq.shui.ui.dialog_open_BANG_.call(null,G__47138,G__47139));
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("asset","show-preview","asset/show-preview",-1843236874),(function (p__47140){
var vec__47141 = p__47140;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47141,(0),null);
var asset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47141,(1),null);
var temp__5825__auto__ = new cljs.core.Keyword("logseq.property.asset","type","logseq.property.asset/type",-1142083098).cljs$core$IFn$_invoke$arity$1(asset);
if(cljs.core.truth_(temp__5825__auto__)){
var asset_type_str = temp__5825__auto__;
var asset_type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(asset_type_str);
var image_QMARK_ = cljs.core.contains_QMARK_(logseq.common.config.img_formats(),asset_type);
var video_QMARK_ = cljs.core.contains_QMARK_(frontend.config.video_formats,asset_type);
var pdf_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pdf","pdf",1586765132),asset_type);
var file_name = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(asset))+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(asset_type_str));
var rel_path = (function (){var or__5142__auto__ = new cljs.core.Keyword("logseq.property.asset","external-url","logseq.property.asset/external-url",-1364775163).cljs$core$IFn$_invoke$arity$1(asset);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic((""+"../"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.config.local_assets_dir)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([file_name], 0));
}
})();
if(image_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.assets._LT_make_asset_url.cljs$core$IFn$_invoke$arity$1(rel_path)),(function (url){
return promesa.protocols._promise((cljs.core.truth_(url)?frontend.extensions.lightbox.preview_images_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),url,new cljs.core.Keyword(null,"w","w",354169001),(function (){var or__5142__auto__ = new cljs.core.Keyword("logseq.property.asset","width","logseq.property.asset/width",-1857865839).cljs$core$IFn$_invoke$arity$1(asset);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (1200);
}
})(),new cljs.core.Keyword(null,"h","h",1109658740),(function (){var or__5142__auto__ = new cljs.core.Keyword("logseq.property.asset","height","logseq.property.asset/height",330616504).cljs$core$IFn$_invoke$arity$1(asset);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (800);
}
})()], null)], null)):null));
}));
}));
} else {
if(video_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.events.ui._LT_asset_file_ready_QMARK_(asset,file_name)),(function (file_ready_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.assets.maybe_request_remote_asset_download_BANG_(frontend.state.get_current_repo(),asset,file_ready_QMARK_)),(function (requested_QMARK_){
return promesa.protocols._promise((cljs.core.truth_(requested_QMARK_)?frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","downloading","asset/downloading",-239412065)], 0))):promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.assets._LT_make_asset_url.cljs$core$IFn$_invoke$arity$1(rel_path)),(function (url){
return promesa.protocols._promise((cljs.core.truth_(url)?(function (){var G__47144 = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-2.items-center","div.flex.flex-col.gap-2.items-center",-1586975667),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-medium.text-sm.self-start.truncate.max-w-full","div.font-medium.text-sm.self-start.truncate.max-w-full",1582563642),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(asset)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"video.rounded.max-w-full","video.rounded.max-w-full",-1501364455),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),url,new cljs.core.Keyword(null,"controls","controls",1340701452),true,new cljs.core.Keyword(null,"autoPlay","autoPlay",-561263241),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),"80vh"], null)], null)], null)], null);
});
var G__47145 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"asset-video-preview","asset-video-preview",-994285451),new cljs.core.Keyword(null,"auto-width?","auto-width?",93515862),true,new cljs.core.Keyword(null,"center?","center?",-323116631),true], null);
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2(G__47144,G__47145) : logseq.shui.ui.dialog_open_BANG_.call(null,G__47144,G__47145));
})():null));
}));
}))));
}));
}));
}));
} else {
if(pdf_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.assets._LT_make_asset_url.cljs$core$IFn$_invoke$arity$1(rel_path)),(function (url){
return promesa.protocols._promise((function (){var temp__5825__auto____$1 = frontend.extensions.pdf.assets.inflate_asset.cljs$core$IFn$_invoke$arity$variadic(rel_path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),asset,new cljs.core.Keyword(null,"href","href",-793805698),url], null)], 0));
if(cljs.core.truth_(temp__5825__auto____$1)){
var current = temp__5825__auto____$1;
return frontend.state.set_current_pdf_BANG_(current);
} else {
return null;
}
})());
}));
}));
} else {
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(asset));

}
}
}
} else {
return null;
}
}));
frontend.handler.events.ui.ensure_user_rsa_keys_if_possible_BANG_ = (function frontend$handler$events$ui$ensure_user_rsa_keys_if_possible_BANG_(){
if(cljs.core.truth_(cljs.core.deref(frontend.state._STAR_db_worker))){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rtc","sync-app-state","rtc/sync-app-state",-1693789406)], null))),(function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","set-db-sync-config","thread-api/set-db-sync-config",-619924056),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"ws-url","ws-url",-1466481235),frontend.config.db_sync_ws_url(),new cljs.core.Keyword(null,"http-base","http-base",2042022955),frontend.config.db_sync_http_base()], null)], 0))),(function (___21901__auto____$1){
return promesa.protocols._promise(frontend.state._LT_invoke_db_worker(new cljs.core.Keyword("thread-api","db-sync-ensure-user-rsa-keys","thread-api/db-sync-ensure-user-rsa-keys",973720503)));
}));
}));
})),(function (error){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.events.ui",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db-sync","ensure-user-rsa-keys-failed","db-sync/ensure-user-rsa-keys-failed",-1415114600),error,new cljs.core.Keyword(null,"line","line",212345235),496], null)),null);
} else {
}

return null;
}));
} else {
return promesa.core.resolved(null);
}
});
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("user","fetch-info-and-graphs","user/fetch-info-and-graphs",-1029959720),(function (p__47147){
var vec__47148 = p__47147;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47148,(0),null);
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","loading?","ui/loading?",1905710757),new cljs.core.Keyword(null,"login","login",55217519)], null),false);

var c__23549__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23550__auto__ = (function (){var switch__23444__auto__ = (function (state_47211){
var state_val_47212 = (state_47211[(1)]);
if((state_val_47212 === (7))){
var state_47211__$1 = state_47211;
var statearr_47213_47296 = state_47211__$1;
(statearr_47213_47296[(2)] = null);

(statearr_47213_47296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (20))){
var inst_47179 = (state_47211[(2)]);
var state_47211__$1 = state_47211;
var statearr_47214_47297 = state_47211__$1;
(statearr_47214_47297[(2)] = inst_47179);

(statearr_47214_47297[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (27))){
var inst_47201 = (state_47211[(2)]);
var state_47211__$1 = state_47211;
var statearr_47215_47298 = state_47211__$1;
(statearr_47215_47298[(2)] = inst_47201);

(statearr_47215_47298[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (1))){
var inst_47151 = frontend.handler.user._LT_user_info(frontend.handler.user.remoteapi);
var state_47211__$1 = state_47211;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47211__$1,(2),inst_47151);
} else {
if((state_val_47212 === (24))){
var inst_47189 = (state_47211[(7)]);
var inst_47187 = (state_47211[(2)]);
var inst_47188 = frontend.handler.repo.refresh_repos_BANG_();
var inst_47189__$1 = frontend.state.get_current_repo();
var state_47211__$1 = (function (){var statearr_47216 = state_47211;
(statearr_47216[(8)] = inst_47187);

(statearr_47216[(9)] = inst_47188);

(statearr_47216[(7)] = inst_47189__$1);

return statearr_47216;
})();
if(cljs.core.truth_(inst_47189__$1)){
var statearr_47217_47299 = state_47211__$1;
(statearr_47217_47299[(1)] = (25));

} else {
var statearr_47218_47300 = state_47211__$1;
(statearr_47218_47300[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (4))){
var inst_47153 = (state_47211[(10)]);
var inst_47157 = cljs.core.map_QMARK_(inst_47153);
var state_47211__$1 = state_47211;
if(inst_47157){
var statearr_47219_47301 = state_47211__$1;
(statearr_47219_47301[(1)] = (6));

} else {
var statearr_47220_47302 = state_47211__$1;
(statearr_47220_47302[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (15))){
var inst_47171 = (state_47211[(11)]);
var inst_47174 = (state_47211[(12)]);
var inst_47174__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47171,new cljs.core.Keyword(null,"welcome","welcome",-578152123));
var state_47211__$1 = (function (){var statearr_47221 = state_47211;
(statearr_47221[(12)] = inst_47174__$1);

return statearr_47221;
})();
if(inst_47174__$1){
var statearr_47222_47303 = state_47211__$1;
(statearr_47222_47303[(1)] = (18));

} else {
var statearr_47223_47304 = state_47211__$1;
(statearr_47223_47304[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (21))){
var inst_47184 = frontend.handler.db_based.sync._LT_get_remote_graphs();
var inst_47185 = cljs.core.async.interop.p__GT_c(inst_47184);
var state_47211__$1 = state_47211;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47211__$1,(24),inst_47185);
} else {
if((state_val_47212 === (13))){
var state_47211__$1 = state_47211;
var statearr_47224_47305 = state_47211__$1;
(statearr_47224_47305[(2)] = new cljs.core.Keyword(null,"unavailable","unavailable",1529915531));

(statearr_47224_47305[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (22))){
var state_47211__$1 = state_47211;
var statearr_47225_47306 = state_47211__$1;
(statearr_47225_47306[(2)] = null);

(statearr_47225_47306[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (29))){
var state_47211__$1 = state_47211;
var statearr_47226_47307 = state_47211__$1;
(statearr_47226_47307[(2)] = null);

(statearr_47226_47307[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (6))){
var inst_47153 = (state_47211[(10)]);
var inst_47160 = (state_47211[(13)]);
var inst_47159 = frontend.state.set_user_info_BANG_(inst_47153);
var inst_47160__$1 = frontend.handler.user.user_uuid();
var state_47211__$1 = (function (){var statearr_47227 = state_47211;
(statearr_47227[(14)] = inst_47159);

(statearr_47227[(13)] = inst_47160__$1);

return statearr_47227;
})();
if(cljs.core.truth_(inst_47160__$1)){
var statearr_47228_47308 = state_47211__$1;
(statearr_47228_47308[(1)] = (9));

} else {
var statearr_47229_47309 = state_47211__$1;
(statearr_47229_47309[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (28))){
var inst_47189 = (state_47211[(7)]);
var inst_47195 = frontend.handler.db_based.rtc_flows.trigger_rtc_start(inst_47189);
var state_47211__$1 = state_47211;
var statearr_47230_47310 = state_47211__$1;
(statearr_47230_47310[(2)] = inst_47195);

(statearr_47230_47310[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (25))){
var inst_47153 = (state_47211[(10)]);
var inst_47171 = (state_47211[(11)]);
var inst_47182 = (state_47211[(15)]);
var inst_47189 = (state_47211[(7)]);
var inst_47191 = (function (){var result = inst_47153;
var status = inst_47171;
var fetch_graphs_QMARK_ = inst_47182;
var temp__5825__auto__ = inst_47189;
var current_repo = inst_47189;
return (function (p1__47146_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_repo,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__47146_SHARP_));
});
})();
var inst_47192 = frontend.state.get_rtc_graphs();
var inst_47193 = cljs.core.some(inst_47191,inst_47192);
var state_47211__$1 = state_47211;
if(cljs.core.truth_(inst_47193)){
var statearr_47231_47311 = state_47211__$1;
(statearr_47231_47311[(1)] = (28));

} else {
var statearr_47232_47312 = state_47211__$1;
(statearr_47232_47312[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (17))){
var inst_47182 = (state_47211[(15)]);
var inst_47182__$1 = (state_47211[(2)]);
var state_47211__$1 = (function (){var statearr_47233 = state_47211;
(statearr_47233[(15)] = inst_47182__$1);

return statearr_47233;
})();
if(cljs.core.truth_(inst_47182__$1)){
var statearr_47234_47313 = state_47211__$1;
(statearr_47234_47313[(1)] = (21));

} else {
var statearr_47235_47314 = state_47211__$1;
(statearr_47235_47314[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (3))){
var state_47211__$1 = state_47211;
var statearr_47236_47315 = state_47211__$1;
(statearr_47236_47315[(2)] = null);

(statearr_47236_47315[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (12))){
var state_47211__$1 = state_47211;
var statearr_47237_47316 = state_47211__$1;
(statearr_47237_47316[(2)] = new cljs.core.Keyword(null,"welcome","welcome",-578152123));

(statearr_47237_47316[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (2))){
var inst_47153 = (state_47211[(10)]);
var inst_47153__$1 = (state_47211[(2)]);
var inst_47154 = (inst_47153__$1 instanceof cljs.core.ExceptionInfo);
var state_47211__$1 = (function (){var statearr_47238 = state_47211;
(statearr_47238[(10)] = inst_47153__$1);

return statearr_47238;
})();
if(cljs.core.truth_(inst_47154)){
var statearr_47239_47317 = state_47211__$1;
(statearr_47239_47317[(1)] = (3));

} else {
var statearr_47240_47318 = state_47211__$1;
(statearr_47240_47318[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (23))){
var inst_47204 = (state_47211[(2)]);
var state_47211__$1 = state_47211;
var statearr_47241_47319 = state_47211__$1;
(statearr_47241_47319[(2)] = inst_47204);

(statearr_47241_47319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (19))){
var inst_47177 = frontend.handler.user.rtc_group_QMARK_();
var state_47211__$1 = state_47211;
var statearr_47242_47320 = state_47211__$1;
(statearr_47242_47320[(2)] = inst_47177);

(statearr_47242_47320[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (11))){
var inst_47166 = (state_47211[(2)]);
var inst_47167 = frontend.handler.user.alpha_or_beta_user_QMARK_();
var state_47211__$1 = (function (){var statearr_47243 = state_47211;
(statearr_47243[(16)] = inst_47166);

return statearr_47243;
})();
if(cljs.core.truth_(inst_47167)){
var statearr_47244_47321 = state_47211__$1;
(statearr_47244_47321[(1)] = (12));

} else {
var statearr_47245_47322 = state_47211__$1;
(statearr_47245_47322[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (9))){
var inst_47160 = (state_47211[(13)]);
var inst_47162 = frontend.modules.instrumentation.sentry.set_user_BANG_(inst_47160);
var inst_47163 = frontend.handler.events.ui.ensure_user_rsa_keys_if_possible_BANG_();
var state_47211__$1 = (function (){var statearr_47246 = state_47211;
(statearr_47246[(17)] = inst_47162);

return statearr_47246;
})();
var statearr_47247_47323 = state_47211__$1;
(statearr_47247_47323[(2)] = inst_47163);

(statearr_47247_47323[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (5))){
var inst_47209 = (state_47211[(2)]);
var state_47211__$1 = state_47211;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47211__$1,inst_47209);
} else {
if((state_val_47212 === (14))){
var inst_47172 = (state_47211[(18)]);
var inst_47171 = (state_47211[(2)]);
var inst_47172__$1 = frontend.handler.user.logged_in_QMARK_();
var state_47211__$1 = (function (){var statearr_47248 = state_47211;
(statearr_47248[(11)] = inst_47171);

(statearr_47248[(18)] = inst_47172__$1);

return statearr_47248;
})();
if(cljs.core.truth_(inst_47172__$1)){
var statearr_47249_47324 = state_47211__$1;
(statearr_47249_47324[(1)] = (15));

} else {
var statearr_47250_47325 = state_47211__$1;
(statearr_47250_47325[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (26))){
var state_47211__$1 = state_47211;
var statearr_47251_47326 = state_47211__$1;
(statearr_47251_47326[(2)] = null);

(statearr_47251_47326[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (16))){
var inst_47172 = (state_47211[(18)]);
var state_47211__$1 = state_47211;
var statearr_47252_47327 = state_47211__$1;
(statearr_47252_47327[(2)] = inst_47172);

(statearr_47252_47327[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (30))){
var inst_47198 = (state_47211[(2)]);
var state_47211__$1 = state_47211;
var statearr_47253_47328 = state_47211__$1;
(statearr_47253_47328[(2)] = inst_47198);

(statearr_47253_47328[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (10))){
var state_47211__$1 = state_47211;
var statearr_47254_47329 = state_47211__$1;
(statearr_47254_47329[(2)] = null);

(statearr_47254_47329[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (18))){
var inst_47174 = (state_47211[(12)]);
var state_47211__$1 = state_47211;
var statearr_47255_47330 = state_47211__$1;
(statearr_47255_47330[(2)] = inst_47174);

(statearr_47255_47330[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (8))){
var inst_47207 = (state_47211[(2)]);
var state_47211__$1 = state_47211;
var statearr_47256_47331 = state_47211__$1;
(statearr_47256_47331[(2)] = inst_47207);

(statearr_47256_47331[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var frontend$handler$events$ui$state_machine__23445__auto__ = null;
var frontend$handler$events$ui$state_machine__23445__auto____0 = (function (){
var statearr_47257 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47257[(0)] = frontend$handler$events$ui$state_machine__23445__auto__);

(statearr_47257[(1)] = (1));

return statearr_47257;
});
var frontend$handler$events$ui$state_machine__23445__auto____1 = (function (state_47211){
while(true){
var ret_value__23446__auto__ = (function (){try{while(true){
var result__23447__auto__ = switch__23444__auto__(state_47211);
if(cljs.core.keyword_identical_QMARK_(result__23447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23447__auto__;
}
break;
}
}catch (e47258){var ex__23448__auto__ = e47258;
var statearr_47259_47332 = state_47211;
(statearr_47259_47332[(2)] = ex__23448__auto__);


if(cljs.core.seq((state_47211[(4)]))){
var statearr_47260_47333 = state_47211;
(statearr_47260_47333[(1)] = cljs.core.first((state_47211[(4)])));

} else {
throw ex__23448__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47334 = state_47211;
state_47211 = G__47334;
continue;
} else {
return ret_value__23446__auto__;
}
break;
}
});
frontend$handler$events$ui$state_machine__23445__auto__ = function(state_47211){
switch(arguments.length){
case 0:
return frontend$handler$events$ui$state_machine__23445__auto____0.call(this);
case 1:
return frontend$handler$events$ui$state_machine__23445__auto____1.call(this,state_47211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$events$ui$state_machine__23445__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$events$ui$state_machine__23445__auto____0;
frontend$handler$events$ui$state_machine__23445__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$events$ui$state_machine__23445__auto____1;
return frontend$handler$events$ui$state_machine__23445__auto__;
})()
})();
var state__23551__auto__ = (function (){var statearr_47261 = f__23550__auto__();
(statearr_47261[(6)] = c__23549__auto__);

return statearr_47261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23551__auto__);
}));

return c__23549__auto__;
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("dialog","show-block","dialog/show-block",-1728519561),(function (p__47262){
var vec__47263 = p__47262;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47263,(0),null);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47263,(1),null);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47263,(2),null);
var G__47266 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-8.w-full.h-full","div.p-8.w-full.h-full",1928946472),frontend.components.page.page_container(block,option)], null);
var G__47267 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ls-dialog-block","ls-dialog-block",-281695979),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ls-dialog-block"], null),new cljs.core.Keyword(null,"onEscapeKeyDown","onEscapeKeyDown",1908839912),(function (e){
return e.preventDefault();
})], null);
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2(G__47266,G__47267) : logseq.shui.ui.dialog_open_BANG_.call(null,G__47266,G__47267));
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("dialog","quick-add","dialog/quick-add",802706812),(function (_){
var G__47268 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full.h-full","div.w-full.h-full",69261245),frontend.components.quick_add.quick_add()], null);
var G__47269 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ls-dialog-quick-add","ls-dialog-quick-add",442995164),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ls-dialog-quick-add"], null),new cljs.core.Keyword(null,"onEscapeKeyDown","onEscapeKeyDown",1908839912),(function (e){
return e.preventDefault();
})], null);
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2(G__47268,G__47269) : logseq.shui.ui.dialog_open_BANG_.call(null,G__47268,G__47269));
}));

//# sourceMappingURL=frontend.handler.events.ui.js.map
