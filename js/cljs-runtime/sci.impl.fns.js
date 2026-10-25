goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__72754 = arguments.length;
switch (G__72754) {
case 5:
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 11:
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5 = (function (ctx,enclosed_array,fn_body,fn_name,macro_QMARK_){
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11(ctx,enclosed_array,fn_body,fn_name,macro_QMARK_,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"copy-enclosed->invocation","copy-enclosed->invocation",-1322388729).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"invoc-size","invoc-size",2053298058).cljs$core$IFn$_invoke$arity$1(fn_body),sci.impl.utils.current_ns_name(),new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228).cljs$core$IFn$_invoke$arity$1(fn_body));
}));

(sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11 = (function (ctx,enclosed_array,fn_body,fn_name,macro_QMARK_,fixed_arity,enclosed__GT_invocation,body,invoc_size,nsm,vararg_idx){
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__72755 = fixed_arity;
switch (G__72755) {
case (0):
var recur__71888__auto__ = sci.impl.utils.recur;
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__72756){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__72756);

while(true){
var ret__71889__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71888__auto__ === ret__71889__auto__)){
continue;
} else {
return ret__71889__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__72756 = null;
if (arguments.length > 0) {
var G__73298__i = 0, G__73298__a = new Array(arguments.length -  0);
while (G__73298__i < G__73298__a.length) {G__73298__a[G__73298__i] = arguments[G__73298__i + 0]; ++G__73298__i;}
  G__72756 = new cljs.core.IndexedSeq(G__73298__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__72756);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__73299){
var G__72756 = cljs.core.seq(arglist__73299);
return sci$impl$fns$arity_0__delegate(G__72756);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__72758,G__72759){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72758);

(invoc_array[vararg_idx] = G__72759);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__72758,var_args){
var G__72759 = null;
if (arguments.length > 1) {
var G__73300__i = 0, G__73300__a = new Array(arguments.length -  1);
while (G__73300__i < G__73300__a.length) {G__73300__a[G__73300__i] = arguments[G__73300__i + 1]; ++G__73300__i;}
  G__72759 = new cljs.core.IndexedSeq(G__73300__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__72758,G__72759);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__73301){
var G__72758 = cljs.core.first(arglist__73301);
var G__72759 = cljs.core.rest(arglist__73301);
return sci$impl$fns$arity_1__delegate(G__72758,G__72759);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__72760,G__72761,G__72762){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72760);

(invoc_array[(1)] = G__72761);

(invoc_array[vararg_idx] = G__72762);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__72760,G__72761,var_args){
var G__72762 = null;
if (arguments.length > 2) {
var G__73302__i = 0, G__73302__a = new Array(arguments.length -  2);
while (G__73302__i < G__73302__a.length) {G__73302__a[G__73302__i] = arguments[G__73302__i + 2]; ++G__73302__i;}
  G__72762 = new cljs.core.IndexedSeq(G__73302__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__72760,G__72761,G__72762);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__73303){
var G__72760 = cljs.core.first(arglist__73303);
arglist__73303 = cljs.core.next(arglist__73303);
var G__72761 = cljs.core.first(arglist__73303);
var G__72762 = cljs.core.rest(arglist__73303);
return sci$impl$fns$arity_2__delegate(G__72760,G__72761,G__72762);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__72763,G__72764,G__72765,G__72766){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72763);

(invoc_array[(1)] = G__72764);

(invoc_array[(2)] = G__72765);

(invoc_array[vararg_idx] = G__72766);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__72763,G__72764,G__72765,var_args){
var G__72766 = null;
if (arguments.length > 3) {
var G__73305__i = 0, G__73305__a = new Array(arguments.length -  3);
while (G__73305__i < G__73305__a.length) {G__73305__a[G__73305__i] = arguments[G__73305__i + 3]; ++G__73305__i;}
  G__72766 = new cljs.core.IndexedSeq(G__73305__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__72763,G__72764,G__72765,G__72766);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__73306){
var G__72763 = cljs.core.first(arglist__73306);
arglist__73306 = cljs.core.next(arglist__73306);
var G__72764 = cljs.core.first(arglist__73306);
arglist__73306 = cljs.core.next(arglist__73306);
var G__72765 = cljs.core.first(arglist__73306);
var G__72766 = cljs.core.rest(arglist__73306);
return sci$impl$fns$arity_3__delegate(G__72763,G__72764,G__72765,G__72766);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__72767,G__72768,G__72769,G__72770,G__72771){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72767);

(invoc_array[(1)] = G__72768);

(invoc_array[(2)] = G__72769);

(invoc_array[(3)] = G__72770);

(invoc_array[vararg_idx] = G__72771);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__72767,G__72768,G__72769,G__72770,var_args){
var G__72771 = null;
if (arguments.length > 4) {
var G__73307__i = 0, G__73307__a = new Array(arguments.length -  4);
while (G__73307__i < G__73307__a.length) {G__73307__a[G__73307__i] = arguments[G__73307__i + 4]; ++G__73307__i;}
  G__72771 = new cljs.core.IndexedSeq(G__73307__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__72767,G__72768,G__72769,G__72770,G__72771);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__73308){
var G__72767 = cljs.core.first(arglist__73308);
arglist__73308 = cljs.core.next(arglist__73308);
var G__72768 = cljs.core.first(arglist__73308);
arglist__73308 = cljs.core.next(arglist__73308);
var G__72769 = cljs.core.first(arglist__73308);
arglist__73308 = cljs.core.next(arglist__73308);
var G__72770 = cljs.core.first(arglist__73308);
var G__72771 = cljs.core.rest(arglist__73308);
return sci$impl$fns$arity_4__delegate(G__72767,G__72768,G__72769,G__72770,G__72771);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__72772,G__72773,G__72774,G__72775,G__72776,G__72777){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72772);

(invoc_array[(1)] = G__72773);

(invoc_array[(2)] = G__72774);

(invoc_array[(3)] = G__72775);

(invoc_array[(4)] = G__72776);

(invoc_array[vararg_idx] = G__72777);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__72772,G__72773,G__72774,G__72775,G__72776,var_args){
var G__72777 = null;
if (arguments.length > 5) {
var G__73309__i = 0, G__73309__a = new Array(arguments.length -  5);
while (G__73309__i < G__73309__a.length) {G__73309__a[G__73309__i] = arguments[G__73309__i + 5]; ++G__73309__i;}
  G__72777 = new cljs.core.IndexedSeq(G__73309__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__72772,G__72773,G__72774,G__72775,G__72776,G__72777);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__73310){
var G__72772 = cljs.core.first(arglist__73310);
arglist__73310 = cljs.core.next(arglist__73310);
var G__72773 = cljs.core.first(arglist__73310);
arglist__73310 = cljs.core.next(arglist__73310);
var G__72774 = cljs.core.first(arglist__73310);
arglist__73310 = cljs.core.next(arglist__73310);
var G__72775 = cljs.core.first(arglist__73310);
arglist__73310 = cljs.core.next(arglist__73310);
var G__72776 = cljs.core.first(arglist__73310);
var G__72777 = cljs.core.rest(arglist__73310);
return sci$impl$fns$arity_5__delegate(G__72772,G__72773,G__72774,G__72775,G__72776,G__72777);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__72782,G__72783,G__72784,G__72785,G__72786,G__72787,G__72788){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72782);

(invoc_array[(1)] = G__72783);

(invoc_array[(2)] = G__72784);

(invoc_array[(3)] = G__72785);

(invoc_array[(4)] = G__72786);

(invoc_array[(5)] = G__72787);

(invoc_array[vararg_idx] = G__72788);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__72782,G__72783,G__72784,G__72785,G__72786,G__72787,var_args){
var G__72788 = null;
if (arguments.length > 6) {
var G__73317__i = 0, G__73317__a = new Array(arguments.length -  6);
while (G__73317__i < G__73317__a.length) {G__73317__a[G__73317__i] = arguments[G__73317__i + 6]; ++G__73317__i;}
  G__72788 = new cljs.core.IndexedSeq(G__73317__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__72782,G__72783,G__72784,G__72785,G__72786,G__72787,G__72788);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__73318){
var G__72782 = cljs.core.first(arglist__73318);
arglist__73318 = cljs.core.next(arglist__73318);
var G__72783 = cljs.core.first(arglist__73318);
arglist__73318 = cljs.core.next(arglist__73318);
var G__72784 = cljs.core.first(arglist__73318);
arglist__73318 = cljs.core.next(arglist__73318);
var G__72785 = cljs.core.first(arglist__73318);
arglist__73318 = cljs.core.next(arglist__73318);
var G__72786 = cljs.core.first(arglist__73318);
arglist__73318 = cljs.core.next(arglist__73318);
var G__72787 = cljs.core.first(arglist__73318);
var G__72788 = cljs.core.rest(arglist__73318);
return sci$impl$fns$arity_6__delegate(G__72782,G__72783,G__72784,G__72785,G__72786,G__72787,G__72788);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__72789,G__72790,G__72791,G__72792,G__72793,G__72794,G__72795,G__72796){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72789);

(invoc_array[(1)] = G__72790);

(invoc_array[(2)] = G__72791);

(invoc_array[(3)] = G__72792);

(invoc_array[(4)] = G__72793);

(invoc_array[(5)] = G__72794);

(invoc_array[(6)] = G__72795);

(invoc_array[vararg_idx] = G__72796);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__72789,G__72790,G__72791,G__72792,G__72793,G__72794,G__72795,var_args){
var G__72796 = null;
if (arguments.length > 7) {
var G__73322__i = 0, G__73322__a = new Array(arguments.length -  7);
while (G__73322__i < G__73322__a.length) {G__73322__a[G__73322__i] = arguments[G__73322__i + 7]; ++G__73322__i;}
  G__72796 = new cljs.core.IndexedSeq(G__73322__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__72789,G__72790,G__72791,G__72792,G__72793,G__72794,G__72795,G__72796);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__73323){
var G__72789 = cljs.core.first(arglist__73323);
arglist__73323 = cljs.core.next(arglist__73323);
var G__72790 = cljs.core.first(arglist__73323);
arglist__73323 = cljs.core.next(arglist__73323);
var G__72791 = cljs.core.first(arglist__73323);
arglist__73323 = cljs.core.next(arglist__73323);
var G__72792 = cljs.core.first(arglist__73323);
arglist__73323 = cljs.core.next(arglist__73323);
var G__72793 = cljs.core.first(arglist__73323);
arglist__73323 = cljs.core.next(arglist__73323);
var G__72794 = cljs.core.first(arglist__73323);
arglist__73323 = cljs.core.next(arglist__73323);
var G__72795 = cljs.core.first(arglist__73323);
var G__72796 = cljs.core.rest(arglist__73323);
return sci$impl$fns$arity_7__delegate(G__72789,G__72790,G__72791,G__72792,G__72793,G__72794,G__72795,G__72796);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__72797,G__72798,G__72799,G__72800,G__72801,G__72802,G__72803,G__72804,G__72805){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72797);

(invoc_array[(1)] = G__72798);

(invoc_array[(2)] = G__72799);

(invoc_array[(3)] = G__72800);

(invoc_array[(4)] = G__72801);

(invoc_array[(5)] = G__72802);

(invoc_array[(6)] = G__72803);

(invoc_array[(7)] = G__72804);

(invoc_array[vararg_idx] = G__72805);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__72797,G__72798,G__72799,G__72800,G__72801,G__72802,G__72803,G__72804,var_args){
var G__72805 = null;
if (arguments.length > 8) {
var G__73326__i = 0, G__73326__a = new Array(arguments.length -  8);
while (G__73326__i < G__73326__a.length) {G__73326__a[G__73326__i] = arguments[G__73326__i + 8]; ++G__73326__i;}
  G__72805 = new cljs.core.IndexedSeq(G__73326__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__72797,G__72798,G__72799,G__72800,G__72801,G__72802,G__72803,G__72804,G__72805);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__73327){
var G__72797 = cljs.core.first(arglist__73327);
arglist__73327 = cljs.core.next(arglist__73327);
var G__72798 = cljs.core.first(arglist__73327);
arglist__73327 = cljs.core.next(arglist__73327);
var G__72799 = cljs.core.first(arglist__73327);
arglist__73327 = cljs.core.next(arglist__73327);
var G__72800 = cljs.core.first(arglist__73327);
arglist__73327 = cljs.core.next(arglist__73327);
var G__72801 = cljs.core.first(arglist__73327);
arglist__73327 = cljs.core.next(arglist__73327);
var G__72802 = cljs.core.first(arglist__73327);
arglist__73327 = cljs.core.next(arglist__73327);
var G__72803 = cljs.core.first(arglist__73327);
arglist__73327 = cljs.core.next(arglist__73327);
var G__72804 = cljs.core.first(arglist__73327);
var G__72805 = cljs.core.rest(arglist__73327);
return sci$impl$fns$arity_8__delegate(G__72797,G__72798,G__72799,G__72800,G__72801,G__72802,G__72803,G__72804,G__72805);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__72807,G__72808,G__72809,G__72810,G__72811,G__72812,G__72813,G__72814,G__72815,G__72816){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72807);

(invoc_array[(1)] = G__72808);

(invoc_array[(2)] = G__72809);

(invoc_array[(3)] = G__72810);

(invoc_array[(4)] = G__72811);

(invoc_array[(5)] = G__72812);

(invoc_array[(6)] = G__72813);

(invoc_array[(7)] = G__72814);

(invoc_array[(8)] = G__72815);

(invoc_array[vararg_idx] = G__72816);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__72807,G__72808,G__72809,G__72810,G__72811,G__72812,G__72813,G__72814,G__72815,var_args){
var G__72816 = null;
if (arguments.length > 9) {
var G__73331__i = 0, G__73331__a = new Array(arguments.length -  9);
while (G__73331__i < G__73331__a.length) {G__73331__a[G__73331__i] = arguments[G__73331__i + 9]; ++G__73331__i;}
  G__72816 = new cljs.core.IndexedSeq(G__73331__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__72807,G__72808,G__72809,G__72810,G__72811,G__72812,G__72813,G__72814,G__72815,G__72816);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__73332){
var G__72807 = cljs.core.first(arglist__73332);
arglist__73332 = cljs.core.next(arglist__73332);
var G__72808 = cljs.core.first(arglist__73332);
arglist__73332 = cljs.core.next(arglist__73332);
var G__72809 = cljs.core.first(arglist__73332);
arglist__73332 = cljs.core.next(arglist__73332);
var G__72810 = cljs.core.first(arglist__73332);
arglist__73332 = cljs.core.next(arglist__73332);
var G__72811 = cljs.core.first(arglist__73332);
arglist__73332 = cljs.core.next(arglist__73332);
var G__72812 = cljs.core.first(arglist__73332);
arglist__73332 = cljs.core.next(arglist__73332);
var G__72813 = cljs.core.first(arglist__73332);
arglist__73332 = cljs.core.next(arglist__73332);
var G__72814 = cljs.core.first(arglist__73332);
arglist__73332 = cljs.core.next(arglist__73332);
var G__72815 = cljs.core.first(arglist__73332);
var G__72816 = cljs.core.rest(arglist__73332);
return sci$impl$fns$arity_9__delegate(G__72807,G__72808,G__72809,G__72810,G__72811,G__72812,G__72813,G__72814,G__72815,G__72816);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__72818,G__72819,G__72820,G__72821,G__72822,G__72823,G__72824,G__72825,G__72826,G__72827,G__72828){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72818);

(invoc_array[(1)] = G__72819);

(invoc_array[(2)] = G__72820);

(invoc_array[(3)] = G__72821);

(invoc_array[(4)] = G__72822);

(invoc_array[(5)] = G__72823);

(invoc_array[(6)] = G__72824);

(invoc_array[(7)] = G__72825);

(invoc_array[(8)] = G__72826);

(invoc_array[(9)] = G__72827);

(invoc_array[vararg_idx] = G__72828);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__72818,G__72819,G__72820,G__72821,G__72822,G__72823,G__72824,G__72825,G__72826,G__72827,var_args){
var G__72828 = null;
if (arguments.length > 10) {
var G__73334__i = 0, G__73334__a = new Array(arguments.length -  10);
while (G__73334__i < G__73334__a.length) {G__73334__a[G__73334__i] = arguments[G__73334__i + 10]; ++G__73334__i;}
  G__72828 = new cljs.core.IndexedSeq(G__73334__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__72818,G__72819,G__72820,G__72821,G__72822,G__72823,G__72824,G__72825,G__72826,G__72827,G__72828);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__73335){
var G__72818 = cljs.core.first(arglist__73335);
arglist__73335 = cljs.core.next(arglist__73335);
var G__72819 = cljs.core.first(arglist__73335);
arglist__73335 = cljs.core.next(arglist__73335);
var G__72820 = cljs.core.first(arglist__73335);
arglist__73335 = cljs.core.next(arglist__73335);
var G__72821 = cljs.core.first(arglist__73335);
arglist__73335 = cljs.core.next(arglist__73335);
var G__72822 = cljs.core.first(arglist__73335);
arglist__73335 = cljs.core.next(arglist__73335);
var G__72823 = cljs.core.first(arglist__73335);
arglist__73335 = cljs.core.next(arglist__73335);
var G__72824 = cljs.core.first(arglist__73335);
arglist__73335 = cljs.core.next(arglist__73335);
var G__72825 = cljs.core.first(arglist__73335);
arglist__73335 = cljs.core.next(arglist__73335);
var G__72826 = cljs.core.first(arglist__73335);
arglist__73335 = cljs.core.next(arglist__73335);
var G__72827 = cljs.core.first(arglist__73335);
var G__72828 = cljs.core.rest(arglist__73335);
return sci$impl$fns$arity_10__delegate(G__72818,G__72819,G__72820,G__72821,G__72822,G__72823,G__72824,G__72825,G__72826,G__72827,G__72828);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__72830,G__72831,G__72832,G__72833,G__72834,G__72835,G__72836,G__72837,G__72838,G__72839,G__72840,G__72841){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72830);

(invoc_array[(1)] = G__72831);

(invoc_array[(2)] = G__72832);

(invoc_array[(3)] = G__72833);

(invoc_array[(4)] = G__72834);

(invoc_array[(5)] = G__72835);

(invoc_array[(6)] = G__72836);

(invoc_array[(7)] = G__72837);

(invoc_array[(8)] = G__72838);

(invoc_array[(9)] = G__72839);

(invoc_array[(10)] = G__72840);

(invoc_array[vararg_idx] = G__72841);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__72830,G__72831,G__72832,G__72833,G__72834,G__72835,G__72836,G__72837,G__72838,G__72839,G__72840,var_args){
var G__72841 = null;
if (arguments.length > 11) {
var G__73341__i = 0, G__73341__a = new Array(arguments.length -  11);
while (G__73341__i < G__73341__a.length) {G__73341__a[G__73341__i] = arguments[G__73341__i + 11]; ++G__73341__i;}
  G__72841 = new cljs.core.IndexedSeq(G__73341__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__72830,G__72831,G__72832,G__72833,G__72834,G__72835,G__72836,G__72837,G__72838,G__72839,G__72840,G__72841);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__73342){
var G__72830 = cljs.core.first(arglist__73342);
arglist__73342 = cljs.core.next(arglist__73342);
var G__72831 = cljs.core.first(arglist__73342);
arglist__73342 = cljs.core.next(arglist__73342);
var G__72832 = cljs.core.first(arglist__73342);
arglist__73342 = cljs.core.next(arglist__73342);
var G__72833 = cljs.core.first(arglist__73342);
arglist__73342 = cljs.core.next(arglist__73342);
var G__72834 = cljs.core.first(arglist__73342);
arglist__73342 = cljs.core.next(arglist__73342);
var G__72835 = cljs.core.first(arglist__73342);
arglist__73342 = cljs.core.next(arglist__73342);
var G__72836 = cljs.core.first(arglist__73342);
arglist__73342 = cljs.core.next(arglist__73342);
var G__72837 = cljs.core.first(arglist__73342);
arglist__73342 = cljs.core.next(arglist__73342);
var G__72838 = cljs.core.first(arglist__73342);
arglist__73342 = cljs.core.next(arglist__73342);
var G__72839 = cljs.core.first(arglist__73342);
arglist__73342 = cljs.core.next(arglist__73342);
var G__72840 = cljs.core.first(arglist__73342);
var G__72841 = cljs.core.rest(arglist__73342);
return sci$impl$fns$arity_11__delegate(G__72830,G__72831,G__72832,G__72833,G__72834,G__72835,G__72836,G__72837,G__72838,G__72839,G__72840,G__72841);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__72844,G__72845,G__72846,G__72847,G__72848,G__72849,G__72850,G__72851,G__72852,G__72853,G__72854,G__72855,G__72856){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72844);

(invoc_array[(1)] = G__72845);

(invoc_array[(2)] = G__72846);

(invoc_array[(3)] = G__72847);

(invoc_array[(4)] = G__72848);

(invoc_array[(5)] = G__72849);

(invoc_array[(6)] = G__72850);

(invoc_array[(7)] = G__72851);

(invoc_array[(8)] = G__72852);

(invoc_array[(9)] = G__72853);

(invoc_array[(10)] = G__72854);

(invoc_array[(11)] = G__72855);

(invoc_array[vararg_idx] = G__72856);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__72844,G__72845,G__72846,G__72847,G__72848,G__72849,G__72850,G__72851,G__72852,G__72853,G__72854,G__72855,var_args){
var G__72856 = null;
if (arguments.length > 12) {
var G__73343__i = 0, G__73343__a = new Array(arguments.length -  12);
while (G__73343__i < G__73343__a.length) {G__73343__a[G__73343__i] = arguments[G__73343__i + 12]; ++G__73343__i;}
  G__72856 = new cljs.core.IndexedSeq(G__73343__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__72844,G__72845,G__72846,G__72847,G__72848,G__72849,G__72850,G__72851,G__72852,G__72853,G__72854,G__72855,G__72856);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__73344){
var G__72844 = cljs.core.first(arglist__73344);
arglist__73344 = cljs.core.next(arglist__73344);
var G__72845 = cljs.core.first(arglist__73344);
arglist__73344 = cljs.core.next(arglist__73344);
var G__72846 = cljs.core.first(arglist__73344);
arglist__73344 = cljs.core.next(arglist__73344);
var G__72847 = cljs.core.first(arglist__73344);
arglist__73344 = cljs.core.next(arglist__73344);
var G__72848 = cljs.core.first(arglist__73344);
arglist__73344 = cljs.core.next(arglist__73344);
var G__72849 = cljs.core.first(arglist__73344);
arglist__73344 = cljs.core.next(arglist__73344);
var G__72850 = cljs.core.first(arglist__73344);
arglist__73344 = cljs.core.next(arglist__73344);
var G__72851 = cljs.core.first(arglist__73344);
arglist__73344 = cljs.core.next(arglist__73344);
var G__72852 = cljs.core.first(arglist__73344);
arglist__73344 = cljs.core.next(arglist__73344);
var G__72853 = cljs.core.first(arglist__73344);
arglist__73344 = cljs.core.next(arglist__73344);
var G__72854 = cljs.core.first(arglist__73344);
arglist__73344 = cljs.core.next(arglist__73344);
var G__72855 = cljs.core.first(arglist__73344);
var G__72856 = cljs.core.rest(arglist__73344);
return sci$impl$fns$arity_12__delegate(G__72844,G__72845,G__72846,G__72847,G__72848,G__72849,G__72850,G__72851,G__72852,G__72853,G__72854,G__72855,G__72856);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__72862,G__72863,G__72864,G__72865,G__72866,G__72867,G__72868,G__72869,G__72870,G__72871,G__72872,G__72873,G__72874,G__72875){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72862);

(invoc_array[(1)] = G__72863);

(invoc_array[(2)] = G__72864);

(invoc_array[(3)] = G__72865);

(invoc_array[(4)] = G__72866);

(invoc_array[(5)] = G__72867);

(invoc_array[(6)] = G__72868);

(invoc_array[(7)] = G__72869);

(invoc_array[(8)] = G__72870);

(invoc_array[(9)] = G__72871);

(invoc_array[(10)] = G__72872);

(invoc_array[(11)] = G__72873);

(invoc_array[(12)] = G__72874);

(invoc_array[vararg_idx] = G__72875);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__72862,G__72863,G__72864,G__72865,G__72866,G__72867,G__72868,G__72869,G__72870,G__72871,G__72872,G__72873,G__72874,var_args){
var G__72875 = null;
if (arguments.length > 13) {
var G__73356__i = 0, G__73356__a = new Array(arguments.length -  13);
while (G__73356__i < G__73356__a.length) {G__73356__a[G__73356__i] = arguments[G__73356__i + 13]; ++G__73356__i;}
  G__72875 = new cljs.core.IndexedSeq(G__73356__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__72862,G__72863,G__72864,G__72865,G__72866,G__72867,G__72868,G__72869,G__72870,G__72871,G__72872,G__72873,G__72874,G__72875);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__73358){
var G__72862 = cljs.core.first(arglist__73358);
arglist__73358 = cljs.core.next(arglist__73358);
var G__72863 = cljs.core.first(arglist__73358);
arglist__73358 = cljs.core.next(arglist__73358);
var G__72864 = cljs.core.first(arglist__73358);
arglist__73358 = cljs.core.next(arglist__73358);
var G__72865 = cljs.core.first(arglist__73358);
arglist__73358 = cljs.core.next(arglist__73358);
var G__72866 = cljs.core.first(arglist__73358);
arglist__73358 = cljs.core.next(arglist__73358);
var G__72867 = cljs.core.first(arglist__73358);
arglist__73358 = cljs.core.next(arglist__73358);
var G__72868 = cljs.core.first(arglist__73358);
arglist__73358 = cljs.core.next(arglist__73358);
var G__72869 = cljs.core.first(arglist__73358);
arglist__73358 = cljs.core.next(arglist__73358);
var G__72870 = cljs.core.first(arglist__73358);
arglist__73358 = cljs.core.next(arglist__73358);
var G__72871 = cljs.core.first(arglist__73358);
arglist__73358 = cljs.core.next(arglist__73358);
var G__72872 = cljs.core.first(arglist__73358);
arglist__73358 = cljs.core.next(arglist__73358);
var G__72873 = cljs.core.first(arglist__73358);
arglist__73358 = cljs.core.next(arglist__73358);
var G__72874 = cljs.core.first(arglist__73358);
var G__72875 = cljs.core.rest(arglist__73358);
return sci$impl$fns$arity_13__delegate(G__72862,G__72863,G__72864,G__72865,G__72866,G__72867,G__72868,G__72869,G__72870,G__72871,G__72872,G__72873,G__72874,G__72875);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__72877,G__72878,G__72879,G__72880,G__72881,G__72882,G__72883,G__72884,G__72885,G__72886,G__72887,G__72888,G__72889,G__72890,G__72891){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72877);

(invoc_array[(1)] = G__72878);

(invoc_array[(2)] = G__72879);

(invoc_array[(3)] = G__72880);

(invoc_array[(4)] = G__72881);

(invoc_array[(5)] = G__72882);

(invoc_array[(6)] = G__72883);

(invoc_array[(7)] = G__72884);

(invoc_array[(8)] = G__72885);

(invoc_array[(9)] = G__72886);

(invoc_array[(10)] = G__72887);

(invoc_array[(11)] = G__72888);

(invoc_array[(12)] = G__72889);

(invoc_array[(13)] = G__72890);

(invoc_array[vararg_idx] = G__72891);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__72877,G__72878,G__72879,G__72880,G__72881,G__72882,G__72883,G__72884,G__72885,G__72886,G__72887,G__72888,G__72889,G__72890,var_args){
var G__72891 = null;
if (arguments.length > 14) {
var G__73360__i = 0, G__73360__a = new Array(arguments.length -  14);
while (G__73360__i < G__73360__a.length) {G__73360__a[G__73360__i] = arguments[G__73360__i + 14]; ++G__73360__i;}
  G__72891 = new cljs.core.IndexedSeq(G__73360__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__72877,G__72878,G__72879,G__72880,G__72881,G__72882,G__72883,G__72884,G__72885,G__72886,G__72887,G__72888,G__72889,G__72890,G__72891);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__73361){
var G__72877 = cljs.core.first(arglist__73361);
arglist__73361 = cljs.core.next(arglist__73361);
var G__72878 = cljs.core.first(arglist__73361);
arglist__73361 = cljs.core.next(arglist__73361);
var G__72879 = cljs.core.first(arglist__73361);
arglist__73361 = cljs.core.next(arglist__73361);
var G__72880 = cljs.core.first(arglist__73361);
arglist__73361 = cljs.core.next(arglist__73361);
var G__72881 = cljs.core.first(arglist__73361);
arglist__73361 = cljs.core.next(arglist__73361);
var G__72882 = cljs.core.first(arglist__73361);
arglist__73361 = cljs.core.next(arglist__73361);
var G__72883 = cljs.core.first(arglist__73361);
arglist__73361 = cljs.core.next(arglist__73361);
var G__72884 = cljs.core.first(arglist__73361);
arglist__73361 = cljs.core.next(arglist__73361);
var G__72885 = cljs.core.first(arglist__73361);
arglist__73361 = cljs.core.next(arglist__73361);
var G__72886 = cljs.core.first(arglist__73361);
arglist__73361 = cljs.core.next(arglist__73361);
var G__72887 = cljs.core.first(arglist__73361);
arglist__73361 = cljs.core.next(arglist__73361);
var G__72888 = cljs.core.first(arglist__73361);
arglist__73361 = cljs.core.next(arglist__73361);
var G__72889 = cljs.core.first(arglist__73361);
arglist__73361 = cljs.core.next(arglist__73361);
var G__72890 = cljs.core.first(arglist__73361);
var G__72891 = cljs.core.rest(arglist__73361);
return sci$impl$fns$arity_14__delegate(G__72877,G__72878,G__72879,G__72880,G__72881,G__72882,G__72883,G__72884,G__72885,G__72886,G__72887,G__72888,G__72889,G__72890,G__72891);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__72894,G__72895,G__72896,G__72897,G__72898,G__72899,G__72900,G__72901,G__72902,G__72903,G__72904,G__72905,G__72906,G__72907,G__72908,G__72909){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72894);

(invoc_array[(1)] = G__72895);

(invoc_array[(2)] = G__72896);

(invoc_array[(3)] = G__72897);

(invoc_array[(4)] = G__72898);

(invoc_array[(5)] = G__72899);

(invoc_array[(6)] = G__72900);

(invoc_array[(7)] = G__72901);

(invoc_array[(8)] = G__72902);

(invoc_array[(9)] = G__72903);

(invoc_array[(10)] = G__72904);

(invoc_array[(11)] = G__72905);

(invoc_array[(12)] = G__72906);

(invoc_array[(13)] = G__72907);

(invoc_array[(14)] = G__72908);

(invoc_array[vararg_idx] = G__72909);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__72894,G__72895,G__72896,G__72897,G__72898,G__72899,G__72900,G__72901,G__72902,G__72903,G__72904,G__72905,G__72906,G__72907,G__72908,var_args){
var G__72909 = null;
if (arguments.length > 15) {
var G__73366__i = 0, G__73366__a = new Array(arguments.length -  15);
while (G__73366__i < G__73366__a.length) {G__73366__a[G__73366__i] = arguments[G__73366__i + 15]; ++G__73366__i;}
  G__72909 = new cljs.core.IndexedSeq(G__73366__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__72894,G__72895,G__72896,G__72897,G__72898,G__72899,G__72900,G__72901,G__72902,G__72903,G__72904,G__72905,G__72906,G__72907,G__72908,G__72909);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__73367){
var G__72894 = cljs.core.first(arglist__73367);
arglist__73367 = cljs.core.next(arglist__73367);
var G__72895 = cljs.core.first(arglist__73367);
arglist__73367 = cljs.core.next(arglist__73367);
var G__72896 = cljs.core.first(arglist__73367);
arglist__73367 = cljs.core.next(arglist__73367);
var G__72897 = cljs.core.first(arglist__73367);
arglist__73367 = cljs.core.next(arglist__73367);
var G__72898 = cljs.core.first(arglist__73367);
arglist__73367 = cljs.core.next(arglist__73367);
var G__72899 = cljs.core.first(arglist__73367);
arglist__73367 = cljs.core.next(arglist__73367);
var G__72900 = cljs.core.first(arglist__73367);
arglist__73367 = cljs.core.next(arglist__73367);
var G__72901 = cljs.core.first(arglist__73367);
arglist__73367 = cljs.core.next(arglist__73367);
var G__72902 = cljs.core.first(arglist__73367);
arglist__73367 = cljs.core.next(arglist__73367);
var G__72903 = cljs.core.first(arglist__73367);
arglist__73367 = cljs.core.next(arglist__73367);
var G__72904 = cljs.core.first(arglist__73367);
arglist__73367 = cljs.core.next(arglist__73367);
var G__72905 = cljs.core.first(arglist__73367);
arglist__73367 = cljs.core.next(arglist__73367);
var G__72906 = cljs.core.first(arglist__73367);
arglist__73367 = cljs.core.next(arglist__73367);
var G__72907 = cljs.core.first(arglist__73367);
arglist__73367 = cljs.core.next(arglist__73367);
var G__72908 = cljs.core.first(arglist__73367);
var G__72909 = cljs.core.rest(arglist__73367);
return sci$impl$fns$arity_15__delegate(G__72894,G__72895,G__72896,G__72897,G__72898,G__72899,G__72900,G__72901,G__72902,G__72903,G__72904,G__72905,G__72906,G__72907,G__72908,G__72909);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__72918,G__72919,G__72920,G__72921,G__72922,G__72923,G__72924,G__72925,G__72926,G__72927,G__72928,G__72929,G__72930,G__72931,G__72932,G__72933,G__72934){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72918);

(invoc_array[(1)] = G__72919);

(invoc_array[(2)] = G__72920);

(invoc_array[(3)] = G__72921);

(invoc_array[(4)] = G__72922);

(invoc_array[(5)] = G__72923);

(invoc_array[(6)] = G__72924);

(invoc_array[(7)] = G__72925);

(invoc_array[(8)] = G__72926);

(invoc_array[(9)] = G__72927);

(invoc_array[(10)] = G__72928);

(invoc_array[(11)] = G__72929);

(invoc_array[(12)] = G__72930);

(invoc_array[(13)] = G__72931);

(invoc_array[(14)] = G__72932);

(invoc_array[(15)] = G__72933);

(invoc_array[vararg_idx] = G__72934);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__72918,G__72919,G__72920,G__72921,G__72922,G__72923,G__72924,G__72925,G__72926,G__72927,G__72928,G__72929,G__72930,G__72931,G__72932,G__72933,var_args){
var G__72934 = null;
if (arguments.length > 16) {
var G__73373__i = 0, G__73373__a = new Array(arguments.length -  16);
while (G__73373__i < G__73373__a.length) {G__73373__a[G__73373__i] = arguments[G__73373__i + 16]; ++G__73373__i;}
  G__72934 = new cljs.core.IndexedSeq(G__73373__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__72918,G__72919,G__72920,G__72921,G__72922,G__72923,G__72924,G__72925,G__72926,G__72927,G__72928,G__72929,G__72930,G__72931,G__72932,G__72933,G__72934);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__73376){
var G__72918 = cljs.core.first(arglist__73376);
arglist__73376 = cljs.core.next(arglist__73376);
var G__72919 = cljs.core.first(arglist__73376);
arglist__73376 = cljs.core.next(arglist__73376);
var G__72920 = cljs.core.first(arglist__73376);
arglist__73376 = cljs.core.next(arglist__73376);
var G__72921 = cljs.core.first(arglist__73376);
arglist__73376 = cljs.core.next(arglist__73376);
var G__72922 = cljs.core.first(arglist__73376);
arglist__73376 = cljs.core.next(arglist__73376);
var G__72923 = cljs.core.first(arglist__73376);
arglist__73376 = cljs.core.next(arglist__73376);
var G__72924 = cljs.core.first(arglist__73376);
arglist__73376 = cljs.core.next(arglist__73376);
var G__72925 = cljs.core.first(arglist__73376);
arglist__73376 = cljs.core.next(arglist__73376);
var G__72926 = cljs.core.first(arglist__73376);
arglist__73376 = cljs.core.next(arglist__73376);
var G__72927 = cljs.core.first(arglist__73376);
arglist__73376 = cljs.core.next(arglist__73376);
var G__72928 = cljs.core.first(arglist__73376);
arglist__73376 = cljs.core.next(arglist__73376);
var G__72929 = cljs.core.first(arglist__73376);
arglist__73376 = cljs.core.next(arglist__73376);
var G__72930 = cljs.core.first(arglist__73376);
arglist__73376 = cljs.core.next(arglist__73376);
var G__72931 = cljs.core.first(arglist__73376);
arglist__73376 = cljs.core.next(arglist__73376);
var G__72932 = cljs.core.first(arglist__73376);
arglist__73376 = cljs.core.next(arglist__73376);
var G__72933 = cljs.core.first(arglist__73376);
var G__72934 = cljs.core.rest(arglist__73376);
return sci$impl$fns$arity_16__delegate(G__72918,G__72919,G__72920,G__72921,G__72922,G__72923,G__72924,G__72925,G__72926,G__72927,G__72928,G__72929,G__72930,G__72931,G__72932,G__72933,G__72934);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__72939,G__72940,G__72941,G__72942,G__72943,G__72944,G__72945,G__72946,G__72947,G__72948,G__72949,G__72950,G__72951,G__72952,G__72953,G__72954,G__72955,G__72956){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72939);

(invoc_array[(1)] = G__72940);

(invoc_array[(2)] = G__72941);

(invoc_array[(3)] = G__72942);

(invoc_array[(4)] = G__72943);

(invoc_array[(5)] = G__72944);

(invoc_array[(6)] = G__72945);

(invoc_array[(7)] = G__72946);

(invoc_array[(8)] = G__72947);

(invoc_array[(9)] = G__72948);

(invoc_array[(10)] = G__72949);

(invoc_array[(11)] = G__72950);

(invoc_array[(12)] = G__72951);

(invoc_array[(13)] = G__72952);

(invoc_array[(14)] = G__72953);

(invoc_array[(15)] = G__72954);

(invoc_array[(16)] = G__72955);

(invoc_array[vararg_idx] = G__72956);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__72939,G__72940,G__72941,G__72942,G__72943,G__72944,G__72945,G__72946,G__72947,G__72948,G__72949,G__72950,G__72951,G__72952,G__72953,G__72954,G__72955,var_args){
var G__72956 = null;
if (arguments.length > 17) {
var G__73378__i = 0, G__73378__a = new Array(arguments.length -  17);
while (G__73378__i < G__73378__a.length) {G__73378__a[G__73378__i] = arguments[G__73378__i + 17]; ++G__73378__i;}
  G__72956 = new cljs.core.IndexedSeq(G__73378__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__72939,G__72940,G__72941,G__72942,G__72943,G__72944,G__72945,G__72946,G__72947,G__72948,G__72949,G__72950,G__72951,G__72952,G__72953,G__72954,G__72955,G__72956);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__73380){
var G__72939 = cljs.core.first(arglist__73380);
arglist__73380 = cljs.core.next(arglist__73380);
var G__72940 = cljs.core.first(arglist__73380);
arglist__73380 = cljs.core.next(arglist__73380);
var G__72941 = cljs.core.first(arglist__73380);
arglist__73380 = cljs.core.next(arglist__73380);
var G__72942 = cljs.core.first(arglist__73380);
arglist__73380 = cljs.core.next(arglist__73380);
var G__72943 = cljs.core.first(arglist__73380);
arglist__73380 = cljs.core.next(arglist__73380);
var G__72944 = cljs.core.first(arglist__73380);
arglist__73380 = cljs.core.next(arglist__73380);
var G__72945 = cljs.core.first(arglist__73380);
arglist__73380 = cljs.core.next(arglist__73380);
var G__72946 = cljs.core.first(arglist__73380);
arglist__73380 = cljs.core.next(arglist__73380);
var G__72947 = cljs.core.first(arglist__73380);
arglist__73380 = cljs.core.next(arglist__73380);
var G__72948 = cljs.core.first(arglist__73380);
arglist__73380 = cljs.core.next(arglist__73380);
var G__72949 = cljs.core.first(arglist__73380);
arglist__73380 = cljs.core.next(arglist__73380);
var G__72950 = cljs.core.first(arglist__73380);
arglist__73380 = cljs.core.next(arglist__73380);
var G__72951 = cljs.core.first(arglist__73380);
arglist__73380 = cljs.core.next(arglist__73380);
var G__72952 = cljs.core.first(arglist__73380);
arglist__73380 = cljs.core.next(arglist__73380);
var G__72953 = cljs.core.first(arglist__73380);
arglist__73380 = cljs.core.next(arglist__73380);
var G__72954 = cljs.core.first(arglist__73380);
arglist__73380 = cljs.core.next(arglist__73380);
var G__72955 = cljs.core.first(arglist__73380);
var G__72956 = cljs.core.rest(arglist__73380);
return sci$impl$fns$arity_17__delegate(G__72939,G__72940,G__72941,G__72942,G__72943,G__72944,G__72945,G__72946,G__72947,G__72948,G__72949,G__72950,G__72951,G__72952,G__72953,G__72954,G__72955,G__72956);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__72961,G__72962,G__72963,G__72964,G__72965,G__72966,G__72967,G__72968,G__72969,G__72970,G__72971,G__72972,G__72973,G__72974,G__72975,G__72976,G__72977,G__72978,G__72979){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72961);

(invoc_array[(1)] = G__72962);

(invoc_array[(2)] = G__72963);

(invoc_array[(3)] = G__72964);

(invoc_array[(4)] = G__72965);

(invoc_array[(5)] = G__72966);

(invoc_array[(6)] = G__72967);

(invoc_array[(7)] = G__72968);

(invoc_array[(8)] = G__72969);

(invoc_array[(9)] = G__72970);

(invoc_array[(10)] = G__72971);

(invoc_array[(11)] = G__72972);

(invoc_array[(12)] = G__72973);

(invoc_array[(13)] = G__72974);

(invoc_array[(14)] = G__72975);

(invoc_array[(15)] = G__72976);

(invoc_array[(16)] = G__72977);

(invoc_array[(17)] = G__72978);

(invoc_array[vararg_idx] = G__72979);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__72961,G__72962,G__72963,G__72964,G__72965,G__72966,G__72967,G__72968,G__72969,G__72970,G__72971,G__72972,G__72973,G__72974,G__72975,G__72976,G__72977,G__72978,var_args){
var G__72979 = null;
if (arguments.length > 18) {
var G__73386__i = 0, G__73386__a = new Array(arguments.length -  18);
while (G__73386__i < G__73386__a.length) {G__73386__a[G__73386__i] = arguments[G__73386__i + 18]; ++G__73386__i;}
  G__72979 = new cljs.core.IndexedSeq(G__73386__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__72961,G__72962,G__72963,G__72964,G__72965,G__72966,G__72967,G__72968,G__72969,G__72970,G__72971,G__72972,G__72973,G__72974,G__72975,G__72976,G__72977,G__72978,G__72979);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__73387){
var G__72961 = cljs.core.first(arglist__73387);
arglist__73387 = cljs.core.next(arglist__73387);
var G__72962 = cljs.core.first(arglist__73387);
arglist__73387 = cljs.core.next(arglist__73387);
var G__72963 = cljs.core.first(arglist__73387);
arglist__73387 = cljs.core.next(arglist__73387);
var G__72964 = cljs.core.first(arglist__73387);
arglist__73387 = cljs.core.next(arglist__73387);
var G__72965 = cljs.core.first(arglist__73387);
arglist__73387 = cljs.core.next(arglist__73387);
var G__72966 = cljs.core.first(arglist__73387);
arglist__73387 = cljs.core.next(arglist__73387);
var G__72967 = cljs.core.first(arglist__73387);
arglist__73387 = cljs.core.next(arglist__73387);
var G__72968 = cljs.core.first(arglist__73387);
arglist__73387 = cljs.core.next(arglist__73387);
var G__72969 = cljs.core.first(arglist__73387);
arglist__73387 = cljs.core.next(arglist__73387);
var G__72970 = cljs.core.first(arglist__73387);
arglist__73387 = cljs.core.next(arglist__73387);
var G__72971 = cljs.core.first(arglist__73387);
arglist__73387 = cljs.core.next(arglist__73387);
var G__72972 = cljs.core.first(arglist__73387);
arglist__73387 = cljs.core.next(arglist__73387);
var G__72973 = cljs.core.first(arglist__73387);
arglist__73387 = cljs.core.next(arglist__73387);
var G__72974 = cljs.core.first(arglist__73387);
arglist__73387 = cljs.core.next(arglist__73387);
var G__72975 = cljs.core.first(arglist__73387);
arglist__73387 = cljs.core.next(arglist__73387);
var G__72976 = cljs.core.first(arglist__73387);
arglist__73387 = cljs.core.next(arglist__73387);
var G__72977 = cljs.core.first(arglist__73387);
arglist__73387 = cljs.core.next(arglist__73387);
var G__72978 = cljs.core.first(arglist__73387);
var G__72979 = cljs.core.rest(arglist__73387);
return sci$impl$fns$arity_18__delegate(G__72961,G__72962,G__72963,G__72964,G__72965,G__72966,G__72967,G__72968,G__72969,G__72970,G__72971,G__72972,G__72973,G__72974,G__72975,G__72976,G__72977,G__72978,G__72979);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__72984,G__72985,G__72986,G__72987,G__72988,G__72989,G__72990,G__72991,G__72992,G__72993,G__72994,G__72995,G__72996,G__72997,G__72998,G__72999,G__73000,G__73001,G__73002,G__73003){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72984);

(invoc_array[(1)] = G__72985);

(invoc_array[(2)] = G__72986);

(invoc_array[(3)] = G__72987);

(invoc_array[(4)] = G__72988);

(invoc_array[(5)] = G__72989);

(invoc_array[(6)] = G__72990);

(invoc_array[(7)] = G__72991);

(invoc_array[(8)] = G__72992);

(invoc_array[(9)] = G__72993);

(invoc_array[(10)] = G__72994);

(invoc_array[(11)] = G__72995);

(invoc_array[(12)] = G__72996);

(invoc_array[(13)] = G__72997);

(invoc_array[(14)] = G__72998);

(invoc_array[(15)] = G__72999);

(invoc_array[(16)] = G__73000);

(invoc_array[(17)] = G__73001);

(invoc_array[(18)] = G__73002);

(invoc_array[vararg_idx] = G__73003);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__72984,G__72985,G__72986,G__72987,G__72988,G__72989,G__72990,G__72991,G__72992,G__72993,G__72994,G__72995,G__72996,G__72997,G__72998,G__72999,G__73000,G__73001,G__73002,var_args){
var G__73003 = null;
if (arguments.length > 19) {
var G__73390__i = 0, G__73390__a = new Array(arguments.length -  19);
while (G__73390__i < G__73390__a.length) {G__73390__a[G__73390__i] = arguments[G__73390__i + 19]; ++G__73390__i;}
  G__73003 = new cljs.core.IndexedSeq(G__73390__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__72984,G__72985,G__72986,G__72987,G__72988,G__72989,G__72990,G__72991,G__72992,G__72993,G__72994,G__72995,G__72996,G__72997,G__72998,G__72999,G__73000,G__73001,G__73002,G__73003);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__73392){
var G__72984 = cljs.core.first(arglist__73392);
arglist__73392 = cljs.core.next(arglist__73392);
var G__72985 = cljs.core.first(arglist__73392);
arglist__73392 = cljs.core.next(arglist__73392);
var G__72986 = cljs.core.first(arglist__73392);
arglist__73392 = cljs.core.next(arglist__73392);
var G__72987 = cljs.core.first(arglist__73392);
arglist__73392 = cljs.core.next(arglist__73392);
var G__72988 = cljs.core.first(arglist__73392);
arglist__73392 = cljs.core.next(arglist__73392);
var G__72989 = cljs.core.first(arglist__73392);
arglist__73392 = cljs.core.next(arglist__73392);
var G__72990 = cljs.core.first(arglist__73392);
arglist__73392 = cljs.core.next(arglist__73392);
var G__72991 = cljs.core.first(arglist__73392);
arglist__73392 = cljs.core.next(arglist__73392);
var G__72992 = cljs.core.first(arglist__73392);
arglist__73392 = cljs.core.next(arglist__73392);
var G__72993 = cljs.core.first(arglist__73392);
arglist__73392 = cljs.core.next(arglist__73392);
var G__72994 = cljs.core.first(arglist__73392);
arglist__73392 = cljs.core.next(arglist__73392);
var G__72995 = cljs.core.first(arglist__73392);
arglist__73392 = cljs.core.next(arglist__73392);
var G__72996 = cljs.core.first(arglist__73392);
arglist__73392 = cljs.core.next(arglist__73392);
var G__72997 = cljs.core.first(arglist__73392);
arglist__73392 = cljs.core.next(arglist__73392);
var G__72998 = cljs.core.first(arglist__73392);
arglist__73392 = cljs.core.next(arglist__73392);
var G__72999 = cljs.core.first(arglist__73392);
arglist__73392 = cljs.core.next(arglist__73392);
var G__73000 = cljs.core.first(arglist__73392);
arglist__73392 = cljs.core.next(arglist__73392);
var G__73001 = cljs.core.first(arglist__73392);
arglist__73392 = cljs.core.next(arglist__73392);
var G__73002 = cljs.core.first(arglist__73392);
var G__73003 = cljs.core.rest(arglist__73392);
return sci$impl$fns$arity_19__delegate(G__72984,G__72985,G__72986,G__72987,G__72988,G__72989,G__72990,G__72991,G__72992,G__72993,G__72994,G__72995,G__72996,G__72997,G__72998,G__72999,G__73000,G__73001,G__73002,G__73003);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__73009,G__73010,G__73011,G__73012,G__73013,G__73014,G__73015,G__73016,G__73017,G__73018,G__73019,G__73020,G__73021,G__73022,G__73023,G__73024,G__73025,G__73026,G__73027,G__73028,G__73029){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73009);

(invoc_array[(1)] = G__73010);

(invoc_array[(2)] = G__73011);

(invoc_array[(3)] = G__73012);

(invoc_array[(4)] = G__73013);

(invoc_array[(5)] = G__73014);

(invoc_array[(6)] = G__73015);

(invoc_array[(7)] = G__73016);

(invoc_array[(8)] = G__73017);

(invoc_array[(9)] = G__73018);

(invoc_array[(10)] = G__73019);

(invoc_array[(11)] = G__73020);

(invoc_array[(12)] = G__73021);

(invoc_array[(13)] = G__73022);

(invoc_array[(14)] = G__73023);

(invoc_array[(15)] = G__73024);

(invoc_array[(16)] = G__73025);

(invoc_array[(17)] = G__73026);

(invoc_array[(18)] = G__73027);

(invoc_array[(19)] = G__73028);

(invoc_array[vararg_idx] = G__73029);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__73009,G__73010,G__73011,G__73012,G__73013,G__73014,G__73015,G__73016,G__73017,G__73018,G__73019,G__73020,G__73021,G__73022,G__73023,G__73024,G__73025,G__73026,G__73027,G__73028,var_args){
var G__73029 = null;
if (arguments.length > 20) {
var G__73397__i = 0, G__73397__a = new Array(arguments.length -  20);
while (G__73397__i < G__73397__a.length) {G__73397__a[G__73397__i] = arguments[G__73397__i + 20]; ++G__73397__i;}
  G__73029 = new cljs.core.IndexedSeq(G__73397__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__73009,G__73010,G__73011,G__73012,G__73013,G__73014,G__73015,G__73016,G__73017,G__73018,G__73019,G__73020,G__73021,G__73022,G__73023,G__73024,G__73025,G__73026,G__73027,G__73028,G__73029);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__73398){
var G__73009 = cljs.core.first(arglist__73398);
arglist__73398 = cljs.core.next(arglist__73398);
var G__73010 = cljs.core.first(arglist__73398);
arglist__73398 = cljs.core.next(arglist__73398);
var G__73011 = cljs.core.first(arglist__73398);
arglist__73398 = cljs.core.next(arglist__73398);
var G__73012 = cljs.core.first(arglist__73398);
arglist__73398 = cljs.core.next(arglist__73398);
var G__73013 = cljs.core.first(arglist__73398);
arglist__73398 = cljs.core.next(arglist__73398);
var G__73014 = cljs.core.first(arglist__73398);
arglist__73398 = cljs.core.next(arglist__73398);
var G__73015 = cljs.core.first(arglist__73398);
arglist__73398 = cljs.core.next(arglist__73398);
var G__73016 = cljs.core.first(arglist__73398);
arglist__73398 = cljs.core.next(arglist__73398);
var G__73017 = cljs.core.first(arglist__73398);
arglist__73398 = cljs.core.next(arglist__73398);
var G__73018 = cljs.core.first(arglist__73398);
arglist__73398 = cljs.core.next(arglist__73398);
var G__73019 = cljs.core.first(arglist__73398);
arglist__73398 = cljs.core.next(arglist__73398);
var G__73020 = cljs.core.first(arglist__73398);
arglist__73398 = cljs.core.next(arglist__73398);
var G__73021 = cljs.core.first(arglist__73398);
arglist__73398 = cljs.core.next(arglist__73398);
var G__73022 = cljs.core.first(arglist__73398);
arglist__73398 = cljs.core.next(arglist__73398);
var G__73023 = cljs.core.first(arglist__73398);
arglist__73398 = cljs.core.next(arglist__73398);
var G__73024 = cljs.core.first(arglist__73398);
arglist__73398 = cljs.core.next(arglist__73398);
var G__73025 = cljs.core.first(arglist__73398);
arglist__73398 = cljs.core.next(arglist__73398);
var G__73026 = cljs.core.first(arglist__73398);
arglist__73398 = cljs.core.next(arglist__73398);
var G__73027 = cljs.core.first(arglist__73398);
arglist__73398 = cljs.core.next(arglist__73398);
var G__73028 = cljs.core.first(arglist__73398);
var G__73029 = cljs.core.rest(arglist__73398);
return sci$impl$fns$arity_20__delegate(G__73009,G__73010,G__73011,G__73012,G__73013,G__73014,G__73015,G__73016,G__73017,G__73018,G__73019,G__73020,G__73021,G__73022,G__73023,G__73024,G__73025,G__73026,G__73027,G__73028,G__73029);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__72755))));

}
})():(function (){var G__73030 = fixed_arity;
switch (G__73030) {
case (0):
var recur__71888__auto__ = sci.impl.utils.recur;
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__71889__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71888__auto__ === ret__71889__auto__)){
continue;
} else {
return ret__71889__auto__;
}
break;
}
});

