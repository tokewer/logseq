goog.provide('frontend.modules.shortcut.core');
goog.scope(function(){
  frontend.modules.shortcut.core.goog$module$goog$object = goog.module.get('goog.object');
});
if((typeof frontend !== 'undefined') && (typeof frontend.modules !== 'undefined') && (typeof frontend.modules.shortcut !== 'undefined') && (typeof frontend.modules.shortcut.core !== 'undefined') && (typeof frontend.modules.shortcut.core._STAR_installed_handlers !== 'undefined')){
} else {
frontend.modules.shortcut.core._STAR_installed_handlers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof frontend !== 'undefined') && (typeof frontend.modules !== 'undefined') && (typeof frontend.modules.shortcut !== 'undefined') && (typeof frontend.modules.shortcut.core !== 'undefined') && (typeof frontend.modules.shortcut.core._STAR_pending_inited_QMARK_ !== 'undefined')){
} else {
frontend.modules.shortcut.core._STAR_pending_inited_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof frontend !== 'undefined') && (typeof frontend.modules !== 'undefined') && (typeof frontend.modules.shortcut !== 'undefined') && (typeof frontend.modules.shortcut.core !== 'undefined') && (typeof frontend.modules.shortcut.core._STAR_pending_shortcuts !== 'undefined')){
} else {
frontend.modules.shortcut.core._STAR_pending_shortcuts = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
frontend.modules.shortcut.core.global_keys = [goog.events.KeyCodes.TAB,goog.events.KeyCodes.ENTER,goog.events.KeyCodes.BACKSPACE,goog.events.KeyCodes.DELETE,goog.events.KeyCodes.UP,goog.events.KeyCodes.LEFT,goog.events.KeyCodes.DOWN,goog.events.KeyCodes.RIGHT];
frontend.modules.shortcut.core.key_names = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.events.KeyNames);
frontend.modules.shortcut.core.consume_pending_shortcuts_BANG_ = (function frontend$modules$shortcut$core$consume_pending_shortcuts_BANG_(){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.deref(frontend.modules.shortcut.core._STAR_pending_inited_QMARK_);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.seq(cljs.core.deref(frontend.modules.shortcut.core._STAR_pending_shortcuts));
} else {
return and__5140__auto__;
}
})())){
var seq__37276_37384 = cljs.core.seq(cljs.core.deref(frontend.modules.shortcut.core._STAR_pending_shortcuts));
var chunk__37277_37385 = null;
var count__37278_37386 = (0);
var i__37279_37387 = (0);
while(true){
if((i__37279_37387 < count__37278_37386)){
var vec__37286_37388 = chunk__37277_37385.cljs$core$IIndexed$_nth$arity$2(null,i__37279_37387);
var handler_id_37389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37286_37388,(0),null);
var id_37390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37286_37388,(1),null);
var shortcut_37391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37286_37388,(2),null);
(frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id_37389,id_37390,shortcut_37391) : frontend.modules.shortcut.core.register_shortcut_BANG_.call(null,handler_id_37389,id_37390,shortcut_37391));


var G__37392 = seq__37276_37384;
var G__37393 = chunk__37277_37385;
var G__37394 = count__37278_37386;
var G__37395 = (i__37279_37387 + (1));
seq__37276_37384 = G__37392;
chunk__37277_37385 = G__37393;
count__37278_37386 = G__37394;
i__37279_37387 = G__37395;
continue;
} else {
var temp__5825__auto___37396 = cljs.core.seq(seq__37276_37384);
if(temp__5825__auto___37396){
var seq__37276_37397__$1 = temp__5825__auto___37396;
if(cljs.core.chunked_seq_QMARK_(seq__37276_37397__$1)){
var c__5673__auto___37398 = cljs.core.chunk_first(seq__37276_37397__$1);
var G__37399 = cljs.core.chunk_rest(seq__37276_37397__$1);
var G__37400 = c__5673__auto___37398;
var G__37401 = cljs.core.count(c__5673__auto___37398);
var G__37402 = (0);
seq__37276_37384 = G__37399;
chunk__37277_37385 = G__37400;
count__37278_37386 = G__37401;
i__37279_37387 = G__37402;
continue;
} else {
var vec__37289_37403 = cljs.core.first(seq__37276_37397__$1);
var handler_id_37404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37289_37403,(0),null);
var id_37405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37289_37403,(1),null);
var shortcut_37406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37289_37403,(2),null);
(frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id_37404,id_37405,shortcut_37406) : frontend.modules.shortcut.core.register_shortcut_BANG_.call(null,handler_id_37404,id_37405,shortcut_37406));


var G__37407 = cljs.core.next(seq__37276_37397__$1);
var G__37408 = null;
var G__37409 = (0);
var G__37410 = (0);
seq__37276_37384 = G__37407;
chunk__37277_37385 = G__37408;
count__37278_37386 = G__37409;
i__37279_37387 = G__37410;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(frontend.modules.shortcut.core._STAR_pending_shortcuts,cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
frontend.modules.shortcut.core.get_handler_by_id = (function frontend$modules$shortcut$core$get_handler_by_id(handler_id){
return new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37292_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__37292_SHARP_),handler_id);
}),cljs.core.vals(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed_handlers)))));
});
frontend.modules.shortcut.core.get_installed_ids_by_handler_id = (function frontend$modules$shortcut$core$get_installed_ids_by_handler_id(handler_id){
var G__37294 = cljs.core.deref(frontend.modules.shortcut.core._STAR_installed_handlers);
var G__37294__$1 = (((G__37294 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37293_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__37293_SHARP_)),handler_id);
}),G__37294));
var G__37294__$2 = (((G__37294__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,G__37294__$1));
var G__37294__$3 = (((G__37294__$2 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,G__37294__$2));
if((G__37294__$3 == null)){
return null;
} else {
return cljs.core.vec(G__37294__$3);
}
});
/**
 * Register a shortcut, notice the id need to be a namespaced keyword to avoid
 *   conflicts.
 *   Example:
 *   (register-shortcut! :shortcut.handler/misc :foo/bar {:binding "mod+shift+8"
 *   :fn (fn [_state _event]
 *   (js/alert "test shortcut"))})
 */
