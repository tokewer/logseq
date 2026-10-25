goog.provide('frontend.handler.jump');
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.jump !== 'undefined') && (typeof frontend.handler.jump._STAR_current_keys !== 'undefined')){
} else {
frontend.handler.jump._STAR_current_keys = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.jump !== 'undefined') && (typeof frontend.handler.jump._STAR_jump_data !== 'undefined')){
} else {
frontend.handler.jump._STAR_jump_data = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
frontend.handler.jump.prefix_keys = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["j","k","l"], null);
frontend.handler.jump.other_keys = new cljs.core.PersistentVector(null, 23, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","s","d","f","g","h","q","w","e","r","t","y","u","i","o","p","z","x","c","v","b","n","m"], null);
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.jump !== 'undefined') && (typeof frontend.handler.jump.full_start_keys !== 'undefined')){
} else {
frontend.handler.jump.full_start_keys = cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(frontend.handler.jump.prefix_keys,frontend.handler.jump.other_keys));
}
/**
 * Notice: at most 92 keys for now
 */
frontend.handler.jump.generate_keys = (function frontend$handler$jump$generate_keys(n){
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(frontend.handler.jump.other_keys,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (k){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67413_SHARP_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__67413_SHARP_));
}),frontend.handler.jump.other_keys);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.handler.jump.prefix_keys], 0)))));
});
frontend.handler.jump.clear_jump_hints_BANG_ = (function frontend$handler$jump$clear_jump_hints_BANG_(){
cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy.core.remove_BANG_,dommy.utils.__GT_Array(document.getElementsByClassName("jtrigger-id"))));

return cljs.core.reset_BANG_(frontend.handler.jump._STAR_current_keys,null);
});
frontend.handler.jump.exit_BANG_ = (function frontend$handler$jump$exit_BANG_(){
var temp__5825__auto___67420 = new cljs.core.Keyword(null,"key-down-handler","key-down-handler",1352306780).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.handler.jump._STAR_jump_data));
if(cljs.core.truth_(temp__5825__auto___67420)){
var event_handler_67421 = temp__5825__auto___67420;
window.removeEventListener("keydown",event_handler_67421);
} else {
}

cljs.core.reset_BANG_(frontend.handler.jump._STAR_current_keys,null);

cljs.core.reset_BANG_(frontend.handler.jump._STAR_jump_data,cljs.core.PersistentArrayMap.EMPTY);

