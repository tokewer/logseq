goog.provide('sci.impl.async_macro');
/**
 * Wrap value in promise resolve to handle non-Promise values
 */
sci.impl.async_macro.wrap_promise = (function sci$impl$async_macro$wrap_promise(expr){
return (new cljs.core.List(null,new cljs.core.Symbol("sci.impl.async-await","resolve","sci.impl.async-await/resolve",214529841,null),(new cljs.core.List(null,expr,null,(1),null)),(2),null));
});
/**
 * Create a .then chain
 */
sci.impl.async_macro.promise_then = (function sci$impl$async_macro$promise_then(promise_expr,callback){
return (new cljs.core.List(null,new cljs.core.Symbol("sci.impl.async-await","then","sci.impl.async-await/then",1217271817,null),(new cljs.core.List(null,promise_expr,(new cljs.core.List(null,callback,null,(1),null)),(2),null)),(3),null));
});
/**
 * Create a .catch chain
 */
sci.impl.async_macro.promise_catch = (function sci$impl$async_macro$promise_catch(promise_expr,callback){
return (new cljs.core.List(null,new cljs.core.Symbol("sci.impl.async-await","catch","sci.impl.async-await/catch",-2092966249,null),(new cljs.core.List(null,promise_expr,(new cljs.core.List(null,callback,null,(1),null)),(2),null)),(3),null));
});
/**
 * Create a .catch chain that unwraps SCI error wrapping before calling handler
 */
sci.impl.async_macro.promise_catch_for_try = (function sci$impl$async_macro$promise_catch_for_try(promise_expr,callback){
return (new cljs.core.List(null,new cljs.core.Symbol("sci.impl.async-await","catch-for-try","sci.impl.async-await/catch-for-try",-653307970,null),(new cljs.core.List(null,promise_expr,(new cljs.core.List(null,callback,null,(1),null)),(2),null)),(3),null));
});
/**
 * Create a .finally chain
 */
sci.impl.async_macro.promise_finally = (function sci$impl$async_macro$promise_finally(promise_expr,callback){
return (new cljs.core.List(null,new cljs.core.Symbol("sci.impl.async-await","finally","sci.impl.async-await/finally",-736992924,null),(new cljs.core.List(null,promise_expr,(new cljs.core.List(null,callback,null,(1),null)),(2),null)),(3),null));
});
/**
 * Mark a form as promise-producing using metadata.
 */
sci.impl.async_macro.mark_promise = (function sci$impl$async_macro$mark_promise(form){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword("sci.impl","promise","sci.impl/promise",-2106796012),true);
});
/**
 * Check if form is already a promise-producing expression.
 * Detects metadata marker or calls to sci.impl.async-await helpers.
 */
sci.impl.async_macro.promise_form_QMARK_ = (function sci$impl$async_macro$promise_form_QMARK_(form){
var or__5142__auto__ = new cljs.core.Keyword("sci.impl","promise","sci.impl/promise",-2106796012).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto__ = cljs.core.seq_QMARK_(form);
if(and__5140__auto__){
var op = cljs.core.first(form);
return (((op instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("sci.impl.async-await",cljs.core.namespace(op))));
} else {
return and__5140__auto__;
}
}
});
/**
 * If any branch is a promise, wrap all non-promise branches in resolve
 * so all branches consistently return promises. Returns [normalized? branches].
 */
sci.impl.async_macro.normalize_branches = (function sci$impl$async_macro$normalize_branches(branches){
var vec__74631 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__74634,branch){
var vec__74635 = p__74634;
var has_promise_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74635,(0),null);
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74635,(1),null);
if(cljs.core.truth_(sci.impl.async_macro.promise_form_QMARK_(branch))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,branch)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [has_promise_QMARK_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,branch)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.PersistentVector.EMPTY], null),branches);
var has_promise_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74631,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74631,(1),null);
if(cljs.core.truth_(has_promise_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__74630_SHARP_){
if(cljs.core.truth_(sci.impl.async_macro.promise_form_QMARK_(p1__74630_SHARP_))){
return p1__74630_SHARP_;
} else {
return sci.impl.async_macro.wrap_promise(p1__74630_SHARP_);
}
}),result)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,branches], null);
}
});
/**
 * Transform do with await calls into .then chains.
 */
