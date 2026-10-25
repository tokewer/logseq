goog.provide('logseq.shui.table.core');
goog.scope(function(){
  logseq.shui.table.core.goog$module$goog$object = goog.module.get('goog.object');
});
logseq.shui.table.core.get_head_container = (function logseq$shui$table$core$get_head_container(){
if(cljs.core.truth_((function (){var and__5140__auto__ = window;
if(cljs.core.truth_(and__5140__auto__)){
return logseq.shui.table.core.goog$module$goog$object.get(window,"isCapacitorNew");
} else {
return and__5140__auto__;
}
})())){
return (dommy.utils.__GT_Array(document.getElementsByTagName("ion-header"))[(0)]);
} else {
return document.getElementById("head");
}
});
logseq.shui.table.core.row_selected_QMARK_ = (function logseq$shui$table$core$row_selected_QMARK_(row,row_selection){
var id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(row);
var or__5142__auto__ = (function (){var and__5140__auto__ = new cljs.core.Keyword(null,"selected-all?","selected-all?",1723040507).cljs$core$IFn$_invoke$arity$1(row_selection);
if(cljs.core.truth_(and__5140__auto__)){
return (!(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"excluded-ids","excluded-ids",-523478844).cljs$core$IFn$_invoke$arity$1(row_selection),id)));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return ((cljs.core.not(new cljs.core.Keyword(null,"selected-all?","selected-all?",1723040507).cljs$core$IFn$_invoke$arity$1(row_selection))) && (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"selected-ids","selected-ids",-1154760141).cljs$core$IFn$_invoke$arity$1(row_selection),id)));
}
});
logseq.shui.table.core.select_some_QMARK_ = (function logseq$shui$table$core$select_some_QMARK_(row_selection,rows){
var or__5142__auto__ = (function (){var and__5140__auto__ = cljs.core.seq(new cljs.core.Keyword(null,"selected-ids","selected-ids",-1154760141).cljs$core$IFn$_invoke$arity$1(row_selection));
if(and__5140__auto__){
return cljs.core.some(new cljs.core.Keyword(null,"selected-ids","selected-ids",-1154760141).cljs$core$IFn$_invoke$arity$1(row_selection),rows);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return ((cljs.core.seq(new cljs.core.Keyword(null,"excluded-ids","excluded-ids",-523478844).cljs$core$IFn$_invoke$arity$1(row_selection))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(rows),cljs.core.count(new cljs.core.Keyword(null,"excluded-ids","excluded-ids",-523478844).cljs$core$IFn$_invoke$arity$1(row_selection)))));
}
});
logseq.shui.table.core.select_all_QMARK_ = (function logseq$shui$table$core$select_all_QMARK_(row_selection,rows){
return ((cljs.core.seq(new cljs.core.Keyword(null,"selected-ids","selected-ids",-1154760141).cljs$core$IFn$_invoke$arity$1(row_selection))) && (clojure.set.subset_QMARK_(cljs.core.set(rows),new cljs.core.Keyword(null,"selected-ids","selected-ids",-1154760141).cljs$core$IFn$_invoke$arity$1(row_selection))));
});
logseq.shui.table.core.toggle_selected_all_BANG_ = (function logseq$shui$table$core$toggle_selected_all_BANG_(table,value,set_row_selection_BANG_){
var group_by_property = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"group-by-property","group-by-property",1732754405)], null));
var row_selection = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"row-selection","row-selection",1964656498)], null));
if(cljs.core.truth_((function (){var and__5140__auto__ = group_by_property;
if(cljs.core.truth_(and__5140__auto__)){
return value;
} else {
return and__5140__auto__;
}
})())){
var new_selection = cljs.core.update.cljs$core$IFn$_invoke$arity$3(row_selection,new cljs.core.Keyword(null,"selected-ids","selected-ids",-1154760141),(function (ids){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(ids),cljs.core.set(new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(table)));
}));
return (set_row_selection_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_row_selection_BANG_.cljs$core$IFn$_invoke$arity$1(new_selection) : set_row_selection_BANG_.call(null,new_selection));
} else {
if(cljs.core.truth_(value)){
var G__50576 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected-all?","selected-all?",1723040507),value], null);
return (set_row_selection_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_row_selection_BANG_.cljs$core$IFn$_invoke$arity$1(G__50576) : set_row_selection_BANG_.call(null,G__50576));
} else {
if(cljs.core.truth_(group_by_property)){
var new_selection = cljs.core.update.cljs$core$IFn$_invoke$arity$3(row_selection,new cljs.core.Keyword(null,"selected-ids","selected-ids",-1154760141),(function (ids){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(ids),cljs.core.set(new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(table)));
}));
return (set_row_selection_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_row_selection_BANG_.cljs$core$IFn$_invoke$arity$1(new_selection) : set_row_selection_BANG_.call(null,new_selection));
} else {
var G__50577 = cljs.core.PersistentArrayMap.EMPTY;
return (set_row_selection_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_row_selection_BANG_.cljs$core$IFn$_invoke$arity$1(G__50577) : set_row_selection_BANG_.call(null,G__50577));

}
}
}
});
logseq.shui.table.core.set_conj = (function logseq$shui$table$core$set_conj(col,item){
if(cljs.core.seq(col)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((cljs.core.set_QMARK_(col))?col:cljs.core.set(col)),item);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,item);
}
});
logseq.shui.table.core.row_toggle_selected_BANG_ = (function logseq$shui$table$core$row_toggle_selected_BANG_(row,value,set_row_selection_BANG_,row_selection){
var id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(row);
var new_selection = (cljs.core.truth_(new cljs.core.Keyword(null,"selected-all?","selected-all?",1723040507).cljs$core$IFn$_invoke$arity$1(row_selection))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(row_selection,new cljs.core.Keyword(null,"excluded-ids","excluded-ids",-523478844),(cljs.core.truth_(value)?cljs.core.disj:logseq.shui.table.core.set_conj),id):cljs.core.update.cljs$core$IFn$_invoke$arity$4(row_selection,new cljs.core.Keyword(null,"selected-ids","selected-ids",-1154760141),(cljs.core.truth_(value)?logseq.shui.table.core.set_conj:cljs.core.disj),id));
return (set_row_selection_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_row_selection_BANG_.cljs$core$IFn$_invoke$arity$1(new_selection) : set_row_selection_BANG_.call(null,new_selection));
});
logseq.shui.table.core.column_set_sorting_BANG_ = (function logseq$shui$table$core$column_set_sorting_BANG_(column,set_sorting_BANG_,sorting,asc_QMARK_){
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column);
var existing_column = cljs.core.some((function (item){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),id)){
return item;
} else {
return null;
}
}),sorting);
var value = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(cljs.core.truth_(existing_column)?(((asc_QMARK_ == null))?cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (item){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),id);
}),sorting):cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,new cljs.core.Keyword(null,"asc?","asc?",891093427),asc_QMARK_);
} else {
return item;
}
}),sorting)):(((asc_QMARK_ == null))?null:cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"asc?","asc?",891093427),asc_QMARK_], null)], null),sorting)))));
(set_sorting_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_sorting_BANG_.cljs$core$IFn$_invoke$arity$1(value) : set_sorting_BANG_.call(null,value));

