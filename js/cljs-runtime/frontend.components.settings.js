goog.provide('frontend.components.settings');
frontend.components.settings.toggle = (function frontend$components$settings$toggle(var_args){
var args__5882__auto__ = [];
var len__5876__auto___56587 = arguments.length;
var i__5877__auto___56588 = (0);
while(true){
if((i__5877__auto___56588 < len__5876__auto___56587)){
args__5882__auto__.push((arguments[i__5877__auto___56588]));

var G__56589 = (i__5877__auto___56588 + (1));
i__5877__auto___56588 = G__56589;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((4) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((4)),(0),null)):null);
return frontend.components.settings.toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5883__auto__);
});

(frontend.components.settings.toggle.cljs$core$IFn$_invoke$arity$variadic = (function (label_for,name,state,on_toggle,p__56067){
var vec__56068 = p__56067;
var detail_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56068,(0),null);
var label = (function (){var G__56071 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-sm.font-medium.leading-5.opacity-70","label.block.text-sm.font-medium.leading-5.opacity-70",643274172),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),label_for], null)], null);
var G__56071__$1 = ((cljs.core.sequential_QMARK_(name))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__56071,name):G__56071);
if((!(cljs.core.sequential_QMARK_(name)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__56071__$1,name);
} else {
return G__56071__$1;
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-center","div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-center",-761433112),label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rounded-md.sm:max-w-tss.sm:col-span-2","div.rounded-md.sm:max-w-tss.sm:col-span-2",-1315636593),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rounded-md","div.rounded-md",-395116423),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"1rem",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(state,on_toggle,true),detail_text], null)], null)], null);
}));

(frontend.components.settings.toggle.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(frontend.components.settings.toggle.cljs$lang$applyTo = (function (seq56062){
var G__56063 = cljs.core.first(seq56062);
var seq56062__$1 = cljs.core.next(seq56062);
var G__56064 = cljs.core.first(seq56062__$1);
var seq56062__$2 = cljs.core.next(seq56062__$1);
var G__56065 = cljs.core.first(seq56062__$2);
var seq56062__$3 = cljs.core.next(seq56062__$2);
var G__56066 = cljs.core.first(seq56062__$3);
var seq56062__$4 = cljs.core.next(seq56062__$3);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56063,G__56064,G__56065,G__56066,seq56062__$4);
}));

frontend.components.settings.app_updater = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$app_updater(version){
var update_pending_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","updater-pending?","electron/updater-pending?",-1675811595)], null));
var map__56072 = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","updater","electron/updater",454456683)], null));
var map__56072__$1 = cljs.core.__destructure_map(map__56072);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56072__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56072__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cp__settings-app-updater","span.cp__settings-app-updater",1844399177),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ctls.flex.items-center","div.ctls.flex.items-center",1683705304),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1.sm:mt-0.sm:col-span-2.flex.gap-4.items-center.flex-wrap","div.mt-1.sm:mt-0.sm:col-span-2.flex.gap-4.items-center.flex-wrap",1440242537),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(frontend.mobile.util.native_android_QMARK_())?frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.general","check-for-updates","settings.general/check-for-updates",-787086832)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm mr-1",new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/logseq/logseq/releases"], 0)):(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())?frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.general","check-for-updates","settings.general/check-for-updates",-787086832)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm mr-1",new cljs.core.Keyword(null,"href","href",-793805698),"https://apps.apple.com/app/logseq/id1601013908"], 0)):(cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(update_pending_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("updater","checking-for-updates","updater/checking-for-updates",-1888435147)], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.general","check-for-updates","settings.general/check-for-updates",-787086832)], 0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm mr-1",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),update_pending_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return window.apis.checkForUpdates(true);
})], 0)):null
)))], null),(function (){var revision = logseq.common.version.revision();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.cursor","div.text-sm.cursor",716266350),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.general","revision","settings.general/revision",261481033),revision], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.general","current-revision-label","settings.general/current-revision-label",-176016520)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-inline-start","margin-inline-start",320232954),"0.25rem"], null),new cljs.core.Keyword(null,"href","href",-793805698),(""+"https://github.com/logseq/logseq/commit/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(revision))], null),revision], null)], null),new cljs.core.Keyword(null,"info","info",-317069002),false);
})], null),version], null);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-sm.fade-link.underline.inline","a.text-sm.fade-link.underline.inline",454860939),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),"https://docs.logseq.com/#/page/changelog"], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.general","changelog","settings.general/changelog",-971613205)], 0))], null)], null)], null),((clojure.string.blank_QMARK_(type))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.update-state.text-sm","div.update-state.text-sm",820601825),(function (){var G__56073 = type;
switch (G__56073) {
case "checking-for-update":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("updater","checking-for-updates","updater/checking-for-updates",-1888435147)], 0))], null);

break;
case "update-not-available":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("updater","up-to-date","updater/up-to-date",-758077994)], 0))], null);

break;
case "update-available":
var map__56074 = payload;
var map__56074__$1 = cljs.core.__destructure_map(map__56074);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56074__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56074__$1,new cljs.core.Keyword(null,"url","url",276297046));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("updater","update-available","updater/update-available",-451363736)], 0))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.link","a.link",-619461443),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
window.apis.openExternal(url);

return frontend.util.stop(e);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-inline-start","margin-inline-start",320232954),"0.25rem"], null)], null),frontend.components.svg.external_link,name," \uD83C\uDF89"], null)], null);

break;
case "download-progress":
var percent = (function (){var G__56075 = payload;
var G__56075__$1 = (((G__56075 == null))?null:new cljs.core.Keyword(null,"percent","percent",2031453817).cljs$core$IFn$_invoke$arity$1(G__56075));
if((G__56075__$1 == null)){
return null;
} else {
return Math.round(G__56075__$1);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("updater","downloading-progress","updater/downloading-progress",-199191228),(function (){var or__5142__auto__ = percent;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})()], 0))], null);

break;
case "update-downloaded":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-2.flex-wrap","div.flex.items-center.gap-2.flex-wrap",928052943),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("updater","update-ready-to-install","updater/update-ready-to-install",704979512)], 0))], null),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("updater","quit-and-install","updater/quit-and-install",-1112335838)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"quitAndInstall","quitAndInstall",-856751624)], 0));
})], 0))], null);

break;
case "error":
var release_channel_link = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.link.inline-flex.items-center.gap-1","a.link.inline-flex.items-center.gap-1",-105623323),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
window.apis.openExternal("https://github.com/logseq/logseq/releases");

return frontend.util.stop(e);
})], null),frontend.components.svg.external_link,frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.general","release-channel","settings.general/release-channel",104884226)], 0))], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.interpolate_rich_text_node.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("updater","update-error","updater/update-error",-874695763)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [release_channel_link], null),true)], null);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56073))));

}
})()], null))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$app_updater__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56076 = cljs.core.first(args__31746__auto__);
var G__56077 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56076,G__56077) : io.factorhouse.hsx.core.obj_get.call(null,G__56076,G__56077));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"app-updater","app-updater",1450305547,null),args__31746__auto__),frontend$components$settings$app_updater,args__31746__auto__,null);
}
};
var frontend$components$settings$app_updater = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56591__i = 0, G__56591__a = new Array(arguments.length -  0);
while (G__56591__i < G__56591__a.length) {G__56591__a[G__56591__i] = arguments[G__56591__i + 0]; ++G__56591__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56591__a,0,null);
} 
return frontend$components$settings$app_updater__delegate.call(this,args__31746__auto__);};
frontend$components$settings$app_updater.cljs$lang$maxFixedArity = 0;
frontend$components$settings$app_updater.cljs$lang$applyTo = (function (arglist__56592){
var args__31746__auto__ = cljs.core.seq(arglist__56592);
return frontend$components$settings$app_updater__delegate(args__31746__auto__);
});
frontend$components$settings$app_updater.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$app_updater__delegate;
return frontend$components$settings$app_updater;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56078 = comp__31745__auto__;
var G__56079 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56078,G__56079) : io.factorhouse.hsx.core.react_memo.call(null,G__56078,G__56079));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"app-updater");

return comp__31745__auto__;
})();
frontend.components.settings.outdenting_hint = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$outdenting_hint(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rounded-lg.border.overflow-hidden.bg-card","div.rounded-lg.border.overflow-hidden.bg-card",2017130841),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 4px 20px 4px rgba(0, 20, 60, .1), 0 4px 80px -8px rgba(0, 20, 60, .2)"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"12px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"500px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm","p.text-sm",-1988028746),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.editor","preferred-outdenting-tip","settings.editor/preferred-outdenting-tip",-593032605)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-sm","a.text-sm",-884048665),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),"https://discuss.logseq.com/t/whats-your-preferred-outdent-behavior-the-direct-one-or-the-logical-one/978"], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.editor","preferred-outdenting-tip-more","settings.editor/preferred-outdenting-tip-more",1358253649)], 0))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"https://discuss.logseq.com/uploads/default/original/1X/e8ea82f63a5e01f6d21b5da827927f538f3277b9.gif",new cljs.core.Keyword(null,"width","width",-384071477),(500),new cljs.core.Keyword(null,"height","height",1025178622),(500)], null)], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$outdenting_hint__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56080 = cljs.core.first(args__31746__auto__);
var G__56081 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56080,G__56081) : io.factorhouse.hsx.core.obj_get.call(null,G__56080,G__56081));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"outdenting-hint","outdenting-hint",-1368314969,null),args__31746__auto__),frontend$components$settings$outdenting_hint,args__31746__auto__,null);
}
};
var frontend$components$settings$outdenting_hint = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56593__i = 0, G__56593__a = new Array(arguments.length -  0);
while (G__56593__i < G__56593__a.length) {G__56593__a[G__56593__i] = arguments[G__56593__i + 0]; ++G__56593__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56593__a,0,null);
} 
return frontend$components$settings$outdenting_hint__delegate.call(this,args__31746__auto__);};
frontend$components$settings$outdenting_hint.cljs$lang$maxFixedArity = 0;
frontend$components$settings$outdenting_hint.cljs$lang$applyTo = (function (arglist__56594){
var args__31746__auto__ = cljs.core.seq(arglist__56594);
return frontend$components$settings$outdenting_hint__delegate(args__31746__auto__);
});
frontend$components$settings$outdenting_hint.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$outdenting_hint__delegate;
return frontend$components$settings$outdenting_hint;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56082 = comp__31745__auto__;
var G__56083 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56082,G__56083) : io.factorhouse.hsx.core.react_memo.call(null,G__56082,G__56083));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"outdenting-hint");

return comp__31745__auto__;
})();
frontend.components.settings.auto_expand_hint = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$auto_expand_hint(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rounded-lg.border.overflow-hidden.bg-card","div.rounded-lg.border.overflow-hidden.bg-card",2017130841),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 4px 20px 4px rgba(0, 20, 60, .1), 0 4px 80px -8px rgba(0, 20, 60, .2)"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"12px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"500px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm","p.text-sm",-1988028746),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.editor","auto-expand-block-refs-tip","settings.editor/auto-expand-block-refs-tip",-827939900)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"https://user-images.githubusercontent.com/28241963/225818326-118deda9-9d1e-477d-b0ce-771ca0bcd976.gif",new cljs.core.Keyword(null,"width","width",-384071477),(500),new cljs.core.Keyword(null,"height","height",1025178622),(500)], null)], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$auto_expand_hint__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56084 = cljs.core.first(args__31746__auto__);
var G__56085 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56084,G__56085) : io.factorhouse.hsx.core.obj_get.call(null,G__56084,G__56085));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"auto-expand-hint","auto-expand-hint",1383796431,null),args__31746__auto__),frontend$components$settings$auto_expand_hint,args__31746__auto__,null);
}
};
var frontend$components$settings$auto_expand_hint = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56595__i = 0, G__56595__a = new Array(arguments.length -  0);
while (G__56595__i < G__56595__a.length) {G__56595__a[G__56595__i] = arguments[G__56595__i + 0]; ++G__56595__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56595__a,0,null);
} 
return frontend$components$settings$auto_expand_hint__delegate.call(this,args__31746__auto__);};
frontend$components$settings$auto_expand_hint.cljs$lang$maxFixedArity = 0;
frontend$components$settings$auto_expand_hint.cljs$lang$applyTo = (function (arglist__56596){
var args__31746__auto__ = cljs.core.seq(arglist__56596);
return frontend$components$settings$auto_expand_hint__delegate(args__31746__auto__);
});
frontend$components$settings$auto_expand_hint.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$auto_expand_hint__delegate;
return frontend$components$settings$auto_expand_hint;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56086 = comp__31745__auto__;
var G__56087 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56086,G__56087) : io.factorhouse.hsx.core.react_memo.call(null,G__56086,G__56087));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"auto-expand-hint");

return comp__31745__auto__;
})();
frontend.components.settings.row_with_button_action = (function frontend$components$settings$row_with_button_action(p__56088){
var map__56089 = p__56088;
var map__56089__$1 = cljs.core.__destructure_map(map__56089);
var stretch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56089__$1,new cljs.core.Keyword(null,"stretch","stretch",-1888837380));
var _for = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56089__$1,new cljs.core.Keyword(null,"-for","-for",-490432963));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56089__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var left_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56089__$1,new cljs.core.Keyword(null,"left-label","left-label",-1662718913));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56089__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56089__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
var button_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56089__$1,new cljs.core.Keyword(null,"button-label","button-label",-1402542935));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56089__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56089__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.it.sm:grid.sm:grid-cols-3.sm:gap-4","div.it.sm:grid.sm:grid-cols-3.sm:gap-4",-1107683600),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"sm:items-start"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col","div.flex.flex-col",255067761),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-sm.font-medium.leading-5.opacity-70","label.block.text-sm.font-medium.leading-5.opacity-70",643274172),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),_for], null),left_label], null),(cljs.core.truth_(description)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.text-gray-10","div.text-xs.text-gray-10",317949892),description], null):null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1.sm:mt-0.sm:col-span-2.flex.items-center","div.mt-1.sm:mt-0.sm:col-span-2.flex.items-center",232187274),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"0.5rem",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(stretch)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null):null)], null),(cljs.core.truth_(action)?action:(function (){var G__56090 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"as-child","as-child",1364710342),(!(clojure.string.blank_QMARK_(href))),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null);
var G__56091 = ((clojure.string.blank_QMARK_(href))?button_label:(function (){var G__56092 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null);
var G__56093 = button_label;
return (logseq.shui.ui.link.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.link.cljs$core$IFn$_invoke$arity$2(G__56092,G__56093) : logseq.shui.ui.link.call(null,G__56092,G__56093));
})());
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__56090,G__56091) : logseq.shui.ui.button.call(null,G__56090,G__56091));
})())], null),(cljs.core.truth_((function (){var or__5142__auto__ = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
})())?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.flex","div.text-sm.flex",-1550635209),desc], null))], null)], null);
});
frontend.components.settings.edit_config_edn = (function frontend$components$settings$edit_config_edn(){
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.general","custom-configuration","settings.general/custom-configuration",1130980106)], 0)),new cljs.core.Keyword(null,"button-label","button-label",-1402542935),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.general","edit-config-edn","settings.general/edit-config-edn",-839639309)], 0)),new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),frontend.config.get_repo_config_path()], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.ui.toggle_settings_modal_BANG_,new cljs.core.Keyword(null,"-for","-for",-490432963),"config_edn"], null));
});
frontend.components.settings.edit_global_config_edn = (function frontend$components$settings$edit_global_config_edn(){
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.general","custom-global-configuration","settings.general/custom-global-configuration",787798708)], 0)),new cljs.core.Keyword(null,"button-label","button-label",-1402542935),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.general","edit-global-config-edn","settings.general/edit-global-config-edn",-724296626)], 0)),new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),frontend.handler.global_config.global_config_path()], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.ui.toggle_settings_modal_BANG_,new cljs.core.Keyword(null,"-for","-for",-490432963),"global_config_edn"], null));
});
frontend.components.settings.edit_custom_css = (function frontend$components$settings$edit_custom_css(){
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.general","custom-theme","settings.general/custom-theme",-1812010804)], 0)),new cljs.core.Keyword(null,"button-label","button-label",-1402542935),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.general","edit-custom-css","settings.general/edit-custom-css",-1043134637)], 0)),new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),frontend.config.get_custom_css_path.cljs$core$IFn$_invoke$arity$0()], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.ui.toggle_settings_modal_BANG_,new cljs.core.Keyword(null,"-for","-for",-490432963),"customize_css"], null));
});
frontend.components.settings.edit_export_css = (function frontend$components$settings$edit_export_css(){
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.general","export-theme","settings.general/export-theme",-373852643)], 0)),new cljs.core.Keyword(null,"button-label","button-label",-1402542935),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.general","edit-export-css","settings.general/edit-export-css",1450515621)], 0)),new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),frontend.config.get_export_css_path.cljs$core$IFn$_invoke$arity$0()], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.ui.toggle_settings_modal_BANG_,new cljs.core.Keyword(null,"-for","-for",-490432963),"export_css"], null));
});
frontend.components.settings.show_brackets_row = (function frontend$components$settings$show_brackets_row(t,show_brackets_QMARK_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-center","div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-center",-761433112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-sm.font-medium.leading-5.opacity-70","label.block.text-sm.font-medium.leading-5.opacity-70",643274172),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"show_brackets"], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.editor","show-brackets","settings.editor/show-brackets",1414523350)) : t.call(null,new cljs.core.Keyword("settings.editor","show-brackets","settings.editor/show-brackets",1414523350)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rounded-md.sm:max-w-xs","div.rounded-md.sm:max-w-xs",-1969074733),frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(show_brackets_QMARK_,frontend.handler.config.toggle_ui_show_brackets_BANG_,true)], null)], null),((cljs.core.not((function (){var or__5142__auto__ = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
})()))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right"], null)], null),frontend.ui.render_keyboard_shortcut.cljs$core$IFn$_invoke$arity$variadic(frontend.modules.shortcut.data_helper.gen_shortcut_seq(new cljs.core.Keyword("ui","toggle-brackets","ui/toggle-brackets",297620244)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shortcut-id","shortcut-id",2068609942),new cljs.core.Keyword("ui","toggle-brackets","ui/toggle-brackets",297620244)], 0))], null):null)], null);
});
frontend.components.settings.toggle_wide_mode_row = (function frontend$components$settings$toggle_wide_mode_row(t,wide_mode_QMARK_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-center","div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-center",-761433112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-sm.font-medium.leading-5.opacity-70","label.block.text-sm.font-medium.leading-5.opacity-70",643274172),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"wide_mode"], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.editor","wide-mode","settings.editor/wide-mode",-970563004)) : t.call(null,new cljs.core.Keyword("settings.editor","wide-mode","settings.editor/wide-mode",-970563004)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rounded-md.sm:max-w-xs","div.rounded-md.sm:max-w-xs",-1969074733),frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(wide_mode_QMARK_,frontend.handler.ui.toggle_wide_mode_BANG_,true)], null)], null),((cljs.core.not((function (){var or__5142__auto__ = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
})()))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right"], null)], null),frontend.ui.render_keyboard_shortcut.cljs$core$IFn$_invoke$arity$variadic(frontend.modules.shortcut.data_helper.gen_shortcut_seq(new cljs.core.Keyword("ui","toggle-wide-mode","ui/toggle-wide-mode",449633976)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shortcut-id","shortcut-id",2068609942),new cljs.core.Keyword("ui","toggle-wide-mode","ui/toggle-wide-mode",449633976)], 0))], null):null)], null);
});
frontend.components.settings.editor_font_family_row = (function frontend$components$settings$editor_font_family_row(t,p__56095){
var map__56096 = p__56095;
var map__56096__$1 = cljs.core.__destructure_map(map__56096);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56096__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var global__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56096__$1,new cljs.core.Keyword(null,"global","global",93595047));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.it.sm:grid.sm:grid-cols-3.sm:gap-4","div.it.sm:grid.sm:grid-cols-3.sm:gap-4",-1107683600),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-sm.font-medium.leading-5.opacity-70","label.block.text-sm.font-medium.leading-5.opacity-70",643274172),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"font_family"], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.general","editor-font","settings.general/editor-font",42327110)) : t.call(null,new cljs.core.Keyword("settings.general","editor-font","settings.general/editor-font",42327110)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.col-span-2","div.flex.flex-col.col-span-2",998590714),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.gap-2","div.flex.gap-2",-268700868),(function (){var iter__5628__auto__ = (function frontend$components$settings$editor_font_family_row_$_iter__56097(s__56098){
return (new cljs.core.LazySeq(null,(function (){
var s__56098__$1 = s__56098;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__56098__$1);
if(temp__5825__auto__){
var s__56098__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56098__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__56098__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__56100 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__56099 = (0);
while(true){
if((i__56099 < size__5627__auto__)){
var t__$1 = cljs.core._nth(c__5626__auto__,i__56099);
var t__$2 = cljs.core.name(t__$1);
var tt = clojure.string.capitalize(t__$2);
var active_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var or__5142__auto__ = type;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "default";
}
})(),t__$2);
cljs.core.chunk_append(b__56100,(function (){var G__56103 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),t__$2,new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"class","class",-2030961996),(""+"cursor-pointer"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((active_QMARK_)?" !border-primary border-[2px]":null))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__56099,t__$2,tt,active_QMARK_,t__$1,c__5626__auto__,size__5627__auto__,b__56100,s__56098__$2,temp__5825__auto__,map__56096,map__56096__$1,type,global__$1){
return (function (){
return frontend.state.set_editor_font_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),t__$2], null));
});})(i__56099,t__$2,tt,active_QMARK_,t__$1,c__5626__auto__,size__5627__auto__,b__56100,s__56098__$2,temp__5825__auto__,map__56096,map__56096__$1,type,global__$1))
], null);
var G__56104 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.flex-col","span.flex.flex-col",347826015),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"ls-font-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__$2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Ag"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),tt], null)], null);
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__56103,G__56104) : logseq.shui.ui.button.call(null,G__56103,G__56104));
})());

var G__56597 = (i__56099 + (1));
i__56099 = G__56597;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56100),frontend$components$settings$editor_font_family_row_$_iter__56097(cljs.core.chunk_rest(s__56098__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56100),null);
}
} else {
var t__$1 = cljs.core.first(s__56098__$2);
var t__$2 = cljs.core.name(t__$1);
var tt = clojure.string.capitalize(t__$2);
var active_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var or__5142__auto__ = type;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "default";
}
})(),t__$2);
return cljs.core.cons((function (){var G__56108 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),t__$2,new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"class","class",-2030961996),(""+"cursor-pointer"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((active_QMARK_)?" !border-primary border-[2px]":null))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (t__$2,tt,active_QMARK_,t__$1,s__56098__$2,temp__5825__auto__,map__56096,map__56096__$1,type,global__$1){
return (function (){
return frontend.state.set_editor_font_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),t__$2], null));
});})(t__$2,tt,active_QMARK_,t__$1,s__56098__$2,temp__5825__auto__,map__56096,map__56096__$1,type,global__$1))
], null);
var G__56109 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.flex-col","span.flex.flex-col",347826015),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"ls-font-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__$2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Ag"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),tt], null)], null);
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__56108,G__56109) : logseq.shui.ui.button.call(null,G__56108,G__56109));
})(),frontend$components$settings$editor_font_family_row_$_iter__56097(cljs.core.rest(s__56098__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"serif","serif",984284934),new cljs.core.Keyword(null,"mono","mono",-1777958350)], null));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pt-3","div.pt-3",-2135681181),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.w-full.flex.items-center.cursor-pointer","label.w-full.flex.items-center.cursor-pointer",-1155457788),(function (){var G__56111 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.boolean$(global__$1),new cljs.core.Keyword(null,"on-checked-change","on-checked-change",-482086819),(function (p1__56094_SHARP_){
return frontend.state.set_editor_font_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"global","global",93595047),p1__56094_SHARP_], null));
})], null);
return (logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1(G__56111) : logseq.shui.ui.checkbox.call(null,G__56111));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pl-1.text-sm.opacity-70","span.pl-1.text-sm.opacity-70",752635525),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.general","editor-font-set-global","settings.general/editor-font-set-global",1149192910)) : t.call(null,new cljs.core.Keyword("settings.general","editor-font-set-global","settings.general/editor-font-set-global",1149192910)))], null)], null)], null)], null)], null);
});
frontend.components.settings.switch_spell_check_row = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$switch_spell_check_row(t){
var enabled_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(false,frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword(null,"spell-check","spell-check",-2060352968)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-center","div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-center",-761433112),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-sm.font-medium.leading-5.opacity-70","label.block.text-sm.font-medium.leading-5.opacity-70",643274172),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.editor","spell-checker","settings.editor/spell-checker",1249705248)) : t.call(null,new cljs.core.Keyword("settings.editor","spell-checker","settings.editor/spell-checker",1249705248)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rounded-md.sm:max-w-xs","div.rounded-md.sm:max-w-xs",-1969074733),frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(enabled_QMARK_,(function (){
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword(null,"spell-check","spell-check",-2060352968)], null),(!(enabled_QMARK_)));

return promesa.core.then.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"userAppCfgs","userAppCfgs",-1274935350),new cljs.core.Keyword(null,"spell-check","spell-check",-2060352968),(!(enabled_QMARK_))], 0)),(function (){
if(cljs.core.truth_(confirm((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ui","relaunch-confirm","ui/relaunch-confirm",75481008)) : t.call(null,new cljs.core.Keyword("ui","relaunch-confirm","ui/relaunch-confirm",75481008)))))){
return logseq.api.relaunch();
} else {
return null;
}
}));
}),true)], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$switch_spell_check_row__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56112 = cljs.core.first(args__31746__auto__);
var G__56113 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56112,G__56113) : io.factorhouse.hsx.core.obj_get.call(null,G__56112,G__56113));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"switch-spell-check-row","switch-spell-check-row",967967799,null),args__31746__auto__),frontend$components$settings$switch_spell_check_row,args__31746__auto__,null);
}
};
var frontend$components$settings$switch_spell_check_row = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56598__i = 0, G__56598__a = new Array(arguments.length -  0);
while (G__56598__i < G__56598__a.length) {G__56598__a[G__56598__i] = arguments[G__56598__i + 0]; ++G__56598__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56598__a,0,null);
} 
return frontend$components$settings$switch_spell_check_row__delegate.call(this,args__31746__auto__);};
frontend$components$settings$switch_spell_check_row.cljs$lang$maxFixedArity = 0;
frontend$components$settings$switch_spell_check_row.cljs$lang$applyTo = (function (arglist__56599){
var args__31746__auto__ = cljs.core.seq(arglist__56599);
return frontend$components$settings$switch_spell_check_row__delegate(args__31746__auto__);
});
frontend$components$settings$switch_spell_check_row.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$switch_spell_check_row__delegate;
return frontend$components$settings$switch_spell_check_row;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56114 = comp__31745__auto__;
var G__56115 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56114,G__56115) : io.factorhouse.hsx.core.react_memo.call(null,G__56114,G__56115));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"switch-spell-check-row");

return comp__31745__auto__;
})();
frontend.components.settings.app_auto_update_row = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$app_auto_update_row(t){
var enabled_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword(null,"auto-update","auto-update",-1471446628)], null));
var enabled_QMARK___$1 = (((enabled_QMARK_ == null))?true:enabled_QMARK_);
return frontend.components.settings.toggle("usage-diagnostics",(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.advanced","auto-updater","settings.advanced/auto-updater",-831673060)) : t.call(null,new cljs.core.Keyword("settings.advanced","auto-updater","settings.advanced/auto-updater",-831673060))),enabled_QMARK___$1,(function (){
var G__56121 = electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"userAppCfgs","userAppCfgs",-1274935350),new cljs.core.Keyword(null,"auto-update","auto-update",-1471446628),cljs.core.not(enabled_QMARK___$1)], 0));
var fexpr__56120 = frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword(null,"auto-update","auto-update",-1471446628)], null),cljs.core.not(enabled_QMARK___$1));
return (fexpr__56120.cljs$core$IFn$_invoke$arity$1 ? fexpr__56120.cljs$core$IFn$_invoke$arity$1(G__56121) : fexpr__56120.call(null,G__56121));
}));
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$app_auto_update_row__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56123 = cljs.core.first(args__31746__auto__);
var G__56124 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56123,G__56124) : io.factorhouse.hsx.core.obj_get.call(null,G__56123,G__56124));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"app-auto-update-row","app-auto-update-row",-455207901,null),args__31746__auto__),frontend$components$settings$app_auto_update_row,args__31746__auto__,null);
}
};
var frontend$components$settings$app_auto_update_row = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56600__i = 0, G__56600__a = new Array(arguments.length -  0);
while (G__56600__i < G__56600__a.length) {G__56600__a[G__56600__i] = arguments[G__56600__i + 0]; ++G__56600__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56600__a,0,null);
} 
return frontend$components$settings$app_auto_update_row__delegate.call(this,args__31746__auto__);};
frontend$components$settings$app_auto_update_row.cljs$lang$maxFixedArity = 0;
frontend$components$settings$app_auto_update_row.cljs$lang$applyTo = (function (arglist__56601){
var args__31746__auto__ = cljs.core.seq(arglist__56601);
return frontend$components$settings$app_auto_update_row__delegate(args__31746__auto__);
});
frontend$components$settings$app_auto_update_row.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$app_auto_update_row__delegate;
return frontend$components$settings$app_auto_update_row;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56125 = comp__31745__auto__;
var G__56126 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56125,G__56126) : io.factorhouse.hsx.core.react_memo.call(null,G__56125,G__56126));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"app-auto-update-row");

