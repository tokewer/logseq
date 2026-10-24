goog.provide('cljs.core.async.impl.channels');

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels28192 = (function (val,meta28193){
this.val = val;
this.meta28193 = meta28193;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels28192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28194,meta28193__$1){
var self__ = this;
var _28194__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels28192(self__.val,meta28193__$1));
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels28192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28194){
var self__ = this;
var _28194__$1 = this;
return self__.meta28193;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels28192.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels28192.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta28193","meta28193",1769423325,null)], null);
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels28192.cljs$lang$type = true);

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels28192.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels28192");

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels28192.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels28192");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/t_cljs$core$async$impl$channels28192.
 */
cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels28192 = (function cljs$core$async$impl$channels$__GT_t_cljs$core$async$impl$channels28192(val,meta28193){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels28192(val,meta28193));
});


cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels28192(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

(cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(cljs.core.async.impl.channels.PutBox.cljs$lang$type = true);

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox");

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async.impl.channels/PutBox");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/PutBox.
 */
cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_(box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

var cljs$core$async$impl$channels$MMC$abort$dyn_28356 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (cljs.core.async.impl.channels.abort["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("MMC.abort",this$);
}
}
});
cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((((!((this$ == null)))) && ((!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
return cljs$core$async$impl$channels$MMC$abort$dyn_28356(this$);
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_28360 = self__.puts.pop();
if((putter_28360 == null)){
} else {
var put_handler_28362 = putter_28360.handler;
var val_28363 = putter_28360.val;
if(put_handler_28362.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var put_cb_28365 = put_handler_28362.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (put_cb_28365,put_handler_28362,val_28363,putter_28360,this$__$1){
return (function (){
return (put_cb_28365.cljs$core$IFn$_invoke$arity$1 ? put_cb_28365.cljs$core$IFn$_invoke$arity$1(true) : put_cb_28365.call(null,true));
});})(put_cb_28365,put_handler_28362,val_28363,putter_28360,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly(false));

return this$__$1.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if((!((val == null)))){
} else {
throw (new Error((""+"Assert failed: "+"Can't put nil on a channel"+"\n"+"(not (nil? val))")));
}

var closed__$1 = self__.closed;
if((!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))){
return cljs.core.async.impl.channels.box((!(closed__$1)));
} else {
if(closed__$1){
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

return cljs.core.async.impl.channels.box(false);
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = self__.buf;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null));
} else {
return and__5140__auto__;
}
})())){
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

var done_QMARK_ = cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val) : self__.add_BANG_.call(null,self__.buf,val)));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if((((self__.takes.length > (0))) && ((cljs.core.count(self__.buf) > (0))))){
var taker = self__.takes.pop();
if(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var ret = taker.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val__$1 = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var G__28368 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return (ret.cljs$core$IFn$_invoke$arity$1 ? ret.cljs$core$IFn$_invoke$arity$1(val__$1) : ret.call(null,val__$1));
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__28368;
continue;
} else {
var G__28369 = takers;
takers = G__28369;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

if(cljs.core.seq(take_cbs)){
var seq__28206_28370 = cljs.core.seq(take_cbs);
var chunk__28207_28371 = null;
var count__28208_28372 = (0);
var i__28209_28373 = (0);
while(true){
if((i__28209_28373 < count__28208_28372)){
var f_28374 = chunk__28207_28371.cljs$core$IIndexed$_nth$arity$2(null,i__28209_28373);
cljs.core.async.impl.dispatch.run(f_28374);


var G__28375 = seq__28206_28370;
var G__28376 = chunk__28207_28371;
var G__28377 = count__28208_28372;
var G__28378 = (i__28209_28373 + (1));
seq__28206_28370 = G__28375;
chunk__28207_28371 = G__28376;
count__28208_28372 = G__28377;
i__28209_28373 = G__28378;
continue;
} else {
var temp__5825__auto___28379 = cljs.core.seq(seq__28206_28370);
if(temp__5825__auto___28379){
var seq__28206_28381__$1 = temp__5825__auto___28379;
if(cljs.core.chunked_seq_QMARK_(seq__28206_28381__$1)){
var c__5673__auto___28382 = cljs.core.chunk_first(seq__28206_28381__$1);
var G__28384 = cljs.core.chunk_rest(seq__28206_28381__$1);
var G__28385 = c__5673__auto___28382;
var G__28387 = cljs.core.count(c__5673__auto___28382);
var G__28388 = (0);
seq__28206_28370 = G__28384;
chunk__28207_28371 = G__28385;
count__28208_28372 = G__28387;
i__28209_28373 = G__28388;
continue;
} else {
var f_28389 = cljs.core.first(seq__28206_28381__$1);
cljs.core.async.impl.dispatch.run(f_28389);


var G__28391 = cljs.core.next(seq__28206_28381__$1);
var G__28392 = null;
var G__28393 = (0);
var G__28394 = (0);
seq__28206_28370 = G__28391;
chunk__28207_28371 = G__28392;
count__28208_28372 = G__28393;
i__28209_28373 = G__28394;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box(true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = taker.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run((function (){
return (take_cb.cljs$core$IFn$_invoke$arity$1 ? take_cb.cljs$core$IFn$_invoke$arity$1(val) : take_cb.call(null,val));
}));

return cljs.core.async.impl.channels.box(true);
} else {
if((self__.dirty_puts > (64))){
(self__.dirty_puts = (0));

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
(self__.dirty_puts = (self__.dirty_puts + (1)));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.puts.length < (1024))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"No more than "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))+" pending puts are allowed on a single channel."+" Consider using a windowed buffer."))+"\n"+"(< (.-length puts) impl/MAX-QUEUE-SIZE)")));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if((!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))){
return null;
} else {
if((((!((self__.buf == null)))) && ((cljs.core.count(self__.buf) > (0))))){
var temp__5823__auto__ = handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
if(cljs.core.truth_(temp__5823__auto__)){
var take_cb = temp__5823__auto__;
var val = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var vec__28211 = ((((cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))) && ((self__.puts.length > (0)))))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__5140__auto__ = put_handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(and__5140__auto__){
return put_handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5140__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val__$1) : self__.add_BANG_.call(null,self__.buf,val__$1))):null);
if(((cljs.core.not(done_QMARK_)) && (((cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))) && ((self__.puts.length > (0))))))){
var G__28415 = cbs__$1;
cbs = G__28415;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28211,(0),null);
var cbs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28211,(1),null);
if(cljs.core.truth_(done_QMARK_)){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

var seq__28218_28419 = cljs.core.seq(cbs);
var chunk__28219_28420 = null;
var count__28220_28421 = (0);
var i__28221_28422 = (0);
while(true){
if((i__28221_28422 < count__28220_28421)){
var cb_28423 = chunk__28219_28420.cljs$core$IIndexed$_nth$arity$2(null,i__28221_28422);
cljs.core.async.impl.dispatch.run(((function (seq__28218_28419,chunk__28219_28420,count__28220_28421,i__28221_28422,cb_28423,val,vec__28211,done_QMARK_,cbs,take_cb,temp__5823__auto__,this$__$1){
return (function (){
return (cb_28423.cljs$core$IFn$_invoke$arity$1 ? cb_28423.cljs$core$IFn$_invoke$arity$1(true) : cb_28423.call(null,true));
});})(seq__28218_28419,chunk__28219_28420,count__28220_28421,i__28221_28422,cb_28423,val,vec__28211,done_QMARK_,cbs,take_cb,temp__5823__auto__,this$__$1))
);


var G__28424 = seq__28218_28419;
var G__28425 = chunk__28219_28420;
var G__28426 = count__28220_28421;
var G__28427 = (i__28221_28422 + (1));
seq__28218_28419 = G__28424;
chunk__28219_28420 = G__28425;
count__28220_28421 = G__28426;
i__28221_28422 = G__28427;
continue;
} else {
var temp__5825__auto___28428 = cljs.core.seq(seq__28218_28419);
if(temp__5825__auto___28428){
var seq__28218_28429__$1 = temp__5825__auto___28428;
if(cljs.core.chunked_seq_QMARK_(seq__28218_28429__$1)){
var c__5673__auto___28430 = cljs.core.chunk_first(seq__28218_28429__$1);
var G__28431 = cljs.core.chunk_rest(seq__28218_28429__$1);
var G__28432 = c__5673__auto___28430;
var G__28433 = cljs.core.count(c__5673__auto___28430);
var G__28434 = (0);
seq__28218_28419 = G__28431;
chunk__28219_28420 = G__28432;
count__28220_28421 = G__28433;
i__28221_28422 = G__28434;
continue;
} else {
var cb_28435 = cljs.core.first(seq__28218_28429__$1);
cljs.core.async.impl.dispatch.run(((function (seq__28218_28419,chunk__28219_28420,count__28220_28421,i__28221_28422,cb_28435,seq__28218_28429__$1,temp__5825__auto___28428,val,vec__28211,done_QMARK_,cbs,take_cb,temp__5823__auto__,this$__$1){
return (function (){
return (cb_28435.cljs$core$IFn$_invoke$arity$1 ? cb_28435.cljs$core$IFn$_invoke$arity$1(true) : cb_28435.call(null,true));
});})(seq__28218_28419,chunk__28219_28420,count__28220_28421,i__28221_28422,cb_28435,seq__28218_28429__$1,temp__5825__auto___28428,val,vec__28211,done_QMARK_,cbs,take_cb,temp__5823__auto__,this$__$1))
);


var G__28436 = cljs.core.next(seq__28218_28429__$1);
var G__28437 = null;
var G__28438 = (0);
var G__28439 = (0);
seq__28218_28419 = G__28436;
chunk__28219_28420 = G__28437;
count__28220_28421 = G__28438;
i__28221_28422 = G__28439;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_(putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit(putter.handler);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run((function (){
return (put_cb.cljs$core$IFn$_invoke$arity$1 ? put_cb.cljs$core$IFn$_invoke$arity$1(true) : put_cb.call(null,true));
}));

return cljs.core.async.impl.channels.box(putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

if(cljs.core.truth_((function (){var and__5140__auto__ = handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5140__auto__)){
return handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5140__auto__;
}
})())){
var has_val = (function (){var and__5140__auto__ = self__.buf;
if(cljs.core.truth_(and__5140__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__5140__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
(self__.dirty_takes = (0));

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
(self__.dirty_takes = (self__.dirty_takes + (1)));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.takes.length < (1024))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"No more than "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))+" pending takes are allowed on a single channel."))+"\n"+"(< (.-length takes) impl/MAX-QUEUE-SIZE)")));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
(self__.closed = true);

if(cljs.core.truth_((function (){var and__5140__auto__ = self__.buf;
if(cljs.core.truth_(and__5140__auto__)){
return (self__.puts.length === (0));
} else {
return and__5140__auto__;
}
})())){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

while(true){
var taker_28444 = self__.takes.pop();
if((taker_28444 == null)){
} else {
if(taker_28444.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var take_cb_28445 = taker_28444.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val_28446 = (cljs.core.truth_((function (){var and__5140__auto__ = self__.buf;
if(cljs.core.truth_(and__5140__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__5140__auto__;
}
})())?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
cljs.core.async.impl.dispatch.run(((function (take_cb_28445,val_28446,taker_28444,this$__$1){
return (function (){
return (take_cb_28445.cljs$core$IFn$_invoke$arity$1 ? take_cb_28445.cljs$core$IFn$_invoke$arity$1(val_28446) : take_cb_28445.call(null,val_28446));
});})(take_cb_28445,val_28446,taker_28444,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
self__.buf.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1(null);
} else {
}

return null;
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true);

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel");

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/ManyToManyChannel.
 */
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var fexpr__28308 = (function (){var or__5142__auto__ = exh;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})();
return (fexpr__28308.cljs$core$IFn$_invoke$arity$1 ? fexpr__28308.cljs$core$IFn$_invoke$arity$1(t) : fexpr__28308.call(null,t));
})();
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2(buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__28319 = arguments.length;
switch (G__28319) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2(buf,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(buf,xform,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer((32)),(0),cljs.core.async.impl.buffers.ring_buffer((32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?(xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(cljs.core.async.impl.protocols.add_BANG_) : xform.call(null,cljs.core.async.impl.protocols.add_BANG_)):cljs.core.async.impl.protocols.add_BANG_);
return (function() {
var G__28451 = null;
var G__28451__1 = (function (buf__$1){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_BANG_.cljs$core$IFn$_invoke$arity$1(buf__$1) : add_BANG_.call(null,buf__$1));
}catch (e28327){var t = e28327;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
var G__28451__2 = (function (buf__$1,val){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$2 ? add_BANG_.cljs$core$IFn$_invoke$arity$2(buf__$1,val) : add_BANG_.call(null,buf__$1,val));
}catch (e28330){var t = e28330;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
G__28451 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__28451__1.call(this,buf__$1);
case 2:
return G__28451__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28451.cljs$core$IFn$_invoke$arity$1 = G__28451__1;
G__28451.cljs$core$IFn$_invoke$arity$2 = G__28451__2;
return G__28451;
})()
})()));
}));

(cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.impl.channels.js.map