sci.impl.async_macro.transform_do = (function sci$impl$async_macro$transform_do(ctx,locals,exprs){
var exprs__$1 = exprs;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq(exprs__$1)){
var expr = cljs.core.first(exprs__$1);
var rest_exprs = cljs.core.rest(exprs__$1);
var transformed = (sci.impl.async_macro.transform_async_body.cljs$core$IFn$_invoke$arity$3 ? sci.impl.async_macro.transform_async_body.cljs$core$IFn$_invoke$arity$3(ctx,locals,expr) : sci.impl.async_macro.transform_async_body.call(null,ctx,locals,expr));
if(cljs.core.truth_(sci.impl.async_macro.promise_form_QMARK_(transformed))){
var rest_body = ((cljs.core.seq(rest_exprs))?(sci.impl.async_macro.transform_do.cljs$core$IFn$_invoke$arity$3 ? sci.impl.async_macro.transform_do.cljs$core$IFn$_invoke$arity$3(ctx,locals,rest_exprs) : sci.impl.async_macro.transform_do.call(null,ctx,locals,rest_exprs)):null);
if(cljs.core.seq(acc)){
return sci.impl.async_macro.mark_promise(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,(cljs.core.truth_(rest_body)?sci.impl.async_macro.promise_then(transformed,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),(new cljs.core.List(null,rest_body,null,(1),null)),(2),null)),(3),null))):transformed))));
} else {
if(cljs.core.truth_(rest_body)){
return sci.impl.async_macro.promise_then(transformed,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),(new cljs.core.List(null,rest_body,null,(1),null)),(2),null)),(3),null)));
} else {
return transformed;
}
}
} else {
var G__74993 = rest_exprs;
var G__74994 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,transformed);
exprs__$1 = G__74993;
acc = G__74994;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(acc))){
return cljs.core.first(acc);
} else {
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),acc);
}
}
break;
}
});
/**
 * Transform let* with await calls into .then chains.
 */
sci.impl.async_macro.transform_let_STAR_ = (function sci$impl$async_macro$transform_let_STAR_(ctx,locals,bindings,body){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings);
var acc_bindings = cljs.core.PersistentVector.EMPTY;
var current_locals = locals;
while(true){
var temp__5823__auto__ = cljs.core.first(pairs);
if(cljs.core.truth_(temp__5823__auto__)){
var vec__74859 = temp__5823__auto__;
var binding_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74859,(0),null);
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74859,(1),null);
var transformed_init = (sci.impl.async_macro.transform_async_body.cljs$core$IFn$_invoke$arity$3 ? sci.impl.async_macro.transform_async_body.cljs$core$IFn$_invoke$arity$3(ctx,current_locals,init) : sci.impl.async_macro.transform_async_body.call(null,ctx,current_locals,init));
if(cljs.core.truth_(sci.impl.async_macro.promise_form_QMARK_(transformed_init))){
var new_locals = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_locals,binding_name);
var rest_pairs = cljs.core.rest(pairs);
var rest_body = ((cljs.core.seq(rest_pairs))?(function (){var G__74866 = ctx;
var G__74867 = new_locals;
var G__74868 = cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest_pairs], 0)));
var G__74869 = body;
return (sci.impl.async_macro.transform_let_STAR_.cljs$core$IFn$_invoke$arity$4 ? sci.impl.async_macro.transform_let_STAR_.cljs$core$IFn$_invoke$arity$4(G__74866,G__74867,G__74868,G__74869) : sci.impl.async_macro.transform_let_STAR_.call(null,G__74866,G__74867,G__74868,G__74869));
})():sci.impl.async_macro.transform_do(ctx,new_locals,body));
if(cljs.core.seq(acc_bindings)){
return sci.impl.async_macro.mark_promise((new cljs.core.List(null,new cljs.core.Symbol(null,"let*","let*",1920721458,null),(new cljs.core.List(null,cljs.core.vec(acc_bindings),(new cljs.core.List(null,sci.impl.async_macro.promise_then(transformed_init,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [binding_name], null),(new cljs.core.List(null,rest_body,null,(1),null)),(2),null)),(3),null))),null,(1),null)),(2),null)),(3),null)));
} else {
return sci.impl.async_macro.promise_then(transformed_init,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [binding_name], null),(new cljs.core.List(null,rest_body,null,(1),null)),(2),null)),(3),null)));
}
} else {
var G__74996 = cljs.core.rest(pairs);
var G__74997 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(acc_bindings,binding_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([transformed_init], 0));
var G__74998 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_locals,binding_name);
pairs = G__74996;
acc_bindings = G__74997;
current_locals = G__74998;
continue;
}
} else {
var transformed_body = sci.impl.async_macro.transform_do(ctx,current_locals,body);
if(cljs.core.seq(acc_bindings)){
if(cljs.core.truth_(sci.impl.async_macro.promise_form_QMARK_(transformed_body))){
return sci.impl.async_macro.mark_promise((new cljs.core.List(null,new cljs.core.Symbol(null,"let*","let*",1920721458,null),(new cljs.core.List(null,cljs.core.vec(acc_bindings),(new cljs.core.List(null,transformed_body,null,(1),null)),(2),null)),(3),null)));
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"let*","let*",1920721458,null),(new cljs.core.List(null,cljs.core.vec(acc_bindings),(new cljs.core.List(null,transformed_body,null,(1),null)),(2),null)),(3),null));
}
} else {
return transformed_body;
}
}
break;
}
});
/**
 * Transform loop* with await into a recursive promise-returning function.
 * Wraps init values in let* to preserve sequential scoping (each init sees previous bindings).
 * Returns original loop unchanged if there are no promises.
 * 
 * (loop* [x 0] (if (< x 3) (do (await p) (recur (inc x))) x))
 * =>
 * (let* [x 0]
 *   ((fn loop-fn [x] (if (< x 3) (.then p (fn [_] (loop-fn (inc x)))) (js/Promise.resolve x))) x))
 */
