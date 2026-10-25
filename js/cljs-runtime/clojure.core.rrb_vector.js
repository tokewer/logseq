goog.provide('clojure.core.rrb_vector');
/**
 * Concatenates the given vectors in logarithmic time.
 */
clojure.core.rrb_vector.catvec = (function clojure$core$rrb_vector$catvec(var_args){
var G__97123 = arguments.length;
switch (G__97123) {
case 0:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__5901__auto__ = [];
var len__5876__auto___97179 = arguments.length;
var i__5877__auto___97180 = (0);
while(true){
if((i__5877__auto___97180 < len__5876__auto___97179)){
args_arr__5901__auto__.push((arguments[i__5877__auto___97180]));

var G__97181 = (i__5877__auto___97180 + (1));
i__5877__auto___97180 = G__97181;
continue;
} else {
}
break;
}

var argseq__5902__auto__ = ((((4) < args_arr__5901__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5901__auto__.slice((4)),(0),null)):null);
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5902__auto__);

}
});

(clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$1 = (function (v1){
return v1;
}));

(clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$2 = (function (v1,v2){
return clojure.core.rrb_vector.protocols._splicev(v1,v2);
}));

(clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$3 = (function (v1,v2,v3){
return clojure.core.rrb_vector.protocols._splicev(clojure.core.rrb_vector.protocols._splicev(v1,v2),v3);
}));

(clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$4 = (function (v1,v2,v3,v4){
return clojure.core.rrb_vector.protocols._splicev(clojure.core.rrb_vector.protocols._splicev(v1,v2),clojure.core.rrb_vector.protocols._splicev(v3,v4));
}));

(clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$variadic = (function (v1,v2,v3,v4,vn){
return clojure.core.rrb_vector.protocols._splicev(clojure.core.rrb_vector.protocols._splicev(clojure.core.rrb_vector.protocols._splicev(v1,v2),clojure.core.rrb_vector.protocols._splicev(v3,v4)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.core.rrb_vector.catvec,vn));
}));

/** @this {Function} */
(clojure.core.rrb_vector.catvec.cljs$lang$applyTo = (function (seq97118){
var G__97119 = cljs.core.first(seq97118);
var seq97118__$1 = cljs.core.next(seq97118);
var G__97120 = cljs.core.first(seq97118__$1);
var seq97118__$2 = cljs.core.next(seq97118__$1);
var G__97121 = cljs.core.first(seq97118__$2);
var seq97118__$3 = cljs.core.next(seq97118__$2);
var G__97122 = cljs.core.first(seq97118__$3);
var seq97118__$4 = cljs.core.next(seq97118__$3);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__97119,G__97120,G__97121,G__97122,seq97118__$4);
}));

(clojure.core.rrb_vector.catvec.cljs$lang$maxFixedArity = (4));

/**
 * Returns a new vector containing the elements of the given vector v
 *   lying between the start (inclusive) and end (exclusive) indices in
 *   logarithmic time. end defaults to end of vector. The resulting
 *   vector shares structure with the original, but does not hold on to
 *   any elements of the original vector lying outside the given index
 *   range.
 */
clojure.core.rrb_vector.subvec = (function clojure$core$rrb_vector$subvec(var_args){
var G__97141 = arguments.length;
switch (G__97141) {
case 2:
return clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
return clojure.core.rrb_vector.protocols._slicev(v,start,cljs.core.count(v));
}));

(clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$3 = (function (v,start,end){
return clojure.core.rrb_vector.protocols._slicev(v,start,end);
}));

(clojure.core.rrb_vector.subvec.cljs$lang$maxFixedArity = 3);

/**
 * Creates a new vector containing the args.
 */
clojure.core.rrb_vector.vector = (function clojure$core$rrb_vector$vector(var_args){
var G__97161 = arguments.length;
switch (G__97161) {
case 0:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__5901__auto__ = [];
var len__5876__auto___97188 = arguments.length;
var i__5877__auto___97189 = (0);
while(true){
if((i__5877__auto___97189 < len__5876__auto___97188)){
args_arr__5901__auto__.push((arguments[i__5877__auto___97189]));

var G__97190 = (i__5877__auto___97189 + (1));
i__5877__auto___97189 = G__97190;
continue;
} else {
}
break;
}

var argseq__5902__auto__ = ((((4) < args_arr__5901__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5901__auto__.slice((4)),(0),null)):null);
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5902__auto__);

}
});

(clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$0 = (function (){
var arr__97162 = [];
return (new clojure.core.rrb_vector.rrbt.Vector(0,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__97162,null,null));
}));

(clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$1 = (function (x1){
var arr__97163 = [null];
(arr__97163[(0)] = x1);

return (new clojure.core.rrb_vector.rrbt.Vector(1,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__97163,null,null));
}));

(clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$2 = (function (x1,x2){
var arr__97164 = [null,null];
(arr__97164[(0)] = x1);

(arr__97164[(1)] = x2);

return (new clojure.core.rrb_vector.rrbt.Vector(2,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__97164,null,null));
}));

(clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$3 = (function (x1,x2,x3){
var arr__97165 = [null,null,null];
(arr__97165[(0)] = x1);

(arr__97165[(1)] = x2);

(arr__97165[(2)] = x3);

return (new clojure.core.rrb_vector.rrbt.Vector(3,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__97165,null,null));
}));

(clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$4 = (function (x1,x2,x3,x4){
var arr__97168 = [null,null,null,null];
(arr__97168[(0)] = x1);

(arr__97168[(1)] = x2);

(arr__97168[(2)] = x3);

(arr__97168[(3)] = x4);

return (new clojure.core.rrb_vector.rrbt.Vector(4,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__97168,null,null));
}));

(clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$variadic = (function (x1,x2,x3,x4,xn){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$4(x1,x2,x3,x4),xn);
}));

/** @this {Function} */
(clojure.core.rrb_vector.vector.cljs$lang$applyTo = (function (seq97156){
var G__97157 = cljs.core.first(seq97156);
var seq97156__$1 = cljs.core.next(seq97156);
var G__97158 = cljs.core.first(seq97156__$1);
var seq97156__$2 = cljs.core.next(seq97156__$1);
var G__97159 = cljs.core.first(seq97156__$2);
var seq97156__$3 = cljs.core.next(seq97156__$2);
var G__97160 = cljs.core.first(seq97156__$3);
var seq97156__$4 = cljs.core.next(seq97156__$3);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__97157,G__97158,G__97159,G__97160,seq97156__$4);
}));

(clojure.core.rrb_vector.vector.cljs$lang$maxFixedArity = (4));

/**
 * Returns a vector containing the contents of coll.
 * 
 *   If coll is a vector, returns an RRB vector using the internal tree
 *   of coll.
 */
clojure.core.rrb_vector.vec = (function clojure$core$rrb_vector$vec(coll){
if(cljs.core.vector_QMARK_(coll)){
return clojure.core.rrb_vector.rrbt._as_rrbt(coll);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.core.rrb_vector.vector,coll);
}
});

//# sourceMappingURL=clojure.core.rrb_vector.js.map