return comp__31745__auto__;
})();
/**
 * Keep the language popup clickable over Electron's custom title-bar drag region.
 */
frontend.components.settings.language_select_content_props = (function frontend$components$settings$language_select_content_props(var_args){
var G__56132 = arguments.length;
switch (G__56132) {
case 0:
return frontend.components.settings.language_select_content_props.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.components.settings.language_select_content_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.components.settings.language_select_content_props.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.components.settings.language_select_content_props.cljs$core$IFn$_invoke$arity$1(null);
}));

(frontend.components.settings.language_select_content_props.cljs$core$IFn$_invoke$arity$1 = (function (container){
var no_drag_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app-region","app-region",-1412948438),"no-drag",new cljs.core.Keyword(null,"-webkit-app-region","-webkit-app-region",-1922862988),"no-drag"], null);
var G__56133 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"z-[99999] ls-app-no-drag",new cljs.core.Keyword(null,"style","style",-496642736),no_drag_style,new cljs.core.Keyword(null,"positioner-props","positioner-props",1537253413),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"ls-app-no-drag",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(no_drag_style,new cljs.core.Keyword(null,"z-index","z-index",1892827090),(99999))], null)], null);
if((!((container == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56133,new cljs.core.Keyword(null,"container","container",-1736937707),container);
} else {
return G__56133;
}
}));

(frontend.components.settings.language_select_content_props.cljs$lang$maxFixedArity = 1);

frontend.components.settings.language_row = (function frontend$components$settings$language_row(t,preferred_language){
var selected_language = (function (){var G__56136 = preferred_language;
if((G__56136 == null)){
return null;
} else {
return cljs.core.name(G__56136);
}
})();
var language_items = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (language){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(language)),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(language)], null);
}),frontend.dicts.languages);
var language_labels = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"label","label",1718410804))),language_items);
var on_value_change = (function (lang_code){
if(cljs.core.truth_(lang_code)){
frontend.state.set_preferred_language_BANG_(lang_code);

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("init","commands","init/commands",315507426)], null));

return frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0();
} else {
return null;
}
});
var action = (function (){var G__56137 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),selected_language,new cljs.core.Keyword(null,"items","items",1031954938),language_items,new cljs.core.Keyword(null,"on-value-change","on-value-change",-621835289),on_value_change], null);
var G__56138 = (function (){var G__56142 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-64 h-8"], null);
var G__56143 = (function (){var G__56144 = (function (value){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(language_labels,value,value);
});
return (logseq.shui.ui.select_value.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.select_value.cljs$core$IFn$_invoke$arity$1(G__56144) : logseq.shui.ui.select_value.call(null,G__56144));
})();
return (logseq.shui.ui.select_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_trigger.cljs$core$IFn$_invoke$arity$2(G__56142,G__56143) : logseq.shui.ui.select_trigger.call(null,G__56142,G__56143));
})();
var G__56139 = (function (){var G__56147 = frontend.components.settings.language_select_content_props.cljs$core$IFn$_invoke$arity$1(document.body);
var G__56148 = (function (){var G__56149 = (function (){var iter__5628__auto__ = (function frontend$components$settings$language_row_$_iter__56150(s__56151){
return (new cljs.core.LazySeq(null,(function (){
var s__56151__$1 = s__56151;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__56151__$1);
if(temp__5825__auto__){
var s__56151__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56151__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__56151__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__56153 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__56152 = (0);
while(true){
if((i__56152 < size__5627__auto__)){
var map__56154 = cljs.core._nth(c__5626__auto__,i__56152);
var map__56154__$1 = cljs.core.__destructure_map(map__56154);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56154__$1,new cljs.core.Keyword(null,"value","value",305978217));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56154__$1,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.chunk_append(b__56153,(function (){var G__56155 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),value,new cljs.core.Keyword(null,"value","value",305978217),value], null);
var G__56156 = label;
return (logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2(G__56155,G__56156) : logseq.shui.ui.select_item.call(null,G__56155,G__56156));
})());

var G__56603 = (i__56152 + (1));
i__56152 = G__56603;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56153),frontend$components$settings$language_row_$_iter__56150(cljs.core.chunk_rest(s__56151__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56153),null);
}
} else {
var map__56157 = cljs.core.first(s__56151__$2);
var map__56157__$1 = cljs.core.__destructure_map(map__56157);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56157__$1,new cljs.core.Keyword(null,"value","value",305978217));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56157__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons((function (){var G__56158 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),value,new cljs.core.Keyword(null,"value","value",305978217),value], null);
var G__56159 = label;
return (logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2(G__56158,G__56159) : logseq.shui.ui.select_item.call(null,G__56158,G__56159));
})(),frontend$components$settings$language_row_$_iter__56150(cljs.core.rest(s__56151__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(language_items);
})();
return (logseq.shui.ui.select_group.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.select_group.cljs$core$IFn$_invoke$arity$1(G__56149) : logseq.shui.ui.select_group.call(null,G__56149));
})();
return (logseq.shui.ui.select_content.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_content.cljs$core$IFn$_invoke$arity$2(G__56147,G__56148) : logseq.shui.ui.select_content.call(null,G__56147,G__56148));
})();
return (logseq.shui.ui.select.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.select.cljs$core$IFn$_invoke$arity$3(G__56137,G__56138,G__56139) : logseq.shui.ui.select.call(null,G__56137,G__56138,G__56139));
})();
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.general","language","settings.general/language",18390513)) : t.call(null,new cljs.core.Keyword("settings.general","language","settings.general/language",18390513))),new cljs.core.Keyword(null,"-for","-for",-490432963),"preferred_language",new cljs.core.Keyword(null,"action","action",-811238024),action], null));
});
frontend.components.settings.theme_modes_row = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$theme_modes_row(t){
var _preferred_language = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017)], null));
var theme = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","theme","ui/theme",-1247877132)], null));
var dark_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("dark",theme);
var system_theme_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","system-theme?","ui/system-theme?",1330390822)], null));
var switch_theme = ((dark_QMARK_)?"light":"dark");
var switch_theme_label = (function (){var G__56160 = switch_theme;
switch (G__56160) {
case "light":
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.general","theme-light","settings.general/theme-light",1525535941)) : t.call(null,new cljs.core.Keyword("settings.general","theme-light","settings.general/theme-light",1525535941)));

break;
case "dark":
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.general","theme-dark","settings.general/theme-dark",570330697)) : t.call(null,new cljs.core.Keyword("settings.general","theme-dark","settings.general/theme-dark",570330697)));

break;
default:
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.general","theme-system","settings.general/theme-system",-2046371422)) : t.call(null,new cljs.core.Keyword("settings.general","theme-system","settings.general/theme-system",-2046371422)));

}
})();
var color_accent = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","radix-color","ui/radix-color",1454689984)], null));
var pick_theme = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.cp__theme-modes-options","ul.cp__theme-modes-options",-1938085458),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frontend.state.use_theme_mode_BANG_,"light"),new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),((cljs.core.not(system_theme_QMARK_)) && ((!(dark_QMARK_))))], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.mode-light","i.mode-light",2081173027),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(color_accent)?"radix":null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.general","theme-light","settings.general/theme-light",1525535941)) : t.call(null,new cljs.core.Keyword("settings.general","theme-light","settings.general/theme-light",1525535941)))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frontend.state.use_theme_mode_BANG_,"dark"),new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),((cljs.core.not(system_theme_QMARK_)) && (dark_QMARK_))], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.mode-dark","i.mode-dark",733780794),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(color_accent)?"radix":null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.general","theme-dark","settings.general/theme-dark",570330697)) : t.call(null,new cljs.core.Keyword("settings.general","theme-dark","settings.general/theme-dark",570330697)))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frontend.state.use_theme_mode_BANG_,"system"),new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),system_theme_QMARK_], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.mode-system","i.mode-system",411983973),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(color_accent)?"radix":null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.general","theme-system","settings.general/theme-system",-2046371422)) : t.call(null,new cljs.core.Keyword("settings.general","theme-system","settings.general/theme-system",-2046371422)))], null)], null)], null);
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),(t.cljs$core$IFn$_invoke$arity$2 ? t.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("theme","switch-to","theme/switch-to",-765093909),switch_theme_label) : t.call(null,new cljs.core.Keyword("theme","switch-to","theme/switch-to",-765093909),switch_theme_label)),new cljs.core.Keyword(null,"-for","-for",-490432963),"toggle_theme",new cljs.core.Keyword(null,"action","action",-811238024),pick_theme,new cljs.core.Keyword(null,"desc","desc",2093485764),frontend.ui.render_keyboard_shortcut.cljs$core$IFn$_invoke$arity$variadic(frontend.modules.shortcut.data_helper.gen_shortcut_seq(new cljs.core.Keyword("ui","toggle-theme","ui/toggle-theme",-91905800)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shortcut-id","shortcut-id",2068609942),new cljs.core.Keyword("ui","toggle-theme","ui/toggle-theme",-91905800)], 0))], null));
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$theme_modes_row__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56161 = cljs.core.first(args__31746__auto__);
var G__56162 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56161,G__56162) : io.factorhouse.hsx.core.obj_get.call(null,G__56161,G__56162));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"theme-modes-row","theme-modes-row",-1653337324,null),args__31746__auto__),frontend$components$settings$theme_modes_row,args__31746__auto__,null);
}
};
var frontend$components$settings$theme_modes_row = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56605__i = 0, G__56605__a = new Array(arguments.length -  0);
while (G__56605__i < G__56605__a.length) {G__56605__a[G__56605__i] = arguments[G__56605__i + 0]; ++G__56605__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56605__a,0,null);
} 
return frontend$components$settings$theme_modes_row__delegate.call(this,args__31746__auto__);};
frontend$components$settings$theme_modes_row.cljs$lang$maxFixedArity = 0;
frontend$components$settings$theme_modes_row.cljs$lang$applyTo = (function (arglist__56606){
var args__31746__auto__ = cljs.core.seq(arglist__56606);
return frontend$components$settings$theme_modes_row__delegate(args__31746__auto__);
});
frontend$components$settings$theme_modes_row.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$theme_modes_row__delegate;
return frontend$components$settings$theme_modes_row;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56163 = comp__31745__auto__;
var G__56164 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56163,G__56164) : io.factorhouse.hsx.core.react_memo.call(null,G__56163,G__56164));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"theme-modes-row");

return comp__31745__auto__;
})();
frontend.components.settings.accent_color_row = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$accent_color_row(_in_modal_QMARK_){
var _preferred_language = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017)], null));
var color_accent = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","radix-color","ui/radix-color",1454689984)], null));
var color_label = (function (color){
var G__56165 = color;
var G__56165__$1 = (((G__56165 instanceof cljs.core.Keyword))?G__56165.fqn:null);
switch (G__56165__$1) {
case "none":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"300px"], null)], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.general","accent-color-none-desc","settings.general/accent-color-none-desc",-1193874737)], 0))], null);

break;
case "logseq":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.general","accent-color-logseq","settings.general/accent-color-logseq",1670567799)], 0));

break;
case "tomato":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("color","tomato","color/tomato",1000131387)], 0));

break;
case "red":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("color","red","color/red",-1008647305)], 0));

break;
case "crimson":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("color","crimson","color/crimson",-1365661662)], 0));

break;
case "pink":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("color","pink","color/pink",491787851)], 0));

break;
case "plum":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("color","plum","color/plum",1865410571)], 0));

break;
case "purple":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("color","purple","color/purple",-978178787)], 0));

break;
case "violet":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("color","violet","color/violet",-1194785450)], 0));

break;
case "indigo":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("color","indigo","color/indigo",-218832553)], 0));

break;
case "blue":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("color","blue","color/blue",-652808489)], 0));

break;
case "cyan":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("color","cyan","color/cyan",1079505739)], 0));

break;
case "teal":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("color","teal","color/teal",1266438901)], 0));

break;
case "green":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("color","green","color/green",-837986184)], 0));

break;
case "grass":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("color","grass","color/grass",1391902538)], 0));

break;
case "orange":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("color","orange","color/orange",168757219)], 0));

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56165__$1))));

}
});
var pick_theme = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__accent-colors-list-wrap","div.cp__accent-colors-list-wrap",-1810587712),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(_in_modal_QMARK_)?"as-modal-picker":"")], null),(function (){var iter__5628__auto__ = (function frontend$components$settings$accent_color_row_$_iter__56166(s__56167){
return (new cljs.core.LazySeq(null,(function (){
var s__56167__$1 = s__56167;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__56167__$1);
if(temp__5825__auto__){
var s__56167__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56167__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__56167__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__56169 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__56168 = (0);
while(true){
if((i__56168 < size__5627__auto__)){
var color = cljs.core._nth(c__5626__auto__,i__56168);
var active_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,color_accent);
var none_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.Keyword(null,"none","none",1333468478));
cljs.core.chunk_append(b__56169,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(color)], null),frontend.ui.tooltip((function (){var G__56170 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-5 h-5 px-1 !rounded-full flex justify-center items-center transition ease-in duration-100 hover:cursor-pointer hover:opacity-100",new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),(function (){var and__5140__auto__ = _in_modal_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return active_QMARK_;
} else {
return and__5140__auto__;
}
})(),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background-color","background-color",570434026),frontend.colors.variable.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.Keyword(null,"09","09",-2019125985)),new cljs.core.Keyword(null,"outline-color","outline-color",-804747875),frontend.colors.variable.cljs$core$IFn$_invoke$arity$2(color,((active_QMARK_)?new cljs.core.Keyword(null,"07","07",-2092670845):new cljs.core.Keyword(null,"06","06",1040277546))),new cljs.core.Keyword(null,"outline-width","outline-width",-381531602),((active_QMARK_)?"4px":"1px"),new cljs.core.Keyword(null,"outline-style","outline-style",227043878),new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.Keyword(null,"opacity","opacity",397153780),((active_QMARK_)?(1):0.5)], null),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__56168,active_QMARK_,none_QMARK_,color,c__5626__auto__,size__5627__auto__,b__56169,s__56167__$2,temp__5825__auto__,_preferred_language,color_accent,color_label){
return (function (_e){
return frontend.state.set_color_accent_BANG_(color);
});})(i__56168,active_QMARK_,none_QMARK_,color,c__5626__auto__,size__5627__auto__,b__56169,s__56167__$2,temp__5825__auto__,_preferred_language,color_accent,color_label))
], null);
var G__56171 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((none_QMARK_)?"h-0.5 w-full bg-red-700":"w-2 h-2 !rounded-full transition ease-in duration-100"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(((!(none_QMARK_)))?(""+"var(--rx-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(color))+"-07)"):""),new cljs.core.Keyword(null,"opacity","opacity",397153780),((((none_QMARK_) || (active_QMARK_)))?(1):(0))], null)], null)], null);
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__56170,G__56171) : logseq.shui.ui.button.call(null,G__56170,G__56171));
})(),color_label(color))], null));

var G__56608 = (i__56168 + (1));
i__56168 = G__56608;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56169),frontend$components$settings$accent_color_row_$_iter__56166(cljs.core.chunk_rest(s__56167__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56169),null);
}
} else {
var color = cljs.core.first(s__56167__$2);
var active_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,color_accent);
var none_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.Keyword(null,"none","none",1333468478));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(color)], null),frontend.ui.tooltip((function (){var G__56172 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-5 h-5 px-1 !rounded-full flex justify-center items-center transition ease-in duration-100 hover:cursor-pointer hover:opacity-100",new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),(function (){var and__5140__auto__ = _in_modal_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return active_QMARK_;
} else {
return and__5140__auto__;
}
})(),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background-color","background-color",570434026),frontend.colors.variable.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.Keyword(null,"09","09",-2019125985)),new cljs.core.Keyword(null,"outline-color","outline-color",-804747875),frontend.colors.variable.cljs$core$IFn$_invoke$arity$2(color,((active_QMARK_)?new cljs.core.Keyword(null,"07","07",-2092670845):new cljs.core.Keyword(null,"06","06",1040277546))),new cljs.core.Keyword(null,"outline-width","outline-width",-381531602),((active_QMARK_)?"4px":"1px"),new cljs.core.Keyword(null,"outline-style","outline-style",227043878),new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.Keyword(null,"opacity","opacity",397153780),((active_QMARK_)?(1):0.5)], null),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (active_QMARK_,none_QMARK_,color,s__56167__$2,temp__5825__auto__,_preferred_language,color_accent,color_label){
return (function (_e){
return frontend.state.set_color_accent_BANG_(color);
});})(active_QMARK_,none_QMARK_,color,s__56167__$2,temp__5825__auto__,_preferred_language,color_accent,color_label))
], null);
var G__56173 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((none_QMARK_)?"h-0.5 w-full bg-red-700":"w-2 h-2 !rounded-full transition ease-in duration-100"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(((!(none_QMARK_)))?(""+"var(--rx-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(color))+"-07)"):""),new cljs.core.Keyword(null,"opacity","opacity",397153780),((((none_QMARK_) || (active_QMARK_)))?(1):(0))], null)], null)], null);
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__56172,G__56173) : logseq.shui.ui.button.call(null,G__56172,G__56173));
})(),color_label(color))], null),frontend$components$settings$accent_color_row_$_iter__56166(cljs.core.rest(s__56167__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"logseq","logseq",-928939893)], null),frontend.colors.color_list));
})()], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.general","accent-color","settings.general/accent-color",366288654)], 0)),new cljs.core.Keyword(null,"-for","-for",-490432963),"toggle_radix_theme",new cljs.core.Keyword(null,"desc","desc",2093485764),(cljs.core.truth_(_in_modal_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pl-6","span.pl-6",-709977211),frontend.ui.render_keyboard_shortcut.cljs$core$IFn$_invoke$arity$variadic(frontend.modules.shortcut.data_helper.gen_shortcut_seq(new cljs.core.Keyword("ui","customize-appearance","ui/customize-appearance",-52617607)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shortcut-id","shortcut-id",2068609942),new cljs.core.Keyword("ui","customize-appearance","ui/customize-appearance",-52617607)], 0))], null)),new cljs.core.Keyword(null,"stretch","stretch",-1888837380),cljs.core.boolean$(_in_modal_QMARK_),new cljs.core.Keyword(null,"action","action",-811238024),pick_theme], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.opacity-50.mt-1","div.text-sm.opacity-50.mt-1",-1919935080),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.general","accent-color-alert","settings.general/accent-color-alert",203563409)], 0))], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$accent_color_row__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56174 = cljs.core.first(args__31746__auto__);
var G__56175 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56174,G__56175) : io.factorhouse.hsx.core.obj_get.call(null,G__56174,G__56175));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"accent-color-row","accent-color-row",1759742759,null),args__31746__auto__),frontend$components$settings$accent_color_row,args__31746__auto__,null);
}
};
var frontend$components$settings$accent_color_row = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56609__i = 0, G__56609__a = new Array(arguments.length -  0);
while (G__56609__i < G__56609__a.length) {G__56609__a[G__56609__i] = arguments[G__56609__i + 0]; ++G__56609__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56609__a,0,null);
} 
return frontend$components$settings$accent_color_row__delegate.call(this,args__31746__auto__);};
frontend$components$settings$accent_color_row.cljs$lang$maxFixedArity = 0;
frontend$components$settings$accent_color_row.cljs$lang$applyTo = (function (arglist__56610){
var args__31746__auto__ = cljs.core.seq(arglist__56610);
return frontend$components$settings$accent_color_row__delegate(args__31746__auto__);
});
frontend$components$settings$accent_color_row.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$accent_color_row__delegate;
return frontend$components$settings$accent_color_row;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56176 = comp__31745__auto__;
var G__56177 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56176,G__56177) : io.factorhouse.hsx.core.react_memo.call(null,G__56176,G__56177));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"accent-color-row");

return comp__31745__auto__;
})();
frontend.components.settings.appearance = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$appearance(){
var _config = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415)], null));
var editor_font = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","editor-font","ui/editor-font",582019775)], null));
var wide_mode_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","wide-mode?","ui/wide-mode?",-1881882061)], null));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#appearance_settings.cp__settings-appearance-dialog-inner","div#appearance_settings.cp__settings-appearance-dialog-inner",-1828991858),frontend.components.settings.theme_modes_row(frontend.context.i18n.t),frontend.components.settings.editor_font_family_row(frontend.context.i18n.t,editor_font),frontend.components.settings.toggle_wide_mode_row(frontend.context.i18n.t,wide_mode_QMARK_),frontend.components.settings.show_brackets_row(frontend.context.i18n.t,frontend.state.show_brackets_QMARK_()),frontend.components.settings.accent_color_row(true)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$appearance__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56178 = cljs.core.first(args__31746__auto__);
var G__56179 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56178,G__56179) : io.factorhouse.hsx.core.obj_get.call(null,G__56178,G__56179));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"appearance","appearance",1424148095,null),args__31746__auto__),frontend$components$settings$appearance,args__31746__auto__,null);
}
};
var frontend$components$settings$appearance = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56611__i = 0, G__56611__a = new Array(arguments.length -  0);
while (G__56611__i < G__56611__a.length) {G__56611__a[G__56611__i] = arguments[G__56611__i + 0]; ++G__56611__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56611__a,0,null);
} 
return frontend$components$settings$appearance__delegate.call(this,args__31746__auto__);};
frontend$components$settings$appearance.cljs$lang$maxFixedArity = 0;
frontend$components$settings$appearance.cljs$lang$applyTo = (function (arglist__56612){
var args__31746__auto__ = cljs.core.seq(arglist__56612);
return frontend$components$settings$appearance__delegate(args__31746__auto__);
});
frontend$components$settings$appearance.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$appearance__delegate;
return frontend$components$settings$appearance;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56180 = comp__31745__auto__;
var G__56181 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56180,G__56181) : io.factorhouse.hsx.core.react_memo.call(null,G__56180,G__56181));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"appearance");

return comp__31745__auto__;
})();
frontend.components.settings.date_format_row = (function frontend$components$settings$date_format_row(t,preferred_date_format){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-:div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-center","div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-:div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-center",-596880729),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-sm.font-medium.leading-5.opacity-70","label.block.text-sm.font-medium.leading-5.opacity-70",643274172),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"custom_date_format"], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.editor","custom-date-format","settings.editor/custom-date-format",67897250)) : t.call(null,new cljs.core.Keyword("settings.editor","custom-date-format","settings.editor/custom-date-format",67897250)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1.sm:mt-0.sm:col-span-2","div.mt-1.sm:mt-0.sm:col-span-2",1617581337),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.max-w-lg.rounded-md","div.max-w-lg.rounded-md",-1164491035),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.form-select.is-small","select.form-select.is-small",1007249743),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),preferred_date_format,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var format = frontend.util.evalue(e);
if(clojure.string.blank_QMARK_(format)){
return null;
} else {
promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null),new cljs.core.Keyword("logseq.class","Journal","logseq.class/Journal",1979741081)], 0))),(function (journal_class){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.property.set_block_property_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(journal_class),new cljs.core.Keyword("logseq.property.journal","title-format","logseq.property.journal/title-format",-1536497954),format)),(function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.set_date_formatter_BANG_(frontend.state.get_current_repo(),format)),(function (___21901__auto____$1){
return promesa.protocols._promise(frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$1((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.general","refresh-required-feedback","settings.general/refresh-required-feedback",-2134226959)) : t.call(null,new cljs.core.Keyword("settings.general","refresh-required-feedback","settings.general/refresh-required-feedback",-2134226959)))));
}));
}));
}));
}));

return (logseq.shui.ui.dialog_close_all_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dialog_close_all_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dialog_close_all_BANG_.call(null));
}
})], null),(function (){var iter__5628__auto__ = (function frontend$components$settings$date_format_row_$_iter__56182(s__56183){
return (new cljs.core.LazySeq(null,(function (){
var s__56183__$1 = s__56183;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__56183__$1);
if(temp__5825__auto__){
var s__56183__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56183__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__56183__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__56185 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__56184 = (0);
while(true){
if((i__56184 < size__5627__auto__)){
var format = cljs.core._nth(c__5626__auto__,i__56184);
cljs.core.chunk_append(b__56185,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),format], null),format], null));

var G__56613 = (i__56184 + (1));
i__56184 = G__56613;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56185),frontend$components$settings$date_format_row_$_iter__56182(cljs.core.chunk_rest(s__56183__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56185),null);
}
} else {
var format = cljs.core.first(s__56183__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),format], null),format], null),frontend$components$settings$date_format_row_$_iter__56182(cljs.core.rest(s__56183__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(frontend.date.journal_title_formatters()));
})()], null)], null)], null)], null);
});
frontend.components.settings.outdenting_row = (function frontend$components$settings$outdenting_row(t,logical_outdenting_QMARK_){
return frontend.components.settings.toggle("preferred_outdenting",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.editor","preferred-outdenting","settings.editor/preferred-outdenting",-1718961984)) : t.call(null,new cljs.core.Keyword("settings.editor","preferred-outdenting","settings.editor/preferred-outdenting",-1718961984))),frontend.ui.tooltip(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.px-2","span.flex.px-2",-1203404947),frontend.components.svg.info()], null),frontend.components.settings.outdenting_hint(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"side","side",389652279),"right"], null)], null))], null),logical_outdenting_QMARK_,frontend.handler.config.toggle_logical_outdenting_BANG_);
});
frontend.components.settings.showing_full_blocks = (function frontend$components$settings$showing_full_blocks(t,show_full_blocks_QMARK_){
return frontend.components.settings.toggle("show_full_blocks",(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.editor","show-full-blocks","settings.editor/show-full-blocks",-1453016709)) : t.call(null,new cljs.core.Keyword("settings.editor","show-full-blocks","settings.editor/show-full-blocks",-1453016709))),show_full_blocks_QMARK_,frontend.handler.config.toggle_show_full_blocks_BANG_);
});
frontend.components.settings.preferred_pasting_file = (function frontend$components$settings$preferred_pasting_file(t,preferred_pasting_file_QMARK_){
return frontend.components.settings.toggle("preferred_pasting_file",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.editor","preferred-pasting-file","settings.editor/preferred-pasting-file",-263489582)) : t.call(null,new cljs.core.Keyword("settings.editor","preferred-pasting-file","settings.editor/preferred-pasting-file",-263489582))),frontend.ui.tooltip(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.px-2","span.flex.px-2",-1203404947),frontend.components.svg.info()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.block.w-64","span.block.w-64",1641501410),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.editor","preferred-pasting-file-hint","settings.editor/preferred-pasting-file-hint",-334847955)) : t.call(null,new cljs.core.Keyword("settings.editor","preferred-pasting-file-hint","settings.editor/preferred-pasting-file-hint",-334847955)))], null))], null),preferred_pasting_file_QMARK_,frontend.handler.config.toggle_preferred_pasting_file_BANG_);
});
frontend.components.settings.auto_expand_row = (function frontend$components$settings$auto_expand_row(t,auto_expand_block_refs_QMARK_){
return frontend.components.settings.toggle("auto_expand_block_refs",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.editor","auto-expand-block-refs","settings.editor/auto-expand-block-refs",-1586110982)) : t.call(null,new cljs.core.Keyword("settings.editor","auto-expand-block-refs","settings.editor/auto-expand-block-refs",-1586110982))),frontend.ui.tooltip(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.px-2","span.flex.px-2",-1203404947),frontend.components.svg.info()], null),frontend.components.settings.auto_expand_hint())], null),auto_expand_block_refs_QMARK_,frontend.handler.config.toggle_auto_expand_block_refs_BANG_);
});
frontend.components.settings.tooltip_row = (function frontend$components$settings$tooltip_row(t,enable_tooltip_QMARK_){
return frontend.components.settings.toggle("enable_tooltip",(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.editor","enable-tooltip","settings.editor/enable-tooltip",701982821)) : t.call(null,new cljs.core.Keyword("settings.editor","enable-tooltip","settings.editor/enable-tooltip",701982821))),enable_tooltip_QMARK_,(function (){
return frontend.handler.config.toggle_ui_enable_tooltip_BANG_();
}));
});
frontend.components.settings.shortcut_tooltip_row = (function frontend$components$settings$shortcut_tooltip_row(t,enable_shortcut_tooltip_QMARK_){
return frontend.components.settings.toggle("enable_tooltip",(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.editor","enable-shortcut-tooltip","settings.editor/enable-shortcut-tooltip",-1211344586)) : t.call(null,new cljs.core.Keyword("settings.editor","enable-shortcut-tooltip","settings.editor/enable-shortcut-tooltip",-1211344586))),enable_shortcut_tooltip_QMARK_,(function (){
return frontend.state.toggle_shortcut_tooltip_BANG_();
}));
});
frontend.components.settings.update_home_page = (function frontend$components$settings$update_home_page(event){
var value = frontend.util.evalue(event);
if(clojure.string.blank_QMARK_(value)){
var home = cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"default-home","default-home",171104159),cljs.core.PersistentArrayMap.EMPTY);
var new_home = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(home,new cljs.core.Keyword(null,"page","page",849072397));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.config.set_config_BANG_(new cljs.core.Keyword(null,"default-home","default-home",171104159),new_home)),(function (___21901__auto__){
return promesa.protocols._promise(frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.features","home-default-page-update-success","settings.features/home-default-page-update-success",200808565)], 0)),new cljs.core.Keyword(null,"success","success",1890645906)));
}));
}));
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(value) : frontend.util.page_name_sanity_lc.call(null,value))], null)], 0))),(function (page){
return promesa.protocols._promise((cljs.core.truth_(page)?(function (){var home = cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"default-home","default-home",171104159),cljs.core.PersistentArrayMap.EMPTY);
var new_home = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(home,new cljs.core.Keyword(null,"page","page",849072397),value);
frontend.handler.config.set_config_BANG_(new cljs.core.Keyword(null,"default-home","default-home",171104159),new_home);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.features","home-default-page-update-success","settings.features/home-default-page-update-success",200808565)], 0)),new cljs.core.Keyword(null,"success","success",1890645906));
})():frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.features","page-not-found","settings.features/page-not-found",774548319),value], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671))));
}));
}));

}
});
frontend.components.settings.enable_all_pages_public_row = (function frontend$components$settings$enable_all_pages_public_row(t,enable_all_pages_public_QMARK_){
return frontend.components.settings.toggle("all pages public",(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.editor","enable-all-pages-public","settings.editor/enable-all-pages-public",-250591828)) : t.call(null,new cljs.core.Keyword("settings.editor","enable-all-pages-public","settings.editor/enable-all-pages-public",-250591828))),enable_all_pages_public_QMARK_,(function (){
var value = cljs.core.not(enable_all_pages_public_QMARK_);
return frontend.handler.config.set_config_BANG_(new cljs.core.Keyword("publishing","all-pages-public?","publishing/all-pages-public?",-386830034),value);
}));
});
frontend.components.settings.usage_diagnostics_row = (function frontend$components$settings$usage_diagnostics_row(t,instrument_disabled_QMARK_){
return frontend.components.settings.toggle.cljs$core$IFn$_invoke$arity$variadic("usage-diagnostics",(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.advanced","disable-sentry","settings.advanced/disable-sentry",1168253020)) : t.call(null,new cljs.core.Keyword("settings.advanced","disable-sentry","settings.advanced/disable-sentry",1168253020))),cljs.core.not(instrument_disabled_QMARK_),(function (){
return frontend.modules.instrumentation.core.disable_instrument(cljs.core.not(instrument_disabled_QMARK_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.opacity-50","span.text-sm.opacity-50",1991571125),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.advanced","disable-sentry-desc","settings.advanced/disable-sentry-desc",-380049190)) : t.call(null,new cljs.core.Keyword("settings.advanced","disable-sentry-desc","settings.advanced/disable-sentry-desc",-380049190)))], null)], 0));
});
frontend.components.settings.version_row = (function frontend$components$settings$version_row(t,version){
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.general","current-version","settings.general/current-version",860113392)) : t.call(null,new cljs.core.Keyword("settings.general","current-version","settings.general/current-version",860113392))),new cljs.core.Keyword(null,"action","action",-811238024),frontend.components.settings.app_updater(version),new cljs.core.Keyword(null,"-for","-for",-490432963),"current-version"], null));
});
frontend.components.settings.developer_mode_row = (function frontend$components$settings$developer_mode_row(t,developer_mode_QMARK_){
return frontend.components.settings.toggle.cljs$core$IFn$_invoke$arity$variadic("developer_mode",(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.advanced","developer-mode","settings.advanced/developer-mode",-1413720035)) : t.call(null,new cljs.core.Keyword("settings.advanced","developer-mode","settings.advanced/developer-mode",-1413720035))),developer_mode_QMARK_,(function (){
var mode = cljs.core.not(developer_mode_QMARK_);
return frontend.state.set_developer_mode_BANG_(mode);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.opacity-50","div.text-sm.opacity-50",829333122),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.advanced","developer-mode-desc","settings.advanced/developer-mode-desc",-343640181)) : t.call(null,new cljs.core.Keyword("settings.advanced","developer-mode-desc","settings.advanced/developer-mode-desc",-343640181)))], null)], 0));
});
frontend.components.settings.semantic_search_setting_supported_QMARK_ = (function frontend$components$settings$semantic_search_setting_supported_QMARK_(p__56186){
var map__56187 = p__56186;
var map__56187__$1 = cljs.core.__destructure_map(map__56187);
var platform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56187__$1,new cljs.core.Keyword(null,"platform","platform",-1086422114));
var arch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56187__$1,new cljs.core.Keyword(null,"arch","arch",1231754795));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("darwin",platform)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("arm64",arch)));
});
frontend.components.settings.semantic_search_row = (function frontend$components$settings$semantic_search_row(t,enabled_QMARK_){
return frontend.components.settings.toggle.cljs$core$IFn$_invoke$arity$variadic("semantic_search",(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.features","semantic-search","settings.features/semantic-search",-709438492)) : t.call(null,new cljs.core.Keyword("settings.features","semantic-search","settings.features/semantic-search",-709438492))),enabled_QMARK_,(function (){
var enabled_QMARK__SINGLEQUOTE_ = cljs.core.not(enabled_QMARK_);
if(enabled_QMARK__SINGLEQUOTE_){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"userAppCfgs","userAppCfgs",-1274935350),new cljs.core.Keyword("feature","enable-semantic-search?","feature/enable-semantic-search?",-1561249444),true], 0)),(function (_){
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("feature","enable-semantic-search?","feature/enable-semantic-search?",-1561249444)], null),true);
})),(function (_error){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.features","semantic-search-python3-missing","settings.features/semantic-search-python3-missing",-120016476)) : t.call(null,new cljs.core.Keyword("settings.features","semantic-search-python3-missing","settings.features/semantic-search-python3-missing",-120016476))),new cljs.core.Keyword(null,"warning","warning",-1685650671));
}));
} else {
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("feature","enable-semantic-search?","feature/enable-semantic-search?",-1561249444)], null),false);

