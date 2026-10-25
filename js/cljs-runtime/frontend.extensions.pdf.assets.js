goog.provide('frontend.extensions.pdf.assets');
frontend.extensions.pdf.assets.get_in_repo_assets_full_filename = (function frontend$extensions$pdf$assets$get_in_repo_assets_full_filename(url){
var repo_dir = frontend.config.get_repo_dir(frontend.state.get_current_repo());
if(cljs.core.truth_((function (){var G__47059 = url;
var G__47059__$1 = (((G__47059 == null))?null:clojure.string.trim(G__47059));
if((G__47059__$1 == null)){
return null;
} else {
return clojure.string.includes_QMARK_(G__47059__$1,repo_dir);
}
})())){
var G__47060 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(url,repo_dir);
var G__47060__$1 = (((G__47060 == null))?null:cljs.core.last(G__47060));
if((G__47060__$1 == null)){
return null;
} else {
return clojure.string.replace_first(G__47060__$1,"/assets/","");
}
} else {
return url;
}
});
frontend.extensions.pdf.assets.inflate_asset = (function frontend$extensions$pdf$assets$inflate_asset(var_args){
var args__5882__auto__ = [];
var len__5876__auto___47223 = arguments.length;
var i__5877__auto___47224 = (0);
while(true){
if((i__5877__auto___47224 < len__5876__auto___47223)){
args__5882__auto__.push((arguments[i__5877__auto___47224]));

var G__47225 = (i__5877__auto___47224 + (1));
i__5877__auto___47224 = G__47225;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.extensions.pdf.assets.inflate_asset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.extensions.pdf.assets.inflate_asset.cljs$core$IFn$_invoke$arity$variadic = (function (original_path,p__47065){
var map__47066 = p__47065;
var map__47066__$1 = cljs.core.__destructure_map(map__47066);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47066__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47066__$1,new cljs.core.Keyword(null,"block","block",664686210));
var web_link_QMARK_ = clojure.string.starts_with_QMARK_(original_path,"http");
var protocol_link_QMARK_ = logseq.common.config.protocol_path_QMARK_(href);
var local_asset_link_QMARK_ = logseq.common.config.local_protocol_asset_QMARK_(href);
var filename = (frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1(original_path) : frontend.util.node_path.basename.call(null,original_path));
var ext_name = "pdf";
var url = (cljs.core.truth_(local_asset_link_QMARK_)?frontend.handler.assets.normalize_asset_resource_url(frontend.fs.asset_path_normalize(href)):((protocol_link_QMARK_)?href:frontend.handler.assets.normalize_asset_resource_url(original_path)
));
var filename_SINGLEQUOTE_ = ((protocol_link_QMARK_)?filename:(function (){var G__47070 = url;
var G__47070__$1 = (((G__47070 == null))?null:decodeURIComponent(G__47070));
var G__47070__$2 = (((G__47070__$1 == null))?null:frontend.extensions.pdf.assets.get_in_repo_assets_full_filename(G__47070__$1));
if((G__47070__$2 == null)){
return null;
} else {
return clojure.string.replace(G__47070__$2,"/","_");
}
})());
var filekey = logseq.graph_parser.exporter.safe_sanitize_file_name(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(filename_SINGLEQUOTE_,(0),(cljs.core.count(filename_SINGLEQUOTE_) - (((ext_name).length) + (1)))));
var temp__5825__auto__ = (function (){var and__5140__auto__ = (!(clojure.string.blank_QMARK_(filekey)));
if(and__5140__auto__){
if(web_link_QMARK_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(filekey)+"__"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(url)));
} else {
return filekey;
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var key = temp__5825__auto__;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"block","block",664686210),block,new cljs.core.Keyword(null,"identity","identity",1647396035),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(key,(cljs.core.count(key) - (15))),new cljs.core.Keyword(null,"filename","filename",-1428840783),filename,new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"hls-file","hls-file",192681120),(""+"assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+".edn"),new cljs.core.Keyword(null,"original-path","original-path",538600599),original_path], null);
} else {
return null;
}
}));

(frontend.extensions.pdf.assets.inflate_asset.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.extensions.pdf.assets.inflate_asset.cljs$lang$applyTo = (function (seq47061){
var G__47062 = cljs.core.first(seq47061);
var seq47061__$1 = cljs.core.next(seq47061);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47062,seq47061__$1);
}));

frontend.extensions.pdf.assets._LT_highlight_color_id = (function frontend$extensions$pdf$assets$_LT_highlight_color_id(repo,color){
if(cljs.core.truth_(color)){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_property_closed_values(repo,new cljs.core.Keyword("logseq.property.pdf","hl-color","logseq.property.pdf/hl-color",-674793887))),(function (closed_values){
return promesa.protocols._promise(cljs.core.some((function (color_block){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(color_block),color)){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(color_block);
} else {
return null;
}
}),closed_values));
}));
}));
} else {
return null;
}
});
frontend.extensions.pdf.assets.db_based_ensure_ref_block_BANG_ = (function frontend$extensions$pdf$assets$db_based_ensure_ref_block_BANG_(pdf_current,p__47078,insert_opts){
var map__47079 = p__47078;
var map__47079__$1 = cljs.core.__destructure_map(map__47079);
var hl = map__47079__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47079__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47079__$1,new cljs.core.Keyword(null,"content","content",15833224));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47079__$1,new cljs.core.Keyword(null,"page","page",849072397));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47079__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var temp__5825__auto__ = new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(pdf_current);
if(cljs.core.truth_(temp__5825__auto__)){
var pdf_block = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (ref_block){
return promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(ref_block))?(function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[existed ref block]",ref_block], 0));

return ref_block;
})()
:promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(content)),(function (ref_asset_id){
return promesa.protocols._mcat(promesa.protocols._promise((!((ref_asset_id == null)))),(function (image_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(image_QMARK_)?frontend.context.i18n.locale_format_date.cljs$core$IFn$_invoke$arity$1((new Date())):new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(content))),(function (text){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.extensions.pdf.assets._LT_highlight_color_id(frontend.state.get_current_repo(),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(properties))),(function (color_id){
return promesa.protocols._promise((cljs.core.truth_(color_id)?(function (){var properties__$1 = (function (){var G__47084 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.class","Pdf-annotation","logseq.class/Pdf-annotation",-504959620),null], null), null),new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),image_QMARK_,new cljs.core.Keyword("logseq.property","ls-type","logseq.property/ls-type",326979345),new cljs.core.Keyword(null,"annotation","annotation",-344661666),new cljs.core.Keyword("logseq.property.pdf","hl-color","logseq.property.pdf/hl-color",-674793887),color_id,new cljs.core.Keyword("logseq.property","asset","logseq.property/asset",876856790),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(pdf_block),new cljs.core.Keyword("logseq.property.pdf","hl-page","logseq.property.pdf/hl-page",-753284596),page,new cljs.core.Keyword("logseq.property.pdf","hl-value","logseq.property.pdf/hl-value",545829402),hl], null);
if(cljs.core.truth_(image_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__47084,new cljs.core.Keyword("logseq.property.pdf","hl-type","logseq.property.pdf/hl-type",-998437832),new cljs.core.Keyword(null,"area","area",472007256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("logseq.property.pdf","hl-image","logseq.property.pdf/hl-image",137767009),ref_asset_id], 0));
} else {
return G__47084;
}
})();
if(typeof text === 'string'){
return frontend.handler.editor.api_insert_new_block_BANG_(text,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(pdf_block),new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),false,new cljs.core.Keyword(null,"custom-uuid","custom-uuid",-1095135430),id,new cljs.core.Keyword(null,"properties","properties",685819552),properties__$1], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(insert_opts,new cljs.core.Keyword(null,"edit-block?","edit-block?",-310383789),false)], 0)));
} else {
return null;
}
})():null));
}));
}));
}));
}));
}))));
}));
}));
} else {
return null;
}
});
frontend.extensions.pdf.assets.ensure_ref_block_BANG_ = (function frontend$extensions$pdf$assets$ensure_ref_block_BANG_(pdf_current,hl,insert_opts){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.extensions.pdf.assets.db_based_ensure_ref_block_BANG_(pdf_current,hl,insert_opts)),(function (ref_block){
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.Keyword("logseq.property.pdf","hl-image","logseq.property.pdf/hl-image",137767009).cljs$core$IFn$_invoke$arity$1(ref_block)),(function (asset_block){
return promesa.protocols._promise(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(asset_block)?frontend.handler.editor.move_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [asset_block], null),ref_block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),false], null)):null)),(function (___21901__auto__){
return promesa.protocols._promise(ref_block);
}));
})));
}));
}));
}));
});
frontend.extensions.pdf.assets.db_based_load_hls_data$ = (function frontend$extensions$pdf$assets$db_based_load_hls_data$(p__47094){
var map__47095 = p__47094;
var map__47095__$1 = cljs.core.__destructure_map(map__47095);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47095__$1,new cljs.core.Keyword(null,"block","block",664686210));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block)),(function (ref_id){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__47096 = frontend.state.get_current_repo();
var G__47097 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact-db?","transact-db?",1279612399),false], null);
var G__47098 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?ref-id","?ref-id",-69527420,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("logseq.property","asset","logseq.property/asset",876856790),new cljs.core.Symbol(null,"?ref-id","?ref-id",-69527420,null)], null)], null);
var G__47099 = ref_id;
return (frontend.db.async._LT_q.cljs$core$IFn$_invoke$arity$4 ? frontend.db.async._LT_q.cljs$core$IFn$_invoke$arity$4(G__47096,G__47097,G__47098,G__47099) : frontend.db.async._LT_q.call(null,G__47096,G__47097,G__47098,G__47099));
})()),(function (data){
return promesa.protocols._promise((function (){var highlights = (function (){var G__47100 = data;
var G__47100__$1 = (((G__47100 == null))?null:cljs.core.flatten(G__47100));
var G__47100__$2 = (((G__47100__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47090_SHARP_){
return new cljs.core.Keyword("logseq.property.pdf","hl-value","logseq.property.pdf/hl-value",545829402).cljs$core$IFn$_invoke$arity$1(p1__47090_SHARP_);
}),G__47100__$1));
if((G__47100__$2 == null)){
return null;
} else {
return cljs.core.vec(G__47100__$2);
}
})();
var extra = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("logseq.property.asset","last-visit-page","logseq.property.asset/last-visit-page",2107803535).cljs$core$IFn$_invoke$arity$1(block)], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"highlights","highlights",945143465),highlights,new cljs.core.Keyword(null,"extra","extra",1612569067),(cljs.core.truth_(cljs.core.some((function (p1__47091_SHARP_){
return (!(((p1__47091_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__47091_SHARP_.cljs$core$IFn$_invoke$arity$1(extra) : p1__47091_SHARP_.call(null,extra)) == null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397)], null)))?extra:null)], null);
})());
}));
}));
}));
});
frontend.extensions.pdf.assets.area_highlight_QMARK_ = (function frontend$extensions$pdf$assets$area_highlight_QMARK_(hl){
var and__5140__auto__ = hl;
if(cljs.core.truth_(and__5140__auto__)){
return (!((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(hl,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"image","image",-58725096)], null)) == null)));
} else {
return and__5140__auto__;
}
});
frontend.extensions.pdf.assets.db_based_persist_hl_area_image = (function frontend$extensions$pdf$assets$db_based_persist_hl_area_image(repo,png){
var file = (new File([png],"pdf area highlight.png"));
return frontend.handler.editor.assets.db_based_save_assets_BANG_.cljs$core$IFn$_invoke$arity$variadic(repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pdf-area?","pdf-area?",770305490),true], null)], 0));
});
frontend.extensions.pdf.assets.persist_hl_area_image = (function frontend$extensions$pdf$assets$persist_hl_area_image(repo_url,_repo_dir,_current,_new_hl,_old_hl,png){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.extensions.pdf.assets.db_based_persist_hl_area_image(repo_url,png)),(function (result){
return promesa.protocols._promise(cljs.core.first(result));
}));
}));
});
/**
 * Save pdf highlight area image
 */
