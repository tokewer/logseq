goog.provide('frontend.components.export$');
frontend.components.export$._LT_get_key_value = (function frontend$components$export$_LT_get_key_value(repo,key){
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-key-value","thread-api/get-key-value",940412851),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,key], 0));
});
frontend.components.export$.page_tag_idents = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("logseq.class","Property","logseq.class/Property",1038767048),null,new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329),null,new cljs.core.Keyword("logseq.class","Journal","logseq.class/Journal",1979741081),null,new cljs.core.Keyword("logseq.class","Tag","logseq.class/Tag",-538902083),null], null), null);
frontend.components.export$.page_entity_QMARK_ = (function frontend$components$export$page_entity_QMARK_(entity){
return cljs.core.boolean$(cljs.core.some((function (tag){
return cljs.core.contains_QMARK_(frontend.components.export$.page_tag_idents,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(tag));
}),new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(entity)));
});
frontend.components.export$._LT_page_block_QMARK_ = (function frontend$components$export$_LT_page_block_QMARK_(top_block_id){
var temp__5825__auto__ = (function (){var and__5140__auto__ = cljs.core.uuid_QMARK_(top_block_id);
if(and__5140__auto__){
return frontend.state.get_current_repo();
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),top_block_id], null)], 0))),(function (block){
return promesa.protocols._promise(frontend.components.export$.page_entity_QMARK_(block));
}));
}));
} else {
return null;
}
});
frontend.components.export$.auto_backup = (function (){var render_fn__31744__auto__ = (function frontend$components$export$auto_backup(){
var _STAR_backup_folder = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}),cljs.core.PersistentVector.EMPTY);
var vec__42671 = logseq.shui.hooks.use_atom(_STAR_backup_folder);
var backup_folder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42671,(0),null);
var repo = frontend.state.get_current_repo();
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(repo)){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.export$._LT_get_key_value(repo,new cljs.core.Keyword("logseq.kv","graph-backup-folder","logseq.kv/graph-backup-folder",-1042314532))),(function (bf1){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(bf1)?null:frontend.handler.export$._LT_get_web_graph_folder_name(repo))),(function (bf2){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = bf1;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return bf2;
}
})()),(function (folder){
return promesa.protocols._promise(cljs.core.reset_BANG_(_STAR_backup_folder,folder));
}));
}));
}));
}));
} else {
return cljs.core.reset_BANG_(_STAR_backup_folder,null);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-4","div.flex.flex-col.gap-4",-1215558137),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-medium.opacity-50","div.font-medium.opacity-50",-844969190),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export.backup","schedule","export.backup/schedule",20699374)], 0))], null),(cljs.core.truth_(module$frontend$utils.nfsSupported())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(cljs.core.truth_(backup_folder)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.gap-1.text-sm","div.flex.flex-row.items-center.gap-1.text-sm",1556443449),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-50","div.opacity-50",-874367312),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export.backup","folder","export.backup/folder",1055174092)], 0))], null),backup_folder,(function (){var G__42738 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"class","class",-2030961996),"!px-1 !py-1",new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export.backup","cancel","export.backup/cancel",2137962716)], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","transact","thread-api/transact",917721609),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),new cljs.core.Keyword("logseq.kv","graph-backup-folder","logseq.kv/graph-backup-folder",-1042314532)], null)], null),null,null], 0))),(function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.auto_save.cancel_auto_save_BANG_.cljs$core$IFn$_invoke$arity$1(repo)),(function (___21901__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.export$.cancel_db_backup_BANG_()),(function (___21901__auto____$2){
return promesa.protocols._promise(cljs.core.reset_BANG_(_STAR_backup_folder,null));
}));
}));
}));
}));
}),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065)], null);
var G__42739 = frontend.ui.icon("x");
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__42738,G__42739) : logseq.shui.ui.button.call(null,G__42738,G__42739));
})()], null):(function (){var G__42782 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.export$.choose_backup_folder(repo)),(function (p__42800){
var vec__42802 = p__42800;
var folder_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42802,(0),null);
var _handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42802,(1),null);
return promesa.protocols._promise((cljs.core.truth_(folder_name)?(function (){
cljs.core.reset_BANG_(_STAR_backup_folder,folder_name);

frontend.handler.export$.auto_db_backup_BANG_(repo);

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.export$.backup_db_graph.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interactive?","interactive?",367617676),true], null))),(function (result){
return promesa.protocols._promise((function (){var G__42816 = result;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__42816)){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","backup-successful","export/backup-successful",124382285)], 0)),new cljs.core.Keyword(null,"success","success",1890645906));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"graph-not-changed","graph-not-changed",1463753852),G__42816)){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","no-updates-since-last-export","export/no-updates-since-last-export",755382276)], 0)),new cljs.core.Keyword(null,"success","success",1890645906));
} else {
return null;

}
}
})());
}));
}));
})()
:null));
}));
})),(function (error){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("AbortError",error.name)){
return null;
} else {
console.error("Failed to set backup folder:",error);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","db-backup-error","export/db-backup-error",-1357865057)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
}
}));
})], null);
var G__42783 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export.backup","set-folder-first","export.backup/set-folder-first",1342330709)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__42782,G__42783) : logseq.shui.ui.button.call(null,G__42782,G__42783));
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-50.text-sm","div.opacity-50.text-sm",602959872),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export.backup","hourly-note","export.backup/hourly-note",108341927)], 0))], null),(cljs.core.truth_(backup_folder)?(function (){var G__42893 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.export$.backup_db_graph.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interactive?","interactive?",367617676),true], null))),(function (result){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__42906 = result;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__42906)){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","backup-successful","export/backup-successful",124382285)], 0)),new cljs.core.Keyword(null,"success","success",1890645906));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"graph-not-changed","graph-not-changed",1463753852),G__42906)){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","no-updates-since-last-export","export/no-updates-since-last-export",755382276)], 0)),new cljs.core.Keyword(null,"success","success",1890645906));
} else {
return null;

}
}
})()),(function (___21901__auto__){
return promesa.protocols._promise(frontend.handler.export$.auto_db_backup_BANG_(repo));
}));
}));
})),(function (error){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("AbortError",error.name)){
return null;
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Failed to backup."], 0));

return console.error(error);
}
}));
})], null);
var G__42894 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export.backup","backup-now","export.backup/backup-now",1047751148)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__42893,G__42894) : logseq.shui.ui.button.call(null,G__42893,G__42894));
})():null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.interpolate_sentence.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export.backup","unsupported-desc","export.backup/unsupported-desc",1365146874)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://developer.chrome.com/docs/capabilities/web-apis/file-system-access",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null)], null)], 0))], null)], null))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$export$auto_backup__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__42943 = cljs.core.first(args__31746__auto__);
var G__42944 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__42943,G__42944) : io.factorhouse.hsx.core.obj_get.call(null,G__42943,G__42944));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"auto-backup","auto-backup",-1325323492,null),args__31746__auto__),frontend$components$export$auto_backup,args__31746__auto__,null);
}
};
var frontend$components$export$auto_backup = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__43713__i = 0, G__43713__a = new Array(arguments.length -  0);
while (G__43713__i < G__43713__a.length) {G__43713__a[G__43713__i] = arguments[G__43713__i + 0]; ++G__43713__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__43713__a,0,null);
} 
return frontend$components$export$auto_backup__delegate.call(this,args__31746__auto__);};
frontend$components$export$auto_backup.cljs$lang$maxFixedArity = 0;
frontend$components$export$auto_backup.cljs$lang$applyTo = (function (arglist__43714){
var args__31746__auto__ = cljs.core.seq(arglist__43714);
return frontend$components$export$auto_backup__delegate(args__31746__auto__);
});
frontend$components$export$auto_backup.cljs$core$IFn$_invoke$arity$variadic = frontend$components$export$auto_backup__delegate;
return frontend$components$export$auto_backup;
})()
;
var memo_comp__31747__auto__ = (function (){var G__42984 = comp__31745__auto__;
var G__42985 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__42984,G__42985) : io.factorhouse.hsx.core.react_memo.call(null,G__42984,G__42985));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"auto-backup");

