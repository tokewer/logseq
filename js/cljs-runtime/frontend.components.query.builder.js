goog.provide('frontend.components.query.builder');
frontend.components.query.builder.select = (function frontend$components$query$builder$select(var_args){
var G__45791 = arguments.length;
switch (G__45791) {
case 2:
return frontend.components.query.builder.select.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.components.query.builder.select.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.components.query.builder.select.cljs$core$IFn$_invoke$arity$2 = (function (items,on_chosen){
return frontend.components.query.builder.select.cljs$core$IFn$_invoke$arity$3(items,on_chosen,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.components.query.builder.select.cljs$core$IFn$_invoke$arity$3 = (function (items,on_chosen,options){
return frontend.components.select.select(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items","items",1031954938),((cljs.core.map_QMARK_(cljs.core.first(items)))?items:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45789_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"value","value",305978217)],[p1__45789_SHARP_]);
}),items)),new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),on_chosen], null),options], 0)));
}));

(frontend.components.query.builder.select.cljs$lang$maxFixedArity = 3);

frontend.components.query.builder.append_tree_BANG_ = (function frontend$components$query$builder$append_tree_BANG_(_STAR_tree,p__45793,loc,x){
var map__45794 = p__45793;
var map__45794__$1 = cljs.core.__destructure_map(map__45794);
var toggle_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45794__$1,new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425));
var toggle_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45794__$1,new cljs.core.Keyword(null,"toggle?","toggle?",-664005476),true);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_tree,(function (p1__45792_SHARP_){
return frontend.handler.query.builder.append_element(p1__45792_SHARP_,loc,x);
}));

if(cljs.core.truth_(toggle_QMARK_)){
return (toggle_fn.cljs$core$IFn$_invoke$arity$0 ? toggle_fn.cljs$core$IFn$_invoke$arity$0() : toggle_fn.call(null));
} else {
return null;
}
});
frontend.components.query.builder.filter_label = (function frontend$components$query$builder$filter_label(value){
var G__45795 = value;
switch (G__45795) {
case "tags":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property.built-in","tags","property.built-in/tags",825428020)], 0));

break;
case "page reference":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("query.builder","filter-page-reference-label","query.builder/filter-page-reference-label",-110843798)], 0));

break;
case "property":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("class.built-in","property","class.built-in/property",-805928930)], 0));

break;
case "task":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("class.built-in","task","class.built-in/task",-715200887)], 0));

break;
case "priority":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property.built-in","priority","property.built-in/priority",502216968)], 0));

break;
case "page":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("query.builder","filter-page-label","query.builder/filter-page-label",-752362659)], 0));

break;
case "full text search":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("query.builder","filter-full-text-search-label","query.builder/filter-full-text-search-label",2072960663)], 0));

break;
case "between":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.filter","operator-between","view.filter/operator-between",1964583472)], 0));

break;
case "sample":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("query.builder","filter-sample-label","query.builder/filter-sample-label",-924677579)], 0));

break;
case "and":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("query.builder","operator-and-label","query.builder/operator-and-label",1183316308)], 0));

break;
case "or":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.filter","or","view.filter/or",-537909616)], 0));

break;
case "not":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("query.builder","operator-not-label","query.builder/operator-not-label",-227785226)], 0));

break;
default:
return value;

}
});
frontend.components.query.builder.search = (function (){var render_fn__31744__auto__ = (function frontend$components$query$builder$search(on_submit,on_cancel){
var _STAR_input_value = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}),cljs.core.PersistentVector.EMPTY);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#query-builder-search.form-input.block.sm:text-sm.sm:leading-5","input#query-builder-search.form-input.block.sm:text-sm.sm:leading-5",-1665721682),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("search","full-text-placeholder","search/full-text-placeholder",277485450)], 0)),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("search","full-text-placeholder","search/full-text-placeholder",277485450)], 0)),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
var G__45797 = e.keyCode;
switch (G__45797) {
case (13):
if(clojure.string.blank_QMARK_(cljs.core.deref(_STAR_input_value))){
return null;
} else {
frontend.util.stop(e);

var G__45798_46008 = cljs.core.deref(_STAR_input_value);
(on_submit.cljs$core$IFn$_invoke$arity$1 ? on_submit.cljs$core$IFn$_invoke$arity$1(G__45798_46008) : on_submit.call(null,G__45798_46008));

return cljs.core.reset_BANG_(_STAR_input_value,null);
}

break;
case (27):
return (on_cancel.cljs$core$IFn$_invoke$arity$0 ? on_cancel.cljs$core$IFn$_invoke$arity$0() : on_cancel.call(null));

break;
default:
return null;

}
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__45796_SHARP_){
return cljs.core.reset_BANG_(_STAR_input_value,frontend.util.evalue(p1__45796_SHARP_));
})], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$query$builder$search__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45799 = cljs.core.first(args__31746__auto__);
var G__45800 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45799,G__45800) : io.factorhouse.hsx.core.obj_get.call(null,G__45799,G__45800));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"search","search",-1089495947,null),args__31746__auto__),frontend$components$query$builder$search,args__31746__auto__,null);
}
};
var frontend$components$query$builder$search = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46009__i = 0, G__46009__a = new Array(arguments.length -  0);
while (G__46009__i < G__46009__a.length) {G__46009__a[G__46009__i] = arguments[G__46009__i + 0]; ++G__46009__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46009__a,0,null);
} 
return frontend$components$query$builder$search__delegate.call(this,args__31746__auto__);};
frontend$components$query$builder$search.cljs$lang$maxFixedArity = 0;
frontend$components$query$builder$search.cljs$lang$applyTo = (function (arglist__46010){
var args__31746__auto__ = cljs.core.seq(arglist__46010);
return frontend$components$query$builder$search__delegate(args__31746__auto__);
});
frontend$components$query$builder$search.cljs$core$IFn$_invoke$arity$variadic = frontend$components$query$builder$search__delegate;
return frontend$components$query$builder$search;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45801 = comp__31745__auto__;
var G__45802 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45801,G__45802) : io.factorhouse.hsx.core.react_memo.call(null,G__45801,G__45802));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"search");

return comp__31745__auto__;
})();
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.query !== 'undefined') && (typeof frontend.components.query.builder !== 'undefined') && (typeof frontend.components.query.builder._STAR_between_dates !== 'undefined')){
} else {
frontend.components.query.builder._STAR_between_dates = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
frontend.components.query.builder.built_in_property = (function frontend$components$query$builder$built_in_property(ident){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.property.built_in_properties,ident);
if(cljs.core.truth_(temp__5825__auto__)){
var map__45803 = temp__5825__auto__;
var map__45803__$1 = cljs.core.__destructure_map(map__45803);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45803__$1,new cljs.core.Keyword(null,"title","title",636505583));
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45803__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var closed_values = frontend.handler.db_based.property.util.get_closed_property_values(ident);
var G__45804 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","ident","db/ident",-737096),ident,new cljs.core.Keyword("block","title","block/title",710445684),title,new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(schema)], null);
if(cljs.core.seq(closed_values)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45804,new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952),closed_values);
} else {
return G__45804;
}
} else {
return null;
}
});
frontend.components.query.builder.closed_value_choice_items = (function frontend$components$query$builder$closed_value_choice_items(closed_values){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (value){
var temp__5825__auto__ = (function (){var or__5142__auto__ = logseq.db.frontend.property.closed_value_content(value);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(value);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var label = temp__5825__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label))], null);
} else {
return null;
}
}),closed_values);
});
frontend.components.query.builder.closed_values_multi_select = (function (){var render_fn__31744__auto__ = (function frontend$components$query$builder$closed_values_multi_select(_STAR_tree,opts,loc,property_ident,clause_head){
var vec__45805 = logseq.shui.hooks.use_state(null);
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45805,(0),null);
var set_values_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45805,(1),null);
var repo = frontend.state.get_current_repo();
logseq.shui.hooks.use_effect_BANG_((function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_property_closed_values(repo,property_ident)),(function (closed){
return promesa.protocols._promise((function (){var G__45808 = frontend.components.query.builder.closed_value_choice_items(closed);
return (set_values_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_values_BANG_.cljs$core$IFn$_invoke$arity$1(G__45808) : set_values_BANG_.call(null,G__45808));
})());
}));
}));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [property_ident], null));

return frontend.components.query.builder.select.cljs$core$IFn$_invoke$arity$3(values,cljs.core.constantly(null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"multiple-choices?","multiple-choices?",-1858892490),true,new cljs.core.Keyword(null,"selected-choices","selected-choices",1913324317),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"extract-chosen-fn","extract-chosen-fn",1058364622),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"prompt-key","prompt-key",1549371683),new cljs.core.Keyword("select","default-select-multiple","select/default-select-multiple",-1340588908),new cljs.core.Keyword(null,"close-modal?","close-modal?",-207518383),false,new cljs.core.Keyword(null,"loading?","loading?",1905707049),(values == null),new cljs.core.Keyword(null,"on-apply","on-apply",-1897056081),(function (choices){
if(cljs.core.seq(choices)){
return frontend.components.query.builder.append_tree_BANG_(_STAR_tree,opts,loc,cljs.core.vec(cljs.core.cons(clause_head,choices)));
} else {
return null;
}
})], null));
});
var comp__31745__auto__ = (function() { 
var frontend$components$query$builder$closed_values_multi_select__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45809 = cljs.core.first(args__31746__auto__);
var G__45810 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45809,G__45810) : io.factorhouse.hsx.core.obj_get.call(null,G__45809,G__45810));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"closed-values-multi-select","closed-values-multi-select",784275521,null),args__31746__auto__),frontend$components$query$builder$closed_values_multi_select,args__31746__auto__,null);
}
};
var frontend$components$query$builder$closed_values_multi_select = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46011__i = 0, G__46011__a = new Array(arguments.length -  0);
while (G__46011__i < G__46011__a.length) {G__46011__a[G__46011__i] = arguments[G__46011__i + 0]; ++G__46011__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46011__a,0,null);
} 
return frontend$components$query$builder$closed_values_multi_select__delegate.call(this,args__31746__auto__);};
frontend$components$query$builder$closed_values_multi_select.cljs$lang$maxFixedArity = 0;
frontend$components$query$builder$closed_values_multi_select.cljs$lang$applyTo = (function (arglist__46012){
var args__31746__auto__ = cljs.core.seq(arglist__46012);
return frontend$components$query$builder$closed_values_multi_select__delegate(args__31746__auto__);
});
frontend$components$query$builder$closed_values_multi_select.cljs$core$IFn$_invoke$arity$variadic = frontend$components$query$builder$closed_values_multi_select__delegate;
return frontend$components$query$builder$closed_values_multi_select;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45811 = comp__31745__auto__;
var G__45812 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45811,G__45812) : io.factorhouse.hsx.core.react_memo.call(null,G__45811,G__45812));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"closed-values-multi-select");

