goog.provide('frontend.components.file');
frontend.components.file.get_path = (function frontend$components$file$get_path(route_match){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_match,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168)], null));
});
frontend.components.file.files_all = (function (){var render_fn__31744__auto__ = (function frontend$components$file$files_all(){
var vec__59062 = logseq.shui.hooks.use_state(null);
var files = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59062,(0),null);
var set_files_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59062,(1),null);
var _ = logseq.shui.hooks.use_effect_BANG_((function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_files(frontend.state.get_current_repo())),(function (result){
return promesa.protocols._promise((set_files_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_files_BANG_.cljs$core$IFn$_invoke$arity$1(result) : set_files_BANG_.call(null,result)));
}));
}));
}),cljs.core.PersistentVector.EMPTY);
var files__$1 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.first,goog.string.intAwareCompare,files);
var mobile_QMARK_ = frontend.util.mobile_QMARK_();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table-auto","table.table-auto",-490665373),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file","name","file/name",1848919477)], 0))], null),(cljs.core.truth_(mobile_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file","last-modified-at","file/last-modified-at",473527310)], 0))], null)),(cljs.core.truth_(mobile_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),""], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5628__auto__ = (function frontend$components$file$files_all_$_iter__59065(s__59066){
return (new cljs.core.LazySeq(null,(function (){
var s__59066__$1 = s__59066;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__59066__$1);
if(temp__5825__auto__){
var s__59066__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59066__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__59066__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__59068 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__59067 = (0);
while(true){
if((i__59067 < size__5627__auto__)){
var vec__59069 = cljs.core._nth(c__5626__auto__,i__59067);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59069,(0),null);
var modified_at = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59069,(1),null);
cljs.core.chunk_append(b__59068,(function (){var file_id = file;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),file_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(function (){var href = reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),file_id], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null),file], null);
})()], null),(cljs.core.truth_(mobile_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-500.text-sm","span.text-gray-500.text-sm",921719094),(((((modified_at == null)) || ((modified_at === (0)))))?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file","no-data","file/no-data",-1707813734)], 0)):frontend.date.get_date_time_string(cljs_time.core.to_default_time_zone(cljs_time.coerce.to_date_time(modified_at))))], null)], null))], null);
})());

var G__59098 = (i__59067 + (1));
i__59067 = G__59098;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59068),frontend$components$file$files_all_$_iter__59065(cljs.core.chunk_rest(s__59066__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59068),null);
}
} else {
var vec__59072 = cljs.core.first(s__59066__$2);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59072,(0),null);
var modified_at = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59072,(1),null);
return cljs.core.cons((function (){var file_id = file;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),file_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(function (){var href = reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),file_id], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null),file], null);
})()], null),(cljs.core.truth_(mobile_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-500.text-sm","span.text-gray-500.text-sm",921719094),(((((modified_at == null)) || ((modified_at === (0)))))?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file","no-data","file/no-data",-1707813734)], 0)):frontend.date.get_date_time_string(cljs_time.core.to_default_time_zone(cljs_time.coerce.to_date_time(modified_at))))], null)], null))], null);
})(),frontend$components$file$files_all_$_iter__59065(cljs.core.rest(s__59066__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(files__$1);
})()], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$file$files_all__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__59075 = cljs.core.first(args__31746__auto__);
var G__59076 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__59075,G__59076) : io.factorhouse.hsx.core.obj_get.call(null,G__59075,G__59076));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"files-all","files-all",-933666966,null),args__31746__auto__),frontend$components$file$files_all,args__31746__auto__,null);
}
};
var frontend$components$file$files_all = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__59099__i = 0, G__59099__a = new Array(arguments.length -  0);
while (G__59099__i < G__59099__a.length) {G__59099__a[G__59099__i] = arguments[G__59099__i + 0]; ++G__59099__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__59099__a,0,null);
} 
return frontend$components$file$files_all__delegate.call(this,args__31746__auto__);};
frontend$components$file$files_all.cljs$lang$maxFixedArity = 0;
frontend$components$file$files_all.cljs$lang$applyTo = (function (arglist__59100){
var args__31746__auto__ = cljs.core.seq(arglist__59100);
return frontend$components$file$files_all__delegate(args__31746__auto__);
});
frontend$components$file$files_all.cljs$core$IFn$_invoke$arity$variadic = frontend$components$file$files_all__delegate;
return frontend$components$file$files_all;
})()
;
var memo_comp__31747__auto__ = (function (){var G__59077 = comp__31745__auto__;
var G__59078 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__59077,G__59078) : io.factorhouse.hsx.core.react_memo.call(null,G__59077,G__59078));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"files-all");

