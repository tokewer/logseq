goog.provide('frontend.handler.file_graph_import');
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.file_graph_import !== 'undefined') && (typeof frontend.handler.file_graph_import._STAR_file_graph_import_session !== 'undefined')){
} else {
frontend.handler.file_graph_import._STAR_file_graph_import_session = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.handler.file_graph_import.set_file_graph_import_session_BANG_ = (function frontend$handler$file_graph_import$set_file_graph_import_session_BANG_(session){
return cljs.core.reset_BANG_(frontend.handler.file_graph_import._STAR_file_graph_import_session,session);
});
frontend.handler.file_graph_import.clear_file_graph_import_session_BANG_ = (function frontend$handler$file_graph_import$clear_file_graph_import_session_BANG_(){
return cljs.core.reset_BANG_(frontend.handler.file_graph_import._STAR_file_graph_import_session,null);
});
frontend.handler.file_graph_import._LT_read_file_graph_import_file = (function frontend$handler$file_graph_import$_LT_read_file_graph_import_file(path){
var temp__5823__auto__ = new cljs.core.Keyword(null,"<read-file","<read-file",-785932647).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.handler.file_graph_import._STAR_file_graph_import_session));
if(cljs.core.truth_(temp__5823__auto__)){
var reader = temp__5823__auto__;
return (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(path) : reader.call(null,path));
} else {
return promesa.core.rejected(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("no file-graph import session",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"missing-import-session","missing-import-session",1342449921),new cljs.core.Keyword(null,"path","path",-188191168),path], null)));
}
});

//# sourceMappingURL=frontend.handler.file_graph_import.js.map
