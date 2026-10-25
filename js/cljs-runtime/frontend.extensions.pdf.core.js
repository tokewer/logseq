goog.provide('frontend.extensions.pdf.core');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});

frontend.extensions.pdf.core._STAR_highlight_last_color = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"yellow","yellow",-881035449));
frontend.extensions.pdf.core.open_external_win_BANG_ = (function frontend$extensions$pdf$core$open_external_win_BANG_(pdf_current){
return frontend.extensions.pdf.windows.open_pdf_in_new_window_BANG_(frontend.extensions.pdf.core.system_embed_playground,pdf_current);
});
frontend.extensions.pdf.core.reset_current_pdf_BANG_ = (function frontend$extensions$pdf$core$reset_current_pdf_BANG_(){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","current","pdf/current",-1087936477),null);
});
frontend.extensions.pdf.core.pdf_highlight_finder = (function (){var render_fn__31744__auto__ = (function frontend$extensions$pdf$core$pdf_highlight_finder(viewer){
var _STAR_mounted_QMARK_ = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(false) : logseq.shui.hooks.use_ref.call(null,false));
var ref_hl = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","ref-highlight","pdf/ref-highlight",-1374529267)], null));
var ref_hl_key = (cljs.core.truth_(ref_hl)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(ref_hl))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(ref_hl))):null);
logseq.shui.hooks.use_effect_BANG_((function (){
var scroll_timer = (cljs.core.truth_((function (){var and__5140__auto__ = viewer;
if(cljs.core.truth_(and__5140__auto__)){
return ref_hl;
} else {
return and__5140__auto__;
}
})())?setTimeout((function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(ref_hl))){
return frontend.extensions.pdf.utils.scroll_to_highlight(viewer,ref_hl);
} else {
return (viewer.currentPageNumber = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(ref_hl);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (1);
}
})());
}
}),(cljs.core.truth_(logseq.shui.hooks.deref(_STAR_mounted_QMARK_))?(50):(500))):null);
var clear_timer = (cljs.core.truth_((function (){var and__5140__auto__ = viewer;
if(cljs.core.truth_(and__5140__auto__)){
return ref_hl;
} else {
return and__5140__auto__;
}
})())?setTimeout((function (){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","ref-highlight","pdf/ref-highlight",-1374529267),null);
}),(1000)):null);
logseq.shui.hooks.set_ref_BANG_(_STAR_mounted_QMARK_,true);

return (function (){
if(cljs.core.truth_(scroll_timer)){
clearTimeout(scroll_timer);
} else {
}

if(cljs.core.truth_(clear_timer)){
return clearTimeout(clear_timer);
} else {
return null;
}
});
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [viewer,ref_hl_key], null));

return null;
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$pdf$core$pdf_highlight_finder__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__58449 = cljs.core.first(args__31746__auto__);
var G__58450 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__58449,G__58450) : io.factorhouse.hsx.core.obj_get.call(null,G__58449,G__58450));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"pdf-highlight-finder","pdf-highlight-finder",198496558,null),args__31746__auto__),frontend$extensions$pdf$core$pdf_highlight_finder,args__31746__auto__,null);
}
};
var frontend$extensions$pdf$core$pdf_highlight_finder = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58697__i = 0, G__58697__a = new Array(arguments.length -  0);
while (G__58697__i < G__58697__a.length) {G__58697__a[G__58697__i] = arguments[G__58697__i + 0]; ++G__58697__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58697__a,0,null);
} 
return frontend$extensions$pdf$core$pdf_highlight_finder__delegate.call(this,args__31746__auto__);};
frontend$extensions$pdf$core$pdf_highlight_finder.cljs$lang$maxFixedArity = 0;
frontend$extensions$pdf$core$pdf_highlight_finder.cljs$lang$applyTo = (function (arglist__58698){
var args__31746__auto__ = cljs.core.seq(arglist__58698);
return frontend$extensions$pdf$core$pdf_highlight_finder__delegate(args__31746__auto__);
});
frontend$extensions$pdf$core$pdf_highlight_finder.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$pdf$core$pdf_highlight_finder__delegate;
return frontend$extensions$pdf$core$pdf_highlight_finder;
})()
;
var memo_comp__31747__auto__ = (function (){var G__58451 = comp__31745__auto__;
var G__58452 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__58451,G__58452) : io.factorhouse.hsx.core.react_memo.call(null,G__58451,G__58452));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"pdf-highlight-finder");

return comp__31745__auto__;
})();
frontend.extensions.pdf.core.pdf_page_finder = (function (){var render_fn__31744__auto__ = (function frontend$extensions$pdf$core$pdf_page_finder(viewer){
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(viewer)){
var temp__5825__auto__ = frontend.state.get_state(new cljs.core.Keyword("pdf","current","pdf/current",-1087936477));
if(cljs.core.truth_(temp__5825__auto__)){
var _ = temp__5825__auto__;
var active_hl = frontend.state.get_state(new cljs.core.Keyword("pdf","ref-highlight","pdf/ref-highlight",-1374529267));
if(cljs.core.truth_(active_hl)){
return null;
} else {
return viewer.eventBus.on(cljs.core.name(new cljs.core.Keyword(null,"restore-last-page","restore-last-page",-1367707745)),(function (last_page){
if(cljs.core.truth_(last_page)){
return (viewer.currentPageNumber = frontend.util.safe_parse_int(last_page));
} else {
return null;
}
}));
}
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [viewer], null));

return null;
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$pdf$core$pdf_page_finder__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__58453 = cljs.core.first(args__31746__auto__);
var G__58454 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__58453,G__58454) : io.factorhouse.hsx.core.obj_get.call(null,G__58453,G__58454));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"pdf-page-finder","pdf-page-finder",1079300001,null),args__31746__auto__),frontend$extensions$pdf$core$pdf_page_finder,args__31746__auto__,null);
}
};
var frontend$extensions$pdf$core$pdf_page_finder = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58699__i = 0, G__58699__a = new Array(arguments.length -  0);
while (G__58699__i < G__58699__a.length) {G__58699__a[G__58699__i] = arguments[G__58699__i + 0]; ++G__58699__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58699__a,0,null);
} 
return frontend$extensions$pdf$core$pdf_page_finder__delegate.call(this,args__31746__auto__);};
frontend$extensions$pdf$core$pdf_page_finder.cljs$lang$maxFixedArity = 0;
frontend$extensions$pdf$core$pdf_page_finder.cljs$lang$applyTo = (function (arglist__58700){
var args__31746__auto__ = cljs.core.seq(arglist__58700);
return frontend$extensions$pdf$core$pdf_page_finder__delegate(args__31746__auto__);
});
frontend$extensions$pdf$core$pdf_page_finder.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$pdf$core$pdf_page_finder__delegate;
return frontend$extensions$pdf$core$pdf_page_finder;
})()
;
var memo_comp__31747__auto__ = (function (){var G__58455 = comp__31745__auto__;
var G__58456 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__58455,G__58456) : io.factorhouse.hsx.core.react_memo.call(null,G__58455,G__58456));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"pdf-page-finder");

return comp__31745__auto__;
})();
/**
 * Watches for changes in the pdf container's width and adjusts the viewer.
 */
frontend.extensions.pdf.core.pdf_resizer = (function (){var render_fn__31744__auto__ = (function frontend$extensions$pdf$core$pdf_resizer(viewer){
var el_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var adjust_main_size_BANG_ = (function (){var G__58457 = (function (width){
var root_el = document.documentElement;
root_el.style.setProperty("--ph-view-container-width",width);

return frontend.extensions.pdf.utils.adjust_viewer_size_BANG_(viewer);
});
var G__58458 = (200);
return (frontend.util.debounce.cljs$core$IFn$_invoke$arity$2 ? frontend.util.debounce.cljs$core$IFn$_invoke$arity$2(G__58457,G__58458) : frontend.util.debounce.call(null,G__58457,G__58458));
})();
var group_id = viewer.$groupIdentity;
logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto___58701 = (function (){var and__5140__auto__ = cljs.core.fn_QMARK_(window.interact);
if(and__5140__auto__){
return logseq.shui.hooks.deref(el_ref);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto___58701)){
var el_58702 = temp__5825__auto___58701;
interact(el_58702).draggable(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"move","move",-2110884309),(function (e){
var width = document.documentElement.clientWidth;
var offset = e.rect.left;
var el_ratio = (offset / width).toFixed((6));
var target_el = document.getElementById((""+"pdf-layout-container_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_id)));
if(cljs.core.truth_(target_el)){
var width__$1 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.min.cljs$core$IFn$_invoke$arity$2(cljs.core.max.cljs$core$IFn$_invoke$arity$2((el_ratio * (100)),(20)),(80)))+"vw");
target_el.style.setProperty("width",width__$1);

return (adjust_main_size_BANG_.cljs$core$IFn$_invoke$arity$1 ? adjust_main_size_BANG_.cljs$core$IFn$_invoke$arity$1(width__$1) : adjust_main_size_BANG_.call(null,width__$1));
} else {
return null;
}
})], null)], null))).styleCursor(false).on("dragstart",(function (){
return document.documentElement.classList.add("is-resizing-buf");
})).on("dragend",(function (){
return document.documentElement.classList.remove("is-resizing-buf");
}));
} else {
}

return (function (){
return cljs.core.List.EMPTY;
});
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.extensions__pdf-resizer","span.extensions__pdf-resizer",-1697614873),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),el_ref], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$pdf$core$pdf_resizer__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__58459 = cljs.core.first(args__31746__auto__);
var G__58460 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__58459,G__58460) : io.factorhouse.hsx.core.obj_get.call(null,G__58459,G__58460));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"pdf-resizer","pdf-resizer",-252103132,null),args__31746__auto__),frontend$extensions$pdf$core$pdf_resizer,args__31746__auto__,null);
}
};
var frontend$extensions$pdf$core$pdf_resizer = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58703__i = 0, G__58703__a = new Array(arguments.length -  0);
while (G__58703__i < G__58703__a.length) {G__58703__a[G__58703__i] = arguments[G__58703__i + 0]; ++G__58703__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58703__a,0,null);
} 
return frontend$extensions$pdf$core$pdf_resizer__delegate.call(this,args__31746__auto__);};
frontend$extensions$pdf$core$pdf_resizer.cljs$lang$maxFixedArity = 0;
frontend$extensions$pdf$core$pdf_resizer.cljs$lang$applyTo = (function (arglist__58704){
var args__31746__auto__ = cljs.core.seq(arglist__58704);
return frontend$extensions$pdf$core$pdf_resizer__delegate(args__31746__auto__);
});
frontend$extensions$pdf$core$pdf_resizer.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$pdf$core$pdf_resizer__delegate;
return frontend$extensions$pdf$core$pdf_resizer;
})()
;
var memo_comp__31747__auto__ = (function (){var G__58461 = comp__31745__auto__;
var G__58462 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__58461,G__58462) : io.factorhouse.hsx.core.react_memo.call(null,G__58461,G__58462));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"pdf-resizer");

return comp__31745__auto__;
})();
/**
 * The contextual menu which appears over a text selection and allows e.g. creating a highlight.
 */
frontend.extensions.pdf.core.pdf_highlights_ctx_menu = (function (){var render_fn__31744__auto__ = (function frontend$extensions$pdf$core$pdf_highlights_ctx_menu(viewer,p__58463,p__58464){
var map__58465 = p__58463;
var map__58465__$1 = cljs.core.__destructure_map(map__58465);
var highlight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58465__$1,new cljs.core.Keyword(null,"highlight","highlight",-800930873));
var point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58465__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58465__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var map__58466 = p__58464;
var map__58466__$1 = cljs.core.__destructure_map(map__58466);
var clear_ctx_menu_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58466__$1,new cljs.core.Keyword(null,"clear-ctx-menu!","clear-ctx-menu!",1081183125));
var add_hl_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58466__$1,new cljs.core.Keyword(null,"add-hl!","add-hl!",-832546833));
var upd_hl_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58466__$1,new cljs.core.Keyword(null,"upd-hl!","upd-hl!",-275023274));
var del_hl_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58466__$1,new cljs.core.Keyword(null,"del-hl!","del-hl!",-703533207));
logseq.shui.hooks.use_effect_BANG_((function (){
var cb = (function (){
return (clear_ctx_menu_BANG_.cljs$core$IFn$_invoke$arity$0 ? clear_ctx_menu_BANG_.cljs$core$IFn$_invoke$arity$0() : clear_ctx_menu_BANG_.call(null));
});
var doc = frontend.extensions.pdf.windows.resolve_own_document(viewer);
setTimeout((function (){
return doc.addEventListener("click",cb);
}));

return (function (){
return doc.removeEventListener("click",cb);
});
}),cljs.core.PersistentVector.EMPTY);

