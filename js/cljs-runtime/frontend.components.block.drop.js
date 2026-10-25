goog.provide('frontend.components.block.drop');
frontend.components.block.drop.data_transfer_files = (function frontend$components$block$drop$data_transfer_files(data_transfer){
var G__69928 = data_transfer;
var G__69928__$1 = (((G__69928 == null))?null:G__69928.files);
var G__69928__$2 = (((G__69928__$1 == null))?null:cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(G__69928__$1));
if((G__69928__$2 == null)){
return null;
} else {
return cljs.core.seq(G__69928__$2);
}
});
frontend.components.block.drop.save_files_BANG_ = (function frontend$components$block$drop$save_files_BANG_(files,target_block){
promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.assets.db_based_save_assets_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),files,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"last-edit-block","last-edit-block",-940369316),target_block], 0)),(function (error){
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.block.drop",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","drop-files-failed","block/drop-files-failed",-838796469),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null),new cljs.core.Keyword(null,"line","line",212345235),18], null)),null);
} else {
return null;
}
}));

return null;
});
frontend.components.block.drop.handle_data_transfer_drop_BANG_ = (function frontend$components$block$drop$handle_data_transfer_drop_BANG_(event,uuid,target_block,move_to){
var data_transfer = event.dataTransfer;
var transfer_types = cljs.core.set(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data_transfer.types));
var files = frontend.components.block.drop.data_transfer_files(data_transfer);
if(((cljs.core.contains_QMARK_(transfer_types,"Files")) && (cljs.core.seq(files)))){
frontend.util.stop(event);

return frontend.components.block.drop.save_files_BANG_(files,target_block);
} else {
if(cljs.core.contains_QMARK_(transfer_types,"text/plain")){
var text = data_transfer.getData("text/plain");
return frontend.handler.editor.api_insert_new_block_BANG_(text,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),uuid,new cljs.core.Keyword(null,"edit-block?","edit-block?",-310383789),false,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(move_to,new cljs.core.Keyword(null,"sibling","sibling",-1183865000)),new cljs.core.Keyword(null,"before?","before?",765621039),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(move_to,new cljs.core.Keyword(null,"top","top",-1856271961))], null));
} else {
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.block.drop",new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","unhandled-drop-data-transfer-type","block/unhandled-drop-data-transfer-type",168289203),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"types","types",590030639),transfer_types], null),new cljs.core.Keyword(null,"line","line",212345235),42], null)),null);
} else {
return null;
}

}
}
});

//# sourceMappingURL=frontend.components.block.drop.js.map
