goog.provide('frontend.components.query');
frontend.components.query.built_in_custom_query_QMARK_ = (function frontend$components$query$built_in_custom_query_QMARK_(repo_config,p__47723){
var map__47724 = p__47723;
var map__47724__$1 = cljs.core.__destructure_map(map__47724);
var title_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47724__$1,new cljs.core.Keyword(null,"title-key","title-key",830482796));
var queries = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(repo_config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default-queries","default-queries",1508774260),new cljs.core.Keyword(null,"journals","journals",-1915761091)], null));
if(cljs.core.seq(queries)){
return cljs.core.boolean$(cljs.core.some((function (built_in_query){
var and__5140__auto__ = title_key;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"title-key","title-key",830482796).cljs$core$IFn$_invoke$arity$1(built_in_query),title_key);
} else {
return and__5140__auto__;
}
}),queries));
} else {
return null;
}
});
frontend.components.query.resolve_built_in_query_QMARK_ = (function frontend$components$query$resolve_built_in_query_QMARK_(repo_config,built_in_query_QMARK_,q){
return cljs.core.boolean$((function (){var or__5142__auto__ = built_in_query_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.components.query.built_in_custom_query_QMARK_(repo_config,q);
}
})());
});
frontend.components.query.custom_query_inner = (function (){var render_fn__31744__auto__ = (function frontend$components$query$custom_query_inner(p__47725,p__47726,p__47727){
var map__47728 = p__47725;
var map__47728__$1 = cljs.core.__destructure_map(map__47728);
var config = map__47728__$1;
var dsl_query_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47728__$1,new cljs.core.Keyword(null,"dsl-query?","dsl-query?",-1061528662));
var map__47729 = p__47726;
var map__47729__$1 = cljs.core.__destructure_map(map__47729);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47729__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var breadcrumb_show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47729__$1,new cljs.core.Keyword(null,"breadcrumb-show?","breadcrumb-show?",-869903369));
var map__47730 = p__47727;
var map__47730__$1 = cljs.core.__destructure_map(map__47730);
var current_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47730__$1,new cljs.core.Keyword(null,"current-block","current-block",1027687970));
var view_f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47730__$1,new cljs.core.Keyword(null,"view-f","view-f",314082005));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47730__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var group_by_page_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47730__$1,new cljs.core.Keyword(null,"group-by-page?","group-by-page?",1520059448));
var map__47731 = config;
var map__47731__$1 = cljs.core.__destructure_map(map__47731);
var __GT_hiccup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47731__$1,new cljs.core.Keyword(null,"->hiccup","->hiccup",1204690951));
var only_blocks_QMARK_ = ((cljs.core.seq(result)) && (cljs.core.every_QMARK_(cljs.core.uuid_QMARK_,result)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.custom-query-results","div.custom-query-results",-732822542),(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.seq(result);
if(and__5140__auto__){
return view_f;
} else {
return and__5140__auto__;
}
})())?(function (){var result__$1 = (function (){try{return frontend.extensions.sci.call_fn.cljs$core$IFn$_invoke$arity$variadic(view_f,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
}catch (e47732){var error = e47732;
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.query",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"custom-view-failed","custom-view-failed",-1564949541),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),error,new cljs.core.Keyword(null,"result","result",1415092211),result], null),new cljs.core.Keyword(null,"line","line",212345235),47], null)),null);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("query","custom-view-error","query/custom-view-error",406521451),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(error))], 0))], null);
}})();
return frontend.util.hiccup_keywordize(result__$1);
})():((((cljs.core.not(new cljs.core.Keyword(null,"built-in-query?","built-in-query?",-1060650385).cljs$core$IFn$_invoke$arity$1(config))) && (only_blocks_QMARK_)))?((clojure.string.blank_QMARK_(query))?null:frontend.components.query.view.query_result(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"id","id",-1388402092),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"query","query",-1288509510),query], 0)),current_block,result)):((only_blocks_QMARK_)?(function (){var G__47733 = result;
var G__47734 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-block","current-block",1027687970),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block),new cljs.core.Keyword(null,"dsl-query?","dsl-query?",-1061528662),dsl_query_QMARK_,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"breadcrumb-show?","breadcrumb-show?",-869903369),(((!((breadcrumb_show_QMARK_ == null))))?breadcrumb_show_QMARK_:true),new cljs.core.Keyword(null,"group-by-page?","group-by-page?",1520059448),group_by_page_QMARK_,new cljs.core.Keyword(null,"ref?","ref?",1932693720),true], 0));
var G__47735 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0.25rem",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0.25rem"], null)], null);
return (__GT_hiccup.cljs$core$IFn$_invoke$arity$3 ? __GT_hiccup.cljs$core$IFn$_invoke$arity$3(G__47733,G__47734,G__47735) : __GT_hiccup.call(null,G__47733,G__47734,G__47735));
})():((cljs.core.seq(result))?(function (){var result__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__5628__auto__ = (function frontend$components$query$custom_query_inner_$_iter__47736(s__47737){
return (new cljs.core.LazySeq(null,(function (){
var s__47737__$1 = s__47737;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__47737__$1);
if(temp__5825__auto__){
var s__47737__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47737__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__47737__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__47739 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__47738 = (0);
while(true){
if((i__47738 < size__5627__auto__)){
var record = cljs.core._nth(c__5626__auto__,i__47738);
cljs.core.chunk_append(b__47739,((cljs.core.map_QMARK_(record))?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.pp_str(record))+"\n"):record));

var G__47782 = (i__47738 + (1));
i__47738 = G__47782;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47739),frontend$components$query$custom_query_inner_$_iter__47736(cljs.core.chunk_rest(s__47737__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47739),null);
}
} else {
var record = cljs.core.first(s__47737__$2);
return cljs.core.cons(((cljs.core.map_QMARK_(record))?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.pp_str(record))+"\n"):record),frontend$components$query$custom_query_inner_$_iter__47736(cljs.core.rest(s__47737__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(result);
})());
if(cljs.core.seq(result__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5628__auto__ = (function frontend$components$query$custom_query_inner_$_iter__47740(s__47741){
return (new cljs.core.LazySeq(null,(function (){
var s__47741__$1 = s__47741;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__47741__$1);
if(temp__5825__auto__){
var s__47741__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47741__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__47741__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__47743 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__47742 = (0);
while(true){
if((i__47742 < size__5627__auto__)){
var item = cljs.core._nth(c__5626__auto__,i__47742);
cljs.core.chunk_append(b__47743,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(item))], null));

var G__47783 = (i__47742 + (1));
i__47742 = G__47783;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47743),frontend$components$query$custom_query_inner_$_iter__47740(cljs.core.chunk_rest(s__47741__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47743),null);
}
} else {
var item = cljs.core.first(s__47741__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(item))], null),frontend$components$query$custom_query_inner_$_iter__47740(cljs.core.rest(s__47741__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(result__$1);
})()], null);
} else {
return null;
}
})():((((clojure.string.blank_QMARK_(query)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(query,"(and)"))))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.mt-2.opacity-90","div.text-sm.mt-2.opacity-90",1307580190),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("search","no-result","search/no-result",-1350101243)], 0))], null)
)))))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$query$custom_query_inner__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47744 = cljs.core.first(args__31746__auto__);
var G__47745 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47744,G__47745) : io.factorhouse.hsx.core.obj_get.call(null,G__47744,G__47745));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"custom-query-inner","custom-query-inner",-145850133,null),args__31746__auto__),frontend$components$query$custom_query_inner,args__31746__auto__,null);
}
};
var frontend$components$query$custom_query_inner = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47784__i = 0, G__47784__a = new Array(arguments.length -  0);
while (G__47784__i < G__47784__a.length) {G__47784__a[G__47784__i] = arguments[G__47784__i + 0]; ++G__47784__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47784__a,0,null);
} 
return frontend$components$query$custom_query_inner__delegate.call(this,args__31746__auto__);};
frontend$components$query$custom_query_inner.cljs$lang$maxFixedArity = 0;
frontend$components$query$custom_query_inner.cljs$lang$applyTo = (function (arglist__47785){
var args__31746__auto__ = cljs.core.seq(arglist__47785);
return frontend$components$query$custom_query_inner__delegate(args__31746__auto__);
});
frontend$components$query$custom_query_inner.cljs$core$IFn$_invoke$arity$variadic = frontend$components$query$custom_query_inner__delegate;
return frontend$components$query$custom_query_inner;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47746 = comp__31745__auto__;
var G__47747 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47746,G__47747) : io.factorhouse.hsx.core.react_memo.call(null,G__47746,G__47747));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"custom-query-inner");

