goog.provide('frontend.components.assets');
frontend.components.assets._get_all_formats = (function frontend$components$assets$_get_all_formats(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54318_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217)],[p1__54318_SHARP_,cljs.core.name(p1__54318_SHARP_)]);
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(frontend.config.doc_formats,frontend.config.audio_formats,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.config.video_formats,frontend.config.image_formats,frontend.config.markup_formats], 0)));
});
frontend.components.assets.input_auto_complete = (function (){var render_fn__31744__auto__ = (function frontend$components$assets$input_auto_complete(p__54322){
var map__54323 = p__54322;
var map__54323__$1 = cljs.core.__destructure_map(map__54323);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54323__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var item_cp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54323__$1,new cljs.core.Keyword(null,"item-cp","item-cp",294728683));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54323__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var on_chosen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54323__$1,new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900));
var on_keydown = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54323__$1,new cljs.core.Keyword(null,"on-keydown","on-keydown",-2056941495));
var input_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54323__$1,new cljs.core.Keyword(null,"input-opts","input-opts",1688681135));
var vec__54325 = logseq.shui.hooks.use_state(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null));
var _STAR_input_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54325,(0),null);
var set__STAR_input_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54325,(1),null);
var vec__54328 = logseq.shui.hooks.use_state(true);
var input_empty_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54328,(0),null);
var set_input_empty_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54328,(1),null);
logseq.shui.hooks.use_effect_BANG_((function (){
var G__54331 = clojure.string.blank_QMARK_(cljs.core.deref(_STAR_input_val));
return (set_input_empty_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_input_empty_QMARK_.cljs$core$IFn$_invoke$arity$1(G__54331) : set_input_empty_QMARK_.call(null,G__54331));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(_STAR_input_val)], null));

return frontend.components.select.select(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"tap-*input-val","tap-*input-val",1531539652),new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),new cljs.core.Keyword(null,"item-cp","item-cp",294728683),new cljs.core.Keyword(null,"input-opts","input-opts",1688681135),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),new cljs.core.Keyword(null,"host-opts","host-opts",-933691505),new cljs.core.Keyword(null,"close-modal?","close-modal?",-207518383),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword(null,"on-input","on-input",-267523366)],[(function (p1__54320_SHARP_){
return (set__STAR_input_val.cljs$core$IFn$_invoke$arity$1 ? set__STAR_input_val.cljs$core$IFn$_invoke$arity$1(p1__54320_SHARP_) : set__STAR_input_val.call(null,p1__54320_SHARP_));
}),on_chosen,item_cp,(function (){var G__54332 = input_opts;
if(cljs.core.fn_QMARK_(on_keydown)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54332,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__54321_SHARP_){
return (on_keydown.cljs$core$IFn$_invoke$arity$2 ? on_keydown.cljs$core$IFn$_invoke$arity$2(p1__54321_SHARP_,_STAR_input_val) : on_keydown.call(null,p1__54321_SHARP_,_STAR_input_val));
}));
} else {
return G__54332;
}
})(),(function (results){
if(cljs.core.truth_((function (){var and__5140__auto__ = _STAR_input_val;
if(cljs.core.truth_(and__5140__auto__)){
return (((!(clojure.string.blank_QMARK_(cljs.core.deref(_STAR_input_val))))) && (cljs.core.not(cljs.core.seq(results))));
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(_STAR_input_val)], null)], null);
} else {
return results;
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cp__input-ac","cp__input-ac",-714359157),class$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"is-empty-input","is-empty-input",484547677),input_empty_QMARK_], null)], null))], null),false,items,(function (p1__54319_SHARP_){
var G__54333 = clojure.string.blank_QMARK_(p1__54319_SHARP_);
return (set_input_empty_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_input_empty_QMARK_.cljs$core$IFn$_invoke$arity$1(G__54333) : set_input_empty_QMARK_.call(null,G__54333));
})]));
});
var comp__31745__auto__ = (function() { 
var frontend$components$assets$input_auto_complete__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__54334 = cljs.core.first(args__31746__auto__);
var G__54335 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__54334,G__54335) : io.factorhouse.hsx.core.obj_get.call(null,G__54334,G__54335));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"input-auto-complete","input-auto-complete",961062192,null),args__31746__auto__),frontend$components$assets$input_auto_complete,args__31746__auto__,null);
}
};
var frontend$components$assets$input_auto_complete = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__54425__i = 0, G__54425__a = new Array(arguments.length -  0);
while (G__54425__i < G__54425__a.length) {G__54425__a[G__54425__i] = arguments[G__54425__i + 0]; ++G__54425__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__54425__a,0,null);
} 
return frontend$components$assets$input_auto_complete__delegate.call(this,args__31746__auto__);};
frontend$components$assets$input_auto_complete.cljs$lang$maxFixedArity = 0;
frontend$components$assets$input_auto_complete.cljs$lang$applyTo = (function (arglist__54426){
var args__31746__auto__ = cljs.core.seq(arglist__54426);
return frontend$components$assets$input_auto_complete__delegate(args__31746__auto__);
});
frontend$components$assets$input_auto_complete.cljs$core$IFn$_invoke$arity$variadic = frontend$components$assets$input_auto_complete__delegate;
return frontend$components$assets$input_auto_complete;
})()
;
var memo_comp__31747__auto__ = (function (){var G__54336 = comp__31745__auto__;
var G__54337 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__54336,G__54337) : io.factorhouse.hsx.core.react_memo.call(null,G__54336,G__54337));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"input-auto-complete");

