goog.provide('frontend.handler.assets');
/**
 * Asset size no more than 100M
 */
frontend.handler.assets.exceed_limit_size_QMARK_ = (function frontend$handler$assets$exceed_limit_size_QMARK_(file){
return (file.size > (((100) * (1024)) * (1024)));
});
frontend.handler.assets.alias_enabled_QMARK_ = (function frontend$handler$assets$alias_enabled_QMARK_(){
var and__5140__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword("assets","alias-enabled?","assets/alias-enabled?",-40753727).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0());
} else {
return and__5140__auto__;
}
});
frontend.handler.assets.clean_path_prefix = (function frontend$handler$assets$clean_path_prefix(path){
if(typeof path === 'string'){
return clojure.string.replace_first(path,/^[.\\/\\]*(assets)[\\/\\]+/,"");
} else {
return null;
}
});
frontend.handler.assets.check_alias_path_QMARK_ = (function frontend$handler$assets$check_alias_path_QMARK_(path){
var and__5140__auto__ = typeof path === 'string';
if(and__5140__auto__){
var G__63367 = path;
var G__63367__$1 = (((G__63367 == null))?null:frontend.handler.assets.clean_path_prefix(G__63367));
if((G__63367__$1 == null)){
return null;
} else {
return clojure.string.starts_with_QMARK_(G__63367__$1,"@");
}
} else {
return and__5140__auto__;
}
});
frontend.handler.assets.get_alias_dirs = (function frontend$handler$assets$get_alias_dirs(){
return new cljs.core.Keyword("assets","alias-dirs","assets/alias-dirs",627599020).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0());
});
frontend.handler.assets.get_alias_by_dir = (function frontend$handler$assets$get_alias_by_dir(dir){
var temp__5825__auto__ = (function (){var and__5140__auto__ = frontend.handler.assets.alias_enabled_QMARK_();
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.seq(frontend.handler.assets.get_alias_dirs());
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var alias_dirs = temp__5825__auto__;
return medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p1__63371_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dir,new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__63371_SHARP_)));
}),medley.core.indexed.cljs$core$IFn$_invoke$arity$1(alias_dirs));
} else {
return null;
}
});
frontend.handler.assets.get_alias_by_name = (function frontend$handler$assets$get_alias_by_name(name){
var temp__5825__auto__ = (function (){var and__5140__auto__ = frontend.handler.assets.alias_enabled_QMARK_();
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.seq(frontend.handler.assets.get_alias_dirs());
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var alias_dirs = temp__5825__auto__;
return medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p1__63377_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__63377_SHARP_)));
}),medley.core.indexed.cljs$core$IFn$_invoke$arity$1(alias_dirs));
} else {
return null;
}
});
/**
 * Returns asset url for an area block used by pdf assets. This lives in this ns
 *   because it is used by this dep and needs to be independent from the frontend app
 */
