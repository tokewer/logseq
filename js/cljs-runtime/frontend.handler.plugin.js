goog.provide('frontend.handler.plugin');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
frontend.handler.plugin.normalize_keyword_for_json = (function frontend$handler$plugin$normalize_keyword_for_json(input){
if(cljs.core.truth_(input)){
var f = (function (p__56193){
var vec__56194 = p__56193;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56194,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56194,(1),null);
if((k instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [camel_snake_kebab.core.__GT_camelCase(cljs.core.name(k)),v], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
});
return clojure.walk.postwalk((function (x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,x));
} else {
if(cljs.core.uuid_QMARK_(x)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
} else {
return x;

}
}
}),input);
} else {
return null;
}
});
frontend.handler.plugin.invoke_exported_api = (function frontend$handler$plugin$invoke_exported_api(var_args){
var args__5882__auto__ = [];
var len__5876__auto___56905 = arguments.length;
var i__5877__auto___56906 = (0);
while(true){
if((i__5877__auto___56906 < len__5876__auto___56905)){
args__5882__auto__.push((arguments[i__5877__auto___56906]));

var G__56907 = (i__5877__auto___56906 + (1));
i__5877__auto___56906 = G__56907;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.handler.plugin.invoke_exported_api.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.handler.plugin.invoke_exported_api.cljs$core$IFn$_invoke$arity$variadic = (function (type,args){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.js_invoke,(window.logseq["api"]),cljs.core.name(type),args);
}catch (e56237){var e = e56237;
return console.error(e);
}}));

(frontend.handler.plugin.invoke_exported_api.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.handler.plugin.invoke_exported_api.cljs$lang$applyTo = (function (seq56208){
var G__56210 = cljs.core.first(seq56208);
var seq56208__$1 = cljs.core.next(seq56208);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56210,seq56208__$1);
}));

frontend.handler.plugin.markdown_to_html = (function frontend$handler$plugin$markdown_to_html(s){
try{if(typeof s === 'string'){
return window.marked.parse(s);
} else {
return s;
}
}catch (e56239){if((e56239 instanceof Error)){
var e = e56239;
console.error(e);

return s;
} else {
throw e56239;

}
}});
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.plugin !== 'undefined') && (typeof frontend.handler.plugin.central_endpoint !== 'undefined')){
} else {
frontend.handler.plugin.central_endpoint = "https://raw.githubusercontent.com/logseq/marketplace/master/";
}
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.plugin !== 'undefined') && (typeof frontend.handler.plugin.plugins_url !== 'undefined')){
} else {
frontend.handler.plugin.plugins_url = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.handler.plugin.central_endpoint)+"plugins.json");
}
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.plugin !== 'undefined') && (typeof frontend.handler.plugin.stats_url !== 'undefined')){
} else {
frontend.handler.plugin.stats_url = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.handler.plugin.central_endpoint)+"stats.json");
}

frontend.handler.plugin.illegal_plugin_package_error_pattern = /^Parse package config error #(.+)[\/\\]package\.json$/;
frontend.handler.plugin.illegal_plugin_package_error__GT_data = (function frontend$handler$plugin$illegal_plugin_package_error__GT_data(e){
var name = (function (){var G__56253 = e;
if((G__56253 == null)){
return null;
} else {
return (G__56253["name"]);
}
})();
var message = (function (){var G__56254 = e;
if((G__56254 == null)){
return null;
} else {
return (G__56254["message"]);
}
})();
var url = (function (){var or__5142__auto__ = (function (){var G__56256 = e;
if((G__56256 == null)){
return null;
} else {
return (G__56256["url"]);
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var G__56260 = message;
var G__56260__$1 = (((G__56260 == null))?null:cljs.core.re_matches(frontend.handler.plugin.illegal_plugin_package_error_pattern,G__56260));
if((G__56260__$1 == null)){
return null;
} else {
return cljs.core.second(G__56260__$1);
}
}
})();
var url__$1 = (function (){var G__56261 = url;
if((G__56261 == null)){
return null;
} else {
return (frontend.util.node_path.normalize.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.normalize.cljs$core$IFn$_invoke$arity$1(G__56261) : frontend.util.node_path.normalize.call(null,G__56261));
}
})();
var package_json_path = (function (){var or__5142__auto__ = (function (){var G__56262 = e;
if((G__56262 == null)){
return null;
} else {
return (G__56262["packageJsonPath"]);
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var G__56263 = url__$1;
if((G__56263 == null)){
return null;
} else {
return (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(G__56263,"package.json") : frontend.util.node_path.join.call(null,G__56263,"package.json"));
}
}
})();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("IllegalPluginPackageError",name)) && ((!(clojure.string.blank_QMARK_(url__$1)))))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url__$1,new cljs.core.Keyword(null,"package-json-path","package-json-path",-1905424366),package_json_path], null);
} else {
return null;
}
});
frontend.handler.plugin.problematic_plugin_source = (function frontend$handler$plugin$problematic_plugin_source(url){
var url__$1 = (frontend.util.node_path.normalize.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.normalize.cljs$core$IFn$_invoke$arity$1(url) : frontend.util.node_path.normalize.call(null,url));
var dotroot = (function (){var G__56264 = (frontend.handler.plugin.get_ls_dotdir_root.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.plugin.get_ls_dotdir_root.cljs$core$IFn$_invoke$arity$0() : frontend.handler.plugin.get_ls_dotdir_root.call(null));
if((G__56264 == null)){
return null;
} else {
return (frontend.util.node_path.normalize.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.normalize.cljs$core$IFn$_invoke$arity$1(G__56264) : frontend.util.node_path.normalize.call(null,G__56264));
}
})();
var dotplugins_root = (function (){var G__56265 = dotroot;
if((G__56265 == null)){
return null;
} else {
return (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(G__56265,"plugins") : frontend.util.node_path.join.call(null,G__56265,"plugins"));
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = dotplugins_root;
if(cljs.core.truth_(and__5140__auto__)){
return clojure.string.starts_with_QMARK_(url__$1,dotplugins_root);
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"installed","installed",553977691),new cljs.core.Keyword(null,"id","id",-1388402092),(frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1(url__$1) : frontend.util.node_path.basename.call(null,url__$1)),new cljs.core.Keyword(null,"url","url",276297046),url__$1], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"external","external",-1833995989),new cljs.core.Keyword(null,"url","url",276297046),url__$1], null);
}
});
frontend.handler.plugin.remove_external_plugin_path_BANG_ = (function frontend$handler$plugin$remove_external_plugin_path_BANG_(url){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.plugin.invoke_exported_api(new cljs.core.Keyword(null,"load_user_preferences","load_user_preferences",1651561867))),(function (prefs){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(prefs)?cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(prefs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)):cljs.core.PersistentArrayMap.EMPTY)),(function (prefs__$1){
return promesa.protocols._mcat(promesa.protocols._promise((frontend.util.node_path.normalize.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.normalize.cljs$core$IFn$_invoke$arity$1(url) : frontend.util.node_path.normalize.call(null,url))),(function (url__$1){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.util.node_path.normalize,(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"externals","externals",-1256019925).cljs$core$IFn$_invoke$arity$1(prefs__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})())),(function (externals){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56270_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__56270_SHARP_,url__$1);
}),externals))),(function (updated_externals){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(externals,updated_externals)),(function (removed_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(removed_QMARK_)?frontend.handler.plugin.invoke_exported_api.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"save_user_preferences","save_user_preferences",-231055534),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(prefs__$1,new cljs.core.Keyword(null,"externals","externals",-1256019925),updated_externals))], 0)):null)),(function (_){
return promesa.protocols._promise(removed_QMARK_);
}));
}));
}));
}));
}));
}));
}));
}));
});
frontend.handler.plugin.remove_problematic_plugin_BANG_ = (function frontend$handler$plugin$remove_problematic_plugin_BANG_(url){
var map__56283 = frontend.handler.plugin.problematic_plugin_source(url);
var map__56283__$1 = cljs.core.__destructure_map(map__56283);
var source = map__56283__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56283__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56283__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var G__56284 = type;
var G__56284__$1 = (((G__56284 instanceof cljs.core.Keyword))?G__56284.fqn:null);
switch (G__56284__$1) {
case "installed":
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(frontend.util.electron_QMARK_())?electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"uninstallMarketPlugin","uninstallMarketPlugin",1767252086),id], 0)):null)),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin_config.remove_plugin(id),(function (error){
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.plugin",new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remove-broken-plugin-config-error","remove-broken-plugin-config-error",-704670699),error,new cljs.core.Keyword(null,"line","line",212345235),113], null)),null);
} else {
return null;
}
}))),(function (___$1){
return promesa.protocols._promise(source);
}));
}));
}));

break;
case "external":
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.plugin.remove_external_plugin_path_BANG_(url)),(function (removed_QMARK_){
return promesa.protocols._promise(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(source,new cljs.core.Keyword(null,"removed?","removed?",1134763246),removed_QMARK_));
}));
}));

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56284__$1))));

}
});
frontend.handler.plugin.show_illegal_plugin_package_notification_BANG_ = (function frontend$handler$plugin$show_illegal_plugin_package_notification_BANG_(e){
var temp__5823__auto__ = frontend.handler.plugin.illegal_plugin_package_error__GT_data(e);
if(cljs.core.truth_(temp__5823__auto__)){
var map__56287 = temp__5823__auto__;
var map__56287__$1 = cljs.core.__destructure_map(map__56287);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56287__$1,new cljs.core.Keyword(null,"url","url",276297046));
var package_json_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56287__$1,new cljs.core.Keyword(null,"package-json-path","package-json-path",-1905424366));
var map__56288 = frontend.handler.plugin.problematic_plugin_source(url);
var map__56288__$1 = cljs.core.__destructure_map(map__56288);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56288__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56288__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var uid = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"plugin-illegal-package-error-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(url))));
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-2","div.flex.flex-col.gap-2",1564729900),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin.package-config","parse-error","plugin.package-config/parse-error",48056642)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.opacity-70.break-all","div.text-xs.opacity-70.break-all",-27882459),package_json_path], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"external","external",-1833995989)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.opacity-70","div.text-xs.opacity-70",-1130707358),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin.package-config","detach-desc","plugin.package-config/detach-desc",245778973)], 0))], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-2.pt-1","div.flex.items-center.gap-2.pt-1",2105712802),(function (){var G__56289 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.remove_problematic_plugin_BANG_(url),(function (_){
frontend.handler.notification.clear_BANG_(uid);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"installed","installed",553977691)))?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin.package-config","remove-installed-success","plugin.package-config/remove-installed-success",-805287740),id], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin.package-config","remove-external-success","plugin.package-config/remove-external-success",1375865631)], 0))),new cljs.core.Keyword(null,"success","success",1890645906));
})),(function (_error){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin.package-config","remove-error","plugin.package-config/remove-error",-439907828)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
}));
})], null);
var G__56290 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","uninstall","plugin/uninstall",233071235)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__56289,G__56290) : logseq.shui.ui.button.call(null,G__56289,G__56290));
})()], null)], null),new cljs.core.Keyword(null,"error","error",-978969032),false,uid);

return true;
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","invalid-package","plugin/invalid-package",-712602566)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
}
});
frontend.handler.plugin.setup_global_apis_for_web_BANG_ = (function frontend$handler$plugin$setup_global_apis_for_web_BANG_(){
if(((frontend.util.web_platform_QMARK_) && ((window.apis == null)))){
var e = (new window.EventEmitter3());
return (window.apis = e);
} else {
return null;
}
});
frontend.handler.plugin.unlink_plugin_for_web_BANG_ = (function frontend$handler$plugin$unlink_plugin_for_web_BANG_(key){
frontend.handler.plugin.invoke_exported_api.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"unlink_installed_web_plugin","unlink_installed_web_plugin",-1190200576),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0));

