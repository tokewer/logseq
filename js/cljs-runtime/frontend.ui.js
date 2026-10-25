goog.provide('frontend.ui');
goog.scope(function(){
  frontend.ui.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$$emoji_mart$data$sets$15$native_json=shadow.js.require("module$node_modules$$emoji_mart$data$sets$15$native_json", {});
var module$node_modules$emoji_mart$dist$main=shadow.js.require("module$node_modules$emoji_mart$dist$main", {});
var module$node_modules$react_intersection_observer$dist$index=shadow.js.require("module$node_modules$react_intersection_observer$dist$index", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$$sentry$react$build$cjs$index=shadow.js.require("module$node_modules$$sentry$react$build$cjs$index", {});
var module$node_modules$react_textarea_autosize$dist$react_textarea_autosize_browser_cjs=shadow.js.require("module$node_modules$react_textarea_autosize$dist$react_textarea_autosize_browser_cjs", {});
var module$node_modules$react_transition_group$cjs$index=shadow.js.require("module$node_modules$react_transition_group$cjs$index", {});
var module$node_modules$react_virtuoso$dist$index_cjs=shadow.js.require("module$node_modules$react_virtuoso$dist$index_cjs", {});
frontend.ui.normalize_react_props = (function frontend$ui$normalize_react_props(opts){
return cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1((function (){var G__37575 = (function (){var or__5142__auto__ = opts;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__37575__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37575,new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(opts)):G__37575);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37575__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));

})());
});
frontend.ui.react_child = (function frontend$ui$react_child(child){
if(cljs.core.vector_QMARK_(child)){
return io.factorhouse.hsx.core.create_element(child);
} else {
return child;

}
});
frontend.ui.react_children = (function frontend$ui$react_children(children){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.ui.react_child,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (child){
if((child == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(((cljs.core.sequential_QMARK_(child)) && ((!(cljs.core.vector_QMARK_(child)))))){
return child;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [child], null);

}
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children], 0))));
});
frontend.ui.react_element = (function frontend$ui$react_element(component,opts,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,component,frontend.ui.normalize_react_props(opts),frontend.ui.react_children(children));
});
frontend.ui.css_transition = (function frontend$ui$css_transition(var_args){
var args__5882__auto__ = [];
var len__5876__auto___37955 = arguments.length;
var i__5877__auto___37956 = (0);
while(true){
if((i__5877__auto___37956 < len__5876__auto___37955)){
args__5882__auto__.push((arguments[i__5877__auto___37956]));

var G__37957 = (i__5877__auto___37956 + (1));
i__5877__auto___37956 = G__37957;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$variadic = (function (opts,children){
var node_ref = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"node-ref","node-ref",-523200779).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return module$node_modules$react$index.createRef();
}
})();
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"nodeRef","nodeRef",-207818689),node_ref);
var children__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (child){
if(cljs.core.fn_QMARK_(child)){
return (function (state){
return (child.cljs$core$IFn$_invoke$arity$2 ? child.cljs$core$IFn$_invoke$arity$2(state,node_ref) : child.call(null,state,node_ref));
});
} else {
return child;
}
}),children);
return frontend.ui.react_element(module$node_modules$react_transition_group$cjs$index.CSSTransition,opts__$1,children__$1);
}));

(frontend.ui.css_transition.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.ui.css_transition.cljs$lang$applyTo = (function (seq37576){
var G__37577 = cljs.core.first(seq37576);
var seq37576__$1 = cljs.core.next(seq37576);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37577,seq37576__$1);
}));

if((typeof frontend !== 'undefined') && (typeof frontend.ui !== 'undefined') && (typeof frontend.ui.textarea_autosize !== 'undefined')){
} else {
frontend.ui.textarea_autosize = frontend.ui.goog$module$goog$object.get(module$node_modules$react_textarea_autosize$dist$react_textarea_autosize_browser_cjs,"default");
}
if((typeof frontend !== 'undefined') && (typeof frontend.ui !== 'undefined') && (typeof frontend.ui.field_sizing_supported_QMARK_ !== 'undefined')){
} else {
frontend.ui.field_sizing_supported_QMARK_ = cljs.core.boolean$((function (){var and__5140__auto__ = (typeof CSS !== 'undefined');
if(and__5140__auto__){
return CSS.supports("field-sizing","content");
} else {
return and__5140__auto__;
}
})());
}
/**
 * A textarea whose height follows its content. Where the browser supports the
 * CSS `field-sizing: content` (Chromium 123, Safari 26.2, Firefox 152) this is
 * a plain textarea and no JavaScript measures it on any keystroke; `:minRows`
 * becomes a `min-height` in line-height units. Elsewhere it is the
 * react-textarea-autosize component as before, with its `:cacheMeasurements`
 * prop passed through.
 */
frontend.ui.textarea = (function (){var render_fn__31744__auto__ = (function() { 
var frontend$ui$textarea__delegate = function (p__37578,children){
var map__37579 = p__37578;
var map__37579__$1 = cljs.core.__destructure_map(map__37579);
var opts = map__37579__$1;
var minRows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37579__$1,new cljs.core.Keyword(null,"minRows","minRows",-1979722096));
if(frontend.ui.field_sizing_supported_QMARK_){
var opts__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"minRows","minRows",-1979722096),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"maxRows","maxRows",-392329376),new cljs.core.Keyword(null,"cacheMeasurements","cacheMeasurements",-1280071997),new cljs.core.Keyword(null,"onHeightChange","onHeightChange",1467054765)], 0)),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc,new cljs.core.Keyword(null,"field-sizing","field-sizing",-1538015263),"content",new cljs.core.Keyword(null,"min-height","min-height",398480837),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = minRows;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (1);
}
})())+"lh")], 0));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),opts__$1], null),children);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),frontend.ui.textarea_autosize,opts], null),children);
}
};
var frontend$ui$textarea = function (p__37578,var_args){
var children = null;
if (arguments.length > 1) {
var G__37958__i = 0, G__37958__a = new Array(arguments.length -  1);
while (G__37958__i < G__37958__a.length) {G__37958__a[G__37958__i] = arguments[G__37958__i + 1]; ++G__37958__i;}
  children = new cljs.core.IndexedSeq(G__37958__a,0,null);
} 
return frontend$ui$textarea__delegate.call(this,p__37578,children);};
frontend$ui$textarea.cljs$lang$maxFixedArity = 1;
frontend$ui$textarea.cljs$lang$applyTo = (function (arglist__37959){
var p__37578 = cljs.core.first(arglist__37959);
var children = cljs.core.rest(arglist__37959);
return frontend$ui$textarea__delegate(p__37578,children);
});
frontend$ui$textarea.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$textarea__delegate;
return frontend$ui$textarea;
})()
;
var comp__31745__auto__ = (function() { 
var frontend$ui$textarea__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__37580 = cljs.core.first(args__31746__auto__);
var G__37581 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__37580,G__37581) : io.factorhouse.hsx.core.obj_get.call(null,G__37580,G__37581));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"textarea","textarea",990155703,null),args__31746__auto__),frontend$ui$textarea,args__31746__auto__,null);
}
};
var frontend$ui$textarea = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__37960__i = 0, G__37960__a = new Array(arguments.length -  0);
while (G__37960__i < G__37960__a.length) {G__37960__a[G__37960__i] = arguments[G__37960__i + 0]; ++G__37960__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__37960__a,0,null);
} 
return frontend$ui$textarea__delegate.call(this,args__31746__auto__);};
frontend$ui$textarea.cljs$lang$maxFixedArity = 0;
frontend$ui$textarea.cljs$lang$applyTo = (function (arglist__37961){
var args__31746__auto__ = cljs.core.seq(arglist__37961);
return frontend$ui$textarea__delegate(args__31746__auto__);
});
frontend$ui$textarea.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$textarea__delegate;
return frontend$ui$textarea;
})()
;
var memo_comp__31747__auto__ = (function (){var G__37582 = comp__31745__auto__;
var G__37583 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__37582,G__37583) : io.factorhouse.hsx.core.react_memo.call(null,G__37582,G__37583));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"textarea");

return comp__31745__auto__;
})();
frontend.ui.virtualized_list = (function (){var render_fn__31744__auto__ = (function() { 
var frontend$ui$virtualized_list__delegate = function (opts,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_virtuoso$dist$index_cjs.Virtuoso,opts], null),children);
};
var frontend$ui$virtualized_list = function (opts,var_args){
var children = null;
if (arguments.length > 1) {
var G__37962__i = 0, G__37962__a = new Array(arguments.length -  1);
while (G__37962__i < G__37962__a.length) {G__37962__a[G__37962__i] = arguments[G__37962__i + 1]; ++G__37962__i;}
  children = new cljs.core.IndexedSeq(G__37962__a,0,null);
} 
return frontend$ui$virtualized_list__delegate.call(this,opts,children);};
frontend$ui$virtualized_list.cljs$lang$maxFixedArity = 1;
frontend$ui$virtualized_list.cljs$lang$applyTo = (function (arglist__37963){
var opts = cljs.core.first(arglist__37963);
var children = cljs.core.rest(arglist__37963);
return frontend$ui$virtualized_list__delegate(opts,children);
});
frontend$ui$virtualized_list.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$virtualized_list__delegate;
return frontend$ui$virtualized_list;
})()
;
var comp__31745__auto__ = (function() { 
var frontend$ui$virtualized_list__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__37584 = cljs.core.first(args__31746__auto__);
var G__37585 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__37584,G__37585) : io.factorhouse.hsx.core.obj_get.call(null,G__37584,G__37585));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"virtualized-list","virtualized-list",285934708,null),args__31746__auto__),frontend$ui$virtualized_list,args__31746__auto__,null);
}
};
var frontend$ui$virtualized_list = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__37964__i = 0, G__37964__a = new Array(arguments.length -  0);
while (G__37964__i < G__37964__a.length) {G__37964__a[G__37964__i] = arguments[G__37964__i + 0]; ++G__37964__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__37964__a,0,null);
} 
return frontend$ui$virtualized_list__delegate.call(this,args__31746__auto__);};
frontend$ui$virtualized_list.cljs$lang$maxFixedArity = 0;
frontend$ui$virtualized_list.cljs$lang$applyTo = (function (arglist__37965){
var args__31746__auto__ = cljs.core.seq(arglist__37965);
return frontend$ui$virtualized_list__delegate(args__31746__auto__);
});
frontend$ui$virtualized_list.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$virtualized_list__delegate;
return frontend$ui$virtualized_list;
})()
;
var memo_comp__31747__auto__ = (function (){var G__37586 = comp__31745__auto__;
var G__37587 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__37586,G__37587) : io.factorhouse.hsx.core.react_memo.call(null,G__37586,G__37587));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"virtualized-list");

return comp__31745__auto__;
})();
frontend.ui.virtualized_grid = (function (){var render_fn__31744__auto__ = (function() { 
var frontend$ui$virtualized_grid__delegate = function (opts,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_virtuoso$dist$index_cjs.VirtuosoGrid,opts], null),children);
};
var frontend$ui$virtualized_grid = function (opts,var_args){
var children = null;
if (arguments.length > 1) {
var G__37966__i = 0, G__37966__a = new Array(arguments.length -  1);
while (G__37966__i < G__37966__a.length) {G__37966__a[G__37966__i] = arguments[G__37966__i + 1]; ++G__37966__i;}
  children = new cljs.core.IndexedSeq(G__37966__a,0,null);
} 
return frontend$ui$virtualized_grid__delegate.call(this,opts,children);};
frontend$ui$virtualized_grid.cljs$lang$maxFixedArity = 1;
frontend$ui$virtualized_grid.cljs$lang$applyTo = (function (arglist__37967){
var opts = cljs.core.first(arglist__37967);
var children = cljs.core.rest(arglist__37967);
return frontend$ui$virtualized_grid__delegate(opts,children);
});
frontend$ui$virtualized_grid.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$virtualized_grid__delegate;
return frontend$ui$virtualized_grid;
})()
;
var comp__31745__auto__ = (function() { 
var frontend$ui$virtualized_grid__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__37588 = cljs.core.first(args__31746__auto__);
var G__37589 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__37588,G__37589) : io.factorhouse.hsx.core.obj_get.call(null,G__37588,G__37589));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"virtualized-grid","virtualized-grid",488318507,null),args__31746__auto__),frontend$ui$virtualized_grid,args__31746__auto__,null);
}
};
var frontend$ui$virtualized_grid = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__37968__i = 0, G__37968__a = new Array(arguments.length -  0);
while (G__37968__i < G__37968__a.length) {G__37968__a[G__37968__i] = arguments[G__37968__i + 0]; ++G__37968__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__37968__a,0,null);
} 
return frontend$ui$virtualized_grid__delegate.call(this,args__31746__auto__);};
frontend$ui$virtualized_grid.cljs$lang$maxFixedArity = 0;
frontend$ui$virtualized_grid.cljs$lang$applyTo = (function (arglist__37969){
var args__31746__auto__ = cljs.core.seq(arglist__37969);
return frontend$ui$virtualized_grid__delegate(args__31746__auto__);
});
frontend$ui$virtualized_grid.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$virtualized_grid__delegate;
return frontend$ui$virtualized_grid;
})()
;
var memo_comp__31747__auto__ = (function (){var G__37590 = comp__31745__auto__;
var G__37591 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__37590,G__37591) : io.factorhouse.hsx.core.react_memo.call(null,G__37590,G__37591));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"virtualized-grid");

return comp__31745__auto__;
})();
frontend.ui.error_boundary = (function (){var render_fn__31744__auto__ = (function() { 
var frontend$ui$error_boundary__delegate = function (opts,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$sentry$react$build$cjs$index.ErrorBoundary,opts], null),children);
};
var frontend$ui$error_boundary = function (opts,var_args){
var children = null;
if (arguments.length > 1) {
var G__37970__i = 0, G__37970__a = new Array(arguments.length -  1);
while (G__37970__i < G__37970__a.length) {G__37970__a[G__37970__i] = arguments[G__37970__i + 1]; ++G__37970__i;}
  children = new cljs.core.IndexedSeq(G__37970__a,0,null);
} 
return frontend$ui$error_boundary__delegate.call(this,opts,children);};
frontend$ui$error_boundary.cljs$lang$maxFixedArity = 1;
frontend$ui$error_boundary.cljs$lang$applyTo = (function (arglist__37971){
var opts = cljs.core.first(arglist__37971);
var children = cljs.core.rest(arglist__37971);
return frontend$ui$error_boundary__delegate(opts,children);
});
frontend$ui$error_boundary.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$error_boundary__delegate;
return frontend$ui$error_boundary;
})()
;
var comp__31745__auto__ = (function() { 
var frontend$ui$error_boundary__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__37592 = cljs.core.first(args__31746__auto__);
var G__37593 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__37592,G__37593) : io.factorhouse.hsx.core.obj_get.call(null,G__37592,G__37593));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"error-boundary","error-boundary",-1088779433,null),args__31746__auto__),frontend$ui$error_boundary,args__31746__auto__,null);
}
};
var frontend$ui$error_boundary = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__37972__i = 0, G__37972__a = new Array(arguments.length -  0);
while (G__37972__i < G__37972__a.length) {G__37972__a[G__37972__i] = arguments[G__37972__i + 0]; ++G__37972__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__37972__a,0,null);
} 
return frontend$ui$error_boundary__delegate.call(this,args__31746__auto__);};
frontend$ui$error_boundary.cljs$lang$maxFixedArity = 0;
frontend$ui$error_boundary.cljs$lang$applyTo = (function (arglist__37973){
var args__31746__auto__ = cljs.core.seq(arglist__37973);
return frontend$ui$error_boundary__delegate(args__31746__auto__);
});
frontend$ui$error_boundary.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$error_boundary__delegate;
return frontend$ui$error_boundary;
})()
;
var memo_comp__31747__auto__ = (function (){var G__37594 = comp__31745__auto__;
var G__37595 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__37594,G__37595) : io.factorhouse.hsx.core.react_memo.call(null,G__37594,G__37595));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"error-boundary");

return comp__31745__auto__;
})();
frontend.ui.useInView = frontend.ui.goog$module$goog$object.get(module$node_modules$react_intersection_observer$dist$index,"useInView");
if((typeof frontend !== 'undefined') && (typeof frontend.ui !== 'undefined') && (typeof frontend.ui._emoji_init_data !== 'undefined')){
} else {
frontend.ui._emoji_init_data = (function (){var G__37597 = ({"data": module$node_modules$$emoji_mart$data$sets$15$native_json});
var fexpr__37596 = frontend.ui.goog$module$goog$object.get(module$node_modules$emoji_mart$dist$main,"init");
return (fexpr__37596.cljs$core$IFn$_invoke$arity$1 ? fexpr__37596.cljs$core$IFn$_invoke$arity$1(G__37597) : fexpr__37596.call(null,G__37597));
})();
}
if((typeof frontend !== 'undefined') && (typeof frontend.ui !== 'undefined') && (typeof frontend.ui.icon_size !== 'undefined')){
} else {
frontend.ui.icon_size = (cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())?(24):(20));
}
frontend.ui.popup_exists_QMARK_ = (function frontend$ui$popup_exists_QMARK_(){
return cljs.core.boolean$(cljs.core.seq(logseq.shui.popup.core.get_popups()));
});
frontend.ui.dropdown_exists_QMARK_ = (function frontend$ui$dropdown_exists_QMARK_(){
return (!((document.querySelector(".ui__popover-content, .ui__dropdown-menu-content, .ui__context-menu-content") == null)));
});
frontend.ui.last_shui_preview_popup_QMARK_ = (function frontend$ui$last_shui_preview_popup_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ls-preview-popup",(function (){var G__37598 = logseq.shui.popup.core.get_last_popup();
var G__37598__$1 = (((G__37598 == null))?null:new cljs.core.Keyword(null,"content-props","content-props",687449284).cljs$core$IFn$_invoke$arity$1(G__37598));
if((G__37598__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(G__37598__$1);
}
})());
});
frontend.ui.hide_popups_until_preview_popup_BANG_ = (function frontend$ui$hide_popups_until_preview_popup_BANG_(){
if(cljs.core.truth_(frontend.util.mobile_QMARK_())){
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
} else {
while(true){
if(((frontend.ui.popup_exists_QMARK_()) && ((!(frontend.ui.last_shui_preview_popup_QMARK_()))))){
(logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));

continue;
} else {
return null;
}
break;
}
}
});
frontend.ui.built_in_colors = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["yellow","red","pink","green","blue","purple","gray"], null);
frontend.ui.__GT_block_background_color = (function frontend$ui$__GT_block_background_color(color){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([color]),frontend.ui.built_in_colors))){
return (""+"var(--ls-highlight-color-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)+")");
} else {
return color;
}
});
frontend.ui.built_in_color_QMARK_ = (function frontend$ui$built_in_color_QMARK_(color){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([color]),frontend.ui.built_in_colors);
});
frontend.ui.menu_background_color = (function (){var render_fn__31744__auto__ = (function() {
var frontend$ui$menu_background_color = null;
var frontend$ui$menu_background_color__2 = (function (add_bgcolor_fn,rm_bgcolor_fn){
return frontend$ui$menu_background_color.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("frontend.ui","unknown","frontend.ui/unknown",-119553929),add_bgcolor_fn,rm_bgcolor_fn);
});
var frontend$ui$menu_background_color__3 = (function (current_color,add_bgcolor_fn,rm_bgcolor_fn){
var known_color_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_color,new cljs.core.Keyword("frontend.ui","unknown","frontend.ui/unknown",-119553929));
var active_ring = "0 0 0 2px var(--lx-gray-12, var(--ls-primary-text-color))";
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.justify-between.py-1.px-2.items-center","div.flex.flex-row.justify-between.py-1.px-2.items-center",-367442407),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.justify-between.flex-1.mx-2.mt-2","div.flex.flex-row.justify-between.flex-1.mx-2.mt-2",597574925),(function (){var iter__5628__auto__ = (function frontend$ui$menu_background_color_$_iter__37599(s__37600){
return (new cljs.core.LazySeq(null,(function (){
var s__37600__$1 = s__37600;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37600__$1);
if(temp__5825__auto__){
var s__37600__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37600__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__37600__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__37602 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__37601 = (0);
while(true){
if((i__37601 < size__5627__auto__)){
var color = cljs.core._nth(c__5626__auto__,i__37601);
cljs.core.chunk_append(b__37602,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"key-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)),new cljs.core.Keyword(null,"class","class",-2030961996),"inline-flex items-center justify-center w-[30px] h-[30px]",new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("color",color)], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__37601,color,c__5626__auto__,size__5627__auto__,b__37602,s__37600__$2,temp__5825__auto__,known_color_QMARK_,active_ring){
return (function (){
return (add_bgcolor_fn.cljs$core$IFn$_invoke$arity$1 ? add_bgcolor_fn.cljs$core$IFn$_invoke$arity$1(color) : add_bgcolor_fn.call(null,color));
});})(i__37601,color,c__5626__auto__,size__5627__auto__,b__37602,s__37600__$2,temp__5825__auto__,known_color_QMARK_,active_ring))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.heading-bg","div.heading-bg",-1373479286),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(""+"var(--color-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)+"-500)"),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),((((known_color_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_color,color))))?active_ring:null)], null)], null)], null)], null));

