goog.provide('frontend.db.subs_loader');
frontend.db.subs_loader.view_resource_kinds = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view-data","view-data",461796245),null,new cljs.core.Keyword(null,"views","views",1450155487),null], null), null);
frontend.db.subs_loader.flush_kind_order = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view-resources","view-resources",-1497752356),new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"resources","resources",1632806811)], null);
frontend.db.subs_loader.limits = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"view-resources","view-resources",-1497752356),(25),new cljs.core.Keyword(null,"resources","resources",1632806811),(25),new cljs.core.Keyword(null,"blocks","blocks",-610462153),(1000),new cljs.core.Keyword(null,"children","children",-940561982),(25)], null);
frontend.db.subs_loader.slot_kind = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"resource","resource",251898836),new cljs.core.Keyword(null,"resources","resources",1632806811)], null);
frontend.db.subs_loader.cancelled_error = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Renderer snapshot load cancelled",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("frontend.db.subs-loader","cancelled","frontend.db.subs-loader/cancelled",-555763209),true], null));
/**
 * view-data/views must leave in their own request. A mixed resource
 *   batch waits on block-ref-count before the first table window can paint.
 */
frontend.db.subs_loader.entry_flush_kind = (function frontend$db$subs_loader$entry_flush_kind(p__58053){
var map__58054 = p__58053;
var map__58054__$1 = cljs.core.__destructure_map(map__58054);
var slot_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58054__$1,new cljs.core.Keyword(null,"slot-key","slot-key",646563234));
var slot = cljs.core.first(slot_key);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"resource","resource",251898836),slot)){
var resource_kind = cljs.core.first(cljs.core.second(slot_key));
if(cljs.core.contains_QMARK_(frontend.db.subs_loader.view_resource_kinds,resource_kind)){
return new cljs.core.Keyword(null,"view-resources","view-resources",-1497752356);
} else {
return new cljs.core.Keyword(null,"resources","resources",1632806811);
}
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"children","children",-940561982)], null),slot);
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.db !== 'undefined') && (typeof frontend.db.subs_loader !== 'undefined') && (typeof frontend.db.subs_loader._STAR_batch !== 'undefined')){
} else {
frontend.db.subs_loader._STAR_batch = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof frontend !== 'undefined') && (typeof frontend.db !== 'undefined') && (typeof frontend.db.subs_loader !== 'undefined') && (typeof frontend.db.subs_loader._STAR_flushing_QMARK_ !== 'undefined')){
} else {
frontend.db.subs_loader._STAR_flushing_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof frontend !== 'undefined') && (typeof frontend.db !== 'undefined') && (typeof frontend.db.subs_loader !== 'undefined') && (typeof frontend.db.subs_loader._STAR_still_wanted_fn !== 'undefined')){
} else {
frontend.db.subs_loader._STAR_still_wanted_fn = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constantly(true));
}
frontend.db.subs_loader.set_still_wanted_fn_BANG_ = (function frontend$db$subs_loader$set_still_wanted_fn_BANG_(f){
return cljs.core.reset_BANG_(frontend.db.subs_loader._STAR_still_wanted_fn,f);
});
frontend.db.subs_loader.reject_BANG_ = (function frontend$db$subs_loader$reject_BANG_(entries,error){
var seq__58069 = cljs.core.seq(entries);
var chunk__58070 = null;
var count__58071 = (0);
var i__58073 = (0);
while(true){
if((i__58073 < count__58071)){
var map__58085 = chunk__58070.cljs$core$IIndexed$_nth$arity$2(null,i__58073);
var map__58085__$1 = cljs.core.__destructure_map(map__58085);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58085__$1,new cljs.core.Keyword(null,"result","result",1415092211));
promesa.core.reject_BANG_(result,error);


var G__58215 = seq__58069;
var G__58216 = chunk__58070;
var G__58217 = count__58071;
var G__58218 = (i__58073 + (1));
seq__58069 = G__58215;
chunk__58070 = G__58216;
count__58071 = G__58217;
i__58073 = G__58218;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__58069);
if(temp__5825__auto__){
var seq__58069__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58069__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__58069__$1);
var G__58220 = cljs.core.chunk_rest(seq__58069__$1);
var G__58221 = c__5673__auto__;
var G__58222 = cljs.core.count(c__5673__auto__);
var G__58223 = (0);
seq__58069 = G__58220;
chunk__58070 = G__58221;
count__58071 = G__58222;
i__58073 = G__58223;
continue;
} else {
var map__58091 = cljs.core.first(seq__58069__$1);
var map__58091__$1 = cljs.core.__destructure_map(map__58091);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58091__$1,new cljs.core.Keyword(null,"result","result",1415092211));
promesa.core.reject_BANG_(result,error);


var G__58224 = cljs.core.next(seq__58069__$1);
var G__58225 = null;
var G__58226 = (0);
var G__58227 = (0);
seq__58069 = G__58224;
chunk__58070 = G__58225;
count__58071 = G__58226;
i__58073 = G__58227;
continue;
}
} else {
return null;
}
}
break;
}
});
frontend.db.subs_loader.take_batch_BANG_ = (function frontend$db$subs_loader$take_batch_BANG_(){
var entries = cljs.core.vals(cljs.core.deref(frontend.db.subs_loader._STAR_batch));
cljs.core.reset_BANG_(frontend.db.subs_loader._STAR_batch,cljs.core.PersistentArrayMap.EMPTY);

return entries;
});
frontend.db.subs_loader.entry_key = (function frontend$db$subs_loader$entry_key(p__58109){
var map__58110 = p__58109;
var map__58110__$1 = cljs.core.__destructure_map(map__58110);
var graph_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58110__$1,new cljs.core.Keyword(null,"graph-id","graph-id",-205404489));
var slot_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58110__$1,new cljs.core.Keyword(null,"slot-key","slot-key",646563234));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [graph_id,slot_key], null);
});
frontend.db.subs_loader.put_back_BANG_ = (function frontend$db$subs_loader$put_back_BANG_(entries){
if(cljs.core.seq(entries)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.db.subs_loader._STAR_batch,(function (batch){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (batch__$1,entry){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(batch__$1,frontend.db.subs_loader.entry_key(entry),entry);
}),batch,entries);
}));
} else {
return null;
}
});
/**
 * Flush view-data first, then blocks, then children, then other resources.
 *   One mixed batch used to wait on open-block-tree or block-ref-count
 *   before Tags/All Pages could paint their first window. Blocks and children
 *   leave before other resources so an open page's own blocks do not queue
 *   behind its title decorations and linked references.
 */