return frontend.handler.plugin.invoke_exported_api.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"unlink_plugin_user_settings","unlink_plugin_user_settings",349152795),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0));
});
frontend.handler.plugin.assets_theme_to_file = (function frontend$handler$plugin$assets_theme_to_file(theme){
if(cljs.core.truth_(theme)){
var G__56293 = theme;
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__56293,new cljs.core.Keyword(null,"url","url",276297046),(function (p1__56292_SHARP_){
var G__56294 = p1__56292_SHARP_;
if((G__56294 == null)){
return null;
} else {
return clojure.string.replace_first(G__56294,"assets://","file://");
}
}));
} else {
return G__56293;
}
} else {
return null;
}
});
frontend.handler.plugin.load_plugin_preferences = (function frontend$handler$plugin$load_plugin_preferences(){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.invoke_exported_api(new cljs.core.Keyword(null,"load_user_preferences","load_user_preferences",1651561867)),(function (p1__56295_SHARP_){
return cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(p1__56295_SHARP_);
})),(function (p1__56296_SHARP_){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","preferences","plugin/preferences",668527388),p1__56296_SHARP_);
})),(function (p1__56297_SHARP_){
return console.error(p1__56297_SHARP_);
}));
});
frontend.handler.plugin.save_plugin_preferences_BANG_ = (function frontend$handler$plugin$save_plugin_preferences_BANG_(var_args){
var G__56299 = arguments.length;
switch (G__56299) {
case 1:
return frontend.handler.plugin.save_plugin_preferences_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.plugin.save_plugin_preferences_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.plugin.save_plugin_preferences_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (input){
return frontend.handler.plugin.save_plugin_preferences_BANG_.cljs$core$IFn$_invoke$arity$2(input,true);
}));

(frontend.handler.plugin.save_plugin_preferences_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (input,reload_state_QMARK_){
var temp__5825__auto__ = (function (){var and__5140__auto__ = cljs.core.map_QMARK_(input);
if(and__5140__auto__){
return cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(input);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var input__$1 = temp__5825__auto__;
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(LSPluginCore.saveUserPreferences(input__$1),(function (){
if(cljs.core.truth_(reload_state_QMARK_)){
return frontend.handler.plugin.load_plugin_preferences();
} else {
return null;
}
}));
} else {
return null;
}
}));

(frontend.handler.plugin.save_plugin_preferences_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.plugin.gh_repo_url = (function frontend$handler$plugin$gh_repo_url(repo){
return (""+"https://github.com/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo));
});
frontend.handler.plugin.pkg_asset = (function frontend$handler$plugin$pkg_asset(id,asset){
if(cljs.core.truth_((function (){var and__5140__auto__ = asset;
if(cljs.core.truth_(and__5140__auto__)){
return clojure.string.starts_with_QMARK_(asset,"http");
} else {
return and__5140__auto__;
}
})())){
return asset;
} else {
var temp__5825__auto__ = (function (){var and__5140__auto__ = asset;
if(cljs.core.truth_(and__5140__auto__)){
return clojure.string.replace(asset,/^[.\/]+/,"");
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var asset__$1 = temp__5825__auto__;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.handler.plugin.central_endpoint)+"packages/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(asset__$1));
} else {
return null;
}
}
});
frontend.handler.plugin.load_marketplace_plugins = (function frontend$handler$plugin$load_marketplace_plugins(refresh_QMARK_){
if(cljs.core.truth_((function (){var or__5142__auto__ = refresh_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (new cljs.core.Keyword("plugin","marketplace-pkgs","plugin/marketplace-pkgs",637462798).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()) == null);
}
})())){
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve,reject){
var on_ok = (function (res){
var temp__5823__auto__ = (function (){var and__5140__auto__ = res;
if(cljs.core.truth_(and__5140__auto__)){
return cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(res);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var res__$1 = temp__5823__auto__;
var pkgs = new cljs.core.Keyword(null,"packages","packages",1549741112).cljs$core$IFn$_invoke$arity$1(res__$1);
var pkgs__$1 = (cljs.core.truth_(frontend.util.electron_QMARK_())?pkgs:(function (){var G__56315 = pkgs;
if((G__56315 == null)){
return null;
} else {
return cljs.core.filterv((function (p1__56312_SHARP_){
return ((new cljs.core.Keyword(null,"web","web",-654701153).cljs$core$IFn$_invoke$arity$1(p1__56312_SHARP_) === true) || ((!(new cljs.core.Keyword(null,"effect","effect",347343289).cljs$core$IFn$_invoke$arity$1(p1__56312_SHARP_) === true))));
}),G__56315);
}
})());
frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","marketplace-pkgs","plugin/marketplace-pkgs",637462798),pkgs__$1);

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(pkgs__$1) : resolve.call(null,pkgs__$1));
} else {
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(null) : reject.call(null,null));
}
});
if(cljs.core.truth_(frontend.state.http_proxy_enabled_or_val_QMARK_())){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"httpFetchJSON","httpFetchJSON",787765788),frontend.handler.plugin.plugins_url], 0)),on_ok),reject);
} else {
return frontend.util.fetch.cljs$core$IFn$_invoke$arity$3(frontend.handler.plugin.plugins_url,on_ok,reject);
}
}));
} else {
return promesa.core.resolved(new cljs.core.Keyword("plugin","marketplace-pkgs","plugin/marketplace-pkgs",637462798).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()));
}
});
frontend.handler.plugin.load_marketplace_stats = (function frontend$handler$plugin$load_marketplace_stats(refresh_QMARK_){
if(cljs.core.truth_((function (){var or__5142__auto__ = refresh_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (new cljs.core.Keyword("plugin","marketplace-stats","plugin/marketplace-stats",1801405730).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()) == null);
}
})())){
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve,reject){
var on_ok = (function (res){
var temp__5823__auto__ = (function (){var and__5140__auto__ = res;
if(cljs.core.truth_(and__5140__auto__)){
return cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(res);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var res__$1 = temp__5823__auto__;
frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","marketplace-stats","plugin/marketplace-stats",1801405730),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56326){
var vec__56329 = p__56326;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56329,(0),null);
var stat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56329,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(stat,new cljs.core.Keyword(null,"total_downloads","total_downloads",-1370933259),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,b){
return (a + cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,(2)));
}),(0),new cljs.core.Keyword(null,"releases","releases",460978484).cljs$core$IFn$_invoke$arity$1(stat)))], null);
}),res__$1)));

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(null) : resolve.call(null,null));
} else {
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(null) : reject.call(null,null));
}
});
if(cljs.core.truth_(frontend.state.http_proxy_enabled_or_val_QMARK_())){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"httpFetchJSON","httpFetchJSON",787765788),frontend.handler.plugin.stats_url], 0)),on_ok),reject);
} else {
return frontend.util.fetch.cljs$core$IFn$_invoke$arity$3(frontend.handler.plugin.stats_url,on_ok,reject);
}
}));
} else {
return promesa.core.resolved(null);
}
});
frontend.handler.plugin.check_or_update_marketplace_plugin_BANG_ = (function frontend$handler$plugin$check_or_update_marketplace_plugin_BANG_(p__56340,error_handler){
var map__56343 = p__56340;
var map__56343__$1 = cljs.core.__destructure_map(map__56343);
var pkg = map__56343__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56343__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword("plugin","installing","plugin/installing",-755703581).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0());
if(cljs.core.truth_(and__5140__auto__)){
return (!(frontend.handler.common.plugin.installed_QMARK_(id)));
} else {
return and__5140__auto__;
}
})())){
return null;
} else {
frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","installing","plugin/installing",-755703581),pkg);

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.load_marketplace_plugins(false),(function (manifests){
var mft_56926 = cljs.core.some((function (p1__56337_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56337_SHARP_),id)){
return p1__56337_SHARP_;
} else {
return null;
}
}),manifests);
var opts_56927 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(pkg,new cljs.core.Keyword(null,"logger","logger",-220675947)),mft_56926], 0));
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"updateMarketPlugin","updateMarketPlugin",-1044261342),opts_56927], 0));
} else {
frontend.handler.common.plugin.async_install_or_update_for_web_BANG_(opts_56927);
}

return true;
})),(function (e){
frontend.state.reset_all_updates_state();

(error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(e) : error_handler.call(null,e));

frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","installing","plugin/installing",-755703581),null);

return console.error(e);
}));
}
});
frontend.handler.plugin.get_plugin_inst = (function frontend$handler$plugin$get_plugin_inst(pid){
try{return LSPluginCore.ensurePlugin(cljs.core.name(pid));
}catch (e56352){var _e = e56352;
return null;
}});
frontend.handler.plugin.call_plugin_user_model_BANG_ = (function frontend$handler$plugin$call_plugin_user_model_BANG_(pid,key,args){
var temp__5825__auto__ = frontend.handler.plugin.get_plugin_inst(pid);
if(cljs.core.truth_(temp__5825__auto__)){
var pl = temp__5825__auto__;
var caller = pl.caller;
return caller.callUserModelAsync.apply(caller,cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(key),args)));
} else {
return null;
}
});
frontend.handler.plugin.call_plugin_user_command_BANG_ = (function frontend$handler$plugin$call_plugin_user_command_BANG_(pid,key,args){
var temp__5825__auto__ = (function (){var and__5140__auto__ = key;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("plugin","simple-commands","plugin/simple-commands",234820996).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid)));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var commands = temp__5825__auto__;
var temp__5825__auto____$1 = medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p1__56367_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__56367_SHARP_)),key);
}),commands);
if(cljs.core.truth_(temp__5825__auto____$1)){
var matched = temp__5825__auto____$1;
var vec__56374 = matched;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56374,(0),null);
var cmd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56374,(1),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56374,(2),null);
var pid__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56374,(3),null);
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exec-plugin-cmd","exec-plugin-cmd",1049730302),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type,new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"pid","pid",1018387698),pid__$1,new cljs.core.Keyword(null,"cmd","cmd",-302931143),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cmd,new cljs.core.Keyword(null,"args","args",1315556576),args),new cljs.core.Keyword(null,"action","action",-811238024),action], null)], null));
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.plugin.open_updates_downloading = (function frontend$handler$plugin$open_updates_downloading(){
if(((cljs.core.not(new cljs.core.Keyword("plugin","updates-downloading?","plugin/updates-downloading?",1294108608).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()))) && (cljs.core.seq(frontend.state.all_available_coming_updates.cljs$core$IFn$_invoke$arity$0())))){
frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","updates-coming","plugin/updates-coming",104160263),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56384_SHARP_){
if(cljs.core.truth_(frontend.state.coming_update_new_version_QMARK_(cljs.core.second(p1__56384_SHARP_)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__56384_SHARP_,(1),cljs.core.dissoc,new cljs.core.Keyword(null,"error-code","error-code",180497232));
} else {
return p1__56384_SHARP_;
}
}),new cljs.core.Keyword("plugin","updates-coming","plugin/updates-coming",104160263).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()))));

return frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","updates-downloading?","plugin/updates-downloading?",1294108608),true);
} else {
return null;
}
});
frontend.handler.plugin.close_updates_downloading = (function frontend$handler$plugin$close_updates_downloading(){
if(cljs.core.truth_(new cljs.core.Keyword("plugin","updates-downloading?","plugin/updates-downloading?",1294108608).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()))){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","updates-downloading?","plugin/updates-downloading?",1294108608),false);
} else {
return null;
}
});
frontend.handler.plugin.has_setting_schema_QMARK_ = (function frontend$handler$plugin$has_setting_schema_QMARK_(id){
var temp__5825__auto__ = (function (){var and__5140__auto__ = id;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.handler.plugin.get_plugin_inst(cljs.core.name(id));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var pl = temp__5825__auto__;
return cljs.core.boolean$(pl.settingsSchema);
} else {
return null;
}
});
frontend.handler.plugin.get_enabled_plugins_if_setting_schema = (function frontend$handler$plugin$get_enabled_plugins_if_setting_schema(){
var temp__5825__auto__ = cljs.core.seq(frontend.state.get_enabled_QMARK__installed_plugins.cljs$core$IFn$_invoke$arity$4(false,true,true,true));
if(temp__5825__auto__){
var plugins = temp__5825__auto__;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56388_SHARP_){
return frontend.handler.plugin.has_setting_schema_QMARK_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56388_SHARP_));
}),plugins);
} else {
return null;
}
});
frontend.handler.plugin.setup_install_listener_BANG_ = (function frontend$handler$plugin$setup_install_listener_BANG_(){
var channel = cljs.core.name(new cljs.core.Keyword(null,"lsp-updates","lsp-updates",1924425351));
var listener = (function (ctx,evt){
var e_56941 = (function (){var or__5142__auto__ = evt;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return ctx;
}
})();
var temp__5825__auto___56943 = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(e_56941);
if(cljs.core.truth_(temp__5825__auto___56943)){
var map__56395_56945 = temp__5825__auto___56943;
var map__56395_56946__$1 = cljs.core.__destructure_map(map__56395_56945);
var status_56947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56395_56946__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var payload_56948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56395_56946__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var only_check_56949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56395_56946__$1,new cljs.core.Keyword(null,"only-check","only-check",-1961506795));
var G__56399_56951 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(status_56947);
var G__56399_56952__$1 = (((G__56399_56951 instanceof cljs.core.Keyword))?G__56399_56951.fqn:null);
switch (G__56399_56952__$1) {
case "completed":
var map__56400_56954 = payload_56948;
var map__56400_56955__$1 = cljs.core.__destructure_map(map__56400_56954);
var id_56956 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56400_56955__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var dst_56957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56400_56955__$1,new cljs.core.Keyword(null,"dst","dst",844682948));
var name_56958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56400_56955__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var title_56959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56400_56955__$1,new cljs.core.Keyword(null,"title","title",636505583));
var theme_56960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56400_56955__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var web_pkg_56961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56400_56955__$1,new cljs.core.Keyword(null,"web-pkg","web-pkg",304735692));
var name_56962__$1 = (function (){var or__5142__auto__ = title_56959;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = name_56958;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return "Untitled";
}
}
})();
if(cljs.core.truth_(only_check_56949)){
frontend.state.consume_updates_from_coming_plugin_BANG_(payload_56948,false);
} else {
if(frontend.handler.common.plugin.installed_QMARK_(id_56956)){
var temp__5825__auto___56963__$1 = frontend.handler.plugin.get_plugin_inst(id_56956);
if(cljs.core.truth_(temp__5825__auto___56963__$1)){
var pl_56964 = temp__5825__auto___56963__$1;
promesa.core.then.cljs$core$IFn$_invoke$arity$2(pl_56964.reload(),(function (){
if(cljs.core.not(frontend.util.electron_QMARK_())){
(pl_56964.options.version = new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(web_pkg_56961));

(pl_56964.options.webPkg = cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(web_pkg_56961));

frontend.handler.plugin.invoke_exported_api.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"save_installed_web_plugin","save_installed_web_plugin",-1105585138),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pl_56964.toJSON(false)], 0));
} else {
}

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","update-plugin","plugin/update-plugin",-675946380),name_56962__$1,pl_56964.options.version], 0)),new cljs.core.Keyword(null,"success","success",1890645906));

return frontend.state.consume_updates_from_coming_plugin_BANG_(payload_56948,true);
}));
} else {
}
} else {
promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(LSPluginCore.register(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id_56956,new cljs.core.Keyword(null,"url","url",276297046),dst_56957,new cljs.core.Keyword(null,"webPkg","webPkg",-614725372),web_pkg_56961], null))),(function (){
var temp__5825__auto____$1 = frontend.handler.plugin.get_plugin_inst(id_56956);
if(cljs.core.truth_(temp__5825__auto____$1)){
var pl = temp__5825__auto____$1;
if(cljs.core.truth_(theme_56960)){
setTimeout((function (){
return (frontend.handler.plugin.select_a_plugin_theme.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.plugin.select_a_plugin_theme.cljs$core$IFn$_invoke$arity$1(id_56956) : frontend.handler.plugin.select_a_plugin_theme.call(null,id_56956));
}),(300));
} else {
}

if(cljs.core.truth_(pl.isWebPlugin)){
frontend.handler.plugin.invoke_exported_api.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"save_installed_web_plugin","save_installed_web_plugin",-1105585138),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pl.toJSON(false)], 0));
} else {
}

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","installed-plugin","plugin/installed-plugin",-2110374590),name_56962__$1], 0)),new cljs.core.Keyword(null,"success","success",1890645906));
} else {
return null;
}
})),(function (e__$1){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","install-error","plugin/install-error",-354657789),name_56962__$1,e__$1.message], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
}));
}
}

