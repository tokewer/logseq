goog.provide('frontend.components.plugins');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.plugins !== 'undefined') && (typeof frontend.components.plugins.PER_PAGE_SIZE !== 'undefined')){
} else {
frontend.components.plugins.PER_PAGE_SIZE = (15);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.plugins !== 'undefined') && (typeof frontend.components.plugins.DISABLED_PLUGINS_CLEANUP_THRESHOLD !== 'undefined')){
} else {
frontend.components.plugins.DISABLED_PLUGINS_CLEANUP_THRESHOLD = (100);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.plugins !== 'undefined') && (typeof frontend.components.plugins.DISABLED_PLUGINS_CLEANUP_SNOOZE_MS !== 'undefined')){
} else {
frontend.components.plugins.DISABLED_PLUGINS_CLEANUP_SNOOZE_MS = (((((1000) * (60)) * (60)) * (24)) * (30));
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.plugins !== 'undefined') && (typeof frontend.components.plugins.DISABLED_PLUGINS_CLEANUP_NOTIFICATION_ID !== 'undefined')){
} else {
frontend.components.plugins.DISABLED_PLUGINS_CLEANUP_NOTIFICATION_ID = new cljs.core.Keyword(null,"lsp-disabled-plugins-cleanup-warning","lsp-disabled-plugins-cleanup-warning",-594756809);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.plugins !== 'undefined') && (typeof frontend.components.plugins.DISABLED_PLUGINS_CLEANUP_SNOOZED_AT_KEY !== 'undefined')){
} else {
frontend.components.plugins.DISABLED_PLUGINS_CLEANUP_SNOOZED_AT_KEY = new cljs.core.Keyword(null,"lsp-disabled-plugins-cleanup-snoozed-at","lsp-disabled-plugins-cleanup-snoozed-at",-1241168483);
}
frontend.components.plugins._STAR_dirties_toggle_items = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
frontend.components.plugins.handle_installed_themes_key_down = (function frontend$components$plugins$handle_installed_themes_key_down(_STAR_cursor,_STAR_total,target,e){
var G__38676 = e.keyCode;
switch (G__38676) {
case (38):
frontend.util.stop(e);

return cljs.core.reset_BANG_(_STAR_cursor,(((cljs.core.deref(_STAR_cursor) === (0)))?(cljs.core.deref(_STAR_total) - (1)):(cljs.core.deref(_STAR_cursor) - (1))));

break;
case (40):
frontend.util.stop(e);

return cljs.core.reset_BANG_(_STAR_cursor,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_cursor),(cljs.core.deref(_STAR_total) - (1))))?(0):(cljs.core.deref(_STAR_cursor) + (1))));

break;
case (13):
frontend.util.stop(e);

var temp__5825__auto__ = target.querySelector(".is-active");
if(cljs.core.truth_(temp__5825__auto__)){
var active = temp__5825__auto__;
return active.click();
} else {
return null;
}

break;
default:
return null;

}
});
frontend.components.plugins.clear_dirties_states_BANG_ = (function frontend$components$plugins$clear_dirties_states_BANG_(){
return cljs.core.reset_BANG_(frontend.components.plugins._STAR_dirties_toggle_items,cljs.core.PersistentArrayMap.EMPTY);
});
frontend.components.plugins.render_classic_dropdown_items = (function frontend$components$plugins$render_classic_dropdown_items(id,items){
var iter__5628__auto__ = (function frontend$components$plugins$render_classic_dropdown_items_$_iter__38677(s__38678){
return (new cljs.core.LazySeq(null,(function (){
var s__38678__$1 = s__38678;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__38678__$1);
if(temp__5825__auto__){
var s__38678__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38678__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__38678__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__38680 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__38679 = (0);
while(true){
if((i__38679 < size__5627__auto__)){
var map__38681 = cljs.core._nth(c__5626__auto__,i__38679);
var map__38681__$1 = cljs.core.__destructure_map(map__38681);
var hr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38681__$1,new cljs.core.Keyword(null,"hr","hr",1377740067));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38681__$1,new cljs.core.Keyword(null,"item","item",249373802));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38681__$1,new cljs.core.Keyword(null,"title","title",636505583));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38681__$1,new cljs.core.Keyword(null,"options","options",99638489));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38681__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
cljs.core.chunk_append(b__38680,(function (){var on_click_SINGLEQUOTE_ = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(hr)){
return (logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dropdown_menu_separator.call(null));
} else {
var G__38682 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__38679,on_click_SINGLEQUOTE_,map__38681,map__38681__$1,hr,item,title,options,icon,c__5626__auto__,size__5627__auto__,b__38680,s__38678__$2,temp__5825__auto__){
return (function (e){
if(cljs.core.truth_(on_click_SINGLEQUOTE_)){
if((on_click_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? on_click_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(e) : on_click_SINGLEQUOTE_.call(null,e)) === false){
return null;
} else {
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(id) : logseq.shui.ui.popup_hide_BANG_.call(null,id));
}
} else {
return null;
}
});})(i__38679,on_click_SINGLEQUOTE_,map__38681,map__38681__$1,hr,item,title,options,icon,c__5626__auto__,size__5627__auto__,b__38680,s__38678__$2,temp__5825__auto__))
);
var G__38683 = (function (){var or__5142__auto__ = item;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1.w-full","span.flex.items-center.gap-1.w-full",1802139938),icon,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),title], null)], null);
}
})();
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__38682,G__38683) : logseq.shui.ui.dropdown_menu_item.call(null,G__38682,G__38683));
}
})());

var G__39501 = (i__38679 + (1));
i__38679 = G__39501;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38680),frontend$components$plugins$render_classic_dropdown_items_$_iter__38677(cljs.core.chunk_rest(s__38678__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38680),null);
}
} else {
var map__38684 = cljs.core.first(s__38678__$2);
var map__38684__$1 = cljs.core.__destructure_map(map__38684);
var hr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38684__$1,new cljs.core.Keyword(null,"hr","hr",1377740067));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38684__$1,new cljs.core.Keyword(null,"item","item",249373802));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38684__$1,new cljs.core.Keyword(null,"title","title",636505583));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38684__$1,new cljs.core.Keyword(null,"options","options",99638489));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38684__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
return cljs.core.cons((function (){var on_click_SINGLEQUOTE_ = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(hr)){
return (logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dropdown_menu_separator.call(null));
} else {
var G__38685 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (on_click_SINGLEQUOTE_,map__38684,map__38684__$1,hr,item,title,options,icon,s__38678__$2,temp__5825__auto__){
return (function (e){
if(cljs.core.truth_(on_click_SINGLEQUOTE_)){
if((on_click_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? on_click_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(e) : on_click_SINGLEQUOTE_.call(null,e)) === false){
return null;
} else {
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(id) : logseq.shui.ui.popup_hide_BANG_.call(null,id));
}
} else {
return null;
}
});})(on_click_SINGLEQUOTE_,map__38684,map__38684__$1,hr,item,title,options,icon,s__38678__$2,temp__5825__auto__))
);
var G__38686 = (function (){var or__5142__auto__ = item;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1.w-full","span.flex.items-center.gap-1.w-full",1802139938),icon,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),title], null)], null);
}
})();
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__38685,G__38686) : logseq.shui.ui.dropdown_menu_item.call(null,G__38685,G__38686));
}
})(),frontend$components$plugins$render_classic_dropdown_items_$_iter__38677(cljs.core.rest(s__38678__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(items);
});
frontend.components.plugins.installed_themes = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins$installed_themes(){
var _STAR_root = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var vec__38692 = logseq.shui.hooks.use_state(cljs.core.PersistentVector.EMPTY);
var themes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38692,(0),null);
var set_themes_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38692,(1),null);
var _STAR_cursor = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}),cljs.core.PersistentVector.EMPTY);
var _STAR_total = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}),cljs.core.PersistentVector.EMPTY);
var vec__38695 = logseq.shui.hooks.use_atom(_STAR_cursor);
var cursor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38695,(0),null);
var mode = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","theme","ui/theme",-1247877132)], null));
var all_themes = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-themes","plugin/installed-themes",1969555197)], null));
var installed_plugins = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034)], null));
var selected = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","selected-theme","plugin/selected-theme",-172679220)], null));
logseq.shui.hooks.use_effect_BANG_((function (){
var mode_title = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__38698 = mode;
switch (G__38698) {
case "dark":
return new cljs.core.Keyword("settings.general","theme-dark","settings.general/theme-dark",570330697);

break;
default:
return new cljs.core.Keyword("settings.general","theme-light","settings.general/theme-light",1525535941);

}
})()], 0));
var themes__$1 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__38688_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__38688_SHARP_);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38687_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(p1__38687_SHARP_),mode);
}),all_themes));
var no_mode_themes = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,opt){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opt,new cljs.core.Keyword(null,"group-first","group-first",1023924108),(idx === (0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"group-desc","group-desc",-883642045),(((idx === (0)))?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin.themes","light-and-dark","plugin.themes/light-and-dark",2094411560)], 0)):null)], 0));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__38690_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__38690_SHARP_);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38689_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(p1__38689_SHARP_),null);
}),all_themes)));
var themes__$2 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,opt){
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(opt),selected);
if(selected_QMARK_){
cljs.core.reset_BANG_(_STAR_cursor,(idx + (1)));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opt,new cljs.core.Keyword(null,"mode","mode",654403691),mode,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected","selected",574897764),selected_QMARK_], 0));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(themes__$1,no_mode_themes));
var themes__$3 = cljs.core.cons(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin.themes","default-name","plugin.themes/default-name",-369485962),clojure.string.capitalize(mode_title)], 0)),new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"description","description",-1428560544),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin.themes","default-desc","plugin.themes/default-desc",1107702716),mode_title], 0)),new cljs.core.Keyword(null,"mode","mode",654403691),mode,new cljs.core.Keyword(null,"selected","selected",574897764),(selected == null),new cljs.core.Keyword(null,"group-first","group-first",1023924108),true,new cljs.core.Keyword(null,"group-desc","group-desc",-883642045),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin.themes","group","plugin.themes/group",2019437317),mode_title], 0))], null),themes__$2);
(set_themes_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_themes_BANG_.cljs$core$IFn$_invoke$arity$1(themes__$3) : set_themes_BANG_.call(null,themes__$3));

return cljs.core.reset_BANG_(_STAR_total,cljs.core.count(themes__$3));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode,all_themes,selected], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var G__38699 = logseq.shui.hooks.deref(_STAR_root);
if((G__38699 == null)){
return null;
} else {
return G__38699.focus();
}
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__themes-installed","div.cp__themes-installed",143187462),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1),new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_root,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__38691_SHARP_){
return frontend.components.plugins.handle_installed_themes_key_down(_STAR_cursor,_STAR_total,p1__38691_SHARP_.currentTarget,p1__38691_SHARP_);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.mb-4.text-2xl.p-1","h1.mb-4.text-2xl.p-1",1716678143),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nav","themes","nav/themes",-702686063)], 0))], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,opt){
var current_selected_QMARK_ = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(opt);
var group_first_QMARK_ = new cljs.core.Keyword(null,"group-first","group-first",1023924108).cljs$core$IFn$_invoke$arity$1(opt);
var plg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(installed_plugins,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pid","pid",1018387698).cljs$core$IFn$_invoke$arity$1(opt)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opt)))], null),(cljs.core.truth_((function (){var and__5140__auto__ = group_first_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(idx,(0));
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.my-2","hr.my-2",930024796)], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.it.flex.px-3.py-1.5.rounded-sm.justify-between","div.it.flex.px-3.py-1.5.rounded-sm.justify-between",1407568914),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(opt),new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"is-selected","is-selected",-334199992),current_selected_QMARK_,new cljs.core.Keyword(null,"is-active","is-active",-1424968720),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,cursor)], null)], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
LSPluginCore.selectTheme(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(opt));

return (logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dialog_close_BANG_.call(null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.text-xs","div.flex.items-center.text-xs",505827359),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-60","div.opacity-60",-1650446509),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plg);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Logseq";
}
})())+" \u2022")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.name.ml-1","div.name.ml-1",1330505409),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opt)], null)], null),(cljs.core.truth_((function (){var or__5142__auto__ = group_first_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return current_selected_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),(cljs.core.truth_(group_first_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.opacity-60","small.opacity-60",1913667792),new cljs.core.Keyword(null,"group-desc","group-desc",-883642045).cljs$core$IFn$_invoke$arity$1(opt)], null):null),(cljs.core.truth_(current_selected_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.inline-flex.ml-1.opacity-60","small.inline-flex.ml-1.opacity-60",1954839558),frontend.ui.icon("check")], null):null)], null):null)], null)], null);
}),themes)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins$installed_themes__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38700 = cljs.core.first(args__31746__auto__);
var G__38701 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38700,G__38701) : io.factorhouse.hsx.core.obj_get.call(null,G__38700,G__38701));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"installed-themes","installed-themes",300233361,null),args__31746__auto__),frontend$components$plugins$installed_themes,args__31746__auto__,null);
}
};
var frontend$components$plugins$installed_themes = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__39516__i = 0, G__39516__a = new Array(arguments.length -  0);
while (G__39516__i < G__39516__a.length) {G__39516__a[G__39516__i] = arguments[G__39516__i + 0]; ++G__39516__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__39516__a,0,null);
} 
return frontend$components$plugins$installed_themes__delegate.call(this,args__31746__auto__);};
frontend$components$plugins$installed_themes.cljs$lang$maxFixedArity = 0;
frontend$components$plugins$installed_themes.cljs$lang$applyTo = (function (arglist__39517){
var args__31746__auto__ = cljs.core.seq(arglist__39517);
return frontend$components$plugins$installed_themes__delegate(args__31746__auto__);
});
frontend$components$plugins$installed_themes.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins$installed_themes__delegate;
return frontend$components$plugins$installed_themes;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38702 = comp__31745__auto__;
var G__38703 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38702,G__38703) : io.factorhouse.hsx.core.react_memo.call(null,G__38702,G__38703));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"installed-themes");

return comp__31745__auto__;
})();
frontend.components.plugins.unpacked_plugin_loader = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins$unpacked_plugin_loader(unpacked_pkg_path){
logseq.shui.hooks.use_effect_BANG_((function (){
var err_handle = (function (e){
var G__38704_39518 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((e["name"]));
var G__38704_39519__$1 = (((G__38704_39518 instanceof cljs.core.Keyword))?G__38704_39518.fqn:null);
switch (G__38704_39519__$1) {
case "IllegalPluginPackageError":
frontend.handler.plugin.show_illegal_plugin_package_notification_BANG_(e);

break;
case "ExistedImportedPluginPackageError":
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","existed-package","plugin/existed-package",1906378689),e.message], 0)),new cljs.core.Keyword(null,"error","error",-978969032));

break;
default:

}

return frontend.handler.plugin.reset_unpacked_state();
});
var reg_handle = (function (){
return frontend.handler.plugin.reset_unpacked_state();
});
if(cljs.core.truth_(unpacked_pkg_path)){
var G__38705_39525 = LSPluginCore;
G__38705_39525.once("error",err_handle);

G__38705_39525.once("registered",reg_handle);

G__38705_39525.register(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),unpacked_pkg_path], null)));

} else {
}

return (function (){
var G__38706 = LSPluginCore;
G__38706.off("error",err_handle);

G__38706.off("registered",reg_handle);

return G__38706;
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unpacked_pkg_path], null));

if(cljs.core.truth_(unpacked_pkg_path)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.inline-flex.px-3","strong.inline-flex.px-3",-1999883052),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","loading","ui/loading",-736989697)], 0))], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins$unpacked_plugin_loader__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38707 = cljs.core.first(args__31746__auto__);
var G__38708 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38707,G__38708) : io.factorhouse.hsx.core.obj_get.call(null,G__38707,G__38708));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"unpacked-plugin-loader","unpacked-plugin-loader",1584032301,null),args__31746__auto__),frontend$components$plugins$unpacked_plugin_loader,args__31746__auto__,null);
}
};
var frontend$components$plugins$unpacked_plugin_loader = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__39526__i = 0, G__39526__a = new Array(arguments.length -  0);
while (G__39526__i < G__39526__a.length) {G__39526__a[G__39526__i] = arguments[G__39526__i + 0]; ++G__39526__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__39526__a,0,null);
} 
return frontend$components$plugins$unpacked_plugin_loader__delegate.call(this,args__31746__auto__);};
frontend$components$plugins$unpacked_plugin_loader.cljs$lang$maxFixedArity = 0;
frontend$components$plugins$unpacked_plugin_loader.cljs$lang$applyTo = (function (arglist__39527){
var args__31746__auto__ = cljs.core.seq(arglist__39527);
return frontend$components$plugins$unpacked_plugin_loader__delegate(args__31746__auto__);
});
frontend$components$plugins$unpacked_plugin_loader.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins$unpacked_plugin_loader__delegate;
return frontend$components$plugins$unpacked_plugin_loader;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38709 = comp__31745__auto__;
var G__38710 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38709,G__38710) : io.factorhouse.hsx.core.react_memo.call(null,G__38709,G__38710));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"unpacked-plugin-loader");

return comp__31745__auto__;
})();
frontend.components.plugins.category_tabs = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins$category_tabs(t,total_nums,category,on_action){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.secondary-tabs.categories.flex","div.secondary-tabs.categories.flex",-828147898),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center","span.flex.items-center",-463750193),frontend.ui.icon("puzzle"),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nav","plugins","nav/plugins",1900047380)) : t.call(null,new cljs.core.Keyword("nav","plugins","nav/plugins",1900047380))),((cljs.core.vector_QMARK_(total_nums))?(""+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(total_nums))+")"):null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"intent","intent",-390846953),"link",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (on_action.cljs$core$IFn$_invoke$arity$1 ? on_action.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"plugins","plugins",1900073717)) : on_action.call(null,new cljs.core.Keyword(null,"plugins","plugins",1900073717)));
}),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"plugins","plugins",1900073717)))?"active":"")], 0)),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center","span.flex.items-center",-463750193),frontend.ui.icon("palette"),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nav","themes","nav/themes",-702686063)) : t.call(null,new cljs.core.Keyword("nav","themes","nav/themes",-702686063))),((cljs.core.vector_QMARK_(total_nums))?(""+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(total_nums))+")"):null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"intent","intent",-390846953),"link",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (on_action.cljs$core$IFn$_invoke$arity$1 ? on_action.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"themes","themes",-702786642)) : on_action.call(null,new cljs.core.Keyword(null,"themes","themes",-702786642)));
}),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"themes","themes",-702786642)))?"active":"")], 0))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins$category_tabs__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38711 = cljs.core.first(args__31746__auto__);
var G__38712 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38711,G__38712) : io.factorhouse.hsx.core.obj_get.call(null,G__38711,G__38712));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"category-tabs","category-tabs",-1444855608,null),args__31746__auto__),frontend$components$plugins$category_tabs,args__31746__auto__,null);
}
};
var frontend$components$plugins$category_tabs = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__39534__i = 0, G__39534__a = new Array(arguments.length -  0);
while (G__39534__i < G__39534__a.length) {G__39534__a[G__39534__i] = arguments[G__39534__i + 0]; ++G__39534__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__39534__a,0,null);
} 
return frontend$components$plugins$category_tabs__delegate.call(this,args__31746__auto__);};
frontend$components$plugins$category_tabs.cljs$lang$maxFixedArity = 0;
frontend$components$plugins$category_tabs.cljs$lang$applyTo = (function (arglist__39535){
var args__31746__auto__ = cljs.core.seq(arglist__39535);
return frontend$components$plugins$category_tabs__delegate(args__31746__auto__);
});
frontend$components$plugins$category_tabs.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins$category_tabs__delegate;
return frontend$components$plugins$category_tabs;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38713 = comp__31745__auto__;
var G__38714 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38713,G__38714) : io.factorhouse.hsx.core.react_memo.call(null,G__38713,G__38714));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"category-tabs");

return comp__31745__auto__;
})();
frontend.components.plugins.local_markdown_display = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins$local_markdown_display(){
var vec__38715 = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","active-readme","plugin/active-readme",-677043988)], null));
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38715,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38715,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__plugins-details","div.cp__plugins-details",-913149119),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var temp__5825__auto__ = e.target;
if(cljs.core.truth_(temp__5825__auto__)){
var target = temp__5825__auto__;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(target.nodeName),"a")) && ((!(clojure.string.blank_QMARK_(target.getAttribute("href"))))))){
apis.openExternal(target.getAttribute("href"));

return e.preventDefault();
} else {
return null;
}
} else {
return null;
}
})], null),(function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"repository","repository",1489835364).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
var temp__5825__auto____$1 = ((typeof repo === 'string')?repo:new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(repo));
if(cljs.core.truth_(temp__5825__auto____$1)){
var repo__$1 = temp__5825__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4.rounded-md.bg-base-3","div.p-4.rounded-md.bg-base-3",1387249382),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.items-center","a.flex.items-center",46069439),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),repo__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mr-1","span.mr-1",127520086),frontend.components.svg.github.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(25),new cljs.core.Keyword(null,"height","height",1025178622),(25)], null))], null),repo__$1], null)], null)], null);
} else {
return null;
}
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-1.bg-transparent.border-none.ls-block","div.p-1.bg-transparent.border-none.ls-block",-251650045),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"60vw",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(900)], null),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),content], null)], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins$local_markdown_display__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38718 = cljs.core.first(args__31746__auto__);
var G__38719 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38718,G__38719) : io.factorhouse.hsx.core.obj_get.call(null,G__38718,G__38719));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"local-markdown-display","local-markdown-display",-1213831686,null),args__31746__auto__),frontend$components$plugins$local_markdown_display,args__31746__auto__,null);
}
};
var frontend$components$plugins$local_markdown_display = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__39540__i = 0, G__39540__a = new Array(arguments.length -  0);
while (G__39540__i < G__39540__a.length) {G__39540__a[G__39540__i] = arguments[G__39540__i + 0]; ++G__39540__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__39540__a,0,null);
} 
return frontend$components$plugins$local_markdown_display__delegate.call(this,args__31746__auto__);};
frontend$components$plugins$local_markdown_display.cljs$lang$maxFixedArity = 0;
frontend$components$plugins$local_markdown_display.cljs$lang$applyTo = (function (arglist__39542){
var args__31746__auto__ = cljs.core.seq(arglist__39542);
return frontend$components$plugins$local_markdown_display__delegate(args__31746__auto__);
});
frontend$components$plugins$local_markdown_display.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins$local_markdown_display__delegate;
return frontend$components$plugins$local_markdown_display;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38720 = comp__31745__auto__;
var G__38721 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38720,G__38721) : io.factorhouse.hsx.core.react_memo.call(null,G__38720,G__38721));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"local-markdown-display");

return comp__31745__auto__;
})();
frontend.components.plugins.remote_readme_display = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins$remote_readme_display(p__38722,_content){
var map__38723 = p__38722;
var map__38723__$1 = cljs.core.__destructure_map(map__38723);
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38723__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679));
var src = (""+"./marketplace.html?repo="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe.lsp-frame-readme","iframe.lsp-frame-readme",-33633599),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),src], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins$remote_readme_display__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38724 = cljs.core.first(args__31746__auto__);
var G__38725 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38724,G__38725) : io.factorhouse.hsx.core.obj_get.call(null,G__38724,G__38725));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"remote-readme-display","remote-readme-display",-2128782348,null),args__31746__auto__),frontend$components$plugins$remote_readme_display,args__31746__auto__,null);
}
};
var frontend$components$plugins$remote_readme_display = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__39545__i = 0, G__39545__a = new Array(arguments.length -  0);
while (G__39545__i < G__39545__a.length) {G__39545__a[G__39545__i] = arguments[G__39545__i + 0]; ++G__39545__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__39545__a,0,null);
} 
return frontend$components$plugins$remote_readme_display__delegate.call(this,args__31746__auto__);};
frontend$components$plugins$remote_readme_display.cljs$lang$maxFixedArity = 0;
frontend$components$plugins$remote_readme_display.cljs$lang$applyTo = (function (arglist__39546){
var args__31746__auto__ = cljs.core.seq(arglist__39546);
return frontend$components$plugins$remote_readme_display__delegate(args__31746__auto__);
});
frontend$components$plugins$remote_readme_display.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins$remote_readme_display__delegate;
return frontend$components$plugins$remote_readme_display;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38726 = comp__31745__auto__;
var G__38727 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38726,G__38727) : io.factorhouse.hsx.core.react_memo.call(null,G__38726,G__38727));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"remote-readme-display");

return comp__31745__auto__;
})();
frontend.components.plugins.security_warning = (function frontend$components$plugins$security_warning(){
return frontend.ui.admonition(new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm","p.text-sm",-1988028746),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","security-warning","plugin/security-warning",555257415)], 0))], null));
});
frontend.components.plugins.format_number = (function frontend$components$plugins$format_number(var_args){
var args__5882__auto__ = [];
var len__5876__auto___39547 = arguments.length;
var i__5877__auto___39548 = (0);
while(true){
if((i__5877__auto___39548 < len__5876__auto___39547)){
args__5882__auto__.push((arguments[i__5877__auto___39548]));

var G__39550 = (i__5877__auto___39548 + (1));
i__5877__auto___39548 = G__39550;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.components.plugins.format_number.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.components.plugins.format_number.cljs$core$IFn$_invoke$arity$variadic = (function (num,p__38730){
var map__38731 = p__38730;
var map__38731__$1 = cljs.core.__destructure_map(map__38731);
var precision = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38731__$1,new cljs.core.Keyword(null,"precision","precision",-1175707478),(2));
if((num < (1000))){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
} else {
if((num >= (1000))){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((num / (1000)).toFixed(precision))+"k");
} else {
return null;
}
}
}));

(frontend.components.plugins.format_number.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.components.plugins.format_number.cljs$lang$applyTo = (function (seq38728){
var G__38729 = cljs.core.first(seq38728);
var seq38728__$1 = cljs.core.next(seq38728);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38729,seq38728__$1);
}));

frontend.components.plugins.card_ctls_of_market = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins$card_ctls_of_market(item,stat,installed_QMARK_,installing_or_updating_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ctl","div.ctl",1028457790),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.l.flex.items-center","ul.l.flex.items-center",-1870328202),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.flex.text-sm.items-center.pr-3","li.flex.text-sm.items-center.pr-3",1837860767),frontend.components.svg.star.cljs$core$IFn$_invoke$arity$1((16)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pl-1","span.pl-1",-1236384439),new cljs.core.Keyword(null,"stargazers_count","stargazers_count",-984649909).cljs$core$IFn$_invoke$arity$1(stat)], null)], null),(function (){var temp__5825__auto__ = (function (){var and__5140__auto__ = stat;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"total_downloads","total_downloads",-1370933259).cljs$core$IFn$_invoke$arity$1(stat);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var downloads = temp__5825__auto__;
if(cljs.core.truth_((function (){var and__5140__auto__ = downloads;
if(cljs.core.truth_(and__5140__auto__)){
return (downloads > (0));
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.flex.text-sm.items-center.pr-3","li.flex.text-sm.items-center.pr-3",1837860767),frontend.components.svg.cloud_down.cljs$core$IFn$_invoke$arity$1((16)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pl-1","span.pl-1",-1236384439),frontend.components.plugins.format_number(downloads)], null)], null);
} else {
return null;
}
} else {
return null;
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.r.flex.items-center","div.r.flex.items-center",526063224),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn","a.btn",-2143027730),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var or__5142__auto__ = installed_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return installing_or_updating_QMARK_;
}
})(),new cljs.core.Keyword(null,"installing","installing",506071602),installing_or_updating_QMARK_], null)], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.common.plugin.install_marketplace_plugin_BANG_(item);
})], null),(cljs.core.truth_(installed_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","installed","plugin/installed",-431253936)], 0)):(cljs.core.truth_(installing_or_updating_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center","span.flex.items-center",-463750193),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),frontend.components.svg.loading], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","installing","plugin/installing",-755703581)], 0))], null):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","install","plugin/install",-432957003)], 0))))], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins$card_ctls_of_market__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38732 = cljs.core.first(args__31746__auto__);
var G__38733 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38732,G__38733) : io.factorhouse.hsx.core.obj_get.call(null,G__38732,G__38733));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"card-ctls-of-market","card-ctls-of-market",-1265489494,null),args__31746__auto__),frontend$components$plugins$card_ctls_of_market,args__31746__auto__,null);
}
};
var frontend$components$plugins$card_ctls_of_market = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__39559__i = 0, G__39559__a = new Array(arguments.length -  0);
while (G__39559__i < G__39559__a.length) {G__39559__a[G__39559__i] = arguments[G__39559__i + 0]; ++G__39559__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__39559__a,0,null);
} 
return frontend$components$plugins$card_ctls_of_market__delegate.call(this,args__31746__auto__);};
frontend$components$plugins$card_ctls_of_market.cljs$lang$maxFixedArity = 0;
frontend$components$plugins$card_ctls_of_market.cljs$lang$applyTo = (function (arglist__39560){
var args__31746__auto__ = cljs.core.seq(arglist__39560);
return frontend$components$plugins$card_ctls_of_market__delegate(args__31746__auto__);
});
frontend$components$plugins$card_ctls_of_market.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins$card_ctls_of_market__delegate;
return frontend$components$plugins$card_ctls_of_market;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38734 = comp__31745__auto__;
var G__38735 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38734,G__38735) : io.factorhouse.hsx.core.react_memo.call(null,G__38734,G__38735));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"card-ctls-of-market");

