goog.provide('frontend.template');
frontend.template.variable_rules = (function frontend$template$variable_rules(){
return new cljs.core.PersistentArrayMap(null, 5, ["today",(function (){var G__81561 = frontend.date.today();
return (frontend.util.ref.__GT_page_ref.cljs$core$IFn$_invoke$arity$1 ? frontend.util.ref.__GT_page_ref.cljs$core$IFn$_invoke$arity$1(G__81561) : frontend.util.ref.__GT_page_ref.call(null,G__81561));
})(),"yesterday",(function (){var G__81562 = frontend.date.yesterday();
return (frontend.util.ref.__GT_page_ref.cljs$core$IFn$_invoke$arity$1 ? frontend.util.ref.__GT_page_ref.cljs$core$IFn$_invoke$arity$1(G__81562) : frontend.util.ref.__GT_page_ref.call(null,G__81562));
})(),"tomorrow",(function (){var G__81563 = frontend.date.tomorrow();
return (frontend.util.ref.__GT_page_ref.cljs$core$IFn$_invoke$arity$1 ? frontend.util.ref.__GT_page_ref.cljs$core$IFn$_invoke$arity$1(G__81563) : frontend.util.ref.__GT_page_ref.call(null,G__81563));
})(),"time",frontend.date.get_current_time(),"current page",(function (){var temp__5825__auto__ = (function (){var or__5142__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.date.today();
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var current_page = temp__5825__auto__;
return (frontend.util.ref.__GT_page_ref.cljs$core$IFn$_invoke$arity$1 ? frontend.util.ref.__GT_page_ref.cljs$core$IFn$_invoke$arity$1(current_page) : frontend.util.ref.__GT_page_ref.call(null,current_page));
} else {
return null;
}
})()], null);
});
frontend.template.template_re = /<%([^%].*?)%>/;
frontend.template.resolve_dynamic_template_BANG_ = (function frontend$template$resolve_dynamic_template_BANG_(content){
return clojure.string.replace(content,frontend.template.template_re,(function (p__81564){
var vec__81565 = p__81564;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81565,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81565,(1),null);
var match__$1 = clojure.string.trim(match);
if(clojure.string.blank_QMARK_(match__$1)){
return "";
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.template.variable_rules(),clojure.string.lower_case(match__$1)))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.template.variable_rules(),clojure.string.lower_case(match__$1));
} else {
var temp__5823__auto__ = frontend.date.nld_parse(match__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var nld = temp__5823__auto__;
var date = (function (){var G__81568 = (new goog.date.DateTime());
G__81568.setTime(nld.getTime());

return G__81568;
})();
var G__81569 = frontend.date.journal_name.cljs$core$IFn$_invoke$arity$1(date);
return (frontend.util.ref.__GT_page_ref.cljs$core$IFn$_invoke$arity$1 ? frontend.util.ref.__GT_page_ref.cljs$core$IFn$_invoke$arity$1(G__81569) : frontend.util.ref.__GT_page_ref.call(null,G__81569));
} else {
return match__$1;
}

}
}
}));
});

//# sourceMappingURL=frontend.template.js.map