return value;
});
logseq.shui.table.core.get_selection_rows = (function logseq$shui$table$core$get_selection_rows(row_selection,rows){
if(cljs.core.truth_(new cljs.core.Keyword(null,"selected-all?","selected-all?",1723040507).cljs$core$IFn$_invoke$arity$1(row_selection))){
var excluded_ids = new cljs.core.Keyword(null,"excluded-ids","excluded-ids",-523478844).cljs$core$IFn$_invoke$arity$1(row_selection);
if(cljs.core.seq(excluded_ids)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50586_SHARP_){
return (excluded_ids.cljs$core$IFn$_invoke$arity$1 ? excluded_ids.cljs$core$IFn$_invoke$arity$1(p1__50586_SHARP_) : excluded_ids.call(null,p1__50586_SHARP_));
}),rows);
} else {
return rows;
}
} else {
var selected_ids = new cljs.core.Keyword(null,"selected-ids","selected-ids",-1154760141).cljs$core$IFn$_invoke$arity$1(row_selection);
if(cljs.core.seq(selected_ids)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50587_SHARP_){
return (selected_ids.cljs$core$IFn$_invoke$arity$1 ? selected_ids.cljs$core$IFn$_invoke$arity$1(p1__50587_SHARP_) : selected_ids.call(null,p1__50587_SHARP_));
}),rows);
} else {
return null;
}
}
});
logseq.shui.table.core.table_option = (function logseq$shui$table$core$table_option(p__50588){
var map__50589 = p__50588;
var map__50589__$1 = cljs.core.__destructure_map(map__50589);
var option = map__50589__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50589__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50589__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50589__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var data_fns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50589__$1,new cljs.core.Keyword(null,"data-fns","data-fns",-1065218324));
var map__50591 = state;
var map__50591__$1 = cljs.core.__destructure_map(map__50591);
var sorting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50591__$1,new cljs.core.Keyword(null,"sorting","sorting",622249690));
var row_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50591__$1,new cljs.core.Keyword(null,"row-filter","row-filter",-2109922673));
var row_selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50591__$1,new cljs.core.Keyword(null,"row-selection","row-selection",1964656498));
var visible_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50591__$1,new cljs.core.Keyword(null,"visible-columns","visible-columns",1134718660));
var map__50593 = data_fns;
var map__50593__$1 = cljs.core.__destructure_map(map__50593);
var set_sorting_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50593__$1,new cljs.core.Keyword(null,"set-sorting!","set-sorting!",543042376));
var set_visible_columns_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50593__$1,new cljs.core.Keyword(null,"set-visible-columns!","set-visible-columns!",729806223));
var set_row_selection_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50593__$1,new cljs.core.Keyword(null,"set-row-selection!","set-row-selection!",1872995139));
var columns_SINGLEQUOTE_ = logseq.shui.table.impl.visible_columns(columns,visible_columns);
var filtered_rows = logseq.shui.table.impl.rows(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rows","rows",850049680),data,new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"sorting","sorting",622249690),sorting,new cljs.core.Keyword(null,"row-filter","row-filter",-2109922673),row_filter], null));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(option,new cljs.core.Keyword(null,"columns","columns",1998437288),columns_SINGLEQUOTE_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rows","rows",850049680),filtered_rows,new cljs.core.Keyword(null,"column-visible?","column-visible?",-864117722),(function (column){
return logseq.shui.table.impl.column_visible_QMARK_(column,visible_columns);
}),new cljs.core.Keyword(null,"column-toggle-visibility","column-toggle-visibility",481480390),(function (column,v){
var G__50595 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(visible_columns,logseq.shui.table.impl.column_id(column),v);
return (set_visible_columns_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_visible_columns_BANG_.cljs$core$IFn$_invoke$arity$1(G__50595) : set_visible_columns_BANG_.call(null,G__50595));
}),new cljs.core.Keyword(null,"selected-all?","selected-all?",1723040507),(function (){var or__5142__auto__ = (function (){var and__5140__auto__ = new cljs.core.Keyword(null,"selected-all?","selected-all?",1723040507).cljs$core$IFn$_invoke$arity$1(row_selection);
if(cljs.core.truth_(and__5140__auto__)){
return (cljs.core.seq(new cljs.core.Keyword(null,"excluded-ids","excluded-ids",-523478844).cljs$core$IFn$_invoke$arity$1(row_selection)) == null);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.shui.table.core.select_all_QMARK_(row_selection,filtered_rows);
}
})(),new cljs.core.Keyword(null,"selected-some?","selected-some?",-1877870503),logseq.shui.table.core.select_some_QMARK_(row_selection,filtered_rows),new cljs.core.Keyword(null,"row-selected?","row-selected?",165215850),(function (row){
return logseq.shui.table.core.row_selected_QMARK_(row,row_selection);
}),new cljs.core.Keyword(null,"row-toggle-selected!","row-toggle-selected!",1549823697),(function (row_selection__$1,row,value){
return logseq.shui.table.core.row_toggle_selected_BANG_(row,value,set_row_selection_BANG_,row_selection__$1);
}),new cljs.core.Keyword(null,"toggle-selected-all!","toggle-selected-all!",-649409852),(function (table,value){
return logseq.shui.table.core.toggle_selected_all_BANG_(table,value,set_row_selection_BANG_);
}),new cljs.core.Keyword(null,"column-set-sorting!","column-set-sorting!",892954674),(function (sorting__$1,column,asc_QMARK_){
return logseq.shui.table.core.column_set_sorting_BANG_(column,set_sorting_BANG_,sorting__$1,asc_QMARK_);
})], 0));
});
logseq.shui.table.core.get_prop_and_children = (function logseq$shui$table$core$get_prop_and_children(prop_and_children){
var prop = ((cljs.core.map_QMARK_(cljs.core.first(prop_and_children)))?cljs.core.first(prop_and_children):null);
if(cljs.core.truth_(prop)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,cljs.core.rest(prop_and_children)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,prop_and_children], null);
}
});
logseq.shui.table.core.table = (function (){var render_fn__47251__auto__ = (function() { 
var logseq$shui$table$core$table__delegate = function (prop_and_children){
var vec__50614 = logseq.shui.table.core.get_prop_and_children(prop_and_children);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50614,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50614,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ls-table w-full caption-bottom text-sm table-fixed"], null),prop], 0))], null),children);
};
var logseq$shui$table$core$table = function (var_args){
var prop_and_children = null;
if (arguments.length > 0) {
var G__50812__i = 0, G__50812__a = new Array(arguments.length -  0);
while (G__50812__i < G__50812__a.length) {G__50812__a[G__50812__i] = arguments[G__50812__i + 0]; ++G__50812__i;}
  prop_and_children = new cljs.core.IndexedSeq(G__50812__a,0,null);
} 
return logseq$shui$table$core$table__delegate.call(this,prop_and_children);};
logseq$shui$table$core$table.cljs$lang$maxFixedArity = 0;
logseq$shui$table$core$table.cljs$lang$applyTo = (function (arglist__50813){
var prop_and_children = cljs.core.seq(arglist__50813);
return logseq$shui$table$core$table__delegate(prop_and_children);
});
logseq$shui$table$core$table.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$table$core$table__delegate;
return logseq$shui$table$core$table;
})()
;
var comp__47252__auto__ = (function() { 
var logseq$shui$table$core$table__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__50620 = cljs.core.first(args__47253__auto__);
var G__50621 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50620,G__50621) : io.factorhouse.hsx.core.obj_get.call(null,G__50620,G__50621));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"table","table",1075588491,null),args__47253__auto__),logseq$shui$table$core$table,args__47253__auto__,null);
}
};
var logseq$shui$table$core$table = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__50814__i = 0, G__50814__a = new Array(arguments.length -  0);
while (G__50814__i < G__50814__a.length) {G__50814__a[G__50814__i] = arguments[G__50814__i + 0]; ++G__50814__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__50814__a,0,null);
} 
return logseq$shui$table$core$table__delegate.call(this,args__47253__auto__);};
logseq$shui$table$core$table.cljs$lang$maxFixedArity = 0;
logseq$shui$table$core$table.cljs$lang$applyTo = (function (arglist__50815){
var args__47253__auto__ = cljs.core.seq(arglist__50815);
return logseq$shui$table$core$table__delegate(args__47253__auto__);
});
logseq$shui$table$core$table.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$table$core$table__delegate;
return logseq$shui$table$core$table;
})()
;
var memo_comp__47254__auto__ = (function (){var G__50622 = comp__47252__auto__;
var G__50623 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50622,G__50623) : io.factorhouse.hsx.core.react_memo.call(null,G__50622,G__50623));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"table");

