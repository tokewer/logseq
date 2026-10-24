goog.provide('frontend.components.file_content');
frontend.components.file_content._LT_read_file_content = (function frontend$components$file_content$_LT_read_file_content(repo,_repo_dir,file_path){
if((!(logseq.common.path.absolute_QMARK_(file_path)))){
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-file-content","thread-api/get-file-content",-718755763),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,file_path], 0));
} else {
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2(null,file_path),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.fs.mkdir_if_not_exists(logseq.common.path.parent(file_path))),(function (___27434__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.fs.create_if_not_exists.cljs$core$IFn$_invoke$arity$4(null,null,file_path,"")),(function (___27434__auto____$1){
return promesa.protocols._promise("");
}));
}));
}));
}));
}
});

//# sourceMappingURL=frontend.components.file_content.js.map
