goog.provide('frontend.extensions.zotero');
frontend.extensions.zotero.open_button = (function frontend$extensions$zotero$open_button(full_path){
if(clojure.string.ends_with_QMARK_(clojure.string.lower_case(full_path),"pdf")){
return frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","open","ui/open",-1763599412)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var temp__5825__auto__ = frontend.extensions.pdf.assets.inflate_asset(full_path);
if(cljs.core.truth_(temp__5825__auto__)){
var current = temp__5825__auto__;
frontend.util.stop(e);

return frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","current","pdf/current",-1087936477),current);
} else {
return null;
}
})], 0));
} else {
return frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","open","ui/open",-1763599412)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),full_path], 0));
}
});
frontend.extensions.zotero.use_zotero_config = (function frontend$extensions$zotero$use_zotero_config(){
return new cljs.core.Keyword("zotero","settings-v2","zotero/settings-v2",-666496103).cljs$core$IFn$_invoke$arity$1(frontend.state.config_for_repo(frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415)], null)),frontend.state.get_current_repo()));
});
frontend.extensions.zotero.default_settings = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"extra-tags","extra-tags",-1152617311),new cljs.core.Keyword(null,"overwrite-mode?","overwrite-mode?",-1715124409),new cljs.core.Keyword(null,"zotero-data-directory","zotero-data-directory",-218308088),new cljs.core.Keyword(null,"zotero-linked-attachment-base-directory","zotero-linked-attachment-base-directory",-799816118),new cljs.core.Keyword(null,"include-attachments?","include-attachments?",1105323115),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"page-insert-prefix","page-insert-prefix",1646035089),new cljs.core.Keyword(null,"prefer-citekey?","prefer-citekey?",2120866291),new cljs.core.Keyword(null,"include-notes?","include-notes?",1426313915)],["",false,"","",true,new cljs.core.Keyword(null,"user","user",1532431356),"@",true,true]);
frontend.extensions.zotero.default_setting = (function frontend$extensions$zotero$default_setting(k){
var G__47505 = k;
var G__47505__$1 = (((G__47505 instanceof cljs.core.Keyword))?G__47505.fqn:null);
switch (G__47505__$1) {
case "attachments-block-text":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("zotero","attachments","zotero/attachments",-84423315)], 0));

break;
case "notes-block-text":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("zotero","notes","zotero/notes",-393304758)], 0));

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zotero.default_settings,k);

}
});
frontend.extensions.zotero.all_profiles = (function frontend$extensions$zotero$all_profiles(config){
var profiles = cljs.core.set(cljs.core.keys(config));
var default$ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["default",null], null), null);
if(cljs.core.empty_QMARK_(profiles)){
return default$;
} else {
return profiles;
}
});
frontend.extensions.zotero.get_profile = (function frontend$extensions$zotero$get_profile(config){
var profile = frontend.storage.get(new cljs.core.Keyword("zotero","setting-profile","zotero/setting-profile",1949443220));
if(cljs.core.truth_((function (){var and__5140__auto__ = profile;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.contains_QMARK_(frontend.extensions.zotero.all_profiles(config),profile);
} else {
return and__5140__auto__;
}
})())){
return profile;
} else {
return cljs.core.first(frontend.extensions.zotero.all_profiles(config));
}
});
frontend.extensions.zotero.setting = (function frontend$extensions$zotero$setting(config,k){
var profile = frontend.extensions.zotero.get_profile(config);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,profile),k,frontend.extensions.zotero.default_setting(k));
});
frontend.extensions.zotero.zotero_full_path = (function frontend$extensions$zotero$zotero_full_path(config,item_key,filename){
return (""+"file://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__47514 = frontend.extensions.zotero.setting(config,new cljs.core.Keyword(null,"zotero-data-directory","zotero-data-directory",-218308088));
var G__47515 = "storage";
var G__47516 = item_key;
var G__47517 = filename;
return (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$4 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$4(G__47514,G__47515,G__47516,G__47517) : frontend.util.node_path.join.call(null,G__47514,G__47515,G__47516,G__47517));
})()));
});
frontend.extensions.zotero.zotero_imported_file = (function (){var render_fn__31744__auto__ = (function frontend$extensions$zotero$zotero_imported_file(item_key,filename){
var config = frontend.extensions.zotero.use_zotero_config();
var data_directory = frontend.extensions.zotero.setting(config,new cljs.core.Keyword(null,"zotero-data-directory","zotero-data-directory",-218308088));
if(clojure.string.blank_QMARK_(data_directory)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.warning","p.warning",93305750),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("zotero","imported-file-warning","zotero/imported-file-warning",-937800170)], 0))], null);
} else {
var filename__$1 = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(filename);
var full_path = frontend.extensions.zotero.zotero_full_path(config,item_key,filename__$1);
return frontend.extensions.zotero.open_button(full_path);
}
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$zotero$zotero_imported_file__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47518 = cljs.core.first(args__31746__auto__);
var G__47519 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47518,G__47519) : io.factorhouse.hsx.core.obj_get.call(null,G__47518,G__47519));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"zotero-imported-file","zotero-imported-file",1472456572,null),args__31746__auto__),frontend$extensions$zotero$zotero_imported_file,args__31746__auto__,null);
}
};
var frontend$extensions$zotero$zotero_imported_file = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47531__i = 0, G__47531__a = new Array(arguments.length -  0);
while (G__47531__i < G__47531__a.length) {G__47531__a[G__47531__i] = arguments[G__47531__i + 0]; ++G__47531__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47531__a,0,null);
} 
return frontend$extensions$zotero$zotero_imported_file__delegate.call(this,args__31746__auto__);};
frontend$extensions$zotero$zotero_imported_file.cljs$lang$maxFixedArity = 0;
frontend$extensions$zotero$zotero_imported_file.cljs$lang$applyTo = (function (arglist__47533){
var args__31746__auto__ = cljs.core.seq(arglist__47533);
return frontend$extensions$zotero$zotero_imported_file__delegate(args__31746__auto__);
});
frontend$extensions$zotero$zotero_imported_file.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$zotero$zotero_imported_file__delegate;
return frontend$extensions$zotero$zotero_imported_file;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47520 = comp__31745__auto__;
var G__47521 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47520,G__47521) : io.factorhouse.hsx.core.react_memo.call(null,G__47520,G__47521));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"zotero-imported-file");