var _STAR_el = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var cnt = viewer.container;
var body = (function (){var G__58467 = cnt.ownerDocument;
if((G__58467 == null)){
return null;
} else {
return G__58467.body;
}
})();
var key_alt_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__58468 = body;
var G__58468__$1 = (((G__58468 == null))?null:G__58468.dataset);
if((G__58468__$1 == null)){
return null;
} else {
return G__58468__$1.activeKeystroke;
}
})(),"Alt");
var auto_open_ctx_menu_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","auto-open-ctx-menu?","pdf/auto-open-ctx-menu?",-1579137381)], null));
var head_height = (0);
var top = ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point) + cnt.scrollTop) - head_height);
var left = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point) + cnt.scrollLeft);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(highlight);
var new_QMARK_ = (id == null);
var new__AMPERSAND__highlight_mode_QMARK_ = (function (){var and__5140__auto__ = cljs.core.deref(frontend.extensions.pdf.toolbar._STAR_highlight_mode_QMARK_);
if(cljs.core.truth_(and__5140__auto__)){
return new_QMARK_;
} else {
return and__5140__auto__;
}
})();
var show_ctx_menu_QMARK_ = (function (){var and__5140__auto__ = cljs.core.not(new__AMPERSAND__highlight_mode_QMARK_);
if(and__5140__auto__){
var or__5142__auto__ = cljs.core.not(selection);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto____$1 = selection;
if(cljs.core.truth_(and__5140__auto____$1)){
var or__5142__auto____$1 = auto_open_ctx_menu_QMARK_;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return key_alt_QMARK_;
}
} else {
return and__5140__auto____$1;
}
}
} else {
return and__5140__auto__;
}
})();
var content = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(highlight);
var area_QMARK_ = (!(clojure.string.blank_QMARK_(new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(content))));
var action_fn_BANG_ = (function (action,clear_QMARK_){
var temp__5825__auto__ = (function (){var and__5140__auto__ = action;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.name(action);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var action__$1 = temp__5825__auto__;
var highlight_58705__$1 = ((cljs.core.fn_QMARK_(highlight))?(highlight.cljs$core$IFn$_invoke$arity$0 ? highlight.cljs$core$IFn$_invoke$arity$0() : highlight.call(null)):highlight);
var content_58706__$1 = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(highlight_58705__$1);
var owner_win_58707 = frontend.extensions.pdf.windows.resolve_own_window(viewer);
var G__58469_58708 = action__$1;
switch (G__58469_58708) {
case "ref":
frontend.extensions.pdf.assets.copy_hl_ref_BANG_(highlight_58705__$1,viewer);

break;
case "copy":
frontend.util.copy_to_clipboard_BANG_.cljs$core$IFn$_invoke$arity$variadic((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(content_58706__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.extensions.pdf.utils.fix_selection_text_breakline(selection.toString());
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"owner-window","owner-window",-2139116435),owner_win_58707], 0));

frontend.extensions.pdf.utils.clear_all_selection.cljs$core$IFn$_invoke$arity$0();

break;
case "link":
frontend.extensions.pdf.assets.goto_block_ref_BANG_(highlight_58705__$1);

break;
case "del":
(del_hl_BANG_.cljs$core$IFn$_invoke$arity$1 ? del_hl_BANG_.cljs$core$IFn$_invoke$arity$1(highlight_58705__$1) : del_hl_BANG_.call(null,highlight_58705__$1));

frontend.extensions.pdf.assets.del_ref_block_BANG_(highlight_58705__$1);

frontend.extensions.pdf.assets.unlink_hl_area_image$(viewer,frontend.state.get_state(new cljs.core.Keyword("pdf","current","pdf/current",-1087936477)),highlight_58705__$1);

break;
case "hook":

break;
default:
var pdf_current_58710 = frontend.state.get_current_pdf();
if(cljs.core.not(new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(pdf_current_58710))){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("asset","dialog-edit-external-url","asset/dialog-edit-external-url",175071068),null,pdf_current_58710], null));
} else {
var properties_58711 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),action__$1], null);
if(cljs.core.not(id)){
var highlight_58712__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([highlight_58705__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),frontend.extensions.pdf.utils.gen_uuid(),new cljs.core.Keyword(null,"properties","properties",685819552),properties_58711], null)], 0));
promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((add_hl_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_hl_BANG_.cljs$core$IFn$_invoke$arity$1(highlight_58712__$2) : add_hl_BANG_.call(null,highlight_58712__$2))),(function (highlight_SINGLEQUOTE_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.extensions.pdf.utils.clear_all_selection.cljs$core$IFn$_invoke$arity$1(owner_win_58707)),(function (___21901__auto__){
return promesa.protocols._promise(frontend.extensions.pdf.assets.copy_hl_ref_BANG_(highlight_SINGLEQUOTE_,viewer));
}));
}));
}));
} else {
var G__58470_58713 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(highlight_58705__$1,new cljs.core.Keyword(null,"properties","properties",685819552),properties_58711);
(upd_hl_BANG_.cljs$core$IFn$_invoke$arity$1 ? upd_hl_BANG_.cljs$core$IFn$_invoke$arity$1(G__58470_58713) : upd_hl_BANG_.call(null,G__58470_58713));
}

cljs.core.reset_BANG_(frontend.extensions.pdf.core._STAR_highlight_last_color,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(action__$1));
}

}

var and__5140__auto__ = clear_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return setTimeout((function (){
return (clear_ctx_menu_BANG_.cljs$core$IFn$_invoke$arity$0 ? clear_ctx_menu_BANG_.cljs$core$IFn$_invoke$arity$0() : clear_ctx_menu_BANG_.call(null));
}),(68));
} else {
return and__5140__auto__;
}
} else {
return null;
}
});
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(new__AMPERSAND__highlight_mode_QMARK_)){
setTimeout((function (){
return action_fn_BANG_(cljs.core.deref(frontend.extensions.pdf.core._STAR_highlight_last_color),true);
}),(300));
} else {
var el_58714 = logseq.shui.hooks.deref(_STAR_el);
var map__58471_58715 = frontend.util.calc_delta_rect_offset(el_58714,el_58714.closest(".extensions__pdf-viewer"));
var map__58471_58716__$1 = cljs.core.__destructure_map(map__58471_58715);
var x_58717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58471_58716__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_58718 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58471_58716__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
(el_58714.style.transform = (""+"translate3d("+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((x_58717 < (0)))?(x_58717 - (5)):(0)))+"px,"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((y_58718 < (0)))?(y_58718 - (5)):(0)))+"px"+",0)"));
}

return (function (){
return cljs.core.List.EMPTY;
});
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.extensions__pdf-hls-ctx-menu","ul.extensions__pdf-hls-ctx-menu",578037376),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top","top",-1856271961),top,new cljs.core.Keyword(null,"left","left",-399115937),left,new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_(show_ctx_menu_QMARK_)?"visible":"hidden")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.stopPropagation();

var temp__5825__auto__ = e.target.dataset.action;
if(cljs.core.truth_(temp__5825__auto__)){
var action = temp__5825__auto__;
return action_fn_BANG_(action,true);
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.item-colors","li.item-colors",-1573133118),(function (){var iter__5628__auto__ = (function frontend$extensions$pdf$core$pdf_highlights_ctx_menu_$_iter__58472(s__58473){
return (new cljs.core.LazySeq(null,(function (){
var s__58473__$1 = s__58473;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__58473__$1);
if(temp__5825__auto__){
var s__58473__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58473__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__58473__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__58475 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__58474 = (0);
while(true){
if((i__58474 < size__5627__auto__)){
var it = cljs.core._nth(c__5626__auto__,i__58474);
cljs.core.chunk_append(b__58475,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),it,new cljs.core.Keyword(null,"data-color","data-color",-1132407184),it,new cljs.core.Keyword(null,"data-action","data-action",821237678),it], null),it], null));

var G__58719 = (i__58474 + (1));
i__58474 = G__58719;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58475),frontend$extensions$pdf$core$pdf_highlights_ctx_menu_$_iter__58472(cljs.core.chunk_rest(s__58473__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58475),null);
}
} else {
var it = cljs.core.first(s__58473__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),it,new cljs.core.Keyword(null,"data-color","data-color",-1132407184),it,new cljs.core.Keyword(null,"data-action","data-action",821237678),it], null),it], null),frontend$extensions$pdf$core$pdf_highlights_ctx_menu_$_iter__58472(cljs.core.rest(s__58473__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["yellow","red","green","blue","purple"], null));
})()], null),(function (){var and__5140__auto__ = id;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.item","li.item",1019267471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-action","data-action",821237678),"ref"], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","copy-ref","pdf/copy-ref",1111581184)], 0))], null);
} else {
return and__5140__auto__;
}
})(),(function (){var and__5140__auto__ = (!(area_QMARK_));
if(and__5140__auto__){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.item","li.item",1019267471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-action","data-action",821237678),"copy"], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","copy-text","pdf/copy-text",-1645704266)], 0))], null);
} else {
return and__5140__auto__;
}
})(),(function (){var and__5140__auto__ = id;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.item","li.item",1019267471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-action","data-action",821237678),"link"], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","linked-ref","pdf/linked-ref",-925157547)], 0))], null);
} else {
return and__5140__auto__;
}
})(),(function (){var and__5140__auto__ = id;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.item","li.item",1019267471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-action","data-action",821237678),"del"], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","delete","ui/delete",-1768677056)], 0))], null);
} else {
return and__5140__auto__;
}
})(),(cljs.core.truth_((function (){var and__5140__auto__ = frontend.config.lsp_enabled_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (!(area_QMARK_));
} else {
return and__5140__auto__;
}
})())?(function (){var iter__5628__auto__ = (function frontend$extensions$pdf$core$pdf_highlights_ctx_menu_$_iter__58476(s__58477){
return (new cljs.core.LazySeq(null,(function (){
var s__58477__$1 = s__58477;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__58477__$1);
if(temp__5825__auto__){
var s__58477__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58477__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__58477__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__58479 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__58478 = (0);
while(true){
if((i__58478 < size__5627__auto__)){
var vec__58480 = cljs.core._nth(c__5626__auto__,i__58478);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58480,(0),null);
var map__58483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58480,(1),null);
var map__58483__$1 = cljs.core.__destructure_map(map__58483);
var _cmd = map__58483__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58483__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58483__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var extras = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58483__$1,new cljs.core.Keyword(null,"extras","extras",-1110348066));
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58480,(2),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58480,(3),null);
cljs.core.chunk_append(b__58479,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.item","li.item",1019267471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"data-action","data-action",821237678),"hook",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58478,vec__58480,_,map__58483,map__58483__$1,_cmd,key,label,extras,action,pid,c__5626__auto__,size__5627__auto__,b__58479,s__58477__$2,temp__5825__auto__,_STAR_el,cnt,body,key_alt_QMARK_,auto_open_ctx_menu_QMARK_,head_height,top,left,id,new_QMARK_,new__AMPERSAND__highlight_mode_QMARK_,show_ctx_menu_QMARK_,content,area_QMARK_,action_fn_BANG_,map__58465,map__58465__$1,highlight,point,selection,map__58466,map__58466__$1,clear_ctx_menu_BANG_,add_hl_BANG_,upd_hl_BANG_,del_hl_BANG_){
return (function (){
var highlight__$1 = ((cljs.core.fn_QMARK_(highlight))?(highlight.cljs$core$IFn$_invoke$arity$0 ? highlight.cljs$core$IFn$_invoke$arity$0() : highlight.call(null)):highlight);
frontend.commands.exec_plugin_simple_command_BANG_(pid,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(highlight__$1),new cljs.core.Keyword(null,"point","point",1813198264),point], null),action);

if(new cljs.core.Keyword(null,"clearSelection","clearSelection",839903009).cljs$core$IFn$_invoke$arity$1(extras) === true){
return frontend.extensions.pdf.utils.clear_all_selection.cljs$core$IFn$_invoke$arity$0();
} else {
return null;
}
});})(i__58478,vec__58480,_,map__58483,map__58483__$1,_cmd,key,label,extras,action,pid,c__5626__auto__,size__5627__auto__,b__58479,s__58477__$2,temp__5825__auto__,_STAR_el,cnt,body,key_alt_QMARK_,auto_open_ctx_menu_QMARK_,head_height,top,left,id,new_QMARK_,new__AMPERSAND__highlight_mode_QMARK_,show_ctx_menu_QMARK_,content,area_QMARK_,action_fn_BANG_,map__58465,map__58465__$1,highlight,point,selection,map__58466,map__58466__$1,clear_ctx_menu_BANG_,add_hl_BANG_,upd_hl_BANG_,del_hl_BANG_))
], null),label], null));

var G__58720 = (i__58478 + (1));
i__58478 = G__58720;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58479),frontend$extensions$pdf$core$pdf_highlights_ctx_menu_$_iter__58476(cljs.core.chunk_rest(s__58477__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58479),null);
}
} else {
var vec__58484 = cljs.core.first(s__58477__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58484,(0),null);
var map__58487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58484,(1),null);
var map__58487__$1 = cljs.core.__destructure_map(map__58487);
var _cmd = map__58487__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58487__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58487__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var extras = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58487__$1,new cljs.core.Keyword(null,"extras","extras",-1110348066));
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58484,(2),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58484,(3),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.item","li.item",1019267471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"data-action","data-action",821237678),"hook",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58484,_,map__58487,map__58487__$1,_cmd,key,label,extras,action,pid,s__58477__$2,temp__5825__auto__,_STAR_el,cnt,body,key_alt_QMARK_,auto_open_ctx_menu_QMARK_,head_height,top,left,id,new_QMARK_,new__AMPERSAND__highlight_mode_QMARK_,show_ctx_menu_QMARK_,content,area_QMARK_,action_fn_BANG_,map__58465,map__58465__$1,highlight,point,selection,map__58466,map__58466__$1,clear_ctx_menu_BANG_,add_hl_BANG_,upd_hl_BANG_,del_hl_BANG_){
return (function (){
var highlight__$1 = ((cljs.core.fn_QMARK_(highlight))?(highlight.cljs$core$IFn$_invoke$arity$0 ? highlight.cljs$core$IFn$_invoke$arity$0() : highlight.call(null)):highlight);
frontend.commands.exec_plugin_simple_command_BANG_(pid,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(highlight__$1),new cljs.core.Keyword(null,"point","point",1813198264),point], null),action);

if(new cljs.core.Keyword(null,"clearSelection","clearSelection",839903009).cljs$core$IFn$_invoke$arity$1(extras) === true){
return frontend.extensions.pdf.utils.clear_all_selection.cljs$core$IFn$_invoke$arity$0();
} else {
return null;
}
});})(vec__58484,_,map__58487,map__58487__$1,_cmd,key,label,extras,action,pid,s__58477__$2,temp__5825__auto__,_STAR_el,cnt,body,key_alt_QMARK_,auto_open_ctx_menu_QMARK_,head_height,top,left,id,new_QMARK_,new__AMPERSAND__highlight_mode_QMARK_,show_ctx_menu_QMARK_,content,area_QMARK_,action_fn_BANG_,map__58465,map__58465__$1,highlight,point,selection,map__58466,map__58466__$1,clear_ctx_menu_BANG_,add_hl_BANG_,upd_hl_BANG_,del_hl_BANG_))
], null),label], null),frontend$extensions$pdf$core$pdf_highlights_ctx_menu_$_iter__58476(cljs.core.rest(s__58477__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(frontend.state.get_plugins_commands_with_type(new cljs.core.Keyword(null,"highlight-context-menu-item","highlight-context-menu-item",494511872)));
})():null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$pdf$core$pdf_highlights_ctx_menu__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__58488 = cljs.core.first(args__31746__auto__);
var G__58489 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__58488,G__58489) : io.factorhouse.hsx.core.obj_get.call(null,G__58488,G__58489));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"pdf-highlights-ctx-menu","pdf-highlights-ctx-menu",318884934,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","data-var","large-vars/data-var",1805150589),true], null)),args__31746__auto__),frontend$extensions$pdf$core$pdf_highlights_ctx_menu,args__31746__auto__,null);
}
};
var frontend$extensions$pdf$core$pdf_highlights_ctx_menu = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58721__i = 0, G__58721__a = new Array(arguments.length -  0);
while (G__58721__i < G__58721__a.length) {G__58721__a[G__58721__i] = arguments[G__58721__i + 0]; ++G__58721__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58721__a,0,null);
} 
return frontend$extensions$pdf$core$pdf_highlights_ctx_menu__delegate.call(this,args__31746__auto__);};
frontend$extensions$pdf$core$pdf_highlights_ctx_menu.cljs$lang$maxFixedArity = 0;
frontend$extensions$pdf$core$pdf_highlights_ctx_menu.cljs$lang$applyTo = (function (arglist__58722){
var args__31746__auto__ = cljs.core.seq(arglist__58722);
return frontend$extensions$pdf$core$pdf_highlights_ctx_menu__delegate(args__31746__auto__);
});
frontend$extensions$pdf$core$pdf_highlights_ctx_menu.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$pdf$core$pdf_highlights_ctx_menu__delegate;
return frontend$extensions$pdf$core$pdf_highlights_ctx_menu;
})()
;
var memo_comp__31747__auto__ = (function (){var G__58490 = comp__31745__auto__;
var G__58491 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__58490,G__58491) : io.factorhouse.hsx.core.react_memo.call(null,G__58490,G__58491));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"pdf-highlights-ctx-menu");

