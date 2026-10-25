goog.provide('frontend.db.subs');
frontend.db.subs.loading_snapshot = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
frontend.db.subs.warm_cache_size = (20000);
frontend.db.subs.require_uuid_BANG_ = (function frontend$db$subs$require_uuid_BANG_(label,value){
if(cljs.core.uuid_QMARK_(value)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Invalid "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)),cljs.core.PersistentArrayMap.createAsIfByAssoc([label,value]));
}

return value;
});
frontend.db.subs.require_revision_BANG_ = (function frontend$db$subs$require_revision_BANG_(label,value){
if(((cljs.core.integer_QMARK_(value)) && ((!((value < (0))))))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Invalid "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)),cljs.core.PersistentArrayMap.createAsIfByAssoc([label,value]));
}

return value;
});
frontend.db.subs.block_changed_QMARK_ = (function frontend$db$subs$block_changed_QMARK_(old_block,new_block){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(frontend.db.subs.require_revision_BANG_(new cljs.core.Keyword("block","tx-id","block/tx-id",547556161),new cljs.core.Keyword("block","tx-id","block/tx-id",547556161).cljs$core$IFn$_invoke$arity$1(old_block)),frontend.db.subs.require_revision_BANG_(new cljs.core.Keyword("block","tx-id","block/tx-id",547556161),new cljs.core.Keyword("block","tx-id","block/tx-id",547556161).cljs$core$IFn$_invoke$arity$1(new_block)));
});
frontend.db.subs.empty_warm_cache = (function frontend$db$subs$empty_warm_cache(){
return frontend.common.cache.empty_lru(frontend.db.subs.warm_cache_size);
});
frontend.db.subs.empty_store = (function frontend$db$subs$empty_store(graph_id,generation){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"graph-id","graph-id",-205404489),graph_id,new cljs.core.Keyword(null,"generation","generation",-2132542044),generation,new cljs.core.Keyword(null,"rev","rev",12702670),(-1),new cljs.core.Keyword(null,"slots","slots",276818598),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"resource-slot-keys","resource-slot-keys",-1642015058),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"watch-index","watch-index",348160922),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"warm","warm",608437969),frontend.db.subs.empty_warm_cache()], null);
});
if((typeof frontend !== 'undefined') && (typeof frontend.db !== 'undefined') && (typeof frontend.db.subs !== 'undefined') && (typeof frontend.db.subs._STAR_store !== 'undefined')){
} else {
frontend.db.subs._STAR_store = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(frontend.db.subs.empty_store(frontend.state.get_current_repo(),(0)));
}
if((typeof frontend !== 'undefined') && (typeof frontend.db !== 'undefined') && (typeof frontend.db.subs !== 'undefined') && (typeof frontend.db.subs._STAR_listeners !== 'undefined')){
} else {
frontend.db.subs._STAR_listeners = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof frontend !== 'undefined') && (typeof frontend.db !== 'undefined') && (typeof frontend.db.subs !== 'undefined') && (typeof frontend.db.subs._STAR_in_flight !== 'undefined')){
} else {
frontend.db.subs._STAR_in_flight = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof frontend !== 'undefined') && (typeof frontend.db !== 'undefined') && (typeof frontend.db.subs !== 'undefined') && (typeof frontend.db.subs._STAR_query_reloads !== 'undefined')){
} else {
frontend.db.subs._STAR_query_reloads = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timer-id","timer-id",1622357927),null,new cljs.core.Keyword(null,"slot-keys","slot-keys",2090388953),cljs.core.PersistentHashSet.EMPTY], null));
}
frontend.db.subs.set_query_reload_timeout_BANG_ = (function frontend$db$subs$set_query_reload_timeout_BANG_(callback,delay_ms){
return setTimeout(callback,delay_ms);
});
frontend.db.subs.clear_query_reload_timeout_BANG_ = (function frontend$db$subs$clear_query_reload_timeout_BANG_(timer_id){
return clearTimeout(timer_id);
});
frontend.db.subs.schedule_load_batch_BANG_ = (function frontend$db$subs$schedule_load_batch_BANG_(callback){
return setTimeout(callback,(0));
});
frontend.db.subs._LT_load_block = (function frontend$db$subs$_LT_load_block(graph_id,block_uuid){
return frontend.db.subs_loader.load_BANG_(graph_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),block_uuid], null),frontend.db.subs.schedule_load_batch_BANG_);
});
frontend.db.subs._LT_load_children = (function frontend$db$subs$_LT_load_children(graph_id,parent_uuid){
return frontend.db.subs_loader.load_BANG_(graph_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),parent_uuid], null),frontend.db.subs.schedule_load_batch_BANG_);
});
frontend.db.subs._LT_load_resource = (function frontend$db$subs$_LT_load_resource(graph_id,resource_key){
return frontend.db.subs_loader.load_BANG_(graph_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource","resource",251898836),resource_key], null),frontend.db.subs.schedule_load_batch_BANG_);
});
frontend.db.subs.mounted_QMARK_ = (function frontend$db$subs$mounted_QMARK_(slot_key){
return cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.db.subs._STAR_listeners),slot_key));
});
frontend.db.subs_loader.set_still_wanted_fn_BANG_(frontend.db.subs.mounted_QMARK_);
frontend.db.subs.notify_BANG_ = (function frontend$db$subs$notify_BANG_(slot_key){
var seq__58295 = cljs.core.seq(cljs.core.vals(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.db.subs._STAR_listeners),slot_key)));
var chunk__58297 = null;
var count__58298 = (0);
var i__58299 = (0);
while(true){
if((i__58299 < count__58298)){
var listener = chunk__58297.cljs$core$IIndexed$_nth$arity$2(null,i__58299);
(listener.cljs$core$IFn$_invoke$arity$0 ? listener.cljs$core$IFn$_invoke$arity$0() : listener.call(null));


var G__58584 = seq__58295;
var G__58585 = chunk__58297;
var G__58586 = count__58298;
var G__58587 = (i__58299 + (1));
seq__58295 = G__58584;
chunk__58297 = G__58585;
count__58298 = G__58586;
i__58299 = G__58587;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__58295);
if(temp__5825__auto__){
var seq__58295__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58295__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__58295__$1);
var G__58588 = cljs.core.chunk_rest(seq__58295__$1);
var G__58589 = c__5673__auto__;
var G__58590 = cljs.core.count(c__5673__auto__);
var G__58591 = (0);
seq__58295 = G__58588;
chunk__58297 = G__58589;
count__58298 = G__58590;
i__58299 = G__58591;
continue;
} else {
var listener = cljs.core.first(seq__58295__$1);
(listener.cljs$core$IFn$_invoke$arity$0 ? listener.cljs$core$IFn$_invoke$arity$0() : listener.call(null));


var G__58592 = cljs.core.next(seq__58295__$1);
var G__58593 = null;
var G__58594 = (0);
var G__58595 = (0);
seq__58295 = G__58592;
chunk__58297 = G__58593;
count__58298 = G__58594;
i__58299 = G__58595;
continue;
}
} else {
return null;
}
}
break;
}
});
frontend.db.subs.store_slot = (function frontend$db$subs$store_slot(store,slot_key){
var or__5142__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(store,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slots","slots",276818598),slot_key], null));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.cache.lookup(new cljs.core.Keyword(null,"warm","warm",608437969).cljs$core$IFn$_invoke$arity$1(store),slot_key);
}
});
frontend.db.subs.watch_index_add = (function frontend$db$subs$watch_index_add(index,slot_key,keys){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (index__$1,key){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(index__$1,key,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),slot_key);
}),index,keys);
});
frontend.db.subs.watch_index_remove = (function frontend$db$subs$watch_index_remove(index,slot_key,keys){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (index__$1,key){
var slot_keys = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(index__$1,key),slot_key);
if(cljs.core.seq(slot_keys)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(index__$1,key,slot_keys);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(index__$1,key);
}
}),index,keys);
});
frontend.db.subs.reindex_slot = (function frontend$db$subs$reindex_slot(store,slot_key,old_slot,new_slot){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block","block",664686210),cljs.core.first(slot_key))){
var old_keys = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_slot,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watch","watch",380988277),new cljs.core.Keyword(null,"keys","keys",1068423698)], null));
var new_keys = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_slot,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watch","watch",380988277),new cljs.core.Keyword(null,"keys","keys",1068423698)], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_keys,new_keys)){
return store;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$5(store,new cljs.core.Keyword(null,"watch-index","watch-index",348160922),frontend.db.subs.watch_index_remove,slot_key,old_keys),new cljs.core.Keyword(null,"watch-index","watch-index",348160922),frontend.db.subs.watch_index_add,slot_key,new_keys);
}
} else {
return store;
}
});
frontend.db.subs.warm_miss = (function frontend$db$subs$warm_miss(store,slot_key,slot){
var warm = new cljs.core.Keyword(null,"warm","warm",608437969).cljs$core$IFn$_invoke$arity$1(store);
var victim = (((((cljs.core.count(warm) >= frontend.db.subs.warm_cache_size)) && (cljs.core.not(cljs.cache.has_QMARK_(warm,slot_key)))))?cljs.core.first(cljs.core.peek(warm.lru)):null);
var store__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(store,new cljs.core.Keyword(null,"warm","warm",608437969),cljs.cache.miss,slot_key,slot);
if(cljs.core.truth_(victim)){
return frontend.db.subs.reindex_slot(store__$1,victim,cljs.cache.lookup(warm,victim),null);
} else {
return store__$1;
}
});
frontend.db.subs.put_slot = (function frontend$db$subs$put_slot(store,slot_key,next_slot){
var current = frontend.db.subs.store_slot(store,slot_key);
var store__$1 = ((frontend.db.subs.mounted_QMARK_(slot_key))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(store,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slots","slots",276818598),slot_key], null),next_slot),new cljs.core.Keyword(null,"warm","warm",608437969),cljs.cache.evict,slot_key):frontend.db.subs.warm_miss(store,slot_key,next_slot));
return frontend.db.subs.reindex_slot(store__$1,slot_key,current,next_slot);
});
frontend.db.subs.evict_warm = (function frontend$db$subs$evict_warm(store,slot_key){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(frontend.db.subs.reindex_slot(store,slot_key,cljs.cache.lookup(new cljs.core.Keyword(null,"warm","warm",608437969).cljs$core$IFn$_invoke$arity$1(store),slot_key),null),new cljs.core.Keyword(null,"warm","warm",608437969),cljs.cache.evict,slot_key);
});
frontend.db.subs.slot_snapshot = (function frontend$db$subs$slot_snapshot(slot_key){
var or__5142__auto__ = new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(frontend.db.subs.store_slot(cljs.core.deref(frontend.db.subs._STAR_store),slot_key));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.db.subs.loading_snapshot;
}
});
frontend.db.subs.block_snapshot = (function frontend$db$subs$block_snapshot(block_uuid){
frontend.db.subs.require_uuid_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid);

return frontend.db.subs.slot_snapshot(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),block_uuid], null));
});
frontend.db.subs.children_snapshot = (function frontend$db$subs$children_snapshot(parent_uuid){
frontend.db.subs.require_uuid_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),parent_uuid);