frontend.extensions.pdf.assets.persist_hl_area_image$ = (function frontend$extensions$pdf$assets$persist_hl_area_image$(viewer,current,new_hl,old_hl,p__47116){
var map__47117 = p__47116;
var map__47117__$1 = cljs.core.__destructure_map(map__47117);
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47117__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47117__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47117__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47117__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var temp__5825__auto__ = (function (){var and__5140__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(current);
if(cljs.core.truth_(and__5140__auto__)){
return viewer.getPageView((new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(new_hl) - (1))).canvas;
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var canvas = temp__5825__auto__;
var doc = canvas.ownerDocument;
var canvas_SINGLEQUOTE_ = doc.createElement("canvas");
var dpr = window.devicePixelRatio;
var repo_url = frontend.state.get_current_repo();
var repo_dir = frontend.config.get_repo_dir(repo_url);
var dw = (dpr * width);
var dh = (dpr * height);
(canvas_SINGLEQUOTE_.width = dw);

(canvas_SINGLEQUOTE_.height = dh);

var temp__5825__auto____$1 = canvas_SINGLEQUOTE_.getContext("2d",({"alpha": false}));
if(cljs.core.truth_(temp__5825__auto____$1)){
var ctx = temp__5825__auto____$1;
(ctx.imageSmoothingEnabled = false);

ctx.drawImage(canvas,(left * dpr),(top * dpr),(width * dpr),(height * dpr),(0),(0),dw,dh);

return (new Promise((function (resolve,reject){
return canvas_SINGLEQUOTE_.toBlob((function (png){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2((function (){var G__47124 = frontend.extensions.pdf.assets.persist_hl_area_image(repo_url,repo_dir,current,new_hl,old_hl,png);
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__47124) : resolve.call(null,G__47124));
})(),(function (err){
(reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(err) : reject.call(null,err));

return console.error("[write area image Error]",err);
}));
}));
})));
} else {
return null;
}
} else {
return null;
}
});
frontend.extensions.pdf.assets.update_hl_block_BANG_ = (function frontend$extensions$pdf$assets$update_hl_block_BANG_(highlight){
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(highlight),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (block){
return promesa.protocols._promise((function (){var temp__5825__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(highlight,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"color","color",1011675173)], null));
if(cljs.core.truth_(temp__5825__auto____$1)){
var color = temp__5825__auto____$1;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.extensions.pdf.assets._LT_highlight_color_id(repo,color)),(function (color_id){
return promesa.protocols._promise(frontend.handler.property.set_block_property_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("logseq.property.pdf","hl-color","logseq.property.pdf/hl-color",-674793887),color_id));
}));
}));
} else {
return null;
}
})());
}));
}));
} else {
return null;
}
});
frontend.extensions.pdf.assets.unlink_hl_area_image$ = (function frontend$extensions$pdf$assets$unlink_hl_area_image$(_viewer,current,hl){
var temp__5825__auto__ = (function (){var and__5140__auto__ = frontend.extensions.pdf.assets.area_highlight_QMARK_(hl);
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(current);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var fkey = temp__5825__auto__;
var repo_cur = frontend.state.get_current_repo();
var repo_dir = frontend.config.get_repo_dir(repo_cur);
var fstamp = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(hl,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"image","image",-58725096)], null));
var fname = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(hl))+"_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(hl)));
var fdir = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.config.local_assets_dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fkey));
var fpath = (function (){var G__47133 = repo_dir;
var G__47134 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fdir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)+"_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fstamp)+".png");
return (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(G__47133,G__47134) : frontend.util.node_path.join.call(null,G__47133,G__47134));
})();
return frontend.fs.unlink_BANG_(repo_cur,fpath,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
frontend.extensions.pdf.assets.del_ref_block_BANG_ = (function frontend$extensions$pdf$assets$del_ref_block_BANG_(p__47135){
var map__47136 = p__47135;
var map__47136__$1 = cljs.core.__destructure_map(map__47136);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47136__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (block){
return promesa.protocols._promise((cljs.core.truth_(block)?frontend.handler.editor.delete_block_aux_BANG_.cljs$core$IFn$_invoke$arity$1(block):null));
}));
}));
} else {
return null;
}
});
frontend.extensions.pdf.assets.copy_hl_ref_BANG_ = (function frontend$extensions$pdf$assets$copy_hl_ref_BANG_(highlight,viewer){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.extensions.pdf.assets.ensure_ref_block_BANG_(frontend.state.get_current_pdf(),highlight,null)),(function (ref_block){
return promesa.protocols._promise((cljs.core.truth_(ref_block)?frontend.util.copy_to_clipboard_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.util.ref.__GT_block_ref(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(ref_block)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"owner-window","owner-window",-2139116435),frontend.extensions.pdf.windows.resolve_own_window(viewer)], 0)):null));
}));
}));
});
frontend.extensions.pdf.assets.get_zotero_local_pdf_path = (function frontend$extensions$pdf$assets$get_zotero_local_pdf_path(var_args){
var args__5882__auto__ = [];
var len__5876__auto___47248 = arguments.length;
var i__5877__auto___47249 = (0);
while(true){
if((i__5877__auto___47249 < len__5876__auto___47248)){
args__5882__auto__.push((arguments[i__5877__auto___47249]));

var G__47250 = (i__5877__auto___47249 + (1));
i__5877__auto___47249 = G__47250;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.extensions.pdf.assets.get_zotero_local_pdf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.extensions.pdf.assets.get_zotero_local_pdf_path.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__47144){
var map__47145 = p__47144;
var map__47145__$1 = cljs.core.__destructure_map(map__47145);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47145__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var zotero_config = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zotero","settings-v2","zotero/settings-v2",-666496103),"default"], null));
var zotero_data_directory = new cljs.core.Keyword(null,"zotero-data-directory","zotero-data-directory",-218308088).cljs$core$IFn$_invoke$arity$1(zotero_config);
var zotero_linked_attachment_base_directory = new cljs.core.Keyword(null,"zotero-linked-attachment-base-directory","zotero-linked-attachment-base-directory",-799816118).cljs$core$IFn$_invoke$arity$1(zotero_config);
var relative_path = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path,(14));
if(clojure.string.starts_with_QMARK_(path,"zotero-link://")){
return (""+"file://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(zotero_linked_attachment_base_directory,relative_path) : frontend.util.node_path.join.call(null,zotero_linked_attachment_base_directory,relative_path))));
} else {
if(clojure.string.starts_with_QMARK_(path,"zotero-path://")){
return (""+"file://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$3 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$3(zotero_data_directory,"storage",relative_path) : frontend.util.node_path.join.call(null,zotero_data_directory,"storage",relative_path))));
} else {
return (""+"file://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$4 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$4(zotero_data_directory,"storage",id,path) : frontend.util.node_path.join.call(null,zotero_data_directory,"storage",id,path))));

}
}
}));

(frontend.extensions.pdf.assets.get_zotero_local_pdf_path.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.extensions.pdf.assets.get_zotero_local_pdf_path.cljs$lang$applyTo = (function (seq47138){
var G__47139 = cljs.core.first(seq47138);
var seq47138__$1 = cljs.core.next(seq47138);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47139,seq47138__$1);
}));

frontend.extensions.pdf.assets.db_based_open_block_ref_BANG_ = (function frontend$extensions$pdf$assets$db_based_open_block_ref_BANG_(block){
var hl_value = new cljs.core.Keyword("logseq.property.pdf","hl-value","logseq.property.pdf/hl-value",545829402).cljs$core$IFn$_invoke$arity$1(block);
var asset = new cljs.core.Keyword("logseq.property","asset","logseq.property/asset",876856790).cljs$core$IFn$_invoke$arity$1(block);
var external_url = new cljs.core.Keyword("logseq.property.asset","external-url","logseq.property.asset/external-url",-1364775163).cljs$core$IFn$_invoke$arity$1(asset);
var file_path = (function (){var or__5142__auto__ = external_url;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (""+"../assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(asset))+".pdf");
}
})();
var file_path__$1 = ((clojure.string.starts_with_QMARK_(file_path,"zotero://"))?frontend.extensions.pdf.assets.get_zotero_local_pdf_path(new cljs.core.Keyword("logseq.property.asset","external-file-name","logseq.property.asset/external-file-name",-399529720).cljs$core$IFn$_invoke$arity$1(asset)):file_path);
if(cljs.core.truth_(asset)){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.assets._LT_make_asset_url.cljs$core$IFn$_invoke$arity$1(file_path__$1)),(function (href){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","ref-highlight","pdf/ref-highlight",-1374529267),hl_value)),(function (___21901__auto__){
return promesa.protocols._promise(frontend.state.set_current_pdf_BANG_(frontend.extensions.pdf.assets.inflate_asset.cljs$core$IFn$_invoke$arity$variadic(file_path__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"block","block",664686210),asset], null)], 0))));
}));
}));
})),(function (error){
return console.error(error);
}));
} else {
return console.error("Pdf asset no longer exists");
}
});
frontend.extensions.pdf.assets.open_block_ref_BANG_ = (function frontend$extensions$pdf$assets$open_block_ref_BANG_(block){
return frontend.extensions.pdf.assets.db_based_open_block_ref_BANG_(block);
});
frontend.extensions.pdf.assets.goto_block_ref_BANG_ = (function frontend$extensions$pdf$assets$goto_block_ref_BANG_(p__47159){
var map__47160 = p__47159;
var map__47160__$1 = cljs.core.__destructure_map(map__47160);
var hl = map__47160__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47160__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(id)){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.extensions.pdf.assets.ensure_ref_block_BANG_(frontend.state.get_current_pdf(),hl,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edit-block?","edit-block?",-310383789),false], null))),(function (___21901__auto__){
return promesa.protocols._promise(reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))], null)));
}));
}));
} else {
return null;
}
});
frontend.extensions.pdf.assets.goto_annotations_page_BANG_ = (function frontend$extensions$pdf$assets$goto_annotations_page_BANG_(var_args){
var G__47165 = arguments.length;
switch (G__47165) {
case 1:
return frontend.extensions.pdf.assets.goto_annotations_page_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.extensions.pdf.assets.goto_annotations_page_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.extensions.pdf.assets.goto_annotations_page_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (current){
return frontend.extensions.pdf.assets.goto_annotations_page_BANG_.cljs$core$IFn$_invoke$arity$2(current,null);
}));

(frontend.extensions.pdf.assets.goto_annotations_page_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (current,id){
if(cljs.core.truth_(current)){
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(current))], null),(cljs.core.truth_(id)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),(""+"block-content-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._PLUS_)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))], null):null));
} else {
return null;
}
}));

