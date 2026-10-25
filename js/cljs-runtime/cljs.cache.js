goog.provide('cljs.cache');

/**
 * This is the protocol describing the basic cache capability.
 * @interface
 */
cljs.cache.CacheProtocol = function(){};

var cljs$cache$CacheProtocol$lookup$dyn_57989 = (function() {
var G__57990 = null;
var G__57990__2 = (function (cache,e){
var x__5498__auto__ = (((cache == null))?null:cache);
var m__5499__auto__ = (cljs.cache.lookup[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(cache,e) : m__5499__auto__.call(null,cache,e));
} else {
var m__5497__auto__ = (cljs.cache.lookup["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(cache,e) : m__5497__auto__.call(null,cache,e));
} else {
throw cljs.core.missing_protocol("CacheProtocol.lookup",cache);
}
}
});
var G__57990__3 = (function (cache,e,not_found){
var x__5498__auto__ = (((cache == null))?null:cache);
var m__5499__auto__ = (cljs.cache.lookup[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(cache,e,not_found) : m__5499__auto__.call(null,cache,e,not_found));
} else {
var m__5497__auto__ = (cljs.cache.lookup["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(cache,e,not_found) : m__5497__auto__.call(null,cache,e,not_found));
} else {
throw cljs.core.missing_protocol("CacheProtocol.lookup",cache);
}
}
});
G__57990 = function(cache,e,not_found){
switch(arguments.length){
case 2:
return G__57990__2.call(this,cache,e);
case 3:
return G__57990__3.call(this,cache,e,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__57990.cljs$core$IFn$_invoke$arity$2 = G__57990__2;
G__57990.cljs$core$IFn$_invoke$arity$3 = G__57990__3;
return G__57990;
})()
;
/**
 * Retrieve the value associated with `e` if it exists, else `nil` in
 *   the 2-arg case. Retrieve the value associated with `e` if it exists,
 *   else `not-found` in the 3-arg case.
 */
cljs.cache.lookup = (function cljs$cache$lookup(var_args){
var G__57754 = arguments.length;
switch (G__57754) {
case 2:
return cljs.cache.lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.cache.lookup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.cache.lookup.cljs$core$IFn$_invoke$arity$2 = (function (cache,e){
if((((!((cache == null)))) && ((!((cache.cljs$cache$CacheProtocol$lookup$arity$2 == null)))))){
return cache.cljs$cache$CacheProtocol$lookup$arity$2(cache,e);
} else {
return cljs$cache$CacheProtocol$lookup$dyn_57989(cache,e);
}
}));

(cljs.cache.lookup.cljs$core$IFn$_invoke$arity$3 = (function (cache,e,not_found){
if((((!((cache == null)))) && ((!((cache.cljs$cache$CacheProtocol$lookup$arity$3 == null)))))){
return cache.cljs$cache$CacheProtocol$lookup$arity$3(cache,e,not_found);
} else {
return cljs$cache$CacheProtocol$lookup$dyn_57989(cache,e,not_found);
}
}));

(cljs.cache.lookup.cljs$lang$maxFixedArity = 3);


var cljs$cache$CacheProtocol$has_QMARK_$dyn_58008 = (function (cache,e){
var x__5498__auto__ = (((cache == null))?null:cache);
var m__5499__auto__ = (cljs.cache.has_QMARK_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(cache,e) : m__5499__auto__.call(null,cache,e));
} else {
var m__5497__auto__ = (cljs.cache.has_QMARK_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(cache,e) : m__5497__auto__.call(null,cache,e));
} else {
throw cljs.core.missing_protocol("CacheProtocol.has?",cache);
}
}
});
/**
 * Checks if the cache contains a value associated with `e`
 */
cljs.cache.has_QMARK_ = (function cljs$cache$has_QMARK_(cache,e){
if((((!((cache == null)))) && ((!((cache.cljs$cache$CacheProtocol$has_QMARK_$arity$2 == null)))))){
return cache.cljs$cache$CacheProtocol$has_QMARK_$arity$2(cache,e);
} else {
return cljs$cache$CacheProtocol$has_QMARK_$dyn_58008(cache,e);
}
});

var cljs$cache$CacheProtocol$hit$dyn_58011 = (function (cache,e){
var x__5498__auto__ = (((cache == null))?null:cache);
var m__5499__auto__ = (cljs.cache.hit[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(cache,e) : m__5499__auto__.call(null,cache,e));
} else {
var m__5497__auto__ = (cljs.cache.hit["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(cache,e) : m__5497__auto__.call(null,cache,e));
} else {
throw cljs.core.missing_protocol("CacheProtocol.hit",cache);
}
}
});
/**
 * Is meant to be called if the cache is determined to contain a value
 *   associated with `e`
 */
cljs.cache.hit = (function cljs$cache$hit(cache,e){
if((((!((cache == null)))) && ((!((cache.cljs$cache$CacheProtocol$hit$arity$2 == null)))))){
return cache.cljs$cache$CacheProtocol$hit$arity$2(cache,e);
} else {
return cljs$cache$CacheProtocol$hit$dyn_58011(cache,e);
}
});

var cljs$cache$CacheProtocol$miss$dyn_58016 = (function (cache,e,ret){
var x__5498__auto__ = (((cache == null))?null:cache);
var m__5499__auto__ = (cljs.cache.miss[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(cache,e,ret) : m__5499__auto__.call(null,cache,e,ret));
} else {
var m__5497__auto__ = (cljs.cache.miss["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(cache,e,ret) : m__5497__auto__.call(null,cache,e,ret));
} else {
throw cljs.core.missing_protocol("CacheProtocol.miss",cache);
}
}
});
/**
 * Is meant to be called if the cache is determined to **not** contain a
 *   value associated with `e`
 */
cljs.cache.miss = (function cljs$cache$miss(cache,e,ret){
if((((!((cache == null)))) && ((!((cache.cljs$cache$CacheProtocol$miss$arity$3 == null)))))){
return cache.cljs$cache$CacheProtocol$miss$arity$3(cache,e,ret);
} else {
return cljs$cache$CacheProtocol$miss$dyn_58016(cache,e,ret);
}
});

var cljs$cache$CacheProtocol$evict$dyn_58020 = (function (cache,e){
var x__5498__auto__ = (((cache == null))?null:cache);
var m__5499__auto__ = (cljs.cache.evict[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(cache,e) : m__5499__auto__.call(null,cache,e));
} else {
var m__5497__auto__ = (cljs.cache.evict["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(cache,e) : m__5497__auto__.call(null,cache,e));
} else {
throw cljs.core.missing_protocol("CacheProtocol.evict",cache);
}
}
});
/**
 * Removes an entry from the cache
 */
cljs.cache.evict = (function cljs$cache$evict(cache,e){
if((((!((cache == null)))) && ((!((cache.cljs$cache$CacheProtocol$evict$arity$2 == null)))))){
return cache.cljs$cache$CacheProtocol$evict$arity$2(cache,e);
} else {
return cljs$cache$CacheProtocol$evict$dyn_58020(cache,e);
}
});

var cljs$cache$CacheProtocol$seed$dyn_58025 = (function (cache,base){
var x__5498__auto__ = (((cache == null))?null:cache);
var m__5499__auto__ = (cljs.cache.seed[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(cache,base) : m__5499__auto__.call(null,cache,base));
} else {
var m__5497__auto__ = (cljs.cache.seed["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(cache,base) : m__5497__auto__.call(null,cache,base));
} else {
throw cljs.core.missing_protocol("CacheProtocol.seed",cache);
}
}
});
/**
 * Is used to signal that the cache should be created with a seed.
 *   The contract is that said cache should return an instance of its
 *   own type.
 */
cljs.cache.seed = (function cljs$cache$seed(cache,base){
if((((!((cache == null)))) && ((!((cache.cljs$cache$CacheProtocol$seed$arity$2 == null)))))){
return cache.cljs$cache$CacheProtocol$seed$arity$2(cache,base);
} else {
return cljs$cache$CacheProtocol$seed$dyn_58025(cache,base);
}
});

cljs.cache.default_wrapper_fn = (function cljs$cache$default_wrapper_fn(p1__57781_SHARP_,p2__57782_SHARP_){
return (p1__57781_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__57781_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__57782_SHARP_) : p1__57781_SHARP_.call(null,p2__57782_SHARP_));
});
/**
 * The basic hit/miss logic for the cache system. Expects a wrap function and
 *   value function.  The wrap function takes the value function and the item in
 *   question and is expected to run the value function with the item whenever a
 *   cache miss occurs.  The intent is to hide any cache-specific cells from
 *   leaking into the cache logic itelf.
 */
cljs.cache.through = (function cljs$cache$through(var_args){
var G__57785 = arguments.length;
switch (G__57785) {
case 2:
return cljs.cache.through.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.cache.through.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.cache.through.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.cache.through.cljs$core$IFn$_invoke$arity$2 = (function (cache,item){
return cljs.cache.through.cljs$core$IFn$_invoke$arity$4(cljs.cache.default_wrapper_fn,cljs.core.identity,cache,item);
}));

(cljs.cache.through.cljs$core$IFn$_invoke$arity$3 = (function (value_fn,cache,item){
return cljs.cache.through.cljs$core$IFn$_invoke$arity$4(cljs.cache.default_wrapper_fn,value_fn,cache,item);
}));

(cljs.cache.through.cljs$core$IFn$_invoke$arity$4 = (function (wrap_fn,value_fn,cache,item){
if(cljs.core.truth_(cljs.cache.has_QMARK_(cache,item))){
return cljs.cache.hit(cache,item);
} else {
return cljs.cache.miss(cache,item,(function (){var G__57786 = (function (p1__57783_SHARP_){
return (value_fn.cljs$core$IFn$_invoke$arity$1 ? value_fn.cljs$core$IFn$_invoke$arity$1(p1__57783_SHARP_) : value_fn.call(null,p1__57783_SHARP_));
});
var G__57787 = item;
return (wrap_fn.cljs$core$IFn$_invoke$arity$2 ? wrap_fn.cljs$core$IFn$_invoke$arity$2(G__57786,G__57787) : wrap_fn.call(null,G__57786,G__57787));
})());
}
}));

(cljs.cache.through.cljs$lang$maxFixedArity = 4);


/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.cache.CacheProtocol}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.cache.BasicCache = (function (cache){
this.cache = cache;
this.cljs$lang$protocol_mask$partition0$ = 10487566;
this.cljs$lang$protocol_mask$partition1$ = 131072;
});
(cljs.cache.BasicCache.prototype.toString = (function (){
var self__ = this;
var _ = this;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.cache));
}));

(cljs.cache.BasicCache.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__57720__auto__,other__57727__auto__){
var self__ = this;
var this__57720__auto____$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(other__57727__auto__,self__.cache);
}));

(cljs.cache.BasicCache.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__57720__auto__,elem__57726__auto__){
var self__ = this;
var this__57720__auto____$1 = this;
return this__57720__auto____$1.cljs$cache$CacheProtocol$seed$arity$2(null,(function (){var fexpr__57803 = new cljs.core.Symbol("cljs.cache","-conj","cljs.cache/-conj",837886777,null);
return (fexpr__57803.cljs$core$IFn$_invoke$arity$2 ? fexpr__57803.cljs$core$IFn$_invoke$arity$2(self__.cache,elem__57726__auto__) : fexpr__57803.call(null,self__.cache,elem__57726__auto__));
})());
}));

(cljs.cache.BasicCache.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this__57720__auto__){
var self__ = this;
var this__57720__auto____$1 = this;
return this__57720__auto____$1.cljs$cache$CacheProtocol$seed$arity$2(null,(function (){var fexpr__57805 = new cljs.core.Symbol("cljs.cache","-empty","cljs.cache/-empty",-190310872,null);
return (fexpr__57805.cljs$core$IFn$_invoke$arity$1 ? fexpr__57805.cljs$core$IFn$_invoke$arity$1(self__.cache) : fexpr__57805.call(null,self__.cache));
})());
}));

(cljs.cache.BasicCache.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__57720__auto__){
var self__ = this;
var this__57720__auto____$1 = this;
return cljs.core._count(self__.cache);
}));