var G__37974 = (i__37601 + (1));
i__37601 = G__37974;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37602),frontend$ui$menu_background_color_$_iter__37599(cljs.core.chunk_rest(s__37600__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37602),null);
}
} else {
var color = cljs.core.first(s__37600__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"key-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)),new cljs.core.Keyword(null,"class","class",-2030961996),"inline-flex items-center justify-center w-[30px] h-[30px]",new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("color",color)], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (color,s__37600__$2,temp__5825__auto__,known_color_QMARK_,active_ring){
return (function (){
return (add_bgcolor_fn.cljs$core$IFn$_invoke$arity$1 ? add_bgcolor_fn.cljs$core$IFn$_invoke$arity$1(color) : add_bgcolor_fn.call(null,color));
});})(color,s__37600__$2,temp__5825__auto__,known_color_QMARK_,active_ring))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.heading-bg","div.heading-bg",-1373479286),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(""+"var(--color-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)+"-500)"),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),((((known_color_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_color,color))))?active_ring:null)], null)], null)], null)], null),frontend$ui$menu_background_color_$_iter__37599(cljs.core.rest(s__37600__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(frontend.ui.built_in_colors);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","remove-background","ui/remove-background",291793226)], 0)),new cljs.core.Keyword(null,"class","class",-2030961996),"inline-flex items-center justify-center w-[30px] h-[30px]",new cljs.core.Keyword(null,"on-click","on-click",1632826543),rm_bgcolor_fn], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.heading-bg.remove","div.heading-bg.remove",1425083334),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),((((known_color_QMARK_) && ((current_color == null))))?active_ring:null)], null)], null),"-"], null)], null)], null)], null);
});
frontend$ui$menu_background_color = function(current_color,add_bgcolor_fn,rm_bgcolor_fn){
switch(arguments.length){
case 2:
return frontend$ui$menu_background_color__2.call(this,current_color,add_bgcolor_fn);
case 3:
return frontend$ui$menu_background_color__3.call(this,current_color,add_bgcolor_fn,rm_bgcolor_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$ui$menu_background_color.cljs$core$IFn$_invoke$arity$2 = frontend$ui$menu_background_color__2;
frontend$ui$menu_background_color.cljs$core$IFn$_invoke$arity$3 = frontend$ui$menu_background_color__3;
return frontend$ui$menu_background_color;
})()
;
var comp__31745__auto__ = (function() { 
var frontend$ui$menu_background_color__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__37603 = cljs.core.first(args__31746__auto__);
var G__37604 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__37603,G__37604) : io.factorhouse.hsx.core.obj_get.call(null,G__37603,G__37604));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"menu-background-color","menu-background-color",696401022,null),args__31746__auto__),frontend$ui$menu_background_color,args__31746__auto__,null);
}
};
var frontend$ui$menu_background_color = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__37975__i = 0, G__37975__a = new Array(arguments.length -  0);
while (G__37975__i < G__37975__a.length) {G__37975__a[G__37975__i] = arguments[G__37975__i + 0]; ++G__37975__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__37975__a,0,null);
} 
return frontend$ui$menu_background_color__delegate.call(this,args__31746__auto__);};
frontend$ui$menu_background_color.cljs$lang$maxFixedArity = 0;
frontend$ui$menu_background_color.cljs$lang$applyTo = (function (arglist__37976){
var args__31746__auto__ = cljs.core.seq(arglist__37976);
return frontend$ui$menu_background_color__delegate(args__31746__auto__);
});
frontend$ui$menu_background_color.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$menu_background_color__delegate;
return frontend$ui$menu_background_color;
})()
;
var memo_comp__31747__auto__ = (function (){var G__37605 = comp__31745__auto__;
var G__37606 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__37605,G__37606) : io.factorhouse.hsx.core.react_memo.call(null,G__37605,G__37606));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"menu-background-color");

return comp__31745__auto__;
})();
frontend.ui.ls_textarea = (function (){var render_fn__31744__auto__ = (function frontend$ui$ls_textarea(p__37607){
var map__37608 = p__37607;
var map__37608__$1 = cljs.core.__destructure_map(map__37608);
var props = map__37608__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37608__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var _STAR_el = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var skip_composition_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","action","editor/action",449993861)], null));
var on_composition = (function (e){
if(cljs.core.truth_(skip_composition_QMARK_)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(e) : on_change.call(null,e));
} else {
var G__37609 = e.type;
switch (G__37609) {
case "compositionend":
frontend.state.set_editor_in_composition_BANG_(false);

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(e) : on_change.call(null,e));

break;
default:
return frontend.state.set_editor_in_composition_BANG_(true);

}
}
});
var props__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["data-testid","block editor",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
if(cljs.core.truth_(frontend.state.editor_in_composition_QMARK_())){
return null;
} else {
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(e) : on_change.call(null,e));
}
}),new cljs.core.Keyword(null,"on-composition-start","on-composition-start",-1518620253),on_composition,new cljs.core.Keyword(null,"on-composition-update","on-composition-update",-337521083),on_composition,new cljs.core.Keyword(null,"on-composition-end","on-composition-end",581757376),on_composition], 0));
logseq.shui.hooks.use_effect_BANG_((function (){
var el = logseq.shui.hooks.deref(_STAR_el);
var _STAR_mouse_point = cljs.core.volatile_BANG_(null);
var select_handler = (function (){
var start = frontend.util.get_selection_start(el);
var end = frontend.util.get_selection_end(el);
if(cljs.core.truth_((function (){var and__5140__auto__ = start;
if(cljs.core.truth_(and__5140__auto__)){
return end;
} else {
return and__5140__auto__;
}
})())){
var temp__5825__auto__ = (function (){var and__5140__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(start,end);
if(and__5140__auto__){
var caret_pos = frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(el);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"caret","caret",-1275001854),caret_pos,new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"end","end",-268185958),end,new cljs.core.Keyword(null,"text","text",-1790561697),el.value.substring(start,end),new cljs.core.Keyword(null,"point","point",1813198264),cljs.core.select_keys((function (){var or__5142__auto__ = cljs.core.deref(_STAR_mouse_point);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return caret_pos;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null))], null);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var e = temp__5825__auto__;
frontend.handler.plugin.hook_plugin_editor.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"input-selection-end","input-selection-end",214372173),cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(e));

return cljs.core.vreset_BANG_(_STAR_mouse_point,null);
} else {
return null;
}
} else {
return null;
}
});
var mouseup_handler = (function (e){
return cljs.core.vreset_BANG_(_STAR_mouse_point,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),e.x,new cljs.core.Keyword(null,"y","y",-1757859776),e.y], null));
});
if(cljs.core.truth_(el)){
el.addEventListener("select",select_handler);

el.addEventListener("mouseup",mouseup_handler);
} else {
}

return (function (){
if(cljs.core.truth_(el)){
el.removeEventListener("select",select_handler);

el.removeEventListener("mouseup",mouseup_handler);
} else {
}

var temp__5825__auto__ = new cljs.core.Keyword(null,"on-unmount","on-unmount",245689269).cljs$core$IFn$_invoke$arity$1(props__$1);
if(cljs.core.truth_(temp__5825__auto__)){
var on_unmount = temp__5825__auto__;
return (on_unmount.cljs$core$IFn$_invoke$arity$0 ? on_unmount.cljs$core$IFn$_invoke$arity$0() : on_unmount.call(null));
} else {
return null;
}
});
}),cljs.core.PersistentVector.EMPTY);

return frontend.ui.textarea(props__$1);
});
var comp__31745__auto__ = (function() { 
var frontend$ui$ls_textarea__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__37610 = cljs.core.first(args__31746__auto__);
var G__37611 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__37610,G__37611) : io.factorhouse.hsx.core.obj_get.call(null,G__37610,G__37611));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"ls-textarea","ls-textarea",-2065981221,null),args__31746__auto__),frontend$ui$ls_textarea,args__31746__auto__,null);
}
};
var frontend$ui$ls_textarea = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__37978__i = 0, G__37978__a = new Array(arguments.length -  0);
while (G__37978__i < G__37978__a.length) {G__37978__a[G__37978__i] = arguments[G__37978__i + 0]; ++G__37978__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__37978__a,0,null);
} 
return frontend$ui$ls_textarea__delegate.call(this,args__31746__auto__);};
frontend$ui$ls_textarea.cljs$lang$maxFixedArity = 0;
frontend$ui$ls_textarea.cljs$lang$applyTo = (function (arglist__37979){
var args__31746__auto__ = cljs.core.seq(arglist__37979);
return frontend$ui$ls_textarea__delegate(args__31746__auto__);
});
frontend$ui$ls_textarea.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$ls_textarea__delegate;
return frontend$ui$ls_textarea;
})()
;
var memo_comp__31747__auto__ = (function (){var G__37612 = comp__31745__auto__;
var G__37613 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__37612,G__37613) : io.factorhouse.hsx.core.react_memo.call(null,G__37612,G__37613));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"ls-textarea");

return comp__31745__auto__;
})();
frontend.ui.dropdown_content_wrapper = (function (){var render_fn__31744__auto__ = (function frontend$ui$dropdown_content_wrapper(dropdown_state,close_fn,content,class$,style_opts,node_ref){
var class$__$1 = (function (){var or__5142__auto__ = class$;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.util.hiccup__GT_class("origin-top-right.absolute.right-0.mt-2");
}
})();
var k = logseq.shui.hooks.use_memo((function (){
return (cljs.core.count(frontend.state.get_state(new cljs.core.Keyword("modal","dropdowns","modal/dropdowns",901161881))) + (1));
}),cljs.core.PersistentVector.EMPTY);
logseq.shui.hooks.use_effect_BANG_((function (){
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","dropdowns","modal/dropdowns",901161881),k], null),close_fn);

return (function (){
return frontend.state.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("modal","dropdowns","modal/dropdowns",901161881),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0));
});
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dropdown-wrapper.max-h-screen.overflow-y-auto","div.dropdown-wrapper.max-h-screen.overflow-y-auto",-1879509294),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),style_opts,new cljs.core.Keyword(null,"ref","ref",1289896967),node_ref,new cljs.core.Keyword(null,"class","class",-2030961996),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$__$1)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__37615 = dropdown_state;
switch (G__37615) {
case "entering":
return "transition ease-out duration-100 transform opacity-0 scale-95";

break;
case "entered":
return "transition ease-out duration-100 transform opacity-100 scale-100";

break;
case "exiting":
return "transition ease-in duration-75 transform opacity-100 scale-100";

break;
case "exited":
return "transition ease-in duration-75 transform opacity-0 scale-95";

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37615))));

}
})()))], null),content], null);
});
var comp__31745__auto__ = (function() { 
var frontend$ui$dropdown_content_wrapper__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__37616 = cljs.core.first(args__31746__auto__);
var G__37617 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__37616,G__37617) : io.factorhouse.hsx.core.obj_get.call(null,G__37616,G__37617));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"dropdown-content-wrapper","dropdown-content-wrapper",-1962547932,null),args__31746__auto__),frontend$ui$dropdown_content_wrapper,args__31746__auto__,null);
}
};
var frontend$ui$dropdown_content_wrapper = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__37981__i = 0, G__37981__a = new Array(arguments.length -  0);
while (G__37981__i < G__37981__a.length) {G__37981__a[G__37981__i] = arguments[G__37981__i + 0]; ++G__37981__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__37981__a,0,null);
} 
return frontend$ui$dropdown_content_wrapper__delegate.call(this,args__31746__auto__);};
frontend$ui$dropdown_content_wrapper.cljs$lang$maxFixedArity = 0;
frontend$ui$dropdown_content_wrapper.cljs$lang$applyTo = (function (arglist__37982){
var args__31746__auto__ = cljs.core.seq(arglist__37982);
return frontend$ui$dropdown_content_wrapper__delegate(args__31746__auto__);
});
frontend$ui$dropdown_content_wrapper.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$dropdown_content_wrapper__delegate;
return frontend$ui$dropdown_content_wrapper;
})()
;
var memo_comp__31747__auto__ = (function (){var G__37618 = comp__31745__auto__;
var G__37619 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__37618,G__37619) : io.factorhouse.hsx.core.react_memo.call(null,G__37618,G__37619));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"dropdown-content-wrapper");

return comp__31745__auto__;
})();
frontend.ui.dropdown = (function (){var render_fn__31744__auto__ = (function() { 
var frontend$ui$dropdown__delegate = function (content_fn,modal_content_fn,p__37620){
var vec__37621 = p__37620;
var map__37624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37621,(0),null);
var map__37624__$1 = cljs.core.__destructure_map(map__37624);
var modal_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37624__$1,new cljs.core.Keyword(null,"modal-class","modal-class",226435127));
var z_index = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37624__$1,new cljs.core.Keyword(null,"z-index","z-index",1892827090),(999));
var trigger_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37624__$1,new cljs.core.Keyword(null,"trigger-class","trigger-class",1251717016));
var initial_open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37624__$1,new cljs.core.Keyword(null,"initial-open?","initial-open?",1869534108));
var _STAR_toggle_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37624__$1,new cljs.core.Keyword(null,"*toggle-fn","*toggle-fn",458369769));
var on_toggle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37624__$1,new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774));
var map__37625 = logseq.shui.hooks.use_modal_state(initial_open_QMARK_);
var map__37625__$1 = cljs.core.__destructure_map(map__37625);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37625__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var open_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37625__$1,new cljs.core.Keyword(null,"open-atom","open-atom",545892639));
var close_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37625__$1,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512));
var open_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37625__$1,new cljs.core.Keyword(null,"open-fn","open-fn",1265855718));
var toggle_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37625__$1,new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425));
var _STAR_root = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var dropdown_state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"open?","open?",1238443125),open_atom,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512),close_fn,new cljs.core.Keyword(null,"open-fn","open-fn",1265855718),open_fn,new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425),toggle_fn], null);
var _ = (cljs.core.truth_((function (){var and__5140__auto__ = frontend.util.atom_QMARK_(_STAR_toggle_fn);
if(and__5140__auto__){
var and__5140__auto____$1 = (cljs.core.deref(_STAR_toggle_fn) == null);
if(and__5140__auto____$1){
return toggle_fn;
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?cljs.core.reset_BANG_(_STAR_toggle_fn,toggle_fn):null);
var modal_content = (modal_content_fn.cljs$core$IFn$_invoke$arity$1 ? modal_content_fn.cljs$core$IFn$_invoke$arity$1(dropdown_state) : modal_content_fn.call(null,dropdown_state));
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.fn_QMARK_(on_toggle)){
return (on_toggle.cljs$core$IFn$_invoke$arity$1 ? on_toggle.cljs$core$IFn$_invoke$arity$1(open_QMARK_) : on_toggle.call(null,open_QMARK_));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [open_QMARK_], null));

logseq.shui.hooks.use_hide_on_esc_or_outside(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active?","active?",459499776),open_QMARK_,new cljs.core.Keyword(null,"root-ref","root-ref",1229703250),_STAR_root,new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),close_fn], null));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.ui__dropdown-trigger","div.relative.ui__dropdown-trigger",-1432690238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),trigger_class,new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_root], null),(content_fn.cljs$core$IFn$_invoke$arity$1 ? content_fn.cljs$core$IFn$_invoke$arity$1(dropdown_state) : content_fn.call(null,dropdown_state)),frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),open_QMARK_,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (dropdown_state__$1,node_ref){
if(cljs.core.truth_(open_QMARK_)){
return frontend.ui.dropdown_content_wrapper(dropdown_state__$1,close_fn,modal_content,modal_class,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),z_index], null),node_ref);
} else {
return null;
}
})], 0))], null);
};
var frontend$ui$dropdown = function (content_fn,modal_content_fn,var_args){
var p__37620 = null;
if (arguments.length > 2) {
var G__37983__i = 0, G__37983__a = new Array(arguments.length -  2);
while (G__37983__i < G__37983__a.length) {G__37983__a[G__37983__i] = arguments[G__37983__i + 2]; ++G__37983__i;}
  p__37620 = new cljs.core.IndexedSeq(G__37983__a,0,null);
} 
return frontend$ui$dropdown__delegate.call(this,content_fn,modal_content_fn,p__37620);};
frontend$ui$dropdown.cljs$lang$maxFixedArity = 2;
frontend$ui$dropdown.cljs$lang$applyTo = (function (arglist__37984){
var content_fn = cljs.core.first(arglist__37984);
arglist__37984 = cljs.core.next(arglist__37984);
var modal_content_fn = cljs.core.first(arglist__37984);
var p__37620 = cljs.core.rest(arglist__37984);
return frontend$ui$dropdown__delegate(content_fn,modal_content_fn,p__37620);
});
frontend$ui$dropdown.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$dropdown__delegate;
return frontend$ui$dropdown;
})()
;
var comp__31745__auto__ = (function() { 
var frontend$ui$dropdown__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__37626 = cljs.core.first(args__31746__auto__);
var G__37627 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__37626,G__37627) : io.factorhouse.hsx.core.obj_get.call(null,G__37626,G__37627));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),args__31746__auto__),frontend$ui$dropdown,args__31746__auto__,null);
}
};
var frontend$ui$dropdown = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__37985__i = 0, G__37985__a = new Array(arguments.length -  0);
while (G__37985__i < G__37985__a.length) {G__37985__a[G__37985__i] = arguments[G__37985__i + 0]; ++G__37985__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__37985__a,0,null);
} 
return frontend$ui$dropdown__delegate.call(this,args__31746__auto__);};
frontend$ui$dropdown.cljs$lang$maxFixedArity = 0;
frontend$ui$dropdown.cljs$lang$applyTo = (function (arglist__37986){
var args__31746__auto__ = cljs.core.seq(arglist__37986);
return frontend$ui$dropdown__delegate(args__31746__auto__);
});
frontend$ui$dropdown.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$dropdown__delegate;
return frontend$ui$dropdown;
})()
;
var memo_comp__31747__auto__ = (function (){var G__37628 = comp__31745__auto__;
var G__37629 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__37628,G__37629) : io.factorhouse.hsx.core.react_memo.call(null,G__37628,G__37629));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"dropdown");

return comp__31745__auto__;
})();
frontend.ui.render_keyboard_shortcut = (function frontend$ui$render_keyboard_shortcut(var_args){
var args__5882__auto__ = [];
var len__5876__auto___37987 = arguments.length;
var i__5877__auto___37988 = (0);
while(true){
if((i__5877__auto___37988 < len__5876__auto___37987)){
args__5882__auto__.push((arguments[i__5877__auto___37988]));

var G__37989 = (i__5877__auto___37988 + (1));
i__5877__auto___37988 = G__37989;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.ui.render_keyboard_shortcut.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.ui.render_keyboard_shortcut.cljs$core$IFn$_invoke$arity$variadic = (function (sequence,p__37632){
var map__37633 = p__37632;
var map__37633__$1 = cljs.core.__destructure_map(map__37633);
var opts = map__37633__$1;
var shortcut_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37633__$1,new cljs.core.Keyword(null,"shortcut-id","shortcut-id",2068609942));
var sequence__$1 = ((typeof sequence === 'string')?clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(clojure.string.trim(sequence)),/ /):sequence);
var raw_binding = (cljs.core.truth_(shortcut_id)?frontend.modules.shortcut.data_helper.shortcut_binding(shortcut_id):((((cljs.core.coll_QMARK_(sequence__$1)) && (cljs.core.every_QMARK_(cljs.core.string_QMARK_,sequence__$1))))?sequence__$1:((typeof sequence__$1 === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sequence__$1], null):sequence__$1)));
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aria-hidden?","aria-hidden?",592108098),true,new cljs.core.Keyword(null,"raw-binding","raw-binding",-267349702),raw_binding], null),opts], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.keyboard-shortcut","span.keyboard-shortcut",-1239684213),logseq.shui.ui.shortcut(sequence__$1,opts__$1)], null);
}));

(frontend.ui.render_keyboard_shortcut.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.ui.render_keyboard_shortcut.cljs$lang$applyTo = (function (seq37630){
var G__37631 = cljs.core.first(seq37630);
var seq37630__$1 = cljs.core.next(seq37630);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37631,seq37630__$1);
}));

frontend.ui.append_no_padding_class = " no-padding";
frontend.ui.menu_link = (function (){var render_fn__31744__auto__ = (function frontend$ui$menu_link(p__37634,child){
var map__37635 = p__37634;
var map__37635__$1 = cljs.core.__destructure_map(map__37635);
var options = map__37635__$1;
var only_child_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37635__$1,new cljs.core.Keyword(null,"only-child?","only-child?",1700034724));
var no_padding_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37635__$1,new cljs.core.Keyword(null,"no-padding?","no-padding?",1618158522));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37635__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var shortcut = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37635__$1,new cljs.core.Keyword(null,"shortcut","shortcut",-431647697));
if(cljs.core.truth_(only_child_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu-link","div.menu-link",46089150),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"only-child?","only-child?",1700034724)),child], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.justify-between.menu-link","a.flex.justify-between.menu-link",-1325537968),(function (){var G__37636 = options;
var G__37636__$1 = ((no_padding_QMARK_ === true)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37636,new cljs.core.Keyword(null,"class","class",-2030961996),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.ui.append_no_padding_class))):G__37636);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37636__$1,new cljs.core.Keyword(null,"no-padding?","no-padding?",1618158522));

})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex-1","span.flex-1",1756749525),child], null),(cljs.core.truth_(shortcut)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ml-1","span.ml-1",-436032201),frontend.ui.render_keyboard_shortcut(shortcut)], null):null)], null);
}
});
var comp__31745__auto__ = (function() { 
var frontend$ui$menu_link__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__37637 = cljs.core.first(args__31746__auto__);
var G__37638 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__37637,G__37638) : io.factorhouse.hsx.core.obj_get.call(null,G__37637,G__37638));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"menu-link","menu-link",-1284949269,null),args__31746__auto__),frontend$ui$menu_link,args__31746__auto__,null);
}
};
var frontend$ui$menu_link = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__37990__i = 0, G__37990__a = new Array(arguments.length -  0);
while (G__37990__i < G__37990__a.length) {G__37990__a[G__37990__i] = arguments[G__37990__i + 0]; ++G__37990__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__37990__a,0,null);
} 
return frontend$ui$menu_link__delegate.call(this,args__31746__auto__);};
frontend$ui$menu_link.cljs$lang$maxFixedArity = 0;
frontend$ui$menu_link.cljs$lang$applyTo = (function (arglist__37991){
var args__31746__auto__ = cljs.core.seq(arglist__37991);
return frontend$ui$menu_link__delegate(args__31746__auto__);
});
frontend$ui$menu_link.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$menu_link__delegate;
return frontend$ui$menu_link;
})()
;
var memo_comp__31747__auto__ = (function (){var G__37639 = comp__31745__auto__;
var G__37640 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__37639,G__37640) : io.factorhouse.hsx.core.react_memo.call(null,G__37639,G__37640));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"menu-link");

