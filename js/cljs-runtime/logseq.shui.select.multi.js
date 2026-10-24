goog.provide('logseq.shui.select.multi');
logseq.shui.select.multi.get_k = (function logseq$shui$select$multi$get_k(item){
if(cljs.core.map_QMARK_(item)){
var G__50376 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"label","label",1718410804))(item);
var G__50376__$1 = (((G__50376 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,G__50376));
if((G__50376__$1 == null)){
return null;
} else {
return cljs.core.first(G__50376__$1);
}
} else {
return item;
}
});
logseq.shui.select.multi.get_v = (function logseq$shui$select$multi$get_v(item){
if(typeof item === 'string'){
return item;
} else {
var or__5142__auto__ = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(item);
}
}
});
logseq.shui.select.multi.search_input = (function (){var render_fn__47251__auto__ = (function() { 
var logseq$shui$select$multi$search_input__delegate = function (input_props,p__50386){
var map__50387 = p__50386;
var map__50387__$1 = cljs.core.__destructure_map(map__50387);
var on_enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50387__$1,new cljs.core.Keyword(null,"on-enter","on-enter",-928988216));
var valid_search_key_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50387__$1,new cljs.core.Keyword(null,"valid-search-key?","valid-search-key?",-1854491699));
var _STAR_el = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var vec__50388 = logseq.shui.hooks.use_state((0));
var down = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50388,(0),null);
var set_down_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50388,(1),null);
logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto__ = (function (){var and__5140__auto__ = (down > (0));
if(and__5140__auto__){
var G__50392 = logseq.shui.hooks.deref(_STAR_el);
var G__50392__$1 = (((G__50392 == null))?null:G__50392.closest(".head"));
if((G__50392__$1 == null)){
return null;
} else {
return G__50392__$1.nextSibling;
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var item = temp__5825__auto__;
var G__50393 = (cljs.core.truth_(valid_search_key_QMARK_)?item.nextSibling:item);
if((G__50393 == null)){
return null;
} else {
return G__50393.focus();
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [down], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-input","div.search-input",959718150),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el], null),(function (){var G__50394 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),(function (p1__50383_SHARP_){
var G__50395 = p1__50383_SHARP_.key;
switch (G__50395) {
case "ArrowDown":
var G__50396 = (down + (1));
return (set_down_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_down_BANG_.cljs$core$IFn$_invoke$arity$1(G__50396) : set_down_BANG_.call(null,G__50396));

break;
case "ArrowUp":
return null;

break;
case "Enter":
if(cljs.core.fn_QMARK_(on_enter)){
return (on_enter.cljs$core$IFn$_invoke$arity$0 ? on_enter.cljs$core$IFn$_invoke$arity$0() : on_enter.call(null));
} else {
return null;
}

break;
default:
return new cljs.core.Keyword(null,"dune","dune",1737226819);

}
}),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true], null),input_props], 0));
return (logseq.shui.form.core.input.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.form.core.input.cljs$core$IFn$_invoke$arity$1(G__50394) : logseq.shui.form.core.input.call(null,G__50394));
})()], null);
};
var logseq$shui$select$multi$search_input = function (input_props,var_args){
var p__50386 = null;
if (arguments.length > 1) {
var G__50490__i = 0, G__50490__a = new Array(arguments.length -  1);
while (G__50490__i < G__50490__a.length) {G__50490__a[G__50490__i] = arguments[G__50490__i + 1]; ++G__50490__i;}
  p__50386 = new cljs.core.IndexedSeq(G__50490__a,0,null);
} 
return logseq$shui$select$multi$search_input__delegate.call(this,input_props,p__50386);};
logseq$shui$select$multi$search_input.cljs$lang$maxFixedArity = 1;
logseq$shui$select$multi$search_input.cljs$lang$applyTo = (function (arglist__50491){
var input_props = cljs.core.first(arglist__50491);
var p__50386 = cljs.core.rest(arglist__50491);
return logseq$shui$select$multi$search_input__delegate(input_props,p__50386);
});
logseq$shui$select$multi$search_input.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$select$multi$search_input__delegate;
return logseq$shui$select$multi$search_input;
})()
;
var comp__47252__auto__ = (function() { 
var logseq$shui$select$multi$search_input__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__50401 = cljs.core.first(args__47253__auto__);
var G__50402 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50401,G__50402) : io.factorhouse.hsx.core.obj_get.call(null,G__50401,G__50402));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"search-input","search-input",1063615378,null),args__47253__auto__),logseq$shui$select$multi$search_input,args__47253__auto__,null);
}
};
var logseq$shui$select$multi$search_input = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__50492__i = 0, G__50492__a = new Array(arguments.length -  0);
while (G__50492__i < G__50492__a.length) {G__50492__a[G__50492__i] = arguments[G__50492__i + 0]; ++G__50492__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__50492__a,0,null);
} 
return logseq$shui$select$multi$search_input__delegate.call(this,args__47253__auto__);};
logseq$shui$select$multi$search_input.cljs$lang$maxFixedArity = 0;
logseq$shui$select$multi$search_input.cljs$lang$applyTo = (function (arglist__50493){
var args__47253__auto__ = cljs.core.seq(arglist__50493);
return logseq$shui$select$multi$search_input__delegate(args__47253__auto__);
});
logseq$shui$select$multi$search_input.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$select$multi$search_input__delegate;
return logseq$shui$select$multi$search_input;
})()
;
var memo_comp__47254__auto__ = (function (){var G__50405 = comp__47252__auto__;
var G__50406 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50405,G__50406) : io.factorhouse.hsx.core.react_memo.call(null,G__50405,G__50406));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"search-input");

