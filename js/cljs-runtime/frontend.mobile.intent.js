goog.provide('frontend.mobile.intent');
var module$node_modules$$capacitor$action_sheet$dist$plugin_cjs=shadow.js.require("module$node_modules$$capacitor$action_sheet$dist$plugin_cjs", {});
var module$node_modules$$capacitor$filesystem$dist$plugin_cjs=shadow.js.require("module$node_modules$$capacitor$filesystem$dist$plugin_cjs", {});
var module$node_modules$$capacitor$share$dist$plugin_cjs=shadow.js.require("module$node_modules$$capacitor$share$dist$plugin_cjs", {});
var module$node_modules$path$path=shadow.js.require("module$node_modules$path$path", {});
var module$node_modules$send_intent$dist$plugin_cjs=shadow.js.require("module$node_modules$send_intent$dist$plugin_cjs", {});
/**
 * Normalize iOS shared file URLs to paths that Capacitor Filesystem can read.
 *   iOS share extensions commonly provide `file://` URLs.
 */
frontend.mobile.intent.normalize_native_file_path = (function frontend$mobile$intent$normalize_native_file_path(url){
var url__$1 = (function (){var G__83651 = url;
if((G__83651 == null)){
return null;
} else {
return logseq.common.util.safe_decode_uri_component(G__83651);
}
})();
if(clojure.string.blank_QMARK_(url__$1)){
return url__$1;
} else {
if(clojure.string.starts_with_QMARK_(url__$1,"file://")){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(url__$1,(("file://").length));
} else {
if(clojure.string.starts_with_QMARK_(url__$1,"capacitor://localhost/_capacitor_file_")){
return clojure.string.replace(url__$1,"capacitor://localhost/_capacitor_file_","");
} else {
return url__$1;

}
}
}
});
frontend.mobile.intent._LT_filesystem_read_file = (function frontend$mobile$intent$_LT_filesystem_read_file(url){
var path = frontend.mobile.intent.normalize_native_file_path(url);
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(module$node_modules$$capacitor$filesystem$dist$plugin_cjs.Filesystem.readFile(({"path": path})),(function (error){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,url)){
return promesa.core.rejected(error);
} else {
return module$node_modules$$capacitor$filesystem$dist$plugin_cjs.Filesystem.readFile(({"path": url}));
}
}));
});
/**
 * Share file to mobile platform
 */
frontend.mobile.intent.open_or_share_file = (function frontend$mobile$intent$open_or_share_file(uri){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","open","ui/open",-1763599412)], 0)),new cljs.core.Keyword(null,"style","style",-496642736),"DEFAULT"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("mobile.intent","share","mobile.intent/share",1944011259)], 0))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","cancel","ui/cancel",-1964089788)], 0)),new cljs.core.Keyword(null,"style","style",-496642736),"CANCEL"], null)], null)),(function (options){
return promesa.protocols._mcat(promesa.protocols._promise(module$node_modules$$capacitor$action_sheet$dist$plugin_cjs.ActionSheet.showActions(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("mobile.intent","file-options","mobile.intent/file-options",224921049)], 0)),new cljs.core.Keyword(null,"message","message",-406056002),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("mobile.intent","select-option-prompt","mobile.intent/select-option-prompt",-621488146)], 0)),new cljs.core.Keyword(null,"options","options",99638489),options], null)))),(function (result){
return promesa.protocols._mcat(promesa.protocols._promise(result.index),(function (index){
return promesa.protocols._promise(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(index,(2)))?(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,(0));
if(and__5140__auto__){
return frontend.mobile.util.native_android_QMARK_();
} else {
return and__5140__auto__;
}
})())?frontend.mobile.util.folder_picker.openFile(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),uri], null))):module$node_modules$$capacitor$share$dist$plugin_cjs.Share.share(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),uri,new cljs.core.Keyword(null,"dialogTitle","dialogTitle",-1897103343),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("mobile.intent","open-with-app","mobile.intent/open-with-app",-1571979593)], 0)),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("mobile.intent","open-with-app","mobile.intent/open-with-app",-1571979593)], 0))], null)))):null));
}));
}));
}));
}));
});
frontend.mobile.intent.is_link = (function frontend$mobile$intent$is_link(url){
if(cljs.core.truth_(cljs.core.not_empty(url))){
return cljs.core.re_matches(/^[a-zA-Z0-9]+:\/\/.*$/,url);
} else {
return null;
}
});
/**
 * Extract highlighted text and url from mobile browser intent share.
 * - url can be prefixed with the highlighted text.
 * - url can be highlighted text only in some cases.
 */
