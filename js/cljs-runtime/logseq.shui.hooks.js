goog.provide('logseq.shui.hooks');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
logseq.shui.hooks.memo_deps = (function logseq$shui$hooks$memo_deps(equal_fn,deps){
var equal_fn__$1 = (function (){var or__5142__auto__ = equal_fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core._EQ_;
}
})();
var deps_ref = module$node_modules$react$index.useRef(deps);
if(cljs.core.truth_((function (){var G__47705 = deps_ref.current;
var G__47706 = deps;
return (equal_fn__$1.cljs$core$IFn$_invoke$arity$2 ? equal_fn__$1.cljs$core$IFn$_invoke$arity$2(G__47705,G__47706) : equal_fn__$1.call(null,G__47705,G__47706));
})())){
} else {
(deps_ref.current = deps);
}

return deps_ref.current;
});
logseq.shui.hooks.deps_array = (function logseq$shui$hooks$deps_array(deps,equal_fn){
if(cljs.core.empty_QMARK_(deps)){
return [];
} else {
return [logseq.shui.hooks.memo_deps(equal_fn,deps)];
}
});
logseq.shui.hooks.effect_result = (function logseq$shui$hooks$effect_result(result){
if(cljs.core.fn_QMARK_(result)){
return result;
} else {
return undefined;
}
});
logseq.shui.hooks.use_memo = (function logseq$shui$hooks$use_memo(var_args){
var args__5882__auto__ = [];
var len__5876__auto___47924 = arguments.length;
var i__5877__auto___47925 = (0);
while(true){
if((i__5877__auto___47925 < len__5876__auto___47924)){
args__5882__auto__.push((arguments[i__5877__auto___47925]));

var G__47926 = (i__5877__auto___47925 + (1));
i__5877__auto___47925 = G__47926;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return logseq.shui.hooks.use_memo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(logseq.shui.hooks.use_memo.cljs$core$IFn$_invoke$arity$variadic = (function (f,deps,p__47713){
var map__47714 = p__47713;
var map__47714__$1 = cljs.core.__destructure_map(map__47714);
var equal_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47714__$1,new cljs.core.Keyword(null,"equal-fn","equal-fn",542091554));
return module$node_modules$react$index.useMemo(f,logseq.shui.hooks.deps_array(deps,equal_fn));
}));

(logseq.shui.hooks.use_memo.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(logseq.shui.hooks.use_memo.cljs$lang$applyTo = (function (seq47710){
var G__47711 = cljs.core.first(seq47710);
var seq47710__$1 = cljs.core.next(seq47710);
var G__47712 = cljs.core.first(seq47710__$1);
var seq47710__$2 = cljs.core.next(seq47710__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47711,G__47712,seq47710__$2);
}));

/**
 * setup-fn will be invoked every render of component when no deps arg provided
 */
logseq.shui.hooks.use_effect_BANG_ = (function logseq$shui$hooks$use_effect_BANG_(var_args){
var G__47724 = arguments.length;
switch (G__47724) {
case 1:
return logseq.shui.hooks.use_effect_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5901__auto__ = [];
var len__5876__auto___47933 = arguments.length;
var i__5877__auto___47934 = (0);
while(true){
if((i__5877__auto___47934 < len__5876__auto___47933)){
args_arr__5901__auto__.push((arguments[i__5877__auto___47934]));

var G__47936 = (i__5877__auto___47934 + (1));
i__5877__auto___47934 = G__47936;
continue;
} else {
}
break;
}

var argseq__5902__auto__ = ((((2) < args_arr__5901__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5901__auto__.slice((2)),(0),null)):null);
return logseq.shui.hooks.use_effect_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5902__auto__);

}
});

(logseq.shui.hooks.use_effect_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (setup_fn){
if(cljs.core.fn_QMARK_(setup_fn)){
} else {
throw (new Error((""+"Assert failed: "+"use-effect! setup-fn should be a function"+"\n"+"(fn? setup-fn)")));
}

return module$node_modules$react$index.useEffect((function (){
var result = (setup_fn.cljs$core$IFn$_invoke$arity$0 ? setup_fn.cljs$core$IFn$_invoke$arity$0() : setup_fn.call(null));
return logseq.shui.hooks.effect_result(result);
}));
}));

(logseq.shui.hooks.use_effect_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (setup_fn,deps,p__47734){
var map__47735 = p__47734;
var map__47735__$1 = cljs.core.__destructure_map(map__47735);
var equal_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47735__$1,new cljs.core.Keyword(null,"equal-fn","equal-fn",542091554));
if(cljs.core.fn_QMARK_(setup_fn)){
} else {
throw (new Error((""+"Assert failed: "+"use-effect! setup-fn should be a function"+"\n"+"(fn? setup-fn)")));
}

return module$node_modules$react$index.useEffect((function (){
var result = (setup_fn.cljs$core$IFn$_invoke$arity$0 ? setup_fn.cljs$core$IFn$_invoke$arity$0() : setup_fn.call(null));
return logseq.shui.hooks.effect_result(result);
}),logseq.shui.hooks.deps_array(deps,equal_fn));
}));

