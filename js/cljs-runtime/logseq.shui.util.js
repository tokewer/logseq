goog.provide('logseq.shui.util');
goog.scope(function(){
  logseq.shui.util.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$uniqolor$dist$uniqolor=shadow.js.require("module$node_modules$uniqolor$dist$uniqolor", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
/**
 * @define {boolean}
 * @type {boolean}
 */
logseq.shui.util.NODETEST = goog.define("logseq.shui.util.NODETEST",false);
/**
 * Converts from kebab case to camel case, eg: on-click to onClick
 */
logseq.shui.util.kebab_case__GT_camel_case = (function logseq$shui$util$kebab_case__GT_camel_case(input){
var words = clojure.string.split.cljs$core$IFn$_invoke$arity$2(input,/-/);
var capitalize = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48458_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,clojure.string.upper_case(cljs.core.first(p1__48458_SHARP_)),cljs.core.rest(p1__48458_SHARP_));
}),cljs.core.rest(words));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,cljs.core.first(words),capitalize);
});
/**
 * Stringify all the keys of a cljs hashmap and converts them
 * from kebab case to camel case. If :html-props option is specified,
 * then rename the html properties values to their dom equivalent
 * before conversion
 */
logseq.shui.util.map_keys__GT_camel_case = (function logseq$shui$util$map_keys__GT_camel_case(var_args){
var args__5882__auto__ = [];
var len__5876__auto___48515 = arguments.length;
var i__5877__auto___48516 = (0);
while(true){
if((i__5877__auto___48516 < len__5876__auto___48515)){
args__5882__auto__.push((arguments[i__5877__auto___48516]));

var G__48517 = (i__5877__auto___48516 + (1));
i__5877__auto___48516 = G__48517;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return logseq.shui.util.map_keys__GT_camel_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(logseq.shui.util.map_keys__GT_camel_case.cljs$core$IFn$_invoke$arity$variadic = (function (data,p__48461){
var map__48462 = p__48461;
var map__48462__$1 = cljs.core.__destructure_map(map__48462);
var html_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48462__$1,new cljs.core.Keyword(null,"html-props","html-props",-455448229));
var convert_to_camel = (function (p__48463){
var vec__48464 = p__48463;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48464,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48464,(1),null);
var k = cljs.core.name(key);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((!(((clojure.string.starts_with_QMARK_(k,"data-")) || (clojure.string.starts_with_QMARK_(k,"aria-"))))))?logseq.shui.util.kebab_case__GT_camel_case(k):k),value], null);
});
return clojure.walk.postwalk((function (x){
if(cljs.core.map_QMARK_(x)){
var new_map = (cljs.core.truth_(html_props)?clojure.set.rename_keys(x,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720)], null)):x);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(convert_to_camel,new_map));
} else {
return x;
}
}),data);
}));

(logseq.shui.util.map_keys__GT_camel_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(logseq.shui.util.map_keys__GT_camel_case.cljs$lang$applyTo = (function (seq48459){
var G__48460 = cljs.core.first(seq48459);
var seq48459__$1 = cljs.core.next(seq48459);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48460,seq48459__$1);
}));

logseq.shui.util.dev_QMARK_ = goog.DEBUG;
logseq.shui.util.uuid_color = (function logseq$shui$util$uuid_color(uuid_str){
var G__48469 = module$node_modules$uniqolor$dist$uniqolor(uuid_str,({"saturation": [(55),(70)], "lightness": (70), "differencePoint": (60)}));
if((G__48469 == null)){
return null;
} else {
return (G__48469["color"]);
}
});
/**
 * Returns the component path.
 */
logseq.shui.util.get_path = (function logseq$shui$util$get_path(component_name){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(component_name),/\./);
});
logseq.shui.util.adapt_class = (function logseq$shui$util$adapt_class(var_args){
var args__5882__auto__ = [];
var len__5876__auto___48518 = arguments.length;
var i__5877__auto___48519 = (0);
while(true){
if((i__5877__auto___48519 < len__5876__auto___48518)){
args__5882__auto__.push((arguments[i__5877__auto___48519]));

var G__48520 = (i__5877__auto___48519 + (1));
i__5877__auto___48519 = G__48520;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return logseq.shui.util.adapt_class.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(logseq.shui.util.adapt_class.cljs$core$IFn$_invoke$arity$variadic = (function (react_class,args){
var vec__48487 = ((cljs.core.map_QMARK_(cljs.core.first(args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),cljs.core.rest(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args], null));
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48487,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48487,(1),null);
var children__$1 = (function (){var G__48490 = children;
if((G__48490 == null)){
return null;
} else {
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,G__48490);
}
})();
var children__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(io.factorhouse.hsx.core.create_element,children__$1);
var vector__GT_react_elems = (function (p__48491){
var vec__48492 = p__48491;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48492,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48492,(1),null);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,io.factorhouse.hsx.core.create_element(val)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,val], null);
}
});
var new_options = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(vector__GT_react_elems,opts));
var react_class__$1 = (cljs.core.truth_(logseq.shui.util.dev_QMARK_)?(react_class.cljs$core$IFn$_invoke$arity$0 ? react_class.cljs$core$IFn$_invoke$arity$0() : react_class.call(null)):react_class);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,react_class__$1,cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(logseq.shui.util.map_keys__GT_camel_case.cljs$core$IFn$_invoke$arity$variadic(new_options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"html-props","html-props",-455448229),true], 0))),children__$2);
}));