(frontend.extensions.pdf.assets.goto_annotations_page_BANG_.cljs$lang$maxFixedArity = 2);

frontend.extensions.pdf.assets.open_lightbox_BANG_ = (function frontend$extensions$pdf$assets$open_lightbox_BANG_(e){
var images = document.querySelectorAll(".hl-area img");
var images__$1 = cljs.core.to_array(images);
var images__$2 = (((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((images__$1).length),(1)))))?(function (){var image = e.target.closest(".hl-area");
var image__$1 = image.querySelector("img");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.reverse(cljs.core.split_with(cljs.core.complement(cljs.core.PersistentHashSet.createAsIfByAssoc([image__$1])),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__47181_SHARP_){
return p1__47181_SHARP_.y;
}),(function (p1__47182_SHARP_){
return p1__47182_SHARP_.x;
})),images__$1))));
})():images__$1);
var images__$3 = (function (){var iter__5628__auto__ = (function frontend$extensions$pdf$assets$open_lightbox_BANG__$_iter__47190(s__47191){
return (new cljs.core.LazySeq(null,(function (){
var s__47191__$1 = s__47191;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__47191__$1);
if(temp__5825__auto__){
var s__47191__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47191__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__47191__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__47193 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__47192 = (0);
while(true){
if((i__47192 < size__5627__auto__)){
var it = cljs.core._nth(c__5626__auto__,i__47192);
cljs.core.chunk_append(b__47193,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),it.src,new cljs.core.Keyword(null,"w","w",354169001),it.naturalWidth,new cljs.core.Keyword(null,"h","h",1109658740),it.naturalHeight], null));

var G__47256 = (i__47192 + (1));
i__47192 = G__47256;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47193),frontend$extensions$pdf$assets$open_lightbox_BANG__$_iter__47190(cljs.core.chunk_rest(s__47191__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47193),null);
}
} else {
var it = cljs.core.first(s__47191__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),it.src,new cljs.core.Keyword(null,"w","w",354169001),it.naturalWidth,new cljs.core.Keyword(null,"h","h",1109658740),it.naturalHeight], null),frontend$extensions$pdf$assets$open_lightbox_BANG__$_iter__47190(cljs.core.rest(s__47191__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(images__$2);
})();
if(cljs.core.seq(images__$3)){
return frontend.extensions.lightbox.preview_images_BANG_(images__$3);
} else {
return null;
}
});
frontend.extensions.pdf.assets.area_display = (function (){var render_fn__31744__auto__ = (function frontend$extensions$pdf$assets$area_display(block){
var vec__47202 = logseq.shui.hooks.use_state(null);
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47202,(0),null);
var set_src_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47202,(1),null);
var temp__5825__auto__ = (function (){var and__5140__auto__ = block;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.handler.assets.get_area_block_asset_url(block);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var asset_path_SINGLEQUOTE_ = temp__5825__auto__;
logseq.shui.hooks.use_effect_BANG_((function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.assets._LT_make_asset_url.cljs$core$IFn$_invoke$arity$1(asset_path_SINGLEQUOTE_)),(function (asset_path){
return promesa.protocols._promise((set_src_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_src_BANG_.cljs$core$IFn$_invoke$arity$1(asset_path) : set_src_BANG_.call(null,asset_path)));
}));
}));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [asset_path_SINGLEQUOTE_], null));

