goog.provide('frontend.util.email');
frontend.util.email.mask_email = (function frontend$util$email$mask_email(email){
if((!((email == null)))){
var email__$1 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(email));
if(clojure.string.blank_QMARK_(email__$1)){
return email__$1;
} else {
var email_chars = cljs.core.vec(email__$1);
var visible_indexes = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.last)(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,ch){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["@",null,".",null], null), null),ch)){
return null;
} else {
return idx;
}
}),email_chars))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,ch){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["@",null,".",null], null), null),ch)){
return ch;
} else {
if(cljs.core.contains_QMARK_(visible_indexes,idx)){
return ch;
} else {
return "*";

}
}
}),email_chars));
}
} else {
return null;
}
});
frontend.util.email.mask_email_QMARK_ = (function frontend$util$email$mask_email_QMARK_(config){
return (!(new cljs.core.Keyword("ui","mask-email?","ui/mask-email?",-561370782).cljs$core$IFn$_invoke$arity$1(config) === false));
});
frontend.util.email.display_email = (function frontend$util$email$display_email(email,config){
if(frontend.util.email.mask_email_QMARK_(config)){
return frontend.util.email.mask_email(email);
} else {
return email;
}
});

//# sourceMappingURL=frontend.util.email.js.map