return frontend.handler.jump.clear_jump_hints_BANG_();
});
frontend.handler.jump.get_trigger = (function frontend$handler$jump$get_trigger(triggers,key){
var idx = cljs.core.deref(frontend.handler.jump._STAR_current_keys).indexOf(key);
if((idx >= (0))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(triggers,idx);
} else {
return null;
}
});
frontend.handler.jump._LT_get_block = (function frontend$handler$jump$_LT_get_block(id_or_name){
if(cljs.core.truth_(id_or_name)){
return frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),id_or_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0));
} else {
return promesa.core.resolved(null);
}
});
frontend.handler.jump.trigger_BANG_ = (function frontend$handler$jump$trigger_BANG_(key,e){
var map__67414 = cljs.core.deref(frontend.handler.jump._STAR_jump_data);
var map__67414__$1 = cljs.core.__destructure_map(map__67414);
var triggers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67414__$1,new cljs.core.Keyword(null,"triggers","triggers",-1443678770));
var _mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67414__$1,new cljs.core.Keyword(null,"_mode","_mode",1455298843));
var trigger = frontend.handler.jump.get_trigger(triggers,clojure.string.trim(key));
if(cljs.core.truth_((function (){var or__5142__auto__ = trigger;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (((clojure.string.trim(key)).length) >= (2));
}
})())){
frontend.util.stop(e);

frontend.state.clear_selection_BANG_();

frontend.handler.jump.exit_BANG_();

if(cljs.core.truth_(trigger)){
if(dommy.core.has_class_QMARK_(trigger,"block-content")){
var block_id = (function (){var G__67415 = dommy.core.attr(trigger,"blockid");
if((G__67415 == null)){
return null;
} else {
return cljs.core.uuid(G__67415);
}
})();
var container_id = (function (){var G__67416 = dommy.core.attr(trigger,"containerid");
if((G__67416 == null)){
return null;
} else {
return frontend.util.safe_parse_int(G__67416);
}
})();
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.jump._LT_get_block(block_id)),(function (block){
return promesa.protocols._promise((cljs.core.truth_(block)?(function (){var G__67417 = block;
var G__67418 = new cljs.core.Keyword(null,"max","max",61366548);
var G__67419 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id], null);
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__67417,G__67418,G__67419) : frontend.handler.editor.edit_block_BANG_.call(null,G__67417,G__67418,G__67419));
})():null));
}));
}));
} else {
return trigger.click();
}
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nav","invalid-jump-error","nav/invalid-jump-error",318991563)], 0)),new cljs.core.Keyword(null,"error","error",-978969032),true);
}
} else {
return null;
}
});
frontend.handler.jump.jump_to = (function frontend$handler$jump$jump_to(){
if(cljs.core.empty_QMARK_(dommy.utils.__GT_Array(document.getElementsByClassName("jtrigger-id")))){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block());
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.first(frontend.state.get_selection_block_ids());
}
})()),(function (current_block_id){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = (cljs.core.truth_(current_block_id)?frontend.handler.jump._LT_get_block(current_block_id):null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.handler.jump._LT_get_block(frontend.state.get_current_page());
}
})()),(function (current_block){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = current_block_id;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block);
}
})()),(function (current_block_id__$1){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = frontend.state.get_block_collapsed.cljs$core$IFn$_invoke$arity$1(current_block_id__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(current_block);
}
})()),(function (collapsed_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = collapsed_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return current_block_id__$1;
} else {
return and__5140__auto__;
}
})())?frontend.handler.editor.expand_block_BANG_(current_block_id__$1):null)),(function (___27434__auto__){
return promesa.protocols._promise((function (){var f = (function (){
var selected_block_or_editing_block = (function (){var or__5142__auto__ = cljs.core.first(frontend.state.get_selection_blocks());
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.state.get_editor_block_container();
}
})();
var triggers = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (n){
return cljs.core.some((function (class$){
return n.closest(class$);
}),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [".view-actions",null,".ls-table-cell",null,".positioned-properties",null], null), null));
}),(cljs.core.truth_(selected_block_or_editing_block)?dommy.utils.__GT_Array(selected_block_or_editing_block.getElementsByClassName("jtrigger")):dommy.utils.__GT_Array(document.getElementsByClassName("jtrigger"))));
if(cljs.core.seq(triggers)){
cljs.core.reset_BANG_(frontend.handler.jump._STAR_jump_data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword(null,"triggers","triggers",-1443678770),triggers], null));

var keys = frontend.handler.jump.generate_keys(cljs.core.count(triggers));
var key_down_handler = (function (e){
var k = frontend.util.ekey(e);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,"Escape")){
return frontend.handler.jump.exit_BANG_();
} else {
if(((cljs.core.contains_QMARK_(frontend.handler.jump.full_start_keys,k)) && (cljs.core.seq(new cljs.core.Keyword(null,"triggers","triggers",-1443678770).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.handler.jump._STAR_jump_data)))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.handler.jump._STAR_jump_data,cljs.core.update,new cljs.core.Keyword(null,"chords","chords",234981817),(function (s){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.ekey(e)));
}));

var chords = new cljs.core.Keyword(null,"chords","chords",234981817).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.handler.jump._STAR_jump_data));
return frontend.handler.jump.trigger_BANG_(chords,e);
} else {
return null;
}
}
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.handler.jump._STAR_jump_data,cljs.core.assoc,new cljs.core.Keyword(null,"key-down-handler","key-down-handler",1352306780),key_down_handler);

cljs.core.reset_BANG_(frontend.handler.jump._STAR_current_keys,keys);

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (id,dom){
var class$ = ((dommy.core.has_class_QMARK_(dom,"ui__checkbox"))?"jtrigger-id text-sm border rounded ml-4 px-1 shadow-xs":"jtrigger-id text-sm border rounded ml-2 px-1 shadow-xs");
var view = (function (){var or__5142__auto__ = dom.closest(".jtrigger-view");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return dom;
}
})();
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(view,dommy.core.set_text_BANG_(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(dommy.core.create_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"div","div",1057191632)),new cljs.core.Keyword(null,"class","class",-2030961996),class$),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(keys,id)));
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(keys),triggers)));

return window.addEventListener("keydown",key_down_handler);
} else {
return null;
}
});
if(cljs.core.truth_(collapsed_QMARK_)){
return setTimeout(f,(100));
} else {
return f();
}
})());
}));
}));
}));
}));
}));
}));
} else {
return null;
}
});

//# sourceMappingURL=frontend.handler.jump.js.map