return frontend.db.subs.slot_snapshot(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),parent_uuid], null));
});
frontend.db.subs.resource_snapshot = (function frontend$db$subs$resource_snapshot(resource_key){
return frontend.db.subs.slot_snapshot(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource","resource",251898836),resource_key], null));
});
frontend.db.subs.slot_revision = (function frontend$db$subs$slot_revision(slot){
return cljs.core.max.cljs$core$IFn$_invoke$arity$variadic((-1),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"basis-rev","basis-rev",-1470394588).cljs$core$IFn$_invoke$arity$1(slot);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (-1);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"rev","rev",12702670).cljs$core$IFn$_invoke$arity$1(slot);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (-1);
}
})()], 0));
});
frontend.db.subs.ready_slot = (function frontend$db$subs$ready_slot(basis_rev,value,attributes){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"basis-rev","basis-rev",-1470394588),basis_rev,new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"ready","ready",1086465795),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null),attributes], 0));
});
frontend.db.subs.require_block_BANG_ = (function frontend$db$subs$require_block_BANG_(block_uuid,block){
frontend.db.subs.require_uuid_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(block_uuid,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Block UUID does not match its snapshot key",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),block_uuid], null));
}

frontend.db.subs.require_revision_BANG_(new cljs.core.Keyword("block","tx-id","block/tx-id",547556161),new cljs.core.Keyword("block","tx-id","block/tx-id",547556161).cljs$core$IFn$_invoke$arity$1(block));

return block;
});
frontend.db.subs.child_items_BANG_ = (function frontend$db$subs$child_items_BANG_(parent_uuid,items){
return cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58327){
var vec__58328 = p__58327;
var child_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58328,(0),null);
var order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58328,(1),null);
var item = vec__58328;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(item))) && (typeof order === 'string'))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid direct-child item",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parent-uuid","parent-uuid",-2003485227),parent_uuid,new cljs.core.Keyword(null,"item","item",249373802),item], null));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.db.subs.require_uuid_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),child_uuid),order], null);
}),items)));
});
frontend.db.subs.block_render_watch_keys = (function frontend$db$subs$block_render_watch_keys(block){
if(cljs.core.contains_QMARK_(block,new cljs.core.Keyword("block.temp","positioned-properties","block.temp/positioned-properties",1836546803))){
var properties = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.temp","positioned-properties","block.temp/positioned-properties",1836546803).cljs$core$IFn$_invoke$arity$1(block)], 0));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"property-membership","property-membership",-1828327648),new cljs.core.Keyword("block","closed-value-property","block/closed-value-property",1157792813)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-tree","class-tree",1111647981)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"property-config","property-config",1654266101)], null)]),cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__58331_SHARP_){
return cljs.core.cons(p1__58331_SHARP_,new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952).cljs$core$IFn$_invoke$arity$1(p1__58331_SHARP_));
})),cljs.core.keep.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__58332_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"entity","entity",-450970276),p1__58332_SHARP_],null));
}))),properties);
} else {
return null;
}
});
frontend.db.subs.block_slot = (function frontend$db$subs$block_slot(rev,block){
return frontend.db.subs.ready_slot(rev,block,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tx-id","tx-id",638275288),new cljs.core.Keyword("block","tx-id","block/tx-id",547556161).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"watch","watch",380988277),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),frontend.db.subs.block_render_watch_keys(block)], null)], null));
});
frontend.db.subs.same_block_projection_QMARK_ = (function frontend$db$subs$same_block_projection_QMARK_(current,next_slot){
var and__5140__auto__ = new cljs.core.Keyword(null,"tx-id","tx-id",638275288).cljs$core$IFn$_invoke$arity$1(current);
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-id","tx-id",638275288).cljs$core$IFn$_invoke$arity$1(current),new cljs.core.Keyword(null,"tx-id","tx-id",638275288).cljs$core$IFn$_invoke$arity$1(next_slot))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.select_keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710),new cljs.core.Keyword(null,"value","value",305978217)], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block.temp","positioned-properties","block.temp/positioned-properties",1836546803),new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952),new cljs.core.Keyword("block.temp","has-children?","block.temp/has-children?",935519725),new cljs.core.Keyword("block.temp","class-property-idents","block.temp/class-property-idents",-551726866)], null)),cljs.core.select_keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(next_slot,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710),new cljs.core.Keyword(null,"value","value",305978217)], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block.temp","positioned-properties","block.temp/positioned-properties",1836546803),new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952),new cljs.core.Keyword("block.temp","has-children?","block.temp/has-children?",935519725),new cljs.core.Keyword("block.temp","class-property-idents","block.temp/class-property-idents",-551726866)], null)))));
} else {
return and__5140__auto__;
}
});
frontend.db.subs.wire_slot = (function frontend$db$subs$wire_slot(basis_rev,p__58339,wire){
var vec__58340 = p__58339;
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58340,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58340,(1),null);
var slot_key = vec__58340;
var G__58343 = kind;
var G__58343__$1 = (((G__58343 instanceof cljs.core.Keyword))?G__58343.fqn:null);
switch (G__58343__$1) {
case "block":
if(cljs.core.truth_(new cljs.core.Keyword(null,"missing?","missing?",944051859).cljs$core$IFn$_invoke$arity$1(wire))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rev","rev",12702670),basis_rev,new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"missing","missing",362507769)], null)], null);
} else {
var block = frontend.db.subs.require_block_BANG_(key,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(wire));
return frontend.db.subs.block_slot(basis_rev,block);
}

break;
case "children":
var tx_id = frontend.db.subs.require_revision_BANG_(new cljs.core.Keyword("block","tx-id","block/tx-id",547556161),new cljs.core.Keyword(null,"tx-id","tx-id",638275288).cljs$core$IFn$_invoke$arity$1(wire));
var items = frontend.db.subs.child_items_BANG_(key,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(wire));
return frontend.db.subs.ready_slot(basis_rev,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,items),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tx-id","tx-id",638275288),tx_id,new cljs.core.Keyword(null,"items","items",1031954938),items], null));

break;
case "resource":
var map__58345 = new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$1(wire);
var map__58345__$1 = cljs.core.__destructure_map(map__58345);
var watch = map__58345__$1;
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58345__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var all_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58345__$1,new cljs.core.Keyword(null,"all?","all?",1103779750));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"all?","all?",1103779750),null,new cljs.core.Keyword(null,"keys","keys",1068423698),null], null), null),cljs.core.set(cljs.core.keys(watch)))) && (((cljs.core.set_QMARK_(keys)) && (cljs.core.boolean_QMARK_(all_QMARK_)))))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resource watch descriptor",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"resource-key","resource-key",1916750066),key,new cljs.core.Keyword(null,"watch","watch",380988277),watch], null));
}