return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"userAppCfgs","userAppCfgs",-1274935350),new cljs.core.Keyword("feature","enable-semantic-search?","feature/enable-semantic-search?",-1561249444),false], 0));
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.opacity-50","div.text-sm.opacity-50",829333122),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.features","semantic-search-desc","settings.features/semantic-search-desc",-770897960)) : t.call(null,new cljs.core.Keyword("settings.features","semantic-search-desc","settings.features/semantic-search-desc",-770897960)))], null)], 0));
});
frontend.components.settings.plugin_enabled_switcher = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$plugin_enabled_switcher(t){
var value = frontend.state.lsp_enabled_QMARK__or_theme();
var vec__56188 = logseq.shui.hooks.use_state(value);
var on_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56188,(0),null);
var set_on_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56188,(1),null);
var on_toggle = (function (){
var v = cljs.core.not(on_QMARK_);
(set_on_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_on_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : set_on_QMARK_.call(null,v));

return frontend.storage.set(new cljs.core.Keyword("frontend.spec.storage","lsp-core-enabled","frontend.spec.storage/lsp-core-enabled",-1474488934),v);
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-2","div.flex.items-center.gap-2",-1286016734),frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(on_QMARK_,on_toggle,true),(cljs.core.truth_(frontend.util.electron_QMARK_())?((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$(value),on_QMARK_))?frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("plugin","restart","plugin/restart",-927945071)) : t.call(null,new cljs.core.Keyword("plugin","restart","plugin/restart",-927945071))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return logseq.api.relaunch();
}),new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"intent","intent",-390846953),"logseq"], 0)):null):null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$plugin_enabled_switcher__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56191 = cljs.core.first(args__31746__auto__);
var G__56192 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56191,G__56192) : io.factorhouse.hsx.core.obj_get.call(null,G__56191,G__56192));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"plugin-enabled-switcher","plugin-enabled-switcher",-730234467,null),args__31746__auto__),frontend$components$settings$plugin_enabled_switcher,args__31746__auto__,null);
}
};
var frontend$components$settings$plugin_enabled_switcher = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56614__i = 0, G__56614__a = new Array(arguments.length -  0);
while (G__56614__i < G__56614__a.length) {G__56614__a[G__56614__i] = arguments[G__56614__i + 0]; ++G__56614__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56614__a,0,null);
} 
return frontend$components$settings$plugin_enabled_switcher__delegate.call(this,args__31746__auto__);};
frontend$components$settings$plugin_enabled_switcher.cljs$lang$maxFixedArity = 0;
frontend$components$settings$plugin_enabled_switcher.cljs$lang$applyTo = (function (arglist__56615){
var args__31746__auto__ = cljs.core.seq(arglist__56615);
return frontend$components$settings$plugin_enabled_switcher__delegate(args__31746__auto__);
});
frontend$components$settings$plugin_enabled_switcher.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$plugin_enabled_switcher__delegate;
return frontend$components$settings$plugin_enabled_switcher;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56193 = comp__31745__auto__;
var G__56194 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56193,G__56194) : io.factorhouse.hsx.core.react_memo.call(null,G__56193,G__56194));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"plugin-enabled-switcher");

return comp__31745__auto__;
})();
frontend.components.settings.http_server_enabled_switcher = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$http_server_enabled_switcher(t){
var vec__56195 = logseq.shui.hooks.use_state(cljs.core.boolean$(frontend.storage.get(new cljs.core.Keyword("frontend.spec.storage","http-server-enabled","frontend.spec.storage/http-server-enabled",-1753032348))));
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56195,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56195,(1),null);
var vec__56198 = logseq.shui.hooks.use_state(value);
var on_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56198,(0),null);
var set_on_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56198,(1),null);
var on_toggle = (function (){
var v = cljs.core.not(on_QMARK_);
(set_on_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_on_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : set_on_QMARK_.call(null,v));

return frontend.storage.set(new cljs.core.Keyword("frontend.spec.storage","http-server-enabled","frontend.spec.storage/http-server-enabled",-1753032348),v);
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-2","div.flex.items-center.gap-2",-1286016734),frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(on_QMARK_,on_toggle,true),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$(value),on_QMARK_))?frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("plugin","restart","plugin/restart",-927945071)) : t.call(null,new cljs.core.Keyword("plugin","restart","plugin/restart",-927945071))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return logseq.api.relaunch();
}),new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"intent","intent",-390846953),"logseq"], 0)):null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$http_server_enabled_switcher__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56201 = cljs.core.first(args__31746__auto__);
var G__56202 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56201,G__56202) : io.factorhouse.hsx.core.obj_get.call(null,G__56201,G__56202));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"http-server-enabled-switcher","http-server-enabled-switcher",1124076431,null),args__31746__auto__),frontend$components$settings$http_server_enabled_switcher,args__31746__auto__,null);
}
};
var frontend$components$settings$http_server_enabled_switcher = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56616__i = 0, G__56616__a = new Array(arguments.length -  0);
while (G__56616__i < G__56616__a.length) {G__56616__a[G__56616__i] = arguments[G__56616__i + 0]; ++G__56616__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56616__a,0,null);
} 
return frontend$components$settings$http_server_enabled_switcher__delegate.call(this,args__31746__auto__);};
frontend$components$settings$http_server_enabled_switcher.cljs$lang$maxFixedArity = 0;
frontend$components$settings$http_server_enabled_switcher.cljs$lang$applyTo = (function (arglist__56617){
var args__31746__auto__ = cljs.core.seq(arglist__56617);
return frontend$components$settings$http_server_enabled_switcher__delegate(args__31746__auto__);
});
frontend$components$settings$http_server_enabled_switcher.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$http_server_enabled_switcher__delegate;
return frontend$components$settings$http_server_enabled_switcher;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56203 = comp__31745__auto__;
var G__56204 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56203,G__56204) : io.factorhouse.hsx.core.react_memo.call(null,G__56203,G__56204));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"http-server-enabled-switcher");

return comp__31745__auto__;
})();
frontend.components.settings.flashcards_enabled_switcher = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$flashcards_enabled_switcher(enable_flashcards_QMARK_){
return frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(enable_flashcards_QMARK_,(function (){
var value = cljs.core.not(enable_flashcards_QMARK_);
return frontend.handler.config.set_config_BANG_(new cljs.core.Keyword("feature","enable-flashcards?","feature/enable-flashcards?",1572039243),value);
}),true);
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$flashcards_enabled_switcher__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56205 = cljs.core.first(args__31746__auto__);
var G__56206 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56205,G__56206) : io.factorhouse.hsx.core.obj_get.call(null,G__56205,G__56206));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"flashcards-enabled-switcher","flashcards-enabled-switcher",616584775,null),args__31746__auto__),frontend$components$settings$flashcards_enabled_switcher,args__31746__auto__,null);
}
};
var frontend$components$settings$flashcards_enabled_switcher = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56618__i = 0, G__56618__a = new Array(arguments.length -  0);
while (G__56618__i < G__56618__a.length) {G__56618__a[G__56618__i] = arguments[G__56618__i + 0]; ++G__56618__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56618__a,0,null);
} 
return frontend$components$settings$flashcards_enabled_switcher__delegate.call(this,args__31746__auto__);};
frontend$components$settings$flashcards_enabled_switcher.cljs$lang$maxFixedArity = 0;
frontend$components$settings$flashcards_enabled_switcher.cljs$lang$applyTo = (function (arglist__56619){
var args__31746__auto__ = cljs.core.seq(arglist__56619);
return frontend$components$settings$flashcards_enabled_switcher__delegate(args__31746__auto__);
});
frontend$components$settings$flashcards_enabled_switcher.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$flashcards_enabled_switcher__delegate;
return frontend$components$settings$flashcards_enabled_switcher;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56207 = comp__31745__auto__;
var G__56208 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56207,G__56208) : io.factorhouse.hsx.core.react_memo.call(null,G__56207,G__56208));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"flashcards-enabled-switcher");

return comp__31745__auto__;
})();
/**
 * Push the current sync URL config to the db worker so changes take effect
 * without restarting the app.
 */
frontend.components.settings.push_sync_config_to_worker_BANG_ = (function frontend$components$settings$push_sync_config_to_worker_BANG_(){
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","set-db-sync-config","thread-api/set-db-sync-config",-619924056),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"ws-url","ws-url",-1466481235),frontend.config.db_sync_ws_url(),new cljs.core.Keyword(null,"http-base","http-base",2042022955),frontend.config.db_sync_http_base()], null)], 0));
});
frontend.components.settings.sync_server_url_settings_container = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$sync_server_url_settings_container(){
var current_url = frontend.config.get_custom_sync_server_url();
var vec__56212 = logseq.shui.hooks.use_state((function (){var or__5142__auto__ = current_url;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})());
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56212,(0),null);
var set_url_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56212,(1),null);
var reset_url_BANG_ = (function (){
frontend.config.set_custom_sync_server_url_BANG_(null);

(set_url_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_url_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_url_BANG_.call(null,""));

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.components.settings.push_sync_config_to_worker_BANG_(),(function (){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.sync-server","clear-success","settings.sync-server/clear-success",-184043202)], 0)),new cljs.core.Keyword(null,"success","success",1890645906));
})),(function (p1__56209_SHARP_){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2((""+"Failed to update worker: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__56209_SHARP_)),new cljs.core.Keyword(null,"error","error",-978969032));
}));
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__settings-sync-server-cnt","div.cp__settings-sync-server-cnt",434913248),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.mb-2.text-2xl.font-bold","h1.mb-2.text-2xl.font-bold",-522821176),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.sync-server","url","settings.sync-server/url",922957600)], 0))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-2","div.p-2",-325121057),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm.opacity-70.mb-4","p.text-sm.opacity-70.mb-4",-1836026318),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.sync-server","url-desc","settings.sync-server/url-desc",-160610340)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"URL"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-input.is-small","input.form-input.is-small",-550503875),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),url,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.config.default_db_sync_http_base,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__56210_SHARP_){
var G__56215 = frontend.util.evalue(p1__56210_SHARP_);
return (set_url_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_url_BANG_.cljs$core$IFn$_invoke$arity$1(G__56215) : set_url_BANG_.call(null,G__56215));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.pt-2.flex.gap-2","p.pt-2.flex.gap-2",589881349),(function (){var G__56216 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var trimmed = clojure.string.trim(url);
if(clojure.string.blank_QMARK_(trimmed)){
return reset_url_BANG_();
} else {
if(cljs.core.not(frontend.config.valid_sync_server_url_QMARK_(trimmed))){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.sync-server","url-invalid-error","settings.sync-server/url-invalid-error",628456144)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
} else {
frontend.config.set_custom_sync_server_url_BANG_(trimmed);

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.components.settings.push_sync_config_to_worker_BANG_(),(function (){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.sync-server","save-success","settings.sync-server/save-success",-1741147188)], 0)),new cljs.core.Keyword(null,"success","success",1890645906));
})),(function (p1__56211_SHARP_){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2((""+"Failed to update worker: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__56211_SHARP_)),new cljs.core.Keyword(null,"error","error",-978969032));
}));
}
}
})], null);
var G__56217 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","save","ui/save",1850075345)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__56216,G__56217) : logseq.shui.ui.button.call(null,G__56216,G__56217));
})(),((cljs.core.seq(url))?(function (){var G__56218 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return reset_url_BANG_();
})], null);
var G__56219 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.sync-server","reset","settings.sync-server/reset",1723499764)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__56218,G__56219) : logseq.shui.ui.button.call(null,G__56218,G__56219));
})():null)], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$sync_server_url_settings_container__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56220 = cljs.core.first(args__31746__auto__);
var G__56221 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56220,G__56221) : io.factorhouse.hsx.core.obj_get.call(null,G__56220,G__56221));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"sync-server-url-settings-container","sync-server-url-settings-container",-1198442157,null),args__31746__auto__),frontend$components$settings$sync_server_url_settings_container,args__31746__auto__,null);
}
};
var frontend$components$settings$sync_server_url_settings_container = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56620__i = 0, G__56620__a = new Array(arguments.length -  0);
while (G__56620__i < G__56620__a.length) {G__56620__a[G__56620__i] = arguments[G__56620__i + 0]; ++G__56620__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56620__a,0,null);
} 
return frontend$components$settings$sync_server_url_settings_container__delegate.call(this,args__31746__auto__);};
frontend$components$settings$sync_server_url_settings_container.cljs$lang$maxFixedArity = 0;
frontend$components$settings$sync_server_url_settings_container.cljs$lang$applyTo = (function (arglist__56621){
var args__31746__auto__ = cljs.core.seq(arglist__56621);
return frontend$components$settings$sync_server_url_settings_container__delegate(args__31746__auto__);
});
frontend$components$settings$sync_server_url_settings_container.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$sync_server_url_settings_container__delegate;
return frontend$components$settings$sync_server_url_settings_container;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56222 = comp__31745__auto__;
var G__56223 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56222,G__56223) : io.factorhouse.hsx.core.react_memo.call(null,G__56222,G__56223));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"sync-server-url-settings-container");

return comp__31745__auto__;
})();
frontend.components.settings.sync_server_url_button = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$sync_server_url_button(){
var current_url = frontend.config.get_custom_sync_server_url();
return frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center","span.flex.items-center",-463750193),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pr-1","span.pr-1",-524129241),((cljs.core.seq(current_url))?current_url:"Logseq Sync")], null),frontend.ui.icon("edit")], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("go","sync-server-settings","go/sync-server-settings",-1870453283)], null));
})], 0));
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$sync_server_url_button__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56224 = cljs.core.first(args__31746__auto__);
var G__56225 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56224,G__56225) : io.factorhouse.hsx.core.obj_get.call(null,G__56224,G__56225));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"sync-server-url-button","sync-server-url-button",2078792752,null),args__31746__auto__),frontend$components$settings$sync_server_url_button,args__31746__auto__,null);
}
};
var frontend$components$settings$sync_server_url_button = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56622__i = 0, G__56622__a = new Array(arguments.length -  0);
while (G__56622__i < G__56622__a.length) {G__56622__a[G__56622__i] = arguments[G__56622__i + 0]; ++G__56622__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56622__a,0,null);
} 
return frontend$components$settings$sync_server_url_button__delegate.call(this,args__31746__auto__);};
frontend$components$settings$sync_server_url_button.cljs$lang$maxFixedArity = 0;
frontend$components$settings$sync_server_url_button.cljs$lang$applyTo = (function (arglist__56623){
var args__31746__auto__ = cljs.core.seq(arglist__56623);
return frontend$components$settings$sync_server_url_button__delegate(args__31746__auto__);
});
frontend$components$settings$sync_server_url_button.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$sync_server_url_button__delegate;
return frontend$components$settings$sync_server_url_button;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56226 = comp__31745__auto__;
var G__56227 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56226,G__56227) : io.factorhouse.hsx.core.react_memo.call(null,G__56226,G__56227));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"sync-server-url-button");

return comp__31745__auto__;
})();
frontend.components.settings.sync_server_url_row = (function frontend$components$settings$sync_server_url_row(){
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.sync-server","url","settings.sync-server/url",922957600)], 0)),new cljs.core.Keyword(null,"action","action",-811238024),frontend.components.settings.sync_server_url_button()], null));
});
frontend.components.settings.publish_server_url_settings_container = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$publish_server_url_settings_container(){
var current_url = frontend.config.get_custom_publish_server_url();
var vec__56229 = logseq.shui.hooks.use_state((function (){var or__5142__auto__ = current_url;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})());
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56229,(0),null);
var set_url_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56229,(1),null);
var reset_url_BANG_ = (function (){
frontend.config.set_custom_publish_server_url_BANG_(null);

(set_url_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_url_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_url_BANG_.call(null,""));

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","publish-server-url-cleared","settings-page/publish-server-url-cleared",1470896025)], 0)),new cljs.core.Keyword(null,"success","success",1890645906));
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__settings-publish-server-cnt","div.cp__settings-publish-server-cnt",1037796554),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.mb-2.text-2xl.font-bold","h1.mb-2.text-2xl.font-bold",-522821176),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","publish-server-url","settings-page/publish-server-url",-1802284754)], 0))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-2","div.p-2",-325121057),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm.opacity-70.mb-4","p.text-sm.opacity-70.mb-4",-1836026318),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","publish-server-url-desc","settings-page/publish-server-url-desc",-1107133325)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"URL"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-input.is-small","input.form-input.is-small",-550503875),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),url,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.config.default_publish_api_base,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__56228_SHARP_){
var G__56232 = frontend.util.evalue(p1__56228_SHARP_);
return (set_url_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_url_BANG_.cljs$core$IFn$_invoke$arity$1(G__56232) : set_url_BANG_.call(null,G__56232));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.pt-2.flex.gap-2","p.pt-2.flex.gap-2",589881349),(function (){var G__56233 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var trimmed = clojure.string.trim(url);
if(clojure.string.blank_QMARK_(trimmed)){
return reset_url_BANG_();
} else {
if(cljs.core.not(frontend.config.valid_publish_server_url_QMARK_(trimmed))){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.sync-server","url-invalid-error","settings.sync-server/url-invalid-error",628456144)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
} else {
frontend.config.set_custom_publish_server_url_BANG_(trimmed);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","publish-server-url-saved","settings-page/publish-server-url-saved",1028798217)], 0)),new cljs.core.Keyword(null,"success","success",1890645906));
}
}
})], null);
var G__56234 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","save","ui/save",1850075345)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__56233,G__56234) : logseq.shui.ui.button.call(null,G__56233,G__56234));
})(),((cljs.core.seq(url))?(function (){var G__56235 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return reset_url_BANG_();
})], null);
var G__56236 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","publish-server-url-reset","settings-page/publish-server-url-reset",-2051266419)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__56235,G__56236) : logseq.shui.ui.button.call(null,G__56235,G__56236));
})():null)], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$publish_server_url_settings_container__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56237 = cljs.core.first(args__31746__auto__);
var G__56238 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56237,G__56238) : io.factorhouse.hsx.core.obj_get.call(null,G__56237,G__56238));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"publish-server-url-settings-container","publish-server-url-settings-container",-576480572,null),args__31746__auto__),frontend$components$settings$publish_server_url_settings_container,args__31746__auto__,null);
}
};
var frontend$components$settings$publish_server_url_settings_container = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56624__i = 0, G__56624__a = new Array(arguments.length -  0);
while (G__56624__i < G__56624__a.length) {G__56624__a[G__56624__i] = arguments[G__56624__i + 0]; ++G__56624__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56624__a,0,null);
} 
return frontend$components$settings$publish_server_url_settings_container__delegate.call(this,args__31746__auto__);};
frontend$components$settings$publish_server_url_settings_container.cljs$lang$maxFixedArity = 0;
frontend$components$settings$publish_server_url_settings_container.cljs$lang$applyTo = (function (arglist__56625){
var args__31746__auto__ = cljs.core.seq(arglist__56625);
return frontend$components$settings$publish_server_url_settings_container__delegate(args__31746__auto__);
});
frontend$components$settings$publish_server_url_settings_container.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$publish_server_url_settings_container__delegate;
return frontend$components$settings$publish_server_url_settings_container;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56239 = comp__31745__auto__;
var G__56240 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56239,G__56240) : io.factorhouse.hsx.core.react_memo.call(null,G__56239,G__56240));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"publish-server-url-settings-container");

return comp__31745__auto__;
})();
frontend.components.settings.publish_server_url_button = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$publish_server_url_button(){
var current_url = frontend.config.get_custom_publish_server_url();
return frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center","span.flex.items-center",-463750193),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pr-1","span.pr-1",-524129241),((cljs.core.seq(current_url))?current_url:frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","publish-server-url-default","settings-page/publish-server-url-default",2127957222)], 0)))], null),frontend.ui.icon("edit")], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("go","publish-server-settings","go/publish-server-settings",1151535113)], null));
})], 0));
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$publish_server_url_button__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56241 = cljs.core.first(args__31746__auto__);
var G__56242 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56241,G__56242) : io.factorhouse.hsx.core.obj_get.call(null,G__56241,G__56242));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"publish-server-url-button","publish-server-url-button",1710187472,null),args__31746__auto__),frontend$components$settings$publish_server_url_button,args__31746__auto__,null);
}
};
var frontend$components$settings$publish_server_url_button = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56626__i = 0, G__56626__a = new Array(arguments.length -  0);
while (G__56626__i < G__56626__a.length) {G__56626__a[G__56626__i] = arguments[G__56626__i + 0]; ++G__56626__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56626__a,0,null);
} 
return frontend$components$settings$publish_server_url_button__delegate.call(this,args__31746__auto__);};
frontend$components$settings$publish_server_url_button.cljs$lang$maxFixedArity = 0;
frontend$components$settings$publish_server_url_button.cljs$lang$applyTo = (function (arglist__56627){
var args__31746__auto__ = cljs.core.seq(arglist__56627);
return frontend$components$settings$publish_server_url_button__delegate(args__31746__auto__);
});
frontend$components$settings$publish_server_url_button.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$publish_server_url_button__delegate;
return frontend$components$settings$publish_server_url_button;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56243 = comp__31745__auto__;
var G__56244 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56243,G__56244) : io.factorhouse.hsx.core.react_memo.call(null,G__56243,G__56244));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"publish-server-url-button");

return comp__31745__auto__;
})();
frontend.components.settings.publish_server_url_row = (function frontend$components$settings$publish_server_url_row(){
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","publish-server-url","settings-page/publish-server-url",-1802284754)], 0)),new cljs.core.Keyword(null,"action","action",-811238024),frontend.components.settings.publish_server_url_button()], null));
});
frontend.components.settings.user_proxy_settings = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$user_proxy_settings(p__56245){
var map__56246 = p__56245;
var map__56246__$1 = cljs.core.__destructure_map(map__56246);
var agent_opts = map__56246__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56246__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56246__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56246__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56246__$1,new cljs.core.Keyword(null,"port","port",1534937262));
return frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center","span.flex.items-center",-463750193),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pr-1","span.pr-1",-524129241),(function (){var G__56247 = type;
switch (G__56247) {
case "system":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin.proxy","system","plugin.proxy/system",-457476271)], 0));

break;
case "direct":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin.proxy","direct","plugin.proxy/direct",-1434173917)], 0));

break;
default:
var and__5140__auto__ = protocol;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = host;
if(cljs.core.truth_(and__5140__auto____$1)){
var and__5140__auto____$2 = port;
if(cljs.core.truth_(and__5140__auto____$2)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol)+"://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(host)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(port));
} else {
return and__5140__auto____$2;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}

}
})()], null),frontend.ui.icon("edit")], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("go","proxy-settings","go/proxy-settings",1019838469),agent_opts], null));
})], 0));
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$user_proxy_settings__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56248 = cljs.core.first(args__31746__auto__);
var G__56249 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56248,G__56249) : io.factorhouse.hsx.core.obj_get.call(null,G__56248,G__56249));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"user-proxy-settings","user-proxy-settings",1905428674,null),args__31746__auto__),frontend$components$settings$user_proxy_settings,args__31746__auto__,null);
}
};
var frontend$components$settings$user_proxy_settings = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56629__i = 0, G__56629__a = new Array(arguments.length -  0);
while (G__56629__i < G__56629__a.length) {G__56629__a[G__56629__i] = arguments[G__56629__i + 0]; ++G__56629__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56629__a,0,null);
} 
return frontend$components$settings$user_proxy_settings__delegate.call(this,args__31746__auto__);};
frontend$components$settings$user_proxy_settings.cljs$lang$maxFixedArity = 0;
frontend$components$settings$user_proxy_settings.cljs$lang$applyTo = (function (arglist__56630){
var args__31746__auto__ = cljs.core.seq(arglist__56630);
return frontend$components$settings$user_proxy_settings__delegate(args__31746__auto__);
});
frontend$components$settings$user_proxy_settings.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$user_proxy_settings__delegate;
return frontend$components$settings$user_proxy_settings;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56250 = comp__31745__auto__;
var G__56251 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56250,G__56251) : io.factorhouse.hsx.core.react_memo.call(null,G__56250,G__56251));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"user-proxy-settings");

