goog.provide('frontend.components.imports');
var module$node_modules$path$path=shadow.js.require("module$node_modules$path$path", {});
/**
 * Ignore path for ls-dir-files-with-handler! and reload-dir!
 */
frontend.components.imports.ignored_path_QMARK_ = (function frontend$components$imports$ignored_path_QMARK_(dir,path){
var ignores = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [".",".recycle","node_modules","logseq/bak","logseq/version-files","logseq/graphs-txid.edn"], null);
if(typeof path === 'string'){
var or__5142__auto__ = cljs.core.some((function (p1__59293_SHARP_){
return clojure.string.starts_with_QMARK_(path,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dir,""))?p1__59293_SHARP_:(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__59293_SHARP_))));
}),ignores);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core.some((function (p1__59294_SHARP_){
return clojure.string.includes_QMARK_(path,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dir,""))?(""+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__59294_SHARP_)+"/"):(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__59294_SHARP_)+"/")));
}),ignores);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = cljs.core.some((function (p1__59295_SHARP_){
return clojure.string.ends_with_QMARK_(path,p1__59295_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".DS_Store","logseq/graphs-txid.edn"], null));
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
var or__5142__auto____$3 = (function (){var relpath = module$node_modules$path$path.relative(dir,path);
var or__5142__auto____$3 = cljs.core.re_find(/\/\.[^.]+/,relpath);
if(cljs.core.truth_(or__5142__auto____$3)){
return or__5142__auto____$3;
} else {
return cljs.core.re_find(/^\.[^.]+/,relpath);
}
})();
if(cljs.core.truth_(or__5142__auto____$3)){
return or__5142__auto____$3;
} else {
var path__$1 = clojure.string.lower_case(path);
return (((!(clojure.string.blank_QMARK_(module$node_modules$path$path.extname(path__$1))))) && (cljs.core.not(cljs.core.some((function (p1__59296_SHARP_){
return clojure.string.ends_with_QMARK_(path__$1,p1__59296_SHARP_);
}),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [".md",".markdown",".org",".js",".edn",".css"], null)))));
}
}
}
}
} else {
return null;
}
});
frontend.components.imports.finished_cb = (function frontend$components$imports$finished_cb(var_args){
var args__5882__auto__ = [];
var len__5876__auto___59432 = arguments.length;
var i__5877__auto___59433 = (0);
while(true){
if((i__5877__auto___59433 < len__5876__auto___59432)){
args__5882__auto__.push((arguments[i__5877__auto___59433]));

var G__59434 = (i__5877__auto___59433 + (1));
i__5877__auto___59433 = G__59434;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return frontend.components.imports.finished_cb.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(frontend.components.imports.finished_cb.cljs$core$IFn$_invoke$arity$variadic = (function (p__59298){
var map__59299 = p__59298;
var map__59299__$1 = cljs.core.__destructure_map(map__59299);
var reload_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59299__$1,new cljs.core.Keyword(null,"reload?","reload?",-1559406964),true);
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","sync-context","graph/sync-context",1484639785)], null));

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","file-finished","import/file-finished",-1833729922)], 0)),new cljs.core.Keyword(null,"success","success",1890645906));

(logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"import-indicator","import-indicator",-732235210)) : logseq.shui.ui.dialog_close_BANG_.call(null,new cljs.core.Keyword(null,"import-indicator","import-indicator",-732235210)));

frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$0();

if(frontend.util.web_platform_QMARK_){
if(cljs.core.truth_(reload_QMARK_)){
return window.location.reload();
} else {
return setTimeout(frontend.handler.ui.re_render_root_BANG_,(500));
}
} else {
return setTimeout(frontend.handler.ui.re_render_root_BANG_,(500));
}
}));

(frontend.components.imports.finished_cb.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.components.imports.finished_cb.cljs$lang$applyTo = (function (seq59297){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59297));
}));

frontend.components.imports.lsq_import_handler = (function frontend$components$imports$lsq_import_handler(var_args){
var args__5882__auto__ = [];
var len__5876__auto___59435 = arguments.length;
var i__5877__auto___59436 = (0);
while(true){
if((i__5877__auto___59436 < len__5876__auto___59435)){
args__5882__auto__.push((arguments[i__5877__auto___59436]));

var G__59437 = (i__5877__auto___59436 + (1));
i__5877__auto___59436 = G__59437;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.components.imports.lsq_import_handler.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.components.imports.lsq_import_handler.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__59302){
var map__59303 = p__59302;
var map__59303__$1 = cljs.core.__destructure_map(map__59303);
var sqlite_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59303__$1,new cljs.core.Keyword(null,"sqlite?","sqlite?",1827775537));
var sqlite_zip_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59303__$1,new cljs.core.Keyword(null,"sqlite-zip?","sqlite-zip?",2011532772));
var debug_transit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59303__$1,new cljs.core.Keyword(null,"debug-transit?","debug-transit?",-1402926414));
var graph_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59303__$1,new cljs.core.Keyword(null,"graph-name","graph-name",416773857));
var db_edn_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59303__$1,new cljs.core.Keyword(null,"db-edn?","db-edn?",-448928080));
var file = cljs.core.first(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(e.target.files));
if(cljs.core.truth_(sqlite_QMARK_)){
var graph_name__$1 = clojure.string.trim(graph_name);
if(clojure.string.blank_QMARK_(graph_name__$1)){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","empty-graph-name","import/empty-graph-name",-276972921)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
} else {
if(cljs.core.truth_(frontend.handler.repo.graph_already_exists_QMARK_(graph_name__$1))){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","graph-name-conflict","import/graph-name-conflict",678078360)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
} else {
var reader = (new FileReader());
(reader.onload = (function (){
var buffer = reader.result;
frontend.handler.db_based.import$.import_from_sqlite_db_BANG_(buffer,graph_name__$1,frontend.components.imports.finished_cb);

return (logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dialog_close_BANG_.call(null));
}));

(reader.onerror = (function (e__$1){
return console.error(e__$1);
}));

(reader.onabort = (function (e__$1){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"aborted","aborted",1775972619)], 0));

return console.error(e__$1);
}));

return reader.readAsArrayBuffer(file);

}
}
} else {
if(cljs.core.truth_(sqlite_zip_QMARK_)){
var graph_name__$1 = clojure.string.trim(graph_name);
if(clojure.string.blank_QMARK_(graph_name__$1)){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","empty-graph-name","import/empty-graph-name",-276972921)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
} else {
if(cljs.core.truth_(frontend.handler.repo.graph_already_exists_QMARK_(graph_name__$1))){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","graph-name-conflict","import/graph-name-conflict",678078360)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
} else {
return frontend.handler.db_based.import$.import_from_sqlite_zip_BANG_(file,graph_name__$1,(function (){
return frontend.components.imports.finished_cb.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reload?","reload?",-1559406964),false], null)], 0));
}));

}
}
} else {
if(cljs.core.truth_((function (){var or__5142__auto__ = debug_transit_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return db_edn_QMARK_;
}
})())){
var graph_name__$1 = clojure.string.trim(graph_name);
if(clojure.string.blank_QMARK_(graph_name__$1)){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","empty-graph-name","import/empty-graph-name",-276972921)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
} else {
if(cljs.core.truth_(frontend.handler.repo.graph_already_exists_QMARK_(graph_name__$1))){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","graph-name-conflict","import/graph-name-conflict",678078360)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
} else {
frontend.state.set_state_BANG_(new cljs.core.Keyword("graph","importing","graph/importing",1647644617),new cljs.core.Keyword(null,"logseq","logseq",-928939893));

var reader = (new FileReader());
var import_f = (cljs.core.truth_(db_edn_QMARK_)?frontend.handler.db_based.import$.import_from_edn_file_BANG_:frontend.handler.db_based.import$.import_from_debug_transit_BANG_);
(reader.onload = (function (e__$1){
var text = e__$1.target.result;
var G__59304 = graph_name__$1;
var G__59305 = text;
var G__59306 = (function (){
frontend.state.set_state_BANG_(new cljs.core.Keyword("graph","importing","graph/importing",1647644617),null);

frontend.components.imports.finished_cb();

return (logseq.shui.ui.dialog_close_all_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dialog_close_all_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dialog_close_all_BANG_.call(null));
});
return (import_f.cljs$core$IFn$_invoke$arity$3 ? import_f.cljs$core$IFn$_invoke$arity$3(G__59304,G__59305,G__59306) : import_f.call(null,G__59304,G__59305,G__59306));
}));

return reader.readAsText(file);

}
}
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","select-edn-or-json","import/select-edn-or-json",793936095)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));

}
}
}
}));