return comp__31745__auto__;
})();
frontend.components.plugins.set_plugin_disabled_BANG_ = (function frontend$components$plugins$set_plugin_disabled_BANG_(id,disabled_QMARK_){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(LSPluginCore,(cljs.core.truth_(disabled_QMARK_)?"disable":"enable"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0)),(function (){
var temp__5825__auto__ = (function (){var and__5140__auto__ = disabled_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var G__38737 = frontend.handler.plugin.get_plugin_inst(id);
if((G__38737 == null)){
return null;
} else {
return G__38737.settings;
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var settings = temp__5825__auto__;
return settings.set("disabled-since",Date.now());
} else {
return null;
}
})),(function (p1__38736_SHARP_){
return console.error(p1__38736_SHARP_);
}));
});
frontend.components.plugins.card_ctls_of_installed = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins$card_ctls_of_installed(id,name,url,sponsors,unpacked_QMARK_,disabled_QMARK_,installing_or_updating_QMARK_,has_other_pending_QMARK_,new_version,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ctl","div.ctl",1028457790),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.l","div.l",1231851761),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.de","div.de",552262773),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),frontend.ui.icon("settings")], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.menu-list","ul.menu-list",-953263704),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.plugin.open_plugin_settings_BANG_.cljs$core$IFn$_invoke$arity$2(id,false);
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","open-settings","plugin/open-settings",755186792)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.components.plugin_logs.open_plugin_logs_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pid","pid",1018387698),id,new cljs.core.Keyword(null,"name","name",1843675177),name], null));
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","open-logs","plugin/open-logs",955099291)], 0))], null),(cljs.core.truth_(frontend.util.electron_QMARK_())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return apis.openPath(url);
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","open-package","plugin/open-package",-735283330)], 0))], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.plugin.open_report_modal_BANG_.cljs$core$IFn$_invoke$arity$2(id,name);
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","report-security","plugin/report-security",29084696)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2((function (){var G__38738 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","delete-alert","plugin/delete-alert",918910734),name], 0))], null);
var G__38739 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cancel-label","cancel-label",-1093310551),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","cancel","ui/cancel",-1964089788)], 0)),new cljs.core.Keyword(null,"ok-label","ok-label",808114315),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","confirm","ui/confirm",-2003996372)], 0))], null);
return (logseq.shui.ui.dialog_confirm_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_confirm_BANG_.cljs$core$IFn$_invoke$arity$2(G__38738,G__38739) : logseq.shui.ui.dialog_confirm_BANG_.call(null,G__38738,G__38739));
})(),(function (){
frontend.handler.common.plugin.unregister_plugin(id);

if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return frontend.handler.plugin_config.remove_plugin(id);
} else {
return null;
}
}));
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","uninstall","plugin/uninstall",233071235)], 0))], null)], null)], null),((cljs.core.seq(sponsors))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.de.sponsors","div.de.sponsors",-538224656),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),frontend.ui.icon("coffee")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.menu-list","ul.menu-list",-953263704),(function (){var iter__5628__auto__ = (function frontend$components$plugins$card_ctls_of_installed_$_iter__38740(s__38741){
return (new cljs.core.LazySeq(null,(function (){
var s__38741__$1 = s__38741;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__38741__$1);
if(temp__5825__auto__){
var s__38741__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38741__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__38741__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__38743 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__38742 = (0);
while(true){
if((i__38742 < size__5627__auto__)){
var link = cljs.core._nth(c__5626__auto__,i__38742);
cljs.core.chunk_append(b__38743,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),link], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),link,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center","span.flex.items-center",-463750193),link,frontend.ui.icon("external-link")], null)], null)], null));

var G__39565 = (i__38742 + (1));
i__38742 = G__39565;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38743),frontend$components$plugins$card_ctls_of_installed_$_iter__38740(cljs.core.chunk_rest(s__38741__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38743),null);
}
} else {
var link = cljs.core.first(s__38741__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),link], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),link,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center","span.flex.items-center",-463750193),link,frontend.ui.icon("external-link")], null)], null)], null),frontend$components$plugins$card_ctls_of_installed_$_iter__38740(cljs.core.rest(s__38741__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(sponsors);
})()], null)], null):null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.r.flex.items-center","div.r.flex.items-center",526063224),(cljs.core.truth_((function (){var and__5140__auto__ = unpacked_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(disabled_QMARK_);
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn","a.btn",-2143027730),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(LSPluginCore,"reload",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","reload","plugin/reload",-389898430)], 0))], null):null),((cljs.core.not(unpacked_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.updates-actions","div.updates-actions",161680247),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn","a.btn",-2143027730),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),installing_or_updating_QMARK_], null)], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(has_other_pending_QMARK_)){
return null;
} else {
return frontend.handler.plugin.check_or_update_marketplace_plugin_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,new cljs.core.Keyword(null,"only-check","only-check",-1961506795),cljs.core.not(new_version)),(function (e){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(e.toString(),new cljs.core.Keyword(null,"error","error",-978969032));
}));
}
})], null),(cljs.core.truth_(installing_or_updating_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","updating","plugin/updating",1642276684)], 0)):(cljs.core.truth_(new_version)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","update","plugin/update",2040056703)], 0))," \uD83D\uDC49 ",new_version], null):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","check-update","plugin/check-update",1581546124)], 0))))], null)], null):null),frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(cljs.core.not(disabled_QMARK_),(function (){
frontend.components.plugins.set_plugin_disabled_BANG_(id,cljs.core.not(disabled_QMARK_));

if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.components.plugins._STAR_dirties_toggle_items),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(id)) == null)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.components.plugins._STAR_dirties_toggle_items,cljs.core.assoc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(id),cljs.core.not(disabled_QMARK_));
} else {
return null;
}
}),true)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins$card_ctls_of_installed__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38744 = cljs.core.first(args__31746__auto__);
var G__38745 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38744,G__38745) : io.factorhouse.hsx.core.obj_get.call(null,G__38744,G__38745));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"card-ctls-of-installed","card-ctls-of-installed",256432841,null),args__31746__auto__),frontend$components$plugins$card_ctls_of_installed,args__31746__auto__,null);
}
};
var frontend$components$plugins$card_ctls_of_installed = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__39570__i = 0, G__39570__a = new Array(arguments.length -  0);
while (G__39570__i < G__39570__a.length) {G__39570__a[G__39570__i] = arguments[G__39570__i + 0]; ++G__39570__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__39570__a,0,null);
} 
return frontend$components$plugins$card_ctls_of_installed__delegate.call(this,args__31746__auto__);};
frontend$components$plugins$card_ctls_of_installed.cljs$lang$maxFixedArity = 0;
frontend$components$plugins$card_ctls_of_installed.cljs$lang$applyTo = (function (arglist__39571){
var args__31746__auto__ = cljs.core.seq(arglist__39571);
return frontend$components$plugins$card_ctls_of_installed__delegate(args__31746__auto__);
});
frontend$components$plugins$card_ctls_of_installed.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins$card_ctls_of_installed__delegate;
return frontend$components$plugins$card_ctls_of_installed;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38746 = comp__31745__auto__;
var G__38747 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38746,G__38747) : io.factorhouse.hsx.core.react_memo.call(null,G__38746,G__38747));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"card-ctls-of-installed");

return comp__31745__auto__;
})();
frontend.components.plugins.get_open_plugin_readme_handler = (function frontend$components$plugins$get_open_plugin_readme_handler(url,p__38748,repo){
var map__38749 = p__38748;
var map__38749__$1 = cljs.core.__destructure_map(map__38749);
var item = map__38749__$1;
var webPkg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38749__$1,new cljs.core.Keyword(null,"webPkg","webPkg",-614725372));
return (function (){
return frontend.handler.plugin.open_readme_BANG_(url,item,(cljs.core.truth_((function (){var or__5142__auto__ = repo;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return webPkg;
}
})())?frontend.components.plugins.remote_readme_display:frontend.components.plugins.local_markdown_display));
});
});
frontend.components.plugins.plugin_thumb_icon_src = (function frontend$components$plugins$plugin_thumb_icon_src(id,icon,market_QMARK_){
if(clojure.string.blank_QMARK_(icon)){
return null;
} else {
if(cljs.core.truth_(market_QMARK_)){
return frontend.handler.plugin.pkg_asset(id,icon);
} else {
return icon;
}
}
});
frontend.components.plugins.plugin_thumb_icon_view = (function frontend$components$plugins$plugin_thumb_icon_view(src,load_failed_QMARK_,on_error){
if(cljs.core.truth_((function (){var and__5140__auto__ = src;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(load_failed_QMARK_);
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.icon","img.icon",-1569368379),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error], null)], null);
} else {
return frontend.components.svg.folder;
}
});
frontend.components.plugins.plugin_thumb_icon = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins$plugin_thumb_icon(id,icon,market_QMARK_){
var vec__38750 = logseq.shui.hooks.use_state(false);
var load_failed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38750,(0),null);
var set_load_failed_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38750,(1),null);
var src = frontend.components.plugins.plugin_thumb_icon_src(id,icon,market_QMARK_);
return frontend.components.plugins.plugin_thumb_icon_view(src,load_failed_QMARK_,(function (_){
return (set_load_failed_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_load_failed_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_load_failed_BANG_.call(null,true));
}));
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins$plugin_thumb_icon__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38753 = cljs.core.first(args__31746__auto__);
var G__38754 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38753,G__38754) : io.factorhouse.hsx.core.obj_get.call(null,G__38753,G__38754));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"plugin-thumb-icon","plugin-thumb-icon",1204075329,null),args__31746__auto__),frontend$components$plugins$plugin_thumb_icon,args__31746__auto__,null);
}
};
var frontend$components$plugins$plugin_thumb_icon = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__39586__i = 0, G__39586__a = new Array(arguments.length -  0);
while (G__39586__i < G__39586__a.length) {G__39586__a[G__39586__i] = arguments[G__39586__i + 0]; ++G__39586__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__39586__a,0,null);
} 
return frontend$components$plugins$plugin_thumb_icon__delegate.call(this,args__31746__auto__);};
frontend$components$plugins$plugin_thumb_icon.cljs$lang$maxFixedArity = 0;
frontend$components$plugins$plugin_thumb_icon.cljs$lang$applyTo = (function (arglist__39587){
var args__31746__auto__ = cljs.core.seq(arglist__39587);
return frontend$components$plugins$plugin_thumb_icon__delegate(args__31746__auto__);
});
frontend$components$plugins$plugin_thumb_icon.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins$plugin_thumb_icon__delegate;
return frontend$components$plugins$plugin_thumb_icon;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38755 = comp__31745__auto__;
var G__38756 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38755,G__38756) : io.factorhouse.hsx.core.react_memo.call(null,G__38755,G__38756));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"plugin-thumb-icon");

return comp__31745__auto__;
})();
frontend.components.plugins.plugin_item_card = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins$plugin_item_card(t,p__38757,disabled_QMARK_,market_QMARK_,_STAR_search_key,has_other_pending_QMARK_,installing_or_updating_QMARK_,installed_QMARK_,stat,coming_update){
var map__38758 = p__38757;
var map__38758__$1 = cljs.core.__destructure_map(map__38758);
var item = map__38758__$1;
var sponsors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38758__$1,new cljs.core.Keyword(null,"sponsors","sponsors",-2122570439));
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38758__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679));
var version = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38758__$1,new cljs.core.Keyword(null,"version","version",425292698));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38758__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var webPkg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38758__$1,new cljs.core.Keyword(null,"webPkg","webPkg",-614725372));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38758__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38758__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38758__$1,new cljs.core.Keyword(null,"title","title",636505583));
var author = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38758__$1,new cljs.core.Keyword(null,"author","author",2111686192));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38758__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var iir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38758__$1,new cljs.core.Keyword(null,"iir","iir",-231680811));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38758__$1,new cljs.core.Keyword(null,"url","url",276297046));
var name__$1 = (function (){var or__5142__auto__ = title;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = name;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ui","untitled","ui/untitled",301271588)) : t.call(null,new cljs.core.Keyword("ui","untitled","ui/untitled",301271588)));
}
}
})();
var web_QMARK_ = (!((webPkg == null)));
var unpacked_QMARK_ = (((!(web_QMARK_))) && (cljs.core.not(iir)));
var new_version = frontend.state.coming_update_new_version_QMARK_(coming_update);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__plugins-item-card","div.cp__plugins-item-card",1495284585),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"lsp-card-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"market","market",-1425134471),market_QMARK_,new cljs.core.Keyword(null,"installed","installed",553977691),installed_QMARK_,new cljs.core.Keyword(null,"updating","updating",1454028951),installing_or_updating_QMARK_,new cljs.core.Keyword(null,"has-new-version","has-new-version",1406719631),new_version], null)], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.l.link-block.cursor-pointer","div.l.link-block.cursor-pointer",116954455),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.components.plugins.get_open_plugin_readme_handler(url,item,repo)], null),frontend.components.plugins.plugin_thumb_icon(id,icon,market_QMARK_),((((cljs.core.not(market_QMARK_)) && (unpacked_QMARK_)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.justify-center.text-xs.text-error.pt-2","span.flex.justify-center.text-xs.text-error.pt-2",1308955010),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("plugin","unpacked","plugin/unpacked",-80516789)) : t.call(null,new cljs.core.Keyword("plugin","unpacked","plugin/unpacked",-80516789)))], null):null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.r","div.r",-814257571),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.head.text-xl.font-bold.pt-1.5","h3.head.text-xl.font-bold.pt-1.5",-2123731826),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),name__$1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.l.link-block.cursor-pointer","span.l.link-block.cursor-pointer",-1134004893),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.components.plugins.get_open_plugin_readme_handler(url,item,repo)], null),name__$1], null),((cljs.core.not(market_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup.inline-block.px-1.text-xs.opacity-50","sup.inline-block.px-1.text-xs.opacity-50",1815874231),version], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.desc.text-xs.opacity-70","div.desc.text-xs.opacity-70",628315116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),description], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flag","div.flag",-640837142),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-xs.pr-2.flex.justify-between","p.text-xs.pr-2.flex.justify-between",1243017307),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var temp__5825__auto__ = document.querySelector(".cp__plugins-page .search-ctls input");
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
cljs.core.reset_BANG_(_STAR_search_key,(""+"@"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(author)));

return el.select();
} else {
return null;
}
})], null),author], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("notification","copied","notification/copied",-1717318998)) : t.call(null,new cljs.core.Keyword("notification","copied","notification/copied",-1717318998))),new cljs.core.Keyword(null,"success","success",1890645906));

return frontend.util.copy_to_clipboard_BANG_(id);
})], null),(""+"ID: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flag.is-top.flex.items-center.space-x-2","div.flag.is-top.flex.items-center.space-x-2",1757266269),((new cljs.core.Keyword(null,"supportsDB","supportsDB",1271992728).cljs$core$IFn$_invoke$arity$1(item) === false)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.cursor-help","a.flex.cursor-help",-414399620),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("plugin","does-not-support-db","plugin/does-not-support-db",1892362899)) : t.call(null,new cljs.core.Keyword("plugin","does-not-support-db","plugin/does-not-support-db",1892362899)))], null),logseq.shui.ui.tabler_icon("database-off",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(17)], null))], null):((new cljs.core.Keyword(null,"supportsDB","supportsDB",1271992728).cljs$core$IFn$_invoke$arity$1(item) === true)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.cursor-help","a.flex.cursor-help",-414399620),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("plugin","supports-db","plugin/supports-db",-640952911)) : t.call(null,new cljs.core.Keyword("plugin","supports-db","plugin/supports-db",-640952911)))], null),logseq.shui.ui.tabler_icon("database-heart",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(17)], null))], null):null)),(cljs.core.truth_(repo)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex","a.flex",-995526906),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),frontend.handler.plugin.gh_repo_url(repo)], null),frontend.components.svg.github.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"height","height",1025178622),(16)], null))], null):null)], null),(cljs.core.truth_(market_QMARK_)?frontend.components.plugins.card_ctls_of_market(item,stat,installed_QMARK_,installing_or_updating_QMARK_):frontend.components.plugins.card_ctls_of_installed(id,name__$1,url,sponsors,unpacked_QMARK_,disabled_QMARK_,installing_or_updating_QMARK_,has_other_pending_QMARK_,new_version,item))], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins$plugin_item_card__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38759 = cljs.core.first(args__31746__auto__);
var G__38760 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38759,G__38760) : io.factorhouse.hsx.core.obj_get.call(null,G__38759,G__38760));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"plugin-item-card","plugin-item-card",-835391849,null),args__31746__auto__),frontend$components$plugins$plugin_item_card,args__31746__auto__,null);
}
};
var frontend$components$plugins$plugin_item_card = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__39600__i = 0, G__39600__a = new Array(arguments.length -  0);
while (G__39600__i < G__39600__a.length) {G__39600__a[G__39600__i] = arguments[G__39600__i + 0]; ++G__39600__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__39600__a,0,null);
} 
return frontend$components$plugins$plugin_item_card__delegate.call(this,args__31746__auto__);};
frontend$components$plugins$plugin_item_card.cljs$lang$maxFixedArity = 0;
frontend$components$plugins$plugin_item_card.cljs$lang$applyTo = (function (arglist__39601){
var args__31746__auto__ = cljs.core.seq(arglist__39601);
return frontend$components$plugins$plugin_item_card__delegate(args__31746__auto__);
});
frontend$components$plugins$plugin_item_card.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins$plugin_item_card__delegate;
return frontend$components$plugins$plugin_item_card;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38761 = comp__31745__auto__;
var G__38762 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38761,G__38762) : io.factorhouse.hsx.core.react_memo.call(null,G__38761,G__38762));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"plugin-item-card");

return comp__31745__auto__;
})();
frontend.components.plugins.panel_tab_search = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins$panel_tab_search(search_key,_STAR_search_key,_STAR_search_ref){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-ctls","div.search-ctls",191655859),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.absolute.s1","small.absolute.s1",-1678599027),frontend.ui.icon("search")], null),((clojure.string.blank_QMARK_(search_key))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.absolute.s2","small.absolute.s2",-490510101),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var temp__5825__auto__ = logseq.shui.hooks.deref(_STAR_search_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var target = temp__5825__auto__;
cljs.core.reset_BANG_(_STAR_search_key,null);

return target.focus();
} else {
return null;
}
})], null),frontend.ui.icon("x")], null)),(function (){var G__38764 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","search-plugin","plugin/search-plugin",-764896238)], 0)),new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_search_ref,new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((27),e.keyCode)){
if(clojure.string.blank_QMARK_(search_key)){
return null;
} else {
frontend.util.stop(e);

return cljs.core.reset_BANG_(_STAR_search_key,null);
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__38763_SHARP_){
var target = p1__38763_SHARP_.target;
return cljs.core.reset_BANG_(_STAR_search_key,(function (){var G__38765 = target.value;
if((G__38765 == null)){
return null;
} else {
return clojure.string.triml(G__38765);
}
})());
}),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5142__auto__ = search_key;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})()], null);
return (logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1(G__38764) : logseq.shui.ui.input.call(null,G__38764));
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins$panel_tab_search__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38766 = cljs.core.first(args__31746__auto__);
var G__38767 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38766,G__38767) : io.factorhouse.hsx.core.obj_get.call(null,G__38766,G__38767));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"panel-tab-search","panel-tab-search",2118704547,null),args__31746__auto__),frontend$components$plugins$panel_tab_search,args__31746__auto__,null);
}
};
var frontend$components$plugins$panel_tab_search = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__39618__i = 0, G__39618__a = new Array(arguments.length -  0);
while (G__39618__i < G__39618__a.length) {G__39618__a[G__39618__i] = arguments[G__39618__i + 0]; ++G__39618__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__39618__a,0,null);
} 
return frontend$components$plugins$panel_tab_search__delegate.call(this,args__31746__auto__);};
frontend$components$plugins$panel_tab_search.cljs$lang$maxFixedArity = 0;
frontend$components$plugins$panel_tab_search.cljs$lang$applyTo = (function (arglist__39619){
var args__31746__auto__ = cljs.core.seq(arglist__39619);
return frontend$components$plugins$panel_tab_search__delegate(args__31746__auto__);
});
frontend$components$plugins$panel_tab_search.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins$panel_tab_search__delegate;
return frontend$components$plugins$panel_tab_search;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38768 = comp__31745__auto__;
var G__38769 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38768,G__38769) : io.factorhouse.hsx.core.react_memo.call(null,G__38768,G__38769));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"panel-tab-search");

return comp__31745__auto__;
})();
frontend.components.plugins.panel_tab_developer = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins$panel_tab_developer(){
return frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","contribute","plugin/contribute",1070040335)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/logseq/marketplace",new cljs.core.Keyword(null,"class","class",-2030961996),"contribute",new cljs.core.Keyword(null,"intent","intent",-390846953),"link",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], 0));
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins$panel_tab_developer__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38770 = cljs.core.first(args__31746__auto__);
var G__38771 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38770,G__38771) : io.factorhouse.hsx.core.obj_get.call(null,G__38770,G__38771));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"panel-tab-developer","panel-tab-developer",1757116984,null),args__31746__auto__),frontend$components$plugins$panel_tab_developer,args__31746__auto__,null);
}
};
var frontend$components$plugins$panel_tab_developer = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__39620__i = 0, G__39620__a = new Array(arguments.length -  0);
while (G__39620__i < G__39620__a.length) {G__39620__a[G__39620__i] = arguments[G__39620__i + 0]; ++G__39620__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__39620__a,0,null);
} 
return frontend$components$plugins$panel_tab_developer__delegate.call(this,args__31746__auto__);};
frontend$components$plugins$panel_tab_developer.cljs$lang$maxFixedArity = 0;
frontend$components$plugins$panel_tab_developer.cljs$lang$applyTo = (function (arglist__39621){
var args__31746__auto__ = cljs.core.seq(arglist__39621);
return frontend$components$plugins$panel_tab_developer__delegate(args__31746__auto__);
});
frontend$components$plugins$panel_tab_developer.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins$panel_tab_developer__delegate;
return frontend$components$plugins$panel_tab_developer;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38772 = comp__31745__auto__;
var G__38773 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38772,G__38773) : io.factorhouse.hsx.core.react_memo.call(null,G__38772,G__38773));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"panel-tab-developer");