return comp__31745__auto__;
})();
frontend.components.export$.export$ = (function (){var render_fn__31744__auto__ = (function frontend$components$export$export(){
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var current_repo = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.export","div.export",-41470672),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title.mb-8","h1.title.mb-8",-124034777),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","title","export/title",1887910427)], 0))], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-4.ml-1","div.flex.flex-col.gap-4.ml-1",859131354),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.font-medium","a.font-medium",-910158116),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.export$.export_repo_as_sqlite_db_BANG_(current_repo);
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","sqlite-db","export/sqlite-db",1379044819)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm.opacity-70.mb-0","p.text-sm.opacity-70.mb-0",-1327348047),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export.backup","sqlite-desc","export.backup/sqlite-desc",1166417672)], 0))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.font-medium","a.font-medium",-910158116),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.export$.export_repo_as_zip_BANG_(current_repo);
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","zip","export/zip",-451328024)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm.opacity-70.mb-0","p.text-sm.opacity-70.mb-0",-1327348047),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export.backup","zip-desc","export.backup/zip-desc",-1937934525)], 0))], null)], null),(cljs.core.truth_(frontend.util.mobile_QMARK_())?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.font-medium","a.font-medium",-910158116),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.db_based.export$.export_repo_as_db_edn_BANG_(current_repo);
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","db-edn","export/db-edn",737261762)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm.opacity-70.mb-0","p.text-sm.opacity-70.mb-0",-1327348047),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","edn-desc","export/edn-desc",865113088)], 0))], null)], null)),(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.font-medium","a.font-medium",-910158116),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.export$.text.export_repo_as_markdown_BANG_(current_repo);
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","markdown","export/markdown",493882293)], 0))], null)], null)),(cljs.core.truth_(frontend.util.electron_QMARK_())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.font-medium","a.font-medium",-910158116),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.export$.download_repo_as_html_BANG_(current_repo);
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","public-pages","export/public-pages",-518069155)], 0))], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.font-medium","a.font-medium",-910158116),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.export$.export_repo_as_debug_transit_BANG_(current_repo);
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","debug-transit-file","export/debug-transit-file",1842360990)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm.opacity-70.mb-0","p.text-sm.opacity-70.mb-0",-1327348047),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","debug-transit-desc","export/debug-transit-desc",5308468)], 0))], null)], null),(cljs.core.truth_(frontend.util.electron_QMARK_())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.interpolate_rich_text_node.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export.backup","enabled-desc","export.backup/enabled-desc",-75379737)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.ml-1","a.ml-1",1979802547),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var path = frontend.config.get_electron_backup_dir(frontend.state.get_current_repo());
return window.apis.openPath(path);
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export.backup","open-folder","export.backup/open-folder",-1257294273)], 0))], null)], null))], null)], null):((((frontend.util.web_platform_QMARK_) && (cljs.core.not(frontend.util.mobile_QMARK_()))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),frontend.components.export$.auto_backup()], null):null))], null)], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$export$export__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__43145 = cljs.core.first(args__31746__auto__);
var G__43146 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__43145,G__43146) : io.factorhouse.hsx.core.obj_get.call(null,G__43145,G__43146));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"export","export",1854888117,null),args__31746__auto__),frontend$components$export$export,args__31746__auto__,null);
}
};
var frontend$components$export$export = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__43724__i = 0, G__43724__a = new Array(arguments.length -  0);
while (G__43724__i < G__43724__a.length) {G__43724__a[G__43724__i] = arguments[G__43724__i + 0]; ++G__43724__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__43724__a,0,null);
} 
return frontend$components$export$export__delegate.call(this,args__31746__auto__);};
frontend$components$export$export.cljs$lang$maxFixedArity = 0;
frontend$components$export$export.cljs$lang$applyTo = (function (arglist__43725){
var args__31746__auto__ = cljs.core.seq(arglist__43725);
return frontend$components$export$export__delegate(args__31746__auto__);
});
frontend$components$export$export.cljs$core$IFn$_invoke$arity$variadic = frontend$components$export$export__delegate;
return frontend$components$export$export;
})()
;
var memo_comp__31747__auto__ = (function (){var G__43158 = comp__31745__auto__;
var G__43159 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__43158,G__43159) : io.factorhouse.hsx.core.react_memo.call(null,G__43158,G__43159));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"export");

