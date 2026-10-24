goog.provide('io.factorhouse.rfx.stores.atom');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
io.factorhouse.rfx.stores.atom.reaction = (function io$factorhouse$rfx$stores$atom$reaction(prev_cache,next_db,curr_registry,cache,cache_diff,store,sub){
var temp__5823__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(curr_registry,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),cljs.core.first(sub)], null));
if(cljs.core.truth_(temp__5823__auto__)){
var map__27594 = temp__5823__auto__;
var map__27594__$1 = cljs.core.__destructure_map(map__27594);
var sub_f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27594__$1,new cljs.core.Keyword(null,"sub-f","sub-f",-1746056474));
var signals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27594__$1,new cljs.core.Keyword(null,"signals","signals",1732137021));
if(cljs.core.contains_QMARK_(cljs.core.deref(cache_diff),sub)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"updated?","updated?",-114940638),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cache_diff),sub),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cache),sub)], null);
} else {
if(cljs.core.contains_QMARK_(prev_cache,sub)){
if(cljs.core.seq(signals)){
var prev_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(prev_cache,sub);
var realized_signals = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27591_SHARP_){
return (io.factorhouse.rfx.stores.atom.reaction.cljs$core$IFn$_invoke$arity$7 ? io.factorhouse.rfx.stores.atom.reaction.cljs$core$IFn$_invoke$arity$7(prev_cache,next_db,curr_registry,cache,cache_diff,store,p1__27591_SHARP_) : io.factorhouse.rfx.stores.atom.reaction.call(null,prev_cache,next_db,curr_registry,cache,cache_diff,store,p1__27591_SHARP_));
}),signals);
if(cljs.core.truth_(cljs.core.some(new cljs.core.Keyword(null,"updated?","updated?",-114940638),realized_signals))){
var realized_signals__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),realized_signals);
var realized_signals__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(realized_signals__$1)))?cljs.core.first(realized_signals__$1):realized_signals__$1);
var result = (function (){var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cache),sub);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (sub_f.cljs$core$IFn$_invoke$arity$2 ? sub_f.cljs$core$IFn$_invoke$arity$2(realized_signals__$2,sub) : sub_f.call(null,realized_signals__$2,sub));
}
})();
var diff_QMARK_ = (function (){var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cache_diff),sub);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(result,prev_val);
}
})();
cljs.core._vreset_BANG_(cache_diff,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(cache_diff),sub,diff_QMARK_));

cljs.core._vreset_BANG_(cache,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(cache),sub,result));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"updated?","updated?",-114940638),diff_QMARK_,new cljs.core.Keyword(null,"value","value",305978217),result], null);
} else {
cljs.core._vreset_BANG_(cache_diff,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(cache_diff),sub,false));

cljs.core._vreset_BANG_(cache,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(cache),sub,prev_val));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"updated?","updated?",-114940638),false,new cljs.core.Keyword(null,"value","value",305978217),prev_val], null);
}
} else {
var result = (function (){var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cache),sub);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (sub_f.cljs$core$IFn$_invoke$arity$2 ? sub_f.cljs$core$IFn$_invoke$arity$2(next_db,sub) : sub_f.call(null,next_db,sub));
}
})();
var prev_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(prev_cache,sub);
var diff_QMARK_ = (function (){var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cache_diff),sub);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(result,prev_val);
}
})();
cljs.core._vreset_BANG_(cache_diff,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(cache_diff),sub,diff_QMARK_));