/** @this {Function} */
(logseq.shui.hooks.use_effect_BANG_.cljs$lang$applyTo = (function (seq47720){
var G__47722 = cljs.core.first(seq47720);
var seq47720__$1 = cljs.core.next(seq47720);
var G__47723 = cljs.core.first(seq47720__$1);
var seq47720__$2 = cljs.core.next(seq47720__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47722,G__47723,seq47720__$2);
}));

(logseq.shui.hooks.use_effect_BANG_.cljs$lang$maxFixedArity = (2));

logseq.shui.hooks.use_layout_effect_BANG_ = (function logseq$shui$hooks$use_layout_effect_BANG_(var_args){
var G__47742 = arguments.length;
switch (G__47742) {
case 1:
return logseq.shui.hooks.use_layout_effect_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5901__auto__ = [];
var len__5876__auto___47940 = arguments.length;
var i__5877__auto___47941 = (0);
while(true){
if((i__5877__auto___47941 < len__5876__auto___47940)){
args_arr__5901__auto__.push((arguments[i__5877__auto___47941]));

var G__47942 = (i__5877__auto___47941 + (1));
i__5877__auto___47941 = G__47942;
continue;
} else {
}
break;
}

var argseq__5902__auto__ = ((((2) < args_arr__5901__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5901__auto__.slice((2)),(0),null)):null);
return logseq.shui.hooks.use_layout_effect_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5902__auto__);

}
});

(logseq.shui.hooks.use_layout_effect_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (setup_fn){
if(cljs.core.fn_QMARK_(setup_fn)){
} else {
throw (new Error((""+"Assert failed: "+"use-layout-effect! setup-fn should be a function"+"\n"+"(fn? setup-fn)")));
}

return module$node_modules$react$index.useLayoutEffect((function (){
var result = (setup_fn.cljs$core$IFn$_invoke$arity$0 ? setup_fn.cljs$core$IFn$_invoke$arity$0() : setup_fn.call(null));
return logseq.shui.hooks.effect_result(result);
}));
}));

(logseq.shui.hooks.use_layout_effect_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (setup_fn,deps,p__47753){
var map__47754 = p__47753;
var map__47754__$1 = cljs.core.__destructure_map(map__47754);
var equal_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47754__$1,new cljs.core.Keyword(null,"equal-fn","equal-fn",542091554));
if(cljs.core.fn_QMARK_(setup_fn)){
} else {
throw (new Error((""+"Assert failed: "+"use-layout-effect! setup-fn should be a function"+"\n"+"(fn? setup-fn)")));
}

return module$node_modules$react$index.useLayoutEffect((function (){
var result = (setup_fn.cljs$core$IFn$_invoke$arity$0 ? setup_fn.cljs$core$IFn$_invoke$arity$0() : setup_fn.call(null));
return logseq.shui.hooks.effect_result(result);
}),logseq.shui.hooks.deps_array(deps,equal_fn));
}));