return comp__31745__auto__;
})();
frontend.components.export$._STAR_export_block_type = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"text","text",-1790561697));
frontend.components.export$.text_indent_style_options = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title-key","title-key",830482796),new cljs.core.Keyword("export","indent-style-dashes","export/indent-style-dashes",930685790),new cljs.core.Keyword(null,"value","value",305978217),"dashes"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title-key","title-key",830482796),new cljs.core.Keyword("export","indent-style-spaces","export/indent-style-spaces",258727427),new cljs.core.Keyword(null,"value","value",305978217),"spaces"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title-key","title-key",830482796),new cljs.core.Keyword("export","indent-style-none","export/indent-style-none",869501270),new cljs.core.Keyword(null,"value","value",305978217),"no-indent"], null)], null);
frontend.components.export$.export_helper = (function frontend$components$export$export_helper(var_args){
var G__43229 = arguments.length;
switch (G__43229) {
case 1:
return frontend.components.export$.export_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.components.export$.export_helper.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.components.export$.export_helper.cljs$core$IFn$_invoke$arity$1 = (function (top_level_ids){
return frontend.components.export$.export_helper.cljs$core$IFn$_invoke$arity$2(top_level_ids,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.components.export$.export_helper.cljs$core$IFn$_invoke$arity$2 = (function (top_level_ids,export_options){
var current_repo = frontend.state.get_current_repo();
var text_indent_style = ((cljs.core.contains_QMARK_(export_options,new cljs.core.Keyword(null,"indent-style","indent-style",855468755)))?new cljs.core.Keyword(null,"indent-style","indent-style",855468755).cljs$core$IFn$_invoke$arity$1(export_options):frontend.state.get_export_block_text_indent_style());
var text_remove_options = ((cljs.core.contains_QMARK_(export_options,new cljs.core.Keyword(null,"remove-options","remove-options",768737839)))?new cljs.core.Keyword(null,"remove-options","remove-options",768737839).cljs$core$IFn$_invoke$arity$1(export_options):cljs.core.set(frontend.state.get_export_block_text_remove_options()));
var text_other_options = ((cljs.core.contains_QMARK_(export_options,new cljs.core.Keyword(null,"other-options","other-options",170412142)))?new cljs.core.Keyword(null,"other-options","other-options",170412142).cljs$core$IFn$_invoke$arity$1(export_options):frontend.state.get_export_block_text_other_options());
var tp = cljs.core.deref(frontend.components.export$._STAR_export_block_type);
var G__43350 = tp;
var G__43350__$1 = (((G__43350 instanceof cljs.core.Keyword))?G__43350.fqn:null);
switch (G__43350__$1) {
case "text":
return frontend.handler.export$.text.export_blocks_as_markdown(current_repo,top_level_ids,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"indent-style","indent-style",855468755),text_indent_style,new cljs.core.Keyword(null,"remove-options","remove-options",768737839),text_remove_options,new cljs.core.Keyword(null,"other-options","other-options",170412142),text_other_options], null));

break;
case "opml":
return frontend.handler.export$.opml.export_blocks_as_opml(current_repo,top_level_ids,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remove-options","remove-options",768737839),text_remove_options,new cljs.core.Keyword(null,"other-options","other-options",170412142),text_other_options], null));

break;
case "html":
return frontend.handler.export$.html.export_blocks_as_html(current_repo,top_level_ids,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remove-options","remove-options",768737839),text_remove_options,new cljs.core.Keyword(null,"other-options","other-options",170412142),text_other_options], null));

break;
default:
return "";

}
}));

(frontend.components.export$.export_helper.cljs$lang$maxFixedArity = 2);

frontend.components.export$.reset_export_content_BANG_ = (function frontend$components$export$reset_export_content_BANG_(var_args){
var G__43362 = arguments.length;
switch (G__43362) {
case 2:
return frontend.components.export$.reset_export_content_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.components.export$.reset_export_content_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.components.export$.reset_export_content_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_STAR_content,top_level_ids){
return frontend.components.export$.reset_export_content_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_content,top_level_ids,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.components.export$.reset_export_content_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_STAR_content,top_level_ids,export_options){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.export$.export_helper.cljs$core$IFn$_invoke$arity$2(top_level_ids,export_options)),(function (content){
return promesa.protocols._promise(cljs.core.reset_BANG_(_STAR_content,content));
}));
}));
}));