return comp__31745__auto__;
})();
frontend.components.query.query_title = (function (){var render_fn__31744__auto__ = (function frontend$components$query$query_title(config,p__47748,p__47749){
var map__47750 = p__47748;
var map__47750__$1 = cljs.core.__destructure_map(map__47750);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47750__$1,new cljs.core.Keyword(null,"title","title",636505583));
var title_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47750__$1,new cljs.core.Keyword(null,"title-key","title-key",830482796));
var title_icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47750__$1,new cljs.core.Keyword(null,"title-icon","title-icon",1268733588));
var map__47751 = p__47749;
var map__47751__$1 = cljs.core.__destructure_map(map__47751);
var result_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47751__$1,new cljs.core.Keyword(null,"result-count","result-count",-1827800573));
var inline_text = new cljs.core.Keyword(null,"inline-text","inline-text",910915394).cljs$core$IFn$_invoke$arity$1(config);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.custom-query-title.flex.justify-between.w-full","div.custom-query-title.flex.justify-between.w-full",-372855694),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.title-text","span.title-text",-1943630076),(cljs.core.truth_(title_key)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(title_icon)?logseq.shui.ui.tabler_icon(title_icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"align-middle pr-1"], null)):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.align-middle","span.align-middle",1523859446),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([title_key], 0))], null)], null):((cljs.core.vector_QMARK_(title))?title:((typeof title === 'string')?(function (){var G__47752 = config;
var G__47753 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword("block","format","block/format",-1212045901)], null),new cljs.core.Keyword(null,"markdown","markdown",1227225089));
var G__47754 = title;
return (inline_text.cljs$core$IFn$_invoke$arity$3 ? inline_text.cljs$core$IFn$_invoke$arity$3(G__47752,G__47753,G__47754) : inline_text.call(null,G__47752,G__47753,G__47754));
})():title
)))], null),(cljs.core.truth_(result_count)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-60.text-sm.ml-2.results-count","span.opacity-60.text-sm.ml-2.results-count",330902893),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("search","result-count","search/result-count",1292547035),result_count], 0))], null):null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$query$query_title__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47755 = cljs.core.first(args__31746__auto__);
var G__47756 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47755,G__47756) : io.factorhouse.hsx.core.obj_get.call(null,G__47755,G__47756));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"query-title","query-title",-781789321,null),args__31746__auto__),frontend$components$query$query_title,args__31746__auto__,null);
}
};
var frontend$components$query$query_title = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47786__i = 0, G__47786__a = new Array(arguments.length -  0);
while (G__47786__i < G__47786__a.length) {G__47786__a[G__47786__i] = arguments[G__47786__i + 0]; ++G__47786__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47786__a,0,null);
} 
return frontend$components$query$query_title__delegate.call(this,args__31746__auto__);};
frontend$components$query$query_title.cljs$lang$maxFixedArity = 0;
frontend$components$query$query_title.cljs$lang$applyTo = (function (arglist__47787){
var args__31746__auto__ = cljs.core.seq(arglist__47787);
return frontend$components$query$query_title__delegate(args__31746__auto__);
});
frontend$components$query$query_title.cljs$core$IFn$_invoke$arity$variadic = frontend$components$query$query_title__delegate;
return frontend$components$query$query_title;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47757 = comp__31745__auto__;
var G__47758 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47757,G__47758) : io.factorhouse.hsx.core.react_memo.call(null,G__47757,G__47758));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"query-title");

