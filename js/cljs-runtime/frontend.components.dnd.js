goog.provide('frontend.components.dnd');
var module$node_modules$$dnd_kit$core$dist$index=shadow.js.require("module$node_modules$$dnd_kit$core$dist$index", {});
var module$node_modules$$dnd_kit$sortable$dist$index=shadow.js.require("module$node_modules$$dnd_kit$sortable$dist$index", {});
var module$node_modules$$dnd_kit$utilities$dist$index=shadow.js.require("module$node_modules$$dnd_kit$utilities$dist$index", {});
frontend.components.dnd.dnd_context = (function (){var render_fn__47251__auto__ = (function() { 
var frontend$components$dnd$dnd_context__delegate = function (opts,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$dnd_kit$core$dist$index.DndContext,opts], null),children);
};
var frontend$components$dnd$dnd_context = function (opts,var_args){
var children = null;
if (arguments.length > 1) {
var G__79203__i = 0, G__79203__a = new Array(arguments.length -  1);
while (G__79203__i < G__79203__a.length) {G__79203__a[G__79203__i] = arguments[G__79203__i + 1]; ++G__79203__i;}
  children = new cljs.core.IndexedSeq(G__79203__a,0,null);
} 
return frontend$components$dnd$dnd_context__delegate.call(this,opts,children);};
frontend$components$dnd$dnd_context.cljs$lang$maxFixedArity = 1;
frontend$components$dnd$dnd_context.cljs$lang$applyTo = (function (arglist__79204){
var opts = cljs.core.first(arglist__79204);
var children = cljs.core.rest(arglist__79204);
return frontend$components$dnd$dnd_context__delegate(opts,children);
});
frontend$components$dnd$dnd_context.cljs$core$IFn$_invoke$arity$variadic = frontend$components$dnd$dnd_context__delegate;
return frontend$components$dnd$dnd_context;
})()
;
var comp__47252__auto__ = (function() { 
var frontend$components$dnd$dnd_context__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__79066 = cljs.core.first(args__47253__auto__);
var G__79067 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__79066,G__79067) : io.factorhouse.hsx.core.obj_get.call(null,G__79066,G__79067));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"dnd-context","dnd-context",1923778476,null),args__47253__auto__),frontend$components$dnd$dnd_context,args__47253__auto__,null);
}
};
var frontend$components$dnd$dnd_context = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__79206__i = 0, G__79206__a = new Array(arguments.length -  0);
while (G__79206__i < G__79206__a.length) {G__79206__a[G__79206__i] = arguments[G__79206__i + 0]; ++G__79206__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__79206__a,0,null);
} 
return frontend$components$dnd$dnd_context__delegate.call(this,args__47253__auto__);};
frontend$components$dnd$dnd_context.cljs$lang$maxFixedArity = 0;
frontend$components$dnd$dnd_context.cljs$lang$applyTo = (function (arglist__79208){
var args__47253__auto__ = cljs.core.seq(arglist__79208);
return frontend$components$dnd$dnd_context__delegate(args__47253__auto__);
});
frontend$components$dnd$dnd_context.cljs$core$IFn$_invoke$arity$variadic = frontend$components$dnd$dnd_context__delegate;
return frontend$components$dnd$dnd_context;
})()
;
var memo_comp__47254__auto__ = (function (){var G__79073 = comp__47252__auto__;
var G__79074 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__79073,G__79074) : io.factorhouse.hsx.core.react_memo.call(null,G__79073,G__79074));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"dnd-context");