frontend.mobile.intent.extract_highlight = (function frontend$mobile$intent$extract_highlight(url){
var vec__83665 = cljs.core.re_find(/\s+([a-zA-Z0-9]+:\/\/[\S]*)$/,url);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83665,(0),null);
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83665,(1),null);
var highlight = (cljs.core.truth_(cljs.core.not_empty(link))?(function (){var quoted = clojure.string.replace(url,link,"");
var quoted__$1 = goog.string.trimRight(quoted);
return goog.string.stripQuotes(quoted__$1,"\"");
})():null);
if(cljs.core.truth_(cljs.core.not_empty(highlight))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [highlight,link], null);
} else {
if(cljs.core.truth_(frontend.mobile.intent.is_link(url))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,url], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,null], null);

}
}
});
frontend.mobile.intent.transform_args = (function frontend$mobile$intent$transform_args(args){
var map__83670 = args;
var map__83670__$1 = cljs.core.__destructure_map(map__83670);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83670__$1,new cljs.core.Keyword(null,"url","url",276297046));
if(cljs.core.truth_(frontend.mobile.intent.is_link(url))){
return args;
} else {
var vec__83671 = frontend.mobile.intent.extract_highlight(url);
var highlight = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83671,(0),null);
var url_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83671,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword(null,"url","url",276297046),url_SINGLEQUOTE_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content","content",15833224),highlight], 0));
}
});
frontend.mobile.intent.handle_received_text = (function frontend$mobile$intent$handle_received_text(args){
var args__$1 = frontend.mobile.intent.transform_args(args);
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","quick-capture","editor/quick-capture",799865811),args__$1], null));
});
frontend.mobile.intent.embed_asset_file = (function frontend$mobile$intent$embed_asset_file(url,_format){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(module$node_modules$path$path.basename(url)),(function (basename){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.mobile.intent._LT_filesystem_read_file(url)),(function (file){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__83680 = file;
if((G__83680 == null)){
return null;
} else {
return G__83680.data;
}
})()),(function (file_base64_str){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__83681 = file_base64_str;
var G__83681__$1 = (((G__83681 == null))?null:module$frontend$utils.base64ToUint8Array(G__83681));
var G__83681__$2 = (((G__83681__$1 == null))?null:(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__83681__$1],null)));
var G__83681__$3 = (((G__83681__$2 == null))?null:cljs.core.clj__GT_js(G__83681__$2));
if((G__83681__$3 == null)){
return null;
} else {
return (new File(G__83681__$3,basename,({})));
}
})()),(function (file__$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.assets.db_based_save_assets_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file__$1], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY], 0))),(function (result){
return promesa.protocols._promise(cljs.core.first(result));
}));
}));
}));
}));
}));
}));
});
frontend.mobile.intent.handle_received_media = (function frontend$mobile$intent$handle_received_media(result){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(result),(function (p__83683){
var map__83684 = p__83683;
var map__83684__$1 = cljs.core.__destructure_map(map__83684);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83684__$1,new cljs.core.Keyword(null,"url","url",276297046));
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.Keyword(null,"markdown","markdown",1227225089)),(function (format){
return promesa.protocols._promise(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(frontend.mobile.intent.embed_asset_file(url,format),(function (error){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.mobile.intent",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"share-import-media-failed","share-import-media-failed",1766340209),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),error,new cljs.core.Keyword(null,"url","url",276297046),url], null),new cljs.core.Keyword(null,"line","line",212345235),130], null)),null);
} else {
}

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("mobile.share","media-import-error","mobile.share/media-import-error",-1581733401)], 0)),new cljs.core.Keyword(null,"error","error",-978969032),false);
})));
}));
}));
}));
});
frontend.mobile.intent.handle_received_application = (function frontend$mobile$intent$handle_received_application(result){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(result),(function (p__83685){
var map__83686 = p__83685;
var map__83686__$1 = cljs.core.__destructure_map(map__83686);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83686__$1,new cljs.core.Keyword(null,"url","url",276297046));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83686__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_today_journal_title(frontend.state.get_current_repo())),(function (today_page_title){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return clojure.string.lower_case(today_page_title);
}
})()),(function (page){
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.Keyword(null,"markdown","markdown",1227225089)),(function (format){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(type,"/"))),(function (application_type){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core.contains_QMARK_(clojure.set.union.cljs$core$IFn$_invoke$arity$2(frontend.config.doc_formats,frontend.config.media_formats),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(application_type)))?(function (){
frontend.mobile.intent.embed_asset_file(url,format);

return null;
})()
:frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.interpolate_rich_text_node.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("mobile.share","unsupported-import-type","mobile.share/unsupported-import-type",-564715922)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [application_type,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/logseq/db-test/issues",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"GitHub"], null)], null))], null),new cljs.core.Keyword(null,"warning","warning",-1685650671),false)
)),(function (content){
return promesa.protocols._promise((cljs.core.truth_(content)?(cljs.core.truth_(frontend.state.get_edit_block())?frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$1(content):frontend.handler.editor.api_insert_new_block_BANG_(content,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page","page",849072397),page,new cljs.core.Keyword(null,"edit-block?","edit-block?",-310383789),false,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),true], null))):null));
}));
}));
}));
}));
}));
}));
}));
});
frontend.mobile.intent.decode_received_result = (function frontend$mobile$intent$decode_received_result(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5628__auto__ = (function frontend$mobile$intent$decode_received_result_$_iter__83688(s__83689){
return (new cljs.core.LazySeq(null,(function (){
var s__83689__$1 = s__83689;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__83689__$1);
if(temp__5825__auto__){
var s__83689__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__83689__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__83689__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__83691 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__83690 = (0);
while(true){
if((i__83690 < size__5627__auto__)){
var vec__83693 = cljs.core._nth(c__5626__auto__,i__83690);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83693,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83693,(1),null);
cljs.core.chunk_append(b__83691,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core.vector_QMARK_(v))?cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.mobile.intent.decode_received_result,v)):((clojure.string.blank_QMARK_(v))?null:(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())?logseq.common.util.safe_decode_uri_component(v):v)
))], null));

var G__83731 = (i__83690 + (1));
i__83690 = G__83731;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__83691),frontend$mobile$intent$decode_received_result_$_iter__83688(cljs.core.chunk_rest(s__83689__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__83691),null);
}
} else {
var vec__83696 = cljs.core.first(s__83689__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83696,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83696,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core.vector_QMARK_(v))?cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.mobile.intent.decode_received_result,v)):((clojure.string.blank_QMARK_(v))?null:(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())?logseq.common.util.safe_decode_uri_component(v):v)
))], null),frontend$mobile$intent$decode_received_result_$_iter__83688(cljs.core.rest(s__83689__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(m);
})());
});
frontend.mobile.intent.handle_asset_file = (function frontend$mobile$intent$handle_asset_file(url,_format){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(module$node_modules$path$path.basename(url)),(function (basename){
return promesa.protocols._mcat(promesa.protocols._promise((frontend.util.node_path.name.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.name.cljs$core$IFn$_invoke$arity$1(basename) : frontend.util.node_path.name.call(null,basename))),(function (_label){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.assets.get_asset_path(basename)),(function (_path){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.mobile.intent._LT_filesystem_read_file(url)),(function (file){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__83700 = file;
if((G__83700 == null)){
return null;
} else {
return G__83700.data;
}
})()),(function (file_base64_str){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__83701 = file_base64_str;
var G__83701__$1 = (((G__83701 == null))?null:module$frontend$utils.base64ToUint8Array(G__83701));
var G__83701__$2 = (((G__83701__$1 == null))?null:(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__83701__$1],null)));
var G__83701__$3 = (((G__83701__$2 == null))?null:cljs.core.clj__GT_js(G__83701__$2));
if((G__83701__$3 == null)){
return null;
} else {
return (new File(G__83701__$3,basename,({})));
}
})()),(function (file__$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.assets.db_based_save_assets_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file__$1], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY], 0))),(function (result){
return promesa.protocols._promise(result);
}));
}));
}));
}));
}));
}));
}));
})),(function (error){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.mobile.intent",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handle-asset-file","handle-asset-file",135623431),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),error,new cljs.core.Keyword(null,"url","url",276297046),url], null),new cljs.core.Keyword(null,"line","line",212345235),187], null)),null);
} else {
}

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("mobile.share","file-import-error","mobile.share/file-import-error",-1643370786)], 0)),new cljs.core.Keyword(null,"error","error",-978969032),false);
}));
});
frontend.mobile.intent.handle_payload_resource = (function frontend$mobile$intent$handle_payload_resource(p__83703,format){
var map__83704 = p__83703;
var map__83704__$1 = cljs.core.__destructure_map(map__83704);
var resource = map__83704__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83704__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83704__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var ext = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83704__$1,new cljs.core.Keyword(null,"ext","ext",-996964541));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83704__$1,new cljs.core.Keyword(null,"url","url",276297046));
if(cljs.core.truth_(url)){
if(cljs.core.contains_QMARK_(clojure.set.union.cljs$core$IFn$_invoke$arity$2(frontend.config.doc_formats,frontend.config.media_formats),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(ext))){
return frontend.mobile.intent.handle_asset_file(url,format);
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.interpolate_rich_text_node.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("mobile.share","unsupported-content-warning","mobile.share/unsupported-content-warning",-1088865315)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/logseq/db-test/issues/new?labels=from:in-app&template=bug_report.yaml",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"GitHub"], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.code","pre.code",2043838796),(function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__83705_83735 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__83706_83736 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__83707_83737 = true;
var _STAR_print_fn_STAR__temp_val__83708_83738 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__83707_83737);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__83708_83738);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(resource);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__83706_83736);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__83705_83735);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})()], null)], null),new cljs.core.Keyword(null,"warning","warning",-1685650671),false);

}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"text/plain")){
return name;
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.interpolate_rich_text_node.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("mobile.share","unsupported-content-warning","mobile.share/unsupported-content-warning",-1088865315)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/logseq/db-test/issues/new?labels=from:in-app&template=bug_report.yaml",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"GitHub"], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.code","pre.code",2043838796),(function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__83709_83739 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__83710_83740 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__83711_83741 = true;
var _STAR_print_fn_STAR__temp_val__83712_83742 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__83711_83741);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__83712_83742);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(resource);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__83710_83740);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__83709_83739);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})()], null)], null),new cljs.core.Keyword(null,"warning","warning",-1685650671),false);

}
}
});
/**
 * Mobile share intent handler v2, use complex payload to support more types of content.
 */
