goog.provide('logseq.db.common.reference');
logseq.db.common.reference.has_datom_QMARK_ = (function logseq$db$common$reference$has_datom_QMARK_(db,e,a,v){
return cljs.core.boolean$(cljs.core.seq(datascript.core.datoms.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),e,a,v)));
});
/**
 * Normalize a datom value into an entity id.
 * In DataScript, ref values are often raw entids (numbers), not maps.
 */
logseq.db.common.reference.entid = (function logseq$db$common$reference$entid(v){
if((v == null)){
return null;
} else {
if(typeof v === 'number'){
return v;
} else {
if(((cljs.core.map_QMARK_(v)) && (cljs.core.contains_QMARK_(v,new cljs.core.Keyword("db","id","db/id",-1388397098))))){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v);
} else {
return v;

}
}
}
});
/**
 * Return the first value for attr a on entity e, normalized to entid.
 */
logseq.db.common.reference.datom_v = (function logseq$db$common$reference$datom_v(db,e,a){
var G__81308 = cljs.core.first(datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),e,a));
var G__81308__$1 = (((G__81308 == null))?null:new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__81308));
if((G__81308__$1 == null)){
return null;
} else {
return logseq.db.common.reference.entid(G__81308__$1);
}
});
/**
 * Return all values for attr a on entity e, normalized to entids, as a set.
 */
logseq.db.common.reference.datom_vs = (function logseq$db$common$reference$datom_vs(db,e,a){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"v","v",21465059)),cljs.core.map.cljs$core$IFn$_invoke$arity$1(logseq.db.common.reference.entid)),datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),e,a));
});
logseq.db.common.reference.get_path_refs = (function logseq$db$common$reference$get_path_refs(db,entity){
var refs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("block","refs","block/refs",-1214495349),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.db.get_block_parents(db,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(entity))], 0));
var block_page = new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(entity);
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var G__81309 = refs;
if((!((block_page == null)))){
return cljs.core.cons(block_page,G__81309);
} else {
return G__81309;
}
})());
});
logseq.db.common.reference.get_ref_pages_count = (function logseq$db$common$reference$get_ref_pages_count(db,id,ref_blocks,children_ids){
if(cljs.core.seq(ref_blocks)){
var children = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id__$1){
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,id__$1) : datascript.core.entity.call(null,db,id__$1));
}),children_ids);
var hidden_ref_QMARK__STAR_ = logseq.db.common.initial_data.hidden_ref_pred(db,id);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.second,(function (p1__81311_SHARP_,p2__81312_SHARP_){
return (p1__81311_SHARP_ > p2__81312_SHARP_);
}),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__81313){
var vec__81314 = p__81313;
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81314,(0),null);
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81314,(1),null);
if(cljs.core.truth_((function (){var and__5140__auto__ = (logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1(ref) : logseq.db.page_QMARK_.call(null,ref));
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ref),id)) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(ref))) && (cljs.core.not(hidden_ref_QMARK__STAR_(ref))))));
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(ref),size], null);
} else {
return null;
}
}),cljs.core.frequencies(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__81310_SHARP_){
return logseq.db.common.reference.get_path_refs(db,p1__81310_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ref_blocks], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("block","refs","block/refs",-1214495349),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.concat.cljs$core$IFn$_invoke$arity$2(ref_blocks,children)], 0))))));
} else {
return null;
}
});
/**
 * Direct children via AVET on :block/parent.
 */
logseq.db.common.reference.child_ids = (function logseq$db$common$reference$child_ids(db,parent_eid){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"e","e",1381269198)),datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","parent","block/parent",-918309064),parent_eid));
});
/**
 * Refs contributed by this block itself:
 * - direct :block/refs
 * - implicit :block/page as a ref
 */
logseq.db.common.reference.own_refs = (function logseq$db$common$reference$own_refs(db,eid){
var direct = logseq.db.common.reference.datom_vs(db,eid,new cljs.core.Keyword("block","refs","block/refs",-1214495349));
var page = logseq.db.common.reference.datom_v(db,eid,new cljs.core.Keyword("block","page","block/page",822314108));
var G__81317 = direct;
if(cljs.core.truth_(page)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__81317,page);
} else {
return G__81317;
}
});
/**
 * effective-refs(eid) = own-refs(eid) ∪ effective-refs(parent(eid))
 */
