goog.provide('sci.impl.interpreter');
sci.impl.interpreter.eval_form_STAR_ = (function sci$impl$interpreter$eval_form_STAR_(ctx,form){
var eval_file = new cljs.core.Keyword("clojure.core","eval-file","clojure.core/eval-file",801420726).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form));
if(cljs.core.truth_(eval_file)){
sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.utils.current_file,eval_file]));
} else {
}

try{if(cljs.core.seq_QMARK_(form)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(form))){
var m__76022__auto__ = cljs.core.meta(form);
var loc__76023__auto__ = (cljs.core.truth_((function (){var and__5140__auto__ = true;
if(and__5140__auto__){
var and__5140__auto____$1 = m__76022__auto__;
if(cljs.core.truth_(and__5140__auto____$1)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(m__76022__auto__);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(m__76022__auto__),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(m__76022__auto__)], null):null);
if(cljs.core.truth_(loc__76023__auto__)){
(sci.impl.utils._STAR_top_level_location_STAR_ = loc__76023__auto__);
} else {
}

try{var exprs = cljs.core.rest(form);
var ret = null;
while(true){
if(cljs.core.seq(exprs)){
var G__77852 = cljs.core.rest(exprs);
var G__77853 = (function (){var G__77820 = ctx;
var G__77821 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form_STAR_.cljs$core$IFn$_invoke$arity$2(G__77820,G__77821) : sci.impl.interpreter.eval_form_STAR_.call(null,G__77820,G__77821));
})();
exprs = G__77852;
ret = G__77853;
continue;
} else {
return ret;
}
break;
}
}finally {if(cljs.core.truth_(loc__76023__auto__)){
(sci.impl.utils._STAR_top_level_location_STAR_ = null);
} else {
}
}} else {
var upper_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var cb = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.createAsIfByAssoc([upper_sym,new cljs.core.PersistentArrayMap(null, 1, [(0),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"syms","syms",-1575891762),cljs.core.PersistentArrayMap.EMPTY], null)], null)]));
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ctx,new cljs.core.Keyword(null,"parents","parents",-2027538891),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [upper_sym,(0)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037),cb], 0));
var _ = (sci.ctx_store._STAR_ctx_STAR_ = ctx__$1);
var analyzed = sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(ctx__$1,form,true);
var binding_array_size = cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cb),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [upper_sym,(0),new cljs.core.Keyword(null,"syms","syms",-1575891762)], null)));
var bindings = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(binding_array_size);
if((analyzed instanceof sci.impl.types.EvalForm)){
var G__77826 = ctx__$1;
var G__77827 = analyzed.sci$impl$types$IBox$getVal$arity$1(null);
return (sci.impl.interpreter.eval_form_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form_STAR_.cljs$core$IFn$_invoke$arity$2(G__77826,G__77827) : sci.impl.interpreter.eval_form_STAR_.call(null,G__77826,G__77827));
} else {
try{return sci.impl.types.eval(analyzed,ctx__$1,bindings);
}catch (e77829){if((e77829 instanceof Error)){
var e = e77829;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx__$1,bindings,e,analyzed);
} else {
throw e77829;

}
}}
}
} else {
var upper_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var cb = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.createAsIfByAssoc([upper_sym,new cljs.core.PersistentArrayMap(null, 1, [(0),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"syms","syms",-1575891762),cljs.core.PersistentArrayMap.EMPTY], null)], null)]));
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ctx,new cljs.core.Keyword(null,"parents","parents",-2027538891),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [upper_sym,(0)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037),cb], 0));
var analyzed = sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,form);
var binding_array_size = cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cb),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [upper_sym,(0),new cljs.core.Keyword(null,"syms","syms",-1575891762)], null)));
var bindings = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(binding_array_size);
try{return sci.impl.types.eval(analyzed,ctx__$1,bindings);
}catch (e77830){if((e77830 instanceof Error)){
var e = e77830;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx__$1,bindings,e,analyzed);
} else {
throw e77830;

}
}}
}finally {if(cljs.core.truth_(eval_file)){
sci.impl.vars.pop_thread_bindings();
} else {
}
}});
sci.impl.interpreter.eval_form = (function sci$impl$interpreter$eval_form(ctx,form){
var _STAR_ctx_STAR__orig_val__77831 = sci.ctx_store._STAR_ctx_STAR_;
var _STAR_ctx_STAR__temp_val__77832 = ctx;
(sci.ctx_store._STAR_ctx_STAR_ = _STAR_ctx_STAR__temp_val__77832);

try{return sci.impl.interpreter.eval_form_STAR_(ctx,form);
}finally {(sci.ctx_store._STAR_ctx_STAR_ = _STAR_ctx_STAR__orig_val__77831);
}});
cljs.core.vreset_BANG_(sci.impl.utils.eval_form_state,sci.impl.interpreter.eval_form);
sci.impl.interpreter.eval_string_STAR_ = (function sci$impl$interpreter$eval_string_STAR_(var_args){
var G__77837 = arguments.length;
switch (G__77837) {
case 2:
return sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ctx,s){
return sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$3(ctx,s,null);
}));

(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (ctx,s,opts){
sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.utils.current_ns,(function (){var or__5142__auto__ = (cljs.core.truth_(opts)?new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts):null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.deref(sci.impl.utils.current_ns);
}
})(),sci.impl.parser.data_readers,cljs.core.deref(sci.impl.parser.data_readers)]));

try{var reader = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
var eval_string_PLUS__QMARK_ = (cljs.core.truth_(opts)?new cljs.core.Keyword("sci.impl","eval-string+","sci.impl/eval-string+",-178784582).cljs$core$IFn$_invoke$arity$1(opts):null);
var ret = null;
while(true){
var expr = sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.parser.edamame","eof","sci.impl.parser.edamame/eof",-917261517),expr)){
if(cljs.core.truth_(eval_string_PLUS__QMARK_)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),ret,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns)], null);
} else {
return ret;
}
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__77856 = ret__$1;
ret = G__77856;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}}));

(sci.impl.interpreter.eval_string_STAR_.cljs$lang$maxFixedArity = 3);

sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__77845 = arguments.length;
switch (G__77845) {
case 1:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2(s,null);
}));

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var init_ctx = sci.impl.opts.init(opts);
var ret = sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(init_ctx,s);
return ret;
}));

(sci.impl.interpreter.eval_string.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sci.impl.interpreter.js.map