return comp__31745__auto__;
})();
frontend.components.plugins.user_proxy_settings_container = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins$user_proxy_settings_container(p__38778){
var map__38779 = p__38778;
var map__38779__$1 = cljs.core.__destructure_map(map__38779);
var agent_opts = map__38779__$1;
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38779__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38779__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var selected_type = (function (){var or__5142__auto__ = cljs.core.not_empty(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(agent_opts));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core.not_empty(protocol);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = cljs.core.not_empty(type);
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return "system";
}
}
}
})();
var vec__38780 = logseq.shui.hooks.use_state(agent_opts);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38780,(0),null);
var set_opts_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38780,(1),null);
var vec__38783 = logseq.shui.hooks.use_state(false);
var testing_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38783,(0),null);
var set_testing_QMARK__BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38783,(1),null);
var current_type = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return selected_type;
}
})();
var disabled_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_type,"system")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_type,"direct")));
var needs_host_port_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_type,"http")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_type,"socks5")));
var host_port_valid_QMARK_ = (((!(clojure.string.blank_QMARK_(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts))))) && ((!(clojure.string.blank_QMARK_(new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(opts))))));
var normalize_opts = (function (p__38786){
var map__38787 = p__38786;
var map__38787__$1 = cljs.core.__destructure_map(map__38787);
var test_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38787__$1,new cljs.core.Keyword(null,"test","test",577538877));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38787__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38787__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38787__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var type__$2 = (function (){var or__5142__auto__ = type__$1;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return selected_type;
}
})();
var test_url__$1 = frontend.util.trim_safe(test_url);
var G__38788 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type__$2,new cljs.core.Keyword(null,"test","test",577538877),test_url__$1], null);
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["http",null,"socks5",null], null), null),type__$2)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__38788,new cljs.core.Keyword(null,"protocol","protocol",652470118),type__$2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"host","host",-1558485167),frontend.util.trim_safe(host),new cljs.core.Keyword(null,"port","port",1534937262),frontend.util.normalize_port_input(port)], 0));
} else {
return G__38788;
}
});
var validate_BANG_ = (function (){
if(((needs_host_port_QMARK_) && ((!(host_port_valid_QMARK_))))){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin.proxy","host-port-required","plugin.proxy/host-port-required",1063791092)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));

return true;
} else {
return null;
}
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__settings-network-proxy-cnt","div.cp__settings-network-proxy-cnt",-647555712),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.mb-2.text-2xl.font-bold","h1.mb-2.text-2xl.font-bold",-522821176),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.advanced","network-proxy","settings.advanced/network-proxy",1017963756)], 0))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-4.p-2","div.flex.flex-col.gap-4.p-2",-99533843),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-3","div.flex.items-center.gap-3",-1359414770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.shrink-0.font-medium.text-sm","span.shrink-0.font-medium.text-sm",-1012646319),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","type","ui/type",1174270752)], 0))], null),(function (){var G__38789 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),current_type,new cljs.core.Keyword(null,"on-value-change","on-value-change",-621835289),(function (v){
var G__38792 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"type","type",1174270348),v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"protocol","protocol",652470118),v], 0));
return (set_opts_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_opts_BANG_.cljs$core$IFn$_invoke$arity$1(G__38792) : set_opts_BANG_.call(null,G__38792));
})], null);
var G__38790 = (function (){var G__38793 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-8 flex-1"], null);
var G__38794 = (function (){var G__38795 = cljs.core.PersistentArrayMap.EMPTY;
return (logseq.shui.ui.select_value.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.select_value.cljs$core$IFn$_invoke$arity$1(G__38795) : logseq.shui.ui.select_value.call(null,G__38795));
})();
return (logseq.shui.ui.select_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_trigger.cljs$core$IFn$_invoke$arity$2(G__38793,G__38794) : logseq.shui.ui.select_trigger.call(null,G__38793,G__38794));
})();
var G__38791 = (function (){var G__38796 = (function (){var G__38797 = (function (){var G__38801 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"system"], null);
var G__38802 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin.proxy","system","plugin.proxy/system",-457476271)], 0));
return (logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2(G__38801,G__38802) : logseq.shui.ui.select_item.call(null,G__38801,G__38802));
})();
var G__38798 = (function (){var G__38803 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"direct"], null);
var G__38804 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin.proxy","direct","plugin.proxy/direct",-1434173917)], 0));
return (logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2(G__38803,G__38804) : logseq.shui.ui.select_item.call(null,G__38803,G__38804));
})();
var G__38799 = (function (){var G__38805 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"http"], null);
var G__38806 = "HTTP";
return (logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2(G__38805,G__38806) : logseq.shui.ui.select_item.call(null,G__38805,G__38806));
})();
var G__38800 = (function (){var G__38807 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"socks5"], null);
var G__38808 = "SOCKS5";
return (logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2(G__38807,G__38808) : logseq.shui.ui.select_item.call(null,G__38807,G__38808));
})();
return (logseq.shui.ui.select_group.cljs$core$IFn$_invoke$arity$4 ? logseq.shui.ui.select_group.cljs$core$IFn$_invoke$arity$4(G__38797,G__38798,G__38799,G__38800) : logseq.shui.ui.select_group.call(null,G__38797,G__38798,G__38799,G__38800));
})();
return (logseq.shui.ui.select_content.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.select_content.cljs$core$IFn$_invoke$arity$1(G__38796) : logseq.shui.ui.select_content.call(null,G__38796));
})();
return (logseq.shui.ui.select.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.select.cljs$core$IFn$_invoke$arity$3(G__38789,G__38790,G__38791) : logseq.shui.ui.select.call(null,G__38789,G__38790,G__38791));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-end.gap-3","div.flex.items-end.gap-3",1383221531),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-1.flex-1.min-w-0","div.flex.flex-col.gap-1.flex-1.min-w-0",1081947430),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.text-sm.font-medium","strong.text-sm.font-medium",880645442),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((disabled_QMARK_)?"opacity-50":null)], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","host","ui/host",-1558481427)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-input.is-small","input.form-input.is-small",-550503875),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),(0)], null),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__38774_SHARP_){
var G__38809 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"host","host",-1558485167),frontend.util.trim_safe(frontend.util.evalue(p1__38774_SHARP_)));
return (set_opts_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_opts_BANG_.cljs$core$IFn$_invoke$arity$1(G__38809) : set_opts_BANG_.call(null,G__38809));
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-1.flex-none","div.flex.flex-col.gap-1.flex-none",1076541484),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-28"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.text-sm.font-medium","strong.text-sm.font-medium",880645442),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((disabled_QMARK_)?"opacity-50":null)], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","port","ui/port",1534949658)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-input.is-small","input.form-input.is-small",-550503875),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"inputMode","inputMode",-1531650881),new cljs.core.Keyword(null,"pattern","pattern",242135423)],[disabled_QMARK_,(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})(),(function (p1__38776_SHARP_){
var G__38810 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"port","port",1534937262),frontend.util.normalize_port_input(frontend.util.evalue(p1__38776_SHARP_)));
return (set_opts_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_opts_BANG_.cljs$core$IFn$_invoke$arity$1(G__38810) : set_opts_BANG_.call(null,G__38810));
}),"text",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),(0)], null),"text-right",(function (p1__38775_SHARP_){
var G__38811 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"port","port",1534937262),frontend.util.sanitize_port_input(frontend.util.evalue(p1__38775_SHARP_)));
return (set_opts_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_opts_BANG_.cljs$core$IFn$_invoke$arity$1(G__38811) : set_opts_BANG_.call(null,G__38811));
}),"numeric","[0-9]*"])], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.my-2","hr.my-2",930024796)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-3","div.flex.items-center.gap-3",-1359414770),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-1","div.flex-1",2004402050),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-input.is-small.w-full","input.form-input.is-small.w-full",463389322),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"list","list",765357683),"proxy-test-url-datalist",new cljs.core.Keyword(null,"type","type",1174270348),"url",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"https://",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__38777_SHARP_){
var G__38812 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"test","test",577538877),frontend.util.trim_safe(frontend.util.evalue(p1__38777_SHARP_)));
return (set_opts_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_opts_BANG_.cljs$core$IFn$_invoke$arity$1(G__38812) : set_opts_BANG_.call(null,G__38812));
}),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})()], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datalist#proxy-test-url-datalist","datalist#proxy-test-url-datalist",822229088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),"https://api.logseq.com/logseq/version"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),"https://logseq-connectivity-testing-prod.s3.us-east-1.amazonaws.com/logseq-connectivity-testing"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),"https://www.google.com"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),"https://s3.amazonaws.com"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),"https://clients3.google.com/generate_204"], null)], null)], null),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(testing_QMARK_)?frontend.ui.loading.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin.proxy","testing","plugin.proxy/testing",1810986100)], 0))):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin.proxy","test-url","plugin.proxy/test-url",399564863)], 0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"intent","intent",-390846953),"logseq",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var normalized_opts = normalize_opts(opts);
var val = frontend.util.trim_safe(new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(normalized_opts));
if(((cljs.core.not(testing_QMARK_)) && ((!(clojure.string.blank_QMARK_(val)))))){
if(cljs.core.truth_(validate_BANG_())){
return null;
} else {
(set_testing_QMARK__BANG_.cljs$core$IFn$_invoke$arity$1 ? set_testing_QMARK__BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_testing_QMARK__BANG_.call(null,true));

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"testProxyUrl","testProxyUrl",-814931268),val,normalized_opts], 0))),(function (result){
return promesa.protocols._promise(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(result,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
}));
})),(function (p__38813){
var map__38814 = p__38813;
var map__38814__$1 = cljs.core.__destructure_map(map__38814);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38814__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var response_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38814__$1,new cljs.core.Keyword(null,"response-ms","response-ms",-265710367));
frontend.handler.notification.clear_BANG_(new cljs.core.Keyword(null,"proxy-net-check","proxy-net-check",344482008));

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","proxy-check-success","plugin/proxy-check-success",1031302069),code,response_ms], 0)),new cljs.core.Keyword(null,"success","success",1890645906));
})),(function (e){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$4((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)),new cljs.core.Keyword(null,"error","error",-978969032),false,new cljs.core.Keyword(null,"proxy-net-check","proxy-net-check",344482008));
})),(function (){
return (set_testing_QMARK__BANG_.cljs$core$IFn$_invoke$arity$1 ? set_testing_QMARK__BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_testing_QMARK__BANG_.call(null,false));
}));
}
} else {
return null;
}
})], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pt-2","div.pt-2",-1251443966),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","save","ui/save",1850075345)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var normalized_opts = normalize_opts(opts);
if(cljs.core.truth_(validate_BANG_())){
return null;
} else {
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("settings","agent","settings/agent",2144439922)], null),normalized_opts);

(logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dialog_close_BANG_.call(null));

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"setProxy","setProxy",777692671),normalized_opts], 0)),(function (e){
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("settings","agent","settings/agent",2144439922)], null),agent_opts);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)),new cljs.core.Keyword(null,"error","error",-978969032));
}));
}
})], 0))], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins$user_proxy_settings_container__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38815 = cljs.core.first(args__31746__auto__);
var G__38816 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38815,G__38816) : io.factorhouse.hsx.core.obj_get.call(null,G__38815,G__38816));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"user-proxy-settings-container","user-proxy-settings-container",-2129179337,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$plugins$user_proxy_settings_container,args__31746__auto__,null);
}
};
var frontend$components$plugins$user_proxy_settings_container = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__39627__i = 0, G__39627__a = new Array(arguments.length -  0);
while (G__39627__i < G__39627__a.length) {G__39627__a[G__39627__i] = arguments[G__39627__i + 0]; ++G__39627__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__39627__a,0,null);
} 
return frontend$components$plugins$user_proxy_settings_container__delegate.call(this,args__31746__auto__);};
frontend$components$plugins$user_proxy_settings_container.cljs$lang$maxFixedArity = 0;
frontend$components$plugins$user_proxy_settings_container.cljs$lang$applyTo = (function (arglist__39628){
var args__31746__auto__ = cljs.core.seq(arglist__39628);
return frontend$components$plugins$user_proxy_settings_container__delegate(args__31746__auto__);
});
frontend$components$plugins$user_proxy_settings_container.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins$user_proxy_settings_container__delegate;
return frontend$components$plugins$user_proxy_settings_container;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38817 = comp__31745__auto__;
var G__38818 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38817,G__38818) : io.factorhouse.hsx.core.react_memo.call(null,G__38817,G__38818));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"user-proxy-settings-container");

return comp__31745__auto__;
})();
frontend.components.plugins.load_from_web_url_container = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins$load_from_web_url_container(){
var vec__38821 = logseq.shui.hooks.use_state("http://127.0.0.1:8080/");
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38821,(0),null);
var set_url_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38821,(1),null);
var vec__38824 = logseq.shui.hooks.use_state(false);
var pending_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38824,(0),null);
var set_pending_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38824,(1),null);
var handle_submit_BANG_ = (function (){
(set_pending_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_pending_QMARK_.cljs$core$IFn$_invoke$arity$1(true) : set_pending_QMARK_.call(null,true));

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.load_plugin_from_web_url_BANG_(url),(function (){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","new-registered","plugin/new-registered",-1619384877)], 0)),new cljs.core.Keyword(null,"success","success",1890645906));

return (logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dialog_close_BANG_.call(null));
})),(function (p1__38819_SHARP_){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38819_SHARP_)),new cljs.core.Keyword(null,"error","error",-978969032));
})),(function (){
return (set_pending_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_pending_QMARK_.cljs$core$IFn$_invoke$arity$1(false) : set_pending_QMARK_.call(null,false));
}));
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-4.pt-4.pb-2.rounded-md.flex.flex-col.gap-2","div.px-4.pt-4.pb-2.rounded-md.flex.flex-col.gap-2",-896470851),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-3","div.flex.flex-col.gap-3",-1634021513),(function (){var G__38827 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"http://",new cljs.core.Keyword(null,"value","value",305978217),url,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__38820_SHARP_){
var G__38828 = frontend.util.trim_safe(frontend.util.evalue(p1__38820_SHARP_));
return (set_url_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_url_BANG_.cljs$core$IFn$_invoke$arity$1(G__38828) : set_url_BANG_.call(null,G__38828));
}),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true], null);
return (logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1(G__38827) : logseq.shui.ui.input.call(null,G__38827));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-10","span.text-gray-10",-1052314231),logseq.shui.ui.tabler_icon("info-circle",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(13)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin.install-from-web-url","supports-note","plugin.install-from-web-url/supports-note",-865122040),"https://github.com/xyhp915/logseq-journals-calendar","http://localhost:8080/<plugin-dir-root>"], 0))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-end","div.flex.justify-end",-2056434577),(function (){var G__38829 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var or__5142__auto__ = pending_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return clojure.string.blank_QMARK_(url);
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),handle_submit_BANG_], null);
var G__38830 = (cljs.core.truth_(pending_QMARK_)?frontend.ui.loading.cljs$core$IFn$_invoke$arity$0():frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","install","plugin/install",-432957003)], 0)));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__38829,G__38830) : logseq.shui.ui.button.call(null,G__38829,G__38830));
})()], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins$load_from_web_url_container__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38831 = cljs.core.first(args__31746__auto__);
var G__38832 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38831,G__38832) : io.factorhouse.hsx.core.obj_get.call(null,G__38831,G__38832));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"load-from-web-url-container","load-from-web-url-container",-2111741953,null),args__31746__auto__),frontend$components$plugins$load_from_web_url_container,args__31746__auto__,null);
}
};
var frontend$components$plugins$load_from_web_url_container = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__39630__i = 0, G__39630__a = new Array(arguments.length -  0);
while (G__39630__i < G__39630__a.length) {G__39630__a[G__39630__i] = arguments[G__39630__i + 0]; ++G__39630__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__39630__a,0,null);
} 
return frontend$components$plugins$load_from_web_url_container__delegate.call(this,args__31746__auto__);};
frontend$components$plugins$load_from_web_url_container.cljs$lang$maxFixedArity = 0;
frontend$components$plugins$load_from_web_url_container.cljs$lang$applyTo = (function (arglist__39631){
var args__31746__auto__ = cljs.core.seq(arglist__39631);
return frontend$components$plugins$load_from_web_url_container__delegate(args__31746__auto__);
});
frontend$components$plugins$load_from_web_url_container.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins$load_from_web_url_container__delegate;
return frontend$components$plugins$load_from_web_url_container;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38833 = comp__31745__auto__;
var G__38834 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38833,G__38834) : io.factorhouse.hsx.core.react_memo.call(null,G__38833,G__38834));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"load-from-web-url-container");

return comp__31745__auto__;
})();
frontend.components.plugins.install_from_github_release_container = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins$install_from_github_release_container(){
var vec__38839 = logseq.shui.hooks.use_state("");
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38839,(0),null);
var set_url_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38839,(1),null);
var vec__38842 = logseq.shui.hooks.use_state(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme?","theme?",375926679),false,new cljs.core.Keyword(null,"effect?","effect?",1893336906),false], null));
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38842,(0),null);
var set_opts_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38842,(1),null);
var vec__38845 = logseq.shui.hooks.use_state(false);
var pending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38845,(0),null);
var set_pending_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38845,(1),null);
var _STAR_input = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4.flex.flex-col.pb-0","div.p-4.flex.flex-col.pb-0",-1466095730),(function (){var G__38848 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin.install-from-web-url","repo-url-placeholder","plugin.install-from-web-url/repo-url-placeholder",-689273943)], 0)),new cljs.core.Keyword(null,"value","value",305978217),url,new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_input,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__38835_SHARP_){
var G__38849 = frontend.util.evalue(p1__38835_SHARP_);
return (set_url_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_url_BANG_.cljs$core$IFn$_invoke$arity$1(G__38849) : set_url_BANG_.call(null,G__38849));
}),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true], null);
return (logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1(G__38848) : logseq.shui.ui.input.call(null,G__38848));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.gap-6.pt-3.items-center.select-none","div.flex.gap-6.pt-3.items-center.select-none",1391679244),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.flex.items-center.gap-2","label.flex.items-center.gap-2",313926271),(function (){var G__38850 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"theme?","theme?",375926679).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"on-checked-change","on-checked-change",-482086819),(function (p1__38836_SHARP_){
var G__38851 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"theme?","theme?",375926679),p1__38836_SHARP_);
return (set_opts_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_opts_BANG_.cljs$core$IFn$_invoke$arity$1(G__38851) : set_opts_BANG_.call(null,G__38851));
})], null);
return (logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1(G__38850) : logseq.shui.ui.checkbox.call(null,G__38850));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-60","span.opacity-60",-1080417386),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin.install-from-web-url","theme-label","plugin.install-from-web-url/theme-label",-456415316)], 0))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.flex.items-center.gap-2","label.flex.items-center.gap-2",313926271),(function (){var G__38852 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"effect?","effect?",1893336906).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"on-checked-change","on-checked-change",-482086819),(function (p1__38837_SHARP_){
var G__38853 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"effect?","effect?",1893336906),p1__38837_SHARP_);
return (set_opts_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_opts_BANG_.cljs$core$IFn$_invoke$arity$1(G__38853) : set_opts_BANG_.call(null,G__38853));
})], null);
return (logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1(G__38852) : logseq.shui.ui.checkbox.call(null,G__38852));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-60","span.opacity-60",-1080417386),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin.install-from-web-url","effect-label","plugin.install-from-web-url/effect-label",-1320110554)], 0))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-end.pt-3","div.flex.justify-end.pt-3",610981845),(function (){var G__38854 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(((clojure.string.blank_QMARK_(frontend.util.trim_safe(url))) || ((!(clojure.string.starts_with_QMARK_(url,"https://")))))){
return logseq.shui.hooks.deref(_STAR_input).focus();
} else {
var url__$1 = clojure.string.replace_first(url,"https://github.com/","");
var matched = cljs.core.re_find(/([^\\/]+)\/([^\\/]+)/,url__$1);
var temp__5823__auto__ = (function (){var G__38856 = matched;
if((G__38856 == null)){
return null;
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(G__38856,(2));
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var id = temp__5823__auto__;
(set_pending_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_pending_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_pending_BANG_.call(null,true));

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(window.logseq.api.__install_plugin(({"id": id, "repo": cljs.core.first(matched), "theme": new cljs.core.Keyword(null,"theme?","theme?",375926679).cljs$core$IFn$_invoke$arity$1(opts), "effect": new cljs.core.Keyword(null,"effect?","effect?",1893336906).cljs$core$IFn$_invoke$arity$1(opts)})),(function (){
return (logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dialog_close_BANG_.call(null));
})),(function (p1__38838_SHARP_){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38838_SHARP_)),new cljs.core.Keyword(null,"error","error",-978969032));
})),(function (){
return (set_pending_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_pending_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_pending_BANG_.call(null,false));
}));
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","invalid-github-repo-url","plugin/invalid-github-repo-url",498427280)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
}
}
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),pending], null);
var G__38855 = (cljs.core.truth_(pending)?frontend.ui.loading.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","installing","plugin/installing",-755703581)], 0))):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","install","plugin/install",-432957003)], 0)));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__38854,G__38855) : logseq.shui.ui.button.call(null,G__38854,G__38855));
})()], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins$install_from_github_release_container__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38857 = cljs.core.first(args__31746__auto__);
var G__38858 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38857,G__38858) : io.factorhouse.hsx.core.obj_get.call(null,G__38857,G__38858));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"install-from-github-release-container","install-from-github-release-container",1900853637,null),args__31746__auto__),frontend$components$plugins$install_from_github_release_container,args__31746__auto__,null);
}
};
var frontend$components$plugins$install_from_github_release_container = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__39641__i = 0, G__39641__a = new Array(arguments.length -  0);
while (G__39641__i < G__39641__a.length) {G__39641__a[G__39641__i] = arguments[G__39641__i + 0]; ++G__39641__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__39641__a,0,null);
} 
return frontend$components$plugins$install_from_github_release_container__delegate.call(this,args__31746__auto__);};
frontend$components$plugins$install_from_github_release_container.cljs$lang$maxFixedArity = 0;
frontend$components$plugins$install_from_github_release_container.cljs$lang$applyTo = (function (arglist__39642){
var args__31746__auto__ = cljs.core.seq(arglist__39642);
return frontend$components$plugins$install_from_github_release_container__delegate(args__31746__auto__);
});
frontend$components$plugins$install_from_github_release_container.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins$install_from_github_release_container__delegate;
return frontend$components$plugins$install_from_github_release_container;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38859 = comp__31745__auto__;
var G__38860 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38859,G__38860) : io.factorhouse.hsx.core.react_memo.call(null,G__38859,G__38860));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"install-from-github-release-container");

return comp__31745__auto__;
})();
frontend.components.plugins.auto_check_for_updates_control = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins$auto_check_for_updates_control(){
var vec__38861 = logseq.shui.hooks.use_state(frontend.handler.plugin.get_enabled_auto_check_for_updates_QMARK_());
var enabled = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38861,(0),null);
var set_enabled_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38861,(1),null);
var text = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","auto-update-check","plugin/auto-update-check",-1654461649)], 0));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.justify-between.px-3.py-2","div.flex.items-center.justify-between.px-3.py-2",77321416),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var next_enabled = cljs.core.not(enabled);
(set_enabled_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_enabled_BANG_.cljs$core$IFn$_invoke$arity$1(next_enabled) : set_enabled_BANG_.call(null,next_enabled));

frontend.handler.plugin.set_enabled_auto_check_for_updates(next_enabled);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null),frontend.context.i18n.interpolate_rich_text.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","auto-update-check-feedback","plugin/auto-update-check-feedback",433946263)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.pl-1","strong.pl-1",384034726),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((next_enabled)?new cljs.core.Keyword("ui","on","ui/on",173878660):new cljs.core.Keyword("ui","off","ui/off",606559681))], 0))], null)], null))),((next_enabled)?new cljs.core.Keyword(null,"success","success",1890645906):new cljs.core.Keyword(null,"info","info",-317069002)));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pr-3.opacity-80","span.pr-3.opacity-80",752297338),text], null),frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(enabled,(function (){
return cljs.core.List.EMPTY;
}),true)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins$auto_check_for_updates_control__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38864 = cljs.core.first(args__31746__auto__);
var G__38865 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38864,G__38865) : io.factorhouse.hsx.core.obj_get.call(null,G__38864,G__38865));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"auto-check-for-updates-control","auto-check-for-updates-control",447628392,null),args__31746__auto__),frontend$components$plugins$auto_check_for_updates_control,args__31746__auto__,null);
}
};
var frontend$components$plugins$auto_check_for_updates_control = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__39650__i = 0, G__39650__a = new Array(arguments.length -  0);
while (G__39650__i < G__39650__a.length) {G__39650__a[G__39650__i] = arguments[G__39650__i + 0]; ++G__39650__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__39650__a,0,null);
} 
return frontend$components$plugins$auto_check_for_updates_control__delegate.call(this,args__31746__auto__);};
frontend$components$plugins$auto_check_for_updates_control.cljs$lang$maxFixedArity = 0;
frontend$components$plugins$auto_check_for_updates_control.cljs$lang$applyTo = (function (arglist__39651){
var args__31746__auto__ = cljs.core.seq(arglist__39651);
return frontend$components$plugins$auto_check_for_updates_control__delegate(args__31746__auto__);
});
frontend$components$plugins$auto_check_for_updates_control.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins$auto_check_for_updates_control__delegate;
return frontend$components$plugins$auto_check_for_updates_control;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38866 = comp__31745__auto__;
var G__38867 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38866,G__38867) : io.factorhouse.hsx.core.react_memo.call(null,G__38866,G__38867));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"auto-check-for-updates-control");

