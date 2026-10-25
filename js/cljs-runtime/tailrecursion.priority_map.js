goog.provide('tailrecursion.priority_map');

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISorted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
tailrecursion.priority_map.PersistentPriorityMap = (function (priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){
this.priority__GT_set_of_items = priority__GT_set_of_items;
this.item__GT_priority = item__GT_priority;
this.meta = meta;
this.keyfn = keyfn;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2565220111;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,item,not_found){
var self__ = this;
var coll__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,not_found);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
var pr_pair = (function (keyval){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer(writer,pr_pair,"#tailrecursion.priority-map {",", ","}",opts,coll__$1);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.count(self__.item__GT_priority);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.item__GT_priority) === (0))){
return null;
} else {
var f = cljs.core.first(self__.priority__GT_set_of_items);
var item = cljs.core.first(cljs.core.val(f));
if(cljs.core.truth_(self__.keyfn)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,cljs.core.key(f)], null);
}
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.item__GT_priority) === (0))){
throw (new Error("Can't pop empty priority map"));
} else {
var f = cljs.core.first(self__.priority__GT_set_of_items);
var item_set = cljs.core.val(f);
var item = cljs.core.first(item_set);
var priority_key = cljs.core.key(f);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,priority_key),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(item_set,item)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
}
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq((function (){var iter__5628__auto__ = (function tailrecursion$priority_map$iter__57450(s__57451){
return (new cljs.core.LazySeq(null,(function (){
var s__57451__$1 = s__57451;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__57451__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__57458 = cljs.core.first(xs__6385__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57458,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57458,(1),null);
var iterys__5624__auto__ = ((function (s__57451__$1,vec__57458,priority,item_set,xs__6385__auto__,temp__5825__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__57450_$_iter__57452(s__57453){
return (new cljs.core.LazySeq(null,((function (s__57451__$1,vec__57458,priority,item_set,xs__6385__auto__,temp__5825__auto__,coll__$1){
return (function (){
var s__57453__$1 = s__57453;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__57453__$1);
if(temp__5825__auto____$1){
var s__57453__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57453__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__57453__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__57455 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__57454 = (0);
while(true){
if((i__57454 < size__5627__auto__)){
var item = cljs.core._nth(c__5626__auto__,i__57454);
cljs.core.chunk_append(b__57455,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null));

var G__57692 = (i__57454 + (1));
i__57454 = G__57692;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57455),tailrecursion$priority_map$iter__57450_$_iter__57452(cljs.core.chunk_rest(s__57453__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57455),null);
}
} else {
var item = cljs.core.first(s__57453__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null),tailrecursion$priority_map$iter__57450_$_iter__57452(cljs.core.rest(s__57453__$2)));
}
} else {
return null;
}
break;
}
});})(s__57451__$1,vec__57458,priority,item_set,xs__6385__auto__,temp__5825__auto__,coll__$1))
,null,null));
});})(s__57451__$1,vec__57458,priority,item_set,xs__6385__auto__,temp__5825__auto__,coll__$1))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(item_set));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,tailrecursion$priority_map$iter__57450(cljs.core.rest(s__57451__$1)));
} else {
var G__57696 = cljs.core.rest(s__57451__$1);
s__57451__$1 = G__57696;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.rseq(self__.priority__GT_set_of_items));
})());
} else {
return cljs.core.seq((function (){var iter__5628__auto__ = (function tailrecursion$priority_map$iter__57466(s__57467){
return (new cljs.core.LazySeq(null,(function (){
var s__57467__$1 = s__57467;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__57467__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__57475 = cljs.core.first(xs__6385__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57475,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57475,(1),null);
var iterys__5624__auto__ = ((function (s__57467__$1,vec__57475,priority,item_set,xs__6385__auto__,temp__5825__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__57466_$_iter__57468(s__57469){
return (new cljs.core.LazySeq(null,((function (s__57467__$1,vec__57475,priority,item_set,xs__6385__auto__,temp__5825__auto__,coll__$1){
return (function (){
var s__57469__$1 = s__57469;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__57469__$1);
if(temp__5825__auto____$1){
var s__57469__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57469__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__57469__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__57471 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__57470 = (0);
while(true){
if((i__57470 < size__5627__auto__)){
var item = cljs.core._nth(c__5626__auto__,i__57470);
cljs.core.chunk_append(b__57471,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__57699 = (i__57470 + (1));
i__57470 = G__57699;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57471),tailrecursion$priority_map$iter__57466_$_iter__57468(cljs.core.chunk_rest(s__57469__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57471),null);
}
} else {
var item = cljs.core.first(s__57469__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__57466_$_iter__57468(cljs.core.rest(s__57469__$2)));
}
} else {
return null;
}
break;
}
});})(s__57467__$1,vec__57475,priority,item_set,xs__6385__auto__,temp__5825__auto__,coll__$1))
,null,null));
});})(s__57467__$1,vec__57475,priority,item_set,xs__6385__auto__,temp__5825__auto__,coll__$1))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(item_set));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,tailrecursion$priority_map$iter__57466(cljs.core.rest(s__57467__$1)));
} else {
var G__57703 = cljs.core.rest(s__57467__$1);
s__57467__$1 = G__57703;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.rseq(self__.priority__GT_set_of_items));
})());
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = cljs.core.hash_unordered_coll(this$__$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return cljs.core._equiv(self__.item__GT_priority,other);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.with_meta(tailrecursion.priority_map.PersistentPriorityMap.EMPTY,self__.meta);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
var priority = (self__.item__GT_priority.cljs$core$IFn$_invoke$arity$2 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517)) : self__.item__GT_priority.call(null,item,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(priority,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517))){
return this$__$1;
} else {
var priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(priority) : self__.keyfn.call(null,priority));
var item_set = (self__.priority__GT_set_of_items.cljs$core$IFn$_invoke$arity$1 ? self__.priority__GT_set_of_items.cljs$core$IFn$_invoke$arity$1(priority_key) : self__.priority__GT_set_of_items.call(null,priority_key));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,priority_key),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(item_set,item)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
}
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,item,priority){
var self__ = this;
var this$__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,null);
if(cljs.core.truth_(temp__5823__auto__)){
var current_priority = temp__5823__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_priority,priority)){
return this$__$1;
} else {
var priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(priority) : self__.keyfn.call(null,priority));
var current_priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(current_priority) : self__.keyfn.call(null,current_priority));
var item_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority_key);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority_key),priority_key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__.priority__GT_set_of_items,current_priority_key,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority_key),item),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([priority_key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
}
}
} else {
var priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(priority) : self__.keyfn.call(null,priority));
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.contains_QMARK_(self__.item__GT_priority,item);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq((function (){var iter__5628__auto__ = (function tailrecursion$priority_map$iter__57499(s__57500){
return (new cljs.core.LazySeq(null,(function (){
var s__57500__$1 = s__57500;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__57500__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__57507 = cljs.core.first(xs__6385__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57507,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57507,(1),null);
var iterys__5624__auto__ = ((function (s__57500__$1,vec__57507,priority,item_set,xs__6385__auto__,temp__5825__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__57499_$_iter__57501(s__57502){
return (new cljs.core.LazySeq(null,((function (s__57500__$1,vec__57507,priority,item_set,xs__6385__auto__,temp__5825__auto__,this$__$1){
return (function (){
var s__57502__$1 = s__57502;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__57502__$1);
if(temp__5825__auto____$1){
var s__57502__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57502__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__57502__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__57504 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__57503 = (0);
while(true){
if((i__57503 < size__5627__auto__)){
var item = cljs.core._nth(c__5626__auto__,i__57503);
cljs.core.chunk_append(b__57504,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null));

var G__57728 = (i__57503 + (1));
i__57503 = G__57728;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57504),tailrecursion$priority_map$iter__57499_$_iter__57501(cljs.core.chunk_rest(s__57502__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57504),null);
}
} else {
var item = cljs.core.first(s__57502__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null),tailrecursion$priority_map$iter__57499_$_iter__57501(cljs.core.rest(s__57502__$2)));
}
} else {
return null;
}
break;
}
});})(s__57500__$1,vec__57507,priority,item_set,xs__6385__auto__,temp__5825__auto__,this$__$1))
,null,null));
});})(s__57500__$1,vec__57507,priority,item_set,xs__6385__auto__,temp__5825__auto__,this$__$1))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(item_set));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,tailrecursion$priority_map$iter__57499(cljs.core.rest(s__57500__$1)));
} else {
var G__57732 = cljs.core.rest(s__57500__$1);
s__57500__$1 = G__57732;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(self__.priority__GT_set_of_items);
})());
} else {
return cljs.core.seq((function (){var iter__5628__auto__ = (function tailrecursion$priority_map$iter__57517(s__57518){
return (new cljs.core.LazySeq(null,(function (){
var s__57518__$1 = s__57518;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__57518__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__57527 = cljs.core.first(xs__6385__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57527,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57527,(1),null);
var iterys__5624__auto__ = ((function (s__57518__$1,vec__57527,priority,item_set,xs__6385__auto__,temp__5825__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__57517_$_iter__57519(s__57520){
return (new cljs.core.LazySeq(null,((function (s__57518__$1,vec__57527,priority,item_set,xs__6385__auto__,temp__5825__auto__,this$__$1){
return (function (){
var s__57520__$1 = s__57520;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__57520__$1);
if(temp__5825__auto____$1){
var s__57520__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57520__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__57520__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__57522 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__57521 = (0);
while(true){
if((i__57521 < size__5627__auto__)){
var item = cljs.core._nth(c__5626__auto__,i__57521);
cljs.core.chunk_append(b__57522,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__57736 = (i__57521 + (1));
i__57521 = G__57736;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57522),tailrecursion$priority_map$iter__57517_$_iter__57519(cljs.core.chunk_rest(s__57520__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57522),null);
}
} else {
var item = cljs.core.first(s__57520__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__57517_$_iter__57519(cljs.core.rest(s__57520__$2)));
}
} else {
return null;
}
break;
}
});})(s__57518__$1,vec__57527,priority,item_set,xs__6385__auto__,temp__5825__auto__,this$__$1))
,null,null));
});})(s__57518__$1,vec__57527,priority,item_set,xs__6385__auto__,temp__5825__auto__,this$__$1))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(item_set));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,tailrecursion$priority_map$iter__57517(cljs.core.rest(s__57518__$1)));
} else {
var G__57738 = cljs.core.rest(s__57518__$1);
s__57518__$1 = G__57738;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(self__.priority__GT_set_of_items);
})());
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new tailrecursion.priority_map.PersistentPriorityMap(self__.priority__GT_set_of_items,self__.item__GT_priority,meta__$1,self__.keyfn,self__.__hash));
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return this$__$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry,(0)),cljs.core._nth(entry,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this$__$1,entry);
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.call = (function (unused__2830__auto__){
var self__ = this;
var self__ = this;
var G__57531 = (arguments.length - (1));
switch (G__57531) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error((""+"Invalid arity: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1))))));

}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args57438){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args57438)));
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (item){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (item,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (this$,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
var fexpr__57543 = (cljs.core.truth_(ascending_QMARK_)?cljs.core.seq:cljs.core.rseq);
return (fexpr__57543.cljs$core$IFn$_invoke$arity$1 ? fexpr__57543.cljs$core$IFn$_invoke$arity$1(this$__$1) : fexpr__57543.call(null,this$__$1));
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
var sets = (cljs.core.truth_(ascending_QMARK_)?cljs.core.subseq.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,cljs.core._GT__EQ_,k):cljs.core.rsubseq.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,cljs.core._LT__EQ_,k));
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq((function (){var iter__5628__auto__ = (function tailrecursion$priority_map$iter__57554(s__57555){
return (new cljs.core.LazySeq(null,(function (){
var s__57555__$1 = s__57555;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__57555__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__57560 = cljs.core.first(xs__6385__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57560,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57560,(1),null);
var iterys__5624__auto__ = ((function (s__57555__$1,vec__57560,priority,item_set,xs__6385__auto__,temp__5825__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__57554_$_iter__57556(s__57557){
return (new cljs.core.LazySeq(null,((function (s__57555__$1,vec__57560,priority,item_set,xs__6385__auto__,temp__5825__auto__,sets,this$__$1){
return (function (){
var s__57557__$1 = s__57557;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__57557__$1);
if(temp__5825__auto____$1){
var s__57557__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57557__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__57557__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__57559 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__57558 = (0);
while(true){
if((i__57558 < size__5627__auto__)){
var item = cljs.core._nth(c__5626__auto__,i__57558);
cljs.core.chunk_append(b__57559,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null));

var G__57748 = (i__57558 + (1));
i__57558 = G__57748;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57559),tailrecursion$priority_map$iter__57554_$_iter__57556(cljs.core.chunk_rest(s__57557__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57559),null);
}
} else {
var item = cljs.core.first(s__57557__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null),tailrecursion$priority_map$iter__57554_$_iter__57556(cljs.core.rest(s__57557__$2)));
}
} else {
return null;
}
break;
}
});})(s__57555__$1,vec__57560,priority,item_set,xs__6385__auto__,temp__5825__auto__,sets,this$__$1))
,null,null));
});})(s__57555__$1,vec__57560,priority,item_set,xs__6385__auto__,temp__5825__auto__,sets,this$__$1))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(item_set));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,tailrecursion$priority_map$iter__57554(cljs.core.rest(s__57555__$1)));
} else {
var G__57749 = cljs.core.rest(s__57555__$1);
s__57555__$1 = G__57749;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(sets);
})());
} else {
return cljs.core.seq((function (){var iter__5628__auto__ = (function tailrecursion$priority_map$iter__57568(s__57569){
return (new cljs.core.LazySeq(null,(function (){
var s__57569__$1 = s__57569;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__57569__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__57574 = cljs.core.first(xs__6385__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57574,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57574,(1),null);
var iterys__5624__auto__ = ((function (s__57569__$1,vec__57574,priority,item_set,xs__6385__auto__,temp__5825__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__57568_$_iter__57570(s__57571){
return (new cljs.core.LazySeq(null,((function (s__57569__$1,vec__57574,priority,item_set,xs__6385__auto__,temp__5825__auto__,sets,this$__$1){
return (function (){
var s__57571__$1 = s__57571;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__57571__$1);
if(temp__5825__auto____$1){
var s__57571__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57571__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__57571__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__57573 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__57572 = (0);
while(true){
if((i__57572 < size__5627__auto__)){
var item = cljs.core._nth(c__5626__auto__,i__57572);
cljs.core.chunk_append(b__57573,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__57750 = (i__57572 + (1));
i__57572 = G__57750;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57573),tailrecursion$priority_map$iter__57568_$_iter__57570(cljs.core.chunk_rest(s__57571__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57573),null);
}
} else {
var item = cljs.core.first(s__57571__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__57568_$_iter__57570(cljs.core.rest(s__57571__$2)));
}
} else {
return null;
}
break;
}
});})(s__57569__$1,vec__57574,priority,item_set,xs__6385__auto__,temp__5825__auto__,sets,this$__$1))
,null,null));
});})(s__57569__$1,vec__57574,priority,item_set,xs__6385__auto__,temp__5825__auto__,sets,this$__$1))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(item_set));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,tailrecursion$priority_map$iter__57568(cljs.core.rest(s__57569__$1)));
} else {
var G__57751 = cljs.core.rest(s__57569__$1);
s__57569__$1 = G__57751;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(sets);
})());
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
var G__57584 = cljs.core.val(entry);
return (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(G__57584) : self__.keyfn.call(null,G__57584));
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.compare;
}));