return comp__31745__auto__;
})();
frontend.ui.checkbox = (function frontend$ui$checkbox(option){
var on_change_SINGLEQUOTE_ = new cljs.core.Keyword(null,"on-change","on-change",-732046149).cljs$core$IFn$_invoke$arity$1(option);
var on_click_SINGLEQUOTE_ = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(option);
var option__$1 = (function (){var G__37641 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(option,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543)], 0));
var G__37641__$1 = (cljs.core.truth_((function (){var and__5140__auto__ = on_click_SINGLEQUOTE_;
if(cljs.core.truth_(and__5140__auto__)){
return (on_change_SINGLEQUOTE_ == null);
} else {
return and__5140__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37641,new cljs.core.Keyword(null,"data-inputless","data-inputless",1348859417),true):G__37641);
if(cljs.core.truth_((function (){var or__5142__auto__ = on_change_SINGLEQUOTE_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return on_click_SINGLEQUOTE_;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37641__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var G__37642_37992 = on_click_SINGLEQUOTE_;
if((G__37642_37992 == null)){
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__37642_37992,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null));
}

var checked_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.target.dataset.state,"checked");
(e.target.checked = (!(checked_QMARK_)));

var G__37643 = on_change_SINGLEQUOTE_;
if((G__37643 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__37643,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null));
}
}));
} else {
return G__37641__$1;
}
})();
var G__37644 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([option__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(option__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.config.publishing_QMARK_;
}
})()], null)], 0));
return (logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1(G__37644) : logseq.shui.ui.checkbox.call(null,G__37644));
});
frontend.ui.main_node = (function frontend$ui$main_node(){
return frontend.util.app_scroll_container_node.cljs$core$IFn$_invoke$arity$0();
});
frontend.ui.focus_element = (function frontend$ui$focus_element(element){
var temp__5825__auto__ = goog.dom.getElement(element);
if(cljs.core.truth_(temp__5825__auto__)){
var element__$1 = temp__5825__auto__;
return element__$1.focus();
} else {
return null;
}
});
frontend.ui.get_dynamic_style_node = (function frontend$ui$get_dynamic_style_node(){
return document.getElementById("dynamic-style-scope");
});
frontend.ui.inject_document_devices_envs_BANG_ = (function frontend$ui$inject_document_devices_envs_BANG_(){
var cl = document.documentElement.classList;
if(frontend.config.publishing_QMARK_){
cl.add("is-publish-mode");
} else {
}

if(cljs.core.truth_(frontend.util.mac_QMARK_)){
cl.add("is-mac");
} else {
}

if(cljs.core.truth_(frontend.util.win32_QMARK_)){
cl.add("is-win32");
} else {
}

if(cljs.core.truth_(frontend.util.linux_QMARK_)){
cl.add("is-linux");
} else {
}

if(cljs.core.truth_(frontend.util.electron_QMARK_())){
cl.add("is-electron");
} else {
}

if(cljs.core.truth_(frontend.util.ios_QMARK_())){
cl.add("is-ios");
} else {
}

if(cljs.core.truth_(frontend.util.mobile_QMARK_())){
cl.add("is-mobile");
} else {
}

if(cljs.core.truth_(frontend.util.safari_QMARK_())){
cl.add("is-safari");
} else {
}

if(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())){
cl.add("is-native-ios");
} else {
}

if(cljs.core.truth_(frontend.mobile.util.native_android_QMARK_())){
cl.add("is-native-android");
} else {
}

if(cljs.core.truth_(frontend.mobile.util.native_iphone_QMARK_())){
cl.add("is-native-iphone");
} else {
}

if(cljs.core.truth_(frontend.mobile.util.native_iphone_without_notch_QMARK_())){
cl.add("is-native-iphone-without-notch");
} else {
}

if(cljs.core.truth_(frontend.mobile.util.native_ipad_QMARK_())){
cl.add("is-native-ipad");
} else {
}

if(cljs.core.truth_(frontend.util.electron_QMARK_())){
var seq__37649_37993 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["persist-zoom-level",((function (cl){
return (function (p1__37645_SHARP_){
return frontend.storage.set(new cljs.core.Keyword(null,"zoom-level","zoom-level",-91022225),p1__37645_SHARP_);
});})(cl))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["restore-zoom-level",((function (cl){
return (function (){
var temp__5825__auto__ = frontend.storage.get(new cljs.core.Keyword(null,"zoom-level","zoom-level",-91022225));
if(cljs.core.truth_(temp__5825__auto__)){
var zoom_level = temp__5825__auto__;
return window.apis.setZoomLevel(zoom_level);
} else {
return null;
}
});})(cl))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-screen",((function (cl){
return (function (p1__37646_SHARP_){
cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(cl,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__37646_SHARP_,"enter"))?"add":"remove"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["is-fullscreen"], 0));

return frontend.state.set_state_BANG_(new cljs.core.Keyword("electron","window-fullscreen?","electron/window-fullscreen?",-499490630),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__37646_SHARP_,"enter"));
});})(cl))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["maximize",((function (cl){
return (function (p1__37647_SHARP_){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("electron","window-maximized?","electron/window-maximized?",-1905378935),p1__37647_SHARP_);
});})(cl))
], null)], null));
var chunk__37650_37994 = null;
var count__37651_37995 = (0);
var i__37652_37996 = (0);
while(true){
if((i__37652_37996 < count__37651_37995)){
var vec__37659_37997 = chunk__37650_37994.cljs$core$IIndexed$_nth$arity$2(null,i__37652_37996);
var event_37998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37659_37997,(0),null);
var function_37999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37659_37997,(1),null);
window.apis.on(event_37998,function_37999);


var G__38000 = seq__37649_37993;
var G__38001 = chunk__37650_37994;
var G__38002 = count__37651_37995;
var G__38003 = (i__37652_37996 + (1));
seq__37649_37993 = G__38000;
chunk__37650_37994 = G__38001;
count__37651_37995 = G__38002;
i__37652_37996 = G__38003;
continue;
} else {
var temp__5825__auto___38004 = cljs.core.seq(seq__37649_37993);
if(temp__5825__auto___38004){
var seq__37649_38005__$1 = temp__5825__auto___38004;
if(cljs.core.chunked_seq_QMARK_(seq__37649_38005__$1)){
var c__5673__auto___38006 = cljs.core.chunk_first(seq__37649_38005__$1);
var G__38007 = cljs.core.chunk_rest(seq__37649_38005__$1);
var G__38008 = c__5673__auto___38006;
var G__38009 = cljs.core.count(c__5673__auto___38006);
var G__38010 = (0);
seq__37649_37993 = G__38007;
chunk__37650_37994 = G__38008;
count__37651_37995 = G__38009;
i__37652_37996 = G__38010;
continue;
} else {
var vec__37662_38011 = cljs.core.first(seq__37649_38005__$1);
var event_38012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37662_38011,(0),null);
var function_38013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37662_38011,(1),null);
window.apis.on(event_38012,function_38013);


var G__38014 = cljs.core.next(seq__37649_38005__$1);
var G__38015 = null;
var G__38016 = (0);
var G__38017 = (0);
seq__37649_37993 = G__38014;
chunk__37650_37994 = G__38015;
count__37651_37995 = G__38016;
i__37652_37996 = G__38017;
continue;
}
} else {
}
}
break;
}

return promesa.core.then.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"getAppBaseInfo","getAppBaseInfo",-1406218507)], 0)),(function (p1__37648_SHARP_){
var map__37665 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__37648_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var map__37665__$1 = cljs.core.__destructure_map(map__37665);
var isFullScreen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37665__$1,new cljs.core.Keyword(null,"isFullScreen","isFullScreen",-1879720011));
var isMaximized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37665__$1,new cljs.core.Keyword(null,"isMaximized","isMaximized",-2003319926));
if(cljs.core.truth_(isFullScreen)){
cl.add("is-fullscreen");

frontend.state.set_state_BANG_(new cljs.core.Keyword("electron","window-fullscreen?","electron/window-fullscreen?",-499490630),true);
} else {
}

if(cljs.core.truth_(isMaximized)){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("electron","window-maximized?","electron/window-maximized?",-1905378935),true);
} else {
return null;
}
}));
} else {
return null;
}
});
frontend.ui.inject_dynamic_style_node_BANG_ = (function frontend$ui$inject_dynamic_style_node_BANG_(){
var style = frontend.ui.get_dynamic_style_node();
if((style == null)){
var node = document.createElement("style");
(node.id = "dynamic-style-scope");

return document.head.appendChild(node);
} else {
return style;
}
});
frontend.ui.apply_custom_theme_effect_BANG_ = (function frontend$ui$apply_custom_theme_effect_BANG_(theme){
if(cljs.core.truth_(frontend.config.lsp_enabled_QMARK_)){
var temp__5825__auto__ = frontend.state.get_state(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","custom-theme","ui/custom-theme",1944833347),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(theme)], null));
if(cljs.core.truth_(temp__5825__auto__)){
var custom_theme = temp__5825__auto__;
if((!((new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(custom_theme) == null)))){
return LSPluginCore.selectTheme(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(custom_theme),cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"emit","emit",-1327179018),false], null)));
} else {
return frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","selected-theme","plugin/selected-theme",-172679220),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(custom_theme));
}
} else {
return null;
}
} else {
return null;
}
});
frontend.ui.setup_system_theme_effect_BANG_ = (function frontend$ui$setup_system_theme_effect_BANG_(){
var schemaMedia = window.matchMedia("(prefers-color-scheme: dark)");
try{schemaMedia.addEventListener("change",frontend.state.sync_system_theme_BANG_);
}catch (e37666){var _error_38018 = e37666;
schemaMedia.addListener(frontend.state.sync_system_theme_BANG_);
}
frontend.state.sync_system_theme_BANG_();

return (function (){
try{return schemaMedia.removeEventListener("change",frontend.state.sync_system_theme_BANG_);
}catch (e37667){var _error = e37667;
return schemaMedia.removeListener(frontend.state.sync_system_theme_BANG_);
}});
});
frontend.ui.set_global_active_keystroke = (function frontend$ui$set_global_active_keystroke(val){
return document.body.setAttribute("data-active-keystroke",val);
});
frontend.ui.setup_active_keystroke_BANG_ = (function frontend$ui$setup_active_keystroke_BANG_(){
var active_keystroke = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var heads = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shift","shift",997140064),null,new cljs.core.Keyword(null,"meta","meta",1499536964),null,new cljs.core.Keyword(null,"alt","alt",-3214426),null,new cljs.core.Keyword(null,"control","control",1892578036),null], null), null);
var handle_global_keystroke = (function (down_QMARK_,e){
var handler_38019 = (cljs.core.truth_(down_QMARK_)?cljs.core.conj:cljs.core.disj);
var keystroke_38020 = e.key;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(active_keystroke,handler_38019,keystroke_38020);

if(cljs.core.contains_QMARK_(heads,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.util.safe_lower_case(e.key)))){
return frontend.ui.set_global_active_keystroke(clojure.string.join.cljs$core$IFn$_invoke$arity$2("+",cljs.core.deref(active_keystroke)));
} else {
return null;
}
});
var keydown_handler = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(handle_global_keystroke,true);
var keyup_handler = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(handle_global_keystroke,false);
var clear_all = (function (){
frontend.ui.set_global_active_keystroke("");

return cljs.core.reset_BANG_(active_keystroke,cljs.core.PersistentHashSet.EMPTY);
});
window.addEventListener("keydown",keydown_handler);

window.addEventListener("keyup",keyup_handler);

window.addEventListener("blur",clear_all);

window.addEventListener("visibilitychange",clear_all);

return (function (){
window.removeEventListener("keydown",keydown_handler);

window.removeEventListener("keyup",keyup_handler);

window.removeEventListener("blur",clear_all);

return window.removeEventListener("visibilitychange",clear_all);
});
});
frontend.ui.setup_viewport_listeners_BANG_ = (function frontend$ui$setup_viewport_listeners_BANG_(){
var temp__5825__auto__ = frontend.ui.goog$module$goog$object.get(window,"visualViewport");
if(cljs.core.truth_(temp__5825__auto__)){
var vw = temp__5825__auto__;
var handler = (function (){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","viewport","ui/viewport",443348007),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),vw.width,new cljs.core.Keyword(null,"height","height",1025178622),vw.height,new cljs.core.Keyword(null,"scale","scale",-230427353),vw.scale], null));
});
window.visualViewport.addEventListener("resize",handler);

handler();

return (function (){
return window.visualViewport.removeEventListener("resize",handler);
});
} else {
return null;
}
});
frontend.ui.auto_complete = (function (){var render_fn__31744__auto__ = (function frontend$ui$auto_complete(matched,p__37668){
var map__37669 = p__37668;
var map__37669__$1 = cljs.core.__destructure_map(map__37669);
var opts = map__37669__$1;
var on_chosen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37669__$1,new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900));
var on_shift_chosen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37669__$1,new cljs.core.Keyword(null,"on-shift-chosen","on-shift-chosen",-310778328));
var get_group_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37669__$1,new cljs.core.Keyword(null,"get-group-name","get-group-name",-160379696));
var empty_placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37669__$1,new cljs.core.Keyword(null,"empty-placeholder","empty-placeholder",-68202085));
var item_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37669__$1,new cljs.core.Keyword(null,"item-render","item-render",253627868));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37669__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37669__$1,new cljs.core.Keyword(null,"header","header",119441134));
var grouped_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37669__$1,new cljs.core.Keyword(null,"grouped?","grouped?",531080948));
var _STAR_current_idx = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}),cljs.core.PersistentVector.EMPTY);
var vec__37670 = logseq.shui.hooks.use_atom(_STAR_current_idx);
var current_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37670,(0),null);
var shortcut_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"matched","matched",-975207164),matched,new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword("frontend.ui","current-idx","frontend.ui/current-idx",441919612),_STAR_current_idx], null);
var _ = frontend.modules.shortcut.core.use_shortcut_handler_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shortcut.handler","auto-complete","shortcut.handler/auto-complete",1783376094),shortcut_state);
var _STAR_groups = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var render_f = (function (matched__$1){
var iter__5628__auto__ = (function frontend$ui$auto_complete_$_iter__37673(s__37674){
return (new cljs.core.LazySeq(null,(function (){
var s__37674__$1 = s__37674;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37674__$1);
if(temp__5825__auto__){
var s__37674__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37674__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__37674__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__37676 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__37675 = (0);
while(true){
if((i__37675 < size__5627__auto__)){
var vec__37677 = cljs.core._nth(c__5626__auto__,i__37675);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37677,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37677,(1),null);
cljs.core.chunk_append(b__37676,(function (){var react_key = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx));
var choose_BANG_ = ((function (i__37675,react_key,vec__37677,idx,item,c__5626__auto__,size__5627__auto__,b__37676,s__37674__$2,temp__5825__auto__,_STAR_current_idx,vec__37670,current_idx,shortcut_state,_,_STAR_groups,map__37669,map__37669__$1,opts,on_chosen,on_shift_chosen,get_group_name,empty_placeholder,item_render,class$,header,grouped_QMARK_){
return (function (e){
frontend.util.stop(e);

if(cljs.core.truth_(new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(item))){
return null;
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = frontend.ui.goog$module$goog$object.get(e,"shiftKey");
if(cljs.core.truth_(and__5140__auto__)){
return on_shift_chosen;
} else {
return and__5140__auto__;
}
})())){
return (on_shift_chosen.cljs$core$IFn$_invoke$arity$1 ? on_shift_chosen.cljs$core$IFn$_invoke$arity$1(item) : on_shift_chosen.call(null,item));
} else {
return (on_chosen.cljs$core$IFn$_invoke$arity$2 ? on_chosen.cljs$core$IFn$_invoke$arity$2(item,e) : on_chosen.call(null,item,e));
}
}
});})(i__37675,react_key,vec__37677,idx,item,c__5626__auto__,size__5627__auto__,b__37676,s__37674__$2,temp__5825__auto__,_STAR_current_idx,vec__37670,current_idx,shortcut_state,_,_STAR_groups,map__37669,map__37669__$1,opts,on_chosen,on_shift_chosen,get_group_name,empty_placeholder,item_render,class$,header,grouped_QMARK_))
;
var item_cp = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu-link-wrap","div.menu-link-wrap",2002705411),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),react_key,new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),((function (i__37675,react_key,choose_BANG_,vec__37677,idx,item,c__5626__auto__,size__5627__auto__,b__37676,s__37674__$2,temp__5825__auto__,_STAR_current_idx,vec__37670,current_idx,shortcut_state,_,_STAR_groups,map__37669,map__37669__$1,opts,on_chosen,on_shift_chosen,get_group_name,empty_placeholder,item_render,class$,header,grouped_QMARK_){
return (function (){
return cljs.core.reset_BANG_(_STAR_current_idx,idx);
});})(i__37675,react_key,choose_BANG_,vec__37677,idx,item,c__5626__auto__,size__5627__auto__,b__37676,s__37674__$2,temp__5825__auto__,_STAR_current_idx,vec__37670,current_idx,shortcut_state,_,_STAR_groups,map__37669,map__37669__$1,opts,on_chosen,on_shift_chosen,get_group_name,empty_placeholder,item_render,class$,header,grouped_QMARK_))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),choose_BANG_], null),(function (){var chosen_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_idx,idx);
return frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(""+"ac-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(react_key)),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),"0",new cljs.core.Keyword(null,"class","class",-2030961996),((chosen_QMARK_)?"chosen":null),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),frontend.util.stop,new cljs.core.Keyword(null,"on-click","on-click",1632826543),choose_BANG_], null),(cljs.core.truth_(item_render)?(item_render.cljs$core$IFn$_invoke$arity$2 ? item_render.cljs$core$IFn$_invoke$arity$2(item,chosen_QMARK_) : item_render.call(null,item,chosen_QMARK_)):item));
})()], null);
var group_name = (function (){var and__5140__auto__ = cljs.core.fn_QMARK_(get_group_name);
if(and__5140__auto__){
return (get_group_name.cljs$core$IFn$_invoke$arity$1 ? get_group_name.cljs$core$IFn$_invoke$arity$1(item) : get_group_name.call(null,item));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = group_name;
if(cljs.core.truth_(and__5140__auto__)){
return (!(cljs.core.contains_QMARK_(cljs.core.deref(_STAR_groups),group_name)));
} else {
return and__5140__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_groups,cljs.core.conj,group_name);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui__ac-group-name","div.ui__ac-group-name",1988705321),group_name], null),item_cp], null);
} else {
return item_cp;
}
})());

var G__38021 = (i__37675 + (1));
i__37675 = G__38021;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37676),frontend$ui$auto_complete_$_iter__37673(cljs.core.chunk_rest(s__37674__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37676),null);
}
} else {
var vec__37680 = cljs.core.first(s__37674__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37680,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37680,(1),null);
return cljs.core.cons((function (){var react_key = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx));
var choose_BANG_ = ((function (react_key,vec__37680,idx,item,s__37674__$2,temp__5825__auto__,_STAR_current_idx,vec__37670,current_idx,shortcut_state,_,_STAR_groups,map__37669,map__37669__$1,opts,on_chosen,on_shift_chosen,get_group_name,empty_placeholder,item_render,class$,header,grouped_QMARK_){
return (function (e){
frontend.util.stop(e);

if(cljs.core.truth_(new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(item))){
return null;
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = frontend.ui.goog$module$goog$object.get(e,"shiftKey");
if(cljs.core.truth_(and__5140__auto__)){
return on_shift_chosen;
} else {
return and__5140__auto__;
}
})())){
return (on_shift_chosen.cljs$core$IFn$_invoke$arity$1 ? on_shift_chosen.cljs$core$IFn$_invoke$arity$1(item) : on_shift_chosen.call(null,item));
} else {
return (on_chosen.cljs$core$IFn$_invoke$arity$2 ? on_chosen.cljs$core$IFn$_invoke$arity$2(item,e) : on_chosen.call(null,item,e));
}
}
});})(react_key,vec__37680,idx,item,s__37674__$2,temp__5825__auto__,_STAR_current_idx,vec__37670,current_idx,shortcut_state,_,_STAR_groups,map__37669,map__37669__$1,opts,on_chosen,on_shift_chosen,get_group_name,empty_placeholder,item_render,class$,header,grouped_QMARK_))
;
var item_cp = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu-link-wrap","div.menu-link-wrap",2002705411),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),react_key,new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),((function (react_key,choose_BANG_,vec__37680,idx,item,s__37674__$2,temp__5825__auto__,_STAR_current_idx,vec__37670,current_idx,shortcut_state,_,_STAR_groups,map__37669,map__37669__$1,opts,on_chosen,on_shift_chosen,get_group_name,empty_placeholder,item_render,class$,header,grouped_QMARK_){
return (function (){
return cljs.core.reset_BANG_(_STAR_current_idx,idx);
});})(react_key,choose_BANG_,vec__37680,idx,item,s__37674__$2,temp__5825__auto__,_STAR_current_idx,vec__37670,current_idx,shortcut_state,_,_STAR_groups,map__37669,map__37669__$1,opts,on_chosen,on_shift_chosen,get_group_name,empty_placeholder,item_render,class$,header,grouped_QMARK_))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),choose_BANG_], null),(function (){var chosen_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_idx,idx);
return frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(""+"ac-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(react_key)),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),"0",new cljs.core.Keyword(null,"class","class",-2030961996),((chosen_QMARK_)?"chosen":null),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),frontend.util.stop,new cljs.core.Keyword(null,"on-click","on-click",1632826543),choose_BANG_], null),(cljs.core.truth_(item_render)?(item_render.cljs$core$IFn$_invoke$arity$2 ? item_render.cljs$core$IFn$_invoke$arity$2(item,chosen_QMARK_) : item_render.call(null,item,chosen_QMARK_)):item));
})()], null);
var group_name = (function (){var and__5140__auto__ = cljs.core.fn_QMARK_(get_group_name);
if(and__5140__auto__){
return (get_group_name.cljs$core$IFn$_invoke$arity$1 ? get_group_name.cljs$core$IFn$_invoke$arity$1(item) : get_group_name.call(null,item));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = group_name;
if(cljs.core.truth_(and__5140__auto__)){
return (!(cljs.core.contains_QMARK_(cljs.core.deref(_STAR_groups),group_name)));
} else {
return and__5140__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_groups,cljs.core.conj,group_name);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui__ac-group-name","div.ui__ac-group-name",1988705321),group_name], null),item_cp], null);
} else {
return item_cp;
}
})(),frontend$ui$auto_complete_$_iter__37673(cljs.core.rest(s__37674__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(matched__$1);
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#ui__ac","div#ui__ac",-1910885125),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),((cljs.core.seq(matched))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#ui__ac-inner.hide-scrollbar","div#ui__ac-inner.hide-scrollbar",-1490751117),(cljs.core.truth_(header)?header:null),(cljs.core.truth_(grouped_QMARK_)?(function (){var _STAR_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var inc_idx = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_idx,cljs.core.inc);
});
var iter__5628__auto__ = (function frontend$ui$auto_complete_$_iter__37683(s__37684){
return (new cljs.core.LazySeq(null,(function (){
var s__37684__$1 = s__37684;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37684__$1);
if(temp__5825__auto__){
var s__37684__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37684__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__37684__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__37686 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__37685 = (0);
while(true){
if((i__37685 < size__5627__auto__)){
var vec__37687 = cljs.core._nth(c__5626__auto__,i__37685);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37687,(0),null);
var matched__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37687,(1),null);
cljs.core.chunk_append(b__37686,(function (){var matched_SINGLEQUOTE_ = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__37685,vec__37687,group,matched__$1,c__5626__auto__,size__5627__auto__,b__37686,s__37684__$2,temp__5825__auto__,_STAR_idx,inc_idx,_STAR_current_idx,vec__37670,current_idx,shortcut_state,_,_STAR_groups,render_f,map__37669,map__37669__$1,opts,on_chosen,on_shift_chosen,get_group_name,empty_placeholder,item_render,class$,header,grouped_QMARK_){
return (function (item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inc_idx(),item], null);
});})(i__37685,vec__37687,group,matched__$1,c__5626__auto__,size__5627__auto__,b__37686,s__37684__$2,temp__5825__auto__,_STAR_idx,inc_idx,_STAR_current_idx,vec__37670,current_idx,shortcut_state,_,_STAR_groups,render_f,map__37669,map__37669__$1,opts,on_chosen,on_shift_chosen,get_group_name,empty_placeholder,item_render,class$,header,grouped_QMARK_))
,matched__$1));
if(cljs.core.truth_(group)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui__ac-group-name","div.ui__ac-group-name",1988705321),group], null),render_f(matched_SINGLEQUOTE_)], null);
} else {
return render_f(matched_SINGLEQUOTE_);
}
})());

