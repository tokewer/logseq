goog.provide('io.factorhouse.rfx.queues.stable');
io.factorhouse.rfx.queues.stable.empty_queue = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY);
io.factorhouse.rfx.queues.stable.next_tick = goog.async.nextTick;
io.factorhouse.rfx.queues.stable.later_fns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816),io.factorhouse.rfx.queues.stable.next_tick,new cljs.core.Keyword(null,"yield","yield",177875009),io.factorhouse.rfx.queues.stable.next_tick], null);

/**
* @constructor
 * @implements {io.factorhouse.rfx.queue.IFiniteStateMachine}
 * @implements {io.factorhouse.rfx.queue.IEventQueue}
*/
io.factorhouse.rfx.queues.stable.EventQueue = (function (fsm_state,queue,post_event_callback_fns,handler,error_handler){
this.fsm_state = fsm_state;
this.queue = queue;
this.post_event_callback_fns = post_event_callback_fns;
this.handler = handler;
this.error_handler = error_handler;
});
(io.factorhouse.rfx.queues.stable.EventQueue.prototype.io$factorhouse$rfx$queue$IEventQueue$ = cljs.core.PROTOCOL_SENTINEL);

(io.factorhouse.rfx.queues.stable.EventQueue.prototype.io$factorhouse$rfx$queue$IEventQueue$push$arity$2 = (function (this$,event){
var self__ = this;
var this$__$1 = this;
return this$__$1.io$factorhouse$rfx$queue$IFiniteStateMachine$_fsm_trigger$arity$3(null,new cljs.core.Keyword(null,"add-event","add-event",938429088),event);
}));

(io.factorhouse.rfx.queues.stable.EventQueue.prototype.io$factorhouse$rfx$queue$IEventQueue$add_post_event_callback$arity$3 = (function (_,id,callback_fn){
var self__ = this;
var ___$1 = this;
if(cljs.core.contains_QMARK_(self__.post_event_callback_fns,id)){
var G__26002_26022 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"message","message",-406056002),(""+"rfx: overwriting existing post event call back with id:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))], null)], null)], null);
(self__.error_handler.cljs$core$IFn$_invoke$arity$1 ? self__.error_handler.cljs$core$IFn$_invoke$arity$1(G__26002_26022) : self__.error_handler.call(null,G__26002_26022));
} else {
}

return (self__.post_event_callback_fns = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.post_event_callback_fns,id,callback_fn));
}));

(io.factorhouse.rfx.queues.stable.EventQueue.prototype.io$factorhouse$rfx$queue$IEventQueue$remove_post_event_callback$arity$2 = (function (_,id){
var self__ = this;
var ___$1 = this;
if((!(cljs.core.contains_QMARK_(self__.post_event_callback_fns,id)))){
var G__26004 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"message","message",-406056002),(""+"rfx: could not remove post event call back with id:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))], null)], null)], null);
return (self__.error_handler.cljs$core$IFn$_invoke$arity$1 ? self__.error_handler.cljs$core$IFn$_invoke$arity$1(G__26004) : self__.error_handler.call(null,G__26004));
} else {
return (self__.post_event_callback_fns = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.post_event_callback_fns,id));
}
}));

(io.factorhouse.rfx.queues.stable.EventQueue.prototype.io$factorhouse$rfx$queue$IEventQueue$purge$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.queue = io.factorhouse.rfx.queues.stable.empty_queue);
}));

(io.factorhouse.rfx.queues.stable.EventQueue.prototype.io$factorhouse$rfx$queue$IFiniteStateMachine$ = cljs.core.PROTOCOL_SENTINEL);

(io.factorhouse.rfx.queues.stable.EventQueue.prototype.io$factorhouse$rfx$queue$IFiniteStateMachine$_run_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var n = cljs.core.count(self__.queue);
while(true){
if((n === (0))){
return this$__$1.io$factorhouse$rfx$queue$IFiniteStateMachine$_fsm_trigger$arity$3(null,new cljs.core.Keyword(null,"finish-run","finish-run",753148477),null);
} else {
var temp__5823__auto__ = cljs.core.some(io.factorhouse.rfx.queues.stable.later_fns,cljs.core.keys(cljs.core.meta(cljs.core.peek(self__.queue))));
if(cljs.core.truth_(temp__5823__auto__)){
var later_fn = temp__5823__auto__;
return this$__$1.io$factorhouse$rfx$queue$IFiniteStateMachine$_fsm_trigger$arity$3(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),later_fn);
} else {
this$__$1.io$factorhouse$rfx$queue$IFiniteStateMachine$_process_1st_event_in_queue$arity$1(null);

var G__26023 = (n - (1));
n = G__26023;
continue;
}
}
break;
}
}));

