goog.provide('frontend.components.block.breadcrumb');
goog.scope(function(){
  frontend.components.block.breadcrumb.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.components.block.breadcrumb.handle_breadcrumb_activate_BANG_ = (function frontend$components$block$breadcrumb$handle_breadcrumb_activate_BANG_(config,block,opts,e){
if(cljs.core.truth_(frontend.components.block.breadcrumb.goog$module$goog$object.get(e,"shiftKey"))){
frontend.util.stop(e);

return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
} else {
if(frontend.util.atom_QMARK_(new cljs.core.Keyword(null,"navigating-block","navigating-block",-576280122).cljs$core$IFn$_invoke$arity$1(opts))){
frontend.util.stop(e);

return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"navigating-block","navigating-block",-576280122).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
} else {
if((!((new cljs.core.Keyword(null,"sidebar-key","sidebar-key",2034878565).cljs$core$IFn$_invoke$arity$1(config) == null)))){
return null;
} else {
var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5825__auto__)){
var uuid = temp__5825__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"on-redirect-to-page","on-redirect-to-page",-1420791266).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.handler.route.redirect_to_page_BANG_;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid))], null));
} else {
return null;
}

}
}
}
});
frontend.components.block.breadcrumb.breadcrumb_fragment = (function (){var render_fn__31744__auto__ = (function frontend$components$block$breadcrumb$breadcrumb_fragment(config,block,label,opts){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
if((!((new cljs.core.Keyword(null,"sidebar-key","sidebar-key",2034878565).cljs$core$IFn$_invoke$arity$1(config) == null)))){
return frontend.util.stop(e);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-pointer-up","on-pointer-up",385194000),(function (e){
return frontend.components.block.breadcrumb.handle_breadcrumb_activate_BANG_(config,block,opts,e);
})], null),label], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$breadcrumb$breadcrumb_fragment__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38578 = cljs.core.first(args__31746__auto__);
var G__38579 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38578,G__38579) : io.factorhouse.hsx.core.obj_get.call(null,G__38578,G__38579));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"breadcrumb-fragment","breadcrumb-fragment",-80710315,null),args__31746__auto__),frontend$components$block$breadcrumb$breadcrumb_fragment,args__31746__auto__,null);
}
};
var frontend$components$block$breadcrumb$breadcrumb_fragment = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38649__i = 0, G__38649__a = new Array(arguments.length -  0);
while (G__38649__i < G__38649__a.length) {G__38649__a[G__38649__i] = arguments[G__38649__i + 0]; ++G__38649__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38649__a,0,null);
} 
return frontend$components$block$breadcrumb$breadcrumb_fragment__delegate.call(this,args__31746__auto__);};
frontend$components$block$breadcrumb$breadcrumb_fragment.cljs$lang$maxFixedArity = 0;
frontend$components$block$breadcrumb$breadcrumb_fragment.cljs$lang$applyTo = (function (arglist__38650){
var args__31746__auto__ = cljs.core.seq(arglist__38650);
return frontend$components$block$breadcrumb$breadcrumb_fragment__delegate(args__31746__auto__);
});
frontend$components$block$breadcrumb$breadcrumb_fragment.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$breadcrumb$breadcrumb_fragment__delegate;
return frontend$components$block$breadcrumb$breadcrumb_fragment;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38580 = comp__31745__auto__;
var G__38581 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38580,G__38581) : io.factorhouse.hsx.core.react_memo.call(null,G__38580,G__38581));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"breadcrumb-fragment");

return comp__31745__auto__;
})();
frontend.components.block.breadcrumb.breadcrumb_separator = (function frontend$components$block$breadcrumb$breadcrumb_separator(var_args){
var args__5882__auto__ = [];
var len__5876__auto___38651 = arguments.length;
var i__5877__auto___38652 = (0);
while(true){
if((i__5877__auto___38652 < len__5876__auto___38651)){
args__5882__auto__.push((arguments[i__5877__auto___38652]));

var G__38653 = (i__5877__auto___38652 + (1));
i__5877__auto___38652 = G__38653;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return frontend.components.block.breadcrumb.breadcrumb_separator.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(frontend.components.block.breadcrumb.breadcrumb_separator.cljs$core$IFn$_invoke$arity$variadic = (function (p__38583){
var vec__38584 = p__38583;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38584,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-50.px-1","span.opacity-50.px-1",-413084485),(function (){var G__38587 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(k)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38587,new cljs.core.Keyword(null,"key","key",-1516042587),k);
} else {
return G__38587;
}
})(),"/"], null);
}));

(frontend.components.block.breadcrumb.breadcrumb_separator.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.components.block.breadcrumb.breadcrumb_separator.cljs$lang$applyTo = (function (seq38582){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38582));
}));

/**
 * Renders the visual label (icon + text) for a breadcrumb segment.
 * Icon priority:
 *   1. code/query/note/quote/math → always show their fixed structural icon
 *   2. page/block with custom icon → get-node-icon-cp (shows custom icon)
 *   3. empty block (nil text, no custom icon) → point-filled placeholder
 *   4. regular page/block with text and no custom icon → no icon
 */