frontend.modules.shortcut.core.register_shortcut_BANG_ = (function frontend$modules$shortcut$core$register_shortcut_BANG_(var_args){
var G__37296 = arguments.length;
switch (G__37296) {
case 2:
return frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (handler_id,id){
return frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id,id,null);
}));

(frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (handler_id,id,shortcut_map){
if((((handler_id instanceof cljs.core.Keyword)) && (cljs.core.not(cljs.core.deref(frontend.modules.shortcut.core._STAR_pending_inited_QMARK_))))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.modules.shortcut.core._STAR_pending_shortcuts,cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [handler_id,id,shortcut_map], null));
} else {
var temp__5825__auto__ = ((((typeof handler_id === 'string') || ((handler_id instanceof cljs.core.Keyword))))?(function (){var handler_id__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(handler_id);
return frontend.modules.shortcut.core.get_handler_by_id(handler_id__$1);
})():handler_id);
if(cljs.core.truth_(temp__5825__auto__)){
var handler = temp__5825__auto__;
if(cljs.core.truth_(shortcut_map)){
frontend.modules.shortcut.config.add_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id,id,shortcut_map);
} else {
}

if(frontend.modules.shortcut.data_helper.shortcut_binding(id) === false){
return null;
} else {
var seq__37297 = cljs.core.seq(frontend.modules.shortcut.data_helper.shortcut_binding(id));
var chunk__37298 = null;
var count__37299 = (0);
var i__37300 = (0);
while(true){
if((i__37300 < count__37299)){
var k = chunk__37298.cljs$core$IIndexed$_nth$arity$2(null,i__37300);
try{if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k], null),new cljs.core.Keyword(null,"line","line",212345235),83], null)),null);
} else {
}

var undec_k_37412 = frontend.modules.shortcut.utils.undecorate_binding(k);
try{handler.unregisterShortcut(undec_k_37412);
}catch (e37306){var __37413 = e37306;
}
handler.registerShortcut(frontend.util.keyname(id),undec_k_37412);
}catch (e37305){var e_37414 = e37305;
var chord_prefix_QMARK__37415 = clojure.string.includes_QMARK_(e_37414.message,"Keyboard shortcut conflicts with existing shortcut");
if(chord_prefix_QMARK__37415){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","chord-prefix-clash","shortcut/chord-prefix-clash",-1288271721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k], null),new cljs.core.Keyword(null,"line","line",212345235),101], null)),null);
} else {
}
} else {
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k,new cljs.core.Keyword(null,"error","error",-978969032),e_37414], null),new cljs.core.Keyword(null,"line","line",212345235),104], null)),null);
} else {
}

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k,e_37414.message], null)),new cljs.core.Keyword(null,"error","error",-978969032),false);
}
}

var G__37416 = seq__37297;
var G__37417 = chunk__37298;
var G__37418 = count__37299;
var G__37419 = (i__37300 + (1));
seq__37297 = G__37416;
chunk__37298 = G__37417;
count__37299 = G__37418;
i__37300 = G__37419;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__37297);
if(temp__5825__auto____$1){
var seq__37297__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__37297__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__37297__$1);
var G__37420 = cljs.core.chunk_rest(seq__37297__$1);
var G__37421 = c__5673__auto__;
var G__37422 = cljs.core.count(c__5673__auto__);
var G__37423 = (0);
seq__37297 = G__37420;
chunk__37298 = G__37421;
count__37299 = G__37422;
i__37300 = G__37423;
continue;
} else {
var k = cljs.core.first(seq__37297__$1);
try{if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k], null),new cljs.core.Keyword(null,"line","line",212345235),83], null)),null);
} else {
}

var undec_k_37424 = frontend.modules.shortcut.utils.undecorate_binding(k);
try{handler.unregisterShortcut(undec_k_37424);
}catch (e37308){var __37425 = e37308;
}
handler.registerShortcut(frontend.util.keyname(id),undec_k_37424);
}catch (e37307){var e_37426 = e37307;
var chord_prefix_QMARK__37427 = clojure.string.includes_QMARK_(e_37426.message,"Keyboard shortcut conflicts with existing shortcut");
if(chord_prefix_QMARK__37427){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","chord-prefix-clash","shortcut/chord-prefix-clash",-1288271721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k], null),new cljs.core.Keyword(null,"line","line",212345235),101], null)),null);
} else {
}
} else {
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k,new cljs.core.Keyword(null,"error","error",-978969032),e_37426], null),new cljs.core.Keyword(null,"line","line",212345235),104], null)),null);
} else {
}

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k,e_37426.message], null)),new cljs.core.Keyword(null,"error","error",-978969032),false);
}
}

var G__37428 = cljs.core.next(seq__37297__$1);
var G__37429 = null;
var G__37430 = (0);
var G__37431 = (0);
seq__37297 = G__37428;
chunk__37298 = G__37429;
count__37299 = G__37430;
i__37300 = G__37431;
continue;
}
} else {
return null;
}
}
break;
}
}
} else {
return null;
}
}
}));

(frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Unregister a shortcut.
 *   Example:
 *   (unregister-shortcut! :shortcut.handler/misc :foo/bar)
 */
frontend.modules.shortcut.core.unregister_shortcut_BANG_ = (function frontend$modules$shortcut$core$unregister_shortcut_BANG_(handler_id,shortcut_id){
var temp__5825__auto___37432 = frontend.modules.shortcut.core.get_handler_by_id(handler_id);
if(cljs.core.truth_(temp__5825__auto___37432)){
var handler_37433 = temp__5825__auto___37432;
var temp__5825__auto___37434__$1 = frontend.modules.shortcut.data_helper.shortcut_binding(shortcut_id);
if(cljs.core.truth_(temp__5825__auto___37434__$1)){
var ks_37435 = temp__5825__auto___37434__$1;
var seq__37309_37436 = cljs.core.seq(ks_37435);
var chunk__37310_37437 = null;
var count__37311_37438 = (0);
var i__37312_37439 = (0);
while(true){
if((i__37312_37439 < count__37311_37438)){
var k_37440 = chunk__37310_37437.cljs$core$IIndexed$_nth$arity$2(null,i__37312_37439);
handler_37433.unregisterShortcut(frontend.modules.shortcut.utils.undecorate_binding(k_37440));


var G__37441 = seq__37309_37436;
var G__37442 = chunk__37310_37437;
var G__37443 = count__37311_37438;
var G__37444 = (i__37312_37439 + (1));
seq__37309_37436 = G__37441;
chunk__37310_37437 = G__37442;
count__37311_37438 = G__37443;
i__37312_37439 = G__37444;
continue;
} else {
var temp__5825__auto___37445__$2 = cljs.core.seq(seq__37309_37436);
if(temp__5825__auto___37445__$2){
var seq__37309_37446__$1 = temp__5825__auto___37445__$2;
if(cljs.core.chunked_seq_QMARK_(seq__37309_37446__$1)){
var c__5673__auto___37447 = cljs.core.chunk_first(seq__37309_37446__$1);
var G__37448 = cljs.core.chunk_rest(seq__37309_37446__$1);
var G__37449 = c__5673__auto___37447;
var G__37450 = cljs.core.count(c__5673__auto___37447);
var G__37451 = (0);
seq__37309_37436 = G__37448;
chunk__37310_37437 = G__37449;
count__37311_37438 = G__37450;
i__37312_37439 = G__37451;
continue;
} else {
var k_37452 = cljs.core.first(seq__37309_37446__$1);
handler_37433.unregisterShortcut(frontend.modules.shortcut.utils.undecorate_binding(k_37452));


var G__37453 = cljs.core.next(seq__37309_37446__$1);
var G__37454 = null;
var G__37455 = (0);
var G__37456 = (0);
seq__37309_37436 = G__37453;
chunk__37310_37437 = G__37454;
count__37311_37438 = G__37455;
i__37312_37439 = G__37456;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

if(cljs.core.truth_(shortcut_id)){
return frontend.modules.shortcut.config.remove_shortcut_BANG_(handler_id,shortcut_id);
} else {
return null;
}
});
frontend.modules.shortcut.core.uninstall_shortcut_handler_BANG_ = (function frontend$modules$shortcut$core$uninstall_shortcut_handler_BANG_(var_args){
var G__37314 = arguments.length;
switch (G__37314) {
case 1:
return frontend.modules.shortcut.core.uninstall_shortcut_handler_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.modules.shortcut.core.uninstall_shortcut_handler_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.modules.shortcut.core.uninstall_shortcut_handler_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (install_id){
return frontend.modules.shortcut.core.uninstall_shortcut_handler_BANG_.cljs$core$IFn$_invoke$arity$2(install_id,false);
}));

(frontend.modules.shortcut.core.uninstall_shortcut_handler_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (install_id,refresh_QMARK_){
var temp__5825__auto__ = new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed_handlers),install_id));
if(cljs.core.truth_(temp__5825__auto__)){
var handler = temp__5825__auto__;
handler.dispose();

if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcuts","uninstall-handler","shortcuts/uninstall-handler",-1055305832),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed_handlers),install_id)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(refresh_QMARK_)?"*":""))),new cljs.core.Keyword(null,"line","line",212345235),127], null)),null);
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.modules.shortcut.core._STAR_installed_handlers,cljs.core.dissoc,install_id);
} else {
return null;
}
}));

(frontend.modules.shortcut.core.uninstall_shortcut_handler_BANG_.cljs$lang$maxFixedArity = 2);

frontend.modules.shortcut.core.install_shortcut_handler_BANG_ = (function frontend$modules$shortcut$core$install_shortcut_handler_BANG_(handler_id,p__37316){
var map__37317 = p__37316;
var map__37317__$1 = cljs.core.__destructure_map(map__37317);
var set_global_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37317__$1,new cljs.core.Keyword(null,"set-global-keys?","set-global-keys?",-497167260),true);
var prevent_default_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37317__$1,new cljs.core.Keyword(null,"prevent-default?","prevent-default?",-1165567888),false);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37317__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var G__37318_37458 = frontend.modules.shortcut.core.get_installed_ids_by_handler_id(handler_id);
var G__37318_37459__$1 = (((G__37318_37458 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37315_SHARP_){
return frontend.modules.shortcut.core.uninstall_shortcut_handler_BANG_.cljs$core$IFn$_invoke$arity$2(p1__37315_SHARP_,true);
}),G__37318_37458));
if((G__37318_37459__$1 == null)){
} else {
cljs.core.doall.cljs$core$IFn$_invoke$arity$1(G__37318_37459__$1);
}

var shortcut_map = frontend.modules.shortcut.data_helper.shortcuts_map_by_handler_id.cljs$core$IFn$_invoke$arity$2(handler_id,state);
var handler = (new goog.ui.KeyboardShortcutHandler(window));
if(cljs.core.truth_(set_global_keys_QMARK_)){
handler.setGlobalKeys(frontend.modules.shortcut.core.global_keys);
} else {
}

handler.setAlwaysPreventDefault(prevent_default_QMARK_);

var seq__37319_37460 = cljs.core.seq(shortcut_map);
var chunk__37320_37461 = null;
var count__37321_37462 = (0);
var i__37322_37463 = (0);
while(true){
if((i__37322_37463 < count__37321_37462)){
var vec__37329_37464 = chunk__37320_37461.cljs$core$IIndexed$_nth$arity$2(null,i__37322_37463);
var id_37465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37329_37464,(0),null);
var __37466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37329_37464,(1),null);
frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$2(handler,id_37465);


var G__37467 = seq__37319_37460;
var G__37468 = chunk__37320_37461;
var G__37469 = count__37321_37462;
var G__37470 = (i__37322_37463 + (1));
seq__37319_37460 = G__37467;
chunk__37320_37461 = G__37468;
count__37321_37462 = G__37469;
i__37322_37463 = G__37470;
continue;
} else {
var temp__5825__auto___37471 = cljs.core.seq(seq__37319_37460);
if(temp__5825__auto___37471){
var seq__37319_37472__$1 = temp__5825__auto___37471;
if(cljs.core.chunked_seq_QMARK_(seq__37319_37472__$1)){
var c__5673__auto___37473 = cljs.core.chunk_first(seq__37319_37472__$1);
var G__37474 = cljs.core.chunk_rest(seq__37319_37472__$1);
var G__37475 = c__5673__auto___37473;
var G__37476 = cljs.core.count(c__5673__auto___37473);
var G__37477 = (0);
seq__37319_37460 = G__37474;
chunk__37320_37461 = G__37475;
count__37321_37462 = G__37476;
i__37322_37463 = G__37477;
continue;
} else {
var vec__37332_37478 = cljs.core.first(seq__37319_37472__$1);
var id_37479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37332_37478,(0),null);
var __37480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37332_37478,(1),null);
frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$2(handler,id_37479);


var G__37481 = cljs.core.next(seq__37319_37472__$1);
var G__37482 = null;
var G__37483 = (0);
var G__37484 = (0);
seq__37319_37460 = G__37481;
chunk__37320_37461 = G__37482;
count__37321_37462 = G__37483;
i__37322_37463 = G__37484;
continue;
}
} else {
}
}
break;
}

