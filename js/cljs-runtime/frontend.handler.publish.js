goog.provide('frontend.handler.publish');
frontend.handler.publish._LT_sha256_hex = (function frontend$handler$publish$_LT_sha256_hex(text){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((new TextEncoder())),(function (encoder){
return promesa.protocols._mcat(promesa.protocols._promise(encoder.encode(text)),(function (data){
return promesa.protocols._mcat(promesa.protocols._promise(crypto.subtle.digest("SHA-256",data)),(function (digest){
return promesa.protocols._mcat(promesa.protocols._promise((new Uint8Array(digest))),(function (data__$1){
return promesa.protocols._promise(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
return b.toString((16)).padStart((2),"0");
}),data__$1)));
}));
}));
}));
}));
}));
});
frontend.handler.publish.publish_endpoint = (function frontend$handler$publish$publish_endpoint(){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.publish_api_base())+"/pages");
});
frontend.handler.publish.publish_page_endpoint = (function frontend$handler$publish$publish_page_endpoint(graph_uuid,page_uuid){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.publish_api_base())+"/pages/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(graph_uuid)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_uuid));
});
frontend.handler.publish.asset_upload_endpoint = (function frontend$handler$publish$asset_upload_endpoint(){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.publish_api_base())+"/assets");
});
frontend.handler.publish._LT_get_file_content = (function frontend$handler$publish$_LT_get_file_content(repo,path){
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-file-content","thread-api/get-file-content",-718755763),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,path], 0));
});
frontend.handler.publish._LT_get_graph_uuid = (function frontend$handler$publish$_LT_get_graph_uuid(repo){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-graph-uuid","thread-api/get-graph-uuid",-1291239316),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo], 0))),(function (graph_uuid){
return promesa.protocols._promise((function (){var G__79637 = graph_uuid;
if((G__79637 == null)){
return null;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79637));
}
})());
}));
}));
});
frontend.handler.publish.asset_content_type = (function frontend$handler$publish$asset_content_type(ext){
var G__79638 = clojure.string.lower_case((function (){var or__5142__auto__ = ext;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})());
switch (G__79638) {
case "png":
return "image/png";

break;
case "jpg":
case "jpeg":
return "image/jpeg";

break;
case "gif":
return "image/gif";

break;
case "webp":
return "image/webp";

break;
case "svg":
return "image/svg+xml";

break;
case "bmp":
return "image/bmp";

break;
case "avif":
return "image/avif";

break;
case "jxl":
return "image/jxl";

break;
case "mp4":
return "video/mp4";

break;
case "webm":
return "video/webm";

break;
case "mov":
return "video/quicktime";

break;
case "mp3":
return "audio/mpeg";

break;
case "wav":
return "audio/wav";

break;
case "ogg":
return "audio/ogg";

break;
case "pdf":
return "application/pdf";

break;
default:
return "application/octet-stream";

}
});
frontend.handler.publish.publish_image_variant_sizes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1024),(1600)], null);
frontend.handler.publish.publish_image_quality = 0.9;
frontend.handler.publish.publish_image_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["webp",null,"jpeg",null,"png",null,"jpg",null], null), null);
frontend.handler.publish.custom_publish_assets = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic("logseq",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["publish.css"], 0)),new cljs.core.Keyword(null,"type","type",1174270348),"css",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/css; charset=utf-8",new cljs.core.Keyword(null,"meta-key","meta-key",280559106),new cljs.core.Keyword(null,"custom_publish_css_hash","custom_publish_css_hash",1356280290),new cljs.core.Keyword(null,"asset-name","asset-name",-1412454368),"publish.css"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic("logseq",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["publish.js"], 0)),new cljs.core.Keyword(null,"type","type",1174270348),"js",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/javascript; charset=utf-8",new cljs.core.Keyword(null,"meta-key","meta-key",280559106),new cljs.core.Keyword(null,"custom_publish_js_hash","custom_publish_js_hash",-1444819100),new cljs.core.Keyword(null,"asset-name","asset-name",-1412454368),"publish.js"], null)], null);
frontend.handler.publish.image_asset_QMARK_ = (function frontend$handler$publish$image_asset_QMARK_(asset_type){
return cljs.core.contains_QMARK_(frontend.handler.publish.publish_image_types,clojure.string.lower_case((function (){var or__5142__auto__ = asset_type;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})()));
});
frontend.handler.publish.asset_uuid_with_variant = (function frontend$handler$publish$asset_uuid_with_variant(asset_uuid,variant){
if(cljs.core.truth_(variant)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(asset_uuid)+"@"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(variant));
} else {
return asset_uuid;
}
});
frontend.handler.publish._LT_sha256_hex_buffer = (function frontend$handler$publish$_LT_sha256_hex_buffer(array_buffer){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(crypto.subtle.digest("SHA-256",array_buffer)),(function (digest){
return promesa.protocols._mcat(promesa.protocols._promise((new Uint8Array(digest))),(function (data){
return promesa.protocols._promise(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
return b.toString((16)).padStart((2),"0");
}),data)));
}));
}));
}));
});
frontend.handler.publish._LT_blob_checksum = (function frontend$handler$publish$_LT_blob_checksum(blob){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(blob.arrayBuffer()),(function (buffer){
return promesa.protocols._promise(frontend.handler.publish._LT_sha256_hex_buffer(buffer));
}));
}));
});
frontend.handler.publish._LT_canvas__GT_blob = (function frontend$handler$publish$_LT_canvas__GT_blob(canvas,content_type,quality){
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve,_reject){
return canvas.toBlob((function (blob){
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(blob) : resolve.call(null,blob));
}),content_type,quality);
}));
});
frontend.handler.publish._LT_canvas_from_blob = (function frontend$handler$publish$_LT_canvas_from_blob(blob,max_dim){
if((typeof createImageBitmap !== 'undefined')){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(createImageBitmap(blob,({"imageOrientation": "from-image"}))),(function (bitmap){
return promesa.protocols._mcat(promesa.protocols._promise(bitmap.width),(function (width){
return promesa.protocols._mcat(promesa.protocols._promise(bitmap.height),(function (height){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.min.cljs$core$IFn$_invoke$arity$2((1),(max_dim / cljs.core.max.cljs$core$IFn$_invoke$arity$2(width,height)))),(function (scale){
return promesa.protocols._mcat(promesa.protocols._promise(Math.round((width * scale))),(function (target_width){
return promesa.protocols._mcat(promesa.protocols._promise(Math.round((height * scale))),(function (target_height){
return promesa.protocols._mcat(promesa.protocols._promise(document.createElement("canvas")),(function (canvas){
return promesa.protocols._mcat(promesa.protocols._promise(canvas.getContext("2d")),(function (ctx){
return promesa.protocols._mcat(promesa.protocols._promise((canvas.width = target_width)),(function (___27434__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((canvas.height = target_height)),(function (___27434__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise((ctx.imageSmoothingEnabled = true)),(function (___27434__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise((ctx.imageSmoothingQuality = "high")),(function (___27434__auto____$3){
return promesa.protocols._mcat(promesa.protocols._promise(ctx.drawImage(bitmap,(0),(0),target_width,target_height)),(function (___27434__auto____$4){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(bitmap.close)?bitmap.close():null)),(function (___27434__auto____$5){
return promesa.protocols._promise(canvas);
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
} else {
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve,reject){
var img = (new Image());
var url = URL.createObjectURL(blob);
(img.onload = (function (){
return frontend.image.get_orientation(img,(function (canvas){
URL.revokeObjectURL(url);

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(canvas) : resolve.call(null,canvas));
}),max_dim,max_dim);
}));

(img.onerror = (function (error){
URL.revokeObjectURL(url);

return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(error) : reject.call(null,error));
}));

return (img.src = url);
}));
}
});
frontend.handler.publish._LT_build_image_uploads = (function frontend$handler$publish$_LT_build_image_uploads(asset_uuid,asset_type,title,blob,content_type){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (size){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.publish._LT_canvas_from_blob(blob,size)),(function (canvas){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.publish._LT_canvas__GT_blob(canvas,content_type,frontend.handler.publish.publish_image_quality)),(function (blob_SINGLEQUOTE_){
return promesa.protocols._promise((cljs.core.truth_(blob_SINGLEQUOTE_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),size,new cljs.core.Keyword(null,"blob","blob",1636965233),blob_SINGLEQUOTE_], null):null));
}));
}));
}));
}),frontend.handler.publish.publish_image_variant_sizes)),(function (variant_promises){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.all(variant_promises),(function (entries){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,entries));
}))),(function (variants){
return promesa.protocols._promise(((cljs.core.seq(variants))?(function (){var sorted = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"variant","variant",-424354234),variants);
var largest = cljs.core.last(sorted);
var uploads = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(largest,new cljs.core.Keyword(null,"variant","variant",-424354234),null)], null),sorted));
return promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__79639){
var map__79640 = p__79639;
var map__79640__$1 = cljs.core.__destructure_map(map__79640);
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79640__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var blob__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79640__$1,new cljs.core.Keyword(null,"blob","blob",1636965233));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.publish._LT_blob_checksum(blob__$1)),(function (checksum){
return promesa.protocols._promise(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"asset_uuid","asset_uuid",1053569977),frontend.handler.publish.asset_uuid_with_variant(asset_uuid,variant),new cljs.core.Keyword(null,"asset_type","asset_type",1884668736),asset_type,new cljs.core.Keyword(null,"content_type","content_type",52159344),content_type,new cljs.core.Keyword(null,"checksum","checksum",549736371),checksum,new cljs.core.Keyword(null,"size","size",1098693007),blob__$1.size,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"blob","blob",1636965233),blob__$1], null));
}));
}));
}),uploads));
})():null));
}));
}));
}));
});
frontend.handler.publish._LT_upload_blob_asset_BANG_ = (function frontend$handler$publish$_LT_upload_blob_asset_BANG_(graph_uuid,asset_token,p__79641){
var map__79642 = p__79641;
var map__79642__$1 = cljs.core.__destructure_map(map__79642);
var asset_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79642__$1,new cljs.core.Keyword(null,"asset_uuid","asset_uuid",1053569977));
var asset_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79642__$1,new cljs.core.Keyword(null,"asset_type","asset_type",1884668736));
var checksum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79642__$1,new cljs.core.Keyword(null,"checksum","checksum",549736371));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79642__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79642__$1,new cljs.core.Keyword(null,"title","title",636505583));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79642__$1,new cljs.core.Keyword(null,"content_type","content_type",52159344));
var blob = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79642__$1,new cljs.core.Keyword(null,"blob","blob",1636965233));
var meta = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"graph","graph",1558099509),graph_uuid,new cljs.core.Keyword(null,"asset_uuid","asset_uuid",1053569977),asset_uuid,new cljs.core.Keyword(null,"asset_type","asset_type",1884668736),asset_type,new cljs.core.Keyword(null,"checksum","checksum",549736371),checksum,new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"content_type","content_type",52159344),content_type], null);
var headers = (function (){var G__79643 = new cljs.core.PersistentArrayMap(null, 2, ["content-type",content_type,"x-asset-meta",JSON.stringify(cljs.core.clj__GT_js(meta))], null);
if(cljs.core.truth_(asset_token)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79643,"authorization",(""+"Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(asset_token)));
} else {
return G__79643;
}
})();
return fetch(frontend.handler.publish.asset_upload_endpoint(),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),headers,new cljs.core.Keyword(null,"body","body",-2049205669),blob], null)));
});
frontend.handler.publish._LT_upload_raw_asset_BANG_ = (function frontend$handler$publish$_LT_upload_raw_asset_BANG_(asset_token,asset_meta,content_type,content){
var headers = (function (){var G__79644 = new cljs.core.PersistentArrayMap(null, 2, ["content-type",content_type,"x-asset-meta",JSON.stringify(cljs.core.clj__GT_js(asset_meta))], null);
if(cljs.core.truth_(asset_token)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79644,"authorization",(""+"Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(asset_token)));
} else {
return G__79644;
}
})();
return fetch(frontend.handler.publish.asset_upload_endpoint(),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),headers,new cljs.core.Keyword(null,"body","body",-2049205669),content], null)));
});
frontend.handler.publish.merge_attr = (function frontend$handler$publish$merge_attr(entity,attr,value){
var existing = cljs.core.get.cljs$core$IFn$_invoke$arity$3(entity,attr,new cljs.core.Keyword("frontend.handler.publish","none","frontend.handler.publish/none",17303219));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(existing,new cljs.core.Keyword("frontend.handler.publish","none","frontend.handler.publish/none",17303219))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,attr,value);
} else {
if(cljs.core.vector_QMARK_(existing)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,attr,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(existing,value));
} else {
if(cljs.core.set_QMARK_(existing)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,attr,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(existing,value));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,attr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing,value], null));

}
}
}
});
frontend.handler.publish.datoms__GT_entities = (function frontend$handler$publish$datoms__GT_entities(datoms){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,datom){
var vec__79645 = datom;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79645,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79645,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79645,(2),null);
var _tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79645,(3),null);
var added_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79645,(4),null);
if(cljs.core.truth_(added_QMARK_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(acc,e,(function (entity){
return frontend.handler.publish.merge_attr((function (){var or__5142__auto__ = entity;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),e], null);
}
})(),a,v);
}));
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,datoms);
});
frontend.handler.publish.asset_entities_from_payload = (function frontend$handler$publish$asset_entities_from_payload(payload){
var entities = frontend.handler.publish.datoms__GT_entities(new cljs.core.Keyword(null,"datoms","datoms",-290874434).cljs$core$IFn$_invoke$arity$1(payload));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (entity){
var and__5140__auto__ = new cljs.core.Keyword("logseq.property.asset","type","logseq.property.asset/type",-1142083098).cljs$core$IFn$_invoke$arity$1(entity);
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(entity);
} else {
return and__5140__auto__;
}
}),cljs.core.vals(entities));
});
frontend.handler.publish._LT_upload_asset_BANG_ = (function frontend$handler$publish$_LT_upload_asset_BANG_(repo,graph_uuid,asset){
var asset_type = new cljs.core.Keyword("logseq.property.asset","type","logseq.property.asset/type",-1142083098).cljs$core$IFn$_invoke$arity$1(asset);
var asset_uuid = (function (){var G__79648 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(asset);
if((G__79648 == null)){
return null;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79648));
}
})();
var external_url = new cljs.core.Keyword("logseq.property.asset","external-url","logseq.property.asset/external-url",-1364775163).cljs$core$IFn$_invoke$arity$1(asset);
var token = frontend.state.get_auth_id_token();
if(cljs.core.truth_((function (){var or__5142__auto__ = (!(typeof asset_type === 'string'));
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = clojure.string.blank_QMARK_(asset_type);
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = external_url;
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return (asset_uuid == null);
}
}
}
})())){
return promesa.core.resolved(null);
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.config.get_repo_dir(repo)),(function (repo_dir){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic("assets",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(asset_uuid)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(asset_type))], 0))),(function (asset_path){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.fs.read_file_raw.cljs$core$IFn$_invoke$arity$variadic(repo_dir,asset_path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY], 0))),(function (content){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.publish.asset_content_type(asset_type)),(function (content_type){
return promesa.protocols._promise(((frontend.handler.publish.image_asset_QMARK_(asset_type))?promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise((new Blob([content],cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),content_type], null))))),(function (blob){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.publish._LT_build_image_uploads(asset_uuid,asset_type,new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(asset),blob,content_type)),(function (uploads){
return promesa.protocols._promise(((cljs.core.seq(uploads))?promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (upload){
return frontend.handler.publish._LT_upload_blob_asset_BANG_(graph_uuid,token,upload);
}),uploads))),(function (responses){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var seq__79649 = cljs.core.seq(responses);
var chunk__79650 = null;
var count__79651 = (0);
var i__79652 = (0);
while(true){
if((i__79652 < count__79651)){
var resp = chunk__79650.cljs$core$IIndexed$_nth$arity$2(null,i__79652);
if(cljs.core.truth_(resp.ok)){
} else {
console.warn("Asset publish failed",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"asset","asset",-280274466),asset_uuid,new cljs.core.Keyword(null,"status","status",-1997798413),resp.status], null));
}


var G__79671 = seq__79649;
var G__79672 = chunk__79650;
var G__79673 = count__79651;
var G__79674 = (i__79652 + (1));
seq__79649 = G__79671;
chunk__79650 = G__79672;
count__79651 = G__79673;
i__79652 = G__79674;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__79649);
if(temp__5825__auto__){
var seq__79649__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__79649__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__79649__$1);
var G__79675 = cljs.core.chunk_rest(seq__79649__$1);
var G__79676 = c__5673__auto__;
var G__79677 = cljs.core.count(c__5673__auto__);
var G__79678 = (0);
seq__79649 = G__79675;
chunk__79650 = G__79676;
count__79651 = G__79677;
i__79652 = G__79678;
continue;
} else {
var resp = cljs.core.first(seq__79649__$1);
if(cljs.core.truth_(resp.ok)){
} else {
console.warn("Asset publish failed",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"asset","asset",-280274466),asset_uuid,new cljs.core.Keyword(null,"status","status",-1997798413),resp.status], null));
}