cljs.core._vreset_BANG_(cache,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(cache),sub,result));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"updated?","updated?",-114940638),diff_QMARK_,new cljs.core.Keyword(null,"value","value",305978217),result], null);
}
} else {
cljs.core._vreset_BANG_(cache_diff,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(cache_diff),sub,true));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"updated?","updated?",-114940638),true,new cljs.core.Keyword(null,"value","value",305978217),io.factorhouse.rfx.store.subscribe(store,sub)], null);

}
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Subscription does not exist in registry.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub","sub",-2093760025),sub], null));
}
});
io.factorhouse.rfx.stores.atom.subscribe_STAR_ = (function io$factorhouse$rfx$stores$atom$subscribe_STAR_(curr_cache,curr_db,curr_registry,cache,store,sub){
var temp__5823__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(curr_registry,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),cljs.core.first(sub)], null));
if(cljs.core.truth_(temp__5823__auto__)){
var map__27611 = temp__5823__auto__;
var map__27611__$1 = cljs.core.__destructure_map(map__27611);
var sub_f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27611__$1,new cljs.core.Keyword(null,"sub-f","sub-f",-1746056474));
var signals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27611__$1,new cljs.core.Keyword(null,"signals","signals",1732137021));
var temp__5823__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(curr_cache,sub);
if(cljs.core.truth_(temp__5823__auto____$1)){
var cache__$1 = temp__5823__auto____$1;
return cache__$1;
} else {
var realized_signals = ((cljs.core.seq(signals))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(signals)))?(function (){var G__27617 = curr_cache;
var G__27618 = curr_db;
var G__27619 = curr_registry;
var G__27620 = cache;
var G__27621 = store;
var G__27622 = cljs.core.first(signals);
return (io.factorhouse.rfx.stores.atom.subscribe_STAR_.cljs$core$IFn$_invoke$arity$6 ? io.factorhouse.rfx.stores.atom.subscribe_STAR_.cljs$core$IFn$_invoke$arity$6(G__27617,G__27618,G__27619,G__27620,G__27621,G__27622) : io.factorhouse.rfx.stores.atom.subscribe_STAR_.call(null,G__27617,G__27618,G__27619,G__27620,G__27621,G__27622));
})():cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__27607_SHARP_){
return (io.factorhouse.rfx.stores.atom.subscribe_STAR_.cljs$core$IFn$_invoke$arity$6 ? io.factorhouse.rfx.stores.atom.subscribe_STAR_.cljs$core$IFn$_invoke$arity$6(curr_cache,curr_db,curr_registry,cache,store,p1__27607_SHARP_) : io.factorhouse.rfx.stores.atom.subscribe_STAR_.call(null,curr_cache,curr_db,curr_registry,cache,store,p1__27607_SHARP_));
})),signals)):curr_db);
var result = (sub_f.cljs$core$IFn$_invoke$arity$2 ? sub_f.cljs$core$IFn$_invoke$arity$2(realized_signals,sub) : sub_f.call(null,realized_signals,sub));
cljs.core._vreset_BANG_(cache,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(cache),sub,result));

return result;
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Subscription does not exist in registry.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub","sub",-2093760025),sub], null));
}
});

/**
* @constructor
 * @implements {io.factorhouse.rfx.store.IStore}
 * @implements {cljs.core.IDeref}
*/
io.factorhouse.rfx.stores.atom.RfxAtom = (function (app_db,listeners,subscription_cache,registry){
this.app_db = app_db;
this.listeners = listeners;
this.subscription_cache = subscription_cache;
this.registry = registry;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(io.factorhouse.rfx.stores.atom.RfxAtom.prototype.io$factorhouse$rfx$store$IStore$ = cljs.core.PROTOCOL_SENTINEL);

(io.factorhouse.rfx.stores.atom.RfxAtom.prototype.io$factorhouse$rfx$store$IStore$clear_subscription_cache_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.vreset_BANG_(self__.subscription_cache,cljs.core.PersistentArrayMap.EMPTY);

var seq__27624_27757 = cljs.core.seq(cljs.core.vals(cljs.core.deref(self__.listeners)));
var chunk__27625_27758 = null;
var count__27626_27759 = (0);
var i__27627_27760 = (0);
while(true){
if((i__27627_27760 < count__27626_27759)){
var map__27630_27761 = chunk__27625_27758.cljs$core$IIndexed$_nth$arity$2(null,i__27627_27760);
var map__27630_27762__$1 = cljs.core.__destructure_map(map__27630_27761);
var listener_27763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27630_27762__$1,new cljs.core.Keyword(null,"listener","listener",882147248));
(listener_27763.cljs$core$IFn$_invoke$arity$0 ? listener_27763.cljs$core$IFn$_invoke$arity$0() : listener_27763.call(null));


var G__27764 = seq__27624_27757;
var G__27765 = chunk__27625_27758;
var G__27766 = count__27626_27759;
var G__27767 = (i__27627_27760 + (1));
seq__27624_27757 = G__27764;
chunk__27625_27758 = G__27765;
count__27626_27759 = G__27766;
i__27627_27760 = G__27767;
continue;
} else {
var temp__5825__auto___27768 = cljs.core.seq(seq__27624_27757);
if(temp__5825__auto___27768){
var seq__27624_27769__$1 = temp__5825__auto___27768;
if(cljs.core.chunked_seq_QMARK_(seq__27624_27769__$1)){
var c__5673__auto___27770 = cljs.core.chunk_first(seq__27624_27769__$1);
var G__27771 = cljs.core.chunk_rest(seq__27624_27769__$1);
var G__27772 = c__5673__auto___27770;
var G__27773 = cljs.core.count(c__5673__auto___27770);
var G__27774 = (0);
seq__27624_27757 = G__27771;
chunk__27625_27758 = G__27772;
count__27626_27759 = G__27773;
i__27627_27760 = G__27774;
continue;
} else {
var map__27633_27775 = cljs.core.first(seq__27624_27769__$1);
var map__27633_27776__$1 = cljs.core.__destructure_map(map__27633_27775);
var listener_27777 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27633_27776__$1,new cljs.core.Keyword(null,"listener","listener",882147248));
(listener_27777.cljs$core$IFn$_invoke$arity$0 ? listener_27777.cljs$core$IFn$_invoke$arity$0() : listener_27777.call(null));


var G__27778 = cljs.core.next(seq__27624_27769__$1);
var G__27779 = null;
var G__27780 = (0);
var G__27781 = (0);
seq__27624_27757 = G__27778;
chunk__27625_27758 = G__27779;
count__27626_27759 = G__27780;
i__27627_27760 = G__27781;
continue;
}
} else {
}
}
break;
}

return true;
}));

