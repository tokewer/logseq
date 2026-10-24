goog.provide('devtools.formatters.budgeting');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__22862__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__22862__auto__["add"]).call(o__22862__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__22862__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__22862__auto__["delete"]).call(o__22862__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__22862__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__22862__auto__["has"]).call(o__22862__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.truth_(cljs.core.array_QMARK_(json_ml))){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.truth_(cljs.core.array_QMARK_(json_ml))){
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
return true;
} else {
return cljs.core.some(devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second(object_reference);
var _ = ((cljs.core.object_QMARK_(data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__25598 = data;
var target__22962__auto__ = G__25598;
if(cljs.core.truth_(target__22962__auto__)){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"unable to locate object path "+" in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25598)))+"\n"+"target__22962__auto__")));
}

(target__22962__auto__["config"] = devtools.formatters.state.set_depth_budget(config,depth_budget));

return G__25598;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.truth_(cljs.core.array_QMARK_(json_ml))){
var new_depth_budget_25743 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_(json_ml,new_depth_budget_25743);
} else {
var seq__25622_25746 = cljs.core.seq(json_ml);
var chunk__25623_25747 = null;
var count__25624_25748 = (0);
var i__25625_25749 = (0);
while(true){
if((i__25625_25749 < count__25624_25748)){
var item_25754 = chunk__25623_25747.cljs$core$IIndexed$_nth$arity$2(null,i__25625_25749);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_25754,new_depth_budget_25743) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_25754,new_depth_budget_25743));


var G__25755 = seq__25622_25746;
var G__25756 = chunk__25623_25747;
var G__25757 = count__25624_25748;
var G__25758 = (i__25625_25749 + (1));
seq__25622_25746 = G__25755;
chunk__25623_25747 = G__25756;
count__25624_25748 = G__25757;
i__25625_25749 = G__25758;
continue;
} else {
var temp__5825__auto___25767 = cljs.core.seq(seq__25622_25746);
if(temp__5825__auto___25767){
var seq__25622_25768__$1 = temp__5825__auto___25767;
if(cljs.core.chunked_seq_QMARK_(seq__25622_25768__$1)){
var c__5673__auto___25769 = cljs.core.chunk_first(seq__25622_25768__$1);
var G__25770 = cljs.core.chunk_rest(seq__25622_25768__$1);
var G__25771 = c__5673__auto___25769;
var G__25772 = cljs.core.count(c__5673__auto___25769);
var G__25773 = (0);
seq__25622_25746 = G__25770;
chunk__25623_25747 = G__25771;
count__25624_25748 = G__25772;
i__25625_25749 = G__25773;
continue;
} else {
var item_25774 = cljs.core.first(seq__25622_25768__$1);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_25774,new_depth_budget_25743) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_25774,new_depth_budget_25743));


var G__25775 = cljs.core.next(seq__25622_25768__$1);
var G__25776 = null;
var G__25777 = (0);
var G__25778 = (0);
seq__25622_25746 = G__25775;
chunk__25623_25747 = G__25776;
count__25624_25748 = G__25777;
i__25625_25749 = G__25778;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_(value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_(value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5823__auto__ = devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5823__auto__)){
var initial_hierarchy_depth_budget = temp__5823__auto__;
var remaining_depth_budget = (function (){var or__5142__auto__ = devtools.formatters.state.get_depth_budget();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth(json_ml);
var final_QMARK_ = cljs.core.not(devtools.formatters.budgeting.has_any_object_reference_QMARK_(json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_(json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup(devtools.formatters.markup._LT_header_expander_GT_(value));
devtools.formatters.budgeting.add_over_budget_value_BANG_(value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=devtools.formatters.budgeting.js.map
