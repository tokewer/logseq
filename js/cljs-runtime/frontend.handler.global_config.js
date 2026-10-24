goog.provide('frontend.handler.global_config');
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.global_config !== 'undefined') && (typeof frontend.handler.global_config.root_dir !== 'undefined')){
} else {
frontend.handler.global_config.root_dir = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
/**
 * Fetch config dir in a global config context
 */
frontend.handler.global_config.global_config_dir = (function frontend$handler$global_config$global_config_dir(){
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(frontend.handler.global_config.root_dir),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["config"], 0));
});
/**
 * Fetch config path in a global config context
 */
frontend.handler.global_config.global_config_path = (function frontend$handler$global_config$global_config_path(){
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(frontend.handler.global_config.root_dir),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["config","config.edn"], 0));
});
frontend.handler.global_config.set_global_config_state_BANG_ = (function frontend$handler$global_config$set_global_config_state_BANG_(content){
var config = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(content);
frontend.state.set_global_config_BANG_(config,content);

return config;
});
frontend.handler.global_config.default_content = ";; This global config file applies a configuration to all graphs. Any config\n;; keys from a graph's logseq/config.edn can used here. A graph's\n;; logseq/config.edn overrides config keys in this file except for maps which\n;; are merged. As an example of merging, the following global and local configs:\n;;   {:shortcuts {:ui/toggle-theme \"t z\"}}\n;;   {:shortcuts {:ui/toggle-brackets \"t b\"}}\n;;\n;;  would result in the final config:\n;;   {:shortcuts {:ui/toggle-theme \"t z\"\n;;                :ui/toggle-brackets \"t b\"}}\n\n{}\n";
/**
 * Creates ~/.logseq/config/config.edn and its parent directory if they do not exist.
 */
frontend.handler.global_config.ensure_global_config_file_BANG_ = (function frontend$handler$global_config$ensure_global_config_file_BANG_(){
var config_dir = frontend.handler.global_config.global_config_dir();
var config_path = frontend.handler.global_config.global_config_path();
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.fs.mkdir_if_not_exists(config_dir)),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.fs.create_if_not_exists.cljs$core$IFn$_invoke$arity$4(null,null,config_path,frontend.handler.global_config.default_content)),(function (file_exists_QMARK_){
return promesa.protocols._promise((cljs.core.truth_(file_exists_QMARK_)?null:frontend.handler.global_config.set_global_config_state_BANG_(frontend.handler.global_config.default_content)));
}));
}));
}));
});
/**
 * Sets global config state from config file
 */
frontend.handler.global_config.restore_global_config_BANG_ = (function frontend$handler$global_config$restore_global_config_BANG_(){
var config_path = frontend.handler.global_config.global_config_path();
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2(null,config_path)),(function (config_content){
return promesa.protocols._promise(frontend.handler.global_config.set_global_config_state_BANG_(config_content));
}));
}));
});
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.global_config !== 'undefined') && (typeof frontend.handler.global_config._STAR_persist_tail !== 'undefined')){
} else {
frontend.handler.global_config._STAR_persist_tail = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(promesa.core.resolved(null));
}
/**
 * Runs f after earlier global-config disk writes so overlapping saves stay ordered.
 */
frontend.handler.global_config.enqueue_persist_BANG_ = (function frontend$handler$global_config$enqueue_persist_BANG_(f){
var prev = cljs.core.deref(frontend.handler.global_config._STAR_persist_tail);
var next = promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(prev),(function (___27434__auto__){
return promesa.protocols._promise((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}));
}));
cljs.core.reset_BANG_(frontend.handler.global_config._STAR_persist_tail,promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(next,(function (_){
return null;
})));

return next;
});
frontend.handler.global_config.set_global_config_kv_BANG_ = (function frontend$handler$global_config$set_global_config_kv_BANG_(k,v){
var result = borkdude.rewrite_edn.parse_string((function (){var or__5142__auto__ = frontend.state.get_global_config_str_content();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "{}";
}
})());
var ks = ((cljs.core.sequential_QMARK_(k))?k:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var v__$1 = (function (){var G__56128 = v;
if(cljs.core.map_QMARK_(v)){
return cljs.core.reduce_kv((function (a,k__$1,v__$1){
return borkdude.rewrite_edn.assoc(a,k__$1,v__$1);
}),borkdude.rewrite_edn.parse_string("{}"),G__56128);
} else {
return G__56128;
}
})();
var new_result = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(ks))) && ((v__$1 == null))))?borkdude.rewrite_edn.dissoc(result,cljs.core.first(ks)):borkdude.rewrite_edn.assoc_in(result,ks,v__$1));
var new_str_content = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_result));
frontend.state.set_global_config_BANG_(borkdude.rewrite_edn.sexpr(new_result),new_str_content);

return frontend.handler.global_config.enqueue_persist_BANG_((function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.fs.mkdir_if_not_exists(frontend.handler.global_config.global_config_dir())),(function (___27434__auto__){
return promesa.protocols._promise(frontend.fs.write_file_BANG_(frontend.handler.global_config.global_config_path(),new_str_content));
}));
}));
}));
});
/**
 * This component has three responsibilities on start:
 * - Fetch root-dir for later use with config paths
 * - Create a global config dir and file if it doesn't exist
 * - Manage ui state of global config
 */
frontend.handler.global_config.start = (function frontend$handler$global_config$start(_opts){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.timeout.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["getLogseqDotDirRoot"], 0))),(function (root_dir_SINGLEQUOTE_){
return promesa.protocols._promise(cljs.core.reset_BANG_(frontend.handler.global_config.root_dir,root_dir_SINGLEQUOTE_));
}));
}))),(function (___27434__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.global_config.ensure_global_config_file_BANG_()),(function (___27434__auto____$1){
return promesa.protocols._promise(frontend.handler.global_config.restore_global_config_BANG_());
}));
}));
})),(6000)),(function (e){
return console.error("cannot start global-config",e);
}));
});

//# sourceMappingURL=frontend.handler.global_config.js.map