return frontend.db.subs.ready_slot(basis_rev,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(wire),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch","watch",380988277),watch], null));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid renderer snapshot slot",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slot-key","slot-key",646563234),slot_key], null));

}
});
frontend.db.subs.response_stale_QMARK_ = (function frontend$db$subs$response_stale_QMARK_(slot_key,patch){
var dirty_keys = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.db.subs._STAR_in_flight),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot_key,new cljs.core.Keyword(null,"dirty-keys","dirty-keys",-109106982)], null));
var dirty_slots = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.db.subs._STAR_in_flight),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot_key,new cljs.core.Keyword(null,"dirty-slots","dirty-slots",-1761898471)], null));
var hydrated_slots = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"slots","slots",276818598).cljs$core$IFn$_invoke$arity$1(patch))),slot_key);
var map__58347 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(patch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slots","slots",276818598),slot_key,new cljs.core.Keyword(null,"watch","watch",380988277)], null));
var map__58347__$1 = cljs.core.__destructure_map(map__58347);
var resource_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58347__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var all_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58347__$1,new cljs.core.Keyword(null,"all?","all?",1103779750));
var or__5142__auto__ = (function (){var and__5140__auto__ = all_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.contains_QMARK_(dirty_keys,new cljs.core.Keyword("frontend.db.subs","changed","frontend.db.subs/changed",-1227893772));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(dirty_keys,resource_keys));
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(dirty_slots,hydrated_slots));
if(or__5142__auto____$2){
return or__5142__auto____$2;
} else {
return cljs.core.some((function (p__58350){
var vec__58352 = p__58350;
var vec__58355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58352,(0),null);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58355,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58355,(1),null);
var wire = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58352,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block","block",664686210),kind)) && (cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(dirty_keys,frontend.db.subs.block_render_watch_keys(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(wire))))));
}),new cljs.core.Keyword(null,"slots","slots",276818598).cljs$core$IFn$_invoke$arity$1(patch));
}
}
}
});
frontend.db.subs.loaded_slot = (function frontend$db$subs$loaded_slot(slot_key,current,next_slot){
var selected = (((frontend.db.subs.slot_revision(current) > frontend.db.subs.slot_revision(next_slot)))?current:(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block","block",664686210),cljs.core.first(slot_key));
if(and__5140__auto__){
return frontend.db.subs.same_block_projection_QMARK_(current,next_slot);
} else {
return and__5140__auto__;
}
})())?(cljs.core.truth_(new cljs.core.Keyword(null,"stale?","stale?",-42449365).cljs$core$IFn$_invoke$arity$1(current))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_slot,new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710),new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(current)):current):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,next_slot))?current:next_slot
)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(current),new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(selected))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(selected,new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710),new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(current));
} else {
return selected;
}
});
frontend.db.subs.apply_patch_BANG_ = (function frontend$db$subs$apply_patch_BANG_(generation,requested_slot_key,response){
var map__58362 = response;
var map__58362__$1 = cljs.core.__destructure_map(map__58362);
var patch = map__58362__$1;
var basis_rev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58362__$1,new cljs.core.Keyword(null,"basis-rev","basis-rev",-1470394588));
var slots = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58362__$1,new cljs.core.Keyword(null,"slots","slots",276818598));
var _ = frontend.db.subs.require_revision_BANG_(new cljs.core.Keyword(null,"basis-rev","basis-rev",-1470394588),basis_rev);
var stale_response_QMARK_ = frontend.db.subs.response_stale_QMARK_(requested_slot_key,patch);
var changed = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.map_QMARK_(slots)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid renderer snapshot slots",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slots","slots",276818598),slots], null));
}

