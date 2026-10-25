goog.provide('datascript.conn');

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {extend_clj.core.IAtom3}
 * @implements {cljs.core.ILookup}
*/
datascript.conn.Conn = (function (atom,validator,watches,meta){
this.atom = atom;
this.validator = validator;
this.watches = watches;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 98306;
this.cljs$lang$protocol_mask$partition0$ = 6455552;
});
(datascript.conn.Conn.prototype.equiv = (function (other__34376__auto__){
var self__ = this;
var this__34375__auto__ = this;
return this__34375__auto__.cljs$core$IEquiv$_equiv$arity$2(null,other__34376__auto__);
}));

(datascript.conn.Conn.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this__34375__auto__,oldv__34383__auto__,newv__34378__auto__){
var self__ = this;
var this__34375__auto____$1 = this;
var seq__36836 = cljs.core.seq(self__.watches);
var chunk__36837 = null;
var count__36838 = (0);
var i__36839 = (0);
while(true){
if((i__36839 < count__36838)){
var vec__36868 = chunk__36837.cljs$core$IIndexed$_nth$arity$2(null,i__36839);
var k__34384__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36868,(0),null);
var f__34379__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36868,(1),null);
(f__34379__auto__.cljs$core$IFn$_invoke$arity$4 ? f__34379__auto__.cljs$core$IFn$_invoke$arity$4(k__34384__auto__,this__34375__auto____$1,oldv__34383__auto__,newv__34378__auto__) : f__34379__auto__.call(null,k__34384__auto__,this__34375__auto____$1,oldv__34383__auto__,newv__34378__auto__));


var G__37241 = seq__36836;
var G__37242 = chunk__36837;
var G__37243 = count__36838;
var G__37244 = (i__36839 + (1));
seq__36836 = G__37241;
chunk__36837 = G__37242;
count__36838 = G__37243;
i__36839 = G__37244;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__36836);
if(temp__5825__auto__){
var seq__36836__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36836__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__36836__$1);
var G__37245 = cljs.core.chunk_rest(seq__36836__$1);
var G__37246 = c__5673__auto__;
var G__37247 = cljs.core.count(c__5673__auto__);
var G__37248 = (0);
seq__36836 = G__37245;
chunk__36837 = G__37246;
count__36838 = G__37247;
i__36839 = G__37248;
continue;
} else {
var vec__36879 = cljs.core.first(seq__36836__$1);
var k__34384__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36879,(0),null);
var f__34379__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36879,(1),null);
(f__34379__auto__.cljs$core$IFn$_invoke$arity$4 ? f__34379__auto__.cljs$core$IFn$_invoke$arity$4(k__34384__auto__,this__34375__auto____$1,oldv__34383__auto__,newv__34378__auto__) : f__34379__auto__.call(null,k__34384__auto__,this__34375__auto____$1,oldv__34383__auto__,newv__34378__auto__));


var G__37249 = cljs.core.next(seq__36836__$1);
var G__37250 = null;
var G__37251 = (0);
var G__37252 = (0);
seq__36836 = G__37249;
chunk__36837 = G__37250;
count__36838 = G__37251;
i__36839 = G__37252;
continue;
}
} else {
return null;
}
}
break;
}
}));

(datascript.conn.Conn.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this__34375__auto__,key__34385__auto__,f__34379__auto__){
var self__ = this;
var this__34375__auto____$1 = this;
(this__34375__auto____$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key__34385__auto__,f__34379__auto__));

return this__34375__auto____$1;
}));

(datascript.conn.Conn.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this__34375__auto__,key__34385__auto__){
var self__ = this;
var this__34375__auto____$1 = this;
return (this__34375__auto____$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key__34385__auto__));
}));

(datascript.conn.Conn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o__34377__auto__,other__34376__auto__){
var self__ = this;
var o__34377__auto____$1 = this;
return (o__34377__auto____$1 === other__34376__auto__);
}));

(datascript.conn.Conn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__34375__auto__){
var self__ = this;
var this__34375__auto____$1 = this;
return goog.getUid(this__34375__auto____$1);
}));

