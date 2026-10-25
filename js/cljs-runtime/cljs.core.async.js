goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29955 = (function (f,blockable,meta29956){
this.f = f;
this.blockable = blockable;
this.meta29956 = meta29956;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29957,meta29956__$1){
var self__ = this;
var _29957__$1 = this;
return (new cljs.core.async.t_cljs$core$async29955(self__.f,self__.blockable,meta29956__$1));
}));

(cljs.core.async.t_cljs$core$async29955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29957){
var self__ = this;
var _29957__$1 = this;
return self__.meta29956;
}));

(cljs.core.async.t_cljs$core$async29955.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29955.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29955.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29955.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29955.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29956","meta29956",1621281150,null)], null);
}));

(cljs.core.async.t_cljs$core$async29955.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29955.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29955");

(cljs.core.async.t_cljs$core$async29955.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async29955");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29955.
 */
cljs.core.async.__GT_t_cljs$core$async29955 = (function cljs$core$async$__GT_t_cljs$core$async29955(f,blockable,meta29956){
return (new cljs.core.async.t_cljs$core$async29955(f,blockable,meta29956));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29954 = arguments.length;
switch (G__29954) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async29955(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30000 = arguments.length;
switch (G__30000) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error((""+"Assert failed: "+"buffer must be supplied when transducer is"+"\n"+"buf-or-n")));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30015 = arguments.length;
switch (G__30015) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30039 = arguments.length;
switch (G__30039) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_33159 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33159) : fn1.call(null,val_33159));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33159) : fn1.call(null,val_33159));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30058 = arguments.length;
switch (G__30058) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5823__auto__)){
var ret = temp__5823__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5823__auto__)){
var retb = temp__5823__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5741__auto___33166 = n;
var x_33167 = (0);
while(true){
if((x_33167 < n__5741__auto___33166)){
(a[x_33167] = x_33167);

var G__33168 = (x_33167 + (1));
x_33167 = G__33168;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30081 = (function (flag,meta30082){
this.flag = flag;
this.meta30082 = meta30082;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30083,meta30082__$1){
var self__ = this;
var _30083__$1 = this;
return (new cljs.core.async.t_cljs$core$async30081(self__.flag,meta30082__$1));
}));

(cljs.core.async.t_cljs$core$async30081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30083){
var self__ = this;
var _30083__$1 = this;
return self__.meta30082;
}));

(cljs.core.async.t_cljs$core$async30081.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30081.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30081.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30081.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30081.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30082","meta30082",1065059479,null)], null);
}));

(cljs.core.async.t_cljs$core$async30081.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30081.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30081");

(cljs.core.async.t_cljs$core$async30081.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async30081");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30081.
 */
cljs.core.async.__GT_t_cljs$core$async30081 = (function cljs$core$async$__GT_t_cljs$core$async30081(flag,meta30082){
return (new cljs.core.async.t_cljs$core$async30081(flag,meta30082));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async30081(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30114 = (function (flag,cb,meta30115){
this.flag = flag;
this.cb = cb;
this.meta30115 = meta30115;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30116,meta30115__$1){
var self__ = this;
var _30116__$1 = this;
return (new cljs.core.async.t_cljs$core$async30114(self__.flag,self__.cb,meta30115__$1));
}));

(cljs.core.async.t_cljs$core$async30114.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30116){
var self__ = this;
var _30116__$1 = this;
return self__.meta30115;
}));

(cljs.core.async.t_cljs$core$async30114.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30114.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30114.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30114.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30114.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30115","meta30115",282928346,null)], null);
}));