return comp__31745__auto__;
})();
frontend.components.assets.confirm_dir_with_alias_name = (function (){var render_fn__31744__auto__ = (function frontend$components$assets$confirm_dir_with_alias_name(dir,set_dir_BANG_){
var vec__54338 = logseq.shui.hooks.use_state("");
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54338,(0),null);
var set_val_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54338,(1),null);
var on_submit = (function (){
if(clojure.string.blank_QMARK_(val)){
return null;
} else {
if(cljs.core.not(frontend.handler.assets.get_alias_by_name(val))){
(set_dir_BANG_.cljs$core$IFn$_invoke$arity$3 ? set_dir_BANG_.cljs$core$IFn$_invoke$arity$3(val,dir,null) : set_dir_BANG_.call(null,val,dir,null));

return (logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dialog_close_BANG_.call(null));
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","alias-already-exists","asset/alias-already-exists",-2024871897),val], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));
}
}
});
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__assets-alias-name-content","div.cp__assets-alias-name-content",2116578437),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-2xl.opacity-90.mb-6","h1.text-2xl.opacity-90.mb-6",-1889772955),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","alias-name-dialog-title","asset/alias-name-dialog-title",70754896)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","alias-directory-path-label","asset/alias-directory-path-label",-582636411)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return apis.openPath(dir);
} else {
return null;
}
})], null),dir], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","alias-name-label","asset/alias-name-label",1128276088)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.px-1.border.rounded","input.px-1.border.rounded",1700888458),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"autoFocus","autoFocus",-552622425),true,new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","alias-name-placeholder","asset/alias-name-placeholder",-207210108)], 0)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__54342 = frontend.util.trim_safe(e.target.value);
return (set_val_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_BANG_.cljs$core$IFn$_invoke$arity$1(G__54342) : set_val_BANG_.call(null,G__54342));
}),new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),(function (e){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),e.which)) && ((!(clojure.string.blank_QMARK_(val)))))){
return on_submit();
} else {
return null;
}
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pt-6.flex.justify-end","div.pt-6.flex.justify-end",-1838994577),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","save","ui/save",1850075345)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"disabled","disabled",-1529784218),clojure.string.blank_QMARK_(val),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_submit], 0))], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$assets$confirm_dir_with_alias_name__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__54344 = cljs.core.first(args__31746__auto__);
var G__54345 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__54344,G__54345) : io.factorhouse.hsx.core.obj_get.call(null,G__54344,G__54345));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"confirm-dir-with-alias-name","confirm-dir-with-alias-name",-1668323486,null),args__31746__auto__),frontend$components$assets$confirm_dir_with_alias_name,args__31746__auto__,null);
}
};
var frontend$components$assets$confirm_dir_with_alias_name = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__54428__i = 0, G__54428__a = new Array(arguments.length -  0);
while (G__54428__i < G__54428__a.length) {G__54428__a[G__54428__i] = arguments[G__54428__i + 0]; ++G__54428__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__54428__a,0,null);
} 
return frontend$components$assets$confirm_dir_with_alias_name__delegate.call(this,args__31746__auto__);};
frontend$components$assets$confirm_dir_with_alias_name.cljs$lang$maxFixedArity = 0;
frontend$components$assets$confirm_dir_with_alias_name.cljs$lang$applyTo = (function (arglist__54429){
var args__31746__auto__ = cljs.core.seq(arglist__54429);
return frontend$components$assets$confirm_dir_with_alias_name__delegate(args__31746__auto__);
});
frontend$components$assets$confirm_dir_with_alias_name.cljs$core$IFn$_invoke$arity$variadic = frontend$components$assets$confirm_dir_with_alias_name__delegate;
return frontend$components$assets$confirm_dir_with_alias_name;
})()
;
var memo_comp__31747__auto__ = (function (){var G__54347 = comp__31745__auto__;
var G__54348 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__54347,G__54348) : io.factorhouse.hsx.core.react_memo.call(null,G__54347,G__54348));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"confirm-dir-with-alias-name");

return comp__31745__auto__;
})();
frontend.components.assets.restart_button = (function (){var render_fn__31744__auto__ = (function frontend$components$assets$restart_button(){
return frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","restart","plugin/restart",-927945071)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return logseq.api.relaunch();
}),new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"intent","intent",-390846953),"logseq"], 0));
});
var comp__31745__auto__ = (function() { 
var frontend$components$assets$restart_button__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__54349 = cljs.core.first(args__31746__auto__);
var G__54350 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__54349,G__54350) : io.factorhouse.hsx.core.obj_get.call(null,G__54349,G__54350));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"restart-button","restart-button",-655438327,null),args__31746__auto__),frontend$components$assets$restart_button,args__31746__auto__,null);
}
};
var frontend$components$assets$restart_button = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__54433__i = 0, G__54433__a = new Array(arguments.length -  0);
while (G__54433__i < G__54433__a.length) {G__54433__a[G__54433__i] = arguments[G__54433__i + 0]; ++G__54433__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__54433__a,0,null);
} 
return frontend$components$assets$restart_button__delegate.call(this,args__31746__auto__);};
frontend$components$assets$restart_button.cljs$lang$maxFixedArity = 0;
frontend$components$assets$restart_button.cljs$lang$applyTo = (function (arglist__54434){
var args__31746__auto__ = cljs.core.seq(arglist__54434);
return frontend$components$assets$restart_button__delegate(args__31746__auto__);
});
frontend$components$assets$restart_button.cljs$core$IFn$_invoke$arity$variadic = frontend$components$assets$restart_button__delegate;
return frontend$components$assets$restart_button;
})()
;
var memo_comp__31747__auto__ = (function (){var G__54351 = comp__31745__auto__;
var G__54352 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__54351,G__54352) : io.factorhouse.hsx.core.react_memo.call(null,G__54351,G__54352));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"restart-button");