frontend.components.block.breadcrumb.breadcrumb_segment_label = (function (){var render_fn__31744__auto__ = (function frontend$components$block$breadcrumb$breadcrumb_segment_label(seg,entity){
var _STAR_label_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var vec__38588 = logseq.shui.hooks.use_state(false);
var truncated_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38588,(0),null);
var set_truncated_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38588,(1),null);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(seg);
var seg_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(seg);
var has_custom_icon_QMARK_ = (!((new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(seg) == null)));
var structural_icon = (function (){var G__38591 = seg_type;
var G__38591__$1 = (((G__38591 instanceof cljs.core.Keyword))?G__38591.fqn:null);
switch (G__38591__$1) {
case "code":
return logseq.shui.ui.tabler_icon("code",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),"12",new cljs.core.Keyword(null,"class","class",-2030961996),"opacity-70"], null));

break;
case "query":
return logseq.shui.ui.tabler_icon("search",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),"12",new cljs.core.Keyword(null,"class","class",-2030961996),"opacity-70"], null));

break;
case "note":
return logseq.shui.ui.tabler_icon("notes",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),"12",new cljs.core.Keyword(null,"class","class",-2030961996),"opacity-70"], null));

break;
case "quote":
return logseq.shui.ui.tabler_icon("quote",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),"12",new cljs.core.Keyword(null,"class","class",-2030961996),"opacity-70"], null));

break;
case "math":
return logseq.shui.ui.tabler_icon("math-function",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),"12",new cljs.core.Keyword(null,"class","class",-2030961996),"opacity-70"], null));

break;
default:
return null;

}
})();
var node_icon = (cljs.core.truth_((function (){var and__5140__auto__ = (structural_icon == null);
if(and__5140__auto__){
var and__5140__auto____$1 = entity;
if(cljs.core.truth_(and__5140__auto____$1)){
return has_custom_icon_QMARK_;
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?frontend.components.icon.get_node_icon_cp(entity,cljs.core.PersistentArrayMap.EMPTY):null);
var empty_placeholder = (((((structural_icon == null)) && ((((node_icon == null)) && ((text == null))))))?logseq.shui.ui.tabler_icon("point-filled",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),"12",new cljs.core.Keyword(null,"class","class",-2030961996),"opacity-70"], null)):null);
var icon_node = (function (){var or__5142__auto__ = structural_icon;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = node_icon;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return empty_placeholder;
}
}
})();
var non_blank = (function (s){
if(clojure.string.blank_QMARK_(s)){
return null;
} else {
return s;
}
});
var full_label = (function (){var or__5142__auto__ = non_blank(new cljs.core.Keyword(null,"full-text","full-text",1432444182).cljs$core$IFn$_invoke$arity$1(seg));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return non_blank(text);
}
})();
var set_label_ref_BANG_ = logseq.shui.hooks.use_callback((function (el){
return logseq.shui.hooks.set_ref_BANG_(_STAR_label_ref,el);
}),cljs.core.PersistentVector.EMPTY);
logseq.shui.hooks.use_effect_BANG_((function (){
if(((clojure.string.blank_QMARK_(text)) || (clojure.string.blank_QMARK_(full_label)))){
(set_truncated_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_truncated_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_truncated_BANG_.call(null,false));

return null;
} else {
var check_BANG_ = (function (){
var temp__5823__auto__ = logseq.shui.hooks.deref(_STAR_label_ref);
if(cljs.core.truth_(temp__5823__auto__)){
var el = temp__5823__auto__;
var G__38592 = (el.scrollWidth > el.clientWidth);
return (set_truncated_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_truncated_BANG_.cljs$core$IFn$_invoke$arity$1(G__38592) : set_truncated_BANG_.call(null,G__38592));
} else {
return (set_truncated_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_truncated_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_truncated_BANG_.call(null,false));
}
});
var resize_observer = (((!((window.ResizeObserver == null))))?(new ResizeObserver(check_BANG_)):null);
check_BANG_();

var temp__5825__auto___38655 = logseq.shui.hooks.deref(_STAR_label_ref);
if(cljs.core.truth_(temp__5825__auto___38655)){
var el_38656 = temp__5825__auto___38655;
if(cljs.core.truth_(resize_observer)){
resize_observer.observe(el_38656);

var temp__5825__auto___38657__$1 = el_38656.parentElement;
if(cljs.core.truth_(temp__5825__auto___38657__$1)){
var parent_38658 = temp__5825__auto___38657__$1;
resize_observer.observe(parent_38658);
} else {
}
} else {
}
} else {
}

window.addEventListener("resize",check_BANG_);

return (function (){
window.removeEventListener("resize",check_BANG_);

if(cljs.core.truth_(resize_observer)){
return resize_observer.disconnect();
} else {
return null;
}
});
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,full_label], null));

var inner = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.breadcrumb__segment.inline-flex.items-center.min-w-0","span.breadcrumb__segment.inline-flex.items-center.min-w-0",-981035824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),(cljs.core.truth_(text)?null:full_label)], null),(cljs.core.truth_(icon_node)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.breadcrumb__segment-icon.mr-0.5.shrink-0","span.breadcrumb__segment-icon.mr-0.5.shrink-0",2064271772),icon_node], null):null),(cljs.core.truth_(text)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.breadcrumb__label","span.breadcrumb__label",-2085271321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),set_label_ref_BANG_], null),text], null):null)], null);
if(cljs.core.truth_((function (){var and__5140__auto__ = (!(clojure.string.blank_QMARK_(full_label)));
if(and__5140__auto__){
return truncated_QMARK_;
} else {
return and__5140__auto__;
}
})())){
return frontend.ui.tooltip(inner,full_label,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"trigger-props","trigger-props",1619401213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-child","as-child",1364710342),true], null)], null));
} else {
return inner;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$breadcrumb$breadcrumb_segment_label__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38593 = cljs.core.first(args__31746__auto__);
var G__38594 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38593,G__38594) : io.factorhouse.hsx.core.obj_get.call(null,G__38593,G__38594));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"breadcrumb-segment-label","breadcrumb-segment-label",435133870,null),args__31746__auto__),frontend$components$block$breadcrumb$breadcrumb_segment_label,args__31746__auto__,null);
}
};
var frontend$components$block$breadcrumb$breadcrumb_segment_label = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38659__i = 0, G__38659__a = new Array(arguments.length -  0);
while (G__38659__i < G__38659__a.length) {G__38659__a[G__38659__i] = arguments[G__38659__i + 0]; ++G__38659__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38659__a,0,null);
} 
return frontend$components$block$breadcrumb$breadcrumb_segment_label__delegate.call(this,args__31746__auto__);};
frontend$components$block$breadcrumb$breadcrumb_segment_label.cljs$lang$maxFixedArity = 0;
frontend$components$block$breadcrumb$breadcrumb_segment_label.cljs$lang$applyTo = (function (arglist__38660){
var args__31746__auto__ = cljs.core.seq(arglist__38660);
return frontend$components$block$breadcrumb$breadcrumb_segment_label__delegate(args__31746__auto__);
});
frontend$components$block$breadcrumb$breadcrumb_segment_label.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$breadcrumb$breadcrumb_segment_label__delegate;
return frontend$components$block$breadcrumb$breadcrumb_segment_label;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38595 = comp__31745__auto__;
var G__38596 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38595,G__38596) : io.factorhouse.hsx.core.react_memo.call(null,G__38595,G__38596));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"breadcrumb-segment-label");

