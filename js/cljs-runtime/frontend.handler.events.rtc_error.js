goog.provide('frontend.handler.events.rtc_error');
frontend.handler.events.rtc_error.e2ee_decrypt_error_codes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db-sync","invalid-e2ee-password","db-sync/invalid-e2ee-password",-1075036893),null], null), null);
frontend.handler.events.rtc_error.throwable_message = (function frontend$handler$events$rtc_error$throwable_message(error){
var or__5142__auto__ = cljs.core.ex_message(error);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (((error instanceof Error))?error.message:null);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var G__93572 = error;
if((G__93572 == null)){
return null;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__93572));
}
}
}
});
frontend.handler.events.rtc_error.error_texts = (function frontend$handler$events$rtc_error$error_texts(error){
if(cljs.core.truth_(error)){
var data = cljs.core.ex_data(error);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.events.rtc_error.throwable_message(error),new cljs.core.Keyword(null,"error-message","error-message",1756021561).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"error-cause","error-cause",1658990138).cljs$core$IFn$_invoke$arity$1(data)], null),(function (){var G__93573 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(data);
return (frontend.handler.events.rtc_error.error_texts.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.events.rtc_error.error_texts.cljs$core$IFn$_invoke$arity$1(G__93573) : frontend.handler.events.rtc_error.error_texts.call(null,G__93573));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__93574 = cljs.core.ex_cause(error);
return (frontend.handler.events.rtc_error.error_texts.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.events.rtc_error.error_texts.cljs$core$IFn$_invoke$arity$1(G__93574) : frontend.handler.events.rtc_error.error_texts.call(null,G__93574));
})()], 0));
} else {
return null;
}
});
frontend.handler.events.rtc_error.error_codes = (function frontend$handler$events$rtc_error$error_codes(error){
if(cljs.core.truth_(error)){
var data = cljs.core.ex_data(error);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(data)], null),(function (){var G__93575 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(data);
return (frontend.handler.events.rtc_error.error_codes.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.events.rtc_error.error_codes.cljs$core$IFn$_invoke$arity$1(G__93575) : frontend.handler.events.rtc_error.error_codes.call(null,G__93575));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__93576 = cljs.core.ex_cause(error);
return (frontend.handler.events.rtc_error.error_codes.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.events.rtc_error.error_codes.cljs$core$IFn$_invoke$arity$1(G__93576) : frontend.handler.events.rtc_error.error_codes.call(null,G__93576));
})()], 0));
} else {
return null;
}
});
frontend.handler.events.rtc_error.e2ee_decrypt_failed_QMARK_ = (function frontend$handler$events$rtc_error$e2ee_decrypt_failed_QMARK_(error){
return cljs.core.boolean$((function (){var or__5142__auto__ = cljs.core.some(frontend.handler.events.rtc_error.e2ee_decrypt_error_codes,frontend.handler.events.rtc_error.error_codes(error));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["decrypt-aes-key",null], null), null),frontend.handler.events.rtc_error.error_texts(error));
}
})());
});

//# sourceMappingURL=frontend.handler.events.rtc_error.js.map
