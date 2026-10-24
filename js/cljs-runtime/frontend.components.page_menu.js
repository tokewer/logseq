goog.provide('frontend.components.page_menu');
frontend.components.page_menu.today_journal_page_QMARK_ = (function frontend$components$page_menu$today_journal_page_QMARK_(page){
var and__5140__auto__ = frontend.util.entity.journal_QMARK_(page);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(page),frontend.date.today_journal_day());
} else {
return and__5140__auto__;
}
});
frontend.components.page_menu.publish_page_dialog = (function (){var render_fn__31744__auto__ = (function frontend$components$page_menu$publish_page_dialog(page){
var vec__45778 = logseq.shui.hooks.use_state("");
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45778,(0),null);
var set_password_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45778,(1),null);
var vec__45781 = logseq.shui.hooks.use_state(false);
var publishing_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45781,(0),null);
var set_publishing_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45781,(1),null);
var submit_BANG_ = (function (){
if(cljs.core.truth_(publishing_QMARK_)){
return null;
} else {
(set_publishing_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_publishing_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_publishing_BANG_.call(null,true));

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(frontend.handler.publish.publish_page_BANG_.cljs$core$IFn$_invoke$arity$variadic(page,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"password","password",417022471),password], null)], 0)),(function (){
(set_publishing_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_publishing_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_publishing_BANG_.call(null,false));

return (logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dialog_close_BANG_.call(null));
}));
}
});
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.flex.flex-col.gap-4.p-2","form.flex.flex-col.gap-4.p-2",451609874),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

return submit_BANG_();
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-lg.font-medium","div.text-lg.font-medium",-1926981654),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("publish","dialog-title","publish/dialog-title",2004923898)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.opacity-70","div.text-sm.opacity-70",630172022),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("publish","dialog-desc","publish/dialog-desc",1194663104)], 0))], null),logseq.shui.ui.toggle_password(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("publish","password-optional-placeholder","publish/password-optional-placeholder",-1033566161)], 0)),new cljs.core.Keyword(null,"value","value",305978217),password,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__45792 = frontend.util.evalue(e);
return (set_password_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_password_BANG_.cljs$core$IFn$_invoke$arity$1(G__45792) : set_password_BANG_.call(null,G__45792));
})], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-end.gap-2","div.flex.justify-end.gap-2",-574076313),(function (){var G__45793 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"ghost",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dialog_close_BANG_.call(null));
})], null);
var G__45794 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","cancel","ui/cancel",-1964089788)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__45793,G__45794) : logseq.shui.ui.button.call(null,G__45793,G__45794));
})(),(function (){var G__45795 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),publishing_QMARK_], null);
var G__45796 = (cljs.core.truth_(publishing_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("publish","publishing","publish/publishing",-478879945)], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("publish","action","publish/action",-575793049)], 0)));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__45795,G__45796) : logseq.shui.ui.button.call(null,G__45795,G__45796));
})()], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$page_menu$publish_page_dialog__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45797 = cljs.core.first(args__31746__auto__);
var G__45798 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45797,G__45798) : io.factorhouse.hsx.core.obj_get.call(null,G__45797,G__45798));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"publish-page-dialog","publish-page-dialog",-643770725,null),args__31746__auto__),frontend$components$page_menu$publish_page_dialog,args__31746__auto__,null);
}
};
var frontend$components$page_menu$publish_page_dialog = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45937__i = 0, G__45937__a = new Array(arguments.length -  0);
while (G__45937__i < G__45937__a.length) {G__45937__a[G__45937__i] = arguments[G__45937__i + 0]; ++G__45937__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45937__a,0,null);
} 
return frontend$components$page_menu$publish_page_dialog__delegate.call(this,args__31746__auto__);};
frontend$components$page_menu$publish_page_dialog.cljs$lang$maxFixedArity = 0;
frontend$components$page_menu$publish_page_dialog.cljs$lang$applyTo = (function (arglist__45941){
var args__31746__auto__ = cljs.core.seq(arglist__45941);
return frontend$components$page_menu$publish_page_dialog__delegate(args__31746__auto__);
});
frontend$components$page_menu$publish_page_dialog.cljs$core$IFn$_invoke$arity$variadic = frontend$components$page_menu$publish_page_dialog__delegate;
return frontend$components$page_menu$publish_page_dialog;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45800 = comp__31745__auto__;
var G__45801 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45800,G__45801) : io.factorhouse.hsx.core.react_memo.call(null,G__45800,G__45801));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"publish-page-dialog");