frontend.handler.assets.get_area_block_asset_url = (function frontend$handler$assets$get_area_block_asset_url(block){
var temp__5825__auto__ = new cljs.core.Keyword("logseq.property.pdf","hl-image","logseq.property.pdf/hl-image",137767009).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5825__auto__)){
var image = temp__5825__auto__;
return (""+"./assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(image))+".png");
} else {
return null;
}
});
frontend.handler.assets.windows_drive_absolute_path_QMARK_ = (function frontend$handler$assets$windows_drive_absolute_path_QMARK_(path){
return ((typeof path === 'string') && (cljs.core.boolean$(cljs.core.re_find(/^[A-Za-z]:[\\/\\]/,path))));
});
frontend.handler.assets.protect_windows_drive_in_assets_path = (function frontend$handler$assets$protect_windows_drive_in_assets_path(path){
var G__63381 = path;
if(frontend.handler.assets.windows_drive_absolute_path_QMARK_(path)){
return clojure.string.replace_first(G__63381,/:/,"/logseq__colon/");
} else {
return G__63381;
}
});
frontend.handler.assets.asset_protocol_url__GT_media_url = (function frontend$handler$assets$asset_protocol_url__GT_media_url(url){
if(cljs.core.truth_((function (){var and__5140__auto__ = logseq.common.config.local_protocol_asset_QMARK_(url);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(frontend.util.electron_QMARK_());
} else {
return and__5140__auto__;
}
})())){
return clojure.string.replace_first(logseq.common.config.remove_asset_protocol(url),"/logseq__colon/",":/");
} else {
return url;
}
});
frontend.handler.assets.resolve_asset_real_path_url = (function frontend$handler$assets$resolve_asset_real_path_url(repo,rpath){
var temp__5825__auto__ = (function (){var and__5140__auto__ = typeof rpath === 'string';
if(and__5140__auto__){
return clojure.string.replace(rpath,/^[.\\/\\]+/,"");
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var rpath__$1 = temp__5825__auto__;
if(frontend.config.publishing_QMARK_){
return (""+"./"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rpath__$1));
} else {
var ret = (function (){var rpath__$2 = (((!(clojure.string.starts_with_QMARK_(rpath__$1,logseq.common.config.local_assets_dir))))?logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(logseq.common.config.local_assets_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rpath__$1], 0)):rpath__$1);
var encoded_chars_QMARK_ = cljs.core.boolean$(cljs.core.re_find(/%[0-9a-f]{2}/i,rpath__$2));
var rpath__$3 = ((encoded_chars_QMARK_)?decodeURI(rpath__$2):rpath__$2);
var graph_root = frontend.config.get_repo_dir(repo);
var graph_root__$1 = (cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.handler.assets.protect_windows_drive_in_assets_path(graph_root):graph_root);
var has_schema_QMARK_ = clojure.string.starts_with_QMARK_(graph_root__$1,"file:");
var protocol = (cljs.core.truth_(frontend.util.electron_QMARK_())?"assets:":"file:");
if(has_schema_QMARK_){
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(graph_root__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rpath__$3], 0));
} else {
return logseq.common.path.prepend_protocol(protocol,logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(graph_root__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rpath__$3], 0)));
}
})();
return ret;
}
} else {
return null;
}
});
/**
 * try to convert resource file to url asset link
 */
frontend.handler.assets.normalize_asset_resource_url = (function frontend$handler$assets$normalize_asset_resource_url(path){
var windows_drive_path_QMARK_ = frontend.handler.assets.windows_drive_absolute_path_QMARK_(path);
var protocol_link_QMARK_ = (((!(windows_drive_path_QMARK_))) && (logseq.common.config.protocol_path_QMARK_(path)));
if(protocol_link_QMARK_){
return path;
} else {
if(((logseq.common.path.absolute_QMARK_(path)) || (windows_drive_path_QMARK_))){
var protocol = (cljs.core.truth_(frontend.util.electron_QMARK_())?"assets://":"file://");
var path__$1 = (cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.handler.assets.protect_windows_drive_in_assets_path(path):path);
if(cljs.core.boolean$(cljs.core.re_find(/%[0-9a-f]{2}/i,path__$1))){
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(protocol,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.common.util.safe_decode_uri_component(path__$1)], 0));
} else {
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(protocol,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path__$1], 0));
}
} else {
var G__63390 = frontend.handler.assets.resolve_asset_real_path_url(frontend.state.get_current_repo(),path);
if((G__63390 == null)){
return null;
} else {
return logseq.common.util.safe_decode_uri_component(G__63390);
}

}
}
});
frontend.handler.assets.encode_iframe_path_segment = (function frontend$handler$assets$encode_iframe_path_segment(segment){
var escaped = clojure.string.replace(segment,/%(?![0-9a-fA-F]{2})/,"%25");
var decoded = (function (){try{return decodeURIComponent(escaped);
}catch (e63394){var _ = e63394;
return segment;
}})();
return encodeURIComponent(decoded);
});
/**
 * Return an assets URL for a file or graph-relative asset `src`, or nil.
 * 
 *   Preserve URL parameters and fragments, and encode filesystem path segments
 *   once for the Electron assets protocol.
 */