var f = (function (e){
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(e.identifier);
var shortcut_map__$1 = frontend.modules.shortcut.data_helper.shortcuts_map_by_handler_id.cljs$core$IFn$_invoke$arity$2(handler_id,state);
var dispatch_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shortcut_map__$1,id);
var binding = frontend.modules.shortcut.data_helper.shortcut_binding(id);
frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","latest-shortcut","editor/latest-shortcut",-2095243213),id);

if(cljs.core.truth_(binding)){
var bindings_37485 = ((cljs.core.coll_QMARK_(binding))?binding:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [binding], null));
var seq__37335_37486 = cljs.core.seq(bindings_37485);
var chunk__37336_37487 = null;
var count__37337_37488 = (0);
var i__37338_37489 = (0);
while(true){
if((i__37338_37489 < count__37337_37488)){
var b_37490 = chunk__37336_37487.cljs$core$IIndexed$_nth$arity$2(null,i__37338_37489);
if(cljs.core.truth_(b_37490)){
try{(logseq.shui.ui.shortcut_press_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.shortcut_press_BANG_.cljs$core$IFn$_invoke$arity$2(b_37490,true) : logseq.shui.ui.shortcut_press_BANG_.call(null,b_37490,true));
}catch (e37341){var e_37491__$1 = e37341;
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shortcut-press-animation-error","shortcut-press-animation-error",-1031186133),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"binding","binding",539932593),b_37490,new cljs.core.Keyword(null,"error","error",-978969032),e_37491__$1], null),new cljs.core.Keyword(null,"line","line",212345235),170], null)),null);
} else {
}
}} else {
}


var G__37492 = seq__37335_37486;
var G__37493 = chunk__37336_37487;
var G__37494 = count__37337_37488;
var G__37495 = (i__37338_37489 + (1));
seq__37335_37486 = G__37492;
chunk__37336_37487 = G__37493;
count__37337_37488 = G__37494;
i__37338_37489 = G__37495;
continue;
} else {
var temp__5825__auto___37496 = cljs.core.seq(seq__37335_37486);
if(temp__5825__auto___37496){
var seq__37335_37497__$1 = temp__5825__auto___37496;
if(cljs.core.chunked_seq_QMARK_(seq__37335_37497__$1)){
var c__5673__auto___37498 = cljs.core.chunk_first(seq__37335_37497__$1);
var G__37499 = cljs.core.chunk_rest(seq__37335_37497__$1);
var G__37500 = c__5673__auto___37498;
var G__37501 = cljs.core.count(c__5673__auto___37498);
var G__37502 = (0);
seq__37335_37486 = G__37499;
chunk__37336_37487 = G__37500;
count__37337_37488 = G__37501;
i__37338_37489 = G__37502;
continue;
} else {
var b_37503 = cljs.core.first(seq__37335_37497__$1);
if(cljs.core.truth_(b_37503)){
try{(logseq.shui.ui.shortcut_press_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.shortcut_press_BANG_.cljs$core$IFn$_invoke$arity$2(b_37503,true) : logseq.shui.ui.shortcut_press_BANG_.call(null,b_37503,true));
}catch (e37342){var e_37504__$1 = e37342;
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shortcut-press-animation-error","shortcut-press-animation-error",-1031186133),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"binding","binding",539932593),b_37503,new cljs.core.Keyword(null,"error","error",-978969032),e_37504__$1], null),new cljs.core.Keyword(null,"line","line",212345235),170], null)),null);
} else {
}
}} else {
}


var G__37505 = cljs.core.next(seq__37335_37497__$1);
var G__37506 = null;
var G__37507 = (0);
var G__37508 = (0);
seq__37335_37486 = G__37505;
chunk__37336_37487 = G__37506;
count__37337_37488 = G__37507;
i__37338_37489 = G__37508;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_((function (){var and__5140__auto__ = dispatch_fn;
if(cljs.core.truth_(and__5140__auto__)){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keymap",document.body.dataset.settingsTab)));
} else {
return and__5140__auto__;
}
})())){
return frontend.handler.plugin.hook_lifecycle_fn_BANG_.cljs$core$IFn$_invoke$arity$variadic(id,dispatch_fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
} else {
return null;
}
});
var install_id = cljs.core.random_uuid();
var data = cljs.core.PersistentArrayMap.createAsIfByAssoc([install_id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"group","group",582596132),handler_id,new cljs.core.Keyword(null,"dispatch-fn","dispatch-fn",1253347614),f,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null)]);
handler.listen(goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED,f);

