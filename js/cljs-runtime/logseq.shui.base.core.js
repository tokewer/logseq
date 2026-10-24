goog.provide('logseq.shui.base.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
logseq.shui.base.core.button_base = logseq.shui.util.ui_wrap("Button",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"static?","static?",-1639874822),false], null));
logseq.shui.base.core.link = logseq.shui.util.ui_wrap("Link");
logseq.shui.base.core.trigger_as = (function logseq$shui$base$core$trigger_as(var_args){
var args__5882__auto__ = [];
var len__5876__auto___48911 = arguments.length;
var i__5877__auto___48912 = (0);
while(true){
if((i__5877__auto___48912 < len__5876__auto___48911)){
args__5882__auto__.push((arguments[i__5877__auto___48912]));

var G__48913 = (i__5877__auto___48912 + (1));
i__5877__auto___48912 = G__48913;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return logseq.shui.base.core.trigger_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(logseq.shui.base.core.trigger_as.cljs$core$IFn$_invoke$arity$variadic = (function (as,props_or_children){
var vec__48859 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(props_or_children),cljs.core.rest(props_or_children)], null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48859,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48859,(1),null);
var props_SINGLEQUOTE_ = (function (){var G__48864 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__48840_SHARP_){
var G__48865 = p1__48840_SHARP_.key;
switch (G__48865) {
case " ":
case "Enter":
var G__48868_48915 = p1__48840_SHARP_.target;
if((G__48868_48915 == null)){
} else {
G__48868_48915.click();
}

p1__48840_SHARP_.preventDefault();

return p1__48840_SHARP_.stopPropagation();

break;
default:
return new cljs.core.Keyword(null,"dune","dune",1737226819);

}
})], null);
if(cljs.core.map_QMARK_(props)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__48864,props], 0));
} else {
return G__48864;
}
})();
var children__$1 = ((cljs.core.map_QMARK_(props))?children:cljs.core.cons(props,children));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [as,props_SINGLEQUOTE_], null),children__$1);
}));

(logseq.shui.base.core.trigger_as.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(logseq.shui.base.core.trigger_as.cljs$lang$applyTo = (function (seq48841){
var G__48842 = cljs.core.first(seq48841);
var seq48841__$1 = cljs.core.next(seq48841);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48842,seq48841__$1);
}));

logseq.shui.base.core.trigger_child_wrap = (function logseq$shui$base$core$trigger_child_wrap(var_args){
var args__5882__auto__ = [];
var len__5876__auto___48920 = arguments.length;
var i__5877__auto___48921 = (0);
while(true){
if((i__5877__auto___48921 < len__5876__auto___48920)){
args__5882__auto__.push((arguments[i__5877__auto___48921]));

var G__48922 = (i__5877__auto___48921 + (1));
i__5877__auto___48921 = G__48922;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return logseq.shui.base.core.trigger_child_wrap.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(logseq.shui.base.core.trigger_child_wrap.cljs$core$IFn$_invoke$arity$variadic = (function (props_and_children){
var props = cljs.core.first(props_and_children);
var children = cljs.core.rest(props_and_children);
var children__$1 = ((cljs.core.map_QMARK_(props))?children:cljs.core.cons(props,children));
var children__$2 = ((cljs.core.seq(children__$1))?io.factorhouse.hsx.core.create_element(children__$1):null);
var props__$1 = ((cljs.core.map_QMARK_(props))?props:cljs.core.PersistentArrayMap.EMPTY);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,"div",cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(props__$1),children__$2);
}));

(logseq.shui.base.core.trigger_child_wrap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(logseq.shui.base.core.trigger_child_wrap.cljs$lang$applyTo = (function (seq48880){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48880));
}));

logseq.shui.base.core.button = (function logseq$shui$base$core$button(var_args){
var args__5882__auto__ = [];
var len__5876__auto___48923 = arguments.length;
var i__5877__auto___48924 = (0);
while(true){
if((i__5877__auto___48924 < len__5876__auto___48923)){
args__5882__auto__.push((arguments[i__5877__auto___48924]));

var G__48925 = (i__5877__auto___48924 + (1));
i__5877__auto___48924 = G__48925;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return logseq.shui.base.core.button.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(logseq.shui.base.core.button.cljs$core$IFn$_invoke$arity$variadic = (function (props_and_children){
var props = cljs.core.first(props_and_children);
var children = cljs.core.rest(props_and_children);
var children__$1 = ((cljs.core.map_QMARK_(props))?children:cljs.core.cons(props,children));
var props_SINGLEQUOTE_ = ((cljs.core.map_QMARK_(props))?props:cljs.core.PersistentArrayMap.EMPTY);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(logseq.shui.base.core.button_base,props_SINGLEQUOTE_,children__$1);
}));

(logseq.shui.base.core.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(logseq.shui.base.core.button.cljs$lang$applyTo = (function (seq48884){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48884));
}));

logseq.shui.base.core.button_icon = (function logseq$shui$base$core$button_icon(variant,icon_name,p__48900,child){
var map__48901 = p__48900;
var map__48901__$1 = cljs.core.__destructure_map(map__48901);
var props = map__48901__$1;
var icon_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48901__$1,new cljs.core.Keyword(null,"icon-props","icon-props",-895221875));
var button_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48901__$1,new cljs.core.Keyword(null,"button-size","button-size",1932917694));
return logseq.shui.base.core.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"icon-props","icon-props",-895221875),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"button-size","button-size",1932917694)], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),variant,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"data-button","data-button",-2145431612),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(button_size)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),button_size,new cljs.core.Keyword(null,"height","height",1025178622),button_size], null):null)], null)], 0)),logseq.shui.icon.v2.root(cljs.core.name(icon_name),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(20)], null),icon_props], 0))),child], 0));
});
logseq.shui.base.core.button_ghost_icon = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(logseq.shui.base.core.button_icon,new cljs.core.Keyword(null,"ghost","ghost",-1531157576));
logseq.shui.base.core.button_outline_icon = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(logseq.shui.base.core.button_icon,new cljs.core.Keyword(null,"outline","outline",793464534));
logseq.shui.base.core.button_secondary_icon = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(logseq.shui.base.core.button_icon,new cljs.core.Keyword(null,"secondary","secondary",-669381460));

//# sourceMappingURL=logseq.shui.base.core.js.map
