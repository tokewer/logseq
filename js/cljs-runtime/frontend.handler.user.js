goog.provide('frontend.handler.user');
frontend.handler.user.decode_username = (function frontend$handler$user$decode_username(username){
var arr = (new Uint8Array(cljs.core.count(username)));
var seq__57324_58029 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(username)));
var chunk__57325_58030 = null;
var count__57326_58031 = (0);
var i__57327_58032 = (0);
while(true){
if((i__57327_58032 < count__57326_58031)){
var i_58034 = chunk__57325_58030.cljs$core$IIndexed$_nth$arity$2(null,i__57327_58032);
(arr[i_58034] = username.charCodeAt(i_58034));


var G__58035 = seq__57324_58029;
var G__58036 = chunk__57325_58030;
var G__58037 = count__57326_58031;
var G__58038 = (i__57327_58032 + (1));
seq__57324_58029 = G__58035;
chunk__57325_58030 = G__58036;
count__57326_58031 = G__58037;
i__57327_58032 = G__58038;
continue;
} else {
var temp__5825__auto___58039 = cljs.core.seq(seq__57324_58029);
if(temp__5825__auto___58039){
var seq__57324_58040__$1 = temp__5825__auto___58039;
if(cljs.core.chunked_seq_QMARK_(seq__57324_58040__$1)){
var c__5673__auto___58041 = cljs.core.chunk_first(seq__57324_58040__$1);
var G__58042 = cljs.core.chunk_rest(seq__57324_58040__$1);
var G__58043 = c__5673__auto___58041;
var G__58044 = cljs.core.count(c__5673__auto___58041);
var G__58045 = (0);
seq__57324_58029 = G__58042;
chunk__57325_58030 = G__58043;
count__57326_58031 = G__58044;
i__57327_58032 = G__58045;
continue;
} else {
var i_58046 = cljs.core.first(seq__57324_58040__$1);
(arr[i_58046] = username.charCodeAt(i_58046));


var G__58047 = cljs.core.next(seq__57324_58040__$1);
var G__58048 = null;
var G__58049 = (0);
var G__58050 = (0);
seq__57324_58029 = G__58047;
chunk__57325_58030 = G__58048;
count__57326_58031 = G__58049;
i__57327_58032 = G__58050;
continue;
}
} else {
}
}
break;
}

return (new TextDecoder("utf-8")).decode(arr);
});
frontend.handler.user.parse_jwt = (function frontend$handler$user$parse_jwt(jwt){
var G__57329 = jwt;
var G__57329__$1 = (((G__57329 == null))?null:clojure.string.split.cljs$core$IFn$_invoke$arity$2(G__57329,"."));
var G__57329__$2 = (((G__57329__$1 == null))?null:cljs.core.second(G__57329__$1));
var G__57329__$3 = (((G__57329__$2 == null))?null:(function (p1__57328_SHARP_){
return goog.crypt.base64.decodeString(p1__57328_SHARP_,true);
})(G__57329__$2));
var G__57329__$4 = (((G__57329__$3 == null))?null:JSON.parse(G__57329__$3));
var G__57329__$5 = (((G__57329__$4 == null))?null:cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(G__57329__$4,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
if((G__57329__$5 == null)){
return null;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__57329__$5,new cljs.core.Keyword(null,"cognito:username","cognito:username",-2023950904),frontend.handler.user.decode_username);
}
});
frontend.handler.user.parse_jwt_safe = (function frontend$handler$user$parse_jwt_safe(jwt){
try{return frontend.handler.user.parse_jwt(jwt);
}catch (e57330){var _ = e57330;
return null;
}});
frontend.handler.user.expired_QMARK_ = (function frontend$handler$user$expired_QMARK_(parsed_jwt){
var G__57331 = ((1000) * new cljs.core.Keyword(null,"exp","exp",-261706262).cljs$core$IFn$_invoke$arity$1(parsed_jwt));
var G__57331__$1 = (((G__57331 == null))?null:cljs_time.coerce.from_long(G__57331));
if((G__57331__$1 == null)){
return null;
} else {
return cljs_time.core.before_QMARK_(G__57331__$1,cljs_time.core.now());
}
});
/**
 * return true when jwt will expire after 1h
 */
frontend.handler.user.almost_expired_QMARK_ = (function frontend$handler$user$almost_expired_QMARK_(parsed_jwt){
var G__57332 = ((1000) * new cljs.core.Keyword(null,"exp","exp",-261706262).cljs$core$IFn$_invoke$arity$1(parsed_jwt));
var G__57332__$1 = (((G__57332 == null))?null:cljs_time.coerce.from_long(G__57332));
if((G__57332__$1 == null)){
return null;
} else {
return cljs_time.core.before_QMARK_(G__57332__$1,cljs_time.core.from_now(cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1((1))));
}
});
frontend.handler.user.almost_expired_or_expired_QMARK_ = (function frontend$handler$user$almost_expired_or_expired_QMARK_(parsed_jwt){
var or__5142__auto__ = frontend.handler.user.almost_expired_QMARK_(parsed_jwt);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.handler.user.expired_QMARK_(parsed_jwt);
}
});
frontend.handler.user.email = (function frontend$handler$user$email(){
var G__57333 = frontend.state.get_auth_id_token();
var G__57333__$1 = (((G__57333 == null))?null:frontend.handler.user.parse_jwt(G__57333));
if((G__57333__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(G__57333__$1);
}
});
frontend.handler.user.username = (function frontend$handler$user$username(){
var G__57334 = frontend.state.get_auth_id_token();
var G__57334__$1 = (((G__57334 == null))?null:frontend.handler.user.parse_jwt(G__57334));
if((G__57334__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"cognito:username","cognito:username",-2023950904).cljs$core$IFn$_invoke$arity$1(G__57334__$1);
}
});
frontend.handler.user.user_uuid = (function frontend$handler$user$user_uuid(){
var G__57335 = frontend.state.get_auth_id_token();
var G__57335__$1 = (((G__57335 == null))?null:frontend.handler.user.parse_jwt(G__57335));
if((G__57335__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"sub","sub",-2093760025).cljs$core$IFn$_invoke$arity$1(G__57335__$1);
}
});
frontend.handler.user.logged_in_QMARK_ = (function frontend$handler$user$logged_in_QMARK_(){
var token = frontend.state.get_auth_refresh_token();
if(typeof token === 'string'){
return (!(clojure.string.blank_QMARK_(token)));
} else {
return null;
}
});
frontend.handler.user.set_token_to_localstorage_BANG_ = (function frontend$handler$user$set_token_to_localstorage_BANG_(var_args){
var G__57337 = arguments.length;
switch (G__57337) {
case 2:
return frontend.handler.user.set_token_to_localstorage_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.handler.user.set_token_to_localstorage_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.user.set_token_to_localstorage_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (id_token,access_token){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"debug","debug",-1608172596),"set-token-to-localstorage!"], 0));

localStorage.setItem("id-token",id_token);

return localStorage.setItem("access-token",access_token);
}));

(frontend.handler.user.set_token_to_localstorage_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (id_token,access_token,refresh_token){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"debug","debug",-1608172596),"set-token-to-localstorage!"], 0));

localStorage.setItem("id-token",id_token);

localStorage.setItem("access-token",access_token);

return localStorage.setItem("refresh-token",refresh_token);
}));

(frontend.handler.user.set_token_to_localstorage_BANG_.cljs$lang$maxFixedArity = 3);

frontend.handler.user.auth_file_path = (function frontend$handler$user$auth_file_path(){
var temp__5825__auto__ = frontend.state.get_state(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("system","info","system/info",-1203399931),new cljs.core.Keyword(null,"home-dir","home-dir",1408715416)], null));
if(cljs.core.truth_(temp__5825__auto__)){
var home_dir = temp__5825__auto__;
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(home_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["logseq","auth.json"], 0));
} else {
return null;
}
});
frontend.handler.user.auth_file_payload = (function frontend$handler$user$auth_file_payload(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id-token","id-token",-339268306),frontend.state.get_auth_id_token(),new cljs.core.Keyword(null,"access-token","access-token",-654201199),frontend.state.get_state(new cljs.core.Keyword("auth","access-token","auth/access-token",-657486615)),new cljs.core.Keyword(null,"refresh-token","refresh-token",-1032003584),frontend.state.get_auth_refresh_token(),new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336),Date.now()], null);
});
frontend.handler.user.persist_auth_file_BANG_ = (function frontend$handler$user$persist_auth_file_BANG_(){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
var temp__5825__auto__ = frontend.handler.user.auth_file_path();
if(cljs.core.truth_(temp__5825__auto__)){
var auth_path = temp__5825__auto__;
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["writeFile",null,auth_path,JSON.stringify(cljs.core.clj__GT_js(frontend.handler.user.auth_file_payload()),null,(2))], 0)),(function (error){
console.warn(new cljs.core.Keyword(null,"persist-auth-file-failed","persist-auth-file-failed",-138486811),error);

return null;
}));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Clear tokens for cognito's localstorage, prefix is 'CognitoIdentityServiceProvider'
 */
