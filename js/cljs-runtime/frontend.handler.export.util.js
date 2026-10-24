goog.provide('frontend.handler.export$.util');
var module$node_modules$jszip$dist$jszip_min=shadow.js.require("module$node_modules$jszip$dist$jszip_min", {});
/**
 * Makes a zip file for an exported graph and removes files with blank content.
 */
frontend.handler.export$.util.make_export_zip = (function frontend$handler$export$util$make_export_zip(var_args){
var args__5882__auto__ = [];
var len__5876__auto___65212 = arguments.length;
var i__5877__auto___65213 = (0);
while(true){
if((i__5877__auto___65213 < len__5876__auto___65212)){
args__5882__auto__.push((arguments[i__5877__auto___65213]));

var G__65214 = (i__5877__auto___65213 + (1));
i__5877__auto___65213 = G__65214;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return frontend.handler.export$.util.make_export_zip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(frontend.handler.export$.util.make_export_zip.cljs$core$IFn$_invoke$arity$variadic = (function (zip_filename,file_name_content,p__65187){
var map__65188 = p__65187;
var map__65188__$1 = cljs.core.__destructure_map(map__65188);
var file_opts = map__65188__$1;
var zip = (new module$node_modules$jszip$dist$jszip_min());
var folder = zip.folder(zip_filename);
var file_opts__$1 = (((!((file_opts == null))))?cljs.core.clj__GT_js(file_opts):null);
var seq__65189_65215 = cljs.core.seq(file_name_content);
var chunk__65190_65216 = null;
var count__65191_65217 = (0);
var i__65192_65218 = (0);
while(true){
if((i__65192_65218 < count__65191_65217)){
var vec__65201_65219 = chunk__65190_65216.cljs$core$IIndexed$_nth$arity$2(null,i__65192_65218);
var file_name_65220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65201_65219,(0),null);
var content_65221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65201_65219,(1),null);
if(clojure.string.blank_QMARK_(content_65221)){
} else {
folder.file(clojure.string.replace(file_name_65220,/^\/+/,""),content_65221,file_opts__$1);
}


var G__65222 = seq__65189_65215;
var G__65223 = chunk__65190_65216;
var G__65224 = count__65191_65217;
var G__65225 = (i__65192_65218 + (1));
seq__65189_65215 = G__65222;
chunk__65190_65216 = G__65223;
count__65191_65217 = G__65224;
i__65192_65218 = G__65225;
continue;
} else {
var temp__5825__auto___65226 = cljs.core.seq(seq__65189_65215);
if(temp__5825__auto___65226){
var seq__65189_65227__$1 = temp__5825__auto___65226;
if(cljs.core.chunked_seq_QMARK_(seq__65189_65227__$1)){
var c__5673__auto___65228 = cljs.core.chunk_first(seq__65189_65227__$1);
var G__65231 = cljs.core.chunk_rest(seq__65189_65227__$1);
var G__65232 = c__5673__auto___65228;
var G__65233 = cljs.core.count(c__5673__auto___65228);
var G__65234 = (0);
seq__65189_65215 = G__65231;
chunk__65190_65216 = G__65232;
count__65191_65217 = G__65233;
i__65192_65218 = G__65234;
continue;
} else {
var vec__65204_65235 = cljs.core.first(seq__65189_65227__$1);
var file_name_65236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65204_65235,(0),null);
var content_65237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65204_65235,(1),null);
if(clojure.string.blank_QMARK_(content_65237)){
} else {
folder.file(clojure.string.replace(file_name_65236,/^\/+/,""),content_65237,file_opts__$1);
}


var G__65238 = cljs.core.next(seq__65189_65227__$1);
var G__65239 = null;
var G__65240 = (0);
var G__65241 = (0);
seq__65189_65215 = G__65238;
chunk__65190_65216 = G__65239;
count__65191_65217 = G__65240;
i__65192_65218 = G__65241;
continue;
}
} else {
}
}
break;
}

return zip;
}));

(frontend.handler.export$.util.make_export_zip.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.handler.export$.util.make_export_zip.cljs$lang$applyTo = (function (seq65184){
var G__65185 = cljs.core.first(seq65184);
var seq65184__$1 = cljs.core.next(seq65184);
var G__65186 = cljs.core.first(seq65184__$1);
var seq65184__$2 = cljs.core.next(seq65184__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65185,G__65186,seq65184__$2);
}));


//# sourceMappingURL=frontend.handler.export.util.js.map
