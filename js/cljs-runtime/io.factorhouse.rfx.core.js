goog.provide('io.factorhouse.rfx.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
if((typeof io !== 'undefined') && (typeof io.factorhouse !== 'undefined') && (typeof io.factorhouse.rfx !== 'undefined') && (typeof io.factorhouse.rfx.core !== 'undefined') && (typeof io.factorhouse.rfx.core.global_registry !== 'undefined')){
} else {
io.factorhouse.rfx.core.global_registry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
io.factorhouse.rfx.core.log_and_continue_error_handler = (function io$factorhouse$rfx$core$log_and_continue_error_handler(ctx){
return console.error("rfx:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ctx], 0)));
});
io.factorhouse.rfx.core.dispatch = (function io$factorhouse$rfx$core$dispatch(p__27681,event){
var map__27684 = p__27681;
var map__27684__$1 = cljs.core.__destructure_map(map__27684);
var queue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27684__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
return io.factorhouse.rfx.queue.push(queue,event);
});
io.factorhouse.rfx.core.reg_cofx = (function io$factorhouse$rfx$core$reg_cofx(cofx_id,cofx_fn){
return io.factorhouse.rfx.registry.reg_cofx(io.factorhouse.rfx.core.global_registry,cofx_id,cofx_fn);
});
io.factorhouse.rfx.core.__GT_interceptor = (function io$factorhouse$rfx$core$__GT_interceptor(var_args){
var args__5882__auto__ = [];
var len__5876__auto___27892 = arguments.length;
var i__5877__auto___27893 = (0);
while(true){
if((i__5877__auto___27893 < len__5876__auto___27892)){
args__5882__auto__.push((arguments[i__5877__auto___27893]));

var G__27894 = (i__5877__auto___27893 + (1));
i__5877__auto___27893 = G__27894;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return io.factorhouse.rfx.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(io.factorhouse.rfx.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic = (function (p__27700){
var map__27702 = p__27700;
var map__27702__$1 = cljs.core.__destructure_map(map__27702);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27702__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var comment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27702__$1,new cljs.core.Keyword(null,"comment","comment",532206069));
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27702__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27702__$1,new cljs.core.Keyword(null,"after","after",594996914));
var G__27703 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__5142__auto__ = id;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"unnamed","unnamed",-26044928);
}
})(),new cljs.core.Keyword(null,"before","before",-1633692388),before,new cljs.core.Keyword(null,"after","after",594996914),after], null);
if(cljs.core.truth_(comment)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27703,new cljs.core.Keyword(null,"comment","comment",532206069),comment);
} else {
return G__27703;
}
}));

(io.factorhouse.rfx.core.__GT_interceptor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(io.factorhouse.rfx.core.__GT_interceptor.cljs$lang$applyTo = (function (seq27689){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27689));
}));

io.factorhouse.rfx.core.inject_cofx = (function io$factorhouse$rfx$core$inject_cofx(var_args){
var G__27705 = arguments.length;
switch (G__27705) {
case 1:
return io.factorhouse.rfx.core.inject_cofx.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return io.factorhouse.rfx.core.inject_cofx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(io.factorhouse.rfx.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 = (function (id){
return io.factorhouse.rfx.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"before","before",-1633692388),(function io$factorhouse$rfx$core$coeffects_before(context){
var temp__5823__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword("io.factorhouse.rfx.core","registry","io.factorhouse.rfx.core/registry",-590756228),new cljs.core.Keyword(null,"cofx","cofx",2013202907),id], null));
if(cljs.core.truth_(temp__5823__auto__)){
var handler = temp__5823__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"coeffects","coeffects",497912985),handler);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword("io.factorhouse.rfx.core","errors","io.factorhouse.rfx.core/errors",704697300),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"missing-cofx","missing-cofx",-1667355974),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"message","message",-406056002),(""+"No such cofx named "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0)))+". Returning previous coeffects.")], null));
}
})], 0));
}));

(io.factorhouse.rfx.core.inject_cofx.cljs$core$IFn$_invoke$arity$2 = (function (id,value){
return io.factorhouse.rfx.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"before","before",-1633692388),(function io$factorhouse$rfx$core$coeffects_before(context){
var temp__5823__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword("io.factorhouse.rfx.core","registry","io.factorhouse.rfx.core/registry",-590756228),new cljs.core.Keyword(null,"cofx","cofx",2013202907),id], null));
if(cljs.core.truth_(temp__5823__auto__)){
var handler = temp__5823__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"coeffects","coeffects",497912985),handler,value);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword("io.factorhouse.rfx.core","errors","io.factorhouse.rfx.core/errors",704697300),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"missing-cofx","missing-cofx",-1667355974),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"message","message",-406056002),(""+"No such cofx named "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0)))+". Returning previous coeffects.")], null));
}
})], 0));
}));

