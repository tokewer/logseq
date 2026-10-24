goog.provide('frontend.extensions.pdf.utils');
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.pdf !== 'undefined') && (typeof frontend.extensions.pdf.utils !== 'undefined') && (typeof frontend.extensions.pdf.utils.MAX_SCALE !== 'undefined')){
} else {
frontend.extensions.pdf.utils.MAX_SCALE = 5.0;
}
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.pdf !== 'undefined') && (typeof frontend.extensions.pdf.utils !== 'undefined') && (typeof frontend.extensions.pdf.utils.MIN_SCALE !== 'undefined')){
} else {
frontend.extensions.pdf.utils.MIN_SCALE = 0.25;
}
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.pdf !== 'undefined') && (typeof frontend.extensions.pdf.utils !== 'undefined') && (typeof frontend.extensions.pdf.utils.DELTA_SCALE !== 'undefined')){
} else {
frontend.extensions.pdf.utils.DELTA_SCALE = 1.05;
}
frontend.extensions.pdf.utils.hls_file_QMARK_ = (function frontend$extensions$pdf$utils$hls_file_QMARK_(filename){
var and__5140__auto__ = filename;
if(cljs.core.truth_(and__5140__auto__)){
return ((typeof filename === 'string') && (clojure.string.starts_with_QMARK_(filename,"hls__")));
} else {
return and__5140__auto__;
}
});
frontend.extensions.pdf.utils.get_bounding_rect = (function frontend$extensions$pdf$utils$get_bounding_rect(rects){
return cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(module$frontend$extensions$pdf$utils.getBoundingRect(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(rects)));
});
frontend.extensions.pdf.utils.viewport_to_scaled = (function frontend$extensions$pdf$utils$viewport_to_scaled(bounding,viewport){
return cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(module$frontend$extensions$pdf$utils.viewportToScaled(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(bounding),viewport));
});
frontend.extensions.pdf.utils.scaled_to_viewport = (function frontend$extensions$pdf$utils$scaled_to_viewport(bounding,viewport){
return cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(module$frontend$extensions$pdf$utils.scaledToViewport(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(bounding),viewport));
});
frontend.extensions.pdf.utils.optimize_client_reacts = (function frontend$extensions$pdf$utils$optimize_client_reacts(rects){
if(cljs.core.seq(rects)){
return cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(module$frontend$extensions$pdf$utils.optimizeClientRects(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(rects)));
} else {
return null;
}
});
frontend.extensions.pdf.utils.vw_to_scaled_pos = (function frontend$extensions$pdf$utils$vw_to_scaled_pos(viewer,p__63450){
var map__63451 = p__63450;
var map__63451__$1 = cljs.core.__destructure_map(map__63451);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63451__$1,new cljs.core.Keyword(null,"page","page",849072397));
var bounding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63451__$1,new cljs.core.Keyword(null,"bounding","bounding",-2125178263));
var rects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63451__$1,new cljs.core.Keyword(null,"rects","rects",1714526167));
var temp__5825__auto__ = (function (){var G__63453 = viewer;
var G__63453__$1 = (((G__63453 == null))?null:G__63453.getPageView((page - (1))));
if((G__63453__$1 == null)){
return null;
} else {
return G__63453__$1.viewport;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var viewport = temp__5825__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bounding","bounding",-2125178263),frontend.extensions.pdf.utils.viewport_to_scaled(bounding,viewport),new cljs.core.Keyword(null,"rects","rects",1714526167),(function (){var iter__5628__auto__ = (function frontend$extensions$pdf$utils$vw_to_scaled_pos_$_iter__63456(s__63457){
return (new cljs.core.LazySeq(null,(function (){
var s__63457__$1 = s__63457;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__63457__$1);
if(temp__5825__auto____$1){
var s__63457__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__63457__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__63457__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__63459 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__63458 = (0);
while(true){
if((i__63458 < size__5627__auto__)){
var rect = cljs.core._nth(c__5626__auto__,i__63458);
cljs.core.chunk_append(b__63459,frontend.extensions.pdf.utils.viewport_to_scaled(rect,viewport));

var G__63518 = (i__63458 + (1));
i__63458 = G__63518;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63459),frontend$extensions$pdf$utils$vw_to_scaled_pos_$_iter__63456(cljs.core.chunk_rest(s__63457__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63459),null);
}
} else {
var rect = cljs.core.first(s__63457__$2);
return cljs.core.cons(frontend.extensions.pdf.utils.viewport_to_scaled(rect,viewport),frontend$extensions$pdf$utils$vw_to_scaled_pos_$_iter__63456(cljs.core.rest(s__63457__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(rects);
})(),new cljs.core.Keyword(null,"page","page",849072397),page], null);
} else {
return null;
}
});
frontend.extensions.pdf.utils.scaled_to_vw_pos = (function frontend$extensions$pdf$utils$scaled_to_vw_pos(viewer,p__63464){
var map__63465 = p__63464;
var map__63465__$1 = cljs.core.__destructure_map(map__63465);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63465__$1,new cljs.core.Keyword(null,"page","page",849072397));
var bounding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63465__$1,new cljs.core.Keyword(null,"bounding","bounding",-2125178263));
var rects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63465__$1,new cljs.core.Keyword(null,"rects","rects",1714526167));
var temp__5825__auto__ = (function (){var G__63466 = viewer;
var G__63466__$1 = (((G__63466 == null))?null:G__63466.getPageView((page - (1))));
if((G__63466__$1 == null)){
return null;
} else {
return G__63466__$1.viewport;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var viewport = temp__5825__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bounding","bounding",-2125178263),frontend.extensions.pdf.utils.scaled_to_viewport(bounding,viewport),new cljs.core.Keyword(null,"rects","rects",1714526167),(function (){var iter__5628__auto__ = (function frontend$extensions$pdf$utils$scaled_to_vw_pos_$_iter__63468(s__63469){
return (new cljs.core.LazySeq(null,(function (){
var s__63469__$1 = s__63469;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__63469__$1);
if(temp__5825__auto____$1){
var s__63469__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__63469__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__63469__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__63471 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__63470 = (0);
while(true){
if((i__63470 < size__5627__auto__)){
var rect = cljs.core._nth(c__5626__auto__,i__63470);
cljs.core.chunk_append(b__63471,frontend.extensions.pdf.utils.scaled_to_viewport(rect,viewport));

var G__63519 = (i__63470 + (1));
i__63470 = G__63519;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63471),frontend$extensions$pdf$utils$scaled_to_vw_pos_$_iter__63468(cljs.core.chunk_rest(s__63469__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63471),null);
}
} else {
var rect = cljs.core.first(s__63469__$2);
return cljs.core.cons(frontend.extensions.pdf.utils.scaled_to_viewport(rect,viewport),frontend$extensions$pdf$utils$scaled_to_vw_pos_$_iter__63468(cljs.core.rest(s__63469__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(rects);
})(),new cljs.core.Keyword(null,"page","page",849072397),page], null);
} else {
return null;
}
});
frontend.extensions.pdf.utils.resolve_hls_layer_BANG_ = (function frontend$extensions$pdf$utils$resolve_hls_layer_BANG_(viewer,page){
var temp__5825__auto__ = (function (){var G__63477 = viewer;
var G__63477__$1 = (((G__63477 == null))?null:G__63477.getPageView((page - (1))));
if((G__63477__$1 == null)){
return null;
} else {
return G__63477__$1.textLayer;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var text_layer = temp__5825__auto__;
var cnt = text_layer.div;
var cls = "extensions__pdf-hls-layer";
var doc = document;
var layer = cnt.querySelector((""+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cls)));
if(cljs.core.not(layer)){
var layer__$1 = doc.createElement("div");
(layer__$1.className = cls);

cnt.appendChild(layer__$1);

return layer__$1;
} else {
return layer;
}
} else {
return null;
}
});
frontend.extensions.pdf.utils.scroll_to_highlight = (function frontend$extensions$pdf$utils$scroll_to_highlight(viewer,hl){
var temp__5825__auto__ = cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(hl);
if(cljs.core.truth_(temp__5825__auto__)){
var js_hl = temp__5825__auto__;
return module$frontend$extensions$pdf$utils.scrollToHighlight(viewer,js_hl);
} else {
return null;
}
});
frontend.extensions.pdf.utils.zoom_in_viewer = (function frontend$extensions$pdf$utils$zoom_in_viewer(viewer){
var cur_scale = viewer.currentScale;
if((cur_scale < frontend.extensions.pdf.utils.MAX_SCALE)){
var new_scale = (cur_scale * frontend.extensions.pdf.utils.DELTA_SCALE).toFixed((2));
var new_scale__$1 = (Math.ceil((new_scale * (10))) / (10));
var new_scale__$2 = cljs.core.min.cljs$core$IFn$_invoke$arity$2(frontend.extensions.pdf.utils.MAX_SCALE,new_scale__$1);
return (viewer.currentScale = new_scale__$2);
} else {
return null;
}
});
frontend.extensions.pdf.utils.zoom_out_viewer = (function frontend$extensions$pdf$utils$zoom_out_viewer(viewer){
var cur_scale = viewer.currentScale;
if((cur_scale > frontend.extensions.pdf.utils.MIN_SCALE)){
var new_scale = (cur_scale / frontend.extensions.pdf.utils.DELTA_SCALE).toFixed((2));
var new_scale__$1 = (Math.floor((new_scale * (10))) / (10));
var new_scale__$2 = cljs.core.max.cljs$core$IFn$_invoke$arity$2(frontend.extensions.pdf.utils.MIN_SCALE,new_scale__$1);
return (viewer.currentScale = new_scale__$2);
} else {
return null;
}
});
frontend.extensions.pdf.utils.get_meta_data$ = (function frontend$extensions$pdf$utils$get_meta_data$(viewer){
var temp__5825__auto__ = (function (){var and__5140__auto__ = viewer;
if(cljs.core.truth_(and__5140__auto__)){
return viewer.pdfDocument;
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var doc = temp__5825__auto__;
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(doc.getMetadata(),(function (r){
console.debug("[metadata] ",r);

var temp__5825__auto____$1 = (function (){var and__5140__auto__ = r;
if(cljs.core.truth_(and__5140__auto__)){
return r.info;
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto____$1)){
var info = temp__5825__auto____$1;
var G__63478 = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(info);
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__63478) : resolve.call(null,G__63478));
} else {
return null;
}
})),(function (e){
(resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(null) : resolve.call(null,null));

return console.error(e);
}));
}));
} else {
return null;
}
});
frontend.extensions.pdf.utils.clear_all_selection = (function frontend$extensions$pdf$utils$clear_all_selection(var_args){
var G__63496 = arguments.length;
switch (G__63496) {
case 0:
return frontend.extensions.pdf.utils.clear_all_selection.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.extensions.pdf.utils.clear_all_selection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.extensions.pdf.utils.clear_all_selection.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.extensions.pdf.utils.clear_all_selection.cljs$core$IFn$_invoke$arity$1(window);
}));

(frontend.extensions.pdf.utils.clear_all_selection.cljs$core$IFn$_invoke$arity$1 = (function (win){
var G__63497 = win;
var G__63497__$1 = (((G__63497 == null))?null:G__63497.getSelection());
if((G__63497__$1 == null)){
return null;
} else {
return G__63497__$1.removeAllRanges();
}
}));

(frontend.extensions.pdf.utils.clear_all_selection.cljs$lang$maxFixedArity = 1);

frontend.extensions.pdf.utils.adjust_viewer_size_BANG_ = (function frontend$extensions$pdf$utils$adjust_viewer_size_BANG_(viewer){
var bus = viewer.eventBus;
return bus.dispatch("resizing");
});
frontend.extensions.pdf.utils.reset_viewer_auto_BANG_ = (function frontend$extensions$pdf$utils$reset_viewer_auto_BANG_(viewer){
return (viewer.currentScaleValue = "auto");
});
frontend.extensions.pdf.utils.fix_nested_js = (function frontend$extensions$pdf$utils$fix_nested_js(its){
if(cljs.core.sequential_QMARK_(its)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__63498_SHARP_){
if(cljs.core.map_QMARK_(p1__63498_SHARP_)){
return p1__63498_SHARP_;
} else {
return cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(p1__63498_SHARP_);
}
}),its);
} else {
return null;
}
});
frontend.extensions.pdf.utils.gen_uuid = (function frontend$extensions$pdf$utils$gen_uuid(){
return logseq.common.uuid.gen_uuid.cljs$core$IFn$_invoke$arity$0();
});
frontend.extensions.pdf.utils.get_page_from_el = (function frontend$extensions$pdf$utils$get_page_from_el(el){
var temp__5825__auto__ = (function (){var and__5140__auto__ = el;
if(cljs.core.truth_(and__5140__auto__)){
return el.closest(".page");
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var page_el = temp__5825__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page-number","page-number",556880104),page_el.dataset.pageNumber,new cljs.core.Keyword(null,"page-el","page-el",-124721580),page_el], null);
} else {
return null;
}
});
frontend.extensions.pdf.utils.get_page_from_range = (function frontend$extensions$pdf$utils$get_page_from_range(r){
var temp__5825__auto__ = (function (){var and__5140__auto__ = r;
if(cljs.core.truth_(and__5140__auto__)){
return r.startContainer.parentElement;
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var parent_el = temp__5825__auto__;
return frontend.extensions.pdf.utils.get_page_from_el(parent_el);
} else {
return null;
}
});
frontend.extensions.pdf.utils.get_range_rects_LT__page_cnt = (function frontend$extensions$pdf$utils$get_range_rects_LT__page_cnt(r,page_cnt){
var rge_rects = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(r.getClientRects());
var cnt_offset = page_cnt.getBoundingClientRect();
if(cljs.core.seq(rge_rects)){
var rects = (function (){var iter__5628__auto__ = (function frontend$extensions$pdf$utils$get_range_rects_LT__page_cnt_$_iter__63500(s__63501){
return (new cljs.core.LazySeq(null,(function (){
var s__63501__$1 = s__63501;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__63501__$1);
if(temp__5825__auto__){
var s__63501__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63501__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__63501__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__63503 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__63502 = (0);
while(true){
if((i__63502 < size__5627__auto__)){
var rect = cljs.core._nth(c__5626__auto__,i__63502);
if(cljs.core.truth_((function (){var and__5140__auto__ = rect;
if(cljs.core.truth_(and__5140__auto__)){
return (((!((rect.width === (0))))) && ((!((rect.height === (0))))));
} else {
return and__5140__auto__;
}
})())){
cljs.core.chunk_append(b__63503,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),((rect.top + page_cnt.scrollTop) - cnt_offset.top),new cljs.core.Keyword(null,"left","left",-399115937),((rect.left + page_cnt.scrollLeft) - cnt_offset.left),new cljs.core.Keyword(null,"width","width",-384071477),rect.width,new cljs.core.Keyword(null,"height","height",1025178622),rect.height], null));

var G__63540 = (i__63502 + (1));
i__63502 = G__63540;
continue;
} else {
var G__63541 = (i__63502 + (1));
i__63502 = G__63541;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63503),frontend$extensions$pdf$utils$get_range_rects_LT__page_cnt_$_iter__63500(cljs.core.chunk_rest(s__63501__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63503),null);
}
} else {
var rect = cljs.core.first(s__63501__$2);
if(cljs.core.truth_((function (){var and__5140__auto__ = rect;
if(cljs.core.truth_(and__5140__auto__)){
return (((!((rect.width === (0))))) && ((!((rect.height === (0))))));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),((rect.top + page_cnt.scrollTop) - cnt_offset.top),new cljs.core.Keyword(null,"left","left",-399115937),((rect.left + page_cnt.scrollLeft) - cnt_offset.left),new cljs.core.Keyword(null,"width","width",-384071477),rect.width,new cljs.core.Keyword(null,"height","height",1025178622),rect.height], null),frontend$extensions$pdf$utils$get_range_rects_LT__page_cnt_$_iter__63500(cljs.core.rest(s__63501__$2)));
} else {
var G__63542 = cljs.core.rest(s__63501__$2);
s__63501__$1 = G__63542;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(rge_rects);
})();
return frontend.extensions.pdf.utils.optimize_client_reacts(rects);
} else {
return null;
}
});
frontend.extensions.pdf.utils.fix_selection_text_breakline = (function frontend$extensions$pdf$utils$fix_selection_text_breakline(text){
if(clojure.string.blank_QMARK_(text)){
return null;
} else {
var sp = "|#|";
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(text,/[\r\n]+/,sp),(""+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sp)),""),/\|#\|([a-zA-Z_])/," $1"),sp,"");
}
});
frontend.extensions.pdf.utils.fix_local_asset_pagename = (function frontend$extensions$pdf$utils$fix_local_asset_pagename(filename){
if(((typeof filename === 'string') && ((!(clojure.string.blank_QMARK_(filename)))))){
var local_asset_QMARK_ = cljs.core.re_find(/[0-9]{13}_\d$/,filename);
var hls_QMARK_ = frontend.extensions.pdf.utils.hls_file_QMARK_(filename);
var len = cljs.core.count(filename);
if(cljs.core.truth_((function (){var or__5142__auto__ = local_asset_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return hls_QMARK_;
}
})())){
return clojure.string.trimr(clojure.string.replace(clojure.string.replace(clojure.string.replace(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(filename,(0),(cljs.core.truth_(local_asset_QMARK_)?(len - (15)):len)),/^hls__/,""),/__[-\d]+$/,""),"_"," "));
} else {
return filename;
}
} else {
return filename;
}
});
frontend.extensions.pdf.utils.next_page = (function frontend$extensions$pdf$utils$next_page(){
try{return cljs.core.js_invoke(window.lsActivePdfViewer,"nextPage");
}catch (e63510){var _e = e63510;
return null;
}});
frontend.extensions.pdf.utils.prev_page = (function frontend$extensions$pdf$utils$prev_page(){
try{return cljs.core.js_invoke(window.lsActivePdfViewer,"previousPage");
}catch (e63511){var _e = e63511;
return null;
}});
frontend.extensions.pdf.utils.open_finder = (function frontend$extensions$pdf$utils$open_finder(){
try{var temp__5825__auto__ = document.querySelector(".extensions__pdf-toolbar a[title=Search]");
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
return el.click();
} else {
return null;
}
}catch (e63513){if((e63513 instanceof Error)){
var _e = e63513;
return null;
} else {
throw e63513;

}
}});

//# sourceMappingURL=frontend.extensions.pdf.utils.js.map
