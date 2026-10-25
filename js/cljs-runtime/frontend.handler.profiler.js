goog.provide('frontend.handler.profiler');
goog.scope(function(){
  frontend.handler.profiler.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.handler.profiler._STAR_fn_symbol__GT_key__GT_call_count = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
frontend.handler.profiler._STAR_fn_symbol__GT_key__GT_time_sum = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
frontend.handler.profiler._STAR_fn_symbol__GT_origin_fn = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
frontend.handler.profiler.arity_pattern = /cljs\$core\$IFn\$_invoke\$arity\$([0-9]+)/;
frontend.handler.profiler.get_profile_fn = (function frontend$handler$profiler$get_profile_fn(fn_sym,original_fn,custom_key_fn){
var arity_ns = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__97439_SHARP_){
var G__97445 = cljs.core.re_find(frontend.handler.profiler.arity_pattern,p1__97439_SHARP_);
var G__97445__$1 = (((G__97445 == null))?null:cljs.core.second(G__97445));
if((G__97445__$1 == null)){
return null;
} else {
return cljs.core.parse_long(G__97445__$1);
}
}),frontend.handler.profiler.goog$module$goog$object.getKeys(original_fn));
var f = (function() { 
var frontend$handler$profiler$get_profile_fn_$_profile_fn_inner__delegate = function (args){
var start = cljs.core.system_time();
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(original_fn,args);
var elapsed_time = (cljs.core.system_time() - start);
var k = (cljs.core.truth_(custom_key_fn)?(custom_key_fn.cljs$core$IFn$_invoke$arity$2 ? custom_key_fn.cljs$core$IFn$_invoke$arity$2(args,r) : custom_key_fn.call(null,args,r)):null);
frontend.handler.profiler._STAR_fn_symbol__GT_key__GT_call_count.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(frontend.handler.profiler._STAR_fn_symbol__GT_key__GT_call_count.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_sym,new cljs.core.Keyword(null,"total","total",1916810418)], null),cljs.core.inc));

frontend.handler.profiler._STAR_fn_symbol__GT_key__GT_time_sum.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(frontend.handler.profiler._STAR_fn_symbol__GT_key__GT_time_sum.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_sym,new cljs.core.Keyword(null,"total","total",1916810418)], null),(function (p1__97441_SHARP_){
return (p1__97441_SHARP_ + elapsed_time);
})));

if(cljs.core.truth_(k)){
frontend.handler.profiler._STAR_fn_symbol__GT_key__GT_call_count.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(frontend.handler.profiler._STAR_fn_symbol__GT_key__GT_call_count.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_sym,k], null),cljs.core.inc));

frontend.handler.profiler._STAR_fn_symbol__GT_key__GT_time_sum.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(frontend.handler.profiler._STAR_fn_symbol__GT_key__GT_time_sum.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_sym,k], null),(function (p1__97442_SHARP_){
return (p1__97442_SHARP_ + elapsed_time);
})));
} else {
}