return comp__31745__auto__;
})();
frontend.components.block.breadcrumb.breadcrumb_segment_row = (function (){var render_fn__31744__auto__ = (function frontend$components$block$breadcrumb$breadcrumb_segment_row(config,block,opts,effective_variant){
var block_id = (function (){var or__5142__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
}
})();
var loaded_block = frontend.db.hooks.use_block(block_id);
var block_SINGLEQUOTE_ = frontend.components.block.breadcrumb_model.with_breadcrumb_ref_titles((function (){var or__5142__auto__ = loaded_block;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return block;
}
})(),new cljs.core.Keyword(null,"ref-titles","ref-titles",1814381807).cljs$core$IFn$_invoke$arity$1(opts));
var segment = frontend.components.block.breadcrumb_model.block__GT_breadcrumb_segment(block_SINGLEQUOTE_);
if(cljs.core.truth_(segment)){
var label = frontend.components.block.breadcrumb.breadcrumb_segment_label(segment,block_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(effective_variant,new cljs.core.Keyword(null,"search-result","search-result",528142443));
}
})())){
return label;
} else {
return frontend.components.block.breadcrumb.breadcrumb_fragment(config,block_SINGLEQUOTE_,label,opts);
}
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$breadcrumb$breadcrumb_segment_row__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38597 = cljs.core.first(args__31746__auto__);
var G__38598 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38597,G__38598) : io.factorhouse.hsx.core.obj_get.call(null,G__38597,G__38598));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"breadcrumb-segment-row","breadcrumb-segment-row",129937597,null),args__31746__auto__),frontend$components$block$breadcrumb$breadcrumb_segment_row,args__31746__auto__,null);
}
};
var frontend$components$block$breadcrumb$breadcrumb_segment_row = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38661__i = 0, G__38661__a = new Array(arguments.length -  0);
while (G__38661__i < G__38661__a.length) {G__38661__a[G__38661__i] = arguments[G__38661__i + 0]; ++G__38661__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38661__a,0,null);
} 
return frontend$components$block$breadcrumb$breadcrumb_segment_row__delegate.call(this,args__31746__auto__);};
frontend$components$block$breadcrumb$breadcrumb_segment_row.cljs$lang$maxFixedArity = 0;
frontend$components$block$breadcrumb$breadcrumb_segment_row.cljs$lang$applyTo = (function (arglist__38662){
var args__31746__auto__ = cljs.core.seq(arglist__38662);
return frontend$components$block$breadcrumb$breadcrumb_segment_row__delegate(args__31746__auto__);
});
frontend$components$block$breadcrumb$breadcrumb_segment_row.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$breadcrumb$breadcrumb_segment_row__delegate;
return frontend$components$block$breadcrumb$breadcrumb_segment_row;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38599 = comp__31745__auto__;
var G__38600 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38599,G__38600) : io.factorhouse.hsx.core.react_memo.call(null,G__38599,G__38600));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"breadcrumb-segment-row");