sci.impl.async_macro.transform_loop_STAR_ = (function sci$impl$async_macro$transform_loop_STAR_(ctx,locals,bindings,body){
var loop_fn_name = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("loop_fn__");
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings);
var param_names = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var init_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs);
var body_locals = cljs.core.into.cljs$core$IFn$_invoke$arity$2(locals,param_names);
var loop_ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"recur-target","recur-target",-1909494536),loop_fn_name);
var transformed_body = sci.impl.async_macro.transform_do(loop_ctx,body_locals,body);
var let_bindings = cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(param_names,init_values));
var transformed_let_check = sci.impl.async_macro.transform_let_STAR_(ctx,locals,let_bindings,(new cljs.core.List(null,transformed_body,null,(1),null)));
var has_promise_QMARK_ = (function (){var or__5142__auto__ = sci.impl.async_macro.promise_form_QMARK_(transformed_body);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return sci.impl.async_macro.promise_form_QMARK_(transformed_let_check);
}
})();
if(cljs.core.truth_(has_promise_QMARK_)){
var promised_body = (cljs.core.truth_(sci.impl.async_macro.promise_form_QMARK_(transformed_body))?transformed_body:sci.impl.async_macro.wrap_promise(transformed_body));
var loop_fn = (new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),(new cljs.core.List(null,loop_fn_name,(new cljs.core.List(null,param_names,(new cljs.core.List(null,promised_body,null,(1),null)),(2),null)),(3),null)),(4),null));
var loop_call = sci.impl.async_macro.mark_promise(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.list,loop_fn,param_names));
return sci.impl.async_macro.transform_let_STAR_(ctx,locals,let_bindings,(new cljs.core.List(null,loop_call,null,(1),null)));
} else {
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"loop*","loop*",615029416,null),bindings,body);
}
});
/**
 * Transform try/catch/finally with await into Promise .catch/.finally chains.
 * Only uses promise chains if there's actually an await somewhere.
 */