return comp__31745__auto__;
})();
frontend.components.plugins.disabled_plugin_sort_key = (function frontend$components$plugins$disabled_plugin_sort_key(p__38868){
var map__38869 = p__38868;
var map__38869__$1 = cljs.core.__destructure_map(map__38869);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38869__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38869__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38869__$1,new cljs.core.Keyword(null,"title","title",636505583));
var settings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38869__$1,new cljs.core.Keyword(null,"settings","settings",1556144875));
var disabled_since = new cljs.core.Keyword(null,"disabled-since","disabled-since",-9244503).cljs$core$IFn$_invoke$arity$1(settings);
var plugin_name = (function (){var or__5142__auto__ = title;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = name;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return id;
}
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [((typeof disabled_since === 'number')?(1):(0)),(function (){var or__5142__auto__ = disabled_since;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})(),frontend.util.safe_lower_case(plugin_name),id], null);
});
frontend.components.plugins.plugin_in_category_QMARK_ = (function frontend$components$plugins$plugin_in_category_QMARK_(category,plugin){
var G__38870 = category;
var G__38870__$1 = (((G__38870 instanceof cljs.core.Keyword))?G__38870.fqn:null);
switch (G__38870__$1) {
case "all":
return true;

break;
case "plugins":
return cljs.core.not(new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(plugin));

break;
case "themes":
return new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(plugin);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38870__$1))));

}
});
frontend.components.plugins.get_disabled_plugins_for_removal = (function frontend$components$plugins$get_disabled_plugins_for_removal(category){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(frontend.components.plugins.disabled_plugin_sort_key,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38871_SHARP_){
var and__5140__auto__ = frontend.components.plugins.plugin_in_category_QMARK_(category,p1__38871_SHARP_);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__38871_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"disabled","disabled",-1529784218)], null));
} else {
return and__5140__auto__;
}
}),cljs.core.vals(frontend.state.get_state(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034)], null)))));
});
frontend.components.plugins.unregister_plugins_sequentially_BANG_ = (function frontend$components$plugins$unregister_plugins_sequentially_BANG_(plugin_ids){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (chain,id){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(chain,(function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.common.plugin.unregister_plugin(id)),(function (_){
return promesa.protocols._promise((cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.handler.plugin_config.remove_plugin(id):null));
}));
}));
}));
}),Promise.resolve(null),plugin_ids);
});
frontend.components.plugins.bulk_remove_disabled_plugins_container = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins$bulk_remove_disabled_plugins_container(category){
var plugins = frontend.components.plugins.get_disabled_plugins_for_removal(category);
var plugin_ids = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),plugins);
var vec__38874 = logseq.shui.hooks.use_state(cljs.core.set(cljs.core.take.cljs$core$IFn$_invoke$arity$2((20),plugin_ids)));
var selected_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38874,(0),null);
var set_selected_ids_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38874,(1),null);
var vec__38877 = logseq.shui.hooks.use_state(false);
var pending_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38877,(0),null);
var set_pending_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38877,(1),null);
var selected_plugin_ids = cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(selected_ids,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),plugins)));
var all_selected_QMARK_ = ((cljs.core.seq(plugin_ids)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(selected_plugin_ids),cljs.core.count(plugin_ids))));
var toggle_selected_BANG_ = (function (id,checked_QMARK_){
var G__38880 = (function (){var fexpr__38881 = (cljs.core.truth_(checked_QMARK_)?cljs.core.conj:cljs.core.disj);
return (fexpr__38881.cljs$core$IFn$_invoke$arity$2 ? fexpr__38881.cljs$core$IFn$_invoke$arity$2(selected_ids,id) : fexpr__38881.call(null,selected_ids,id));
})();
return (set_selected_ids_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_selected_ids_BANG_.cljs$core$IFn$_invoke$arity$1(G__38880) : set_selected_ids_BANG_.call(null,G__38880));
});
var remove_selected_BANG_ = (function (){
if(((cljs.core.seq(selected_plugin_ids)) && (cljs.core.not(pending_QMARK_)))){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2((function (){var G__38882 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","bulk-remove-disabled-delete-alert","plugin/bulk-remove-disabled-delete-alert",1984979014),cljs.core.count(selected_plugin_ids)], 0))], null);
var G__38883 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cancel-label","cancel-label",-1093310551),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","cancel","ui/cancel",-1964089788)], 0)),new cljs.core.Keyword(null,"ok-label","ok-label",808114315),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","delete","ui/delete",-1768677056)], 0))], null);
return (logseq.shui.ui.dialog_confirm_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_confirm_BANG_.cljs$core$IFn$_invoke$arity$2(G__38882,G__38883) : logseq.shui.ui.dialog_confirm_BANG_.call(null,G__38882,G__38883));
})(),(function (){
(set_pending_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_pending_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_pending_BANG_.call(null,true));

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.components.plugins.unregister_plugins_sequentially_BANG_(selected_plugin_ids),(function (){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","bulk-remove-disabled-success","plugin/bulk-remove-disabled-success",-524597473),cljs.core.count(selected_plugin_ids)], 0)),new cljs.core.Keyword(null,"success","success",1890645906));

return (logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dialog_close_BANG_.call(null));
})),(function (e){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)),new cljs.core.Keyword(null,"error","error",-978969032));
})),(function (){
return (set_pending_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_pending_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_pending_BANG_.call(null,false));
}));
}));
} else {
return null;
}
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4.flex.flex-col.gap-3","div.p-4.flex.flex-col.gap-3",-970141037),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-xl.font-bold","h1.text-xl.font-bold",-807773808),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","bulk-remove-disabled-title","plugin/bulk-remove-disabled-title",-103909893)], 0))], null),((cljs.core.seq(plugins))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.opacity-70.text-sm","p.opacity-70.text-sm",-1214262873),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","bulk-remove-disabled-desc","plugin/bulk-remove-disabled-desc",1666346751)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.max-h-96.overflow-y-auto.flex.flex-col.gap-2.ml-0","ul.max-h-96.overflow-y-auto.flex.flex-col.gap-2.ml-0",-1772411209),(function (){var iter__5628__auto__ = (function frontend$components$plugins$bulk_remove_disabled_plugins_container_$_iter__38884(s__38885){
return (new cljs.core.LazySeq(null,(function (){
var s__38885__$1 = s__38885;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__38885__$1);
if(temp__5825__auto__){
var s__38885__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38885__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__38885__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__38887 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__38886 = (0);
while(true){
if((i__38886 < size__5627__auto__)){
var map__38888 = cljs.core._nth(c__5626__auto__,i__38886);
var map__38888__$1 = cljs.core.__destructure_map(map__38888);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38888__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38888__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38888__$1,new cljs.core.Keyword(null,"title","title",636505583));
var version = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38888__$1,new cljs.core.Keyword(null,"version","version",425292698));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38888__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var selected_QMARK_ = cljs.core.contains_QMARK_(selected_ids,id);
cljs.core.chunk_append(b__38887,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.flex.items-center.gap-3.rounded-md.border.p-2.select-none","li.flex.items-center.gap-3.rounded-md.border.p-2.select-none",-92637464),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"class","class",-2030961996),(""+"cursor-pointer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?"border-primary bg-base-3":"border-transparent bg-base-2 hover:bg-base-3"))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__38886,selected_QMARK_,map__38888,map__38888__$1,id,name,title,version,icon,c__5626__auto__,size__5627__auto__,b__38887,s__38885__$2,temp__5825__auto__,plugins,plugin_ids,vec__38874,selected_ids,set_selected_ids_BANG_,vec__38877,pending_QMARK_,set_pending_BANG_,selected_plugin_ids,all_selected_QMARK_,toggle_selected_BANG_,remove_selected_BANG_){
return (function (){
if(cljs.core.truth_(pending_QMARK_)){
return null;
} else {
return toggle_selected_BANG_(id,(!(selected_QMARK_)));
}
});})(i__38886,selected_QMARK_,map__38888,map__38888__$1,id,name,title,version,icon,c__5626__auto__,size__5627__auto__,b__38887,s__38885__$2,temp__5825__auto__,plugins,plugin_ids,vec__38874,selected_ids,set_selected_ids_BANG_,vec__38877,pending_QMARK_,set_pending_BANG_,selected_plugin_ids,all_selected_QMARK_,toggle_selected_BANG_,remove_selected_BANG_))
], null),(function (){var G__38889 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"checked","checked",-50955819),selected_QMARK_,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),pending_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__38886,selected_QMARK_,map__38888,map__38888__$1,id,name,title,version,icon,c__5626__auto__,size__5627__auto__,b__38887,s__38885__$2,temp__5825__auto__,plugins,plugin_ids,vec__38874,selected_ids,set_selected_ids_BANG_,vec__38877,pending_QMARK_,set_pending_BANG_,selected_plugin_ids,all_selected_QMARK_,toggle_selected_BANG_,remove_selected_BANG_){
return (function (p1__38872_SHARP_){
return p1__38872_SHARP_.stopPropagation();
});})(i__38886,selected_QMARK_,map__38888,map__38888__$1,id,name,title,version,icon,c__5626__auto__,size__5627__auto__,b__38887,s__38885__$2,temp__5825__auto__,plugins,plugin_ids,vec__38874,selected_ids,set_selected_ids_BANG_,vec__38877,pending_QMARK_,set_pending_BANG_,selected_plugin_ids,all_selected_QMARK_,toggle_selected_BANG_,remove_selected_BANG_))
,new cljs.core.Keyword(null,"on-checked-change","on-checked-change",-482086819),((function (i__38886,selected_QMARK_,map__38888,map__38888__$1,id,name,title,version,icon,c__5626__auto__,size__5627__auto__,b__38887,s__38885__$2,temp__5825__auto__,plugins,plugin_ids,vec__38874,selected_ids,set_selected_ids_BANG_,vec__38877,pending_QMARK_,set_pending_BANG_,selected_plugin_ids,all_selected_QMARK_,toggle_selected_BANG_,remove_selected_BANG_){
return (function (p1__38873_SHARP_){
return toggle_selected_BANG_(id,p1__38873_SHARP_ === true);
});})(i__38886,selected_QMARK_,map__38888,map__38888__$1,id,name,title,version,icon,c__5626__auto__,size__5627__auto__,b__38887,s__38885__$2,temp__5825__auto__,plugins,plugin_ids,vec__38874,selected_ids,set_selected_ids_BANG_,vec__38877,pending_QMARK_,set_pending_BANG_,selected_plugin_ids,all_selected_QMARK_,toggle_selected_BANG_,remove_selected_BANG_))
], null);
return (logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1(G__38889) : logseq.shui.ui.checkbox.call(null,G__38889));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.h-10.w-10.shrink-0.items-center.justify-center.overflow-hidden.rounded.bg-base-3","span.flex.h-10.w-10.shrink-0.items-center.justify-center.overflow-hidden.rounded.bg-base-3",-378439041),(cljs.core.truth_((function (){var and__5140__auto__ = icon;
if(cljs.core.truth_(and__5140__auto__)){
return (!(clojure.string.blank_QMARK_(icon)));
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),icon,new cljs.core.Keyword(null,"class","class",-2030961996),"h-full w-full object-contain"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.h-6.w-6.items-center.justify-center.overflow-hidden","span.flex.h-6.w-6.items-center.justify-center.overflow-hidden",627574728),frontend.components.svg.folder], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-1.overflow-hidden","div.flex-1.overflow-hidden",1327022825),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-medium.truncate","div.font-medium.truncate",914109635),(function (){var or__5142__auto__ = title;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = name;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return id;
}
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.opacity-60.truncate","div.text-xs.opacity-60.truncate",-1278081443),(""+"ID: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))], null)], null),(cljs.core.truth_(version)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.opacity-50.shrink-0","small.opacity-50.shrink-0",1449410481),version], null):null)], null));

var G__39709 = (i__38886 + (1));
i__38886 = G__39709;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38887),frontend$components$plugins$bulk_remove_disabled_plugins_container_$_iter__38884(cljs.core.chunk_rest(s__38885__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38887),null);
}
} else {
var map__38890 = cljs.core.first(s__38885__$2);
var map__38890__$1 = cljs.core.__destructure_map(map__38890);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38890__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38890__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38890__$1,new cljs.core.Keyword(null,"title","title",636505583));
var version = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38890__$1,new cljs.core.Keyword(null,"version","version",425292698));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38890__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var selected_QMARK_ = cljs.core.contains_QMARK_(selected_ids,id);
return cljs.core.cons(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.flex.items-center.gap-3.rounded-md.border.p-2.select-none","li.flex.items-center.gap-3.rounded-md.border.p-2.select-none",-92637464),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"class","class",-2030961996),(""+"cursor-pointer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?"border-primary bg-base-3":"border-transparent bg-base-2 hover:bg-base-3"))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selected_QMARK_,map__38890,map__38890__$1,id,name,title,version,icon,s__38885__$2,temp__5825__auto__,plugins,plugin_ids,vec__38874,selected_ids,set_selected_ids_BANG_,vec__38877,pending_QMARK_,set_pending_BANG_,selected_plugin_ids,all_selected_QMARK_,toggle_selected_BANG_,remove_selected_BANG_){
return (function (){
if(cljs.core.truth_(pending_QMARK_)){
return null;
} else {
return toggle_selected_BANG_(id,(!(selected_QMARK_)));
}
});})(selected_QMARK_,map__38890,map__38890__$1,id,name,title,version,icon,s__38885__$2,temp__5825__auto__,plugins,plugin_ids,vec__38874,selected_ids,set_selected_ids_BANG_,vec__38877,pending_QMARK_,set_pending_BANG_,selected_plugin_ids,all_selected_QMARK_,toggle_selected_BANG_,remove_selected_BANG_))
], null),(function (){var G__38891 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"checked","checked",-50955819),selected_QMARK_,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),pending_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selected_QMARK_,map__38890,map__38890__$1,id,name,title,version,icon,s__38885__$2,temp__5825__auto__,plugins,plugin_ids,vec__38874,selected_ids,set_selected_ids_BANG_,vec__38877,pending_QMARK_,set_pending_BANG_,selected_plugin_ids,all_selected_QMARK_,toggle_selected_BANG_,remove_selected_BANG_){
return (function (p1__38872_SHARP_){
return p1__38872_SHARP_.stopPropagation();
});})(selected_QMARK_,map__38890,map__38890__$1,id,name,title,version,icon,s__38885__$2,temp__5825__auto__,plugins,plugin_ids,vec__38874,selected_ids,set_selected_ids_BANG_,vec__38877,pending_QMARK_,set_pending_BANG_,selected_plugin_ids,all_selected_QMARK_,toggle_selected_BANG_,remove_selected_BANG_))
,new cljs.core.Keyword(null,"on-checked-change","on-checked-change",-482086819),((function (selected_QMARK_,map__38890,map__38890__$1,id,name,title,version,icon,s__38885__$2,temp__5825__auto__,plugins,plugin_ids,vec__38874,selected_ids,set_selected_ids_BANG_,vec__38877,pending_QMARK_,set_pending_BANG_,selected_plugin_ids,all_selected_QMARK_,toggle_selected_BANG_,remove_selected_BANG_){
return (function (p1__38873_SHARP_){
return toggle_selected_BANG_(id,p1__38873_SHARP_ === true);
});})(selected_QMARK_,map__38890,map__38890__$1,id,name,title,version,icon,s__38885__$2,temp__5825__auto__,plugins,plugin_ids,vec__38874,selected_ids,set_selected_ids_BANG_,vec__38877,pending_QMARK_,set_pending_BANG_,selected_plugin_ids,all_selected_QMARK_,toggle_selected_BANG_,remove_selected_BANG_))
], null);
return (logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1(G__38891) : logseq.shui.ui.checkbox.call(null,G__38891));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.h-10.w-10.shrink-0.items-center.justify-center.overflow-hidden.rounded.bg-base-3","span.flex.h-10.w-10.shrink-0.items-center.justify-center.overflow-hidden.rounded.bg-base-3",-378439041),(cljs.core.truth_((function (){var and__5140__auto__ = icon;
if(cljs.core.truth_(and__5140__auto__)){
return (!(clojure.string.blank_QMARK_(icon)));
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),icon,new cljs.core.Keyword(null,"class","class",-2030961996),"h-full w-full object-contain"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.h-6.w-6.items-center.justify-center.overflow-hidden","span.flex.h-6.w-6.items-center.justify-center.overflow-hidden",627574728),frontend.components.svg.folder], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-1.overflow-hidden","div.flex-1.overflow-hidden",1327022825),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-medium.truncate","div.font-medium.truncate",914109635),(function (){var or__5142__auto__ = title;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = name;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return id;
}
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.opacity-60.truncate","div.text-xs.opacity-60.truncate",-1278081443),(""+"ID: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))], null)], null),(cljs.core.truth_(version)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.opacity-50.shrink-0","small.opacity-50.shrink-0",1449410481),version], null):null)], null),frontend$components$plugins$bulk_remove_disabled_plugins_container_$_iter__38884(cljs.core.rest(s__38885__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(plugins);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.justify-between.gap-2","div.flex.items-center.justify-between.gap-2",1803104488),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.gap-2","div.flex.gap-2",-268700868),(function (){var G__38892 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var or__5142__auto__ = pending_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return all_selected_QMARK_;
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__38894 = cljs.core.set(plugin_ids);
return (set_selected_ids_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_selected_ids_BANG_.cljs$core$IFn$_invoke$arity$1(G__38894) : set_selected_ids_BANG_.call(null,G__38894));
})], null);
var G__38893 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","bulk-remove-disabled-select-all","plugin/bulk-remove-disabled-select-all",-2014896130)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__38892,G__38893) : logseq.shui.ui.button.call(null,G__38892,G__38893));
})(),(function (){var G__38895 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var or__5142__auto__ = pending_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.empty_QMARK_(selected_plugin_ids);
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__38897 = cljs.core.PersistentHashSet.EMPTY;
return (set_selected_ids_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_selected_ids_BANG_.cljs$core$IFn$_invoke$arity$1(G__38897) : set_selected_ids_BANG_.call(null,G__38897));
})], null);
var G__38896 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","bulk-remove-disabled-clear-selection","plugin/bulk-remove-disabled-clear-selection",-1424185474)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__38895,G__38896) : logseq.shui.ui.button.call(null,G__38895,G__38896));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.gap-2","div.flex.gap-2",-268700868),(function (){var G__38898 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),pending_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dialog_close_BANG_.call(null));
})], null);
var G__38899 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","cancel","ui/cancel",-1964089788)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__38898,G__38899) : logseq.shui.ui.button.call(null,G__38898,G__38899));
})(),(function (){var G__38900 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var or__5142__auto__ = pending_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.empty_QMARK_(selected_plugin_ids);
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),remove_selected_BANG_], null);
var G__38901 = (cljs.core.truth_(pending_QMARK_)?frontend.ui.loading.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","uninstall","plugin/uninstall",233071235)], 0))):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","bulk-remove-disabled-confirm","plugin/bulk-remove-disabled-confirm",-600694594),cljs.core.count(selected_plugin_ids)], 0)));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__38900,G__38901) : logseq.shui.ui.button.call(null,G__38900,G__38901));
})()], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.justify-center.py-8.opacity-50","div.flex.items-center.justify-center.py-8.opacity-50",-752399862),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","bulk-remove-disabled-empty","plugin/bulk-remove-disabled-empty",-355345423)], 0))], null))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins$bulk_remove_disabled_plugins_container__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38902 = cljs.core.first(args__31746__auto__);
var G__38903 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38902,G__38903) : io.factorhouse.hsx.core.obj_get.call(null,G__38902,G__38903));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"bulk-remove-disabled-plugins-container","bulk-remove-disabled-plugins-container",671793338,null),args__31746__auto__),frontend$components$plugins$bulk_remove_disabled_plugins_container,args__31746__auto__,null);
}
};
var frontend$components$plugins$bulk_remove_disabled_plugins_container = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__39727__i = 0, G__39727__a = new Array(arguments.length -  0);
while (G__39727__i < G__39727__a.length) {G__39727__a[G__39727__i] = arguments[G__39727__i + 0]; ++G__39727__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__39727__a,0,null);
} 
return frontend$components$plugins$bulk_remove_disabled_plugins_container__delegate.call(this,args__31746__auto__);};
frontend$components$plugins$bulk_remove_disabled_plugins_container.cljs$lang$maxFixedArity = 0;
frontend$components$plugins$bulk_remove_disabled_plugins_container.cljs$lang$applyTo = (function (arglist__39728){
var args__31746__auto__ = cljs.core.seq(arglist__39728);
return frontend$components$plugins$bulk_remove_disabled_plugins_container__delegate(args__31746__auto__);
});
frontend$components$plugins$bulk_remove_disabled_plugins_container.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins$bulk_remove_disabled_plugins_container__delegate;
return frontend$components$plugins$bulk_remove_disabled_plugins_container;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38904 = comp__31745__auto__;
var G__38905 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38904,G__38905) : io.factorhouse.hsx.core.react_memo.call(null,G__38904,G__38905));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"bulk-remove-disabled-plugins-container");

return comp__31745__auto__;
})();
frontend.components.plugins.disabled_plugins_cleanup_snoozed_QMARK_ = (function frontend$components$plugins$disabled_plugins_cleanup_snoozed_QMARK_(){
var snoozed_at = frontend.storage.get(frontend.components.plugins.DISABLED_PLUGINS_CLEANUP_SNOOZED_AT_KEY);
return ((typeof snoozed_at === 'number') && (((Date.now() - snoozed_at) < frontend.components.plugins.DISABLED_PLUGINS_CLEANUP_SNOOZE_MS)));
});
frontend.components.plugins.open_bulk_remove_disabled_plugins_dialog_BANG_ = (function frontend$components$plugins$open_bulk_remove_disabled_plugins_dialog_BANG_(category){
frontend.handler.notification.clear_BANG_(frontend.components.plugins.DISABLED_PLUGINS_CLEANUP_NOTIFICATION_ID);

var G__38906 = (function (){
return frontend.components.plugins.bulk_remove_disabled_plugins_container(category);
});
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1(G__38906) : logseq.shui.ui.dialog_open_BANG_.call(null,G__38906));
});
frontend.components.plugins.snooze_disabled_plugins_cleanup_warning_BANG_ = (function frontend$components$plugins$snooze_disabled_plugins_cleanup_warning_BANG_(){
frontend.storage.set(frontend.components.plugins.DISABLED_PLUGINS_CLEANUP_SNOOZED_AT_KEY,Date.now());

return frontend.handler.notification.clear_BANG_(frontend.components.plugins.DISABLED_PLUGINS_CLEANUP_NOTIFICATION_ID);
});
frontend.components.plugins.show_disabled_plugins_cleanup_warning_BANG_ = (function frontend$components$plugins$show_disabled_plugins_cleanup_warning_BANG_(){
var disabled_count = cljs.core.count(frontend.components.plugins.get_disabled_plugins_for_removal(new cljs.core.Keyword(null,"all","all",892129742)));
if((((disabled_count >= frontend.components.plugins.DISABLED_PLUGINS_CLEANUP_THRESHOLD)) && ((!(frontend.components.plugins.disabled_plugins_cleanup_snoozed_QMARK_()))))){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-2","div.flex.flex-col.gap-2",1564729900),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","disabled-cleanup-warning-title","plugin/disabled-cleanup-warning-title",-1564725772),disabled_count], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-70","div.opacity-70",1944542243),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","disabled-cleanup-warning-desc","plugin/disabled-cleanup-warning-desc",34199119)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.gap-2.pt-1","div.flex.gap-2.pt-1",1376599620),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","disabled-cleanup-warning-clean-now","plugin/disabled-cleanup-warning-clean-now",-1866076940)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.components.plugins.open_bulk_remove_disabled_plugins_dialog_BANG_(new cljs.core.Keyword(null,"all","all",892129742));
})], 0)),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","disabled-cleanup-warning-later","plugin/disabled-cleanup-warning-later",1785217272)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.components.plugins.snooze_disabled_plugins_cleanup_warning_BANG_], 0))], null)], null),new cljs.core.Keyword(null,"warning","warning",-1685650671),false,frontend.components.plugins.DISABLED_PLUGINS_CLEANUP_NOTIFICATION_ID);
} else {
return null;
}
});
frontend.components.plugins.panel_control_tabs = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins$panel_control_tabs(search_key,_STAR_search_key,category,_STAR_category,sort_by,_STAR_sort_by,filter_by,_STAR_filter_by,total_nums,selected_unpacked_pkg,market_QMARK_,develop_mode_QMARK_,reload_market_fn,agent_opts){
var _STAR_search_ref = (logseq.shui.hooks.create_ref.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.hooks.create_ref.cljs$core$IFn$_invoke$arity$0() : logseq.shui.hooks.create_ref.call(null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pb-3.flex.justify-between.control-tabs.relative","div.pb-3.flex.justify-between.control-tabs.relative",755487542),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.l","div.flex.items-center.l",103365870),frontend.components.plugins.category_tabs(frontend.context.i18n.t,total_nums,category,(function (p1__38907_SHARP_){
return cljs.core.reset_BANG_(_STAR_category,p1__38907_SHARP_);
})),(cljs.core.truth_((function (){var and__5140__auto__ = develop_mode_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.not(market_QMARK_);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.ui.tooltip(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","load-unpacked","plugin/load-unpacked",507641009)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon","icon",1679606541),"upload",new cljs.core.Keyword(null,"intent","intent",-390846953),"link",new cljs.core.Keyword(null,"class","class",-2030961996),"load-unpacked",new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.plugin.load_unpacked_plugin], null)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","unpacked-tips","plugin/unpacked-tips",-460131094)], 0))], null)),(cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.components.plugins.unpacked_plugin_loader(selected_unpacked_pkg):null)], null):null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.r","div.flex.items-center.r",-670638216),(function (){var temp__5825__auto__ = frontend.state.http_proxy_enabled_or_val_QMARK_();
if(cljs.core.truth_(temp__5825__auto__)){
var proxy_val = temp__5825__auto__;
return frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.text-indigo-500","span.flex.items-center.text-indigo-500",1098756579),frontend.ui.icon("world-download"),proxy_val], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"intent","intent",-390846953),"link",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("go","proxy-settings","go/proxy-settings",1019838469),agent_opts], null));
})], 0));
} else {
return null;
}
})(),frontend.components.plugins.panel_tab_search(search_key,_STAR_search_key,_STAR_search_ref),(function (){var aim_icon = (function (p1__38908_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filter_by,p1__38908_SHARP_)){
return "check";
} else {
return "circle";
}
});
var items = (cljs.core.truth_(market_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","all","plugin/all",-235519199)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"default","default",-1987822328));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(aim_icon(new cljs.core.Keyword(null,"default","default",-1987822328)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","installed","plugin/installed",-431253936)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"installed","installed",553977691));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(aim_icon(new cljs.core.Keyword(null,"installed","installed",553977691)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","not-installed","plugin/not-installed",177167620)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"not-installed","not-installed",1160178735));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(aim_icon(new cljs.core.Keyword(null,"not-installed","not-installed",1160178735)))], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","all","plugin/all",-235519199)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"default","default",-1987822328));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(aim_icon(new cljs.core.Keyword(null,"default","default",-1987822328)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","enabled","plugin/enabled",-2065640529)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"enabled","enabled",1195909756));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(aim_icon(new cljs.core.Keyword(null,"enabled","enabled",1195909756)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","disabled","plugin/disabled",-644208599)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(aim_icon(new cljs.core.Keyword(null,"disabled","disabled",-1529784218)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","unpacked","plugin/unpacked",-80516789)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"unpacked","unpacked",828895838));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(aim_icon(new cljs.core.Keyword(null,"unpacked","unpacked",828895838)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","update-available","plugin/update-available",-1277547790)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"update-available","update-available",-283010019));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(aim_icon(new cljs.core.Keyword(null,"update-available","update-available",-283010019)))], null)], null));
return frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.ui.icon("filter"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),null], null), null),filter_by))?null:"picked "))+"sort-or-filter-by"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__38909_SHARP_){
var G__38913 = p1__38909_SHARP_.target;
var G__38914 = (function (p__38916){
var map__38917 = p__38916;
var map__38917__$1 = cljs.core.__destructure_map(map__38917);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38917__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return frontend.components.plugins.render_classic_dropdown_items(id,items);
});
var G__38915 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-dropdown?","as-dropdown?",-37553558),true], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__38913,G__38914,G__38915) : logseq.shui.ui.popup_show_BANG_.call(null,G__38913,G__38914,G__38915));
}),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576)], 0));
})(),(cljs.core.truth_(market_QMARK_)?(function (){var aim_icon = (function (p1__38910_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_by,p1__38910_SHARP_)){
return "check";
} else {
return "circle";
}
});
var items = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","popular","plugin/popular",476085695)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_sort_by,new cljs.core.Keyword(null,"default","default",-1987822328));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(aim_icon(new cljs.core.Keyword(null,"default","default",-1987822328)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","downloads","plugin/downloads",622437555)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_sort_by,new cljs.core.Keyword(null,"downloads","downloads",-513600190));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(aim_icon(new cljs.core.Keyword(null,"downloads","downloads",-513600190)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","stars","plugin/stars",-1508522616)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_sort_by,new cljs.core.Keyword(null,"stars","stars",-556837771));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(aim_icon(new cljs.core.Keyword(null,"stars","stars",-556837771)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","title","plugin/title",1789469082),"A - Z"], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_sort_by,new cljs.core.Keyword(null,"letters","letters",2098125298));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(aim_icon(new cljs.core.Keyword(null,"letters","letters",2098125298)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","supports-db","plugin/supports-db",-640952911)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_sort_by,new cljs.core.Keyword(null,"supportsDB","supportsDB",1271992728));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(aim_icon(new cljs.core.Keyword(null,"supportsDB","supportsDB",1271992728)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","date-added","plugin/date-added",-1195240821)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_sort_by,new cljs.core.Keyword(null,"addedAt","addedAt",-2067173712));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(aim_icon(new cljs.core.Keyword(null,"addedAt","addedAt",-2067173712)))], null)], null);
return frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.ui.icon("arrows-sort"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"popular","popular",-752193652),null], null), null),sort_by))?null:"picked "))+"sort-or-filter-by"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__38911_SHARP_){
var G__38918 = p1__38911_SHARP_.target;
var G__38919 = (function (p__38921){
var map__38922 = p__38921;
var map__38922__$1 = cljs.core.__destructure_map(map__38922);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38922__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return frontend.components.plugins.render_classic_dropdown_items(id,items);
});
var G__38920 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-dropdown?","as-dropdown?",-37553558),true], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__38918,G__38919,G__38920) : logseq.shui.ui.popup_show_BANG_.call(null,G__38918,G__38919,G__38920));
}),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576)], 0));
})():null),(function (){var items = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(market_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1","span.flex.items-center.gap-1",-111995724),frontend.ui.icon("rotate-clockwise"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","refresh-lists","plugin/refresh-lists",-968393268)], 0))], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (reload_market_fn.cljs$core$IFn$_invoke$arity$0 ? reload_market_fn.cljs$core$IFn$_invoke$arity$0() : reload_market_fn.call(null));
})], null)], null)], null):cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1","span.flex.items-center.gap-1",-111995724),frontend.ui.icon("rotate-clockwise"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","check-all-updates","plugin/check-all-updates",1407600189)], 0))], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.plugin.user_check_enabled_for_updates_BANG_(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"plugins","plugins",1900073717),category));
})], null)], null)], null),((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"themes","themes",-702786642),null,new cljs.core.Keyword(null,"plugins","plugins",1900073717),null], null), null),category))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1","span.flex.items-center.gap-1",-111995724),frontend.ui.icon("trash"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","bulk-remove-disabled","plugin/bulk-remove-disabled",-1351988058)], 0))], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.components.plugins.open_bulk_remove_disabled_plugins_dialog_BANG_(category);
})], null)], null)], null):null))),(cljs.core.truth_(frontend.util.electron_QMARK_())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1","span.flex.items-center.gap-1",-111995724),frontend.ui.icon("world"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.advanced","network-proxy","settings.advanced/network-proxy",1017963756)], 0))], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("go","proxy-settings","go/proxy-settings",1019838469),agent_opts], null));
})], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1","span.flex.items-center.gap-1",-111995724),frontend.ui.icon("arrow-down-circle"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin.install-from-file","menu-title","plugin.install-from-file/menu-title",1329038520)], 0))], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.plugin_config.open_replace_plugins_modal], null)], null)], null):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hr","hr",1377740067),true], null)], null),(cljs.core.truth_(frontend.state.developer_mode_QMARK_())?(cljs.core.truth_(frontend.util.electron_QMARK_())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1","span.flex.items-center.gap-1",-111995724),frontend.ui.icon("file-code"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","open-preferences","plugin/open-preferences",-453136863)], 0))], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.plugin.get_ls_dotdir_root()),(function (root){
return promesa.protocols._promise(apis.openPath((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(root)+"/preferences.json")));
}));
}));
})], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.whitespace-nowrap.gap-1","span.flex.items-center.whitespace-nowrap.gap-1",-1439858223),frontend.ui.icon("bug"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","open-logseq-dir","plugin/open-logseq-dir",2030587800)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"~/.logseq"], null)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.plugin.get_ls_dotdir_root()),(function (root){
return promesa.protocols._promise(apis.openPath(root));
}));
}));
})], null)], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.whitespace-nowrap.gap-1","span.flex.items-center.whitespace-nowrap.gap-1",-1439858223),frontend.ui.icon("plug"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","load-from-web-url","plugin/load-from-web-url",-429739384)], 0))], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.components.plugins.load_from_web_url_container) : logseq.shui.ui.dialog_open_BANG_.call(null,frontend.components.plugins.load_from_web_url_container));
})], null)], null)], null)):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1","span.flex.items-center.gap-1",-111995724),frontend.ui.icon("alert-triangle"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","report-security","plugin/report-security",29084696)], 0))], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.plugin.open_report_modal_BANG_.cljs$core$IFn$_invoke$arity$0();
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hr","hr",1377740067),true,new cljs.core.Keyword(null,"key","key",-1516042587),"dropdown-more"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),frontend.components.plugins.auto_check_for_updates_control()], null)], null)], 0));
return frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.ui.icon("dots-vertical"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"more-do",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__38912_SHARP_){
var G__38923 = p1__38912_SHARP_.target;
var G__38924 = (function (p__38926){
var map__38927 = p__38926;
var map__38927__$1 = cljs.core.__destructure_map(map__38927);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38927__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return frontend.components.plugins.render_classic_dropdown_items(id,items);
});
var G__38925 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"as-dropdown?","as-dropdown?",-37553558),true,new cljs.core.Keyword(null,"align","align",1964212802),"center",new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"side-offset","side-offset",207149931),(10)], null)], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__38923,G__38924,G__38925) : logseq.shui.ui.popup_show_BANG_.call(null,G__38923,G__38924,G__38925));
}),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576)], 0));
})(),frontend.components.plugins.panel_tab_developer()], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins$panel_control_tabs__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38928 = cljs.core.first(args__31746__auto__);
var G__38929 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38928,G__38929) : io.factorhouse.hsx.core.obj_get.call(null,G__38928,G__38929));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"panel-control-tabs","panel-control-tabs",984294410,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$plugins$panel_control_tabs,args__31746__auto__,null);
}
};
var frontend$components$plugins$panel_control_tabs = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__39760__i = 0, G__39760__a = new Array(arguments.length -  0);
while (G__39760__i < G__39760__a.length) {G__39760__a[G__39760__i] = arguments[G__39760__i + 0]; ++G__39760__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__39760__a,0,null);
} 
return frontend$components$plugins$panel_control_tabs__delegate.call(this,args__31746__auto__);};
frontend$components$plugins$panel_control_tabs.cljs$lang$maxFixedArity = 0;
frontend$components$plugins$panel_control_tabs.cljs$lang$applyTo = (function (arglist__39761){
var args__31746__auto__ = cljs.core.seq(arglist__39761);
return frontend$components$plugins$panel_control_tabs__delegate(args__31746__auto__);
});
frontend$components$plugins$panel_control_tabs.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins$panel_control_tabs__delegate;
return frontend$components$plugins$panel_control_tabs;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38930 = comp__31745__auto__;
var G__38931 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38930,G__38931) : io.factorhouse.hsx.core.react_memo.call(null,G__38930,G__38931));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"panel-control-tabs");