return comp__31745__auto__;
})();
frontend.extensions.pdf.core.pdf_highlights_text_region = (function (){var render_fn__31744__auto__ = (function frontend$extensions$pdf$core$pdf_highlights_text_region(viewer,vw_hl,hl,p__58492){
var map__58493 = p__58492;
var map__58493__$1 = cljs.core.__destructure_map(map__58493);
var show_ctx_menu_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58493__$1,new cljs.core.Keyword(null,"show-ctx-menu!","show-ctx-menu!",-29500810));
var map__58494 = hl;
var map__58494__$1 = cljs.core.__destructure_map(map__58494);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58494__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__58495 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(vw_hl);
var map__58495__$1 = cljs.core.__destructure_map(map__58495);
var rects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58495__$1,new cljs.core.Keyword(null,"rects","rects",1714526167));
var map__58496 = new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(hl);
var map__58496__$1 = cljs.core.__destructure_map(map__58496);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58496__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var open_ctx_menu_BANG_ = (function (e){
e.preventDefault();

var x = e.clientX;
var y = e.clientY;
var G__58497 = viewer;
var G__58498 = hl;
var G__58499 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
return (show_ctx_menu_BANG_.cljs$core$IFn$_invoke$arity$3 ? show_ctx_menu_BANG_.cljs$core$IFn$_invoke$arity$3(G__58497,G__58498,G__58499) : show_ctx_menu_BANG_.call(null,G__58497,G__58498,G__58499));
});
var dragstart_handle_BANG_ = (function (e){
var temp__5825__auto__ = (function (){var and__5140__auto__ = id;
if(cljs.core.truth_(and__5140__auto__)){
return e.dataTransfer;
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var dt = temp__5825__auto__;
cljs.core.reset_BANG_(frontend.components.block._STAR_dragging_QMARK_,true);

frontend.extensions.pdf.assets.ensure_ref_block_BANG_(frontend.state.get_current_pdf(),hl,null);

return dt.setData("text/plain",(""+"[["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"]]"));
} else {
return null;
}
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__pdf-hls-text-region","div.extensions__pdf-hls-text-region",-2120975768),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(""+"hl_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),open_ctx_menu_BANG_,new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),open_ctx_menu_BANG_], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,rect){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hls-text-region-item","div.hls-text-region-item",-1046800817),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"style","style",-496642736),rect,new cljs.core.Keyword(null,"draggable","draggable",1676206163),"true",new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),dragstart_handle_BANG_,new cljs.core.Keyword(null,"data-color","data-color",-1132407184),color], null)], null);
}),rects)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$pdf$core$pdf_highlights_text_region__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__58500 = cljs.core.first(args__31746__auto__);
var G__58501 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__58500,G__58501) : io.factorhouse.hsx.core.obj_get.call(null,G__58500,G__58501));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"pdf-highlights-text-region","pdf-highlights-text-region",-786042961,null),args__31746__auto__),frontend$extensions$pdf$core$pdf_highlights_text_region,args__31746__auto__,null);
}
};
var frontend$extensions$pdf$core$pdf_highlights_text_region = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58723__i = 0, G__58723__a = new Array(arguments.length -  0);
while (G__58723__i < G__58723__a.length) {G__58723__a[G__58723__i] = arguments[G__58723__i + 0]; ++G__58723__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58723__a,0,null);
} 
return frontend$extensions$pdf$core$pdf_highlights_text_region__delegate.call(this,args__31746__auto__);};
frontend$extensions$pdf$core$pdf_highlights_text_region.cljs$lang$maxFixedArity = 0;
frontend$extensions$pdf$core$pdf_highlights_text_region.cljs$lang$applyTo = (function (arglist__58724){
var args__31746__auto__ = cljs.core.seq(arglist__58724);
return frontend$extensions$pdf$core$pdf_highlights_text_region__delegate(args__31746__auto__);
});
frontend$extensions$pdf$core$pdf_highlights_text_region.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$pdf$core$pdf_highlights_text_region__delegate;
return frontend$extensions$pdf$core$pdf_highlights_text_region;
})()
;
var memo_comp__31747__auto__ = (function (){var G__58502 = comp__31745__auto__;
var G__58503 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__58502,G__58503) : io.factorhouse.hsx.core.react_memo.call(null,G__58502,G__58503));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"pdf-highlights-text-region");

return comp__31745__auto__;
})();
frontend.extensions.pdf.core.pdf_highlight_area_region = (function (){var render_fn__31744__auto__ = (function frontend$extensions$pdf$core$pdf_highlight_area_region(viewer,vw_hl,hl,p__58505){
var map__58506 = p__58505;
var map__58506__$1 = cljs.core.__destructure_map(map__58506);
var ops = map__58506__$1;
var show_ctx_menu_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58506__$1,new cljs.core.Keyword(null,"show-ctx-menu!","show-ctx-menu!",-29500810));
var map__58507 = hl;
var map__58507__$1 = cljs.core.__destructure_map(map__58507);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58507__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _STAR_el = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var _STAR_dirty = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var _STAR_ops_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(ops) : logseq.shui.hooks.use_ref.call(null,ops));
var open_ctx_menu_BANG_ = (function (e){
e.preventDefault();

if(cljs.core.truth_(logseq.shui.hooks.deref(_STAR_dirty))){
return null;
} else {
var x = e.clientX;
var y = e.clientY;
var G__58508 = viewer;
var G__58509 = hl;
var G__58510 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
return (show_ctx_menu_BANG_.cljs$core$IFn$_invoke$arity$3 ? show_ctx_menu_BANG_.cljs$core$IFn$_invoke$arity$3(G__58508,G__58509,G__58510) : show_ctx_menu_BANG_.call(null,G__58508,G__58509,G__58510));
}
});
var dragstart_handle_BANG_ = (function (e){
var temp__5825__auto__ = (function (){var and__5140__auto__ = id;
if(cljs.core.truth_(and__5140__auto__)){
return e.dataTransfer;
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var dt = temp__5825__auto__;
return dt.setData("text/plain",(""+"[["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"]]"));
} else {
return null;
}
});
var update_hl_BANG_ = (function (hl__$1){
var G__58511 = logseq.shui.hooks.deref(_STAR_ops_ref);
var G__58511__$1 = (((G__58511 == null))?null:new cljs.core.Keyword(null,"upd-hl!","upd-hl!",-275023274).cljs$core$IFn$_invoke$arity$1(G__58511));
if((G__58511__$1 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__58511__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hl__$1], null));
}
});
logseq.shui.hooks.use_effect_BANG_((function (){
return logseq.shui.hooks.set_ref_BANG_(_STAR_ops_ref,ops);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ops], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var el = logseq.shui.hooks.deref(_STAR_el);
var it = interact(el).resizable(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),true,new cljs.core.Keyword(null,"right","right",-452581833),true,new cljs.core.Keyword(null,"top","top",-1856271961),true,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),true], null),new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),(function (_e){
return logseq.shui.hooks.set_ref_BANG_(_STAR_dirty,true);
}),new cljs.core.Keyword(null,"end","end",-268185958),(function (e){
var vw_pos = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(vw_hl);
var target = e.target;
var vw_rect = e.rect;
var vec__58512 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58504_SHARP_){
var val = target.getAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__58504_SHARP_))));
if((!((val == null)))){
return parseFloat(val);
} else {
return (0);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null));
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58512,(0),null);
var dy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58512,(1),null);
var to_top = (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(vw_pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bounding","bounding",-2125178263),new cljs.core.Keyword(null,"top","top",-1856271961)], null)) + dy);
var to_left = (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(vw_pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bounding","bounding",-2125178263),new cljs.core.Keyword(null,"left","left",-399115937)], null)) + dx);
var to_w = vw_rect.width;
var to_h = vw_rect.height;
var to_vw_pos = cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(vw_pos,new cljs.core.Keyword(null,"bounding","bounding",-2125178263),cljs.core.assoc,new cljs.core.Keyword(null,"top","top",-1856271961),to_top,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([to_left,new cljs.core.Keyword(null,"width","width",-384071477),to_w,new cljs.core.Keyword(null,"height","height",1025178622),to_h], 0));
var to_sc_pos = frontend.extensions.pdf.utils.vw_to_scaled_pos(viewer,to_vw_pos);
var hl_SINGLEQUOTE__58725 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hl,new cljs.core.Keyword(null,"position","position",-2011731912),to_sc_pos);
var hl_SINGLEQUOTE__58726__$1 = cljs.core.assoc_in(hl_SINGLEQUOTE__58725,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"image","image",-58725096)], null),Date.now());
promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.extensions.pdf.assets.persist_hl_area_image$(viewer,frontend.state.get_state(new cljs.core.Keyword("pdf","current","pdf/current",-1087936477)),hl_SINGLEQUOTE__58726__$1,hl,new cljs.core.Keyword(null,"bounding","bounding",-2125178263).cljs$core$IFn$_invoke$arity$1(to_vw_pos))),(function (result){
return promesa.protocols._promise(setTimeout((function (){
(target.style.transform = "translate(0, 0)");

target.removeAttribute("data-x");

target.removeAttribute("data-y");

var hl_SINGLEQUOTE___$2 = (cljs.core.truth_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(result))?cljs.core.assoc_in(hl_SINGLEQUOTE__58726__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"image","image",-58725096)], null),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(result)):hl_SINGLEQUOTE__58726__$1);
return update_hl_BANG_(hl_SINGLEQUOTE___$2);
}),(200)));
}));
}));

return setTimeout((function (){
return logseq.shui.hooks.set_ref_BANG_(_STAR_dirty,false);
}));
}),new cljs.core.Keyword(null,"move","move",-2110884309),(function (e){
var target = e.target;
var x = target.getAttribute("data-x");
var y = target.getAttribute("data-y");
var bx = (((!((x == null))))?parseFloat(x):(0));
var by = (((!((y == null))))?parseFloat(y):(0));
(target.style.width = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.rect.width)+"px"));

(target.style.height = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.rect.height)+"px"));

var ax = (bx + e.deltaRect.left);
var ay = (by + e.deltaRect.top);
(target.style.transform = (""+"translate("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ax)+"px, "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ay)+"px)"));

target.setAttribute("data-x",ax);

return target.setAttribute("data-y",ay);
})], null),new cljs.core.Keyword(null,"modifiers","modifiers",50378834),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interact.modifiers.restrict(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"restriction","restriction",-1380234912),el.closest(".page")], null)))], null),new cljs.core.Keyword(null,"inertia","inertia",-1478343701),true], null)));
return (function (){
return it.unset();
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hl], null));

var temp__5825__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(vw_hl,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"bounding","bounding",-2125178263)], null));
if(cljs.core.truth_(temp__5825__auto__)){
var vw_bounding = temp__5825__auto__;
var map__58515 = new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(hl);
var map__58515__$1 = cljs.core.__destructure_map(map__58515);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58515__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__pdf-hls-area-region","div.extensions__pdf-hls-area-region",-850888181),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),(""+"hl_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el,new cljs.core.Keyword(null,"style","style",-496642736),vw_bounding,new cljs.core.Keyword(null,"data-color","data-color",-1132407184),color,new cljs.core.Keyword(null,"draggable","draggable",1676206163),"true",new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),dragstart_handle_BANG_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),open_ctx_menu_BANG_,new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),open_ctx_menu_BANG_], null)], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$pdf$core$pdf_highlight_area_region__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__58516 = cljs.core.first(args__31746__auto__);
var G__58517 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__58516,G__58517) : io.factorhouse.hsx.core.obj_get.call(null,G__58516,G__58517));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"pdf-highlight-area-region","pdf-highlight-area-region",-786105804,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$extensions$pdf$core$pdf_highlight_area_region,args__31746__auto__,null);
}
};
var frontend$extensions$pdf$core$pdf_highlight_area_region = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58727__i = 0, G__58727__a = new Array(arguments.length -  0);
while (G__58727__i < G__58727__a.length) {G__58727__a[G__58727__i] = arguments[G__58727__i + 0]; ++G__58727__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58727__a,0,null);
} 
return frontend$extensions$pdf$core$pdf_highlight_area_region__delegate.call(this,args__31746__auto__);};
frontend$extensions$pdf$core$pdf_highlight_area_region.cljs$lang$maxFixedArity = 0;
frontend$extensions$pdf$core$pdf_highlight_area_region.cljs$lang$applyTo = (function (arglist__58728){
var args__31746__auto__ = cljs.core.seq(arglist__58728);
return frontend$extensions$pdf$core$pdf_highlight_area_region__delegate(args__31746__auto__);
});
frontend$extensions$pdf$core$pdf_highlight_area_region.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$pdf$core$pdf_highlight_area_region__delegate;
return frontend$extensions$pdf$core$pdf_highlight_area_region;
})()
;
var memo_comp__31747__auto__ = (function (){var G__58518 = comp__31745__auto__;
var G__58519 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__58518,G__58519) : io.factorhouse.hsx.core.react_memo.call(null,G__58518,G__58519));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"pdf-highlight-area-region");

return comp__31745__auto__;
})();
/**
 * Displays the highlights over a pdf document.
 */
frontend.extensions.pdf.core.pdf_highlights_region_container = (function (){var render_fn__31744__auto__ = (function frontend$extensions$pdf$core$pdf_highlights_region_container(viewer,page_hls,ops){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hls-region-container","div.hls-region-container",-332775962),(function (){var iter__5628__auto__ = (function frontend$extensions$pdf$core$pdf_highlights_region_container_$_iter__58521(s__58522){
return (new cljs.core.LazySeq(null,(function (){
var s__58522__$1 = s__58522;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__58522__$1);
if(temp__5825__auto__){
var s__58522__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58522__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__58522__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__58524 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__58523 = (0);
while(true){
if((i__58523 < size__5627__auto__)){
var hl = cljs.core._nth(c__5626__auto__,i__58523);
cljs.core.chunk_append(b__58524,(function (){var vw_hl = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(hl,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),((function (i__58523,hl,c__5626__auto__,size__5627__auto__,b__58524,s__58522__$2,temp__5825__auto__){
return (function (p1__58520_SHARP_){
return frontend.extensions.pdf.utils.scaled_to_vw_pos(viewer,p1__58520_SHARP_);
});})(i__58523,hl,c__5626__auto__,size__5627__auto__,b__58524,s__58522__$2,temp__5825__auto__))
);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(hl,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"image","image",-58725096)], null)))){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.extensions.pdf.core.pdf_highlight_area_region,viewer,vw_hl,hl,ops], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(hl)], null));
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.extensions.pdf.core.pdf_highlights_text_region,viewer,vw_hl,hl,ops], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(hl)], null));
}
})());