/** @this {Function} */
(logseq.shui.hooks.use_layout_effect_BANG_.cljs$lang$applyTo = (function (seq47739){
var G__47740 = cljs.core.first(seq47739);
var seq47739__$1 = cljs.core.next(seq47739);
var G__47741 = cljs.core.first(seq47739__$1);
var seq47739__$2 = cljs.core.next(seq47739__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47740,G__47741,seq47739__$2);
}));

(logseq.shui.hooks.use_layout_effect_BANG_.cljs$lang$maxFixedArity = (2));

logseq.shui.hooks.use_callback = (function logseq$shui$hooks$use_callback(var_args){
var args__5882__auto__ = [];
var len__5876__auto___47954 = arguments.length;
var i__5877__auto___47955 = (0);
while(true){
if((i__5877__auto___47955 < len__5876__auto___47954)){
args__5882__auto__.push((arguments[i__5877__auto___47955]));

var G__47957 = (i__5877__auto___47955 + (1));
i__5877__auto___47955 = G__47957;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return logseq.shui.hooks.use_callback.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(logseq.shui.hooks.use_callback.cljs$core$IFn$_invoke$arity$variadic = (function (callback,deps,p__47765){
var map__47766 = p__47765;
var map__47766__$1 = cljs.core.__destructure_map(map__47766);
var equal_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47766__$1,new cljs.core.Keyword(null,"equal-fn","equal-fn",542091554));
return module$node_modules$react$index.useCallback(callback,logseq.shui.hooks.deps_array(deps,equal_fn));
}));

(logseq.shui.hooks.use_callback.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(logseq.shui.hooks.use_callback.cljs$lang$applyTo = (function (seq47757){
var G__47758 = cljs.core.first(seq47757);
var seq47757__$1 = cljs.core.next(seq47757);
var G__47759 = cljs.core.first(seq47757__$1);
var seq47757__$2 = cljs.core.next(seq47757__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47758,G__47759,seq47757__$2);
}));

logseq.shui.hooks.event_target = (function logseq$shui$hooks$event_target(target){
if(cljs.core.fn_QMARK_(target)){
return (target.cljs$core$IFn$_invoke$arity$0 ? target.cljs$core$IFn$_invoke$arity$0() : target.call(null));
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = target;
if(cljs.core.truth_(and__5140__auto__)){
return (!((void 0 === target.current)));
} else {
return and__5140__auto__;
}
})())){
return target.current;
} else {
return target;

}
}
});
logseq.shui.hooks.use_event_listener = (function logseq$shui$hooks$use_event_listener(var_args){
var G__47780 = arguments.length;
switch (G__47780) {
case 4:
return logseq.shui.hooks.use_event_listener.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return logseq.shui.hooks.use_event_listener.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.shui.hooks.use_event_listener.cljs$core$IFn$_invoke$arity$4 = (function (target,event_name,handler,deps){
return logseq.shui.hooks.use_event_listener.cljs$core$IFn$_invoke$arity$5(target,event_name,handler,deps,null);
}));

(logseq.shui.hooks.use_event_listener.cljs$core$IFn$_invoke$arity$5 = (function (target,event_name,handler,deps,options){
return logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto__ = logseq.shui.hooks.event_target(target);
if(cljs.core.truth_(temp__5825__auto__)){
var target_SINGLEQUOTE_ = temp__5825__auto__;
target_SINGLEQUOTE_.addEventListener(event_name,handler,options);

return (function (){
return target_SINGLEQUOTE_.removeEventListener(event_name,handler,options);
});
} else {
return null;
}
}),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,event_name,options], null),deps));
}));

(logseq.shui.hooks.use_event_listener.cljs$lang$maxFixedArity = 5);