logseq.db.common.reference.effective_refs_fn = (function logseq$db$common$reference$effective_refs_fn(db){
var memo = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var eff = (function logseq$db$common$reference$effective_refs_fn_$_eff(eid){
if(cljs.core.contains_QMARK_(cljs.core.deref(memo),eid)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(memo),eid);
} else {
var own = logseq.db.common.reference.own_refs(db,eid);
var res = (function (){var temp__5823__auto__ = logseq.db.common.reference.datom_v(db,eid,new cljs.core.Keyword("block","parent","block/parent",-918309064));
if(cljs.core.truth_(temp__5823__auto__)){
var p = temp__5823__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(own,logseq$db$common$reference$effective_refs_fn_$_eff(p));
} else {
return own;
}
})();
memo.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memo.cljs$core$IDeref$_deref$arity$1(null),eid,res));

return res;
}
});
return eff;
});
/**
 * Like subtree-refs-fn but PRUNES branches that are under an excluded ref.
 *   This implements:
 *  - parent should not be excluded just because a child has an excluded ref
 *  - BUT refs (e.g. [[bar]]) that appear under an excluded block (e.g. [[baz]])
 *    should NOT satisfy includes for ancestors.
 * 
 *   Concretely: if (effective-refs node) contains any excludes, this node and its
 *   descendants contribute NOTHING to the include reachability set.
 */
logseq.db.common.reference.allowed_subtree_refs_fn = (function logseq$db$common$reference$allowed_subtree_refs_fn(db,eff,excludes){
var memo = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var blocked_QMARK_ = (function logseq$db$common$reference$allowed_subtree_refs_fn_$_blocked_QMARK_(eid){
var and__5140__auto__ = cljs.core.seq(excludes);
if(and__5140__auto__){
return cljs.core.some((function (p1__81318_SHARP_){
return cljs.core.contains_QMARK_((eff.cljs$core$IFn$_invoke$arity$1 ? eff.cljs$core$IFn$_invoke$arity$1(eid) : eff.call(null,eid)),p1__81318_SHARP_);
}),excludes);
} else {
return and__5140__auto__;
}
});
var sub = (function logseq$db$common$reference$allowed_subtree_refs_fn_$_sub(eid){
if(cljs.core.contains_QMARK_(cljs.core.deref(memo),eid)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(memo),eid);
} else {
var res = (cljs.core.truth_(blocked_QMARK_(eid))?cljs.core.PersistentHashSet.EMPTY:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,c){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,logseq$db$common$reference$allowed_subtree_refs_fn_$_sub(c));
}),logseq.db.common.reference.own_refs(db,eid),logseq.db.common.reference.child_ids(db,eid)));
memo.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memo.cljs$core$IDeref$_deref$arity$1(null),eid,res));

return res;
}
});
return sub;
});
/**
 * Include semantics: AND (must all be present) against include-set.
 * Exclude semantics: NONE (must not contain any) against exclude-set.
 */