return r;
};
var frontend$handler$profiler$get_profile_fn_$_profile_fn_inner = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__97496__i = 0, G__97496__a = new Array(arguments.length -  0);
while (G__97496__i < G__97496__a.length) {G__97496__a[G__97496__i] = arguments[G__97496__i + 0]; ++G__97496__i;}
  args = new cljs.core.IndexedSeq(G__97496__a,0,null);
} 
return frontend$handler$profiler$get_profile_fn_$_profile_fn_inner__delegate.call(this,args);};
frontend$handler$profiler$get_profile_fn_$_profile_fn_inner.cljs$lang$maxFixedArity = 0;
frontend$handler$profiler$get_profile_fn_$_profile_fn_inner.cljs$lang$applyTo = (function (arglist__97497){
var args = cljs.core.seq(arglist__97497);
return frontend$handler$profiler$get_profile_fn_$_profile_fn_inner__delegate(args);
});
frontend$handler$profiler$get_profile_fn_$_profile_fn_inner.cljs$core$IFn$_invoke$arity$variadic = frontend$handler$profiler$get_profile_fn_$_profile_fn_inner__delegate;
return frontend$handler$profiler$get_profile_fn_$_profile_fn_inner;
})()
;
var arity_n_fns = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.PersistentVector.EMPTY);
}),(function (x0){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x0], null));
}),(function (x0,x1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x0,x1], null));
}),(function (x0,x1,x2){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x0,x1,x2], null));
}),(function (x0,x1,x2,x3){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x0,x1,x2,x3], null));
}),(function (x0,x1,x2,x3,x4){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [x0,x1,x2,x3,x4], null));
}),(function (x0,x1,x2,x3,x4,x5){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [x0,x1,x2,x3,x4,x5], null));
}),(function (x0,x1,x2,x3,x4,x5,x6){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [x0,x1,x2,x3,x4,x5,x6], null));
}),(function (x0,x1,x2,x3,x4,x5,x6,x7){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [x0,x1,x2,x3,x4,x5,x6,x7], null));
}),(function (x0,x1,x2,x3,x4,x5,x6,x7,x8){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [x0,x1,x2,x3,x4,x5,x6,x7,x8], null));
}),(function (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [x0,x1,x2,x3,x4,x5,x6,x7,x8,x9], null));
}),(function (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10], null));
}),(function (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11], null));
}),(function (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12], null));
}),(function (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13], null));
}),(function (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14], null));
}),(function (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14,x15){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14,x15], null));
}),(function (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14,x15,x16){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14,x15,x16], null));
}),(function (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14,x15,x16,x17){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14,x15,x16,x17], null));
}),(function (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14,x15,x16,x17,x18){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14,x15,x16,x17,x18], null));
})], null);
var seq__97462_97498 = cljs.core.seq(arity_ns);
var chunk__97463_97499 = null;
var count__97464_97500 = (0);
var i__97465_97501 = (0);
while(true){
if((i__97465_97501 < count__97464_97500)){
var n_97502 = chunk__97463_97499.cljs$core$IIndexed$_nth$arity$2(null,i__97465_97501);
frontend.handler.profiler.goog$module$goog$object.set(f,(""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_97502)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arity_n_fns,n_97502));


var G__97503 = seq__97462_97498;
var G__97504 = chunk__97463_97499;
var G__97505 = count__97464_97500;
var G__97506 = (i__97465_97501 + (1));
seq__97462_97498 = G__97503;
chunk__97463_97499 = G__97504;
count__97464_97500 = G__97505;
i__97465_97501 = G__97506;
continue;
} else {
var temp__5825__auto___97507 = cljs.core.seq(seq__97462_97498);
if(temp__5825__auto___97507){
var seq__97462_97508__$1 = temp__5825__auto___97507;
if(cljs.core.chunked_seq_QMARK_(seq__97462_97508__$1)){
var c__5673__auto___97509 = cljs.core.chunk_first(seq__97462_97508__$1);
var G__97510 = cljs.core.chunk_rest(seq__97462_97508__$1);
var G__97511 = c__5673__auto___97509;
var G__97512 = cljs.core.count(c__5673__auto___97509);
var G__97513 = (0);
seq__97462_97498 = G__97510;
chunk__97463_97499 = G__97511;
count__97464_97500 = G__97512;
i__97465_97501 = G__97513;
continue;
} else {
var n_97514 = cljs.core.first(seq__97462_97508__$1);
frontend.handler.profiler.goog$module$goog$object.set(f,(""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_97514)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arity_n_fns,n_97514));


var G__97515 = cljs.core.next(seq__97462_97508__$1);
var G__97516 = null;
var G__97517 = (0);
var G__97518 = (0);
seq__97462_97498 = G__97515;
chunk__97463_97499 = G__97516;
count__97464_97500 = G__97517;
i__97465_97501 = G__97518;
continue;
}
} else {
}
}
break;
}

return f;
});
frontend.handler.profiler.replace_fn_helper_BANG_ = (function frontend$handler$profiler$replace_fn_helper_BANG_(ns,munged_name,fn_sym,original_fn_obj,custom_key_fn){
var ns_obj = cljs.core.find_ns_obj(ns);
var profile_fn = frontend.handler.profiler.get_profile_fn(fn_sym,original_fn_obj,custom_key_fn);
return frontend.handler.profiler.goog$module$goog$object.set(ns_obj,munged_name,profile_fn);
});
/**
 * (custom-key-fn args-seq result) return non-nil key
 */