(datascript.conn.Conn.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this__34375__auto__,newv__34378__auto__){
var self__ = this;
var this__34375__auto____$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this__34375__auto____$1.extend_clj$core$IAtom3$swap_STAR_$arity$3(null,cljs.core.constantly(newv__34378__auto__),cljs.core.List.EMPTY),(1));
}));

(datascript.conn.Conn.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this__34375__auto__,f__34379__auto__){
var self__ = this;
var this__34375__auto____$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this__34375__auto____$1.extend_clj$core$IAtom3$swap_STAR_$arity$3(null,f__34379__auto__,cljs.core.List.EMPTY),(1));
}));

(datascript.conn.Conn.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this__34375__auto__,f__34379__auto__,a__34380__auto__){
var self__ = this;
var this__34375__auto____$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this__34375__auto____$1.extend_clj$core$IAtom3$swap_STAR_$arity$3(null,f__34379__auto__,(new cljs.core.List(null,a__34380__auto__,null,(1),null))),(1));
}));

(datascript.conn.Conn.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this__34375__auto__,f__34379__auto__,a__34380__auto__,b__34381__auto__){
var self__ = this;
var this__34375__auto____$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this__34375__auto____$1.extend_clj$core$IAtom3$swap_STAR_$arity$3(null,f__34379__auto__,(new cljs.core.List(null,a__34380__auto__,(new cljs.core.List(null,b__34381__auto__,null,(1),null)),(2),null))),(1));
}));

(datascript.conn.Conn.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this__34375__auto__,f__34379__auto__,a__34380__auto__,b__34381__auto__,xs__34382__auto__){
var self__ = this;
var this__34375__auto____$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this__34375__auto____$1.extend_clj$core$IAtom3$swap_STAR_$arity$3(null,f__34379__auto__,cljs.core.cons(a__34380__auto__,cljs.core.cons(b__34381__auto__,xs__34382__auto__))),(1));
}));

(datascript.conn.Conn.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__34375__auto__){
var self__ = this;
var this__34375__auto____$1 = this;
return self__.meta;
}));

(datascript.conn.Conn.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this__34375__auto__){
var self__ = this;
var this__34375__auto____$1 = this;
return this__34375__auto____$1.extend_clj$core$IAtom3$deref_impl$arity$1(null);
}));

(datascript.conn.Conn.prototype.extend_clj$core$IAtom3$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.conn.Conn.prototype.extend_clj$core$IAtom3$validate$arity$3 = (function (this__34375__auto__,validator__34387__auto__,value__34388__auto__){
var self__ = this;
var this__34375__auto____$1 = this;
if((!((validator__34387__auto__ == null)))){
if(cljs.core.truth_((validator__34387__auto__.cljs$core$IFn$_invoke$arity$1 ? validator__34387__auto__.cljs$core$IFn$_invoke$arity$1(value__34388__auto__) : validator__34387__auto__.call(null,value__34388__auto__)))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid reference state",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value__34388__auto__], null));
}
} else {
return null;
}
}));

(datascript.conn.Conn.prototype.extend_clj$core$IAtom3$notify_watches$arity$3 = (function (this__34375__auto__,oldv__34383__auto__,newv__34378__auto__){
var self__ = this;
var this__34375__auto____$1 = this;
var seq__36939 = cljs.core.seq(self__.watches);
var chunk__36940 = null;
var count__36941 = (0);
var i__36942 = (0);
while(true){
if((i__36942 < count__36941)){
var vec__36953 = chunk__36940.cljs$core$IIndexed$_nth$arity$2(null,i__36942);
var k__34384__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36953,(0),null);
var w__34389__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36953,(1),null);
(w__34389__auto__.cljs$core$IFn$_invoke$arity$4 ? w__34389__auto__.cljs$core$IFn$_invoke$arity$4(k__34384__auto__,this__34375__auto____$1,oldv__34383__auto__,newv__34378__auto__) : w__34389__auto__.call(null,k__34384__auto__,this__34375__auto____$1,oldv__34383__auto__,newv__34378__auto__));


var G__37261 = seq__36939;
var G__37262 = chunk__36940;
var G__37263 = count__36941;
var G__37264 = (i__36942 + (1));
seq__36939 = G__37261;
chunk__36940 = G__37262;
count__36941 = G__37263;
i__36942 = G__37264;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__36939);
if(temp__5825__auto__){
var seq__36939__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36939__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__36939__$1);
var G__37265 = cljs.core.chunk_rest(seq__36939__$1);
var G__37266 = c__5673__auto__;
var G__37267 = cljs.core.count(c__5673__auto__);
var G__37268 = (0);
seq__36939 = G__37265;
chunk__36940 = G__37266;
count__36941 = G__37267;
i__36942 = G__37268;
continue;
} else {
var vec__36967 = cljs.core.first(seq__36939__$1);
var k__34384__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36967,(0),null);
var w__34389__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36967,(1),null);
(w__34389__auto__.cljs$core$IFn$_invoke$arity$4 ? w__34389__auto__.cljs$core$IFn$_invoke$arity$4(k__34384__auto__,this__34375__auto____$1,oldv__34383__auto__,newv__34378__auto__) : w__34389__auto__.call(null,k__34384__auto__,this__34375__auto____$1,oldv__34383__auto__,newv__34378__auto__));