frontend.handler.assets.local_file_iframe_src__GT_assets_url = (function frontend$handler$assets$local_file_iframe_src__GT_assets_url(src){
if(typeof src === 'string'){
var temp__5825__auto__ = (function (){try{if(cljs.core.truth_(cljs.core.re_find(/^file:/i,src))){
return (new URL(src));
} else {
if(cljs.core.truth_(cljs.core.re_find(/^(?:\.\/|\.\.\/)*assets\//,src))){
var temp__5825__auto__ = (function (){var G__63397 = frontend.state.get_current_repo();
if((G__63397 == null)){
return null;
} else {
return frontend.config.get_repo_dir(G__63397);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var repo_dir = temp__5825__auto__;
return (new URL(clojure.string.replace_first(src,/^[.\/]+/,""),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.path.prepend_protocol("file:",repo_dir))+"/")));
} else {
return null;
}
} else {
return null;
}
}
}catch (e63396){var _ = e63396;
return null;
}})();
if(cljs.core.truth_(temp__5825__auto__)){
var url = temp__5825__auto__;
var pathname = clojure.string.replace_first(url.pathname,/^\/([A-Za-z]):\//,"/$1/logseq__colon/");
var encoded_path = clojure.string.replace(pathname,/[^\/]+/,frontend.handler.assets.encode_iframe_path_segment);
return (""+"assets://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url.host)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encoded_path)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url.search)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url.hash));
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.assets._LT_make_data_url = (function frontend$handler$assets$_LT_make_data_url(path){
var repo_dir = frontend.config.get_repo_dir(frontend.state.get_current_repo());
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.fs.read_file_raw.cljs$core$IFn$_invoke$arity$variadic(repo_dir,path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY], 0))),(function (binary){
return promesa.protocols._mcat(promesa.protocols._promise((new Blob([binary],cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"image"], null))))),(function (blob){
return promesa.protocols._promise((cljs.core.truth_(blob)?URL.createObjectURL(blob):null));
}));
}));
}));
});
/**
 * Expand ../assets/ links in custom.css file to blob url.
 * 
 * Only for db-based graph
 */
frontend.handler.assets._LT_expand_assets_links_for_db_graph = (function frontend$handler$assets$_LT_expand_assets_links_for_db_graph(css){
var rel_paths = cljs.core.re_seq(/\(['\"]?(\.\.\/assets\/.*?)['\"]?\)/,css);
var rel_paths__$1 = cljs.core.vec(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,rel_paths)));
var fixed_rel_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p){
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic("./logseq/",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p], 0));
}),rel_paths__$1);
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.handler.assets._LT_make_data_url,fixed_rel_paths))),(function (blob_urls){
return promesa.protocols._promise(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (css__$1,p__63399){
var vec__63400 = p__63399;
var rel_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63400,(0),null);
var blob_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63400,(1),null);
return clojure.string.replace(css__$1,rel_path,(""+"'"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blob_url)+"'"));
}),css,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,rel_paths__$1,blob_urls)));
}));
}));
});
/**
 * Resolve a filesystem path to an absolute native path.
 * 
 *   `~` expands to the user home, `file://`/`assets://` URLs unwrap to their
 *   native path, absolute paths pass through, and `./`/`../`/bare relative
 *   paths resolve against the graph dir.
 */
frontend.handler.assets.local_file_path__GT_absolute_path = (function frontend$handler$assets$local_file_path__GT_absolute_path(file_path,repo_dir){
if(clojure.string.starts_with_QMARK_(file_path,"~")){
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("system","info","system/info",-1203399931),new cljs.core.Keyword(null,"home-dir","home-dir",1408715416)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.replace_first(file_path,/^~[\/\\]*/,"")], 0));
} else {
if(logseq.common.path.absolute_QMARK_(file_path)){
return logseq.common.path.file_url_or_path__GT_path(file_path);
} else {
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([file_path], 0));

}
}
});
/**
 * Resolve a local filesystem path to an Electron assets:// URL.
 * 
 *   `~/`, `file://`, absolute paths are used as-is; `./`/`../`/bare relative
 *   paths resolve against the current graph dir.
 */
frontend.handler.assets.file_path__GT_assets_url = (function frontend$handler$assets$file_path__GT_assets_url(file_path){
return logseq.common.path.prepend_protocol("assets:",frontend.handler.assets.protect_windows_drive_in_assets_path(frontend.handler.assets.local_file_path__GT_absolute_path(file_path,frontend.config.get_repo_dir(frontend.state.get_current_repo()))));
});
/**
 * Make accessible asset url from path.
 * If path is absolute url, return it directly.
 * If path is relative path, return blob url or file url according to environment.
 */