var G__79679 = cljs.core.next(seq__79649__$1);
var G__79680 = null;
var G__79681 = (0);
var G__79682 = (0);
seq__79649 = G__79679;
chunk__79650 = G__79680;
count__79651 = G__79681;
i__79652 = G__79682;
continue;
}
} else {
return null;
}
}
break;
}
})()),(function (___27434__auto__){
return promesa.protocols._promise(cljs.core.last(responses));
}));
}));
})):promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"graph","graph",1558099509),graph_uuid,new cljs.core.Keyword(null,"asset_uuid","asset_uuid",1053569977),asset_uuid,new cljs.core.Keyword(null,"asset_type","asset_type",1884668736),asset_type,new cljs.core.Keyword(null,"checksum","checksum",549736371),new cljs.core.Keyword("logseq.property.asset","checksum","logseq.property.asset/checksum",-1011416979).cljs$core$IFn$_invoke$arity$1(asset),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword("logseq.property.asset","size","logseq.property.asset/size",-116786219).cljs$core$IFn$_invoke$arity$1(asset),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(asset)], null)),(function (meta){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.publish._LT_upload_raw_asset_BANG_(token,meta,content_type,content)),(function (resp){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(resp.ok)?null:console.warn("Asset publish failed",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"asset","asset",-280274466),asset_uuid,new cljs.core.Keyword(null,"status","status",-1997798413),resp.status], null)))),(function (___27434__auto__){
return promesa.protocols._promise(resp);
}));
}));
}));
}))));
}));
}));
})):promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"graph","graph",1558099509),graph_uuid,new cljs.core.Keyword(null,"asset_uuid","asset_uuid",1053569977),asset_uuid,new cljs.core.Keyword(null,"asset_type","asset_type",1884668736),asset_type,new cljs.core.Keyword(null,"checksum","checksum",549736371),new cljs.core.Keyword("logseq.property.asset","checksum","logseq.property.asset/checksum",-1011416979).cljs$core$IFn$_invoke$arity$1(asset),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword("logseq.property.asset","size","logseq.property.asset/size",-116786219).cljs$core$IFn$_invoke$arity$1(asset),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(asset)], null)),(function (meta){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.publish._LT_upload_raw_asset_BANG_(token,meta,content_type,content)),(function (resp){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(resp.ok)?null:console.warn("Asset publish failed",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"asset","asset",-280274466),asset_uuid,new cljs.core.Keyword(null,"status","status",-1997798413),resp.status], null)))),(function (___27434__auto__){
return promesa.protocols._promise(resp);
}));
}));
}));
}))));
}));
}));
}));
}));
}));
}
});
frontend.handler.publish._LT_upload_assets_BANG_ = (function frontend$handler$publish$_LT_upload_assets_BANG_(repo,graph_uuid,payload){
var assets = frontend.handler.publish.asset_entities_from_payload(payload);
if(cljs.core.seq(assets)){
return promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (asset){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(frontend.handler.publish._LT_upload_asset_BANG_(repo,graph_uuid,asset),(function (error){
return console.warn("Asset publish error",error);
}));
}),assets));
} else {
return null;
}
});
frontend.handler.publish._LT_upload_custom_publish_assets_BANG_ = (function frontend$handler$publish$_LT_upload_custom_publish_assets_BANG_(repo,graph_uuid){
var token = frontend.state.get_auth_id_token();
var asset_uuid = "publish";
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__79653){
var map__79654 = p__79653;
var map__79654__$1 = cljs.core.__destructure_map(map__79654);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79654__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79654__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79654__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var meta_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79654__$1,new cljs.core.Keyword(null,"meta-key","meta-key",280559106));
var asset_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79654__$1,new cljs.core.Keyword(null,"asset-name","asset-name",-1412454368));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.publish._LT_get_file_content(repo,path)),(function (content){
return promesa.protocols._promise(((((typeof content === 'string') && ((!(clojure.string.blank_QMARK_(content))))))?promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.publish._LT_sha256_hex(content)),(function (checksum){
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"graph","graph",1558099509),graph_uuid,new cljs.core.Keyword(null,"asset_uuid","asset_uuid",1053569977),asset_uuid,new cljs.core.Keyword(null,"asset_type","asset_type",1884668736),type,new cljs.core.Keyword(null,"content_type","content_type",52159344),content_type,new cljs.core.Keyword(null,"checksum","checksum",549736371),checksum,new cljs.core.Keyword(null,"title","title",636505583),asset_name], null)),(function (meta){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.publish._LT_upload_raw_asset_BANG_(token,meta,content_type,content)),(function (resp){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(resp.ok)?null:console.warn("Custom publish asset upload failed",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"status","status",-1997798413),resp.status], null)))),(function (___27434__auto__){
return promesa.protocols._promise(cljs.core.PersistentArrayMap.createAsIfByAssoc([meta_key,checksum]));
}));
}));
}));
}));
})):null));
}));
}));
}),frontend.handler.publish.custom_publish_assets))),(function (results){
return promesa.protocols._promise(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,results)));
}));
}));
});
frontend.handler.publish._LT_post_publish_BANG_ = (function frontend$handler$publish$_LT_post_publish_BANG_(payload,p__79655){
var map__79656 = p__79655;
var map__79656__$1 = cljs.core.__destructure_map(map__79656);
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79656__$1,new cljs.core.Keyword(null,"password","password",417022471));
var custom_assets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79656__$1,new cljs.core.Keyword(null,"custom-assets","custom-assets",833593474));
var token = frontend.state.get_auth_id_token();
var headers = (function (){var G__79657 = new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null);
if(cljs.core.truth_(token)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79657,"authorization",(""+"Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)));
} else {
return G__79657;
}
})();
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__79658 = password;
if((G__79658 == null)){
return null;
} else {
return clojure.string.trim(G__79658);
}
})()),(function (page_password){
return promesa.protocols._mcat(promesa.protocols._promise(((((typeof page_password === 'string') && ((!(clojure.string.blank_QMARK_(page_password))))))?page_password:null)),(function (page_password__$1){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__79659 = payload;
if(cljs.core.truth_(page_password__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79659,new cljs.core.Keyword(null,"page-password","page-password",1728359242),page_password__$1);
} else {
return G__79659;
}
})()),(function (payload__$1){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.db.write_transit_str(payload__$1)),(function (body){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.publish._LT_sha256_hex(body)),(function (content_hash){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522).cljs$core$IFn$_invoke$arity$1(payload__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.handler.publish._LT_get_graph_uuid(frontend.state.get_current_repo());
}
})()),(function (graph_uuid){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(graph_uuid)?null:(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Missing graph UUID",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"repo","repo",-1999060679),frontend.state.get_current_repo()], null))})())),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"owner_sub","owner_sub",-126355899),new cljs.core.Keyword(null,"schema_version","schema_version",-1717669947),new cljs.core.Keyword(null,"content_length","content_length",-968581686),new cljs.core.Keyword(null,"page_uuid","page_uuid",-1919894292),new cljs.core.Keyword(null,"compression","compression",-506303443),new cljs.core.Keyword(null,"content_hash","content_hash",121497903),new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"block_count","block_count",-614724746),new cljs.core.Keyword(null,"created_at","created_at",1484050750),new cljs.core.Keyword(null,"owner_username","owner_username",1882740382)],[new cljs.core.Keyword(null,"transit","transit",359458387),frontend.handler.user.user_uuid(),new cljs.core.Keyword(null,"schema-version","schema-version",1117939594).cljs$core$IFn$_invoke$arity$1(payload__$1),cljs.core.count(body),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"page-uuid","page-uuid",1152600915).cljs$core$IFn$_invoke$arity$1(payload__$1))),new cljs.core.Keyword(null,"none","none",1333468478),content_hash,graph_uuid,new cljs.core.Keyword(null,"block-count","block-count",237453570).cljs$core$IFn$_invoke$arity$1(payload__$1),(frontend.util.time_ms.cljs$core$IFn$_invoke$arity$0 ? frontend.util.time_ms.cljs$core$IFn$_invoke$arity$0() : frontend.util.time_ms.call(null)),frontend.handler.user.username()])),(function (publish_meta){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__79660 = publish_meta;
var G__79660__$1 = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(custom_assets,new cljs.core.Keyword(null,"custom_publish_css_hash","custom_publish_css_hash",1356280290)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79660,new cljs.core.Keyword(null,"custom_publish_css_hash","custom_publish_css_hash",1356280290),new cljs.core.Keyword(null,"custom_publish_css_hash","custom_publish_css_hash",1356280290).cljs$core$IFn$_invoke$arity$1(custom_assets)):G__79660);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(custom_assets,new cljs.core.Keyword(null,"custom_publish_js_hash","custom_publish_js_hash",-1444819100)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79660__$1,new cljs.core.Keyword(null,"custom_publish_js_hash","custom_publish_js_hash",-1444819100),new cljs.core.Keyword(null,"custom_publish_js_hash","custom_publish_js_hash",-1444819100).cljs$core$IFn$_invoke$arity$1(custom_assets));
} else {
return G__79660__$1;
}
})()),(function (publish_meta__$1){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(payload__$1,new cljs.core.Keyword(null,"meta","meta",1499536964),publish_meta__$1)),(function (publish_body){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(headers,"x-publish-meta",JSON.stringify(cljs.core.clj__GT_js(publish_meta__$1)))),(function (headers__$1){
return promesa.protocols._mcat(promesa.protocols._promise(fetch(frontend.handler.publish.publish_endpoint(),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1,new cljs.core.Keyword(null,"body","body",-2049205669),logseq.db.write_transit_str(publish_body)], null)))),(function (resp){
return promesa.protocols._promise((cljs.core.truth_(resp.ok)?resp:promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(resp.text()),(function (body__$1){
return promesa.protocols._promise((function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Publish failed",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),resp.status,new cljs.core.Keyword(null,"body","body",-2049205669),body__$1], null))})());
}));
}))));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
});
/**
 * Prepares and uploads the publish payload for a page.
 */