var G__58729 = (i__58523 + (1));
i__58523 = G__58729;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58524),frontend$extensions$pdf$core$pdf_highlights_region_container_$_iter__58521(cljs.core.chunk_rest(s__58522__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58524),null);
}
} else {
var hl = cljs.core.first(s__58522__$2);
return cljs.core.cons((function (){var vw_hl = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(hl,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),((function (hl,s__58522__$2,temp__5825__auto__){
return (function (p1__58520_SHARP_){
return frontend.extensions.pdf.utils.scaled_to_vw_pos(viewer,p1__58520_SHARP_);
});})(hl,s__58522__$2,temp__5825__auto__))
);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(hl,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"image","image",-58725096)], null)))){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.extensions.pdf.core.pdf_highlight_area_region,viewer,vw_hl,hl,ops], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(hl)], null));
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.extensions.pdf.core.pdf_highlights_text_region,viewer,vw_hl,hl,ops], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(hl)], null));
}
})(),frontend$extensions$pdf$core$pdf_highlights_region_container_$_iter__58521(cljs.core.rest(s__58522__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(page_hls);
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$pdf$core$pdf_highlights_region_container__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__58525 = cljs.core.first(args__31746__auto__);
var G__58526 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__58525,G__58526) : io.factorhouse.hsx.core.obj_get.call(null,G__58525,G__58526));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"pdf-highlights-region-container","pdf-highlights-region-container",1687013040,null),args__31746__auto__),frontend$extensions$pdf$core$pdf_highlights_region_container,args__31746__auto__,null);
}
};
var frontend$extensions$pdf$core$pdf_highlights_region_container = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58730__i = 0, G__58730__a = new Array(arguments.length -  0);
while (G__58730__i < G__58730__a.length) {G__58730__a[G__58730__i] = arguments[G__58730__i + 0]; ++G__58730__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58730__a,0,null);
} 
return frontend$extensions$pdf$core$pdf_highlights_region_container__delegate.call(this,args__31746__auto__);};
frontend$extensions$pdf$core$pdf_highlights_region_container.cljs$lang$maxFixedArity = 0;
frontend$extensions$pdf$core$pdf_highlights_region_container.cljs$lang$applyTo = (function (arglist__58731){
var args__31746__auto__ = cljs.core.seq(arglist__58731);
return frontend$extensions$pdf$core$pdf_highlights_region_container__delegate(args__31746__auto__);
});
frontend$extensions$pdf$core$pdf_highlights_region_container.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$pdf$core$pdf_highlights_region_container__delegate;
return frontend$extensions$pdf$core$pdf_highlights_region_container;
})()
;
var memo_comp__31747__auto__ = (function (){var G__58527 = comp__31745__auto__;
var G__58528 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__58527,G__58528) : io.factorhouse.hsx.core.react_memo.call(null,G__58527,G__58528));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"pdf-highlights-region-container");

return comp__31745__auto__;
})();
frontend.extensions.pdf.core.pdf_highlight_area_selection = (function (){var render_fn__31744__auto__ = (function frontend$extensions$pdf$core$pdf_highlight_area_selection(viewer,p__58532){
var map__58533 = p__58532;
var map__58533__$1 = cljs.core.__destructure_map(map__58533);
var show_ctx_menu_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58533__$1,new cljs.core.Keyword(null,"show-ctx-menu!","show-ctx-menu!",-29500810));
var viewer_clt = viewer.viewer.classList;
var cnt_el = viewer.container;
var _STAR_el = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var _STAR_start_el = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var _STAR_cnt_rect = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var _STAR_page_el = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var _STAR_page_rect = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var _STAR_start_xy = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var vec__58534 = logseq.shui.hooks.use_state(null);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58534,(0),null);
var set_start_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58534,(1),null);
var vec__58537 = logseq.shui.hooks.use_state(null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58537,(0),null);
var set_end_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58537,(1),null);
var vec__58540 = logseq.shui.hooks.use_atom(frontend.extensions.pdf.toolbar._STAR_area_mode_QMARK_);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58540,(0),null);
var set_area_mode_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58540,(1),null);
var should_start = (function (e){
var target = e.target;
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not(target.classList.contains("extensions__pdf-hls-area-region"));
if(and__5140__auto__){
return target.closest(".page");
} else {
return and__5140__auto__;
}
})())){
var and__5140__auto__ = e;
if(cljs.core.truth_(and__5140__auto__)){
var or__5142__auto__ = e.metaKey;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = e.shiftKey;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return cljs.core.deref(frontend.extensions.pdf.toolbar._STAR_area_mode_QMARK_);
}
}
} else {
return and__5140__auto__;
}
} else {
return null;
}
});
var reset_coords_BANG_ = (function (){
(set_start_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_start_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_start_BANG_.call(null,null));

(set_end_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_end_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_end_BANG_.call(null,null));

logseq.shui.hooks.set_ref_BANG_(_STAR_start_xy,null);

logseq.shui.hooks.set_ref_BANG_(_STAR_start_el,null);

logseq.shui.hooks.set_ref_BANG_(_STAR_cnt_rect,null);

logseq.shui.hooks.set_ref_BANG_(_STAR_page_el,null);

return logseq.shui.hooks.set_ref_BANG_(_STAR_page_rect,null);
});
var calc_coords_BANG_ = (function (page_x,page_y){
if(cljs.core.truth_(cnt_el)){
var cnt_rect = logseq.shui.hooks.deref(_STAR_cnt_rect);
var cnt_rect__$1 = (function (){var or__5142__auto__ = cnt_rect;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(cnt_el.getBoundingClientRect().toJSON());
}
})();
var page_rect = logseq.shui.hooks.deref(_STAR_page_rect);
var vec__58543 = logseq.shui.hooks.deref(_STAR_start_xy);
var start_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58543,(0),null);
var start_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58543,(1),null);
var dx_left_QMARK_ = (start_x > page_x);
var dy_top_QMARK_ = (start_y > page_y);
var page_left = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(page_rect);
var page_right = new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(page_rect);
var page_top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(page_rect);
var page_bottom = new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(page_rect);
var ___$1 = logseq.shui.hooks.set_ref_BANG_(_STAR_cnt_rect,cnt_rect__$1);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((function (p1__58529_SHARP_){
if(dx_left_QMARK_){
if((p1__58529_SHARP_ < page_left)){
return page_left;
} else {
return p1__58529_SHARP_;
}
} else {
if((p1__58529_SHARP_ > page_right)){
return page_right;
} else {
return p1__58529_SHARP_;
}
}
})(page_x) + cnt_el.scrollLeft),new cljs.core.Keyword(null,"y","y",-1757859776),((function (p1__58530_SHARP_){
if(dy_top_QMARK_){
if((p1__58530_SHARP_ < page_top)){
return page_top;
} else {
return p1__58530_SHARP_;
}
} else {
if((p1__58530_SHARP_ > page_bottom)){
return page_bottom;
} else {
return p1__58530_SHARP_;
}
}
})(page_y) + cnt_el.scrollTop)], null);
} else {
return null;
}
});
var calc_rect = (function (start__$1,end__$1){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.min.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start__$1),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(end__$1)),new cljs.core.Keyword(null,"top","top",-1856271961),cljs.core.min.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(end__$1)),new cljs.core.Keyword(null,"width","width",-384071477),Math.abs((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(end__$1) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start__$1))),new cljs.core.Keyword(null,"height","height",1025178622),Math.abs((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(end__$1) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start__$1)))], null);
});
var disable_text_selection_BANG_ = (function (p1__58531_SHARP_){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(viewer_clt,(cljs.core.truth_(p1__58531_SHARP_)?"add":"remove"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["disabled-text-selection"], 0));
});
var fn_move = logseq.shui.hooks.use_callback((function (e){
var G__58546 = calc_coords_BANG_(e.pageX,e.pageY);
return (set_end_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_end_BANG_.cljs$core$IFn$_invoke$arity$1(G__58546) : set_end_BANG_.call(null,G__58546));
}),cljs.core.PersistentVector.EMPTY);
logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto__ = cnt_el;
if(cljs.core.truth_(temp__5825__auto__)){
var root = temp__5825__auto__;
var fn_start = (function (e){
if(cljs.core.truth_(should_start(e))){
var target = e.target;
var page_el = target.closest(".page");
var vec__58547 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.pageX,e.pageY], null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58547,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58547,(1),null);
logseq.shui.hooks.set_ref_BANG_(_STAR_start_el,target);

logseq.shui.hooks.set_ref_BANG_(_STAR_start_xy,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

logseq.shui.hooks.set_ref_BANG_(_STAR_page_el,page_el);

logseq.shui.hooks.set_ref_BANG_(_STAR_page_rect,(function (){var G__58550 = page_el;
var G__58550__$1 = (((G__58550 == null))?null:G__58550.getBoundingClientRect());
var G__58550__$2 = (((G__58550__$1 == null))?null:G__58550__$1.toJSON());
if((G__58550__$2 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(G__58550__$2);
}
})());

var G__58551_58732 = calc_coords_BANG_(x,y);
(set_start_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_start_BANG_.cljs$core$IFn$_invoke$arity$1(G__58551_58732) : set_start_BANG_.call(null,G__58551_58732));

disable_text_selection_BANG_(true);

return root.addEventListener("mousemove",fn_move);
} else {
reset_coords_BANG_();

return disable_text_selection_BANG_(false);
}
});
var fn_end = (function (e){
var temp__5825__auto____$1 = logseq.shui.hooks.deref(_STAR_start_el);
if(cljs.core.truth_(temp__5825__auto____$1)){
var start_el = temp__5825__auto____$1;
var end_58733__$1 = calc_coords_BANG_(e.pageX,e.pageY);
var rect_58734 = calc_rect(start,end_58733__$1);
if((((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(rect_58734) > (10))) && ((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(rect_58734) > (10))))){
var temp__5825__auto___58735__$2 = start_el.closest(".page");
if(cljs.core.truth_(temp__5825__auto___58735__$2)){
var page_el_58736 = temp__5825__auto___58735__$2;
var page_number_58737 = (page_el_58736.dataset.pageNumber | 0);
var page_pos_58738 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rect_58734,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),(new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(rect_58734) - page_el_58736.offsetTop),new cljs.core.Keyword(null,"left","left",-399115937),(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(rect_58734) - page_el_58736.offsetLeft)], null)], 0));
var vw_pos_58739 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bounding","bounding",-2125178263),page_pos_58738,new cljs.core.Keyword(null,"rects","rects",1714526167),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"page","page",849072397),page_number_58737], null);
var sc_pos_58740 = frontend.extensions.pdf.utils.vw_to_scaled_pos(viewer,vw_pos_58739);
var point_58741 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),e.clientX,new cljs.core.Keyword(null,"y","y",-1757859776),e.clientY], null);
var hl_58742 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"page","page",849072397),page_number_58737,new cljs.core.Keyword(null,"position","position",-2011731912),sc_pos_58740,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"",new cljs.core.Keyword(null,"image","image",-58725096),Date.now()], null),new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.PersistentArrayMap.EMPTY], null);
var G__58552_58743 = viewer;
var G__58553_58744 = hl_58742;
var G__58554_58745 = point_58741;
var G__58555_58746 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reset-fn","reset-fn",-690887550),(function (){
return reset_coords_BANG_();
})], null);
(show_ctx_menu_BANG_.cljs$core$IFn$_invoke$arity$4 ? show_ctx_menu_BANG_.cljs$core$IFn$_invoke$arity$4(G__58552_58743,G__58553_58744,G__58554_58745,G__58555_58746) : show_ctx_menu_BANG_.call(null,G__58552_58743,G__58553_58744,G__58554_58745,G__58555_58746));

(set_area_mode_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_area_mode_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_area_mode_BANG_.call(null,false));
} else {
}
} else {
reset_coords_BANG_();
}

disable_text_selection_BANG_(false);

return root.removeEventListener("mousemove",fn_move);
} else {
return null;
}
});
var G__58556_58747 = root;
G__58556_58747.addEventListener("mousedown",fn_start);

G__58556_58747.addEventListener("mouseup",fn_end,({"once": true}));


return (function (){
var G__58557 = root;
G__58557.removeEventListener("mousedown",fn_start);

G__58557.removeEventListener("mouseup",fn_end);

return G__58557;
});
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__pdf-area-selection","div.extensions__pdf-area-selection",1235894646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el], null),(cljs.core.truth_((function (){var and__5140__auto__ = start;
if(cljs.core.truth_(and__5140__auto__)){
return end;
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shadow-rect","div.shadow-rect",-745200749),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),calc_rect(start,end)], null)], null):null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$pdf$core$pdf_highlight_area_selection__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__58558 = cljs.core.first(args__31746__auto__);
var G__58559 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__58558,G__58559) : io.factorhouse.hsx.core.obj_get.call(null,G__58558,G__58559));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"pdf-highlight-area-selection","pdf-highlight-area-selection",-1298710283,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$extensions$pdf$core$pdf_highlight_area_selection,args__31746__auto__,null);
}
};
var frontend$extensions$pdf$core$pdf_highlight_area_selection = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58748__i = 0, G__58748__a = new Array(arguments.length -  0);
while (G__58748__i < G__58748__a.length) {G__58748__a[G__58748__i] = arguments[G__58748__i + 0]; ++G__58748__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58748__a,0,null);
} 
return frontend$extensions$pdf$core$pdf_highlight_area_selection__delegate.call(this,args__31746__auto__);};
frontend$extensions$pdf$core$pdf_highlight_area_selection.cljs$lang$maxFixedArity = 0;
frontend$extensions$pdf$core$pdf_highlight_area_selection.cljs$lang$applyTo = (function (arglist__58749){
var args__31746__auto__ = cljs.core.seq(arglist__58749);
return frontend$extensions$pdf$core$pdf_highlight_area_selection__delegate(args__31746__auto__);
});
frontend$extensions$pdf$core$pdf_highlight_area_selection.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$pdf$core$pdf_highlight_area_selection__delegate;
return frontend$extensions$pdf$core$pdf_highlight_area_selection;
})()
;
var memo_comp__31747__auto__ = (function (){var G__58560 = comp__31745__auto__;
var G__58561 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__58560,G__58561) : io.factorhouse.hsx.core.react_memo.call(null,G__58560,G__58561));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"pdf-highlight-area-selection");