return comp__47252__auto__;
})();
frontend.components.dnd.sortable_context = (function (){var render_fn__47251__auto__ = (function() { 
var frontend$components$dnd$sortable_context__delegate = function (opts,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$dnd_kit$sortable$dist$index.SortableContext,opts], null),children);
};
var frontend$components$dnd$sortable_context = function (opts,var_args){
var children = null;
if (arguments.length > 1) {
var G__79209__i = 0, G__79209__a = new Array(arguments.length -  1);
while (G__79209__i < G__79209__a.length) {G__79209__a[G__79209__i] = arguments[G__79209__i + 1]; ++G__79209__i;}
  children = new cljs.core.IndexedSeq(G__79209__a,0,null);
} 
return frontend$components$dnd$sortable_context__delegate.call(this,opts,children);};
frontend$components$dnd$sortable_context.cljs$lang$maxFixedArity = 1;
frontend$components$dnd$sortable_context.cljs$lang$applyTo = (function (arglist__79210){
var opts = cljs.core.first(arglist__79210);
var children = cljs.core.rest(arglist__79210);
return frontend$components$dnd$sortable_context__delegate(opts,children);
});
frontend$components$dnd$sortable_context.cljs$core$IFn$_invoke$arity$variadic = frontend$components$dnd$sortable_context__delegate;
return frontend$components$dnd$sortable_context;
})()
;
var comp__47252__auto__ = (function() { 
var frontend$components$dnd$sortable_context__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__79087 = cljs.core.first(args__47253__auto__);
var G__79088 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__79087,G__79088) : io.factorhouse.hsx.core.obj_get.call(null,G__79087,G__79088));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"sortable-context","sortable-context",-1668051666,null),args__47253__auto__),frontend$components$dnd$sortable_context,args__47253__auto__,null);
}
};
var frontend$components$dnd$sortable_context = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__79211__i = 0, G__79211__a = new Array(arguments.length -  0);
while (G__79211__i < G__79211__a.length) {G__79211__a[G__79211__i] = arguments[G__79211__i + 0]; ++G__79211__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__79211__a,0,null);
} 
return frontend$components$dnd$sortable_context__delegate.call(this,args__47253__auto__);};
frontend$components$dnd$sortable_context.cljs$lang$maxFixedArity = 0;
frontend$components$dnd$sortable_context.cljs$lang$applyTo = (function (arglist__79212){
var args__47253__auto__ = cljs.core.seq(arglist__79212);
return frontend$components$dnd$sortable_context__delegate(args__47253__auto__);
});
frontend$components$dnd$sortable_context.cljs$core$IFn$_invoke$arity$variadic = frontend$components$dnd$sortable_context__delegate;
return frontend$components$dnd$sortable_context;
})()
;
var memo_comp__47254__auto__ = (function (){var G__79090 = comp__47252__auto__;
var G__79091 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__79090,G__79091) : io.factorhouse.hsx.core.react_memo.call(null,G__79090,G__79091));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"sortable-context");

return comp__47252__auto__;
})();
frontend.components.dnd.non_sortable_item = (function (){var render_fn__47251__auto__ = (function frontend$components$dnd$non_sortable_item(props,children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),props,children], null);
});
var comp__47252__auto__ = (function() { 
var frontend$components$dnd$non_sortable_item__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__79103 = cljs.core.first(args__47253__auto__);
var G__79104 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__79103,G__79104) : io.factorhouse.hsx.core.obj_get.call(null,G__79103,G__79104));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"non-sortable-item","non-sortable-item",940409527,null),args__47253__auto__),frontend$components$dnd$non_sortable_item,args__47253__auto__,null);
}
};
var frontend$components$dnd$non_sortable_item = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__79214__i = 0, G__79214__a = new Array(arguments.length -  0);
while (G__79214__i < G__79214__a.length) {G__79214__a[G__79214__i] = arguments[G__79214__i + 0]; ++G__79214__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__79214__a,0,null);
} 
return frontend$components$dnd$non_sortable_item__delegate.call(this,args__47253__auto__);};
frontend$components$dnd$non_sortable_item.cljs$lang$maxFixedArity = 0;
frontend$components$dnd$non_sortable_item.cljs$lang$applyTo = (function (arglist__79215){
var args__47253__auto__ = cljs.core.seq(arglist__79215);
return frontend$components$dnd$non_sortable_item__delegate(args__47253__auto__);
});
frontend$components$dnd$non_sortable_item.cljs$core$IFn$_invoke$arity$variadic = frontend$components$dnd$non_sortable_item__delegate;
return frontend$components$dnd$non_sortable_item;
})()
;
var memo_comp__47254__auto__ = (function (){var G__79105 = comp__47252__auto__;
var G__79106 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__79105,G__79106) : io.factorhouse.hsx.core.react_memo.call(null,G__79105,G__79106));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"non-sortable-item");