if(cljs.core.truth_((function (){var or__5142__auto__ = stale_response_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.contains_QMARK_(slots,requested_slot_key);
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Missing requested renderer snapshot slot",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slot-key","slot-key",646563234),requested_slot_key], null));
}

if(cljs.core.truth_(stale_response_QMARK_)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.db.subs._STAR_store,(function (store){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(generation,new cljs.core.Keyword(null,"generation","generation",-2132542044).cljs$core$IFn$_invoke$arity$1(store))){
return store;
} else {
return cljs.core.reduce_kv((function (store__$1,slot_key,wire){
var current = frontend.db.subs.store_slot(store__$1,slot_key);
var next_slot = frontend.db.subs.loaded_slot(slot_key,current,frontend.db.subs.wire_slot(basis_rev,slot_key,wire));
if((current === next_slot)){
return store__$1;
} else {
if((new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(current) === new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(next_slot))){
} else {
changed.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(changed.cljs$core$IDeref$_deref$arity$1(null),slot_key));
}

return frontend.db.subs.put_slot(store__$1,slot_key,next_slot);
}
}),store,slots);
}
}));

var seq__58364_58607 = cljs.core.seq(cljs.core.deref(changed));
var chunk__58365_58608 = null;
var count__58366_58609 = (0);
var i__58367_58610 = (0);
while(true){
if((i__58367_58610 < count__58366_58609)){
var slot_key_58611 = chunk__58365_58608.cljs$core$IIndexed$_nth$arity$2(null,i__58367_58610);
frontend.db.subs.notify_BANG_(slot_key_58611);


var G__58612 = seq__58364_58607;
var G__58613 = chunk__58365_58608;
var G__58614 = count__58366_58609;
var G__58615 = (i__58367_58610 + (1));
seq__58364_58607 = G__58612;
chunk__58365_58608 = G__58613;
count__58366_58609 = G__58614;
i__58367_58610 = G__58615;
continue;
} else {
var temp__5825__auto___58616 = cljs.core.seq(seq__58364_58607);
if(temp__5825__auto___58616){
var seq__58364_58617__$1 = temp__5825__auto___58616;
if(cljs.core.chunked_seq_QMARK_(seq__58364_58617__$1)){
var c__5673__auto___58618 = cljs.core.chunk_first(seq__58364_58617__$1);
var G__58619 = cljs.core.chunk_rest(seq__58364_58617__$1);
var G__58620 = c__5673__auto___58618;
var G__58621 = cljs.core.count(c__5673__auto___58618);
var G__58622 = (0);
seq__58364_58607 = G__58619;
chunk__58365_58608 = G__58620;
count__58366_58609 = G__58621;
i__58367_58610 = G__58622;
continue;
} else {
var slot_key_58623 = cljs.core.first(seq__58364_58617__$1);
frontend.db.subs.notify_BANG_(slot_key_58623);


var G__58624 = cljs.core.next(seq__58364_58617__$1);
var G__58625 = null;
var G__58626 = (0);
var G__58627 = (0);
seq__58364_58607 = G__58624;
chunk__58365_58608 = G__58625;
count__58366_58609 = G__58626;
i__58367_58610 = G__58627;
continue;
}
} else {
}
}
break;
}
}

return stale_response_QMARK_;
});

frontend.db.subs.current_request_QMARK_ = (function frontend$db$subs$current_request_QMARK_(slot_key,token,graph_id,generation){
var store = cljs.core.deref(frontend.db.subs._STAR_store);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(graph_id,new cljs.core.Keyword(null,"graph-id","graph-id",-205404489).cljs$core$IFn$_invoke$arity$1(store))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(generation,new cljs.core.Keyword(null,"generation","generation",-2132542044).cljs$core$IFn$_invoke$arity$1(store))) && ((token === cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.db.subs._STAR_in_flight),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot_key,new cljs.core.Keyword(null,"token","token",-1211463215)], null)))))));
});
frontend.db.subs.finish_request_BANG_ = (function frontend$db$subs$finish_request_BANG_(slot_key,token){
var reload_QMARK_ = cljs.core.volatile_BANG_(false);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.db.subs._STAR_in_flight,(function (requests){
if((token === cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(requests,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot_key,new cljs.core.Keyword(null,"token","token",-1211463215)], null)))){
cljs.core.vreset_BANG_(reload_QMARK_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(requests,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot_key,new cljs.core.Keyword(null,"reload?","reload?",-1559406964)], null)));

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(requests,slot_key);
} else {
return requests;
}
}));

if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.deref(reload_QMARK_);
if(cljs.core.truth_(and__5140__auto__)){
return frontend.db.subs.mounted_QMARK_(slot_key);
} else {
return and__5140__auto__;
}
})())){
return (frontend.db.subs.start_load_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.subs.start_load_BANG_.cljs$core$IFn$_invoke$arity$1(slot_key) : frontend.db.subs.start_load_BANG_.call(null,slot_key));
} else {
return null;
}
});
frontend.db.subs.load_error_BANG_ = (function frontend$db$subs$load_error_BANG_(slot_key,error){
var changed_QMARK_ = cljs.core.volatile_BANG_(false);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.db.subs._STAR_store,(function (store){
var current = frontend.db.subs.store_slot(store,slot_key);
if(cljs.core.truth_((function (){var or__5142__auto__ = (current == null);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword(null,"stale?","stale?",-42449365).cljs$core$IFn$_invoke$arity$1(current);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710),new cljs.core.Keyword(null,"status","status",-1997798413)], null)));
}
}
})())){
cljs.core.vreset_BANG_(changed_QMARK_,true);

return frontend.db.subs.reindex_slot(cljs.core.assoc_in(store,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slots","slots",276818598),slot_key], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032),error], null)], null)),slot_key,current,null);
} else {
return store;
}
}));