return comp__31745__auto__;
})();
frontend.components.block.breadcrumb.breadcrumb_dropdown_row = (function (){var render_fn__31744__auto__ = (function frontend$components$block$breadcrumb$breadcrumb_dropdown_row(config,block_uuid,ref_titles,opts){
var entity = (function (){var G__38602 = frontend.db.hooks.use_block(block_uuid);
if((G__38602 == null)){
return null;
} else {
return frontend.components.block.breadcrumb_model.with_breadcrumb_ref_titles(G__38602,ref_titles);
}
})();
var segment = frontend.components.block.breadcrumb_model.block__GT_breadcrumb_segment(entity);
if(cljs.core.truth_(segment)){
var G__38603 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(opts))?null:(function (p1__38601_SHARP_){
return frontend.components.block.breadcrumb.handle_breadcrumb_activate_BANG_(config,entity,opts,p1__38601_SHARP_);
}))], null);
var G__38604 = frontend.components.block.breadcrumb.breadcrumb_segment_label(segment,entity);
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__38603,G__38604) : logseq.shui.ui.dropdown_menu_item.call(null,G__38603,G__38604));
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$breadcrumb$breadcrumb_dropdown_row__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38605 = cljs.core.first(args__31746__auto__);
var G__38606 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38605,G__38606) : io.factorhouse.hsx.core.obj_get.call(null,G__38605,G__38606));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"breadcrumb-dropdown-row","breadcrumb-dropdown-row",-851905164,null),args__31746__auto__),frontend$components$block$breadcrumb$breadcrumb_dropdown_row,args__31746__auto__,null);
}
};
var frontend$components$block$breadcrumb$breadcrumb_dropdown_row = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38663__i = 0, G__38663__a = new Array(arguments.length -  0);
while (G__38663__i < G__38663__a.length) {G__38663__a[G__38663__i] = arguments[G__38663__i + 0]; ++G__38663__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38663__a,0,null);
} 
return frontend$components$block$breadcrumb$breadcrumb_dropdown_row__delegate.call(this,args__31746__auto__);};
frontend$components$block$breadcrumb$breadcrumb_dropdown_row.cljs$lang$maxFixedArity = 0;
frontend$components$block$breadcrumb$breadcrumb_dropdown_row.cljs$lang$applyTo = (function (arglist__38664){
var args__31746__auto__ = cljs.core.seq(arglist__38664);
return frontend$components$block$breadcrumb$breadcrumb_dropdown_row__delegate(args__31746__auto__);
});
frontend$components$block$breadcrumb$breadcrumb_dropdown_row.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$breadcrumb$breadcrumb_dropdown_row__delegate;
return frontend$components$block$breadcrumb$breadcrumb_dropdown_row;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38607 = comp__31745__auto__;
var G__38608 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38607,G__38608) : io.factorhouse.hsx.core.react_memo.call(null,G__38607,G__38608));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"breadcrumb-dropdown-row");

return comp__31745__auto__;
})();
frontend.components.block.breadcrumb.breadcrumb_search_overflow_tooltip = (function (){var render_fn__31744__auto__ = (function frontend$components$block$breadcrumb$breadcrumb_search_overflow_tooltip(title){
return frontend.ui.tooltip(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-40.px-0.5.text-xs","span.opacity-40.px-0.5.text-xs",-786229183),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"role","role",-736691072),"button",new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(0),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("breadcrumb","more-ancestors","breadcrumb/more-ancestors",823826067)], 0))], null),"\u00B7\u00B7\u00B7"], null),title,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"trigger-props","trigger-props",1619401213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-child","as-child",1364710342),true], null)], null));
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$breadcrumb$breadcrumb_search_overflow_tooltip__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38609 = cljs.core.first(args__31746__auto__);
var G__38610 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38609,G__38610) : io.factorhouse.hsx.core.obj_get.call(null,G__38609,G__38610));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"breadcrumb-search-overflow-tooltip","breadcrumb-search-overflow-tooltip",133702843,null),args__31746__auto__),frontend$components$block$breadcrumb$breadcrumb_search_overflow_tooltip,args__31746__auto__,null);
}
};
var frontend$components$block$breadcrumb$breadcrumb_search_overflow_tooltip = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38665__i = 0, G__38665__a = new Array(arguments.length -  0);
while (G__38665__i < G__38665__a.length) {G__38665__a[G__38665__i] = arguments[G__38665__i + 0]; ++G__38665__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38665__a,0,null);
} 
return frontend$components$block$breadcrumb$breadcrumb_search_overflow_tooltip__delegate.call(this,args__31746__auto__);};
frontend$components$block$breadcrumb$breadcrumb_search_overflow_tooltip.cljs$lang$maxFixedArity = 0;
frontend$components$block$breadcrumb$breadcrumb_search_overflow_tooltip.cljs$lang$applyTo = (function (arglist__38666){
var args__31746__auto__ = cljs.core.seq(arglist__38666);
return frontend$components$block$breadcrumb$breadcrumb_search_overflow_tooltip__delegate(args__31746__auto__);
});
frontend$components$block$breadcrumb$breadcrumb_search_overflow_tooltip.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$breadcrumb$breadcrumb_search_overflow_tooltip__delegate;
return frontend$components$block$breadcrumb$breadcrumb_search_overflow_tooltip;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38611 = comp__31745__auto__;
var G__38612 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38611,G__38612) : io.factorhouse.hsx.core.react_memo.call(null,G__38611,G__38612));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"breadcrumb-search-overflow-tooltip");