return comp__31745__auto__;
})();
frontend.components.settings.plugin_system_switcher_row = (function frontend$components$settings$plugin_system_switcher_row(){
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.features","plugin-system","settings.features/plugin-system",1569237457)], 0)),new cljs.core.Keyword(null,"action","action",-811238024),frontend.components.settings.plugin_enabled_switcher(frontend.context.i18n.t)], null));
});
frontend.components.settings.http_server_switcher_row = (function frontend$components$settings$http_server_switcher_row(){
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server","title","server/title",1743675818)], 0)),new cljs.core.Keyword(null,"action","action",-811238024),frontend.components.settings.http_server_enabled_switcher(frontend.context.i18n.t)], null));
});
frontend.components.settings.web_graph_folder_row = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$web_graph_folder_row(){
var repo = frontend.state.get_current_repo();
var vec__56252 = logseq.shui.hooks.use_state(null);
var folder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56252,(0),null);
var set_folder_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56252,(1),null);
var vec__56255 = logseq.shui.hooks.use_state(null);
var server_cfg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56255,(0),null);
var set_server_cfg_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56255,(1),null);
var vec__56258 = logseq.shui.hooks.use_state(null);
var save_status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56258,(0),null);
var set_save_status_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56258,(1),null);
var supported_QMARK_ = frontend.handler.export$.web_graph_folder_supported_QMARK_();
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(repo)){
if(supported_QMARK_){
promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$._LT_get_web_graph_folder_name(repo),set_folder_BANG_);
} else {
}

return promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$._LT_get_server_storage_config(),(function (cfg){
if(cljs.core.truth_(cfg)){
return (set_server_cfg_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_server_cfg_BANG_.cljs$core$IFn$_invoke$arity$1(cfg) : set_server_cfg_BANG_.call(null,cfg));
} else {
return null;
}
}));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,supported_QMARK_], null));

if(cljs.core.truth_((function (){var or__5142__auto__ = supported_QMARK_;
if(or__5142__auto__){
return or__5142__auto__;
} else {
return server_cfg;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-center","div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-center",-761433112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-sm.font-medium.leading-5","label.block.text-sm.font-medium.leading-5",-288187104),"\u672C\u5730\u5B58\u50A8\u6587\u4EF6\u5939"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-xs.opacity-50.mt-1","p.text-xs.opacity-50.mt-1",552519949),"\u6570\u636E\u81EA\u52A8\u76F4\u5B58\u81F3\u7269\u7406\u78C1\u76D8\u6587\u4EF6\u5939\uFF0C\u4E0D\u5728\u6D4F\u89C8\u5668\u7F13\u5B58\u9694\u79BB"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1.sm:mt-0.sm:col-span-2.flex.flex-col.gap-2","div.mt-1.sm:mt-0.sm:col-span-2.flex.flex-col.gap-2",1238081106),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-2.flex-wrap","div.flex.items-center.gap-2.flex-wrap",928052943),((supported_QMARK_)?(function (){var G__56261 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(repo == null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
try{return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.choose_web_graph_folder_BANG_(repo),(function (name){
(set_folder_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_folder_BANG_.cljs$core$IFn$_invoke$arity$1(name) : set_folder_BANG_.call(null,name));

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2((""+"\u5DF2\u9009\u5B9A\u672C\u5730\u6587\u4EF6\u5939: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.Keyword(null,"success","success",1890645906));
})),(function (error){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("AbortError",error.name)){
return null;
} else {
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.settings",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("web-graph-folder","select-failed","web-graph-folder/select-failed",239015388),error,new cljs.core.Keyword(null,"line","line",212345235),841], null)),null);
} else {
}

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2((""+"\u9009\u62E9\u6587\u4EF6\u5939\u5931\u8D25: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)),new cljs.core.Keyword(null,"error","error",-978969032));
}
}));
}catch (e56263){var error = e56263;
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.settings",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("web-graph-folder","select-failed","web-graph-folder/select-failed",239015388),error,new cljs.core.Keyword(null,"line","line",212345235),844], null)),null);
} else {
}

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2((""+"\u9009\u62E9\u6587\u4EF6\u5939\u5931\u8D25: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)),new cljs.core.Keyword(null,"error","error",-978969032));
}})], null);
var G__56262 = "\u9009\u62E9\u672C\u5730\u7269\u7406\u6587\u4EF6\u5939";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__56261,G__56262) : logseq.shui.ui.button.call(null,G__56261,G__56262));
})():null),(function (){var G__56264 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(repo == null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(set_save_status_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_save_status_BANG_.cljs$core$IFn$_invoke$arity$1("\u6B63\u5728\u4FDD\u5B58...") : set_save_status_BANG_.call(null,"\u6B63\u5728\u4FDD\u5B58..."));

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.backup_db_graph.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interactive?","interactive?",367617676),true], null)),(function (res){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.Keyword(null,"graph-not-changed","graph-not-changed",1463753852))){
(set_save_status_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_save_status_BANG_.cljs$core$IFn$_invoke$arity$1("\u5DF2\u662F\u6700\u65B0\uFF08\u65E0\u53D8\u66F4\uFF09") : set_save_status_BANG_.call(null,"\u5DF2\u662F\u6700\u65B0\uFF08\u65E0\u53D8\u66F4\uFF09"));

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("\u6570\u636E\u4E0E\u672C\u5730\u78C1\u76D8\u4E00\u81F4\uFF0C\u65E0\u65B0\u53D8\u66F4",new cljs.core.Keyword(null,"success","success",1890645906));
} else {
var now = (new Date()).toLocaleTimeString();
var G__56266_56631 = (""+"\u5DF2\u4FDD\u5B58 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(now));
(set_save_status_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_save_status_BANG_.cljs$core$IFn$_invoke$arity$1(G__56266_56631) : set_save_status_BANG_.call(null,G__56266_56631));

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("\u5DF2\u6210\u529F\u4FDD\u5B58\u5230\u672C\u5730\u6587\u4EF6\u5939\uFF01",new cljs.core.Keyword(null,"success","success",1890645906));
}
})),(function (err){
(set_save_status_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_save_status_BANG_.cljs$core$IFn$_invoke$arity$1("\u4FDD\u5B58\u5931\u8D25") : set_save_status_BANG_.call(null,"\u4FDD\u5B58\u5931\u8D25"));

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2((""+"\u4FDD\u5B58\u5931\u8D25: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(err)),new cljs.core.Keyword(null,"error","error",-978969032));
}));
})], null);
var G__56265 = "\u7ACB\u5373\u4FDD\u5B58\u5230\u672C\u5730\u78C1\u76D8";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__56264,G__56265) : logseq.shui.ui.button.call(null,G__56264,G__56265));
})(),(cljs.core.truth_(save_status)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.text-green-500.font-medium","span.text-xs.text-green-500.font-medium",1052774545),save_status], null):null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.opacity-70.flex.flex-col.gap-1","div.text-xs.opacity-70.flex.flex-col.gap-1",926262333),(function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"target_dir","target_dir",2002138352).cljs$core$IFn$_invoke$arity$1(server_cfg);
if(cljs.core.truth_(temp__5825__auto__)){
var target_dir = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"\u78C1\u76D8\u7269\u7406\u8DEF\u5F84: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.bg-gray-100.dark:bg-gray-800.px-1.rounded","code.bg-gray-100.dark:bg-gray-800.px-1.rounded",-1918433872),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(target_dir)+"\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = repo;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "default";
}
})()))], null)], null);
} else {
return null;
}
})(),(cljs.core.truth_(folder)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"\u6D4F\u89C8\u5668\u6388\u6743\u6587\u4EF6\u5939: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),folder], null)], null):null),(cljs.core.truth_(server_cfg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-green-600.dark:text-green-400","div.text-green-600.dark:text-green-400",835296173),"\u25CF \u672C\u5730\u5B58\u50A8\u670D\u52A1\u5728\u7EBF\uFF0C\u5B9E\u65F6\u7F16\u8F91\u5C06\u81EA\u52A8\u79D2\u7EA7\u5199\u5165\u7269\u7406\u78C1\u76D8 db.sqlite \u4E0E\u5907\u4EFD"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-amber-600.dark:text-amber-400","div.text-amber-600.dark:text-amber-400",279894965),"\u25CB \u63D0\u793A\uFF1A\u8BF7\u786E\u4FDD\u542F\u52A8\u672C\u5730\u670D\u52A1\uFF08start-web.ps1\uFF09\u6216\u5B8C\u6210\u6587\u4EF6\u5939\u6388\u6743\u4EE5\u6301\u4E45\u5316"], null))], null)], null)], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$web_graph_folder_row__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56267 = cljs.core.first(args__31746__auto__);
var G__56268 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56267,G__56268) : io.factorhouse.hsx.core.obj_get.call(null,G__56267,G__56268));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"web-graph-folder-row","web-graph-folder-row",-1686222756,null),args__31746__auto__),frontend$components$settings$web_graph_folder_row,args__31746__auto__,null);
}
};
var frontend$components$settings$web_graph_folder_row = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56632__i = 0, G__56632__a = new Array(arguments.length -  0);
while (G__56632__i < G__56632__a.length) {G__56632__a[G__56632__i] = arguments[G__56632__i + 0]; ++G__56632__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56632__a,0,null);
} 
return frontend$components$settings$web_graph_folder_row__delegate.call(this,args__31746__auto__);};
frontend$components$settings$web_graph_folder_row.cljs$lang$maxFixedArity = 0;
frontend$components$settings$web_graph_folder_row.cljs$lang$applyTo = (function (arglist__56633){
var args__31746__auto__ = cljs.core.seq(arglist__56633);
return frontend$components$settings$web_graph_folder_row__delegate(args__31746__auto__);
});
frontend$components$settings$web_graph_folder_row.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$web_graph_folder_row__delegate;
return frontend$components$settings$web_graph_folder_row;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56269 = comp__31745__auto__;
var G__56270 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56269,G__56270) : io.factorhouse.hsx.core.react_memo.call(null,G__56269,G__56270));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"web-graph-folder-row");

return comp__31745__auto__;
})();
frontend.components.settings.flashcards_switcher_row = (function frontend$components$settings$flashcards_switcher_row(enable_flashcards_QMARK_){
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.features","enable-flashcards","settings.features/enable-flashcards",299263108)], 0)),new cljs.core.Keyword(null,"action","action",-811238024),frontend.components.settings.flashcards_enabled_switcher(enable_flashcards_QMARK_)], null));
});
frontend.components.settings.markdown_mirror_row = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$markdown_mirror_row(t){
var repo = frontend.state.get_current_repo();
var repo_config = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),repo], null));
var repo_config__$1 = (cljs.core.truth_(repo)?repo_config:null);
var enabled_QMARK_ = new cljs.core.Keyword("feature","markdown-mirror?","feature/markdown-mirror?",1870052778).cljs$core$IFn$_invoke$arity$1(repo_config__$1) === true;
var _STAR_regenerating_QMARK_ = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}),cljs.core.PersistentVector.EMPTY);
var vec__56271 = logseq.shui.hooks.use_atom(_STAR_regenerating_QMARK_);
var regenerating_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56271,(0),null);
var regenerate_BANG_ = (function (){
if(cljs.core.truth_((function (){var and__5140__auto__ = repo;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = cljs.core.deref(frontend.state._STAR_db_worker);
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.not(cljs.core.deref(_STAR_regenerating_QMARK_));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
cljs.core.reset_BANG_(_STAR_regenerating_QMARK_,true);

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","markdown-mirror-regenerate","thread-api/markdown-mirror-regenerate",1796780663),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo], 0)),(function (_){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.features","markdown-mirror-regenerate-success","settings.features/markdown-mirror-regenerate-success",-326023747)) : t.call(null,new cljs.core.Keyword("settings.features","markdown-mirror-regenerate-success","settings.features/markdown-mirror-regenerate-success",-326023747))),new cljs.core.Keyword(null,"success","success",1890645906));
})),(function (error){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.settings",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("markdown-mirror","regenerate-failed","markdown-mirror/regenerate-failed",1012171206),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"error","error",-978969032),error], null),new cljs.core.Keyword(null,"line","line",212345235),897], null)),null);
} else {
}

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var G__56274 = new cljs.core.Keyword("settings.features","markdown-mirror-regenerate-error","settings.features/markdown-mirror-regenerate-error",1123530031);
var G__56275 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(error));
return (t.cljs$core$IFn$_invoke$arity$2 ? t.cljs$core$IFn$_invoke$arity$2(G__56274,G__56275) : t.call(null,G__56274,G__56275));
})(),new cljs.core.Keyword(null,"error","error",-978969032));
})),(function (){
return cljs.core.reset_BANG_(_STAR_regenerating_QMARK_,false);
}));
} else {
return null;
}
});
return frontend.components.settings.toggle.cljs$core$IFn$_invoke$arity$variadic("markdown-mirror",(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.features","markdown-mirror","settings.features/markdown-mirror",-20960230)) : t.call(null,new cljs.core.Keyword("settings.features","markdown-mirror","settings.features/markdown-mirror",-20960230))),enabled_QMARK_,(function (){
var next_enabled_QMARK_ = (!(enabled_QMARK_));
var repo__$1 = frontend.state.get_current_repo();
frontend.handler.config.set_config_BANG_(new cljs.core.Keyword("feature","markdown-mirror?","feature/markdown-mirror?",1870052778),next_enabled_QMARK_);

if(cljs.core.truth_((function (){var and__5140__auto__ = repo__$1;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.deref(frontend.state._STAR_db_worker);
} else {
return and__5140__auto__;
}
})())){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","markdown-mirror-set-enabled","thread-api/markdown-mirror-set-enabled",-181757882),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo__$1,next_enabled_QMARK_], 0)),(function (error){
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.settings",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("markdown-mirror","settings-sync-failed","markdown-mirror/settings-sync-failed",1872667618),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repo","repo",-1999060679),repo__$1,new cljs.core.Keyword(null,"error","error",-978969032),error], null),new cljs.core.Keyword(null,"line","line",212345235),914], null)),null);
} else {
return null;
}
}));
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-2.flex-wrap","div.flex.items-center.gap-2.flex-wrap",928052943),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.opacity-50","span.text-sm.opacity-50",1991571125),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.features","markdown-mirror-desc","settings.features/markdown-mirror-desc",-1390256067)) : t.call(null,new cljs.core.Keyword("settings.features","markdown-mirror-desc","settings.features/markdown-mirror-desc",-1390256067)))], null),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.features","markdown-mirror-regenerate","settings.features/markdown-mirror-regenerate",-1898820440)) : t.call(null,new cljs.core.Keyword("settings.features","markdown-mirror-regenerate","settings.features/markdown-mirror-regenerate",-1898820440))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"icon","icon",1679606541),"refresh",new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),regenerating_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),regenerate_BANG_], 0))], null)], 0));
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$markdown_mirror_row__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56276 = cljs.core.first(args__31746__auto__);
var G__56277 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56276,G__56277) : io.factorhouse.hsx.core.obj_get.call(null,G__56276,G__56277));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"markdown-mirror-row","markdown-mirror-row",-1315243600,null),args__31746__auto__),frontend$components$settings$markdown_mirror_row,args__31746__auto__,null);
}
};
var frontend$components$settings$markdown_mirror_row = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56634__i = 0, G__56634__a = new Array(arguments.length -  0);
while (G__56634__i < G__56634__a.length) {G__56634__a[G__56634__i] = arguments[G__56634__i + 0]; ++G__56634__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56634__a,0,null);
} 
return frontend$components$settings$markdown_mirror_row__delegate.call(this,args__31746__auto__);};
frontend$components$settings$markdown_mirror_row.cljs$lang$maxFixedArity = 0;
frontend$components$settings$markdown_mirror_row.cljs$lang$applyTo = (function (arglist__56635){
var args__31746__auto__ = cljs.core.seq(arglist__56635);
return frontend$components$settings$markdown_mirror_row__delegate(args__31746__auto__);
});
frontend$components$settings$markdown_mirror_row.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$markdown_mirror_row__delegate;
return frontend$components$settings$markdown_mirror_row;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56278 = comp__31745__auto__;
var G__56279 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56278,G__56279) : io.factorhouse.hsx.core.react_memo.call(null,G__56278,G__56279));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"markdown-mirror-row");

return comp__31745__auto__;
})();
frontend.components.settings.https_user_agent_row = (function frontend$components$settings$https_user_agent_row(agent_opts){
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.advanced","network-proxy","settings.advanced/network-proxy",1017963756)], 0)),new cljs.core.Keyword(null,"action","action",-811238024),frontend.components.settings.user_proxy_settings(agent_opts)], null));
});
frontend.components.settings.auto_chmod_row = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$auto_chmod_row(t){
var enabled_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("feature","enable-automatic-chmod?","feature/enable-automatic-chmod?",2038808000)], null))))?true:frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("feature","enable-automatic-chmod?","feature/enable-automatic-chmod?",2038808000)], null)));
return frontend.components.settings.toggle.cljs$core$IFn$_invoke$arity$variadic("automatic-chmod",(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.advanced","auto-chmod","settings.advanced/auto-chmod",573707734)) : t.call(null,new cljs.core.Keyword("settings.advanced","auto-chmod","settings.advanced/auto-chmod",573707734))),enabled_QMARK_,(function (){
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("feature","enable-automatic-chmod?","feature/enable-automatic-chmod?",2038808000)], null),cljs.core.not(enabled_QMARK_));

return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"userAppCfgs","userAppCfgs",-1274935350),new cljs.core.Keyword("feature","enable-automatic-chmod?","feature/enable-automatic-chmod?",2038808000),cljs.core.not(enabled_QMARK_)], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.opacity-50","span.text-sm.opacity-50",1991571125),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.advanced","auto-chmod-desc","settings.advanced/auto-chmod-desc",1213836229)) : t.call(null,new cljs.core.Keyword("settings.advanced","auto-chmod-desc","settings.advanced/auto-chmod-desc",1213836229)))], null)], 0));
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$auto_chmod_row__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56280 = cljs.core.first(args__31746__auto__);
var G__56281 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56280,G__56281) : io.factorhouse.hsx.core.obj_get.call(null,G__56280,G__56281));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"auto-chmod-row","auto-chmod-row",-1242843981,null),args__31746__auto__),frontend$components$settings$auto_chmod_row,args__31746__auto__,null);
}
};
var frontend$components$settings$auto_chmod_row = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56638__i = 0, G__56638__a = new Array(arguments.length -  0);
while (G__56638__i < G__56638__a.length) {G__56638__a[G__56638__i] = arguments[G__56638__i + 0]; ++G__56638__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56638__a,0,null);
} 
return frontend$components$settings$auto_chmod_row__delegate.call(this,args__31746__auto__);};
frontend$components$settings$auto_chmod_row.cljs$lang$maxFixedArity = 0;
frontend$components$settings$auto_chmod_row.cljs$lang$applyTo = (function (arglist__56639){
var args__31746__auto__ = cljs.core.seq(arglist__56639);
return frontend$components$settings$auto_chmod_row__delegate(args__31746__auto__);
});
frontend$components$settings$auto_chmod_row.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$auto_chmod_row__delegate;
return frontend$components$settings$auto_chmod_row;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56282 = comp__31745__auto__;
var G__56283 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56282,G__56283) : io.factorhouse.hsx.core.react_memo.call(null,G__56282,G__56283));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"auto-chmod-row");

return comp__31745__auto__;
})();
frontend.components.settings.native_titlebar_row = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$native_titlebar_row(t){
var enabled_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("window","native-titlebar?","window/native-titlebar?",195665142)], null));
return frontend.components.settings.toggle.cljs$core$IFn$_invoke$arity$variadic("native-titlebar",(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.general","native-titlebar","settings.general/native-titlebar",1700714826)) : t.call(null,new cljs.core.Keyword("settings.general","native-titlebar","settings.general/native-titlebar",1700714826))),enabled_QMARK_,(function (){
if(cljs.core.truth_(confirm((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ui","relaunch-confirm","ui/relaunch-confirm",75481008)) : t.call(null,new cljs.core.Keyword("ui","relaunch-confirm","ui/relaunch-confirm",75481008)))))){
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("window","native-titlebar?","window/native-titlebar?",195665142)], null),cljs.core.not(enabled_QMARK_));

electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"userAppCfgs","userAppCfgs",-1274935350),new cljs.core.Keyword("window","native-titlebar?","window/native-titlebar?",195665142),cljs.core.not(enabled_QMARK_)], 0));

return logseq.api.relaunch();
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.opacity-50","span.text-sm.opacity-50",1991571125),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.general","native-titlebar-desc","settings.general/native-titlebar-desc",-287624618)) : t.call(null,new cljs.core.Keyword("settings.general","native-titlebar-desc","settings.general/native-titlebar-desc",-287624618)))], null)], 0));
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$native_titlebar_row__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56284 = cljs.core.first(args__31746__auto__);
var G__56285 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56284,G__56285) : io.factorhouse.hsx.core.obj_get.call(null,G__56284,G__56285));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"native-titlebar-row","native-titlebar-row",1423829216,null),args__31746__auto__),frontend$components$settings$native_titlebar_row,args__31746__auto__,null);
}
};
var frontend$components$settings$native_titlebar_row = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56640__i = 0, G__56640__a = new Array(arguments.length -  0);
while (G__56640__i < G__56640__a.length) {G__56640__a[G__56640__i] = arguments[G__56640__i + 0]; ++G__56640__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56640__a,0,null);
} 
return frontend$components$settings$native_titlebar_row__delegate.call(this,args__31746__auto__);};
frontend$components$settings$native_titlebar_row.cljs$lang$maxFixedArity = 0;
frontend$components$settings$native_titlebar_row.cljs$lang$applyTo = (function (arglist__56641){
var args__31746__auto__ = cljs.core.seq(arglist__56641);
return frontend$components$settings$native_titlebar_row__delegate(args__31746__auto__);
});
frontend$components$settings$native_titlebar_row.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$native_titlebar_row__delegate;
return frontend$components$settings$native_titlebar_row;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56286 = comp__31745__auto__;
var G__56287 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56286,G__56287) : io.factorhouse.hsx.core.react_memo.call(null,G__56286,G__56287));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"native-titlebar-row");

return comp__31745__auto__;
})();
frontend.components.settings.settings_general = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$settings_general(current_repo){
var preferred_language = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017)], null));
var show_radix_themes_QMARK_ = true;
var editor_font = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","editor-font","ui/editor-font",582019775)], null));
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-wrap.is-general","div.panel-wrap.is-general",1955873220),frontend.components.settings.version_row(frontend.context.i18n.t,frontend.version.version),frontend.components.settings.language_row(frontend.context.i18n.t,preferred_language),frontend.components.settings.theme_modes_row(frontend.context.i18n.t),frontend.components.settings.editor_font_family_row(frontend.context.i18n.t,editor_font),(cljs.core.truth_((function (){var and__5140__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(frontend.util.mac_QMARK_);
} else {
return and__5140__auto__;
}
})())?frontend.components.settings.native_titlebar_row(frontend.context.i18n.t):null),((show_radix_themes_QMARK_)?frontend.components.settings.accent_color_row(false):null),(cljs.core.truth_(frontend.config.global_config_enabled_QMARK_())?frontend.components.settings.edit_global_config_edn():null),(cljs.core.truth_(current_repo)?frontend.components.settings.edit_config_edn():null),(cljs.core.truth_(current_repo)?frontend.components.settings.edit_custom_css():null),(cljs.core.truth_((function (){var and__5140__auto__ = current_repo;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.util.electron_QMARK_();
} else {
return and__5140__auto__;
}
})())?frontend.components.settings.edit_export_css():null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$settings_general__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56288 = cljs.core.first(args__31746__auto__);
var G__56289 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56288,G__56289) : io.factorhouse.hsx.core.obj_get.call(null,G__56288,G__56289));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"settings-general","settings-general",-584059426,null),args__31746__auto__),frontend$components$settings$settings_general,args__31746__auto__,null);
}
};
var frontend$components$settings$settings_general = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56645__i = 0, G__56645__a = new Array(arguments.length -  0);
while (G__56645__i < G__56645__a.length) {G__56645__a[G__56645__i] = arguments[G__56645__i + 0]; ++G__56645__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56645__a,0,null);
} 
return frontend$components$settings$settings_general__delegate.call(this,args__31746__auto__);};
frontend$components$settings$settings_general.cljs$lang$maxFixedArity = 0;
frontend$components$settings$settings_general.cljs$lang$applyTo = (function (arglist__56646){
var args__31746__auto__ = cljs.core.seq(arglist__56646);
return frontend$components$settings$settings_general__delegate(args__31746__auto__);
});
frontend$components$settings$settings_general.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$settings_general__delegate;
return frontend$components$settings$settings_general;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56290 = comp__31745__auto__;
var G__56291 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56290,G__56291) : io.factorhouse.hsx.core.react_memo.call(null,G__56290,G__56291));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"settings-general");

return comp__31745__auto__;
})();
frontend.components.settings.settings_editor = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$settings_editor(){
var _config = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415)], null));
var preferred_date_format = frontend.state.get_date_formatter();
var enable_all_pages_public_QMARK_ = frontend.state.all_pages_public_QMARK_();
var logical_outdenting_QMARK_ = frontend.state.logical_outdenting_QMARK_();
var show_full_blocks_QMARK_ = frontend.state.show_full_blocks_QMARK_();
var preferred_pasting_file_QMARK_ = frontend.state.preferred_pasting_file_QMARK_();
var auto_expand_block_refs_QMARK_ = frontend.state.auto_expand_block_refs_QMARK_();
var enable_tooltip_QMARK_ = frontend.state.enable_tooltip_QMARK_();
var enable_shortcut_tooltip_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","shortcut-tooltip?","ui/shortcut-tooltip?",1921963086)], null));
var show_brackets_QMARK_ = frontend.state.show_brackets_QMARK_();
var wide_mode_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","wide-mode?","ui/wide-mode?",-1881882061)], null));
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-wrap.is-editor","div.panel-wrap.is-editor",-359433221),frontend.components.settings.date_format_row(frontend.context.i18n.t,preferred_date_format),frontend.components.settings.show_brackets_row(frontend.context.i18n.t,show_brackets_QMARK_),frontend.components.settings.toggle_wide_mode_row(frontend.context.i18n.t,wide_mode_QMARK_),(cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.components.settings.switch_spell_check_row(frontend.context.i18n.t):null),frontend.components.settings.outdenting_row(frontend.context.i18n.t,logical_outdenting_QMARK_),frontend.components.settings.showing_full_blocks(frontend.context.i18n.t,show_full_blocks_QMARK_),frontend.components.settings.preferred_pasting_file(frontend.context.i18n.t,preferred_pasting_file_QMARK_),frontend.components.settings.auto_expand_row(frontend.context.i18n.t,auto_expand_block_refs_QMARK_),(cljs.core.truth_((function (){var or__5142__auto__ = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
})())?null:frontend.components.settings.shortcut_tooltip_row(frontend.context.i18n.t,enable_shortcut_tooltip_QMARK_)),(cljs.core.truth_((function (){var or__5142__auto__ = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
})())?null:frontend.components.settings.tooltip_row(frontend.context.i18n.t,enable_tooltip_QMARK_)),frontend.components.settings.enable_all_pages_public_row(frontend.context.i18n.t,enable_all_pages_public_QMARK_)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$settings_editor__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56292 = cljs.core.first(args__31746__auto__);
var G__56293 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56292,G__56293) : io.factorhouse.hsx.core.obj_get.call(null,G__56292,G__56293));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"settings-editor","settings-editor",-1784485493,null),args__31746__auto__),frontend$components$settings$settings_editor,args__31746__auto__,null);
}
};
var frontend$components$settings$settings_editor = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56650__i = 0, G__56650__a = new Array(arguments.length -  0);
while (G__56650__i < G__56650__a.length) {G__56650__a[G__56650__i] = arguments[G__56650__i + 0]; ++G__56650__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56650__a,0,null);
} 
return frontend$components$settings$settings_editor__delegate.call(this,args__31746__auto__);};
frontend$components$settings$settings_editor.cljs$lang$maxFixedArity = 0;
frontend$components$settings$settings_editor.cljs$lang$applyTo = (function (arglist__56651){
var args__31746__auto__ = cljs.core.seq(arglist__56651);
return frontend$components$settings$settings_editor__delegate(args__31746__auto__);
});
frontend$components$settings$settings_editor.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$settings_editor__delegate;
return frontend$components$settings$settings_editor;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56294 = comp__31745__auto__;
var G__56295 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56294,G__56295) : io.factorhouse.hsx.core.react_memo.call(null,G__56294,G__56295));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"settings-editor");