if(cljs.core.truth_(cljs.core.deref(changed_QMARK_))){
return frontend.db.subs.notify_BANG_(slot_key);
} else {
return null;
}
});
frontend.db.subs.load_slot = (function frontend$db$subs$load_slot(graph_id,p__58382){
var vec__58383 = p__58382;
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58383,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58383,(1),null);
var G__58386 = kind;
var G__58386__$1 = (((G__58386 instanceof cljs.core.Keyword))?G__58386.fqn:null);
switch (G__58386__$1) {
case "block":
return frontend.db.subs._LT_load_block(graph_id,key);

break;
case "children":
return frontend.db.subs._LT_load_children(graph_id,key);

break;
case "resource":
return frontend.db.subs._LT_load_resource(graph_id,key);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58386__$1))));

}
});
frontend.db.subs.start_load_BANG_ = (function frontend$db$subs$start_load_BANG_(slot_key){
if(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword(null,"graph-id","graph-id",-205404489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.db.subs._STAR_store));
if(cljs.core.truth_(and__5140__auto__)){
return (!(cljs.core.contains_QMARK_(cljs.core.deref(frontend.db.subs._STAR_in_flight),slot_key)));
} else {
return and__5140__auto__;
}
})())){
var map__58396 = cljs.core.deref(frontend.db.subs._STAR_store);
var map__58396__$1 = cljs.core.__destructure_map(map__58396);
var graph_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58396__$1,new cljs.core.Keyword(null,"graph-id","graph-id",-205404489));
var generation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58396__$1,new cljs.core.Keyword(null,"generation","generation",-2132542044));
var token = ({});
var request = (function (){try{return frontend.db.subs.load_slot(graph_id,slot_key);
}catch (e58399){var error = e58399;
return promesa.core.rejected(error);
}})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.db.subs._STAR_in_flight,cljs.core.assoc,slot_key,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"token","token",-1211463215),token,new cljs.core.Keyword(null,"dirty-keys","dirty-keys",-109106982),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"dirty-slots","dirty-slots",-1761898471),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"reload?","reload?",-1559406964),false], null));

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(request,(function (response){
if(frontend.db.subs.current_request_QMARK_(slot_key,token,graph_id,generation)){
if(cljs.core.truth_(frontend.db.subs.apply_patch_BANG_(generation,slot_key,response))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.db.subs._STAR_in_flight,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot_key,new cljs.core.Keyword(null,"reload?","reload?",-1559406964)], null),true);
} else {
return null;
}
} else {
return null;
}
})),(function (error){
if(frontend.db.subs.current_request_QMARK_(slot_key,token,graph_id,generation)){
return frontend.db.subs.load_error_BANG_(slot_key,error);
} else {
return null;
}
})),(function (){
return frontend.db.subs.finish_request_BANG_(slot_key,token);
}));
} else {
return null;
}
});
frontend.db.subs.request_reload_BANG_ = (function frontend$db$subs$request_reload_BANG_(slot_key){
if(cljs.core.contains_QMARK_(cljs.core.deref(frontend.db.subs._STAR_in_flight),slot_key)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.db.subs._STAR_in_flight,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot_key,new cljs.core.Keyword(null,"reload?","reload?",-1559406964)], null),true);
} else {
return frontend.db.subs.start_load_BANG_(slot_key);
}
});
frontend.db.subs.clear_query_reloads_BANG_ = (function frontend$db$subs$clear_query_reloads_BANG_(){
var temp__5825__auto___58639 = new cljs.core.Keyword(null,"timer-id","timer-id",1622357927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.db.subs._STAR_query_reloads));
if(cljs.core.truth_(temp__5825__auto___58639)){
var timer_id_58640 = temp__5825__auto___58639;
frontend.db.subs.clear_query_reload_timeout_BANG_(timer_id_58640);
} else {
}

return cljs.core.reset_BANG_(frontend.db.subs._STAR_query_reloads,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timer-id","timer-id",1622357927),null,new cljs.core.Keyword(null,"slot-keys","slot-keys",2090388953),cljs.core.PersistentHashSet.EMPTY], null));
});
frontend.db.subs.flush_query_reloads_BANG_ = (function frontend$db$subs$flush_query_reloads_BANG_(){
var slot_keys = new cljs.core.Keyword(null,"slot-keys","slot-keys",2090388953).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.db.subs._STAR_query_reloads));
cljs.core.reset_BANG_(frontend.db.subs._STAR_query_reloads,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timer-id","timer-id",1622357927),null,new cljs.core.Keyword(null,"slot-keys","slot-keys",2090388953),cljs.core.PersistentHashSet.EMPTY], null));

var seq__58407 = cljs.core.seq(slot_keys);
var chunk__58408 = null;
var count__58409 = (0);
var i__58410 = (0);
while(true){
if((i__58410 < count__58409)){
var slot_key = chunk__58408.cljs$core$IIndexed$_nth$arity$2(null,i__58410);
if(frontend.db.subs.mounted_QMARK_(slot_key)){
frontend.db.subs.request_reload_BANG_(slot_key);
} else {
}


var G__58646 = seq__58407;
var G__58647 = chunk__58408;
var G__58648 = count__58409;
var G__58649 = (i__58410 + (1));
seq__58407 = G__58646;
chunk__58408 = G__58647;
count__58409 = G__58648;
i__58410 = G__58649;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__58407);
if(temp__5825__auto__){
var seq__58407__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58407__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__58407__$1);
var G__58650 = cljs.core.chunk_rest(seq__58407__$1);
var G__58651 = c__5673__auto__;
var G__58652 = cljs.core.count(c__5673__auto__);
var G__58653 = (0);
seq__58407 = G__58650;
chunk__58408 = G__58651;
count__58409 = G__58652;
i__58410 = G__58653;
continue;
} else {
var slot_key = cljs.core.first(seq__58407__$1);
if(frontend.db.subs.mounted_QMARK_(slot_key)){
frontend.db.subs.request_reload_BANG_(slot_key);
} else {
}


var G__58654 = cljs.core.next(seq__58407__$1);
var G__58655 = null;
var G__58656 = (0);
var G__58657 = (0);
seq__58407 = G__58654;
chunk__58408 = G__58655;
count__58409 = G__58656;
i__58410 = G__58657;
continue;
}
} else {
return null;
}
}
break;
}
});
frontend.db.subs.schedule_resource_reload_BANG_ = (function frontend$db$subs$schedule_resource_reload_BANG_(p__58421){
var vec__58422 = p__58421;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58422,(0),null);
var resource_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58422,(1),null);
var slot_key = vec__58422;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.first(resource_key))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.db.subs._STAR_query_reloads,(function (p__58425){
var map__58426 = p__58425;
var map__58426__$1 = cljs.core.__destructure_map(map__58426);
var timer_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58426__$1,new cljs.core.Keyword(null,"timer-id","timer-id",1622357927));
var slot_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58426__$1,new cljs.core.Keyword(null,"slot-keys","slot-keys",2090388953));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timer-id","timer-id",1622357927),(function (){var or__5142__auto__ = timer_id;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.db.subs.set_query_reload_timeout_BANG_(frontend.db.subs.flush_query_reloads_BANG_,(2000));
}
})(),new cljs.core.Keyword(null,"slot-keys","slot-keys",2090388953),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(slot_keys,slot_key)], null);
}));
} else {
return frontend.db.subs.request_reload_BANG_(slot_key);
}
});
frontend.db.subs.reset_graph_BANG_ = (function frontend$db$subs$reset_graph_BANG_(graph_id){
var generation_58658 = (new cljs.core.Keyword(null,"generation","generation",-2132542044).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.db.subs._STAR_store)) + (1));
var resource_slot_keys_58659 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__58428_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"resource","resource",251898836),cljs.core.first(p1__58428_SHARP_));
})),cljs.core.keys(cljs.core.deref(frontend.db.subs._STAR_listeners)));
var listeners_58660 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vals,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(cljs.core.deref(frontend.db.subs._STAR_listeners))], 0));
var error_58661 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Graph changed during renderer load",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"graph-id","graph-id",-205404489),graph_id], null));
frontend.db.subs.clear_query_reloads_BANG_();

cljs.core.reset_BANG_(frontend.db.subs._STAR_store,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.db.subs.empty_store(graph_id,generation_58658),new cljs.core.Keyword(null,"resource-slot-keys","resource-slot-keys",-1642015058),resource_slot_keys_58659));

