goog.provide('frontend.handler.plugin_config');
/**
 * Full path to plugins.edn
 */
frontend.handler.plugin_config.plugin_config_path = (function frontend$handler$plugin_config$plugin_config_path(){
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(frontend.handler.global_config.global_config_dir(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["plugins.edn"], 0));
});
/**
 * Vec of plugin keys to store in plugins.edn and to compare with installed-plugins state
 */
frontend.handler.plugin_config.common_plugin_keys = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest(frontend.schema.handler.plugin_config.Plugin));
/**
 * Adds or updates a plugin from plugins.edn
 */
frontend.handler.plugin_config.add_or_update_plugin = (function frontend$handler$plugin_config$add_or_update_plugin(p__56143){
var map__56144 = p__56143;
var map__56144__$1 = cljs.core.__destructure_map(map__56144);
var plugin = map__56144__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56144__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2(null,frontend.handler.plugin_config.plugin_config_path())),(function (content){
return promesa.protocols._mcat(promesa.protocols._promise((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(borkdude.rewrite_edn.assoc(borkdude.rewrite_edn.parse_string(content),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(id),cljs.core.select_keys(plugin,frontend.handler.plugin_config.common_plugin_keys))))),(function (updated_content){
return promesa.protocols._promise(frontend.fs.write_file_BANG_(frontend.handler.plugin_config.plugin_config_path(),updated_content));
}));
}));
}));
});
/**
 * Removes a plugin from plugins.edn
 */
frontend.handler.plugin_config.remove_plugin = (function frontend$handler$plugin_config$remove_plugin(plugin_id){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2(null,frontend.handler.plugin_config.plugin_config_path())),(function (content){
return promesa.protocols._mcat(promesa.protocols._promise((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(borkdude.rewrite_edn.dissoc(borkdude.rewrite_edn.parse_string(content),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(plugin_id))))),(function (updated_content){
return promesa.protocols._promise(frontend.fs.write_file_BANG_(frontend.handler.plugin_config.plugin_config_path(),updated_content));
}));
}));
}));
});
frontend.handler.plugin_config.create_plugin_config_file_if_not_exists = (function frontend$handler$plugin_config$create_plugin_config_file_if_not_exists(){
var content = (function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56152_56189 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56153_56190 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56154_56191 = true;
var _STAR_print_fn_STAR__temp_val__56155_56192 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56154_56191);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56155_56192);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.update_vals(new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()),(function (p1__56151_SHARP_){
return cljs.core.select_keys(p1__56151_SHARP_,frontend.handler.plugin_config.common_plugin_keys);
})));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56153_56190);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56152_56189);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})();
return frontend.fs.create_if_not_exists.cljs$core$IFn$_invoke$arity$4(frontend.state.get_current_repo(),null,frontend.handler.plugin_config.plugin_config_path(),content);
});
/**
 * Given installed plugins state and plugins from plugins.edn,
 * returns map of plugins to install and uninstall
 */
