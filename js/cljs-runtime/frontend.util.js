goog.provide('frontend.util');
goog.scope(function(){
  frontend.util.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$$capacitor$clipboard$dist$plugin_cjs=shadow.js.require("module$node_modules$$capacitor$clipboard$dist$plugin_cjs", {});
var module$node_modules$$capacitor$core$dist$index_cjs=shadow.js.require("module$node_modules$$capacitor$core$dist$index_cjs", {});
var module$node_modules$$capacitor$status_bar$dist$plugin_cjs=shadow.js.require("module$node_modules$$capacitor$status_bar$dist$plugin_cjs", {});
var module$node_modules$path_complete_extname$index=shadow.js.require("module$node_modules$path_complete_extname$index", {});
var module$node_modules$semver$index=shadow.js.require("module$node_modules$semver$index", {});
frontend.util.safe_re_find = logseq.common.util.safe_re_find;

frontend.util.safe_keyword = (function frontend$util$safe_keyword(s){
if(typeof s === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(s," ","_"));
} else {
return null;
}
});
/**
 * @define {boolean}
 * @type {boolean}
 */
frontend.util.NODETEST = goog.define("frontend.util.NODETEST",false);
if((typeof frontend !== 'undefined') && (typeof frontend.util !== 'undefined') && (typeof frontend.util.node_test_QMARK_ !== 'undefined')){
} else {
frontend.util.node_test_QMARK_ = frontend.util.NODETEST;
}
frontend.util.ios_STAR__QMARK_ = (function frontend$util$ios_STAR__QMARK_(){
return module$frontend$utils.ios();
});

frontend.util.ios_QMARK_ = cljs.core.memoize(frontend.util.ios_STAR__QMARK_);
frontend.util.safari_STAR__QMARK_ = (function frontend$util$safari_STAR__QMARK_(){
var ua = clojure.string.lower_case(navigator.userAgent);
return ((clojure.string.includes_QMARK_(ua,"webkit")) && ((!(clojure.string.includes_QMARK_(ua,"chrome")))));
});

frontend.util.safari_QMARK_ = cljs.core.memoize(frontend.util.safari_STAR__QMARK_);
/**
 * Triggering condition: Mobile phones
 *      *** Warning!!! ***
 *      For UX logic only! Don't use for FS logic
 *      iPad / Android Pad doesn't trigger!
 */
frontend.util.mobile_STAR__QMARK_ = (function frontend$util$mobile_STAR__QMARK_(){
if(frontend.util.node_test_QMARK_){
return null;
} else {
var G__34247 = /Mobi/;
var G__34248 = navigator.userAgent;
return (frontend.util.safe_re_find.cljs$core$IFn$_invoke$arity$2 ? frontend.util.safe_re_find.cljs$core$IFn$_invoke$arity$2(G__34247,G__34248) : frontend.util.safe_re_find.call(null,G__34247,G__34248));
}
});

frontend.util.mobile_QMARK_ = cljs.core.memoize(frontend.util.mobile_STAR__QMARK_);

frontend.util.capacitor_QMARK_ = cljs.core.memoize((function (){
var and__5140__auto__ = window;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.util.goog$module$goog$object.get(window,"isCapacitorNew");
} else {
return and__5140__auto__;
}
}));
(cljs.core.IPrintWithWriter["symbol"] = true);

(cljs.core._pr_writer["symbol"] = (function (sym,writer,_){
return cljs.core._write(writer,(""+"\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym.toString())+"\""));
}));
(cljs.core.UUID.prototype.cljs$core$INamed$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.UUID.prototype.cljs$core$INamed$_name$arity$1 = (function (this$){
var this$__$1 = this;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1));
}));

(cljs.core.UUID.prototype.cljs$core$INamed$_namespace$arity$1 = (function (_){
var ___$1 = this;
return null;
}));
if((typeof frontend !== 'undefined') && (typeof frontend.util !== 'undefined') && (typeof frontend.util.node_path !== 'undefined')){
} else {
frontend.util.node_path = module$frontend$utils.nodePath;
}
if((typeof frontend !== 'undefined') && (typeof frontend.util !== 'undefined') && (typeof frontend.util.sem_ver !== 'undefined')){
} else {
frontend.util.sem_ver = module$node_modules$semver$index;
}
if((typeof frontend !== 'undefined') && (typeof frontend.util !== 'undefined') && (typeof frontend.util.full_path_extname !== 'undefined')){
} else {
frontend.util.full_path_extname = module$node_modules$path_complete_extname$index;
}
frontend.util.app_scroll_container_node = (function frontend$util$app_scroll_container_node(var_args){
var G__34250 = arguments.length;
switch (G__34250) {
case 0:
return frontend.util.app_scroll_container_node.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.util.app_scroll_container_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.util.app_scroll_container_node.cljs$core$IFn$_invoke$arity$0 = (function (){
var or__5142__auto__ = goog.dom.getElement("main-content-container");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return goog.dom.getElement("app-main-home");
}
}));

(frontend.util.app_scroll_container_node.cljs$core$IFn$_invoke$arity$1 = (function (el){
if(cljs.core.truth_((function (){var or__5142__auto__ = (function (){var G__34251 = el;
if((G__34251 == null)){
return null;
} else {
return G__34251.closest("#main-content-container");
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var G__34252 = el;
if((G__34252 == null)){
return null;
} else {
return G__34252.closest("#app-main-home");
}
}
})())){
return frontend.util.app_scroll_container_node.cljs$core$IFn$_invoke$arity$0();
} else {
var or__5142__auto__ = goog.dom.getElementByClass("sidebar-item-list");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.util.app_scroll_container_node.cljs$core$IFn$_invoke$arity$0();
}
}
}));

(frontend.util.app_scroll_container_node.cljs$lang$maxFixedArity = 1);

if((typeof frontend !== 'undefined') && (typeof frontend.util !== 'undefined') && (typeof frontend.util.el_visible_in_viewport_QMARK_ !== 'undefined')){
} else {
frontend.util.el_visible_in_viewport_QMARK_ = module$frontend$utils.elementIsVisibleInViewport;
}
frontend.util.string_join_path = logseq.common.util.string_join_path;
frontend.util.uuid_string_QMARK_ = logseq.common.util.uuid_string_QMARK_;
frontend.util.electron_STAR__QMARK_ = (function frontend$util$electron_STAR__QMARK_(){
if(cljs.core.truth_((function (){var and__5140__auto__ = window;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.util.goog$module$goog$object.get(window,"navigator");
} else {
return and__5140__auto__;
}
})())){
return goog.string.caseInsensitiveContains(navigator.userAgent," electron");
} else {
return null;
}
});

frontend.util.electron_QMARK_ = cljs.core.memoize(frontend.util.electron_STAR__QMARK_);
/**
 * Mocked open DIR path for by-passing open dir in electron during testing. Nil if not given
 */
frontend.util.mocked_open_dir_path = (function frontend$util$mocked_open_dir_path(){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return window.__MOCKED_OPEN_DIR_PATH__;
} else {
return null;
}
});
frontend.util.nfs_QMARK_ = ((cljs.core.not(frontend.util.electron_QMARK_())) && (cljs.core.not(frontend.mobile.util.native_platform_QMARK_())));

frontend.util.web_platform_QMARK_ = frontend.util.nfs_QMARK_;

frontend.util.plugin_platform_QMARK_ = (function (){var or__5142__auto__ = ((frontend.util.web_platform_QMARK_) && ((!(logseq.common.config.PUBLISHING))));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return frontend.util.electron_QMARK_();
}
})();
frontend.util.format = logseq.common.util.format;
frontend.util.evalue = (function frontend$util$evalue(event){
return frontend.util.goog$module$goog$object.getValueByKeys(event,"target","value");
});
frontend.util.ekey = (function frontend$util$ekey(event){
return frontend.util.goog$module$goog$object.getValueByKeys(event,"key");
});
frontend.util.echecked_QMARK_ = (function frontend$util$echecked_QMARK_(event){
return frontend.util.goog$module$goog$object.getValueByKeys(event,"target","checked");
});
/**
 * compatible change event for React
 */
frontend.util.set_change_value = (function frontend$util$set_change_value(var_args){
var G__34262 = arguments.length;
switch (G__34262) {
case 2:
return frontend.util.set_change_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.util.set_change_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.util.set_change_value.cljs$core$IFn$_invoke$arity$2 = (function (node,value){
return module$frontend$utils.triggerInputChange(node,value);
}));

(frontend.util.set_change_value.cljs$core$IFn$_invoke$arity$3 = (function (node,value,caret_pos){
return module$frontend$utils.triggerInputChange(node,value,caret_pos);
}));

(frontend.util.set_change_value.cljs$lang$maxFixedArity = 3);

frontend.util.p_handle = (function frontend$util$p_handle(var_args){
var G__34268 = arguments.length;
switch (G__34268) {
case 2:
return frontend.util.p_handle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.util.p_handle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.util.p_handle.cljs$core$IFn$_invoke$arity$2 = (function (p,ok_handler){
return frontend.util.p_handle.cljs$core$IFn$_invoke$arity$3(p,ok_handler,(function (error){
return console.error(error);
}));
}));

(frontend.util.p_handle.cljs$core$IFn$_invoke$arity$3 = (function (p,ok_handler,error_handler){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(p,(function (result){
return (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(result) : ok_handler.call(null,result));
})),(function (error){
return (error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(error) : error_handler.call(null,error));
}));
}));

(frontend.util.p_handle.cljs$lang$maxFixedArity = 3);

frontend.util.get_width = (function frontend$util$get_width(){
return frontend.util.goog$module$goog$object.get(window,"innerWidth");
});
frontend.util.set_theme_light = (function frontend$util$set_theme_light(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._promise(module$node_modules$$capacitor$status_bar$dist$plugin_cjs.StatusBar.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),module$node_modules$$capacitor$status_bar$dist$plugin_cjs.Style.Light], null))));
}));
});
frontend.util.set_theme_dark = (function frontend$util$set_theme_dark(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._promise(module$node_modules$$capacitor$status_bar$dist$plugin_cjs.StatusBar.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),module$node_modules$$capacitor$status_bar$dist$plugin_cjs.Style.Dark], null))));
}));
});
/**
 * Find first index of an element in list
 */
