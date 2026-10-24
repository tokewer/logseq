goog.provide('sci.impl.core_protocols');
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._deref !== 'undefined')){
} else {
sci.impl.core_protocols._deref = (function (){var method_table__5747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__74531 = cljs.core.get_global_hierarchy;
return (fexpr__74531.cljs$core$IFn$_invoke$arity$0 ? fexpr__74531.cljs$core$IFn$_invoke$arity$0() : fexpr__74531.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-deref"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5751__auto__,method_table__5747__auto__,prefer_table__5748__auto__,method_cache__5749__auto__,cached_hierarchy__5750__auto__));
})();
}
sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__74536 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-deref","-deref",-283116853,null));
return (fexpr__74536.cljs$core$IFn$_invoke$arity$1 ? fexpr__74536.cljs$core$IFn$_invoke$arity$1(ref) : fexpr__74536.call(null,ref));
}));
sci.impl.core_protocols.ideref_default = sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref){
return cljs.core.deref(ref);
}));
sci.impl.core_protocols.deref_STAR_ = (function sci$impl$core_protocols$deref_STAR_(x){
if((function (){var or__5142__auto__ = (x instanceof cljs.core.Atom);
if(or__5142__auto__){
return or__5142__auto__;
} else {
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
return false;
}
} else {
return false;
}
}
})()){
return cljs.core.deref(x);
} else {
return sci.impl.core_protocols._deref.cljs$core$IFn$_invoke$arity$1(x);
}
});
sci.impl.core_protocols.cljs_core_ns = sci.lang.__GT_Namespace(new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null);
sci.impl.core_protocols.deref_protocol = sci.impl.utils.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IDeref","cljs.core.IDeref",-783543206,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.IDeref,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._deref]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._swap_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._swap_BANG_ = (function (){var method_table__5747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__74545 = cljs.core.get_global_hierarchy;
return (fexpr__74545.cljs$core$IFn$_invoke$arity$0 ? fexpr__74545.cljs$core$IFn$_invoke$arity$0() : fexpr__74545.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-swap!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5751__auto__,method_table__5747__auto__,prefer_table__5748__auto__,method_cache__5749__auto__,cached_hierarchy__5750__auto__));
})();
}
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._reset_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._reset_BANG_ = (function (){var method_table__5747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__74546 = cljs.core.get_global_hierarchy;
return (fexpr__74546.cljs$core$IFn$_invoke$arity$0 ? fexpr__74546.cljs$core$IFn$_invoke$arity$0() : fexpr__74546.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-reset!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5751__auto__,method_table__5747__auto__,prefer_table__5748__auto__,method_cache__5749__auto__,cached_hierarchy__5750__auto__));
})();
}
sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function() {
var G__74590 = null;
var G__74590__2 = (function (ref,f){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__74550 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__74550.cljs$core$IFn$_invoke$arity$2 ? fexpr__74550.cljs$core$IFn$_invoke$arity$2(ref,f) : fexpr__74550.call(null,ref,f));
});
var G__74590__3 = (function (ref,f,a1){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__74551 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__74551.cljs$core$IFn$_invoke$arity$3 ? fexpr__74551.cljs$core$IFn$_invoke$arity$3(ref,f,a1) : fexpr__74551.call(null,ref,f,a1));
});
var G__74590__4 = (function (ref,f,a1,a2){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__74552 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__74552.cljs$core$IFn$_invoke$arity$4 ? fexpr__74552.cljs$core$IFn$_invoke$arity$4(ref,f,a1,a2) : fexpr__74552.call(null,ref,f,a1,a2));
});
var G__74590__5 = (function() { 
var G__74593__delegate = function (ref,f,a1,a2,args){
var methods$ = sci.impl.types.getMethods(ref);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null)),ref,f,a1,a2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
};
var G__74593 = function (ref,f,a1,a2,var_args){
var args = null;
if (arguments.length > 4) {
var G__74595__i = 0, G__74595__a = new Array(arguments.length -  4);
while (G__74595__i < G__74595__a.length) {G__74595__a[G__74595__i] = arguments[G__74595__i + 4]; ++G__74595__i;}
  args = new cljs.core.IndexedSeq(G__74595__a,0,null);
} 
return G__74593__delegate.call(this,ref,f,a1,a2,args);};
G__74593.cljs$lang$maxFixedArity = 4;
G__74593.cljs$lang$applyTo = (function (arglist__74596){
var ref = cljs.core.first(arglist__74596);
arglist__74596 = cljs.core.next(arglist__74596);
var f = cljs.core.first(arglist__74596);
arglist__74596 = cljs.core.next(arglist__74596);
var a1 = cljs.core.first(arglist__74596);
arglist__74596 = cljs.core.next(arglist__74596);
var a2 = cljs.core.first(arglist__74596);
var args = cljs.core.rest(arglist__74596);
return G__74593__delegate(ref,f,a1,a2,args);
});
G__74593.cljs$core$IFn$_invoke$arity$variadic = G__74593__delegate;
return G__74593;
})()
;
G__74590 = function(ref,f,a1,a2,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return G__74590__2.call(this,ref,f);
case 3:
return G__74590__3.call(this,ref,f,a1);
case 4:
return G__74590__4.call(this,ref,f,a1,a2);
default:
var G__74597 = null;
if (arguments.length > 4) {
var G__74598__i = 0, G__74598__a = new Array(arguments.length -  4);
while (G__74598__i < G__74598__a.length) {G__74598__a[G__74598__i] = arguments[G__74598__i + 4]; ++G__74598__i;}
G__74597 = new cljs.core.IndexedSeq(G__74598__a,0,null);
}
return G__74590__5.cljs$core$IFn$_invoke$arity$variadic(ref,f,a1,a2, G__74597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__74590.cljs$lang$maxFixedArity = 4;
G__74590.cljs$lang$applyTo = G__74590__5.cljs$lang$applyTo;
G__74590.cljs$core$IFn$_invoke$arity$2 = G__74590__2;
G__74590.cljs$core$IFn$_invoke$arity$3 = G__74590__3;
G__74590.cljs$core$IFn$_invoke$arity$4 = G__74590__4;
G__74590.cljs$core$IFn$_invoke$arity$variadic = G__74590__5.cljs$core$IFn$_invoke$arity$variadic;
return G__74590;
})()
);
sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref,v){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__74554 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-reset!","-reset!",1965723739,null));
return (fexpr__74554.cljs$core$IFn$_invoke$arity$2 ? fexpr__74554.cljs$core$IFn$_invoke$arity$2(ref,v) : fexpr__74554.call(null,ref,v));
}));
sci.impl.core_protocols.iatom_defaults = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__74601__delegate = function (ref,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,ref,f,args);
};
var G__74601 = function (ref,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__74602__i = 0, G__74602__a = new Array(arguments.length -  2);
while (G__74602__i < G__74602__a.length) {G__74602__a[G__74602__i] = arguments[G__74602__i + 2]; ++G__74602__i;}
  args = new cljs.core.IndexedSeq(G__74602__a,0,null);
} 
return G__74601__delegate.call(this,ref,f,args);};
G__74601.cljs$lang$maxFixedArity = 2;
G__74601.cljs$lang$applyTo = (function (arglist__74603){
var ref = cljs.core.first(arglist__74603);
arglist__74603 = cljs.core.next(arglist__74603);
var f = cljs.core.first(arglist__74603);
var args = cljs.core.rest(arglist__74603);
return G__74601__delegate(ref,f,args);
});
G__74601.cljs$core$IFn$_invoke$arity$variadic = G__74601__delegate;
return G__74601;
})()
),sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref,v){
return cljs.core.reset_BANG_(ref,v);
}))], null);
sci.impl.core_protocols.swap_BANG__STAR_ = (function sci$impl$core_protocols$swap_BANG__STAR_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___74606 = arguments.length;
var i__5877__auto___74607 = (0);
while(true){
if((i__5877__auto___74607 < len__5876__auto___74606)){
args__5882__auto__.push((arguments[i__5877__auto___74607]));

var G__74608 = (i__5877__auto___74607 + (1));
i__5877__auto___74607 = G__74608;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,f,args){
if((function (){var or__5142__auto__ = (ref instanceof cljs.core.Atom);
if(or__5142__auto__){
return or__5142__auto__;
} else {
if((!((ref == null)))){
if((((ref.cljs$lang$protocol_mask$partition1$ & (65536))) || ((cljs.core.PROTOCOL_SENTINEL === ref.cljs$core$ISwap$)))){
return true;
} else {
return false;
}
} else {
return false;
}
}
})()){
if(cljs.core.truth_(args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,ref,f,args);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ref,f);
}
} else {
if(cljs.core.truth_(args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.core_protocols._swap_BANG_,ref,f,args);
} else {
return sci.impl.core_protocols._swap_BANG_.cljs$core$IFn$_invoke$arity$2(ref,f);
}
}
}));

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$applyTo = (function (seq74560){
var G__74561 = cljs.core.first(seq74560);
var seq74560__$1 = cljs.core.next(seq74560);
var G__74562 = cljs.core.first(seq74560__$1);
var seq74560__$2 = cljs.core.next(seq74560__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74561,G__74562,seq74560__$2);
}));

sci.impl.core_protocols.reset_BANG__STAR_ = (function sci$impl$core_protocols$reset_BANG__STAR_(ref,v){
if((function (){var or__5142__auto__ = (ref instanceof cljs.core.Atom);
if(or__5142__auto__){
return or__5142__auto__;
} else {
if((!((ref == null)))){
if((((ref.cljs$lang$protocol_mask$partition1$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === ref.cljs$core$IReset$)))){
return true;
} else {
return false;
}
} else {
return false;
}
}
})()){
return cljs.core.reset_BANG_(ref,v);
} else {
return sci.impl.core_protocols._reset_BANG_.cljs$core$IFn$_invoke$arity$2(ref,v);
}
});
sci.impl.core_protocols.swap_protocol = sci.impl.utils.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.ISwap","cljs.core.ISwap",2045511362,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.ISwap,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._swap_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.reset_protocol = sci.impl.utils.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IReset","cljs.core.IReset",348905844,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.IReset,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._reset_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.defaults = cljs.core.set(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sci.impl.core_protocols.iatom_defaults,sci.impl.core_protocols.ideref_default));

//# sourceMappingURL=sci.impl.core_protocols.js.map