return comp__47252__auto__;
})();
frontend.components.dnd.sortable_item = (function (){var render_fn__47251__auto__ = (function frontend$components$dnd$sortable_item(props,children){
var sortable = module$node_modules$$dnd_kit$sortable$dist$index.useSortable(({"id": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)}));
var attributes = sortable.attributes;
var listeners = sortable.listeners;
var set_node_ref = sortable.setNodeRef;
var transform = sortable.transform;
var transition = sortable.transition;
var style = ({"transform": (function (){var fexpr__79115 = module$node_modules$$dnd_kit$utilities$dist$index.CSS.Transform.toString;
return (fexpr__79115.cljs$core$IFn$_invoke$arity$1 ? fexpr__79115.cljs$core$IFn$_invoke$arity$1(transform) : fexpr__79115.call(null,transform));
})(), "transition": transition});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),set_node_ref,new cljs.core.Keyword(null,"style","style",-496642736),style], null),cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(attributes),cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(listeners),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"id","id",-1388402092))], 0)),children], null);
});
var comp__47252__auto__ = (function() { 
var frontend$components$dnd$sortable_item__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__79122 = cljs.core.first(args__47253__auto__);
var G__79123 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__79122,G__79123) : io.factorhouse.hsx.core.obj_get.call(null,G__79122,G__79123));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"sortable-item","sortable-item",1625027104,null),args__47253__auto__),frontend$components$dnd$sortable_item,args__47253__auto__,null);
}
};
var frontend$components$dnd$sortable_item = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__79224__i = 0, G__79224__a = new Array(arguments.length -  0);
while (G__79224__i < G__79224__a.length) {G__79224__a[G__79224__i] = arguments[G__79224__i + 0]; ++G__79224__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__79224__a,0,null);
} 
return frontend$components$dnd$sortable_item__delegate.call(this,args__47253__auto__);};
frontend$components$dnd$sortable_item.cljs$lang$maxFixedArity = 0;
frontend$components$dnd$sortable_item.cljs$lang$applyTo = (function (arglist__79225){
var args__47253__auto__ = cljs.core.seq(arglist__79225);
return frontend$components$dnd$sortable_item__delegate(args__47253__auto__);
});
frontend$components$dnd$sortable_item.cljs$core$IFn$_invoke$arity$variadic = frontend$components$dnd$sortable_item__delegate;
return frontend$components$dnd$sortable_item;
})()
;
var memo_comp__47254__auto__ = (function (){var G__79127 = comp__47252__auto__;
var G__79128 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__79127,G__79128) : io.factorhouse.hsx.core.react_memo.call(null,G__79127,G__79128));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"sortable-item");

return comp__47252__auto__;
})();
frontend.components.dnd.items = (function (){var render_fn__47251__auto__ = (function frontend$components$dnd$items(col_STAR_,p__79137){
var map__79138 = p__79137;
var map__79138__$1 = cljs.core.__destructure_map(map__79138);
var on_drag_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79138__$1,new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671));
var parent_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79138__$1,new cljs.core.Keyword(null,"parent-node","parent-node",-605954869));
var vertical_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__79138__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true);
var sort_by_inner_element_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79138__$1,new cljs.core.Keyword(null,"sort-by-inner-element?","sort-by-inner-element?",235482267));
if(cljs.core.every_QMARK_(new cljs.core.Keyword(null,"id","id",-1388402092),col_STAR_)){
} else {
throw (new Error("Assert failed: (every? :id col*)"));
}

if(cljs.core.truth_(cljs.core.some((function (p1__79130_SHARP_){
return (new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__79130_SHARP_) == null);
}),col_STAR_))){
console.error("dnd-kit items without id");

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"col","col",-1959363084),col_STAR_], 0));
} else {
}