(frontend.components.imports.lsq_import_handler.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.components.imports.lsq_import_handler.cljs$lang$applyTo = (function (seq59300){
var G__59301 = cljs.core.first(seq59300);
var seq59300__$1 = cljs.core.next(seq59300);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59301,seq59300__$1);
}));

frontend.components.imports.set_graph_name_dialog = (function (){var render_fn__31744__auto__ = (function frontend$components$imports$set_graph_name_dialog(input_e,opts){
var vec__59307 = logseq.shui.hooks.use_state("");
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59307,(0),null);
var set_input_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59307,(1),null);
var on_submit = (function (){
if(cljs.core.truth_(frontend.components.repo.invalid_graph_name_QMARK_(input))){
return frontend.components.repo.invalid_graph_name_warning();
} else {
return frontend.components.imports.lsq_import_handler.cljs$core$IFn$_invoke$arity$variadic(input_e,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"graph-name","graph-name",416773857),input)], 0));
}
});
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sm:flex.sm:items-start","div.sm:flex.sm:items-start",-437342012),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-3.text-center.sm:mt-0.sm:text-left","div.mt-3.text-center.sm:mt-0.sm:text-left",-2146662734),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3#modal-headline.leading-6.font-medium.pb-2","h3#modal-headline.leading-6.font-medium.pb-2",-1438988578),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","new-graph-name","import/new-graph-name",1577138097)], 0))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-input.block.w-full.sm:text-sm.sm:leading-5.my-2.mb-4","input.form-input.block.w-full.sm:text-sm.sm:leading-5.my-2.mb-4",-1559665001),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__59310 = frontend.util.evalue(e);
return (set_input_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_BANG_.cljs$core$IFn$_invoke$arity$1(G__59310) : set_input_BANG_.call(null,G__59310));
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",frontend.util.ekey(e))){
return on_submit();
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-5.sm:mt-4.flex","div.mt-5.sm:mt-4.flex",-982266646),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","submit","ui/submit",-49310281)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_submit], null)], 0))], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$imports$set_graph_name_dialog__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__59311 = cljs.core.first(args__31746__auto__);
var G__59312 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__59311,G__59312) : io.factorhouse.hsx.core.obj_get.call(null,G__59311,G__59312));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"set-graph-name-dialog","set-graph-name-dialog",859475172,null),args__31746__auto__),frontend$components$imports$set_graph_name_dialog,args__31746__auto__,null);
}
};
var frontend$components$imports$set_graph_name_dialog = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__59438__i = 0, G__59438__a = new Array(arguments.length -  0);
while (G__59438__i < G__59438__a.length) {G__59438__a[G__59438__i] = arguments[G__59438__i + 0]; ++G__59438__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__59438__a,0,null);
} 
return frontend$components$imports$set_graph_name_dialog__delegate.call(this,args__31746__auto__);};
frontend$components$imports$set_graph_name_dialog.cljs$lang$maxFixedArity = 0;
frontend$components$imports$set_graph_name_dialog.cljs$lang$applyTo = (function (arglist__59439){
var args__31746__auto__ = cljs.core.seq(arglist__59439);
return frontend$components$imports$set_graph_name_dialog__delegate(args__31746__auto__);
});
frontend$components$imports$set_graph_name_dialog.cljs$core$IFn$_invoke$arity$variadic = frontend$components$imports$set_graph_name_dialog__delegate;
return frontend$components$imports$set_graph_name_dialog;
})()
;
var memo_comp__31747__auto__ = (function (){var G__59313 = comp__31745__auto__;
var G__59314 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__59313,G__59314) : io.factorhouse.hsx.core.react_memo.call(null,G__59313,G__59314));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"set-graph-name-dialog");