frontend.handler.publish.publish_page_BANG_ = (function frontend$handler$publish$publish_page_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___79683 = arguments.length;
var i__5877__auto___79684 = (0);
while(true){
if((i__5877__auto___79684 < len__5876__auto___79683)){
args__5882__auto__.push((arguments[i__5877__auto___79684]));

var G__79685 = (i__5877__auto___79684 + (1));
i__5877__auto___79684 = G__79685;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.handler.publish.publish_page_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.handler.publish.publish_page_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (page,p__79663){
var vec__79664 = p__79663;
var map__79667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79664,(0),null);
var map__79667__$1 = cljs.core.__destructure_map(map__79667);
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79667__$1,new cljs.core.Keyword(null,"password","password",417022471));
var repo = frontend.state.get_current_repo();
if(cljs.core.truth_((function (){var and__5140__auto__ = repo;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = page;
if(cljs.core.truth_(and__5140__auto____$1)){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","build-publish-page-payload","thread-api/build-publish-page-payload",867932588),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page)], 0))),(function (payload){
return promesa.protocols._promise((cljs.core.truth_(payload)?promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522).cljs$core$IFn$_invoke$arity$1(payload);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.handler.publish._LT_get_graph_uuid(repo);
}
})()),(function (graph_id){
return promesa.protocols._promise(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.publish._LT_upload_assets_BANG_(repo,graph_id,payload)),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.publish._LT_upload_custom_publish_assets_BANG_(repo,graph_id)),(function (custom_assets){
return promesa.protocols._promise(frontend.handler.publish._LT_post_publish_BANG_(payload,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"password","password",417022471),password,new cljs.core.Keyword(null,"custom-assets","custom-assets",833593474),custom_assets], null)));
}));
}));
})),(function (resp){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise(resp.json()),(function (json){
return promesa.protocols._mcat(promesa.protocols._promise(cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(json)),(function (data){
return promesa.protocols._promise((function (){var short_url = new cljs.core.Keyword(null,"short_url","short_url",-1108144652).cljs$core$IFn$_invoke$arity$1(data);
var page_id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page)));
var api_base = frontend.config.publish_api_base();
var fallback_url = (cljs.core.truth_((function (){var and__5140__auto__ = graph_id;
if(cljs.core.truth_(and__5140__auto__)){
return page_id;
} else {
return and__5140__auto__;
}
})())?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(api_base)+"/page/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(graph_id)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_id)):null);
var url = (function (){var or__5142__auto__ = (cljs.core.truth_(short_url)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(api_base)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(short_url)):null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return fallback_url;
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = url;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
} else {
return and__5140__auto__;
}
})())){
frontend.handler.property.set_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword("logseq.property.publish","published-url","logseq.property.publish/published-url",2045182501),url);
} else {
}

if(cljs.core.truth_(url)){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline","div.inline",1736505598),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null),frontend.context.i18n.interpolate_rich_text.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("publish","published-to","publish/published-to",1560034494)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),url], null),url], null)], null)))], null),new cljs.core.Keyword(null,"success","success",1890645906),false);
} else {
return null;
}
})());
}));
}));
}));
})),(function (error){
console.error(error);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("publish","publish-error","publish/publish-error",1482599687)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
})));
}));
})):frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("publish","publish-error","publish/publish-error",1482599687)], 0)),new cljs.core.Keyword(null,"error","error",-978969032))));
}));
}));
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("publish","invalid-page-error","publish/invalid-page-error",185683038)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
}
}));