(frontend.components.export$.reset_export_content_BANG_.cljs$lang$maxFixedArity = 3);

frontend.components.export$._LT_export_edn_helper = (function frontend$components$export$_LT_export_edn_helper(root_block_uuids_or_page_uuid,export_type){
var export_args = (function (){var G__43373 = export_type;
var G__43373__$1 = (((G__43373 instanceof cljs.core.Keyword))?G__43373.fqn:null);
switch (G__43373__$1) {
case "page":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.first(root_block_uuids_or_page_uuid)], null)], null);

break;
case "block":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block-id","block-id",-70582834),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.first(root_block_uuids_or_page_uuid)], null)], null);

break;
case "selected-nodes":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node-ids","node-ids",2015830052),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__43370_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),p1__43370_SHARP_],null));
}),root_block_uuids_or_page_uuid)], null);

break;
default:
return cljs.core.PersistentArrayMap.EMPTY;

}
})();
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","export-edn","thread-api/export-edn",507686782),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"export-type","export-type",-2087639167),export_type], null),export_args], 0))], 0))),(function (export_edn){
return promesa.protocols._promise((cljs.core.truth_((function (){var fexpr__43378 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),null,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),null], null), null);
return (fexpr__43378.cljs$core$IFn$_invoke$arity$1 ? fexpr__43378.cljs$core$IFn$_invoke$arity$1(export_type) : fexpr__43378.call(null,export_type));
})())?(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(logseq.db.sqlite.export$.validate_export(export_edn));
if(cljs.core.truth_(temp__5823__auto__)){
var error = temp__5823__auto__;
console.log("Invalid export EDN:");

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(export_edn);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"export-edn-error","export-edn-error",867881458),error], null);
} else {
return export_edn;
}
})():export_edn));
}));
}));
});
frontend.components.export$.get_image_blob = (function frontend$components$export$get_image_blob(block_uuids_or_page_name,p__43384,callback){
var map__43386 = p__43384;
var map__43386__$1 = cljs.core.__destructure_map(map__43386);
var transparent_bg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43386__$1,new cljs.core.Keyword(null,"transparent-bg?","transparent-bg?",1544645013));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43386__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43386__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43386__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43386__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43386__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var top_block_id = ((cljs.core.coll_QMARK_(block_uuids_or_page_name))?cljs.core.first(block_uuids_or_page_name):block_uuids_or_page_name);
var style = window.getComputedStyle(document.body);
var background = (cljs.core.truth_(transparent_bg_QMARK_)?null:style.getPropertyValue("--ls-primary-background-color"));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.export$._LT_page_block_QMARK_(top_block_id)),(function (page_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(page_QMARK_)?"#main-content-container":(""+"[blockid='"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(top_block_id)+"']"))),(function (selector){
return promesa.protocols._mcat(promesa.protocols._promise(document.querySelector(selector)),(function (container){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(page_QMARK_)?((1) / (function (){var or__5142__auto__ = zoom;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (1);
}
})()):(1))),(function (scale){
return promesa.protocols._mcat(promesa.protocols._promise(({"y": (function (){var or__5142__auto__ = (y / scale);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})(), "useCORS": true, "scrollX": (0), "scrollY": (0), "scale": scale, "width": (cljs.core.truth_(width)?(width / scale):null), "windowHeight": (cljs.core.truth_(page_QMARK_)?container.scrollHeight:null), "allowTaint": true, "x": (function (){var or__5142__auto__ = (x / scale);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})(), "backgroundColor": (function (){var or__5142__auto__ = background;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "transparent";
}
})(), "height": (cljs.core.truth_(height)?(height / scale):null)})),(function (options){
return promesa.protocols._mcat(promesa.protocols._promise(html2canvas(container,options)),(function (canvas){
return promesa.protocols._promise(canvas.toBlob((function (blob){
if(cljs.core.truth_(blob)){
var img = document.getElementById("export-preview");
var img_url = frontend.image.create_object_url(blob);
(img.src = img_url);

return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(blob) : callback.call(null,blob));
} else {
return null;
}
}),"image/png"));
}));
}));
}));
}));
}));
}));
}));
});
frontend.components.export$._LT_get_top_level_uuids = (function frontend$components$export$_LT_get_top_level_uuids(selection_ids){
var temp__5825__auto__ = (function (){var and__5140__auto__ = cljs.core.seq(selection_ids);
if(and__5140__auto__){
return frontend.state.get_current_repo();
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_blocks(repo,selection_ids)),(function (results){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block","block",664686210),results)),(function (blocks){
return promesa.protocols._promise(((cljs.core.seq(blocks))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),frontend.handler.block.get_top_level_blocks(blocks)):null));
}));
}));
}));
} else {
return null;
}
});
frontend.components.export$.export_blocks = (function (){var render_fn__31744__auto__ = (function frontend$components$export$export_blocks(_selection_ids,p__43445){
var map__43446 = p__43445;
var map__43446__$1 = cljs.core.__destructure_map(map__43446);
var options = map__43446__$1;
var export_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43446__$1,new cljs.core.Keyword(null,"export-type","export-type",-2087639167));
var _STAR_top_level_uuids = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}),cljs.core.PersistentVector.EMPTY);
var vec__43449 = logseq.shui.hooks.use_atom(_STAR_top_level_uuids);
var top_level_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43449,(0),null);
var _STAR_text_other_options = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}),cljs.core.PersistentVector.EMPTY);
var _STAR_text_remove_options = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}),cljs.core.PersistentVector.EMPTY);
var _STAR_text_indent_style = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}),cljs.core.PersistentVector.EMPTY);
var _STAR_copied_QMARK_ = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}),cljs.core.PersistentVector.EMPTY);
var _STAR_content = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}),cljs.core.PersistentVector.EMPTY);
var vec__43452 = logseq.shui.hooks.use_atom(_STAR_text_other_options);
var text_other_options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43452,(0),null);
var vec__43455 = logseq.shui.hooks.use_atom(_STAR_text_remove_options);
var text_remove_options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43455,(0),null);
var vec__43458 = logseq.shui.hooks.use_atom(_STAR_text_indent_style);
var text_indent_style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43458,(0),null);
var vec__43461 = logseq.shui.hooks.use_atom(_STAR_copied_QMARK_);
var copied_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43461,(0),null);
var vec__43464 = logseq.shui.hooks.use_atom(_STAR_content);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43464,(0),null);
var tp = cljs.core.deref(frontend.components.export$._STAR_export_block_type);
logseq.shui.hooks.use_effect_BANG_((function (){
cljs.core.reset_BANG_(_STAR_top_level_uuids,null);

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.export$._LT_get_top_level_uuids(_selection_ids)),(function (top_level_uuids__$1){
return promesa.protocols._promise(cljs.core.reset_BANG_(_STAR_top_level_uuids,top_level_uuids__$1));
}));
}));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_selection_ids], null));

logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(top_level_uuids)){
var current_remove_options = cljs.core.set(frontend.state.get_export_block_text_remove_options());
var current_indent_style = frontend.state.get_export_block_text_indent_style();
var current_other_options = frontend.state.get_export_block_text_other_options();
cljs.core.reset_BANG_(frontend.components.export$._STAR_export_block_type,new cljs.core.Keyword(null,"text","text",-1790561697));

cljs.core.reset_BANG_(_STAR_text_remove_options,current_remove_options);

cljs.core.reset_BANG_(_STAR_text_indent_style,current_indent_style);

cljs.core.reset_BANG_(_STAR_text_other_options,current_other_options);

return frontend.components.export$.reset_export_content_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_content,top_level_uuids,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"indent-style","indent-style",855468755),current_indent_style,new cljs.core.Keyword(null,"remove-options","remove-options",768737839),current_remove_options,new cljs.core.Keyword(null,"other-options","other-options",170412142),current_other_options], null));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [top_level_uuids], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.export.resize","div.export.resize",316041660),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"-m-5"], null),(((top_level_uuids == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-6","div.p-6",1412057822),frontend.ui.loading.cljs$core$IFn$_invoke$arity$1("")], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-6","div.p-6",1412057822),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.pb-3","div.flex.pb-3",164469529),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","format-text","export/format-text",-638846620)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"mr-4 w-20",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(frontend.components.export$._STAR_export_block_type,new cljs.core.Keyword(null,"text","text",-1790561697));