return comp__31745__auto__;
})();
frontend.components.assets.alias_directories = (function (){var render_fn__31744__auto__ = (function frontend$components$assets$alias_directories(){
var vec__54353 = logseq.shui.hooks.use_state(null);
var ext_editing_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54353,(0),null);
var set_ext_editing_dir_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54353,(1),null);
var directories = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("assets","alias-dirs","assets/alias-dirs",627599020)], null)));
var pick_exist = frontend.handler.assets.get_alias_by_dir;
var set_dir_BANG_ = (function (name,dir,exts){
if(cljs.core.truth_((function (){var and__5140__auto__ = name;
if(cljs.core.truth_(and__5140__auto__)){
return dir;
} else {
return and__5140__auto__;
}
})())){
return frontend.state.set_assets_alias_dirs_BANG_((function (){var exist = (pick_exist.cljs$core$IFn$_invoke$arity$1 ? pick_exist.cljs$core$IFn$_invoke$arity$1(dir) : pick_exist.call(null,dir));
if(cljs.core.truth_(exist)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(directories,cljs.core.first(exist),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"dir","dir",1734754661),dir,new cljs.core.Keyword(null,"exts","exts",-946342126),cljs.core.set(exts)], null));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(directories,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dir","dir",1734754661),dir,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"exts","exts",-946342126),cljs.core.set(exts)], null));
}
})());
} else {
return null;
}
});
var rm_dir = (function (dir){
var temp__5825__auto__ = (pick_exist.cljs$core$IFn$_invoke$arity$1 ? pick_exist.cljs$core$IFn$_invoke$arity$1(dir) : pick_exist.call(null,dir));
if(cljs.core.truth_(temp__5825__auto__)){
var exist = temp__5825__auto__;
return frontend.state.set_assets_alias_dirs_BANG_(medley.core.remove_nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(exist),directories));
} else {
return null;
}
});
var del_ext = (function (dir,ext){
var temp__5825__auto__ = (function (){var and__5140__auto__ = ext;
if(cljs.core.truth_(and__5140__auto__)){
return (pick_exist.cljs$core$IFn$_invoke$arity$1 ? pick_exist.cljs$core$IFn$_invoke$arity$1(dir) : pick_exist.call(null,dir));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var exist = temp__5825__auto__;
var exts = new cljs.core.Keyword(null,"exts","exts",-946342126).cljs$core$IFn$_invoke$arity$1(cljs.core.second(exist));
var exts__$1 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(exts,cljs.core.PersistentHashSet.createAsIfByAssoc([ext]));
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second(exist));
return set_dir_BANG_(name,dir,exts__$1);
} else {
return null;
}
});
var add_ext = (function (dir,ext){
var temp__5825__auto__ = (function (){var and__5140__auto__ = ext;
if(cljs.core.truth_(and__5140__auto__)){
return (pick_exist.cljs$core$IFn$_invoke$arity$1 ? pick_exist.cljs$core$IFn$_invoke$arity$1(dir) : pick_exist.call(null,dir));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var exist = temp__5825__auto__;
var exts = new cljs.core.Keyword(null,"exts","exts",-946342126).cljs$core$IFn$_invoke$arity$1(cljs.core.second(exist));
var exts__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(exts,frontend.util.safe_lower_case(ext));
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second(exist));
return set_dir_BANG_(name,dir,exts__$1);
} else {
return null;
}
});
var confirm_dir = (function (dir,set_dir_BANG___$1){
var G__54358 = (function (){
return frontend.components.assets.confirm_dir_with_alias_name(dir,set_dir_BANG___$1);
});
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1(G__54358) : logseq.shui.ui.dialog_open_BANG_.call(null,G__54358));
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__assets-alias-directories","div.cp__assets-alias-directories",-1188401308),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5628__auto__ = (function frontend$components$assets$alias_directories_$_iter__54359(s__54360){
return (new cljs.core.LazySeq(null,(function (){
var s__54360__$1 = s__54360;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__54360__$1);
if(temp__5825__auto__){
var s__54360__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54360__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__54360__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__54362 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__54361 = (0);
while(true){
if((i__54361 < size__5627__auto__)){
var map__54363 = cljs.core._nth(c__5626__auto__,i__54361);
var map__54363__$1 = cljs.core.__destructure_map(map__54363);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54363__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54363__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var exts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54363__$1,new cljs.core.Keyword(null,"exts","exts",-946342126));
cljs.core.chunk_append(b__54362,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.item.px-2.py-2","li.item.px-2.py-2",-494867414),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-between.items-center","div.flex.justify-between.items-center",-1855308582),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-semibold","span.font-semibold",-1752897535),(""+"@"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.space-x-2","div.flex.items-center.space-x-2",1577492984),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.opacity-90.active:opacity-50.text-sm.flex.space-x-1","a.opacity-90.active:opacity-50.text-sm.flex.space-x-1",-1823978276),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__54361,map__54363,map__54363__$1,name,dir,exts,c__5626__auto__,size__5627__auto__,b__54362,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return apis.openPath(dir);
} else {
return null;
}
});})(i__54361,map__54363,map__54363__$1,name,dir,exts,c__5626__auto__,size__5627__auto__,b__54362,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
], null),frontend.ui.icon("folder"),dir], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-between.items-center","div.flex.justify-between.items-center",-1855308582),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.mt-2.space-x-2.pr-6","div.flex.mt-2.space-x-2.pr-6",-368670515),(function (){var iter__5628__auto__ = ((function (i__54361,map__54363,map__54363__$1,name,dir,exts,c__5626__auto__,size__5627__auto__,b__54362,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function frontend$components$assets$alias_directories_$_iter__54359_$_iter__54364(s__54365){
return (new cljs.core.LazySeq(null,((function (i__54361,map__54363,map__54363__$1,name,dir,exts,c__5626__auto__,size__5627__auto__,b__54362,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (){
var s__54365__$1 = s__54365;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__54365__$1);
if(temp__5825__auto____$1){
var s__54365__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__54365__$2)){
var c__5626__auto____$1 = cljs.core.chunk_first(s__54365__$2);
var size__5627__auto____$1 = cljs.core.count(c__5626__auto____$1);
var b__54367 = cljs.core.chunk_buffer(size__5627__auto____$1);
if((function (){var i__54366 = (0);
while(true){
if((i__54366 < size__5627__auto____$1)){
var ext = cljs.core._nth(c__5626__auto____$1,i__54366);
cljs.core.chunk_append(b__54367,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.ext-label.is-del","small.ext-label.is-del",-1627923471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),ext,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__54366,i__54361,ext,c__5626__auto____$1,size__5627__auto____$1,b__54367,s__54365__$2,temp__5825__auto____$1,map__54363,map__54363__$1,name,dir,exts,c__5626__auto__,size__5627__auto__,b__54362,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (){
return del_ext(dir,ext);
});})(i__54366,i__54361,ext,c__5626__auto____$1,size__5627__auto____$1,b__54367,s__54365__$2,temp__5825__auto____$1,map__54363,map__54363__$1,name,dir,exts,c__5626__auto__,size__5627__auto__,b__54362,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),ext], null),frontend.ui.icon("circle-minus")], null));

var G__54443 = (i__54366 + (1));
i__54366 = G__54443;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54367),frontend$components$assets$alias_directories_$_iter__54359_$_iter__54364(cljs.core.chunk_rest(s__54365__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54367),null);
}
} else {
var ext = cljs.core.first(s__54365__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.ext-label.is-del","small.ext-label.is-del",-1627923471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),ext,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__54361,ext,s__54365__$2,temp__5825__auto____$1,map__54363,map__54363__$1,name,dir,exts,c__5626__auto__,size__5627__auto__,b__54362,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (){
return del_ext(dir,ext);
});})(i__54361,ext,s__54365__$2,temp__5825__auto____$1,map__54363,map__54363__$1,name,dir,exts,c__5626__auto__,size__5627__auto__,b__54362,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),ext], null),frontend.ui.icon("circle-minus")], null),frontend$components$assets$alias_directories_$_iter__54359_$_iter__54364(cljs.core.rest(s__54365__$2)));
}
} else {
return null;
}
break;
}
});})(i__54361,map__54363,map__54363__$1,name,dir,exts,c__5626__auto__,size__5627__auto__,b__54362,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
,null,null));
});})(i__54361,map__54363,map__54363__$1,name,dir,exts,c__5626__auto__,size__5627__auto__,b__54362,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
;
return iter__5628__auto__(exts);
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dir,ext_editing_dir))?frontend.components.assets.input_auto_complete(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"items","items",1031954938),frontend.components.assets._get_all_formats(),new cljs.core.Keyword(null,"close-modal?","close-modal?",-207518383),false,new cljs.core.Keyword(null,"item-cp","item-cp",294728683),((function (i__54361,map__54363,map__54363__$1,name,dir,exts,c__5626__auto__,size__5627__auto__,b__54362,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (p__54368){
var map__54369 = p__54368;
var map__54369__$1 = cljs.core.__destructure_map(map__54369);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54369__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ext-select-item","div.ext-select-item",38152439),value], null);
});})(i__54361,map__54363,map__54363__$1,name,dir,exts,c__5626__auto__,size__5627__auto__,b__54362,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
,new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),((function (i__54361,map__54363,map__54363__$1,name,dir,exts,c__5626__auto__,size__5627__auto__,b__54362,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (p__54370){
var map__54371 = p__54370;
var map__54371__$1 = cljs.core.__destructure_map(map__54371);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54371__$1,new cljs.core.Keyword(null,"value","value",305978217));
add_ext(dir,value);

return (set_ext_editing_dir_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_ext_editing_dir_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_ext_editing_dir_BANG_.call(null,null));
});})(i__54361,map__54363,map__54363__$1,name,dir,exts,c__5626__auto__,size__5627__auto__,b__54362,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
,new cljs.core.Keyword(null,"on-keydown","on-keydown",-2056941495),((function (i__54361,map__54363,map__54363__$1,name,dir,exts,c__5626__auto__,size__5627__auto__,b__54362,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (e,_STAR_input_val){
var input = e.target;
var G__54372 = e.which;
switch (G__54372) {
case (27):
if((!(clojure.string.blank_QMARK_(input.value)))){
cljs.core.reset_BANG_(_STAR_input_val,"");
} else {
(set_ext_editing_dir_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_ext_editing_dir_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_ext_editing_dir_BANG_.call(null,null));
}

return frontend.util.stop(e);

break;
default:
return new cljs.core.Keyword(null,"dune","dune",1737226819);

}
});})(i__54361,map__54363,map__54363__$1,name,dir,exts,c__5626__auto__,size__5627__auto__,b__54362,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
,new cljs.core.Keyword(null,"input-opts","input-opts",1688681135),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"cp__assets-alias-ext-input",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","file-extension-placeholder","asset/file-extension-placeholder",-816995250)], 0)),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (i__54361,map__54363,map__54363__$1,name,dir,exts,c__5626__auto__,size__5627__auto__,b__54362,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (){
return (set_ext_editing_dir_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_ext_editing_dir_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_ext_editing_dir_BANG_.call(null,null));
});})(i__54361,map__54363,map__54363__$1,name,dir,exts,c__5626__auto__,size__5627__auto__,b__54362,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
], null)], null)):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.ext-label.is-plus","small.ext-label.is-plus",-1321119496),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__54361,map__54363,map__54363__$1,name,dir,exts,c__5626__auto__,size__5627__auto__,b__54362,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (){
return (set_ext_editing_dir_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_ext_editing_dir_BANG_.cljs$core$IFn$_invoke$arity$1(dir) : set_ext_editing_dir_BANG_.call(null,dir));
});})(i__54361,map__54363,map__54363__$1,name,dir,exts,c__5626__auto__,size__5627__auto__,b__54362,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
], null),frontend.ui.icon("plus"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","acceptable-file-extensions","asset/acceptable-file-extensions",2065004907)], 0))], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ctrls.flex.space-x-3.text-xs.opacity-30.hover:opacity-100.whitespace-nowrap.hidden.mt-1","span.ctrls.flex.space-x-3.text-xs.opacity-30.hover:opacity-100.whitespace-nowrap.hidden.mt-1",358893032),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__54361,map__54363,map__54363__$1,name,dir,exts,c__5626__auto__,size__5627__auto__,b__54362,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (){
return rm_dir(dir);
});})(i__54361,map__54363,map__54363__$1,name,dir,exts,c__5626__auto__,size__5627__auto__,b__54362,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
], null),frontend.ui.icon("trash-x")], null)], null)], null)], null));