break;
case (1):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function sci$impl$fns$arity_1(G__73031){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73031);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
});

break;
case (2):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function sci$impl$fns$arity_2(G__73032,G__73033){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73032);

(invoc_array[(1)] = G__73033);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
});

break;
case (3):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function sci$impl$fns$arity_3(G__73034,G__73035,G__73036){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73034);

(invoc_array[(1)] = G__73035);

(invoc_array[(2)] = G__73036);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
});

break;
case (4):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function sci$impl$fns$arity_4(G__73037,G__73038,G__73039,G__73040){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73037);

(invoc_array[(1)] = G__73038);

(invoc_array[(2)] = G__73039);

(invoc_array[(3)] = G__73040);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
});

break;
case (5):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function sci$impl$fns$arity_5(G__73041,G__73042,G__73043,G__73044,G__73045){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73041);

(invoc_array[(1)] = G__73042);

(invoc_array[(2)] = G__73043);

(invoc_array[(3)] = G__73044);

(invoc_array[(4)] = G__73045);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
});

break;
case (6):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function sci$impl$fns$arity_6(G__73046,G__73047,G__73048,G__73049,G__73050,G__73051){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73046);

(invoc_array[(1)] = G__73047);

(invoc_array[(2)] = G__73048);

(invoc_array[(3)] = G__73049);