return comp__47252__auto__;
})();
logseq.shui.table.core.remove_sticky_header = (function logseq$shui$table$core$remove_sticky_header(){
var existing_headings = dommy.utils.__GT_Array(document.getElementsByClassName("ls-fixed"));
var seq__50628 = cljs.core.seq(existing_headings);
var chunk__50629 = null;
var count__50630 = (0);
var i__50631 = (0);
while(true){
if((i__50631 < count__50630)){
var node = chunk__50629.cljs$core$IIndexed$_nth$arity$2(null,i__50631);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(node,"ls-fixed");


var G__50817 = seq__50628;
var G__50818 = chunk__50629;
var G__50819 = count__50630;
var G__50820 = (i__50631 + (1));
seq__50628 = G__50817;
chunk__50629 = G__50818;
count__50630 = G__50819;
i__50631 = G__50820;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__50628);
if(temp__5825__auto__){
var seq__50628__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50628__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__50628__$1);
var G__50821 = cljs.core.chunk_rest(seq__50628__$1);
var G__50822 = c__5673__auto__;
var G__50823 = cljs.core.count(c__5673__auto__);
var G__50824 = (0);
seq__50628 = G__50821;
chunk__50629 = G__50822;
count__50630 = G__50823;
i__50631 = G__50824;
continue;
} else {
var node = cljs.core.first(seq__50628__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(node,"ls-fixed");


var G__50825 = cljs.core.next(seq__50628__$1);
var G__50826 = null;
var G__50827 = (0);
var G__50828 = (0);
seq__50628 = G__50825;
chunk__50629 = G__50826;
count__50630 = G__50827;
i__50631 = G__50828;
continue;
}
} else {
return null;
}
}
break;
}
});
logseq.shui.table.core.use_sticky_element_BANG_ = (function logseq$shui$table$core$use_sticky_element_BANG_(target_ref,container,enabled_QMARK_){
return logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(enabled_QMARK_)){
var target = logseq.shui.hooks.deref(target_ref);
var container__$1 = (function (){var or__5142__auto__ = target.closest(".sidebar-item-list");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return container;
}
})();
var table_el = target.closest(".ls-table-rows");
if(cljs.core.truth_((function (){var and__5140__auto__ = container__$1;
if(cljs.core.truth_(and__5140__auto__)){
return table_el;
} else {
return and__5140__auto__;
}
})())){
var target_cls = target.classList;
var table_footer = (function (){var G__50677 = table_el;
if((G__50677 == null)){
return null;
} else {
return G__50677.querySelector(".ls-table-footer");
}
})();
var page_el = target.closest(".page-inner");
var _STAR_el_top = cljs.core.volatile_BANG_(target.getBoundingClientRect().top);
var head_height = logseq.shui.table.core.get_head_container().offsetHeight;
var update_target_top_BANG_ = (function (){
if(cljs.core.not(target_cls.contains("ls-fixed"))){
return cljs.core.vreset_BANG_(_STAR_el_top,(target.getBoundingClientRect().top + container__$1.scrollTop));
} else {
return null;
}
});
var update_footer_BANG_ = (function (){
var tw = table_el.scrollWidth;
if(cljs.core.truth_((function (){var and__5140__auto__ = table_footer;
if(cljs.core.truth_(and__5140__auto__)){
return ((typeof tw === 'number') && ((tw > (0))));
} else {
return and__5140__auto__;
}
})())){
return (table_footer.style.width = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tw)+"px"));
} else {
return null;
}
});
var update_target_BANG_ = (function (){
if(cljs.core.truth_(target_cls.contains("ls-fixed"))){
var rect_50832 = table_el.getBoundingClientRect();
var width_50833 = table_el.clientWidth;
var left_50834 = rect_50832.left;
(target.style.width = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(width_50833)+"px"));

(target.style.left = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(left_50834)+"px"));
} else {
(target.style.width = "auto");

(target.style.left = "0px");
}