if(cljs.core.truth_(src)){
var asset_block = (function (){var G__47209 = block;
if((G__47209 == null)){
return null;
} else {
return new cljs.core.Keyword("logseq.property.pdf","hl-image","logseq.property.pdf/hl-image",137767009).cljs$core$IFn$_invoke$arity$1(G__47209);
}
})();
var resize_metadata = (function (){var G__47211 = asset_block;
if((G__47211 == null)){
return null;
} else {
return new cljs.core.Keyword("logseq.property.asset","resize-metadata","logseq.property.asset/resize-metadata",-1297523055).cljs$core$IFn$_invoke$arity$1(G__47211);
}
})();
var style = (function (){var temp__5825__auto____$1 = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(resize_metadata);
if(cljs.core.truth_(temp__5825__auto____$1)){
var w = temp__5825__auto____$1;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),w], null)], null);
} else {
return null;
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hl-area","div.hl-area",400249084),style,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.asset-container","div.asset-container",1221095823),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(style)?"100%":"auto")], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.asset-action-bar","span.asset-action-bar",-297372259),(function (){var temp__5825__auto____$1 = (function (){var G__47212 = asset_block;
if((G__47212 == null)){
return null;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(G__47212);
}
})();
if(cljs.core.truth_(temp__5825__auto____$1)){
var asset_uuid = temp__5825__auto____$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.asset-action-btn","button.asset-action-btn",-1412633723),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","ref-block","asset/ref-block",-2025624917)], 0)),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"-1",new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),frontend.util.stop,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(asset_uuid);
})], null),frontend.ui.icon("file-symlink")], null);
} else {
return null;
}
})(),((frontend.config.publishing_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.asset-action-btn","button.asset-action-btn",-1412633723),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","copy","asset/copy",-867708909)], 0)),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"-1",new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),frontend.util.stop,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

return promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.util.copy_image_to_clipboard(logseq.common.config.remove_asset_protocol(src)),(function (){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("notification","copied","notification/copied",-1717318998)], 0)),new cljs.core.Keyword(null,"success","success",1890645906));
}));
})], null),frontend.ui.icon("copy")], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.asset-action-btn","button.asset-action-btn",-1412633723),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","maximize","asset/maximize",-20255358)], 0)),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"-1",new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),frontend.util.stop,new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.extensions.pdf.assets.open_lightbox_BANG_], null),frontend.ui.icon("maximize")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.w-full","img.w-full",-1776690076),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),src], null)], null)], null)], null);
} else {
return null;
}
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$pdf$assets$area_display__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47214 = cljs.core.first(args__31746__auto__);
var G__47215 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47214,G__47215) : io.factorhouse.hsx.core.obj_get.call(null,G__47214,G__47215));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"area-display","area-display",839983385,null),args__31746__auto__),frontend$extensions$pdf$assets$area_display,args__31746__auto__,null);
}
};
var frontend$extensions$pdf$assets$area_display = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47259__i = 0, G__47259__a = new Array(arguments.length -  0);
while (G__47259__i < G__47259__a.length) {G__47259__a[G__47259__i] = arguments[G__47259__i + 0]; ++G__47259__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47259__a,0,null);
} 
return frontend$extensions$pdf$assets$area_display__delegate.call(this,args__31746__auto__);};
frontend$extensions$pdf$assets$area_display.cljs$lang$maxFixedArity = 0;
frontend$extensions$pdf$assets$area_display.cljs$lang$applyTo = (function (arglist__47260){
var args__31746__auto__ = cljs.core.seq(arglist__47260);
return frontend$extensions$pdf$assets$area_display__delegate(args__31746__auto__);
});
frontend$extensions$pdf$assets$area_display.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$pdf$assets$area_display__delegate;
return frontend$extensions$pdf$assets$area_display;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47216 = comp__31745__auto__;
var G__47217 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47216,G__47217) : io.factorhouse.hsx.core.react_memo.call(null,G__47216,G__47217));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"area-display");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.extensions.pdf.assets.js.map