return frontend.components.export$.reset_export_content_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_content,top_level_uuids);
})], 0)),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("OPML",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"mr-4 w-20",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(frontend.components.export$._STAR_export_block_type,new cljs.core.Keyword(null,"opml","opml",2114938640));

return frontend.components.export$.reset_export_content_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_content,top_level_uuids);
})], 0)),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("HTML",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"mr-4 w-20",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(frontend.components.export$._STAR_export_block_type,new cljs.core.Keyword(null,"html","html",-998796897));

return frontend.components.export$.reset_export_content_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_content,top_level_uuids);
})], 0)),((cljs.core.seq_QMARK_(top_level_uuids))?null:frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("PNG",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"mr-4 w-20",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(frontend.components.export$._STAR_export_block_type,new cljs.core.Keyword(null,"png","png",551930691));

cljs.core.reset_BANG_(_STAR_content,null);

return frontend.components.export$.get_image_blob(top_level_uuids,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transparent-bg?","transparent-bg?",1544645013),false], null)], 0)),(function (blob){
return cljs.core.reset_BANG_(_STAR_content,blob);
}));
})], 0))),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("EDN",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"w-20",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(frontend.components.export$._STAR_export_block_type,new cljs.core.Keyword(null,"edn","edn",1317840885));

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.export$._LT_export_edn_helper(top_level_uuids,export_type)),(function (result){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43495_43774 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43496_43775 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43499_43776 = true;
var _STAR_print_fn_STAR__temp_val__43500_43777 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43499_43776);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43500_43777);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(result);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43496_43775);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43495_43774);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})()),(function (pull_data){
return promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword(null,"export-edn-error","export-edn-error",867881458).cljs$core$IFn$_invoke$arity$1(result))?frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"export-edn-error","export-edn-error",867881458).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"error","error",-978969032)):cljs.core.reset_BANG_(_STAR_content,pull_data)));
}));
}));
}));
})], 0))], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"png","png",551930691),tp))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.justify-center.relative","div.flex.items-center.justify-center.relative",55654673),((cljs.core.not(content))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.absolute","div.absolute",1404644568),frontend.ui.loading.cljs$core$IFn$_invoke$arity$1("")], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"alt","alt",-3214426),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","preview-alt","export/preview-alt",-2130329515)], 0)),new cljs.core.Keyword(null,"id","id",-1388402092),"export-preview",new cljs.core.Keyword(null,"class","class",-2030961996),"my-4",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),((cljs.core.not(content))?"hidden":null)], null)], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.overflow-y-auto.h-96","textarea.overflow-y-auto.h-96",83455387),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),content,new cljs.core.Keyword(null,"read-only","read-only",-191706886),true], null)], null)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"png","png",551930691),tp))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","transparent-background","export/transparent-background",2003621595)], 0))], null),frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"mr-2 ml-4",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
cljs.core.reset_BANG_(_STAR_content,null);

