goog.provide('io.factorhouse.rfx.queue');

/**
 * @interface
 */
io.factorhouse.rfx.queue.IEventQueue = function(){};

var io$factorhouse$rfx$queue$IEventQueue$push$dyn_25941 = (function (this$,event){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (io.factorhouse.rfx.queue.push[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5499__auto__.call(null,this$,event));
} else {
var m__5497__auto__ = (io.factorhouse.rfx.queue.push["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5497__auto__.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.push",this$);
}
}
});
io.factorhouse.rfx.queue.push = (function io$factorhouse$rfx$queue$push(this$,event){
if((((!((this$ == null)))) && ((!((this$.io$factorhouse$rfx$queue$IEventQueue$push$arity$2 == null)))))){
return this$.io$factorhouse$rfx$queue$IEventQueue$push$arity$2(this$,event);
} else {
return io$factorhouse$rfx$queue$IEventQueue$push$dyn_25941(this$,event);
}
});

var io$factorhouse$rfx$queue$IEventQueue$add_post_event_callback$dyn_25942 = (function (this$,id,callback_fn){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (io.factorhouse.rfx.queue.add_post_event_callback[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,callback_fn) : m__5499__auto__.call(null,this$,id,callback_fn));
} else {
var m__5497__auto__ = (io.factorhouse.rfx.queue.add_post_event_callback["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,callback_fn) : m__5497__auto__.call(null,this$,id,callback_fn));
} else {
throw cljs.core.missing_protocol("IEventQueue.add-post-event-callback",this$);
}
}
});
io.factorhouse.rfx.queue.add_post_event_callback = (function io$factorhouse$rfx$queue$add_post_event_callback(this$,id,callback_fn){
if((((!((this$ == null)))) && ((!((this$.io$factorhouse$rfx$queue$IEventQueue$add_post_event_callback$arity$3 == null)))))){
return this$.io$factorhouse$rfx$queue$IEventQueue$add_post_event_callback$arity$3(this$,id,callback_fn);
} else {
return io$factorhouse$rfx$queue$IEventQueue$add_post_event_callback$dyn_25942(this$,id,callback_fn);
}
});

var io$factorhouse$rfx$queue$IEventQueue$remove_post_event_callback$dyn_25944 = (function (this$,id){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (io.factorhouse.rfx.queue.remove_post_event_callback[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(this$,id) : m__5499__auto__.call(null,this$,id));
} else {
var m__5497__auto__ = (io.factorhouse.rfx.queue.remove_post_event_callback["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(this$,id) : m__5497__auto__.call(null,this$,id));
} else {
throw cljs.core.missing_protocol("IEventQueue.remove-post-event-callback",this$);
}
}
});
io.factorhouse.rfx.queue.remove_post_event_callback = (function io$factorhouse$rfx$queue$remove_post_event_callback(this$,id){
if((((!((this$ == null)))) && ((!((this$.io$factorhouse$rfx$queue$IEventQueue$remove_post_event_callback$arity$2 == null)))))){
return this$.io$factorhouse$rfx$queue$IEventQueue$remove_post_event_callback$arity$2(this$,id);
} else {
return io$factorhouse$rfx$queue$IEventQueue$remove_post_event_callback$dyn_25944(this$,id);
}
});

var io$factorhouse$rfx$queue$IEventQueue$purge$dyn_25946 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (io.factorhouse.rfx.queue.purge[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (io.factorhouse.rfx.queue.purge["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.purge",this$);
}
}
});
io.factorhouse.rfx.queue.purge = (function io$factorhouse$rfx$queue$purge(this$){
if((((!((this$ == null)))) && ((!((this$.io$factorhouse$rfx$queue$IEventQueue$purge$arity$1 == null)))))){
return this$.io$factorhouse$rfx$queue$IEventQueue$purge$arity$1(this$);
} else {
return io$factorhouse$rfx$queue$IEventQueue$purge$dyn_25946(this$);
}
});


/**
 * @interface
 */
io.factorhouse.rfx.queue.IFiniteStateMachine = function(){};

