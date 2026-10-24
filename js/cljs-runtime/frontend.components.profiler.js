goog.provide('frontend.components.profiler');
frontend.components.profiler.profiler = (function (){var render_fn__47251__auto__ = (function frontend$components$profiler$profiler(){
var profiling_fns = cljs.core.keys(cljs.core.first(logseq.shui.hooks.use_atom(frontend.handler.profiler._STAR_fn_symbol__GT_origin_fn)));
var vec__97528 = logseq.shui.hooks.use_state(null);
var reports = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97528,(0),null);
var set_reports_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97528,(1),null);
var vec__97531 = logseq.shui.hooks.use_state(null);
var mem_leak_reports = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97531,(0),null);
var set_mem_leak_reports_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97531,(1),null);
var vec__97534 = logseq.shui.hooks.use_state(null);
var register_fn_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97534,(0),null);
var set_register_fn_name_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97534,(1),null);
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Profiling fns (Only support UI thread now):"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pb-1","div.pb-1",-1651406429),(function (){var iter__5628__auto__ = (function frontend$components$profiler$profiler_$_iter__97537(s__97538){
return (new cljs.core.LazySeq(null,(function (){
var s__97538__$1 = s__97538;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__97538__$1);
if(temp__5825__auto__){
var s__97538__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__97538__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__97538__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__97540 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__97539 = (0);
while(true){
if((i__97539 < size__5627__auto__)){
var f_name = cljs.core._nth(c__5626__auto__,i__97539);
cljs.core.chunk_append(b__97540,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.gap-2","div.flex.flex-row.items-center.gap-2",212596841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.select-text","pre.select-text",896223886),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.inline.close.flex.transition-opacity.duration-300.ease-in","a.inline.close.flex.transition-opacity.duration-300.ease-in",54923071),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("profiler","unregister","profiler/unregister",959978572)], 0)),new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),((function (i__97539,f_name,c__5626__auto__,size__5627__auto__,b__97540,s__97538__$2,temp__5825__auto__,profiling_fns,vec__97528,reports,set_reports_BANG_,vec__97531,mem_leak_reports,set_mem_leak_reports_BANG_,vec__97534,register_fn_name,set_register_fn_name_BANG_){
return (function (e){
frontend.util.stop(e);

return frontend.handler.profiler.unregister_fn_BANG_(f_name);
});})(i__97539,f_name,c__5626__auto__,size__5627__auto__,b__97540,s__97538__$2,temp__5825__auto__,profiling_fns,vec__97528,reports,set_reports_BANG_,vec__97531,mem_leak_reports,set_mem_leak_reports_BANG_,vec__97534,register_fn_name,set_register_fn_name_BANG_))
], null),logseq.shui.ui.tabler_icon("x")], null)], null));

