goog.provide('logseq.db.common.order');
if((typeof logseq !== 'undefined') && (typeof logseq.db !== 'undefined') && (typeof logseq.db.common !== 'undefined') && (typeof logseq.db.common.order !== 'undefined') && (typeof logseq.db.common.order._STAR_max_key !== 'undefined')){
} else {
logseq.db.common.order._STAR_max_key = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
logseq.db.common.order.reset_max_key_BANG_ = (function logseq$db$common$order$reset_max_key_BANG_(var_args){
var G__40577 = arguments.length;
switch (G__40577) {
case 1:
return logseq.db.common.order.reset_max_key_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return logseq.db.common.order.reset_max_key_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.db.common.order.reset_max_key_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (key){
return logseq.db.common.order.reset_max_key_BANG_.cljs$core$IFn$_invoke$arity$2(logseq.db.common.order._STAR_max_key,key);
}));

(logseq.db.common.order.reset_max_key_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (max_key_atom,key){
if(cljs.core.truth_((function (){var and__5140__auto__ = key;
if(cljs.core.truth_(and__5140__auto__)){
return (((cljs.core.deref(max_key_atom) == null)) || ((cljs.core.compare(key,cljs.core.deref(max_key_atom)) > (0))));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.reset_BANG_(max_key_atom,key);
} else {
return null;
}
}));

(logseq.db.common.order.reset_max_key_BANG_.cljs$lang$maxFixedArity = 2);

logseq.db.common.order.gen_key = (function logseq$db$common$order$gen_key(var_args){
var G__40582 = arguments.length;
switch (G__40582) {
case 0:
return logseq.db.common.order.gen_key.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return logseq.db.common.order.gen_key.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5901__auto__ = [];
var len__5876__auto___40604 = arguments.length;
var i__5877__auto___40605 = (0);
while(true){
if((i__5877__auto___40605 < len__5876__auto___40604)){
args_arr__5901__auto__.push((arguments[i__5877__auto___40605]));

var G__40606 = (i__5877__auto___40605 + (1));
i__5877__auto___40605 = G__40606;
continue;
} else {
}
break;
}

var argseq__5902__auto__ = ((((2) < args_arr__5901__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5901__auto__.slice((2)),(0),null)):null);
return logseq.db.common.order.gen_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5902__auto__);

}
});

(logseq.db.common.order.gen_key.cljs$core$IFn$_invoke$arity$0 = (function (){
return logseq.db.common.order.gen_key(cljs.core.deref(logseq.db.common.order._STAR_max_key),null);
}));

(logseq.db.common.order.gen_key.cljs$core$IFn$_invoke$arity$1 = (function (end){
return logseq.db.common.order.gen_key(cljs.core.deref(logseq.db.common.order._STAR_max_key),end);
}));

(logseq.db.common.order.gen_key.cljs$core$IFn$_invoke$arity$variadic = (function (start,end,p__40583){
var map__40584 = p__40583;
var map__40584__$1 = cljs.core.__destructure_map(map__40584);
var max_key_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40584__$1,new cljs.core.Keyword(null,"max-key-atom","max-key-atom",-1459331700),logseq.db.common.order._STAR_max_key);
var k = logseq.clj_fractional_indexing.generate_key_between(start,end);
logseq.db.common.order.reset_max_key_BANG_.cljs$core$IFn$_invoke$arity$2(max_key_atom,k);

return k;
}));

/** @this {Function} */
(logseq.db.common.order.gen_key.cljs$lang$applyTo = (function (seq40579){
var G__40580 = cljs.core.first(seq40579);
var seq40579__$1 = cljs.core.next(seq40579);
var G__40581 = cljs.core.first(seq40579__$1);
var seq40579__$2 = cljs.core.next(seq40579__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40580,G__40581,seq40579__$2);
}));

(logseq.db.common.order.gen_key.cljs$lang$maxFixedArity = (2));

logseq.db.common.order.get_max_order = (function logseq$db$common$order$get_max_order(db){
return new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.core.rseek_datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","order","block/order",-1429282437))));
});
logseq.db.common.order.gen_n_keys = (function logseq$db$common$order$gen_n_keys(var_args){
var args__5882__auto__ = [];
var len__5876__auto___40607 = arguments.length;
var i__5877__auto___40608 = (0);
while(true){
if((i__5877__auto___40608 < len__5876__auto___40607)){
args__5882__auto__.push((arguments[i__5877__auto___40608]));

var G__40609 = (i__5877__auto___40608 + (1));
i__5877__auto___40608 = G__40609;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return logseq.db.common.order.gen_n_keys.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(logseq.db.common.order.gen_n_keys.cljs$core$IFn$_invoke$arity$variadic = (function (n,start,end,p__40589){
var map__40590 = p__40589;
var map__40590__$1 = cljs.core.__destructure_map(map__40590);
var max_key_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40590__$1,new cljs.core.Keyword(null,"max-key-atom","max-key-atom",-1459331700),logseq.db.common.order._STAR_max_key);
var ks = logseq.clj_fractional_indexing.generate_n_keys_between(start,end,n);
logseq.db.common.order.reset_max_key_BANG_.cljs$core$IFn$_invoke$arity$2(max_key_atom,cljs.core.last(ks));

return ks;
}));

(logseq.db.common.order.gen_n_keys.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(logseq.db.common.order.gen_n_keys.cljs$lang$applyTo = (function (seq40585){
var G__40586 = cljs.core.first(seq40585);
var seq40585__$1 = cljs.core.next(seq40585);
var G__40587 = cljs.core.first(seq40585__$1);
var seq40585__$2 = cljs.core.next(seq40585__$1);
var G__40588 = cljs.core.first(seq40585__$2);
var seq40585__$3 = cljs.core.next(seq40585__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40586,G__40587,G__40588,seq40585__$3);
}));

/**
 * Namespace import and older graphs can set :block/parent without :block/order.
 *   Only repair internal pages so class pages that share the same rewrite stay unordered.
 *   Insertion boundary uses every direct child so repaired page orders do not
 *   collide with content-block siblings.
 *   Missing children are sorted by :block/uuid before keys are assigned so peers
 *   generate the same orders. Pages that already have a string order are left
 *   unchanged, so a second validate/migrate is a no-op.
 */
logseq.db.common.order.missing_internal_page_parent_order_tx = (function logseq$db$common$order$missing_internal_page_parent_order_tx(db){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__40592){
var vec__40593 = p__40592;
var _parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40593,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40593,(1),null);
var missing = cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__40591_SHARP_){
return typeof new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(p1__40591_SHARP_) === 'string';
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.entity_util.internal_page_QMARK_,children))));
var max_order = cljs.core.last(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","order","block/order",-1429282437),children))));
if(cljs.core.seq(missing)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (child,order){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(child),new cljs.core.Keyword("block","order","block/order",-1429282437),order], null);
}),missing,logseq.db.common.order.gen_n_keys.cljs$core$IFn$_invoke$arity$variadic(cljs.core.count(missing),max_order,null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"max-key-atom","max-key-atom",-1459331700),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], 0)));
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.group_by(new cljs.core.Keyword("block","parent","block/parent",-918309064),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (d){
var G__40596 = db;
var G__40597 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(d);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__40596,G__40597) : datascript.core.entity.call(null,G__40596,G__40597));
}),datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","parent","block/parent",-918309064))))], 0));
});
logseq.db.common.order.validate_order_key_QMARK_ = (function logseq$db$common$order$validate_order_key_QMARK_(key){
logseq.clj_fractional_indexing.validate_order_key(key,logseq.clj_fractional_indexing.base_62_digits);

return true;
});
logseq.db.common.order.get_prev_order = (function logseq$db$common$order$get_prev_order(db,property,value_id){
var value = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,value_id) : datascript.core.entity.call(null,db,value_id));
if(cljs.core.truth_(property)){
var values = cljs.core.reverse(new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952).cljs$core$IFn$_invoke$arity$1(property));
return cljs.core.some((function (e){
if((((cljs.core.compare(new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(value)) < (0))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(value))))){
return new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(e);
} else {
return null;
}
}),values);
} else {
var properties = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","order","block/order",-1429282437),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (d){
var G__40598 = db;
var G__40599 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(d);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__40598,G__40599) : datascript.core.entity.call(null,G__40598,G__40599));
}),datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("logseq.class","Property","logseq.class/Property",1038767048)))));
return cljs.core.some((function (property__$1){
if((((cljs.core.compare(new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(property__$1),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(value)) < (0))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property__$1),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(value))))){
return new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(property__$1);
} else {
return null;
}
}),properties);
}
});
logseq.db.common.order.get_next_order = (function logseq$db$common$order$get_next_order(db,property,value_id){
var value = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,value_id) : datascript.core.entity.call(null,db,value_id));
if(cljs.core.truth_(property)){
var values = new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952).cljs$core$IFn$_invoke$arity$1(property);
return cljs.core.some((function (e){
if((((cljs.core.compare(new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(value)) > (0))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(value))))){
return new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(e);
} else {
return null;
}
}),values);
} else {
var properties = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","order","block/order",-1429282437),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (d){
var G__40600 = db;
var G__40601 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(d);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__40600,G__40601) : datascript.core.entity.call(null,G__40600,G__40601));
}),datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("logseq.class","Property","logseq.class/Property",1038767048))));
return cljs.core.some((function (property__$1){
if((((cljs.core.compare(new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(property__$1),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(value)) > (0))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property__$1),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(value))))){
return new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(property__$1);
} else {
return null;
}
}),properties);
}
});

//# sourceMappingURL=logseq.db.common.order.js.map