return comp__31745__auto__;
})();
frontend.components.imports.import_file_graph_dialog = (function (){var render_fn__31744__auto__ = (function frontend$components$imports$import_file_graph_dialog(initial_name,on_submit_fn){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.border.p-6.rounded.bg-gray-01.mt-4","div.border.p-6.rounded.bg-gray-01.mt-4",625462655),(function (){var form_ctx = logseq.shui.form.core.use_form.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaultValues","defaultValues",422888972),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"graph-name","graph-name",416773857),initial_name,new cljs.core.Keyword(null,"extract-code-snippets?","extract-code-snippets?",-1243056406),false,new cljs.core.Keyword(null,"convert-all-tags?","convert-all-tags?",-1869310481),true,new cljs.core.Keyword(null,"tag-classes","tag-classes",835362327),"",new cljs.core.Keyword(null,"remove-inline-tags?","remove-inline-tags?",-1198387053),true,new cljs.core.Keyword(null,"property-classes","property-classes",1129964490),"",new cljs.core.Keyword(null,"property-parent-classes","property-parent-classes",1972741305),""], null),new cljs.core.Keyword(null,"yupSchema","yupSchema",-1266946445),logseq.shui.form.core.yup.object().shape(({"graph-name": logseq.shui.form.core.yup.string().required()})).required()], null));
var handle_submit = new cljs.core.Keyword(null,"handleSubmit","handleSubmit",65998088).cljs$core$IFn$_invoke$arity$1(form_ctx);
var on_submit_valid = (function (){var G__59318 = (function (e){
(logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dialog_close_BANG_.call(null));

var G__59319 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(e,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return (on_submit_fn.cljs$core$IFn$_invoke$arity$1 ? on_submit_fn.cljs$core$IFn$_invoke$arity$1(G__59319) : on_submit_fn.call(null,G__59319));
});
return (handle_submit.cljs$core$IFn$_invoke$arity$1 ? handle_submit.cljs$core$IFn$_invoke$arity$1(G__59318) : handle_submit.call(null,G__59318));
})();
var vec__59315 = logseq.shui.hooks.use_state(true);
var convert_all_tags_input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59315,(0),null);
var set_convert_all_tags_input_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59315,(1),null);
var G__59320 = form_ctx;
var G__59321 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),on_submit_valid], null),logseq.shui.ui.form_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"graph-name"], null),(function (field,error){
var G__59322 = (function (){var G__59325 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","new-graph-name","import/new-graph-name",1577138097)], 0));
return (logseq.shui.ui.form_label.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.form_label.cljs$core$IFn$_invoke$arity$1(G__59325) : logseq.shui.ui.form_label.call(null,G__59325));
})();
var G__59323 = (function (){var G__59326 = (function (){var G__59327 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","graph-name-placeholder","import/graph-name-placeholder",-1229510432)], 0))], null),field], 0));
return (logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1(G__59327) : logseq.shui.ui.input.call(null,G__59327));
})();
return (logseq.shui.ui.form_control.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.form_control.cljs$core$IFn$_invoke$arity$1(G__59326) : logseq.shui.ui.form_control.call(null,G__59326));
})();
var G__59324 = (cljs.core.truth_(error)?(function (){var G__59328 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b.text-red-800","b.text-red-800",1802050661),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error)], null);
return (logseq.shui.ui.form_description.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.form_description.cljs$core$IFn$_invoke$arity$1(G__59328) : logseq.shui.ui.form_description.call(null,G__59328));
})():null);
return (logseq.shui.ui.form_item.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.form_item.cljs$core$IFn$_invoke$arity$3(G__59322,G__59323,G__59324) : logseq.shui.ui.form_item.call(null,G__59322,G__59323,G__59324));
})),logseq.shui.ui.form_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"extract-code-snippets?"], null),(function (field){
var G__59329 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-3 flex justify-start items-center space-x-3 space-y-0 my-3 pr-3"], null);
var G__59330 = (function (){var G__59332 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","extract-inline-code-snippets","import/extract-inline-code-snippets",-449884970)], 0));
return (logseq.shui.ui.form_label.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.form_label.cljs$core$IFn$_invoke$arity$1(G__59332) : logseq.shui.ui.form_label.call(null,G__59332));
})();
var G__59331 = (function (){var G__59333 = (function (){var G__59334 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(field),new cljs.core.Keyword(null,"on-checked-change","on-checked-change",-482086819),new cljs.core.Keyword(null,"onChange","onChange",-312891301).cljs$core$IFn$_invoke$arity$1(field)], null);
return (logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1(G__59334) : logseq.shui.ui.checkbox.call(null,G__59334));
})();
return (logseq.shui.ui.form_control.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.form_control.cljs$core$IFn$_invoke$arity$1(G__59333) : logseq.shui.ui.form_control.call(null,G__59333));
})();
return (logseq.shui.ui.form_item.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.form_item.cljs$core$IFn$_invoke$arity$3(G__59329,G__59330,G__59331) : logseq.shui.ui.form_item.call(null,G__59329,G__59330,G__59331));
})),logseq.shui.ui.form_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"convert-all-tags?"], null),(function (field){
var G__59335 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-3 flex justify-start items-center space-x-3 space-y-0 my-3 pr-3"], null);
var G__59336 = (function (){var G__59338 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","all-tags","import/all-tags",1186458392)], 0));
return (logseq.shui.ui.form_label.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.form_label.cljs$core$IFn$_invoke$arity$1(G__59338) : logseq.shui.ui.form_label.call(null,G__59338));
})();
var G__59337 = (function (){var G__59339 = (function (){var G__59340 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(field),new cljs.core.Keyword(null,"on-checked-change","on-checked-change",-482086819),(function (e){
var fexpr__59341_59440 = new cljs.core.Keyword(null,"onChange","onChange",-312891301).cljs$core$IFn$_invoke$arity$1(field);
(fexpr__59341_59440.cljs$core$IFn$_invoke$arity$1 ? fexpr__59341_59440.cljs$core$IFn$_invoke$arity$1(e) : fexpr__59341_59440.call(null,e));

var G__59342 = cljs.core.not(convert_all_tags_input);
return (set_convert_all_tags_input_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_convert_all_tags_input_BANG_.cljs$core$IFn$_invoke$arity$1(G__59342) : set_convert_all_tags_input_BANG_.call(null,G__59342));
})], null);
return (logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1(G__59340) : logseq.shui.ui.checkbox.call(null,G__59340));
})();
return (logseq.shui.ui.form_control.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.form_control.cljs$core$IFn$_invoke$arity$1(G__59339) : logseq.shui.ui.form_control.call(null,G__59339));
})();
return (logseq.shui.ui.form_item.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.form_item.cljs$core$IFn$_invoke$arity$3(G__59335,G__59336,G__59337) : logseq.shui.ui.form_item.call(null,G__59335,G__59336,G__59337));
})),logseq.shui.ui.form_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"tag-classes"], null),(function (field,_error){
var G__59343 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-3"], null);
var G__59344 = (function (){var G__59347 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","specific-tags","import/specific-tags",1334405218)], 0));
return (logseq.shui.ui.form_label.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.form_label.cljs$core$IFn$_invoke$arity$1(G__59347) : logseq.shui.ui.form_label.call(null,G__59347));
})();
var G__59345 = (function (){var G__59348 = (function (){var G__59349 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","tag-classes-placeholder","import/tag-classes-placeholder",-289320688)], 0)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),convert_all_tags_input], null)], 0));
return (logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1(G__59349) : logseq.shui.ui.input.call(null,G__59349));
})();
return (logseq.shui.ui.form_control.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.form_control.cljs$core$IFn$_invoke$arity$1(G__59348) : logseq.shui.ui.form_control.call(null,G__59348));
})();
var G__59346 = (function (){var G__59350 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","tags-case-insensitive","import/tags-case-insensitive",-661914585)], 0));
return (logseq.shui.ui.form_description.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.form_description.cljs$core$IFn$_invoke$arity$1(G__59350) : logseq.shui.ui.form_description.call(null,G__59350));
})();
return (logseq.shui.ui.form_item.cljs$core$IFn$_invoke$arity$4 ? logseq.shui.ui.form_item.cljs$core$IFn$_invoke$arity$4(G__59343,G__59344,G__59345,G__59346) : logseq.shui.ui.form_item.call(null,G__59343,G__59344,G__59345,G__59346));
})),logseq.shui.ui.form_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"remove-inline-tags?"], null),(function (field){
var G__59351 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-3 flex justify-start items-center space-x-3 space-y-0 my-3 pr-3"], null);
var G__59352 = (function (){var G__59355 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","remove-inline-tags","import/remove-inline-tags",-1485729787)], 0));
return (logseq.shui.ui.form_label.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.form_label.cljs$core$IFn$_invoke$arity$1(G__59355) : logseq.shui.ui.form_label.call(null,G__59355));
})();
var G__59353 = (function (){var G__59356 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","default-db-graph-behavior","import/default-db-graph-behavior",-103516468)], 0));
return (logseq.shui.ui.form_description.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.form_description.cljs$core$IFn$_invoke$arity$1(G__59356) : logseq.shui.ui.form_description.call(null,G__59356));
})();
var G__59354 = (function (){var G__59357 = (function (){var G__59358 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(field),new cljs.core.Keyword(null,"on-checked-change","on-checked-change",-482086819),new cljs.core.Keyword(null,"onChange","onChange",-312891301).cljs$core$IFn$_invoke$arity$1(field)], null);
return (logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.checkbox.cljs$core$IFn$_invoke$arity$1(G__59358) : logseq.shui.ui.checkbox.call(null,G__59358));
})();
return (logseq.shui.ui.form_control.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.form_control.cljs$core$IFn$_invoke$arity$1(G__59357) : logseq.shui.ui.form_control.call(null,G__59357));
})();
return (logseq.shui.ui.form_item.cljs$core$IFn$_invoke$arity$4 ? logseq.shui.ui.form_item.cljs$core$IFn$_invoke$arity$4(G__59351,G__59352,G__59353,G__59354) : logseq.shui.ui.form_item.call(null,G__59351,G__59352,G__59353,G__59354));
})),logseq.shui.ui.form_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"property-classes"], null),(function (field,_error){
var G__59359 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-3"], null);
var G__59360 = (function (){var G__59363 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","property-value-tags","import/property-value-tags",39337021)], 0));
return (logseq.shui.ui.form_label.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.form_label.cljs$core$IFn$_invoke$arity$1(G__59363) : logseq.shui.ui.form_label.call(null,G__59363));
})();
var G__59361 = (function (){var G__59364 = (function (){var G__59365 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","property-classes-placeholder","import/property-classes-placeholder",-37217213)], 0))], null),field], 0));
return (logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1(G__59365) : logseq.shui.ui.input.call(null,G__59365));
})();
return (logseq.shui.ui.form_control.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.form_control.cljs$core$IFn$_invoke$arity$1(G__59364) : logseq.shui.ui.form_control.call(null,G__59364));
})();
var G__59362 = (function (){var G__59366 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","properties-case-insensitive-commas","import/properties-case-insensitive-commas",1887210132)], 0));
return (logseq.shui.ui.form_description.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.form_description.cljs$core$IFn$_invoke$arity$1(G__59366) : logseq.shui.ui.form_description.call(null,G__59366));
})();
return (logseq.shui.ui.form_item.cljs$core$IFn$_invoke$arity$4 ? logseq.shui.ui.form_item.cljs$core$IFn$_invoke$arity$4(G__59359,G__59360,G__59361,G__59362) : logseq.shui.ui.form_item.call(null,G__59359,G__59360,G__59361,G__59362));
})),logseq.shui.ui.form_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"property-parent-classes"], null),(function (field,_error){
var G__59367 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-3"], null);
var G__59368 = (function (){var G__59371 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","property-value-tag-parents","import/property-value-tag-parents",-830025555)], 0));
return (logseq.shui.ui.form_label.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.form_label.cljs$core$IFn$_invoke$arity$1(G__59371) : logseq.shui.ui.form_label.call(null,G__59371));
})();
var G__59369 = (function (){var G__59372 = (function (){var G__59373 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","property-parent-classes-placeholder","import/property-parent-classes-placeholder",625838485)], 0))], null),field], 0));
return (logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1(G__59373) : logseq.shui.ui.input.call(null,G__59373));
})();
return (logseq.shui.ui.form_control.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.form_control.cljs$core$IFn$_invoke$arity$1(G__59372) : logseq.shui.ui.form_control.call(null,G__59372));
})();
var G__59370 = (function (){var G__59374 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","properties-case-insensitive-commas","import/properties-case-insensitive-commas",1887210132)], 0));
return (logseq.shui.ui.form_description.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.form_description.cljs$core$IFn$_invoke$arity$1(G__59374) : logseq.shui.ui.form_description.call(null,G__59374));
})();
return (logseq.shui.ui.form_item.cljs$core$IFn$_invoke$arity$4 ? logseq.shui.ui.form_item.cljs$core$IFn$_invoke$arity$4(G__59367,G__59368,G__59369,G__59370) : logseq.shui.ui.form_item.call(null,G__59367,G__59368,G__59369,G__59370));
})),(function (){var G__59375 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"class","class",-2030961996),"right-0 mt-3"], null);
var G__59376 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","submit","ui/submit",-49310281)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__59375,G__59376) : logseq.shui.ui.button.call(null,G__59375,G__59376));
})()], null);
return (logseq.shui.ui.form_provider.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.form_provider.cljs$core$IFn$_invoke$arity$2(G__59320,G__59321) : logseq.shui.ui.form_provider.call(null,G__59320,G__59321));
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$imports$import_file_graph_dialog__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__59377 = cljs.core.first(args__31746__auto__);
var G__59378 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__59377,G__59378) : io.factorhouse.hsx.core.obj_get.call(null,G__59377,G__59378));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"import-file-graph-dialog","import-file-graph-dialog",1713672428,null),args__31746__auto__),frontend$components$imports$import_file_graph_dialog,args__31746__auto__,null);
}
};
var frontend$components$imports$import_file_graph_dialog = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__59441__i = 0, G__59441__a = new Array(arguments.length -  0);
while (G__59441__i < G__59441__a.length) {G__59441__a[G__59441__i] = arguments[G__59441__i + 0]; ++G__59441__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__59441__a,0,null);
} 
return frontend$components$imports$import_file_graph_dialog__delegate.call(this,args__31746__auto__);};
frontend$components$imports$import_file_graph_dialog.cljs$lang$maxFixedArity = 0;
frontend$components$imports$import_file_graph_dialog.cljs$lang$applyTo = (function (arglist__59442){
var args__31746__auto__ = cljs.core.seq(arglist__59442);
return frontend$components$imports$import_file_graph_dialog__delegate(args__31746__auto__);
});
frontend$components$imports$import_file_graph_dialog.cljs$core$IFn$_invoke$arity$variadic = frontend$components$imports$import_file_graph_dialog__delegate;
return frontend$components$imports$import_file_graph_dialog;
})()
;
var memo_comp__31747__auto__ = (function (){var G__59379 = comp__31745__auto__;
var G__59380 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__59379,G__59380) : io.factorhouse.hsx.core.react_memo.call(null,G__59379,G__59380));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"import-file-graph-dialog");