return comp__31745__auto__;
})();
frontend.components.query.builder.property_value_choice_items = (function frontend$components$query$builder$property_value_choice_items(closed_values,used_values){
if(cljs.core.seq(closed_values)){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (value){
var temp__5825__auto__ = (function (){var or__5142__auto__ = logseq.db.frontend.property.closed_value_content(value);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(value);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var label = temp__5825__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label))], null);
} else {
return null;
}
}),closed_values);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45813){
var map__45814 = p__45813;
var map__45814__$1 = cljs.core.__destructure_map(map__45814);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45814__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"value","value",305978217),label], null);
}),used_values);
}
});
frontend.components.query.builder.loaded_property_title = (function (){var render_fn__31744__auto__ = (function frontend$components$query$builder$loaded_property_title(ident,fallback){
var title = frontend.db.hooks.use_resource(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-title","entity-title",-1260182373),ident], null));
var or__5142__auto__ = title;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return fallback;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$query$builder$loaded_property_title__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45815 = cljs.core.first(args__31746__auto__);
var G__45816 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45815,G__45816) : io.factorhouse.hsx.core.obj_get.call(null,G__45815,G__45816));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"loaded-property-title","loaded-property-title",-188484405,null),args__31746__auto__),frontend$components$query$builder$loaded_property_title,args__31746__auto__,null);
}
};
var frontend$components$query$builder$loaded_property_title = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46013__i = 0, G__46013__a = new Array(arguments.length -  0);
while (G__46013__i < G__46013__a.length) {G__46013__a[G__46013__i] = arguments[G__46013__i + 0]; ++G__46013__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46013__a,0,null);
} 
return frontend$components$query$builder$loaded_property_title__delegate.call(this,args__31746__auto__);};
frontend$components$query$builder$loaded_property_title.cljs$lang$maxFixedArity = 0;
frontend$components$query$builder$loaded_property_title.cljs$lang$applyTo = (function (arglist__46014){
var args__31746__auto__ = cljs.core.seq(arglist__46014);
return frontend$components$query$builder$loaded_property_title__delegate(args__31746__auto__);
});
frontend$components$query$builder$loaded_property_title.cljs$core$IFn$_invoke$arity$variadic = frontend$components$query$builder$loaded_property_title__delegate;
return frontend$components$query$builder$loaded_property_title;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45817 = comp__31745__auto__;
var G__45818 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45817,G__45818) : io.factorhouse.hsx.core.react_memo.call(null,G__45817,G__45818));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"loaded-property-title");

return comp__31745__auto__;
})();
frontend.components.query.builder.property_title = (function frontend$components$query$builder$property_title(ident){
var or__5142__auto__ = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(frontend.components.query.builder.built_in_property(ident));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.query.builder.loaded_property_title,ident,cljs.core.name(ident)], null);
}
});
frontend.components.query.builder.datepicker = (function (){var render_fn__31744__auto__ = (function frontend$components$query$builder$datepicker(id,placeholder,p__45819){
var map__45820 = p__45819;
var map__45820__$1 = cljs.core.__destructure_map(map__45820);
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45820__$1,new cljs.core.Keyword(null,"on-select","on-select",-192407950));
var _STAR_input_value = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}),cljs.core.PersistentVector.EMPTY);
var vec__45821 = logseq.shui.hooks.use_atom(_STAR_input_value);
var input_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45821,(0),null);
logseq.shui.hooks.use_effect_BANG_((function (){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.components.query.builder._STAR_between_dates,cljs.core.dissoc,id);
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));

var G__45824 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var G__45826 = e.target;
var G__45827 = (function (){var select_handle_BANG_ = (function (d){
var gd_46015 = frontend.date.js_date__GT_goog_date(d);
var journal_date_46016 = frontend.date.js_date__GT_journal_title(gd_46015);
cljs.core.reset_BANG_(_STAR_input_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [journal_date_46016,d], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.components.query.builder._STAR_between_dates,cljs.core.assoc,id,journal_date_46016);

var G__45829_46017 = on_select;
if((G__45829_46017 == null)){
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__45829_46017,cljs.core.PersistentVector.EMPTY);
}

return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
});
return frontend.ui.single_calendar(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-focus","initial-focus",1154999719),false,new cljs.core.Keyword(null,"selected","selected",574897764),(function (){var G__45830 = cljs.core.deref(_STAR_input_value);
if((G__45830 == null)){
return null;
} else {
return cljs.core.second(G__45830);
}
})(),new cljs.core.Keyword(null,"on-select","on-select",-192407950),select_handle_BANG_], null));
})();
var G__45828 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"query-datepicker","query-datepicker",1707199171),new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-0"], null),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981)], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__45826,G__45827,G__45828) : logseq.shui.ui.popup_show_BANG_.call(null,G__45826,G__45827,G__45828));
})], null);
var G__45825 = (function (){var or__5142__auto__ = cljs.core.first(input_value);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return placeholder;
}
})();
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__45824,G__45825) : logseq.shui.ui.button.call(null,G__45824,G__45825));
});
var comp__31745__auto__ = (function() { 
var frontend$components$query$builder$datepicker__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45831 = cljs.core.first(args__31746__auto__);
var G__45832 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45831,G__45832) : io.factorhouse.hsx.core.obj_get.call(null,G__45831,G__45832));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"datepicker","datepicker",-1832694319,null),args__31746__auto__),frontend$components$query$builder$datepicker,args__31746__auto__,null);
}
};
var frontend$components$query$builder$datepicker = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46018__i = 0, G__46018__a = new Array(arguments.length -  0);
while (G__46018__i < G__46018__a.length) {G__46018__a[G__46018__i] = arguments[G__46018__i + 0]; ++G__46018__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46018__a,0,null);
} 
return frontend$components$query$builder$datepicker__delegate.call(this,args__31746__auto__);};
frontend$components$query$builder$datepicker.cljs$lang$maxFixedArity = 0;
frontend$components$query$builder$datepicker.cljs$lang$applyTo = (function (arglist__46019){
var args__31746__auto__ = cljs.core.seq(arglist__46019);
return frontend$components$query$builder$datepicker__delegate(args__31746__auto__);
});
frontend$components$query$builder$datepicker.cljs$core$IFn$_invoke$arity$variadic = frontend$components$query$builder$datepicker__delegate;
return frontend$components$query$builder$datepicker;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45833 = comp__31745__auto__;
var G__45834 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45833,G__45834) : io.factorhouse.hsx.core.react_memo.call(null,G__45833,G__45834));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"datepicker");

return comp__31745__auto__;
})();
frontend.components.query.builder.between = (function (){var render_fn__31744__auto__ = (function frontend$components$query$builder$between(p__45835){
var map__45836 = p__45835;
var map__45836__$1 = cljs.core.__destructure_map(map__45836);
var opts = map__45836__$1;
var tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45836__$1,new cljs.core.Keyword(null,"tree","tree",-196312028));
var loc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45836__$1,new cljs.core.Keyword(null,"loc","loc",-584284901));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.between-date.p-4","div.between-date.p-4",-244963617),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
return frontend.util.stop_propagation(e);
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.gap-2","div.flex.flex-row.items-center.gap-2",212596841),frontend.components.query.builder.datepicker(new cljs.core.Keyword(null,"start","start",-355208981),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("query.builder","between-start-label","query.builder/between-start-label",1956678480)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),(function (){
var temp__5825__auto__ = document.querySelector(".query-builder-datepicker[data-key=end]");
if(cljs.core.truth_(temp__5825__auto__)){
var end_input = temp__5825__auto__;
if(clojure.string.blank_QMARK_(end_input.value)){
return end_input.focus();
} else {
return null;
}
} else {
return null;
}
})], null)], 0))),"~",frontend.components.query.builder.datepicker(new cljs.core.Keyword(null,"end","end",-268185958),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("query.builder","between-end-label","query.builder/between-end-label",-1697939709)], 0)),opts)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.pt-2","p.pt-2",-247770776),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","submit","ui/submit",-49310281)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var map__45837 = cljs.core.deref(frontend.components.query.builder._STAR_between_dates);
var map__45837__$1 = cljs.core.__destructure_map(map__45837);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45837__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45837__$1,new cljs.core.Keyword(null,"end","end",-268185958));
if(cljs.core.truth_((function (){var and__5140__auto__ = start;
if(cljs.core.truth_(and__5140__auto__)){
return end;
} else {
return and__5140__auto__;
}
})())){
var clause = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-ref","page-ref",-1047131151),start], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-ref","page-ref",-1047131151),end], null)], null);
frontend.components.query.builder.append_tree_BANG_(tree,opts,loc,clause);

return cljs.core.reset_BANG_(frontend.components.query.builder._STAR_between_dates,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
})], 0))], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$query$builder$between__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45838 = cljs.core.first(args__31746__auto__);
var G__45839 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45838,G__45839) : io.factorhouse.hsx.core.obj_get.call(null,G__45838,G__45839));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"between","between",-1523336493,null),args__31746__auto__),frontend$components$query$builder$between,args__31746__auto__,null);
}
};
var frontend$components$query$builder$between = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46020__i = 0, G__46020__a = new Array(arguments.length -  0);
while (G__46020__i < G__46020__a.length) {G__46020__a[G__46020__i] = arguments[G__46020__i + 0]; ++G__46020__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46020__a,0,null);
} 
return frontend$components$query$builder$between__delegate.call(this,args__31746__auto__);};
frontend$components$query$builder$between.cljs$lang$maxFixedArity = 0;
frontend$components$query$builder$between.cljs$lang$applyTo = (function (arglist__46021){
var args__31746__auto__ = cljs.core.seq(arglist__46021);
return frontend$components$query$builder$between__delegate(args__31746__auto__);
});
frontend$components$query$builder$between.cljs$core$IFn$_invoke$arity$variadic = frontend$components$query$builder$between__delegate;
return frontend$components$query$builder$between;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45840 = comp__31745__auto__;
var G__45841 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45840,G__45841) : io.factorhouse.hsx.core.react_memo.call(null,G__45840,G__45841));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"between");