return comp__31745__auto__;
})();
frontend.extensions.pdf.core.pdf_highlights = (function (){var render_fn__31744__auto__ = (function frontend$extensions$pdf$core$pdf_highlights(el,viewer,initial_hls,loaded_pages,p__58564){
var map__58565 = p__58564;
var map__58565__$1 = cljs.core.__destructure_map(map__58565);
var set_dirty_hls_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58565__$1,new cljs.core.Keyword(null,"set-dirty-hls!","set-dirty-hls!",-1468393512));
var doc = el.ownerDocument;
var win = doc.defaultView;
var _STAR_mounted = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(false) : logseq.shui.hooks.use_ref.call(null,false));
var vec__58566 = logseq.shui.hooks.use_state(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"selection","selection",975998651),null,new cljs.core.Keyword(null,"range","range",1639692286),null,new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),null,new cljs.core.Keyword(null,"point","point",1813198264),null], null));
var sel_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58566,(0),null);
var set_sel_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58566,(1),null);
var vec__58569 = logseq.shui.hooks.use_state(initial_hls);
var highlights = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58569,(0),null);
var set_highlights_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58569,(1),null);
var vec__58572 = logseq.shui.hooks.use_state(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"highlight","highlight",-800930873),null,new cljs.core.Keyword(null,"vw-pos","vw-pos",1025034976),null,new cljs.core.Keyword(null,"selection","selection",975998651),null,new cljs.core.Keyword(null,"point","point",1813198264),null,new cljs.core.Keyword(null,"reset-fn","reset-fn",-690887550),null], null));
var ctx_menu_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58572,(0),null);
var set_ctx_menu_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58572,(1),null);
var clear_ctx_menu_BANG_ = logseq.shui.hooks.use_callback((function (){
var reset_fn = new cljs.core.Keyword(null,"reset-fn","reset-fn",-690887550).cljs$core$IFn$_invoke$arity$1(ctx_menu_state);
var G__58575_58750 = cljs.core.PersistentArrayMap.EMPTY;
(set_ctx_menu_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_ctx_menu_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__58575_58750) : set_ctx_menu_state_BANG_.call(null,G__58575_58750));

var and__5140__auto__ = cljs.core.fn_QMARK_(reset_fn);
if(and__5140__auto__){
return (reset_fn.cljs$core$IFn$_invoke$arity$0 ? reset_fn.cljs$core$IFn$_invoke$arity$0() : reset_fn.call(null));
} else {
return and__5140__auto__;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx_menu_state], null));
var show_ctx_menu_BANG_ = (function() { 
var G__58753__delegate = function (viewer__$1,hl,point,ops){
var vw_pos = frontend.extensions.pdf.utils.scaled_to_vw_pos(viewer__$1,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(hl));
var G__58576 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"highlight","highlight",-800930873),hl,new cljs.core.Keyword(null,"vw-pos","vw-pos",1025034976),vw_pos,new cljs.core.Keyword(null,"point","point",1813198264),point], null),ops));
return (set_ctx_menu_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_ctx_menu_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__58576) : set_ctx_menu_state_BANG_.call(null,G__58576));
};
var G__58753 = function (viewer__$1,hl,point,var_args){
var ops = null;
if (arguments.length > 3) {
var G__58754__i = 0, G__58754__a = new Array(arguments.length -  3);
while (G__58754__i < G__58754__a.length) {G__58754__a[G__58754__i] = arguments[G__58754__i + 3]; ++G__58754__i;}
  ops = new cljs.core.IndexedSeq(G__58754__a,0,null);
} 
return G__58753__delegate.call(this,viewer__$1,hl,point,ops);};
G__58753.cljs$lang$maxFixedArity = 3;
G__58753.cljs$lang$applyTo = (function (arglist__58755){
var viewer__$1 = cljs.core.first(arglist__58755);
arglist__58755 = cljs.core.next(arglist__58755);
var hl = cljs.core.first(arglist__58755);
arglist__58755 = cljs.core.next(arglist__58755);
var point = cljs.core.first(arglist__58755);
var ops = cljs.core.rest(arglist__58755);
return G__58753__delegate(viewer__$1,hl,point,ops);
});
G__58753.cljs$core$IFn$_invoke$arity$variadic = G__58753__delegate;
return G__58753;
})()
;
var add_hl_BANG_ = (function (hl){
if(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(hl))){
var highlights__$1 = frontend.extensions.pdf.utils.fix_nested_js(highlights);
var highlights_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(highlights__$1,hl);
(set_highlights_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_highlights_BANG_.cljs$core$IFn$_invoke$arity$1(highlights_SINGLEQUOTE_) : set_highlights_BANG_.call(null,highlights_SINGLEQUOTE_));

var temp__5823__auto__ = (function (){var and__5140__auto__ = frontend.extensions.pdf.assets.area_highlight_QMARK_(hl);
if(cljs.core.truth_(and__5140__auto__)){
return frontend.extensions.pdf.utils.scaled_to_vw_pos(viewer,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(hl));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var vw_pos = temp__5823__auto__;
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.extensions.pdf.assets.persist_hl_area_image$(viewer,frontend.state.get_state(new cljs.core.Keyword("pdf","current","pdf/current",-1087936477)),hl,null,new cljs.core.Keyword(null,"bounding","bounding",-2125178263).cljs$core$IFn$_invoke$arity$1(vw_pos))),(function (result){
return promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(result))?(function (){var hl_SINGLEQUOTE_ = cljs.core.assoc_in(hl,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"image","image",-58725096)], null),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(result));
var G__58577_58758 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (hl__$1){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(hl__$1),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(hl_SINGLEQUOTE_))){
return hl_SINGLEQUOTE_;
} else {
return hl__$1;
}
}),highlights_SINGLEQUOTE_);
(set_highlights_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_highlights_BANG_.cljs$core$IFn$_invoke$arity$1(G__58577_58758) : set_highlights_BANG_.call(null,G__58577_58758));

return hl_SINGLEQUOTE_;
})():hl));
}));
})),(function (e){
return console.error(e);
}));
} else {
return hl;
}
} else {
return null;
}
});
var upd_hl_BANG_ = (function (hl){
var highlights__$1 = frontend.extensions.pdf.utils.fix_nested_js(highlights);
var temp__5825__auto__ = medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p1__58562_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__58562_SHARP_)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(hl));
}),medley.core.indexed.cljs$core$IFn$_invoke$arity$1(highlights__$1));
if(cljs.core.truth_(temp__5825__auto__)){
var vec__58578 = temp__5825__auto__;
var target_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58578,(0),null);
var G__58581_58759 = cljs.core.assoc_in(highlights__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [target_idx], null),hl);
(set_highlights_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_highlights_BANG_.cljs$core$IFn$_invoke$arity$1(G__58581_58759) : set_highlights_BANG_.call(null,G__58581_58759));

return frontend.extensions.pdf.assets.update_hl_block_BANG_(hl);
} else {
return null;
}
});
var del_hl_BANG_ = (function (hl){
var temp__5825__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(hl);
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
var G__58582 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__58563_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__58563_SHARP_));
}),highlights));
return (set_highlights_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_highlights_BANG_.cljs$core$IFn$_invoke$arity$1(G__58582) : set_highlights_BANG_.call(null,G__58582));
} else {
return null;
}
});
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(logseq.shui.hooks.deref(_STAR_mounted))){
return (set_dirty_hls_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_dirty_hls_BANG_.cljs$core$IFn$_invoke$arity$1(highlights) : set_dirty_hls_BANG_.call(null,highlights));
} else {
return logseq.shui.hooks.set_ref_BANG_(_STAR_mounted,true);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [highlights], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var fn_selection_ok = (function (e){
var selection = doc.getSelection();
var sel_range = selection.getRangeAt((0));
if(cljs.core.truth_(selection.isCollapsed)){
var G__58583 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),true], null);
return (set_sel_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_sel_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__58583) : set_sel_state_BANG_.call(null,G__58583));
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = sel_range;
if(cljs.core.truth_(and__5140__auto__)){
return el.contains(sel_range.commonAncestorContainer);
} else {
return and__5140__auto__;
}
})())){
var G__58584 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),false,new cljs.core.Keyword(null,"selection","selection",975998651),selection,new cljs.core.Keyword(null,"range","range",1639692286),sel_range,new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),e.clientX,new cljs.core.Keyword(null,"y","y",-1757859776),e.clientY], null)], null);
return (set_sel_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_sel_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__58584) : set_sel_state_BANG_.call(null,G__58584));
} else {
return null;
}
}
});
var fn_selection = (function (){
var _STAR_dirty = cljs.core.volatile_BANG_(false);
var fn_dirty = (function (){
return cljs.core.vreset_BANG_(_STAR_dirty,true);
});
doc.addEventListener("selectionchange",fn_dirty);

return doc.addEventListener("mouseup",(function (e){
var and__5140__auto___58762 = cljs.core.deref(_STAR_dirty);
if(cljs.core.truth_(and__5140__auto___58762)){
fn_selection_ok(e);
} else {
}

return doc.removeEventListener("selectionchange",fn_dirty);
}),({"once": true}));
});
var fn_resize = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frontend.extensions.pdf.utils.adjust_viewer_size_BANG_,viewer);
var fn_wheel = (function (e){
if(cljs.core.truth_((function (){var or__5142__auto__ = e.ctrlKey;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return e.metaKey;
}
})())){
var bus = viewer.eventBus;
var container = viewer.container;
var rect = container.getBoundingClientRect();
var mouse_x = (e.clientX - rect.left);
var mouse_y = (e.clientY - rect.top);
var scroll_left = container.scrollLeft;
var scroll_top = container.scrollTop;
var x_ratio = ((scroll_left + mouse_x) / container.scrollWidth);
var y_ratio = ((scroll_top + mouse_y) / container.scrollHeight);
var current_scale = viewer.currentScale;
var scale_factor = 1.05;
var new_scale = (((e.deltaY < (0)))?(current_scale * scale_factor):(current_scale / scale_factor));
e.preventDefault();

bus.dispatch("scaleChanging",({"source": "wheel", "scale": new_scale}));

return requestAnimationFrame((function (){
(container.scrollLeft = ((container.scrollWidth * x_ratio) - mouse_x));

return (container.scrollTop = ((container.scrollHeight * y_ratio) - mouse_y));
}));
} else {
return null;
}
});
if(cljs.core.truth_(el)){
el.addEventListener("mousedown",fn_selection);

el.addEventListener("wheel",fn_wheel);
} else {
}

if(cljs.core.truth_(win)){
win.addEventListener("resize",fn_resize);
} else {
}

return (function (){
if(cljs.core.truth_(el)){
el.removeEventListener("mousedown",fn_selection);

el.removeEventListener("wheel",fn_wheel);
} else {
}

if(cljs.core.truth_(win)){
return win.removeEventListener("resize",fn_resize);
} else {
return null;
}
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [viewer], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto__ = (function (){var and__5140__auto__ = cljs.core.not(new cljs.core.Keyword(null,"collapsed","collapsed",-628494523).cljs$core$IFn$_invoke$arity$1(sel_state));
if(and__5140__auto__){
return new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(sel_state);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var sel_range = temp__5825__auto__;
var point_58763 = new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(sel_state);
var selection_58764 = new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(sel_state);
var hl_fn_58765 = (function (){
var temp__5825__auto____$1 = frontend.extensions.pdf.utils.get_page_from_range(sel_range);
if(cljs.core.truth_(temp__5825__auto____$1)){
var page_info = temp__5825__auto____$1;
var temp__5825__auto____$2 = frontend.extensions.pdf.utils.get_range_rects_LT__page_cnt(sel_range,new cljs.core.Keyword(null,"page-el","page-el",-124721580).cljs$core$IFn$_invoke$arity$1(page_info));
if(cljs.core.truth_(temp__5825__auto____$2)){
var sel_rects = temp__5825__auto____$2;
var page = (new cljs.core.Keyword(null,"page-number","page-number",556880104).cljs$core$IFn$_invoke$arity$1(page_info) | 0);
var bounding = frontend.extensions.pdf.utils.get_bounding_rect(sel_rects);
var vw_pos = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bounding","bounding",-2125178263),bounding,new cljs.core.Keyword(null,"rects","rects",1714526167),sel_rects,new cljs.core.Keyword(null,"page","page",849072397),page], null);
var sc_pos = frontend.extensions.pdf.utils.vw_to_scaled_pos(viewer,vw_pos);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"page","page",849072397),page,new cljs.core.Keyword(null,"position","position",-2011731912),sc_pos,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),frontend.extensions.pdf.utils.fix_selection_text_breakline(selection_58764.toString())], null),new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.PersistentArrayMap.EMPTY], null);
} else {
return null;
}
} else {
return null;
}
});
setTimeout((function (){
var G__58585 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"highlight","highlight",-800930873),hl_fn_58765,new cljs.core.Keyword(null,"selection","selection",975998651),selection_58764,new cljs.core.Keyword(null,"point","point",1813198264),point_58763], null);
return (set_ctx_menu_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_ctx_menu_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__58585) : set_ctx_menu_state_BANG_.call(null,G__58585));
}));

