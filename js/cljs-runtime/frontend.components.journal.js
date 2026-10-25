goog.provide('frontend.components.journal');
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.journal !== 'undefined') && (typeof frontend.components.journal.journal_item_height_by_key_STAR_ !== 'undefined')){
} else {
frontend.components.journal.journal_item_height_by_key_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
frontend.components.journal.default_journal_height = (640);
frontend.components.journal.journal_ready_QMARK_ = (function frontend$components$journal$journal_ready_QMARK_(journal_uuid){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ready","ready",1086465795),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(frontend.db.subs.block_snapshot(journal_uuid)));
});
frontend.components.journal.journal_placeholder = (function frontend$components$journal$journal_placeholder(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.journal-item-placeholder.animate-pulse.p-6","div.journal-item-placeholder.animate-pulse.p-6",-1360553983),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.h-8.w-48.rounded.bg-secondary","div.h-8.w-48.rounded.bg-secondary",569420914)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-8.h-5.w-full.rounded.bg-secondary","div.mt-8.h-5.w-full.rounded.bg-secondary",-1596416642)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-3.h-5.rounded.bg-secondary","div.mt-3.h-5.rounded.bg-secondary",2141297394),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-2/3"], null)], null)], null);
});
frontend.components.journal.journal_content = (function (){var render_fn__31744__auto__ = (function frontend$components$journal$journal_content(journal_uuid){
var or__5142__auto__ = frontend.components.page.journal_page(journal_uuid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"journals?","journals?",1584679180),true], null));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.components.journal.journal_placeholder();
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$journal$journal_content__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47407 = cljs.core.first(args__31746__auto__);
var G__47408 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47407,G__47408) : io.factorhouse.hsx.core.obj_get.call(null,G__47407,G__47408));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"journal-content","journal-content",-293700747,null),args__31746__auto__),frontend$components$journal$journal_content,args__31746__auto__,null);
}
};
var frontend$components$journal$journal_content = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47432__i = 0, G__47432__a = new Array(arguments.length -  0);
while (G__47432__i < G__47432__a.length) {G__47432__a[G__47432__i] = arguments[G__47432__i + 0]; ++G__47432__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47432__a,0,null);
} 
return frontend$components$journal$journal_content__delegate.call(this,args__31746__auto__);};
frontend$components$journal$journal_content.cljs$lang$maxFixedArity = 0;
frontend$components$journal$journal_content.cljs$lang$applyTo = (function (arglist__47433){
var args__31746__auto__ = cljs.core.seq(arglist__47433);
return frontend$components$journal$journal_content__delegate(args__31746__auto__);
});
frontend$components$journal$journal_content.cljs$core$IFn$_invoke$arity$variadic = frontend$components$journal$journal_content__delegate;
return frontend$components$journal$journal_content;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47409 = comp__31745__auto__;
var G__47410 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47409,G__47410) : io.factorhouse.hsx.core.react_memo.call(null,G__47409,G__47410));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"journal-content");

return comp__31745__auto__;
})();
/**
 * Inline min-height for a row that shows a placeholder: its own last
 * measured height when one is cached, the default otherwise.
 */
frontend.components.journal.row_style = (function frontend$components$journal$row_style(cached_height){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),(function (){var or__5142__auto__ = cached_height;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.components.journal.default_journal_height;
}
})()], null);
});
/**
 * A row during a scroll: a placeholder, hook-free, pinned to the row's last
 * measured height so the list stays steady. Subscribes to nothing, so a row
 * that scrolls past queues no snapshot load.
 */
frontend.components.journal.journal_placeholder_item = (function (){var render_fn__31744__auto__ = (function frontend$components$journal$journal_placeholder_item(journal_uuid,last_QMARK_){
var cached_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.components.journal.journal_item_height_by_key_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.state.get_current_repo(),journal_uuid], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.journal-item.content.relative","div.journal-item.content.relative",-56860526),(function (){var G__47411 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),frontend.components.journal.row_style(cached_height)], null);
if(cljs.core.truth_(last_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47411,new cljs.core.Keyword(null,"class","class",-2030961996),"journal-last-item");
} else {
return G__47411;
}
})(),frontend.components.journal.journal_placeholder()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$journal$journal_placeholder_item__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47412 = cljs.core.first(args__31746__auto__);
var G__47413 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47412,G__47413) : io.factorhouse.hsx.core.obj_get.call(null,G__47412,G__47413));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"journal-placeholder-item","journal-placeholder-item",91395882,null),args__31746__auto__),frontend$components$journal$journal_placeholder_item,args__31746__auto__,null);
}
};
var frontend$components$journal$journal_placeholder_item = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47434__i = 0, G__47434__a = new Array(arguments.length -  0);
while (G__47434__i < G__47434__a.length) {G__47434__a[G__47434__i] = arguments[G__47434__i + 0]; ++G__47434__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47434__a,0,null);
} 
return frontend$components$journal$journal_placeholder_item__delegate.call(this,args__31746__auto__);};
frontend$components$journal$journal_placeholder_item.cljs$lang$maxFixedArity = 0;
frontend$components$journal$journal_placeholder_item.cljs$lang$applyTo = (function (arglist__47435){
var args__31746__auto__ = cljs.core.seq(arglist__47435);
return frontend$components$journal$journal_placeholder_item__delegate(args__31746__auto__);
});
frontend$components$journal$journal_placeholder_item.cljs$core$IFn$_invoke$arity$variadic = frontend$components$journal$journal_placeholder_item__delegate;
return frontend$components$journal$journal_placeholder_item;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47414 = comp__31745__auto__;
var G__47415 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47414,G__47415) : io.factorhouse.hsx.core.react_memo.call(null,G__47414,G__47415));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"journal-placeholder-item");

