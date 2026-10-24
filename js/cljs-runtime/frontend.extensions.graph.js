goog.provide('frontend.extensions.graph');
frontend.extensions.graph.canvas_style = (function frontend$extensions$graph$canvas_style(p__92292){
var map__92293 = p__92292;
var map__92293__$1 = cljs.core.__destructure_map(map__92293);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92293__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92293__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var G__92294 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null);
var G__92294__$1 = ((typeof width === 'number')?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__92294,new cljs.core.Keyword(null,"width","width",-384071477),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(width)+"px")):G__92294);
if(typeof height === 'number'){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__92294__$1,new cljs.core.Keyword(null,"height","height",1025178622),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(height)+"px"));
} else {
return G__92294__$1;
}
});
frontend.extensions.graph.render_container_deps = (function frontend$extensions$graph$render_container_deps(opts){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"dark?","dark?",622933231).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"view-mode","view-mode",2138348427).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"aria-label","aria-label",455891514).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"grid-layout?","grid-layout?",-595177125).cljs$core$IFn$_invoke$arity$1(opts)], null);
});
frontend.extensions.graph.schedule_render_container_BANG_ = (function frontend$extensions$graph$schedule_render_container_BANG_(container,opts){
var animation_frame_id_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var timeout_id_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var render_BANG_ = (function (){
return cljs.core.reset_BANG_(timeout_id_STAR_,setTimeout((function (){
cljs.core.reset_BANG_(timeout_id_STAR_,null);

return frontend.extensions.graph.pixi.render_container_BANG_(container,opts);
}),(0)));
});
if((typeof requestAnimationFrame !== 'undefined')){
cljs.core.reset_BANG_(animation_frame_id_STAR_,requestAnimationFrame((function (){
cljs.core.reset_BANG_(animation_frame_id_STAR_,null);

return render_BANG_();
})));
} else {
render_BANG_();
}

return (function (){
var temp__5825__auto___92316 = cljs.core.deref(animation_frame_id_STAR_);
if(cljs.core.truth_(temp__5825__auto___92316)){
var animation_frame_id_92317 = temp__5825__auto___92316;
cancelAnimationFrame(animation_frame_id_92317);
} else {
}

var temp__5825__auto__ = cljs.core.deref(timeout_id_STAR_);
if(cljs.core.truth_(temp__5825__auto__)){
var timeout_id = temp__5825__auto__;
return clearTimeout(timeout_id);
} else {
return null;
}
});
});
frontend.extensions.graph.graph_2d = (function (){var render_fn__47251__auto__ = (function frontend$extensions$graph$graph_2d(opts){
var container_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var render_pending_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(false) : logseq.shui.hooks.use_ref.call(null,false));
var on_node_activate_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var on_node_preview_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var on_selection_change_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var on_focus_change_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var on_rendered_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var incremental_update_ready_QMARK_ = (function (container){
var and__5140__auto__ = container;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(logseq.shui.hooks.deref(render_pending_ref));
} else {
return and__5140__auto__;
}
});
var activate_node_BANG_ = (function (node,event){
var temp__5825__auto__ = logseq.shui.hooks.deref(on_node_activate_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var handler = temp__5825__auto__;
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(node,event) : handler.call(null,node,event));
} else {
return null;
}
});
var preview_node_BANG_ = (function (node,event){
var temp__5825__auto__ = logseq.shui.hooks.deref(on_node_preview_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var handler = temp__5825__auto__;
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(node,event) : handler.call(null,node,event));
} else {
return null;
}
});
var change_selection_BANG_ = (function (nodes){
var temp__5825__auto__ = logseq.shui.hooks.deref(on_selection_change_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var handler = temp__5825__auto__;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(nodes) : handler.call(null,nodes));
} else {
return null;
}
});
var change_focus_BANG_ = (function (node){
var temp__5825__auto__ = logseq.shui.hooks.deref(on_focus_change_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var handler = temp__5825__auto__;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(node) : handler.call(null,node));
} else {
return null;
}
});
var rendered_BANG_ = (function (render_info){
logseq.shui.hooks.set_ref_BANG_(render_pending_ref,false);

var temp__5825__auto__ = logseq.shui.hooks.deref(on_rendered_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var handler = temp__5825__auto__;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(render_info) : handler.call(null,render_info));
} else {
return null;
}
});
logseq.shui.hooks.set_ref_BANG_(on_node_activate_ref,new cljs.core.Keyword(null,"on-node-activate","on-node-activate",-186984250).cljs$core$IFn$_invoke$arity$1(opts));

logseq.shui.hooks.set_ref_BANG_(on_node_preview_ref,new cljs.core.Keyword(null,"on-node-preview","on-node-preview",169104498).cljs$core$IFn$_invoke$arity$1(opts));

logseq.shui.hooks.set_ref_BANG_(on_selection_change_ref,new cljs.core.Keyword(null,"on-selection-change","on-selection-change",-1774232910).cljs$core$IFn$_invoke$arity$1(opts));

logseq.shui.hooks.set_ref_BANG_(on_focus_change_ref,new cljs.core.Keyword(null,"on-focus-change","on-focus-change",1545385979).cljs$core$IFn$_invoke$arity$1(opts));

logseq.shui.hooks.set_ref_BANG_(on_rendered_ref,new cljs.core.Keyword(null,"on-rendered","on-rendered",369446405).cljs$core$IFn$_invoke$arity$1(opts));