sci.impl.async_macro.transform_try = (function sci$impl$async_macro$transform_try(ctx,locals,exprs){
var catch_finally_QMARK_ = (function (form){
var and__5140__auto__ = cljs.core.seq_QMARK_(form);
if(and__5140__auto__){
var G__74894 = cljs.core.first(form);
var fexpr__74893 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"finally","finally",-1065347064,null),null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null], null), null);
return (fexpr__74893.cljs$core$IFn$_invoke$arity$1 ? fexpr__74893.cljs$core$IFn$_invoke$arity$1(G__74894) : fexpr__74893.call(null,G__74894));
} else {
return and__5140__auto__;
}
});
var body_exprs = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(catch_finally_QMARK_),exprs);
var clauses = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(catch_finally_QMARK_),exprs);
var catch_clauses = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__74884_SHARP_){
return ((cljs.core.seq_QMARK_(p1__74884_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"catch","catch",-1616370245,null),cljs.core.first(p1__74884_SHARP_))));
}),clauses);
var finally_clause = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__74885_SHARP_){
return ((cljs.core.seq_QMARK_(p1__74885_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"finally","finally",-1065347064,null),cljs.core.first(p1__74885_SHARP_))));
}),clauses));
var transformed_body = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(body_exprs)))?(function (){var G__74904 = ctx;
var G__74905 = locals;
var G__74906 = cljs.core.first(body_exprs);
return (sci.impl.async_macro.transform_async_body.cljs$core$IFn$_invoke$arity$3 ? sci.impl.async_macro.transform_async_body.cljs$core$IFn$_invoke$arity$3(G__74904,G__74905,G__74906) : sci.impl.async_macro.transform_async_body.call(null,G__74904,G__74905,G__74906));
})():sci.impl.async_macro.transform_do(ctx,locals,body_exprs));
var transformed_catches = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (catch_clause){
var vec__74907 = catch_clause;
var seq__74908 = cljs.core.seq(vec__74907);
var first__74909 = cljs.core.first(seq__74908);
var seq__74908__$1 = cljs.core.next(seq__74908);
var _catch_sym = first__74909;
var first__74909__$1 = cljs.core.first(seq__74908__$1);
var seq__74908__$2 = cljs.core.next(seq__74908__$1);
var type = first__74909__$1;
var first__74909__$2 = cljs.core.first(seq__74908__$2);
var seq__74908__$3 = cljs.core.next(seq__74908__$2);
var binding = first__74909__$2;
var handler_body = seq__74908__$3;
var handler_locals = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(locals,binding);
var transformed_handler = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(handler_body)))?(function (){var G__74914 = ctx;
var G__74915 = handler_locals;
var G__74916 = cljs.core.first(handler_body);
return (sci.impl.async_macro.transform_async_body.cljs$core$IFn$_invoke$arity$3 ? sci.impl.async_macro.transform_async_body.cljs$core$IFn$_invoke$arity$3(G__74914,G__74915,G__74916) : sci.impl.async_macro.transform_async_body.call(null,G__74914,G__74915,G__74916));
})():sci.impl.async_macro.transform_do(ctx,handler_locals,handler_body));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clause","clause",1479668060),catch_clause,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"binding","binding",539932593),binding,new cljs.core.Keyword(null,"transformed","transformed",1969289512),transformed_handler], null);
}),catch_clauses);
var transformed_finally = (cljs.core.truth_(finally_clause)?(function (){var vec__74917 = finally_clause;
var seq__74918 = cljs.core.seq(vec__74917);
var first__74919 = cljs.core.first(seq__74918);
var seq__74918__$1 = cljs.core.next(seq__74918);
var _ = first__74919;
var finally_body = seq__74918__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(finally_body))){
var G__74920 = ctx;
var G__74921 = locals;
var G__74922 = cljs.core.first(finally_body);
return (sci.impl.async_macro.transform_async_body.cljs$core$IFn$_invoke$arity$3 ? sci.impl.async_macro.transform_async_body.cljs$core$IFn$_invoke$arity$3(G__74920,G__74921,G__74922) : sci.impl.async_macro.transform_async_body.call(null,G__74920,G__74921,G__74922));
} else {
return sci.impl.async_macro.transform_do(ctx,locals,finally_body);
}
})():null);
var has_promise_QMARK_ = (function (){var or__5142__auto__ = sci.impl.async_macro.promise_form_QMARK_(transformed_body);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core.some((function (p1__74888_SHARP_){
return sci.impl.async_macro.promise_form_QMARK_(new cljs.core.Keyword(null,"transformed","transformed",1969289512).cljs$core$IFn$_invoke$arity$1(p1__74888_SHARP_));
}),transformed_catches);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return sci.impl.async_macro.promise_form_QMARK_(transformed_finally);
}
}
})();
if(cljs.core.truth_(has_promise_QMARK_)){
var promise_chain = sci.impl.async_macro.promise_then(sci.impl.async_macro.wrap_promise(null),(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),(new cljs.core.List(null,transformed_body,null,(1),null)),(2),null)),(3),null)));
var with_catch = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (chain,p__74926){
var map__74929 = p__74926;
var map__74929__$1 = cljs.core.__destructure_map(map__74929);
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74929__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var transformed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74929__$1,new cljs.core.Keyword(null,"transformed","transformed",1969289512));
return sci.impl.async_macro.promise_catch_for_try(chain,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [binding], null),(new cljs.core.List(null,transformed,null,(1),null)),(2),null)),(3),null)));
}),promise_chain,transformed_catches);
var with_finally = (cljs.core.truth_(transformed_finally)?sci.impl.async_macro.promise_finally(with_catch,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),(new cljs.core.List(null,cljs.core.PersistentVector.EMPTY,(new cljs.core.List(null,transformed_finally,null,(1),null)),(2),null)),(3),null))):with_catch);
return with_finally;
} else {
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),exprs);
}
});
/**
 * Chain a sequence of already-transformed elements, replacing promise-producing ones
 * with gensym bindings via .then chains. Calls rebuild-fn with all resolved elements.
 */