logseq.db.common.reference.matches_filters_QMARK_ = (function logseq$db$common$reference$matches_filters_QMARK_(include_set,exclude_set,includes,excludes){
return ((((cljs.core.empty_QMARK_(includes)) || (cljs.core.every_QMARK_((function (p1__81319_SHARP_){
return cljs.core.contains_QMARK_(include_set,p1__81319_SHARP_);
}),includes)))) && (((cljs.core.empty_QMARK_(excludes)) || (cljs.core.not(cljs.core.some((function (p1__81320_SHARP_){
return cljs.core.contains_QMARK_(exclude_set,p1__81320_SHARP_);
}),excludes))))));
});
logseq.db.common.reference.filter_matched_ref_blocks = (function logseq$db$common$reference$filter_matched_ref_blocks(db,top_ref_block_ids,includes,excludes,p__81321){
var map__81322 = p__81321;
var map__81322__$1 = cljs.core.__destructure_map(map__81322);
var eff = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81322__$1,new cljs.core.Keyword(null,"eff","eff",24104785));
var class_ok_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81322__$1,new cljs.core.Keyword(null,"class-ok?","class-ok?",1285118866));
var can_satisfy_includes_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81322__$1,new cljs.core.Keyword(null,"can-satisfy-includes?","can-satisfy-includes?",2045636497));
var allowed_subrefs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81322__$1,new cljs.core.Keyword(null,"allowed-subrefs","allowed-subrefs",-1294075998));
var stack = cljs.core.vec(top_ref_block_ids);
var visited = cljs.core.PersistentHashSet.EMPTY;
var out = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(stack)){
return out;
} else {
var eid = cljs.core.peek(stack);
var stack__$1 = cljs.core.pop(stack);
if(cljs.core.contains_QMARK_(visited,eid)){
var G__81339 = stack__$1;
var G__81340 = visited;
var G__81341 = out;
stack = G__81339;
visited = G__81340;
out = G__81341;
continue;
} else {
var visited__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(visited,eid);
var eff_refs = (eff.cljs$core$IFn$_invoke$arity$1 ? eff.cljs$core$IFn$_invoke$arity$1(eid) : eff.call(null,eid));
if(cljs.core.not((class_ok_QMARK_.cljs$core$IFn$_invoke$arity$1 ? class_ok_QMARK_.cljs$core$IFn$_invoke$arity$1(eid) : class_ok_QMARK_.call(null,eid)))){
var G__81342 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(stack__$1,logseq.db.common.reference.child_ids(db,eid));
var G__81343 = visited__$1;
var G__81344 = out;
stack = G__81342;
visited = G__81343;
out = G__81344;
continue;
} else {
if(cljs.core.not((can_satisfy_includes_QMARK_.cljs$core$IFn$_invoke$arity$2 ? can_satisfy_includes_QMARK_.cljs$core$IFn$_invoke$arity$2(eff_refs,eid) : can_satisfy_includes_QMARK_.call(null,eff_refs,eid)))){
var G__81345 = stack__$1;
var G__81346 = visited__$1;
var G__81347 = out;
stack = G__81345;
visited = G__81346;
out = G__81347;
continue;
} else {
var include_set = cljs.core.into.cljs$core$IFn$_invoke$arity$2(eff_refs,(allowed_subrefs.cljs$core$IFn$_invoke$arity$1 ? allowed_subrefs.cljs$core$IFn$_invoke$arity$1(eid) : allowed_subrefs.call(null,eid)));
var exclude_set = eff_refs;
var out_SINGLEQUOTE_ = ((logseq.db.common.reference.matches_filters_QMARK_(include_set,exclude_set,includes,excludes))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,eid):out);
var G__81348 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(stack__$1,logseq.db.common.reference.child_ids(db,eid));
var G__81349 = visited__$1;
var G__81350 = out_SINGLEQUOTE_;
stack = G__81348;
visited = G__81349;
out = G__81350;
continue;

}
}
}
}
break;
}
});
/**
 * Return the set of block ids (top or child) that match filters.
 * 
 *   Semantics (matches your example):
 *   - Includes (AND) may be satisfied by descendants, BUT only from descendants
 *  that are NOT under an excluded ref.
 *  Example:
 *    - [[foo]]
 *      - [[baz]]
 *        - [[bar]]
 *  With include=bar, exclude=baz => foo should NOT match because bar is under baz.
 * 
 *   - Excludes are checked ONLY against effective-refs(node) (self + parents),
 *  so a parent isn't excluded just because a child mentions an excluded page.
 * 
 *   Pruning:
 *   - If includes cannot be satisfied anywhere below (effective + allowed-subtree),
 *  prune subtree.
 */