(invoc_array[(4)] = G__73050);

(invoc_array[(5)] = G__73051);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
});

break;
case (7):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function sci$impl$fns$arity_7(G__73052,G__73053,G__73054,G__73055,G__73056,G__73057,G__73058){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73052);

(invoc_array[(1)] = G__73053);

(invoc_array[(2)] = G__73054);

(invoc_array[(3)] = G__73055);

(invoc_array[(4)] = G__73056);

(invoc_array[(5)] = G__73057);

(invoc_array[(6)] = G__73058);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
});

break;
case (8):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function sci$impl$fns$arity_8(G__73061,G__73062,G__73063,G__73064,G__73065,G__73066,G__73067,G__73068){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73061);

(invoc_array[(1)] = G__73062);

(invoc_array[(2)] = G__73063);

(invoc_array[(3)] = G__73064);

(invoc_array[(4)] = G__73065);

(invoc_array[(5)] = G__73066);

(invoc_array[(6)] = G__73067);

(invoc_array[(7)] = G__73068);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
});

break;
case (9):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function sci$impl$fns$arity_9(G__73069,G__73070,G__73071,G__73072,G__73073,G__73074,G__73075,G__73076,G__73077){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73069);

(invoc_array[(1)] = G__73070);

(invoc_array[(2)] = G__73071);