frontend.handler.plugin_config.determine_plugins_to_change = (function frontend$handler$plugin_config$determine_plugins_to_change(installed_plugins,edn_plugins){
var installed_plugins_set = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56159_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.select_keys(p1__56159_SHARP_,frontend.handler.plugin_config.common_plugin_keys),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56159_SHARP_)));
}),cljs.core.vals(installed_plugins)));
var edn_plugins_set = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56162){
var vec__56163 = p__56162;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56163,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56163,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"id","id",-1388402092),k);
}),edn_plugins));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(installed_plugins_set,edn_plugins_set)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"install","install",-655751038),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56161_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56161_SHARP_,new cljs.core.Keyword(null,"plugin-action","plugin-action",2020834682),"install");
}),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(edn_plugins_set,installed_plugins_set)),new cljs.core.Keyword(null,"uninstall","uninstall",-284438062),cljs.core.vec(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(installed_plugins_set,edn_plugins_set))], null);
}
});
frontend.handler.plugin_config.open_install_plugin_from_github_modal = (function frontend$handler$plugin_config$open_install_plugin_from_github_modal(){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("go","install-plugin-from-github","go/install-plugin-from-github",1433230947)], null));
});
frontend.handler.plugin_config.open_replace_plugins_modal = (function frontend$handler$plugin_config$open_replace_plugins_modal(){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2(null,frontend.handler.plugin_config.plugin_config_path())),(function (edn_plugins_STAR_){
return promesa.protocols._mcat(promesa.protocols._promise(clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(edn_plugins_STAR_)),(function (edn_plugins){
return promesa.protocols._promise((function (){var temp__5823__auto__ = malli.error.humanize.cljs$core$IFn$_invoke$arity$1(malli.core.explain.cljs$core$IFn$_invoke$arity$2(frontend.schema.handler.plugin_config.Plugins_edn,edn_plugins));
if(cljs.core.truth_(temp__5823__auto__)){
var errors = temp__5823__auto__;
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","invalid-plugins-edn","plugin/invalid-plugins-edn",-603686543)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));

if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.plugin-config",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"plugin-edn-errors","plugin-edn-errors",-699885047),errors,new cljs.core.Keyword(null,"line","line",212345235),90], null)),null);
} else {
return null;
}
} else {
var plugins_to_change = frontend.handler.plugin_config.determine_plugins_to_change(new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()),edn_plugins);
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("go","plugins-from-file","go/plugins-from-file",-231716743),plugins_to_change], null));
}
})());
}));
}));
})),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e)))){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","malformed-plugins-edn","plugin/malformed-plugins-edn",-1525698372)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
} else {
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.plugin-config",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unexpected-error","unexpected-error",1973845951),e,new cljs.core.Keyword(null,"line","line",212345235),99], null)),null);
} else {
return null;
}
}
}));
});
/**
 * Replaces current plugins given plugins to install and uninstall
 */
frontend.handler.plugin_config.replace_plugins = (function frontend$handler$plugin_config$replace_plugins(plugins){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.plugin-config",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uninstall-plugins","uninstall-plugins",-167708943),new cljs.core.Keyword(null,"uninstall","uninstall",-284438062).cljs$core$IFn$_invoke$arity$1(plugins),new cljs.core.Keyword(null,"line","line",212345235),104], null)),null);
} else {
}

var seq__56166_56198 = cljs.core.seq(new cljs.core.Keyword(null,"uninstall","uninstall",-284438062).cljs$core$IFn$_invoke$arity$1(plugins));
var chunk__56167_56199 = null;
var count__56168_56200 = (0);
var i__56169_56201 = (0);
while(true){
if((i__56169_56201 < count__56168_56200)){
var plugin_56202 = chunk__56167_56199.cljs$core$IIndexed$_nth$arity$2(null,i__56169_56201);
frontend.handler.common.plugin.unregister_plugin(cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(plugin_56202)));


var G__56203 = seq__56166_56198;
var G__56204 = chunk__56167_56199;
var G__56205 = count__56168_56200;
var G__56206 = (i__56169_56201 + (1));
seq__56166_56198 = G__56203;
chunk__56167_56199 = G__56204;
count__56168_56200 = G__56205;
i__56169_56201 = G__56206;
continue;
} else {
var temp__5825__auto___56207 = cljs.core.seq(seq__56166_56198);
if(temp__5825__auto___56207){
var seq__56166_56209__$1 = temp__5825__auto___56207;
if(cljs.core.chunked_seq_QMARK_(seq__56166_56209__$1)){
var c__5673__auto___56211 = cljs.core.chunk_first(seq__56166_56209__$1);
var G__56212 = cljs.core.chunk_rest(seq__56166_56209__$1);
var G__56213 = c__5673__auto___56211;
var G__56214 = cljs.core.count(c__5673__auto___56211);
var G__56215 = (0);
seq__56166_56198 = G__56212;
chunk__56167_56199 = G__56213;
count__56168_56200 = G__56214;
i__56169_56201 = G__56215;
continue;
} else {
var plugin_56216 = cljs.core.first(seq__56166_56209__$1);
frontend.handler.common.plugin.unregister_plugin(cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(plugin_56216)));


var G__56217 = cljs.core.next(seq__56166_56209__$1);
var G__56218 = null;
var G__56219 = (0);
var G__56220 = (0);
seq__56166_56198 = G__56217;
chunk__56167_56199 = G__56218;
count__56168_56200 = G__56219;
i__56169_56201 = G__56220;
continue;
}
} else {
}
}
break;
}