return comp__31745__auto__;
})();
frontend.components.query.builder.property_select = (function (){var render_fn__31744__auto__ = (function frontend$components$query$builder$property_select(_STAR_mode,_STAR_property,_STAR_private_property_QMARK_){
var vec__45844 = logseq.shui.hooks.use_state(null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45844,(0),null);
var set_properties_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45844,(1),null);
var vec__45847 = logseq.shui.hooks.use_atom(_STAR_private_property_QMARK_);
var private_property_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45847,(0),null);
var properties__$1 = (function (){var G__45850 = properties;
if(cljs.core.not(private_property_QMARK_)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(logseq.db.built_in_QMARK_,G__45850);
} else {
return G__45850;
}
})();
logseq.shui.hooks.use_effect_BANG_((function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_all_properties.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remove-built-in-property?","remove-built-in-property?",454663723),false,new cljs.core.Keyword(null,"remove-non-queryable-built-in-property?","remove-non-queryable-built-in-property?",1219338536),true], null)], 0))),(function (properties__$2){
return promesa.protocols._promise((set_properties_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_properties_BANG_.cljs$core$IFn$_invoke$arity$1(properties__$2) : set_properties_BANG_.call(null,properties__$2)));
}));
}));
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-1","div.flex.flex-col.gap-1",1246857632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.justify-between.gap-1.items-center.px-1.pb-1.border-b","div.flex.flex-row.justify-between.gap-1.items-center.px-1.pb-1.border-b",2119676494),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.opacity-50.cursor.select-none.text-sm","label.opacity-50.cursor.select-none.text-sm",-1237045826),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"built-in"], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("query.builder","show-built-in-properties","query.builder/show-built-in-properties",1053812564)], 0))], null),(function (){var G__45851 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"built-in",new cljs.core.Keyword(null,"checked","checked",-50955819),private_property_QMARK_,new cljs.core.Keyword(null,"on-checked-change","on-checked-change",-482086819),(function (p1__45842_SHARP_){
return cljs.core.reset_BANG_(_STAR_private_property_QMARK_,cljs.core.boolean$(p1__45842_SHARP_));
})], null);
return (logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1(G__45851) : logseq.shui.ui.checkbox.call(null,G__45851));
})()], null),frontend.components.query.builder.select.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45843_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"value","value",305978217)],[new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(p1__45843_SHARP_),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(p1__45843_SHARP_)]);
}),properties__$1),(function (p__45852){
var map__45853 = p__45852;
var map__45853__$1 = cljs.core.__destructure_map(map__45853);
var db_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45853__$1,new cljs.core.Keyword("db","ident","db/ident",-737096));
cljs.core.reset_BANG_(_STAR_mode,"property-value");

return cljs.core.reset_BANG_(_STAR_property,db_ident);
}))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$query$builder$property_select__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45854 = cljs.core.first(args__31746__auto__);
var G__45855 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45854,G__45855) : io.factorhouse.hsx.core.obj_get.call(null,G__45854,G__45855));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"property-select","property-select",636280284,null),args__31746__auto__),frontend$components$query$builder$property_select,args__31746__auto__,null);
}
};
var frontend$components$query$builder$property_select = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46022__i = 0, G__46022__a = new Array(arguments.length -  0);
while (G__46022__i < G__46022__a.length) {G__46022__a[G__46022__i] = arguments[G__46022__i + 0]; ++G__46022__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46022__a,0,null);
} 
return frontend$components$query$builder$property_select__delegate.call(this,args__31746__auto__);};
frontend$components$query$builder$property_select.cljs$lang$maxFixedArity = 0;
frontend$components$query$builder$property_select.cljs$lang$applyTo = (function (arglist__46023){
var args__31746__auto__ = cljs.core.seq(arglist__46023);
return frontend$components$query$builder$property_select__delegate(args__31746__auto__);
});
frontend$components$query$builder$property_select.cljs$core$IFn$_invoke$arity$variadic = frontend$components$query$builder$property_select__delegate;
return frontend$components$query$builder$property_select;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45856 = comp__31745__auto__;
var G__45857 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45856,G__45857) : io.factorhouse.hsx.core.react_memo.call(null,G__45856,G__45857));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"property-select");

return comp__31745__auto__;
})();
frontend.components.query.builder.property_value_select_inner = (function (){var render_fn__31744__auto__ = (function frontend$components$query$builder$property_value_select_inner(_STAR_property,_STAR_private_property_QMARK_,_STAR_tree,opts,loc,values){
var select_all_label = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.table","select-all","view.table/select-all",-8862523)], 0));
var values_SINGLEQUOTE_ = cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),select_all_label,new cljs.core.Keyword(null,"value","value",305978217),select_all_label], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45858_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"original-value","original-value",-1784606036)],[(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__45858_SHARP_))),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__45858_SHARP_)]);
}),values));
return frontend.components.query.builder.select.cljs$core$IFn$_invoke$arity$2(values_SINGLEQUOTE_,(function (p__45859){
var map__45860 = p__45859;
var map__45860__$1 = cljs.core.__destructure_map(map__45860);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45860__$1,new cljs.core.Keyword(null,"value","value",305978217));
var original_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45860__$1,new cljs.core.Keyword(null,"original-value","original-value",-1784606036));
var k = (cljs.core.truth_(cljs.core.deref(_STAR_private_property_QMARK_))?new cljs.core.Keyword(null,"private-property","private-property",1080779061):new cljs.core.Keyword(null,"property","property",-1114278232));
var x = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,select_all_label))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.deref(_STAR_property)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.deref(_STAR_property),original_value], null));
cljs.core.reset_BANG_(_STAR_property,null);

return frontend.components.query.builder.append_tree_BANG_(_STAR_tree,opts,loc,x);
}));
});
var comp__31745__auto__ = (function() { 
var frontend$components$query$builder$property_value_select_inner__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45861 = cljs.core.first(args__31746__auto__);
var G__45862 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45861,G__45862) : io.factorhouse.hsx.core.obj_get.call(null,G__45861,G__45862));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"property-value-select-inner","property-value-select-inner",-473469150,null),args__31746__auto__),frontend$components$query$builder$property_value_select_inner,args__31746__auto__,null);
}
};
var frontend$components$query$builder$property_value_select_inner = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46024__i = 0, G__46024__a = new Array(arguments.length -  0);
while (G__46024__i < G__46024__a.length) {G__46024__a[G__46024__i] = arguments[G__46024__i + 0]; ++G__46024__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46024__a,0,null);
} 
return frontend$components$query$builder$property_value_select_inner__delegate.call(this,args__31746__auto__);};
frontend$components$query$builder$property_value_select_inner.cljs$lang$maxFixedArity = 0;
frontend$components$query$builder$property_value_select_inner.cljs$lang$applyTo = (function (arglist__46025){
var args__31746__auto__ = cljs.core.seq(arglist__46025);
return frontend$components$query$builder$property_value_select_inner__delegate(args__31746__auto__);
});
frontend$components$query$builder$property_value_select_inner.cljs$core$IFn$_invoke$arity$variadic = frontend$components$query$builder$property_value_select_inner__delegate;
return frontend$components$query$builder$property_value_select_inner;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45863 = comp__31745__auto__;
var G__45864 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45863,G__45864) : io.factorhouse.hsx.core.react_memo.call(null,G__45863,G__45864));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"property-value-select-inner");

return comp__31745__auto__;
})();
frontend.components.query.builder.property_value_select = (function (){var render_fn__31744__auto__ = (function frontend$components$query$builder$property_value_select(_STAR_property,_STAR_private_property_QMARK_,_STAR_tree,opts,loc){
var vec__45865 = logseq.shui.hooks.use_state(null);
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45865,(0),null);
var set_values_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45865,(1),null);
var repo = frontend.state.get_current_repo();
logseq.shui.hooks.use_effect_BANG_((function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_property_closed_values(repo,cljs.core.deref(_STAR_property))),(function (closed){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core.seq(closed))?null:frontend.db.async._LT_get_property_values(cljs.core.deref(_STAR_property)))),(function (used){
return promesa.protocols._promise((function (){var G__45868 = frontend.components.query.builder.property_value_choice_items(closed,used);
return (set_values_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_values_BANG_.cljs$core$IFn$_invoke$arity$1(G__45868) : set_values_BANG_.call(null,G__45868));
})());
}));
}));
}));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(_STAR_property)], null));

return frontend.components.query.builder.property_value_select_inner(_STAR_property,_STAR_private_property_QMARK_,_STAR_tree,opts,loc,values);
});
var comp__31745__auto__ = (function() { 
var frontend$components$query$builder$property_value_select__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45869 = cljs.core.first(args__31746__auto__);
var G__45870 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45869,G__45870) : io.factorhouse.hsx.core.obj_get.call(null,G__45869,G__45870));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"property-value-select","property-value-select",-1884766825,null),args__31746__auto__),frontend$components$query$builder$property_value_select,args__31746__auto__,null);
}
};
var frontend$components$query$builder$property_value_select = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46026__i = 0, G__46026__a = new Array(arguments.length -  0);
while (G__46026__i < G__46026__a.length) {G__46026__a[G__46026__i] = arguments[G__46026__i + 0]; ++G__46026__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46026__a,0,null);
} 
return frontend$components$query$builder$property_value_select__delegate.call(this,args__31746__auto__);};
frontend$components$query$builder$property_value_select.cljs$lang$maxFixedArity = 0;
frontend$components$query$builder$property_value_select.cljs$lang$applyTo = (function (arglist__46027){
var args__31746__auto__ = cljs.core.seq(arglist__46027);
return frontend$components$query$builder$property_value_select__delegate(args__31746__auto__);
});
frontend$components$query$builder$property_value_select.cljs$core$IFn$_invoke$arity$variadic = frontend$components$query$builder$property_value_select__delegate;
return frontend$components$query$builder$property_value_select;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45871 = comp__31745__auto__;
var G__45872 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45871,G__45872) : io.factorhouse.hsx.core.react_memo.call(null,G__45871,G__45872));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"property-value-select");