return comp__31745__auto__;
})();
frontend.components.plugins.use_plugin_items_list_scroll_BANG_ = (function frontend$components$plugins$use_plugin_items_list_scroll_BANG_(root_ref){
return logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto__ = logseq.shui.hooks.deref(root_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
var temp__5825__auto____$1 = el.querySelector(".cp__plugins-item-lists");
if(cljs.core.truth_(temp__5825__auto____$1)){
var el_list = temp__5825__auto____$1;
var temp__5825__auto____$2 = el.querySelector(".control-tabs").classList;
if(cljs.core.truth_(temp__5825__auto____$2)){
var cls = temp__5825__auto____$2;
var on_scroll = (function (){
if((el_list.scrollTop > (1))){
return cls.add("scrolled");
} else {
return cls.remove("scrolled");
}
});
el_list.addEventListener("scroll",on_scroll);

return (function (){
return el_list.removeEventListener("scroll",on_scroll);
});
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}),cljs.core.PersistentVector.EMPTY);
});
frontend.components.plugins.lazy_items_loader = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins$lazy_items_loader(load_more_BANG_){
var inViewState = (function (){var G__38932 = ({"threshold": (0)});
return (frontend.ui.useInView.cljs$core$IFn$_invoke$arity$1 ? frontend.ui.useInView.cljs$core$IFn$_invoke$arity$1(G__38932) : frontend.ui.useInView.call(null,G__38932));
})();
var in_view_QMARK_ = inViewState.inView;
logseq.shui.hooks.use_effect_BANG_((function (){
return (load_more_BANG_.cljs$core$IFn$_invoke$arity$0 ? load_more_BANG_.cljs$core$IFn$_invoke$arity$0() : load_more_BANG_.call(null));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [in_view_QMARK_], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),inViewState.ref], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.py-1.text-center.opacity-0","p.py-1.text-center.opacity-0",1042174362),(cljs.core.truth_(inViewState.inView)?"\u00B7":null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins$lazy_items_loader__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38933 = cljs.core.first(args__31746__auto__);
var G__38934 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38933,G__38934) : io.factorhouse.hsx.core.obj_get.call(null,G__38933,G__38934));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"lazy-items-loader","lazy-items-loader",875832896,null),args__31746__auto__),frontend$components$plugins$lazy_items_loader,args__31746__auto__,null);
}
};
var frontend$components$plugins$lazy_items_loader = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__39766__i = 0, G__39766__a = new Array(arguments.length -  0);
while (G__39766__i < G__39766__a.length) {G__39766__a[G__39766__i] = arguments[G__39766__i + 0]; ++G__39766__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__39766__a,0,null);
} 
return frontend$components$plugins$lazy_items_loader__delegate.call(this,args__31746__auto__);};
frontend$components$plugins$lazy_items_loader.cljs$lang$maxFixedArity = 0;
frontend$components$plugins$lazy_items_loader.cljs$lang$applyTo = (function (arglist__39767){
var args__31746__auto__ = cljs.core.seq(arglist__39767);
return frontend$components$plugins$lazy_items_loader__delegate(args__31746__auto__);
});
frontend$components$plugins$lazy_items_loader.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins$lazy_items_loader__delegate;
return frontend$components$plugins$lazy_items_loader;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38935 = comp__31745__auto__;
var G__38936 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38935,G__38936) : io.factorhouse.hsx.core.react_memo.call(null,G__38935,G__38936));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"lazy-items-loader");

return comp__31745__auto__;
})();
frontend.components.plugins.weighted_sort_by = (function frontend$components$plugins$weighted_sort_by(key,pkgs){
var default_QMARK_ = (((key == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"default","default",-1987822328))));
var grouped_pkgs = ((default_QMARK_)?(function (){var G__38945 = pkgs;
var G__38945__$1 = (((G__38945 == null))?null:cljs.core.group_by((function (p__38946){
var map__38947 = p__38946;
var map__38947__$1 = cljs.core.__destructure_map(map__38947);
var addedAt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38947__$1,new cljs.core.Keyword(null,"addedAt","addedAt",-2067173712));
return ((typeof addedAt === 'number') && (((Date.now() - addedAt) < (((((1000) * (60)) * (60)) * (24)) * (6)))));
}),G__38945));
if((G__38945__$1 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38945__$1);
}
})():new cljs.core.PersistentArrayMap(null, 1, [false,pkgs], null));
var pinned_pkgs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(grouped_pkgs,true);
var pkgs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(grouped_pkgs,false);
var vec__38942 = ((default_QMARK_)?(function (){var decay_factor = 0.001;
var download_weight = 0.8;
var star_weight = 0.2;
var normalize = (function frontend$components$plugins$weighted_sort_by_$_normalize(vals,val){
var min_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,vals);
var max_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,vals);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max_val,min_val)){
return (0);
} else {
return ((val - min_val) / (max_val - min_val));
}
});
var time_diff_in_days = (function frontend$components$plugins$weighted_sort_by_$_time_diff_in_days(ts){
var temp__5825__auto__ = (function (){var and__5140__auto__ = typeof ts === 'number';
if(and__5140__auto__){
return (Date.now() - ts);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var time_diff = temp__5825__auto__;
return (time_diff / ((((1000) * (60)) * (60)) * (24)));
} else {
return null;
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weight","weight",-1262796205),(function (){var all_downloads = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38937_SHARP_){
return (!(typeof p1__38937_SHARP_ === 'number'));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"downloads","downloads",-513600190),pkgs__$1));
var all_stars = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38938_SHARP_){
return (!(typeof p1__38938_SHARP_ === 'number'));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stars","stars",-556837771),pkgs__$1));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38948){
var map__38949 = p__38948;
var map__38949__$1 = cljs.core.__destructure_map(map__38949);
var pkg = map__38949__$1;
var downloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38949__$1,new cljs.core.Keyword(null,"downloads","downloads",-513600190));
var stars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38949__$1,new cljs.core.Keyword(null,"stars","stars",-556837771));
var latestAt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38949__$1,new cljs.core.Keyword(null,"latestAt","latestAt",1260716261));
var downloads__$1 = ((typeof downloads === 'number')?downloads:(1));
var stars__$1 = ((typeof stars === 'number')?stars:(1));
var days_since_latest = time_diff_in_days(latestAt);
var decay = Math.exp((((-1) * decay_factor) * days_since_latest));
var normalized_downloads = normalize(all_downloads,downloads__$1);
var normalize_stars = normalize(all_stars,stars__$1);
var download_score = (normalized_downloads * download_weight);
var star_score = (normalize_stars * star_weight);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pkg,new cljs.core.Keyword(null,"weight","weight",-1262796205),((download_score + star_score) + decay));
}),pkgs__$1);
})()], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,pkgs__$1], null));
var key__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38942,(0),null);
var pkgs__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38942,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pinned_pkgs,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.sort_by,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__38950 = key__$1;
var G__38950__$1 = (((G__38950 instanceof cljs.core.Keyword))?G__38950.fqn:null);
switch (G__38950__$1) {
case "letters":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__38939_SHARP_){
return frontend.util.safe_lower_case((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__38939_SHARP_);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__38939_SHARP_);
}
})());
})], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key__$1,(function (p1__38941_SHARP_,p2__38940_SHARP_){
return cljs.core.compare(p2__38940_SHARP_,p1__38941_SHARP_);
})], null);

}
})(),pkgs__$2)));
});
frontend.components.plugins.marketplace_plugins = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins$marketplace_plugins(){
var _STAR_root_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var _STAR_list_node_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var pkgs = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","marketplace-pkgs","plugin/marketplace-pkgs",637462798)], null));
var stats = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","marketplace-stats","plugin/marketplace-stats",1801405730)], null));
var installed_plugins = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034)], null));
var installing = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installing","plugin/installing",-755703581)], null));
var online_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("network","online?","network/online?",1306822774)], null));
var develop_mode_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","developer-mode?","ui/developer-mode?",-664501878)], null));
var agent_opts = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("settings","agent","settings/agent",2144439922)], null));
var _STAR_search_key = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1("");
}),cljs.core.PersistentVector.EMPTY);
var _STAR_category = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"plugins","plugins",1900073717));
}),cljs.core.PersistentVector.EMPTY);
var _STAR_sort_by = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"default","default",-1987822328));
}),cljs.core.PersistentVector.EMPTY);
var _STAR_filter_by = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"default","default",-1987822328));
}),cljs.core.PersistentVector.EMPTY);
var _STAR_cached_query_flag = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}),cljs.core.PersistentVector.EMPTY);
var _STAR_current_page = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1((1));
}),cljs.core.PersistentVector.EMPTY);
var _STAR_fetching = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}),cljs.core.PersistentVector.EMPTY);
var _STAR_error = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}),cljs.core.PersistentVector.EMPTY);
var vec__38958 = logseq.shui.hooks.use_atom(_STAR_search_key);
var search_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38958,(0),null);
var vec__38961 = logseq.shui.hooks.use_atom(_STAR_category);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38961,(0),null);
var vec__38964 = logseq.shui.hooks.use_atom(_STAR_sort_by);
var sort_by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38964,(0),null);
var vec__38967 = logseq.shui.hooks.use_atom(_STAR_filter_by);
var filter_by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38967,(0),null);
var vec__38970 = logseq.shui.hooks.use_atom(_STAR_cached_query_flag);
var cached_query_flag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38970,(0),null);
var vec__38973 = logseq.shui.hooks.use_atom(_STAR_current_page);
var current_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38973,(0),null);
var vec__38976 = logseq.shui.hooks.use_atom(_STAR_fetching);
var fetching = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38976,(0),null);
var vec__38979 = logseq.shui.hooks.use_atom(_STAR_error);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38979,(0),null);
var reload_fn = logseq.shui.hooks.use_callback((function (force_refresh_QMARK_){
if(cljs.core.truth_(cljs.core.deref(_STAR_fetching))){
return null;
} else {
cljs.core.reset_BANG_(_STAR_fetching,true);

cljs.core.reset_BANG_(_STAR_error,null);

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.load_marketplace_plugins(force_refresh_QMARK_),(function (){
return frontend.handler.plugin.load_marketplace_stats(false);
})),(function (p1__38951_SHARP_){
console.error(p1__38951_SHARP_);

return cljs.core.reset_BANG_(_STAR_error,p1__38951_SHARP_);
})),(function (){
return cljs.core.reset_BANG_(_STAR_fetching,false);
}));
}
}),cljs.core.PersistentVector.EMPTY);
var _ = frontend.components.plugins.use_plugin_items_list_scroll_BANG_(_STAR_root_ref);
var ___$1 = logseq.shui.hooks.use_effect_BANG_((function (){
return (reload_fn.cljs$core$IFn$_invoke$arity$1 ? reload_fn.cljs$core$IFn$_invoke$arity$1(false) : reload_fn.call(null,false));
}),cljs.core.PersistentVector.EMPTY);
var theme_plugins = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38952_SHARP_){
return new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(p1__38952_SHARP_);
}),pkgs);
var normal_plugins = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38953_SHARP_){
return cljs.core.not(new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(p1__38953_SHARP_));
}),pkgs);
var filtered_pkgs = ((cljs.core.seq(pkgs))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"themes","themes",-702786642)))?theme_plugins:normal_plugins):null);
var total_nums = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(normal_plugins),cljs.core.count(theme_plugins)], null);
var filtered_pkgs__$1 = ((((cljs.core.seq(filtered_pkgs)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),filter_by))))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38954_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"installed","installed",553977691),filter_by))?cljs.core.identity:cljs.core.not),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.contains_QMARK_(installed_plugins,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__38954_SHARP_)))], null));
}),filtered_pkgs):filtered_pkgs);
var filtered_pkgs__$2 = (((!(clojure.string.blank_QMARK_(search_key))))?(function (){var temp__5823__auto__ = (function (){var and__5140__auto__ = clojure.string.starts_with_QMARK_(search_key,"@");
if(and__5140__auto__){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(search_key,(1));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var author = temp__5823__auto__;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38955_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(author,new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(p1__38955_SHARP_));
}),filtered_pkgs__$1);
} else {
var low_case_search = clojure.string.lower_case(search_key);
var min_description_search_length = (3);
var max_description_matches = (30);
var fuzzy_title_matches = (frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$6 ? frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$6(filtered_pkgs__$1,search_key,new cljs.core.Keyword(null,"limit","limit",-1355822363),(30),new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),new cljs.core.Keyword(null,"title","title",636505583)) : frontend.search.fuzzy_search.call(null,filtered_pkgs__$1,search_key,new cljs.core.Keyword(null,"limit","limit",-1355822363),(30),new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),new cljs.core.Keyword(null,"title","title",636505583)));
var precise_description_matches = (((((low_case_search).length) >= min_description_search_length))?cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_description_matches,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38956_SHARP_){
var G__38982 = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(p1__38956_SHARP_);
var G__38982__$1 = (((G__38982 == null))?null:clojure.string.lower_case(G__38982));
if((G__38982__$1 == null)){
return null;
} else {
return clojure.string.includes_QMARK_(G__38982__$1,low_case_search);
}
}),filtered_pkgs__$1)):cljs.core.PersistentVector.EMPTY);
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fuzzy_title_matches,precise_description_matches));
}
})():filtered_pkgs__$1);
var filtered_pkgs__$3 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38957_SHARP_){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(stats,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__38957_SHARP_)));
if(cljs.core.truth_(temp__5823__auto__)){
var stat = temp__5823__auto__;
var downloads = new cljs.core.Keyword(null,"total_downloads","total_downloads",-1370933259).cljs$core$IFn$_invoke$arity$1(stat);
var stars = new cljs.core.Keyword(null,"stargazers_count","stargazers_count",-984649909).cljs$core$IFn$_invoke$arity$1(stat);
var latest_at = (function (){var G__38983 = new cljs.core.Keyword(null,"updated_at","updated_at",-460224592).cljs$core$IFn$_invoke$arity$1(stat);
var G__38983__$1 = (((G__38983 == null))?null:(new Date(G__38983)));
if((G__38983__$1 == null)){
return null;
} else {
return G__38983__$1.getTime();
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__38957_SHARP_,new cljs.core.Keyword(null,"stat","stat",-1370599836),stat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stars","stars",-556837771),stars,new cljs.core.Keyword(null,"latestAt","latestAt",1260716261),latest_at,new cljs.core.Keyword(null,"downloads","downloads",-513600190),downloads], 0));
} else {
return p1__38957_SHARP_;
}
}),filtered_pkgs__$2);
var sorted_plugins = frontend.components.plugins.weighted_sort_by(sort_by,filtered_pkgs__$3);
var fn_query_flag = (function (){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("_",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [filter_by,sort_by,search_key,category], null));
});
var str_query_flag = fn_query_flag();
var ___$2 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(str_query_flag,cached_query_flag))?(function (){
var temp__5825__auto___39783 = logseq.shui.hooks.deref(_STAR_list_node_ref);
if(cljs.core.truth_(temp__5825__auto___39783)){
var list_cnt_39784 = temp__5825__auto___39783;
(list_cnt_39784.scrollTop = (0));
} else {
}

return cljs.core.reset_BANG_(_STAR_current_page,(1));
})()
:null);
var ___$3 = cljs.core.reset_BANG_(_STAR_cached_query_flag,str_query_flag);
var page_total_items = cljs.core.count(sorted_plugins);
var sorted_plugins__$1 = (((!((page_total_items > frontend.components.plugins.PER_PAGE_SIZE))))?sorted_plugins:cljs.core.take.cljs$core$IFn$_invoke$arity$2((current_page * frontend.components.plugins.PER_PAGE_SIZE),sorted_plugins));
var load_more_pages_BANG_ = (function (){
if((page_total_items > frontend.components.plugins.PER_PAGE_SIZE)){
if(((frontend.components.plugins.PER_PAGE_SIZE * cljs.core.deref(_STAR_current_page)) < page_total_items)){
return cljs.core.reset_BANG_(_STAR_current_page,(cljs.core.deref(_STAR_current_page) + (1)));
} else {
return null;
}
} else {
return null;
}
});
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__plugins-marketplace","div.cp__plugins-marketplace",-1233943571),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_root_ref], null),frontend.components.plugins.panel_control_tabs(search_key,_STAR_search_key,category,_STAR_category,sort_by,_STAR_sort_by,filter_by,_STAR_filter_by,total_nums,null,true,develop_mode_QMARK_,reload_fn,agent_opts),((cljs.core.not(online_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.flex.justify-center.pt-20.opacity-50","p.flex.justify-center.pt-20.opacity-50",-971400457),frontend.components.svg.offline.cljs$core$IFn$_invoke$arity$1((30))], null):(cljs.core.truth_(fetching)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.flex.justify-center.py-20","p.flex.justify-center.py-20",801814987),frontend.components.svg.loading], null):(cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.flex.justify-center.pt-20.opacity-50","p.flex.justify-center.pt-20.opacity-50",-971400457),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","remote-error","plugin/remote-error",-1070592042),error.message], 0))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__plugins-marketplace-cnt","div.cp__plugins-marketplace-cnt",-1303479353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"has-installing","has-installing",853601088),cljs.core.boolean$(installing)], null)], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__plugins-item-lists","div.cp__plugins-item-lists",1796345937),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_list_node_ref], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__plugins-item-lists-inner","div.cp__plugins-item-lists-inner",-1382302118),(function (){var iter__5628__auto__ = (function frontend$components$plugins$marketplace_plugins_$_iter__38984(s__38985){
return (new cljs.core.LazySeq(null,(function (){
var s__38985__$1 = s__38985;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__38985__$1);
if(temp__5825__auto__){
var s__38985__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38985__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__38985__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__38987 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__38986 = (0);
while(true){
if((i__38986 < size__5627__auto__)){
var item = cljs.core._nth(c__5626__auto__,i__38986);
cljs.core.chunk_append(b__38987,(function (){var pid = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item));
var stat = new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(item);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.plugins.plugin_item_card,frontend.context.i18n.t,item,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"disabled","disabled",-1529784218)], null)),true,_STAR_search_key,installing,(function (){var and__5140__auto__ = installing;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(installing)),pid);
} else {
return and__5140__auto__;
}
})(),cljs.core.contains_QMARK_(installed_plugins,pid),stat,null], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null));
})());

var G__39808 = (i__38986 + (1));
i__38986 = G__39808;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38987),frontend$components$plugins$marketplace_plugins_$_iter__38984(cljs.core.chunk_rest(s__38985__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38987),null);
}
} else {
var item = cljs.core.first(s__38985__$2);
return cljs.core.cons((function (){var pid = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item));
var stat = new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(item);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.plugins.plugin_item_card,frontend.context.i18n.t,item,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"disabled","disabled",-1529784218)], null)),true,_STAR_search_key,installing,(function (){var and__5140__auto__ = installing;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(installing)),pid);
} else {
return and__5140__auto__;
}
})(),cljs.core.contains_QMARK_(installed_plugins,pid),stat,null], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null));
})(),frontend$components$plugins$marketplace_plugins_$_iter__38984(cljs.core.rest(s__38985__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(sorted_plugins__$1);
})()], null),((cljs.core.seq(sorted_plugins__$1))?frontend.components.plugins.lazy_items_loader(load_more_pages_BANG_):null)], null)], null)
)))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins$marketplace_plugins__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38988 = cljs.core.first(args__31746__auto__);
var G__38989 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38988,G__38989) : io.factorhouse.hsx.core.obj_get.call(null,G__38988,G__38989));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"marketplace-plugins","marketplace-plugins",-366611436,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","data-var","large-vars/data-var",1805150589),true], null)),args__31746__auto__),frontend$components$plugins$marketplace_plugins,args__31746__auto__,null);
}
};
var frontend$components$plugins$marketplace_plugins = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__39818__i = 0, G__39818__a = new Array(arguments.length -  0);
while (G__39818__i < G__39818__a.length) {G__39818__a[G__39818__i] = arguments[G__39818__i + 0]; ++G__39818__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__39818__a,0,null);
} 
return frontend$components$plugins$marketplace_plugins__delegate.call(this,args__31746__auto__);};
frontend$components$plugins$marketplace_plugins.cljs$lang$maxFixedArity = 0;
frontend$components$plugins$marketplace_plugins.cljs$lang$applyTo = (function (arglist__39819){
var args__31746__auto__ = cljs.core.seq(arglist__39819);
return frontend$components$plugins$marketplace_plugins__delegate(args__31746__auto__);
});
frontend$components$plugins$marketplace_plugins.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins$marketplace_plugins__delegate;
return frontend$components$plugins$marketplace_plugins;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38990 = comp__31745__auto__;
var G__38991 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38990,G__38991) : io.factorhouse.hsx.core.react_memo.call(null,G__38990,G__38991));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"marketplace-plugins");

return comp__31745__auto__;
})();
frontend.components.plugins.installed_plugins = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins$installed_plugins(){
var _STAR_root_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var _STAR_list_node_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var installed_plugins_SINGLEQUOTE_ = cljs.core.vals(frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034)], null)));
var updating = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installing","plugin/installing",-755703581)], null));
var develop_mode_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","developer-mode?","ui/developer-mode?",-664501878)], null));
var selected_unpacked_pkg = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","selected-unpacked-pkg","plugin/selected-unpacked-pkg",-286319185)], null));
var coming_updates = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","updates-coming","plugin/updates-coming",104160263)], null));
var agent_opts = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("settings","agent","settings/agent",2144439922)], null));
var _STAR_filter_by = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"default","default",-1987822328));
}),cljs.core.PersistentVector.EMPTY);
var _STAR_sort_by = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"default","default",-1987822328));
}),cljs.core.PersistentVector.EMPTY);
var _STAR_search_key = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1("");
}),cljs.core.PersistentVector.EMPTY);
var _STAR_category = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"plugins","plugins",1900073717));
}),cljs.core.PersistentVector.EMPTY);
var _STAR_cached_query_flag = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}),cljs.core.PersistentVector.EMPTY);
var _STAR_current_page = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1((1));
}),cljs.core.PersistentVector.EMPTY);
var vec__38998 = logseq.shui.hooks.use_atom(_STAR_filter_by);
var filter_by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38998,(0),null);
var vec__39001 = logseq.shui.hooks.use_atom(_STAR_sort_by);
var sort_by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39001,(0),null);
var vec__39004 = logseq.shui.hooks.use_atom(_STAR_search_key);
var search_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39004,(0),null);
var vec__39007 = logseq.shui.hooks.use_atom(_STAR_category);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39007,(0),null);
var vec__39010 = logseq.shui.hooks.use_atom(_STAR_cached_query_flag);
var cached_query_flag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39010,(0),null);
var vec__39013 = logseq.shui.hooks.use_atom(_STAR_current_page);
var current_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39013,(0),null);
var _ = frontend.components.plugins.use_plugin_items_list_scroll_BANG_(_STAR_root_ref);
var default_filter_by_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),filter_by);
var theme_plugins = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38992_SHARP_){
return new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(p1__38992_SHARP_);
}),installed_plugins_SINGLEQUOTE_);
var normal_plugins = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38993_SHARP_){
return cljs.core.not(new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(p1__38993_SHARP_));
}),installed_plugins_SINGLEQUOTE_);
var filtered_plugins = ((cljs.core.seq(installed_plugins_SINGLEQUOTE_))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"themes","themes",-702786642)))?theme_plugins:normal_plugins):null);
var total_nums = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(normal_plugins),cljs.core.count(theme_plugins)], null);
var filtered_plugins__$1 = (((!(default_filter_by_QMARK_)))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (it){
var disabled = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(it,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"disabled","disabled",-1529784218)], null));
var G__39016 = filter_by;
var G__39016__$1 = (((G__39016 instanceof cljs.core.Keyword))?G__39016.fqn:null);
switch (G__39016__$1) {
case "enabled":
return cljs.core.not(disabled);

break;
case "disabled":
return disabled;

break;
case "unpacked":
return cljs.core.not(new cljs.core.Keyword(null,"iir","iir",-231680811).cljs$core$IFn$_invoke$arity$1(it));

break;
case "update-available":
return frontend.state.plugin_update_available_QMARK_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(it));

break;
default:
return true;

}
}),filtered_plugins):filtered_plugins);
var filtered_plugins__$2 = (((!(clojure.string.blank_QMARK_(search_key))))?(function (){var temp__5823__auto__ = (function (){var and__5140__auto__ = clojure.string.starts_with_QMARK_(search_key,"@");
if(and__5140__auto__){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(search_key,(1));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var author = temp__5823__auto__;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38994_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(author,new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(p1__38994_SHARP_));
}),filtered_plugins__$1);
} else {
return (frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$6 ? frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$6(filtered_plugins__$1,search_key,new cljs.core.Keyword(null,"limit","limit",-1355822363),(30),new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),new cljs.core.Keyword(null,"name","name",1843675177)) : frontend.search.fuzzy_search.call(null,filtered_plugins__$1,search_key,new cljs.core.Keyword(null,"limit","limit",-1355822363),(30),new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),new cljs.core.Keyword(null,"name","name",1843675177)));
}
})():filtered_plugins__$1);
var sorted_plugins = ((default_filter_by_QMARK_)?cljs.core.flatten((function (p1__38997_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__38997_SHARP_,(0),(function (coll){
return (sort_by.cljs$core$IFn$_invoke$arity$2 ? sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"iir","iir",-231680811),coll) : sort_by.call(null,new cljs.core.Keyword(null,"iir","iir",-231680811),coll));
}));
})(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__38996_SHARP_,p2__38995_SHARP_){
var disabled_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p2__38995_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"disabled","disabled",-1529784218)], null));
var old_dirty = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.components.plugins._STAR_dirties_toggle_items),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__38995_SHARP_)));
var k = (cljs.core.truth_(((cljs.core.boolean_QMARK_(old_dirty))?(!(old_dirty)):disabled_QMARK_))?(1):(0));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__38996_SHARP_,k,cljs.core.conj,p2__38995_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),filtered_plugins__$2))):(function (){
frontend.components.plugins.clear_dirties_states_BANG_();

return filtered_plugins__$2;
})()
);
var fn_query_flag = (function (){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("_",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [filter_by,sort_by,search_key,category], null));
});
var str_query_flag = fn_query_flag();
var ___$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(str_query_flag,cached_query_flag))?(function (){
var temp__5825__auto___39833 = logseq.shui.hooks.deref(_STAR_list_node_ref);
if(cljs.core.truth_(temp__5825__auto___39833)){
var list_cnt_39834 = temp__5825__auto___39833;
(list_cnt_39834.scrollTop = (0));
} else {
}

return cljs.core.reset_BANG_(_STAR_current_page,(1));
})()
:null);
var ___$2 = cljs.core.reset_BANG_(_STAR_cached_query_flag,str_query_flag);
var page_total_items = cljs.core.count(sorted_plugins);
var sorted_plugins__$1 = (((!((page_total_items > frontend.components.plugins.PER_PAGE_SIZE))))?sorted_plugins:cljs.core.take.cljs$core$IFn$_invoke$arity$2((current_page * frontend.components.plugins.PER_PAGE_SIZE),sorted_plugins));
var load_more_pages_BANG_ = (function (){
if((page_total_items > frontend.components.plugins.PER_PAGE_SIZE)){
if(((frontend.components.plugins.PER_PAGE_SIZE * cljs.core.deref(_STAR_current_page)) < page_total_items)){
return cljs.core.reset_BANG_(_STAR_current_page,(cljs.core.deref(_STAR_current_page) + (1)));
} else {
return null;
}
} else {
return null;
}
});
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__plugins-installed","div.cp__plugins-installed",-654017478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_root_ref], null),frontend.components.plugins.panel_control_tabs(search_key,_STAR_search_key,category,_STAR_category,sort_by,_STAR_sort_by,filter_by,_STAR_filter_by,total_nums,selected_unpacked_pkg,false,develop_mode_QMARK_,null,agent_opts),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__plugins-item-lists.pb-6","div.cp__plugins-item-lists.pb-6",-1566629034),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_list_node_ref], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__plugins-item-lists-inner","div.cp__plugins-item-lists-inner",-1382302118),(function (){var iter__5628__auto__ = (function frontend$components$plugins$installed_plugins_$_iter__39017(s__39018){
return (new cljs.core.LazySeq(null,(function (){
var s__39018__$1 = s__39018;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__39018__$1);
if(temp__5825__auto__){
var s__39018__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39018__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__39018__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__39020 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__39019 = (0);
while(true){
if((i__39019 < size__5627__auto__)){
var item = cljs.core._nth(c__5626__auto__,i__39019);
cljs.core.chunk_append(b__39020,(function (){var pid = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.plugins.plugin_item_card,frontend.context.i18n.t,item,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"disabled","disabled",-1529784218)], null)),false,_STAR_search_key,updating,(function (){var and__5140__auto__ = updating;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(updating)),pid);
} else {
return and__5140__auto__;
}
})(),true,null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(coming_updates,pid)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null));
})());