return comp__31745__auto__;
})();
frontend.components.imports.validate_imported_data = (function frontend$components$imports$validate_imported_data(p__59381){
var map__59382 = p__59381;
var map__59382__$1 = cljs.core.__destructure_map(map__59382);
var org_file_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59382__$1,new cljs.core.Keyword(null,"org-file-count","org-file-count",-794978731));
var ignored_files_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59382__$1,new cljs.core.Keyword(null,"ignored-files-count","ignored-files-count",-892371896));
var ignored_assets_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59382__$1,new cljs.core.Keyword(null,"ignored-assets-count","ignored-assets-count",-1730030040));
var ignored_properties_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59382__$1,new cljs.core.Keyword(null,"ignored-properties-count","ignored-properties-count",1865926812));
var validation_error_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59382__$1,new cljs.core.Keyword(null,"validation-error-count","validation-error-count",257720151));
if(((function (){var or__5142__auto__ = org_file_count;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() > (0))){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","org-files-imported","import/org-files-imported",569424577),org_file_count], 0)),new cljs.core.Keyword(null,"info","info",-317069002),false);
} else {
}

if(((function (){var or__5142__auto__ = ignored_files_count;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() > (0))){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","ignored-files","import/ignored-files",-916613879),ignored_files_count], 0)),new cljs.core.Keyword(null,"info","info",-317069002),false);
} else {
}

if(((function (){var or__5142__auto__ = ignored_assets_count;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() > (0))){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","ignored-assets","import/ignored-assets",-620377652),ignored_assets_count], 0)),new cljs.core.Keyword(null,"info","info",-317069002),false);
} else {
}

if(((function (){var or__5142__auto__ = ignored_properties_count;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() > (0))){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".mb-2",".mb-2",-2014745458),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".text-lg.mb-2",".text-lg.mb-2",508238774),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","ignored-properties","import/ignored-properties",1366239430),ignored_properties_count], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs","span.text-xs",63518557),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","ignored-properties-fix","import/ignored-properties-fix",-153020624)], 0))], null)], null),new cljs.core.Keyword(null,"warning","warning",-1685650671),false);
} else {
}

if(((function (){var or__5142__auto__ = validation_error_count;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() > (0))){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","invalid-blocks-detected","import/invalid-blocks-detected",-1692156983),validation_error_count], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671),false);
} else {
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.imports",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"import-valid","import-valid",984736050),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"Valid import!"], null),new cljs.core.Keyword(null,"line","line",212345235),290], null)),null);
} else {
return null;
}
}
});
frontend.components.imports.show_notification = (function frontend$components$imports$show_notification(p__59383){
var map__59384 = p__59383;
var map__59384__$1 = cljs.core.__destructure_map(map__59384);
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59384__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59384__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var ex_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59384__$1,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),level)){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.Keyword(null,"error","error",-978969032));

if(cljs.core.truth_(ex_data)){
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.imports",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"import-error","import-error",1672727808),ex_data,new cljs.core.Keyword(null,"line","line",212345235),297], null)),null);
} else {
return null;
}
} else {
return null;
}
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"warning","warning",-1685650671),false);
}
});
frontend.components.imports.import_file_descriptor = (function frontend$components$imports$import_file_descriptor(file){
return cljs.core.select_keys(file,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"fs-path","fs-path",760699783),new cljs.core.Keyword(null,"last-modified-at","last-modified-at",478765450)], null));
});
frontend.components.imports.import_files_by_path = (function frontend$components$imports$import_files_by_path(files){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (file){
var temp__5825__auto__ = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(file);
if(cljs.core.truth_(temp__5825__auto__)){
var path = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,file], null);
} else {
return null;
}
})),files);
});
/**
 * Prefer birthtime when present. Fall back to mtime / File.lastModified.
 */
frontend.components.imports._LT_file_timestamps = (function frontend$components$imports$_LT_file_timestamps(p__59385){
var map__59386 = p__59385;
var map__59386__$1 = cljs.core.__destructure_map(map__59386);
var fs_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59386__$1,new cljs.core.Keyword(null,"fs-path","fs-path",760699783));
var last_modified_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59386__$1,new cljs.core.Keyword(null,"last-modified-at","last-modified-at",478765450));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = fs_path;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5140__auto____$1)){
return logseq.common.path.absolute_QMARK_(fs_path);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stat","stat",-1370599836),fs_path], 0)),(function (error){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.imports",new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"import-file-stat-failed","import-file-stat-failed",945941470),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),fs_path,new cljs.core.Keyword(null,"error","error",-978969032),error], null),new cljs.core.Keyword(null,"line","line",212345235),318], null)),null);
} else {
}

