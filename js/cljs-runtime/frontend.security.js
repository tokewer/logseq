goog.provide('frontend.security');
var module$node_modules$dompurify$dist$purify_cjs=shadow.js.require("module$node_modules$dompurify$dist$purify_cjs", {});
frontend.security.sanitizer_instance_QMARK_ = (function frontend$security$sanitizer_instance_QMARK_(value){
return cljs.core.fn_QMARK_((function (){var G__68069 = value;
if((G__68069 == null)){
return null;
} else {
return (G__68069["sanitize"]);
}
})());
});
frontend.security.resolve_dompurify = (function frontend$security$resolve_dompurify(module){
var purify = (function (){var or__5142__auto__ = module.default;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return module;
}
})();
if(frontend.security.sanitizer_instance_QMARK_(purify)){
return purify;
} else {
if(cljs.core.fn_QMARK_(purify)){
var instance = (purify.cljs$core$IFn$_invoke$arity$1 ? purify.cljs$core$IFn$_invoke$arity$1(window) : purify.call(null,window));
if(frontend.security.sanitizer_instance_QMARK_(instance)){
return instance;
} else {
throw (new Error("DOMPurify factory did not return a sanitizer instance"));
}
} else {
throw (new Error("Unsupported DOMPurify module shape"));

}
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.security !== 'undefined') && (typeof frontend.security.dompurify_instance !== 'undefined')){
} else {
frontend.security.dompurify_instance = cljs.core.volatile_BANG_(null);
}
frontend.security.get_dompurify = (function frontend$security$get_dompurify(var_args){
var G__68071 = arguments.length;
switch (G__68071) {
case 0:
return frontend.security.get_dompurify.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return frontend.security.get_dompurify.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.security.get_dompurify.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.security.get_dompurify.cljs$core$IFn$_invoke$arity$2(module$node_modules$dompurify$dist$purify_cjs,frontend.security.dompurify_instance);
}));

(frontend.security.get_dompurify.cljs$core$IFn$_invoke$arity$2 = (function (module,cache){
var or__5142__auto__ = cljs.core.deref(cache);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var instance = frontend.security.resolve_dompurify(module);
cljs.core.vreset_BANG_(cache,instance);

return instance;
}
}));

(frontend.security.get_dompurify.cljs$lang$maxFixedArity = 2);

frontend.security.sanitization_options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ADD_TAGS","ADD_TAGS",-1262226946),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["iframe"], null),new cljs.core.Keyword(null,"ADD_ATTR","ADD_ATTR",995175892),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["is"], null),new cljs.core.Keyword(null,"ALLOW_UNKNOWN_PROTOCOLS","ALLOW_UNKNOWN_PROTOCOLS",-2099585817),true], null));
frontend.security.sanitize_html = (function frontend$security$sanitize_html(html){
var purify = frontend.security.get_dompurify.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
var root = cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(purify,"sanitize",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([html,Object.assign(({}),frontend.security.sanitization_options,({"RETURN_DOM": true}))], 0));
var seq__68076_68093 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(root.querySelectorAll("iframe[src]")));
var chunk__68077_68094 = null;
var count__68078_68095 = (0);
var i__68079_68096 = (0);
while(true){
if((i__68079_68096 < count__68078_68095)){
var iframe_68097 = chunk__68077_68094.cljs$core$IIndexed$_nth$arity$2(null,i__68079_68096);
var temp__5825__auto___68100 = frontend.handler.assets.local_file_iframe_src__GT_assets_url(iframe_68097.getAttribute("src"));
if(cljs.core.truth_(temp__5825__auto___68100)){
var src_68101 = temp__5825__auto___68100;
iframe_68097.setAttribute("src",src_68101);
} else {
}


var G__68102 = seq__68076_68093;
var G__68103 = chunk__68077_68094;
var G__68104 = count__68078_68095;
var G__68105 = (i__68079_68096 + (1));
seq__68076_68093 = G__68102;
chunk__68077_68094 = G__68103;
count__68078_68095 = G__68104;
i__68079_68096 = G__68105;
continue;
} else {
var temp__5825__auto___68106 = cljs.core.seq(seq__68076_68093);
if(temp__5825__auto___68106){
var seq__68076_68107__$1 = temp__5825__auto___68106;
if(cljs.core.chunked_seq_QMARK_(seq__68076_68107__$1)){
var c__5673__auto___68108 = cljs.core.chunk_first(seq__68076_68107__$1);
var G__68111 = cljs.core.chunk_rest(seq__68076_68107__$1);
var G__68112 = c__5673__auto___68108;
var G__68113 = cljs.core.count(c__5673__auto___68108);
var G__68114 = (0);
seq__68076_68093 = G__68111;
chunk__68077_68094 = G__68112;
count__68078_68095 = G__68113;
i__68079_68096 = G__68114;
continue;
} else {
var iframe_68115 = cljs.core.first(seq__68076_68107__$1);
var temp__5825__auto___68116__$1 = frontend.handler.assets.local_file_iframe_src__GT_assets_url(iframe_68115.getAttribute("src"));
if(cljs.core.truth_(temp__5825__auto___68116__$1)){
var src_68117 = temp__5825__auto___68116__$1;
iframe_68115.setAttribute("src",src_68117);
} else {
}


var G__68118 = cljs.core.next(seq__68076_68107__$1);
var G__68119 = null;
var G__68120 = (0);
var G__68121 = (0);
seq__68076_68093 = G__68118;
chunk__68077_68094 = G__68119;
count__68078_68095 = G__68120;
i__68079_68096 = G__68121;
continue;
}
} else {
}
}
break;
}

return root.innerHTML;
} else {
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(purify,"sanitize",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([html,frontend.security.sanitization_options], 0));
}
});

//# sourceMappingURL=frontend.security.js.map