if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcuts","install-handler","shortcuts/install-handler",657811157),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_id)),new cljs.core.Keyword(null,"line","line",212345235),183], null)),null);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.modules.shortcut.core._STAR_installed_handlers,cljs.core.merge,data);

return install_id;
});
frontend.modules.shortcut.core.install_shortcuts_BANG_ = (function frontend$modules$shortcut$core$install_shortcuts_BANG_(handler_ids){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37343_SHARP_){
return frontend.modules.shortcut.core.install_shortcut_handler_BANG_(p1__37343_SHARP_,cljs.core.PersistentArrayMap.EMPTY);
}),(function (){var or__5142__auto__ = cljs.core.seq(handler_ids);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741),new cljs.core.Keyword("shortcut.handler","editor-global","shortcut.handler/editor-global",-799336480),new cljs.core.Keyword("shortcut.handler","global-non-editing-only","shortcut.handler/global-non-editing-only",-2118756985),new cljs.core.Keyword("shortcut.handler","global-prevent-default","shortcut.handler/global-prevent-default",-1269226682),new cljs.core.Keyword("shortcut.handler","block-editing-only","shortcut.handler/block-editing-only",794342449)], null);
}
})()));
});
/**
 * Install a shortcut handler for the lifetime of the current component.
 * 
 *   `component-state` is optional and is kept current through a volatile so
 *   shortcut handlers can read the latest render state without reinstalling the
 *   keyboard handler on every render.
 */
frontend.modules.shortcut.core.use_shortcut_handler_BANG_ = (function frontend$modules$shortcut$core$use_shortcut_handler_BANG_(var_args){
var G__37345 = arguments.length;
switch (G__37345) {
case 1:
return frontend.modules.shortcut.core.use_shortcut_handler_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.modules.shortcut.core.use_shortcut_handler_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.modules.shortcut.core.use_shortcut_handler_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (handler_id){
return frontend.modules.shortcut.core.use_shortcut_handler_BANG_.cljs$core$IFn$_invoke$arity$2(handler_id,null);
}));

(frontend.modules.shortcut.core.use_shortcut_handler_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (handler_id,component_state){
var _STAR_state_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
if(cljs.core.truth_(logseq.shui.hooks.deref(_STAR_state_ref))){
} else {
logseq.shui.hooks.set_ref_BANG_(_STAR_state_ref,cljs.core.volatile_BANG_(component_state));
}

cljs.core.vreset_BANG_(logseq.shui.hooks.deref(_STAR_state_ref),component_state);

return logseq.shui.hooks.use_effect_BANG_((function (){
var install_id = frontend.modules.shortcut.core.install_shortcut_handler_BANG_(handler_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),logseq.shui.hooks.deref(_STAR_state_ref)], null));
return (function (){
frontend.modules.shortcut.core.uninstall_shortcut_handler_BANG_.cljs$core$IFn$_invoke$arity$1(install_id);

var G__37346 = logseq.shui.hooks.deref(_STAR_state_ref);
if((G__37346 == null)){
return null;
} else {
return cljs.core.vreset_BANG_(G__37346,null);
}
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [handler_id], null));
}));

(frontend.modules.shortcut.core.use_shortcut_handler_BANG_.cljs$lang$maxFixedArity = 2);

frontend.modules.shortcut.core.unlisten_all_BANG_ = (function frontend$modules$shortcut$core$unlisten_all_BANG_(var_args){
var G__37348 = arguments.length;
switch (G__37348) {
case 0:
return frontend.modules.shortcut.core.unlisten_all_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.modules.shortcut.core.unlisten_all_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.modules.shortcut.core.unlisten_all_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.modules.shortcut.core.unlisten_all_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.modules.shortcut.core.unlisten_all_BANG_.cljs$core$IFn$_invoke$arity$1(false);
}));

(frontend.modules.shortcut.core.unlisten_all_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (dispose_QMARK_){
return frontend.modules.shortcut.core.unlisten_all_BANG_.cljs$core$IFn$_invoke$arity$2(dispose_QMARK_,cljs.core.PersistentHashSet.EMPTY);
}));