return comp__31745__auto__;
})();
frontend.components.settings.settings_advanced = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$settings_advanced(){
var instrument_disabled_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("instrument","disabled?","instrument/disabled?",165654178)], null));
var developer_mode_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","developer-mode?","ui/developer-mode?",-664501878)], null));
var https_agent_opts = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("settings","agent","settings/agent",2144439922)], null));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-wrap.is-advanced","div.panel-wrap.is-advanced",1436326799),(cljs.core.truth_((function (){var and__5140__auto__ = (function (){var or__5142__auto__ = frontend.util.mac_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.util.win32_QMARK_;
}
})();
if(cljs.core.truth_(and__5140__auto__)){
return frontend.util.electron_QMARK_();
} else {
return and__5140__auto__;
}
})())?frontend.components.settings.app_auto_update_row(frontend.context.i18n.t):null),frontend.components.settings.usage_diagnostics_row(frontend.context.i18n.t,instrument_disabled_QMARK_),(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())?null:frontend.components.settings.developer_mode_row(frontend.context.i18n.t,developer_mode_QMARK_)),frontend.components.settings.sync_server_url_row(),frontend.components.settings.publish_server_url_row(),(cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.components.settings.https_user_agent_row(https_agent_opts):null),(cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.components.settings.auto_chmod_row(frontend.context.i18n.t):null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$settings_advanced__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56296 = cljs.core.first(args__31746__auto__);
var G__56297 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56296,G__56297) : io.factorhouse.hsx.core.obj_get.call(null,G__56296,G__56297));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"settings-advanced","settings-advanced",-821035396,null),args__31746__auto__),frontend$components$settings$settings_advanced,args__31746__auto__,null);
}
};
var frontend$components$settings$settings_advanced = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56652__i = 0, G__56652__a = new Array(arguments.length -  0);
while (G__56652__i < G__56652__a.length) {G__56652__a[G__56652__i] = arguments[G__56652__i + 0]; ++G__56652__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56652__a,0,null);
} 
return frontend$components$settings$settings_advanced__delegate.call(this,args__31746__auto__);};
frontend$components$settings$settings_advanced.cljs$lang$maxFixedArity = 0;
frontend$components$settings$settings_advanced.cljs$lang$applyTo = (function (arglist__56653){
var args__31746__auto__ = cljs.core.seq(arglist__56653);
return frontend$components$settings$settings_advanced__delegate(args__31746__auto__);
});
frontend$components$settings$settings_advanced.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$settings_advanced__delegate;
return frontend$components$settings$settings_advanced;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56298 = comp__31745__auto__;
var G__56299 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56298,G__56299) : io.factorhouse.hsx.core.react_memo.call(null,G__56298,G__56299));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"settings-advanced");

return comp__31745__auto__;
})();
frontend.components.settings.settings_account_usage_description = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$settings_account_usage_description(pro_account_QMARK_,graph_usage){
var count_usage = cljs.core.count(graph_usage);
var count_limit = (cljs.core.truth_(pro_account_QMARK_)?(10):(1));
var count_percent = Math.round(((count_usage / count_limit) / 0.01));
var storage_usage = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"used-gbs","used-gbs",271660092),graph_usage));
var storage_usage_formatted = (((storage_usage === (0)))?"0.0":(((storage_usage < 0.01))?"< 0.01":goog.string.format("%.2f",storage_usage)
));
var default_storage_limit = (cljs.core.truth_(pro_account_QMARK_)?(10):0.05);
var storage_limit = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56300_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(graph_usage,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56300_SHARP_,new cljs.core.Keyword(null,"limit-gbs","limit-gbs",-997314467)], null),default_storage_limit);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),count_limit)));
var storage_percent = ((storage_usage / storage_limit) / 0.01);
var storage_percent_formatted = goog.string.format("%.1f",storage_percent);
var count_percent_node = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.text-white","strong.text-white",1320859471),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(count_percent)+"%")], null);
var storage_percent_node = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.text-white","strong.text-white",1320859471),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(storage_percent_formatted)+"%")], null);
var synced_graphs_summary = frontend.context.i18n.interpolate_rich_text_node.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.account","synced-graphs","settings.account/synced-graphs",1219490619)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [count_usage,count_limit,count_percent_node], null));
var storage_usage_summary = frontend.context.i18n.interpolate_rich_text_node.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.account","storage-usage","settings.account/storage-usage",-2038087344)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [storage_usage_formatted,storage_limit,storage_percent_node], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm","div.text-sm",1753784969),(cljs.core.truth_(pro_account_QMARK_)?frontend.context.i18n.locale_join_rich_text_node(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [synced_graphs_summary,storage_usage_summary], null)):storage_usage_summary)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$settings_account_usage_description__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56301 = cljs.core.first(args__31746__auto__);
var G__56302 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56301,G__56302) : io.factorhouse.hsx.core.obj_get.call(null,G__56301,G__56302));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"settings-account-usage-description","settings-account-usage-description",-1369790996,null),args__31746__auto__),frontend$components$settings$settings_account_usage_description,args__31746__auto__,null);
}
};
var frontend$components$settings$settings_account_usage_description = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56654__i = 0, G__56654__a = new Array(arguments.length -  0);
while (G__56654__i < G__56654__a.length) {G__56654__a[G__56654__i] = arguments[G__56654__i + 0]; ++G__56654__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56654__a,0,null);
} 
return frontend$components$settings$settings_account_usage_description__delegate.call(this,args__31746__auto__);};
frontend$components$settings$settings_account_usage_description.cljs$lang$maxFixedArity = 0;
frontend$components$settings$settings_account_usage_description.cljs$lang$applyTo = (function (arglist__56655){
var args__31746__auto__ = cljs.core.seq(arglist__56655);
return frontend$components$settings$settings_account_usage_description__delegate(args__31746__auto__);
});
frontend$components$settings$settings_account_usage_description.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$settings_account_usage_description__delegate;
return frontend$components$settings$settings_account_usage_description;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56303 = comp__31745__auto__;
var G__56304 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56303,G__56304) : io.factorhouse.hsx.core.react_memo.call(null,G__56303,G__56304));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"settings-account-usage-description");

return comp__31745__auto__;
})();
frontend.components.settings.settings_account_usage_graphs = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$settings_account_usage_graphs(_pro_account_QMARK_,graph_usage){
if(((0) < cljs.core.count(graph_usage))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.gap-3","div.grid.gap-3",1693860883),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),(""+"repeat("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(graph_usage))+", 1fr)")], null)], null),(function (){var iter__5628__auto__ = (function frontend$components$settings$settings_account_usage_graphs_$_iter__56305(s__56306){
return (new cljs.core.LazySeq(null,(function (){
var s__56306__$1 = s__56306;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__56306__$1);
if(temp__5825__auto__){
var s__56306__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56306__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__56306__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__56308 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__56307 = (0);
while(true){
if((i__56307 < size__5627__auto__)){
var map__56309 = cljs.core._nth(c__5626__auto__,i__56307);
var map__56309__$1 = cljs.core.__destructure_map(map__56309);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56309__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var used_percent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56309__$1,new cljs.core.Keyword(null,"used-percent","used-percent",-1822070047));
var color = ((((100) <= used_percent))?"bg-red-500":"bg-blue-500");
cljs.core.chunk_append(b__56308,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rounded-full.w-full.h-2","div.rounded-full.w-full.h-2",-1049595081),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-black/50",new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rounded-full.h-2","div.rounded-full.h-2",-1448682666),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),color,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(used_percent)+"%"),new cljs.core.Keyword(null,"min-width","min-width",1926193728),"0.5rem",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null)], null)], null)], null));

var G__56658 = (i__56307 + (1));
i__56307 = G__56658;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56308),frontend$components$settings$settings_account_usage_graphs_$_iter__56305(cljs.core.chunk_rest(s__56306__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56308),null);
}
} else {
var map__56310 = cljs.core.first(s__56306__$2);
var map__56310__$1 = cljs.core.__destructure_map(map__56310);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56310__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var used_percent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56310__$1,new cljs.core.Keyword(null,"used-percent","used-percent",-1822070047));
var color = ((((100) <= used_percent))?"bg-red-500":"bg-blue-500");
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rounded-full.w-full.h-2","div.rounded-full.w-full.h-2",-1049595081),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-black/50",new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rounded-full.h-2","div.rounded-full.h-2",-1448682666),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),color,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(used_percent)+"%"),new cljs.core.Keyword(null,"min-width","min-width",1926193728),"0.5rem",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null)], null)], null)], null),frontend$components$settings$settings_account_usage_graphs_$_iter__56305(cljs.core.rest(s__56306__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(graph_usage);
})()], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$settings_account_usage_graphs__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56311 = cljs.core.first(args__31746__auto__);
var G__56312 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56311,G__56312) : io.factorhouse.hsx.core.obj_get.call(null,G__56311,G__56312));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"settings-account-usage-graphs","settings-account-usage-graphs",-674739994,null),args__31746__auto__),frontend$components$settings$settings_account_usage_graphs,args__31746__auto__,null);
}
};
var frontend$components$settings$settings_account_usage_graphs = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56661__i = 0, G__56661__a = new Array(arguments.length -  0);
while (G__56661__i < G__56661__a.length) {G__56661__a[G__56661__i] = arguments[G__56661__i + 0]; ++G__56661__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56661__a,0,null);
} 
return frontend$components$settings$settings_account_usage_graphs__delegate.call(this,args__31746__auto__);};
frontend$components$settings$settings_account_usage_graphs.cljs$lang$maxFixedArity = 0;
frontend$components$settings$settings_account_usage_graphs.cljs$lang$applyTo = (function (arglist__56662){
var args__31746__auto__ = cljs.core.seq(arglist__56662);
return frontend$components$settings$settings_account_usage_graphs__delegate(args__31746__auto__);
});
frontend$components$settings$settings_account_usage_graphs.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$settings_account_usage_graphs__delegate;
return frontend$components$settings$settings_account_usage_graphs;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56313 = comp__31745__auto__;
var G__56314 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56313,G__56314) : io.factorhouse.hsx.core.react_memo.call(null,G__56313,G__56314));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"settings-account-usage-graphs");

return comp__31745__auto__;
})();
frontend.components.settings.settings_account = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$settings_account(){
var graph_usage = cljs.core.PersistentVector.EMPTY;
var auth_refresh_token = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("auth","refresh-token","auth/refresh-token",-1024820760)], null));
var logged_in_QMARK_ = ((typeof auth_refresh_token === 'string') && ((!(clojure.string.blank_QMARK_(auth_refresh_token)))));
var user_info = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","info","user/info",-345834271)], null));
var paid_user_QMARK_ = (function (){var G__56316 = new cljs.core.Keyword(null,"LemonStatus","LemonStatus",-1872117472).cljs$core$IFn$_invoke$arity$1(user_info);
var fexpr__56315 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cancelled",null,"on_trial",null,"active",null], null), null);
return (fexpr__56315.cljs$core$IFn$_invoke$arity$1 ? fexpr__56315.cljs$core$IFn$_invoke$arity$1(G__56316) : fexpr__56315.call(null,G__56316));
})();
var gift_user_QMARK_ = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["pro",null], null), null),new cljs.core.Keyword(null,"UserGroups","UserGroups",1693861388).cljs$core$IFn$_invoke$arity$1(user_info));
var pro_account_QMARK_ = (function (){var or__5142__auto__ = paid_user_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return gift_user_QMARK_;
}
})();
var expiration_date = (function (){var G__56317 = user_info;
var G__56317__$1 = (((G__56317 == null))?null:new cljs.core.Keyword(null,"LemonEndsAt","LemonEndsAt",-914445868).cljs$core$IFn$_invoke$arity$1(G__56317));
if((G__56317__$1 == null)){
return null;
} else {
return frontend.date.parse_iso(G__56317__$1);
}
})();
var renewal_date = (function (){var G__56318 = user_info;
var G__56318__$1 = (((G__56318 == null))?null:new cljs.core.Keyword(null,"LemonRenewsAt","LemonRenewsAt",-398590396).cljs$core$IFn$_invoke$arity$1(G__56318));
if((G__56318__$1 == null)){
return null;
} else {
return frontend.date.parse_iso(G__56318__$1);
}
})();
var has_subscribed_QMARK_ = (!((new cljs.core.Keyword(null,"LemonStatus","LemonStatus",-1872117472).cljs$core$IFn$_invoke$arity$1(user_info) == null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-wrap.is-features.mb-8","div.panel-wrap.is-features.mb-8",-1286578600),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1.sm:mt-0.sm:col-span-2","div.mt-1.sm:mt-0.sm:col-span-2",1617581337),((logged_in_QMARK_)?new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-3.gap-8.pt-2","div.grid.grid-cols-3.gap-8.pt-2",290782413),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","current-plan","account/current-plan",-397290572)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-2","div.col-span-2",-228761363),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full bg-gray-500/10 rounded-lg p-4 flex flex-col gap-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.gap-4.items-center","div.flex.gap-4.items-center",1354546562),(cljs.core.truth_(pro_account_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-1","div.flex-1",2004402050),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","plan-pro","account/plan-pro",-1708129531)], 0))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-1","div.flex-1",2004402050),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","plan-free","account/plan-free",175822302)], 0))], null)),((has_subscribed_QMARK_)?frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","manage-plan","account/manage-plan",-553804622)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-1 h-8 justify-center",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"icon","icon",1679606541),"upload"], null)], 0)):((cljs.core.not(pro_account_QMARK_))?frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","upgrade-plan","account/upgrade-plan",-474594478)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-1 h-8 justify-center",new cljs.core.Keyword(null,"icon","icon",1679606541),"upload",new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.user.upgrade], null)], 0)):null
))], null),frontend.components.settings.settings_account_usage_graphs(pro_account_QMARK_,graph_usage),frontend.components.settings.settings_account_usage_description(pro_account_QMARK_,graph_usage)], null)], null),((has_subscribed_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","billing","account/billing",1982993815)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-2.flex.flex-col.gap-4","div.col-span-2.flex.flex-col.gap-4",1390783784),(cljs.core.truth_((function (){var and__5140__auto__ = renewal_date;
if(cljs.core.truth_(and__5140__auto__)){
return (expiration_date == null);
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.font-semibold","strong.font-semibold",1691174885),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","billing-next-date-label","account/billing-next-date-label",717500754),frontend.context.i18n.locale_format_date.cljs$core$IFn$_invoke$arity$1(renewal_date)], 0))], null)], null):((((new Date()) < expiration_date))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.font-semibold","strong.font-semibold",1691174885),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","billing-expires-on-label","account/billing-expires-on-label",-490484300),frontend.context.i18n.locale_format_date.cljs$core$IFn$_invoke$arity$1(expiration_date)], 0))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.font-semibold","strong.font-semibold",1691174885),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","billing-expired-on-label","account/billing-expired-on-label",-152497277),frontend.context.i18n.locale_format_date.cljs$core$IFn$_invoke$arity$1(expiration_date)], 0))], null)], null)
)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","open-invoices","account/open-invoices",846292525)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full h-8 p-1 justify-center",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"background","background",-863952629),"gray",new cljs.core.Keyword(null,"icon","icon",1679606541),"receipt"], null)], 0))], null)], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","profile","account/profile",1492707969)], 0))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-2.grid.grid-cols-2.gap-4","div.col-span-2.grid.grid-cols-2.gap-4",-701221645),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-2.box-border","div.flex.flex-col.gap-2.box-border",-278902786),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"basis-1/2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.text-sm.font-semibold","label.text-sm.font-semibold",1064326551),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","first-name","account/first-name",1830360610)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.rounded.border.px-2.py-1.box-border","input.rounded.border.px-2.py-1.box-border",1870923625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-blue-500 bg-black/25 w-full"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-2","div.flex.flex-col.gap-2",1564729900),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"basis-1/2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.text-sm.font-semibold","label.text-sm.font-semibold",1064326551),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","last-name","account/last-name",622373267)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.rounded.border.px-2.py-1.box-border","input.rounded.border.px-2.py-1.box-border",1870923625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-blue-500 bg-black/25 w-full"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-1.flex.flex-col.gap-2.col-span-2","div.flex-1.flex.flex-col.gap-2.col-span-2",-2141170604),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.text-sm.font-semibold","label.text-sm.font-semibold",1064326551),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","username","account/username",-1384573795)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rounded.border.px-2.py-1.box-border","div.rounded.border.px-2.py-1.box-border",-1593283902),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-blue-500 bg-black/25"], null),frontend.components.email.email_address(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"email","email",1415816706),frontend.handler.user.email()], null))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","authentication","account/authentication",-1574848219)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-2","div.col-span-2",-228761363),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-2.gap-4","div.grid.grid-cols-2.gap-4",-491431037),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","logout","ui/logout",1418560917)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-1 h-8 justify-center w-full",new cljs.core.Keyword(null,"background","background",-863952629),"gray",new cljs.core.Keyword(null,"icon","icon",1679606541),"logout",new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.user.logout], null)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","reset-password","account/reset-password",-100799386)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-1 h-8 justify-center w-full",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"background","background",-863952629),"gray",new cljs.core.Keyword(null,"icon","icon",1679606541),"key",new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.user.logout], null)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-2","div.col-span-2",-228761363),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","delete-account","account/delete-account",294958128)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-1 h-8 justify-center w-full",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"background","background",-863952629),"red"], null)], 0))], null)], null)], null)], null):(((!(logged_in_QMARK_)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-3.gap-8.pt-2","div.grid.grid-cols-3.gap-8.pt-2",290782413),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","authentication","account/authentication",-1574848219)], 0))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-2.flex.flex-wrap.gap-4","div.col-span-2.flex.flex-wrap.gap-4",1230706020),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full.text-white","div.w-full.text-white",-488938165),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","benefits-desc","account/benefits-desc",-1191035543)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-1","div.flex-1",2004402050),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","sign-up","account/sign-up",1062427153)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-8 w-full text-center justify-center",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.state.close_settings_BANG_();

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","login","user/login",51503538)], null));
})], null)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-1","div.flex-1",2004402050),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","login","ui/login",55212987)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon","icon",1679606541),"login",new cljs.core.Keyword(null,"class","class",-2030961996),"h-8 w-full text-center justify-center",new cljs.core.Keyword(null,"background","background",-863952629),"gray",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.state.close_settings_BANG_();

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","login","user/login",51503538)], null));
})], null)], 0))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-3.flex.flex-col.gap-4","div.col-span-3.flex.flex-col.gap-4",157916243),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-black/20 p-4 rounded-lg"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.w-full.items-center","div.flex.w-full.items-center",802327045),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-1/2 text-lg"], null),frontend.context.i18n.interpolate_rich_text_node.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","discover-sync-desc","account/discover-sync-desc",695930263)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-white/80"], null),"Logseq Sync"], null)], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-1/2 bg-gradient-to-r from-white/10 to-transparent p-3 rounded-lg flex items-center gap-2 px-5 ml-5"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-3.h-3.rounded-full.bg-green-500","div.w-3.h-3.rounded-full.bg-green-500",-1431849955)], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","synced-status","account/synced-status",1640617776)], 0))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.w-full.gap-4","div.flex.w-full.gap-4",-1379783377),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-1/2 bg-black/50 rounded-lg p-4 pt-10 relative flex flex-col gap-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.absolute.top-0.left-4.bg-gray-700.uppercase.px-2.py-1.rounded-b-lg.font-bold.text-xs","div.absolute.top-0.left-4.bg-gray-700.uppercase.px-2.py-1.rounded-b-lg.font-bold.text-xs",987025160),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","plan-free","account/plan-free",175822302)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.text-white.text-xl.font-normal","strong.text-white.text-xl.font-normal",1050344267),"$0"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-white.font-bold","div.text-white.font-bold",1366308171),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-[2.5rem] "], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","plan-free-summary","account/plan-free-summary",1079506411)], 0))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.text-xs.list-none.m-0.flex.flex-col.gap-0.5","ul.text-xs.list-none.m-0.flex.flex-col.gap-0.5",-2115791392),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","unlimited-unsynced-graphs","account/unlimited-unsynced-graphs",-1836843840)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","free-plan-sync-limit","account/free-plan-sync-limit",2080233725)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","no-asset-syncing","account/no-asset-syncing",-486169196)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","core-features","account/core-features",505914558)], 0))], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-1/2 bg-black/50 rounded-lg p-4 pt-10 relative flex flex-col gap-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.absolute.top-0.left-4.bg-blue-700.uppercase.px-2.py-1.rounded-b-lg.font-bold.text-xs","div.absolute.top-0.left-4.bg-blue-700.uppercase.px-2.py-1.rounded-b-lg.font-bold.text-xs",-1751797796),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","plan-pro","account/plan-pro",-1708129531)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.text-white.text-xl.font-normal","strong.text-white.text-xl.font-normal",1050344267),"$10"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.font-base","span.text-xs.font-base",2010205099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ml-0.5"], null)," / ",frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","month","account/month",1426295040)], 0))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-white.font-bold","div.text-white.font-bold",1366308171),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-[2.5rem]"], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","plan-pro-summary","account/plan-pro-summary",-1665553579)], 0))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.text-xs.list-none.m-0.flex.flex-col.gap-0.5","ul.text-xs.list-none.m-0.flex.flex-col.gap-0.5",-2115791392),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","unlimited-unsynced-graphs","account/unlimited-unsynced-graphs",-1836843840)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","pro-plan-sync-limit","account/pro-plan-sync-limit",-1613544771)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","sync-assets-limit","account/sync-assets-limit",-1399648001)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","early-access-alpha-beta","account/early-access-alpha-beta",172899437)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("account","upcoming-cloud-features","account/upcoming-cloud-features",-253931487)], 0))], null)], null)], null)], null)], null)], null):null))], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$settings_account__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56319 = cljs.core.first(args__31746__auto__);
var G__56320 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56319,G__56320) : io.factorhouse.hsx.core.obj_get.call(null,G__56319,G__56320));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"settings-account","settings-account",-2102074576,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$settings$settings_account,args__31746__auto__,null);
}
};
var frontend$components$settings$settings_account = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56677__i = 0, G__56677__a = new Array(arguments.length -  0);
while (G__56677__i < G__56677__a.length) {G__56677__a[G__56677__i] = arguments[G__56677__i + 0]; ++G__56677__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56677__a,0,null);
} 
return frontend$components$settings$settings_account__delegate.call(this,args__31746__auto__);};
frontend$components$settings$settings_account.cljs$lang$maxFixedArity = 0;
frontend$components$settings$settings_account.cljs$lang$applyTo = (function (arglist__56678){
var args__31746__auto__ = cljs.core.seq(arglist__56678);
return frontend$components$settings$settings_account__delegate(args__31746__auto__);
});
frontend$components$settings$settings_account.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$settings_account__delegate;
return frontend$components$settings$settings_account;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56321 = comp__31745__auto__;
var G__56322 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56321,G__56322) : io.factorhouse.hsx.core.react_memo.call(null,G__56321,G__56322));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"settings-account");

return comp__31745__auto__;
})();
frontend.components.settings.settings_features = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$settings_features(){
var config = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415)], null));
var default_home_page = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(frontend.state.config_for_repo(config,frontend.state.get_current_repo()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default-home","default-home",171104159),new cljs.core.Keyword(null,"page","page",849072397)], null),"");
var app_user_cfgs = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489)], null));
var app_base_info = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","app-base-info","electron/app-base-info",1025481912)], null));
var current_repo = frontend.state.get_current_repo();
var enable_flashcards_QMARK_ = frontend.state.enable_flashcards_QMARK_.cljs$core$IFn$_invoke$arity$1(current_repo);
var semantic_search_enabled_QMARK_ = new cljs.core.Keyword("feature","enable-semantic-search?","feature/enable-semantic-search?",-1561249444).cljs$core$IFn$_invoke$arity$1(app_user_cfgs) === true;
var logged_in_QMARK_ = frontend.handler.user.logged_in_QMARK_();
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-wrap.is-features.mb-8","div.panel-wrap.is-features.mb-8",-1286578600),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-center","div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-center",-761433112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-sm.font-medium.leading-5.opacity-70","label.block.text-sm.font-medium.leading-5.opacity-70",643274172),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"default page"], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.features","home-default-page","settings.features/home-default-page",1312971299)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1.sm:mt-0.sm:col-span-2","div.mt-1.sm:mt-0.sm:col-span-2",1617581337),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.max-w-lg.rounded-md.sm:max-w-xs","div.max-w-lg.rounded-md.sm:max-w-xs",1921684771),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#home-default-page.form-input.is-small.transition.duration-150.ease-in-out","input#home-default-page.form-input.is-small.transition.duration-150.ease-in-out",449885578),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-value","default-value",232220170),default_home_page,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),frontend.components.settings.update_home_page,new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",frontend.util.ekey(e))){
return frontend.components.settings.update_home_page(e);
} else {
return null;
}
})], null)], null)], null)], null)], null),((frontend.util.web_platform_QMARK_)?frontend.components.settings.web_graph_folder_row():null),((((frontend.util.web_platform_QMARK_) && (frontend.config.feature_plugin_system_on_QMARK_)))?frontend.components.settings.plugin_system_switcher_row():null),(cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.components.settings.http_server_switcher_row():null),(cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.components.settings.markdown_mirror_row(frontend.context.i18n.t):null),frontend.components.settings.flashcards_switcher_row(enable_flashcards_QMARK_),((frontend.components.settings.semantic_search_setting_supported_QMARK_(app_base_info))?frontend.components.settings.semantic_search_row(frontend.context.i18n.t,semantic_search_enabled_QMARK_):null),((frontend.util.web_platform_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1.sm:mt-0.sm:col-span-2","div.mt-1.sm:mt-0.sm:col-span-2",1617581337),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),(cljs.core.truth_(logged_in_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.components.email.email_address(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"email","email",1415816706),frontend.handler.user.email()], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","logout","ui/logout",1418560917)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-1",new cljs.core.Keyword(null,"icon","icon",1679606541),"logout",new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.user.logout], null)], 0))], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","login","ui/login",55212987)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-1",new cljs.core.Keyword(null,"icon","icon",1679606541),"login",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.state.close_settings_BANG_();

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","login","user/login",51503538)], null));
})], null)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm.opacity-50","p.text-sm.opacity-50",1636977583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.features","login-prompt","settings.features/login-prompt",1133688198)], 0))], null)], null))], null))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$settings_features__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56323 = cljs.core.first(args__31746__auto__);
var G__56324 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56323,G__56324) : io.factorhouse.hsx.core.obj_get.call(null,G__56323,G__56324));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"settings-features","settings-features",-1676896249,null),args__31746__auto__),frontend$components$settings$settings_features,args__31746__auto__,null);
}
};
var frontend$components$settings$settings_features = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56685__i = 0, G__56685__a = new Array(arguments.length -  0);
while (G__56685__i < G__56685__a.length) {G__56685__a[G__56685__i] = arguments[G__56685__i + 0]; ++G__56685__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56685__a,0,null);
} 
return frontend$components$settings$settings_features__delegate.call(this,args__31746__auto__);};
frontend$components$settings$settings_features.cljs$lang$maxFixedArity = 0;
frontend$components$settings$settings_features.cljs$lang$applyTo = (function (arglist__56686){
var args__31746__auto__ = cljs.core.seq(arglist__56686);
return frontend$components$settings$settings_features__delegate(args__31746__auto__);
});
frontend$components$settings$settings_features.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$settings_features__delegate;
return frontend$components$settings$settings_features;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56325 = comp__31745__auto__;
var G__56326 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56325,G__56326) : io.factorhouse.hsx.core.react_memo.call(null,G__56325,G__56326));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"settings-features");

return comp__31745__auto__;
})();
frontend.components.settings.DEFAULT_ACTIVE_TAB_STATE = ((frontend.config.ENABLE_SETTINGS_ACCOUNT_TAB)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"account","account",718006320),new cljs.core.Keyword(null,"account","account",718006320)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general","general",380803686),new cljs.core.Keyword(null,"general","general",380803686)], null));
frontend.components.settings.settings_effect = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$settings_effect(active){
logseq.shui.hooks.use_effect_BANG_((function (){
var active__$1 = (function (){var and__5140__auto__ = cljs.core.sequential_QMARK_(active);
if(and__5140__auto__){
return cljs.core.name(cljs.core.first(active));
} else {
return and__5140__auto__;
}
})();
var ds = document.body.dataset;
if(cljs.core.truth_(active__$1)){
(ds.settingsTab = active__$1);
} else {
delete ds["settingsTab"];
}

return (function (){
return delete ds["settingsTab"];
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [active], null));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$settings_effect__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56327 = cljs.core.first(args__31746__auto__);
var G__56328 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56327,G__56328) : io.factorhouse.hsx.core.obj_get.call(null,G__56327,G__56328));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"settings-effect","settings-effect",-1808283613,null),args__31746__auto__),frontend$components$settings$settings_effect,args__31746__auto__,null);
}
};
var frontend$components$settings$settings_effect = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56687__i = 0, G__56687__a = new Array(arguments.length -  0);
while (G__56687__i < G__56687__a.length) {G__56687__a[G__56687__i] = arguments[G__56687__i + 0]; ++G__56687__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56687__a,0,null);
} 
return frontend$components$settings$settings_effect__delegate.call(this,args__31746__auto__);};
frontend$components$settings$settings_effect.cljs$lang$maxFixedArity = 0;
frontend$components$settings$settings_effect.cljs$lang$applyTo = (function (arglist__56688){
var args__31746__auto__ = cljs.core.seq(arglist__56688);
return frontend$components$settings$settings_effect__delegate(args__31746__auto__);
});
frontend$components$settings$settings_effect.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$settings_effect__delegate;
return frontend$components$settings$settings_effect;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56329 = comp__31745__auto__;
var G__56330 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56329,G__56330) : io.factorhouse.hsx.core.react_memo.call(null,G__56329,G__56330));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"settings-effect");