var G__37271 = cljs.core.next(seq__36939__$1);
var G__37272 = null;
var G__37273 = (0);
var G__37274 = (0);
seq__36939 = G__37271;
chunk__36940 = G__37272;
count__36941 = G__37273;
i__36942 = G__37274;
continue;
}
} else {
return null;
}
}
break;
}
}));

(datascript.conn.Conn.prototype.extend_clj$core$IAtom3$swap_STAR_$arity$3 = (function (this__34375__auto__,f__34379__auto__,args__34390__auto__){
var self__ = this;
var this__34375__auto____$1 = this;
var oldv__34383__auto__ = cljs.core.deref(this__34375__auto____$1);
var newv__34378__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f__34379__auto__,oldv__34383__auto__,args__34390__auto__);
this__34375__auto____$1.extend_clj$core$IAtom3$validate$arity$3(null,self__.validator,newv__34378__auto__);

this__34375__auto____$1.extend_clj$core$IAtom3$compare_and_set_impl$arity$3(null,oldv__34383__auto__,newv__34378__auto__);

this__34375__auto____$1.extend_clj$core$IAtom3$notify_watches$arity$3(null,oldv__34383__auto__,newv__34378__auto__);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oldv__34383__auto__,newv__34378__auto__], null);
}));

(datascript.conn.Conn.prototype.extend_clj$core$IAtom3$deref_impl$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.atom));
}));

(datascript.conn.Conn.prototype.extend_clj$core$IAtom3$compare_and_set_impl$arity$3 = (function (this$,oldv,newv){
var self__ = this;
var this$__$1 = this;
return cljs.core.compare_and_set_BANG_(self__.atom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(self__.atom),new cljs.core.Keyword(null,"db","db",993250759),oldv),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(self__.atom),new cljs.core.Keyword(null,"db","db",993250759),newv));
}));

(datascript.conn.Conn.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__34375__auto__,k__34384__auto__){
var self__ = this;
var this__34375__auto____$1 = this;
return this__34375__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__34384__auto__,null);
}));

(datascript.conn.Conn.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__34375__auto__,k__34384__auto__,not_found__34386__auto__){
var self__ = this;
var this__34375__auto____$1 = this;
var G__36992 = k__34384__auto__;
var G__36992__$1 = (((G__36992 instanceof cljs.core.Keyword))?G__36992.fqn:null);
switch (G__36992__$1) {
case "atom":
return self__.atom;

break;
default:
return not_found__34386__auto__;

}
}));

(datascript.conn.Conn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atom","atom",1243487874,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null)], null);
}));

(datascript.conn.Conn.cljs$lang$type = true);

(datascript.conn.Conn.cljs$lang$ctorStr = "datascript.conn/Conn");

(datascript.conn.Conn.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"datascript.conn/Conn");
}));

/**
 * Positional factory function for datascript.conn/Conn.
 */
datascript.conn.__GT_Conn = (function datascript$conn$__GT_Conn(atom,validator,watches,meta){
return (new datascript.conn.Conn(atom,validator,watches,meta));
});