(cljs.cache.BasicCache.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (___57723__auto__){
var self__ = this;
var ___57723__auto____$1 = this;
return cljs.core._seq(self__.cache);
}));

(cljs.cache.BasicCache.prototype.cljs$cache$CacheProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.cache.BasicCache.prototype.cljs$cache$CacheProtocol$lookup$arity$2 = (function (_,item){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.cache,item);
}));

(cljs.cache.BasicCache.prototype.cljs$cache$CacheProtocol$lookup$arity$3 = (function (_,item,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.cache,item,not_found);
}));

(cljs.cache.BasicCache.prototype.cljs$cache$CacheProtocol$has_QMARK_$arity$2 = (function (_,item){
var self__ = this;
var ___$1 = this;
return cljs.core.contains_QMARK_(self__.cache,item);
}));

(cljs.cache.BasicCache.prototype.cljs$cache$CacheProtocol$hit$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(cljs.cache.BasicCache.prototype.cljs$cache$CacheProtocol$miss$arity$3 = (function (_,item,result){
var self__ = this;
var ___$1 = this;
return (new cljs.cache.BasicCache(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.cache,item,result)));
}));

(cljs.cache.BasicCache.prototype.cljs$cache$CacheProtocol$evict$arity$2 = (function (_,key){
var self__ = this;
var ___$1 = this;
return (new cljs.cache.BasicCache(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.cache,key)));
}));