(invoc_array[(3)] = G__73072);

(invoc_array[(4)] = G__73073);

(invoc_array[(5)] = G__73074);

(invoc_array[(6)] = G__73075);

(invoc_array[(7)] = G__73076);

(invoc_array[(8)] = G__73077);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
});

break;
case (10):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function sci$impl$fns$arity_10(G__73078,G__73079,G__73080,G__73081,G__73082,G__73083,G__73084,G__73085,G__73086,G__73087){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73078);

(invoc_array[(1)] = G__73079);

(invoc_array[(2)] = G__73080);

(invoc_array[(3)] = G__73081);

(invoc_array[(4)] = G__73082);

(invoc_array[(5)] = G__73083);

(invoc_array[(6)] = G__73084);

(invoc_array[(7)] = G__73085);

(invoc_array[(8)] = G__73086);

(invoc_array[(9)] = G__73087);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
});

break;
case (11):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function sci$impl$fns$arity_11(G__73088,G__73089,G__73090,G__73091,G__73092,G__73093,G__73094,G__73095,G__73096,G__73097,G__73098){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73088);

(invoc_array[(1)] = G__73089);

(invoc_array[(2)] = G__73090);

(invoc_array[(3)] = G__73091);

(invoc_array[(4)] = G__73092);

(invoc_array[(5)] = G__73093);