logseq.db.common.reference.matched_ref_block_ids_under_top = (function logseq$db$common$reference$matched_ref_block_ids_under_top(db,top_ref_block_ids,includes,excludes,class_ids){
var eff = logseq.db.common.reference.effective_refs_fn(db);
var allowed_subrefs = logseq.db.common.reference.allowed_subtree_refs_fn(db,eff,cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,excludes)));
var includes__$1 = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,includes));
var excludes__$1 = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,excludes));
var class_ids__$1 = ((cljs.core.seq(class_ids))?cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,class_ids)):null);
var can_satisfy_includes_QMARK_ = (function (eff_refs,node){
var or__5142__auto__ = cljs.core.empty_QMARK_(includes__$1);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var possible = cljs.core.into.cljs$core$IFn$_invoke$arity$2(eff_refs,(allowed_subrefs.cljs$core$IFn$_invoke$arity$1 ? allowed_subrefs.cljs$core$IFn$_invoke$arity$1(node) : allowed_subrefs.call(null,node)));
return cljs.core.every_QMARK_((function (p1__81323_SHARP_){
return cljs.core.contains_QMARK_(possible,p1__81323_SHARP_);
}),includes__$1);
}
});
var class_ok_QMARK_ = (function (eid){
return ((cljs.core.empty_QMARK_(class_ids__$1)) || (cljs.core.not(cljs.core.some((function (p1__81324_SHARP_){
return logseq.db.common.reference.has_datom_QMARK_(db,eid,new cljs.core.Keyword("block","tags","block/tags",1814948340),p1__81324_SHARP_);
}),class_ids__$1))));
});
return logseq.db.common.reference.filter_matched_ref_blocks(db,top_ref_block_ids,includes__$1,excludes__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"eff","eff",24104785),eff,new cljs.core.Keyword(null,"class-ok?","class-ok?",1285118866),class_ok_QMARK_,new cljs.core.Keyword(null,"can-satisfy-includes?","can-satisfy-includes?",2045636497),can_satisfy_includes_QMARK_,new cljs.core.Keyword(null,"allowed-subrefs","allowed-subrefs",-1294075998),allowed_subrefs], null));
});
/**
 * Given matched refs, add ancestors until reaching a top ref in `top-ref-ids`.
 * Uses cached parent lookups (datoms only).
 */
logseq.db.common.reference.expand_to_top_refs = (function logseq$db$common$reference$expand_to_top_refs(db,top_ref_ids,matched_ref_ids){
var parent_cache = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var result = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
var top_QMARK_ = (function (eid){
return cljs.core.contains_QMARK_(top_ref_ids,eid);
});
var parent_of = (function (eid){
if(cljs.core.contains_QMARK_(cljs.core.deref(parent_cache),eid)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(parent_cache),eid);
} else {
var p = (function (){var G__81325 = cljs.core.first(datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),eid,new cljs.core.Keyword("block","parent","block/parent",-918309064)));
var G__81325__$1 = (((G__81325 == null))?null:new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__81325));
if((G__81325__$1 == null)){
return null;
} else {
return logseq.db.common.reference.entid(G__81325__$1);
}
})();
parent_cache.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parent_cache.cljs$core$IDeref$_deref$arity$1(null),eid,p));

return p;
}
});
var seq__81326_81351 = cljs.core.seq(matched_ref_ids);
var chunk__81327_81352 = null;
var count__81328_81353 = (0);
var i__81329_81354 = (0);
while(true){
if((i__81329_81354 < count__81328_81353)){
var start_81355 = chunk__81327_81352.cljs$core$IIndexed$_nth$arity$2(null,i__81329_81354);
var eid_81356 = start_81355;
while(true){
if(cljs.core.truth_(eid_81356)){
if(cljs.core.contains_QMARK_(cljs.core.deref(result),eid_81356)){
} else {
if(top_QMARK_(eid_81356)){
result.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result.cljs$core$IDeref$_deref$arity$1(null),eid_81356));
} else {
result.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result.cljs$core$IDeref$_deref$arity$1(null),eid_81356));

var G__81357 = parent_of(eid_81356);
eid_81356 = G__81357;
continue;

}
}
} else {
}
break;
}


var G__81358 = seq__81326_81351;
var G__81359 = chunk__81327_81352;
var G__81360 = count__81328_81353;
var G__81361 = (i__81329_81354 + (1));
seq__81326_81351 = G__81358;
chunk__81327_81352 = G__81359;
count__81328_81353 = G__81360;
i__81329_81354 = G__81361;
continue;
} else {
var temp__5825__auto___81362 = cljs.core.seq(seq__81326_81351);
if(temp__5825__auto___81362){
var seq__81326_81363__$1 = temp__5825__auto___81362;
if(cljs.core.chunked_seq_QMARK_(seq__81326_81363__$1)){
var c__5673__auto___81365 = cljs.core.chunk_first(seq__81326_81363__$1);
var G__81366 = cljs.core.chunk_rest(seq__81326_81363__$1);
var G__81367 = c__5673__auto___81365;
var G__81368 = cljs.core.count(c__5673__auto___81365);
var G__81369 = (0);
seq__81326_81351 = G__81366;
chunk__81327_81352 = G__81367;
count__81328_81353 = G__81368;
i__81329_81354 = G__81369;
continue;
} else {
var start_81370 = cljs.core.first(seq__81326_81363__$1);
var eid_81371 = start_81370;
while(true){
if(cljs.core.truth_(eid_81371)){
if(cljs.core.contains_QMARK_(cljs.core.deref(result),eid_81371)){
} else {
if(top_QMARK_(eid_81371)){
result.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result.cljs$core$IDeref$_deref$arity$1(null),eid_81371));
} else {
result.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result.cljs$core$IDeref$_deref$arity$1(null),eid_81371));

var G__81372 = parent_of(eid_81371);
eid_81371 = G__81372;
continue;

}
}
} else {
}
break;
}