var G__54445 = (i__54361 + (1));
i__54361 = G__54445;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54362),frontend$components$assets$alias_directories_$_iter__54359(cljs.core.chunk_rest(s__54360__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54362),null);
}
} else {
var map__54374 = cljs.core.first(s__54360__$2);
var map__54374__$1 = cljs.core.__destructure_map(map__54374);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54374__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54374__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var exts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54374__$1,new cljs.core.Keyword(null,"exts","exts",-946342126));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.item.px-2.py-2","li.item.px-2.py-2",-494867414),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-between.items-center","div.flex.justify-between.items-center",-1855308582),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-semibold","span.font-semibold",-1752897535),(""+"@"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.space-x-2","div.flex.items-center.space-x-2",1577492984),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.opacity-90.active:opacity-50.text-sm.flex.space-x-1","a.opacity-90.active:opacity-50.text-sm.flex.space-x-1",-1823978276),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__54374,map__54374__$1,name,dir,exts,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return apis.openPath(dir);
} else {
return null;
}
});})(map__54374,map__54374__$1,name,dir,exts,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
], null),frontend.ui.icon("folder"),dir], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-between.items-center","div.flex.justify-between.items-center",-1855308582),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.mt-2.space-x-2.pr-6","div.flex.mt-2.space-x-2.pr-6",-368670515),(function (){var iter__5628__auto__ = ((function (map__54374,map__54374__$1,name,dir,exts,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function frontend$components$assets$alias_directories_$_iter__54359_$_iter__54376(s__54377){
return (new cljs.core.LazySeq(null,(function (){
var s__54377__$1 = s__54377;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__54377__$1);
if(temp__5825__auto____$1){
var s__54377__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__54377__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__54377__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__54379 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__54378 = (0);
while(true){
if((i__54378 < size__5627__auto__)){
var ext = cljs.core._nth(c__5626__auto__,i__54378);
cljs.core.chunk_append(b__54379,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.ext-label.is-del","small.ext-label.is-del",-1627923471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),ext,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__54378,ext,c__5626__auto__,size__5627__auto__,b__54379,s__54377__$2,temp__5825__auto____$1,map__54374,map__54374__$1,name,dir,exts,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (){
return del_ext(dir,ext);
});})(i__54378,ext,c__5626__auto__,size__5627__auto__,b__54379,s__54377__$2,temp__5825__auto____$1,map__54374,map__54374__$1,name,dir,exts,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),ext], null),frontend.ui.icon("circle-minus")], null));

var G__54448 = (i__54378 + (1));
i__54378 = G__54448;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54379),frontend$components$assets$alias_directories_$_iter__54359_$_iter__54376(cljs.core.chunk_rest(s__54377__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54379),null);
}
} else {
var ext = cljs.core.first(s__54377__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.ext-label.is-del","small.ext-label.is-del",-1627923471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),ext,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (ext,s__54377__$2,temp__5825__auto____$1,map__54374,map__54374__$1,name,dir,exts,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (){
return del_ext(dir,ext);
});})(ext,s__54377__$2,temp__5825__auto____$1,map__54374,map__54374__$1,name,dir,exts,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),ext], null),frontend.ui.icon("circle-minus")], null),frontend$components$assets$alias_directories_$_iter__54359_$_iter__54376(cljs.core.rest(s__54377__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__54374,map__54374__$1,name,dir,exts,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
;
return iter__5628__auto__(exts);
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dir,ext_editing_dir))?frontend.components.assets.input_auto_complete(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"items","items",1031954938),frontend.components.assets._get_all_formats(),new cljs.core.Keyword(null,"close-modal?","close-modal?",-207518383),false,new cljs.core.Keyword(null,"item-cp","item-cp",294728683),((function (map__54374,map__54374__$1,name,dir,exts,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (p__54380){
var map__54381 = p__54380;
var map__54381__$1 = cljs.core.__destructure_map(map__54381);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54381__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ext-select-item","div.ext-select-item",38152439),value], null);
});})(map__54374,map__54374__$1,name,dir,exts,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
,new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),((function (map__54374,map__54374__$1,name,dir,exts,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (p__54382){
var map__54383 = p__54382;
var map__54383__$1 = cljs.core.__destructure_map(map__54383);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54383__$1,new cljs.core.Keyword(null,"value","value",305978217));
add_ext(dir,value);

return (set_ext_editing_dir_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_ext_editing_dir_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_ext_editing_dir_BANG_.call(null,null));
});})(map__54374,map__54374__$1,name,dir,exts,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
,new cljs.core.Keyword(null,"on-keydown","on-keydown",-2056941495),((function (map__54374,map__54374__$1,name,dir,exts,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (e,_STAR_input_val){
var input = e.target;
var G__54384 = e.which;
switch (G__54384) {
case (27):
if((!(clojure.string.blank_QMARK_(input.value)))){
cljs.core.reset_BANG_(_STAR_input_val,"");
} else {
(set_ext_editing_dir_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_ext_editing_dir_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_ext_editing_dir_BANG_.call(null,null));
}

return frontend.util.stop(e);

break;
default:
return new cljs.core.Keyword(null,"dune","dune",1737226819);

}
});})(map__54374,map__54374__$1,name,dir,exts,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
,new cljs.core.Keyword(null,"input-opts","input-opts",1688681135),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"cp__assets-alias-ext-input",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","file-extension-placeholder","asset/file-extension-placeholder",-816995250)], 0)),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (map__54374,map__54374__$1,name,dir,exts,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (){
return (set_ext_editing_dir_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_ext_editing_dir_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_ext_editing_dir_BANG_.call(null,null));
});})(map__54374,map__54374__$1,name,dir,exts,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
], null)], null)):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.ext-label.is-plus","small.ext-label.is-plus",-1321119496),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__54374,map__54374__$1,name,dir,exts,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (){
return (set_ext_editing_dir_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_ext_editing_dir_BANG_.cljs$core$IFn$_invoke$arity$1(dir) : set_ext_editing_dir_BANG_.call(null,dir));
});})(map__54374,map__54374__$1,name,dir,exts,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
], null),frontend.ui.icon("plus"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","acceptable-file-extensions","asset/acceptable-file-extensions",2065004907)], 0))], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ctrls.flex.space-x-3.text-xs.opacity-30.hover:opacity-100.whitespace-nowrap.hidden.mt-1","span.ctrls.flex.space-x-3.text-xs.opacity-30.hover:opacity-100.whitespace-nowrap.hidden.mt-1",358893032),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__54374,map__54374__$1,name,dir,exts,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (){
return rm_dir(dir);
});})(map__54374,map__54374__$1,name,dir,exts,s__54360__$2,temp__5825__auto__,vec__54353,ext_editing_dir,set_ext_editing_dir_BANG_,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
], null),frontend.ui.icon("trash-x")], null)], null)], null)], null),frontend$components$assets$alias_directories_$_iter__54359(cljs.core.rest(s__54360__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(directories);
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.pt-2","p.pt-2",-247770776),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","add-directory","asset/add-directory",769963984)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"openDialog","openDialog",1438895893)], 0))),(function (path){
return promesa.protocols._promise((cljs.core.truth_((function (){var or__5142__auto__ = clojure.string.blank_QMARK_(path);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return (pick_exist.cljs$core$IFn$_invoke$arity$1 ? pick_exist.cljs$core$IFn$_invoke$arity$1(path) : pick_exist.call(null,path));
}
})())?null:confirm_dir(path,set_dir_BANG_)));
}));
}));
}),new cljs.core.Keyword(null,"small?","small?",95242445),true], 0))], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$assets$alias_directories__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__54385 = cljs.core.first(args__31746__auto__);
var G__54386 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__54385,G__54386) : io.factorhouse.hsx.core.obj_get.call(null,G__54385,G__54386));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"alias-directories","alias-directories",251369661,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","data-var","large-vars/data-var",1805150589),true], null)),args__31746__auto__),frontend$components$assets$alias_directories,args__31746__auto__,null);
}
};
var frontend$components$assets$alias_directories = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__54459__i = 0, G__54459__a = new Array(arguments.length -  0);
while (G__54459__i < G__54459__a.length) {G__54459__a[G__54459__i] = arguments[G__54459__i + 0]; ++G__54459__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__54459__a,0,null);
} 
return frontend$components$assets$alias_directories__delegate.call(this,args__31746__auto__);};
frontend$components$assets$alias_directories.cljs$lang$maxFixedArity = 0;
frontend$components$assets$alias_directories.cljs$lang$applyTo = (function (arglist__54460){
var args__31746__auto__ = cljs.core.seq(arglist__54460);
return frontend$components$assets$alias_directories__delegate(args__31746__auto__);
});
frontend$components$assets$alias_directories.cljs$core$IFn$_invoke$arity$variadic = frontend$components$assets$alias_directories__delegate;
return frontend$components$assets$alias_directories;
})()
;
var memo_comp__31747__auto__ = (function (){var G__54388 = comp__31745__auto__;
var G__54389 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__54388,G__54389) : io.factorhouse.hsx.core.react_memo.call(null,G__54388,G__54389));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"alias-directories");