if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.plugin-config",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"install-plugins","install-plugins",-1876490807),new cljs.core.Keyword(null,"install","install",-655751038).cljs$core$IFn$_invoke$arity$1(plugins),new cljs.core.Keyword(null,"line","line",212345235),107], null)),null);
} else {
}

var seq__56172 = cljs.core.seq(new cljs.core.Keyword(null,"install","install",-655751038).cljs$core$IFn$_invoke$arity$1(plugins));
var chunk__56173 = null;
var count__56174 = (0);
var i__56175 = (0);
while(true){
if((i__56175 < count__56174)){
var plugin = chunk__56173.cljs$core$IIndexed$_nth$arity$2(null,i__56175);
frontend.handler.common.plugin.install_marketplace_plugin_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(plugin,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(plugin))));


var G__56222 = seq__56172;
var G__56223 = chunk__56173;
var G__56224 = count__56174;
var G__56225 = (i__56175 + (1));
seq__56172 = G__56222;
chunk__56173 = G__56223;
count__56174 = G__56224;
i__56175 = G__56225;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__56172);
if(temp__5825__auto__){
var seq__56172__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56172__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__56172__$1);
var G__56229 = cljs.core.chunk_rest(seq__56172__$1);
var G__56230 = c__5673__auto__;
var G__56231 = cljs.core.count(c__5673__auto__);
var G__56232 = (0);
seq__56172 = G__56229;
chunk__56173 = G__56230;
count__56174 = G__56231;
i__56175 = G__56232;
continue;
} else {
var plugin = cljs.core.first(seq__56172__$1);
frontend.handler.common.plugin.install_marketplace_plugin_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(plugin,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(plugin))));


var G__56233 = cljs.core.next(seq__56172__$1);
var G__56234 = null;
var G__56235 = (0);
var G__56236 = (0);
seq__56172 = G__56233;
chunk__56173 = G__56234;
count__56174 = G__56235;
i__56175 = G__56236;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Sets up a listener for the lsp-installed event to update plugins.edn
 */
frontend.handler.plugin_config.setup_install_listener_BANG_ = (function frontend$handler$plugin_config$setup_install_listener_BANG_(){
var channel = cljs.core.name(new cljs.core.Keyword(null,"lsp-updates","lsp-updates",1924425351));
var listener = (function frontend$handler$plugin_config$setup_install_listener_BANG__$_listener(_,e){
var temp__5825__auto__ = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core.truth_(temp__5825__auto__)){
var map__56181 = temp__5825__auto__;
var map__56181__$1 = cljs.core.__destructure_map(map__56181);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56181__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56181__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var only_check = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56181__$1,new cljs.core.Keyword(null,"only-check","only-check",-1961506795));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,"completed")) && (cljs.core.not(only_check)))){
var map__56182 = payload;
var map__56182__$1 = cljs.core.__destructure_map(map__56182);
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56182__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var effect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56182__$1,new cljs.core.Keyword(null,"effect","effect",347343289));
return frontend.handler.plugin_config.add_or_update_plugin(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(payload,new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"installed-version","installed-version",-802921561).cljs$core$IFn$_invoke$arity$1(payload),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"effect","effect",347343289),cljs.core.boolean$(effect),new cljs.core.Keyword(null,"theme","theme",-1247880880),cljs.core.boolean$(theme)], 0)));
} else {
return null;
}
} else {
return null;
}
});
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
window.apis.addListener(channel,listener);
} else {
}

return (function (){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return window.apis.removeListener(channel,listener);
} else {
return null;
}
});
});
/**
 * This component has just one responsibility on start, to create a plugins.edn
 *   if none exists
 */
frontend.handler.plugin_config.start = (function frontend$handler$plugin_config$start(){
return frontend.handler.plugin_config.create_plugin_config_file_if_not_exists();
});

//# sourceMappingURL=frontend.handler.plugin_config.js.map