var col = cljs.core.filterv(new cljs.core.Keyword(null,"id","id",-1388402092),col_STAR_);
var ids = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),col);
var ids_key = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ids], 0));
var items_SINGLEQUOTE_ = cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(ids);
var id__GT_item = cljs.core.zipmap(ids,col);
var vec__79145 = logseq.shui.hooks.use_state(items_SINGLEQUOTE_);
var items_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79145,(0),null);
var set_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79145,(1),null);
var _ = logseq.shui.hooks.use_effect_BANG_((function (){
return (set_items.cljs$core$IFn$_invoke$arity$1 ? set_items.cljs$core$IFn$_invoke$arity$1(items_SINGLEQUOTE_) : set_items.call(null,items_SINGLEQUOTE_));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ids_key], null));
var vec__79148 = logseq.shui.hooks.use_state(null);
var _active_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79148,(0),null);
var set_active_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79148,(1),null);
var sensors = module$node_modules$$dnd_kit$core$dist$index.useSensors(module$node_modules$$dnd_kit$core$dist$index.useSensor(module$node_modules$$dnd_kit$core$dist$index.MouseSensor,cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"activationConstraint","activationConstraint",-448729250),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"distance","distance",-1671893894),(8)], null)], null))),module$node_modules$$dnd_kit$core$dist$index.useSensor(module$node_modules$$dnd_kit$core$dist$index.TouchSensor,cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"activationConstraint","activationConstraint",-448729250),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"delay","delay",-574225219),(120),new cljs.core.Keyword(null,"tolerance","tolerance",406811818),(8)], null)], null))));
var dnd_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sensors","sensors",-1987490738),sensors,new cljs.core.Keyword(null,"collisionDetection","collisionDetection",-2054491885),module$node_modules$$dnd_kit$core$dist$index.closestCenter,new cljs.core.Keyword(null,"onDragStart","onDragStart",-2108300997),(function (event){
if(frontend.state.editing_QMARK_()){
return null;
} else {
var G__79157 = event.active.id;
return (set_active_id.cljs$core$IFn$_invoke$arity$1 ? set_active_id.cljs$core$IFn$_invoke$arity$1(G__79157) : set_active_id.call(null,G__79157));
}
}),new cljs.core.Keyword(null,"onDragEnd","onDragEnd",1520191895),(function (event){
var active_id = event.active.id;
var over_id = (function (){var G__79161 = event.over;
if((G__79161 == null)){
return null;
} else {
return G__79161.id;
}
})();
if(cljs.core.truth_(active_id)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_id,over_id)){
} else {
var old_index_79240 = ids.indexOf(active_id);
var new_index_79241 = ids.indexOf(over_id);
var new_items_79242 = module$node_modules$$dnd_kit$sortable$dist$index.arrayMove(items_state,old_index_79240,new_index_79241);
if(cljs.core.fn_QMARK_(on_drag_end)){
var new_values_79243 = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
var item = (id__GT_item.cljs$core$IFn$_invoke$arity$1 ? id__GT_item.cljs$core$IFn$_invoke$arity$1(id) : id__GT_item.call(null,id));
if(cljs.core.map_QMARK_(item)){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(item);
} else {
return item;
}
}),new_items_79242)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(new_values_79243),cljs.core.count(ids))){
console.error("Dnd length not matched: ");

new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old-items","old-items",1364373850),items_state,new cljs.core.Keyword(null,"new-items","new-items",-2122710837),new_items_79242], null);
} else {
(set_items.cljs$core$IFn$_invoke$arity$1 ? set_items.cljs$core$IFn$_invoke$arity$1(new_items_79242) : set_items.call(null,new_items_79242));

var G__79174_79245 = new_values_79243;
var G__79175_79246 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active-id","active-id",-59238656),active_id,new cljs.core.Keyword(null,"over-id","over-id",257293900),over_id,new cljs.core.Keyword(null,"direction","direction",-633359395),(((new_index_79241 > old_index_79240))?new cljs.core.Keyword(null,"down","down",1565245570):new cljs.core.Keyword(null,"up","up",-269712113))], null);
(on_drag_end.cljs$core$IFn$_invoke$arity$2 ? on_drag_end.cljs$core$IFn$_invoke$arity$2(G__79174_79245,G__79175_79246) : on_drag_end.call(null,G__79174_79245,G__79175_79246));
}
} else {
}
}
} else {
}