return comp__47252__auto__;
})();
logseq.shui.select.multi.simple_search_fn = (function logseq$shui$select$multi$simple_search_fn(items,q){
var q__$1 = (function (){var G__50408 = q;
var G__50408__$1 = (((G__50408 == null))?null:clojure.string.trim(G__50408));
if((G__50408__$1 == null)){
return null;
} else {
return clojure.string.lower_case(G__50408__$1);
}
})();
if(clojure.string.blank_QMARK_(q__$1)){
return items;
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50407_SHARP_){
var G__50409 = logseq.shui.select.multi.get_v(p1__50407_SHARP_);
var G__50409__$1 = (((G__50409 == null))?null:clojure.string.lower_case(G__50409));
if((G__50409__$1 == null)){
return null;
} else {
return clojure.string.includes_QMARK_(G__50409__$1,q__$1);
}
}),items);
}
});
logseq.shui.select.multi.x_select_content = (function (){var render_fn__47251__auto__ = (function() { 
var logseq$shui$select$multi$x_select_content__delegate = function (items,selected_items,p__50415){
var map__50416 = p__50415;
var map__50416__$1 = cljs.core.__destructure_map(map__50416);
var value_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50416__$1,new cljs.core.Keyword(null,"value-render","value-render",882962329));
var on_search_key_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50416__$1,new cljs.core.Keyword(null,"on-search-key-change","on-search-key-change",-1703317861));
var item_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50416__$1,new cljs.core.Keyword(null,"item-render","item-render",253627868));
var search_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50416__$1,new cljs.core.Keyword(null,"search-key","search-key",-655412548));
var head_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50416__$1,new cljs.core.Keyword(null,"head-render","head-render",1257648669));
var close_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50416__$1,new cljs.core.Keyword(null,"close!","close!",-2079310498));
var search_key_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50416__$1,new cljs.core.Keyword(null,"search-key-render","search-key-render",1993106176));
var on_chosen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50416__$1,new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900));
var content_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50416__$1,new cljs.core.Keyword(null,"content-props","content-props",687449284));
var foot_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50416__$1,new cljs.core.Keyword(null,"foot-render","foot-render",-1936354106));
var search_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50416__$1,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945));
var search_input_placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50416__$1,new cljs.core.Keyword(null,"search-input-placeholder","search-input-placeholder",-845194871));
var item_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50416__$1,new cljs.core.Keyword(null,"item-props","item-props",-1762062444));
var search_enabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50416__$1,new cljs.core.Keyword(null,"search-enabled?","search-enabled?",2053474261));
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50416__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var x_content = logseq.shui.popup.core.dropdown_menu_content;
var x_item = logseq.shui.popup.core.dropdown_menu_item;
var _STAR_head_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var vec__50417 = logseq.shui.hooks.use_state(search_key);
var search_key1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50417,(0),null);
var set_search_key_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50417,(1),null);
var search_key1_SINGLEQUOTE_ = (function (){var G__50420 = search_key1;
var G__50420__$1 = (((G__50420 == null))?null:clojure.string.trim(G__50420));
if((G__50420__$1 == null)){
return null;
} else {
return clojure.string.lower_case(G__50420__$1);
}
})();
var valid_search_key_QMARK_ = (function (){var and__5140__auto__ = search_enabled_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (!(clojure.string.blank_QMARK_(search_key1_SINGLEQUOTE_)));
} else {
return and__5140__auto__;
}
})();
var get_content_el = (function (p1__50410_SHARP_){
var G__50421 = p1__50410_SHARP_;
if((G__50421 == null)){
return null;
} else {
return G__50421.closest(".ui__dropdown-menu-content");
}
});
var get_item_nodes = (function (p1__50411_SHARP_){
var G__50422 = p1__50411_SHARP_;
var G__50422__$1 = (((G__50422 == null))?null:get_content_el(G__50422));
var G__50422__$2 = (((G__50422__$1 == null))?null:G__50422__$1.querySelectorAll(".ui__dropdown-menu-item"));
if((G__50422__$2 == null)){
return null;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(G__50422__$2);
}
});
var focus_search_input_BANG_ = (function (target){
if(cljs.core.truth_((function (){var and__5140__auto__ = search_enabled_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("INPUT",target.nodeName);
} else {
return and__5140__auto__;
}
})())){
var G__50425 = get_content_el(target);
var G__50425__$1 = (((G__50425 == null))?null:G__50425.querySelector("input"));
if((G__50425__$1 == null)){
return null;
} else {
return G__50425__$1.focus();
}
} else {
return null;
}
});
var items__$1 = (cljs.core.truth_(search_enabled_QMARK_)?((cljs.core.fn_QMARK_(search_fn))?(search_fn.cljs$core$IFn$_invoke$arity$2 ? search_fn.cljs$core$IFn$_invoke$arity$2(items,search_key1) : search_fn.call(null,items,search_key1)):logseq.shui.select.multi.simple_search_fn(items,search_key1)):items);
var close1_BANG_ = (function (){
if(cljs.core.fn_QMARK_(close_BANG_)){
return (close_BANG_.cljs$core$IFn$_invoke$arity$0 ? close_BANG_.cljs$core$IFn$_invoke$arity$0() : close_BANG_.call(null));
} else {
return null;
}
});
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.fn_QMARK_(on_search_key_change)){
return (on_search_key_change.cljs$core$IFn$_invoke$arity$1 ? on_search_key_change.cljs$core$IFn$_invoke$arity$1(search_key1_SINGLEQUOTE_) : on_search_key_change.call(null,search_key1_SINGLEQUOTE_));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [search_key1_SINGLEQUOTE_], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto__ = (cljs.core.truth_((function (){var and__5140__auto__ = search_enabled_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return open_QMARK_ === false;
} else {
return and__5140__auto__;
}
})())?setTimeout((function (){
return (set_search_key_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_search_key_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_search_key_BANG_.call(null,""));
}),(500)):null);
if(cljs.core.truth_(temp__5825__auto__)){
var t = temp__5825__auto__;
return (function (){
return clearTimeout(t);
});
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [open_QMARK_], null));