return comp__31745__auto__;
})();
frontend.components.assets.settings_content = (function (){var render_fn__31744__auto__ = (function frontend$components$assets$settings_content(){
var alias_enabled_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("assets","alias-enabled?","assets/alias-enabled?",-40753727)], null));
var vec__54391 = logseq.shui.hooks.use_state(alias_enabled_QMARK_);
var pre_alias_enabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54391,(0),null);
var alias_enabled_changed_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(pre_alias_enabled_QMARK_,alias_enabled_QMARK_);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__assets-settings.panel-wrap","div.cp__assets-settings.panel-wrap",539016565),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.it","div.it",418423273),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-sm.font-medium.leading-5.opacity-70","label.block.text-sm.font-medium.leading-5.opacity-70",643274172),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","alias-directories","asset/alias-directories",-1497358010)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(alias_enabled_QMARK_,(function (){
return frontend.state.set_assets_alias_enabled_BANG_(cljs.core.not(alias_enabled_QMARK_));
}),true)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((alias_enabled_changed_QMARK_)?frontend.components.assets.restart_button():null)], null)], null),(cljs.core.truth_(alias_enabled_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pt-4","div.pt-4",1031324483),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.font-bold.opacity-80","h2.font-bold.opacity-80",-294884245),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","selected-directories","asset/selected-directories",1663672510)], 0))], null),frontend.components.assets.alias_directories()], null):null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$assets$settings_content__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__54394 = cljs.core.first(args__31746__auto__);
var G__54395 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__54394,G__54395) : io.factorhouse.hsx.core.obj_get.call(null,G__54394,G__54395));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"settings-content","settings-content",-1162524884,null),args__31746__auto__),frontend$components$assets$settings_content,args__31746__auto__,null);
}
};
var frontend$components$assets$settings_content = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__54461__i = 0, G__54461__a = new Array(arguments.length -  0);
while (G__54461__i < G__54461__a.length) {G__54461__a[G__54461__i] = arguments[G__54461__i + 0]; ++G__54461__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__54461__a,0,null);
} 
return frontend$components$assets$settings_content__delegate.call(this,args__31746__auto__);};
frontend$components$assets$settings_content.cljs$lang$maxFixedArity = 0;
frontend$components$assets$settings_content.cljs$lang$applyTo = (function (arglist__54462){
var args__31746__auto__ = cljs.core.seq(arglist__54462);
return frontend$components$assets$settings_content__delegate(args__31746__auto__);
});
frontend$components$assets$settings_content.cljs$core$IFn$_invoke$arity$variadic = frontend$components$assets$settings_content__delegate;
return frontend$components$assets$settings_content;
})()
;
var memo_comp__31747__auto__ = (function (){var G__54396 = comp__31745__auto__;
var G__54397 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__54396,G__54397) : io.factorhouse.hsx.core.react_memo.call(null,G__54396,G__54397));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"settings-content");