return (target.scrollLeft = table_el.scrollLeft);
});
var target_observe_BANG_ = (function (_e){
var first_visible_table = cljs.core.some((function (p1__50661_SHARP_){
if(cljs.core.truth_((frontend.util.el_visible_in_viewport_QMARK_.cljs$core$IFn$_invoke$arity$2 ? frontend.util.el_visible_in_viewport_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__50661_SHARP_,true) : frontend.util.el_visible_in_viewport_QMARK_.call(null,p1__50661_SHARP_,true)))){
return p1__50661_SHARP_;
} else {
return null;
}
}),dommy.utils.__GT_Array(container__$1.getElementsByClassName("ls-table-rows")));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(table_el,first_visible_table)){
var table_bottom = table_el.getBoundingClientRect().bottom;
var table_top = table_el.getBoundingClientRect().top;
if((((table_top < head_height)) && ((table_bottom > (100))))){
logseq.shui.table.core.remove_sticky_header();

target_cls.add("ls-fixed");
} else {
target_cls.remove("ls-fixed");
}

return update_target_BANG_();
} else {
return null;
}
});
var resize_observer = (new ResizeObserver(update_target_BANG_));
var page_resize_observer = (new ResizeObserver((function (){
return update_target_top_BANG_();
})));
resize_observer.observe(container__$1);