return comp__31745__auto__;
})();
frontend.components.query.builder.tags = (function (){var render_fn__31744__auto__ = (function frontend$components$query$builder$tags(repo,_STAR_tree,opts,loc){
var vec__45873 = logseq.shui.hooks.use_state(null);
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45873,(0),null);
var set_values_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45873,(1),null);
logseq.shui.hooks.use_effect_BANG_((function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_all_classes(repo,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"except-root-class?","except-root-class?",-345353595),true,new cljs.core.Keyword(null,"except-private-tags?","except-private-tags?",1020635160),false], null))),(function (result){
return promesa.protocols._promise((set_values_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_values_BANG_.cljs$core$IFn$_invoke$arity$1(result) : set_values_BANG_.call(null,result)));
}));
}));
}),cljs.core.PersistentVector.EMPTY);

var items = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","title","block/title",710445684),values));
return frontend.components.query.builder.select.cljs$core$IFn$_invoke$arity$3(items,(function (p__45876){
var map__45877 = p__45876;
var map__45877__$1 = cljs.core.__destructure_map(map__45877);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45877__$1,new cljs.core.Keyword(null,"value","value",305978217));
var _label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45877__$1,new cljs.core.Keyword(null,"_label","_label",-640685391));
return frontend.components.query.builder.append_tree_BANG_(_STAR_tree,opts,loc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value))], null));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),new cljs.core.Keyword(null,"label","label",1718410804)], null));
});
var comp__31745__auto__ = (function() { 
var frontend$components$query$builder$tags__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45878 = cljs.core.first(args__31746__auto__);
var G__45879 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45878,G__45879) : io.factorhouse.hsx.core.obj_get.call(null,G__45878,G__45879));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"tags","tags",-883016792,null),args__31746__auto__),frontend$components$query$builder$tags,args__31746__auto__,null);
}
};
var frontend$components$query$builder$tags = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46028__i = 0, G__46028__a = new Array(arguments.length -  0);
while (G__46028__i < G__46028__a.length) {G__46028__a[G__46028__i] = arguments[G__46028__i + 0]; ++G__46028__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46028__a,0,null);
} 
return frontend$components$query$builder$tags__delegate.call(this,args__31746__auto__);};
frontend$components$query$builder$tags.cljs$lang$maxFixedArity = 0;
frontend$components$query$builder$tags.cljs$lang$applyTo = (function (arglist__46029){
var args__31746__auto__ = cljs.core.seq(arglist__46029);
return frontend$components$query$builder$tags__delegate(args__31746__auto__);
});
frontend$components$query$builder$tags.cljs$core$IFn$_invoke$arity$variadic = frontend$components$query$builder$tags__delegate;
return frontend$components$query$builder$tags;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45880 = comp__31745__auto__;
var G__45881 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45880,G__45881) : io.factorhouse.hsx.core.react_memo.call(null,G__45880,G__45881));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"tags");

return comp__31745__auto__;
})();
frontend.components.query.builder.page_search = (function (){var render_fn__31744__auto__ = (function frontend$components$query$builder$page_search(on_chosen){
var vec__45882 = logseq.shui.hooks.use_state(null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45882,(0),null);
var set_result_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45882,(1),null);
var vec__45885 = logseq.shui.hooks.use_state(null);
var loading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45885,(0),null);
var set_loading_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45885,(1),null);
logseq.shui.hooks.use_effect_BANG_((function (){
(set_loading_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_loading_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_loading_BANG_.call(null,true));

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-all-page-titles","thread-api/get-all-page-titles",1191294363),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo()], 0))),(function (result__$1){
return promesa.protocols._mcat(promesa.protocols._promise((set_result_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_result_BANG_.cljs$core$IFn$_invoke$arity$1(result__$1) : set_result_BANG_.call(null,result__$1))),(function (___21901__auto__){
return promesa.protocols._promise((set_loading_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_loading_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_loading_BANG_.call(null,false)));
}));
}));
}));
}),cljs.core.PersistentVector.EMPTY);

return frontend.components.query.builder.select.cljs$core$IFn$_invoke$arity$3(result,on_chosen,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loading?","loading?",1905707049),loading_QMARK_], null));
});
var comp__31745__auto__ = (function() { 
var frontend$components$query$builder$page_search__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45888 = cljs.core.first(args__31746__auto__);
var G__45889 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45888,G__45889) : io.factorhouse.hsx.core.obj_get.call(null,G__45888,G__45889));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"page-search","page-search",-811510489,null),args__31746__auto__),frontend$components$query$builder$page_search,args__31746__auto__,null);
}
};
var frontend$components$query$builder$page_search = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46030__i = 0, G__46030__a = new Array(arguments.length -  0);
while (G__46030__i < G__46030__a.length) {G__46030__a[G__46030__i] = arguments[G__46030__i + 0]; ++G__46030__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46030__a,0,null);
} 
return frontend$components$query$builder$page_search__delegate.call(this,args__31746__auto__);};
frontend$components$query$builder$page_search.cljs$lang$maxFixedArity = 0;
frontend$components$query$builder$page_search.cljs$lang$applyTo = (function (arglist__46031){
var args__31746__auto__ = cljs.core.seq(arglist__46031);
return frontend$components$query$builder$page_search__delegate(args__31746__auto__);
});
frontend$components$query$builder$page_search.cljs$core$IFn$_invoke$arity$variadic = frontend$components$query$builder$page_search__delegate;
return frontend$components$query$builder$page_search;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45890 = comp__31745__auto__;
var G__45891 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45890,G__45891) : io.factorhouse.hsx.core.react_memo.call(null,G__45890,G__45891));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"page-search");

return comp__31745__auto__;
})();
frontend.components.query.builder.db_based_query_filter_picker = (function frontend$components$query$builder$db_based_query_filter_picker(_STAR_mode,_STAR_property,_STAR_private_property_QMARK_,_STAR_tree,loc,clause,opts){
var repo = frontend.state.get_current_repo();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__45892 = cljs.core.deref(_STAR_mode);
switch (G__45892) {
case "property":
return frontend.components.query.builder.property_select(_STAR_mode,_STAR_property,_STAR_private_property_QMARK_);

break;
case "property-value":
return frontend.components.query.builder.property_value_select(_STAR_property,_STAR_private_property_QMARK_,_STAR_tree,opts,loc);

break;
case "sample":
return frontend.components.query.builder.select.cljs$core$IFn$_invoke$arity$2(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(101)),(function (p__45893){
var map__45894 = p__45893;
var map__45894__$1 = cljs.core.__destructure_map(map__45894);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45894__$1,new cljs.core.Keyword(null,"value","value",305978217));
return frontend.components.query.builder.append_tree_BANG_(_STAR_tree,opts,loc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sample","sample",79023601),frontend.util.safe_parse_int(value)], null));
}));

break;
case "tags":
return frontend.components.query.builder.tags(repo,_STAR_tree,opts,loc);

break;
case "task":
return frontend.components.query.builder.closed_values_multi_select(_STAR_tree,opts,loc,new cljs.core.Keyword("logseq.property","status","logseq.property/status",-907216853),new cljs.core.Keyword(null,"task","task",-1476607993));

break;
case "priority":
return frontend.components.query.builder.closed_values_multi_select(_STAR_tree,opts,loc,new cljs.core.Keyword("logseq.property","priority","logseq.property/priority",239228411),new cljs.core.Keyword(null,"priority","priority",1431093715));

break;
case "page":
return frontend.components.query.builder.page_search((function (p__45895){
var map__45896 = p__45895;
var map__45896__$1 = cljs.core.__destructure_map(map__45896);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45896__$1,new cljs.core.Keyword(null,"value","value",305978217));
return frontend.components.query.builder.append_tree_BANG_(_STAR_tree,opts,loc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),value], null));
}));

break;
case "page reference":
return frontend.components.query.builder.page_search((function (p__45897){
var map__45898 = p__45897;
var map__45898__$1 = cljs.core.__destructure_map(map__45898);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45898__$1,new cljs.core.Keyword(null,"value","value",305978217));
return frontend.components.query.builder.append_tree_BANG_(_STAR_tree,opts,loc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-ref","page-ref",-1047131151),value], null));
}));

break;
case "full text search":
return frontend.components.query.builder.search((function (v){
return frontend.components.query.builder.append_tree_BANG_(_STAR_tree,opts,loc,v);
}),new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425).cljs$core$IFn$_invoke$arity$1(opts));

