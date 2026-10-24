goog.provide('frontend.handler.common.config_edn');
/**
 * Make error maps from me/humanize more readable for users. Doesn't try to handle
 * nested keys or positional errors e.g. tuples
 */
frontend.handler.common.config_edn.humanize_more = (function frontend$handler$common$config_edn$humanize_more(errors){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__63380){
var vec__63382 = p__63380;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63382,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63382,(1),null);
if(cljs.core.map_QMARK_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(""+"Has errors in the following keys - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.keys(v))))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(v)))], null);
}
}),errors);
});
frontend.handler.common.config_edn.file_link = (function frontend$handler$common$config_edn$file_link(path){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),path], null))], null),path], null);
});
frontend.handler.common.config_edn.normalize_config_key = (function frontend$handler$common$config_edn$normalize_config_key(config_key){
var ns_str = cljs.core.namespace(config_key);
var clean_name = clojure.string.replace(cljs.core.name(config_key),/\?$/,"");
if(cljs.core.truth_(ns_str)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_str)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clean_name));
} else {
return clean_name;
}
});
frontend.handler.common.config_edn.config_key__GT_deprecation_i18n_key = (function frontend$handler$common$config_edn$config_key__GT_deprecation_i18n_key(config_key){
if(cljs.core.truth_(config_key)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(logseq.common.config.unused_in_db_graphs_deprecation,cljs.core.get.cljs$core$IFn$_invoke$arity$2(logseq.common.config.file_only_config,config_key))){
return new cljs.core.Keyword("graph.validation","config-unused-in-db-graphs-warning","graph.validation/config-unused-in-db-graphs-warning",19133533);
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("graph.validation",(""+"config-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.handler.common.config_edn.normalize_config_key(config_key))+"-warning"));
}
} else {
return null;
}
});
frontend.handler.common.config_edn.config_deprecation_message = (function frontend$handler$common$config_edn$config_deprecation_message(config_key){
var G__63385 = config_key;
var G__63385__$1 = (((G__63385 == null))?null:frontend.handler.common.config_edn.config_key__GT_deprecation_i18n_key(G__63385));
if((G__63385__$1 == null)){
return null;
} else {
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__63385__$1], 0));
}
});
frontend.handler.common.config_edn.deprecated_config_key_QMARK_ = (function frontend$handler$common$config_edn$deprecated_config_key_QMARK_(config_key){
return ((cljs.core.contains_QMARK_(logseq.common.config.file_only_config,config_key)) || (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("arweave","gateway","arweave/gateway",-473231712),null,new cljs.core.Keyword("editor","command-trigger","editor/command-trigger",1018337295),null], null), null),config_key)));
});
frontend.handler.common.config_edn.error_list = (function frontend$handler$common$config_edn$error_list(errors,class$){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__63386){
var vec__63387 = p__63386;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63387,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63387,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dl.my-2.mb-0","dl.my-2.mb-0",1765111560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dt.m-0","dt.m-0",193407064),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dd","dd",-1340437629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),v], null)], null);
}),errors);
});
frontend.handler.common.config_edn.config_notification_show_BANG_ = (function frontend$handler$common$config_edn$config_notification_show_BANG_(var_args){
var G__63392 = arguments.length;
switch (G__63392) {
case 2:
return frontend.handler.common.config_edn.config_notification_show_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.handler.common.config_edn.config_notification_show_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return frontend.handler.common.config_edn.config_notification_show_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.common.config_edn.config_notification_show_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (title,body){
return frontend.handler.common.config_edn.config_notification_show_BANG_.cljs$core$IFn$_invoke$arity$3(title,body,new cljs.core.Keyword(null,"error","error",-978969032));
}));

(frontend.handler.common.config_edn.config_notification_show_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (title,body,status){
return frontend.handler.common.config_edn.config_notification_show_BANG_.cljs$core$IFn$_invoke$arity$4(title,body,status,false);
}));

(frontend.handler.common.config_edn.config_notification_show_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (title,body,status,clear_QMARK_){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".mb-2",".mb-2",-2014745458),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".text-lg.mb-2",".text-lg.mb-2",508238774),title], null),body], null),status,clear_QMARK_);
}));

(frontend.handler.common.config_edn.config_notification_show_BANG_.cljs$lang$maxFixedArity = 4);

