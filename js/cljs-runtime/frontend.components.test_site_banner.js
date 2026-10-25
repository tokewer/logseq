goog.provide('frontend.components.test_site_banner');
frontend.components.test_site_banner.test_web_hostname = "test.logseq.com";
frontend.components.test_site_banner.stable_web_app_url = "https://app.logseq.com";
frontend.components.test_site_banner.dismiss_storage_key = new cljs.core.Keyword("frontend.spec.storage","test-site-banner-dismissed","frontend.spec.storage/test-site-banner-dismissed",-984011460);
/**
 * True when `hostname` is the test/nightly web deployment.
 */
frontend.components.test_site_banner.test_web_host_QMARK_ = (function frontend$components$test_site_banner$test_web_host_QMARK_(hostname){
return cljs.core.boolean$(((typeof hostname === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.components.test_site_banner.test_web_hostname,clojure.string.lower_case(hostname)))));
});
/**
 * Whether the test-site banner should render.
 * Electron, native mobile, publishing, other hosts, and a persisted dismissal
 * never show it.
 */
frontend.components.test_site_banner.show_test_site_banner_QMARK_ = (function frontend$components$test_site_banner$show_test_site_banner_QMARK_(p__98321){
var map__98322 = p__98321;
var map__98322__$1 = cljs.core.__destructure_map(map__98322);
var hostname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98322__$1,new cljs.core.Keyword(null,"hostname","hostname",2105669933));
var dismissed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98322__$1,new cljs.core.Keyword(null,"dismissed?","dismissed?",5159532));
var electron_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98322__$1,new cljs.core.Keyword(null,"electron?","electron?",56245131));
var native_platform_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98322__$1,new cljs.core.Keyword(null,"native-platform?","native-platform?",-905263615));
var publishing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98322__$1,new cljs.core.Keyword(null,"publishing?","publishing?",1526914455));
return cljs.core.boolean$(((cljs.core.not(dismissed_QMARK_)) && (((cljs.core.not(electron_QMARK_)) && (((cljs.core.not(native_platform_QMARK_)) && (((cljs.core.not(publishing_QMARK_)) && (frontend.components.test_site_banner.test_web_host_QMARK_(hostname))))))))));
});
frontend.components.test_site_banner.current_hostname = (function frontend$components$test_site_banner$current_hostname(){
if((((!(frontend.util.node_test_QMARK_))) && ((typeof location !== 'undefined')))){
return location.hostname;
} else {
return null;
}
});
frontend.components.test_site_banner.banner_dismissed_QMARK_ = (function frontend$components$test_site_banner$banner_dismissed_QMARK_(){
return frontend.storage.get(frontend.components.test_site_banner.dismiss_storage_key) === true;
});
frontend.components.test_site_banner.dismiss_BANG_ = (function frontend$components$test_site_banner$dismiss_BANG_(){
return frontend.storage.set(frontend.components.test_site_banner.dismiss_storage_key,true);
});
frontend.components.test_site_banner.banner_runtime = (function frontend$components$test_site_banner$banner_runtime(){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"hostname","hostname",2105669933),frontend.components.test_site_banner.current_hostname(),new cljs.core.Keyword(null,"dismissed?","dismissed?",5159532),frontend.components.test_site_banner.banner_dismissed_QMARK_(),new cljs.core.Keyword(null,"electron?","electron?",56245131),cljs.core.boolean$(frontend.util.electron_QMARK_()),new cljs.core.Keyword(null,"native-platform?","native-platform?",-905263615),cljs.core.boolean$((function (){var and__5140__auto__ = (!(frontend.util.node_test_QMARK_));
if(and__5140__auto__){
return frontend.mobile.util.native_platform_QMARK_();
} else {
return and__5140__auto__;
}
})()),new cljs.core.Keyword(null,"publishing?","publishing?",1526914455),cljs.core.boolean$(frontend.config.publishing_QMARK_)], null);
});
frontend.components.test_site_banner.banner = (function (){var render_fn__47251__auto__ = (function frontend$components$test_site_banner$banner(){
var vec__98334 = logseq.shui.hooks.use_state(frontend.components.test_site_banner.banner_dismissed_QMARK_());
var dismissed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98334,(0),null);
var set_dismissed_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98334,(1),null);
var visible_QMARK_ = frontend.components.test_site_banner.show_test_site_banner_QMARK_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.components.test_site_banner.banner_runtime(),new cljs.core.Keyword(null,"dismissed?","dismissed?",5159532),dismissed_QMARK_));
if(visible_QMARK_){
var G__98342 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"status",new cljs.core.Keyword(null,"class","class",-2030961996),"test-site-banner"], null);
var G__98343 = logseq.shui.ui.tabler_icon("alert-triangle",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(18)], null));
var G__98344 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.test-site-banner__content","div.test-site-banner__content",567176211),(function (){var G__98345 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("web.test-site","warning","web.test-site/warning",18503049)], 0));
return (logseq.shui.ui.alert_description.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.alert_description.cljs$core$IFn$_invoke$arity$1(G__98345) : logseq.shui.ui.alert_description.call(null,G__98345));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.test-site-banner__actions","div.test-site-banner__actions",2036018298),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.test-site-banner__open","a.test-site-banner__open",1885558047),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),frontend.components.test_site_banner.stable_web_app_url], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("web.test-site","open-app","web.test-site/open-app",220047389)], 0))], null),(function (){var G__98349 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),"test-site-banner__dismiss",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.components.test_site_banner.dismiss_BANG_();

return (set_dismissed_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_dismissed_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_dismissed_BANG_.call(null,true));
})], null);
var G__98350 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("web.test-site","help-test","web.test-site/help-test",-1149357026)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__98349,G__98350) : logseq.shui.ui.button.call(null,G__98349,G__98350));
})()], null)], null);
return (logseq.shui.ui.alert.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.alert.cljs$core$IFn$_invoke$arity$3(G__98342,G__98343,G__98344) : logseq.shui.ui.alert.call(null,G__98342,G__98343,G__98344));
} else {
return null;
}
});
var comp__47252__auto__ = (function() { 
var frontend$components$test_site_banner$banner__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__98353 = cljs.core.first(args__47253__auto__);
var G__98354 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__98353,G__98354) : io.factorhouse.hsx.core.obj_get.call(null,G__98353,G__98354));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"banner","banner",1817979808,null),args__47253__auto__),frontend$components$test_site_banner$banner,args__47253__auto__,null);
}
};
var frontend$components$test_site_banner$banner = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__98365__i = 0, G__98365__a = new Array(arguments.length -  0);
while (G__98365__i < G__98365__a.length) {G__98365__a[G__98365__i] = arguments[G__98365__i + 0]; ++G__98365__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__98365__a,0,null);
} 
return frontend$components$test_site_banner$banner__delegate.call(this,args__47253__auto__);};
frontend$components$test_site_banner$banner.cljs$lang$maxFixedArity = 0;
frontend$components$test_site_banner$banner.cljs$lang$applyTo = (function (arglist__98366){
var args__47253__auto__ = cljs.core.seq(arglist__98366);
return frontend$components$test_site_banner$banner__delegate(args__47253__auto__);
});
frontend$components$test_site_banner$banner.cljs$core$IFn$_invoke$arity$variadic = frontend$components$test_site_banner$banner__delegate;
return frontend$components$test_site_banner$banner;
})()
;
var memo_comp__47254__auto__ = (function (){var G__98357 = comp__47252__auto__;
var G__98358 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__98357,G__98358) : io.factorhouse.hsx.core.react_memo.call(null,G__98357,G__98358));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"banner");

return comp__47252__auto__;
})();

//# sourceMappingURL=frontend.components.test_site_banner.js.map