var G__38022 = (i__37685 + (1));
i__37685 = G__38022;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37686),frontend$ui$auto_complete_$_iter__37683(cljs.core.chunk_rest(s__37684__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37686),null);
}
} else {
var vec__37690 = cljs.core.first(s__37684__$2);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37690,(0),null);
var matched__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37690,(1),null);
return cljs.core.cons((function (){var matched_SINGLEQUOTE_ = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__37690,group,matched__$1,s__37684__$2,temp__5825__auto__,_STAR_idx,inc_idx,_STAR_current_idx,vec__37670,current_idx,shortcut_state,_,_STAR_groups,render_f,map__37669,map__37669__$1,opts,on_chosen,on_shift_chosen,get_group_name,empty_placeholder,item_render,class$,header,grouped_QMARK_){
return (function (item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inc_idx(),item], null);
});})(vec__37690,group,matched__$1,s__37684__$2,temp__5825__auto__,_STAR_idx,inc_idx,_STAR_current_idx,vec__37670,current_idx,shortcut_state,_,_STAR_groups,render_f,map__37669,map__37669__$1,opts,on_chosen,on_shift_chosen,get_group_name,empty_placeholder,item_render,class$,header,grouped_QMARK_))
,matched__$1));
if(cljs.core.truth_(group)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui__ac-group-name","div.ui__ac-group-name",1988705321),group], null),render_f(matched_SINGLEQUOTE_)], null);
} else {
return render_f(matched_SINGLEQUOTE_);
}
})(),frontend$ui$auto_complete_$_iter__37683(cljs.core.rest(s__37684__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.group_by(new cljs.core.Keyword(null,"group","group",582596132),matched));
})():render_f(medley.core.indexed.cljs$core$IFn$_invoke$arity$1(matched)))], null):(cljs.core.truth_(empty_placeholder)?empty_placeholder:null))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$ui$auto_complete__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__37693 = cljs.core.first(args__31746__auto__);
var G__37694 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__37693,G__37694) : io.factorhouse.hsx.core.obj_get.call(null,G__37693,G__37694));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"auto-complete","auto-complete",1885490375,null),args__31746__auto__),frontend$ui$auto_complete,args__31746__auto__,null);
}
};
var frontend$ui$auto_complete = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38023__i = 0, G__38023__a = new Array(arguments.length -  0);
while (G__38023__i < G__38023__a.length) {G__38023__a[G__38023__i] = arguments[G__38023__i + 0]; ++G__38023__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38023__a,0,null);
} 
return frontend$ui$auto_complete__delegate.call(this,args__31746__auto__);};
frontend$ui$auto_complete.cljs$lang$maxFixedArity = 0;
frontend$ui$auto_complete.cljs$lang$applyTo = (function (arglist__38024){
var args__31746__auto__ = cljs.core.seq(arglist__38024);
return frontend$ui$auto_complete__delegate(args__31746__auto__);
});
frontend$ui$auto_complete.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$auto_complete__delegate;
return frontend$ui$auto_complete;
})()
;
var memo_comp__31747__auto__ = (function (){var G__37695 = comp__31745__auto__;
var G__37696 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__37695,G__37696) : io.factorhouse.hsx.core.react_memo.call(null,G__37695,G__37696));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"auto-complete");

return comp__31745__auto__;
})();
frontend.ui.toggle = (function frontend$ui$toggle(var_args){
var G__37698 = arguments.length;
switch (G__37698) {
case 2:
return frontend.ui.toggle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.ui.toggle.cljs$core$IFn$_invoke$arity$2 = (function (on_QMARK_,on_click){
return frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(on_QMARK_,on_click,false);
}));

(frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3 = (function (on_QMARK_,on_click,small_QMARK_){
var G__37699 = (function (){var G__37700 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.boolean$(on_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null);
if(cljs.core.truth_(small_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37700,new cljs.core.Keyword(null,"size","size",1098693007),"sm");
} else {
return G__37700;
}
})();
return (logseq.shui.ui.switch$.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.switch$.cljs$core$IFn$_invoke$arity$1(G__37699) : logseq.shui.ui.switch$.call(null,G__37699));
}));

(frontend.ui.toggle.cljs$lang$maxFixedArity = 3);

frontend.ui.keyboard_shortcut_from_config = (function frontend$ui$keyboard_shortcut_from_config(var_args){
var args__5882__auto__ = [];
var len__5876__auto___38026 = arguments.length;
var i__5877__auto___38027 = (0);
while(true){
if((i__5877__auto___38027 < len__5876__auto___38026)){
args__5882__auto__.push((arguments[i__5877__auto___38027]));

var G__38028 = (i__5877__auto___38027 + (1));
i__5877__auto___38027 = G__38028;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.ui.keyboard_shortcut_from_config.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.ui.keyboard_shortcut_from_config.cljs$core$IFn$_invoke$arity$variadic = (function (shortcut_name,p__37703){
var map__37704 = p__37703;
var map__37704__$1 = cljs.core.__destructure_map(map__37704);
var pick_first_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37704__$1,new cljs.core.Keyword(null,"pick-first?","pick-first?",-2055544652));
var binding = frontend.modules.shortcut.data_helper.shortcut_binding(shortcut_name);
if((((binding == null)) || (binding === false))){
return null;
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = pick_first_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.coll_QMARK_(binding);
} else {
return and__5140__auto__;
}
})())){
return cljs.core.first(binding);
} else {
return frontend.modules.shortcut.utils.decorate_binding(binding);

}
}
}));

(frontend.ui.keyboard_shortcut_from_config.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.ui.keyboard_shortcut_from_config.cljs$lang$applyTo = (function (seq37701){
var G__37702 = cljs.core.first(seq37701);
var seq37701__$1 = cljs.core.next(seq37701);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37702,seq37701__$1);
}));

/**
 * Renders a compact shui shortcut for use inside dropdown menu items.
 * Accepts a shortcut config keyword (e.g. :editor/cut) or a raw binding
 * string (e.g. "shift+click"). Returns nil for disabled/missing bindings.
 */
frontend.ui.dropdown_shortcut = (function frontend$ui$dropdown_shortcut(shortcut_or_id){
var binding = (((shortcut_or_id instanceof cljs.core.Keyword))?(function (){var b = frontend.modules.shortcut.data_helper.shortcut_binding(shortcut_or_id);
if(cljs.core.truth_((function (){var and__5140__auto__ = b;
if(cljs.core.truth_(and__5140__auto__)){
return (!(b === false));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.first(b);
} else {
return null;
}
})():shortcut_or_id);
if(cljs.core.truth_(binding)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ml-auto.pl-2","span.ml-auto.pl-2",-252682900),logseq.shui.ui.shortcut(binding,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"glow?","glow?",565751582),true], null))], null);
} else {
return null;
}
});
frontend.ui.loading = (function frontend$ui$loading(var_args){
var G__37706 = arguments.length;
switch (G__37706) {
case 0:
return frontend.ui.loading.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.ui.loading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.ui.loading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.ui.loading.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.ui.loading.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","loading","ui/loading",-736989697)], 0)));
}));

(frontend.ui.loading.cljs$core$IFn$_invoke$arity$1 = (function (content){
return frontend.ui.loading.cljs$core$IFn$_invoke$arity$2(content,null);
}));

(frontend.ui.loading.cljs$core$IFn$_invoke$arity$2 = (function (content,opts){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.inline.icon-loading","div.flex.flex-row.items-center.inline.icon-loading",-1637284770),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon.flex.items-center","span.icon.flex.items-center",-1264305839),frontend.components.svg.loader_fn(opts),((clojure.string.blank_QMARK_(content))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text.pl-2","span.text.pl-2",-2100749954),content], null))], null)], null);
}));

(frontend.ui.loading.cljs$lang$maxFixedArity = 2);

frontend.ui.rotating_arrow = (function (){var render_fn__31744__auto__ = (function frontend$ui$rotating_arrow(collapsed_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(collapsed_QMARK_)?"rotating-arrow collapsed":"rotating-arrow not-collapsed")], null),frontend.components.svg.caret_right()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$ui$rotating_arrow__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__37707 = cljs.core.first(args__31746__auto__);
var G__37708 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__37707,G__37708) : io.factorhouse.hsx.core.obj_get.call(null,G__37707,G__37708));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"rotating-arrow","rotating-arrow",-810443374,null),args__31746__auto__),frontend$ui$rotating_arrow,args__31746__auto__,null);
}
};
var frontend$ui$rotating_arrow = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38030__i = 0, G__38030__a = new Array(arguments.length -  0);
while (G__38030__i < G__38030__a.length) {G__38030__a[G__38030__i] = arguments[G__38030__i + 0]; ++G__38030__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38030__a,0,null);
} 
return frontend$ui$rotating_arrow__delegate.call(this,args__31746__auto__);};
frontend$ui$rotating_arrow.cljs$lang$maxFixedArity = 0;
frontend$ui$rotating_arrow.cljs$lang$applyTo = (function (arglist__38031){
var args__31746__auto__ = cljs.core.seq(arglist__38031);
return frontend$ui$rotating_arrow__delegate(args__31746__auto__);
});
frontend$ui$rotating_arrow.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$rotating_arrow__delegate;
return frontend$ui$rotating_arrow;
})()
;
var memo_comp__31747__auto__ = (function (){var G__37709 = comp__31745__auto__;
var G__37710 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__37709,G__37710) : io.factorhouse.hsx.core.react_memo.call(null,G__37709,G__37710));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"rotating-arrow");

return comp__31745__auto__;
})();
frontend.ui.foldable_title = (function (){var render_fn__31744__auto__ = (function frontend$ui$foldable_title(p__37711){
var map__37712 = p__37711;
var map__37712__$1 = cljs.core.__destructure_map(map__37712);
var on_pointer_down = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37712__$1,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138));
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37712__$1,new cljs.core.Keyword(null,"header","header",119441134));
var title_trigger_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37712__$1,new cljs.core.Keyword(null,"title-trigger?","title-trigger?",-613599873));
var collapsed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37712__$1,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674));
var vec__37713 = logseq.shui.hooks.use_state(false);
var control_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37713,(0),null);
var set_control_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37713,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-foldable-title.content","div.ls-foldable-title.content",1115039860),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-1.flex-row.foldable-title","div.flex-1.flex-row.foldable-title",-182084945),(function (){var G__37716 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (){
return (set_control_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_control_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_control_BANG_.call(null,true));
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (){
return (set_control_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_control_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_control_BANG_.call(null,false));
})], null);
if(cljs.core.truth_(title_trigger_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__37716,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),on_pointer_down,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"cursor"], 0));
} else {
return G__37716;
}
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.ls-foldable-header.gap-1","div.flex.flex-row.items-center.ls-foldable-header.gap-1",-456234465),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var target = e.target;
if(cljs.core.truth_((function (){var G__37717 = target;
if((G__37717 == null)){
return null;
} else {
return G__37717.closest(".as-toggle");
}
})())){
return cljs.core.reset_BANG_(collapsed_QMARK_,cljs.core.not(cljs.core.deref(collapsed_QMARK_)));
} else {
return null;
}
})], null),(function (){var style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(14),new cljs.core.Keyword(null,"height","height",1025178622),(16)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.ls-foldable-title-control.block-control.opacity-50.hover:opacity-100","a.ls-foldable-title-control.block-control.opacity-50.hover:opacity-100",-1168993748),(function (){var G__37718 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style], null);
if(cljs.core.not(title_trigger_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37718,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),on_pointer_down);
} else {
return G__37718;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var or__5142__auto__ = control_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core.deref(collapsed_QMARK_);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return frontend.util.mobile_QMARK_();
}
}
})())?"control-show cursor-pointer":"control-hide")], null),frontend.ui.rotating_arrow(cljs.core.deref(collapsed_QMARK_))], null)], null);
})(),((cljs.core.fn_QMARK_(header))?(function (){var G__37719 = cljs.core.deref(collapsed_QMARK_);
return (header.cljs$core$IFn$_invoke$arity$1 ? header.cljs$core$IFn$_invoke$arity$1(G__37719) : header.call(null,G__37719));
})():header)], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$ui$foldable_title__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__37720 = cljs.core.first(args__31746__auto__);
var G__37721 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__37720,G__37721) : io.factorhouse.hsx.core.obj_get.call(null,G__37720,G__37721));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"foldable-title","foldable-title",1418267706,null),args__31746__auto__),frontend$ui$foldable_title,args__31746__auto__,null);
}
};
var frontend$ui$foldable_title = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38032__i = 0, G__38032__a = new Array(arguments.length -  0);
while (G__38032__i < G__38032__a.length) {G__38032__a[G__38032__i] = arguments[G__38032__i + 0]; ++G__38032__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38032__a,0,null);
} 
return frontend$ui$foldable_title__delegate.call(this,args__31746__auto__);};
frontend$ui$foldable_title.cljs$lang$maxFixedArity = 0;
frontend$ui$foldable_title.cljs$lang$applyTo = (function (arglist__38033){
var args__31746__auto__ = cljs.core.seq(arglist__38033);
return frontend$ui$foldable_title__delegate(args__31746__auto__);
});
frontend$ui$foldable_title.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$foldable_title__delegate;
return frontend$ui$foldable_title;
})()
;
var memo_comp__31747__auto__ = (function (){var G__37722 = comp__31745__auto__;
var G__37723 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__37722,G__37723) : io.factorhouse.hsx.core.react_memo.call(null,G__37722,G__37723));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"foldable-title");

return comp__31745__auto__;
})();
frontend.ui.foldable = (function (){var render_fn__31744__auto__ = (function frontend$ui$foldable(header,content,p__37724){
var map__37725 = p__37724;
var map__37725__$1 = cljs.core.__destructure_map(map__37725);
var title_trigger_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37725__$1,new cljs.core.Keyword(null,"title-trigger?","title-trigger?",-613599873));
var on_pointer_down = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37725__$1,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37725__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var default_collapsed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37725__$1,new cljs.core.Keyword(null,"default-collapsed?","default-collapsed?",-1350393823));
var init_collapsed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37725__$1,new cljs.core.Keyword(null,"init-collapsed","init-collapsed",-220931385));
var collapsed_QMARK_ = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_collapsed_QMARK_ === true);
}),cljs.core.PersistentVector.EMPTY);
var render_content_QMARK_ = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1((!(default_collapsed_QMARK_ === true)));
}),cljs.core.PersistentVector.EMPTY);
var collapse_timeout = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var vec__37726 = logseq.shui.hooks.use_atom(collapsed_QMARK_);
var collapsed_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37726,(0),null);
var vec__37729 = logseq.shui.hooks.use_atom(render_content_QMARK_);
var render_content_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37729,(0),null);
var transition_ms = (200);
var on_pointer_down__$1 = (function (e){
frontend.util.stop(e);

var next_collapsed_QMARK_ = cljs.core.not(cljs.core.deref(collapsed_QMARK_));
var temp__5825__auto___38034 = logseq.shui.hooks.deref(collapse_timeout);
if(cljs.core.truth_(temp__5825__auto___38034)){
var timeout_id_38035 = temp__5825__auto___38034;
clearTimeout(timeout_id_38035);

logseq.shui.hooks.set_ref_BANG_(collapse_timeout,null);
} else {
}

if(next_collapsed_QMARK_ === false){
cljs.core.reset_BANG_(render_content_QMARK_,true);
} else {
}

cljs.core.reset_BANG_(collapsed_QMARK_,next_collapsed_QMARK_);

if(next_collapsed_QMARK_ === true){
logseq.shui.hooks.set_ref_BANG_(collapse_timeout,setTimeout((function (){
cljs.core.reset_BANG_(render_content_QMARK_,false);

return logseq.shui.hooks.set_ref_BANG_(collapse_timeout,null);
}),transition_ms));
} else {
}

if(cljs.core.truth_(on_pointer_down)){
return (on_pointer_down.cljs$core$IFn$_invoke$arity$1 ? on_pointer_down.cljs$core$IFn$_invoke$arity$1(next_collapsed_QMARK_) : on_pointer_down.call(null,next_collapsed_QMARK_));
} else {
return null;
}
});
logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto___38036 = init_collapsed;
if(cljs.core.truth_(temp__5825__auto___38036)){
var f_38037 = temp__5825__auto___38036;
(f_38037.cljs$core$IFn$_invoke$arity$1 ? f_38037.cljs$core$IFn$_invoke$arity$1(collapsed_QMARK_) : f_38037.call(null,collapsed_QMARK_));
} else {
}

return (function (){
var temp__5825__auto__ = logseq.shui.hooks.deref(collapse_timeout);
if(cljs.core.truth_(temp__5825__auto__)){
var timeout_id = temp__5825__auto__;
return clearTimeout(timeout_id);
} else {
return null;
}
});
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col","div.flex.flex-col",255067761),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),frontend.ui.foldable_title(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),on_pointer_down__$1,new cljs.core.Keyword(null,"header","header",119441134),header,new cljs.core.Keyword(null,"title-trigger?","title-trigger?",-613599873),title_trigger_QMARK_,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),collapsed_QMARK_], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-foldable-content","div.ls-foldable-content",711727197),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(collapsed_value)?"is-collapsed":null),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),cljs.core.boolean$(collapsed_value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-foldable-content-inner","div.ls-foldable-content-inner",1566712639),((cljs.core.fn_QMARK_(content))?(cljs.core.truth_(render_content_value)?(content.cljs$core$IFn$_invoke$arity$0 ? content.cljs$core$IFn$_invoke$arity$0() : content.call(null)):null):content)], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$ui$foldable__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__37732 = cljs.core.first(args__31746__auto__);
var G__37733 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__37732,G__37733) : io.factorhouse.hsx.core.obj_get.call(null,G__37732,G__37733));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"foldable","foldable",-748052741,null),args__31746__auto__),frontend$ui$foldable,args__31746__auto__,null);
}
};
var frontend$ui$foldable = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38038__i = 0, G__38038__a = new Array(arguments.length -  0);
while (G__38038__i < G__38038__a.length) {G__38038__a[G__38038__i] = arguments[G__38038__i + 0]; ++G__38038__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38038__a,0,null);
} 
return frontend$ui$foldable__delegate.call(this,args__31746__auto__);};
frontend$ui$foldable.cljs$lang$maxFixedArity = 0;
frontend$ui$foldable.cljs$lang$applyTo = (function (arglist__38039){
var args__31746__auto__ = cljs.core.seq(arglist__38039);
return frontend$ui$foldable__delegate(args__31746__auto__);
});
frontend$ui$foldable.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$foldable__delegate;
return frontend$ui$foldable;
})()
;
var memo_comp__31747__auto__ = (function (){var G__37734 = comp__31745__auto__;
var G__37735 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__37734,G__37735) : io.factorhouse.hsx.core.react_memo.call(null,G__37734,G__37735));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"foldable");

return comp__31745__auto__;
})();
frontend.ui.admonition = (function (){var render_fn__31744__auto__ = (function frontend$ui$admonition(type,content){
var type__$1 = cljs.core.name(type);
var temp__5825__auto__ = (function (){var G__37736 = clojure.string.lower_case(type__$1);
switch (G__37736) {
case "note":
return frontend.components.svg.note;

break;
case "tip":
return frontend.components.svg.tip;

break;
case "important":
return frontend.components.svg.important;

break;
case "caution":
return frontend.components.svg.caution;

break;
case "warning":
return frontend.components.svg.warning;

break;
case "pinned":
return frontend.components.svg.pinned;

break;
default:
return null;

}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var icon_SINGLEQUOTE_ = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.admonitionblock.align-items","div.flex.flex-row.admonitionblock.align-items",-513234862),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),type__$1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pr-4.admonition-icon.flex.flex-col.justify-center","div.pr-4.admonition-icon.flex.flex-col.justify-center",-1325303445),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),clojure.string.capitalize(type__$1)], null),(icon_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$0 ? icon_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$0() : icon_SINGLEQUOTE_.call(null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ml-4.text-lg","div.ml-4.text-lg",525424974),content], null)], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$ui$admonition__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__37737 = cljs.core.first(args__31746__auto__);
var G__37738 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__37737,G__37738) : io.factorhouse.hsx.core.obj_get.call(null,G__37737,G__37738));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"admonition","admonition",2118114869,null),args__31746__auto__),frontend$ui$admonition,args__31746__auto__,null);
}
};
var frontend$ui$admonition = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38041__i = 0, G__38041__a = new Array(arguments.length -  0);
while (G__38041__i < G__38041__a.length) {G__38041__a[G__38041__i] = arguments[G__38041__i + 0]; ++G__38041__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38041__a,0,null);
} 
return frontend$ui$admonition__delegate.call(this,args__31746__auto__);};
frontend$ui$admonition.cljs$lang$maxFixedArity = 0;
frontend$ui$admonition.cljs$lang$applyTo = (function (arglist__38042){
var args__31746__auto__ = cljs.core.seq(arglist__38042);
return frontend$ui$admonition__delegate(args__31746__auto__);
});
frontend$ui$admonition.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$admonition__delegate;
return frontend$ui$admonition;
})()
;
var memo_comp__31747__auto__ = (function (){var G__37739 = comp__31745__auto__;
var G__37740 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__37739,G__37740) : io.factorhouse.hsx.core.react_memo.call(null,G__37739,G__37740));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"admonition");