var G__50428 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"onInteractOutside","onInteractOutside",-1720265251),close1_BANG_,new cljs.core.Keyword(null,"onEscapeKeyDown","onEscapeKeyDown",1908839912),close1_BANG_,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
var temp__5825__auto__ = e.target;
if(cljs.core.truth_(temp__5825__auto__)){
var target = temp__5825__auto__;
var G__50433 = e.key;
switch (G__50433) {
case "ArrowUp":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__50439 = get_item_nodes(target);
if((G__50439 == null)){
return null;
} else {
return cljs.core.first(G__50439);
}
})(),document.activeElement)){
return focus_search_input_BANG_(target);
} else {
return null;
}

break;
case "l":
if(cljs.core.truth_((function (){var or__5142__auto__ = e.metaKey;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return e.ctrlKey;
}
})())){
return focus_search_input_BANG_(target);
} else {
return null;
}

break;
default:
return new cljs.core.Keyword(null,"dune","dune",1737226819);

}
} else {
return null;
}
}),new cljs.core.Keyword(null,"class","class",-2030961996),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(content_props))+" ui__multi-select-content"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(valid_search_key_QMARK_)?" has-search-key":null)))], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(content_props,new cljs.core.Keyword(null,"class","class",-2030961996))], 0));
var G__50429 = (cljs.core.truth_((function (){var or__5142__auto__ = search_enabled_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.fn_QMARK_(head_render);
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.head","div.head",603880936),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_head_ref], null),(cljs.core.truth_(search_enabled_QMARK_)?logseq.shui.select.multi.search_input(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),search_key1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),(function (){var or__5142__auto__ = search_input_placeholder;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
e.stopPropagation();

var G__50444 = e.key;
switch (G__50444) {
case "Escape":
if(clojure.string.blank_QMARK_(search_key1)){
var G__50445 = e.target;
var G__50445__$1 = (((G__50445 == null))?null:G__50445.closest(".ui__dropdown-menu-content"));
if((G__50445__$1 == null)){
return null;
} else {
return G__50445__$1.focus();
}
} else {
return (set_search_key_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_search_key_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_search_key_BANG_.call(null,""));
}

break;
default:
return new cljs.core.Keyword(null,"dune","dune",1737226819);

}
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__50412_SHARP_){
var G__50446 = p1__50412_SHARP_.target.value;
return (set_search_key_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_search_key_BANG_.cljs$core$IFn$_invoke$arity$1(G__50446) : set_search_key_BANG_.call(null,G__50446));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-enter","on-enter",-928988216),(function (){
var temp__5825__auto__ = (function (){var and__5140__auto__ = (!(clojure.string.blank_QMARK_(search_key1_SINGLEQUOTE_)));
if(and__5140__auto__){
return logseq.shui.hooks.deref(_STAR_head_ref);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var head_el = temp__5825__auto__;
var temp__5825__auto____$1 = head_el.nextSibling;
if(cljs.core.truth_(temp__5825__auto____$1)){
var item = temp__5825__auto____$1;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["menuitemcheckbox",null,"menuitem",null], null), null),item.getAttribute("role"))){
return item.click();
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"valid-search-key?","valid-search-key?",-1854491699),valid_search_key_QMARK_], null)):null),(cljs.core.truth_(head_render)?(head_render.cljs$core$IFn$_invoke$arity$0 ? head_render.cljs$core$IFn$_invoke$arity$0() : head_render.call(null)):null)], null):null);
var G__50430 = (function (){var iter__5628__auto__ = (function logseq$shui$select$multi$x_select_content_$_iter__50448(s__50449){
return (new cljs.core.LazySeq(null,(function (){
var s__50449__$1 = s__50449;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__50449__$1);
if(temp__5825__auto__){
var s__50449__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50449__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__50449__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__50451 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__50450 = (0);
while(true){
if((i__50450 < size__5627__auto__)){
var item = cljs.core._nth(c__5626__auto__,i__50450);
var selected_QMARK_ = cljs.core.some(((function (i__50450,item,c__5626__auto__,size__5627__auto__,b__50451,s__50449__$2,temp__5825__auto__,G__50428,G__50429,x_content,x_item,_STAR_head_ref,vec__50417,search_key1,set_search_key_BANG_,search_key1_SINGLEQUOTE_,valid_search_key_QMARK_,get_content_el,get_item_nodes,focus_search_input_BANG_,items__$1,close1_BANG_,map__50416,map__50416__$1,value_render,on_search_key_change,item_render,search_key,head_render,close_BANG_,search_key_render,on_chosen,content_props,foot_render,search_fn,search_input_placeholder,item_props,search_enabled_QMARK_,open_QMARK_){
return (function (p1__50413_SHARP_){
var k = logseq.shui.select.multi.get_k(item);
var k_SINGLEQUOTE_ = logseq.shui.select.multi.get_k(p1__50413_SHARP_);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,p1__50413_SHARP_)) || ((((!((k == null)))) && ((((!((k_SINGLEQUOTE_ == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,k_SINGLEQUOTE_)))))));
});})(i__50450,item,c__5626__auto__,size__5627__auto__,b__50451,s__50449__$2,temp__5825__auto__,G__50428,G__50429,x_content,x_item,_STAR_head_ref,vec__50417,search_key1,set_search_key_BANG_,search_key1_SINGLEQUOTE_,valid_search_key_QMARK_,get_content_el,get_item_nodes,focus_search_input_BANG_,items__$1,close1_BANG_,map__50416,map__50416__$1,value_render,on_search_key_change,item_render,search_key,head_render,close_BANG_,search_key_render,on_chosen,content_props,foot_render,search_fn,search_input_placeholder,item_props,search_enabled_QMARK_,open_QMARK_))
,selected_items);
cljs.core.chunk_append(b__50451,((cljs.core.fn_QMARK_(item_render))?(function (){var G__50454 = item;
var G__50455 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x-item","x-item",-248931189),x_item,new cljs.core.Keyword(null,"selected?","selected?",-742502788),selected_QMARK_], null);
return (item_render.cljs$core$IFn$_invoke$arity$2 ? item_render.cljs$core$IFn$_invoke$arity$2(G__50454,G__50455) : item_render.call(null,G__50454,G__50455));
})():(function (){var k = logseq.shui.select.multi.get_k(item);
var v = logseq.shui.select.multi.get_v(item);
if(cljs.core.truth_(k)){
var opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected?","selected?",-742502788),selected_QMARK_], null);
var on_click_SINGLEQUOTE_ = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(item_props);
var on_click = ((function (i__50450,opts,on_click_SINGLEQUOTE_,k,v,selected_QMARK_,item,c__5626__auto__,size__5627__auto__,b__50451,s__50449__$2,temp__5825__auto__,G__50428,G__50429,x_content,x_item,_STAR_head_ref,vec__50417,search_key1,set_search_key_BANG_,search_key1_SINGLEQUOTE_,valid_search_key_QMARK_,get_content_el,get_item_nodes,focus_search_input_BANG_,items__$1,close1_BANG_,map__50416,map__50416__$1,value_render,on_search_key_change,item_render,search_key,head_render,close_BANG_,search_key_render,on_chosen,content_props,foot_render,search_fn,search_input_placeholder,item_props,search_enabled_QMARK_,open_QMARK_){
return (function (e){
if(cljs.core.fn_QMARK_(on_click_SINGLEQUOTE_)){
(on_click_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? on_click_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(e) : on_click_SINGLEQUOTE_.call(null,e));
} else {
}

if(cljs.core.fn_QMARK_(on_chosen)){
return (on_chosen.cljs$core$IFn$_invoke$arity$2 ? on_chosen.cljs$core$IFn$_invoke$arity$2(item,opts) : on_chosen.call(null,item,opts));
} else {
return null;
}
});})(i__50450,opts,on_click_SINGLEQUOTE_,k,v,selected_QMARK_,item,c__5626__auto__,size__5627__auto__,b__50451,s__50449__$2,temp__5825__auto__,G__50428,G__50429,x_content,x_item,_STAR_head_ref,vec__50417,search_key1,set_search_key_BANG_,search_key1_SINGLEQUOTE_,valid_search_key_QMARK_,get_content_el,get_item_nodes,focus_search_input_BANG_,items__$1,close1_BANG_,map__50416,map__50416__$1,value_render,on_search_key_change,item_render,search_key,head_render,close_BANG_,search_key_render,on_chosen,content_props,foot_render,search_fn,search_input_placeholder,item_props,search_enabled_QMARK_,open_QMARK_))
;
var G__50462 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-k","data-k",1282759848),k,new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),item_props], 0));
var G__50463 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-2.w-full","span.flex.items-center.gap-2.w-full",1556721643),(function (){var G__50464 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checked","checked",-50955819),selected_QMARK_], null);
return (logseq.shui.form.core.checkbox.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.form.core.checkbox.cljs$core$IFn$_invoke$arity$1(G__50464) : logseq.shui.form.core.checkbox.call(null,G__50464));
})(),(function (){var v_SINGLEQUOTE_ = ((cljs.core.fn_QMARK_(v))?(v.cljs$core$IFn$_invoke$arity$2 ? v.cljs$core$IFn$_invoke$arity$2(item,opts) : v.call(null,item,opts)):v);
if(cljs.core.fn_QMARK_(value_render)){
var G__50468 = v_SINGLEQUOTE_;
var G__50469 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"item","item",249373802),item);
return (value_render.cljs$core$IFn$_invoke$arity$2 ? value_render.cljs$core$IFn$_invoke$arity$2(G__50468,G__50469) : value_render.call(null,G__50468,G__50469));
} else {
return v_SINGLEQUOTE_;
}
})()], null);
return (x_item.cljs$core$IFn$_invoke$arity$2 ? x_item.cljs$core$IFn$_invoke$arity$2(G__50462,G__50463) : x_item.call(null,G__50462,G__50463));
} else {
return null;
}
})()));