return comp__31745__auto__;
})();
frontend.components.block.breadcrumb.breadcrumb_overflow_content = (function (){var render_fn__31744__auto__ = (function frontend$components$block$breadcrumb$breadcrumb_overflow_content(config,target_uuid,opts,vopts,show_page_QMARK_){
var temp__5825__auto__ = frontend.db.hooks.use_resource(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block-breadcrumb","block-breadcrumb",1527541786),target_uuid,(1000)], null));
if(cljs.core.truth_(temp__5825__auto__)){
var breadcrumb_data = temp__5825__auto__;
var view = frontend.components.block.breadcrumb_model.build_breadcrumb_view(new cljs.core.Keyword(null,"ancestor-uuids","ancestor-uuids",-2052291099).cljs$core$IFn$_invoke$arity$1(breadcrumb_data),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vopts,new cljs.core.Keyword(null,"show-page?","show-page?",792494155),show_page_QMARK_));
var hidden_uuids = new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(view);
var ref_titles = new cljs.core.Keyword(null,"ref-titles","ref-titles",1814381807).cljs$core$IFn$_invoke$arity$1(breadcrumb_data);
var G__38613 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"max-h-[min(50vh,420px)] overflow-y-auto"], null);
var G__38614 = (function (){var iter__5628__auto__ = (function frontend$components$block$breadcrumb$breadcrumb_overflow_content_$_iter__38615(s__38616){
return (new cljs.core.LazySeq(null,(function (){
var s__38616__$1 = s__38616;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__38616__$1);
if(temp__5825__auto____$1){
var s__38616__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38616__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__38616__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__38618 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__38617 = (0);
while(true){
if((i__38617 < size__5627__auto__)){
var block_uuid = cljs.core._nth(c__5626__auto__,i__38617);
cljs.core.chunk_append(b__38618,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),frontend.components.block.breadcrumb.breadcrumb_dropdown_row(config,block_uuid,ref_titles,opts)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_uuid))], null)));

var G__38667 = (i__38617 + (1));
i__38617 = G__38667;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38618),frontend$components$block$breadcrumb$breadcrumb_overflow_content_$_iter__38615(cljs.core.chunk_rest(s__38616__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38618),null);
}
} else {
var block_uuid = cljs.core.first(s__38616__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),frontend.components.block.breadcrumb.breadcrumb_dropdown_row(config,block_uuid,ref_titles,opts)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_uuid))], null)),frontend$components$block$breadcrumb$breadcrumb_overflow_content_$_iter__38615(cljs.core.rest(s__38616__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(hidden_uuids);
})();
return (logseq.shui.ui.dropdown_menu_content.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_content.cljs$core$IFn$_invoke$arity$2(G__38613,G__38614) : logseq.shui.ui.dropdown_menu_content.call(null,G__38613,G__38614));
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$breadcrumb$breadcrumb_overflow_content__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38619 = cljs.core.first(args__31746__auto__);
var G__38620 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38619,G__38620) : io.factorhouse.hsx.core.obj_get.call(null,G__38619,G__38620));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"breadcrumb-overflow-content","breadcrumb-overflow-content",42827559,null),args__31746__auto__),frontend$components$block$breadcrumb$breadcrumb_overflow_content,args__31746__auto__,null);
}
};
var frontend$components$block$breadcrumb$breadcrumb_overflow_content = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38668__i = 0, G__38668__a = new Array(arguments.length -  0);
while (G__38668__i < G__38668__a.length) {G__38668__a[G__38668__i] = arguments[G__38668__i + 0]; ++G__38668__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38668__a,0,null);
} 
return frontend$components$block$breadcrumb$breadcrumb_overflow_content__delegate.call(this,args__31746__auto__);};
frontend$components$block$breadcrumb$breadcrumb_overflow_content.cljs$lang$maxFixedArity = 0;
frontend$components$block$breadcrumb$breadcrumb_overflow_content.cljs$lang$applyTo = (function (arglist__38669){
var args__31746__auto__ = cljs.core.seq(arglist__38669);
return frontend$components$block$breadcrumb$breadcrumb_overflow_content__delegate(args__31746__auto__);
});
frontend$components$block$breadcrumb$breadcrumb_overflow_content.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$breadcrumb$breadcrumb_overflow_content__delegate;
return frontend$components$block$breadcrumb$breadcrumb_overflow_content;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38621 = comp__31745__auto__;
var G__38622 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38621,G__38622) : io.factorhouse.hsx.core.react_memo.call(null,G__38621,G__38622));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"breadcrumb-overflow-content");

