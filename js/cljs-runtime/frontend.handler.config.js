goog.provide('frontend.handler.config');
frontend.handler.config._LT_get_file_content = (function frontend$handler$config$_LT_get_file_content(repo,path){
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-file-content","thread-api/get-file-content",-718755763),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,path], 0));
});
/**
 * Parse repo configuration file content
 */
frontend.handler.config.parse_repo_config = (function frontend$handler$config$parse_repo_config(content){
return borkdude.rewrite_edn.parse_string(content);
});
frontend.handler.config.repo_config_set_key_value = (function frontend$handler$config$repo_config_set_key_value(path,k,v){
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.config._LT_get_file_content(repo,path)),(function (content){
return promesa.protocols._promise((function (){var result = frontend.handler.config.parse_repo_config(((frontend.handler.repo_config.readable_config_content_QMARK_(content))?content:frontend.config.config_default_content));
var ks = ((cljs.core.vector_QMARK_(k))?k:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var v__$1 = (function (){var G__63650 = v;
if(cljs.core.map_QMARK_(v)){
return cljs.core.reduce_kv((function (a,k__$1,v__$1){
return borkdude.rewrite_edn.assoc(a,k__$1,v__$1);
}),borkdude.rewrite_edn.parse_string("{}"),G__63650);
} else {
return G__63650;
}
})();
var new_result = borkdude.rewrite_edn.assoc_in(result,ks,v__$1);
var new_content = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_result));
return frontend.handler.db_based.editor.save_file_BANG_(path,new_content);
})());
}));
}));
} else {
return null;
}
});
frontend.handler.config.set_config_BANG_ = (function frontend$handler$config$set_config_BANG_(k,v){
var path = "logseq/config.edn";
return frontend.handler.config.repo_config_set_key_value(path,k,v);
});
frontend.handler.config.toggle_ui_show_brackets_BANG_ = (function frontend$handler$config$toggle_ui_show_brackets_BANG_(){
var show_brackets_QMARK_ = frontend.state.show_brackets_QMARK_();
return frontend.handler.config.set_config_BANG_(new cljs.core.Keyword("ui","show-brackets?","ui/show-brackets?",659790606),(!(show_brackets_QMARK_)));
});
frontend.handler.config.toggle_logical_outdenting_BANG_ = (function frontend$handler$config$toggle_logical_outdenting_BANG_(){
var logical_outdenting_QMARK_ = frontend.state.logical_outdenting_QMARK_();
return frontend.handler.config.set_config_BANG_(new cljs.core.Keyword("editor","logical-outdenting?","editor/logical-outdenting?",-234289706),cljs.core.not(logical_outdenting_QMARK_));
});
frontend.handler.config.toggle_show_full_blocks_BANG_ = (function frontend$handler$config$toggle_show_full_blocks_BANG_(){
var show_full_blocks_QMARK_ = frontend.state.show_full_blocks_QMARK_();
return frontend.handler.config.set_config_BANG_(new cljs.core.Keyword("ui","show-full-blocks?","ui/show-full-blocks?",-87079885),cljs.core.not(show_full_blocks_QMARK_));
});
frontend.handler.config.toggle_auto_expand_block_refs_BANG_ = (function frontend$handler$config$toggle_auto_expand_block_refs_BANG_(){
var auto_expand_block_refs_QMARK_ = frontend.state.auto_expand_block_refs_QMARK_();
return frontend.handler.config.set_config_BANG_(new cljs.core.Keyword("ui","auto-expand-block-refs?","ui/auto-expand-block-refs?",-1188664588),cljs.core.not(auto_expand_block_refs_QMARK_));
});
frontend.handler.config.toggle_ui_enable_tooltip_BANG_ = (function frontend$handler$config$toggle_ui_enable_tooltip_BANG_(){
var enable_tooltip_QMARK_ = frontend.state.enable_tooltip_QMARK_();
return frontend.handler.config.set_config_BANG_(new cljs.core.Keyword("ui","enable-tooltip?","ui/enable-tooltip?",1082007831),cljs.core.not(enable_tooltip_QMARK_));
});
frontend.handler.config.toggle_preferred_pasting_file_BANG_ = (function frontend$handler$config$toggle_preferred_pasting_file_BANG_(){
var preferred_pasting_file_QMARK_ = frontend.state.preferred_pasting_file_QMARK_();
return frontend.handler.config.set_config_BANG_(new cljs.core.Keyword("editor","preferred-pasting-file?","editor/preferred-pasting-file?",-1242172921),cljs.core.not(preferred_pasting_file_QMARK_));
});

//# sourceMappingURL=frontend.handler.config.js.map