logseq.shui.hooks.use_window_keydown = (function logseq$shui$hooks$use_window_keydown(var_args){
var G__47786 = arguments.length;
switch (G__47786) {
case 2:
return logseq.shui.hooks.use_window_keydown.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return logseq.shui.hooks.use_window_keydown.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.shui.hooks.use_window_keydown.cljs$core$IFn$_invoke$arity$2 = (function (handler,deps){
return logseq.shui.hooks.use_window_keydown.cljs$core$IFn$_invoke$arity$3(handler,deps,null);
}));

(logseq.shui.hooks.use_window_keydown.cljs$core$IFn$_invoke$arity$3 = (function (handler,deps,options){
return logseq.shui.hooks.use_event_listener.cljs$core$IFn$_invoke$arity$5(window,"keydown",handler,deps,options);
}));

(logseq.shui.hooks.use_window_keydown.cljs$lang$maxFixedArity = 3);

logseq.shui.hooks.use_window_keyup = (function logseq$shui$hooks$use_window_keyup(var_args){
var G__47791 = arguments.length;
switch (G__47791) {
case 2:
return logseq.shui.hooks.use_window_keyup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return logseq.shui.hooks.use_window_keyup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.shui.hooks.use_window_keyup.cljs$core$IFn$_invoke$arity$2 = (function (handler,deps){
return logseq.shui.hooks.use_window_keyup.cljs$core$IFn$_invoke$arity$3(handler,deps,null);
}));

(logseq.shui.hooks.use_window_keyup.cljs$core$IFn$_invoke$arity$3 = (function (handler,deps,options){
return logseq.shui.hooks.use_event_listener.cljs$core$IFn$_invoke$arity$5(window,"keyup",handler,deps,options);
}));

(logseq.shui.hooks.use_window_keyup.cljs$lang$maxFixedArity = 3);

logseq.shui.hooks.use_hide_on_esc_or_outside = (function logseq$shui$hooks$use_hide_on_esc_or_outside(p__47798){
var map__47799 = p__47798;
var map__47799__$1 = cljs.core.__destructure_map(map__47799);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47799__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var root_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47799__$1,new cljs.core.Keyword(null,"root-ref","root-ref",1229703250));
var on_hide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47799__$1,new cljs.core.Keyword(null,"on-hide","on-hide",1263105709));
var ignore_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47799__$1,new cljs.core.Keyword(null,"ignore-class","ignore-class",653400872),"ignore-outside-event");
var outside_event = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47799__$1,new cljs.core.Keyword(null,"outside-event","outside-event",-1014372465),"mousedown");
var outside_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47799__$1,new cljs.core.Keyword(null,"outside-options","outside-options",-2076388821));
var outside_handler = logseq.shui.hooks.use_callback((function (e){
if(cljs.core.truth_((function (){var and__5140__auto__ = active_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.not((function (){var G__47801 = logseq.shui.hooks.event_target(root_ref);
if((G__47801 == null)){
return null;
} else {
return G__47801.contains(e.target);
}
})())) && (cljs.core.not((function (){var G__47802 = e;
var G__47802__$1 = (((G__47802 == null))?null:G__47802.target);
var G__47802__$2 = (((G__47802__$1 == null))?null:G__47802__$1.classList);
if((G__47802__$2 == null)){
return null;
} else {
return G__47802__$2.contains(ignore_class);
}
})())));
} else {
return and__5140__auto__;
}
})())){
return (on_hide.cljs$core$IFn$_invoke$arity$1 ? on_hide.cljs$core$IFn$_invoke$arity$1(e) : on_hide.call(null,e));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [active_QMARK_,root_ref,on_hide,ignore_class], null));
var keydown_handler = logseq.shui.hooks.use_callback((function (e){
if(cljs.core.truth_((function (){var and__5140__auto__ = active_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((27),e.keyCode);
} else {
return and__5140__auto__;
}
})())){
return (on_hide.cljs$core$IFn$_invoke$arity$1 ? on_hide.cljs$core$IFn$_invoke$arity$1(e) : on_hide.call(null,e));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [active_QMARK_,on_hide], null));
logseq.shui.hooks.use_event_listener.cljs$core$IFn$_invoke$arity$5(window,outside_event,outside_handler,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [outside_handler], null),outside_options);