(cljs.cache.BasicCache.prototype.cljs$cache$CacheProtocol$seed$arity$2 = (function (_,base){
var self__ = this;
var ___$1 = this;
return (new cljs.cache.BasicCache(base));
}));

(cljs.cache.BasicCache.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (___57723__auto__){
var self__ = this;
var ___57723__auto____$1 = this;
return self__.cache.iterator();
}));

(cljs.cache.BasicCache.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__57720__auto__,k__57724__auto__,v__57725__auto__){
var self__ = this;
var this__57720__auto____$1 = this;
return this__57720__auto____$1.cljs$cache$CacheProtocol$miss$arity$3(null,k__57724__auto__,v__57725__auto__);
}));

(cljs.cache.BasicCache.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__57720__auto__,k__57724__auto__){
var self__ = this;
var this__57720__auto____$1 = this;
return this__57720__auto____$1.cljs$cache$CacheProtocol$has_QMARK_$arity$2(null,k__57724__auto__);
}));

(cljs.cache.BasicCache.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__57720__auto__,k__57724__auto__){
var self__ = this;
var this__57720__auto____$1 = this;
return this__57720__auto____$1.cljs$cache$CacheProtocol$evict$arity$2(null,k__57724__auto__);
}));

(cljs.cache.BasicCache.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__57720__auto__,key__57721__auto__){
var self__ = this;
var this__57720__auto____$1 = this;
return this__57720__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,key__57721__auto__,null);
}));