(invoc_array[(6)] = G__73094);

(invoc_array[(7)] = G__73095);

(invoc_array[(8)] = G__73096);

(invoc_array[(9)] = G__73097);

(invoc_array[(10)] = G__73098);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
});

break;
case (12):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function sci$impl$fns$arity_12(G__73099,G__73100,G__73101,G__73102,G__73103,G__73104,G__73105,G__73106,G__73107,G__73108,G__73109,G__73110){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73099);

(invoc_array[(1)] = G__73100);

(invoc_array[(2)] = G__73101);

(invoc_array[(3)] = G__73102);

(invoc_array[(4)] = G__73103);

(invoc_array[(5)] = G__73104);

(invoc_array[(6)] = G__73105);

(invoc_array[(7)] = G__73106);

(invoc_array[(8)] = G__73107);

(invoc_array[(9)] = G__73108);

(invoc_array[(10)] = G__73109);

(invoc_array[(11)] = G__73110);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
});

break;
case (13):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function sci$impl$fns$arity_13(G__73112,G__73113,G__73114,G__73115,G__73116,G__73117,G__73118,G__73119,G__73120,G__73121,G__73122,G__73123,G__73124){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73112);

(invoc_array[(1)] = G__73113);

(invoc_array[(2)] = G__73114);

(invoc_array[(3)] = G__73115);