return comp__31745__auto__;
})();
frontend.components.query.calculate_collapsed_QMARK_ = (function frontend$components$query$calculate_collapsed_QMARK_(current_block,p__47759){
var map__47760 = p__47759;
var map__47760__$1 = cljs.core.__destructure_map(map__47760);
var collapsed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47760__$1,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674));
var temp_collapsed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47760__$1,new cljs.core.Keyword(null,"temp-collapsed?","temp-collapsed?",-1082793376));
var collapsed_QMARK__SINGLEQUOTE_ = (((!((temp_collapsed_QMARK_ == null))))?temp_collapsed_QMARK_:(function (){var or__5142__auto__ = collapsed_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(current_block);
}
})());
return collapsed_QMARK__SINGLEQUOTE_;
});
frontend.components.query.custom_query_STAR_ = (function (){var render_fn__31744__auto__ = (function frontend$components$query$custom_query_STAR_(p__47762,p__47763){
var map__47764 = p__47762;
var map__47764__$1 = cljs.core.__destructure_map(map__47764);
var config = map__47764__$1;
var dsl_query_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47764__$1,new cljs.core.Keyword(null,"dsl-query?","dsl-query?",-1061528662));
var built_in_query_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47764__$1,new cljs.core.Keyword(null,"built-in-query?","built-in-query?",-1060650385));
var table_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47764__$1,new cljs.core.Keyword(null,"table?","table?",-1064705406));
var current_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47764__$1,new cljs.core.Keyword(null,"current-block","current-block",1027687970));
var map__47765 = p__47763;
var map__47765__$1 = cljs.core.__destructure_map(map__47765);
var q = map__47765__$1;
var builder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47765__$1,new cljs.core.Keyword(null,"builder","builder",-2055262005));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47765__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47765__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var _collapsed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47765__$1,new cljs.core.Keyword(null,"_collapsed?","_collapsed?",-899210048));
var repo_config = frontend.state.config_for_repo(frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415)], null)),frontend.state.get_current_repo());
var result_transform = new cljs.core.Keyword(null,"result-transform","result-transform",1904908186).cljs$core$IFn$_invoke$arity$1(q);
var q__$1 = (((result_transform instanceof cljs.core.Keyword))?(function (){var temp__5823__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(repo_config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("query","result-transforms","query/result-transforms",2023939479),result_transform], null));
if(cljs.core.truth_(temp__5823__auto__)){
var transform = temp__5823__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(q,new cljs.core.Keyword(null,"result-transform","result-transform",1904908186),transform);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Missing query result transform",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result-transform","result-transform",1904908186),result_transform], null));
}
})():q);
var config__$1 = (cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"today","today",945271563),null], null), null),new cljs.core.Keyword(null,"inputs","inputs",865803858).cljs$core$IFn$_invoke$arity$1(q__$1)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"today-day","today-day",2113928411),frontend.date.today_journal_day()):config);
var _STAR_collapsed_QMARK_ = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674).cljs$core$IFn$_invoke$arity$1(q__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674).cljs$core$IFn$_invoke$arity$1(config__$1);
}
})());
}),cljs.core.PersistentVector.EMPTY);
var vec__47766 = logseq.shui.hooks.use_atom(_STAR_collapsed_QMARK_);
var collapsed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47766,(0),null);
var result = frontend.components.query.result.use_query_result(config__$1,q__$1);
var view_fn = (((view instanceof cljs.core.Keyword))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(repo_config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("query","views","query/views",1105149223),view], null)):view);
var view_f = (cljs.core.truth_(view_fn)?(function (){try{return frontend.extensions.sci.eval_string.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([view_fn], 0)));
}catch (e47769){var error = e47769;
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.query",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-view-eval-failed","query-view-eval-failed",1274638852),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),error,new cljs.core.Keyword(null,"view","view",1247994814),view], null),new cljs.core.Keyword(null,"line","line",212345235),153], null)),null);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((function (){var or__5142__auto__ = cljs.core.ex_message(error);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Query view failed";
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view","view",1247994814),view], null));
}})():null);
var opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"current-block","current-block",1027687970),current_block,new cljs.core.Keyword(null,"table?","table?",-1064705406),table_QMARK_,new cljs.core.Keyword(null,"view-f","view-f",314082005),view_f,new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"group-by-page?","group-by-page?",1520059448),frontend.components.query.result.get_group_by_page(q__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table?","table?",-1064705406),table_QMARK_,new cljs.core.Keyword(null,"db-graph?","db-graph?",-533494876),new cljs.core.Keyword(null,"db-graph?","db-graph?",-533494876).cljs$core$IFn$_invoke$arity$1(config__$1)], null))], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951).cljs$core$IFn$_invoke$arity$1(config__$1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),(cljs.core.truth_(dsl_query_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("query","results-for","query/results-for",1223858215),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([query], 0))], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("query","advanced-results","query/advanced-results",1068644610)], 0)))], null);
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = built_in_query_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.empty_QMARK_(result);
} else {
return and__5140__auto__;
}
})())){
return null;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.custom-query","div.custom-query",1944677850),cljs.core.get.cljs$core$IFn$_invoke$arity$3(config__$1,new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.PersistentArrayMap.EMPTY),(cljs.core.truth_((function (){var and__5140__auto__ = dsl_query_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return builder;
} else {
return and__5140__auto__;
}
})())?builder:null),(cljs.core.truth_(built_in_query_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(2)], null)], null),frontend.ui.foldable(frontend.components.query.query_title(config__$1,q__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result-count","result-count",-1827800573),cljs.core.count(result)], null)),(function (){
return frontend.components.query.custom_query_inner(config__$1,q__$1,opts);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-collapsed?","default-collapsed?",-1350393823),collapsed_QMARK_,new cljs.core.Keyword(null,"title-trigger?","title-trigger?",-613599873),true,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (p1__47761_SHARP_){
return cljs.core.reset_BANG_(_STAR_collapsed_QMARK_,p1__47761_SHARP_);
})], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bd","div.bd",-367379221),(cljs.core.truth_(collapsed_QMARK_)?null:frontend.components.query.custom_query_inner(config__$1,q__$1,opts))], null))], null);
}
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$query$custom_query_STAR___delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47770 = cljs.core.first(args__31746__auto__);
var G__47771 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47770,G__47771) : io.factorhouse.hsx.core.obj_get.call(null,G__47770,G__47771));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"custom-query*","custom-query*",2016327368,null),args__31746__auto__),frontend$components$query$custom_query_STAR_,args__31746__auto__,null);
}
};
var frontend$components$query$custom_query_STAR_ = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47788__i = 0, G__47788__a = new Array(arguments.length -  0);
while (G__47788__i < G__47788__a.length) {G__47788__a[G__47788__i] = arguments[G__47788__i + 0]; ++G__47788__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47788__a,0,null);
} 
return frontend$components$query$custom_query_STAR___delegate.call(this,args__31746__auto__);};
frontend$components$query$custom_query_STAR_.cljs$lang$maxFixedArity = 0;
frontend$components$query$custom_query_STAR_.cljs$lang$applyTo = (function (arglist__47789){
var args__31746__auto__ = cljs.core.seq(arglist__47789);
return frontend$components$query$custom_query_STAR___delegate(args__31746__auto__);
});
frontend$components$query$custom_query_STAR_.cljs$core$IFn$_invoke$arity$variadic = frontend$components$query$custom_query_STAR___delegate;
return frontend$components$query$custom_query_STAR_;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47772 = comp__31745__auto__;
var G__47773 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47772,G__47773) : io.factorhouse.hsx.core.react_memo.call(null,G__47772,G__47773));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"custom-query*");