(cljs.cache.BasicCache.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__57720__auto__,key__57721__auto__,not_found__57722__auto__){
var self__ = this;
var this__57720__auto____$1 = this;
if(cljs.core.truth_(this__57720__auto____$1.cljs$cache$CacheProtocol$has_QMARK_$arity$2(null,key__57721__auto__))){
return this__57720__auto____$1.cljs$cache$CacheProtocol$lookup$arity$2(null,key__57721__auto__);
} else {
return not_found__57722__auto__;
}
}));

(cljs.cache.BasicCache.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cache","cache",403508473,null)], null);
}));

(cljs.cache.BasicCache.cljs$lang$type = true);

(cljs.cache.BasicCache.cljs$lang$ctorStr = "cljs.cache/BasicCache");

(cljs.cache.BasicCache.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.cache/BasicCache");
}));

/**
 * Positional factory function for cljs.cache/BasicCache.
 */
cljs.cache.__GT_BasicCache = (function cljs$cache$__GT_BasicCache(cache){
return (new cljs.cache.BasicCache(cache));
});

cljs.cache.get_time = (function cljs$cache$get_time(){
return (new Date()).getTime();
});
/**
 * returns a fn that dissocs expired keys from a map
 */
cljs.cache.key_killer_fn = (function cljs$cache$key_killer_fn(ttl,expiry,now){
var ks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__57859_SHARP_){
return ((now - cljs.core.val(p1__57859_SHARP_)) > expiry);
}),ttl));
return (function (p1__57860_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,p1__57860_SHARP_,ks);
});
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.cache.CacheProtocol}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.cache.TTLCache = (function (cache,ttl,ttl_ms){
this.cache = cache;
this.ttl = ttl;
this.ttl_ms = ttl_ms;
this.cljs$lang$protocol_mask$partition0$ = 10487566;
this.cljs$lang$protocol_mask$partition1$ = 131072;
});
(cljs.cache.TTLCache.prototype.toString = (function (){
var self__ = this;
var _ = this;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.cache)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(",")+cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ")+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.ttl)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(",")+cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ")+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.ttl_ms));
}));

(cljs.cache.TTLCache.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__57720__auto__,other__57727__auto__){
var self__ = this;
var this__57720__auto____$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(other__57727__auto__,self__.cache);
}));

(cljs.cache.TTLCache.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__57720__auto__,elem__57726__auto__){
var self__ = this;
var this__57720__auto____$1 = this;
return this__57720__auto____$1.cljs$cache$CacheProtocol$seed$arity$2(null,(function (){var fexpr__57864 = new cljs.core.Symbol("cljs.cache","-conj","cljs.cache/-conj",837886777,null);
return (fexpr__57864.cljs$core$IFn$_invoke$arity$2 ? fexpr__57864.cljs$core$IFn$_invoke$arity$2(self__.cache,elem__57726__auto__) : fexpr__57864.call(null,self__.cache,elem__57726__auto__));
})());
}));

(cljs.cache.TTLCache.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this__57720__auto__){
var self__ = this;
var this__57720__auto____$1 = this;
return this__57720__auto____$1.cljs$cache$CacheProtocol$seed$arity$2(null,(function (){var fexpr__57866 = new cljs.core.Symbol("cljs.cache","-empty","cljs.cache/-empty",-190310872,null);
return (fexpr__57866.cljs$core$IFn$_invoke$arity$1 ? fexpr__57866.cljs$core$IFn$_invoke$arity$1(self__.cache) : fexpr__57866.call(null,self__.cache));
})());
}));

(cljs.cache.TTLCache.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__57720__auto__){
var self__ = this;
var this__57720__auto____$1 = this;
return cljs.core._count(self__.cache);
}));

(cljs.cache.TTLCache.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (___57723__auto__){
var self__ = this;
var ___57723__auto____$1 = this;
return cljs.core._seq(self__.cache);
}));