return comp__31745__auto__;
})();
/**
 * Renders an ellipsis button that exposes hidden ancestor segments in a dropdown.
 */
frontend.components.block.breadcrumb.breadcrumb_overflow_dropdown = (function (){var render_fn__31744__auto__ = (function frontend$components$block$breadcrumb$breadcrumb_overflow_dropdown(config,target_uuid,opts,vopts,show_page_QMARK_){
var open_QMARK_ = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}),cljs.core.PersistentVector.EMPTY);
var vec__38624 = logseq.shui.hooks.use_atom(open_QMARK_);
var open_value_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38624,(0),null);
var G__38627 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_value_QMARK_,new cljs.core.Keyword(null,"on-open-change","on-open-change",687272862),(function (p1__38623_SHARP_){
return cljs.core.reset_BANG_(open_QMARK_,p1__38623_SHARP_);
})], null);
var G__38628 = frontend.ui.tooltip((function (){var G__38630 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-child","as-child",1364710342),true], null);
var G__38631 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.breadcrumb__overflow.opacity-60.hover:opacity-100.px-0.5.text-xs","button.breadcrumb__overflow.opacity-60.hover:opacity-100.px-0.5.text-xs",844409012),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("breadcrumb","more-ancestors","breadcrumb/more-ancestors",823826067)], 0))], null),"\u00B7\u00B7\u00B7"], null);
return (logseq.shui.ui.dropdown_menu_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_trigger.cljs$core$IFn$_invoke$arity$2(G__38630,G__38631) : logseq.shui.ui.dropdown_menu_trigger.call(null,G__38630,G__38631));
})(),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("breadcrumb","more-ancestors","breadcrumb/more-ancestors",823826067)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"trigger-props","trigger-props",1619401213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-child","as-child",1364710342),true], null)], null));
var G__38629 = (cljs.core.truth_(open_value_QMARK_)?frontend.components.block.breadcrumb.breadcrumb_overflow_content(config,target_uuid,opts,vopts,show_page_QMARK_):null);
return (logseq.shui.ui.dropdown_menu.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.dropdown_menu.cljs$core$IFn$_invoke$arity$3(G__38627,G__38628,G__38629) : logseq.shui.ui.dropdown_menu.call(null,G__38627,G__38628,G__38629));
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$breadcrumb$breadcrumb_overflow_dropdown__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38632 = cljs.core.first(args__31746__auto__);
var G__38633 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38632,G__38633) : io.factorhouse.hsx.core.obj_get.call(null,G__38632,G__38633));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"breadcrumb-overflow-dropdown","breadcrumb-overflow-dropdown",320057271,null),args__31746__auto__),frontend$components$block$breadcrumb$breadcrumb_overflow_dropdown,args__31746__auto__,null);
}
};
var frontend$components$block$breadcrumb$breadcrumb_overflow_dropdown = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38670__i = 0, G__38670__a = new Array(arguments.length -  0);
while (G__38670__i < G__38670__a.length) {G__38670__a[G__38670__i] = arguments[G__38670__i + 0]; ++G__38670__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38670__a,0,null);
} 
return frontend$components$block$breadcrumb$breadcrumb_overflow_dropdown__delegate.call(this,args__31746__auto__);};
frontend$components$block$breadcrumb$breadcrumb_overflow_dropdown.cljs$lang$maxFixedArity = 0;
frontend$components$block$breadcrumb$breadcrumb_overflow_dropdown.cljs$lang$applyTo = (function (arglist__38671){
var args__31746__auto__ = cljs.core.seq(arglist__38671);
return frontend$components$block$breadcrumb$breadcrumb_overflow_dropdown__delegate(args__31746__auto__);
});
frontend$components$block$breadcrumb$breadcrumb_overflow_dropdown.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$breadcrumb$breadcrumb_overflow_dropdown__delegate;
return frontend$components$block$breadcrumb$breadcrumb_overflow_dropdown;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38634 = comp__31745__auto__;
var G__38635 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38634,G__38635) : io.factorhouse.hsx.core.react_memo.call(null,G__38634,G__38635));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"breadcrumb-overflow-dropdown");