return (0);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(sel_state)], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto___58766 = (function (){var and__5140__auto__ = cljs.core.sequential_QMARK_(highlights);
if(and__5140__auto__){
return cljs.core.group_by(new cljs.core.Keyword(null,"page","page",849072397),highlights);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto___58766)){
var grouped_hls_58767 = temp__5825__auto___58766;
var seq__58586_58768 = cljs.core.seq(loaded_pages);
var chunk__58587_58769 = null;
var count__58588_58770 = (0);
var i__58589_58771 = (0);
while(true){
if((i__58589_58771 < count__58588_58770)){
var page_58772 = chunk__58587_58769.cljs$core$IIndexed$_nth$arity$2(null,i__58589_58771);
var temp__5825__auto___58773__$1 = frontend.extensions.pdf.utils.resolve_hls_layer_BANG_(viewer,page_58772);
if(cljs.core.truth_(temp__5825__auto___58773__$1)){
var hls_layer_58774 = temp__5825__auto___58773__$1;
var page_hls_58775 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(grouped_hls_58767,page_58772);
var hls_render_58776 = frontend.extensions.pdf.core.pdf_highlights_region_container(viewer,page_hls_58775,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-ctx-menu!","show-ctx-menu!",-29500810),show_ctx_menu_BANG_,new cljs.core.Keyword(null,"upd-hl!","upd-hl!",-275023274),upd_hl_BANG_], null));
var mounted_root_58777 = hls_layer_58774.mountedRoot;
if((mounted_root_58777 == null)){
var root_58778 = module$node_modules$react_dom$client.createRoot(hls_layer_58774);
root_58778.render(frontend.rfx.provider(hls_render_58776));

(hls_layer_58774.mountedRoot = root_58778);
} else {
mounted_root_58777.render(frontend.rfx.provider(hls_render_58776));
}
} else {
}


var G__58779 = seq__58586_58768;
var G__58780 = chunk__58587_58769;
var G__58781 = count__58588_58770;
var G__58782 = (i__58589_58771 + (1));
seq__58586_58768 = G__58779;
chunk__58587_58769 = G__58780;
count__58588_58770 = G__58781;
i__58589_58771 = G__58782;
continue;
} else {
var temp__5825__auto___58783__$1 = cljs.core.seq(seq__58586_58768);
if(temp__5825__auto___58783__$1){
var seq__58586_58784__$1 = temp__5825__auto___58783__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58586_58784__$1)){
var c__5673__auto___58785 = cljs.core.chunk_first(seq__58586_58784__$1);
var G__58786 = cljs.core.chunk_rest(seq__58586_58784__$1);
var G__58787 = c__5673__auto___58785;
var G__58788 = cljs.core.count(c__5673__auto___58785);
var G__58789 = (0);
seq__58586_58768 = G__58786;
chunk__58587_58769 = G__58787;
count__58588_58770 = G__58788;
i__58589_58771 = G__58789;
continue;
} else {
var page_58790 = cljs.core.first(seq__58586_58784__$1);
var temp__5825__auto___58791__$2 = frontend.extensions.pdf.utils.resolve_hls_layer_BANG_(viewer,page_58790);
if(cljs.core.truth_(temp__5825__auto___58791__$2)){
var hls_layer_58792 = temp__5825__auto___58791__$2;
var page_hls_58793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(grouped_hls_58767,page_58790);
var hls_render_58794 = frontend.extensions.pdf.core.pdf_highlights_region_container(viewer,page_hls_58793,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-ctx-menu!","show-ctx-menu!",-29500810),show_ctx_menu_BANG_,new cljs.core.Keyword(null,"upd-hl!","upd-hl!",-275023274),upd_hl_BANG_], null));
var mounted_root_58795 = hls_layer_58792.mountedRoot;
if((mounted_root_58795 == null)){
var root_58796 = module$node_modules$react_dom$client.createRoot(hls_layer_58792);
root_58796.render(frontend.rfx.provider(hls_render_58794));

(hls_layer_58792.mountedRoot = root_58796);
} else {
mounted_root_58795.render(frontend.rfx.provider(hls_render_58794));
}
} else {
}


var G__58797 = cljs.core.next(seq__58586_58784__$1);
var G__58798 = null;
var G__58799 = (0);
var G__58800 = (0);
seq__58586_58768 = G__58797;
chunk__58587_58769 = G__58798;
count__58588_58770 = G__58799;
i__58589_58771 = G__58800;
continue;
}
} else {
}
}
break;
}
} else {
}

return (function (){
return cljs.core.List.EMPTY;
});
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loaded_pages,highlights], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto___58801 = el.querySelector(".pp-holder");
if(cljs.core.truth_(temp__5825__auto___58801)){
var holder_58802 = temp__5825__auto___58801;
var mounted_root_58803 = holder_58802.mountedRoot;
var root_58804 = (function (){var or__5142__auto__ = mounted_root_58803;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var root_58804 = module$node_modules$react_dom$client.createRoot(holder_58802);
(holder_58802.mountedRoot = root_58804);

return root_58804;
}
})();
root_58804.render(frontend.rfx.provider((cljs.core.truth_(new cljs.core.Keyword(null,"highlight","highlight",-800930873).cljs$core$IFn$_invoke$arity$1(ctx_menu_state))?frontend.extensions.pdf.core.pdf_highlights_ctx_menu(viewer,ctx_menu_state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clear-ctx-menu!","clear-ctx-menu!",1081183125),clear_ctx_menu_BANG_,new cljs.core.Keyword(null,"add-hl!","add-hl!",-832546833),add_hl_BANG_,new cljs.core.Keyword(null,"del-hl!","del-hl!",-703533207),del_hl_BANG_,new cljs.core.Keyword(null,"upd-hl!","upd-hl!",-275023274),upd_hl_BANG_], null)):null)));
} else {
}

return (function (){
return cljs.core.List.EMPTY;
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx_menu_state], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__pdf-highlights-cnt","div.extensions__pdf-highlights-cnt",-515568917),frontend.extensions.pdf.core.pdf_page_finder(viewer),frontend.extensions.pdf.core.pdf_highlight_area_selection(viewer,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"clear-ctx-menu!","clear-ctx-menu!",1081183125),clear_ctx_menu_BANG_,new cljs.core.Keyword(null,"show-ctx-menu!","show-ctx-menu!",-29500810),show_ctx_menu_BANG_,new cljs.core.Keyword(null,"add-hl!","add-hl!",-832546833),add_hl_BANG_], null))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$pdf$core$pdf_highlights__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__58590 = cljs.core.first(args__31746__auto__);
var G__58591 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__58590,G__58591) : io.factorhouse.hsx.core.obj_get.call(null,G__58590,G__58591));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"pdf-highlights","pdf-highlights",-892759914,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$extensions$pdf$core$pdf_highlights,args__31746__auto__,null);
}
};
var frontend$extensions$pdf$core$pdf_highlights = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58805__i = 0, G__58805__a = new Array(arguments.length -  0);
while (G__58805__i < G__58805__a.length) {G__58805__a[G__58805__i] = arguments[G__58805__i + 0]; ++G__58805__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58805__a,0,null);
} 
return frontend$extensions$pdf$core$pdf_highlights__delegate.call(this,args__31746__auto__);};
frontend$extensions$pdf$core$pdf_highlights.cljs$lang$maxFixedArity = 0;
frontend$extensions$pdf$core$pdf_highlights.cljs$lang$applyTo = (function (arglist__58806){
var args__31746__auto__ = cljs.core.seq(arglist__58806);
return frontend$extensions$pdf$core$pdf_highlights__delegate(args__31746__auto__);
});
frontend$extensions$pdf$core$pdf_highlights.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$pdf$core$pdf_highlights__delegate;
return frontend$extensions$pdf$core$pdf_highlights;
})()
;
var memo_comp__31747__auto__ = (function (){var G__58592 = comp__31745__auto__;
var G__58593 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__58592,G__58593) : io.factorhouse.hsx.core.react_memo.call(null,G__58592,G__58593));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"pdf-highlights");

return comp__31745__auto__;
})();
frontend.extensions.pdf.core.pdf_viewer = (function (){var render_fn__31744__auto__ = (function frontend$extensions$pdf$core$pdf_viewer(_url,pdf_document,p__58597,ops){
var map__58598 = p__58597;
var map__58598__$1 = cljs.core.__destructure_map(map__58598);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58598__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58598__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var pdf_current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58598__$1,new cljs.core.Keyword(null,"pdf-current","pdf-current",-2103011214));
var initial_hls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58598__$1,new cljs.core.Keyword(null,"initial-hls","initial-hls",-344014820));
var initial_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58598__$1,new cljs.core.Keyword(null,"initial-page","initial-page",1974282031));
var initial_scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58598__$1,new cljs.core.Keyword(null,"initial-scale","initial-scale",-2014682084));
var initial_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58598__$1,new cljs.core.Keyword(null,"initial-error","initial-error",-1070014476));
var _STAR_el_ref = (logseq.shui.hooks.create_ref.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.hooks.create_ref.cljs$core$IFn$_invoke$arity$0() : logseq.shui.hooks.create_ref.call(null));
var vec__58599 = logseq.shui.hooks.use_state(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"viewer","viewer",-783949853),null,new cljs.core.Keyword(null,"bus","bus",-1090873603),null,new cljs.core.Keyword(null,"link","link",-1769163468),null,new cljs.core.Keyword(null,"el","el",-1618201118),null], null));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58599,(0),null);
var set_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58599,(1),null);
var vec__58602 = logseq.shui.hooks.use_state(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loaded-pages","loaded-pages",1539616565),cljs.core.PersistentVector.EMPTY], null));
var ano_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58602,(0),null);
var set_ano_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58602,(1),null);
var vec__58605 = logseq.shui.hooks.use_state(false);
var page_ready_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58605,(0),null);
var set_page_ready_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58605,(1),null);
var vec__58608 = logseq.shui.hooks.use_atom(frontend.extensions.pdf.toolbar._STAR_area_dashed_QMARK_);
var area_dashed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58608,(0),null);
var _set_area_dashed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58608,(1),null);
logseq.shui.hooks.use_effect_BANG_((function (){
var event_bus = (new pdfjsViewer.EventBus());
var link_service = (new pdfjsViewer.PDFLinkService(({"eventBus": event_bus, "externalLinkTarget": (2)})));
var el = logseq.shui.hooks.deref(_STAR_el_ref);
var viewer = (new pdfjsViewer.PDFViewer(({"container": el, "eventBus": event_bus, "linkService": link_service, "findController": (new pdfjsViewer.PDFFindController(({"linkService": link_service, "eventBus": event_bus}))), "textLayerMode": (2), "annotationMode": (2), "removePageBorders": true})));
var in_system_win_QMARK_ = cljs.core.boolean$(el.closest(".is-system-window"));
(viewer.$groupIdentity = identity);

(viewer.$inSystemWindow = in_system_win_QMARK_);

link_service.setDocument(pdf_document);

link_service.setViewer(viewer);

var G__58611_58807 = event_bus;
G__58611_58807.on("pagesinit",(function (){
(viewer.currentScaleValue = (function (){var or__5142__auto__ = initial_scale;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "auto";
}
})());

return (set_page_ready_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_page_ready_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_page_ready_BANG_.call(null,true));
}));

G__58611_58807.on("resizing",(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(viewer.currentScaleValue,"auto")){
return (viewer.currentScaleValue = "auto");
} else {
return null;
}
}));

G__58611_58807.on(cljs.core.name(new cljs.core.Keyword(null,"ls-update-extra-state","ls-update-extra-state",893479284)),(function (p1__58594_SHARP_){
var temp__5825__auto__ = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(p1__58594_SHARP_);
if(cljs.core.truth_(temp__5825__auto__)){
var extra = temp__5825__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-hls-extra!","set-hls-extra!",2055356477).cljs$core$IFn$_invoke$arity$1(ops),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [extra], null));
} else {
return null;
}
}));

G__58611_58807.on(cljs.core.name(new cljs.core.Keyword(null,"scaleChanging","scaleChanging",506072743)),(function (p1__58595_SHARP_){
var temp__5825__auto__ = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(p1__58595_SHARP_);
if(cljs.core.truth_(temp__5825__auto__)){
var data = temp__5825__auto__;
(viewer.currentScaleValue = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(data));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-hls-extra!","set-hls-extra!",2055356477).cljs$core$IFn$_invoke$arity$1(ops),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [data], null));
} else {
return null;
}
}));

G__58611_58807.on(cljs.core.name(new cljs.core.Keyword(null,"textlayerrendered","textlayerrendered",1606102900)),(function (p1__58596_SHARP_){
var temp__5825__auto__ = p1__58596_SHARP_.pageNumber;
if(cljs.core.truth_(temp__5825__auto__)){
var page = temp__5825__auto__;
var G__58612 = (function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"loaded-pages","loaded-pages",1539616565),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"loaded-pages","loaded-pages",1539616565).cljs$core$IFn$_invoke$arity$1(s),page));
});
return (set_ano_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_ano_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__58612) : set_ano_state_BANG_.call(null,G__58612));
} else {
return null;
}
}));


promesa.core.then.cljs$core$IFn$_invoke$arity$2(viewer.setDocument(pdf_document),(function (){
var G__58613 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"viewer","viewer",-783949853),viewer,new cljs.core.Keyword(null,"bus","bus",-1090873603),event_bus,new cljs.core.Keyword(null,"link","link",-1769163468),link_service,new cljs.core.Keyword(null,"el","el",-1618201118),el], null);
return (set_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__58613) : set_state_BANG_.call(null,G__58613));
}));

(window.lsActivePdfViewer = viewer);

setTimeout((function (){
return (viewer.currentPageNumber = initial_page);
}),(16));

return (function (){
pdf_document.destroy();

(window.lsActivePdfViewer = null);

return viewer.cleanup();
});
}),cljs.core.PersistentVector.EMPTY);

logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto__ = new cljs.core.Keyword(null,"viewer","viewer",-783949853).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5825__auto__)){
var viewer = temp__5825__auto__;
if(cljs.core.truth_(frontend.extensions.pdf.windows.check_viewer_in_system_win_QMARK_(viewer))){
var G__58614 = frontend.extensions.pdf.windows.resolve_own_document(viewer);
if((G__58614 == null)){
return null;
} else {
return (G__58614.title = filename);
}
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer","viewer",-783949853).cljs$core$IFn$_invoke$arity$1(state)], null));

var viewer = new cljs.core.Keyword(null,"viewer","viewer",-783949853).cljs$core$IFn$_invoke$arity$1(state);
var in_system_window_QMARK_ = (function (){var G__58615 = viewer;
if((G__58615 == null)){
return null;
} else {
return G__58615.$inSystemWindow;
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__pdf-viewer-cnt.visible-scrollbar","div.extensions__pdf-viewer-cnt.visible-scrollbar",-197082809),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__pdf-viewer.overflow-x-auto.absolute","div.extensions__pdf-viewer.overflow-x-auto.absolute",-760021454),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el_ref,new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"is-area-dashed","is-area-dashed",510137497),area_dashed_QMARK_], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pdfViewer","div.pdfViewer",1496833374),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","viewer","pdf/viewer",-784101231)], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pp-holder","div.pp-holder",582450709)], null),frontend.extensions.pdf.core.pdf_highlight_finder(viewer),(cljs.core.truth_((function (){var and__5140__auto__ = page_ready_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = viewer;
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.not(initial_error);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.extensions.pdf.core.pdf_highlights,new cljs.core.Keyword(null,"el","el",-1618201118).cljs$core$IFn$_invoke$arity$1(state),viewer,initial_hls,new cljs.core.Keyword(null,"loaded-pages","loaded-pages",1539616565).cljs$core$IFn$_invoke$arity$1(ano_state),ops], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"pdf-highlights"], null)):null)], null),(cljs.core.truth_((function (){var and__5140__auto__ = page_ready_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return viewer;
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(cljs.core.truth_(in_system_window_QMARK_)?null:cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.extensions.pdf.core.pdf_resizer,viewer], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"pdf-resizer"], null))),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.extensions.pdf.toolbar.pdf_toolbar,viewer,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-external-window!","on-external-window!",244908467),(function (){
return frontend.extensions.pdf.core.open_external_win_BANG_(frontend.state.get_current_pdf());
}),new cljs.core.Keyword(null,"pdf-current","pdf-current",-2103011214),pdf_current], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"pdf-toolbar"], null))], null):null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$pdf$core$pdf_viewer__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__58616 = cljs.core.first(args__31746__auto__);
var G__58617 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__58616,G__58617) : io.factorhouse.hsx.core.obj_get.call(null,G__58616,G__58617));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"pdf-viewer","pdf-viewer",234648812,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","data-var","large-vars/data-var",1805150589),true], null)),args__31746__auto__),frontend$extensions$pdf$core$pdf_viewer,args__31746__auto__,null);
}
};
var frontend$extensions$pdf$core$pdf_viewer = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58808__i = 0, G__58808__a = new Array(arguments.length -  0);
while (G__58808__i < G__58808__a.length) {G__58808__a[G__58808__i] = arguments[G__58808__i + 0]; ++G__58808__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58808__a,0,null);
} 
return frontend$extensions$pdf$core$pdf_viewer__delegate.call(this,args__31746__auto__);};
frontend$extensions$pdf$core$pdf_viewer.cljs$lang$maxFixedArity = 0;
frontend$extensions$pdf$core$pdf_viewer.cljs$lang$applyTo = (function (arglist__58809){
var args__31746__auto__ = cljs.core.seq(arglist__58809);
return frontend$extensions$pdf$core$pdf_viewer__delegate(args__31746__auto__);
});
frontend$extensions$pdf$core$pdf_viewer.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$pdf$core$pdf_viewer__delegate;
return frontend$extensions$pdf$core$pdf_viewer;
})()
;
var memo_comp__31747__auto__ = (function (){var G__58618 = comp__31745__auto__;
var G__58619 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__58618,G__58619) : io.factorhouse.hsx.core.react_memo.call(null,G__58618,G__58619));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"pdf-viewer");