(cljs.cache.TTLCache.prototype.cljs$cache$CacheProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.cache.TTLCache.prototype.cljs$cache$CacheProtocol$lookup$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
var ret = this$__$1.cljs$cache$CacheProtocol$lookup$arity$3(null,item,new cljs.core.Keyword("cljs.cache","nope","cljs.cache/nope",968062453));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.Keyword("cljs.cache","nope","cljs.cache/nope",968062453))){
return null;
} else {
return ret;
}
}));

(cljs.cache.TTLCache.prototype.cljs$cache$CacheProtocol$lookup$arity$3 = (function (this$,item,not_found){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(this$__$1.cljs$cache$CacheProtocol$has_QMARK_$arity$2(null,item))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.cache,item);
} else {
return not_found;
}
}));

(cljs.cache.TTLCache.prototype.cljs$cache$CacheProtocol$has_QMARK_$arity$2 = (function (_,item){
var self__ = this;
var ___$1 = this;
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.ttl,item,(- self__.ttl_ms));
return ((cljs.cache.get_time() - t) < self__.ttl_ms);
}));

(cljs.cache.TTLCache.prototype.cljs$cache$CacheProtocol$hit$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(cljs.cache.TTLCache.prototype.cljs$cache$CacheProtocol$miss$arity$3 = (function (this$,item,result){
var self__ = this;
var this$__$1 = this;
var now = cljs.cache.get_time();
var kill_old = cljs.cache.key_killer_fn(self__.ttl,self__.ttl_ms,now);
return (new cljs.cache.TTLCache(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(kill_old(self__.cache),item,result),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(kill_old(self__.ttl),item,now),self__.ttl_ms));
}));

(cljs.cache.TTLCache.prototype.cljs$cache$CacheProtocol$seed$arity$2 = (function (_,base){
var self__ = this;
var ___$1 = this;
var now = cljs.cache.get_time();
return (new cljs.cache.TTLCache(base,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5628__auto__ = (function cljs$cache$iter__57877(s__57878){
return (new cljs.core.LazySeq(null,(function (){
var s__57878__$1 = s__57878;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__57878__$1);
if(temp__5825__auto__){
var s__57878__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57878__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__57878__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__57880 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__57879 = (0);
while(true){
if((i__57879 < size__5627__auto__)){
var x = cljs.core._nth(c__5626__auto__,i__57879);
cljs.core.chunk_append(b__57880,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.key(x),now], null));

var G__58033 = (i__57879 + (1));
i__57879 = G__58033;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57880),cljs$cache$iter__57877(cljs.core.chunk_rest(s__57878__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57880),null);
}
} else {
var x = cljs.core.first(s__57878__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.key(x),now], null),cljs$cache$iter__57877(cljs.core.rest(s__57878__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(base);
})()),self__.ttl_ms));
}));

(cljs.cache.TTLCache.prototype.cljs$cache$CacheProtocol$evict$arity$2 = (function (_,key){
var self__ = this;
var ___$1 = this;
return (new cljs.cache.TTLCache(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.cache,key),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.ttl,key),self__.ttl_ms));
}));

(cljs.cache.TTLCache.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (___57723__auto__){
var self__ = this;
var ___57723__auto____$1 = this;
return self__.cache.iterator();
}));

(cljs.cache.TTLCache.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__57720__auto__,k__57724__auto__,v__57725__auto__){
var self__ = this;
var this__57720__auto____$1 = this;
return this__57720__auto____$1.cljs$cache$CacheProtocol$miss$arity$3(null,k__57724__auto__,v__57725__auto__);
}));

(cljs.cache.TTLCache.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__57720__auto__,k__57724__auto__){
var self__ = this;
var this__57720__auto____$1 = this;
return this__57720__auto____$1.cljs$cache$CacheProtocol$has_QMARK_$arity$2(null,k__57724__auto__);
}));

(cljs.cache.TTLCache.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__57720__auto__,k__57724__auto__){
var self__ = this;
var this__57720__auto____$1 = this;
return this__57720__auto____$1.cljs$cache$CacheProtocol$evict$arity$2(null,k__57724__auto__);
}));

(cljs.cache.TTLCache.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__57720__auto__,key__57721__auto__){
var self__ = this;
var this__57720__auto____$1 = this;
return this__57720__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,key__57721__auto__,null);
}));

(cljs.cache.TTLCache.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__57720__auto__,key__57721__auto__,not_found__57722__auto__){
var self__ = this;
var this__57720__auto____$1 = this;
if(cljs.core.truth_(this__57720__auto____$1.cljs$cache$CacheProtocol$has_QMARK_$arity$2(null,key__57721__auto__))){
return this__57720__auto____$1.cljs$cache$CacheProtocol$lookup$arity$2(null,key__57721__auto__);
} else {
return not_found__57722__auto__;
}
}));

(cljs.cache.TTLCache.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cache","cache",403508473,null),new cljs.core.Symbol(null,"ttl","ttl",525256409,null),new cljs.core.Symbol(null,"ttl-ms","ttl-ms",-1349172894,null)], null);
}));