return null;
})):null)),(function (stat){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.common.util.timestamp_ms((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"mtime","mtime",963165087).cljs$core$IFn$_invoke$arity$1(stat);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return last_modified_at;
}
})())),(function (updated_at){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = logseq.common.util.timestamp_ms(new cljs.core.Keyword(null,"birthtime","birthtime",-2055640037).cljs$core$IFn$_invoke$arity$1(stat));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return updated_at;
}
})()),(function (created_at){
return promesa.protocols._promise((function (){var G__59387 = cljs.core.PersistentArrayMap.EMPTY;
var G__59387__$1 = (cljs.core.truth_(created_at)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59387,new cljs.core.Keyword(null,"file-created-at","file-created-at",1855423146),created_at):G__59387);
if(cljs.core.truth_(updated_at)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59387__$1,new cljs.core.Keyword(null,"file-updated-at","file-updated-at",1716406379),updated_at);
} else {
return G__59387__$1;
}
})());
}));
}));
}));
}));
});
frontend.components.imports._LT_serialize_import_file = (function frontend$components$imports$_LT_serialize_import_file(file){
var file_object = new cljs.core.Keyword(null,"file-object","file-object",-1396844020).cljs$core$IFn$_invoke$arity$1(file);
if(clojure.string.starts_with_QMARK_(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(file),"assets/")){
if(frontend.handler.assets.exceed_limit_size_QMARK_(file_object)){
var path = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(file)], 0));
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.imports",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"import-asset-skipped-too-large","import-asset-skipped-too-large",555852085),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),frontend.context.i18n.t_en.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","asset-too-large-warning","import/asset-too-large-warning",-440489526),path], 0))], null),new cljs.core.Keyword(null,"line","line",212345235),335], null)),null);
} else {
}

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","asset-too-large-warning","import/asset-too-large-warning",-440489526),path], 0)),new cljs.core.Keyword(null,"info","info",-317069002),false);

return promesa.core.resolved(cljs.core.select_keys(file,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"fs-path","fs-path",760699783)], null)));
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(file_object.arrayBuffer()),(function (buffer){
return promesa.protocols._promise(promesa.core.resolved(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.select_keys(file,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"fs-path","fs-path",760699783)], null)),new cljs.core.Keyword("asset","payload","asset/payload",246835316),(new Uint8Array(buffer)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","size","asset/size",1533648543),file_object.size], 0))));
}));
}));
}
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(file_object.text()),(function (content){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.imports._LT_file_timestamps(file)),(function (timestamps){
return promesa.protocols._promise(promesa.core.resolved(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(file,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"fs-path","fs-path",760699783)], null)),timestamps,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("file","content","file/content",12680964),content], null)], 0))));
}));
}));
}));
}
});
frontend.components.imports.start_file_graph_import_session_BANG_ = (function frontend$components$imports$start_file_graph_import_session_BANG_(files){
var files_by_path = frontend.components.imports.import_files_by_path(files);
return frontend.handler.file_graph_import.set_file_graph_import_session_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"<read-file","<read-file",-785932647),(function (path){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(files_by_path,path);
if(cljs.core.truth_(temp__5823__auto__)){
var file = temp__5823__auto__;
return frontend.components.imports._LT_serialize_import_file(file);
} else {
return promesa.core.rejected(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("import file not found",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"import-file-not-found","import-file-not-found",-1042756838),new cljs.core.Keyword(null,"path","path",-188191168),path], null)));
}
})], null));
});
frontend.components.imports.build_file_graph_worker_options = (function frontend$components$imports$build_file_graph_worker_options(p__59388,default_config){
var map__59389 = p__59388;
var map__59389__$1 = cljs.core.__destructure_map(map__59389);
var user_options = map__59389__$1;
var tag_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59389__$1,new cljs.core.Keyword(null,"tag-classes","tag-classes",835362327));
var property_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59389__$1,new cljs.core.Keyword(null,"property-classes","property-classes",1129964490));
var property_parent_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59389__$1,new cljs.core.Keyword(null,"property-parent-classes","property-parent-classes",1972741305));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user-options","user-options",-84696866),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(user_options,new cljs.core.Keyword(null,"graph-name","graph-name",416773857)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag-classes","tag-classes",835362327),(function (){var G__59390 = tag_classes;
var G__59390__$1 = (((G__59390 == null))?null:clojure.string.trim(G__59390));
var G__59390__$2 = (((G__59390__$1 == null))?null:cljs.core.not_empty(G__59390__$1));
var G__59390__$3 = (((G__59390__$2 == null))?null:clojure.string.split.cljs$core$IFn$_invoke$arity$2(G__59390__$2,/,\s*/));
if((G__59390__$3 == null)){
return null;
} else {
return cljs.core.set(G__59390__$3);
}
})(),new cljs.core.Keyword(null,"property-classes","property-classes",1129964490),(function (){var G__59391 = property_classes;
var G__59391__$1 = (((G__59391 == null))?null:clojure.string.trim(G__59391));
var G__59391__$2 = (((G__59391__$1 == null))?null:cljs.core.not_empty(G__59391__$1));
var G__59391__$3 = (((G__59391__$2 == null))?null:clojure.string.split.cljs$core$IFn$_invoke$arity$2(G__59391__$2,/,\s*/));
if((G__59391__$3 == null)){
return null;
} else {
return cljs.core.set(G__59391__$3);
}
})(),new cljs.core.Keyword(null,"property-parent-classes","property-parent-classes",1972741305),(function (){var G__59392 = property_parent_classes;
var G__59392__$1 = (((G__59392 == null))?null:clojure.string.trim(G__59392));
var G__59392__$2 = (((G__59392__$1 == null))?null:cljs.core.not_empty(G__59392__$1));
var G__59392__$3 = (((G__59392__$2 == null))?null:clojure.string.split.cljs$core$IFn$_invoke$arity$2(G__59392__$2,/,\s*/));
if((G__59392__$3 == null)){
return null;
} else {
return cljs.core.set(G__59392__$3);
}
})()], null)], 0)),new cljs.core.Keyword(null,"default-config","default-config",-695396957),default_config], null);
});
frontend.components.imports.file_graph_import_initial_ui_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"importing","importing",1809174267),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword("import","loading","import/loading",-1917645552),new cljs.core.Keyword(null,"current-idx","current-idx",1734114444),(0)], null);
frontend.components.imports.clear_file_graph_importing_ui_BANG_ = (function frontend$components$imports$clear_file_graph_importing_ui_BANG_(){
frontend.state.set_state_BANG_(new cljs.core.Keyword("graph","importing","graph/importing",1647644617),null);

frontend.state.set_state_BANG_(new cljs.core.Keyword("graph","importing-state","graph/importing-state",34918559),null);

return (logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"import-indicator","import-indicator",-732235210)) : logseq.shui.ui.dialog_close_BANG_.call(null,new cljs.core.Keyword(null,"import-indicator","import-indicator",-732235210)));
});
frontend.components.imports.start_imported_graph_search_index_BANG_ = (function frontend$components$imports$start_imported_graph_search_index_BANG_(repo){
frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","search-build-blocks-indice-in-worker","thread-api/search-build-blocks-indice-in-worker",-1993640480),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo], 0));

return null;
});
frontend.components.imports.finish_file_graph_import_BANG_ = (function frontend$components$imports$finish_file_graph_import_BANG_(repo,import_result){
frontend.components.imports.clear_file_graph_importing_ui_BANG_();

if(cljs.core.seq(import_result)){
var seq__59393_59443 = cljs.core.seq(new cljs.core.Keyword(null,"notifications","notifications",1685638001).cljs$core$IFn$_invoke$arity$1(import_result));
var chunk__59394_59444 = null;
var count__59395_59445 = (0);
var i__59396_59446 = (0);
while(true){
if((i__59396_59446 < count__59395_59445)){
var notification_59447 = chunk__59394_59444.cljs$core$IIndexed$_nth$arity$2(null,i__59396_59446);
frontend.components.imports.show_notification(notification_59447);


var G__59448 = seq__59393_59443;
var G__59449 = chunk__59394_59444;
var G__59450 = count__59395_59445;
var G__59451 = (i__59396_59446 + (1));
seq__59393_59443 = G__59448;
chunk__59394_59444 = G__59449;
count__59395_59445 = G__59450;
i__59396_59446 = G__59451;
continue;
} else {
var temp__5825__auto___59452 = cljs.core.seq(seq__59393_59443);
if(temp__5825__auto___59452){
var seq__59393_59453__$1 = temp__5825__auto___59452;
if(cljs.core.chunked_seq_QMARK_(seq__59393_59453__$1)){
var c__5673__auto___59454 = cljs.core.chunk_first(seq__59393_59453__$1);
var G__59455 = cljs.core.chunk_rest(seq__59393_59453__$1);
var G__59456 = c__5673__auto___59454;
var G__59457 = cljs.core.count(c__5673__auto___59454);
var G__59458 = (0);
seq__59393_59443 = G__59455;
chunk__59394_59444 = G__59456;
count__59395_59445 = G__59457;
i__59396_59446 = G__59458;
continue;
} else {
var notification_59459 = cljs.core.first(seq__59393_59453__$1);
frontend.components.imports.show_notification(notification_59459);


var G__59460 = cljs.core.next(seq__59393_59453__$1);
var G__59461 = null;
var G__59462 = (0);
var G__59463 = (0);
seq__59393_59443 = G__59460;
chunk__59394_59444 = G__59461;
count__59395_59445 = G__59462;
i__59396_59446 = G__59463;
continue;
}
} else {
}
}
break;
}

frontend.components.imports.validate_imported_data(import_result);
} else {
}

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","file-finished","import/file-finished",-1833729922)], 0)),new cljs.core.Keyword(null,"success","success",1890645906));

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","sync-context","graph/sync-context",1484639785)], null));

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","ready","graph/ready",1121782733),repo], null));

frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$0();

frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0();

frontend.components.imports.start_imported_graph_search_index_BANG_(repo);

return null;
});
frontend.components.imports.transport_error_QMARK_ = (function frontend$components$imports$transport_error_QMARK_(error){
var message = (function (){var or__5142__auto__ = error.message;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(error));
}
})();
var code = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(error));
return ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"db-worker-unavailable","db-worker-unavailable",1175358627),null,new cljs.core.Keyword(null,"network-error","network-error",-1095989517),null,new cljs.core.Keyword(null,"server-unavailable","server-unavailable",1967766937),null,new cljs.core.Keyword(null,"fetch-failed","fetch-failed",990490079),null], null), null),code)) || (((typeof message === 'string') && (clojure.string.includes_QMARK_(message,"Failed to fetch")))));
});
/**
 * Keep-graph is safe only after export-file-graph returns (sqlite store +
 *   finalize). :finishing is set before those steps; current-idx reaches total
 *   when the last file starts.
 */
