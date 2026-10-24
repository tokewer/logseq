goog.provide('logseq.sdk.ui');
logseq.sdk.ui.parse_hiccup_ui = (function logseq$sdk$ui$parse_hiccup_ui(input){
if(typeof input === 'string'){
try{return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(input);
}catch (e100353){var e = e100353;
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("logseq.sdk.ui",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parse-hiccup-error","parse-hiccup-error",409257602),e,new cljs.core.Keyword(null,"line","line",212345235),16], null)),null);
} else {
}

return input;
}} else {
return null;
}
});
logseq.sdk.ui._show_msg = (function logseq$sdk$ui$_show_msg(var_args){
var G__100355 = arguments.length;
switch (G__100355) {
case 1:
return logseq.sdk.ui._show_msg.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return logseq.sdk.ui._show_msg.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return logseq.sdk.ui._show_msg.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.sdk.ui._show_msg.cljs$core$IFn$_invoke$arity$1 = (function (content){
return logseq.sdk.ui._show_msg.cljs$core$IFn$_invoke$arity$3(content,new cljs.core.Keyword(null,"success","success",1890645906),null);
}));

(logseq.sdk.ui._show_msg.cljs$core$IFn$_invoke$arity$2 = (function (content,status){
return logseq.sdk.ui._show_msg.cljs$core$IFn$_invoke$arity$3(content,status,null);
}));

(logseq.sdk.ui._show_msg.cljs$core$IFn$_invoke$arity$3 = (function (content,status,opts){
var map__100356 = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(opts);
var map__100356__$1 = cljs.core.__destructure_map(map__100356);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__100356__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__100356__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var hiccup_QMARK_ = ((typeof content === 'string') && (clojure.string.starts_with_QMARK_(clojure.string.triml(content),"[:")));
var content__$1 = ((hiccup_QMARK_)?logseq.sdk.ui.parse_hiccup_ui(content):content);
var uid = ((typeof key === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key):null);
var clear_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(timeout,(0));
var key_SINGLEQUOTE_ = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$6(content__$1,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(status),clear_QMARK_,uid,timeout,null);
return cljs.core.name(key_SINGLEQUOTE_);
}));

(logseq.sdk.ui._show_msg.cljs$lang$maxFixedArity = 3);

logseq.sdk.ui.show_msg = (function logseq$sdk$ui$show_msg(var_args){
var args__5882__auto__ = [];
var len__5876__auto___100364 = arguments.length;
var i__5877__auto___100365 = (0);
while(true){
if((i__5877__auto___100365 < len__5876__auto___100364)){
args__5882__auto__.push((arguments[i__5877__auto___100365]));

var G__100366 = (i__5877__auto___100365 + (1));
i__5877__auto___100365 = G__100366;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return logseq.sdk.ui.show_msg.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});
goog.exportSymbol('logseq.sdk.ui.show_msg', logseq.sdk.ui.show_msg);

(logseq.sdk.ui.show_msg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(logseq.sdk.ui._show_msg,args);
}));

(logseq.sdk.ui.show_msg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(logseq.sdk.ui.show_msg.cljs$lang$applyTo = (function (seq100357){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq100357));
}));

logseq.sdk.ui.close_msg = (function logseq$sdk$ui$close_msg(key){
if(typeof key === 'string'){
frontend.handler.notification.clear_BANG_(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key));

return null;
} else {
return null;
}
});
goog.exportSymbol('logseq.sdk.ui.close_msg', logseq.sdk.ui.close_msg);
logseq.sdk.ui.query_element_rect = (function logseq$sdk$ui$query_element_rect(selector){
var temp__5825__auto__ = document.querySelector(selector);
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
return cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(el.getBoundingClientRect().toJSON());
} else {
return null;
}
});
goog.exportSymbol('logseq.sdk.ui.query_element_rect', logseq.sdk.ui.query_element_rect);
logseq.sdk.ui.query_element_by_id = (function logseq$sdk$ui$query_element_by_id(id){
var temp__5825__auto__ = goog.dom.getElement(id);
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
if(cljs.core.truth_(el)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(el.tagName)+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));
} else {
return false;
}
} else {
return null;
}
});
goog.exportSymbol('logseq.sdk.ui.query_element_by_id', logseq.sdk.ui.query_element_by_id);
logseq.sdk.ui.check_slot_valid = (function logseq$sdk$ui$check_slot_valid(slot){
if(typeof slot === 'string'){
return cljs.core.boolean$(logseq.sdk.ui.query_element_by_id(slot));
} else {
return null;
}
});
goog.exportSymbol('logseq.sdk.ui.check_slot_valid', logseq.sdk.ui.check_slot_valid);
logseq.sdk.ui.resolve_theme_css_props_vals = (function logseq$sdk$ui$resolve_theme_css_props_vals(props){
var temp__5825__auto__ = ((typeof props === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [props], null):cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(props));
if(cljs.core.truth_(temp__5825__auto__)){
var props__$1 = temp__5825__auto__;
var s = window.getComputedStyle(document.body);
var G__100358 = (function (){var iter__5628__auto__ = (function logseq$sdk$ui$resolve_theme_css_props_vals_$_iter__100359(s__100360){
return (new cljs.core.LazySeq(null,(function (){
var s__100360__$1 = s__100360;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__100360__$1);
if(temp__5825__auto____$1){
var s__100360__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__100360__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__100360__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__100362 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__100361 = (0);
while(true){
if((i__100361 < size__5627__auto__)){
var prop = cljs.core._nth(c__5626__auto__,i__100361);
cljs.core.chunk_append(b__100362,((typeof prop === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,frontend.util.trim_safe(s.getPropertyValue(prop))], null):null));

var G__100367 = (i__100361 + (1));
i__100361 = G__100367;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__100362),logseq$sdk$ui$resolve_theme_css_props_vals_$_iter__100359(cljs.core.chunk_rest(s__100360__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__100362),null);
}
} else {
var prop = cljs.core.first(s__100360__$2);
return cljs.core.cons(((typeof prop === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,frontend.util.trim_safe(s.getPropertyValue(prop))], null):null),logseq$sdk$ui$resolve_theme_css_props_vals_$_iter__100359(cljs.core.rest(s__100360__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(props__$1);
})();
var G__100358__$1 = (((G__100358 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,G__100358));
var G__100358__$2 = (((G__100358__$1 == null))?null:cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__100358__$1));
if((G__100358__$2 == null)){
return null;
} else {
return cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(G__100358__$2);
}
} else {
return null;
}
});
goog.exportSymbol('logseq.sdk.ui.resolve_theme_css_props_vals', logseq.sdk.ui.resolve_theme_css_props_vals);

//# sourceMappingURL=logseq.sdk.ui.js.map