return comp__31745__auto__;
})();
frontend.ui.catch_error = (function (){var render_fn__31744__auto__ = (function frontend$ui$catch_error(error_view,view){
return frontend.ui.error_boundary(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fallback","fallback",761637929),(function (props){
var error = props.error;
if(cljs.core.fn_QMARK_(error_view)){
return (error_view.cljs$core$IFn$_invoke$arity$1 ? error_view.cljs$core$IFn$_invoke$arity$1(error) : error_view.call(null,error));
} else {
return error_view;
}
}),new cljs.core.Keyword(null,"onError","onError",1669791984),(function (error,_component_stack,_event_id){
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.ui",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exception","exception",-335277064),error,new cljs.core.Keyword(null,"line","line",212345235),674], null)),error);
} else {
return null;
}
})], null),view);
});
var comp__31745__auto__ = (function() { 
var frontend$ui$catch_error__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__37741 = cljs.core.first(args__31746__auto__);
var G__37742 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__37741,G__37742) : io.factorhouse.hsx.core.obj_get.call(null,G__37741,G__37742));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"catch-error","catch-error",9313665,null),args__31746__auto__),frontend$ui$catch_error,args__31746__auto__,null);
}
};
var frontend$ui$catch_error = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38043__i = 0, G__38043__a = new Array(arguments.length -  0);
while (G__38043__i < G__38043__a.length) {G__38043__a[G__38043__i] = arguments[G__38043__i + 0]; ++G__38043__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38043__a,0,null);
} 
return frontend$ui$catch_error__delegate.call(this,args__31746__auto__);};
frontend$ui$catch_error.cljs$lang$maxFixedArity = 0;
frontend$ui$catch_error.cljs$lang$applyTo = (function (arglist__38044){
var args__31746__auto__ = cljs.core.seq(arglist__38044);
return frontend$ui$catch_error__delegate(args__31746__auto__);
});
frontend$ui$catch_error.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$catch_error__delegate;
return frontend$ui$catch_error;
})()
;
var memo_comp__31747__auto__ = (function (){var G__37743 = comp__31745__auto__;
var G__37744 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__37743,G__37744) : io.factorhouse.hsx.core.react_memo.call(null,G__37743,G__37744));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"catch-error");

return comp__31745__auto__;
})();
frontend.ui.catch_error_and_notify = (function (){var render_fn__31744__auto__ = (function frontend$ui$catch_error_and_notify(error_view,view){
return frontend.ui.error_boundary(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fallback","fallback",761637929),cljs.core.constantly(error_view),new cljs.core.Keyword(null,"onError","onError",1669791984),(function (error,_component_stack,_event_id){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.ui",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exception","exception",-335277064),error,new cljs.core.Keyword(null,"line","line",212345235),682], null)),error);
} else {
}

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-2","div.flex.flex-col.gap-2",1564729900),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","error-boundary-error","ui/error-boundary-error",-1280752954),(((error instanceof Error))?error.message:(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)))], 0))], null),(((error instanceof Error))?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(error.stack)):null)], null),new cljs.core.Keyword(null,"error","error",-978969032));
})], null),view);
});
var comp__31745__auto__ = (function() { 
var frontend$ui$catch_error_and_notify__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__37745 = cljs.core.first(args__31746__auto__);
var G__37746 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__37745,G__37746) : io.factorhouse.hsx.core.obj_get.call(null,G__37745,G__37746));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"catch-error-and-notify","catch-error-and-notify",-440092503,null),args__31746__auto__),frontend$ui$catch_error_and_notify,args__31746__auto__,null);
}
};
var frontend$ui$catch_error_and_notify = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38045__i = 0, G__38045__a = new Array(arguments.length -  0);
while (G__38045__i < G__38045__a.length) {G__38045__a[G__38045__i] = arguments[G__38045__i + 0]; ++G__38045__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38045__a,0,null);
} 
return frontend$ui$catch_error_and_notify__delegate.call(this,args__31746__auto__);};
frontend$ui$catch_error_and_notify.cljs$lang$maxFixedArity = 0;
frontend$ui$catch_error_and_notify.cljs$lang$applyTo = (function (arglist__38046){
var args__31746__auto__ = cljs.core.seq(arglist__38046);
return frontend$ui$catch_error_and_notify__delegate(args__31746__auto__);
});
frontend$ui$catch_error_and_notify.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$catch_error_and_notify__delegate;
return frontend$ui$catch_error_and_notify;
})()
;
var memo_comp__31747__auto__ = (function (){var G__37747 = comp__31745__auto__;
var G__37748 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__37747,G__37748) : io.factorhouse.hsx.core.react_memo.call(null,G__37747,G__37748));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"catch-error-and-notify");

return comp__31745__auto__;
})();
/**
 * Well styled error message for blocks
 */
frontend.ui.block_error = (function (){var render_fn__31744__auto__ = (function frontend$ui$block_error(title,p__37749){
var map__37750 = p__37749;
var map__37750__$1 = cljs.core.__destructure_map(map__37750);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37750__$1,new cljs.core.Keyword(null,"content","content",15833224));
var section_attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37750__$1,new cljs.core.Keyword(null,"section-attrs","section-attrs",1373816150));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.border.mt-1.p-1.cursor-pointer.block-content-fallback-ui.w-full","section.border.mt-1.p-1.cursor-pointer.block-content-fallback-ui.w-full",-633413109),section_attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-between.items-center.px-1","div.flex.justify-between.items-center.px-1",-1967506405),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.text-error.pb-1","h5.text-error.pb-1",635683238),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-xs.opacity-50.hover:opacity-80","a.text-xs.opacity-50.hover:opacity-80",-2049357429),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/logseq/db-test/issues/new?labels=from:in-app&template=bug_report.yaml",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("bug-report.issue","report-link","bug-report.issue/report-link",-679385176)], 0))], null)], null),(cljs.core.truth_(content)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.m-0.text-sm","pre.m-0.text-sm",-1413824452),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(content))], null):null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$ui$block_error__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__37751 = cljs.core.first(args__31746__auto__);
var G__37752 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__37751,G__37752) : io.factorhouse.hsx.core.obj_get.call(null,G__37751,G__37752));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"block-error","block-error",-1943825994,null),args__31746__auto__),frontend$ui$block_error,args__31746__auto__,null);
}
};
var frontend$ui$block_error = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38047__i = 0, G__38047__a = new Array(arguments.length -  0);
while (G__38047__i < G__38047__a.length) {G__38047__a[G__38047__i] = arguments[G__38047__i + 0]; ++G__38047__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38047__a,0,null);
} 
return frontend$ui$block_error__delegate.call(this,args__31746__auto__);};
frontend$ui$block_error.cljs$lang$maxFixedArity = 0;
frontend$ui$block_error.cljs$lang$applyTo = (function (arglist__38048){
var args__31746__auto__ = cljs.core.seq(arglist__38048);
return frontend$ui$block_error__delegate(args__31746__auto__);
});
frontend$ui$block_error.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$block_error__delegate;
return frontend$ui$block_error;
})()
;
var memo_comp__31747__auto__ = (function (){var G__37753 = comp__31745__auto__;
var G__37754 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__37753,G__37754) : io.factorhouse.hsx.core.react_memo.call(null,G__37753,G__37754));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"block-error");

return comp__31745__auto__;
})();
/**
 * Well styled error message for higher level components. Currently same as
 *   block-error but this could change
 */
frontend.ui.component_error = frontend.ui.block_error;
frontend.ui.select = (function (){var render_fn__31744__auto__ = (function() {
var frontend$ui$select = null;
var frontend$ui$select__2 = (function (options,on_change){
return frontend$ui$select.cljs$core$IFn$_invoke$arity$3(options,on_change,cljs.core.PersistentArrayMap.EMPTY);
});
var frontend$ui$select__3 = (function (options,on_change,select_options){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.pl-6.block.text-base.leading-6.border-gray-300.focus:outline-none.focus:shadow-outline-blue.focus:border-blue-300.sm:text-sm.sm:leading-5","select.pl-6.block.text-base.leading-6.border-gray-300.focus:outline-none.focus:shadow-outline-blue.focus:border-blue-300.sm:text-sm.sm:leading-5",-49391626),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-select",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var value = frontend.util.evalue(e);
return (on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(e,value) : on_change.call(null,e,value));
})], null),select_options], 0)),(function (){var iter__5628__auto__ = (function frontend$ui$select_$_iter__37755(s__37756){
return (new cljs.core.LazySeq(null,(function (){
var s__37756__$1 = s__37756;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37756__$1);
if(temp__5825__auto__){
var s__37756__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37756__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__37756__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__37758 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__37757 = (0);
while(true){
if((i__37757 < size__5627__auto__)){
var map__37759 = cljs.core._nth(c__5626__auto__,i__37757);
var map__37759__$1 = cljs.core.__destructure_map(map__37759);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37759__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37759__$1,new cljs.core.Keyword(null,"value","value",305978217));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37759__$1,new cljs.core.Keyword(null,"selected","selected",574897764),false);
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37759__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),false);
cljs.core.chunk_append(b__37758,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),(function (){var G__37760 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),label,new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5142__auto__ = value;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return label;
}
})()], null);
var G__37760__$1 = (cljs.core.truth_(disabled)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37760,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled):G__37760);
if(cljs.core.truth_(selected)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37760__$1,new cljs.core.Keyword(null,"selected","selected",574897764),selected);
} else {
return G__37760__$1;
}
})(),label], null));

var G__38049 = (i__37757 + (1));
i__37757 = G__38049;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37758),frontend$ui$select_$_iter__37755(cljs.core.chunk_rest(s__37756__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37758),null);
}
} else {
var map__37761 = cljs.core.first(s__37756__$2);
var map__37761__$1 = cljs.core.__destructure_map(map__37761);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37761__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37761__$1,new cljs.core.Keyword(null,"value","value",305978217));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37761__$1,new cljs.core.Keyword(null,"selected","selected",574897764),false);
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37761__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),false);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),(function (){var G__37762 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),label,new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5142__auto__ = value;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return label;
}
})()], null);
var G__37762__$1 = (cljs.core.truth_(disabled)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37762,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled):G__37762);
if(cljs.core.truth_(selected)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37762__$1,new cljs.core.Keyword(null,"selected","selected",574897764),selected);
} else {
return G__37762__$1;
}
})(),label], null),frontend$ui$select_$_iter__37755(cljs.core.rest(s__37756__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(options);
})()], null);
});
frontend$ui$select = function(options,on_change,select_options){
switch(arguments.length){
case 2:
return frontend$ui$select__2.call(this,options,on_change);
case 3:
return frontend$ui$select__3.call(this,options,on_change,select_options);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$ui$select.cljs$core$IFn$_invoke$arity$2 = frontend$ui$select__2;
frontend$ui$select.cljs$core$IFn$_invoke$arity$3 = frontend$ui$select__3;
return frontend$ui$select;
})()
;
var comp__31745__auto__ = (function() { 
var frontend$ui$select__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__37763 = cljs.core.first(args__31746__auto__);
var G__37764 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__37763,G__37764) : io.factorhouse.hsx.core.obj_get.call(null,G__37763,G__37764));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"select","select",-1506602266,null),args__31746__auto__),frontend$ui$select,args__31746__auto__,null);
}
};
var frontend$ui$select = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38050__i = 0, G__38050__a = new Array(arguments.length -  0);
while (G__38050__i < G__38050__a.length) {G__38050__a[G__38050__i] = arguments[G__38050__i + 0]; ++G__38050__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38050__a,0,null);
} 
return frontend$ui$select__delegate.call(this,args__31746__auto__);};
frontend$ui$select.cljs$lang$maxFixedArity = 0;
frontend$ui$select.cljs$lang$applyTo = (function (arglist__38051){
var args__31746__auto__ = cljs.core.seq(arglist__38051);
return frontend$ui$select__delegate(args__31746__auto__);
});
frontend$ui$select.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$select__delegate;
return frontend$ui$select;
})()
;
var memo_comp__31747__auto__ = (function (){var G__37765 = comp__31745__auto__;
var G__37766 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__37765,G__37766) : io.factorhouse.hsx.core.react_memo.call(null,G__37765,G__37766));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"select");

return comp__31745__auto__;
})();
frontend.ui.radio_list = (function (){var render_fn__31744__auto__ = (function frontend$ui$radio_list(options,on_change,class$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui__radio-list","div.ui__radio-list",-333640255),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),(function (){var iter__5628__auto__ = (function frontend$ui$radio_list_$_iter__37768(s__37769){
return (new cljs.core.LazySeq(null,(function (){
var s__37769__$1 = s__37769;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37769__$1);
if(temp__5825__auto__){
var s__37769__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37769__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__37769__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__37771 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__37770 = (0);
while(true){
if((i__37770 < size__5627__auto__)){
var map__37772 = cljs.core._nth(c__5626__auto__,i__37770);
var map__37772__$1 = cljs.core.__destructure_map(map__37772);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37772__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37772__$1,new cljs.core.Keyword(null,"value","value",305978217));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37772__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
cljs.core.chunk_append(b__37771,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"radio-list-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-radio","input.form-radio",-880594710),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__37770,map__37772,map__37772__$1,label,value,selected,c__5626__auto__,size__5627__auto__,b__37771,s__37769__$2,temp__5825__auto__){
return (function (p1__37767_SHARP_){
var G__37773 = frontend.util.evalue(p1__37767_SHARP_);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__37773) : on_change.call(null,G__37773));
});})(i__37770,map__37772,map__37772__$1,label,value,selected,c__5626__auto__,size__5627__auto__,b__37771,s__37769__$2,temp__5825__auto__))
,new cljs.core.Keyword(null,"checked","checked",-50955819),selected], null)], null),label], null));

var G__38052 = (i__37770 + (1));
i__37770 = G__38052;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37771),frontend$ui$radio_list_$_iter__37768(cljs.core.chunk_rest(s__37769__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37771),null);
}
} else {
var map__37774 = cljs.core.first(s__37769__$2);
var map__37774__$1 = cljs.core.__destructure_map(map__37774);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37774__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37774__$1,new cljs.core.Keyword(null,"value","value",305978217));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37774__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"radio-list-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-radio","input.form-radio",-880594710),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__37774,map__37774__$1,label,value,selected,s__37769__$2,temp__5825__auto__){
return (function (p1__37767_SHARP_){
var G__37775 = frontend.util.evalue(p1__37767_SHARP_);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__37775) : on_change.call(null,G__37775));
});})(map__37774,map__37774__$1,label,value,selected,s__37769__$2,temp__5825__auto__))
,new cljs.core.Keyword(null,"checked","checked",-50955819),selected], null)], null),label], null),frontend$ui$radio_list_$_iter__37768(cljs.core.rest(s__37769__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(options);
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$ui$radio_list__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__37776 = cljs.core.first(args__31746__auto__);
var G__37777 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__37776,G__37777) : io.factorhouse.hsx.core.obj_get.call(null,G__37776,G__37777));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"radio-list","radio-list",1303232584,null),args__31746__auto__),frontend$ui$radio_list,args__31746__auto__,null);
}
};
var frontend$ui$radio_list = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38053__i = 0, G__38053__a = new Array(arguments.length -  0);
while (G__38053__i < G__38053__a.length) {G__38053__a[G__38053__i] = arguments[G__38053__i + 0]; ++G__38053__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38053__a,0,null);
} 
return frontend$ui$radio_list__delegate.call(this,args__31746__auto__);};
frontend$ui$radio_list.cljs$lang$maxFixedArity = 0;
frontend$ui$radio_list.cljs$lang$applyTo = (function (arglist__38054){
var args__31746__auto__ = cljs.core.seq(arglist__38054);
return frontend$ui$radio_list__delegate(args__31746__auto__);
});
frontend$ui$radio_list.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$radio_list__delegate;
return frontend$ui$radio_list;
})()
;
var memo_comp__31747__auto__ = (function (){var G__37778 = comp__31745__auto__;
var G__37779 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__37778,G__37779) : io.factorhouse.hsx.core.react_memo.call(null,G__37778,G__37779));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"radio-list");

return comp__31745__auto__;
})();
frontend.ui.checkbox_list = (function (){var render_fn__31744__auto__ = (function frontend$ui$checkbox_list(options,on_change,class$){
var checked_vals = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"selected","selected",574897764),options)));
var on_item_change = (function (e){
var target = e.target;
var checked_QMARK_ = target.checked;
var value = target.value;
var G__37780 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(checked_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(checked_vals,value):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(checked_vals,value)));
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__37780) : on_change.call(null,G__37780));
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui__checkbox-list","div.ui__checkbox-list",1717561270),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),(function (){var iter__5628__auto__ = (function frontend$ui$checkbox_list_$_iter__37781(s__37782){
return (new cljs.core.LazySeq(null,(function (){
var s__37782__$1 = s__37782;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37782__$1);
if(temp__5825__auto__){
var s__37782__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37782__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__37782__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__37784 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__37783 = (0);
while(true){
if((i__37783 < size__5627__auto__)){
var map__37785 = cljs.core._nth(c__5626__auto__,i__37783);
var map__37785__$1 = cljs.core.__destructure_map(map__37785);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37785__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37785__$1,new cljs.core.Keyword(null,"value","value",305978217));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37785__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
cljs.core.chunk_append(b__37784,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"check-list-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-checkbox","input.form-checkbox",1439150033),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_item_change,new cljs.core.Keyword(null,"checked","checked",-50955819),selected], null)], null),label], null));

var G__38055 = (i__37783 + (1));
i__37783 = G__38055;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37784),frontend$ui$checkbox_list_$_iter__37781(cljs.core.chunk_rest(s__37782__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37784),null);
}
} else {
var map__37786 = cljs.core.first(s__37782__$2);
var map__37786__$1 = cljs.core.__destructure_map(map__37786);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37786__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37786__$1,new cljs.core.Keyword(null,"value","value",305978217));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37786__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"check-list-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-checkbox","input.form-checkbox",1439150033),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_item_change,new cljs.core.Keyword(null,"checked","checked",-50955819),selected], null)], null),label], null),frontend$ui$checkbox_list_$_iter__37781(cljs.core.rest(s__37782__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(options);
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$ui$checkbox_list__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__37787 = cljs.core.first(args__31746__auto__);
var G__37788 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__37787,G__37788) : io.factorhouse.hsx.core.obj_get.call(null,G__37787,G__37788));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"checkbox-list","checkbox-list",-122450195,null),args__31746__auto__),frontend$ui$checkbox_list,args__31746__auto__,null);
}
};
var frontend$ui$checkbox_list = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38056__i = 0, G__38056__a = new Array(arguments.length -  0);
while (G__38056__i < G__38056__a.length) {G__38056__a[G__38056__i] = arguments[G__38056__i + 0]; ++G__38056__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38056__a,0,null);
} 
return frontend$ui$checkbox_list__delegate.call(this,args__31746__auto__);};
frontend$ui$checkbox_list.cljs$lang$maxFixedArity = 0;
frontend$ui$checkbox_list.cljs$lang$applyTo = (function (arglist__38057){
var args__31746__auto__ = cljs.core.seq(arglist__38057);
return frontend$ui$checkbox_list__delegate(args__31746__auto__);
});
frontend$ui$checkbox_list.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$checkbox_list__delegate;
return frontend$ui$checkbox_list;
})()
;
var memo_comp__31747__auto__ = (function (){var G__37789 = comp__31745__auto__;
var G__37790 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__37789,G__37790) : io.factorhouse.hsx.core.react_memo.call(null,G__37789,G__37790));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"checkbox-list");

return comp__31745__auto__;
})();
frontend.ui.tweet_embed = (function (){var render_fn__31744__auto__ = (function frontend$ui$tweet_embed(id){
var theme = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","theme","ui/theme",-1247877132)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),"tweet-embed",new cljs.core.Keyword(null,"src","src",-1651076051),(""+"https://platform.twitter.com/embed/Tweet.html?id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(theme,"dark"))?"&theme=dark":null))),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),(240),new cljs.core.Keyword(null,"border","border",1444987323),(0)], null),new cljs.core.Keyword(null,"loading","loading",-737050189),"lazy",new cljs.core.Keyword(null,"allow","allow",-1857325745),"encrypted-media; picture-in-picture",new cljs.core.Keyword(null,"allow-full-screen","allow-full-screen",-1219396017),true], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$ui$tweet_embed__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__37791 = cljs.core.first(args__31746__auto__);
var G__37792 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__37791,G__37792) : io.factorhouse.hsx.core.obj_get.call(null,G__37791,G__37792));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"tweet-embed","tweet-embed",1509023185,null),args__31746__auto__),frontend$ui$tweet_embed,args__31746__auto__,null);
}
};
var frontend$ui$tweet_embed = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38058__i = 0, G__38058__a = new Array(arguments.length -  0);
while (G__38058__i < G__38058__a.length) {G__38058__a[G__38058__i] = arguments[G__38058__i + 0]; ++G__38058__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38058__a,0,null);
} 
return frontend$ui$tweet_embed__delegate.call(this,args__31746__auto__);};
frontend$ui$tweet_embed.cljs$lang$maxFixedArity = 0;
frontend$ui$tweet_embed.cljs$lang$applyTo = (function (arglist__38059){
var args__31746__auto__ = cljs.core.seq(arglist__38059);
return frontend$ui$tweet_embed__delegate(args__31746__auto__);
});
frontend$ui$tweet_embed.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$tweet_embed__delegate;
return frontend$ui$tweet_embed;
})()
;
var memo_comp__31747__auto__ = (function (){var G__37793 = comp__31745__auto__;
var G__37794 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__37793,G__37794) : io.factorhouse.hsx.core.react_memo.call(null,G__37793,G__37794));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"tweet-embed");