datascript.conn.__GT_Conn = (function datascript$conn$__GT_Conn(var_args){
var G__37001 = arguments.length;
switch (G__37001) {
case 1:
return datascript.conn.__GT_Conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5901__auto__ = [];
var len__5876__auto___37282 = arguments.length;
var i__5877__auto___37283 = (0);
while(true){
if((i__5877__auto___37283 < len__5876__auto___37282)){
args_arr__5901__auto__.push((arguments[i__5877__auto___37283]));

var G__37284 = (i__5877__auto___37283 + (1));
i__5877__auto___37283 = G__37284;
continue;
} else {
}
break;
}

var argseq__5902__auto__ = ((((1) < args_arr__5901__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5901__auto__.slice((1)),(0),null)):null);
return datascript.conn.__GT_Conn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5902__auto__);

}
});

(datascript.conn.__GT_Conn.cljs$core$IFn$_invoke$arity$1 = (function (atom){
return (new datascript.conn.Conn(atom,null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY));
}));

(datascript.conn.__GT_Conn.cljs$core$IFn$_invoke$arity$variadic = (function (atom,rest__34391__auto__){
var opts__34392__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,rest__34391__auto__);
var ref__34393__auto__ = (new datascript.conn.Conn(atom,null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY));
var temp__5829__auto___37287 = new cljs.core.Keyword(null,"validator","validator",-1966190681).cljs$core$IFn$_invoke$arity$1(opts__34392__auto__);
if((temp__5829__auto___37287 == null)){
} else {
var validator__34387__auto___37288 = temp__5829__auto___37287;
ref__34393__auto__.extend_clj$core$IAtom3$validate$arity$3(null,validator__34387__auto___37288,cljs.core.deref(ref__34393__auto__));

(ref__34393__auto__.validator = validator__34387__auto___37288);
}

var temp__5829__auto___37291 = new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(opts__34392__auto__);
if((temp__5829__auto___37291 == null)){
} else {
var meta__34394__auto___37292 = temp__5829__auto___37291;
cljs.core.reset_meta_BANG_(ref__34393__auto__,meta__34394__auto___37292);
}

return ref__34393__auto__;
}));

/** @this {Function} */
(datascript.conn.__GT_Conn.cljs$lang$applyTo = (function (seq36999){
var G__37000 = cljs.core.first(seq36999);
var seq36999__$1 = cljs.core.next(seq36999);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37000,seq36999__$1);
}));

(datascript.conn.__GT_Conn.cljs$lang$maxFixedArity = (1));


datascript.conn.make_conn = (function datascript$conn$make_conn(opts){
var G__37010 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(opts);
return (datascript.conn.__GT_Conn.cljs$core$IFn$_invoke$arity$1 ? datascript.conn.__GT_Conn.cljs$core$IFn$_invoke$arity$1(G__37010) : datascript.conn.__GT_Conn.call(null,G__37010));
});
datascript.conn.with$ = (function datascript$conn$with(var_args){
var G__37020 = arguments.length;
switch (G__37020) {
case 2:
return datascript.conn.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.conn.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(datascript.conn.with$.cljs$core$IFn$_invoke$arity$2 = (function (db,tx_data){
return datascript.conn.with$.cljs$core$IFn$_invoke$arity$3(db,tx_data,null);
}));

(datascript.conn.with$.cljs$core$IFn$_invoke$arity$3 = (function (db,tx_data,tx_meta){
if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

if((db instanceof datascript.db.FilteredDB)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Filtered DB cannot be modified",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transaction","filtered","transaction/filtered",1699706605)], null));
} else {
return datascript.db.transact_tx_data(datascript.db.__GT_TxReport(db,db,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tx_meta),tx_data);
}
}));

(datascript.conn.with$.cljs$lang$maxFixedArity = 3);

/**
 * Applies transaction to an immutable db value, returning new immutable db value. Same as `(:db-after (with db tx-data))`.
 */
