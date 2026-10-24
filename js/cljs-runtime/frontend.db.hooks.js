goog.provide('frontend.db.hooks');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
frontend.db.hooks.use_stable_key = (function frontend$db$hooks$use_stable_key(key){
var key_ref = module$node_modules$react$index.useRef(key);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_ref.current,key)){
} else {
(key_ref.current = key);
}

return key_ref.current;
});
frontend.db.hooks.use_graph_key = (function frontend$db$hooks$use_graph_key(key){
return frontend.db.hooks.use_stable_key(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.state.get_current_repo(),key], null));
});
frontend.db.hooks.use_external_store_snapshot = (function frontend$db$hooks$use_external_store_snapshot(subscribe_BANG_,snapshot,key){
var key__$1 = frontend.db.hooks.use_graph_key(key);
var subscribe = module$node_modules$react$index.useCallback((function (listener){
var G__69574 = cljs.core.second(key__$1);
var G__69575 = listener;
return (subscribe_BANG_.cljs$core$IFn$_invoke$arity$2 ? subscribe_BANG_.cljs$core$IFn$_invoke$arity$2(G__69574,G__69575) : subscribe_BANG_.call(null,G__69574,G__69575));
}),[subscribe_BANG_,key__$1]);
var get_snapshot = module$node_modules$react$index.useCallback((function (){
var G__69576 = cljs.core.second(key__$1);
return (snapshot.cljs$core$IFn$_invoke$arity$1 ? snapshot.cljs$core$IFn$_invoke$arity$1(G__69576) : snapshot.call(null,G__69576));
}),[snapshot,key__$1]);
var map__69573 = module$node_modules$react$index.useSyncExternalStore(subscribe,get_snapshot,get_snapshot);
var map__69573__$1 = cljs.core.__destructure_map(map__69573);
var result = map__69573__$1;
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69573__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ready","ready",1086465795),null,new cljs.core.Keyword(null,"loading","loading",-737050189),null,new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"missing","missing",362507769),null], null), null),status)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid renderer subscription snapshot",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key__$1,new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710),result], null));
}

return result;
});
frontend.db.hooks.use_external_store = (function frontend$db$hooks$use_external_store(subscribe_BANG_,snapshot,key){
var map__69581 = frontend.db.hooks.use_external_store_snapshot(subscribe_BANG_,snapshot,key);
var map__69581__$1 = cljs.core.__destructure_map(map__69581);
var result = map__69581__$1;
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69581__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69581__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69581__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var G__69582 = status;
var G__69582__$1 = (((G__69582 instanceof cljs.core.Keyword))?G__69582.fqn:null);
switch (G__69582__$1) {
case "ready":
return value;

break;
case "loading":
case "missing":
return null;

break;
case "error":
throw error;

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid renderer subscription snapshot",result);

}
});
frontend.db.hooks.use_external_store_projection_snapshot = (function frontend$db$hooks$use_external_store_projection_snapshot(subscribe_BANG_,snapshot,key,project){
var key__$1 = frontend.db.hooks.use_graph_key(key);
var projection_ref = module$node_modules$react$index.useRef(null);
var subscribe = module$node_modules$react$index.useCallback((function (listener){
var G__69584 = cljs.core.second(key__$1);
var G__69585 = listener;
return (subscribe_BANG_.cljs$core$IFn$_invoke$arity$2 ? subscribe_BANG_.cljs$core$IFn$_invoke$arity$2(G__69584,G__69585) : subscribe_BANG_.call(null,G__69584,G__69585));
}),[subscribe_BANG_,key__$1]);
var get_snapshot = module$node_modules$react$index.useCallback((function (){
var source = (function (){var G__69586 = cljs.core.second(key__$1);
return (snapshot.cljs$core$IFn$_invoke$arity$1 ? snapshot.cljs$core$IFn$_invoke$arity$1(G__69586) : snapshot.call(null,G__69586));
})();
var cached = projection_ref.current;
if((source === new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cached))){
return new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(cached);
} else {
var projected = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ready","ready",1086465795),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(source)))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(source,new cljs.core.Keyword(null,"value","value",305978217),project):source);
var projected__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(projected,new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(cached)))?new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(cached):projected);
(projection_ref.current = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),source,new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710),projected__$1], null));

return projected__$1;
}
}),[snapshot,key__$1,project]);
var map__69583 = module$node_modules$react$index.useSyncExternalStore(subscribe,get_snapshot,get_snapshot);
var map__69583__$1 = cljs.core.__destructure_map(map__69583);
var result = map__69583__$1;
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69583__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ready","ready",1086465795),null,new cljs.core.Keyword(null,"loading","loading",-737050189),null,new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"missing","missing",362507769),null], null), null),status)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid renderer subscription snapshot",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key__$1,new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710),result], null));
}

return result;
});
frontend.db.hooks.use_external_store_projection = (function frontend$db$hooks$use_external_store_projection(subscribe_BANG_,snapshot,key,project){
var map__69591 = frontend.db.hooks.use_external_store_projection_snapshot(subscribe_BANG_,snapshot,key,project);
var map__69591__$1 = cljs.core.__destructure_map(map__69591);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69591__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69591__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69591__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var G__69592 = status;
var G__69592__$1 = (((G__69592 instanceof cljs.core.Keyword))?G__69592.fqn:null);
switch (G__69592__$1) {
case "ready":
return value;

break;
case "loading":
case "missing":
return null;

break;
case "error":
throw error;

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69592__$1))));

}
});
frontend.db.hooks.subscribe_nothing_BANG_ = (function frontend$db$hooks$subscribe_nothing_BANG_(_key,_listener){
return (function (){
return null;
});
});
frontend.db.hooks.nil_snapshot_value = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"ready","ready",1086465795),new cljs.core.Keyword(null,"value","value",305978217),null], null);
frontend.db.hooks.nil_snapshot = (function frontend$db$hooks$nil_snapshot(_key){
return frontend.db.hooks.nil_snapshot_value;
});
frontend.db.hooks.use_block = (function frontend$db$hooks$use_block(block_uuid){
return frontend.db.hooks.use_external_store(frontend.db.subs.subscribe_block_BANG_,frontend.db.subs.block_snapshot,block_uuid);
});
/**
 * Keep canonical block loads alive for a render-ahead window and report when
 *   the whole window has settled.
 */
