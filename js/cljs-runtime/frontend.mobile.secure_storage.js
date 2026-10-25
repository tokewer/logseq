goog.provide('frontend.mobile.secure_storage');
var module$node_modules$$aparajita$capacitor_secure_storage$dist$plugin_cjs=shadow.js.require("module$node_modules$$aparajita$capacitor_secure_storage$dist$plugin_cjs", {});
if((typeof frontend !== 'undefined') && (typeof frontend.mobile !== 'undefined') && (typeof frontend.mobile.secure_storage !== 'undefined') && (typeof frontend.mobile.secure_storage._STAR_initialized_QMARK_ !== 'undefined')){
} else {
frontend.mobile.secure_storage._STAR_initialized_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
frontend.mobile.secure_storage.key_prefix = "logseq.e2ee.";
frontend.mobile.secure_storage._LT_ensure_initialized_BANG_ = (function frontend$mobile$secure_storage$_LT_ensure_initialized_BANG_(){
if(cljs.core.not(frontend.mobile.util.native_platform_QMARK_())){
return promesa.core.resolved(false);
} else {
if(cljs.core.truth_(cljs.core.deref(frontend.mobile.secure_storage._STAR_initialized_QMARK_))){
return promesa.core.resolved(true);
} else {
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(module$node_modules$$aparajita$capacitor_secure_storage$dist$plugin_cjs.SecureStorage.setKeyPrefix(frontend.mobile.secure_storage.key_prefix)),(function (_){
return promesa.protocols._promise(cljs.core.reset_BANG_(frontend.mobile.secure_storage._STAR_initialized_QMARK_,true));
}));
})),(function (e){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.mobile.secure-storage",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("frontend.mobile.secure-storage","init","frontend.mobile.secure-storage/init",654230159),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e], null),new cljs.core.Keyword(null,"line","line",212345235),24], null)),null);
} else {
}

throw e;
}));

}
}
});
frontend.mobile.secure_storage._LT_set_item_BANG_ = (function frontend$mobile$secure_storage$_LT_set_item_BANG_(key,value){
if(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.mobile.secure_storage._LT_ensure_initialized_BANG_()),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(module$node_modules$$aparajita$capacitor_secure_storage$dist$plugin_cjs.SecureStorage.setItem(key,value)),(function (___$1){
return promesa.protocols._promise(true);
}));
}));
})),(function (e){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.mobile.secure-storage",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("frontend.mobile.secure-storage","set-item","frontend.mobile.secure-storage/set-item",-1189470677),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e], null),new cljs.core.Keyword(null,"line","line",212345235),34], null)),null);
} else {
}

throw e;
}));
} else {
return promesa.core.resolved(false);
}
});
frontend.mobile.secure_storage._LT_get_item = (function frontend$mobile$secure_storage$_LT_get_item(key){
if(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.mobile.secure_storage._LT_ensure_initialized_BANG_()),(function (_){
return promesa.protocols._promise(module$node_modules$$aparajita$capacitor_secure_storage$dist$plugin_cjs.SecureStorage.getItem(key));
}));
})),(function (e){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.mobile.secure-storage",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("frontend.mobile.secure-storage","get-item","frontend.mobile.secure-storage/get-item",980224436),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e], null),new cljs.core.Keyword(null,"line","line",212345235),44], null)),null);
} else {
}

throw e;
}));
} else {
return promesa.core.resolved(null);
}
});
frontend.mobile.secure_storage._LT_remove_item_BANG_ = (function frontend$mobile$secure_storage$_LT_remove_item_BANG_(key){
if(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.mobile.secure_storage._LT_ensure_initialized_BANG_()),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(module$node_modules$$aparajita$capacitor_secure_storage$dist$plugin_cjs.SecureStorage.removeItem(key)),(function (___$1){
return promesa.protocols._promise(true);
}));
}));
})),(function (e){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.mobile.secure-storage",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("frontend.mobile.secure-storage","remove-item","frontend.mobile.secure-storage/remove-item",-571869226),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e], null),new cljs.core.Keyword(null,"line","line",212345235),55], null)),null);
} else {
}

throw e;
}));
} else {
return promesa.core.resolved(false);
}
});

//# sourceMappingURL=frontend.mobile.secure_storage.js.map