datascript.conn.db_with = (function datascript$conn$db_with(db,tx_data){
if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(datascript.conn.with$.cljs$core$IFn$_invoke$arity$2(db,tx_data));
});
datascript.conn.conn_QMARK_ = (function datascript$conn$conn_QMARK_(conn){
var and__5140__auto__ = (((!((conn == null))))?(((((conn.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === conn.cljs$core$IDeref$))))?true:(((!conn.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,conn):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,conn));
if(and__5140__auto__){
var temp__5827__auto__ = cljs.core.deref(conn);
if((temp__5827__auto__ == null)){
return true;
} else {
var db = temp__5827__auto__;
return datascript.db.db_QMARK_(db);
}
} else {
return and__5140__auto__;
}
});
datascript.conn.conn_from_db = (function datascript$conn$conn_from_db(db){
if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

var temp__5827__auto__ = datascript.storage.storage(db);
if((temp__5827__auto__ == null)){
return datascript.conn.make_conn(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null));
} else {
var storage = temp__5827__auto__;
datascript.storage.store.cljs$core$IFn$_invoke$arity$1(db);

return datascript.conn.make_conn(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"tx-tail","tx-tail",1116487556),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"db-last-stored","db-last-stored",-2068760702),db], null));
}
});
datascript.conn.conn_from_datoms = (function datascript$conn$conn_from_datoms(var_args){
var G__37084 = arguments.length;
switch (G__37084) {
case 1:
return datascript.conn.conn_from_datoms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.conn.conn_from_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.conn.conn_from_datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(datascript.conn.conn_from_datoms.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return datascript.conn.conn_from_db(datascript.db.init_db(datoms,null,cljs.core.PersistentArrayMap.EMPTY));
}));

(datascript.conn.conn_from_datoms.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
return datascript.conn.conn_from_db(datascript.db.init_db(datoms,schema,cljs.core.PersistentArrayMap.EMPTY));
}));

(datascript.conn.conn_from_datoms.cljs$core$IFn$_invoke$arity$3 = (function (datoms,schema,opts){
return datascript.conn.conn_from_db(datascript.db.init_db(datoms,schema,datascript.storage.maybe_adapt_storage(opts)));
}));

(datascript.conn.conn_from_datoms.cljs$lang$maxFixedArity = 3);

datascript.conn.create_conn = (function datascript$conn$create_conn(var_args){
var G__37093 = arguments.length;
switch (G__37093) {
case 0:
return datascript.conn.create_conn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.conn.create_conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.conn.create_conn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(datascript.conn.create_conn.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.conn.conn_from_db(datascript.db.empty_db(null,cljs.core.PersistentArrayMap.EMPTY));
}));

(datascript.conn.create_conn.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return datascript.conn.conn_from_db(datascript.db.empty_db(schema,cljs.core.PersistentArrayMap.EMPTY));
}));

(datascript.conn.create_conn.cljs$core$IFn$_invoke$arity$2 = (function (schema,opts){
return datascript.conn.conn_from_db(datascript.db.empty_db(schema,datascript.storage.maybe_adapt_storage(opts)));
}));

(datascript.conn.create_conn.cljs$lang$maxFixedArity = 2);

datascript.conn.restore_conn = (function datascript$conn$restore_conn(var_args){
var G__37101 = arguments.length;
switch (G__37101) {
case 1:
return datascript.conn.restore_conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.conn.restore_conn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(datascript.conn.restore_conn.cljs$core$IFn$_invoke$arity$1 = (function (storage){
return datascript.conn.restore_conn.cljs$core$IFn$_invoke$arity$2(storage,cljs.core.PersistentArrayMap.EMPTY);
}));

(datascript.conn.restore_conn.cljs$core$IFn$_invoke$arity$2 = (function (storage,opts){
var temp__5829__auto__ = datascript.storage.restore_impl(storage,opts);
if((temp__5829__auto__ == null)){
return null;
} else {
var vec__37103 = temp__5829__auto__;
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37103,(0),null);
var tail = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37103,(1),null);
return datascript.conn.make_conn(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),datascript.storage.db_with_tail(db,tail),new cljs.core.Keyword(null,"tx-tail","tx-tail",1116487556),tail,new cljs.core.Keyword(null,"db-last-stored","db-last-stored",-2068760702),db], null));
}
}));

(datascript.conn.restore_conn.cljs$lang$maxFixedArity = 2);