var G__50498 = (i__50450 + (1));
i__50450 = G__50498;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50451),logseq$shui$select$multi$x_select_content_$_iter__50448(cljs.core.chunk_rest(s__50449__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50451),null);
}
} else {
var item = cljs.core.first(s__50449__$2);
var selected_QMARK_ = cljs.core.some(((function (item,s__50449__$2,temp__5825__auto__,G__50428,G__50429,x_content,x_item,_STAR_head_ref,vec__50417,search_key1,set_search_key_BANG_,search_key1_SINGLEQUOTE_,valid_search_key_QMARK_,get_content_el,get_item_nodes,focus_search_input_BANG_,items__$1,close1_BANG_,map__50416,map__50416__$1,value_render,on_search_key_change,item_render,search_key,head_render,close_BANG_,search_key_render,on_chosen,content_props,foot_render,search_fn,search_input_placeholder,item_props,search_enabled_QMARK_,open_QMARK_){
return (function (p1__50413_SHARP_){
var k = logseq.shui.select.multi.get_k(item);
var k_SINGLEQUOTE_ = logseq.shui.select.multi.get_k(p1__50413_SHARP_);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,p1__50413_SHARP_)) || ((((!((k == null)))) && ((((!((k_SINGLEQUOTE_ == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,k_SINGLEQUOTE_)))))));
});})(item,s__50449__$2,temp__5825__auto__,G__50428,G__50429,x_content,x_item,_STAR_head_ref,vec__50417,search_key1,set_search_key_BANG_,search_key1_SINGLEQUOTE_,valid_search_key_QMARK_,get_content_el,get_item_nodes,focus_search_input_BANG_,items__$1,close1_BANG_,map__50416,map__50416__$1,value_render,on_search_key_change,item_render,search_key,head_render,close_BANG_,search_key_render,on_chosen,content_props,foot_render,search_fn,search_input_placeholder,item_props,search_enabled_QMARK_,open_QMARK_))
,selected_items);
return cljs.core.cons(((cljs.core.fn_QMARK_(item_render))?(function (){var G__50472 = item;
var G__50473 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x-item","x-item",-248931189),x_item,new cljs.core.Keyword(null,"selected?","selected?",-742502788),selected_QMARK_], null);
return (item_render.cljs$core$IFn$_invoke$arity$2 ? item_render.cljs$core$IFn$_invoke$arity$2(G__50472,G__50473) : item_render.call(null,G__50472,G__50473));
})():(function (){var k = logseq.shui.select.multi.get_k(item);
var v = logseq.shui.select.multi.get_v(item);
if(cljs.core.truth_(k)){
var opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected?","selected?",-742502788),selected_QMARK_], null);
var on_click_SINGLEQUOTE_ = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(item_props);
var on_click = ((function (opts,on_click_SINGLEQUOTE_,k,v,selected_QMARK_,item,s__50449__$2,temp__5825__auto__,G__50428,G__50429,x_content,x_item,_STAR_head_ref,vec__50417,search_key1,set_search_key_BANG_,search_key1_SINGLEQUOTE_,valid_search_key_QMARK_,get_content_el,get_item_nodes,focus_search_input_BANG_,items__$1,close1_BANG_,map__50416,map__50416__$1,value_render,on_search_key_change,item_render,search_key,head_render,close_BANG_,search_key_render,on_chosen,content_props,foot_render,search_fn,search_input_placeholder,item_props,search_enabled_QMARK_,open_QMARK_){
return (function (e){
if(cljs.core.fn_QMARK_(on_click_SINGLEQUOTE_)){
(on_click_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? on_click_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(e) : on_click_SINGLEQUOTE_.call(null,e));
} else {
}

if(cljs.core.fn_QMARK_(on_chosen)){
return (on_chosen.cljs$core$IFn$_invoke$arity$2 ? on_chosen.cljs$core$IFn$_invoke$arity$2(item,opts) : on_chosen.call(null,item,opts));
} else {
return null;
}
});})(opts,on_click_SINGLEQUOTE_,k,v,selected_QMARK_,item,s__50449__$2,temp__5825__auto__,G__50428,G__50429,x_content,x_item,_STAR_head_ref,vec__50417,search_key1,set_search_key_BANG_,search_key1_SINGLEQUOTE_,valid_search_key_QMARK_,get_content_el,get_item_nodes,focus_search_input_BANG_,items__$1,close1_BANG_,map__50416,map__50416__$1,value_render,on_search_key_change,item_render,search_key,head_render,close_BANG_,search_key_render,on_chosen,content_props,foot_render,search_fn,search_input_placeholder,item_props,search_enabled_QMARK_,open_QMARK_))
;
var G__50474 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-k","data-k",1282759848),k,new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),item_props], 0));
var G__50475 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-2.w-full","span.flex.items-center.gap-2.w-full",1556721643),(function (){var G__50476 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checked","checked",-50955819),selected_QMARK_], null);
return (logseq.shui.form.core.checkbox.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.form.core.checkbox.cljs$core$IFn$_invoke$arity$1(G__50476) : logseq.shui.form.core.checkbox.call(null,G__50476));
})(),(function (){var v_SINGLEQUOTE_ = ((cljs.core.fn_QMARK_(v))?(v.cljs$core$IFn$_invoke$arity$2 ? v.cljs$core$IFn$_invoke$arity$2(item,opts) : v.call(null,item,opts)):v);
if(cljs.core.fn_QMARK_(value_render)){
var G__50477 = v_SINGLEQUOTE_;
var G__50478 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"item","item",249373802),item);
return (value_render.cljs$core$IFn$_invoke$arity$2 ? value_render.cljs$core$IFn$_invoke$arity$2(G__50477,G__50478) : value_render.call(null,G__50477,G__50478));
} else {
return v_SINGLEQUOTE_;
}
})()], null);
return (x_item.cljs$core$IFn$_invoke$arity$2 ? x_item.cljs$core$IFn$_invoke$arity$2(G__50474,G__50475) : x_item.call(null,G__50474,G__50475));
} else {
return null;
}
})()),logseq$shui$select$multi$x_select_content_$_iter__50448(cljs.core.rest(s__50449__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(items__$1);
})();
var G__50431 = (cljs.core.truth_((function (){var and__5140__auto__ = search_enabled_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.fn_QMARK_(search_key_render);
} else {
return and__5140__auto__;
}
})())?(function (){var exist_fn = (function (){
return (((!(clojure.string.blank_QMARK_(search_key1)))) && (((cljs.core.seq(items__$1)) && (cljs.core.contains_QMARK_(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50414_SHARP_){
var G__50479 = logseq.shui.select.multi.get_v(p1__50414_SHARP_);
if((G__50479 == null)){
return null;
} else {
return clojure.string.lower_case(G__50479);
}
}),items__$1)),clojure.string.lower_case(search_key1))))));
});
var G__50480 = search_key1;
var G__50481 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1031954938),items__$1,new cljs.core.Keyword(null,"x-item","x-item",-248931189),x_item,new cljs.core.Keyword(null,"exist-fn","exist-fn",707195532),exist_fn], null);
return (search_key_render.cljs$core$IFn$_invoke$arity$2 ? search_key_render.cljs$core$IFn$_invoke$arity$2(G__50480,G__50481) : search_key_render.call(null,G__50480,G__50481));
})():null);
var G__50432 = ((cljs.core.fn_QMARK_(foot_render))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.foot","div.foot",-1063776446),(foot_render.cljs$core$IFn$_invoke$arity$0 ? foot_render.cljs$core$IFn$_invoke$arity$0() : foot_render.call(null))], null):null);
return (x_content.cljs$core$IFn$_invoke$arity$5 ? x_content.cljs$core$IFn$_invoke$arity$5(G__50428,G__50429,G__50430,G__50431,G__50432) : x_content.call(null,G__50428,G__50429,G__50430,G__50431,G__50432));
};
var logseq$shui$select$multi$x_select_content = function (items,selected_items,var_args){
var p__50415 = null;
if (arguments.length > 2) {
var G__50501__i = 0, G__50501__a = new Array(arguments.length -  2);
while (G__50501__i < G__50501__a.length) {G__50501__a[G__50501__i] = arguments[G__50501__i + 2]; ++G__50501__i;}
  p__50415 = new cljs.core.IndexedSeq(G__50501__a,0,null);
} 
return logseq$shui$select$multi$x_select_content__delegate.call(this,items,selected_items,p__50415);};
logseq$shui$select$multi$x_select_content.cljs$lang$maxFixedArity = 2;
logseq$shui$select$multi$x_select_content.cljs$lang$applyTo = (function (arglist__50502){
var items = cljs.core.first(arglist__50502);
arglist__50502 = cljs.core.next(arglist__50502);
var selected_items = cljs.core.first(arglist__50502);
var p__50415 = cljs.core.rest(arglist__50502);
return logseq$shui$select$multi$x_select_content__delegate(items,selected_items,p__50415);
});
logseq$shui$select$multi$x_select_content.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$select$multi$x_select_content__delegate;
return logseq$shui$select$multi$x_select_content;
})()
;
var comp__47252__auto__ = (function() { 
var logseq$shui$select$multi$x_select_content__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__50482 = cljs.core.first(args__47253__auto__);
var G__50483 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50482,G__50483) : io.factorhouse.hsx.core.obj_get.call(null,G__50482,G__50483));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"x-select-content","x-select-content",-1194994615,null),args__47253__auto__),logseq$shui$select$multi$x_select_content,args__47253__auto__,null);
}
};
var logseq$shui$select$multi$x_select_content = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__50503__i = 0, G__50503__a = new Array(arguments.length -  0);
while (G__50503__i < G__50503__a.length) {G__50503__a[G__50503__i] = arguments[G__50503__i + 0]; ++G__50503__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__50503__a,0,null);
} 
return logseq$shui$select$multi$x_select_content__delegate.call(this,args__47253__auto__);};
logseq$shui$select$multi$x_select_content.cljs$lang$maxFixedArity = 0;
logseq$shui$select$multi$x_select_content.cljs$lang$applyTo = (function (arglist__50504){
var args__47253__auto__ = cljs.core.seq(arglist__50504);
return logseq$shui$select$multi$x_select_content__delegate(args__47253__auto__);
});
logseq$shui$select$multi$x_select_content.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$select$multi$x_select_content__delegate;
return logseq$shui$select$multi$x_select_content;
})()
;
var memo_comp__47254__auto__ = (function (){var G__50485 = comp__47252__auto__;
var G__50486 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50485,G__50486) : io.factorhouse.hsx.core.react_memo.call(null,G__50485,G__50486));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"x-select-content");

return comp__47252__auto__;
})();

//# sourceMappingURL=logseq.shui.select.multi.js.map