return comp__31745__auto__;
})();
frontend.ui.icon = logseq.shui.icon.v2.root;
frontend.ui.button_inner = (function (){var render_fn__31744__auto__ = (function() { 
var frontend$ui$button_inner__delegate = function (text,p__37795){
var map__37796 = p__37795;
var map__37796__$1 = cljs.core.__destructure_map(map__37796);
var opts = map__37796__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37796__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37796__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37796__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var button_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37796__$1,new cljs.core.Keyword(null,"button-props","button-props",-392655929));
var background = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37796__$1,new cljs.core.Keyword(null,"background","background",-863952629));
var icon_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37796__$1,new cljs.core.Keyword(null,"icon-props","icon-props",-895221875));
var small_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37796__$1,new cljs.core.Keyword(null,"small?","small?",95242445),false);
var icon_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37796__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37796__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37796__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37796__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var intent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37796__$1,new cljs.core.Keyword(null,"intent","intent",-390846953));
var button_props__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"theme","theme",-1247880880),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"intent","intent",-390846953),new cljs.core.Keyword(null,"small?","small?",95242445),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"icon-props","icon-props",-895221875),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"button-props","button-props",-392655929)], 0)),button_props], 0));
var props = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variant","variant",-424354234),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(theme,new cljs.core.Keyword(null,"gray","gray",1013268388)))?new cljs.core.Keyword(null,"ghost","ghost",-1531157576):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(background,"gray"))?new cljs.core.Keyword(null,"secondary","secondary",-669381460):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(background,"red"))?new cljs.core.Keyword(null,"destructive","destructive",-1587723243):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(intent,"link"))?new cljs.core.Keyword(null,"ghost","ghost",-1531157576):(function (){var or__5142__auto__ = variant;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})()
)))),new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"size","size",1098693007),(cljs.core.truth_(small_QMARK_)?new cljs.core.Keyword(null,"xs","xs",649443341):(function (){var or__5142__auto__ = size;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"sm","sm",-1402575065);
}
})()),new cljs.core.Keyword(null,"icon","icon",1679606541),icon_SINGLEQUOTE_,new cljs.core.Keyword(null,"class","class",-2030961996),((((typeof background === 'string') && ((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["gray",null,"red",null], null), null),background))))))?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" primary-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(background)):class$),new cljs.core.Keyword(null,"muted","muted",1275109029),disabled_QMARK_], null),button_props__$1], 0));
var icon_SINGLEQUOTE__SINGLEQUOTE_ = (cljs.core.truth_(icon_SINGLEQUOTE_)?logseq.shui.ui.tabler_icon(icon_SINGLEQUOTE_,icon_props):null);
var href_QMARK_ = (!(clojure.string.blank_QMARK_(href)));
var text__$1 = ((href_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"inherit"], null)], null),text], null):text
);
var children = (function (){var G__37797 = cljs.core.PersistentVector.EMPTY;
var G__37797__$1 = (cljs.core.truth_(icon_SINGLEQUOTE__SINGLEQUOTE_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__37797,icon_SINGLEQUOTE__SINGLEQUOTE_):G__37797);
if(cljs.core.truth_(text__$1)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__37797__$1,text__$1);
} else {
return G__37797__$1;
}
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(logseq.shui.ui.button,props,children);
};
var frontend$ui$button_inner = function (text,var_args){
var p__37795 = null;
if (arguments.length > 1) {
var G__38060__i = 0, G__38060__a = new Array(arguments.length -  1);
while (G__38060__i < G__38060__a.length) {G__38060__a[G__38060__i] = arguments[G__38060__i + 1]; ++G__38060__i;}
  p__37795 = new cljs.core.IndexedSeq(G__38060__a,0,null);
} 
return frontend$ui$button_inner__delegate.call(this,text,p__37795);};
frontend$ui$button_inner.cljs$lang$maxFixedArity = 1;
frontend$ui$button_inner.cljs$lang$applyTo = (function (arglist__38061){
var text = cljs.core.first(arglist__38061);
var p__37795 = cljs.core.rest(arglist__38061);
return frontend$ui$button_inner__delegate(text,p__37795);
});
frontend$ui$button_inner.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$button_inner__delegate;
return frontend$ui$button_inner;
})()
;
var comp__31745__auto__ = (function() { 
var frontend$ui$button_inner__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__37798 = cljs.core.first(args__31746__auto__);
var G__37799 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__37798,G__37799) : io.factorhouse.hsx.core.obj_get.call(null,G__37798,G__37799));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"button-inner","button-inner",-444459833,null),args__31746__auto__),frontend$ui$button_inner,args__31746__auto__,null);
}
};
var frontend$ui$button_inner = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38062__i = 0, G__38062__a = new Array(arguments.length -  0);
while (G__38062__i < G__38062__a.length) {G__38062__a[G__38062__i] = arguments[G__38062__i + 0]; ++G__38062__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38062__a,0,null);
} 
return frontend$ui$button_inner__delegate.call(this,args__31746__auto__);};
frontend$ui$button_inner.cljs$lang$maxFixedArity = 0;
frontend$ui$button_inner.cljs$lang$applyTo = (function (arglist__38063){
var args__31746__auto__ = cljs.core.seq(arglist__38063);
return frontend$ui$button_inner__delegate(args__31746__auto__);
});
frontend$ui$button_inner.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$button_inner__delegate;
return frontend$ui$button_inner;
})()
;
var memo_comp__31747__auto__ = (function (){var G__37800 = comp__31745__auto__;
var G__37801 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__37800,G__37801) : io.factorhouse.hsx.core.react_memo.call(null,G__37800,G__37801));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"button-inner");

return comp__31745__auto__;
})();
frontend.ui.button = (function frontend$ui$button(var_args){
var args__5882__auto__ = [];
var len__5876__auto___38064 = arguments.length;
var i__5877__auto___38065 = (0);
while(true){
if((i__5877__auto___38065 < len__5876__auto___38064)){
args__5882__auto__.push((arguments[i__5877__auto___38065]));

var G__38066 = (i__5877__auto___38065 + (1));
i__5877__auto___38065 = G__38066;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic = (function (text,p__37804){
var map__37805 = p__37804;
var map__37805__$1 = cljs.core.__destructure_map(map__37805);
var opts = map__37805__$1;
if(cljs.core.map_QMARK_(text)){
return frontend.ui.button_inner(null,text);
} else {
return frontend.ui.button_inner(text,opts);
}
}));

(frontend.ui.button.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.ui.button.cljs$lang$applyTo = (function (seq37802){
var G__37803 = cljs.core.first(seq37802);
var seq37802__$1 = cljs.core.next(seq37802);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37803,seq37802__$1);
}));

frontend.ui.point = (function (){var render_fn__31744__auto__ = (function() {
var frontend$ui$point = null;
var frontend$ui$point__0 = (function (){
return frontend$ui$point.cljs$core$IFn$_invoke$arity$3("bg-red-600",(5),null);
});
var frontend$ui$point__3 = (function (klass,size,p__37806){
var map__37807 = p__37806;
var map__37807__$1 = cljs.core.__destructure_map(map__37807);
var opts = map__37807__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37807__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37807__$1,new cljs.core.Keyword(null,"style","style",-496642736));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ui__point.overflow-hidden.rounded-full.inline-block","span.ui__point.overflow-hidden.rounded-full.inline-block",69975016),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.hiccup__GT_class(klass))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),size,new cljs.core.Keyword(null,"height","height",1025178622),size], null),style], 0))], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996)], 0))], 0))], null);
});
frontend$ui$point = function(klass,size,p__37806){
switch(arguments.length){
case 0:
return frontend$ui$point__0.call(this);
case 3:
return frontend$ui$point__3.call(this,klass,size,p__37806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$ui$point.cljs$core$IFn$_invoke$arity$0 = frontend$ui$point__0;
frontend$ui$point.cljs$core$IFn$_invoke$arity$3 = frontend$ui$point__3;
return frontend$ui$point;
})()
;
var comp__31745__auto__ = (function() { 
var frontend$ui$point__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__37808 = cljs.core.first(args__31746__auto__);
var G__37809 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__37808,G__37809) : io.factorhouse.hsx.core.obj_get.call(null,G__37808,G__37809));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"point","point",-841237505,null),args__31746__auto__),frontend$ui$point,args__31746__auto__,null);
}
};
var frontend$ui$point = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38067__i = 0, G__38067__a = new Array(arguments.length -  0);
while (G__38067__i < G__38067__a.length) {G__38067__a[G__38067__i] = arguments[G__38067__i + 0]; ++G__38067__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38067__a,0,null);
} 
return frontend$ui$point__delegate.call(this,args__31746__auto__);};
frontend$ui$point.cljs$lang$maxFixedArity = 0;
frontend$ui$point.cljs$lang$applyTo = (function (arglist__38068){
var args__31746__auto__ = cljs.core.seq(arglist__38068);
return frontend$ui$point__delegate(args__31746__auto__);
});
frontend$ui$point.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$point__delegate;
return frontend$ui$point;
})()
;
var memo_comp__31747__auto__ = (function (){var G__37810 = comp__31745__auto__;
var G__37811 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__37810,G__37811) : io.factorhouse.hsx.core.react_memo.call(null,G__37810,G__37811));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"point");

return comp__31745__auto__;
})();
frontend.ui.with_shortcut = (function (){var render_fn__31744__auto__ = (function() { 
var frontend$ui$with_shortcut__delegate = function (shortcut_key,position,content,p__37812){
var vec__37813 = p__37812;
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37813,(0),null);
var tooltip_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37813,(1),null);
var shortcut_tooltip_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","shortcut-tooltip?","ui/shortcut-tooltip?",1921963086)], null));
var config = frontend.state.config_for_repo(frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415)], null)),frontend.state.get_current_repo());
var enabled_tooltip_QMARK_ = (cljs.core.truth_(frontend.state.mobile_QMARK_())?false:cljs.core.get.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword("ui","enable-tooltip?","ui/enable-tooltip?",1082007831),true));
var binding = (cljs.core.truth_(shortcut_key)?frontend.modules.shortcut.data_helper.shortcut_binding(shortcut_key):null);
var first_binding = (cljs.core.truth_((function (){var and__5140__auto__ = binding;
if(cljs.core.truth_(and__5140__auto__)){
return (!(binding === false));
} else {
return and__5140__auto__;
}
})())?cljs.core.first(binding):null);
if(cljs.core.truth_((function (){var and__5140__auto__ = enabled_tooltip_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return shortcut_tooltip_QMARK_;
} else {
return and__5140__auto__;
}
})())){
var G__37816 = content;
var G__37817 = (cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.items-start.gap-1","div.flex.flex-col.items-start.gap-1",1132250341),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.opacity-80","span.text-xs.opacity-80",762352849),title], null),(cljs.core.truth_(first_binding)?logseq.shui.ui.shortcut(first_binding,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"glow?","glow?",565751582),false], null)):null)], null):frontend.ui.keyboard_shortcut_from_config(shortcut_key));
var G__37818 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"trigger-props","trigger-props",1619401213),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-child","as-child",1364710342),true], null),new cljs.core.Keyword(null,"trigger-props","trigger-props",1619401213).cljs$core$IFn$_invoke$arity$1(tooltip_opts)], 0)),new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"side","side",389652279),position], null)], null);
return (frontend.ui.tooltip.cljs$core$IFn$_invoke$arity$3 ? frontend.ui.tooltip.cljs$core$IFn$_invoke$arity$3(G__37816,G__37817,G__37818) : frontend.ui.tooltip.call(null,G__37816,G__37817,G__37818));
} else {
return content;
}
};
var frontend$ui$with_shortcut = function (shortcut_key,position,content,var_args){
var p__37812 = null;
if (arguments.length > 3) {
var G__38069__i = 0, G__38069__a = new Array(arguments.length -  3);
while (G__38069__i < G__38069__a.length) {G__38069__a[G__38069__i] = arguments[G__38069__i + 3]; ++G__38069__i;}
  p__37812 = new cljs.core.IndexedSeq(G__38069__a,0,null);
} 
return frontend$ui$with_shortcut__delegate.call(this,shortcut_key,position,content,p__37812);};
frontend$ui$with_shortcut.cljs$lang$maxFixedArity = 3;
frontend$ui$with_shortcut.cljs$lang$applyTo = (function (arglist__38070){
var shortcut_key = cljs.core.first(arglist__38070);
arglist__38070 = cljs.core.next(arglist__38070);
var position = cljs.core.first(arglist__38070);
arglist__38070 = cljs.core.next(arglist__38070);
var content = cljs.core.first(arglist__38070);
var p__37812 = cljs.core.rest(arglist__38070);
return frontend$ui$with_shortcut__delegate(shortcut_key,position,content,p__37812);
});
frontend$ui$with_shortcut.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$with_shortcut__delegate;
return frontend$ui$with_shortcut;
})()
;
var comp__31745__auto__ = (function() { 
var frontend$ui$with_shortcut__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__37819 = cljs.core.first(args__31746__auto__);
var G__37820 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__37819,G__37820) : io.factorhouse.hsx.core.obj_get.call(null,G__37819,G__37820));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"with-shortcut","with-shortcut",-287813123,null),args__31746__auto__),frontend$ui$with_shortcut,args__31746__auto__,null);
}
};
var frontend$ui$with_shortcut = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38071__i = 0, G__38071__a = new Array(arguments.length -  0);
while (G__38071__i < G__38071__a.length) {G__38071__a[G__38071__i] = arguments[G__38071__i + 0]; ++G__38071__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38071__a,0,null);
} 
return frontend$ui$with_shortcut__delegate.call(this,args__31746__auto__);};
frontend$ui$with_shortcut.cljs$lang$maxFixedArity = 0;
frontend$ui$with_shortcut.cljs$lang$applyTo = (function (arglist__38072){
var args__31746__auto__ = cljs.core.seq(arglist__38072);
return frontend$ui$with_shortcut__delegate(args__31746__auto__);
});
frontend$ui$with_shortcut.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$with_shortcut__delegate;
return frontend$ui$with_shortcut;
})()
;
var memo_comp__31747__auto__ = (function (){var G__37821 = comp__31745__auto__;
var G__37822 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__37821,G__37822) : io.factorhouse.hsx.core.react_memo.call(null,G__37821,G__37822));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"with-shortcut");

return comp__31745__auto__;
})();
frontend.ui.progress_bar = (function (){var render_fn__31744__auto__ = (function frontend$ui$progress_bar(width){
if(cljs.core.truth_(cljs.core.integer_QMARK_)){
} else {
throw (new Error("Assert failed: integer?"));
}

if(cljs.core.truth_(width)){
} else {
throw (new Error("Assert failed: width"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full.rounded-full.h-2.5.animate-pulse.bg-gray-06-alpha","div.w-full.rounded-full.h-2.5.animate-pulse.bg-gray-06-alpha",-766950322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-gray-09-alpha.h-2.5.rounded-full","div.bg-gray-09-alpha.h-2.5.rounded-full",-2048681658),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(width)+"%")], null),new cljs.core.Keyword(null,"transition","transition",765692007),"width 1s"], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$ui$progress_bar__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__37823 = cljs.core.first(args__31746__auto__);
var G__37824 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__37823,G__37824) : io.factorhouse.hsx.core.obj_get.call(null,G__37823,G__37824));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"progress-bar","progress-bar",1516654505,null),args__31746__auto__),frontend$ui$progress_bar,args__31746__auto__,null);
}
};
var frontend$ui$progress_bar = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38073__i = 0, G__38073__a = new Array(arguments.length -  0);
while (G__38073__i < G__38073__a.length) {G__38073__a[G__38073__i] = arguments[G__38073__i + 0]; ++G__38073__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38073__a,0,null);
} 
return frontend$ui$progress_bar__delegate.call(this,args__31746__auto__);};
frontend$ui$progress_bar.cljs$lang$maxFixedArity = 0;
frontend$ui$progress_bar.cljs$lang$applyTo = (function (arglist__38074){
var args__31746__auto__ = cljs.core.seq(arglist__38074);
return frontend$ui$progress_bar__delegate(args__31746__auto__);
});
frontend$ui$progress_bar.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$progress_bar__delegate;
return frontend$ui$progress_bar;
})()
;
var memo_comp__31747__auto__ = (function (){var G__37825 = comp__31745__auto__;
var G__37826 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__37825,G__37826) : io.factorhouse.hsx.core.react_memo.call(null,G__37825,G__37826));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"progress-bar");

return comp__31745__auto__;
})();
frontend.ui.progress_bar_with_label = (function (){var render_fn__31744__auto__ = (function frontend$ui$progress_bar_with_label(width,label_left,label_right){
if(cljs.core.truth_(cljs.core.integer_QMARK_)){
} else {
throw (new Error("Assert failed: integer?"));
}

if(cljs.core.truth_(width)){
} else {
throw (new Error("Assert failed: width"));
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-between.mb-1","div.flex.justify-between.mb-1",-1645211939),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-base","span.text-base",-1826341282),label_left], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.font-medium","span.text-sm.font-medium",-2002622722),label_right], null)], null),frontend.ui.progress_bar(width)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$ui$progress_bar_with_label__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__37827 = cljs.core.first(args__31746__auto__);
var G__37828 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__37827,G__37828) : io.factorhouse.hsx.core.obj_get.call(null,G__37827,G__37828));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"progress-bar-with-label","progress-bar-with-label",2117893949,null),args__31746__auto__),frontend$ui$progress_bar_with_label,args__31746__auto__,null);
}
};
var frontend$ui$progress_bar_with_label = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38075__i = 0, G__38075__a = new Array(arguments.length -  0);
while (G__38075__i < G__38075__a.length) {G__38075__a[G__38075__i] = arguments[G__38075__i + 0]; ++G__38075__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38075__a,0,null);
} 
return frontend$ui$progress_bar_with_label__delegate.call(this,args__31746__auto__);};
frontend$ui$progress_bar_with_label.cljs$lang$maxFixedArity = 0;
frontend$ui$progress_bar_with_label.cljs$lang$applyTo = (function (arglist__38076){
var args__31746__auto__ = cljs.core.seq(arglist__38076);
return frontend$ui$progress_bar_with_label__delegate(args__31746__auto__);
});
frontend$ui$progress_bar_with_label.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$progress_bar_with_label__delegate;
return frontend$ui$progress_bar_with_label;
})()
;
var memo_comp__31747__auto__ = (function (){var G__37829 = comp__31745__auto__;
var G__37830 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__37829,G__37830) : io.factorhouse.hsx.core.react_memo.call(null,G__37829,G__37830));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"progress-bar-with-label");

return comp__31745__auto__;
})();
frontend.ui.lazy_loading_placeholder = (function (){var render_fn__31744__auto__ = (function frontend$ui$lazy_loading_placeholder(height){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),height], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$ui$lazy_loading_placeholder__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__37831 = cljs.core.first(args__31746__auto__);
var G__37832 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__37831,G__37832) : io.factorhouse.hsx.core.obj_get.call(null,G__37831,G__37832));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"lazy-loading-placeholder","lazy-loading-placeholder",905398412,null),args__31746__auto__),frontend$ui$lazy_loading_placeholder,args__31746__auto__,null);
}
};
var frontend$ui$lazy_loading_placeholder = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38077__i = 0, G__38077__a = new Array(arguments.length -  0);
while (G__38077__i < G__38077__a.length) {G__38077__a[G__38077__i] = arguments[G__38077__i + 0]; ++G__38077__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38077__a,0,null);
} 
return frontend$ui$lazy_loading_placeholder__delegate.call(this,args__31746__auto__);};
frontend$ui$lazy_loading_placeholder.cljs$lang$maxFixedArity = 0;
frontend$ui$lazy_loading_placeholder.cljs$lang$applyTo = (function (arglist__38078){
var args__31746__auto__ = cljs.core.seq(arglist__38078);
return frontend$ui$lazy_loading_placeholder__delegate(args__31746__auto__);
});
frontend$ui$lazy_loading_placeholder.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$lazy_loading_placeholder__delegate;
return frontend$ui$lazy_loading_placeholder;
})()
;
var memo_comp__31747__auto__ = (function (){var G__37833 = comp__31745__auto__;
var G__37834 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__37833,G__37834) : io.factorhouse.hsx.core.react_memo.call(null,G__37833,G__37834));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"lazy-loading-placeholder");

return comp__31745__auto__;
})();
frontend.ui.lazy_visible_inner = (function (){var render_fn__31744__auto__ = (function frontend$ui$lazy_visible_inner(visible_QMARK_,content_fn,ref,fade_in_QMARK_,placeholder){
var vec__37836 = logseq.shui.hooks.use_bounding_client_rect.cljs$core$IFn$_invoke$arity$0();
var set_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37836,(0),null);
var rect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37836,(1),null);
var placeholder_height = (function (){var or__5142__auto__ = (cljs.core.truth_(rect)?rect.height:null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (24);
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.lazy-visibility","div.lazy-visibility",-895387764),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),set_ref], null),(cljs.core.truth_(visible_QMARK_)?((cljs.core.fn_QMARK_(content_fn))?(cljs.core.truth_(fade_in_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fade-enter","div.fade-enter",-1143985434),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__37835_SHARP_){
var temp__5825__auto__ = (function (){var and__5140__auto__ = p1__37835_SHARP_;
if(cljs.core.truth_(and__5140__auto__)){
return p1__37835_SHARP_.classList;
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var cls = temp__5825__auto__;
return cls.add("fade-enter-active");
} else {
return null;
}
})], null),(content_fn.cljs$core$IFn$_invoke$arity$0 ? content_fn.cljs$core$IFn$_invoke$arity$0() : content_fn.call(null))], null):(content_fn.cljs$core$IFn$_invoke$arity$0 ? content_fn.cljs$core$IFn$_invoke$arity$0() : content_fn.call(null))):null):(function (){var or__5142__auto__ = placeholder;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.ui.lazy_loading_placeholder(placeholder_height);
}
})())], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$ui$lazy_visible_inner__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__37839 = cljs.core.first(args__31746__auto__);
var G__37840 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__37839,G__37840) : io.factorhouse.hsx.core.obj_get.call(null,G__37839,G__37840));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"lazy-visible-inner","lazy-visible-inner",1843502884,null),args__31746__auto__),frontend$ui$lazy_visible_inner,args__31746__auto__,null);
}
};
var frontend$ui$lazy_visible_inner = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38079__i = 0, G__38079__a = new Array(arguments.length -  0);
while (G__38079__i < G__38079__a.length) {G__38079__a[G__38079__i] = arguments[G__38079__i + 0]; ++G__38079__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38079__a,0,null);
} 
return frontend$ui$lazy_visible_inner__delegate.call(this,args__31746__auto__);};
frontend$ui$lazy_visible_inner.cljs$lang$maxFixedArity = 0;
frontend$ui$lazy_visible_inner.cljs$lang$applyTo = (function (arglist__38080){
var args__31746__auto__ = cljs.core.seq(arglist__38080);
return frontend$ui$lazy_visible_inner__delegate(args__31746__auto__);
});
frontend$ui$lazy_visible_inner.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$lazy_visible_inner__delegate;
return frontend$ui$lazy_visible_inner;
})()
;
var memo_comp__31747__auto__ = (function (){var G__37841 = comp__31745__auto__;
var G__37842 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__37841,G__37842) : io.factorhouse.hsx.core.react_memo.call(null,G__37841,G__37842));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"lazy-visible-inner");