return comp__31745__auto__;
})();
frontend.components.settings.settings_rtc_members = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$settings_rtc_members(){
var vec__56332 = logseq.shui.hooks.use_state("");
var invite_email = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56332,(0),null);
var set_invite_email_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56332,(1),null);
var vec__56335 = logseq.shui.hooks.use_state(true);
var loading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56335,(0),null);
var set_loading_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56335,(1),null);
var vec__56338 = logseq.shui.hooks.use_state(null);
var graph_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56338,(0),null);
var set_graph_uuid_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56338,(1),null);
var current_repo = frontend.state.get_current_repo();
var manager_QMARK_ = frontend.handler.user.manager_QMARK_(current_repo);
var users_info = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rtc","users-info","rtc/users-info",8288930)], null));
var users = cljs.core.get.cljs$core$IFn$_invoke$arity$2(users_info,current_repo);
var invite_user_BANG_ = (function (){
if(clojure.string.blank_QMARK_(invite_email)){
return null;
} else {
if(cljs.core.truth_(graph_uuid)){
return frontend.handler.db_based.sync._LT_rtc_invite_email(graph_uuid,invite_email);
} else {
return null;
}
}
});
logseq.shui.hooks.use_effect_BANG_((function (){
promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-rtc-graph-uuid","thread-api/get-rtc-graph-uuid",-249168913),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([current_repo], 0))),(function (graph_uuid__$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.sync._LT_rtc_get_users_info.cljs$core$IFn$_invoke$arity$0()),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise((set_graph_uuid_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_graph_uuid_BANG_.cljs$core$IFn$_invoke$arity$1(graph_uuid__$1) : set_graph_uuid_BANG_.call(null,graph_uuid__$1))),(function (___21901__auto__){
return promesa.protocols._promise((set_loading_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_loading_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_loading_BANG_.call(null,false)));
}));
}));
}));
}));

return null;
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-2.mt-4","div.flex.flex-col.gap-2.mt-4",763336060),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",e.key)){
return invite_user_BANG_();
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.users.flex.flex-col.gap-1","div.users.flex.flex-col.gap-1",-888195999),(cljs.core.truth_(loading_QMARK_)?(function (){var iter__5628__auto__ = (function frontend$components$settings$settings_rtc_members_$_iter__56341(s__56342){
return (new cljs.core.LazySeq(null,(function (){
var s__56342__$1 = s__56342;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__56342__$1);
if(temp__5825__auto__){
var s__56342__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56342__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__56342__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__56344 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__56343 = (0);
while(true){
if((i__56343 < size__5627__auto__)){
var i = cljs.core._nth(c__5626__auto__,i__56343);
cljs.core.chunk_append(b__56344,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.gap-2.pr-4","div.flex.flex-row.items-center.gap-2.pr-4",-1847978166),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"skeleton-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i))], null),(function (){var G__56345 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-4 w-32"], null);
return (logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1(G__56345) : logseq.shui.ui.skeleton.call(null,G__56345));
})(),(function (){var G__56346 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-4 w-full"], null);
return (logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1(G__56346) : logseq.shui.ui.skeleton.call(null,G__56346));
})()], null));

var G__56694 = (i__56343 + (1));
i__56343 = G__56694;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56344),frontend$components$settings$settings_rtc_members_$_iter__56341(cljs.core.chunk_rest(s__56342__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56344),null);
}
} else {
var i = cljs.core.first(s__56342__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.gap-2.pr-4","div.flex.flex-row.items-center.gap-2.pr-4",-1847978166),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"skeleton-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i))], null),(function (){var G__56347 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-4 w-32"], null);
return (logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1(G__56347) : logseq.shui.ui.skeleton.call(null,G__56347));
})(),(function (){var G__56348 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-4 w-full"], null);
return (logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1(G__56348) : logseq.shui.ui.skeleton.call(null,G__56348));
})()], null),frontend$components$settings$settings_rtc_members_$_iter__56341(cljs.core.rest(s__56342__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((2)));
})():(function (){var iter__5628__auto__ = (function frontend$components$settings$settings_rtc_members_$_iter__56349(s__56350){
return (new cljs.core.LazySeq(null,(function (){
var s__56350__$1 = s__56350;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__56350__$1);
if(temp__5825__auto__){
var s__56350__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56350__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__56350__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__56352 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__56351 = (0);
while(true){
if((i__56351 < size__5627__auto__)){
var map__56353 = cljs.core._nth(c__5626__auto__,i__56351);
var map__56353__$1 = cljs.core.__destructure_map(map__56353);
var user_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56353__$1,new cljs.core.Keyword("user","name","user/name",1848814598));
var user_email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56353__$1,new cljs.core.Keyword("user","email","user/email",1419686391));
var user_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56353__$1,new cljs.core.Keyword("user","uuid","user/uuid",2146253734));
var graph_LT___GT_user_user_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56353__$1,new cljs.core.Keyword("graph<->user","user-type","graph<->user/user-type",-237330466));
cljs.core.chunk_append(b__56352,(function (){var member_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"member","member",-2012020816),graph_LT___GT_user_user_type);
var can_remove_QMARK_ = ((manager_QMARK_) && (member_QMARK_));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.gap-2","div.flex.flex-row.items-center.gap-2",212596841),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"user-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = user_uuid;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return user_name;
}
})()))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),user_name], null),(cljs.core.truth_(user_email)?frontend.components.email.email_address(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),user_email,new cljs.core.Keyword(null,"class","class",-2030961996),"opacity-50 text-sm"], null)):null),(cljs.core.truth_(graph_LT___GT_user_user_type)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-50.text-sm","div.opacity-50.text-sm",602959872),cljs.core.name(graph_LT___GT_user_user_type)], null):null),((can_remove_QMARK_)?(function (){var G__56354 = (function (){var G__56356 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"asChild","asChild",682531623),true], null);
var G__56357 = (function (){var G__56358 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"ghost",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),"px-1 h-7"], null);
var G__56359 = frontend.ui.icon("dots",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__56358,G__56359) : logseq.shui.ui.button.call(null,G__56358,G__56359));
})();
return (logseq.shui.ui.dropdown_menu_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_trigger.cljs$core$IFn$_invoke$arity$2(G__56356,G__56357) : logseq.shui.ui.dropdown_menu_trigger.call(null,G__56356,G__56357));
})();
var G__56355 = (function (){var G__56360 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align","align",1964212802),"end"], null);
var G__56361 = (function (){var G__56362 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"remove-member-menu-item",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__56351,G__56360,G__56354,member_QMARK_,can_remove_QMARK_,map__56353,map__56353__$1,user_name,user_email,user_uuid,graph_LT___GT_user_user_type,c__5626__auto__,size__5627__auto__,b__56352,s__56350__$2,temp__5825__auto__,vec__56332,invite_email,set_invite_email_BANG_,vec__56335,loading_QMARK_,set_loading_BANG_,vec__56338,graph_uuid,set_graph_uuid_BANG_,current_repo,manager_QMARK_,users_info,users,invite_user_BANG_){
return (function (){
var member_id = user_uuid;
if(cljs.core.truth_((function (){var and__5140__auto__ = graph_uuid;
if(cljs.core.truth_(and__5140__auto__)){
return member_id;
} else {
return and__5140__auto__;
}
})())){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.handler.db_based.sync._LT_rtc_remove_member_BANG_(graph_uuid,member_id),((function (i__56351,member_id,G__56360,G__56354,member_QMARK_,can_remove_QMARK_,map__56353,map__56353__$1,user_name,user_email,user_uuid,graph_LT___GT_user_user_type,c__5626__auto__,size__5627__auto__,b__56352,s__56350__$2,temp__5825__auto__,vec__56332,invite_email,set_invite_email_BANG_,vec__56335,loading_QMARK_,set_loading_BANG_,vec__56338,graph_uuid,set_graph_uuid_BANG_,current_repo,manager_QMARK_,users_info,users,invite_user_BANG_){
return (function (){
return frontend.handler.db_based.sync._LT_rtc_get_users_info.cljs$core$IFn$_invoke$arity$1(true);
});})(i__56351,member_id,G__56360,G__56354,member_QMARK_,can_remove_QMARK_,map__56353,map__56353__$1,user_name,user_email,user_uuid,graph_LT___GT_user_user_type,c__5626__auto__,size__5627__auto__,b__56352,s__56350__$2,temp__5825__auto__,vec__56332,invite_email,set_invite_email_BANG_,vec__56335,loading_QMARK_,set_loading_BANG_,vec__56338,graph_uuid,set_graph_uuid_BANG_,current_repo,manager_QMARK_,users_info,users,invite_user_BANG_))
),((function (i__56351,member_id,G__56360,G__56354,member_QMARK_,can_remove_QMARK_,map__56353,map__56353__$1,user_name,user_email,user_uuid,graph_LT___GT_user_user_type,c__5626__auto__,size__5627__auto__,b__56352,s__56350__$2,temp__5825__auto__,vec__56332,invite_email,set_invite_email_BANG_,vec__56335,loading_QMARK_,set_loading_BANG_,vec__56338,graph_uuid,set_graph_uuid_BANG_,current_repo,manager_QMARK_,users_info,users,invite_user_BANG_){
return (function (e){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("collaboration","remove-access-error","collaboration/remove-access-error",2039734546)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));

if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.settings",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db-sync","remove-member-failed","db-sync/remove-member-failed",1685462393),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),e,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),graph_uuid,new cljs.core.Keyword(null,"member-id","member-id",606659713),member_id], null),new cljs.core.Keyword(null,"line","line",212345235),1351], null)),null);
} else {
return null;
}
});})(i__56351,member_id,G__56360,G__56354,member_QMARK_,can_remove_QMARK_,map__56353,map__56353__$1,user_name,user_email,user_uuid,graph_LT___GT_user_user_type,c__5626__auto__,size__5627__auto__,b__56352,s__56350__$2,temp__5825__auto__,vec__56332,invite_email,set_invite_email_BANG_,vec__56335,loading_QMARK_,set_loading_BANG_,vec__56338,graph_uuid,set_graph_uuid_BANG_,current_repo,manager_QMARK_,users_info,users,invite_user_BANG_))
);
} else {
return null;
}
});})(i__56351,G__56360,G__56354,member_QMARK_,can_remove_QMARK_,map__56353,map__56353__$1,user_name,user_email,user_uuid,graph_LT___GT_user_user_type,c__5626__auto__,size__5627__auto__,b__56352,s__56350__$2,temp__5825__auto__,vec__56332,invite_email,set_invite_email_BANG_,vec__56335,loading_QMARK_,set_loading_BANG_,vec__56338,graph_uuid,set_graph_uuid_BANG_,current_repo,manager_QMARK_,users_info,users,invite_user_BANG_))
], null);
var G__56363 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("collaboration","remove-access","collaboration/remove-access",710932027)], 0));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__56362,G__56363) : logseq.shui.ui.dropdown_menu_item.call(null,G__56362,G__56363));
})();
return (logseq.shui.ui.dropdown_menu_content.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_content.cljs$core$IFn$_invoke$arity$2(G__56360,G__56361) : logseq.shui.ui.dropdown_menu_content.call(null,G__56360,G__56361));
})();
return (logseq.shui.ui.dropdown_menu.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu.cljs$core$IFn$_invoke$arity$2(G__56354,G__56355) : logseq.shui.ui.dropdown_menu.call(null,G__56354,G__56355));
})():null)], null);
})());

var G__56700 = (i__56351 + (1));
i__56351 = G__56700;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56352),frontend$components$settings$settings_rtc_members_$_iter__56349(cljs.core.chunk_rest(s__56350__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56352),null);
}
} else {
var map__56364 = cljs.core.first(s__56350__$2);
var map__56364__$1 = cljs.core.__destructure_map(map__56364);
var user_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56364__$1,new cljs.core.Keyword("user","name","user/name",1848814598));
var user_email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56364__$1,new cljs.core.Keyword("user","email","user/email",1419686391));
var user_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56364__$1,new cljs.core.Keyword("user","uuid","user/uuid",2146253734));
var graph_LT___GT_user_user_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56364__$1,new cljs.core.Keyword("graph<->user","user-type","graph<->user/user-type",-237330466));
return cljs.core.cons((function (){var member_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"member","member",-2012020816),graph_LT___GT_user_user_type);
var can_remove_QMARK_ = ((manager_QMARK_) && (member_QMARK_));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.gap-2","div.flex.flex-row.items-center.gap-2",212596841),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"user-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = user_uuid;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return user_name;
}
})()))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),user_name], null),(cljs.core.truth_(user_email)?frontend.components.email.email_address(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),user_email,new cljs.core.Keyword(null,"class","class",-2030961996),"opacity-50 text-sm"], null)):null),(cljs.core.truth_(graph_LT___GT_user_user_type)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-50.text-sm","div.opacity-50.text-sm",602959872),cljs.core.name(graph_LT___GT_user_user_type)], null):null),((can_remove_QMARK_)?(function (){var G__56365 = (function (){var G__56367 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"asChild","asChild",682531623),true], null);
var G__56368 = (function (){var G__56369 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"ghost",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),"px-1 h-7"], null);
var G__56370 = frontend.ui.icon("dots",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__56369,G__56370) : logseq.shui.ui.button.call(null,G__56369,G__56370));
})();
return (logseq.shui.ui.dropdown_menu_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_trigger.cljs$core$IFn$_invoke$arity$2(G__56367,G__56368) : logseq.shui.ui.dropdown_menu_trigger.call(null,G__56367,G__56368));
})();
var G__56366 = (function (){var G__56371 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align","align",1964212802),"end"], null);
var G__56372 = (function (){var G__56373 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"remove-member-menu-item",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (G__56371,G__56365,member_QMARK_,can_remove_QMARK_,map__56364,map__56364__$1,user_name,user_email,user_uuid,graph_LT___GT_user_user_type,s__56350__$2,temp__5825__auto__,vec__56332,invite_email,set_invite_email_BANG_,vec__56335,loading_QMARK_,set_loading_BANG_,vec__56338,graph_uuid,set_graph_uuid_BANG_,current_repo,manager_QMARK_,users_info,users,invite_user_BANG_){
return (function (){
var member_id = user_uuid;
if(cljs.core.truth_((function (){var and__5140__auto__ = graph_uuid;
if(cljs.core.truth_(and__5140__auto__)){
return member_id;
} else {
return and__5140__auto__;
}
})())){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.handler.db_based.sync._LT_rtc_remove_member_BANG_(graph_uuid,member_id),(function (){
return frontend.handler.db_based.sync._LT_rtc_get_users_info.cljs$core$IFn$_invoke$arity$1(true);
})),(function (e){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("collaboration","remove-access-error","collaboration/remove-access-error",2039734546)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));

if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.settings",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db-sync","remove-member-failed","db-sync/remove-member-failed",1685462393),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),e,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),graph_uuid,new cljs.core.Keyword(null,"member-id","member-id",606659713),member_id], null),new cljs.core.Keyword(null,"line","line",212345235),1351], null)),null);
} else {
return null;
}
}));
} else {
return null;
}
});})(G__56371,G__56365,member_QMARK_,can_remove_QMARK_,map__56364,map__56364__$1,user_name,user_email,user_uuid,graph_LT___GT_user_user_type,s__56350__$2,temp__5825__auto__,vec__56332,invite_email,set_invite_email_BANG_,vec__56335,loading_QMARK_,set_loading_BANG_,vec__56338,graph_uuid,set_graph_uuid_BANG_,current_repo,manager_QMARK_,users_info,users,invite_user_BANG_))
], null);
var G__56374 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("collaboration","remove-access","collaboration/remove-access",710932027)], 0));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__56373,G__56374) : logseq.shui.ui.dropdown_menu_item.call(null,G__56373,G__56374));
})();
return (logseq.shui.ui.dropdown_menu_content.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_content.cljs$core$IFn$_invoke$arity$2(G__56371,G__56372) : logseq.shui.ui.dropdown_menu_content.call(null,G__56371,G__56372));
})();
return (logseq.shui.ui.dropdown_menu.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu.cljs$core$IFn$_invoke$arity$2(G__56365,G__56366) : logseq.shui.ui.dropdown_menu.call(null,G__56365,G__56366));
})():null)], null);
})(),frontend$components$settings$settings_rtc_members_$_iter__56349(cljs.core.rest(s__56350__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(users);
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-4.mt-4","div.flex.flex-col.gap-4.mt-4",-638953193),(function (){var G__56375 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("collaboration","email-address","collaboration/email-address",-701621933)], 0)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__56331_SHARP_){
var G__56376 = clojure.string.trim(frontend.util.evalue(p1__56331_SHARP_));
return (set_invite_email_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_invite_email_BANG_.cljs$core$IFn$_invoke$arity$1(G__56376) : set_invite_email_BANG_.call(null,G__56376));
})], null);
return (logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1(G__56375) : logseq.shui.ui.input.call(null,G__56375));
})(),(function (){var G__56377 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),invite_user_BANG_], null);
var G__56378 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("collaboration","invite","collaboration/invite",324275186)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__56377,G__56378) : logseq.shui.ui.button.call(null,G__56377,G__56378));
})()], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$settings_rtc_members__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56379 = cljs.core.first(args__31746__auto__);
var G__56380 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56379,G__56380) : io.factorhouse.hsx.core.obj_get.call(null,G__56379,G__56380));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"settings-rtc-members","settings-rtc-members",-326173595,null),args__31746__auto__),frontend$components$settings$settings_rtc_members,args__31746__auto__,null);
}
};
var frontend$components$settings$settings_rtc_members = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56710__i = 0, G__56710__a = new Array(arguments.length -  0);
while (G__56710__i < G__56710__a.length) {G__56710__a[G__56710__i] = arguments[G__56710__i + 0]; ++G__56710__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56710__a,0,null);
} 
return frontend$components$settings$settings_rtc_members__delegate.call(this,args__31746__auto__);};
frontend$components$settings$settings_rtc_members.cljs$lang$maxFixedArity = 0;
frontend$components$settings$settings_rtc_members.cljs$lang$applyTo = (function (arglist__56711){
var args__31746__auto__ = cljs.core.seq(arglist__56711);
return frontend$components$settings$settings_rtc_members__delegate(args__31746__auto__);
});
frontend$components$settings$settings_rtc_members.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$settings_rtc_members__delegate;
return frontend$components$settings$settings_rtc_members;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56381 = comp__31745__auto__;
var G__56382 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56381,G__56382) : io.factorhouse.hsx.core.react_memo.call(null,G__56381,G__56382));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"settings-rtc-members");

return comp__31745__auto__;
})();
frontend.components.settings.settings_collaboration = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$settings_collaboration(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-wrap.is-collaboration.mb-8","div.panel-wrap.is-collaboration.mb-8",52421978),frontend.components.settings.settings_rtc_members()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$settings_collaboration__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56383 = cljs.core.first(args__31746__auto__);
var G__56384 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56383,G__56384) : io.factorhouse.hsx.core.obj_get.call(null,G__56383,G__56384));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"settings-collaboration","settings-collaboration",-429014392,null),args__31746__auto__),frontend$components$settings$settings_collaboration,args__31746__auto__,null);
}
};
var frontend$components$settings$settings_collaboration = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56712__i = 0, G__56712__a = new Array(arguments.length -  0);
while (G__56712__i < G__56712__a.length) {G__56712__a[G__56712__i] = arguments[G__56712__i + 0]; ++G__56712__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56712__a,0,null);
} 
return frontend$components$settings$settings_collaboration__delegate.call(this,args__31746__auto__);};
frontend$components$settings$settings_collaboration.cljs$lang$maxFixedArity = 0;
frontend$components$settings$settings_collaboration.cljs$lang$applyTo = (function (arglist__56713){
var args__31746__auto__ = cljs.core.seq(arglist__56713);
return frontend$components$settings$settings_collaboration__delegate(args__31746__auto__);
});
frontend$components$settings$settings_collaboration.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$settings_collaboration__delegate;
return frontend$components$settings$settings_collaboration;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56385 = comp__31745__auto__;
var G__56386 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56385,G__56386) : io.factorhouse.hsx.core.react_memo.call(null,G__56385,G__56386));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"settings-collaboration");

return comp__31745__auto__;
})();
frontend.components.settings.pat_one_year_ms = (((((365) * (24)) * (60)) * (60)) * (1000));
frontend.components.settings.local_date_str = (function frontend$components$settings$local_date_str(date){
var pad = (function (n){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)).padStart((2),"0");
});
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(date.getFullYear())+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad((date.getMonth() + (1))))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad(date.getDate())));
});
frontend.components.settings.default_pat_expiration_date = (function frontend$components$settings$default_pat_expiration_date(){
return frontend.components.settings.local_date_str((new Date((Date.now() + frontend.components.settings.pat_one_year_ms))));
});
frontend.components.settings.pat_expiration_ms = (function frontend$components$settings$pat_expiration_ms(date){
if(((typeof date === 'string') && ((!(clojure.string.blank_QMARK_(date)))))){
var timestamp = Date.parse((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)+"T23:59:59.999"));
if(cljs.core.truth_(isNaN(timestamp))){
return null;
} else {
return timestamp;
}
} else {
return null;
}
});
frontend.components.settings.pat_permission_label = (function frontend$components$settings$pat_permission_label(permission){
var G__56387 = permission;
switch (G__56387) {
case "read":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync.personal-access-token.permission","read","sync.personal-access-token.permission/read",-1188517702)], 0));

break;
case "write":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync.personal-access-token.permission","write","sync.personal-access-token.permission/write",-198204317)], 0));

break;
case "both":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync.personal-access-token.permission","both","sync.personal-access-token.permission/both",-1965914459)], 0));

break;
default:
return permission;

}
});
frontend.components.settings.personal_access_token_select = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$personal_access_token_select(label,value,items,on_value_change){
var labels = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"label","label",1718410804))),items);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-1","div.flex.flex-col.gap-1",1246857632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.text-sm.opacity-70","label.text-sm.opacity-70",-1513144237),label], null),(function (){var G__56388 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"on-value-change","on-value-change",-621835289),on_value_change], null);
var G__56389 = (function (){var G__56391 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-9 w-full"], null);
var G__56392 = (function (){var G__56393 = (function (selected){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(labels,selected,selected);
});
return (logseq.shui.ui.select_value.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.select_value.cljs$core$IFn$_invoke$arity$1(G__56393) : logseq.shui.ui.select_value.call(null,G__56393));
})();
return (logseq.shui.ui.select_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_trigger.cljs$core$IFn$_invoke$arity$2(G__56391,G__56392) : logseq.shui.ui.select_trigger.call(null,G__56391,G__56392));
})();
var G__56390 = (function (){var G__56394 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",-1736937707),document.body], null);
var G__56395 = (function (){var G__56396 = (function (){var iter__5628__auto__ = (function frontend$components$settings$personal_access_token_select_$_iter__56397(s__56398){
return (new cljs.core.LazySeq(null,(function (){
var s__56398__$1 = s__56398;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__56398__$1);
if(temp__5825__auto__){
var s__56398__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56398__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__56398__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__56400 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__56399 = (0);
while(true){
if((i__56399 < size__5627__auto__)){
var map__56401 = cljs.core._nth(c__5626__auto__,i__56399);
var map__56401__$1 = cljs.core.__destructure_map(map__56401);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56401__$1,new cljs.core.Keyword(null,"value","value",305978217));
var label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56401__$1,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.chunk_append(b__56400,(function (){var G__56402 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),value__$1,new cljs.core.Keyword(null,"value","value",305978217),value__$1], null);
var G__56403 = label__$1;
return (logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2(G__56402,G__56403) : logseq.shui.ui.select_item.call(null,G__56402,G__56403));
})());

var G__56717 = (i__56399 + (1));
i__56399 = G__56717;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56400),frontend$components$settings$personal_access_token_select_$_iter__56397(cljs.core.chunk_rest(s__56398__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56400),null);
}
} else {
var map__56404 = cljs.core.first(s__56398__$2);
var map__56404__$1 = cljs.core.__destructure_map(map__56404);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56404__$1,new cljs.core.Keyword(null,"value","value",305978217));
var label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56404__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons((function (){var G__56405 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),value__$1,new cljs.core.Keyword(null,"value","value",305978217),value__$1], null);
var G__56406 = label__$1;
return (logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2(G__56405,G__56406) : logseq.shui.ui.select_item.call(null,G__56405,G__56406));
})(),frontend$components$settings$personal_access_token_select_$_iter__56397(cljs.core.rest(s__56398__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(items);
})();
return (logseq.shui.ui.select_group.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.select_group.cljs$core$IFn$_invoke$arity$1(G__56396) : logseq.shui.ui.select_group.call(null,G__56396));
})();
return (logseq.shui.ui.select_content.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_content.cljs$core$IFn$_invoke$arity$2(G__56394,G__56395) : logseq.shui.ui.select_content.call(null,G__56394,G__56395));
})();
return (logseq.shui.ui.select.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.select.cljs$core$IFn$_invoke$arity$3(G__56388,G__56389,G__56390) : logseq.shui.ui.select.call(null,G__56388,G__56389,G__56390));
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$personal_access_token_select__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56407 = cljs.core.first(args__31746__auto__);
var G__56408 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56407,G__56408) : io.factorhouse.hsx.core.obj_get.call(null,G__56407,G__56408));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"personal-access-token-select","personal-access-token-select",272402897,null),args__31746__auto__),frontend$components$settings$personal_access_token_select,args__31746__auto__,null);
}
};
var frontend$components$settings$personal_access_token_select = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56719__i = 0, G__56719__a = new Array(arguments.length -  0);
while (G__56719__i < G__56719__a.length) {G__56719__a[G__56719__i] = arguments[G__56719__i + 0]; ++G__56719__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56719__a,0,null);
} 
return frontend$components$settings$personal_access_token_select__delegate.call(this,args__31746__auto__);};
frontend$components$settings$personal_access_token_select.cljs$lang$maxFixedArity = 0;
frontend$components$settings$personal_access_token_select.cljs$lang$applyTo = (function (arglist__56720){
var args__31746__auto__ = cljs.core.seq(arglist__56720);
return frontend$components$settings$personal_access_token_select__delegate(args__31746__auto__);
});
frontend$components$settings$personal_access_token_select.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$personal_access_token_select__delegate;
return frontend$components$settings$personal_access_token_select;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56409 = comp__31745__auto__;
var G__56410 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56409,G__56410) : io.factorhouse.hsx.core.react_memo.call(null,G__56409,G__56410));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"personal-access-token-select");

return comp__31745__auto__;
})();
frontend.components.settings.personal_access_token_create_form = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$personal_access_token_create_form(graph_items,pending_QMARK_,set_pending_BANG_,on_created_BANG_){
var vec__56412 = logseq.shui.hooks.use_state(null);
var selected_graph = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56412,(0),null);
var set_selected_graph_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56412,(1),null);
var vec__56415 = logseq.shui.hooks.use_state("both");
var permission = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56415,(0),null);
var set_permission_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56415,(1),null);
var vec__56418 = logseq.shui.hooks.use_state(frontend.components.settings.default_pat_expiration_date());
var expiration = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56418,(0),null);
var set_expiration_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56418,(1),null);
var permission_items = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"read",new cljs.core.Keyword(null,"label","label",1718410804),frontend.components.settings.pat_permission_label("read")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"write",new cljs.core.Keyword(null,"label","label",1718410804),frontend.components.settings.pat_permission_label("write")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"both",new cljs.core.Keyword(null,"label","label",1718410804),frontend.components.settings.pat_permission_label("both")], null)], null);
var expires_at = frontend.components.settings.pat_expiration_ms(expiration);
var form_valid_QMARK_ = (function (){var and__5140__auto__ = (!((selected_graph == null)));
if(and__5140__auto__){
var and__5140__auto____$1 = expires_at;
if(cljs.core.truth_(and__5140__auto____$1)){
return (expires_at > Date.now());
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
var create_BANG_ = (function (){
if(cljs.core.truth_(form_valid_QMARK_)){
(set_pending_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_pending_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_pending_BANG_.call(null,true));

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.handler.db_based.sync._LT_create_personal_access_token_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"graph-id","graph-id",-205404489),selected_graph,new cljs.core.Keyword(null,"permission","permission",-511292572),permission,new cljs.core.Keyword(null,"expires-at","expires-at",1654982210),expires_at], null)),on_created_BANG_),(function (error){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync.personal-access-token","request-error","sync.personal-access-token/request-error",-622129909)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));

if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.settings",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db-sync","pat-create-failed","db-sync/pat-create-failed",-1930418830),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null),new cljs.core.Keyword(null,"line","line",212345235),1439], null)),null);
} else {
return null;
}
})),(function (){
return (set_pending_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_pending_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_pending_BANG_.call(null,false));
}));
} else {
return null;
}
});
logseq.shui.hooks.use_effect_BANG_((function (){
if((((selected_graph == null)) && (cljs.core.seq(graph_items)))){
var G__56421_56723 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.first(graph_items));
(set_selected_graph_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_selected_graph_BANG_.cljs$core$IFn$_invoke$arity$1(G__56421_56723) : set_selected_graph_BANG_.call(null,G__56421_56723));
} else {
}

return null;
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [graph_items,selected_graph], null));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.flex.flex-col.gap-3","section.flex.flex-col.gap-3",-962517214),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-base.font-semibold","h2.text-base.font-semibold",49152579),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync.personal-access-token","create-title","sync.personal-access-token/create-title",-615224752)], 0))], null),((cljs.core.seq(graph_items))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.gap-3.md:grid-cols-3","div.grid.gap-3.md:grid-cols-3",-551296948),frontend.components.settings.personal_access_token_select(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync.personal-access-token","graph","sync.personal-access-token/graph",-1104235969)], 0)),selected_graph,graph_items,set_selected_graph_BANG_),frontend.components.settings.personal_access_token_select(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync.personal-access-token","permission","sync.personal-access-token/permission",2144753342)], 0)),permission,permission_items,set_permission_BANG_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-1","div.flex.flex-col.gap-1",1246857632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.text-sm.opacity-70","label.text-sm.opacity-70",-1513144237),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync.personal-access-token","expiration","sync.personal-access-token/expiration",1905036371)], 0))], null),(function (){var G__56422 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"value","value",305978217),expiration,new cljs.core.Keyword(null,"min","min",444991522),frontend.components.settings.local_date_str((new Date())),new cljs.core.Keyword(null,"max","max",61366548),frontend.components.settings.local_date_str((new Date((Date.now() + frontend.components.settings.pat_one_year_ms)))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__56411_SHARP_){
var G__56423 = frontend.util.evalue(p1__56411_SHARP_);
return (set_expiration_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_expiration_BANG_.cljs$core$IFn$_invoke$arity$1(G__56423) : set_expiration_BANG_.call(null,G__56423));
})], null);
return (logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1(G__56422) : logseq.shui.ui.input.call(null,G__56422));
})()], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm.opacity-70","p.text-sm.opacity-70",1198933722),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync.personal-access-token","no-graphs","sync.personal-access-token/no-graphs",1990824761)], 0))], null)),(function (){var G__56424 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"self-start",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var or__5142__auto__ = pending_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return ((cljs.core.empty_QMARK_(graph_items)) || (cljs.core.not(form_valid_QMARK_)));
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),create_BANG_], null);
var G__56425 = frontend.ui.icon("key",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(16)], null));
var G__56426 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync.personal-access-token","create","sync.personal-access-token/create",-1715685858)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__56424,G__56425,G__56426) : logseq.shui.ui.button.call(null,G__56424,G__56425,G__56426));
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$personal_access_token_create_form__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56427 = cljs.core.first(args__31746__auto__);
var G__56428 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56427,G__56428) : io.factorhouse.hsx.core.obj_get.call(null,G__56427,G__56428));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"personal-access-token-create-form","personal-access-token-create-form",1356518153,null),args__31746__auto__),frontend$components$settings$personal_access_token_create_form,args__31746__auto__,null);
}
};
var frontend$components$settings$personal_access_token_create_form = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56729__i = 0, G__56729__a = new Array(arguments.length -  0);
while (G__56729__i < G__56729__a.length) {G__56729__a[G__56729__i] = arguments[G__56729__i + 0]; ++G__56729__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56729__a,0,null);
} 
return frontend$components$settings$personal_access_token_create_form__delegate.call(this,args__31746__auto__);};
frontend$components$settings$personal_access_token_create_form.cljs$lang$maxFixedArity = 0;
frontend$components$settings$personal_access_token_create_form.cljs$lang$applyTo = (function (arglist__56730){
var args__31746__auto__ = cljs.core.seq(arglist__56730);
return frontend$components$settings$personal_access_token_create_form__delegate(args__31746__auto__);
});
frontend$components$settings$personal_access_token_create_form.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$personal_access_token_create_form__delegate;
return frontend$components$settings$personal_access_token_create_form;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56429 = comp__31745__auto__;
var G__56430 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56429,G__56430) : io.factorhouse.hsx.core.react_memo.call(null,G__56429,G__56430));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"personal-access-token-create-form");