return comp__31745__auto__;
})();
frontend.components.block.breadcrumb.breadcrumb_aux = (function (){var render_fn__31744__auto__ = (function frontend$components$block$breadcrumb$breadcrumb_aux(config,target_uuid,p__38636,breadcrumb_ancestors){
var map__38637 = p__38636;
var map__38637__$1 = cljs.core.__destructure_map(map__38637);
var opts = map__38637__$1;
var show_page_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38637__$1,new cljs.core.Keyword(null,"show-page?","show-page?",792494155),true);
var indent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38637__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379));
var end_separator_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38637__$1,new cljs.core.Keyword(null,"end-separator?","end-separator?",424414922));
var _navigating_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38637__$1,new cljs.core.Keyword(null,"_navigating-block","_navigating-block",-946999864));
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38637__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var header_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38637__$1,new cljs.core.Keyword(null,"header?","header?",-106649173));
var effective_variant = (function (){var or__5142__auto__ = variant;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.truth_(header_QMARK_)){
return new cljs.core.Keyword(null,"app-header","app-header",-1928371793);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"search?","search?",785472524).cljs$core$IFn$_invoke$arity$1(config))){
return new cljs.core.Keyword(null,"search-result","search-result",528142443);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"list-view?","list-view?",499477951).cljs$core$IFn$_invoke$arity$1(config))){
return new cljs.core.Keyword(null,"inline","inline",1399884222);
} else {
return new cljs.core.Keyword(null,"block-page","block-page",-1504429860);

}
}
}
}
})();
var vopts = frontend.components.block.breadcrumb_model.variant_options(effective_variant);
var view = frontend.components.block.breadcrumb_model.build_breadcrumb_view(breadcrumb_ancestors,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vopts,new cljs.core.Keyword(null,"show-page?","show-page?",792494155),show_page_QMARK_));
var map__38638 = view;
var map__38638__$1 = cljs.core.__destructure_map(map__38638);
var visible_prefix_raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38638__$1,new cljs.core.Keyword(null,"visible-prefix","visible-prefix",-718434979));
var visible_suffix_raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38638__$1,new cljs.core.Keyword(null,"visible-suffix","visible-suffix",803263971));
var overflow_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38638__$1,new cljs.core.Keyword(null,"overflow?","overflow?",124924720));
var config__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"breadcrumb?","breadcrumb?",-1793266363),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"disable-preview?","disable-preview?",1485814365),true], 0));
var render_seg = (function (group,block){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),frontend.components.block.breadcrumb.breadcrumb_segment_row(config__$1,block,opts,effective_variant)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(group)+"-seg-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)))], null));
});
var render_segs = (function (group,blocks){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (idx,block){
if((idx === (0))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_seg(group,block)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.block.breadcrumb.breadcrumb_separator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(group)+"-sep-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx))], 0)),render_seg(group,block)], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.range.cljs$core$IFn$_invoke$arity$0(),blocks], 0));
});
if(((cljs.core.seq(visible_prefix_raw)) || (cljs.core.seq(visible_suffix_raw)))){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.breadcrumb.block-parents","div.breadcrumb.block-parents",-1437967412),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+" breadcrumb--"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(effective_variant))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"search?","search?",785472524).cljs$core$IFn$_invoke$arity$1(config__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"list-view?","list-view?",499477951).cljs$core$IFn$_invoke$arity$1(config__$1);
}
})())?null:" my-2"))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(indent_QMARK_)?" ml-4":null)))], null),((((new cljs.core.Keyword(null,"top-level?","top-level?",993634489).cljs$core$IFn$_invoke$arity$1(config__$1) === false) && (cljs.core.seq(breadcrumb_ancestors))))?frontend.components.block.breadcrumb.breadcrumb_separator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["leading-sep"], 0)):null),render_segs("prefix",visible_prefix_raw),(cljs.core.truth_(overflow_QMARK_)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.block.breadcrumb.breadcrumb_separator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["overflow-sep"], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(effective_variant,new cljs.core.Keyword(null,"search-result","search-result",528142443)))?frontend.components.block.breadcrumb.breadcrumb_search_overflow_tooltip(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("breadcrumb","more-ancestors","breadcrumb/more-ancestors",823826067)], 0))):frontend.components.block.breadcrumb.breadcrumb_overflow_dropdown(config__$1,target_uuid,opts,vopts,show_page_QMARK_))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"overflow"], null))], null)):null),((cljs.core.seq(visible_suffix_raw))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.block.breadcrumb.breadcrumb_separator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["suffix-leading-sep"], 0))], null),render_segs("suffix",visible_suffix_raw)):null),(cljs.core.truth_(end_separator_QMARK_)?frontend.components.block.breadcrumb.breadcrumb_separator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["end-sep"], 0)):null)], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$breadcrumb$breadcrumb_aux__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38639 = cljs.core.first(args__31746__auto__);
var G__38640 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38639,G__38640) : io.factorhouse.hsx.core.obj_get.call(null,G__38639,G__38640));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"breadcrumb-aux","breadcrumb-aux",1888461138,null),args__31746__auto__),frontend$components$block$breadcrumb$breadcrumb_aux,args__31746__auto__,null);
}
};
var frontend$components$block$breadcrumb$breadcrumb_aux = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38672__i = 0, G__38672__a = new Array(arguments.length -  0);
while (G__38672__i < G__38672__a.length) {G__38672__a[G__38672__i] = arguments[G__38672__i + 0]; ++G__38672__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38672__a,0,null);
} 
return frontend$components$block$breadcrumb$breadcrumb_aux__delegate.call(this,args__31746__auto__);};
frontend$components$block$breadcrumb$breadcrumb_aux.cljs$lang$maxFixedArity = 0;
frontend$components$block$breadcrumb$breadcrumb_aux.cljs$lang$applyTo = (function (arglist__38673){
var args__31746__auto__ = cljs.core.seq(arglist__38673);
return frontend$components$block$breadcrumb$breadcrumb_aux__delegate(args__31746__auto__);
});
frontend$components$block$breadcrumb$breadcrumb_aux.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$breadcrumb$breadcrumb_aux__delegate;
return frontend$components$block$breadcrumb$breadcrumb_aux;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38641 = comp__31745__auto__;
var G__38642 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38641,G__38642) : io.factorhouse.hsx.core.react_memo.call(null,G__38641,G__38642));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"breadcrumb-aux");