(io.factorhouse.rfx.stores.atom.RfxAtom.prototype.io$factorhouse$rfx$store$IStore$subscribe$arity$2 = (function (this$,sub){
var self__ = this;
var this$__$1 = this;
var curr_cache = cljs.core.deref(self__.subscription_cache);
var curr_db = cljs.core.deref(self__.app_db);
var curr_registry = cljs.core.deref(self__.registry);
return io.factorhouse.rfx.stores.atom.subscribe_STAR_(curr_cache,curr_db,curr_registry,self__.subscription_cache,this$__$1,sub);
}));

(io.factorhouse.rfx.stores.atom.RfxAtom.prototype.io$factorhouse$rfx$store$IStore$use_sub$arity$2 = (function (this$,sub){
var self__ = this;
var this$__$1 = this;
return module$node_modules$react$index.useSyncExternalStore((function io$factorhouse$rfx$stores$atom$subscribe_to_sub_STAR_(listener){
var id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("listener")));
cljs.core._vreset_BANG_(self__.listeners,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.listeners),id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"listener","listener",882147248),listener,new cljs.core.Keyword(null,"sub","sub",-2093760025),sub], null)));

return (function (){
return cljs.core._vreset_BANG_(self__.listeners,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(self__.listeners),id));
});
}),(function io$factorhouse$rfx$stores$atom$get_sub_snapshot_STAR_(){
return this$__$1.io$factorhouse$rfx$store$IStore$subscribe$arity$2(null,sub);
}));
}));

(io.factorhouse.rfx.stores.atom.RfxAtom.prototype.io$factorhouse$rfx$store$IStore$snapshot$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.app_db);
}));