frontend.db.subs_loader.request_groups = (function frontend$db$subs_loader$request_groups(entries){
var entries_by_kind = cljs.core.group_by(frontend.db.subs_loader.entry_flush_kind,entries);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (kind){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.db.subs_loader.limits,kind),cljs.core.get.cljs$core$IFn$_invoke$arity$2(entries_by_kind,kind)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.db.subs_loader.flush_kind_order], 0));
});
frontend.db.subs_loader.worker_request = (function frontend$db$subs_loader$worker_request(entries){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (request,p__58133){
var map__58134 = p__58133;
var map__58134__$1 = cljs.core.__destructure_map(map__58134);
var slot_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58134__$1,new cljs.core.Keyword(null,"slot-key","slot-key",646563234));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(request,(function (){var G__58137 = cljs.core.first(slot_key);
return (frontend.db.subs_loader.slot_kind.cljs$core$IFn$_invoke$arity$1 ? frontend.db.subs_loader.slot_kind.cljs$core$IFn$_invoke$arity$1(G__58137) : frontend.db.subs_loader.slot_kind.call(null,G__58137));
})(),cljs.core.conj,cljs.core.second(slot_key));
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"resources","resources",1632806811),cljs.core.PersistentVector.EMPTY], null),entries);
});
frontend.db.subs_loader.still_wanted_QMARK_ = (function frontend$db$subs_loader$still_wanted_QMARK_(p__58143){
var map__58147 = p__58143;
var map__58147__$1 = cljs.core.__destructure_map(map__58147);
var slot_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58147__$1,new cljs.core.Keyword(null,"slot-key","slot-key",646563234));
return cljs.core.boolean$((function (){var fexpr__58150 = cljs.core.deref(frontend.db.subs_loader._STAR_still_wanted_fn);
return (fexpr__58150.cljs$core$IFn$_invoke$arity$1 ? fexpr__58150.cljs$core$IFn$_invoke$arity$1(slot_key) : fexpr__58150.call(null,slot_key));
})());
});
frontend.db.subs_loader.take_next_request_group_BANG_ = (function frontend$db$subs_loader$take_next_request_group_BANG_(){
var entries = frontend.db.subs_loader.take_batch_BANG_();
var map__58155 = cljs.core.group_by(frontend.db.subs_loader.still_wanted_QMARK_,entries);
var map__58155__$1 = cljs.core.__destructure_map(map__58155);
var wanted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58155__$1,true);
var cancelled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58155__$1,false);
frontend.db.subs_loader.reject_BANG_(cancelled,frontend.db.subs_loader.cancelled_error);