break;
case "error":
var error_code_56966 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(new cljs.core.Keyword(null,"error-code","error-code",180497232).cljs$core$IFn$_invoke$arity$1(payload_56948),/^[\s\:\[]+/,""));
var fake_error_QMARK__56967 = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-new-version","no-new-version",-944956961),null], null), null),error_code_56966);
var vec__56411_56968 = (function (){var G__56414 = error_code_56966;
var G__56414__$1 = (((G__56414 instanceof cljs.core.Keyword))?G__56414.fqn:null);
switch (G__56414__$1) {
case "no-new-version":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","up-to-date","plugin/up-to-date",-1634846608),":)"], 0)),new cljs.core.Keyword(null,"success","success",1890645906)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [error_code_56966,new cljs.core.Keyword(null,"error","error",-978969032)], null);

}
})();
var msg_56969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56411_56968,(0),null);
var type_56970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56411_56968,(1),null);
var rate_limit_error_QMARK__56971 = (function (){var G__56415 = msg_56969;
var G__56415__$1 = (((G__56415 == null))?null:(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56415)));
if((G__56415__$1 == null)){
return null;
} else {
return clojure.string.includes_QMARK_(G__56415__$1,"API rate limit");
}
})();
var pending_QMARK__56972 = cljs.core.seq(new cljs.core.Keyword("plugin","updates-pending","plugin/updates-pending",-1190878256).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()));
if(cljs.core.truth_((function (){var and__5140__auto__ = only_check_56949;
if(cljs.core.truth_(and__5140__auto__)){
return pending_QMARK__56972;
} else {
return and__5140__auto__;
}
})())){
frontend.state.consume_updates_from_coming_plugin_BANG_(payload_56948,false);
} else {
if(((cljs.core.not(only_check_56949)) && (cljs.core.not(pending_QMARK__56972)))){
frontend.state.consume_updates_from_coming_plugin_BANG_(payload_56948,true);
} else {
}

if(cljs.core.truth_(rate_limit_error_QMARK__56971)){
} else {
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),type_56970))?"[Error]":""))+"<"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(payload_56948))+"> "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_56969)),type_56970);
}
}

if(fake_error_QMARK__56967){
} else {
console.error("Update Error:",new cljs.core.Keyword(null,"error-code","error-code",180497232).cljs$core$IFn$_invoke$arity$1(payload_56948));
}

break;
default:

}
} else {
}

setTimeout((function (){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","installing","plugin/installing",-755703581),null);
}),(512));

return true;
});
window.apis.addListener(channel,listener);

return (function (){
return window.apis.removeListener(channel,listener);
});
});
frontend.handler.plugin.normalize_plugin_metadata = (function frontend$handler$plugin$normalize_plugin_metadata(metadata){
var G__56419 = metadata;
if((!(typeof new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(metadata) === 'string'))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56419,new cljs.core.Keyword(null,"author","author",2111686192),(function (){var or__5142__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(metadata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"author","author",2111686192),new cljs.core.Keyword(null,"name","name",1843675177)], null));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})());
} else {
return G__56419;
}
});
frontend.handler.plugin.register_plugin = (function frontend$handler$plugin$register_plugin(plugin_metadata){
var temp__5825__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(plugin_metadata));
if(cljs.core.truth_(temp__5825__auto__)){
var pid = temp__5825__auto__;
var G__56420 = plugin_metadata;
var G__56420__$1 = (((G__56420 == null))?null:frontend.handler.plugin.normalize_plugin_metadata(G__56420));
if((G__56420__$1 == null)){
return null;
} else {
return frontend.state.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034)], null),cljs.core.assoc,pid,G__56420__$1], 0));
}
} else {
return null;
}
});
frontend.handler.plugin.host_mounted_BANG_ = (function frontend$handler$plugin$host_mounted_BANG_(){
var and__5140__auto__ = frontend.config.lsp_enabled_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return LSPluginCore.hostMounted();
} else {
return and__5140__auto__;
}
});
frontend.handler.plugin.register_plugin_slash_command = (function frontend$handler$plugin$register_plugin_slash_command(pid,p__56422){
var vec__56423 = p__56422;
var cmd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56423,(0),null);
var actions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56423,(1),null);
var temp__5825__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
if(cljs.core.truth_(temp__5825__auto__)){
var pid__$1 = temp__5825__auto__;
if(cljs.core.contains_QMARK_(new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()),pid__$1)){
frontend.state.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-slash-commands","plugin/installed-slash-commands",-58447235),pid__$1], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY),cljs.core.PersistentHashMap.fromArrays([cmd],[cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56421_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__56421_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pid","pid",1018387698),pid__$1], null));
}),actions)])], 0));

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rebuild-slash-commands-list","rebuild-slash-commands-list",-639662306)], null));

return true;
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.plugin.unregister_plugin_slash_command = (function frontend$handler$plugin$unregister_plugin_slash_command(var_args){
var G__56427 = arguments.length;
switch (G__56427) {
case 1:
return frontend.handler.plugin.unregister_plugin_slash_command.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.plugin.unregister_plugin_slash_command.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.plugin.unregister_plugin_slash_command.cljs$core$IFn$_invoke$arity$1 = (function (pid){
frontend.state.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(medley.core.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-slash-commands","plugin/installed-slash-commands",-58447235),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid)], null)], 0));

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rebuild-slash-commands-list","rebuild-slash-commands-list",-639662306)], null));
}));

(frontend.handler.plugin.unregister_plugin_slash_command.cljs$core$IFn$_invoke$arity$2 = (function (pid,cmd){
frontend.state.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(medley.core.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-slash-commands","plugin/installed-slash-commands",-58447235),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid),cmd], null)], 0));

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rebuild-slash-commands-list","rebuild-slash-commands-list",-639662306)], null));
}));

(frontend.handler.plugin.unregister_plugin_slash_command.cljs$lang$maxFixedArity = 2);

frontend.handler.plugin.keybinding_mode_handler_map = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword("shortcut.handler","editor-global","shortcut.handler/editor-global",-799336480),new cljs.core.Keyword(null,"non-editing","non-editing",-24940958),new cljs.core.Keyword("shortcut.handler","global-non-editing-only","shortcut.handler/global-non-editing-only",-2118756985),new cljs.core.Keyword(null,"editing","editing",1365491601),new cljs.core.Keyword("shortcut.handler","block-editing-only","shortcut.handler/block-editing-only",794342449)], null);
frontend.handler.plugin.simple_cmd__GT_palette_cmd = (function frontend$handler$plugin$simple_cmd__GT_palette_cmd(pid,p__56431,action){
var map__56432 = p__56431;
var map__56432__$1 = cljs.core.__destructure_map(map__56432);
var cmd = map__56432__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56432__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56432__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56432__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56432__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
var keybinding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56432__$1,new cljs.core.Keyword(null,"keybinding","keybinding",1090151579));
var palette_cmd = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"plugin."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pid)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key))),new cljs.core.Keyword(null,"desc","desc",2093485764),(function (){var or__5142__auto__ = desc;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return label;
}
})(),new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),(function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(keybinding);
if(cljs.core.truth_(temp__5825__auto__)){
var shortcut = temp__5825__auto__;
if(cljs.core.truth_(frontend.util.mac_QMARK_)){
var or__5142__auto__ = new cljs.core.Keyword(null,"mac","mac",-1879391650).cljs$core$IFn$_invoke$arity$1(keybinding);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return shortcut;
}
} else {
return shortcut;
}
} else {
return null;
}
})(),new cljs.core.Keyword(null,"handler-id","handler-id",1160395333),(function (){var mode = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(keybinding);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"global","global",93595047);
}
})();
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.keybinding_mode_handler_map,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(mode));
})(),new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exec-plugin-cmd","exec-plugin-cmd",1049730302),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"pid","pid",1018387698),pid,new cljs.core.Keyword(null,"cmd","cmd",-302931143),cmd,new cljs.core.Keyword(null,"action","action",-811238024),action], null)], null));
})], null);
return palette_cmd;
});
frontend.handler.plugin.simple_cmd_keybinding__GT_shortcut_args = (function frontend$handler$plugin$simple_cmd_keybinding__GT_shortcut_args(pid,key,keybinding){
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"plugin."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pid)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)));
var binding = new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(keybinding);
var binding__$1 = (function (){var G__56452 = ((typeof binding === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [binding], null):cljs.core.vec(binding));
var G__56452__$1 = (((G__56452 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,G__56452));
if((G__56452__$1 == null)){
return null;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.utils.undecorate_binding,G__56452__$1);
}
})();
var binding__$2 = (cljs.core.truth_(frontend.util.mac_QMARK_)?(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"mac","mac",-1879391650).cljs$core$IFn$_invoke$arity$1(keybinding);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return binding__$1;
}
})():binding__$1);
var mode = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(keybinding);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"global","global",93595047);
}
})();
var mode__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.keybinding_mode_handler_map,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(mode));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode__$1,id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"binding","binding",539932593),binding__$2], null)], null);
});
frontend.handler.plugin.register_plugin_simple_command = (function frontend$handler$plugin$register_plugin_simple_command(pid,p__56456,action){
var map__56457 = p__56456;
var map__56457__$1 = cljs.core.__destructure_map(map__56457);
var cmd = map__56457__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56457__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var temp__5825__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
if(cljs.core.truth_(temp__5825__auto__)){
var pid__$1 = temp__5825__auto__;
if(cljs.core.contains_QMARK_(new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()),pid__$1)){
frontend.state.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","simple-commands","plugin/simple-commands",234820996),pid__$1], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cmd,action,pid__$1], null)], 0));

return true;
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.plugin.unregister_plugin_simple_command = (function frontend$handler$plugin$unregister_plugin_simple_command(var_args){
var G__56466 = arguments.length;
switch (G__56466) {
case 1:
return frontend.handler.plugin.unregister_plugin_simple_command.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.plugin.unregister_plugin_simple_command.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.plugin.unregister_plugin_simple_command.cljs$core$IFn$_invoke$arity$1 = (function (pid){
return frontend.state.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(medley.core.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","simple-commands","plugin/simple-commands",234820996),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid)], null)], 0));
}));

(frontend.handler.plugin.unregister_plugin_simple_command.cljs$core$IFn$_invoke$arity$2 = (function (pid,key){
return frontend.state.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","simple-commands","plugin/simple-commands",234820996),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid)], null),(function (commands){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56464_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__56464_SHARP_)));
}),commands));
})], 0));
}));

(frontend.handler.plugin.unregister_plugin_simple_command.cljs$lang$maxFixedArity = 2);