frontend.util.find_index = (function frontend$util$find_index(pred_or_val,coll){
var pred = ((cljs.core.fn_QMARK_(pred_or_val))?pred_or_val:(function (p1__34326_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred_or_val,p1__34326_SHARP_);
}));
return cljs.core.reduce_kv((function (p1__34329_SHARP_,p2__34328_SHARP_,p3__34327_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p3__34327_SHARP_) : pred.call(null,p3__34327_SHARP_)))){
return cljs.core.reduced(p2__34328_SHARP_);
} else {
return p1__34329_SHARP_;
}
}),(-1),(function (){var G__34341 = coll;
if(cljs.core.list_QMARK_(coll)){
return cljs.core.vec(G__34341);
} else {
return G__34341;
}
})());
});
frontend.util.hiccup__GT_class = (function frontend$util$hiccup__GT_class(class_SINGLEQUOTE_){
var G__34348 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(class_SINGLEQUOTE_,/\./);
var G__34348__$1 = (((G__34348 == null))?null:clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",G__34348));
if((G__34348__$1 == null)){
return null;
} else {
return clojure.string.trim(G__34348__$1);
}
});
frontend.util.fetch = (function frontend$util$fetch(var_args){
var G__34351 = arguments.length;
switch (G__34351) {
case 3:
return frontend.util.fetch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return frontend.util.fetch.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.util.fetch.cljs$core$IFn$_invoke$arity$3 = (function (url,on_ok,on_failed){
return frontend.util.fetch.cljs$core$IFn$_invoke$arity$4(url,cljs.core.PersistentArrayMap.EMPTY,on_ok,on_failed);
}));

(frontend.util.fetch.cljs$core$IFn$_invoke$arity$4 = (function (url,opts,on_ok,on_failed){
return fetch(url,cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(opts)).then((function (resp){
if((resp.status >= (400))){
return (on_failed.cljs$core$IFn$_invoke$arity$1 ? on_failed.cljs$core$IFn$_invoke$arity$1(resp) : on_failed.call(null,resp));
} else {
if(cljs.core.truth_(resp.ok)){
return resp.json().then(cljs_bean.core.__GT_clj).then((function (p1__34349_SHARP_){
return (on_ok.cljs$core$IFn$_invoke$arity$1 ? on_ok.cljs$core$IFn$_invoke$arity$1(p1__34349_SHARP_) : on_ok.call(null,p1__34349_SHARP_));
}));
} else {
return (on_failed.cljs$core$IFn$_invoke$arity$1 ? on_failed.cljs$core$IFn$_invoke$arity$1(resp) : on_failed.call(null,resp));
}
}
}));
}));

(frontend.util.fetch.cljs$lang$maxFixedArity = 4);

frontend.util.zero_pad = logseq.common.util.zero_pad;
/**
 * Use if arg could be an int or string. If arg is only a string, use `parse-long`.
 */
frontend.util.safe_parse_int = (function frontend$util$safe_parse_int(x){
if(typeof x === 'string'){
return cljs.core.parse_long(x);
} else {
return x;
}
});
/**
 * Use if arg could be a float or string. If arg is only a string, use `parse-double`
 */
frontend.util.safe_parse_float = (function frontend$util$safe_parse_float(x){
if(typeof x === 'string'){
return cljs.core.parse_double(x);
} else {
return x;
}
});
frontend.util.debounce = goog.functions.debounce;
/**
 * Create a stateful debounce function with specified interval
 * 
 *    Returns [fire-fn, cancel-fn]
 * 
 *    Use `fire-fn` to call the function(debounced)
 * 
 *    Use `cancel-fn` to cancel pending callback if there is
 */
frontend.util.cancelable_debounce = (function frontend$util$cancelable_debounce(f,interval){
var debouncer = (new goog.async.Debouncer(f,interval));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function() { 
var G__34708__delegate = function (args){
return debouncer.fire.apply(debouncer,cljs.core.to_array(args));
};
var G__34708 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34709__i = 0, G__34709__a = new Array(arguments.length -  0);
while (G__34709__i < G__34709__a.length) {G__34709__a[G__34709__i] = arguments[G__34709__i + 0]; ++G__34709__i;}
  args = new cljs.core.IndexedSeq(G__34709__a,0,null);
} 
return G__34708__delegate.call(this,args);};
G__34708.cljs$lang$maxFixedArity = 0;
G__34708.cljs$lang$applyTo = (function (arglist__34710){
var args = cljs.core.seq(arglist__34710);
return G__34708__delegate(args);
});
G__34708.cljs$core$IFn$_invoke$arity$variadic = G__34708__delegate;
return G__34708;
})()
,(function (){
return debouncer.stop();
})], null);
});
frontend.util.nth_safe = (function frontend$util$nth_safe(c,i){
if((((i < (0))) || ((i >= cljs.core.count(c))))){
return null;
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c,i);
}
});
if(frontend.util.node_test_QMARK_){
} else {
(NodeList.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL);

(NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (arr){
var arr__$1 = this;
return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$2(arr__$1,(0));
}));
}
frontend.util.caret_range = (function frontend$util$caret_range(node){
var temp__5825__auto__ = (function (){var or__5142__auto__ = frontend.util.goog$module$goog$object.get(node,"ownerDocument");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.util.goog$module$goog$object.get(node,"document");
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var doc = temp__5825__auto__;
var win = (function (){var or__5142__auto__ = frontend.util.goog$module$goog$object.get(doc,"defaultView");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.util.goog$module$goog$object.get(doc,"parentWindow");
}
})();
var selection = win.getSelection();
if(cljs.core.truth_(selection)){
var range_count = frontend.util.goog$module$goog$object.get(selection,"rangeCount");
if((range_count > (0))){
var range = win.getSelection().getRangeAt((0));
var pre_caret_range = range.cloneRange();
pre_caret_range.selectNodeContents(node);

pre_caret_range.setEnd(frontend.util.goog$module$goog$object.get(range,"endContainer"),frontend.util.goog$module$goog$object.get(range,"endOffset"));

var contents = pre_caret_range.cloneContents();
var _ = (function (){var seq__34431 = cljs.core.seq(contents.querySelectorAll(".select-none"));
var chunk__34432 = null;
var count__34433 = (0);
var i__34434 = (0);
while(true){
if((i__34434 < count__34433)){
var el = chunk__34432.cljs$core$IIndexed$_nth$arity$2(null,i__34434);
el.remove();


var G__34711 = seq__34431;
var G__34712 = chunk__34432;
var G__34713 = count__34433;
var G__34714 = (i__34434 + (1));
seq__34431 = G__34711;
chunk__34432 = G__34712;
count__34433 = G__34713;
i__34434 = G__34714;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__34431);
if(temp__5825__auto____$1){
var seq__34431__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34431__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__34431__$1);
var G__34715 = cljs.core.chunk_rest(seq__34431__$1);
var G__34716 = c__5673__auto__;
var G__34717 = cljs.core.count(c__5673__auto__);
var G__34718 = (0);
seq__34431 = G__34715;
chunk__34432 = G__34716;
count__34433 = G__34717;
i__34434 = G__34718;
continue;
} else {
var el = cljs.core.first(seq__34431__$1);
el.remove();


var G__34719 = cljs.core.next(seq__34431__$1);
var G__34720 = null;
var G__34721 = (0);
var G__34722 = (0);
seq__34431 = G__34719;
chunk__34432 = G__34720;
count__34433 = G__34721;
i__34434 = G__34722;
continue;
}
} else {
return null;
}
}
break;
}
})();
var html = (function (){var G__34435 = cljs.core.first(contents.childNodes);
var G__34435__$1 = (((G__34435 == null))?null:frontend.util.goog$module$goog$object.get(G__34435,"innerHTML"));
if((G__34435__$1 == null)){
return null;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34435__$1));
}
})();
var br_ended_QMARK_ = (function (){var and__5140__auto__ = html;
if(cljs.core.truth_(and__5140__auto__)){
return ((clojure.string.ends_with_QMARK_(html,"<div class=\"is-paragraph\"></div></div></span></div></div></div>")) || (clojure.string.ends_with_QMARK_(html,"<br></div></div></span></div></div></div>")));
} else {
return and__5140__auto__;
}
})();
var value = contents.textContent;
if(cljs.core.truth_(br_ended_QMARK_)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+"\n");
} else {
return value;
}
} else {
return null;
}
} else {
var temp__5825__auto____$1 = frontend.util.goog$module$goog$object.get(doc,"selection");
if(cljs.core.truth_(temp__5825__auto____$1)){
var selection__$1 = temp__5825__auto____$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("Control",frontend.util.goog$module$goog$object.get(selection__$1,"type"))){
var text_range = selection__$1.createRange();
var pre_caret_text_range = frontend.util.goog$module$goog$object.get(doc,"body").createTextRange();
pre_caret_text_range.moveToElementText(node);

pre_caret_text_range.setEndPoint("EndToEnd",text_range);

return frontend.util.goog$module$goog$object.get(pre_caret_text_range,"text");
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
});
frontend.util.get_selection_start = (function frontend$util$get_selection_start(input){
if(cljs.core.truth_(input)){
return input.selectionStart;
} else {
return null;
}
});
frontend.util.get_selection_end = (function frontend$util$get_selection_end(input){
if(cljs.core.truth_(input)){
return input.selectionEnd;
} else {
return null;
}
});
frontend.util.input_text_selected_QMARK_ = (function frontend$util$input_text_selected_QMARK_(input){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.get_selection_start(input),frontend.util.get_selection_end(input));
});
frontend.util.get_selection_direction = (function frontend$util$get_selection_direction(input){
if(cljs.core.truth_(input)){
return input.selectionDirection;
} else {
return null;
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.util !== 'undefined') && (typeof frontend.util.grapheme_segmenter !== 'undefined')){
} else {
frontend.util.grapheme_segmenter = (cljs.core.truth_(frontend.util.goog$module$goog$object.getValueByKeys(globalThis,"Intl","Segmenter"))?(new Intl.Segmenter("und",({"granularity": "grapheme"}))):null);
}
frontend.util.split_grapheme_clusters = (function frontend$util$split_grapheme_clusters(s){
if(cljs.core.truth_(frontend.util.grapheme_segmenter)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__34436_SHARP_){
return p1__34436_SHARP_.segment;
}),Array.from(frontend.util.grapheme_segmenter.segment(s)));
} else {
return cljs.core.vec(Array.from(s));
}
});
frontend.util.split_graphemes = (function frontend$util$split_graphemes(s){
return frontend.util.split_grapheme_clusters(s);
});
/**
 * Return the length of the substrings in s between start and from-index.
 * 
 *    multi-char count as 1, like emoji characters
 */