return comp__31745__auto__;
})();
frontend.ui.lazy_visible = (function (){var render_fn__31744__auto__ = (function() {
var frontend$ui$lazy_visible = null;
var frontend$ui$lazy_visible__1 = (function (content_fn){
return frontend$ui$lazy_visible.cljs$core$IFn$_invoke$arity$2(content_fn,null);
});
var frontend$ui$lazy_visible__2 = (function (content_fn,p__37843){
var map__37844 = p__37843;
var map__37844__$1 = cljs.core.__destructure_map(map__37844);
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37844__$1,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),false);
var trigger_once_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37844__$1,new cljs.core.Keyword(null,"trigger-once?","trigger-once?",1582103477),true);
var fade_in_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37844__$1,new cljs.core.Keyword(null,"fade-in?","fade-in?",-1662119882),true);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37844__$1,new cljs.core.Keyword(null,"root","root",-448657453),null);
var root_margin = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37844__$1,new cljs.core.Keyword(null,"root-margin","root-margin",-1598874814),"100px 0px");
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37844__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var _debug_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37844__$1,new cljs.core.Keyword(null,"_debug-id","_debug-id",1776601068));
var vec__37845 = logseq.shui.hooks.use_state(initial_state);
var visible_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37845,(0),null);
var set_visible_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37845,(1),null);
var inViewState = (function (){var G__37848 = ({"initialInView": initial_state, "root": root, "rootMargin": root_margin, "triggerOnce": trigger_once_QMARK_, "onChange": (function (in_view_QMARK_,_entry){
return (set_visible_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_visible_BANG_.cljs$core$IFn$_invoke$arity$1(in_view_QMARK_) : set_visible_BANG_.call(null,in_view_QMARK_));
})});
return (frontend.ui.useInView.cljs$core$IFn$_invoke$arity$1 ? frontend.ui.useInView.cljs$core$IFn$_invoke$arity$1(G__37848) : frontend.ui.useInView.call(null,G__37848));
})();
var ref = inViewState.ref;
return frontend.ui.lazy_visible_inner(visible_QMARK_,content_fn,ref,fade_in_QMARK_,placeholder);
});
frontend$ui$lazy_visible = function(content_fn,p__37843){
switch(arguments.length){
case 1:
return frontend$ui$lazy_visible__1.call(this,content_fn);
case 2:
return frontend$ui$lazy_visible__2.call(this,content_fn,p__37843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$ui$lazy_visible.cljs$core$IFn$_invoke$arity$1 = frontend$ui$lazy_visible__1;
frontend$ui$lazy_visible.cljs$core$IFn$_invoke$arity$2 = frontend$ui$lazy_visible__2;
return frontend$ui$lazy_visible;
})()
;
var comp__31745__auto__ = (function() { 
var frontend$ui$lazy_visible__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__37849 = cljs.core.first(args__31746__auto__);
var G__37850 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__37849,G__37850) : io.factorhouse.hsx.core.obj_get.call(null,G__37849,G__37850));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"lazy-visible","lazy-visible",1638085545,null),args__31746__auto__),frontend$ui$lazy_visible,args__31746__auto__,null);
}
};
var frontend$ui$lazy_visible = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38081__i = 0, G__38081__a = new Array(arguments.length -  0);
while (G__38081__i < G__38081__a.length) {G__38081__a[G__38081__i] = arguments[G__38081__i + 0]; ++G__38081__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38081__a,0,null);
} 
return frontend$ui$lazy_visible__delegate.call(this,args__31746__auto__);};
frontend$ui$lazy_visible.cljs$lang$maxFixedArity = 0;
frontend$ui$lazy_visible.cljs$lang$applyTo = (function (arglist__38082){
var args__31746__auto__ = cljs.core.seq(arglist__38082);
return frontend$ui$lazy_visible__delegate(args__31746__auto__);
});
frontend$ui$lazy_visible.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$lazy_visible__delegate;
return frontend$ui$lazy_visible;
})()
;
var memo_comp__31747__auto__ = (function (){var G__37851 = comp__31745__auto__;
var G__37852 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__37851,G__37852) : io.factorhouse.hsx.core.react_memo.call(null,G__37851,G__37852));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"lazy-visible");

return comp__31745__auto__;
})();
frontend.ui.menu_heading = (function (){var render_fn__31744__auto__ = (function() {
var frontend$ui$menu_heading = null;
var frontend$ui$menu_heading__3 = (function (add_heading_fn,auto_heading_fn,rm_heading_fn){
return frontend$ui$menu_heading.cljs$core$IFn$_invoke$arity$4(null,add_heading_fn,auto_heading_fn,rm_heading_fn);
});
var frontend$ui$menu_heading__4 = (function (heading,add_heading_fn,auto_heading_fn,rm_heading_fn){
var font_icon_props = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font?","font?",-1448494423),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"display","display",242065432),"inline-flex",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(18),new cljs.core.Keyword(null,"height","height",1025178622),(18),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"line-height","line-height",1870784992),(1),new cljs.core.Keyword(null,"width","width",-384071477),(18)], null)], null);
var heading_button_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"height","height",1025178622),(30),new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"width","width",-384071477),(30)], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.justify-between.pb-2.pt-1.px-2.items-center","div.flex.flex-row.justify-between.pb-2.pt-1.px-2.items-center",-151027351),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.justify-between.flex-1.mx-2","div.flex.flex-row.items-center.justify-between.flex-1.mx-2",2001134028),(function (){var iter__5628__auto__ = (function frontend$ui$menu_heading_$_iter__37853(s__37854){
return (new cljs.core.LazySeq(null,(function (){
var s__37854__$1 = s__37854;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37854__$1);
if(temp__5825__auto__){
var s__37854__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37854__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__37854__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__37856 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__37855 = (0);
while(true){
if((i__37855 < size__5627__auto__)){
var i = cljs.core._nth(c__5626__auto__,i__37855);
cljs.core.chunk_append(b__37856,cljs.core.with_meta(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.ui.button,"",new cljs.core.Keyword(null,"icon","icon",1679606541),(""+"h-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","heading","editor/heading",-71763414),i], 0)),new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["to-heading-button",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"is-active","is-active",-1424968720),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(heading,i)], null)], null)),new cljs.core.Keyword(null,"icon-props","icon-props",-895221875),font_icon_props,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__37855,i,c__5626__auto__,size__5627__auto__,b__37856,s__37854__$2,temp__5825__auto__,font_icon_props,heading_button_style){
return (function (){
return (add_heading_fn.cljs$core$IFn$_invoke$arity$1 ? add_heading_fn.cljs$core$IFn$_invoke$arity$1(i) : add_heading_fn.call(null,i));
});})(i__37855,i,c__5626__auto__,size__5627__auto__,b__37856,s__37854__$2,temp__5825__auto__,font_icon_props,heading_button_style))
,new cljs.core.Keyword(null,"style","style",-496642736),heading_button_style,new cljs.core.Keyword(null,"variant","variant",-424354234),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(heading,i))?null:new cljs.core.Keyword(null,"ghost","ghost",-1531157576)),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"icon","icon",1679606541)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"key-h-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i))], null)));

var G__38083 = (i__37855 + (1));
i__37855 = G__38083;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37856),frontend$ui$menu_heading_$_iter__37853(cljs.core.chunk_rest(s__37854__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37856),null);
}
} else {
var i = cljs.core.first(s__37854__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.ui.button,"",new cljs.core.Keyword(null,"icon","icon",1679606541),(""+"h-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","heading","editor/heading",-71763414),i], 0)),new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["to-heading-button",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"is-active","is-active",-1424968720),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(heading,i)], null)], null)),new cljs.core.Keyword(null,"icon-props","icon-props",-895221875),font_icon_props,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i,s__37854__$2,temp__5825__auto__,font_icon_props,heading_button_style){
return (function (){
return (add_heading_fn.cljs$core$IFn$_invoke$arity$1 ? add_heading_fn.cljs$core$IFn$_invoke$arity$1(i) : add_heading_fn.call(null,i));
});})(i,s__37854__$2,temp__5825__auto__,font_icon_props,heading_button_style))
,new cljs.core.Keyword(null,"style","style",-496642736),heading_button_style,new cljs.core.Keyword(null,"variant","variant",-424354234),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(heading,i))?null:new cljs.core.Keyword(null,"ghost","ghost",-1531157576)),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"icon","icon",1679606541)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"key-h-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i))], null)),frontend$ui$menu_heading_$_iter__37853(cljs.core.rest(s__37854__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(7)));
})(),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"icon","icon",1679606541),"h-auto",new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["to-heading-button",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"is-active","is-active",-1424968720),heading === true], null)], null)),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","auto-heading","editor/auto-heading",1853626222)], 0)),new cljs.core.Keyword(null,"icon-props","icon-props",-895221875),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extension?","extension?",-1574402873),true], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),auto_heading_fn,new cljs.core.Keyword(null,"style","style",-496642736),heading_button_style,new cljs.core.Keyword(null,"variant","variant",-424354234),((heading === true)?null:new cljs.core.Keyword(null,"ghost","ghost",-1531157576)),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"icon","icon",1679606541)], 0)),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"icon","icon",1679606541),"heading-off",new cljs.core.Keyword(null,"class","class",-2030961996),"to-heading-button",new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","remove-heading","editor/remove-heading",141888794)], 0)),new cljs.core.Keyword(null,"icon-props","icon-props",-895221875),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extension?","extension?",-1574402873),true], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),rm_heading_fn,new cljs.core.Keyword(null,"style","style",-496642736),heading_button_style,new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"icon","icon",1679606541)], 0))], null)], null);
});
frontend$ui$menu_heading = function(heading,add_heading_fn,auto_heading_fn,rm_heading_fn){
switch(arguments.length){
case 3:
return frontend$ui$menu_heading__3.call(this,heading,add_heading_fn,auto_heading_fn);
case 4:
return frontend$ui$menu_heading__4.call(this,heading,add_heading_fn,auto_heading_fn,rm_heading_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$ui$menu_heading.cljs$core$IFn$_invoke$arity$3 = frontend$ui$menu_heading__3;
frontend$ui$menu_heading.cljs$core$IFn$_invoke$arity$4 = frontend$ui$menu_heading__4;
return frontend$ui$menu_heading;
})()
;
var comp__31745__auto__ = (function() { 
var frontend$ui$menu_heading__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__37857 = cljs.core.first(args__31746__auto__);
var G__37858 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__37857,G__37858) : io.factorhouse.hsx.core.obj_get.call(null,G__37857,G__37858));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"menu-heading","menu-heading",-1332486715,null),args__31746__auto__),frontend$ui$menu_heading,args__31746__auto__,null);
}
};
var frontend$ui$menu_heading = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38084__i = 0, G__38084__a = new Array(arguments.length -  0);
while (G__38084__i < G__38084__a.length) {G__38084__a[G__38084__i] = arguments[G__38084__i + 0]; ++G__38084__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38084__a,0,null);
} 
return frontend$ui$menu_heading__delegate.call(this,args__31746__auto__);};
frontend$ui$menu_heading.cljs$lang$maxFixedArity = 0;
frontend$ui$menu_heading.cljs$lang$applyTo = (function (arglist__38085){
var args__31746__auto__ = cljs.core.seq(arglist__38085);
return frontend$ui$menu_heading__delegate(args__31746__auto__);
});
frontend$ui$menu_heading.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$menu_heading__delegate;
return frontend$ui$menu_heading;
})()
;
var memo_comp__31747__auto__ = (function (){var G__37859 = comp__31745__auto__;
var G__37860 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__37859,G__37860) : io.factorhouse.hsx.core.react_memo.call(null,G__37859,G__37860));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"menu-heading");

return comp__31745__auto__;
})();
frontend.ui.tooltip = (function (){var render_fn__31744__auto__ = (function() { 
var frontend$ui$tooltip__delegate = function (trigger,tooltip_content,p__37861){
var map__37862 = p__37861;
var map__37862__$1 = cljs.core.__destructure_map(map__37862);
var portal_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37862__$1,new cljs.core.Keyword(null,"portal?","portal?",-167584340));
var root_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37862__$1,new cljs.core.Keyword(null,"root-props","root-props",-1015460595));
var trigger_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37862__$1,new cljs.core.Keyword(null,"trigger-props","trigger-props",1619401213));
var content_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37862__$1,new cljs.core.Keyword(null,"content-props","content-props",687449284));
var G__37863 = (function (){var G__37864 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(root_props,new cljs.core.Keyword(null,"key","key",-1516042587),"tooltip");
var G__37865 = (function (){var G__37867 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-child","as-child",1364710342),true], null),trigger_props], 0));
var G__37868 = trigger;
return (logseq.shui.ui.tooltip_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.tooltip_trigger.cljs$core$IFn$_invoke$arity$2(G__37867,G__37868) : logseq.shui.ui.tooltip_trigger.call(null,G__37867,G__37868));
})();
var G__37866 = (((!(portal_QMARK_ === false)))?(function (){var G__37869 = (logseq.shui.ui.tooltip_content.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.tooltip_content.cljs$core$IFn$_invoke$arity$2(content_props,tooltip_content) : logseq.shui.ui.tooltip_content.call(null,content_props,tooltip_content));
return (logseq.shui.ui.tooltip_portal.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.tooltip_portal.cljs$core$IFn$_invoke$arity$1(G__37869) : logseq.shui.ui.tooltip_portal.call(null,G__37869));
})():(logseq.shui.ui.tooltip_content.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.tooltip_content.cljs$core$IFn$_invoke$arity$2(content_props,tooltip_content) : logseq.shui.ui.tooltip_content.call(null,content_props,tooltip_content)));
return (logseq.shui.ui.tooltip.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.tooltip.cljs$core$IFn$_invoke$arity$3(G__37864,G__37865,G__37866) : logseq.shui.ui.tooltip.call(null,G__37864,G__37865,G__37866));
})();
return (logseq.shui.ui.tooltip_provider.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.tooltip_provider.cljs$core$IFn$_invoke$arity$1(G__37863) : logseq.shui.ui.tooltip_provider.call(null,G__37863));
};
var frontend$ui$tooltip = function (trigger,tooltip_content,var_args){
var p__37861 = null;
if (arguments.length > 2) {
var G__38086__i = 0, G__38086__a = new Array(arguments.length -  2);
while (G__38086__i < G__38086__a.length) {G__38086__a[G__38086__i] = arguments[G__38086__i + 2]; ++G__38086__i;}
  p__37861 = new cljs.core.IndexedSeq(G__38086__a,0,null);
} 
return frontend$ui$tooltip__delegate.call(this,trigger,tooltip_content,p__37861);};
frontend$ui$tooltip.cljs$lang$maxFixedArity = 2;
frontend$ui$tooltip.cljs$lang$applyTo = (function (arglist__38087){
var trigger = cljs.core.first(arglist__38087);
arglist__38087 = cljs.core.next(arglist__38087);
var tooltip_content = cljs.core.first(arglist__38087);
var p__37861 = cljs.core.rest(arglist__38087);
return frontend$ui$tooltip__delegate(trigger,tooltip_content,p__37861);
});
frontend$ui$tooltip.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$tooltip__delegate;
return frontend$ui$tooltip;
})()
;
var comp__31745__auto__ = (function() { 
var frontend$ui$tooltip__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__37870 = cljs.core.first(args__31746__auto__);
var G__37871 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__37870,G__37871) : io.factorhouse.hsx.core.obj_get.call(null,G__37870,G__37871));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),args__31746__auto__),frontend$ui$tooltip,args__31746__auto__,null);
}
};
var frontend$ui$tooltip = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38088__i = 0, G__38088__a = new Array(arguments.length -  0);
while (G__38088__i < G__38088__a.length) {G__38088__a[G__38088__i] = arguments[G__38088__i + 0]; ++G__38088__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38088__a,0,null);
} 
return frontend$ui$tooltip__delegate.call(this,args__31746__auto__);};
frontend$ui$tooltip.cljs$lang$maxFixedArity = 0;
frontend$ui$tooltip.cljs$lang$applyTo = (function (arglist__38089){
var args__31746__auto__ = cljs.core.seq(arglist__38089);
return frontend$ui$tooltip__delegate(args__31746__auto__);
});
frontend$ui$tooltip.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$tooltip__delegate;
return frontend$ui$tooltip;
})()
;
var memo_comp__31747__auto__ = (function (){var G__37872 = comp__31745__auto__;
var G__37873 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__37872,G__37873) : io.factorhouse.hsx.core.react_memo.call(null,G__37872,G__37873));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"tooltip");

return comp__31745__auto__;
})();
frontend.ui.date_picker_root_selector = ".ls-editor-date-picker, .ls-property-date-picker";
frontend.ui.date_picker_form_control_selector = "input, textarea, select, [contenteditable='true']";
/**
 * True when Enter should stay in a date-picker form control instead of confirming the date.
 */
frontend.ui.date_picker_form_target_QMARK_ = (function frontend$ui$date_picker_form_target_QMARK_(e){
var target = e.target;
return cljs.core.boolean$((function (){var and__5140__auto__ = target;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = target.closest(frontend.ui.date_picker_root_selector);
if(cljs.core.truth_(and__5140__auto____$1)){
var or__5142__auto__ = target.closest(frontend.ui.date_picker_form_control_selector);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (function (){var G__37874 = target;
var G__37874__$1 = (((G__37874 == null))?null:G__37874.closest("[role='combobox']"));
var G__37874__$2 = (((G__37874__$1 == null))?null:G__37874__$1.getAttribute("aria-expanded"));
if((G__37874__$2 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__37874__$2,"true");
}
})();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var and__5140__auto____$2 = target.closest("button");
if(cljs.core.truth_(and__5140__auto____$2)){
return cljs.core.not(target.closest("[role='gridcell']"));
} else {
return and__5140__auto____$2;
}
}
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})());
});
frontend.ui.DelDateButton = (function (){var render_fn__31744__auto__ = (function frontend$ui$DelDateButton(on_delete){
var G__37875 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"class","class",-2030961996),"del-date-btn h-8 w-9 bg-transparent !p-0 !px-0 !py-0 opacity-80 hover:opacity-100",new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_delete], null);
var G__37876 = logseq.shui.ui.tabler_icon("trash",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(16)], null));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__37875,G__37876) : logseq.shui.ui.button.call(null,G__37875,G__37876));
});
var comp__31745__auto__ = (function() { 
var frontend$ui$DelDateButton__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__37877 = cljs.core.first(args__31746__auto__);
var G__37878 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__37877,G__37878) : io.factorhouse.hsx.core.obj_get.call(null,G__37877,G__37878));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"DelDateButton","DelDateButton",-1551164491,null),args__31746__auto__),frontend$ui$DelDateButton,args__31746__auto__,null);
}
};
var frontend$ui$DelDateButton = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38090__i = 0, G__38090__a = new Array(arguments.length -  0);
while (G__38090__i < G__38090__a.length) {G__38090__a[G__38090__i] = arguments[G__38090__i + 0]; ++G__38090__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38090__a,0,null);
} 
return frontend$ui$DelDateButton__delegate.call(this,args__31746__auto__);};
frontend$ui$DelDateButton.cljs$lang$maxFixedArity = 0;
frontend$ui$DelDateButton.cljs$lang$applyTo = (function (arglist__38091){
var args__31746__auto__ = cljs.core.seq(arglist__38091);
return frontend$ui$DelDateButton__delegate(args__31746__auto__);
});
frontend$ui$DelDateButton.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$DelDateButton__delegate;
return frontend$ui$DelDateButton;
})()
;
var memo_comp__31747__auto__ = (function (){var G__37879 = comp__31745__auto__;
var G__37880 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__37879,G__37880) : io.factorhouse.hsx.core.react_memo.call(null,G__37879,G__37880));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"DelDateButton");

return comp__31745__auto__;
})();
/**
 * The next-month nav button followed by the delete button, both compact items
 * in the calendar's nav row.
 */