frontend.handler.plugin.register_plugin_ui_item = (function frontend$handler$plugin$register_plugin_ui_item(pid,p__56481){
var map__56482 = p__56481;
var map__56482__$1 = cljs.core.__destructure_map(map__56482);
var opts = map__56482__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56482__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56482__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var temp__5825__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
if(cljs.core.truth_(temp__5825__auto__)){
var pid__$1 = temp__5825__auto__;
if(cljs.core.contains_QMARK_(new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()),pid__$1)){
var items_56984 = (function (){var or__5142__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-ui-items","plugin/installed-ui-items",1418448868),pid__$1], null));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var items_56985__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56476_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__56476_SHARP_)));
}),items_56984);
frontend.state.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-ui-items","plugin/installed-ui-items",1418448868),pid__$1], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(items_56985__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,opts,pid__$1], null))], 0));

return true;
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.plugin.unregister_plugin_ui_items = (function frontend$handler$plugin$unregister_plugin_ui_items(pid){
return frontend.state.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-ui-items","plugin/installed-ui-items",1418448868),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid)], null),cljs.core.PersistentVector.EMPTY], 0));
});

frontend.handler.plugin.register_plugin_resources = (function frontend$handler$plugin$register_plugin_resources(pid,type,p__56489){
var map__56490 = p__56489;
var map__56490__$1 = cljs.core.__destructure_map(map__56490);
var opts = map__56490__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56490__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var temp__5825__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
if(cljs.core.truth_(temp__5825__auto__)){
var pid__$1 = temp__5825__auto__;
var temp__5825__auto____$1 = (function (){var and__5140__auto__ = key;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto____$1)){
var type__$1 = temp__5825__auto____$1;
var path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-resources","plugin/installed-resources",-1742961043),pid__$1,type__$1], null);
frontend.state.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),key,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pid","pid",1018387698),pid__$1], null)], 0))], 0));

return true;
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.plugin.unregister_plugin_resource = (function frontend$handler$plugin$unregister_plugin_resource(pid,type,key){
var temp__5825__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
if(cljs.core.truth_(temp__5825__auto__)){
var pid__$1 = temp__5825__auto__;
var temp__5825__auto____$1 = (function (){var and__5140__auto__ = key;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto____$1)){
var type__$1 = temp__5825__auto____$1;
var path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-resources","plugin/installed-resources",-1742961043),pid__$1,type__$1], null);
frontend.state.swap_state_BANG_((function (state){
var resources = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,path);
var resources_SINGLEQUOTE_ = (function (){var G__56512 = resources;
if((G__56512 == null)){
return null;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56512,key);
}
})();
if(cljs.core.seq(resources_SINGLEQUOTE_)){
return cljs.core.assoc_in(state,path,resources_SINGLEQUOTE_);
} else {
return medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2(state,path);
}
}));

return true;
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.plugin.unregister_plugin_resources = (function frontend$handler$plugin$unregister_plugin_resources(pid){
var temp__5825__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
if(cljs.core.truth_(temp__5825__auto__)){
var pid__$1 = temp__5825__auto__;
var had_routes_QMARK__56992 = cljs.core.contains_QMARK_(cljs.core.deref(frontend.handler.plugin._STAR_route_renderer_providers),pid__$1);
frontend.state.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(medley.core.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-resources","plugin/installed-resources",-1742961043),pid__$1], null)], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.handler.plugin._STAR_route_renderer_providers,cljs.core.disj,pid__$1);

if(had_routes_QMARK__56992){
(frontend.handler.plugin.schedule_route_renderer_refresh_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.plugin.schedule_route_renderer_refresh_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.handler.plugin.schedule_route_renderer_refresh_BANG_.call(null));
} else {
}

return true;
} else {
return null;
}
});
frontend.handler.plugin.register_plugin_search_service = (function frontend$handler$plugin$register_plugin_search_service(pid,name,opts){
var temp__5825__auto__ = (function (){var and__5140__auto__ = name;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var pid__$1 = temp__5825__auto__;
return frontend.state.install_plugin_service.cljs$core$IFn$_invoke$arity$4(pid__$1,new cljs.core.Keyword(null,"search","search",1564939822),name,opts);
} else {
return null;
}
});
frontend.handler.plugin.unregister_plugin_search_services = (function frontend$handler$plugin$unregister_plugin_search_services(pid){
var temp__5825__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
if(cljs.core.truth_(temp__5825__auto__)){
var pid__$1 = temp__5825__auto__;
return frontend.state.uninstall_plugin_service(pid__$1,new cljs.core.Keyword(null,"search","search",1564939822));
} else {
return null;
}
});
frontend.handler.plugin.unregister_plugin_themes = (function frontend$handler$plugin$unregister_plugin_themes(var_args){
var G__56533 = arguments.length;
switch (G__56533) {
case 1:
return frontend.handler.plugin.unregister_plugin_themes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.plugin.unregister_plugin_themes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.plugin.unregister_plugin_themes.cljs$core$IFn$_invoke$arity$1 = (function (pid){
return frontend.handler.plugin.unregister_plugin_themes.cljs$core$IFn$_invoke$arity$2(pid,true);
}));

(frontend.handler.plugin.unregister_plugin_themes.cljs$core$IFn$_invoke$arity$2 = (function (pid,effect){
return LSPluginCore.unregisterTheme(cljs.core.name(pid),effect);
}));

(frontend.handler.plugin.unregister_plugin_themes.cljs$lang$maxFixedArity = 2);

frontend.handler.plugin.get_installed_hooks = (function frontend$handler$plugin$get_installed_hooks(){
return new cljs.core.Keyword("plugin","installed-hooks","plugin/installed-hooks",-227057271).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0());
});
frontend.handler.plugin.plugin_hook_installed_QMARK_ = (function frontend$handler$plugin$plugin_hook_installed_QMARK_(pid,hook){
var temp__5825__auto__ = (function (){var and__5140__auto__ = pid;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.handler.plugin.get_installed_hooks();
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var hooks = temp__5825__auto__;
return cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(hooks,hook),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid));
} else {
return null;
}
});
frontend.handler.plugin.db_block_hook_installed_QMARK_ = (function frontend$handler$plugin$db_block_hook_installed_QMARK_(uuid){
var temp__5825__auto__ = (function (){var and__5140__auto__ = uuid;
if(cljs.core.truth_(and__5140__auto__)){
return (""+"hook:db:block_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)),"-","_")));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var hook = temp__5825__auto__;
return cljs.core.boolean$(cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.get_installed_hooks(),hook)));
} else {
return null;
}
});
frontend.handler.plugin.create_local_renderer_register = (function frontend$handler$plugin$create_local_renderer_register(type,_STAR_providers){
return (function (pid,key,p__56543){
var map__56544 = p__56543;
var map__56544__$1 = cljs.core.__destructure_map(map__56544);
var opts = map__56544__$1;
var subs_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56544__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56544__$1,new cljs.core.Keyword(null,"render","render",-1408033454));
var temp__5825__auto__ = (function (){var and__5140__auto__ = key;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var key__$1 = temp__5825__auto__;
var pid__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
frontend.handler.plugin.register_plugin_resources(pid__$1,type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),key__$1,new cljs.core.Keyword(null,"subs","subs",-186681991),subs_SINGLEQUOTE_,new cljs.core.Keyword(null,"render","render",-1408033454),render], null)], 0)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_providers,cljs.core.conj,pid__$1);

return (function (){
frontend.handler.plugin.unregister_plugin_resource(pid__$1,type,key__$1);

if(cljs.core.seq(frontend.state.get_plugin_resources_with_type(pid__$1,type))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_providers,cljs.core.disj,pid__$1);
}
});
} else {
return null;
}
});
});
frontend.handler.plugin.create_local_renderer_getter = (function frontend$handler$plugin$create_local_renderer_getter(var_args){
var G__56546 = arguments.length;
switch (G__56546) {
case 2:
return frontend.handler.plugin.create_local_renderer_getter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.handler.plugin.create_local_renderer_getter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.plugin.create_local_renderer_getter.cljs$core$IFn$_invoke$arity$2 = (function (type,_STAR_providers){
return frontend.handler.plugin.create_local_renderer_getter.cljs$core$IFn$_invoke$arity$3(type,_STAR_providers,false);
}));

(frontend.handler.plugin.create_local_renderer_getter.cljs$core$IFn$_invoke$arity$3 = (function (type,_STAR_providers,many_QMARK_){
return (function (key){
if(cljs.core.seq(cljs.core.deref(_STAR_providers))){
if(cljs.core.truth_(key)){
var temp__5825__auto__ = cljs.core.seq(cljs.core.flatten(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (pid){
return frontend.state.get_plugin_resource(pid,type,key);
}),cljs.core.deref(_STAR_providers)))));
if(temp__5825__auto__){
var rs = temp__5825__auto__;
if(cljs.core.truth_(many_QMARK_)){
return rs;
} else {
return cljs.core.first(rs);
}
} else {
return null;
}
} else {
return cljs.core.seq(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (pid){
var G__56547 = frontend.state.get_plugin_resources_with_type(pid,type);
if((G__56547 == null)){
return null;
} else {
return cljs.core.vals(G__56547);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(_STAR_providers)], 0)));
}
} else {
return null;
}
});
}));

(frontend.handler.plugin.create_local_renderer_getter.cljs$lang$maxFixedArity = 3);

if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.plugin !== 'undefined') && (typeof frontend.handler.plugin._STAR_fenced_code_providers !== 'undefined')){
} else {
frontend.handler.plugin._STAR_fenced_code_providers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
frontend.handler.plugin.register_fenced_code_renderer = frontend.handler.plugin.create_local_renderer_register(new cljs.core.Keyword(null,"fenced-code-renderers","fenced-code-renderers",2028100130),frontend.handler.plugin._STAR_fenced_code_providers);
frontend.handler.plugin.hook_fenced_code_by_lang = frontend.handler.plugin.create_local_renderer_getter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fenced-code-renderers","fenced-code-renderers",2028100130),frontend.handler.plugin._STAR_fenced_code_providers);
frontend.handler.plugin._STAR_extensions_enhancer_providers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
frontend.handler.plugin.register_extensions_enhancer = frontend.handler.plugin.create_local_renderer_register(new cljs.core.Keyword(null,"extensions-enhancers","extensions-enhancers",-1229704403),frontend.handler.plugin._STAR_extensions_enhancer_providers);
frontend.handler.plugin.hook_extensions_enhancers_by_key = frontend.handler.plugin.create_local_renderer_getter.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"extensions-enhancers","extensions-enhancers",-1229704403),frontend.handler.plugin._STAR_extensions_enhancer_providers,true);
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.plugin !== 'undefined') && (typeof frontend.handler.plugin._STAR_route_renderer_providers !== 'undefined')){
} else {
frontend.handler.plugin._STAR_route_renderer_providers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.plugin !== 'undefined') && (typeof frontend.handler.plugin._STAR_route_renderer_refresh_fn !== 'undefined')){
} else {
frontend.handler.plugin._STAR_route_renderer_refresh_fn = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.plugin !== 'undefined') && (typeof frontend.handler.plugin._STAR_route_renderer_refresh_scheduled_QMARK_ !== 'undefined')){
} else {
frontend.handler.plugin._STAR_route_renderer_refresh_scheduled_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
/**
 * Registers a 0-arg fn invoked (debounced via microtask) whenever the set of
 * plugin route renderers changes. Called from `frontend.core/set-router!`.
 */
frontend.handler.plugin.set_route_renderer_refresh_fn_BANG_ = (function frontend$handler$plugin$set_route_renderer_refresh_fn_BANG_(f){
return cljs.core.reset_BANG_(frontend.handler.plugin._STAR_route_renderer_refresh_fn,f);
});
frontend.handler.plugin.schedule_route_renderer_refresh_BANG_ = (function frontend$handler$plugin$schedule_route_renderer_refresh_BANG_(){
var temp__5825__auto__ = cljs.core.deref(frontend.handler.plugin._STAR_route_renderer_refresh_fn);
if(cljs.core.truth_(temp__5825__auto__)){
var f = temp__5825__auto__;
if(cljs.core.compare_and_set_BANG_(frontend.handler.plugin._STAR_route_renderer_refresh_scheduled_QMARK_,false,true)){
return setTimeout((function (){
cljs.core.reset_BANG_(frontend.handler.plugin._STAR_route_renderer_refresh_scheduled_QMARK_,false);

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}catch (e56551){var e = e56551;
return console.error("[plugin] refresh route renderer failed",e);
}}),(0));
} else {
return null;
}
} else {
return null;
}
});
var base_register_57003 = frontend.handler.plugin.create_local_renderer_register(new cljs.core.Keyword(null,"route-renderers","route-renderers",254600293),frontend.handler.plugin._STAR_route_renderer_providers);
frontend.handler.plugin.register_route_renderer = (function frontend$handler$plugin$register_route_renderer(pid,key,opts){
var unregister = base_register_57003(pid,key,opts);
frontend.handler.plugin.schedule_route_renderer_refresh_BANG_();

if(cljs.core.fn_QMARK_(unregister)){
return (function (){
var r = (unregister.cljs$core$IFn$_invoke$arity$0 ? unregister.cljs$core$IFn$_invoke$arity$0() : unregister.call(null));
frontend.handler.plugin.schedule_route_renderer_refresh_BANG_();

return r;
});
} else {
return null;
}
});
frontend.handler.plugin.get_route_renderers = frontend.handler.plugin.create_local_renderer_getter.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"route-renderers","route-renderers",254600293),frontend.handler.plugin._STAR_route_renderer_providers,true);
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.plugin !== 'undefined') && (typeof frontend.handler.plugin._STAR_daemon_renderer_providers !== 'undefined')){
} else {
frontend.handler.plugin._STAR_daemon_renderer_providers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
frontend.handler.plugin.register_daemon_renderer = frontend.handler.plugin.create_local_renderer_register(new cljs.core.Keyword(null,"daemon-renderers","daemon-renderers",-245158167),frontend.handler.plugin._STAR_daemon_renderer_providers);
frontend.handler.plugin.get_daemon_renderers = frontend.handler.plugin.create_local_renderer_getter.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"daemon-renderers","daemon-renderers",-245158167),frontend.handler.plugin._STAR_daemon_renderer_providers,true);
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.plugin !== 'undefined') && (typeof frontend.handler.plugin._STAR_hosted_renderer_providers !== 'undefined')){
} else {
frontend.handler.plugin._STAR_hosted_renderer_providers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
frontend.handler.plugin._register_hosted = frontend.handler.plugin.create_local_renderer_register(new cljs.core.Keyword(null,"hosted-renderers","hosted-renderers",-1605312759),frontend.handler.plugin._STAR_hosted_renderer_providers);
frontend.handler.plugin._register_block = frontend.handler.plugin.create_local_renderer_register(new cljs.core.Keyword(null,"block-renderers","block-renderers",2120283086),frontend.handler.plugin._STAR_hosted_renderer_providers);
frontend.handler.plugin._register_block_properties = frontend.handler.plugin.create_local_renderer_register(new cljs.core.Keyword(null,"block-properties-renderers","block-properties-renderers",-1215658557),frontend.handler.plugin._STAR_hosted_renderer_providers);
/**
 * Unified renderer registration.  Routes by `:type` in opts:
 *   "block"            → block renderer storage
 *   "block-properties" → block-properties renderer storage
 *   else               → hosted renderer storage (sidebar, etc.)
 */
frontend.handler.plugin.register_hosted_renderer = (function frontend$handler$plugin$register_hosted_renderer(pid,key,opts){
var register_fn = (function (){var G__56552 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(opts);
switch (G__56552) {
case "block":
return frontend.handler.plugin._register_block;

break;
case "block-properties":
return frontend.handler.plugin._register_block_properties;

break;
default:
return frontend.handler.plugin._register_hosted;

}
})();
return (register_fn.cljs$core$IFn$_invoke$arity$3 ? register_fn.cljs$core$IFn$_invoke$arity$3(pid,key,opts) : register_fn.call(null,pid,key,opts));
});
frontend.handler.plugin.get_hosted_renderers = frontend.handler.plugin.create_local_renderer_getter.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"hosted-renderers","hosted-renderers",-1605312759),frontend.handler.plugin._STAR_hosted_renderer_providers,true);
frontend.handler.plugin.resolve_hosted_render = (function frontend$handler$plugin$resolve_hosted_render(pid,key,type){
var G__56557 = frontend.handler.plugin.get_hosted_renderers();
if((G__56557 == null)){
return null;
} else {
return medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p1__56556_SHARP_){
var and__5140__auto__ = (function (){var G__56558 = new cljs.core.Keyword(null,"pid","pid",1018387698).cljs$core$IFn$_invoke$arity$1(p1__56556_SHARP_);
var G__56558__$1 = (((G__56558 == null))?null:cljs.core.name(G__56558));
if((G__56558__$1 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__56558__$1,pid);
}
})();
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = (function (){var or__5142__auto__ = (function (){var G__56559 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__56556_SHARP_);
var G__56559__$1 = (((G__56559 == null))?null:cljs.core.name(G__56559));
if((G__56559__$1 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__56559__$1,key);
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var G__56560 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__56556_SHARP_);
var G__56560__$1 = (((G__56560 == null))?null:(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56560)));
if((G__56560__$1 == null)){
return null;
} else {
return clojure.string.includes_QMARK_(G__56560__$1,(""+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)));
}
}
})();
if(cljs.core.truth_(and__5140__auto____$1)){
var G__56561 = type;
var G__56561__$1 = (((G__56561 == null))?null:cljs.core.name(G__56561));
if((G__56561__$1 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__56556_SHARP_),G__56561__$1);
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}),G__56557);
}
});
frontend.handler.plugin.__GT_block_renderer_properties_js = (function frontend$handler$plugin$__GT_block_renderer_properties_js(properties_map){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56562){
var vec__56563 = p__56562;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56563,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56563,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)),(1)),v], null);
}),properties_map));
});
frontend.handler.plugin.normalize_block_renderer_match_context = (function frontend$handler$plugin$normalize_block_renderer_match_context(p__56569){
var map__56570 = p__56569;
var map__56570__$1 = cljs.core.__destructure_map(map__56570);
var match_context = map__56570__$1;
var block_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56570__$1,new cljs.core.Keyword(null,"block-id","block-id",-70582834));
var properties_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56570__$1,new cljs.core.Keyword(null,"properties-map","properties-map",-1636902782));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56570__$1,new cljs.core.Keyword(null,"props","props",453281727));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56570__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56570__$1,new cljs.core.Keyword(null,"page","page",849072397));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56570__$1,new cljs.core.Keyword(null,"content","content",15833224));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56570__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
if(cljs.core.contains_QMARK_(match_context,new cljs.core.Keyword(null,"properties-map","properties-map",-1636902782))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(match_context,new cljs.core.Keyword(null,"props","props",453281727),(function (){var or__5142__auto__ = props;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.clj__GT_js((function (){var G__56571 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blockId","blockId",-1419159445),block_id,new cljs.core.Keyword(null,"properties","properties",685819552),frontend.handler.plugin.__GT_block_renderer_properties_js(properties_map)], null);
var G__56571__$1 = (cljs.core.truth_(uuid)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56571,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),uuid):G__56571);
var G__56571__$2 = (cljs.core.truth_(page)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56571__$1,new cljs.core.Keyword(null,"page","page",849072397),page):G__56571__$1);
var G__56571__$3 = (cljs.core.truth_(content)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56571__$2,new cljs.core.Keyword(null,"content","content",15833224),content):G__56571__$2);
if(cljs.core.truth_(format)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56571__$3,new cljs.core.Keyword(null,"format","format",-1306924766),format);
} else {
return G__56571__$3;
}
})());
}
})());
} else {
var G__56572 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"properties-map","properties-map",-1636902782),match_context], null);
return (frontend.handler.plugin.normalize_block_renderer_match_context.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.plugin.normalize_block_renderer_match_context.cljs$core$IFn$_invoke$arity$1(G__56572) : frontend.handler.plugin.normalize_block_renderer_match_context.call(null,G__56572));
}
});
frontend.handler.plugin.promise_like_QMARK_ = (function frontend$handler$plugin$promise_like_QMARK_(result){
var or__5142__auto__ = (result instanceof Promise);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var G__56573 = result;
var G__56573__$1 = (((G__56573 == null))?null:(G__56573["then"]));
if((G__56573__$1 == null)){
return null;
} else {
return cljs.core.fn_QMARK_(G__56573__$1);
}
}
});
/**
 * Run a synchronous predicate against JS props for any block renderer type.
 * `error-tag` is a keyword prefix used to distinguish log messages,
 * e.g. :block-renderer or :block-properties-renderer.
 */