break;
case "between":
return frontend.components.query.builder.between(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tree","tree",-196312028),_STAR_tree,new cljs.core.Keyword(null,"loc","loc",-584284901),loc,new cljs.core.Keyword(null,"clause","clause",1479668060),clause], null)], 0)));

break;
default:
return null;

}
})()], null);
});
frontend.components.query.builder.picker = (function (){var render_fn__31744__auto__ = (function frontend$components$query$builder$picker(_STAR_tree,loc,clause,opts){
var _STAR_mode = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}),cljs.core.PersistentVector.EMPTY);
var _STAR_property = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}),cljs.core.PersistentVector.EMPTY);
var _STAR_private_property_QMARK_ = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}),cljs.core.PersistentVector.EMPTY);
var vec__45900 = logseq.shui.hooks.use_atom(_STAR_mode);
var mode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45900,(0),null);
var filters = frontend.handler.query.builder.db_based_block_filters;
var filters_and_ops = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(filters,frontend.handler.query.builder.operators);
var operator_QMARK_ = (function (p1__45899_SHARP_){
return cljs.core.contains_QMARK_(frontend.handler.query.builder.operators_set,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__45899_SHARP_));
});
var select_items = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (value){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"label","label",1718410804),frontend.components.query.builder.filter_label(value)], null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,filters_and_ops));
logseq.shui.hooks.use_effect_BANG_((function (){
return frontend.state.clear_selection_BANG_();
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.query-builder-picker","div.query-builder-picker",-441570410),(cljs.core.truth_(mode)?((operator_QMARK_(mode))?null:frontend.components.query.builder.db_based_query_filter_picker(_STAR_mode,_STAR_property,_STAR_private_property_QMARK_,_STAR_tree,loc,clause,opts)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.components.query.builder.select.cljs$core$IFn$_invoke$arity$3(select_items,(function (p__45903){
var map__45904 = p__45903;
var map__45904__$1 = cljs.core.__destructure_map(map__45904);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45904__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(operator_QMARK_(value)){
return frontend.components.query.builder.append_tree_BANG_(_STAR_tree,opts,loc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value)], null));
} else {
return cljs.core.reset_BANG_(_STAR_mode,value);

}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),(function (p__45905){
var map__45906 = p__45905;
var map__45906__$1 = cljs.core.__destructure_map(map__45906);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45906__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45906__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_(label)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
} else {
return value;
}
}),new cljs.core.Keyword(null,"input-default-placeholder","input-default-placeholder",-1040139250),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("query.builder","add-filter-or-operator-placeholder","query.builder/add-filter-or-operator-placeholder",1569932386)], 0))], null))], null))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$query$builder$picker__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45907 = cljs.core.first(args__31746__auto__);
var G__45908 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45907,G__45908) : io.factorhouse.hsx.core.obj_get.call(null,G__45907,G__45908));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"picker","picker",981141924,null),args__31746__auto__),frontend$components$query$builder$picker,args__31746__auto__,null);
}
};
var frontend$components$query$builder$picker = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46035__i = 0, G__46035__a = new Array(arguments.length -  0);
while (G__46035__i < G__46035__a.length) {G__46035__a[G__46035__i] = arguments[G__46035__i + 0]; ++G__46035__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46035__a,0,null);
} 
return frontend$components$query$builder$picker__delegate.call(this,args__31746__auto__);};
frontend$components$query$builder$picker.cljs$lang$maxFixedArity = 0;
frontend$components$query$builder$picker.cljs$lang$applyTo = (function (arglist__46036){
var args__31746__auto__ = cljs.core.seq(arglist__46036);
return frontend$components$query$builder$picker__delegate(args__31746__auto__);
});
frontend$components$query$builder$picker.cljs$core$IFn$_invoke$arity$variadic = frontend$components$query$builder$picker__delegate;
return frontend$components$query$builder$picker;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45909 = comp__31745__auto__;
var G__45910 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45909,G__45910) : io.factorhouse.hsx.core.react_memo.call(null,G__45909,G__45910));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"picker");

return comp__31745__auto__;
})();
frontend.components.query.builder.add_filter = (function (){var render_fn__31744__auto__ = (function frontend$components$query$builder$add_filter(_STAR_tree,loc,clause){
var G__45911 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"jtrigger !px-1 h-6 add-filter text-muted-foreground",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),frontend.util.stop_propagation,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var G__45914 = e.target;
var G__45915 = (function (p__45917){
var map__45918 = p__45917;
var map__45918__$1 = cljs.core.__destructure_map(map__45918);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45918__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return frontend.components.query.builder.picker(_STAR_tree,loc,clause,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425),(function (){
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(id) : logseq.shui.ui.popup_hide_BANG_.call(null,id));
})], null));
});
var G__45916 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981)], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__45914,G__45915,G__45916) : logseq.shui.ui.popup_show_BANG_.call(null,G__45914,G__45915,G__45916));
})], null);
var G__45912 = frontend.ui.icon("plus",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null));
var G__45913 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),loc))?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("query.builder","filter","query.builder/filter",-421649381)], 0)):null);
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__45911,G__45912,G__45913) : logseq.shui.ui.button.call(null,G__45911,G__45912,G__45913));
});
var comp__31745__auto__ = (function() { 
var frontend$components$query$builder$add_filter__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45919 = cljs.core.first(args__31746__auto__);
var G__45920 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45919,G__45920) : io.factorhouse.hsx.core.obj_get.call(null,G__45919,G__45920));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"add-filter","add-filter",-163026669,null),args__31746__auto__),frontend$components$query$builder$add_filter,args__31746__auto__,null);
}
};
var frontend$components$query$builder$add_filter = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46038__i = 0, G__46038__a = new Array(arguments.length -  0);
while (G__46038__i < G__46038__a.length) {G__46038__a[G__46038__i] = arguments[G__46038__i + 0]; ++G__46038__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46038__a,0,null);
} 
return frontend$components$query$builder$add_filter__delegate.call(this,args__31746__auto__);};
frontend$components$query$builder$add_filter.cljs$lang$maxFixedArity = 0;
frontend$components$query$builder$add_filter.cljs$lang$applyTo = (function (arglist__46039){
var args__31746__auto__ = cljs.core.seq(arglist__46039);
return frontend$components$query$builder$add_filter__delegate(args__31746__auto__);
});
frontend$components$query$builder$add_filter.cljs$core$IFn$_invoke$arity$variadic = frontend$components$query$builder$add_filter__delegate;
return frontend$components$query$builder$add_filter;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45921 = comp__31745__auto__;
var G__45922 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45921,G__45922) : io.factorhouse.hsx.core.react_memo.call(null,G__45921,G__45922));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"add-filter");

return comp__31745__auto__;
})();
frontend.components.query.builder.built_in_uuid__GT_entity = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__45923){
var vec__45924 = p__45923;
var ident = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45924,(0),null);
var map__45927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45924,(1),null);
var map__45927__$1 = cljs.core.__destructure_map(map__45927);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45927__$1,new cljs.core.Keyword(null,"title","title",636505583));
if(cljs.core.truth_(title)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.common.uuid.gen_uuid.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db-ident-block-uuid","db-ident-block-uuid",-2020167291),ident),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),ident,new cljs.core.Keyword("block","title","block/title",710445684),title], null)], null);
} else {
return null;
}
}),logseq.db.frontend.class$.built_in_classes),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__45928){
var vec__45929 = p__45928;
var ident = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45929,(0),null);
var map__45932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45929,(1),null);
var map__45932__$1 = cljs.core.__destructure_map(map__45932);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45932__$1,new cljs.core.Keyword(null,"title","title",636505583));
if(cljs.core.truth_(title)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.common.uuid.gen_uuid.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db-ident-block-uuid","db-ident-block-uuid",-2020167291),ident),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),ident,new cljs.core.Keyword("block","title","block/title",710445684),title], null)], null);
} else {
return null;
}
}),logseq.db.frontend.property.built_in_properties),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__45933){
var vec__45934 = p__45933;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45934,(0),null);
var map__45937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45934,(1),null);
var map__45937__$1 = cljs.core.__destructure_map(map__45937);
var closed_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45937__$1,new cljs.core.Keyword(null,"closed-values","closed-values",364658811));
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__45938){
var map__45939 = p__45938;
var map__45939__$1 = cljs.core.__destructure_map(map__45939);
var db_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45939__$1,new cljs.core.Keyword(null,"db-ident","db-ident",-992686073));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45939__$1,new cljs.core.Keyword(null,"value","value",305978217));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45939__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
if(cljs.core.truth_((function (){var and__5140__auto__ = uuid;
if(cljs.core.truth_(and__5140__auto__)){
return value;
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uuid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),db_ident,new cljs.core.Keyword("block","title","block/title",710445684),value], null)], null);
} else {
return null;
}
}),closed_values);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.db.frontend.property.built_in_properties], 0))], 0)));
frontend.components.query.builder.coerce_uuid = (function frontend$components$query$builder$coerce_uuid(s){
if(cljs.core.uuid_QMARK_(s)){
return s;
} else {
if((s instanceof cljs.core.Symbol)){
var G__45940 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
return (frontend.components.query.builder.coerce_uuid.cljs$core$IFn$_invoke$arity$1 ? frontend.components.query.builder.coerce_uuid.cljs$core$IFn$_invoke$arity$1(G__45940) : frontend.components.query.builder.coerce_uuid.call(null,G__45940));
} else {
if(typeof s === 'string'){
return cljs.core.parse_uuid(s);
} else {
return null;

}
}
}
});
frontend.components.query.builder.built_in_title = (function frontend$components$query$builder$built_in_title(s){
var temp__5825__auto__ = (function (){var G__45941 = frontend.components.query.builder.coerce_uuid(s);
if((G__45941 == null)){
return null;
} else {
return (frontend.components.query.builder.built_in_uuid__GT_entity.cljs$core$IFn$_invoke$arity$1 ? frontend.components.query.builder.built_in_uuid__GT_entity.cljs$core$IFn$_invoke$arity$1(G__45941) : frontend.components.query.builder.built_in_uuid__GT_entity.call(null,G__45941));
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var entity = temp__5825__auto__;
var or__5142__auto__ = logseq.db.frontend.property.built_in_display_title(entity,frontend.context.i18n.t);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(entity);
}
} else {
return null;
}
});
frontend.components.query.builder.loaded_page_title = (function (){var render_fn__31744__auto__ = (function frontend$components$query$builder$loaded_page_title(block_uuid,fallback){
var entity = frontend.db.hooks.use_block(block_uuid);
var or__5142__auto__ = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(entity);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return fallback;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$query$builder$loaded_page_title__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45942 = cljs.core.first(args__31746__auto__);
var G__45943 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45942,G__45943) : io.factorhouse.hsx.core.obj_get.call(null,G__45942,G__45943));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"loaded-page-title","loaded-page-title",-1082548946,null),args__31746__auto__),frontend$components$query$builder$loaded_page_title,args__31746__auto__,null);
}
};
var frontend$components$query$builder$loaded_page_title = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46042__i = 0, G__46042__a = new Array(arguments.length -  0);
while (G__46042__i < G__46042__a.length) {G__46042__a[G__46042__i] = arguments[G__46042__i + 0]; ++G__46042__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46042__a,0,null);
} 
return frontend$components$query$builder$loaded_page_title__delegate.call(this,args__31746__auto__);};
frontend$components$query$builder$loaded_page_title.cljs$lang$maxFixedArity = 0;
frontend$components$query$builder$loaded_page_title.cljs$lang$applyTo = (function (arglist__46043){
var args__31746__auto__ = cljs.core.seq(arglist__46043);
return frontend$components$query$builder$loaded_page_title__delegate(args__31746__auto__);
});
frontend$components$query$builder$loaded_page_title.cljs$core$IFn$_invoke$arity$variadic = frontend$components$query$builder$loaded_page_title__delegate;
return frontend$components$query$builder$loaded_page_title;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45944 = comp__31745__auto__;
var G__45945 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45944,G__45945) : io.factorhouse.hsx.core.react_memo.call(null,G__45944,G__45945));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"loaded-page-title");