(frontend.handler.publish.publish_page_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.handler.publish.publish_page_BANG_.cljs$lang$applyTo = (function (seq79661){
var G__79662 = cljs.core.first(seq79661);
var seq79661__$1 = cljs.core.next(seq79661);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__79662,seq79661__$1);
}));

frontend.handler.publish.unpublish_page_BANG_ = (function frontend$handler$publish$unpublish_page_BANG_(page){
var repo = frontend.state.get_current_repo();
var token = frontend.state.get_auth_id_token();
var headers = (function (){var G__79668 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(token)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79668,"authorization",(""+"Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)));
} else {
return G__79668;
}
})();
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.publish._LT_get_graph_uuid(repo)),(function (graph_uuid){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__79669 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page);
if((G__79669 == null)){
return null;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79669));
}
})()),(function (page_uuid){
return promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = graph_uuid;
if(cljs.core.truth_(and__5140__auto__)){
return page_uuid;
} else {
return and__5140__auto__;
}
})())?promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(fetch(frontend.handler.publish.publish_page_endpoint(graph_uuid,page_uuid),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"DELETE",new cljs.core.Keyword(null,"headers","headers",-835030129),headers], null)))),(function (resp){
return promesa.protocols._promise((cljs.core.truth_(resp.ok)?(function (){
frontend.handler.property.remove_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword("logseq.property.publish","published-url","logseq.property.publish/published-url",2045182501));

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("publish","unpublished","publish/unpublished",-1512584095)], 0)),new cljs.core.Keyword(null,"success","success",1890645906),false);
})()
:promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise(resp.text()),(function (body){
return promesa.protocols._promise((function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unpublish failed",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),resp.status,new cljs.core.Keyword(null,"body","body",-2049205669),body], null))})());
}));
}))));
}));
})),(function (error){
console.error(error);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("publish","unpublish-error","publish/unpublish-error",1416426735)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
})):frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("publish","unpublish-missing-page-id","publish/unpublish-missing-page-id",-299406166)], 0)),new cljs.core.Keyword(null,"error","error",-978969032))));
}));
}));
}));
});

//# sourceMappingURL=frontend.handler.publish.js.map