(frontend.modules.shortcut.core.unlisten_all_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (dispose_QMARK_,excluded_groups){
var excluded_groups__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(excluded_groups),new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741));
var seq__37349 = cljs.core.seq(cljs.core.vals(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed_handlers)));
var chunk__37351 = null;
var count__37352 = (0);
var i__37353 = (0);
while(true){
if((i__37353 < count__37352)){
var map__37357 = chunk__37351.cljs$core$IIndexed$_nth$arity$2(null,i__37353);
var map__37357__$1 = cljs.core.__destructure_map(map__37357);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37357__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37357__$1,new cljs.core.Keyword(null,"group","group",582596132));
var dispatch_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37357__$1,new cljs.core.Keyword(null,"dispatch-fn","dispatch-fn",1253347614));
if((!(cljs.core.contains_QMARK_(excluded_groups__$1,group)))){
if(cljs.core.truth_(dispose_QMARK_)){
handler.dispose();
} else {
goog.events.unlisten(handler,goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED,dispatch_fn);
}


var G__37511 = seq__37349;
var G__37512 = chunk__37351;
var G__37513 = count__37352;
var G__37514 = (i__37353 + (1));
seq__37349 = G__37511;
chunk__37351 = G__37512;
count__37352 = G__37513;
i__37353 = G__37514;
continue;
} else {
var G__37515 = seq__37349;
var G__37516 = chunk__37351;
var G__37517 = count__37352;
var G__37518 = (i__37353 + (1));
seq__37349 = G__37515;
chunk__37351 = G__37516;
count__37352 = G__37517;
i__37353 = G__37518;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37349);
if(temp__5825__auto__){
var seq__37349__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37349__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__37349__$1);
var G__37519 = cljs.core.chunk_rest(seq__37349__$1);
var G__37520 = c__5673__auto__;
var G__37521 = cljs.core.count(c__5673__auto__);
var G__37522 = (0);
seq__37349 = G__37519;
chunk__37351 = G__37520;
count__37352 = G__37521;
i__37353 = G__37522;
continue;
} else {
var map__37358 = cljs.core.first(seq__37349__$1);
var map__37358__$1 = cljs.core.__destructure_map(map__37358);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37358__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37358__$1,new cljs.core.Keyword(null,"group","group",582596132));
var dispatch_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37358__$1,new cljs.core.Keyword(null,"dispatch-fn","dispatch-fn",1253347614));
if((!(cljs.core.contains_QMARK_(excluded_groups__$1,group)))){
if(cljs.core.truth_(dispose_QMARK_)){
handler.dispose();
} else {
goog.events.unlisten(handler,goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED,dispatch_fn);
}


var G__37523 = cljs.core.next(seq__37349__$1);
var G__37524 = null;
var G__37525 = (0);
var G__37526 = (0);
seq__37349 = G__37523;
chunk__37351 = G__37524;
count__37352 = G__37525;
i__37353 = G__37526;
continue;
} else {
var G__37527 = cljs.core.next(seq__37349__$1);
var G__37528 = null;
var G__37529 = (0);
var G__37530 = (0);
seq__37349 = G__37527;
chunk__37351 = G__37528;
count__37352 = G__37529;
i__37353 = G__37530;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(frontend.modules.shortcut.core.unlisten_all_BANG_.cljs$lang$maxFixedArity = 2);

frontend.modules.shortcut.core.listen_all_BANG_ = (function frontend$modules$shortcut$core$listen_all_BANG_(var_args){
var G__37360 = arguments.length;
switch (G__37360) {
case 0:
return frontend.modules.shortcut.core.listen_all_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.modules.shortcut.core.listen_all_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.modules.shortcut.core.listen_all_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.modules.shortcut.core.listen_all_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}));

(frontend.modules.shortcut.core.listen_all_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (excluded_groups){
var excluded_groups__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(excluded_groups),new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741));
var seq__37361 = cljs.core.seq(cljs.core.vals(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed_handlers)));
var chunk__37363 = null;
var count__37364 = (0);
var i__37365 = (0);
while(true){
if((i__37365 < count__37364)){
var map__37369 = chunk__37363.cljs$core$IIndexed$_nth$arity$2(null,i__37365);
var map__37369__$1 = cljs.core.__destructure_map(map__37369);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37369__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37369__$1,new cljs.core.Keyword(null,"group","group",582596132));
var dispatch_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37369__$1,new cljs.core.Keyword(null,"dispatch-fn","dispatch-fn",1253347614));
if((!(cljs.core.contains_QMARK_(excluded_groups__$1,group)))){
if(cljs.core.truth_(handler.isDisposed())){
frontend.modules.shortcut.core.install_shortcut_handler_BANG_(group,cljs.core.PersistentArrayMap.EMPTY);
} else {
goog.events.listen(handler,goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED,dispatch_fn);
}


var G__37532 = seq__37361;
var G__37533 = chunk__37363;
var G__37534 = count__37364;
var G__37535 = (i__37365 + (1));
seq__37361 = G__37532;
chunk__37363 = G__37533;
count__37364 = G__37534;
i__37365 = G__37535;
continue;
} else {
var G__37536 = seq__37361;
var G__37537 = chunk__37363;
var G__37538 = count__37364;
var G__37539 = (i__37365 + (1));
seq__37361 = G__37536;
chunk__37363 = G__37537;
count__37364 = G__37538;
i__37365 = G__37539;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37361);
if(temp__5825__auto__){
var seq__37361__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37361__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__37361__$1);
var G__37540 = cljs.core.chunk_rest(seq__37361__$1);
var G__37541 = c__5673__auto__;
var G__37542 = cljs.core.count(c__5673__auto__);
var G__37543 = (0);
seq__37361 = G__37540;
chunk__37363 = G__37541;
count__37364 = G__37542;
i__37365 = G__37543;
continue;
} else {
var map__37370 = cljs.core.first(seq__37361__$1);
var map__37370__$1 = cljs.core.__destructure_map(map__37370);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37370__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37370__$1,new cljs.core.Keyword(null,"group","group",582596132));
var dispatch_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37370__$1,new cljs.core.Keyword(null,"dispatch-fn","dispatch-fn",1253347614));
if((!(cljs.core.contains_QMARK_(excluded_groups__$1,group)))){
if(cljs.core.truth_(handler.isDisposed())){
frontend.modules.shortcut.core.install_shortcut_handler_BANG_(group,cljs.core.PersistentArrayMap.EMPTY);
} else {
goog.events.listen(handler,goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED,dispatch_fn);
}


var G__37544 = cljs.core.next(seq__37361__$1);
var G__37545 = null;
var G__37546 = (0);
var G__37547 = (0);
seq__37361 = G__37544;
chunk__37363 = G__37545;
count__37364 = G__37546;
i__37365 = G__37547;
continue;
} else {
var G__37548 = cljs.core.next(seq__37361__$1);
var G__37549 = null;
var G__37550 = (0);
var G__37551 = (0);
seq__37361 = G__37548;
chunk__37363 = G__37549;
count__37364 = G__37550;
i__37365 = G__37551;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(frontend.modules.shortcut.core.listen_all_BANG_.cljs$lang$maxFixedArity = 1);

frontend.modules.shortcut.core.use_disable_all_shortcuts_BANG_ = (function frontend$modules$shortcut$core$use_disable_all_shortcuts_BANG_(){
return logseq.shui.hooks.use_layout_effect_BANG_((function (){
frontend.modules.shortcut.core.unlisten_all_BANG_.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("shortcut.handler","auto-complete","shortcut.handler/auto-complete",1783376094),null], null), null));

return (function (){
return frontend.modules.shortcut.core.listen_all_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("shortcut.handler","auto-complete","shortcut.handler/auto-complete",1783376094),null], null), null));
});
}),cljs.core.PersistentVector.EMPTY);
});
/**
 * Always use this function to refresh shortcuts
 */