return comp__31745__auto__;
})();
frontend.components.query.builder.page_title = (function frontend$components$query$builder$page_title(s){
var temp__5823__auto__ = frontend.components.query.builder.coerce_uuid(s);
if(cljs.core.truth_(temp__5823__auto__)){
var block_uuid = temp__5823__auto__;
var or__5142__auto__ = frontend.components.query.builder.built_in_title(block_uuid);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.components.query.builder.loaded_page_title(block_uuid,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
}
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
}
});
frontend.components.query.builder.page_title_string = (function frontend$components$query$builder$page_title_string(s){
var or__5142__auto__ = frontend.components.query.builder.built_in_title(s);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
}
});
frontend.components.query.builder.dsl_human_output = (function frontend$components$query$builder$dsl_human_output(clause){
var f = cljs.core.first(clause);
if(clojure.string.starts_with_QMARK_((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)),"?")){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clause));
} else {
if(typeof clause === 'string'){
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("query.builder","search-label","query.builder/search-label",-240480615),clause], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"page-ref","page-ref",-1047131151))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),logseq.common.util.page_ref.left_brackets,frontend.components.query.builder.page_title(cljs.core.second(clause)),logseq.common.util.page_ref.right_brackets], null);
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),null], null), null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(f))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"#",frontend.components.query.builder.page_title(((typeof cljs.core.second(clause) === 'string')?cljs.core.second(clause):(((cljs.core.second(clause) instanceof cljs.core.Symbol))?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(clause))):cljs.core.second(cljs.core.second(clause))
)))], null);
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"property","property",-1114278232),null,new cljs.core.Keyword(null,"private-property","private-property",1080779061),null], null), null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(f))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((cljs.core.qualified_keyword_QMARK_(cljs.core.second(clause)))?frontend.components.query.builder.property_title(cljs.core.second(clause)):(function (){var G__45946 = cljs.core.second(clause);
if((G__45946 == null)){
return null;
} else {
return cljs.core.name(G__45946);
}
})()),": ",((((cljs.core.vector_QMARK_(cljs.core.last(clause))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page-ref","page-ref",-1047131151),cljs.core.first(cljs.core.last(clause))))))?frontend.components.query.builder.page_title(cljs.core.second(cljs.core.last(clause))):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(clause)))?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("query.builder","all-values-label","query.builder/all-values-label",1176180505)], 0)):frontend.components.query.builder.page_title(cljs.core.last(clause))
))], null);
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"between","between",1131099276));
if(and__5140__auto__){
return (frontend.db.query_dsl.get_timestamp_property.cljs$core$IFn$_invoke$arity$1 ? frontend.db.query_dsl.get_timestamp_property.cljs$core$IFn$_invoke$arity$1(clause) : frontend.db.query_dsl.get_timestamp_property.call(null,clause));
} else {
return and__5140__auto__;
}
})())){
var k = (frontend.db.query_dsl.get_timestamp_property.cljs$core$IFn$_invoke$arity$1 ? frontend.db.query_dsl.get_timestamp_property.cljs$core$IFn$_invoke$arity$1(clause) : frontend.db.query_dsl.get_timestamp_property.call(null,clause));
var vec__45947 = clause;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45947,(0),null);
var _property = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45947,(1),null);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45947,(2),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45947,(3),null);
var start__$1 = (((((start instanceof cljs.core.Keyword)) || ((start instanceof cljs.core.Symbol))))?cljs.core.name(start):cljs.core.second(start));
var end__$1 = (((((end instanceof cljs.core.Keyword)) || ((end instanceof cljs.core.Symbol))))?cljs.core.name(end):cljs.core.second(end));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("block","created-at","block/created-at",1440015)))?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("query.builder","created-label","query.builder/created-label",-969119094)], 0)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551)))?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("query.builder","updated-label","query.builder/updated-label",1015182371)], 0)):frontend.components.query.builder.property_title(k)
))," ",start__$1,(cljs.core.truth_(end__$1)?(""+" ~ "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end__$1)):null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"between","between",1131099276))){
var start = (((((cljs.core.second(clause) instanceof cljs.core.Keyword)) || ((cljs.core.second(clause) instanceof cljs.core.Symbol))))?cljs.core.name(cljs.core.second(clause)):cljs.core.second(cljs.core.second(clause)));
var end = (((((cljs.core.last(clause) instanceof cljs.core.Keyword)) || ((cljs.core.last(clause) instanceof cljs.core.Symbol))))?cljs.core.name(cljs.core.last(clause)):cljs.core.second(cljs.core.last(clause)));
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("query.builder","between-journal-label","query.builder/between-journal-label",-866857301),frontend.components.query.builder.page_title_string(start),frontend.components.query.builder.page_title_string(end)], 0));
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"task","task",-1476607993),null,new cljs.core.Keyword(null,"priority","priority",1431093715),null], null), null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(f))){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(f))+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.rest(clause))));
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"task","task",-1476607993),null,new cljs.core.Keyword(null,"page","page",849072397),null], null), null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(f))){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(f))+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.vector_QMARK_(cljs.core.second(clause)))?cljs.core.second(cljs.core.second(clause)):cljs.core.second(clause))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(clause))){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(f))+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(clause)));
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.handler.query.builder.__GT_dsl(clause)));

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
});
frontend.components.query.builder.clause_inner = (function (){var render_fn__31744__auto__ = (function() { 
var frontend$components$query$builder$clause_inner__delegate = function (_STAR_tree,loc,clause,p__45952){
var map__45953 = p__45952;
var map__45953__$1 = cljs.core.__destructure_map(map__45953);
var operator_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45953__$1,new cljs.core.Keyword(null,"operator?","operator?",68029935));
var popup = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4.flex.flex-col.gap-2","div.p-4.flex.flex-col.gap-2",1074883200),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","delete","ui/delete",-1768677056)], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_tree,(function (q){
var loc_SINGLEQUOTE_ = (cljs.core.truth_(operator_QMARK_)?cljs.core.vec(cljs.core.butlast(loc)):loc);
return frontend.handler.query.builder.remove_element(q,loc_SINGLEQUOTE_);
}));

return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","delete","ui/delete",-1768677056)], 0))], null),(cljs.core.truth_(operator_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("query.builder","unwrap-operator","query.builder/unwrap-operator",-319855296)], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_tree,(function (q){
var loc_SINGLEQUOTE_ = cljs.core.vec(cljs.core.butlast(loc));
return frontend.handler.query.builder.unwrap_operator(q,loc_SINGLEQUOTE_);
}));

