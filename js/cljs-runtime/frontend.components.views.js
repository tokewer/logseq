goog.provide('frontend.components.views');
frontend.components.views.yyyy_MM_dd_formatter = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd");
frontend.components.views.virtualized_list = (function frontend$components$views$virtualized_list(p__46121,disable_virtualized_QMARK_){
var map__46122 = p__46121;
var map__46122__$1 = cljs.core.__destructure_map(map__46122);
var option = map__46122__$1;
var total_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46122__$1,new cljs.core.Keyword(null,"total-count","total-count",-1999441386));
var item_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46122__$1,new cljs.core.Keyword(null,"item-content","item-content",1656730280));
var compute_item_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46122__$1,new cljs.core.Keyword(null,"compute-item-key","compute-item-key",-621146487));
if(cljs.core.truth_(disable_virtualized_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),(function (){var iter__5628__auto__ = (function frontend$components$views$virtualized_list_$_iter__46123(s__46124){
return (new cljs.core.LazySeq(null,(function (){
var s__46124__$1 = s__46124;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__46124__$1);
if(temp__5825__auto__){
var s__46124__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46124__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__46124__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__46126 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__46125 = (0);
while(true){
if((i__46125 < size__5627__auto__)){
var i = cljs.core._nth(c__5626__auto__,i__46125);
cljs.core.chunk_append(b__46126,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(item_content.cljs$core$IFn$_invoke$arity$1 ? item_content.cljs$core$IFn$_invoke$arity$1(i) : item_content.call(null,i))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(compute_item_key.cljs$core$IFn$_invoke$arity$1 ? compute_item_key.cljs$core$IFn$_invoke$arity$1(i) : compute_item_key.call(null,i))], null)));

var G__47441 = (i__46125 + (1));
i__46125 = G__47441;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46126),frontend$components$views$virtualized_list_$_iter__46123(cljs.core.chunk_rest(s__46124__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46126),null);
}
} else {
var i = cljs.core.first(s__46124__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(item_content.cljs$core$IFn$_invoke$arity$1 ? item_content.cljs$core$IFn$_invoke$arity$1(i) : item_content.call(null,i))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(compute_item_key.cljs$core$IFn$_invoke$arity$1 ? compute_item_key.cljs$core$IFn$_invoke$arity$1(i) : compute_item_key.call(null,i))], null)),frontend$components$views$virtualized_list_$_iter__46123(cljs.core.rest(s__46124__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),total_count));
})()], null);
} else {
return frontend.ui.virtualized_list(option);
}
});
frontend.components.views.get_scroll_parent = (function frontend$components$views$get_scroll_parent(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672).cljs$core$IFn$_invoke$arity$1(config))){
return (dommy.utils.__GT_Array(document.getElementsByClassName("sidebar-item-list"))[(0)]);
} else {
var temp__5823__auto__ = new cljs.core.Keyword(null,"viewel","viewel",606402959).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__5823__auto__)){
var view_el = temp__5823__auto__;
return frontend.util.app_scroll_container_node.cljs$core$IFn$_invoke$arity$1(view_el);
} else {
return frontend.util.app_scroll_container_node.cljs$core$IFn$_invoke$arity$0();
}
}
});
frontend.components.views.view_container_id = (function frontend$components$views$view_container_id(config){
var container_key = cljs.core.select_keys(config,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),new cljs.core.Keyword(null,"embed?","embed?",-922305920),new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"current-block","current-block",1027687970),new cljs.core.Keyword(null,"table?","table?",-1064705406),new cljs.core.Keyword(null,"block?","block?",1102479923),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"page-name","page-name",974981762)], null));
var or__5142__auto__ = new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.state.get_container_id(container_key);
}
});
frontend.components.views.table_selection_id = (function frontend$components$views$table_selection_id(table){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"selection-id","selection-id",985859565)], null));
});
frontend.components.views.table_selection_path = (function frontend$components$views$table_selection_path(var_args){
var args__5882__auto__ = [];
var len__5876__auto___47442 = arguments.length;
var i__5877__auto___47443 = (0);
while(true){
if((i__5877__auto___47443 < len__5876__auto___47442)){
args__5882__auto__.push((arguments[i__5877__auto___47443]));

var G__47444 = (i__5877__auto___47443 + (1));
i__5877__auto___47443 = G__47444;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.components.views.table_selection_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.components.views.table_selection_path.cljs$core$IFn$_invoke$arity$variadic = (function (table,path){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view","table-selection","view/table-selection",-2120640246),frontend.components.views.table_selection_id(table)], null),path);
}));

(frontend.components.views.table_selection_path.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.components.views.table_selection_path.cljs$lang$applyTo = (function (seq46146){
var G__46147 = cljs.core.first(seq46146);
var seq46146__$1 = cljs.core.next(seq46146);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46147,seq46146__$1);
}));

frontend.components.views.built_in_property = (function frontend$components$views$built_in_property(ident){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.property.built_in_properties,ident);
if(cljs.core.truth_(temp__5823__auto__)){
var map__46154 = temp__5823__auto__;
var map__46154__$1 = cljs.core.__destructure_map(map__46154);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46154__$1,new cljs.core.Keyword(null,"title","title",636505583));
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46154__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var closed_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46154__$1,new cljs.core.Keyword(null,"closed-values","closed-values",364658811));
var G__46155 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","ident","db/ident",-737096),ident,new cljs.core.Keyword("block","title","block/title",710445684),title,new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(schema)], null);
var G__46155__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"cardinality","cardinality",-104971109).cljs$core$IFn$_invoke$arity$1(schema))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46155,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),(function (){var G__46156 = new cljs.core.Keyword(null,"cardinality","cardinality",-104971109).cljs$core$IFn$_invoke$arity$1(schema);
var G__46156__$1 = (((G__46156 instanceof cljs.core.Keyword))?G__46156.fqn:null);
switch (G__46156__$1) {
case "many":
return new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234);

break;
case "one":
return new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190);

break;
default:
return new cljs.core.Keyword(null,"cardinality","cardinality",-104971109).cljs$core$IFn$_invoke$arity$1(schema);

}
})()):G__46155);
if(cljs.core.seq(closed_values)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46155__$1,new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952),closed_values);
} else {
return G__46155__$1;
}
} else {
return cljs.core.some((function (p__46161){
var vec__46162 = p__46161;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46162,(0),null);
var map__46165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46162,(1),null);
var map__46165__$1 = cljs.core.__destructure_map(map__46165);
var closed_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46165__$1,new cljs.core.Keyword(null,"closed-values","closed-values",364658811));
return cljs.core.some((function (p__46166){
var map__46167 = p__46166;
var map__46167__$1 = cljs.core.__destructure_map(map__46167);
var db_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46167__$1,new cljs.core.Keyword(null,"db-ident","db-ident",-992686073));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46167__$1,new cljs.core.Keyword(null,"value","value",305978217));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46167__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ident,db_ident)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","ident","db/ident",-737096),db_ident,new cljs.core.Keyword("block","title","block/title",710445684),value,new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285),icon], null);
} else {
return null;
}
}),closed_values);
}),logseq.db.frontend.property.built_in_properties);
}
});
frontend.components.views.column_property = (function frontend$components$views$column_property(column){
var or__5142__auto__ = new cljs.core.Keyword(null,"property","property",-1114278232).cljs$core$IFn$_invoke$arity$1(column);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.components.views.built_in_property((function (){var or__5142__auto____$1 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(column);
}
})());
}
});
frontend.components.views.filterable_column_QMARK_ = (function frontend$components$views$filterable_column_QMARK_(column){
var property = frontend.components.views.column_property(column);
return ((cljs.core.boolean$(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property))) || (cljs.core.contains_QMARK_(logseq.db.frontend.property.db_attribute_properties,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property))));
});
frontend.components.views.get_table_row_selection = (function frontend$components$views$get_table_row_selection(table){
if(cljs.core.truth_(frontend.components.views.table_selection_id(table))){
var or__5142__auto__ = frontend.rfx.snapshot_sub(frontend.components.views.table_selection_path.cljs$core$IFn$_invoke$arity$variadic(table,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"row-selection","row-selection",1964656498)], 0)));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
frontend.components.views.use_table_row_selection = (function frontend$components$views$use_table_row_selection(table){
if(cljs.core.truth_(frontend.components.views.table_selection_id(table))){
var or__5142__auto__ = frontend.rfx.use_sub(frontend.components.views.table_selection_path.cljs$core$IFn$_invoke$arity$variadic(table,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"row-selection","row-selection",1964656498)], 0)));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
frontend.components.views.set_table_row_selection_BANG_ = (function frontend$components$views$set_table_row_selection_BANG_(selection_id,row_selection){
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view","table-selection","view/table-selection",-2120640246),selection_id,new cljs.core.Keyword(null,"row-selection","row-selection",1964656498)], null),(function (){var or__5142__auto__ = row_selection;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});
frontend.components.views.table_last_selected_idx_path = (function frontend$components$views$table_last_selected_idx_path(table){
return frontend.components.views.table_selection_path.cljs$core$IFn$_invoke$arity$variadic(table,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"last-selected-idx","last-selected-idx",2024080238)], 0));
});
frontend.components.views.get_table_last_selected_idx = (function frontend$components$views$get_table_last_selected_idx(table){
if(cljs.core.truth_(frontend.components.views.table_selection_id(table))){
return frontend.rfx.snapshot_sub(frontend.components.views.table_last_selected_idx_path(table));
} else {
return null;
}
});
frontend.components.views.set_table_last_selected_idx_BANG_ = (function frontend$components$views$set_table_last_selected_idx_BANG_(table,idx){
return frontend.state.set_state_BANG_(frontend.components.views.table_last_selected_idx_path(table),idx);
});
frontend.components.views.row_selection_map = (function frontend$components$views$row_selection_map(row_selection,k){
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row_selection,k);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
frontend.components.views.table_row_id = (function frontend$components$views$table_row_id(row){
if(cljs.core.map_QMARK_(row)){
var or__5142__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(row);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(row);
}
} else {
return row;
}
});
frontend.components.views.table_row_selected_QMARK_ = (function frontend$components$views$table_row_selected_QMARK_(row_selection,row_id){
if(cljs.core.truth_(new cljs.core.Keyword(null,"selected-all?","selected-all?",1723040507).cljs$core$IFn$_invoke$arity$1(row_selection))){
return (!(cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.components.views.row_selection_map(row_selection,new cljs.core.Keyword(null,"excluded-ids","excluded-ids",-523478844)),row_id) === true));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.components.views.row_selection_map(row_selection,new cljs.core.Keyword(null,"selected-ids","selected-ids",-1154760141)),row_id) === true;
}
});
frontend.components.views.use_table_row_selected_QMARK_ = (function frontend$components$views$use_table_row_selected_QMARK_(table,row){
if(cljs.core.truth_(frontend.components.views.table_selection_id(table))){
var row_id = frontend.components.views.table_row_id(row);
var selected_all_QMARK_ = cljs.core.boolean$(frontend.rfx.use_sub(frontend.components.views.table_selection_path.cljs$core$IFn$_invoke$arity$variadic(table,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"row-selection","row-selection",1964656498),new cljs.core.Keyword(null,"selected-all?","selected-all?",1723040507)], 0))));
var selected_QMARK_ = cljs.core.boolean$(frontend.rfx.use_sub(frontend.components.views.table_selection_path.cljs$core$IFn$_invoke$arity$variadic(table,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"row-selection","row-selection",1964656498),new cljs.core.Keyword(null,"selected-ids","selected-ids",-1154760141),row_id], 0))));
var excluded_QMARK_ = cljs.core.boolean$(frontend.rfx.use_sub(frontend.components.views.table_selection_path.cljs$core$IFn$_invoke$arity$variadic(table,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"row-selection","row-selection",1964656498),new cljs.core.Keyword(null,"excluded-ids","excluded-ids",-523478844),row_id], 0))));
if(selected_all_QMARK_){
return (!(excluded_QMARK_));
} else {
return selected_QMARK_;
}
} else {
return false;
}
});
frontend.components.views.set_table_row_selected_BANG_ = (function frontend$components$views$set_table_row_selected_BANG_(table,row_id,selected_QMARK_){
var row_selection = frontend.components.views.get_table_row_selection(table);
if(cljs.core.truth_(new cljs.core.Keyword(null,"selected-all?","selected-all?",1723040507).cljs$core$IFn$_invoke$arity$1(row_selection))){
return frontend.state.set_state_BANG_(frontend.components.views.table_selection_path.cljs$core$IFn$_invoke$arity$variadic(table,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"row-selection","row-selection",1964656498),new cljs.core.Keyword(null,"excluded-ids","excluded-ids",-523478844),row_id], 0)),cljs.core.not(selected_QMARK_));
} else {
return frontend.state.set_state_BANG_(frontend.components.views.table_selection_path.cljs$core$IFn$_invoke$arity$variadic(table,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"row-selection","row-selection",1964656498),new cljs.core.Keyword(null,"selected-ids","selected-ids",-1154760141),row_id], 0)),cljs.core.boolean$(selected_QMARK_));
}
});
frontend.components.views.table_get_selection_rows = (function frontend$components$views$table_get_selection_rows(row_selection,rows){
if(cljs.core.truth_(new cljs.core.Keyword(null,"selected-all?","selected-all?",1723040507).cljs$core$IFn$_invoke$arity$1(row_selection))){
var excluded_ids = frontend.components.views.row_selection_map(row_selection,new cljs.core.Keyword(null,"excluded-ids","excluded-ids",-523478844));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__46216_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(excluded_ids,frontend.components.views.table_row_id(p1__46216_SHARP_)) === true;
}),rows);
} else {
var selected_ids = frontend.components.views.row_selection_map(row_selection,new cljs.core.Keyword(null,"selected-ids","selected-ids",-1154760141));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__46217_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(selected_ids,frontend.components.views.table_row_id(p1__46217_SHARP_)) === true;
}),rows);
}
});
frontend.components.views.table_action_rows = (function frontend$components$views$table_action_rows(table){
if(cljs.core.truth_(new cljs.core.Keyword(null,"full-data-loading?","full-data-loading?",-114331344).cljs$core$IFn$_invoke$arity$1(table))){
return null;
} else {
var or__5142__auto__ = new cljs.core.Keyword(null,"full-data","full-data",-1430830367).cljs$core$IFn$_invoke$arity$1(table);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(table);
}
}
});
frontend.components.views.table_selection_summary = (function frontend$components$views$table_selection_summary(table,row_selection){
var rows = frontend.components.views.table_action_rows(table);
var selected_rows = frontend.components.views.table_get_selection_rows(row_selection,rows);
var selected_count = cljs.core.count(selected_rows);
var rows_count = cljs.core.count(rows);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected-rows","selected-rows",-1905738842),selected_rows,new cljs.core.Keyword(null,"selected-all?","selected-all?",1723040507),(((rows_count > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rows_count,selected_count))),new cljs.core.Keyword(null,"selected-some?","selected-some?",-1877870503),(selected_count > (0))], null);
});
frontend.components.views.table_toggle_row_selected_BANG_ = (function frontend$components$views$table_toggle_row_selected_BANG_(table,row,selected_QMARK_){
return frontend.components.views.set_table_row_selected_BANG_(table,frontend.components.views.table_row_id(row),selected_QMARK_);
});
frontend.components.views.table_toggle_selected_all_BANG_ = (function frontend$components$views$table_toggle_selected_all_BANG_(table,selected_QMARK_){
var group_by_property = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"group-by-property","group-by-property",1732754405)], null));
if(cljs.core.truth_((function (){var and__5140__auto__ = group_by_property;
if(cljs.core.truth_(and__5140__auto__)){
return selected_QMARK_;
} else {
return and__5140__auto__;
}
})())){
var seq__46223 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.components.views.table_row_id,new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(table)));
var chunk__46224 = null;
var count__46225 = (0);
var i__46226 = (0);
while(true){
if((i__46226 < count__46225)){
var row_id = chunk__46224.cljs$core$IIndexed$_nth$arity$2(null,i__46226);
frontend.state.set_state_BANG_(frontend.components.views.table_selection_path.cljs$core$IFn$_invoke$arity$variadic(table,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"row-selection","row-selection",1964656498),new cljs.core.Keyword(null,"selected-ids","selected-ids",-1154760141),row_id], 0)),true);


var G__47446 = seq__46223;
var G__47447 = chunk__46224;
var G__47448 = count__46225;
var G__47449 = (i__46226 + (1));
seq__46223 = G__47446;
chunk__46224 = G__47447;
count__46225 = G__47448;
i__46226 = G__47449;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__46223);
if(temp__5825__auto__){
var seq__46223__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46223__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__46223__$1);
var G__47450 = cljs.core.chunk_rest(seq__46223__$1);
var G__47451 = c__5673__auto__;
var G__47452 = cljs.core.count(c__5673__auto__);
var G__47453 = (0);
seq__46223 = G__47450;
chunk__46224 = G__47451;
count__46225 = G__47452;
i__46226 = G__47453;
continue;
} else {
var row_id = cljs.core.first(seq__46223__$1);
frontend.state.set_state_BANG_(frontend.components.views.table_selection_path.cljs$core$IFn$_invoke$arity$variadic(table,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"row-selection","row-selection",1964656498),new cljs.core.Keyword(null,"selected-ids","selected-ids",-1154760141),row_id], 0)),true);


var G__47454 = cljs.core.next(seq__46223__$1);
var G__47455 = null;
var G__47456 = (0);
var G__47457 = (0);
seq__46223 = G__47454;
chunk__46224 = G__47455;
count__46225 = G__47456;
i__46226 = G__47457;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core.truth_(selected_QMARK_)){
return frontend.state.set_state_BANG_(frontend.components.views.table_selection_path.cljs$core$IFn$_invoke$arity$variadic(table,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"row-selection","row-selection",1964656498)], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected-all?","selected-all?",1723040507),true,new cljs.core.Keyword(null,"selected-ids","selected-ids",-1154760141),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"excluded-ids","excluded-ids",-523478844),cljs.core.PersistentArrayMap.EMPTY], null));
} else {
if(cljs.core.truth_(group_by_property)){
var seq__46234 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.components.views.table_row_id,new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(table)));
var chunk__46235 = null;
var count__46236 = (0);
var i__46237 = (0);
while(true){
if((i__46237 < count__46236)){
var row_id = chunk__46235.cljs$core$IIndexed$_nth$arity$2(null,i__46237);
frontend.state.set_state_BANG_(frontend.components.views.table_selection_path.cljs$core$IFn$_invoke$arity$variadic(table,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"row-selection","row-selection",1964656498),new cljs.core.Keyword(null,"selected-ids","selected-ids",-1154760141),row_id], 0)),false);


var G__47458 = seq__46234;
var G__47459 = chunk__46235;
var G__47460 = count__46236;
var G__47461 = (i__46237 + (1));
seq__46234 = G__47458;
chunk__46235 = G__47459;
count__46236 = G__47460;
i__46237 = G__47461;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__46234);
if(temp__5825__auto__){
var seq__46234__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46234__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__46234__$1);
var G__47462 = cljs.core.chunk_rest(seq__46234__$1);
var G__47463 = c__5673__auto__;
var G__47464 = cljs.core.count(c__5673__auto__);
var G__47465 = (0);
seq__46234 = G__47462;
chunk__46235 = G__47463;
count__46236 = G__47464;
i__46237 = G__47465;
continue;
} else {
var row_id = cljs.core.first(seq__46234__$1);
frontend.state.set_state_BANG_(frontend.components.views.table_selection_path.cljs$core$IFn$_invoke$arity$variadic(table,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"row-selection","row-selection",1964656498),new cljs.core.Keyword(null,"selected-ids","selected-ids",-1154760141),row_id], 0)),false);


var G__47466 = cljs.core.next(seq__46234__$1);
var G__47467 = null;
var G__47468 = (0);
var G__47469 = (0);
seq__46234 = G__47466;
chunk__46235 = G__47467;
count__46236 = G__47468;
i__46237 = G__47469;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return frontend.state.set_state_BANG_(frontend.components.views.table_selection_path.cljs$core$IFn$_invoke$arity$variadic(table,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"row-selection","row-selection",1964656498)], 0)),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
});
frontend.components.views.header_checkbox = (function (){var render_fn__31744__auto__ = (function frontend$components$views$header_checkbox(table){
var vec__46238 = logseq.shui.hooks.use_state(false);
var show_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46238,(0),null);
var set_show_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46238,(1),null);
var row_selection = frontend.components.views.use_table_row_selection(table);
var map__46241 = frontend.components.views.table_selection_summary(table,row_selection);
var map__46241__$1 = cljs.core.__destructure_map(map__46241);
var selected_all_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46241__$1,new cljs.core.Keyword(null,"selected-all?","selected-all?",1723040507));
var selected_some_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46241__$1,new cljs.core.Keyword(null,"selected-some?","selected-some?",-1877870503));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.h-8.w-8.flex.items-center.justify-center.cursor-pointer","label.h-8.w-8.flex.items-center.justify-center.cursor-pointer",-2031548107),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"html-for","html-for",594503920),"header-checkbox",new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (){
return (set_show_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_show_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_show_BANG_.call(null,true));
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (){
return (set_show_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_show_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_show_BANG_.call(null,false));
})], null),(function (){var G__46242 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"header-checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),(function (){var or__5142__auto__ = selected_all_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto__ = selected_some_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return "indeterminate";
} else {
return and__5140__auto__;
}
}
})(),new cljs.core.Keyword(null,"on-checked-change","on-checked-change",-482086819),(function (value){
return frontend.components.views.table_toggle_selected_all_BANG_(table,value);
}),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.table","select-all","view.table/select-all",-8862523)], 0)),new cljs.core.Keyword(null,"class","class",-2030961996),(""+"flex transition-opacity "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__5142__auto__ = show_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = selected_all_QMARK_;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return selected_some_QMARK_;
}
}
})())?"opacity-100":"opacity-0")))], null);
return (logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1(G__46242) : logseq.shui.ui.checkbox.call(null,G__46242));
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$header_checkbox__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46243 = cljs.core.first(args__31746__auto__);
var G__46244 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46243,G__46244) : io.factorhouse.hsx.core.obj_get.call(null,G__46243,G__46244));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"header-checkbox","header-checkbox",-1255129819,null),args__31746__auto__),frontend$components$views$header_checkbox,args__31746__auto__,null);
}
};
var frontend$components$views$header_checkbox = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47470__i = 0, G__47470__a = new Array(arguments.length -  0);
while (G__47470__i < G__47470__a.length) {G__47470__a[G__47470__i] = arguments[G__47470__i + 0]; ++G__47470__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47470__a,0,null);
} 
return frontend$components$views$header_checkbox__delegate.call(this,args__31746__auto__);};
frontend$components$views$header_checkbox.cljs$lang$maxFixedArity = 0;
frontend$components$views$header_checkbox.cljs$lang$applyTo = (function (arglist__47471){
var args__31746__auto__ = cljs.core.seq(arglist__47471);
return frontend$components$views$header_checkbox__delegate(args__31746__auto__);
});
frontend$components$views$header_checkbox.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$header_checkbox__delegate;
return frontend$components$views$header_checkbox;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46245 = comp__31745__auto__;
var G__46246 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46245,G__46246) : io.factorhouse.hsx.core.react_memo.call(null,G__46245,G__46246));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"header-checkbox");

return comp__31745__auto__;
})();
frontend.components.views.header_index = (function (){var render_fn__31744__auto__ = (function frontend$components$views$header_index(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.h-8.w-6.flex.items-center.justify-center","label.h-8.w-6.flex.items-center.justify-center",1700026641),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"html-for","html-for",594503920),"header-index",new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.table","row-number","view.table/row-number",1088374200)], 0))], null),"#"], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$header_index__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46247 = cljs.core.first(args__31746__auto__);
var G__46248 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46247,G__46248) : io.factorhouse.hsx.core.obj_get.call(null,G__46247,G__46248));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"header-index","header-index",2114540104,null),args__31746__auto__),frontend$components$views$header_index,args__31746__auto__,null);
}
};
var frontend$components$views$header_index = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47472__i = 0, G__47472__a = new Array(arguments.length -  0);
while (G__47472__i < G__47472__a.length) {G__47472__a[G__47472__i] = arguments[G__47472__i + 0]; ++G__47472__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47472__a,0,null);
} 
return frontend$components$views$header_index__delegate.call(this,args__31746__auto__);};
frontend$components$views$header_index.cljs$lang$maxFixedArity = 0;
frontend$components$views$header_index.cljs$lang$applyTo = (function (arglist__47473){
var args__31746__auto__ = cljs.core.seq(arglist__47473);
return frontend$components$views$header_index__delegate(args__31746__auto__);
});
frontend$components$views$header_index.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$header_index__delegate;
return frontend$components$views$header_index;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46249 = comp__31745__auto__;
var G__46250 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46249,G__46250) : io.factorhouse.hsx.core.react_memo.call(null,G__46249,G__46250));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"header-index");

return comp__31745__auto__;
})();
frontend.components.views.row_checkbox = (function (){var render_fn__31744__auto__ = (function frontend$components$views$row_checkbox(p__46251,row,_column){
var map__46252 = p__46251;
var map__46252__$1 = cljs.core.__destructure_map(map__46252);
var table = map__46252__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46252__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(row))+"-"+"checkbox");
var vec__46255 = logseq.shui.hooks.use_state(false);
var show_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46255,(0),null);
var set_show_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46255,(1),null);
var checked_QMARK_ = frontend.components.views.use_table_row_selected_QMARK_(table,row);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.jtrigger.h-8.w-8.flex.items-center.justify-center.cursor-pointer","label.jtrigger.h-8.w-8.flex.items-center.justify-center.cursor-pointer",-834748670),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"html-for","html-for",594503920),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(row))+"-"+"checkbox"),new cljs.core.Keyword(null,"data-table-row-select","data-table-row-select",-941619034),true,new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (){
return (set_show_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_show_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_show_BANG_.call(null,true));
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (){
return (set_show_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_show_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_show_BANG_.call(null,false));
})], null),(function (){var G__46260 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var temp__5825__auto__ = (function (){var and__5140__auto__ = e.shiftKey;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.components.views.get_table_last_selected_idx(table);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var last_selected_idx = temp__5825__auto__;
frontend.util.stop(e);

var idx = data.indexOf(frontend.components.views.table_row_id(row));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(last_selected_idx,idx)){
var new_ids = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (idx__$1){
return frontend.util.nth_safe(data,idx__$1);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2(cljs.core.min.cljs$core$IFn$_invoke$arity$2(last_selected_idx,idx),(cljs.core.max.cljs$core$IFn$_invoke$arity$2(last_selected_idx,idx) + (1))));
if(cljs.core.seq(new_ids)){
var seq__46265 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.components.views.table_row_id,new_ids));
var chunk__46266 = null;
var count__46267 = (0);
var i__46268 = (0);
while(true){
if((i__46268 < count__46267)){
var row_id = chunk__46266.cljs$core$IIndexed$_nth$arity$2(null,i__46268);
frontend.state.set_state_BANG_(frontend.components.views.table_selection_path.cljs$core$IFn$_invoke$arity$variadic(table,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"row-selection","row-selection",1964656498),new cljs.core.Keyword(null,"selected-ids","selected-ids",-1154760141),row_id], 0)),true);


var G__47474 = seq__46265;
var G__47475 = chunk__46266;
var G__47476 = count__46267;
var G__47477 = (i__46268 + (1));
seq__46265 = G__47474;
chunk__46266 = G__47475;
count__46267 = G__47476;
i__46268 = G__47477;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__46265);
if(temp__5825__auto____$1){
var seq__46265__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__46265__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__46265__$1);
var G__47478 = cljs.core.chunk_rest(seq__46265__$1);
var G__47479 = c__5673__auto__;
var G__47480 = cljs.core.count(c__5673__auto__);
var G__47481 = (0);
seq__46265 = G__47478;
chunk__46266 = G__47479;
count__46267 = G__47480;
i__46268 = G__47481;
continue;
} else {
var row_id = cljs.core.first(seq__46265__$1);
frontend.state.set_state_BANG_(frontend.components.views.table_selection_path.cljs$core$IFn$_invoke$arity$variadic(table,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"row-selection","row-selection",1964656498),new cljs.core.Keyword(null,"selected-ids","selected-ids",-1154760141),row_id], 0)),true);


var G__47482 = cljs.core.next(seq__46265__$1);
var G__47483 = null;
var G__47484 = (0);
var G__47485 = (0);
seq__46265 = G__47482;
chunk__46266 = G__47483;
count__46267 = G__47484;
i__46268 = G__47485;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-checked-change","on-checked-change",-482086819),(function (v){
if(cljs.core.truth_(v)){
var idx_47486 = data.indexOf(frontend.components.views.table_row_id(row));
frontend.components.views.set_table_last_selected_idx_BANG_(table,idx_47486);
} else {
var idx_47487 = data.indexOf(frontend.components.views.table_row_id(row));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx_47487,frontend.components.views.get_table_last_selected_idx(table))){
frontend.components.views.set_table_last_selected_idx_BANG_(table,null);
} else {
}
}

return frontend.components.views.table_toggle_row_selected_BANG_(table,row,v);
}),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.table","select-row","view.table/select-row",1185660127)], 0)),new cljs.core.Keyword(null,"class","class",-2030961996),(""+"jtrigger flex transition-opacity "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__5142__auto__ = show_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return checked_QMARK_;
}
})())?"opacity-100":"opacity-0")))], null);
return (logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1(G__46260) : logseq.shui.ui.checkbox.call(null,G__46260));
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$row_checkbox__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46275 = cljs.core.first(args__31746__auto__);
var G__46276 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46275,G__46276) : io.factorhouse.hsx.core.obj_get.call(null,G__46275,G__46276));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"row-checkbox","row-checkbox",1373279050,null),args__31746__auto__),frontend$components$views$row_checkbox,args__31746__auto__,null);
}
};
var frontend$components$views$row_checkbox = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47488__i = 0, G__47488__a = new Array(arguments.length -  0);
while (G__47488__i < G__47488__a.length) {G__47488__a[G__47488__i] = arguments[G__47488__i + 0]; ++G__47488__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47488__a,0,null);
} 
return frontend$components$views$row_checkbox__delegate.call(this,args__31746__auto__);};
frontend$components$views$row_checkbox.cljs$lang$maxFixedArity = 0;
frontend$components$views$row_checkbox.cljs$lang$applyTo = (function (arglist__47489){
var args__31746__auto__ = cljs.core.seq(arglist__47489);
return frontend$components$views$row_checkbox__delegate(args__31746__auto__);
});
frontend$components$views$row_checkbox.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$row_checkbox__delegate;
return frontend$components$views$row_checkbox;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46277 = comp__31745__auto__;
var G__46278 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46277,G__46278) : io.factorhouse.hsx.core.react_memo.call(null,G__46277,G__46278));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"row-checkbox");

return comp__31745__auto__;
})();
frontend.components.views.gallery_card_checkbox = (function (){var render_fn__31744__auto__ = (function frontend$components$views$gallery_card_checkbox(p__46285,row){
var map__46286 = p__46285;
var map__46286__$1 = cljs.core.__destructure_map(map__46286);
var table = map__46286__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46286__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(row))+"-gallery-checkbox");
var checked_QMARK_ = frontend.components.views.use_table_row_selected_QMARK_(table,row);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.ls-gallery-card-select.flex.items-center.justify-center.cursor-pointer","label.ls-gallery-card-select.flex.items-center.justify-center.cursor-pointer",1024007738),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"html-for","html-for",594503920),id,new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.util.stop_propagation], null),(function (){var G__46289 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var temp__5825__auto__ = (function (){var and__5140__auto__ = e.shiftKey;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.components.views.get_table_last_selected_idx(table);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var last_selected_idx = temp__5825__auto__;
frontend.util.stop(e);

var idx = data.indexOf(frontend.components.views.table_row_id(row));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(last_selected_idx,idx)){
var new_ids = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (idx__$1){
return frontend.util.nth_safe(data,idx__$1);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2(cljs.core.min.cljs$core$IFn$_invoke$arity$2(last_selected_idx,idx),(cljs.core.max.cljs$core$IFn$_invoke$arity$2(last_selected_idx,idx) + (1))));
if(cljs.core.seq(new_ids)){
var seq__46292 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.components.views.table_row_id,new_ids));
var chunk__46293 = null;
var count__46294 = (0);
var i__46295 = (0);
while(true){
if((i__46295 < count__46294)){
var row_id = chunk__46293.cljs$core$IIndexed$_nth$arity$2(null,i__46295);
frontend.state.set_state_BANG_(frontend.components.views.table_selection_path.cljs$core$IFn$_invoke$arity$variadic(table,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"row-selection","row-selection",1964656498),new cljs.core.Keyword(null,"selected-ids","selected-ids",-1154760141),row_id], 0)),true);


var G__47490 = seq__46292;
var G__47491 = chunk__46293;
var G__47492 = count__46294;
var G__47493 = (i__46295 + (1));
seq__46292 = G__47490;
chunk__46293 = G__47491;
count__46294 = G__47492;
i__46295 = G__47493;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__46292);
if(temp__5825__auto____$1){
var seq__46292__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__46292__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__46292__$1);
var G__47494 = cljs.core.chunk_rest(seq__46292__$1);
var G__47495 = c__5673__auto__;
var G__47496 = cljs.core.count(c__5673__auto__);
var G__47497 = (0);
seq__46292 = G__47494;
chunk__46293 = G__47495;
count__46294 = G__47496;
i__46295 = G__47497;
continue;
} else {
var row_id = cljs.core.first(seq__46292__$1);
frontend.state.set_state_BANG_(frontend.components.views.table_selection_path.cljs$core$IFn$_invoke$arity$variadic(table,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"row-selection","row-selection",1964656498),new cljs.core.Keyword(null,"selected-ids","selected-ids",-1154760141),row_id], 0)),true);


var G__47498 = cljs.core.next(seq__46292__$1);
var G__47499 = null;
var G__47500 = (0);
var G__47501 = (0);
seq__46292 = G__47498;
chunk__46293 = G__47499;
count__46294 = G__47500;
i__46295 = G__47501;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-checked-change","on-checked-change",-482086819),(function (v){
var idx_47502 = data.indexOf(frontend.components.views.table_row_id(row));
if(cljs.core.truth_(v)){
frontend.components.views.set_table_last_selected_idx_BANG_(table,idx_47502);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx_47502,frontend.components.views.get_table_last_selected_idx(table))){
frontend.components.views.set_table_last_selected_idx_BANG_(table,null);
} else {
}
}

return frontend.components.views.table_toggle_row_selected_BANG_(table,row,v);
}),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.table","select-row","view.table/select-row",1185660127)], 0)),new cljs.core.Keyword(null,"class","class",-2030961996),"flex"], null);
return (logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1(G__46289) : logseq.shui.ui.checkbox.call(null,G__46289));
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$gallery_card_checkbox__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46305 = cljs.core.first(args__31746__auto__);
var G__46306 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46305,G__46306) : io.factorhouse.hsx.core.obj_get.call(null,G__46305,G__46306));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"gallery-card-checkbox","gallery-card-checkbox",1567354012,null),args__31746__auto__),frontend$components$views$gallery_card_checkbox,args__31746__auto__,null);
}
};
var frontend$components$views$gallery_card_checkbox = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47503__i = 0, G__47503__a = new Array(arguments.length -  0);
while (G__47503__i < G__47503__a.length) {G__47503__a[G__47503__i] = arguments[G__47503__i + 0]; ++G__47503__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47503__a,0,null);
} 
return frontend$components$views$gallery_card_checkbox__delegate.call(this,args__31746__auto__);};
frontend$components$views$gallery_card_checkbox.cljs$lang$maxFixedArity = 0;
frontend$components$views$gallery_card_checkbox.cljs$lang$applyTo = (function (arglist__47504){
var args__31746__auto__ = cljs.core.seq(arglist__47504);
return frontend$components$views$gallery_card_checkbox__delegate(args__31746__auto__);
});
frontend$components$views$gallery_card_checkbox.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$gallery_card_checkbox__delegate;
return frontend$components$views$gallery_card_checkbox;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46307 = comp__31745__auto__;
var G__46308 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46307,G__46308) : io.factorhouse.hsx.core.react_memo.call(null,G__46307,G__46308));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"gallery-card-checkbox");

return comp__31745__auto__;
})();
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.views !== 'undefined') && (typeof frontend.components.views._STAR_last_header_action_target !== 'undefined')){
} else {
frontend.components.views._STAR_last_header_action_target = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.components.views.prevent_view_action_button_focus = (function frontend$components$views$prevent_view_action_button_focus(e){
var target = e.target;
if(cljs.core.truth_((function (){var and__5140__auto__ = (function (){var G__46309 = target;
if((G__46309 == null)){
return null;
} else {
return G__46309.closest("button, [tabindex]");
}
})();
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not((function (){var G__46310 = target;
if((G__46310 == null)){
return null;
} else {
return G__46310.closest("input, textarea, select, [contenteditable='true']");
}
})());
} else {
return and__5140__auto__;
}
})())){
return e.preventDefault();
} else {
return null;
}
});
frontend.components.views.header_dropdown_click_should_hide_QMARK_ = (function frontend$components$views$header_dropdown_click_should_hide_QMARK_(target){
var menu_item = (function (){var G__46315 = target;
if((G__46315 == null)){
return null;
} else {
return G__46315.closest("[role='menuitem']");
}
})();
var submenu_trigger_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("menu",(function (){var G__46316 = menu_item;
if((G__46316 == null)){
return null;
} else {
return G__46316.getAttribute("aria-haspopup");
}
})());
return cljs.core.boolean$((function (){var and__5140__auto__ = target;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = cljs.core.not(frontend.util.input_QMARK_(target));
if(and__5140__auto____$1){
var and__5140__auto____$2 = menu_item;
if(cljs.core.truth_(and__5140__auto____$2)){
return (!(submenu_trigger_QMARK_));
} else {
return and__5140__auto____$2;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})());
});
frontend.components.views.header_cp = (function frontend$components$views$header_cp(p__46318,column){
var map__46319 = p__46318;
var map__46319__$1 = cljs.core.__destructure_map(map__46319);
var view_entity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46319__$1,new cljs.core.Keyword(null,"view-entity","view-entity",-1084117808));
var column_set_sorting_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46319__$1,new cljs.core.Keyword(null,"column-set-sorting!","column-set-sorting!",892954674));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46319__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var sorting = new cljs.core.Keyword(null,"sorting","sorting",622249690).cljs$core$IFn$_invoke$arity$1(state);
var sortable_QMARK_ = (!(new cljs.core.Keyword(null,"sortable?","sortable?",291547474).cljs$core$IFn$_invoke$arity$1(column) === false));
var vec__46320 = cljs.core.some((function (item){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column))){
var temp__5829__auto__ = new cljs.core.Keyword(null,"asc?","asc?",891093427).cljs$core$IFn$_invoke$arity$1(item);
if((temp__5829__auto__ == null)){
return null;
} else {
var asc_QMARK_ = temp__5829__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [asc_QMARK_], null);
}
} else {
return null;
}
}),sorting);
var asc_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46320,(0),null);
var property = frontend.components.views.column_property(column);
var pinned_QMARK_ = (cljs.core.truth_(property)?cljs.core.contains_QMARK_(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("logseq.property.table","pinned-columns","logseq.property.table/pinned-columns",267375138).cljs$core$IFn$_invoke$arity$1(view_entity))),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property)):null);
var sub_content = (function (p__46323){
var map__46324 = p__46323;
var map__46324__$1 = cljs.core.__destructure_map(map__46324);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46324__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var table_options = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((sortable_QMARK_)?(function (){var G__46325 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"asc",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (column_set_sorting_BANG_.cljs$core$IFn$_invoke$arity$3 ? column_set_sorting_BANG_.cljs$core$IFn$_invoke$arity$3(sorting,column,true) : column_set_sorting_BANG_.call(null,sorting,column,true));
})], null);
var G__46326 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.gap-1","div.flex.flex-row.items-center.gap-1",-1023433319),frontend.ui.icon("arrow-up",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(15)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.table","sort-ascending","view.table/sort-ascending",857164563)], 0))], null)], null);
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__46325,G__46326) : logseq.shui.ui.dropdown_menu_item.call(null,G__46325,G__46326));
})():null),((sortable_QMARK_)?(function (){var G__46327 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"desc",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (column_set_sorting_BANG_.cljs$core$IFn$_invoke$arity$3 ? column_set_sorting_BANG_.cljs$core$IFn$_invoke$arity$3(sorting,column,false) : column_set_sorting_BANG_.call(null,sorting,column,false));
})], null);
var G__46328 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.gap-1","div.flex.flex-row.items-center.gap-1",-1023433319),frontend.ui.icon("arrow-down",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(15)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.table","sort-descending","view.table/sort-descending",-40946257)], 0))], null)], null);
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__46327,G__46328) : logseq.shui.ui.dropdown_menu_item.call(null,G__46327,G__46328));
})():null),(cljs.core.truth_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property))?(function (){var G__46329 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
if(cljs.core.truth_(pinned_QMARK_)){
frontend.handler.db_based.property.delete_property_value_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(view_entity),new cljs.core.Keyword("logseq.property.table","pinned-columns","logseq.property.table/pinned-columns",267375138),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property));
} else {
frontend.handler.property.set_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(view_entity),new cljs.core.Keyword("logseq.property.table","pinned-columns","logseq.property.table/pinned-columns",267375138),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property));
}

return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(id) : logseq.shui.ui.popup_hide_BANG_.call(null,id));
})], null);
var G__46330 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.gap-1","div.flex.flex-row.items-center.gap-1",-1023433319),frontend.ui.icon("pin",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(15)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(pinned_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.table","unpin","view.table/unpin",1706915359)], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.table","pin","view.table/pin",-750908855)], 0)))], null)], null);
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__46329,G__46330) : logseq.shui.ui.dropdown_menu_item.call(null,G__46329,G__46330));
})():null)], null);
var tag = (function (){var temp__5825__auto__ = new cljs.core.Keyword("logseq.property","view-for","logseq.property/view-for",-36274319).cljs$core$IFn$_invoke$arity$1(view_entity);
if(cljs.core.truth_(temp__5825__auto__)){
var entity = temp__5825__auto__;
if(cljs.core.truth_(frontend.util.entity.class_QMARK_(entity))){
return entity;
} else {
return null;
}
} else {
return null;
}
})();
var option = (function (){var G__46332 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-title?","with-title?",-1110963321),false,new cljs.core.Keyword(null,"more-options","more-options",1399478268),table_options], null);
if((!((tag == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46332,new cljs.core.Keyword(null,"class-schema?","class-schema?",508813900),true);
} else {
return G__46332;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-property-dropdown","div.ls-property-dropdown",-263769697),frontend.components.property.config.property_dropdown(property,tag,option)], null);
});
var G__46333 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"h-8 !pl-2 !px-2 !py-0 hover:text-foreground w-full justify-start",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var popup_id = (""+"table-column-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column)));
var temp__5825__auto__ = (function (){var G__46336 = e.target;
if((G__46336 == null)){
return null;
} else {
return G__46336.closest("[aria-roledescription=sortable]");
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
if((((((cljs.core.deref(frontend.components.views._STAR_last_header_action_target) == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(el,cljs.core.deref(frontend.components.views._STAR_last_header_action_target))))) && (clojure.string.blank_QMARK_((function (){var G__46338 = el;
var G__46338__$1 = (((G__46338 == null))?null:G__46338.style);
if((G__46338__$1 == null)){
return null;
} else {
return G__46338__$1.transform;
}
})())))){
var G__46340 = el;
var G__46341 = sub_content;
var G__46342 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),popup_id,new cljs.core.Keyword(null,"align","align",1964212802),"start",new cljs.core.Keyword(null,"as-dropdown?","as-dropdown?",-37553558),true,new cljs.core.Keyword(null,"dropdown-menu?","dropdown-menu?",-682398029),true,new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e__$1){
var temp__5825__auto____$1 = e__$1.target;
if(cljs.core.truth_(temp__5825__auto____$1)){
var target = temp__5825__auto____$1;
if(frontend.components.views.header_dropdown_click_should_hide_QMARK_(target)){
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(popup_id) : logseq.shui.ui.popup_hide_BANG_.call(null,popup_id));
} else {
return null;
}
} else {
return null;
}
})], null),new cljs.core.Keyword(null,"on-before-hide","on-before-hide",782449747),(function (){
cljs.core.reset_BANG_(frontend.components.views._STAR_last_header_action_target,el);

return setTimeout((function (){
return cljs.core.reset_BANG_(frontend.components.views._STAR_last_header_action_target,null);
}),(128));
})], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__46340,G__46341,G__46342) : logseq.shui.ui.popup_show_BANG_.call(null,G__46340,G__46341,G__46342));
} else {
return null;
}
} else {
return null;
}
})], null);
var G__46334 = (function (){var title = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(column)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"class","class",-2030961996),"max-w-full overflow-hidden text-ellipsis"], null),title], null);
})();
var G__46335 = (function (){var G__46343 = asc_QMARK_;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__46343)){
return frontend.ui.icon("arrow-up");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__46343)){
return frontend.ui.icon("arrow-down");
} else {
return null;

}
}
})();
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__46333,G__46334,G__46335) : logseq.shui.ui.button.call(null,G__46333,G__46334,G__46335));
});
frontend.components.views.timestamp_cell_cp = (function frontend$components$views$timestamp_cell_cp(_table,row,column){
var G__46348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column));
if((G__46348 == null)){
return null;
} else {
return frontend.date.int__GT_local_time_2(G__46348);
}
});
frontend.components.views.get_property_value_content = (function frontend$components$views$get_property_value_content(entity){
if(cljs.core.map_QMARK_(entity)){
return logseq.db.frontend.property.property_value_content(entity);
} else {
if((entity instanceof cljs.core.Keyword)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(entity));
} else {
return entity;

}
}
});
frontend.components.views.referenced_filter_value_content = (function (){var render_fn__31744__auto__ = (function frontend$components$views$referenced_filter_value_content(block_uuid){
var G__46353 = frontend.db.hooks.use_block(block_uuid);
if((G__46353 == null)){
return null;
} else {
return frontend.components.views.get_property_value_content(G__46353);
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$referenced_filter_value_content__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46356 = cljs.core.first(args__31746__auto__);
var G__46357 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46356,G__46357) : io.factorhouse.hsx.core.obj_get.call(null,G__46356,G__46357));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"referenced-filter-value-content","referenced-filter-value-content",-1580722582,null),args__31746__auto__),frontend$components$views$referenced_filter_value_content,args__31746__auto__,null);
}
};
var frontend$components$views$referenced_filter_value_content = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47506__i = 0, G__47506__a = new Array(arguments.length -  0);
while (G__47506__i < G__47506__a.length) {G__47506__a[G__47506__i] = arguments[G__47506__i + 0]; ++G__47506__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47506__a,0,null);
} 
return frontend$components$views$referenced_filter_value_content__delegate.call(this,args__31746__auto__);};
frontend$components$views$referenced_filter_value_content.cljs$lang$maxFixedArity = 0;
frontend$components$views$referenced_filter_value_content.cljs$lang$applyTo = (function (arglist__47507){
var args__31746__auto__ = cljs.core.seq(arglist__47507);
return frontend$components$views$referenced_filter_value_content__delegate(args__31746__auto__);
});
frontend$components$views$referenced_filter_value_content.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$referenced_filter_value_content__delegate;
return frontend$components$views$referenced_filter_value_content;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46360 = comp__31745__auto__;
var G__46361 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46360,G__46361) : io.factorhouse.hsx.core.react_memo.call(null,G__46360,G__46361));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"referenced-filter-value-content");

return comp__31745__auto__;
})();
frontend.components.views.filter_value_content = (function frontend$components$views$filter_value_content(value){
var reference_uuid = ((cljs.core.uuid_QMARK_(value))?value:((((cljs.core.map_QMARK_(value)) && ((frontend.components.views.get_property_value_content(value) == null))))?new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(value):null));
if(cljs.core.uuid_QMARK_(reference_uuid)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.views.referenced_filter_value_content,reference_uuid], null);
} else {
return frontend.components.views.get_property_value_content(value);
}
});
frontend.components.views.block_container = (function (){var render_fn__31744__auto__ = (function frontend$components$views$block_container(config,row){
var container = frontend.state.get_component(new cljs.core.Keyword("block","container","block/container",510671002));
var config_SINGLEQUOTE_ = (function (){var G__46364 = config;
if(cljs.core.not(new cljs.core.Keyword(null,"popup?","popup?",-266197002).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46364,new cljs.core.Keyword(null,"view?","view?",655244230),true);
} else {
return G__46364;
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.w-full","div.relative.w-full",1221836632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),(24)], null)], null),(cljs.core.truth_(row)?(container.cljs$core$IFn$_invoke$arity$2 ? container.cljs$core$IFn$_invoke$arity$2(config_SINGLEQUOTE_,row) : container.call(null,config_SINGLEQUOTE_,row)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$block_container__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46367 = cljs.core.first(args__31746__auto__);
var G__46368 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46367,G__46368) : io.factorhouse.hsx.core.obj_get.call(null,G__46367,G__46368));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"block-container","block-container",1625463292,null),args__31746__auto__),frontend$components$views$block_container,args__31746__auto__,null);
}
};
var frontend$components$views$block_container = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47508__i = 0, G__47508__a = new Array(arguments.length -  0);
while (G__47508__i < G__47508__a.length) {G__47508__a[G__47508__i] = arguments[G__47508__i + 0]; ++G__47508__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47508__a,0,null);
} 
return frontend$components$views$block_container__delegate.call(this,args__31746__auto__);};
frontend$components$views$block_container.cljs$lang$maxFixedArity = 0;
frontend$components$views$block_container.cljs$lang$applyTo = (function (arglist__47509){
var args__31746__auto__ = cljs.core.seq(arglist__47509);
return frontend$components$views$block_container__delegate(args__31746__auto__);
});
frontend$components$views$block_container.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$block_container__delegate;
return frontend$components$views$block_container;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46369 = comp__31745__auto__;
var G__46370 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46369,G__46370) : io.factorhouse.hsx.core.react_memo.call(null,G__46369,G__46370));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"block-container");

return comp__31745__auto__;
})();
frontend.components.views.save_block_and_focus = (function frontend$components$views$save_block_and_focus(_STAR_ref,set_focus_timeout_BANG_,hide_popup_QMARK_){
var node = logseq.shui.hooks.deref(_STAR_ref);
var cell = frontend.util.rec_get_node(node,"ls-table-cell");
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0()),(function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(hide_popup_QMARK_)?(logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null)):null)),(function (___21901__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell], null))),(function (___21901__auto____$2){
return promesa.protocols._promise((function (){var G__46380 = setTimeout((function (){
return cell.focus();
}),(100));
return (set_focus_timeout_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_focus_timeout_BANG_.cljs$core$IFn$_invoke$arity$1(G__46380) : set_focus_timeout_BANG_.call(null,G__46380));
})());
}));
}));
}));
}));
});
/**
 * The sole purpose of this function is to avoid false positives in hardcoded UI detection.
 */
frontend.components.views.mobile_btn_class = (function frontend$components$views$mobile_btn_class(opacity){
return (""+"h-6 w-6 !p-1 text-muted-foreground transition-opacity duration-100 ease-in bg-gray-01 opacity-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(opacity));
});
frontend.components.views.first_window_title_text = (function frontend$components$views$first_window_title_text(block){
var G__46383 = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block);
var G__46383__$1 = (((G__46383 == null))?null:(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46383)));
var G__46383__$2 = (((G__46383__$1 == null))?null:clojure.string.trim(G__46383__$1));
var G__46383__$3 = (((G__46383__$2 == null))?null:clojure.string.split_lines(G__46383__$2));
if((G__46383__$3 == null)){
return null;
} else {
return cljs.core.first(G__46383__$3);
}
});
frontend.components.views.first_window_title_preview_QMARK_ = (function frontend$components$views$first_window_title_preview_QMARK_(block){
return new cljs.core.Keyword("block.temp","first-window-preview?","block.temp/first-window-preview?",1357846098).cljs$core$IFn$_invoke$arity$1(block) === true;
});
/**
 * Tags/Movies first paint spent block-title hooks on every preview row.
 */
frontend.components.views.first_window_block_title = (function frontend$components$views$first_window_block_title(block){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-block-title.relative.flex.items-center.w-full.h-full.cursor-pointer","div.table-block-title.relative.flex.items-center.w-full.h-full.cursor-pointer",1951925648),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row","div.flex.flex-row",209103675),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.components.views.first_window_title_text(block)], null)], null)], null);
});
/**
 * List view first paint should show the preview title before full block hydration.
 */
frontend.components.views.first_window_list_block = (function frontend$components$views$first_window_list_block(block){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-block.flex.flex-row.items-center","div.ls-block.flex.flex-row.items-center",592821411),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),(24)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block-content","div.block-content",-2073822457),frontend.components.views.first_window_title_text(block)], null)], null);
});
/**
 * Used on table view
 */
frontend.components.views.block_title_interactive = (function (){var render_fn__31744__auto__ = (function frontend$components$views$block_title_interactive(block_STAR_,p__46386){
var map__46387 = p__46386;
var map__46387__$1 = cljs.core.__destructure_map(map__46387);
var create_new_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46387__$1,new cljs.core.Keyword(null,"create-new-block","create-new-block",1377747253));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46387__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46387__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var property = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46387__$1,new cljs.core.Keyword(null,"property","property",-1114278232));
var _STAR_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var vec__46388 = logseq.shui.hooks.use_state((0));
var opacity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46388,(0),null);
var set_opacity_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46388,(1),null);
var vec__46391 = logseq.shui.hooks.use_state(null);
var focus_timeout = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46391,(0),null);
var set_focus_timeout_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46391,(1),null);
var inline_title = frontend.state.get_component(new cljs.core.Keyword("block","inline-title","block/inline-title",984777401));
var many_QMARK_ = logseq.db.frontend.property.many_QMARK_(property);
var block = ((many_QMARK_)?cljs.core.first(block_STAR_):block_STAR_);
var add_to_sidebar_BANG_ = (function (){
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),(function (){var or__5142__auto__ = (function (){var and__5140__auto__ = many_QMARK_;
if(and__5140__auto__){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(row);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
}
})(),new cljs.core.Keyword(null,"block","block",664686210));
});
var redirect_BANG_ = (function (){
var G__46398 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
if((G__46398 == null)){
return null;
} else {
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(G__46398);
}
});
logseq.shui.hooks.use_effect_BANG_((function (){
return (function (){
var G__46399 = focus_timeout;
if((G__46399 == null)){
return null;
} else {
return clearTimeout(G__46399);
}
});
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-block-title.relative.flex.items-center.w-full.h-full.cursor-pointer.items-center","div.table-block-title.relative.flex.items-center.w-full.h-full.cursor-pointer.items-center",1387579742),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_ref,new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (){
return (set_opacity_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_opacity_BANG_.cljs$core$IFn$_invoke$arity$1((100)) : set_opacity_BANG_.call(null,(100)));
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (){
return (set_opacity_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_opacity_BANG_.cljs$core$IFn$_invoke$arity$1((0)) : set_opacity_BANG_.call(null,(0)));
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = block;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto__ = cljs.core.fn_QMARK_(create_new_block);
if(and__5140__auto__){
return (create_new_block.cljs$core$IFn$_invoke$arity$0 ? create_new_block.cljs$core$IFn$_invoke$arity$0() : create_new_block.call(null));
} else {
return and__5140__auto__;
}
}
})()),(function (block__$1){
return promesa.protocols._promise((cljs.core.truth_(block__$1)?(cljs.core.truth_((function (){var or__5142__auto__ = frontend.util.meta_key_QMARK_(e);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.util.mobile_QMARK_();
}
})())?redirect_BANG_():(cljs.core.truth_(e.shiftKey)?add_to_sidebar_BANG_():(function (){var popup = (function (){
var width__$1 = (cljs.core.max.cljs$core$IFn$_invoke$arity$2((160),width) - (18));
if(many_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-table-block","div.ls-table-block",1510860318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"max-width","max-width",-1939924051),width__$1], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.util.stop_propagation], null),frontend.components.property.value.property_value(row,property,cljs.core.PersistentArrayMap.EMPTY)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-table-block","div.ls-table-block",1510860318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"max-width","max-width",-1939924051),width__$1], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.util.stop_propagation], null),frontend.components.views.block_container(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"popup?","popup?",-266197002),true,new cljs.core.Keyword(null,"view?","view?",655244230),true,new cljs.core.Keyword(null,"table-block-title?","table-block-title?",-1188462014),true,new cljs.core.Keyword(null,"table?","table?",-1064705406),true,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e__$1){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.ekey(e__$1),"Enter")) && (cljs.core.not(frontend.state.get_editor_action())))){
frontend.util.stop(e__$1);

return frontend.components.views.save_block_and_focus(_STAR_ref,set_focus_timeout_BANG_,true);
} else {
return null;
}
})], null),block__$1)], null);
}
});
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__46415 = e.target.closest(".ls-table-cell");
var G__46416 = popup;
var G__46417 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ls-table-block-editor","ls-table-block-editor",-2091588140),new cljs.core.Keyword(null,"as-mask?","as-mask?",1898009773),true,new cljs.core.Keyword(null,"on-after-hide","on-after-hide",-1040754229),(function (){
return frontend.components.views.save_block_and_focus(_STAR_ref,set_focus_timeout_BANG_,false);
})], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__46415,G__46416,G__46417) : logseq.shui.ui.popup_show_BANG_.call(null,G__46415,G__46416,G__46417));
})()),(function (___21901__auto__){
return promesa.protocols._promise((function (){var G__46418 = block__$1;
var G__46419 = new cljs.core.Keyword(null,"max","max",61366548);
var G__46420 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container-id","container-id",1274665684),new cljs.core.Keyword(null,"unknown-container","unknown-container",1739831473)], null);
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__46418,G__46419,G__46420) : frontend.handler.editor.edit_block_BANG_.call(null,G__46418,G__46419,G__46420));
})());
}));
}));
})()
)):null));
}));
}));
})], null),(cljs.core.truth_(block)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row","div.flex.flex-row",209103675),(function (){var render = (function (block__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((frontend.components.views.first_window_title_preview_QMARK_(block__$1))?frontend.components.views.first_window_title_text(block__$1):(function (){var G__46421 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table?","table?",-1064705406),true,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block__$1)], null);
var G__46422 = frontend.components.views.first_window_title_text(block__$1);
return (inline_title.cljs$core$IFn$_invoke$arity$2 ? inline_title.cljs$core$IFn$_invoke$arity$2(G__46421,G__46422) : inline_title.call(null,G__46421,G__46422));
})())], null);
});
if(many_QMARK_){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mr-1","div.mr-1",470602940),","], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(render,block_STAR_));
} else {
return render(block_STAR_);
}
})()], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null)),((((cljs.core.not(frontend.util.mobile_QMARK_())) && ((!(frontend.components.views.first_window_title_preview_QMARK_(block))))))?(function (){var class$ = frontend.components.views.mobile_btn_class(opacity);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.absolute.-right-1","div.absolute.-right-1",-872160496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center","div.flex.flex-row.items-center",2086153476),(function (){var G__46425 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","open","ui/open",-1763599412)], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop_propagation(e);

return redirect_BANG_();
}),new cljs.core.Keyword(null,"class","class",-2030961996),class$], null);
var G__46426 = frontend.ui.icon("arrow-right");
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__46425,G__46426) : logseq.shui.ui.button.call(null,G__46425,G__46426));
})(),(function (){var G__46429 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sidebar.right","open","sidebar.right/open",1036509782)], 0)),new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop_propagation(e);

return add_to_sidebar_BANG_();
})], null);
var G__46430 = frontend.ui.icon("layout-sidebar-right");
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__46429,G__46430) : logseq.shui.ui.button.call(null,G__46429,G__46430));
})()], null)], null);
})():null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$block_title_interactive__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46431 = cljs.core.first(args__31746__auto__);
var G__46432 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46431,G__46432) : io.factorhouse.hsx.core.obj_get.call(null,G__46431,G__46432));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"block-title-interactive","block-title-interactive",1593028546,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$views$block_title_interactive,args__31746__auto__,null);
}
};
var frontend$components$views$block_title_interactive = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47532__i = 0, G__47532__a = new Array(arguments.length -  0);
while (G__47532__i < G__47532__a.length) {G__47532__a[G__47532__i] = arguments[G__47532__i + 0]; ++G__47532__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47532__a,0,null);
} 
return frontend$components$views$block_title_interactive__delegate.call(this,args__31746__auto__);};
frontend$components$views$block_title_interactive.cljs$lang$maxFixedArity = 0;
frontend$components$views$block_title_interactive.cljs$lang$applyTo = (function (arglist__47534){
var args__31746__auto__ = cljs.core.seq(arglist__47534);
return frontend$components$views$block_title_interactive__delegate(args__31746__auto__);
});
frontend$components$views$block_title_interactive.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$block_title_interactive__delegate;
return frontend$components$views$block_title_interactive;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46437 = comp__31745__auto__;
var G__46438 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46437,G__46438) : io.factorhouse.hsx.core.react_memo.call(null,G__46437,G__46438));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"block-title-interactive");

return comp__31745__auto__;
})();
frontend.components.views.block_title = (function frontend$components$views$block_title(block_STAR_,opts){
var block = ((logseq.db.frontend.property.many_QMARK_(new cljs.core.Keyword(null,"property","property",-1114278232).cljs$core$IFn$_invoke$arity$1(opts)))?cljs.core.first(block_STAR_):block_STAR_);
if(frontend.components.views.first_window_title_preview_QMARK_(block)){
return frontend.components.views.first_window_block_title(block);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.views.block_title_interactive,block_STAR_,opts], null);
}
});
frontend.components.views.page_column = (function frontend$components$views$page_column(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword(null,"name","name",1843675177),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.table","page","view.table/page",-465242796)], 0)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"sortable?","sortable?",291547474),false,new cljs.core.Keyword(null,"header","header",119441134),frontend.components.views.header_cp,new cljs.core.Keyword(null,"cell","cell",764245084),(function (_table,row,_column){
var temp__5825__auto__ = new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(row);
if(cljs.core.truth_(temp__5825__auto__)){
var page = temp__5825__auto__;
var temp__5825__auto____$1 = frontend.state.get_component(new cljs.core.Keyword("block","page-cp","block/page-cp",975876274));
if(cljs.core.truth_(temp__5825__auto____$1)){
var page_cp = temp__5825__auto____$1;
var G__46442 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disable-preview?","disable-preview?",1485814365),true,new cljs.core.Keyword(null,"skip-async-load?","skip-async-load?",168412205),true], null);
var G__46443 = page;
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__46442,G__46443) : page_cp.call(null,G__46442,G__46443));
} else {
return null;
}
} else {
return null;
}
})], null);
});
frontend.components.views.build_columns = (function frontend$components$views$build_columns(var_args){
var args__5882__auto__ = [];
var len__5876__auto___47537 = arguments.length;
var i__5877__auto___47538 = (0);
while(true){
if((i__5877__auto___47538 < len__5876__auto___47537)){
args__5882__auto__.push((arguments[i__5877__auto___47538]));

var G__47539 = (i__5877__auto___47538 + (1));
i__5877__auto___47538 = G__47539;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return frontend.components.views.build_columns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(frontend.components.views.build_columns.cljs$core$IFn$_invoke$arity$variadic = (function (config,properties,p__46448){
var map__46449 = p__46448;
var map__46449__$1 = cljs.core.__destructure_map(map__46449);
var with_object_name_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46449__$1,new cljs.core.Keyword(null,"with-object-name?","with-object-name?",1288972903),true);
var with_id_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46449__$1,new cljs.core.Keyword(null,"with-id?","with-id?",1405069912),true);
var add_tags_column_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46449__$1,new cljs.core.Keyword(null,"add-tags-column?","add-tags-column?",708044916),true);
var add_page_column_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46449__$1,new cljs.core.Keyword(null,"add-page-column?","add-page-column?",266377061));
var advanced_query_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46449__$1,new cljs.core.Keyword(null,"advanced-query?","advanced-query?",692769688));
var properties_SINGLEQUOTE_ = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (property){
return (((property == null)) || (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.property","hide?","logseq.property/hide?",68365746),null], null), null),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property))));
}),(cljs.core.truth_((function (){var or__5142__auto__ = cljs.core.some((function (p1__46444_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(p1__46444_SHARP_),new cljs.core.Keyword("block","tags","block/tags",1814948340));
}),properties);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.not(add_tags_column_QMARK_);
}
})())?properties:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(properties,frontend.components.views.built_in_property(new cljs.core.Keyword("block","tags","block/tags",1814948340)))));
var property_keys = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096),properties_SINGLEQUOTE_));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"name","name",1843675177),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.table","select-column","view.table/select-column",-1219163660)], 0)),new cljs.core.Keyword(null,"header","header",119441134),(function (table,_column){
return frontend.components.views.header_checkbox(table);
}),new cljs.core.Keyword(null,"cell","cell",764245084),(function (table,row,column){
return frontend.components.views.row_checkbox(table,row,column);
}),new cljs.core.Keyword(null,"column-list?","column-list?",-538229318),false,new cljs.core.Keyword(null,"resizable?","resizable?",20635134),false], null),(cljs.core.truth_(with_id_QMARK_)?new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),"#",new cljs.core.Keyword(null,"header","header",119441134),(function (_table,_column){
return frontend.components.views.header_index();
}),new cljs.core.Keyword(null,"cell","cell",764245084),(function (table,row,_column){
return (new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(table).indexOf(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(row)) + (1));
}),new cljs.core.Keyword(null,"resizable?","resizable?",20635134),false], null):null),(cljs.core.truth_(with_object_name_QMARK_)?new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword(null,"name","name",1843675177),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.table","name-column","view.table/name-column",1477956303)], 0)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"header","header",119441134),frontend.components.views.header_cp,new cljs.core.Keyword(null,"cell","cell",764245084),(function (_table,row,_column,style){
return frontend.components.views.block_title(row,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"property-ident","property-ident",697145839),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(style)], null));
}),new cljs.core.Keyword(null,"disable-hide?","disable-hide?",-1203602151),true], null):null)], null),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (property){
var temp__5825__auto__ = (function (){var or__5142__auto__ = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(property);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var ident = temp__5825__auto__;
if(cljs.core.truth_((function (){var or__5142__auto__ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),null,new cljs.core.Keyword("logseq.property.asset","checksum","logseq.property.asset/checksum",-1011416979),null,new cljs.core.Keyword("logseq.property.class","properties","logseq.property.class/properties",-2123712050),null,new cljs.core.Keyword("block","created-at","block/created-at",1440015),null,new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),null,new cljs.core.Keyword("logseq.property","built-in?","logseq.property/built-in?",-1125958160),null,new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267),null,new cljs.core.Keyword("block","order","block/order",-1429282437),null], null), null),ident);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (function (){var and__5140__auto__ = with_object_name_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","title","block/title",710445684),ident);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entity","entity",-450970276),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property));
}
}
})())){
return null;
} else {
var property__$1 = (cljs.core.truth_(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property))?property:(function (){var or__5142__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.components.views.built_in_property(ident),property], 0));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return property;
}
})());
var get_value = (cljs.core.truth_(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property__$1))?(function (row){
return logseq.db.common.view.get_property_value_for_search(row,property__$1);
}):null);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),ident,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(property__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.db.frontend.property.built_in_display_title(property__$1,frontend.context.i18n.t);
}
})(),new cljs.core.Keyword(null,"property","property",-1114278232),property__$1,new cljs.core.Keyword(null,"header","header",119441134),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(property__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.components.views.header_cp;
}
})(),new cljs.core.Keyword(null,"cell","cell",764245084),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"cell","cell",764245084).cljs$core$IFn$_invoke$arity$1(property__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.truth_(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property__$1))){
return (function (_table,row,_column,style){
return frontend.components.property.value.property_value(row,property__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"view?","view?",655244230),true,new cljs.core.Keyword(null,"table-view?","table-view?",2073887505),true,new cljs.core.Keyword(null,"view-parent","view-parent",675596601),new cljs.core.Keyword(null,"view-parent","view-parent",675596601).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"table-text-property-render","table-text-property-render",-261105507),(function (block,opts){
return frontend.components.views.block_title(block,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"row","row",-570139521),row,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"property","property",-1114278232),property__$1,new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(style),new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672).cljs$core$IFn$_invoke$arity$1(config)], 0)));
})], null));
});
} else {
return null;
}
}
})(),new cljs.core.Keyword(null,"get-value","get-value",2108514284),get_value,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(property__$1)], null);
}
} else {
return null;
}
}),properties_SINGLEQUOTE_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__5142__auto__ = cljs.core.not(advanced_query_QMARK_);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto__ = advanced_query_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (property_keys.cljs$core$IFn$_invoke$arity$1 ? property_keys.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","created-at","block/created-at",1440015)) : property_keys.call(null,new cljs.core.Keyword("block","created-at","block/created-at",1440015)));
} else {
return and__5140__auto__;
}
}
})())?new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("block","created-at","block/created-at",1440015),new cljs.core.Keyword(null,"name","name",1843675177),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","created-at","page/created-at",-84781299)], 0)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"datetime","datetime",494675702),new cljs.core.Keyword(null,"header","header",119441134),frontend.components.views.header_cp,new cljs.core.Keyword(null,"cell","cell",764245084),frontend.components.views.timestamp_cell_cp], null):null),(cljs.core.truth_((function (){var or__5142__auto__ = cljs.core.not(advanced_query_QMARK_);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto__ = advanced_query_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (property_keys.cljs$core$IFn$_invoke$arity$1 ? property_keys.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551)) : property_keys.call(null,new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551)));
} else {
return and__5140__auto__;
}
}
})())?new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),new cljs.core.Keyword(null,"name","name",1843675177),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","updated-at","page/updated-at",-1598282641)], 0)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"datetime","datetime",494675702),new cljs.core.Keyword(null,"header","header",119441134),frontend.components.views.header_cp,new cljs.core.Keyword(null,"cell","cell",764245084),frontend.components.views.timestamp_cell_cp], null):null),(cljs.core.truth_(add_page_column_QMARK_)?frontend.components.views.page_column():null)], null)], 0)));
}));

(frontend.components.views.build_columns.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.components.views.build_columns.cljs$lang$applyTo = (function (seq46445){
var G__46446 = cljs.core.first(seq46445);
var seq46445__$1 = cljs.core.next(seq46445);
var G__46447 = cljs.core.first(seq46445__$1);
var seq46445__$2 = cljs.core.next(seq46445__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46446,G__46447,seq46445__$2);
}));

frontend.components.views.sort_columns = (function frontend$components$views$sort_columns(columns,ordered_column_ids){
if(cljs.core.seq(ordered_column_ids)){
var id__GT_columns = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),columns),columns);
var distinct_ordered_ids = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(ordered_column_ids);
var ordered_id_set = cljs.core.set(distinct_ordered_ids);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(id__GT_columns,id);
}),distinct_ordered_ids),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (column){
var G__46453 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column);
return (ordered_id_set.cljs$core$IFn$_invoke$arity$1 ? ordered_id_set.cljs$core$IFn$_invoke$arity$1(G__46453) : ordered_id_set.call(null,G__46453));
}),columns));
} else {
return columns;
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.views !== 'undefined') && (typeof frontend.components.views.groups_sort_by_options !== 'undefined')){
} else {
frontend.components.views.groups_sort_by_options = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view.table","group-journal-date","view.table/group-journal-date",-532957140),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view.table","group-page-name","view.table/group-page-name",-1694913838),new cljs.core.Keyword("block","title","block/title",710445684)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view.table","group-page-updated-date","view.table/group-page-updated-date",-1555754120),new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view.table","group-page-created-date","view.table/group-page-created-date",-2090131615),new cljs.core.Keyword("block","created-at","block/created-at",1440015)], null)], null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.views !== 'undefined') && (typeof frontend.components.views.groups_sort_by_name__GT_property_identity !== 'undefined')){
} else {
frontend.components.views.groups_sort_by_name__GT_property_identity = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,frontend.components.views.groups_sort_by_options);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.views !== 'undefined') && (typeof frontend.components.views.groups_sort_by_property_identity__GT_name !== 'undefined')){
} else {
frontend.components.views.groups_sort_by_property_identity__GT_name = clojure.set.map_invert(frontend.components.views.groups_sort_by_name__GT_property_identity);
}
frontend.components.views.groupable_property_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"date","date",-1463434462),null,new cljs.core.Keyword(null,"number","number",1570378438),null,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),null,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"node","node",581201198),null,new cljs.core.Keyword(null,"class","class",-2030961996),null,new cljs.core.Keyword(null,"url","url",276297046),null], null), null);
frontend.components.views.groupable_many_property_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"node","node",581201198),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null), null);
frontend.components.views.group_by_column_QMARK_ = (function frontend$components$views$group_by_column_QMARK_(column){
var temp__5825__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column);
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
var or__5142__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword("block","page","block/page",822314108));
if(or__5142__auto__){
return or__5142__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword("block","title","block/title",710445684))){
return null;
} else {
var property = frontend.components.views.column_property(column);
return ((cljs.core.contains_QMARK_(frontend.components.views.groupable_property_types,new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property))) && ((((!(logseq.db.frontend.property.many_QMARK_(property)))) || (cljs.core.contains_QMARK_(frontend.components.views.groupable_many_property_types,new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property))))));
}
}
} else {
return null;
}
});
frontend.components.views.set_view_property_BANG_ = (function frontend$components$views$set_view_property_BANG_(view_entity,property_ident,value){
return frontend.handler.property.set_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(view_entity),property_ident,value);
});
frontend.components.views._LT_property_ident__GT_id = (function frontend$components$views$_LT_property_ident__GT_id(property_ident){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null),property_ident], 0))),(function (property){
return promesa.protocols._promise(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property));
}));
}));
});
frontend.components.views.gallery_cover_property_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"asset","asset",-280274466),null], null), null);
frontend.components.views.gallery_default_card_dimensions = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(220),new cljs.core.Keyword(null,"height","height",1025178622),(320)], null);
frontend.components.views.gallery_compact_card_dimensions = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(160),new cljs.core.Keyword(null,"height","height",1025178622),(232)], null);
frontend.components.views.gallery_min_card_dimension = (100);
frontend.components.views.gallery_max_card_dimension = (1024);
frontend.components.views.clamp_gallery_card_dimension = (function frontend$components$views$clamp_gallery_card_dimension(value){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(cljs.core.max.cljs$core$IFn$_invoke$arity$2(value,frontend.components.views.gallery_min_card_dimension),frontend.components.views.gallery_max_card_dimension);
});
frontend.components.views.gallery_column_ident = (function frontend$components$views$gallery_column_ident(column){
var or__5142__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(column);
}
});
frontend.components.views.gallery_column_property = (function frontend$components$views$gallery_column_property(column){
if(cljs.core.truth_(new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(column))){
return column;
} else {
if(cljs.core.truth_(frontend.components.views.gallery_column_ident(column))){
return frontend.components.views.column_property(column);
} else {
return null;
}
}
});
/**
 * Asset and URL properties can supply a gallery card cover.
 */
frontend.components.views.gallery_cover_property_column_QMARK_ = (function frontend$components$views$gallery_cover_property_column_QMARK_(column){
return cljs.core.contains_QMARK_(frontend.components.views.gallery_cover_property_types,new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(frontend.components.views.gallery_column_property(column)));
});
frontend.components.views.gallery_asset_columns = (function frontend$components$views$gallery_asset_columns(columns){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(frontend.components.views.gallery_cover_property_column_QMARK_,columns);
});
frontend.components.views.gallery_asset_property_idents = (function frontend$components$views$gallery_asset_property_idents(columns){
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(frontend.components.views.gallery_column_ident,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(frontend.components.views.gallery_cover_property_column_QMARK_,columns)));
});
frontend.components.views.gallery_asset_property_ident = (function frontend$components$views$gallery_asset_property_ident(view,columns){
var configured_ident = new cljs.core.Keyword("logseq.property.view","gallery-asset-property-ident","logseq.property.view/gallery-asset-property-ident",1795561010).cljs$core$IFn$_invoke$arity$1(view);
var view_for = new cljs.core.Keyword("logseq.property","view-for","logseq.property/view-for",-36274319).cljs$core$IFn$_invoke$arity$1(view);
var feature_type = new cljs.core.Keyword("logseq.property.view","feature-type","logseq.property.view/feature-type",-939141871).cljs$core$IFn$_invoke$arity$1(view);
var asset_tag_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.class","Asset","logseq.class/Asset",-797502970),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(view_for));
var tag_view_QMARK_ = (function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"class-objects","class-objects",1489112646),feature_type);
if(and__5140__auto__){
return frontend.util.entity.class_QMARK_(view_for);
} else {
return and__5140__auto__;
}
})();
var query_view_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"query-result","query-result",-833644142),feature_type);
if(asset_tag_QMARK_){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552);
} else {
if(cljs.core.truth_(configured_ident)){
return configured_ident;
} else {
if(cljs.core.truth_((function (){var or__5142__auto__ = tag_view_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return query_view_QMARK_;
}
})())){
var asset_idents = frontend.components.views.gallery_asset_property_idents(columns);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(asset_idents))){
return cljs.core.first(asset_idents);
} else {
return null;
}
} else {
return null;
}
}
}
});
frontend.components.views.gallery_display_property_idents = (function frontend$components$views$gallery_display_property_idents(view,columns,asset_property_ident){
var configured_idents = cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("logseq.property.view","gallery-display-properties","logseq.property.view/gallery-display-properties",-1806706688).cljs$core$IFn$_invoke$arity$1(view)));
var display_idents = ((cljs.core.seq(configured_idents))?cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(configured_idents,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(frontend.components.views.gallery_column_ident,columns))):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","title","block/title",710445684)], null));
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([asset_property_ident,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"select","select",1147833503)]),display_idents));
});
frontend.components.views.gallery_card_dimensions = (function frontend$components$views$gallery_card_dimensions(view){
var G__46466 = new cljs.core.Keyword("logseq.property.view","gallery-card-size","logseq.property.view/gallery-card-size",-2012816833).cljs$core$IFn$_invoke$arity$1(view);
var G__46466__$1 = (((G__46466 instanceof cljs.core.Keyword))?G__46466.fqn:null);
switch (G__46466__$1) {
case "compact":
return frontend.components.views.gallery_compact_card_dimensions;

break;
case "custom":
var width = new cljs.core.Keyword("logseq.property.view","gallery-card-width","logseq.property.view/gallery-card-width",-1403296395).cljs$core$IFn$_invoke$arity$1(view);
var height = new cljs.core.Keyword("logseq.property.view","gallery-card-height","logseq.property.view/gallery-card-height",-434220832).cljs$core$IFn$_invoke$arity$1(view);
if(((typeof width === 'number') && (((typeof height === 'number') && ((((width > (0))) && ((height > (0))))))))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),frontend.components.views.clamp_gallery_card_dimension(width),new cljs.core.Keyword(null,"height","height",1025178622),frontend.components.views.clamp_gallery_card_dimension(height)], null);
} else {
return frontend.components.views.gallery_default_card_dimensions;
}

break;
default:
return frontend.components.views.gallery_default_card_dimensions;

}
});
frontend.components.views.set_gallery_display_properties_BANG_ = (function frontend$components$views$set_gallery_display_properties_BANG_(view_entity,property_idents){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.components.views._LT_property_ident__GT_id,property_idents))),(function (property_ids){
return promesa.protocols._promise(frontend.components.views.set_view_property_BANG_(view_entity,new cljs.core.Keyword("logseq.property.view","gallery-display-properties","logseq.property.view/gallery-display-properties",-1806706688),cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,property_ids))));
}));
}));
});
frontend.components.views.gallery_display_properties_menu = (function frontend$components$views$gallery_display_properties_menu(view_entity,columns){
var asset_property_ident = frontend.components.views.gallery_asset_property_ident(view_entity,columns);
var display_property_idents = cljs.core.set(frontend.components.views.gallery_display_property_idents(view_entity,columns,asset_property_ident));
var property_columns = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__46469_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc([asset_property_ident,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"select","select",1147833503)]),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__46469_SHARP_));
}),columns);
var G__46473 = (function (){var G__46475 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.gallery","display-properties","view.gallery/display-properties",643302880)], 0));
return (logseq.shui.ui.dropdown_menu_sub_trigger.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dropdown_menu_sub_trigger.cljs$core$IFn$_invoke$arity$1(G__46475) : logseq.shui.ui.dropdown_menu_sub_trigger.call(null,G__46475));
})();
var G__46474 = (function (){var G__46476 = (function (){var iter__5628__auto__ = (function frontend$components$views$gallery_display_properties_menu_$_iter__46477(s__46478){
return (new cljs.core.LazySeq(null,(function (){
var s__46478__$1 = s__46478;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__46478__$1);
if(temp__5825__auto__){
var s__46478__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46478__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__46478__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__46480 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__46479 = (0);
while(true){
if((i__46479 < size__5627__auto__)){
var column = cljs.core._nth(c__5626__auto__,i__46479);
cljs.core.chunk_append(b__46480,(function (){var G__46481 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"gallery-display-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column))),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(display_property_idents,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column)),new cljs.core.Keyword(null,"onCheckedChange","onCheckedChange",842153815),((function (i__46479,column,c__5626__auto__,size__5627__auto__,b__46480,s__46478__$2,temp__5825__auto__,G__46473,asset_property_ident,display_property_idents,property_columns){
return (function (checked_QMARK_){
var new_idents = (cljs.core.truth_(checked_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(display_property_idents,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column)):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(display_property_idents,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column)));
return frontend.components.views.set_gallery_display_properties_BANG_(view_entity,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new_idents,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),property_columns)));
});})(i__46479,column,c__5626__auto__,size__5627__auto__,b__46480,s__46478__$2,temp__5825__auto__,G__46473,asset_property_ident,display_property_idents,property_columns))
,new cljs.core.Keyword(null,"onSelect","onSelect",251862405),((function (i__46479,column,c__5626__auto__,size__5627__auto__,b__46480,s__46478__$2,temp__5825__auto__,G__46473,asset_property_ident,display_property_idents,property_columns){
return (function (e){
return e.preventDefault();
});})(i__46479,column,c__5626__auto__,size__5627__auto__,b__46480,s__46478__$2,temp__5825__auto__,G__46473,asset_property_ident,display_property_idents,property_columns))
], null);
var G__46482 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(column);
return (logseq.shui.ui.dropdown_menu_checkbox_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_checkbox_item.cljs$core$IFn$_invoke$arity$2(G__46481,G__46482) : logseq.shui.ui.dropdown_menu_checkbox_item.call(null,G__46481,G__46482));
})());

var G__47541 = (i__46479 + (1));
i__46479 = G__47541;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46480),frontend$components$views$gallery_display_properties_menu_$_iter__46477(cljs.core.chunk_rest(s__46478__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46480),null);
}
} else {
var column = cljs.core.first(s__46478__$2);
return cljs.core.cons((function (){var G__46491 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"gallery-display-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column))),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(display_property_idents,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column)),new cljs.core.Keyword(null,"onCheckedChange","onCheckedChange",842153815),((function (column,s__46478__$2,temp__5825__auto__,G__46473,asset_property_ident,display_property_idents,property_columns){
return (function (checked_QMARK_){
var new_idents = (cljs.core.truth_(checked_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(display_property_idents,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column)):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(display_property_idents,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column)));
return frontend.components.views.set_gallery_display_properties_BANG_(view_entity,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new_idents,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),property_columns)));
});})(column,s__46478__$2,temp__5825__auto__,G__46473,asset_property_ident,display_property_idents,property_columns))
,new cljs.core.Keyword(null,"onSelect","onSelect",251862405),((function (column,s__46478__$2,temp__5825__auto__,G__46473,asset_property_ident,display_property_idents,property_columns){
return (function (e){
return e.preventDefault();
});})(column,s__46478__$2,temp__5825__auto__,G__46473,asset_property_ident,display_property_idents,property_columns))
], null);
var G__46492 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(column);
return (logseq.shui.ui.dropdown_menu_checkbox_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_checkbox_item.cljs$core$IFn$_invoke$arity$2(G__46491,G__46492) : logseq.shui.ui.dropdown_menu_checkbox_item.call(null,G__46491,G__46492));
})(),frontend$components$views$gallery_display_properties_menu_$_iter__46477(cljs.core.rest(s__46478__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(property_columns);
})();
return (logseq.shui.ui.dropdown_menu_sub_content.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dropdown_menu_sub_content.cljs$core$IFn$_invoke$arity$1(G__46476) : logseq.shui.ui.dropdown_menu_sub_content.call(null,G__46476));
})();
return (logseq.shui.ui.dropdown_menu_sub.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_sub.cljs$core$IFn$_invoke$arity$2(G__46473,G__46474) : logseq.shui.ui.dropdown_menu_sub.call(null,G__46473,G__46474));
});
frontend.components.views.gallery_asset_property_menu = (function frontend$components$views$gallery_asset_property_menu(view_entity,columns){
var asset_columns = cljs.core.seq(frontend.components.views.gallery_asset_columns(columns));
if(asset_columns){
var asset_property_ident = frontend.components.views.gallery_asset_property_ident(view_entity,columns);
var G__46494 = (function (){var G__46496 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.gallery","cover-property","view.gallery/cover-property",1440050893)], 0));
return (logseq.shui.ui.dropdown_menu_sub_trigger.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dropdown_menu_sub_trigger.cljs$core$IFn$_invoke$arity$1(G__46496) : logseq.shui.ui.dropdown_menu_sub_trigger.call(null,G__46496));
})();
var G__46495 = (function (){var G__46497 = (function (){var iter__5628__auto__ = (function frontend$components$views$gallery_asset_property_menu_$_iter__46498(s__46499){
return (new cljs.core.LazySeq(null,(function (){
var s__46499__$1 = s__46499;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__46499__$1);
if(temp__5825__auto__){
var s__46499__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46499__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__46499__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__46501 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__46500 = (0);
while(true){
if((i__46500 < size__5627__auto__)){
var column = cljs.core._nth(c__5626__auto__,i__46500);
cljs.core.chunk_append(b__46501,(function (){var G__46504 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"gallery-asset-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column))),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(asset_property_ident,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column)),new cljs.core.Keyword(null,"onCheckedChange","onCheckedChange",842153815),((function (i__46500,column,c__5626__auto__,size__5627__auto__,b__46501,s__46499__$2,temp__5825__auto__,G__46494,asset_property_ident,asset_columns){
return (function (checked_QMARK_){
if(cljs.core.truth_(checked_QMARK_)){
return frontend.components.views.set_view_property_BANG_(view_entity,new cljs.core.Keyword("logseq.property.view","gallery-asset-property","logseq.property.view/gallery-asset-property",1668346890),frontend.components.views._LT_property_ident__GT_id(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column)));
} else {
return null;
}
});})(i__46500,column,c__5626__auto__,size__5627__auto__,b__46501,s__46499__$2,temp__5825__auto__,G__46494,asset_property_ident,asset_columns))
,new cljs.core.Keyword(null,"onSelect","onSelect",251862405),((function (i__46500,column,c__5626__auto__,size__5627__auto__,b__46501,s__46499__$2,temp__5825__auto__,G__46494,asset_property_ident,asset_columns){
return (function (e){
return e.preventDefault();
});})(i__46500,column,c__5626__auto__,size__5627__auto__,b__46501,s__46499__$2,temp__5825__auto__,G__46494,asset_property_ident,asset_columns))
], null);
var G__46505 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(column);
return (logseq.shui.ui.dropdown_menu_checkbox_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_checkbox_item.cljs$core$IFn$_invoke$arity$2(G__46504,G__46505) : logseq.shui.ui.dropdown_menu_checkbox_item.call(null,G__46504,G__46505));
})());

var G__47542 = (i__46500 + (1));
i__46500 = G__47542;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46501),frontend$components$views$gallery_asset_property_menu_$_iter__46498(cljs.core.chunk_rest(s__46499__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46501),null);
}
} else {
var column = cljs.core.first(s__46499__$2);
return cljs.core.cons((function (){var G__46508 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"gallery-asset-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column))),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(asset_property_ident,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column)),new cljs.core.Keyword(null,"onCheckedChange","onCheckedChange",842153815),((function (column,s__46499__$2,temp__5825__auto__,G__46494,asset_property_ident,asset_columns){
return (function (checked_QMARK_){
if(cljs.core.truth_(checked_QMARK_)){
return frontend.components.views.set_view_property_BANG_(view_entity,new cljs.core.Keyword("logseq.property.view","gallery-asset-property","logseq.property.view/gallery-asset-property",1668346890),frontend.components.views._LT_property_ident__GT_id(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column)));
} else {
return null;
}
});})(column,s__46499__$2,temp__5825__auto__,G__46494,asset_property_ident,asset_columns))
,new cljs.core.Keyword(null,"onSelect","onSelect",251862405),((function (column,s__46499__$2,temp__5825__auto__,G__46494,asset_property_ident,asset_columns){
return (function (e){
return e.preventDefault();
});})(column,s__46499__$2,temp__5825__auto__,G__46494,asset_property_ident,asset_columns))
], null);
var G__46509 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(column);
return (logseq.shui.ui.dropdown_menu_checkbox_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_checkbox_item.cljs$core$IFn$_invoke$arity$2(G__46508,G__46509) : logseq.shui.ui.dropdown_menu_checkbox_item.call(null,G__46508,G__46509));
})(),frontend$components$views$gallery_asset_property_menu_$_iter__46498(cljs.core.rest(s__46499__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(asset_columns);
})();
return (logseq.shui.ui.dropdown_menu_sub_content.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dropdown_menu_sub_content.cljs$core$IFn$_invoke$arity$1(G__46497) : logseq.shui.ui.dropdown_menu_sub_content.call(null,G__46497));
})();
return (logseq.shui.ui.dropdown_menu_sub.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_sub.cljs$core$IFn$_invoke$arity$2(G__46494,G__46495) : logseq.shui.ui.dropdown_menu_sub.call(null,G__46494,G__46495));
} else {
return null;
}
});
frontend.components.views.gallery_slider_value = (function frontend$components$views$gallery_slider_value(value){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(cljs.core.max.cljs$core$IFn$_invoke$arity$2(Math.round(value),frontend.components.views.gallery_min_card_dimension),frontend.components.views.gallery_max_card_dimension);
});
frontend.components.views.gallery_card_size_slider = (function (){var render_fn__31744__auto__ = (function frontend$components$views$gallery_card_size_slider(label,value,on_change,on_commit){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-2","div.flex.flex-col.gap-2",1564729900),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.justify-between.gap-3.text-sm.leading-none","div.flex.flex-row.items-center.justify-between.gap-3.text-sm.leading-none",-912482789),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-medium.tabular-nums","span.font-medium.tabular-nums",-909164268),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+cljs.core.str.cljs$core$IFn$_invoke$arity$1("p")+cljs.core.str.cljs$core$IFn$_invoke$arity$1("x"))], null)], null),(function (){var G__46512 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative flex w-full touch-none select-none items-center",new cljs.core.Keyword(null,"value","value",305978217),[value],new cljs.core.Keyword(null,"min","min",444991522),frontend.components.views.gallery_min_card_dimension,new cljs.core.Keyword(null,"max","max",61366548),frontend.components.views.gallery_max_card_dimension,new cljs.core.Keyword(null,"step","step",1288888124),(1),new cljs.core.Keyword(null,"on-value-change","on-value-change",-621835289),(function (result){
var G__46515 = frontend.components.views.gallery_slider_value(cljs.core.first(result));
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__46515) : on_change.call(null,G__46515));
}),new cljs.core.Keyword(null,"on-value-commit","on-value-commit",1995693716),(function (result){
var G__46516 = frontend.components.views.gallery_slider_value(cljs.core.first(result));
return (on_commit.cljs$core$IFn$_invoke$arity$1 ? on_commit.cljs$core$IFn$_invoke$arity$1(G__46516) : on_commit.call(null,G__46516));
})], null);
var G__46513 = (function (){var G__46517 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative h-2 w-full grow overflow-hidden rounded-full bg-secondary"], null);
var G__46518 = (function (){var G__46519 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute h-full bg-primary"], null);
return (logseq.shui.ui.slider_range.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.slider_range.cljs$core$IFn$_invoke$arity$1(G__46519) : logseq.shui.ui.slider_range.call(null,G__46519));
})();
return (logseq.shui.ui.slider_track.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.slider_track.cljs$core$IFn$_invoke$arity$2(G__46517,G__46518) : logseq.shui.ui.slider_track.call(null,G__46517,G__46518));
})();
var G__46514 = (function (){var G__46520 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block h-4 w-4 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none"], null);
return (logseq.shui.ui.slider_thumb.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.slider_thumb.cljs$core$IFn$_invoke$arity$1(G__46520) : logseq.shui.ui.slider_thumb.call(null,G__46520));
})();
return (logseq.shui.ui.slider.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.slider.cljs$core$IFn$_invoke$arity$3(G__46512,G__46513,G__46514) : logseq.shui.ui.slider.call(null,G__46512,G__46513,G__46514));
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$gallery_card_size_slider__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46521 = cljs.core.first(args__31746__auto__);
var G__46522 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46521,G__46522) : io.factorhouse.hsx.core.obj_get.call(null,G__46521,G__46522));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"gallery-card-size-slider","gallery-card-size-slider",1501108992,null),args__31746__auto__),frontend$components$views$gallery_card_size_slider,args__31746__auto__,null);
}
};
var frontend$components$views$gallery_card_size_slider = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47543__i = 0, G__47543__a = new Array(arguments.length -  0);
while (G__47543__i < G__47543__a.length) {G__47543__a[G__47543__i] = arguments[G__47543__i + 0]; ++G__47543__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47543__a,0,null);
} 
return frontend$components$views$gallery_card_size_slider__delegate.call(this,args__31746__auto__);};
frontend$components$views$gallery_card_size_slider.cljs$lang$maxFixedArity = 0;
frontend$components$views$gallery_card_size_slider.cljs$lang$applyTo = (function (arglist__47544){
var args__31746__auto__ = cljs.core.seq(arglist__47544);
return frontend$components$views$gallery_card_size_slider__delegate(args__31746__auto__);
});
frontend$components$views$gallery_card_size_slider.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$gallery_card_size_slider__delegate;
return frontend$components$views$gallery_card_size_slider;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46523 = comp__31745__auto__;
var G__46524 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46523,G__46524) : io.factorhouse.hsx.core.react_memo.call(null,G__46523,G__46524));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"gallery-card-size-slider");

return comp__31745__auto__;
})();
frontend.components.views.gallery_custom_card_size_inputs = (function (){var render_fn__31744__auto__ = (function frontend$components$views$gallery_custom_card_size_inputs(view_entity,dimensions,set_size_BANG_){
var vec__46529 = logseq.shui.hooks.use_state(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(dimensions));
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46529,(0),null);
var set_width_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46529,(1),null);
var vec__46532 = logseq.shui.hooks.use_state(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(dimensions));
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46532,(0),null);
var set_height_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46532,(1),null);
var save_dimensions_BANG_ = (function (width_SINGLEQUOTE_,height_SINGLEQUOTE_){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((set_size_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_size_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"custom","custom",340151948)) : set_size_BANG_.call(null,new cljs.core.Keyword(null,"custom","custom",340151948)))),(function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.views.set_view_property_BANG_(view_entity,new cljs.core.Keyword("logseq.property.view","gallery-card-width","logseq.property.view/gallery-card-width",-1403296395),width_SINGLEQUOTE_)),(function (___21901__auto____$1){
return promesa.protocols._promise(frontend.components.views.set_view_property_BANG_(view_entity,new cljs.core.Keyword("logseq.property.view","gallery-card-height","logseq.property.view/gallery-card-height",-434220832),height_SINGLEQUOTE_));
}));
}));
}));
});
var stop_menu_input_BANG_ = (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Escape",frontend.util.ekey(e))){
return null;
} else {
return frontend.util.stop_propagation(e);
}
});
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col items-stretch gap-2 w-[320px] max-w-[calc(100vw-32px)] px-4 py-2",new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.util.stop_propagation,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),stop_menu_input_BANG_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full.text-sm.leading-8","div.w-full.text-sm.leading-8",1393841877),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.gallery","custom-size","view.gallery/custom-size",-1636498539)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-4.w-full","div.flex.flex-col.gap-4.w-full",11972945),frontend.components.views.gallery_card_size_slider(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.gallery","width","view.gallery/width",1920021458)], 0)),width,set_width_BANG_,(function (p1__46525_SHARP_){
return save_dimensions_BANG_(p1__46525_SHARP_,height);
})),frontend.components.views.gallery_card_size_slider(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.gallery","height","view.gallery/height",107401461)], 0)),height,set_height_BANG_,(function (p1__46526_SHARP_){
return save_dimensions_BANG_(width,p1__46526_SHARP_);
}))], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$gallery_custom_card_size_inputs__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46539 = cljs.core.first(args__31746__auto__);
var G__46540 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46539,G__46540) : io.factorhouse.hsx.core.obj_get.call(null,G__46539,G__46540));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"gallery-custom-card-size-inputs","gallery-custom-card-size-inputs",1606804517,null),args__31746__auto__),frontend$components$views$gallery_custom_card_size_inputs,args__31746__auto__,null);
}
};
var frontend$components$views$gallery_custom_card_size_inputs = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47545__i = 0, G__47545__a = new Array(arguments.length -  0);
while (G__47545__i < G__47545__a.length) {G__47545__a[G__47545__i] = arguments[G__47545__i + 0]; ++G__47545__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47545__a,0,null);
} 
return frontend$components$views$gallery_custom_card_size_inputs__delegate.call(this,args__31746__auto__);};
frontend$components$views$gallery_custom_card_size_inputs.cljs$lang$maxFixedArity = 0;
frontend$components$views$gallery_custom_card_size_inputs.cljs$lang$applyTo = (function (arglist__47546){
var args__31746__auto__ = cljs.core.seq(arglist__47546);
return frontend$components$views$gallery_custom_card_size_inputs__delegate(args__31746__auto__);
});
frontend$components$views$gallery_custom_card_size_inputs.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$gallery_custom_card_size_inputs__delegate;
return frontend$components$views$gallery_custom_card_size_inputs;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46541 = comp__31745__auto__;
var G__46542 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46541,G__46542) : io.factorhouse.hsx.core.react_memo.call(null,G__46541,G__46542));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"gallery-custom-card-size-inputs");

return comp__31745__auto__;
})();
frontend.components.views.gallery_card_size_menu = (function frontend$components$views$gallery_card_size_menu(view_entity){
var size = new cljs.core.Keyword("logseq.property.view","gallery-card-size","logseq.property.view/gallery-card-size",-2012816833).cljs$core$IFn$_invoke$arity$1(view_entity);
var dimensions = frontend.components.views.gallery_card_dimensions(view_entity);
var set_size_BANG_ = (function (p1__46543_SHARP_){
return frontend.components.views.set_view_property_BANG_(view_entity,new cljs.core.Keyword("logseq.property.view","gallery-card-size","logseq.property.view/gallery-card-size",-2012816833),p1__46543_SHARP_);
});
var G__46546 = (function (){var G__46548 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.gallery","card-size","view.gallery/card-size",-868940868)], 0));
return (logseq.shui.ui.dropdown_menu_sub_trigger.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dropdown_menu_sub_trigger.cljs$core$IFn$_invoke$arity$1(G__46548) : logseq.shui.ui.dropdown_menu_sub_trigger.call(null,G__46548));
})();
var G__46547 = (function (){var G__46549 = (function (){var iter__5628__auto__ = (function frontend$components$views$gallery_card_size_menu_$_iter__46551(s__46552){
return (new cljs.core.LazySeq(null,(function (){
var s__46552__$1 = s__46552;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__46552__$1);
if(temp__5825__auto__){
var s__46552__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46552__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__46552__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__46554 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__46553 = (0);
while(true){
if((i__46553 < size__5627__auto__)){
var vec__46555 = cljs.core._nth(c__5626__auto__,i__46553);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46555,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46555,(1),null);
cljs.core.chunk_append(b__46554,(function (){var G__46558 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"gallery-size-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(value))),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(function (){var or__5142__auto__ = size;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})()),new cljs.core.Keyword(null,"onCheckedChange","onCheckedChange",842153815),((function (i__46553,vec__46555,value,label,c__5626__auto__,size__5627__auto__,b__46554,s__46552__$2,temp__5825__auto__,G__46546,size,dimensions,set_size_BANG_){
return (function (p1__46544_SHARP_){
if(cljs.core.truth_(p1__46544_SHARP_)){
return set_size_BANG_(value);
} else {
return null;
}
});})(i__46553,vec__46555,value,label,c__5626__auto__,size__5627__auto__,b__46554,s__46552__$2,temp__5825__auto__,G__46546,size,dimensions,set_size_BANG_))
,new cljs.core.Keyword(null,"onSelect","onSelect",251862405),((function (i__46553,vec__46555,value,label,c__5626__auto__,size__5627__auto__,b__46554,s__46552__$2,temp__5825__auto__,G__46546,size,dimensions,set_size_BANG_){
return (function (e){
return e.preventDefault();
});})(i__46553,vec__46555,value,label,c__5626__auto__,size__5627__auto__,b__46554,s__46552__$2,temp__5825__auto__,G__46546,size,dimensions,set_size_BANG_))
], null);
var G__46559 = label;
return (logseq.shui.ui.dropdown_menu_checkbox_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_checkbox_item.cljs$core$IFn$_invoke$arity$2(G__46558,G__46559) : logseq.shui.ui.dropdown_menu_checkbox_item.call(null,G__46558,G__46559));
})());

var G__47547 = (i__46553 + (1));
i__46553 = G__47547;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46554),frontend$components$views$gallery_card_size_menu_$_iter__46551(cljs.core.chunk_rest(s__46552__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46554),null);
}
} else {
var vec__46560 = cljs.core.first(s__46552__$2);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46560,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46560,(1),null);
return cljs.core.cons((function (){var G__46563 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"gallery-size-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(value))),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(function (){var or__5142__auto__ = size;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})()),new cljs.core.Keyword(null,"onCheckedChange","onCheckedChange",842153815),((function (vec__46560,value,label,s__46552__$2,temp__5825__auto__,G__46546,size,dimensions,set_size_BANG_){
return (function (p1__46544_SHARP_){
if(cljs.core.truth_(p1__46544_SHARP_)){
return set_size_BANG_(value);
} else {
return null;
}
});})(vec__46560,value,label,s__46552__$2,temp__5825__auto__,G__46546,size,dimensions,set_size_BANG_))
,new cljs.core.Keyword(null,"onSelect","onSelect",251862405),((function (vec__46560,value,label,s__46552__$2,temp__5825__auto__,G__46546,size,dimensions,set_size_BANG_){
return (function (e){
return e.preventDefault();
});})(vec__46560,value,label,s__46552__$2,temp__5825__auto__,G__46546,size,dimensions,set_size_BANG_))
], null);
var G__46564 = label;
return (logseq.shui.ui.dropdown_menu_checkbox_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_checkbox_item.cljs$core$IFn$_invoke$arity$2(G__46563,G__46564) : logseq.shui.ui.dropdown_menu_checkbox_item.call(null,G__46563,G__46564));
})(),frontend$components$views$gallery_card_size_menu_$_iter__46551(cljs.core.rest(s__46552__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.gallery","default-size","view.gallery/default-size",1969946891)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compact","compact",-348732150),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.gallery","compact-size","view.gallery/compact-size",1296290592)], 0))], null)], null));
})();
var G__46550 = frontend.components.views.gallery_custom_card_size_inputs(view_entity,dimensions,set_size_BANG_);
return (logseq.shui.ui.dropdown_menu_sub_content.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_sub_content.cljs$core$IFn$_invoke$arity$2(G__46549,G__46550) : logseq.shui.ui.dropdown_menu_sub_content.call(null,G__46549,G__46550));
})();
return (logseq.shui.ui.dropdown_menu_sub.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_sub.cljs$core$IFn$_invoke$arity$2(G__46546,G__46547) : logseq.shui.ui.dropdown_menu_sub.call(null,G__46546,G__46547));
});
frontend.components.views.groups_sort = (function (){var render_fn__31744__auto__ = (function frontend$components$views$groups_sort(view_entity,sort_by_value){
var property_ident = (function (){var or__5142__auto__ = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(sort_by_value);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366);
}
})();
var G__46568 = (function (){var G__46571 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.table","sort-groups-by","view.table/sort-groups-by",-246010488)], 0));
return (logseq.shui.ui.dropdown_menu_sub_trigger.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dropdown_menu_sub_trigger.cljs$core$IFn$_invoke$arity$1(G__46571) : logseq.shui.ui.dropdown_menu_sub_trigger.call(null,G__46571));
})();
var G__46569 = (function (){var G__46572 = (function (){var iter__5628__auto__ = (function frontend$components$views$groups_sort_$_iter__46573(s__46574){
return (new cljs.core.LazySeq(null,(function (){
var s__46574__$1 = s__46574;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__46574__$1);
if(temp__5825__auto__){
var s__46574__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46574__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__46574__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__46576 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__46575 = (0);
while(true){
if((i__46575 < size__5627__auto__)){
var vec__46579 = cljs.core._nth(c__5626__auto__,i__46575);
var option_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46579,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46579,(1),null);
cljs.core.chunk_append(b__46576,(function (){var G__46582 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(option_key),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(option_key,(frontend.components.views.groups_sort_by_property_identity__GT_name.cljs$core$IFn$_invoke$arity$1 ? frontend.components.views.groups_sort_by_property_identity__GT_name.cljs$core$IFn$_invoke$arity$1(property_ident) : frontend.components.views.groups_sort_by_property_identity__GT_name.call(null,property_ident))),new cljs.core.Keyword(null,"onCheckedChange","onCheckedChange",842153815),((function (i__46575,vec__46579,option_key,_,c__5626__auto__,size__5627__auto__,b__46576,s__46574__$2,temp__5825__auto__,G__46568,property_ident){
return (function (checked_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise(null),((function (i__46575,vec__46579,option_key,_,c__5626__auto__,size__5627__auto__,b__46576,s__46574__$2,temp__5825__auto__,G__46568,property_ident){
return (function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.views._LT_property_ident__GT_id((frontend.components.views.groups_sort_by_name__GT_property_identity.cljs$core$IFn$_invoke$arity$1 ? frontend.components.views.groups_sort_by_name__GT_property_identity.cljs$core$IFn$_invoke$arity$1(option_key) : frontend.components.views.groups_sort_by_name__GT_property_identity.call(null,option_key)))),((function (i__46575,vec__46579,option_key,_,c__5626__auto__,size__5627__auto__,b__46576,s__46574__$2,temp__5825__auto__,G__46568,property_ident){
return (function (property_id){
return promesa.protocols._promise((cljs.core.truth_(checked_QMARK_)?frontend.handler.db_based.property.set_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(view_entity),new cljs.core.Keyword("logseq.property.view","sort-groups-by-property","logseq.property.view/sort-groups-by-property",-625340021),property_id):frontend.handler.db_based.property.remove_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(view_entity),new cljs.core.Keyword("logseq.property.view","sort-groups-by-property","logseq.property.view/sort-groups-by-property",-625340021))));
});})(i__46575,vec__46579,option_key,_,c__5626__auto__,size__5627__auto__,b__46576,s__46574__$2,temp__5825__auto__,G__46568,property_ident))
);
});})(i__46575,vec__46579,option_key,_,c__5626__auto__,size__5627__auto__,b__46576,s__46574__$2,temp__5825__auto__,G__46568,property_ident))
);
});})(i__46575,vec__46579,option_key,_,c__5626__auto__,size__5627__auto__,b__46576,s__46574__$2,temp__5825__auto__,G__46568,property_ident))
,new cljs.core.Keyword(null,"onSelect","onSelect",251862405),((function (i__46575,vec__46579,option_key,_,c__5626__auto__,size__5627__auto__,b__46576,s__46574__$2,temp__5825__auto__,G__46568,property_ident){
return (function (e){
return e.preventDefault();
});})(i__46575,vec__46579,option_key,_,c__5626__auto__,size__5627__auto__,b__46576,s__46574__$2,temp__5825__auto__,G__46568,property_ident))
], null);
var G__46583 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([option_key], 0));
return (logseq.shui.ui.dropdown_menu_checkbox_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_checkbox_item.cljs$core$IFn$_invoke$arity$2(G__46582,G__46583) : logseq.shui.ui.dropdown_menu_checkbox_item.call(null,G__46582,G__46583));
})());

var G__47548 = (i__46575 + (1));
i__46575 = G__47548;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46576),frontend$components$views$groups_sort_$_iter__46573(cljs.core.chunk_rest(s__46574__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46576),null);
}
} else {
var vec__46586 = cljs.core.first(s__46574__$2);
var option_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46586,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46586,(1),null);
return cljs.core.cons((function (){var G__46589 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(option_key),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(option_key,(frontend.components.views.groups_sort_by_property_identity__GT_name.cljs$core$IFn$_invoke$arity$1 ? frontend.components.views.groups_sort_by_property_identity__GT_name.cljs$core$IFn$_invoke$arity$1(property_ident) : frontend.components.views.groups_sort_by_property_identity__GT_name.call(null,property_ident))),new cljs.core.Keyword(null,"onCheckedChange","onCheckedChange",842153815),((function (vec__46586,option_key,_,s__46574__$2,temp__5825__auto__,G__46568,property_ident){
return (function (checked_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.views._LT_property_ident__GT_id((frontend.components.views.groups_sort_by_name__GT_property_identity.cljs$core$IFn$_invoke$arity$1 ? frontend.components.views.groups_sort_by_name__GT_property_identity.cljs$core$IFn$_invoke$arity$1(option_key) : frontend.components.views.groups_sort_by_name__GT_property_identity.call(null,option_key)))),(function (property_id){
return promesa.protocols._promise((cljs.core.truth_(checked_QMARK_)?frontend.handler.db_based.property.set_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(view_entity),new cljs.core.Keyword("logseq.property.view","sort-groups-by-property","logseq.property.view/sort-groups-by-property",-625340021),property_id):frontend.handler.db_based.property.remove_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(view_entity),new cljs.core.Keyword("logseq.property.view","sort-groups-by-property","logseq.property.view/sort-groups-by-property",-625340021))));
}));
}));
});})(vec__46586,option_key,_,s__46574__$2,temp__5825__auto__,G__46568,property_ident))
,new cljs.core.Keyword(null,"onSelect","onSelect",251862405),((function (vec__46586,option_key,_,s__46574__$2,temp__5825__auto__,G__46568,property_ident){
return (function (e){
return e.preventDefault();
});})(vec__46586,option_key,_,s__46574__$2,temp__5825__auto__,G__46568,property_ident))
], null);
var G__46590 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([option_key], 0));
return (logseq.shui.ui.dropdown_menu_checkbox_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_checkbox_item.cljs$core$IFn$_invoke$arity$2(G__46589,G__46590) : logseq.shui.ui.dropdown_menu_checkbox_item.call(null,G__46589,G__46590));
})(),frontend$components$views$groups_sort_$_iter__46573(cljs.core.rest(s__46574__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(frontend.components.views.groups_sort_by_options);
})();
return (logseq.shui.ui.dropdown_menu_sub_content.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dropdown_menu_sub_content.cljs$core$IFn$_invoke$arity$1(G__46572) : logseq.shui.ui.dropdown_menu_sub_content.call(null,G__46572));
})();
return (logseq.shui.ui.dropdown_menu_sub.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_sub.cljs$core$IFn$_invoke$arity$2(G__46568,G__46569) : logseq.shui.ui.dropdown_menu_sub.call(null,G__46568,G__46569));
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$groups_sort__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46591 = cljs.core.first(args__31746__auto__);
var G__46592 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46591,G__46592) : io.factorhouse.hsx.core.obj_get.call(null,G__46591,G__46592));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"groups-sort","groups-sort",-1494589605,null),args__31746__auto__),frontend$components$views$groups_sort,args__31746__auto__,null);
}
};
var frontend$components$views$groups_sort = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47549__i = 0, G__47549__a = new Array(arguments.length -  0);
while (G__47549__i < G__47549__a.length) {G__47549__a[G__47549__i] = arguments[G__47549__i + 0]; ++G__47549__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47549__a,0,null);
} 
return frontend$components$views$groups_sort__delegate.call(this,args__31746__auto__);};
frontend$components$views$groups_sort.cljs$lang$maxFixedArity = 0;
frontend$components$views$groups_sort.cljs$lang$applyTo = (function (arglist__47550){
var args__31746__auto__ = cljs.core.seq(arglist__47550);
return frontend$components$views$groups_sort__delegate(args__31746__auto__);
});
frontend$components$views$groups_sort.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$groups_sort__delegate;
return frontend$components$views$groups_sort;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46593 = comp__31745__auto__;
var G__46594 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46593,G__46594) : io.factorhouse.hsx.core.react_memo.call(null,G__46593,G__46594));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"groups-sort");

return comp__31745__auto__;
})();
frontend.components.views.selected_groups_sort_desc = (function frontend$components$views$selected_groups_sort_desc(option_desc_QMARK_,checked_QMARK_){
if(cljs.core.truth_(checked_QMARK_)){
return option_desc_QMARK_;
} else {
return null;
}
});
frontend.components.views.effective_groups_sort_desc_QMARK_ = (function frontend$components$views$effective_groups_sort_desc_QMARK_(desc_QMARK_){
if((desc_QMARK_ == null)){
return true;
} else {
return cljs.core.boolean$(desc_QMARK_);
}
});
frontend.components.views.groups_sort_order = (function (){var render_fn__31744__auto__ = (function frontend$components$views$groups_sort_order(view_entity,desc_QMARK_){
var desc_QMARK___$1 = frontend.components.views.effective_groups_sort_desc_QMARK_(desc_QMARK_);
var options = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.table","descending","view.table/descending",1884892324)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.table","ascending","view.table/ascending",1931413423)], 0))], null)], null);
var G__46595 = (function (){var G__46597 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.table","sort-groups-order","view.table/sort-groups-order",1340150654)], 0));
return (logseq.shui.ui.dropdown_menu_sub_trigger.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dropdown_menu_sub_trigger.cljs$core$IFn$_invoke$arity$1(G__46597) : logseq.shui.ui.dropdown_menu_sub_trigger.call(null,G__46597));
})();
var G__46596 = (function (){var G__46598 = (function (){var iter__5628__auto__ = (function frontend$components$views$groups_sort_order_$_iter__46599(s__46600){
return (new cljs.core.LazySeq(null,(function (){
var s__46600__$1 = s__46600;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__46600__$1);
if(temp__5825__auto__){
var s__46600__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46600__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__46600__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__46602 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__46601 = (0);
while(true){
if((i__46601 < size__5627__auto__)){
var vec__46603 = cljs.core._nth(c__5626__auto__,i__46601);
var option_desc_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46603,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46603,(1),null);
cljs.core.chunk_append(b__46602,(function (){var G__46608 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(option_desc_QMARK_)),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(option_desc_QMARK_,desc_QMARK___$1),new cljs.core.Keyword(null,"onCheckedChange","onCheckedChange",842153815),((function (i__46601,vec__46603,option_desc_QMARK_,label,c__5626__auto__,size__5627__auto__,b__46602,s__46600__$2,temp__5825__auto__,G__46595,desc_QMARK___$1,options){
return (function (checked_QMARK_){
var temp__5829__auto__ = frontend.components.views.selected_groups_sort_desc(option_desc_QMARK_,checked_QMARK_);
if((temp__5829__auto__ == null)){
return null;
} else {
var desc_QMARK___$2 = temp__5829__auto__;
return frontend.components.views.set_view_property_BANG_(view_entity,new cljs.core.Keyword("logseq.property.view","sort-groups-desc?","logseq.property.view/sort-groups-desc?",-1081407387),desc_QMARK___$2);
}
});})(i__46601,vec__46603,option_desc_QMARK_,label,c__5626__auto__,size__5627__auto__,b__46602,s__46600__$2,temp__5825__auto__,G__46595,desc_QMARK___$1,options))
,new cljs.core.Keyword(null,"onSelect","onSelect",251862405),((function (i__46601,vec__46603,option_desc_QMARK_,label,c__5626__auto__,size__5627__auto__,b__46602,s__46600__$2,temp__5825__auto__,G__46595,desc_QMARK___$1,options){
return (function (e){
return e.preventDefault();
});})(i__46601,vec__46603,option_desc_QMARK_,label,c__5626__auto__,size__5627__auto__,b__46602,s__46600__$2,temp__5825__auto__,G__46595,desc_QMARK___$1,options))
], null);
var G__46609 = label;
return (logseq.shui.ui.dropdown_menu_checkbox_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_checkbox_item.cljs$core$IFn$_invoke$arity$2(G__46608,G__46609) : logseq.shui.ui.dropdown_menu_checkbox_item.call(null,G__46608,G__46609));
})());

var G__47551 = (i__46601 + (1));
i__46601 = G__47551;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46602),frontend$components$views$groups_sort_order_$_iter__46599(cljs.core.chunk_rest(s__46600__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46602),null);
}
} else {
var vec__46610 = cljs.core.first(s__46600__$2);
var option_desc_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46610,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46610,(1),null);
return cljs.core.cons((function (){var G__46613 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(option_desc_QMARK_)),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(option_desc_QMARK_,desc_QMARK___$1),new cljs.core.Keyword(null,"onCheckedChange","onCheckedChange",842153815),((function (vec__46610,option_desc_QMARK_,label,s__46600__$2,temp__5825__auto__,G__46595,desc_QMARK___$1,options){
return (function (checked_QMARK_){
var temp__5829__auto__ = frontend.components.views.selected_groups_sort_desc(option_desc_QMARK_,checked_QMARK_);
if((temp__5829__auto__ == null)){
return null;
} else {
var desc_QMARK___$2 = temp__5829__auto__;
return frontend.components.views.set_view_property_BANG_(view_entity,new cljs.core.Keyword("logseq.property.view","sort-groups-desc?","logseq.property.view/sort-groups-desc?",-1081407387),desc_QMARK___$2);
}
});})(vec__46610,option_desc_QMARK_,label,s__46600__$2,temp__5825__auto__,G__46595,desc_QMARK___$1,options))
,new cljs.core.Keyword(null,"onSelect","onSelect",251862405),((function (vec__46610,option_desc_QMARK_,label,s__46600__$2,temp__5825__auto__,G__46595,desc_QMARK___$1,options){
return (function (e){
return e.preventDefault();
});})(vec__46610,option_desc_QMARK_,label,s__46600__$2,temp__5825__auto__,G__46595,desc_QMARK___$1,options))
], null);
var G__46614 = label;
return (logseq.shui.ui.dropdown_menu_checkbox_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_checkbox_item.cljs$core$IFn$_invoke$arity$2(G__46613,G__46614) : logseq.shui.ui.dropdown_menu_checkbox_item.call(null,G__46613,G__46614));
})(),frontend$components$views$groups_sort_order_$_iter__46599(cljs.core.rest(s__46600__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(options);
})();
return (logseq.shui.ui.dropdown_menu_sub_content.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dropdown_menu_sub_content.cljs$core$IFn$_invoke$arity$1(G__46598) : logseq.shui.ui.dropdown_menu_sub_content.call(null,G__46598));
})();
return (logseq.shui.ui.dropdown_menu_sub.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_sub.cljs$core$IFn$_invoke$arity$2(G__46595,G__46596) : logseq.shui.ui.dropdown_menu_sub.call(null,G__46595,G__46596));
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$groups_sort_order__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46615 = cljs.core.first(args__31746__auto__);
var G__46616 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46615,G__46616) : io.factorhouse.hsx.core.obj_get.call(null,G__46615,G__46616));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"groups-sort-order","groups-sort-order",1826753576,null),args__31746__auto__),frontend$components$views$groups_sort_order,args__31746__auto__,null);
}
};
var frontend$components$views$groups_sort_order = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47552__i = 0, G__47552__a = new Array(arguments.length -  0);
while (G__47552__i < G__47552__a.length) {G__47552__a[G__47552__i] = arguments[G__47552__i + 0]; ++G__47552__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47552__a,0,null);
} 
return frontend$components$views$groups_sort_order__delegate.call(this,args__31746__auto__);};
frontend$components$views$groups_sort_order.cljs$lang$maxFixedArity = 0;
frontend$components$views$groups_sort_order.cljs$lang$applyTo = (function (arglist__47553){
var args__31746__auto__ = cljs.core.seq(arglist__47553);
return frontend$components$views$groups_sort_order__delegate(args__31746__auto__);
});
frontend$components$views$groups_sort_order.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$groups_sort_order__delegate;
return frontend$components$views$groups_sort_order;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46617 = comp__31745__auto__;
var G__46618 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46617,G__46618) : io.factorhouse.hsx.core.react_memo.call(null,G__46617,G__46618));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"groups-sort-order");

return comp__31745__auto__;
})();
frontend.components.views.more_actions = (function (){var render_fn__31744__auto__ = (function frontend$components$views$more_actions(view_entity,columns,p__46622,p__46623){
var map__46624 = p__46622;
var map__46624__$1 = cljs.core.__destructure_map(map__46624);
var table = map__46624__$1;
var column_visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46624__$1,new cljs.core.Keyword(null,"column-visible?","column-visible?",-864117722));
var column_toggle_visibility = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46624__$1,new cljs.core.Keyword(null,"column-toggle-visibility","column-toggle-visibility",481480390));
var full_data_loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46624__$1,new cljs.core.Keyword(null,"full-data-loading?","full-data-loading?",-114331344));
var map__46625 = p__46623;
var map__46625__$1 = cljs.core.__destructure_map(map__46625);
var display_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46625__$1,new cljs.core.Keyword(null,"display-type","display-type",-749971179));
var group_by_property_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46625__$1,new cljs.core.Keyword(null,"group-by-property-ident","group-by-property-ident",1221613316));
var table_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(display_type,new cljs.core.Keyword("logseq.property.view","type.table","logseq.property.view/type.table",194254240));
var gallery_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(display_type,new cljs.core.Keyword("logseq.property.view","type.gallery","logseq.property.view/type.gallery",150605112));
var group_by_columns = medley.core.distinct_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((function (){var or__5142__auto__ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"linked-references","linked-references",-2117592379),null,new cljs.core.Keyword(null,"unlinked-references","unlinked-references",1918870007),null], null), null),new cljs.core.Keyword("logseq.property.view","feature-type","logseq.property.view/feature-type",-939141871).cljs$core$IFn$_invoke$arity$1(view_entity));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("logseq.property","query","logseq.property/query",-97414126).cljs$core$IFn$_invoke$arity$1(view_entity);
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.views.page_column()], null):null),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(frontend.components.views.group_by_column_QMARK_,columns)));
var group_by_page_QMARK_ = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","page","block/page",822314108),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),group_by_columns));
var G__46626 = (function (){var G__46628 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"asChild","asChild",682531623),true], null);
var G__46629 = (function (){var G__46630 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"ghost",new cljs.core.Keyword(null,"class","class",-2030961996),"text-muted-foreground !px-1",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065)], null);
var G__46631 = frontend.ui.icon("dots",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(15)], null));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__46630,G__46631) : logseq.shui.ui.button.call(null,G__46630,G__46631));
})();
return (logseq.shui.ui.dropdown_menu_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_trigger.cljs$core$IFn$_invoke$arity$2(G__46628,G__46629) : logseq.shui.ui.dropdown_menu_trigger.call(null,G__46628,G__46629));
})();
var G__46627 = (function (){var G__46632 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"align","align",1964212802),"end",new cljs.core.Keyword(null,"onCloseAutoFocus","onCloseAutoFocus",-349969117),(function (p1__46619_SHARP_){
return p1__46619_SHARP_.preventDefault();
})], null);
var G__46633 = (function (){var G__46634 = ((table_QMARK_)?(function (){var G__46642 = (function (){var G__46644 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.table","columns-visibility","view.table/columns-visibility",639366130)], 0));
return (logseq.shui.ui.dropdown_menu_sub_trigger.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dropdown_menu_sub_trigger.cljs$core$IFn$_invoke$arity$1(G__46644) : logseq.shui.ui.dropdown_menu_sub_trigger.call(null,G__46644));
})();
var G__46643 = (function (){var G__46645 = (function (){var iter__5628__auto__ = (function frontend$components$views$more_actions_$_iter__46646(s__46647){
return (new cljs.core.LazySeq(null,(function (){
var s__46647__$1 = s__46647;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__46647__$1);
if(temp__5825__auto__){
var s__46647__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46647__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__46647__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__46649 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__46648 = (0);
while(true){
if((i__46648 < size__5627__auto__)){
var column = cljs.core._nth(c__5626__auto__,i__46648);
cljs.core.chunk_append(b__46649,(function (){var G__46650 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column))),new cljs.core.Keyword(null,"className","className",-1983287057),"capitalize",new cljs.core.Keyword(null,"checked","checked",-50955819),(column_visible_QMARK_.cljs$core$IFn$_invoke$arity$1 ? column_visible_QMARK_.cljs$core$IFn$_invoke$arity$1(column) : column_visible_QMARK_.call(null,column)),new cljs.core.Keyword(null,"onCheckedChange","onCheckedChange",842153815),((function (i__46648,column,c__5626__auto__,size__5627__auto__,b__46649,s__46647__$2,temp__5825__auto__,G__46642,G__46632,G__46626,table_QMARK_,gallery_QMARK_,group_by_columns,group_by_page_QMARK_,map__46624,map__46624__$1,table,column_visible_QMARK_,column_toggle_visibility,full_data_loading_QMARK_,map__46625,map__46625__$1,display_type,group_by_property_ident){
return (function (p1__46621_SHARP_){
return (column_toggle_visibility.cljs$core$IFn$_invoke$arity$2 ? column_toggle_visibility.cljs$core$IFn$_invoke$arity$2(column,p1__46621_SHARP_) : column_toggle_visibility.call(null,column,p1__46621_SHARP_));
});})(i__46648,column,c__5626__auto__,size__5627__auto__,b__46649,s__46647__$2,temp__5825__auto__,G__46642,G__46632,G__46626,table_QMARK_,gallery_QMARK_,group_by_columns,group_by_page_QMARK_,map__46624,map__46624__$1,table,column_visible_QMARK_,column_toggle_visibility,full_data_loading_QMARK_,map__46625,map__46625__$1,display_type,group_by_property_ident))
,new cljs.core.Keyword(null,"onSelect","onSelect",251862405),((function (i__46648,column,c__5626__auto__,size__5627__auto__,b__46649,s__46647__$2,temp__5825__auto__,G__46642,G__46632,G__46626,table_QMARK_,gallery_QMARK_,group_by_columns,group_by_page_QMARK_,map__46624,map__46624__$1,table,column_visible_QMARK_,column_toggle_visibility,full_data_loading_QMARK_,map__46625,map__46625__$1,display_type,group_by_property_ident){
return (function (e){
return e.preventDefault();
});})(i__46648,column,c__5626__auto__,size__5627__auto__,b__46649,s__46647__$2,temp__5825__auto__,G__46642,G__46632,G__46626,table_QMARK_,gallery_QMARK_,group_by_columns,group_by_page_QMARK_,map__46624,map__46624__$1,table,column_visible_QMARK_,column_toggle_visibility,full_data_loading_QMARK_,map__46625,map__46625__$1,display_type,group_by_property_ident))
], null);
var G__46651 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(column);
return (logseq.shui.ui.dropdown_menu_checkbox_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_checkbox_item.cljs$core$IFn$_invoke$arity$2(G__46650,G__46651) : logseq.shui.ui.dropdown_menu_checkbox_item.call(null,G__46650,G__46651));
})());

var G__47554 = (i__46648 + (1));
i__46648 = G__47554;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46649),frontend$components$views$more_actions_$_iter__46646(cljs.core.chunk_rest(s__46647__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46649),null);
}
} else {
var column = cljs.core.first(s__46647__$2);
return cljs.core.cons((function (){var G__46652 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column))),new cljs.core.Keyword(null,"className","className",-1983287057),"capitalize",new cljs.core.Keyword(null,"checked","checked",-50955819),(column_visible_QMARK_.cljs$core$IFn$_invoke$arity$1 ? column_visible_QMARK_.cljs$core$IFn$_invoke$arity$1(column) : column_visible_QMARK_.call(null,column)),new cljs.core.Keyword(null,"onCheckedChange","onCheckedChange",842153815),((function (column,s__46647__$2,temp__5825__auto__,G__46642,G__46632,G__46626,table_QMARK_,gallery_QMARK_,group_by_columns,group_by_page_QMARK_,map__46624,map__46624__$1,table,column_visible_QMARK_,column_toggle_visibility,full_data_loading_QMARK_,map__46625,map__46625__$1,display_type,group_by_property_ident){
return (function (p1__46621_SHARP_){
return (column_toggle_visibility.cljs$core$IFn$_invoke$arity$2 ? column_toggle_visibility.cljs$core$IFn$_invoke$arity$2(column,p1__46621_SHARP_) : column_toggle_visibility.call(null,column,p1__46621_SHARP_));
});})(column,s__46647__$2,temp__5825__auto__,G__46642,G__46632,G__46626,table_QMARK_,gallery_QMARK_,group_by_columns,group_by_page_QMARK_,map__46624,map__46624__$1,table,column_visible_QMARK_,column_toggle_visibility,full_data_loading_QMARK_,map__46625,map__46625__$1,display_type,group_by_property_ident))
,new cljs.core.Keyword(null,"onSelect","onSelect",251862405),((function (column,s__46647__$2,temp__5825__auto__,G__46642,G__46632,G__46626,table_QMARK_,gallery_QMARK_,group_by_columns,group_by_page_QMARK_,map__46624,map__46624__$1,table,column_visible_QMARK_,column_toggle_visibility,full_data_loading_QMARK_,map__46625,map__46625__$1,display_type,group_by_property_ident){
return (function (e){
return e.preventDefault();
});})(column,s__46647__$2,temp__5825__auto__,G__46642,G__46632,G__46626,table_QMARK_,gallery_QMARK_,group_by_columns,group_by_page_QMARK_,map__46624,map__46624__$1,table,column_visible_QMARK_,column_toggle_visibility,full_data_loading_QMARK_,map__46625,map__46625__$1,display_type,group_by_property_ident))
], null);
var G__46653 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(column);
return (logseq.shui.ui.dropdown_menu_checkbox_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_checkbox_item.cljs$core$IFn$_invoke$arity$2(G__46652,G__46653) : logseq.shui.ui.dropdown_menu_checkbox_item.call(null,G__46652,G__46653));
})(),frontend$components$views$more_actions_$_iter__46646(cljs.core.rest(s__46647__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__46620_SHARP_){
var or__5142__auto__ = new cljs.core.Keyword(null,"column-list?","column-list?",-538229318).cljs$core$IFn$_invoke$arity$1(p1__46620_SHARP_) === false;
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword(null,"disable-hide?","disable-hide?",-1203602151).cljs$core$IFn$_invoke$arity$1(p1__46620_SHARP_);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__46620_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092));
}
}
}),columns));
})();
return (logseq.shui.ui.dropdown_menu_sub_content.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dropdown_menu_sub_content.cljs$core$IFn$_invoke$arity$1(G__46645) : logseq.shui.ui.dropdown_menu_sub_content.call(null,G__46645));
})();
return (logseq.shui.ui.dropdown_menu_sub.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_sub.cljs$core$IFn$_invoke$arity$2(G__46642,G__46643) : logseq.shui.ui.dropdown_menu_sub.call(null,G__46642,G__46643));
})():null);
var G__46635 = ((gallery_QMARK_)?frontend.components.views.gallery_display_properties_menu(view_entity,columns):null);
var G__46636 = ((gallery_QMARK_)?frontend.components.views.gallery_asset_property_menu(view_entity,columns):null);
var G__46637 = ((gallery_QMARK_)?frontend.components.views.gallery_card_size_menu(view_entity):null);
var G__46638 = ((cljs.core.seq(group_by_columns))?(function (){var G__46654 = (function (){var G__46656 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.table","group-by","view.table/group-by",1471149707)], 0));
return (logseq.shui.ui.dropdown_menu_sub_trigger.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dropdown_menu_sub_trigger.cljs$core$IFn$_invoke$arity$1(G__46656) : logseq.shui.ui.dropdown_menu_sub_trigger.call(null,G__46656));
})();
var G__46655 = (function (){var G__46657 = (function (){var iter__5628__auto__ = (function frontend$components$views$more_actions_$_iter__46658(s__46659){
return (new cljs.core.LazySeq(null,(function (){
var s__46659__$1 = s__46659;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__46659__$1);
if(temp__5825__auto__){
var s__46659__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46659__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__46659__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__46661 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__46660 = (0);
while(true){
if((i__46660 < size__5627__auto__)){
var column = cljs.core._nth(c__5626__auto__,i__46660);
cljs.core.chunk_append(b__46661,(function (){var G__46662 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column))),new cljs.core.Keyword(null,"className","className",-1983287057),"capitalize",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column),group_by_property_ident),new cljs.core.Keyword(null,"onCheckedChange","onCheckedChange",842153815),((function (i__46660,column,c__5626__auto__,size__5627__auto__,b__46661,s__46659__$2,temp__5825__auto__,G__46654,G__46634,G__46635,G__46636,G__46637,G__46632,G__46626,table_QMARK_,gallery_QMARK_,group_by_columns,group_by_page_QMARK_,map__46624,map__46624__$1,table,column_visible_QMARK_,column_toggle_visibility,full_data_loading_QMARK_,map__46625,map__46625__$1,display_type,group_by_property_ident){
return (function (result){
if(cljs.core.truth_(result)){
return promesa.protocols._mcat(promesa.protocols._promise(null),((function (i__46660,column,c__5626__auto__,size__5627__auto__,b__46661,s__46659__$2,temp__5825__auto__,G__46654,G__46634,G__46635,G__46636,G__46637,G__46632,G__46626,table_QMARK_,gallery_QMARK_,group_by_columns,group_by_page_QMARK_,map__46624,map__46624__$1,table,column_visible_QMARK_,column_toggle_visibility,full_data_loading_QMARK_,map__46625,map__46625__$1,display_type,group_by_property_ident){
return (function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.views._LT_property_ident__GT_id(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column))),((function (i__46660,column,c__5626__auto__,size__5627__auto__,b__46661,s__46659__$2,temp__5825__auto__,G__46654,G__46634,G__46635,G__46636,G__46637,G__46632,G__46626,table_QMARK_,gallery_QMARK_,group_by_columns,group_by_page_QMARK_,map__46624,map__46624__$1,table,column_visible_QMARK_,column_toggle_visibility,full_data_loading_QMARK_,map__46625,map__46625__$1,display_type,group_by_property_ident){
return (function (property_id){
return promesa.protocols._promise(frontend.handler.db_based.property.set_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(view_entity),new cljs.core.Keyword("logseq.property.view","group-by-property","logseq.property.view/group-by-property",809216236),property_id));
});})(i__46660,column,c__5626__auto__,size__5627__auto__,b__46661,s__46659__$2,temp__5825__auto__,G__46654,G__46634,G__46635,G__46636,G__46637,G__46632,G__46626,table_QMARK_,gallery_QMARK_,group_by_columns,group_by_page_QMARK_,map__46624,map__46624__$1,table,column_visible_QMARK_,column_toggle_visibility,full_data_loading_QMARK_,map__46625,map__46625__$1,display_type,group_by_property_ident))
);
});})(i__46660,column,c__5626__auto__,size__5627__auto__,b__46661,s__46659__$2,temp__5825__auto__,G__46654,G__46634,G__46635,G__46636,G__46637,G__46632,G__46626,table_QMARK_,gallery_QMARK_,group_by_columns,group_by_page_QMARK_,map__46624,map__46624__$1,table,column_visible_QMARK_,column_toggle_visibility,full_data_loading_QMARK_,map__46625,map__46625__$1,display_type,group_by_property_ident))
);
} else {
return frontend.handler.db_based.property.remove_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(view_entity),new cljs.core.Keyword("logseq.property.view","group-by-property","logseq.property.view/group-by-property",809216236));
}
});})(i__46660,column,c__5626__auto__,size__5627__auto__,b__46661,s__46659__$2,temp__5825__auto__,G__46654,G__46634,G__46635,G__46636,G__46637,G__46632,G__46626,table_QMARK_,gallery_QMARK_,group_by_columns,group_by_page_QMARK_,map__46624,map__46624__$1,table,column_visible_QMARK_,column_toggle_visibility,full_data_loading_QMARK_,map__46625,map__46625__$1,display_type,group_by_property_ident))
,new cljs.core.Keyword(null,"onSelect","onSelect",251862405),((function (i__46660,column,c__5626__auto__,size__5627__auto__,b__46661,s__46659__$2,temp__5825__auto__,G__46654,G__46634,G__46635,G__46636,G__46637,G__46632,G__46626,table_QMARK_,gallery_QMARK_,group_by_columns,group_by_page_QMARK_,map__46624,map__46624__$1,table,column_visible_QMARK_,column_toggle_visibility,full_data_loading_QMARK_,map__46625,map__46625__$1,display_type,group_by_property_ident){
return (function (e){
return e.preventDefault();
});})(i__46660,column,c__5626__auto__,size__5627__auto__,b__46661,s__46659__$2,temp__5825__auto__,G__46654,G__46634,G__46635,G__46636,G__46637,G__46632,G__46626,table_QMARK_,gallery_QMARK_,group_by_columns,group_by_page_QMARK_,map__46624,map__46624__$1,table,column_visible_QMARK_,column_toggle_visibility,full_data_loading_QMARK_,map__46625,map__46625__$1,display_type,group_by_property_ident))
], null);
var G__46663 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(column);
return (logseq.shui.ui.dropdown_menu_checkbox_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_checkbox_item.cljs$core$IFn$_invoke$arity$2(G__46662,G__46663) : logseq.shui.ui.dropdown_menu_checkbox_item.call(null,G__46662,G__46663));
})());

var G__47555 = (i__46660 + (1));
i__46660 = G__47555;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46661),frontend$components$views$more_actions_$_iter__46658(cljs.core.chunk_rest(s__46659__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46661),null);
}
} else {
var column = cljs.core.first(s__46659__$2);
return cljs.core.cons((function (){var G__46664 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column))),new cljs.core.Keyword(null,"className","className",-1983287057),"capitalize",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column),group_by_property_ident),new cljs.core.Keyword(null,"onCheckedChange","onCheckedChange",842153815),((function (column,s__46659__$2,temp__5825__auto__,G__46654,G__46634,G__46635,G__46636,G__46637,G__46632,G__46626,table_QMARK_,gallery_QMARK_,group_by_columns,group_by_page_QMARK_,map__46624,map__46624__$1,table,column_visible_QMARK_,column_toggle_visibility,full_data_loading_QMARK_,map__46625,map__46625__$1,display_type,group_by_property_ident){
return (function (result){
if(cljs.core.truth_(result)){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.views._LT_property_ident__GT_id(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column))),(function (property_id){
return promesa.protocols._promise(frontend.handler.db_based.property.set_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(view_entity),new cljs.core.Keyword("logseq.property.view","group-by-property","logseq.property.view/group-by-property",809216236),property_id));
}));
}));
} else {
return frontend.handler.db_based.property.remove_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(view_entity),new cljs.core.Keyword("logseq.property.view","group-by-property","logseq.property.view/group-by-property",809216236));
}
});})(column,s__46659__$2,temp__5825__auto__,G__46654,G__46634,G__46635,G__46636,G__46637,G__46632,G__46626,table_QMARK_,gallery_QMARK_,group_by_columns,group_by_page_QMARK_,map__46624,map__46624__$1,table,column_visible_QMARK_,column_toggle_visibility,full_data_loading_QMARK_,map__46625,map__46625__$1,display_type,group_by_property_ident))
,new cljs.core.Keyword(null,"onSelect","onSelect",251862405),((function (column,s__46659__$2,temp__5825__auto__,G__46654,G__46634,G__46635,G__46636,G__46637,G__46632,G__46626,table_QMARK_,gallery_QMARK_,group_by_columns,group_by_page_QMARK_,map__46624,map__46624__$1,table,column_visible_QMARK_,column_toggle_visibility,full_data_loading_QMARK_,map__46625,map__46625__$1,display_type,group_by_property_ident){
return (function (e){
return e.preventDefault();
});})(column,s__46659__$2,temp__5825__auto__,G__46654,G__46634,G__46635,G__46636,G__46637,G__46632,G__46626,table_QMARK_,gallery_QMARK_,group_by_columns,group_by_page_QMARK_,map__46624,map__46624__$1,table,column_visible_QMARK_,column_toggle_visibility,full_data_loading_QMARK_,map__46625,map__46625__$1,display_type,group_by_property_ident))
], null);
var G__46665 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(column);
return (logseq.shui.ui.dropdown_menu_checkbox_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_checkbox_item.cljs$core$IFn$_invoke$arity$2(G__46664,G__46665) : logseq.shui.ui.dropdown_menu_checkbox_item.call(null,G__46664,G__46665));
})(),frontend$components$views$more_actions_$_iter__46658(cljs.core.rest(s__46659__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(group_by_columns);
})();
return (logseq.shui.ui.dropdown_menu_sub_content.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dropdown_menu_sub_content.cljs$core$IFn$_invoke$arity$1(G__46657) : logseq.shui.ui.dropdown_menu_sub_content.call(null,G__46657));
})();
return (logseq.shui.ui.dropdown_menu_sub.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_sub.cljs$core$IFn$_invoke$arity$2(G__46654,G__46655) : logseq.shui.ui.dropdown_menu_sub.call(null,G__46654,G__46655));
})():null);
var G__46639 = (cljs.core.truth_(group_by_page_QMARK_)?frontend.components.views.groups_sort(view_entity,new cljs.core.Keyword("logseq.property.view","sort-groups-by-property","logseq.property.view/sort-groups-by-property",-625340021).cljs$core$IFn$_invoke$arity$1(view_entity)):null);
var G__46640 = (cljs.core.truth_(group_by_property_ident)?frontend.components.views.groups_sort_order(view_entity,new cljs.core.Keyword("logseq.property.view","sort-groups-desc?","logseq.property.view/sort-groups-desc?",-1081407387).cljs$core$IFn$_invoke$arity$1(view_entity)):null);
var G__46641 = (function (){var G__46666 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"export-edn",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),full_data_loading_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var temp__5825__auto__ = frontend.components.views.table_action_rows(table);
if(cljs.core.truth_(temp__5825__auto__)){
var rows = temp__5825__auto__;
return frontend.handler.db_based.export$.export_view_nodes_data(rows,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"group-by?","group-by?",732997650),(!((group_by_property_ident == null)))], null));
} else {
return null;
}
})], null);
var G__46667 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view","export-edn","view/export-edn",-308748092)], 0));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__46666,G__46667) : logseq.shui.ui.dropdown_menu_item.call(null,G__46666,G__46667));
})();
return (logseq.shui.ui.dropdown_menu_group.cljs$core$IFn$_invoke$arity$8 ? logseq.shui.ui.dropdown_menu_group.cljs$core$IFn$_invoke$arity$8(G__46634,G__46635,G__46636,G__46637,G__46638,G__46639,G__46640,G__46641) : logseq.shui.ui.dropdown_menu_group.call(null,G__46634,G__46635,G__46636,G__46637,G__46638,G__46639,G__46640,G__46641));
})();
return (logseq.shui.ui.dropdown_menu_content.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_content.cljs$core$IFn$_invoke$arity$2(G__46632,G__46633) : logseq.shui.ui.dropdown_menu_content.call(null,G__46632,G__46633));
})();
return (logseq.shui.ui.dropdown_menu.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu.cljs$core$IFn$_invoke$arity$2(G__46626,G__46627) : logseq.shui.ui.dropdown_menu.call(null,G__46626,G__46627));
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$more_actions__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46668 = cljs.core.first(args__31746__auto__);
var G__46669 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46668,G__46669) : io.factorhouse.hsx.core.obj_get.call(null,G__46668,G__46669));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"more-actions","more-actions",439885766,null),args__31746__auto__),frontend$components$views$more_actions,args__31746__auto__,null);
}
};
var frontend$components$views$more_actions = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47556__i = 0, G__47556__a = new Array(arguments.length -  0);
while (G__47556__i < G__47556__a.length) {G__47556__a[G__47556__i] = arguments[G__47556__i + 0]; ++G__47556__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47556__a,0,null);
} 
return frontend$components$views$more_actions__delegate.call(this,args__31746__auto__);};
frontend$components$views$more_actions.cljs$lang$maxFixedArity = 0;
frontend$components$views$more_actions.cljs$lang$applyTo = (function (arglist__47557){
var args__31746__auto__ = cljs.core.seq(arglist__47557);
return frontend$components$views$more_actions__delegate(args__31746__auto__);
});
frontend$components$views$more_actions.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$more_actions__delegate;
return frontend$components$views$more_actions;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46670 = comp__31745__auto__;
var G__46671 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46670,G__46671) : io.factorhouse.hsx.core.react_memo.call(null,G__46670,G__46671));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"more-actions");

return comp__31745__auto__;
})();
frontend.components.views.get_column_size = (function frontend$components$views$get_column_size(column,sized_columns){
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sized_columns,id);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092))){
return (48);
} else {
if(typeof size === 'number'){
return size;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword("logseq.property","query","logseq.property/query",-97414126))){
return (400);
} else {
var G__46672 = id;
var G__46672__$1 = (((G__46672 instanceof cljs.core.Keyword))?G__46672.fqn:null);
switch (G__46672__$1) {
case "select":
return (32);

break;
case "add-property":
return (160);

break;
case "block/title":
case "block/name":
return (360);

break;
case "block/created-at":
case "block/updated-at":
return (160);

break;
default:
return (180);

}

}
}
}
});
frontend.components.views.add_property_button = (function (){var render_fn__31744__auto__ = (function frontend$components$views$add_property_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-table-header-cell.!border-0","div.ls-table-header-cell.!border-0",1440560186),(function (){var G__46673 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"h-8 !pl-2 !px-2 !py-0 hover:text-foreground w-full justify-start"], null);
var G__46674 = frontend.ui.icon("plus");
var G__46675 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view","new-property","view/new-property",1627571549)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__46673,G__46674,G__46675) : logseq.shui.ui.button.call(null,G__46673,G__46674,G__46675));
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$add_property_button__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46676 = cljs.core.first(args__31746__auto__);
var G__46677 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46676,G__46677) : io.factorhouse.hsx.core.obj_get.call(null,G__46676,G__46677));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"add-property-button","add-property-button",1525985594,null),args__31746__auto__),frontend$components$views$add_property_button,args__31746__auto__,null);
}
};
var frontend$components$views$add_property_button = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47559__i = 0, G__47559__a = new Array(arguments.length -  0);
while (G__47559__i < G__47559__a.length) {G__47559__a[G__47559__i] = arguments[G__47559__i + 0]; ++G__47559__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47559__a,0,null);
} 
return frontend$components$views$add_property_button__delegate.call(this,args__31746__auto__);};
frontend$components$views$add_property_button.cljs$lang$maxFixedArity = 0;
frontend$components$views$add_property_button.cljs$lang$applyTo = (function (arglist__47560){
var args__31746__auto__ = cljs.core.seq(arglist__47560);
return frontend$components$views$add_property_button__delegate(args__31746__auto__);
});
frontend$components$views$add_property_button.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$add_property_button__delegate;
return frontend$components$views$add_property_button;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46678 = comp__31745__auto__;
var G__46679 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46678,G__46679) : io.factorhouse.hsx.core.react_memo.call(null,G__46678,G__46679));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"add-property-button");

return comp__31745__auto__;
})();
frontend.components.views.action_bar = (function (){var render_fn__31744__auto__ = (function frontend$components$views$action_bar(table,selected_rows,p__46680){
var map__46681 = p__46680;
var map__46681__$1 = cljs.core.__destructure_map(map__46681);
var on_delete_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46681__$1,new cljs.core.Keyword(null,"on-delete-rows","on-delete-rows",464374868));
var G__46682 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"ls-table-actions bg-gray-01",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(101)], null)], null);
var G__46683 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.selection-count.px-2","div.selection-count.px-2",439478296),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.table","selected-count","view.table/selected-count",-1407966057),cljs.core.count(selected_rows)], 0))], null);
var G__46684 = frontend.components.selection.action_group(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"on-cut","on-cut",-1019124687),(function (){
return (on_delete_rows.cljs$core$IFn$_invoke$arity$2 ? on_delete_rows.cljs$core$IFn$_invoke$arity$2(table,selected_rows) : on_delete_rows.call(null,table,selected_rows));
}),new cljs.core.Keyword(null,"selected-blocks","selected-blocks",-96882948),selected_rows,new cljs.core.Keyword(null,"hide-dots?","hide-dots?",-901521952),true,new cljs.core.Keyword(null,"button-border?","button-border?",-2028710343),true,new cljs.core.Keyword(null,"outliner?","outliner?",854604974),false,new cljs.core.Keyword(null,"view-parent","view-parent",675596601),new cljs.core.Keyword("logseq.property","view-for","logseq.property/view-for",-36274319).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"view-entity","view-entity",-1084117808).cljs$core$IFn$_invoke$arity$1(table))], null));
return (logseq.shui.ui.toolbar.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.toolbar.cljs$core$IFn$_invoke$arity$3(G__46682,G__46683,G__46684) : logseq.shui.ui.toolbar.call(null,G__46682,G__46683,G__46684));
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$action_bar__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46685 = cljs.core.first(args__31746__auto__);
var G__46686 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46685,G__46686) : io.factorhouse.hsx.core.obj_get.call(null,G__46685,G__46686));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"action-bar","action-bar",-906678316,null),args__31746__auto__),frontend$components$views$action_bar,args__31746__auto__,null);
}
};
var frontend$components$views$action_bar = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47561__i = 0, G__47561__a = new Array(arguments.length -  0);
while (G__47561__i < G__47561__a.length) {G__47561__a[G__47561__i] = arguments[G__47561__i + 0]; ++G__47561__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47561__a,0,null);
} 
return frontend$components$views$action_bar__delegate.call(this,args__31746__auto__);};
frontend$components$views$action_bar.cljs$lang$maxFixedArity = 0;
frontend$components$views$action_bar.cljs$lang$applyTo = (function (arglist__47562){
var args__31746__auto__ = cljs.core.seq(arglist__47562);
return frontend$components$views$action_bar__delegate(args__31746__auto__);
});
frontend$components$views$action_bar.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$action_bar__delegate;
return frontend$components$views$action_bar;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46687 = comp__31745__auto__;
var G__46688 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46687,G__46688) : io.factorhouse.hsx.core.react_memo.call(null,G__46687,G__46688));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"action-bar");

return comp__31745__auto__;
})();
frontend.components.views.column_resizer = (function (){var render_fn__31744__auto__ = (function frontend$components$views$column_resizer(_column,on_sized_BANG_){
var _STAR_el = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var vec__46689 = logseq.shui.hooks.use_state(null);
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46689,(0),null);
var set_dx_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46689,(1),null);
var vec__46692 = logseq.shui.hooks.use_state(null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46692,(0),null);
var set_width_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46692,(1),null);
var add_resizing_class = (function (){
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(document.documentElement,"is-resizing-buf");
});
var remove_resizing_class = (function (){
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(document.documentElement,"is-resizing-buf");
});
logseq.shui.hooks.use_effect_BANG_((function (){
if(typeof dx === 'number'){
var G__46695 = logseq.shui.hooks.deref(_STAR_el);
if((G__46695 == null)){
return null;
} else {
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46695,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"transform","transform",1381301764),(""+"translate3D("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dx)+"px , 0, 0)")], 0));
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto__ = (function (){var and__5140__auto__ = cljs.core.fn_QMARK_(window.interact);
if(and__5140__auto__){
return logseq.shui.hooks.deref(_STAR_el);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
var _STAR_field_rect = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var min_width = (40);
var max_width = (500);
return interact(el).draggable(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),(function (){
var map__46696 = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(el.closest(".ls-table-header-cell").getBoundingClientRect().toJSON());
var map__46696__$1 = cljs.core.__destructure_map(map__46696);
var rect = map__46696__$1;
var width__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46696__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46696__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var left_dx = (((width__$1 >= min_width))?(min_width - width__$1):(0));
var right_dx = (((width__$1 <= max_width))?(max_width - width__$1):(0));
cljs.core.reset_BANG_(_STAR_field_rect,rect);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_STAR_field_rect,cljs.core.assoc,new cljs.core.Keyword(null,"left-dx","left-dx",-1775595870),left_dx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"right-dx","right-dx",531815659),right_dx,new cljs.core.Keyword(null,"left-b","left-b",-1716414262),((left_dx + right) + (1)),new cljs.core.Keyword(null,"right-b","right-b",33784407),((right_dx + right) + (1))], 0));

return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(el,"is-active");
}),new cljs.core.Keyword(null,"move","move",-2110884309),(function (e){
var dx__$1 = e.dx;
var pointer_x = Math.floor(e.clientX);
var map__46697 = cljs.core.deref(_STAR_field_rect);
var map__46697__$1 = cljs.core.__destructure_map(map__46697);
var left_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46697__$1,new cljs.core.Keyword(null,"left-b","left-b",-1716414262));
var right_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46697__$1,new cljs.core.Keyword(null,"right-b","right-b",33784407));
var left_b__$1 = Math.floor(left_b);
var right_b__$1 = Math.floor(right_b);
if((((pointer_x > left_b__$1)) && ((pointer_x < right_b__$1)))){
var G__46698 = (function (dx_SINGLEQUOTE_){
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc([min_width,max_width]),cljs.core.abs(dx_SINGLEQUOTE_))){
return dx_SINGLEQUOTE_;
} else {
var to_dx = ((function (){var or__5142__auto__ = dx_SINGLEQUOTE_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() + dx__$1);
var map__46699 = cljs.core.deref(_STAR_field_rect);
var map__46699__$1 = cljs.core.__destructure_map(map__46699);
var left_dx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46699__$1,new cljs.core.Keyword(null,"left-dx","left-dx",-1775595870));
var right_dx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46699__$1,new cljs.core.Keyword(null,"right-dx","right-dx",531815659));
if((to_dx < (0))){
if((cljs.core.abs(left_dx) > cljs.core.abs(to_dx))){
return to_dx;
} else {
return left_dx;
}
} else {
if((to_dx > (0))){
if((right_dx > to_dx)){
return to_dx;
} else {
return right_dx;
}
} else {
return null;
}
}
}
});
return (set_dx_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_dx_BANG_.cljs$core$IFn$_invoke$arity$1(G__46698) : set_dx_BANG_.call(null,G__46698));
} else {
return null;
}
}),new cljs.core.Keyword(null,"end","end",-268185958),(function (){
var G__46700 = (function (dx__$1){
var w_47563 = Math.round((dx__$1 + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_field_rect))));
var G__46701_47564 = (((w_47563 < min_width))?min_width:(((w_47563 > max_width))?max_width:w_47563
));
(set_width_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_width_BANG_.cljs$core$IFn$_invoke$arity$1(G__46701_47564) : set_width_BANG_.call(null,G__46701_47564));

cljs.core.reset_BANG_(_STAR_field_rect,null);

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(el,"is-active");

return (0);
});
return (set_dx_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_dx_BANG_.cljs$core$IFn$_invoke$arity$1(G__46700) : set_dx_BANG_.call(null,G__46700));
})], null)], null))).styleCursor(false).on("dragstart",add_resizing_class).on("dragend",remove_resizing_class).on("mousedown",frontend.util.stop_propagation);
} else {
return null;
}
}),cljs.core.PersistentVector.EMPTY);

logseq.shui.hooks.use_effect_BANG_((function (){
if(typeof width === 'number'){
return (on_sized_BANG_.cljs$core$IFn$_invoke$arity$1 ? on_sized_BANG_.cljs$core$IFn$_invoke$arity$1(width) : on_sized_BANG_.call(null,width));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [width], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.ls-table-resize-handle","a.ls-table-resize-handle",1045858935),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-no-dnd","data-no-dnd",-1118930833),true,new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$column_resizer__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46702 = cljs.core.first(args__31746__auto__);
var G__46703 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46702,G__46703) : io.factorhouse.hsx.core.obj_get.call(null,G__46702,G__46703));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"column-resizer","column-resizer",-1724063182,null),args__31746__auto__),frontend$components$views$column_resizer,args__31746__auto__,null);
}
};
var frontend$components$views$column_resizer = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47565__i = 0, G__47565__a = new Array(arguments.length -  0);
while (G__47565__i < G__47565__a.length) {G__47565__a[G__47565__i] = arguments[G__47565__i + 0]; ++G__47565__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47565__a,0,null);
} 
return frontend$components$views$column_resizer__delegate.call(this,args__31746__auto__);};
frontend$components$views$column_resizer.cljs$lang$maxFixedArity = 0;
frontend$components$views$column_resizer.cljs$lang$applyTo = (function (arglist__47566){
var args__31746__auto__ = cljs.core.seq(arglist__47566);
return frontend$components$views$column_resizer__delegate(args__31746__auto__);
});
frontend$components$views$column_resizer.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$column_resizer__delegate;
return frontend$components$views$column_resizer;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46704 = comp__31745__auto__;
var G__46705 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46704,G__46705) : io.factorhouse.hsx.core.react_memo.call(null,G__46704,G__46705));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"column-resizer");

return comp__31745__auto__;
})();
frontend.components.views.table_header_cell = (function frontend$components$views$table_header_cell(table,column){
var header_fn = new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(column);
var sized_columns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"sized-columns","sized-columns",-224617731)], null));
var set_sized_columns_BANG_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-fns","data-fns",-1065218324),new cljs.core.Keyword(null,"set-sized-columns!","set-sized-columns!",899502581)], null));
var width = frontend.components.views.get_column_size(column,sized_columns);
var select_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-table-header-cell","div.ls-table-header-cell",-452577868),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"min-width","min-width",1926193728),width], null),new cljs.core.Keyword(null,"class","class",-2030961996),((select_QMARK_)?"!border-0":null)], null),((cljs.core.fn_QMARK_(header_fn))?(header_fn.cljs$core$IFn$_invoke$arity$2 ? header_fn.cljs$core$IFn$_invoke$arity$2(table,column) : header_fn.call(null,table,column)):header_fn),((new cljs.core.Keyword(null,"resizable?","resizable?",20635134).cljs$core$IFn$_invoke$arity$1(column) === false)?null:frontend.components.views.column_resizer(column,(function (size){
var G__46706 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sized_columns,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column),size);
return (set_sized_columns_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_sized_columns_BANG_.cljs$core$IFn$_invoke$arity$1(G__46706) : set_sized_columns_BANG_.call(null,G__46706));
})))], null);
});
frontend.components.views.delete_pages_needs_confirm_QMARK_ = (function frontend$components$views$delete_pages_needs_confirm_QMARK_(view_parent,view_feature_type,pages){
return cljs.core.boolean$((function (){var and__5140__auto__ = cljs.core.seq(pages);
if(and__5140__auto__){
var G__46707 = view_feature_type;
var G__46707__$1 = (((G__46707 instanceof cljs.core.Keyword))?G__46707.fqn:null);
switch (G__46707__$1) {
case "class-objects":
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(view_parent));

break;
case "query-result":
case "all-pages":
return true;

break;
default:
return false;

}
} else {
return and__5140__auto__;
}
})());
});
frontend.components.views.on_delete_rows = (function frontend$components$views$on_delete_rows(view_parent,view_feature_type,table,selected_ids){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_blocks.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),selected_ids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (results){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","built-in?","logseq.property/built-in?",-1125958160),cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block","block",664686210),results))),(function (selected_rows){
return promesa.protocols._promise((function (){var pages = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(frontend.util.entity.page_QMARK_,selected_rows);
var blocks = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(frontend.util.entity.page_QMARK_,selected_rows);
var page_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),pages);
var map__46708 = new cljs.core.Keyword(null,"data-fns","data-fns",-1065218324).cljs$core$IFn$_invoke$arity$1(table);
var map__46708__$1 = cljs.core.__destructure_map(map__46708);
var set_row_selection_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46708__$1,new cljs.core.Keyword(null,"set-row-selection!","set-row-selection!",1872995139));
var clear_selection_BANG_ = (function (){
var G__46709 = cljs.core.PersistentArrayMap.EMPTY;
return (set_row_selection_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_row_selection_BANG_.cljs$core$IFn$_invoke$arity$1(G__46709) : set_row_selection_BANG_.call(null,G__46709));
});
var confirm_pages_QMARK_ = frontend.components.views.delete_pages_needs_confirm_QMARK_(view_parent,view_feature_type,pages);
var delete_rest_BANG_ = (function (){
var test_QMARK___35655__auto__ = frontend.util.node_test_QMARK_;
var ops__35656__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__35657__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__35657__auto__);

if(cljs.core.truth_(ops__35656__auto__)){
if(cljs.core.seq(blocks)){
frontend.modules.outliner.op.delete_blocks_BANG_(blocks,null);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_feature_type,new cljs.core.Keyword(null,"property-objects","property-objects",-1410914822))){
if(cljs.core.truth_(new cljs.core.Keyword("logseq.property","built-in?","logseq.property/built-in?",-1125958160).cljs$core$IFn$_invoke$arity$1(view_parent))){
return null;
} else {
var tx_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (pid){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),pid,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(view_parent)], null);
}),page_ids);
if(cljs.core.seq(tx_data)){
return frontend.modules.outliner.op.transact_BANG_(tx_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null));
} else {
return null;
}
}
} else {
return null;
}
} else {
var _STAR_outliner_ops_STAR__orig_val__46710 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__46711 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__46711);

try{if(cljs.core.seq(blocks)){
frontend.modules.outliner.op.delete_blocks_BANG_(blocks,null);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_feature_type,new cljs.core.Keyword(null,"property-objects","property-objects",-1410914822))){
if(cljs.core.truth_(new cljs.core.Keyword("logseq.property","built-in?","logseq.property/built-in?",-1125958160).cljs$core$IFn$_invoke$arity$1(view_parent))){
} else {
var tx_data_47568 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (pid){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),pid,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(view_parent)], null);
}),page_ids);
if(cljs.core.seq(tx_data_47568)){
frontend.modules.outliner.op.transact_BANG_(tx_data_47568,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null));
} else {
}
}
} else {
}

var r__35658__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__35658__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596)], null));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__46710);
}}
});
if(confirm_pages_QMARK_){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","show-delete-dialog","page/show-delete-dialog",1559514803),pages,(function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(delete_rest_BANG_()),(function (___21901__auto__){
return promesa.protocols._promise(clear_selection_BANG_());
}));
}));
})], null));
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(delete_rest_BANG_()),(function (___21901__auto__){
return promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_feature_type,new cljs.core.Keyword(null,"property-objects","property-objects",-1410914822));
if(and__5140__auto__){
return new cljs.core.Keyword("logseq.property","built-in?","logseq.property/built-in?",-1125958160).cljs$core$IFn$_invoke$arity$1(view_parent);
} else {
return and__5140__auto__;
}
})())?null:clear_selection_BANG_()));
}));
}));
}
})());
}));
}));
}));
});
frontend.components.views.always_eager_column_QMARK_ = (function frontend$components$views$always_eager_column_QMARK_(column){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword("block","title","block/title",710445684),null,new cljs.core.Keyword(null,"select","select",1147833503),null], null), null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column));
});
/**
 * Movies first paint mounted 24 cells per row. Keep name/select/id
 *   on the first frame and mount property columns after that paint.
 */
frontend.components.views.visible_unpinned_columns = (function frontend$components$views$visible_unpinned_columns(unpinned_columns,mount_unpinned_cells_QMARK_){
if(mount_unpinned_cells_QMARK_ === false){
return cljs.core.filterv(frontend.components.views.always_eager_column_QMARK_,unpinned_columns);
} else {
return cljs.core.vec(unpinned_columns);
}
});
frontend.components.views.table_header = (function frontend$components$views$table_header(table,p__46712){
var map__46713 = p__46712;
var map__46713__$1 = cljs.core.__destructure_map(map__46713);
var option = map__46713__$1;
var show_add_property_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46713__$1,new cljs.core.Keyword(null,"show-add-property?","show-add-property?",2062685338));
var add_property_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46713__$1,new cljs.core.Keyword(null,"add-property!","add-property!",1318392926));
var view_parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46713__$1,new cljs.core.Keyword(null,"view-parent","view-parent",675596601));
var view_feature_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46713__$1,new cljs.core.Keyword(null,"view-feature-type","view-feature-type",-945869610));
var set_ordered_columns_BANG_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-fns","data-fns",-1065218324),new cljs.core.Keyword(null,"set-ordered-columns!","set-ordered-columns!",-315299263)], null));
var pinned = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"pinned-columns","pinned-columns",-1218428870)], null));
var unpinned = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"unpinned-columns","unpinned-columns",1124489041)], null));
var row_selection = frontend.components.views.use_table_row_selection(table);
var map__46714 = frontend.components.views.table_selection_summary(table,row_selection);
var map__46714__$1 = cljs.core.__destructure_map(map__46714);
var selected_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46714__$1,new cljs.core.Keyword(null,"selected-rows","selected-rows",-1905738842));
var build_item = (function (column){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword(null,"content","content",15833224),frontend.components.views.table_header_cell(table,column),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword(null,"select","select",1147833503))], null);
});
var pinned_items = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(build_item,pinned);
var unpinned__$1 = frontend.components.views.visible_unpinned_columns(unpinned,new cljs.core.Keyword(null,"mount-unpinned-cells?","mount-unpinned-cells?",1283108385).cljs$core$IFn$_invoke$arity$1(option));
var unpinned_items = (cljs.core.truth_((function (){var and__5140__auto__ = show_add_property_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (!(new cljs.core.Keyword(null,"mount-unpinned-cells?","mount-unpinned-cells?",1283108385).cljs$core$IFn$_invoke$arity$1(option) === false));
} else {
return and__5140__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(build_item,unpinned__$1),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"add property",new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"-webkit-fill-available",new cljs.core.Keyword(null,"min-width","min-width",1926193728),(160)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(cljs.core.fn_QMARK_(add_property_BANG_)){
return (add_property_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_property_BANG_.cljs$core$IFn$_invoke$arity$1(e) : add_property_BANG_.call(null,e));
} else {
return null;
}
})], null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"add-new-property","add-new-property",1119839373),new cljs.core.Keyword(null,"content","content",15833224),frontend.components.views.add_property_button(),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),true], null)):cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(build_item,unpinned__$1));
var selection_rows_count = cljs.core.count(selected_rows);
return logseq.shui.ui.table_header(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"main-container","main-container",-1260526439),frontend.util.app_scroll_container_node.cljs$core$IFn$_invoke$arity$0()], null),((cljs.core.seq(pinned_items))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sticky-columns.flex.flex-row","div.sticky-columns.flex.flex-row",-2049518578),frontend.components.dnd.items(pinned_items,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false,new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671),(function (ordered_columns,_m){
return (set_ordered_columns_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_ordered_columns_BANG_.cljs$core$IFn$_invoke$arity$1(ordered_columns) : set_ordered_columns_BANG_.call(null,ordered_columns));
})], null))], null):null),((cljs.core.seq(unpinned_items))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row","div.flex.flex-row",209103675),frontend.components.dnd.items(unpinned_items,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false,new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671),(function (ordered_columns,_m){
return (set_ordered_columns_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_ordered_columns_BANG_.cljs$core$IFn$_invoke$arity$1(ordered_columns) : set_ordered_columns_BANG_.call(null,ordered_columns));
})], null))], null):null),(((selection_rows_count > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-action-bar.absolute.top-0.left-8","div.table-action-bar.absolute.top-0.left-8",966161012),frontend.components.views.action_bar(table,selected_rows,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(option,new cljs.core.Keyword(null,"on-delete-rows","on-delete-rows",464374868),(function (table__$1,selected_ids){
return frontend.components.views.on_delete_rows(view_parent,view_feature_type,table__$1,selected_ids);
})))], null):null));
});
frontend.components.views.lazy_table_cell = (function (){var render_fn__31744__auto__ = (function frontend$components$views$lazy_table_cell(cell_render_f,cell_placeholder){
var state = (function (){var G__46715 = ({"rootMargin": "0px"});
return (frontend.ui.useInView.cljs$core$IFn$_invoke$arity$1 ? frontend.ui.useInView.cljs$core$IFn$_invoke$arity$1(G__46715) : frontend.ui.useInView.call(null,G__46715));
})();
var in_view_QMARK_ = state.inView;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.h-full","div.h-full",-94699962),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),state.ref], null),(cljs.core.truth_(in_view_QMARK_)?(cell_render_f.cljs$core$IFn$_invoke$arity$0 ? cell_render_f.cljs$core$IFn$_invoke$arity$0() : cell_render_f.call(null)):cell_placeholder)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$lazy_table_cell__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46716 = cljs.core.first(args__31746__auto__);
var G__46717 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46716,G__46717) : io.factorhouse.hsx.core.obj_get.call(null,G__46716,G__46717));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"lazy-table-cell","lazy-table-cell",-1271332511,null),args__31746__auto__),frontend$components$views$lazy_table_cell,args__31746__auto__,null);
}
};
var frontend$components$views$lazy_table_cell = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47569__i = 0, G__47569__a = new Array(arguments.length -  0);
while (G__47569__i < G__47569__a.length) {G__47569__a[G__47569__i] = arguments[G__47569__i + 0]; ++G__47569__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47569__a,0,null);
} 
return frontend$components$views$lazy_table_cell__delegate.call(this,args__31746__auto__);};
frontend$components$views$lazy_table_cell.cljs$lang$maxFixedArity = 0;
frontend$components$views$lazy_table_cell.cljs$lang$applyTo = (function (arglist__47570){
var args__31746__auto__ = cljs.core.seq(arglist__47570);
return frontend$components$views$lazy_table_cell__delegate(args__31746__auto__);
});
frontend$components$views$lazy_table_cell.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$lazy_table_cell__delegate;
return frontend$components$views$lazy_table_cell;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46718 = comp__31745__auto__;
var G__46719 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46718,G__46719) : io.factorhouse.hsx.core.react_memo.call(null,G__46718,G__46719));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"lazy-table-cell");

return comp__31745__auto__;
})();
/**
 * Virtuoso windows rows. Unpinned property columns stay lazy. The name
 *   column is on-screen even when it is not pinned, so it stays eager.
 */
frontend.components.views.eager_table_cells_QMARK_ = (function frontend$components$views$eager_table_cells_QMARK_(disable_virtualized_QMARK_,column,lazy_column_QMARK_){
return ((cljs.core.not(disable_virtualized_QMARK_)) && (((frontend.components.views.always_eager_column_QMARK_(column)) || (cljs.core.not(lazy_column_QMARK_)))));
});
frontend.components.views.click_cell = (function frontend$components$views$click_cell(node){
var temp__5825__auto__ = (dommy.utils.__GT_Array(node.getElementsByClassName("jtrigger"))[(0)]);
if(cljs.core.truth_(temp__5825__auto__)){
var trigger = temp__5825__auto__;
return trigger.click();
} else {
return null;
}
});
frontend.components.views.navigate_to_cell = (function frontend$components$views$navigate_to_cell(e,cell,direction){
frontend.util.stop(e);

var row = frontend.util.rec_get_node(cell,"ls-table-row");
var cells = dommy.utils.__GT_Array(row.getElementsByClassName("ls-table-cell"));
var idx = cells.indexOf(cell);
var rows_container = frontend.util.rec_get_node(row,"ls-table-rows");
var rows = dommy.utils.__GT_Array(rows_container.getElementsByClassName("ls-table-row"));
var row_idx = rows.indexOf(row);
var container_left = rows_container.getBoundingClientRect().left;
var next_cell = (function (){var G__46720 = direction;
var G__46720__$1 = (((G__46720 instanceof cljs.core.Keyword))?G__46720.fqn:null);
switch (G__46720__$1) {
case "left":
if((idx > (1))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cells,(idx - (1)));
} else {
var prev_row = (((row_idx > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rows,(row_idx - (1))):null);
if(cljs.core.truth_(prev_row)){
var cells__$1 = dommy.utils.__GT_Array(prev_row.getElementsByClassName("ls-table-cell"));
return cljs.core.last(cells__$1);
} else {
return null;
}
}

break;
case "right":
if((idx < (cljs.core.count(cells) - (1)))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cells,(idx + (1)));
} else {
var next_row = (((row_idx < (cljs.core.count(rows) - (1))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rows,(row_idx + (1))):null);
if(cljs.core.truth_(next_row)){
var cells__$1 = dommy.utils.__GT_Array(next_row.getElementsByClassName("ls-table-cell"));
return cljs.core.second(cells__$1);
} else {
return null;
}
}

break;
case "up":
var prev_row = (((row_idx > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rows,(row_idx - (1))):null);
if(cljs.core.truth_(prev_row)){
var cells__$1 = dommy.utils.__GT_Array(prev_row.getElementsByClassName("ls-table-cell"));
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cells__$1,idx);
} else {
return null;
}

break;
case "down":
var next_row = (((row_idx < (cljs.core.count(rows) - (1))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rows,(row_idx + (1))):null);
if(cljs.core.truth_(next_row)){
var cells__$1 = dommy.utils.__GT_Array(next_row.getElementsByClassName("ls-table-cell"));
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cells__$1,idx);
} else {
return null;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46720__$1))));

}
})();
if(cljs.core.truth_(next_cell)){
var next_cell_left = next_cell.getBoundingClientRect().left;
frontend.state.clear_selection_BANG_();

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(next_cell,"selected");

next_cell.focus();

if((next_cell_left < container_left)){
return next_cell.scrollIntoView(({"inline": "center", "block": "nearest"}));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Plain text used for native title tooltips on clipped table cells.
 */
frontend.components.views.table_cell_plain_value = (function frontend$components$views$table_cell_plain_value(row,column){
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column);
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"add-property","add-property",-714058455),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"select","select",1147833503),null], null), null),id)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","title","block/title",710445684),id)){
var G__46721 = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(row);
if((G__46721 == null)){
return null;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46721));
}
} else {
if(cljs.core.fn_QMARK_(new cljs.core.Keyword(null,"get-value","get-value",2108514284).cljs$core$IFn$_invoke$arity$1(column))){
var value = (function (){var fexpr__46722 = new cljs.core.Keyword(null,"get-value","get-value",2108514284).cljs$core$IFn$_invoke$arity$1(column);
return (fexpr__46722.cljs$core$IFn$_invoke$arity$1 ? fexpr__46722.cljs$core$IFn$_invoke$arity$1(row) : fexpr__46722.call(null,row));
})();
if((!((value == null)))){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
} else {
return null;
}
} else {
return null;

}
}
}
});
frontend.components.views.table_cell_container = (function (){var render_fn__31744__auto__ = (function frontend$components$views$table_cell_container(cell_opts,body){
var _STAR_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
return logseq.shui.ui.table_cell(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cell_opts,new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_ref,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(cljs.core.truth_((function (){var G__46723 = e.target;
if((G__46723 == null)){
return null;
} else {
return G__46723.closest(".jtrigger");
}
})())){
return null;
} else {
return frontend.components.views.click_cell(logseq.shui.hooks.deref(_STAR_ref));
}
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
var container = logseq.shui.hooks.deref(_STAR_ref);
var G__46724 = frontend.util.ekey(e);
switch (G__46724) {
case "Escape":
if(cljs.core.truth_(frontend.util.input_QMARK_(e.target))){
frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [container], null));

container.focus();
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(container,"selected");

var row_47573 = frontend.util.rec_get_node(container,"ls-table-row");
frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_47573], null));
}

return frontend.util.stop(e);

break;
case "Enter":
if(cljs.core.truth_(frontend.util.input_QMARK_(e.target))){
frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [container], null));

container.focus();
} else {
frontend.components.views.click_cell(container);
}

return frontend.util.stop(e);

break;
case "ArrowUp":
return frontend.components.views.navigate_to_cell(e,container,new cljs.core.Keyword(null,"up","up",-269712113));

break;
case "ArrowDown":
return frontend.components.views.navigate_to_cell(e,container,new cljs.core.Keyword(null,"down","down",1565245570));

break;
case "ArrowLeft":
return frontend.components.views.navigate_to_cell(e,container,new cljs.core.Keyword(null,"left","left",-399115937));

break;
case "ArrowRight":
return frontend.components.views.navigate_to_cell(e,container,new cljs.core.Keyword(null,"right","right",-452581833));

break;
default:
return null;

}
})], 0)),body);
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$table_cell_container__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46725 = cljs.core.first(args__31746__auto__);
var G__46726 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46725,G__46726) : io.factorhouse.hsx.core.obj_get.call(null,G__46725,G__46726));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"table-cell-container","table-cell-container",617950071,null),args__31746__auto__),frontend$components$views$table_cell_container,args__31746__auto__,null);
}
};
var frontend$components$views$table_cell_container = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47574__i = 0, G__47574__a = new Array(arguments.length -  0);
while (G__47574__i < G__47574__a.length) {G__47574__a[G__47574__i] = arguments[G__47574__i + 0]; ++G__47574__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47574__a,0,null);
} 
return frontend$components$views$table_cell_container__delegate.call(this,args__31746__auto__);};
frontend$components$views$table_cell_container.cljs$lang$maxFixedArity = 0;
frontend$components$views$table_cell_container.cljs$lang$applyTo = (function (arglist__47575){
var args__31746__auto__ = cljs.core.seq(arglist__47575);
return frontend$components$views$table_cell_container__delegate(args__31746__auto__);
});
frontend$components$views$table_cell_container.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$table_cell_container__delegate;
return frontend$components$views$table_cell_container;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46727 = comp__31745__auto__;
var G__46728 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46727,G__46728) : io.factorhouse.hsx.core.react_memo.call(null,G__46727,G__46728));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"table-cell-container");

return comp__31745__auto__;
})();
frontend.components.views.table_fixed_row_height = (33);
frontend.components.views.table_row_inner = (function (){var render_fn__31744__auto__ = (function frontend$components$views$table_row_inner(table,row,props,p__46731){
var map__46732 = p__46731;
var map__46732__$1 = cljs.core.__destructure_map(map__46732);
var show_add_property_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46732__$1,new cljs.core.Keyword(null,"show-add-property?","show-add-property?",2062685338));
var scrolling_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46732__$1,new cljs.core.Keyword(null,"scrolling?","scrolling?",-365022499));
var disable_virtualized_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46732__$1,new cljs.core.Keyword(null,"disable-virtualized?","disable-virtualized?",-1546442714));
var mount_unpinned_cells_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46732__$1,new cljs.core.Keyword(null,"mount-unpinned-cells?","mount-unpinned-cells?",1283108385));
var _STAR_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var pinned_columns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"pinned-columns","pinned-columns",-1218428870)], null));
var unpinned = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"unpinned-columns","unpinned-columns",1124489041)], null));
var unpinned_columns = frontend.components.views.visible_unpinned_columns((cljs.core.truth_((function (){var and__5140__auto__ = show_add_property_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (!(mount_unpinned_cells_QMARK_ === false));
} else {
return and__5140__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(unpinned),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"add-property","add-property",-714058455),new cljs.core.Keyword(null,"cell","cell",764245084),(function (_table,_row,_column){
return null;
})], null)):unpinned),mount_unpinned_cells_QMARK_);
var sized_columns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"sized-columns","sized-columns",-224617731)], null));
var row_cell_f = (function (column,cell_option){
var id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(row))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column)));
var width = frontend.components.views.get_column_size(column,sized_columns);
var select_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword(null,"select","select",1147833503));
var add_property_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword(null,"add-property","add-property",-714058455));
var style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"min-width","min-width",1926193728),width], null);
var cell_title = frontend.components.views.table_cell_plain_value(row,column);
var cell_opts = (function (){var G__46733 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"select?","select?",-1012224063),select_QMARK_,new cljs.core.Keyword(null,"add-property?","add-property?",1697808154),add_property_QMARK_,new cljs.core.Keyword(null,"style","style",-496642736),style], null);
if((!(clojure.string.blank_QMARK_(cell_title)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46733,new cljs.core.Keyword(null,"title","title",636505583),cell_title);
} else {
return G__46733;
}
})();
var lazy_column_QMARK_ = new cljs.core.Keyword(null,"lazy?","lazy?",2035907855).cljs$core$IFn$_invoke$arity$1(cell_option);
var eager_cell_QMARK_ = frontend.components.views.eager_table_cells_QMARK_(disable_virtualized_QMARK_,column,lazy_column_QMARK_);
if(cljs.core.truth_((function (){var and__5140__auto__ = scrolling_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(row));
} else {
return and__5140__auto__;
}
})())){
return frontend.components.views.table_cell_container(cell_opts,null);
} else {
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(column,new cljs.core.Keyword(null,"cell","cell",764245084));
if(cljs.core.truth_(temp__5825__auto__)){
var render = temp__5825__auto__;
var cell_render = (function (){
return frontend.components.views.table_cell_container(cell_opts,(render.cljs$core$IFn$_invoke$arity$4 ? render.cljs$core$IFn$_invoke$arity$4(table,row,column,style) : render.call(null,table,row,column,style)));
});
if(eager_cell_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.h-full","div.h-full",-94699962),cell_render()], null);
} else {
if(mount_unpinned_cells_QMARK_ === false){
return frontend.components.views.table_cell_container(cell_opts,null);
} else {
return frontend.components.views.lazy_table_cell(cell_render,frontend.components.views.table_cell_container(cell_opts,null));

}
}
} else {
return null;
}
}
});
return logseq.shui.ui.table_row(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(row))),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(0),new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_ref,new cljs.core.Keyword(null,"data-id","data-id",1023855591),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"blockid","blockid",-664467760),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(row))),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
var container = logseq.shui.hooks.deref(_STAR_ref);
if(dommy.core.has_class_QMARK_(container,"selected")){
var G__46734 = frontend.util.ekey(e);
switch (G__46734) {
case "Enter":
frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"block","block",664686210));

frontend.state.clear_selection_BANG_();

return frontend.util.stop(e);

break;
case "ArrowLeft":
var temp__5825__auto___47577 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (node){
return (!(((dommy.utils.__GT_Array(node.getElementsByClassName("ui__checkbox"))[(0)]) == null)));
}),dommy.utils.__GT_Array(container.getElementsByClassName("ls-table-cell"))));
if(cljs.core.truth_(temp__5825__auto___47577)){
var cell_47578 = temp__5825__auto___47577;
frontend.state.clear_selection_BANG_();

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(cell_47578,"selected");

cell_47578.focus();
} else {
}

return frontend.util.stop(e);

break;
case "ArrowRight":
var temp__5825__auto___47579 = cljs.core.last(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (node){
return (!(((dommy.utils.__GT_Array(node.getElementsByClassName("ui__checkbox"))[(0)]) == null)));
}),dommy.utils.__GT_Array(container.getElementsByClassName("ls-table-cell"))));
if(cljs.core.truth_(temp__5825__auto___47579)){
var cell_47580 = temp__5825__auto___47579;
frontend.state.clear_selection_BANG_();

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(container,"selected");

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(cell_47580,"selected");

cell_47580.focus();
} else {
}

return frontend.util.stop(e);

break;
case "Escape":
frontend.state.clear_selection_BANG_();

return frontend.util.stop(e);

break;
default:
return null;

}
} else {
return null;
}
})], null)], 0)),((cljs.core.seq(pinned_columns))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sticky-columns.flex.flex-row","div.sticky-columns.flex.flex-row",-2049518578)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46729_SHARP_){
return row_cell_f(p1__46729_SHARP_,cljs.core.PersistentArrayMap.EMPTY);
}),pinned_columns)):null),((cljs.core.seq(unpinned_columns))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row","div.flex.flex-row",209103675)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46730_SHARP_){
return row_cell_f(p1__46730_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lazy?","lazy?",2035907855),true], null));
}),unpinned_columns)):null));
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$table_row_inner__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46735 = cljs.core.first(args__31746__auto__);
var G__46736 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46735,G__46736) : io.factorhouse.hsx.core.obj_get.call(null,G__46735,G__46736));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"table-row-inner","table-row-inner",857858309,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$views$table_row_inner,args__31746__auto__,null);
}
};
var frontend$components$views$table_row_inner = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47581__i = 0, G__47581__a = new Array(arguments.length -  0);
while (G__47581__i < G__47581__a.length) {G__47581__a[G__47581__i] = arguments[G__47581__i + 0]; ++G__47581__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47581__a,0,null);
} 
return frontend$components$views$table_row_inner__delegate.call(this,args__31746__auto__);};
frontend$components$views$table_row_inner.cljs$lang$maxFixedArity = 0;
frontend$components$views$table_row_inner.cljs$lang$applyTo = (function (arglist__47582){
var args__31746__auto__ = cljs.core.seq(arglist__47582);
return frontend$components$views$table_row_inner__delegate(args__31746__auto__);
});
frontend$components$views$table_row_inner.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$table_row_inner__delegate;
return frontend$components$views$table_row_inner;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46737 = comp__31745__auto__;
var G__46738 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46737,G__46738) : io.factorhouse.hsx.core.react_memo.call(null,G__46737,G__46738));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"table-row-inner");

return comp__31745__auto__;
})();
frontend.components.views.table_row = (function (){var render_fn__31744__auto__ = (function frontend$components$views$table_row(table,row,props,option){
var row_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(row,new cljs.core.Keyword("block","tags","block/tags",1814948340),(function (tags){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (tag){
if(cljs.core.map_QMARK_(tag)){
return tag;
} else {
return null;
}
}),tags);
})),new cljs.core.Keyword("block.temp","refs-count","block.temp/refs-count",-598132499),new cljs.core.Keyword("block.temp","refs-count","block.temp/refs-count",-598132499).cljs$core$IFn$_invoke$arity$1(row));
return frontend.components.views.table_row_inner(table,row_SINGLEQUOTE_,props,option);
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$table_row__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46739 = cljs.core.first(args__31746__auto__);
var G__46740 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46739,G__46740) : io.factorhouse.hsx.core.obj_get.call(null,G__46739,G__46740));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"table-row","table-row",1759489514,null),args__31746__auto__),frontend$components$views$table_row,args__31746__auto__,null);
}
};
var frontend$components$views$table_row = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47583__i = 0, G__47583__a = new Array(arguments.length -  0);
while (G__47583__i < G__47583__a.length) {G__47583__a[G__47583__i] = arguments[G__47583__i + 0]; ++G__47583__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47583__a,0,null);
} 
return frontend$components$views$table_row__delegate.call(this,args__31746__auto__);};
frontend$components$views$table_row.cljs$lang$maxFixedArity = 0;
frontend$components$views$table_row.cljs$lang$applyTo = (function (arglist__47584){
var args__31746__auto__ = cljs.core.seq(arglist__47584);
return frontend$components$views$table_row__delegate(args__31746__auto__);
});
frontend$components$views$table_row.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$table_row__delegate;
return frontend$components$views$table_row;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46741 = comp__31745__auto__;
var G__46742 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46741,G__46742) : io.factorhouse.hsx.core.react_memo.call(null,G__46741,G__46742));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"table-row");

return comp__31745__auto__;
})();
frontend.components.views.table_row_placeholder = (function (){var render_fn__31744__auto__ = (function frontend$components$views$table_row_placeholder(table,idx,option){
var pinned_columns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"pinned-columns","pinned-columns",-1218428870)], null));
var unpinned = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"unpinned-columns","unpinned-columns",1124489041)], null));
var show_add_property_QMARK_ = new cljs.core.Keyword(null,"show-add-property?","show-add-property?",2062685338).cljs$core$IFn$_invoke$arity$1(option);
var sized_columns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"sized-columns","sized-columns",-224617731)], null));
var unpinned_columns = (function (){var G__46743 = cljs.core.vec(unpinned);
if(cljs.core.truth_(show_add_property_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__46743,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"add-property","add-property",-714058455)], null));
} else {
return G__46743;
}
})();
var cell = (function (column){
var width = frontend.components.views.get_column_size(column,sized_columns);
var add_property_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword(null,"add-property","add-property",-714058455));
var select_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword(null,"select","select",1147833503));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-table-cell.flex.relative.h-full","div.ls-table-cell.flex.relative.h-full",1484681107),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"placeholder-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column))),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"min-width","min-width",1926193728),width], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"flex align-middle w-full overflow-x-clip items-center"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((select_QMARK_)?" px-0":((add_property_QMARK_)?"":" border-r px-2"
))))], null)], null)], null);
});
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-table-row.ls-block.flex.flex-row.items-center.border-b.transition-colors.bg-gray-01.items-stretch","div.ls-table-row.ls-block.flex.flex-row.items-center.border-b.transition-colors.bg-gray-01.items-stretch",-1905089839),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"placeholder-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),frontend.components.views.table_fixed_row_height,new cljs.core.Keyword(null,"max-height","max-height",-612563804),frontend.components.views.table_fixed_row_height,new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),((cljs.core.seq(pinned_columns))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sticky-columns.flex.flex-row","div.sticky-columns.flex.flex-row",-2049518578)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cell,pinned_columns)):null),((cljs.core.seq(unpinned_columns))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row","div.flex.flex-row",209103675)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cell,unpinned_columns)):null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$table_row_placeholder__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46744 = cljs.core.first(args__31746__auto__);
var G__46745 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46744,G__46745) : io.factorhouse.hsx.core.obj_get.call(null,G__46744,G__46745));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"table-row-placeholder","table-row-placeholder",698988831,null),args__31746__auto__),frontend$components$views$table_row_placeholder,args__31746__auto__,null);
}
};
var frontend$components$views$table_row_placeholder = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47585__i = 0, G__47585__a = new Array(arguments.length -  0);
while (G__47585__i < G__47585__a.length) {G__47585__a[G__47585__i] = arguments[G__47585__i + 0]; ++G__47585__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47585__a,0,null);
} 
return frontend$components$views$table_row_placeholder__delegate.call(this,args__31746__auto__);};
frontend$components$views$table_row_placeholder.cljs$lang$maxFixedArity = 0;
frontend$components$views$table_row_placeholder.cljs$lang$applyTo = (function (arglist__47586){
var args__31746__auto__ = cljs.core.seq(arglist__47586);
return frontend$components$views$table_row_placeholder__delegate(args__31746__auto__);
});
frontend$components$views$table_row_placeholder.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$table_row_placeholder__delegate;
return frontend$components$views$table_row_placeholder;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46746 = comp__31745__auto__;
var G__46747 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46746,G__46747) : io.factorhouse.hsx.core.react_memo.call(null,G__46746,G__46747));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"table-row-placeholder");

return comp__31745__auto__;
})();
frontend.components.views.search = (function (){var render_fn__31744__auto__ = (function frontend$components$views$search(input,p__46748){
var map__46749 = p__46748;
var map__46749__$1 = cljs.core.__destructure_map(map__46749);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46749__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var set_input_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46749__$1,new cljs.core.Keyword(null,"set-input!","set-input!",-615513292));
var vec__46750 = logseq.shui.hooks.use_state(false);
var show_input_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46750,(0),null);
var set_show_input_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46750,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center","div.flex.flex-row.items-center",2086153476),(function (){var G__46753 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),"ghost",new cljs.core.Keyword(null,"class","class",-2030961996),"text-muted-foreground !px-1",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(show_input_QMARK_)){
return null;
} else {
return (set_show_input_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_show_input_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_show_input_BANG_.call(null,true));
}
})], null);
var G__46754 = frontend.ui.icon("search",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(15)], null));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__46753,G__46754) : logseq.shui.ui.button.call(null,G__46753,G__46754));
})(),(cljs.core.truth_(show_input_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(function (){var G__46755 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.filter","type-to-search","view.filter/type-to-search",-532868306)], 0)),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"value","value",305978217),input,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var value = frontend.util.evalue(e);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(value) : on_change.call(null,value));
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Escape",frontend.util.ekey(e))){
(set_show_input_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_show_input_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_show_input_BANG_.call(null,false));

return (set_input_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_input_BANG_.call(null,""));
} else {
return null;
}
}),new cljs.core.Keyword(null,"class","class",-2030961996),"max-w-sm !h-7 !py-0 border-none focus-visible:ring-0 focus-visible:ring-offset-0"], null);
return (logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1(G__46755) : logseq.shui.ui.input.call(null,G__46755));
})(),(function (){var G__46756 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),"ghost",new cljs.core.Keyword(null,"class","class",-2030961996),"text-muted-foreground !px-1",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(set_show_input_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_show_input_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_show_input_BANG_.call(null,false));

return (set_input_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_input_BANG_.call(null,""));
})], null);
var G__46757 = frontend.ui.icon("x");
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__46756,G__46757) : logseq.shui.ui.button.call(null,G__46756,G__46757));
})()], null):null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$search__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46758 = cljs.core.first(args__31746__auto__);
var G__46759 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46758,G__46759) : io.factorhouse.hsx.core.obj_get.call(null,G__46758,G__46759));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"search","search",-1089495947,null),args__31746__auto__),frontend$components$views$search,args__31746__auto__,null);
}
};
var frontend$components$views$search = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47587__i = 0, G__47587__a = new Array(arguments.length -  0);
while (G__47587__i < G__47587__a.length) {G__47587__a[G__47587__i] = arguments[G__47587__i + 0]; ++G__47587__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47587__a,0,null);
} 
return frontend$components$views$search__delegate.call(this,args__31746__auto__);};
frontend$components$views$search.cljs$lang$maxFixedArity = 0;
frontend$components$views$search.cljs$lang$applyTo = (function (arglist__47588){
var args__31746__auto__ = cljs.core.seq(arglist__47588);
return frontend$components$views$search__delegate(args__31746__auto__);
});
frontend$components$views$search.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$search__delegate;
return frontend$components$views$search;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46760 = comp__31745__auto__;
var G__46761 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46760,G__46761) : io.factorhouse.hsx.core.react_memo.call(null,G__46760,G__46761));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"search");

return comp__31745__auto__;
})();
frontend.components.views.datetime_property_QMARK_ = (function frontend$components$views$datetime_property_QMARK_(property){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"datetime","datetime",494675702),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property))) || (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),null,new cljs.core.Keyword("block","created-at","block/created-at",1440015),null], null), null),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property))));
});
frontend.components.views.timestamp_options = (function frontend$components$views$timestamp_options(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"1 day ago",new cljs.core.Keyword(null,"label","label",1718410804),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.filter","relative-1-day-ago","view.filter/relative-1-day-ago",-1766748488)], 0))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"3 days ago",new cljs.core.Keyword(null,"label","label",1718410804),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.filter","relative-3-days-ago","view.filter/relative-3-days-ago",-1831043761)], 0))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"1 week ago",new cljs.core.Keyword(null,"label","label",1718410804),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.filter","relative-1-week-ago","view.filter/relative-1-week-ago",2144329873)], 0))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"1 month ago",new cljs.core.Keyword(null,"label","label",1718410804),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.filter","relative-1-month-ago","view.filter/relative-1-month-ago",879479401)], 0))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"3 months ago",new cljs.core.Keyword(null,"label","label",1718410804),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.filter","relative-3-months-ago","view.filter/relative-3-months-ago",1088824579)], 0))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"1 year ago",new cljs.core.Keyword(null,"label","label",1718410804),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.filter","relative-1-year-ago","view.filter/relative-1-year-ago",-992176610)], 0))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"custom-date","custom-date",-632022020),new cljs.core.Keyword(null,"label","label",1718410804),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.filter","custom-date","view.filter/custom-date",-1934165223)], 0))], null)], null);
});
frontend.components.views.filter_property = (function (){var render_fn__31744__auto__ = (function frontend$components$views$filter_property(view_entity,columns,p__46763,opts){
var map__46764 = p__46763;
var map__46764__$1 = cljs.core.__destructure_map(map__46764);
var table = map__46764__$1;
var data_fns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46764__$1,new cljs.core.Keyword(null,"data-fns","data-fns",-1065218324));
var vec__46765 = logseq.shui.hooks.use_state(null);
var property = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46765,(0),null);
var set_property_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46765,(1),null);
var vec__46768 = logseq.shui.hooks.use_state(null);
var filter_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46768,(0),null);
var set_filter_data_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46768,(1),null);
var timestamp_QMARK_ = frontend.components.views.datetime_property_QMARK_(property);
var set_filters_BANG_ = new cljs.core.Keyword(null,"set-filters!","set-filters!",385623142).cljs$core$IFn$_invoke$arity$1(data_fns);
var filters = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"filters","filters",974726919)], null));
var columns__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(frontend.components.views.filterable_column_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__46762_SHARP_){
return ((new cljs.core.Keyword(null,"column-list?","column-list?",-538229318).cljs$core$IFn$_invoke$arity$1(p1__46762_SHARP_) === false) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__46762_SHARP_))));
}),columns));
var items = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (column){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword(null,"value","value",305978217),column], null);
}),columns__$1);
var option = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"input-default-placeholder","input-default-placeholder",-1040139250),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.filter","filter","view.filter/filter",-1793780265)], 0)),new cljs.core.Keyword(null,"input-opts","input-opts",1688681135),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"!px-2 !py-1"], null),new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"extract-chosen-fn","extract-chosen-fn",1058364622),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (column){
var property__$1 = frontend.components.views.column_property(column);
var internal_property = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(column)], null);
if(cljs.core.truth_((function (){var or__5142__auto__ = property__$1;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(property__$1))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword(null,"string","string",-1989541586))));
}
})())){
var G__46771 = (function (){var or__5142__auto__ = property__$1;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return internal_property;
}
})();
return (set_property_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_property_BANG_.cljs$core$IFn$_invoke$arity$1(G__46771) : set_property_BANG_.call(null,G__46771));
} else {
(logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));

var property__$2 = internal_property;
var new_filter = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property__$2),new cljs.core.Keyword(null,"text-contains","text-contains",-1761634668)], null);
var filters_SINGLEQUOTE_ = ((cljs.core.seq(new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(filters)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(filters),new_filter):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_filter], null));
var G__46772 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"or?","or?",-1226532173),new cljs.core.Keyword(null,"or?","or?",-1226532173).cljs$core$IFn$_invoke$arity$1(filters),new cljs.core.Keyword(null,"filters","filters",974726919),filters_SINGLEQUOTE_], null);
return (set_filters_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_filters_BANG_.cljs$core$IFn$_invoke$arity$1(G__46772) : set_filters_BANG_.call(null,G__46772));
}
})], null);
var checkbox_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property));
var property_ident = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property);
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_((function (){var and__5140__auto__ = view_entity;
if(cljs.core.truth_(and__5140__auto__)){
return property_ident;
} else {
return and__5140__auto__;
}
})())){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_view_filter_data.cljs$core$IFn$_invoke$arity$variadic(property,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view-id","view-id",1118263032),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(view_entity),new cljs.core.Keyword(null,"query-entity-ids","query-entity-ids",2135324416),new cljs.core.Keyword(null,"query-entity-ids","query-entity-ids",2135324416).cljs$core$IFn$_invoke$arity$1(opts)], null)], 0))),(function (data){
return promesa.protocols._promise((set_filter_data_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_filter_data_BANG_.cljs$core$IFn$_invoke$arity$1(data) : set_filter_data_BANG_.call(null,data)));
}));
}));
} else {
return (set_filter_data_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_filter_data_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_filter_data_BANG_.call(null,null));
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [property_ident], null));

var value_source = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"value-source","value-source",149515667).cljs$core$IFn$_invoke$arity$1(filter_data);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(timestamp_QMARK_){
return new cljs.core.Keyword(null,"timestamp","timestamp",579478971);
} else {
if(checkbox_QMARK_){
return new cljs.core.Keyword(null,"checkbox","checkbox",1612615655);
} else {
if(cljs.core.truth_(property)){
return new cljs.core.Keyword(null,"property-values","property-values",-730840992);
} else {
return null;
}
}
}
}
})();
var option__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"timestamp","timestamp",579478971),value_source))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([option,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1031954938),frontend.components.views.timestamp_options(),new cljs.core.Keyword(null,"input-default-placeholder","input-default-placeholder",-1040139250),(cljs.core.truth_(property)?logseq.db.frontend.property.built_in_display_title(property,frontend.context.i18n.t):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("select","default-prompt","select/default-prompt",-657561626)], 0))),new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (value,_,___$1,e){
(logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));

var set_filter_fn = (function (value__$1){
var filters_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(filters),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword(null,"after","after",594996914),value__$1], null));
var G__46773 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"or?","or?",-1226532173),new cljs.core.Keyword(null,"or?","or?",-1226532173).cljs$core$IFn$_invoke$arity$1(filters),new cljs.core.Keyword(null,"filters","filters",974726919),filters_SINGLEQUOTE_], null);
return (set_filters_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_filters_BANG_.cljs$core$IFn$_invoke$arity$1(G__46773) : set_filters_BANG_.call(null,G__46773));
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"custom-date","custom-date",-632022020))){
var G__46774 = e.target;
var G__46775 = frontend.ui.nlp_calendar(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-focus","initial-focus",1154999719),true,new cljs.core.Keyword(null,"datetime?","datetime?",-1173480100),false,new cljs.core.Keyword(null,"on-day-click","on-day-click",1918658076),(function (value__$1){
set_filter_fn(value__$1);

return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
})], null));
var G__46776 = cljs.core.PersistentArrayMap.EMPTY;
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__46774,G__46775,G__46776) : logseq.shui.ui.popup_show_BANG_.call(null,G__46774,G__46775,G__46776));
} else {
return set_filter_fn(value);
}
})], null)], 0)):(cljs.core.truth_(property)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),value_source))?(function (){var items__$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),true,new cljs.core.Keyword(null,"label","label",1718410804),clojure.string.lower_case(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","true","ui/true",-1114206346)], 0)))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),false,new cljs.core.Keyword(null,"label","label",1718410804),clojure.string.lower_case(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","false","ui/false",1277709361)], 0)))], null)], null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([option,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1031954938),items__$1,new cljs.core.Keyword(null,"input-default-placeholder","input-default-placeholder",-1040139250),(cljs.core.truth_(property)?logseq.db.frontend.property.built_in_display_title(property,frontend.context.i18n.t):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("select","default-prompt","select/default-prompt",-657561626)], 0))),new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (value){
var filters_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(filters),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword(null,"is","is",369128998),value], null));
var G__46777 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"or?","or?",-1226532173),new cljs.core.Keyword(null,"or?","or?",-1226532173).cljs$core$IFn$_invoke$arity$1(filters),new cljs.core.Keyword(null,"filters","filters",974726919),filters_SINGLEQUOTE_], null);
return (set_filters_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_filters_BANG_.cljs$core$IFn$_invoke$arity$1(G__46777) : set_filters_BANG_.call(null,G__46777));
})], null)], 0));
})():(function (){var items__$1 = new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(filter_data);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([option,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"items","items",1031954938),items__$1,new cljs.core.Keyword(null,"input-default-placeholder","input-default-placeholder",-1040139250),(cljs.core.truth_(property)?logseq.db.frontend.property.built_in_display_title(property,frontend.context.i18n.t):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("select","default-prompt","select/default-prompt",-657561626)], 0))),new cljs.core.Keyword(null,"multiple-choices?","multiple-choices?",-1858892490),true,new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (_value,_selected_QMARK_,selected){
var selected_value = (cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.map_QMARK_(cljs.core.first(selected));
if(and__5140__auto__){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(cljs.core.first(selected));
} else {
return and__5140__auto__;
}
})())?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),selected)):selected);
var filters_SINGLEQUOTE_ = ((cljs.core.seq(selected))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(filters),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword(null,"is","is",369128998),selected_value], null)):new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(filters));
var G__46778 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"or?","or?",-1226532173),new cljs.core.Keyword(null,"or?","or?",-1226532173).cljs$core$IFn$_invoke$arity$1(filters),new cljs.core.Keyword(null,"filters","filters",974726919),filters_SINGLEQUOTE_], null);
return (set_filters_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_filters_BANG_.cljs$core$IFn$_invoke$arity$1(G__46778) : set_filters_BANG_.call(null,G__46778));
})], null)], 0));
})()):option
));
if(cljs.core.truth_((function (){var and__5140__auto__ = property;
if(cljs.core.truth_(and__5140__auto__)){
return (!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),null,new cljs.core.Keyword("block","created-at","block/created-at",1440015),null], null), null),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property))));
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-1.text-sm","div.flex.flex-col.gap-1.text-sm",504270069),frontend.components.select.select(option__$1),(function (){var G__46779 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),"justify-start",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var filters_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(filters),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword(null,"is","is",369128998),new cljs.core.Keyword(null,"empty","empty",767870958)], null));
var G__46781 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"or?","or?",-1226532173),new cljs.core.Keyword(null,"or?","or?",-1226532173).cljs$core$IFn$_invoke$arity$1(filters),new cljs.core.Keyword(null,"filters","filters",974726919),filters_SINGLEQUOTE_], null);
return (set_filters_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_filters_BANG_.cljs$core$IFn$_invoke$arity$1(G__46781) : set_filters_BANG_.call(null,G__46781));
})], null);
var G__46780 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-75.hover:opacity-100.font-normal.text-sm","span.opacity-75.hover:opacity-100.font-normal.text-sm",-1898342831),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.filter","is-empty","view.filter/is-empty",-1684317723)], 0))], null);
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__46779,G__46780) : logseq.shui.ui.button.call(null,G__46779,G__46780));
})(),(function (){var G__46782 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),"justify-start",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var filters_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(filters),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword(null,"is-not","is-not",-677962855),new cljs.core.Keyword(null,"empty","empty",767870958)], null));
var G__46784 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"or?","or?",-1226532173),new cljs.core.Keyword(null,"or?","or?",-1226532173).cljs$core$IFn$_invoke$arity$1(filters),new cljs.core.Keyword(null,"filters","filters",974726919),filters_SINGLEQUOTE_], null);
return (set_filters_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_filters_BANG_.cljs$core$IFn$_invoke$arity$1(G__46784) : set_filters_BANG_.call(null,G__46784));
})], null);
var G__46783 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-75.hover:opacity-100.font-normal.text-sm","span.opacity-75.hover:opacity-100.font-normal.text-sm",-1898342831),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.filter","is-not-empty","view.filter/is-not-empty",1642034177)], 0))], null);
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__46782,G__46783) : logseq.shui.ui.button.call(null,G__46782,G__46783));
})()], null);
} else {
return frontend.components.select.select(option__$1);
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$filter_property__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46785 = cljs.core.first(args__31746__auto__);
var G__46786 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46785,G__46786) : io.factorhouse.hsx.core.obj_get.call(null,G__46785,G__46786));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"filter-property","filter-property",-1566944192,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$views$filter_property,args__31746__auto__,null);
}
};
var frontend$components$views$filter_property = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47589__i = 0, G__47589__a = new Array(arguments.length -  0);
while (G__47589__i < G__47589__a.length) {G__47589__a[G__47589__i] = arguments[G__47589__i + 0]; ++G__47589__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47589__a,0,null);
} 
return frontend$components$views$filter_property__delegate.call(this,args__31746__auto__);};
frontend$components$views$filter_property.cljs$lang$maxFixedArity = 0;
frontend$components$views$filter_property.cljs$lang$applyTo = (function (arglist__47590){
var args__31746__auto__ = cljs.core.seq(arglist__47590);
return frontend$components$views$filter_property__delegate(args__31746__auto__);
});
frontend$components$views$filter_property.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$filter_property__delegate;
return frontend$components$views$filter_property;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46787 = comp__31745__auto__;
var G__46788 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46787,G__46788) : io.factorhouse.hsx.core.react_memo.call(null,G__46787,G__46788));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"filter-property");

return comp__31745__auto__;
})();
frontend.components.views.filter_properties = (function (){var render_fn__31744__auto__ = (function frontend$components$views$filter_properties(view_entity,columns,table,opts){
var G__46790 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),"ghost",new cljs.core.Keyword(null,"class","class",-2030961996),"text-muted-foreground !px-1",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var G__46792 = e.target;
var G__46793 = (function (){
return frontend.components.views.filter_property(view_entity,columns,table,opts);
});
var G__46794 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"focus-trigger?","focus-trigger?",799847826),false,new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onCloseAutoFocus","onCloseAutoFocus",-349969117),(function (p1__46789_SHARP_){
return p1__46789_SHARP_.preventDefault();
})], null)], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__46792,G__46793,G__46794) : logseq.shui.ui.popup_show_BANG_.call(null,G__46792,G__46793,G__46794));
})], null);
var G__46791 = frontend.ui.icon("filter");
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__46790,G__46791) : logseq.shui.ui.button.call(null,G__46790,G__46791));
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$filter_properties__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46795 = cljs.core.first(args__31746__auto__);
var G__46796 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46795,G__46796) : io.factorhouse.hsx.core.obj_get.call(null,G__46795,G__46796));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"filter-properties","filter-properties",1831985089,null),args__31746__auto__),frontend$components$views$filter_properties,args__31746__auto__,null);
}
};
var frontend$components$views$filter_properties = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47591__i = 0, G__47591__a = new Array(arguments.length -  0);
while (G__47591__i < G__47591__a.length) {G__47591__a[G__47591__i] = arguments[G__47591__i + 0]; ++G__47591__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47591__a,0,null);
} 
return frontend$components$views$filter_properties__delegate.call(this,args__31746__auto__);};
frontend$components$views$filter_properties.cljs$lang$maxFixedArity = 0;
frontend$components$views$filter_properties.cljs$lang$applyTo = (function (arglist__47592){
var args__31746__auto__ = cljs.core.seq(arglist__47592);
return frontend$components$views$filter_properties__delegate(args__31746__auto__);
});
frontend$components$views$filter_properties.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$filter_properties__delegate;
return frontend$components$views$filter_properties;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46797 = comp__31745__auto__;
var G__46798 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46797,G__46798) : io.factorhouse.hsx.core.react_memo.call(null,G__46797,G__46798));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"filter-properties");

return comp__31745__auto__;
})();
frontend.components.views.operator__GT_text = (function frontend$components$views$operator__GT_text(operator){
var G__46799 = operator;
var G__46799__$1 = (((G__46799 instanceof cljs.core.Keyword))?G__46799.fqn:null);
switch (G__46799__$1) {
case "is":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.filter","operator-is","view.filter/operator-is",728698400)], 0));

break;
case "is-not":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.filter","operator-is-not","view.filter/operator-is-not",-1805587058)], 0));

break;
case "text-contains":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.filter","operator-text-contains","view.filter/operator-text-contains",23103375)], 0));

break;
case "text-not-contains":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.filter","operator-text-not-contains","view.filter/operator-text-not-contains",-547620775)], 0));

break;
case "date-before":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.filter","operator-date-before","view.filter/operator-date-before",-1216944281)], 0));

break;
case "date-after":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.filter","operator-date-after","view.filter/operator-date-after",-854563888)], 0));

break;
case "before":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.filter","operator-before","view.filter/operator-before",354185336)], 0));

break;
case "after":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.filter","operator-after","view.filter/operator-after",375664703)], 0));

break;
case "number-gt":
return ">";

break;
case "number-lt":
return "<";

break;
case "number-gte":
return ">=";

break;
case "number-lte":
return "<=";

break;
case "between":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.filter","operator-between","view.filter/operator-between",1964583472)], 0));

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46799__$1))));

}
});
frontend.components.views.filter_operator = (function (){var render_fn__31744__auto__ = (function frontend$components$views$filter_operator(property,operator,filters,set_filters_BANG_,idx){
var vec__46800 = logseq.shui.hooks.use_state(null);
var operators = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46800,(0),null);
var set_operators_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46800,(1),null);
logseq.shui.hooks.use_effect_BANG_((function (){
promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_view_filter_data(property)),(function (data){
return promesa.protocols._promise((function (){var G__46803 = new cljs.core.Keyword(null,"operators","operators",-2064102509).cljs$core$IFn$_invoke$arity$1(data);
return (set_operators_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_operators_BANG_.cljs$core$IFn$_invoke$arity$1(G__46803) : set_operators_BANG_.call(null,G__46803));
})());
}));
}));

return null;
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property)], null));

var G__46804 = (function (){var G__46806 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"asChild","asChild",682531623),true], null);
var G__46807 = (function (){var G__46808 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"!px-2 rounded-none border-r",new cljs.core.Keyword(null,"variant","variant",-424354234),"ghost",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065)], null);
var G__46809 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs","span.text-xs",63518557),frontend.components.views.operator__GT_text(operator)], null);
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__46808,G__46809) : logseq.shui.ui.button.call(null,G__46808,G__46809));
})();
return (logseq.shui.ui.dropdown_menu_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_trigger.cljs$core$IFn$_invoke$arity$2(G__46806,G__46807) : logseq.shui.ui.dropdown_menu_trigger.call(null,G__46806,G__46807));
})();
var G__46805 = (function (){var G__46810 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align","align",1964212802),"start"], null);
var G__46811 = (function (){var iter__5628__auto__ = (function frontend$components$views$filter_operator_$_iter__46812(s__46813){
return (new cljs.core.LazySeq(null,(function (){
var s__46813__$1 = s__46813;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__46813__$1);
if(temp__5825__auto__){
var s__46813__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46813__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__46813__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__46815 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__46814 = (0);
while(true){
if((i__46814 < size__5627__auto__)){
var operator__$1 = cljs.core._nth(c__5626__auto__,i__46814);
cljs.core.chunk_append(b__46815,(function (){var G__46816 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__46814,operator__$1,c__5626__auto__,size__5627__auto__,b__46815,s__46813__$2,temp__5825__auto__,G__46810,G__46804,vec__46800,operators,set_operators_BANG_){
return (function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),((function (i__46814,operator__$1,c__5626__auto__,size__5627__auto__,b__46815,s__46813__$2,temp__5825__auto__,G__46810,G__46804,vec__46800,operators,set_operators_BANG_){
return (function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_view_filter_data.cljs$core$IFn$_invoke$arity$variadic(property,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operator","operator",-1860875338),operator__$1,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(filters,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filters","filters",974726919),idx], null)),(2))], null)], 0))),((function (i__46814,operator__$1,c__5626__auto__,size__5627__auto__,b__46815,s__46813__$2,temp__5825__auto__,G__46810,G__46804,vec__46800,operators,set_operators_BANG_){
return (function (data){
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.Keyword(null,"value-after-operator-change","value-after-operator-change",-863102552).cljs$core$IFn$_invoke$arity$1(data)),((function (i__46814,operator__$1,c__5626__auto__,size__5627__auto__,b__46815,s__46813__$2,temp__5825__auto__,G__46810,G__46804,vec__46800,operators,set_operators_BANG_){
return (function (value_SINGLEQUOTE_){
return promesa.protocols._promise((function (){var G__46818 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(filters,new cljs.core.Keyword(null,"filters","filters",974726919),((function (i__46814,operator__$1,c__5626__auto__,size__5627__auto__,b__46815,s__46813__$2,temp__5825__auto__,G__46810,G__46804,vec__46800,operators,set_operators_BANG_){
return (function (col){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(col,idx,((function (i__46814,operator__$1,c__5626__auto__,size__5627__auto__,b__46815,s__46813__$2,temp__5825__auto__,G__46810,G__46804,vec__46800,operators,set_operators_BANG_){
return (function (p__46819){
var vec__46820 = p__46819;
var property__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46820,(0),null);
var _old_operator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46820,(1),null);
var _value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46820,(2),null);
if(cljs.core.truth_(value_SINGLEQUOTE_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [property__$1,operator__$1,value_SINGLEQUOTE_], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [property__$1,operator__$1], null);
}
});})(i__46814,operator__$1,c__5626__auto__,size__5627__auto__,b__46815,s__46813__$2,temp__5825__auto__,G__46810,G__46804,vec__46800,operators,set_operators_BANG_))
);
});})(i__46814,operator__$1,c__5626__auto__,size__5627__auto__,b__46815,s__46813__$2,temp__5825__auto__,G__46810,G__46804,vec__46800,operators,set_operators_BANG_))
);
return (set_filters_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_filters_BANG_.cljs$core$IFn$_invoke$arity$1(G__46818) : set_filters_BANG_.call(null,G__46818));
})());
});})(i__46814,operator__$1,c__5626__auto__,size__5627__auto__,b__46815,s__46813__$2,temp__5825__auto__,G__46810,G__46804,vec__46800,operators,set_operators_BANG_))
);
});})(i__46814,operator__$1,c__5626__auto__,size__5627__auto__,b__46815,s__46813__$2,temp__5825__auto__,G__46810,G__46804,vec__46800,operators,set_operators_BANG_))
);
});})(i__46814,operator__$1,c__5626__auto__,size__5627__auto__,b__46815,s__46813__$2,temp__5825__auto__,G__46810,G__46804,vec__46800,operators,set_operators_BANG_))
);
});})(i__46814,operator__$1,c__5626__auto__,size__5627__auto__,b__46815,s__46813__$2,temp__5825__auto__,G__46810,G__46804,vec__46800,operators,set_operators_BANG_))
], null);
var G__46817 = frontend.components.views.operator__GT_text(operator__$1);
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__46816,G__46817) : logseq.shui.ui.dropdown_menu_item.call(null,G__46816,G__46817));
})());

var G__47594 = (i__46814 + (1));
i__46814 = G__47594;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46815),frontend$components$views$filter_operator_$_iter__46812(cljs.core.chunk_rest(s__46813__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46815),null);
}
} else {
var operator__$1 = cljs.core.first(s__46813__$2);
return cljs.core.cons((function (){var G__46823 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (operator__$1,s__46813__$2,temp__5825__auto__,G__46810,G__46804,vec__46800,operators,set_operators_BANG_){
return (function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_view_filter_data.cljs$core$IFn$_invoke$arity$variadic(property,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operator","operator",-1860875338),operator__$1,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(filters,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filters","filters",974726919),idx], null)),(2))], null)], 0))),(function (data){
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.Keyword(null,"value-after-operator-change","value-after-operator-change",-863102552).cljs$core$IFn$_invoke$arity$1(data)),(function (value_SINGLEQUOTE_){
return promesa.protocols._promise((function (){var G__46825 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(filters,new cljs.core.Keyword(null,"filters","filters",974726919),(function (col){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(col,idx,(function (p__46826){
var vec__46827 = p__46826;
var property__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46827,(0),null);
var _old_operator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46827,(1),null);
var _value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46827,(2),null);
if(cljs.core.truth_(value_SINGLEQUOTE_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [property__$1,operator__$1,value_SINGLEQUOTE_], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [property__$1,operator__$1], null);
}
}));
}));
return (set_filters_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_filters_BANG_.cljs$core$IFn$_invoke$arity$1(G__46825) : set_filters_BANG_.call(null,G__46825));
})());
}));
}));
}));
});})(operator__$1,s__46813__$2,temp__5825__auto__,G__46810,G__46804,vec__46800,operators,set_operators_BANG_))
], null);
var G__46824 = frontend.components.views.operator__GT_text(operator__$1);
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__46823,G__46824) : logseq.shui.ui.dropdown_menu_item.call(null,G__46823,G__46824));
})(),frontend$components$views$filter_operator_$_iter__46812(cljs.core.rest(s__46813__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__((function (){var or__5142__auto__ = operators;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
})();
return (logseq.shui.ui.dropdown_menu_content.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_content.cljs$core$IFn$_invoke$arity$2(G__46810,G__46811) : logseq.shui.ui.dropdown_menu_content.call(null,G__46810,G__46811));
})();
return (logseq.shui.ui.dropdown_menu.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu.cljs$core$IFn$_invoke$arity$2(G__46804,G__46805) : logseq.shui.ui.dropdown_menu.call(null,G__46804,G__46805));
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$filter_operator__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46830 = cljs.core.first(args__31746__auto__);
var G__46831 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46830,G__46831) : io.factorhouse.hsx.core.obj_get.call(null,G__46830,G__46831));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"filter-operator","filter-operator",1323477121,null),args__31746__auto__),frontend$components$views$filter_operator,args__31746__auto__,null);
}
};
var frontend$components$views$filter_operator = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47595__i = 0, G__47595__a = new Array(arguments.length -  0);
while (G__47595__i < G__47595__a.length) {G__47595__a[G__47595__i] = arguments[G__47595__i + 0]; ++G__47595__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47595__a,0,null);
} 
return frontend$components$views$filter_operator__delegate.call(this,args__31746__auto__);};
frontend$components$views$filter_operator.cljs$lang$maxFixedArity = 0;
frontend$components$views$filter_operator.cljs$lang$applyTo = (function (arglist__47596){
var args__31746__auto__ = cljs.core.seq(arglist__47596);
return frontend$components$views$filter_operator__delegate(args__31746__auto__);
});
frontend$components$views$filter_operator.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$filter_operator__delegate;
return frontend$components$views$filter_operator;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46832 = comp__31745__auto__;
var G__46833 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46832,G__46833) : io.factorhouse.hsx.core.react_memo.call(null,G__46832,G__46833));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"filter-operator");

return comp__31745__auto__;
})();
frontend.components.views.between = (function (){var render_fn__31744__auto__ = (function frontend$components$views$between(_property,p__46834,filters,set_filters_BANG_,idx){
var vec__46835 = p__46834;
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46835,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46835,(1),null);
var set_filter_range_BANG_ = (function (value){
var G__46838 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(filters,new cljs.core.Keyword(null,"filters","filters",974726919),(function (col){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(col,idx,(function (p__46839){
var vec__46840 = p__46839;
var property = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46840,(0),null);
var operator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46840,(1),null);
var _old_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46840,(2),null);
if((value == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [property,operator], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [property,operator,value], null);
}
}));
}));
return (set_filters_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_filters_BANG_.cljs$core$IFn$_invoke$arity$1(G__46838) : set_filters_BANG_.call(null,G__46838));
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(function (){var G__46843 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.filter","from","view.filter/from",-1047517291)], 0)),new cljs.core.Keyword(null,"value","value",305978217),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (e){
var input_value = frontend.util.evalue(e);
var number_value = ((clojure.string.blank_QMARK_(input_value))?null:frontend.util.safe_parse_float(input_value));
var value = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [number_value,end], null);
var value__$1 = ((cljs.core.every_QMARK_(cljs.core.nil_QMARK_,value))?null:value);
return set_filter_range_BANG_(value__$1);
}),new cljs.core.Keyword(null,"class","class",-2030961996),"w-24 !h-6 !py-0 border-none focus-visible:ring-0 focus-visible:ring-offset-0"], null);
return (logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1(G__46843) : logseq.shui.ui.input.call(null,G__46843));
})(),(function (){var G__46844 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end)),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.filter","to","view.filter/to",1574851550)], 0)),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (e){
var input_value = frontend.util.evalue(e);
var number_value = ((clojure.string.blank_QMARK_(input_value))?null:frontend.util.safe_parse_float(input_value));
var value = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,number_value], null);
var value__$1 = ((cljs.core.every_QMARK_(cljs.core.nil_QMARK_,value))?null:value);
return set_filter_range_BANG_(value__$1);
}),new cljs.core.Keyword(null,"class","class",-2030961996),"w-24 !h-6 !py-0 border-none focus-visible:ring-0 focus-visible:ring-offset-0"], null);
return (logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1(G__46844) : logseq.shui.ui.input.call(null,G__46844));
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$between__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46845 = cljs.core.first(args__31746__auto__);
var G__46846 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46845,G__46846) : io.factorhouse.hsx.core.obj_get.call(null,G__46845,G__46846));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"between","between",-1523336493,null),args__31746__auto__),frontend$components$views$between,args__31746__auto__,null);
}
};
var frontend$components$views$between = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47597__i = 0, G__47597__a = new Array(arguments.length -  0);
while (G__47597__i < G__47597__a.length) {G__47597__a[G__47597__i] = arguments[G__47597__i + 0]; ++G__47597__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47597__a,0,null);
} 
return frontend$components$views$between__delegate.call(this,args__31746__auto__);};
frontend$components$views$between.cljs$lang$maxFixedArity = 0;
frontend$components$views$between.cljs$lang$applyTo = (function (arglist__47598){
var args__31746__auto__ = cljs.core.seq(arglist__47598);
return frontend$components$views$between__delegate(args__31746__auto__);
});
frontend$components$views$between.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$between__delegate;
return frontend$components$views$between;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46847 = comp__31745__auto__;
var G__46848 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46847,G__46848) : io.factorhouse.hsx.core.react_memo.call(null,G__46847,G__46848));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"between");

return comp__31745__auto__;
})();
frontend.components.views.filter_value_select = (function (){var render_fn__31744__auto__ = (function frontend$components$views$filter_value_select(view_entity,p__46849,property,value,operator,idx,opts){
var map__46850 = p__46849;
var map__46850__$1 = cljs.core.__destructure_map(map__46850);
var table = map__46850__$1;
var data_fns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46850__$1,new cljs.core.Keyword(null,"data-fns","data-fns",-1065218324));
var filters = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"filters","filters",974726919)], null));
var set_filters_BANG_ = new cljs.core.Keyword(null,"set-filters!","set-filters!",385623142).cljs$core$IFn$_invoke$arity$1(data_fns);
var G__46851 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"!px-2 rounded-none border-r min-w-0 max-w-full overflow-hidden",new cljs.core.Keyword(null,"variant","variant",-424354234),"ghost",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_view_filter_data.cljs$core$IFn$_invoke$arity$variadic(property,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view-id","view-id",1118263032),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(view_entity),new cljs.core.Keyword(null,"query-entity-ids","query-entity-ids",2135324416),new cljs.core.Keyword(null,"query-entity-ids","query-entity-ids",2135324416).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"operator","operator",-1860875338),operator], null)], 0))),(function (filter_data){
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.Keyword(null,"many?","many?",-605360673).cljs$core$IFn$_invoke$arity$1(filter_data)),(function (many_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__46853 = new cljs.core.Keyword(null,"value-source","value-source",149515667).cljs$core$IFn$_invoke$arity$1(filter_data);
var G__46853__$1 = (((G__46853 instanceof cljs.core.Keyword))?G__46853.fqn:null);
switch (G__46853__$1) {
case "timestamp":
return frontend.components.views.timestamp_options();

break;
case "checkbox":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),true,new cljs.core.Keyword(null,"label","label",1718410804),clojure.string.lower_case(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","true","ui/true",-1114206346)], 0)))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),false,new cljs.core.Keyword(null,"label","label",1718410804),clojure.string.lower_case(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","false","ui/false",1277709361)], 0)))], null)], null);

break;
default:
return new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(filter_data);

}
})()),(function (items){
return promesa.protocols._promise((function (){var G__46854 = e.target;
var G__46855 = (function (){
var option = (function (){var G__46857 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"input-default-placeholder","input-default-placeholder",-1040139250),logseq.db.frontend.property.built_in_display_title(property,frontend.context.i18n.t),new cljs.core.Keyword(null,"input-opts","input-opts",1688681135),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"!px-3 !py-1"], null),new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"extract-chosen-fn","extract-chosen-fn",1058364622),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (value__$1,_selected_QMARK_,selected,e__$1){
if(cljs.core.truth_(many_QMARK_)){
} else {
(logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
}

var value_SINGLEQUOTE_ = (cljs.core.truth_(many_QMARK_)?selected:value__$1);
var set_filters_fn = (function (value_SINGLEQUOTE___$1){
var G__46858 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(filters,new cljs.core.Keyword(null,"filters","filters",974726919),(function (col){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(col,idx,(function (p__46859){
var vec__46860 = p__46859;
var property__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46860,(0),null);
var operator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46860,(1),null);
var _value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46860,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [property__$1,operator__$1,value_SINGLEQUOTE___$1], null);
}));
}));
return (set_filters_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_filters_BANG_.cljs$core$IFn$_invoke$arity$1(G__46858) : set_filters_BANG_.call(null,G__46858));
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value__$1,new cljs.core.Keyword(null,"custom-date","custom-date",-632022020))){
var G__46863 = e__$1.target;
var G__46864 = frontend.ui.nlp_calendar(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-focus","initial-focus",1154999719),true,new cljs.core.Keyword(null,"datetime?","datetime?",-1173480100),false,new cljs.core.Keyword(null,"on-day-click","on-day-click",1918658076),(function (value__$2){
set_filters_fn(value__$2);

return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
})], null));
var G__46865 = cljs.core.PersistentArrayMap.EMPTY;
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__46863,G__46864,G__46865) : logseq.shui.ui.popup_show_BANG_.call(null,G__46863,G__46864,G__46865));
} else {
return set_filters_fn(value_SINGLEQUOTE_);
}
})], null);
if(cljs.core.truth_(many_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__46857,new cljs.core.Keyword(null,"multiple-choices?","multiple-choices?",-1858892490),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected-choices","selected-choices",1913324317),((cljs.core.coll_QMARK_(value))?value:null)], 0));
} else {
return G__46857;
}
})();
if(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"is","is",369128998),null,new cljs.core.Keyword(null,"is-not","is-not",-677962855),null], null), null),operator)) && ((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),null,new cljs.core.Keyword("block","created-at","block/created-at",1440015),null], null), null),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-1","div.flex.flex-col.gap-1",1246857632),frontend.components.select.select(option),(function (){var G__46866 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),"justify-start",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__46868 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(filters,new cljs.core.Keyword(null,"filters","filters",974726919),(function (col){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(col,idx,(function (p__46869){
var vec__46870 = p__46869;
var property__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46870,(0),null);
var operator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46870,(1),null);
var _value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46870,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [property__$1,operator__$1,new cljs.core.Keyword(null,"empty","empty",767870958)], null);
}));
}));
return (set_filters_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_filters_BANG_.cljs$core$IFn$_invoke$arity$1(G__46868) : set_filters_BANG_.call(null,G__46868));
})], null);
var G__46867 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-75.hover:opacity-100.font-normal.text-sm","span.opacity-75.hover:opacity-100.font-normal.text-sm",-1898342831),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.filter","empty","view.filter/empty",1520428739)], 0))], null);
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__46866,G__46867) : logseq.shui.ui.button.call(null,G__46866,G__46867));
})()], null);
} else {
return frontend.components.select.select(option);
}
});
var G__46856 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981)], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__46854,G__46855,G__46856) : logseq.shui.ui.popup_show_BANG_.call(null,G__46854,G__46855,G__46856));
})());
}));
}));
}));
}));
})], null);
var G__46852 = (function (){var value__$1 = (((value instanceof Date))?(function (){var G__46873 = cljs_time.coerce.to_date(value);
var G__46873__$1 = (((G__46873 == null))?null:cljs_time.core.to_default_time_zone(G__46873));
if((G__46873__$1 == null)){
return null;
} else {
return cljs_time.format.unparse(frontend.components.views.yyyy_MM_dd_formatter,G__46873__$1);
}
})():value
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-view-filter-value.flex.flex-row.items-center.gap-1.text-xs.min-w-0.max-w-full.overflow-hidden","div.ls-view-filter-value.flex.flex-row.items-center.gap-1.text-xs.min-w-0.max-w-full.overflow-hidden",-1964377568),((cljs.core.map_QMARK_(value__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-view-filter-value-item","div.ls-view-filter-value-item",674876311),frontend.components.views.filter_value_content(value__$1)], null):((typeof value__$1 === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-view-filter-value-item","div.ls-view-filter-value-item",674876311),value__$1], null):((cljs.core.boolean_QMARK_(value__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-view-filter-value-item","div.ls-view-filter-value-item",674876311),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value__$1))], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value__$1,new cljs.core.Keyword(null,"empty","empty",767870958)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-view-filter-value-item","div.ls-view-filter-value-item",674876311),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.filter","empty","view.filter/empty",1520428739)], 0))], null):((cljs.core.seq(value__$1))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-view-filter-value-item","div.ls-view-filter-value-item",674876311)], null),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex-none","span.flex-none",287593829),", "], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.components.views.filter_value_content(v)], null);
}),value__$1))):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view","all","view/all",885364659)], 0))
)))))], null);
})();
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__46851,G__46852) : logseq.shui.ui.button.call(null,G__46851,G__46852));
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$filter_value_select__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46874 = cljs.core.first(args__31746__auto__);
var G__46875 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46874,G__46875) : io.factorhouse.hsx.core.obj_get.call(null,G__46874,G__46875));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"filter-value-select","filter-value-select",1434225460,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$views$filter_value_select,args__31746__auto__,null);
}
};
var frontend$components$views$filter_value_select = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47600__i = 0, G__47600__a = new Array(arguments.length -  0);
while (G__47600__i < G__47600__a.length) {G__47600__a[G__47600__i] = arguments[G__47600__i + 0]; ++G__47600__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47600__a,0,null);
} 
return frontend$components$views$filter_value_select__delegate.call(this,args__31746__auto__);};
frontend$components$views$filter_value_select.cljs$lang$maxFixedArity = 0;
frontend$components$views$filter_value_select.cljs$lang$applyTo = (function (arglist__47601){
var args__31746__auto__ = cljs.core.seq(arglist__47601);
return frontend$components$views$filter_value_select__delegate(args__31746__auto__);
});
frontend$components$views$filter_value_select.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$filter_value_select__delegate;
return frontend$components$views$filter_value_select;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46876 = comp__31745__auto__;
var G__46877 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46876,G__46877) : io.factorhouse.hsx.core.react_memo.call(null,G__46876,G__46877));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"filter-value-select");

return comp__31745__auto__;
})();
frontend.components.views.filter_value = (function (){var render_fn__31744__auto__ = (function frontend$components$views$filter_value(view_entity,table,property,operator,value,filters,set_filters_BANG_,idx,opts){
var number_operator_QMARK_ = clojure.string.starts_with_QMARK_(cljs.core.name(operator),"number-");
var set_filter_value_BANG_ = (function (input_value,number_value){
var G__46878 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(filters,new cljs.core.Keyword(null,"filters","filters",974726919),(function (col){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(col,idx,(function (p__46879){
var vec__46880 = p__46879;
var property__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46880,(0),null);
var operator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46880,(1),null);
var _value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46880,(2),null);
if(((number_operator_QMARK_) && ((number_value == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [property__$1,operator__$1], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [property__$1,operator__$1,(function (){var or__5142__auto__ = number_value;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return input_value;
}
})()], null);
}
}));
}));
return (set_filters_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_filters_BANG_.cljs$core$IFn$_invoke$arity$1(G__46878) : set_filters_BANG_.call(null,G__46878));
});
var G__46883 = operator;
var G__46883__$1 = (((G__46883 instanceof cljs.core.Keyword))?G__46883.fqn:null);
switch (G__46883__$1) {
case "between":
return frontend.components.views.between(property,value,filters,set_filters_BANG_,idx);

break;
case "text-contains":
case "text-not-contains":
case "number-gt":
case "number-lt":
case "number-gte":
case "number-lte":
var G__46884 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),false,new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5142__auto__ = value;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (e){
var input_value = frontend.util.evalue(e);
var number_value = (function (){var and__5140__auto__ = number_operator_QMARK_;
if(and__5140__auto__){
if(clojure.string.blank_QMARK_(input_value)){
return null;
} else {
return frontend.util.safe_parse_float(input_value);
}
} else {
return and__5140__auto__;
}
})();
return set_filter_value_BANG_(input_value,number_value);
}),new cljs.core.Keyword(null,"class","class",-2030961996),"w-24 !h-6 !py-0 border-none focus-visible:ring-0 focus-visible:ring-offset-0"], null);
return (logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1(G__46884) : logseq.shui.ui.input.call(null,G__46884));

break;
default:
return frontend.components.views.filter_value_select(view_entity,table,property,value,operator,idx,opts);

}
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$filter_value__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46885 = cljs.core.first(args__31746__auto__);
var G__46886 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46885,G__46886) : io.factorhouse.hsx.core.obj_get.call(null,G__46885,G__46886));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"filter-value","filter-value",-1228077415,null),args__31746__auto__),frontend$components$views$filter_value,args__31746__auto__,null);
}
};
var frontend$components$views$filter_value = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47603__i = 0, G__47603__a = new Array(arguments.length -  0);
while (G__47603__i < G__47603__a.length) {G__47603__a[G__47603__i] = arguments[G__47603__i + 0]; ++G__47603__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47603__a,0,null);
} 
return frontend$components$views$filter_value__delegate.call(this,args__31746__auto__);};
frontend$components$views$filter_value.cljs$lang$maxFixedArity = 0;
frontend$components$views$filter_value.cljs$lang$applyTo = (function (arglist__47604){
var args__31746__auto__ = cljs.core.seq(arglist__47604);
return frontend$components$views$filter_value__delegate(args__31746__auto__);
});
frontend$components$views$filter_value.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$filter_value__delegate;
return frontend$components$views$filter_value;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46887 = comp__31745__auto__;
var G__46888 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46887,G__46888) : io.factorhouse.hsx.core.react_memo.call(null,G__46887,G__46888));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"filter-value");

return comp__31745__auto__;
})();
frontend.components.views.filters_row = (function (){var render_fn__31744__auto__ = (function frontend$components$views$filters_row(view_entity,p__46889,opts){
var map__46890 = p__46889;
var map__46890__$1 = cljs.core.__destructure_map(map__46890);
var table = map__46890__$1;
var data_fns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46890__$1,new cljs.core.Keyword(null,"data-fns","data-fns",-1065218324));
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46890__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var filters = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"filters","filters",974726919)], null));
var map__46891 = data_fns;
var map__46891__$1 = cljs.core.__destructure_map(map__46891);
var set_filters_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46891__$1,new cljs.core.Keyword(null,"set-filters!","set-filters!",385623142));
if(cljs.core.seq(new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(filters))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filters-row.flex.flex-row.items-center.gap-4.justify-between.flex-wrap.py-2.min-w-0.max-w-full","div.filters-row.flex.flex-row.items-center.gap-4.justify-between.flex-wrap.py-2.min-w-0.max-w-full",620010143),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.gap-2.flex-wrap.min-w-0.max-w-full","div.flex.flex-row.items-center.gap-2.flex-wrap.min-w-0.max-w-full",-2140058155),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,filter_SINGLEQUOTE_){
var vec__46892 = filter_SINGLEQUOTE_;
var property_ident = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46892,(0),null);
var operator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46892,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46892,(2),null);
var property = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_ident,new cljs.core.Keyword("block","title","block/title",710445684)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),property_ident,new cljs.core.Keyword("block","title","block/title",710445684),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.table","name-column","view.table/name-column",1477956303)], 0))], null):(function (){var or__5142__auto__ = cljs.core.some((function (column){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column),property_ident)){
var or__5142__auto__ = frontend.components.views.column_property(column);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(column)], null);
}
} else {
return null;
}
}),columns);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.components.views.built_in_property(property_ident);
}
})());
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.border.rounded.min-w-0.max-w-full","div.flex.flex-row.items-center.border.rounded.min-w-0.max-w-full",1242038610),(function (){var G__46895 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"!px-2 rounded-none border-r",new cljs.core.Keyword(null,"variant","variant",-424354234),"ghost",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null);
var G__46896 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs","span.text-xs",63518557),logseq.db.frontend.property.built_in_display_title(property,frontend.context.i18n.t)], null);
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__46895,G__46896) : logseq.shui.ui.button.call(null,G__46895,G__46896));
})(),frontend.components.views.filter_operator(property,operator,filters,set_filters_BANG_,idx),frontend.components.views.filter_value(view_entity,table,property,operator,value,filters,set_filters_BANG_,idx,opts),(function (){var G__46897 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"!px-1 rounded-none text-muted-foreground",new cljs.core.Keyword(null,"variant","variant",-424354234),"ghost",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
var new_filters = cljs.core.update.cljs$core$IFn$_invoke$arity$3(filters,new cljs.core.Keyword(null,"filters","filters",974726919),(function (col){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([filter_SINGLEQUOTE_]),col));
}));
return (set_filters_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_filters_BANG_.cljs$core$IFn$_invoke$arity$1(new_filters) : set_filters_BANG_.call(null,new_filters));
})], null);
var G__46898 = frontend.ui.icon("x");
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__46897,G__46898) : logseq.shui.ui.button.call(null,G__46897,G__46898));
})()], null);
}),new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(filters))], null),(((cljs.core.count(new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(filters)) > (1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__46899 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),(cljs.core.truth_(new cljs.core.Keyword(null,"or?","or?",-1226532173).cljs$core$IFn$_invoke$arity$1(filters))?"or":"and"),new cljs.core.Keyword(null,"on-value-change","on-value-change",-621835289),(function (v){
var G__46902 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(filters,new cljs.core.Keyword(null,"or?","or?",-1226532173),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,"or"));
return (set_filters_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_filters_BANG_.cljs$core$IFn$_invoke$arity$1(G__46902) : set_filters_BANG_.call(null,G__46902));
})], null);
var G__46900 = (function (){var G__46903 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"opacity-75 hover:opacity-100 !px-2 !py-0 !h-6"], null);
var G__46904 = (function (){var G__46905 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.filter","match","view.filter/match",-1700561473)], 0))], null);
return (logseq.shui.ui.select_value.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.select_value.cljs$core$IFn$_invoke$arity$1(G__46905) : logseq.shui.ui.select_value.call(null,G__46905));
})();
return (logseq.shui.ui.select_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_trigger.cljs$core$IFn$_invoke$arity$2(G__46903,G__46904) : logseq.shui.ui.select_trigger.call(null,G__46903,G__46904));
})();
var G__46901 = (function (){var G__46906 = (function (){var G__46907 = (function (){var G__46909 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"and"], null);
var G__46910 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.filter","match-all-filters","view.filter/match-all-filters",-666542114)], 0));
return (logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2(G__46909,G__46910) : logseq.shui.ui.select_item.call(null,G__46909,G__46910));
})();
var G__46908 = (function (){var G__46911 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"or"], null);
var G__46912 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.filter","match-any-filter","view.filter/match-any-filter",1823859951)], 0));
return (logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2(G__46911,G__46912) : logseq.shui.ui.select_item.call(null,G__46911,G__46912));
})();
return (logseq.shui.ui.select_group.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_group.cljs$core$IFn$_invoke$arity$2(G__46907,G__46908) : logseq.shui.ui.select_group.call(null,G__46907,G__46908));
})();
return (logseq.shui.ui.select_content.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.select_content.cljs$core$IFn$_invoke$arity$1(G__46906) : logseq.shui.ui.select_content.call(null,G__46906));
})();
return (logseq.shui.ui.select.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.select.cljs$core$IFn$_invoke$arity$3(G__46899,G__46900,G__46901) : logseq.shui.ui.select.call(null,G__46899,G__46900,G__46901));
})()], null):null)], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$filters_row__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46913 = cljs.core.first(args__31746__auto__);
var G__46914 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46913,G__46914) : io.factorhouse.hsx.core.obj_get.call(null,G__46913,G__46914));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"filters-row","filters-row",-992856488,null),args__31746__auto__),frontend$components$views$filters_row,args__31746__auto__,null);
}
};
var frontend$components$views$filters_row = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47605__i = 0, G__47605__a = new Array(arguments.length -  0);
while (G__47605__i < G__47605__a.length) {G__47605__a[G__47605__i] = arguments[G__47605__i + 0]; ++G__47605__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47605__a,0,null);
} 
return frontend$components$views$filters_row__delegate.call(this,args__31746__auto__);};
frontend$components$views$filters_row.cljs$lang$maxFixedArity = 0;
frontend$components$views$filters_row.cljs$lang$applyTo = (function (arglist__47606){
var args__31746__auto__ = cljs.core.seq(arglist__47606);
return frontend$components$views$filters_row__delegate(args__31746__auto__);
});
frontend$components$views$filters_row.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$filters_row__delegate;
return frontend$components$views$filters_row;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46915 = comp__31745__auto__;
var G__46916 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46915,G__46916) : io.factorhouse.hsx.core.react_memo.call(null,G__46915,G__46916));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"filters-row");

return comp__31745__auto__;
})();
frontend.components.views.new_record_button = (function (){var render_fn__31744__auto__ = (function frontend$components$views$new_record_button(table,view_entity){
var asset_QMARK_ = (function (){var and__5140__auto__ = new cljs.core.Keyword("logseq.property","built-in?","logseq.property/built-in?",-1125958160).cljs$core$IFn$_invoke$arity$1(view_entity);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(view_entity),"asset");
} else {
return and__5140__auto__;
}
})();
return frontend.ui.tooltip((function (){var G__46917 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),"ghost",new cljs.core.Keyword(null,"class","class",-2030961996),"!px-1 text-muted-foreground",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
var f = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-fns","data-fns",-1065218324),new cljs.core.Keyword(null,"add-new-object!","add-new-object!",622560106)], null));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(view_entity,table) : f.call(null,view_entity,table));
})], null);
var G__46918 = frontend.ui.icon((cljs.core.truth_(asset_QMARK_)?"upload":"plus"));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__46917,G__46918) : logseq.shui.ui.button.call(null,G__46917,G__46918));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("node","new","node/new",-2084082590)], 0))], null));
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$new_record_button__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46919 = cljs.core.first(args__31746__auto__);
var G__46920 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46919,G__46920) : io.factorhouse.hsx.core.obj_get.call(null,G__46919,G__46920));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"new-record-button","new-record-button",666555123,null),args__31746__auto__),frontend$components$views$new_record_button,args__31746__auto__,null);
}
};
var frontend$components$views$new_record_button = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47607__i = 0, G__47607__a = new Array(arguments.length -  0);
while (G__47607__i < G__47607__a.length) {G__47607__a[G__47607__i] = arguments[G__47607__i + 0]; ++G__47607__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47607__a,0,null);
} 
return frontend$components$views$new_record_button__delegate.call(this,args__31746__auto__);};
frontend$components$views$new_record_button.cljs$lang$maxFixedArity = 0;
frontend$components$views$new_record_button.cljs$lang$applyTo = (function (arglist__47608){
var args__31746__auto__ = cljs.core.seq(arglist__47608);
return frontend$components$views$new_record_button__delegate(args__31746__auto__);
});
frontend$components$views$new_record_button.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$new_record_button__delegate;
return frontend$components$views$new_record_button;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46921 = comp__31745__auto__;
var G__46922 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46921,G__46922) : io.factorhouse.hsx.core.react_memo.call(null,G__46921,G__46922));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"new-record-button");

return comp__31745__auto__;
})();
frontend.components.views.add_new_row = (function (){var render_fn__31744__auto__ = (function frontend$components$views$add_new_row(view_entity,table){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.py-1.px-2.cursor-pointer.flex.flex-row.items-center.gap-1.text-muted-foreground.hover:text-foreground.w-full.text-sm.border-b","div.py-1.px-2.cursor-pointer.flex.flex-row.items-center.gap-1.text-muted-foreground.hover:text-foreground.w-full.text-sm.border-b",1796381989),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
var f = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-fns","data-fns",-1065218324),new cljs.core.Keyword(null,"add-new-object!","add-new-object!",622560106)], null));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(view_entity,table) : f.call(null,view_entity,table));
})], null),frontend.ui.icon("plus",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view","new","view/new",-2084897917)], 0))], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$add_new_row__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46923 = cljs.core.first(args__31746__auto__);
var G__46924 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46923,G__46924) : io.factorhouse.hsx.core.obj_get.call(null,G__46923,G__46924));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"add-new-row","add-new-row",323123674,null),args__31746__auto__),frontend$components$views$add_new_row,args__31746__auto__,null);
}
};
var frontend$components$views$add_new_row = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47609__i = 0, G__47609__a = new Array(arguments.length -  0);
while (G__47609__i < G__47609__a.length) {G__47609__a[G__47609__i] = arguments[G__47609__i + 0]; ++G__47609__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47609__a,0,null);
} 
return frontend$components$views$add_new_row__delegate.call(this,args__31746__auto__);};
frontend$components$views$add_new_row.cljs$lang$maxFixedArity = 0;
frontend$components$views$add_new_row.cljs$lang$applyTo = (function (arglist__47610){
var args__31746__auto__ = cljs.core.seq(arglist__47610);
return frontend$components$views$add_new_row__delegate(args__31746__auto__);
});
frontend$components$views$add_new_row.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$add_new_row__delegate;
return frontend$components$views$add_new_row;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46925 = comp__31745__auto__;
var G__46926 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46925,G__46926) : io.factorhouse.hsx.core.react_memo.call(null,G__46925,G__46926));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"add-new-row");

return comp__31745__auto__;
})();
frontend.components.views.table_filters__GT_persist_state = (function frontend$components$views$table_filters__GT_persist_state(filters){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__46927){
var vec__46928 = p__46927;
var property = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46928,(0),null);
var operator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46928,(1),null);
var matches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46928,(2),null);
var matches_SINGLEQUOTE_ = ((cljs.core.map_QMARK_(matches))?new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(matches):((((cljs.core.coll_QMARK_(matches)) && (cljs.core.every_QMARK_(cljs.core.map_QMARK_,matches))))?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),matches)):matches
));
if((!((matches_SINGLEQUOTE_ == null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [property,operator,matches_SINGLEQUOTE_], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [property,operator], null);
}
}),filters);
});
frontend.components.views.db_set_table_state_BANG_ = (function frontend$components$views$db_set_table_state_BANG_(entity,p__46931){
var map__46932 = p__46931;
var map__46932__$1 = cljs.core.__destructure_map(map__46932);
var set_sorting_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46932__$1,new cljs.core.Keyword(null,"set-sorting!","set-sorting!",543042376));
var set_filters_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46932__$1,new cljs.core.Keyword(null,"set-filters!","set-filters!",385623142));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"set-sorting!","set-sorting!",543042376),(function (sorting){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.property.set_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity),new cljs.core.Keyword("logseq.property.table","sorting","logseq.property.table/sorting",208102594),sorting)),(function (___21901__auto__){
return promesa.protocols._promise((set_sorting_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_sorting_BANG_.cljs$core$IFn$_invoke$arity$1(sorting) : set_sorting_BANG_.call(null,sorting)));
}));
}));
}),new cljs.core.Keyword(null,"set-filters!","set-filters!",385623142),(function (filters){
var filters__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(filters,new cljs.core.Keyword(null,"filters","filters",974726919),frontend.components.views.table_filters__GT_persist_state),new cljs.core.Keyword(null,"or?","or?",-1226532173),cljs.core.boolean$);
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.property.set_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity),new cljs.core.Keyword("logseq.property.table","filters","logseq.property.table/filters",-1702393633),filters__$1)),(function (___21901__auto__){
return promesa.protocols._promise((set_filters_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_filters_BANG_.cljs$core$IFn$_invoke$arity$1(filters__$1) : set_filters_BANG_.call(null,filters__$1)));
}));
}));
}),new cljs.core.Keyword(null,"set-visible-columns!","set-visible-columns!",729806223),(function (columns){
var hidden_columns = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__46933){
var vec__46934 = p__46933;
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46934,(0),null);
var visible_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46934,(1),null);
if(visible_QMARK_ === false){
return column;
} else {
return null;
}
}),columns));
return frontend.handler.property.set_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity),new cljs.core.Keyword("logseq.property.table","hidden-columns","logseq.property.table/hidden-columns",975057192),hidden_columns);
}),new cljs.core.Keyword(null,"set-ordered-columns!","set-ordered-columns!",-315299263),(function (ordered_columns){
var ids = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select","select",1147833503),null], null), null),ordered_columns));
return frontend.handler.property.set_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity),new cljs.core.Keyword("logseq.property.table","ordered-columns","logseq.property.table/ordered-columns",1485587100),ids);
}),new cljs.core.Keyword(null,"set-sized-columns!","set-sized-columns!",899502581),(function (sized_columns){
return frontend.handler.property.set_block_property_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity),new cljs.core.Keyword("logseq.property.table","sized-columns","logseq.property.table/sized-columns",-1675510555),sized_columns);
})], null);
});
frontend.components.views.lazy_item_placeholder_height = (function frontend$components$views$lazy_item_placeholder_height(table_view_QMARK_){
if(cljs.core.truth_(table_view_QMARK_)){
return frontend.components.views.table_fixed_row_height;
} else {
return (24);
}
});
frontend.components.views.table_row_overscan_rows = (2);
/**
 * Fixed row height so Virtuoso can skip measurement. Overscan is two
 *   placeholder rows, not a second snapshot window.
 */
frontend.components.views.table_virtualization_metrics = (function frontend$components$views$table_virtualization_metrics(){
var item_height = frontend.components.views.lazy_item_placeholder_height(true);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"item-height","item-height",1808364479),item_height,new cljs.core.Keyword(null,"overscan-px","overscan-px",985813356),(item_height * frontend.components.views.table_row_overscan_rows)], null);
});
frontend.components.views.view_prefetch_max_rows = (1000);
frontend.components.views.windowed_view_feature_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class-objects","class-objects",1489112646),null,new cljs.core.Keyword(null,"all-pages","all-pages",1017563062),null], null), null);
frontend.components.views.windowed_view_feature_QMARK_ = (function frontend$components$views$windowed_view_feature_QMARK_(view_feature_type,group_by_property_ident){
return ((cljs.core.contains_QMARK_(frontend.components.views.windowed_view_feature_types,view_feature_type)) && ((group_by_property_ident == null)));
});
/**
 * One screen is already painted. Fetch the current screen plus the next
 *   so rapid scroll does not run off the window mid-fetch.
 */
frontend.components.views.offset_view_row_count = (function frontend$components$views$offset_view_row_count(screen_rows){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(frontend.components.views.view_prefetch_max_rows,((2) * cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),screen_rows)));
});
frontend.components.views.offset_view_context = (function frontend$components$views$offset_view_context(window_context,row_offset){
if(cljs.core.truth_((function (){var and__5140__auto__ = window_context;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.integer_QMARK_(row_offset)) && ((row_offset > (0))));
} else {
return and__5140__auto__;
}
})())){
var G__46937 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(window_context,new cljs.core.Keyword(null,"row-offset","row-offset",-1310990952),row_offset);
if(cljs.core.integer_QMARK_(new cljs.core.Keyword(null,"initial-row-count","initial-row-count",680426329).cljs$core$IFn$_invoke$arity$1(window_context))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__46937,new cljs.core.Keyword(null,"initial-row-count","initial-row-count",680426329),frontend.components.views.offset_view_row_count);
} else {
return G__46937;
}
} else {
return null;
}
});
/**
 * Remaining-id leftover collected 40938 pages in 84ms, sorted in 269ms,
 *   and normalized UUIDs in 496ms. Request one scrolled window instead.
 */
frontend.components.views.offset_view_data_key = (function frontend$components$views$offset_view_data_key(view_uuid,window_context,row_offset){
var temp__5825__auto__ = frontend.components.views.offset_view_context(window_context,row_offset);
if(cljs.core.truth_(temp__5825__auto__)){
var ctx = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view-data","view-data",461796245),view_uuid,ctx], null);
} else {
return null;
}
});
frontend.components.views.table_row_from_offset = (function frontend$components$views$table_row_from_offset(offset_rows,row_offset,idx){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.integer_QMARK_(idx);
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core.integer_QMARK_(row_offset);
if(and__5140__auto____$1){
var and__5140__auto____$2 = offset_rows;
if(cljs.core.truth_(and__5140__auto____$2)){
return (((idx >= row_offset)) && ((idx < (row_offset + cljs.core.count(offset_rows)))));
} else {
return and__5140__auto____$2;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(offset_rows,(idx - row_offset));
} else {
return null;
}
});
frontend.components.views.table_row_at = (function frontend$components$views$table_row_at(var_args){
var G__46939 = arguments.length;
switch (G__46939) {
case 4:
return frontend.components.views.table_row_at.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return frontend.components.views.table_row_at.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.components.views.table_row_at.cljs$core$IFn$_invoke$arity$4 = (function (first_rows,offset_rows,row_offset,idx){
return frontend.components.views.table_row_at.cljs$core$IFn$_invoke$arity$6(first_rows,offset_rows,row_offset,null,null,idx);
}));

(frontend.components.views.table_row_at.cljs$core$IFn$_invoke$arity$6 = (function (first_rows,offset_rows,row_offset,stale_rows,stale_offset,idx){
var or__5142__auto__ = ((((cljs.core.integer_QMARK_(idx)) && ((((!((idx < (0))))) && ((idx < cljs.core.count(first_rows)))))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(first_rows,idx):null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = frontend.components.views.table_row_from_offset(offset_rows,row_offset,idx);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return frontend.components.views.table_row_from_offset(stale_rows,stale_offset,idx);
}
}
}));

(frontend.components.views.table_row_at.cljs$lang$maxFixedArity = 6);

frontend.components.views.table_row_key = (function frontend$components$views$table_row_key(first_rows,offset_rows,row_offset,stale_rows,stale_offset,idx){
return (""+"table-row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = frontend.components.views.table_row_at.cljs$core$IFn$_invoke$arity$6(first_rows,offset_rows,row_offset,stale_rows,stale_offset,idx);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "placeholder";
}
})()));
});
frontend.components.views.windowed_view_row = (function frontend$components$views$windowed_view_row(rows,p__46940,idx){
var map__46941 = p__46940;
var map__46941__$1 = cljs.core.__destructure_map(map__46941);
var all_row_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46941__$1,new cljs.core.Keyword(null,"all-row-ids","all-row-ids",351472952));
var offset_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46941__$1,new cljs.core.Keyword(null,"offset-rows","offset-rows",2126795718));
var row_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46941__$1,new cljs.core.Keyword(null,"row-offset","row-offset",-1310990952));
var stale_offset_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46941__$1,new cljs.core.Keyword(null,"stale-offset-rows","stale-offset-rows",104776623));
var stale_row_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46941__$1,new cljs.core.Keyword(null,"stale-row-offset","stale-row-offset",-262353700));
if(cljs.core.seq(all_row_ids)){
return frontend.components.views.table_row_at.cljs$core$IFn$_invoke$arity$6(all_row_ids,offset_rows,row_offset,stale_offset_rows,stale_row_offset,idx);
} else {
return frontend.util.nth_safe(rows,idx);
}
});
frontend.components.views.windowed_view_row_key = (function frontend$components$views$windowed_view_row_key(prefix,rows,option,idx){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = frontend.components.views.windowed_view_row(rows,option,idx);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "placeholder";
}
})()));
});
frontend.components.views.matching_stale_offset_window = (function frontend$components$views$matching_stale_offset_window(stale_window,window_context){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(stale_window),window_context)){
return stale_window;
} else {
return null;
}
});
/**
 * Virtuoso's list sits below page chrome. `#main-content-container`
 *   scrollTop includes that chrome; the first visible row index does not.
 */
frontend.components.views.scroll_list_offset_top = (function frontend$components$views$scroll_list_offset_top(scroll_parent){
var temp__5823__auto__ = (function (){var G__46942 = scroll_parent;
if((G__46942 == null)){
return null;
} else {
return G__46942.querySelector("[data-testid=\"virtuoso-item-list\"]");
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var list = temp__5823__auto__;
return cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),((list.getBoundingClientRect().top - scroll_parent.getBoundingClientRect().top) + (function (){var or__5142__auto__ = scroll_parent.scrollTop;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})()));
} else {
return (0);
}
});
frontend.components.views.scrolled_row_offset = (function frontend$components$views$scrolled_row_offset(var_args){
var G__46944 = arguments.length;
switch (G__46944) {
case 2:
return frontend.components.views.scrolled_row_offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.components.views.scrolled_row_offset.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.components.views.scrolled_row_offset.cljs$core$IFn$_invoke$arity$2 = (function (scroll_top,item_height){
return frontend.components.views.scrolled_row_offset.cljs$core$IFn$_invoke$arity$3(scroll_top,(0),item_height);
}));

(frontend.components.views.scrolled_row_offset.cljs$core$IFn$_invoke$arity$3 = (function (scroll_top,list_offset_top,item_height){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),Math.floor((cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),(scroll_top - cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),(function (){var or__5142__auto__ = list_offset_top;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})()))) / item_height)));
}));

(frontend.components.views.scrolled_row_offset.cljs$lang$maxFixedArity = 3);

/**
 * 0 is a real clientHeight before layout. `(or 0 window-height)` would
 *   keep it and hydrate one row.
 */
frontend.components.views.measured_viewport_height = (function frontend$components$views$measured_viewport_height(parent_height,window_height){
if(((typeof parent_height === 'number') && ((parent_height > (0))))){
return parent_height;
} else {
if(((typeof window_height === 'number') && ((window_height > (0))))){
return window_height;
} else {
return (0);

}
}
});
frontend.components.views.rows_for_height = (function frontend$components$views$rows_for_height(height_px,item_height){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2((1),Math.ceil((cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),height_px) / item_height)));
});
/**
 * Virtuoso mounts after the first screen has hydrated rows. An empty
 *   prefetch is `every?` true and must not count.
 */
frontend.components.views.viewport_filled_QMARK_ = (function frontend$components$views$viewport_filled_QMARK_(initial_rows_ready_QMARK_,hydrate_row_uuids){
var and__5140__auto__ = initial_rows_ready_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.boolean$(cljs.core.seq(hydrate_row_uuids));
} else {
return and__5140__auto__;
}
});
frontend.components.views.first_window_titles_ready_QMARK_ = (function frontend$components$views$first_window_titles_ready_QMARK_(row_previews){
return cljs.core.boolean$(cljs.core.seq(row_previews));
});
/**
 * First-window view-data already carries titles. Do not hold an empty
 *   table for the follow-up use-block snapshot.
 */
frontend.components.views.table_body_can_paint_QMARK_ = (function frontend$components$views$table_body_can_paint_QMARK_(initial_rows_ready_QMARK_,hydrate_row_uuids,row_previews){
var or__5142__auto__ = frontend.components.views.first_window_titles_ready_QMARK_(row_previews);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return frontend.components.views.viewport_filled_QMARK_(initial_rows_ready_QMARK_,hydrate_row_uuids);
}
});
/**
 * Pending views paint titles before use-block. Swapping in db/id
 *   re-rendered All Pages / Tags / Movies before the first lazy-item.
 */
frontend.components.views.first_paint_view_entity = (function frontend$components$views$first_paint_view_entity(view_entity,pending_view,first_paint_done_QMARK_){
if(cljs.core.truth_((function (){var and__5140__auto__ = first_paint_done_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(view_entity),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(pending_view));
} else {
return and__5140__auto__;
}
})())){
var or__5142__auto__ = view_entity;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return pending_view;
}
} else {
return pending_view;
}
});
/**
 * Movies fetched 17 class properties before view-data. Keep the first
 *   table frame on name/select/id.
 */
frontend.components.views.first_paint_class_properties = (function frontend$components$views$first_paint_class_properties(fetched,first_paint_done_QMARK_){
if(cljs.core.truth_(first_paint_done_QMARK_)){
var or__5142__auto__ = fetched;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
frontend.components.views.notify_first_table_paint_BANG_ = (function frontend$components$views$notify_first_table_paint_BANG_(_STAR_notified_QMARK_,on_first_table_paint_BANG_){
if(cljs.core.truth_((function (){var and__5140__auto__ = on_first_table_paint_BANG_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(_STAR_notified_QMARK_.current);
} else {
return and__5140__auto__;
}
})())){
(_STAR_notified_QMARK_.current = true);

return requestAnimationFrame(on_first_table_paint_BANG_);
} else {
return null;
}
});
/**
 * Empty tables skip Virtuoso. items-rendered never flips
 * mount-unpinned-cells?, so unused property pages hid the property
 * column and left .view-actions unmounted.
 */
frontend.components.views.empty_table_ready_on_mount_QMARK_ = (function frontend$components$views$empty_table_ready_on_mount_QMARK_(rows){
return cljs.core.not(cljs.core.seq(rows));
});
/**
 * View tabs and actions mount with the view chrome. Table rows can
 *   still wait for their first hydrated window.
 */
frontend.components.views.view_head_ready_on_mount_QMARK_ = (function frontend$components$views$view_head_ready_on_mount_QMARK_(_display_type,_view_partition,_rows){
return true;
});
/**
 * Preview rows painted titles first. Immediate use-block remounted
 *   every visible All Pages / Movies row before that frame committed.
 */
frontend.components.views.lazy_item_should_subscribe_QMARK_ = (function frontend$components$views$lazy_item_should_subscribe_QMARK_(preview,mount_unpinned_cells_QMARK_){
return (((preview == null)) || (mount_unpinned_cells_QMARK_ === true));
});
/**
 * First-window view-data already has the full count. Use it for the
 *   scrollbar so remaining ids do not have to replace the painted rows.
 */
frontend.components.views.table_total_count = (function frontend$components$views$table_total_count(rows,items_count){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2(cljs.core.count(rows),((typeof items_count === 'number')?items_count:(0)));
});
/**
 * First-window All Pages used an estimated count. After delete or
 *   filter the full id list is smaller; never paint extra empty rows.
 */
frontend.components.views.windowed_items_count = (function frontend$components$views$windowed_items_count(items_count,full_rows){
if((full_rows == null)){
return items_count;
} else {
if(typeof items_count === 'number'){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(items_count,cljs.core.count(full_rows));
} else {
return cljs.core.count(full_rows);

}
}
});
frontend.components.views.windowed_view_total_count = (function frontend$components$views$windowed_view_total_count(rows,p__46945){
var map__46946 = p__46945;
var map__46946__$1 = cljs.core.__destructure_map(map__46946);
var all_row_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46946__$1,new cljs.core.Keyword(null,"all-row-ids","all-row-ids",351472952));
var items_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46946__$1,new cljs.core.Keyword(null,"items-count","items-count",-135458025));
if(cljs.core.seq(all_row_ids)){
return frontend.components.views.table_total_count(all_row_ids,items_count);
} else {
return cljs.core.count(rows);
}
});
/**
 * On-screen rows from scroll position. Virtuoso's mounted overscan range
 *   is not a hydrate window.
 */
frontend.components.views.viewport_row_range = (function frontend$components$views$viewport_row_range(var_args){
var G__46948 = arguments.length;
switch (G__46948) {
case 4:
return frontend.components.views.viewport_row_range.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return frontend.components.views.viewport_row_range.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.components.views.viewport_row_range.cljs$core$IFn$_invoke$arity$4 = (function (scroll_top,viewport_height,item_height,total_count){
return frontend.components.views.viewport_row_range.cljs$core$IFn$_invoke$arity$5(scroll_top,(0),viewport_height,item_height,total_count);
}));

(frontend.components.views.viewport_row_range.cljs$core$IFn$_invoke$arity$5 = (function (scroll_top,list_offset_top,viewport_height,item_height,total_count){
if((((item_height > (0))) && ((total_count > (0))))){
var start = frontend.components.views.scrolled_row_offset.cljs$core$IFn$_invoke$arity$3(scroll_top,list_offset_top,item_height);
var end = cljs.core.min.cljs$core$IFn$_invoke$arity$2((total_count - (1)),frontend.components.views.scrolled_row_offset.cljs$core$IFn$_invoke$arity$3(((cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),scroll_top) + cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),viewport_height)) + (-1)),list_offset_top,item_height));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,cljs.core.max.cljs$core$IFn$_invoke$arity$2(start,end)], null);
} else {
return null;
}
}));

(frontend.components.views.viewport_row_range.cljs$lang$maxFixedArity = 5);

frontend.components.views.offset_prefetch_lead_rows = (8);
frontend.components.views.offset_window_covers_visible_QMARK_ = (function frontend$components$views$offset_window_covers_visible_QMARK_(row_offset,window_size,visible_start,visible_end){
return ((cljs.core.integer_QMARK_(row_offset)) && (((cljs.core.integer_QMARK_(window_size)) && ((((window_size > (0))) && (((cljs.core.integer_QMARK_(visible_start)) && (((cljs.core.integer_QMARK_(visible_end)) && ((((row_offset <= visible_start)) && (((row_offset + (window_size - (1))) >= visible_end)))))))))))));
});
frontend.components.views.offset_window_near_end_QMARK_ = (function frontend$components$views$offset_window_near_end_QMARK_(row_offset,window_size,visible_end){
return ((cljs.core.integer_QMARK_(row_offset)) && (((cljs.core.integer_QMARK_(window_size)) && (((cljs.core.integer_QMARK_(visible_end)) && ((visible_end >= ((row_offset + window_size) - frontend.components.views.offset_prefetch_lead_rows))))))));
});
/**
 * Keep the current offset window until the visible range leaves it.
 *   Replacing it every row of scroll left 27 empty Movies rows.
 */
frontend.components.views.next_scrolled_row_offset = (function frontend$components$views$next_scrolled_row_offset(var_args){
var G__46950 = arguments.length;
switch (G__46950) {
case 5:
return frontend.components.views.next_scrolled_row_offset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return frontend.components.views.next_scrolled_row_offset.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.components.views.next_scrolled_row_offset.cljs$core$IFn$_invoke$arity$5 = (function (current_offset,window_size,visible_start,visible_end,first_window_count){
return frontend.components.views.next_scrolled_row_offset.cljs$core$IFn$_invoke$arity$6(current_offset,window_size,visible_start,visible_end,first_window_count,true);
}));

(frontend.components.views.next_scrolled_row_offset.cljs$core$IFn$_invoke$arity$6 = (function (current_offset,window_size,visible_start,visible_end,first_window_count,offset_ready_QMARK_){
var first_end = ((((cljs.core.integer_QMARK_(first_window_count)) && ((first_window_count > (0)))))?(first_window_count - (1)):null);
if((!(cljs.core.integer_QMARK_(visible_start)))){
return current_offset;
} else {
if(((cljs.core.integer_QMARK_(current_offset)) && ((!(offset_ready_QMARK_ === true))))){
if(((cljs.core.integer_QMARK_(visible_start)) && (((cljs.core.integer_QMARK_(window_size)) && ((((visible_start < current_offset)) || ((visible_start > (current_offset + window_size))))))))){
return visible_start;
} else {
return current_offset;
}
} else {
if(frontend.components.views.offset_window_covers_visible_QMARK_(current_offset,window_size,visible_start,visible_end)){
if(frontend.components.views.offset_window_near_end_QMARK_(current_offset,window_size,visible_end)){
return visible_start;
} else {
return current_offset;
}
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = first_end;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.integer_QMARK_(visible_end)) && ((visible_end < (first_end - frontend.components.views.offset_prefetch_lead_rows))));
} else {
return and__5140__auto__;
}
})())){
return current_offset;
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = first_end;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.integer_QMARK_(visible_end)) && ((visible_start <= first_end)));
} else {
return and__5140__auto__;
}
})())){
return first_window_count;
} else {
return visible_start;

}
}
}
}
}
}));

(frontend.components.views.next_scrolled_row_offset.cljs$lang$maxFixedArity = 6);

/**
 * First paint hydrates only the rows that fit on screen.
 */
frontend.components.views.initial_view_prefetch_count = (function frontend$components$views$initial_view_prefetch_count(viewport_height,item_height){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(frontend.components.views.view_prefetch_max_rows,frontend.components.views.rows_for_height(viewport_height,item_height));
});
/**
 * Hydrate one screen. Virtuoso overscan keeps placeholders and does not
 *   belong in the snapshot batch.
 */
frontend.components.views.view_prefetch_row_count = (function frontend$components$views$view_prefetch_row_count(viewport_height,item_height){
return frontend.components.views.initial_view_prefetch_count(viewport_height,item_height);
});
frontend.components.views.view_prefetch_bounds = (function frontend$components$views$view_prefetch_bounds(rows_count,start_index,end_index,window_size){
if((rows_count === (0))){
return null;
} else {
if((rows_count <= window_size)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(rows_count - (1))], null);
} else {
var max_start = (rows_count - window_size);
var visible_count = ((end_index - start_index) + (1));
if((visible_count <= window_size)){
var start = cljs.core.min.cljs$core$IFn$_invoke$arity$2(max_start,cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),start_index));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(start + (window_size - (1)))], null);
} else {
var center_index = cljs.core.quot((start_index + end_index),(2));
var start = cljs.core.min.cljs$core$IFn$_invoke$arity$2(max_start,cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),(center_index - cljs.core.quot(window_size,(2)))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(start + (window_size - (1)))], null);
}

}
}
});
frontend.components.views.prefetch_bounds_cover_visible_QMARK_ = (function frontend$components$views$prefetch_bounds_cover_visible_QMARK_(current_bounds,visible_start,visible_end,rows_count,window_size){
var vec__46951 = frontend.components.views.view_prefetch_bounds(rows_count,visible_start,visible_end,window_size);
var need_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46951,(0),null);
var need_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46951,(1),null);
return (((!((current_bounds == null)))) && ((((!((need_start == null)))) && ((((cljs.core.first(current_bounds) <= need_start)) && ((cljs.core.second(current_bounds) >= need_end)))))));
});
/**
 * Keep the current screen-sized window until the visible range approaches an edge.
 */
frontend.components.views.next_view_prefetch_bounds = (function frontend$components$views$next_view_prefetch_bounds(rows_count,current_bounds,visible_start,visible_end,window_size){
if(frontend.components.views.prefetch_bounds_cover_visible_QMARK_(current_bounds,visible_start,visible_end,rows_count,window_size)){
return current_bounds;
} else {
return frontend.components.views.view_prefetch_bounds(rows_count,visible_start,visible_end,window_size);
}
});
frontend.components.views.rendered_item_index = (function frontend$components$views$rendered_item_index(item){
return item.index;
});
/**
 * Accept the on-screen [start end] or Virtuoso's mounted items. A
 *   two-index vector is the viewport; a mounted list still works for
 *   gallery cards.
 */
frontend.components.views.prefetch_visible_range = (function frontend$components$views$prefetch_visible_range(rendered){
if(((cljs.core.vector_QMARK_(rendered)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(rendered))) && (((typeof cljs.core.first(rendered) === 'number') && (typeof cljs.core.second(rendered) === 'number'))))))){
return rendered;
} else {
if(cljs.core.truth_(cljs.core.array_QMARK_(rendered))){
if((rendered.length > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.views.rendered_item_index((rendered[(0)])),frontend.components.views.rendered_item_index((rendered[(rendered.length - (1))]))], null);
} else {
return null;
}
} else {
return null;

}
}
});
frontend.components.views.uuid_row_ids = (function frontend$components$views$uuid_row_ids(rows){
if(((cljs.core.sequential_QMARK_(rows)) && (cljs.core.every_QMARK_(cljs.core.uuid_QMARK_,rows)))){
return rows;
} else {
return null;
}
});
/**
 * Grouped tables pass [group-value row-uuids] as :all-row-ids. Prefetch
 *   must see the group's UUIDs, not the scalar group value. List views
 *   keep :grouped-list partitions; painting those as table rows called
 *   use-block on [breadcrumb-uuid row-uuids] and crashed the page.
 */
frontend.components.views.table_body_row_ids = (function frontend$components$views$table_body_row_ids(all_row_ids,table_data,rows){
var or__5142__auto__ = frontend.components.views.uuid_row_ids(all_row_ids);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = frontend.components.views.uuid_row_ids(table_data);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = frontend.components.views.uuid_row_ids(rows);
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return cljs.core.PersistentVector.EMPTY;
}
}
}
});
/**
 * Offset windows can be shorter than the previous first-window bounds.
 *   Tags crashed when [0 25] was applied to 11 leftover rows.
 */
frontend.components.views.prefetch_rows_in_bounds = (function frontend$components$views$prefetch_rows_in_bounds(rows,bounds){
var rows_vec = cljs.core.vec(rows);
if(cljs.core.empty_QMARK_(rows_vec)){
return cljs.core.PersistentVector.EMPTY;
} else {
if((bounds == null)){
return rows_vec;
} else {
var start = cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),cljs.core.min.cljs$core$IFn$_invoke$arity$2(cljs.core.first(bounds),(cljs.core.count(rows_vec) - (1))));
var end = cljs.core.min.cljs$core$IFn$_invoke$arity$2(cljs.core.count(rows_vec),(cljs.core.second(bounds) + (1)));
if((start < end)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(rows_vec,start,end);
} else {
return cljs.core.PersistentVector.EMPTY;
}

}
}
});
frontend.components.views.use_view_row_prefetch = (function frontend$components$views$use_view_row_prefetch(var_args){
var G__46955 = arguments.length;
switch (G__46955) {
case 1:
return frontend.components.views.use_view_row_prefetch.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.components.views.use_view_row_prefetch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.components.views.use_view_row_prefetch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.components.views.use_view_row_prefetch.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return frontend.components.views.use_view_row_prefetch.cljs$core$IFn$_invoke$arity$3(rows,frontend.components.views.initial_view_prefetch_count((function (){var or__5142__auto__ = window.innerHeight;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})(),frontend.components.views.lazy_item_placeholder_height(false)),frontend.components.views.view_prefetch_row_count((function (){var or__5142__auto__ = window.innerHeight;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})(),frontend.components.views.lazy_item_placeholder_height(false)));
}));

(frontend.components.views.use_view_row_prefetch.cljs$core$IFn$_invoke$arity$2 = (function (rows,initial_prefetch_count){
return frontend.components.views.use_view_row_prefetch.cljs$core$IFn$_invoke$arity$3(rows,initial_prefetch_count,initial_prefetch_count);
}));

(frontend.components.views.use_view_row_prefetch.cljs$core$IFn$_invoke$arity$3 = (function (rows,initial_prefetch_count,window_size){
var vec__46956 = logseq.shui.hooks.use_state(null);
var prefetch_bounds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46956,(0),null);
var set_prefetch_bounds_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46956,(1),null);
var rows_vec = cljs.core.vec(rows);
var prefetch_rows = (cljs.core.truth_(prefetch_bounds)?frontend.components.views.prefetch_rows_in_bounds(rows_vec,prefetch_bounds):cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(rows_vec,(0),cljs.core.min.cljs$core$IFn$_invoke$arity$2(cljs.core.count(rows_vec),initial_prefetch_count)));
var prefetch_ready_QMARK_ = frontend.db.hooks.use_block_prefetch(prefetch_rows);
var vec__46959 = logseq.shui.hooks.use_state(prefetch_ready_QMARK_);
var initial_prefetch_ready_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46959,(0),null);
var set_initial_prefetch_ready_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46959,(1),null);
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(prefetch_ready_QMARK_)){
return (set_initial_prefetch_ready_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_initial_prefetch_ready_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_initial_prefetch_ready_BANG_.call(null,true));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prefetch_ready_QMARK_], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5142__auto__ = initial_prefetch_ready_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return prefetch_ready_QMARK_;
}
})(),cljs.core.set(prefetch_rows),(function (rendered){
var temp__5825__auto__ = frontend.components.views.prefetch_visible_range(rendered);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__46962 = temp__5825__auto__;
var visible_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46962,(0),null);
var visible_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46962,(1),null);
var G__46965 = (function (current_bounds){
var next_bounds = frontend.components.views.next_view_prefetch_bounds(cljs.core.count(rows_vec),current_bounds,visible_start,visible_end,window_size);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_bounds,next_bounds)){
return current_bounds;
} else {
return next_bounds;
}
});
return (set_prefetch_bounds_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_prefetch_bounds_BANG_.cljs$core$IFn$_invoke$arity$1(G__46965) : set_prefetch_bounds_BANG_.call(null,G__46965));
} else {
return null;
}
})], null);
}));

(frontend.components.views.use_view_row_prefetch.cljs$lang$maxFixedArity = 3);

frontend.components.views.lazy_item_placeholder = (function (){var render_fn__31744__auto__ = (function frontend$components$views$lazy_item_placeholder(table_view_QMARK_,gallery_view_QMARK_,table,idx,option){
if(cljs.core.truth_(gallery_view_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-card-item","div.ls-card-item",1648927432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true], null)], null);
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = table_view_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return table;
} else {
return and__5140__auto__;
}
})())){
return frontend.components.views.table_row_placeholder(table,idx,option);
} else {
var height = frontend.components.views.lazy_item_placeholder_height(table_view_QMARK_);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__46966 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),height], null);
if(cljs.core.truth_(table_view_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__46966,new cljs.core.Keyword(null,"height","height",1025178622),height,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"max-height","max-height",-612563804),height,new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], 0));
} else {
return G__46966;
}
})()], null)], null);
}
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$lazy_item_placeholder__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46967 = cljs.core.first(args__31746__auto__);
var G__46968 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46967,G__46968) : io.factorhouse.hsx.core.obj_get.call(null,G__46967,G__46968));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"lazy-item-placeholder","lazy-item-placeholder",1977324881,null),args__31746__auto__),frontend$components$views$lazy_item_placeholder,args__31746__auto__,null);
}
};
var frontend$components$views$lazy_item_placeholder = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47616__i = 0, G__47616__a = new Array(arguments.length -  0);
while (G__47616__i < G__47616__a.length) {G__47616__a[G__47616__i] = arguments[G__47616__i + 0]; ++G__47616__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47616__a,0,null);
} 
return frontend$components$views$lazy_item_placeholder__delegate.call(this,args__31746__auto__);};
frontend$components$views$lazy_item_placeholder.cljs$lang$maxFixedArity = 0;
frontend$components$views$lazy_item_placeholder.cljs$lang$applyTo = (function (arglist__47617){
var args__31746__auto__ = cljs.core.seq(arglist__47617);
return frontend$components$views$lazy_item_placeholder__delegate(args__31746__auto__);
});
frontend$components$views$lazy_item_placeholder.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$lazy_item_placeholder__delegate;
return frontend$components$views$lazy_item_placeholder;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46969 = comp__31745__auto__;
var G__46970 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46969,G__46970) : io.factorhouse.hsx.core.react_memo.call(null,G__46969,G__46970));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"lazy-item-placeholder");

return comp__31745__auto__;
})();
frontend.components.views.lazy_item_subscribed = (function (){var render_fn__31744__auto__ = (function frontend$components$views$lazy_item_subscribed(row_uuid,preview,item_render,table_view_QMARK_,gallery_view_QMARK_,table,idx,option){
var item = (function (){var or__5142__auto__ = frontend.db.hooks.use_block(row_uuid);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return preview;
}
})();
if(cljs.core.truth_(item)){
return (item_render.cljs$core$IFn$_invoke$arity$1 ? item_render.cljs$core$IFn$_invoke$arity$1(item) : item_render.call(null,item));
} else {
return frontend.components.views.lazy_item_placeholder(table_view_QMARK_,gallery_view_QMARK_,table,idx,option);
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$lazy_item_subscribed__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46971 = cljs.core.first(args__31746__auto__);
var G__46972 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46971,G__46972) : io.factorhouse.hsx.core.obj_get.call(null,G__46971,G__46972));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"lazy-item-subscribed","lazy-item-subscribed",1735710993,null),args__31746__auto__),frontend$components$views$lazy_item_subscribed,args__31746__auto__,null);
}
};
var frontend$components$views$lazy_item_subscribed = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47618__i = 0, G__47618__a = new Array(arguments.length -  0);
while (G__47618__i < G__47618__a.length) {G__47618__a[G__47618__i] = arguments[G__47618__i + 0]; ++G__47618__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47618__a,0,null);
} 
return frontend$components$views$lazy_item_subscribed__delegate.call(this,args__31746__auto__);};
frontend$components$views$lazy_item_subscribed.cljs$lang$maxFixedArity = 0;
frontend$components$views$lazy_item_subscribed.cljs$lang$applyTo = (function (arglist__47619){
var args__31746__auto__ = cljs.core.seq(arglist__47619);
return frontend$components$views$lazy_item_subscribed__delegate(args__31746__auto__);
});
frontend$components$views$lazy_item_subscribed.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$lazy_item_subscribed__delegate;
return frontend$components$views$lazy_item_subscribed;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46973 = comp__31745__auto__;
var G__46974 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46973,G__46974) : io.factorhouse.hsx.core.react_memo.call(null,G__46973,G__46974));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"lazy-item-subscribed");

return comp__31745__auto__;
})();
frontend.components.views.lazy_item = (function (){var render_fn__31744__auto__ = (function frontend$components$views$lazy_item(data,idx,p__46975,item_render){
var map__46976 = p__46975;
var map__46976__$1 = cljs.core.__destructure_map(map__46976);
var option = map__46976__$1;
var gallery_view_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46976__$1,new cljs.core.Keyword(null,"gallery-view?","gallery-view?",1298131224));
var table_view_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46976__$1,new cljs.core.Keyword(null,"table-view?","table-view?",2073887505));
var row_previews = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46976__$1,new cljs.core.Keyword(null,"row-previews","row-previews",1767259697));
var mount_unpinned_cells_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46976__$1,new cljs.core.Keyword(null,"mount-unpinned-cells?","mount-unpinned-cells?",1283108385));
var table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46976__$1,new cljs.core.Keyword(null,"table","table",-564943036));
var row_uuid = frontend.util.nth_safe(data,idx);
var preview = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row_previews,row_uuid);
var vec__46977 = logseq.shui.hooks.use_state((preview == null));
var subscribe_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46977,(0),null);
var set_subscribe_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46977,(1),null);
logseq.shui.hooks.use_effect_BANG_((function (){
if(((cljs.core.not(subscribe_QMARK_)) && (frontend.components.views.lazy_item_should_subscribe_QMARK_(preview,mount_unpinned_cells_QMARK_)))){
var frame = requestAnimationFrame((function (){
return (set_subscribe_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_subscribe_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_subscribe_BANG_.call(null,true));
}));
return (function (){
return cancelAnimationFrame(frame);
});
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mount_unpinned_cells_QMARK_], null));

if(cljs.core.truth_((function (){var and__5140__auto__ = preview;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(subscribe_QMARK_);
} else {
return and__5140__auto__;
}
})())){
return (item_render.cljs$core$IFn$_invoke$arity$1 ? item_render.cljs$core$IFn$_invoke$arity$1(preview) : item_render.call(null,preview));
} else {
if(cljs.core.truth_(row_uuid)){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.views.lazy_item_subscribed,row_uuid,preview,item_render,table_view_QMARK_,gallery_view_QMARK_,table,idx,option], null);
} else {
return frontend.components.views.lazy_item_placeholder(table_view_QMARK_,gallery_view_QMARK_,table,idx,option);

}
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$lazy_item__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__46980 = cljs.core.first(args__31746__auto__);
var G__46981 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__46980,G__46981) : io.factorhouse.hsx.core.obj_get.call(null,G__46980,G__46981));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"lazy-item","lazy-item",-1267939261,null),args__31746__auto__),frontend$components$views$lazy_item,args__31746__auto__,null);
}
};
var frontend$components$views$lazy_item = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47620__i = 0, G__47620__a = new Array(arguments.length -  0);
while (G__47620__i < G__47620__a.length) {G__47620__a[G__47620__i] = arguments[G__47620__i + 0]; ++G__47620__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47620__a,0,null);
} 
return frontend$components$views$lazy_item__delegate.call(this,args__31746__auto__);};
frontend$components$views$lazy_item.cljs$lang$maxFixedArity = 0;
frontend$components$views$lazy_item.cljs$lang$applyTo = (function (arglist__47621){
var args__31746__auto__ = cljs.core.seq(arglist__47621);
return frontend$components$views$lazy_item__delegate(args__31746__auto__);
});
frontend$components$views$lazy_item.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$lazy_item__delegate;
return frontend$components$views$lazy_item;
})()
;
var memo_comp__31747__auto__ = (function (){var G__46982 = comp__31745__auto__;
var G__46983 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__46982,G__46983) : io.factorhouse.hsx.core.react_memo.call(null,G__46982,G__46983));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"lazy-item");

return comp__31745__auto__;
})();
frontend.components.views.table_body = (function (){var render_fn__31744__auto__ = (function frontend$components$views$table_body(table,option,rows,_STAR_scroller_ref,set_items_rendered_BANG_){
var scroll_parent = frontend.components.views.get_scroll_parent(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(option),new cljs.core.Keyword(null,"viewel","viewel",606402959),document.getElementById(new cljs.core.Keyword(null,"viewid","viewid",-50894460).cljs$core$IFn$_invoke$arity$1(option))));
var map__46985 = frontend.components.views.table_virtualization_metrics();
var map__46985__$1 = cljs.core.__destructure_map(map__46985);
var item_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46985__$1,new cljs.core.Keyword(null,"item-height","item-height",1808364479));
var overscan_px = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46985__$1,new cljs.core.Keyword(null,"overscan-px","overscan-px",985813356));
var viewport_height = frontend.components.views.measured_viewport_height((function (){var G__46989 = scroll_parent;
if((G__46989 == null)){
return null;
} else {
return G__46989.clientHeight;
}
})(),window.innerHeight);
var initial_prefetch_count = frontend.components.views.initial_view_prefetch_count(viewport_height,item_height);
var prefetch_window_size = frontend.components.views.view_prefetch_row_count(viewport_height,item_height);
var all_row_ids = frontend.components.views.table_body_row_ids(new cljs.core.Keyword(null,"all-row-ids","all-row-ids",351472952).cljs$core$IFn$_invoke$arity$1(option),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table),rows);
var offset_rows = new cljs.core.Keyword(null,"offset-rows","offset-rows",2126795718).cljs$core$IFn$_invoke$arity$1(option);
var row_offset = new cljs.core.Keyword(null,"row-offset","row-offset",-1310990952).cljs$core$IFn$_invoke$arity$1(option);
var stale_rows = new cljs.core.Keyword(null,"stale-offset-rows","stale-offset-rows",104776623).cljs$core$IFn$_invoke$arity$1(option);
var stale_offset = new cljs.core.Keyword(null,"stale-row-offset","stale-row-offset",-262353700).cljs$core$IFn$_invoke$arity$1(option);
var prefetch_source = ((cljs.core.seq(offset_rows))?offset_rows:all_row_ids);
var row_previews = new cljs.core.Keyword(null,"row-previews","row-previews",1767259697).cljs$core$IFn$_invoke$arity$1(option);
var vec__46986 = frontend.components.views.use_view_row_prefetch.cljs$core$IFn$_invoke$arity$3(prefetch_source,((cljs.core.seq(row_previews))?(0):initial_prefetch_count),prefetch_window_size);
var initial_rows_ready_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46986,(0),null);
var hydrate_row_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46986,(1),null);
var prefetch_rows_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46986,(2),null);
var mount_unpinned_cells_QMARK_ = new cljs.core.Keyword(null,"mount-unpinned-cells?","mount-unpinned-cells?",1283108385).cljs$core$IFn$_invoke$arity$1(option);
var set_mount_unpinned_cells_BANG_ = new cljs.core.Keyword(null,"set-mount-unpinned-cells!","set-mount-unpinned-cells!",1983625374).cljs$core$IFn$_invoke$arity$1(option);
var on_viewport_filled_BANG_ = new cljs.core.Keyword(null,"on-viewport-filled!","on-viewport-filled!",325008543).cljs$core$IFn$_invoke$arity$1(option);
var total_count = frontend.components.views.table_total_count(all_row_ids,new cljs.core.Keyword(null,"items-count","items-count",-135458025).cljs$core$IFn$_invoke$arity$1(option));
var request_scrolled_offset_BANG_ = (function (){
var scroll_top = (function (){var or__5142__auto__ = (function (){var G__46993 = scroll_parent;
if((G__46993 == null)){
return null;
} else {
return G__46993.scrollTop;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})();
var list_offset = frontend.components.views.scroll_list_offset_top(scroll_parent);
var window_size = cljs.core.max.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq(offset_rows))?cljs.core.count(offset_rows):(0)),frontend.components.views.offset_view_row_count(initial_prefetch_count));
var vec__46990 = (function (){var or__5142__auto__ = frontend.components.views.viewport_row_range.cljs$core$IFn$_invoke$arity$5(scroll_top,list_offset,viewport_height,item_height,total_count);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var vis_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46990,(0),null);
var vis_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46990,(1),null);
var next_offset = frontend.components.views.next_scrolled_row_offset.cljs$core$IFn$_invoke$arity$6(row_offset,window_size,vis_start,vis_end,cljs.core.count(all_row_ids),cljs.core.boolean$(cljs.core.seq(offset_rows)));
if(cljs.core.truth_((function (){var and__5140__auto__ = on_viewport_filled_BANG_;
if(cljs.core.truth_(and__5140__auto__)){
return (((scroll_top > (0))) && (((cljs.core.integer_QMARK_(next_offset)) && ((((next_offset > (0))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_offset,row_offset)))))));
} else {
return and__5140__auto__;
}
})())){
return (on_viewport_filled_BANG_.cljs$core$IFn$_invoke$arity$1 ? on_viewport_filled_BANG_.cljs$core$IFn$_invoke$arity$1(next_offset) : on_viewport_filled_BANG_.call(null,next_offset));
} else {
return null;
}
});
var option__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(option,new cljs.core.Keyword(null,"table-view?","table-view?",2073887505),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"table","table",-564943036),table,new cljs.core.Keyword(null,"mount-unpinned-cells?","mount-unpinned-cells?",1283108385),mount_unpinned_cells_QMARK_], 0));
var can_paint_QMARK_ = frontend.components.views.table_body_can_paint_QMARK_(initial_rows_ready_QMARK_,hydrate_row_uuids,row_previews);
var _STAR_first_paint_notified_QMARK_ = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(false) : logseq.shui.hooks.use_ref.call(null,false));
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.seq(offset_rows)){
var G__46994 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(cljs.core.count(offset_rows) - (1))], null);
return (prefetch_rows_BANG_.cljs$core$IFn$_invoke$arity$1 ? prefetch_rows_BANG_.cljs$core$IFn$_invoke$arity$1(G__46994) : prefetch_rows_BANG_.call(null,G__46994));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(offset_rows),row_offset], null));

logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(can_paint_QMARK_)){
var frame = requestAnimationFrame(request_scrolled_offset_BANG_);
return (function (){
return cancelAnimationFrame(frame);
});
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [can_paint_QMARK_,row_offset,cljs.core.count(offset_rows),total_count,viewport_height], null));

if(cljs.core.not(cljs.core.seq(rows))){
return null;
} else {
if(cljs.core.not(can_paint_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.space-2.gap-2.my-2","div.flex.flex-col.space-2.gap-2.my-2",543145494),(function (){var iter__5628__auto__ = (function frontend$components$views$table_body_$_iter__46995(s__46996){
return (new cljs.core.LazySeq(null,(function (){
var s__46996__$1 = s__46996;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__46996__$1);
if(temp__5825__auto__){
var s__46996__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46996__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__46996__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__46998 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__46997 = (0);
while(true){
if((i__46997 < size__5627__auto__)){
var idx = cljs.core._nth(c__5626__auto__,i__46997);
cljs.core.chunk_append(b__46998,(function (){var G__46999 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"class","class",-2030961996),"h-6 w-full"], null);
return (logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1(G__46999) : logseq.shui.ui.skeleton.call(null,G__46999));
})());

var G__47622 = (i__46997 + (1));
i__46997 = G__47622;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46998),frontend$components$views$table_body_$_iter__46995(cljs.core.chunk_rest(s__46996__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46998),null);
}
} else {
var idx = cljs.core.first(s__46996__$2);
return cljs.core.cons((function (){var G__47000 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"class","class",-2030961996),"h-6 w-full"], null);
return (logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1(G__47000) : logseq.shui.ui.skeleton.call(null,G__47000));
})(),frontend$components$views$table_body_$_iter__46995(cljs.core.rest(s__46996__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
})()], null);
} else {
return frontend.components.views.virtualized_list(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"skipAnimationFrameInResizeObserver","skipAnimationFrameInResizeObserver",1677982016),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"increase-viewport-by","increase-viewport-by",1517073864),new cljs.core.Keyword(null,"item-content","item-content",1656730280),new cljs.core.Keyword(null,"compute-item-key","compute-item-key",-621146487),new cljs.core.Keyword(null,"default-item-height","default-item-height",-1403946768),new cljs.core.Keyword(null,"custom-scroll-parent","custom-scroll-parent",1031485618),new cljs.core.Keyword(null,"total-count","total-count",-1999441386),new cljs.core.Keyword(null,"fixed-item-height","fixed-item-height",1609809561),new cljs.core.Keyword(null,"items-rendered","items-rendered",1483099102)],[true,(function (p1__46984_SHARP_){
return cljs.core.reset_BANG_(_STAR_scroller_ref,p1__46984_SHARP_);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),overscan_px,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),overscan_px], null),(function (idx){
var row_uuid = frontend.components.views.table_row_at.cljs$core$IFn$_invoke$arity$6(all_row_ids,offset_rows,row_offset,stale_rows,stale_offset,idx);
var live_offset_QMARK_ = (!((frontend.components.views.table_row_from_offset(offset_rows,row_offset,idx) == null)));
var stale_offset_QMARK_ = (((!(live_offset_QMARK_))) && ((!((frontend.components.views.table_row_from_offset(stale_rows,stale_offset,idx) == null)))));
if(cljs.core.truth_(row_uuid)){
return frontend.components.views.lazy_item(((live_offset_QMARK_)?offset_rows:((stale_offset_QMARK_)?stale_rows:all_row_ids
)),((live_offset_QMARK_)?(idx - row_offset):((stale_offset_QMARK_)?(idx - stale_offset):idx
)),option__$1,(function (row){
return frontend.components.views.table_row(table,row,cljs.core.PersistentArrayMap.EMPTY,option__$1);
}));
} else {
return frontend.components.views.lazy_item_placeholder(true,false,table,idx,option__$1);
}
}),(function (idx){
return frontend.components.views.table_row_key(all_row_ids,offset_rows,row_offset,stale_rows,stale_offset,idx);
}),item_height,scroll_parent,total_count,item_height,(function (props){
var G__47001_47623 = ((cljs.core.seq(offset_rows))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(cljs.core.count(offset_rows) - (1))], null):(function (){var or__5142__auto__ = frontend.components.views.viewport_row_range.cljs$core$IFn$_invoke$arity$5((function (){var or__5142__auto__ = (function (){var G__47002 = scroll_parent;
if((G__47002 == null)){
return null;
} else {
return G__47002.scrollTop;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})(),frontend.components.views.scroll_list_offset_top(scroll_parent),viewport_height,item_height,total_count);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return props;
}
})());
(prefetch_rows_BANG_.cljs$core$IFn$_invoke$arity$1 ? prefetch_rows_BANG_.cljs$core$IFn$_invoke$arity$1(G__47001_47623) : prefetch_rows_BANG_.call(null,G__47001_47623));

if(cljs.core.seq(props)){
(set_items_rendered_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_items_rendered_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_items_rendered_BANG_.call(null,true));

frontend.components.views.notify_first_table_paint_BANG_(_STAR_first_paint_notified_QMARK_,new cljs.core.Keyword(null,"on-first-table-paint!","on-first-table-paint!",1107280735).cljs$core$IFn$_invoke$arity$1(option__$1));

if(cljs.core.truth_(set_mount_unpinned_cells_BANG_)){
requestAnimationFrame((function (){
return (set_mount_unpinned_cells_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_mount_unpinned_cells_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_mount_unpinned_cells_BANG_.call(null,true));
}));
} else {
}

return request_scrolled_offset_BANG_();
} else {
return null;
}
})]),new cljs.core.Keyword(null,"disable-virtualized?","disable-virtualized?",-1546442714).cljs$core$IFn$_invoke$arity$1(option__$1));

}
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$table_body__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47003 = cljs.core.first(args__31746__auto__);
var G__47004 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47003,G__47004) : io.factorhouse.hsx.core.obj_get.call(null,G__47003,G__47004));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"table-body","table-body",887072650,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$views$table_body,args__31746__auto__,null);
}
};
var frontend$components$views$table_body = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47624__i = 0, G__47624__a = new Array(arguments.length -  0);
while (G__47624__i < G__47624__a.length) {G__47624__a[G__47624__i] = arguments[G__47624__i + 0]; ++G__47624__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47624__a,0,null);
} 
return frontend$components$views$table_body__delegate.call(this,args__31746__auto__);};
frontend$components$views$table_body.cljs$lang$maxFixedArity = 0;
frontend$components$views$table_body.cljs$lang$applyTo = (function (arglist__47625){
var args__31746__auto__ = cljs.core.seq(arglist__47625);
return frontend$components$views$table_body__delegate(args__31746__auto__);
});
frontend$components$views$table_body.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$table_body__delegate;
return frontend$components$views$table_body;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47005 = comp__31745__auto__;
var G__47006 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47005,G__47006) : io.factorhouse.hsx.core.react_memo.call(null,G__47005,G__47006));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"table-body");

return comp__31745__auto__;
})();
frontend.components.views.table_view = (function (){var render_fn__31744__auto__ = (function frontend$components$views$table_view(table,option,_row_selection,_STAR_scroller_ref){
var empty_rows_QMARK_ = frontend.components.views.empty_table_ready_on_mount_QMARK_(new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(table));
var cells_ready_QMARK_ = ((empty_rows_QMARK_) || (new cljs.core.Keyword(null,"disable-virtualized?","disable-virtualized?",-1546442714).cljs$core$IFn$_invoke$arity$1(option) === true));
var vec__47007 = logseq.shui.hooks.use_state(cells_ready_QMARK_);
var items_rendered_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47007,(0),null);
var set_items_rendered_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47007,(1),null);
var vec__47010 = logseq.shui.hooks.use_state(cells_ready_QMARK_);
var mount_unpinned_cells_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47010,(0),null);
var set_mount_unpinned_cells_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47010,(1),null);
var option__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(option,new cljs.core.Keyword(null,"mount-unpinned-cells?","mount-unpinned-cells?",1283108385),mount_unpinned_cells_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"set-mount-unpinned-cells!","set-mount-unpinned-cells!",1983625374),set_mount_unpinned_cells_BANG_], 0));
return logseq.shui.ui.table((function (){var rows = new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(table);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-table-rows.content.overflow-x-auto.force-visible-scrollbar","div.ls-table-rows.content.overflow-x-auto.force-visible-scrollbar",-221099795),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative","div.relative",430334058),frontend.components.views.table_header(table,option__$1),frontend.components.views.table_body(table,option__$1,rows,_STAR_scroller_ref,set_items_rendered_BANG_),(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-fns","data-fns",-1065218324),new cljs.core.Keyword(null,"add-new-object!","add-new-object!",622560106)], null));
if(cljs.core.truth_(and__5140__auto__)){
var or__5142__auto__ = cljs.core.empty_QMARK_(rows);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return items_rendered_QMARK_;
}
} else {
return and__5140__auto__;
}
})())?logseq.shui.ui.table_footer(frontend.components.views.add_new_row(new cljs.core.Keyword(null,"view-entity","view-entity",-1084117808).cljs$core$IFn$_invoke$arity$1(option__$1),table)):null)], null)], null);
})());
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$table_view__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47013 = cljs.core.first(args__31746__auto__);
var G__47014 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47013,G__47014) : io.factorhouse.hsx.core.obj_get.call(null,G__47013,G__47014));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"table-view","table-view",992233672,null),args__31746__auto__),frontend$components$views$table_view,args__31746__auto__,null);
}
};
var frontend$components$views$table_view = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47626__i = 0, G__47626__a = new Array(arguments.length -  0);
while (G__47626__i < G__47626__a.length) {G__47626__a[G__47626__i] = arguments[G__47626__i + 0]; ++G__47626__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47626__a,0,null);
} 
return frontend$components$views$table_view__delegate.call(this,args__31746__auto__);};
frontend$components$views$table_view.cljs$lang$maxFixedArity = 0;
frontend$components$views$table_view.cljs$lang$applyTo = (function (arglist__47627){
var args__31746__auto__ = cljs.core.seq(arglist__47627);
return frontend$components$views$table_view__delegate(args__31746__auto__);
});
frontend$components$views$table_view.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$table_view__delegate;
return frontend$components$views$table_view;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47015 = comp__31745__auto__;
var G__47016 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47015,G__47016) : io.factorhouse.hsx.core.react_memo.call(null,G__47015,G__47016));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"table-view");

return comp__31745__auto__;
})();
frontend.components.views.list_view = (function (){var render_fn__31744__auto__ = (function frontend$components$views$list_view(p__47018,view_entity,p__47019,_STAR_scroller_ref){
var map__47020 = p__47018;
var map__47020__$1 = cljs.core.__destructure_map(map__47020);
var option = map__47020__$1;
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47020__$1,new cljs.core.Keyword(null,"config","config",994861415));
var ref_matched_children_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47020__$1,new cljs.core.Keyword(null,"ref-matched-children-ids","ref-matched-children-ids",1569574404));
var disable_virtualized_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47020__$1,new cljs.core.Keyword(null,"disable-virtualized?","disable-virtualized?",-1546442714));
var on_viewport_filled_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47020__$1,new cljs.core.Keyword(null,"on-viewport-filled!","on-viewport-filled!",325008543));
var map__47021 = p__47019;
var map__47021__$1 = cljs.core.__destructure_map(map__47021);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47021__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var view_feature_type = new cljs.core.Keyword("logseq.property.view","feature-type","logseq.property.view/feature-type",-939141871).cljs$core$IFn$_invoke$arity$1(view_entity);
var references_view_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"linked-references","linked-references",-2117592379),null,new cljs.core.Keyword(null,"unlinked-references","unlinked-references",1918870007),null], null), null),view_feature_type);
var config__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"container-id","container-id",1274665684),frontend.components.views.view_container_id(config));
var lazy_item_render = (function (row_uuid){
return frontend.components.views.lazy_item(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_uuid], null),(0),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(option,new cljs.core.Keyword(null,"list-view?","list-view?",499477951),true),(function (block){
if(frontend.components.views.first_window_title_preview_QMARK_(block)){
return frontend.components.views.first_window_list_block(block);
} else {
var config_SINGLEQUOTE_ = (function (){var G__47022 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config__$1,new cljs.core.Keyword(null,"list-view?","list-view?",499477951),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"block-level","block-level",390971879),(1)], 0));
var G__47022__$1 = ((references_view_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47022,new cljs.core.Keyword(null,"ref?","ref?",1932693720),true):G__47022);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"linked-references","linked-references",-2117592379),view_feature_type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__47022__$1,new cljs.core.Keyword(null,"ref-matched-children-ids","ref-matched-children-ids",1569574404),ref_matched_children_ids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reference-view-parent-uuid","reference-view-parent-uuid",-1073705201),new cljs.core.Keyword(null,"view-parent-uuid","view-parent-uuid",1853863877).cljs$core$IFn$_invoke$arity$1(option)], 0));
} else {
return G__47022__$1;
}
})();
return frontend.components.views.block_container(config_SINGLEQUOTE_,block);
}
}));
});
var notify_visible_range_BANG_ = (function (rendered){
var temp__5825__auto__ = frontend.components.views.prefetch_visible_range(rendered);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__47023 = temp__5825__auto__;
var visible_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47023,(0),null);
var visible_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47023,(1),null);
var temp__5825__auto____$1 = frontend.components.views.next_scrolled_row_offset.cljs$core$IFn$_invoke$arity$6(new cljs.core.Keyword(null,"row-offset","row-offset",-1310990952).cljs$core$IFn$_invoke$arity$1(option),cljs.core.count(new cljs.core.Keyword(null,"offset-rows","offset-rows",2126795718).cljs$core$IFn$_invoke$arity$1(option)),visible_start,visible_end,(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"initial-row-count","initial-row-count",680426329).cljs$core$IFn$_invoke$arity$1(option);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.count(rows);
}
})(),cljs.core.seq(new cljs.core.Keyword(null,"offset-rows","offset-rows",2126795718).cljs$core$IFn$_invoke$arity$1(option)));
if(cljs.core.truth_(temp__5825__auto____$1)){
var next_offset = temp__5825__auto____$1;
if(cljs.core.truth_(on_viewport_filled_BANG_)){
return (on_viewport_filled_BANG_.cljs$core$IFn$_invoke$arity$1 ? on_viewport_filled_BANG_.cljs$core$IFn$_invoke$arity$1(next_offset) : on_viewport_filled_BANG_.call(null,next_offset));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
var list_cp = (function (rows__$1){
if(cljs.core.seq(rows__$1)){
var total_count = frontend.components.views.windowed_view_total_count(rows__$1,option);
return frontend.components.views.virtualized_list(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"skipAnimationFrameInResizeObserver","skipAnimationFrameInResizeObserver",1677982016),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"increase-viewport-by","increase-viewport-by",1517073864),new cljs.core.Keyword(null,"item-content","item-content",1656730280),new cljs.core.Keyword(null,"compute-item-key","compute-item-key",-621146487),new cljs.core.Keyword(null,"custom-scroll-parent","custom-scroll-parent",1031485618),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"total-count","total-count",-1999441386),new cljs.core.Keyword(null,"items-rendered","items-rendered",1483099102)],[true,(function (p1__47017_SHARP_){
return cljs.core.reset_BANG_(_STAR_scroller_ref,p1__47017_SHARP_);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),(64),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(64)], null),(function (idx){
var temp__5823__auto__ = frontend.components.views.windowed_view_row(rows__$1,option,idx);
if(cljs.core.truth_(temp__5823__auto__)){
var row_uuid = temp__5823__auto__;
return lazy_item_render(row_uuid);
} else {
return frontend.components.views.lazy_item_placeholder(false,false,null,null,null);
}
}),(function (idx){
return frontend.components.views.windowed_view_row_key("list-row",rows__$1,option,idx);
}),frontend.components.views.get_scroll_parent(config__$1),"content",total_count,notify_visible_range_BANG_]),disable_virtualized_QMARK_);
} else {
return null;
}
});
var breadcrumb = frontend.state.get_component(new cljs.core.Keyword("block","breadcrumb","block/breadcrumb",1725167425));
var all_uuids_QMARK_ = cljs.core.every_QMARK_(cljs.core.uuid_QMARK_,rows);
if(all_uuids_QMARK_){
return list_cp(rows);
} else {
var iter__5628__auto__ = (function frontend$components$views$list_view_$_iter__47026(s__47027){
return (new cljs.core.LazySeq(null,(function (){
var s__47027__$1 = s__47027;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__47027__$1);
if(temp__5825__auto__){
var s__47027__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47027__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__47027__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__47029 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__47028 = (0);
while(true){
if((i__47028 < size__5627__auto__)){
var vec__47030 = cljs.core._nth(c__5626__auto__,i__47028);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47030,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47030,(1),null);
cljs.core.chunk_append(b__47029,((((cljs.core.vector_QMARK_(row)) && (cljs.core.uuid_QMARK_(cljs.core.first(row)))))?(function (){var vec__47033 = row;
var first_block_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47033,(0),null);
var blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47033,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"partition-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_block_id))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ml-6.text-sm.opacity-70.hover:opacity-100.mt-1","div.ml-6.text-sm.opacity-70.hover:opacity-100.mt-1",2029704327),(function (){var G__47036 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config__$1,new cljs.core.Keyword(null,"list-view?","list-view?",499477951),true);
var G__47037 = frontend.state.get_current_repo();
var G__47038 = first_block_id;
var G__47039 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-page?","show-page?",792494155),false], null);
return (breadcrumb.cljs$core$IFn$_invoke$arity$4 ? breadcrumb.cljs$core$IFn$_invoke$arity$4(G__47036,G__47037,G__47038,G__47039) : breadcrumb.call(null,G__47036,G__47037,G__47038,G__47039));
})()], null),list_cp(blocks)], null);
})():cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),lazy_item_render(row)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"partition-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx))], null))));

var G__47628 = (i__47028 + (1));
i__47028 = G__47628;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47029),frontend$components$views$list_view_$_iter__47026(cljs.core.chunk_rest(s__47027__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47029),null);
}
} else {
var vec__47040 = cljs.core.first(s__47027__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47040,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47040,(1),null);
return cljs.core.cons(((((cljs.core.vector_QMARK_(row)) && (cljs.core.uuid_QMARK_(cljs.core.first(row)))))?(function (){var vec__47043 = row;
var first_block_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47043,(0),null);
var blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47043,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"partition-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_block_id))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ml-6.text-sm.opacity-70.hover:opacity-100.mt-1","div.ml-6.text-sm.opacity-70.hover:opacity-100.mt-1",2029704327),(function (){var G__47046 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config__$1,new cljs.core.Keyword(null,"list-view?","list-view?",499477951),true);
var G__47047 = frontend.state.get_current_repo();
var G__47048 = first_block_id;
var G__47049 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-page?","show-page?",792494155),false], null);
return (breadcrumb.cljs$core$IFn$_invoke$arity$4 ? breadcrumb.cljs$core$IFn$_invoke$arity$4(G__47046,G__47047,G__47048,G__47049) : breadcrumb.call(null,G__47046,G__47047,G__47048,G__47049));
})()], null),list_cp(blocks)], null);
})():cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),lazy_item_render(row)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"partition-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx))], null))),frontend$components$views$list_view_$_iter__47026(cljs.core.rest(s__47027__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(medley.core.indexed.cljs$core$IFn$_invoke$arity$1(rows));
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$list_view__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47050 = cljs.core.first(args__31746__auto__);
var G__47051 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47050,G__47051) : io.factorhouse.hsx.core.obj_get.call(null,G__47050,G__47051));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"list-view","list-view",1281553626,null),args__31746__auto__),frontend$components$views$list_view,args__31746__auto__,null);
}
};
var frontend$components$views$list_view = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47629__i = 0, G__47629__a = new Array(arguments.length -  0);
while (G__47629__i < G__47629__a.length) {G__47629__a[G__47629__i] = arguments[G__47629__i + 0]; ++G__47629__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47629__a,0,null);
} 
return frontend$components$views$list_view__delegate.call(this,args__31746__auto__);};
frontend$components$views$list_view.cljs$lang$maxFixedArity = 0;
frontend$components$views$list_view.cljs$lang$applyTo = (function (arglist__47630){
var args__31746__auto__ = cljs.core.seq(arglist__47630);
return frontend$components$views$list_view__delegate(args__31746__auto__);
});
frontend$components$views$list_view.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$list_view__delegate;
return frontend$components$views$list_view;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47052 = comp__31745__auto__;
var G__47053 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47052,G__47053) : io.factorhouse.hsx.core.react_memo.call(null,G__47052,G__47053));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"list-view");

return comp__31745__auto__;
})();
frontend.components.views.gallery_property_value_opts = (function frontend$components$views$gallery_property_value_opts(config){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view?","view?",655244230),true,new cljs.core.Keyword(null,"gallery-view?","gallery-view?",1298131224),true,new cljs.core.Keyword(null,"view-parent","view-parent",675596601),new cljs.core.Keyword(null,"view-parent","view-parent",675596601).cljs$core$IFn$_invoke$arity$1(config)], null);
});
frontend.components.views.gallery_property_value = (function (){var render_fn__31744__auto__ = (function frontend$components$views$gallery_property_value(block,property_ident,property,config){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","title","block/title",710445684),property_ident)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-gallery-card-title","div.ls-gallery-card-title",-294671930),(function (){var G__47054 = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block);
var G__47054__$1 = (((G__47054 == null))?null:clojure.string.trim(G__47054));
var G__47054__$2 = (((G__47054__$1 == null))?null:clojure.string.split_lines(G__47054__$1));
if((G__47054__$2 == null)){
return null;
} else {
return cljs.core.first(G__47054__$2);
}
})()], null);
} else {
if(cljs.core.truth_(property)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-gallery-card-property","div.ls-gallery-card-property",-1750660829),frontend.components.property.value.property_value(block,property,frontend.components.views.gallery_property_value_opts(config))], null);
} else {
return null;
}
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$gallery_property_value__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47055 = cljs.core.first(args__31746__auto__);
var G__47056 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47055,G__47056) : io.factorhouse.hsx.core.obj_get.call(null,G__47055,G__47056));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"gallery-property-value","gallery-property-value",1803691246,null),args__31746__auto__),frontend$components$views$gallery_property_value,args__31746__auto__,null);
}
};
var frontend$components$views$gallery_property_value = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47631__i = 0, G__47631__a = new Array(arguments.length -  0);
while (G__47631__i < G__47631__a.length) {G__47631__a[G__47631__i] = arguments[G__47631__i + 0]; ++G__47631__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47631__a,0,null);
} 
return frontend$components$views$gallery_property_value__delegate.call(this,args__31746__auto__);};
frontend$components$views$gallery_property_value.cljs$lang$maxFixedArity = 0;
frontend$components$views$gallery_property_value.cljs$lang$applyTo = (function (arglist__47632){
var args__31746__auto__ = cljs.core.seq(arglist__47632);
return frontend$components$views$gallery_property_value__delegate(args__31746__auto__);
});
frontend$components$views$gallery_property_value.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$gallery_property_value__delegate;
return frontend$components$views$gallery_property_value;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47057 = comp__31745__auto__;
var G__47058 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47057,G__47058) : io.factorhouse.hsx.core.react_memo.call(null,G__47057,G__47058));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"gallery-property-value");

return comp__31745__auto__;
})();
frontend.components.views.gallery_card_asset_block = (function frontend$components$views$gallery_card_asset_block(block,asset_property_ident){
var asset_value = (cljs.core.truth_((function (){var and__5140__auto__ = block;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = asset_property_ident;
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),asset_property_ident);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,asset_property_ident):null);
var __GT_entity = (function (value){
if(cljs.core.map_QMARK_(value)){
return value;
} else {
return value;

}
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),asset_property_ident)){
return block;
} else {
if(cljs.core.set_QMARK_(asset_value)){
return cljs.core.some(__GT_entity,asset_value);
} else {
if(cljs.core.sequential_QMARK_(asset_value)){
return cljs.core.some(__GT_entity,asset_value);
} else {
return __GT_entity(asset_value);

}
}
}
});
frontend.components.views.gallery_cover_url_string = (function frontend$components$views$gallery_cover_url_string(value){
var s = ((typeof value === 'string')?value:((cljs.core.map_QMARK_(value))?logseq.db.frontend.property.property_value_content(value):null
));
if(typeof s === 'string'){
var url = clojure.string.trim(s);
if((((!(clojure.string.blank_QMARK_(url)))) && (frontend.components.block.image.remote_image_url_QMARK_(url)))){
return url;
} else {
return null;
}
} else {
return null;
}
});
/**
 * Return a remote http(s) URL from a URL-type cover property, or nil.
 */
frontend.components.views.gallery_card_cover_url = (function frontend$components$views$gallery_card_cover_url(block,property_ident){
var value = (cljs.core.truth_((function (){var and__5140__auto__ = block;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = property_ident;
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),property_ident);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,property_ident):null);
if(cljs.core.set_QMARK_(value)){
return cljs.core.some(frontend.components.views.gallery_cover_url_string,value);
} else {
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.some(frontend.components.views.gallery_cover_url_string,value);
} else {
return frontend.components.views.gallery_cover_url_string(value);

}
}
});
frontend.components.views.gallery_cover_url_property_QMARK_ = (function frontend$components$views$gallery_cover_url_property_QMARK_(columns,property_ident){
var and__5140__auto__ = property_ident;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),property_ident)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(frontend.components.views.gallery_column_property(cljs.core.some((function (column){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.components.views.gallery_column_ident(column),property_ident)){
return column;
} else {
return null;
}
}),columns))))));
} else {
return and__5140__auto__;
}
});
frontend.components.views.gallery_card_item = (function (){var render_fn__31744__auto__ = (function frontend$components$views$gallery_card_item(table,view_entity,block,config,p__47063){
var map__47064 = p__47063;
var map__47064__$1 = cljs.core.__destructure_map(map__47064);
var asset_property_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47064__$1,new cljs.core.Keyword(null,"asset-property-ident","asset-property-ident",-2087531382));
var display_property_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47064__$1,new cljs.core.Keyword(null,"display-property-idents","display-property-idents",-444057152));
var columns = new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(table);
var url_property_QMARK_ = frontend.components.views.gallery_cover_url_property_QMARK_(columns,asset_property_ident);
var url_cover = (cljs.core.truth_(url_property_QMARK_)?frontend.components.views.gallery_card_cover_url(block,asset_property_ident):null);
var asset_block = (cljs.core.truth_(url_property_QMARK_)?null:frontend.components.views.gallery_card_asset_block(block,asset_property_ident));
var asset_cp = frontend.state.get_component(new cljs.core.Keyword("block","asset-cp","block/asset-cp",1438941908));
var vec__47067 = logseq.shui.hooks.use_state(false);
var url_failed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47067,(0),null);
var set_url_failed_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47067,(1),null);
var _ = logseq.shui.hooks.use_effect_BANG_((function (){
(set_url_failed_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_url_failed_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_url_failed_BANG_.call(null,false));

return (function (){
return null;
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [url_cover], null));
var render_url_QMARK_ = (function (){var and__5140__auto__ = url_cover;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(url_failed_QMARK_);
} else {
return and__5140__auto__;
}
})();
var render_asset_QMARK_ = (function (){var and__5140__auto__ = asset_block;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.fn_QMARK_(asset_cp);
} else {
return and__5140__auto__;
}
})();
var render_cover_QMARK_ = (function (){var or__5142__auto__ = render_url_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return render_asset_QMARK_;
}
})();
var selected_QMARK_ = frontend.components.views.use_table_row_selected_QMARK_(table,block);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-card-item.content","div.ls-card-item.content",1602513830),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"view-card-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(view_entity))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))),new cljs.core.Keyword(null,"data-state","data-state",1518559596),((selected_QMARK_)?"selected":null),new cljs.core.Keyword(null,"class","class",-2030961996),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(render_cover_QMARK_)?"has-gallery-asset":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" is-selected":null))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(cljs.core.truth_((function (){var G__47071 = e.target;
if((G__47071 == null)){
return null;
} else {
return G__47071.closest((""+"button, a, input, textarea, select, [role='menuitem'], "+".ls-gallery-card-media, .ls-gallery-card-property"));
}
})())){
return null;
} else {
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-gallery-card-content","div.ls-gallery-card-content",2009431999),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-gallery-card-media","div.ls-gallery-card-media",-1717765384),frontend.components.views.gallery_card_checkbox(table,block),(cljs.core.truth_(render_url_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.asset-container","div.asset-container",1221095823),frontend.components.block.image.image_or_fallback(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),url_cover,new cljs.core.Keyword(null,"gallery-view?","gallery-view?",1298131224),true,new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (___$1){
return (set_url_failed_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_url_failed_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_url_failed_BANG_.call(null,true));
})], null))], null):null),(cljs.core.truth_(render_asset_QMARK_)?(function (){var G__47072 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"disable-resize?","disable-resize?",-1998248527),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gallery-view?","gallery-view?",1298131224),true], 0));
var G__47073 = asset_block;
return (asset_cp.cljs$core$IFn$_invoke$arity$2 ? asset_cp.cljs$core$IFn$_invoke$arity$2(G__47072,G__47073) : asset_cp.call(null,G__47072,G__47073));
})():null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-gallery-card-meta","div.ls-gallery-card-meta",-202635726),(function (){var iter__5628__auto__ = (function frontend$components$views$gallery_card_item_$_iter__47074(s__47075){
return (new cljs.core.LazySeq(null,(function (){
var s__47075__$1 = s__47075;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__47075__$1);
if(temp__5825__auto__){
var s__47075__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47075__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__47075__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__47077 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__47076 = (0);
while(true){
if((i__47076 < size__5627__auto__)){
var property_ident = cljs.core._nth(c__5626__auto__,i__47076);
var property = cljs.core.some(((function (i__47076,s__47075__$1,property_ident,c__5626__auto__,size__5627__auto__,b__47077,s__47075__$2,temp__5825__auto__,columns,url_property_QMARK_,url_cover,asset_block,asset_cp,vec__47067,url_failed_QMARK_,set_url_failed_BANG_,_,render_url_QMARK_,render_asset_QMARK_,render_cover_QMARK_,selected_QMARK_,map__47064,map__47064__$1,asset_property_ident,display_property_idents){
return (function (column){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column),property_ident)){
return frontend.components.views.column_property(column);
} else {
return null;
}
});})(i__47076,s__47075__$1,property_ident,c__5626__auto__,size__5627__auto__,b__47077,s__47075__$2,temp__5825__auto__,columns,url_property_QMARK_,url_cover,asset_block,asset_cp,vec__47067,url_failed_QMARK_,set_url_failed_BANG_,_,render_url_QMARK_,render_asset_QMARK_,render_cover_QMARK_,selected_QMARK_,map__47064,map__47064__$1,asset_property_ident,display_property_idents))
,columns);
var property_value = frontend.components.views.gallery_property_value(block,property_ident,property,config);
if(cljs.core.truth_(property_value)){
cljs.core.chunk_append(b__47077,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),property_value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"gallery-property-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(property_ident))], null)));

var G__47633 = (i__47076 + (1));
i__47076 = G__47633;
continue;
} else {
var G__47634 = (i__47076 + (1));
i__47076 = G__47634;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47077),frontend$components$views$gallery_card_item_$_iter__47074(cljs.core.chunk_rest(s__47075__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47077),null);
}
} else {
var property_ident = cljs.core.first(s__47075__$2);
var property = cljs.core.some(((function (s__47075__$1,property_ident,s__47075__$2,temp__5825__auto__,columns,url_property_QMARK_,url_cover,asset_block,asset_cp,vec__47067,url_failed_QMARK_,set_url_failed_BANG_,_,render_url_QMARK_,render_asset_QMARK_,render_cover_QMARK_,selected_QMARK_,map__47064,map__47064__$1,asset_property_ident,display_property_idents){
return (function (column){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column),property_ident)){
return frontend.components.views.column_property(column);
} else {
return null;
}
});})(s__47075__$1,property_ident,s__47075__$2,temp__5825__auto__,columns,url_property_QMARK_,url_cover,asset_block,asset_cp,vec__47067,url_failed_QMARK_,set_url_failed_BANG_,_,render_url_QMARK_,render_asset_QMARK_,render_cover_QMARK_,selected_QMARK_,map__47064,map__47064__$1,asset_property_ident,display_property_idents))
,columns);
var property_value = frontend.components.views.gallery_property_value(block,property_ident,property,config);
if(cljs.core.truth_(property_value)){
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),property_value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"gallery-property-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(property_ident))], null)),frontend$components$views$gallery_card_item_$_iter__47074(cljs.core.rest(s__47075__$2)));
} else {
var G__47635 = cljs.core.rest(s__47075__$2);
s__47075__$1 = G__47635;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(display_property_idents);
})()], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$gallery_card_item__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47080 = cljs.core.first(args__31746__auto__);
var G__47081 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47080,G__47081) : io.factorhouse.hsx.core.obj_get.call(null,G__47080,G__47081));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"gallery-card-item","gallery-card-item",2039512645,null),args__31746__auto__),frontend$components$views$gallery_card_item,args__31746__auto__,null);
}
};
var frontend$components$views$gallery_card_item = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47636__i = 0, G__47636__a = new Array(arguments.length -  0);
while (G__47636__i < G__47636__a.length) {G__47636__a[G__47636__i] = arguments[G__47636__i + 0]; ++G__47636__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47636__a,0,null);
} 
return frontend$components$views$gallery_card_item__delegate.call(this,args__31746__auto__);};
frontend$components$views$gallery_card_item.cljs$lang$maxFixedArity = 0;
frontend$components$views$gallery_card_item.cljs$lang$applyTo = (function (arglist__47637){
var args__31746__auto__ = cljs.core.seq(arglist__47637);
return frontend$components$views$gallery_card_item__delegate(args__31746__auto__);
});
frontend$components$views$gallery_card_item.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$gallery_card_item__delegate;
return frontend$components$views$gallery_card_item;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47082 = comp__31745__auto__;
var G__47083 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47082,G__47083) : io.factorhouse.hsx.core.react_memo.call(null,G__47082,G__47083));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"gallery-card-item");

return comp__31745__auto__;
})();
frontend.components.views.gallery_lazy_item_opts = (function frontend$components$views$gallery_lazy_item_opts(option){
return cljs.core.select_keys(option,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552)], null));
});
frontend.components.views.grouped_list_partition_row_QMARK_ = (function frontend$components$views$grouped_list_partition_row_QMARK_(row){
return ((cljs.core.vector_QMARK_(row)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(row))) && (((cljs.core.uuid_QMARK_(cljs.core.first(row))) && (cljs.core.sequential_QMARK_(cljs.core.second(row))))))));
});
frontend.components.views.row_uuid_seq = (function frontend$components$views$row_uuid_seq(row){
if(cljs.core.uuid_QMARK_(row)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [row], null);
} else {
if(frontend.components.views.grouped_list_partition_row_QMARK_(row)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.uuid_QMARK_,cljs.core.second(row));
} else {
return cljs.core.PersistentVector.EMPTY;

}
}
});
frontend.components.views.grouped_list_partition_row_ids = (function frontend$components$views$grouped_list_partition_row_ids(grouped_list_partition){
var rows = ((cljs.core.map_QMARK_(grouped_list_partition))?new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(grouped_list_partition):((frontend.components.views.grouped_list_partition_row_QMARK_(grouped_list_partition))?cljs.core.second(grouped_list_partition):cljs.core.PersistentVector.EMPTY
));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(frontend.components.views.row_uuid_seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rows], 0));
});
frontend.components.views.view_row_ids = (function frontend$components$views$view_row_ids(p__47085){
var map__47086 = p__47085;
var map__47086__$1 = cljs.core.__destructure_map(map__47086);
var view_data = map__47086__$1;
var view_partition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47086__$1,new cljs.core.Keyword(null,"partition","partition",1174740751));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47086__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var groups = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47086__$1,new cljs.core.Keyword(null,"groups","groups",-136896102));
var G__47087 = view_partition;
var G__47087__$1 = (((G__47087 instanceof cljs.core.Keyword))?G__47087.fqn:null);
switch (G__47087__$1) {
case "flat":
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(frontend.components.views.row_uuid_seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rows], 0));

break;
case "grouped":
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__47088){
var map__47089 = p__47088;
var map__47089__$1 = cljs.core.__destructure_map(map__47089);
var rows__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47089__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(frontend.components.views.row_uuid_seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rows__$1], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([groups], 0));

break;
case "grouped-list":
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__47092){
var map__47093 = p__47092;
var map__47093__$1 = cljs.core.__destructure_map(map__47093);
var partitions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47093__$1,new cljs.core.Keyword(null,"partitions","partitions",602979514));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(frontend.components.views.grouped_list_partition_row_ids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([partitions], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([groups], 0));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid view data partition",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view-data","view-data",461796245),view_data], null));

}
});
frontend.components.views.grouped_gallery_row_ids = (function frontend$components$views$grouped_gallery_row_ids(view_data){
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(frontend.components.views.view_row_ids(view_data)));
});
frontend.components.views.group_readable_property_value = (function frontend$components$views$group_readable_property_value(value){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.map_QMARK_(value);
if(and__5140__auto__){
var or__5142__auto__ = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(value);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("logseq.property","value","logseq.property/value",1396524865).cljs$core$IFn$_invoke$arity$1(value);
}
} else {
return and__5140__auto__;
}
})())){
return logseq.db.frontend.property.property_value_content(value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(value),new cljs.core.Keyword("logseq.property","empty-placeholder","logseq.property/empty-placeholder",-1595021837))){
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","empty","ui/empty",767898386)], 0));
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

}
}
});
frontend.components.views.gallery_action_bar = (function (){var render_fn__31744__auto__ = (function frontend$components$views$gallery_action_bar(table,_option,view_parent,view_feature_type,selected_rows){
if(cljs.core.seq(selected_rows)){
var checkbox_id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"view-entity","view-entity",-1084117808).cljs$core$IFn$_invoke$arity$1(table)))+"-gallery-select-all");
var row_selection = frontend.components.views.use_table_row_selection(table);
var map__47101 = frontend.components.views.table_selection_summary(table,row_selection);
var map__47101__$1 = cljs.core.__destructure_map(map__47101);
var selected_all_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47101__$1,new cljs.core.Keyword(null,"selected-all?","selected-all?",1723040507));
var selected_some_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47101__$1,new cljs.core.Keyword(null,"selected-some?","selected-some?",-1877870503));
var checked_QMARK_ = (function (){var or__5142__auto__ = selected_all_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto__ = selected_some_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return "indeterminate";
} else {
return and__5140__auto__;
}
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-gallery-action-bar-slot","div.ls-gallery-action-bar-slot",1469120294),(function (){var G__47102 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ls-gallery-action-bar"], null);
var G__47103 = (function (){var G__47106 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ls-gallery-action-select-all"], null);
var G__47107 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.flex.h-full.w-full.cursor-pointer.items-center.justify-center","label.flex.h-full.w-full.cursor-pointer.items-center.justify-center",810782069),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"html-for","html-for",594503920),checkbox_id,new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.table","select-all","view.table/select-all",-8862523)], 0))], null),(function (){var G__47108 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),checkbox_id,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_,new cljs.core.Keyword(null,"on-checked-change","on-checked-change",-482086819),(function (value){
return frontend.components.views.table_toggle_selected_all_BANG_(table,value);
}),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.table","select-all","view.table/select-all",-8862523)], 0)),new cljs.core.Keyword(null,"class","class",-2030961996),"flex"], null);
return (logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1(G__47108) : logseq.shui.ui.checkbox.call(null,G__47108));
})()], null);
return (logseq.shui.ui.toolbar_group.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.toolbar_group.cljs$core$IFn$_invoke$arity$2(G__47106,G__47107) : logseq.shui.ui.toolbar_group.call(null,G__47106,G__47107));
})();
var G__47104 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.selection-count.px-2","div.selection-count.px-2",439478296),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.table","selected-count","view.table/selected-count",-1407966057),cljs.core.count(selected_rows)], 0))], null);
var G__47105 = frontend.components.selection.action_group(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"on-cut","on-cut",-1019124687),(function (){
return frontend.components.views.on_delete_rows(view_parent,view_feature_type,table,selected_rows);
}),new cljs.core.Keyword(null,"selected-blocks","selected-blocks",-96882948),selected_rows,new cljs.core.Keyword(null,"hide-dots?","hide-dots?",-901521952),true,new cljs.core.Keyword(null,"button-border?","button-border?",-2028710343),true,new cljs.core.Keyword(null,"outliner?","outliner?",854604974),false,new cljs.core.Keyword(null,"view-parent","view-parent",675596601),new cljs.core.Keyword("logseq.property","view-for","logseq.property/view-for",-36274319).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"view-entity","view-entity",-1084117808).cljs$core$IFn$_invoke$arity$1(table))], null));
return (logseq.shui.ui.toolbar.cljs$core$IFn$_invoke$arity$4 ? logseq.shui.ui.toolbar.cljs$core$IFn$_invoke$arity$4(G__47102,G__47103,G__47104,G__47105) : logseq.shui.ui.toolbar.call(null,G__47102,G__47103,G__47104,G__47105));
})()], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$gallery_action_bar__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47109 = cljs.core.first(args__31746__auto__);
var G__47110 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47109,G__47110) : io.factorhouse.hsx.core.obj_get.call(null,G__47109,G__47110));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"gallery-action-bar","gallery-action-bar",282326354,null),args__31746__auto__),frontend$components$views$gallery_action_bar,args__31746__auto__,null);
}
};
var frontend$components$views$gallery_action_bar = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47639__i = 0, G__47639__a = new Array(arguments.length -  0);
while (G__47639__i < G__47639__a.length) {G__47639__a[G__47639__i] = arguments[G__47639__i + 0]; ++G__47639__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47639__a,0,null);
} 
return frontend$components$views$gallery_action_bar__delegate.call(this,args__31746__auto__);};
frontend$components$views$gallery_action_bar.cljs$lang$maxFixedArity = 0;
frontend$components$views$gallery_action_bar.cljs$lang$applyTo = (function (arglist__47640){
var args__31746__auto__ = cljs.core.seq(arglist__47640);
return frontend$components$views$gallery_action_bar__delegate(args__31746__auto__);
});
frontend$components$views$gallery_action_bar.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$gallery_action_bar__delegate;
return frontend$components$views$gallery_action_bar;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47111 = comp__31745__auto__;
var G__47112 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47111,G__47112) : io.factorhouse.hsx.core.react_memo.call(null,G__47111,G__47112));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"gallery-action-bar");

return comp__31745__auto__;
})();
frontend.components.views.gallery_view = (function (){var render_fn__31744__auto__ = (function frontend$components$views$gallery_view(p__47114,table,view_entity,blocks,_row_selection,_STAR_scroller_ref){
var map__47115 = p__47114;
var map__47115__$1 = cljs.core.__destructure_map(map__47115);
var option = map__47115__$1;
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47115__$1,new cljs.core.Keyword(null,"config","config",994861415));
var view_parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47115__$1,new cljs.core.Keyword(null,"view-parent","view-parent",675596601));
var view_feature_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47115__$1,new cljs.core.Keyword(null,"view-feature-type","view-feature-type",-945869610));
var on_viewport_filled_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47115__$1,new cljs.core.Keyword(null,"on-viewport-filled!","on-viewport-filled!",325008543));
var config_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"container-id","container-id",1274665684),frontend.components.views.view_container_id(config));
var columns = new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(table);
var dimensions = frontend.components.views.gallery_card_dimensions(view_entity);
var asset_property_ident = frontend.components.views.gallery_asset_property_ident(view_entity,columns);
var display_property_idents = frontend.components.views.gallery_display_property_idents(view_entity,columns,asset_property_ident);
var row_selection = frontend.components.views.use_table_row_selection(table);
var selected_rows = frontend.components.views.table_get_selection_rows(row_selection,new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(table));
var vec__47118 = frontend.components.views.use_view_row_prefetch.cljs$core$IFn$_invoke$arity$1(blocks);
var _initial_rows_ready_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47118,(0),null);
var _hydrate_row_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47118,(1),null);
var prefetch_rows_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47118,(2),null);
var total_count = frontend.components.views.windowed_view_total_count(blocks,option);
var notify_visible_range_BANG_ = (function (rendered){
(prefetch_rows_BANG_.cljs$core$IFn$_invoke$arity$1 ? prefetch_rows_BANG_.cljs$core$IFn$_invoke$arity$1(rendered) : prefetch_rows_BANG_.call(null,rendered));

var temp__5825__auto__ = frontend.components.views.prefetch_visible_range(rendered);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__47121 = temp__5825__auto__;
var visible_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47121,(0),null);
var visible_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47121,(1),null);
var temp__5825__auto____$1 = frontend.components.views.next_scrolled_row_offset.cljs$core$IFn$_invoke$arity$6(new cljs.core.Keyword(null,"row-offset","row-offset",-1310990952).cljs$core$IFn$_invoke$arity$1(option),cljs.core.count(new cljs.core.Keyword(null,"offset-rows","offset-rows",2126795718).cljs$core$IFn$_invoke$arity$1(option)),visible_start,visible_end,(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"initial-row-count","initial-row-count",680426329).cljs$core$IFn$_invoke$arity$1(option);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.count(blocks);
}
})(),cljs.core.seq(new cljs.core.Keyword(null,"offset-rows","offset-rows",2126795718).cljs$core$IFn$_invoke$arity$1(option)));
if(cljs.core.truth_(temp__5825__auto____$1)){
var next_offset = temp__5825__auto____$1;
if(cljs.core.truth_(on_viewport_filled_BANG_)){
return (on_viewport_filled_BANG_.cljs$core$IFn$_invoke$arity$1 ? on_viewport_filled_BANG_.cljs$core$IFn$_invoke$arity$1(next_offset) : on_viewport_filled_BANG_.call(null,next_offset));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
var render_card = (function (idx){
var temp__5823__auto__ = frontend.components.views.windowed_view_row(blocks,option,idx);
if(cljs.core.truth_(temp__5823__auto__)){
var row_uuid = temp__5823__auto__;
return frontend.components.views.lazy_item(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_uuid], null),(0),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.components.views.gallery_lazy_item_opts(option),new cljs.core.Keyword(null,"gallery-view?","gallery-view?",1298131224),true),(function (block){
return frontend.components.views.gallery_card_item(table,view_entity,block,config_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"asset-property-ident","asset-property-ident",-2087531382),asset_property_ident,new cljs.core.Keyword(null,"display-property-idents","display-property-idents",-444057152),display_property_idents], null));
}));
} else {
return frontend.components.views.lazy_item_placeholder(false,true,null,null,null);
}
});
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-cards","div.ls-cards",-1470633050),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, ["--ls-gallery-card-width",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(dimensions))+"px"),"--ls-gallery-card-height",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(dimensions))+"px")], null)], null),((cljs.core.seq(blocks))?(cljs.core.truth_(new cljs.core.Keyword(null,"disable-virtualized?","disable-virtualized?",-1546442714).cljs$core$IFn$_invoke$arity$1(option))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.virtuoso-grid-list","div.virtuoso-grid-list",755147629),(function (){var iter__5628__auto__ = (function frontend$components$views$gallery_view_$_iter__47125(s__47126){
return (new cljs.core.LazySeq(null,(function (){
var s__47126__$1 = s__47126;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__47126__$1);
if(temp__5825__auto__){
var s__47126__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47126__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__47126__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__47128 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__47127 = (0);
while(true){
if((i__47127 < size__5627__auto__)){
var idx = cljs.core._nth(c__5626__auto__,i__47127);
cljs.core.chunk_append(b__47128,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.virtuoso-grid-item","div.virtuoso-grid-item",857267284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),frontend.components.views.windowed_view_row_key((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(view_entity))+"-card"),blocks,option,idx)], null),render_card(idx)], null));

var G__47641 = (i__47127 + (1));
i__47127 = G__47641;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47128),frontend$components$views$gallery_view_$_iter__47125(cljs.core.chunk_rest(s__47126__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47128),null);
}
} else {
var idx = cljs.core.first(s__47126__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.virtuoso-grid-item","div.virtuoso-grid-item",857267284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),frontend.components.views.windowed_view_row_key((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(view_entity))+"-card"),blocks,option,idx)], null),render_card(idx)], null),frontend$components$views$gallery_view_$_iter__47125(cljs.core.rest(s__47126__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(total_count));
})()], null):frontend.ui.virtualized_grid(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__47113_SHARP_){
return cljs.core.reset_BANG_(_STAR_scroller_ref,p1__47113_SHARP_);
}),new cljs.core.Keyword(null,"total-count","total-count",-1999441386),total_count,new cljs.core.Keyword(null,"increase-viewport-by","increase-viewport-by",1517073864),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),((2) * new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(dimensions)),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),((2) * new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(dimensions))], null),new cljs.core.Keyword(null,"custom-scroll-parent","custom-scroll-parent",1031485618),frontend.components.views.get_scroll_parent(config),new cljs.core.Keyword(null,"skipAnimationFrameInResizeObserver","skipAnimationFrameInResizeObserver",1677982016),true,new cljs.core.Keyword(null,"compute-item-key","compute-item-key",-621146487),(function (idx){
return frontend.components.views.windowed_view_row_key((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(view_entity))+"-card"),blocks,option,idx);
}),new cljs.core.Keyword(null,"items-rendered","items-rendered",1483099102),notify_visible_range_BANG_,new cljs.core.Keyword(null,"item-content","item-content",1656730280),render_card], null))):null),(cljs.core.truth_(new cljs.core.Keyword(null,"hide-action-bar?","hide-action-bar?",1286743064).cljs$core$IFn$_invoke$arity$1(option))?null:frontend.components.views.gallery_action_bar(table,option,view_parent,view_feature_type,selected_rows))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$gallery_view__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47129 = cljs.core.first(args__31746__auto__);
var G__47130 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47129,G__47130) : io.factorhouse.hsx.core.obj_get.call(null,G__47129,G__47130));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"gallery-view","gallery-view",-180137609,null),args__31746__auto__),frontend$components$views$gallery_view,args__31746__auto__,null);
}
};
var frontend$components$views$gallery_view = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47642__i = 0, G__47642__a = new Array(arguments.length -  0);
while (G__47642__i < G__47642__a.length) {G__47642__a[G__47642__i] = arguments[G__47642__i + 0]; ++G__47642__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47642__a,0,null);
} 
return frontend$components$views$gallery_view__delegate.call(this,args__31746__auto__);};
frontend$components$views$gallery_view.cljs$lang$maxFixedArity = 0;
frontend$components$views$gallery_view.cljs$lang$applyTo = (function (arglist__47643){
var args__31746__auto__ = cljs.core.seq(arglist__47643);
return frontend$components$views$gallery_view__delegate(args__31746__auto__);
});
frontend$components$views$gallery_view.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$gallery_view__delegate;
return frontend$components$views$gallery_view;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47131 = comp__31745__auto__;
var G__47132 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47131,G__47132) : io.factorhouse.hsx.core.react_memo.call(null,G__47131,G__47132));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"gallery-view");

return comp__31745__auto__;
})();
frontend.components.views.gallery_group_content = (function frontend$components$views$gallery_group_content(view_entity,option,row_selection,_STAR_scroller_ref,table_map,group_by_page_QMARK_,group_by_property,value,group){
var group_rows = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"grouped-list","grouped-list",-125657687),new cljs.core.Keyword(null,"partition","partition",1174740751).cljs$core$IFn$_invoke$arity$1(option)))?cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(frontend.components.views.grouped_list_partition_row_ids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))):group);
var table_SINGLEQUOTE_ = (function (){var G__47137 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(table_map,new cljs.core.Keyword(null,"data","data",-232669377),group_rows);
return (logseq.shui.ui.table_option.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.table_option.cljs$core$IFn$_invoke$arity$1(G__47137) : logseq.shui.ui.table_option.call(null,G__47137));
})();
var title = (cljs.core.truth_((function (){var and__5140__auto__ = group_by_page_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (value == null);
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-muted-foreground.text-sm","div.text-muted-foreground.text-sm",189157817),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.table","pages","view.table/pages",619322380)], 0))], null):(((!((value == null))))?frontend.components.views.group_readable_property_value(value):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.table","no-group-value","view.table/no-group-value",-1213730444),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(group_by_property)], 0))
));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-gallery-group","div.ls-gallery-group",596658666),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.my-2","div.my-2",-846842446),title], null),frontend.components.views.gallery_view(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(option,new cljs.core.Keyword(null,"disable-virtualized?","disable-virtualized?",-1546442714),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hide-action-bar?","hide-action-bar?",1286743064),true], 0)),table_SINGLEQUOTE_,view_entity,group_rows,row_selection,_STAR_scroller_ref)], null);
});
frontend.components.views.entity_gallery_group = (function (){var render_fn__31744__auto__ = (function frontend$components$views$entity_gallery_group(view_entity,option,row_selection,_STAR_scroller_ref,table_map,group_by_page_QMARK_,group_by_property,entity_uuid,group){
var temp__5825__auto__ = frontend.db.hooks.use_block(entity_uuid);
if(cljs.core.truth_(temp__5825__auto__)){
var entity = temp__5825__auto__;
return frontend.components.views.gallery_group_content(view_entity,option,row_selection,_STAR_scroller_ref,table_map,group_by_page_QMARK_,group_by_property,entity,group);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$entity_gallery_group__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47140 = cljs.core.first(args__31746__auto__);
var G__47141 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47140,G__47141) : io.factorhouse.hsx.core.obj_get.call(null,G__47140,G__47141));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"entity-gallery-group","entity-gallery-group",192054606,null),args__31746__auto__),frontend$components$views$entity_gallery_group,args__31746__auto__,null);
}
};
var frontend$components$views$entity_gallery_group = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47644__i = 0, G__47644__a = new Array(arguments.length -  0);
while (G__47644__i < G__47644__a.length) {G__47644__a[G__47644__i] = arguments[G__47644__i + 0]; ++G__47644__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47644__a,0,null);
} 
return frontend$components$views$entity_gallery_group__delegate.call(this,args__31746__auto__);};
frontend$components$views$entity_gallery_group.cljs$lang$maxFixedArity = 0;
frontend$components$views$entity_gallery_group.cljs$lang$applyTo = (function (arglist__47645){
var args__31746__auto__ = cljs.core.seq(arglist__47645);
return frontend$components$views$entity_gallery_group__delegate(args__31746__auto__);
});
frontend$components$views$entity_gallery_group.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$entity_gallery_group__delegate;
return frontend$components$views$entity_gallery_group;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47142 = comp__31745__auto__;
var G__47143 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47142,G__47143) : io.factorhouse.hsx.core.react_memo.call(null,G__47142,G__47143));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"entity-gallery-group");

return comp__31745__auto__;
})();
frontend.components.views.gallery_group = (function (){var render_fn__31744__auto__ = (function frontend$components$views$gallery_group(view_entity,option,row_selection,_STAR_scroller_ref,groups,idx,table_map,group_by_page_QMARK_,group_by_property){
var vec__47146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(groups,idx);
var group_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47146,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47146,(1),null);
var G__47149 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(group_value);
var G__47149__$1 = (((G__47149 instanceof cljs.core.Keyword))?G__47149.fqn:null);
switch (G__47149__$1) {
case "entity":
return frontend.components.views.entity_gallery_group(view_entity,option,row_selection,_STAR_scroller_ref,table_map,group_by_page_QMARK_,group_by_property,new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(group_value),group);

break;
case "scalar":
return frontend.components.views.gallery_group_content(view_entity,option,row_selection,_STAR_scroller_ref,table_map,group_by_page_QMARK_,group_by_property,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(group_value),group);

break;
case "empty":
return frontend.components.views.gallery_group_content(view_entity,option,row_selection,_STAR_scroller_ref,table_map,group_by_page_QMARK_,group_by_property,null,group);

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid view group value",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"group-value","group-value",-1655084609),group_value], null));

}
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$gallery_group__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47150 = cljs.core.first(args__31746__auto__);
var G__47151 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47150,G__47151) : io.factorhouse.hsx.core.obj_get.call(null,G__47150,G__47151));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"gallery-group","gallery-group",530475480,null),args__31746__auto__),frontend$components$views$gallery_group,args__31746__auto__,null);
}
};
var frontend$components$views$gallery_group = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47647__i = 0, G__47647__a = new Array(arguments.length -  0);
while (G__47647__i < G__47647__a.length) {G__47647__a[G__47647__i] = arguments[G__47647__i + 0]; ++G__47647__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47647__a,0,null);
} 
return frontend$components$views$gallery_group__delegate.call(this,args__31746__auto__);};
frontend$components$views$gallery_group.cljs$lang$maxFixedArity = 0;
frontend$components$views$gallery_group.cljs$lang$applyTo = (function (arglist__47648){
var args__31746__auto__ = cljs.core.seq(arglist__47648);
return frontend$components$views$gallery_group__delegate(args__31746__auto__);
});
frontend$components$views$gallery_group.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$gallery_group__delegate;
return frontend$components$views$gallery_group;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47152 = comp__31745__auto__;
var G__47153 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47152,G__47153) : io.factorhouse.hsx.core.react_memo.call(null,G__47152,G__47153));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"gallery-group");

return comp__31745__auto__;
})();
frontend.components.views.grouped_gallery_view = (function (){var render_fn__31744__auto__ = (function frontend$components$views$grouped_gallery_view(table_map,table,option,view_entity,groups,row_selection,group_by_property,group_by_property_ident,_STAR_scroller_ref){
var gallery_rows = frontend.components.views.grouped_gallery_row_ids(new cljs.core.Keyword(null,"view-data","view-data",461796245).cljs$core$IFn$_invoke$arity$1(option));
var gallery_action_table = (function (){var G__47154 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(table_map,new cljs.core.Keyword(null,"data","data",-232669377),gallery_rows,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"full-data","full-data",-1430830367),new cljs.core.Keyword(null,"full-data","full-data",-1430830367).cljs$core$IFn$_invoke$arity$1(table)], 0));
return (logseq.shui.ui.table_option.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.table_option.cljs$core$IFn$_invoke$arity$1(G__47154) : logseq.shui.ui.table_option.call(null,G__47154));
})();
var selected_rows = frontend.components.views.table_get_selection_rows(frontend.components.views.use_table_row_selection(table),new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(gallery_action_table));
var group_by_page_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","page","block/page",822314108),group_by_property_ident);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.border-t.pt-2.gap-2","div.flex.flex-col.border-t.pt-2.gap-2",-1423751738),frontend.components.views.virtualized_list(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"class","class",-2030961996),"group-gallery-view",new cljs.core.Keyword(null,"custom-scroll-parent","custom-scroll-parent",1031485618),frontend.util.app_scroll_container_node.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"increase-viewport-by","increase-viewport-by",1517073864),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),(300),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(300)], null),new cljs.core.Keyword(null,"compute-item-key","compute-item-key",-621146487),(function (idx){
return (""+"gallery-group-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(view_entity))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx));
}),new cljs.core.Keyword(null,"skipAnimationFrameInResizeObserver","skipAnimationFrameInResizeObserver",1677982016),true,new cljs.core.Keyword(null,"total-count","total-count",-1999441386),cljs.core.count(groups),new cljs.core.Keyword(null,"item-content","item-content",1656730280),(function (idx){
return frontend.components.views.gallery_group(view_entity,option,row_selection,_STAR_scroller_ref,groups,idx,table_map,group_by_page_QMARK_,group_by_property);
})], null),false),frontend.components.views.gallery_action_bar(gallery_action_table,option,new cljs.core.Keyword(null,"view-parent","view-parent",675596601).cljs$core$IFn$_invoke$arity$1(option),new cljs.core.Keyword(null,"view-feature-type","view-feature-type",-945869610).cljs$core$IFn$_invoke$arity$1(option),selected_rows)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$grouped_gallery_view__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47155 = cljs.core.first(args__31746__auto__);
var G__47156 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47155,G__47156) : io.factorhouse.hsx.core.obj_get.call(null,G__47155,G__47156));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"grouped-gallery-view","grouped-gallery-view",-767783282,null),args__31746__auto__),frontend$components$views$grouped_gallery_view,args__31746__auto__,null);
}
};
var frontend$components$views$grouped_gallery_view = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47649__i = 0, G__47649__a = new Array(arguments.length -  0);
while (G__47649__i < G__47649__a.length) {G__47649__a[G__47649__i] = arguments[G__47649__i + 0]; ++G__47649__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47649__a,0,null);
} 
return frontend$components$views$grouped_gallery_view__delegate.call(this,args__31746__auto__);};
frontend$components$views$grouped_gallery_view.cljs$lang$maxFixedArity = 0;
frontend$components$views$grouped_gallery_view.cljs$lang$applyTo = (function (arglist__47650){
var args__31746__auto__ = cljs.core.seq(arglist__47650);
return frontend$components$views$grouped_gallery_view__delegate(args__31746__auto__);
});
frontend$components$views$grouped_gallery_view.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$grouped_gallery_view__delegate;
return frontend$components$views$grouped_gallery_view;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47157 = comp__31745__auto__;
var G__47158 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47157,G__47158) : io.factorhouse.hsx.core.react_memo.call(null,G__47157,G__47158));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"grouped-gallery-view");

return comp__31745__auto__;
})();
frontend.components.views.run_effects_BANG_ = (function frontend$components$views$run_effects_BANG_(option,p__47161,_STAR_scroller_ref,gallery_QMARK_){
var map__47162 = p__47161;
var map__47162__$1 = cljs.core.__destructure_map(map__47162);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47162__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword(null,"current-page?","current-page?",-1491305079).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(option));
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.seq(data)) && (cljs.core.uuid_QMARK_(cljs.core.first(data))));
} else {
return and__5140__auto__;
}
})())){
frontend.handler.ui.scroll_to_anchor_block(cljs.core.deref(_STAR_scroller_ref),data,gallery_QMARK_);

return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","virtualized-scroll-fn","editor/virtualized-scroll-fn",-343790237),(function (){
return frontend.handler.ui.scroll_to_anchor_block(cljs.core.deref(_STAR_scroller_ref),data,gallery_QMARK_);
}));
} else {
return null;
}
}),cljs.core.PersistentVector.EMPTY);
});
frontend.components.views.view_sorting_item = (function (){var render_fn__31744__auto__ = (function frontend$components$views$view_sorting_item(table,sorting,id,name,asc_QMARK_,set_sorting_BANG_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.gap-2.items-center.justify-between.px-2","div.flex.flex-row.gap-2.items-center.justify-between.px-2",295298927),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.gap-1.items-center","div.flex.flex-row.gap-1.items-center",1211135204),(function (){var G__47164 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),"!px-1",new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.table","drag-to-reorder","view.table/drag-to-reorder",750530492)], 0))], null);
var G__47166 = logseq.shui.ui.tabler_icon("grip-vertical",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__47164,G__47166) : logseq.shui.ui.button.call(null,G__47164,G__47166));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-muted-foreground.whitespace-nowrap","div.text-muted-foreground.whitespace-nowrap",-95307103),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+":")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.gap-2.items-center","div.flex.flex-row.gap-2.items-center",-2034379152),(function (){var G__47167 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),(cljs.core.truth_(asc_QMARK_)?"asc":"desc"),new cljs.core.Keyword(null,"on-value-change","on-value-change",-621835289),(function (v){
var asc_QMARK___$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,"asc");
var f = new cljs.core.Keyword(null,"column-set-sorting!","column-set-sorting!",892954674).cljs$core$IFn$_invoke$arity$1(table);
if(cljs.core.truth_(f)){
var G__47170 = sorting;
var G__47171 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
var G__47172 = asc_QMARK___$1;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__47170,G__47171,G__47172) : f.call(null,G__47170,G__47171,G__47172));
} else {
return null;
}
})], null);
var G__47168 = (function (){var G__47173 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"order-button !px-2 !py-0 !h-8"], null);
var G__47174 = (function (){var G__47175 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.table","select-order","view.table/select-order",-295941649)], 0))], null);
return (logseq.shui.ui.select_value.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.select_value.cljs$core$IFn$_invoke$arity$1(G__47175) : logseq.shui.ui.select_value.call(null,G__47175));
})();
return (logseq.shui.ui.select_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_trigger.cljs$core$IFn$_invoke$arity$2(G__47173,G__47174) : logseq.shui.ui.select_trigger.call(null,G__47173,G__47174));
})();
var G__47169 = (function (){var G__47176 = (function (){var G__47177 = (function (){var G__47179 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"asc"], null);
var G__47180 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.table","ascending","view.table/ascending",1931413423)], 0));
return (logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2(G__47179,G__47180) : logseq.shui.ui.select_item.call(null,G__47179,G__47180));
})();
var G__47178 = (function (){var G__47183 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"desc"], null);
var G__47184 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.table","descending","view.table/descending",1884892324)], 0));
return (logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2(G__47183,G__47184) : logseq.shui.ui.select_item.call(null,G__47183,G__47184));
})();
return (logseq.shui.ui.select_group.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_group.cljs$core$IFn$_invoke$arity$2(G__47177,G__47178) : logseq.shui.ui.select_group.call(null,G__47177,G__47178));
})();
return (logseq.shui.ui.select_content.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.select_content.cljs$core$IFn$_invoke$arity$1(G__47176) : logseq.shui.ui.select_content.call(null,G__47176));
})();
return (logseq.shui.ui.select.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.select.cljs$core$IFn$_invoke$arity$3(G__47167,G__47168,G__47169) : logseq.shui.ui.select.call(null,G__47167,G__47168,G__47169));
})(),(function (){var G__47185 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),"ghost",new cljs.core.Keyword(null,"class","class",-2030961996),"text-muted-foreground !px-1",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var f = new cljs.core.Keyword(null,"column-set-sorting!","column-set-sorting!",892954674).cljs$core$IFn$_invoke$arity$1(table);
var new_sorting = (function (){var G__47187 = sorting;
var G__47188 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
var G__47189 = null;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__47187,G__47188,G__47189) : f.call(null,G__47187,G__47188,G__47189));
})();
var f__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-fns","data-fns",-1065218324),new cljs.core.Keyword(null,"set-sorting!","set-sorting!",543042376)], null));
(set_sorting_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_sorting_BANG_.cljs$core$IFn$_invoke$arity$1(new_sorting) : set_sorting_BANG_.call(null,new_sorting));

(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(new_sorting) : f__$1.call(null,new_sorting));

if(cljs.core.empty_QMARK_(new_sorting)){
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
} else {
return null;
}
})], null);
var G__47186 = frontend.ui.icon("x");
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__47185,G__47186) : logseq.shui.ui.button.call(null,G__47185,G__47186));
})()], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$view_sorting_item__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47194 = cljs.core.first(args__31746__auto__);
var G__47195 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47194,G__47195) : io.factorhouse.hsx.core.obj_get.call(null,G__47194,G__47195));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"view-sorting-item","view-sorting-item",-740043550,null),args__31746__auto__),frontend$components$views$view_sorting_item,args__31746__auto__,null);
}
};
var frontend$components$views$view_sorting_item = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47651__i = 0, G__47651__a = new Array(arguments.length -  0);
while (G__47651__i < G__47651__a.length) {G__47651__a[G__47651__i] = arguments[G__47651__i + 0]; ++G__47651__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47651__a,0,null);
} 
return frontend$components$views$view_sorting_item__delegate.call(this,args__31746__auto__);};
frontend$components$views$view_sorting_item.cljs$lang$maxFixedArity = 0;
frontend$components$views$view_sorting_item.cljs$lang$applyTo = (function (arglist__47652){
var args__31746__auto__ = cljs.core.seq(arglist__47652);
return frontend$components$views$view_sorting_item__delegate(args__31746__auto__);
});
frontend$components$views$view_sorting_item.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$view_sorting_item__delegate;
return frontend$components$views$view_sorting_item;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47196 = comp__31745__auto__;
var G__47197 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47196,G__47197) : io.factorhouse.hsx.core.react_memo.call(null,G__47196,G__47197));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"view-sorting-item");

return comp__31745__auto__;
})();
frontend.components.views.view_sorting_config = (function (){var render_fn__31744__auto__ = (function frontend$components$views$view_sorting_config(table,sorting,columns){
var vec__47199 = logseq.shui.hooks.use_state(sorting);
var sorting__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47199,(0),null);
var set_sorting_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47199,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-view-order-setting.flex.flex-col.gap-2.py-2.text-sm","div.ls-view-order-setting.flex.flex-col.gap-2.py-2.text-sm",-1359452311),(function (){var items = (function (){var iter__5628__auto__ = (function frontend$components$views$view_sorting_config_$_iter__47205(s__47206){
return (new cljs.core.LazySeq(null,(function (){
var s__47206__$1 = s__47206;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__47206__$1);
if(temp__5825__auto__){
var s__47206__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47206__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__47206__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__47208 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__47207 = (0);
while(true){
if((i__47207 < size__5627__auto__)){
var map__47210 = cljs.core._nth(c__5626__auto__,i__47207);
var map__47210__$1 = cljs.core.__destructure_map(map__47210);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47210__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var asc_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47210__$1,new cljs.core.Keyword(null,"asc?","asc?",891093427));
cljs.core.chunk_append(b__47208,(function (){var temp__5825__auto____$1 = cljs.core.some(((function (i__47207,map__47210,map__47210__$1,id,asc_QMARK_,c__5626__auto__,size__5627__auto__,b__47208,s__47206__$2,temp__5825__auto__,vec__47199,sorting__$1,set_sorting_BANG_){
return (function (column){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column))){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(column);
} else {
return null;
}
});})(i__47207,map__47210,map__47210__$1,id,asc_QMARK_,c__5626__auto__,size__5627__auto__,b__47208,s__47206__$2,temp__5825__auto__,vec__47199,sorting__$1,set_sorting_BANG_))
,columns);
if(cljs.core.truth_(temp__5825__auto____$1)){
var name = temp__5825__auto____$1;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),new cljs.core.Keyword(null,"value","value",305978217),id,new cljs.core.Keyword(null,"content","content",15833224),frontend.components.views.view_sorting_item(table,sorting__$1,id,name,asc_QMARK_,set_sorting_BANG_)], null);
} else {
return null;
}
})());

var G__47653 = (i__47207 + (1));
i__47207 = G__47653;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47208),frontend$components$views$view_sorting_config_$_iter__47205(cljs.core.chunk_rest(s__47206__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47208),null);
}
} else {
var map__47213 = cljs.core.first(s__47206__$2);
var map__47213__$1 = cljs.core.__destructure_map(map__47213);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47213__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var asc_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47213__$1,new cljs.core.Keyword(null,"asc?","asc?",891093427));
return cljs.core.cons((function (){var temp__5825__auto____$1 = cljs.core.some(((function (map__47213,map__47213__$1,id,asc_QMARK_,s__47206__$2,temp__5825__auto__,vec__47199,sorting__$1,set_sorting_BANG_){
return (function (column){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column))){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(column);
} else {
return null;
}
});})(map__47213,map__47213__$1,id,asc_QMARK_,s__47206__$2,temp__5825__auto__,vec__47199,sorting__$1,set_sorting_BANG_))
,columns);
if(cljs.core.truth_(temp__5825__auto____$1)){
var name = temp__5825__auto____$1;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),new cljs.core.Keyword(null,"value","value",305978217),id,new cljs.core.Keyword(null,"content","content",15833224),frontend.components.views.view_sorting_item(table,sorting__$1,id,name,asc_QMARK_,set_sorting_BANG_)], null);
} else {
return null;
}
})(),frontend$components$views$view_sorting_config_$_iter__47205(cljs.core.rest(s__47206__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(sorting__$1);
})();
return frontend.components.dnd.items(items,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671),(function (ordered_columns){
var f = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-fns","data-fns",-1065218324),new cljs.core.Keyword(null,"set-sorting!","set-sorting!",543042376)], null));
var new_sorting = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (column){
return cljs.core.some((function (p1__47198_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__47198_SHARP_))){
return p1__47198_SHARP_;
} else {
return null;
}
}),sorting__$1);
}),ordered_columns);
(set_sorting_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_sorting_BANG_.cljs$core$IFn$_invoke$arity$1(new_sorting) : set_sorting_BANG_.call(null,new_sorting));

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(new_sorting) : f.call(null,new_sorting));
})], null));
})(),(function (){var G__47218 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),"text-muted-foreground justify-start pl-3",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var f = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-fns","data-fns",-1065218324),new cljs.core.Keyword(null,"set-sorting!","set-sorting!",543042376)], null));
(set_sorting_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_sorting_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_sorting_BANG_.call(null,null));

(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(null) : f.call(null,null));

return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
})], null);
var G__47219 = frontend.ui.icon("trash",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(15)], null));
var G__47220 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ml-1","span.ml-1",-436032201),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.table","delete-sort","view.table/delete-sort",-251218567)], 0))], null);
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__47218,G__47219,G__47220) : logseq.shui.ui.button.call(null,G__47218,G__47219,G__47220));
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$view_sorting_config__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47221 = cljs.core.first(args__31746__auto__);
var G__47222 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47221,G__47222) : io.factorhouse.hsx.core.obj_get.call(null,G__47221,G__47222));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"view-sorting-config","view-sorting-config",-406648055,null),args__31746__auto__),frontend$components$views$view_sorting_config,args__31746__auto__,null);
}
};
var frontend$components$views$view_sorting_config = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47654__i = 0, G__47654__a = new Array(arguments.length -  0);
while (G__47654__i < G__47654__a.length) {G__47654__a[G__47654__i] = arguments[G__47654__i + 0]; ++G__47654__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47654__a,0,null);
} 
return frontend$components$views$view_sorting_config__delegate.call(this,args__31746__auto__);};
frontend$components$views$view_sorting_config.cljs$lang$maxFixedArity = 0;
frontend$components$views$view_sorting_config.cljs$lang$applyTo = (function (arglist__47655){
var args__31746__auto__ = cljs.core.seq(arglist__47655);
return frontend$components$views$view_sorting_config__delegate(args__31746__auto__);
});
frontend$components$views$view_sorting_config.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$view_sorting_config__delegate;
return frontend$components$views$view_sorting_config;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47226 = comp__31745__auto__;
var G__47227 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47226,G__47227) : io.factorhouse.hsx.core.react_memo.call(null,G__47226,G__47227));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"view-sorting-config");

return comp__31745__auto__;
})();
frontend.components.views.view_sorting = (function (){var render_fn__31744__auto__ = (function frontend$components$views$view_sorting(table,columns,sorting){
var G__47229 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),"ghost",new cljs.core.Keyword(null,"class","class",-2030961996),"text-muted-foreground !px-1",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var G__47231 = e.target;
var G__47232 = (function (){
return frontend.components.views.view_sorting_config(table,sorting,columns);
});
var G__47233 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"focus-trigger?","focus-trigger?",799847826),false,new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onCloseAutoFocus","onCloseAutoFocus",-349969117),(function (p1__47228_SHARP_){
return p1__47228_SHARP_.preventDefault();
})], null)], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__47231,G__47232,G__47233) : logseq.shui.ui.popup_show_BANG_.call(null,G__47231,G__47232,G__47233));
})], null);
var G__47230 = frontend.ui.icon("arrows-up-down");
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__47229,G__47230) : logseq.shui.ui.button.call(null,G__47229,G__47230));
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$view_sorting__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47234 = cljs.core.first(args__31746__auto__);
var G__47235 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47234,G__47235) : io.factorhouse.hsx.core.obj_get.call(null,G__47234,G__47235));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"view-sorting","view-sorting",1788291125,null),args__31746__auto__),frontend$components$views$view_sorting,args__31746__auto__,null);
}
};
var frontend$components$views$view_sorting = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47656__i = 0, G__47656__a = new Array(arguments.length -  0);
while (G__47656__i < G__47656__a.length) {G__47656__a[G__47656__i] = arguments[G__47656__i + 0]; ++G__47656__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47656__a,0,null);
} 
return frontend$components$views$view_sorting__delegate.call(this,args__31746__auto__);};
frontend$components$views$view_sorting.cljs$lang$maxFixedArity = 0;
frontend$components$views$view_sorting.cljs$lang$applyTo = (function (arglist__47657){
var args__31746__auto__ = cljs.core.seq(arglist__47657);
return frontend$components$views$view_sorting__delegate(args__31746__auto__);
});
frontend$components$views$view_sorting.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$view_sorting__delegate;
return frontend$components$views$view_sorting;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47236 = comp__31745__auto__;
var G__47237 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47236,G__47237) : io.factorhouse.hsx.core.react_memo.call(null,G__47236,G__47237));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"view-sorting");

return comp__31745__auto__;
})();
frontend.components.views.view_cp = (function (){var render_fn__31744__auto__ = (function frontend$components$views$view_cp(view_entity,table,option_STAR_,p__47238){
var map__47239 = p__47238;
var map__47239__$1 = cljs.core.__destructure_map(map__47239);
var _STAR_scroller_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47239__$1,new cljs.core.Keyword(null,"*scroller-ref","*scroller-ref",-635636256));
var display_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47239__$1,new cljs.core.Keyword(null,"display-type","display-type",-749971179));
var row_selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47239__$1,new cljs.core.Keyword(null,"row-selection","row-selection",1964656498));
var vec__47240 = logseq.shui.hooks.use_state((function (){
return cljs.core.random_uuid();
}));
var viewid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47240,(0),null);
var option = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(option_STAR_,new cljs.core.Keyword(null,"view-entity","view-entity",-1084117808),view_entity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"viewid","viewid",-50894460),viewid], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),viewid], null),(function (){var G__47243 = display_type;
var G__47243__$1 = (((G__47243 instanceof cljs.core.Keyword))?G__47243.fqn:null);
switch (G__47243__$1) {
case "logseq.property.view/type.list":
return frontend.components.views.list_view(option,view_entity,table,_STAR_scroller_ref);

break;
case "logseq.property.view/type.gallery":
return frontend.components.views.gallery_view(option,table,view_entity,new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(table),row_selection,_STAR_scroller_ref);

break;
default:
return frontend.components.views.table_view(table,option,row_selection,_STAR_scroller_ref);

}
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$view_cp__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47244 = cljs.core.first(args__31746__auto__);
var G__47245 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47244,G__47245) : io.factorhouse.hsx.core.obj_get.call(null,G__47244,G__47245));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"view-cp","view-cp",-894959036,null),args__31746__auto__),frontend$components$views$view_cp,args__31746__auto__,null);
}
};
var frontend$components$views$view_cp = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47659__i = 0, G__47659__a = new Array(arguments.length -  0);
while (G__47659__i < G__47659__a.length) {G__47659__a[G__47659__i] = arguments[G__47659__i + 0]; ++G__47659__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47659__a,0,null);
} 
return frontend$components$views$view_cp__delegate.call(this,args__31746__auto__);};
frontend$components$views$view_cp.cljs$lang$maxFixedArity = 0;
frontend$components$views$view_cp.cljs$lang$applyTo = (function (arglist__47660){
var args__31746__auto__ = cljs.core.seq(arglist__47660);
return frontend$components$views$view_cp__delegate(args__31746__auto__);
});
frontend$components$views$view_cp.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$view_cp__delegate;
return frontend$components$views$view_cp;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47246 = comp__31745__auto__;
var G__47247 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47246,G__47247) : io.factorhouse.hsx.core.react_memo.call(null,G__47246,G__47247));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"view-cp");

return comp__31745__auto__;
})();
frontend.components.views.view_with_display_type = (function frontend$components$views$view_with_display_type(view_entity,display_type){
if(cljs.core.truth_(new cljs.core.Keyword("logseq.property.view","type","logseq.property.view/type",218237607).cljs$core$IFn$_invoke$arity$1(view_entity))){
return view_entity;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(view_entity,new cljs.core.Keyword("logseq.property.view","type","logseq.property.view/type",218237607),frontend.components.views.built_in_property(display_type));
}
});
frontend.components.views.default_view_title_key_by_feature_type = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"linked-references","linked-references",-2117592379),new cljs.core.Keyword("view","linked-references","view/linked-references",-2112395934),new cljs.core.Keyword(null,"unlinked-references","unlinked-references",1918870007),new cljs.core.Keyword("view","unlinked-references","view/unlinked-references",1921574650),new cljs.core.Keyword(null,"class-objects","class-objects",1489112646),new cljs.core.Keyword("view","all","view/all",885364659),new cljs.core.Keyword(null,"property-objects","property-objects",-1410914822),new cljs.core.Keyword("view","all","view/all",885364659),new cljs.core.Keyword(null,"all-pages","all-pages",1017563062),new cljs.core.Keyword("view","all","view/all",885364659)], null);
frontend.components.views.default_view_title_key = (function frontend$components$views$default_view_title_key(view_feature_type){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.components.views.default_view_title_key_by_feature_type,view_feature_type);
});
frontend.components.views.create_view_BANG_ = (function frontend$components$views$create_view_BANG_(view_parent,view_feature_type,p__47251){
var map__47252 = p__47251;
var map__47252__$1 = cljs.core.__destructure_map(map__47252);
var auto_triggered_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47252__$1,new cljs.core.Keyword(null,"auto-triggered?","auto-triggered?",1255221895));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.get_current_repo()),(function (repo){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,logseq.common.config.views_page_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (page){
return promesa.protocols._promise((cljs.core.truth_(page)?promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"linked-references","linked-references",-2117592379),null,new cljs.core.Keyword(null,"unlinked-references","unlinked-references",1918870007),null], null), null),view_feature_type))?frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null),new cljs.core.Keyword("logseq.property.view","type.list","logseq.property.view/type.list",-1164828502)], 0)):null)),(function (list_view_type){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"linked-references","linked-references",-2117592379),null,new cljs.core.Keyword(null,"unlinked-references","unlinked-references",1918870007),null], null), null),view_feature_type))?frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null),new cljs.core.Keyword("block","page","block/page",822314108)], 0)):null)),(function (block_page_property){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__47254 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.property","view-for","logseq.property/view-for",-36274319),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(view_parent),new cljs.core.Keyword("logseq.property.view","feature-type","logseq.property.view/feature-type",-939141871),view_feature_type], null);
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"linked-references","linked-references",-2117592379),null,new cljs.core.Keyword(null,"unlinked-references","unlinked-references",1918870007),null], null), null),view_feature_type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__47254,new cljs.core.Keyword("logseq.property.view","type","logseq.property.view/type",218237607),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(list_view_type),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("logseq.property.view","group-by-property","logseq.property.view/group-by-property",809216236),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block_page_property)], 0));
} else {
return G__47254;
}
})()),(function (properties){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(auto_triggered_QMARK_)?(function (){var G__47255 = frontend.components.views.default_view_title_key(view_feature_type);
if((G__47255 == null)){
return null;
} else {
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__47255], 0));
}
})():"")),(function (view_title){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.common.uuid.gen_uuid.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"view-block-uuid","view-block-uuid",1288276895),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(view_parent))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(view_feature_type)))),(function (view_block_id){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.api_insert_new_block_BANG_(view_title,(function (){var G__47257 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"properties","properties",685819552),properties,new cljs.core.Keyword(null,"edit-block?","edit-block?",-310383789),false,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"create-view","create-view",-485638509),new cljs.core.Keyword(null,"skip-save-current-block?","skip-save-current-block?",515354840),true], null);
if(cljs.core.truth_(auto_triggered_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47257,new cljs.core.Keyword(null,"custom-uuid","custom-uuid",-1095135430),view_block_id);
} else {
return G__47257;
}
})())),(function (result){
return promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(result),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0)));
}));
}));
}));
}));
}));
}));
})):null));
}));
}));
}));
});
frontend.components.views.default_view_title_candidates = cljs.core.reduce_kv((function (acc,feature_type,title_key){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,feature_type,cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__47258_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__47258_SHARP_,title_key);
}),cljs.core.vals(frontend.dicts.dicts))));
}),cljs.core.PersistentArrayMap.EMPTY,frontend.components.views.default_view_title_key_by_feature_type);
frontend.components.views.display_view_title = (function frontend$components$views$display_view_title(view){
var title = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(view);
var feature_type = new cljs.core.Keyword("logseq.property.view","feature-type","logseq.property.view/feature-type",-939141871).cljs$core$IFn$_invoke$arity$1(view);
var title_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.components.views.default_view_title_key_by_feature_type,feature_type);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(title,"")){
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view","new-view","view/new-view",-988218796)], 0));
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = title_key;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.components.views.default_view_title_candidates,feature_type),title);
} else {
return and__5140__auto__;
}
})())){
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([title_key], 0));
} else {
return title;

}
}
});
frontend.components.views.view_tab_button = (function (){var render_fn__31744__auto__ = (function frontend$components$views$view_tab_button(view_parent,current_view_uuid,view_uuid,p__47262){
var map__47263 = p__47262;
var map__47263__$1 = cljs.core.__destructure_map(map__47263);
var view_uuids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47263__$1,new cljs.core.Keyword(null,"view-uuids","view-uuids",-351924754));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47263__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var items_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47263__$1,new cljs.core.Keyword(null,"items-count","items-count",-135458025));
var set_current_view_uuid_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47263__$1,new cljs.core.Keyword(null,"set-current-view-uuid!","set-current-view-uuid!",-932288136));
var show_items_count_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47263__$1,new cljs.core.Keyword(null,"show-items-count?","show-items-count?",-1022363900));
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47263__$1,new cljs.core.Keyword(null,"config","config",994861415));
var references_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47263__$1,new cljs.core.Keyword(null,"references?","references?",-487254152));
var hydrated_view = frontend.db.hooks.use_block(view_uuid);
var view = (function (){var or__5142__auto__ = hydrated_view;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),view_uuid], null);
}
})();
var refs_total_count = new cljs.core.Keyword(null,"refs-total-count","refs-total-count",-255123706).cljs$core$IFn$_invoke$arity$1(config);
var current_view_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_view_uuid,view_uuid);
var G__47264 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"view-tab-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(view_uuid)),new cljs.core.Keyword(null,"data-view-tab-id","data-view-tab-id",906761451),(""+"view-tab-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(view_uuid)),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),(""+"text-sm px-0 py-0 h-6 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((current_view_QMARK_)?null:"text-muted-foreground"))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(cljs.core.truth_((function (){var and__5140__auto__ = hydrated_view;
if(cljs.core.truth_(and__5140__auto__)){
return ((current_view_QMARK_) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(view),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(view_parent))));
} else {
return and__5140__auto__;
}
})())){
var G__47268 = e.target;
var G__47269 = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(function (){var G__47271 = (function (){var G__47273 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view","rename","view/rename",1504472520)], 0));
return (logseq.shui.ui.dropdown_menu_sub_trigger.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dropdown_menu_sub_trigger.cljs$core$IFn$_invoke$arity$1(G__47273) : logseq.shui.ui.dropdown_menu_sub_trigger.call(null,G__47273));
})();
var G__47272 = (function (){var G__47274 = (function (){var temp__5825__auto__ = frontend.state.get_component(new cljs.core.Keyword("block","container","block/container",510671002));
if(cljs.core.truth_(temp__5825__auto__)){
var block_container_cp = temp__5825__auto__;
var G__47275 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display-title","display-title",773425144),frontend.components.views.display_view_title(view),new cljs.core.Keyword(null,"hide-block-control?","hide-block-control?",1530346312),true], null);
var G__47276 = view;
return (block_container_cp.cljs$core$IFn$_invoke$arity$2 ? block_container_cp.cljs$core$IFn$_invoke$arity$2(G__47275,G__47276) : block_container_cp.call(null,G__47275,G__47276));
} else {
return null;
}
})();
return (logseq.shui.ui.dropdown_menu_sub_content.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dropdown_menu_sub_content.cljs$core$IFn$_invoke$arity$1(G__47274) : logseq.shui.ui.dropdown_menu_sub_content.call(null,G__47274));
})();
return (logseq.shui.ui.dropdown_menu_sub.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_sub.cljs$core$IFn$_invoke$arity$2(G__47271,G__47272) : logseq.shui.ui.dropdown_menu_sub.call(null,G__47271,G__47272));
})(),(((cljs.core.count(view_uuids) > (1)))?(function (){var G__47277 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__47279_47661 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([view_uuid]),view_uuids));
(set_current_view_uuid_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_view_uuid_BANG_.cljs$core$IFn$_invoke$arity$1(G__47279_47661) : set_current_view_uuid_BANG_.call(null,G__47279_47661));

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.delete_block_aux_BANG_.cljs$core$IFn$_invoke$arity$1(view)),(function (___21901__auto__){
return promesa.protocols._promise((logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null)));
}));
}));
})], null);
var G__47278 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","delete","ui/delete",-1768677056)], 0));
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__47277,G__47278) : logseq.shui.ui.dropdown_menu_item.call(null,G__47277,G__47278));
})():null)], null);
});
var G__47270 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"as-dropdown?","as-dropdown?",-37553558),true,new cljs.core.Keyword(null,"dropdown-menu?","dropdown-menu?",-682398029),true,new cljs.core.Keyword(null,"align","align",1964212802),"start",new cljs.core.Keyword(null,"focus-trigger?","focus-trigger?",799847826),false,new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),logseq.shui.ui.popup_hide_BANG_,new cljs.core.Keyword(null,"onCloseAutoFocus","onCloseAutoFocus",-349969117),(function (p1__47261_SHARP_){
return p1__47261_SHARP_.preventDefault();
})], null)], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__47268,G__47269,G__47270) : logseq.shui.ui.popup_show_BANG_.call(null,G__47268,G__47269,G__47270));
} else {
return (set_current_view_uuid_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_view_uuid_BANG_.cljs$core$IFn$_invoke$arity$1(view_uuid) : set_current_view_uuid_BANG_.call(null,view_uuid));
}
})], null);
var G__47265 = (cljs.core.truth_(references_QMARK_)?null:(function (){var display_type = (function (){var or__5142__auto__ = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(view,new cljs.core.Keyword("logseq.property.view","type","logseq.property.view/type",218237607)));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("logseq.property.view","type.table","logseq.property.view/type.table",194254240);
}
})();
var temp__5825__auto__ = new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285).cljs$core$IFn$_invoke$arity$1(frontend.components.views.built_in_property(display_type));
if(cljs.core.truth_(temp__5825__auto__)){
var icon = temp__5825__auto__;
return frontend.components.icon.icon.cljs$core$IFn$_invoke$arity$variadic(icon,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color?","color?",-1891974356),true,new cljs.core.Keyword(null,"size","size",1098693007),(15)], null)], 0));
} else {
return null;
}
})());
var G__47266 = (cljs.core.truth_(hydrated_view)?frontend.components.views.display_view_title(view):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inline-block.w-8","span.inline-block.w-8",2140570187)], null));
var G__47267 = (cljs.core.truth_((function (){var and__5140__auto__ = current_view_QMARK_;
if(and__5140__auto__){
var and__5140__auto____$1 = show_items_count_QMARK_;
if(cljs.core.truth_(and__5140__auto____$1)){
return (((items_count > (0))) && (cljs.core.seq(data)));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-muted-foreground.text-xs","span.text-muted-foreground.text-xs",597438834),items_count,(cljs.core.truth_((function (){var and__5140__auto__ = refs_total_count;
if(cljs.core.truth_(and__5140__auto__)){
return (refs_total_count > items_count);
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"/"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.table","total-refs-count","view.table/total-refs-count",-1811897439)], 0))], null),refs_total_count], null)], null):null)], null):null);
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$4 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$4(G__47264,G__47265,G__47266,G__47267) : logseq.shui.ui.button.call(null,G__47264,G__47265,G__47266,G__47267));
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$view_tab_button__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47280 = cljs.core.first(args__31746__auto__);
var G__47281 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47280,G__47281) : io.factorhouse.hsx.core.obj_get.call(null,G__47280,G__47281));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"view-tab-button","view-tab-button",1662896353,null),args__31746__auto__),frontend$components$views$view_tab_button,args__31746__auto__,null);
}
};
var frontend$components$views$view_tab_button = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47662__i = 0, G__47662__a = new Array(arguments.length -  0);
while (G__47662__i < G__47662__a.length) {G__47662__a[G__47662__i] = arguments[G__47662__i + 0]; ++G__47662__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47662__a,0,null);
} 
return frontend$components$views$view_tab_button__delegate.call(this,args__31746__auto__);};
frontend$components$views$view_tab_button.cljs$lang$maxFixedArity = 0;
frontend$components$views$view_tab_button.cljs$lang$applyTo = (function (arglist__47663){
var args__31746__auto__ = cljs.core.seq(arglist__47663);
return frontend$components$views$view_tab_button__delegate(args__31746__auto__);
});
frontend$components$views$view_tab_button.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$view_tab_button__delegate;
return frontend$components$views$view_tab_button;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47282 = comp__31745__auto__;
var G__47283 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47282,G__47283) : io.factorhouse.hsx.core.react_memo.call(null,G__47282,G__47283));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"view-tab-button");

return comp__31745__auto__;
})();
frontend.components.views.views_tab = (function (){var render_fn__31744__auto__ = (function frontend$components$views$views_tab(view_parent,current_view_uuid,p__47284){
var map__47285 = p__47284;
var map__47285__$1 = cljs.core.__destructure_map(map__47285);
var opts = map__47285__$1;
var view_uuids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47285__$1,new cljs.core.Keyword(null,"view-uuids","view-uuids",-351924754));
var set_current_view_uuid_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47285__$1,new cljs.core.Keyword(null,"set-current-view-uuid!","set-current-view-uuid!",-932288136));
var view_feature_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47285__$1,new cljs.core.Keyword(null,"view-feature-type","view-feature-type",-945869610));
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47285__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.views","div.views",-1481909428)], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (view_uuid){
return frontend.components.views.view_tab_button(view_parent,current_view_uuid,view_uuid,opts);
}),view_uuids),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47286 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),"add-view",new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view","add-new-view","view/add-new-view",-1910416863)], 0)),new cljs.core.Keyword(null,"class","class",-2030961996),(""+"!px-1 -ml-1 text-muted-foreground hover:text-foreground transition-opacity ease-in duration-300 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(opacity)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.views.create_view_BANG_(view_parent,view_feature_type,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"auto-triggered?","auto-triggered?",1255221895),false], null))),(function (view){
return promesa.protocols._promise((function (){var G__47288 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(view);
return (set_current_view_uuid_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_view_uuid_BANG_.cljs$core$IFn$_invoke$arity$1(G__47288) : set_current_view_uuid_BANG_.call(null,G__47288));
})());
}));
}));
})], null);
var G__47287 = frontend.ui.icon("plus",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(15)], null));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__47286,G__47287) : logseq.shui.ui.button.call(null,G__47286,G__47287));
})()], null)));
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$views_tab__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47289 = cljs.core.first(args__31746__auto__);
var G__47290 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47289,G__47290) : io.factorhouse.hsx.core.obj_get.call(null,G__47289,G__47290));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"views-tab","views-tab",-417037123,null),args__31746__auto__),frontend$components$views$views_tab,args__31746__auto__,null);
}
};
var frontend$components$views$views_tab = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47664__i = 0, G__47664__a = new Array(arguments.length -  0);
while (G__47664__i < G__47664__a.length) {G__47664__a[G__47664__i] = arguments[G__47664__i + 0]; ++G__47664__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47664__a,0,null);
} 
return frontend$components$views$views_tab__delegate.call(this,args__31746__auto__);};
frontend$components$views$views_tab.cljs$lang$maxFixedArity = 0;
frontend$components$views$views_tab.cljs$lang$applyTo = (function (arglist__47665){
var args__31746__auto__ = cljs.core.seq(arglist__47665);
return frontend$components$views$views_tab__delegate(args__31746__auto__);
});
frontend$components$views$views_tab.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$views_tab__delegate;
return frontend$components$views$views_tab;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47291 = comp__31745__auto__;
var G__47292 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47291,G__47292) : io.factorhouse.hsx.core.react_memo.call(null,G__47291,G__47292));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"views-tab");

return comp__31745__auto__;
})();
frontend.components.views.view_head = (function (){var render_fn__31744__auto__ = (function frontend$components$views$view_head(view_parent,view_entity,table,columns,input,sorting,set_input_BANG_,add_new_object_BANG_,p__47293){
var map__47294 = p__47293;
var map__47294__$1 = cljs.core.__destructure_map(map__47294);
var option = map__47294__$1;
var view_feature_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47294__$1,new cljs.core.Keyword(null,"view-feature-type","view-feature-type",-945869610));
var title_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47294__$1,new cljs.core.Keyword(null,"title-key","title-key",830482796));
var additional_actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47294__$1,new cljs.core.Keyword(null,"additional-actions","additional-actions",1699457595));
var display_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47294__$1,new cljs.core.Keyword(null,"display-type","display-type",-749971179));
var vec__47295 = logseq.shui.hooks.use_state(null);
var hover_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47295,(0),null);
var set_hover_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47295,(1),null);
var references_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"linked-references","linked-references",-2117592379),null,new cljs.core.Keyword(null,"unlinked-references","unlinked-references",1918870007),null], null), null),view_feature_type);
var opacity = ((((references_QMARK_) && (cljs.core.not(hover_QMARK_))))?"opacity-0":(cljs.core.truth_(hover_QMARK_)?"opacity-100":"opacity-75"
));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-view-head.flex.flex-1.flex-nowrap.items-center.justify-between.gap-1.overflow-hidden","div.ls-view-head.flex.flex-1.flex-nowrap.items-center.justify-between.gap-1.overflow-hidden",-181256913),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (){
return (set_hover_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_hover_QMARK_.cljs$core$IFn$_invoke$arity$1(true) : set_hover_QMARK_.call(null,true));
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (){
if(((frontend.ui.popup_exists_QMARK_()) || (frontend.ui.dropdown_exists_QMARK_()))){
return null;
} else {
return (set_hover_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_hover_QMARK_.cljs$core$IFn$_invoke$arity$1(false) : set_hover_QMARK_.call(null,false));
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.gap-2","div.flex.flex-row.items-center.gap-2",212596841),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_feature_type,new cljs.core.Keyword(null,"query-result","query-result",-833644142)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-medium.opacity-50.text-sm","div.font-medium.opacity-50.text-sm",-355795656),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5142__auto__ = title_key;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("view.table","default-title","view.table/default-title",-1073147012);
}
})(),new cljs.core.Keyword(null,"items-count","items-count",-135458025).cljs$core$IFn$_invoke$arity$1(option)], 0))], null):frontend.components.views.views_tab(view_parent,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(view_entity),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(option,new cljs.core.Keyword(null,"hover?","hover?",-1201331489),hover_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"opacity","opacity",397153780),opacity,new cljs.core.Keyword(null,"references?","references?",-487254152),references_QMARK_], 0))))], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.view-actions.flex.items-center.gap-1.transition-opacity.ease-in.duration-300","div.view-actions.flex.items-center.gap-1.transition-opacity.ease-in.duration-300",133367733),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),opacity,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),frontend.components.views.prevent_view_action_button_focus], null),((cljs.core.seq(additional_actions))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(function (){var iter__5628__auto__ = (function frontend$components$views$view_head_$_iter__47298(s__47299){
return (new cljs.core.LazySeq(null,(function (){
var s__47299__$1 = s__47299;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__47299__$1);
if(temp__5825__auto__){
var s__47299__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47299__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__47299__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__47301 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__47300 = (0);
while(true){
if((i__47300 < size__5627__auto__)){
var action = cljs.core._nth(c__5626__auto__,i__47300);
cljs.core.chunk_append(b__47301,((cljs.core.fn_QMARK_(action))?(action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(option) : action.call(null,option)):action));

var G__47666 = (i__47300 + (1));
i__47300 = G__47666;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47301),frontend$components$views$view_head_$_iter__47298(cljs.core.chunk_rest(s__47299__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47301),null);
}
} else {
var action = cljs.core.first(s__47299__$2);
return cljs.core.cons(((cljs.core.fn_QMARK_(action))?(action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(option) : action.call(null,option)):action),frontend$components$views$view_head_$_iter__47298(cljs.core.rest(s__47299__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(additional_actions);
})()], null):null),((cljs.core.seq(sorting))?frontend.components.views.view_sorting(table,columns,sorting):null),frontend.components.views.filter_properties(view_entity,columns,table,option),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.view-action-search","div.view-action-search",567227324),frontend.components.views.search(input,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),set_input_BANG_,new cljs.core.Keyword(null,"set-input!","set-input!",-615513292),set_input_BANG_], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.view-action-type.text-muted-foreground.text-sm","div.view-action-type.text-muted-foreground.text-sm",496724332),frontend.components.property.value.property_value(frontend.components.views.view_with_display_type(view_entity,display_type),frontend.components.views.built_in_property(new cljs.core.Keyword("logseq.property.view","type","logseq.property.view/type",218237607)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon?","icon?",-1663815703),true,new cljs.core.Keyword(null,"popup-focus-trigger?","popup-focus-trigger?",546503552),false,new cljs.core.Keyword(null,"popup-auto-focus-trigger?","popup-auto-focus-trigger?",-486269712),false], null))], null),frontend.components.views.more_actions(view_entity,columns,table,option),(cljs.core.truth_(add_new_object_BANG_)?frontend.components.views.new_record_button(table,view_entity):null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$view_head__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47302 = cljs.core.first(args__31746__auto__);
var G__47303 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47302,G__47303) : io.factorhouse.hsx.core.obj_get.call(null,G__47302,G__47303));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"view-head","view-head",-1621268517,null),args__31746__auto__),frontend$components$views$view_head,args__31746__auto__,null);
}
};
var frontend$components$views$view_head = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47669__i = 0, G__47669__a = new Array(arguments.length -  0);
while (G__47669__i < G__47669__a.length) {G__47669__a[G__47669__i] = arguments[G__47669__i + 0]; ++G__47669__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47669__a,0,null);
} 
return frontend$components$views$view_head__delegate.call(this,args__31746__auto__);};
frontend$components$views$view_head.cljs$lang$maxFixedArity = 0;
frontend$components$views$view_head.cljs$lang$applyTo = (function (arglist__47670){
var args__31746__auto__ = cljs.core.seq(arglist__47670);
return frontend$components$views$view_head__delegate(args__31746__auto__);
});
frontend$components$views$view_head.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$view_head__delegate;
return frontend$components$views$view_head;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47304 = comp__31745__auto__;
var G__47305 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47304,G__47305) : io.factorhouse.hsx.core.react_memo.call(null,G__47304,G__47305));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"view-head");

return comp__31745__auto__;
})();
frontend.components.views.group_item_content = (function frontend$components$views$group_item_content(view_entity,table_SINGLEQUOTE_,group,group_by_property,value,option,view_opts,p__47306){
var map__47307 = p__47306;
var map__47307__$1 = cljs.core.__destructure_map(map__47307);
var list_view_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47307__$1,new cljs.core.Keyword(null,"list-view?","list-view?",499477951));
var gallery_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47307__$1,new cljs.core.Keyword(null,"gallery?","gallery?",-905074488));
var group_by_page_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47307__$1,new cljs.core.Keyword(null,"group-by-page?","group-by-page?",1520059448));
var readable_property_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47307__$1,new cljs.core.Keyword(null,"readable-property-value","readable-property-value",1052317566));
var add_new_object_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47307__$1,new cljs.core.Keyword(null,"add-new-object!","add-new-object!",622560106));
var outer_table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47307__$1,new cljs.core.Keyword(null,"outer-table","outer-table",378702779));
var group_table = ((cljs.core.fn_QMARK_(add_new_object_BANG_))?cljs.core.assoc_in(table_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-fns","data-fns",-1065218324),new cljs.core.Keyword(null,"add-new-object!","add-new-object!",622560106)], null),(function (_){
var G__47308 = view_entity;
var G__47309 = outer_table;
var G__47310 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(group_by_property),((cljs.core.map_QMARK_(value))?new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(value):value)])], null);
return (add_new_object_BANG_.cljs$core$IFn$_invoke$arity$3 ? add_new_object_BANG_.cljs$core$IFn$_invoke$arity$3(G__47308,G__47309,G__47310) : add_new_object_BANG_.call(null,G__47308,G__47309,G__47310));
})):table_SINGLEQUOTE_);
var title = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(list_view_QMARK_)?null:"my-2")], null),(cljs.core.truth_(group_by_page_QMARK_)?(cljs.core.truth_(value)?(function (){var page_cp = frontend.state.get_component(new cljs.core.Keyword("block","page-cp","block/page-cp",975876274));
var page = ((cljs.core.map_QMARK_(value))?cljs.core.select_keys(value,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("block","name","block/name",1619760316)], null)):value);
if(cljs.core.fn_QMARK_(page_cp)){
var G__47311 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disable-preview?","disable-preview?",1485814365),true], null);
var G__47312 = page;
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__47311,G__47312) : page_cp.call(null,G__47311,G__47312));
} else {
return (readable_property_value.cljs$core$IFn$_invoke$arity$1 ? readable_property_value.cljs$core$IFn$_invoke$arity$1(page) : readable_property_value.call(null,page));
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-muted-foreground.text-sm","div.text-muted-foreground.text-sm",189157817),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.table","pages","view.table/pages",619322380)], 0))], null)):(((!((value == null))))?(function (){var icon = ((cljs.core.map_QMARK_(value))?frontend.handler.property.util.get_block_property_value(value,new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285)):null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.gap-1.items-center","div.flex.flex-row.gap-1.items-center",1211135204),(cljs.core.truth_(icon)?frontend.components.icon.icon.cljs$core$IFn$_invoke$arity$variadic(icon,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color?","color?",-1891974356),true], null)], 0)):null),(readable_property_value.cljs$core$IFn$_invoke$arity$1 ? readable_property_value.cljs$core$IFn$_invoke$arity$1(value) : readable_property_value.call(null,value))], null);
})():frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view.table","no-group-value","view.table/no-group-value",-1213730444),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(group_by_property)], 0))
))], null);
var body_fn = (function (){
var render = frontend.components.views.view_cp(view_entity,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(group_table,new cljs.core.Keyword(null,"rows","rows",850049680),group),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(option,new cljs.core.Keyword(null,"all-row-ids","all-row-ids",351472952),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"offset-rows","offset-rows",2126795718),new cljs.core.Keyword(null,"row-offset","row-offset",-1310990952),new cljs.core.Keyword(null,"stale-offset-rows","stale-offset-rows",104776623),new cljs.core.Keyword(null,"stale-row-offset","stale-row-offset",-262353700),new cljs.core.Keyword(null,"items-count","items-count",-135458025)], 0)),new cljs.core.Keyword(null,"disable-virtualized?","disable-virtualized?",-1546442714),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hide-action-bar?","hide-action-bar?",1286743064),gallery_QMARK_], 0)),view_opts);
if(cljs.core.truth_((function (){var and__5140__auto__ = list_view_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(frontend.util.mobile_QMARK_());
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.-ml-2","div.-ml-2",-1022402661),render], null);
} else {
return render;
}
});
if(cljs.core.truth_(frontend.util.mobile_QMARK_())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-1.flex-col","div.flex.flex-1.flex-col",350787913),title,body_fn()], null);
} else {
return frontend.ui.foldable(title,body_fn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title-trigger?","title-trigger?",-613599873),false], null));
}
});
frontend.components.views.entity_group_item = (function (){var render_fn__31744__auto__ = (function frontend$components$views$entity_group_item(view_entity,table_SINGLEQUOTE_,group,group_by_property,entity_uuid,option,view_opts,opts){
var temp__5823__auto__ = frontend.db.hooks.use_block(entity_uuid);
if(cljs.core.truth_(temp__5823__auto__)){
var entity = temp__5823__auto__;
return frontend.components.views.group_item_content(view_entity,table_SINGLEQUOTE_,group,group_by_property,entity,option,view_opts,opts);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),(1)], null)], null)], null);
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$entity_group_item__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47313 = cljs.core.first(args__31746__auto__);
var G__47314 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47313,G__47314) : io.factorhouse.hsx.core.obj_get.call(null,G__47313,G__47314));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"entity-group-item","entity-group-item",1338468273,null),args__31746__auto__),frontend$components$views$entity_group_item,args__31746__auto__,null);
}
};
var frontend$components$views$entity_group_item = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47675__i = 0, G__47675__a = new Array(arguments.length -  0);
while (G__47675__i < G__47675__a.length) {G__47675__a[G__47675__i] = arguments[G__47675__i + 0]; ++G__47675__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47675__a,0,null);
} 
return frontend$components$views$entity_group_item__delegate.call(this,args__31746__auto__);};
frontend$components$views$entity_group_item.cljs$lang$maxFixedArity = 0;
frontend$components$views$entity_group_item.cljs$lang$applyTo = (function (arglist__47676){
var args__31746__auto__ = cljs.core.seq(arglist__47676);
return frontend$components$views$entity_group_item__delegate(args__31746__auto__);
});
frontend$components$views$entity_group_item.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$entity_group_item__delegate;
return frontend$components$views$entity_group_item;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47315 = comp__31745__auto__;
var G__47316 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47315,G__47316) : io.factorhouse.hsx.core.react_memo.call(null,G__47315,G__47316));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"entity-group-item");

return comp__31745__auto__;
})();
frontend.components.views.group_item = (function (){var render_fn__31744__auto__ = (function frontend$components$views$group_item(view_entity,table_SINGLEQUOTE_,group,group_by_property,group_value,option,view_opts,opts){
var G__47317 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(group_value);
var G__47317__$1 = (((G__47317 instanceof cljs.core.Keyword))?G__47317.fqn:null);
switch (G__47317__$1) {
case "entity":
return frontend.components.views.entity_group_item(view_entity,table_SINGLEQUOTE_,group,group_by_property,new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(group_value),option,view_opts,opts);

break;
case "scalar":
return frontend.components.views.group_item_content(view_entity,table_SINGLEQUOTE_,group,group_by_property,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(group_value),option,view_opts,opts);

break;
case "empty":
return frontend.components.views.group_item_content(view_entity,table_SINGLEQUOTE_,group,group_by_property,null,option,view_opts,opts);

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid view group value",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"group-value","group-value",-1655084609),group_value], null));

}
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$group_item__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47318 = cljs.core.first(args__31746__auto__);
var G__47319 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47318,G__47319) : io.factorhouse.hsx.core.obj_get.call(null,G__47318,G__47319));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"group-item","group-item",-1983851911,null),args__31746__auto__),frontend$components$views$group_item,args__31746__auto__,null);
}
};
var frontend$components$views$group_item = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47678__i = 0, G__47678__a = new Array(arguments.length -  0);
while (G__47678__i < G__47678__a.length) {G__47678__a[G__47678__i] = arguments[G__47678__i + 0]; ++G__47678__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47678__a,0,null);
} 
return frontend$components$views$group_item__delegate.call(this,args__31746__auto__);};
frontend$components$views$group_item.cljs$lang$maxFixedArity = 0;
frontend$components$views$group_item.cljs$lang$applyTo = (function (arglist__47679){
var args__31746__auto__ = cljs.core.seq(arglist__47679);
return frontend$components$views$group_item__delegate(args__31746__auto__);
});
frontend$components$views$group_item.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$group_item__delegate;
return frontend$components$views$group_item;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47320 = comp__31745__auto__;
var G__47321 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47320,G__47321) : io.factorhouse.hsx.core.react_memo.call(null,G__47320,G__47321));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"group-item");

return comp__31745__auto__;
})();
frontend.components.views.view_inner = (function (){var render_fn__31744__auto__ = (function frontend$components$views$view_inner(view_entity,p__47324,_STAR_scroller_ref){
var map__47325 = p__47324;
var map__47325__$1 = cljs.core.__destructure_map(map__47325);
var option_STAR_ = map__47325__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47325__$1,new cljs.core.Keyword(null,"input","input",556931961));
var view_parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47325__$1,new cljs.core.Keyword(null,"view-parent","view-parent",675596601));
var sorting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47325__$1,new cljs.core.Keyword(null,"sorting","sorting",622249690));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47325__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var on_first_table_paint_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47325__$1,new cljs.core.Keyword(null,"on-first-table-paint!","on-first-table-paint!",1107280735));
var full_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47325__$1,new cljs.core.Keyword(null,"full-data","full-data",-1430830367));
var group_by_property_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47325__$1,new cljs.core.Keyword(null,"group-by-property-ident","group-by-property-ident",1221613316));
var set_filters_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47325__$1,new cljs.core.Keyword(null,"set-filters!","set-filters!",385623142));
var filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47325__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47325__$1,new cljs.core.Keyword(null,"config","config",994861415));
var set_sorting_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47325__$1,new cljs.core.Keyword(null,"set-sorting!","set-sorting!",543042376));
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47325__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var add_new_object_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47325__$1,new cljs.core.Keyword(null,"add-new-object!","add-new-object!",622560106));
var set_data_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47325__$1,new cljs.core.Keyword(null,"set-data!","set-data!",150955183));
var foldable_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47325__$1,new cljs.core.Keyword(null,"foldable-options","foldable-options",1611436976));
var set_input_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47325__$1,new cljs.core.Keyword(null,"set-input!","set-input!",-615513292));
var display_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47325__$1,new cljs.core.Keyword(null,"display-type","display-type",-749971179));
var view_partition = new cljs.core.Keyword(null,"partition","partition",1174740751).cljs$core$IFn$_invoke$arity$1(option_STAR_);
var vec__47326 = logseq.shui.hooks.use_state(frontend.components.views.view_head_ready_on_mount_QMARK_(display_type,view_partition,data));
var head_ready_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47326,(0),null);
var set_head_ready_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47326,(1),null);
var journals_QMARK_ = new cljs.core.Keyword(null,"journals?","journals?",1584679180).cljs$core$IFn$_invoke$arity$1(config);
var option = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(option_STAR_,new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.vec(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"select","select",1147833503),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),columns)),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","name","block/name",1619760316)], 0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-first-table-paint!","on-first-table-paint!",1107280735),(function (){
(set_head_ready_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_head_ready_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_head_ready_BANG_.call(null,true));

if(cljs.core.truth_(on_first_table_paint_BANG_)){
return (on_first_table_paint_BANG_.cljs$core$IFn$_invoke$arity$0 ? on_first_table_paint_BANG_.cljs$core$IFn$_invoke$arity$0() : on_first_table_paint_BANG_.call(null));
} else {
return null;
}
})], 0));
var visible_columns = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var temp__5823__auto__ = new cljs.core.Keyword("logseq.property.table","hidden-columns","logseq.property.table/hidden-columns",975057192).cljs$core$IFn$_invoke$arity$1(view_entity);
if(cljs.core.truth_(temp__5823__auto__)){
var hidden_columns = temp__5823__auto__;
return cljs.core.zipmap(hidden_columns,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(false));
} else {
if(cljs.core.seq(new cljs.core.Keyword("logseq.property.table","ordered-columns","logseq.property.table/ordered-columns",1485587100).cljs$core$IFn$_invoke$arity$1(view_entity))){
return cljs.core.zipmap(clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),columns)),cljs.core.set(new cljs.core.Keyword("logseq.property.table","ordered-columns","logseq.property.table/ordered-columns",1485587100).cljs$core$IFn$_invoke$arity$1(view_entity)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),null,new cljs.core.Keyword("block","created-at","block/created-at",1440015),null,new cljs.core.Keyword(null,"select","select",1147833503),null], null), null)], 0)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(false));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}
})(),new cljs.core.Keyword(null,"id","id",-1388402092),false);
var ordered_columns = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503)], null),new cljs.core.Keyword("logseq.property.table","ordered-columns","logseq.property.table/ordered-columns",1485587100).cljs$core$IFn$_invoke$arity$1(view_entity)));
var sized_columns = new cljs.core.Keyword("logseq.property.table","sized-columns","logseq.property.table/sized-columns",-1675510555).cljs$core$IFn$_invoke$arity$1(view_entity);
var map__47329 = frontend.components.views.db_set_table_state_BANG_(view_entity,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"set-sorting!","set-sorting!",543042376),set_sorting_BANG_,new cljs.core.Keyword(null,"set-filters!","set-filters!",385623142),set_filters_BANG_], null));
var map__47329__$1 = cljs.core.__destructure_map(map__47329);
var set_sorting_BANG___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47329__$1,new cljs.core.Keyword(null,"set-sorting!","set-sorting!",543042376));
var set_filters_BANG___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47329__$1,new cljs.core.Keyword(null,"set-filters!","set-filters!",385623142));
var set_visible_columns_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47329__$1,new cljs.core.Keyword(null,"set-visible-columns!","set-visible-columns!",729806223));
var set_ordered_columns_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47329__$1,new cljs.core.Keyword(null,"set-ordered-columns!","set-ordered-columns!",-315299263));
var set_sized_columns_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47329__$1,new cljs.core.Keyword(null,"set-sized-columns!","set-sized-columns!",899502581));
var vec__47330 = logseq.shui.hooks.use_state((function (){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()));
}));
var selection_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47330,(0),null);
var columns__$1 = frontend.components.views.sort_columns(columns,ordered_columns);
var select_QMARK_ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (item){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"select","select",1147833503));
}),columns__$1));
var id_QMARK_ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (item){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"id","id",-1388402092));
}),columns__$1));
var pinned_properties = cljs.core.set((function (){var G__47334 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("logseq.property.table","pinned-columns","logseq.property.table/pinned-columns",267375138).cljs$core$IFn$_invoke$arity$1(view_entity));
var G__47334__$1 = (cljs.core.truth_(id_QMARK_)?cljs.core.cons(new cljs.core.Keyword(null,"id","id",-1388402092),G__47334):G__47334);
if(cljs.core.truth_(select_QMARK_)){
return cljs.core.cons(new cljs.core.Keyword(null,"select","select",1147833503),G__47334__$1);
} else {
return G__47334__$1;
}
})());
var map__47333 = cljs.core.group_by((function (item){
return cljs.core.contains_QMARK_(pinned_properties,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (column){
return ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(visible_columns,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column)) === false) || ((new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(column) == null)));
}),columns__$1));
var map__47333__$1 = cljs.core.__destructure_map(map__47333);
var pinned = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47333__$1,true);
var unpinned = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47333__$1,false);
var group_by_property = (function (){var or__5142__auto__ = new cljs.core.Keyword("logseq.property.view","group-by-property","logseq.property.view/group-by-property",809216236).cljs$core$IFn$_invoke$arity$1(view_entity);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.some((function (column){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column),group_by_property_ident)){
return frontend.components.views.column_property(column);
} else {
return null;
}
}),columns__$1);
}
})();
var row_selection = frontend.components.views.get_table_row_selection(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selection-id","selection-id",985859565),selection_id], null)], null));
var table_map = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"view-entity","view-entity",-1084117808),view_entity,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"full-data","full-data",-1430830367),full_data,new cljs.core.Keyword(null,"full-data-loading?","full-data-loading?",-114331344),new cljs.core.Keyword(null,"full-data-loading?","full-data-loading?",-114331344).cljs$core$IFn$_invoke$arity$1(option_STAR_),new cljs.core.Keyword(null,"columns","columns",1998437288),columns__$1,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ordered-columns","ordered-columns",-1323374524),new cljs.core.Keyword(null,"visible-columns","visible-columns",1134718660),new cljs.core.Keyword(null,"group-by-property","group-by-property",1732754405),new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"selection-id","selection-id",985859565),new cljs.core.Keyword(null,"last-selected-idx","last-selected-idx",2024080238),new cljs.core.Keyword(null,"unpinned-columns","unpinned-columns",1124489041),new cljs.core.Keyword(null,"row-selection","row-selection",1964656498),new cljs.core.Keyword(null,"pinned-columns","pinned-columns",-1218428870),new cljs.core.Keyword(null,"sorting","sorting",622249690),new cljs.core.Keyword(null,"sized-columns","sized-columns",-224617731)],[ordered_columns,visible_columns,group_by_property,filters,selection_id,frontend.components.views.get_table_last_selected_idx(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selection-id","selection-id",985859565),selection_id], null)], null)),unpinned,row_selection,pinned,sorting,sized_columns]),new cljs.core.Keyword(null,"data-fns","data-fns",-1065218324),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"set-ordered-columns!","set-ordered-columns!",-315299263),new cljs.core.Keyword(null,"set-row-selection!","set-row-selection!",1872995139),new cljs.core.Keyword(null,"set-filters!","set-filters!",385623142),new cljs.core.Keyword(null,"set-sorting!","set-sorting!",543042376),new cljs.core.Keyword(null,"add-new-object!","add-new-object!",622560106),new cljs.core.Keyword(null,"set-data!","set-data!",150955183),new cljs.core.Keyword(null,"set-visible-columns!","set-visible-columns!",729806223),new cljs.core.Keyword(null,"set-sized-columns!","set-sized-columns!",899502581),new cljs.core.Keyword(null,"set-last-selected-idx!","set-last-selected-idx!",1750927071)],[set_ordered_columns_BANG_,(function (p1__47322_SHARP_){
return frontend.components.views.set_table_row_selection_BANG_(selection_id,p1__47322_SHARP_);
}),set_filters_BANG___$1,set_sorting_BANG___$1,add_new_object_BANG_,set_data_BANG_,set_visible_columns_BANG_,set_sized_columns_BANG_,(function (p1__47323_SHARP_){
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view","table-selection","view/table-selection",-2120640246),selection_id,new cljs.core.Keyword(null,"last-selected-idx","last-selected-idx",2024080238)], null),p1__47323_SHARP_);
})])], null);
var table = (function (){var table = (logseq.shui.ui.table_option.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.table_option.cljs$core$IFn$_invoke$arity$1(table_map) : logseq.shui.ui.table_option.call(null,table_map));
var row_selection__$1 = frontend.components.views.get_table_row_selection(table);
var map__47335 = frontend.components.views.table_selection_summary(table,row_selection__$1);
var map__47335__$1 = cljs.core.__destructure_map(map__47335);
var selected_all_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47335__$1,new cljs.core.Keyword(null,"selected-all?","selected-all?",1723040507));
var selected_some_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47335__$1,new cljs.core.Keyword(null,"selected-some?","selected-some?",-1877870503));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(table,new cljs.core.Keyword(null,"selected-all?","selected-all?",1723040507),selected_all_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected-some?","selected-some?",-1877870503),selected_some_QMARK_,new cljs.core.Keyword(null,"row-selected?","row-selected?",165215850),(function (row){
return frontend.components.views.table_row_selected_QMARK_(frontend.components.views.get_table_row_selection(table),frontend.components.views.table_row_id(row));
}),new cljs.core.Keyword(null,"row-toggle-selected!","row-toggle-selected!",1549823697),(function (_row_selection,row,value){
return frontend.components.views.table_toggle_row_selected_BANG_(table,row,value);
}),new cljs.core.Keyword(null,"toggle-selected-all!","toggle-selected-all!",-649409852),(function (table__$1,value){
return frontend.components.views.table_toggle_selected_all_BANG_(table__$1,value);
})], 0));
})();
var _STAR_view_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var gallery_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(display_type,new cljs.core.Keyword("logseq.property.view","type.gallery","logseq.property.view/type.gallery",150605112));
var list_view_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(display_type,new cljs.core.Keyword("logseq.property.view","type.list","logseq.property.view/type.list",-1164828502));
var disable_virtualized_QMARK_ = journals_QMARK_;
logseq.shui.hooks.use_effect_BANG_((function (){
return (function (){
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view","table-selection","view/table-selection",-2120640246),selection_id], null),null);
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selection_id], null));

logseq.shui.hooks.use_effect_BANG_((function (){
if(frontend.components.views.view_head_ready_on_mount_QMARK_(display_type,view_partition,data)){
(set_head_ready_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_head_ready_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_head_ready_BANG_.call(null,true));

if(cljs.core.truth_(on_first_table_paint_BANG_)){
(on_first_table_paint_BANG_.cljs$core$IFn$_invoke$arity$0 ? on_first_table_paint_BANG_.cljs$core$IFn$_invoke$arity$0() : on_first_table_paint_BANG_.call(null));
} else {
}
} else {
}

return undefined;
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_type,view_partition,frontend.components.views.empty_table_ready_on_mount_QMARK_(data)], null));

frontend.components.views.run_effects_BANG_(option,table_map,_STAR_scroller_ref,gallery_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-2.grid","div.flex.flex-col.gap-2.grid",-558651489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_view_ref], null),frontend.ui.foldable((cljs.core.truth_(head_ready_QMARK_)?frontend.components.views.view_head(view_parent,view_entity,table,columns__$1,input,sorting,set_input_BANG_,add_new_object_BANG_,option):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-view-head","div.ls-view-head",-477783049)], null)),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-view-body.flex.flex-col.gap-2.grid.mt-1","div.ls-view-body.flex.flex-col.gap-2.grid.mt-1",-1314659314),frontend.components.views.filters_row(view_entity,table,option),(function (){var view_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"*scroller-ref","*scroller-ref",-635636256),_STAR_scroller_ref,new cljs.core.Keyword(null,"display-type","display-type",-749971179),display_type,new cljs.core.Keyword(null,"row-selection","row-selection",1964656498),row_selection,new cljs.core.Keyword(null,"add-new-object!","add-new-object!",622560106),add_new_object_BANG_], null);
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grouped","grouped",15624546),null,new cljs.core.Keyword(null,"grouped-list","grouped-list",-125657687),null], null), null),new cljs.core.Keyword(null,"partition","partition",1174740751).cljs$core$IFn$_invoke$arity$1(option))){
if(cljs.core.seq(new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(table))){
if(gallery_QMARK_){
return frontend.components.views.grouped_gallery_view(table_map,table,option,view_entity,new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(table),row_selection,group_by_property,group_by_property_ident,_STAR_scroller_ref);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.border-t.pt-2.gap-2","div.flex.flex-col.border-t.pt-2.gap-2",-1423751738),frontend.components.views.virtualized_list(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"class","class",-2030961996),((list_view_QMARK_)?"group-list-view":null),new cljs.core.Keyword(null,"custom-scroll-parent","custom-scroll-parent",1031485618),frontend.util.app_scroll_container_node.cljs$core$IFn$_invoke$arity$1(logseq.shui.hooks.deref(_STAR_view_ref)),new cljs.core.Keyword(null,"increase-viewport-by","increase-viewport-by",1517073864),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),(300),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(300)], null),new cljs.core.Keyword(null,"compute-item-key","compute-item-key",-621146487),(function (idx){
return (""+"table-group"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx));
}),new cljs.core.Keyword(null,"skipAnimationFrameInResizeObserver","skipAnimationFrameInResizeObserver",1677982016),true,new cljs.core.Keyword(null,"total-count","total-count",-1999441386),cljs.core.count(new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(table)),new cljs.core.Keyword(null,"item-content","item-content",1656730280),(function (idx){
var vec__47336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(table),idx);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47336,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47336,(1),null);
var table_SINGLEQUOTE_ = (function (){var G__47339 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(table_map,new cljs.core.Keyword(null,"data","data",-232669377),group);
return (logseq.shui.ui.table_option.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.table_option.cljs$core$IFn$_invoke$arity$1(G__47339) : logseq.shui.ui.table_option.call(null,G__47339));
})();
return frontend.components.views.group_item(view_entity,table_SINGLEQUOTE_,group,group_by_property,value,option,view_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"list-view?","list-view?",499477951),list_view_QMARK_,new cljs.core.Keyword(null,"group-by-page?","group-by-page?",1520059448),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","page","block/page",822314108),group_by_property_ident),new cljs.core.Keyword(null,"add-new-object!","add-new-object!",622560106),add_new_object_BANG_,new cljs.core.Keyword(null,"outer-table","outer-table",378702779),table,new cljs.core.Keyword(null,"readable-property-value","readable-property-value",1052317566),frontend.components.views.group_readable_property_value], null));
})], null),disable_virtualized_QMARK_)], null);
}
} else {
return null;
}
} else {
return frontend.components.views.view_cp(view_entity,table,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(option,new cljs.core.Keyword(null,"group-by-property-ident","group-by-property-ident",1221613316),group_by_property_ident,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"disable-virtualized?","disable-virtualized?",-1546442714),disable_virtualized_QMARK_], 0)),view_opts);
}
})()], null);
}),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title-trigger?","title-trigger?",-613599873),false], null),foldable_options], 0)))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$view_inner__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47340 = cljs.core.first(args__31746__auto__);
var G__47341 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47340,G__47341) : io.factorhouse.hsx.core.obj_get.call(null,G__47340,G__47341));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"view-inner","view-inner",-310522451,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$views$view_inner,args__31746__auto__,null);
}
};
var frontend$components$views$view_inner = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47680__i = 0, G__47680__a = new Array(arguments.length -  0);
while (G__47680__i < G__47680__a.length) {G__47680__a[G__47680__i] = arguments[G__47680__i + 0]; ++G__47680__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47680__a,0,null);
} 
return frontend$components$views$view_inner__delegate.call(this,args__31746__auto__);};
frontend$components$views$view_inner.cljs$lang$maxFixedArity = 0;
frontend$components$views$view_inner.cljs$lang$applyTo = (function (arglist__47681){
var args__31746__auto__ = cljs.core.seq(arglist__47681);
return frontend$components$views$view_inner__delegate(args__31746__auto__);
});
frontend$components$views$view_inner.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$view_inner__delegate;
return frontend$components$views$view_inner;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47342 = comp__31745__auto__;
var G__47343 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47342,G__47343) : io.factorhouse.hsx.core.react_memo.call(null,G__47342,G__47343));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"view-inner");

return comp__31745__auto__;
})();
/**
 * Pending views have a UUID before db/id. Keying on db/id remounted
 *   All Pages / Tags / Movies after the first-window titles were ready.
 */
frontend.components.views.view_instance_key = (function frontend$components$views$view_instance_key(view_entity){
return (""+"view-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(view_entity);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(view_entity);
}
})()));
});
/**
 * Provides a view for data like query results and tagged objects, multiple
 * layouts such as table and list are supported. Args:
 * * view-entity: a db Entity
 * * option:
 *   * title-key: dict key defaults to `:view.table/default-title`
 *   * data: a collections of entities
 *   * set-data!: `fn` to update `data`
 *   * columns: view columns including properties and db attributes, which could be built by `build-columns`
 *   * add-new-object!: `fn` to create a new object (or row)
 *   * show-add-property?: whether to show `Add property`
 *   * add-property!: `fn` to add a new property (or column)
 */
frontend.components.views.view_container = (function (){var render_fn__31744__auto__ = (function frontend$components$views$view_container(view_entity,option){
var _STAR_scroller_ref = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}),cljs.core.PersistentVector.EMPTY);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.views.view_inner,view_entity,(function (){var G__47344 = option;
if(cljs.core.truth_((function (){var or__5142__auto__ = frontend.config.publishing_QMARK_;
if(or__5142__auto__){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("logseq.property.view","group-by-property","logseq.property.view/group-by-property",809216236).cljs$core$IFn$_invoke$arity$1(view_entity);
}
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__47344,new cljs.core.Keyword(null,"add-new-object!","add-new-object!",622560106));
} else {
return G__47344;
}
})(),_STAR_scroller_ref], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),frontend.components.views.view_instance_key(view_entity)], null));
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$view_container__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47345 = cljs.core.first(args__31746__auto__);
var G__47346 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47345,G__47346) : io.factorhouse.hsx.core.obj_get.call(null,G__47345,G__47346));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"view-container","view-container",563433439,null),args__31746__auto__),frontend$components$views$view_container,args__31746__auto__,null);
}
};
var frontend$components$views$view_container = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47682__i = 0, G__47682__a = new Array(arguments.length -  0);
while (G__47682__i < G__47682__a.length) {G__47682__a[G__47682__i] = arguments[G__47682__i + 0]; ++G__47682__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47682__a,0,null);
} 
return frontend$components$views$view_container__delegate.call(this,args__31746__auto__);};
frontend$components$views$view_container.cljs$lang$maxFixedArity = 0;
frontend$components$views$view_container.cljs$lang$applyTo = (function (arglist__47683){
var args__31746__auto__ = cljs.core.seq(arglist__47683);
return frontend$components$views$view_container__delegate(args__31746__auto__);
});
frontend$components$views$view_container.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$view_container__delegate;
return frontend$components$views$view_container;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47347 = comp__31745__auto__;
var G__47348 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47347,G__47348) : io.factorhouse.hsx.core.react_memo.call(null,G__47347,G__47348));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"view-container");

return comp__31745__auto__;
})();
frontend.components.views.get_query_columns = (function frontend$components$views$get_query_columns(config,view_entity,properties){
var advanced_query_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword("logseq.property.node","display-type","logseq.property.node/display-type",442446189).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("logseq.property","query","logseq.property/query",-97414126).cljs$core$IFn$_invoke$arity$1(view_entity)));
return (function (cs){
return frontend.components.views.build_columns.cljs$core$IFn$_invoke$arity$variadic(config,cs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"add-tags-column?","add-tags-column?",708044916),false,new cljs.core.Keyword(null,"advanced-query?","advanced-query?",692769688),advanced_query_QMARK_], null)], 0));
})(logseq.db.sort_by_order(properties));
});
frontend.components.views.view_display_type = (function frontend$components$views$view_display_type(view_entity,view_feature_type){
var view_type = new cljs.core.Keyword("logseq.property.view","type","logseq.property.view/type",218237607).cljs$core$IFn$_invoke$arity$1(view_entity);
var or__5142__auto__ = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(view_type);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"linked-references","linked-references",-2117592379),null,new cljs.core.Keyword(null,"unlinked-references","unlinked-references",1918870007),null], null), null),view_feature_type))?new cljs.core.Keyword("logseq.property.view","type.list","logseq.property.view/type.list",-1164828502):null);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword("logseq.property.view","type.table","logseq.property.view/type.table",194254240);
}
}
});
frontend.components.views.default_view_sorting = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),new cljs.core.Keyword(null,"asc?","asc?",891093427),false], null)], null);
frontend.components.views.effective_view_sorting = (function frontend$components$views$effective_view_sorting(view_entity){
var sorting = new cljs.core.Keyword("logseq.property.table","sorting","logseq.property.table/sorting",208102594).cljs$core$IFn$_invoke$arity$1(view_entity);
var empty_placeholder_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sorting,new cljs.core.Keyword("logseq.property","empty-placeholder","logseq.property/empty-placeholder",-1595021837))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(sorting),new cljs.core.Keyword("logseq.property","empty-placeholder","logseq.property/empty-placeholder",-1595021837))));
if((((sorting == null)) || (((empty_placeholder_QMARK_) || (((cljs.core.coll_QMARK_(sorting)) && (cljs.core.empty_QMARK_(sorting)))))))){
return frontend.components.views.default_view_sorting;
} else {
if(cljs.core.vector_QMARK_(sorting)){
return sorting;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid view sorting",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sorting","sorting",622249690),sorting], null));

}
}
});
frontend.components.views.view_data__GT_rows = (function frontend$components$views$view_data__GT_rows(p__47349){
var map__47350 = p__47349;
var map__47350__$1 = cljs.core.__destructure_map(map__47350);
var view_data = map__47350__$1;
var view_partition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47350__$1,new cljs.core.Keyword(null,"partition","partition",1174740751));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47350__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var groups = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47350__$1,new cljs.core.Keyword(null,"groups","groups",-136896102));
var G__47351 = view_partition;
var G__47351__$1 = (((G__47351 instanceof cljs.core.Keyword))?G__47351.fqn:null);
switch (G__47351__$1) {
case "flat":
return rows;

break;
case "grouped":
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"rows","rows",850049680)),groups);

break;
case "grouped-list":
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__47352){
var map__47353 = p__47352;
var map__47353__$1 = cljs.core.__destructure_map(map__47353);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47353__$1,new cljs.core.Keyword(null,"value","value",305978217));
var partitions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47353__$1,new cljs.core.Keyword(null,"partitions","partitions",602979514));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__47354){
var map__47355 = p__47354;
var map__47355__$1 = cljs.core.__destructure_map(map__47355);
var breadcrumb_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47355__$1,new cljs.core.Keyword(null,"breadcrumb-uuid","breadcrumb-uuid",-536981973));
var rows__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47355__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [breadcrumb_uuid,rows__$1], null);
}),partitions)], null);
}),groups);

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid view data partition",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view-data","view-data",461796245),view_data], null));

}
});
frontend.components.views.unsupported_view_filter_clause_QMARK_ = (function frontend$components$views$unsupported_view_filter_clause_QMARK_(view_feature_type,clause){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_feature_type,new cljs.core.Keyword(null,"all-pages","all-pages",1017563062))) && (((cljs.core.vector_QMARK_(clause)) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,new cljs.core.Keyword("block.temp","refs-count","block.temp/refs-count",-598132499),null], null), null),cljs.core.first(clause))))));
});
frontend.components.views.view_resource_filters = (function frontend$components$views$view_resource_filters(view_feature_type,filters){
var G__47357 = filters;
if((G__47357 == null)){
return null;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__47357,new cljs.core.Keyword(null,"filters","filters",974726919),(function (clauses){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__47356_SHARP_){
return frontend.components.views.unsupported_view_filter_clause_QMARK_(view_feature_type,p1__47356_SHARP_);
})),clauses);
}));
}
});
frontend.components.views.view_resource_context = (function frontend$components$views$view_resource_context(view_feature_type,sorting,filters,input,group_by_property_ident,query_row_uuids,initial_row_count){
var filters__$1 = frontend.components.views.view_resource_filters(view_feature_type,filters);
var G__47358 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"feature-type","feature-type",487208976),view_feature_type,new cljs.core.Keyword(null,"sorting","sorting",622249690),sorting,new cljs.core.Keyword(null,"input","input",556931961),input], null);
var G__47358__$1 = (((!((filters__$1 == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47358,new cljs.core.Keyword(null,"filters","filters",974726919),filters__$1):G__47358);
var G__47358__$2 = (cljs.core.truth_(group_by_property_ident)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47358__$1,new cljs.core.Keyword(null,"group-by-property-ident","group-by-property-ident",1221613316),group_by_property_ident):G__47358__$1);
var G__47358__$3 = (cljs.core.truth_(initial_row_count)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47358__$2,new cljs.core.Keyword(null,"initial-row-count","initial-row-count",680426329),initial_row_count):G__47358__$2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"query-result","query-result",-833644142),view_feature_type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47358__$3,new cljs.core.Keyword(null,"query-row-uuids","query-row-uuids",-820908054),query_row_uuids);
} else {
return G__47358__$3;
}
});
frontend.components.views.loaded_view_resource_plan = (function frontend$components$views$loaded_view_resource_plan(view_uuid,view_feature_type,sorting,filters,input,group_by_property_ident,query_row_uuids,viewport_height){
var initial_row_count = ((frontend.components.views.windowed_view_feature_QMARK_(view_feature_type,group_by_property_ident))?frontend.components.views.initial_view_prefetch_count(viewport_height,frontend.components.views.lazy_item_placeholder_height(true)):null);
var window_context = (cljs.core.truth_(initial_row_count)?frontend.components.views.view_resource_context(view_feature_type,sorting,filters,input,group_by_property_ident,query_row_uuids,initial_row_count):null);
var full_context = frontend.components.views.view_resource_context(view_feature_type,sorting,filters,input,group_by_property_ident,query_row_uuids,null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"initial-row-count","initial-row-count",680426329),initial_row_count,new cljs.core.Keyword(null,"window-context","window-context",279359924),window_context,new cljs.core.Keyword(null,"full-context","full-context",-1521116940),full_context,new cljs.core.Keyword(null,"resource-key","resource-key",1916750066),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view-data","view-data",461796245),view_uuid,(function (){var or__5142__auto__ = window_context;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return full_context;
}
})()], null),new cljs.core.Keyword(null,"full-key","full-key",-471316023),(cljs.core.truth_(window_context)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view-data","view-data",461796245),view_uuid,full_context], null):null)], null);
});
frontend.components.views.loaded_view_paint = (function frontend$components$views$loaded_view_paint(view_data){
if((view_data == null)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ready?","ready?",-105765697),false], null);
} else {
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ready?","ready?",-105765697),true,new cljs.core.Keyword(null,"rows","rows",850049680),frontend.components.views.view_data__GT_rows(view_data),new cljs.core.Keyword(null,"items-count","items-count",-135458025),new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(view_data),new cljs.core.Keyword(null,"partition","partition",1174740751),new cljs.core.Keyword(null,"partition","partition",1174740751).cljs$core$IFn$_invoke$arity$1(view_data),new cljs.core.Keyword(null,"view-data","view-data",461796245),view_data], null);
}
});
frontend.components.views.view_paint_source = (function frontend$components$views$view_paint_source(view_data,previous_view_data){
var or__5142__auto__ = view_data;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return previous_view_data;
}
});
frontend.components.views.loaded_view_aux = (function (){var render_fn__31744__auto__ = (function frontend$components$views$loaded_view_aux(view_entity,p__47359){
var map__47360 = p__47359;
var map__47360__$1 = cljs.core.__destructure_map(map__47360);
var option = map__47360__$1;
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47360__$1,new cljs.core.Keyword(null,"config","config",994861415));
var view_feature_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47360__$1,new cljs.core.Keyword(null,"view-feature-type","view-feature-type",-945869610));
var query_row_uuids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47360__$1,new cljs.core.Keyword(null,"query-row-uuids","query-row-uuids",-820908054));
var deactivate_deferred_view_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47360__$1,new cljs.core.Keyword(null,"deactivate-deferred-view!","deactivate-deferred-view!",-2098247164));
var vec__47361 = logseq.shui.hooks.use_state("");
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47361,(0),null);
var set_input_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47361,(1),null);
var group_by_property = new cljs.core.Keyword("logseq.property.view","group-by-property","logseq.property.view/group-by-property",809216236).cljs$core$IFn$_invoke$arity$1(view_entity);
var display_type = frontend.components.views.view_display_type(view_entity,view_feature_type);
var list_view_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(display_type,new cljs.core.Keyword("logseq.property.view","type.list","logseq.property.view/type.list",-1164828502));
var group_by_property_ident = (function (){var or__5142__auto__ = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(group_by_property);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(((list_view_QMARK_) && ((group_by_property == null)))){
return new cljs.core.Keyword("block","page","block/page",822314108);
} else {
return null;
}
}
})();
var sorting = frontend.components.views.effective_view_sorting(view_entity);
var filters = frontend.components.views.view_resource_filters(view_feature_type,new cljs.core.Keyword("logseq.property.table","filters","logseq.property.table/filters",-1702393633).cljs$core$IFn$_invoke$arity$1(view_entity));
var debounced_input = logseq.shui.hooks.use_debounced_value(input,(300));
var viewport_height = frontend.components.views.measured_viewport_height((function (){var G__47376 = frontend.components.views.get_scroll_parent(config);
if((G__47376 == null)){
return null;
} else {
return G__47376.clientHeight;
}
})(),window.innerHeight);
var plan = frontend.components.views.loaded_view_resource_plan(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(view_entity),view_feature_type,sorting,filters,debounced_input,group_by_property_ident,query_row_uuids,viewport_height);
var window_context = new cljs.core.Keyword(null,"window-context","window-context",279359924).cljs$core$IFn$_invoke$arity$1(plan);
var window_context_key = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([window_context], 0));
var window_or_full_data = frontend.db.hooks.use_resource(new cljs.core.Keyword(null,"resource-key","resource-key",1916750066).cljs$core$IFn$_invoke$arity$1(plan));
var vec__47364 = logseq.shui.hooks.use_state(null);
var previous_view_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47364,(0),null);
var set_previous_view_data_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47364,(1),null);
var vec__47367 = logseq.shui.hooks.use_state(false);
var full_data_active_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47367,(0),null);
var set_full_data_active_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47367,(1),null);
var full_snapshot = frontend.db.hooks.use_resource_snapshot((cljs.core.truth_(full_data_active_QMARK_)?new cljs.core.Keyword(null,"full-key","full-key",-471316023).cljs$core$IFn$_invoke$arity$1(plan):null));
var vec__47370 = logseq.shui.hooks.use_state(null);
var row_offset_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47370,(0),null);
var set_row_offset_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47370,(1),null);
var vec__47373 = logseq.shui.hooks.use_state(null);
var stale_offset_window = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47373,(0),null);
var set_stale_offset_window_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47373,(1),null);
var _STAR_view_layout = (function (){var G__47377 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_type,group_by_property_ident], null);
return (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(G__47377) : logseq.shui.hooks.use_ref.call(null,G__47377));
})();
var row_offset = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(row_offset_state),window_context))?new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(row_offset_state):null);
var set_current_row_offset_BANG_ = (function (row_offset__$1){
var G__47378 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"offset","offset",296498311),row_offset__$1,new cljs.core.Keyword(null,"context","context",-830191113),window_context], null);
return (set_row_offset_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_row_offset_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__47378) : set_row_offset_state_BANG_.call(null,G__47378));
});
var matched_stale_offset_window = frontend.components.views.matching_stale_offset_window(stale_offset_window,window_context);
var offset_key = frontend.components.views.offset_view_data_key(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(view_entity),window_context,row_offset);
var offset_snapshot = frontend.db.hooks.use_resource_snapshot(offset_key);
var offset_data = (cljs.core.truth_(offset_key)?(function (){var G__47379 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(offset_snapshot);
var G__47379__$1 = (((G__47379 instanceof cljs.core.Keyword))?G__47379.fqn:null);
switch (G__47379__$1) {
case "ready":
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(offset_snapshot);

break;
case "error":
throw new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(offset_snapshot);

break;
default:
return null;

}
})():null);
var full_view_data = (cljs.core.truth_((function (){var and__5140__auto__ = full_data_active_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"full-key","full-key",-471316023).cljs$core$IFn$_invoke$arity$1(plan);
} else {
return and__5140__auto__;
}
})())?(function (){var G__47380 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(full_snapshot);
var G__47380__$1 = (((G__47380 instanceof cljs.core.Keyword))?G__47380.fqn:null);
switch (G__47380__$1) {
case "ready":
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(full_snapshot);

break;
case "error":
throw new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(full_snapshot);

break;
default:
return null;

}
})():null);
var view_data = frontend.components.views.view_paint_source(window_or_full_data,previous_view_data);
var paint = frontend.components.views.loaded_view_paint(view_data);
var all_row_ids = (cljs.core.truth_(new cljs.core.Keyword(null,"ready?","ready?",-105765697).cljs$core$IFn$_invoke$arity$1(paint))?frontend.components.views.view_data__GT_rows(view_data):null);
var full_rows = (cljs.core.truth_(new cljs.core.Keyword(null,"full-key","full-key",-471316023).cljs$core$IFn$_invoke$arity$1(plan))?(function (){var G__47381 = full_view_data;
if((G__47381 == null)){
return null;
} else {
return frontend.components.views.view_data__GT_rows(G__47381);
}
})():all_row_ids);
var offset_rows = (cljs.core.truth_(offset_data)?frontend.components.views.view_data__GT_rows(offset_data):null);
var row_previews = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"row-previews","row-previews",1767259697).cljs$core$IFn$_invoke$arity$1(view_data),new cljs.core.Keyword(null,"previews","previews",-388670715).cljs$core$IFn$_invoke$arity$1(matched_stale_offset_window),new cljs.core.Keyword(null,"row-previews","row-previews",1767259697).cljs$core$IFn$_invoke$arity$1(offset_data)], 0));
var query_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_feature_type,new cljs.core.Keyword(null,"query-result","query-result",-833644142));
var properties = new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(view_data);
var option__$1 = (function (){var G__47382 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(option,new cljs.core.Keyword(null,"view-parent","view-parent",675596601),new cljs.core.Keyword("logseq.property","view-for","logseq.property/view-for",-36274319).cljs$core$IFn$_invoke$arity$1(view_entity));
var G__47382__$1 = ((query_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47382,new cljs.core.Keyword(null,"columns","columns",1998437288),frontend.components.views.get_query_columns(config,view_entity,properties)):G__47382);
var G__47382__$2 = (cljs.core.truth_(deactivate_deferred_view_BANG_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47382__$1,new cljs.core.Keyword(null,"foldable-options","foldable-options",1611436976),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-collapsed?","default-collapsed?",-1350393823),false,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (collapsed_QMARK_){
if(cljs.core.truth_(collapsed_QMARK_)){
return (deactivate_deferred_view_BANG_.cljs$core$IFn$_invoke$arity$0 ? deactivate_deferred_view_BANG_.cljs$core$IFn$_invoke$arity$0() : deactivate_deferred_view_BANG_.call(null));
} else {
return null;
}
})], null)):G__47382__$1);
if(cljs.core.seq(row_previews)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47382__$2,new cljs.core.Keyword(null,"row-previews","row-previews",1767259697),row_previews);
} else {
return G__47382__$2;
}
})();
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(window_or_full_data)){
(set_previous_view_data_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_previous_view_data_BANG_.cljs$core$IFn$_invoke$arity$1(window_or_full_data) : set_previous_view_data_BANG_.call(null,window_or_full_data));
} else {
}

return undefined;
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [window_or_full_data], null));

logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_((function (){var and__5140__auto__ = offset_data;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.integer_QMARK_(row_offset);
} else {
return and__5140__auto__;
}
})())){
var G__47383_47687 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"row-offset","row-offset",-1310990952),row_offset,new cljs.core.Keyword(null,"rows","rows",850049680),frontend.components.views.view_data__GT_rows(offset_data),new cljs.core.Keyword(null,"previews","previews",-388670715),new cljs.core.Keyword(null,"row-previews","row-previews",1767259697).cljs$core$IFn$_invoke$arity$1(offset_data),new cljs.core.Keyword(null,"context","context",-830191113),window_context], null);
(set_stale_offset_window_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_stale_offset_window_BANG_.cljs$core$IFn$_invoke$arity$1(G__47383_47687) : set_stale_offset_window_BANG_.call(null,G__47383_47687));
} else {
}

return null;
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_offset,offset_data,window_context_key], null));

logseq.shui.hooks.use_effect_BANG_((function (){
(set_row_offset_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_row_offset_state_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_row_offset_state_BANG_.call(null,null));

(set_stale_offset_window_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_stale_offset_window_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_stale_offset_window_BANG_.call(null,null));

(set_previous_view_data_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_previous_view_data_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_previous_view_data_BANG_.call(null,null));

return undefined;
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [window_context_key], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var next_layout_47688 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_type,group_by_property_ident], null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(_STAR_view_layout.current,next_layout_47688)){
(_STAR_view_layout.current = next_layout_47688);

(set_previous_view_data_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_previous_view_data_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_previous_view_data_BANG_.call(null,null));

(set_row_offset_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_row_offset_state_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_row_offset_state_BANG_.call(null,null));

(set_stale_offset_window_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_stale_offset_window_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_stale_offset_window_BANG_.call(null,null));
} else {
}

return undefined;
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [display_type,group_by_property_ident], null));

if(cljs.core.not(new cljs.core.Keyword(null,"ready?","ready?",-105765697).cljs$core$IFn$_invoke$arity$1(paint))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.space-2.gap-2.my-2","div.flex.flex-col.space-2.gap-2.my-2",543145494),(function (){var iter__5628__auto__ = (function frontend$components$views$loaded_view_aux_$_iter__47384(s__47385){
return (new cljs.core.LazySeq(null,(function (){
var s__47385__$1 = s__47385;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__47385__$1);
if(temp__5825__auto__){
var s__47385__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47385__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__47385__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__47387 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__47386 = (0);
while(true){
if((i__47386 < size__5627__auto__)){
var idx = cljs.core._nth(c__5626__auto__,i__47386);
cljs.core.chunk_append(b__47387,(function (){var G__47388 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"class","class",-2030961996),"h-6 w-full"], null);
return (logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1(G__47388) : logseq.shui.ui.skeleton.call(null,G__47388));
})());

var G__47689 = (i__47386 + (1));
i__47386 = G__47689;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47387),frontend$components$views$loaded_view_aux_$_iter__47384(cljs.core.chunk_rest(s__47385__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47387),null);
}
} else {
var idx = cljs.core.first(s__47385__$2);
return cljs.core.cons((function (){var G__47389 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"class","class",-2030961996),"h-6 w-full"], null);
return (logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.skeleton.cljs$core$IFn$_invoke$arity$1(G__47389) : logseq.shui.ui.skeleton.call(null,G__47389));
})(),frontend$components$views$loaded_view_aux_$_iter__47384(cljs.core.rest(s__47385__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
})()], null);
} else {
var data = new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(paint);
var notify_windowed_paint_BANG_ = (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"full-key","full-key",-471316023).cljs$core$IFn$_invoke$arity$1(plan))){
(set_full_data_active_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_full_data_active_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_full_data_active_BANG_.call(null,true));
} else {
}

var temp__5825__auto__ = new cljs.core.Keyword(null,"on-first-table-paint!","on-first-table-paint!",1107280735).cljs$core$IFn$_invoke$arity$1(option__$1);
if(cljs.core.truth_(temp__5825__auto__)){
var notify_BANG_ = temp__5825__auto__;
return (notify_BANG_.cljs$core$IFn$_invoke$arity$0 ? notify_BANG_.cljs$core$IFn$_invoke$arity$0() : notify_BANG_.call(null));
} else {
return null;
}
});
var ignore_BANG_ = (function (_){
return null;
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-2","div.flex.flex-col.gap-2",1564729900),frontend.components.views.view_container(view_entity,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(option__$1,new cljs.core.Keyword(null,"on-viewport-filled!","on-viewport-filled!",325008543),set_current_row_offset_BANG_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-first-table-paint!","on-first-table-paint!",1107280735),notify_windowed_paint_BANG_,new cljs.core.Keyword(null,"initial-row-count","initial-row-count",680426329),new cljs.core.Keyword(null,"initial-row-count","initial-row-count",680426329).cljs$core$IFn$_invoke$arity$1(plan),new cljs.core.Keyword(null,"view-data","view-data",461796245),new cljs.core.Keyword(null,"view-data","view-data",461796245).cljs$core$IFn$_invoke$arity$1(paint),new cljs.core.Keyword(null,"partition","partition",1174740751),new cljs.core.Keyword(null,"partition","partition",1174740751).cljs$core$IFn$_invoke$arity$1(paint),new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"full-data","full-data",-1430830367),full_rows,new cljs.core.Keyword(null,"full-data-loading?","full-data-loading?",-114331344),(function (){var and__5140__auto__ = new cljs.core.Keyword(null,"full-key","full-key",-471316023).cljs$core$IFn$_invoke$arity$1(plan);
if(cljs.core.truth_(and__5140__auto__)){
return (full_rows == null);
} else {
return and__5140__auto__;
}
})(),new cljs.core.Keyword(null,"all-row-ids","all-row-ids",351472952),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flat","flat",577594262),new cljs.core.Keyword(null,"partition","partition",1174740751).cljs$core$IFn$_invoke$arity$1(paint)))?all_row_ids:null),new cljs.core.Keyword(null,"offset-rows","offset-rows",2126795718),offset_rows,new cljs.core.Keyword(null,"row-offset","row-offset",-1310990952),row_offset,new cljs.core.Keyword(null,"stale-offset-rows","stale-offset-rows",104776623),new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(matched_stale_offset_window),new cljs.core.Keyword(null,"stale-row-offset","stale-row-offset",-262353700),new cljs.core.Keyword(null,"row-offset","row-offset",-1310990952).cljs$core$IFn$_invoke$arity$1(matched_stale_offset_window),new cljs.core.Keyword(null,"filters","filters",974726919),(function (){var or__5142__auto__ = filters;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"sorting","sorting",622249690),sorting,new cljs.core.Keyword(null,"set-filters!","set-filters!",385623142),ignore_BANG_,new cljs.core.Keyword(null,"set-sorting!","set-sorting!",543042376),ignore_BANG_,new cljs.core.Keyword(null,"set-data!","set-data!",150955183),ignore_BANG_,new cljs.core.Keyword(null,"set-input!","set-input!",-615513292),set_input_BANG_,new cljs.core.Keyword(null,"input","input",556931961),input,new cljs.core.Keyword(null,"items-count","items-count",-135458025),(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword(null,"full-key","full-key",-471316023).cljs$core$IFn$_invoke$arity$1(plan);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flat","flat",577594262),new cljs.core.Keyword(null,"partition","partition",1174740751).cljs$core$IFn$_invoke$arity$1(paint));
} else {
return and__5140__auto__;
}
})())?frontend.components.views.windowed_items_count(new cljs.core.Keyword(null,"items-count","items-count",-135458025).cljs$core$IFn$_invoke$arity$1(paint),full_rows):new cljs.core.Keyword(null,"items-count","items-count",-135458025).cljs$core$IFn$_invoke$arity$1(paint)),new cljs.core.Keyword(null,"group-by-property-ident","group-by-property-ident",1221613316),group_by_property_ident,new cljs.core.Keyword(null,"ref-pages-count","ref-pages-count",-74477634),new cljs.core.Keyword(null,"ref-pages-count","ref-pages-count",-74477634).cljs$core$IFn$_invoke$arity$1(view_data),new cljs.core.Keyword(null,"ref-matched-children-ids","ref-matched-children-ids",1569574404),new cljs.core.Keyword(null,"matched-child-uuids","matched-child-uuids",1875776635).cljs$core$IFn$_invoke$arity$1(view_data),new cljs.core.Keyword(null,"display-type","display-type",-749971179),display_type], 0)))], null);
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$loaded_view_aux__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47390 = cljs.core.first(args__31746__auto__);
var G__47391 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47390,G__47391) : io.factorhouse.hsx.core.obj_get.call(null,G__47390,G__47391));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"loaded-view-aux","loaded-view-aux",-1098017270,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$views$loaded_view_aux,args__31746__auto__,null);
}
};
var frontend$components$views$loaded_view_aux = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47690__i = 0, G__47690__a = new Array(arguments.length -  0);
while (G__47690__i < G__47690__a.length) {G__47690__a[G__47690__i] = arguments[G__47690__i + 0]; ++G__47690__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47690__a,0,null);
} 
return frontend$components$views$loaded_view_aux__delegate.call(this,args__31746__auto__);};
frontend$components$views$loaded_view_aux.cljs$lang$maxFixedArity = 0;
frontend$components$views$loaded_view_aux.cljs$lang$applyTo = (function (arglist__47691){
var args__31746__auto__ = cljs.core.seq(arglist__47691);
return frontend$components$views$loaded_view_aux__delegate(args__31746__auto__);
});
frontend$components$views$loaded_view_aux.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$loaded_view_aux__delegate;
return frontend$components$views$loaded_view_aux;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47392 = comp__31745__auto__;
var G__47393 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47392,G__47393) : io.factorhouse.hsx.core.react_memo.call(null,G__47392,G__47393));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"loaded-view-aux");

return comp__31745__auto__;
})();
frontend.components.views.deferred_view_placeholder = (function (){var render_fn__31744__auto__ = (function frontend$components$views$deferred_view_placeholder(view_entity,p__47394,activate_BANG_){
var map__47395 = p__47394;
var map__47395__$1 = cljs.core.__destructure_map(map__47395);
var option = map__47395__$1;
var view_uuids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47395__$1,new cljs.core.Keyword(null,"view-uuids","view-uuids",-351924754));
var set_current_view_uuid_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47395__$1,new cljs.core.Keyword(null,"set-current-view-uuid!","set-current-view-uuid!",-932288136));
var view_feature_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47395__$1,new cljs.core.Keyword(null,"view-feature-type","view-feature-type",-945869610));
return frontend.ui.foldable(frontend.components.views.views_tab(new cljs.core.Keyword("logseq.property","view-for","logseq.property/view-for",-36274319).cljs$core$IFn$_invoke$arity$1(view_entity),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(view_entity),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(option,new cljs.core.Keyword(null,"view-uuids","view-uuids",-351924754),view_uuids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"set-current-view-uuid!","set-current-view-uuid!",-932288136),set_current_view_uuid_BANG_,new cljs.core.Keyword(null,"view-feature-type","view-feature-type",-945869610),view_feature_type,new cljs.core.Keyword(null,"references?","references?",-487254152),true,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"items-count","items-count",-135458025),(0)], 0))),(function (){
return null;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title-trigger?","title-trigger?",-613599873),false,new cljs.core.Keyword(null,"default-collapsed?","default-collapsed?",-1350393823),true,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (collapsed_QMARK_){
if(cljs.core.truth_(collapsed_QMARK_)){
return null;
} else {
return (activate_BANG_.cljs$core$IFn$_invoke$arity$0 ? activate_BANG_.cljs$core$IFn$_invoke$arity$0() : activate_BANG_.call(null));
}
})], null));
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$deferred_view_placeholder__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47396 = cljs.core.first(args__31746__auto__);
var G__47397 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47396,G__47397) : io.factorhouse.hsx.core.obj_get.call(null,G__47396,G__47397));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"deferred-view-placeholder","deferred-view-placeholder",-1143567156,null),args__31746__auto__),frontend$components$views$deferred_view_placeholder,args__31746__auto__,null);
}
};
var frontend$components$views$deferred_view_placeholder = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47692__i = 0, G__47692__a = new Array(arguments.length -  0);
while (G__47692__i < G__47692__a.length) {G__47692__a[G__47692__i] = arguments[G__47692__i + 0]; ++G__47692__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47692__a,0,null);
} 
return frontend$components$views$deferred_view_placeholder__delegate.call(this,args__31746__auto__);};
frontend$components$views$deferred_view_placeholder.cljs$lang$maxFixedArity = 0;
frontend$components$views$deferred_view_placeholder.cljs$lang$applyTo = (function (arglist__47693){
var args__31746__auto__ = cljs.core.seq(arglist__47693);
return frontend$components$views$deferred_view_placeholder__delegate(args__31746__auto__);
});
frontend$components$views$deferred_view_placeholder.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$deferred_view_placeholder__delegate;
return frontend$components$views$deferred_view_placeholder;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47398 = comp__31745__auto__;
var G__47399 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47398,G__47399) : io.factorhouse.hsx.core.react_memo.call(null,G__47398,G__47399));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"deferred-view-placeholder");

return comp__31745__auto__;
})();
frontend.components.views.view_aux = (function (){var render_fn__31744__auto__ = (function frontend$components$views$view_aux(view_entity,p__47400){
var map__47401 = p__47400;
var map__47401__$1 = cljs.core.__destructure_map(map__47401);
var option = map__47401__$1;
var defer_resource_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47401__$1,new cljs.core.Keyword(null,"defer-resource?","defer-resource?",-1805519751));
var vec__47402 = logseq.shui.hooks.use_state(cljs.core.not(defer_resource_QMARK_));
var active_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47402,(0),null);
var set_active_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47402,(1),null);
if(cljs.core.truth_(active_QMARK_)){
return frontend.components.views.loaded_view_aux(view_entity,(function (){var G__47405 = option;
if(cljs.core.truth_(defer_resource_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47405,new cljs.core.Keyword(null,"deactivate-deferred-view!","deactivate-deferred-view!",-2098247164),(function (){
return (set_active_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_active_BANG_.call(null,false));
}));
} else {
return G__47405;
}
})());
} else {
return frontend.components.views.deferred_view_placeholder(view_entity,option,(function (){
return (set_active_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_active_BANG_.call(null,true));
}));
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$view_aux__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47406 = cljs.core.first(args__31746__auto__);
var G__47407 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47406,G__47407) : io.factorhouse.hsx.core.obj_get.call(null,G__47406,G__47407));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"view-aux","view-aux",555417163,null),args__31746__auto__),frontend$components$views$view_aux,args__31746__auto__,null);
}
};
var frontend$components$views$view_aux = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47694__i = 0, G__47694__a = new Array(arguments.length -  0);
while (G__47694__i < G__47694__a.length) {G__47694__a[G__47694__i] = arguments[G__47694__i + 0]; ++G__47694__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47694__a,0,null);
} 
return frontend$components$views$view_aux__delegate.call(this,args__31746__auto__);};
frontend$components$views$view_aux.cljs$lang$maxFixedArity = 0;
frontend$components$views$view_aux.cljs$lang$applyTo = (function (arglist__47695){
var args__31746__auto__ = cljs.core.seq(arglist__47695);
return frontend$components$views$view_aux__delegate(args__31746__auto__);
});
frontend$components$views$view_aux.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$view_aux__delegate;
return frontend$components$views$view_aux;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47408 = comp__31745__auto__;
var G__47409 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47408,G__47409) : io.factorhouse.hsx.core.react_memo.call(null,G__47408,G__47409));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"view-aux");

return comp__31745__auto__;
})();
frontend.components.views.sub_view = (function (){var render_fn__31744__auto__ = (function frontend$components$views$sub_view(view_entity,option){
return frontend.components.views.view_aux(view_entity,option);
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$sub_view__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47410 = cljs.core.first(args__31746__auto__);
var G__47411 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47410,G__47411) : io.factorhouse.hsx.core.obj_get.call(null,G__47410,G__47411));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"sub-view","sub-view",665180347,null),args__31746__auto__),frontend$components$views$sub_view,args__31746__auto__,null);
}
};
var frontend$components$views$sub_view = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47696__i = 0, G__47696__a = new Array(arguments.length -  0);
while (G__47696__i < G__47696__a.length) {G__47696__a[G__47696__i] = arguments[G__47696__i + 0]; ++G__47696__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47696__a,0,null);
} 
return frontend$components$views$sub_view__delegate.call(this,args__31746__auto__);};
frontend$components$views$sub_view.cljs$lang$maxFixedArity = 0;
frontend$components$views$sub_view.cljs$lang$applyTo = (function (arglist__47697){
var args__31746__auto__ = cljs.core.seq(arglist__47697);
return frontend$components$views$sub_view__delegate(args__31746__auto__);
});
frontend$components$views$sub_view.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$sub_view__delegate;
return frontend$components$views$sub_view;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47412 = comp__31745__auto__;
var G__47413 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47412,G__47413) : io.factorhouse.hsx.core.react_memo.call(null,G__47412,G__47413));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"sub-view");

return comp__31745__auto__;
})();
/**
 * use-block in selected-view re-rendered All Pages before the first
 *   lazy-item. Keep the subscription off the table render path.
 */
frontend.components.views.selected_view_hydrate = (function (){var render_fn__31744__auto__ = (function frontend$components$views$selected_view_hydrate(view_uuid,first_paint_done_QMARK_,set_hydrated_entity_BANG_){
var entity = frontend.db.hooks.use_block(view_uuid);
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_((function (){var and__5140__auto__ = first_paint_done_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return entity;
} else {
return and__5140__auto__;
}
})())){
(set_hydrated_entity_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_hydrated_entity_BANG_.cljs$core$IFn$_invoke$arity$1(entity) : set_hydrated_entity_BANG_.call(null,entity));
} else {
}

return undefined;
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_paint_done_QMARK_,entity], null));

return null;
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$selected_view_hydrate__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47414 = cljs.core.first(args__31746__auto__);
var G__47415 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47414,G__47415) : io.factorhouse.hsx.core.obj_get.call(null,G__47414,G__47415));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"selected-view-hydrate","selected-view-hydrate",1178495371,null),args__31746__auto__),frontend$components$views$selected_view_hydrate,args__31746__auto__,null);
}
};
var frontend$components$views$selected_view_hydrate = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47698__i = 0, G__47698__a = new Array(arguments.length -  0);
while (G__47698__i < G__47698__a.length) {G__47698__a[G__47698__i] = arguments[G__47698__i + 0]; ++G__47698__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47698__a,0,null);
} 
return frontend$components$views$selected_view_hydrate__delegate.call(this,args__31746__auto__);};
frontend$components$views$selected_view_hydrate.cljs$lang$maxFixedArity = 0;
frontend$components$views$selected_view_hydrate.cljs$lang$applyTo = (function (arglist__47699){
var args__31746__auto__ = cljs.core.seq(arglist__47699);
return frontend$components$views$selected_view_hydrate__delegate(args__31746__auto__);
});
frontend$components$views$selected_view_hydrate.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$selected_view_hydrate__delegate;
return frontend$components$views$selected_view_hydrate;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47416 = comp__31745__auto__;
var G__47417 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47416,G__47417) : io.factorhouse.hsx.core.react_memo.call(null,G__47416,G__47417));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"selected-view-hydrate");

return comp__31745__auto__;
})();
frontend.components.views.selected_view = (function (){var render_fn__31744__auto__ = (function frontend$components$views$selected_view(view_uuids,option){
var vec__47418 = logseq.shui.hooks.use_state(null);
var requested_view_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47418,(0),null);
var set_requested_view_uuid_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47418,(1),null);
var vec__47421 = logseq.shui.hooks.use_state(false);
var first_paint_done_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47421,(0),null);
var set_first_paint_done_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47421,(1),null);
var vec__47424 = logseq.shui.hooks.use_state(null);
var hydrated_entity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47424,(0),null);
var set_hydrated_entity_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47424,(1),null);
var selected_view_uuid = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([requested_view_uuid]),view_uuids))?requested_view_uuid:cljs.core.first(view_uuids));
var pending_view = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),selected_view_uuid], null);
var view_entity = frontend.components.views.first_paint_view_entity(hydrated_entity,pending_view,first_paint_done_QMARK_);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.views.selected_view_hydrate,selected_view_uuid,first_paint_done_QMARK_,set_hydrated_entity_BANG_], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.views.sub_view,view_entity,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(option,new cljs.core.Keyword(null,"view-uuids","view-uuids",-351924754),view_uuids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"set-current-view-uuid!","set-current-view-uuid!",-932288136),set_requested_view_uuid_BANG_,new cljs.core.Keyword(null,"on-first-table-paint!","on-first-table-paint!",1107280735),(function (){
(set_first_paint_done_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_first_paint_done_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_first_paint_done_BANG_.call(null,true));

var temp__5825__auto__ = new cljs.core.Keyword(null,"on-first-table-paint!","on-first-table-paint!",1107280735).cljs$core$IFn$_invoke$arity$1(option);
if(cljs.core.truth_(temp__5825__auto__)){
var notify_BANG_ = temp__5825__auto__;
return (notify_BANG_.cljs$core$IFn$_invoke$arity$0 ? notify_BANG_.cljs$core$IFn$_invoke$arity$0() : notify_BANG_.call(null));
} else {
return null;
}
})], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"view-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(selected_view_uuid))], null))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$selected_view__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47427 = cljs.core.first(args__31746__auto__);
var G__47428 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47427,G__47428) : io.factorhouse.hsx.core.obj_get.call(null,G__47427,G__47428));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"selected-view","selected-view",2141822040,null),args__31746__auto__),frontend$components$views$selected_view,args__31746__auto__,null);
}
};
var frontend$components$views$selected_view = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47700__i = 0, G__47700__a = new Array(arguments.length -  0);
while (G__47700__i < G__47700__a.length) {G__47700__a[G__47700__i] = arguments[G__47700__i + 0]; ++G__47700__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47700__a,0,null);
} 
return frontend$components$views$selected_view__delegate.call(this,args__31746__auto__);};
frontend$components$views$selected_view.cljs$lang$maxFixedArity = 0;
frontend$components$views$selected_view.cljs$lang$applyTo = (function (arglist__47701){
var args__31746__auto__ = cljs.core.seq(arglist__47701);
return frontend$components$views$selected_view__delegate(args__31746__auto__);
});
frontend$components$views$selected_view.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$selected_view__delegate;
return frontend$components$views$selected_view;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47429 = comp__31745__auto__;
var G__47430 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47429,G__47430) : io.factorhouse.hsx.core.react_memo.call(null,G__47429,G__47430));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"selected-view");

return comp__31745__auto__;
})();
/**
 * Log a failed default-view insert without throwing during render
 * and re-arm *started? so a later effect run can retry.
 * The page has no error boundary around this view.
 */
frontend.components.views.handle_default_view_creation_error_BANG_ = (function frontend$components$views$handle_default_view_creation_error_BANG_(_STAR_started_QMARK_,error){
(_STAR_started_QMARK_.current = false);

if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.views",new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-view-creation-failed","default-view-creation-failed",317895541),error,new cljs.core.Keyword(null,"line","line",212345235),4221], null)),null);
} else {
}

return null;
});
frontend.components.views.missing_view = (function (){var render_fn__31744__auto__ = (function frontend$components$views$missing_view(view_parent_uuid,view_feature_type){
var view_parent = frontend.db.hooks.use_block(view_parent_uuid);
var _STAR_started_QMARK_ = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(false) : logseq.shui.hooks.use_ref.call(null,false));
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_((function (){var and__5140__auto__ = view_parent;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(_STAR_started_QMARK_.current);
} else {
return and__5140__auto__;
}
})())){
(_STAR_started_QMARK_.current = true);

promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.components.views.create_view_BANG_(view_parent,view_feature_type,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"auto-triggered?","auto-triggered?",1255221895),true], null)),(function (view){
if(cljs.core.truth_(view)){
return null;
} else {
return frontend.components.views.handle_default_view_creation_error_BANG_(_STAR_started_QMARK_,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Default view creation returned no view",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view-parent-uuid","view-parent-uuid",1853863877),view_parent_uuid,new cljs.core.Keyword(null,"view-feature-type","view-feature-type",-945869610),view_feature_type], null)));
}
})),(function (error){
return frontend.components.views.handle_default_view_creation_error_BANG_(_STAR_started_QMARK_,error);
}));
} else {
}

return undefined;
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_parent,view_parent_uuid,view_feature_type], null));

return null;
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$missing_view__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47431 = cljs.core.first(args__31746__auto__);
var G__47432 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47431,G__47432) : io.factorhouse.hsx.core.obj_get.call(null,G__47431,G__47432));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"missing-view","missing-view",1452353100,null),args__31746__auto__),frontend$components$views$missing_view,args__31746__auto__,null);
}
};
var frontend$components$views$missing_view = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47702__i = 0, G__47702__a = new Array(arguments.length -  0);
while (G__47702__i < G__47702__a.length) {G__47702__a[G__47702__i] = arguments[G__47702__i + 0]; ++G__47702__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47702__a,0,null);
} 
return frontend$components$views$missing_view__delegate.call(this,args__31746__auto__);};
frontend$components$views$missing_view.cljs$lang$maxFixedArity = 0;
frontend$components$views$missing_view.cljs$lang$applyTo = (function (arglist__47703){
var args__31746__auto__ = cljs.core.seq(arglist__47703);
return frontend$components$views$missing_view__delegate(args__31746__auto__);
});
frontend$components$views$missing_view.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$missing_view__delegate;
return frontend$components$views$missing_view;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47433 = comp__31745__auto__;
var G__47434 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47433,G__47434) : io.factorhouse.hsx.core.react_memo.call(null,G__47433,G__47434));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"missing-view");

return comp__31745__auto__;
})();
frontend.components.views.view = (function (){var render_fn__31744__auto__ = (function frontend$components$views$view(p__47435){
var map__47436 = p__47435;
var map__47436__$1 = cljs.core.__destructure_map(map__47436);
var option = map__47436__$1;
var view_parent_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47436__$1,new cljs.core.Keyword(null,"view-parent-uuid","view-parent-uuid",1853863877));
var view_feature_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47436__$1,new cljs.core.Keyword(null,"view-feature-type","view-feature-type",-945869610));
var view_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47436__$1,new cljs.core.Keyword(null,"view-uuid","view-uuid",2029101620));
var query_result_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"query-result","query-result",-833644142),view_feature_type);
var view_uuids = ((query_result_QMARK_)?null:frontend.db.hooks.use_resource(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_parent_uuid,view_feature_type], null)));
var selected_view_uuids = ((query_result_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_uuid], null):view_uuids);
if(cljs.core.seq(selected_view_uuids)){
return frontend.components.views.selected_view(selected_view_uuids,option);
} else {
if((((!(query_result_QMARK_))) && ((!((view_uuids == null)))))){
return frontend.components.views.missing_view(view_parent_uuid,view_feature_type);
} else {
return null;
}
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$views$view__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47437 = cljs.core.first(args__31746__auto__);
var G__47438 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47437,G__47438) : io.factorhouse.hsx.core.obj_get.call(null,G__47437,G__47438));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"view","view",-1406440955,null),args__31746__auto__),frontend$components$views$view,args__31746__auto__,null);
}
};
var frontend$components$views$view = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47704__i = 0, G__47704__a = new Array(arguments.length -  0);
while (G__47704__i < G__47704__a.length) {G__47704__a[G__47704__i] = arguments[G__47704__i + 0]; ++G__47704__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47704__a,0,null);
} 
return frontend$components$views$view__delegate.call(this,args__31746__auto__);};
frontend$components$views$view.cljs$lang$maxFixedArity = 0;
frontend$components$views$view.cljs$lang$applyTo = (function (arglist__47705){
var args__31746__auto__ = cljs.core.seq(arglist__47705);
return frontend$components$views$view__delegate(args__31746__auto__);
});
frontend$components$views$view.cljs$core$IFn$_invoke$arity$variadic = frontend$components$views$view__delegate;
return frontend$components$views$view;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47439 = comp__31745__auto__;
var G__47440 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47439,G__47440) : io.factorhouse.hsx.core.react_memo.call(null,G__47439,G__47440));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"view");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.views.js.map