datascript.conn.store_after_transact_BANG_ = (function datascript$conn$store_after_transact_BANG_(conn,tx_report){
if(cljs.core.truth_(new cljs.core.Keyword(null,"skip-store?","skip-store?",-484019625).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(conn)))){
return null;
} else {
var temp__5829__auto__ = datascript.storage.storage(cljs.core.deref(conn));
if((temp__5829__auto__ == null)){
return null;
} else {
var storage = temp__5829__auto__;
var map__37111 = tx_report;
var map__37111__$1 = cljs.core.__destructure_map(map__37111);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37111__$1,new cljs.core.Keyword(null,"db-after","db-after",-571884666));
var datoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37111__$1,new cljs.core.Keyword(null,"tx-data","tx-data",934159761));
var settings = me.tonsky.persistent_sorted_set.settings(new cljs.core.Keyword(null,"eavt","eavt",-666437073).cljs$core$IFn$_invoke$arity$1(db));
var _STAR_atom = new cljs.core.Keyword(null,"atom","atom",-397043653).cljs$core$IFn$_invoke$arity$1(conn);
var tx_tail_SINGLEQUOTE_ = new cljs.core.Keyword(null,"tx-tail","tx-tail",1116487556).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_STAR_atom,cljs.core.update,new cljs.core.Keyword(null,"tx-tail","tx-tail",1116487556),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datoms], 0)));
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tx_report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),new cljs.core.Keyword(null,"skip-store?","skip-store?",-484019625)], null)))){
return null;
} else {
if((cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.count),cljs.core._PLUS_,(0),tx_tail_SINGLEQUOTE_) > new cljs.core.Keyword(null,"branching-factor","branching-factor",1903198601).cljs$core$IFn$_invoke$arity$1(settings))){
datascript.storage.store_impl_BANG_(db,datascript.storage.storage_adapter(db),false);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_STAR_atom,cljs.core.assoc,new cljs.core.Keyword(null,"tx-tail","tx-tail",1116487556),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"db-last-stored","db-last-stored",-2068760702),db], 0));
} else {
return datascript.storage.store_tail(db,tx_tail_SINGLEQUOTE_);
}
}
}
}
});
datascript.conn._transact_BANG_ = (function datascript$conn$_transact_BANG_(conn,tx_data,tx_meta){
if(datascript.conn.conn_QMARK_(conn)){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var _STAR_report = cljs.core.volatile_BANG_(null);
var tx_meta_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(tx_meta,new cljs.core.Keyword(null,"skip-store?","skip-store?",-484019625));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(conn,(function (db){
var r = datascript.conn.with$.cljs$core$IFn$_invoke$arity$3(db,tx_data,tx_meta_SINGLEQUOTE_);
cljs.core.vreset_BANG_(_STAR_report,r);

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(r);
}));

var tx_report = cljs.core.deref(_STAR_report);
datascript.conn.store_after_transact_BANG_(conn,tx_report);

return cljs.core.deref(_STAR_report);
});
datascript.conn.run_callbacks = (function datascript$conn$run_callbacks(conn,report){
var seq__37135 = cljs.core.seq(new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"atom","atom",-397043653).cljs$core$IFn$_invoke$arity$1(conn))));
var chunk__37136 = null;
var count__37137 = (0);
var i__37138 = (0);
while(true){
if((i__37138 < count__37137)){
var vec__37174 = chunk__37136.cljs$core$IIndexed$_nth$arity$2(null,i__37138);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37174,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37174,(1),null);
(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(report) : callback.call(null,report));


var G__37335 = seq__37135;
var G__37336 = chunk__37136;
var G__37337 = count__37137;
var G__37338 = (i__37138 + (1));
seq__37135 = G__37335;
chunk__37136 = G__37336;
count__37137 = G__37337;
i__37138 = G__37338;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37135);
if(temp__5825__auto__){
var seq__37135__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37135__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__37135__$1);
var G__37339 = cljs.core.chunk_rest(seq__37135__$1);
var G__37340 = c__5673__auto__;
var G__37341 = cljs.core.count(c__5673__auto__);
var G__37342 = (0);
seq__37135 = G__37339;
chunk__37136 = G__37340;
count__37137 = G__37341;
i__37138 = G__37342;
continue;
} else {
var vec__37185 = cljs.core.first(seq__37135__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37185,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37185,(1),null);
(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(report) : callback.call(null,report));


var G__37343 = cljs.core.next(seq__37135__$1);
var G__37344 = null;
var G__37345 = (0);
var G__37346 = (0);
seq__37135 = G__37343;
chunk__37136 = G__37344;
count__37137 = G__37345;
i__37138 = G__37346;
continue;
}
} else {
return null;
}
}
break;
}
});
datascript.conn.transact_BANG_ = (function datascript$conn$transact_BANG_(var_args){
var G__37197 = arguments.length;
switch (G__37197) {
case 2:
return datascript.conn.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.conn.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(datascript.conn.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.conn.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx_data,null);
}));