frontend.modules.shortcut.core.refresh_BANG_ = (function frontend$modules$shortcut$core$refresh_BANG_(){
if(cljs.core.truth_(new cljs.core.Keyword("ui","shortcut-handler-refreshing?","ui/shortcut-handler-refreshing?",741908481).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()))){
return null;
} else {
frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","shortcut-handler-refreshing?","ui/shortcut-handler-refreshing?",741908481),true);

var ids_37552 = cljs.core.keys(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed_handlers));
var _handler_ids_37553 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),cljs.core.vals(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed_handlers))));
var seq__37371_37554 = cljs.core.seq(ids_37552);
var chunk__37372_37555 = null;
var count__37373_37556 = (0);
var i__37374_37557 = (0);
while(true){
if((i__37374_37557 < count__37373_37556)){
var id_37558 = chunk__37372_37555.cljs$core$IIndexed$_nth$arity$2(null,i__37374_37557);
frontend.modules.shortcut.core.uninstall_shortcut_handler_BANG_.cljs$core$IFn$_invoke$arity$1(id_37558);


var G__37559 = seq__37371_37554;
var G__37560 = chunk__37372_37555;
var G__37561 = count__37373_37556;
var G__37562 = (i__37374_37557 + (1));
seq__37371_37554 = G__37559;
chunk__37372_37555 = G__37560;
count__37373_37556 = G__37561;
i__37374_37557 = G__37562;
continue;
} else {
var temp__5825__auto___37563 = cljs.core.seq(seq__37371_37554);
if(temp__5825__auto___37563){
var seq__37371_37564__$1 = temp__5825__auto___37563;
if(cljs.core.chunked_seq_QMARK_(seq__37371_37564__$1)){
var c__5673__auto___37565 = cljs.core.chunk_first(seq__37371_37564__$1);
var G__37566 = cljs.core.chunk_rest(seq__37371_37564__$1);
var G__37567 = c__5673__auto___37565;
var G__37568 = cljs.core.count(c__5673__auto___37565);
var G__37569 = (0);
seq__37371_37554 = G__37566;
chunk__37372_37555 = G__37567;
count__37373_37556 = G__37568;
i__37374_37557 = G__37569;
continue;
} else {
var id_37570 = cljs.core.first(seq__37371_37564__$1);
frontend.modules.shortcut.core.uninstall_shortcut_handler_BANG_.cljs$core$IFn$_invoke$arity$1(id_37570);


var G__37571 = cljs.core.next(seq__37371_37564__$1);
var G__37572 = null;
var G__37573 = (0);
var G__37574 = (0);
seq__37371_37554 = G__37571;
chunk__37372_37555 = G__37572;
count__37373_37556 = G__37573;
i__37374_37557 = G__37574;
continue;
}
} else {
}
}
break;
}

frontend.modules.shortcut.core.install_shortcuts_BANG_(null);

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shortcut-handler-refreshed","shortcut-handler-refreshed",1293579011)], null));

return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","shortcut-handler-refreshing?","ui/shortcut-handler-refreshing?",741908481),false);
}
});
/**
 * Maps KeyboardEvent.code values to the key-name strings used by key-names.
 * Used as fallback when Closure's KeyHandler corrupts keyCode (e.g. macOS
 * Option+key producing Unicode characters, or AltGr on Windows).
 */
frontend.modules.shortcut.core.code__GT_key_name_map = cljs.core.PersistentHashMap.fromArrays(["BracketLeft","BracketRight","PageDown","Backspace","Space","Numpad8","ArrowUp","Period","ArrowDown","Equal","NumpadEnter","Slash","Semicolon","Numpad1","Numpad0","Numpad9","Backquote","End","Tab","Numpad3","Minus","Comma","ArrowRight","Delete","Numpad2","ArrowLeft","Escape","Insert","CapsLock","NumpadAdd","NumpadSubtract","Backslash","NumpadMultiply","Numpad7","Numpad5","PageUp","Numpad6","NumpadDivide","Numpad4","Enter","Home","Quote"],["open-square-bracket","close-square-bracket","page-down","backspace","space","8","up","period","down","equals","enter","slash","semicolon","1","0","9","grave-accent","end","tab","3","dash","comma","right","delete","2","left","esc","insert","caps-lock","+","-","backslash","*","7","5","page-up","6","/","4","enter","home","single-quote"]);
/**
 * Maps a KeyboardEvent.code string to the key-name used by key-names.
 */