frontend.handler.assets._LT_make_asset_url = (function frontend$handler$assets$_LT_make_asset_url(var_args){
var G__63404 = arguments.length;
switch (G__63404) {
case 1:
return frontend.handler.assets._LT_make_asset_url.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.assets._LT_make_asset_url.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.assets._LT_make_asset_url.cljs$core$IFn$_invoke$arity$1 = (function (path){
return frontend.handler.assets._LT_make_asset_url.cljs$core$IFn$_invoke$arity$2(path,(function (){try{return (new URL(path));
}catch (e63405){var _ = e63405;
return null;
}})());
}));

(frontend.handler.assets._LT_make_asset_url.cljs$core$IFn$_invoke$arity$2 = (function (path,js_url){
if(frontend.config.publishing_QMARK_){
return clojure.string.replace_first(path,/^\//,"");
} else {
var repo = frontend.state.get_current_repo();
var repo_dir = frontend.config.get_repo_dir(repo);
var local_asset_QMARK_ = logseq.common.config.local_relative_asset_QMARK_(path);
var rpath = clojure.string.replace(path,/^(\.\.)?\//,"./");
var js_url_QMARK_ = (!((js_url == null)));
if(js_url_QMARK_){
return path;
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = frontend.handler.assets.alias_enabled_QMARK_();
if(cljs.core.truth_(and__5140__auto__)){
return frontend.handler.assets.check_alias_path_QMARK_(rpath);
} else {
return and__5140__auto__;
}
})())){
return frontend.handler.assets.resolve_asset_real_path_url(frontend.state.get_current_repo(),rpath);
} else {
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
var full_path = (cljs.core.truth_(local_asset_QMARK_)?logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rpath], 0)):frontend.handler.assets.local_file_path__GT_absolute_path(path,repo_dir));
return logseq.common.path.prepend_protocol("assets:",frontend.handler.assets.protect_windows_drive_in_assets_path(full_path));
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.fs.read_file_raw.cljs$core$IFn$_invoke$arity$variadic(repo_dir,rpath,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY], 0))),(function (binary){
return promesa.protocols._mcat(promesa.protocols._promise(clojure.string.ends_with_QMARK_(rpath,".svg")),(function (svg_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(svg_QMARK_)?"image/svg+xml":"image")),(function (type){
return promesa.protocols._mcat(promesa.protocols._promise((new Blob([binary],cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),type], null))))),(function (blob){
return promesa.protocols._promise((cljs.core.truth_(blob)?URL.createObjectURL(blob):null));
}));
}));
}));
}));
}));

}
}
}
}
}));

(frontend.handler.assets._LT_make_asset_url.cljs$lang$maxFixedArity = 2);