(invoc_array[(4)] = G__73116);

(invoc_array[(5)] = G__73117);

(invoc_array[(6)] = G__73118);

(invoc_array[(7)] = G__73119);

(invoc_array[(8)] = G__73120);

(invoc_array[(9)] = G__73121);

(invoc_array[(10)] = G__73122);

(invoc_array[(11)] = G__73123);

(invoc_array[(12)] = G__73124);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
});

break;
case (14):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function sci$impl$fns$arity_14(G__73125,G__73126,G__73127,G__73128,G__73129,G__73130,G__73131,G__73132,G__73133,G__73134,G__73135,G__73136,G__73137,G__73138){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73125);

(invoc_array[(1)] = G__73126);

(invoc_array[(2)] = G__73127);

(invoc_array[(3)] = G__73128);

(invoc_array[(4)] = G__73129);

(invoc_array[(5)] = G__73130);

(invoc_array[(6)] = G__73131);

(invoc_array[(7)] = G__73132);

(invoc_array[(8)] = G__73133);

(invoc_array[(9)] = G__73134);

(invoc_array[(10)] = G__73135);

(invoc_array[(11)] = G__73136);

(invoc_array[(12)] = G__73137);

(invoc_array[(13)] = G__73138);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
});

break;
case (15):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function sci$impl$fns$arity_15(G__73139,G__73140,G__73141,G__73142,G__73143,G__73144,G__73145,G__73146,G__73147,G__73148,G__73149,G__73150,G__73151,G__73152,G__73153){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73139);

