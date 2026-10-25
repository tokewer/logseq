goog.provide('frontend.components.block.image');
/**
 * Remote http(s) posters/images get a link fallback. Blob, file, and
 *   data URLs stay as <img> so local asset drops are not replaced.
 */
frontend.components.block.image.remote_image_url_QMARK_ = (function frontend$components$block$image$remote_image_url_QMARK_(src){
return cljs.core.boolean$(((typeof src === 'string') && (((clojure.string.starts_with_QMARK_(src,"https://")) || (clojure.string.starts_with_QMARK_(src,"http://"))))));
});
frontend.components.block.image.asset_fallback_link_event_QMARK_ = (function frontend$components$block$image$asset_fallback_link_event_QMARK_(e){
var target = e.target;
return cljs.core.boolean$((cljs.core.truth_((function (){var and__5140__auto__ = target;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.fn_QMARK_(target.closest);
} else {
return and__5140__auto__;
}
})())?target.closest("a.asset-image-fallback"):null));
});
frontend.components.block.image.effective_image_metadata = (function frontend$components$block$image$effective_image_metadata(config,asset_block,metadata){
var resize_metadata = (cljs.core.truth_(asset_block)?new cljs.core.Keyword("logseq.property.asset","resize-metadata","logseq.property.asset/resize-metadata",-1297523055).cljs$core$IFn$_invoke$arity$1(asset_block):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword("logseq.property.asset","resize-metadata","logseq.property.asset/resize-metadata",-1297523055)], null)));
if(cljs.core.map_QMARK_(resize_metadata)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metadata,resize_metadata], 0));
} else {
return metadata;
}
});
/**
 * Clickable URL fallback when a remote poster or image fails to load.
 */
frontend.components.block.image.image_fallback_link = (function frontend$components$block$image$image_fallback_link(src,title){
var href = (function (){var or__5142__auto__ = src;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})();
var label = ((cljs.core.seq(title))?title:src);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.asset-image-fallback.external-link","a.asset-image-fallback.external-link",1076460948),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener noreferrer",new cljs.core.Keyword(null,"title","title",636505583),(function (){var or__5142__auto__ = title;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return src;
}
})(),new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),frontend.util.stop_propagation,new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.util.stop_propagation], null),label], null);
});
frontend.components.block.image.image_or_fallback = (function frontend$components$block$image$image_or_fallback(p__70013){
var map__70014 = p__70013;
var map__70014__$1 = cljs.core.__destructure_map(map__70014);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70014__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70014__$1,new cljs.core.Keyword(null,"title","title",636505583));
var gallery_view_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70014__$1,new cljs.core.Keyword(null,"gallery-view?","gallery-view?",1298131224));
var metadata = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70014__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));
var load_failed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70014__$1,new cljs.core.Keyword(null,"load-failed?","load-failed?",-598313920));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70014__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
if(cljs.core.truth_((function (){var and__5140__auto__ = load_failed_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.components.block.image.remote_image_url_QMARK_(src);
} else {
return and__5140__auto__;
}
})())){
return frontend.components.block.image.image_fallback_link(src,title);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.rounded-sm.relative.fade-in.fade-in-faster","img.rounded-sm.relative.fade-in.fade-in-faster",-2081739348),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__70015 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loading","loading",-737050189),"lazy",new cljs.core.Keyword(null,"referrerPolicy","referrerPolicy",1008691405),"no-referrer",new cljs.core.Keyword(null,"src","src",-1651076051),src], null);
var G__70015__$1 = (cljs.core.truth_((function (){var and__5140__auto__ = on_error;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.components.block.image.remote_image_url_QMARK_(src);
} else {
return and__5140__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70015,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error):G__70015);
if(cljs.core.not(gallery_view_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70015__$1,new cljs.core.Keyword(null,"title","title",636505583),title);
} else {
return G__70015__$1;
}
})(),metadata], 0))], null);
}
});

//# sourceMappingURL=frontend.components.block.image.js.map
