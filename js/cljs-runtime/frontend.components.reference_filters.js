goog.provide('frontend.components.reference_filters');
frontend.components.reference_filters.frequencies_sort = (function frontend$components$reference_filters$frequencies_sort(references){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.second,(function (p1__53606_SHARP_,p2__53607_SHARP_){
return (p1__53606_SHARP_ > p2__53607_SHARP_);
}),references);
});
frontend.components.reference_filters.ref_button = (function (){var render_fn__31744__auto__ = (function frontend$components$reference_filters$ref_button(page,filters,ref_name,ref_count){
var lc_reference = clojure.string.lower_case(ref_name);
return frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),ref_name,(cljs.core.truth_(ref_count)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup","sup",-2039492346)," ",ref_count], null):null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var includes = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword(null,"included","included",-1002787476).cljs$core$IFn$_invoke$arity$1(filters)));
var excludes = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword(null,"excluded","excluded",-715952088).cljs$core$IFn$_invoke$arity$1(filters)));
var included_QMARK_ = (includes.cljs$core$IFn$_invoke$arity$1 ? includes.cljs$core$IFn$_invoke$arity$1(lc_reference) : includes.call(null,lc_reference));
var not_in_filters_QMARK_ = ((cljs.core.not(included_QMARK_)) && (cljs.core.not((excludes.cljs$core$IFn$_invoke$arity$1 ? excludes.cljs$core$IFn$_invoke$arity$1(lc_reference) : excludes.call(null,lc_reference)))));
var shift_QMARK_ = e.shiftKey;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),lc_reference], null)], 0))),(function (ref_page){
return promesa.protocols._promise(frontend.handler.page.db_based_save_filter_BANG_(page,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ref_page),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"add?","add?",1263018409),not_in_filters_QMARK_,new cljs.core.Keyword(null,"include?","include?",859165569),((not_in_filters_QMARK_)?cljs.core.not(shift_QMARK_):included_QMARK_)], null)));
}));
}));
}),new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534)], 0));
});
var comp__31745__auto__ = (function() { 
var frontend$components$reference_filters$ref_button__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__53608 = cljs.core.first(args__31746__auto__);
var G__53609 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__53608,G__53609) : io.factorhouse.hsx.core.obj_get.call(null,G__53608,G__53609));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"ref-button","ref-button",-403368460,null),args__31746__auto__),frontend$components$reference_filters$ref_button,args__31746__auto__,null);
}
};
var frontend$components$reference_filters$ref_button = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__53646__i = 0, G__53646__a = new Array(arguments.length -  0);
while (G__53646__i < G__53646__a.length) {G__53646__a[G__53646__i] = arguments[G__53646__i + 0]; ++G__53646__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__53646__a,0,null);
} 
return frontend$components$reference_filters$ref_button__delegate.call(this,args__31746__auto__);};
frontend$components$reference_filters$ref_button.cljs$lang$maxFixedArity = 0;
frontend$components$reference_filters$ref_button.cljs$lang$applyTo = (function (arglist__53647){
var args__31746__auto__ = cljs.core.seq(arglist__53647);
return frontend$components$reference_filters$ref_button__delegate(args__31746__auto__);
});
frontend$components$reference_filters$ref_button.cljs$core$IFn$_invoke$arity$variadic = frontend$components$reference_filters$ref_button__delegate;
return frontend$components$reference_filters$ref_button;
})()
;
var memo_comp__31747__auto__ = (function (){var G__53610 = comp__31745__auto__;
var G__53611 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__53610,G__53611) : io.factorhouse.hsx.core.react_memo.call(null,G__53610,G__53611));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"ref-button");