return comp__31745__auto__;
})();
frontend.components.block.breadcrumb.subscribed_breadcrumb = (function (){var render_fn__31744__auto__ = (function frontend$components$block$breadcrumb$subscribed_breadcrumb(config,block_id,opts){
var temp__5825__auto__ = frontend.db.hooks.use_resource(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block-breadcrumb","block-breadcrumb",1527541786),block_id,(16)], null));
if(cljs.core.truth_(temp__5825__auto__)){
var breadcrumb_data = temp__5825__auto__;
var breadcrumb_ancestors = frontend.components.block.breadcrumb_model.resource_ancestors(breadcrumb_data);
if(cljs.core.seq(breadcrumb_ancestors)){
return frontend.components.block.breadcrumb.breadcrumb_aux(config,block_id,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"ref-titles","ref-titles",1814381807),new cljs.core.Keyword(null,"ref-titles","ref-titles",1814381807).cljs$core$IFn$_invoke$arity$1(breadcrumb_data)),breadcrumb_ancestors);
} else {
return null;
}
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$breadcrumb$subscribed_breadcrumb__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__38643 = cljs.core.first(args__31746__auto__);
var G__38644 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__38643,G__38644) : io.factorhouse.hsx.core.obj_get.call(null,G__38643,G__38644));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"subscribed-breadcrumb","subscribed-breadcrumb",942628783,null),args__31746__auto__),frontend$components$block$breadcrumb$subscribed_breadcrumb,args__31746__auto__,null);
}
};
var frontend$components$block$breadcrumb$subscribed_breadcrumb = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38674__i = 0, G__38674__a = new Array(arguments.length -  0);
while (G__38674__i < G__38674__a.length) {G__38674__a[G__38674__i] = arguments[G__38674__i + 0]; ++G__38674__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38674__a,0,null);
} 
return frontend$components$block$breadcrumb$subscribed_breadcrumb__delegate.call(this,args__31746__auto__);};
frontend$components$block$breadcrumb$subscribed_breadcrumb.cljs$lang$maxFixedArity = 0;
frontend$components$block$breadcrumb$subscribed_breadcrumb.cljs$lang$applyTo = (function (arglist__38675){
var args__31746__auto__ = cljs.core.seq(arglist__38675);
return frontend$components$block$breadcrumb$subscribed_breadcrumb__delegate(args__31746__auto__);
});
frontend$components$block$breadcrumb$subscribed_breadcrumb.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$breadcrumb$subscribed_breadcrumb__delegate;
return frontend$components$block$breadcrumb$subscribed_breadcrumb;
})()
;
var memo_comp__31747__auto__ = (function (){var G__38645 = comp__31745__auto__;
var G__38646 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__38645,G__38646) : io.factorhouse.hsx.core.react_memo.call(null,G__38645,G__38646));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"subscribed-breadcrumb");

return comp__31745__auto__;
})();
frontend.components.block.breadcrumb.breadcrumb = (function frontend$components$block$breadcrumb$breadcrumb(config,_repo,block_id,p__38647){
var map__38648 = p__38647;
var map__38648__$1 = cljs.core.__destructure_map(map__38648);
var opts = map__38648__$1;
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38648__$1,new cljs.core.Keyword(null,"block","block",664686210));
if(cljs.core.contains_QMARK_(block,new cljs.core.Keyword("block.temp","breadcrumb","block.temp/breadcrumb",598913897))){
var temp__5825__auto__ = cljs.core.seq(new cljs.core.Keyword("block.temp","breadcrumb","block.temp/breadcrumb",598913897).cljs$core$IFn$_invoke$arity$1(block));
if(temp__5825__auto__){
var breadcrumb_ancestors = temp__5825__auto__;
return frontend.components.block.breadcrumb.breadcrumb_aux(config,block_id,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"ref-titles","ref-titles",1814381807),new cljs.core.Keyword("block.temp","breadcrumb-ref-titles","block.temp/breadcrumb-ref-titles",-797162198).cljs$core$IFn$_invoke$arity$1(block)),breadcrumb_ancestors);
} else {
return null;
}
} else {
return frontend.components.block.breadcrumb.subscribed_breadcrumb(config,block_id,opts);
}
});

//# sourceMappingURL=frontend.components.block.breadcrumb.js.map
