goog.provide('frontend.handler.export$.text');
/**
 * options:
 *   :indent-style "dashes" | "spaces" | "no-indent"
 *   :remove-options [:emphasis :page-ref :tag :property]
 *   :other-options {:keep-only-level<=N int :newline-after-block bool}
 */
frontend.handler.export$.text.export_blocks_as_markdown = (function frontend$handler$export$text$export_blocks_as_markdown(repo,root_block_uuids_or_page_uuid,options){
if(((cljs.core.coll_QMARK_(root_block_uuids_or_page_uuid)) || (cljs.core.uuid_QMARK_(root_block_uuids_or_page_uuid)))){
} else {
throw (new Error("Assert failed: (or (coll? root-block-uuids-or-page-uuid) (uuid? root-block-uuids-or-page-uuid))"));
}

if(cljs.core.truth_(goog.DEBUG)){
var k__34199__auto__ = new cljs.core.Keyword(null,"export-blocks-as-markdown","export-blocks-as-markdown",-915039746);
console.time(k__34199__auto__);

var res__34200__auto__ = promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common._LT_export_blocks_as_format(repo,root_block_uuids_or_page_uuid,new cljs.core.Keyword(null,"markdown","markdown",1227225089),options),(function (e){
return console.error(e);
}));
console.timeEnd(k__34199__auto__);

return res__34200__auto__;
} else {
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common._LT_export_blocks_as_format(repo,root_block_uuids_or_page_uuid,new cljs.core.Keyword(null,"markdown","markdown",1227225089),options),(function (e){
return console.error(e);
}));
}
});
/**
 * options see also `export-blocks-as-markdown`
 */
frontend.handler.export$.text.export_files_as_markdown = (function frontend$handler$export$text$export_files_as_markdown(files,options){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__65969){
var map__65970 = p__65969;
var map__65970__$1 = cljs.core.__destructure_map(map__65970);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65970__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65970__$1,new cljs.core.Keyword(null,"title","title",636505583));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65970__$1,new cljs.core.Keyword(null,"content","content",15833224));
if(cljs.core.truth_(goog.DEBUG)){
var k__34199__auto__ = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"export-files-as-markdown","export-files-as-markdown",1418547627),title], 0));
console.time(k__34199__auto__);

var res__34200__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5142__auto__ = path;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return title;
}
})(),frontend.handler.export$.text_impl.export_helper(content,new cljs.core.Keyword(null,"markdown","markdown",1227225089),options)], null);
console.timeEnd(k__34199__auto__);

return res__34200__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5142__auto__ = path;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return title;
}
})(),frontend.handler.export$.text_impl.export_helper(content,new cljs.core.Keyword(null,"markdown","markdown",1227225089),options)], null);
}
}),files);
});
/**
 * TODO: indent-style and remove-options
 */
frontend.handler.export$.text.export_repo_as_markdown_BANG_ = (function frontend$handler$export$text$export_repo_as_markdown_BANG_(repo){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(goog.DEBUG)?(function (){var k__34199__auto__ = new cljs.core.Keyword(null,"get-file-content","get-file-content",643543160);
console.time(k__34199__auto__);

var res__34200__auto__ = frontend.handler.export$.common._LT_get_file_contents(repo,"md");
console.timeEnd(k__34199__auto__);

return res__34200__auto__;
})():frontend.handler.export$.common._LT_get_file_contents(repo,"md"))),(function (files_STAR_){
return promesa.protocols._promise(((cljs.core.seq(files_STAR_))?(function (){var files = frontend.handler.export$.text.export_files_as_markdown(files_STAR_,null);
var repo_SINGLEQUOTE_ = clojure.string.replace(repo,frontend.config.db_version_prefix,"");
var zip_file_name = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo_SINGLEQUOTE_)+"_markdown_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.quot((frontend.util.time_ms.cljs$core$IFn$_invoke$arity$0 ? frontend.util.time_ms.cljs$core$IFn$_invoke$arity$0() : frontend.util.time_ms.call(null)),(1000))));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.extensions.zip.make_zip(zip_file_name,files,repo_SINGLEQUOTE_)),(function (zipfile){
return promesa.protocols._promise((function (){var temp__5825__auto__ = goog.dom.getElement("export-as-markdown");
if(cljs.core.truth_(temp__5825__auto__)){
var anchor = temp__5825__auto__;
anchor.setAttribute("href",window.URL.createObjectURL(zipfile));

anchor.setAttribute("download",zipfile.name);

return anchor.click();
} else {
return null;
}
})());
}));
}));
})():null));
}));
}));
});

//# sourceMappingURL=frontend.handler.export.text.js.map