return comp__31745__auto__;
})();
frontend.components.query.custom_query = (function (){var render_fn__31744__auto__ = (function frontend$components$query$custom_query(p__47774,p__47775){
var map__47776 = p__47774;
var map__47776__$1 = cljs.core.__destructure_map(map__47776);
var config = map__47776__$1;
var built_in_query_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47776__$1,new cljs.core.Keyword(null,"built-in-query?","built-in-query?",-1060650385));
var map__47777 = p__47775;
var map__47777__$1 = cljs.core.__destructure_map(map__47777);
var q = map__47777__$1;
var collapsed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47777__$1,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674));
var repo_config = frontend.state.config_for_repo(frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415)], null)),frontend.state.get_current_repo());
var boundary_key = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.select_keys(q,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"result-transform","result-transform",1904908186),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.Keyword(null,"rules","rules",1198912366)], null)),(((new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(q) instanceof cljs.core.Keyword))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(repo_config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("query","views","query/views",1105149223),new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(q)], null)):null),(((new cljs.core.Keyword(null,"result-transform","result-transform",1904908186).cljs$core$IFn$_invoke$arity$1(q) instanceof cljs.core.Keyword))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(repo_config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("query","result-transforms","query/result-transforms",2023939479),new cljs.core.Keyword(null,"result-transform","result-transform",1904908186).cljs$core$IFn$_invoke$arity$1(q)], null)):null)], null)], 0));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),frontend.ui.catch_error(frontend.ui.block_error(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("query","error","query/error",-1139340960)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(q)], null)),(function (){var current_block_uuid = (function (){var or__5142__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(config));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(config);
}
})();
var current_block = new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(config);
var temp_collapsed_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","collapsed-blocks","ui/collapsed-blocks",-968043167),frontend.state.get_current_repo(),frontend.state.resolve_container_id(new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(config)),current_block_uuid], null));
var collapsed_QMARK__SINGLEQUOTE_ = frontend.components.query.calculate_collapsed_QMARK_(current_block,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),false,new cljs.core.Keyword(null,"temp-collapsed?","temp-collapsed?",-1082793376),temp_collapsed_QMARK_], null));
var built_in_collapsed_QMARK_ = (function (){var and__5140__auto__ = collapsed_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return built_in_query_QMARK_;
} else {
return and__5140__auto__;
}
})();
var config_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"current-block","current-block",1027687970),current_block,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-block-uuid","current-block-uuid",-559721957),current_block_uuid,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),collapsed_QMARK__SINGLEQUOTE_,new cljs.core.Keyword(null,"built-in-query?","built-in-query?",-1060650385),frontend.components.query.resolve_built_in_query_QMARK_(repo_config,built_in_query_QMARK_,q)], 0));
if(cljs.core.truth_((function (){var or__5142__auto__ = built_in_collapsed_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.not(collapsed_QMARK__SINGLEQUOTE_);
}
})())){
return frontend.components.query.custom_query_STAR_(config_SINGLEQUOTE_,q);
} else {
return null;
}
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),boundary_key], null));
});
var comp__31745__auto__ = (function() { 
var frontend$components$query$custom_query__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47778 = cljs.core.first(args__31746__auto__);
var G__47779 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47778,G__47779) : io.factorhouse.hsx.core.obj_get.call(null,G__47778,G__47779));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"custom-query","custom-query",351609494,null),args__31746__auto__),frontend$components$query$custom_query,args__31746__auto__,null);
}
};
var frontend$components$query$custom_query = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47790__i = 0, G__47790__a = new Array(arguments.length -  0);
while (G__47790__i < G__47790__a.length) {G__47790__a[G__47790__i] = arguments[G__47790__i + 0]; ++G__47790__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47790__a,0,null);
} 
return frontend$components$query$custom_query__delegate.call(this,args__31746__auto__);};
frontend$components$query$custom_query.cljs$lang$maxFixedArity = 0;
frontend$components$query$custom_query.cljs$lang$applyTo = (function (arglist__47791){
var args__31746__auto__ = cljs.core.seq(arglist__47791);
return frontend$components$query$custom_query__delegate(args__31746__auto__);
});
frontend$components$query$custom_query.cljs$core$IFn$_invoke$arity$variadic = frontend$components$query$custom_query__delegate;
return frontend$components$query$custom_query;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47780 = comp__31745__auto__;
var G__47781 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47780,G__47781) : io.factorhouse.hsx.core.react_memo.call(null,G__47780,G__47781));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"custom-query");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.query.js.map
