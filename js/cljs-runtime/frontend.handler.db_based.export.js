goog.provide('frontend.handler.db_based.export$');
/**
 * Gets export-edn and validates export for smaller exports. Copied from component.export/<export-edn-helper
 */
frontend.handler.db_based.export$._LT_export_edn_helper = (function frontend$handler$db_based$export$_LT_export_edn_helper(export_args){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","export-edn","thread-api/export-edn",507686782),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),export_args], 0))),(function (export_edn){
return promesa.protocols._promise((function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(logseq.db.sqlite.export$.validate_export(export_edn));
if(cljs.core.truth_(temp__5823__auto__)){
var error = temp__5823__auto__;
console.log("Invalid export EDN:");

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(export_edn);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"export-edn-error","export-edn-error",867881458),error], null);
} else {
return export_edn;
}
})());
}));
}));
});
frontend.handler.db_based.export$.export_block_data = (function frontend$handler$db_based$export$export_block_data(){
var temp__5823__auto__ = new cljs.core.Keyword(null,"block-id","block-id",-70582834).cljs$core$IFn$_invoke$arity$1(cljs.core.first(frontend.state.get_editor_args()));
if(cljs.core.truth_(temp__5823__auto__)){
var block_uuid = temp__5823__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","export-edn","thread-api/export-edn",507686782),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"export-type","export-type",-2087639167),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"block-id","block-id",-70582834),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null)], null)], 0))),(function (result){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__80769_80889 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__80770_80890 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__80771_80891 = true;
var _STAR_print_fn_STAR__temp_val__80772_80892 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__80771_80891);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__80772_80892);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(result);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__80770_80890);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__80769_80889);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})()),(function (pull_data){
return promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword(null,"export-edn-error","export-edn-error",867881458).cljs$core$IFn$_invoke$arity$1(result))?null:(function (){
navigator.clipboard.writeText(pull_data);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pull_data], 0));

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","block-data-copied","export/block-data-copied",-1266456989)], 0)),new cljs.core.Keyword(null,"success","success",1890645906));
})()
));
}));
}));
}));
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","not-found-warning","block/not-found-warning",1111887794)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));
}
});
goog.exportSymbol('frontend.handler.db_based.export$.export_block_data', frontend.handler.db_based.export$.export_block_data);
frontend.handler.db_based.export$.export_view_nodes_data = (function frontend$handler$db_based$export$export_view_nodes_data(rows,p__80785){
var map__80786 = p__80785;
var map__80786__$1 = cljs.core.__destructure_map(map__80786);
var group_by_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80786__$1,new cljs.core.Keyword(null,"group-by?","group-by?",732997650));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.export$._LT_export_edn_helper(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"export-type","export-type",-2087639167),new cljs.core.Keyword(null,"view-nodes","view-nodes",-190176378),new cljs.core.Keyword(null,"rows","rows",850049680),rows,new cljs.core.Keyword(null,"group-by?","group-by?",732997650),group_by_QMARK_], null))),(function (result){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__80795_80897 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__80796_80898 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__80797_80899 = true;
var _STAR_print_fn_STAR__temp_val__80798_80900 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__80797_80899);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__80798_80900);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(result);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__80796_80898);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__80795_80897);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})()),(function (pull_data){
return promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword(null,"export-edn-error","export-edn-error",867881458).cljs$core$IFn$_invoke$arity$1(result))?frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"export-edn-error","export-edn-error",867881458).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"error","error",-978969032)):(function (){
navigator.clipboard.writeText(pull_data);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pull_data], 0));

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","view-nodes-data-copied","export/view-nodes-data-copied",1962920701)], 0)),new cljs.core.Keyword(null,"success","success",1890645906));
})()
));
}));
}));
}));
});
frontend.handler.db_based.export$.export_page_data = (function frontend$handler$db_based$export$export_page_data(){
var temp__5823__auto__ = frontend.util.page.get_current_page_id();
if(cljs.core.truth_(temp__5823__auto__)){
var page_id = temp__5823__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.export$._LT_export_edn_helper(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"export-type","export-type",-2087639167),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null))),(function (result){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__80816_80905 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__80817_80906 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__80818_80907 = true;
var _STAR_print_fn_STAR__temp_val__80819_80908 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__80818_80907);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__80819_80908);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(result);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__80817_80906);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__80816_80905);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})()),(function (pull_data){
return promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword(null,"export-edn-error","export-edn-error",867881458).cljs$core$IFn$_invoke$arity$1(result))?frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"export-edn-error","export-edn-error",867881458).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"error","error",-978969032)):(function (){
navigator.clipboard.writeText(pull_data);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pull_data], 0));

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","page-data-copied","export/page-data-copied",-2095496520)], 0)),new cljs.core.Keyword(null,"success","success",1890645906));
})()
));
}));
}));
}));
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","not-found-warning","page/not-found-warning",1109504384)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));
}
});
goog.exportSymbol('frontend.handler.db_based.export$.export_page_data', frontend.handler.db_based.export$.export_page_data);
frontend.handler.db_based.export$.export_graph_ontology_data = (function frontend$handler$db_based$export$export_graph_ontology_data(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","export-edn","thread-api/export-edn",507686782),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"export-type","export-type",-2087639167),new cljs.core.Keyword(null,"graph-ontology","graph-ontology",-1663150820)], null)], 0))),(function (result){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__80841_80916 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__80842_80918 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__80843_80919 = true;
var _STAR_print_fn_STAR__temp_val__80844_80920 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__80843_80919);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__80844_80920);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(result);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__80842_80918);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__80841_80916);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})()),(function (pull_data){
return promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword(null,"export-edn-error","export-edn-error",867881458).cljs$core$IFn$_invoke$arity$1(result))?null:(function (){
navigator.clipboard.writeText(pull_data);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pull_data], 0));