frontend.util.get_graphemes_pos = (function frontend$util$get_graphemes_pos(s,from_index){
return cljs.core.count(frontend.util.split_grapheme_clusters(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),from_index)));
});
/**
 * Return the length of the substrings in s between the last index of newline
 *    in s searching backward from from-newline-index and from-newline-index.
 * 
 *    multi-char count as 1, like emoji characters
 */
frontend.util.get_line_pos = (function frontend$util$get_line_pos(s,from_newline_index){
var last_newline_pos = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$3(s,"\n",(from_newline_index - (1)));
var before_last_newline_length = (function (){var or__5142__auto__ = last_newline_pos;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (-1);
}
})();
var last_newline_content = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(before_last_newline_length + (1)),from_newline_index);
return cljs.core.count(frontend.util.split_grapheme_clusters(last_newline_content));
});
frontend.util.stop = (function frontend$util$stop(e){
if(cljs.core.truth_(e)){
var G__34442 = e;
G__34442.preventDefault();

G__34442.stopPropagation();

return G__34442;
} else {
return null;
}
});
frontend.util.stop_propagation = (function frontend$util$stop_propagation(e){
if(cljs.core.truth_(e)){
return e.stopPropagation();
} else {
return null;
}
});
frontend.util.nearest_scrollable_container = (function frontend$util$nearest_scrollable_container(element){
return cljs.core.some((function (p1__34445_SHARP_){
var temp__5825__auto__ = window.getComputedStyle(p1__34445_SHARP_).overflowY;
if(cljs.core.truth_(temp__5825__auto__)){
var overflow_y = temp__5825__auto__;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["scroll",null,"auto",null,"overlay",null], null), null),overflow_y)){
return p1__34445_SHARP_;
} else {
return null;
}
} else {
return null;
}
}),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.iterate((function (p1__34446_SHARP_){
return p1__34446_SHARP_.parentElement;
}),element)));
});
frontend.util.element_visible_QMARK_ = (function frontend$util$element_visible_QMARK_(element){
if(cljs.core.truth_(element)){
var temp__5825__auto__ = element.getBoundingClientRect();
if(cljs.core.truth_(temp__5825__auto__)){
var r = temp__5825__auto__;
return (((r.top >= (0))) && (((r.bottom + (64)) <= (function (){var or__5142__auto__ = window.innerHeight;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return document.documentElement.clientHeight();
}
})())));
} else {
return null;
}
} else {
return null;
}
});
frontend.util.element_top = (function frontend$util$element_top(elem,top){
if(cljs.core.truth_(elem)){
if(cljs.core.truth_(elem.offsetParent)){
var client_top = (function (){var or__5142__auto__ = elem.clientTop;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})();
var offset_top = elem.offsetTop;
return (((top + client_top) + offset_top) + (function (){var G__34454 = elem.offsetParent;
var G__34455 = top;
return (frontend.util.element_top.cljs$core$IFn$_invoke$arity$2 ? frontend.util.element_top.cljs$core$IFn$_invoke$arity$2(G__34454,G__34455) : frontend.util.element_top.call(null,G__34454,G__34455));
})());
} else {
return top;
}
} else {
return null;
}
});
frontend.util.scroll_to_element = (function frontend$util$scroll_to_element(elem_id){
if(cljs.core.truth_((function (){var G__34461 = /^\/\d+$/;
var G__34462 = elem_id;
return (frontend.util.safe_re_find.cljs$core$IFn$_invoke$arity$2 ? frontend.util.safe_re_find.cljs$core$IFn$_invoke$arity$2(G__34461,G__34462) : frontend.util.safe_re_find.call(null,G__34461,G__34462));
})())){
return null;
} else {
if(cljs.core.truth_(elem_id)){
var temp__5825__auto__ = goog.dom.getElement(elem_id);
if(cljs.core.truth_(temp__5825__auto__)){
var elem = temp__5825__auto__;
return frontend.util.app_scroll_container_node.cljs$core$IFn$_invoke$arity$0().scroll(({"top": (function (){var top = frontend.util.element_top(elem,(0));
if((top < (256))){
return (0);
} else {
return (top - (80));
}
})(), "behavior": "smooth"}));
} else {
return null;
}
} else {
return null;
}
}
});
frontend.util.scroll_to = (function frontend$util$scroll_to(var_args){
var G__34474 = arguments.length;
switch (G__34474) {
case 1:
return frontend.util.scroll_to.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.util.scroll_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.util.scroll_to.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.util.scroll_to.cljs$core$IFn$_invoke$arity$1 = (function (pos){
return frontend.util.scroll_to.cljs$core$IFn$_invoke$arity$2(frontend.util.app_scroll_container_node.cljs$core$IFn$_invoke$arity$0(),pos);
}));

(frontend.util.scroll_to.cljs$core$IFn$_invoke$arity$2 = (function (node,pos){
return frontend.util.scroll_to.cljs$core$IFn$_invoke$arity$3(node,pos,true);
}));

(frontend.util.scroll_to.cljs$core$IFn$_invoke$arity$3 = (function (node,pos,animate_QMARK_){
if(cljs.core.truth_(node)){
return node.scroll(({"top": pos, "behavior": (cljs.core.truth_(animate_QMARK_)?"smooth":"auto")}));
} else {
return null;
}
}));

(frontend.util.scroll_to.cljs$lang$maxFixedArity = 3);

/**
 * Returns the scroll top position of the `node`. If `node` is not specified,
 *   returns the scroll top position of the `app-scroll-container-node`.
 */
frontend.util.scroll_top = (function frontend$util$scroll_top(var_args){
var G__34483 = arguments.length;
switch (G__34483) {
case 0:
return frontend.util.scroll_top.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.util.scroll_top.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.util.scroll_top.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.util.scroll_top.cljs$core$IFn$_invoke$arity$1(frontend.util.app_scroll_container_node.cljs$core$IFn$_invoke$arity$0());
}));

(frontend.util.scroll_top.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
return node.scrollTop;
} else {
return null;
}
}));

(frontend.util.scroll_top.cljs$lang$maxFixedArity = 1);

frontend.util.scroll_to_top = (function frontend$util$scroll_to_top(var_args){
var G__34489 = arguments.length;
switch (G__34489) {
case 0:
return frontend.util.scroll_to_top.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.util.scroll_to_top.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.util.scroll_to_top.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.util.scroll_to.cljs$core$IFn$_invoke$arity$3(frontend.util.app_scroll_container_node.cljs$core$IFn$_invoke$arity$0(),(0),false);
}));

(frontend.util.scroll_to_top.cljs$core$IFn$_invoke$arity$1 = (function (animate_QMARK_){
return frontend.util.scroll_to.cljs$core$IFn$_invoke$arity$3(frontend.util.app_scroll_container_node.cljs$core$IFn$_invoke$arity$0(),(0),animate_QMARK_);
}));

(frontend.util.scroll_to_top.cljs$lang$maxFixedArity = 1);

/**
 * Scroll into the view to vertically align a non-visible block to the centre
 *   of the visible area
 */
frontend.util.scroll_to_block = (function frontend$util$scroll_to_block(var_args){
var G__34492 = arguments.length;
switch (G__34492) {
case 1:
return frontend.util.scroll_to_block.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.util.scroll_to_block.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.util.scroll_to_block.cljs$core$IFn$_invoke$arity$1 = (function (block){
return frontend.util.scroll_to_block.cljs$core$IFn$_invoke$arity$2(block,true);
}));

(frontend.util.scroll_to_block.cljs$core$IFn$_invoke$arity$2 = (function (block,animate_QMARK_){
if(cljs.core.truth_(block)){
if(cljs.core.truth_(frontend.util.element_visible_QMARK_(block))){
return null;
} else {
return block.scrollIntoView(({"behavior": (cljs.core.truth_(animate_QMARK_)?"smooth":"auto"), "block": "center"}));
}
} else {
return null;
}
}));

(frontend.util.scroll_to_block.cljs$lang$maxFixedArity = 2);

frontend.util.link_QMARK_ = (function frontend$util$link_QMARK_(node){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["A",null,"BUTTON",null], null), null),frontend.util.goog$module$goog$object.get(node,"tagName"));
});
frontend.util.time_QMARK_ = (function frontend$util$time_QMARK_(node){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["TIME",null], null), null),frontend.util.goog$module$goog$object.get(node,"tagName"));
});
frontend.util.audio_QMARK_ = (function frontend$util$audio_QMARK_(node){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["AUDIO",null], null), null),frontend.util.goog$module$goog$object.get(node,"tagName"));
});
frontend.util.video_QMARK_ = (function frontend$util$video_QMARK_(node){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["VIDEO",null], null), null),frontend.util.goog$module$goog$object.get(node,"tagName"));
});
frontend.util.sup_QMARK_ = (function frontend$util$sup_QMARK_(node){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["SUP",null], null), null),frontend.util.goog$module$goog$object.get(node,"tagName"));
});
frontend.util.input_QMARK_ = (function frontend$util$input_QMARK_(node){
if(cljs.core.truth_(node)){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["INPUT",null,"TEXTAREA",null], null), null),frontend.util.goog$module$goog$object.get(node,"tagName"));
} else {
return null;
}
});
frontend.util.details_or_summary_QMARK_ = (function frontend$util$details_or_summary_QMARK_(node){
if(cljs.core.truth_(node)){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["DETAILS",null,"SUMMARY",null], null), null),frontend.util.goog$module$goog$object.get(node,"tagName"));
} else {
return null;
}
});
frontend.util.starts_with_QMARK_ = (function frontend$util$starts_with_QMARK_(s,substr){
return clojure.string.starts_with_QMARK_(s,substr);
});
frontend.util.distinct_by = logseq.common.util.distinct_by;
frontend.util.distinct_by_last_wins = logseq.common.util.distinct_by_last_wins;
frontend.util.safe_lower_case = (function frontend$util$safe_lower_case(s){
if(typeof s === 'string'){
return clojure.string.lower_case(s);
} else {
return s;
}
});
frontend.util.trim_safe = (function frontend$util$trim_safe(s){
if(typeof s === 'string'){
return clojure.string.trim(s);
} else {
return s;
}
});
frontend.util.trimr_without_newlines = (function frontend$util$trimr_without_newlines(s){
return s.replace(/[ \t\r]+$/,"");
});
frontend.util.triml_without_newlines = (function frontend$util$triml_without_newlines(s){
return s.replace(/^[ \t\r]+/,"");
});
frontend.util.concat_without_spaces = (function frontend$util$concat_without_spaces(left,right){
if(((typeof left === 'string') && (typeof right === 'string'))){
var left__$1 = frontend.util.trimr_without_newlines(left);
var not_space_QMARK_ = ((clojure.string.blank_QMARK_(left__$1)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.last(left__$1))));
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(left__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((not_space_QMARK_)?null:" "))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.triml_without_newlines(right)));
} else {
return null;
}
});
frontend.util.cjk_string_QMARK_ = (function frontend$util$cjk_string_QMARK_(s){
return cljs.core.re_find(/[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]/,s);
});
frontend.util.replace_first = (function frontend$util$replace_first(pattern,s,new_value){
var temp__5823__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(s,pattern);
if(cljs.core.truth_(temp__5823__auto__)){
var first_index = temp__5823__auto__;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_value)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(first_index + cljs.core.count(pattern)))));
} else {
return s;
}
});
frontend.util.replace_last = (function frontend$util$replace_last(var_args){
var G__34517 = arguments.length;
switch (G__34517) {
case 3:
return frontend.util.replace_last.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return frontend.util.replace_last.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.util.replace_last.cljs$core$IFn$_invoke$arity$3 = (function (pattern,s,new_value){
return frontend.util.replace_last.cljs$core$IFn$_invoke$arity$4(pattern,s,new_value,true);
}));

(frontend.util.replace_last.cljs$core$IFn$_invoke$arity$4 = (function (pattern,s,new_value,space_QMARK_){
var temp__5823__auto__ = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,pattern);
if(cljs.core.truth_(temp__5823__auto__)){
var last_index = temp__5823__auto__;
var prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_index);
if(cljs.core.truth_(space_QMARK_)){
return frontend.util.concat_without_spaces(prefix,new_value);
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_value));
}
} else {
return s;
}
}));