(io.factorhouse.rfx.stores.atom.RfxAtom.prototype.io$factorhouse$rfx$store$IStore$next_state_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var prev_cache_27782 = cljs.core.deref(self__.subscription_cache);
cljs.core.reset_BANG_(self__.app_db,newval);

cljs.core.vreset_BANG_(self__.subscription_cache,cljs.core.PersistentArrayMap.EMPTY);

var curr_listeners_27783 = cljs.core.vals(cljs.core.deref(self__.listeners));
var curr_subs_27784 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sub","sub",-2093760025)),curr_listeners_27783);
var curr_registry_27785 = cljs.core.deref(self__.registry);
var cache_diff_27786 = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var reaction_STAR__27787 = (function (p1__27623_SHARP_){
return io.factorhouse.rfx.stores.atom.reaction(prev_cache_27782,newval,curr_registry_27785,self__.subscription_cache,cache_diff_27786,this$__$1,p1__27623_SHARP_);
});
var sub_notify_QMARK__27788 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (sub){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub,new cljs.core.Keyword(null,"updated?","updated?",-114940638).cljs$core$IFn$_invoke$arity$1(reaction_STAR__27787(sub))], null);
})),curr_subs_27784);
var seq__27644_27794 = cljs.core.seq(curr_listeners_27783);
var chunk__27645_27795 = null;
var count__27646_27796 = (0);
var i__27647_27797 = (0);
while(true){
if((i__27647_27797 < count__27646_27796)){
var map__27652_27798 = chunk__27645_27795.cljs$core$IIndexed$_nth$arity$2(null,i__27647_27797);
var map__27652_27799__$1 = cljs.core.__destructure_map(map__27652_27798);
var listener_27800 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27652_27799__$1,new cljs.core.Keyword(null,"listener","listener",882147248));
var sub_27801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27652_27799__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
if(cljs.core.truth_((sub_notify_QMARK__27788.cljs$core$IFn$_invoke$arity$1 ? sub_notify_QMARK__27788.cljs$core$IFn$_invoke$arity$1(sub_27801) : sub_notify_QMARK__27788.call(null,sub_27801)))){
(listener_27800.cljs$core$IFn$_invoke$arity$0 ? listener_27800.cljs$core$IFn$_invoke$arity$0() : listener_27800.call(null));
} else {
}


var G__27802 = seq__27644_27794;
var G__27803 = chunk__27645_27795;
var G__27804 = count__27646_27796;
var G__27805 = (i__27647_27797 + (1));
seq__27644_27794 = G__27802;
chunk__27645_27795 = G__27803;
count__27646_27796 = G__27804;
i__27647_27797 = G__27805;
continue;
} else {
var temp__5825__auto___27806 = cljs.core.seq(seq__27644_27794);
if(temp__5825__auto___27806){
var seq__27644_27807__$1 = temp__5825__auto___27806;
if(cljs.core.chunked_seq_QMARK_(seq__27644_27807__$1)){
var c__5673__auto___27809 = cljs.core.chunk_first(seq__27644_27807__$1);
var G__27810 = cljs.core.chunk_rest(seq__27644_27807__$1);
var G__27811 = c__5673__auto___27809;
var G__27812 = cljs.core.count(c__5673__auto___27809);
var G__27813 = (0);
seq__27644_27794 = G__27810;
chunk__27645_27795 = G__27811;
count__27646_27796 = G__27812;
i__27647_27797 = G__27813;
continue;
} else {
var map__27655_27814 = cljs.core.first(seq__27644_27807__$1);
var map__27655_27815__$1 = cljs.core.__destructure_map(map__27655_27814);
var listener_27816 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27655_27815__$1,new cljs.core.Keyword(null,"listener","listener",882147248));
var sub_27817 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27655_27815__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
if(cljs.core.truth_((sub_notify_QMARK__27788.cljs$core$IFn$_invoke$arity$1 ? sub_notify_QMARK__27788.cljs$core$IFn$_invoke$arity$1(sub_27817) : sub_notify_QMARK__27788.call(null,sub_27817)))){
(listener_27816.cljs$core$IFn$_invoke$arity$0 ? listener_27816.cljs$core$IFn$_invoke$arity$0() : listener_27816.call(null));
} else {
}


var G__27818 = cljs.core.next(seq__27644_27807__$1);
var G__27819 = null;
var G__27820 = (0);
var G__27821 = (0);
seq__27644_27794 = G__27818;
chunk__27645_27795 = G__27819;
count__27646_27796 = G__27820;
i__27647_27797 = G__27821;
continue;
}
} else {
}
}
break;
}

return newval;
}));

(io.factorhouse.rfx.stores.atom.RfxAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.app_db);
}));

(io.factorhouse.rfx.stores.atom.RfxAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-db","app-db",-1788829467,null),new cljs.core.Symbol(null,"listeners","listeners",2035075972,null),new cljs.core.Symbol(null,"subscription-cache","subscription-cache",-1058984629,null),new cljs.core.Symbol(null,"registry","registry",-1633276751,null)], null);
}));

(io.factorhouse.rfx.stores.atom.RfxAtom.cljs$lang$type = true);

(io.factorhouse.rfx.stores.atom.RfxAtom.cljs$lang$ctorStr = "io.factorhouse.rfx.stores.atom/RfxAtom");

(io.factorhouse.rfx.stores.atom.RfxAtom.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"io.factorhouse.rfx.stores.atom/RfxAtom");
}));

/**
 * Positional factory function for io.factorhouse.rfx.stores.atom/RfxAtom.
 */
io.factorhouse.rfx.stores.atom.__GT_RfxAtom = (function io$factorhouse$rfx$stores$atom$__GT_RfxAtom(app_db,listeners,subscription_cache,registry){
return (new io.factorhouse.rfx.stores.atom.RfxAtom(app_db,listeners,subscription_cache,registry));
});

io.factorhouse.rfx.stores.atom.store = (function io$factorhouse$rfx$stores$atom$store(registry,initial_value){
var app_db = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial_value);
var listeners = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var subscription_cache = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
return io.factorhouse.rfx.stores.atom.__GT_RfxAtom(app_db,listeners,subscription_cache,registry);
});

//# sourceMappingURL=io.factorhouse.rfx.stores.atom.js.map