return logseq.shui.hooks.use_window_keydown.cljs$core$IFn$_invoke$arity$2(keydown_handler,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keydown_handler], null));
});
logseq.shui.hooks.use_ref = module$node_modules$react$index.useRef;
logseq.shui.hooks.create_ref = module$node_modules$react$index.createRef;
logseq.shui.hooks.deref = (function logseq$shui$hooks$deref(ref){
return ref.current;
});
logseq.shui.hooks.set_ref_BANG_ = (function logseq$shui$hooks$set_ref_BANG_(ref,value){
return (ref.current = value);
});
logseq.shui.hooks.choose_value = (function logseq$shui$hooks$choose_value(nv,cv){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nv,cv)){
return cv;
} else {
return nv;
}
});
/**
 * Replicates React's behaviour when updating state with identical JS value,
 *   but using Clojure's value equality here
 */
logseq.shui.hooks.use_clojure_aware_updater = (function logseq$shui$hooks$use_clojure_aware_updater(updater){
return module$node_modules$react$index.useCallback((function() { 
var G__47987__delegate = function (v,args){
var G__47812 = (function (cv){
if(cljs.core.fn_QMARK_(v)){
return logseq.shui.hooks.choose_value(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(v,cv,args),cv);
} else {
return logseq.shui.hooks.choose_value(v,cv);
}
});
return (updater.cljs$core$IFn$_invoke$arity$1 ? updater.cljs$core$IFn$_invoke$arity$1(G__47812) : updater.call(null,G__47812));
};
var G__47987 = function (v,var_args){
var args = null;
if (arguments.length > 1) {
var G__47991__i = 0, G__47991__a = new Array(arguments.length -  1);
while (G__47991__i < G__47991__a.length) {G__47991__a[G__47991__i] = arguments[G__47991__i + 1]; ++G__47991__i;}
  args = new cljs.core.IndexedSeq(G__47991__a,0,null);
} 
return G__47987__delegate.call(this,v,args);};
G__47987.cljs$lang$maxFixedArity = 1;
G__47987.cljs$lang$applyTo = (function (arglist__47992){
var v = cljs.core.first(arglist__47992);
var args = cljs.core.rest(arglist__47992);
return G__47987__delegate(v,args);
});
G__47987.cljs$core$IFn$_invoke$arity$variadic = G__47987__delegate;
return G__47987;
})()
,[updater]);
});
logseq.shui.hooks.use_state = (function logseq$shui$hooks$use_state(value){
var vec__47820 = module$node_modules$react$index.useState(value);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47820,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47820,(1),null);
var set_state__$1 = logseq.shui.hooks.use_clojure_aware_updater(set_state);
return [state,set_state__$1];
});
/**
 * Same as `use-clojure-primitive-aware-updater` but for `use-reducer`
 */