(logseq.shui.util.adapt_class.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(logseq.shui.util.adapt_class.cljs$lang$applyTo = (function (seq48482){
var G__48483 = cljs.core.first(seq48482);
var seq48482__$1 = cljs.core.next(seq48482);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48483,seq48482__$1);
}));

logseq.shui.util.use_atom = logseq.shui.hooks.use_atom;
logseq.shui.util.use_mounted = logseq.shui.hooks.use_mounted;
logseq.shui.util.same_args_QMARK_ = (function logseq$shui$util$same_args_QMARK_(prev_props,next_props){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prev_props.args,next_props.args);
});
logseq.shui.util.react__GT_component = (function logseq$shui$util$react__GT_component(c,static_QMARK_){
if(cljs.core.truth_(static_QMARK_)){
var class$ = (function (props){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(logseq.shui.util.adapt_class,c,props.args);
});
var memo_class = (function (){var temp__5827__auto__ = module$node_modules$react$index.memo;
if((temp__5827__auto__ == null)){
return class$;
} else {
var memo = temp__5827__auto__;
return (memo.cljs$core$IFn$_invoke$arity$2 ? memo.cljs$core$IFn$_invoke$arity$2(class$,logseq.shui.util.same_args_QMARK_) : memo.call(null,class$,logseq.shui.util.same_args_QMARK_));
}
})();
return (function() { 
var G__48521__delegate = function (args){
return module$node_modules$react$index.createElement(memo_class,({"args": args}));
};
var G__48521 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48522__i = 0, G__48522__a = new Array(arguments.length -  0);
while (G__48522__i < G__48522__a.length) {G__48522__a[G__48522__i] = arguments[G__48522__i + 0]; ++G__48522__i;}
  args = new cljs.core.IndexedSeq(G__48522__a,0,null);
} 
return G__48521__delegate.call(this,args);};
G__48521.cljs$lang$maxFixedArity = 0;
G__48521.cljs$lang$applyTo = (function (arglist__48523){
var args = cljs.core.seq(arglist__48523);
return G__48521__delegate(args);
});
G__48521.cljs$core$IFn$_invoke$arity$variadic = G__48521__delegate;
return G__48521;
})()
;
} else {
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(logseq.shui.util.adapt_class,c);
}
});
/**
 * Returns the component by the given component name.
 */
logseq.shui.util.component_wrap = (function logseq$shui$util$component_wrap(var_args){
var args__5882__auto__ = [];
var len__5876__auto___48524 = arguments.length;
var i__5877__auto___48525 = (0);
while(true){
if((i__5877__auto___48525 < len__5876__auto___48524)){
args__5882__auto__.push((arguments[i__5877__auto___48525]));

var G__48526 = (i__5877__auto___48525 + (1));
i__5877__auto___48525 = G__48526;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return logseq.shui.util.component_wrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(logseq.shui.util.component_wrap.cljs$core$IFn$_invoke$arity$variadic = (function (ns,name,p__48507){
var map__48508 = p__48507;
var map__48508__$1 = cljs.core.__destructure_map(map__48508);
var static_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48508__$1,new cljs.core.Keyword(null,"static?","static?",-1639874822),false);
var path = logseq.shui.util.get_path(name);
var cp = (function (){
return logseq.shui.util.goog$module$goog$object.getValueByKeys(ns,cljs.core.clj__GT_js(path));
});
return logseq.shui.util.react__GT_component((cljs.core.truth_(logseq.shui.util.dev_QMARK_)?cp:cp()),static_QMARK_);
}));

(logseq.shui.util.component_wrap.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(logseq.shui.util.component_wrap.cljs$lang$applyTo = (function (seq48504){
var G__48505 = cljs.core.first(seq48504);
var seq48504__$1 = cljs.core.next(seq48504);
var G__48506 = cljs.core.first(seq48504__$1);
var seq48504__$2 = cljs.core.next(seq48504__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48505,G__48506,seq48504__$2);
}));

logseq.shui.util.ui_wrap = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(logseq.shui.util.component_wrap,logseq.shui.components.registry);
logseq.shui.util.ui_get = (function logseq$shui$util$ui_get(name){
if(logseq.shui.util.NODETEST){
return ({});
} else {
var G__48514 = logseq.shui.components.registry;
if((G__48514 == null)){
return null;
} else {
return (G__48514[name]);
}
}
});

//# sourceMappingURL=logseq.shui.util.js.map