frontend.db.hooks.use_block_prefetch = (function frontend$db$hooks$use_block_prefetch(block_uuids){
var key = frontend.db.hooks.use_graph_key(cljs.core.vec(block_uuids));
var block_uuids__$1 = cljs.core.second(key);
var subscribe = module$node_modules$react$index.useCallback((function (listener){
var unsubscribes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__69601_SHARP_){
return frontend.db.subs.subscribe_block_BANG_(p1__69601_SHARP_,listener);
}),block_uuids__$1);
return (function (){
return cljs.core.run_BANG_((function (unsubscribe){
return (unsubscribe.cljs$core$IFn$_invoke$arity$0 ? unsubscribe.cljs$core$IFn$_invoke$arity$0() : unsubscribe.call(null));
}),unsubscribes);
});
}),[key]);
var get_snapshot = module$node_modules$react$index.useCallback((function (){
return cljs.core.every_QMARK_((function (p1__69602_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(frontend.db.subs.block_snapshot(p1__69602_SHARP_)));
}),block_uuids__$1);
}),[key]);
return module$node_modules$react$index.useSyncExternalStore(subscribe,get_snapshot,get_snapshot);
});
frontend.db.hooks.use_blocks = (function frontend$db$hooks$use_blocks(block_uuids){
if(cljs.core.truth_(frontend.db.hooks.use_block_prefetch(block_uuids))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (block_uuid){
var map__69610 = frontend.db.subs.block_snapshot(block_uuid);
var map__69610__$1 = cljs.core.__destructure_map(map__69610);
var snapshot = map__69610__$1;
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69610__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69610__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69610__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var G__69613 = status;
var G__69613__$1 = (((G__69613 instanceof cljs.core.Keyword))?G__69613.fqn:null);
switch (G__69613__$1) {
case "ready":
return value;

break;
case "missing":
return null;

break;
case "error":
throw error;

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid settled block snapshot",snapshot);

}
}),block_uuids);
} else {
return null;
}
});
frontend.db.hooks.use_block_projection = (function frontend$db$hooks$use_block_projection(block_uuid,project){
return frontend.db.hooks.use_external_store_projection(frontend.db.subs.subscribe_block_BANG_,frontend.db.subs.block_snapshot,block_uuid,project);
});
/**
 * Children ids for `parent-uuid`. A nil uuid subscribes to nothing and reads
 * as nil — collapsed rows pass nil so children load only when expanded.
 */
frontend.db.hooks.use_children = (function frontend$db$hooks$use_children(parent_uuid){
var subscribe_BANG_ = (cljs.core.truth_(parent_uuid)?frontend.db.subs.subscribe_children_BANG_:frontend.db.hooks.subscribe_nothing_BANG_);
var snapshot = (cljs.core.truth_(parent_uuid)?frontend.db.subs.children_snapshot:frontend.db.hooks.nil_snapshot);
return frontend.db.hooks.use_external_store(subscribe_BANG_,snapshot,parent_uuid);
});
/**
 * Synchronous read of a children slot's ordered uuid vector without
 * subscribing. Returns nil while the slot is unloaded.
 */
frontend.db.hooks.peek_children = (function frontend$db$hooks$peek_children(parent_uuid){
var map__69616 = frontend.db.subs.children_snapshot(parent_uuid);
var map__69616__$1 = cljs.core.__destructure_map(map__69616);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69616__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69616__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ready","ready",1086465795),status)){
return value;
} else {
return null;
}
});
frontend.db.hooks.use_resource = (function frontend$db$hooks$use_resource(resource_key){
return frontend.db.hooks.use_external_store(frontend.db.subs.subscribe_resource_BANG_,frontend.db.subs.resource_snapshot,resource_key);
});
/**
 * Status-aware `use-block-projection`. A nil uuid reads as a ready nil value
 * so a caller can wait on an upstream lookup without conditional hooks.
 */
frontend.db.hooks.use_block_projection_snapshot = (function frontend$db$hooks$use_block_projection_snapshot(block_uuid,project){
var subscribe_BANG_ = (cljs.core.truth_(block_uuid)?frontend.db.subs.subscribe_block_BANG_:frontend.db.hooks.subscribe_nothing_BANG_);
var snapshot = (cljs.core.truth_(block_uuid)?frontend.db.subs.block_snapshot:frontend.db.hooks.nil_snapshot);
return frontend.db.hooks.use_external_store_projection_snapshot(subscribe_BANG_,snapshot,block_uuid,project);
});
frontend.db.hooks.use_resource_snapshot = (function frontend$db$hooks$use_resource_snapshot(resource_key){
var subscribe_BANG_ = (cljs.core.truth_(resource_key)?frontend.db.subs.subscribe_resource_BANG_:frontend.db.hooks.subscribe_nothing_BANG_);
var snapshot = (cljs.core.truth_(resource_key)?frontend.db.subs.resource_snapshot:frontend.db.hooks.nil_snapshot);
return frontend.db.hooks.use_external_store_snapshot(subscribe_BANG_,snapshot,resource_key);
});

//# sourceMappingURL=frontend.db.hooks.js.map