logseq.shui.hooks.clojure_aware_reducer_updater = (function logseq$shui$hooks$clojure_aware_reducer_updater(f){
return (function (state,action){
return logseq.shui.hooks.choose_value((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(state,action) : f.call(null,state,action)),state);
});
});
logseq.shui.hooks.use_reducer = (function logseq$shui$hooks$use_reducer(var_args){
var G__47835 = arguments.length;
switch (G__47835) {
case 2:
return logseq.shui.hooks.use_reducer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return logseq.shui.hooks.use_reducer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.shui.hooks.use_reducer.cljs$core$IFn$_invoke$arity$2 = (function (f,value){
var updater = logseq.shui.hooks.clojure_aware_reducer_updater(f);
return module$node_modules$react$index.useReducer(updater,value);
}));

(logseq.shui.hooks.use_reducer.cljs$core$IFn$_invoke$arity$3 = (function (f,value,init_state){
var updater = logseq.shui.hooks.clojure_aware_reducer_updater(f);
return module$node_modules$react$index.useReducer(updater,value,init_state);
}));

(logseq.shui.hooks.use_reducer.cljs$lang$maxFixedArity = 3);

/**
 * Return the debounced value
 */
logseq.shui.hooks.use_debounced_value = (function logseq$shui$hooks$use_debounced_value(value,msec){
var vec__47841 = logseq.shui.hooks.use_state(value);
var debounced_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47841,(0),null);
var set_value_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47841,(1),null);
var cb = logseq.shui.hooks.use_callback(goog.functions.debounce(set_value_BANG_,msec),cljs.core.PersistentVector.EMPTY);
logseq.shui.hooks.use_effect_BANG_((function (){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(value) : cb.call(null,value));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null));

return debounced_value;
});
logseq.shui.hooks.is_touch_event_QMARK_ = (function logseq$shui$hooks$is_touch_event_QMARK_(e){
return (!((e.touches == null)));
});
logseq.shui.hooks.prevent_default = (function logseq$shui$hooks$prevent_default(e){
if(cljs.core.truth_((function (){var and__5140__auto__ = logseq.shui.hooks.is_touch_event_QMARK_(e);
if(and__5140__auto__){
var and__5140__auto____$1 = (e.touches.length < (2));
if(and__5140__auto____$1){
return e.preventDefault;
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
logseq.shui.hooks.use_long_press = (function logseq$shui$hooks$use_long_press(p__47856){
var map__47857 = p__47856;
var map__47857__$1 = cljs.core.__destructure_map(map__47857);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47857__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var on_long_press = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47857__$1,new cljs.core.Keyword(null,"on-long-press","on-long-press",-1256774209));
var prevent_default_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47857__$1,new cljs.core.Keyword(null,"prevent-default?","prevent-default?",-1165567888),true);
var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47857__$1,new cljs.core.Keyword(null,"delay","delay",-574225219),(300));
var vec__47859 = logseq.shui.hooks.use_state(false);
var long_press_triggered = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47859,(0),null);
var set_long_press_triggered = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47859,(1),null);
var timeout_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var target_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var start = logseq.shui.hooks.use_callback((function (e){
if(cljs.core.truth_((function (){var and__5140__auto__ = prevent_default_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return e.target;
} else {
return and__5140__auto__;
}
})())){
e.target.addEventListener("touchend",logseq.shui.hooks.prevent_default,({"passive": false}));

(target_ref.current = e.target);
} else {
}

return (timeout_ref.current = setTimeout((function (){
(on_long_press.cljs$core$IFn$_invoke$arity$1 ? on_long_press.cljs$core$IFn$_invoke$arity$1(e) : on_long_press.call(null,e));

return (set_long_press_triggered.cljs$core$IFn$_invoke$arity$1 ? set_long_press_triggered.cljs$core$IFn$_invoke$arity$1(true) : set_long_press_triggered.call(null,true));
}),delay));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_long_press,delay,prevent_default_QMARK_], null));
var clear = logseq.shui.hooks.use_callback((function (_e,should_trigger_click){
if(cljs.core.truth_(timeout_ref.current)){
clearTimeout(timeout_ref.current);
} else {
}

if(cljs.core.truth_((function (){var and__5140__auto__ = (function (){var or__5142__auto__ = (should_trigger_click == null);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return should_trigger_click;
}
})();
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(long_press_triggered);
} else {
return and__5140__auto__;
}
})())){
(on_click.cljs$core$IFn$_invoke$arity$0 ? on_click.cljs$core$IFn$_invoke$arity$0() : on_click.call(null));
} else {
}

(set_long_press_triggered.cljs$core$IFn$_invoke$arity$1 ? set_long_press_triggered.cljs$core$IFn$_invoke$arity$1(false) : set_long_press_triggered.call(null,false));

if(cljs.core.truth_((function (){var and__5140__auto__ = prevent_default_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return target_ref.current;
} else {
return and__5140__auto__;
}
})())){
return target_ref.current.removeEventListener("touchend",logseq.shui.hooks.prevent_default);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [prevent_default_QMARK_,on_click,long_press_triggered], null));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"onMouseDown","onMouseDown",-1496366516),(function (p1__47851_SHARP_){
return (start.cljs$core$IFn$_invoke$arity$1 ? start.cljs$core$IFn$_invoke$arity$1(p1__47851_SHARP_) : start.call(null,p1__47851_SHARP_));
}),new cljs.core.Keyword(null,"onTouchStart","onTouchStart",1116070157),(function (p1__47852_SHARP_){
return (start.cljs$core$IFn$_invoke$arity$1 ? start.cljs$core$IFn$_invoke$arity$1(p1__47852_SHARP_) : start.call(null,p1__47852_SHARP_));
}),new cljs.core.Keyword(null,"onMouseUp","onMouseUp",-180363297),(function (p1__47853_SHARP_){
return (clear.cljs$core$IFn$_invoke$arity$2 ? clear.cljs$core$IFn$_invoke$arity$2(p1__47853_SHARP_,true) : clear.call(null,p1__47853_SHARP_,true));
}),new cljs.core.Keyword(null,"onMouseLeave","onMouseLeave",1446726903),(function (p1__47854_SHARP_){
return (clear.cljs$core$IFn$_invoke$arity$2 ? clear.cljs$core$IFn$_invoke$arity$2(p1__47854_SHARP_,false) : clear.call(null,p1__47854_SHARP_,false));
}),new cljs.core.Keyword(null,"onTouchEnd","onTouchEnd",1356758529),(function (p1__47855_SHARP_){
return (clear.cljs$core$IFn$_invoke$arity$2 ? clear.cljs$core$IFn$_invoke$arity$2(p1__47855_SHARP_,true) : clear.call(null,p1__47855_SHARP_,true));
})], null);
});
logseq.shui.hooks.use_atom_fn = (function logseq$shui$hooks$use_atom_fn(a,getter_fn,setter_fn){
var vec__47884 = logseq.shui.hooks.use_state((function (){var G__47887 = cljs.core.deref(a);
return (getter_fn.cljs$core$IFn$_invoke$arity$1 ? getter_fn.cljs$core$IFn$_invoke$arity$1(G__47887) : getter_fn.call(null,G__47887));
})());
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47884,(0),null);
var set_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47884,(1),null);
logseq.shui.hooks.use_effect_BANG_((function (){
var current_value_48007 = (function (){var G__47889 = cljs.core.deref(a);
return (getter_fn.cljs$core$IFn$_invoke$arity$1 ? getter_fn.cljs$core$IFn$_invoke$arity$1(G__47889) : getter_fn.call(null,G__47889));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,current_value_48007)){
} else {
(set_val.cljs$core$IFn$_invoke$arity$1 ? set_val.cljs$core$IFn$_invoke$arity$1(current_value_48007) : set_val.call(null,current_value_48007));
}

var id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()));
cljs.core.add_watch(a,id,(function (_,___$1,prev_state,next_state){
var prev_value = (getter_fn.cljs$core$IFn$_invoke$arity$1 ? getter_fn.cljs$core$IFn$_invoke$arity$1(prev_state) : getter_fn.call(null,prev_state));
var next_value = (getter_fn.cljs$core$IFn$_invoke$arity$1 ? getter_fn.cljs$core$IFn$_invoke$arity$1(next_state) : getter_fn.call(null,next_state));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prev_value,next_value)){
return null;
} else {
return (set_val.cljs$core$IFn$_invoke$arity$1 ? set_val.cljs$core$IFn$_invoke$arity$1(next_value) : set_val.call(null,next_value));
}
}));