var temp__5825__auto__ = cljs.core.first(cljs.core.group_by(new cljs.core.Keyword(null,"graph-id","graph-id",-205404489),wanted));
if(cljs.core.truth_(temp__5825__auto__)){
var vec__58156 = temp__5825__auto__;
var graph_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58156,(0),null);
var graph_entries = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58156,(1),null);
var groups = frontend.db.subs_loader.request_groups(graph_entries);
var group = cljs.core.first(groups);
var remaining_graph_entries = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.rest(groups)], 0));
var other_graph_entries = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__58152_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(graph_id,new cljs.core.Keyword(null,"graph-id","graph-id",-205404489).cljs$core$IFn$_invoke$arity$1(p1__58152_SHARP_));
}),wanted);
frontend.db.subs_loader.put_back_BANG_(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(remaining_graph_entries,other_graph_entries));

return group;
} else {
return null;
}
});
frontend.db.subs_loader.entry_response = (function frontend$db$subs_loader$entry_response(response,p__58161){
var map__58162 = p__58161;
var map__58162__$1 = cljs.core.__destructure_map(map__58162);
var slot_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58162__$1,new cljs.core.Keyword(null,"slot-key","slot-key",646563234));
var temp__5823__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"groups","groups",-136896102),slot_key], null));
if(cljs.core.truth_(temp__5823__auto__)){
var group = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"basis-rev","basis-rev",-1470394588),new cljs.core.Keyword(null,"basis-rev","basis-rev",-1470394588).cljs$core$IFn$_invoke$arity$1(response),new cljs.core.Keyword(null,"slots","slots",276818598),cljs.core.select_keys(new cljs.core.Keyword(null,"slots","slots",276818598).cljs$core$IFn$_invoke$arity$1(response),group)], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Missing renderer snapshot group",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slot-key","slot-key",646563234),slot_key], null));
}
});
frontend.db.subs_loader.flush_BANG_ = (function frontend$db$subs_loader$flush_BANG_(){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.deref(frontend.state.db_worker_ready_QMARK_);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(cljs.core.deref(frontend.db.subs_loader._STAR_flushing_QMARK_));
} else {
return and__5140__auto__;
}
})())){
var temp__5825__auto__ = frontend.db.subs_loader.take_next_request_group_BANG_();
if(cljs.core.truth_(temp__5825__auto__)){
var entries = temp__5825__auto__;
cljs.core.reset_BANG_(frontend.db.subs_loader._STAR_flushing_QMARK_,true);

var graph_id = new cljs.core.Keyword(null,"graph-id","graph-id",-205404489).cljs$core$IFn$_invoke$arity$1(cljs.core.first(entries));
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2((function (){try{return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-render-snapshots","thread-api/get-render-snapshots",-127552347),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph_id,frontend.db.subs_loader.worker_request(entries)], 0));
}catch (e58175){var error = e58175;
return promesa.core.rejected(error);
}})(),(function (response){
try{var values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58168_SHARP_){
return frontend.db.subs_loader.entry_response(response,p1__58168_SHARP_);
}),entries);
var seq__58178 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,entries,values));
var chunk__58179 = null;
var count__58180 = (0);
var i__58181 = (0);
while(true){
if((i__58181 < count__58180)){
var vec__58194 = chunk__58179.cljs$core$IIndexed$_nth$arity$2(null,i__58181);
var entry = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58194,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58194,(1),null);
promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(entry),value);


var G__58245 = seq__58178;
var G__58246 = chunk__58179;
var G__58247 = count__58180;
var G__58248 = (i__58181 + (1));
seq__58178 = G__58245;
chunk__58179 = G__58246;
count__58180 = G__58247;
i__58181 = G__58248;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__58178);
if(temp__5825__auto____$1){
var seq__58178__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__58178__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__58178__$1);
var G__58249 = cljs.core.chunk_rest(seq__58178__$1);
var G__58251 = c__5673__auto__;
var G__58252 = cljs.core.count(c__5673__auto__);
var G__58253 = (0);
seq__58178 = G__58249;
chunk__58179 = G__58251;
count__58180 = G__58252;
i__58181 = G__58253;
continue;
} else {
var vec__58199 = cljs.core.first(seq__58178__$1);
var entry = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58199,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58199,(1),null);
promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(entry),value);


