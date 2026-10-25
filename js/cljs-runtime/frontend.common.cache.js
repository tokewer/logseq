goog.provide('frontend.common.cache');
/**
 * An empty LRU cache of `limit` entries. cache/lru-cache-factory seeds its
 *   eviction queue with `limit` placeholder entries (a priority map built at
 *   load: 20000 of them took about 120 ms of an app open); the cache evicts by
 *   the queue's real size (`miss` evicts once it holds `limit` entries), so an
 *   empty queue holds, hits and evicts the same entries.
 */
frontend.common.cache.empty_lru = (function frontend$common$cache$empty_lru(limit){
return cljs.cache.__GT_LRUCache(cljs.core.PersistentArrayMap.EMPTY,tailrecursion.priority_map.priority_map(),(0),limit);
});
/**
 * Return a cached version of `f`.
 *   cache-key&f-args-fn: return [<cache-key> <args-list-to-f>]
 */
frontend.common.cache.cache_fn = (function frontend$common$cache$cache_fn(_STAR_cache,cache_key_AMPERSAND_f_args_fn,f){
return (function() { 
var G__58019__delegate = function (args){
var vec__58012 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cache_key_AMPERSAND_f_args_fn,args);
var cache_k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58012,(0),null);
var f_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58012,(1),null);
var through_value_fn = (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,f_args);
});
var cache = cljs.core.vreset_BANG_(_STAR_cache,cljs.cache.through.cljs$core$IFn$_invoke$arity$3(through_value_fn,cljs.core.deref(_STAR_cache),cache_k));
return cljs.cache.lookup(cache,cache_k);
};
var G__58019 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58021__i = 0, G__58021__a = new Array(arguments.length -  0);
while (G__58021__i < G__58021__a.length) {G__58021__a[G__58021__i] = arguments[G__58021__i + 0]; ++G__58021__i;}
  args = new cljs.core.IndexedSeq(G__58021__a,0,null);
} 
return G__58019__delegate.call(this,args);};
G__58019.cljs$lang$maxFixedArity = 0;
G__58019.cljs$lang$applyTo = (function (arglist__58023){
var args = cljs.core.seq(arglist__58023);
return G__58019__delegate(args);
});
G__58019.cljs$core$IFn$_invoke$arity$variadic = G__58019__delegate;
return G__58019;
})()
;
});

//# sourceMappingURL=frontend.common.cache.js.map