resize_observer.observe(table_el);

var G__50720_50835 = page_el;
if((G__50720_50835 == null)){
} else {
page_resize_observer.observe(G__50720_50835);
}

container__$1.addEventListener("scroll",target_observe_BANG_);

table_el.addEventListener("scroll",update_target_BANG_);

table_el.addEventListener("resize",update_target_BANG_);

update_footer_BANG_();

return (function (){
container__$1.removeEventListener("scroll",target_observe_BANG_);

resize_observer.disconnect();

return page_resize_observer.disconnect();
});
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enabled_QMARK_,container], null));
});
logseq.shui.table.core.mobile_QMARK_ = (function logseq$shui$table$core$mobile_QMARK_(){
var temp__5825__auto__ = navigator.userAgent;
if(cljs.core.truth_(temp__5825__auto__)){
var user_agent = temp__5825__auto__;
return cljs.core.re_find(/Mobi/,user_agent);
} else {
return null;
}
});
logseq.shui.table.core.table_header = (function (){var render_fn__47251__auto__ = (function() { 
var logseq$shui$table$core$table_header__delegate = function (prop_and_children){
var vec__50731 = logseq.shui.table.core.get_prop_and_children(prop_and_children);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50731,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50731,(1),null);
var el_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var _ = logseq.shui.table.core.use_sticky_element_BANG_(el_ref,new cljs.core.Keyword(null,"main-container","main-container",-1260526439).cljs$core$IFn$_invoke$arity$1(prop),cljs.core.not(logseq.shui.table.core.mobile_QMARK_()));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-table-header","div.ls-table-header",2040624123),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-y transition-colors bg-gray-01",new cljs.core.Keyword(null,"ref","ref",1289896967),el_ref,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(9)], null)], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(prop,new cljs.core.Keyword(null,"main-container","main-container",-1260526439))], 0))], null),children);
};
var logseq$shui$table$core$table_header = function (var_args){
var prop_and_children = null;
if (arguments.length > 0) {
var G__50836__i = 0, G__50836__a = new Array(arguments.length -  0);
while (G__50836__i < G__50836__a.length) {G__50836__a[G__50836__i] = arguments[G__50836__i + 0]; ++G__50836__i;}
  prop_and_children = new cljs.core.IndexedSeq(G__50836__a,0,null);
} 
return logseq$shui$table$core$table_header__delegate.call(this,prop_and_children);};
logseq$shui$table$core$table_header.cljs$lang$maxFixedArity = 0;
logseq$shui$table$core$table_header.cljs$lang$applyTo = (function (arglist__50837){
var prop_and_children = cljs.core.seq(arglist__50837);
return logseq$shui$table$core$table_header__delegate(prop_and_children);
});
logseq$shui$table$core$table_header.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$table$core$table_header__delegate;
return logseq$shui$table$core$table_header;
})()
;
var comp__47252__auto__ = (function() { 
var logseq$shui$table$core$table_header__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__50736 = cljs.core.first(args__47253__auto__);
var G__50737 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50736,G__50737) : io.factorhouse.hsx.core.obj_get.call(null,G__50736,G__50737));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"table-header","table-header",-2089632761,null),args__47253__auto__),logseq$shui$table$core$table_header,args__47253__auto__,null);
}
};
var logseq$shui$table$core$table_header = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__50838__i = 0, G__50838__a = new Array(arguments.length -  0);
while (G__50838__i < G__50838__a.length) {G__50838__a[G__50838__i] = arguments[G__50838__i + 0]; ++G__50838__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__50838__a,0,null);
} 
return logseq$shui$table$core$table_header__delegate.call(this,args__47253__auto__);};
logseq$shui$table$core$table_header.cljs$lang$maxFixedArity = 0;
logseq$shui$table$core$table_header.cljs$lang$applyTo = (function (arglist__50839){
var args__47253__auto__ = cljs.core.seq(arglist__50839);
return logseq$shui$table$core$table_header__delegate(args__47253__auto__);
});
logseq$shui$table$core$table_header.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$table$core$table_header__delegate;
return logseq$shui$table$core$table_header;
})()
;
var memo_comp__47254__auto__ = (function (){var G__50741 = comp__47252__auto__;
var G__50742 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50741,G__50742) : io.factorhouse.hsx.core.react_memo.call(null,G__50741,G__50742));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"table-header");