(io.factorhouse.rfx.core.inject_cofx.cljs$lang$maxFixedArity = 2);

io.factorhouse.rfx.core.handler = (function io$factorhouse$rfx$core$handler(registry,store,error_handler){
var ctx = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"registry","registry",1021159018),registry,new cljs.core.Keyword(null,"store","store",1512230022),store,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),error_handler], null);
return (function io$factorhouse$rfx$core$handler_$_handler_STAR_(event_queue,p__27710){
var vec__27711 = p__27710;
var seq__27712 = cljs.core.seq(vec__27711);
var first__27713 = cljs.core.first(seq__27712);
var seq__27712__$1 = cljs.core.next(seq__27712);
var event_id = first__27713;
var _args = seq__27712__$1;
var event = vec__27711;
var curr_registry = cljs.core.deref(registry);
var errors = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var temp__5823__auto___27904 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(curr_registry,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),event_id], null));
if(cljs.core.truth_(temp__5823__auto___27904)){
var map__27716_27905 = temp__5823__auto___27904;
var map__27716_27906__$1 = cljs.core.__destructure_map(map__27716_27905);
var event_f_27907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27716_27906__$1,new cljs.core.Keyword(null,"event-f","event-f",114235466));
var interceptors_27908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27716_27906__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var curr_state_27909 = io.factorhouse.rfx.store.snapshot(store);
var ctx_before_27910 = (function (){var ctx__$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"db","db",993250759),curr_state_27909,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword("io.factorhouse.rfx.core","registry","io.factorhouse.rfx.core/registry",-590756228),curr_registry,new cljs.core.Keyword("io.factorhouse.rfx.core","store","io.factorhouse.rfx.core/store",-1176572808),store], null),new cljs.core.Keyword(null,"queue","queue",1455835879),interceptors_27908,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.PersistentVector.EMPTY], null);
while(true){
var temp__5823__auto____$1 = cljs.core.first(new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(ctx__$1));
if(cljs.core.truth_(temp__5823__auto____$1)){
var map__27720 = temp__5823__auto____$1;
var map__27720__$1 = cljs.core.__destructure_map(map__27720);
var interceptor = map__27720__$1;
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27720__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var G__27912 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(before)?(before.cljs$core$IFn$_invoke$arity$1 ? before.cljs$core$IFn$_invoke$arity$1(ctx__$1) : before.call(null,ctx__$1)):ctx__$1),new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.rest),new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,interceptor);
ctx__$1 = G__27912;
continue;
} else {
return ctx__$1;
}
break;
}
})();
var effects_27911 = (function (){var G__27721 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(ctx_before_27910);
var G__27722 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(ctx_before_27910));
return (event_f_27907.cljs$core$IFn$_invoke$arity$2 ? event_f_27907.cljs$core$IFn$_invoke$arity$2(G__27721,G__27722) : event_f_27907.call(null,G__27721,G__27722));
})();
var temp__5825__auto___27913 = new cljs.core.Keyword("io.factorhouse.rfx.core","errors","io.factorhouse.rfx.core/errors",704697300).cljs$core$IFn$_invoke$arity$1(ctx_before_27910);
if(cljs.core.truth_(temp__5825__auto___27913)){
var ctx_errors_27914 = temp__5825__auto___27913;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(errors,cljs.core.into,ctx_errors_27914);
} else {
}

var temp__5825__auto___27915 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects_27911);
if(cljs.core.truth_(temp__5825__auto___27915)){
var next_db_27916 = temp__5825__auto___27915;
io.factorhouse.rfx.store.next_state_BANG_(store,next_db_27916);
} else {
}

var temp__5825__auto___27917 = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$1(effects_27911);
if(cljs.core.truth_(temp__5825__auto___27917)){
var dispatch_event_27918 = temp__5825__auto___27917;
io.factorhouse.rfx.queue.push(event_queue,dispatch_event_27918);
} else {
}