(frontend.util.replace_last.cljs$lang$maxFixedArity = 4);

frontend.util.re_pos = (function frontend$util$re_pos(re,s){
var re__$1 = (new RegExp(re.source,"g"));
var res = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5823__auto__ = re__$1.exec(s);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
var G__34741 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m.index,cljs.core.first(m)], null));
res = G__34741;
continue;
} else {
return res;
}
break;
}
});
frontend.util.safe_set_range_text_BANG_ = (function frontend$util$safe_set_range_text_BANG_(var_args){
var G__34519 = arguments.length;
switch (G__34519) {
case 4:
return frontend.util.safe_set_range_text_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return frontend.util.safe_set_range_text_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.util.safe_set_range_text_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (input,text,start,end){
try{return input.setRangeText(text,start,end);
}catch (e34520){var _e = e34520;
return null;
}}));

(frontend.util.safe_set_range_text_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (input,text,start,end,select_mode){
try{return input.setRangeText(text,start,end,select_mode);
}catch (e34521){var _e = e34521;
return null;
}}));

(frontend.util.safe_set_range_text_BANG_.cljs$lang$maxFixedArity = 5);

frontend.util.safe_dec_current_pos_from_end = (function frontend$util$safe_dec_current_pos_from_end(input,current_pos){
var temp__5823__auto__ = (function (){var and__5140__auto__ = typeof current_pos === 'number';
if(and__5140__auto__){
var and__5140__auto____$1 = typeof input === 'string';
if(and__5140__auto____$1){
return input.length;
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var len = temp__5823__auto__;
var temp__5823__auto____$1 = (function (){var and__5140__auto__ = (len >= (2));
if(and__5140__auto__){
var and__5140__auto____$1 = (current_pos <= len);
if(and__5140__auto____$1){
return input.substring(cljs.core.max.cljs$core$IFn$_invoke$arity$2((current_pos - (20)),(0)),current_pos);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto____$1)){
var input__$1 = temp__5823__auto____$1;
try{var temp__5823__auto____$2 = cljs.core.peek(frontend.util.split_grapheme_clusters(input__$1));
if(cljs.core.truth_(temp__5823__auto____$2)){
var last_grapheme = temp__5823__auto____$2;
return (current_pos - last_grapheme.length);
} else {
return (current_pos - (1));
}
}catch (e34522){var e = e34522;
console.error(e);

return (current_pos - (1));
}} else {
return (current_pos - (1));
}
} else {
return current_pos;
}
});
frontend.util.safe_inc_current_pos_from_start = (function frontend$util$safe_inc_current_pos_from_start(input,current_pos){
var temp__5823__auto__ = (function (){var and__5140__auto__ = typeof current_pos === 'number';
if(and__5140__auto__){
var and__5140__auto____$1 = typeof input === 'string';
if(and__5140__auto____$1){
return input.length;
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var len = temp__5823__auto__;
var temp__5823__auto____$1 = (function (){var and__5140__auto__ = (len >= (2));
if(and__5140__auto__){
var and__5140__auto____$1 = (current_pos <= len);
if(and__5140__auto____$1){
return input.substr(current_pos,(20));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto____$1)){
var input__$1 = temp__5823__auto____$1;
try{var temp__5823__auto____$2 = cljs.core.first(frontend.util.split_grapheme_clusters(input__$1));
if(cljs.core.truth_(temp__5823__auto____$2)){
var first_grapheme = temp__5823__auto____$2;
return (current_pos + first_grapheme.length);
} else {
return (current_pos + (1));
}
}catch (e34544){var e = e34544;
console.error(e);

return (current_pos + (1));
}} else {
return (current_pos + (1));
}
} else {
return current_pos;
}
});
frontend.util.kill_line_before_BANG_ = (function frontend$util$kill_line_before_BANG_(input){
var val = input.value;
var end = frontend.util.get_selection_start(input);
var n_pos = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$3(val,"\n",(end - (1)));
var start = (cljs.core.truth_(n_pos)?(n_pos + (1)):(0));
return frontend.util.safe_set_range_text_BANG_.cljs$core$IFn$_invoke$arity$4(input,"",start,end);
});
frontend.util.kill_line_after_BANG_ = (function frontend$util$kill_line_after_BANG_(input){
var val = input.value;
var start = frontend.util.get_selection_start(input);
var end = (function (){var or__5142__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(val,"\n",start);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.count(val);
}
})();
return frontend.util.safe_set_range_text_BANG_.cljs$core$IFn$_invoke$arity$4(input,"",start,end);
});
frontend.util.insert_at_current_position_BANG_ = (function frontend$util$insert_at_current_position_BANG_(input,text){
var start = frontend.util.get_selection_start(input);
var end = frontend.util.get_selection_end(input);
return frontend.util.safe_set_range_text_BANG_.cljs$core$IFn$_invoke$arity$5(input,text,start,end,"end");
});
frontend.util.safe_subvec = (function frontend$util$safe_subvec(xs,start,end){
if((((start < (0))) || ((((start > end)) || ((end > cljs.core.count(xs))))))){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(xs,start,end);
}
});
frontend.util.get_nodes_between_two_nodes = (function frontend$util$get_nodes_between_two_nodes(node_1,node_2,class$){
var temp__5825__auto__ = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.getElementsByClassName(class$));
if(cljs.core.truth_(temp__5825__auto__)){
var nodes = temp__5825__auto__;
var idx_1 = nodes.indexOf(node_1);
var idx_2 = nodes.indexOf(node_2);
var start = cljs.core.min.cljs$core$IFn$_invoke$arity$2(idx_1,idx_2);
var end = (cljs.core.max.cljs$core$IFn$_invoke$arity$2(idx_1,idx_2) + (1));
return frontend.util.safe_subvec(cljs.core.vec(nodes),start,end);
} else {
return null;
}
});
frontend.util.get_direction_between_two_nodes = (function frontend$util$get_direction_between_two_nodes(node_1,node_2,class$){
var temp__5825__auto__ = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.getElementsByClassName(class$));
if(cljs.core.truth_(temp__5825__auto__)){
var nodes = temp__5825__auto__;
var idx_1 = nodes.indexOf(node_1);
var idx_2 = nodes.indexOf(node_2);
if((idx_1 >= idx_2)){
return new cljs.core.Keyword(null,"up","up",-269712113);
} else {
return new cljs.core.Keyword(null,"down","down",1565245570);
}
} else {
return null;
}
});
frontend.util.rec_get_node = (function frontend$util$rec_get_node(node,class$){
if(cljs.core.truth_((function (){var and__5140__auto__ = node;
if(cljs.core.truth_(and__5140__auto__)){
return dommy.core.has_class_QMARK_(node,class$);
} else {
return and__5140__auto__;
}
})())){
return node;
} else {
var and__5140__auto__ = node;
if(cljs.core.truth_(and__5140__auto__)){
var G__34577 = frontend.util.goog$module$goog$object.get(node,"parentNode");
var G__34578 = class$;
return (frontend.util.rec_get_node.cljs$core$IFn$_invoke$arity$2 ? frontend.util.rec_get_node.cljs$core$IFn$_invoke$arity$2(G__34577,G__34578) : frontend.util.rec_get_node.call(null,G__34577,G__34578));
} else {
return and__5140__auto__;
}
}
});
frontend.util.rec_get_blocks_container = (function frontend$util$rec_get_blocks_container(node){
return frontend.util.rec_get_node(node,"blocks-container");
});
frontend.util.rec_get_blocks_content_section = (function frontend$util$rec_get_blocks_content_section(node){
return frontend.util.rec_get_node(node,"content");
});
frontend.util.get_blocks_noncollapse = (function frontend$util$get_blocks_noncollapse(var_args){
var G__34580 = arguments.length;
switch (G__34580) {
case 0:
return frontend.util.get_blocks_noncollapse.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.util.get_blocks_noncollapse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.util.get_blocks_noncollapse.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (b){
return (!((frontend.util.goog$module$goog$object.get(b,"offsetParent") == null)));
}),dommy.utils.__GT_Array(document.querySelectorAll("div .ls-block")));
}));

(frontend.util.get_blocks_noncollapse.cljs$core$IFn$_invoke$arity$1 = (function (blocks_container){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (b){
return (!((frontend.util.goog$module$goog$object.get(b,"offsetParent") == null)));
}),dommy.utils.__GT_Array(blocks_container.querySelectorAll("div .ls-block")));
}));

(frontend.util.get_blocks_noncollapse.cljs$lang$maxFixedArity = 1);

frontend.util.remove_embedded_blocks = (function frontend$util$remove_embedded_blocks(blocks){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",dommy.core.attr(b,"data-embed"));
}),blocks);
});
frontend.util.remove_property_value_blocks = (function frontend$util$remove_property_value_blocks(blocks){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (b){
return dommy.core.has_class_QMARK_(b,"property-value-container");
}),blocks);
});
/**
 * The real `.ls-block[blockid]` inside a property-value wrapper, if any.
 */