frontend.handler.plugin.match_renderer_predicate = (function frontend$handler$plugin$match_renderer_predicate(error_tag,predicate,p__56574,p__56575){
var map__56576 = p__56574;
var map__56576__$1 = cljs.core.__destructure_map(map__56576);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56576__$1,new cljs.core.Keyword(null,"props","props",453281727));
var map__56577 = p__56575;
var map__56577__$1 = cljs.core.__destructure_map(map__56577);
var pid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56577__$1,new cljs.core.Keyword(null,"pid","pid",1018387698));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56577__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
try{var result = (predicate.cljs$core$IFn$_invoke$arity$1 ? predicate.cljs$core$IFn$_invoke$arity$1(props) : predicate.call(null,props));
if(cljs.core.truth_(frontend.handler.plugin.promise_like_QMARK_(result))){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.plugin",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(error_tag))+"-predicate-async")),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pid","pid",1018387698),pid,new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"message","message",-406056002),(""+"`when` predicate for "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(error_tag))+" must return synchronously.")], null),new cljs.core.Keyword(null,"line","line",212345235),737])),null);
} else {
}

return false;
} else {
return cljs.core.boolean$(result);

}
}catch (e56578){var error = e56578;
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.plugin",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(error_tag))+"-predicate-exception")),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pid","pid",1018387698),pid,new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"error","error",-978969032),error], null),new cljs.core.Keyword(null,"line","line",212345235),746])),null);
} else {
}

return false;
}});
/**
 * Match a block-properties renderer condition against a block.
 * condition may be nil, a declarative condition map like {:has `ident`},
 * or a synchronous predicate receiving JS props {:blockId :properties}.
 * properties-map is a map of keyword db-idents -> values.
 */
frontend.handler.plugin.match_block_properties_condition = (function frontend$handler$plugin$match_block_properties_condition(condition,match_context,renderer){
var map__56581 = frontend.handler.plugin.normalize_block_renderer_match_context(match_context);
var map__56581__$1 = cljs.core.__destructure_map(map__56581);
var match_context_SINGLEQUOTE_ = map__56581__$1;
var properties_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56581__$1,new cljs.core.Keyword(null,"properties-map","properties-map",-1636902782));
if((condition == null)){
return true;
} else {
if(cljs.core.fn_QMARK_(condition)){
return frontend.handler.plugin.match_renderer_predicate(new cljs.core.Keyword(null,"block-properties-renderer","block-properties-renderer",691572892),condition,match_context_SINGLEQUOTE_,renderer);
} else {
var op = (function (){var G__56582 = condition;
var G__56582__$1 = (((G__56582 == null))?null:cljs.core.first(G__56582));
if((G__56582__$1 == null)){
return null;
} else {
return cljs.core.key(G__56582__$1);
}
})();
var arg = (function (){var G__56584 = condition;
var G__56584__$1 = (((G__56584 == null))?null:cljs.core.first(G__56584));
if((G__56584__$1 == null)){
return null;
} else {
return cljs.core.val(G__56584__$1);
}
})();
var G__56585 = op;
var G__56585__$1 = (((G__56585 instanceof cljs.core.Keyword))?G__56585.fqn:null);
switch (G__56585__$1) {
case "has":
return cljs.core.contains_QMARK_(properties_map,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(arg));

break;
case "equals":
var vec__56586 = arg;
var prop_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56586,(0),null);
var expected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56586,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties_map,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(prop_key)),expected);

break;
case "in":
var vec__56589 = arg;
var prop_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56589,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56589,(1),null);
return cljs.core.contains_QMARK_(cljs.core.set(coll),cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties_map,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(prop_key)));

break;
case "not":
return cljs.core.not((frontend.handler.plugin.match_block_properties_condition.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.plugin.match_block_properties_condition.cljs$core$IFn$_invoke$arity$3(arg,match_context_SINGLEQUOTE_,renderer) : frontend.handler.plugin.match_block_properties_condition.call(null,arg,match_context_SINGLEQUOTE_,renderer)));

break;
case "any":
return cljs.core.some((function (p1__56579_SHARP_){
return (frontend.handler.plugin.match_block_properties_condition.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.plugin.match_block_properties_condition.cljs$core$IFn$_invoke$arity$3(p1__56579_SHARP_,match_context_SINGLEQUOTE_,renderer) : frontend.handler.plugin.match_block_properties_condition.call(null,p1__56579_SHARP_,match_context_SINGLEQUOTE_,renderer));
}),arg);

break;
case "all":
return cljs.core.every_QMARK_((function (p1__56580_SHARP_){
return (frontend.handler.plugin.match_block_properties_condition.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.plugin.match_block_properties_condition.cljs$core$IFn$_invoke$arity$3(p1__56580_SHARP_,match_context_SINGLEQUOTE_,renderer) : frontend.handler.plugin.match_block_properties_condition.call(null,p1__56580_SHARP_,match_context_SINGLEQUOTE_,renderer));
}),arg);

break;
default:
return true;

}

}
}
});
/**
 * Serialize a property value so it survives `clj->js`.
 * This fn converts:
 *   - Block maps   → {:uuid "..." :title "..."}  (js object)
 *   - Set/coll of block maps → JS array of the above
 *   - keyword      → ":ns/name" string
 *   - uuid         → string
 *   - other values → as-is
 */
frontend.handler.plugin.serialize_property_value_for_plugin = (function frontend$handler$plugin$serialize_property_value_for_plugin(v){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.map_QMARK_(v);
if(and__5140__auto__){
var or__5142__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v);
}
}
} else {
return and__5140__auto__;
}
})())){
var m = (function (){var G__56597 = cljs.core.PersistentArrayMap.EMPTY;
var G__56597__$1 = (cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(v))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56597,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(v)))):G__56597);
if(cljs.core.truth_(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(v))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56597__$1,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(v));
} else {
return G__56597__$1;
}
})();
if(cljs.core.seq(m)){
return m;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)));
}
} else {
if(cljs.core.set_QMARK_(v)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.serialize_property_value_for_plugin,v);
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.sequential_QMARK_(v);
if(and__5140__auto__){
return cljs.core.some((function (p1__56595_SHARP_){
var and__5140__auto____$1 = cljs.core.map_QMARK_(p1__56595_SHARP_);
if(and__5140__auto____$1){
var or__5142__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(p1__56595_SHARP_);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(p1__56595_SHARP_);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p1__56595_SHARP_);
}
}
} else {
return and__5140__auto____$1;
}
}),v);
} else {
return and__5140__auto__;
}
})())){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.serialize_property_value_for_plugin,v);
} else {
if((v instanceof cljs.core.Keyword)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)),(1));
} else {
if(cljs.core.uuid_QMARK_(v)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
} else {
return v;

}
}
}
}
}
});
frontend.handler.plugin.get_block_renderers = frontend.handler.plugin.create_local_renderer_getter.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"block-renderers","block-renderers",2120283086),frontend.handler.plugin._STAR_hosted_renderer_providers,true);
frontend.handler.plugin.any_block_renderers_QMARK_ = (function frontend$handler$plugin$any_block_renderers_QMARK_(){
return cljs.core.boolean$(cljs.core.seq(frontend.handler.plugin.get_block_renderers(null)));
});
/**
 * Return the highest priority matched block renderer for a block.
 */
frontend.handler.plugin.get_matched_block_renderer = (function frontend$handler$plugin$get_matched_block_renderer(match_context){
var temp__5825__auto__ = frontend.handler.plugin.get_block_renderers(null);
if(cljs.core.truth_(temp__5825__auto__)){
var rs = temp__5825__auto__;
var match_context_SINGLEQUOTE_ = frontend.handler.plugin.normalize_block_renderer_match_context(match_context);
return cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__56604_SHARP_){
return (- (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(p1__56604_SHARP_);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})());
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (renderer){
var predicate = new cljs.core.Keyword(null,"when","when",-576417306).cljs$core$IFn$_invoke$arity$1(renderer);
if(cljs.core.truth_(predicate)){
return frontend.handler.plugin.match_renderer_predicate(new cljs.core.Keyword(null,"block-renderer","block-renderer",-1213338060),predicate,match_context_SINGLEQUOTE_,renderer);
} else {
return true;
}
}),rs)));
} else {
return null;
}
});
frontend.handler.plugin.get_block_properties_renderers = frontend.handler.plugin.create_local_renderer_getter.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"block-properties-renderers","block-properties-renderers",-1215658557),frontend.handler.plugin._STAR_hosted_renderer_providers,true);
/**
 * Return all registered block-properties renderers whose :when condition
 * matches the given properties-map.  Sorted by :priority descending.
 */
frontend.handler.plugin.get_matched_block_properties_renderers = (function frontend$handler$plugin$get_matched_block_properties_renderers(match_context){
var temp__5825__auto__ = frontend.handler.plugin.get_block_properties_renderers(null);
if(cljs.core.truth_(temp__5825__auto__)){
var rs = temp__5825__auto__;
var match_context_SINGLEQUOTE_ = frontend.handler.plugin.normalize_block_renderer_match_context(match_context);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__56612_SHARP_){
return (- (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(p1__56612_SHARP_);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})());
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56611_SHARP_){
return frontend.handler.plugin.match_block_properties_condition(new cljs.core.Keyword(null,"when","when",-576417306).cljs$core$IFn$_invoke$arity$1(p1__56611_SHARP_),match_context_SINGLEQUOTE_,p1__56611_SHARP_);
}),rs));
} else {
return null;
}
});
frontend.handler.plugin.select_a_plugin_theme = (function frontend$handler$plugin$select_a_plugin_theme(pid){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.group_by(new cljs.core.Keyword(null,"pid","pid",1018387698),new cljs.core.Keyword("plugin","installed-themes","plugin/installed-themes",1969555197).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0())),pid);
if(cljs.core.truth_(temp__5825__auto__)){
var themes = temp__5825__auto__;
var temp__5825__auto____$1 = frontend.handler.plugin.assets_theme_to_file(cljs.core.first(themes));
if(cljs.core.truth_(temp__5825__auto____$1)){
var theme = temp__5825__auto____$1;
return LSPluginCore.selectTheme(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(theme));
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.plugin.update_plugin_settings_state = (function frontend$handler$plugin$update_plugin_settings_state(id,settings){
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034),id,new cljs.core.Keyword(null,"settings","settings",1556144875)], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(settings,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.boolean$(new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(settings))));
});
frontend.handler.plugin.open_settings_file_in_default_app_BANG_ = (function frontend$handler$plugin$open_settings_file_in_default_app_BANG_(id_or_plugin){
var temp__5825__auto__ = ((cljs.core.coll_QMARK_(id_or_plugin))?id_or_plugin:frontend.state.get_plugin_by_id(id_or_plugin));
if(cljs.core.truth_(temp__5825__auto__)){
var plugin = temp__5825__auto__;
var temp__5825__auto____$1 = new cljs.core.Keyword(null,"usf","usf",-1824885303).cljs$core$IFn$_invoke$arity$1(plugin);
if(cljs.core.truth_(temp__5825__auto____$1)){
var file_path = temp__5825__auto____$1;
return apis.openPath(file_path);
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.plugin.open_plugin_settings_BANG_ = (function frontend$handler$plugin$open_plugin_settings_BANG_(var_args){
var G__56624 = arguments.length;
switch (G__56624) {
case 1:
return frontend.handler.plugin.open_plugin_settings_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.plugin.open_plugin_settings_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.plugin.open_plugin_settings_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (id){
return frontend.handler.plugin.open_plugin_settings_BANG_.cljs$core$IFn$_invoke$arity$2(id,false);
}));

(frontend.handler.plugin.open_plugin_settings_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (id,nav_QMARK_){
var temp__5825__auto__ = (function (){var and__5140__auto__ = id;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.state.get_plugin_by_id(id);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var plugin = temp__5825__auto__;
if(cljs.core.truth_(frontend.handler.plugin.has_setting_schema_QMARK_(id))){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("go","plugins-settings","go/plugins-settings",-583021288),id,nav_QMARK_,(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plugin);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(plugin);
}
})()], null));
} else {
return frontend.handler.plugin.open_settings_file_in_default_app_BANG_(plugin);
}
} else {
return null;
}
}));

(frontend.handler.plugin.open_plugin_settings_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.plugin.open_report_modal_BANG_ = (function frontend$handler$plugin$open_report_modal_BANG_(var_args){
var G__56630 = arguments.length;
switch (G__56630) {
case 0:
return frontend.handler.plugin.open_report_modal_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return frontend.handler.plugin.open_report_modal_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.plugin.open_report_modal_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.handler.plugin.open_report_modal_BANG_.cljs$core$IFn$_invoke$arity$2(null,null);
}));

(frontend.handler.plugin.open_report_modal_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (pid,name){
var G__56631 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-1","div.p-1",-1297123687),(cljs.core.truth_(pid)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.opacity-90.font-bold.pb-1.flex.item-center.gap-1","h1.opacity-90.font-bold.pb-1.flex.item-center.gap-1",-1185476214),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-red-rx-10.flex.items-center","span.text-red-rx-10.flex.items-center",1894461045),logseq.shui.ui.tabler_icon("alert-triangle-filled",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(20)], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),name,"  ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"#",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pid))], null)], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.interpolate_rich_text_node.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","report-modal-desc","plugin/report-modal-desc",1103576149)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.hover:underline","a.hover:underline",-1510791830),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),(""+"mailto://support@logseq.com?subject=Report plugin from Logseq Marketplace"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(pid)?(""+" (#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pid)+")"):null)))], null),"support@logseq.com"], null)], null))], null)], null);
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1(G__56631) : logseq.shui.ui.dialog_open_BANG_.call(null,G__56631));
}));