frontend.handler.profiler.register_fn_BANG_ = (function frontend$handler$profiler$register_fn_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___97519 = arguments.length;
var i__5877__auto___97520 = (0);
while(true){
if((i__5877__auto___97520 < len__5876__auto___97519)){
args__5882__auto__.push((arguments[i__5877__auto___97520]));

var G__97521 = (i__5877__auto___97520 + (1));
i__5877__auto___97520 = G__97521;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.handler.profiler.register_fn_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.handler.profiler.register_fn_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (fn_sym,p__97475){
var map__97476 = p__97475;
var map__97476__$1 = cljs.core.__destructure_map(map__97476);
var _opts = map__97476__$1;
var custom_key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97476__$1,new cljs.core.Keyword(null,"custom-key-fn","custom-key-fn",490609526));
if(cljs.core.qualified_symbol_QMARK_(fn_sym)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"fn-sym must be a qualified symbol: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510),fn_sym,new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword(null,"unqualified","unqualified",-98904653)], null));
}

var ns = cljs.core.namespace(fn_sym);
var s = cljs.core.munge(cljs.core.name(fn_sym));
var temp__5823__auto__ = cljs.core.find_ns_obj((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
if(cljs.core.truth_(temp__5823__auto__)){
var original_fn = temp__5823__auto__;
frontend.handler.profiler.replace_fn_helper_BANG_(ns,s,fn_sym,original_fn,custom_key_fn);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.handler.profiler._STAR_fn_symbol__GT_origin_fn,cljs.core.assoc,fn_sym,original_fn);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"fn-sym not found: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510),fn_sym,new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null));
}
}));

(frontend.handler.profiler.register_fn_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.handler.profiler.register_fn_BANG_.cljs$lang$applyTo = (function (seq97473){
var G__97474 = cljs.core.first(seq97473);
var seq97473__$1 = cljs.core.next(seq97473);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__97474,seq97473__$1);
}));

/**
 * Register fn-sym from the Profiler UI. Invalid names notify and do not throw.
 */
frontend.handler.profiler.register_fn_from_ui_BANG_ = (function frontend$handler$profiler$register_fn_from_ui_BANG_(fn_sym){
try{return frontend.handler.profiler.register_fn_BANG_(fn_sym);
}catch (e97478){var e = e97478;
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var G__97479 = new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e));
var G__97479__$1 = (((G__97479 instanceof cljs.core.Keyword))?G__97479.fqn:null);
switch (G__97479__$1) {
case "unqualified":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("profiler","fn-unqualified-error","profiler/fn-unqualified-error",-662394807)], 0));

break;
case "not-found":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("profiler","fn-not-found-error","profiler/fn-not-found-error",1206668256),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym))], 0));

break;
default:
var or__5142__auto__ = cljs.core.ex_message(e);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = e.message;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
}
}

}
})(),new cljs.core.Keyword(null,"error","error",-978969032));

return null;
}});
frontend.handler.profiler.unregister_fn_BANG_ = (function frontend$handler$profiler$unregister_fn_BANG_(fn_sym){
var ns = cljs.core.namespace(fn_sym);
var s = cljs.core.munge(cljs.core.name(fn_sym));
frontend.handler.profiler._STAR_fn_symbol__GT_key__GT_call_count.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(frontend.handler.profiler._STAR_fn_symbol__GT_key__GT_call_count.cljs$core$IDeref$_deref$arity$1(null),fn_sym));

frontend.handler.profiler._STAR_fn_symbol__GT_key__GT_time_sum.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(frontend.handler.profiler._STAR_fn_symbol__GT_key__GT_time_sum.cljs$core$IDeref$_deref$arity$1(null),fn_sym));

var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.handler.profiler._STAR_fn_symbol__GT_origin_fn),fn_sym);
if(cljs.core.truth_(temp__5825__auto__)){
var origin_fn = temp__5825__auto__;
var G__97481_97523 = cljs.core.find_ns_obj(ns);
if((G__97481_97523 == null)){
} else {
frontend.handler.profiler.goog$module$goog$object.set(G__97481_97523,s,origin_fn);
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.handler.profiler._STAR_fn_symbol__GT_origin_fn,cljs.core.dissoc,fn_sym);
} else {
return null;
}
});
frontend.handler.profiler.reset_report_BANG_ = (function frontend$handler$profiler$reset_report_BANG_(){
cljs.core.vreset_BANG_(frontend.handler.profiler._STAR_fn_symbol__GT_key__GT_call_count,cljs.core.PersistentArrayMap.EMPTY);

return cljs.core.vreset_BANG_(frontend.handler.profiler._STAR_fn_symbol__GT_key__GT_time_sum,cljs.core.PersistentArrayMap.EMPTY);
});
frontend.handler.profiler.profile_report = (function frontend$handler$profiler$profile_report(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"call-count","call-count",-671299810),cljs.core.deref(frontend.handler.profiler._STAR_fn_symbol__GT_key__GT_call_count),new cljs.core.Keyword(null,"time-sum","time-sum",592043870),cljs.core.deref(frontend.handler.profiler._STAR_fn_symbol__GT_key__GT_time_sum)], null);
});
frontend.handler.profiler._STAR_ref_hash__GT_coll_size = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
frontend.handler.profiler._STAR_ref_hash__GT_watches_count = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
frontend.handler.profiler._STAR_ref_hash__GT_ref = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Add monitor on Atom/Volatile.
 *   Show atoms/volatiles contains huge collections.
 *   Show atoms have a huge number of watchers
 */
