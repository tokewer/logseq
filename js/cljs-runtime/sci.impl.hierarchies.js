goog.provide('sci.impl.hierarchies');
sci.impl.hierarchies.global_hierarchy = (function sci$impl$hierarchies$global_hierarchy(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(sci.ctx_store.get_ctx())),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),new cljs.core.Symbol(null,"global-hierarchy","global-hierarchy",-2014004345,null)], null));
});
sci.impl.hierarchies.__GT_tag = (function sci$impl$hierarchies$__GT_tag(x){
if((x instanceof sci.lang.Type)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(x),cljs.core.name(x));
} else {
return x;
}
});
sci.impl.hierarchies.derive_STAR_ = (function sci$impl$hierarchies$derive_STAR_(var_args){
var G__71425 = arguments.length;
switch (G__71425) {
case 2:
return sci.impl.hierarchies.derive_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.hierarchies.derive_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(sci.impl.hierarchies.derive_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (tag,parent){
var tag_71470__$1 = sci.impl.hierarchies.__GT_tag(tag);
sci.impl.vars.alter_var_root.cljs$core$IFn$_invoke$arity$2(sci.impl.hierarchies.global_hierarchy(),(function (h){
return cljs.core.derive.cljs$core$IFn$_invoke$arity$3(h,tag_71470__$1,parent);
}));

return null;
}));

(sci.impl.hierarchies.derive_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (h,tag,parent){
var tag__$1 = sci.impl.hierarchies.__GT_tag(tag);
return cljs.core.derive.cljs$core$IFn$_invoke$arity$3(h,tag__$1,parent);
}));

(sci.impl.hierarchies.derive_STAR_.cljs$lang$maxFixedArity = 3);

sci.impl.hierarchies.underive_STAR_ = (function sci$impl$hierarchies$underive_STAR_(var_args){
var G__71441 = arguments.length;
switch (G__71441) {
case 2:
return sci.impl.hierarchies.underive_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.hierarchies.underive_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(sci.impl.hierarchies.underive_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (tag,parent){
var tag_71472__$1 = sci.impl.hierarchies.__GT_tag(tag);
sci.impl.vars.alter_var_root.cljs$core$IFn$_invoke$arity$2(sci.impl.hierarchies.global_hierarchy(),(function (h){
return cljs.core.underive.cljs$core$IFn$_invoke$arity$3(h,tag_71472__$1,parent);
}));

return null;
}));

(sci.impl.hierarchies.underive_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (h,tag,parent){
var tag__$1 = sci.impl.hierarchies.__GT_tag(tag);
return cljs.core.underive.cljs$core$IFn$_invoke$arity$3(h,tag__$1,parent);
}));

(sci.impl.hierarchies.underive_STAR_.cljs$lang$maxFixedArity = 3);

sci.impl.hierarchies.isa_QMARK__STAR_ = (function sci$impl$hierarchies$isa_QMARK__STAR_(var_args){
var G__71454 = arguments.length;
switch (G__71454) {
case 2:
return sci.impl.hierarchies.isa_QMARK__STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.hierarchies.isa_QMARK__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(sci.impl.hierarchies.isa_QMARK__STAR_.cljs$core$IFn$_invoke$arity$2 = (function (child,parent){
var h = cljs.core.deref(sci.impl.hierarchies.global_hierarchy());
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(h,sci.impl.hierarchies.__GT_tag(child),parent);
}));

(sci.impl.hierarchies.isa_QMARK__STAR_.cljs$core$IFn$_invoke$arity$3 = (function (h,child,parent){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(h,sci.impl.hierarchies.__GT_tag(child),parent);
}));

(sci.impl.hierarchies.isa_QMARK__STAR_.cljs$lang$maxFixedArity = 3);

sci.impl.hierarchies.ancestors_STAR_ = (function sci$impl$hierarchies$ancestors_STAR_(var_args){
var G__71458 = arguments.length;
switch (G__71458) {
case 1:
return sci.impl.hierarchies.ancestors_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.hierarchies.ancestors_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(sci.impl.hierarchies.ancestors_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (tag){
var h = cljs.core.deref(sci.impl.hierarchies.global_hierarchy());
return cljs.core.ancestors.cljs$core$IFn$_invoke$arity$2(h,tag);
}));

(sci.impl.hierarchies.ancestors_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (h,tag){
return cljs.core.ancestors.cljs$core$IFn$_invoke$arity$2(h,tag);
}));

(sci.impl.hierarchies.ancestors_STAR_.cljs$lang$maxFixedArity = 2);

sci.impl.hierarchies.descendants_STAR_ = (function sci$impl$hierarchies$descendants_STAR_(var_args){
var G__71460 = arguments.length;
switch (G__71460) {
case 1:
return sci.impl.hierarchies.descendants_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.hierarchies.descendants_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(sci.impl.hierarchies.descendants_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (tag){
var h = cljs.core.deref(sci.impl.hierarchies.global_hierarchy());
return cljs.core.descendants.cljs$core$IFn$_invoke$arity$2(h,tag);
}));

(sci.impl.hierarchies.descendants_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (h,tag){
return cljs.core.descendants.cljs$core$IFn$_invoke$arity$2(h,tag);
}));

(sci.impl.hierarchies.descendants_STAR_.cljs$lang$maxFixedArity = 2);

sci.impl.hierarchies.parents_STAR_ = (function sci$impl$hierarchies$parents_STAR_(var_args){
var G__71464 = arguments.length;
switch (G__71464) {
case 1:
return sci.impl.hierarchies.parents_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.hierarchies.parents_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(sci.impl.hierarchies.parents_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (tag){
var h = cljs.core.deref(sci.impl.hierarchies.global_hierarchy());
return cljs.core.parents.cljs$core$IFn$_invoke$arity$2(h,tag);
}));

(sci.impl.hierarchies.parents_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (h,tag){
return cljs.core.parents.cljs$core$IFn$_invoke$arity$2(h,tag);
}));

(sci.impl.hierarchies.parents_STAR_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sci.impl.hierarchies.js.map