var G__58256 = cljs.core.next(seq__58178__$1);
var G__58257 = null;
var G__58258 = (0);
var G__58259 = (0);
seq__58178 = G__58256;
chunk__58179 = G__58257;
count__58180 = G__58258;
i__58181 = G__58259;
continue;
}
} else {
return null;
}
}
break;
}
}catch (e58176){var error = e58176;
return frontend.db.subs_loader.reject_BANG_(entries,error);
}})),(function (p1__58169_SHARP_){
return frontend.db.subs_loader.reject_BANG_(entries,p1__58169_SHARP_);
})),(function (){
cljs.core.reset_BANG_(frontend.db.subs_loader._STAR_flushing_QMARK_,false);

return (frontend.db.subs_loader.flush_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.db.subs_loader.flush_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.db.subs_loader.flush_BANG_.call(null));
}));
} else {
return null;
}
} else {
return null;
}
});
frontend.db.subs_loader.flush_when_db_worker_ready_BANG_ = (function frontend$db$subs_loader$flush_when_db_worker_ready_BANG_(_key,_ref,_old_value,ready_QMARK_){
if(cljs.core.truth_(ready_QMARK_)){
return frontend.db.subs_loader.flush_BANG_();
} else {
return null;
}
});
cljs.core.add_watch(frontend.state.db_worker_ready_QMARK_,new cljs.core.Keyword("frontend.db.subs-loader","flush-pending-loads","frontend.db.subs-loader/flush-pending-loads",726906146),frontend.db.subs_loader.flush_when_db_worker_ready_BANG_);
frontend.db.subs_loader.load_BANG_ = (function frontend$db$subs_loader$load_BANG_(graph_id,slot_key,schedule_BANG_){
var batch_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [graph_id,slot_key], null);
var temp__5823__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.db.subs_loader._STAR_batch),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [batch_key,new cljs.core.Keyword(null,"result","result",1415092211)], null));
if(cljs.core.truth_(temp__5823__auto__)){
var result = temp__5823__auto__;
return result;
} else {
var result = promesa.core.deferred();
var schedule_QMARK_ = cljs.core.empty_QMARK_(cljs.core.deref(frontend.db.subs_loader._STAR_batch));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.db.subs_loader._STAR_batch,cljs.core.assoc,batch_key,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"graph-id","graph-id",-205404489),graph_id,new cljs.core.Keyword(null,"slot-key","slot-key",646563234),slot_key,new cljs.core.Keyword(null,"result","result",1415092211),result], null));

if(schedule_QMARK_){
(schedule_BANG_.cljs$core$IFn$_invoke$arity$1 ? schedule_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.db.subs_loader.flush_BANG_) : schedule_BANG_.call(null,frontend.db.subs_loader.flush_BANG_));
} else {
}

return result;
}
});
frontend.db.subs_loader.reject_pending_BANG_ = (function frontend$db$subs_loader$reject_pending_BANG_(error){
var entries = cljs.core.vals(cljs.core.deref(frontend.db.subs_loader._STAR_batch));
cljs.core.reset_BANG_(frontend.db.subs_loader._STAR_batch,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.reset_BANG_(frontend.db.subs_loader._STAR_flushing_QMARK_,false);

return frontend.db.subs_loader.reject_BANG_(entries,error);
});

//# sourceMappingURL=frontend.db.subs_loader.js.map