frontend.util.property_value_inner_block = (function frontend$util$property_value_inner_block(node){
if(cljs.core.truth_((function (){var and__5140__auto__ = node;
if(cljs.core.truth_(and__5140__auto__)){
return dommy.core.has_class_QMARK_(node,"property-value-container");
} else {
return and__5140__auto__;
}
})())){
return node.querySelector(".ls-block[blockid]");
} else {
return null;
}
});
/**
 * Map a selected property-value wrapper to its inner block.
 */
frontend.util.unwrap_property_value_container = (function frontend$util$unwrap_property_value_container(node){
var or__5142__auto__ = frontend.util.property_value_inner_block(node);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return node;
}
});
/**
 * Block UUID for a selected node, including text property-value wrappers.
 */
frontend.util.selection_node_block_id = (function frontend$util$selection_node_block_id(node){
if(cljs.core.truth_((function (){var G__34583 = node;
if((G__34583 == null)){
return null;
} else {
return G__34583.getAttribute;
}
})())){
var temp__5825__auto__ = (function (){var or__5142__auto__ = dommy.core.attr(node,"blockid");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var G__34584 = frontend.util.property_value_inner_block(node);
if((G__34584 == null)){
return null;
} else {
return dommy.core.attr(G__34584,"blockid");
}
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
if(cljs.core.truth_((function (){var G__34585 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));
return (frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1(G__34585) : frontend.util.uuid_string_QMARK_.call(null,G__34585));
})())){
return cljs.core.uuid(id);
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
frontend.util.get_selected_text = (function frontend$util$get_selected_text(){
return module$frontend$utils.getSelectionText();
});
frontend.util.clear_selection_BANG_ = module$frontend$selection.clearSelection;
frontend.util.write_clipboard = (function frontend$util$write_clipboard(var_args){
var G__34587 = arguments.length;
switch (G__34587) {
case 1:
return frontend.util.write_clipboard.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.util.write_clipboard.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.util.write_clipboard.cljs$core$IFn$_invoke$arity$1 = (function (data){
return frontend.util.write_clipboard.cljs$core$IFn$_invoke$arity$2(data,null);
}));

(frontend.util.write_clipboard.cljs$core$IFn$_invoke$arity$2 = (function (data,owner_window){
if(cljs.core.truth_(module$node_modules$$capacitor$core$dist$index_cjs.Capacitor.isNativePlatform())){
return frontend.util.goog$module$goog$object.get(module$node_modules$$capacitor$clipboard$dist$plugin_cjs,"Clipboard").write(({"string": frontend.util.goog$module$goog$object.get(data,"text")}));
} else {
return module$frontend$utils.writeClipboard(data,owner_window);
}
}));

(frontend.util.write_clipboard.cljs$lang$maxFixedArity = 2);

frontend.util.copy_to_clipboard_BANG_ = (function frontend$util$copy_to_clipboard_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___34747 = arguments.length;
var i__5877__auto___34748 = (0);
while(true){
if((i__5877__auto___34748 < len__5876__auto___34747)){
args__5882__auto__.push((arguments[i__5877__auto___34748]));

var G__34749 = (i__5877__auto___34748 + (1));
i__5877__auto___34748 = G__34749;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.util.copy_to_clipboard_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.util.copy_to_clipboard_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (text,p__34591){
var map__34592 = p__34591;
var map__34592__$1 = cljs.core.__destructure_map(map__34592);
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34592__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var html = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34592__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34592__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var embed_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34592__$1,new cljs.core.Keyword(null,"embed-block?","embed-block?",402074593));
var owner_window = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34592__$1,new cljs.core.Keyword(null,"owner-window","owner-window",-2139116435));
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34592__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var blocks__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,blocks);
var data = cljs.core.clj__GT_js(logseq.common.util.remove_nils_non_nested(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"html","html",-998796897),html,new cljs.core.Keyword(null,"blocks","blocks",-610462153),(cljs.core.truth_((function (){var and__5140__auto__ = graph;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.seq(blocks__$1);
} else {
return and__5140__auto__;
}
})())?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"graph","graph",1558099509),graph,new cljs.core.Keyword(null,"embed-block?","embed-block?",402074593),embed_block_QMARK_,new cljs.core.Keyword(null,"op","op",-1882987955),op,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.vec(blocks__$1)], null)], 0)):null)], null)));
if(cljs.core.truth_(owner_window)){
return frontend.util.write_clipboard.cljs$core$IFn$_invoke$arity$2(data,owner_window);
} else {
return frontend.util.write_clipboard.cljs$core$IFn$_invoke$arity$1(data);
}
}));

(frontend.util.copy_to_clipboard_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.util.copy_to_clipboard_BANG_.cljs$lang$applyTo = (function (seq34588){
var G__34589 = cljs.core.first(seq34588);
var seq34588__$1 = cljs.core.next(seq34588);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34589,seq34588__$1);
}));

frontend.util.drop_nth = (function frontend$util$drop_nth(n,coll){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__34594_SHARP_,p2__34595_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__34594_SHARP_,n)){
return p2__34595_SHARP_;
} else {
return null;
}
}),coll);
});
frontend.util.atom_QMARK_ = (function frontend$util$atom_QMARK_(v){
return (v instanceof cljs.core.Atom);
});
frontend.util.react = (function frontend$util$react(ref){
if(cljs.core.truth_(ref)){
return cljs.core.deref(ref);
} else {
return null;
}
});
frontend.util.time_ms = logseq.common.util.time_ms;
frontend.util.d = (function frontend$util$d(k,f){
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"Debug "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k))], 0));

var start__5754__auto___34750 = cljs.core.system_time();
var ret__5755__auto___34751 = cljs.core.reset_BANG_(result,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null))));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"Elapsed time: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.system_time() - start__5754__auto___34750).toFixed((6)))+" msecs")], 0));