var seq__27723_27919 = cljs.core.seq(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236).cljs$core$IFn$_invoke$arity$1(effects_27911));
var chunk__27724_27920 = null;
var count__27725_27921 = (0);
var i__27726_27922 = (0);
while(true){
if((i__27726_27922 < count__27725_27921)){
var dispatch_event_27927 = chunk__27724_27920.cljs$core$IIndexed$_nth$arity$2(null,i__27726_27922);
io.factorhouse.rfx.queue.push(event_queue,dispatch_event_27927);


var G__27928 = seq__27723_27919;
var G__27929 = chunk__27724_27920;
var G__27930 = count__27725_27921;
var G__27931 = (i__27726_27922 + (1));
seq__27723_27919 = G__27928;
chunk__27724_27920 = G__27929;
count__27725_27921 = G__27930;
i__27726_27922 = G__27931;
continue;
} else {
var temp__5825__auto___27932 = cljs.core.seq(seq__27723_27919);
if(temp__5825__auto___27932){
var seq__27723_27934__$1 = temp__5825__auto___27932;
if(cljs.core.chunked_seq_QMARK_(seq__27723_27934__$1)){
var c__5673__auto___27935 = cljs.core.chunk_first(seq__27723_27934__$1);
var G__27936 = cljs.core.chunk_rest(seq__27723_27934__$1);
var G__27937 = c__5673__auto___27935;
var G__27938 = cljs.core.count(c__5673__auto___27935);
var G__27939 = (0);
seq__27723_27919 = G__27936;
chunk__27724_27920 = G__27937;
count__27725_27921 = G__27938;
i__27726_27922 = G__27939;
continue;
} else {
var dispatch_event_27940 = cljs.core.first(seq__27723_27934__$1);
io.factorhouse.rfx.queue.push(event_queue,dispatch_event_27940);


var G__27941 = cljs.core.next(seq__27723_27934__$1);
var G__27942 = null;
var G__27943 = (0);
var G__27944 = (0);
seq__27723_27919 = G__27941;
chunk__27724_27920 = G__27942;
count__27725_27921 = G__27943;
i__27726_27922 = G__27944;
continue;
}
} else {
}
}
break;
}

var seq__27732_27945 = cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(effects_27911,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236)], 0)));
var chunk__27734_27946 = null;
var count__27735_27947 = (0);
var i__27736_27948 = (0);
while(true){
if((i__27736_27948 < count__27735_27947)){
var vec__27749_27949 = chunk__27734_27946.cljs$core$IIndexed$_nth$arity$2(null,i__27736_27948);
var fx_id_27950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27749_27949,(0),null);
var fx_val_27951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27749_27949,(1),null);
var ctx_27952__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ctx,new cljs.core.Keyword(null,"queue","queue",1455835879),event_queue,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),((function (seq__27732_27945,chunk__27734_27946,count__27735_27947,i__27736_27948,vec__27749_27949,fx_id_27950,fx_val_27951,curr_state_27909,ctx_before_27910,effects_27911,map__27716_27905,map__27716_27906__$1,event_f_27907,interceptors_27908,temp__5823__auto___27904,curr_registry,errors,vec__27711,seq__27712,first__27713,seq__27712__$1,event_id,_args,event,ctx){
return (function (event__$1){
return io.factorhouse.rfx.queue.push(event_queue,event__$1);
});})(seq__27732_27945,chunk__27734_27946,count__27735_27947,i__27736_27948,vec__27749_27949,fx_id_27950,fx_val_27951,curr_state_27909,ctx_before_27910,effects_27911,map__27716_27905,map__27716_27906__$1,event_f_27907,interceptors_27908,temp__5823__auto___27904,curr_registry,errors,vec__27711,seq__27712,first__27713,seq__27712__$1,event_id,_args,event,ctx))
,new cljs.core.Keyword(null,"dispatch-sync","dispatch-sync",1664398243),((function (seq__27732_27945,chunk__27734_27946,count__27735_27947,i__27736_27948,vec__27749_27949,fx_id_27950,fx_val_27951,curr_state_27909,ctx_before_27910,effects_27911,map__27716_27905,map__27716_27906__$1,event_f_27907,interceptors_27908,temp__5823__auto___27904,curr_registry,errors,vec__27711,seq__27712,first__27713,seq__27712__$1,event_id,_args,event,ctx){
return (function (event__$1){
return io$factorhouse$rfx$core$handler_$_handler_STAR_(event_queue,event__$1);
});})(seq__27732_27945,chunk__27734_27946,count__27735_27947,i__27736_27948,vec__27749_27949,fx_id_27950,fx_val_27951,curr_state_27909,ctx_before_27910,effects_27911,map__27716_27905,map__27716_27906__$1,event_f_27907,interceptors_27908,temp__5823__auto___27904,curr_registry,errors,vec__27711,seq__27712,first__27713,seq__27712__$1,event_id,_args,event,ctx))
], 0));
var temp__5823__auto___27953__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(curr_registry,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),fx_id_27950], null));
if(cljs.core.truth_(temp__5823__auto___27953__$1)){
var fx_fn_27955 = temp__5823__auto___27953__$1;
(fx_fn_27955.cljs$core$IFn$_invoke$arity$2 ? fx_fn_27955.cljs$core$IFn$_invoke$arity$2(ctx_27952__$1,fx_val_27951) : fx_fn_27955.call(null,ctx_27952__$1,fx_val_27951));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(errors,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"missing-fx","missing-fx",-4953815),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"message","message",-406056002),(""+"Cannot find fx named "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fx_id_27950], 0))))], null));
}