cljs.core.reset_BANG_(frontend.db.subs._STAR_in_flight,cljs.core.PersistentArrayMap.EMPTY);

frontend.db.subs_loader.reject_pending_BANG_(error_58661);

cljs.core.run_BANG_((function (listener){
return (listener.cljs$core$IFn$_invoke$arity$0 ? listener.cljs$core$IFn$_invoke$arity$0() : listener.call(null));
}),listeners_58660);

return null;
});
frontend.db.subs.retry_mounted_errors_BANG_ = (function frontend$db$subs$retry_mounted_errors_BANG_(_key,_ref,_old_value,ready_QMARK_){
if(cljs.core.truth_(ready_QMARK_)){
var seq__58437 = cljs.core.seq(cljs.core.keys(cljs.core.deref(frontend.db.subs._STAR_listeners)));
var chunk__58439 = null;
var count__58440 = (0);
var i__58441 = (0);
while(true){
if((i__58441 < count__58440)){
var slot_key = chunk__58439.cljs$core$IIndexed$_nth$arity$2(null,i__58441);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.db.subs.store_slot(cljs.core.deref(frontend.db.subs._STAR_store),slot_key),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710),new cljs.core.Keyword(null,"status","status",-1997798413)], null)))){
frontend.db.subs.start_load_BANG_(slot_key);


var G__58663 = seq__58437;
var G__58664 = chunk__58439;
var G__58665 = count__58440;
var G__58666 = (i__58441 + (1));
seq__58437 = G__58663;
chunk__58439 = G__58664;
count__58440 = G__58665;
i__58441 = G__58666;
continue;
} else {
var G__58667 = seq__58437;
var G__58668 = chunk__58439;
var G__58669 = count__58440;
var G__58670 = (i__58441 + (1));
seq__58437 = G__58667;
chunk__58439 = G__58668;
count__58440 = G__58669;
i__58441 = G__58670;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__58437);
if(temp__5825__auto__){
var seq__58437__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58437__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__58437__$1);
var G__58671 = cljs.core.chunk_rest(seq__58437__$1);
var G__58672 = c__5673__auto__;
var G__58673 = cljs.core.count(c__5673__auto__);
var G__58674 = (0);
seq__58437 = G__58671;
chunk__58439 = G__58672;
count__58440 = G__58673;
i__58441 = G__58674;
continue;
} else {
var slot_key = cljs.core.first(seq__58437__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.db.subs.store_slot(cljs.core.deref(frontend.db.subs._STAR_store),slot_key),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710),new cljs.core.Keyword(null,"status","status",-1997798413)], null)))){
frontend.db.subs.start_load_BANG_(slot_key);


var G__58675 = cljs.core.next(seq__58437__$1);
var G__58676 = null;
var G__58677 = (0);
var G__58678 = (0);
seq__58437 = G__58675;
chunk__58439 = G__58676;
count__58440 = G__58677;
i__58441 = G__58678;
continue;
} else {
var G__58680 = cljs.core.next(seq__58437__$1);
var G__58681 = null;
var G__58682 = (0);
var G__58683 = (0);
seq__58437 = G__58680;
chunk__58439 = G__58681;
count__58440 = G__58682;
i__58441 = G__58683;
continue;
}
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
cljs.core.add_watch(frontend.state.db_worker_ready_QMARK_,new cljs.core.Keyword("frontend.db.subs","retry-mounted-errors","frontend.db.subs/retry-mounted-errors",1051769872),frontend.db.subs.retry_mounted_errors_BANG_);
frontend.db.subs.subscribe_BANG_ = (function frontend$db$subs$subscribe_BANG_(slot_key,listener){
var listener_id = cljs.core.random_uuid();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.db.subs._STAR_listeners,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot_key,listener_id], null),listener);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.db.subs._STAR_store,(function (store){
var store__$1 = (function (){var G__58469 = store;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"resource","resource",251898836),cljs.core.first(slot_key))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__58469,new cljs.core.Keyword(null,"resource-slot-keys","resource-slot-keys",-1642015058),cljs.core.conj,slot_key);
} else {
return G__58469;
}
})();
var temp__5823__auto__ = cljs.cache.lookup(new cljs.core.Keyword(null,"warm","warm",608437969).cljs$core$IFn$_invoke$arity$1(store__$1),slot_key);
if(cljs.core.truth_(temp__5823__auto__)){
var slot = temp__5823__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(store__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slots","slots",276818598),slot_key], null),slot),new cljs.core.Keyword(null,"warm","warm",608437969),cljs.cache.evict,slot_key);
} else {
return store__$1;
}
}));

var slot_58685 = frontend.db.subs.store_slot(cljs.core.deref(frontend.db.subs._STAR_store),slot_key);
if(cljs.core.truth_((function (){var or__5142__auto__ = (slot_58685 == null);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword(null,"stale?","stale?",-42449365).cljs$core$IFn$_invoke$arity$1(slot_58685);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(slot_58685,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710),new cljs.core.Keyword(null,"status","status",-1997798413)], null)));
}
}
})())){
frontend.db.subs.start_load_BANG_(slot_key);
} else {
}

return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.db.subs._STAR_listeners,cljs.core.update,slot_key,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([listener_id], 0));

if(frontend.db.subs.mounted_QMARK_(slot_key)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.db.subs._STAR_listeners,cljs.core.dissoc,slot_key);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.db.subs._STAR_in_flight,cljs.core.dissoc,slot_key);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.db.subs._STAR_store,(function (store){
var resource_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"resource","resource",251898836),cljs.core.first(slot_key));
var store__$1 = ((resource_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(store,new cljs.core.Keyword(null,"resource-slot-keys","resource-slot-keys",-1642015058),cljs.core.disj,slot_key):store);
var temp__5823__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(store__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slots","slots",276818598),slot_key], null));
if(cljs.core.truth_(temp__5823__auto__)){
var slot = temp__5823__auto__;
if(resource_QMARK_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(store__$1,new cljs.core.Keyword(null,"slots","slots",276818598),cljs.core.dissoc,slot_key);
} else {
return frontend.db.subs.warm_miss(cljs.core.update.cljs$core$IFn$_invoke$arity$4(store__$1,new cljs.core.Keyword(null,"slots","slots",276818598),cljs.core.dissoc,slot_key),slot_key,slot);
}
} else {
return store__$1;
}
}));
}
});
});
frontend.db.subs.subscribe_block_BANG_ = (function frontend$db$subs$subscribe_block_BANG_(block_uuid,listener){
frontend.db.subs.require_uuid_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid);

return frontend.db.subs.subscribe_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),block_uuid], null),listener);
});
frontend.db.subs.subscribe_children_BANG_ = (function frontend$db$subs$subscribe_children_BANG_(parent_uuid,listener){
frontend.db.subs.require_uuid_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),parent_uuid);