return comp__31745__auto__;
})();
/**
 * A row that renders its journal. The row is pinned to its cached height
 * while its snapshot is still loading and a cached height exists; a settled
 * snapshot, `:missing` and `:error` included, releases the pin and lets the
 * content set the height. The `ResizeObserver` measures this same box for as
 * long as the row is settled and mounted, so the cache holds real row heights,
 * content plus the row's padding, and follows the sub-tree as it fills in.
 */
frontend.components.journal.journal_rendered_item = (function (){var render_fn__31744__auto__ = (function frontend$components$journal$journal_rendered_item(journal_uuid,last_QMARK_){
var repo = frontend.state.get_current_repo();
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,journal_uuid], null);
var _STAR_item_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var cached_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.components.journal.journal_item_height_by_key_STAR_),cache_key);
var settled_QMARK_ = frontend.db.hooks.use_block_prefetch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [journal_uuid], null));
var pinned_QMARK_ = ((cljs.core.not(settled_QMARK_)) && ((!((cached_height == null)))));
logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto__ = (function (){var and__5140__auto__ = settled_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return logseq.shui.hooks.deref(_STAR_item_ref);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
var observer = (new ResizeObserver((function (){
var height = Math.round(node.getBoundingClientRect().height);
if((height > (0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.components.journal.journal_item_height_by_key_STAR_,cljs.core.assoc,cache_key,height);
} else {
return null;
}
})));
observer.observe(node);

return (function (){
return observer.disconnect();
});
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,journal_uuid,settled_QMARK_], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.journal-item.content.relative","div.journal-item.content.relative",-56860526),(function (){var G__47416 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_item_ref], null);
var G__47416__$1 = (cljs.core.truth_(last_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47416,new cljs.core.Keyword(null,"class","class",-2030961996),"journal-last-item"):G__47416);
if(pinned_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47416__$1,new cljs.core.Keyword(null,"style","style",-496642736),frontend.components.journal.row_style(cached_height));
} else {
return G__47416__$1;
}
})(),frontend.components.journal.journal_content(journal_uuid)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$journal$journal_rendered_item__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47417 = cljs.core.first(args__31746__auto__);
var G__47418 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47417,G__47418) : io.factorhouse.hsx.core.obj_get.call(null,G__47417,G__47418));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"journal-rendered-item","journal-rendered-item",232728673,null),args__31746__auto__),frontend$components$journal$journal_rendered_item,args__31746__auto__,null);
}
};
var frontend$components$journal$journal_rendered_item = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47436__i = 0, G__47436__a = new Array(arguments.length -  0);
while (G__47436__i < G__47436__a.length) {G__47436__a[G__47436__i] = arguments[G__47436__i + 0]; ++G__47436__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47436__a,0,null);
} 
return frontend$components$journal$journal_rendered_item__delegate.call(this,args__31746__auto__);};
frontend$components$journal$journal_rendered_item.cljs$lang$maxFixedArity = 0;
frontend$components$journal$journal_rendered_item.cljs$lang$applyTo = (function (arglist__47437){
var args__31746__auto__ = cljs.core.seq(arglist__47437);
return frontend$components$journal$journal_rendered_item__delegate(args__31746__auto__);
});
frontend$components$journal$journal_rendered_item.cljs$core$IFn$_invoke$arity$variadic = frontend$components$journal$journal_rendered_item__delegate;
return frontend$components$journal$journal_rendered_item;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47419 = comp__31745__auto__;
var G__47420 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47419,G__47420) : io.factorhouse.hsx.core.react_memo.call(null,G__47419,G__47420));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"journal-rendered-item");