(cljs.cache.TTLCache.cljs$lang$type = true);

(cljs.cache.TTLCache.cljs$lang$ctorStr = "cljs.cache/TTLCache");

(cljs.cache.TTLCache.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.cache/TTLCache");
}));

/**
 * Positional factory function for cljs.cache/TTLCache.
 */
cljs.cache.__GT_TTLCache = (function cljs$cache$__GT_TTLCache(cache,ttl,ttl_ms){
return (new cljs.cache.TTLCache(cache,ttl,ttl_ms));
});

cljs.cache.build_leastness_queue = (function cljs$cache$build_leastness_queue(base,limit,start_at){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(tailrecursion.priority_map.priority_map(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((limit - cljs.core.count(base)),(function (){var iter__5628__auto__ = (function cljs$cache$build_leastness_queue_$_iter__57890(s__57891){
return (new cljs.core.LazySeq(null,(function (){
var s__57891__$1 = s__57891;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__57891__$1);
if(temp__5825__auto__){
var s__57891__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57891__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__57891__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__57893 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__57892 = (0);
while(true){
if((i__57892 < size__5627__auto__)){
var k = cljs.core._nth(c__5626__auto__,i__57892);
cljs.core.chunk_append(b__57893,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,k], null));

var G__58051 = (i__57892 + (1));
i__57892 = G__58051;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57893),cljs$cache$build_leastness_queue_$_iter__57890(cljs.core.chunk_rest(s__57891__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57893),null);
}
} else {
var k = cljs.core.first(s__57891__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,k], null),cljs$cache$build_leastness_queue_$_iter__57890(cljs.core.rest(s__57891__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((- limit),(0)));
})()),(function (){var iter__5628__auto__ = (function cljs$cache$build_leastness_queue_$_iter__57899(s__57900){
return (new cljs.core.LazySeq(null,(function (){
var s__57900__$1 = s__57900;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__57900__$1);
if(temp__5825__auto__){
var s__57900__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57900__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__57900__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__57902 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__57901 = (0);
while(true){
if((i__57901 < size__5627__auto__)){
var vec__57907 = cljs.core._nth(c__5626__auto__,i__57901);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57907,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57907,(1),null);
cljs.core.chunk_append(b__57902,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,start_at], null));

var G__58052 = (i__57901 + (1));
i__57901 = G__58052;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57902),cljs$cache$build_leastness_queue_$_iter__57899(cljs.core.chunk_rest(s__57900__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57902),null);
}
} else {
var vec__57910 = cljs.core.first(s__57900__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57910,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57910,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,start_at], null),cljs$cache$build_leastness_queue_$_iter__57899(cljs.core.rest(s__57900__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(base);
})()));
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.cache.CacheProtocol}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.cache.LRUCache = (function (cache,lru,tick,limit){
this.cache = cache;
this.lru = lru;
this.tick = tick;
this.limit = limit;
this.cljs$lang$protocol_mask$partition0$ = 10487566;
this.cljs$lang$protocol_mask$partition1$ = 131072;
});
(cljs.cache.LRUCache.prototype.toString = (function (){
var self__ = this;
var _ = this;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.cache)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(",")+cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ")+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.lru)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(",")+cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ")+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.tick)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(",")+cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ")+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.limit));
}));

(cljs.cache.LRUCache.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__57720__auto__,other__57727__auto__){
var self__ = this;
var this__57720__auto____$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(other__57727__auto__,self__.cache);
}));

(cljs.cache.LRUCache.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__57720__auto__,elem__57726__auto__){
var self__ = this;
var this__57720__auto____$1 = this;
return this__57720__auto____$1.cljs$cache$CacheProtocol$seed$arity$2(null,(function (){var fexpr__57913 = new cljs.core.Symbol("cljs.cache","-conj","cljs.cache/-conj",837886777,null);
return (fexpr__57913.cljs$core$IFn$_invoke$arity$2 ? fexpr__57913.cljs$core$IFn$_invoke$arity$2(self__.cache,elem__57726__auto__) : fexpr__57913.call(null,self__.cache,elem__57726__auto__));
})());
}));

(cljs.cache.LRUCache.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this__57720__auto__){
var self__ = this;
var this__57720__auto____$1 = this;
return this__57720__auto____$1.cljs$cache$CacheProtocol$seed$arity$2(null,(function (){var fexpr__57914 = new cljs.core.Symbol("cljs.cache","-empty","cljs.cache/-empty",-190310872,null);
return (fexpr__57914.cljs$core$IFn$_invoke$arity$1 ? fexpr__57914.cljs$core$IFn$_invoke$arity$1(self__.cache) : fexpr__57914.call(null,self__.cache));
})());
}));