return frontend.db.subs.subscribe_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),parent_uuid], null),listener);
});
frontend.db.subs.subscribe_resource_BANG_ = (function frontend$db$subs$subscribe_resource_BANG_(resource_key,listener){
return frontend.db.subs.subscribe_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource","resource",251898836),resource_key], null),listener);
});
frontend.db.subs.put_delta_slot = (function frontend$db$subs$put_delta_slot(store,slot_key,next_slot){
var current = frontend.db.subs.store_slot(store,slot_key);
if(cljs.core.truth_((function (){var or__5142__auto__ = (frontend.db.subs.slot_revision(current) > new cljs.core.Keyword(null,"rev","rev",12702670).cljs$core$IFn$_invoke$arity$1(store));
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block","block",664686210),cljs.core.first(slot_key));
if(and__5140__auto__){
return frontend.db.subs.same_block_projection_QMARK_(current,next_slot);
} else {
return and__5140__auto__;
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [store,false], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.db.subs.put_slot(store,slot_key,next_slot),cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current,next_slot)], null);
}
});
frontend.db.subs.record_delta_slot = (function frontend$db$subs$record_delta_slot(store,changed,slot_key,next_slot){
var vec__58490 = frontend.db.subs.put_delta_slot(store,slot_key,next_slot);
var store__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58490,(0),null);
var changed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58490,(1),null);
if(cljs.core.truth_(changed_QMARK_)){
cljs.core._vreset_BANG_(changed,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(changed),slot_key));
} else {
}

return store__$1;
});
frontend.db.subs.children_slot = (function frontend$db$subs$children_slot(rev,tx_id,items){
return frontend.db.subs.ready_slot(rev,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,items),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tx-id","tx-id",638275288),tx_id,new cljs.core.Keyword(null,"items","items",1031954938),items], null));
});
frontend.db.subs.patch_items = (function frontend$db$subs$patch_items(parent_uuid,items,removed,upsert){
var removed__$1 = cljs.core.set(frontend.db.subs.child_items_BANG_(parent_uuid,removed));
var upsert__$1 = frontend.db.subs.child_items_BANG_(parent_uuid,upsert);
var upsert_uuids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,upsert__$1));
return cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(upsert__$1,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__58497_SHARP_){
return ((cljs.core.contains_QMARK_(removed__$1,p1__58497_SHARP_)) || (cljs.core.contains_QMARK_(upsert_uuids,cljs.core.first(p1__58497_SHARP_))));
}),items))));
});
frontend.db.subs.invalidate_render_blocks = (function frontend$db$subs$invalidate_render_blocks(store,rev,blocks,affected_keys,reload){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (store__$1,slot_key){
if(cljs.core.contains_QMARK_(blocks,cljs.core.second(slot_key))){
return store__$1;
} else {
if(frontend.db.subs.mounted_QMARK_(slot_key)){
cljs.core._vreset_BANG_(reload,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(reload),slot_key));

return cljs.core.assoc_in(store__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slots","slots",276818598),slot_key], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(store__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slots","slots",276818598),slot_key], null)),new cljs.core.Keyword(null,"rev","rev",12702670),rev,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stale?","stale?",-42449365),true], 0)));
} else {
return frontend.db.subs.evict_warm(store__$1,slot_key);
}
}
}),store,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__58509_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"watch-index","watch-index",348160922).cljs$core$IFn$_invoke$arity$1(store),p1__58509_SHARP_);
})),affected_keys));
});
frontend.db.subs.apply_delta_store = (function frontend$db$subs$apply_delta_store(store,p__58528){
var map__58530 = p__58528;
var map__58530__$1 = cljs.core.__destructure_map(map__58530);
var rev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58530__$1,new cljs.core.Keyword(null,"rev","rev",12702670));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58530__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var deleted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58530__$1,new cljs.core.Keyword(null,"deleted","deleted",-510100639));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58530__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var affected_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58530__$1,new cljs.core.Keyword(null,"affected-keys","affected-keys",-2138165094));
var inserted = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__58518_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,new cljs.core.Keyword(null,"upsert","upsert",1416724984).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__58518_SHARP_)));
})),children);
var changed = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
var reload = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
var store__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(store,new cljs.core.Keyword(null,"rev","rev",12702670),rev);
var store__$2 = cljs.core.reduce_kv((function (store__$2,block_uuid,block){
var slot_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),block_uuid], null);
var current = frontend.db.subs.store_slot(store__$2,slot_key);
if(cljs.core.truth_((function (){var or__5142__auto__ = current;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return ((frontend.db.subs.mounted_QMARK_(slot_key)) || (cljs.core.contains_QMARK_(inserted,block_uuid)));
}
})())){
var block__$1 = frontend.db.subs.require_block_BANG_(block_uuid,block);
return frontend.db.subs.record_delta_slot(store__$2,changed,slot_key,frontend.db.subs.block_slot(rev,block__$1));
} else {
return store__$2;
}
}),store__$1,blocks);
var store__$3 = cljs.core.reduce_kv((function (store__$3,block_uuid,tombstone){
var slot_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),block_uuid], null);
var tombstone_rev = frontend.db.subs.require_revision_BANG_(new cljs.core.Keyword(null,"rev","rev",12702670),new cljs.core.Keyword(null,"rev","rev",12702670).cljs$core$IFn$_invoke$arity$1(tombstone));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rev,tombstone_rev)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Tombstone revision does not match delta",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),block_uuid], null));
}

if(cljs.core.truth_((function (){var or__5142__auto__ = frontend.db.subs.store_slot(store__$3,slot_key);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.db.subs.mounted_QMARK_(slot_key);
}
})())){
return frontend.db.subs.record_delta_slot(store__$3,changed,slot_key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rev","rev",12702670),rev,new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"missing","missing",362507769)], null)], null));
} else {
return store__$3;
}
}),store__$2,deleted);
var store__$4 = cljs.core.reduce_kv((function (store__$4,parent_uuid,p__58537){
var map__58539 = p__58537;
var map__58539__$1 = cljs.core.__destructure_map(map__58539);
var removed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58539__$1,new cljs.core.Keyword(null,"remove","remove",-131428414));
var patch_rev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58539__$1,new cljs.core.Keyword(null,"rev","rev",12702670));
var base_rev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58539__$1,new cljs.core.Keyword(null,"base-rev","base-rev",729683045));
var upsert = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58539__$1,new cljs.core.Keyword(null,"upsert","upsert",1416724984));
frontend.db.subs.require_revision_BANG_(new cljs.core.Keyword(null,"base-rev","base-rev",729683045),base_rev);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rev,frontend.db.subs.require_revision_BANG_(new cljs.core.Keyword(null,"rev","rev",12702670),patch_rev))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Child patch revision does not match delta",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent-uuid","parent-uuid",-2003485227),parent_uuid], null));
}