var G__27956 = seq__27732_27945;
var G__27957 = chunk__27734_27946;
var G__27958 = count__27735_27947;
var G__27959 = (i__27736_27948 + (1));
seq__27732_27945 = G__27956;
chunk__27734_27946 = G__27957;
count__27735_27947 = G__27958;
i__27736_27948 = G__27959;
continue;
} else {
var temp__5825__auto___27960 = cljs.core.seq(seq__27732_27945);
if(temp__5825__auto___27960){
var seq__27732_27961__$1 = temp__5825__auto___27960;
if(cljs.core.chunked_seq_QMARK_(seq__27732_27961__$1)){
var c__5673__auto___27962 = cljs.core.chunk_first(seq__27732_27961__$1);
var G__27963 = cljs.core.chunk_rest(seq__27732_27961__$1);
var G__27964 = c__5673__auto___27962;
var G__27965 = cljs.core.count(c__5673__auto___27962);
var G__27966 = (0);
seq__27732_27945 = G__27963;
chunk__27734_27946 = G__27964;
count__27735_27947 = G__27965;
i__27736_27948 = G__27966;
continue;
} else {
var vec__27753_27967 = cljs.core.first(seq__27732_27961__$1);
var fx_id_27968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27753_27967,(0),null);
var fx_val_27969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27753_27967,(1),null);
var ctx_27970__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ctx,new cljs.core.Keyword(null,"queue","queue",1455835879),event_queue,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),((function (seq__27732_27945,chunk__27734_27946,count__27735_27947,i__27736_27948,vec__27753_27967,fx_id_27968,fx_val_27969,seq__27732_27961__$1,temp__5825__auto___27960,curr_state_27909,ctx_before_27910,effects_27911,map__27716_27905,map__27716_27906__$1,event_f_27907,interceptors_27908,temp__5823__auto___27904,curr_registry,errors,vec__27711,seq__27712,first__27713,seq__27712__$1,event_id,_args,event,ctx){
return (function (event__$1){
return io.factorhouse.rfx.queue.push(event_queue,event__$1);
});})(seq__27732_27945,chunk__27734_27946,count__27735_27947,i__27736_27948,vec__27753_27967,fx_id_27968,fx_val_27969,seq__27732_27961__$1,temp__5825__auto___27960,curr_state_27909,ctx_before_27910,effects_27911,map__27716_27905,map__27716_27906__$1,event_f_27907,interceptors_27908,temp__5823__auto___27904,curr_registry,errors,vec__27711,seq__27712,first__27713,seq__27712__$1,event_id,_args,event,ctx))
,new cljs.core.Keyword(null,"dispatch-sync","dispatch-sync",1664398243),((function (seq__27732_27945,chunk__27734_27946,count__27735_27947,i__27736_27948,vec__27753_27967,fx_id_27968,fx_val_27969,seq__27732_27961__$1,temp__5825__auto___27960,curr_state_27909,ctx_before_27910,effects_27911,map__27716_27905,map__27716_27906__$1,event_f_27907,interceptors_27908,temp__5823__auto___27904,curr_registry,errors,vec__27711,seq__27712,first__27713,seq__27712__$1,event_id,_args,event,ctx){
return (function (event__$1){
return io$factorhouse$rfx$core$handler_$_handler_STAR_(event_queue,event__$1);
});})(seq__27732_27945,chunk__27734_27946,count__27735_27947,i__27736_27948,vec__27753_27967,fx_id_27968,fx_val_27969,seq__27732_27961__$1,temp__5825__auto___27960,curr_state_27909,ctx_before_27910,effects_27911,map__27716_27905,map__27716_27906__$1,event_f_27907,interceptors_27908,temp__5823__auto___27904,curr_registry,errors,vec__27711,seq__27712,first__27713,seq__27712__$1,event_id,_args,event,ctx))
], 0));
var temp__5823__auto___27975__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(curr_registry,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),fx_id_27968], null));
if(cljs.core.truth_(temp__5823__auto___27975__$1)){
var fx_fn_27976 = temp__5823__auto___27975__$1;
(fx_fn_27976.cljs$core$IFn$_invoke$arity$2 ? fx_fn_27976.cljs$core$IFn$_invoke$arity$2(ctx_27970__$1,fx_val_27969) : fx_fn_27976.call(null,ctx_27970__$1,fx_val_27969));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(errors,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"missing-fx","missing-fx",-4953815),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"message","message",-406056002),(""+"Cannot find fx named "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fx_id_27968], 0))))], null));
}


