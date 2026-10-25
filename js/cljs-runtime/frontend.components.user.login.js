goog.provide('frontend.components.user.login');
var module$node_modules$aws_amplify$dist$cjs$index=shadow.js.require("module$node_modules$aws_amplify$dist$cjs$index", {});
var module$node_modules$aws_amplify$dist$cjs$auth$index=shadow.js.require("module$node_modules$aws_amplify$dist$cjs$auth$index", {});
frontend.components.user.login.sign_out_BANG_ = (function frontend$components$user$login$sign_out_BANG_(){
try{return module$node_modules$aws_amplify$dist$cjs$auth$index.signOut();
}catch (e53687){var e = e53687;
return console.warn(e);
}});
frontend.components.user.login.setup_configure_BANG_ = (function frontend$components$user$login$setup_configure_BANG_(){
return module$node_modules$aws_amplify$dist$cjs$index.Amplify.configure(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Auth","Auth",961070933),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Cognito","Cognito",-65468709),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"region","region",270415120),frontend.config.REGION,new cljs.core.Keyword(null,"userPoolId","userPoolId",453835110),frontend.config.USER_POOL_ID,new cljs.core.Keyword(null,"userPoolClientId","userPoolClientId",1864984750),frontend.config.COGNITO_CLIENT_ID,new cljs.core.Keyword(null,"identityPoolId","identityPoolId",972095597),frontend.config.IDENTITY_POOL_ID,new cljs.core.Keyword(null,"oauthDomain","oauthDomain",1325255575),frontend.config.OAUTH_DOMAIN,new cljs.core.Keyword(null,"loginWith","loginWith",-1335770554),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"email","email",1415816706),true], null)], null)], null)], null)));
});
frontend.components.user.login.auth_error_message = (function frontend$components$user$login$auth_error_message(error){
var G__53688 = (function (){var or__5142__auto__ = error.name;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return error.code;
}
})();
switch (G__53688) {
case "UserNotFoundException":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","auth-error-user-not-found","account/auth-error-user-not-found",865815998)], 0));

break;
case "NotAuthorizedException":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","auth-error-invalid-credentials","account/auth-error-invalid-credentials",563506838)], 0));

break;
case "UserNotConfirmedException":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","auth-error-user-not-confirmed","account/auth-error-user-not-confirmed",-1405125024)], 0));

break;
case "UsernameExistsException":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","auth-error-username-exists","account/auth-error-username-exists",-1700496198)], 0));

break;
case "InvalidPasswordException":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","password-policy-tip","account/password-policy-tip",-1762182912)], 0));

break;
case "CodeMismatchException":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","auth-error-code-mismatch","account/auth-error-code-mismatch",368408424)], 0));

break;
case "ExpiredCodeException":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","auth-error-code-expired","account/auth-error-code-expired",302726326)], 0));

break;
case "LimitExceededException":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","auth-error-too-many-requests","account/auth-error-too-many-requests",-1343763170)], 0));

break;
case "TooManyRequestsException":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","auth-error-too-many-requests","account/auth-error-too-many-requests",-1343763170)], 0));

break;
case "TooManyFailedAttemptsException":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","auth-error-too-many-attempts","account/auth-error-too-many-attempts",-226103115)], 0));

break;
case "CodeDeliveryFailureException":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","auth-error-code-delivery-failed","account/auth-error-code-delivery-failed",1737426974)], 0));

break;
case "UserAlreadyAuthenticatedException":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","auth-error-already-authenticated","account/auth-error-already-authenticated",501887712)], 0));

break;
case "InvalidParameterException":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","auth-error-invalid-parameter","account/auth-error-invalid-parameter",922706754)], 0));

break;
default:
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","auth-error-generic","account/auth-error-generic",241500914)], 0));

}
});
frontend.components.user.login.form_data = (function frontend$components$user$login$form_data(event){
return cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$variadic(Object.fromEntries((new FormData(event.target))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
frontend.components.user.login.validate_password_BANG_ = (function frontend$components$user$login$validate_password_BANG_(password){
if(((clojure.string.blank_QMARK_(password)) || ((((cljs.core.count(password) < (8))) || (((cljs.core.not(cljs.core.re_find(/[a-z]/,password))) || (((cljs.core.not(cljs.core.re_find(/[A-Z]/,password))) || (cljs.core.not(cljs.core.re_find(/[!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>\/?~`]/,password))))))))))){
throw (new Error(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","password-policy-tip","account/password-policy-tip",-1762182912)], 0))));
} else {
return null;
}
});
frontend.components.user.login.build_session_user = (function frontend$components$user$login$build_session_user(session,current_user){
var tokens = session.tokens;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),current_user.username,new cljs.core.Keyword(null,"signInUserSession","signInUserSession",1238093414),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"idToken","idToken",922710925),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"jwtToken","jwtToken",-2095982914),(function (){var G__53689 = tokens;
var G__53689__$1 = (((G__53689 == null))?null:G__53689.idToken);
if((G__53689__$1 == null)){
return null;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53689__$1));
}
})()], null),new cljs.core.Keyword(null,"accessToken","accessToken",1833707055),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"jwtToken","jwtToken",-2095982914),(function (){var G__53690 = tokens;
var G__53690__$1 = (((G__53690 == null))?null:G__53690.accessToken);
if((G__53690__$1 == null)){
return null;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53690__$1));
}
})()], null),new cljs.core.Keyword(null,"refreshToken","refreshToken",-1274875461),null], null)], null);
});
frontend.components.user.login._LT_load_session_BANG_ = (function frontend$components$user$login$_LT_load_session_BANG_(set_session_user_BANG_,on_session_callback){
return module$node_modules$aws_amplify$dist$cjs$auth$index.fetchAuthSession().then((function (session){
if(cljs.core.not(session.userSub)){
throw (new Error("No session"));
} else {
return module$node_modules$aws_amplify$dist$cjs$auth$index.getCurrentUser().then((function (current_user){
var user = frontend.components.user.login.build_session_user(session,current_user);
(on_session_callback.cljs$core$IFn$_invoke$arity$1 ? on_session_callback.cljs$core$IFn$_invoke$arity$1(user) : on_session_callback.call(null,user));

return (set_session_user_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_session_user_BANG_.cljs$core$IFn$_invoke$arity$1(user) : set_session_user_BANG_.call(null,user));
}));
}
})).catch((function (_error){
return (set_session_user_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_session_user_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_session_user_BANG_.call(null,false));
}));
});
frontend.components.user.login.input_row = (function frontend$components$user$login$input_row(p__53691){
var map__53692 = p__53691;
var map__53692__$1 = cljs.core.__destructure_map(map__53692);
var props = map__53692__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53692__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53692__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53692__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.w-full.flex.flex-col.gap-3.pb-1","div.relative.w-full.flex.flex-col.gap-3.pb-1",363670077),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.text-sm.font-medium","label.text-sm.font-medium",-1552457137),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),id], null),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.shui.ui.input,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032)], 0))], null),(cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.shui.ui.alert,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"destructive","destructive",-1587723243)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.shui.ui.alert_description,error], null)], null):null)], null);
});
frontend.components.user.login.submit_button = (function frontend$components$user$login$submit_button(loading_QMARK_,label){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.shui.ui.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),loading_QMARK_,new cljs.core.Keyword(null,"class","class",-2030961996),"w-full"], null),label], null);
});
frontend.components.user.login.login_form = (function (){var render_fn__31744__auto__ = (function frontend$components$user$login$login_form(p__53694){
var map__53695 = p__53694;
var map__53695__$1 = cljs.core.__destructure_map(map__53695);
var set_current_tab_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53695__$1,new cljs.core.Keyword(null,"set-current-tab!","set-current-tab!",-1539504857));
var set_session_user_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53695__$1,new cljs.core.Keyword(null,"set-session-user!","set-session-user!",-1654777623));
var set_error_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53695__$1,new cljs.core.Keyword(null,"set-error!","set-error!",-1135166861));
var on_session_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53695__$1,new cljs.core.Keyword(null,"on-session-callback","on-session-callback",-665291040));
var vec__53696 = logseq.shui.hooks.use_state(false);
var loading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53696,(0),null);
var set_loading_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53696,(1),null);
var email_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
logseq.shui.hooks.use_effect_BANG_((function (){
var timeout = setTimeout((function (){
var G__53699 = logseq.shui.hooks.deref(email_ref);
if((G__53699 == null)){
return null;
} else {
return G__53699.focus();
}
}),(16));
return (function (){
return clearTimeout(timeout);
});
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.relative.flex.flex-col.justify-center.items-center.gap-4.w-full","form.relative.flex.flex-col.justify-center.items-center.gap-4.w-full",619118535),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (event){
event.preventDefault();

(set_error_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_error_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_error_BANG_.call(null,null));

var map__53700 = frontend.components.user.login.form_data(event);
var map__53700__$1 = cljs.core.__destructure_map(map__53700);
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53700__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53700__$1,new cljs.core.Keyword(null,"password","password",417022471));
var username = clojure.string.trim((function (){var or__5142__auto__ = email;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})());
(set_loading_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_loading_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_loading_BANG_.call(null,true));

return module$node_modules$aws_amplify$dist$cjs$auth$index.signIn(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),username,new cljs.core.Keyword(null,"password","password",417022471),password], null))).then((function (ret){
var next_step = (function (){var G__53701 = ret;
var G__53701__$1 = (((G__53701 == null))?null:G__53701.nextStep);
if((G__53701__$1 == null)){
return null;
} else {
return G__53701__$1.signInStep;
}
})();
var G__53702 = next_step;
switch (G__53702) {
case "CONFIRM_SIGN_UP":
case "CONFIRM_SIGN_IN_WITH_EMAIL_CODE":
case "CONFIRM_SIGN_IN_WITH_TOTP_CODE":
var G__53703 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"confirm-code","confirm-code",1629478528),new cljs.core.Keyword(null,"user","user",1532431356),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$variadic(ret,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"username","username",1605666410),username], null)], 0)),new cljs.core.Keyword(null,"next-step","next-step",1406694487),next_step], null);
return (set_current_tab_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_tab_BANG_.cljs$core$IFn$_invoke$arity$1(G__53703) : set_current_tab_BANG_.call(null,G__53703));

break;
case "RESET_PASSWORD":
var G__53704 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"reset-password","reset-password",-1150599401),new cljs.core.Keyword(null,"username","username",1605666410),username], null);
return (set_current_tab_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_tab_BANG_.cljs$core$IFn$_invoke$arity$1(G__53704) : set_current_tab_BANG_.call(null,G__53704));

break;
case "DONE":
return frontend.components.user.login._LT_load_session_BANG_(set_session_user_BANG_,on_session_callback);

break;
default:
throw (new Error((""+"Unsupported sign-in step: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_step))));

}
})).catch((function (p1__53693_SHARP_){
var G__53705 = frontend.components.user.login.auth_error_message(p1__53693_SHARP_);
return (set_error_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_error_BANG_.cljs$core$IFn$_invoke$arity$1(G__53705) : set_error_BANG_.call(null,G__53705));
})).finally((function (){
return (set_loading_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_loading_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_loading_BANG_.call(null,false));
}));
})], null),frontend.components.user.login.input_row(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),"email",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"email",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"ref","ref",1289896967),email_ref,new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),"username",new cljs.core.Keyword(null,"label","label",1718410804),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","email","account/email",439866197)], 0))], null)),frontend.components.user.login.input_row(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"password",new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"name","name",1843675177),"password",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),"current-password",new cljs.core.Keyword(null,"label","label",1718410804),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","password","account/password",-821117908)], 0))], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full","div.w-full",-1626749092),frontend.components.user.login.submit_button(loading_QMARK_,frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","sign-in","account/sign-in",1796380371)], 0))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.pt-4.text-center","p.pt-4.text-center",-1083998952),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm","span.text-sm",1152322665),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-50","span.opacity-50",949060710),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","dont-have-account-question","account/dont-have-account-question",-1325771830)], 0)))+" ")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.underline.opacity-60.hover:opacity-80","a.underline.opacity-60.hover:opacity-80",2111448614),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (set_current_tab_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_tab_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"signup","signup",1961016747)) : set_current_tab_BANG_.call(null,new cljs.core.Keyword(null,"signup","signup",1961016747)));
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","sign-up","account/sign-up",1062427153)], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-50","span.opacity-50",949060710),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","or","account/or",-944194084)], 0)))+" ")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-sm.opacity-60.hover:opacity-80.underline","a.text-sm.opacity-60.hover:opacity-80.underline",-1408006384),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (set_current_tab_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_tab_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reset-password","reset-password",-1150599401)) : set_current_tab_BANG_.call(null,new cljs.core.Keyword(null,"reset-password","reset-password",-1150599401)));
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","forgot-password-question","encryption/forgot-password-question",-62006803)], 0))], null)], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$user$login$login_form__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__53706 = cljs.core.first(args__31746__auto__);
var G__53707 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__53706,G__53707) : io.factorhouse.hsx.core.obj_get.call(null,G__53706,G__53707));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"login-form","login-form",727754243,null),args__31746__auto__),frontend$components$user$login$login_form,args__31746__auto__,null);
}
};
var frontend$components$user$login$login_form = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__53801__i = 0, G__53801__a = new Array(arguments.length -  0);
while (G__53801__i < G__53801__a.length) {G__53801__a[G__53801__i] = arguments[G__53801__i + 0]; ++G__53801__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__53801__a,0,null);
} 
return frontend$components$user$login$login_form__delegate.call(this,args__31746__auto__);};
frontend$components$user$login$login_form.cljs$lang$maxFixedArity = 0;
frontend$components$user$login$login_form.cljs$lang$applyTo = (function (arglist__53802){
var args__31746__auto__ = cljs.core.seq(arglist__53802);
return frontend$components$user$login$login_form__delegate(args__31746__auto__);
});
frontend$components$user$login$login_form.cljs$core$IFn$_invoke$arity$variadic = frontend$components$user$login$login_form__delegate;
return frontend$components$user$login$login_form;
})()
;
var memo_comp__31747__auto__ = (function (){var G__53708 = comp__31745__auto__;
var G__53709 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__53708,G__53709) : io.factorhouse.hsx.core.react_memo.call(null,G__53708,G__53709));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"login-form");

return comp__31745__auto__;
})();
frontend.components.user.login.signup_form = (function (){var render_fn__31744__auto__ = (function frontend$components$user$login$signup_form(p__53711){
var map__53712 = p__53711;
var map__53712__$1 = cljs.core.__destructure_map(map__53712);
var set_current_tab_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53712__$1,new cljs.core.Keyword(null,"set-current-tab!","set-current-tab!",-1539504857));
var set_error_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53712__$1,new cljs.core.Keyword(null,"set-error!","set-error!",-1135166861));
var vec__53713 = logseq.shui.hooks.use_state(false);
var loading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53713,(0),null);
var set_loading_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53713,(1),null);
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.relative.flex.flex-col.justify-center.items-center.gap-4.w-full","form.relative.flex.flex-col.justify-center.items-center.gap-4.w-full",619118535),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (event){
event.preventDefault();

(set_error_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_error_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_error_BANG_.call(null,null));

var map__53716 = frontend.components.user.login.form_data(event);
var map__53716__$1 = cljs.core.__destructure_map(map__53716);
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53716__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var username = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53716__$1,new cljs.core.Keyword(null,"username","username",1605666410));
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53716__$1,new cljs.core.Keyword(null,"password","password",417022471));
var confirm_password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53716__$1,new cljs.core.Keyword(null,"confirm-password","confirm-password",1576165176));
try{frontend.components.user.login.validate_password_BANG_(password);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(password,confirm_password)){
throw (new Error(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","passwords-do-not-match","account/passwords-do-not-match",1257229262)], 0))));
} else {
}

(set_loading_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_loading_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_loading_BANG_.call(null,true));

return module$node_modules$aws_amplify$dist$cjs$auth$index.signUp(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"username","username",1605666410),username,new cljs.core.Keyword(null,"password","password",417022471),password,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"userAttributes","userAttributes",-1570526706),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"email","email",1415816706),email], null)], null)], null))).then((function (ret){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("CONFIRM_SIGN_UP",(function (){var G__53719 = ret;
var G__53719__$1 = (((G__53719 == null))?null:G__53719.nextStep);
if((G__53719__$1 == null)){
return null;
} else {
return G__53719__$1.signUpStep;
}
})())){
var G__53720 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"confirm-code","confirm-code",1629478528),new cljs.core.Keyword(null,"user","user",1532431356),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$variadic(ret,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"username","username",1605666410),username], null)], 0)),new cljs.core.Keyword(null,"next-step","next-step",1406694487),"CONFIRM_SIGN_UP"], null);
return (set_current_tab_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_tab_BANG_.cljs$core$IFn$_invoke$arity$1(G__53720) : set_current_tab_BANG_.call(null,G__53720));
} else {
return (set_current_tab_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_tab_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"login","login",55217519)) : set_current_tab_BANG_.call(null,new cljs.core.Keyword(null,"login","login",55217519)));
}
})).catch((function (p1__53710_SHARP_){
var G__53721 = frontend.components.user.login.auth_error_message(p1__53710_SHARP_);
return (set_error_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_error_BANG_.cljs$core$IFn$_invoke$arity$1(G__53721) : set_error_BANG_.call(null,G__53721));
})).finally((function (){
return (set_loading_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_loading_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_loading_BANG_.call(null,false));
}));
}catch (e53717){var e = e53717;
var G__53718 = e.message;
return (set_error_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_error_BANG_.cljs$core$IFn$_invoke$arity$1(G__53718) : set_error_BANG_.call(null,G__53718));
}})], null),frontend.components.user.login.input_row(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"email",new cljs.core.Keyword(null,"type","type",1174270348),"email",new cljs.core.Keyword(null,"name","name",1843675177),"email",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),"email",new cljs.core.Keyword(null,"label","label",1718410804),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","email","account/email",439866197)], 0))], null)),frontend.components.user.login.input_row(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"username",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"username",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),"username",new cljs.core.Keyword(null,"label","label",1718410804),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","username","account/username",-1384573795)], 0))], null)),frontend.components.user.login.input_row(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"password",new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"name","name",1843675177),"password",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),"new-password",new cljs.core.Keyword(null,"label","label",1718410804),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","password","account/password",-821117908)], 0))], null)),frontend.components.user.login.input_row(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"confirm-password",new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"name","name",1843675177),"confirm-password",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),"new-password",new cljs.core.Keyword(null,"label","label",1718410804),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","confirm-password","account/confirm-password",-473500411)], 0))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full","div.w-full",-1626749092),frontend.components.user.login.submit_button(loading_QMARK_,frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","create-account","account/create-account",1898927085)], 0)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.pt-1.text-center","p.pt-1.text-center",894078676),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-sm.opacity-60.hover:opacity-80.underline","a.text-sm.opacity-60.hover:opacity-80.underline",-1408006384),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (set_current_tab_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_tab_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"login","login",55217519)) : set_current_tab_BANG_.call(null,new cljs.core.Keyword(null,"login","login",55217519)));
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","back-to-login","account/back-to-login",1430252040)], 0))], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$user$login$signup_form__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__53722 = cljs.core.first(args__31746__auto__);
var G__53723 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__53722,G__53723) : io.factorhouse.hsx.core.obj_get.call(null,G__53722,G__53723));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"signup-form","signup-form",-540466722,null),args__31746__auto__),frontend$components$user$login$signup_form,args__31746__auto__,null);
}
};
var frontend$components$user$login$signup_form = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__53803__i = 0, G__53803__a = new Array(arguments.length -  0);
while (G__53803__i < G__53803__a.length) {G__53803__a[G__53803__i] = arguments[G__53803__i + 0]; ++G__53803__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__53803__a,0,null);
} 
return frontend$components$user$login$signup_form__delegate.call(this,args__31746__auto__);};
frontend$components$user$login$signup_form.cljs$lang$maxFixedArity = 0;
frontend$components$user$login$signup_form.cljs$lang$applyTo = (function (arglist__53804){
var args__31746__auto__ = cljs.core.seq(arglist__53804);
return frontend$components$user$login$signup_form__delegate(args__31746__auto__);
});
frontend$components$user$login$signup_form.cljs$core$IFn$_invoke$arity$variadic = frontend$components$user$login$signup_form__delegate;
return frontend$components$user$login$signup_form;
})()
;
var memo_comp__31747__auto__ = (function (){var G__53724 = comp__31745__auto__;
var G__53725 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__53724,G__53725) : io.factorhouse.hsx.core.react_memo.call(null,G__53724,G__53725));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"signup-form");

return comp__31745__auto__;
})();
frontend.components.user.login.reset_password_form = (function (){var render_fn__31744__auto__ = (function frontend$components$user$login$reset_password_form(p__53728){
var map__53729 = p__53728;
var map__53729__$1 = cljs.core.__destructure_map(map__53729);
var _props = map__53729__$1;
var set_current_tab_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53729__$1,new cljs.core.Keyword(null,"set-current-tab!","set-current-tab!",-1539504857));
var set_error_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53729__$1,new cljs.core.Keyword(null,"set-error!","set-error!",-1135166861));
var vec__53730 = logseq.shui.hooks.use_state(null);
var sent_username = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53730,(0),null);
var set_sent_username_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53730,(1),null);
var vec__53733 = logseq.shui.hooks.use_state(false);
var loading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53733,(0),null);
var set_loading_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53733,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.relative.flex.flex-col.justify-center.items-center.gap-4.w-full","form.relative.flex.flex-col.justify-center.items-center.gap-4.w-full",619118535),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),"off",new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (event){
event.preventDefault();

(set_error_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_error_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_error_BANG_.call(null,null));

var map__53736 = frontend.components.user.login.form_data(event);
var map__53736__$1 = cljs.core.__destructure_map(map__53736);
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53736__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53736__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53736__$1,new cljs.core.Keyword(null,"password","password",417022471));
var confirm_password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53736__$1,new cljs.core.Keyword(null,"confirm-password","confirm-password",1576165176));
(set_loading_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_loading_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_loading_BANG_.call(null,true));

if(cljs.core.truth_(sent_username)){
try{frontend.components.user.login.validate_password_BANG_(password);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(password,confirm_password)){
throw (new Error(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","passwords-do-not-match","account/passwords-do-not-match",1257229262)], 0))));
} else {
}

return module$node_modules$aws_amplify$dist$cjs$auth$index.confirmResetPassword(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"username","username",1605666410),sent_username,new cljs.core.Keyword(null,"confirmationCode","confirmationCode",941712150),code,new cljs.core.Keyword(null,"newPassword","newPassword",98419003),password], null))).then((function (){
return (set_current_tab_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_tab_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"login","login",55217519)) : set_current_tab_BANG_.call(null,new cljs.core.Keyword(null,"login","login",55217519)));
})).catch((function (p1__53726_SHARP_){
var G__53739 = frontend.components.user.login.auth_error_message(p1__53726_SHARP_);
return (set_error_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_error_BANG_.cljs$core$IFn$_invoke$arity$1(G__53739) : set_error_BANG_.call(null,G__53739));
})).finally((function (){
return (set_loading_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_loading_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_loading_BANG_.call(null,false));
}));
}catch (e53737){var e = e53737;
(set_loading_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_loading_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_loading_BANG_.call(null,false));

var G__53738 = e.message;
return (set_error_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_error_BANG_.cljs$core$IFn$_invoke$arity$1(G__53738) : set_error_BANG_.call(null,G__53738));
}} else {
return module$node_modules$aws_amplify$dist$cjs$auth$index.resetPassword(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"username","username",1605666410),clojure.string.trim((function (){var or__5142__auto__ = email;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})())], null))).then((function (_){
var G__53740 = clojure.string.trim((function (){var or__5142__auto__ = email;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})());
return (set_sent_username_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_sent_username_BANG_.cljs$core$IFn$_invoke$arity$1(G__53740) : set_sent_username_BANG_.call(null,G__53740));
})).catch((function (p1__53727_SHARP_){
var G__53741 = frontend.components.user.login.auth_error_message(p1__53727_SHARP_);
return (set_error_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_error_BANG_.cljs$core$IFn$_invoke$arity$1(G__53741) : set_error_BANG_.call(null,G__53741));
})).finally((function (){
return (set_loading_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_loading_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_loading_BANG_.call(null,false));
}));
}
})], null),(cljs.core.truth_(sent_username)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),frontend.components.user.login.input_row(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"code",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"code",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),"off",new cljs.core.Keyword(null,"label","label",1718410804),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","enter-code","account/enter-code",114395579)], 0))], null)),frontend.components.user.login.input_row(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"password",new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"name","name",1843675177),"password",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),"new-password",new cljs.core.Keyword(null,"label","label",1718410804),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","password","account/password",-821117908)], 0))], null)),frontend.components.user.login.input_row(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"confirm-password",new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"name","name",1843675177),"confirm-password",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),"new-password",new cljs.core.Keyword(null,"label","label",1718410804),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","confirm-password","account/confirm-password",-473500411)], 0))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full","div.w-full",-1626749092),frontend.components.user.login.submit_button(loading_QMARK_,frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","reset-password","account/reset-password",-100799386)], 0)))], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),frontend.components.user.login.input_row(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"email",new cljs.core.Keyword(null,"type","type",1174270348),"email",new cljs.core.Keyword(null,"name","name",1843675177),"email",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"label","label",1718410804),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","enter-email","account/enter-email",-1438422163)], 0))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full","div.w-full",-1626749092),frontend.components.user.login.submit_button(loading_QMARK_,frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","send-code","account/send-code",-1262489504)], 0)))], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.pt-1.text-center","p.pt-1.text-center",894078676),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-sm.opacity-60.hover:opacity-80.underline","a.text-sm.opacity-60.hover:opacity-80.underline",-1408006384),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (set_current_tab_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_tab_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"login","login",55217519)) : set_current_tab_BANG_.call(null,new cljs.core.Keyword(null,"login","login",55217519)));
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","back-to-login","account/back-to-login",1430252040)], 0))], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$user$login$reset_password_form__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__53742 = cljs.core.first(args__31746__auto__);
var G__53743 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__53742,G__53743) : io.factorhouse.hsx.core.obj_get.call(null,G__53742,G__53743));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"reset-password-form","reset-password-form",-1713410744,null),args__31746__auto__),frontend$components$user$login$reset_password_form,args__31746__auto__,null);
}
};
var frontend$components$user$login$reset_password_form = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__53805__i = 0, G__53805__a = new Array(arguments.length -  0);
while (G__53805__i < G__53805__a.length) {G__53805__a[G__53805__i] = arguments[G__53805__i + 0]; ++G__53805__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__53805__a,0,null);
} 
return frontend$components$user$login$reset_password_form__delegate.call(this,args__31746__auto__);};
frontend$components$user$login$reset_password_form.cljs$lang$maxFixedArity = 0;
frontend$components$user$login$reset_password_form.cljs$lang$applyTo = (function (arglist__53806){
var args__31746__auto__ = cljs.core.seq(arglist__53806);
return frontend$components$user$login$reset_password_form__delegate(args__31746__auto__);
});
frontend$components$user$login$reset_password_form.cljs$core$IFn$_invoke$arity$variadic = frontend$components$user$login$reset_password_form__delegate;
return frontend$components$user$login$reset_password_form;
})()
;
var memo_comp__31747__auto__ = (function (){var G__53744 = comp__31745__auto__;
var G__53745 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__53744,G__53745) : io.factorhouse.hsx.core.react_memo.call(null,G__53744,G__53745));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"reset-password-form");

return comp__31745__auto__;
})();
frontend.components.user.login.confirm_code_form = (function (){var render_fn__31744__auto__ = (function frontend$components$user$login$confirm_code_form(p__53747){
var map__53748 = p__53747;
var map__53748__$1 = cljs.core.__destructure_map(map__53748);
var current_tab = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53748__$1,new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577));
var set_current_tab_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53748__$1,new cljs.core.Keyword(null,"set-current-tab!","set-current-tab!",-1539504857));
var set_error_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53748__$1,new cljs.core.Keyword(null,"set-error!","set-error!",-1135166861));
var vec__53749 = logseq.shui.hooks.use_state(false);
var loading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53749,(0),null);
var set_loading_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53749,(1),null);
var map__53752 = current_tab;
var map__53752__$1 = cljs.core.__destructure_map(map__53752);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53752__$1,new cljs.core.Keyword(null,"user","user",1532431356));
var next_step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53752__$1,new cljs.core.Keyword(null,"next-step","next-step",1406694487));
var details = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(user,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nextStep","nextStep",-519406661),new cljs.core.Keyword(null,"codeDeliveryDetails","codeDeliveryDetails",-138135324)], null));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.relative.flex.flex-col.justify-center.items-center.gap-4.w-full","form.relative.flex.flex-col.justify-center.items-center.gap-4.w-full",619118535),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),"off",new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (event){
event.preventDefault();

(set_error_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_error_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_error_BANG_.call(null,null));

var map__53753 = frontend.components.user.login.form_data(event);
var map__53753__$1 = cljs.core.__destructure_map(map__53753);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53753__$1,new cljs.core.Keyword(null,"code","code",1586293142));
(set_loading_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_loading_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_loading_BANG_.call(null,true));

return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("CONFIRM_SIGN_UP",next_step))?module$node_modules$aws_amplify$dist$cjs$auth$index.confirmSignUp(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"confirmationCode","confirmationCode",941712150),code], null))):module$node_modules$aws_amplify$dist$cjs$auth$index.confirmSignIn(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"challengeResponse","challengeResponse",858880709),code], null)))).then((function (){
return (set_current_tab_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_tab_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"login","login",55217519)) : set_current_tab_BANG_.call(null,new cljs.core.Keyword(null,"login","login",55217519)));
})).catch((function (p1__53746_SHARP_){
var G__53754 = frontend.components.user.login.auth_error_message(p1__53746_SHARP_);
return (set_error_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_error_BANG_.cljs$core$IFn$_invoke$arity$1(G__53754) : set_error_BANG_.call(null,G__53754));
})).finally((function (){
return (set_loading_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_loading_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_loading_BANG_.call(null,false));
}));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.pb-2.opacity-60","p.pb-2.opacity-60",2120908656),(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(details);
if(cljs.core.truth_(temp__5823__auto__)){
var destination = temp__5823__auto__;
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","code-sent-to-email","account/code-sent-to-email",-854520145),destination], 0));
} else {
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","code-on-the-way-tip","account/code-on-the-way-tip",667664148)], 0));
}
})()], null),frontend.components.user.login.input_row(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"code",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"code",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),"off",new cljs.core.Keyword(null,"label","label",1718410804),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","enter-code","account/enter-code",114395579)], 0))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full","div.w-full",-1626749092),frontend.components.user.login.submit_button(loading_QMARK_,frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","confirm","account/confirm",1272510083)], 0)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.pt-1.text-center","p.pt-1.text-center",894078676),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-sm.opacity-60.hover:opacity-80.underline","a.text-sm.opacity-60.hover:opacity-80.underline",-1408006384),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (set_current_tab_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_tab_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"login","login",55217519)) : set_current_tab_BANG_.call(null,new cljs.core.Keyword(null,"login","login",55217519)));
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","back-to-login","account/back-to-login",1430252040)], 0))], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$user$login$confirm_code_form__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__53755 = cljs.core.first(args__31746__auto__);
var G__53756 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__53755,G__53756) : io.factorhouse.hsx.core.obj_get.call(null,G__53755,G__53756));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"confirm-code-form","confirm-code-form",-1301478323,null),args__31746__auto__),frontend$components$user$login$confirm_code_form,args__31746__auto__,null);
}
};
var frontend$components$user$login$confirm_code_form = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__53809__i = 0, G__53809__a = new Array(arguments.length -  0);
while (G__53809__i < G__53809__a.length) {G__53809__a[G__53809__i] = arguments[G__53809__i + 0]; ++G__53809__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__53809__a,0,null);
} 
return frontend$components$user$login$confirm_code_form__delegate.call(this,args__31746__auto__);};
frontend$components$user$login$confirm_code_form.cljs$lang$maxFixedArity = 0;
frontend$components$user$login$confirm_code_form.cljs$lang$applyTo = (function (arglist__53810){
var args__31746__auto__ = cljs.core.seq(arglist__53810);
return frontend$components$user$login$confirm_code_form__delegate(args__31746__auto__);
});
frontend$components$user$login$confirm_code_form.cljs$core$IFn$_invoke$arity$variadic = frontend$components$user$login$confirm_code_form__delegate;
return frontend$components$user$login$confirm_code_form;
})()
;
var memo_comp__31747__auto__ = (function (){var G__53757 = comp__31745__auto__;
var G__53758 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__53757,G__53758) : io.factorhouse.hsx.core.react_memo.call(null,G__53757,G__53758));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"confirm-code-form");

return comp__31745__auto__;
})();
frontend.components.user.login.authenticator = (function frontend$components$user$login$authenticator(var_args){
var args__5882__auto__ = [];
var len__5876__auto___53811 = arguments.length;
var i__5877__auto___53812 = (0);
while(true){
if((i__5877__auto___53812 < len__5876__auto___53811)){
args__5882__auto__.push((arguments[i__5877__auto___53812]));

var G__53813 = (i__5877__auto___53812 + (1));
i__5877__auto___53812 = G__53813;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.components.user.login.authenticator.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.components.user.login.authenticator.cljs$core$IFn$_invoke$arity$variadic = (function (opts,children){
var vec__53761 = logseq.shui.hooks.use_state(new cljs.core.Keyword(null,"login","login",55217519));
var current_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53761,(0),null);
var set_current_tab_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53761,(1),null);
var vec__53764 = logseq.shui.hooks.use_state(null);
var session_user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53764,(0),null);
var set_session_user_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53764,(1),null);
var vec__53767 = logseq.shui.hooks.use_state(null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53767,(0),null);
var set_error_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53767,(1),null);
var on_session_callback = new cljs.core.Keyword(null,"onSessionCallback","onSessionCallback",2047774922).cljs$core$IFn$_invoke$arity$1(opts);
logseq.shui.hooks.use_effect_BANG_((function (){
frontend.components.user.login._LT_load_session_BANG_(set_session_user_BANG_,(function (){var or__5142__auto__ = on_session_callback;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.identity;
}
})());

return (function (){
return cljs.core.List.EMPTY;
});
}),cljs.core.PersistentVector.EMPTY);

logseq.shui.hooks.use_effect_BANG_((function (){
(set_error_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_error_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_error_BANG_.call(null,null));

return (function (){
return cljs.core.List.EMPTY;
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_tab], null));

var tab_key = ((cljs.core.map_QMARK_(current_tab))?new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(current_tab):current_tab);
var title = (function (){var G__53770 = tab_key;
var G__53770__$1 = (((G__53770 instanceof cljs.core.Keyword))?G__53770.fqn:null);
switch (G__53770__$1) {
case "signup":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","sign-up","account/sign-up",1062427153)], 0));

break;
case "reset-password":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","reset-password","account/reset-password",-100799386)], 0));

break;
case "confirm-code":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","confirm","account/confirm",1272510083)], 0));

break;
default:
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","login","ui/login",55212987)], 0));

}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"titleRender","titleRender",1513071255).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5825__auto__)){
var title_render = temp__5825__auto__;
var G__53771 = cljs.core.name(tab_key);
var G__53772 = title;
return (title_render.cljs$core$IFn$_invoke$arity$2 ? title_render.cljs$core$IFn$_invoke$arity$2(G__53771,G__53772) : title_render.call(null,G__53771,G__53772));
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-authenticator-content","div.ls-authenticator-content",-1883295842),(((session_user == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.shui.ui.skeleton,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-4 w-[250px]"], null)], null):(cljs.core.truth_(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(session_user))?(function (){var child = cljs.core.first(children);
if(cljs.core.fn_QMARK_(child)){
var G__53773 = ({"sessionUser": cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(session_user), "signOut": (function (){
return module$node_modules$aws_amplify$dist$cjs$auth$index.signOut().then((function (){
return (set_session_user_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_session_user_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_session_user_BANG_.call(null,false));
}));
})});
return (child.cljs$core$IFn$_invoke$arity$1 ? child.cljs$core$IFn$_invoke$arity$1(G__53773) : child.call(null,G__53773));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full.text-center","div.w-full.text-center",-904551938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mb-4","p.mb-4",1550257197),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","already-logged-in-as","account/already-logged-in-as",-1720396223),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(session_user)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.shui.ui.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"class","class",-2030961996),"w-full",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return module$node_modules$aws_amplify$dist$cjs$auth$index.signOut().then((function (){
return (set_session_user_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_session_user_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_session_user_BANG_.call(null,false));
}));
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","sign-out","account/sign-out",811081516)], 0))], null)], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.shui.ui.alert,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"destructive","destructive",-1587723243),new cljs.core.Keyword(null,"class","class",-2030961996),"mb-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.shui.ui.alert_description,error], null)], null):null),(function (){var G__53774 = tab_key;
var G__53774__$1 = (((G__53774 instanceof cljs.core.Keyword))?G__53774.fqn:null);
switch (G__53774__$1) {
case "signup":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.user.login.signup_form,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"set-current-tab!","set-current-tab!",-1539504857),set_current_tab_BANG_,new cljs.core.Keyword(null,"set-error!","set-error!",-1135166861),set_error_BANG_], null)], null);

break;
case "reset-password":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.user.login.reset_password_form,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"set-current-tab!","set-current-tab!",-1539504857),set_current_tab_BANG_,new cljs.core.Keyword(null,"set-error!","set-error!",-1135166861),set_error_BANG_], null)], null);

break;
case "confirm-code":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.user.login.confirm_code_form,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577),current_tab,new cljs.core.Keyword(null,"set-current-tab!","set-current-tab!",-1539504857),set_current_tab_BANG_,new cljs.core.Keyword(null,"set-error!","set-error!",-1135166861),set_error_BANG_], null)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.user.login.login_form,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"set-current-tab!","set-current-tab!",-1539504857),set_current_tab_BANG_,new cljs.core.Keyword(null,"set-session-user!","set-session-user!",-1654777623),set_session_user_BANG_,new cljs.core.Keyword(null,"set-error!","set-error!",-1135166861),set_error_BANG_,new cljs.core.Keyword(null,"on-session-callback","on-session-callback",-665291040),(function (){var or__5142__auto__ = on_session_callback;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.identity;
}
})()], null)], null);

}
})()], null)
))], null)], null);
}));

(frontend.components.user.login.authenticator.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.components.user.login.authenticator.cljs$lang$applyTo = (function (seq53759){
var G__53760 = cljs.core.first(seq53759);
var seq53759__$1 = cljs.core.next(seq53759);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53760,seq53759__$1);
}));

frontend.components.user.login.user_pane = (function (){var render_fn__31744__auto__ = (function frontend$components$user$login$user_pane(_sign_out_BANG_,user){
var session = new cljs.core.Keyword(null,"signInUserSession","signInUserSession",1238093414).cljs$core$IFn$_invoke$arity$1(user);
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(session)){
frontend.handler.user.login_callback(session);

(logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dialog_close_BANG_.call(null));

(logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"user-login","user-login",1532000569),frontend.state.get_current_route())){
return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"home","home",-74557309)], null));
} else {
return null;
}
} else {
return null;
}
}),cljs.core.PersistentVector.EMPTY);

return null;
});
var comp__31745__auto__ = (function() { 
var frontend$components$user$login$user_pane__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__53775 = cljs.core.first(args__31746__auto__);
var G__53776 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__53775,G__53776) : io.factorhouse.hsx.core.obj_get.call(null,G__53775,G__53776));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"user-pane","user-pane",-823803090,null),args__31746__auto__),frontend$components$user$login$user_pane,args__31746__auto__,null);
}
};
var frontend$components$user$login$user_pane = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__53816__i = 0, G__53816__a = new Array(arguments.length -  0);
while (G__53816__i < G__53816__a.length) {G__53816__a[G__53816__i] = arguments[G__53816__i + 0]; ++G__53816__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__53816__a,0,null);
} 
return frontend$components$user$login$user_pane__delegate.call(this,args__31746__auto__);};
frontend$components$user$login$user_pane.cljs$lang$maxFixedArity = 0;
frontend$components$user$login$user_pane.cljs$lang$applyTo = (function (arglist__53817){
var args__31746__auto__ = cljs.core.seq(arglist__53817);
return frontend$components$user$login$user_pane__delegate(args__31746__auto__);
});
frontend$components$user$login$user_pane.cljs$core$IFn$_invoke$arity$variadic = frontend$components$user$login$user_pane__delegate;
return frontend$components$user$login$user_pane;
})()
;
var memo_comp__31747__auto__ = (function (){var G__53777 = comp__31745__auto__;
var G__53778 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__53777,G__53778) : io.factorhouse.hsx.core.react_memo.call(null,G__53777,G__53778));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"user-pane");

return comp__31745__auto__;
})();
frontend.components.user.login.page_impl = (function (){var render_fn__31744__auto__ = (function frontend$components$user$login$page_impl(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__user-login","div.cp__user-login",1062461723),frontend.components.user.login.authenticator.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"titleRender","titleRender",1513071255),(function (key,title){
var G__53779 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-0",new cljs.core.Keyword(null,"data-auth-title-key","data-auth-title-key",1934094882),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key))], null);
var G__53780 = (function (){var G__53781 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"capitalize"], null);
var G__53782 = clojure.string.replace(title,"-"," ");
return (logseq.shui.ui.card_title.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.card_title.cljs$core$IFn$_invoke$arity$2(G__53781,G__53782) : logseq.shui.ui.card_title.call(null,G__53781,G__53782));
})();
return (logseq.shui.ui.card_header.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.card_header.cljs$core$IFn$_invoke$arity$2(G__53779,G__53780) : logseq.shui.ui.card_header.call(null,G__53779,G__53780));
}),new cljs.core.Keyword(null,"onSessionCallback","onSessionCallback",2047774922),(function (){
return cljs.core.List.EMPTY;
})], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (op){
var sign_out_BANG__SINGLEQUOTE_ = op.signOut;
var user_SINGLEQUOTE_ = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(op.sessionUser);
return frontend.components.user.login.user_pane(sign_out_BANG__SINGLEQUOTE_,user_SINGLEQUOTE_);
})], 0))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$user$login$page_impl__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__53783 = cljs.core.first(args__31746__auto__);
var G__53784 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__53783,G__53784) : io.factorhouse.hsx.core.obj_get.call(null,G__53783,G__53784));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"page-impl","page-impl",-672049921,null),args__31746__auto__),frontend$components$user$login$page_impl,args__31746__auto__,null);
}
};
var frontend$components$user$login$page_impl = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__53822__i = 0, G__53822__a = new Array(arguments.length -  0);
while (G__53822__i < G__53822__a.length) {G__53822__a[G__53822__i] = arguments[G__53822__i + 0]; ++G__53822__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__53822__a,0,null);
} 
return frontend$components$user$login$page_impl__delegate.call(this,args__31746__auto__);};
frontend$components$user$login$page_impl.cljs$lang$maxFixedArity = 0;
frontend$components$user$login$page_impl.cljs$lang$applyTo = (function (arglist__53823){
var args__31746__auto__ = cljs.core.seq(arglist__53823);
return frontend$components$user$login$page_impl__delegate(args__31746__auto__);
});
frontend$components$user$login$page_impl.cljs$core$IFn$_invoke$arity$variadic = frontend$components$user$login$page_impl__delegate;
return frontend$components$user$login$page_impl;
})()
;
var memo_comp__31747__auto__ = (function (){var G__53785 = comp__31745__auto__;
var G__53786 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__53785,G__53786) : io.factorhouse.hsx.core.react_memo.call(null,G__53785,G__53786));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"page-impl");

return comp__31745__auto__;
})();
frontend.components.user.login.dialog_inner = (function (){var render_fn__31744__auto__ = (function frontend$components$user$login$dialog_inner(){
frontend.modules.shortcut.core.use_disable_all_shortcuts_BANG_();

return frontend.components.user.login.page_impl();
});
var comp__31745__auto__ = (function() { 
var frontend$components$user$login$dialog_inner__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__53787 = cljs.core.first(args__31746__auto__);
var G__53788 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__53787,G__53788) : io.factorhouse.hsx.core.obj_get.call(null,G__53787,G__53788));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"dialog-inner","dialog-inner",-1212613737,null),args__31746__auto__),frontend$components$user$login$dialog_inner,args__31746__auto__,null);
}
};
var frontend$components$user$login$dialog_inner = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__53826__i = 0, G__53826__a = new Array(arguments.length -  0);
while (G__53826__i < G__53826__a.length) {G__53826__a[G__53826__i] = arguments[G__53826__i + 0]; ++G__53826__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__53826__a,0,null);
} 
return frontend$components$user$login$dialog_inner__delegate.call(this,args__31746__auto__);};
frontend$components$user$login$dialog_inner.cljs$lang$maxFixedArity = 0;
frontend$components$user$login$dialog_inner.cljs$lang$applyTo = (function (arglist__53827){
var args__31746__auto__ = cljs.core.seq(arglist__53827);
return frontend$components$user$login$dialog_inner__delegate(args__31746__auto__);
});
frontend$components$user$login$dialog_inner.cljs$core$IFn$_invoke$arity$variadic = frontend$components$user$login$dialog_inner__delegate;
return frontend$components$user$login$dialog_inner;
})()
;
var memo_comp__31747__auto__ = (function (){var G__53789 = comp__31745__auto__;
var G__53790 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__53789,G__53790) : io.factorhouse.hsx.core.react_memo.call(null,G__53789,G__53790));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"dialog-inner");

return comp__31745__auto__;
})();
frontend.components.user.login.page = (function (){var render_fn__31744__auto__ = (function frontend$components$user$login$page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pt-10","div.pt-10",-838254458),frontend.components.user.login.page_impl()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$user$login$page__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__53791 = cljs.core.first(args__31746__auto__);
var G__53792 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__53791,G__53792) : io.factorhouse.hsx.core.obj_get.call(null,G__53791,G__53792));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"page","page",-1805363372,null),args__31746__auto__),frontend$components$user$login$page,args__31746__auto__,null);
}
};
var frontend$components$user$login$page = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__53830__i = 0, G__53830__a = new Array(arguments.length -  0);
while (G__53830__i < G__53830__a.length) {G__53830__a[G__53830__i] = arguments[G__53830__i + 0]; ++G__53830__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__53830__a,0,null);
} 
return frontend$components$user$login$page__delegate.call(this,args__31746__auto__);};
frontend$components$user$login$page.cljs$lang$maxFixedArity = 0;
frontend$components$user$login$page.cljs$lang$applyTo = (function (arglist__53831){
var args__31746__auto__ = cljs.core.seq(arglist__53831);
return frontend$components$user$login$page__delegate(args__31746__auto__);
});
frontend$components$user$login$page.cljs$core$IFn$_invoke$arity$variadic = frontend$components$user$login$page__delegate;
return frontend$components$user$login$page;
})()
;
var memo_comp__31747__auto__ = (function (){var G__53793 = comp__31745__auto__;
var G__53794 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__53793,G__53794) : io.factorhouse.hsx.core.react_memo.call(null,G__53793,G__53794));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"page");

return comp__31745__auto__;
})();
frontend.components.user.login.open_login_modal_BANG_ = (function frontend$components$user$login$open_login_modal_BANG_(){
var G__53796 = (function (_close){
return frontend.components.user.login.dialog_inner();
});
var G__53797 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"user-login","user-login",1532000569),new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onPointerDownOutside","onPointerDownOutside",404933036),(function (p1__53795_SHARP_){
if(cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll("[data-auth-title-key='login']")))){
var inputs = dommy.utils.__GT_Array(document.querySelectorAll(".ls-authenticator-content form input:not([type=checkbox])"));
var inputs__$1 = (function (){var G__53798 = inputs;
var G__53798__$1 = (((G__53798 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (e){
return e.value;
}),G__53798));
if((G__53798__$1 == null)){
return null;
} else {
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,G__53798__$1);
}
})();
if(cljs.core.seq(inputs__$1)){
return p1__53795_SHARP_.preventDefault();
} else {
return null;
}
} else {
return p1__53795_SHARP_.preventDefault();
}
})], null)], null);
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2(G__53796,G__53797) : logseq.shui.ui.dialog_open_BANG_.call(null,G__53796,G__53797));
});

//# sourceMappingURL=frontend.components.user.login.js.map
