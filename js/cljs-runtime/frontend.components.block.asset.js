goog.provide('frontend.components.block.asset');
/**
 * Coerces `asset-type` from an asset entity into a lowercase keyword.
 * 
 *   Returns `nil` when `asset-type` is absent or has an unsupported type.
 */
frontend.components.block.asset.asset_type__GT_keyword = (function frontend$components$block$asset$asset_type__GT_keyword(asset_type){
if((asset_type instanceof cljs.core.Keyword)){
return asset_type;
} else {
if(typeof asset_type === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(asset_type));
} else {
return null;
}
}
});
/**
 * Resolves the extension keyword for an asset link.
 * 
 *   `src` is the resolved render URL, `href` is the original asset link, and
 *   `asset-block` is the asset entity. The URL-derived extension has priority;
 *   `:logseq.property.asset/type` is used when neither URL exposes an extension.
 */
frontend.components.block.asset.link_ext = (function frontend$components$block$asset$link_ext(src,href,asset_block){
var or__5142__auto__ = (function (){var G__69163 = frontend.util.get_file_ext(src);
if((G__69163 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__69163);
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (function (){var G__69164 = frontend.util.get_file_ext(href);
if((G__69164 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__69164);
}
})();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return frontend.components.block.asset.asset_type__GT_keyword(new cljs.core.Keyword("logseq.property.asset","type","logseq.property.asset/type",-1142083098).cljs$core$IFn$_invoke$arity$1(asset_block));
}
}
});
/**
 * Builds the display file name for `asset-block` using resolved extension `ext`.
 */
frontend.components.block.asset.link_file_name = (function frontend$components$block$asset$link_file_name(asset_block,ext){
var G__69165 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(asset_block)));
if(cljs.core.truth_(ext)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69165)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(ext)));
} else {
return G__69165;
}
});
frontend.components.block.asset.asset_file_name = (function frontend$components$block$asset$asset_file_name(asset_block){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(asset_block))+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("logseq.property.asset","type","logseq.property.asset/type",-1142083098).cljs$core$IFn$_invoke$arity$1(asset_block)));
});
frontend.components.block.asset.asset_relative_path = (function frontend$components$block$asset$asset_relative_path(asset_block){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.config.local_assets_dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.components.block.asset.asset_file_name(asset_block)));
});
/**
 * Returns true when an asset points to a local graph file that should already
 *   exist but is absent.
 */
frontend.components.block.asset.show_missing_file_warning_QMARK_ = (function frontend$components$block$asset$show_missing_file_warning_QMARK_(asset_block,file_exists_QMARK_){
var external_url = new cljs.core.Keyword("logseq.property.asset","external-url","logseq.property.asset/external-url",-1364775163).cljs$core$IFn$_invoke$arity$1(asset_block);
var remote_metadata = new cljs.core.Keyword("logseq.property.asset","remote-metadata","logseq.property.asset/remote-metadata",-990750469).cljs$core$IFn$_invoke$arity$1(asset_block);
return ((file_exists_QMARK_ === false) && (((clojure.string.blank_QMARK_(external_url)) && ((remote_metadata == null)))));
});
frontend.components.block.asset.show_image_placeholder_QMARK_ = (function frontend$components$block$asset$show_image_placeholder_QMARK_(asset_block,file_ready_QMARK_,gallery_image_QMARK_){
var asset_type = (function (){var G__69168 = new cljs.core.Keyword("logseq.property.asset","type","logseq.property.asset/type",-1142083098).cljs$core$IFn$_invoke$arity$1(asset_block);
if((G__69168 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__69168);
}
})();
return ((cljs.core.not(file_ready_QMARK_)) && (((cljs.core.not(gallery_image_QMARK_)) && (cljs.core.contains_QMARK_(logseq.common.config.img_formats(),asset_type)))));
});
frontend.components.block.asset.read_mode_title_attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"asset-title-slot text-xs opacity-60 mt-1 cursor-text",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),(24)], null)], null);

//# sourceMappingURL=frontend.components.block.asset.js.map