console.log((""+"Exported "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(result)))+" classes and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(result)))+" properties"));

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","graph-ontology-data-copied","export/graph-ontology-data-copied",1778371631)], 0)),new cljs.core.Keyword(null,"success","success",1890645906));
})()
));
}));
}));
}));
});
goog.exportSymbol('frontend.handler.db_based.export$.export_graph_ontology_data', frontend.handler.db_based.export$.export_graph_ontology_data);
frontend.handler.db_based.export$.file_name = (function frontend$handler$db_based$export$file_name(repo,extension){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(repo,/^\/+/,""))+"_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.quot((frontend.util.time_ms.cljs$core$IFn$_invoke$arity$0 ? frontend.util.time_ms.cljs$core$IFn$_invoke$arity$0() : frontend.util.time_ms.call(null)),(1000)))))+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.name(extension))));
});
/**
 * Run db validation before exporting EDN
 */
frontend.handler.db_based.export$.export_repo_as_db_edn_BANG_ = (function frontend$handler$db_based$export$export_repo_as_db_edn_BANG_(repo){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","validate-db","thread-api/validate-db",2061031012),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo()], 0))),(function (validate_result){
return promesa.protocols._mcat(promesa.protocols._promise(validate_result),(function (p__80869){
var map__80870 = p__80869;
var map__80870__$1 = cljs.core.__destructure_map(map__80870);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80870__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core.seq(errors))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Graph validation failed",validate_result)})():null)),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","export-edn","thread-api/export-edn",507686782),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"export-type","export-type",-2087639167),new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"graph-options","graph-options",1082521635),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-timestamps?","include-timestamps?",158216918),true], null)], null)], 0))),(function (result){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__80874_80924 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__80875_80925 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__80876_80926 = true;
var _STAR_print_fn_STAR__temp_val__80877_80927 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__80876_80926);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__80877_80927);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(result);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__80875_80925);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__80874_80924);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})()),(function (pull_data){
return promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword(null,"export-edn-error","export-edn-error",867881458).cljs$core$IFn$_invoke$arity$1(result))?null:(function (){var data_str = (function (){var G__80880 = pull_data;
var G__80880__$1 = (((G__80880 == null))?null:encodeURIComponent(G__80880));
if((G__80880__$1 == null)){
return null;
} else {
return (""+"data:text/edn;charset=utf-8,"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80880__$1));
}
})();
var filename = frontend.handler.db_based.export$.file_name(repo,new cljs.core.Keyword(null,"edn","edn",1317840885));
var temp__5825__auto__ = goog.dom.getElement("download-as-db-edn");
if(cljs.core.truth_(temp__5825__auto__)){
var anchor = temp__5825__auto__;
anchor.setAttribute("href",data_str);

anchor.setAttribute("download",filename);

return anchor.click();
} else {
return null;
}
})()));
}));
}));
}));
}));
}));
}));
});

//# sourceMappingURL=frontend.handler.db_based.export.js.map