return comp__31745__auto__;
})();
frontend.components.reference_filters.filtered_refs = (function frontend$components$reference_filters$filtered_refs(page,filters,filtered_references_STAR_,virtual_QMARK_){
var filtered_references = (cljs.core.truth_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.first(filtered_references_STAR_)))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (e){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(e)], null);
}),filtered_references_STAR_):filtered_references_STAR_);
if((((cljs.core.count(filtered_references) > (100))) && ((!(virtual_QMARK_ === false))))){
return frontend.ui.virtualized_list(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),(500),new cljs.core.Keyword(null,"width","width",-384071477),(500),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(500)], null),new cljs.core.Keyword(null,"total-count","total-count",-1999441386),cljs.core.count(filtered_references),new cljs.core.Keyword(null,"compute-item-key","compute-item-key",-621146487),(function (idx){
return (""+"ref-button-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx));
}),new cljs.core.Keyword(null,"item-content","item-content",1656730280),(function (idx){
var vec__53612 = frontend.util.nth_safe(filtered_references,idx);
var ref_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53612,(0),null);
var ref_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53612,(1),null);
return frontend.components.reference_filters.ref_button(page,filters,ref_name,ref_count);
})], null));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.gap-2.flex-wrap.items-center","div.flex.gap-2.flex-wrap.items-center",-484417061),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(500),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(500)], null)], null),(function (){var iter__5628__auto__ = (function frontend$components$reference_filters$filtered_refs_$_iter__53615(s__53616){
return (new cljs.core.LazySeq(null,(function (){
var s__53616__$1 = s__53616;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__53616__$1);
if(temp__5825__auto__){
var s__53616__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53616__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__53616__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__53618 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__53617 = (0);
while(true){
if((i__53617 < size__5627__auto__)){
var vec__53619 = cljs.core._nth(c__5626__auto__,i__53617);
var ref_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53619,(0),null);
var ref_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53619,(1),null);
cljs.core.chunk_append(b__53618,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.reference_filters.ref_button,page,filters,ref_name,ref_count], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"ref-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ref_name))], null)));

var G__53648 = (i__53617 + (1));
i__53617 = G__53648;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53618),frontend$components$reference_filters$filtered_refs_$_iter__53615(cljs.core.chunk_rest(s__53616__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53618),null);
}
} else {
var vec__53622 = cljs.core.first(s__53616__$2);
var ref_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53622,(0),null);
var ref_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53622,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.reference_filters.ref_button,page,filters,ref_name,ref_count], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"ref-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ref_name))], null)),frontend$components$reference_filters$filtered_refs_$_iter__53615(cljs.core.rest(s__53616__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(filtered_references);
})()], null);
}
});
frontend.components.reference_filters.filter_dialog_aux = (function (){var render_fn__31744__auto__ = (function frontend$components$reference_filters$filter_dialog_aux(page_entity,references){
var vec__53625 = logseq.shui.hooks.use_state("");
var filter_search = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53625,(0),null);
var set_filter_search_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53625,(1),null);
var vec__53628 = logseq.shui.hooks.use_state(references);
var filtered_references = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53628,(0),null);
var set_filtered_references_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53628,(1),null);
var filters = logseq.db.common.reference.get_filters(page_entity);
var map__53631 = filters;
var map__53631__$1 = cljs.core.__destructure_map(map__53631);
var included = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53631__$1,new cljs.core.Keyword(null,"included","included",-1002787476));
var excluded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53631__$1,new cljs.core.Keyword(null,"excluded","excluded",-715952088));
logseq.shui.hooks.use_effect_BANG_((function (){
var references__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filter_search,""))?references:frontend.components.reference_filters.frequencies_sort((frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$6 ? frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$6(references,filter_search,new cljs.core.Keyword(null,"limit","limit",-1355822363),(100),new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),cljs.core.first) : frontend.search.fuzzy_search.call(null,references,filter_search,new cljs.core.Keyword(null,"limit","limit",-1355822363),(100),new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),cljs.core.first))));
return (set_filtered_references_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_filtered_references_BANG_.cljs$core$IFn$_invoke$arity$1(references__$1) : set_filtered_references_BANG_.call(null,references__$1));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.shui.hooks.use_debounced_value(filter_search,(200))], null));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-filters.filters","div.ls-filters.filters",-969856189),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sm:flex.sm:items-start","div.sm:flex.sm:items-start",-437342012),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mx-auto.flex-shrink-0.flex.items-center.justify-center.h-12.w-12.rounded-full.bg-gray-200.text-gray-500.sm:mx-0.sm:h-10.sm:w-10","div.mx-auto.flex-shrink-0.flex.items-center.justify-center.h-12.w-12.rounded-full.bg-gray-200.text-gray-500.sm:mx-0.sm:h-10.sm:w-10",1865809544),frontend.ui.icon("filter",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(20)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-3.text-center.sm:mt-0.sm:ml-4.sm:text-left.pb-2","div.mt-3.text-center.sm:mt-0.sm:ml-4.sm:text-left.pb-2",712849994),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3#modal-headline.text-lg.leading-6.font-medium","h3#modal-headline.text-lg.leading-6.font-medium",365314317),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("reference.filter","title","reference.filter/title",-2038376094)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs","span.text-xs",63518557),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("reference.filter","directions","reference.filter/directions",352115541)], 0))], null)], null)], null),((((cljs.core.seq(included)) || (cljs.core.seq(excluded))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__filters.mb-4.ml-2","div.cp__filters.mb-4.ml-2",1881505807),((cljs.core.seq(included))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.flex-wrap.center-items","div.flex.flex-row.flex-wrap.center-items",1436274387),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mr-1.font-medium.py-1","div.mr-1.font-medium.py-1",-483586395),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("reference.filter","includes","reference.filter/includes",-1665234620)], 0))], null),frontend.components.reference_filters.filtered_refs(page_entity,filters,included,false)], null):null),((cljs.core.seq(excluded))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.flex-wrap","div.flex.flex-row.flex-wrap",-1123275468),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mr-1.font-medium.py-1","div.mr-1.font-medium.py-1",-483586395),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("reference.filter","excludes","reference.filter/excludes",-1379678706)], 0))], null),frontend.components.reference_filters.filtered_refs(page_entity,filters,excluded,false)], null):null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__filters-input-panel.flex.focus-within:bg-gray-03","div.cp__filters-input-panel.flex.focus-within:bg-gray-03",49754045),frontend.ui.icon("search"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.cp__filters-input.w-full.bg-transparent","input.cp__filters-input.w-full.bg-transparent",1365336205),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("reference.filter","search-placeholder","reference.filter/search-placeholder",684791402)], 0)),new cljs.core.Keyword(null,"autofocus","autofocus",-712814732),true,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (el){
if(cljs.core.truth_(el)){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.delay.cljs$core$IFn$_invoke$arity$1((32)),(function (){
return el.focus();
}));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__53632 = frontend.util.evalue(e);
return (set_filter_search_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_filter_search_BANG_.cljs$core$IFn$_invoke$arity$1(G__53632) : set_filter_search_BANG_.call(null,G__53632));
})], null)], null)], null),(function (){var all_filters = cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),included),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),excluded)));
var refs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__53633){
var vec__53634 = p__53633;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53634,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53634,(1),null);
var G__53637 = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page) : frontend.util.page_name_sanity_lc.call(null,page));
return (all_filters.cljs$core$IFn$_invoke$arity$1 ? all_filters.cljs$core$IFn$_invoke$arity$1(G__53637) : all_filters.call(null,G__53637));
}),filtered_references);
if(cljs.core.seq(refs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-4","div.mt-4",-1531088843),frontend.components.reference_filters.filtered_refs(page_entity,filters,refs,true)], null);
} else {
return null;
}
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$reference_filters$filter_dialog_aux__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__53638 = cljs.core.first(args__31746__auto__);
var G__53639 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__53638,G__53639) : io.factorhouse.hsx.core.obj_get.call(null,G__53638,G__53639));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"filter-dialog-aux","filter-dialog-aux",1479066956,null),args__31746__auto__),frontend$components$reference_filters$filter_dialog_aux,args__31746__auto__,null);
}
};
var frontend$components$reference_filters$filter_dialog_aux = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__53649__i = 0, G__53649__a = new Array(arguments.length -  0);
while (G__53649__i < G__53649__a.length) {G__53649__a[G__53649__i] = arguments[G__53649__i + 0]; ++G__53649__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__53649__a,0,null);
} 
return frontend$components$reference_filters$filter_dialog_aux__delegate.call(this,args__31746__auto__);};
frontend$components$reference_filters$filter_dialog_aux.cljs$lang$maxFixedArity = 0;
frontend$components$reference_filters$filter_dialog_aux.cljs$lang$applyTo = (function (arglist__53650){
var args__31746__auto__ = cljs.core.seq(arglist__53650);
return frontend$components$reference_filters$filter_dialog_aux__delegate(args__31746__auto__);
});
frontend$components$reference_filters$filter_dialog_aux.cljs$core$IFn$_invoke$arity$variadic = frontend$components$reference_filters$filter_dialog_aux__delegate;
return frontend$components$reference_filters$filter_dialog_aux;
})()
;
var memo_comp__31747__auto__ = (function (){var G__53640 = comp__31745__auto__;
var G__53641 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__53640,G__53641) : io.factorhouse.hsx.core.react_memo.call(null,G__53640,G__53641));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"filter-dialog-aux");

