goog.provide('frontend.extensions.pdf.windows');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
frontend.extensions.pdf.windows._STAR_active_win = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
frontend.extensions.pdf.windows._STAR_exit_pending_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
frontend.extensions.pdf.windows.resolve_styles_BANG_ = (function frontend$extensions$pdf$windows$resolve_styles_BANG_(doc){
var temp__5825__auto__ = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__82622_SHARP_){
if(cljs.core.truth_((function (){var G__82627 = p1__82622_SHARP_;
var G__82627__$1 = (((G__82627 == null))?null:G__82627.href);
if((G__82627__$1 == null)){
return null;
} else {
return G__82627__$1.endsWith("style.css");
}
})())){
return p1__82622_SHARP_.href;
} else {
return null;
}
}),cljs.core.seq(document.styleSheets));
if(cljs.core.truth_(temp__5825__auto__)){
var styles = temp__5825__auto__;
var seq__82628 = cljs.core.seq(styles);
var chunk__82629 = null;
var count__82630 = (0);
var i__82631 = (0);
while(true){
if((i__82631 < count__82630)){
var r = chunk__82629.cljs$core$IIndexed$_nth$arity$2(null,i__82631);
var link_82696 = document.createElement("link");
(link_82696.rel = "stylesheet");

(link_82696.href = r);

doc.head.appendChild(link_82696);


var G__82697 = seq__82628;
var G__82698 = chunk__82629;
var G__82699 = count__82630;
var G__82700 = (i__82631 + (1));
seq__82628 = G__82697;
chunk__82629 = G__82698;
count__82630 = G__82699;
i__82631 = G__82700;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__82628);
if(temp__5825__auto____$1){
var seq__82628__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__82628__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__82628__$1);
var G__82703 = cljs.core.chunk_rest(seq__82628__$1);
var G__82704 = c__5673__auto__;
var G__82705 = cljs.core.count(c__5673__auto__);
var G__82706 = (0);
seq__82628 = G__82703;
chunk__82629 = G__82704;
count__82630 = G__82705;
i__82631 = G__82706;
continue;
} else {
var r = cljs.core.first(seq__82628__$1);
var link_82707 = document.createElement("link");
(link_82707.rel = "stylesheet");

(link_82707.href = r);

doc.head.appendChild(link_82707);


var G__82708 = cljs.core.next(seq__82628__$1);
var G__82709 = null;
var G__82710 = (0);
var G__82711 = (0);
seq__82628 = G__82708;
chunk__82629 = G__82709;
count__82630 = G__82710;
i__82631 = G__82711;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
frontend.extensions.pdf.windows.resolve_own_document = (function frontend$extensions$pdf$windows$resolve_own_document(viewer){
var G__82636 = viewer;
var G__82636__$1 = (((G__82636 == null))?null:G__82636.viewer);
if((G__82636__$1 == null)){
return null;
} else {
return G__82636__$1.ownerDocument;
}
});
frontend.extensions.pdf.windows.resolve_own_container = (function frontend$extensions$pdf$windows$resolve_own_container(viewer){
var G__82637 = frontend.extensions.pdf.windows.resolve_own_document(viewer);
if((G__82637 == null)){
return null;
} else {
return G__82637.querySelector("body");
}
});
frontend.extensions.pdf.windows.resolve_own_window = (function frontend$extensions$pdf$windows$resolve_own_window(viewer){
var G__82639 = frontend.extensions.pdf.windows.resolve_own_document(viewer);
if((G__82639 == null)){
return null;
} else {
return G__82639.defaultView;
}
});
frontend.extensions.pdf.windows.check_viewer_in_system_win_QMARK_ = (function frontend$extensions$pdf$windows$check_viewer_in_system_win_QMARK_(viewer){
var G__82640 = viewer;
if((G__82640 == null)){
return null;
} else {
return G__82640.$inSystemWindow;
}
});
frontend.extensions.pdf.windows.resolve_classes_BANG_ = (function frontend$extensions$pdf$windows$resolve_classes_BANG_(doc){
var html = doc.documentElement;
var G__82641 = html.classList;
G__82641.add("is-system-window");

return G__82641;
});
frontend.extensions.pdf.windows.close_pdf_in_new_window_BANG_ = (function frontend$extensions$pdf$windows$close_pdf_in_new_window_BANG_(var_args){
var G__82647 = arguments.length;
switch (G__82647) {
case 0:
return frontend.extensions.pdf.windows.close_pdf_in_new_window_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.extensions.pdf.windows.close_pdf_in_new_window_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.extensions.pdf.windows.close_pdf_in_new_window_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.extensions.pdf.windows.close_pdf_in_new_window_BANG_.cljs$core$IFn$_invoke$arity$1(true);
}));

(frontend.extensions.pdf.windows.close_pdf_in_new_window_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (reset_current_QMARK_){
if(cljs.core.truth_((function (){var and__5140__auto__ = reset_current_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(cljs.core.deref(frontend.extensions.pdf.windows._STAR_exit_pending_QMARK_));
} else {
return and__5140__auto__;
}
})())){
frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","current","pdf/current",-1087936477),null);
} else {
}

frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","system-win?","pdf/system-win?",-2028066550),false);

cljs.core.reset_BANG_(frontend.extensions.pdf.windows._STAR_active_win,null);

return cljs.core.reset_BANG_(frontend.extensions.pdf.windows._STAR_exit_pending_QMARK_,false);
}));