frontend.components.imports.import_files_finished_QMARK_ = (function frontend$components$imports$import_files_finished_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"validating","validating",1866468207),new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state(new cljs.core.Keyword("graph","importing-state","graph/importing-state",34918559))));
});
frontend.components.imports.abort_file_graph_import_BANG_ = (function frontend$components$imports$abort_file_graph_import_BANG_(error,previous_repo){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.imports",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"import-file-graph-failed","import-file-graph-failed",1257253432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null),new cljs.core.Keyword(null,"line","line",212345235),420], null)),null);
} else {
}

var current_repo = frontend.state.get_current_repo();
var created_new_graph_QMARK_ = (function (){var and__5140__auto__ = previous_repo;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(previous_repo,current_repo);
} else {
return and__5140__auto__;
}
})();
var keep_imported_graph_QMARK_ = (function (){var and__5140__auto__ = created_new_graph_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return ((frontend.components.imports.transport_error_QMARK_(error)) && (frontend.components.imports.import_files_finished_QMARK_()));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(keep_imported_graph_QMARK_)){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.repo.restore_and_setup_repo_BANG_.cljs$core$IFn$_invoke$arity$variadic(current_repo,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-graph-import?","file-graph-import?",-2126895083),true], null)], 0))),(function (_){
return promesa.protocols._promise(frontend.components.imports.finish_file_graph_import_BANG_(current_repo,cljs.core.PersistentArrayMap.EMPTY));
}));
}));
} else {
frontend.components.imports.clear_file_graph_importing_ui_BANG_();

if(cljs.core.truth_(created_new_graph_QMARK_)){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","unexpected-error","import/unexpected-error",734336150),(function (){var or__5142__auto__ = error.message;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(error));
}
})()], 0)),new cljs.core.Keyword(null,"error","error",-978969032));

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","switch","graph/switch",178853840),previous_repo,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"persist?","persist?",-1772568760),false], null)], null));
} else {
}

if(((cljs.core.not(created_new_graph_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("file-graph-import","graph-not-created","file-graph-import/graph-not-created",1230676533),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(error)))))){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","unexpected-error","import/unexpected-error",734336150),(function (){var or__5142__auto__ = error.message;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(error));
}
})()], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
} else {
}

return null;
}
});
frontend.components.imports.import_file_graph = (function frontend$components$imports$import_file_graph(_STAR_files,p__59398,config_file){
var map__59399 = p__59398;
var map__59399__$1 = cljs.core.__destructure_map(map__59399);
var user_options = map__59399__$1;
var graph_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59399__$1,new cljs.core.Keyword(null,"graph-name","graph-name",416773857));
var previous_repo = frontend.state.get_current_repo();
var expected_repo = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.db_version_prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(graph_name));
frontend.state.set_state_BANG_(new cljs.core.Keyword("graph","importing","graph/importing",1647644617),new cljs.core.Keyword(null,"file-graph","file-graph",-246966187));

frontend.state.set_state_BANG_(new cljs.core.Keyword("graph","importing-state","graph/importing-state",34918559),frontend.components.imports.file_graph_import_initial_ui_state);

frontend.components.imports.start_file_graph_import_session_BANG_(_STAR_files);

(frontend.components.imports.open_import_indicator_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.components.imports.open_import_indicator_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.components.imports.open_import_indicator_BANG_.call(null));

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(cljs_time.core.now()),(function (start_time){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.repo.new_db_BANG_.cljs$core$IFn$_invoke$arity$2(graph_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-graph-import?","file-graph-import?",-2126895083),true], null))),(function (created_repo){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = created_repo;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.state.get_current_repo();
}
})()),(function (repo){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(repo,expected_repo))?null:(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("File-graph import did not create a new graph",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword("file-graph-import","graph-not-created","file-graph-import/graph-not-created",1230676533),new cljs.core.Keyword(null,"expected","expected",1583670997),expected_repo,new cljs.core.Keyword(null,"repo","repo",-1999060679),repo], null))})())),(function (___21901__auto__){
return promesa.protocols._promise(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.components.imports.import_file_descriptor,_STAR_files)),(function (file_metas){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59397_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__59397_SHARP_),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(config_file));
}),file_metas))),(function (serialized_config_file){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.imports.build_file_graph_worker_options(user_options,frontend.config.config_default_content)),(function (options){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","import-file-graph","thread-api/import-file-graph",-1492594787),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,serialized_config_file,file_metas,options], 0))),(function (import_result){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.repo.restore_and_setup_repo_BANG_.cljs$core$IFn$_invoke$arity$variadic(repo,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-graph-import?","file-graph-import?",-2126895083),true], null)], 0))),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(((goog.debug.LOGGING_ENABLED)?lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.imports",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"import-file-graph","import-file-graph",1885587348),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),(""+"Import finished in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs_time.core.in_millis(cljs_time.core.interval(start_time,cljs_time.core.now())) / (1000)))+" seconds")], null),new cljs.core.Keyword(null,"line","line",212345235),470], null)),null):null)),(function (___21901__auto____$1){
return promesa.protocols._promise(frontend.components.imports.finish_file_graph_import_BANG_(repo,import_result));
}));
}));
}));
}));
}));
}));
})));
}));
}));
}));
}));
})),(function (error){
return frontend.components.imports.abort_file_graph_import_BANG_(error,previous_repo);
})),(function (){
return frontend.handler.file_graph_import.clear_file_graph_import_session_BANG_();
}));
});
/**
 * Import from a graph folder as a DB-based graph
 */