return (function (){
return cljs.core.remove_watch(a,id);
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val,(function (p1__47883_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(a,setter_fn,p1__47883_SHARP_);
})], null);
});
/**
 * (use-atom my-atom)
 */
logseq.shui.hooks.use_atom = (function logseq$shui$hooks$use_atom(a){
return logseq.shui.hooks.use_atom_fn(a,cljs.core.identity,(function (_,v){
return v;
}));
});
logseq.shui.hooks.use_atom_value = (function logseq$shui$hooks$use_atom_value(a){
return cljs.core.first(logseq.shui.hooks.use_atom(a));
});
logseq.shui.hooks.use_atom_in = (function logseq$shui$hooks$use_atom_in(a,ks){
var ks__$1 = (((ks instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks], null):ks);
return logseq.shui.hooks.use_atom_fn(a,(function (p1__47899_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__47899_SHARP_,ks__$1);
}),(function (a_SINGLEQUOTE_,v){
return cljs.core.assoc_in(a_SINGLEQUOTE_,ks__$1,v);
}));
});
logseq.shui.hooks.use_modal_state = (function logseq$shui$hooks$use_modal_state(initial_open_QMARK_){
var open_atom = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.boolean$(initial_open_QMARK_));
}),cljs.core.PersistentVector.EMPTY);
var vec__47900 = logseq.shui.hooks.use_atom(open_atom);
var open_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47900,(0),null);
var close_fn = (function (){
return cljs.core.reset_BANG_(open_atom,false);
});
var open_fn = (function (){
return cljs.core.reset_BANG_(open_atom,true);
});
var toggle_fn = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_atom,cljs.core.not);
});
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"open?","open?",1238443125),open_value,new cljs.core.Keyword(null,"open-atom","open-atom",545892639),open_atom,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512),close_fn,new cljs.core.Keyword(null,"open-fn","open-fn",1265855718),open_fn,new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425),toggle_fn], null);
});
logseq.shui.hooks.use_mounted = (function logseq$shui$hooks$use_mounted(){
var mounted_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(false) : logseq.shui.hooks.use_ref.call(null,false));
logseq.shui.hooks.use_effect_BANG_((function (){
logseq.shui.hooks.set_ref_BANG_(mounted_ref,true);

return (function (){
return logseq.shui.hooks.set_ref_BANG_(mounted_ref,false);
});
}),cljs.core.PersistentVector.EMPTY);

return (function (){
return logseq.shui.hooks.deref(mounted_ref);
});
});
/**
 * Return a callback ref and the current bounding client rect for that node.
 */