frontend.handler.assets.get_file_checksum = (function frontend$handler$assets$get_file_checksum(file){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(((typeof file === 'string')?file:file.arrayBuffer()),logseq.db.frontend.asset._LT_get_file_array_buffer_checksum);
});
frontend.handler.assets.field_value = (function frontend$handler$assets$field_value(payload,field_name){
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(payload,field_name);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(payload,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field_name));
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
if(cljs.core.object_QMARK_(payload)){
return (payload[field_name]);
} else {
return null;
}
}
}
});
frontend.handler.assets.indexed_object__GT_array = (function frontend$handler$assets$indexed_object__GT_array(payload){
var keys = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__63407_SHARP_){
return parseInt(p1__63407_SHARP_,(10));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__63406_SHARP_){
return cljs.core.re_matches(/\d+/,p1__63406_SHARP_);
}),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(Object.keys(payload))));
if(cljs.core.seq(keys)){
return cljs.core.clj__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63408_SHARP_){
return (payload[p1__63408_SHARP_]);
}),keys));
} else {
return null;
}
});
frontend.handler.assets.indexed_map__GT_array = (function frontend$handler$assets$indexed_map__GT_array(payload){
var keys = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__63410_SHARP_){
return parseInt((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__63410_SHARP_)),(10));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__63409_SHARP_){
return cljs.core.re_matches(/\d+/,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__63409_SHARP_)));
}),cljs.core.keys(payload)));
if(cljs.core.seq(keys)){
return cljs.core.clj__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63411_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(payload,p1__63411_SHARP_);
}),keys));
} else {
return null;
}
});
frontend.handler.assets.__GT_uint8 = (function frontend$handler$assets$__GT_uint8(payload){
if((((typeof Blob !== 'undefined')) && ((payload instanceof Blob)))){
return payload;
} else {
if((payload instanceof Uint8Array)){
return payload;
} else {
if((payload instanceof ArrayBuffer)){
return (new Uint8Array(payload));
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = (typeof ArrayBuffer !== 'undefined');
if(and__5140__auto__){
return ArrayBuffer.isView(payload);
} else {
return and__5140__auto__;
}
})())){
return (new Uint8Array(payload.buffer,payload.byteOffset,payload.byteLength));
} else {
if(cljs.core.truth_(cljs.core.array_QMARK_(payload))){
return (new Uint8Array(payload));
} else {
if(cljs.core.sequential_QMARK_(payload)){
return (new Uint8Array(cljs.core.clj__GT_js(payload)));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Buffer",frontend.handler.assets.field_value(payload,"type"))) && ((!((frontend.handler.assets.field_value(payload,"data") == null)))))){
var G__63412 = frontend.handler.assets.field_value(payload,"data");
return (frontend.handler.assets.__GT_uint8.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.assets.__GT_uint8.cljs$core$IFn$_invoke$arity$1(G__63412) : frontend.handler.assets.__GT_uint8.call(null,G__63412));
} else {
if(cljs.core.map_QMARK_(payload)){
var temp__5823__auto__ = frontend.handler.assets.indexed_map__GT_array(payload);
if(cljs.core.truth_(temp__5823__auto__)){
var data = temp__5823__auto__;
return (new Uint8Array(data));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unsupported binary payload",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload-type","payload-type",1038530500),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(payload))),new cljs.core.Keyword(null,"keys","keys",1068423698),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.keys(payload))], null));
}
} else {
if(((cljs.core.object_QMARK_(payload)) && (typeof (payload["length"]) === 'number'))){
return (new Uint8Array(payload));
} else {
if(cljs.core.object_QMARK_(payload)){
var temp__5823__auto__ = frontend.handler.assets.indexed_object__GT_array(payload);
if(cljs.core.truth_(temp__5823__auto__)){
var data = temp__5823__auto__;
return (new Uint8Array(data));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unsupported binary payload",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"payload-type","payload-type",1038530500),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(payload))),new cljs.core.Keyword(null,"object-tag","object-tag",1961619937),(function (){try{return Object.prototype.toString.call(payload);
}catch (e63413){var _ = e63413;
return null;
}})(),new cljs.core.Keyword(null,"keys","keys",1068423698),(function (){try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(Object.keys(payload));
}catch (e63414){var _ = e63414;
return null;
}})()], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unsupported binary payload",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"payload-type","payload-type",1038530500),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(payload)))], null));

}
}
}
}
}
}
}
}
}
}
});
frontend.handler.assets._LT_get_all_assets = (function frontend$handler$assets$_LT_get_all_assets(){
var temp__5823__auto__ = frontend.config.get_current_repo_assets_root();
if(cljs.core.truth_(temp__5823__auto__)){
var path = temp__5823__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(frontend.fs.stat.cljs$core$IFn$_invoke$arity$1(path),cljs.core.constantly(null))),(function (exists_QMARK_){
return promesa.protocols._promise((cljs.core.truth_(exists_QMARK_)?promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.fs.readdir.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path-only?","path-only?",-825545027),true], null)], 0))),(function (result){
return promesa.protocols._promise(promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (path__$1){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.fs.read_file_raw.cljs$core$IFn$_invoke$arity$variadic(path__$1,"",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY], 0))),(function (data){
return promesa.protocols._promise((function (){var path_SINGLEQUOTE_ = (function (){var G__63415 = "assets";
var G__63416 = (frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1(path__$1) : frontend.util.node_path.basename.call(null,path__$1));
return (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(G__63415,G__63416) : frontend.util.node_path.join.call(null,G__63415,G__63416));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_SINGLEQUOTE_,data], null);
})());
}));
}));
}),result)));
}));
})):promesa.core.resolved(cljs.core.PersistentVector.EMPTY)));
}));
}));
} else {
return promesa.core.resolved(cljs.core.PersistentVector.EMPTY);
}
});
frontend.handler.assets.ensure_assets_dir_BANG_ = (function frontend$handler$assets$ensure_assets_dir_BANG_(repo){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.config.get_repo_dir(repo)),(function (repo_dir){
return promesa.protocols._mcat(promesa.protocols._promise("assets"),(function (assets_dir){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.fs.mkdir_if_not_exists(logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([assets_dir], 0)))),(function (_){
return promesa.protocols._promise(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo_dir,assets_dir], null));
}));
}));
}));
}));
});
/**
 * Get asset path from filename, ensure assets dir exists
 */