return comp__47252__auto__;
})();
logseq.shui.table.core.table_footer = (function (){var render_fn__47251__auto__ = (function() { 
var logseq$shui$table$core$table_footer__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-table-footer.fade-in.faster","div.ls-table-footer.fade-in.faster",1528948234)], null),children);
};
var logseq$shui$table$core$table_footer = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__50841__i = 0, G__50841__a = new Array(arguments.length -  0);
while (G__50841__i < G__50841__a.length) {G__50841__a[G__50841__i] = arguments[G__50841__i + 0]; ++G__50841__i;}
  children = new cljs.core.IndexedSeq(G__50841__a,0,null);
} 
return logseq$shui$table$core$table_footer__delegate.call(this,children);};
logseq$shui$table$core$table_footer.cljs$lang$maxFixedArity = 0;
logseq$shui$table$core$table_footer.cljs$lang$applyTo = (function (arglist__50842){
var children = cljs.core.seq(arglist__50842);
return logseq$shui$table$core$table_footer__delegate(children);
});
logseq$shui$table$core$table_footer.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$table$core$table_footer__delegate;
return logseq$shui$table$core$table_footer;
})()
;
var comp__47252__auto__ = (function() { 
var logseq$shui$table$core$table_footer__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__50750 = cljs.core.first(args__47253__auto__);
var G__50751 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50750,G__50751) : io.factorhouse.hsx.core.obj_get.call(null,G__50750,G__50751));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"table-footer","table-footer",-477654369,null),args__47253__auto__),logseq$shui$table$core$table_footer,args__47253__auto__,null);
}
};
var logseq$shui$table$core$table_footer = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__50843__i = 0, G__50843__a = new Array(arguments.length -  0);
while (G__50843__i < G__50843__a.length) {G__50843__a[G__50843__i] = arguments[G__50843__i + 0]; ++G__50843__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__50843__a,0,null);
} 
return logseq$shui$table$core$table_footer__delegate.call(this,args__47253__auto__);};
logseq$shui$table$core$table_footer.cljs$lang$maxFixedArity = 0;
logseq$shui$table$core$table_footer.cljs$lang$applyTo = (function (arglist__50844){
var args__47253__auto__ = cljs.core.seq(arglist__50844);
return logseq$shui$table$core$table_footer__delegate(args__47253__auto__);
});
logseq$shui$table$core$table_footer.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$table$core$table_footer__delegate;
return logseq$shui$table$core$table_footer;
})()
;
var memo_comp__47254__auto__ = (function (){var G__50752 = comp__47252__auto__;
var G__50753 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50752,G__50753) : io.factorhouse.hsx.core.react_memo.call(null,G__50752,G__50753));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"table-footer");