frontend.handler.user.clear_cognito_tokens_BANG_ = (function frontend$handler$user$clear_cognito_tokens_BANG_(){
var prefix = "CognitoIdentityServiceProvider.";
var seq__57338 = cljs.core.seq(Object.keys(localStorage));
var chunk__57339 = null;
var count__57340 = (0);
var i__57341 = (0);
while(true){
if((i__57341 < count__57340)){
var key = chunk__57339.cljs$core$IIndexed$_nth$arity$2(null,i__57341);
if(clojure.string.starts_with_QMARK_(key,prefix)){
localStorage.removeItem(key);
} else {
}


var G__58056 = seq__57338;
var G__58057 = chunk__57339;
var G__58058 = count__57340;
var G__58059 = (i__57341 + (1));
seq__57338 = G__58056;
chunk__57339 = G__58057;
count__57340 = G__58058;
i__57341 = G__58059;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__57338);
if(temp__5825__auto__){
var seq__57338__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57338__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__57338__$1);
var G__58060 = cljs.core.chunk_rest(seq__57338__$1);
var G__58061 = c__5673__auto__;
var G__58062 = cljs.core.count(c__5673__auto__);
var G__58063 = (0);
seq__57338 = G__58060;
chunk__57339 = G__58061;
count__57340 = G__58062;
i__57341 = G__58063;
continue;
} else {
var key = cljs.core.first(seq__57338__$1);
if(clojure.string.starts_with_QMARK_(key,prefix)){
localStorage.removeItem(key);
} else {
}


var G__58064 = cljs.core.next(seq__57338__$1);
var G__58065 = null;
var G__58066 = (0);
var G__58067 = (0);
seq__57338 = G__58064;
chunk__57339 = G__58065;
count__57340 = G__58066;
i__57341 = G__58067;
continue;
}
} else {
return null;
}
}
break;
}
});
frontend.handler.user.auto_fill_refresh_token_from_cognito_BANG_ = (function frontend$handler$user$auto_fill_refresh_token_from_cognito_BANG_(){
var prefix = "CognitoIdentityServiceProvider.";
var refresh_token_key = cljs.core.some((function (p1__57342_SHARP_){
if(clojure.string.starts_with_QMARK_(p1__57342_SHARP_,prefix)){
if(clojure.string.ends_with_QMARK_(p1__57342_SHARP_,"refreshToken")){
return p1__57342_SHARP_;
} else {
return null;
}
} else {
return null;
}
}),Object.keys(localStorage));
if(cljs.core.truth_(refresh_token_key)){
var refresh_token = localStorage.getItem(refresh_token_key);
if(cljs.core.truth_((function (){var and__5140__auto__ = refresh_token;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(refresh_token,"undefined");
} else {
return and__5140__auto__;
}
})())){
frontend.state.set_auth_refresh_token(refresh_token);

localStorage.setItem("refresh-token",refresh_token);

return frontend.handler.user.persist_auth_file_BANG_();
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.user.clear_tokens = (function frontend$handler$user$clear_tokens(var_args){
var G__57344 = arguments.length;
switch (G__57344) {
case 0:
return frontend.handler.user.clear_tokens.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.user.clear_tokens.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.user.clear_tokens.cljs$core$IFn$_invoke$arity$0 = (function (){
frontend.state.set_auth_id_token(null);

frontend.state.set_auth_access_token(null);

frontend.state.set_auth_refresh_token(null);

frontend.handler.user.set_token_to_localstorage_BANG_.cljs$core$IFn$_invoke$arity$3("","","");

frontend.handler.user.clear_cognito_tokens_BANG_();

return frontend.handler.user.persist_auth_file_BANG_();
}));

(frontend.handler.user.clear_tokens.cljs$core$IFn$_invoke$arity$1 = (function (except_refresh_token_QMARK_){
frontend.state.set_auth_id_token(null);

frontend.state.set_auth_access_token(null);

if(cljs.core.truth_(except_refresh_token_QMARK_)){
} else {
frontend.state.set_auth_refresh_token(null);
}

if(cljs.core.truth_(except_refresh_token_QMARK_)){
frontend.handler.user.set_token_to_localstorage_BANG_.cljs$core$IFn$_invoke$arity$2("","");
} else {
frontend.handler.user.set_token_to_localstorage_BANG_.cljs$core$IFn$_invoke$arity$3("","","");
}

return frontend.handler.user.persist_auth_file_BANG_();
}));

(frontend.handler.user.clear_tokens.cljs$lang$maxFixedArity = 1);

frontend.handler.user.set_tokens_BANG_ = (function frontend$handler$user$set_tokens_BANG_(var_args){
var G__57346 = arguments.length;
switch (G__57346) {
case 2:
return frontend.handler.user.set_tokens_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.handler.user.set_tokens_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.user.set_tokens_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (id_token,access_token){
frontend.state.set_auth_id_token(id_token);

frontend.state.set_auth_access_token(access_token);

frontend.handler.user.set_token_to_localstorage_BANG_.cljs$core$IFn$_invoke$arity$2(id_token,access_token);

frontend.handler.user.persist_auth_file_BANG_();

var G__57347 = frontend.handler.user.parse_jwt(frontend.state.get_auth_id_token());
if((G__57347 == null)){
return null;
} else {
return frontend.state.set_state_BANG_(new cljs.core.Keyword("auth","current-login-user","auth/current-login-user",2127074079),G__57347);
}
}));

(frontend.handler.user.set_tokens_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (id_token,access_token,refresh_token){
frontend.state.set_auth_id_token(id_token);

frontend.state.set_auth_access_token(access_token);

frontend.state.set_auth_refresh_token(refresh_token);

frontend.handler.user.set_token_to_localstorage_BANG_.cljs$core$IFn$_invoke$arity$3(id_token,access_token,refresh_token);

frontend.handler.user.persist_auth_file_BANG_();

var G__57348 = frontend.handler.user.parse_jwt(frontend.state.get_auth_id_token());
if((G__57348 == null)){
return null;
} else {
return frontend.state.set_state_BANG_(new cljs.core.Keyword("auth","current-login-user","auth/current-login-user",2127074079),G__57348);
}
}));

(frontend.handler.user.set_tokens_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * return refreshed id-token, access-token
 */
frontend.handler.user._LT_refresh_tokens = (function frontend$handler$user$_LT_refresh_tokens(refresh_token){
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((""+"https://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.OAUTH_DOMAIN)+"/oauth2/token"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form-params","form-params",1884296467),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grant_type","grant_type",-293641122),"refresh_token",new cljs.core.Keyword(null,"client_id","client_id",48809273),frontend.config.COGNITO_CLIENT_ID,new cljs.core.Keyword(null,"refresh_token","refresh_token",-162233815),refresh_token], null)], null)], 0));
});
/**
 * Refresh id-token and access-token
 */
frontend.handler.user._LT_refresh_id_token_AMPERSAND_access_token = (function frontend$handler$user$_LT_refresh_id_token_AMPERSAND_access_token(){
var c__29891__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29892__auto__ = (function (){var switch__29702__auto__ = (function (state_57436){
var state_val_57437 = (state_57436[(1)]);
if((state_val_57437 === (7))){
var inst_57355 = (state_57436[(7)]);
var state_57436__$1 = state_57436;
var statearr_57439_58082 = state_57436__$1;
(statearr_57439_58082[(2)] = inst_57355);

(statearr_57439_58082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (20))){
var inst_57390 = (state_57436[(2)]);
var state_57436__$1 = state_57436;
if(cljs.core.truth_(inst_57390)){
var statearr_57440_58083 = state_57436__$1;
(statearr_57440_58083[(1)] = (21));

} else {
var statearr_57441_58084 = state_57436__$1;
(statearr_57441_58084[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (27))){
var inst_57353 = (state_57436[(8)]);
var inst_57407 = (state_57436[(9)]);
var inst_57406 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_57353);
var inst_57407__$1 = new cljs.core.Keyword(null,"id_token","id_token",148712273).cljs$core$IFn$_invoke$arity$1(inst_57406);
var state_57436__$1 = (function (){var statearr_57442 = state_57436;
(statearr_57442[(9)] = inst_57407__$1);

return statearr_57442;
})();
if(cljs.core.truth_(inst_57407__$1)){
var statearr_57443_58086 = state_57436__$1;
(statearr_57443_58086[(1)] = (30));

} else {
var statearr_57444_58087 = state_57436__$1;
(statearr_57444_58087[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (1))){
var inst_57349 = (state_57436[(10)]);
var inst_57349__$1 = frontend.state.get_auth_refresh_token();
var state_57436__$1 = (function (){var statearr_57445 = state_57436;
(statearr_57445[(10)] = inst_57349__$1);

return statearr_57445;
})();
if(cljs.core.truth_(inst_57349__$1)){
var statearr_57446_58088 = state_57436__$1;
(statearr_57446_58088[(1)] = (2));

} else {
var statearr_57447_58089 = state_57436__$1;
(statearr_57447_58089[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (24))){
var inst_57402 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","refresh-token-warning","account/refresh-token-warning",1501274701)], 0));
var inst_57403 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(inst_57402,new cljs.core.Keyword(null,"warning","warning",-1685650671),true);
var state_57436__$1 = state_57436;
var statearr_57448_58090 = state_57436__$1;
(statearr_57448_58090[(2)] = inst_57403);

(statearr_57448_58090[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (4))){
var inst_57434 = (state_57436[(2)]);
var state_57436__$1 = state_57436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57436__$1,inst_57434);
} else {
if((state_val_57437 === (15))){
var inst_57375 = frontend.handler.user.clear_tokens.cljs$core$IFn$_invoke$arity$0();
var state_57436__$1 = state_57436;
var statearr_57449_58092 = state_57436__$1;
(statearr_57449_58092[(2)] = inst_57375);

(statearr_57449_58092[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (21))){
var inst_57353 = (state_57436[(8)]);
var inst_57392 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_57353);
var inst_57393 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_57353);
var inst_57394 = new cljs.core.Keyword(null,"error-code","error-code",180497232).cljs$core$IFn$_invoke$arity$1(inst_57353);
var inst_57395 = new cljs.core.Keyword(null,"error-text","error-text",2021893718).cljs$core$IFn$_invoke$arity$1(inst_57353);
var inst_57396 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"refresh-token-failed","refresh-token-failed",-110191038),new cljs.core.Keyword(null,"status","status",-1997798413),inst_57392,new cljs.core.Keyword(null,"body","body",-2049205669),inst_57393,new cljs.core.Keyword(null,"error-code","error-code",180497232),inst_57394,new cljs.core.Keyword(null,"error-text","error-text",2021893718),inst_57395], 0));
var state_57436__$1 = (function (){var statearr_57456 = state_57436;
(statearr_57456[(11)] = inst_57396);

return statearr_57456;
})();
var statearr_57457_58093 = state_57436__$1;
(statearr_57457_58093[(2)] = null);

(statearr_57457_58093[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (31))){
var inst_57407 = (state_57436[(9)]);
var state_57436__$1 = state_57436;
var statearr_57461_58094 = state_57436__$1;
(statearr_57461_58094[(2)] = inst_57407);

(statearr_57461_58094[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (32))){
var inst_57413 = (state_57436[(2)]);
var state_57436__$1 = state_57436;
if(cljs.core.truth_(inst_57413)){
var statearr_57462_58095 = state_57436__$1;
(statearr_57462_58095[(1)] = (33));

} else {
var statearr_57463_58096 = state_57436__$1;
(statearr_57463_58096[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (33))){
var inst_57353 = (state_57436[(8)]);
var inst_57415 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_57353);
var inst_57416 = new cljs.core.Keyword(null,"id_token","id_token",148712273).cljs$core$IFn$_invoke$arity$1(inst_57415);
var inst_57417 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_57353);
var inst_57418 = new cljs.core.Keyword(null,"access_token","access_token",1591156073).cljs$core$IFn$_invoke$arity$1(inst_57417);
var inst_57419 = frontend.handler.user.set_tokens_BANG_.cljs$core$IFn$_invoke$arity$2(inst_57416,inst_57418);
var state_57436__$1 = state_57436;
var statearr_57464_58097 = state_57436__$1;
(statearr_57464_58097[(2)] = inst_57419);

(statearr_57464_58097[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (13))){
var inst_57364 = (state_57436[(12)]);
var state_57436__$1 = state_57436;
var statearr_57465_58098 = state_57436__$1;
(statearr_57465_58098[(2)] = inst_57364);

(statearr_57465_58098[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (22))){
var inst_57353 = (state_57436[(8)]);
var inst_57398 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_57353);
var inst_57399 = (cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_57398) : cljs_http.client.unexceptional_status_QMARK_.call(null,inst_57398));
var inst_57400 = cljs.core.not(inst_57399);
var state_57436__$1 = state_57436;
if(inst_57400){
var statearr_57472_58099 = state_57436__$1;
(statearr_57472_58099[(1)] = (24));

} else {
var statearr_57473_58100 = state_57436__$1;
(statearr_57473_58100[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (29))){
var inst_57425 = (state_57436[(2)]);
var state_57436__$1 = state_57436;
var statearr_57474_58101 = state_57436__$1;
(statearr_57474_58101[(2)] = inst_57425);

(statearr_57474_58101[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (6))){
var inst_57353 = (state_57436[(8)]);
var inst_57357 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_57353);
var inst_57358 = ((500) > inst_57357);
var state_57436__$1 = state_57436;
var statearr_57478_58102 = state_57436__$1;
(statearr_57478_58102[(2)] = inst_57358);

(statearr_57478_58102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (28))){
var state_57436__$1 = state_57436;
var statearr_57479_58103 = state_57436__$1;
(statearr_57479_58103[(2)] = null);

(statearr_57479_58103[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (25))){
var state_57436__$1 = state_57436;
var statearr_57480_58104 = state_57436__$1;
(statearr_57480_58104[(1)] = (27));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (34))){
var state_57436__$1 = state_57436;
var statearr_57482_58105 = state_57436__$1;
(statearr_57482_58105[(2)] = null);

(statearr_57482_58105[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (17))){
var inst_57378 = (state_57436[(2)]);
var state_57436__$1 = state_57436;
var statearr_57483_58106 = state_57436__$1;
(statearr_57483_58106[(2)] = inst_57378);

(statearr_57483_58106[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (3))){
var state_57436__$1 = state_57436;
var statearr_57484_58107 = state_57436__$1;
(statearr_57484_58107[(2)] = null);

(statearr_57484_58107[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (12))){
var inst_57353 = (state_57436[(8)]);
var inst_57366 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_57353);
var inst_57367 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_57366);
var inst_57368 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57367,"invalid_grant");
var state_57436__$1 = state_57436;
var statearr_57485_58108 = state_57436__$1;
(statearr_57485_58108[(2)] = inst_57368);

(statearr_57485_58108[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (2))){
var inst_57349 = (state_57436[(10)]);
var inst_57351 = frontend.handler.user._LT_refresh_tokens(inst_57349);
var state_57436__$1 = state_57436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57436__$1,(5),inst_57351);
} else {
if((state_val_57437 === (23))){
var inst_57429 = (state_57436[(2)]);
var state_57436__$1 = state_57436;
var statearr_57486_58111 = state_57436__$1;
(statearr_57486_58111[(2)] = inst_57429);

(statearr_57486_58111[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (35))){
var inst_57422 = (state_57436[(2)]);
var state_57436__$1 = state_57436;
var statearr_57487_58112 = state_57436__$1;
(statearr_57487_58112[(2)] = inst_57422);

(statearr_57487_58112[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (19))){
var inst_57382 = (state_57436[(13)]);
var state_57436__$1 = state_57436;
var statearr_57488_58113 = state_57436__$1;
(statearr_57488_58113[(2)] = inst_57382);

(statearr_57488_58113[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (11))){
var inst_57431 = (state_57436[(2)]);
var state_57436__$1 = state_57436;
var statearr_57489_58115 = state_57436__$1;
(statearr_57489_58115[(2)] = inst_57431);

(statearr_57489_58115[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (9))){
var inst_57353 = (state_57436[(8)]);
var inst_57364 = (state_57436[(12)]);
var inst_57363 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_57353);
var inst_57364__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((400),inst_57363);
var state_57436__$1 = (function (){var statearr_57490 = state_57436;
(statearr_57490[(12)] = inst_57364__$1);

return statearr_57490;
})();
if(inst_57364__$1){
var statearr_57491_58116 = state_57436__$1;
(statearr_57491_58116[(1)] = (12));

} else {
var statearr_57492_58117 = state_57436__$1;
(statearr_57492_58117[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (5))){
var inst_57353 = (state_57436[(8)]);
var inst_57355 = (state_57436[(7)]);
var inst_57353__$1 = (state_57436[(2)]);
var inst_57354 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_57353__$1);
var inst_57355__$1 = ((400) <= inst_57354);
var state_57436__$1 = (function (){var statearr_57493 = state_57436;
(statearr_57493[(8)] = inst_57353__$1);

(statearr_57493[(7)] = inst_57355__$1);

return statearr_57493;
})();
if(cljs.core.truth_(inst_57355__$1)){
var statearr_57494_58118 = state_57436__$1;
(statearr_57494_58118[(1)] = (6));

} else {
var statearr_57495_58119 = state_57436__$1;
(statearr_57495_58119[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (14))){
var inst_57353 = (state_57436[(8)]);
var inst_57371 = (state_57436[(2)]);
var inst_57372 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_57353);
var inst_57373 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"refresh-token-failed","refresh-token-failed",-110191038),new cljs.core.Keyword(null,"status","status",-1997798413),inst_57372], 0));
var state_57436__$1 = (function (){var statearr_57496 = state_57436;
(statearr_57496[(14)] = inst_57373);

return statearr_57496;
})();
if(cljs.core.truth_(inst_57371)){
var statearr_57497_58120 = state_57436__$1;
(statearr_57497_58120[(1)] = (15));

} else {
var statearr_57498_58121 = state_57436__$1;
(statearr_57498_58121[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (26))){
var inst_57427 = (state_57436[(2)]);
var state_57436__$1 = state_57436;
var statearr_57505_58122 = state_57436__$1;
(statearr_57505_58122[(2)] = inst_57427);

(statearr_57505_58122[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (16))){
var state_57436__$1 = state_57436;
var statearr_57506_58123 = state_57436__$1;
(statearr_57506_58123[(2)] = null);

(statearr_57506_58123[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (30))){
var inst_57353 = (state_57436[(8)]);
var inst_57409 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_57353);
var inst_57410 = new cljs.core.Keyword(null,"access_token","access_token",1591156073).cljs$core$IFn$_invoke$arity$1(inst_57409);
var state_57436__$1 = state_57436;
var statearr_57510_58124 = state_57436__$1;
(statearr_57510_58124[(2)] = inst_57410);

(statearr_57510_58124[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (10))){
var inst_57353 = (state_57436[(8)]);
var inst_57382 = (state_57436[(13)]);
var inst_57380 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_57353);
var inst_57381 = (cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_57380) : cljs_http.client.unexceptional_status_QMARK_.call(null,inst_57380));
var inst_57382__$1 = cljs.core.not(inst_57381);
var state_57436__$1 = (function (){var statearr_57511 = state_57436;
(statearr_57511[(13)] = inst_57382__$1);

return statearr_57511;
})();
if(inst_57382__$1){
var statearr_57512_58125 = state_57436__$1;
(statearr_57512_58125[(1)] = (18));

} else {
var statearr_57513_58126 = state_57436__$1;
(statearr_57513_58126[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (18))){
var inst_57384 = frontend.state.get_auth_id_token();
var inst_57385 = frontend.handler.user.parse_jwt(inst_57384);
var inst_57386 = frontend.handler.user.expired_QMARK_(inst_57385);
var inst_57387 = cljs.core.not(inst_57386);
var state_57436__$1 = state_57436;
var statearr_57514_58127 = state_57436__$1;
(statearr_57514_58127[(2)] = inst_57387);

(statearr_57514_58127[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57437 === (8))){
var inst_57361 = (state_57436[(2)]);
var state_57436__$1 = state_57436;
if(cljs.core.truth_(inst_57361)){
var statearr_57515_58128 = state_57436__$1;
(statearr_57515_58128[(1)] = (9));

} else {
var statearr_57516_58129 = state_57436__$1;
(statearr_57516_58129[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});
return (function() {
var frontend$handler$user$_LT_refresh_id_token_AMPERSAND_access_token_$_state_machine__29703__auto__ = null;
var frontend$handler$user$_LT_refresh_id_token_AMPERSAND_access_token_$_state_machine__29703__auto____0 = (function (){
var statearr_57523 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57523[(0)] = frontend$handler$user$_LT_refresh_id_token_AMPERSAND_access_token_$_state_machine__29703__auto__);

(statearr_57523[(1)] = (1));

return statearr_57523;
});
var frontend$handler$user$_LT_refresh_id_token_AMPERSAND_access_token_$_state_machine__29703__auto____1 = (function (state_57436){
while(true){
var ret_value__29704__auto__ = (function (){try{while(true){
var result__29705__auto__ = switch__29702__auto__(state_57436);
if(cljs.core.keyword_identical_QMARK_(result__29705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29705__auto__;
}
break;
}
}catch (e57524){var ex__29706__auto__ = e57524;
var statearr_57525_58130 = state_57436;
(statearr_57525_58130[(2)] = ex__29706__auto__);


if(cljs.core.seq((state_57436[(4)]))){
var statearr_57526_58131 = state_57436;
(statearr_57526_58131[(1)] = cljs.core.first((state_57436[(4)])));

} else {
throw ex__29706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58132 = state_57436;
state_57436 = G__58132;
continue;
} else {
return ret_value__29704__auto__;
}
break;
}
});
frontend$handler$user$_LT_refresh_id_token_AMPERSAND_access_token_$_state_machine__29703__auto__ = function(state_57436){
switch(arguments.length){
case 0:
return frontend$handler$user$_LT_refresh_id_token_AMPERSAND_access_token_$_state_machine__29703__auto____0.call(this);
case 1:
return frontend$handler$user$_LT_refresh_id_token_AMPERSAND_access_token_$_state_machine__29703__auto____1.call(this,state_57436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$user$_LT_refresh_id_token_AMPERSAND_access_token_$_state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$user$_LT_refresh_id_token_AMPERSAND_access_token_$_state_machine__29703__auto____0;
frontend$handler$user$_LT_refresh_id_token_AMPERSAND_access_token_$_state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$user$_LT_refresh_id_token_AMPERSAND_access_token_$_state_machine__29703__auto____1;
return frontend$handler$user$_LT_refresh_id_token_AMPERSAND_access_token_$_state_machine__29703__auto__;
})()
})();
var state__29893__auto__ = (function (){var statearr_57530 = f__29892__auto__();
(statearr_57530[(6)] = c__29891__auto__);

return statearr_57530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29893__auto__);
}));

return c__29891__auto__;
});
/**
 * Refresh id-token&access-token, pull latest repos, returns nil when tokens are not available.
 */
frontend.handler.user.restore_tokens_from_localstorage = (function frontend$handler$user$restore_tokens_from_localstorage(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["restore-tokens-from-localstorage"], 0));

var refresh_token = localStorage.getItem("refresh-token");
var id_token = localStorage.getItem("id-token");
var access_token = localStorage.getItem("access-token");
var refresh_token_present_QMARK_ = ((typeof refresh_token === 'string') && ((!(clojure.string.blank_QMARK_(refresh_token)))));
var _ = ((refresh_token_present_QMARK_)?frontend.state.set_auth_refresh_token(refresh_token):null);
var restored_from_cache_QMARK_ = cljs.core.boolean$(((((refresh_token_present_QMARK_) && (((typeof id_token === 'string') && ((((!(clojure.string.blank_QMARK_(id_token)))) && (((typeof access_token === 'string') && ((!(clojure.string.blank_QMARK_(access_token))))))))))))?(function (){var temp__5825__auto__ = frontend.handler.user.parse_jwt_safe(id_token);
if(cljs.core.truth_(temp__5825__auto__)){
var parsed = temp__5825__auto__;
if(cljs.core.truth_(frontend.handler.user.expired_QMARK_(parsed))){
return null;
} else {
frontend.handler.user.set_tokens_BANG_.cljs$core$IFn$_invoke$arity$3(id_token,access_token,refresh_token);

return true;
}
} else {
return null;
}
})():null));
var should_refresh_QMARK_ = (function (){var and__5140__auto__ = refresh_token_present_QMARK_;
if(and__5140__auto__){
var or__5142__auto__ = (!(restored_from_cache_QMARK_));
if(or__5142__auto__){
return or__5142__auto__;
} else {
var G__57532 = frontend.state.get_auth_id_token();
var G__57532__$1 = (((G__57532 == null))?null:frontend.handler.user.parse_jwt_safe(G__57532));
if((G__57532__$1 == null)){
return null;
} else {
return frontend.handler.user.almost_expired_QMARK_(G__57532__$1);
}
}
} else {
return and__5140__auto__;
}
})();
if(restored_from_cache_QMARK_){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","fetch-info-and-graphs","user/fetch-info-and-graphs",-1029959720)], null));
} else {
}

if(cljs.core.truth_(should_refresh_QMARK_)){
var c__29891__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29892__auto__ = (function (){var switch__29702__auto__ = (function (state_57552){
var state_val_57553 = (state_57552[(1)]);
if((state_val_57553 === (1))){
var inst_57533 = frontend.handler.user._LT_refresh_id_token_AMPERSAND_access_token();
var state_57552__$1 = state_57552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57552__$1,(2),inst_57533);
} else {
if((state_val_57553 === (2))){
var inst_57536 = (state_57552[(7)]);
var inst_57535 = (state_57552[(2)]);
var inst_57536__$1 = (!(restored_from_cache_QMARK_));
var state_57552__$1 = (function (){var statearr_57563 = state_57552;
(statearr_57563[(8)] = inst_57535);

(statearr_57563[(7)] = inst_57536__$1);

return statearr_57563;
})();
if(inst_57536__$1){
var statearr_57564_58139 = state_57552__$1;
(statearr_57564_58139[(1)] = (3));

} else {
var statearr_57565_58141 = state_57552__$1;
(statearr_57565_58141[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57553 === (3))){
var inst_57538 = frontend.handler.user.user_uuid();
var state_57552__$1 = state_57552;
var statearr_57566_58142 = state_57552__$1;
(statearr_57566_58142[(2)] = inst_57538);

(statearr_57566_58142[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57553 === (4))){
var inst_57536 = (state_57552[(7)]);
var state_57552__$1 = state_57552;
var statearr_57567_58144 = state_57552__$1;
(statearr_57567_58144[(2)] = inst_57536);

(statearr_57567_58144[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57553 === (5))){
var inst_57541 = (state_57552[(2)]);
var state_57552__$1 = state_57552;
if(cljs.core.truth_(inst_57541)){
var statearr_57577_58145 = state_57552__$1;
(statearr_57577_58145[(1)] = (6));

} else {
var statearr_57578_58146 = state_57552__$1;
(statearr_57578_58146[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57553 === (6))){
var inst_57544 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57545 = [new cljs.core.Keyword("user","fetch-info-and-graphs","user/fetch-info-and-graphs",-1029959720)];
var inst_57546 = (new cljs.core.PersistentVector(null,1,(5),inst_57544,inst_57545,null));
var inst_57547 = frontend.state.pub_event_BANG_(inst_57546);
var state_57552__$1 = state_57552;
var statearr_57579_58148 = state_57552__$1;
(statearr_57579_58148[(2)] = inst_57547);

(statearr_57579_58148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57553 === (7))){
var state_57552__$1 = state_57552;
var statearr_57580_58149 = state_57552__$1;
(statearr_57580_58149[(2)] = null);

(statearr_57580_58149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57553 === (8))){
var inst_57550 = (state_57552[(2)]);
var state_57552__$1 = state_57552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57552__$1,inst_57550);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var frontend$handler$user$restore_tokens_from_localstorage_$_state_machine__29703__auto__ = null;
var frontend$handler$user$restore_tokens_from_localstorage_$_state_machine__29703__auto____0 = (function (){
var statearr_57581 = [null,null,null,null,null,null,null,null,null];
(statearr_57581[(0)] = frontend$handler$user$restore_tokens_from_localstorage_$_state_machine__29703__auto__);

(statearr_57581[(1)] = (1));

return statearr_57581;
});
var frontend$handler$user$restore_tokens_from_localstorage_$_state_machine__29703__auto____1 = (function (state_57552){
while(true){
var ret_value__29704__auto__ = (function (){try{while(true){
var result__29705__auto__ = switch__29702__auto__(state_57552);
if(cljs.core.keyword_identical_QMARK_(result__29705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29705__auto__;
}
break;
}
}catch (e57582){var ex__29706__auto__ = e57582;
var statearr_57583_58151 = state_57552;
(statearr_57583_58151[(2)] = ex__29706__auto__);


if(cljs.core.seq((state_57552[(4)]))){
var statearr_57585_58153 = state_57552;
(statearr_57585_58153[(1)] = cljs.core.first((state_57552[(4)])));

} else {
throw ex__29706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58154 = state_57552;
state_57552 = G__58154;
continue;
} else {
return ret_value__29704__auto__;
}
break;
}
});
frontend$handler$user$restore_tokens_from_localstorage_$_state_machine__29703__auto__ = function(state_57552){
switch(arguments.length){
case 0:
return frontend$handler$user$restore_tokens_from_localstorage_$_state_machine__29703__auto____0.call(this);
case 1:
return frontend$handler$user$restore_tokens_from_localstorage_$_state_machine__29703__auto____1.call(this,state_57552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$user$restore_tokens_from_localstorage_$_state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$user$restore_tokens_from_localstorage_$_state_machine__29703__auto____0;
frontend$handler$user$restore_tokens_from_localstorage_$_state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$user$restore_tokens_from_localstorage_$_state_machine__29703__auto____1;
return frontend$handler$user$restore_tokens_from_localstorage_$_state_machine__29703__auto__;
})()
})();
var state__29893__auto__ = (function (){var statearr_57586 = f__29892__auto__();
(statearr_57586[(6)] = c__29891__auto__);

return statearr_57586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29893__auto__);
}));

return c__29891__auto__;
} else {
return null;
}
});
frontend.handler.user.login_callback = (function frontend$handler$user$login_callback(session){
frontend.handler.user.set_tokens_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"jwtToken","jwtToken",-2095982914).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idToken","idToken",922710925).cljs$core$IFn$_invoke$arity$1(session)),new cljs.core.Keyword(null,"jwtToken","jwtToken",-2095982914).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"accessToken","accessToken",1833707055).cljs$core$IFn$_invoke$arity$1(session)),new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"refreshToken","refreshToken",-1274875461).cljs$core$IFn$_invoke$arity$1(session)));

frontend.handler.user.auto_fill_refresh_token_from_cognito_BANG_();

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","fetch-info-and-graphs","user/fetch-info-and-graphs",-1029959720)], null));
});
frontend.handler.user.clear_e2ee_password_BANG_ = (function frontend$handler$user$clear_e2ee_password_BANG_(){
if(cljs.core.truth_(cljs.core.deref(frontend.state._STAR_db_worker))){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(frontend.state._LT_invoke_db_worker(new cljs.core.Keyword("thread-api","clear-e2ee-password","thread-api/clear-e2ee-password",-63920619)),(function (error){
console.warn(new cljs.core.Keyword(null,"clear-e2ee-password-failed","clear-e2ee-password-failed",1054915844),error);

return null;
}));
} else {
return null;
}
});
frontend.handler.user.login_with_username_password_e2e = (function frontend$handler$user$login_with_username_password_e2e(username_SINGLEQUOTE_,password,client_id,client_secret){
var text_encoder = (new TextEncoder());
var key = text_encoder.encode(client_secret);
var hasher = (new goog.crypt.Sha256());
var hmacer = (new goog.crypt.Hmac(hasher,key));
var secret_hash = goog.crypt.base64.encodeByteArray(hmacer.getHmac((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(username_SINGLEQUOTE_)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(client_id))));
var payload = new cljs.core.PersistentArrayMap(null, 3, ["AuthParameters",new cljs.core.PersistentArrayMap(null, 3, ["USERNAME",username_SINGLEQUOTE_,"PASSWORD",password,"SECRET_HASH",secret_hash], null),"AuthFlow","USER_PASSWORD_AUTH","ClientId",client_id], null);
var headers = new cljs.core.PersistentArrayMap(null, 2, ["X-Amz-Target","AWSCognitoIdentityProviderService.InitiateAuth","Content-Type","application/x-amz-json-1.1"], null);
var c__29891__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29892__auto__ = (function (){var switch__29702__auto__ = (function (state_57630){
var state_val_57631 = (state_57630[(1)]);
if((state_val_57631 === (1))){
var inst_57589 = [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_57590 = cljs.core.clj__GT_js(payload);
var inst_57591 = JSON.stringify(inst_57590);
var inst_57592 = [headers,inst_57591];
var inst_57593 = cljs.core.PersistentHashMap.fromArrays(inst_57589,inst_57592);
var inst_57594 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(frontend.config.COGNITO_IDP,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_57593], 0));
var state_57630__$1 = state_57630;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57630__$1,(2),inst_57594);
} else {
if((state_val_57631 === (2))){
var inst_57596 = (state_57630[(7)]);
var inst_57596__$1 = (state_57630[(2)]);
var inst_57597 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_57596__$1);
var inst_57598 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_57597);
var state_57630__$1 = (function (){var statearr_57634 = state_57630;
(statearr_57634[(7)] = inst_57596__$1);

return statearr_57634;
})();
if(inst_57598){
var statearr_57635_58159 = state_57630__$1;
(statearr_57635_58159[(1)] = (3));

} else {
var statearr_57636_58160 = state_57630__$1;
(statearr_57636_58160[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57631 === (3))){
var state_57630__$1 = state_57630;
var statearr_57637_58163 = state_57630__$1;
(statearr_57637_58163[(2)] = null);

(statearr_57637_58163[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57631 === (4))){
var inst_57601 = (new Error("Assert failed: (= 200 (:status resp))"));
var inst_57602 = (function(){throw inst_57601})();
var state_57630__$1 = state_57630;
var statearr_57638_58164 = state_57630__$1;
(statearr_57638_58164[(2)] = inst_57602);

(statearr_57638_58164[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57631 === (5))){
var inst_57596 = (state_57630[(7)]);
var inst_57604 = (state_57630[(2)]);
var inst_57605 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_57596);
var inst_57606 = JSON.parse(inst_57605);
var inst_57607 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_57606);
var inst_57608 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57610 = ["AuthenticationResult","AccessToken"];
var inst_57611 = (new cljs.core.PersistentVector(null,2,(5),inst_57608,inst_57610,null));
var inst_57612 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_57607,inst_57611);
var inst_57613 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57614 = ["AuthenticationResult","IdToken"];
var inst_57615 = (new cljs.core.PersistentVector(null,2,(5),inst_57613,inst_57614,null));
var inst_57616 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_57607,inst_57615);
var inst_57617 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57618 = ["AuthenticationResult","RefreshToken"];
var inst_57619 = (new cljs.core.PersistentVector(null,2,(5),inst_57617,inst_57618,null));
var inst_57620 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_57607,inst_57619);
var inst_57621 = frontend.handler.user.set_tokens_BANG_.cljs$core$IFn$_invoke$arity$3(inst_57616,inst_57612,inst_57620);
var inst_57622 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57623 = [new cljs.core.Keyword("user","fetch-info-and-graphs","user/fetch-info-and-graphs",-1029959720)];
var inst_57624 = (new cljs.core.PersistentVector(null,1,(5),inst_57622,inst_57623,null));
var inst_57625 = frontend.state.pub_event_BANG_(inst_57624);
var inst_57626 = [new cljs.core.Keyword(null,"id-token","id-token",-339268306),new cljs.core.Keyword(null,"access-token","access-token",-654201199),new cljs.core.Keyword(null,"refresh-token","refresh-token",-1032003584)];
var inst_57627 = [inst_57616,inst_57612,inst_57620];
var inst_57628 = cljs.core.PersistentHashMap.fromArrays(inst_57626,inst_57627);
var state_57630__$1 = (function (){var statearr_57641 = state_57630;
(statearr_57641[(8)] = inst_57604);

(statearr_57641[(9)] = inst_57621);

(statearr_57641[(10)] = inst_57625);

return statearr_57641;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57630__$1,inst_57628);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$handler$user$login_with_username_password_e2e_$_state_machine__29703__auto__ = null;
var frontend$handler$user$login_with_username_password_e2e_$_state_machine__29703__auto____0 = (function (){
var statearr_57642 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57642[(0)] = frontend$handler$user$login_with_username_password_e2e_$_state_machine__29703__auto__);

(statearr_57642[(1)] = (1));

return statearr_57642;
});
var frontend$handler$user$login_with_username_password_e2e_$_state_machine__29703__auto____1 = (function (state_57630){
while(true){
var ret_value__29704__auto__ = (function (){try{while(true){
var result__29705__auto__ = switch__29702__auto__(state_57630);
if(cljs.core.keyword_identical_QMARK_(result__29705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29705__auto__;
}
break;
}
}catch (e57643){var ex__29706__auto__ = e57643;
var statearr_57644_58170 = state_57630;
(statearr_57644_58170[(2)] = ex__29706__auto__);


if(cljs.core.seq((state_57630[(4)]))){
var statearr_57645_58171 = state_57630;
(statearr_57645_58171[(1)] = cljs.core.first((state_57630[(4)])));

} else {
throw ex__29706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58172 = state_57630;
state_57630 = G__58172;
continue;
} else {
return ret_value__29704__auto__;
}
break;
}
});
frontend$handler$user$login_with_username_password_e2e_$_state_machine__29703__auto__ = function(state_57630){
switch(arguments.length){
case 0:
return frontend$handler$user$login_with_username_password_e2e_$_state_machine__29703__auto____0.call(this);
case 1:
return frontend$handler$user$login_with_username_password_e2e_$_state_machine__29703__auto____1.call(this,state_57630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$user$login_with_username_password_e2e_$_state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$user$login_with_username_password_e2e_$_state_machine__29703__auto____0;
frontend$handler$user$login_with_username_password_e2e_$_state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$user$login_with_username_password_e2e_$_state_machine__29703__auto____1;
return frontend$handler$user$login_with_username_password_e2e_$_state_machine__29703__auto__;
})()
})();
var state__29893__auto__ = (function (){var statearr_57646 = f__29892__auto__();
(statearr_57646[(6)] = c__29891__auto__);

return statearr_57646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29893__auto__);
}));

return c__29891__auto__;
});
goog.exportSymbol('frontend.handler.user.login_with_username_password_e2e', frontend.handler.user.login_with_username_password_e2e);
frontend.handler.user.logout = (function frontend$handler$user$logout(){
frontend.handler.user.clear_e2ee_password_BANG_();

frontend.handler.user.clear_tokens.cljs$core$IFn$_invoke$arity$0();

localStorage.clear();

frontend.state.clear_user_info_BANG_();

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","logout","user/logout",1413770948)], null));

return frontend.state.set_state_BANG_(new cljs.core.Keyword("auth","current-login-user","auth/current-login-user",2127074079),new cljs.core.Keyword(null,"logout","logout",1418564329));
});
frontend.handler.user.upgrade = (function frontend$handler$user$upgrade(){
var base_upgrade_url = "https://logseqdemo.lemonsqueezy.com/checkout/buy/13e194b5-c927-41a8-af58-ed1a36d6000d";
var user_uuid_SINGLEQUOTE_ = frontend.handler.user.user_uuid();
var url = (function (){var G__57650 = base_upgrade_url;
if(cljs.core.truth_(user_uuid_SINGLEQUOTE_)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57650)+"?checkout[custom][user_uuid]="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(user_uuid_SINGLEQUOTE_)));
} else {
return G__57650;
}
})();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ~~~ LEMON: ",url," ~~~ "], 0));

return window.open(url);
});
frontend.handler.user._LT_ensure_id_AMPERSAND_access_token = (function frontend$handler$user$_LT_ensure_id_AMPERSAND_access_token(){
var id_token = frontend.state.get_auth_id_token();
var c__29891__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29892__auto__ = (function (){var switch__29702__auto__ = (function (state_57687){
var state_val_57688 = (state_57687[(1)]);
if((state_val_57688 === (7))){
var inst_57685 = (state_57687[(2)]);
var state_57687__$1 = state_57687;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57687__$1,inst_57685);
} else {
if((state_val_57688 === (1))){
var inst_57651 = (state_57687[(7)]);
var inst_57651__$1 = (id_token == null);
var state_57687__$1 = (function (){var statearr_57689 = state_57687;
(statearr_57689[(7)] = inst_57651__$1);

return statearr_57689;
})();
if(cljs.core.truth_(inst_57651__$1)){
var statearr_57690_58177 = state_57687__$1;
(statearr_57690_58177[(1)] = (2));

} else {
var statearr_57691_58182 = state_57687__$1;
(statearr_57691_58182[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (4))){
var inst_57657 = (state_57687[(2)]);
var state_57687__$1 = state_57687;
if(cljs.core.truth_(inst_57657)){
var statearr_57693_58183 = state_57687__$1;
(statearr_57693_58183[(1)] = (5));

} else {
var statearr_57694_58184 = state_57687__$1;
(statearr_57694_58184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (13))){
var state_57687__$1 = state_57687;
var statearr_57695_58188 = state_57687__$1;
(statearr_57695_58188[(2)] = null);

(statearr_57695_58188[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (6))){
var state_57687__$1 = state_57687;
var statearr_57697_58189 = state_57687__$1;
(statearr_57697_58189[(2)] = null);

(statearr_57697_58189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (3))){
var inst_57654 = frontend.handler.user.parse_jwt(id_token);
var inst_57655 = frontend.handler.user.almost_expired_or_expired_QMARK_(inst_57654);
var state_57687__$1 = state_57687;
var statearr_57698_58193 = state_57687__$1;
(statearr_57698_58193[(2)] = inst_57655);

(statearr_57698_58193[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (12))){
var inst_57676 = [new cljs.core.Keyword(null,"anom","anom",230108965)];
var inst_57677 = [new cljs.core.Keyword(null,"expired-token","expired-token",-311690611)];
var inst_57678 = cljs.core.PersistentHashMap.fromArrays(inst_57676,inst_57677);
var inst_57679 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("empty or expired token and refresh failed",inst_57678);
var state_57687__$1 = state_57687;
var statearr_57700_58197 = state_57687__$1;
(statearr_57700_58197[(2)] = inst_57679);

(statearr_57700_58197[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (2))){
var inst_57651 = (state_57687[(7)]);
var state_57687__$1 = state_57687;
var statearr_57704_58198 = state_57687__$1;
(statearr_57704_58198[(2)] = inst_57651);

(statearr_57704_58198[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (11))){
var inst_57674 = (state_57687[(2)]);
var state_57687__$1 = state_57687;
if(cljs.core.truth_(inst_57674)){
var statearr_57705_58202 = state_57687__$1;
(statearr_57705_58202[(1)] = (12));

} else {
var statearr_57707_58203 = state_57687__$1;
(statearr_57707_58203[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (9))){
var inst_57667 = (state_57687[(8)]);
var state_57687__$1 = state_57687;
var statearr_57709_58204 = state_57687__$1;
(statearr_57709_58204[(2)] = inst_57667);

(statearr_57709_58204[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (5))){
var inst_57659 = cljs_time.core.now();
var inst_57660 = cljs_time.coerce.to_string(inst_57659);
var inst_57661 = (""+"refresh tokens... "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_57660));
var inst_57662 = frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_57661], 0));
var inst_57663 = frontend.handler.user._LT_refresh_id_token_AMPERSAND_access_token();
var state_57687__$1 = (function (){var statearr_57712 = state_57687;
(statearr_57712[(9)] = inst_57662);

return statearr_57712;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57687__$1,(8),inst_57663);
} else {
if((state_val_57688 === (14))){
var inst_57682 = (state_57687[(2)]);
var state_57687__$1 = state_57687;
var statearr_57713_58205 = state_57687__$1;
(statearr_57713_58205[(2)] = inst_57682);

(statearr_57713_58205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (10))){
var inst_57670 = frontend.state.get_auth_id_token();
var inst_57671 = frontend.handler.user.parse_jwt(inst_57670);
var inst_57672 = frontend.handler.user.expired_QMARK_(inst_57671);
var state_57687__$1 = state_57687;
var statearr_57715_58206 = state_57687__$1;
(statearr_57715_58206[(2)] = inst_57672);

(statearr_57715_58206[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (8))){
var inst_57667 = (state_57687[(8)]);
var inst_57665 = (state_57687[(2)]);
var inst_57666 = frontend.state.get_auth_id_token();
var inst_57667__$1 = (inst_57666 == null);
var state_57687__$1 = (function (){var statearr_57719 = state_57687;
(statearr_57719[(10)] = inst_57665);

(statearr_57719[(8)] = inst_57667__$1);

return statearr_57719;
})();
if(cljs.core.truth_(inst_57667__$1)){
var statearr_57733_58207 = state_57687__$1;
(statearr_57733_58207[(1)] = (9));

} else {
var statearr_57734_58208 = state_57687__$1;
(statearr_57734_58208[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
});
return (function() {
var frontend$handler$user$_LT_ensure_id_AMPERSAND_access_token_$_state_machine__29703__auto__ = null;
var frontend$handler$user$_LT_ensure_id_AMPERSAND_access_token_$_state_machine__29703__auto____0 = (function (){
var statearr_57737 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57737[(0)] = frontend$handler$user$_LT_ensure_id_AMPERSAND_access_token_$_state_machine__29703__auto__);

(statearr_57737[(1)] = (1));

return statearr_57737;
});
var frontend$handler$user$_LT_ensure_id_AMPERSAND_access_token_$_state_machine__29703__auto____1 = (function (state_57687){
while(true){
var ret_value__29704__auto__ = (function (){try{while(true){
var result__29705__auto__ = switch__29702__auto__(state_57687);
if(cljs.core.keyword_identical_QMARK_(result__29705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29705__auto__;
}
break;
}
}catch (e57739){var ex__29706__auto__ = e57739;
var statearr_57740_58209 = state_57687;
(statearr_57740_58209[(2)] = ex__29706__auto__);


if(cljs.core.seq((state_57687[(4)]))){
var statearr_57741_58210 = state_57687;
(statearr_57741_58210[(1)] = cljs.core.first((state_57687[(4)])));

} else {
throw ex__29706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58211 = state_57687;
state_57687 = G__58211;
continue;
} else {
return ret_value__29704__auto__;
}
break;
}
});
frontend$handler$user$_LT_ensure_id_AMPERSAND_access_token_$_state_machine__29703__auto__ = function(state_57687){
switch(arguments.length){
case 0:
return frontend$handler$user$_LT_ensure_id_AMPERSAND_access_token_$_state_machine__29703__auto____0.call(this);
case 1:
return frontend$handler$user$_LT_ensure_id_AMPERSAND_access_token_$_state_machine__29703__auto____1.call(this,state_57687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$user$_LT_ensure_id_AMPERSAND_access_token_$_state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$user$_LT_ensure_id_AMPERSAND_access_token_$_state_machine__29703__auto____0;
frontend$handler$user$_LT_ensure_id_AMPERSAND_access_token_$_state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$user$_LT_ensure_id_AMPERSAND_access_token_$_state_machine__29703__auto____1;
return frontend$handler$user$_LT_ensure_id_AMPERSAND_access_token_$_state_machine__29703__auto__;
})()
})();
var state__29893__auto__ = (function (){var statearr_57744 = f__29892__auto__();
(statearr_57744[(6)] = c__29891__auto__);

return statearr_57744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29893__auto__);
}));

return c__29891__auto__;
});
frontend.handler.user._LT_ensure_id_AMPERSAND_access_token_BANG_ = (function frontend$handler$user$_LT_ensure_id_AMPERSAND_access_token_BANG_(){
var id_token = frontend.state.get_auth_id_token();
if(cljs.core.truth_((function (){var or__5142__auto__ = (id_token == null);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return frontend.handler.user.almost_expired_or_expired_QMARK_(frontend.handler.user.parse_jwt(id_token));
}
})())){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.user._LT_refresh_id_token_AMPERSAND_access_token()),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"refresh tokens... "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.coerce.to_string(cljs_time.core.now())))], 0))),(function (___27434__auto__){
return promesa.protocols._promise((cljs.core.truth_((function (){var or__5142__auto__ = (frontend.state.get_auth_id_token() == null);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return frontend.handler.user.expired_QMARK_(frontend.handler.user.parse_jwt(frontend.state.get_auth_id_token()));
}
})())?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("empty or expired token and refresh failed",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expired-token","expired-token",-311690611)], null))})():null));
}));
}));
}));
} else {
return promesa.core.resolved(null);
}
});
frontend.common.thread_api._STAR_thread_apis.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.common.thread_api._STAR_thread_apis.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.Keyword("thread-api","ensure-id&access-token","thread-api/ensure-id&access-token",2033470828),(function frontend$handler$user$thread_api__ensure_id_AMPERSAND_access_token(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.user._LT_ensure_id_AMPERSAND_access_token_BANG_()),(function (_){
return promesa.protocols._promise(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id-token","id-token",-339268306),frontend.state.get_auth_id_token()], null));
}));
}));
})));
frontend.handler.user.rtc_group_QMARK_ = (function frontend$handler$user$rtc_group_QMARK_(){
return cljs.core.boolean$((function (){var or__5142__auto__ = frontend.config.dev_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (((!((frontend.config.get_custom_sync_server_url() == null)))) || (cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(frontend.state.user_groups(),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["team",null,"rtc_2025_07_10",null], null), null)))));
}
})());
});
frontend.handler.user.alpha_user_QMARK_ = (function frontend$handler$user$alpha_user_QMARK_(){
var or__5142__auto__ = frontend.config.dev_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.contains_QMARK_(frontend.state.user_groups(),"alpha-tester");
}
});
frontend.handler.user.beta_user_QMARK_ = (function frontend$handler$user$beta_user_QMARK_(){
var or__5142__auto__ = frontend.config.dev_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.contains_QMARK_(frontend.state.user_groups(),"beta-tester");
}
});
frontend.handler.user.alpha_or_beta_user_QMARK_ = (function frontend$handler$user$alpha_or_beta_user_QMARK_(){
var or__5142__auto__ = frontend.handler.user.alpha_user_QMARK_();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.handler.user.beta_user_QMARK_();
}
});
frontend.handler.user.get_user_type = (function frontend$handler$user$get_user_type(repo){
return new cljs.core.Keyword(null,"graph<->user-user-type","graph<->user-user-type",1524958981).cljs$core$IFn$_invoke$arity$1(cljs.core.some((function (p1__57770_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__57770_SHARP_))){
return p1__57770_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword("rtc","graphs","rtc/graphs",-1584628267).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0())));
});
frontend.handler.user.manager_QMARK_ = (function frontend$handler$user$manager_QMARK_(repo){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.handler.user.get_user_type(repo),"manager");
});
frontend.handler.user._LT_upload_user_avatar = (function frontend$handler$user$_LT_upload_user_avatar(avatar_str){
var temp__5825__auto__ = frontend.state.get_auth_id_token();
if(cljs.core.truth_(temp__5825__auto__)){
var token = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((""+"https://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.API_DOMAIN)+"/logseq/get_presigned_user_avatar_put_url"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191),token,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null)], 0))),(function (p__57776){
var map__57777 = p__57776;
var map__57777__$1 = cljs.core.__destructure_map(map__57777);
var resp = map__57777__$1;
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57777__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57777__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_((cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1(status) : cljs_http.client.unexceptional_status_QMARK_.call(null,status)))?null:(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to get presigned url",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"resp","resp",1418702376),resp], null))})())),(function (___27434__auto__){
return promesa.protocols._promise((function (){var presigned_url = new cljs.core.Keyword(null,"presigned-url","presigned-url",90607137).cljs$core$IFn$_invoke$arity$1(body);
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(presigned_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),avatar_str,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null)], 0))),(function (p__57778){
var map__57779 = p__57778;
var map__57779__$1 = cljs.core.__destructure_map(map__57779);
var status__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57779__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return promesa.protocols._promise((cljs.core.truth_((cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1(status__$1) : cljs_http.client.unexceptional_status_QMARK_.call(null,status__$1)))?null:(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to upload avatar",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"resp","resp",1418702376),resp], null))})()));
}));
}));
})());
}));
}));
}));
} else {
return null;
}
});
frontend.handler.user.guard_ex = (function frontend$handler$user$guard_ex(x){
if((x instanceof cljs.core.ExceptionInfo)){
return x;
} else {
return null;
}
});
frontend.handler.user.get_json_body = (function frontend$handler$user$get_json_body(body){
var or__5142__auto__ = (function (){var and__5140__auto__ = (!(typeof body === 'string'));
if(and__5140__auto__){
return body;
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = ((clojure.string.blank_QMARK_(body))?null:null);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(body),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}catch (e57780){var e = e57780;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"invalid-json","invalid-json",-1354287788),body], 0));

return e;
}}
}
});
frontend.handler.user.get_resp_json_body = (function frontend$handler$user$get_resp_json_body(resp){
return frontend.handler.user.get_json_body(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(resp));
});
frontend.handler.user._LT_request_once = (function frontend$handler$user$_LT_request_once(api_name,body,token){
var c__29891__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29892__auto__ = (function (){var switch__29702__auto__ = (function (state_57801){
var state_val_57802 = (state_57801[(1)]);
if((state_val_57802 === (1))){
var inst_57788 = (""+"https://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.API_DOMAIN)+"/file-sync/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(api_name));
var inst_57789 = [new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_57790 = cljs.core.clj__GT_js(body);
var inst_57791 = JSON.stringify(inst_57790);
var inst_57792 = [token,inst_57791,false];
var inst_57793 = cljs.core.PersistentHashMap.fromArrays(inst_57789,inst_57792);
var inst_57794 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_57788,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_57793], 0));
var inst_57795 = [new cljs.core.Keyword(null,"resp","resp",1418702376),new cljs.core.Keyword(null,"api-name","api-name",1420570992),new cljs.core.Keyword(null,"body","body",-2049205669)];
var state_57801__$1 = (function (){var statearr_57804 = state_57801;
(statearr_57804[(7)] = inst_57795);

return statearr_57804;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57801__$1,(2),inst_57794);
} else {
if((state_val_57802 === (2))){
var inst_57795 = (state_57801[(7)]);
var inst_57797 = (state_57801[(2)]);
var inst_57798 = [inst_57797,api_name,body];
var inst_57799 = cljs.core.PersistentHashMap.fromArrays(inst_57795,inst_57798);
var state_57801__$1 = state_57801;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57801__$1,inst_57799);
} else {
return null;
}
}
});
return (function() {
var frontend$handler$user$_LT_request_once_$_state_machine__29703__auto__ = null;
var frontend$handler$user$_LT_request_once_$_state_machine__29703__auto____0 = (function (){
var statearr_57806 = [null,null,null,null,null,null,null,null];
(statearr_57806[(0)] = frontend$handler$user$_LT_request_once_$_state_machine__29703__auto__);

(statearr_57806[(1)] = (1));

return statearr_57806;
});
var frontend$handler$user$_LT_request_once_$_state_machine__29703__auto____1 = (function (state_57801){
while(true){
var ret_value__29704__auto__ = (function (){try{while(true){
var result__29705__auto__ = switch__29702__auto__(state_57801);
if(cljs.core.keyword_identical_QMARK_(result__29705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29705__auto__;
}
break;
}
}catch (e57807){var ex__29706__auto__ = e57807;
var statearr_57808_58212 = state_57801;
(statearr_57808_58212[(2)] = ex__29706__auto__);


if(cljs.core.seq((state_57801[(4)]))){
var statearr_57809_58213 = state_57801;
(statearr_57809_58213[(1)] = cljs.core.first((state_57801[(4)])));

} else {
throw ex__29706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58214 = state_57801;
state_57801 = G__58214;
continue;
} else {
return ret_value__29704__auto__;
}
break;
}
});
frontend$handler$user$_LT_request_once_$_state_machine__29703__auto__ = function(state_57801){
switch(arguments.length){
case 0:
return frontend$handler$user$_LT_request_once_$_state_machine__29703__auto____0.call(this);
case 1:
return frontend$handler$user$_LT_request_once_$_state_machine__29703__auto____1.call(this,state_57801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$user$_LT_request_once_$_state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$user$_LT_request_once_$_state_machine__29703__auto____0;
frontend$handler$user$_LT_request_once_$_state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$user$_LT_request_once_$_state_machine__29703__auto____1;
return frontend$handler$user$_LT_request_once_$_state_machine__29703__auto__;
})()
})();
var state__29893__auto__ = (function (){var statearr_57810 = f__29892__auto__();
(statearr_57810[(6)] = c__29891__auto__);

return statearr_57810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29893__auto__);
}));

return c__29891__auto__;
});
/**
 * max retry count is 5.
 *   *stop: volatile var, stop retry-request when it's true,
 *        and return :stop
 */
frontend.handler.user._LT_request_STAR_ = (function frontend$handler$user$_LT_request_STAR_(var_args){
var G__57812 = arguments.length;
switch (G__57812) {
case 3:
return frontend.handler.user._LT_request_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return frontend.handler.user._LT_request_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.user._LT_request_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (api_name,body,token){
return frontend.handler.user._LT_request_STAR_.cljs$core$IFn$_invoke$arity$4(api_name,body,token,(0));
}));

(frontend.handler.user._LT_request_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (api_name,body,token,retry_count){
var c__29891__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29892__auto__ = (function (){var switch__29702__auto__ = (function (state_57857){
var state_val_57858 = (state_57857[(1)]);
if((state_val_57858 === (7))){
var inst_57815 = (state_57857[(7)]);
var inst_57853 = new cljs.core.Keyword(null,"resp","resp",1418702376).cljs$core$IFn$_invoke$arity$1(inst_57815);
var state_57857__$1 = state_57857;
var statearr_57861_58228 = state_57857__$1;
(statearr_57861_58228[(2)] = inst_57853);

(statearr_57861_58228[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57858 === (1))){
var inst_57813 = frontend.handler.user._LT_request_once(api_name,body,token);
var state_57857__$1 = state_57857;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57857__$1,(2),inst_57813);
} else {
if((state_val_57858 === (4))){
var inst_57820 = (state_57857[(8)]);
var state_57857__$1 = state_57857;
var statearr_57862_58229 = state_57857__$1;
(statearr_57862_58229[(2)] = inst_57820);

(statearr_57862_58229[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57858 === (13))){
var inst_57849 = (state_57857[(2)]);
var state_57857__$1 = state_57857;
var statearr_57863_58230 = state_57857__$1;
(statearr_57863_58230[(2)] = inst_57849);

(statearr_57863_58230[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57858 === (6))){
var inst_57833 = (retry_count > (5));
var state_57857__$1 = state_57857;
if(cljs.core.truth_(inst_57833)){
var statearr_57865_58231 = state_57857__$1;
(statearr_57865_58231[(1)] = (9));

} else {
var statearr_57867_58232 = state_57857__$1;
(statearr_57867_58232[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57858 === (3))){
var inst_57815 = (state_57857[(7)]);
var inst_57822 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57823 = [new cljs.core.Keyword(null,"resp","resp",1418702376),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_57824 = (new cljs.core.PersistentVector(null,2,(5),inst_57822,inst_57823,null));
var inst_57825 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_57815,inst_57824);
var inst_57826 = frontend.handler.user.get_json_body(inst_57825);
var inst_57827 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_57826);
var inst_57828 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Unauthorized",inst_57827);
var state_57857__$1 = state_57857;
var statearr_57868_58233 = state_57857__$1;
(statearr_57868_58233[(2)] = inst_57828);

(statearr_57868_58233[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57858 === (12))){
var inst_57845 = (state_57857[(2)]);
var inst_57846 = (retry_count + (1));
var inst_57847 = frontend.handler.user._LT_request_STAR_.cljs$core$IFn$_invoke$arity$4(api_name,body,token,inst_57846);
var state_57857__$1 = (function (){var statearr_57869 = state_57857;
(statearr_57869[(9)] = inst_57845);

return statearr_57869;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57857__$1,(13),inst_57847);
} else {
if((state_val_57858 === (2))){
var inst_57815 = (state_57857[(7)]);
var inst_57820 = (state_57857[(8)]);
var inst_57815__$1 = (state_57857[(2)]);
var inst_57816 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57817 = [new cljs.core.Keyword(null,"resp","resp",1418702376),new cljs.core.Keyword(null,"status","status",-1997798413)];
var inst_57818 = (new cljs.core.PersistentVector(null,2,(5),inst_57816,inst_57817,null));
var inst_57819 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_57815__$1,inst_57818);
var inst_57820__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((401),inst_57819);
var state_57857__$1 = (function (){var statearr_57870 = state_57857;
(statearr_57870[(7)] = inst_57815__$1);

(statearr_57870[(8)] = inst_57820__$1);

return statearr_57870;
})();
if(inst_57820__$1){
var statearr_57871_58234 = state_57857__$1;
(statearr_57871_58234[(1)] = (3));

} else {
var statearr_57872_58235 = state_57857__$1;
(statearr_57872_58235[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57858 === (11))){
var inst_57851 = (state_57857[(2)]);
var state_57857__$1 = state_57857;
var statearr_57873_58236 = state_57857__$1;
(statearr_57873_58236[(2)] = inst_57851);

(statearr_57873_58236[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57858 === (9))){
var inst_57835 = (new Error(new cljs.core.Keyword(null,"file-sync-request","file-sync-request",-1333382633)));
var inst_57836 = (function(){throw inst_57835})();
var state_57857__$1 = state_57857;
var statearr_57874_58237 = state_57857__$1;
(statearr_57874_58237[(2)] = inst_57836);

(statearr_57874_58237[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57858 === (5))){
var inst_57831 = (state_57857[(2)]);
var state_57857__$1 = state_57857;
if(cljs.core.truth_(inst_57831)){
var statearr_57875_58238 = state_57857__$1;
(statearr_57875_58238[(1)] = (6));

} else {
var statearr_57876_58239 = state_57857__$1;
(statearr_57876_58239[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57858 === (10))){
var inst_57838 = ((1000) * retry_count);
var inst_57839 = cljs.core.min.cljs$core$IFn$_invoke$arity$2((60000),inst_57838);
var inst_57840 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["will retry after",inst_57839,"ms"], 0));
var inst_57841 = ((1000) * retry_count);
var inst_57842 = cljs.core.min.cljs$core$IFn$_invoke$arity$2((60000),inst_57841);
var inst_57843 = cljs.core.async.timeout(inst_57842);
var state_57857__$1 = (function (){var statearr_57881 = state_57857;
(statearr_57881[(10)] = inst_57840);

return statearr_57881;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57857__$1,(12),inst_57843);
} else {
if((state_val_57858 === (8))){
var inst_57855 = (state_57857[(2)]);
var state_57857__$1 = state_57857;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57857__$1,inst_57855);
} else {
return null;
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
}
}
}
});
return (function() {
var frontend$handler$user$state_machine__29703__auto__ = null;
var frontend$handler$user$state_machine__29703__auto____0 = (function (){
var statearr_57882 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57882[(0)] = frontend$handler$user$state_machine__29703__auto__);

(statearr_57882[(1)] = (1));

return statearr_57882;
});
var frontend$handler$user$state_machine__29703__auto____1 = (function (state_57857){
while(true){
var ret_value__29704__auto__ = (function (){try{while(true){
var result__29705__auto__ = switch__29702__auto__(state_57857);
if(cljs.core.keyword_identical_QMARK_(result__29705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29705__auto__;
}
break;
}
}catch (e57883){var ex__29706__auto__ = e57883;
var statearr_57884_58241 = state_57857;
(statearr_57884_58241[(2)] = ex__29706__auto__);


if(cljs.core.seq((state_57857[(4)]))){
var statearr_57885_58243 = state_57857;
(statearr_57885_58243[(1)] = cljs.core.first((state_57857[(4)])));

} else {
throw ex__29706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58244 = state_57857;
state_57857 = G__58244;
continue;
} else {
return ret_value__29704__auto__;
}
break;
}
});
frontend$handler$user$state_machine__29703__auto__ = function(state_57857){
switch(arguments.length){
case 0:
return frontend$handler$user$state_machine__29703__auto____0.call(this);
case 1:
return frontend$handler$user$state_machine__29703__auto____1.call(this,state_57857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$user$state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$user$state_machine__29703__auto____0;
frontend$handler$user$state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$user$state_machine__29703__auto____1;
return frontend$handler$user$state_machine__29703__auto__;
})()
})();
var state__29893__auto__ = (function (){var statearr_57886 = f__29892__auto__();
(statearr_57886[(6)] = c__29891__auto__);

return statearr_57886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29893__auto__);
}));

return c__29891__auto__;
}));

(frontend.handler.user._LT_request_STAR_.cljs$lang$maxFixedArity = 4);

frontend.handler.user._LT_request = (function frontend$handler$user$_LT_request(var_args){
var args__5882__auto__ = [];
var len__5876__auto___58250 = arguments.length;
var i__5877__auto___58254 = (0);
while(true){
if((i__5877__auto___58254 < len__5876__auto___58250)){
args__5882__auto__.push((arguments[i__5877__auto___58254]));

var G__58255 = (i__5877__auto___58254 + (1));
i__5877__auto___58254 = G__58255;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.handler.user._LT_request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.handler.user._LT_request.cljs$core$IFn$_invoke$arity$variadic = (function (api_name,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(frontend.handler.user._LT_request_STAR_,api_name,args);
}));

(frontend.handler.user._LT_request.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.handler.user._LT_request.cljs$lang$applyTo = (function (seq57887){
var G__57888 = cljs.core.first(seq57887);
var seq57887__$1 = cljs.core.next(seq57887);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57888,seq57887__$1);
}));

frontend.handler.user.storage_exceed_limit_QMARK_ = (function frontend$handler$user$storage_exceed_limit_QMARK_(exp){
var G__57889 = cljs.core.ex_data(exp);
var G__57889__$1 = (((G__57889 == null))?null:new cljs.core.Keyword(null,"err","err",-2089457205).cljs$core$IFn$_invoke$arity$1(G__57889));
var G__57889__$2 = (((G__57889__$1 == null))?null:cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"body","body",-2049205669)))(G__57889__$1));
if((G__57889__$2 == null)){
return null;
} else {
return (function (p__57894){
var vec__57895 = p__57894;
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57895,(0),null);
var msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57895,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((403),status)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(msg,"storage-limit")));
})(G__57889__$2);
}
});
frontend.handler.user.graph_count_exceed_limit_QMARK_ = (function frontend$handler$user$graph_count_exceed_limit_QMARK_(exp){
var G__57898 = cljs.core.ex_data(exp);
var G__57898__$1 = (((G__57898 == null))?null:new cljs.core.Keyword(null,"err","err",-2089457205).cljs$core$IFn$_invoke$arity$1(G__57898));
var G__57898__$2 = (((G__57898__$1 == null))?null:cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"body","body",-2049205669)))(G__57898__$1));
if((G__57898__$2 == null)){
return null;
} else {
return (function (p__57903){
var vec__57904 = p__57903;
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57904,(0),null);
var msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57904,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((403),status)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(msg,"graph-count-exceed-limit")));
})(G__57898__$2);
}
});
frontend.handler.user.fire_file_sync_storage_exceed_limit_event_BANG_ = (function frontend$handler$user$fire_file_sync_storage_exceed_limit_event_BANG_(exp){
if(cljs.core.truth_(frontend.handler.user.storage_exceed_limit_QMARK_(exp))){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rtc","storage-exceed-limit","rtc/storage-exceed-limit",757157830)], null));

return true;
} else {
return null;
}
});
frontend.handler.user.fire_file_sync_graph_count_exceed_limit_event_BANG_ = (function frontend$handler$user$fire_file_sync_graph_count_exceed_limit_event_BANG_(exp){
if(cljs.core.truth_(frontend.handler.user.graph_count_exceed_limit_QMARK_(exp))){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rtc","graph-count-exceed-limit","rtc/graph-count-exceed-limit",1010066001)], null));

return true;
} else {
return null;
}
});

/**
 * @interface
 */
frontend.handler.user.IToken = function(){};

var frontend$handler$user$IToken$_LT_get_token$dyn_58260 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (frontend.handler.user._LT_get_token[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (frontend.handler.user._LT_get_token["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IToken.<get-token",this$);
}
}
});
frontend.handler.user._LT_get_token = (function frontend$handler$user$_LT_get_token(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$handler$user$IToken$_LT_get_token$arity$1 == null)))))){
return this$.frontend$handler$user$IToken$_LT_get_token$arity$1(this$);
} else {
return frontend$handler$user$IToken$_LT_get_token$dyn_58260(this$);
}
});


/**
* @constructor
 * @implements {frontend.handler.user.IToken}
*/
frontend.handler.user.RemoteAPI = (function (_STAR_stopped_QMARK_){
this._STAR_stopped_QMARK_ = _STAR_stopped_QMARK_;
});
(frontend.handler.user.RemoteAPI.prototype._LT_request = (function (api_name,body){
var self__ = this;
var this$ = this;
var c__29891__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29892__auto__ = (function (){var switch__29702__auto__ = (function (state_57941){
var state_val_57942 = (state_57941[(1)]);
if((state_val_57942 === (7))){
var inst_57923 = (state_57941[(7)]);
var inst_57927 = frontend.handler.user.get_resp_json_body(inst_57923);
var state_57941__$1 = state_57941;
var statearr_57943_58261 = state_57941__$1;
(statearr_57943_58261[(2)] = inst_57927);

(statearr_57943_58261[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57942 === (1))){
var inst_57915 = this$.frontend$handler$user$IToken$_LT_get_token$arity$1(null);
var state_57941__$1 = state_57941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57941__$1,(2),inst_57915);
} else {
if((state_val_57942 === (4))){
var inst_57917 = (state_57941[(8)]);
var inst_57921 = frontend.handler.user._LT_request.cljs$core$IFn$_invoke$arity$variadic(api_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,inst_57917,self__._STAR_stopped_QMARK_], 0));
var state_57941__$1 = state_57941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57941__$1,(6),inst_57921);
} else {
if((state_val_57942 === (6))){
var inst_57923 = (state_57941[(7)]);
var inst_57923__$1 = (state_57941[(2)]);
var inst_57924 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_57923__$1);
var inst_57925 = (cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_57924) : cljs_http.client.unexceptional_status_QMARK_.call(null,inst_57924));
var state_57941__$1 = (function (){var statearr_57944 = state_57941;
(statearr_57944[(7)] = inst_57923__$1);

return statearr_57944;
})();
if(cljs.core.truth_(inst_57925)){
var statearr_57945_58265 = state_57941__$1;
(statearr_57945_58265[(1)] = (7));

} else {
var statearr_57946_58266 = state_57941__$1;
(statearr_57946_58266[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57942 === (3))){
var inst_57918 = (state_57941[(9)]);
var state_57941__$1 = state_57941;
var statearr_57947_58267 = state_57941__$1;
(statearr_57947_58267[(2)] = inst_57918);

(statearr_57947_58267[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57942 === (2))){
var inst_57917 = (state_57941[(8)]);
var inst_57918 = (state_57941[(9)]);
var inst_57917__$1 = (state_57941[(2)]);
var inst_57918__$1 = frontend.handler.user.guard_ex(inst_57917__$1);
var state_57941__$1 = (function (){var statearr_57948 = state_57941;
(statearr_57948[(8)] = inst_57917__$1);

(statearr_57948[(9)] = inst_57918__$1);

return statearr_57948;
})();
if(cljs.core.truth_(inst_57918__$1)){
var statearr_57949_58268 = state_57941__$1;
(statearr_57949_58268[(1)] = (3));

} else {
var statearr_57950_58269 = state_57941__$1;
(statearr_57950_58269[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57942 === (9))){
var inst_57937 = (state_57941[(2)]);
var state_57941__$1 = state_57941;
var statearr_57951_58270 = state_57941__$1;
(statearr_57951_58270[(2)] = inst_57937);

(statearr_57951_58270[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57942 === (5))){
var inst_57939 = (state_57941[(2)]);
var state_57941__$1 = state_57941;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57941__$1,inst_57939);
} else {
if((state_val_57942 === (8))){
var inst_57923 = (state_57941[(7)]);
var inst_57929 = [new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"api-name","api-name",1420570992),new cljs.core.Keyword(null,"request-body","request-body",2078760337)];
var inst_57930 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_57923);
var inst_57931 = [inst_57923,inst_57930,api_name,body];
var inst_57932 = cljs.core.PersistentHashMap.fromArrays(inst_57929,inst_57931);
var inst_57933 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("request failed",inst_57932);
var inst_57934 = frontend.handler.user.fire_file_sync_storage_exceed_limit_event_BANG_(inst_57933);
var inst_57935 = frontend.handler.user.fire_file_sync_graph_count_exceed_limit_event_BANG_(inst_57933);
var state_57941__$1 = (function (){var statearr_57952 = state_57941;
(statearr_57952[(10)] = inst_57934);

(statearr_57952[(11)] = inst_57935);

return statearr_57952;
})();
var statearr_57953_58271 = state_57941__$1;
(statearr_57953_58271[(2)] = inst_57933);

(statearr_57953_58271[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var frontend$handler$user$state_machine__29703__auto__ = null;
var frontend$handler$user$state_machine__29703__auto____0 = (function (){
var statearr_57954 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57954[(0)] = frontend$handler$user$state_machine__29703__auto__);

(statearr_57954[(1)] = (1));

return statearr_57954;
});
var frontend$handler$user$state_machine__29703__auto____1 = (function (state_57941){
while(true){
var ret_value__29704__auto__ = (function (){try{while(true){
var result__29705__auto__ = switch__29702__auto__(state_57941);
if(cljs.core.keyword_identical_QMARK_(result__29705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29705__auto__;
}
break;
}
}catch (e57955){var ex__29706__auto__ = e57955;
var statearr_57956_58275 = state_57941;
(statearr_57956_58275[(2)] = ex__29706__auto__);


if(cljs.core.seq((state_57941[(4)]))){
var statearr_57957_58276 = state_57941;
(statearr_57957_58276[(1)] = cljs.core.first((state_57941[(4)])));

} else {
throw ex__29706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58277 = state_57941;
state_57941 = G__58277;
continue;
} else {
return ret_value__29704__auto__;
}
break;
}
});
frontend$handler$user$state_machine__29703__auto__ = function(state_57941){
switch(arguments.length){
case 0:
return frontend$handler$user$state_machine__29703__auto____0.call(this);
case 1:
return frontend$handler$user$state_machine__29703__auto____1.call(this,state_57941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$user$state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$user$state_machine__29703__auto____0;
frontend$handler$user$state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$user$state_machine__29703__auto____1;
return frontend$handler$user$state_machine__29703__auto__;
})()
})();
var state__29893__auto__ = (function (){var statearr_57958 = f__29892__auto__();
(statearr_57958[(6)] = c__29891__auto__);

return statearr_57958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29893__auto__);
}));

return c__29891__auto__;
}));

(frontend.handler.user.RemoteAPI.prototype.frontend$handler$user$IToken$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.handler.user.RemoteAPI.prototype.frontend$handler$user$IToken$_LT_get_token$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
var c__29891__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29892__auto__ = (function (){var switch__29702__auto__ = (function (state_57969){
var state_val_57970 = (state_57969[(1)]);
if((state_val_57970 === (1))){
var inst_57959 = frontend.handler.user._LT_ensure_id_AMPERSAND_access_token();
var state_57969__$1 = state_57969;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57969__$1,(2),inst_57959);
} else {
if((state_val_57970 === (2))){
var inst_57961 = (state_57969[(7)]);
var inst_57961__$1 = (state_57969[(2)]);
var inst_57962 = (inst_57961__$1 == null);
var state_57969__$1 = (function (){var statearr_57973 = state_57969;
(statearr_57973[(7)] = inst_57961__$1);

return statearr_57973;
})();
if(cljs.core.truth_(inst_57962)){
var statearr_57974_58278 = state_57969__$1;
(statearr_57974_58278[(1)] = (3));

} else {
var statearr_57975_58279 = state_57969__$1;
(statearr_57975_58279[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57970 === (3))){
var inst_57964 = frontend.state.get_auth_id_token();
var state_57969__$1 = state_57969;
var statearr_57978_58280 = state_57969__$1;
(statearr_57978_58280[(2)] = inst_57964);

(statearr_57978_58280[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57970 === (4))){
var inst_57961 = (state_57969[(7)]);
var state_57969__$1 = state_57969;
var statearr_57979_58281 = state_57969__$1;
(statearr_57979_58281[(2)] = inst_57961);

(statearr_57979_58281[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57970 === (5))){
var inst_57967 = (state_57969[(2)]);
var state_57969__$1 = state_57969;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57969__$1,inst_57967);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$handler$user$state_machine__29703__auto__ = null;
var frontend$handler$user$state_machine__29703__auto____0 = (function (){
var statearr_57980 = [null,null,null,null,null,null,null,null];
(statearr_57980[(0)] = frontend$handler$user$state_machine__29703__auto__);

(statearr_57980[(1)] = (1));

return statearr_57980;
});
var frontend$handler$user$state_machine__29703__auto____1 = (function (state_57969){
while(true){
var ret_value__29704__auto__ = (function (){try{while(true){
var result__29705__auto__ = switch__29702__auto__(state_57969);
if(cljs.core.keyword_identical_QMARK_(result__29705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29705__auto__;
}
break;
}
}catch (e57981){var ex__29706__auto__ = e57981;
var statearr_57982_58282 = state_57969;
(statearr_57982_58282[(2)] = ex__29706__auto__);


if(cljs.core.seq((state_57969[(4)]))){
var statearr_57983_58283 = state_57969;
(statearr_57983_58283[(1)] = cljs.core.first((state_57969[(4)])));

} else {
throw ex__29706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58284 = state_57969;
state_57969 = G__58284;
continue;
} else {
return ret_value__29704__auto__;
}
break;
}
});
frontend$handler$user$state_machine__29703__auto__ = function(state_57969){
switch(arguments.length){
case 0:
return frontend$handler$user$state_machine__29703__auto____0.call(this);
case 1:
return frontend$handler$user$state_machine__29703__auto____1.call(this,state_57969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$user$state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$user$state_machine__29703__auto____0;
frontend$handler$user$state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$user$state_machine__29703__auto____1;
return frontend$handler$user$state_machine__29703__auto__;
})()
})();
var state__29893__auto__ = (function (){var statearr_57986 = f__29892__auto__();
(statearr_57986[(6)] = c__29891__auto__);

return statearr_57986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29893__auto__);
}));

return c__29891__auto__;
}));

(frontend.handler.user.RemoteAPI.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*stopped?","*stopped?",1829415181,null)], null);
}));

(frontend.handler.user.RemoteAPI.cljs$lang$type = true);

(frontend.handler.user.RemoteAPI.cljs$lang$ctorStr = "frontend.handler.user/RemoteAPI");

(frontend.handler.user.RemoteAPI.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"frontend.handler.user/RemoteAPI");
}));

/**
 * Positional factory function for frontend.handler.user/RemoteAPI.
 */
frontend.handler.user.__GT_RemoteAPI = (function frontend$handler$user$__GT_RemoteAPI(_STAR_stopped_QMARK_){
return (new frontend.handler.user.RemoteAPI(_STAR_stopped_QMARK_));
});


/**
 * @interface
 */
frontend.handler.user.IRemoteAPI = function(){};

var frontend$handler$user$IRemoteAPI$_LT_user_info$dyn_58285 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (frontend.handler.user._LT_user_info[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (frontend.handler.user._LT_user_info["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRemoteAPI.<user-info",this$);
}
}
});
/**
 * user info
 */
frontend.handler.user._LT_user_info = (function frontend$handler$user$_LT_user_info(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$handler$user$IRemoteAPI$_LT_user_info$arity$1 == null)))))){
return this$.frontend$handler$user$IRemoteAPI$_LT_user_info$arity$1(this$);
} else {
return frontend$handler$user$IRemoteAPI$_LT_user_info$dyn_58285(this$);
}
});

(frontend.handler.user.RemoteAPI.prototype.frontend$handler$user$IRemoteAPI$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.handler.user.RemoteAPI.prototype.frontend$handler$user$IRemoteAPI$_LT_user_info$arity$1 = (function (this$){
var this$__$1 = this;
var c__29891__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29892__auto__ = (function (){var switch__29702__auto__ = (function (state_58004){
var state_val_58005 = (state_58004[(1)]);
if((state_val_58005 === (1))){
var inst_57991 = frontend.handler.user._LT_ensure_id_AMPERSAND_access_token();
var state_58004__$1 = state_58004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58004__$1,(2),inst_57991);
} else {
if((state_val_58005 === (2))){
var inst_57993 = (state_58004[(7)]);
var inst_57993__$1 = (state_58004[(2)]);
var inst_57994 = (inst_57993__$1 == null);
var state_58004__$1 = (function (){var statearr_58007 = state_58004;
(statearr_58007[(7)] = inst_57993__$1);

return statearr_58007;
})();
if(cljs.core.truth_(inst_57994)){
var statearr_58009_58287 = state_58004__$1;
(statearr_58009_58287[(1)] = (3));

} else {
var statearr_58010_58288 = state_58004__$1;
(statearr_58010_58288[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58005 === (3))){
var inst_57996 = cljs.core.PersistentHashMap.EMPTY;
var inst_57997 = this$__$1._LT_request("user_info",inst_57996);
var state_58004__$1 = state_58004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58004__$1,(6),inst_57997);
} else {
if((state_val_58005 === (4))){
var inst_57993 = (state_58004[(7)]);
var state_58004__$1 = state_58004;
var statearr_58014_58289 = state_58004__$1;
(statearr_58014_58289[(2)] = inst_57993);

(statearr_58014_58289[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58005 === (5))){
var inst_58002 = (state_58004[(2)]);
var state_58004__$1 = state_58004;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58004__$1,inst_58002);
} else {
if((state_val_58005 === (6))){
var inst_57999 = (state_58004[(2)]);
var state_58004__$1 = state_58004;
var statearr_58017_58290 = state_58004__$1;
(statearr_58017_58290[(2)] = inst_57999);

(statearr_58017_58290[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});
return (function() {
var frontend$handler$user$state_machine__29703__auto__ = null;
var frontend$handler$user$state_machine__29703__auto____0 = (function (){
var statearr_58018 = [null,null,null,null,null,null,null,null];
(statearr_58018[(0)] = frontend$handler$user$state_machine__29703__auto__);

(statearr_58018[(1)] = (1));

return statearr_58018;
});
var frontend$handler$user$state_machine__29703__auto____1 = (function (state_58004){
while(true){
var ret_value__29704__auto__ = (function (){try{while(true){
var result__29705__auto__ = switch__29702__auto__(state_58004);
if(cljs.core.keyword_identical_QMARK_(result__29705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29705__auto__;
}
break;
}
}catch (e58022){var ex__29706__auto__ = e58022;
var statearr_58024_58291 = state_58004;
(statearr_58024_58291[(2)] = ex__29706__auto__);


if(cljs.core.seq((state_58004[(4)]))){
var statearr_58026_58292 = state_58004;
(statearr_58026_58292[(1)] = cljs.core.first((state_58004[(4)])));

} else {
throw ex__29706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58293 = state_58004;
state_58004 = G__58293;
continue;
} else {
return ret_value__29704__auto__;
}
break;
}
});
frontend$handler$user$state_machine__29703__auto__ = function(state_58004){
switch(arguments.length){
case 0:
return frontend$handler$user$state_machine__29703__auto____0.call(this);
case 1:
return frontend$handler$user$state_machine__29703__auto____1.call(this,state_58004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$user$state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$user$state_machine__29703__auto____0;
frontend$handler$user$state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$user$state_machine__29703__auto____1;
return frontend$handler$user$state_machine__29703__auto__;
})()
})();
var state__29893__auto__ = (function (){var statearr_58028 = f__29892__auto__();
(statearr_58028[(6)] = c__29891__auto__);

return statearr_58028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29893__auto__);
}));

return c__29891__auto__;
}));
frontend.handler.user.remoteapi = frontend.handler.user.__GT_RemoteAPI(null);

//# sourceMappingURL=frontend.handler.user.js.map
