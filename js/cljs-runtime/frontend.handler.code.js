goog.provide('frontend.handler.code');
goog.scope(function(){
  frontend.handler.code.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.handler.code._LT_graph_file_QMARK_ = (function frontend$handler$code$_LT_graph_file_QMARK_(repo,path){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","path","file/path",-191335748),path], null)], 0))),(function (file){
return promesa.protocols._promise((!((file == null))));
}));
}));
});
frontend.handler.code.save_file_BANG_ = (function frontend$handler$code$save_file_BANG_(repo,path,content){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.code._LT_graph_file_QMARK_(repo,path)),(function (graph_file_QMARK_){
return promesa.protocols._promise((cljs.core.truth_(graph_file_QMARK_)?frontend.handler.db_based.editor.save_file_BANG_(path,content):(cljs.core.truth_(frontend.util.electron_QMARK_())?((logseq.common.path.absolute_QMARK_(path))?(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,frontend.handler.global_config.global_config_path())){
frontend.handler.global_config.set_global_config_state_BANG_(content);

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shortcut","refresh","shortcut/refresh",-1755508577)], null));
} else {
}

return frontend.fs.write_file_BANG_(path,content);
})()
:console.error("Saving relative file ignored",path,content)):null)));
}));
}));
});
frontend.handler.code.block_content = (function frontend$handler$code$block_content(block){
var or__5142__auto__ = new cljs.core.Keyword("block","raw-title","block/raw-title",1833669090).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
throw (new Error("Cannot save code editor block without block content"));
}
}
});
frontend.handler.code.save_code_editor_BANG_ = (function frontend$handler$code$save_code_editor_BANG_(){
var map__93570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("editor","code-block-context","editor/code-block-context",-1384305346));
var map__93570__$1 = cljs.core.__destructure_map(map__93570);
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93570__$1,new cljs.core.Keyword(null,"config","config",994861415));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93570__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93570__$1,new cljs.core.Keyword(null,"editor","editor",-989377770));
if(cljs.core.truth_(editor)){
frontend.state.set_block_component_editing_mode_BANG_(false);

editor.save();

var textarea = editor.getTextArea();
var ds = textarea.dataset;
var value = frontend.handler.code.goog$module$goog$object.get(textarea,"value");
var default_value = (function (){var or__5142__auto__ = ds.v;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.handler.code.goog$module$goog$object.get(textarea,"defaultValue");
}
})();
var repo = frontend.state.get_current_repo();
var block = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"code-block","code-block",-2113425141).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(config);
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,default_value)){
(ds.v = value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword("logseq.property.node","display-type","logseq.property.node/display-type",442446189).cljs$core$IFn$_invoke$arity$1(block))){
return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$2(block,value);
} else {
if(cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(config))){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(config),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (block__$1){
return promesa.protocols._promise((function (){var content = frontend.handler.code.block_content(block__$1);
var map__93571 = new cljs.core.Keyword(null,"pos_meta","pos_meta",1041099485).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"code-options","code-options",1113362965).cljs$core$IFn$_invoke$arity$1(state)));
var map__93571__$1 = cljs.core.__destructure_map(map__93571);
var start_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93571__$1,new cljs.core.Keyword(null,"start_pos","start_pos",272375959));
var end_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93571__$1,new cljs.core.Keyword(null,"end_pos","end_pos",-1418940));
var offset = (2);
var raw_content = logseq.graph_parser.utf8.encode(content);
var prefix = logseq.graph_parser.utf8.decode(raw_content.slice((0),(start_pos - offset)));
var surfix = logseq.graph_parser.utf8.decode(raw_content.slice((end_pos - offset)));
var new_content = ((clojure.string.blank_QMARK_(value))?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(surfix)):(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(surfix)));
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_edit_input_id(),new_content);

return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$2(block__$1,new_content);
})());
}));
}));
} else {
if(cljs.core.truth_(cljs.core.not_empty(new cljs.core.Keyword(null,"file-path","file-path",-2005501162).cljs$core$IFn$_invoke$arity$1(config)))){
return frontend.handler.code.save_file_BANG_(repo,new cljs.core.Keyword(null,"file-path","file-path",-2005501162).cljs$core$IFn$_invoke$arity$1(config),value);
} else {
return null;

}
}
}
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=frontend.handler.code.js.map