return comp__31745__auto__;
})();
frontend.extensions.pdf.core.pdf_password_input = (function (){var render_fn__31744__auto__ = (function frontend$extensions$pdf$core$pdf_password_input(confirm_fn){
var password = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1("");
}),cljs.core.PersistentVector.EMPTY);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-lg.mb-4","div.text-lg.mb-4",-769836558),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","password-required","pdf/password-required",-341976974)], 0))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sm:flex.sm:items-start","div.sm:flex.sm:items-start",-437342012),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-3.text-center.sm:mt-0.sm:text-left","div.mt-3.text-center.sm:mt-0.sm:text-left",-2146662734),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3#modal-headline.leading-6.font-medium","h3#modal-headline.leading-6.font-medium",-587553186),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","password-protected-desc","pdf/password-protected-desc",1618821203)], 0))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-input.block.w-full.sm:text-sm.sm:leading-5.my-2.mb-4","input.form-input.block.w-full.sm:text-sm.sm:leading-5.my-2.mb-4",-1559665001),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.reset_BANG_(password,frontend.util.evalue(e));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-5.sm:mt-4.flex","div.mt-5.sm:mt-4.flex",-982266646),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","submit","ui/submit",-49310281)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var password__$1 = cljs.core.deref(password);
return (confirm_fn.cljs$core$IFn$_invoke$arity$1 ? confirm_fn.cljs$core$IFn$_invoke$arity$1(password__$1) : confirm_fn.call(null,password__$1));
})], null)], 0))], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$pdf$core$pdf_password_input__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__58620 = cljs.core.first(args__31746__auto__);
var G__58621 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__58620,G__58621) : io.factorhouse.hsx.core.obj_get.call(null,G__58620,G__58621));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"pdf-password-input","pdf-password-input",-41370973,null),args__31746__auto__),frontend$extensions$pdf$core$pdf_password_input,args__31746__auto__,null);
}
};
var frontend$extensions$pdf$core$pdf_password_input = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58810__i = 0, G__58810__a = new Array(arguments.length -  0);
while (G__58810__i < G__58810__a.length) {G__58810__a[G__58810__i] = arguments[G__58810__i + 0]; ++G__58810__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58810__a,0,null);
} 
return frontend$extensions$pdf$core$pdf_password_input__delegate.call(this,args__31746__auto__);};
frontend$extensions$pdf$core$pdf_password_input.cljs$lang$maxFixedArity = 0;
frontend$extensions$pdf$core$pdf_password_input.cljs$lang$applyTo = (function (arglist__58811){
var args__31746__auto__ = cljs.core.seq(arglist__58811);
return frontend$extensions$pdf$core$pdf_password_input__delegate(args__31746__auto__);
});
frontend$extensions$pdf$core$pdf_password_input.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$pdf$core$pdf_password_input__delegate;
return frontend$extensions$pdf$core$pdf_password_input;
})()
;
var memo_comp__31747__auto__ = (function (){var G__58622 = comp__31745__auto__;
var G__58623 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__58622,G__58623) : io.factorhouse.hsx.core.react_memo.call(null,G__58622,G__58623));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"pdf-password-input");

return comp__31745__auto__;
})();
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.pdf !== 'undefined') && (typeof frontend.extensions.pdf.core !== 'undefined') && (typeof frontend.extensions.pdf.core.debounced_set_property_BANG_ !== 'undefined')){
} else {
frontend.extensions.pdf.core.debounced_set_property_BANG_ = goog.functions.debounce(frontend.handler.property.set_block_property_BANG_,(300));
}
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.pdf !== 'undefined') && (typeof frontend.extensions.pdf.core !== 'undefined') && (typeof frontend.extensions.pdf.core.debounced_set_storage_BANG_ !== 'undefined')){
} else {
frontend.extensions.pdf.core.debounced_set_storage_BANG_ = goog.functions.debounce(frontend.storage.set,(300));
}
frontend.extensions.pdf.core.debounce_set_last_visit_page_BANG_ = (function frontend$extensions$pdf$core$debounce_set_last_visit_page_BANG_(asset,last_visit_page){
if(((typeof last_visit_page === 'number') && ((last_visit_page > (0))))){
var G__58624 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(asset);
var G__58625 = new cljs.core.Keyword("logseq.property.asset","last-visit-page","logseq.property.asset/last-visit-page",2107803535);
var G__58626 = last_visit_page;
return (frontend.extensions.pdf.core.debounced_set_property_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.extensions.pdf.core.debounced_set_property_BANG_.cljs$core$IFn$_invoke$arity$3(G__58624,G__58625,G__58626) : frontend.extensions.pdf.core.debounced_set_property_BANG_.call(null,G__58624,G__58625,G__58626));
} else {
return null;
}
});
frontend.extensions.pdf.core.debounce_set_last_visit_scale_BANG_ = (function frontend$extensions$pdf$core$debounce_set_last_visit_scale_BANG_(asset,last_visit_scale){
if(((typeof last_visit_scale === 'number') || (typeof last_visit_scale === 'string'))){
var G__58627 = (""+"pdf-last-visit-scale/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(asset)));
var G__58628 = (function (){var or__5142__auto__ = last_visit_scale;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "auto";
}
})();
return (frontend.extensions.pdf.core.debounced_set_storage_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.extensions.pdf.core.debounced_set_storage_BANG_.cljs$core$IFn$_invoke$arity$2(G__58627,G__58628) : frontend.extensions.pdf.core.debounced_set_storage_BANG_.call(null,G__58627,G__58628));
} else {
return null;
}
});
frontend.extensions.pdf.core.pdf_loader = (function (){var render_fn__31744__auto__ = (function frontend$extensions$pdf$core$pdf_loader(p__58631){
var map__58632 = p__58631;
var map__58632__$1 = cljs.core.__destructure_map(map__58632);
var pdf_current = map__58632__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58632__$1,new cljs.core.Keyword(null,"url","url",276297046));
var hls_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58632__$1,new cljs.core.Keyword(null,"hls-file","hls-file",192681120));
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58632__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58632__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58632__$1,new cljs.core.Keyword(null,"block","block",664686210));
var _STAR_doc_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var vec__58633 = logseq.shui.hooks.use_state(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"pdf-document","pdf-document",-1928964968),null,new cljs.core.Keyword(null,"status","status",-1997798413),null], null));
var loader_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58633,(0),null);
var set_loader_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58633,(1),null);
var vec__58636 = logseq.shui.hooks.use_state(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"initial-hls","initial-hls",-344014820),null,new cljs.core.Keyword(null,"latest-hls","latest-hls",-510805948),null,new cljs.core.Keyword(null,"extra","extra",1612569067),null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false,new cljs.core.Keyword(null,"error","error",-978969032),null], null));
var hls_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58636,(0),null);
var set_hls_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58636,(1),null);
var vec__58639 = logseq.shui.hooks.use_state(null);
var doc_password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58639,(0),null);
var set_doc_password_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58639,(1),null);
var vec__58642 = logseq.shui.hooks.use_state((1));
var initial_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58642,(0),null);
var set_initial_page_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58642,(1),null);
var vec__58645 = logseq.shui.hooks.use_state("auto");
var initial_scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58645,(0),null);
var set_initial_scale_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58645,(1),null);
var set_dirty_hls_BANG_ = (function (latest_hls){
var G__58648 = (function (p1__58629_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__58629_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-hls","initial-hls",-344014820),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"latest-hls","latest-hls",-510805948),latest_hls], null)], 0));
});
return (set_hls_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_hls_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__58648) : set_hls_state_BANG_.call(null,G__58648));
});
var set_hls_extra_BANG_ = (function (extra){
if(cljs.core.truth_(block)){
frontend.extensions.pdf.core.debounce_set_last_visit_scale_BANG_(new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(pdf_current),new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(extra));

return frontend.extensions.pdf.core.debounce_set_last_visit_page_BANG_(new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(pdf_current),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(extra));
} else {
return null;
}
});
logseq.shui.hooks.use_effect_BANG_((function (){
promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.extensions.pdf.assets.db_based_load_hls_data$(pdf_current)),(function (data){
return promesa.protocols._mcat(promesa.protocols._promise(data),(function (p__58649){
var map__58650 = p__58649;
var map__58650__$1 = cljs.core.__destructure_map(map__58650);
var highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58650__$1,new cljs.core.Keyword(null,"highlights","highlights",945143465));
var extra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58650__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__58651 = (function (){var or__5142__auto__ = (function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(extra);
if(cljs.core.truth_(temp__5825__auto__)){
var page = temp__5825__auto__;
return frontend.util.safe_parse_int(page);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (1);
}
})();
return (set_initial_page_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_initial_page_BANG_.cljs$core$IFn$_invoke$arity$1(G__58651) : set_initial_page_BANG_.call(null,G__58651));
})()),(function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__58652 = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(extra);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "auto";
}
})();
return (set_initial_scale_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_initial_scale_BANG_.cljs$core$IFn$_invoke$arity$1(G__58652) : set_initial_scale_BANG_.call(null,G__58652));
})()),(function (___21901__auto____$1){
return promesa.protocols._promise((function (){var G__58653 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-hls","initial-hls",-344014820),highlights,new cljs.core.Keyword(null,"latest-hls","latest-hls",-510805948),highlights,new cljs.core.Keyword(null,"extra","extra",1612569067),extra,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true], null);
return (set_hls_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_hls_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__58653) : set_hls_state_BANG_.call(null,G__58653));
})());
}));
}));
}));
}));
})),(function (e){
console.error("[load hls error]",e);

var msg = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","load-highlights-file-error","pdf/load-highlights-file-error",-2142394968),new cljs.core.Keyword(null,"hls-file","hls-file",192681120).cljs$core$IFn$_invoke$arity$1(pdf_current),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e))], 0));
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.Keyword(null,"error","error",-978969032));

var G__58654 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true,new cljs.core.Keyword(null,"error","error",-978969032),e], null);
return (set_hls_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_hls_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__58654) : set_hls_state_BANG_.call(null,G__58654));
}));

return (function (){
return cljs.core.List.EMPTY;
});
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hls_file,pdf_current], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var loader_el = logseq.shui.hooks.deref(_STAR_doc_ref);
var get_doc$ = (function (opts){
return pdfjsLib.getDocument(opts).promise;
});
var opts = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"password","password",417022471),(function (){var or__5142__auto__ = doc_password;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"ownerDocument","ownerDocument",1761316797),loader_el.ownerDocument,new cljs.core.Keyword(null,"cMapUrl","cMapUrl",-2054175479),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var G__58656 = location.host;
if((G__58656 == null)){
return null;
} else {
return clojure.string.ends_with_QMARK_(G__58656,"logseq.com");
}
})())?"./static/":"./"))+"js/pdfjs/cmaps/"),new cljs.core.Keyword(null,"cMapPacked","cMapPacked",377437190),true,new cljs.core.Keyword(null,"supportsMouseWheelZoomCtrlKey","supportsMouseWheelZoomCtrlKey",819234591),true,new cljs.core.Keyword(null,"supportsMouseWheelZoomMetaKey","supportsMouseWheelZoomMetaKey",-1291582171),true], null);
var G__58657_58812 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
(set_loader_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_loader_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__58657_58812) : set_loader_state_BANG_.call(null,G__58657_58812));

promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(get_doc$(cljs.core.clj__GT_js(opts)),(function (doc){
var G__58658 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pdf-document","pdf-document",-1928964968),doc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"completed","completed",-486056503)], null);
return (set_loader_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_loader_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__58658) : set_loader_state_BANG_.call(null,G__58658));
})),(function (p1__58630_SHARP_){
var G__58659 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),p1__58630_SHARP_], null);
return (set_loader_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_loader_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__58659) : set_loader_state_BANG_.call(null,G__58659));
}));

return (function (){
return cljs.core.List.EMPTY;
});
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,doc_password], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(loader_state);
if(cljs.core.truth_(temp__5825__auto__)){
var error = temp__5825__auto__;
console.error("[PDF loader]",new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(loader_state));

var G__58660 = error.name;
switch (G__58660) {
case "MissingPDFException":
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","missing-file-error","pdf/missing-file-error",-900195401),error.message], 0)),new cljs.core.Keyword(null,"error","error",-978969032),false);

return frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","current","pdf/current",-1087936477),null);

break;
case "InvalidPDFException":
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","corrupted-file-error","pdf/corrupted-file-error",1478460188),error.message], 0)),new cljs.core.Keyword(null,"error","error",-978969032),false);

return frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","current","pdf/current",-1087936477),null);

break;
case "PasswordException":
var G__58661_58814 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),null], null);
(set_loader_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_loader_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__58661_58814) : set_loader_state_BANG_.call(null,G__58661_58814));

var G__58662 = (function (p__58663){
var map__58664 = p__58663;
var map__58664__$1 = cljs.core.__destructure_map(map__58664);
var close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58664__$1,new cljs.core.Keyword(null,"close","close",1835149582));
var on_password_fn = (function (password){
(close.cljs$core$IFn$_invoke$arity$0 ? close.cljs$core$IFn$_invoke$arity$0() : close.call(null));

return (set_doc_password_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_doc_password_BANG_.cljs$core$IFn$_invoke$arity$1(password) : set_doc_password_BANG_.call(null,password));
});
return frontend.extensions.pdf.core.pdf_password_input(on_password_fn);
});
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1(G__58662) : logseq.shui.ui.dialog_open_BANG_.call(null,G__58662));