return comp__31745__auto__;
})();
frontend.components.reference_filters.filter_dialog = (function (){var render_fn__31744__auto__ = (function frontend$components$reference_filters$filter_dialog(page,references){
return frontend.components.reference_filters.filter_dialog_aux(page,references);
});
var comp__31745__auto__ = (function() { 
var frontend$components$reference_filters$filter_dialog__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__53642 = cljs.core.first(args__31746__auto__);
var G__53643 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__53642,G__53643) : io.factorhouse.hsx.core.obj_get.call(null,G__53642,G__53643));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"filter-dialog","filter-dialog",466928021,null),args__31746__auto__),frontend$components$reference_filters$filter_dialog,args__31746__auto__,null);
}
};
var frontend$components$reference_filters$filter_dialog = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__53651__i = 0, G__53651__a = new Array(arguments.length -  0);
while (G__53651__i < G__53651__a.length) {G__53651__a[G__53651__i] = arguments[G__53651__i + 0]; ++G__53651__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__53651__a,0,null);
} 
return frontend$components$reference_filters$filter_dialog__delegate.call(this,args__31746__auto__);};
frontend$components$reference_filters$filter_dialog.cljs$lang$maxFixedArity = 0;
frontend$components$reference_filters$filter_dialog.cljs$lang$applyTo = (function (arglist__53652){
var args__31746__auto__ = cljs.core.seq(arglist__53652);
return frontend$components$reference_filters$filter_dialog__delegate(args__31746__auto__);
});
frontend$components$reference_filters$filter_dialog.cljs$core$IFn$_invoke$arity$variadic = frontend$components$reference_filters$filter_dialog__delegate;
return frontend$components$reference_filters$filter_dialog;
})()
;
var memo_comp__31747__auto__ = (function (){var G__53644 = comp__31745__auto__;
var G__53645 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__53644,G__53645) : io.factorhouse.hsx.core.react_memo.call(null,G__53644,G__53645));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"filter-dialog");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.reference_filters.js.map