(invoc_array[(1)] = G__73140);

(invoc_array[(2)] = G__73141);

(invoc_array[(3)] = G__73142);

(invoc_array[(4)] = G__73143);

(invoc_array[(5)] = G__73144);

(invoc_array[(6)] = G__73145);

(invoc_array[(7)] = G__73146);

(invoc_array[(8)] = G__73147);

(invoc_array[(9)] = G__73148);

(invoc_array[(10)] = G__73149);

(invoc_array[(11)] = G__73150);

(invoc_array[(12)] = G__73151);

(invoc_array[(13)] = G__73152);

(invoc_array[(14)] = G__73153);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
});

break;
case (16):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function sci$impl$fns$arity_16(G__73157,G__73158,G__73159,G__73160,G__73161,G__73162,G__73163,G__73164,G__73165,G__73166,G__73167,G__73168,G__73169,G__73170,G__73171,G__73172){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73157);

(invoc_array[(1)] = G__73158);

(invoc_array[(2)] = G__73159);

(invoc_array[(3)] = G__73160);

(invoc_array[(4)] = G__73161);

(invoc_array[(5)] = G__73162);

(invoc_array[(6)] = G__73163);

(invoc_array[(7)] = G__73164);

(invoc_array[(8)] = G__73165);

(invoc_array[(9)] = G__73166);

(invoc_array[(10)] = G__73167);

(invoc_array[(11)] = G__73168);

(invoc_array[(12)] = G__73169);

(invoc_array[(13)] = G__73170);

(invoc_array[(14)] = G__73171);

(invoc_array[(15)] = G__73172);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
});

break;
case (17):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function sci$impl$fns$arity_17(G__73176,G__73177,G__73178,G__73179,G__73180,G__73181,G__73182,G__73183,G__73184,G__73185,G__73186,G__73187,G__73188,G__73189,G__73190,G__73191,G__73192){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73176);

(invoc_array[(1)] = G__73177);

(invoc_array[(2)] = G__73178);

(invoc_array[(3)] = G__73179);

(invoc_array[(4)] = G__73180);

(invoc_array[(5)] = G__73181);

(invoc_array[(6)] = G__73182);

(invoc_array[(7)] = G__73183);

(invoc_array[(8)] = G__73184);

(invoc_array[(9)] = G__73185);

(invoc_array[(10)] = G__73186);

(invoc_array[(11)] = G__73187);

(invoc_array[(12)] = G__73188);

(invoc_array[(13)] = G__73189);

(invoc_array[(14)] = G__73190);

(invoc_array[(15)] = G__73191);

(invoc_array[(16)] = G__73192);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
});

break;
case (18):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function sci$impl$fns$arity_18(G__73193,G__73194,G__73195,G__73196,G__73197,G__73198,G__73199,G__73200,G__73201,G__73202,G__73203,G__73204,G__73205,G__73206,G__73207,G__73208,G__73209,G__73210){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73193);

(invoc_array[(1)] = G__73194);

(invoc_array[(2)] = G__73195);

(invoc_array[(3)] = G__73196);

(invoc_array[(4)] = G__73197);

(invoc_array[(5)] = G__73198);

(invoc_array[(6)] = G__73199);

(invoc_array[(7)] = G__73200);

(invoc_array[(8)] = G__73201);

(invoc_array[(9)] = G__73202);

(invoc_array[(10)] = G__73203);

(invoc_array[(11)] = G__73204);

(invoc_array[(12)] = G__73205);

(invoc_array[(13)] = G__73206);

(invoc_array[(14)] = G__73207);

(invoc_array[(15)] = G__73208);

(invoc_array[(16)] = G__73209);

(invoc_array[(17)] = G__73210);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
});

break;
case (19):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function sci$impl$fns$arity_19(G__73213,G__73214,G__73215,G__73216,G__73217,G__73218,G__73219,G__73220,G__73221,G__73222,G__73223,G__73224,G__73225,G__73226,G__73227,G__73228,G__73229,G__73230,G__73231){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73213);

(invoc_array[(1)] = G__73214);

(invoc_array[(2)] = G__73215);

(invoc_array[(3)] = G__73216);

(invoc_array[(4)] = G__73217);

(invoc_array[(5)] = G__73218);

(invoc_array[(6)] = G__73219);

(invoc_array[(7)] = G__73220);

(invoc_array[(8)] = G__73221);

(invoc_array[(9)] = G__73222);

(invoc_array[(10)] = G__73223);

(invoc_array[(11)] = G__73224);

(invoc_array[(12)] = G__73225);

(invoc_array[(13)] = G__73226);

(invoc_array[(14)] = G__73227);

(invoc_array[(15)] = G__73228);

(invoc_array[(16)] = G__73229);

(invoc_array[(17)] = G__73230);

(invoc_array[(18)] = G__73231);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
});

break;
case (20):
var recur__71890__auto__ = sci.impl.utils.recur;
return (function sci$impl$fns$arity_20(G__73235,G__73236,G__73237,G__73238,G__73239,G__73240,G__73241,G__73242,G__73243,G__73244,G__73245,G__73246,G__73247,G__73248,G__73249,G__73250,G__73251,G__73252,G__73253,G__73254){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73235);

(invoc_array[(1)] = G__73236);

(invoc_array[(2)] = G__73237);

(invoc_array[(3)] = G__73238);

(invoc_array[(4)] = G__73239);

(invoc_array[(5)] = G__73240);

(invoc_array[(6)] = G__73241);

(invoc_array[(7)] = G__73242);

(invoc_array[(8)] = G__73243);

(invoc_array[(9)] = G__73244);

(invoc_array[(10)] = G__73245);

(invoc_array[(11)] = G__73246);

(invoc_array[(12)] = G__73247);

(invoc_array[(13)] = G__73248);

(invoc_array[(14)] = G__73249);

(invoc_array[(15)] = G__73250);

(invoc_array[(16)] = G__73251);

(invoc_array[(17)] = G__73252);

(invoc_array[(18)] = G__73253);

(invoc_array[(19)] = G__73254);

while(true){
var ret__71891__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if((recur__71890__auto__ === ret__71891__auto__)){
continue;
} else {
return ret__71891__auto__;
}
break;
}
});

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73030))));

}
})());
return f;
}));