return comp__31745__auto__;
})();
frontend.components.assets.edit_external_url_form = (function (){var render_fn__31744__auto__ = (function frontend$components$assets$edit_external_url_form(asset_block,p__54398){
var map__54399 = p__54398;
var map__54399__$1 = cljs.core.__destructure_map(map__54399);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54399__$1,new cljs.core.Keyword(null,"url","url",276297046));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54399__$1,new cljs.core.Keyword(null,"title","title",636505583));
var on_saved = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54399__$1,new cljs.core.Keyword(null,"on-saved","on-saved",1116356889));
var vec__54400 = logseq.shui.hooks.use_state(false);
var saving_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54400,(0),null);
var set_saving_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54400,(1),null);
var create_QMARK_ = (asset_block == null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.pt-3.flex.flex-col.gap-2","form.pt-3.flex.flex-col.gap-2",-1376081754),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

var form_data = (new FormData(e.currentTarget));
var repo = frontend.state.get_current_repo();
var title__$1 = form_data.get("title");
var src = form_data.get("src");
var err_handle = (function (e__$1){
console.error(e__$1);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e__$1)));
});
if(create_QMARK_){
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2((function (){
(set_saving_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_saving_QMARK_.cljs$core$IFn$_invoke$arity$1(true) : set_saving_QMARK_.call(null,true));

return frontend.handler.editor.assets.db_based_save_assets_BANG_(repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title__$1,new cljs.core.Keyword(null,"src","src",-1651076051),src], null)], null));
})()
,(function (res){
var temp__5825__auto__ = (function (){var G__54403 = cljs.core.seq(res);
if((G__54403 == null)){
return null;
} else {
return cljs.core.first(G__54403);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var asset_block__$1 = temp__5825__auto__;
if(cljs.core.truth_(on_saved)){
return (on_saved.cljs$core$IFn$_invoke$arity$1 ? on_saved.cljs$core$IFn$_invoke$arity$1(asset_block__$1) : on_saved.call(null,asset_block__$1));
} else {
return null;
}
} else {
return null;
}
})),err_handle),(function (){
return (set_saving_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_saving_QMARK_.cljs$core$IFn$_invoke$arity$1(false) : set_saving_QMARK_.call(null,false));
}));
} else {
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2((function (){
(set_saving_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_saving_QMARK_.cljs$core$IFn$_invoke$arity$1(true) : set_saving_QMARK_.call(null,true));

return promesa.core.all(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$2(asset_block,title__$1),promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.util.trim_safe(src)),(function (src__$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.assets.get_file_checksum(src__$1)),(function (checksum){
return promesa.protocols._promise(frontend.handler.db_based.property.set_block_properties_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(asset_block),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.property.asset","external-url","logseq.property.asset/external-url",-1364775163),src__$1,new cljs.core.Keyword("logseq.property.asset","checksum","logseq.property.asset/checksum",-1011416979),checksum], null)));
}));
}));
}))], null));
})()
,(function (){
if(cljs.core.truth_(on_saved)){
return (on_saved.cljs$core$IFn$_invoke$arity$2 ? on_saved.cljs$core$IFn$_invoke$arity$2(asset_block,false) : on_saved.call(null,asset_block,false));
} else {
return null;
}
})),err_handle),(function (){
return (set_saving_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_saving_QMARK_.cljs$core$IFn$_invoke$arity$1(false) : set_saving_QMARK_.call(null,false));
}));
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.block.pb-2.text-sm.opacity-60","span.block.pb-2.text-sm.opacity-60",281162862),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","title-label","asset/title-label",1759175138)], 0))], null),(function (){var G__54404 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"small","small",2133478704),true,new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"name","name",1843675177),"title"], null);
return (logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1(G__54404) : logseq.shui.ui.input.call(null,G__54404));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.block.pb-2.text-sm.opacity-60","span.block.pb-2.text-sm.opacity-60",281162862),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","external-url-label","asset/external-url-label",2038255885)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-2","span.flex.items-center.gap-2",1483050042),(function (){var G__54405 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"small","small",2133478704),true,new cljs.core.Keyword(null,"default-value","default-value",232220170),url,new cljs.core.Keyword(null,"name","name",1843675177),"src"], null);
return (logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.input.cljs$core$IFn$_invoke$arity$1(G__54405) : logseq.shui.ui.input.call(null,G__54405));
})(),(cljs.core.truth_(frontend.util.electron_QMARK_())?(function (){var G__54406 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),"sm",new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"class","class",-2030961996),"h-8",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"showOpenDialog","showOpenDialog",348990905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["openFile"], null),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","select-file","asset/select-file",70347156)], 0))], null)], 0))),(function (ret){
return promesa.protocols._promise((function (){var file_path = (function (){var G__54408 = ret;
var G__54408__$1 = (((G__54408 == null))?null:cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(G__54408));
var G__54408__$2 = (((G__54408__$1 == null))?null:new cljs.core.Keyword(null,"filePaths","filePaths",2113645318).cljs$core$IFn$_invoke$arity$1(G__54408__$1));
if((G__54408__$2 == null)){
return null;
} else {
return cljs.core.first(G__54408__$2);
}
})();
if((!(clojure.string.blank_QMARK_(file_path)))){
var input = e.target.closest("form").querySelector("input[name='src']");
return (input.value = file_path);
} else {
return null;
}
})());
}));
}));
})], null);
var G__54407 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","select-from-disk","asset/select-from-disk",-1194546628)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__54406,G__54407) : logseq.shui.ui.button.call(null,G__54406,G__54407));
})():null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-end.pt-3","div.flex.justify-end.pt-3",610981845),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(((create_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","create","ui/create",-1301493452)], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","save","ui/save",1850075345)], 0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),saving_QMARK_], null)], 0))], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$assets$edit_external_url_form__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__54410 = cljs.core.first(args__31746__auto__);
var G__54411 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__54410,G__54411) : io.factorhouse.hsx.core.obj_get.call(null,G__54410,G__54411));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"edit-external-url-form","edit-external-url-form",986691522,null),args__31746__auto__),frontend$components$assets$edit_external_url_form,args__31746__auto__,null);
}
};
var frontend$components$assets$edit_external_url_form = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__54464__i = 0, G__54464__a = new Array(arguments.length -  0);
while (G__54464__i < G__54464__a.length) {G__54464__a[G__54464__i] = arguments[G__54464__i + 0]; ++G__54464__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__54464__a,0,null);
} 
return frontend$components$assets$edit_external_url_form__delegate.call(this,args__31746__auto__);};
frontend$components$assets$edit_external_url_form.cljs$lang$maxFixedArity = 0;
frontend$components$assets$edit_external_url_form.cljs$lang$applyTo = (function (arglist__54465){
var args__31746__auto__ = cljs.core.seq(arglist__54465);
return frontend$components$assets$edit_external_url_form__delegate(args__31746__auto__);
});
frontend$components$assets$edit_external_url_form.cljs$core$IFn$_invoke$arity$variadic = frontend$components$assets$edit_external_url_form__delegate;
return frontend$components$assets$edit_external_url_form;
})()
;
var memo_comp__31747__auto__ = (function (){var G__54412 = comp__31745__auto__;
var G__54413 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__54412,G__54413) : io.factorhouse.hsx.core.react_memo.call(null,G__54412,G__54413));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"edit-external-url-form");

