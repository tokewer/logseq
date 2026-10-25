goog.provide('frontend.handler.repo_config');
frontend.handler.repo_config._LT_get_file_content = (function frontend$handler$repo_config$_LT_get_file_content(repo_url,path){
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-file-content","thread-api/get-file-content",-718755763),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo_url,path], 0));
});
frontend.handler.repo_config.get_repo_config_content = (function frontend$handler$repo_config$get_repo_config_content(repo_url){
return frontend.handler.repo_config._LT_get_file_content(repo_url,"logseq/config.edn");
});
/**
 * Converts file content to edn
 */
frontend.handler.repo_config.read_repo_config = (function frontend$handler$repo_config$read_repo_config(content){
try{return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(content);
}catch (e63085){var e = e63085;
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file","config-invalid","file/config-invalid",149812028)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));

throw e;
}});
/**
 * True when file content parses into a config map. When parsing fails the user
 *   is notified by read-repo-config.
 */
frontend.handler.repo_config.readable_config_content_QMARK_ = (function frontend$handler$repo_config$readable_config_content_QMARK_(content){
var and__5140__auto__ = (!(clojure.string.blank_QMARK_(content)));
if(and__5140__auto__){
try{return cljs.core.map_QMARK_(frontend.handler.repo_config.read_repo_config(content));
}catch (e63086){var _ = e63086;
return false;
}} else {
return and__5140__auto__;
}
});
/**
 * Sets repo config state using given file content
 */
frontend.handler.repo_config.set_repo_config_state_BANG_ = (function frontend$handler$repo_config$set_repo_config_state_BANG_(repo_url,content){
var config = frontend.handler.repo_config.read_repo_config(content);
frontend.state.set_config_BANG_(repo_url,config);

return config;
});
/**
 * Sets repo config state from db
 */
frontend.handler.repo_config.restore_repo_config_BANG_ = (function frontend$handler$repo_config$restore_repo_config_BANG_(var_args){
var G__63098 = arguments.length;
switch (G__63098) {
case 1:
return frontend.handler.repo_config.restore_repo_config_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.repo_config.restore_repo_config_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.repo_config.restore_repo_config_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (repo_url){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.repo_config.get_repo_config_content(repo_url)),(function (content){
return promesa.protocols._promise(frontend.handler.repo_config.restore_repo_config_BANG_.cljs$core$IFn$_invoke$arity$2(repo_url,content));
}));
}));
}));

(frontend.handler.repo_config.restore_repo_config_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (repo_url,config_content){
return frontend.handler.repo_config.set_repo_config_state_BANG_(repo_url,((frontend.handler.repo_config.readable_config_content_QMARK_(config_content))?config_content:frontend.config.config_default_content));
}));

(frontend.handler.repo_config.restore_repo_config_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * This component only has one responsibility on start, to manage db and ui state
 *   from repo config. It does not manage the repo directory, logseq/, as that is
 *   loosely done by repo-handler
 */
frontend.handler.repo_config.start = (function frontend$handler$repo_config$start(p__63101){
var map__63102 = p__63101;
var map__63102__$1 = cljs.core.__destructure_map(map__63102);
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63102__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679));
return frontend.handler.repo_config.restore_repo_config_BANG_.cljs$core$IFn$_invoke$arity$1(repo);
});

//# sourceMappingURL=frontend.handler.repo_config.js.map