(cljs.cache.LRUCache.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__57720__auto__){
var self__ = this;
var this__57720__auto____$1 = this;
return cljs.core._count(self__.cache);
}));

(cljs.cache.LRUCache.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (___57723__auto__){
var self__ = this;
var ___57723__auto____$1 = this;
return cljs.core._seq(self__.cache);
}));

(cljs.cache.LRUCache.prototype.cljs$cache$CacheProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.cache.LRUCache.prototype.cljs$cache$CacheProtocol$lookup$arity$2 = (function (_,item){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.cache,item);
}));

(cljs.cache.LRUCache.prototype.cljs$cache$CacheProtocol$lookup$arity$3 = (function (_,item,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.cache,item,not_found);
}));

(cljs.cache.LRUCache.prototype.cljs$cache$CacheProtocol$has_QMARK_$arity$2 = (function (_,item){
var self__ = this;
var ___$1 = this;
return cljs.core.contains_QMARK_(self__.cache,item);
}));

(cljs.cache.LRUCache.prototype.cljs$cache$CacheProtocol$hit$arity$2 = (function (_,item){
var self__ = this;
var ___$1 = this;
var tick_PLUS_ = (self__.tick + (1));
return (new cljs.cache.LRUCache(self__.cache,((cljs.core.contains_QMARK_(self__.cache,item))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.lru,item,tick_PLUS_):self__.lru),tick_PLUS_,self__.limit));
}));

(cljs.cache.LRUCache.prototype.cljs$cache$CacheProtocol$miss$arity$3 = (function (_,item,result){
var self__ = this;
var ___$1 = this;
var tick_PLUS_ = (self__.tick + (1));
if((cljs.core.count(self__.lru) >= self__.limit)){
var k = ((cljs.core.contains_QMARK_(self__.lru,item))?item:cljs.core.first(cljs.core.peek(self__.lru)));
var c = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.cache,k),item,result);
var l = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.lru,k),item,tick_PLUS_);
return (new cljs.cache.LRUCache(c,l,tick_PLUS_,self__.limit));
} else {
return (new cljs.cache.LRUCache(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.cache,item,result),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.lru,item,tick_PLUS_),tick_PLUS_,self__.limit));
}
}));

(cljs.cache.LRUCache.prototype.cljs$cache$CacheProtocol$evict$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(self__.cache,key)){
return (new cljs.cache.LRUCache(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.cache,key),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.lru,key),(self__.tick + (1)),self__.limit));
} else {
return this$__$1;
}
}));

(cljs.cache.LRUCache.prototype.cljs$cache$CacheProtocol$seed$arity$2 = (function (_,base){
var self__ = this;
var ___$1 = this;
return (new cljs.cache.LRUCache(base,cljs.cache.build_leastness_queue(base,self__.limit,(0)),(0),self__.limit));
}));

(cljs.cache.LRUCache.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (___57723__auto__){
var self__ = this;
var ___57723__auto____$1 = this;
return self__.cache.iterator();
}));

(cljs.cache.LRUCache.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__57720__auto__,k__57724__auto__,v__57725__auto__){
var self__ = this;
var this__57720__auto____$1 = this;
return this__57720__auto____$1.cljs$cache$CacheProtocol$miss$arity$3(null,k__57724__auto__,v__57725__auto__);
}));

(cljs.cache.LRUCache.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__57720__auto__,k__57724__auto__){
var self__ = this;
var this__57720__auto____$1 = this;
return this__57720__auto____$1.cljs$cache$CacheProtocol$has_QMARK_$arity$2(null,k__57724__auto__);
}));

(cljs.cache.LRUCache.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__57720__auto__,k__57724__auto__){
var self__ = this;
var this__57720__auto____$1 = this;
return this__57720__auto____$1.cljs$cache$CacheProtocol$evict$arity$2(null,k__57724__auto__);
}));

(cljs.cache.LRUCache.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__57720__auto__,key__57721__auto__){
var self__ = this;
var this__57720__auto____$1 = this;
return this__57720__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,key__57721__auto__,null);
}));

(cljs.cache.LRUCache.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__57720__auto__,key__57721__auto__,not_found__57722__auto__){
var self__ = this;
var this__57720__auto____$1 = this;
if(cljs.core.truth_(this__57720__auto____$1.cljs$cache$CacheProtocol$has_QMARK_$arity$2(null,key__57721__auto__))){
return this__57720__auto____$1.cljs$cache$CacheProtocol$lookup$arity$2(null,key__57721__auto__);
} else {
return not_found__57722__auto__;
}
}));

(cljs.cache.LRUCache.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cache","cache",403508473,null),new cljs.core.Symbol(null,"lru","lru",-315566379,null),new cljs.core.Symbol(null,"tick","tick",804644551,null),new cljs.core.Symbol(null,"limit","limit",284709164,null)], null);
}));