frontend.handler.profiler.mem_leak_detect = (function frontend$handler$profiler$mem_leak_detect(var_args){
var args__5882__auto__ = [];
var len__5876__auto___97524 = arguments.length;
var i__5877__auto___97525 = (0);
while(true){
if((i__5877__auto___97525 < len__5876__auto___97524)){
args__5882__auto__.push((arguments[i__5877__auto___97525]));

var G__97526 = (i__5877__auto___97525 + (1));
i__5877__auto___97525 = G__97526;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return frontend.handler.profiler.mem_leak_detect.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(frontend.handler.profiler.mem_leak_detect.cljs$core$IFn$_invoke$arity$variadic = (function (p__97483){
var map__97484 = p__97483;
var map__97484__$1 = cljs.core.__destructure_map(map__97484);
var data_count_threshold = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__97484__$1,new cljs.core.Keyword(null,"data-count-threshold","data-count-threshold",1042033322),(5000));
var watches_count_threshold = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__97484__$1,new cljs.core.Keyword(null,"watches-count-threshold","watches-count-threshold",54975064),(1000));
frontend.handler.profiler.register_fn_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Symbol("cljs.core","reset!","cljs.core/reset!",657404621,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"custom-key-fn","custom-key-fn",490609526),(function (p__97486,newval){
var vec__97487 = p__97486;
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97487,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97487,(1),null);
var coll_size = (function (){var and__5140__auto__ = cljs.core.coll_QMARK_(newval);
if(and__5140__auto__){
return cljs.core.count(newval);
} else {
return and__5140__auto__;
}
})();
var _STAR_ref_hash = (new cljs.core.Delay((function (){
return cljs.core.hash(ref);
}),null));
if((coll_size > data_count_threshold)){
frontend.handler.profiler._STAR_ref_hash__GT_coll_size.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.handler.profiler._STAR_ref_hash__GT_coll_size.cljs$core$IDeref$_deref$arity$1(null),cljs.core.deref(_STAR_ref_hash),coll_size));

frontend.handler.profiler._STAR_ref_hash__GT_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.handler.profiler._STAR_ref_hash__GT_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.deref(_STAR_ref_hash),ref));
} else {
}

var watches_count = cljs.core.count(ref.watches);
if((watches_count > watches_count_threshold)){
frontend.handler.profiler._STAR_ref_hash__GT_watches_count.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.handler.profiler._STAR_ref_hash__GT_watches_count.cljs$core$IDeref$_deref$arity$1(null),cljs.core.deref(_STAR_ref_hash),watches_count));

return frontend.handler.profiler._STAR_ref_hash__GT_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.handler.profiler._STAR_ref_hash__GT_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.deref(_STAR_ref_hash),ref));
} else {
return null;
}
})], 0));

return frontend.handler.profiler.register_fn_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Symbol("cljs.core","vreset!","cljs.core/vreset!",-1308835928,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"custom-key-fn","custom-key-fn",490609526),(function (p__97490,newval){
var vec__97491 = p__97490;
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97491,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97491,(1),null);
var coll_size = (function (){var and__5140__auto__ = cljs.core.coll_QMARK_(newval);
if(and__5140__auto__){
return cljs.core.count(newval);
} else {
return and__5140__auto__;
}
})();
var _STAR_ref_hash = (new cljs.core.Delay((function (){
return cljs.core.hash(ref);
}),null));
if((coll_size > data_count_threshold)){
frontend.handler.profiler._STAR_ref_hash__GT_coll_size.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.handler.profiler._STAR_ref_hash__GT_coll_size.cljs$core$IDeref$_deref$arity$1(null),cljs.core.deref(_STAR_ref_hash),coll_size));

return frontend.handler.profiler._STAR_ref_hash__GT_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.handler.profiler._STAR_ref_hash__GT_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.deref(_STAR_ref_hash),ref));
} else {
return null;
}
})], 0));
}));

(frontend.handler.profiler.mem_leak_detect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.handler.profiler.mem_leak_detect.cljs$lang$applyTo = (function (seq97482){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq97482));
}));

frontend.handler.profiler.mem_leak_report = (function frontend$handler$profiler$mem_leak_report(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref-hash->coll-size","ref-hash->coll-size",710913013),cljs.core.deref(frontend.handler.profiler._STAR_ref_hash__GT_coll_size),new cljs.core.Keyword(null,"ref-hash->watches-count","ref-hash->watches-count",2011867615),cljs.core.deref(frontend.handler.profiler._STAR_ref_hash__GT_watches_count),new cljs.core.Keyword(null,"ref-hash->ref","ref-hash->ref",92453043),cljs.core.deref(frontend.handler.profiler._STAR_ref_hash__GT_ref)], null);
});

//# sourceMappingURL=frontend.handler.profiler.js.map