return comp__31745__auto__;
})();
frontend.components.file.files = (function (){var render_fn__31744__auto__ = (function frontend$components$file$files(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-1.overflow-hidden","div.flex-1.overflow-hidden",1327022825),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",-2139952071),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nav","all-files","nav/all-files",1119972926)], 0))], null),frontend.components.file.files_all()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$file$files__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__59079 = cljs.core.first(args__31746__auto__);
var G__59080 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__59079,G__59080) : io.factorhouse.hsx.core.obj_get.call(null,G__59079,G__59080));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"files","files",1168074077,null),args__31746__auto__),frontend$components$file$files,args__31746__auto__,null);
}
};
var frontend$components$file$files = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__59101__i = 0, G__59101__a = new Array(arguments.length -  0);
while (G__59101__i < G__59101__a.length) {G__59101__a[G__59101__i] = arguments[G__59101__i + 0]; ++G__59101__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__59101__a,0,null);
} 
return frontend$components$file$files__delegate.call(this,args__31746__auto__);};
frontend$components$file$files.cljs$lang$maxFixedArity = 0;
frontend$components$file$files.cljs$lang$applyTo = (function (arglist__59102){
var args__31746__auto__ = cljs.core.seq(arglist__59102);
return frontend$components$file$files__delegate(args__31746__auto__);
});
frontend$components$file$files.cljs$core$IFn$_invoke$arity$variadic = frontend$components$file$files__delegate;
return frontend$components$file$files;
})()
;
var memo_comp__31747__auto__ = (function (){var G__59081 = comp__31745__auto__;
var G__59082 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__59081,G__59082) : io.factorhouse.hsx.core.react_memo.call(null,G__59081,G__59082));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"files");

return comp__31745__auto__;
})();
frontend.components.file.file_inner = (function (){var render_fn__31744__auto__ = (function frontend$components$file$file_inner(path,format){
var repo_dir = frontend.config.get_repo_dir(frontend.state.get_current_repo());
var rel_path = ((clojure.string.starts_with_QMARK_(path,repo_dir))?logseq.common.path.trim_dir_prefix(repo_dir,path):null);
var file_path = path;
var random_id = logseq.shui.hooks.use_memo((function (){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.uuid.gen_uuid.cljs$core$IFn$_invoke$arity$0()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var vec__59083 = logseq.shui.hooks.use_state(null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59083,(0),null);
var set_content_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59083,(1),null);
logseq.shui.hooks.use_effect_BANG_((function (){
var repo_59103 = frontend.state.get_current_repo();
var repo_dir_59104__$1 = frontend.config.get_repo_dir(repo_59103);
var vec__59086_59105 = ((logseq.common.path.absolute_QMARK_(path))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo_dir_59104__$1,path], null)
);
var dir_59106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59086_59105,(0),null);
var path_59107__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59086_59105,(1),null);
if(cljs.core.truth_((function (){var and__5140__auto__ = format;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.contains_QMARK_(logseq.common.config.text_formats(),format);
} else {
return and__5140__auto__;
}
})())){
promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.file_content._LT_read_file_content(repo_59103,dir_59106,path_59107__$1)),(function (content__$1){
return promesa.protocols._promise((function (){var G__59089 = (function (){var or__5142__auto__ = content__$1;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})();
return (set_content_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_content_BANG_.cljs$core$IFn$_invoke$arity$1(G__59089) : set_content_BANG_.call(null,G__59089));
})());
}));
}));
} else {
}