(tailrecursion.priority_map.PersistentPriorityMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"priority->set-of-items","priority->set-of-items",-1256537211,null),new cljs.core.Symbol(null,"item->priority","item->priority",-899999435,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"keyfn","keyfn",-1874375437,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$type = true);

(tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorStr = "tailrecursion.priority-map/PersistentPriorityMap");

(tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
}));

/**
 * Positional factory function for tailrecursion.priority-map/PersistentPriorityMap.
 */
tailrecursion.priority_map.__GT_PersistentPriorityMap = (function tailrecursion$priority_map$__GT_PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){
return (new tailrecursion.priority_map.PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash));
});

(tailrecursion.priority_map.PersistentPriorityMap.EMPTY = (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map(),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null)));
tailrecursion.priority_map.pm_empty_by = (function tailrecursion$priority_map$pm_empty_by(comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by(comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
});
tailrecursion.priority_map.pm_empty_keyfn = (function tailrecursion$priority_map$pm_empty_keyfn(var_args){
var G__57588 = arguments.length;
switch (G__57588) {
case 1:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map(),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,keyfn,null));
}));

(tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by(comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,keyfn,null));
}));

(tailrecursion.priority_map.pm_empty_keyfn.cljs$lang$maxFixedArity = 2);

tailrecursion.priority_map.read_priority_map = (function tailrecursion$priority_map$read_priority_map(elems){
if(cljs.core.map_QMARK_(elems)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(tailrecursion.priority_map.PersistentPriorityMap.EMPTY,elems);
} else {
throw Error("Priority map literal expects a map for its elements.");
}
});
cljs.reader.register_tag_parser_BANG_("tailrecursion.priority-map",tailrecursion.priority_map.read_priority_map);
/**
 * keyval => key val
 *   Returns a new priority map with supplied mappings.
 */