logseq.shui.hooks.use_effect_BANG_((function (){
var container = logseq.shui.hooks.deref(container_ref);
if(cljs.core.truth_(container)){
logseq.shui.hooks.set_ref_BANG_(render_pending_ref,true);

return frontend.extensions.graph.schedule_render_container_BANG_(container,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"on-node-activate","on-node-activate",-186984250),activate_node_BANG_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-node-preview","on-node-preview",169104498),preview_node_BANG_,new cljs.core.Keyword(null,"on-selection-change","on-selection-change",-1774232910),change_selection_BANG_,new cljs.core.Keyword(null,"on-focus-change","on-focus-change",1545385979),change_focus_BANG_,new cljs.core.Keyword(null,"on-rendered","on-rendered",369446405),rendered_BANG_], 0)));
} else {
return null;
}
}),frontend.extensions.graph.render_container_deps(opts));

logseq.shui.hooks.use_effect_BANG_((function (){
return (function (){
var temp__5825__auto__ = logseq.shui.hooks.deref(container_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var container = temp__5825__auto__;
return frontend.extensions.graph.pixi.destroy_instance_BANG_.cljs$core$IFn$_invoke$arity$1(container);
} else {
return null;
}
});
}),cljs.core.PersistentVector.EMPTY);

logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto__ = logseq.shui.hooks.deref(container_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var container = temp__5825__auto__;
if(cljs.core.truth_(incremental_update_ready_QMARK_(container))){
return frontend.extensions.graph.pixi.update_visibility_BANG_.cljs$core$IFn$_invoke$arity$3(container,new cljs.core.Keyword(null,"visible-node-ids","visible-node-ids",1276193033).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"background-visible-node-ids","background-visible-node-ids",2104478695).cljs$core$IFn$_invoke$arity$1(opts));
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visible-node-ids","visible-node-ids",1276193033).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"background-visible-node-ids","background-visible-node-ids",2104478695).cljs$core$IFn$_invoke$arity$1(opts)], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto__ = logseq.shui.hooks.deref(container_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var container = temp__5825__auto__;
if(cljs.core.truth_(incremental_update_ready_QMARK_(container))){
return frontend.extensions.graph.pixi.update_depth_BANG_(container,new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(opts));
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(opts)], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto__ = logseq.shui.hooks.deref(container_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var container = temp__5825__auto__;
if(cljs.core.truth_(incremental_update_ready_QMARK_(container))){
return frontend.extensions.graph.pixi.update_link_distance_BANG_(container,new cljs.core.Keyword(null,"link-distance","link-distance",1680735939).cljs$core$IFn$_invoke$arity$1(opts));
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link-distance","link-distance",1680735939).cljs$core$IFn$_invoke$arity$1(opts)], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto__ = logseq.shui.hooks.deref(container_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var container = temp__5825__auto__;
if(cljs.core.truth_(incremental_update_ready_QMARK_(container))){
return frontend.extensions.graph.pixi.update_edge_display_BANG_(container,new cljs.core.Keyword(null,"show-arrows?","show-arrows?",1693952912).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"show-edge-labels?","show-edge-labels?",1118080177).cljs$core$IFn$_invoke$arity$1(opts));
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-arrows?","show-arrows?",1693952912).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"show-edge-labels?","show-edge-labels?",1118080177).cljs$core$IFn$_invoke$arity$1(opts)], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto__ = logseq.shui.hooks.deref(container_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var container = temp__5825__auto__;
if(cljs.core.truth_(incremental_update_ready_QMARK_(container))){
return frontend.extensions.graph.pixi.reset_interaction_BANG_(container);
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-token","reset-token",1188936255).cljs$core$IFn$_invoke$arity$1(opts)], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph-canvas","div.graph-canvas",425921440),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),container_ref,new cljs.core.Keyword(null,"style","style",-496642736),frontend.extensions.graph.canvas_style(opts),new cljs.core.Keyword(null,"role","role",-736691072),"application",new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(0),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),new cljs.core.Keyword(null,"aria-label","aria-label",455891514).cljs$core$IFn$_invoke$arity$1(opts)], null)], null);
});
var comp__47252__auto__ = (function() { 
var frontend$extensions$graph$graph_2d__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__92309 = cljs.core.first(args__47253__auto__);
var G__92310 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__92309,G__92310) : io.factorhouse.hsx.core.obj_get.call(null,G__92309,G__92310));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"graph-2d","graph-2d",-82443885,null),args__47253__auto__),frontend$extensions$graph$graph_2d,args__47253__auto__,null);
}
};
var frontend$extensions$graph$graph_2d = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__92324__i = 0, G__92324__a = new Array(arguments.length -  0);
while (G__92324__i < G__92324__a.length) {G__92324__a[G__92324__i] = arguments[G__92324__i + 0]; ++G__92324__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__92324__a,0,null);
} 
return frontend$extensions$graph$graph_2d__delegate.call(this,args__47253__auto__);};
frontend$extensions$graph$graph_2d.cljs$lang$maxFixedArity = 0;
frontend$extensions$graph$graph_2d.cljs$lang$applyTo = (function (arglist__92325){
var args__47253__auto__ = cljs.core.seq(arglist__92325);
return frontend$extensions$graph$graph_2d__delegate(args__47253__auto__);
});
frontend$extensions$graph$graph_2d.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$graph$graph_2d__delegate;
return frontend$extensions$graph$graph_2d;
})()
;
var memo_comp__47254__auto__ = (function (){var G__92311 = comp__47252__auto__;
var G__92312 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__92311,G__92312) : io.factorhouse.hsx.core.react_memo.call(null,G__92311,G__92312));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"graph-2d");

return comp__47252__auto__;
})();

//# sourceMappingURL=frontend.extensions.graph.js.map