(frontend.handler.plugin.open_report_modal_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.plugin.parse_user_md_content = (function frontend$handler$plugin$parse_user_md_content(content,p__56632){
var map__56633 = p__56632;
var map__56633__$1 = cljs.core.__destructure_map(map__56633);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56633__$1,new cljs.core.Keyword(null,"url","url",276297046));
try{if(clojure.string.blank_QMARK_(content)){
return null;
} else {
var content__$1 = (((!(clojure.string.blank_QMARK_(url))))?clojure.string.replace(content,/!\[[^\]]*\]\((.*?)\s*(\"(?:.*[^\"])\")?\s*\)/,(function (p__56639){
var vec__56640 = p__56639;
var matched = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56640,(0),null);
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56640,(1),null);
if(cljs.core.truth_((function (){var and__5140__auto__ = link;
if(cljs.core.truth_(and__5140__auto__)){
return (!(clojure.string.starts_with_QMARK_(link,"http")));
} else {
return and__5140__auto__;
}
})())){
return clojure.string.replace(matched,link,(frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(url,link) : frontend.util.node_path.join.call(null,url,link)));
} else {
return matched;
}
})):content);
return frontend.format.to_html(content__$1,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"markdown","markdown",1227225089)));
}
}catch (e56634){var e = e56634;
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.plugin",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parse-user-md-exception","parse-user-md-exception",168116088),e,new cljs.core.Keyword(null,"line","line",212345235),909], null)),null);
} else {
}

return content;
}});
frontend.handler.plugin.open_readme_BANG_ = (function frontend$handler$plugin$open_readme_BANG_(url,item,display){
var repo = new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1(item);
if((repo == null)){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.plugin.invoke_exported_api.cljs$core$IFn$_invoke$arity$variadic("load_plugin_readme",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))),(function (content){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.plugin.parse_user_md_content(content,item)),(function (content__$1){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var and__5140__auto__ = clojure.string.blank_QMARK_(clojure.string.trim(content__$1));
if(and__5140__auto__){
throw (new Error("blank readme content"));
} else {
return and__5140__auto__;
}
})()),(function (___27434__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","active-readme","plugin/active-readme",-677043988),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [content__$1,item], null))),(function (___27434__auto____$1){
return promesa.protocols._promise((function (){var G__56644 = (function (_){
return (display.cljs$core$IFn$_invoke$arity$0 ? display.cljs$core$IFn$_invoke$arity$0() : display.call(null));
});
var G__56645 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"plugin-readme",new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"max-h-[86vh] overflow-auto"], null)], null);
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2(G__56644,G__56645) : logseq.shui.ui.dialog_open_BANG_.call(null,G__56644,G__56645));
})());
}));
}));
}));
}));
})),(function (p1__56643_SHARP_){
console.warn(p1__56643_SHARP_);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","readme-empty-warning","plugin/readme-empty-warning",549531361)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));
}));
} else {
var G__56646 = (function (_){
return (display.cljs$core$IFn$_invoke$arity$2 ? display.cljs$core$IFn$_invoke$arity$2(item,null) : display.call(null,item,null));
});
var G__56647 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"plugin-readme"], null);
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2(G__56646,G__56647) : logseq.shui.ui.dialog_open_BANG_.call(null,G__56646,G__56647));
}
});
frontend.handler.plugin.load_unpacked_plugin = (function frontend$handler$plugin$load_unpacked_plugin(){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["openDialog"], 0))),(function (path){
return promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword("plugin","selected-unpacked-pkg","plugin/selected-unpacked-pkg",-286319185).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()))?null:frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","selected-unpacked-pkg","plugin/selected-unpacked-pkg",-286319185),path)));
}));
}));
} else {
return null;
}
});
frontend.handler.plugin.reset_unpacked_state = (function frontend$handler$plugin$reset_unpacked_state(){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","selected-unpacked-pkg","plugin/selected-unpacked-pkg",-286319185),null);
});
frontend.handler.plugin.hook_plugin = (function frontend$handler$plugin$hook_plugin(tag,type,payload,plugin_id){
if(cljs.core.truth_(frontend.config.lsp_enabled_QMARK_)){
try{return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(LSPluginCore,(""+"hook"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.capitalize(cljs.core.name(tag)))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(type),((cljs.core.coll_QMARK_(payload))?cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(frontend.handler.plugin.normalize_keyword_for_json(payload)):payload),(((plugin_id instanceof cljs.core.Keyword))?cljs.core.name(plugin_id):plugin_id)], 0));
}catch (e56651){var e = e56651;
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.plugin",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"invoke-hook-exception","invoke-hook-exception",519764098),e,new cljs.core.Keyword(null,"line","line",212345235),952], null)),null);
} else {
return null;
}
}} else {
return null;
}
});
frontend.handler.plugin.hook_plugin_app = (function frontend$handler$plugin$hook_plugin_app(var_args){
var G__56653 = arguments.length;
switch (G__56653) {
case 2:
return frontend.handler.plugin.hook_plugin_app.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.handler.plugin.hook_plugin_app.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.plugin.hook_plugin_app.cljs$core$IFn$_invoke$arity$2 = (function (type,payload){
return frontend.handler.plugin.hook_plugin_app.cljs$core$IFn$_invoke$arity$3(type,payload,null);
}));

(frontend.handler.plugin.hook_plugin_app.cljs$core$IFn$_invoke$arity$3 = (function (type,payload,plugin_id){
return frontend.handler.plugin.hook_plugin(new cljs.core.Keyword(null,"app","app",-560961707),type,payload,plugin_id);
}));

(frontend.handler.plugin.hook_plugin_app.cljs$lang$maxFixedArity = 3);

frontend.handler.plugin.hook_plugin_editor = (function frontend$handler$plugin$hook_plugin_editor(var_args){
var G__56658 = arguments.length;
switch (G__56658) {
case 2:
return frontend.handler.plugin.hook_plugin_editor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.handler.plugin.hook_plugin_editor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.plugin.hook_plugin_editor.cljs$core$IFn$_invoke$arity$2 = (function (type,payload){
return frontend.handler.plugin.hook_plugin_editor.cljs$core$IFn$_invoke$arity$3(type,payload,null);
}));

(frontend.handler.plugin.hook_plugin_editor.cljs$core$IFn$_invoke$arity$3 = (function (type,payload,plugin_id){
return frontend.handler.plugin.hook_plugin(new cljs.core.Keyword(null,"editor","editor",-989377770),type,payload,plugin_id);
}));

(frontend.handler.plugin.hook_plugin_editor.cljs$lang$maxFixedArity = 3);

frontend.handler.plugin.hook_plugin_db = (function frontend$handler$plugin$hook_plugin_db(var_args){
var G__56661 = arguments.length;
switch (G__56661) {
case 2:
return frontend.handler.plugin.hook_plugin_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.handler.plugin.hook_plugin_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.plugin.hook_plugin_db.cljs$core$IFn$_invoke$arity$2 = (function (type,payload){
return frontend.handler.plugin.hook_plugin_db.cljs$core$IFn$_invoke$arity$3(type,payload,null);
}));

(frontend.handler.plugin.hook_plugin_db.cljs$core$IFn$_invoke$arity$3 = (function (type,payload,plugin_id){
return frontend.handler.plugin.hook_plugin(new cljs.core.Keyword(null,"db","db",993250759),type,payload,plugin_id);
}));

(frontend.handler.plugin.hook_plugin_db.cljs$lang$maxFixedArity = 3);

frontend.handler.plugin.hook_plugin_block_changes = (function frontend$handler$plugin$hook_plugin_block_changes(p__56664){
var map__56665 = p__56664;
var map__56665__$1 = cljs.core.__destructure_map(map__56665);
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56665__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var tx_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56665__$1,new cljs.core.Keyword(null,"tx-data","tx-data",934159761));
var tx_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56665__$1,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194));
var tx_data_SINGLEQUOTE_ = cljs.core.group_by(cljs.core.first,tx_data);
var blocks_SINGLEQUOTE_ = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56663_SHARP_){
var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(p1__56663_SHARP_);
if(cljs.core.truth_(temp__5825__auto__)){
var uuid = temp__5825__auto__;
return frontend.handler.plugin.db_block_hook_installed_QMARK_(uuid);
} else {
return null;
}
}),blocks);
var seq__56674 = cljs.core.seq(blocks_SINGLEQUOTE_);
var chunk__56675 = null;
var count__56676 = (0);
var i__56677 = (0);
while(true){
if((i__56677 < count__56676)){
var b = chunk__56675.cljs$core$IIndexed$_nth$arity$2(null,i__56677);
var type_57026 = (""+"block:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b)));
frontend.handler.plugin.hook_plugin_db.cljs$core$IFn$_invoke$arity$2(type_57026,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"block","block",664686210),b,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.get.cljs$core$IFn$_invoke$arity$2(tx_data_SINGLEQUOTE_,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(b)),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null));


var G__57027 = seq__56674;
var G__57028 = chunk__56675;
var G__57029 = count__56676;
var G__57030 = (i__56677 + (1));
seq__56674 = G__57027;
chunk__56675 = G__57028;
count__56676 = G__57029;
i__56677 = G__57030;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__56674);
if(temp__5825__auto__){
var seq__56674__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56674__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__56674__$1);
var G__57031 = cljs.core.chunk_rest(seq__56674__$1);
var G__57032 = c__5673__auto__;
var G__57033 = cljs.core.count(c__5673__auto__);
var G__57034 = (0);
seq__56674 = G__57031;
chunk__56675 = G__57032;
count__56676 = G__57033;
i__56677 = G__57034;
continue;
} else {
var b = cljs.core.first(seq__56674__$1);
var type_57035 = (""+"block:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b)));
frontend.handler.plugin.hook_plugin_db.cljs$core$IFn$_invoke$arity$2(type_57035,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"block","block",664686210),b,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.get.cljs$core$IFn$_invoke$arity$2(tx_data_SINGLEQUOTE_,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(b)),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null));


var G__57036 = cljs.core.next(seq__56674__$1);
var G__57037 = null;
var G__57038 = (0);
var G__57039 = (0);
seq__56674 = G__57036;
chunk__56675 = G__57037;
count__56676 = G__57038;
i__56677 = G__57039;
continue;
}
} else {
return null;
}
}
break;
}
});
frontend.handler.plugin.hook_plugin_block_slot = (function frontend$handler$plugin$hook_plugin_block_slot(block,payload){
var temp__5825__auto__ = (function (){var and__5140__auto__ = block;
if(cljs.core.truth_(and__5140__auto__)){
return (""+"slot:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var type = temp__5825__auto__;
return frontend.handler.plugin.hook_plugin_editor.cljs$core$IFn$_invoke$arity$3(type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([payload,block], 0)),null);
} else {
return null;
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.plugin !== 'undefined') && (typeof frontend.handler.plugin._STAR_ls_dotdir_root !== 'undefined')){
} else {
frontend.handler.plugin._STAR_ls_dotdir_root = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.handler.plugin.get_ls_dotdir_root = (function frontend$handler$plugin$get_ls_dotdir_root(){
return cljs.core.deref(frontend.handler.plugin._STAR_ls_dotdir_root);
});
frontend.handler.plugin.init_ls_dotdir_root = (function frontend$handler$plugin$init_ls_dotdir_root(){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(frontend.util.electron_QMARK_())?electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["getLogseqDotDirRoot"], 0)):"LSPUserDotRoot/"),(function (p1__56715_SHARP_){
cljs.core.reset_BANG_(frontend.handler.plugin._STAR_ls_dotdir_root,p1__56715_SHARP_);

return p1__56715_SHARP_;
}));
});
frontend.handler.plugin.make_fn_to_load_dotdir_json = (function frontend$handler$plugin$make_fn_to_load_dotdir_json(dirname,default$){
return (function (key){
var temp__5825__auto__ = (function (){var and__5140__auto__ = key;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.name(key);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var key__$1 = temp__5825__auto__;
var repo = frontend.state.get_current_repo();
var dotroot = frontend.handler.plugin.get_ls_dotdir_root();
var filepath = (function (){var G__56757 = dotroot;
var G__56758 = dirname;
var G__56759 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+".json");
return (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$3 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$3(G__56757,G__56758,G__56759) : frontend.util.node_path.join.call(null,G__56757,G__56758,G__56759));
})();
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.fs.create_if_not_exists.cljs$core$IFn$_invoke$arity$4(repo,null,filepath,JSON.stringify(default$))),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2(null,filepath)),(function (json){
return promesa.protocols._promise(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filepath,JSON.parse(((clojure.string.blank_QMARK_(json))?JSON.stringify(default$):json))], null));
}));
}));
}));
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.idb.get_item(filepath)),(function (data){
return promesa.protocols._promise(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filepath,(function (){var or__5142__auto__ = data;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return default$;
}
})()], null));
}));
}));
}
} else {
return null;
}
});
});
frontend.handler.plugin.make_fn_to_save_dotdir_json = (function frontend$handler$plugin$make_fn_to_save_dotdir_json(dirname){
return (function (key,data){
var temp__5825__auto__ = (function (){var and__5140__auto__ = key;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.name(key);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var key__$1 = temp__5825__auto__;
var repo = "";
var dotroot = frontend.handler.plugin.get_ls_dotdir_root();
var filepath = (function (){var G__56787 = dotroot;
var G__56788 = dirname;
var G__56789 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+".json");
return (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$3 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$3(G__56787,G__56788,G__56789) : frontend.util.node_path.join.call(null,G__56787,G__56788,G__56789));
})();
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return frontend.fs.write_plain_text_file_BANG_(repo,null,filepath,JSON.stringify(data,null,(2)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960),true], null));
} else {
return frontend.common.idb.set_item_BANG_(filepath,data);
}
} else {
return null;
}
});
});
frontend.handler.plugin.make_fn_to_unlink_dotdir_json = (function frontend$handler$plugin$make_fn_to_unlink_dotdir_json(dirname){
return (function (key){
var temp__5825__auto__ = (function (){var and__5140__auto__ = key;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.name(key);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var key__$1 = temp__5825__auto__;
var repo = "";
var dotroot = frontend.handler.plugin.get_ls_dotdir_root();
var filepath = (function (){var G__56813 = dotroot;
var G__56814 = dirname;
var G__56815 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)+".json");
return (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$3 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$3(G__56813,G__56814,G__56815) : frontend.util.node_path.join.call(null,G__56813,G__56814,G__56815));
})();
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return frontend.fs.unlink_BANG_(repo,filepath,null);
} else {
return frontend.common.idb.remove_item_BANG_(filepath);
}
} else {
return null;
}
});
});
frontend.handler.plugin.show_themes_modal_BANG_ = (function frontend$handler$plugin$show_themes_modal_BANG_(var_args){
var G__56817 = arguments.length;
switch (G__56817) {
case 0:
return frontend.handler.plugin.show_themes_modal_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.plugin.show_themes_modal_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.plugin.show_themes_modal_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.handler.plugin.show_themes_modal_BANG_.cljs$core$IFn$_invoke$arity$1(false);
}));