var G__27977 = cljs.core.next(seq__27732_27961__$1);
var G__27978 = null;
var G__27979 = (0);
var G__27980 = (0);
seq__27732_27945 = G__27977;
chunk__27734_27946 = G__27978;
count__27735_27947 = G__27979;
i__27736_27948 = G__27980;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq(interceptors_27908)){
var ctx_after_27981 = (function (){var ctx__$1 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(ctx_before_27910),new cljs.core.Keyword(null,"effects","effects",-282369292),effects_27911,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.reverse(interceptors_27908),new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.PersistentVector.EMPTY], null);
while(true){
var temp__5823__auto____$1 = cljs.core.first(new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(ctx__$1));
if(cljs.core.truth_(temp__5823__auto____$1)){
var map__27808 = temp__5823__auto____$1;
var map__27808__$1 = cljs.core.__destructure_map(map__27808);
var interceptor = map__27808__$1;
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27808__$1,new cljs.core.Keyword(null,"after","after",594996914));
var G__27982 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(after)?(after.cljs$core$IFn$_invoke$arity$1 ? after.cljs$core$IFn$_invoke$arity$1(ctx__$1) : after.call(null,ctx__$1)):ctx__$1),new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.rest),new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,interceptor);
ctx__$1 = G__27982;
continue;
} else {
return ctx__$1;
}
break;
}
})();
var temp__5825__auto___27983 = new cljs.core.Keyword("io.factorhouse.rfx.core","errors","io.factorhouse.rfx.core/errors",704697300).cljs$core$IFn$_invoke$arity$1(ctx_after_27981);
if(cljs.core.truth_(temp__5825__auto___27983)){
var ctx_errors_27984 = temp__5825__auto___27983;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(errors,cljs.core.into,ctx_errors_27984);
} else {
}
} else {
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(errors,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"missing-event","missing-event",378498366),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"message","message",-406056002),(""+"Cannot find event named "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event_id], 0)))+".")], null));
}