frontend.modules.shortcut.core.code__GT_key_name = (function frontend$modules$shortcut$core$code__GT_key_name(code){
if(typeof code === 'string'){
if(clojure.string.starts_with_QMARK_(code,"Key")){
return clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(code,(3)));
} else {
if(clojure.string.starts_with_QMARK_(code,"Digit")){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(code,(5));
} else {
if(cljs.core.truth_(cljs.core.re_matches(/F\d{1,2}/,code))){
return clojure.string.lower_case(code);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.core.code__GT_key_name_map,code);

}
}
}
} else {
return null;
}
});
frontend.modules.shortcut.core.event_code = (function frontend$modules$shortcut$core$event_code(e){
var or__5142__auto__ = frontend.modules.shortcut.core.goog$module$goog$object.getValueByKeys(e,"event_","code");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.modules.shortcut.core.goog$module$goog$object.get(e,"code");
}
});
/**
 * Resolve the key name from a KeyEvent. Tries key-names (keyCode) first,
 * then falls back to code->key-name (native KeyboardEvent.code) when a
 * modifier is held — corrects macOS Option+key corruption and AltGr on Windows.
 */
frontend.modules.shortcut.core.resolve_key_name = (function frontend$modules$shortcut$core$resolve_key_name(e){
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.core.key_names,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.keyCode)));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.truth_((function (){var or__5142__auto____$1 = e.altKey;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = e.ctrlKey;
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return e.metaKey;
}
}
})())){
var G__37375 = frontend.modules.shortcut.core.event_code(e);
if((G__37375 == null)){
return null;
} else {
return frontend.modules.shortcut.core.code__GT_key_name(G__37375);
}
} else {
return null;
}
}
});
frontend.modules.shortcut.core.name_with_meta = (function frontend$modules$shortcut$core$name_with_meta(e,resolved_name){
var ctrl = e.ctrlKey;
var alt = e.altKey;
var meta = e.metaKey;
var shift = e.shiftKey;
var G__37376 = resolved_name;
var G__37376__$1 = (cljs.core.truth_(shift)?(""+"shift+"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37376)):G__37376);
var G__37376__$2 = (cljs.core.truth_(meta)?(""+"meta+"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37376__$1)):G__37376__$1);
var G__37376__$3 = (cljs.core.truth_(alt)?(""+"alt+"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37376__$2)):G__37376__$2);
if(cljs.core.truth_(ctrl)){
return (""+"ctrl+"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37376__$3));
} else {
return G__37376__$3;
}
});
frontend.modules.shortcut.core.keyname = (function frontend$modules$shortcut$core$keyname(e){
var name = frontend.modules.shortcut.core.resolve_key_name(e);
if((name == null)){
return null;
} else {
if(cljs.core.truth_((function (){var fexpr__37377 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["shift",null,"alt",null,"meta",null,"ctrl",null,"esc",null], null), null);
return (fexpr__37377.cljs$core$IFn$_invoke$arity$1 ? fexpr__37377.cljs$core$IFn$_invoke$arity$1(name) : fexpr__37377.call(null,name));
})())){
return null;
} else {
return (""+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.modules.shortcut.core.name_with_meta(e,name)));

}
}
});
frontend.modules.shortcut.core.persist_user_shortcut_BANG_ = (function frontend$modules$shortcut$core$persist_user_shortcut_BANG_(id,binding){
var global_QMARK_ = true;
var into_shortcuts = (function frontend$modules$shortcut$core$persist_user_shortcut_BANG__$_into_shortcuts(shortcuts){
var G__37379 = (function (){var or__5142__auto__ = shortcuts;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__37379__$1 = (((binding == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37379,id):G__37379);
if(((global_QMARK_) && (((typeof binding === 'string') || (((cljs.core.vector_QMARK_(binding)) || (cljs.core.boolean_QMARK_(binding)))))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37379__$1,id,binding);
} else {
return G__37379__$1;
}
});
frontend.handler.config.set_config_BANG_(new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810),into_shortcuts(new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810).cljs$core$IFn$_invoke$arity$1(frontend.state.get_graph_config.cljs$core$IFn$_invoke$arity$0())));

if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return frontend.handler.global_config.set_global_config_kv_BANG_(new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810),into_shortcuts(new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810).cljs$core$IFn$_invoke$arity$1(frontend.state.get_global_config())));
} else {
return frontend.storage.set(new cljs.core.Keyword(null,"ls-shortcuts","ls-shortcuts",-1222790504),into_shortcuts(frontend.storage.get(new cljs.core.Keyword(null,"ls-shortcuts","ls-shortcuts",-1222790504))));
}
});
/**
 * Persist multiple shortcut binding changes atomically.
 * changes is a seq of [id binding] pairs where binding is a string, vector,
 * boolean, or nil (nil means remove/reset to default).
 * Reads each config source once, applies all changes, and writes once per source
 * to avoid read-modify-write races between sequential persist-user-shortcut! calls.
 */
frontend.modules.shortcut.core.persist_user_shortcuts_batch_BANG_ = (function frontend$modules$shortcut$core$persist_user_shortcuts_batch_BANG_(changes){
var apply_changes = (function (shortcuts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__37380){
var vec__37381 = p__37380;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37381,(0),null);
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37381,(1),null);
if((binding == null)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,id);
} else {
if(((typeof binding === 'string') || (((cljs.core.vector_QMARK_(binding)) || (cljs.core.boolean_QMARK_(binding)))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,id,binding);
} else {
return m;
}
}
}),(function (){var or__5142__auto__ = shortcuts;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),changes);
});
frontend.handler.config.set_config_BANG_(new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810),apply_changes(new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810).cljs$core$IFn$_invoke$arity$1(frontend.state.get_graph_config.cljs$core$IFn$_invoke$arity$0())));

if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return frontend.handler.global_config.set_global_config_kv_BANG_(new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810),apply_changes(new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810).cljs$core$IFn$_invoke$arity$1(frontend.state.get_global_config())));
} else {
return frontend.storage.set(new cljs.core.Keyword(null,"ls-shortcuts","ls-shortcuts",-1222790504),apply_changes(frontend.storage.get(new cljs.core.Keyword(null,"ls-shortcuts","ls-shortcuts",-1222790504))));
}
});

//# sourceMappingURL=frontend.modules.shortcut.core.js.map
