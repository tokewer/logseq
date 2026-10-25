goog.provide('frontend.extensions.lightbox');
frontend.extensions.lightbox.preview_images_BANG_ = (function frontend$extensions$lightbox$preview_images_BANG_(images){
var options = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dataSource","dataSource",-178401132),images,new cljs.core.Keyword(null,"pswpModule","pswpModule",1055928079),window.PhotoSwipe,new cljs.core.Keyword(null,"showHideAnimationType","showHideAnimationType",-1813136721),"fade"], null);
var lightbox = (new window.PhotoSwipeLightbox(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(options)));
(window.photoLightbox = lightbox);

var G__82531 = lightbox;
G__82531.init();

G__82531.loadAndOpen((0));

return G__82531;
});

//# sourceMappingURL=frontend.extensions.lightbox.js.map