return comp__31745__auto__;
})();
frontend.components.assets.edit_external_url_content = (function (){var render_fn__31744__auto__ = (function frontend$components$assets$edit_external_url_content(asset_block,pdf_current){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.edit-external-url-content","div.edit-external-url-content",1701050608),(function (){var on_saved_BANG_ = (function (asset_block__$1,update_QMARK_){
var temp__5825__auto___54466 = (function (){var and__5140__auto__ = pdf_current;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(asset_block__$1);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto___54466)){
var uuid_SINGLEQUOTE__54467 = temp__5825__auto___54466;
if(cljs.core.truth_(pdf_current)){
frontend.state.set_current_pdf_BANG_(null);
} else {
}

if(cljs.core.not(update_QMARK_)){
frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(uuid_SINGLEQUOTE__54467);
} else {
}
} else {
}

return (logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dialog_close_BANG_.call(null));
});
if(cljs.core.truth_(asset_block)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pb-2.-mt-2","div.pb-2.-mt-2",1177953209),(function (){var url = new cljs.core.Keyword("logseq.property.asset","external-url","logseq.property.asset/external-url",-1364775163).cljs$core$IFn$_invoke$arity$1(asset_block);
var title = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(asset_block);
return frontend.components.assets.edit_external_url_form(asset_block,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"on-saved","on-saved",1116356889),on_saved_BANG_], null));
})()], null);
} else {
var temp__5825__auto__ = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(pdf_current);
if(cljs.core.truth_(temp__5825__auto__)){
var url = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pb-2","div.pb-2",-1375757051),(function (){var G__54414 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),"warning"], null);
var G__54415 = (function (){var G__54416 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","create-local-copy-warning","asset/create-local-copy-warning",864579182)], 0));
return (logseq.shui.ui.alert_description.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.alert_description.cljs$core$IFn$_invoke$arity$1(G__54416) : logseq.shui.ui.alert_description.call(null,G__54416));
})();
return (logseq.shui.ui.alert.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.alert.cljs$core$IFn$_invoke$arity$2(G__54414,G__54415) : logseq.shui.ui.alert.call(null,G__54414,G__54415));
})(),(function (){var title = (frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1(url) : frontend.util.node_path.basename.call(null,url));
return frontend.components.assets.edit_external_url_form(asset_block,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"on-saved","on-saved",1116356889),on_saved_BANG_], null));
})()], null);
} else {
return null;
}
}
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$assets$edit_external_url_content__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__54417 = cljs.core.first(args__31746__auto__);
var G__54418 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__54417,G__54418) : io.factorhouse.hsx.core.obj_get.call(null,G__54417,G__54418));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"edit-external-url-content","edit-external-url-content",-1194352917,null),args__31746__auto__),frontend$components$assets$edit_external_url_content,args__31746__auto__,null);
}
};
var frontend$components$assets$edit_external_url_content = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__54469__i = 0, G__54469__a = new Array(arguments.length -  0);
while (G__54469__i < G__54469__a.length) {G__54469__a[G__54469__i] = arguments[G__54469__i + 0]; ++G__54469__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__54469__a,0,null);
} 
return frontend$components$assets$edit_external_url_content__delegate.call(this,args__31746__auto__);};
frontend$components$assets$edit_external_url_content.cljs$lang$maxFixedArity = 0;
frontend$components$assets$edit_external_url_content.cljs$lang$applyTo = (function (arglist__54470){
var args__31746__auto__ = cljs.core.seq(arglist__54470);
return frontend$components$assets$edit_external_url_content__delegate(args__31746__auto__);
});
frontend$components$assets$edit_external_url_content.cljs$core$IFn$_invoke$arity$variadic = frontend$components$assets$edit_external_url_content__delegate;
return frontend$components$assets$edit_external_url_content;
})()
;
var memo_comp__31747__auto__ = (function (){var G__54419 = comp__31745__auto__;
var G__54420 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__54419,G__54420) : io.factorhouse.hsx.core.react_memo.call(null,G__54419,G__54420));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"edit-external-url-content");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.assets.js.map