var io$factorhouse$rfx$queue$IFiniteStateMachine$_fsm_trigger$dyn_25948 = (function (this$,trigger,arg){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (io.factorhouse.rfx.queue._fsm_trigger[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(this$,trigger,arg) : m__5499__auto__.call(null,this$,trigger,arg));
} else {
var m__5497__auto__ = (io.factorhouse.rfx.queue._fsm_trigger["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(this$,trigger,arg) : m__5497__auto__.call(null,this$,trigger,arg));
} else {
throw cljs.core.missing_protocol("IFiniteStateMachine.-fsm-trigger",this$);
}
}
});
io.factorhouse.rfx.queue._fsm_trigger = (function io$factorhouse$rfx$queue$_fsm_trigger(this$,trigger,arg){
if((((!((this$ == null)))) && ((!((this$.io$factorhouse$rfx$queue$IFiniteStateMachine$_fsm_trigger$arity$3 == null)))))){
return this$.io$factorhouse$rfx$queue$IFiniteStateMachine$_fsm_trigger$arity$3(this$,trigger,arg);
} else {
return io$factorhouse$rfx$queue$IFiniteStateMachine$_fsm_trigger$dyn_25948(this$,trigger,arg);
}
});

var io$factorhouse$rfx$queue$IFiniteStateMachine$_add_event$dyn_25949 = (function (this$,event){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (io.factorhouse.rfx.queue._add_event[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5499__auto__.call(null,this$,event));
} else {
var m__5497__auto__ = (io.factorhouse.rfx.queue._add_event["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5497__auto__.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IFiniteStateMachine.-add-event",this$);
}
}
});
io.factorhouse.rfx.queue._add_event = (function io$factorhouse$rfx$queue$_add_event(this$,event){
if((((!((this$ == null)))) && ((!((this$.io$factorhouse$rfx$queue$IFiniteStateMachine$_add_event$arity$2 == null)))))){
return this$.io$factorhouse$rfx$queue$IFiniteStateMachine$_add_event$arity$2(this$,event);
} else {
return io$factorhouse$rfx$queue$IFiniteStateMachine$_add_event$dyn_25949(this$,event);
}
});

var io$factorhouse$rfx$queue$IFiniteStateMachine$_process_1st_event_in_queue$dyn_25950 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (io.factorhouse.rfx.queue._process_1st_event_in_queue[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (io.factorhouse.rfx.queue._process_1st_event_in_queue["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IFiniteStateMachine.-process-1st-event-in-queue",this$);
}
}
});
io.factorhouse.rfx.queue._process_1st_event_in_queue = (function io$factorhouse$rfx$queue$_process_1st_event_in_queue(this$){
if((((!((this$ == null)))) && ((!((this$.io$factorhouse$rfx$queue$IFiniteStateMachine$_process_1st_event_in_queue$arity$1 == null)))))){
return this$.io$factorhouse$rfx$queue$IFiniteStateMachine$_process_1st_event_in_queue$arity$1(this$);
} else {
return io$factorhouse$rfx$queue$IFiniteStateMachine$_process_1st_event_in_queue$dyn_25950(this$);
}
});

var io$factorhouse$rfx$queue$IFiniteStateMachine$_run_next_tick$dyn_25951 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (io.factorhouse.rfx.queue._run_next_tick[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (io.factorhouse.rfx.queue._run_next_tick["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IFiniteStateMachine.-run-next-tick",this$);
}
}
});
io.factorhouse.rfx.queue._run_next_tick = (function io$factorhouse$rfx$queue$_run_next_tick(this$){
if((((!((this$ == null)))) && ((!((this$.io$factorhouse$rfx$queue$IFiniteStateMachine$_run_next_tick$arity$1 == null)))))){
return this$.io$factorhouse$rfx$queue$IFiniteStateMachine$_run_next_tick$arity$1(this$);
} else {
return io$factorhouse$rfx$queue$IFiniteStateMachine$_run_next_tick$dyn_25951(this$);
}
});

var io$factorhouse$rfx$queue$IFiniteStateMachine$_run_queue$dyn_25952 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (io.factorhouse.rfx.queue._run_queue[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (io.factorhouse.rfx.queue._run_queue["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IFiniteStateMachine.-run-queue",this$);
}
}
});
io.factorhouse.rfx.queue._run_queue = (function io$factorhouse$rfx$queue$_run_queue(this$){
if((((!((this$ == null)))) && ((!((this$.io$factorhouse$rfx$queue$IFiniteStateMachine$_run_queue$arity$1 == null)))))){
return this$.io$factorhouse$rfx$queue$IFiniteStateMachine$_run_queue$arity$1(this$);
} else {
return io$factorhouse$rfx$queue$IFiniteStateMachine$_run_queue$dyn_25952(this$);
}
});

