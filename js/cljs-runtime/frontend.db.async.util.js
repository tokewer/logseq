goog.provide('frontend.db.async.util');
frontend.db.async.util.transform_pull_query = (function frontend$db$async$util$transform_pull_query(query){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"find","find",496279456),cljs.core.first(query))){
return clojure.walk.postwalk((function (f){
if((((f instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Keyword("block","content","block/content",-161885195))))){
return new cljs.core.Keyword("block","title","block/title",710445684);
} else {
if(((cljs.core.list_QMARK_(f)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"pull","pull",779986722,null),cljs.core.first(f))) && (((cljs.core.vector_QMARK_(cljs.core.last(f))) && (cljs.core.not_any_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),null], null), null),f)))))))){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"pull","pull",779986722,null),(new cljs.core.List(null,cljs.core.second(f),(new cljs.core.List(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.last(f),new cljs.core.Keyword("db","id","db/id",-1388397098)),null,(1),null)),(2),null)),(3),null));
} else {
return f;

}
}
}),query);
} else {
return query;
}
});
frontend.db.async.util._LT_invoke_db_worker = (function frontend$db$async$util$_LT_invoke_db_worker(var_args){
var args__5882__auto__ = [];
var len__5876__auto___56183 = arguments.length;
var i__5877__auto___56184 = (0);
while(true){
if((i__5877__auto___56184 < len__5876__auto___56183)){
args__5882__auto__.push((arguments[i__5877__auto___56184]));

var G__56185 = (i__5877__auto___56184 + (1));
i__5877__auto___56184 = G__56185;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.db.async.util._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.db.async.util._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic = (function (api,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(frontend.state._LT_invoke_db_worker,api,args);
}));

(frontend.db.async.util._LT_invoke_db_worker.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.db.async.util._LT_invoke_db_worker.cljs$lang$applyTo = (function (seq56170){
var G__56171 = cljs.core.first(seq56170);
var seq56170__$1 = cljs.core.next(seq56170);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56171,seq56170__$1);
}));

frontend.db.async.util._LT_q = (function frontend$db$async$util$_LT_q(var_args){
var args__5882__auto__ = [];
var len__5876__auto___56186 = arguments.length;
var i__5877__auto___56187 = (0);
while(true){
if((i__5877__auto___56187 < len__5876__auto___56186)){
args__5882__auto__.push((arguments[i__5877__auto___56187]));

var G__56188 = (i__5877__auto___56187 + (1));
i__5877__auto___56187 = G__56188;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return frontend.db.async.util._LT_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(frontend.db.async.util._LT_q.cljs$core$IFn$_invoke$arity$variadic = (function (graph,p__56179,inputs){
var map__56180 = p__56179;
var map__56180__$1 = cljs.core.__destructure_map(map__56180);
var _opts = map__56180__$1;
var advanced_query_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56180__$1,new cljs.core.Keyword(null,"advanced-query?","advanced-query?",692769688));
if(cljs.core.not_any_QMARK_(cljs.core.fn_QMARK_,inputs)){
} else {
throw (new Error((""+"Assert failed: "+"Async query inputs can't include fns because fn can't be serialized"+"\n"+"(not-any? fn? inputs)")));
}

var inputs_SINGLEQUOTE_ = (cljs.core.truth_(advanced_query_QMARK_)?cljs.core.cons(frontend.db.async.util.transform_pull_query(cljs.core.first(inputs)),cljs.core.rest(inputs)):inputs);
return frontend.db.async.util._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","q","thread-api/q",-245089616),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph,inputs_SINGLEQUOTE_], 0));
}));

(frontend.db.async.util._LT_q.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.db.async.util._LT_q.cljs$lang$applyTo = (function (seq56176){
var G__56177 = cljs.core.first(seq56176);
var seq56176__$1 = cljs.core.next(seq56176);
var G__56178 = cljs.core.first(seq56176__$1);
var seq56176__$2 = cljs.core.next(seq56176__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56177,G__56178,seq56176__$2);
}));


//# sourceMappingURL=frontend.db.async.util.js.map