break;
default:
var ext_url = new cljs.core.Keyword("logseq.property.asset","external-url","logseq.property.asset/external-url",-1364775163).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_((function (){var and__5140__auto__ = typeof ext_url === 'string';
if(and__5140__auto__){
return cljs.core.re_find(/^https?:\/\//,ext_url);
} else {
return and__5140__auto__;
}
})())){
frontend.util.open_url(ext_url);

return frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","current","pdf/current",-1087936477),null);
} else {
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","generic-error","pdf/generic-error",-1704551853),error.name,error.message], 0)),new cljs.core.Keyword(null,"error","error",-978969032),false);

return frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","current","pdf/current",-1087936477),null);
}

}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(loader_state)], null));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),frontend.extensions.pdf.toolbar.highlights_ctx.Provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),hls_state], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__pdf-loader","div.extensions__pdf-loader",389742287),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_doc_ref], null),(function (){var status_doc = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(loader_state);
var initial_hls = new cljs.core.Keyword(null,"initial-hls","initial-hls",-344014820).cljs$core$IFn$_invoke$arity$1(hls_state);
var initial_error = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(hls_state);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status_doc,new cljs.core.Keyword(null,"loading","loading",-737050189))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-center.items-center.h-screen.text-gray-500.text-lg","div.flex.justify-center.items-center.h-screen.text-gray-500.text-lg",-498091746),frontend.components.svg.loading], null);
} else {
var temp__5825__auto__ = (function (){var and__5140__auto__ = new cljs.core.Keyword(null,"loaded","loaded",-1246482293).cljs$core$IFn$_invoke$arity$1(hls_state);
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"pdf-document","pdf-document",-1928964968).cljs$core$IFn$_invoke$arity$1(loader_state);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var pdf_document = temp__5825__auto__;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.extensions.pdf.core.pdf_viewer,url,pdf_document,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"identity","identity",1647396035),identity,new cljs.core.Keyword(null,"filename","filename",-1428840783),filename,new cljs.core.Keyword(null,"pdf-current","pdf-current",-2103011214),pdf_current,new cljs.core.Keyword(null,"initial-hls","initial-hls",-344014820),initial_hls,new cljs.core.Keyword(null,"initial-page","initial-page",1974282031),initial_page,new cljs.core.Keyword(null,"initial-scale","initial-scale",-2014682084),initial_scale,new cljs.core.Keyword(null,"initial-error","initial-error",-1070014476),initial_error], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"set-dirty-hls!","set-dirty-hls!",-1468393512),set_dirty_hls_BANG_,new cljs.core.Keyword(null,"set-hls-extra!","set-hls-extra!",2055356477),set_hls_extra_BANG_], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"pdf-viewer"], null));
} else {
return null;
}
}
})()], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$pdf$core$pdf_loader__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__58665 = cljs.core.first(args__31746__auto__);
var G__58666 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__58665,G__58666) : io.factorhouse.hsx.core.obj_get.call(null,G__58665,G__58666));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"pdf-loader","pdf-loader",-1112515371,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","data-var","large-vars/data-var",1805150589),true], null)),args__31746__auto__),frontend$extensions$pdf$core$pdf_loader,args__31746__auto__,null);
}
};
var frontend$extensions$pdf$core$pdf_loader = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58815__i = 0, G__58815__a = new Array(arguments.length -  0);
while (G__58815__i < G__58815__a.length) {G__58815__a[G__58815__i] = arguments[G__58815__i + 0]; ++G__58815__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58815__a,0,null);
} 
return frontend$extensions$pdf$core$pdf_loader__delegate.call(this,args__31746__auto__);};
frontend$extensions$pdf$core$pdf_loader.cljs$lang$maxFixedArity = 0;
frontend$extensions$pdf$core$pdf_loader.cljs$lang$applyTo = (function (arglist__58816){
var args__31746__auto__ = cljs.core.seq(arglist__58816);
return frontend$extensions$pdf$core$pdf_loader__delegate(args__31746__auto__);
});
frontend$extensions$pdf$core$pdf_loader.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$pdf$core$pdf_loader__delegate;
return frontend$extensions$pdf$core$pdf_loader;
})()
;
var memo_comp__31747__auto__ = (function (){var G__58667 = comp__31745__auto__;
var G__58668 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__58667,G__58668) : io.factorhouse.hsx.core.react_memo.call(null,G__58667,G__58668));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"pdf-loader");

return comp__31745__auto__;
})();
frontend.extensions.pdf.core.pdf_container_outer = (function (){var render_fn__31744__auto__ = (function frontend$extensions$pdf$core$pdf_container_outer(child){
frontend.modules.shortcut.core.use_shortcut_handler_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("shortcut.handler","pdf","shortcut.handler/pdf",468089398));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),child], null);
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$pdf$core$pdf_container_outer__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__58669 = cljs.core.first(args__31746__auto__);
var G__58670 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__58669,G__58670) : io.factorhouse.hsx.core.obj_get.call(null,G__58669,G__58670));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"pdf-container-outer","pdf-container-outer",1301118442,null),args__31746__auto__),frontend$extensions$pdf$core$pdf_container_outer,args__31746__auto__,null);
}
};
var frontend$extensions$pdf$core$pdf_container_outer = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58817__i = 0, G__58817__a = new Array(arguments.length -  0);
while (G__58817__i < G__58817__a.length) {G__58817__a[G__58817__i] = arguments[G__58817__i + 0]; ++G__58817__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58817__a,0,null);
} 
return frontend$extensions$pdf$core$pdf_container_outer__delegate.call(this,args__31746__auto__);};
frontend$extensions$pdf$core$pdf_container_outer.cljs$lang$maxFixedArity = 0;
frontend$extensions$pdf$core$pdf_container_outer.cljs$lang$applyTo = (function (arglist__58818){
var args__31746__auto__ = cljs.core.seq(arglist__58818);
return frontend$extensions$pdf$core$pdf_container_outer__delegate(args__31746__auto__);
});
frontend$extensions$pdf$core$pdf_container_outer.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$pdf$core$pdf_container_outer__delegate;
return frontend$extensions$pdf$core$pdf_container_outer;
})()
;
var memo_comp__31747__auto__ = (function (){var G__58671 = comp__31745__auto__;
var G__58672 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__58671,G__58672) : io.factorhouse.hsx.core.react_memo.call(null,G__58671,G__58672));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"pdf-container-outer");

return comp__31745__auto__;
})();
frontend.extensions.pdf.core.pdf_container = (function (){var render_fn__31744__auto__ = (function frontend$extensions$pdf$core$pdf_container(p__58673){
var map__58674 = p__58673;
var map__58674__$1 = cljs.core.__destructure_map(map__58674);
var pdf_current = map__58674__$1;
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58674__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var vec__58675 = logseq.shui.hooks.use_state(false);
var prepared = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58675,(0),null);
var set_prepared_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58675,(1),null);
var vec__58678 = logseq.shui.hooks.use_state(false);
var ready = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58678,(0),null);
var set_ready_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58678,(1),null);
logseq.shui.hooks.use_effect_BANG_((function (){
return (set_prepared_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_prepared_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_prepared_BANG_.call(null,true));
}),cljs.core.PersistentVector.EMPTY);

logseq.shui.hooks.use_effect_BANG_((function (){
setTimeout((function (){
return (set_ready_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_ready_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_ready_BANG_.call(null,true));
}),(100));

return (function (){
return (set_ready_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_ready_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_ready_BANG_.call(null,false));
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [identity], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__pdf-container","div.extensions__pdf-container",1301087154),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(""+"pdf-layout-container_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(identity))], null),(cljs.core.truth_((function (){var and__5140__auto__ = prepared;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = identity;
if(cljs.core.truth_(and__5140__auto____$1)){
return ready;
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?frontend.extensions.pdf.core.pdf_loader(pdf_current):null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$pdf$core$pdf_container__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__58681 = cljs.core.first(args__31746__auto__);
var G__58682 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__58681,G__58682) : io.factorhouse.hsx.core.obj_get.call(null,G__58681,G__58682));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"pdf-container","pdf-container",1306254101,null),args__31746__auto__),frontend$extensions$pdf$core$pdf_container,args__31746__auto__,null);
}
};
var frontend$extensions$pdf$core$pdf_container = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58819__i = 0, G__58819__a = new Array(arguments.length -  0);
while (G__58819__i < G__58819__a.length) {G__58819__a[G__58819__i] = arguments[G__58819__i + 0]; ++G__58819__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58819__a,0,null);
} 
return frontend$extensions$pdf$core$pdf_container__delegate.call(this,args__31746__auto__);};
frontend$extensions$pdf$core$pdf_container.cljs$lang$maxFixedArity = 0;
frontend$extensions$pdf$core$pdf_container.cljs$lang$applyTo = (function (arglist__58820){
var args__31746__auto__ = cljs.core.seq(arglist__58820);
return frontend$extensions$pdf$core$pdf_container__delegate(args__31746__auto__);
});
frontend$extensions$pdf$core$pdf_container.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$pdf$core$pdf_container__delegate;
return frontend$extensions$pdf$core$pdf_container;
})()
;
var memo_comp__31747__auto__ = (function (){var G__58683 = comp__31745__auto__;
var G__58684 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__58683,G__58684) : io.factorhouse.hsx.core.react_memo.call(null,G__58683,G__58684));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"pdf-container");

return comp__31745__auto__;
})();
frontend.extensions.pdf.core.playground_effects = (function (){var render_fn__31744__auto__ = (function frontend$extensions$pdf$core$playground_effects(active){
logseq.shui.hooks.use_effect_BANG_((function (){
var flg = "is-pdf-active";
var cls = document.body.classList;
var and__5140__auto___58821 = active;
if(cljs.core.truth_(and__5140__auto___58821)){
cls.add(flg);
} else {
}

return (function (){
return cls.remove(flg);
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [active], null));

return null;
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$pdf$core$playground_effects__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__58685 = cljs.core.first(args__31746__auto__);
var G__58686 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__58685,G__58686) : io.factorhouse.hsx.core.obj_get.call(null,G__58685,G__58686));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"playground-effects","playground-effects",2096639945,null),args__31746__auto__),frontend$extensions$pdf$core$playground_effects,args__31746__auto__,null);
}
};
var frontend$extensions$pdf$core$playground_effects = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58822__i = 0, G__58822__a = new Array(arguments.length -  0);
while (G__58822__i < G__58822__a.length) {G__58822__a[G__58822__i] = arguments[G__58822__i + 0]; ++G__58822__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58822__a,0,null);
} 
return frontend$extensions$pdf$core$playground_effects__delegate.call(this,args__31746__auto__);};
frontend$extensions$pdf$core$playground_effects.cljs$lang$maxFixedArity = 0;
frontend$extensions$pdf$core$playground_effects.cljs$lang$applyTo = (function (arglist__58823){
var args__31746__auto__ = cljs.core.seq(arglist__58823);
return frontend$extensions$pdf$core$playground_effects__delegate(args__31746__auto__);
});
frontend$extensions$pdf$core$playground_effects.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$pdf$core$playground_effects__delegate;
return frontend$extensions$pdf$core$playground_effects;
})()
;
var memo_comp__31747__auto__ = (function (){var G__58687 = comp__31745__auto__;
var G__58688 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__58687,G__58688) : io.factorhouse.hsx.core.react_memo.call(null,G__58687,G__58688));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"playground-effects");

return comp__31745__auto__;
})();
frontend.extensions.pdf.core.default_embed_playground = (function (){var render_fn__31744__auto__ = (function frontend$extensions$pdf$core$default_embed_playground(){
var pdf_current = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","current","pdf/current",-1087936477)], null));
var system_win_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","system-win?","pdf/system-win?",-2028066550)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__pdf-playground","div.extensions__pdf-playground",-344425869),frontend.extensions.pdf.core.playground_effects(((cljs.core.not(system_win_QMARK_)) && ((!((pdf_current == null)))))),(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not(system_win_QMARK_);
if(and__5140__auto__){
return pdf_current;
} else {
return and__5140__auto__;
}
})())?module$node_modules$react_dom$index.createPortal(frontend.extensions.pdf.core.pdf_container_outer(frontend.extensions.pdf.core.pdf_container(pdf_current)),document.querySelector("#app-single-container")):null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$pdf$core$default_embed_playground__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__58689 = cljs.core.first(args__31746__auto__);
var G__58690 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__58689,G__58690) : io.factorhouse.hsx.core.obj_get.call(null,G__58689,G__58690));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"default-embed-playground","default-embed-playground",-2050365133,null),args__31746__auto__),frontend$extensions$pdf$core$default_embed_playground,args__31746__auto__,null);
}
};
var frontend$extensions$pdf$core$default_embed_playground = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58824__i = 0, G__58824__a = new Array(arguments.length -  0);
while (G__58824__i < G__58824__a.length) {G__58824__a[G__58824__i] = arguments[G__58824__i + 0]; ++G__58824__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58824__a,0,null);
} 
return frontend$extensions$pdf$core$default_embed_playground__delegate.call(this,args__31746__auto__);};
frontend$extensions$pdf$core$default_embed_playground.cljs$lang$maxFixedArity = 0;
frontend$extensions$pdf$core$default_embed_playground.cljs$lang$applyTo = (function (arglist__58825){
var args__31746__auto__ = cljs.core.seq(arglist__58825);
return frontend$extensions$pdf$core$default_embed_playground__delegate(args__31746__auto__);
});
frontend$extensions$pdf$core$default_embed_playground.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$pdf$core$default_embed_playground__delegate;
return frontend$extensions$pdf$core$default_embed_playground;
})()
;
var memo_comp__31747__auto__ = (function (){var G__58691 = comp__31745__auto__;
var G__58692 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__58691,G__58692) : io.factorhouse.hsx.core.react_memo.call(null,G__58691,G__58692));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"default-embed-playground");

return comp__31745__auto__;
})();
frontend.extensions.pdf.core.system_embed_playground = (function (){var render_fn__31744__auto__ = (function frontend$extensions$pdf$core$system_embed_playground(){
var pdf_current = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","current","pdf/current",-1087936477)], null));
return frontend.extensions.pdf.core.pdf_container(pdf_current);
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$pdf$core$system_embed_playground__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__58693 = cljs.core.first(args__31746__auto__);
var G__58694 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__58693,G__58694) : io.factorhouse.hsx.core.obj_get.call(null,G__58693,G__58694));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"system-embed-playground","system-embed-playground",1528430284,null),args__31746__auto__),frontend$extensions$pdf$core$system_embed_playground,args__31746__auto__,null);
}
};
var frontend$extensions$pdf$core$system_embed_playground = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58826__i = 0, G__58826__a = new Array(arguments.length -  0);
while (G__58826__i < G__58826__a.length) {G__58826__a[G__58826__i] = arguments[G__58826__i + 0]; ++G__58826__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58826__a,0,null);
} 
return frontend$extensions$pdf$core$system_embed_playground__delegate.call(this,args__31746__auto__);};
frontend$extensions$pdf$core$system_embed_playground.cljs$lang$maxFixedArity = 0;
frontend$extensions$pdf$core$system_embed_playground.cljs$lang$applyTo = (function (arglist__58827){
var args__31746__auto__ = cljs.core.seq(arglist__58827);
return frontend$extensions$pdf$core$system_embed_playground__delegate(args__31746__auto__);
});
frontend$extensions$pdf$core$system_embed_playground.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$pdf$core$system_embed_playground__delegate;
return frontend$extensions$pdf$core$system_embed_playground;
})()
;
var memo_comp__31747__auto__ = (function (){var G__58695 = comp__31745__auto__;
var G__58696 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__58695,G__58696) : io.factorhouse.hsx.core.react_memo.call(null,G__58695,G__58696));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"system-embed-playground");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.extensions.pdf.core.js.map