return comp__31745__auto__;
})();
frontend.components.journal.journal_item = (function (){var render_fn__31744__auto__ = (function frontend$components$journal$journal_item(journal_uuid,last_QMARK_,render_QMARK_){
if(cljs.core.truth_(render_QMARK_)){
return frontend.components.journal.journal_rendered_item(journal_uuid,last_QMARK_);
} else {
return frontend.components.journal.journal_placeholder_item(journal_uuid,last_QMARK_);
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$journal$journal_item__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47421 = cljs.core.first(args__31746__auto__);
var G__47422 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47421,G__47422) : io.factorhouse.hsx.core.obj_get.call(null,G__47421,G__47422));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"journal-item","journal-item",543857746,null),args__31746__auto__),frontend$components$journal$journal_item,args__31746__auto__,null);
}
};
var frontend$components$journal$journal_item = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47438__i = 0, G__47438__a = new Array(arguments.length -  0);
while (G__47438__i < G__47438__a.length) {G__47438__a[G__47438__i] = arguments[G__47438__i + 0]; ++G__47438__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47438__a,0,null);
} 
return frontend$components$journal$journal_item__delegate.call(this,args__31746__auto__);};
frontend$components$journal$journal_item.cljs$lang$maxFixedArity = 0;
frontend$components$journal$journal_item.cljs$lang$applyTo = (function (arglist__47439){
var args__31746__auto__ = cljs.core.seq(arglist__47439);
return frontend$components$journal$journal_item__delegate(args__31746__auto__);
});
frontend$components$journal$journal_item.cljs$core$IFn$_invoke$arity$variadic = frontend$components$journal$journal_item__delegate;
return frontend$components$journal$journal_item;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47423 = comp__31745__auto__;
var G__47424 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47423,G__47424) : io.factorhouse.hsx.core.react_memo.call(null,G__47423,G__47424));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"journal-item");

return comp__31745__auto__;
})();
frontend.components.journal.all_journals = (function (){var render_fn__31744__auto__ = (function frontend$components$journal$all_journals(){
var journal_uuids = cljs.core.vec(frontend.db.hooks.use_resource(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"journals","journals",-1915761091)], null)));
var vec__47425 = logseq.shui.hooks.use_state(false);
var scrolling_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47425,(0),null);
var set_scrolling_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47425,(1),null);
if(cljs.core.seq(journal_uuids)){
if(frontend.util.rtc_test_without_virtualization_QMARK_()){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#journals.h-full","div#journals.h-full",576542091),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,journal_uuid){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.journal.journal_item,journal_uuid,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((idx + (1)),cljs.core.count(journal_uuids)),true], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"journal-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(journal_uuid))], null));
}),journal_uuids)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#journals.h-full","div#journals.h-full",576542091),frontend.ui.virtualized_list(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"custom-scroll-parent","custom-scroll-parent",1031485618),frontend.util.app_scroll_container_node.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.to_array(journal_uuids),new cljs.core.Keyword(null,"compute-item-key","compute-item-key",-621146487),(function (_idx,journal_uuid){
return (""+"journal-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(journal_uuid));
}),new cljs.core.Keyword(null,"is-scrolling","is-scrolling",982444296),set_scrolling_BANG_,new cljs.core.Keyword(null,"item-content","item-content",1656730280),(function (idx,journal_uuid){
return frontend.components.journal.journal_item(journal_uuid,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((idx + (1)),cljs.core.count(journal_uuids)),((frontend.components.journal.journal_ready_QMARK_(journal_uuid)) || (cljs.core.not(scrolling_QMARK_))));
})], null))], null);
}
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$journal$all_journals__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47428 = cljs.core.first(args__31746__auto__);
var G__47429 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47428,G__47429) : io.factorhouse.hsx.core.obj_get.call(null,G__47428,G__47429));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"all-journals","all-journals",1293516432,null),args__31746__auto__),frontend$components$journal$all_journals,args__31746__auto__,null);
}
};
var frontend$components$journal$all_journals = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47440__i = 0, G__47440__a = new Array(arguments.length -  0);
while (G__47440__i < G__47440__a.length) {G__47440__a[G__47440__i] = arguments[G__47440__i + 0]; ++G__47440__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47440__a,0,null);
} 
return frontend$components$journal$all_journals__delegate.call(this,args__31746__auto__);};
frontend$components$journal$all_journals.cljs$lang$maxFixedArity = 0;
frontend$components$journal$all_journals.cljs$lang$applyTo = (function (arglist__47441){
var args__31746__auto__ = cljs.core.seq(arglist__47441);
return frontend$components$journal$all_journals__delegate(args__31746__auto__);
});
frontend$components$journal$all_journals.cljs$core$IFn$_invoke$arity$variadic = frontend$components$journal$all_journals__delegate;
return frontend$components$journal$all_journals;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47430 = comp__31745__auto__;
var G__47431 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47430,G__47431) : io.factorhouse.hsx.core.react_memo.call(null,G__47430,G__47431));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"all-journals");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.journal.js.map