var temp__5825__auto__ = cljs.core.seq(cljs.core.deref(errors));
if(temp__5825__auto__){
var errors__$1 = temp__5825__auto__;
var G__27824 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"errors","errors",-908790718),errors__$1,new cljs.core.Keyword(null,"origin","origin",1037372088),event], null);
return (error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(G__27824) : error_handler.call(null,G__27824));
} else {
return null;
}
});
});
io.factorhouse.rfx.core.dispatch_sync = (function io$factorhouse$rfx$core$dispatch_sync(p__27826,event){
var map__27827 = p__27826;
var map__27827__$1 = cljs.core.__destructure_map(map__27827);
var store = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27827__$1,new cljs.core.Keyword(null,"store","store",1512230022));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27827__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var queue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27827__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var registry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27827__$1,new cljs.core.Keyword(null,"registry","registry",1021159018));
var handler_f = io.factorhouse.rfx.core.handler(registry,store,error_handler);
return handler_f(queue,event);
});
io.factorhouse.rfx.core.reg_sub = (function io$factorhouse$rfx$core$reg_sub(var_args){
var G__27831 = arguments.length;
switch (G__27831) {
case 1:
return io.factorhouse.rfx.core.reg_sub.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return io.factorhouse.rfx.core.reg_sub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return io.factorhouse.rfx.core.reg_sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(io.factorhouse.rfx.core.reg_sub.cljs$core$IFn$_invoke$arity$1 = (function (sub_id){
return io.factorhouse.rfx.core.reg_sub.cljs$core$IFn$_invoke$arity$3(sub_id,cljs.core.PersistentVector.EMPTY,(function (db,_){
return db;
}));
}));

(io.factorhouse.rfx.core.reg_sub.cljs$core$IFn$_invoke$arity$2 = (function (sub_id,sub_f){
return io.factorhouse.rfx.core.reg_sub.cljs$core$IFn$_invoke$arity$3(sub_id,cljs.core.PersistentVector.EMPTY,sub_f);
}));

(io.factorhouse.rfx.core.reg_sub.cljs$core$IFn$_invoke$arity$3 = (function (sub_id,signals,sub_f){
return io.factorhouse.rfx.registry.reg_sub(io.factorhouse.rfx.core.global_registry,sub_id,signals,sub_f);
}));

(io.factorhouse.rfx.core.reg_sub.cljs$lang$maxFixedArity = 3);

io.factorhouse.rfx.core.cofx_subscribe = (function io$factorhouse$rfx$core$cofx_subscribe(coeffects,p__27834){
var vec__27835 = p__27834;
var seq__27836 = cljs.core.seq(vec__27835);
var first__27837 = cljs.core.first(seq__27836);
var seq__27836__$1 = cljs.core.next(seq__27836);
var sub_id = first__27837;
var _sub_args = seq__27836__$1;
var sub = vec__27835;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,sub_id,io.factorhouse.rfx.store.subscribe(new cljs.core.Keyword("io.factorhouse.rfx.core","store","io.factorhouse.rfx.core/store",-1176572808).cljs$core$IFn$_invoke$arity$1(coeffects),sub));
});
io.factorhouse.rfx.core.reg_cofx(new cljs.core.Keyword("io.factorhouse.rfx.core","subscribe","io.factorhouse.rfx.core/subscribe",2030331946),io.factorhouse.rfx.core.cofx_subscribe);
io.factorhouse.rfx.core.reg_fx = (function io$factorhouse$rfx$core$reg_fx(fx_id,f){
return io.factorhouse.rfx.registry.reg_fx(io.factorhouse.rfx.core.global_registry,fx_id,f);
});
io.factorhouse.rfx.core.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (p__27840,seq_of_effects){
var map__27841 = p__27840;
var map__27841__$1 = cljs.core.__destructure_map(map__27841);
var context = map__27841__$1;
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27841__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var registry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27841__$1,new cljs.core.Keyword(null,"registry","registry",1021159018));
var curr_registry = cljs.core.deref(registry);
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"\":fx\" effect expects a seq, but was given "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(seq_of_effects))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),seq_of_effects], null));
} else {
var seq__27842 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__27843 = null;
var count__27844 = (0);
var i__27845 = (0);
while(true){
if((i__27845 < count__27844)){
var vec__27855 = chunk__27843.cljs$core$IIndexed$_nth$arity$2(null,i__27845);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27855,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27855,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),effect_key)){
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(effect_value) : dispatch.call(null,effect_value));
} else {
var temp__5823__auto___27986 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(curr_registry,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),effect_key], null));
if(cljs.core.truth_(temp__5823__auto___27986)){
var effect_fn_27987 = temp__5823__auto___27986;
(effect_fn_27987.cljs$core$IFn$_invoke$arity$2 ? effect_fn_27987.cljs$core$IFn$_invoke$arity$2(context,effect_value) : effect_fn_27987.call(null,context,effect_value));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(effect_key)+"in \":fx\" has no associated handler."),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),seq_of_effects], null));
}
}


var G__27988 = seq__27842;
var G__27989 = chunk__27843;
var G__27990 = count__27844;
var G__27991 = (i__27845 + (1));
seq__27842 = G__27988;
chunk__27843 = G__27989;
count__27844 = G__27990;
i__27845 = G__27991;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__27842);
if(temp__5825__auto__){
var seq__27842__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27842__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__27842__$1);
var G__27992 = cljs.core.chunk_rest(seq__27842__$1);
var G__27993 = c__5673__auto__;
var G__27994 = cljs.core.count(c__5673__auto__);
var G__27995 = (0);
seq__27842 = G__27992;
chunk__27843 = G__27993;
count__27844 = G__27994;
i__27845 = G__27995;
continue;
} else {
var vec__27861 = cljs.core.first(seq__27842__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27861,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27861,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),effect_key)){
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(effect_value) : dispatch.call(null,effect_value));
} else {
var temp__5823__auto___27997 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(curr_registry,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),effect_key], null));
if(cljs.core.truth_(temp__5823__auto___27997)){
var effect_fn_27998 = temp__5823__auto___27997;
(effect_fn_27998.cljs$core$IFn$_invoke$arity$2 ? effect_fn_27998.cljs$core$IFn$_invoke$arity$2(context,effect_value) : effect_fn_27998.call(null,context,effect_value));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(effect_key)+"in \":fx\" has no associated handler."),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),seq_of_effects], null));
}
}