return comp__47252__auto__;
})();
logseq.shui.table.core.table_row = (function (){var render_fn__47251__auto__ = (function() { 
var logseq$shui$table$core$table_row__delegate = function (prop_and_children){
var vec__50758 = logseq.shui.table.core.get_prop_and_children(prop_and_children);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50758,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50758,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-table-row.ls-block.flex.flex-row.items-center","div.ls-table-row.ls-block.flex.flex-row.items-center",-1571155691),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted bg-gray-01 items-stretch"], null),prop], 0))], null),children);
};
var logseq$shui$table$core$table_row = function (var_args){
var prop_and_children = null;
if (arguments.length > 0) {
var G__50847__i = 0, G__50847__a = new Array(arguments.length -  0);
while (G__50847__i < G__50847__a.length) {G__50847__a[G__50847__i] = arguments[G__50847__i + 0]; ++G__50847__i;}
  prop_and_children = new cljs.core.IndexedSeq(G__50847__a,0,null);
} 
return logseq$shui$table$core$table_row__delegate.call(this,prop_and_children);};
logseq$shui$table$core$table_row.cljs$lang$maxFixedArity = 0;
logseq$shui$table$core$table_row.cljs$lang$applyTo = (function (arglist__50848){
var prop_and_children = cljs.core.seq(arglist__50848);
return logseq$shui$table$core$table_row__delegate(prop_and_children);
});
logseq$shui$table$core$table_row.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$table$core$table_row__delegate;
return logseq$shui$table$core$table_row;
})()
;
var comp__47252__auto__ = (function() { 
var logseq$shui$table$core$table_row__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__50761 = cljs.core.first(args__47253__auto__);
var G__50762 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50761,G__50762) : io.factorhouse.hsx.core.obj_get.call(null,G__50761,G__50762));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"table-row","table-row",1759489514,null),args__47253__auto__),logseq$shui$table$core$table_row,args__47253__auto__,null);
}
};
var logseq$shui$table$core$table_row = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__50851__i = 0, G__50851__a = new Array(arguments.length -  0);
while (G__50851__i < G__50851__a.length) {G__50851__a[G__50851__i] = arguments[G__50851__i + 0]; ++G__50851__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__50851__a,0,null);
} 
return logseq$shui$table$core$table_row__delegate.call(this,args__47253__auto__);};
logseq$shui$table$core$table_row.cljs$lang$maxFixedArity = 0;
logseq$shui$table$core$table_row.cljs$lang$applyTo = (function (arglist__50852){
var args__47253__auto__ = cljs.core.seq(arglist__50852);
return logseq$shui$table$core$table_row__delegate(args__47253__auto__);
});
logseq$shui$table$core$table_row.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$table$core$table_row__delegate;
return logseq$shui$table$core$table_row;
})()
;
var memo_comp__47254__auto__ = (function (){var G__50766 = comp__47252__auto__;
var G__50767 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50766,G__50767) : io.factorhouse.hsx.core.react_memo.call(null,G__50766,G__50767));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"table-row");

return comp__47252__auto__;
})();
logseq.shui.table.core.table_cell = (function (){var render_fn__47251__auto__ = (function() { 
var logseq$shui$table$core$table_cell__delegate = function (prop_and_children){
var vec__50771 = logseq.shui.table.core.get_prop_and_children(prop_and_children);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50771,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50771,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-table-cell.flex.relative.h-full","div.ls-table-cell.flex.relative.h-full",1484681107),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(prop,new cljs.core.Keyword(null,"select?","select?",-1012224063),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"add-property?","add-property?",1697808154)], 0)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"flex align-middle w-full overflow-x-clip items-center"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"select?","select?",-1012224063).cljs$core$IFn$_invoke$arity$1(prop))?" px-0":(cljs.core.truth_(new cljs.core.Keyword(null,"add-property?","add-property?",1697808154).cljs$core$IFn$_invoke$arity$1(prop))?"":" border-r px-2"
))))], null)], null),children)], null);
};
var logseq$shui$table$core$table_cell = function (var_args){
var prop_and_children = null;
if (arguments.length > 0) {
var G__50853__i = 0, G__50853__a = new Array(arguments.length -  0);
while (G__50853__i < G__50853__a.length) {G__50853__a[G__50853__i] = arguments[G__50853__i + 0]; ++G__50853__i;}
  prop_and_children = new cljs.core.IndexedSeq(G__50853__a,0,null);
} 
return logseq$shui$table$core$table_cell__delegate.call(this,prop_and_children);};
logseq$shui$table$core$table_cell.cljs$lang$maxFixedArity = 0;
logseq$shui$table$core$table_cell.cljs$lang$applyTo = (function (arglist__50854){
var prop_and_children = cljs.core.seq(arglist__50854);
return logseq$shui$table$core$table_cell__delegate(prop_and_children);
});
logseq$shui$table$core$table_cell.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$table$core$table_cell__delegate;
return logseq$shui$table$core$table_cell;
})()
;
var comp__47252__auto__ = (function() { 
var logseq$shui$table$core$table_cell__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__50774 = cljs.core.first(args__47253__auto__);
var G__50775 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50774,G__50775) : io.factorhouse.hsx.core.obj_get.call(null,G__50774,G__50775));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"table-cell","table-cell",37500349,null),args__47253__auto__),logseq$shui$table$core$table_cell,args__47253__auto__,null);
}
};
var logseq$shui$table$core$table_cell = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__50855__i = 0, G__50855__a = new Array(arguments.length -  0);
while (G__50855__i < G__50855__a.length) {G__50855__a[G__50855__i] = arguments[G__50855__i + 0]; ++G__50855__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__50855__a,0,null);
} 
return logseq$shui$table$core$table_cell__delegate.call(this,args__47253__auto__);};
logseq$shui$table$core$table_cell.cljs$lang$maxFixedArity = 0;
logseq$shui$table$core$table_cell.cljs$lang$applyTo = (function (arglist__50856){
var args__47253__auto__ = cljs.core.seq(arglist__50856);
return logseq$shui$table$core$table_cell__delegate(args__47253__auto__);
});
logseq$shui$table$core$table_cell.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$table$core$table_cell__delegate;
return logseq$shui$table$core$table_cell;
})()
;
var memo_comp__47254__auto__ = (function (){var G__50779 = comp__47252__auto__;
var G__50780 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50779,G__50780) : io.factorhouse.hsx.core.react_memo.call(null,G__50779,G__50780));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"table-cell");