return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("query.builder","unwrap-operator","query.builder/unwrap-operator",-319855296)], 0))], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-medium.text-sm","div.font-medium.text-sm",619848115),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("query.builder","wrap-filter-with-label","query.builder/wrap-filter-with-label",-490306334)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.gap-2","div.flex.flex-row.gap-2",-1457313917),(function (){var iter__5628__auto__ = (function frontend$components$query$builder$clause_inner_$_iter__45954(s__45955){
return (new cljs.core.LazySeq(null,(function (){
var s__45955__$1 = s__45955;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__45955__$1);
if(temp__5825__auto__){
var s__45955__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45955__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__45955__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__45957 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__45956 = (0);
while(true){
if((i__45956 < size__5627__auto__)){
var op = cljs.core._nth(c__5626__auto__,i__45956);
cljs.core.chunk_append(b__45957,frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(clojure.string.upper_case(cljs.core.name(op)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"intent","intent",-390846953),"logseq",new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__45956,op,c__5626__auto__,size__5627__auto__,b__45957,s__45955__$2,temp__5825__auto__,map__45953,map__45953__$1,operator_QMARK_){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_tree,((function (i__45956,op,c__5626__auto__,size__5627__auto__,b__45957,s__45955__$2,temp__5825__auto__,map__45953,map__45953__$1,operator_QMARK_){
return (function (q){
var loc_SINGLEQUOTE_ = (cljs.core.truth_(operator_QMARK_)?cljs.core.vec(cljs.core.butlast(loc)):loc);
return frontend.handler.query.builder.wrap_operator(q,loc_SINGLEQUOTE_,op);
});})(i__45956,op,c__5626__auto__,size__5627__auto__,b__45957,s__45955__$2,temp__5825__auto__,map__45953,map__45953__$1,operator_QMARK_))
);

return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
});})(i__45956,op,c__5626__auto__,size__5627__auto__,b__45957,s__45955__$2,temp__5825__auto__,map__45953,map__45953__$1,operator_QMARK_))
], 0)));

var G__46048 = (i__45956 + (1));
i__45956 = G__46048;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45957),frontend$components$query$builder$clause_inner_$_iter__45954(cljs.core.chunk_rest(s__45955__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45957),null);
}
} else {
var op = cljs.core.first(s__45955__$2);
return cljs.core.cons(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(clojure.string.upper_case(cljs.core.name(op)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"intent","intent",-390846953),"logseq",new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (op,s__45955__$2,temp__5825__auto__,map__45953,map__45953__$1,operator_QMARK_){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_tree,(function (q){
var loc_SINGLEQUOTE_ = (cljs.core.truth_(operator_QMARK_)?cljs.core.vec(cljs.core.butlast(loc)):loc);
return frontend.handler.query.builder.wrap_operator(q,loc_SINGLEQUOTE_,op);
}));

return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
});})(op,s__45955__$2,temp__5825__auto__,map__45953,map__45953__$1,operator_QMARK_))
], 0)),frontend$components$query$builder$clause_inner_$_iter__45954(cljs.core.rest(s__45955__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(frontend.handler.query.builder.operators);
})()], null),(cljs.core.truth_(operator_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-medium.text-sm","div.font-medium.text-sm",619848115),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("query.builder","replace-with-label","query.builder/replace-with-label",1161327045)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.gap-2","div.flex.flex-row.gap-2",-1457313917),(function (){var iter__5628__auto__ = (function frontend$components$query$builder$clause_inner_$_iter__45958(s__45959){
return (new cljs.core.LazySeq(null,(function (){
var s__45959__$1 = s__45959;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__45959__$1);
if(temp__5825__auto__){
var s__45959__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45959__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__45959__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__45961 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__45960 = (0);
while(true){
if((i__45960 < size__5627__auto__)){
var op = cljs.core._nth(c__5626__auto__,i__45960);
cljs.core.chunk_append(b__45961,frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(clojure.string.upper_case(cljs.core.name(op)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"intent","intent",-390846953),"logseq",new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__45960,op,c__5626__auto__,size__5627__auto__,b__45961,s__45959__$2,temp__5825__auto__,map__45953,map__45953__$1,operator_QMARK_){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_tree,((function (i__45960,op,c__5626__auto__,size__5627__auto__,b__45961,s__45959__$2,temp__5825__auto__,map__45953,map__45953__$1,operator_QMARK_){
return (function (q){
return frontend.handler.query.builder.replace_element(q,loc,op);
});})(i__45960,op,c__5626__auto__,size__5627__auto__,b__45961,s__45959__$2,temp__5825__auto__,map__45953,map__45953__$1,operator_QMARK_))
);

return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
});})(i__45960,op,c__5626__auto__,size__5627__auto__,b__45961,s__45959__$2,temp__5825__auto__,map__45953,map__45953__$1,operator_QMARK_))
], 0)));

var G__46053 = (i__45960 + (1));
i__45960 = G__46053;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45961),frontend$components$query$builder$clause_inner_$_iter__45958(cljs.core.chunk_rest(s__45959__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45961),null);
}
} else {
var op = cljs.core.first(s__45959__$2);
return cljs.core.cons(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(clojure.string.upper_case(cljs.core.name(op)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"intent","intent",-390846953),"logseq",new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (op,s__45959__$2,temp__5825__auto__,map__45953,map__45953__$1,operator_QMARK_){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_tree,(function (q){
return frontend.handler.query.builder.replace_element(q,loc,op);
}));

return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
});})(op,s__45959__$2,temp__5825__auto__,map__45953,map__45953__$1,operator_QMARK_))
], 0)),frontend$components$query$builder$clause_inner_$_iter__45958(cljs.core.rest(s__45959__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(clause))]),frontend.handler.query.builder.operators));
})()], null)], null):null)], null);
if(cljs.core.truth_(operator_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.text-sm.query-clause","a.flex.text-sm.query-clause",-2059076424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__45950_SHARP_){
var G__45962 = p1__45950_SHARP_.target;
var G__45963 = popup;
var G__45964 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981)], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__45962,G__45963,G__45964) : logseq.shui.ui.popup_show_BANG_.call(null,G__45962,G__45963,G__45964));
})], null),clause], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.gap-2.px-1.rounded.border.query-clause-btn","div.flex.flex-row.items-center.gap-2.px-1.rounded.border.query-clause-btn",1524890564),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.query-clause","a.flex.query-clause",26608086),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__45951_SHARP_){
var G__45965 = p1__45951_SHARP_.target;
var G__45966 = popup;
var G__45967 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981)], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__45965,G__45966,G__45967) : logseq.shui.ui.popup_show_BANG_.call(null,G__45965,G__45966,G__45967));
})], null),frontend.components.query.builder.dsl_human_output(clause)], null)], null);
}
};
var frontend$components$query$builder$clause_inner = function (_STAR_tree,loc,clause,var_args){
var p__45952 = null;
if (arguments.length > 3) {
var G__46054__i = 0, G__46054__a = new Array(arguments.length -  3);
while (G__46054__i < G__46054__a.length) {G__46054__a[G__46054__i] = arguments[G__46054__i + 3]; ++G__46054__i;}
  p__45952 = new cljs.core.IndexedSeq(G__46054__a,0,null);
} 
return frontend$components$query$builder$clause_inner__delegate.call(this,_STAR_tree,loc,clause,p__45952);};
frontend$components$query$builder$clause_inner.cljs$lang$maxFixedArity = 3;
frontend$components$query$builder$clause_inner.cljs$lang$applyTo = (function (arglist__46055){
var _STAR_tree = cljs.core.first(arglist__46055);
arglist__46055 = cljs.core.next(arglist__46055);
var loc = cljs.core.first(arglist__46055);
arglist__46055 = cljs.core.next(arglist__46055);
var clause = cljs.core.first(arglist__46055);
var p__45952 = cljs.core.rest(arglist__46055);
return frontend$components$query$builder$clause_inner__delegate(_STAR_tree,loc,clause,p__45952);
});
frontend$components$query$builder$clause_inner.cljs$core$IFn$_invoke$arity$variadic = frontend$components$query$builder$clause_inner__delegate;
return frontend$components$query$builder$clause_inner;
})()
;
var comp__31745__auto__ = (function() { 
var frontend$components$query$builder$clause_inner__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45968 = cljs.core.first(args__31746__auto__);
var G__45969 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45968,G__45969) : io.factorhouse.hsx.core.obj_get.call(null,G__45968,G__45969));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"clause-inner","clause-inner",-1588058946,null),args__31746__auto__),frontend$components$query$builder$clause_inner,args__31746__auto__,null);
}
};
var frontend$components$query$builder$clause_inner = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46056__i = 0, G__46056__a = new Array(arguments.length -  0);
while (G__46056__i < G__46056__a.length) {G__46056__a[G__46056__i] = arguments[G__46056__i + 0]; ++G__46056__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46056__a,0,null);
} 
return frontend$components$query$builder$clause_inner__delegate.call(this,args__31746__auto__);};
frontend$components$query$builder$clause_inner.cljs$lang$maxFixedArity = 0;
frontend$components$query$builder$clause_inner.cljs$lang$applyTo = (function (arglist__46057){
var args__31746__auto__ = cljs.core.seq(arglist__46057);
return frontend$components$query$builder$clause_inner__delegate(args__31746__auto__);
});
frontend$components$query$builder$clause_inner.cljs$core$IFn$_invoke$arity$variadic = frontend$components$query$builder$clause_inner__delegate;
return frontend$components$query$builder$clause_inner;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45970 = comp__31745__auto__;
var G__45971 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45970,G__45971) : io.factorhouse.hsx.core.react_memo.call(null,G__45970,G__45971));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"clause-inner");

return comp__31745__auto__;
})();
frontend.components.query.builder.clause = (function (){var render_fn__31744__auto__ = (function frontend$components$query$builder$clause(_STAR_tree,_STAR_find,loc,clauses){
if(cljs.core.seq(clauses)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.query-builder-clause","div.query-builder-clause",647226227),(function (){var operator = cljs.core.first(clauses);
var kind = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(operator);
if(cljs.core.truth_((frontend.handler.query.builder.operators_set.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.query.builder.operators_set.cljs$core$IFn$_invoke$arity$1(kind) : frontend.handler.query.builder.operators_set.call(null,kind)))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.operator-clause.flex.flex-row.items-center","div.operator-clause.flex.flex-row.items-center",-1542341153),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-level","data-level",1364295892),cljs.core.count(loc)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clause-bracket","div.clause-bracket",-988173709),"("], null),(function (){var G__45972 = _STAR_tree;
var G__45973 = _STAR_find;
var G__45974 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loc,(0));
var G__45975 = kind;
var G__45976 = cljs.core.rest(clauses);
return (frontend.components.query.builder.clauses_group.cljs$core$IFn$_invoke$arity$5 ? frontend.components.query.builder.clauses_group.cljs$core$IFn$_invoke$arity$5(G__45972,G__45973,G__45974,G__45975,G__45976) : frontend.components.query.builder.clauses_group.call(null,G__45972,G__45973,G__45974,G__45975,G__45976));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clause-bracket","div.clause-bracket",-988173709),")"], null)], null);
} else {
return frontend.components.query.builder.clause_inner(_STAR_tree,loc,clauses);
}
})()], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$query$builder$clause__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45977 = cljs.core.first(args__31746__auto__);
var G__45978 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45977,G__45978) : io.factorhouse.hsx.core.obj_get.call(null,G__45977,G__45978));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"clause","clause",-1174767709,null),args__31746__auto__),frontend$components$query$builder$clause,args__31746__auto__,null);
}
};
var frontend$components$query$builder$clause = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46058__i = 0, G__46058__a = new Array(arguments.length -  0);
while (G__46058__i < G__46058__a.length) {G__46058__a[G__46058__i] = arguments[G__46058__i + 0]; ++G__46058__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46058__a,0,null);
} 
return frontend$components$query$builder$clause__delegate.call(this,args__31746__auto__);};
frontend$components$query$builder$clause.cljs$lang$maxFixedArity = 0;
frontend$components$query$builder$clause.cljs$lang$applyTo = (function (arglist__46059){
var args__31746__auto__ = cljs.core.seq(arglist__46059);
return frontend$components$query$builder$clause__delegate(args__31746__auto__);
});
frontend$components$query$builder$clause.cljs$core$IFn$_invoke$arity$variadic = frontend$components$query$builder$clause__delegate;
return frontend$components$query$builder$clause;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45979 = comp__31745__auto__;
var G__45980 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45979,G__45980) : io.factorhouse.hsx.core.react_memo.call(null,G__45979,G__45980));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"clause");