logseq.shui.hooks.use_bounding_client_rect = (function logseq$shui$hooks$use_bounding_client_rect(var_args){
var G__47905 = arguments.length;
switch (G__47905) {
case 0:
return logseq.shui.hooks.use_bounding_client_rect.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return logseq.shui.hooks.use_bounding_client_rect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.shui.hooks.use_bounding_client_rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return logseq.shui.hooks.use_bounding_client_rect.cljs$core$IFn$_invoke$arity$1(null);
}));

(logseq.shui.hooks.use_bounding_client_rect.cljs$core$IFn$_invoke$arity$1 = (function (tick__$1){
var vec__47909 = logseq.shui.hooks.use_state(null);
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47909,(0),null);
var set_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47909,(1),null);
var vec__47912 = logseq.shui.hooks.use_state(null);
var rect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47912,(0),null);
var set_rect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47912,(1),null);
logseq.shui.hooks.use_effect_BANG_((cljs.core.truth_(ref)?(function (){
var update_rect = (function (){
var G__47916 = ref.getBoundingClientRect();
return (set_rect.cljs$core$IFn$_invoke$arity$1 ? set_rect.cljs$core$IFn$_invoke$arity$1(G__47916) : set_rect.call(null,G__47916));
});
var update_from_observer_BANG_ = (function (entries){
if(cljs.core.truth_((function (){var G__47917 = entries;
var G__47917__$1 = (((G__47917 == null))?null:(G__47917[(0)]));
if((G__47917__$1 == null)){
return null;
} else {
return G__47917__$1.contentRect;
}
})())){
return update_rect();
} else {
return null;
}
});
var observer = (new ResizeObserver(update_from_observer_BANG_));
update_rect();

observer.observe(ref);

return (function (){
return observer.disconnect();
});
}):(function (){
return cljs.core.List.EMPTY;
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref,tick__$1], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [set_ref,rect], null);
}));

(logseq.shui.hooks.use_bounding_client_rect.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=logseq.shui.hooks.js.map