var G__81373 = cljs.core.next(seq__81326_81363__$1);
var G__81374 = null;
var G__81375 = (0);
var G__81376 = (0);
seq__81326_81351 = G__81373;
chunk__81327_81352 = G__81374;
count__81328_81353 = G__81375;
i__81329_81354 = G__81376;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(result);
});
logseq.db.common.reference.get_filters = (function logseq$db$common$reference$get_filters(page){
var included_pages = new cljs.core.Keyword("logseq.property.linked-references","includes","logseq.property.linked-references/includes",1680577703).cljs$core$IFn$_invoke$arity$1(page);
var excluded_pages = new cljs.core.Keyword("logseq.property.linked-references","excludes","logseq.property.linked-references/excludes",242675889).cljs$core$IFn$_invoke$arity$1(page);
if(((cljs.core.seq(included_pages)) || (cljs.core.seq(excluded_pages)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"included","included",-1002787476),included_pages,new cljs.core.Keyword(null,"excluded","excluded",-715952088),excluded_pages], null);
} else {
return null;
}
});
logseq.db.common.reference.linked_reference_top_block_ids = (function logseq$db$common$reference$linked_reference_top_block_ids(db,ids,class_ids){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (ref){
var or__5142__auto__ = cljs.core.contains_QMARK_(ids,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(ref)));
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (cljs.core.truth_(class_ids)?cljs.core.some(class_ids,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(ref))):null);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return ((logseq.db.frontend.entity_util.hidden_QMARK_(ref)) || (logseq.db.frontend.entity_util.hidden_QMARK_(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(ref))));
}
}
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (pid){
return new cljs.core.Keyword("block","_refs","block/_refs",830218531).cljs$core$IFn$_invoke$arity$1((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,pid) : datascript.core.entity.call(null,db,pid)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ids], 0)))));
});
logseq.db.common.reference.linked_reference_result = (function logseq$db$common$reference$linked_reference_result(db,id,include_ref_pages_count_QMARK_,has_filters_QMARK_,ref_blocks,children_ids){
var G__81330 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref-blocks","ref-blocks",-348598444),ref_blocks,new cljs.core.Keyword(null,"ref-matched-children-ids","ref-matched-children-ids",1569574404),(cljs.core.truth_(has_filters_QMARK_)?children_ids:null)], null);
if(cljs.core.truth_(include_ref_pages_count_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__81330,new cljs.core.Keyword(null,"ref-pages-count","ref-pages-count",-74477634),logseq.db.common.reference.get_ref_pages_count(db,id,ref_blocks,children_ids));
} else {
return G__81330;
}
});
logseq.db.common.reference.get_linked_references = (function logseq$db$common$reference$get_linked_references(var_args){
var G__81333 = arguments.length;
switch (G__81333) {
case 2:
return logseq.db.common.reference.get_linked_references.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return logseq.db.common.reference.get_linked_references.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.db.common.reference.get_linked_references.cljs$core$IFn$_invoke$arity$2 = (function (db,id){
return logseq.db.common.reference.get_linked_references.cljs$core$IFn$_invoke$arity$3(db,id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-ref-pages-count?","include-ref-pages-count?",990571428),true], null));
}));

(logseq.db.common.reference.get_linked_references.cljs$core$IFn$_invoke$arity$3 = (function (db,id,p__81334){
var map__81335 = p__81334;
var map__81335__$1 = cljs.core.__destructure_map(map__81335);
var include_ref_pages_count_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__81335__$1,new cljs.core.Keyword(null,"include-ref-pages-count?","include-ref-pages-count?",990571428),true);
var entity = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,id) : datascript.core.entity.call(null,db,id));
var ids = cljs.core.set(cljs.core.cons(id,(logseq.db.get_block_alias.cljs$core$IFn$_invoke$arity$2 ? logseq.db.get_block_alias.cljs$core$IFn$_invoke$arity$2(db,id) : logseq.db.get_block_alias.call(null,db,id))));
var page_filters = logseq.db.common.reference.get_filters(entity);
var excludes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"excluded","excluded",-715952088).cljs$core$IFn$_invoke$arity$1(page_filters));
var includes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"included","included",-1002787476).cljs$core$IFn$_invoke$arity$1(page_filters));
var has_filters_QMARK_ = ((cljs.core.seq(excludes)) || (cljs.core.seq(includes)));
var class_ids = (cljs.core.truth_((logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1(entity) : logseq.db.class_QMARK_.call(null,entity)))?(function (){var class_children = logseq.db.frontend.class$.get_structured_children(db,id);
return cljs.core.set(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(class_children,id));
})():null);
var full_ref_block_ids = logseq.db.common.reference.linked_reference_top_block_ids(db,ids,class_ids);
var matched_ref_block_ids = ((has_filters_QMARK_)?logseq.db.common.reference.matched_ref_block_ids_under_top(db,full_ref_block_ids,includes,excludes,class_ids):null);
var matched_refs_with_children_ids = ((has_filters_QMARK_)?logseq.db.common.reference.expand_to_top_refs(db,full_ref_block_ids,matched_ref_block_ids):null);
var final_ref_ids = ((has_filters_QMARK_)?clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(full_ref_block_ids,matched_refs_with_children_ids):full_ref_block_ids);
var ref_blocks = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__81331_SHARP_){
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,p1__81331_SHARP_) : datascript.core.entity.call(null,db,p1__81331_SHARP_));
}),final_ref_ids);
var children_ids = ((has_filters_QMARK_)?cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(full_ref_block_ids,matched_refs_with_children_ids)):(cljs.core.truth_(include_ref_pages_count_QMARK_)?cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (ref){
var G__81336 = db;
var G__81337 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ref);
return (logseq.db.get_block_children_ids.cljs$core$IFn$_invoke$arity$2 ? logseq.db.get_block_children_ids.cljs$core$IFn$_invoke$arity$2(G__81336,G__81337) : logseq.db.get_block_children_ids.call(null,G__81336,G__81337));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ref_blocks], 0))):null));
return logseq.db.common.reference.linked_reference_result(db,id,include_ref_pages_count_QMARK_,has_filters_QMARK_,ref_blocks,children_ids);
}));

