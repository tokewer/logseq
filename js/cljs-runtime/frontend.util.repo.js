goog.provide('frontend.util.repo');
frontend.util.repo.get_repo_name = (function frontend$util$repo$get_repo_name(repo_url){
if(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())){
return frontend.util.text.get_graph_name_from_path(repo_url);
} else {
if(typeof repo_url === 'string'){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"repo-url is not a string: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(repo_url))))+"\n"+"(string? repo-url)")));
}

return repo_url;

}
});
/**
 * repo-name: from get-repo-name. Dir/Name => Name
 */
frontend.util.repo.get_short_repo_name = (function frontend$util$repo$get_short_repo_name(repo_name){
var repo_name_SINGLEQUOTE_ = (cljs.core.truth_(frontend.util.electron_QMARK_())?(logseq.graph_parser.text.get_file_basename.cljs$core$IFn$_invoke$arity$1 ? logseq.graph_parser.text.get_file_basename.cljs$core$IFn$_invoke$arity$1(repo_name) : logseq.graph_parser.text.get_file_basename.call(null,repo_name)):(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())?logseq.common.util.safe_decode_uri_component((logseq.graph_parser.text.get_file_basename.cljs$core$IFn$_invoke$arity$1 ? logseq.graph_parser.text.get_file_basename.cljs$core$IFn$_invoke$arity$1(repo_name) : logseq.graph_parser.text.get_file_basename.call(null,repo_name))):repo_name
));
if(frontend.config.db_based_graph_QMARK_.cljs$core$IFn$_invoke$arity$1(repo_name_SINGLEQUOTE_)){
return frontend.config.db_graph_name(repo_name_SINGLEQUOTE_);
} else {
return repo_name_SINGLEQUOTE_;
}
});

//# sourceMappingURL=frontend.util.repo.js.map
