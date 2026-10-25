goog.provide('frontend.components.rtc.download_progress');
frontend.components.rtc.download_progress.content = (function frontend$components$rtc$download_progress$content(graph_name){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.items-center.justify-center.gap-4","div.flex.flex-col.items-center.justify-center.gap-4",-549150489),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync","downloading-graph","sync/downloading-graph",1528581488),graph_name], 0))], null),frontend.components.rtc.indicator.downloading_logs()], null);
});
frontend.components.rtc.download_progress.show_BANG_ = (function frontend$components$rtc$download_progress$show_BANG_(graph_name){
if(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())){
var G__54241 = null;
var G__54242 = (function (){
return frontend.components.rtc.download_progress.content(graph_name);
});
var G__54243 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"download-rtc-graph","download-rtc-graph",3232266)], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__54241,G__54242,G__54243) : logseq.shui.ui.popup_show_BANG_.call(null,G__54241,G__54242,G__54243));
} else {
var G__54244 = (function (){
return frontend.components.rtc.download_progress.content(graph_name);
});
var G__54245 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"download-rtc-graph","download-rtc-graph",3232266),new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onPointerDownOutside","onPointerDownOutside",404933036),(function (p1__54239_SHARP_){
return p1__54239_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"onOpenAutoFocus","onOpenAutoFocus",-99363202),(function (p1__54240_SHARP_){
return p1__54240_SHARP_.preventDefault();
})], null)], null);
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2(G__54244,G__54245) : logseq.shui.ui.dialog_open_BANG_.call(null,G__54244,G__54245));
}
});
frontend.components.rtc.download_progress.hide_BANG_ = (function frontend$components$rtc$download_progress$hide_BANG_(){
if(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())){
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"download-rtc-graph","download-rtc-graph",3232266)) : logseq.shui.ui.popup_hide_BANG_.call(null,new cljs.core.Keyword(null,"download-rtc-graph","download-rtc-graph",3232266)));
} else {
return (logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"download-rtc-graph","download-rtc-graph",3232266)) : logseq.shui.ui.dialog_close_BANG_.call(null,new cljs.core.Keyword(null,"download-rtc-graph","download-rtc-graph",3232266)));
}
});

//# sourceMappingURL=frontend.components.rtc.download_progress.js.map