sci.impl.async_macro.chain_promises = (function sci$impl$async_macro$chain_promises(transformed,rebuild_fn){
var chain = (function sci$impl$async_macro$chain_promises_$_chain(elems_before,remaining){
if(cljs.core.seq(remaining)){
var elem = cljs.core.first(remaining);
if(cljs.core.truth_(sci.impl.async_macro.promise_form_QMARK_(elem))){
var await_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("await__");
return sci.impl.async_macro.promise_then(elem,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [await_sym], null),(new cljs.core.List(null,sci$impl$async_macro$chain_promises_$_chain(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(elems_before,await_sym),cljs.core.rest(remaining)),null,(1),null)),(2),null)),(3),null)));
} else {
return sci$impl$async_macro$chain_promises_$_chain(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(elems_before,elem),cljs.core.rest(remaining));
}
} else {
return (rebuild_fn.cljs$core$IFn$_invoke$arity$1 ? rebuild_fn.cljs$core$IFn$_invoke$arity$1(elems_before) : rebuild_fn.call(null,elems_before));
}
});
return chain(cljs.core.PersistentVector.EMPTY,transformed);
});
/**
 * Transform a collection (vector or map entries), chaining any promise-producing elements.
 * rebuild-fn takes the transformed elements and rebuilds the collection.
 */
sci.impl.async_macro.transform_coll_with_await = (function sci$impl$async_macro$transform_coll_with_await(ctx,locals,elements,rebuild_fn,original){
var transformed = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__74932_SHARP_){
return (sci.impl.async_macro.transform_async_body.cljs$core$IFn$_invoke$arity$3 ? sci.impl.async_macro.transform_async_body.cljs$core$IFn$_invoke$arity$3(ctx,locals,p1__74932_SHARP_) : sci.impl.async_macro.transform_async_body.call(null,ctx,locals,p1__74932_SHARP_));
}),elements));
if(cljs.core.truth_(cljs.core.some(sci.impl.async_macro.promise_form_QMARK_,transformed))){
return sci.impl.async_macro.chain_promises(transformed,rebuild_fn);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(transformed,cljs.core.seq(elements))){
return original;
} else {
return (rebuild_fn.cljs$core$IFn$_invoke$arity$1 ? rebuild_fn.cljs$core$IFn$_invoke$arity$1(transformed) : rebuild_fn.call(null,transformed));
}
}
});
/**
 * Transform a general expression, chaining any promise-producing subforms.
 */
sci.impl.async_macro.transform_expr_with_await = (function sci$impl$async_macro$transform_expr_with_await(ctx,locals,expr){
if(cljs.core.seq_QMARK_(expr)){
var op = cljs.core.first(expr);
var args = cljs.core.rest(expr);
var transformed_args = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__74937_SHARP_){
return (sci.impl.async_macro.transform_async_body.cljs$core$IFn$_invoke$arity$3 ? sci.impl.async_macro.transform_async_body.cljs$core$IFn$_invoke$arity$3(ctx,locals,p1__74937_SHARP_) : sci.impl.async_macro.transform_async_body.call(null,ctx,locals,p1__74937_SHARP_));
}),args));
if(cljs.core.truth_(cljs.core.some(sci.impl.async_macro.promise_form_QMARK_,transformed_args))){
return sci.impl.async_macro.chain_promises(transformed_args,(function (p1__74938_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.list,op,p1__74938_SHARP_);
}));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(transformed_args,cljs.core.seq(args))){
return expr;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.list,op,transformed_args);
}
}
} else {
return expr;
}
});
/**
 * Walk body and transform await calls. Expands macros first if needed.
 * locals is a set of locally bound symbols that should not be macro-expanded.
 */