return comp__31745__auto__;
})();
frontend.components.settings.personal_access_token_created = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$personal_access_token_created(created_token){
var temp__5825__auto__ = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(created_token);
if(cljs.core.truth_(temp__5825__auto__)){
var token = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.flex.flex-col.gap-2.border.p-3.rounded","section.flex.flex-col.gap-2.border.p-3.rounded",-799420630),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-base.font-semibold","h2.text-base.font-semibold",49152579),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync.personal-access-token","created-title","sync.personal-access-token/created-title",1150929467)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm.opacity-70","p.text-sm.opacity-70",1198933722),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync.personal-access-token","created-warning","sync.personal-access-token/created-warning",805965615)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-2","div.flex.items-center.gap-2",-1286016734),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.flex-1.break-all.select-all","code.flex-1.break-all.select-all",-1776466462),token], null),(function (){var G__56431 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),"outline",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","copy","ui/copy",-1077613577)], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.util.copy_to_clipboard_BANG_(token);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync.personal-access-token","copied","sync.personal-access-token/copied",474692841)], 0)),new cljs.core.Keyword(null,"success","success",1890645906));
})], null);
var G__56432 = frontend.ui.icon("copy",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(16)], null));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__56431,G__56432) : logseq.shui.ui.button.call(null,G__56431,G__56432));
})()], null)], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$personal_access_token_created__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56433 = cljs.core.first(args__31746__auto__);
var G__56434 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56433,G__56434) : io.factorhouse.hsx.core.obj_get.call(null,G__56433,G__56434));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"personal-access-token-created","personal-access-token-created",-542368123,null),args__31746__auto__),frontend$components$settings$personal_access_token_created,args__31746__auto__,null);
}
};
var frontend$components$settings$personal_access_token_created = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56731__i = 0, G__56731__a = new Array(arguments.length -  0);
while (G__56731__i < G__56731__a.length) {G__56731__a[G__56731__i] = arguments[G__56731__i + 0]; ++G__56731__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56731__a,0,null);
} 
return frontend$components$settings$personal_access_token_created__delegate.call(this,args__31746__auto__);};
frontend$components$settings$personal_access_token_created.cljs$lang$maxFixedArity = 0;
frontend$components$settings$personal_access_token_created.cljs$lang$applyTo = (function (arglist__56732){
var args__31746__auto__ = cljs.core.seq(arglist__56732);
return frontend$components$settings$personal_access_token_created__delegate(args__31746__auto__);
});
frontend$components$settings$personal_access_token_created.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$personal_access_token_created__delegate;
return frontend$components$settings$personal_access_token_created;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56435 = comp__31745__auto__;
var G__56436 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56435,G__56436) : io.factorhouse.hsx.core.react_memo.call(null,G__56435,G__56436));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"personal-access-token-created");

return comp__31745__auto__;
})();
frontend.components.settings.personal_access_token_list = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$personal_access_token_list(tokens,load_error_QMARK_,pending_QMARK_,revoke_BANG_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.flex.flex-col.gap-2","section.flex.flex-col.gap-2",1235832275),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-base.font-semibold","h2.text-base.font-semibold",49152579),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync.personal-access-token","existing-title","sync.personal-access-token/existing-title",1035272747)], 0))], null),(cljs.core.truth_(load_error_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm.text-red-500","p.text-sm.text-red-500",-3822882),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync.personal-access-token","request-error","sync.personal-access-token/request-error",-622129909)], 0))], null):(((tokens == null))?frontend.ui.loading.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","loading","ui/loading",-736989697)], 0))):((cljs.core.empty_QMARK_(tokens))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm.opacity-70","p.text-sm.opacity-70",1198933722),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync.personal-access-token","empty","sync.personal-access-token/empty",129287164)], 0))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.divide-y","div.divide-y",400365085),(function (){var iter__5628__auto__ = (function frontend$components$settings$personal_access_token_list_$_iter__56437(s__56438){
return (new cljs.core.LazySeq(null,(function (){
var s__56438__$1 = s__56438;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__56438__$1);
if(temp__5825__auto__){
var s__56438__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56438__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__56438__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__56440 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__56439 = (0);
while(true){
if((i__56439 < size__5627__auto__)){
var map__56441 = cljs.core._nth(c__5626__auto__,i__56439);
var map__56441__$1 = cljs.core.__destructure_map(map__56441);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56441__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var graph_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56441__$1,new cljs.core.Keyword(null,"graph-name","graph-name",416773857));
var token_prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56441__$1,new cljs.core.Keyword(null,"token-prefix","token-prefix",1920979005));
var permission = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56441__$1,new cljs.core.Keyword(null,"permission","permission",-511292572));
var created_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56441__$1,new cljs.core.Keyword(null,"created-at","created-at",-89248644));
var expires_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56441__$1,new cljs.core.Keyword(null,"expires-at","expires-at",1654982210));
cljs.core.chunk_append(b__56440,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.justify-between.gap-4.py-3","div.flex.items-center.justify-between.gap-4.py-3",-1431521982),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.min-w-0.flex.flex-col.gap-1","div.min-w-0.flex.flex-col.gap-1",882001524),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-2.flex-wrap","div.flex.items-center.gap-2.flex-wrap",928052943),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(token_prefix)+"...")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.font-medium","span.text-sm.font-medium",-2002622722),(function (){var or__5142__auto__ = graph_name;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync.personal-access-token","deleted-graph","sync.personal-access-token/deleted-graph",-1687634408)], 0));
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.opacity-60","span.text-xs.opacity-60",-1942067159),frontend.components.settings.pat_permission_label(permission)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.opacity-60","div.text-xs.opacity-60",990260921),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync.personal-access-token","date-summary","sync.personal-access-token/date-summary",1395911983),frontend.context.i18n.locale_format_date.cljs$core$IFn$_invoke$arity$1((new Date(created_at))),frontend.context.i18n.locale_format_date.cljs$core$IFn$_invoke$arity$1((new Date(expires_at)))], 0))], null)], null),(function (){var G__56442 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),"ghost",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),pending_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__56439,map__56441,map__56441__$1,id,graph_name,token_prefix,permission,created_at,expires_at,c__5626__auto__,size__5627__auto__,b__56440,s__56438__$2,temp__5825__auto__){
return (function (){
return (revoke_BANG_.cljs$core$IFn$_invoke$arity$1 ? revoke_BANG_.cljs$core$IFn$_invoke$arity$1(id) : revoke_BANG_.call(null,id));
});})(i__56439,map__56441,map__56441__$1,id,graph_name,token_prefix,permission,created_at,expires_at,c__5626__auto__,size__5627__auto__,b__56440,s__56438__$2,temp__5825__auto__))
], null);
var G__56443 = frontend.ui.icon("trash",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(16)], null));
var G__56444 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync.personal-access-token","revoke","sync.personal-access-token/revoke",-1474611895)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__56442,G__56443,G__56444) : logseq.shui.ui.button.call(null,G__56442,G__56443,G__56444));
})()], null));

var G__56736 = (i__56439 + (1));
i__56439 = G__56736;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56440),frontend$components$settings$personal_access_token_list_$_iter__56437(cljs.core.chunk_rest(s__56438__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56440),null);
}
} else {
var map__56445 = cljs.core.first(s__56438__$2);
var map__56445__$1 = cljs.core.__destructure_map(map__56445);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56445__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var graph_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56445__$1,new cljs.core.Keyword(null,"graph-name","graph-name",416773857));
var token_prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56445__$1,new cljs.core.Keyword(null,"token-prefix","token-prefix",1920979005));
var permission = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56445__$1,new cljs.core.Keyword(null,"permission","permission",-511292572));
var created_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56445__$1,new cljs.core.Keyword(null,"created-at","created-at",-89248644));
var expires_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56445__$1,new cljs.core.Keyword(null,"expires-at","expires-at",1654982210));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.justify-between.gap-4.py-3","div.flex.items-center.justify-between.gap-4.py-3",-1431521982),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.min-w-0.flex.flex-col.gap-1","div.min-w-0.flex.flex-col.gap-1",882001524),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-2.flex-wrap","div.flex.items-center.gap-2.flex-wrap",928052943),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(token_prefix)+"...")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.font-medium","span.text-sm.font-medium",-2002622722),(function (){var or__5142__auto__ = graph_name;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync.personal-access-token","deleted-graph","sync.personal-access-token/deleted-graph",-1687634408)], 0));
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.opacity-60","span.text-xs.opacity-60",-1942067159),frontend.components.settings.pat_permission_label(permission)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.opacity-60","div.text-xs.opacity-60",990260921),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync.personal-access-token","date-summary","sync.personal-access-token/date-summary",1395911983),frontend.context.i18n.locale_format_date.cljs$core$IFn$_invoke$arity$1((new Date(created_at))),frontend.context.i18n.locale_format_date.cljs$core$IFn$_invoke$arity$1((new Date(expires_at)))], 0))], null)], null),(function (){var G__56446 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),"ghost",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),pending_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__56445,map__56445__$1,id,graph_name,token_prefix,permission,created_at,expires_at,s__56438__$2,temp__5825__auto__){
return (function (){
return (revoke_BANG_.cljs$core$IFn$_invoke$arity$1 ? revoke_BANG_.cljs$core$IFn$_invoke$arity$1(id) : revoke_BANG_.call(null,id));
});})(map__56445,map__56445__$1,id,graph_name,token_prefix,permission,created_at,expires_at,s__56438__$2,temp__5825__auto__))
], null);
var G__56447 = frontend.ui.icon("trash",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(16)], null));
var G__56448 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync.personal-access-token","revoke","sync.personal-access-token/revoke",-1474611895)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__56446,G__56447,G__56448) : logseq.shui.ui.button.call(null,G__56446,G__56447,G__56448));
})()], null),frontend$components$settings$personal_access_token_list_$_iter__56437(cljs.core.rest(s__56438__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(tokens);
})()], null)
)))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$personal_access_token_list__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56449 = cljs.core.first(args__31746__auto__);
var G__56450 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56449,G__56450) : io.factorhouse.hsx.core.obj_get.call(null,G__56449,G__56450));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"personal-access-token-list","personal-access-token-list",-484194199,null),args__31746__auto__),frontend$components$settings$personal_access_token_list,args__31746__auto__,null);
}
};
var frontend$components$settings$personal_access_token_list = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56741__i = 0, G__56741__a = new Array(arguments.length -  0);
while (G__56741__i < G__56741__a.length) {G__56741__a[G__56741__i] = arguments[G__56741__i + 0]; ++G__56741__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56741__a,0,null);
} 
return frontend$components$settings$personal_access_token_list__delegate.call(this,args__31746__auto__);};
frontend$components$settings$personal_access_token_list.cljs$lang$maxFixedArity = 0;
frontend$components$settings$personal_access_token_list.cljs$lang$applyTo = (function (arglist__56742){
var args__31746__auto__ = cljs.core.seq(arglist__56742);
return frontend$components$settings$personal_access_token_list__delegate(args__31746__auto__);
});
frontend$components$settings$personal_access_token_list.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$personal_access_token_list__delegate;
return frontend$components$settings$personal_access_token_list;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56451 = comp__31745__auto__;
var G__56452 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56451,G__56452) : io.factorhouse.hsx.core.react_memo.call(null,G__56451,G__56452));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"personal-access-token-list");

return comp__31745__auto__;
})();
frontend.components.settings.settings_personal_access_tokens = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$settings_personal_access_tokens(){
var graphs = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rtc","graphs","rtc/graphs",-1584628267)], null));
var vec__56454 = logseq.shui.hooks.use_state(null);
var tokens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56454,(0),null);
var set_tokens_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56454,(1),null);
var vec__56457 = logseq.shui.hooks.use_state(null);
var created_token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56457,(0),null);
var set_created_token_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56457,(1),null);
var vec__56460 = logseq.shui.hooks.use_state(false);
var pending_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56460,(0),null);
var set_pending_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56460,(1),null);
var vec__56463 = logseq.shui.hooks.use_state(false);
var load_error_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56463,(0),null);
var set_load_error_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56463,(1),null);
var graph_items = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__56466){
var map__56467 = p__56466;
var map__56467__$1 = cljs.core.__destructure_map(map__56467);
var GraphName = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56467__$1,new cljs.core.Keyword(null,"GraphName","GraphName",-960661337));
var GraphUUID = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56467__$1,new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531));
var graph_e2ee_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56467__$1,new cljs.core.Keyword(null,"graph-e2ee?","graph-e2ee?",-1495428226));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(GraphUUID)),new cljs.core.Keyword(null,"label","label",1718410804),(cljs.core.truth_(graph_e2ee_QMARK_)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(GraphName)+" (E2EE)"):GraphName)], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__56468){
var map__56469 = p__56468;
var map__56469__$1 = cljs.core.__destructure_map(map__56469);
var graph_ready_for_use_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56469__$1,new cljs.core.Keyword(null,"graph-ready-for-use?","graph-ready-for-use?",-1081605254));
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(false,graph_ready_for_use_QMARK_);
}),graphs));
var load_tokens_BANG_ = (function (){
(set_load_error_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_load_error_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_load_error_BANG_.call(null,false));

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.handler.db_based.sync._LT_personal_access_tokens(),(function (result){
var G__56470 = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(result);
return (set_tokens_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_tokens_BANG_.cljs$core$IFn$_invoke$arity$1(G__56470) : set_tokens_BANG_.call(null,G__56470));
})),(function (error){
(set_load_error_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_load_error_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_load_error_BANG_.call(null,true));

if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.settings",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db-sync","pat-list-failed","db-sync/pat-list-failed",-649815092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null),new cljs.core.Keyword(null,"line","line",212345235),1550], null)),null);
} else {
return null;
}
}));
});
var on_created_BANG_ = (function (result){
(set_created_token_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_created_token_BANG_.cljs$core$IFn$_invoke$arity$1(result) : set_created_token_BANG_.call(null,result));

return load_tokens_BANG_();
});
var revoke_BANG_ = (function (token_id){
if(cljs.core.truth_(confirm(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync.personal-access-token","revoke-confirm","sync.personal-access-token/revoke-confirm",-372367535)], 0))))){
(set_pending_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_pending_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_pending_BANG_.call(null,true));

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.handler.db_based.sync._LT_revoke_personal_access_token_BANG_(token_id),(function (){
var G__56471 = cljs.core.filterv((function (p1__56453_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(token_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56453_SHARP_));
}),tokens);
return (set_tokens_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_tokens_BANG_.cljs$core$IFn$_invoke$arity$1(G__56471) : set_tokens_BANG_.call(null,G__56471));
})),(function (error){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync.personal-access-token","request-error","sync.personal-access-token/request-error",-622129909)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));

if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.settings",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db-sync","pat-revoke-failed","db-sync/pat-revoke-failed",-1006448918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null),new cljs.core.Keyword(null,"line","line",212345235),1564], null)),null);
} else {
return null;
}
})),(function (){
return (set_pending_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_pending_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_pending_BANG_.call(null,false));
}));
} else {
return null;
}
});
logseq.shui.hooks.use_effect_BANG_((function (){
load_tokens_BANG_();

if(cljs.core.empty_QMARK_(graphs)){
frontend.handler.db_based.sync._LT_get_remote_graphs();
} else {
}

return null;
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-wrap.is-personal-access-tokens.mb-8.flex.flex-col.gap-6","div.panel-wrap.is-personal-access-tokens.mb-8.flex.flex-col.gap-6",1896023942),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm.opacity-70","p.text-sm.opacity-70",1198933722),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync.personal-access-token","description","sync.personal-access-token/description",-1943412438)], 0))," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.external-link","a.external-link",-654902016),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"https://api.logseq.io/api-docs",new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"rel","rel",1378823488),"noreferrer"], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync.personal-access-token","api-docs","sync.personal-access-token/api-docs",-1287363890)], 0))], null)], null),frontend.components.settings.personal_access_token_create_form(graph_items,pending_QMARK_,set_pending_BANG_,on_created_BANG_),frontend.components.settings.personal_access_token_created(created_token),frontend.components.settings.personal_access_token_list(tokens,load_error_QMARK_,pending_QMARK_,revoke_BANG_)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$settings_personal_access_tokens__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56472 = cljs.core.first(args__31746__auto__);
var G__56473 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56472,G__56473) : io.factorhouse.hsx.core.obj_get.call(null,G__56472,G__56473));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"settings-personal-access-tokens","settings-personal-access-tokens",1553654978,null),args__31746__auto__),frontend$components$settings$settings_personal_access_tokens,args__31746__auto__,null);
}
};
var frontend$components$settings$settings_personal_access_tokens = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56751__i = 0, G__56751__a = new Array(arguments.length -  0);
while (G__56751__i < G__56751__a.length) {G__56751__a[G__56751__i] = arguments[G__56751__i + 0]; ++G__56751__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56751__a,0,null);
} 
return frontend$components$settings$settings_personal_access_tokens__delegate.call(this,args__31746__auto__);};
frontend$components$settings$settings_personal_access_tokens.cljs$lang$maxFixedArity = 0;
frontend$components$settings$settings_personal_access_tokens.cljs$lang$applyTo = (function (arglist__56752){
var args__31746__auto__ = cljs.core.seq(arglist__56752);
return frontend$components$settings$settings_personal_access_tokens__delegate(args__31746__auto__);
});
frontend$components$settings$settings_personal_access_tokens.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$settings_personal_access_tokens__delegate;
return frontend$components$settings$settings_personal_access_tokens;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56474 = comp__31745__auto__;
var G__56475 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56474,G__56475) : io.factorhouse.hsx.core.react_memo.call(null,G__56474,G__56475));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"settings-personal-access-tokens");

return comp__31745__auto__;
})();
frontend.components.settings.forgot_password = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$forgot_password(token,refresh_token,user_uuid){
var vec__56477 = logseq.shui.hooks.use_state("");
var new_password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56477,(0),null);
var set_new_password_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56477,(1),null);
var vec__56480 = logseq.shui.hooks.use_state(null);
var force_reset_status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56480,(0),null);
var set_force_reset_status_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56480,(1),null);
var _LT_force_reset_password_fn = (function (){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__56483 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","force-resetting-password","encryption/force-resetting-password",945550315)], 0));
return (set_force_reset_status_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_force_reset_status_BANG_.cljs$core$IFn$_invoke$arity$1(G__56483) : set_force_reset_status_BANG_.call(null,G__56483));
})()),(function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","reset-user-rsa-key-pair","thread-api/reset-user-rsa-key-pair",1569592331),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([token,refresh_token,user_uuid,new_password], 0))),(function (___21901__auto____$1){
return promesa.protocols._promise((function (){var G__56484 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","force-reset-password-successfully","encryption/force-reset-password-successfully",1311882473)], 0));
return (set_force_reset_status_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_force_reset_status_BANG_.cljs$core$IFn$_invoke$arity$1(G__56484) : set_force_reset_status_BANG_.call(null,G__56484));
})());
}));
}));
})),(function (e){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.settings",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forgot-password","forgot-password",-905397230),e,new cljs.core.Keyword(null,"line","line",212345235),1599], null)),null);
} else {
}

var G__56485 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","failed-to-force-reset-password","encryption/failed-to-force-reset-password",-491983153)], 0));
return (set_force_reset_status_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_force_reset_status_BANG_.cljs$core$IFn$_invoke$arity$1(G__56485) : set_force_reset_status_BANG_.call(null,G__56485));
}));
});
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-4","div.flex.flex-col.gap-4",-1215558137),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","forgot-password-warning","encryption/forgot-password-warning",-516232691)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.opacity-70","label.opacity-70",-1240930626),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"new-password"], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","set-new-password","encryption/set-new-password",-1702244385)], 0))], null),logseq.shui.ui.toggle_password(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"new-password",new cljs.core.Keyword(null,"value","value",305978217),new_password,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__56476_SHARP_){
var G__56486 = frontend.util.evalue(p1__56476_SHARP_);
return (set_new_password_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_new_password_BANG_.cljs$core$IFn$_invoke$arity$1(G__56486) : set_new_password_BANG_.call(null,G__56486));
})], null)),(cljs.core.truth_(force_reset_status)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),force_reset_status], null):null),(function (){var G__56487 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),_LT_force_reset_password_fn,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),clojure.string.blank_QMARK_(new_password)], null);
var G__56488 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","force-reset-password","encryption/force-reset-password",1782394082)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__56487,G__56488) : logseq.shui.ui.button.call(null,G__56487,G__56488));
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$forgot_password__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56489 = cljs.core.first(args__31746__auto__);
var G__56490 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56489,G__56490) : io.factorhouse.hsx.core.obj_get.call(null,G__56489,G__56490));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"forgot-password","forgot-password",735134297,null),args__31746__auto__),frontend$components$settings$forgot_password,args__31746__auto__,null);
}
};
var frontend$components$settings$forgot_password = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56757__i = 0, G__56757__a = new Array(arguments.length -  0);
while (G__56757__i < G__56757__a.length) {G__56757__a[G__56757__i] = arguments[G__56757__i + 0]; ++G__56757__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56757__a,0,null);
} 
return frontend$components$settings$forgot_password__delegate.call(this,args__31746__auto__);};
frontend$components$settings$forgot_password.cljs$lang$maxFixedArity = 0;
frontend$components$settings$forgot_password.cljs$lang$applyTo = (function (arglist__56758){
var args__31746__auto__ = cljs.core.seq(arglist__56758);
return frontend$components$settings$forgot_password__delegate(args__31746__auto__);
});
frontend$components$settings$forgot_password.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$forgot_password__delegate;
return frontend$components$settings$forgot_password;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56491 = comp__31745__auto__;
var G__56492 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56491,G__56492) : io.factorhouse.hsx.core.react_memo.call(null,G__56491,G__56492));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"forgot-password");

return comp__31745__auto__;
})();
frontend.components.settings.reset_encryption_password = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$reset_encryption_password(current_password,new_password,p__56495){
var map__56496 = p__56495;
var map__56496__$1 = cljs.core.__destructure_map(map__56496);
var set_new_password_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56496__$1,new cljs.core.Keyword(null,"set-new-password!","set-new-password!",1705707324));
var set_forgot_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56496__$1,new cljs.core.Keyword(null,"set-forgot!","set-forgot!",-1969262595));
var user_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56496__$1,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048));
var refresh_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56496__$1,new cljs.core.Keyword(null,"refresh-token","refresh-token",-1032003584));
var reset_password_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56496__$1,new cljs.core.Keyword(null,"reset-password-status","reset-password-status",410271852));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56496__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56496__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var set_current_password_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56496__$1,new cljs.core.Keyword(null,"set-current-password!","set-current-password!",-1945071));
var forgot_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56496__$1,new cljs.core.Keyword(null,"forgot?","forgot?",2060964502));
var vec__56497 = logseq.shui.hooks.use_state(false);
var reset_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56497,(0),null);
var set_reset_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56497,(1),null);
if(cljs.core.truth_(forgot_QMARK_)){
return frontend.components.settings.forgot_password(token,refresh_token,user_uuid);
} else {
if(cljs.core.truth_(reset_QMARK_)){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-4","div.flex.flex-col.gap-4",-1215558137),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.opacity-70","label.opacity-70",-1240930626),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"current-password"], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","current-password","encryption/current-password",-1386850633)], 0))], null),logseq.shui.ui.toggle_password(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"current-password",new cljs.core.Keyword(null,"value","value",305978217),current_password,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__56493_SHARP_){
var G__56500 = frontend.util.evalue(p1__56493_SHARP_);
return (set_current_password_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_password_BANG_.cljs$core$IFn$_invoke$arity$1(G__56500) : set_current_password_BANG_.call(null,G__56500));
})], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.opacity-70","label.opacity-70",-1240930626),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"new-password"], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","set-new-password","encryption/set-new-password",-1702244385)], 0))], null),logseq.shui.ui.toggle_password(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"new-password",new cljs.core.Keyword(null,"value","value",305978217),new_password,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__56494_SHARP_){
var G__56501 = frontend.util.evalue(p1__56494_SHARP_);
return (set_new_password_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_new_password_BANG_.cljs$core$IFn$_invoke$arity$1(G__56501) : set_new_password_BANG_.call(null,G__56501));
})], null)),(cljs.core.truth_(reset_password_status)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),reset_password_status], null):null),(function (){var G__56502 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),clojure.string.blank_QMARK_(new_password)], null);
var G__56503 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","reset-password","encryption/reset-password",370306956)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__56502,G__56503) : logseq.shui.ui.button.call(null,G__56502,G__56503));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.opacity-70.hover:opacity-100","a.opacity-70.hover:opacity-100",1206038699),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (set_forgot_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_forgot_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_forgot_BANG_.call(null,true));
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","forgot-password-question","encryption/forgot-password-question",-62006803)], 0))], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.opacity-70.hover:opacity-100","a.opacity-70.hover:opacity-100",1206038699),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (set_reset_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_reset_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_reset_BANG_.call(null,true));
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","reset-password","encryption/reset-password",370306956)], 0))], null);

}
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$reset_encryption_password__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56504 = cljs.core.first(args__31746__auto__);
var G__56505 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56504,G__56505) : io.factorhouse.hsx.core.obj_get.call(null,G__56504,G__56505));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"reset-encryption-password","reset-encryption-password",-1245468861,null),args__31746__auto__),frontend$components$settings$reset_encryption_password,args__31746__auto__,null);
}
};
var frontend$components$settings$reset_encryption_password = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56764__i = 0, G__56764__a = new Array(arguments.length -  0);
while (G__56764__i < G__56764__a.length) {G__56764__a[G__56764__i] = arguments[G__56764__i + 0]; ++G__56764__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56764__a,0,null);
} 
return frontend$components$settings$reset_encryption_password__delegate.call(this,args__31746__auto__);};
frontend$components$settings$reset_encryption_password.cljs$lang$maxFixedArity = 0;
frontend$components$settings$reset_encryption_password.cljs$lang$applyTo = (function (arglist__56765){
var args__31746__auto__ = cljs.core.seq(arglist__56765);
return frontend$components$settings$reset_encryption_password__delegate(args__31746__auto__);
});
frontend$components$settings$reset_encryption_password.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$reset_encryption_password__delegate;
return frontend$components$settings$reset_encryption_password;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56506 = comp__31745__auto__;
var G__56507 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56506,G__56507) : io.factorhouse.hsx.core.react_memo.call(null,G__56506,G__56507));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"reset-encryption-password");