frontend.components.imports.import_file_to_db_handler = (function frontend$components$imports$import_file_to_db_handler(ev,opts){
var file_objs = (cljs.core.truth_(ev)?cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(ev.target.files):[]);
var original_graph_name = (cljs.core.truth_(cljs.core.first(file_objs))?clojure.string.replace(cljs.core.first(file_objs).webkitRelativePath,/\/.*/,""):"");
var import_graph_fn = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"import-graph-fn","import-graph-fn",496143659).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (function (user_inputs){
var files = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__59401_SHARP_){
var and__5140__auto__ = (!(clojure.string.starts_with_QMARK_(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__59401_SHARP_),"assets/")));
if(and__5140__auto__){
return frontend.components.imports.ignored_path_QMARK_(original_graph_name,new cljs.core.Keyword(null,"file-object","file-object",-1396844020).cljs$core$IFn$_invoke$arity$1(p1__59401_SHARP_).webkitRelativePath);
} else {
return and__5140__auto__;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59400_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file-object","file-object",-1396844020),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"fs-path","fs-path",760699783),new cljs.core.Keyword(null,"last-modified-at","last-modified-at",478765450)],[p1__59400_SHARP_,logseq.common.path.trim_dir_prefix(original_graph_name,p1__59400_SHARP_.webkitRelativePath),(cljs.core.truth_(frontend.util.electron_QMARK_())?window.apis.getFilePath(p1__59400_SHARP_):null),(function (){var G__59403 = p1__59400_SHARP_.lastModified;
if((G__59403 == null)){
return null;
} else {
return (new Date(G__59403));
}
})()]);
}),file_objs));
var temp__5823__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59402_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__59402_SHARP_),"logseq/config.edn");
}),files));
if(cljs.core.truth_(temp__5823__auto__)){
var config_file = temp__5823__auto__;
return frontend.components.imports.import_file_graph(files,user_inputs,config_file);
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","logseq-config-missing","import/logseq-config-missing",-1872874945)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
}
});
}
})();
var G__59404 = (function (){
return frontend.components.imports.import_file_graph_dialog(original_graph_name,(function (p__59405){
var map__59406 = p__59405;
var map__59406__$1 = cljs.core.__destructure_map(map__59406);
var user_inputs = map__59406__$1;
var graph_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59406__$1,new cljs.core.Keyword(null,"graph-name","graph-name",416773857));
var trimmed_graph_name = clojure.string.trim(graph_name);
if(clojure.string.blank_QMARK_(trimmed_graph_name)){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","empty-graph-name","import/empty-graph-name",-276972921)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
} else {
if(cljs.core.truth_(frontend.components.repo.invalid_graph_name_QMARK_(trimmed_graph_name))){
return frontend.components.repo.invalid_graph_name_warning();
} else {
if(cljs.core.truth_(frontend.handler.repo.graph_already_exists_QMARK_(trimmed_graph_name))){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","graph-name-conflict","import/graph-name-conflict",678078360)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
} else {
var G__59407 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(user_inputs,new cljs.core.Keyword(null,"graph-name","graph-name",416773857),trimmed_graph_name);
return (import_graph_fn.cljs$core$IFn$_invoke$arity$1 ? import_graph_fn.cljs$core$IFn$_invoke$arity$1(G__59407) : import_graph_fn.call(null,G__59407));

}
}
}
}));
});
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1(G__59404) : logseq.shui.ui.dialog_open_BANG_.call(null,G__59404));
});
frontend.components.imports.indicator_progress = (function (){var render_fn__31744__auto__ = (function frontend$components$imports$indicator_progress(){
var map__59408 = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","importing-state","graph/importing-state",34918559)], null));
var map__59408__$1 = cljs.core.__destructure_map(map__59408);
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59408__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var current_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59408__$1,new cljs.core.Keyword(null,"current-idx","current-idx",1734114444));
var current_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59408__$1,new cljs.core.Keyword(null,"current-page","current-page",-101294180));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59408__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59408__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var label__$1 = (function (){var or__5142__auto__ = (function (){var G__59409 = step;
var G__59409__$1 = (((G__59409 instanceof cljs.core.Keyword))?G__59409.fqn:null);
switch (G__59409__$1) {
case "importing":
case "config":
case "pages":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","loading","import/loading",-1917645552)], 0));

break;
case "assets":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","copying-assets","import/copying-assets",990025184)], 0));

break;
case "finishing":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","finishing","import/finishing",166086760)], 0));

break;
case "validating":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","validating-graph","import/validating-graph",-1341892878)], 0));

break;
default:
return null;

}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (((label instanceof cljs.core.Keyword))?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label], 0)):null);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = ((cljs.core.seq(label))?label:null);
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","loading","import/loading",-1917645552)], 0));
}
}
}
})();
var left_label = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.font-bold","div.flex.flex-row.font-bold",2116828028),label__$1,((cljs.core.seq(current_page))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hidden.md:flex.flex-row","div.hidden.md:flex.flex-row",-212067351),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mr-1","span.mr-1",127520086),": "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-ellipsis-wrapper","div.text-ellipsis-wrapper",-595927398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(300)], null)], null),current_page], null)], null):null)], null);
var width = (cljs.core.truth_((function (){var and__5140__auto__ = total;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = current_idx;
if(cljs.core.truth_(and__5140__auto____$1)){
return (total > (0));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?Math.round(((current_idx / total).toFixed((2)) * (100))):null);
var process__$1 = (cljs.core.truth_((function (){var and__5140__auto__ = total;
if(cljs.core.truth_(and__5140__auto__)){
return current_idx;
} else {
return and__5140__auto__;
}
})())?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_idx)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total)):null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-5","div.p-5",194272525),frontend.ui.progress_bar_with_label((function (){var or__5142__auto__ = width;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})(),left_label,process__$1)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$imports$indicator_progress__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__59410 = cljs.core.first(args__31746__auto__);
var G__59411 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__59410,G__59411) : io.factorhouse.hsx.core.obj_get.call(null,G__59410,G__59411));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"indicator-progress","indicator-progress",1180289509,null),args__31746__auto__),frontend$components$imports$indicator_progress,args__31746__auto__,null);
}
};
var frontend$components$imports$indicator_progress = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__59465__i = 0, G__59465__a = new Array(arguments.length -  0);
while (G__59465__i < G__59465__a.length) {G__59465__a[G__59465__i] = arguments[G__59465__i + 0]; ++G__59465__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__59465__a,0,null);
} 
return frontend$components$imports$indicator_progress__delegate.call(this,args__31746__auto__);};
frontend$components$imports$indicator_progress.cljs$lang$maxFixedArity = 0;
frontend$components$imports$indicator_progress.cljs$lang$applyTo = (function (arglist__59466){
var args__31746__auto__ = cljs.core.seq(arglist__59466);
return frontend$components$imports$indicator_progress__delegate(args__31746__auto__);
});
frontend$components$imports$indicator_progress.cljs$core$IFn$_invoke$arity$variadic = frontend$components$imports$indicator_progress__delegate;
return frontend$components$imports$indicator_progress;
})()
;
var memo_comp__31747__auto__ = (function (){var G__59412 = comp__31745__auto__;
var G__59413 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__59412,G__59413) : io.factorhouse.hsx.core.react_memo.call(null,G__59412,G__59413));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"indicator-progress");

return comp__31745__auto__;
})();
frontend.components.imports.open_import_indicator_BANG_ = (function frontend$components$imports$open_import_indicator_BANG_(){
if(cljs.core.truth_(logseq.shui.dialog.core.get_dialog(new cljs.core.Keyword(null,"import-indicator","import-indicator",-732235210)))){
return null;
} else {
var G__59416 = frontend.components.imports.indicator_progress;
var G__59417 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"import-indicator","import-indicator",-732235210),new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onPointerDownOutside","onPointerDownOutside",404933036),(function (p1__59414_SHARP_){
return p1__59414_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"onOpenAutoFocus","onOpenAutoFocus",-99363202),(function (p1__59415_SHARP_){
return p1__59415_SHARP_.preventDefault();
})], null)], null);
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2(G__59416,G__59417) : logseq.shui.ui.dialog_open_BANG_.call(null,G__59416,G__59417));
}
});
frontend.components.imports.import_indicator = (function (){var render_fn__31744__auto__ = (function frontend$components$imports$import_indicator(importing_QMARK_){
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(importing_QMARK_)){
return frontend.components.imports.open_import_indicator_BANG_();
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [importing_QMARK_], null));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$imports$import_indicator__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__59418 = cljs.core.first(args__31746__auto__);
var G__59419 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__59418,G__59419) : io.factorhouse.hsx.core.obj_get.call(null,G__59418,G__59419));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"import-indicator","import-indicator",908296317,null),args__31746__auto__),frontend$components$imports$import_indicator,args__31746__auto__,null);
}
};
var frontend$components$imports$import_indicator = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__59467__i = 0, G__59467__a = new Array(arguments.length -  0);
while (G__59467__i < G__59467__a.length) {G__59467__a[G__59467__i] = arguments[G__59467__i + 0]; ++G__59467__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__59467__a,0,null);
} 
return frontend$components$imports$import_indicator__delegate.call(this,args__31746__auto__);};
frontend$components$imports$import_indicator.cljs$lang$maxFixedArity = 0;
frontend$components$imports$import_indicator.cljs$lang$applyTo = (function (arglist__59468){
var args__31746__auto__ = cljs.core.seq(arglist__59468);
return frontend$components$imports$import_indicator__delegate(args__31746__auto__);
});
frontend$components$imports$import_indicator.cljs$core$IFn$_invoke$arity$variadic = frontend$components$imports$import_indicator__delegate;
return frontend$components$imports$import_indicator;
})()
;
var memo_comp__31747__auto__ = (function (){var G__59420 = comp__31745__auto__;
var G__59421 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__59420,G__59421) : io.factorhouse.hsx.core.react_memo.call(null,G__59420,G__59421));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"import-indicator");