return (set_active_id.cljs$core$IFn$_invoke$arity$1 ? set_active_id.cljs$core$IFn$_invoke$arity$1(null) : set_active_id.call(null,null));
})], null);
var sortable_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items","items",1031954938),items_state,new cljs.core.Keyword(null,"strategy","strategy",-1471631918),(cljs.core.truth_(vertical_QMARK_)?module$node_modules$$dnd_kit$sortable$dist$index.verticalListSortingStrategy:module$node_modules$$dnd_kit$sortable$dist$index.horizontalListSortingStrategy)], null);
var children = (function (){var iter__5628__auto__ = (function frontend$components$dnd$items_$_iter__79180(s__79181){
return (new cljs.core.LazySeq(null,(function (){
var s__79181__$1 = s__79181;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__79181__$1);
if(temp__5825__auto__){
var s__79181__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__79181__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__79181__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__79183 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__79182 = (0);
while(true){
if((i__79182 < size__5627__auto__)){
var item = cljs.core._nth(c__5626__auto__,i__79182);
cljs.core.chunk_append(b__79183,(function (){var id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)));
var prop = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prop","prop",-515168332).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], 0));
if(cljs.core.truth_(sort_by_inner_element_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(item)], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(item))){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.dnd.non_sortable_item,prop,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.dnd.sortable_item,prop,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));

}
}
})());

var G__79250 = (i__79182 + (1));
i__79182 = G__79250;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79183),frontend$components$dnd$items_$_iter__79180(cljs.core.chunk_rest(s__79181__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79183),null);
}
} else {
var item = cljs.core.first(s__79181__$2);
return cljs.core.cons((function (){var id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)));
var prop = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prop","prop",-515168332).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], 0));
if(cljs.core.truth_(sort_by_inner_element_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(item)], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(item))){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.dnd.non_sortable_item,prop,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.dnd.sortable_item,prop,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));

}
}
})(),frontend$components$dnd$items_$_iter__79180(cljs.core.rest(s__79181__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(col);
})();
var children_SINGLEQUOTE_ = (cljs.core.truth_(parent_node)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"parent-node"], null),children], null):children);
return frontend.components.dnd.dnd_context(dnd_opts,frontend.components.dnd.sortable_context(sortable_opts,children_SINGLEQUOTE_));
});
var comp__47252__auto__ = (function() { 
var frontend$components$dnd$items__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__79198 = cljs.core.first(args__47253__auto__);
var G__79199 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__79198,G__79199) : io.factorhouse.hsx.core.obj_get.call(null,G__79198,G__79199));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"items","items",-1622480831,null),args__47253__auto__),frontend$components$dnd$items,args__47253__auto__,null);
}
};
var frontend$components$dnd$items = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__79253__i = 0, G__79253__a = new Array(arguments.length -  0);
while (G__79253__i < G__79253__a.length) {G__79253__a[G__79253__i] = arguments[G__79253__i + 0]; ++G__79253__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__79253__a,0,null);
} 
return frontend$components$dnd$items__delegate.call(this,args__47253__auto__);};
frontend$components$dnd$items.cljs$lang$maxFixedArity = 0;
frontend$components$dnd$items.cljs$lang$applyTo = (function (arglist__79254){
var args__47253__auto__ = cljs.core.seq(arglist__79254);
return frontend$components$dnd$items__delegate(args__47253__auto__);
});
frontend$components$dnd$items.cljs$core$IFn$_invoke$arity$variadic = frontend$components$dnd$items__delegate;
return frontend$components$dnd$items;
})()
;
var memo_comp__47254__auto__ = (function (){var G__79200 = comp__47252__auto__;
var G__79201 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__79200,G__79201) : io.factorhouse.hsx.core.react_memo.call(null,G__79200,G__79201));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"items");

return comp__47252__auto__;
})();

//# sourceMappingURL=frontend.components.dnd.js.map