(logseq.db.common.reference.get_linked_references.cljs$lang$maxFixedArity = 3);

logseq.db.common.reference.get_unlinked_references = (function logseq$db$common$reference$get_unlinked_references(db,id){
var entity = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,id) : datascript.core.entity.call(null,db,id));
var title = clojure.string.lower_case(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(entity));
var page_ids = logseq.db.page_alias_set(db,id);
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ids = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (d){
if((((!(cljs.core.contains_QMARK_(page_ids,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(d))))) && (clojure.string.includes_QMARK_(clojure.string.lower_case(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(d)),title)))){
return new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(d);
} else {
return null;
}
}),datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","title","block/title",710445684)));
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (eid){
var e = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,eid) : datascript.core.entity.call(null,db,eid));
if(cljs.core.truth_((function (){var or__5142__auto__ = cljs.core.contains_QMARK_(page_ids,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(e)));
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core.some((function (p1__81338_SHARP_){
return cljs.core.contains_QMARK_(page_ids,p1__81338_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(e)));
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = new cljs.core.Keyword("block","link","block/link",-1872399993).cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return (logseq.db.built_in_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.built_in_QMARK_.cljs$core$IFn$_invoke$arity$1(e) : logseq.db.built_in_QMARK_.call(null,e));
}
}
}
})())){
return null;
} else {
return e;
}
}),ids);
}
});

//# sourceMappingURL=logseq.db.common.reference.js.map