return cljs.core.deref(result);
});
frontend.util.set_title_BANG_ = (function frontend$util$set_title_BANG_(title){
return (document.title = title);
});
frontend.util.get_block_container = (function frontend$util$get_block_container(block_element){
if(cljs.core.truth_(block_element)){
var temp__5825__auto__ = (function (){var G__34596 = frontend.util.rec_get_blocks_content_section(block_element);
if((G__34596 == null)){
return null;
} else {
return dommy.core.parent(G__34596);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var section = temp__5825__auto__;
if(cljs.core.truth_(section)){
return goog.dom.getElement(section,"id");
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
frontend.util.skip_same_top_blocks = (function frontend$util$skip_same_top_blocks(blocks,block){
var property_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dommy.core.attr(block,"data-is-property"),"true");
var properties_area = frontend.util.rec_get_node(block,"ls-properties-area");
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (b){
var and__5140__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(b,block);
if(and__5140__auto__){
var or__5142__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(b)?b.getBoundingClientRect().top:null),(cljs.core.truth_(block)?block.getBoundingClientRect().top:null));
if(or__5142__auto__){
return or__5142__auto__;
} else {
if(property_QMARK_){
var and__5140__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(dommy.core.attr(b,"data-is-property"),"true");
if(and__5140__auto____$1){
return goog.dom.contains(properties_area,b);
} else {
return and__5140__auto____$1;
}
} else {
return null;
}
}
} else {
return and__5140__auto__;
}
}),blocks);
});
/**
 * Gets previous non-collapsed block. If given a container
 *    looks up blocks in that container e.g. for embed
 */
frontend.util.get_prev_block_non_collapsed = (function frontend$util$get_prev_block_non_collapsed(var_args){
var G__34598 = arguments.length;
switch (G__34598) {
case 1:
return frontend.util.get_prev_block_non_collapsed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.util.get_prev_block_non_collapsed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.util.get_prev_block_non_collapsed.cljs$core$IFn$_invoke$arity$1 = (function (block){
return frontend.util.get_prev_block_non_collapsed.cljs$core$IFn$_invoke$arity$2(block,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.util.get_prev_block_non_collapsed.cljs$core$IFn$_invoke$arity$2 = (function (block,p__34599){
var map__34600 = p__34599;
var map__34600__$1 = cljs.core.__destructure_map(map__34600);
var container = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34600__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var up_down_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34600__$1,new cljs.core.Keyword(null,"up-down?","up-down?",1084256379));
var exclude_property_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34600__$1,new cljs.core.Keyword(null,"exclude-property?","exclude-property?",1621722390));
var temp__5825__auto__ = (cljs.core.truth_(container)?frontend.util.get_blocks_noncollapse.cljs$core$IFn$_invoke$arity$1(container):frontend.util.get_blocks_noncollapse.cljs$core$IFn$_invoke$arity$0());
if(cljs.core.truth_(temp__5825__auto__)){
var blocks = temp__5825__auto__;
var blocks__$1 = (function (){var G__34601 = (cljs.core.truth_(up_down_QMARK_)?frontend.util.skip_same_top_blocks(blocks,block):blocks);
if(cljs.core.truth_(exclude_property_QMARK_)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (node){
return dommy.core.has_class_QMARK_(node,"property-value-container");
}),G__34601);
} else {
return G__34601;
}
})();
var index = blocks__$1.indexOf(block);
if((index > (0))){
return frontend.util.nth_safe(blocks__$1,(index - (1)));
} else {
return null;
}
} else {
return null;
}
}));

(frontend.util.get_prev_block_non_collapsed.cljs$lang$maxFixedArity = 2);

frontend.util.get_prev_block_non_collapsed_non_embed = (function frontend$util$get_prev_block_non_collapsed_non_embed(block){
var temp__5825__auto__ = frontend.util.remove_property_value_blocks(frontend.util.remove_embedded_blocks(frontend.util.get_blocks_noncollapse.cljs$core$IFn$_invoke$arity$0()));
if(cljs.core.truth_(temp__5825__auto__)){
var blocks = temp__5825__auto__;
var index = blocks.indexOf(block);
if((index > (0))){
return frontend.util.nth_safe(blocks,(index - (1)));
} else {
return null;
}
} else {
return null;
}
});
frontend.util.get_next_block_non_collapsed = (function frontend$util$get_next_block_non_collapsed(block,p__34603){
var map__34604 = p__34603;
var map__34604__$1 = cljs.core.__destructure_map(map__34604);
var up_down_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34604__$1,new cljs.core.Keyword(null,"up-down?","up-down?",1084256379));
var exclude_property_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34604__$1,new cljs.core.Keyword(null,"exclude-property?","exclude-property?",1621722390));
var temp__5825__auto__ = (function (){var and__5140__auto__ = block;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.util.get_blocks_noncollapse.cljs$core$IFn$_invoke$arity$0();
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var blocks = temp__5825__auto__;
var blocks__$1 = (function (){var G__34605 = (cljs.core.truth_(up_down_QMARK_)?frontend.util.skip_same_top_blocks(blocks,block):blocks);
if(cljs.core.truth_(exclude_property_QMARK_)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (node){
return dommy.core.has_class_QMARK_(node,"property-value-container");
}),G__34605);
} else {
return G__34605;
}
})();
var index = blocks__$1.indexOf(block);
if((index < (0))){
return null;
} else {
return frontend.util.nth_safe(blocks__$1,(index + (1)));
}
} else {
return null;
}
});
frontend.util.get_next_block_non_collapsed_skip = (function frontend$util$get_next_block_non_collapsed_skip(block){
var temp__5825__auto__ = frontend.util.get_blocks_noncollapse.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(temp__5825__auto__)){
var blocks = temp__5825__auto__;
var index = blocks.indexOf(block);
if((index < (0))){
return null;
} else {
var idx = (index + (1));
while(true){
if((cljs.core.count(blocks) > idx)){
var block__$1 = frontend.util.nth_safe(blocks,idx);
var nested_QMARK_ = cljs.core.some(((function (idx,block__$1,index,blocks,temp__5825__auto__){
return (function (dom){
return dom.contains(block__$1);
});})(idx,block__$1,index,blocks,temp__5825__auto__))
,cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getElementsByClass("selected")));
if(cljs.core.truth_(nested_QMARK_)){
var G__34775 = (idx + (1));
idx = G__34775;
continue;
} else {
return block__$1;
}
} else {
return null;
}
break;
}
}
} else {
return null;
}
});
frontend.util.rand_str = (function frontend$util$rand_str(n){
return Math.random().toString((36)).substr((2),n);
});
frontend.util.unique_id = (function frontend$util$unique_id(){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.rand_str((6)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.rand_str((3))));
});
frontend.util.pp_str = (function frontend$util$pp_str(x){
var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34606_34780 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34607_34781 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34608_34782 = true;
var _STAR_print_fn_STAR__temp_val__34609_34783 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34608_34782);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34609_34783);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34607_34781);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34606_34780);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
});
frontend.util.hiccup_keywordize = (function frontend$util$hiccup_keywordize(hiccup){
return clojure.walk.postwalk((function (f){
if(((cljs.core.vector_QMARK_(f)) && (typeof cljs.core.first(f) === 'string'))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(f,(0),cljs.core.keyword);
} else {
return f;
}
}),hiccup);
});
frontend.util.chrome_QMARK_ = (function frontend$util$chrome_QMARK_(){
var user_agent = navigator.userAgent;
var vendor = navigator.vendor;
return cljs.core.boolean$((function (){var and__5140__auto__ = (function (){var G__34614 = /Chrome/;
var G__34615 = user_agent;
return (frontend.util.safe_re_find.cljs$core$IFn$_invoke$arity$2 ? frontend.util.safe_re_find.cljs$core$IFn$_invoke$arity$2(G__34614,G__34615) : frontend.util.safe_re_find.call(null,G__34614,G__34615));
})();
if(cljs.core.truth_(and__5140__auto__)){
var G__34616 = /Google Inc/;
var G__34617 = vendor;
return (frontend.util.safe_re_find.cljs$core$IFn$_invoke$arity$2 ? frontend.util.safe_re_find.cljs$core$IFn$_invoke$arity$2(G__34616,G__34617) : frontend.util.safe_re_find.call(null,G__34616,G__34617));
} else {
return and__5140__auto__;
}
})());
});
if((typeof frontend !== 'undefined') && (typeof frontend.util !== 'undefined') && (typeof frontend.util.mac_QMARK_ !== 'undefined')){
} else {
frontend.util.mac_QMARK_ = goog.userAgent.MAC;
}
if((typeof frontend !== 'undefined') && (typeof frontend.util !== 'undefined') && (typeof frontend.util.win32_QMARK_ !== 'undefined')){
} else {
frontend.util.win32_QMARK_ = goog.userAgent.WINDOWS;
}
if((typeof frontend !== 'undefined') && (typeof frontend.util !== 'undefined') && (typeof frontend.util.linux_QMARK_ !== 'undefined')){
} else {
frontend.util.linux_QMARK_ = goog.userAgent.LINUX;
}
frontend.util.get_blocks_by_id = (function frontend$util$get_blocks_by_id(block_id){
if(cljs.core.truth_((function (){var G__34618 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id));
return (frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1(G__34618) : frontend.util.uuid_string_QMARK_.call(null,G__34618));
})())){
return dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector((function (){var G__34623 = "[blockid='%s']";
var G__34624 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id));
return (frontend.util.format.cljs$core$IFn$_invoke$arity$2 ? frontend.util.format.cljs$core$IFn$_invoke$arity$2(G__34623,G__34624) : frontend.util.format.call(null,G__34623,G__34624));
})())));
} else {
return null;
}
});
frontend.util.get_first_block_by_id = (function frontend$util$get_first_block_by_id(block_id){
return cljs.core.first(frontend.util.get_blocks_by_id(block_id));
});
frontend.util.url_encode = (function frontend$util$url_encode(string){
var G__34625 = string;
var G__34625__$1 = (((G__34625 == null))?null:(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34625)));
var G__34625__$2 = (((G__34625__$1 == null))?null:encodeURIComponent(G__34625__$1));
if((G__34625__$2 == null)){
return null;
} else {
return G__34625__$2.replace("+","%20");
}
});
/**
 * Delegate to common-util to loosely couple app usages to graph-parser
 */
frontend.util.page_name_sanity_lc = logseq.common.util.page_name_sanity_lc;
frontend.util.safe_page_name_sanity_lc = logseq.common.util.safe_page_name_sanity_lc;
frontend.util.add_style_BANG_ = (function frontend$util$add_style_BANG_(style){
if((!((style == null)))){
var parent_node = document.head;
var id = "logseq-custom-theme-id";
var old_link_element = document.querySelector(dommy.core.selector((""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))));
var style__$1 = ((clojure.string.starts_with_QMARK_(style,"http"))?style:(""+"data:text/css;charset=utf-8,"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(style))));
if(cljs.core.truth_(old_link_element)){
dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1(old_link_element);
} else {
}

var link = dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(dommy.core.create_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link","link",-1769163468)),new cljs.core.Keyword(null,"id","id",-1388402092),id),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"),new cljs.core.Keyword(null,"type","type",1174270348),"text/css"),new cljs.core.Keyword(null,"href","href",-793805698),style__$1),new cljs.core.Keyword(null,"media","media",-1066138403),"all");
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent_node,link);
} else {
return null;
}
});
frontend.util.get_file_ext = (function frontend$util$get_file_ext(file){
var and__5140__auto__ = typeof file === 'string';
if(and__5140__auto__){
var and__5140__auto____$1 = clojure.string.includes_QMARK_(file,".");
if(and__5140__auto____$1){
var G__34626 = logseq.common.util.path__GT_file_ext(file);
if((G__34626 == null)){
return null;
} else {
return clojure.string.lower_case(G__34626);
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
});
frontend.util.get_dir_and_basename = (function frontend$util$get_dir_and_basename(path){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,"/");
var basename = cljs.core.last(parts);
var dir = (function (){var G__34627 = cljs.core.butlast(parts);
return (frontend.util.string_join_path.cljs$core$IFn$_invoke$arity$1 ? frontend.util.string_join_path.cljs$core$IFn$_invoke$arity$1(G__34627) : frontend.util.string_join_path.call(null,G__34627));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dir,basename], null);
});
frontend.util.keyname = (function frontend$util$keyname(key){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(key))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key)));
});
frontend.util.backward_kill_word = (function frontend$util$backward_kill_word(input){
var val = input.value;
var current = frontend.util.get_selection_start(input);
var prev = (function (){var or__5142__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$3(val," ",(current - (1))),clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$3(val,"\n",(current - (1)))], null)));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})();
var idx = (((prev === (0)))?(0):((function (){var idx = prev;
while(true){
if(cljs.core.truth_((function (){var G__34637 = frontend.util.nth_safe(val,idx);
var fexpr__34636 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"\n",null], null), null);
return (fexpr__34636.cljs$core$IFn$_invoke$arity$1 ? fexpr__34636.cljs$core$IFn$_invoke$arity$1(G__34637) : fexpr__34636.call(null,G__34637));
})())){
var G__34807 = (idx - (1));
idx = G__34807;
continue;
} else {
return idx;
}
break;
}
})() + (1)));
return frontend.util.safe_set_range_text_BANG_.cljs$core$IFn$_invoke$arity$4(input,"",idx,current);
});
frontend.util.forward_kill_word = (function frontend$util$forward_kill_word(input){
var val = input.value;
var current = frontend.util.get_selection_start(input);
var current__$1 = (function (){var idx = current;
while(true){
if(cljs.core.truth_((function (){var G__34641 = frontend.util.nth_safe(val,idx);
var fexpr__34640 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"\n",null], null), null);
return (fexpr__34640.cljs$core$IFn$_invoke$arity$1 ? fexpr__34640.cljs$core$IFn$_invoke$arity$1(G__34641) : fexpr__34640.call(null,G__34641));
})())){
var G__34808 = (idx + (1));
idx = G__34808;
continue;
} else {
return idx;
}
break;
}
})();
var idx = (function (){var or__5142__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(val," ",current__$1),clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(val,"\n",current__$1)], null)));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.count(val);
}
})();
return frontend.util.safe_set_range_text_BANG_.cljs$core$IFn$_invoke$arity$4(input,"",current__$1,(idx + (1)));
});
frontend.util.fix_open_external_with_shift_BANG_ = (function frontend$util$fix_open_external_with_shift_BANG_(e){
if(cljs.core.truth_((function (){var and__5140__auto__ = e.shiftKey;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = frontend.util.win32_QMARK_;
if(cljs.core.truth_(and__5140__auto____$1)){
var and__5140__auto____$2 = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5140__auto____$2)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(e.target.nodeName),"a")) && (clojure.string.starts_with_QMARK_(e.target.href,"file:")));
} else {
return and__5140__auto____$2;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return e.preventDefault();
} else {
return null;
}
});
/**
 * Like react classnames utility:
 * 
 *   ```
 *    [:div {:class (classnames [:a :b {:c true}])}
 *   ```
 *   
 */