(datascript.conn.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(datascript.conn.conn_QMARK_(conn)){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var report = datascript.conn._transact_BANG_(conn,tx_data,tx_meta);
datascript.conn.run_callbacks(conn,report);

return report;
}));

(datascript.conn.transact_BANG_.cljs$lang$maxFixedArity = 3);

datascript.conn.reset_conn_BANG_ = (function datascript$conn$reset_conn_BANG_(var_args){
var G__37207 = arguments.length;
switch (G__37207) {
case 2:
return datascript.conn.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.conn.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(datascript.conn.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,db){
return datascript.conn.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3(conn,db,null);
}));

(datascript.conn.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,db,tx_meta){
if(datascript.conn.conn_QMARK_(conn)){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

var db_before = cljs.core.deref(conn);
var report = datascript.db.map__GT_TxReport(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),db_before,new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(db_before)?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37204_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37204_SHARP_,new cljs.core.Keyword(null,"added","added",2057651688),false);
}),datascript.db._datoms(db_before,new cljs.core.Keyword(null,"eavt","eavt",-666437073),null,null,null,null)):null),datascript.db._datoms(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),null,null,null,null)),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null));
var temp__5827__auto___37369 = datascript.storage.storage(db_before);
if((temp__5827__auto___37369 == null)){
cljs.core.reset_BANG_(conn,db);
} else {
var storage_37370 = temp__5827__auto___37369;
datascript.storage.store.cljs$core$IFn$_invoke$arity$1(db);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"atom","atom",-397043653).cljs$core$IFn$_invoke$arity$1(conn),cljs.core.assoc,new cljs.core.Keyword(null,"db","db",993250759),db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tx-tail","tx-tail",1116487556),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"db-last-stored","db-last-stored",-2068760702),db], 0));
}

datascript.conn.run_callbacks(conn,report);

return db;
}));

(datascript.conn.reset_conn_BANG_.cljs$lang$maxFixedArity = 3);

datascript.conn.reset_schema_BANG_ = (function datascript$conn$reset_schema_BANG_(conn,schema){
if(datascript.conn.conn_QMARK_(conn)){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var db = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(conn,datascript.db.with_schema,schema);
var temp__5829__auto___37375 = datascript.storage.storage(cljs.core.deref(conn));
if((temp__5829__auto___37375 == null)){
} else {
var storage_37376 = temp__5829__auto___37375;
datascript.storage.store_impl_BANG_(db,datascript.storage.storage_adapter(db),true);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"atom","atom",-397043653).cljs$core$IFn$_invoke$arity$1(conn),cljs.core.assoc,new cljs.core.Keyword(null,"tx-tail","tx-tail",1116487556),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"db-last-stored","db-last-stored",-2068760702),db], 0));
}

return db;
});
datascript.conn.listen_BANG_ = (function datascript$conn$listen_BANG_(var_args){
var G__37222 = arguments.length;
switch (G__37222) {
case 2:
return datascript.conn.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.conn.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(datascript.conn.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,callback){
return datascript.conn.listen_BANG_.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.rand.cljs$core$IFn$_invoke$arity$0(),callback);
}));

(datascript.conn.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,key,callback){
if(datascript.conn.conn_QMARK_(conn)){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"atom","atom",-397043653).cljs$core$IFn$_invoke$arity$1(conn),cljs.core.update,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key,callback], 0));

return key;
}));

(datascript.conn.listen_BANG_.cljs$lang$maxFixedArity = 3);

datascript.conn.unlisten_BANG_ = (function datascript$conn$unlisten_BANG_(conn,key){
if(datascript.conn.conn_QMARK_(conn)){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"atom","atom",-397043653).cljs$core$IFn$_invoke$arity$1(conn),cljs.core.update,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0));
});

//# sourceMappingURL=datascript.conn.js.map