(frontend.handler.plugin.show_themes_modal_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (classic_QMARK_){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","show-themes-modal","modal/show-themes-modal",238725999),classic_QMARK_], null));
}));

(frontend.handler.plugin.show_themes_modal_BANG_.cljs$lang$maxFixedArity = 1);

frontend.handler.plugin.goto_plugins_dashboard_BANG_ = (function frontend$handler$plugin$goto_plugins_dashboard_BANG_(){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("go","plugins","go/plugins",1900072925)], null));
});
frontend.handler.plugin.goto_plugins_settings_BANG_ = (function frontend$handler$plugin$goto_plugins_settings_BANG_(){
var temp__5825__auto__ = cljs.core.first(cljs.core.seq(frontend.handler.plugin.get_enabled_plugins_if_setting_schema()));
if(cljs.core.truth_(temp__5825__auto__)){
var pl = temp__5825__auto__;
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("go","plugins-settings","go/plugins-settings",-583021288),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(pl)], null));
} else {
return null;
}
});
frontend.handler.plugin.get_user_default_plugins = (function frontend$handler$plugin$get_user_default_plugins(){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(frontend.util.electron_QMARK_())?electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["getUserDefaultPlugins"], 0)):frontend.handler.plugin.invoke_exported_api(new cljs.core.Keyword(null,"load_installed_web_plugins","load_installed_web_plugins",977747133))),(function (p1__56839_SHARP_){
return cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(p1__56839_SHARP_);
})),(function (plugins){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56840_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"url","url",276297046)],[p1__56840_SHARP_]);
}),plugins);
} else {
var G__56845 = cljs.core.vals(plugins);
if((G__56845 == null)){
return null;
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56841_SHARP_){
return new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__56841_SHARP_);
}),G__56845);
}
}
})),(function (e){
return console.error("[get-user-default-plugins:error]",e);
}));
});
frontend.handler.plugin.set_auto_checking_BANG_ = (function frontend$handler$plugin$set_auto_checking_BANG_(v){
var v__$1 = cljs.core.boolean$(v);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Updates: ",((v__$1)?"start":"finish")," auto-checking..."], 0));

return frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","updates-auto-checking?","plugin/updates-auto-checking?",1617323181),v__$1);
});
frontend.handler.plugin.get_auto_checking_QMARK_ = (function frontend$handler$plugin$get_auto_checking_QMARK_(){
return new cljs.core.Keyword("plugin","updates-auto-checking?","plugin/updates-auto-checking?",1617323181).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0());
});
frontend.handler.plugin.get_user_checking_QMARK_ = (function frontend$handler$plugin$get_user_checking_QMARK_(){
return cljs.core.boolean$(cljs.core.seq(new cljs.core.Keyword("plugin","updates-pending","plugin/updates-pending",-1190878256).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0())));
});
frontend.handler.plugin.get_updates_downloading_QMARK_ = (function frontend$handler$plugin$get_updates_downloading_QMARK_(){
return cljs.core.boolean$(new cljs.core.Keyword("plugin","updates-downloading?","plugin/updates-downloading?",1294108608).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()));
});
frontend.handler.plugin.cancel_user_checking_BANG_ = (function frontend$handler$plugin$cancel_user_checking_BANG_(){
if(((frontend.handler.plugin.get_user_checking_QMARK_()) && (cljs.core.not(frontend.handler.plugin.get_auto_checking_QMARK_())))){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","updates-pending","plugin/updates-pending",-1190878256),cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
frontend.handler.plugin.user_check_enabled_for_updates_BANG_ = (function frontend$handler$plugin$user_check_enabled_for_updates_BANG_(theme_QMARK_){
var user_checking_QMARK_ = frontend.handler.plugin.get_user_checking_QMARK_();
var auto_checking_QMARK_ = frontend.handler.plugin.get_auto_checking_QMARK_();
if(cljs.core.truth_(auto_checking_QMARK_)){
frontend.handler.plugin.set_auto_checking_BANG_(false);
} else {
}

if(cljs.core.truth_((function (){var or__5142__auto__ = auto_checking_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (!(user_checking_QMARK_));
}
})())){
var temp__5825__auto__ = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2((32),frontend.state.get_enabled_QMARK__installed_plugins.cljs$core$IFn$_invoke$arity$1(theme_QMARK_)));
if(temp__5825__auto__){
var plugins = temp__5825__auto__;
frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","updates-pending","plugin/updates-pending",-1190878256),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(v)),v], null);
}),plugins)));

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","consume-updates","plugin/consume-updates",-331798674)], null));
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.plugin.auto_check_enabled_for_updates_BANG_ = (function frontend$handler$plugin$auto_check_enabled_for_updates_BANG_(){
if((((!(frontend.handler.plugin.get_updates_downloading_QMARK_()))) && (((cljs.core.not(frontend.handler.plugin.get_auto_checking_QMARK_())) && ((!(frontend.handler.plugin.get_user_checking_QMARK_()))))))){
var temp__5825__auto__ = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),cljs.core.shuffle(frontend.state.get_enabled_QMARK__installed_plugins.cljs$core$IFn$_invoke$arity$1(null))));
if(temp__5825__auto__){
var plugins = temp__5825__auto__;
frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","updates-pending","plugin/updates-pending",-1190878256),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(v)),v], null);
}),plugins)));

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","consume-updates","plugin/consume-updates",-331798674)], null));

return frontend.handler.plugin.set_auto_checking_BANG_(true);
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.plugin.get_enabled_auto_check_for_updates_QMARK_ = (function frontend$handler$plugin$get_enabled_auto_check_for_updates_QMARK_(){
return (!(frontend.storage.get(new cljs.core.Keyword(null,"lsp-last-auto-updates","lsp-last-auto-updates",1901307330)) === false));
});
frontend.handler.plugin.set_enabled_auto_check_for_updates = (function frontend$handler$plugin$set_enabled_auto_check_for_updates(v_QMARK_){
return frontend.storage.set(new cljs.core.Keyword(null,"lsp-last-auto-updates","lsp-last-auto-updates",1901307330),cljs.core.boolean$(v_QMARK_));
});
frontend.handler.plugin.call_plugin = (function frontend$handler$plugin$call_plugin(pl,type,payload){
if(cljs.core.truth_(pl)){
return pl.caller.call(cljs.core.name(type),payload);
} else {
return null;
}
});
frontend.handler.plugin.request_callback = (function frontend$handler$plugin$request_callback(pl,req_id,payload){
return frontend.handler.plugin.call_plugin(pl,new cljs.core.Keyword(null,"#lsp#request#callback","#lsp#request#callback",442990365),({"requestId": req_id, "payload": payload}));
});
frontend.handler.plugin.op_pinned_toolbar_item_BANG_ = (function frontend$handler$plugin$op_pinned_toolbar_item_BANG_(key,op){
var pinned = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","preferences","plugin/preferences",668527388),new cljs.core.Keyword(null,"pinnedToolbarItems","pinnedToolbarItems",889309943)], null));
var pinned__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,pinned);
var temp__5825__auto__ = (function (){var G__56852 = op;
var G__56852__$1 = (((G__56852 instanceof cljs.core.Keyword))?G__56852.fqn:null);
switch (G__56852__$1) {
case "add":
return cljs.core.conj;

break;
case "remove":
return cljs.core.disj;

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56852__$1))));

}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var op_fn = temp__5825__auto__;
return frontend.handler.plugin.save_plugin_preferences_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pinnedToolbarItems","pinnedToolbarItems",889309943),(function (){var G__56853 = pinned__$1;
var G__56854 = cljs.core.name(key);
return (op_fn.cljs$core$IFn$_invoke$arity$2 ? op_fn.cljs$core$IFn$_invoke$arity$2(G__56853,G__56854) : op_fn.call(null,G__56853,G__56854));
})()], null));
} else {
return null;
}
});
frontend.handler.plugin.remove_pinned_toolbar_items_of_plugin_BANG_ = (function frontend$handler$plugin$remove_pinned_toolbar_items_of_plugin_BANG_(pid){
var prefix = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(pid))+":");
var pinned = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","preferences","plugin/preferences",668527388),new cljs.core.Keyword(null,"pinnedToolbarItems","pinnedToolbarItems",889309943)], null));
var pinned__$1 = ((cljs.core.sequential_QMARK_(pinned))?cljs.core.vec(pinned):cljs.core.PersistentVector.EMPTY);
var updated_pinned = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56855_SHARP_){
return ((typeof p1__56855_SHARP_ === 'string') && (clojure.string.starts_with_QMARK_(p1__56855_SHARP_,prefix)));
}),pinned__$1));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(pinned__$1,updated_pinned)){
return frontend.handler.plugin.save_plugin_preferences_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pinnedToolbarItems","pinnedToolbarItems",889309943),updated_pinned], null));
} else {
return null;
}
});
frontend.handler.plugin.hook_lifecycle_fn_BANG_ = (function frontend$handler$plugin$hook_lifecycle_fn_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___57042 = arguments.length;
var i__5877__auto___57043 = (0);
while(true){
if((i__5877__auto___57043 < len__5876__auto___57042)){
args__5882__auto__.push((arguments[i__5877__auto___57043]));

var G__57044 = (i__5877__auto___57043 + (1));
i__5877__auto___57043 = G__57044;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return frontend.handler.plugin.hook_lifecycle_fn_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(frontend.handler.plugin.hook_lifecycle_fn_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (type,f,args){
if(cljs.core.truth_((function (){var and__5140__auto__ = type;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.fn_QMARK_(f);
} else {
return and__5140__auto__;
}
})())){
if(cljs.core.truth_(frontend.config.lsp_enabled_QMARK_)){
frontend.handler.plugin.hook_plugin_app.cljs$core$IFn$_invoke$arity$2((""+new cljs.core.Keyword(null,"before-command-invoked","before-command-invoked",882704254)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)),null);
} else {
}

var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
if(cljs.core.truth_(frontend.config.lsp_enabled_QMARK_)){
frontend.handler.plugin.hook_plugin_app.cljs$core$IFn$_invoke$arity$2((""+new cljs.core.Keyword(null,"after-command-invoked","after-command-invoked",-530377994)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)),null);
} else {
}

return result;
} else {
return null;
}
}));

(frontend.handler.plugin.hook_lifecycle_fn_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.handler.plugin.hook_lifecycle_fn_BANG_.cljs$lang$applyTo = (function (seq56856){
var G__56857 = cljs.core.first(seq56856);
var seq56856__$1 = cljs.core.next(seq56856);
var G__56858 = cljs.core.first(seq56856__$1);
var seq56856__$2 = cljs.core.next(seq56856__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56857,G__56858,seq56856__$2);
}));