frontend.handler.common.config_edn.validate_config_map = (function frontend$handler$common$config_edn$validate_config_map(m,schema,path){
var temp__5823__auto__ = malli.error.humanize.cljs$core$IFn$_invoke$arity$1(malli.core.explain.cljs$core$IFn$_invoke$arity$2(schema,m));
if(cljs.core.truth_(temp__5823__auto__)){
var errors = temp__5823__auto__;
frontend.handler.common.config_edn.config_notification_show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.interpolate_rich_text_node.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file.config","error-title","file.config/error-title",621953588)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.common.config_edn.file_link(path)], null)),frontend.handler.common.config_edn.error_list(frontend.handler.common.config_edn.humanize_more(errors),"text-error"));

return false;
} else {
return true;
}
});
/**
 * Validates a global config.edn file for correctness and pops up an error
 *   notification if invalid. Returns a boolean indicating if file is invalid.
 *   Error messages are written with consideration that this validation is called
 *   regardless of whether a file is written outside or inside Logseq.
 */
frontend.handler.common.config_edn.validate_config_edn = (function frontend$handler$common$config_edn$validate_config_edn(path,file_body,schema){
var parsed_body = (function (){try{return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(file_body);
}catch (e63393){var x = e63393;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.handler.common.config-edn","failed-to-read","frontend.handler.common.config-edn/failed-to-read",1623844738),cljs.core.ex_message(x)], null);
}})();
var failed_QMARK_ = ((cljs.core.vector_QMARK_(parsed_body)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frontend.handler.common.config-edn","failed-to-read","frontend.handler.common.config-edn/failed-to-read",1623844738),cljs.core.first(parsed_body))));
if((parsed_body == null)){
return true;
} else {
if(((failed_QMARK_) && (clojure.string.includes_QMARK_(cljs.core.second(parsed_body),"duplicate key")))){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file","config-duplicate-keys","file/config-duplicate-keys",1625720201),path,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.second(parsed_body),(36))], 0)),new cljs.core.Keyword(null,"error","error",-978969032));

return false;
} else {
if(failed_QMARK_){
frontend.handler.common.config_edn.config_notification_show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.interpolate_rich_text_node.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file.config","read-failed-title","file.config/read-failed-title",1802424552)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.common.config_edn.file_link(path)], null)),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file.config","read-failed-desc","file.config/read-failed-desc",657833181)], 0)));

return false;
} else {
if((!(cljs.core.map_QMARK_(parsed_body)))){
frontend.handler.common.config_edn.config_notification_show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.interpolate_rich_text_node.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file.config","invalid-title","file.config/invalid-title",263640587)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.common.config_edn.file_link(path)], null)),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file.config","invalid-desc","file.config/invalid-desc",1722694296)], 0)));

return false;
} else {
return frontend.handler.common.config_edn.validate_config_map(parsed_body,schema,path);

}
}
}
}
});
/**
 * Detects config keys that will or have been deprecated
 */
frontend.handler.common.config_edn.detect_deprecations = (function frontend$handler$common$config_edn$detect_deprecations(path,content){
var body = (function (){try{return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(content);
}catch (e63395){var _ = e63395;
return new cljs.core.Keyword("frontend.handler.common.config-edn","failed-to-detect","frontend.handler.common.config-edn/failed-to-detect",1751968291);
}})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(body,new cljs.core.Keyword("frontend.handler.common.config-edn","failed-to-detect","frontend.handler.common.config-edn/failed-to-detect",1751968291))){
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.common.config-edn",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"Skip deprecation check since config is not valid edn",new cljs.core.Keyword(null,"line","line",212345235),132], null)),null);
} else {
return null;
}
} else {
if((!(cljs.core.map_QMARK_(body)))){
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.common.config-edn",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"Skip deprecation check since config is not a map",new cljs.core.Keyword(null,"line","line",212345235),135], null)),null);
} else {
return null;
}
} else {
var temp__5825__auto__ = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (config_key){
if(frontend.handler.common.config_edn.deprecated_config_key_QMARK_(config_key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [config_key,frontend.handler.common.config_edn.config_deprecation_message(config_key)], null);
} else {
return null;
}
}),cljs.core.keys(body)));
if(temp__5825__auto__){
var deprecations = temp__5825__auto__;
return frontend.handler.common.config_edn.config_notification_show_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.context.i18n.interpolate_rich_text_node.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file.config","deprecation-title","file.config/deprecation-title",1998796870)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.common.config_edn.file_link(path)], null)),frontend.handler.common.config_edn.error_list(deprecations,"text-warning"),new cljs.core.Keyword(null,"warning","warning",-1685650671),false);
} else {
return null;
}

}
}
});

//# sourceMappingURL=frontend.handler.common.config_edn.js.map