frontend.mobile.intent.handle_payload = (function frontend$mobile$intent$handle_payload(payload){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_today_journal_title(frontend.state.get_current_repo())),(function (today_page_title){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return clojure.string.lower_case(today_page_title);
}
})()),(function (page){
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.Keyword(null,"markdown","markdown",1227225089)),(function (format){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quick-capture-templates","quick-capture-templates",-1488741596),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"**{time}** [[quick capture]]\u200B {text} {url}")),(function (template){
return promesa.protocols._mcat(promesa.protocols._promise(payload),(function (p__83713){
var map__83714 = p__83713;
var map__83714__$1 = cljs.core.__destructure_map(map__83714);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83714__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var resources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83714__$1,new cljs.core.Keyword(null,"resources","resources",1632806811));
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = text;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})()),(function (text__$1){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (resource){
return frontend.mobile.intent.handle_payload_resource(resource,format);
}),resources)),(function (result){
if(cljs.core.every_QMARK_(cljs.core.string_QMARK_,result)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",result);
} else {
return null;
}
}))),(function (rich_content){
return promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = (function (){var or__5142__auto__ = cljs.core.not_empty(text__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.not_empty(rich_content);
}
})();
if(cljs.core.truth_(and__5140__auto__)){
return (!(cljs.core.every_QMARK_((function (resource){
return cljs.core.contains_QMARK_(clojure.set.union.cljs$core$IFn$_invoke$arity$2(frontend.config.doc_formats,frontend.config.media_formats),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ext","ext",-996964541).cljs$core$IFn$_invoke$arity$1(resource)));
}),resources)));
} else {
return and__5140__auto__;
}
})())?(function (){var time = frontend.date.get_current_time();
var date_ref_name = today_page_title;
var content = clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(template,"{time}",time),"{date}",date_ref_name),"{text}",text__$1),"{url}",rich_content);
var edit_content = frontend.state.get_edit_content();
var edit_content_blank_QMARK_ = clojure.string.blank_QMARK_(edit_content);
var edit_content_include_capture_QMARK_ = (function (){var and__5140__auto__ = cljs.core.not_empty(edit_content);
if(cljs.core.truth_(and__5140__auto__)){
return clojure.string.includes_QMARK_(edit_content,"[[quick capture]]");
} else {
return and__5140__auto__;
}
})();
if(((frontend.state.editing_QMARK_()) && (cljs.core.not(edit_content_include_capture_QMARK_)))){
if(edit_content_blank_QMARK_){
return frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$1(content);
} else {
return frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$1((""+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)));
}
} else {
frontend.handler.editor.escape_editing();

return setTimeout((function (){
return frontend.handler.editor.api_insert_new_block_BANG_(content,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page","page",849072397),page,new cljs.core.Keyword(null,"edit-block?","edit-block?",-310383789),true,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),true], null));
}),(100));
}
})():null));
}));
}));
}));
}));
}));
}));
}));
}));
});
/**
 * Mobile share intent handler v1, legacy. Only for Android
 */