var G__39849 = (i__39019 + (1));
i__39019 = G__39849;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39020),frontend$components$plugins$installed_plugins_$_iter__39017(cljs.core.chunk_rest(s__39018__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39020),null);
}
} else {
var item = cljs.core.first(s__39018__$2);
return cljs.core.cons((function (){var pid = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.plugins.plugin_item_card,frontend.context.i18n.t,item,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"disabled","disabled",-1529784218)], null)),false,_STAR_search_key,updating,(function (){var and__5140__auto__ = updating;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(updating)),pid);
} else {
return and__5140__auto__;
}
})(),true,null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(coming_updates,pid)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null));
})(),frontend$components$plugins$installed_plugins_$_iter__39017(cljs.core.rest(s__39018__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(sorted_plugins__$1);
})()], null),((cljs.core.seq(sorted_plugins__$1))?frontend.components.plugins.lazy_items_loader(load_more_pages_BANG_):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.justify-center.py-28.flex-col.gap-2.opacity-30","div.flex.items-center.justify-center.py-28.flex-col.gap-2.opacity-30",220546567),logseq.shui.ui.tabler_icon("list-search",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(40)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm","span.text-sm",1152322665),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","empty","plugin/empty",-552970063)], 0))], null)], null))], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins$installed_plugins__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__39021 = cljs.core.first(args__31746__auto__);
var G__39022 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__39021,G__39022) : io.factorhouse.hsx.core.obj_get.call(null,G__39021,G__39022));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"installed-plugins","installed-plugins",1691427910,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","data-var","large-vars/data-var",1805150589),true], null)),args__31746__auto__),frontend$components$plugins$installed_plugins,args__31746__auto__,null);
}
};
var frontend$components$plugins$installed_plugins = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__39863__i = 0, G__39863__a = new Array(arguments.length -  0);
while (G__39863__i < G__39863__a.length) {G__39863__a[G__39863__i] = arguments[G__39863__i + 0]; ++G__39863__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__39863__a,0,null);
} 
return frontend$components$plugins$installed_plugins__delegate.call(this,args__31746__auto__);};
frontend$components$plugins$installed_plugins.cljs$lang$maxFixedArity = 0;
frontend$components$plugins$installed_plugins.cljs$lang$applyTo = (function (arglist__39864){
var args__31746__auto__ = cljs.core.seq(arglist__39864);
return frontend$components$plugins$installed_plugins__delegate(args__31746__auto__);
});
frontend$components$plugins$installed_plugins.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins$installed_plugins__delegate;
return frontend$components$plugins$installed_plugins;
})()
;
var memo_comp__31747__auto__ = (function (){var G__39023 = comp__31745__auto__;
var G__39024 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__39023,G__39024) : io.factorhouse.hsx.core.react_memo.call(null,G__39023,G__39024));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"installed-plugins");

return comp__31745__auto__;
})();
frontend.components.plugins.waiting_coming_updates = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins$waiting_coming_updates(){
logseq.shui.hooks.use_effect_BANG_((function (){
return frontend.state.reset_unchecked_update();
}),cljs.core.PersistentVector.EMPTY);

var _ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","updates-coming","plugin/updates-coming",104160263)], null));
var downloading_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","updates-downloading?","plugin/updates-downloading?",1294108608)], null));
var unchecked = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","updates-unchecked","plugin/updates-unchecked",723985111)], null));
var updates = frontend.state.all_available_coming_updates.cljs$core$IFn$_invoke$arity$0();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__plugins-waiting-updates","div.cp__plugins-waiting-updates",1818970938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.mb-4.text-2xl.p-1","h1.mb-4.text-2xl.p-1",1716678143),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","found-n-updates","plugin/found-n-updates",-1766578685),cljs.core.count(updates)], 0))], null),((cljs.core.seq(updates))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(downloading_QMARK_)?"downloading":null)], null),(function (){var iter__5628__auto__ = (function frontend$components$plugins$waiting_coming_updates_$_iter__39025(s__39027){
return (new cljs.core.LazySeq(null,(function (){
var s__39027__$1 = s__39027;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__39027__$1);
if(temp__5825__auto__){
var s__39027__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39027__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__39027__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__39029 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__39028 = (0);
while(true){
if((i__39028 < size__5627__auto__)){
var it = cljs.core._nth(c__5626__auto__,i__39028);
var k = (""+"lsp-it-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(it)));
var c_QMARK_ = (!(cljs.core.contains_QMARK_(unchecked,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(it))));
var notes = frontend.util.trim_safe(new cljs.core.Keyword(null,"latest-notes","latest-notes",-368663386).cljs$core$IFn$_invoke$arity$1(it));
cljs.core.chunk_append(b__39029,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.flex.items-center","li.flex.items-center",-1667044136),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"class","class",-2030961996),((c_QMARK_)?"checked":null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.flex-1","label.flex-1",-1656463573),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),k], null),(function (){var G__39037 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),k,new cljs.core.Keyword(null,"default-checked","default-checked",1039965863),c_QMARK_,new cljs.core.Keyword(null,"on-checked-change","on-checked-change",-482086819),((function (i__39028,k,c_QMARK_,notes,it,c__5626__auto__,size__5627__auto__,b__39029,s__39027__$2,temp__5825__auto__,_,downloading_QMARK_,unchecked,updates){
return (function (checked_QMARK_){
if(cljs.core.truth_(downloading_QMARK_)){
return null;
} else {
return frontend.state.set_unchecked_update(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(it),cljs.core.not(checked_QMARK_));
}
});})(i__39028,k,c_QMARK_,notes,it,c__5626__auto__,size__5627__auto__,b__39029,s__39027__$2,temp__5825__auto__,_,downloading_QMARK_,unchecked,updates))
], null);
return (logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1(G__39037) : logseq.shui.ui.checkbox.call(null,G__39037));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.px-3","strong.px-3",-317545167),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(it),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup","sup",-2039492346),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(it))+" \uD83D\uDC49 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"latest-version","latest-version",-1985110248).cljs$core$IFn$_invoke$arity$1(it)))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-4","div.px-4",472594622),((clojure.string.blank_QMARK_(notes))?null:frontend.ui.tooltip(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-30.hover:opacity-80","span.opacity-30.hover:opacity-80",825778773),frontend.ui.icon("info-circle")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),notes], null)))], null)], null));

var G__39884 = (i__39028 + (1));
i__39028 = G__39884;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39029),frontend$components$plugins$waiting_coming_updates_$_iter__39025(cljs.core.chunk_rest(s__39027__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39029),null);
}
} else {
var it = cljs.core.first(s__39027__$2);
var k = (""+"lsp-it-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(it)));
var c_QMARK_ = (!(cljs.core.contains_QMARK_(unchecked,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(it))));
var notes = frontend.util.trim_safe(new cljs.core.Keyword(null,"latest-notes","latest-notes",-368663386).cljs$core$IFn$_invoke$arity$1(it));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.flex.items-center","li.flex.items-center",-1667044136),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"class","class",-2030961996),((c_QMARK_)?"checked":null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.flex-1","label.flex-1",-1656463573),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),k], null),(function (){var G__39042 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),k,new cljs.core.Keyword(null,"default-checked","default-checked",1039965863),c_QMARK_,new cljs.core.Keyword(null,"on-checked-change","on-checked-change",-482086819),((function (k,c_QMARK_,notes,it,s__39027__$2,temp__5825__auto__,_,downloading_QMARK_,unchecked,updates){
return (function (checked_QMARK_){
if(cljs.core.truth_(downloading_QMARK_)){
return null;
} else {
return frontend.state.set_unchecked_update(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(it),cljs.core.not(checked_QMARK_));
}
});})(k,c_QMARK_,notes,it,s__39027__$2,temp__5825__auto__,_,downloading_QMARK_,unchecked,updates))
], null);
return (logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1(G__39042) : logseq.shui.ui.checkbox.call(null,G__39042));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.px-3","strong.px-3",-317545167),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(it),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup","sup",-2039492346),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(it))+" \uD83D\uDC49 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"latest-version","latest-version",-1985110248).cljs$core$IFn$_invoke$arity$1(it)))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-4","div.px-4",472594622),((clojure.string.blank_QMARK_(notes))?null:frontend.ui.tooltip(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-30.hover:opacity-80","span.opacity-30.hover:opacity-80",825778773),frontend.ui.icon("info-circle")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),notes], null)))], null)], null),frontend$components$plugins$waiting_coming_updates_$_iter__39025(cljs.core.rest(s__39027__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(updates);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.py-4","div.py-4",1523486045),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.text-4xl","strong.text-4xl",-366008083),(""+"\uD83C\uDF89 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","update-all-success","plugin/update-all-success",-437937756)], 0))))], null)], null)),((cljs.core.seq(updates))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pt-5.flex.justify-end","div.pt-5.flex.justify-end",-671787138),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(downloading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.ui.loading.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","updates-downloading","plugin/updates-downloading",1242309586)], 0)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center","span.flex.items-center",-463750193),frontend.ui.icon("download"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","update-all-selected","plugin/update-all-selected",-306619318)], 0))], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(downloading_QMARK_)){
return null;
} else {
frontend.handler.plugin.open_updates_downloading();

var temp__5823__auto__ = frontend.state.get_next_selected_coming_update();
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
return frontend.handler.plugin.check_or_update_marketplace_plugin_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(n,new cljs.core.Keyword(null,"only-check","only-check",-1961506795),false),(function (e){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(e.toString(),new cljs.core.Keyword(null,"error","error",-978969032));
}));
} else {
return frontend.handler.plugin.close_updates_downloading();
}
}
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var or__5142__auto__ = downloading_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return ((cljs.core.seq(unchecked)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(unchecked),cljs.core.count(updates))));
}
})()], 0))], null):null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins$waiting_coming_updates__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__39053 = cljs.core.first(args__31746__auto__);
var G__39054 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__39053,G__39054) : io.factorhouse.hsx.core.obj_get.call(null,G__39053,G__39054));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"waiting-coming-updates","waiting-coming-updates",-1284565958,null),args__31746__auto__),frontend$components$plugins$waiting_coming_updates,args__31746__auto__,null);
}
};
var frontend$components$plugins$waiting_coming_updates = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__39908__i = 0, G__39908__a = new Array(arguments.length -  0);
while (G__39908__i < G__39908__a.length) {G__39908__a[G__39908__i] = arguments[G__39908__i + 0]; ++G__39908__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__39908__a,0,null);
} 
return frontend$components$plugins$waiting_coming_updates__delegate.call(this,args__31746__auto__);};
frontend$components$plugins$waiting_coming_updates.cljs$lang$maxFixedArity = 0;
frontend$components$plugins$waiting_coming_updates.cljs$lang$applyTo = (function (arglist__39909){
var args__31746__auto__ = cljs.core.seq(arglist__39909);
return frontend$components$plugins$waiting_coming_updates__delegate(args__31746__auto__);
});
frontend$components$plugins$waiting_coming_updates.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins$waiting_coming_updates__delegate;
return frontend$components$plugins$waiting_coming_updates;
})()
;
var memo_comp__31747__auto__ = (function (){var G__39055 = comp__31745__auto__;
var G__39056 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__39055,G__39056) : io.factorhouse.hsx.core.react_memo.call(null,G__39055,G__39056));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"waiting-coming-updates");

return comp__31745__auto__;
})();
frontend.components.plugins.plugins_from_file = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins$plugins_from_file(plugins){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__plugins-fom-file","div.cp__plugins-fom-file",242447862),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.mb-4.text-2xl.p-1","h1.mb-4.text-2xl.p-1",1716678143),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin.install-from-file","title","plugin.install-from-file/title",1282492345)], 0))], null),((cljs.core.seq(plugins))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-2.text-xl","div.mb-2.text-xl",-934580353),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin.install-from-file","notice","plugin.install-from-file/notice",-1800784446)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5628__auto__ = (function frontend$components$plugins$plugins_from_file_$_iter__39059(s__39060){
return (new cljs.core.LazySeq(null,(function (){
var s__39060__$1 = s__39060;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__39060__$1);
if(temp__5825__auto__){
var s__39060__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39060__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__39060__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__39062 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__39061 = (0);
while(true){
if((i__39061 < size__5627__auto__)){
var it = cljs.core._nth(c__5626__auto__,i__39061);
var k = (""+"lsp-it-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(it))));
cljs.core.chunk_append(b__39062,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.flex.items-center","li.flex.items-center",-1667044136),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.flex-1","label.flex-1",-1656463573),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.px-3","strong.px-3",-317545167),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(it)))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(it)))], null)], null)], null));

var G__39924 = (i__39061 + (1));
i__39061 = G__39924;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39062),frontend$components$plugins$plugins_from_file_$_iter__39059(cljs.core.chunk_rest(s__39060__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39062),null);
}
} else {
var it = cljs.core.first(s__39060__$2);
var k = (""+"lsp-it-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(it))));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.flex.items-center","li.flex.items-center",-1667044136),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.flex-1","label.flex-1",-1656463573),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.px-3","strong.px-3",-317545167),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(it)))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(it)))], null)], null)], null),frontend$components$plugins$plugins_from_file_$_iter__39059(cljs.core.rest(s__39060__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(new cljs.core.Keyword(null,"install","install",-655751038).cljs$core$IFn$_invoke$arity$1(plugins));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pt-5","div.pt-5",302799775),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","install","plugin/install",-432957003)], 0))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.handler.plugin_config.replace_plugins(plugins);

return (logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$1("ls-plugins-from-file-modal") : logseq.shui.ui.dialog_close_BANG_.call(null,"ls-plugins-from-file-modal"));
})], 0))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.py-4","div.py-4",1523486045),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.text-xl","strong.text-xl",-482279546),(""+"\uD83C\uDF89 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin.install-from-file","success","plugin.install-from-file/success",1513078116)], 0))))], null)], null))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins$plugins_from_file__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__39063 = cljs.core.first(args__31746__auto__);
var G__39064 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__39063,G__39064) : io.factorhouse.hsx.core.obj_get.call(null,G__39063,G__39064));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"plugins-from-file","plugins-from-file",1408812024,null),args__31746__auto__),frontend$components$plugins$plugins_from_file,args__31746__auto__,null);
}
};
var frontend$components$plugins$plugins_from_file = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__39926__i = 0, G__39926__a = new Array(arguments.length -  0);
while (G__39926__i < G__39926__a.length) {G__39926__a[G__39926__i] = arguments[G__39926__i + 0]; ++G__39926__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__39926__a,0,null);
} 
return frontend$components$plugins$plugins_from_file__delegate.call(this,args__31746__auto__);};
frontend$components$plugins$plugins_from_file.cljs$lang$maxFixedArity = 0;
frontend$components$plugins$plugins_from_file.cljs$lang$applyTo = (function (arglist__39927){
var args__31746__auto__ = cljs.core.seq(arglist__39927);
return frontend$components$plugins$plugins_from_file__delegate(args__31746__auto__);
});
frontend$components$plugins$plugins_from_file.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins$plugins_from_file__delegate;
return frontend$components$plugins$plugins_from_file;
})()
;
var memo_comp__31747__auto__ = (function (){var G__39065 = comp__31745__auto__;
var G__39066 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__39065,G__39066) : io.factorhouse.hsx.core.react_memo.call(null,G__39065,G__39066));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"plugins-from-file");

return comp__31745__auto__;
})();
frontend.components.plugins.open_select_theme_BANG_ = (function frontend$components$plugins$open_select_theme_BANG_(){
var G__39067 = frontend.components.plugins.installed_themes;
var G__39068 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"top","top",-1856271961)], null);
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2(G__39067,G__39068) : logseq.shui.ui.dialog_open_BANG_.call(null,G__39067,G__39068));
});
frontend.components.plugins.hook_ui_slot = (function (){var render_fn__31744__auto__ = (function() {
var frontend$components$plugins$hook_ui_slot = null;
var frontend$components$plugins$hook_ui_slot__2 = (function (type,payload){
return frontend$components$plugins$hook_ui_slot.cljs$core$IFn$_invoke$arity$4(type,payload,null,(function (p1__39069_SHARP_){
return frontend.handler.plugin.hook_plugin_app.cljs$core$IFn$_invoke$arity$3(type,p1__39069_SHARP_,null);
}));
});
var frontend$components$plugins$hook_ui_slot__4 = (function (type,payload,opts,callback){
var rs = frontend.util.rand_str((8));
var id = (""+"slot__"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rs));
var _STAR_el_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
logseq.shui.hooks.use_effect_BANG_((function (){
var timer = setTimeout((function (){
var G__39070 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"slot","slot",240229571),id,new cljs.core.Keyword(null,"payload","payload",-383036092),payload], null);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__39070) : callback.call(null,G__39070));
}),(50));
return (function (){
return clearTimeout(timer);
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var el = logseq.shui.hooks.deref(_STAR_el_ref);
return (function (){
var temp__5825__auto__ = cljs.core.seq(el.querySelectorAll("[data-injected-ui]"));
if(temp__5825__auto__){
var uis = temp__5825__auto__;
var seq__39071 = cljs.core.seq(uis);
var chunk__39072 = null;
var count__39073 = (0);
var i__39074 = (0);
while(true){
if((i__39074 < count__39073)){
var el__$1 = chunk__39072.cljs$core$IIndexed$_nth$arity$2(null,i__39074);
var temp__5825__auto___39939__$1 = el__$1.dataset.injectedUi;
if(cljs.core.truth_(temp__5825__auto___39939__$1)){
var id_39941__$1 = temp__5825__auto___39939__$1;
LSPluginCore._forceCleanInjectedUI(id_39941__$1);
} else {
}


var G__39943 = seq__39071;
var G__39944 = chunk__39072;
var G__39945 = count__39073;
var G__39946 = (i__39074 + (1));
seq__39071 = G__39943;
chunk__39072 = G__39944;
count__39073 = G__39945;
i__39074 = G__39946;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__39071);
if(temp__5825__auto____$1){
var seq__39071__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__39071__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__39071__$1);
var G__39947 = cljs.core.chunk_rest(seq__39071__$1);
var G__39948 = c__5673__auto__;
var G__39949 = cljs.core.count(c__5673__auto__);
var G__39950 = (0);
seq__39071 = G__39947;
chunk__39072 = G__39948;
count__39073 = G__39949;
i__39074 = G__39950;
continue;
} else {
var el__$1 = cljs.core.first(seq__39071__$1);
var temp__5825__auto___39951__$2 = el__$1.dataset.injectedUi;
if(cljs.core.truth_(temp__5825__auto___39951__$2)){
var id_39953__$1 = temp__5825__auto___39951__$2;
LSPluginCore._forceCleanInjectedUI(id_39953__$1);
} else {
}


var G__39955 = cljs.core.next(seq__39071__$1);
var G__39956 = null;
var G__39957 = (0);
var G__39958 = (0);
seq__39071 = G__39955;
chunk__39072 = G__39956;
count__39073 = G__39957;
i__39074 = G__39958;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.lsp-hook-ui-slot","div.lsp-hook-ui-slot",-271098783),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el_ref,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
return frontend.util.stop_propagation(e);
})], null)], 0))], null);
});
frontend$components$plugins$hook_ui_slot = function(type,payload,opts,callback){
switch(arguments.length){
case 2:
return frontend$components$plugins$hook_ui_slot__2.call(this,type,payload);
case 4:
return frontend$components$plugins$hook_ui_slot__4.call(this,type,payload,opts,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$components$plugins$hook_ui_slot.cljs$core$IFn$_invoke$arity$2 = frontend$components$plugins$hook_ui_slot__2;
frontend$components$plugins$hook_ui_slot.cljs$core$IFn$_invoke$arity$4 = frontend$components$plugins$hook_ui_slot__4;
return frontend$components$plugins$hook_ui_slot;
})()
;
var comp__31745__auto__ = (function() { 
var frontend$components$plugins$hook_ui_slot__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__39075 = cljs.core.first(args__31746__auto__);
var G__39076 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__39075,G__39076) : io.factorhouse.hsx.core.obj_get.call(null,G__39075,G__39076));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"hook-ui-slot","hook-ui-slot",-1257444517,null),args__31746__auto__),frontend$components$plugins$hook_ui_slot,args__31746__auto__,null);
}
};
var frontend$components$plugins$hook_ui_slot = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__39961__i = 0, G__39961__a = new Array(arguments.length -  0);
while (G__39961__i < G__39961__a.length) {G__39961__a[G__39961__i] = arguments[G__39961__i + 0]; ++G__39961__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__39961__a,0,null);
} 
return frontend$components$plugins$hook_ui_slot__delegate.call(this,args__31746__auto__);};
frontend$components$plugins$hook_ui_slot.cljs$lang$maxFixedArity = 0;
frontend$components$plugins$hook_ui_slot.cljs$lang$applyTo = (function (arglist__39962){
var args__31746__auto__ = cljs.core.seq(arglist__39962);
return frontend$components$plugins$hook_ui_slot__delegate(args__31746__auto__);
});
frontend$components$plugins$hook_ui_slot.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins$hook_ui_slot__delegate;
return frontend$components$plugins$hook_ui_slot;
})()
;
var memo_comp__31747__auto__ = (function (){var G__39077 = comp__31745__auto__;
var G__39078 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__39077,G__39078) : io.factorhouse.hsx.core.react_memo.call(null,G__39077,G__39078));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"hook-ui-slot");

return comp__31745__auto__;
})();
frontend.components.plugins.hook_block_slot = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins$hook_block_slot(type,block){
return frontend.components.plugins.hook_ui_slot(type,cljs.core.PersistentArrayMap.EMPTY,null,(function (p1__39079_SHARP_){
return frontend.handler.plugin.hook_plugin_block_slot(block,p1__39079_SHARP_);
}));
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins$hook_block_slot__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__39080 = cljs.core.first(args__31746__auto__);
var G__39081 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__39080,G__39081) : io.factorhouse.hsx.core.obj_get.call(null,G__39080,G__39081));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"hook-block-slot","hook-block-slot",-350779099,null),args__31746__auto__),frontend$components$plugins$hook_block_slot,args__31746__auto__,null);
}
};
var frontend$components$plugins$hook_block_slot = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__39974__i = 0, G__39974__a = new Array(arguments.length -  0);
while (G__39974__i < G__39974__a.length) {G__39974__a[G__39974__i] = arguments[G__39974__i + 0]; ++G__39974__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__39974__a,0,null);
} 
return frontend$components$plugins$hook_block_slot__delegate.call(this,args__31746__auto__);};
frontend$components$plugins$hook_block_slot.cljs$lang$maxFixedArity = 0;
frontend$components$plugins$hook_block_slot.cljs$lang$applyTo = (function (arglist__39975){
var args__31746__auto__ = cljs.core.seq(arglist__39975);
return frontend$components$plugins$hook_block_slot__delegate(args__31746__auto__);
});
frontend$components$plugins$hook_block_slot.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins$hook_block_slot__delegate;
return frontend$components$plugins$hook_block_slot;
})()
;
var memo_comp__31747__auto__ = (function (){var G__39082 = comp__31745__auto__;
var G__39083 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__39082,G__39083) : io.factorhouse.hsx.core.react_memo.call(null,G__39082,G__39083));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"hook-block-slot");

return comp__31745__auto__;
})();
frontend.components.plugins.ui_item_renderer = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins$ui_item_renderer(pid,type,p__39085){
var map__39086 = p__39085;
var map__39086__$1 = cljs.core.__destructure_map(map__39086);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39086__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var template = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39086__$1,new cljs.core.Keyword(null,"template","template",-702405684));
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39086__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var _STAR_el = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var uni = (function (p1__39084_SHARP_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+"injected-ui-item-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39084_SHARP_));
});
var pl = LSPluginCore.registeredPlugins.get(cljs.core.name(pid));
logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto__ = logseq.shui.hooks.deref(_STAR_el);
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
return LSPlugin.pluginHelpers.setupInjectedUI.call(pl,({"slot": el.id, "key": key, "template": template}),({}));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [template], null));

if((!((pl == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),uni((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(pid)))),new cljs.core.Keyword(null,"title","title",636505583),key,new cljs.core.Keyword(null,"class","class",-2030961996),uni(cljs.core.name(type)),new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null);
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins$ui_item_renderer__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__39087 = cljs.core.first(args__31746__auto__);
var G__39088 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__39087,G__39088) : io.factorhouse.hsx.core.obj_get.call(null,G__39087,G__39088));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"ui-item-renderer","ui-item-renderer",873458153,null),args__31746__auto__),frontend$components$plugins$ui_item_renderer,args__31746__auto__,null);
}
};
var frontend$components$plugins$ui_item_renderer = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__39986__i = 0, G__39986__a = new Array(arguments.length -  0);
while (G__39986__i < G__39986__a.length) {G__39986__a[G__39986__i] = arguments[G__39986__i + 0]; ++G__39986__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__39986__a,0,null);
} 
return frontend$components$plugins$ui_item_renderer__delegate.call(this,args__31746__auto__);};
frontend$components$plugins$ui_item_renderer.cljs$lang$maxFixedArity = 0;
frontend$components$plugins$ui_item_renderer.cljs$lang$applyTo = (function (arglist__39987){
var args__31746__auto__ = cljs.core.seq(arglist__39987);
return frontend$components$plugins$ui_item_renderer__delegate(args__31746__auto__);
});
frontend$components$plugins$ui_item_renderer.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins$ui_item_renderer__delegate;
return frontend$components$plugins$ui_item_renderer;
})()
;
var memo_comp__31747__auto__ = (function (){var G__39089 = comp__31745__auto__;
var G__39090 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__39089,G__39090) : io.factorhouse.hsx.core.react_memo.call(null,G__39089,G__39090));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"ui-item-renderer");

return comp__31745__auto__;
})();
frontend.components.plugins.toolbar_plugins_manager_list = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins$toolbar_plugins_manager_list(updates_coming,items){
var badge_updates_QMARK_ = ((cljs.core.not(frontend.handler.plugin.get_auto_checking_QMARK_())) && (cljs.core.seq(frontend.state.all_available_coming_updates.cljs$core$IFn$_invoke$arity$1(updates_coming))));
var items__$1 = (function (){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__5628__auto__ = (function frontend$components$plugins$toolbar_plugins_manager_list_$_iter__39091(s__39092){
return (new cljs.core.LazySeq(null,(function (){
var s__39092__$1 = s__39092;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__39092__$1);
if(temp__5825__auto__){
var s__39092__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39092__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__39092__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__39094 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__39093 = (0);
while(true){
if((i__39093 < size__5627__auto__)){
var vec__39095 = cljs.core._nth(c__5626__auto__,i__39093);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39095,(0),null);
var map__39098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39095,(1),null);
var map__39098__$1 = cljs.core.__destructure_map(map__39098);
var opts = map__39098__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39098__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var pinned_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39098__$1,new cljs.core.Keyword(null,"pinned?","pinned?",440024168));
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39095,(2),null);
var pkey = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(pid))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key));
cljs.core.chunk_append(b__39094,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),key,new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.item-wrap","div.flex.items-center.item-wrap",-1430672609),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.plugins.ui_item_renderer,pid,new cljs.core.Keyword(null,"toolbar","toolbar",-1172789065),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"pl-",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"key","key",-1516042587),(""+"pl-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key))], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"2px"], null)], null),key], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pin.flex.items-center.opacity-60","span.pin.flex.items-center.opacity-60",1509350049),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pinned","pinned",-1216085339),pinned_QMARK_], null)], null))], null),frontend.ui.icon((cljs.core.truth_(pinned_QMARK_)?"pinned":"pin"))], null)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__39093,pkey,vec__39095,_,map__39098,map__39098__$1,opts,key,pinned_QMARK_,pid,c__5626__auto__,size__5627__auto__,b__39094,s__39092__$2,temp__5825__auto__,badge_updates_QMARK_){
return (function (e){
var target = e.target;
var user_btn_QMARK_ = cljs.core.boolean$(target.closest("div[data-injected-ui]"));
if(user_btn_QMARK_){
} else {
frontend.handler.plugin.op_pinned_toolbar_item_BANG_(pkey,(cljs.core.truth_(pinned_QMARK_)?new cljs.core.Keyword(null,"remove","remove",-131428414):new cljs.core.Keyword(null,"add","add",235287739)));
}

return true;
});})(i__39093,pkey,vec__39095,_,map__39098,map__39098__$1,opts,key,pinned_QMARK_,pid,c__5626__auto__,size__5627__auto__,b__39094,s__39092__$2,temp__5825__auto__,badge_updates_QMARK_))
], null)], null));