frontend.ui.next_month_button_with_del = (function frontend$ui$next_month_button_with_del(props,on_delete){
return module$node_modules$react$index.createElement(module$node_modules$react$index.Fragment,null,module$node_modules$react$index.createElement("button",props),frontend.ui.DelDateButton(on_delete));
});
if((typeof frontend !== 'undefined') && (typeof frontend.ui !== 'undefined') && (typeof frontend.ui.month_values !== 'undefined')){
} else {
frontend.ui.month_values = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"January","January",1371836485),new cljs.core.Keyword(null,"February","February",-1121382977),new cljs.core.Keyword(null,"March","March",-1927014290),new cljs.core.Keyword(null,"April","April",2129469609),new cljs.core.Keyword(null,"May","May",291127633),new cljs.core.Keyword(null,"June","June",-239852188),new cljs.core.Keyword(null,"July","July",22844502),new cljs.core.Keyword(null,"August","August",1477870381),new cljs.core.Keyword(null,"September","September",-1384246246),new cljs.core.Keyword(null,"October","October",1442498414),new cljs.core.Keyword(null,"November","November",1309168199),new cljs.core.Keyword(null,"December","December",-997702713)], null);
}
frontend.ui.get_month_label = (function frontend$ui$get_month_label(n){
if(typeof n === 'number'){
return frontend.context.i18n.locale_format_date.cljs$core$IFn$_invoke$arity$2((new Date((2000),n,(1))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"month","month",-1960248533),"long"], null));
} else {
return null;
}
});
frontend.ui.day_picker_change_event = (function frontend$ui$day_picker_change_event(value){
var e = (new Event("change"));
Object.defineProperty(e,"target",({"value": ({"value": value}), "enumerable": true}));

return e;
});
frontend.ui.date_year_month_select = (function (){var render_fn__31744__auto__ = (function frontend$ui$date_year_month_select(p__37881){
var map__37882 = p__37881;
var map__37882__$1 = cljs.core.__destructure_map(map__37882);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37882__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37882__$1,new cljs.core.Keyword(null,"className","className",-1983287057));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37882__$1,new cljs.core.Keyword(null,"value","value",305978217));
var onChange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37882__$1,new cljs.core.Keyword(null,"onChange","onChange",-312891301));
var _children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37882__$1,new cljs.core.Keyword(null,"_children","_children",1993687667));
var year_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"years")) || (((typeof className === 'string') && (clojure.string.includes_QMARK_(className,"year")))));
var vec__37883 = logseq.shui.hooks.use_state((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));
var year_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37883,(0),null);
var set_year_value_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37883,(1),null);
logseq.shui.hooks.use_effect_BANG_((function (){
var G__37886_38092 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
(set_year_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_year_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__37886_38092) : set_year_value_BANG_.call(null,G__37886_38092));

return null;
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.months-years-nav","div.months-years-nav",-454544618),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),className], null),((year_QMARK_)?(function (){var G__37887 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149)],[(1),(function (e){
var G__37888 = e.target;
if((G__37888 == null)){
return null;
} else {
return G__37888.select();
}
}),year_value,(function (_){
if(cljs.core.truth_(cljs.core.re_matches(/\d{4}/,year_value))){
return null;
} else {
var G__37889 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
return (set_year_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_year_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__37889) : set_year_value_BANG_.call(null,G__37889));
}
}),"number",(function (e){
var G__37890 = e.target;
if((G__37890 == null)){
return null;
} else {
return G__37890.select();
}
}),(9999),"ls-date-year-input h-8 !w-[3.25rem] !px-2 !py-0",(function (e){
var input_value = frontend.util.evalue(e);
(set_year_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_year_value_BANG_.cljs$core$IFn$_invoke$arity$1(input_value) : set_year_value_BANG_.call(null,input_value));

if(cljs.core.truth_(cljs.core.re_matches(/\d{4}/,input_value))){
var G__37891 = frontend.ui.day_picker_change_event(input_value);
return (onChange.cljs$core$IFn$_invoke$arity$1 ? onChange.cljs$core$IFn$_invoke$arity$1(G__37891) : onChange.call(null,G__37891));
} else {
return null;
}
})]);
return (logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1(G__37887) : logseq.shui.ui.input.call(null,G__37887));
})():(function (){var G__37892 = (function (){var G__37894 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-child","as-child",1364710342),true], null);
var G__37895 = (function (){var G__37896 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"class","class",-2030961996),"ls-date-month-select !px-3 !py-0 h-8 !w-24 justify-start border border-input rounded-md",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065)], null);
var G__37897 = frontend.ui.get_month_label(value);
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__37896,G__37897) : logseq.shui.ui.button.call(null,G__37896,G__37897));
})();
return (logseq.shui.ui.dropdown_menu_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_trigger.cljs$core$IFn$_invoke$arity$2(G__37894,G__37895) : logseq.shui.ui.dropdown_menu_trigger.call(null,G__37894,G__37895));
})();
var G__37893 = (function (){var G__37898 = (function (){var iter__5628__auto__ = (function frontend$ui$date_year_month_select_$_iter__37899(s__37900){
return (new cljs.core.LazySeq(null,(function (){
var s__37900__$1 = s__37900;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37900__$1);
if(temp__5825__auto__){
var s__37900__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37900__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__37900__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__37902 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__37901 = (0);
while(true){
if((i__37901 < size__5627__auto__)){
var vec__37903 = cljs.core._nth(c__5626__auto__,i__37901);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37903,(0),null);
var _month = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37903,(1),null);
var label = frontend.ui.get_month_label(idx);
cljs.core.chunk_append(b__37902,(function (){var G__37906 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"class","class",-2030961996),"ls-date-month-option",new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (i__37901,label,vec__37903,idx,_month,c__5626__auto__,size__5627__auto__,b__37902,s__37900__$2,temp__5825__auto__,G__37892,year_QMARK_,vec__37883,year_value,set_year_value_BANG_,map__37882,map__37882__$1,name,className,value,onChange,_children){
return (function (){
var G__37908 = frontend.ui.day_picker_change_event(idx);
return (onChange.cljs$core$IFn$_invoke$arity$1 ? onChange.cljs$core$IFn$_invoke$arity$1(G__37908) : onChange.call(null,G__37908));
});})(i__37901,label,vec__37903,idx,_month,c__5626__auto__,size__5627__auto__,b__37902,s__37900__$2,temp__5825__auto__,G__37892,year_QMARK_,vec__37883,year_value,set_year_value_BANG_,map__37882,map__37882__$1,name,className,value,onChange,_children))
], null);
var G__37907 = label;
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__37906,G__37907) : logseq.shui.ui.dropdown_menu_item.call(null,G__37906,G__37907));
})());

var G__38093 = (i__37901 + (1));
i__37901 = G__38093;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37902),frontend$ui$date_year_month_select_$_iter__37899(cljs.core.chunk_rest(s__37900__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37902),null);
}
} else {
var vec__37909 = cljs.core.first(s__37900__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37909,(0),null);
var _month = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37909,(1),null);
var label = frontend.ui.get_month_label(idx);
return cljs.core.cons((function (){var G__37912 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"class","class",-2030961996),"ls-date-month-option",new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (label,vec__37909,idx,_month,s__37900__$2,temp__5825__auto__,G__37892,year_QMARK_,vec__37883,year_value,set_year_value_BANG_,map__37882,map__37882__$1,name,className,value,onChange,_children){
return (function (){
var G__37914 = frontend.ui.day_picker_change_event(idx);
return (onChange.cljs$core$IFn$_invoke$arity$1 ? onChange.cljs$core$IFn$_invoke$arity$1(G__37914) : onChange.call(null,G__37914));
});})(label,vec__37909,idx,_month,s__37900__$2,temp__5825__auto__,G__37892,year_QMARK_,vec__37883,year_value,set_year_value_BANG_,map__37882,map__37882__$1,name,className,value,onChange,_children))
], null);
var G__37913 = label;
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__37912,G__37913) : logseq.shui.ui.dropdown_menu_item.call(null,G__37912,G__37913));
})(),frontend$ui$date_year_month_select_$_iter__37899(cljs.core.rest(s__37900__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(medley.core.indexed.cljs$core$IFn$_invoke$arity$1(frontend.ui.month_values));
})();
return (logseq.shui.ui.dropdown_menu_content.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dropdown_menu_content.cljs$core$IFn$_invoke$arity$1(G__37898) : logseq.shui.ui.dropdown_menu_content.call(null,G__37898));
})();
return (logseq.shui.ui.dropdown_menu.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu.cljs$core$IFn$_invoke$arity$2(G__37892,G__37893) : logseq.shui.ui.dropdown_menu.call(null,G__37892,G__37893));
})())], null);
});
var comp__31745__auto__ = (function() { 
var frontend$ui$date_year_month_select__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__37915 = cljs.core.first(args__31746__auto__);
var G__37916 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__37915,G__37916) : io.factorhouse.hsx.core.obj_get.call(null,G__37915,G__37916));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"date-year-month-select","date-year-month-select",-1322742498,null),args__31746__auto__),frontend$ui$date_year_month_select,args__31746__auto__,null);
}
};
var frontend$ui$date_year_month_select = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38094__i = 0, G__38094__a = new Array(arguments.length -  0);
while (G__38094__i < G__38094__a.length) {G__38094__a[G__38094__i] = arguments[G__38094__i + 0]; ++G__38094__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38094__a,0,null);
} 
return frontend$ui$date_year_month_select__delegate.call(this,args__31746__auto__);};
frontend$ui$date_year_month_select.cljs$lang$maxFixedArity = 0;
frontend$ui$date_year_month_select.cljs$lang$applyTo = (function (arglist__38095){
var args__31746__auto__ = cljs.core.seq(arglist__38095);
return frontend$ui$date_year_month_select__delegate(args__31746__auto__);
});
frontend$ui$date_year_month_select.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$date_year_month_select__delegate;
return frontend$ui$date_year_month_select;
})()
;
var memo_comp__31747__auto__ = (function (){var G__37917 = comp__31745__auto__;
var G__37918 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__37917,G__37918) : io.factorhouse.hsx.core.react_memo.call(null,G__37917,G__37918));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"date-year-month-select");

return comp__31745__auto__;
})();
frontend.ui.single_calendar = (function frontend$ui$single_calendar(p__37921){
var map__37922 = p__37921;
var map__37922__$1 = cljs.core.__destructure_map(map__37922);
var opts = map__37922__$1;
var del_btn_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37922__$1,new cljs.core.Keyword(null,"del-btn?","del-btn?",-1094924362));
var on_delete = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37922__$1,new cljs.core.Keyword(null,"on-delete","on-delete",-1882190355));
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37922__$1,new cljs.core.Keyword(null,"on-select","on-select",-192407950));
var on_day_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37922__$1,new cljs.core.Keyword(null,"on-day-click","on-day-click",1918658076));
var G__37923 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"toYear","toYear",-1218322336),new cljs.core.Keyword(null,"formatters","formatters",-1875637118),new cljs.core.Keyword(null,"caption-layout","caption-layout",2068081731),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"on-day-key-down","on-day-key-down",-466083153),new cljs.core.Keyword(null,"weekStartsOn","weekStartsOn",36670929),new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"class-names","class-names",1257115065),new cljs.core.Keyword(null,"fromYear","fromYear",1259124862)],[(3000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatWeekdayName","formatWeekdayName",2079235152),(function (weekday,_){
return frontend.context.i18n.locale_format_date.cljs$core$IFn$_invoke$arity$2(weekday,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"weekday","weekday",-1413046442),"short"], null));
})], null),"dropdown","single",(function (d,_,e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",e.key)){
var on_select_SINGLEQUOTE_ = (function (){var or__5142__auto__ = on_select;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return on_day_click;
}
})();
return (on_select_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? on_select_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(d) : on_select_SINGLEQUOTE_.call(null,d));
} else {
return null;
}
}),cljs.core.mod((frontend.state.get_start_of_week() + (1)),(7)),(function (){var G__37924 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Dropdown","Dropdown",405115910),(function (p1__37919_SHARP_){
return frontend.ui.date_year_month_select(cljs_bean.core.bean.cljs$core$IFn$_invoke$arity$1(p1__37919_SHARP_));
})], null);
if(cljs.core.truth_(del_btn_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37924,new cljs.core.Keyword(null,"NextMonthButton","NextMonthButton",-400812099),(function (p1__37920_SHARP_){
return frontend.ui.next_month_button_with_del(p1__37920_SHARP_,on_delete);
}));
} else {
return G__37924;
}
})(),(cljs.core.truth_(del_btn_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"root","root",-448657453),"has-del-btn",new cljs.core.Keyword(null,"nav","nav",719540477),"absolute left-[160px] top-1 z-10 flex items-center gap-1"], null):null),(1000)]),opts], 0));
return (logseq.shui.ui.calendar.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.calendar.cljs$core$IFn$_invoke$arity$1(G__37923) : logseq.shui.ui.calendar.call(null,G__37923));
});
frontend.ui.get_current_hh_mm = (function frontend$ui$get_current_hh_mm(){
var current_time_s = cljs.core.first((new Date()).toTimeString().split(" "));
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(current_time_s,(0),(cljs.core.count(current_time_s) - (3)));
});
frontend.ui.time_picker = (function (){var render_fn__31744__auto__ = (function frontend$ui$time_picker(p__37925){
var map__37926 = p__37925;
var map__37926__$1 = cljs.core.__destructure_map(map__37926);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37926__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var default_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37926__$1,new cljs.core.Keyword(null,"default-value","default-value",232220170));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.gap-2.mx-3.mb-3","div.flex.flex-row.items-center.gap-2.mx-3.mb-3",-421930412),(function (){var G__37927 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"time-picker",new cljs.core.Keyword(null,"type","type",1174270348),"time",new cljs.core.Keyword(null,"class","class",-2030961996),"!py-0 !w-max !h-8",new cljs.core.Keyword(null,"default-value","default-value",232220170),(function (){var or__5142__auto__ = default_value;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "00:00";
}
})(),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (e){
var G__37928 = frontend.util.evalue(e);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__37928) : on_change.call(null,G__37928));
})], null);
return (logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1(G__37927) : logseq.shui.ui.input.call(null,G__37927));
})(),(function (){var G__37929 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),"text-muted-foreground",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var value = frontend.ui.get_current_hh_mm();
(goog.dom.getElement("time-picker").value = value);

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(value) : on_change.call(null,value));
})], null);
var G__37930 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","use-current-time","ui/use-current-time",663030530)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__37929,G__37930) : logseq.shui.ui.button.call(null,G__37929,G__37930));
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$ui$time_picker__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__37931 = cljs.core.first(args__31746__auto__);
var G__37932 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__37931,G__37932) : io.factorhouse.hsx.core.obj_get.call(null,G__37931,G__37932));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"time-picker","time-picker",-2113847278,null),args__31746__auto__),frontend$ui$time_picker,args__31746__auto__,null);
}
};
var frontend$ui$time_picker = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38096__i = 0, G__38096__a = new Array(arguments.length -  0);
while (G__38096__i < G__38096__a.length) {G__38096__a[G__38096__i] = arguments[G__38096__i + 0]; ++G__38096__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38096__a,0,null);
} 
return frontend$ui$time_picker__delegate.call(this,args__31746__auto__);};
frontend$ui$time_picker.cljs$lang$maxFixedArity = 0;
frontend$ui$time_picker.cljs$lang$applyTo = (function (arglist__38097){
var args__31746__auto__ = cljs.core.seq(arglist__38097);
return frontend$ui$time_picker__delegate(args__31746__auto__);
});
frontend$ui$time_picker.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$time_picker__delegate;
return frontend$ui$time_picker;
})()
;
var memo_comp__31747__auto__ = (function (){var G__37933 = comp__31745__auto__;
var G__37934 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__37933,G__37934) : io.factorhouse.hsx.core.react_memo.call(null,G__37933,G__37934));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"time-picker");

return comp__31745__auto__;
})();
frontend.ui.nlp_calendar = (function (){var render_fn__31744__auto__ = (function frontend$ui$nlp_calendar(p__37935){
var map__37936 = p__37935;
var map__37936__$1 = cljs.core.__destructure_map(map__37936);
var opts = map__37936__$1;
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37936__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37936__$1,new cljs.core.Keyword(null,"on-select","on-select",-192407950));
var on_day_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37936__$1,new cljs.core.Keyword(null,"on-day-click","on-day-click",1918658076));
var default_on_select = (function (){var or__5142__auto__ = on_select;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return on_day_click;
}
})();
var on_select_SINGLEQUOTE_ = (cljs.core.truth_(new cljs.core.Keyword(null,"datetime?","datetime?",-1173480100).cljs$core$IFn$_invoke$arity$1(opts))?(function (date,value){
var value__$1 = (function (){var or__5142__auto__ = (function (){var and__5140__auto__ = typeof value === 'string';
if(and__5140__auto__){
return value;
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return goog.dom.getElement("time-picker").value;
}
})();
var vec__37937 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value__$1,":");
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37937,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37937,(1),null);
if(cljs.core.truth_((function (){var and__5140__auto__ = date;
if(cljs.core.truth_(and__5140__auto__)){
return selected;
} else {
return and__5140__auto__;
}
})())){
date.setHours(h,m,(0));
} else {
}

return (default_on_select.cljs$core$IFn$_invoke$arity$1 ? default_on_select.cljs$core$IFn$_invoke$arity$1(date) : default_on_select.call(null,date));
}):default_on_select);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-nlp-calendar","div.ls-nlp-calendar",-1596560383),frontend.ui.single_calendar(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"on-select","on-select",-192407950),on_select_SINGLEQUOTE_)),(cljs.core.truth_(new cljs.core.Keyword(null,"datetime?","datetime?",-1173480100).cljs$core$IFn$_invoke$arity$1(opts))?frontend.ui.time_picker((function (){var G__37940 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (value){
return (on_select_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? on_select_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(selected,value) : on_select_SINGLEQUOTE_.call(null,selected,value));
})], null);
if(cljs.core.truth_(selected)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37940,new cljs.core.Keyword(null,"default-value","default-value",232220170),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__37943 = selected.getHours();
return (frontend.util.zero_pad.cljs$core$IFn$_invoke$arity$1 ? frontend.util.zero_pad.cljs$core$IFn$_invoke$arity$1(G__37943) : frontend.util.zero_pad.call(null,G__37943));
})())+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__37944 = selected.getMinutes();
return (frontend.util.zero_pad.cljs$core$IFn$_invoke$arity$1 ? frontend.util.zero_pad.cljs$core$IFn$_invoke$arity$1(G__37944) : frontend.util.zero_pad.call(null,G__37944));
})())));
} else {
return G__37940;
}
})()):null),(function (){var G__37945 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","date-natural-language-placeholder","ui/date-natural-language-placeholder",-1322400993)], 0)),new cljs.core.Keyword(null,"class","class",-2030961996),"mx-3 mb-3",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"initial",new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1)], null),new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),((frontend.util.chrome_QMARK_())?"chrome-off":"off"),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),frontend.util.stop_propagation,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",frontend.util.ekey(e))){
var value = frontend.util.evalue(e);
if(clojure.string.blank_QMARK_(value)){
return null;
} else {
var result = frontend.date.nld_parse(value);
var temp__5823__auto__ = (function (){var and__5140__auto__ = result;
if(cljs.core.truth_(and__5140__auto__)){
var G__37946 = (new goog.date.DateTime());
G__37946.setTime(result.getTime());

return G__37946;
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var date = temp__5823__auto__;
var on_select_SINGLEQUOTE___$1 = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"on-day-click","on-day-click",1918658076).cljs$core$IFn$_invoke$arity$1(opts);
}
})();
return (on_select_SINGLEQUOTE___$1.cljs$core$IFn$_invoke$arity$1 ? on_select_SINGLEQUOTE___$1.cljs$core$IFn$_invoke$arity$1(date) : on_select_SINGLEQUOTE___$1.call(null,date));
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("date","invalid-date-warning","date/invalid-date-warning",-1390141350),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));
}
}
} else {
return null;
}
})], null);
return (logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1(G__37945) : logseq.shui.ui.input.call(null,G__37945));
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$ui$nlp_calendar__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__37947 = cljs.core.first(args__31746__auto__);
var G__37948 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__37947,G__37948) : io.factorhouse.hsx.core.obj_get.call(null,G__37947,G__37948));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"nlp-calendar","nlp-calendar",709199315,null),args__31746__auto__),frontend$ui$nlp_calendar,args__31746__auto__,null);
}
};
var frontend$ui$nlp_calendar = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38098__i = 0, G__38098__a = new Array(arguments.length -  0);
while (G__38098__i < G__38098__a.length) {G__38098__a[G__38098__i] = arguments[G__38098__i + 0]; ++G__38098__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38098__a,0,null);
} 
return frontend$ui$nlp_calendar__delegate.call(this,args__31746__auto__);};
frontend$ui$nlp_calendar.cljs$lang$maxFixedArity = 0;
frontend$ui$nlp_calendar.cljs$lang$applyTo = (function (arglist__38099){
var args__31746__auto__ = cljs.core.seq(arglist__38099);
return frontend$ui$nlp_calendar__delegate(args__31746__auto__);
});
frontend$ui$nlp_calendar.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$nlp_calendar__delegate;
return frontend$ui$nlp_calendar;
})()
;
var memo_comp__31747__auto__ = (function (){var G__37949 = comp__31745__auto__;
var G__37950 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__37949,G__37950) : io.factorhouse.hsx.core.react_memo.call(null,G__37949,G__37950));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"nlp-calendar");

return comp__31745__auto__;
})();
frontend.ui.indicator_progress_pie = (function (){var render_fn__31744__auto__ = (function frontend$ui$indicator_progress_pie(percentage){
var _STAR_el = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto__ = logseq.shui.hooks.deref(_STAR_el);
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
return (el.style.backgroundImage = (frontend.util.format.cljs$core$IFn$_invoke$arity$3 ? frontend.util.format.cljs$core$IFn$_invoke$arity$3("conic-gradient(var(--ls-pie-fg-color) %s%, var(--ls-pie-bg-color) %s%)",percentage,percentage) : frontend.util.format.call(null,"conic-gradient(var(--ls-pie-fg-color) %s%, var(--ls-pie-bg-color) %s%)",percentage,percentage)));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [percentage], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cp__rtc-sync-indicator-progress-pie","span.cp__rtc-sync-indicator-progress-pie",1888789456),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$ui$indicator_progress_pie__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__37951 = cljs.core.first(args__31746__auto__);
var G__37952 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__37951,G__37952) : io.factorhouse.hsx.core.obj_get.call(null,G__37951,G__37952));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"indicator-progress-pie","indicator-progress-pie",-2080923347,null),args__31746__auto__),frontend$ui$indicator_progress_pie,args__31746__auto__,null);
}
};
var frontend$ui$indicator_progress_pie = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__38100__i = 0, G__38100__a = new Array(arguments.length -  0);
while (G__38100__i < G__38100__a.length) {G__38100__a[G__38100__i] = arguments[G__38100__i + 0]; ++G__38100__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__38100__a,0,null);
} 
return frontend$ui$indicator_progress_pie__delegate.call(this,args__31746__auto__);};
frontend$ui$indicator_progress_pie.cljs$lang$maxFixedArity = 0;
frontend$ui$indicator_progress_pie.cljs$lang$applyTo = (function (arglist__38101){
var args__31746__auto__ = cljs.core.seq(arglist__38101);
return frontend$ui$indicator_progress_pie__delegate(args__31746__auto__);
});
frontend$ui$indicator_progress_pie.cljs$core$IFn$_invoke$arity$variadic = frontend$ui$indicator_progress_pie__delegate;
return frontend$ui$indicator_progress_pie;
})()
;
var memo_comp__31747__auto__ = (function (){var G__37953 = comp__31745__auto__;
var G__37954 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__37953,G__37954) : io.factorhouse.hsx.core.react_memo.call(null,G__37953,G__37954));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"indicator-progress-pie");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.ui.js.map