var G__97593 = (i__97539 + (1));
i__97539 = G__97593;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__97540),frontend$components$profiler$profiler_$_iter__97537(cljs.core.chunk_rest(s__97538__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__97540),null);
}
} else {
var f_name = cljs.core.first(s__97538__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.gap-2","div.flex.flex-row.items-center.gap-2",212596841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.select-text","pre.select-text",896223886),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.inline.close.flex.transition-opacity.duration-300.ease-in","a.inline.close.flex.transition-opacity.duration-300.ease-in",54923071),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("profiler","unregister","profiler/unregister",959978572)], 0)),new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),((function (f_name,s__97538__$2,temp__5825__auto__,profiling_fns,vec__97528,reports,set_reports_BANG_,vec__97531,mem_leak_reports,set_mem_leak_reports_BANG_,vec__97534,register_fn_name,set_register_fn_name_BANG_){
return (function (e){
frontend.util.stop(e);

return frontend.handler.profiler.unregister_fn_BANG_(f_name);
});})(f_name,s__97538__$2,temp__5825__auto__,profiling_fns,vec__97528,reports,set_reports_BANG_,vec__97531,mem_leak_reports,set_mem_leak_reports_BANG_,vec__97534,register_fn_name,set_register_fn_name_BANG_))
], null),logseq.shui.ui.tabler_icon("x")], null)], null),frontend$components$profiler$profiler_$_iter__97537(cljs.core.rest(s__97538__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(profiling_fns);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.gap-2.mb-2","div.flex.flex-row.items-center.gap-2.mb-2",847015438),(function (){var G__97541 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var temp__5825__auto__ = (function (){var G__97543 = register_fn_name;
if((G__97543 == null)){
return null;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(G__97543);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var fn_sym = temp__5825__auto__;
return frontend.handler.profiler.register_fn_from_ui_BANG_(fn_sym);
} else {
return null;
}
})], null);
var G__97542 = "Register fn";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__97541,G__97542) : logseq.shui.ui.button.call(null,G__97541,G__97542));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-input.flex-1.h-8.leading-8.py-0.box-border","input.form-input.flex-1.h-8.leading-8.py-0.box-border",1941044341),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__97544 = frontend.util.evalue(e);
return (set_register_fn_name_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_register_fn_name_BANG_.cljs$core$IFn$_invoke$arity$1(G__97544) : set_register_fn_name_BANG_.call(null,G__97544));
}),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (e){
var v = e.target.value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("profiler","input-fn-placeholder","profiler/input-fn-placeholder",1212157113)], 0)))){
return (e.target.value = "");
} else {
return null;
}
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("profiler","input-fn-placeholder","profiler/input-fn-placeholder",1212157113)], 0))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.gap-2.flex-wrap.items-center.pb-1","div.flex.gap-2.flex-wrap.items-center.pb-1",1729315952),(function (){var G__97545 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
var G__97548 = frontend.handler.profiler.profile_report();
return (set_reports_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_reports_BANG_.cljs$core$IFn$_invoke$arity$1(G__97548) : set_reports_BANG_.call(null,G__97548));
})], null);
var G__97546 = logseq.shui.ui.tabler_icon("refresh");
var G__97547 = "Refresh reports";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__97545,G__97546,G__97547) : logseq.shui.ui.button.call(null,G__97545,G__97546,G__97547));
})(),(function (){var G__97549 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
frontend.handler.profiler.reset_report_BANG_();

var G__97552 = frontend.handler.profiler.profile_report();
return (set_reports_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_reports_BANG_.cljs$core$IFn$_invoke$arity$1(G__97552) : set_reports_BANG_.call(null,G__97552));
})], null);
var G__97550 = logseq.shui.ui.tabler_icon("x");
var G__97551 = "Reset reports";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__97549,G__97550,G__97551) : logseq.shui.ui.button.call(null,G__97549,G__97550,G__97551));
})()], null),(function (){var update_time_sum = (function (m){
return cljs.core.update_vals(m,(function (m2){
return cljs.core.update_vals(m2,(function (p1__97527_SHARP_){
return p1__97527_SHARP_.toFixed((6));
}));
}));
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pb-0","div.pb-0",772658752),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.select-text","pre.select-text",896223886),(cljs.core.truth_(reports)?(function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__97553_97599 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__97554_97600 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__97555_97601 = true;
var _STAR_print_fn_STAR__temp_val__97556_97602 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__97555_97601);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__97556_97602);

try{fipp.edn.pprint.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(reports,new cljs.core.Keyword(null,"time-sum","time-sum",592043870),update_time_sum),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(20)], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__97554_97600);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__97553_97599);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})():null)], null)], null);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.my-2","hr.my-2",930024796)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pb-1","div.pb-1",-1651406429),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Atom/Volatile Mem Leak Detect (Only support UI thread now):"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.mb-2","pre.mb-2",-871530313),"Only check atoms/volatiles with a value type of `coll`.\nThe report shows refs with coll-size > 5k and atom's watches-count > 1k.\n`ref` means atom or volatile.\n`ref-hash` means `(hash ref)`."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.gap-2.pb-2","div.flex.flex-row.items-center.gap-2.pb-2",1086395136),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","reset!","cljs.core/reset!",657404621,null),null,new cljs.core.Symbol("cljs.core","vreset!","cljs.core/vreset!",-1308835928,null),null], null), null),cljs.core.set(profiling_fns)))))?(function (){var G__97561 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.profiler.mem_leak_detect();
})], null);
var G__97562 = "Start to detect";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__97561,G__97562) : logseq.shui.ui.button.call(null,G__97561,G__97562));
})():(function (){var G__97563 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
var G__97566 = frontend.handler.profiler.mem_leak_report();
return (set_mem_leak_reports_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_mem_leak_reports_BANG_.cljs$core$IFn$_invoke$arity$1(G__97566) : set_mem_leak_reports_BANG_.call(null,G__97566));
})], null);
var G__97564 = logseq.shui.ui.tabler_icon("refresh");
var G__97565 = "Refresh reports";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__97563,G__97564,G__97565) : logseq.shui.ui.button.call(null,G__97563,G__97564,G__97565));
})())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.select-text","pre.select-text",896223886),(cljs.core.truth_(mem_leak_reports)?(function (){var ref_hash__GT_ref = new cljs.core.Keyword(null,"ref-hash->ref","ref-hash->ref",92453043).cljs$core$IFn$_invoke$arity$1(mem_leak_reports);
var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__97567_97610 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__97568_97611 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__97569_97612 = true;
var _STAR_print_fn_STAR__temp_val__97570_97613 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__97569_97612);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__97570_97613);