tailrecursion.priority_map.priority_map = (function tailrecursion$priority_map$priority_map(var_args){
var args__5882__auto__ = [];
var len__5876__auto___57755 = arguments.length;
var i__5877__auto___57756 = (0);
while(true){
if((i__5877__auto___57756 < len__5876__auto___57755)){
args__5882__auto__.push((arguments[i__5877__auto___57756]));

var G__57757 = (i__5877__auto___57756 + (1));
i__5877__auto___57756 = G__57757;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.PersistentPriorityMap.EMPTY;
while(true){
if(in$){
var G__57758 = cljs.core.nnext(in$);
var G__57759 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__57758;
out = G__57759;
continue;
} else {
return out;
}
break;
}
}));

(tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq57609){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57609));
}));

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(var_args){
var args__5882__auto__ = [];
var len__5876__auto___57760 = arguments.length;
var i__5877__auto___57761 = (0);
while(true){
if((i__5877__auto___57761 < len__5876__auto___57760)){
args__5882__auto__.push((arguments[i__5877__auto___57761]));

var G__57762 = (i__5877__auto___57761 + (1));
i__5877__auto___57761 = G__57762;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic = (function (comparator,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.pm_empty_by(comparator);
while(true){
if(in$){
var G__57763 = cljs.core.nnext(in$);
var G__57764 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__57763;
out = G__57764;
continue;
} else {
return out;
}
break;
}
}));

(tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq57632){
var G__57633 = cljs.core.first(seq57632);
var seq57632__$1 = cljs.core.next(seq57632);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57633,seq57632__$1);
}));

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn.
 */