var slot_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),parent_uuid], null);
var current = frontend.db.subs.store_slot(store__$4,slot_key);
var parent_tx_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(blocks,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_uuid,new cljs.core.Keyword("block","tx-id","block/tx-id",547556161)], null));
if(cljs.core.truth_((function (){var and__5140__auto__ = current;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ready","ready",1086465795),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710),new cljs.core.Keyword(null,"status","status",-1997798413)], null)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_rev,new cljs.core.Keyword(null,"basis-rev","basis-rev",-1470394588).cljs$core$IFn$_invoke$arity$1(current))) || (((frontend.db.subs.mounted_QMARK_(slot_key)) && ((new cljs.core.Keyword(null,"basis-rev","basis-rev",-1470394588).cljs$core$IFn$_invoke$arity$1(current) < base_rev)))))));
} else {
return and__5140__auto__;
}
})())){
var items = frontend.db.subs.patch_items(parent_uuid,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(current),removed,upsert);
return frontend.db.subs.record_delta_slot(store__$4,changed,slot_key,frontend.db.subs.children_slot(rev,new cljs.core.Keyword(null,"tx-id","tx-id",638275288).cljs$core$IFn$_invoke$arity$1(current),items));
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = (current == null);
if(and__5140__auto__){
var and__5140__auto____$1 = parent_tx_id;
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.contains_QMARK_(inserted,parent_uuid);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
var items = frontend.db.subs.patch_items(parent_uuid,cljs.core.PersistentVector.EMPTY,removed,upsert);
return frontend.db.subs.record_delta_slot(store__$4,changed,slot_key,frontend.db.subs.children_slot(rev,parent_tx_id,items));
} else {
if(frontend.db.subs.mounted_QMARK_(slot_key)){
reload.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(reload.cljs$core$IDeref$_deref$arity$1(null),slot_key));

return cljs.core.assoc_in(store__$4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slots","slots",276818598),slot_key], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rev","rev",12702670),rev,new cljs.core.Keyword(null,"stale?","stale?",-42449365),true], null));
} else {
if(cljs.core.truth_(current)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(store__$4,new cljs.core.Keyword(null,"warm","warm",608437969),cljs.cache.evict,slot_key);
} else {
return store__$4;

}
}
}
}
}),store__$3,children);
var store__$5 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (store__$5,slot_key){
var slot = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(store__$5,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slots","slots",276818598),slot_key], null));
var owner = cljs.core.second(cljs.core.second(slot_key));
var watch = new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$1(slot);
if(((cljs.core.uuid_QMARK_(owner)) && (cljs.core.contains_QMARK_(deleted,owner)))){
changed.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(changed.cljs$core$IDeref$_deref$arity$1(null),slot_key));

return cljs.core.assoc_in(store__$5,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slots","slots",276818598),slot_key], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rev","rev",12702670),rev,new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"missing","missing",362507769)], null)], null));
} else {
if(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"all?","all?",1103779750).cljs$core$IFn$_invoke$arity$1(watch);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(affected_keys,new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(watch)));
}
})())){
reload.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(reload.cljs$core$IDeref$_deref$arity$1(null),slot_key));

return cljs.core.assoc_in(store__$5,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slots","slots",276818598),slot_key,new cljs.core.Keyword(null,"stale?","stale?",-42449365)], null),true);
} else {
return store__$5;

}
}
}),store__$4,new cljs.core.Keyword(null,"resource-slot-keys","resource-slot-keys",-1642015058).cljs$core$IFn$_invoke$arity$1(store__$4));
var store__$6 = frontend.db.subs.invalidate_render_blocks(store__$5,rev,blocks,affected_keys,reload);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [store__$6,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changed","changed",570724917),cljs.core.deref(changed),new cljs.core.Keyword(null,"reload","reload",863702807),cljs.core.deref(reload)], null)], null);
});
frontend.db.subs.apply_delta_BANG_ = (function frontend$db$subs$apply_delta_BANG_(p__58548){
var map__58551 = p__58548;
var map__58551__$1 = cljs.core.__destructure_map(map__58551);
var delta = map__58551__$1;
var graph_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58551__$1,new cljs.core.Keyword(null,"graph-id","graph-id",-205404489));
var rev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58551__$1,new cljs.core.Keyword(null,"rev","rev",12702670));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58551__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var deleted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58551__$1,new cljs.core.Keyword(null,"deleted","deleted",-510100639));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58551__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var affected_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58551__$1,new cljs.core.Keyword(null,"affected-keys","affected-keys",-2138165094));
if(((cljs.core.map_QMARK_(delta)) && (((cljs.core.map_QMARK_(blocks)) && (((cljs.core.map_QMARK_(deleted)) && (((cljs.core.map_QMARK_(children)) && (cljs.core.set_QMARK_(affected_keys)))))))))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid renderer delta",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delta","delta",108939957),delta], null));
}

frontend.db.subs.require_revision_BANG_(new cljs.core.Keyword(null,"rev","rev",12702670),rev);

var effects = cljs.core.volatile_BANG_(null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.db.subs._STAR_store,(function (store){
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(graph_id,new cljs.core.Keyword(null,"graph-id","graph-id",-205404489).cljs$core$IFn$_invoke$arity$1(store))) || ((rev <= new cljs.core.Keyword(null,"rev","rev",12702670).cljs$core$IFn$_invoke$arity$1(store))))){
return store;
} else {
var vec__58557 = frontend.db.subs.apply_delta_store(store,delta);
var store__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58557,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58557,(1),null);
cljs.core.vreset_BANG_(effects,result);

return store__$1;
}
}));

var temp__5825__auto__ = cljs.core.deref(effects);
if(cljs.core.truth_(temp__5825__auto__)){
var map__58560 = temp__5825__auto__;
var map__58560__$1 = cljs.core.__destructure_map(map__58560);
var changed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58560__$1,new cljs.core.Keyword(null,"changed","changed",570724917));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58560__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var dirty_slots_58696 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58545_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"block","block",664686210),p1__58545_SHARP_],null));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(blocks),cljs.core.keys(deleted))),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58546_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),p1__58546_SHARP_],null));
}),cljs.core.keys(children))));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.db.subs._STAR_in_flight,(function (requests){
return cljs.core.reduce_kv((function (requests__$1,slot_key,request){
var G__58565 = cljs.core.first(slot_key);
var G__58565__$1 = (((G__58565 instanceof cljs.core.Keyword))?G__58565.fqn:null);
switch (G__58565__$1) {
case "resource":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(requests__$1,slot_key,cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(request,new cljs.core.Keyword(null,"dirty-keys","dirty-keys",-109106982),cljs.core.into,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(affected_keys,new cljs.core.Keyword("frontend.db.subs","changed","frontend.db.subs/changed",-1227893772))),new cljs.core.Keyword(null,"dirty-slots","dirty-slots",-1761898471),cljs.core.into,dirty_slots_58696));

break;
case "block":
case "children":
if(cljs.core.seq(affected_keys)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(requests__$1,slot_key,cljs.core.update.cljs$core$IFn$_invoke$arity$4(request,new cljs.core.Keyword(null,"dirty-keys","dirty-keys",-109106982),clojure.set.union,affected_keys));
} else {
return requests__$1;
}

break;
default:
return requests__$1;

}
}),requests,requests);
}));

cljs.core.run_BANG_(frontend.db.subs.notify_BANG_,changed);

cljs.core.run_BANG_((function (slot_key){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"resource","resource",251898836),cljs.core.first(slot_key))){
frontend.db.subs.schedule_resource_reload_BANG_(slot_key);
} else {
}

if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"block","block",664686210),null], null), null),cljs.core.first(slot_key))){
return frontend.db.subs.request_reload_BANG_(slot_key);
} else {
return null;
}
}),reload);

return true;
} else {
return null;
}
});

//# sourceMappingURL=frontend.db.subs.js.map