return comp__31745__auto__;
})();
frontend.extensions.zotero.zotero_linked_file = (function (){var render_fn__31744__auto__ = (function frontend$extensions$zotero$zotero_linked_file(path){
var config = frontend.extensions.zotero.use_zotero_config();
var attachment_directory = frontend.extensions.zotero.setting(config,new cljs.core.Keyword(null,"zotero-linked-attachment-base-directory","zotero-linked-attachment-base-directory",-799816118));
if(clojure.string.blank_QMARK_(attachment_directory)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.warning","p.warning",93305750),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("zotero","linked-file-warning","zotero/linked-file-warning",274393669)], 0))], null);
} else {
var path__$1 = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(path);
var full_path = (""+"file://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__47524 = attachment_directory;
var G__47525 = clojure.string.replace_first(path__$1,"attachments:","");
return (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(G__47524,G__47525) : frontend.util.node_path.join.call(null,G__47524,G__47525));
})()));
return frontend.extensions.zotero.open_button(full_path);
}
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$zotero$zotero_linked_file__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47526 = cljs.core.first(args__31746__auto__);
var G__47527 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47526,G__47527) : io.factorhouse.hsx.core.obj_get.call(null,G__47526,G__47527));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"zotero-linked-file","zotero-linked-file",-97427849,null),args__31746__auto__),frontend$extensions$zotero$zotero_linked_file,args__31746__auto__,null);
}
};
var frontend$extensions$zotero$zotero_linked_file = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47535__i = 0, G__47535__a = new Array(arguments.length -  0);
while (G__47535__i < G__47535__a.length) {G__47535__a[G__47535__i] = arguments[G__47535__i + 0]; ++G__47535__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47535__a,0,null);
} 
return frontend$extensions$zotero$zotero_linked_file__delegate.call(this,args__31746__auto__);};
frontend$extensions$zotero$zotero_linked_file.cljs$lang$maxFixedArity = 0;
frontend$extensions$zotero$zotero_linked_file.cljs$lang$applyTo = (function (arglist__47536){
var args__31746__auto__ = cljs.core.seq(arglist__47536);
return frontend$extensions$zotero$zotero_linked_file__delegate(args__31746__auto__);
});
frontend$extensions$zotero$zotero_linked_file.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$zotero$zotero_linked_file__delegate;
return frontend$extensions$zotero$zotero_linked_file;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47528 = comp__31745__auto__;
var G__47529 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47528,G__47529) : io.factorhouse.hsx.core.react_memo.call(null,G__47528,G__47529));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"zotero-linked-file");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.extensions.zotero.js.map