return comp__31745__auto__;
})();
frontend.components.query.builder.clauses_group = (function (){var render_fn__31744__auto__ = (function frontend$components$query$builder$clauses_group(_STAR_tree,_STAR_find,loc,kind,clauses){
var parens_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(loc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null))) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"and","and",-971899817))) || ((cljs.core.count(clauses) > (1))))));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clauses-group","div.clauses-group",684121480),((parens_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clause-bracket","div.clause-bracket",-988173709),"("], null):null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(loc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"and","and",-971899817))) && ((cljs.core.count(clauses) <= (1)))))))?null:frontend.components.query.builder.clause_inner(_STAR_tree,loc,clojure.string.upper_case(cljs.core.name(kind)),new cljs.core.Keyword(null,"operator?","operator?",68029935),true)),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,item){
return frontend.components.query.builder.clause(_STAR_tree,_STAR_find,cljs.core.update.cljs$core$IFn$_invoke$arity$3(loc,(cljs.core.count(loc) - (1)),(function (p1__45981_SHARP_){
return ((p1__45981_SHARP_ + i) + (1));
})),item);
}),clauses),((parens_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clause-bracket","div.clause-bracket",-988173709),")"], null):null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(loc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)))?frontend.components.query.builder.add_filter(_STAR_tree,loc,cljs.core.PersistentVector.EMPTY):null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$query$builder$clauses_group__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45982 = cljs.core.first(args__31746__auto__);
var G__45983 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45982,G__45983) : io.factorhouse.hsx.core.obj_get.call(null,G__45982,G__45983));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"clauses-group","clauses-group",1863098122,null),args__31746__auto__),frontend$components$query$builder$clauses_group,args__31746__auto__,null);
}
};
var frontend$components$query$builder$clauses_group = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46069__i = 0, G__46069__a = new Array(arguments.length -  0);
while (G__46069__i < G__46069__a.length) {G__46069__a[G__46069__i] = arguments[G__46069__i + 0]; ++G__46069__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46069__a,0,null);
} 
return frontend$components$query$builder$clauses_group__delegate.call(this,args__31746__auto__);};
frontend$components$query$builder$clauses_group.cljs$lang$maxFixedArity = 0;
frontend$components$query$builder$clauses_group.cljs$lang$applyTo = (function (arglist__46070){
var args__31746__auto__ = cljs.core.seq(arglist__46070);
return frontend$components$query$builder$clauses_group__delegate(args__31746__auto__);
});
frontend$components$query$builder$clauses_group.cljs$core$IFn$_invoke$arity$variadic = frontend$components$query$builder$clauses_group__delegate;
return frontend$components$query$builder$clauses_group;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45984 = comp__31745__auto__;
var G__45985 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45984,G__45985) : io.factorhouse.hsx.core.react_memo.call(null,G__45984,G__45985));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"clauses-group");

return comp__31745__auto__;
})();
frontend.components.query.builder.clause_tree = (function (){var render_fn__31744__auto__ = (function frontend$components$query$builder$clause_tree(_STAR_tree,_STAR_find){
var vec__45986 = logseq.shui.hooks.use_atom(_STAR_tree);
var tree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45986,(0),null);
var kind = (function (){var G__45993 = cljs.core.first(tree);
var fexpr__45992 = cljs.core.set(frontend.handler.query.builder.operators);
return (fexpr__45992.cljs$core$IFn$_invoke$arity$1 ? fexpr__45992.cljs$core$IFn$_invoke$arity$1(G__45993) : fexpr__45992.call(null,G__45993));
})();
var vec__45989 = (cljs.core.truth_(kind)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind,cljs.core.rest(tree)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(tree)], null)], null));
var kind_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45989,(0),null);
var clauses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45989,(1),null);
return frontend.components.query.builder.clauses_group(_STAR_tree,_STAR_find,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),kind_SINGLEQUOTE_,clauses);
});
var comp__31745__auto__ = (function() { 
var frontend$components$query$builder$clause_tree__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45994 = cljs.core.first(args__31746__auto__);
var G__45995 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45994,G__45995) : io.factorhouse.hsx.core.obj_get.call(null,G__45994,G__45995));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"clause-tree","clause-tree",-1220352107,null),args__31746__auto__),frontend$components$query$builder$clause_tree,args__31746__auto__,null);
}
};
var frontend$components$query$builder$clause_tree = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46074__i = 0, G__46074__a = new Array(arguments.length -  0);
while (G__46074__i < G__46074__a.length) {G__46074__a[G__46074__i] = arguments[G__46074__i + 0]; ++G__46074__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46074__a,0,null);
} 
return frontend$components$query$builder$clause_tree__delegate.call(this,args__31746__auto__);};
frontend$components$query$builder$clause_tree.cljs$lang$maxFixedArity = 0;
frontend$components$query$builder$clause_tree.cljs$lang$applyTo = (function (arglist__46075){
var args__31746__auto__ = cljs.core.seq(arglist__46075);
return frontend$components$query$builder$clause_tree__delegate(args__31746__auto__);
});
frontend$components$query$builder$clause_tree.cljs$core$IFn$_invoke$arity$variadic = frontend$components$query$builder$clause_tree__delegate;
return frontend$components$query$builder$clause_tree;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45996 = comp__31745__auto__;
var G__45997 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45996,G__45997) : io.factorhouse.hsx.core.react_memo.call(null,G__45996,G__45997));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"clause-tree");

return comp__31745__auto__;
})();
frontend.components.query.builder.sanitize_q = (function frontend$components$query$builder$sanitize_q(q_str){
if(clojure.string.blank_QMARK_(q_str)){
return "";
} else {
if(((logseq.common.util.wrapped_by_parens_QMARK_(q_str)) || (((logseq.common.util.wrapped_by_quotes_QMARK_(q_str)) || (((logseq.common.util.page_ref.page_ref_QMARK_(q_str)) || (clojure.string.starts_with_QMARK_(q_str,"[?")))))))){
return q_str;
} else {
return (""+"\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(q_str)+"\"");
}
}
});
frontend.components.query.builder.get_q = (function frontend$components$query$builder$get_q(block){
return frontend.components.query.builder.sanitize_q((function (){var or__5142__auto__ = new cljs.core.Keyword("file-version","query-macro-title","file-version/query-macro-title",1175466731).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return "";
}
}
})());
});
frontend.components.query.builder.builder = (function (){var render_fn__31744__auto__ = (function frontend$components$query$builder$builder(_block,_option){
var _STAR_find = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}),cljs.core.PersistentVector.EMPTY);
var _STAR_tree = logseq.shui.hooks.use_memo((function (){
var q_str = frontend.components.query.builder.get_q(_block);
var query = logseq.common.util.safe_read_string.cljs$core$IFn$_invoke$arity$2(frontend.db.query_dsl.custom_readers,frontend.db.query_dsl.pre_transform_query(q_str));
var query_SINGLEQUOTE_ = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"and","and",668631710,null),null,new cljs.core.Symbol(null,"not","not",1044554643,null),null,new cljs.core.Symbol(null,"or","or",1876275696,null),null], null), null),cljs.core.first(query)))?query:(cljs.core.truth_(query)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),query], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817)], null)
));
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(frontend.handler.query.builder.from_dsl(query_SINGLEQUOTE_));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_block], null));
var vec__45998 = logseq.shui.hooks.use_atom(_STAR_tree);
var tree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45998,(0),null);
logseq.shui.hooks.use_effect_BANG_((function (){
var q_str_46079 = frontend.components.query.builder.get_q(_block);
var blocks_query_QMARK__46080 = (!((cljs.core.re_find(/(between|property|private-property|todo|task|priority|page|\"[^\"]+\")/,q_str_46079) == null)));
var find_mode_46081 = ((blocks_query_QMARK__46080)?new cljs.core.Keyword(null,"block","block",664686210):((blocks_query_QMARK__46080 === false)?new cljs.core.Keyword(null,"page","page",849072397):null
));
if(cljs.core.truth_(find_mode_46081)){
cljs.core.reset_BANG_(_STAR_find,find_mode_46081);
} else {
}

cljs.core.add_watch(_STAR_tree,new cljs.core.Keyword(null,"updated","updated",-1627192056),(function (_,___$1,_old,_new){
if(cljs.core.truth_(_block)){
var q = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817)], null),cljs.core.deref(_STAR_tree)))?"":(function (){var result = frontend.handler.query.builder.__GT_dsl(cljs.core.deref(_STAR_tree));
if(typeof result === 'string'){
return (frontend.util.format.cljs$core$IFn$_invoke$arity$2 ? frontend.util.format.cljs$core$IFn$_invoke$arity$2("\"%s\"",result) : frontend.util.format.call(null,"\"%s\"",result));
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(result));
}
})());
var repo = frontend.state.get_current_repo();
return frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(_block),q);
} else {
return null;
}
}));

return (function (){
return cljs.core.remove_watch(_STAR_tree,new cljs.core.Keyword(null,"updated","updated",-1627192056));
});
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_block,_STAR_tree], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__query-builder","div.cp__query-builder",1509103784),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__query-builder-filter","div.cp__query-builder-filter",1252320030),((((cljs.core.seq(tree)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tree,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817)], null)))))?frontend.components.query.builder.clause_tree(_STAR_tree,_STAR_find):null),frontend.components.query.builder.add_filter(_STAR_tree,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),cljs.core.PersistentVector.EMPTY)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$query$builder$builder__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46001 = cljs.core.first(args__31746__auto__);
var G__46002 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46001,G__46002) : io.factorhouse.hsx.core.obj_get.call(null,G__46001,G__46002));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"builder","builder",-414730478,null),args__31746__auto__),frontend$components$query$builder$builder,args__31746__auto__,null);
}
};
var frontend$components$query$builder$builder = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__46087__i = 0, G__46087__a = new Array(arguments.length -  0);
while (G__46087__i < G__46087__a.length) {G__46087__a[G__46087__i] = arguments[G__46087__i + 0]; ++G__46087__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__46087__a,0,null);
} 
return frontend$components$query$builder$builder__delegate.call(this,args__31746__auto__);};
frontend$components$query$builder$builder.cljs$lang$maxFixedArity = 0;
frontend$components$query$builder$builder.cljs$lang$applyTo = (function (arglist__46088){
var args__31746__auto__ = cljs.core.seq(arglist__46088);
return frontend$components$query$builder$builder__delegate(args__31746__auto__);
});
frontend$components$query$builder$builder.cljs$core$IFn$_invoke$arity$variadic = frontend$components$query$builder$builder__delegate;
return frontend$components$query$builder$builder;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46003 = comp__31745__auto__;
var G__46004 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46003,G__46004) : io.factorhouse.hsx.core.react_memo.call(null,G__46003,G__46004));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"builder");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.query.builder.js.map