return comp__31745__auto__;
})();
frontend.components.page_menu.delete_page_BANG_ = (function frontend$components$page_menu$delete_page_BANG_(page){
var G__45807 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page);
var G__45808 = (function (){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(frontend.components.page_menu.today_journal_page_QMARK_(page))?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page.delete","today-journal-truncate-success","page.delete/today-journal-truncate-success",-1440051895)], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page.delete","success","page.delete/success",-139963988),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page)], 0))),new cljs.core.Keyword(null,"success","success",1890645906));
});
var G__45809 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p__45814){
var map__45815 = p__45814;
var map__45815__$1 = cljs.core.__destructure_map(map__45815);
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45815__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
if(cljs.core.truth_(msg)){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.Keyword(null,"warning","warning",-1685650671));
} else {
return null;
}
})], null);
return (frontend.handler.page._LT_delete_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.page._LT_delete_BANG_.cljs$core$IFn$_invoke$arity$3(G__45807,G__45808,G__45809) : frontend.handler.page._LT_delete_BANG_.call(null,G__45807,G__45808,G__45809));
});
frontend.components.page_menu.delete_page_confirm_BANG_ = (function frontend$components$page_menu$delete_page_confirm_BANG_(page){
if(cljs.core.truth_(page)){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2((function (){var G__45819 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.gap-2.items-center","span.flex.gap-2.items-center",-188355979),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.relative","span.relative",-1680463463),logseq.shui.ui.tabler_icon("alert-triangle")], null),(cljs.core.truth_((function (){var or__5142__auto__ = frontend.util.entity.class_QMARK_(page);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = frontend.util.entity.property_QMARK_(page);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return frontend.components.page_menu.today_journal_page_QMARK_(page);
}
}
})())?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page.delete","permanent-confirm-title","page.delete/permanent-confirm-title",867704547)], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page.delete","confirm-title","page.delete/confirm-title",1664249294)], 0)))], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.opacity-60","p.opacity-60",441728988),(""+"- "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page)))], null),new cljs.core.Keyword(null,"outside-cancel?","outside-cancel?",-1972964985),true,new cljs.core.Keyword(null,"cancel-label","cancel-label",-1093310551),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","cancel","ui/cancel",-1964089788)], 0)),new cljs.core.Keyword(null,"ok-label","ok-label",808114315),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","confirm","ui/confirm",-2003996372)], 0))], null);
return (logseq.shui.ui.dialog_confirm_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_confirm_BANG_.cljs$core$IFn$_invoke$arity$1(G__45819) : logseq.shui.ui.dialog_confirm_BANG_.call(null,G__45819));
})(),(function (){
return frontend.components.page_menu.delete_page_BANG_(page);
})),(function (){
return cljs.core.List.EMPTY;
}));
} else {
return null;
}
});
frontend.components.page_menu.latest_page = (function frontend$components$page_menu$latest_page(page){
return page;
});
frontend.components.page_menu.toggle_public_attribute_BANG_ = (function frontend$components$page_menu$toggle_public_attribute_BANG_(page){
var temp__5825__auto__ = frontend.components.page_menu.latest_page(page);
if(cljs.core.truth_(temp__5825__auto__)){
var page_SINGLEQUOTE_ = temp__5825__auto__;
return frontend.handler.page.update_public_attribute_BANG_(page_SINGLEQUOTE_,(!(new cljs.core.Keyword("logseq.property","publishing-public?","logseq.property/publishing-public?",-1094657939).cljs$core$IFn$_invoke$arity$1(page_SINGLEQUOTE_) === true)));
} else {
return null;
}
});
frontend.components.page_menu.page_menu = (function frontend$components$page_menu$page_menu(page,favorited_QMARK_){
var temp__5825__auto__ = frontend.components.page_menu.latest_page(page);
if(cljs.core.truth_(temp__5825__auto__)){
var page_SINGLEQUOTE_ = temp__5825__auto__;
var temp__5825__auto____$1 = (function (){var and__5140__auto__ = frontend.util.entity.page_QMARK_(page_SINGLEQUOTE_);
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page_SINGLEQUOTE_);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto____$1)){
var page_name = temp__5825__auto____$1;
var page_title = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page_SINGLEQUOTE_)));
var block_QMARK_ = (frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.uuid_string_QMARK_.call(null,page_name));
var contents_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_name,"contents");
var public_QMARK_ = new cljs.core.Keyword("logseq.property","publishing-public?","logseq.property/publishing-public?",-1094657939).cljs$core$IFn$_invoke$arity$1(page_SINGLEQUOTE_) === true;
var developer_mode_QMARK_ = frontend.state.developer_mode_QMARK_();
if(cljs.core.not(block_QMARK_)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [((frontend.config.publishing_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(favorited_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","unfavorite","page/unfavorite",578994300)], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","add-to-favorites","page/add-to-favorites",-641181093)], 0))),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(favorited_QMARK_)){
return frontend.handler.page._LT_unfavorite_page_BANG_(page_title);
} else {
return frontend.handler.page._LT_favorite_page_BANG_(page_title);
}
})], null)], null)),(cljs.core.truth_((function (){var or__5142__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","copy-url","page/copy-url",-7678005)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.page.copy_page_url.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page_SINGLEQUOTE_));
})], null)], null):null),(cljs.core.truth_((function (){var or__5142__auto__ = contents_QMARK_;
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = frontend.config.publishing_QMARK_;
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword("logseq.property","built-in?","logseq.property/built-in?",-1125958160).cljs$core$IFn$_invoke$arity$1(page_SINGLEQUOTE_);
}
}
})())?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","delete","page/delete",-1774686917)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.components.page_menu.delete_page_confirm_BANG_(page_SINGLEQUOTE_);
})], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","page","export/page",-2053704479)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__45853 = (function (){
return frontend.components.export$.export_blocks(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page_SINGLEQUOTE_)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"export-type","export-type",-2087639167),new cljs.core.Keyword(null,"page","page",849072397)], null));
});
var G__45854 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-auto md:max-w-4xl max-h-[80vh] overflow-y-auto"], null);
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2(G__45853,G__45854) : logseq.shui.ui.dialog_open_BANG_.call(null,G__45853,G__45854));
})], null)], null),((frontend.config.publishing_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("publish","dialog-title","publish/dialog-title",2004923898)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__45858 = (function (){
return frontend.components.page_menu.publish_page_dialog(page_SINGLEQUOTE_);
});
var G__45859 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-auto max-w-md"], null);
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2(G__45858,G__45859) : logseq.shui.ui.dialog_open_BANG_.call(null,G__45858,G__45859));
})], null)], null)),(cljs.core.truth_(frontend.util.electron_QMARK_())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((public_QMARK_)?new cljs.core.Keyword("page","make-private","page/make-private",1298627280):new cljs.core.Keyword("page","make-public","page/make-public",1736118164))], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.components.page_menu.toggle_public_attribute_BANG_(page_SINGLEQUOTE_);
})], null)], null):null),(cljs.core.truth_(frontend.config.lsp_enabled_QMARK_)?(function (){var iter__5628__auto__ = (function frontend$components$page_menu$page_menu_$_iter__45867(s__45868){
return (new cljs.core.LazySeq(null,(function (){
var s__45868__$1 = s__45868;
while(true){
var temp__5825__auto____$2 = cljs.core.seq(s__45868__$1);
if(temp__5825__auto____$2){
var s__45868__$2 = temp__5825__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__45868__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__45868__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__45870 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__45869 = (0);
while(true){
if((i__45869 < size__5627__auto__)){
var vec__45879 = cljs.core._nth(c__5626__auto__,i__45869);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45879,(0),null);
var map__45882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45879,(1),null);
var map__45882__$1 = cljs.core.__destructure_map(map__45882);
var cmd = map__45882__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45882__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45879,(2),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45879,(3),null);
cljs.core.chunk_append(b__45870,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),label,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__45869,vec__45879,_,map__45882,map__45882__$1,cmd,label,action,pid,c__5626__auto__,size__5627__auto__,b__45870,s__45868__$2,temp__5825__auto____$2,page_title,block_QMARK_,contents_QMARK_,public_QMARK_,developer_mode_QMARK_,page_name,temp__5825__auto____$1,page_SINGLEQUOTE_,temp__5825__auto__){
return (function (){
return frontend.commands.exec_plugin_simple_command_BANG_(pid,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cmd,new cljs.core.Keyword(null,"page","page",849072397),page_name),action);
});})(i__45869,vec__45879,_,map__45882,map__45882__$1,cmd,label,action,pid,c__5626__auto__,size__5627__auto__,b__45870,s__45868__$2,temp__5825__auto____$2,page_title,block_QMARK_,contents_QMARK_,public_QMARK_,developer_mode_QMARK_,page_name,temp__5825__auto____$1,page_SINGLEQUOTE_,temp__5825__auto__))
], null)], null));

var G__45995 = (i__45869 + (1));
i__45869 = G__45995;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45870),frontend$components$page_menu$page_menu_$_iter__45867(cljs.core.chunk_rest(s__45868__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45870),null);
}
} else {
var vec__45897 = cljs.core.first(s__45868__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45897,(0),null);
var map__45900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45897,(1),null);
var map__45900__$1 = cljs.core.__destructure_map(map__45900);
var cmd = map__45900__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45900__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45897,(2),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45897,(3),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),label,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__45897,_,map__45900,map__45900__$1,cmd,label,action,pid,s__45868__$2,temp__5825__auto____$2,page_title,block_QMARK_,contents_QMARK_,public_QMARK_,developer_mode_QMARK_,page_name,temp__5825__auto____$1,page_SINGLEQUOTE_,temp__5825__auto__){
return (function (){
return frontend.commands.exec_plugin_simple_command_BANG_(pid,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cmd,new cljs.core.Keyword(null,"page","page",849072397),page_name),action);
});})(vec__45897,_,map__45900,map__45900__$1,cmd,label,action,pid,s__45868__$2,temp__5825__auto____$2,page_title,block_QMARK_,contents_QMARK_,public_QMARK_,developer_mode_QMARK_,page_name,temp__5825__auto____$1,page_SINGLEQUOTE_,temp__5825__auto__))
], null)], null),frontend$components$page_menu$page_menu_$_iter__45867(cljs.core.rest(s__45868__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(frontend.state.get_plugins_commands_with_type(new cljs.core.Keyword(null,"page-menu-item","page-menu-item",1913872913)));
})():null),(cljs.core.truth_((function (){var and__5140__auto__ = frontend.util.entity.internal_page_QMARK_(page_SINGLEQUOTE_);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(new cljs.core.Keyword("logseq.property","built-in?","logseq.property/built-in?",-1125958160).cljs$core$IFn$_invoke$arity$1(page_SINGLEQUOTE_));
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","convert-to-tag","page/convert-to-tag",204854632)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.db_based.page.convert_page_to_tag_BANG_(page_SINGLEQUOTE_);
})], null)], null):null),(cljs.core.truth_((function (){var and__5140__auto__ = frontend.util.entity.class_QMARK_(page_SINGLEQUOTE_);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(new cljs.core.Keyword("logseq.property","built-in?","logseq.property/built-in?",-1125958160).cljs$core$IFn$_invoke$arity$1(page_SINGLEQUOTE_));
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page.convert","tag-to-page-action","page.convert/tag-to-page-action",1093926406)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.db_based.page.convert_tag_to_page_BANG_(page_SINGLEQUOTE_);
})], null)], null):null),(cljs.core.truth_(developer_mode_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.modules.shortcut.data_helper.shortcut_desc_by_id(new cljs.core.Keyword("dev","show-page-data","dev/show-page-data",727860802)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.common.developer.show_entity_data(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page_SINGLEQUOTE_));
})], null)], null):null)], null)));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=frontend.components.page_menu.js.map