sci.impl.async_macro.transform_async_body = (function sci$impl$async_macro$transform_async_body(ctx,locals,body){
var op = ((cljs.core.seq_QMARK_(body))?cljs.core.first(body):null);
var ctx_with_locals = ((cljs.core.seq(locals))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.merge,cljs.core.zipmap(locals,locals)):ctx);
var expanded = ((((cljs.core.seq_QMARK_(body)) && ((((op instanceof cljs.core.Symbol)) && ((((!(cljs.core.contains_QMARK_(locals,op)))) && (cljs.core.not((function (){var fexpr__74954 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,new cljs.core.Symbol(null,"loop*","loop*",615029416,null),null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,new cljs.core.Symbol(null,"let*","let*",1920721458,null),null,new cljs.core.Symbol(null,"await","await",1341799365,null),null,new cljs.core.Symbol(null,"case*","case*",-1938255072,null),null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null], null), null);
return (fexpr__74954.cljs$core$IFn$_invoke$arity$1 ? fexpr__74954.cljs$core$IFn$_invoke$arity$1(op) : fexpr__74954.call(null,op));
})()))))))))?sci.impl.macroexpand.macroexpand_1(ctx_with_locals,body):body);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expanded,body)){
return (sci.impl.async_macro.transform_async_body.cljs$core$IFn$_invoke$arity$3 ? sci.impl.async_macro.transform_async_body.cljs$core$IFn$_invoke$arity$3(ctx,locals,expanded) : sci.impl.async_macro.transform_async_body.call(null,ctx,locals,expanded));
} else {
if(cljs.core.seq_QMARK_(body)){
var G__74958 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),G__74958)){
return body;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__74958)){
var vec__74959 = body;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74959,(0),null);
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74959,(1),null);
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74959,(2),null);
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74959,(3),null);
var transformed_test = (sci.impl.async_macro.transform_async_body.cljs$core$IFn$_invoke$arity$3 ? sci.impl.async_macro.transform_async_body.cljs$core$IFn$_invoke$arity$3(ctx,locals,test) : sci.impl.async_macro.transform_async_body.call(null,ctx,locals,test));
var transformed_then = (sci.impl.async_macro.transform_async_body.cljs$core$IFn$_invoke$arity$3 ? sci.impl.async_macro.transform_async_body.cljs$core$IFn$_invoke$arity$3(ctx,locals,then) : sci.impl.async_macro.transform_async_body.call(null,ctx,locals,then));
var transformed_else = (cljs.core.truth_(else$)?(sci.impl.async_macro.transform_async_body.cljs$core$IFn$_invoke$arity$3 ? sci.impl.async_macro.transform_async_body.cljs$core$IFn$_invoke$arity$3(ctx,locals,else$) : sci.impl.async_macro.transform_async_body.call(null,ctx,locals,else$)):null);
var test_is_promise_QMARK_ = sci.impl.async_macro.promise_form_QMARK_(transformed_test);
var vec__74962 = sci.impl.async_macro.normalize_branches(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [transformed_then,transformed_else], null));
var any_branch_promise_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74962,(0),null);
var vec__74965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74962,(1),null);
var final_then = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74965,(0),null);
var final_else = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74965,(1),null);
if(cljs.core.truth_((function (){var or__5142__auto__ = test_is_promise_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return any_branch_promise_QMARK_;
}
})())){
if(cljs.core.truth_(test_is_promise_QMARK_)){
var test_binding = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("test__");
return sci.impl.async_macro.promise_then(transformed_test,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_binding], null),(new cljs.core.List(null,(cljs.core.truth_(final_else)?(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),(new cljs.core.List(null,test_binding,(new cljs.core.List(null,final_then,(new cljs.core.List(null,final_else,null,(1),null)),(2),null)),(3),null)),(4),null)):(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),(new cljs.core.List(null,test_binding,(new cljs.core.List(null,final_then,null,(1),null)),(2),null)),(3),null))),null,(1),null)),(2),null)),(3),null)));
} else {
return sci.impl.async_macro.mark_promise((cljs.core.truth_(final_else)?(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),(new cljs.core.List(null,transformed_test,(new cljs.core.List(null,final_then,(new cljs.core.List(null,final_else,null,(1),null)),(2),null)),(3),null)),(4),null)):(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),(new cljs.core.List(null,transformed_test,(new cljs.core.List(null,final_then,null,(1),null)),(2),null)),(3),null))));
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(transformed_test,test)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(transformed_then,then)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(transformed_else,else$)))))){
return body;
} else {
if(cljs.core.truth_(transformed_else)){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),(new cljs.core.List(null,transformed_test,(new cljs.core.List(null,transformed_then,(new cljs.core.List(null,transformed_else,null,(1),null)),(2),null)),(3),null)),(4),null));
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),(new cljs.core.List(null,transformed_test,(new cljs.core.List(null,transformed_then,null,(1),null)),(2),null)),(3),null));
}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"loop*","loop*",615029416,null),G__74958)){
var vec__74969 = body;
var seq__74970 = cljs.core.seq(vec__74969);
var first__74971 = cljs.core.first(seq__74970);
var seq__74970__$1 = cljs.core.next(seq__74970);
var _ = first__74971;
var first__74971__$1 = cljs.core.first(seq__74970__$1);
var seq__74970__$2 = cljs.core.next(seq__74970__$1);
var bindings = first__74971__$1;
var exprs = seq__74970__$2;
return sci.impl.async_macro.transform_loop_STAR_(ctx,locals,bindings,exprs);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__74958)){
return sci.impl.async_macro.transform_do(ctx,locals,cljs.core.rest(body));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),G__74958)){
return body;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let*","let*",1920721458,null),G__74958)){
var vec__74972 = body;
var seq__74973 = cljs.core.seq(vec__74972);
var first__74974 = cljs.core.first(seq__74973);
var seq__74973__$1 = cljs.core.next(seq__74973);
var _ = first__74974;
var first__74974__$1 = cljs.core.first(seq__74973__$1);
var seq__74973__$2 = cljs.core.next(seq__74973__$1);
var bindings = first__74974__$1;
var exprs = seq__74973__$2;
return sci.impl.async_macro.transform_let_STAR_(ctx,locals,bindings,exprs);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"await","await",1341799365,null),G__74958)){
var await_arg = cljs.core.second(body);
var transformed_arg = (sci.impl.async_macro.transform_async_body.cljs$core$IFn$_invoke$arity$3 ? sci.impl.async_macro.transform_async_body.cljs$core$IFn$_invoke$arity$3(ctx,locals,await_arg) : sci.impl.async_macro.transform_async_body.call(null,ctx,locals,await_arg));
return sci.impl.async_macro.wrap_promise(transformed_arg);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case*","case*",-1938255072,null),G__74958)){
var vec__74975 = body;
var seq__74976 = cljs.core.seq(vec__74975);
var first__74977 = cljs.core.first(seq__74976);
var seq__74976__$1 = cljs.core.next(seq__74976);
var case_STAR__sym = first__74977;
var first__74977__$1 = cljs.core.first(seq__74976__$1);
var seq__74976__$2 = cljs.core.next(seq__74976__$1);
var test_expr = first__74977__$1;
var clauses = seq__74976__$2;
var transformed_test = (sci.impl.async_macro.transform_async_body.cljs$core$IFn$_invoke$arity$3 ? sci.impl.async_macro.transform_async_body.cljs$core$IFn$_invoke$arity$3(ctx,locals,test_expr) : sci.impl.async_macro.transform_async_body.call(null,ctx,locals,test_expr));
var clause_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses);
var has_default_QMARK_ = cljs.core.odd_QMARK_(cljs.core.count(clauses));
var default_expr = ((has_default_QMARK_)?cljs.core.last(clauses):null);
var match_constants = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,clause_pairs);
var transformed_results = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__74947_SHARP_){
var G__74982 = ctx;
var G__74983 = locals;
var G__74984 = cljs.core.second(p1__74947_SHARP_);
return (sci.impl.async_macro.transform_async_body.cljs$core$IFn$_invoke$arity$3 ? sci.impl.async_macro.transform_async_body.cljs$core$IFn$_invoke$arity$3(G__74982,G__74983,G__74984) : sci.impl.async_macro.transform_async_body.call(null,G__74982,G__74983,G__74984));
}),clause_pairs);
var transformed_default = ((has_default_QMARK_)?(sci.impl.async_macro.transform_async_body.cljs$core$IFn$_invoke$arity$3 ? sci.impl.async_macro.transform_async_body.cljs$core$IFn$_invoke$arity$3(ctx,locals,default_expr) : sci.impl.async_macro.transform_async_body.call(null,ctx,locals,default_expr)):null);
var all_results = (function (){var G__74987 = transformed_results;
if(has_default_QMARK_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__74987,transformed_default);
} else {
return G__74987;
}
})();
var vec__74978 = sci.impl.async_macro.normalize_branches(all_results);
var any_result_is_promise_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74978,(0),null);
var normalized_results = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74978,(1),null);
var test_is_promise_QMARK_ = sci.impl.async_macro.promise_form_QMARK_(transformed_test);
var rebuild_clauses = (function (results){
var case_results = ((has_default_QMARK_)?cljs.core.butlast(results):results);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(match_constants,case_results),((has_default_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(results)], null):null));
});
if(cljs.core.truth_((function (){var or__5142__auto__ = test_is_promise_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return any_result_is_promise_QMARK_;
}
})())){
var all_clauses = rebuild_clauses(normalized_results);
if(cljs.core.truth_(test_is_promise_QMARK_)){
var test_binding = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("case_test__");
return sci.impl.async_macro.promise_then(transformed_test,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_binding], null),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.list,case_STAR__sym,test_binding,all_clauses),null,(1),null)),(2),null)),(3),null)));
} else {
return sci.impl.async_macro.mark_promise(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.list,case_STAR__sym,transformed_test,all_clauses));
}
} else {
var all_clauses = rebuild_clauses(all_results);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(transformed_test,test_expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(all_clauses),cljs.core.seq(clauses))))){
return body;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.list,case_STAR__sym,transformed_test,all_clauses);
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__74958)){
var recur_target = new cljs.core.Keyword(null,"recur-target","recur-target",-1909494536).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(recur_target)){
return sci.impl.async_macro.transform_expr_with_await(ctx,locals,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.list,recur_target,cljs.core.rest(body)));
} else {
return body;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__74958)){
return sci.impl.async_macro.transform_try(ctx,locals,cljs.core.rest(body));
} else {
return sci.impl.async_macro.transform_expr_with_await(ctx,locals,body);

}
}
}
}
}
}
}
}
}
}
} else {
if(cljs.core.vector_QMARK_(body)){
return sci.impl.async_macro.transform_coll_with_await(ctx,locals,body,cljs.core.vec,body);
} else {
if(cljs.core.set_QMARK_(body)){
return sci.impl.async_macro.transform_coll_with_await(ctx,locals,body,cljs.core.set,body);
} else {
if(cljs.core.map_QMARK_(body)){
return sci.impl.async_macro.transform_coll_with_await(ctx,locals,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)),(function (p1__74952_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,p1__74952_SHARP_);
}),body);
} else {
return body;

}
}
}
}
}
});
/**
 * Ensure async function body returns a promise.
 * Wraps the last expression in js/Promise.resolve if not already a promise.
 */
sci.impl.async_macro.ensure_promise_result = (function sci$impl$async_macro$ensure_promise_result(body_exprs){
if(cljs.core.empty_QMARK_(body_exprs)){
return (new cljs.core.List(null,sci.impl.async_macro.wrap_promise(null),null,(1),null));
} else {
var exprs = cljs.core.vec(body_exprs);
var last_idx = (cljs.core.count(exprs) - (1));
var last_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(exprs,last_idx);
if(cljs.core.truth_(sci.impl.async_macro.promise_form_QMARK_(last_expr))){
return body_exprs;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exprs,last_idx,sci.impl.async_macro.wrap_promise(last_expr));
}
}
});
/**
 * Transform async function body expressions and ensure result is a promise.
 * This is the main entry point for async function transformation.
 */
sci.impl.async_macro.transform_async_fn_body = (function sci$impl$async_macro$transform_async_fn_body(ctx,locals,body_exprs){
var ret = sci.impl.async_macro.ensure_promise_result(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__74991_SHARP_){
return sci.impl.async_macro.transform_async_body(ctx,locals,p1__74991_SHARP_);
}),body_exprs));
return ret;
});

//# sourceMappingURL=sci.impl.async_macro.js.map