return (function (){
return frontend.state.clear_file_component_BANG_();
});
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,format], null));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.file","div.file",1837411179),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(""+"file-edit-wrapper-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(random_id)),new cljs.core.Keyword(null,"key","key",-1516042587),path], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",-2139952071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bdi","bdi",-1323025886),(function (){var or__5142__auto__ = rel_path;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return path;
}
})()], null)], null),(cljs.core.truth_((function (){var and__5140__auto__ = format;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.contains_QMARK_(logseq.common.config.img_formats(),format);
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic("file://",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0))], null)], null):(cljs.core.truth_((function (){var and__5140__auto__ = format;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = cljs.core.contains_QMARK_(logseq.common.config.text_formats(),format);
if(and__5140__auto____$1){
return content;
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?(function (){var content_SINGLEQUOTE_ = clojure.string.trim(content);
var mode = frontend.util.get_file_ext(path);
return frontend.components.lazy_editor.editor(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file?","file?",1755223728),true,new cljs.core.Keyword(null,"file-path","file-path",-2005501162),file_path], null),(""+"file-edit-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(random_id)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-lang","data-lang",969460304),mode], null),content_SINGLEQUOTE_,cljs.core.PersistentArrayMap.EMPTY);
})():(cljs.core.truth_((function (){var and__5140__auto__ = format;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.contains_QMARK_(logseq.common.config.text_formats(),format);
} else {
return and__5140__auto__;
}
})())?frontend.ui.loading.cljs$core$IFn$_invoke$arity$0():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file","format-not-supported","file/format-not-supported",1268716007),cljs.core.name(format)], 0))], null)
)))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$file$file_inner__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__59090 = cljs.core.first(args__31746__auto__);
var G__59091 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__59090,G__59091) : io.factorhouse.hsx.core.obj_get.call(null,G__59090,G__59091));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"file-inner","file-inner",-1609161552,null),args__31746__auto__),frontend$components$file$file_inner,args__31746__auto__,null);
}
};
var frontend$components$file$file_inner = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__59108__i = 0, G__59108__a = new Array(arguments.length -  0);
while (G__59108__i < G__59108__a.length) {G__59108__a[G__59108__i] = arguments[G__59108__i + 0]; ++G__59108__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__59108__a,0,null);
} 
return frontend$components$file$file_inner__delegate.call(this,args__31746__auto__);};
frontend$components$file$file_inner.cljs$lang$maxFixedArity = 0;
frontend$components$file$file_inner.cljs$lang$applyTo = (function (arglist__59109){
var args__31746__auto__ = cljs.core.seq(arglist__59109);
return frontend$components$file$file_inner__delegate(args__31746__auto__);
});
frontend$components$file$file_inner.cljs$core$IFn$_invoke$arity$variadic = frontend$components$file$file_inner__delegate;
return frontend$components$file$file_inner;
})()
;
var memo_comp__31747__auto__ = (function (){var G__59092 = comp__31745__auto__;
var G__59093 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__59092,G__59093) : io.factorhouse.hsx.core.react_memo.call(null,G__59092,G__59093));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"file-inner");

return comp__31745__auto__;
})();
frontend.components.file.file = (function (){var render_fn__31744__auto__ = (function frontend$components$file$file(route_match){
var path = frontend.components.file.get_path(route_match);
var format = logseq.common.util.get_format(path);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.file.file_inner,path,format], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),path], null));
});
var comp__31745__auto__ = (function() { 
var frontend$components$file$file__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__59094 = cljs.core.first(args__31746__auto__);
var G__59095 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__59094,G__59095) : io.factorhouse.hsx.core.obj_get.call(null,G__59094,G__59095));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"file","file",370885649,null),args__31746__auto__),frontend$components$file$file,args__31746__auto__,null);
}
};
var frontend$components$file$file = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__59110__i = 0, G__59110__a = new Array(arguments.length -  0);
while (G__59110__i < G__59110__a.length) {G__59110__a[G__59110__i] = arguments[G__59110__i + 0]; ++G__59110__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__59110__a,0,null);
} 
return frontend$components$file$file__delegate.call(this,args__31746__auto__);};
frontend$components$file$file.cljs$lang$maxFixedArity = 0;
frontend$components$file$file.cljs$lang$applyTo = (function (arglist__59111){
var args__31746__auto__ = cljs.core.seq(arglist__59111);
return frontend$components$file$file__delegate(args__31746__auto__);
});
frontend$components$file$file.cljs$core$IFn$_invoke$arity$variadic = frontend$components$file$file__delegate;
return frontend$components$file$file;
})()
;
var memo_comp__31747__auto__ = (function (){var G__59096 = comp__31745__auto__;
var G__59097 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__59096,G__59097) : io.factorhouse.hsx.core.react_memo.call(null,G__59096,G__59097));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"file");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.file.js.map