(sci.impl.fns.fun.cljs$lang$maxFixedArity = 11);

sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,enclosed_array,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5(ctx,enclosed_array,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});
sci.impl.fns.maybe_destructured = (function sci$impl$fns$maybe_destructured(params,body,loc){
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,params)){
return cljs.core.cons(params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first(params__$1) instanceof cljs.core.Symbol)){
var G__73473 = cljs.core.next(params__$1);
var G__73474 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__73475 = lets;
params__$1 = G__73473;
new_params = G__73474;
lets = G__73475;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__73477 = cljs.core.next(params__$1);
var G__73478 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__73479 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__73477;
new_params = G__73478;
lets = G__73479;
continue;
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new_params,null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,lets,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),loc),null,(1),null)))));
}
break;
}
}
});
sci.impl.fns.fn_STAR__STAR_ = (function sci$impl$fns$fn_STAR__STAR_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___73481 = arguments.length;
var i__5877__auto___73482 = (0);
while(true){
if((i__5877__auto___73482 < len__5876__auto___73481)){
args__5882__auto__.push((arguments[i__5877__auto___73482]));

var G__73483 = (i__5877__auto___73482 + (1));
i__5877__auto___73482 = G__73483;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return sci.impl.fns.fn_STAR__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(sci.impl.fns.fn_STAR__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (form,_env,sigs){
var fn_sym = cljs.core.first(form);
var fn_sym_meta = cljs.core.meta(fn_sym);
var fn_STAR__sym = (function (){var G__73268 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null));
if(cljs.core.truth_(fn_sym_meta)){
return cljs.core.with_meta(G__73268,fn_sym_meta);
} else {
return G__73268;
}
})();
var name = (((cljs.core.first(sigs) instanceof cljs.core.Symbol))?cljs.core.first(sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next(sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_(cljs.core.first(sigs__$1)))?(new cljs.core.List(null,sigs__$1,null,(1),null)):((cljs.core.seq_QMARK_(cljs.core.first(sigs__$1)))?sigs__$1:sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq(sigs__$1))?(""+"Parameter declaration "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(sigs__$1))+" should be a vector"):"Parameter declaration missing"),form)));
var psig = (function (sig){
if((!(cljs.core.seq_QMARK_(sig)))){
throw sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2((""+"Invalid signature "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)+" should be a list"),form);
} else {
}

var vec__73272 = sig;
var seq__73273 = cljs.core.seq(vec__73272);
var first__73274 = cljs.core.first(seq__73273);
var seq__73273__$1 = cljs.core.next(seq__73273);
var params = first__73274;
var body = seq__73273__$1;
var _ = (((!(cljs.core.vector_QMARK_(params))))?sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq_QMARK_(cljs.core.first(sigs__$2)))?(""+"Parameter declaration "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(params)+" should be a vector"):(""+"Invalid signature "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)+" should be a list")),form):null);
var conds = ((((cljs.core.next(body)) && (cljs.core.map_QMARK_(cljs.core.first(body)))))?cljs.core.first(body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next(body):body);
var conds__$1 = (function (){var or__5142__auto__ = conds;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.meta(params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)),(new cljs.core.List(null,((((1) < cljs.core.count(body__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body__$1))):cljs.core.first(body__$1)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),post),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))], 0)))),null,(1),null))))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),pre),body__$2):body__$2);
return sci.impl.fns.maybe_destructured(params,body__$3,cljs.core.meta(form));
});
var new_sigs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(psig,sigs__$2);
var expr = cljs.core.with_meta((cljs.core.truth_(name)?cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(fn_STAR__sym,name,new_sigs):cljs.core.cons(fn_STAR__sym,new_sigs)),cljs.core.meta(form));
return expr;
}));

(sci.impl.fns.fn_STAR__STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq73264){
var G__73265 = cljs.core.first(seq73264);
var seq73264__$1 = cljs.core.next(seq73264);
var G__73266 = cljs.core.first(seq73264__$1);
var seq73264__$2 = cljs.core.next(seq73264__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73265,G__73266,seq73264__$2);
}));

sci.impl.fns.sigs = (function sci$impl$fns$sigs(fdecl){
var asig = (function (fdecl__$1){
var arglist = cljs.core.first(fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.first(arglist)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(arglist,(2),cljs.core.count(arglist)):arglist);
var body = cljs.core.next(fdecl__$1);
if(cljs.core.map_QMARK_(cljs.core.first(body))){
if(cljs.core.next(body)){
return cljs.core.with_meta(arglist__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.meta(arglist__$1))?cljs.core.meta(arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first(body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_(cljs.core.first(fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__73510 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__73511 = cljs.core.next(fdecls);
ret = G__73510;
fdecls = G__73511;
continue;
} else {
return cljs.core.seq(ret);
}
break;
}
} else {
return (new cljs.core.List(null,cljs.core.identity(asig(fdecl)),null,(1),null));
}
});
sci.impl.fns.defn_STAR_ = (function sci$impl$fns$defn_STAR_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___73516 = arguments.length;
var i__5877__auto___73517 = (0);
while(true){
if((i__5877__auto___73517 < len__5876__auto___73516)){
args__5882__auto__.push((arguments[i__5877__auto___73517]));

var G__73518 = (i__5877__auto___73517 + (1));
i__5877__auto___73517 = G__73518;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return sci.impl.fns.defn_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(sci.impl.fns.defn_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (form,_,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("First argument to defn must be a symbol",form);
}

var m = ((typeof cljs.core.first(fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.first(fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first(fdecl) === 'string')?cljs.core.next(fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,cljs.core.first(fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.next(fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl__$2)))?(new cljs.core.List(null,fdecl__$2,null,(1),null)):fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.last(fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.butlast(fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,sci.impl.fns.sigs(fdecl__$4),null,(1),null)),(2),null))], null),m__$2);
var name_m = cljs.core.meta(name);
var m__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(name_m)?name_m:cljs.core.PersistentArrayMap.EMPTY),m__$3);
var macro_QMARK_ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(name_m);
var async_QMARK_ = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(name_m);
var expr = cljs.core.cons(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),fdecl__$4);
var expr__$1 = (new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),(new cljs.core.List(null,cljs.core.with_meta(name,m__$4),(new cljs.core.List(null,(cljs.core.truth_((function (){var or__5142__auto__ = macro_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return name;
}
})())?cljs.core.with_meta(expr,(function (){var G__73284 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","fn","sci.impl/fn",1695180073),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"macro","macro",-867863404),macro_QMARK_,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),name], null)], null);
if(cljs.core.truth_(async_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73284,new cljs.core.Keyword(null,"async","async",1050769601),true);
} else {
return G__73284;
}
})()):expr),null,(1),null)),(2),null)),(3),null));
return expr__$1;
}));

(sci.impl.fns.defn_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq73277){
var G__73278 = cljs.core.first(seq73277);
var seq73277__$1 = cljs.core.next(seq73277);
var G__73279 = cljs.core.first(seq73277__$1);
var seq73277__$2 = cljs.core.next(seq73277__$1);
var G__73280 = cljs.core.first(seq73277__$2);
var seq73277__$3 = cljs.core.next(seq73277__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73278,G__73279,G__73280,seq73277__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___73529 = arguments.length;
var i__5877__auto___73530 = (0);
while(true){
if((i__5877__auto___73530 < len__5876__auto___73529)){
args__5882__auto__.push((arguments[i__5877__auto___73530]));

var G__73531 = (i__5877__auto___73530 + (1));
i__5877__auto___73530 = G__73531;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return sci.impl.fns.defmacro_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(sci.impl.fns.defmacro_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (__AMPERSAND_form,__AMPERSAND_env,name,args){
var name__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
var prefix = (function (){var p = (new cljs.core.List(null,name__$1,null,(1),null));
var args__$1 = args;
while(true){
var f = cljs.core.first(args__$1);
if(typeof f === 'string'){
var G__73532 = cljs.core.cons(f,p);
var G__73533 = cljs.core.next(args__$1);
p = G__73532;
args__$1 = G__73533;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__73534 = cljs.core.cons(f,p);
var G__73535 = cljs.core.next(args__$1);
p = G__73534;
args__$1 = G__73535;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first(fd) === 'string'){
var G__73537 = cljs.core.next(fd);
fd = G__73537;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__73538 = cljs.core.next(fd);
fd = G__73538;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl)))?(new cljs.core.List(null,fdecl,null,(1),null)):fdecl);
var add_implicit_args = (function (fd){
var args__$1 = cljs.core.first(fd);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.cons(new cljs.core.Symbol(null,"&env","&env",-919163083,null),args__$1))),cljs.core.next(fd));
});
var add_args = (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first(ds);
if(cljs.core.map_QMARK_(d)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,d);
} else {
var G__73546 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__73547 = cljs.core.next(ds);
acc = G__73546;
ds = G__73547;
continue;
}
}
break;
}
});
var fdecl__$2 = cljs.core.seq(add_args(cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__73548 = cljs.core.next(p);
var G__73549 = cljs.core.cons(cljs.core.first(p),d);
p = G__73548;
d = G__73549;
continue;
} else {
return d;
}
break;
}
})();
return (new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),decl),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),(new cljs.core.List(null,name__$1,null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null));
}));

(sci.impl.fns.defmacro_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq73287){
var G__73288 = cljs.core.first(seq73287);
var seq73287__$1 = cljs.core.next(seq73287);
var G__73289 = cljs.core.first(seq73287__$1);
var seq73287__$2 = cljs.core.next(seq73287__$1);
var G__73290 = cljs.core.first(seq73287__$2);
var seq73287__$3 = cljs.core.next(seq73287__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73288,G__73289,G__73290,seq73287__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