frontend.mobile.intent.handle_result = (function frontend$mobile$intent$handle_result(result){
var result__$1 = frontend.mobile.intent.decode_received_result(result);
var temp__5825__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(result__$1);
if(cljs.core.truth_(temp__5825__auto__)){
var type = temp__5825__auto__;
if(clojure.string.starts_with_QMARK_(type,"text/")){
return frontend.mobile.intent.handle_received_text(result__$1);
} else {
if(((clojure.string.starts_with_QMARK_(type,"image/")) || (((clojure.string.starts_with_QMARK_(type,"video/")) || (clojure.string.starts_with_QMARK_(type,"audio/")))))){
return frontend.mobile.intent.handle_received_media(result__$1);
} else {
if(clojure.string.starts_with_QMARK_(type,"application/")){
return frontend.mobile.intent.handle_received_application(result__$1);
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.interpolate_rich_text_node.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("mobile.share","unsupported-content-warning","mobile.share/unsupported-content-warning",-1088865315)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/logseq/db-test/issues/new?labels=from:in-app&template=bug_report.yaml",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"GitHub"], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.code","pre.code",2043838796),(function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__83724_83753 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__83725_83754 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__83726_83755 = true;
var _STAR_print_fn_STAR__temp_val__83727_83756 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__83726_83755);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__83727_83756);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(result__$1);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__83725_83754);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__83724_83753);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})()], null)], null),new cljs.core.Keyword(null,"warning","warning",-1685650671),false);

}
}
}
} else {
return null;
}
});
frontend.mobile.intent.handle_received = (function frontend$mobile$intent$handle_received(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(module$node_modules$send_intent$dist$plugin_cjs.SendIntent.checkSendIntentReceived(),(function (error){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"intent-received-error","intent-received-error",2097503730),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null)], 0));
}))),(function (received){
return promesa.protocols._promise((cljs.core.truth_(received)?(function (){var result = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(received,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return frontend.mobile.intent.handle_result(result);
})():null));
}));
}));
});

//# sourceMappingURL=frontend.mobile.intent.js.map