(cljs.cache.LRUCache.cljs$lang$type = true);

(cljs.cache.LRUCache.cljs$lang$ctorStr = "cljs.cache/LRUCache");

(cljs.cache.LRUCache.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.cache/LRUCache");
}));

/**
 * Positional factory function for cljs.cache/LRUCache.
 */
cljs.cache.__GT_LRUCache = (function cljs$cache$__GT_LRUCache(cache,lru,tick__$1,limit){
return (new cljs.cache.LRUCache(cache,lru,tick__$1,limit));
});

/**
 * Returns a pluggable basic cache initialied to `base`
 */
cljs.cache.basic_cache_factory = (function cljs$cache$basic_cache_factory(base){
if(cljs.core.map_QMARK_(base)){
} else {
throw (new Error("Assert failed: (map? base)"));
}

return (new cljs.cache.BasicCache(base));
});
/**
 * Returns a TTL cache with the cache and expiration-table initialied to `base` --
 * each with the same time-to-live.
 * 
 * This function also allows an optional `:ttl` argument that defines the default
 * time in milliseconds that entries are allowed to reside in the cache.
 */
cljs.cache.ttl_cache_factory = (function cljs$cache$ttl_cache_factory(var_args){
var args__5882__auto__ = [];
var len__5876__auto___58072 = arguments.length;
var i__5877__auto___58074 = (0);
while(true){
if((i__5877__auto___58074 < len__5876__auto___58072)){
args__5882__auto__.push((arguments[i__5877__auto___58074]));

var G__58075 = (i__5877__auto___58074 + (1));
i__5877__auto___58074 = G__58075;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return cljs.cache.ttl_cache_factory.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(cljs.cache.ttl_cache_factory.cljs$core$IFn$_invoke$arity$variadic = (function (base,p__57976){
var map__57977 = p__57976;
var map__57977__$1 = cljs.core.__destructure_map(map__57977);
var ttl = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57977__$1,new cljs.core.Keyword(null,"ttl","ttl",-1115275118),(2000));
if(typeof ttl === 'number'){
} else {
throw (new Error("Assert failed: (number? ttl)"));
}

if(((0) <= ttl)){
} else {
throw (new Error("Assert failed: (<= 0 ttl)"));
}

if(cljs.core.map_QMARK_(base)){
} else {
throw (new Error("Assert failed: (map? base)"));
}

return (new cljs.cache.TTLCache(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,ttl)).cljs$cache$CacheProtocol$seed$arity$2(null,base);
}));

(cljs.cache.ttl_cache_factory.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.cache.ttl_cache_factory.cljs$lang$applyTo = (function (seq57971){
var G__57972 = cljs.core.first(seq57971);
var seq57971__$1 = cljs.core.next(seq57971);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57972,seq57971__$1);
}));

/**
 * Returns an LRU cache with the cache and usage-table initialied to `base` --
 * each entry is initialized with the same usage value.
 * This function takes an optional `:threshold` argument that defines the maximum number
 * of elements in the cache before the LRU semantics apply (default is 32).
 */
cljs.cache.lru_cache_factory = (function cljs$cache$lru_cache_factory(var_args){
var args__5882__auto__ = [];
var len__5876__auto___58078 = arguments.length;
var i__5877__auto___58079 = (0);
while(true){
if((i__5877__auto___58079 < len__5876__auto___58078)){
args__5882__auto__.push((arguments[i__5877__auto___58079]));

var G__58080 = (i__5877__auto___58079 + (1));
i__5877__auto___58079 = G__58080;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return cljs.cache.lru_cache_factory.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(cljs.cache.lru_cache_factory.cljs$core$IFn$_invoke$arity$variadic = (function (base,p__57987){
var map__57988 = p__57987;
var map__57988__$1 = cljs.core.__destructure_map(map__57988);
var threshold = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57988__$1,new cljs.core.Keyword(null,"threshold","threshold",204221583),(32));
if(typeof threshold === 'number'){
} else {
throw (new Error("Assert failed: (number? threshold)"));
}

if(((0) < threshold)){
} else {
throw (new Error("Assert failed: (< 0 threshold)"));
}

if(cljs.core.map_QMARK_(base)){
} else {
throw (new Error("Assert failed: (map? base)"));
}

return (new cljs.cache.LRUCache(cljs.core.PersistentArrayMap.EMPTY,tailrecursion.priority_map.priority_map(),(0),threshold)).cljs$cache$CacheProtocol$seed$arity$2(null,base);
}));

(cljs.cache.lru_cache_factory.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.cache.lru_cache_factory.cljs$lang$applyTo = (function (seq57984){
var G__57985 = cljs.core.first(seq57984);
var seq57984__$1 = cljs.core.next(seq57984);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57985,seq57984__$1);
}));


//# sourceMappingURL=cljs.cache.js.map