return comp__47252__auto__;
})();
logseq.shui.table.core.table_actions = (function (){var render_fn__47251__auto__ = (function() { 
var logseq$shui$table$core$table_actions__delegate = function (prop_and_children){
var vec__50785 = logseq.shui.table.core.get_prop_and_children(prop_and_children);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50785,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50785,(1),null);
var el_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-table-actions.flex.flex-row.items-center.gap-1.bg-gray-01","div.ls-table-actions.flex.flex-row.items-center.gap-1.bg-gray-01",1018074628),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),el_ref,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(101)], null)], null),prop], 0))], null),children);
};
var logseq$shui$table$core$table_actions = function (var_args){
var prop_and_children = null;
if (arguments.length > 0) {
var G__50857__i = 0, G__50857__a = new Array(arguments.length -  0);
while (G__50857__i < G__50857__a.length) {G__50857__a[G__50857__i] = arguments[G__50857__i + 0]; ++G__50857__i;}
  prop_and_children = new cljs.core.IndexedSeq(G__50857__a,0,null);
} 
return logseq$shui$table$core$table_actions__delegate.call(this,prop_and_children);};
logseq$shui$table$core$table_actions.cljs$lang$maxFixedArity = 0;
logseq$shui$table$core$table_actions.cljs$lang$applyTo = (function (arglist__50858){
var prop_and_children = cljs.core.seq(arglist__50858);
return logseq$shui$table$core$table_actions__delegate(prop_and_children);
});
logseq$shui$table$core$table_actions.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$table$core$table_actions__delegate;
return logseq$shui$table$core$table_actions;
})()
;
var comp__47252__auto__ = (function() { 
var logseq$shui$table$core$table_actions__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__50788 = cljs.core.first(args__47253__auto__);
var G__50789 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50788,G__50789) : io.factorhouse.hsx.core.obj_get.call(null,G__50788,G__50789));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"table-actions","table-actions",1296721484,null),args__47253__auto__),logseq$shui$table$core$table_actions,args__47253__auto__,null);
}
};
var logseq$shui$table$core$table_actions = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__50859__i = 0, G__50859__a = new Array(arguments.length -  0);
while (G__50859__i < G__50859__a.length) {G__50859__a[G__50859__i] = arguments[G__50859__i + 0]; ++G__50859__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__50859__a,0,null);
} 
return logseq$shui$table$core$table_actions__delegate.call(this,args__47253__auto__);};
logseq$shui$table$core$table_actions.cljs$lang$maxFixedArity = 0;
logseq$shui$table$core$table_actions.cljs$lang$applyTo = (function (arglist__50860){
var args__47253__auto__ = cljs.core.seq(arglist__50860);
return logseq$shui$table$core$table_actions__delegate(args__47253__auto__);
});
logseq$shui$table$core$table_actions.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$table$core$table_actions__delegate;
return logseq$shui$table$core$table_actions;
})()
;
var memo_comp__47254__auto__ = (function (){var G__50793 = comp__47252__auto__;
var G__50794 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50793,G__50794) : io.factorhouse.hsx.core.react_memo.call(null,G__50793,G__50794));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"table-actions");

return comp__47252__auto__;
})();

//# sourceMappingURL=logseq.shui.table.core.js.map