tailrecursion.priority_map.priority_map_keyfn = (function tailrecursion$priority_map$priority_map_keyfn(var_args){
var args__5882__auto__ = [];
var len__5876__auto___57765 = arguments.length;
var i__5877__auto___57766 = (0);
while(true){
if((i__5877__auto___57766 < len__5876__auto___57765)){
args__5882__auto__.push((arguments[i__5877__auto___57766]));

var G__57767 = (i__5877__auto___57766 + (1));
i__5877__auto___57766 = G__57767;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1(keyfn);
while(true){
if(in$){
var G__57768 = cljs.core.nnext(in$);
var G__57769 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__57768;
out = G__57769;
continue;
} else {
return out;
}
break;
}
}));

(tailrecursion.priority_map.priority_map_keyfn.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tailrecursion.priority_map.priority_map_keyfn.cljs$lang$applyTo = (function (seq57639){
var G__57640 = cljs.core.first(seq57639);
var seq57639__$1 = cljs.core.next(seq57639);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57640,seq57639__$1);
}));

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn and comparator.
 */
tailrecursion.priority_map.priority_map_keyfn_by = (function tailrecursion$priority_map$priority_map_keyfn_by(var_args){
var args__5882__auto__ = [];
var len__5876__auto___57771 = arguments.length;
var i__5877__auto___57772 = (0);
while(true){
if((i__5877__auto___57772 < len__5876__auto___57771)){
args__5882__auto__.push((arguments[i__5877__auto___57772]));

var G__57773 = (i__5877__auto___57772 + (1));
i__5877__auto___57772 = G__57773;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,comparator,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2(keyfn,comparator);
while(true){
if(in$){
var G__57774 = cljs.core.nnext(in$);
var G__57775 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__57774;
out = G__57775;
continue;
} else {
return out;
}
break;
}
}));

(tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$applyTo = (function (seq57647){
var G__57648 = cljs.core.first(seq57647);
var seq57647__$1 = cljs.core.next(seq57647);
var G__57649 = cljs.core.first(seq57647__$1);
var seq57647__$2 = cljs.core.next(seq57647__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57648,G__57649,seq57647__$2);
}));


//# sourceMappingURL=tailrecursion.priority_map.js.map