frontend.handler.plugin.load_plugin_from_web_url_BANG_ = (function frontend$handler$plugin$load_plugin_from_web_url_BANG_(url){
if((!(((typeof url === 'string') && (clojure.string.starts_with_QMARK_(url,"http")))))){
return promesa.core.rejected((new Error("Invalid web url")));
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(clojure.string.replace(url,/\/+$/,"")),(function (url__$1){
return promesa.protocols._mcat(promesa.protocols._promise(clojure.string.includes_QMARK_(url__$1,"github.com")),(function (github_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(github_QMARK_)?(function (){var G__56859 = cljs.core.re_find(/github.com\/([^\/]+\/[^\/]+)/,url__$1);
if((G__56859 == null)){
return null;
} else {
return cljs.core.last(G__56859);
}
})():null)),(function (github_repo){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(github_QMARK_)?(function (){var G__56860 = github_repo;
if((G__56860 == null)){
return null;
} else {
return frontend.handler.common.plugin.get_web_plugin_checker_url_BANG_.cljs$core$IFn$_invoke$arity$1(G__56860);
}
})():(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url__$1)+"/package.json"))),(function (package_url){
return promesa.protocols._mcat(promesa.protocols._promise(window.fetch((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(package_url)+"?v="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(Date.now())))),(function (res){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = res.ok;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(res.status,(200));
} else {
return and__5140__auto__;
}
})())?promesa.core.then.cljs$core$IFn$_invoke$arity$2(res.json(),cljs_bean.core.__GT_clj):(function(){throw (new Error(res.text()))})())),(function (package$){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"logseq","logseq",-928939893).cljs$core$IFn$_invoke$arity$1(package$);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
throw (new Error("Illegal logseq package"));
}
})()),(function (logseq__$1){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var id = (cljs.core.truth_(github_QMARK_)?(function (){var G__56861 = github_repo;
if((G__56861 == null)){
return null;
} else {
return clojure.string.replace(G__56861,"/","_");
}
})():(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(logseq__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(package$);
}
})());
var repo = (function (){var or__5142__auto__ = github_repo;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return id;
}
})();
var theme_QMARK_ = (!(((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(logseq__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"themes","themes",-702786642).cljs$core$IFn$_invoke$arity$1(logseq__$1);
}
})() == null)));
return frontend.handler.common.plugin.emit_lsp_updates_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"completed","completed",-486056503),new cljs.core.Keyword(null,"only-check","only-check",-1961506795),false,new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"dst","dst",844682948),repo,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme_QMARK_,new cljs.core.Keyword(null,"web-pkg","web-pkg",304735692),(function (){var G__56862 = package$;
if(cljs.core.not(github_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56862,new cljs.core.Keyword(null,"installedFromUserWebUrl","installedFromUserWebUrl",-1070272832),url__$1);
} else {
return G__56862;
}
})()], null)], null));
})()),(function (___27434__auto__){
return promesa.protocols._promise(url__$1);
}));
}));
}));
}));
}));
}));
}));
}));
}));
}
});
frontend.handler.plugin.lsp_indicator = (function (){var render_fn__47251__auto__ = (function frontend$handler$plugin$lsp_indicator(){
var text = (function (){var or__5142__auto__ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","indicator-text","plugin/indicator-text",-221282032)], null));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.not(frontend.util.electron_QMARK_())){
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","loading-indicator","plugin/loading-indicator",362442995)], 0));
} else {
return null;
}
}
})();
if(text === true){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.align-items.justify-center.h-screen.w-full.preboot-loading","div.flex.align-items.justify-center.h-screen.w-full.preboot-loading",-1356151831),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.justify-center.flex-col","span.flex.items-center.justify-center.flex-col",1828818557),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.scale-250.opacity-50.mb-10.animate-pulse","small.scale-250.opacity-50.mb-10.animate-pulse",2122550847),frontend.components.svg.logo.cljs$core$IFn$_invoke$arity$0()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.block.text-sm.relative.opacity-50","small.block.text-sm.relative.opacity-50",-144059312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),"-8px",new cljs.core.Keyword(null,"min-height","min-height",398480837),"24px"], null)], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text))], null)], null)], null);
}
});
var comp__47252__auto__ = (function() { 
var frontend$handler$plugin$lsp_indicator__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__56863 = cljs.core.first(args__47253__auto__);
var G__56864 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56863,G__56864) : io.factorhouse.hsx.core.obj_get.call(null,G__56863,G__56864));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"lsp-indicator","lsp-indicator",809119515,null),args__47253__auto__),frontend$handler$plugin$lsp_indicator,args__47253__auto__,null);
}
};
var frontend$handler$plugin$lsp_indicator = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__57045__i = 0, G__57045__a = new Array(arguments.length -  0);
while (G__57045__i < G__57045__a.length) {G__57045__a[G__57045__i] = arguments[G__57045__i + 0]; ++G__57045__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__57045__a,0,null);
} 
return frontend$handler$plugin$lsp_indicator__delegate.call(this,args__47253__auto__);};
frontend$handler$plugin$lsp_indicator.cljs$lang$maxFixedArity = 0;
frontend$handler$plugin$lsp_indicator.cljs$lang$applyTo = (function (arglist__57046){
var args__47253__auto__ = cljs.core.seq(arglist__57046);
return frontend$handler$plugin$lsp_indicator__delegate(args__47253__auto__);
});
frontend$handler$plugin$lsp_indicator.cljs$core$IFn$_invoke$arity$variadic = frontend$handler$plugin$lsp_indicator__delegate;
return frontend$handler$plugin$lsp_indicator;
})()
;
var memo_comp__47254__auto__ = (function (){var G__56865 = comp__47252__auto__;
var G__56866 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56865,G__56866) : io.factorhouse.hsx.core.react_memo.call(null,G__56865,G__56866));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"lsp-indicator");

return comp__47252__auto__;
})();
frontend.handler.plugin.init_plugins_BANG_ = (function frontend$handler$plugin$init_plugins_BANG_(){
var el_57047 = document.createElement("div");
document.body.appendChild(el_57047);

module$node_modules$react_dom$client.createRoot(el_57047).render(frontend.rfx.provider(frontend.handler.plugin.lsp_indicator()));

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.plugin.init_ls_dotdir_root()),(function (root){
return promesa.protocols._mcat(promesa.protocols._promise(LSPlugin.setupPluginCore(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"localUserConfigRoot","localUserConfigRoot",1613555808),root,new cljs.core.Keyword(null,"dotConfigRoot","dotConfigRoot",-1961584501),root], null)))),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise((function (pid){
frontend.handler.plugin.unregister_plugin_slash_command.cljs$core$IFn$_invoke$arity$1(pid);

frontend.handler.plugin.invoke_exported_api.cljs$core$IFn$_invoke$arity$variadic("unregister_plugin_simple_command",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pid], 0));

frontend.handler.plugin.invoke_exported_api.cljs$core$IFn$_invoke$arity$variadic("uninstall_plugin_hook",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pid], 0));

frontend.handler.plugin.unregister_plugin_ui_items(pid);

frontend.handler.plugin.unregister_plugin_resources(pid);

return frontend.handler.plugin.unregister_plugin_search_services(pid);
})),(function (clear_commands_BANG_){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__56870 = LSPluginCore;
G__56870.on("registered",(function (pl){
return frontend.handler.plugin.register_plugin(cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(JSON.stringify(pl))));
}));

G__56870.on("error",(function (e){
if(cljs.core.truth_(frontend.handler.plugin.illegal_plugin_package_error__GT_data(e))){
return frontend.handler.plugin.show_illegal_plugin_package_notification_BANG_(e);
} else {
return null;
}
}));

G__56870.on("beforeload",(function (pl){
var text = (cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","load-plugin-indicator","plugin/load-plugin-indicator",1913598965),pl.id], 0)):null);
var G__56871 = text;
if((G__56871 == null)){
return null;
} else {
return frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","indicator-text","plugin/indicator-text",-221282032),G__56871);
}
}));

G__56870.on("reloaded",(function (pl){
return frontend.handler.plugin.register_plugin(cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(JSON.stringify(pl))));
}));

G__56870.on("unregistered",(function (pid){
var pid__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
frontend.handler.plugin.unregister_plugin_themes.cljs$core$IFn$_invoke$arity$1(pid__$1);

frontend.handler.plugin.remove_pinned_toolbar_items_of_plugin_BANG_(pid__$1);

frontend.state.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(medley.core.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034),pid__$1], null)], 0));

return (clear_commands_BANG_.cljs$core$IFn$_invoke$arity$1 ? clear_commands_BANG_.cljs$core$IFn$_invoke$arity$1(pid__$1) : clear_commands_BANG_.call(null,pid__$1));
}));

G__56870.on("unlink-plugin",(function (pid){
var pid__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"uninstallMarketPlugin","uninstallMarketPlugin",1767252086),cljs.core.name(pid__$1)], 0));
} else {
return frontend.handler.plugin.unlink_plugin_for_web_BANG_(pid__$1);
}
}));

G__56870.on("beforereload",(function (pl){
var pid = pl.id;
(clear_commands_BANG_.cljs$core$IFn$_invoke$arity$1 ? clear_commands_BANG_.cljs$core$IFn$_invoke$arity$1(pid) : clear_commands_BANG_.call(null,pid));

return frontend.handler.plugin.unregister_plugin_themes.cljs$core$IFn$_invoke$arity$2(pid,false);
}));

G__56870.on("disabled",(function (pid){
(clear_commands_BANG_.cljs$core$IFn$_invoke$arity$1 ? clear_commands_BANG_.cljs$core$IFn$_invoke$arity$1(pid) : clear_commands_BANG_.call(null,pid));

return frontend.handler.plugin.unregister_plugin_themes.cljs$core$IFn$_invoke$arity$1(pid);
}));

G__56870.on("themes-changed",(function (themes){
return frontend.state.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","installed-themes","plugin/installed-themes",1969555197),cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__56872){
var vec__56873 = p__56872;
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56873,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56873,(1),null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56867_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56867_SHARP_,new cljs.core.Keyword(null,"pid","pid",1018387698),pid);
}),cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(vs));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(themes)], 0)))], 0));
}));

G__56870.on("theme-selected",(function (theme){
var theme__$1 = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(theme);
var theme__$2 = frontend.handler.plugin.assets_theme_to_file(theme__$1);
var url = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(theme__$2);
var mode = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(theme__$2);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("ui","theme","ui/theme",-1247877132).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0());
}
})();
if(cljs.core.truth_(mode)){
frontend.state.set_custom_theme_BANG_.cljs$core$IFn$_invoke$arity$2(mode,theme__$2);

frontend.state.set_theme_mode_BANG_.cljs$core$IFn$_invoke$arity$1(mode);
} else {
}

frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","selected-theme","plugin/selected-theme",-172679220),url);

return frontend.handler.plugin.hook_plugin_app.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"theme-changed","theme-changed",-1173604306),theme__$2);
}));

G__56870.on("reset-custom-theme",(function (themes){
var themes__$1 = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(themes);
var custom_theme = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(themes__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var mode = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(themes__$1);
frontend.state.set_custom_theme_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),(((new cljs.core.Keyword(null,"light","light",1918998747).cljs$core$IFn$_invoke$arity$1(custom_theme) == null))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),"light"], null):new cljs.core.Keyword(null,"light","light",1918998747).cljs$core$IFn$_invoke$arity$1(custom_theme)),new cljs.core.Keyword(null,"dark","dark",1818973999),(((new cljs.core.Keyword(null,"dark","dark",1818973999).cljs$core$IFn$_invoke$arity$1(custom_theme) == null))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),"dark"], null):new cljs.core.Keyword(null,"dark","dark",1818973999).cljs$core$IFn$_invoke$arity$1(custom_theme))], null));

return frontend.state.set_theme_mode_BANG_.cljs$core$IFn$_invoke$arity$1(mode);
}));

G__56870.on("settings-changed",(function (id,settings){
var id__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(id);
if(cljs.core.truth_((function (){var and__5140__auto__ = settings;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.contains_QMARK_(new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()),id__$1);
} else {
return and__5140__auto__;
}
})())){
return frontend.handler.plugin.update_plugin_settings_state(id__$1,cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(settings));
} else {
return null;
}
}));

G__56870.on("ready",(function (perf_table){
var temp__5825__auto__ = (function (){var and__5140__auto__ = perf_table;
if(cljs.core.truth_(and__5140__auto__)){
return perf_table.entries();
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var plugins = temp__5825__auto__;
return (function (perfs){
var seq__56876 = cljs.core.seq(perfs);
var chunk__56877 = null;
var count__56878 = (0);
var i__56879 = (0);
while(true){
if((i__56879 < count__56878)){
var perf = chunk__56877.cljs$core$IIndexed$_nth$arity$2(null,i__56879);
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","loader-perf-tip","plugin/loader-perf-tip",1893085954),cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(perf)], null));


var G__57048 = seq__56876;
var G__57049 = chunk__56877;
var G__57050 = count__56878;
var G__57051 = (i__56879 + (1));
seq__56876 = G__57048;
chunk__56877 = G__57049;
count__56878 = G__57050;
i__56879 = G__57051;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__56876);
if(temp__5825__auto____$1){
var seq__56876__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__56876__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__56876__$1);
var G__57052 = cljs.core.chunk_rest(seq__56876__$1);
var G__57053 = c__5673__auto__;
var G__57054 = cljs.core.count(c__5673__auto__);
var G__57055 = (0);
seq__56876 = G__57052;
chunk__56877 = G__57053;
count__56878 = G__57054;
i__56879 = G__57055;
continue;
} else {
var perf = cljs.core.first(seq__56876__$1);
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","loader-perf-tip","plugin/loader-perf-tip",1893085954),cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(perf)], null));


var G__57056 = cljs.core.next(seq__56876__$1);
var G__57057 = null;
var G__57058 = (0);
var G__57059 = (0);
seq__56876 = G__57056;
chunk__56877 = G__57057;
count__56878 = G__57058;
i__56879 = G__57059;
continue;
}
} else {
return null;
}
}
break;
}
})(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__56880){
var vec__56881 = p__56880;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56881,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56881,(1),null);
var temp__5825__auto____$1 = (function (){var and__5140__auto__ = (function (){var G__56884 = v;
var G__56884__$1 = (((G__56884 == null))?null:G__56884.o);
var G__56884__$2 = (((G__56884__$1 == null))?null:G__56884__$1.disabled);
if((G__56884__$2 == null)){
return null;
} else {
return cljs.core.not(G__56884__$2);
}
})();
if(cljs.core.truth_(and__5140__auto__)){
return v.e;
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto____$1)){
var end = temp__5825__auto____$1;
if(((typeof end === 'number') && ((((end > (0))) && (((end - v.s) > (6000))))))){
return v;
} else {
return null;
}
} else {
return null;
}
}),plugins));
} else {
return null;
}
}));

return G__56870;
})()),(function (___$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.plugin.get_user_default_plugins()),(function (default_plugins){
return promesa.protocols._mcat(promesa.protocols._promise(((((cljs.core.seq(default_plugins)) && (cljs.core.not(frontend.util.electron_QMARK_()))))?cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (its){
return cljs.core.filterv((function (p1__56868_SHARP_){
return new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(p1__56868_SHARP_);
}),its);
}),(function (its){
return cljs.core.filterv((function (p1__56869_SHARP_){
return cljs.core.not(new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(p1__56869_SHARP_));
}),its);
}))(default_plugins):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_plugins], null))),(function (p__56885){
var vec__56886 = p__56885;
var plugins0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56886,(0),null);
var plugins_async = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56886,(1),null);
return promesa.protocols._mcat(promesa.protocols._promise(LSPluginCore.register(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(((cljs.core.seq(plugins0))?plugins0:cljs.core.PersistentVector.EMPTY)),true)),(function (___$2){
return promesa.protocols._promise(plugins_async);
}));
}));
}));
}));
}));
}));
}));
})),(function (plugins_async){
frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","indicator-text","plugin/indicator-text",-221282032),true);

return setTimeout((function (){
var G__56898 = cljs.core.seq(plugins_async);
var G__56898__$1 = (((G__56898 == null))?null:promesa.core.delay.cljs$core$IFn$_invoke$arity$2(G__56898,(16)));
if((G__56898__$1 == null)){
return null;
} else {
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(G__56898__$1,(function (){
return LSPluginCore.register(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(plugins_async),true);
}));
}
}),(cljs.core.truth_(frontend.util.electron_QMARK_())?(64):(0)));
})),(function (e){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.plugin",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"setup-plugin-system-error","setup-plugin-system-error",1363975168),e,new cljs.core.Keyword(null,"line","line",212345235),1338], null)),null);
} else {
}

return frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","indicator-text","plugin/indicator-text",-221282032),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","fatal-error","plugin/fatal-error",-2078262447),e], 0)));
}));
});
/**
 * setup plugin core handler
 */
frontend.handler.plugin.setup_BANG_ = (function frontend$handler$plugin$setup_BANG_(){
if(cljs.core.truth_(frontend.config.lsp_enabled_QMARK_)){
frontend.handler.plugin.setup_global_apis_for_web_BANG_();

return frontend.handler.plugin.init_plugins_BANG_();
} else {
return null;
}
});

//# sourceMappingURL=frontend.handler.plugin.js.map