frontend.util.classnames = (function frontend$util$classnames(args){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__34644_SHARP_){
if(cljs.core.map_QMARK_(p1__34644_SHARP_)){
var iter__5628__auto__ = (function frontend$util$classnames_$_iter__34645(s__34646){
return (new cljs.core.LazySeq(null,(function (){
var s__34646__$1 = s__34646;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__34646__$1);
if(temp__5825__auto__){
var s__34646__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34646__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__34646__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__34648 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__34647 = (0);
while(true){
if((i__34647 < size__5627__auto__)){
var vec__34649 = cljs.core._nth(c__5626__auto__,i__34647);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34649,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34649,(1),null);
cljs.core.chunk_append(b__34648,(cljs.core.truth_(v)?cljs.core.name(k):null));

var G__34812 = (i__34647 + (1));
i__34647 = G__34812;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34648),frontend$util$classnames_$_iter__34645(cljs.core.chunk_rest(s__34646__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34648),null);
}
} else {
var vec__34652 = cljs.core.first(s__34646__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34652,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34652,(1),null);
return cljs.core.cons((cljs.core.truth_(v)?cljs.core.name(k):null),frontend$util$classnames_$_iter__34645(cljs.core.rest(s__34646__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(p1__34644_SHARP_);
} else {
if((p1__34644_SHARP_ == null)){
return null;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(p1__34644_SHARP_)], null);
}
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0)));
});
frontend.util.get_dom_top = (function frontend$util$get_dom_top(node){
if(cljs.core.truth_(node)){
return frontend.util.goog$module$goog$object.get(node.getBoundingClientRect(),"top");
} else {
return null;
}
});
frontend.util.sort_by_height = (function frontend$util$sort_by_height(elements){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (x,y){
return (frontend.util.get_dom_top(x) < frontend.util.get_dom_top(y));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,elements));
});
frontend.util.calc_delta_rect_offset = (function frontend$util$calc_delta_rect_offset(target,container){
var target_rect = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(target.getBoundingClientRect().toJSON());
var viewport_rect = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),container.clientWidth,new cljs.core.Keyword(null,"height","height",1025178622),container.clientHeight], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(viewport_rect) - new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(target_rect)),new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(viewport_rect) - new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(target_rect))], null);
});
frontend.util.meta_key_QMARK_ = (function frontend$util$meta_key_QMARK_(e){
if(cljs.core.truth_(frontend.util.mac_QMARK_)){
return frontend.util.goog$module$goog$object.get(e,"metaKey");
} else {
return frontend.util.goog$module$goog$object.get(e,"ctrlKey");
}
});
frontend.util.shift_key_QMARK_ = (function frontend$util$shift_key_QMARK_(e){
return frontend.util.goog$module$goog$object.get(e,"shiftKey");
});
frontend.util.right_click_QMARK_ = (function frontend$util$right_click_QMARK_(e){
var which = frontend.util.goog$module$goog$object.get(e,"which");
var button = frontend.util.goog$module$goog$object.get(e,"button");
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(which,(3))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(button,(2))));
});
frontend.util.keyboard_height = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
frontend.util.scroll_editor_cursor = (function frontend$util$scroll_editor_cursor(var_args){
var G__34661 = arguments.length;
switch (G__34661) {
case 1:
return frontend.util.scroll_editor_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.util.scroll_editor_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.util.scroll_editor_cursor.cljs$core$IFn$_invoke$arity$1 = (function (el){
return frontend.util.scroll_editor_cursor.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(frontend.util.scroll_editor_cursor.cljs$core$IFn$_invoke$arity$2 = (function (el,start_QMARK_){
if(cljs.core.truth_((function (){var and__5140__auto__ = el;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(and__5140__auto____$1)){
return ((cljs.core.not(start_QMARK_)) || ((frontend.util.get_selection_start(el) === (0))));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
var temp__5825__auto__ = frontend.util.app_scroll_container_node.cljs$core$IFn$_invoke$arity$1(el);
if(cljs.core.truth_(temp__5825__auto__)){
var scroll_node = temp__5825__auto__;
var scroll_top_SINGLEQUOTE_ = scroll_node.scrollTop;
var vw_height = (cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())?(window.screen.height - (function (){var or__5142__auto__ = cljs.core.deref(frontend.util.keyboard_height);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (312);
}
})()):(function (){var or__5142__auto__ = window.visualViewport.height;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return document.documentElement.clientHeight;
}
})());
var box_rect = el.getBoundingClientRect();
var box_top = box_rect.top;
var top_offset = (84);
var inset = (box_top - (vw_height - top_offset));
if((inset > (0))){
return setTimeout((function (){
return (scroll_node.scrollTop = ((scroll_top_SINGLEQUOTE_ + inset) + ((start_QMARK_ === false)?(96):(64))));
}),(16));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}));

(frontend.util.scroll_editor_cursor.cljs$lang$maxFixedArity = 2);

frontend.util.breakpoint_QMARK_ = (function frontend$util$breakpoint_QMARK_(size){
return (document.documentElement.offsetWidth < size);
});

frontend.util.sm_breakpoint_QMARK_ = (function frontend$util$sm_breakpoint_QMARK_(){
return frontend.util.breakpoint_QMARK_((640));
});
frontend.util.goog_event_QMARK_ = (function frontend$util$goog_event_QMARK_(e){
var and__5140__auto__ = e;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.fn_QMARK_(frontend.util.goog$module$goog$object.get(e,"getBrowserEvent"));
} else {
return and__5140__auto__;
}
});

/**
 * Check if keydown event is a composing (IME) event.
 *      Ignore the IME process by default.
 */
frontend.util.goog_event_is_composing_QMARK_ = (function frontend$util$goog_event_is_composing_QMARK_(var_args){
var G__34665 = arguments.length;
switch (G__34665) {
case 1:
return frontend.util.goog_event_is_composing_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.util.goog_event_is_composing_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.util.goog_event_is_composing_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return frontend.util.goog_event_is_composing_QMARK_.cljs$core$IFn$_invoke$arity$2(e,false);
}));

(frontend.util.goog_event_is_composing_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (e,include_process_QMARK_){
if(cljs.core.truth_(frontend.util.goog_event_QMARK_(e))){
var event_composing_QMARK_ = (function (){var G__34666 = e.getBrowserEvent();
if((G__34666 == null)){
return null;
} else {
return G__34666.isComposing;
}
})();
if(cljs.core.truth_(include_process_QMARK_)){
var or__5142__auto__ = event_composing_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.goog$module$goog$object.get(e,"keyCode"),(229))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.goog$module$goog$object.get(e,"key"),"Process")));
}
} else {
return event_composing_QMARK_;
}
} else {
return null;
}
}));

(frontend.util.goog_event_is_composing_QMARK_.cljs$lang$maxFixedArity = 2);

/**
 * Check if onchange event of Input is a composing (IME) event.
 *     Always ignore the IME process.
 */
frontend.util.native_event_is_composing_QMARK_ = (function frontend$util$native_event_is_composing_QMARK_(e){
var temp__5825__auto__ = (function (){var and__5140__auto__ = e;
if(cljs.core.truth_(and__5140__auto__)){
if(cljs.core.truth_(frontend.util.goog_event_QMARK_(e))){
return e.getBrowserEvent();
} else {
if(cljs.core.truth_("_reactName" in e)){
return e.nativeEvent;
} else {
return e;

}
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var native_event = temp__5825__auto__;
var or__5142__auto__ = native_event.isComposing;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.goog$module$goog$object.get(native_event,"keyCode"),(229))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.goog$module$goog$object.get(native_event,"key"),"Process")));
}
} else {
return null;
}
});
frontend.util.open_url = (function frontend$util$open_url(url){
var route_QMARK_ = ((clojure.string.starts_with_QMARK_(url,clojure.string.replace(location.href,location.hash,""))) || (clojure.string.starts_with_QMARK_(url,"#")));
if(cljs.core.truth_((function (){var and__5140__auto__ = (!(route_QMARK_));
if(and__5140__auto__){
return frontend.util.electron_QMARK_();
} else {
return and__5140__auto__;
}
})())){
return window.apis.openExternal(url);
} else {
return (window.location.href = url);
}
});
frontend.util.collapsed_QMARK_ = (function frontend$util$collapsed_QMARK_(block){
return new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(block);
});
/**
 * time: inst-ms or js/Date
 */
