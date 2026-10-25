goog.provide('frontend.extensions.zip');
frontend.extensions.zip.make_file = (function frontend$extensions$zip$make_file(content,file_name,args){
var blob_content = cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
var last_modified = (function (){var or__5142__auto__ = (content["lastModified"]);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (new Date());
}
})();
var args__$1 = cljs.core.clj__GT_js(args);
(args__$1["lastModified"] = last_modified);

return (new File(blob_content,file_name,args__$1));
});
frontend.extensions.zip.make_zip = (function frontend$extensions$zip$make_zip(var_args){
var args__5882__auto__ = [];
var len__5876__auto___65331 = arguments.length;
var i__5877__auto___65332 = (0);
while(true){
if((i__5877__auto___65332 < len__5876__auto___65331)){
args__5882__auto__.push((arguments[i__5877__auto___65332]));

var G__65333 = (i__5877__auto___65332 + (1));
i__5877__auto___65332 = G__65333;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return frontend.extensions.zip.make_zip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(frontend.extensions.zip.make_zip.cljs$core$IFn$_invoke$arity$variadic = (function (zip_filename,file_name_content,_repo,p__65323){
var map__65324 = p__65323;
var map__65324__$1 = cljs.core.__destructure_map(map__65324);
var progress_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65324__$1,new cljs.core.Keyword(null,"progress-fn","progress-fn",-1146547855));
var compression = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65324__$1,new cljs.core.Keyword(null,"compression","compression",-506303443));
var compression__$1 = (function (){var or__5142__auto__ = compression;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "STORE";
}
})();
var zip = frontend.handler.export$.util.make_export_zip.cljs$core$IFn$_invoke$arity$variadic(zip_filename,file_name_content,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compression","compression",-506303443),compression__$1], null)], 0));
var opts = ({"type": "blob", "streamFiles": true, "compression": compression__$1});
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(zip.generateAsync(opts,(cljs.core.truth_(progress_fn)?(function (metadata){
var G__65327 = metadata.percent;
return (progress_fn.cljs$core$IFn$_invoke$arity$1 ? progress_fn.cljs$core$IFn$_invoke$arity$1(G__65327) : progress_fn.call(null,G__65327));
}):null))),(function (zip_blob){
return promesa.protocols._promise(frontend.extensions.zip.make_file(zip_blob,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(zip_filename)+".zip"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"application/zip"], null)));
}));
}));
}));

(frontend.extensions.zip.make_zip.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(frontend.extensions.zip.make_zip.cljs$lang$applyTo = (function (seq65316){
var G__65317 = cljs.core.first(seq65316);
var seq65316__$1 = cljs.core.next(seq65316);
var G__65318 = cljs.core.first(seq65316__$1);
var seq65316__$2 = cljs.core.next(seq65316__$1);
var G__65319 = cljs.core.first(seq65316__$2);
var seq65316__$3 = cljs.core.next(seq65316__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65317,G__65318,G__65319,seq65316__$3);
}));


//# sourceMappingURL=frontend.extensions.zip.js.map