(io.factorhouse.rfx.queues.stable.EventQueue.prototype.io$factorhouse$rfx$queue$IFiniteStateMachine$_add_event$arity$2 = (function (_,event){
var self__ = this;
var ___$1 = this;
return (self__.queue = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.queue,event));
}));

(io.factorhouse.rfx.queues.stable.EventQueue.prototype.io$factorhouse$rfx$queue$IFiniteStateMachine$_resume$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.io$factorhouse$rfx$queue$IFiniteStateMachine$_process_1st_event_in_queue$arity$1(null);

return this$__$1.io$factorhouse$rfx$queue$IFiniteStateMachine$_run_queue$arity$1(null);
}));

(io.factorhouse.rfx.queues.stable.EventQueue.prototype.io$factorhouse$rfx$queue$IFiniteStateMachine$_run_next_tick$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__26009 = (function (){
return this$__$1.io$factorhouse$rfx$queue$IFiniteStateMachine$_fsm_trigger$arity$3(null,new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027),null);
});
return (io.factorhouse.rfx.queues.stable.next_tick.cljs$core$IFn$_invoke$arity$1 ? io.factorhouse.rfx.queues.stable.next_tick.cljs$core$IFn$_invoke$arity$1(G__26009) : io.factorhouse.rfx.queues.stable.next_tick.call(null,G__26009));
}));

(io.factorhouse.rfx.queues.stable.EventQueue.prototype.io$factorhouse$rfx$queue$IFiniteStateMachine$_fsm_trigger$arity$3 = (function (this$,trigger,arg){
var self__ = this;
var this$__$1 = this;
var vec__26010 = (function (){var G__26013 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__26013)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),(function (){
this$__$1.io$factorhouse$rfx$queue$IFiniteStateMachine$_add_event$arity$2(null,arg);

return this$__$1.io$factorhouse$rfx$queue$IFiniteStateMachine$_run_next_tick$arity$1(null);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),G__26013)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),(function (){
return this$__$1.io$factorhouse$rfx$queue$IFiniteStateMachine$_exception$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"finish-run","finish-run",753148477)], null),G__26013)){
if(cljs.core.empty_QMARK_(self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),(function (){
return this$__$1.io$factorhouse$rfx$queue$IFiniteStateMachine$_run_next_tick$arity$1(null);
})], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"pause","pause",-2095325672)], null),G__26013)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),(function (){
return this$__$1.io$factorhouse$rfx$queue$IFiniteStateMachine$_pause$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"resume","resume",-118572261)], null),G__26013)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),(function (){
return this$__$1.io$factorhouse$rfx$queue$IFiniteStateMachine$_resume$arity$1(null);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027)], null),G__26013)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),(function (){
return this$__$1.io$factorhouse$rfx$queue$IFiniteStateMachine$_run_queue$arity$1(null);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__26013)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),(function (){
return this$__$1.io$factorhouse$rfx$queue$IFiniteStateMachine$_add_event$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__26013)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),(function (){
return this$__$1.io$factorhouse$rfx$queue$IFiniteStateMachine$_add_event$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__26013)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),(function (){
return this$__$1.io$factorhouse$rfx$queue$IFiniteStateMachine$_add_event$arity$2(null,arg);
})], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"re-frame: router state transition not found. "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fsm_state)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(trigger)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fsm-state","fsm-state",1656310533),self__.fsm_state,new cljs.core.Keyword(null,"trigger","trigger",103466139),trigger], null));

}
}
}
}
}
}
}
}
}
})();
var new_fsm_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26010,(0),null);
var action_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26010,(1),null);
(self__.fsm_state = new_fsm_state);

if(cljs.core.truth_(action_fn)){
return (action_fn.cljs$core$IFn$_invoke$arity$0 ? action_fn.cljs$core$IFn$_invoke$arity$0() : action_fn.call(null));
} else {
return null;
}
}));

(io.factorhouse.rfx.queues.stable.EventQueue.prototype.io$factorhouse$rfx$queue$IFiniteStateMachine$_pause$arity$2 = (function (this$,later_fn){
var self__ = this;
var this$__$1 = this;
var G__26014 = (function (){
return this$__$1.io$factorhouse$rfx$queue$IFiniteStateMachine$_fsm_trigger$arity$3(null,new cljs.core.Keyword(null,"resume","resume",-118572261),null);
});
return (later_fn.cljs$core$IFn$_invoke$arity$1 ? later_fn.cljs$core$IFn$_invoke$arity$1(G__26014) : later_fn.call(null,G__26014));
}));