frontend.util.human_time = (function frontend$util$human_time(var_args){
var args__5882__auto__ = [];
var len__5876__auto___34828 = arguments.length;
var i__5877__auto___34829 = (0);
while(true){
if((i__5877__auto___34829 < len__5876__auto___34828)){
args__5882__auto__.push((arguments[i__5877__auto___34829]));

var G__34830 = (i__5877__auto___34829 + (1));
i__5877__auto___34829 = G__34830;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.util.human_time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.util.human_time.cljs$core$IFn$_invoke$arity$variadic = (function (time,p__34673){
var map__34674 = p__34673;
var map__34674__$1 = cljs.core.__destructure_map(map__34674);
var ago_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34674__$1,new cljs.core.Keyword(null,"ago?","ago?",1414384824),true);
var after_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34674__$1,new cljs.core.Keyword(null,"after?","after?",-1377776671),false);
var ago_QMARK___$1 = (cljs.core.truth_(after_QMARK_)?false:ago_QMARK_);
var units = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"second",new cljs.core.Keyword(null,"limit","limit",-1355822363),(60),new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"minute",new cljs.core.Keyword(null,"limit","limit",-1355822363),(3600),new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(60)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"hour",new cljs.core.Keyword(null,"limit","limit",-1355822363),(86400),new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(3600)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"day",new cljs.core.Keyword(null,"limit","limit",-1355822363),(604800),new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(86400)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"week",new cljs.core.Keyword(null,"limit","limit",-1355822363),(2629743),new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(604800)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"month",new cljs.core.Keyword(null,"limit","limit",-1355822363),(31556926),new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(2629743)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"year",new cljs.core.Keyword(null,"limit","limit",-1355822363),Number.MAX_SAFE_INTEGER,new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(31556926)], null)], null);
var time_SINGLEQUOTE_ = (((time instanceof Date))?time:(new Date(time)));
var now = cljs_time.core.now();
var diff = cljs_time.core.in_seconds((cljs.core.truth_(ago_QMARK___$1)?cljs_time.core.interval(time_SINGLEQUOTE_,now):cljs_time.core.interval(now,time_SINGLEQUOTE_)));
if((diff < (5))){
if(cljs.core.truth_(ago_QMARK___$1)){
return "just now";
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(diff)+"seconds");
}
} else {
var unit = cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__34669_SHARP_){
return (((diff >= new cljs.core.Keyword(null,"limit","limit",-1355822363).cljs$core$IFn$_invoke$arity$1(p1__34669_SHARP_))) || (cljs.core.not(new cljs.core.Keyword(null,"limit","limit",-1355822363).cljs$core$IFn$_invoke$arity$1(p1__34669_SHARP_))));
}),units));
return (function (p1__34670_SHARP_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34670_SHARP_)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(unit))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((p1__34670_SHARP_ > (1)))?"s":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(ago_QMARK___$1)?" ago":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(after_QMARK_)?" later":null)));
})((Math.floor((diff / new cljs.core.Keyword(null,"in-second","in-second",-1351007453).cljs$core$IFn$_invoke$arity$1(unit))) | 0));
}
}));

(frontend.util.human_time.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.util.human_time.cljs$lang$applyTo = (function (seq34671){
var G__34672 = cljs.core.first(seq34671);
var seq34671__$1 = cljs.core.next(seq34671);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34672,seq34671__$1);
}));

frontend.util.JS_ROOT = ((frontend.util.node_test_QMARK_)?null:"./js");
frontend.util.js_load$ = (function frontend$util$js_load$(url){
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve){
return frontend.loader.load.cljs$core$IFn$_invoke$arity$2(url,resolve);
}));
});
frontend.util.css_load$ = (function frontend$util$css_load$(var_args){
var G__34676 = arguments.length;
switch (G__34676) {
case 1:
return frontend.util.css_load$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.util.css_load$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.util.css_load$.cljs$core$IFn$_invoke$arity$1 = (function (url){
return frontend.util.css_load$.cljs$core$IFn$_invoke$arity$2(url,null);
}));

(frontend.util.css_load$.cljs$core$IFn$_invoke$arity$2 = (function (url,id){
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve,reject){
var id__$1 = (""+"css-load-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = id;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return url;
}
})()));
if(cljs.core.not(goog.dom.getElement(id__$1))){
var link = document.createElement("link");
(link.id = id__$1);

(link.rel = "stylesheet");

(link.href = url);

(link.onload = resolve);

(link.onerror = reject);

return document.head.append(link);
} else {
return (resolve.cljs$core$IFn$_invoke$arity$0 ? resolve.cljs$core$IFn$_invoke$arity$0() : resolve.call(null));
}
}));
}));

(frontend.util.css_load$.cljs$lang$maxFixedArity = 2);

frontend.util.image_blob__GT_png = (function frontend$util$image_blob__GT_png(blob,cb){
var image = (new Image());
var off_canvas = document.createElement("canvas");
var data_url = URL.createObjectURL(blob);
var ctx = off_canvas.getContext("2d");
(image.onload = (function (){
var width = image.width;
var height = image.height;
(off_canvas.width = width);

(off_canvas.height = height);

ctx.drawImage(image,(0),(0),width,height);

return off_canvas.toBlob(cb);
}));

return (image.src = data_url);
});
frontend.util.native_clipboard = frontend.util.goog$module$goog$object.get(module$node_modules$$capacitor$clipboard$dist$plugin_cjs,"Clipboard");
frontend.util.blob__GT_data_url = (function frontend$util$blob__GT_data_url(blob){
return (new Promise((function (resolve,reject){
var reader = (new FileReader());
(reader.onload = (function (_e){
var G__34682 = reader.result;
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__34682) : resolve.call(null,G__34682));
}));

(reader.onerror = (function (_e){
var G__34683 = reader.error;
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(G__34683) : reject.call(null,G__34683));
}));

return reader.readAsDataURL(blob);
})));
});

frontend.util.write_blob_to_clipboard = (function frontend$util$write_blob_to_clipboard(blob){
if(cljs.core.truth_(frontend.util.native_clipboard)){
return frontend.util.blob__GT_data_url(blob).then((function (data_url){
return frontend.util.native_clipboard.write(({"image": data_url}));
})).then((function (){
return console.log("Copied via native clipboard");
})).catch((function (err){
return console.error("Native clipboard failed",err);
}));
} else {
var item = (new ClipboardItem((function (){var G__34684 = blob.type;
var obj34686 = ({});
(obj34686[G__34684] = blob);

return obj34686;
})()));
return navigator.clipboard.write([item]).then((function (){
return console.log("Copied via web clipboard");
})).catch((function (err){
return console.error("Web clipboard failed",err);
}));
}
});
frontend.util.copy_image_blob_to_clipboard = (function frontend$util$copy_image_blob_to_clipboard(blob){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(blob.type,"image/png")){
return frontend.util.write_blob_to_clipboard(blob);
} else {
return frontend.util.image_blob__GT_png(blob,frontend.util.write_blob_to_clipboard);
}
});
frontend.util.copy_image_to_clipboard = (function frontend$util$copy_image_to_clipboard(src){
return fetch(src).then((function (data){
return data.blob().then(frontend.util.copy_image_blob_to_clipboard).catch(console.error);
}));
});
/**
 * Different from core.memoize, it only cache the last result.
 * Returns a memoized version of a referentially transparent function. The
 *   memoized version of the function cache the the last result, and replay when calls
 * with the same arguments, or update cache when with different arguments.
 */
frontend.util.memoize_last = (function frontend$util$memoize_last(f){
var last_mem = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var last_args = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function() { 
var G__34866__delegate = function (args){
if((((cljs.core.deref(last_mem) == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(last_args),args)))){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
cljs.core.reset_BANG_(last_args,args);

cljs.core.reset_BANG_(last_mem,ret);

return ret;
} else {
return cljs.core.deref(last_mem);
}
};
var G__34866 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34867__i = 0, G__34867__a = new Array(arguments.length -  0);
while (G__34867__i < G__34867__a.length) {G__34867__a[G__34867__i] = arguments[G__34867__i + 0]; ++G__34867__i;}
  args = new cljs.core.IndexedSeq(G__34867__a,0,null);
} 
return G__34866__delegate.call(this,args);};
G__34866.cljs$lang$maxFixedArity = 0;
G__34866.cljs$lang$applyTo = (function (arglist__34868){
var args = cljs.core.seq(arglist__34868);
return G__34866__delegate(args);
});
G__34866.cljs$core$IFn$_invoke$arity$variadic = G__34866__delegate;
return G__34866;
})()
;
});
frontend.util.schedule = (function (){var or__5142__auto__ = (function (){var and__5140__auto__ = (typeof window !== 'undefined');
if(and__5140__auto__){
var or__5142__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (function (p1__34688_SHARP_){
return setTimeout(p1__34688_SHARP_,(16));
});
}
})();
/**
 * Parse URL parameters in hash(fragment) into a hashmap
 */
frontend.util.parse_params = (function frontend$util$parse_params(){
if(frontend.util.node_test_QMARK_){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var temp__5825__auto__ = cljs.core.not_empty(window.location.hash);
if(cljs.core.truth_(temp__5825__auto__)){
var fragment = temp__5825__auto__;
if(clojure.string.starts_with_QMARK_(fragment,"#/?")){
return clojure.walk.keywordize_keys(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(cljs.core.seq((new URLSearchParams(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fragment,(2))))))));
} else {
return null;
}
} else {
return null;
}
}
});
frontend.util.get_cm_instance = (function frontend$util$get_cm_instance(target){
if(cljs.core.truth_(target)){
var G__34689 = target;
var G__34689__$1 = (((G__34689 == null))?null:G__34689.querySelector(".CodeMirror"));
if((G__34689__$1 == null)){
return null;
} else {
return G__34689__$1.CodeMirror;
}
} else {
return null;
}
});
frontend.util.rtc_test_QMARK_ = (function frontend$util$rtc_test_QMARK_(){
return clojure.string.includes_QMARK_(window.location.search,"?rtc-test=true");
});
frontend.util.rtc_test_without_virtualization_QMARK_ = (function frontend$util$rtc_test_without_virtualization_QMARK_(){
return ((frontend.util.rtc_test_QMARK_()) && ((!(clojure.string.includes_QMARK_(window.location.search,"virtualized=true")))));
});
frontend.util.force_virtualization_QMARK_ = (function frontend$util$force_virtualization_QMARK_(){
return clojure.string.includes_QMARK_(window.location.search,"virtualized=true");
});
/**
 * Strips all non-digit characters from a port input string.
 */
frontend.util.sanitize_port_input = (function frontend$util$sanitize_port_input(value){
var G__34690 = value;
var G__34690__$1 = (((G__34690 == null))?null:frontend.util.trim_safe(G__34690));
if((G__34690__$1 == null)){
return null;
} else {
return clojure.string.replace(G__34690__$1,/\D/,"");
}
});
/**
 * Normalizes a port input to a valid port number string (1–65535), or nil.
 */
frontend.util.normalize_port_input = (function frontend$util$normalize_port_input(value){
var digits = frontend.util.sanitize_port_input(value);
if(cljs.core.seq(digits)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.min.cljs$core$IFn$_invoke$arity$2(cljs.core.max.cljs$core$IFn$_invoke$arity$2(parseInt(digits),(1)),(65535))));
} else {
return null;
}
});

//# sourceMappingURL=frontend.util.js.map