var G__39996 = (i__39093 + (1));
i__39093 = G__39996;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39094),frontend$components$plugins$toolbar_plugins_manager_list_$_iter__39091(cljs.core.chunk_rest(s__39092__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39094),null);
}
} else {
var vec__39099 = cljs.core.first(s__39092__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39099,(0),null);
var map__39102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39099,(1),null);
var map__39102__$1 = cljs.core.__destructure_map(map__39102);
var opts = map__39102__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39102__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var pinned_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39102__$1,new cljs.core.Keyword(null,"pinned?","pinned?",440024168));
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39099,(2),null);
var pkey = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(pid))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key));
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),key,new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.item-wrap","div.flex.items-center.item-wrap",-1430672609),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.plugins.ui_item_renderer,pid,new cljs.core.Keyword(null,"toolbar","toolbar",-1172789065),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"pl-",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"key","key",-1516042587),(""+"pl-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key))], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"2px"], null)], null),key], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pin.flex.items-center.opacity-60","span.pin.flex.items-center.opacity-60",1509350049),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pinned","pinned",-1216085339),pinned_QMARK_], null)], null))], null),frontend.ui.icon((cljs.core.truth_(pinned_QMARK_)?"pinned":"pin"))], null)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (pkey,vec__39099,_,map__39102,map__39102__$1,opts,key,pinned_QMARK_,pid,s__39092__$2,temp__5825__auto__,badge_updates_QMARK_){
return (function (e){
var target = e.target;
var user_btn_QMARK_ = cljs.core.boolean$(target.closest("div[data-injected-ui]"));
if(user_btn_QMARK_){
} else {
frontend.handler.plugin.op_pinned_toolbar_item_BANG_(pkey,(cljs.core.truth_(pinned_QMARK_)?new cljs.core.Keyword(null,"remove","remove",-131428414):new cljs.core.Keyword(null,"add","add",235287739)));
}

return true;
});})(pkey,vec__39099,_,map__39102,map__39102__$1,opts,key,pinned_QMARK_,pid,s__39092__$2,temp__5825__auto__,badge_updates_QMARK_))
], null)], null),frontend$components$plugins$toolbar_plugins_manager_list_$_iter__39091(cljs.core.rest(s__39092__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(items);
})(),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hr","hr",1377740067),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nav","plugins","nav/plugins",1900047380)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.plugin.goto_plugins_dashboard_BANG_();
}),new cljs.core.Keyword(null,"class","class",-2030961996),"extra-item mt-2"], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon("apps")], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nav","themes","nav/themes",-702686063)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.plugin.show_themes_modal_BANG_.cljs$core$IFn$_invoke$arity$0();
}),new cljs.core.Keyword(null,"class","class",-2030961996),"extra-item"], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon("palette")], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nav","settings","nav/settings",1557080534)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.plugin.goto_plugins_settings_BANG_();
}),new cljs.core.Keyword(null,"class","class",-2030961996),"extra-item"], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon("adjustments")], null),((badge_updates_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.space-x-5.leading-none","div.flex.items-center.space-x-5.leading-none",1217724633),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","found-updates","plugin/found-updates",1914242130)], 0))], null),frontend.ui.point("bg-red-700",(5),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(2)], null)], null))], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (frontend.components.plugins.open_waiting_updates_modal_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.components.plugins.open_waiting_updates_modal_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.components.plugins.open_waiting_updates_modal_BANG_.call(null));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"extra-item"], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon("download")], null):null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hr","hr",1377740067),true,new cljs.core.Keyword(null,"key","key",-1516042587),"dropdown-more"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.plugins.auto_check_for_updates_control], null)], null)], null)], 0)));
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toolbar-plugins-manager.flex.items-center","div.toolbar-plugins-manager.flex.items-center",388653008),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var G__39111 = e.target;
var G__39112 = (function (p__39114){
var map__39115 = p__39114;
var map__39115__$1 = cljs.core.__destructure_map(map__39115);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39115__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return frontend.components.plugins.render_classic_dropdown_items(id,items__$1());
});
var G__39113 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-dropdown?","as-dropdown?",-37553558),true,new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"toolbar-plugins-manager-content"], null)], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__39111,G__39112,G__39113) : logseq.shui.ui.popup_show_BANG_.call(null,G__39111,G__39112,G__39113));
})], null),logseq.shui.ui.button_ghost_icon(new cljs.core.Keyword(null,"puzzle","puzzle",-825926240),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex relative toolbar-plugins-manager-trigger"], null),((badge_updates_QMARK_)?frontend.ui.point("bg-red-600.top-1.right-1.absolute",(4),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(2),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(2)], null)], null)):null))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins$toolbar_plugins_manager_list__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__39116 = cljs.core.first(args__31746__auto__);
var G__39117 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__39116,G__39117) : io.factorhouse.hsx.core.obj_get.call(null,G__39116,G__39117));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"toolbar-plugins-manager-list","toolbar-plugins-manager-list",1450105817,null),args__31746__auto__),frontend$components$plugins$toolbar_plugins_manager_list,args__31746__auto__,null);
}
};
var frontend$components$plugins$toolbar_plugins_manager_list = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__40017__i = 0, G__40017__a = new Array(arguments.length -  0);
while (G__40017__i < G__40017__a.length) {G__40017__a[G__40017__i] = arguments[G__40017__i + 0]; ++G__40017__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__40017__a,0,null);
} 
return frontend$components$plugins$toolbar_plugins_manager_list__delegate.call(this,args__31746__auto__);};
frontend$components$plugins$toolbar_plugins_manager_list.cljs$lang$maxFixedArity = 0;
frontend$components$plugins$toolbar_plugins_manager_list.cljs$lang$applyTo = (function (arglist__40019){
var args__31746__auto__ = cljs.core.seq(arglist__40019);
return frontend$components$plugins$toolbar_plugins_manager_list__delegate(args__31746__auto__);
});
frontend$components$plugins$toolbar_plugins_manager_list.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins$toolbar_plugins_manager_list__delegate;
return frontend$components$plugins$toolbar_plugins_manager_list;
})()
;
var memo_comp__31747__auto__ = (function (){var G__39118 = comp__31745__auto__;
var G__39119 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__39118,G__39119) : io.factorhouse.hsx.core.react_memo.call(null,G__39118,G__39119));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"toolbar-plugins-manager-list");

return comp__31745__auto__;
})();
frontend.components.plugins.header_ui_items_list_wrap = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins$header_ui_items_list_wrap(children){
var _STAR_wrap_el = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.list-wrap","div.list-wrap",-1441276241),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_wrap_el], null),children], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins$header_ui_items_list_wrap__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__39120 = cljs.core.first(args__31746__auto__);
var G__39121 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__39120,G__39121) : io.factorhouse.hsx.core.obj_get.call(null,G__39120,G__39121));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"header-ui-items-list-wrap","header-ui-items-list-wrap",1958670244,null),args__31746__auto__),frontend$components$plugins$header_ui_items_list_wrap,args__31746__auto__,null);
}
};
var frontend$components$plugins$header_ui_items_list_wrap = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__40027__i = 0, G__40027__a = new Array(arguments.length -  0);
while (G__40027__i < G__40027__a.length) {G__40027__a[G__40027__i] = arguments[G__40027__i + 0]; ++G__40027__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__40027__a,0,null);
} 
return frontend$components$plugins$header_ui_items_list_wrap__delegate.call(this,args__31746__auto__);};
frontend$components$plugins$header_ui_items_list_wrap.cljs$lang$maxFixedArity = 0;
frontend$components$plugins$header_ui_items_list_wrap.cljs$lang$applyTo = (function (arglist__40028){
var args__31746__auto__ = cljs.core.seq(arglist__40028);
return frontend$components$plugins$header_ui_items_list_wrap__delegate(args__31746__auto__);
});
frontend$components$plugins$header_ui_items_list_wrap.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins$header_ui_items_list_wrap__delegate;
return frontend$components$plugins$header_ui_items_list_wrap;
})()
;
var memo_comp__31747__auto__ = (function (){var G__39124 = comp__31745__auto__;
var G__39125 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__39124,G__39125) : io.factorhouse.hsx.core.react_memo.call(null,G__39124,G__39125));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"header-ui-items-list-wrap");

return comp__31745__auto__;
})();
/**
 * type of :toolbar, :pagebar
 */
frontend.components.plugins.hook_ui_items = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins$hook_ui_items(type){
var installed_ui_items = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-ui-items","plugin/installed-ui-items",1418448868)], null));
var pinned_items = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","preferences","plugin/preferences",668527388),new cljs.core.Keyword(null,"pinnedToolbarItems","pinnedToolbarItems",889309943)], null));
var updates_coming = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","updates-coming","plugin/updates-coming",104160263)], null));
var toolbar_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toolbar","toolbar",-1172789065),type);
var pinned_items__$1 = (function (){var and__5140__auto__ = cljs.core.sequential_QMARK_(pinned_items);
if(and__5140__auto__){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,pinned_items);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(installed_ui_items)){
var items = frontend.state.get_plugins_ui_items_with_type(type);
var items__$1 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__39128_SHARP_){
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__39128_SHARP_));
}),items);
var temp__5825__auto__ = (function (){var and__5140__auto__ = cljs.core.seq(items__$1);
if(and__5140__auto__){
if(toolbar_QMARK_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39129_SHARP_){
return cljs.core.assoc_in(p1__39129_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"pinned?","pinned?",440024168)], null),(function (){var vec__39136 = p1__39129_SHARP_;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39136,(0),null);
var map__39139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39136,(1),null);
var map__39139__$1 = cljs.core.__destructure_map(map__39139);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39139__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39136,(2),null);
var pkey = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(pid))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key));
return cljs.core.contains_QMARK_(pinned_items__$1,pkey);
})());
}),items__$1);
} else {
return items__$1;
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var items__$2 = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui-items-container","div.ui-items-container",1212408615),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-type","data-type",-326421468),cljs.core.name(type)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.plugins.header_ui_items_list_wrap,(function (){var iter__5628__auto__ = (function frontend$components$plugins$hook_ui_items_$_iter__39144(s__39145){
return (new cljs.core.LazySeq(null,(function (){
var s__39145__$1 = s__39145;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__39145__$1);
if(temp__5825__auto____$1){
var s__39145__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39145__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__39145__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__39147 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__39146 = (0);
while(true){
if((i__39146 < size__5627__auto__)){
var vec__39149 = cljs.core._nth(c__5626__auto__,i__39146);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39149,(0),null);
var map__39152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39149,(1),null);
var map__39152__$1 = cljs.core.__destructure_map(map__39152);
var opts = map__39152__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39152__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var pinned_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39152__$1,new cljs.core.Keyword(null,"pinned?","pinned?",440024168));
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39149,(2),null);
cljs.core.chunk_append(b__39147,(cljs.core.truth_((function (){var or__5142__auto__ = (!(toolbar_QMARK_));
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (!(cljs.core.set_QMARK_(pinned_items__$1)));
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
return pinned_QMARK_;
}
}
})())?cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.plugins.ui_item_renderer,pid,type,opts], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)):null));

var G__40031 = (i__39146 + (1));
i__39146 = G__40031;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39147),frontend$components$plugins$hook_ui_items_$_iter__39144(cljs.core.chunk_rest(s__39145__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39147),null);
}
} else {
var vec__39162 = cljs.core.first(s__39145__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39162,(0),null);
var map__39165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39162,(1),null);
var map__39165__$1 = cljs.core.__destructure_map(map__39165);
var opts = map__39165__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39165__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var pinned_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39165__$1,new cljs.core.Keyword(null,"pinned?","pinned?",440024168));
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39162,(2),null);
return cljs.core.cons((cljs.core.truth_((function (){var or__5142__auto__ = (!(toolbar_QMARK_));
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (!(cljs.core.set_QMARK_(pinned_items__$1)));
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
return pinned_QMARK_;
}
}
})())?cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.plugins.ui_item_renderer,pid,type,opts], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)):null),frontend$components$plugins$hook_ui_items_$_iter__39144(cljs.core.rest(s__39145__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(items__$2);
})()], null),((toolbar_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.plugins.toolbar_plugins_manager_list,updates_coming,items__$2], null):null)], null)], null);
} else {
return null;
}
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins$hook_ui_items__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__39172 = cljs.core.first(args__31746__auto__);
var G__39173 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__39172,G__39173) : io.factorhouse.hsx.core.obj_get.call(null,G__39172,G__39173));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"hook-ui-items","hook-ui-items",1282678241,null),args__31746__auto__),frontend$components$plugins$hook_ui_items,args__31746__auto__,null);
}
};
var frontend$components$plugins$hook_ui_items = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__40034__i = 0, G__40034__a = new Array(arguments.length -  0);
while (G__40034__i < G__40034__a.length) {G__40034__a[G__40034__i] = arguments[G__40034__i + 0]; ++G__40034__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__40034__a,0,null);
} 
return frontend$components$plugins$hook_ui_items__delegate.call(this,args__31746__auto__);};
frontend$components$plugins$hook_ui_items.cljs$lang$maxFixedArity = 0;
frontend$components$plugins$hook_ui_items.cljs$lang$applyTo = (function (arglist__40035){
var args__31746__auto__ = cljs.core.seq(arglist__40035);
return frontend$components$plugins$hook_ui_items__delegate(args__31746__auto__);
});
frontend$components$plugins$hook_ui_items.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins$hook_ui_items__delegate;
return frontend$components$plugins$hook_ui_items;
})()
;
var memo_comp__31747__auto__ = (function (){var G__39180 = comp__31745__auto__;
var G__39181 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__39180,G__39181) : io.factorhouse.hsx.core.react_memo.call(null,G__39180,G__39181));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"hook-ui-items");

return comp__31745__auto__;
})();
frontend.components.plugins.hook_ui_fenced_code = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins$hook_ui_fenced_code(block,content,p__39196){
var map__39198 = p__39196;
var map__39198__$1 = cljs.core.__destructure_map(map__39198);
var _opts = map__39198__$1;
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39198__$1,new cljs.core.Keyword(null,"render","render",-1408033454));
var edit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39198__$1,new cljs.core.Keyword(null,"edit","edit",-1641834166));
var vec__39199 = logseq.shui.hooks.use_state(content);
var content1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39199,(0),null);
var set_content1_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39199,(1),null);
var vec__39202 = logseq.shui.hooks.use_state(clojure.string.blank_QMARK_(content));
var editor_active_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39202,(0),null);
var set_editor_active_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39202,(1),null);
var _STAR_cm = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var _STAR_el = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
logseq.shui.hooks.use_effect_BANG_((function (){
return (set_content1_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_content1_BANG_.cljs$core$IFn$_invoke$arity$1(content) : set_content1_BANG_.call(null,content));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var G__39206_40036 = logseq.shui.hooks.deref(_STAR_el);
var G__39206_40037__$1 = (((G__39206_40036 == null))?null:G__39206_40036.closest(".ui-fenced-code-wrap"));
var G__39206_40038__$2 = (((G__39206_40037__$1 == null))?null:G__39206_40037__$1.classList);
if((G__39206_40038__$2 == null)){
} else {
(function (p1__39186_SHARP_){
if(cljs.core.truth_(editor_active_QMARK_)){
return p1__39186_SHARP_.add("is-active");
} else {
return p1__39186_SHARP_.remove("is-active");
}
})(G__39206_40038__$2);
}

var temp__5825__auto__ = logseq.shui.hooks.deref(_STAR_cm);
if(cljs.core.truth_(temp__5825__auto__)){
var cm = temp__5825__auto__;
cm.refresh();

cm.focus();

return cm.setCursor(cm.lineCount(),cljs.core.count(cm.getLine(cm.lastLine())));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [editor_active_QMARK_], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var t = setTimeout((function (){
var el = logseq.shui.hooks.deref(_STAR_el);
var wrapper = (cljs.core.truth_(el)?el.closest(".ui-fenced-code-wrap"):null);
var cm_element = (cljs.core.truth_(wrapper)?wrapper.querySelector(".CodeMirror"):null);
var cm = (cljs.core.truth_(cm_element)?cm_element.CodeMirror:null);
if(cljs.core.truth_(cm)){
logseq.shui.hooks.set_ref_BANG_(_STAR_cm,cm);

return cm.on("change",(function (){
var G__39207 = cm;
var G__39207__$1 = (((G__39207 == null))?null:G__39207.getDoc());
var G__39207__$2 = (((G__39207__$1 == null))?null:G__39207__$1.getValue());
if((G__39207__$2 == null)){
return null;
} else {
return (set_content1_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_content1_BANG_.cljs$core$IFn$_invoke$arity$1(G__39207__$2) : set_content1_BANG_.call(null,G__39207__$2));
}
}));
} else {
return null;
}
}),(1000));
return (function (){
return clearTimeout(t);
});
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui-fenced-code-result","div.ui-fenced-code-result",-1131840745),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
if(edit === false){
return frontend.util.stop(e);
} else {
return null;
}
}),new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"not-edit","not-edit",-1875881710),edit === false], null)], null)),new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.actions","span.actions",790723433),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (p1__39190_SHARP_){
return frontend.util.stop(p1__39190_SHARP_);
})], null),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.ui.icon("square-toggle-horizontal",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__39210 = cljs.core.not(editor_active_QMARK_);
return (set_editor_active_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_editor_active_BANG_.cljs$core$IFn$_invoke$arity$1(G__39210) : set_editor_active_BANG_.call(null,G__39210));
})], 0)),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.ui.icon("source-code",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__39213 = block;
var G__39214 = cljs.core.count(content1);
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$2(G__39213,G__39214) : frontend.handler.editor.edit_block_BANG_.call(null,G__39213,G__39214));
})], 0))], null),((cljs.core.fn_QMARK_(render))?module$node_modules$react$index.createElement(render,({"content": content1})):null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins$hook_ui_fenced_code__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__39219 = cljs.core.first(args__31746__auto__);
var G__39220 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__39219,G__39220) : io.factorhouse.hsx.core.obj_get.call(null,G__39219,G__39220));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"hook-ui-fenced-code","hook-ui-fenced-code",441175690,null),args__31746__auto__),frontend$components$plugins$hook_ui_fenced_code,args__31746__auto__,null);
}
};
var frontend$components$plugins$hook_ui_fenced_code = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__40049__i = 0, G__40049__a = new Array(arguments.length -  0);
while (G__40049__i < G__40049__a.length) {G__40049__a[G__40049__i] = arguments[G__40049__i + 0]; ++G__40049__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__40049__a,0,null);
} 
return frontend$components$plugins$hook_ui_fenced_code__delegate.call(this,args__31746__auto__);};
frontend$components$plugins$hook_ui_fenced_code.cljs$lang$maxFixedArity = 0;
frontend$components$plugins$hook_ui_fenced_code.cljs$lang$applyTo = (function (arglist__40050){
var args__31746__auto__ = cljs.core.seq(arglist__40050);
return frontend$components$plugins$hook_ui_fenced_code__delegate(args__31746__auto__);
});
frontend$components$plugins$hook_ui_fenced_code.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins$hook_ui_fenced_code__delegate;
return frontend$components$plugins$hook_ui_fenced_code;
})()
;
var memo_comp__31747__auto__ = (function (){var G__39221 = comp__31745__auto__;
var G__39222 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__39221,G__39222) : io.factorhouse.hsx.core.react_memo.call(null,G__39221,G__39222));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"hook-ui-fenced-code");

return comp__31745__auto__;
})();
frontend.components.plugins.plugins_page = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins$plugins_page(){
var vec__39227 = logseq.shui.hooks.use_state(new cljs.core.Keyword(null,"installed","installed",553977691));
var active = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39227,(0),null);
var set_active_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39227,(1),null);
var market_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active,new cljs.core.Keyword(null,"marketplace","marketplace",236355452));
var _STAR_el_ref = (logseq.shui.hooks.create_ref.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.hooks.create_ref.cljs$core$IFn$_invoke$arity$0() : logseq.shui.hooks.create_ref.call(null));
logseq.shui.hooks.use_effect_BANG_((function (){
frontend.state.load_app_user_cfgs.cljs$core$IFn$_invoke$arity$0();

return (function (){
return frontend.components.plugins.clear_dirties_states_BANG_();
});
}),cljs.core.PersistentVector.EMPTY);

logseq.shui.hooks.use_effect_BANG_((function (){
return frontend.components.plugins.clear_dirties_states_BANG_();
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [market_QMARK_], null));

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__plugins-page","div.cp__plugins-page",1332576660),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el_ref,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(frontend.util.electron_QMARK_())?null:"web-platform"),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),"-1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nav","plugins","nav/plugins",1900047380)], 0))], null),(cljs.core.truth_(frontend.util.electron_QMARK_())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),frontend.components.plugins.security_warning(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.my-4","hr.my-4",-1603464789)], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tabs.flex.items-center.justify-center","div.tabs.flex.items-center.justify-center",-1237071419),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tabs-inner.flex.items-center","div.tabs-inner.flex.items-center",1182173815),(function (){var G__39234 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (set_active_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"installed","installed",553977691)) : set_active_BANG_.call(null,new cljs.core.Keyword(null,"installed","installed",553977691)));
}),new cljs.core.Keyword(null,"class","class",-2030961996),(((!(market_QMARK_)))?"active":null),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"text","text",-1790561697)], null);
var G__39235 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","installed","plugin/installed",-431253936)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__39234,G__39235) : logseq.shui.ui.button.call(null,G__39234,G__39235));
})(),(function (){var G__39239 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (set_active_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"marketplace","marketplace",236355452)) : set_active_BANG_.call(null,new cljs.core.Keyword(null,"marketplace","marketplace",236355452)));
}),new cljs.core.Keyword(null,"class","class",-2030961996),((market_QMARK_)?"active":null),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"text","text",-1790561697)], null);
var G__39240 = logseq.shui.ui.tabler_icon("apps");
var G__39241 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","marketplace","plugin/marketplace",-1095225687)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__39239,G__39240,G__39241) : logseq.shui.ui.button.call(null,G__39239,G__39240,G__39241));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panels","div.panels",725606784),((market_QMARK_)?frontend.components.plugins.marketplace_plugins():frontend.components.plugins.installed_plugins())], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins$plugins_page__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__39249 = cljs.core.first(args__31746__auto__);
var G__39250 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__39249,G__39250) : io.factorhouse.hsx.core.obj_get.call(null,G__39249,G__39250));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"plugins-page","plugins-page",2018931286,null),args__31746__auto__),frontend$components$plugins$plugins_page,args__31746__auto__,null);
}
};
var frontend$components$plugins$plugins_page = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__40057__i = 0, G__40057__a = new Array(arguments.length -  0);
while (G__40057__i < G__40057__a.length) {G__40057__a[G__40057__i] = arguments[G__40057__i + 0]; ++G__40057__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__40057__a,0,null);
} 
return frontend$components$plugins$plugins_page__delegate.call(this,args__31746__auto__);};
frontend$components$plugins$plugins_page.cljs$lang$maxFixedArity = 0;
frontend$components$plugins$plugins_page.cljs$lang$applyTo = (function (arglist__40058){
var args__31746__auto__ = cljs.core.seq(arglist__40058);
return frontend$components$plugins$plugins_page__delegate(args__31746__auto__);
});
frontend$components$plugins$plugins_page.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins$plugins_page__delegate;
return frontend$components$plugins$plugins_page;
})()
;
var memo_comp__31747__auto__ = (function (){var G__39252 = comp__31745__auto__;
var G__39253 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__39252,G__39253) : io.factorhouse.hsx.core.react_memo.call(null,G__39252,G__39253));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"plugins-page");

return comp__31745__auto__;
})();
frontend.components.plugins._STAR_updates_sub_content_timer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
frontend.components.plugins._STAR_updates_sub_content = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
frontend.components.plugins.set_updates_sub_content_BANG_ = (function frontend$components$plugins$set_updates_sub_content_BANG_(content,duration){
cljs.core.reset_BANG_(frontend.components.plugins._STAR_updates_sub_content,content);

if((duration > (0))){
var G__39254_40060 = cljs.core.deref(frontend.components.plugins._STAR_updates_sub_content_timer);
if((G__39254_40060 == null)){
} else {
clearTimeout(G__39254_40060);
}

return cljs.core.reset_BANG_(frontend.components.plugins._STAR_updates_sub_content_timer,setTimeout((function (){
return cljs.core.reset_BANG_(frontend.components.plugins._STAR_updates_sub_content,null);
}),duration));
} else {
return null;
}
});
frontend.components.plugins.updates_notifications_impl = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins$updates_notifications_impl(check_pending_QMARK_,auto_checking_QMARK_,online_QMARK_){
var vec__39263 = logseq.shui.hooks.use_state(null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39263,(0),null);
var set_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39263,(1),null);
var vec__39266 = logseq.shui.hooks.use_state(false);
var cleanup_warning_pending_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39266,(0),null);
var set_cleanup_warning_pending_QMARK__BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39266,(1),null);
var vec__39269 = logseq.shui.hooks.use_atom(frontend.components.plugins._STAR_updates_sub_content);
var sub_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39269,(0),null);
var _set_sub_content_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39269,(1),null);
var notify_BANG_ = (function (content,status){
if(cljs.core.truth_(auto_checking_QMARK_)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","list-of-updates","plugin/list-of-updates",1463733048)], 0)),content], 0));
} else {
var cb = (function (){
return frontend.handler.plugin.cancel_user_checking_BANG_();
});
try{var G__39278 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$6(content,status,false,uid,null,cb);
return (set_uid.cljs$core$IFn$_invoke$arity$1 ? set_uid.cljs$core$IFn$_invoke$arity$1(G__39278) : set_uid.call(null,G__39278));
}catch (e39276){if((e39276 instanceof Error)){
var _ = e39276;
var G__39277 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$6(content,status,false,null,null,cb);
return (set_uid.cljs$core$IFn$_invoke$arity$1 ? set_uid.cljs$core$IFn$_invoke$arity$1(G__39277) : set_uid.call(null,G__39277));
} else {
throw e39276;

}
}}
});
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(check_pending_QMARK_)){
return notify_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","checking-for-updates","plugin/checking-for-updates",1789948483)], 0))], null),(cljs.core.truth_(sub_content)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.opacity-60","p.opacity-60",441728988),sub_content], null):null)], null),new cljs.core.Keyword(null,"info","info",-317069002));
} else {
if(cljs.core.truth_(uid)){
return frontend.handler.notification.clear_BANG_(uid);
} else {
return null;
}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [check_pending_QMARK_,sub_content], null));

logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_((function (){var and__5140__auto__ = cleanup_warning_pending_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(auto_checking_QMARK_);
} else {
return and__5140__auto__;
}
})())){
(set_cleanup_warning_pending_QMARK__BANG_.cljs$core$IFn$_invoke$arity$1 ? set_cleanup_warning_pending_QMARK__BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_cleanup_warning_pending_QMARK__BANG_.call(null,false));

return frontend.components.plugins.show_disabled_plugins_cleanup_warning_BANG_();
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cleanup_warning_pending_QMARK_,auto_checking_QMARK_], null));

logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(online_QMARK_)){
var auto_update_delay = (cljs.core.truth_(frontend.util.electron_QMARK_())?(3000):((60) * (1000)));
var last_updates = frontend.storage.get(new cljs.core.Keyword(null,"lsp-last-auto-updates","lsp-last-auto-updates",1901307330));
var should_auto_update_QMARK_ = (((!(last_updates === false))) && (((last_updates === true) || ((((!(typeof last_updates === 'number'))) || (((Date.now() - last_updates) > ((((60) * (60)) * (12)) * (1000)))))))));
var cleanup_warning_timer = ((should_auto_update_QMARK_)?null:setTimeout((function (){
return (set_cleanup_warning_pending_QMARK__BANG_.cljs$core$IFn$_invoke$arity$1 ? set_cleanup_warning_pending_QMARK__BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_cleanup_warning_pending_QMARK__BANG_.call(null,true));
}),(auto_update_delay + (1000))));
var update_timer = ((should_auto_update_QMARK_)?setTimeout((function (){
frontend.handler.plugin.auto_check_enabled_for_updates_BANG_();

frontend.storage.set(new cljs.core.Keyword(null,"lsp-last-auto-updates","lsp-last-auto-updates",1901307330),Date.now());

return (set_cleanup_warning_pending_QMARK__BANG_.cljs$core$IFn$_invoke$arity$1 ? set_cleanup_warning_pending_QMARK__BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_cleanup_warning_pending_QMARK__BANG_.call(null,true));
}),auto_update_delay):null);
return (function (){
var G__39287_40069 = update_timer;
if((G__39287_40069 == null)){
} else {
clearTimeout(G__39287_40069);
}

var G__39288 = cleanup_warning_timer;
if((G__39288 == null)){
return null;
} else {
return clearTimeout(G__39288);
}
});
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [online_QMARK_], null));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins$updates_notifications_impl__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__39291 = cljs.core.first(args__31746__auto__);
var G__39292 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__39291,G__39292) : io.factorhouse.hsx.core.obj_get.call(null,G__39291,G__39292));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"updates-notifications-impl","updates-notifications-impl",821721791,null),args__31746__auto__),frontend$components$plugins$updates_notifications_impl,args__31746__auto__,null);
}
};
var frontend$components$plugins$updates_notifications_impl = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__40070__i = 0, G__40070__a = new Array(arguments.length -  0);
while (G__40070__i < G__40070__a.length) {G__40070__a[G__40070__i] = arguments[G__40070__i + 0]; ++G__40070__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__40070__a,0,null);
} 
return frontend$components$plugins$updates_notifications_impl__delegate.call(this,args__31746__auto__);};
frontend$components$plugins$updates_notifications_impl.cljs$lang$maxFixedArity = 0;
frontend$components$plugins$updates_notifications_impl.cljs$lang$applyTo = (function (arglist__40071){
var args__31746__auto__ = cljs.core.seq(arglist__40071);
return frontend$components$plugins$updates_notifications_impl__delegate(args__31746__auto__);
});
frontend$components$plugins$updates_notifications_impl.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins$updates_notifications_impl__delegate;
return frontend$components$plugins$updates_notifications_impl;
})()
;
var memo_comp__31747__auto__ = (function (){var G__39294 = comp__31745__auto__;
var G__39295 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__39294,G__39295) : io.factorhouse.hsx.core.react_memo.call(null,G__39294,G__39295));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"updates-notifications-impl");

return comp__31745__auto__;
})();
frontend.components.plugins.updates_notifications = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins$updates_notifications(){
var updates_pending = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","updates-pending","plugin/updates-pending",-1190878256)], null));
var online_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("network","online?","network/online?",1306822774)], null));
var auto_checking_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","updates-auto-checking?","plugin/updates-auto-checking?",1617323181)], null));
var check_pending_QMARK_ = cljs.core.boolean$(cljs.core.seq(updates_pending));
return frontend.components.plugins.updates_notifications_impl(check_pending_QMARK_,auto_checking_QMARK_,online_QMARK_);
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins$updates_notifications__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__39301 = cljs.core.first(args__31746__auto__);
var G__39302 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__39301,G__39302) : io.factorhouse.hsx.core.obj_get.call(null,G__39301,G__39302));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"updates-notifications","updates-notifications",-624047918,null),args__31746__auto__),frontend$components$plugins$updates_notifications,args__31746__auto__,null);
}
};
var frontend$components$plugins$updates_notifications = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__40075__i = 0, G__40075__a = new Array(arguments.length -  0);
while (G__40075__i < G__40075__a.length) {G__40075__a[G__40075__i] = arguments[G__40075__i + 0]; ++G__40075__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__40075__a,0,null);
} 
return frontend$components$plugins$updates_notifications__delegate.call(this,args__31746__auto__);};
frontend$components$plugins$updates_notifications.cljs$lang$maxFixedArity = 0;
frontend$components$plugins$updates_notifications.cljs$lang$applyTo = (function (arglist__40076){
var args__31746__auto__ = cljs.core.seq(arglist__40076);
return frontend$components$plugins$updates_notifications__delegate(args__31746__auto__);
});
frontend$components$plugins$updates_notifications.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins$updates_notifications__delegate;
return frontend$components$plugins$updates_notifications;
})()
;
var memo_comp__31747__auto__ = (function (){var G__39303 = comp__31745__auto__;
var G__39304 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__39303,G__39304) : io.factorhouse.hsx.core.react_memo.call(null,G__39303,G__39304));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"updates-notifications");

return comp__31745__auto__;
})();
frontend.components.plugins.focused_settings_content = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins$focused_settings_content(title){
var focused = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","focused-settings","plugin/focused-settings",-1699334137)], null));
var vec__39322 = logseq.shui.hooks.use_state(focused);
var cache = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39322,(0),null);
var set_cache_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39322,(1),null);
var nav_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","navs-settings?","plugin/navs-settings?",-615901808)], null));
var _ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034)], null));
logseq.shui.hooks.use_effect_BANG_((function (){
var timeout_id = setTimeout((function (){
return (set_cache_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_cache_BANG_.cljs$core$IFn$_invoke$arity$1(focused) : set_cache_BANG_.call(null,focused));
}),(100));
return (function (){
return clearTimeout(timeout_id);
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [focused], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__plugins-settings.cp__settings-main","div.cp__plugins-settings.cp__settings-main",-978192810),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__settings-inner.md:flex","div.cp__settings-inner.md:flex",1222838262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-aside","no-aside",71744870),cljs.core.not(nav_QMARK_)], null)], null))], null),(cljs.core.truth_(nav_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aside.md:w-64","aside.md:w-64",2090651679),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"10rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.cp__settings-header","header.cp__settings-header",670359284),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.cp__settings-modal-title","h1.cp__settings-modal-title",1823855901),(function (){var or__5142__auto__ = title;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin.settings","title","plugin.settings/title",2094720621)], 0));
}
})()], null)], null),(function (){var plugins = frontend.handler.plugin.get_enabled_plugins_if_setting_schema();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.settings-plugin-list","ul.settings-plugin-list",462656209),(function (){var iter__5628__auto__ = (function frontend$components$plugins$focused_settings_content_$_iter__39328(s__39329){
return (new cljs.core.LazySeq(null,(function (){
var s__39329__$1 = s__39329;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__39329__$1);
if(temp__5825__auto__){
var s__39329__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39329__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__39329__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__39331 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__39330 = (0);
while(true){
if((i__39330 < size__5627__auto__)){
var map__39334 = cljs.core._nth(c__5626__auto__,i__39330);
var map__39334__$1 = cljs.core.__destructure_map(map__39334);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39334__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39334__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39334__$1,new cljs.core.Keyword(null,"title","title",636505583));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39334__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
cljs.core.chunk_append(b__39331,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,focused)], null)], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.items-center.settings-plugin-item","a.flex.items-center.settings-plugin-item",256810883),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-id","data-id",1023855591),id,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__39330,map__39334,map__39334__$1,id,name,title__$1,icon,c__5626__auto__,size__5627__auto__,b__39331,s__39329__$2,temp__5825__auto__,plugins,focused,vec__39322,cache,set_cache_BANG_,nav_QMARK_,_){
return (function (){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","focused-settings","plugin/focused-settings",-1699334137),id);
});})(i__39330,map__39334,map__39334__$1,id,name,title__$1,icon,c__5626__auto__,size__5627__auto__,b__39331,s__39329__$2,temp__5825__auto__,plugins,focused,vec__39322,cache,set_cache_BANG_,nav_QMARK_,_))
], null),(cljs.core.truth_((function (){var and__5140__auto__ = icon;
if(cljs.core.truth_(and__5140__auto__)){
return (!(clojure.string.blank_QMARK_(icon)));
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.icon","img.icon",-1569368379),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),icon], null)], null):frontend.components.svg.folder),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.flex-1","strong.flex-1",-332188689),(function (){var or__5142__auto__ = title__$1;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return name;
}
})()], null)], null)], null));

var G__40077 = (i__39330 + (1));
i__39330 = G__40077;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39331),frontend$components$plugins$focused_settings_content_$_iter__39328(cljs.core.chunk_rest(s__39329__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39331),null);
}
} else {
var map__39336 = cljs.core.first(s__39329__$2);
var map__39336__$1 = cljs.core.__destructure_map(map__39336);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39336__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39336__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39336__$1,new cljs.core.Keyword(null,"title","title",636505583));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39336__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,focused)], null)], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.items-center.settings-plugin-item","a.flex.items-center.settings-plugin-item",256810883),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-id","data-id",1023855591),id,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__39336,map__39336__$1,id,name,title__$1,icon,s__39329__$2,temp__5825__auto__,plugins,focused,vec__39322,cache,set_cache_BANG_,nav_QMARK_,_){
return (function (){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","focused-settings","plugin/focused-settings",-1699334137),id);
});})(map__39336,map__39336__$1,id,name,title__$1,icon,s__39329__$2,temp__5825__auto__,plugins,focused,vec__39322,cache,set_cache_BANG_,nav_QMARK_,_))
], null),(cljs.core.truth_((function (){var and__5140__auto__ = icon;
if(cljs.core.truth_(and__5140__auto__)){
return (!(clojure.string.blank_QMARK_(icon)));
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.icon","img.icon",-1569368379),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),icon], null)], null):frontend.components.svg.folder),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.flex-1","strong.flex-1",-332188689),(function (){var or__5142__auto__ = title__$1;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return name;
}
})()], null)], null)], null),frontend$components$plugins$focused_settings_content_$_iter__39328(cljs.core.rest(s__39329__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(plugins);
})()], null);
})()], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-wrap","div.panel-wrap",338847352),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-id","data-id",1023855591),focused], null),(function (){var temp__5825__auto__ = (function (){var and__5140__auto__ = focused;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cache,focused);
if(and__5140__auto____$1){
return frontend.handler.plugin.get_plugin_inst(focused);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var pl = temp__5825__auto__;
return frontend.ui.catch_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.warning.text-lg.mt-5","p.warning.text-lg.mt-5",-1216205355),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","settings-schema-error","plugin/settings-schema-error",358158897)], 0))], null),frontend.components.plugins_settings.settings_container(cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(pl.settingsSchema),pl));
} else {
return null;
}
})()], null)], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins$focused_settings_content__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__39342 = cljs.core.first(args__31746__auto__);
var G__39343 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__39342,G__39343) : io.factorhouse.hsx.core.obj_get.call(null,G__39342,G__39343));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"focused-settings-content","focused-settings-content",1963863108,null),args__31746__auto__),frontend$components$plugins$focused_settings_content,args__31746__auto__,null);
}
};
var frontend$components$plugins$focused_settings_content = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__40084__i = 0, G__40084__a = new Array(arguments.length -  0);
while (G__40084__i < G__40084__a.length) {G__40084__a[G__40084__i] = arguments[G__40084__i + 0]; ++G__40084__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__40084__a,0,null);
} 
return frontend$components$plugins$focused_settings_content__delegate.call(this,args__31746__auto__);};
frontend$components$plugins$focused_settings_content.cljs$lang$maxFixedArity = 0;
frontend$components$plugins$focused_settings_content.cljs$lang$applyTo = (function (arglist__40085){
var args__31746__auto__ = cljs.core.seq(arglist__40085);
return frontend$components$plugins$focused_settings_content__delegate(args__31746__auto__);
});
frontend$components$plugins$focused_settings_content.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins$focused_settings_content__delegate;
return frontend$components$plugins$focused_settings_content;
})()
;
var memo_comp__31747__auto__ = (function (){var G__39346 = comp__31745__auto__;
var G__39347 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__39346,G__39347) : io.factorhouse.hsx.core.react_memo.call(null,G__39346,G__39347));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"focused-settings-content");

return comp__31745__auto__;
})();
frontend.components.plugins.custom_js_installer = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins$custom_js_installer(p__39355){
var map__39356 = p__39355;
var map__39356__$1 = cljs.core.__destructure_map(map__39356);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39356__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var current_repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39356__$1,new cljs.core.Keyword(null,"current-repo","current-repo",134812359));
var db_restoring_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39356__$1,new cljs.core.Keyword(null,"db-restoring?","db-restoring?",-1548628664));
var db_worker_ready_QMARK_ = logseq.shui.hooks.use_atom_value(frontend.state.db_worker_ready_QMARK_);
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not(db_restoring_QMARK_);
if(and__5140__auto__){
var and__5140__auto____$1 = db_worker_ready_QMARK_;
if(cljs.core.truth_(and__5140__auto____$1)){
return (!(frontend.util.nfs_QMARK_));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return frontend.handler.ui.exec_js_if_exists__AMPERSAND__allowed_BANG_(t);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_repo,db_restoring_QMARK_,db_worker_ready_QMARK_], null));

return null;
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins$custom_js_installer__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__39370 = cljs.core.first(args__31746__auto__);
var G__39371 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__39370,G__39371) : io.factorhouse.hsx.core.obj_get.call(null,G__39370,G__39371));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"custom-js-installer","custom-js-installer",1775016528,null),args__31746__auto__),frontend$components$plugins$custom_js_installer,args__31746__auto__,null);
}
};
var frontend$components$plugins$custom_js_installer = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__40086__i = 0, G__40086__a = new Array(arguments.length -  0);
while (G__40086__i < G__40086__a.length) {G__40086__a[G__40086__i] = arguments[G__40086__i + 0]; ++G__40086__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__40086__a,0,null);
} 
return frontend$components$plugins$custom_js_installer__delegate.call(this,args__31746__auto__);};
frontend$components$plugins$custom_js_installer.cljs$lang$maxFixedArity = 0;
frontend$components$plugins$custom_js_installer.cljs$lang$applyTo = (function (arglist__40087){
var args__31746__auto__ = cljs.core.seq(arglist__40087);
return frontend$components$plugins$custom_js_installer__delegate(args__31746__auto__);
});
frontend$components$plugins$custom_js_installer.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins$custom_js_installer__delegate;
return frontend$components$plugins$custom_js_installer;
})()
;
var memo_comp__31747__auto__ = (function (){var G__39372 = comp__31745__auto__;
var G__39373 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__39372,G__39373) : io.factorhouse.hsx.core.react_memo.call(null,G__39372,G__39373));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"custom-js-installer");

return comp__31745__auto__;
})();
frontend.components.plugins.perf_tip_content = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins$perf_tip_content(pid,name,url){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.block.whitespace-normal","span.block.whitespace-normal",541876825),frontend.context.i18n.interpolate_rich_text_node.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","perf-tip","plugin/perf-tip",-1267891895)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.text-error","strong.text-error",443803578),(""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name))], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path.opacity-50","path.opacity-50",-1127558279),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pr-1","span.pr-1",-524129241),frontend.ui.icon("folder")], null),url], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","disable-now","plugin/disable-now",509888031)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(LSPluginCore.disable(pid),(function (){
frontend.handler.notification.clear_BANG_(pid);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$6(frontend.context.i18n.interpolate_rich_text_node.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","disable-for-performance-feedback","plugin/disable-for-performance-feedback",-832983)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.text-error","strong.text-error",443803578),(""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name))], null)], null)),new cljs.core.Keyword(null,"success","success",1890645906),true,null,(3000),null);
})),(function (p1__39382_SHARP_){
return console.error(p1__39382_SHARP_);
}));
})], 0))], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins$perf_tip_content__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__39388 = cljs.core.first(args__31746__auto__);
var G__39389 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__39388,G__39389) : io.factorhouse.hsx.core.obj_get.call(null,G__39388,G__39389));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"perf-tip-content","perf-tip-content",-198540783,null),args__31746__auto__),frontend$components$plugins$perf_tip_content,args__31746__auto__,null);
}
};
var frontend$components$plugins$perf_tip_content = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__40088__i = 0, G__40088__a = new Array(arguments.length -  0);
while (G__40088__i < G__40088__a.length) {G__40088__a[G__40088__i] = arguments[G__40088__i + 0]; ++G__40088__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__40088__a,0,null);
} 
return frontend$components$plugins$perf_tip_content__delegate.call(this,args__31746__auto__);};
frontend$components$plugins$perf_tip_content.cljs$lang$maxFixedArity = 0;
frontend$components$plugins$perf_tip_content.cljs$lang$applyTo = (function (arglist__40089){
var args__31746__auto__ = cljs.core.seq(arglist__40089);
return frontend$components$plugins$perf_tip_content__delegate(args__31746__auto__);
});
frontend$components$plugins$perf_tip_content.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins$perf_tip_content__delegate;
return frontend$components$plugins$perf_tip_content;
})()
;
var memo_comp__31747__auto__ = (function (){var G__39390 = comp__31745__auto__;
var G__39391 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__39390,G__39391) : io.factorhouse.hsx.core.react_memo.call(null,G__39390,G__39391));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"perf-tip-content");

return comp__31745__auto__;
})();
frontend.components.plugins.open_plugins_modal_BANG_ = (function frontend$components$plugins$open_plugins_modal_BANG_(){
var G__39394 = frontend.components.plugins.plugins_page();
var G__39395 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"plugins-dashboard","plugins-dashboard",-1133253109),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981)], null);
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2(G__39394,G__39395) : logseq.shui.ui.dialog_open_BANG_.call(null,G__39394,G__39395));
});
frontend.components.plugins.open_waiting_updates_modal_BANG_ = (function frontend$components$plugins$open_waiting_updates_modal_BANG_(){
var G__39398 = (function (){
return frontend.components.plugins.waiting_coming_updates();
});
var G__39399 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"center?","center?",-323116631),true], null);
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2(G__39398,G__39399) : logseq.shui.ui.dialog_open_BANG_.call(null,G__39398,G__39399));
});
frontend.components.plugins.open_plugins_from_file_modal_BANG_ = (function frontend$components$plugins$open_plugins_from_file_modal_BANG_(plugins){
var G__39400 = (function (){
return frontend.components.plugins.plugins_from_file(plugins);
});
var G__39401 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"ls-plugins-from-file-modal"], null);
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2(G__39400,G__39401) : logseq.shui.ui.dialog_open_BANG_.call(null,G__39400,G__39401));
});
frontend.components.plugins.open_focused_settings_modal_BANG_ = (function frontend$components$plugins$open_focused_settings_modal_BANG_(title){
var G__39408 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.settings-modal.of-plugins","div.settings-modal.of-plugins",-1980465429),frontend.components.plugins.focused_settings_content(title)], null);
});
var G__39409 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"plugin-settings-modal","plugin-settings-modal",-1129141832),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"id","id",-1388402092),"ls-focused-settings-modal"], null);
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2(G__39408,G__39409) : logseq.shui.ui.dialog_open_BANG_.call(null,G__39408,G__39409));
});
frontend.components.plugins.renderer_container = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins$renderer_container(p__39420){
var map__39421 = p__39420;
var map__39421__$1 = cljs.core.__destructure_map(map__39421);
var opts = map__39421__$1;
var _pid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39421__$1,new cljs.core.Keyword(null,"_pid","_pid",-925264248));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39421__$1,new cljs.core.Keyword(null,"render","render",-1408033454));
if(cljs.core.fn_QMARK_(render)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.lsp-host-renderer-container","div.lsp-host-renderer-container",65363342),(render.cljs$core$IFn$_invoke$arity$1 ? render.cljs$core$IFn$_invoke$arity$1(opts) : render.call(null,opts))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0))], null);
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins$renderer_container__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__39426 = cljs.core.first(args__31746__auto__);
var G__39427 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__39426,G__39427) : io.factorhouse.hsx.core.obj_get.call(null,G__39426,G__39427));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"renderer-container","renderer-container",552510533,null),args__31746__auto__),frontend$components$plugins$renderer_container,args__31746__auto__,null);
}
};
var frontend$components$plugins$renderer_container = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__40092__i = 0, G__40092__a = new Array(arguments.length -  0);
while (G__40092__i < G__40092__a.length) {G__40092__a[G__40092__i] = arguments[G__40092__i + 0]; ++G__40092__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__40092__a,0,null);
} 
return frontend$components$plugins$renderer_container__delegate.call(this,args__31746__auto__);};
frontend$components$plugins$renderer_container.cljs$lang$maxFixedArity = 0;
frontend$components$plugins$renderer_container.cljs$lang$applyTo = (function (arglist__40093){
var args__31746__auto__ = cljs.core.seq(arglist__40093);
return frontend$components$plugins$renderer_container__delegate(args__31746__auto__);
});
frontend$components$plugins$renderer_container.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins$renderer_container__delegate;
return frontend$components$plugins$renderer_container;
})()
;
var memo_comp__31747__auto__ = (function (){var G__39428 = comp__31745__auto__;
var G__39429 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__39428,G__39429) : io.factorhouse.hsx.core.react_memo.call(null,G__39428,G__39429));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"renderer-container");

return comp__31745__auto__;
})();
frontend.components.plugins.renderer_resolver = (function (){var render_fn__31744__auto__ = (function frontend$components$plugins$renderer_resolver(nskey_SINGLEQUOTE_){
var temp__5825__auto__ = (function (){var G__39431 = nskey_SINGLEQUOTE_;
if((G__39431 == null)){
return null;
} else {
return cljs.core.namespace(G__39431);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var pid = temp__5825__auto__;
var key = cljs.core.name(nskey_SINGLEQUOTE_);
var vec__39433 = logseq.shui.hooks.use_state(null);
var renderer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39433,(0),null);
var set_renderer_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39433,(1),null);
logseq.shui.hooks.use_effect_BANG_((function (){
try{var temp__5825__auto____$1 = frontend.handler.plugin.resolve_hosted_render(pid,key,new cljs.core.Keyword(null,"sidebar","sidebar",35784458));
if(cljs.core.truth_(temp__5825__auto____$1)){
var renderer__$1 = temp__5825__auto____$1;
var r = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(renderer__$1);
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(r);
var temp__5825__auto___40094__$2 = (function (){var and__5140__auto__ = title;
if(cljs.core.truth_(and__5140__auto__)){
return document.getElementById(nskey_SINGLEQUOTE_);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto___40094__$2)){
var dom_40095 = temp__5825__auto___40094__$2;
(dom_40095.textContent = title);
} else {
}

return (set_renderer_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_renderer_BANG_.cljs$core$IFn$_invoke$arity$1(r) : set_renderer_BANG_.call(null,r));
} else {
return null;
}
}catch (e39438){if((e39438 instanceof Error)){
var e = e39438;
return console.error("Failed to resolve renderer:",nskey_SINGLEQUOTE_,e);
} else {
throw e39438;

}
}}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid,key], null));

if(cljs.core.truth_(renderer)){
return frontend.components.plugins.renderer_container(renderer);
} else {
return null;
}
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$plugins$renderer_resolver__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__39447 = cljs.core.first(args__31746__auto__);
var G__39448 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__39447,G__39448) : io.factorhouse.hsx.core.obj_get.call(null,G__39447,G__39448));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"renderer-resolver","renderer-resolver",-261478569,null),args__31746__auto__),frontend$components$plugins$renderer_resolver,args__31746__auto__,null);
}
};
var frontend$components$plugins$renderer_resolver = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__40098__i = 0, G__40098__a = new Array(arguments.length -  0);
while (G__40098__i < G__40098__a.length) {G__40098__a[G__40098__i] = arguments[G__40098__i + 0]; ++G__40098__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__40098__a,0,null);
} 
return frontend$components$plugins$renderer_resolver__delegate.call(this,args__31746__auto__);};
frontend$components$plugins$renderer_resolver.cljs$lang$maxFixedArity = 0;
frontend$components$plugins$renderer_resolver.cljs$lang$applyTo = (function (arglist__40099){
var args__31746__auto__ = cljs.core.seq(arglist__40099);
return frontend$components$plugins$renderer_resolver__delegate(args__31746__auto__);
});
frontend$components$plugins$renderer_resolver.cljs$core$IFn$_invoke$arity$variadic = frontend$components$plugins$renderer_resolver__delegate;
return frontend$components$plugins$renderer_resolver;
})()
;
var memo_comp__31747__auto__ = (function (){var G__39449 = comp__31745__auto__;
var G__39450 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__39449,G__39450) : io.factorhouse.hsx.core.react_memo.call(null,G__39449,G__39450));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"renderer-resolver");

return comp__31745__auto__;
})();
frontend.components.plugins.hook_custom_routes = (function frontend$components$plugins$hook_custom_routes(routes){
var G__39452 = routes;
if(cljs.core.truth_(frontend.config.lsp_enabled_QMARK_)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(G__39452,(function (){var G__39453 = frontend.handler.plugin.get_route_renderers();
var G__39453__$1 = (((G__39453 == null))?null:cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (custom_route){
var temp__5825__auto__ = custom_route;
if(cljs.core.truth_(temp__5825__auto__)){
var map__39454 = temp__5825__auto__;
var map__39454__$1 = cljs.core.__destructure_map(map__39454);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39454__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39454__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39454__$1,new cljs.core.Keyword(null,"render","render",-1408033454));
if((!(clojure.string.blank_QMARK_(path)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"view","view",1247994814),(function (r){
return (render.cljs$core$IFn$_invoke$arity$2 ? render.cljs$core$IFn$_invoke$arity$2(r,custom_route) : render.call(null,r,custom_route));
})], null)], null);
} else {
return null;
}
} else {
return null;
}
}),G__39453));
if((G__39453__$1 == null)){
return null;
} else {
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,G__39453__$1);
}
})());
} else {
return G__39452;
}
});
frontend.components.plugins.hook_daemon_renderers = (function frontend$components$plugins$hook_daemon_renderers(){
var temp__5825__auto__ = cljs.core.seq(frontend.handler.plugin.get_daemon_renderers());
if(temp__5825__auto__){
var rs = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.lsp-daemon-container","div.lsp-daemon-container",1054333676),(function (){var iter__5628__auto__ = (function frontend$components$plugins$hook_daemon_renderers_$_iter__39457(s__39458){
return (new cljs.core.LazySeq(null,(function (){
var s__39458__$1 = s__39458;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__39458__$1);
if(temp__5825__auto____$1){
var s__39458__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39458__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__39458__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__39460 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__39459 = (0);
while(true){
if((i__39459 < size__5627__auto__)){
var map__39462 = cljs.core._nth(c__5626__auto__,i__39459);
var map__39462__$1 = cljs.core.__destructure_map(map__39462);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39462__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var _pid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39462__$1,new cljs.core.Keyword(null,"_pid","_pid",-925264248));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39462__$1,new cljs.core.Keyword(null,"render","render",-1408033454));
cljs.core.chunk_append(b__39460,((cljs.core.fn_QMARK_(render))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.lsp-daemon-container-card","div.lsp-daemon-container-card",-1494438165),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-key","data-key",1775480631),key], null),(render.cljs$core$IFn$_invoke$arity$0 ? render.cljs$core$IFn$_invoke$arity$0() : render.call(null))], null):null));

var G__40112 = (i__39459 + (1));
i__39459 = G__40112;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39460),frontend$components$plugins$hook_daemon_renderers_$_iter__39457(cljs.core.chunk_rest(s__39458__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39460),null);
}
} else {
var map__39464 = cljs.core.first(s__39458__$2);
var map__39464__$1 = cljs.core.__destructure_map(map__39464);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39464__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var _pid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39464__$1,new cljs.core.Keyword(null,"_pid","_pid",-925264248));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39464__$1,new cljs.core.Keyword(null,"render","render",-1408033454));
return cljs.core.cons(((cljs.core.fn_QMARK_(render))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.lsp-daemon-container-card","div.lsp-daemon-container-card",-1494438165),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-key","data-key",1775480631),key], null),(render.cljs$core$IFn$_invoke$arity$0 ? render.cljs$core$IFn$_invoke$arity$0() : render.call(null))], null):null),frontend$components$plugins$hook_daemon_renderers_$_iter__39457(cljs.core.rest(s__39458__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(rs);
})()], null);
} else {
return null;
}
});

//# sourceMappingURL=frontend.components.plugins.js.map