(frontend.extensions.pdf.windows.close_pdf_in_new_window_BANG_.cljs$lang$maxFixedArity = 1);

frontend.extensions.pdf.windows.exit_pdf_in_system_window_BANG_ = (function frontend$extensions$pdf$windows$exit_pdf_in_system_window_BANG_(var_args){
var G__82653 = arguments.length;
switch (G__82653) {
case 0:
return frontend.extensions.pdf.windows.exit_pdf_in_system_window_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.extensions.pdf.windows.exit_pdf_in_system_window_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.extensions.pdf.windows.exit_pdf_in_system_window_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.extensions.pdf.windows.exit_pdf_in_system_window_BANG_.cljs$core$IFn$_invoke$arity$1(true);
}));

(frontend.extensions.pdf.windows.exit_pdf_in_system_window_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (restore_QMARK_){
var temp__5825__auto__ = cljs.core.deref(frontend.extensions.pdf.windows._STAR_active_win);
if(cljs.core.truth_(temp__5825__auto__)){
var win = temp__5825__auto__;
if(cljs.core.truth_(restore_QMARK_)){
cljs.core.reset_BANG_(frontend.extensions.pdf.windows._STAR_exit_pending_QMARK_,true);
} else {
}

return win.close();
} else {
return null;
}
}));

(frontend.extensions.pdf.windows.exit_pdf_in_system_window_BANG_.cljs$lang$maxFixedArity = 1);

frontend.extensions.pdf.windows.open_pdf_in_new_window_BANG_ = (function frontend$extensions$pdf$windows$open_pdf_in_new_window_BANG_(pdf_playground,pdf_current){
if(cljs.core.truth_(pdf_current)){
var setup_win_BANG_ = (function (){
var layouts = frontend.storage.get(new cljs.core.Keyword(null,"ls-pdf-system-win-layout","ls-pdf-system-win-layout",-1686178173));
var layouts__$1 = ((((cljs.core.map_QMARK_(layouts)) && (((cljs.core.contains_QMARK_(layouts,new cljs.core.Keyword(null,"width","width",-384071477))) && (cljs.core.contains_QMARK_(layouts,new cljs.core.Keyword(null,"height","height",1025178622)))))))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__82663){
var vec__82666 = p__82663;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82666,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82666,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+",");
}),"",layouts):"width=700,height=800");
var temp__5825__auto__ = (function (){var and__5140__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(pdf_current);
if(cljs.core.truth_(and__5140__auto__)){
return window.open("about:blank","_blank",layouts__$1);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var win = temp__5825__auto__;
var doc_82723 = win.document;
var doc_el_82724 = doc_82723.documentElement;
var base_82725 = document.createElement("base");
var main_82726 = document.createElement("main");
var theme_mode_82727 = frontend.state.get_state(new cljs.core.Keyword("ui","theme","ui/theme",-1247877132));
(base_82725.href = location.href);

doc_82723.head.appendChild(base_82725);

(doc_82723.title = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(pdf_current);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Logseq";
}
})());

(doc_el_82724.dataset.theme = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(theme_mode_82727)));

(doc_el_82724.dataset.color = (function (){var or__5142__auto__ = (function (){var G__82671 = frontend.state.get_state(new cljs.core.Keyword("ui","radix-color","ui/radix-color",1454689984));
if((G__82671 == null)){
return null;
} else {
return cljs.core.name(G__82671);
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "logseq";
}
})());

frontend.extensions.pdf.windows.resolve_classes_BANG_(doc_82723);

frontend.extensions.pdf.windows.resolve_styles_BANG_(doc_82723);

doc_82723.body.appendChild(main_82726);

module$node_modules$react_dom$client.createRoot(main_82726).render(frontend.rfx.provider((pdf_playground.cljs$core$IFn$_invoke$arity$1 ? pdf_playground.cljs$core$IFn$_invoke$arity$1(pdf_current) : pdf_playground.call(null,pdf_current))));

win.addEventListener("beforeunload",(function (){
return frontend.extensions.pdf.windows.close_pdf_in_new_window_BANG_.cljs$core$IFn$_invoke$arity$0();
}));

win.addEventListener("resize",(function (){
return frontend.storage.set(new cljs.core.Keyword(null,"ls-pdf-system-win-layout","ls-pdf-system-win-layout",-1686178173),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),doc_el_82724.clientHeight,new cljs.core.Keyword(null,"width","width",-384071477),doc_el_82724.clientWidth,new cljs.core.Keyword(null,"x","x",2099068185),win.screenX,new cljs.core.Keyword(null,"y","y",-1757859776),win.screenY], null));
}));

cljs.core.reset_BANG_(frontend.extensions.pdf.windows._STAR_active_win,win);

frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","system-win?","pdf/system-win?",-2028066550),true);

var G__82678 = win.apis;
if((G__82678 == null)){
return null;
} else {
return G__82678.doAction(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("window","open-blank-callback","window/open-blank-callback",637950248),new cljs.core.Keyword(null,"pdf","pdf",1586765132)], null)));
}
} else {
return null;
}
});
return setTimeout((function (){
var temp__5823__auto__ = cljs.core.deref(frontend.extensions.pdf.windows._STAR_active_win);
if(cljs.core.truth_(temp__5823__auto__)){
var win = temp__5823__auto__;
return win.focus();
} else {
return setup_win_BANG_();
}
}),(16));
} else {
return null;
}
});

//# sourceMappingURL=frontend.extensions.pdf.windows.js.map