var io$factorhouse$rfx$queue$IFiniteStateMachine$_exception$dyn_25956 = (function (this$,ex){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (io.factorhouse.rfx.queue._exception[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(this$,ex) : m__5499__auto__.call(null,this$,ex));
} else {
var m__5497__auto__ = (io.factorhouse.rfx.queue._exception["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(this$,ex) : m__5497__auto__.call(null,this$,ex));
} else {
throw cljs.core.missing_protocol("IFiniteStateMachine.-exception",this$);
}
}
});
io.factorhouse.rfx.queue._exception = (function io$factorhouse$rfx$queue$_exception(this$,ex){
if((((!((this$ == null)))) && ((!((this$.io$factorhouse$rfx$queue$IFiniteStateMachine$_exception$arity$2 == null)))))){
return this$.io$factorhouse$rfx$queue$IFiniteStateMachine$_exception$arity$2(this$,ex);
} else {
return io$factorhouse$rfx$queue$IFiniteStateMachine$_exception$dyn_25956(this$,ex);
}
});

var io$factorhouse$rfx$queue$IFiniteStateMachine$_pause$dyn_25957 = (function (this$,later_fn){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (io.factorhouse.rfx.queue._pause[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(this$,later_fn) : m__5499__auto__.call(null,this$,later_fn));
} else {
var m__5497__auto__ = (io.factorhouse.rfx.queue._pause["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(this$,later_fn) : m__5497__auto__.call(null,this$,later_fn));
} else {
throw cljs.core.missing_protocol("IFiniteStateMachine.-pause",this$);
}
}
});
io.factorhouse.rfx.queue._pause = (function io$factorhouse$rfx$queue$_pause(this$,later_fn){
if((((!((this$ == null)))) && ((!((this$.io$factorhouse$rfx$queue$IFiniteStateMachine$_pause$arity$2 == null)))))){
return this$.io$factorhouse$rfx$queue$IFiniteStateMachine$_pause$arity$2(this$,later_fn);
} else {
return io$factorhouse$rfx$queue$IFiniteStateMachine$_pause$dyn_25957(this$,later_fn);
}
});

var io$factorhouse$rfx$queue$IFiniteStateMachine$_resume$dyn_25958 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (io.factorhouse.rfx.queue._resume[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (io.factorhouse.rfx.queue._resume["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IFiniteStateMachine.-resume",this$);
}
}
});
io.factorhouse.rfx.queue._resume = (function io$factorhouse$rfx$queue$_resume(this$){
if((((!((this$ == null)))) && ((!((this$.io$factorhouse$rfx$queue$IFiniteStateMachine$_resume$arity$1 == null)))))){
return this$.io$factorhouse$rfx$queue$IFiniteStateMachine$_resume$arity$1(this$);
} else {
return io$factorhouse$rfx$queue$IFiniteStateMachine$_resume$dyn_25958(this$);
}
});

var io$factorhouse$rfx$queue$IFiniteStateMachine$_call_post_event_callbacks$dyn_25959 = (function (this$,event){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (io.factorhouse.rfx.queue._call_post_event_callbacks[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5499__auto__.call(null,this$,event));
} else {
var m__5497__auto__ = (io.factorhouse.rfx.queue._call_post_event_callbacks["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5497__auto__.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IFiniteStateMachine.-call-post-event-callbacks",this$);
}
}
});
io.factorhouse.rfx.queue._call_post_event_callbacks = (function io$factorhouse$rfx$queue$_call_post_event_callbacks(this$,event){
if((((!((this$ == null)))) && ((!((this$.io$factorhouse$rfx$queue$IFiniteStateMachine$_call_post_event_callbacks$arity$2 == null)))))){
return this$.io$factorhouse$rfx$queue$IFiniteStateMachine$_call_post_event_callbacks$arity$2(this$,event);
} else {
return io$factorhouse$rfx$queue$IFiniteStateMachine$_call_post_event_callbacks$dyn_25959(this$,event);
}
});


//# sourceMappingURL=io.factorhouse.rfx.queue.js.map