frontend.handler.assets.get_asset_path = (function frontend$handler$assets$get_asset_path(filename){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.assets.ensure_assets_dir_BANG_(frontend.state.get_current_repo())),(function (p__63417){
var vec__63418 = p__63417;
var repo_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63418,(0),null);
var assets_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63418,(1),null);
return promesa.protocols._promise(logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([assets_dir,filename], 0)));
}));
}));
});
frontend.handler.assets.asset_transfer_in_progress_QMARK_ = (function frontend$handler$assets$asset_transfer_in_progress_QMARK_(progress_entry){
var map__63421 = progress_entry;
var map__63421__$1 = cljs.core.__destructure_map(map__63421);
var loaded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63421__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63421__$1,new cljs.core.Keyword(null,"total","total",1916810418));
return ((typeof loaded === 'number') && (((typeof total === 'number') && ((((total > (0))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(loaded,total)))))));
});
frontend.handler.assets.should_request_remote_asset_download_QMARK_ = (function frontend$handler$assets$should_request_remote_asset_download_QMARK_(repo,asset_block,file_ready_QMARK_,progress){
var asset_uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(asset_block);
var asset_type = new cljs.core.Keyword("logseq.property.asset","type","logseq.property.asset/type",-1142083098).cljs$core$IFn$_invoke$arity$1(asset_block);
var external_url = new cljs.core.Keyword("logseq.property.asset","external-url","logseq.property.asset/external-url",-1364775163).cljs$core$IFn$_invoke$arity$1(asset_block);
var remote_metadata = new cljs.core.Keyword("logseq.property.asset","remote-metadata","logseq.property.asset/remote-metadata",-990750469).cljs$core$IFn$_invoke$arity$1(asset_block);
var progress_entry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(progress,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(asset_uuid)));
var and__5140__auto__ = cljs.core.seq(repo);
if(and__5140__auto__){
var and__5140__auto____$1 = remote_metadata;
if(cljs.core.truth_(and__5140__auto____$1)){
var and__5140__auto____$2 = asset_uuid;
if(cljs.core.truth_(and__5140__auto____$2)){
return ((cljs.core.seq(asset_type)) && (((clojure.string.blank_QMARK_(external_url)) && (((cljs.core.not(file_ready_QMARK_)) && ((!(frontend.handler.assets.asset_transfer_in_progress_QMARK_(progress_entry)))))))));
} else {
return and__5140__auto____$2;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
});
frontend.handler.assets.maybe_request_remote_asset_download_BANG_ = (function frontend$handler$assets$maybe_request_remote_asset_download_BANG_(repo,asset_block,file_ready_QMARK_){
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var or__5142__auto__ = frontend.state.get_state(new cljs.core.Keyword("rtc","asset-upload-download-progress","rtc/asset-upload-download-progress",-940899343));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),repo);
if(cljs.core.truth_(frontend.handler.assets.should_request_remote_asset_download_QMARK_(repo,asset_block,file_ready_QMARK_,progress))){
frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","db-sync-request-asset-download","thread-api/db-sync-request-asset-download",1487030400),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(asset_block)], 0));

return true;
} else {
return null;
}
});

//# sourceMappingURL=frontend.handler.assets.js.map
