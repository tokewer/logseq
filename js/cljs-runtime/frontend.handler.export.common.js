goog.provide('frontend.handler.export$.common');
frontend.handler.export$.common.get_content_config = (function frontend$handler$export$common$get_content_config(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"export-bullet-indentation","export-bullet-indentation",-248047595),frontend.state.get_export_bullet_indentation(),new cljs.core.Keyword(null,"date-formatter","date-formatter",-223324709),frontend.state.get_date_formatter(),new cljs.core.Keyword(null,"encode-highlight-as-mark?","encode-highlight-as-mark?",1783890478),true], null);
});
frontend.handler.export$.common._LT_export_blocks_as_format = (function frontend$handler$export$common$_LT_export_blocks_as_format(repo,root_block_uuids_or_page_uuid,format_type,options){
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","export-blocks-as-format","thread-api/export-blocks-as-format",669413433),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,root_block_uuids_or_page_uuid,format_type,options,frontend.handler.export$.common.get_content_config()], 0));
});
frontend.handler.export$.common._LT_get_blocks_export_data = (function frontend$handler$export$common$_LT_get_blocks_export_data(repo,root_block_uuids_or_page_uuid,opts){
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","export-get-blocks-data","thread-api/export-get-blocks-data",351172282),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,root_block_uuids_or_page_uuid,opts,frontend.handler.export$.common.get_content_config()], 0));
});
frontend.handler.export$.common._LT_get_debug_datoms = (function frontend$handler$export$common$_LT_get_debug_datoms(repo){
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","export-get-debug-datoms","thread-api/export-get-debug-datoms",-876994180),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo], 0));
});
frontend.handler.export$.common._LT_get_all_page__GT_content = (function frontend$handler$export$common$_LT_get_all_page__GT_content(repo,options){
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","export-get-all-page->content","thread-api/export-get-all-page->content",1294444679),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,options], 0));
});
frontend.handler.export$.common._LT_get_file_contents = (function frontend$handler$export$common$_LT_get_file_contents(repo,suffix){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.export$.common._LT_get_all_page__GT_content(repo,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"export-bullet-indentation","export-bullet-indentation",-248047595),frontend.state.get_export_bullet_indentation()], null))),(function (page__GT_content){
return promesa.protocols._promise(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65583){
var vec__65585 = p__65583;
var page_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65585,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65585,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_title)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)),new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"title","title",636505583),page_title,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"markdown","markdown",1227225089)], null);
}),page__GT_content));
}));
}));
});
frontend.handler.export$.common.replace_block_AMPERSAND_page_reference_AMPERSAND_embed = frontend.handler.export$.common_impl.replace_block_AMPERSAND_page_reference_AMPERSAND_embed;
frontend.handler.export$.common.replace_Heading_with_Paragraph = frontend.handler.export$.common_impl.replace_Heading_with_Paragraph;
frontend.handler.export$.common.priority__GT_string = frontend.handler.export$.common_impl.priority__GT_string;
frontend.handler.export$.common.timestamp_to_string = frontend.handler.export$.common_impl.timestamp_to_string;
frontend.handler.export$.common.hashtag_value__GT_string = frontend.handler.export$.common_impl.hashtag_value__GT_string;
frontend.handler.export$.common.remove_block_ast_pos = frontend.handler.export$.common_impl.remove_block_ast_pos;
frontend.handler.export$.common.Properties_block_ast_QMARK_ = frontend.handler.export$.common_impl.Properties_block_ast_QMARK_;
frontend.handler.export$.common.keep_only_level_LT__EQ_n = frontend.handler.export$.common_impl.keep_only_level_LT__EQ_n;
frontend.handler.export$.common.remove_emphasis = frontend.handler.export$.common_impl.remove_emphasis;
frontend.handler.export$.common.remove_page_ref_brackets = frontend.handler.export$.common_impl.remove_page_ref_brackets;
frontend.handler.export$.common.remove_tags = frontend.handler.export$.common_impl.remove_tags;
frontend.handler.export$.common.remove_prefix_spaces_in_Plain = frontend.handler.export$.common_impl.remove_prefix_spaces_in_Plain;
frontend.handler.export$.common.walk_block_ast = frontend.handler.export$.common_impl.walk_block_ast;

//# sourceMappingURL=frontend.handler.export.common.js.map