try{fipp.edn.pprint.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(mem_leak_reports,new cljs.core.Keyword(null,"ref-hash->ref","ref-hash->ref",92453043)),new cljs.core.Keyword(null,"ref-hash->take-3-items","ref-hash->take-3-items",-1593457432),cljs.core.update_vals(ref_hash__GT_ref,(function (ref){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),cljs.core.deref(ref));
})),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ref-hash->take-3-watch-keys","ref-hash->take-3-watch-keys",-776384491),cljs.core.update_vals(ref_hash__GT_ref,(function (ref){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),ref.watches);
}))], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(20)], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__97568_97611);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__97567_97610);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})():null)], null)], null);
});
var comp__47252__auto__ = (function() { 
var frontend$components$profiler$profiler__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__97583 = cljs.core.first(args__47253__auto__);
var G__97584 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__97583,G__97584) : io.factorhouse.hsx.core.obj_get.call(null,G__97583,G__97584));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"profiler","profiler",-8619155,null),args__47253__auto__),frontend$components$profiler$profiler,args__47253__auto__,null);
}
};
var frontend$components$profiler$profiler = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__97619__i = 0, G__97619__a = new Array(arguments.length -  0);
while (G__97619__i < G__97619__a.length) {G__97619__a[G__97619__i] = arguments[G__97619__i + 0]; ++G__97619__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__97619__a,0,null);
} 
return frontend$components$profiler$profiler__delegate.call(this,args__47253__auto__);};
frontend$components$profiler$profiler.cljs$lang$maxFixedArity = 0;
frontend$components$profiler$profiler.cljs$lang$applyTo = (function (arglist__97620){
var args__47253__auto__ = cljs.core.seq(arglist__97620);
return frontend$components$profiler$profiler__delegate(args__47253__auto__);
});
frontend$components$profiler$profiler.cljs$core$IFn$_invoke$arity$variadic = frontend$components$profiler$profiler__delegate;
return frontend$components$profiler$profiler;
})()
;
var memo_comp__47254__auto__ = (function (){var G__97585 = comp__47252__auto__;
var G__97586 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__97585,G__97586) : io.factorhouse.hsx.core.react_memo.call(null,G__97585,G__97586));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"profiler");

return comp__47252__auto__;
})();

//# sourceMappingURL=frontend.components.profiler.js.map