return comp__31745__auto__;
})();
frontend.components.settings.exported_key__GT_base64 = (function frontend$components$settings$exported_key__GT_base64(u8){
if((u8 instanceof Uint8Array)){
return btoa(Array.from(u8,(function (b){
return String.fromCharCode(b);
})).join(""));
} else {
return null;
}
});
frontend.components.settings.transit__GT_exported_key_base64 = (function frontend$components$settings$transit__GT_exported_key_base64(value){
if(typeof value === 'string'){
try{return frontend.components.settings.exported_key__GT_base64(logseq.db.read_transit_str(value));
}catch (e56508){var _ = e56508;
return null;
}} else {
return null;
}
});
frontend.components.settings.encryption_key_display = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$encryption_key_display(rsa_key_pair){
var public_key_base64 = frontend.components.settings.transit__GT_exported_key_base64(new cljs.core.Keyword(null,"public-key","public-key",-2106850051).cljs$core$IFn$_invoke$arity$1(rsa_key_pair));
var vec__56509 = logseq.shui.hooks.use_state(null);
var private_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56509,(0),null);
var set_private_key_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56509,(1),null);
var reveal_private_key_BANG_ = (function (){
var private_key_promise = promesa.core.deferred();
var encrypted_private_key = logseq.db.read_transit_str(new cljs.core.Keyword(null,"encrypted-private-key","encrypted-private-key",1069899594).cljs$core$IFn$_invoke$arity$1(rsa_key_pair));
var G__56512_56768 = (function (){
return frontend.components.e2ee.e2ee_password_to_decrypt_private_key(encrypted_private_key,private_key_promise);
});
var G__56513_56769 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"auto-width?","auto-width?",93515862),true,new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (){
promesa.core.reject_BANG_(private_key_promise,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cancelled",cljs.core.PersistentArrayMap.EMPTY));

return (logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dialog_close_BANG_.call(null));
})], null);
(logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2(G__56512_56768,G__56513_56769) : logseq.shui.ui.dialog_open_BANG_.call(null,G__56512_56768,G__56513_56769));

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(private_key_promise),(function (private_key_SINGLEQUOTE_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.crypt._LT_export_private_key(private_key_SINGLEQUOTE_)),(function (exported){
return promesa.protocols._promise((function (){var G__56514 = frontend.components.settings.exported_key__GT_base64(exported);
return (set_private_key_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_private_key_BANG_.cljs$core$IFn$_invoke$arity$1(G__56514) : set_private_key_BANG_.call(null,G__56514));
})());
}));
}));
})),(function (_){
return null;
}));
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-3","div.flex.flex-col.gap-3",-1634021513),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-1","div.flex.flex-col.gap-1",1246857632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm.opacity-70","p.text-sm.opacity-70",1198933722),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","public-key","encryption/public-key",1481078140)], 0))], null),((typeof public_key_base64 === 'string')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-start.gap-2","div.flex.items-start.gap-2",-1650448530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.text-xs.break-all.flex-1.select-all","code.text-xs.break-all.flex-1.select-all",1469649130),public_key_base64], null),(function (){var G__56515 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"outline",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.util.copy_to_clipboard_BANG_(public_key_base64);
})], null);
var G__56516 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","copy-key","encryption/copy-key",169788351)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__56515,G__56516) : logseq.shui.ui.button.call(null,G__56515,G__56516));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm.opacity-70","p.text-sm.opacity-70",1198933722),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","key-unavailable","encryption/key-unavailable",-927478793)], 0))], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-1","div.flex.flex-col.gap-1",1246857632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm.opacity-70","p.text-sm.opacity-70",1198933722),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","private-key","encryption/private-key",-1286295739)], 0))], null),((typeof private_key === 'string')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-start.gap-2","div.flex.items-start.gap-2",-1650448530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.text-xs.break-all.flex-1.select-all","code.text-xs.break-all.flex-1.select-all",1469649130),private_key], null),(function (){var G__56517 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"outline",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.util.copy_to_clipboard_BANG_(private_key);
})], null);
var G__56518 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","copy-key","encryption/copy-key",169788351)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__56517,G__56518) : logseq.shui.ui.button.call(null,G__56517,G__56518));
})()], null):(function (){var G__56519 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"outline",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),reveal_private_key_BANG_], null);
var G__56520 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","show-private-key","encryption/show-private-key",454475335)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__56519,G__56520) : logseq.shui.ui.button.call(null,G__56519,G__56520));
})())], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$encryption_key_display__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56521 = cljs.core.first(args__31746__auto__);
var G__56522 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56521,G__56522) : io.factorhouse.hsx.core.obj_get.call(null,G__56521,G__56522));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"encryption-key-display","encryption-key-display",209734386,null),args__31746__auto__),frontend$components$settings$encryption_key_display,args__31746__auto__,null);
}
};
var frontend$components$settings$encryption_key_display = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56773__i = 0, G__56773__a = new Array(arguments.length -  0);
while (G__56773__i < G__56773__a.length) {G__56773__a[G__56773__i] = arguments[G__56773__i + 0]; ++G__56773__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56773__a,0,null);
} 
return frontend$components$settings$encryption_key_display__delegate.call(this,args__31746__auto__);};
frontend$components$settings$encryption_key_display.cljs$lang$maxFixedArity = 0;
frontend$components$settings$encryption_key_display.cljs$lang$applyTo = (function (arglist__56774){
var args__31746__auto__ = cljs.core.seq(arglist__56774);
return frontend$components$settings$encryption_key_display__delegate(args__31746__auto__);
});
frontend$components$settings$encryption_key_display.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$encryption_key_display__delegate;
return frontend$components$settings$encryption_key_display;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56523 = comp__31745__auto__;
var G__56524 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56523,G__56524) : io.factorhouse.hsx.core.react_memo.call(null,G__56523,G__56524));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"encryption-key-display");

return comp__31745__auto__;
})();
frontend.components.settings.encryption = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$encryption(){
var user_uuid = frontend.handler.user.user_uuid();
var token = frontend.state.get_auth_id_token();
var refresh_token = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.state.get_auth_refresh_token()));
var vec__56525 = logseq.shui.hooks.use_state(new cljs.core.Keyword(null,"not-inited","not-inited",1301268145));
var rsa_key_pair = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56525,(0),null);
var set_rsa_key_pair_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56525,(1),null);
var vec__56528 = logseq.shui.hooks.use_state(null);
var init_key_err = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56528,(0),null);
var set_init_key_err_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56528,(1),null);
var vec__56531 = logseq.shui.hooks.use_state(null);
var get_key_err = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56531,(0),null);
var set_get_key_err_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56531,(1),null);
var vec__56534 = logseq.shui.hooks.use_state(null);
var current_password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56534,(0),null);
var set_current_password_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56534,(1),null);
var vec__56537 = logseq.shui.hooks.use_state(null);
var new_password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56537,(0),null);
var set_new_password_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56537,(1),null);
var vec__56540 = logseq.shui.hooks.use_state(null);
var reset_password_status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56540,(0),null);
var set_reset_password_status_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56540,(1),null);
var vec__56543 = logseq.shui.hooks.use_state(false);
var forgot_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56543,(0),null);
var set_forgot_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56543,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-wrap.is-encryption.mb-8","div.panel-wrap.is-encryption.mb-8",-319753076),logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_((function (){var and__5140__auto__ = user_uuid;
if(cljs.core.truth_(and__5140__auto__)){
return token;
} else {
return and__5140__auto__;
}
})())){
promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-user-rsa-key-pair","thread-api/get-user-rsa-key-pair",939231991),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([token,user_uuid], 0))),(function (r){
return promesa.protocols._promise((set_rsa_key_pair_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_rsa_key_pair_BANG_.cljs$core$IFn$_invoke$arity$1(r) : set_rsa_key_pair_BANG_.call(null,r)));
}));
})),set_get_key_err_BANG_);

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-e2ee-password","thread-api/get-e2ee-password",754926947),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([refresh_token], 0))),(function (p__56546){
var map__56547 = p__56546;
var map__56547__$1 = cljs.core.__destructure_map(map__56547);
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56547__$1,new cljs.core.Keyword(null,"password","password",417022471));
return promesa.protocols._promise((set_current_password_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_password_BANG_.cljs$core$IFn$_invoke$arity$1(password) : set_current_password_BANG_.call(null,password)));
}));
})),(function (_){
return (set_current_password_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_password_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_current_password_BANG_.call(null,""));
}));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [user_uuid,token], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-2.mt-4","div.flex.flex-col.gap-2.mt-4",763336060),(cljs.core.truth_((function (){var and__5140__auto__ = user_uuid;
if(cljs.core.truth_(and__5140__auto__)){
return token;
} else {
return and__5140__auto__;
}
})())?(cljs.core.truth_(get_key_err)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","fetch-key-pair-error","encryption/fetch-key-pair-error",1342168890),get_key_err], 0))], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rsa_key_pair,new cljs.core.Keyword(null,"not-inited","not-inited",1301268145)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","fetching-key-pair","encryption/fetching-key-pair",505537164)], 0))], null):(((rsa_key_pair == null))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-2","div.flex.flex-col.gap-2",1564729900),(cljs.core.truth_(init_key_err)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","init-key-pair-error","encryption/init-key-pair-error",799672195),init_key_err], 0))], null):null),(function (){var G__56548 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","init-user-rsa-key-pair","thread-api/init-user-rsa-key-pair",1301682444),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([token,refresh_token,user_uuid], 0))),(function (___21901__auto__){
return promesa.protocols._promise(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-user-rsa-key-pair","thread-api/get-user-rsa-key-pair",939231991),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([token,user_uuid], 0))),(function (r){
return promesa.protocols._promise((set_rsa_key_pair_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_rsa_key_pair_BANG_.cljs$core$IFn$_invoke$arity$1(r) : set_rsa_key_pair_BANG_.call(null,r)));
}));
})));
}));
})),set_init_key_err_BANG_);
})], null);
var G__56549 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","init-key-pair","encryption/init-key-pair",-1655954622)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__56548,G__56549) : logseq.shui.ui.button.call(null,G__56548,G__56549));
})()], null):(cljs.core.truth_(rsa_key_pair)?(function (){var on_submit = (function (){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__56550 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","updating-password","encryption/updating-password",-1516101314)], 0));
return (set_reset_password_status_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_reset_password_status_BANG_.cljs$core$IFn$_invoke$arity$1(G__56550) : set_reset_password_status_BANG_.call(null,G__56550));
})()),(function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","change-e2ee-password","thread-api/change-e2ee-password",1528960857),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([token,refresh_token,user_uuid,current_password,new_password], 0))),(function (___21901__auto____$1){
return promesa.protocols._promise((function (){var G__56551 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","password-updated-successfully","encryption/password-updated-successfully",-1441770236)], 0));
return (set_reset_password_status_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_reset_password_status_BANG_.cljs$core$IFn$_invoke$arity$1(G__56551) : set_reset_password_status_BANG_.call(null,G__56551));
})());
}));
}));
})),(function (e){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.settings",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reset-password-failed","reset-password-failed",-1397719746),e,new cljs.core.Keyword(null,"line","line",212345235),1756], null)),null);
} else {
}

var G__56552 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","failed-to-update-password","encryption/failed-to-update-password",772073584)], 0));
return (set_reset_password_status_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_reset_password_status_BANG_.cljs$core$IFn$_invoke$arity$1(G__56552) : set_reset_password_status_BANG_.call(null,G__56552));
}));
});
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-4","div.flex.flex-col.gap-4",-1215558137),frontend.components.settings.encryption_key_display(rsa_key_pair),(cljs.core.truth_(forgot_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col","div.flex.flex-col",255067761),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","remember-password-rich","encryption/remember-password-rich",464590241)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","cloud-password-rich","encryption/cloud-password-rich",62160664)], 0))], null)], null)),frontend.components.settings.reset_encryption_password(current_password,new_password,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"refresh-token","refresh-token",-1032003584),new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),new cljs.core.Keyword(null,"reset-password-status","reset-password-status",410271852),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"set-current-password!","set-current-password!",-1945071),new cljs.core.Keyword(null,"forgot?","forgot?",2060964502),new cljs.core.Keyword(null,"set-new-password!","set-new-password!",1705707324),new cljs.core.Keyword(null,"set-forgot!","set-forgot!",-1969262595)],[refresh_token,user_uuid,reset_password_status,on_submit,token,set_current_password_BANG_,forgot_QMARK_,set_new_password_BANG_,set_forgot_BANG_]))], null);
})():null)))):null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$encryption__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56553 = cljs.core.first(args__31746__auto__);
var G__56554 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56553,G__56554) : io.factorhouse.hsx.core.obj_get.call(null,G__56553,G__56554));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"encryption","encryption",-1722107784,null),args__31746__auto__),frontend$components$settings$encryption,args__31746__auto__,null);
}
};
var frontend$components$settings$encryption = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56788__i = 0, G__56788__a = new Array(arguments.length -  0);
while (G__56788__i < G__56788__a.length) {G__56788__a[G__56788__i] = arguments[G__56788__i + 0]; ++G__56788__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56788__a,0,null);
} 
return frontend$components$settings$encryption__delegate.call(this,args__31746__auto__);};
frontend$components$settings$encryption.cljs$lang$maxFixedArity = 0;
frontend$components$settings$encryption.cljs$lang$applyTo = (function (arglist__56789){
var args__31746__auto__ = cljs.core.seq(arglist__56789);
return frontend$components$settings$encryption__delegate(args__31746__auto__);
});
frontend$components$settings$encryption.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$encryption__delegate;
return frontend$components$settings$encryption;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56555 = comp__31745__auto__;
var G__56556 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56555,G__56556) : io.factorhouse.hsx.core.react_memo.call(null,G__56555,G__56556));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"encryption");

return comp__31745__auto__;
})();
frontend.components.settings.mcp_server_row = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$mcp_server_row(t){
var server_state = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","server","electron/server",1484164422)], null));
var vec__56558 = logseq.shui.hooks.use_state(false);
var checked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56558,(0),null);
var set_checked_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56558,(1),null);
logseq.shui.hooks.use_effect_BANG_((function (){
var initial = new cljs.core.Keyword(null,"mcp-enabled?","mcp-enabled?",-1213528614).cljs$core$IFn$_invoke$arity$1(server_state);
return (set_checked_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_checked_BANG_.cljs$core$IFn$_invoke$arity$1(initial) : set_checked_BANG_.call(null,initial));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [server_state], null));

var on_toggle = (function (){
var new_val = cljs.core.not(checked);
(set_checked_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_checked_BANG_.cljs$core$IFn$_invoke$arity$1(new_val) : set_checked_BANG_.call(null,new_val));

if(((new_val) && (cljs.core.not(frontend.storage.get(new cljs.core.Keyword("frontend.spec.storage","http-server-enabled","frontend.spec.storage/http-server-enabled",-1753032348)))))){
frontend.storage.set(new cljs.core.Keyword("frontend.spec.storage","http-server-enabled","frontend.spec.storage/http-server-enabled",-1753032348),true);
} else {
}

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server","set-config","server/set-config",1464784658),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mcp-enabled?","mcp-enabled?",-1213528614),new_val], null)], 0)),(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("running",frontend.state.get_state(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","server","electron/server",1484164422),new cljs.core.Keyword(null,"status","status",-1997798413)], null)))){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.delay.cljs$core$IFn$_invoke$arity$1((1000))),(function (_){
return promesa.protocols._promise(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server","do","server/do",1556149508),new cljs.core.Keyword(null,"restart","restart",-1779883612)], 0)));
}));
}));
} else {
return null;
}
})),(function (p1__56557_SHARP_){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__56557_SHARP_)),new cljs.core.Keyword(null,"error","error",-978969032));
}));
});
return frontend.components.settings.toggle.cljs$core$IFn$_invoke$arity$variadic("mcp-server",(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.ai","enable-mcp-server","settings.ai/enable-mcp-server",-615508952)) : t.call(null,new cljs.core.Keyword("settings.ai","enable-mcp-server","settings.ai/enable-mcp-server",-615508952))),checked,on_toggle,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.opacity-50","span.text-sm.opacity-50",1991571125),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings.ai","enable-mcp-server-desc","settings.ai/enable-mcp-server-desc",-107034711)) : t.call(null,new cljs.core.Keyword("settings.ai","enable-mcp-server-desc","settings.ai/enable-mcp-server-desc",-107034711)))], null)], 0));
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$mcp_server_row__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56561 = cljs.core.first(args__31746__auto__);
var G__56562 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56561,G__56562) : io.factorhouse.hsx.core.obj_get.call(null,G__56561,G__56562));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"mcp-server-row","mcp-server-row",-211911824,null),args__31746__auto__),frontend$components$settings$mcp_server_row,args__31746__auto__,null);
}
};
var frontend$components$settings$mcp_server_row = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56801__i = 0, G__56801__a = new Array(arguments.length -  0);
while (G__56801__i < G__56801__a.length) {G__56801__a[G__56801__i] = arguments[G__56801__i + 0]; ++G__56801__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56801__a,0,null);
} 
return frontend$components$settings$mcp_server_row__delegate.call(this,args__31746__auto__);};
frontend$components$settings$mcp_server_row.cljs$lang$maxFixedArity = 0;
frontend$components$settings$mcp_server_row.cljs$lang$applyTo = (function (arglist__56802){
var args__31746__auto__ = cljs.core.seq(arglist__56802);
return frontend$components$settings$mcp_server_row__delegate(args__31746__auto__);
});
frontend$components$settings$mcp_server_row.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$mcp_server_row__delegate;
return frontend$components$settings$mcp_server_row;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56563 = comp__31745__auto__;
var G__56564 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56563,G__56564) : io.factorhouse.hsx.core.react_memo.call(null,G__56563,G__56564));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"mcp-server-row");

return comp__31745__auto__;
})();
frontend.components.settings.settings_ai = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$settings_ai(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-wrap","div.panel-wrap",338847352),(cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.components.settings.mcp_server_row(frontend.context.i18n.t):null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$settings_ai__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56565 = cljs.core.first(args__31746__auto__);
var G__56566 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56565,G__56566) : io.factorhouse.hsx.core.obj_get.call(null,G__56565,G__56566));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"settings-ai","settings-ai",998904203,null),args__31746__auto__),frontend$components$settings$settings_ai,args__31746__auto__,null);
}
};
var frontend$components$settings$settings_ai = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56804__i = 0, G__56804__a = new Array(arguments.length -  0);
while (G__56804__i < G__56804__a.length) {G__56804__a[G__56804__i] = arguments[G__56804__i + 0]; ++G__56804__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56804__a,0,null);
} 
return frontend$components$settings$settings_ai__delegate.call(this,args__31746__auto__);};
frontend$components$settings$settings_ai.cljs$lang$maxFixedArity = 0;
frontend$components$settings$settings_ai.cljs$lang$applyTo = (function (arglist__56805){
var args__31746__auto__ = cljs.core.seq(arglist__56805);
return frontend$components$settings$settings_ai__delegate(args__31746__auto__);
});
frontend$components$settings$settings_ai.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$settings_ai__delegate;
return frontend$components$settings$settings_ai;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56567 = comp__31745__auto__;
var G__56568 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56567,G__56568) : io.factorhouse.hsx.core.react_memo.call(null,G__56567,G__56568));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"settings-ai");

return comp__31745__auto__;
})();
frontend.components.settings.settings = (function (){var render_fn__31744__auto__ = (function frontend$components$settings$settings(_active_tab){
var current_repo = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("git","current-repo","git/current-repo",107438825)], null));
var _preferred_language = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017)], null));
var _installed_plugins = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034)], null));
var plugins_of_settings = (function (){var and__5140__auto__ = frontend.config.lsp_enabled_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.seq(frontend.handler.plugin.get_enabled_plugins_if_setting_schema());
} else {
return and__5140__auto__;
}
})();
var _STAR_active = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(frontend.components.settings.DEFAULT_ACTIVE_TAB_STATE);
}),cljs.core.PersistentVector.EMPTY);
var vec__56569 = logseq.shui.hooks.use_atom(_STAR_active);
var active = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56569,(0),null);
var logged_in_QMARK_ = frontend.handler.user.logged_in_QMARK_();
logseq.shui.hooks.use_effect_BANG_((function (){
frontend.state.load_app_user_cfgs.cljs$core$IFn$_invoke$arity$0();

frontend.state.load_electron_app_base_info();

var active_tab_56807 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_active_tab,new cljs.core.Keyword(null,"ai","ai",760454697))) && (cljs.core.not(frontend.util.electron_QMARK_()))))?new cljs.core.Keyword(null,"advanced","advanced",-451287892):_active_tab);
if((active_tab_56807 instanceof cljs.core.Keyword)){
cljs.core.reset_BANG_(_STAR_active,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [active_tab_56807,null], null));
} else {
}

return (function (){
return frontend.state.close_settings_BANG_();
});
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#settings.cp__settings-main","div#settings.cp__settings-main",283610888),frontend.components.settings.settings_effect(active),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__settings-inner","div.cp__settings-inner",1156116501),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aside.md:w-64","aside.md:w-64",2090651679),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"10rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.cp__settings-header","header.cp__settings-header",670359284),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.cp__settings-modal-title","h1.cp__settings-modal-title",1823855901),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nav","settings","nav/settings",1557080534)], 0))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.settings-menu","ul.settings-menu",1497992708),(function (){var iter__5628__auto__ = (function frontend$components$settings$settings_$_iter__56572(s__56573){
return (new cljs.core.LazySeq(null,(function (){
var s__56573__$1 = s__56573;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__56573__$1);
if(temp__5825__auto__){
var s__56573__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56573__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__56573__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__56575 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__56574 = (0);
while(true){
if((i__56574 < size__5627__auto__)){
var vec__56576 = cljs.core._nth(c__5626__auto__,i__56574);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56576,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56576,(1),null);
var icon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56576,(2),null);
cljs.core.chunk_append(b__56575,(cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.settings-menu-item","li.settings-menu-item",701925455),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(label),new cljs.core.Keyword(null,"data-id","data-id",1023855591),cljs.core.name(label),new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(label,cljs.core.first(active))], null)], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__56574,vec__56576,label,text,icon,c__5626__auto__,size__5627__auto__,b__56575,s__56573__$2,temp__5825__auto__,current_repo,_preferred_language,_installed_plugins,plugins_of_settings,_STAR_active,vec__56569,active,logged_in_QMARK_){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(label,new cljs.core.Keyword(null,"plugins-setting","plugins-setting",-1797317643))){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("go","plugins-settings","go/plugins-settings",-583021288),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(plugins_of_settings))], null));
} else {
return cljs.core.reset_BANG_(_STAR_active,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [label,cljs.core.first(active)], null));
}
});})(i__56574,vec__56576,label,text,icon,c__5626__auto__,size__5627__auto__,b__56575,s__56573__$2,temp__5825__auto__,current_repo,_preferred_language,_installed_plugins,plugins_of_settings,_STAR_active,vec__56569,active,logged_in_QMARK_))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.flex.items-center.settings-menu-link","button.flex.items-center.settings-menu-link",312117806),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"button"], null),icon,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),text], null)], null)], null):null));

var G__56816 = (i__56574 + (1));
i__56574 = G__56816;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56575),frontend$components$settings$settings_$_iter__56572(cljs.core.chunk_rest(s__56573__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56575),null);
}
} else {
var vec__56579 = cljs.core.first(s__56573__$2);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56579,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56579,(1),null);
var icon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56579,(2),null);
return cljs.core.cons((cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.settings-menu-item","li.settings-menu-item",701925455),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(label),new cljs.core.Keyword(null,"data-id","data-id",1023855591),cljs.core.name(label),new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(label,cljs.core.first(active))], null)], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__56579,label,text,icon,s__56573__$2,temp__5825__auto__,current_repo,_preferred_language,_installed_plugins,plugins_of_settings,_STAR_active,vec__56569,active,logged_in_QMARK_){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(label,new cljs.core.Keyword(null,"plugins-setting","plugins-setting",-1797317643))){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("go","plugins-settings","go/plugins-settings",-583021288),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(plugins_of_settings))], null));
} else {
return cljs.core.reset_BANG_(_STAR_active,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [label,cljs.core.first(active)], null));
}
});})(vec__56579,label,text,icon,s__56573__$2,temp__5825__auto__,current_repo,_preferred_language,_installed_plugins,plugins_of_settings,_STAR_active,vec__56569,active,logged_in_QMARK_))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.flex.items-center.settings-menu-link","button.flex.items-center.settings-menu-link",312117806),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"button"], null),icon,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),text], null)], null)], null):null),frontend$components$settings$settings_$_iter__56572(cljs.core.rest(s__56573__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [((frontend.config.ENABLE_SETTINGS_ACCOUNT_TAB)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"account","account",718006320),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings","account","settings/account",407546893)], 0)),frontend.ui.icon("user-circle")], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general","general",380803686),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings","general","settings/general",-869278039)], 0)),frontend.ui.icon("adjustments")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor","editor",-989377770),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings","editor","settings/editor",-1853223831)], 0)),frontend.ui.icon("writing")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings","keymap","settings/keymap",1288033487)], 0)),frontend.ui.icon("keyboard")], null),(cljs.core.truth_(frontend.util.electron_QMARK_())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings","ai","settings/ai",-204023282)], 0)),frontend.ui.icon("wand")], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"advanced","advanced",-451287892),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings","advanced","settings/advanced",-895932215)], 0)),frontend.ui.icon("bulb")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"features","features",-1146962336),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings","features","settings/features",-417072573)], 0)),frontend.ui.icon("app-feature")], null),(cljs.core.truth_(logged_in_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collaboration","collaboration",266985379),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings","collaboration","settings/collaboration",947132910)], 0)),frontend.ui.icon("users")], null):null),(cljs.core.truth_((function (){var and__5140__auto__ = logged_in_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.handler.user.rtc_group_QMARK_();
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"personal-access-tokens","personal-access-tokens",-940674181),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings","personal-access-tokens","settings/personal-access-tokens",2086844314)], 0)),frontend.ui.icon("key")], null):null),(cljs.core.truth_(logged_in_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"encryption","encryption",932327985),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings","encryption","settings/encryption",302964160)], 0)),frontend.ui.icon("lock")], null):null),(cljs.core.truth_(plugins_of_settings)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plugins-setting","plugins-setting",-1797317643),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings","plugins","settings/plugins",197615380)], 0)),frontend.ui.icon("puzzle")], null):null)], null));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.cp__settings-header","header.cp__settings-header",670359284),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.cp__settings-category-title","h1.cp__settings-category-title",1540507833),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"settings/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(active)))))], 0))], null)], null),(function (){var G__56582 = cljs.core.first(active);
var G__56582__$1 = (((G__56582 instanceof cljs.core.Keyword))?G__56582.fqn:null);
switch (G__56582__$1) {
case "plugins-setting":
var label = cljs.core.second(active);
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("go","plugins-settings","go/plugins-settings",-583021288),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(plugins_of_settings))], null));

cljs.core.reset_BANG_(_STAR_active,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [label,label], null));

return null;

break;
case "account":
return frontend.components.settings.settings_account();

break;
case "general":
return frontend.components.settings.settings_general(current_repo);

break;
case "editor":
return frontend.components.settings.settings_editor();

break;
case "keymap":
return frontend.components.shortcut.shortcut_keymap_x();

break;
case "assets":
return frontend.components.assets.settings_content();

break;
case "advanced":
return frontend.components.settings.settings_advanced();

break;
case "features":
return frontend.components.settings.settings_features();

break;
case "collaboration":
return frontend.components.settings.settings_collaboration();

break;
case "personal-access-tokens":
return frontend.components.settings.settings_personal_access_tokens();

break;
case "encryption":
return frontend.components.settings.encryption();

break;
case "ai":
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return frontend.components.settings.settings_ai();
} else {
return frontend.components.settings.settings_advanced();
}

break;
default:
return null;

}
})()], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$settings$settings__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__56583 = cljs.core.first(args__31746__auto__);
var G__56584 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__56583,G__56584) : io.factorhouse.hsx.core.obj_get.call(null,G__56583,G__56584));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"settings","settings",-1098290894,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$settings$settings,args__31746__auto__,null);
}
};
var frontend$components$settings$settings = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__56834__i = 0, G__56834__a = new Array(arguments.length -  0);
while (G__56834__i < G__56834__a.length) {G__56834__a[G__56834__i] = arguments[G__56834__i + 0]; ++G__56834__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__56834__a,0,null);
} 
return frontend$components$settings$settings__delegate.call(this,args__31746__auto__);};
frontend$components$settings$settings.cljs$lang$maxFixedArity = 0;
frontend$components$settings$settings.cljs$lang$applyTo = (function (arglist__56835){
var args__31746__auto__ = cljs.core.seq(arglist__56835);
return frontend$components$settings$settings__delegate(args__31746__auto__);
});
frontend$components$settings$settings.cljs$core$IFn$_invoke$arity$variadic = frontend$components$settings$settings__delegate;
return frontend$components$settings$settings;
})()
;
var memo_comp__31747__auto__ = (function (){var G__56585 = comp__31745__auto__;
var G__56586 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__56585,G__56586) : io.factorhouse.hsx.core.react_memo.call(null,G__56585,G__56586));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"settings");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.settings.js.map