(io.factorhouse.rfx.queues.stable.EventQueue.prototype.io$factorhouse$rfx$queue$IFiniteStateMachine$_process_1st_event_in_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var event_v = cljs.core.peek(self__.queue);
try{(self__.handler.cljs$core$IFn$_invoke$arity$2 ? self__.handler.cljs$core$IFn$_invoke$arity$2(this$__$1,event_v) : self__.handler.call(null,this$__$1,event_v));

(self__.queue = cljs.core.pop(self__.queue));

return this$__$1.io$factorhouse$rfx$queue$IFiniteStateMachine$_call_post_event_callbacks$arity$2(null,event_v);
}catch (e26015){var ex = e26015;
return this$__$1.io$factorhouse$rfx$queue$IFiniteStateMachine$_fsm_trigger$arity$3(null,new cljs.core.Keyword(null,"exception","exception",-335277064),ex);
}}));

(io.factorhouse.rfx.queues.stable.EventQueue.prototype.io$factorhouse$rfx$queue$IFiniteStateMachine$_call_post_event_callbacks$arity$2 = (function (_,event_v){
var self__ = this;
var ___$1 = this;
var seq__26016 = cljs.core.seq(cljs.core.vals(self__.post_event_callback_fns));
var chunk__26017 = null;
var count__26018 = (0);
var i__26019 = (0);
while(true){
if((i__26019 < count__26018)){
var callback = chunk__26017.cljs$core$IIndexed$_nth$arity$2(null,i__26019);
(callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(event_v,self__.queue) : callback.call(null,event_v,self__.queue));


var G__26024 = seq__26016;
var G__26025 = chunk__26017;
var G__26026 = count__26018;
var G__26027 = (i__26019 + (1));
seq__26016 = G__26024;
chunk__26017 = G__26025;
count__26018 = G__26026;
i__26019 = G__26027;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26016);
if(temp__5825__auto__){
var seq__26016__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26016__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__26016__$1);
var G__26028 = cljs.core.chunk_rest(seq__26016__$1);
var G__26029 = c__5673__auto__;
var G__26030 = cljs.core.count(c__5673__auto__);
var G__26031 = (0);
seq__26016 = G__26028;
chunk__26017 = G__26029;
count__26018 = G__26030;
i__26019 = G__26031;
continue;
} else {
var callback = cljs.core.first(seq__26016__$1);
(callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(event_v,self__.queue) : callback.call(null,event_v,self__.queue));


var G__26032 = cljs.core.next(seq__26016__$1);
var G__26033 = null;
var G__26034 = (0);
var G__26035 = (0);
seq__26016 = G__26032;
chunk__26017 = G__26033;
count__26018 = G__26034;
i__26019 = G__26035;
continue;
}
} else {
return null;
}
}
break;
}
}));

(io.factorhouse.rfx.queues.stable.EventQueue.prototype.io$factorhouse$rfx$queue$IFiniteStateMachine$_exception$arity$2 = (function (this$,ex){
var self__ = this;
var this$__$1 = this;
this$__$1.io$factorhouse$rfx$queue$IEventQueue$purge$arity$1(null);

throw ex;
}));

(io.factorhouse.rfx.queues.stable.EventQueue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fsm-state","fsm-state",-998125236,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"queue","queue",-1198599890,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"post-event-callback-fns","post-event-callback-fns",-297038335,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"error-handler","error-handler",1155585751,null)], null);
}));

(io.factorhouse.rfx.queues.stable.EventQueue.cljs$lang$type = true);

(io.factorhouse.rfx.queues.stable.EventQueue.cljs$lang$ctorStr = "io.factorhouse.rfx.queues.stable/EventQueue");

(io.factorhouse.rfx.queues.stable.EventQueue.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"io.factorhouse.rfx.queues.stable/EventQueue");
}));

/**
 * Positional factory function for io.factorhouse.rfx.queues.stable/EventQueue.
 */
io.factorhouse.rfx.queues.stable.__GT_EventQueue = (function io$factorhouse$rfx$queues$stable$__GT_EventQueue(fsm_state,queue,post_event_callback_fns,handler,error_handler){
return (new io.factorhouse.rfx.queues.stable.EventQueue(fsm_state,queue,post_event_callback_fns,handler,error_handler));
});

io.factorhouse.rfx.queues.stable.event_queue = (function io$factorhouse$rfx$queues$stable$event_queue(handler,error_handler){
return (new io.factorhouse.rfx.queues.stable.EventQueue(new cljs.core.Keyword(null,"idle","idle",-2007156861),io.factorhouse.rfx.queues.stable.empty_queue,cljs.core.PersistentArrayMap.EMPTY,handler,error_handler));
});

//# sourceMappingURL=io.factorhouse.rfx.queues.stable.js.map
