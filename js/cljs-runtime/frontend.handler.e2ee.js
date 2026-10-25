goog.provide('frontend.handler.e2ee');
frontend.handler.e2ee.save_op = new cljs.core.Keyword("keychain","save-e2ee-password","keychain/save-e2ee-password",-629070432);
frontend.handler.e2ee.get_op = new cljs.core.Keyword("keychain","get-e2ee-password","keychain/get-e2ee-password",-910503560);
frontend.handler.e2ee.delete_op = new cljs.core.Keyword("keychain","delete-e2ee-password","keychain/delete-e2ee-password",960872385);
frontend.handler.e2ee._LT_keychain_save_BANG_ = (function frontend$handler$e2ee$_LT_keychain_save_BANG_(key,encrypted_text){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.handler.e2ee.save_op,key,encrypted_text], 0));
} else {
if(cljs.core.truth_(frontend.util.capacitor_QMARK_())){
return frontend.mobile.secure_storage._LT_set_item_BANG_(key,encrypted_text);
} else {
return promesa.core.resolved(null);

}
}
});
frontend.handler.e2ee._LT_keychain_get = (function frontend$handler$e2ee$_LT_keychain_get(key){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.handler.e2ee.get_op,key], 0));
} else {
if(cljs.core.truth_(frontend.util.capacitor_QMARK_())){
return frontend.mobile.secure_storage._LT_get_item(key);
} else {
return promesa.core.resolved(null);

}
}
});
frontend.handler.e2ee._LT_keychain_delete_BANG_ = (function frontend$handler$e2ee$_LT_keychain_delete_BANG_(key){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.handler.e2ee.delete_op,key], 0));
} else {
if(cljs.core.truth_(frontend.util.capacitor_QMARK_())){
return frontend.mobile.secure_storage._LT_remove_item_BANG_(key);
} else {
return promesa.core.resolved(null);

}
}
});
frontend.handler.e2ee.native_storage_supported_QMARK_ = (function frontend$handler$e2ee$native_storage_supported_QMARK_(){
var or__5142__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.util.capacitor_QMARK_();
}
});
frontend.handler.e2ee._LT_native_save_secret_BANG_ = (function frontend$handler$e2ee$_LT_native_save_secret_BANG_(key,encrypted_text){
if(cljs.core.truth_(frontend.handler.e2ee.native_storage_supported_QMARK_())){
return frontend.handler.e2ee._LT_keychain_save_BANG_(key,encrypted_text);
} else {
return promesa.core.resolved(null);
}
});
frontend.handler.e2ee._LT_native_get_secret = (function frontend$handler$e2ee$_LT_native_get_secret(key){
if(cljs.core.truth_(frontend.handler.e2ee.native_storage_supported_QMARK_())){
return frontend.handler.e2ee._LT_keychain_get(key);
} else {
return promesa.core.resolved(null);
}
});
frontend.handler.e2ee._LT_native_delete_secret_BANG_ = (function frontend$handler$e2ee$_LT_native_delete_secret_BANG_(key){
if(cljs.core.truth_(frontend.handler.e2ee.native_storage_supported_QMARK_())){
return frontend.handler.e2ee._LT_keychain_delete_BANG_(key);
} else {
return promesa.core.resolved(null);
}
});

//# sourceMappingURL=frontend.handler.e2ee.js.map