return comp__31745__auto__;
})();
frontend.components.imports.importer = (function (){var render_fn__31744__auto__ = (function frontend$components$imports$importer(p__59422){
var map__59423 = p__59422;
var map__59423__$1 = cljs.core.__destructure_map(map__59423);
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59423__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var importing_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","importing","graph/importing",1647644617)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),frontend.components.imports.import_indicator(importing_QMARK_),(cljs.core.truth_(importing_QMARK_)?null:frontend.components.onboarding.setups.setups_container(new cljs.core.Keyword(null,"importer","importer",570599349),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article.flex.flex-col.items-center.importer.py-16.px-8","article.flex.flex-col.items-center.importer.py-16.px-8",-2146491748),(cljs.core.truth_(frontend.util.mobile_QMARK_())?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.c.text-center","section.c.text-center",-454472767),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("onboarding.import","title","onboarding.import/title",71020807)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("onboarding.import","desc","onboarding.import/desc",-1672270180)], 0))], null)], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.d.md:flex.flex-col","section.d.md:flex.flex-col",1158327659),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.action-input.flex.items-center.mx-2.my-2","label.action-input.flex.items-center.mx-2.my-2",853398969),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.as-flex-center","span.as-flex-center",886043029),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),frontend.components.svg.logo.cljs$core$IFn$_invoke$arity$1((28))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.flex-col","span.flex.flex-col",347826015),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"SQLite"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("onboarding.import","sqlite-desc","onboarding.import/sqlite-desc",1391425932)], 0))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.absolute.hidden","input.absolute.hidden",-354085487),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"import-sqlite-db",new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__59424 = (function (){
return frontend.components.imports.set_graph_name_dialog(e,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sqlite?","sqlite?",1827775537),true], null));
});
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1(G__59424) : logseq.shui.ui.dialog_open_BANG_.call(null,G__59424));
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.action-input.flex.items-center.mx-2.my-2","label.action-input.flex.items-center.mx-2.my-2",853398969),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.as-flex-center","span.as-flex-center",886043029),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),frontend.components.svg.logo.cljs$core$IFn$_invoke$arity$1((28))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.flex-col","span.flex.flex-col",347826015),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","sqlite-and-assets-title","import/sqlite-and-assets-title",12788868)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","sqlite-and-assets-desc","import/sqlite-and-assets-desc",1828439578)], 0))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.absolute.hidden","input.absolute.hidden",-354085487),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"import-sqlite-zip",new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"accept","accept",1874130431),".zip",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__59425 = (function (){
return frontend.components.imports.set_graph_name_dialog(e,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sqlite-zip?","sqlite-zip?",2011532772),true], null));
});
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1(G__59425) : logseq.shui.ui.dialog_open_BANG_.call(null,G__59425));
})], null)], null)], null),(cljs.core.truth_(frontend.util.mobile_QMARK_())?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.action-input.flex.items-center.mx-2.my-2","label.action-input.flex.items-center.mx-2.my-2",853398969),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.as-flex-center","span.as-flex-center",886043029),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),frontend.components.svg.logo.cljs$core$IFn$_invoke$arity$1((28))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.flex-col","span.flex.flex-col",347826015),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","file-to-db-title","import/file-to-db-title",64583842)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","file-to-db-desc","import/file-to-db-desc",225711724)], 0))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.absolute.hidden","input.absolute.hidden",-354085487),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"import-file-graph",new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"webkitdirectory","webkitdirectory",-656072604),"true",new cljs.core.Keyword(null,"on-change","on-change",-732046149),goog.functions.debounce((function (e){
return frontend.components.imports.import_file_to_db_handler(e,cljs.core.PersistentArrayMap.EMPTY);
}),(1000))], null)], null)], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.action-input.flex.items-center.mx-2.my-2","label.action-input.flex.items-center.mx-2.my-2",853398969),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.as-flex-center","span.as-flex-center",886043029),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),frontend.components.svg.logo.cljs$core$IFn$_invoke$arity$1((28))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.flex-col","span.flex.flex-col",347826015),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","debug-transit-title","import/debug-transit-title",-56882274)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","debug-transit-desc","import/debug-transit-desc",117006371)], 0))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.absolute.hidden","input.absolute.hidden",-354085487),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"import-debug-transit",new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__59426 = (function (){
return frontend.components.imports.set_graph_name_dialog(e,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"debug-transit?","debug-transit?",-1402926414),true], null));
});
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1(G__59426) : logseq.shui.ui.dialog_open_BANG_.call(null,G__59426));
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.action-input.flex.items-center.mx-2.my-2","label.action-input.flex.items-center.mx-2.my-2",853398969),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.as-flex-center","span.as-flex-center",886043029),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),frontend.components.svg.logo.cljs$core$IFn$_invoke$arity$1((28))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.flex-col","span.flex.flex-col",347826015),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","db-edn-title","import/db-edn-title",-581019850)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","db-edn-desc","import/db-edn-desc",-1965469498)], 0))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.absolute.hidden","input.absolute.hidden",-354085487),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"import-db-edn",new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__59427 = (function (){
return frontend.components.imports.set_graph_name_dialog(e,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db-edn?","db-edn?",-448928080),true], null));
});
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1(G__59427) : logseq.shui.ui.dialog_open_BANG_.call(null,G__59427));
})], null)], null)], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("picker",new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(query_params)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.e","section.e",-1594885824),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button","a.button",275710893),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$0();
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","skip","ui/skip",602710635)], 0))], null)], null):null)], null)))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$imports$importer__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__59428 = cljs.core.first(args__31746__auto__);
var G__59429 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__59428,G__59429) : io.factorhouse.hsx.core.obj_get.call(null,G__59428,G__59429));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"importer","importer",-2083836420,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$imports$importer,args__31746__auto__,null);
}
};
var frontend$components$imports$importer = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__59469__i = 0, G__59469__a = new Array(arguments.length -  0);
while (G__59469__i < G__59469__a.length) {G__59469__a[G__59469__i] = arguments[G__59469__i + 0]; ++G__59469__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__59469__a,0,null);
} 
return frontend$components$imports$importer__delegate.call(this,args__31746__auto__);};
frontend$components$imports$importer.cljs$lang$maxFixedArity = 0;
frontend$components$imports$importer.cljs$lang$applyTo = (function (arglist__59470){
var args__31746__auto__ = cljs.core.seq(arglist__59470);
return frontend$components$imports$importer__delegate(args__31746__auto__);
});
frontend$components$imports$importer.cljs$core$IFn$_invoke$arity$variadic = frontend$components$imports$importer__delegate;
return frontend$components$imports$importer;
})()
;
var memo_comp__31747__auto__ = (function (){var G__59430 = comp__31745__auto__;
var G__59431 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__59430,G__59431) : io.factorhouse.hsx.core.react_memo.call(null,G__59430,G__59431));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"importer");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.imports.js.map