var G__27999 = cljs.core.next(seq__27842__$1);
var G__28000 = null;
var G__28001 = (0);
var G__28002 = (0);
seq__27842 = G__27999;
chunk__27843 = G__28000;
count__27844 = G__28001;
i__27845 = G__28002;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
io.factorhouse.rfx.core.reg_event_fx = (function io$factorhouse$rfx$core$reg_event_fx(var_args){
var G__27870 = arguments.length;
switch (G__27870) {
case 2:
return io.factorhouse.rfx.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return io.factorhouse.rfx.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(io.factorhouse.rfx.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2 = (function (event_fx_id,f){
return io.factorhouse.rfx.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(event_fx_id,null,f);
}));

(io.factorhouse.rfx.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = (function (event_fx_id,coeffects,f){
return io.factorhouse.rfx.registry.reg_event_fx(io.factorhouse.rfx.core.global_registry,event_fx_id,coeffects,f);
}));

(io.factorhouse.rfx.core.reg_event_fx.cljs$lang$maxFixedArity = 3);

io.factorhouse.rfx.core.reg_event_db = (function io$factorhouse$rfx$core$reg_event_db(var_args){
var G__27874 = arguments.length;
switch (G__27874) {
case 2:
return io.factorhouse.rfx.core.reg_event_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return io.factorhouse.rfx.core.reg_event_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(io.factorhouse.rfx.core.reg_event_db.cljs$core$IFn$_invoke$arity$2 = (function (event_id,event_f){
return io.factorhouse.rfx.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(event_id,cljs.core.PersistentVector.EMPTY,event_f);
}));

(io.factorhouse.rfx.core.reg_event_db.cljs$core$IFn$_invoke$arity$3 = (function (event_id,interceptors,event_f){
return io.factorhouse.rfx.registry.reg_event_db(io.factorhouse.rfx.core.global_registry,event_id,interceptors,event_f);
}));

(io.factorhouse.rfx.core.reg_event_db.cljs$lang$maxFixedArity = 3);

io.factorhouse.rfx.core.clear_subscription_cache_BANG_ = (function io$factorhouse$rfx$core$clear_subscription_cache_BANG_(p__27876){
var map__27877 = p__27876;
var map__27877__$1 = cljs.core.__destructure_map(map__27877);
var store = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27877__$1,new cljs.core.Keyword(null,"store","store",1512230022));
return io.factorhouse.rfx.store.clear_subscription_cache_BANG_(store);
});
io.factorhouse.rfx.core.snapshot_sub = (function io$factorhouse$rfx$core$snapshot_sub(p__27881,sub){
var map__27882 = p__27881;
var map__27882__$1 = cljs.core.__destructure_map(map__27882);
var store = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27882__$1,new cljs.core.Keyword(null,"store","store",1512230022));
return io.factorhouse.rfx.store.subscribe(store,sub);
});
io.factorhouse.rfx.core.snapshot = (function io$factorhouse$rfx$core$snapshot(p__27883){
var map__27884 = p__27883;
var map__27884__$1 = cljs.core.__destructure_map(map__27884);
var store = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27884__$1,new cljs.core.Keyword(null,"store","store",1512230022));
return io.factorhouse.rfx.store.snapshot(store);
});
io.factorhouse.rfx.core.init = (function io$factorhouse$rfx$core$init(p__27886){
var map__27888 = p__27886;
var map__27888__$1 = cljs.core.__destructure_map(map__27888);
var initial_value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27888__$1,new cljs.core.Keyword(null,"initial-value","initial-value",470619381),cljs.core.PersistentArrayMap.EMPTY);
var queue = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27888__$1,new cljs.core.Keyword(null,"queue","queue",1455835879),io.factorhouse.rfx.queues.stable.event_queue);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27888__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),io.factorhouse.rfx.core.log_and_continue_error_handler);
var store = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27888__$1,new cljs.core.Keyword(null,"store","store",1512230022),io.factorhouse.rfx.stores.atom.store);
var registry = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27888__$1,new cljs.core.Keyword(null,"registry","registry",1021159018),io.factorhouse.rfx.core.global_registry);
var store_STAR_ = (store.cljs$core$IFn$_invoke$arity$2 ? store.cljs$core$IFn$_invoke$arity$2(registry,initial_value) : store.call(null,registry,initial_value));
var handler_STAR_ = io.factorhouse.rfx.core.handler(registry,store_STAR_,error_handler);
var queue_STAR_ = (queue.cljs$core$IFn$_invoke$arity$2 ? queue.cljs$core$IFn$_invoke$arity$2(handler_STAR_,error_handler) : queue.call(null,handler_STAR_,error_handler));
var use_sub_STAR_ = (function io$factorhouse$rfx$core$init_$_use_sub_STAR_(sub){
return io.factorhouse.rfx.store.use_sub(store_STAR_,sub);
});
var dispatch_sync_STAR_ = (function io$factorhouse$rfx$core$init_$_dispatch_sync_STAR_(event){
return handler_STAR_(queue_STAR_,event);
});
var ctx = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"store","store",1512230022),store_STAR_,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),error_handler,new cljs.core.Keyword(null,"handler","handler",-195596612),handler_STAR_,new cljs.core.Keyword(null,"queue","queue",1455835879),queue_STAR_,new cljs.core.Keyword(null,"use-sub","use-sub",-1268625387),use_sub_STAR_,new cljs.core.Keyword(null,"registry","registry",1021159018),registry,new cljs.core.Keyword(null,"dispatch-sync","dispatch-sync",1664398243),dispatch_sync_STAR_], null);
var dispatch_STAR_ = (function io$factorhouse$rfx$core$init_$_dispatch_STAR_(event){
return io.factorhouse.rfx.core.dispatch(ctx,event);
});
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),dispatch_STAR_);
});
if((typeof io !== 'undefined') && (typeof io.factorhouse !== 'undefined') && (typeof io.factorhouse.rfx !== 'undefined') && (typeof io.factorhouse.rfx.core !== 'undefined') && (typeof io.factorhouse.rfx.core.global_context !== 'undefined')){
} else {
io.factorhouse.rfx.core.global_context = io.factorhouse.rfx.core.init(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof io !== 'undefined') && (typeof io.factorhouse !== 'undefined') && (typeof io.factorhouse.rfx !== 'undefined') && (typeof io.factorhouse.rfx.core !== 'undefined') && (typeof io.factorhouse.rfx.core.RfxContext !== 'undefined')){
} else {
io.factorhouse.rfx.core.RfxContext = module$node_modules$react$index.createContext(io.factorhouse.rfx.core.global_context);
}
if((typeof io !== 'undefined') && (typeof io.factorhouse !== 'undefined') && (typeof io.factorhouse.rfx !== 'undefined') && (typeof io.factorhouse.rfx.core !== 'undefined') && (typeof io.factorhouse.rfx.core.RfxContextProvider !== 'undefined')){
} else {
io.factorhouse.rfx.core.RfxContextProvider = io.factorhouse.rfx.core.RfxContext.Provider;
}
io.factorhouse.rfx.core.use_rfx_context = (function io$factorhouse$rfx$core$use_rfx_context(){
return module$node_modules$react$index.useContext(io.factorhouse.rfx.core.RfxContext);
});
io.factorhouse.rfx.core.use_sub = (function io$factorhouse$rfx$core$use_sub(sub){
var ctx = io.factorhouse.rfx.core.use_rfx_context();
var use_sub_f = new cljs.core.Keyword(null,"use-sub","use-sub",-1268625387).cljs$core$IFn$_invoke$arity$1(ctx);
return (use_sub_f.cljs$core$IFn$_invoke$arity$1 ? use_sub_f.cljs$core$IFn$_invoke$arity$1(sub) : use_sub_f.call(null,sub));
});
io.factorhouse.rfx.core.use_dispatch = (function io$factorhouse$rfx$core$use_dispatch(){
var ctx = io.factorhouse.rfx.core.use_rfx_context();
return new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$1(ctx);
});
io.factorhouse.rfx.core.use_dispatch_sync = (function io$factorhouse$rfx$core$use_dispatch_sync(){
var ctx = io.factorhouse.rfx.core.use_rfx_context();
return new cljs.core.Keyword(null,"dispatch-sync","dispatch-sync",1664398243).cljs$core$IFn$_invoke$arity$1(ctx);
});

//# sourceMappingURL=io.factorhouse.rfx.core.js.map