return frontend.components.export$.get_image_blob(top_level_uuids,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transparent-bg?","transparent-bg?",1544645013),e.currentTarget.checked], null)], 0)),(function (blob){
return cljs.core.reset_BANG_(_STAR_content,blob);
}));
})], null))], null):(function (){var options__$1 = frontend.components.export$.text_indent_style_options;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.mr-4","label.mr-4",613459784),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),tp))?"visible":"hidden")], null)], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","indent-style-label","export/indent-style-label",2032617670)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.block.my-2.text-lg.rounded.border.py-0.px-1","select.block.my-2.text-lg.rounded.border.py-0.px-1",-613647601),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),tp))?"visible":"hidden")], null),new cljs.core.Keyword(null,"value","value",305978217),text_indent_style,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var next_indent_style = frontend.util.evalue(e);
frontend.state.set_export_block_text_indent_style_BANG_(next_indent_style);

cljs.core.reset_BANG_(_STAR_text_indent_style,next_indent_style);

return frontend.components.export$.reset_export_content_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_content,top_level_uuids,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"indent-style","indent-style",855468755),next_indent_style,new cljs.core.Keyword(null,"remove-options","remove-options",768737839),text_remove_options,new cljs.core.Keyword(null,"other-options","other-options",170412142),text_other_options], null));
})], null),(function (){var iter__5628__auto__ = (function frontend$components$export$export_blocks_$_iter__43534(s__43535){
return (new cljs.core.LazySeq(null,(function (){
var s__43535__$1 = s__43535;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__43535__$1);
if(temp__5825__auto__){
var s__43535__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43535__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__43535__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__43540 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__43539 = (0);
while(true){
if((i__43539 < size__5627__auto__)){
var map__43546 = cljs.core._nth(c__5626__auto__,i__43539);
var map__43546__$1 = cljs.core.__destructure_map(map__43546);
var title_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43546__$1,new cljs.core.Keyword(null,"title-key","title-key",830482796));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43546__$1,new cljs.core.Keyword(null,"value","value",305978217));
cljs.core.chunk_append(b__43540,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),title_key,new cljs.core.Keyword(null,"value","value",305978217),value], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([title_key], 0))], null));

var G__43785 = (i__43539 + (1));
i__43539 = G__43785;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43540),frontend$components$export$export_blocks_$_iter__43534(cljs.core.chunk_rest(s__43535__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43540),null);
}
} else {
var map__43565 = cljs.core.first(s__43535__$2);
var map__43565__$1 = cljs.core.__destructure_map(map__43565);
var title_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43565__$1,new cljs.core.Keyword(null,"title-key","title-key",830482796));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43565__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),title_key,new cljs.core.Keyword(null,"value","value",305978217),value], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([title_key], 0))], null),frontend$components$export$export_blocks_$_iter__43534(cljs.core.rest(s__43535__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(options__$1);
})()], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"mr-2",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_((function (){var fexpr__43568 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opml","opml",2114938640),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__43568.cljs$core$IFn$_invoke$arity$1 ? fexpr__43568.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__43568.call(null,tp));
})())?"visible":"hidden")], null),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(text_remove_options,new cljs.core.Keyword(null,"page-ref","page-ref",-1047131151)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
frontend.state.update_export_block_text_remove_options_BANG_(e,new cljs.core.Keyword(null,"page-ref","page-ref",-1047131151));

cljs.core.reset_BANG_(_STAR_text_remove_options,frontend.state.get_export_block_text_remove_options());

return frontend.components.export$.reset_export_content_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_content,top_level_uuids);
})], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_((function (){var fexpr__43569 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opml","opml",2114938640),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__43569.cljs$core$IFn$_invoke$arity$1 ? fexpr__43569.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__43569.call(null,tp));
})())?"visible":"hidden")], null)], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","page-ref-text","export/page-ref-text",-1122465297)], 0))], null),frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"mr-2 ml-4",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_((function (){var fexpr__43570 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opml","opml",2114938640),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__43570.cljs$core$IFn$_invoke$arity$1 ? fexpr__43570.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__43570.call(null,tp));
})())?"visible":"hidden")], null),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(text_remove_options,new cljs.core.Keyword(null,"emphasis","emphasis",293543451)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
frontend.state.update_export_block_text_remove_options_BANG_(e,new cljs.core.Keyword(null,"emphasis","emphasis",293543451));

cljs.core.reset_BANG_(_STAR_text_remove_options,frontend.state.get_export_block_text_remove_options());

return frontend.components.export$.reset_export_content_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_content,top_level_uuids);
})], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_((function (){var fexpr__43571 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opml","opml",2114938640),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__43571.cljs$core$IFn$_invoke$arity$1 ? fexpr__43571.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__43571.call(null,tp));
})())?"visible":"hidden")], null)], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","remove-emphasis","export/remove-emphasis",-950568250)], 0))], null),frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"mr-2 ml-4",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_((function (){var fexpr__43603 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opml","opml",2114938640),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__43603.cljs$core$IFn$_invoke$arity$1 ? fexpr__43603.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__43603.call(null,tp));
})())?"visible":"hidden")], null),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(text_remove_options,new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
frontend.state.update_export_block_text_remove_options_BANG_(e,new cljs.core.Keyword(null,"tag","tag",-1290361223));

cljs.core.reset_BANG_(_STAR_text_remove_options,frontend.state.get_export_block_text_remove_options());

return frontend.components.export$.reset_export_content_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_content,top_level_uuids);
})], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_((function (){var fexpr__43605 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opml","opml",2114938640),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__43605.cljs$core$IFn$_invoke$arity$1 ? fexpr__43605.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__43605.call(null,tp));
})())?"visible":"hidden")], null)], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","remove-tags","export/remove-tags",37184980)], 0))], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"mr-2",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_((function (){var fexpr__43608 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__43608.cljs$core$IFn$_invoke$arity$1 ? fexpr__43608.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__43608.call(null,tp));
})())?"visible":"hidden")], null),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.boolean$(new cljs.core.Keyword(null,"newline-after-block","newline-after-block",137428571).cljs$core$IFn$_invoke$arity$1(text_other_options)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
frontend.state.update_export_block_text_other_options_BANG_(new cljs.core.Keyword(null,"newline-after-block","newline-after-block",137428571),cljs.core.boolean$(frontend.util.echecked_QMARK_(e)));

cljs.core.reset_BANG_(_STAR_text_other_options,frontend.state.get_export_block_text_other_options());

return frontend.components.export$.reset_export_content_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_content,top_level_uuids);
})], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_((function (){var fexpr__43611 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__43611.cljs$core$IFn$_invoke$arity$1 ? fexpr__43611.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__43611.call(null,tp));
})())?"visible":"hidden")], null)], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","newline-after-block","export/newline-after-block",1123689143)], 0))], null),frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"mr-2 ml-4",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_((function (){var fexpr__43613 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__43613.cljs$core$IFn$_invoke$arity$1 ? fexpr__43613.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__43613.call(null,tp));
})())?"visible":"hidden")], null),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(text_remove_options,new cljs.core.Keyword(null,"property","property",-1114278232)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
frontend.state.update_export_block_text_remove_options_BANG_(e,new cljs.core.Keyword(null,"property","property",-1114278232));

cljs.core.reset_BANG_(_STAR_text_remove_options,frontend.state.get_export_block_text_remove_options());

return frontend.components.export$.reset_export_content_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_content,top_level_uuids);
})], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_((function (){var fexpr__43616 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__43616.cljs$core$IFn$_invoke$arity$1 ? fexpr__43616.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__43616.call(null,tp));
})())?"visible":"hidden")], null)], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","remove-properties","export/remove-properties",-789032721)], 0))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"mr-2",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_((function (){var fexpr__43618 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opml","opml",2114938640),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__43618.cljs$core$IFn$_invoke$arity$1 ? fexpr__43618.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__43618.call(null,tp));
})())?"visible":"hidden")], null),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.boolean$(new cljs.core.Keyword(null,"open-blocks-only","open-blocks-only",2015107442).cljs$core$IFn$_invoke$arity$1(text_other_options)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
frontend.state.update_export_block_text_other_options_BANG_(new cljs.core.Keyword(null,"open-blocks-only","open-blocks-only",2015107442),cljs.core.boolean$(frontend.util.echecked_QMARK_(e)));

cljs.core.reset_BANG_(_STAR_text_other_options,frontend.state.get_export_block_text_other_options());

return frontend.components.export$.reset_export_content_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_content,top_level_uuids);
})], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_((function (){var fexpr__43620 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opml","opml",2114938640),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__43620.cljs$core$IFn$_invoke$arity$1 ? fexpr__43620.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__43620.call(null,tp));
})())?"visible":"hidden")], null)], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","open-blocks-only","export/open-blocks-only",-1301158498)], 0))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.mr-2","label.mr-2",1868362211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_((function (){var fexpr__43623 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opml","opml",2114938640),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__43623.cljs$core$IFn$_invoke$arity$1 ? fexpr__43623.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__43623.call(null,tp));
})())?"visible":"hidden")], null)], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","level-lte","export/level-lte",1763804728)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.block.my-2.text-lg.rounded.border.px-2.py-0","select.block.my-2.text-lg.rounded.border.px-2.py-0",-69472576),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_((function (){var fexpr__43625 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opml","opml",2114938640),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__43625.cljs$core$IFn$_invoke$arity$1 ? fexpr__43625.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__43625.call(null,tp));
})())?"visible":"hidden")], null),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"keep-only-level<=N","keep-only-level<=N",-1010734857).cljs$core$IFn$_invoke$arity$1(text_other_options);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"all","all",892129742);
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var value = frontend.util.evalue(e);
var level = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("all",value))?new cljs.core.Keyword(null,"all","all",892129742):frontend.util.safe_parse_int(value));
frontend.state.update_export_block_text_other_options_BANG_(new cljs.core.Keyword(null,"keep-only-level<=N","keep-only-level<=N",-1010734857),level);