(cljs.core.async.t_cljs$core$async30114.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30114.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30114");

(cljs.core.async.t_cljs$core$async30114.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async30114");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30114.
 */
cljs.core.async.__GT_t_cljs$core$async30114 = (function cljs$core$async$__GT_t_cljs$core$async30114(flag,cb,meta30115){
return (new cljs.core.async.t_cljs$core$async30114(flag,cb,meta30115));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async30114(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error((""+"Assert failed: "+"alts must have at least one channel operation"+"\n"+"(pos? (count ports))")));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_33178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_33178)){
if((!(((port_33178.cljs$core$IFn$_invoke$arity$1 ? port_33178.cljs$core$IFn$_invoke$arity$1((1)) : port_33178.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__33179 = (i + (1));
i = G__33179;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__30141_SHARP_){
var G__30149 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30141_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30149) : fret.call(null,G__30149));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__30142_SHARP_){
var G__30150 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30142_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30150) : fret.call(null,G__30150));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5142__auto__ = wport;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33180 = (i + (1));
i = G__33180;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5142__auto__ = ret;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5825__auto__ = (function (){var and__5140__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5140__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var got = temp__5825__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___33181 = arguments.length;
var i__5877__auto___33182 = (0);
while(true){
if((i__5877__auto___33182 < len__5876__auto___33181)){
args__5882__auto__.push((arguments[i__5877__auto___33182]));

var G__33183 = (i__5877__auto___33182 + (1));
i__5877__auto___33182 = G__33183;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30163){
var map__30164 = p__30163;
var map__30164__$1 = cljs.core.__destructure_map(map__30164);
var opts = map__30164__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30154){
var G__30155 = cljs.core.first(seq30154);
var seq30154__$1 = cljs.core.next(seq30154);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30155,seq30154__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30182 = arguments.length;
switch (G__30182) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29891__auto___33188 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29892__auto__ = (function (){var switch__29702__auto__ = (function (state_30285){
var state_val_30286 = (state_30285[(1)]);
if((state_val_30286 === (7))){
var inst_30246 = (state_30285[(2)]);
var state_30285__$1 = state_30285;
var statearr_30303_33189 = state_30285__$1;
(statearr_30303_33189[(2)] = inst_30246);

(statearr_30303_33189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30286 === (1))){
var state_30285__$1 = state_30285;
var statearr_30308_33190 = state_30285__$1;
(statearr_30308_33190[(2)] = null);

(statearr_30308_33190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30286 === (4))){
var inst_30218 = (state_30285[(7)]);
var inst_30218__$1 = (state_30285[(2)]);
var inst_30219 = (inst_30218__$1 == null);
var state_30285__$1 = (function (){var statearr_30310 = state_30285;
(statearr_30310[(7)] = inst_30218__$1);

return statearr_30310;
})();
if(cljs.core.truth_(inst_30219)){
var statearr_30311_33191 = state_30285__$1;
(statearr_30311_33191[(1)] = (5));

} else {
var statearr_30312_33192 = state_30285__$1;
(statearr_30312_33192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30286 === (13))){
var state_30285__$1 = state_30285;
var statearr_30314_33194 = state_30285__$1;
(statearr_30314_33194[(2)] = null);

(statearr_30314_33194[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30286 === (6))){
var inst_30218 = (state_30285[(7)]);
var state_30285__$1 = state_30285;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30285__$1,(11),to,inst_30218);
} else {
if((state_val_30286 === (3))){
var inst_30277 = (state_30285[(2)]);
var state_30285__$1 = state_30285;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30285__$1,inst_30277);
} else {
if((state_val_30286 === (12))){
var state_30285__$1 = state_30285;
var statearr_30335_33195 = state_30285__$1;
(statearr_30335_33195[(2)] = null);

(statearr_30335_33195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30286 === (2))){
var state_30285__$1 = state_30285;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30285__$1,(4),from);
} else {
if((state_val_30286 === (11))){
var inst_30239 = (state_30285[(2)]);
var state_30285__$1 = state_30285;
if(cljs.core.truth_(inst_30239)){
var statearr_30342_33196 = state_30285__$1;
(statearr_30342_33196[(1)] = (12));

} else {
var statearr_30343_33197 = state_30285__$1;
(statearr_30343_33197[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30286 === (9))){
var state_30285__$1 = state_30285;
var statearr_30348_33199 = state_30285__$1;
(statearr_30348_33199[(2)] = null);

(statearr_30348_33199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30286 === (5))){
var state_30285__$1 = state_30285;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30351_33200 = state_30285__$1;
(statearr_30351_33200[(1)] = (8));

} else {
var statearr_30353_33201 = state_30285__$1;
(statearr_30353_33201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30286 === (14))){
var inst_30244 = (state_30285[(2)]);
var state_30285__$1 = state_30285;
var statearr_30361_33202 = state_30285__$1;
(statearr_30361_33202[(2)] = inst_30244);

(statearr_30361_33202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30286 === (10))){
var inst_30236 = (state_30285[(2)]);
var state_30285__$1 = state_30285;
var statearr_30363_33203 = state_30285__$1;
(statearr_30363_33203[(2)] = inst_30236);

(statearr_30363_33203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30286 === (8))){
var inst_30222 = cljs.core.async.close_BANG_(to);
var state_30285__$1 = state_30285;
var statearr_30364_33204 = state_30285__$1;
(statearr_30364_33204[(2)] = inst_30222);

(statearr_30364_33204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29703__auto__ = null;
var cljs$core$async$state_machine__29703__auto____0 = (function (){
var statearr_30366 = [null,null,null,null,null,null,null,null];
(statearr_30366[(0)] = cljs$core$async$state_machine__29703__auto__);

(statearr_30366[(1)] = (1));

return statearr_30366;
});
var cljs$core$async$state_machine__29703__auto____1 = (function (state_30285){
while(true){
var ret_value__29704__auto__ = (function (){try{while(true){
var result__29705__auto__ = switch__29702__auto__(state_30285);
if(cljs.core.keyword_identical_QMARK_(result__29705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29705__auto__;
}
break;
}
}catch (e30371){var ex__29706__auto__ = e30371;
var statearr_30375_33206 = state_30285;
(statearr_30375_33206[(2)] = ex__29706__auto__);


if(cljs.core.seq((state_30285[(4)]))){
var statearr_30376_33207 = state_30285;
(statearr_30376_33207[(1)] = cljs.core.first((state_30285[(4)])));

} else {
throw ex__29706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33208 = state_30285;
state_30285 = G__33208;
continue;
} else {
return ret_value__29704__auto__;
}
break;
}
});
cljs$core$async$state_machine__29703__auto__ = function(state_30285){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29703__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29703__auto____1.call(this,state_30285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29703__auto____0;
cljs$core$async$state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29703__auto____1;
return cljs$core$async$state_machine__29703__auto__;
})()
})();
var state__29893__auto__ = (function (){var statearr_30377 = f__29892__auto__();
(statearr_30377[(6)] = c__29891__auto___33188);

return statearr_30377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29893__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__30390){
var vec__30391 = p__30390;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30391,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30391,(1),null);
var job = vec__30391;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29891__auto___33211 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29892__auto__ = (function (){var switch__29702__auto__ = (function (state_30403){
var state_val_30404 = (state_30403[(1)]);
if((state_val_30404 === (1))){
var state_30403__$1 = state_30403;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30403__$1,(2),res,v);
} else {
if((state_val_30404 === (2))){
var inst_30400 = (state_30403[(2)]);
var inst_30401 = cljs.core.async.close_BANG_(res);
var state_30403__$1 = (function (){var statearr_30406 = state_30403;
(statearr_30406[(7)] = inst_30400);

return statearr_30406;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30403__$1,inst_30401);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29703__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29703__auto____0 = (function (){
var statearr_30407 = [null,null,null,null,null,null,null,null];
(statearr_30407[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29703__auto__);

(statearr_30407[(1)] = (1));

return statearr_30407;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29703__auto____1 = (function (state_30403){
while(true){
var ret_value__29704__auto__ = (function (){try{while(true){
var result__29705__auto__ = switch__29702__auto__(state_30403);
if(cljs.core.keyword_identical_QMARK_(result__29705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29705__auto__;
}
break;
}
}catch (e30408){var ex__29706__auto__ = e30408;
var statearr_30409_33215 = state_30403;
(statearr_30409_33215[(2)] = ex__29706__auto__);


if(cljs.core.seq((state_30403[(4)]))){
var statearr_30412_33216 = state_30403;
(statearr_30412_33216[(1)] = cljs.core.first((state_30403[(4)])));

} else {
throw ex__29706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33217 = state_30403;
state_30403 = G__33217;
continue;
} else {
return ret_value__29704__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29703__auto__ = function(state_30403){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29703__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29703__auto____1.call(this,state_30403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29703__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29703__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29703__auto__;
})()
})();
var state__29893__auto__ = (function (){var statearr_30413 = f__29892__auto__();
(statearr_30413[(6)] = c__29891__auto___33211);

return statearr_30413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29893__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30416){
var vec__30417 = p__30416;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30417,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30417,(1),null);
var job = vec__30417;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5741__auto___33218 = n;
var __33219 = (0);
while(true){
if((__33219 < n__5741__auto___33218)){
var G__30442_33221 = type;
var G__30442_33222__$1 = (((G__30442_33221 instanceof cljs.core.Keyword))?G__30442_33221.fqn:null);
switch (G__30442_33222__$1) {
case "compute":
var c__29891__auto___33224 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33219,c__29891__auto___33224,G__30442_33221,G__30442_33222__$1,n__5741__auto___33218,jobs,results,process__$1,async){
return (function (){
var f__29892__auto__ = (function (){var switch__29702__auto__ = ((function (__33219,c__29891__auto___33224,G__30442_33221,G__30442_33222__$1,n__5741__auto___33218,jobs,results,process__$1,async){
return (function (state_30460){
var state_val_30461 = (state_30460[(1)]);
if((state_val_30461 === (1))){
var state_30460__$1 = state_30460;
var statearr_30469_33225 = state_30460__$1;
(statearr_30469_33225[(2)] = null);

(statearr_30469_33225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (2))){
var state_30460__$1 = state_30460;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30460__$1,(4),jobs);
} else {
if((state_val_30461 === (3))){
var inst_30458 = (state_30460[(2)]);
var state_30460__$1 = state_30460;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30460__$1,inst_30458);
} else {
if((state_val_30461 === (4))){
var inst_30448 = (state_30460[(2)]);
var inst_30449 = process__$1(inst_30448);
var state_30460__$1 = state_30460;
if(cljs.core.truth_(inst_30449)){
var statearr_30477_33226 = state_30460__$1;
(statearr_30477_33226[(1)] = (5));

} else {
var statearr_30479_33227 = state_30460__$1;
(statearr_30479_33227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (5))){
var state_30460__$1 = state_30460;
var statearr_30480_33228 = state_30460__$1;
(statearr_30480_33228[(2)] = null);

(statearr_30480_33228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (6))){
var state_30460__$1 = state_30460;
var statearr_30493_33229 = state_30460__$1;
(statearr_30493_33229[(2)] = null);

(statearr_30493_33229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (7))){
var inst_30454 = (state_30460[(2)]);
var state_30460__$1 = state_30460;
var statearr_30499_33230 = state_30460__$1;
(statearr_30499_33230[(2)] = inst_30454);

(statearr_30499_33230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33219,c__29891__auto___33224,G__30442_33221,G__30442_33222__$1,n__5741__auto___33218,jobs,results,process__$1,async))
;
return ((function (__33219,switch__29702__auto__,c__29891__auto___33224,G__30442_33221,G__30442_33222__$1,n__5741__auto___33218,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29703__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29703__auto____0 = (function (){
var statearr_30505 = [null,null,null,null,null,null,null];
(statearr_30505[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29703__auto__);

(statearr_30505[(1)] = (1));

return statearr_30505;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29703__auto____1 = (function (state_30460){
while(true){
var ret_value__29704__auto__ = (function (){try{while(true){
var result__29705__auto__ = switch__29702__auto__(state_30460);
if(cljs.core.keyword_identical_QMARK_(result__29705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29705__auto__;
}
break;
}
}catch (e30509){var ex__29706__auto__ = e30509;
var statearr_30514_33232 = state_30460;
(statearr_30514_33232[(2)] = ex__29706__auto__);


if(cljs.core.seq((state_30460[(4)]))){
var statearr_30515_33233 = state_30460;
(statearr_30515_33233[(1)] = cljs.core.first((state_30460[(4)])));

} else {
throw ex__29706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33234 = state_30460;
state_30460 = G__33234;
continue;
} else {
return ret_value__29704__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29703__auto__ = function(state_30460){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29703__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29703__auto____1.call(this,state_30460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29703__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29703__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29703__auto__;
})()
;})(__33219,switch__29702__auto__,c__29891__auto___33224,G__30442_33221,G__30442_33222__$1,n__5741__auto___33218,jobs,results,process__$1,async))
})();
var state__29893__auto__ = (function (){var statearr_30521 = f__29892__auto__();
(statearr_30521[(6)] = c__29891__auto___33224);

return statearr_30521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29893__auto__);
});})(__33219,c__29891__auto___33224,G__30442_33221,G__30442_33222__$1,n__5741__auto___33218,jobs,results,process__$1,async))
);


break;
case "async":
var c__29891__auto___33235 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33219,c__29891__auto___33235,G__30442_33221,G__30442_33222__$1,n__5741__auto___33218,jobs,results,process__$1,async){
return (function (){
var f__29892__auto__ = (function (){var switch__29702__auto__ = ((function (__33219,c__29891__auto___33235,G__30442_33221,G__30442_33222__$1,n__5741__auto___33218,jobs,results,process__$1,async){
return (function (state_30540){
var state_val_30541 = (state_30540[(1)]);
if((state_val_30541 === (1))){
var state_30540__$1 = state_30540;
var statearr_30550_33236 = state_30540__$1;
(statearr_30550_33236[(2)] = null);

(statearr_30550_33236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (2))){
var state_30540__$1 = state_30540;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30540__$1,(4),jobs);
} else {
if((state_val_30541 === (3))){
var inst_30538 = (state_30540[(2)]);
var state_30540__$1 = state_30540;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30540__$1,inst_30538);
} else {
if((state_val_30541 === (4))){
var inst_30529 = (state_30540[(2)]);
var inst_30530 = async(inst_30529);
var state_30540__$1 = state_30540;
if(cljs.core.truth_(inst_30530)){
var statearr_30565_33237 = state_30540__$1;
(statearr_30565_33237[(1)] = (5));

} else {
var statearr_30566_33238 = state_30540__$1;
(statearr_30566_33238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (5))){
var state_30540__$1 = state_30540;
var statearr_30571_33239 = state_30540__$1;
(statearr_30571_33239[(2)] = null);

(statearr_30571_33239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (6))){
var state_30540__$1 = state_30540;
var statearr_30576_33240 = state_30540__$1;
(statearr_30576_33240[(2)] = null);

(statearr_30576_33240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (7))){
var inst_30536 = (state_30540[(2)]);
var state_30540__$1 = state_30540;
var statearr_30578_33241 = state_30540__$1;
(statearr_30578_33241[(2)] = inst_30536);

(statearr_30578_33241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33219,c__29891__auto___33235,G__30442_33221,G__30442_33222__$1,n__5741__auto___33218,jobs,results,process__$1,async))
;
return ((function (__33219,switch__29702__auto__,c__29891__auto___33235,G__30442_33221,G__30442_33222__$1,n__5741__auto___33218,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29703__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29703__auto____0 = (function (){
var statearr_30579 = [null,null,null,null,null,null,null];
(statearr_30579[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29703__auto__);

(statearr_30579[(1)] = (1));

return statearr_30579;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29703__auto____1 = (function (state_30540){
while(true){
var ret_value__29704__auto__ = (function (){try{while(true){
var result__29705__auto__ = switch__29702__auto__(state_30540);
if(cljs.core.keyword_identical_QMARK_(result__29705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29705__auto__;
}
break;
}
}catch (e30580){var ex__29706__auto__ = e30580;
var statearr_30581_33243 = state_30540;
(statearr_30581_33243[(2)] = ex__29706__auto__);


if(cljs.core.seq((state_30540[(4)]))){
var statearr_30585_33244 = state_30540;
(statearr_30585_33244[(1)] = cljs.core.first((state_30540[(4)])));

} else {
throw ex__29706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33245 = state_30540;
state_30540 = G__33245;
continue;
} else {
return ret_value__29704__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29703__auto__ = function(state_30540){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29703__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29703__auto____1.call(this,state_30540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29703__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29703__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29703__auto__;
})()
;})(__33219,switch__29702__auto__,c__29891__auto___33235,G__30442_33221,G__30442_33222__$1,n__5741__auto___33218,jobs,results,process__$1,async))
})();
var state__29893__auto__ = (function (){var statearr_30589 = f__29892__auto__();
(statearr_30589[(6)] = c__29891__auto___33235);

return statearr_30589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29893__auto__);
});})(__33219,c__29891__auto___33235,G__30442_33221,G__30442_33222__$1,n__5741__auto___33218,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30442_33222__$1))));

}

var G__33248 = (__33219 + (1));
__33219 = G__33248;
continue;
} else {
}
break;
}

var c__29891__auto___33249 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29892__auto__ = (function (){var switch__29702__auto__ = (function (state_30614){
var state_val_30615 = (state_30614[(1)]);
if((state_val_30615 === (7))){
var inst_30610 = (state_30614[(2)]);
var state_30614__$1 = state_30614;
var statearr_30629_33250 = state_30614__$1;
(statearr_30629_33250[(2)] = inst_30610);

(statearr_30629_33250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (1))){
var state_30614__$1 = state_30614;
var statearr_30630_33255 = state_30614__$1;
(statearr_30630_33255[(2)] = null);

(statearr_30630_33255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (4))){
var inst_30594 = (state_30614[(7)]);
var inst_30594__$1 = (state_30614[(2)]);
var inst_30595 = (inst_30594__$1 == null);
var state_30614__$1 = (function (){var statearr_30633 = state_30614;
(statearr_30633[(7)] = inst_30594__$1);

return statearr_30633;
})();
if(cljs.core.truth_(inst_30595)){
var statearr_30634_33257 = state_30614__$1;
(statearr_30634_33257[(1)] = (5));

} else {
var statearr_30635_33258 = state_30614__$1;
(statearr_30635_33258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (6))){
var inst_30594 = (state_30614[(7)]);
var inst_30600 = (state_30614[(8)]);
var inst_30600__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30601 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30602 = [inst_30594,inst_30600__$1];
var inst_30603 = (new cljs.core.PersistentVector(null,2,(5),inst_30601,inst_30602,null));
var state_30614__$1 = (function (){var statearr_30636 = state_30614;
(statearr_30636[(8)] = inst_30600__$1);

return statearr_30636;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30614__$1,(8),jobs,inst_30603);
} else {
if((state_val_30615 === (3))){
var inst_30612 = (state_30614[(2)]);
var state_30614__$1 = state_30614;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30614__$1,inst_30612);
} else {
if((state_val_30615 === (2))){
var state_30614__$1 = state_30614;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30614__$1,(4),from);
} else {
if((state_val_30615 === (9))){
var inst_30607 = (state_30614[(2)]);
var state_30614__$1 = (function (){var statearr_30638 = state_30614;
(statearr_30638[(9)] = inst_30607);

return statearr_30638;
})();
var statearr_30639_33259 = state_30614__$1;
(statearr_30639_33259[(2)] = null);

(statearr_30639_33259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (5))){
var inst_30598 = cljs.core.async.close_BANG_(jobs);
var state_30614__$1 = state_30614;
var statearr_30640_33260 = state_30614__$1;
(statearr_30640_33260[(2)] = inst_30598);

(statearr_30640_33260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (8))){
var inst_30600 = (state_30614[(8)]);
var inst_30605 = (state_30614[(2)]);
var state_30614__$1 = (function (){var statearr_30641 = state_30614;
(statearr_30641[(10)] = inst_30605);

return statearr_30641;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30614__$1,(9),results,inst_30600);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29703__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29703__auto____0 = (function (){
var statearr_30647 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30647[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29703__auto__);

(statearr_30647[(1)] = (1));

return statearr_30647;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29703__auto____1 = (function (state_30614){
while(true){
var ret_value__29704__auto__ = (function (){try{while(true){
var result__29705__auto__ = switch__29702__auto__(state_30614);
if(cljs.core.keyword_identical_QMARK_(result__29705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29705__auto__;
}
break;
}
}catch (e30648){var ex__29706__auto__ = e30648;
var statearr_30649_33261 = state_30614;
(statearr_30649_33261[(2)] = ex__29706__auto__);


if(cljs.core.seq((state_30614[(4)]))){
var statearr_30652_33262 = state_30614;
(statearr_30652_33262[(1)] = cljs.core.first((state_30614[(4)])));

} else {
throw ex__29706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33263 = state_30614;
state_30614 = G__33263;
continue;
} else {
return ret_value__29704__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29703__auto__ = function(state_30614){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29703__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29703__auto____1.call(this,state_30614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29703__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29703__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29703__auto__;
})()
})();
var state__29893__auto__ = (function (){var statearr_30658 = f__29892__auto__();
(statearr_30658[(6)] = c__29891__auto___33249);

return statearr_30658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29893__auto__);
}));


var c__29891__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29892__auto__ = (function (){var switch__29702__auto__ = (function (state_30697){
var state_val_30698 = (state_30697[(1)]);
if((state_val_30698 === (7))){
var inst_30693 = (state_30697[(2)]);
var state_30697__$1 = state_30697;
var statearr_30703_33265 = state_30697__$1;
(statearr_30703_33265[(2)] = inst_30693);

(statearr_30703_33265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30698 === (20))){
var state_30697__$1 = state_30697;
var statearr_30704_33266 = state_30697__$1;
(statearr_30704_33266[(2)] = null);

(statearr_30704_33266[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30698 === (1))){
var state_30697__$1 = state_30697;
var statearr_30706_33267 = state_30697__$1;
(statearr_30706_33267[(2)] = null);

(statearr_30706_33267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30698 === (4))){
var inst_30661 = (state_30697[(7)]);
var inst_30661__$1 = (state_30697[(2)]);
var inst_30662 = (inst_30661__$1 == null);
var state_30697__$1 = (function (){var statearr_30710 = state_30697;
(statearr_30710[(7)] = inst_30661__$1);

return statearr_30710;
})();
if(cljs.core.truth_(inst_30662)){
var statearr_30711_33268 = state_30697__$1;
(statearr_30711_33268[(1)] = (5));

} else {
var statearr_30714_33269 = state_30697__$1;
(statearr_30714_33269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30698 === (15))){
var inst_30674 = (state_30697[(8)]);
var state_30697__$1 = state_30697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30697__$1,(18),to,inst_30674);
} else {
if((state_val_30698 === (21))){
var inst_30688 = (state_30697[(2)]);
var state_30697__$1 = state_30697;
var statearr_30717_33270 = state_30697__$1;
(statearr_30717_33270[(2)] = inst_30688);

(statearr_30717_33270[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30698 === (13))){
var inst_30690 = (state_30697[(2)]);
var state_30697__$1 = (function (){var statearr_30719 = state_30697;
(statearr_30719[(9)] = inst_30690);

return statearr_30719;
})();
var statearr_30720_33271 = state_30697__$1;
(statearr_30720_33271[(2)] = null);

(statearr_30720_33271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30698 === (6))){
var inst_30661 = (state_30697[(7)]);
var state_30697__$1 = state_30697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30697__$1,(11),inst_30661);
} else {
if((state_val_30698 === (17))){
var inst_30682 = (state_30697[(2)]);
var state_30697__$1 = state_30697;
if(cljs.core.truth_(inst_30682)){
var statearr_30721_33273 = state_30697__$1;
(statearr_30721_33273[(1)] = (19));

} else {
var statearr_30722_33274 = state_30697__$1;
(statearr_30722_33274[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30698 === (3))){
var inst_30695 = (state_30697[(2)]);
var state_30697__$1 = state_30697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30697__$1,inst_30695);
} else {
if((state_val_30698 === (12))){
var inst_30671 = (state_30697[(10)]);
var state_30697__$1 = state_30697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30697__$1,(14),inst_30671);
} else {
if((state_val_30698 === (2))){
var state_30697__$1 = state_30697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30697__$1,(4),results);
} else {
if((state_val_30698 === (19))){
var state_30697__$1 = state_30697;
var statearr_30730_33275 = state_30697__$1;
(statearr_30730_33275[(2)] = null);

(statearr_30730_33275[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30698 === (11))){
var inst_30671 = (state_30697[(2)]);
var state_30697__$1 = (function (){var statearr_30735 = state_30697;
(statearr_30735[(10)] = inst_30671);

return statearr_30735;
})();
var statearr_30736_33276 = state_30697__$1;
(statearr_30736_33276[(2)] = null);

(statearr_30736_33276[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30698 === (9))){
var state_30697__$1 = state_30697;
var statearr_30739_33277 = state_30697__$1;
(statearr_30739_33277[(2)] = null);

(statearr_30739_33277[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30698 === (5))){
var state_30697__$1 = state_30697;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30740_33278 = state_30697__$1;
(statearr_30740_33278[(1)] = (8));

} else {
var statearr_30741_33279 = state_30697__$1;
(statearr_30741_33279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30698 === (14))){
var inst_30674 = (state_30697[(8)]);
var inst_30676 = (state_30697[(11)]);
var inst_30674__$1 = (state_30697[(2)]);
var inst_30675 = (inst_30674__$1 == null);
var inst_30676__$1 = cljs.core.not(inst_30675);
var state_30697__$1 = (function (){var statearr_30744 = state_30697;
(statearr_30744[(8)] = inst_30674__$1);

(statearr_30744[(11)] = inst_30676__$1);

return statearr_30744;
})();
if(inst_30676__$1){
var statearr_30745_33280 = state_30697__$1;
(statearr_30745_33280[(1)] = (15));

} else {
var statearr_30746_33281 = state_30697__$1;
(statearr_30746_33281[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30698 === (16))){
var inst_30676 = (state_30697[(11)]);
var state_30697__$1 = state_30697;
var statearr_30747_33282 = state_30697__$1;
(statearr_30747_33282[(2)] = inst_30676);

(statearr_30747_33282[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30698 === (10))){
var inst_30668 = (state_30697[(2)]);
var state_30697__$1 = state_30697;
var statearr_30748_33283 = state_30697__$1;
(statearr_30748_33283[(2)] = inst_30668);

(statearr_30748_33283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30698 === (18))){
var inst_30679 = (state_30697[(2)]);
var state_30697__$1 = state_30697;
var statearr_30752_33284 = state_30697__$1;
(statearr_30752_33284[(2)] = inst_30679);

(statearr_30752_33284[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30698 === (8))){
var inst_30665 = cljs.core.async.close_BANG_(to);
var state_30697__$1 = state_30697;
var statearr_30753_33285 = state_30697__$1;
(statearr_30753_33285[(2)] = inst_30665);

(statearr_30753_33285[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29703__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29703__auto____0 = (function (){
var statearr_30756 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30756[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29703__auto__);

(statearr_30756[(1)] = (1));

return statearr_30756;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29703__auto____1 = (function (state_30697){
while(true){
var ret_value__29704__auto__ = (function (){try{while(true){
var result__29705__auto__ = switch__29702__auto__(state_30697);
if(cljs.core.keyword_identical_QMARK_(result__29705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29705__auto__;
}
break;
}
}catch (e30757){var ex__29706__auto__ = e30757;
var statearr_30758_33287 = state_30697;
(statearr_30758_33287[(2)] = ex__29706__auto__);


if(cljs.core.seq((state_30697[(4)]))){
var statearr_30759_33288 = state_30697;
(statearr_30759_33288[(1)] = cljs.core.first((state_30697[(4)])));

} else {
throw ex__29706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33289 = state_30697;
state_30697 = G__33289;
continue;
} else {
return ret_value__29704__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29703__auto__ = function(state_30697){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29703__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29703__auto____1.call(this,state_30697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29703__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29703__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29703__auto__;
})()
})();
var state__29893__auto__ = (function (){var statearr_30766 = f__29892__auto__();
(statearr_30766[(6)] = c__29891__auto__);

return statearr_30766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29893__auto__);
}));

return c__29891__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30805 = arguments.length;
switch (G__30805) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30816 = arguments.length;
switch (G__30816) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30856 = arguments.length;
switch (G__30856) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29891__auto___33297 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29892__auto__ = (function (){var switch__29702__auto__ = (function (state_30900){
var state_val_30901 = (state_30900[(1)]);
if((state_val_30901 === (7))){
var inst_30895 = (state_30900[(2)]);
var state_30900__$1 = state_30900;
var statearr_30910_33298 = state_30900__$1;
(statearr_30910_33298[(2)] = inst_30895);

(statearr_30910_33298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30901 === (1))){
var state_30900__$1 = state_30900;
var statearr_30912_33299 = state_30900__$1;
(statearr_30912_33299[(2)] = null);

(statearr_30912_33299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30901 === (4))){
var inst_30875 = (state_30900[(7)]);
var inst_30875__$1 = (state_30900[(2)]);
var inst_30877 = (inst_30875__$1 == null);
var state_30900__$1 = (function (){var statearr_30913 = state_30900;
(statearr_30913[(7)] = inst_30875__$1);

return statearr_30913;
})();
if(cljs.core.truth_(inst_30877)){
var statearr_30914_33300 = state_30900__$1;
(statearr_30914_33300[(1)] = (5));

} else {
var statearr_30915_33301 = state_30900__$1;
(statearr_30915_33301[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30901 === (13))){
var state_30900__$1 = state_30900;
var statearr_30916_33302 = state_30900__$1;
(statearr_30916_33302[(2)] = null);

(statearr_30916_33302[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30901 === (6))){
var inst_30875 = (state_30900[(7)]);
var inst_30882 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30875) : p.call(null,inst_30875));
var state_30900__$1 = state_30900;
if(cljs.core.truth_(inst_30882)){
var statearr_30918_33303 = state_30900__$1;
(statearr_30918_33303[(1)] = (9));

} else {
var statearr_30923_33304 = state_30900__$1;
(statearr_30923_33304[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30901 === (3))){
var inst_30897 = (state_30900[(2)]);
var state_30900__$1 = state_30900;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30900__$1,inst_30897);
} else {
if((state_val_30901 === (12))){
var state_30900__$1 = state_30900;
var statearr_30925_33306 = state_30900__$1;
(statearr_30925_33306[(2)] = null);

(statearr_30925_33306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30901 === (2))){
var state_30900__$1 = state_30900;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30900__$1,(4),ch);
} else {
if((state_val_30901 === (11))){
var inst_30875 = (state_30900[(7)]);
var inst_30886 = (state_30900[(2)]);
var state_30900__$1 = state_30900;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30900__$1,(8),inst_30886,inst_30875);
} else {
if((state_val_30901 === (9))){
var state_30900__$1 = state_30900;
var statearr_30934_33308 = state_30900__$1;
(statearr_30934_33308[(2)] = tc);

(statearr_30934_33308[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30901 === (5))){
var inst_30879 = cljs.core.async.close_BANG_(tc);
var inst_30880 = cljs.core.async.close_BANG_(fc);
var state_30900__$1 = (function (){var statearr_30936 = state_30900;
(statearr_30936[(8)] = inst_30879);

return statearr_30936;
})();
var statearr_30938_33309 = state_30900__$1;
(statearr_30938_33309[(2)] = inst_30880);

(statearr_30938_33309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30901 === (14))){
var inst_30893 = (state_30900[(2)]);
var state_30900__$1 = state_30900;
var statearr_30942_33310 = state_30900__$1;
(statearr_30942_33310[(2)] = inst_30893);

(statearr_30942_33310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30901 === (10))){
var state_30900__$1 = state_30900;
var statearr_30946_33311 = state_30900__$1;
(statearr_30946_33311[(2)] = fc);

(statearr_30946_33311[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30901 === (8))){
var inst_30888 = (state_30900[(2)]);
var state_30900__$1 = state_30900;
if(cljs.core.truth_(inst_30888)){
var statearr_30947_33312 = state_30900__$1;
(statearr_30947_33312[(1)] = (12));

} else {
var statearr_30948_33313 = state_30900__$1;
(statearr_30948_33313[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29703__auto__ = null;
var cljs$core$async$state_machine__29703__auto____0 = (function (){
var statearr_30949 = [null,null,null,null,null,null,null,null,null];
(statearr_30949[(0)] = cljs$core$async$state_machine__29703__auto__);

(statearr_30949[(1)] = (1));

return statearr_30949;
});
var cljs$core$async$state_machine__29703__auto____1 = (function (state_30900){
while(true){
var ret_value__29704__auto__ = (function (){try{while(true){
var result__29705__auto__ = switch__29702__auto__(state_30900);
if(cljs.core.keyword_identical_QMARK_(result__29705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29705__auto__;
}
break;
}
}catch (e30953){var ex__29706__auto__ = e30953;
var statearr_30954_33314 = state_30900;
(statearr_30954_33314[(2)] = ex__29706__auto__);


if(cljs.core.seq((state_30900[(4)]))){
var statearr_30955_33315 = state_30900;
(statearr_30955_33315[(1)] = cljs.core.first((state_30900[(4)])));

} else {
throw ex__29706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33316 = state_30900;
state_30900 = G__33316;
continue;
} else {
return ret_value__29704__auto__;
}
break;
}
});
cljs$core$async$state_machine__29703__auto__ = function(state_30900){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29703__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29703__auto____1.call(this,state_30900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29703__auto____0;
cljs$core$async$state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29703__auto____1;
return cljs$core$async$state_machine__29703__auto__;
})()
})();
var state__29893__auto__ = (function (){var statearr_30960 = f__29892__auto__();
(statearr_30960[(6)] = c__29891__auto___33297);

return statearr_30960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29893__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29891__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29892__auto__ = (function (){var switch__29702__auto__ = (function (state_30988){
var state_val_30989 = (state_30988[(1)]);
if((state_val_30989 === (7))){
var inst_30984 = (state_30988[(2)]);
var state_30988__$1 = state_30988;
var statearr_30993_33319 = state_30988__$1;
(statearr_30993_33319[(2)] = inst_30984);

(statearr_30993_33319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30989 === (1))){
var inst_30966 = init;
var inst_30967 = inst_30966;
var state_30988__$1 = (function (){var statearr_30995 = state_30988;
(statearr_30995[(7)] = inst_30967);

return statearr_30995;
})();
var statearr_30996_33320 = state_30988__$1;
(statearr_30996_33320[(2)] = null);

(statearr_30996_33320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30989 === (4))){
var inst_30970 = (state_30988[(8)]);
var inst_30970__$1 = (state_30988[(2)]);
var inst_30971 = (inst_30970__$1 == null);
var state_30988__$1 = (function (){var statearr_30998 = state_30988;
(statearr_30998[(8)] = inst_30970__$1);

return statearr_30998;
})();
if(cljs.core.truth_(inst_30971)){
var statearr_30999_33321 = state_30988__$1;
(statearr_30999_33321[(1)] = (5));

} else {
var statearr_31000_33323 = state_30988__$1;
(statearr_31000_33323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30989 === (6))){
var inst_30967 = (state_30988[(7)]);
var inst_30970 = (state_30988[(8)]);
var inst_30975 = (state_30988[(9)]);
var inst_30975__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30967,inst_30970) : f.call(null,inst_30967,inst_30970));
var inst_30976 = cljs.core.reduced_QMARK_(inst_30975__$1);
var state_30988__$1 = (function (){var statearr_31001 = state_30988;
(statearr_31001[(9)] = inst_30975__$1);

return statearr_31001;
})();
if(inst_30976){
var statearr_31002_33324 = state_30988__$1;
(statearr_31002_33324[(1)] = (8));

} else {
var statearr_31004_33325 = state_30988__$1;
(statearr_31004_33325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30989 === (3))){
var inst_30986 = (state_30988[(2)]);
var state_30988__$1 = state_30988;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30988__$1,inst_30986);
} else {
if((state_val_30989 === (2))){
var state_30988__$1 = state_30988;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30988__$1,(4),ch);
} else {
if((state_val_30989 === (9))){
var inst_30975 = (state_30988[(9)]);
var inst_30967 = inst_30975;
var state_30988__$1 = (function (){var statearr_31009 = state_30988;
(statearr_31009[(7)] = inst_30967);

return statearr_31009;
})();
var statearr_31010_33326 = state_30988__$1;
(statearr_31010_33326[(2)] = null);

(statearr_31010_33326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30989 === (5))){
var inst_30967 = (state_30988[(7)]);
var state_30988__$1 = state_30988;
var statearr_31011_33327 = state_30988__$1;
(statearr_31011_33327[(2)] = inst_30967);

(statearr_31011_33327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30989 === (10))){
var inst_30982 = (state_30988[(2)]);
var state_30988__$1 = state_30988;
var statearr_31014_33328 = state_30988__$1;
(statearr_31014_33328[(2)] = inst_30982);

(statearr_31014_33328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30989 === (8))){
var inst_30975 = (state_30988[(9)]);
var inst_30978 = cljs.core.deref(inst_30975);
var state_30988__$1 = state_30988;
var statearr_31015_33329 = state_30988__$1;
(statearr_31015_33329[(2)] = inst_30978);

(statearr_31015_33329[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29703__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29703__auto____0 = (function (){
var statearr_31016 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31016[(0)] = cljs$core$async$reduce_$_state_machine__29703__auto__);

(statearr_31016[(1)] = (1));

return statearr_31016;
});
var cljs$core$async$reduce_$_state_machine__29703__auto____1 = (function (state_30988){
while(true){
var ret_value__29704__auto__ = (function (){try{while(true){
var result__29705__auto__ = switch__29702__auto__(state_30988);
if(cljs.core.keyword_identical_QMARK_(result__29705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29705__auto__;
}
break;
}
}catch (e31017){var ex__29706__auto__ = e31017;
var statearr_31018_33330 = state_30988;
(statearr_31018_33330[(2)] = ex__29706__auto__);


if(cljs.core.seq((state_30988[(4)]))){
var statearr_31019_33331 = state_30988;
(statearr_31019_33331[(1)] = cljs.core.first((state_30988[(4)])));

} else {
throw ex__29706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33332 = state_30988;
state_30988 = G__33332;
continue;
} else {
return ret_value__29704__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29703__auto__ = function(state_30988){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29703__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29703__auto____1.call(this,state_30988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29703__auto____0;
cljs$core$async$reduce_$_state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29703__auto____1;
return cljs$core$async$reduce_$_state_machine__29703__auto__;
})()
})();
var state__29893__auto__ = (function (){var statearr_31022 = f__29892__auto__();
(statearr_31022[(6)] = c__29891__auto__);

return statearr_31022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29893__auto__);
}));

return c__29891__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29891__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29892__auto__ = (function (){var switch__29702__auto__ = (function (state_31037){
var state_val_31038 = (state_31037[(1)]);
if((state_val_31038 === (1))){
var inst_31025 = cljs.core.async.reduce(f__$1,init,ch);
var state_31037__$1 = state_31037;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31037__$1,(2),inst_31025);
} else {
if((state_val_31038 === (2))){
var inst_31030 = (state_31037[(2)]);
var inst_31032 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31030) : f__$1.call(null,inst_31030));
var state_31037__$1 = state_31037;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31037__$1,inst_31032);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29703__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29703__auto____0 = (function (){
var statearr_31053 = [null,null,null,null,null,null,null];
(statearr_31053[(0)] = cljs$core$async$transduce_$_state_machine__29703__auto__);

(statearr_31053[(1)] = (1));

return statearr_31053;
});
var cljs$core$async$transduce_$_state_machine__29703__auto____1 = (function (state_31037){
while(true){
var ret_value__29704__auto__ = (function (){try{while(true){
var result__29705__auto__ = switch__29702__auto__(state_31037);
if(cljs.core.keyword_identical_QMARK_(result__29705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29705__auto__;
}
break;
}
}catch (e31054){var ex__29706__auto__ = e31054;
var statearr_31055_33335 = state_31037;
(statearr_31055_33335[(2)] = ex__29706__auto__);


if(cljs.core.seq((state_31037[(4)]))){
var statearr_31056_33336 = state_31037;
(statearr_31056_33336[(1)] = cljs.core.first((state_31037[(4)])));

} else {
throw ex__29706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33337 = state_31037;
state_31037 = G__33337;
continue;
} else {
return ret_value__29704__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29703__auto__ = function(state_31037){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29703__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29703__auto____1.call(this,state_31037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29703__auto____0;
cljs$core$async$transduce_$_state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29703__auto____1;
return cljs$core$async$transduce_$_state_machine__29703__auto__;
})()
})();
var state__29893__auto__ = (function (){var statearr_31060 = f__29892__auto__();
(statearr_31060[(6)] = c__29891__auto__);

return statearr_31060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29893__auto__);
}));

return c__29891__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__31062 = arguments.length;
switch (G__31062) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29891__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29892__auto__ = (function (){var switch__29702__auto__ = (function (state_31092){
var state_val_31093 = (state_31092[(1)]);
if((state_val_31093 === (7))){
var inst_31074 = (state_31092[(2)]);
var state_31092__$1 = state_31092;
var statearr_31094_33343 = state_31092__$1;
(statearr_31094_33343[(2)] = inst_31074);

(statearr_31094_33343[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (1))){
var inst_31068 = cljs.core.seq(coll);
var inst_31069 = inst_31068;
var state_31092__$1 = (function (){var statearr_31095 = state_31092;
(statearr_31095[(7)] = inst_31069);

return statearr_31095;
})();
var statearr_31096_33344 = state_31092__$1;
(statearr_31096_33344[(2)] = null);

(statearr_31096_33344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (4))){
var inst_31069 = (state_31092[(7)]);
var inst_31072 = cljs.core.first(inst_31069);
var state_31092__$1 = state_31092;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31092__$1,(7),ch,inst_31072);
} else {
if((state_val_31093 === (13))){
var inst_31086 = (state_31092[(2)]);
var state_31092__$1 = state_31092;
var statearr_31098_33345 = state_31092__$1;
(statearr_31098_33345[(2)] = inst_31086);

(statearr_31098_33345[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (6))){
var inst_31077 = (state_31092[(2)]);
var state_31092__$1 = state_31092;
if(cljs.core.truth_(inst_31077)){
var statearr_31099_33346 = state_31092__$1;
(statearr_31099_33346[(1)] = (8));

} else {
var statearr_31100_33347 = state_31092__$1;
(statearr_31100_33347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (3))){
var inst_31090 = (state_31092[(2)]);
var state_31092__$1 = state_31092;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31092__$1,inst_31090);
} else {
if((state_val_31093 === (12))){
var state_31092__$1 = state_31092;
var statearr_31103_33348 = state_31092__$1;
(statearr_31103_33348[(2)] = null);

(statearr_31103_33348[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (2))){
var inst_31069 = (state_31092[(7)]);
var state_31092__$1 = state_31092;
if(cljs.core.truth_(inst_31069)){
var statearr_31105_33349 = state_31092__$1;
(statearr_31105_33349[(1)] = (4));

} else {
var statearr_31106_33350 = state_31092__$1;
(statearr_31106_33350[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (11))){
var inst_31083 = cljs.core.async.close_BANG_(ch);
var state_31092__$1 = state_31092;
var statearr_31109_33351 = state_31092__$1;
(statearr_31109_33351[(2)] = inst_31083);

(statearr_31109_33351[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (9))){
var state_31092__$1 = state_31092;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31114_33352 = state_31092__$1;
(statearr_31114_33352[(1)] = (11));

} else {
var statearr_31115_33353 = state_31092__$1;
(statearr_31115_33353[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (5))){
var inst_31069 = (state_31092[(7)]);
var state_31092__$1 = state_31092;
var statearr_31116_33354 = state_31092__$1;
(statearr_31116_33354[(2)] = inst_31069);

(statearr_31116_33354[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (10))){
var inst_31088 = (state_31092[(2)]);
var state_31092__$1 = state_31092;
var statearr_31117_33356 = state_31092__$1;
(statearr_31117_33356[(2)] = inst_31088);

(statearr_31117_33356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (8))){
var inst_31069 = (state_31092[(7)]);
var inst_31079 = cljs.core.next(inst_31069);
var inst_31069__$1 = inst_31079;
var state_31092__$1 = (function (){var statearr_31122 = state_31092;
(statearr_31122[(7)] = inst_31069__$1);

return statearr_31122;
})();
var statearr_31126_33357 = state_31092__$1;
(statearr_31126_33357[(2)] = null);

(statearr_31126_33357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29703__auto__ = null;
var cljs$core$async$state_machine__29703__auto____0 = (function (){
var statearr_31138 = [null,null,null,null,null,null,null,null];
(statearr_31138[(0)] = cljs$core$async$state_machine__29703__auto__);

(statearr_31138[(1)] = (1));

return statearr_31138;
});
var cljs$core$async$state_machine__29703__auto____1 = (function (state_31092){
while(true){
var ret_value__29704__auto__ = (function (){try{while(true){
var result__29705__auto__ = switch__29702__auto__(state_31092);
if(cljs.core.keyword_identical_QMARK_(result__29705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29705__auto__;
}
break;
}
}catch (e31142){var ex__29706__auto__ = e31142;
var statearr_31147_33358 = state_31092;
(statearr_31147_33358[(2)] = ex__29706__auto__);


if(cljs.core.seq((state_31092[(4)]))){
var statearr_31150_33359 = state_31092;
(statearr_31150_33359[(1)] = cljs.core.first((state_31092[(4)])));

} else {
throw ex__29706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33362 = state_31092;
state_31092 = G__33362;
continue;
} else {
return ret_value__29704__auto__;
}
break;
}
});
cljs$core$async$state_machine__29703__auto__ = function(state_31092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29703__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29703__auto____1.call(this,state_31092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29703__auto____0;
cljs$core$async$state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29703__auto____1;
return cljs$core$async$state_machine__29703__auto__;
})()
})();
var state__29893__auto__ = (function (){var statearr_31185 = f__29892__auto__();
(statearr_31185[(6)] = c__29891__auto__);

return statearr_31185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29893__auto__);
}));

return c__29891__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31221 = arguments.length;
switch (G__31221) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33365 = (function (_){
var x__5498__auto__ = (((_ == null))?null:_);
var m__5499__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5499__auto__.call(null,_));
} else {
var m__5497__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5497__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33365(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33368 = (function (m,ch,close_QMARK_){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5499__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5497__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5497__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33368(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33371 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33371(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33372 = (function (m){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5499__auto__.call(null,m));
} else {
var m__5497__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5497__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33372(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31456 = (function (ch,cs,meta31457){
this.ch = ch;
this.cs = cs;
this.meta31457 = meta31457;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31458,meta31457__$1){
var self__ = this;
var _31458__$1 = this;
return (new cljs.core.async.t_cljs$core$async31456(self__.ch,self__.cs,meta31457__$1));
}));

(cljs.core.async.t_cljs$core$async31456.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31458){
var self__ = this;
var _31458__$1 = this;
return self__.meta31457;
}));

(cljs.core.async.t_cljs$core$async31456.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31456.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31456.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31456.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31456.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31456.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31456.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31457","meta31457",-236739999,null)], null);
}));

(cljs.core.async.t_cljs$core$async31456.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31456.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31456");

(cljs.core.async.t_cljs$core$async31456.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async31456");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31456.
 */
cljs.core.async.__GT_t_cljs$core$async31456 = (function cljs$core$async$__GT_t_cljs$core$async31456(ch,cs,meta31457){
return (new cljs.core.async.t_cljs$core$async31456(ch,cs,meta31457));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async31456(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29891__auto___33374 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29892__auto__ = (function (){var switch__29702__auto__ = (function (state_31793){
var state_val_31794 = (state_31793[(1)]);
if((state_val_31794 === (7))){
var inst_31789 = (state_31793[(2)]);
var state_31793__$1 = state_31793;
var statearr_31795_33380 = state_31793__$1;
(statearr_31795_33380[(2)] = inst_31789);

(statearr_31795_33380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (20))){
var inst_31583 = (state_31793[(7)]);
var inst_31618 = cljs.core.first(inst_31583);
var inst_31623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31618,(0),null);
var inst_31624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31618,(1),null);
var state_31793__$1 = (function (){var statearr_31796 = state_31793;
(statearr_31796[(8)] = inst_31623);

return statearr_31796;
})();
if(cljs.core.truth_(inst_31624)){
var statearr_31797_33381 = state_31793__$1;
(statearr_31797_33381[(1)] = (22));

} else {
var statearr_31798_33382 = state_31793__$1;
(statearr_31798_33382[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (27))){
var inst_31676 = (state_31793[(9)]);
var inst_31678 = (state_31793[(10)]);
var inst_31688 = (state_31793[(11)]);
var inst_31535 = (state_31793[(12)]);
var inst_31688__$1 = cljs.core._nth(inst_31676,inst_31678);
var inst_31690 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31688__$1,inst_31535,done);
var state_31793__$1 = (function (){var statearr_31799 = state_31793;
(statearr_31799[(11)] = inst_31688__$1);

return statearr_31799;
})();
if(cljs.core.truth_(inst_31690)){
var statearr_31801_33385 = state_31793__$1;
(statearr_31801_33385[(1)] = (30));

} else {
var statearr_31802_33386 = state_31793__$1;
(statearr_31802_33386[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (1))){
var state_31793__$1 = state_31793;
var statearr_31804_33387 = state_31793__$1;
(statearr_31804_33387[(2)] = null);

(statearr_31804_33387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (24))){
var inst_31583 = (state_31793[(7)]);
var inst_31635 = (state_31793[(2)]);
var inst_31641 = cljs.core.next(inst_31583);
var inst_31545 = inst_31641;
var inst_31546 = null;
var inst_31547 = (0);
var inst_31548 = (0);
var state_31793__$1 = (function (){var statearr_31805 = state_31793;
(statearr_31805[(13)] = inst_31635);

(statearr_31805[(14)] = inst_31545);

(statearr_31805[(15)] = inst_31546);

(statearr_31805[(16)] = inst_31547);

(statearr_31805[(17)] = inst_31548);

return statearr_31805;
})();
var statearr_31806_33390 = state_31793__$1;
(statearr_31806_33390[(2)] = null);

(statearr_31806_33390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (39))){
var state_31793__$1 = state_31793;
var statearr_31812_33394 = state_31793__$1;
(statearr_31812_33394[(2)] = null);

(statearr_31812_33394[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (4))){
var inst_31535 = (state_31793[(12)]);
var inst_31535__$1 = (state_31793[(2)]);
var inst_31536 = (inst_31535__$1 == null);
var state_31793__$1 = (function (){var statearr_31813 = state_31793;
(statearr_31813[(12)] = inst_31535__$1);

return statearr_31813;
})();
if(cljs.core.truth_(inst_31536)){
var statearr_31814_33396 = state_31793__$1;
(statearr_31814_33396[(1)] = (5));

} else {
var statearr_31816_33397 = state_31793__$1;
(statearr_31816_33397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (15))){
var inst_31548 = (state_31793[(17)]);
var inst_31545 = (state_31793[(14)]);
var inst_31546 = (state_31793[(15)]);
var inst_31547 = (state_31793[(16)]);
var inst_31572 = (state_31793[(2)]);
var inst_31576 = (inst_31548 + (1));
var tmp31809 = inst_31545;
var tmp31810 = inst_31546;
var tmp31811 = inst_31547;
var inst_31545__$1 = tmp31809;
var inst_31546__$1 = tmp31810;
var inst_31547__$1 = tmp31811;
var inst_31548__$1 = inst_31576;
var state_31793__$1 = (function (){var statearr_31818 = state_31793;
(statearr_31818[(18)] = inst_31572);

(statearr_31818[(14)] = inst_31545__$1);

(statearr_31818[(15)] = inst_31546__$1);

(statearr_31818[(16)] = inst_31547__$1);

(statearr_31818[(17)] = inst_31548__$1);

return statearr_31818;
})();
var statearr_31819_33399 = state_31793__$1;
(statearr_31819_33399[(2)] = null);

(statearr_31819_33399[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (21))){
var inst_31644 = (state_31793[(2)]);
var state_31793__$1 = state_31793;
var statearr_31823_33400 = state_31793__$1;
(statearr_31823_33400[(2)] = inst_31644);

(statearr_31823_33400[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (31))){
var inst_31688 = (state_31793[(11)]);
var inst_31694 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31688);
var state_31793__$1 = state_31793;
var statearr_31824_33401 = state_31793__$1;
(statearr_31824_33401[(2)] = inst_31694);

(statearr_31824_33401[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (32))){
var inst_31678 = (state_31793[(10)]);
var inst_31675 = (state_31793[(19)]);
var inst_31676 = (state_31793[(9)]);
var inst_31677 = (state_31793[(20)]);
var inst_31696 = (state_31793[(2)]);
var inst_31704 = (inst_31678 + (1));
var tmp31820 = inst_31677;
var tmp31821 = inst_31676;
var tmp31822 = inst_31675;
var inst_31675__$1 = tmp31822;
var inst_31676__$1 = tmp31821;
var inst_31677__$1 = tmp31820;
var inst_31678__$1 = inst_31704;
var state_31793__$1 = (function (){var statearr_31828 = state_31793;
(statearr_31828[(21)] = inst_31696);

(statearr_31828[(19)] = inst_31675__$1);

(statearr_31828[(9)] = inst_31676__$1);

(statearr_31828[(20)] = inst_31677__$1);

(statearr_31828[(10)] = inst_31678__$1);

return statearr_31828;
})();
var statearr_31829_33406 = state_31793__$1;
(statearr_31829_33406[(2)] = null);

(statearr_31829_33406[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (40))){
var inst_31743 = (state_31793[(22)]);
var inst_31747 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31743);
var state_31793__$1 = state_31793;
var statearr_31830_33410 = state_31793__$1;
(statearr_31830_33410[(2)] = inst_31747);

(statearr_31830_33410[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (33))){
var inst_31709 = (state_31793[(23)]);
var inst_31726 = cljs.core.chunked_seq_QMARK_(inst_31709);
var state_31793__$1 = state_31793;
if(inst_31726){
var statearr_31831_33412 = state_31793__$1;
(statearr_31831_33412[(1)] = (36));

} else {
var statearr_31832_33413 = state_31793__$1;
(statearr_31832_33413[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (13))){
var inst_31562 = (state_31793[(24)]);
var inst_31569 = cljs.core.async.close_BANG_(inst_31562);
var state_31793__$1 = state_31793;
var statearr_31834_33415 = state_31793__$1;
(statearr_31834_33415[(2)] = inst_31569);

(statearr_31834_33415[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (22))){
var inst_31623 = (state_31793[(8)]);
var inst_31632 = cljs.core.async.close_BANG_(inst_31623);
var state_31793__$1 = state_31793;
var statearr_31835_33416 = state_31793__$1;
(statearr_31835_33416[(2)] = inst_31632);

(statearr_31835_33416[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (36))){
var inst_31709 = (state_31793[(23)]);
var inst_31731 = cljs.core.chunk_first(inst_31709);
var inst_31732 = cljs.core.chunk_rest(inst_31709);
var inst_31737 = cljs.core.count(inst_31731);
var inst_31675 = inst_31732;
var inst_31676 = inst_31731;
var inst_31677 = inst_31737;
var inst_31678 = (0);
var state_31793__$1 = (function (){var statearr_31837 = state_31793;
(statearr_31837[(19)] = inst_31675);

(statearr_31837[(9)] = inst_31676);

(statearr_31837[(20)] = inst_31677);

(statearr_31837[(10)] = inst_31678);

return statearr_31837;
})();
var statearr_31839_33418 = state_31793__$1;
(statearr_31839_33418[(2)] = null);

(statearr_31839_33418[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (41))){
var inst_31709 = (state_31793[(23)]);
var inst_31749 = (state_31793[(2)]);
var inst_31765 = cljs.core.next(inst_31709);
var inst_31675 = inst_31765;
var inst_31676 = null;
var inst_31677 = (0);
var inst_31678 = (0);
var state_31793__$1 = (function (){var statearr_31840 = state_31793;
(statearr_31840[(25)] = inst_31749);

(statearr_31840[(19)] = inst_31675);

(statearr_31840[(9)] = inst_31676);

(statearr_31840[(20)] = inst_31677);

(statearr_31840[(10)] = inst_31678);

return statearr_31840;
})();
var statearr_31841_33419 = state_31793__$1;
(statearr_31841_33419[(2)] = null);

(statearr_31841_33419[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (43))){
var state_31793__$1 = state_31793;
var statearr_31842_33425 = state_31793__$1;
(statearr_31842_33425[(2)] = null);

(statearr_31842_33425[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (29))){
var inst_31773 = (state_31793[(2)]);
var state_31793__$1 = state_31793;
var statearr_31843_33426 = state_31793__$1;
(statearr_31843_33426[(2)] = inst_31773);

(statearr_31843_33426[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (44))){
var inst_31786 = (state_31793[(2)]);
var state_31793__$1 = (function (){var statearr_31848 = state_31793;
(statearr_31848[(26)] = inst_31786);

return statearr_31848;
})();
var statearr_31849_33428 = state_31793__$1;
(statearr_31849_33428[(2)] = null);

(statearr_31849_33428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (6))){
var inst_31664 = (state_31793[(27)]);
var inst_31663 = cljs.core.deref(cs);
var inst_31664__$1 = cljs.core.keys(inst_31663);
var inst_31667 = cljs.core.count(inst_31664__$1);
var inst_31668 = cljs.core.reset_BANG_(dctr,inst_31667);
var inst_31674 = cljs.core.seq(inst_31664__$1);
var inst_31675 = inst_31674;
var inst_31676 = null;
var inst_31677 = (0);
var inst_31678 = (0);
var state_31793__$1 = (function (){var statearr_31851 = state_31793;
(statearr_31851[(27)] = inst_31664__$1);

(statearr_31851[(28)] = inst_31668);

(statearr_31851[(19)] = inst_31675);

(statearr_31851[(9)] = inst_31676);

(statearr_31851[(20)] = inst_31677);

(statearr_31851[(10)] = inst_31678);

return statearr_31851;
})();
var statearr_31852_33430 = state_31793__$1;
(statearr_31852_33430[(2)] = null);

(statearr_31852_33430[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (28))){
var inst_31675 = (state_31793[(19)]);
var inst_31709 = (state_31793[(23)]);
var inst_31709__$1 = cljs.core.seq(inst_31675);
var state_31793__$1 = (function (){var statearr_31853 = state_31793;
(statearr_31853[(23)] = inst_31709__$1);

return statearr_31853;
})();
if(inst_31709__$1){
var statearr_31854_33435 = state_31793__$1;
(statearr_31854_33435[(1)] = (33));

} else {
var statearr_31855_33436 = state_31793__$1;
(statearr_31855_33436[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (25))){
var inst_31678 = (state_31793[(10)]);
var inst_31677 = (state_31793[(20)]);
var inst_31680 = (inst_31678 < inst_31677);
var inst_31685 = inst_31680;
var state_31793__$1 = state_31793;
if(cljs.core.truth_(inst_31685)){
var statearr_31856_33439 = state_31793__$1;
(statearr_31856_33439[(1)] = (27));

} else {
var statearr_31858_33440 = state_31793__$1;
(statearr_31858_33440[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (34))){
var state_31793__$1 = state_31793;
var statearr_31860_33441 = state_31793__$1;
(statearr_31860_33441[(2)] = null);

(statearr_31860_33441[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (17))){
var state_31793__$1 = state_31793;
var statearr_31861_33442 = state_31793__$1;
(statearr_31861_33442[(2)] = null);

(statearr_31861_33442[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (3))){
var inst_31791 = (state_31793[(2)]);
var state_31793__$1 = state_31793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31793__$1,inst_31791);
} else {
if((state_val_31794 === (12))){
var inst_31652 = (state_31793[(2)]);
var state_31793__$1 = state_31793;
var statearr_31862_33446 = state_31793__$1;
(statearr_31862_33446[(2)] = inst_31652);

(statearr_31862_33446[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (2))){
var state_31793__$1 = state_31793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31793__$1,(4),ch);
} else {
if((state_val_31794 === (23))){
var state_31793__$1 = state_31793;
var statearr_31865_33448 = state_31793__$1;
(statearr_31865_33448[(2)] = null);

(statearr_31865_33448[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (35))){
var inst_31771 = (state_31793[(2)]);
var state_31793__$1 = state_31793;
var statearr_31866_33449 = state_31793__$1;
(statearr_31866_33449[(2)] = inst_31771);

(statearr_31866_33449[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (19))){
var inst_31583 = (state_31793[(7)]);
var inst_31596 = cljs.core.chunk_first(inst_31583);
var inst_31604 = cljs.core.chunk_rest(inst_31583);
var inst_31608 = cljs.core.count(inst_31596);
var inst_31545 = inst_31604;
var inst_31546 = inst_31596;
var inst_31547 = inst_31608;
var inst_31548 = (0);
var state_31793__$1 = (function (){var statearr_31868 = state_31793;
(statearr_31868[(14)] = inst_31545);

(statearr_31868[(15)] = inst_31546);

(statearr_31868[(16)] = inst_31547);

(statearr_31868[(17)] = inst_31548);

return statearr_31868;
})();
var statearr_31869_33450 = state_31793__$1;
(statearr_31869_33450[(2)] = null);

(statearr_31869_33450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (11))){
var inst_31545 = (state_31793[(14)]);
var inst_31583 = (state_31793[(7)]);
var inst_31583__$1 = cljs.core.seq(inst_31545);
var state_31793__$1 = (function (){var statearr_31870 = state_31793;
(statearr_31870[(7)] = inst_31583__$1);

return statearr_31870;
})();
if(inst_31583__$1){
var statearr_31872_33452 = state_31793__$1;
(statearr_31872_33452[(1)] = (16));

} else {
var statearr_31875_33453 = state_31793__$1;
(statearr_31875_33453[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (9))){
var inst_31658 = (state_31793[(2)]);
var state_31793__$1 = state_31793;
var statearr_31876_33454 = state_31793__$1;
(statearr_31876_33454[(2)] = inst_31658);

(statearr_31876_33454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (5))){
var inst_31542 = cljs.core.deref(cs);
var inst_31543 = cljs.core.seq(inst_31542);
var inst_31545 = inst_31543;
var inst_31546 = null;
var inst_31547 = (0);
var inst_31548 = (0);
var state_31793__$1 = (function (){var statearr_31879 = state_31793;
(statearr_31879[(14)] = inst_31545);

(statearr_31879[(15)] = inst_31546);

(statearr_31879[(16)] = inst_31547);

(statearr_31879[(17)] = inst_31548);

return statearr_31879;
})();
var statearr_31881_33455 = state_31793__$1;
(statearr_31881_33455[(2)] = null);

(statearr_31881_33455[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (14))){
var state_31793__$1 = state_31793;
var statearr_31882_33456 = state_31793__$1;
(statearr_31882_33456[(2)] = null);

(statearr_31882_33456[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (45))){
var inst_31783 = (state_31793[(2)]);
var state_31793__$1 = state_31793;
var statearr_31884_33457 = state_31793__$1;
(statearr_31884_33457[(2)] = inst_31783);

(statearr_31884_33457[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (26))){
var inst_31664 = (state_31793[(27)]);
var inst_31775 = (state_31793[(2)]);
var inst_31780 = cljs.core.seq(inst_31664);
var state_31793__$1 = (function (){var statearr_31885 = state_31793;
(statearr_31885[(29)] = inst_31775);

return statearr_31885;
})();
if(inst_31780){
var statearr_31887_33458 = state_31793__$1;
(statearr_31887_33458[(1)] = (42));

} else {
var statearr_31888_33459 = state_31793__$1;
(statearr_31888_33459[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (16))){
var inst_31583 = (state_31793[(7)]);
var inst_31590 = cljs.core.chunked_seq_QMARK_(inst_31583);
var state_31793__$1 = state_31793;
if(inst_31590){
var statearr_31890_33461 = state_31793__$1;
(statearr_31890_33461[(1)] = (19));

} else {
var statearr_31892_33462 = state_31793__$1;
(statearr_31892_33462[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (38))){
var inst_31768 = (state_31793[(2)]);
var state_31793__$1 = state_31793;
var statearr_31895_33463 = state_31793__$1;
(statearr_31895_33463[(2)] = inst_31768);

(statearr_31895_33463[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (30))){
var state_31793__$1 = state_31793;
var statearr_31896_33464 = state_31793__$1;
(statearr_31896_33464[(2)] = null);

(statearr_31896_33464[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (10))){
var inst_31546 = (state_31793[(15)]);
var inst_31548 = (state_31793[(17)]);
var inst_31558 = cljs.core._nth(inst_31546,inst_31548);
var inst_31562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31558,(0),null);
var inst_31563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31558,(1),null);
var state_31793__$1 = (function (){var statearr_31898 = state_31793;
(statearr_31898[(24)] = inst_31562);

return statearr_31898;
})();
if(cljs.core.truth_(inst_31563)){
var statearr_31899_33465 = state_31793__$1;
(statearr_31899_33465[(1)] = (13));

} else {
var statearr_31900_33466 = state_31793__$1;
(statearr_31900_33466[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (18))){
var inst_31647 = (state_31793[(2)]);
var state_31793__$1 = state_31793;
var statearr_31906_33467 = state_31793__$1;
(statearr_31906_33467[(2)] = inst_31647);

(statearr_31906_33467[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (42))){
var state_31793__$1 = state_31793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31793__$1,(45),dchan);
} else {
if((state_val_31794 === (37))){
var inst_31709 = (state_31793[(23)]);
var inst_31743 = (state_31793[(22)]);
var inst_31535 = (state_31793[(12)]);
var inst_31743__$1 = cljs.core.first(inst_31709);
var inst_31744 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31743__$1,inst_31535,done);
var state_31793__$1 = (function (){var statearr_31915 = state_31793;
(statearr_31915[(22)] = inst_31743__$1);

return statearr_31915;
})();
if(cljs.core.truth_(inst_31744)){
var statearr_31918_33468 = state_31793__$1;
(statearr_31918_33468[(1)] = (39));

} else {
var statearr_31919_33469 = state_31793__$1;
(statearr_31919_33469[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (8))){
var inst_31548 = (state_31793[(17)]);
var inst_31547 = (state_31793[(16)]);
var inst_31552 = (inst_31548 < inst_31547);
var inst_31553 = inst_31552;
var state_31793__$1 = state_31793;
if(cljs.core.truth_(inst_31553)){
var statearr_31921_33470 = state_31793__$1;
(statearr_31921_33470[(1)] = (10));

} else {
var statearr_31922_33471 = state_31793__$1;
(statearr_31922_33471[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29703__auto__ = null;
var cljs$core$async$mult_$_state_machine__29703__auto____0 = (function (){
var statearr_31926 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31926[(0)] = cljs$core$async$mult_$_state_machine__29703__auto__);

(statearr_31926[(1)] = (1));

return statearr_31926;
});
var cljs$core$async$mult_$_state_machine__29703__auto____1 = (function (state_31793){
while(true){
var ret_value__29704__auto__ = (function (){try{while(true){
var result__29705__auto__ = switch__29702__auto__(state_31793);
if(cljs.core.keyword_identical_QMARK_(result__29705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29705__auto__;
}
break;
}
}catch (e31928){var ex__29706__auto__ = e31928;
var statearr_31929_33472 = state_31793;
(statearr_31929_33472[(2)] = ex__29706__auto__);


if(cljs.core.seq((state_31793[(4)]))){
var statearr_31930_33473 = state_31793;
(statearr_31930_33473[(1)] = cljs.core.first((state_31793[(4)])));

} else {
throw ex__29706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33474 = state_31793;
state_31793 = G__33474;
continue;
} else {
return ret_value__29704__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29703__auto__ = function(state_31793){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29703__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29703__auto____1.call(this,state_31793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29703__auto____0;
cljs$core$async$mult_$_state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29703__auto____1;
return cljs$core$async$mult_$_state_machine__29703__auto__;
})()
})();
var state__29893__auto__ = (function (){var statearr_31932 = f__29892__auto__();
(statearr_31932[(6)] = c__29891__auto___33374);

return statearr_31932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29893__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31939 = arguments.length;
switch (G__31939) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33476 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33476(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33480 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33480(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33481 = (function (m){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5499__auto__.call(null,m));
} else {
var m__5497__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5497__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33481(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33482 = (function (m,state_map){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5499__auto__.call(null,m,state_map));
} else {
var m__5497__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5497__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33482(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33483 = (function (m,mode){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5499__auto__.call(null,m,mode));
} else {
var m__5497__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5497__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33483(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___33486 = arguments.length;
var i__5877__auto___33487 = (0);
while(true){
if((i__5877__auto___33487 < len__5876__auto___33486)){
args__5882__auto__.push((arguments[i__5877__auto___33487]));

var G__33488 = (i__5877__auto___33487 + (1));
i__5877__auto___33487 = G__33488;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31980){
var map__31982 = p__31980;
var map__31982__$1 = cljs.core.__destructure_map(map__31982);
var opts = map__31982__$1;
var statearr_31984_33492 = state;
(statearr_31984_33492[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31986_33493 = state;
(statearr_31986_33493[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_31988_33494 = state;
(statearr_31988_33494[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31971){
var G__31972 = cljs.core.first(seq31971);
var seq31971__$1 = cljs.core.next(seq31971);
var G__31973 = cljs.core.first(seq31971__$1);
var seq31971__$2 = cljs.core.next(seq31971__$1);
var G__31974 = cljs.core.first(seq31971__$2);
var seq31971__$3 = cljs.core.next(seq31971__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31972,G__31973,G__31974,seq31971__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31998 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31999){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31999 = meta31999;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32000,meta31999__$1){
var self__ = this;
var _32000__$1 = this;
return (new cljs.core.async.t_cljs$core$async31998(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31999__$1));
}));

(cljs.core.async.t_cljs$core$async31998.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32000){
var self__ = this;
var _32000__$1 = this;
return self__.meta31999;
}));

(cljs.core.async.t_cljs$core$async31998.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31998.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31998.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31998.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31998.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31998.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31998.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31998.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31998.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31999","meta31999",-777972095,null)], null);
}));

(cljs.core.async.t_cljs$core$async31998.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31998.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31998");

(cljs.core.async.t_cljs$core$async31998.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async31998");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31998.
 */
cljs.core.async.__GT_t_cljs$core$async31998 = (function cljs$core$async$__GT_t_cljs$core$async31998(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31999){
return (new cljs.core.async.t_cljs$core$async31998(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31999));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async31998(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__29891__auto___33523 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29892__auto__ = (function (){var switch__29702__auto__ = (function (state_32127){
var state_val_32128 = (state_32127[(1)]);
if((state_val_32128 === (7))){
var inst_32085 = (state_32127[(2)]);
var state_32127__$1 = state_32127;
if(cljs.core.truth_(inst_32085)){
var statearr_32131_33524 = state_32127__$1;
(statearr_32131_33524[(1)] = (8));

} else {
var statearr_32136_33525 = state_32127__$1;
(statearr_32136_33525[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (20))){
var inst_32076 = (state_32127[(7)]);
var state_32127__$1 = state_32127;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32127__$1,(23),out,inst_32076);
} else {
if((state_val_32128 === (1))){
var inst_32040 = calc_state();
var inst_32045 = cljs.core.__destructure_map(inst_32040);
var inst_32049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32045,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32051 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32045,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32052 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32045,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32054 = inst_32040;
var state_32127__$1 = (function (){var statearr_32137 = state_32127;
(statearr_32137[(8)] = inst_32049);

(statearr_32137[(9)] = inst_32051);

(statearr_32137[(10)] = inst_32052);

(statearr_32137[(11)] = inst_32054);

return statearr_32137;
})();
var statearr_32138_33532 = state_32127__$1;
(statearr_32138_33532[(2)] = null);

(statearr_32138_33532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (24))){
var inst_32060 = (state_32127[(12)]);
var inst_32054 = inst_32060;
var state_32127__$1 = (function (){var statearr_32139 = state_32127;
(statearr_32139[(11)] = inst_32054);

return statearr_32139;
})();
var statearr_32140_33533 = state_32127__$1;
(statearr_32140_33533[(2)] = null);

(statearr_32140_33533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (4))){
var inst_32076 = (state_32127[(7)]);
var inst_32080 = (state_32127[(13)]);
var inst_32071 = (state_32127[(2)]);
var inst_32076__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32071,(0),null);
var inst_32079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32071,(1),null);
var inst_32080__$1 = (inst_32076__$1 == null);
var state_32127__$1 = (function (){var statearr_32141 = state_32127;
(statearr_32141[(7)] = inst_32076__$1);

(statearr_32141[(14)] = inst_32079);

(statearr_32141[(13)] = inst_32080__$1);

return statearr_32141;
})();
if(cljs.core.truth_(inst_32080__$1)){
var statearr_32142_33537 = state_32127__$1;
(statearr_32142_33537[(1)] = (5));

} else {
var statearr_32143_33538 = state_32127__$1;
(statearr_32143_33538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (15))){
var inst_32061 = (state_32127[(15)]);
var inst_32099 = (state_32127[(16)]);
var inst_32099__$1 = cljs.core.empty_QMARK_(inst_32061);
var state_32127__$1 = (function (){var statearr_32144 = state_32127;
(statearr_32144[(16)] = inst_32099__$1);

return statearr_32144;
})();
if(inst_32099__$1){
var statearr_32145_33539 = state_32127__$1;
(statearr_32145_33539[(1)] = (17));

} else {
var statearr_32146_33540 = state_32127__$1;
(statearr_32146_33540[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (21))){
var inst_32060 = (state_32127[(12)]);
var inst_32054 = inst_32060;
var state_32127__$1 = (function (){var statearr_32147 = state_32127;
(statearr_32147[(11)] = inst_32054);

return statearr_32147;
})();
var statearr_32148_33544 = state_32127__$1;
(statearr_32148_33544[(2)] = null);

(statearr_32148_33544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (13))){
var inst_32092 = (state_32127[(2)]);
var inst_32093 = calc_state();
var inst_32054 = inst_32093;
var state_32127__$1 = (function (){var statearr_32149 = state_32127;
(statearr_32149[(17)] = inst_32092);

(statearr_32149[(11)] = inst_32054);

return statearr_32149;
})();
var statearr_32150_33545 = state_32127__$1;
(statearr_32150_33545[(2)] = null);

(statearr_32150_33545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (22))){
var inst_32119 = (state_32127[(2)]);
var state_32127__$1 = state_32127;
var statearr_32151_33546 = state_32127__$1;
(statearr_32151_33546[(2)] = inst_32119);

(statearr_32151_33546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (6))){
var inst_32079 = (state_32127[(14)]);
var inst_32083 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32079,change);
var state_32127__$1 = state_32127;
var statearr_32152_33547 = state_32127__$1;
(statearr_32152_33547[(2)] = inst_32083);

(statearr_32152_33547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (25))){
var state_32127__$1 = state_32127;
var statearr_32153_33548 = state_32127__$1;
(statearr_32153_33548[(2)] = null);

(statearr_32153_33548[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (17))){
var inst_32063 = (state_32127[(18)]);
var inst_32079 = (state_32127[(14)]);
var inst_32101 = (inst_32063.cljs$core$IFn$_invoke$arity$1 ? inst_32063.cljs$core$IFn$_invoke$arity$1(inst_32079) : inst_32063.call(null,inst_32079));
var inst_32102 = cljs.core.not(inst_32101);
var state_32127__$1 = state_32127;
var statearr_32154_33549 = state_32127__$1;
(statearr_32154_33549[(2)] = inst_32102);

(statearr_32154_33549[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (3))){
var inst_32123 = (state_32127[(2)]);
var state_32127__$1 = state_32127;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32127__$1,inst_32123);
} else {
if((state_val_32128 === (12))){
var state_32127__$1 = state_32127;
var statearr_32155_33551 = state_32127__$1;
(statearr_32155_33551[(2)] = null);

(statearr_32155_33551[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (2))){
var inst_32054 = (state_32127[(11)]);
var inst_32060 = (state_32127[(12)]);
var inst_32060__$1 = cljs.core.__destructure_map(inst_32054);
var inst_32061 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32060__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32063 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32060__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32064 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32060__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32127__$1 = (function (){var statearr_32156 = state_32127;
(statearr_32156[(12)] = inst_32060__$1);

(statearr_32156[(15)] = inst_32061);

(statearr_32156[(18)] = inst_32063);

return statearr_32156;
})();
return cljs.core.async.ioc_alts_BANG_(state_32127__$1,(4),inst_32064);
} else {
if((state_val_32128 === (23))){
var inst_32110 = (state_32127[(2)]);
var state_32127__$1 = state_32127;
if(cljs.core.truth_(inst_32110)){
var statearr_32157_33553 = state_32127__$1;
(statearr_32157_33553[(1)] = (24));

} else {
var statearr_32158_33554 = state_32127__$1;
(statearr_32158_33554[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (19))){
var inst_32105 = (state_32127[(2)]);
var state_32127__$1 = state_32127;
var statearr_32159_33555 = state_32127__$1;
(statearr_32159_33555[(2)] = inst_32105);

(statearr_32159_33555[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (11))){
var inst_32079 = (state_32127[(14)]);
var inst_32089 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32079);
var state_32127__$1 = state_32127;
var statearr_32161_33556 = state_32127__$1;
(statearr_32161_33556[(2)] = inst_32089);

(statearr_32161_33556[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (9))){
var inst_32061 = (state_32127[(15)]);
var inst_32079 = (state_32127[(14)]);
var inst_32096 = (state_32127[(19)]);
var inst_32096__$1 = (inst_32061.cljs$core$IFn$_invoke$arity$1 ? inst_32061.cljs$core$IFn$_invoke$arity$1(inst_32079) : inst_32061.call(null,inst_32079));
var state_32127__$1 = (function (){var statearr_32162 = state_32127;
(statearr_32162[(19)] = inst_32096__$1);

return statearr_32162;
})();
if(cljs.core.truth_(inst_32096__$1)){
var statearr_32163_33557 = state_32127__$1;
(statearr_32163_33557[(1)] = (14));

} else {
var statearr_32165_33558 = state_32127__$1;
(statearr_32165_33558[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (5))){
var inst_32080 = (state_32127[(13)]);
var state_32127__$1 = state_32127;
var statearr_32168_33559 = state_32127__$1;
(statearr_32168_33559[(2)] = inst_32080);

(statearr_32168_33559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (14))){
var inst_32096 = (state_32127[(19)]);
var state_32127__$1 = state_32127;
var statearr_32169_33560 = state_32127__$1;
(statearr_32169_33560[(2)] = inst_32096);

(statearr_32169_33560[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (26))){
var inst_32115 = (state_32127[(2)]);
var state_32127__$1 = state_32127;
var statearr_32175_33562 = state_32127__$1;
(statearr_32175_33562[(2)] = inst_32115);

(statearr_32175_33562[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (16))){
var inst_32107 = (state_32127[(2)]);
var state_32127__$1 = state_32127;
if(cljs.core.truth_(inst_32107)){
var statearr_32176_33563 = state_32127__$1;
(statearr_32176_33563[(1)] = (20));

} else {
var statearr_32177_33565 = state_32127__$1;
(statearr_32177_33565[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (10))){
var inst_32121 = (state_32127[(2)]);
var state_32127__$1 = state_32127;
var statearr_32182_33567 = state_32127__$1;
(statearr_32182_33567[(2)] = inst_32121);

(statearr_32182_33567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (18))){
var inst_32099 = (state_32127[(16)]);
var state_32127__$1 = state_32127;
var statearr_32183_33569 = state_32127__$1;
(statearr_32183_33569[(2)] = inst_32099);

(statearr_32183_33569[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (8))){
var inst_32076 = (state_32127[(7)]);
var inst_32087 = (inst_32076 == null);
var state_32127__$1 = state_32127;
if(cljs.core.truth_(inst_32087)){
var statearr_32187_33570 = state_32127__$1;
(statearr_32187_33570[(1)] = (11));

} else {
var statearr_32188_33571 = state_32127__$1;
(statearr_32188_33571[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29703__auto__ = null;
var cljs$core$async$mix_$_state_machine__29703__auto____0 = (function (){
var statearr_32193 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32193[(0)] = cljs$core$async$mix_$_state_machine__29703__auto__);

(statearr_32193[(1)] = (1));

return statearr_32193;
});
var cljs$core$async$mix_$_state_machine__29703__auto____1 = (function (state_32127){
while(true){
var ret_value__29704__auto__ = (function (){try{while(true){
var result__29705__auto__ = switch__29702__auto__(state_32127);
if(cljs.core.keyword_identical_QMARK_(result__29705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29705__auto__;
}
break;
}
}catch (e32194){var ex__29706__auto__ = e32194;
var statearr_32196_33572 = state_32127;
(statearr_32196_33572[(2)] = ex__29706__auto__);


if(cljs.core.seq((state_32127[(4)]))){
var statearr_32197_33573 = state_32127;
(statearr_32197_33573[(1)] = cljs.core.first((state_32127[(4)])));

} else {
throw ex__29706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33574 = state_32127;
state_32127 = G__33574;
continue;
} else {
return ret_value__29704__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29703__auto__ = function(state_32127){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29703__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29703__auto____1.call(this,state_32127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29703__auto____0;
cljs$core$async$mix_$_state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29703__auto____1;
return cljs$core$async$mix_$_state_machine__29703__auto__;
})()
})();
var state__29893__auto__ = (function (){var statearr_32198 = f__29892__auto__();
(statearr_32198[(6)] = c__29891__auto___33523);

return statearr_32198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29893__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33579 = (function (p,v,ch,close_QMARK_){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5499__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5497__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5497__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33579(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33581 = (function (p,v,ch){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5499__auto__.call(null,p,v,ch));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5497__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33581(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33582 = (function() {
var G__33583 = null;
var G__33583__1 = (function (p){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5499__auto__.call(null,p));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5497__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33583__2 = (function (p,v){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5499__auto__.call(null,p,v));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5497__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33583 = function(p,v){
switch(arguments.length){
case 1:
return G__33583__1.call(this,p);
case 2:
return G__33583__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33583.cljs$core$IFn$_invoke$arity$1 = G__33583__1;
G__33583.cljs$core$IFn$_invoke$arity$2 = G__33583__2;
return G__33583;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32279 = arguments.length;
switch (G__32279) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33582(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33582(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32297 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32298){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32298 = meta32298;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32299,meta32298__$1){
var self__ = this;
var _32299__$1 = this;
return (new cljs.core.async.t_cljs$core$async32297(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32298__$1));
}));

(cljs.core.async.t_cljs$core$async32297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32299){
var self__ = this;
var _32299__$1 = this;
return self__.meta32298;
}));

(cljs.core.async.t_cljs$core$async32297.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32297.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32297.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32297.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32297.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async32297.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32297.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32297.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32298","meta32298",-2006712264,null)], null);
}));

(cljs.core.async.t_cljs$core$async32297.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32297.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32297");

(cljs.core.async.t_cljs$core$async32297.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async32297");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32297.
 */
cljs.core.async.__GT_t_cljs$core$async32297 = (function cljs$core$async$__GT_t_cljs$core$async32297(ch,topic_fn,buf_fn,mults,ensure_mult,meta32298){
return (new cljs.core.async.t_cljs$core$async32297(ch,topic_fn,buf_fn,mults,ensure_mult,meta32298));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32291 = arguments.length;
switch (G__32291) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32288_SHARP_){
if(cljs.core.truth_((p1__32288_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32288_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32288_SHARP_.call(null,topic)))){
return p1__32288_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32288_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async32297(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__29891__auto___33586 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29892__auto__ = (function (){var switch__29702__auto__ = (function (state_32389){
var state_val_32390 = (state_32389[(1)]);
if((state_val_32390 === (7))){
var inst_32385 = (state_32389[(2)]);
var state_32389__$1 = state_32389;
var statearr_32391_33587 = state_32389__$1;
(statearr_32391_33587[(2)] = inst_32385);

(statearr_32391_33587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (20))){
var state_32389__$1 = state_32389;
var statearr_32393_33588 = state_32389__$1;
(statearr_32393_33588[(2)] = null);

(statearr_32393_33588[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (1))){
var state_32389__$1 = state_32389;
var statearr_32396_33589 = state_32389__$1;
(statearr_32396_33589[(2)] = null);

(statearr_32396_33589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (24))){
var inst_32368 = (state_32389[(7)]);
var inst_32377 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32368);
var state_32389__$1 = state_32389;
var statearr_32397_33590 = state_32389__$1;
(statearr_32397_33590[(2)] = inst_32377);

(statearr_32397_33590[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (4))){
var inst_32309 = (state_32389[(8)]);
var inst_32309__$1 = (state_32389[(2)]);
var inst_32311 = (inst_32309__$1 == null);
var state_32389__$1 = (function (){var statearr_32399 = state_32389;
(statearr_32399[(8)] = inst_32309__$1);

return statearr_32399;
})();
if(cljs.core.truth_(inst_32311)){
var statearr_32401_33592 = state_32389__$1;
(statearr_32401_33592[(1)] = (5));

} else {
var statearr_32402_33593 = state_32389__$1;
(statearr_32402_33593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (15))){
var inst_32359 = (state_32389[(2)]);
var state_32389__$1 = state_32389;
var statearr_32404_33594 = state_32389__$1;
(statearr_32404_33594[(2)] = inst_32359);

(statearr_32404_33594[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (21))){
var inst_32382 = (state_32389[(2)]);
var state_32389__$1 = (function (){var statearr_32405 = state_32389;
(statearr_32405[(9)] = inst_32382);

return statearr_32405;
})();
var statearr_32406_33595 = state_32389__$1;
(statearr_32406_33595[(2)] = null);

(statearr_32406_33595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (13))){
var inst_32336 = (state_32389[(10)]);
var inst_32339 = cljs.core.chunked_seq_QMARK_(inst_32336);
var state_32389__$1 = state_32389;
if(inst_32339){
var statearr_32408_33596 = state_32389__$1;
(statearr_32408_33596[(1)] = (16));

} else {
var statearr_32409_33597 = state_32389__$1;
(statearr_32409_33597[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (22))){
var inst_32374 = (state_32389[(2)]);
var state_32389__$1 = state_32389;
if(cljs.core.truth_(inst_32374)){
var statearr_32410_33598 = state_32389__$1;
(statearr_32410_33598[(1)] = (23));

} else {
var statearr_32411_33599 = state_32389__$1;
(statearr_32411_33599[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (6))){
var inst_32309 = (state_32389[(8)]);
var inst_32368 = (state_32389[(7)]);
var inst_32370 = (state_32389[(11)]);
var inst_32368__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32309) : topic_fn.call(null,inst_32309));
var inst_32369 = cljs.core.deref(mults);
var inst_32370__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32369,inst_32368__$1);
var state_32389__$1 = (function (){var statearr_32412 = state_32389;
(statearr_32412[(7)] = inst_32368__$1);

(statearr_32412[(11)] = inst_32370__$1);

return statearr_32412;
})();
if(cljs.core.truth_(inst_32370__$1)){
var statearr_32415_33600 = state_32389__$1;
(statearr_32415_33600[(1)] = (19));

} else {
var statearr_32416_33601 = state_32389__$1;
(statearr_32416_33601[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (25))){
var inst_32379 = (state_32389[(2)]);
var state_32389__$1 = state_32389;
var statearr_32418_33602 = state_32389__$1;
(statearr_32418_33602[(2)] = inst_32379);

(statearr_32418_33602[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (17))){
var inst_32336 = (state_32389[(10)]);
var inst_32349 = cljs.core.first(inst_32336);
var inst_32351 = cljs.core.async.muxch_STAR_(inst_32349);
var inst_32352 = cljs.core.async.close_BANG_(inst_32351);
var inst_32353 = cljs.core.next(inst_32336);
var inst_32321 = inst_32353;
var inst_32322 = null;
var inst_32323 = (0);
var inst_32324 = (0);
var state_32389__$1 = (function (){var statearr_32420 = state_32389;
(statearr_32420[(12)] = inst_32352);

(statearr_32420[(13)] = inst_32321);

(statearr_32420[(14)] = inst_32322);

(statearr_32420[(15)] = inst_32323);

(statearr_32420[(16)] = inst_32324);

return statearr_32420;
})();
var statearr_32421_33603 = state_32389__$1;
(statearr_32421_33603[(2)] = null);

(statearr_32421_33603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (3))){
var inst_32387 = (state_32389[(2)]);
var state_32389__$1 = state_32389;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32389__$1,inst_32387);
} else {
if((state_val_32390 === (12))){
var inst_32361 = (state_32389[(2)]);
var state_32389__$1 = state_32389;
var statearr_32422_33604 = state_32389__$1;
(statearr_32422_33604[(2)] = inst_32361);

(statearr_32422_33604[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (2))){
var state_32389__$1 = state_32389;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32389__$1,(4),ch);
} else {
if((state_val_32390 === (23))){
var state_32389__$1 = state_32389;
var statearr_32424_33606 = state_32389__$1;
(statearr_32424_33606[(2)] = null);

(statearr_32424_33606[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (19))){
var inst_32370 = (state_32389[(11)]);
var inst_32309 = (state_32389[(8)]);
var inst_32372 = cljs.core.async.muxch_STAR_(inst_32370);
var state_32389__$1 = state_32389;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32389__$1,(22),inst_32372,inst_32309);
} else {
if((state_val_32390 === (11))){
var inst_32321 = (state_32389[(13)]);
var inst_32336 = (state_32389[(10)]);
var inst_32336__$1 = cljs.core.seq(inst_32321);
var state_32389__$1 = (function (){var statearr_32425 = state_32389;
(statearr_32425[(10)] = inst_32336__$1);

return statearr_32425;
})();
if(inst_32336__$1){
var statearr_32426_33608 = state_32389__$1;
(statearr_32426_33608[(1)] = (13));

} else {
var statearr_32427_33609 = state_32389__$1;
(statearr_32427_33609[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (9))){
var inst_32363 = (state_32389[(2)]);
var state_32389__$1 = state_32389;
var statearr_32430_33610 = state_32389__$1;
(statearr_32430_33610[(2)] = inst_32363);

(statearr_32430_33610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (5))){
var inst_32318 = cljs.core.deref(mults);
var inst_32319 = cljs.core.vals(inst_32318);
var inst_32320 = cljs.core.seq(inst_32319);
var inst_32321 = inst_32320;
var inst_32322 = null;
var inst_32323 = (0);
var inst_32324 = (0);
var state_32389__$1 = (function (){var statearr_32433 = state_32389;
(statearr_32433[(13)] = inst_32321);

(statearr_32433[(14)] = inst_32322);

(statearr_32433[(15)] = inst_32323);

(statearr_32433[(16)] = inst_32324);

return statearr_32433;
})();
var statearr_32434_33611 = state_32389__$1;
(statearr_32434_33611[(2)] = null);

(statearr_32434_33611[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (14))){
var state_32389__$1 = state_32389;
var statearr_32438_33612 = state_32389__$1;
(statearr_32438_33612[(2)] = null);

(statearr_32438_33612[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (16))){
var inst_32336 = (state_32389[(10)]);
var inst_32341 = cljs.core.chunk_first(inst_32336);
var inst_32342 = cljs.core.chunk_rest(inst_32336);
var inst_32343 = cljs.core.count(inst_32341);
var inst_32321 = inst_32342;
var inst_32322 = inst_32341;
var inst_32323 = inst_32343;
var inst_32324 = (0);
var state_32389__$1 = (function (){var statearr_32439 = state_32389;
(statearr_32439[(13)] = inst_32321);

(statearr_32439[(14)] = inst_32322);

(statearr_32439[(15)] = inst_32323);

(statearr_32439[(16)] = inst_32324);

return statearr_32439;
})();
var statearr_32440_33615 = state_32389__$1;
(statearr_32440_33615[(2)] = null);

(statearr_32440_33615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (10))){
var inst_32322 = (state_32389[(14)]);
var inst_32324 = (state_32389[(16)]);
var inst_32321 = (state_32389[(13)]);
var inst_32323 = (state_32389[(15)]);
var inst_32330 = cljs.core._nth(inst_32322,inst_32324);
var inst_32331 = cljs.core.async.muxch_STAR_(inst_32330);
var inst_32332 = cljs.core.async.close_BANG_(inst_32331);
var inst_32333 = (inst_32324 + (1));
var tmp32435 = inst_32321;
var tmp32436 = inst_32322;
var tmp32437 = inst_32323;
var inst_32321__$1 = tmp32435;
var inst_32322__$1 = tmp32436;
var inst_32323__$1 = tmp32437;
var inst_32324__$1 = inst_32333;
var state_32389__$1 = (function (){var statearr_32442 = state_32389;
(statearr_32442[(17)] = inst_32332);

(statearr_32442[(13)] = inst_32321__$1);

(statearr_32442[(14)] = inst_32322__$1);

(statearr_32442[(15)] = inst_32323__$1);

(statearr_32442[(16)] = inst_32324__$1);

return statearr_32442;
})();
var statearr_32443_33620 = state_32389__$1;
(statearr_32443_33620[(2)] = null);

(statearr_32443_33620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (18))){
var inst_32356 = (state_32389[(2)]);
var state_32389__$1 = state_32389;
var statearr_32444_33626 = state_32389__$1;
(statearr_32444_33626[(2)] = inst_32356);

(statearr_32444_33626[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (8))){
var inst_32324 = (state_32389[(16)]);
var inst_32323 = (state_32389[(15)]);
var inst_32327 = (inst_32324 < inst_32323);
var inst_32328 = inst_32327;
var state_32389__$1 = state_32389;
if(cljs.core.truth_(inst_32328)){
var statearr_32450_33634 = state_32389__$1;
(statearr_32450_33634[(1)] = (10));

} else {
var statearr_32451_33635 = state_32389__$1;
(statearr_32451_33635[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29703__auto__ = null;
var cljs$core$async$state_machine__29703__auto____0 = (function (){
var statearr_32452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32452[(0)] = cljs$core$async$state_machine__29703__auto__);

(statearr_32452[(1)] = (1));

return statearr_32452;
});
var cljs$core$async$state_machine__29703__auto____1 = (function (state_32389){
while(true){
var ret_value__29704__auto__ = (function (){try{while(true){
var result__29705__auto__ = switch__29702__auto__(state_32389);
if(cljs.core.keyword_identical_QMARK_(result__29705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29705__auto__;
}
break;
}
}catch (e32453){var ex__29706__auto__ = e32453;
var statearr_32454_33648 = state_32389;
(statearr_32454_33648[(2)] = ex__29706__auto__);


if(cljs.core.seq((state_32389[(4)]))){
var statearr_32455_33649 = state_32389;
(statearr_32455_33649[(1)] = cljs.core.first((state_32389[(4)])));

} else {
throw ex__29706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33655 = state_32389;
state_32389 = G__33655;
continue;
} else {
return ret_value__29704__auto__;
}
break;
}
});
cljs$core$async$state_machine__29703__auto__ = function(state_32389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29703__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29703__auto____1.call(this,state_32389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29703__auto____0;
cljs$core$async$state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29703__auto____1;
return cljs$core$async$state_machine__29703__auto__;
})()
})();
var state__29893__auto__ = (function (){var statearr_32456 = f__29892__auto__();
(statearr_32456[(6)] = c__29891__auto___33586);

return statearr_32456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29893__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32458 = arguments.length;
switch (G__32458) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32462 = arguments.length;
switch (G__32462) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32464 = arguments.length;
switch (G__32464) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__29891__auto___33675 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29892__auto__ = (function (){var switch__29702__auto__ = (function (state_32507){
var state_val_32508 = (state_32507[(1)]);
if((state_val_32508 === (7))){
var state_32507__$1 = state_32507;
var statearr_32509_33677 = state_32507__$1;
(statearr_32509_33677[(2)] = null);

(statearr_32509_33677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32508 === (1))){
var state_32507__$1 = state_32507;
var statearr_32510_33678 = state_32507__$1;
(statearr_32510_33678[(2)] = null);

(statearr_32510_33678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32508 === (4))){
var inst_32468 = (state_32507[(7)]);
var inst_32467 = (state_32507[(8)]);
var inst_32470 = (inst_32468 < inst_32467);
var state_32507__$1 = state_32507;
if(cljs.core.truth_(inst_32470)){
var statearr_32511_33680 = state_32507__$1;
(statearr_32511_33680[(1)] = (6));

} else {
var statearr_32512_33681 = state_32507__$1;
(statearr_32512_33681[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32508 === (15))){
var inst_32493 = (state_32507[(9)]);
var inst_32498 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32493);
var state_32507__$1 = state_32507;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32507__$1,(17),out,inst_32498);
} else {
if((state_val_32508 === (13))){
var inst_32493 = (state_32507[(9)]);
var inst_32493__$1 = (state_32507[(2)]);
var inst_32494 = cljs.core.some(cljs.core.nil_QMARK_,inst_32493__$1);
var state_32507__$1 = (function (){var statearr_32513 = state_32507;
(statearr_32513[(9)] = inst_32493__$1);

return statearr_32513;
})();
if(cljs.core.truth_(inst_32494)){
var statearr_32514_33682 = state_32507__$1;
(statearr_32514_33682[(1)] = (14));

} else {
var statearr_32515_33683 = state_32507__$1;
(statearr_32515_33683[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32508 === (6))){
var state_32507__$1 = state_32507;
var statearr_32516_33684 = state_32507__$1;
(statearr_32516_33684[(2)] = null);

(statearr_32516_33684[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32508 === (17))){
var inst_32500 = (state_32507[(2)]);
var state_32507__$1 = (function (){var statearr_32518 = state_32507;
(statearr_32518[(10)] = inst_32500);

return statearr_32518;
})();
var statearr_32522_33685 = state_32507__$1;
(statearr_32522_33685[(2)] = null);

(statearr_32522_33685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32508 === (3))){
var inst_32505 = (state_32507[(2)]);
var state_32507__$1 = state_32507;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32507__$1,inst_32505);
} else {
if((state_val_32508 === (12))){
var _ = (function (){var statearr_32523 = state_32507;
(statearr_32523[(4)] = cljs.core.rest((state_32507[(4)])));

return statearr_32523;
})();
var state_32507__$1 = state_32507;
var ex32517 = (state_32507__$1[(2)]);
var statearr_32524_33686 = state_32507__$1;
(statearr_32524_33686[(5)] = ex32517);


if((ex32517 instanceof Object)){
var statearr_32525_33687 = state_32507__$1;
(statearr_32525_33687[(1)] = (11));

(statearr_32525_33687[(5)] = null);

} else {
throw ex32517;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32508 === (2))){
var inst_32466 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32467 = cnt;
var inst_32468 = (0);
var state_32507__$1 = (function (){var statearr_32534 = state_32507;
(statearr_32534[(11)] = inst_32466);

(statearr_32534[(8)] = inst_32467);

(statearr_32534[(7)] = inst_32468);

return statearr_32534;
})();
var statearr_32535_33688 = state_32507__$1;
(statearr_32535_33688[(2)] = null);

(statearr_32535_33688[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32508 === (11))){
var inst_32472 = (state_32507[(2)]);
var inst_32473 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32507__$1 = (function (){var statearr_32536 = state_32507;
(statearr_32536[(12)] = inst_32472);

return statearr_32536;
})();
var statearr_32537_33689 = state_32507__$1;
(statearr_32537_33689[(2)] = inst_32473);

(statearr_32537_33689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32508 === (9))){
var inst_32468 = (state_32507[(7)]);
var _ = (function (){var statearr_32538 = state_32507;
(statearr_32538[(4)] = cljs.core.cons((12),(state_32507[(4)])));

return statearr_32538;
})();
var inst_32479 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32468) : chs__$1.call(null,inst_32468));
var inst_32480 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32468) : done.call(null,inst_32468));
var inst_32481 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32479,inst_32480);
var ___$1 = (function (){var statearr_32539 = state_32507;
(statearr_32539[(4)] = cljs.core.rest((state_32507[(4)])));

return statearr_32539;
})();
var state_32507__$1 = state_32507;
var statearr_32540_33690 = state_32507__$1;
(statearr_32540_33690[(2)] = inst_32481);

(statearr_32540_33690[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32508 === (5))){
var inst_32491 = (state_32507[(2)]);
var state_32507__$1 = (function (){var statearr_32547 = state_32507;
(statearr_32547[(13)] = inst_32491);

return statearr_32547;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32507__$1,(13),dchan);
} else {
if((state_val_32508 === (14))){
var inst_32496 = cljs.core.async.close_BANG_(out);
var state_32507__$1 = state_32507;
var statearr_32548_33691 = state_32507__$1;
(statearr_32548_33691[(2)] = inst_32496);

(statearr_32548_33691[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32508 === (16))){
var inst_32503 = (state_32507[(2)]);
var state_32507__$1 = state_32507;
var statearr_32549_33692 = state_32507__$1;
(statearr_32549_33692[(2)] = inst_32503);

(statearr_32549_33692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32508 === (10))){
var inst_32468 = (state_32507[(7)]);
var inst_32484 = (state_32507[(2)]);
var inst_32485 = (inst_32468 + (1));
var inst_32468__$1 = inst_32485;
var state_32507__$1 = (function (){var statearr_32550 = state_32507;
(statearr_32550[(14)] = inst_32484);

(statearr_32550[(7)] = inst_32468__$1);

return statearr_32550;
})();
var statearr_32551_33697 = state_32507__$1;
(statearr_32551_33697[(2)] = null);

(statearr_32551_33697[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32508 === (8))){
var inst_32489 = (state_32507[(2)]);
var state_32507__$1 = state_32507;
var statearr_32552_33698 = state_32507__$1;
(statearr_32552_33698[(2)] = inst_32489);

(statearr_32552_33698[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29703__auto__ = null;
var cljs$core$async$state_machine__29703__auto____0 = (function (){
var statearr_32559 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32559[(0)] = cljs$core$async$state_machine__29703__auto__);

(statearr_32559[(1)] = (1));

return statearr_32559;
});
var cljs$core$async$state_machine__29703__auto____1 = (function (state_32507){
while(true){
var ret_value__29704__auto__ = (function (){try{while(true){
var result__29705__auto__ = switch__29702__auto__(state_32507);
if(cljs.core.keyword_identical_QMARK_(result__29705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29705__auto__;
}
break;
}
}catch (e32560){var ex__29706__auto__ = e32560;
var statearr_32561_33699 = state_32507;
(statearr_32561_33699[(2)] = ex__29706__auto__);


if(cljs.core.seq((state_32507[(4)]))){
var statearr_32562_33700 = state_32507;
(statearr_32562_33700[(1)] = cljs.core.first((state_32507[(4)])));

} else {
throw ex__29706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33721 = state_32507;
state_32507 = G__33721;
continue;
} else {
return ret_value__29704__auto__;
}
break;
}
});
cljs$core$async$state_machine__29703__auto__ = function(state_32507){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29703__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29703__auto____1.call(this,state_32507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29703__auto____0;
cljs$core$async$state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29703__auto____1;
return cljs$core$async$state_machine__29703__auto__;
})()
})();
var state__29893__auto__ = (function (){var statearr_32563 = f__29892__auto__();
(statearr_32563[(6)] = c__29891__auto___33675);

return statearr_32563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29893__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32567 = arguments.length;
switch (G__32567) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29891__auto___33723 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29892__auto__ = (function (){var switch__29702__auto__ = (function (state_32601){
var state_val_32602 = (state_32601[(1)]);
if((state_val_32602 === (7))){
var inst_32580 = (state_32601[(7)]);
var inst_32581 = (state_32601[(8)]);
var inst_32580__$1 = (state_32601[(2)]);
var inst_32581__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32580__$1,(0),null);
var inst_32582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32580__$1,(1),null);
var inst_32583 = (inst_32581__$1 == null);
var state_32601__$1 = (function (){var statearr_32606 = state_32601;
(statearr_32606[(7)] = inst_32580__$1);

(statearr_32606[(8)] = inst_32581__$1);

(statearr_32606[(9)] = inst_32582);

return statearr_32606;
})();
if(cljs.core.truth_(inst_32583)){
var statearr_32607_33724 = state_32601__$1;
(statearr_32607_33724[(1)] = (8));

} else {
var statearr_32608_33725 = state_32601__$1;
(statearr_32608_33725[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32602 === (1))){
var inst_32569 = cljs.core.vec(chs);
var inst_32570 = inst_32569;
var state_32601__$1 = (function (){var statearr_32612 = state_32601;
(statearr_32612[(10)] = inst_32570);

return statearr_32612;
})();
var statearr_32613_33726 = state_32601__$1;
(statearr_32613_33726[(2)] = null);

(statearr_32613_33726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32602 === (4))){
var inst_32570 = (state_32601[(10)]);
var state_32601__$1 = state_32601;
return cljs.core.async.ioc_alts_BANG_(state_32601__$1,(7),inst_32570);
} else {
if((state_val_32602 === (6))){
var inst_32597 = (state_32601[(2)]);
var state_32601__$1 = state_32601;
var statearr_32617_33728 = state_32601__$1;
(statearr_32617_33728[(2)] = inst_32597);

(statearr_32617_33728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32602 === (3))){
var inst_32599 = (state_32601[(2)]);
var state_32601__$1 = state_32601;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32601__$1,inst_32599);
} else {
if((state_val_32602 === (2))){
var inst_32570 = (state_32601[(10)]);
var inst_32573 = cljs.core.count(inst_32570);
var inst_32574 = (inst_32573 > (0));
var state_32601__$1 = state_32601;
if(cljs.core.truth_(inst_32574)){
var statearr_32620_33729 = state_32601__$1;
(statearr_32620_33729[(1)] = (4));

} else {
var statearr_32621_33730 = state_32601__$1;
(statearr_32621_33730[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32602 === (11))){
var inst_32570 = (state_32601[(10)]);
var inst_32590 = (state_32601[(2)]);
var tmp32618 = inst_32570;
var inst_32570__$1 = tmp32618;
var state_32601__$1 = (function (){var statearr_32622 = state_32601;
(statearr_32622[(11)] = inst_32590);

(statearr_32622[(10)] = inst_32570__$1);

return statearr_32622;
})();
var statearr_32623_33731 = state_32601__$1;
(statearr_32623_33731[(2)] = null);

(statearr_32623_33731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32602 === (9))){
var inst_32581 = (state_32601[(8)]);
var state_32601__$1 = state_32601;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32601__$1,(11),out,inst_32581);
} else {
if((state_val_32602 === (5))){
var inst_32595 = cljs.core.async.close_BANG_(out);
var state_32601__$1 = state_32601;
var statearr_32625_33732 = state_32601__$1;
(statearr_32625_33732[(2)] = inst_32595);

(statearr_32625_33732[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32602 === (10))){
var inst_32593 = (state_32601[(2)]);
var state_32601__$1 = state_32601;
var statearr_32626_33733 = state_32601__$1;
(statearr_32626_33733[(2)] = inst_32593);

(statearr_32626_33733[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32602 === (8))){
var inst_32570 = (state_32601[(10)]);
var inst_32580 = (state_32601[(7)]);
var inst_32581 = (state_32601[(8)]);
var inst_32582 = (state_32601[(9)]);
var inst_32585 = (function (){var cs = inst_32570;
var vec__32576 = inst_32580;
var v = inst_32581;
var c = inst_32582;
return (function (p1__32564_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32564_SHARP_);
});
})();
var inst_32586 = cljs.core.filterv(inst_32585,inst_32570);
var inst_32570__$1 = inst_32586;
var state_32601__$1 = (function (){var statearr_32629 = state_32601;
(statearr_32629[(10)] = inst_32570__$1);

return statearr_32629;
})();
var statearr_32631_33734 = state_32601__$1;
(statearr_32631_33734[(2)] = null);

(statearr_32631_33734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29703__auto__ = null;
var cljs$core$async$state_machine__29703__auto____0 = (function (){
var statearr_32632 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32632[(0)] = cljs$core$async$state_machine__29703__auto__);

(statearr_32632[(1)] = (1));

return statearr_32632;
});
var cljs$core$async$state_machine__29703__auto____1 = (function (state_32601){
while(true){
var ret_value__29704__auto__ = (function (){try{while(true){
var result__29705__auto__ = switch__29702__auto__(state_32601);
if(cljs.core.keyword_identical_QMARK_(result__29705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29705__auto__;
}
break;
}
}catch (e32633){var ex__29706__auto__ = e32633;
var statearr_32634_33737 = state_32601;
(statearr_32634_33737[(2)] = ex__29706__auto__);


if(cljs.core.seq((state_32601[(4)]))){
var statearr_32635_33738 = state_32601;
(statearr_32635_33738[(1)] = cljs.core.first((state_32601[(4)])));

} else {
throw ex__29706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33739 = state_32601;
state_32601 = G__33739;
continue;
} else {
return ret_value__29704__auto__;
}
break;
}
});
cljs$core$async$state_machine__29703__auto__ = function(state_32601){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29703__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29703__auto____1.call(this,state_32601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29703__auto____0;
cljs$core$async$state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29703__auto____1;
return cljs$core$async$state_machine__29703__auto__;
})()
})();
var state__29893__auto__ = (function (){var statearr_32636 = f__29892__auto__();
(statearr_32636[(6)] = c__29891__auto___33723);

return statearr_32636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29893__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32638 = arguments.length;
switch (G__32638) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29891__auto___33741 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29892__auto__ = (function (){var switch__29702__auto__ = (function (state_32667){
var state_val_32668 = (state_32667[(1)]);
if((state_val_32668 === (7))){
var inst_32648 = (state_32667[(7)]);
var inst_32648__$1 = (state_32667[(2)]);
var inst_32649 = (inst_32648__$1 == null);
var inst_32650 = cljs.core.not(inst_32649);
var state_32667__$1 = (function (){var statearr_32673 = state_32667;
(statearr_32673[(7)] = inst_32648__$1);

return statearr_32673;
})();
if(inst_32650){
var statearr_32674_33742 = state_32667__$1;
(statearr_32674_33742[(1)] = (8));

} else {
var statearr_32676_33743 = state_32667__$1;
(statearr_32676_33743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (1))){
var inst_32643 = (0);
var state_32667__$1 = (function (){var statearr_32677 = state_32667;
(statearr_32677[(8)] = inst_32643);

return statearr_32677;
})();
var statearr_32678_33744 = state_32667__$1;
(statearr_32678_33744[(2)] = null);

(statearr_32678_33744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (4))){
var state_32667__$1 = state_32667;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32667__$1,(7),ch);
} else {
if((state_val_32668 === (6))){
var inst_32661 = (state_32667[(2)]);
var state_32667__$1 = state_32667;
var statearr_32679_33746 = state_32667__$1;
(statearr_32679_33746[(2)] = inst_32661);

(statearr_32679_33746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (3))){
var inst_32664 = (state_32667[(2)]);
var inst_32665 = cljs.core.async.close_BANG_(out);
var state_32667__$1 = (function (){var statearr_32680 = state_32667;
(statearr_32680[(9)] = inst_32664);

return statearr_32680;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32667__$1,inst_32665);
} else {
if((state_val_32668 === (2))){
var inst_32643 = (state_32667[(8)]);
var inst_32645 = (inst_32643 < n);
var state_32667__$1 = state_32667;
if(cljs.core.truth_(inst_32645)){
var statearr_32687_33747 = state_32667__$1;
(statearr_32687_33747[(1)] = (4));

} else {
var statearr_32688_33753 = state_32667__$1;
(statearr_32688_33753[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (11))){
var inst_32643 = (state_32667[(8)]);
var inst_32653 = (state_32667[(2)]);
var inst_32654 = (inst_32643 + (1));
var inst_32643__$1 = inst_32654;
var state_32667__$1 = (function (){var statearr_32689 = state_32667;
(statearr_32689[(10)] = inst_32653);

(statearr_32689[(8)] = inst_32643__$1);

return statearr_32689;
})();
var statearr_32690_33754 = state_32667__$1;
(statearr_32690_33754[(2)] = null);

(statearr_32690_33754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (9))){
var state_32667__$1 = state_32667;
var statearr_32691_33755 = state_32667__$1;
(statearr_32691_33755[(2)] = null);

(statearr_32691_33755[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (5))){
var state_32667__$1 = state_32667;
var statearr_32692_33761 = state_32667__$1;
(statearr_32692_33761[(2)] = null);

(statearr_32692_33761[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (10))){
var inst_32658 = (state_32667[(2)]);
var state_32667__$1 = state_32667;
var statearr_32693_33765 = state_32667__$1;
(statearr_32693_33765[(2)] = inst_32658);

(statearr_32693_33765[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (8))){
var inst_32648 = (state_32667[(7)]);
var state_32667__$1 = state_32667;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32667__$1,(11),out,inst_32648);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29703__auto__ = null;
var cljs$core$async$state_machine__29703__auto____0 = (function (){
var statearr_32695 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32695[(0)] = cljs$core$async$state_machine__29703__auto__);

(statearr_32695[(1)] = (1));

return statearr_32695;
});
var cljs$core$async$state_machine__29703__auto____1 = (function (state_32667){
while(true){
var ret_value__29704__auto__ = (function (){try{while(true){
var result__29705__auto__ = switch__29702__auto__(state_32667);
if(cljs.core.keyword_identical_QMARK_(result__29705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29705__auto__;
}
break;
}
}catch (e32696){var ex__29706__auto__ = e32696;
var statearr_32697_33775 = state_32667;
(statearr_32697_33775[(2)] = ex__29706__auto__);


if(cljs.core.seq((state_32667[(4)]))){
var statearr_32698_33776 = state_32667;
(statearr_32698_33776[(1)] = cljs.core.first((state_32667[(4)])));

} else {
throw ex__29706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33777 = state_32667;
state_32667 = G__33777;
continue;
} else {
return ret_value__29704__auto__;
}
break;
}
});
cljs$core$async$state_machine__29703__auto__ = function(state_32667){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29703__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29703__auto____1.call(this,state_32667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29703__auto____0;
cljs$core$async$state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29703__auto____1;
return cljs$core$async$state_machine__29703__auto__;
})()
})();
var state__29893__auto__ = (function (){var statearr_32699 = f__29892__auto__();
(statearr_32699[(6)] = c__29891__auto___33741);

return statearr_32699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29893__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32705 = (function (f,ch,meta32703,_,fn1,meta32706){
this.f = f;
this.ch = ch;
this.meta32703 = meta32703;
this._ = _;
this.fn1 = fn1;
this.meta32706 = meta32706;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32707,meta32706__$1){
var self__ = this;
var _32707__$1 = this;
return (new cljs.core.async.t_cljs$core$async32705(self__.f,self__.ch,self__.meta32703,self__._,self__.fn1,meta32706__$1));
}));

(cljs.core.async.t_cljs$core$async32705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32707){
var self__ = this;
var _32707__$1 = this;
return self__.meta32706;
}));

(cljs.core.async.t_cljs$core$async32705.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32705.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32705.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32705.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32701_SHARP_){
var G__32708 = (((p1__32701_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32701_SHARP_) : self__.f.call(null,p1__32701_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32708) : f1.call(null,G__32708));
});
}));

(cljs.core.async.t_cljs$core$async32705.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32703","meta32703",-79976456,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32702","cljs.core.async/t_cljs$core$async32702",1203954801,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32706","meta32706",-1935693441,null)], null);
}));

(cljs.core.async.t_cljs$core$async32705.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32705.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32705");

(cljs.core.async.t_cljs$core$async32705.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async32705");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32705.
 */
cljs.core.async.__GT_t_cljs$core$async32705 = (function cljs$core$async$__GT_t_cljs$core$async32705(f,ch,meta32703,_,fn1,meta32706){
return (new cljs.core.async.t_cljs$core$async32705(f,ch,meta32703,_,fn1,meta32706));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32702 = (function (f,ch,meta32703){
this.f = f;
this.ch = ch;
this.meta32703 = meta32703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32704,meta32703__$1){
var self__ = this;
var _32704__$1 = this;
return (new cljs.core.async.t_cljs$core$async32702(self__.f,self__.ch,meta32703__$1));
}));

(cljs.core.async.t_cljs$core$async32702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32704){
var self__ = this;
var _32704__$1 = this;
return self__.meta32703;
}));

(cljs.core.async.t_cljs$core$async32702.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32702.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32702.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32702.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32702.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async32705(self__.f,self__.ch,self__.meta32703,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5140__auto__ = ret;
if(cljs.core.truth_(and__5140__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32717 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32717) : self__.f.call(null,G__32717));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32702.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32702.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32702.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32703","meta32703",-79976456,null)], null);
}));

(cljs.core.async.t_cljs$core$async32702.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32702.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32702");

(cljs.core.async.t_cljs$core$async32702.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async32702");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32702.
 */
cljs.core.async.__GT_t_cljs$core$async32702 = (function cljs$core$async$__GT_t_cljs$core$async32702(f,ch,meta32703){
return (new cljs.core.async.t_cljs$core$async32702(f,ch,meta32703));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async32702(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32731 = (function (f,ch,meta32732){
this.f = f;
this.ch = ch;
this.meta32732 = meta32732;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32733,meta32732__$1){
var self__ = this;
var _32733__$1 = this;
return (new cljs.core.async.t_cljs$core$async32731(self__.f,self__.ch,meta32732__$1));
}));

(cljs.core.async.t_cljs$core$async32731.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32733){
var self__ = this;
var _32733__$1 = this;
return self__.meta32732;
}));

(cljs.core.async.t_cljs$core$async32731.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32731.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32731.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32731.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32731.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32731.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32731.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32732","meta32732",-946698619,null)], null);
}));

(cljs.core.async.t_cljs$core$async32731.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32731.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32731");

(cljs.core.async.t_cljs$core$async32731.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async32731");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32731.
 */
cljs.core.async.__GT_t_cljs$core$async32731 = (function cljs$core$async$__GT_t_cljs$core$async32731(f,ch,meta32732){
return (new cljs.core.async.t_cljs$core$async32731(f,ch,meta32732));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async32731(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32739 = (function (p,ch,meta32740){
this.p = p;
this.ch = ch;
this.meta32740 = meta32740;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32741,meta32740__$1){
var self__ = this;
var _32741__$1 = this;
return (new cljs.core.async.t_cljs$core$async32739(self__.p,self__.ch,meta32740__$1));
}));

(cljs.core.async.t_cljs$core$async32739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32741){
var self__ = this;
var _32741__$1 = this;
return self__.meta32740;
}));

(cljs.core.async.t_cljs$core$async32739.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32739.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32739.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32739.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32739.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32739.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32739.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32739.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32740","meta32740",-781246219,null)], null);
}));

(cljs.core.async.t_cljs$core$async32739.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32739.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32739");

(cljs.core.async.t_cljs$core$async32739.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async32739");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32739.
 */
cljs.core.async.__GT_t_cljs$core$async32739 = (function cljs$core$async$__GT_t_cljs$core$async32739(p,ch,meta32740){
return (new cljs.core.async.t_cljs$core$async32739(p,ch,meta32740));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async32739(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32751 = arguments.length;
switch (G__32751) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29891__auto___33823 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29892__auto__ = (function (){var switch__29702__auto__ = (function (state_32772){
var state_val_32773 = (state_32772[(1)]);
if((state_val_32773 === (7))){
var inst_32768 = (state_32772[(2)]);
var state_32772__$1 = state_32772;
var statearr_32774_33824 = state_32772__$1;
(statearr_32774_33824[(2)] = inst_32768);

(statearr_32774_33824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32773 === (1))){
var state_32772__$1 = state_32772;
var statearr_32775_33825 = state_32772__$1;
(statearr_32775_33825[(2)] = null);

(statearr_32775_33825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32773 === (4))){
var inst_32754 = (state_32772[(7)]);
var inst_32754__$1 = (state_32772[(2)]);
var inst_32755 = (inst_32754__$1 == null);
var state_32772__$1 = (function (){var statearr_32776 = state_32772;
(statearr_32776[(7)] = inst_32754__$1);

return statearr_32776;
})();
if(cljs.core.truth_(inst_32755)){
var statearr_32777_33826 = state_32772__$1;
(statearr_32777_33826[(1)] = (5));

} else {
var statearr_32778_33827 = state_32772__$1;
(statearr_32778_33827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32773 === (6))){
var inst_32754 = (state_32772[(7)]);
var inst_32759 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32754) : p.call(null,inst_32754));
var state_32772__$1 = state_32772;
if(cljs.core.truth_(inst_32759)){
var statearr_32779_33828 = state_32772__$1;
(statearr_32779_33828[(1)] = (8));

} else {
var statearr_32780_33829 = state_32772__$1;
(statearr_32780_33829[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32773 === (3))){
var inst_32770 = (state_32772[(2)]);
var state_32772__$1 = state_32772;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32772__$1,inst_32770);
} else {
if((state_val_32773 === (2))){
var state_32772__$1 = state_32772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32772__$1,(4),ch);
} else {
if((state_val_32773 === (11))){
var inst_32762 = (state_32772[(2)]);
var state_32772__$1 = state_32772;
var statearr_32782_33830 = state_32772__$1;
(statearr_32782_33830[(2)] = inst_32762);

(statearr_32782_33830[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32773 === (9))){
var state_32772__$1 = state_32772;
var statearr_32783_33831 = state_32772__$1;
(statearr_32783_33831[(2)] = null);

(statearr_32783_33831[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32773 === (5))){
var inst_32757 = cljs.core.async.close_BANG_(out);
var state_32772__$1 = state_32772;
var statearr_32784_33832 = state_32772__$1;
(statearr_32784_33832[(2)] = inst_32757);

(statearr_32784_33832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32773 === (10))){
var inst_32765 = (state_32772[(2)]);
var state_32772__$1 = (function (){var statearr_32785 = state_32772;
(statearr_32785[(8)] = inst_32765);

return statearr_32785;
})();
var statearr_32786_33834 = state_32772__$1;
(statearr_32786_33834[(2)] = null);

(statearr_32786_33834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32773 === (8))){
var inst_32754 = (state_32772[(7)]);
var state_32772__$1 = state_32772;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32772__$1,(11),out,inst_32754);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29703__auto__ = null;
var cljs$core$async$state_machine__29703__auto____0 = (function (){
var statearr_32787 = [null,null,null,null,null,null,null,null,null];
(statearr_32787[(0)] = cljs$core$async$state_machine__29703__auto__);

(statearr_32787[(1)] = (1));

return statearr_32787;
});
var cljs$core$async$state_machine__29703__auto____1 = (function (state_32772){
while(true){
var ret_value__29704__auto__ = (function (){try{while(true){
var result__29705__auto__ = switch__29702__auto__(state_32772);
if(cljs.core.keyword_identical_QMARK_(result__29705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29705__auto__;
}
break;
}
}catch (e32788){var ex__29706__auto__ = e32788;
var statearr_32789_33835 = state_32772;
(statearr_32789_33835[(2)] = ex__29706__auto__);


if(cljs.core.seq((state_32772[(4)]))){
var statearr_32790_33836 = state_32772;
(statearr_32790_33836[(1)] = cljs.core.first((state_32772[(4)])));

} else {
throw ex__29706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33837 = state_32772;
state_32772 = G__33837;
continue;
} else {
return ret_value__29704__auto__;
}
break;
}
});
cljs$core$async$state_machine__29703__auto__ = function(state_32772){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29703__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29703__auto____1.call(this,state_32772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29703__auto____0;
cljs$core$async$state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29703__auto____1;
return cljs$core$async$state_machine__29703__auto__;
})()
})();
var state__29893__auto__ = (function (){var statearr_32791 = f__29892__auto__();
(statearr_32791[(6)] = c__29891__auto___33823);

return statearr_32791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29893__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32793 = arguments.length;
switch (G__32793) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29891__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29892__auto__ = (function (){var switch__29702__auto__ = (function (state_32857){
var state_val_32858 = (state_32857[(1)]);
if((state_val_32858 === (7))){
var inst_32853 = (state_32857[(2)]);
var state_32857__$1 = state_32857;
var statearr_32859_33851 = state_32857__$1;
(statearr_32859_33851[(2)] = inst_32853);

(statearr_32859_33851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (20))){
var inst_32822 = (state_32857[(7)]);
var inst_32834 = (state_32857[(2)]);
var inst_32835 = cljs.core.next(inst_32822);
var inst_32807 = inst_32835;
var inst_32808 = null;
var inst_32809 = (0);
var inst_32810 = (0);
var state_32857__$1 = (function (){var statearr_32860 = state_32857;
(statearr_32860[(8)] = inst_32834);

(statearr_32860[(9)] = inst_32807);

(statearr_32860[(10)] = inst_32808);

(statearr_32860[(11)] = inst_32809);

(statearr_32860[(12)] = inst_32810);

return statearr_32860;
})();
var statearr_32861_33853 = state_32857__$1;
(statearr_32861_33853[(2)] = null);

(statearr_32861_33853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (1))){
var state_32857__$1 = state_32857;
var statearr_32862_33854 = state_32857__$1;
(statearr_32862_33854[(2)] = null);

(statearr_32862_33854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (4))){
var inst_32796 = (state_32857[(13)]);
var inst_32796__$1 = (state_32857[(2)]);
var inst_32797 = (inst_32796__$1 == null);
var state_32857__$1 = (function (){var statearr_32863 = state_32857;
(statearr_32863[(13)] = inst_32796__$1);

return statearr_32863;
})();
if(cljs.core.truth_(inst_32797)){
var statearr_32864_33855 = state_32857__$1;
(statearr_32864_33855[(1)] = (5));

} else {
var statearr_32865_33856 = state_32857__$1;
(statearr_32865_33856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (15))){
var state_32857__$1 = state_32857;
var statearr_32869_33857 = state_32857__$1;
(statearr_32869_33857[(2)] = null);

(statearr_32869_33857[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (21))){
var state_32857__$1 = state_32857;
var statearr_32870_33858 = state_32857__$1;
(statearr_32870_33858[(2)] = null);

(statearr_32870_33858[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (13))){
var inst_32810 = (state_32857[(12)]);
var inst_32807 = (state_32857[(9)]);
var inst_32808 = (state_32857[(10)]);
var inst_32809 = (state_32857[(11)]);
var inst_32818 = (state_32857[(2)]);
var inst_32819 = (inst_32810 + (1));
var tmp32866 = inst_32807;
var tmp32867 = inst_32809;
var tmp32868 = inst_32808;
var inst_32807__$1 = tmp32866;
var inst_32808__$1 = tmp32868;
var inst_32809__$1 = tmp32867;
var inst_32810__$1 = inst_32819;
var state_32857__$1 = (function (){var statearr_32871 = state_32857;
(statearr_32871[(14)] = inst_32818);

(statearr_32871[(9)] = inst_32807__$1);

(statearr_32871[(10)] = inst_32808__$1);

(statearr_32871[(11)] = inst_32809__$1);

(statearr_32871[(12)] = inst_32810__$1);

return statearr_32871;
})();
var statearr_32872_33859 = state_32857__$1;
(statearr_32872_33859[(2)] = null);

(statearr_32872_33859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (22))){
var state_32857__$1 = state_32857;
var statearr_32873_33860 = state_32857__$1;
(statearr_32873_33860[(2)] = null);

(statearr_32873_33860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (6))){
var inst_32796 = (state_32857[(13)]);
var inst_32805 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32796) : f.call(null,inst_32796));
var inst_32806 = cljs.core.seq(inst_32805);
var inst_32807 = inst_32806;
var inst_32808 = null;
var inst_32809 = (0);
var inst_32810 = (0);
var state_32857__$1 = (function (){var statearr_32874 = state_32857;
(statearr_32874[(9)] = inst_32807);

(statearr_32874[(10)] = inst_32808);

(statearr_32874[(11)] = inst_32809);

(statearr_32874[(12)] = inst_32810);

return statearr_32874;
})();
var statearr_32875_33866 = state_32857__$1;
(statearr_32875_33866[(2)] = null);

(statearr_32875_33866[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (17))){
var inst_32822 = (state_32857[(7)]);
var inst_32827 = cljs.core.chunk_first(inst_32822);
var inst_32828 = cljs.core.chunk_rest(inst_32822);
var inst_32829 = cljs.core.count(inst_32827);
var inst_32807 = inst_32828;
var inst_32808 = inst_32827;
var inst_32809 = inst_32829;
var inst_32810 = (0);
var state_32857__$1 = (function (){var statearr_32876 = state_32857;
(statearr_32876[(9)] = inst_32807);

(statearr_32876[(10)] = inst_32808);

(statearr_32876[(11)] = inst_32809);

(statearr_32876[(12)] = inst_32810);

return statearr_32876;
})();
var statearr_32878_33867 = state_32857__$1;
(statearr_32878_33867[(2)] = null);

(statearr_32878_33867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (3))){
var inst_32855 = (state_32857[(2)]);
var state_32857__$1 = state_32857;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32857__$1,inst_32855);
} else {
if((state_val_32858 === (12))){
var inst_32843 = (state_32857[(2)]);
var state_32857__$1 = state_32857;
var statearr_32879_33868 = state_32857__$1;
(statearr_32879_33868[(2)] = inst_32843);

(statearr_32879_33868[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (2))){
var state_32857__$1 = state_32857;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32857__$1,(4),in$);
} else {
if((state_val_32858 === (23))){
var inst_32851 = (state_32857[(2)]);
var state_32857__$1 = state_32857;
var statearr_32880_33869 = state_32857__$1;
(statearr_32880_33869[(2)] = inst_32851);

(statearr_32880_33869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (19))){
var inst_32838 = (state_32857[(2)]);
var state_32857__$1 = state_32857;
var statearr_32881_33870 = state_32857__$1;
(statearr_32881_33870[(2)] = inst_32838);

(statearr_32881_33870[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (11))){
var inst_32807 = (state_32857[(9)]);
var inst_32822 = (state_32857[(7)]);
var inst_32822__$1 = cljs.core.seq(inst_32807);
var state_32857__$1 = (function (){var statearr_32882 = state_32857;
(statearr_32882[(7)] = inst_32822__$1);

return statearr_32882;
})();
if(inst_32822__$1){
var statearr_32883_33871 = state_32857__$1;
(statearr_32883_33871[(1)] = (14));

} else {
var statearr_32884_33872 = state_32857__$1;
(statearr_32884_33872[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (9))){
var inst_32845 = (state_32857[(2)]);
var inst_32846 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32857__$1 = (function (){var statearr_32885 = state_32857;
(statearr_32885[(15)] = inst_32845);

return statearr_32885;
})();
if(cljs.core.truth_(inst_32846)){
var statearr_32886_33873 = state_32857__$1;
(statearr_32886_33873[(1)] = (21));

} else {
var statearr_32887_33874 = state_32857__$1;
(statearr_32887_33874[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (5))){
var inst_32799 = cljs.core.async.close_BANG_(out);
var state_32857__$1 = state_32857;
var statearr_32890_33876 = state_32857__$1;
(statearr_32890_33876[(2)] = inst_32799);

(statearr_32890_33876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (14))){
var inst_32822 = (state_32857[(7)]);
var inst_32824 = cljs.core.chunked_seq_QMARK_(inst_32822);
var state_32857__$1 = state_32857;
if(inst_32824){
var statearr_32891_33877 = state_32857__$1;
(statearr_32891_33877[(1)] = (17));

} else {
var statearr_32892_33878 = state_32857__$1;
(statearr_32892_33878[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (16))){
var inst_32841 = (state_32857[(2)]);
var state_32857__$1 = state_32857;
var statearr_32893_33879 = state_32857__$1;
(statearr_32893_33879[(2)] = inst_32841);

(statearr_32893_33879[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (10))){
var inst_32808 = (state_32857[(10)]);
var inst_32810 = (state_32857[(12)]);
var inst_32816 = cljs.core._nth(inst_32808,inst_32810);
var state_32857__$1 = state_32857;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32857__$1,(13),out,inst_32816);
} else {
if((state_val_32858 === (18))){
var inst_32822 = (state_32857[(7)]);
var inst_32832 = cljs.core.first(inst_32822);
var state_32857__$1 = state_32857;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32857__$1,(20),out,inst_32832);
} else {
if((state_val_32858 === (8))){
var inst_32810 = (state_32857[(12)]);
var inst_32809 = (state_32857[(11)]);
var inst_32813 = (inst_32810 < inst_32809);
var inst_32814 = inst_32813;
var state_32857__$1 = state_32857;
if(cljs.core.truth_(inst_32814)){
var statearr_32897_33881 = state_32857__$1;
(statearr_32897_33881[(1)] = (10));

} else {
var statearr_32898_33882 = state_32857__$1;
(statearr_32898_33882[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29703__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29703__auto____0 = (function (){
var statearr_32900 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32900[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29703__auto__);

(statearr_32900[(1)] = (1));

return statearr_32900;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29703__auto____1 = (function (state_32857){
while(true){
var ret_value__29704__auto__ = (function (){try{while(true){
var result__29705__auto__ = switch__29702__auto__(state_32857);
if(cljs.core.keyword_identical_QMARK_(result__29705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29705__auto__;
}
break;
}
}catch (e32901){var ex__29706__auto__ = e32901;
var statearr_32903_33883 = state_32857;
(statearr_32903_33883[(2)] = ex__29706__auto__);


if(cljs.core.seq((state_32857[(4)]))){
var statearr_32904_33884 = state_32857;
(statearr_32904_33884[(1)] = cljs.core.first((state_32857[(4)])));

} else {
throw ex__29706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33887 = state_32857;
state_32857 = G__33887;
continue;
} else {
return ret_value__29704__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29703__auto__ = function(state_32857){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29703__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29703__auto____1.call(this,state_32857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29703__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29703__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29703__auto__;
})()
})();
var state__29893__auto__ = (function (){var statearr_32908 = f__29892__auto__();
(statearr_32908[(6)] = c__29891__auto__);

return statearr_32908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29893__auto__);
}));

return c__29891__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32910 = arguments.length;
switch (G__32910) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32913 = arguments.length;
switch (G__32913) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32916 = arguments.length;
switch (G__32916) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29891__auto___33893 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29892__auto__ = (function (){var switch__29702__auto__ = (function (state_32943){
var state_val_32944 = (state_32943[(1)]);
if((state_val_32944 === (7))){
var inst_32938 = (state_32943[(2)]);
var state_32943__$1 = state_32943;
var statearr_32945_33895 = state_32943__$1;
(statearr_32945_33895[(2)] = inst_32938);

(statearr_32945_33895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32944 === (1))){
var inst_32920 = null;
var state_32943__$1 = (function (){var statearr_32946 = state_32943;
(statearr_32946[(7)] = inst_32920);

return statearr_32946;
})();
var statearr_32947_33897 = state_32943__$1;
(statearr_32947_33897[(2)] = null);

(statearr_32947_33897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32944 === (4))){
var inst_32923 = (state_32943[(8)]);
var inst_32923__$1 = (state_32943[(2)]);
var inst_32924 = (inst_32923__$1 == null);
var inst_32925 = cljs.core.not(inst_32924);
var state_32943__$1 = (function (){var statearr_32948 = state_32943;
(statearr_32948[(8)] = inst_32923__$1);

return statearr_32948;
})();
if(inst_32925){
var statearr_32949_33899 = state_32943__$1;
(statearr_32949_33899[(1)] = (5));

} else {
var statearr_32950_33900 = state_32943__$1;
(statearr_32950_33900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32944 === (6))){
var state_32943__$1 = state_32943;
var statearr_32951_33902 = state_32943__$1;
(statearr_32951_33902[(2)] = null);

(statearr_32951_33902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32944 === (3))){
var inst_32940 = (state_32943[(2)]);
var inst_32941 = cljs.core.async.close_BANG_(out);
var state_32943__$1 = (function (){var statearr_32952 = state_32943;
(statearr_32952[(9)] = inst_32940);

return statearr_32952;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32943__$1,inst_32941);
} else {
if((state_val_32944 === (2))){
var state_32943__$1 = state_32943;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32943__$1,(4),ch);
} else {
if((state_val_32944 === (11))){
var inst_32923 = (state_32943[(8)]);
var inst_32932 = (state_32943[(2)]);
var inst_32920 = inst_32923;
var state_32943__$1 = (function (){var statearr_32953 = state_32943;
(statearr_32953[(10)] = inst_32932);

(statearr_32953[(7)] = inst_32920);

return statearr_32953;
})();
var statearr_32954_33904 = state_32943__$1;
(statearr_32954_33904[(2)] = null);

(statearr_32954_33904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32944 === (9))){
var inst_32923 = (state_32943[(8)]);
var state_32943__$1 = state_32943;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32943__$1,(11),out,inst_32923);
} else {
if((state_val_32944 === (5))){
var inst_32923 = (state_32943[(8)]);
var inst_32920 = (state_32943[(7)]);
var inst_32927 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32923,inst_32920);
var state_32943__$1 = state_32943;
if(inst_32927){
var statearr_32956_33906 = state_32943__$1;
(statearr_32956_33906[(1)] = (8));

} else {
var statearr_32957_33908 = state_32943__$1;
(statearr_32957_33908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32944 === (10))){
var inst_32935 = (state_32943[(2)]);
var state_32943__$1 = state_32943;
var statearr_32958_33909 = state_32943__$1;
(statearr_32958_33909[(2)] = inst_32935);

(statearr_32958_33909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32944 === (8))){
var inst_32920 = (state_32943[(7)]);
var tmp32955 = inst_32920;
var inst_32920__$1 = tmp32955;
var state_32943__$1 = (function (){var statearr_32959 = state_32943;
(statearr_32959[(7)] = inst_32920__$1);

return statearr_32959;
})();
var statearr_32960_33911 = state_32943__$1;
(statearr_32960_33911[(2)] = null);

(statearr_32960_33911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29703__auto__ = null;
var cljs$core$async$state_machine__29703__auto____0 = (function (){
var statearr_32961 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32961[(0)] = cljs$core$async$state_machine__29703__auto__);

(statearr_32961[(1)] = (1));

return statearr_32961;
});
var cljs$core$async$state_machine__29703__auto____1 = (function (state_32943){
while(true){
var ret_value__29704__auto__ = (function (){try{while(true){
var result__29705__auto__ = switch__29702__auto__(state_32943);
if(cljs.core.keyword_identical_QMARK_(result__29705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29705__auto__;
}
break;
}
}catch (e32962){var ex__29706__auto__ = e32962;
var statearr_32963_33915 = state_32943;
(statearr_32963_33915[(2)] = ex__29706__auto__);


if(cljs.core.seq((state_32943[(4)]))){
var statearr_32964_33916 = state_32943;
(statearr_32964_33916[(1)] = cljs.core.first((state_32943[(4)])));

} else {
throw ex__29706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33917 = state_32943;
state_32943 = G__33917;
continue;
} else {
return ret_value__29704__auto__;
}
break;
}
});
cljs$core$async$state_machine__29703__auto__ = function(state_32943){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29703__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29703__auto____1.call(this,state_32943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29703__auto____0;
cljs$core$async$state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29703__auto____1;
return cljs$core$async$state_machine__29703__auto__;
})()
})();
var state__29893__auto__ = (function (){var statearr_32967 = f__29892__auto__();
(statearr_32967[(6)] = c__29891__auto___33893);

return statearr_32967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29893__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32969 = arguments.length;
switch (G__32969) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29891__auto___33919 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29892__auto__ = (function (){var switch__29702__auto__ = (function (state_33009){
var state_val_33010 = (state_33009[(1)]);
if((state_val_33010 === (7))){
var inst_33005 = (state_33009[(2)]);
var state_33009__$1 = state_33009;
var statearr_33013_33922 = state_33009__$1;
(statearr_33013_33922[(2)] = inst_33005);

(statearr_33013_33922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (1))){
var inst_32972 = (new Array(n));
var inst_32973 = inst_32972;
var inst_32974 = (0);
var state_33009__$1 = (function (){var statearr_33014 = state_33009;
(statearr_33014[(7)] = inst_32973);

(statearr_33014[(8)] = inst_32974);

return statearr_33014;
})();
var statearr_33015_33923 = state_33009__$1;
(statearr_33015_33923[(2)] = null);

(statearr_33015_33923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (4))){
var inst_32977 = (state_33009[(9)]);
var inst_32977__$1 = (state_33009[(2)]);
var inst_32978 = (inst_32977__$1 == null);
var inst_32979 = cljs.core.not(inst_32978);
var state_33009__$1 = (function (){var statearr_33018 = state_33009;
(statearr_33018[(9)] = inst_32977__$1);

return statearr_33018;
})();
if(inst_32979){
var statearr_33019_33924 = state_33009__$1;
(statearr_33019_33924[(1)] = (5));

} else {
var statearr_33020_33925 = state_33009__$1;
(statearr_33020_33925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (15))){
var inst_32999 = (state_33009[(2)]);
var state_33009__$1 = state_33009;
var statearr_33021_33927 = state_33009__$1;
(statearr_33021_33927[(2)] = inst_32999);

(statearr_33021_33927[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (13))){
var state_33009__$1 = state_33009;
var statearr_33022_33928 = state_33009__$1;
(statearr_33022_33928[(2)] = null);

(statearr_33022_33928[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (6))){
var inst_32974 = (state_33009[(8)]);
var inst_32995 = (inst_32974 > (0));
var state_33009__$1 = state_33009;
if(cljs.core.truth_(inst_32995)){
var statearr_33024_33929 = state_33009__$1;
(statearr_33024_33929[(1)] = (12));

} else {
var statearr_33026_33930 = state_33009__$1;
(statearr_33026_33930[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (3))){
var inst_33007 = (state_33009[(2)]);
var state_33009__$1 = state_33009;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33009__$1,inst_33007);
} else {
if((state_val_33010 === (12))){
var inst_32973 = (state_33009[(7)]);
var inst_32997 = cljs.core.vec(inst_32973);
var state_33009__$1 = state_33009;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33009__$1,(15),out,inst_32997);
} else {
if((state_val_33010 === (2))){
var state_33009__$1 = state_33009;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33009__$1,(4),ch);
} else {
if((state_val_33010 === (11))){
var inst_32989 = (state_33009[(2)]);
var inst_32990 = (new Array(n));
var inst_32973 = inst_32990;
var inst_32974 = (0);
var state_33009__$1 = (function (){var statearr_33027 = state_33009;
(statearr_33027[(10)] = inst_32989);

(statearr_33027[(7)] = inst_32973);

(statearr_33027[(8)] = inst_32974);

return statearr_33027;
})();
var statearr_33028_33931 = state_33009__$1;
(statearr_33028_33931[(2)] = null);

(statearr_33028_33931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (9))){
var inst_32973 = (state_33009[(7)]);
var inst_32987 = cljs.core.vec(inst_32973);
var state_33009__$1 = state_33009;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33009__$1,(11),out,inst_32987);
} else {
if((state_val_33010 === (5))){
var inst_32973 = (state_33009[(7)]);
var inst_32974 = (state_33009[(8)]);
var inst_32977 = (state_33009[(9)]);
var inst_32982 = (state_33009[(11)]);
var inst_32981 = (inst_32973[inst_32974] = inst_32977);
var inst_32982__$1 = (inst_32974 + (1));
var inst_32983 = (inst_32982__$1 < n);
var state_33009__$1 = (function (){var statearr_33031 = state_33009;
(statearr_33031[(12)] = inst_32981);

(statearr_33031[(11)] = inst_32982__$1);

return statearr_33031;
})();
if(cljs.core.truth_(inst_32983)){
var statearr_33032_33935 = state_33009__$1;
(statearr_33032_33935[(1)] = (8));

} else {
var statearr_33033_33936 = state_33009__$1;
(statearr_33033_33936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (14))){
var inst_33002 = (state_33009[(2)]);
var inst_33003 = cljs.core.async.close_BANG_(out);
var state_33009__$1 = (function (){var statearr_33035 = state_33009;
(statearr_33035[(13)] = inst_33002);

return statearr_33035;
})();
var statearr_33036_33937 = state_33009__$1;
(statearr_33036_33937[(2)] = inst_33003);

(statearr_33036_33937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (10))){
var inst_32993 = (state_33009[(2)]);
var state_33009__$1 = state_33009;
var statearr_33037_33938 = state_33009__$1;
(statearr_33037_33938[(2)] = inst_32993);

(statearr_33037_33938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (8))){
var inst_32973 = (state_33009[(7)]);
var inst_32982 = (state_33009[(11)]);
var tmp33034 = inst_32973;
var inst_32973__$1 = tmp33034;
var inst_32974 = inst_32982;
var state_33009__$1 = (function (){var statearr_33038 = state_33009;
(statearr_33038[(7)] = inst_32973__$1);

(statearr_33038[(8)] = inst_32974);

return statearr_33038;
})();
var statearr_33039_33939 = state_33009__$1;
(statearr_33039_33939[(2)] = null);

(statearr_33039_33939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29703__auto__ = null;
var cljs$core$async$state_machine__29703__auto____0 = (function (){
var statearr_33040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33040[(0)] = cljs$core$async$state_machine__29703__auto__);

(statearr_33040[(1)] = (1));

return statearr_33040;
});
var cljs$core$async$state_machine__29703__auto____1 = (function (state_33009){
while(true){
var ret_value__29704__auto__ = (function (){try{while(true){
var result__29705__auto__ = switch__29702__auto__(state_33009);
if(cljs.core.keyword_identical_QMARK_(result__29705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29705__auto__;
}
break;
}
}catch (e33041){var ex__29706__auto__ = e33041;
var statearr_33042_33940 = state_33009;
(statearr_33042_33940[(2)] = ex__29706__auto__);


if(cljs.core.seq((state_33009[(4)]))){
var statearr_33043_33941 = state_33009;
(statearr_33043_33941[(1)] = cljs.core.first((state_33009[(4)])));

} else {
throw ex__29706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33942 = state_33009;
state_33009 = G__33942;
continue;
} else {
return ret_value__29704__auto__;
}
break;
}
});
cljs$core$async$state_machine__29703__auto__ = function(state_33009){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29703__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29703__auto____1.call(this,state_33009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29703__auto____0;
cljs$core$async$state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29703__auto____1;
return cljs$core$async$state_machine__29703__auto__;
})()
})();
var state__29893__auto__ = (function (){var statearr_33044 = f__29892__auto__();
(statearr_33044[(6)] = c__29891__auto___33919);

return statearr_33044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29893__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33046 = arguments.length;
switch (G__33046) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29891__auto___33944 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29892__auto__ = (function (){var switch__29702__auto__ = (function (state_33094){
var state_val_33096 = (state_33094[(1)]);
if((state_val_33096 === (7))){
var inst_33089 = (state_33094[(2)]);
var state_33094__$1 = state_33094;
var statearr_33100_33945 = state_33094__$1;
(statearr_33100_33945[(2)] = inst_33089);

(statearr_33100_33945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (1))){
var inst_33048 = [];
var inst_33049 = inst_33048;
var inst_33050 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33094__$1 = (function (){var statearr_33101 = state_33094;
(statearr_33101[(7)] = inst_33049);

(statearr_33101[(8)] = inst_33050);

return statearr_33101;
})();
var statearr_33102_33946 = state_33094__$1;
(statearr_33102_33946[(2)] = null);

(statearr_33102_33946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (4))){
var inst_33054 = (state_33094[(9)]);
var inst_33054__$1 = (state_33094[(2)]);
var inst_33055 = (inst_33054__$1 == null);
var inst_33056 = cljs.core.not(inst_33055);
var state_33094__$1 = (function (){var statearr_33105 = state_33094;
(statearr_33105[(9)] = inst_33054__$1);

return statearr_33105;
})();
if(inst_33056){
var statearr_33106_33947 = state_33094__$1;
(statearr_33106_33947[(1)] = (5));

} else {
var statearr_33107_33948 = state_33094__$1;
(statearr_33107_33948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (15))){
var inst_33049 = (state_33094[(7)]);
var inst_33081 = cljs.core.vec(inst_33049);
var state_33094__$1 = state_33094;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33094__$1,(18),out,inst_33081);
} else {
if((state_val_33096 === (13))){
var inst_33076 = (state_33094[(2)]);
var state_33094__$1 = state_33094;
var statearr_33108_33950 = state_33094__$1;
(statearr_33108_33950[(2)] = inst_33076);

(statearr_33108_33950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (6))){
var inst_33049 = (state_33094[(7)]);
var inst_33078 = inst_33049.length;
var inst_33079 = (inst_33078 > (0));
var state_33094__$1 = state_33094;
if(cljs.core.truth_(inst_33079)){
var statearr_33109_33951 = state_33094__$1;
(statearr_33109_33951[(1)] = (15));

} else {
var statearr_33110_33952 = state_33094__$1;
(statearr_33110_33952[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (17))){
var inst_33086 = (state_33094[(2)]);
var inst_33087 = cljs.core.async.close_BANG_(out);
var state_33094__$1 = (function (){var statearr_33111 = state_33094;
(statearr_33111[(10)] = inst_33086);

return statearr_33111;
})();
var statearr_33113_33953 = state_33094__$1;
(statearr_33113_33953[(2)] = inst_33087);

(statearr_33113_33953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (3))){
var inst_33091 = (state_33094[(2)]);
var state_33094__$1 = state_33094;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33094__$1,inst_33091);
} else {
if((state_val_33096 === (12))){
var inst_33049 = (state_33094[(7)]);
var inst_33069 = cljs.core.vec(inst_33049);
var state_33094__$1 = state_33094;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33094__$1,(14),out,inst_33069);
} else {
if((state_val_33096 === (2))){
var state_33094__$1 = state_33094;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33094__$1,(4),ch);
} else {
if((state_val_33096 === (11))){
var inst_33049 = (state_33094[(7)]);
var inst_33054 = (state_33094[(9)]);
var inst_33058 = (state_33094[(11)]);
var inst_33066 = inst_33049.push(inst_33054);
var tmp33116 = inst_33049;
var inst_33049__$1 = tmp33116;
var inst_33050 = inst_33058;
var state_33094__$1 = (function (){var statearr_33117 = state_33094;
(statearr_33117[(12)] = inst_33066);

(statearr_33117[(7)] = inst_33049__$1);

(statearr_33117[(8)] = inst_33050);

return statearr_33117;
})();
var statearr_33118_33954 = state_33094__$1;
(statearr_33118_33954[(2)] = null);

(statearr_33118_33954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (9))){
var inst_33050 = (state_33094[(8)]);
var inst_33062 = cljs.core.keyword_identical_QMARK_(inst_33050,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_33094__$1 = state_33094;
var statearr_33119_33955 = state_33094__$1;
(statearr_33119_33955[(2)] = inst_33062);

(statearr_33119_33955[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (5))){
var inst_33054 = (state_33094[(9)]);
var inst_33058 = (state_33094[(11)]);
var inst_33050 = (state_33094[(8)]);
var inst_33059 = (state_33094[(13)]);
var inst_33058__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33054) : f.call(null,inst_33054));
var inst_33059__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33058__$1,inst_33050);
var state_33094__$1 = (function (){var statearr_33120 = state_33094;
(statearr_33120[(11)] = inst_33058__$1);

(statearr_33120[(13)] = inst_33059__$1);

return statearr_33120;
})();
if(inst_33059__$1){
var statearr_33121_33956 = state_33094__$1;
(statearr_33121_33956[(1)] = (8));

} else {
var statearr_33122_33957 = state_33094__$1;
(statearr_33122_33957[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (14))){
var inst_33054 = (state_33094[(9)]);
var inst_33058 = (state_33094[(11)]);
var inst_33071 = (state_33094[(2)]);
var inst_33072 = [];
var inst_33073 = inst_33072.push(inst_33054);
var inst_33049 = inst_33072;
var inst_33050 = inst_33058;
var state_33094__$1 = (function (){var statearr_33123 = state_33094;
(statearr_33123[(14)] = inst_33071);

(statearr_33123[(15)] = inst_33073);

(statearr_33123[(7)] = inst_33049);

(statearr_33123[(8)] = inst_33050);

return statearr_33123;
})();
var statearr_33125_33958 = state_33094__$1;
(statearr_33125_33958[(2)] = null);

(statearr_33125_33958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (16))){
var state_33094__$1 = state_33094;
var statearr_33126_33959 = state_33094__$1;
(statearr_33126_33959[(2)] = null);

(statearr_33126_33959[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (10))){
var inst_33064 = (state_33094[(2)]);
var state_33094__$1 = state_33094;
if(cljs.core.truth_(inst_33064)){
var statearr_33130_33960 = state_33094__$1;
(statearr_33130_33960[(1)] = (11));

} else {
var statearr_33131_33961 = state_33094__$1;
(statearr_33131_33961[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (18))){
var inst_33083 = (state_33094[(2)]);
var state_33094__$1 = state_33094;
var statearr_33135_33962 = state_33094__$1;
(statearr_33135_33962[(2)] = inst_33083);

(statearr_33135_33962[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (8))){
var inst_33059 = (state_33094[(13)]);
var state_33094__$1 = state_33094;
var statearr_33141_33963 = state_33094__$1;
(statearr_33141_33963[(2)] = inst_33059);

(statearr_33141_33963[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29703__auto__ = null;
var cljs$core$async$state_machine__29703__auto____0 = (function (){
var statearr_33143 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33143[(0)] = cljs$core$async$state_machine__29703__auto__);

(statearr_33143[(1)] = (1));

return statearr_33143;
});
var cljs$core$async$state_machine__29703__auto____1 = (function (state_33094){
while(true){
var ret_value__29704__auto__ = (function (){try{while(true){
var result__29705__auto__ = switch__29702__auto__(state_33094);
if(cljs.core.keyword_identical_QMARK_(result__29705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29705__auto__;
}
break;
}
}catch (e33144){var ex__29706__auto__ = e33144;
var statearr_33146_33964 = state_33094;
(statearr_33146_33964[(2)] = ex__29706__auto__);


if(cljs.core.seq((state_33094[(4)]))){
var statearr_33147_33965 = state_33094;
(statearr_33147_33965[(1)] = cljs.core.first((state_33094[(4)])));

} else {
throw ex__29706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33966 = state_33094;
state_33094 = G__33966;
continue;
} else {
return ret_value__29704__auto__;
}
break;
}
});
cljs$core$async$state_machine__29703__auto__ = function(state_33094){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29703__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29703__auto____1.call(this,state_33094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29703__auto____0;
cljs$core$async$state_machine__29703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29703__auto____1;
return cljs$core$async$state_machine__29703__auto__;
})()
})();
var state__29893__auto__ = (function (){var statearr_33148 = f__29892__auto__();
(statearr_33148[(6)] = c__29891__auto___33944);

return statearr_33148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29893__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