cljs.core.reset_BANG_(_STAR_text_other_options,frontend.state.get_export_block_text_other_options());

return frontend.components.export$.reset_export_content_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_content,top_level_uuids);
})], null),(function (){var iter__5628__auto__ = (function frontend$components$export$export_blocks_$_iter__43630(s__43631){
return (new cljs.core.LazySeq(null,(function (){
var s__43631__$1 = s__43631;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__43631__$1);
if(temp__5825__auto__){
var s__43631__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43631__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__43631__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__43633 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__43632 = (0);
while(true){
if((i__43632 < size__5627__auto__)){
var n = cljs.core._nth(c__5626__auto__,i__43632);
cljs.core.chunk_append(b__43633,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),n,new cljs.core.Keyword(null,"value","value",305978217),n], null),n], null));

var G__43803 = (i__43632 + (1));
i__43632 = G__43803;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43633),frontend$components$export$export_blocks_$_iter__43630(cljs.core.chunk_rest(s__43631__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43633),null);
}
} else {
var n = cljs.core.first(s__43631__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),n,new cljs.core.Keyword(null,"value","value",305978217),n], null),n], null),frontend$components$export$export_blocks_$_iter__43630(cljs.core.rest(s__43631__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.cons("all",cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(10))));
})()], null)], null)], null);
})()),(cljs.core.truth_(content)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-4.flex.flex-row.gap-2","div.mt-4.flex.flex-row.gap-2",-1254009315),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(copied_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","copied-to-clipboard","export/copied-to-clipboard",-1644407278)], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","copy-to-clipboard","ui/copy-to-clipboard",-1375472471)], 0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"mr-4",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tp,new cljs.core.Keyword(null,"png","png",551930691))){
navigator.clipboard.write(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ClipboardItem(({"image/png": content})))], null));
} else {
frontend.util.copy_to_clipboard_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"html","html",-998796897),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tp,new cljs.core.Keyword(null,"html","html",-998796897)))?content:null)], 0));
}

return cljs.core.reset_BANG_(_STAR_copied_QMARK_,true);
})], 0)),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","save-to-file","export/save-to-file",1519484439)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var file_name = cljs_time.core.now();
return module$frontend$utils.saveToFile((new Blob(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null))),(""+"logseq_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tp,new cljs.core.Keyword(null,"text","text",-1790561697)))?"txt":cljs.core.name(tp)));
})], 0))], null):null)], null))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$export$export_blocks__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__43647 = cljs.core.first(args__31746__auto__);
var G__43648 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__43647,G__43648) : io.factorhouse.hsx.core.obj_get.call(null,G__43647,G__43648));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"export-blocks","export-blocks",1065627604,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$export$export_blocks,args__31746__auto__,null);
}
};
var frontend$components$export$export_blocks = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__43811__i = 0, G__43811__a = new Array(arguments.length -  0);
while (G__43811__i < G__43811__a.length) {G__43811__a[G__43811__i] = arguments[G__43811__i + 0]; ++G__43811__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__43811__a,0,null);
} 
return frontend$components$export$export_blocks__delegate.call(this,args__31746__auto__);};
frontend$components$export$export_blocks.cljs$lang$maxFixedArity = 0;
frontend$components$export$export_blocks.cljs$lang$applyTo = (function (arglist__43812){
var args__31746__auto__ = cljs.core.seq(arglist__43812);
return frontend$components$export$export_blocks__delegate(args__31746__auto__);
});
frontend$components$export$export_blocks.cljs$core$IFn$_invoke$arity$variadic = frontend$components$export$export_blocks__delegate;
return frontend$components$export$export_blocks;
})()
;
var memo_comp__31747__auto__ = (function (){var G__43651 = comp__31745__auto__;
var G__43652 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__43651,G__43652) : io.factorhouse.hsx.core.react_memo.call(null,G__43651,G__43652));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"export-blocks");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.export.js.map
