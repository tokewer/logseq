goog.provide('logseq.shui.dialog.core');
logseq.shui.dialog.core.dialog = logseq.shui.util.ui_wrap("Dialog");
logseq.shui.dialog.core.dialog_portal = logseq.shui.util.ui_wrap("DialogPortal");
logseq.shui.dialog.core.alert_dialog = logseq.shui.util.ui_wrap("AlertDialog");
logseq.shui.dialog.core.alert_dialog_portal = logseq.shui.util.ui_wrap("AlertDialogPortal");
logseq.shui.dialog.core.dialog_overlay = logseq.shui.util.ui_wrap("DialogOverlay");
logseq.shui.dialog.core.dialog_close = logseq.shui.util.ui_wrap("DialogClose");
logseq.shui.dialog.core.dialog_trigger = logseq.shui.util.ui_wrap("DialogTrigger");
logseq.shui.dialog.core.dialog_content = logseq.shui.util.ui_wrap("DialogContent");
logseq.shui.dialog.core.dialog_header = logseq.shui.util.ui_wrap("DialogHeader");
logseq.shui.dialog.core.dialog_footer = logseq.shui.util.ui_wrap("DialogFooter");
logseq.shui.dialog.core.dialog_title = logseq.shui.util.ui_wrap("DialogTitle");
logseq.shui.dialog.core.dialog_description = logseq.shui.util.ui_wrap("DialogDescription");
logseq.shui.dialog.core.alert_dialog_overlay = logseq.shui.util.ui_wrap("AlertDialogOverlay");
logseq.shui.dialog.core.alert_dialog_trigger = logseq.shui.util.ui_wrap("AlertDialogTrigger");
logseq.shui.dialog.core.alert_dialog_content = logseq.shui.util.ui_wrap("AlertDialogContent");
logseq.shui.dialog.core.alert_dialog_header = logseq.shui.util.ui_wrap("AlertDialogHeader");
logseq.shui.dialog.core.alert_dialog_title = logseq.shui.util.ui_wrap("AlertDialogTitle");
logseq.shui.dialog.core.alert_dialog_description = logseq.shui.util.ui_wrap("AlertDialogDescription");
logseq.shui.dialog.core.alert_dialog_footer = logseq.shui.util.ui_wrap("AlertDialogFooter");
logseq.shui.dialog.core.alert_dialog_action = logseq.shui.util.ui_wrap("AlertDialogAction");
logseq.shui.dialog.core.alert_dialog_cancel = logseq.shui.util.ui_wrap("AlertDialogCancel");
logseq.shui.dialog.core.interpret_vals = (function logseq$shui$dialog$core$interpret_vals(var_args){
var args__5882__auto__ = [];
var len__5876__auto___49669 = arguments.length;
var i__5877__auto___49670 = (0);
while(true){
if((i__5877__auto___49670 < len__5876__auto___49669)){
args__5882__auto__.push((arguments[i__5877__auto___49670]));

var G__49671 = (i__5877__auto___49670 + (1));
i__5877__auto___49670 = G__49671;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return logseq.shui.dialog.core.interpret_vals.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(logseq.shui.dialog.core.interpret_vals.cljs$core$IFn$_invoke$arity$variadic = (function (config,ks,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (config__$1,k){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config__$1,k);
var v__$1 = ((cljs.core.fn_QMARK_(v))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(v,args):v);
if(cljs.core.vector_QMARK_(v__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config__$1,k,io.factorhouse.hsx.core.create_element(v__$1));
} else {
return config__$1;
}
}),config,ks);
}));

(logseq.shui.dialog.core.interpret_vals.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(logseq.shui.dialog.core.interpret_vals.cljs$lang$applyTo = (function (seq49407){
var G__49408 = cljs.core.first(seq49407);
var seq49407__$1 = cljs.core.next(seq49407);
var G__49409 = cljs.core.first(seq49407__$1);
var seq49407__$2 = cljs.core.next(seq49407__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49408,G__49409,seq49407__$2);
}));

logseq.shui.dialog.core._STAR_dialogs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
logseq.shui.dialog.core._STAR_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
logseq.shui.dialog.core.gen_id = (function logseq$shui$dialog$core$gen_id(){
return cljs.core.reset_BANG_(logseq.shui.dialog.core._STAR_id,(cljs.core.deref(logseq.shui.dialog.core._STAR_id) + (1)));
});
logseq.shui.dialog.core.get_dialog = (function logseq$shui$dialog$core$get_dialog(id){
if(cljs.core.truth_(id)){
var G__49423 = medley.core.indexed.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(logseq.shui.dialog.core._STAR_dialogs));
var G__49423__$1 = (((G__49423 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49421_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__49421_SHARP_)));
}),G__49423));
if((G__49423__$1 == null)){
return null;
} else {
return cljs.core.first(G__49423__$1);
}
} else {
return null;
}
});
logseq.shui.dialog.core.open_dialogs = (function logseq$shui$dialog$core$open_dialogs(){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open?","open?",1238443125),cljs.core.deref(logseq.shui.dialog.core._STAR_dialogs));
});
logseq.shui.dialog.core.update_dialog_BANG_ = (function logseq$shui$dialog$core$update_dialog_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___49676 = arguments.length;
var i__5877__auto___49677 = (0);
while(true){
if((i__5877__auto___49677 < len__5876__auto___49676)){
args__5882__auto__.push((arguments[i__5877__auto___49677]));

var G__49678 = (i__5877__auto___49677 + (1));
i__5877__auto___49677 = G__49678;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return logseq.shui.dialog.core.update_dialog_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(logseq.shui.dialog.core.update_dialog_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (id,ks,val,p__49441){
var map__49442 = p__49441;
var map__49442__$1 = cljs.core.__destructure_map(map__49442);
var closing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49442__$1,new cljs.core.Keyword(null,"closing?","closing?",426515936));
var temp__5825__auto__ = logseq.shui.dialog.core.get_dialog(id);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__49443 = temp__5825__auto__;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49443,(0),null);
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49443,(1),null);
var ks__$1 = ((cljs.core.coll_QMARK_(ks))?ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks], null));
var config__$1 = (((val == null))?medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2(config,ks__$1):cljs.core.assoc_in(config,ks__$1,val));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(logseq.shui.dialog.core._STAR_dialogs,cljs.core.assoc,index,config__$1);

if(((new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(config__$1) === false) && (((cljs.core.fn_QMARK_(new cljs.core.Keyword(null,"on-close","on-close",-761178394).cljs$core$IFn$_invoke$arity$1(config__$1))) && (cljs.core.not(closing_QMARK_)))))){
var fexpr__49449 = new cljs.core.Keyword(null,"on-close","on-close",-761178394).cljs$core$IFn$_invoke$arity$1(config__$1);
return (fexpr__49449.cljs$core$IFn$_invoke$arity$1 ? fexpr__49449.cljs$core$IFn$_invoke$arity$1(id) : fexpr__49449.call(null,id));
} else {
return null;
}
} else {
return null;
}
}));

(logseq.shui.dialog.core.update_dialog_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(logseq.shui.dialog.core.update_dialog_BANG_.cljs$lang$applyTo = (function (seq49427){
var G__49429 = cljs.core.first(seq49427);
var seq49427__$1 = cljs.core.next(seq49427);
var G__49430 = cljs.core.first(seq49427__$1);
var seq49427__$2 = cljs.core.next(seq49427__$1);
var G__49431 = cljs.core.first(seq49427__$2);
var seq49427__$3 = cljs.core.next(seq49427__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49429,G__49430,G__49431,seq49427__$3);
}));

logseq.shui.dialog.core.upsert_dialog_BANG_ = (function logseq$shui$dialog$core$upsert_dialog_BANG_(config){
var temp__5825__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__5825__auto__)){
var _id = temp__5825__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(logseq.shui.dialog.core._STAR_dialogs,cljs.core.conj,config);
} else {
return null;
}
});
logseq.shui.dialog.core.detach_dialog_BANG_ = (function logseq$shui$dialog$core$detach_dialog_BANG_(id){
var temp__5825__auto__ = logseq.shui.dialog.core.get_dialog(id);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__49464 = temp__5825__auto__;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49464,(0),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(logseq.shui.dialog.core._STAR_dialogs,(function (p1__49462_SHARP_){
return cljs.core.vec(medley.core.remove_nth.cljs$core$IFn$_invoke$arity$2(index,p1__49462_SHARP_));
}));
} else {
return null;
}
});
logseq.shui.dialog.core.has_dialog_QMARK_ = (function logseq$shui$dialog$core$has_dialog_QMARK_(){
return cljs.core.boolean$(cljs.core.some(new cljs.core.Keyword(null,"open?","open?",1238443125),cljs.core.deref(logseq.shui.dialog.core._STAR_dialogs)));
});
logseq.shui.dialog.core.close_prevented_QMARK_ = (function logseq$shui$dialog$core$close_prevented_QMARK_(handler_result,event_details,native_event){
if(cljs.core.truth_((function (){var or__5142__auto__ = handler_result === false;
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (function (){var G__49472 = native_event;
if((G__49472 == null)){
return null;
} else {
return G__49472.defaultPrevented;
}
})();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var G__49473 = event_details;
if((G__49473 == null)){
return null;
} else {
return G__49473.isCanceled;
}
}
}
})())){
var G__49474_49685 = event_details;
if((G__49474_49685 == null)){
} else {
G__49474_49685.cancel();
}

return true;
} else {
return null;
}
});
logseq.shui.dialog.core.call_close_handler_BANG_ = (function logseq$shui$dialog$core$call_close_handler_BANG_(handler,event_details){
var native_event = (function (){var G__49478 = event_details;
if((G__49478 == null)){
return null;
} else {
return G__49478.event;
}
})();
var result = ((cljs.core.fn_QMARK_(handler))?(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(native_event) : handler.call(null,native_event)):null);
return logseq.shui.dialog.core.close_prevented_QMARK_(result,event_details,native_event);
});
/**
 * Ignore the pointerup/click that completes a pointer-down that opened the
 *   dialog. Matches popup/core.
 */
logseq.shui.dialog.core.opening_outside_press_ignore_ms = (150);
logseq.shui.dialog.core.opening_outside_press_QMARK_ = (function logseq$shui$dialog$core$opening_outside_press_QMARK_(var_args){
var G__49480 = arguments.length;
switch (G__49480) {
case 2:
return logseq.shui.dialog.core.opening_outside_press_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return logseq.shui.dialog.core.opening_outside_press_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.shui.dialog.core.opening_outside_press_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (reason,ignore_until){
return logseq.shui.dialog.core.opening_outside_press_QMARK_.cljs$core$IFn$_invoke$arity$3(reason,ignore_until,Date.now());
}));

(logseq.shui.dialog.core.opening_outside_press_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (reason,ignore_until,now){
return cljs.core.boolean$(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(reason,"outside-press")) && (((typeof ignore_until === 'number') && ((now < ignore_until))))));
}));

(logseq.shui.dialog.core.opening_outside_press_QMARK_.cljs$lang$maxFixedArity = 3);

logseq.shui.dialog.core.open_BANG_ = (function logseq$shui$dialog$core$open_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___49689 = arguments.length;
var i__5877__auto___49690 = (0);
while(true){
if((i__5877__auto___49690 < len__5876__auto___49689)){
args__5882__auto__.push((arguments[i__5877__auto___49690]));

var G__49691 = (i__5877__auto___49690 + (1));
i__5877__auto___49690 = G__49691;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return logseq.shui.dialog.core.open_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(logseq.shui.dialog.core.open_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content_or_config,config_SINGLEQUOTE_){
var config = ((cljs.core.map_QMARK_(content_or_config))?content_or_config:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),content_or_config], null));
var content = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(config);
var generated_id = logseq.shui.dialog.core.gen_id();
var config__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),generated_id,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"ignore-opening-outside-press-until","ignore-opening-outside-press-until",1860253990),(Date.now() + logseq.shui.dialog.core.opening_outside_press_ignore_ms)], null),config,cljs.core.first(config_SINGLEQUOTE_)], 0));
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config__$1);
var config__$2 = (function (){var G__49493 = config__$1;
if((new cljs.core.Keyword(null,"close","close",1835149582).cljs$core$IFn$_invoke$arity$1(config__$1) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49493,new cljs.core.Keyword(null,"close","close",1835149582),(function (){
return (logseq.shui.dialog.core.close_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.dialog.core.close_BANG_.cljs$core$IFn$_invoke$arity$1(id) : logseq.shui.dialog.core.close_BANG_.call(null,id));
}));
} else {
return G__49493;
}
})();
var config__$3 = (function (){var G__49495 = config__$2;
if(cljs.core.fn_QMARK_(content)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49495,new cljs.core.Keyword(null,"content","content",15833224),(content.cljs$core$IFn$_invoke$arity$1 ? content.cljs$core$IFn$_invoke$arity$1(config__$2) : content.call(null,config__$2)));
} else {
return G__49495;
}
})();
return logseq.shui.dialog.core.upsert_dialog_BANG_(cljs.core.update.cljs$core$IFn$_invoke$arity$3(config__$3,new cljs.core.Keyword(null,"content-props","content-props",687449284),(function (content_props){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onCloseAutoFocus","onCloseAutoFocus",-349969117),(function (p1__49486_SHARP_){
return p1__49486_SHARP_.preventDefault();
})], null),content_props], 0));
})));
}));

(logseq.shui.dialog.core.open_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(logseq.shui.dialog.core.open_BANG_.cljs$lang$applyTo = (function (seq49490){
var G__49491 = cljs.core.first(seq49490);
var seq49490__$1 = cljs.core.next(seq49490);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49491,seq49490__$1);
}));

logseq.shui.dialog.core.alert_BANG_ = (function logseq$shui$dialog$core$alert_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___49692 = arguments.length;
var i__5877__auto___49693 = (0);
while(true){
if((i__5877__auto___49693 < len__5876__auto___49692)){
args__5882__auto__.push((arguments[i__5877__auto___49693]));

var G__49694 = (i__5877__auto___49693 + (1));
i__5877__auto___49693 = G__49694;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return logseq.shui.dialog.core.alert_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(logseq.shui.dialog.core.alert_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content_or_config,config_SINGLEQUOTE_){
var deferred = promesa.core.deferred();
logseq.shui.dialog.core.open_BANG_.cljs$core$IFn$_invoke$arity$variadic(content_or_config,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alert?","alert?",-446067642),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"deferred","deferred",-1976960688),deferred], null),cljs.core.first(config_SINGLEQUOTE_)], 0))], 0));

return promesa.core.promise.cljs$core$IFn$_invoke$arity$1(deferred);
}));

(logseq.shui.dialog.core.alert_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(logseq.shui.dialog.core.alert_BANG_.cljs$lang$applyTo = (function (seq49498){
var G__49499 = cljs.core.first(seq49498);
var seq49498__$1 = cljs.core.next(seq49498);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49499,seq49498__$1);
}));

logseq.shui.dialog.core.confirm_BANG_ = (function logseq$shui$dialog$core$confirm_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___49695 = arguments.length;
var i__5877__auto___49696 = (0);
while(true){
if((i__5877__auto___49696 < len__5876__auto___49695)){
args__5882__auto__.push((arguments[i__5877__auto___49696]));

var G__49697 = (i__5877__auto___49696 + (1));
i__5877__auto___49696 = G__49697;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return logseq.shui.dialog.core.confirm_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(logseq.shui.dialog.core.confirm_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content_or_config,config_SINGLEQUOTE_){
return logseq.shui.dialog.core.alert_BANG_.cljs$core$IFn$_invoke$arity$variadic(content_or_config,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(config_SINGLEQUOTE_),new cljs.core.Keyword(null,"alert?","alert?",-446067642),new cljs.core.Keyword(null,"confirm","confirm",-2004000608))], 0));
}));

(logseq.shui.dialog.core.confirm_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(logseq.shui.dialog.core.confirm_BANG_.cljs$lang$applyTo = (function (seq49506){
var G__49507 = cljs.core.first(seq49506);
var seq49506__$1 = cljs.core.next(seq49506);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49507,seq49506__$1);
}));

logseq.shui.dialog.core.get_last_dialog_id = (function logseq$shui$dialog$core$get_last_dialog_id(){
var G__49510 = cljs.core.last(logseq.shui.dialog.core.open_dialogs());
if((G__49510 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__49510);
}
});
logseq.shui.dialog.core.get_first_dialog_id = (function logseq$shui$dialog$core$get_first_dialog_id(){
var G__49511 = cljs.core.first(logseq.shui.dialog.core.open_dialogs());
if((G__49511 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__49511);
}
});
logseq.shui.dialog.core.top_dialog_QMARK_ = (function logseq$shui$dialog$core$top_dialog_QMARK_(id){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,logseq.shui.dialog.core.get_last_dialog_id());
});
logseq.shui.dialog.core.prevent_dismiss_BANG_ = (function logseq$shui$dialog$core$prevent_dismiss_BANG_(event_details){
var G__49514_49698 = event_details;
var G__49514_49699__$1 = (((G__49514_49698 == null))?null:G__49514_49698.event);
if((G__49514_49699__$1 == null)){
} else {
G__49514_49699__$1.preventDefault();
}

var G__49515_49700 = event_details;
if((G__49515_49700 == null)){
} else {
G__49515_49700.cancel();
}

return true;
});
logseq.shui.dialog.core.prevent_dialog_dismiss_on_open_change_QMARK_ = (function logseq$shui$dialog$core$prevent_dialog_dismiss_on_open_change_QMARK_(p__49517,v,e){
var map__49519 = p__49517;
var map__49519__$1 = cljs.core.__destructure_map(map__49519);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49519__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ignore_opening_outside_press_until = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49519__$1,new cljs.core.Keyword(null,"ignore-opening-outside-press-until","ignore-opening-outside-press-until",1860253990));
var content_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49519__$1,new cljs.core.Keyword(null,"content-props","content-props",687449284));
var onEscapeKeyDown = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49519__$1,new cljs.core.Keyword(null,"onEscapeKeyDown","onEscapeKeyDown",1908839912));
var onPointerDownOutside = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49519__$1,new cljs.core.Keyword(null,"onPointerDownOutside","onPointerDownOutside",404933036));
if(v === false){
var reason = (function (){var G__49520 = e;
if((G__49520 == null)){
return null;
} else {
return G__49520.reason;
}
})();
var escape_handler = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"onEscapeKeyDown","onEscapeKeyDown",1908839912).cljs$core$IFn$_invoke$arity$1(content_props);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return onEscapeKeyDown;
}
})();
var pointer_handler = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"onPointerDownOutside","onPointerDownOutside",404933036).cljs$core$IFn$_invoke$arity$1(content_props);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return onPointerDownOutside;
}
})();
if(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["escape-key",null,"outside-press",null], null), null),reason)) && ((!(logseq.shui.dialog.core.top_dialog_QMARK_(id)))))){
return logseq.shui.dialog.core.prevent_dismiss_BANG_(e);
} else {
if(cljs.core.truth_(logseq.shui.dialog.core.opening_outside_press_QMARK_.cljs$core$IFn$_invoke$arity$2(reason,ignore_opening_outside_press_until))){
return logseq.shui.dialog.core.prevent_dismiss_BANG_(e);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(reason,"escape-key")){
return logseq.shui.dialog.core.call_close_handler_BANG_(escape_handler,e);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(reason,"outside-press")){
return logseq.shui.dialog.core.call_close_handler_BANG_(pointer_handler,e);
} else {
return false;

}
}
}
}
} else {
return null;
}
});
logseq.shui.dialog.core.on_root_open_change = (function logseq$shui$dialog$core$on_root_open_change(p__49536,v,e){
var map__49537 = p__49536;
var map__49537__$1 = cljs.core.__destructure_map(map__49537);
var config = map__49537__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49537__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var on_open_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49537__$1,new cljs.core.Keyword(null,"on-open-change","on-open-change",687272862));
var set_open_BANG_ = (function (p1__49529_SHARP_){
return logseq.shui.dialog.core.update_dialog_BANG_(id,new cljs.core.Keyword(null,"open?","open?",1238443125),p1__49529_SHARP_);
});
if(cljs.core.truth_(logseq.shui.dialog.core.prevent_dialog_dismiss_on_open_change_QMARK_(config,v,e))){
return null;
} else {
if(cljs.core.fn_QMARK_(on_open_change)){
var G__49539 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"set-open!","set-open!",503042001),set_open_BANG_], null);
return (on_open_change.cljs$core$IFn$_invoke$arity$1 ? on_open_change.cljs$core$IFn$_invoke$arity$1(G__49539) : on_open_change.call(null,G__49539));
} else {
return set_open_BANG_(v);
}
}
});
logseq.shui.dialog.core.close_BANG_ = (function logseq$shui$dialog$core$close_BANG_(var_args){
var G__49542 = arguments.length;
switch (G__49542) {
case 0:
return logseq.shui.dialog.core.close_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return logseq.shui.dialog.core.close_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.shui.dialog.core.close_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return logseq.shui.dialog.core.close_BANG_.cljs$core$IFn$_invoke$arity$1(logseq.shui.dialog.core.get_last_dialog_id());
}));

(logseq.shui.dialog.core.close_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (id){
return logseq.shui.dialog.core.update_dialog_BANG_.cljs$core$IFn$_invoke$arity$variadic(id,new cljs.core.Keyword(null,"open?","open?",1238443125),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"closing?","closing?",426515936),true], null)], 0));
}));

(logseq.shui.dialog.core.close_BANG_.cljs$lang$maxFixedArity = 1);

logseq.shui.dialog.core.close_all_BANG_ = (function logseq$shui$dialog$core$close_all_BANG_(){
var seq__49545 = cljs.core.seq(cljs.core.deref(logseq.shui.dialog.core._STAR_dialogs));
var chunk__49546 = null;
var count__49547 = (0);
var i__49548 = (0);
while(true){
if((i__49548 < count__49547)){
var map__49554 = chunk__49546.cljs$core$IIndexed$_nth$arity$2(null,i__49548);
var map__49554__$1 = cljs.core.__destructure_map(map__49554);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49554__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
logseq.shui.dialog.core.close_BANG_.cljs$core$IFn$_invoke$arity$1(id);


var G__49708 = seq__49545;
var G__49709 = chunk__49546;
var G__49710 = count__49547;
var G__49711 = (i__49548 + (1));
seq__49545 = G__49708;
chunk__49546 = G__49709;
count__49547 = G__49710;
i__49548 = G__49711;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__49545);
if(temp__5825__auto__){
var seq__49545__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49545__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__49545__$1);
var G__49712 = cljs.core.chunk_rest(seq__49545__$1);
var G__49713 = c__5673__auto__;
var G__49714 = cljs.core.count(c__5673__auto__);
var G__49715 = (0);
seq__49545 = G__49712;
chunk__49546 = G__49713;
count__49547 = G__49714;
i__49548 = G__49715;
continue;
} else {
var map__49557 = cljs.core.first(seq__49545__$1);
var map__49557__$1 = cljs.core.__destructure_map(map__49557);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49557__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
logseq.shui.dialog.core.close_BANG_.cljs$core$IFn$_invoke$arity$1(id);


var G__49716 = cljs.core.next(seq__49545__$1);
var G__49717 = null;
var G__49718 = (0);
var G__49719 = (0);
seq__49545 = G__49716;
chunk__49546 = G__49717;
count__49547 = G__49718;
i__49548 = G__49719;
continue;
}
} else {
return null;
}
}
break;
}
});
logseq.shui.dialog.core.dialog_inner = (function (){var render_fn__47251__auto__ = (function logseq$shui$dialog$core$dialog_inner(config){
var map__49560 = config;
var map__49560__$1 = cljs.core.__destructure_map(map__49560);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49560__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var align = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49560__$1,new cljs.core.Keyword(null,"align","align",1964212802));
var content_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49560__$1,new cljs.core.Keyword(null,"content-props","content-props",687449284));
var close_btn_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49560__$1,new cljs.core.Keyword(null,"close-btn?","close-btn?",336318726));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49560__$1,new cljs.core.Keyword(null,"content","content",15833224));
var root_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49560__$1,new cljs.core.Keyword(null,"root-props","root-props",-1015460595));
var footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49560__$1,new cljs.core.Keyword(null,"footer","footer",1606445390));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49560__$1,new cljs.core.Keyword(null,"title","title",636505583));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49560__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49560__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var auto_width_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49560__$1,new cljs.core.Keyword(null,"auto-width?","auto-width?",93515862));
var props = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.Keyword(null,"auto-width?","auto-width?",93515862),new cljs.core.Keyword(null,"close-btn?","close-btn?",336318726),new cljs.core.Keyword(null,"close","close",1835149582),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"on-open-change","on-open-change",687272862),new cljs.core.Keyword(null,"open?","open?",1238443125),new cljs.core.Keyword(null,"root-props","root-props",-1015460595),new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.Keyword(null,"onEscapeKeyDown","onEscapeKeyDown",1908839912),new cljs.core.Keyword(null,"onPointerDownOutside","onPointerDownOutside",404933036),new cljs.core.Keyword(null,"ignore-opening-outside-press-until","ignore-opening-outside-press-until",1860253990)], 0));
var props__$1 = cljs.core.assoc_in(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overlay-props","overlay-props",-608958470),new cljs.core.Keyword(null,"data-align","data-align",-673070527)], null),cljs.core.name((function (){var or__5142__auto__ = align;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"center","center",-748944368);
}
})()));
logseq.shui.hooks.use_effect_BANG_((function (){
if(open_QMARK_ === false){
return logseq.shui.dialog.core.detach_dialog_BANG_(id);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [open_QMARK_], null));

var G__49567 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([root_props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"dialog-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"on-open-change","on-open-change",687272862),(function (v,e){
return logseq.shui.dialog.core.on_root_open_change(config,v,e);
})], null)], 0));
var G__49568 = (function (){var onPointerDownOutside = new cljs.core.Keyword(null,"onPointerDownOutside","onPointerDownOutside",404933036).cljs$core$IFn$_invoke$arity$1(content_props);
var onEscapeKeyDown = new cljs.core.Keyword(null,"onEscapeKeyDown","onEscapeKeyDown",1908839912).cljs$core$IFn$_invoke$arity$1(content_props);
var handle_key_escape_BANG_ = (function (e){
if(logseq.shui.dialog.core.top_dialog_QMARK_(id)){
if(cljs.core.fn_QMARK_(onEscapeKeyDown)){
return (onEscapeKeyDown.cljs$core$IFn$_invoke$arity$1 ? onEscapeKeyDown.cljs$core$IFn$_invoke$arity$1(e) : onEscapeKeyDown.call(null,e));
} else {
e.preventDefault();

return logseq.shui.dialog.core.close_BANG_.cljs$core$IFn$_invoke$arity$1(id);
}
} else {
return e.preventDefault();
}
});
var handle_pointer_down_outside_BANG_ = (function (e){
if(logseq.shui.dialog.core.top_dialog_QMARK_(id)){
if(cljs.core.fn_QMARK_(onPointerDownOutside)){
return (onPointerDownOutside.cljs$core$IFn$_invoke$arity$1 ? onPointerDownOutside.cljs$core$IFn$_invoke$arity$1(e) : onPointerDownOutside.call(null,e));
} else {
return null;
}
} else {
return e.preventDefault();
}
});
var content_props__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(content_props,new cljs.core.Keyword(null,"onEscapeKeyDown","onEscapeKeyDown",1908839912),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"onPointerDownOutside","onPointerDownOutside",404933036)], 0)),new cljs.core.Keyword(null,"onEscapeKeyDown","onEscapeKeyDown",1908839912),handle_key_escape_BANG_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"onPointerDownOutside","onPointerDownOutside",404933036),handle_pointer_down_outside_BANG_], 0));
var G__49572 = (function (){var G__49577 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props__$1,content_props__$1], 0));
var G__49577__$1 = (cljs.core.truth_(auto_width_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49577,new cljs.core.Keyword(null,"data-auto-width","data-auto-width",-1812760474),true):G__49577);
if(close_btn_QMARK_ === false){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49577__$1,new cljs.core.Keyword(null,"data-close-btn","data-close-btn",-312668419),false);
} else {
return G__49577__$1;
}
})();
var G__49573 = (function (){var G__49581 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(((title == null))?"hidden":null)], null);
var G__49582 = title;
return (logseq.shui.dialog.core.dialog_title.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.dialog.core.dialog_title.cljs$core$IFn$_invoke$arity$2(G__49581,G__49582) : logseq.shui.dialog.core.dialog_title.call(null,G__49581,G__49582));
})();
var G__49574 = (cljs.core.truth_(description)?(logseq.shui.dialog.core.dialog_description.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.dialog.core.dialog_description.cljs$core$IFn$_invoke$arity$1(description) : logseq.shui.dialog.core.dialog_description.call(null,description)):null);
var G__49575 = (cljs.core.truth_(content)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui__dialog-main-content","div.ui__dialog-main-content",-140235567),content], null):null);
var G__49576 = (cljs.core.truth_(footer)?(logseq.shui.dialog.core.dialog_footer.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.dialog.core.dialog_footer.cljs$core$IFn$_invoke$arity$1(footer) : logseq.shui.dialog.core.dialog_footer.call(null,footer)):null);
return (logseq.shui.dialog.core.dialog_content.cljs$core$IFn$_invoke$arity$5 ? logseq.shui.dialog.core.dialog_content.cljs$core$IFn$_invoke$arity$5(G__49572,G__49573,G__49574,G__49575,G__49576) : logseq.shui.dialog.core.dialog_content.call(null,G__49572,G__49573,G__49574,G__49575,G__49576));
})();
return (logseq.shui.dialog.core.dialog.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.dialog.core.dialog.cljs$core$IFn$_invoke$arity$2(G__49567,G__49568) : logseq.shui.dialog.core.dialog.call(null,G__49567,G__49568));
});
var comp__47252__auto__ = (function() { 
var logseq$shui$dialog$core$dialog_inner__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__49587 = cljs.core.first(args__47253__auto__);
var G__49588 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__49587,G__49588) : io.factorhouse.hsx.core.obj_get.call(null,G__49587,G__49588));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"dialog-inner","dialog-inner",-1212613737,null),args__47253__auto__),logseq$shui$dialog$core$dialog_inner,args__47253__auto__,null);
}
};
var logseq$shui$dialog$core$dialog_inner = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__49722__i = 0, G__49722__a = new Array(arguments.length -  0);
while (G__49722__i < G__49722__a.length) {G__49722__a[G__49722__i] = arguments[G__49722__i + 0]; ++G__49722__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__49722__a,0,null);
} 
return logseq$shui$dialog$core$dialog_inner__delegate.call(this,args__47253__auto__);};
logseq$shui$dialog$core$dialog_inner.cljs$lang$maxFixedArity = 0;
logseq$shui$dialog$core$dialog_inner.cljs$lang$applyTo = (function (arglist__49723){
var args__47253__auto__ = cljs.core.seq(arglist__49723);
return logseq$shui$dialog$core$dialog_inner__delegate(args__47253__auto__);
});
logseq$shui$dialog$core$dialog_inner.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$dialog$core$dialog_inner__delegate;
return logseq$shui$dialog$core$dialog_inner;
})()
;
var memo_comp__47254__auto__ = (function (){var G__49591 = comp__47252__auto__;
var G__49592 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__49591,G__49592) : io.factorhouse.hsx.core.react_memo.call(null,G__49591,G__49592));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"dialog-inner");

return comp__47252__auto__;
})();
logseq.shui.dialog.core.alert_inner = (function (){var render_fn__47251__auto__ = (function logseq$shui$dialog$core$alert_inner(config){
var map__49597 = config;
var map__49597__$1 = cljs.core.__destructure_map(map__49597);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49597__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var content_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49597__$1,new cljs.core.Keyword(null,"content-props","content-props",687449284));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49597__$1,new cljs.core.Keyword(null,"content","content",15833224));
var ok_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49597__$1,new cljs.core.Keyword(null,"ok-label","ok-label",808114315));
var root_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49597__$1,new cljs.core.Keyword(null,"root-props","root-props",-1015460595));
var footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49597__$1,new cljs.core.Keyword(null,"footer","footer",1606445390));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49597__$1,new cljs.core.Keyword(null,"title","title",636505583));
var deferred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49597__$1,new cljs.core.Keyword(null,"deferred","deferred",-1976960688));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49597__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49597__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var props = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.Keyword(null,"deferred","deferred",-1976960688),new cljs.core.Keyword(null,"open?","open?",1238443125),new cljs.core.Keyword(null,"alert?","alert?",-446067642),new cljs.core.Keyword(null,"ok-label","ok-label",808114315),new cljs.core.Keyword(null,"close","close",1835149582),new cljs.core.Keyword(null,"on-close","on-close",-761178394),new cljs.core.Keyword(null,"root-props","root-props",-1015460595),new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.Keyword(null,"outside-cancel?","outside-cancel?",-1972964985),new cljs.core.Keyword(null,"cancel-label","cancel-label",-1093310551),new cljs.core.Keyword(null,"data-reminder","data-reminder",1296338874),new cljs.core.Keyword(null,"data-reminder-label","data-reminder-label",149396844)], 0));
var ok_label__$1 = (function (){var or__5142__auto__ = ok_label;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "OK";
}
})();
logseq.shui.hooks.use_effect_BANG_((function (){
if(open_QMARK_ === false){
return logseq.shui.dialog.core.detach_dialog_BANG_(id);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [open_QMARK_], null));

var G__49601 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([root_props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"alert-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"on-open-change","on-open-change",687272862),(function (v,e){
var reason = (function (){var G__49603 = e;
if((G__49603 == null)){
return null;
} else {
return G__49603.reason;
}
})();
if(((v === false) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(reason,"escape-key")) && ((!(logseq.shui.dialog.core.top_dialog_QMARK_(id)))))))){
return logseq.shui.dialog.core.prevent_dismiss_BANG_(e);
} else {
return logseq.shui.dialog.core.update_dialog_BANG_(id,new cljs.core.Keyword(null,"open?","open?",1238443125),v);
}
})], null)], 0));
var G__49602 = (function (){var G__49604 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,content_props], 0));
var G__49605 = (cljs.core.truth_((function (){var or__5142__auto__ = title;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return description;
}
})())?(function (){var G__49608 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ui__alert-dialog-header"], null);
var G__49609 = (cljs.core.truth_(title)?(logseq.shui.dialog.core.alert_dialog_title.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.dialog.core.alert_dialog_title.cljs$core$IFn$_invoke$arity$1(title) : logseq.shui.dialog.core.alert_dialog_title.call(null,title)):null);
var G__49610 = (cljs.core.truth_(description)?(logseq.shui.dialog.core.alert_dialog_description.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.dialog.core.alert_dialog_description.cljs$core$IFn$_invoke$arity$1(description) : logseq.shui.dialog.core.alert_dialog_description.call(null,description)):null);
return (logseq.shui.dialog.core.alert_dialog_header.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.dialog.core.alert_dialog_header.cljs$core$IFn$_invoke$arity$3(G__49608,G__49609,G__49610) : logseq.shui.dialog.core.alert_dialog_header.call(null,G__49608,G__49609,G__49610));
})():null);
var G__49606 = (cljs.core.truth_(content)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui__alert-dialog-main-content","div.ui__alert-dialog-main-content",306893478),content], null):null);
var G__49607 = (function (){var G__49611 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ui__alert-dialog-footer"], null);
var G__49612 = (cljs.core.truth_(footer)?footer:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),logseq.shui.base.core.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"ok",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
logseq.shui.dialog.core.close_BANG_.cljs$core$IFn$_invoke$arity$0();

return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(deferred,true);
}),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065)], null),ok_label__$1], 0))], null));
return (logseq.shui.dialog.core.alert_dialog_footer.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.dialog.core.alert_dialog_footer.cljs$core$IFn$_invoke$arity$2(G__49611,G__49612) : logseq.shui.dialog.core.alert_dialog_footer.call(null,G__49611,G__49612));
})();
return (logseq.shui.dialog.core.alert_dialog_content.cljs$core$IFn$_invoke$arity$4 ? logseq.shui.dialog.core.alert_dialog_content.cljs$core$IFn$_invoke$arity$4(G__49604,G__49605,G__49606,G__49607) : logseq.shui.dialog.core.alert_dialog_content.call(null,G__49604,G__49605,G__49606,G__49607));
})();
return (logseq.shui.dialog.core.alert_dialog.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.dialog.core.alert_dialog.cljs$core$IFn$_invoke$arity$2(G__49601,G__49602) : logseq.shui.dialog.core.alert_dialog.call(null,G__49601,G__49602));
});
var comp__47252__auto__ = (function() { 
var logseq$shui$dialog$core$alert_inner__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__49613 = cljs.core.first(args__47253__auto__);
var G__49614 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__49613,G__49614) : io.factorhouse.hsx.core.obj_get.call(null,G__49613,G__49614));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"alert-inner","alert-inner",-1180584862,null),args__47253__auto__),logseq$shui$dialog$core$alert_inner,args__47253__auto__,null);
}
};
var logseq$shui$dialog$core$alert_inner = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__49731__i = 0, G__49731__a = new Array(arguments.length -  0);
while (G__49731__i < G__49731__a.length) {G__49731__a[G__49731__i] = arguments[G__49731__i + 0]; ++G__49731__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__49731__a,0,null);
} 
return logseq$shui$dialog$core$alert_inner__delegate.call(this,args__47253__auto__);};
logseq$shui$dialog$core$alert_inner.cljs$lang$maxFixedArity = 0;
logseq$shui$dialog$core$alert_inner.cljs$lang$applyTo = (function (arglist__49732){
var args__47253__auto__ = cljs.core.seq(arglist__49732);
return logseq$shui$dialog$core$alert_inner__delegate(args__47253__auto__);
});
logseq$shui$dialog$core$alert_inner.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$dialog$core$alert_inner__delegate;
return logseq$shui$dialog$core$alert_inner;
})()
;
var memo_comp__47254__auto__ = (function (){var G__49616 = comp__47252__auto__;
var G__49617 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__49616,G__49617) : io.factorhouse.hsx.core.react_memo.call(null,G__49616,G__49617));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"alert-inner");

return comp__47252__auto__;
})();
logseq.shui.dialog.core.confirm_inner = (function (){var render_fn__47251__auto__ = (function logseq$shui$dialog$core$confirm_inner(config){
var map__49624 = config;
var map__49624__$1 = cljs.core.__destructure_map(map__49624);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49624__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var deferred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49624__$1,new cljs.core.Keyword(null,"deferred","deferred",-1976960688));
var outside_cancel_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49624__$1,new cljs.core.Keyword(null,"outside-cancel?","outside-cancel?",-1972964985));
var data_reminder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49624__$1,new cljs.core.Keyword(null,"data-reminder","data-reminder",1296338874));
var data_reminder_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49624__$1,new cljs.core.Keyword(null,"data-reminder-label","data-reminder-label",149396844));
var cancel_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49624__$1,new cljs.core.Keyword(null,"cancel-label","cancel-label",-1093310551));
var ok_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49624__$1,new cljs.core.Keyword(null,"ok-label","ok-label",808114315));
var reminder_QMARK_ = cljs.core.boolean$((function (){var and__5140__auto__ = id;
if(cljs.core.truth_(and__5140__auto__)){
return data_reminder;
} else {
return and__5140__auto__;
}
})());
var vec__49625 = logseq.shui.hooks.use_state((!(reminder_QMARK_)));
var ready_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49625,(0),null);
var set_ready_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49625,(1),null);
var _STAR_ok_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var _STAR_reminder_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var cancel_label__$1 = (function (){var or__5142__auto__ = cancel_label;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Cancel";
}
})();
var ok_label__$1 = (function (){var or__5142__auto__ = ok_label;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "OK";
}
})();
var footer = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.pt-1","span.flex.items-center.pt-1",-1975159724),(cljs.core.truth_((function (){var and__5140__auto__ = id;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = data_reminder;
if(cljs.core.truth_(and__5140__auto____$1)){
return data_reminder_label;
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.flex.items-center.gap-1.text-sm","label.flex.items-center.gap-1.text-sm",-1091634099),(function (){var G__49628 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_reminder_ref], null);
return (logseq.shui.form.core.checkbox.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.form.core.checkbox.cljs$core$IFn$_invoke$arity$1(G__49628) : logseq.shui.form.core.checkbox.call(null,G__49628));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-50","span.opacity-50",949060710),data_reminder_label], null)], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.gap-2","span.flex.gap-2",-248859702),logseq.shui.base.core.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),"cancel",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
logseq.shui.dialog.core.close_BANG_.cljs$core$IFn$_invoke$arity$0();

return promesa.core.reject_BANG_(deferred,false);
}),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065)], null),cancel_label__$1], 0)),logseq.shui.base.core.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),"ok",new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_ok_ref,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var temp__5825__auto___49737 = (function (){var and__5140__auto__ = id;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = data_reminder;
if(cljs.core.truth_(and__5140__auto____$1)){
return logseq.shui.hooks.deref(_STAR_reminder_ref);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto___49737)){
var reminder_49738 = temp__5825__auto___49737;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checked",reminder_49738.dataset.state)){
localStorage.setItem((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),Date.now());
} else {
}
} else {
}

logseq.shui.dialog.core.close_BANG_.cljs$core$IFn$_invoke$arity$0();

return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(deferred,true);
}),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065)], null),ok_label__$1], 0))], null)], null);
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(ready_QMARK_)){
var timeout = setTimeout((function (){
var G__49629 = logseq.shui.hooks.deref(_STAR_ok_ref);
if((G__49629 == null)){
return null;
} else {
return G__49629.focus();
}
}),(128));
return (function (){
return clearTimeout(timeout);
});
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ready_QMARK_], null));

logseq.shui.hooks.use_effect_BANG_((function (){
try{var temp__5823__auto__ = (function (){var and__5140__auto__ = reminder_QMARK_;
if(and__5140__auto__){
return localStorage.getItem((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var reminder_v = temp__5823__auto__;
if(((Date.now() - reminder_v) < (((1000) * (60)) * (10)))){
logseq.shui.dialog.core.detach_dialog_BANG_(id);

return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(deferred,true);
} else {
return (set_ready_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_ready_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_ready_BANG_.call(null,true));
}
} else {
return (set_ready_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_ready_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_ready_BANG_.call(null,true));
}
}catch (e49631){if((e49631 instanceof Error)){
var _e = e49631;
return (set_ready_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_ready_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_ready_BANG_.call(null,true));
} else {
throw e49631;

}
}}),cljs.core.PersistentVector.EMPTY);

if(cljs.core.truth_(ready_QMARK_)){
return logseq.shui.dialog.core.alert_inner(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"data-mode","data-mode",-1228453420),new cljs.core.Keyword(null,"confirm","confirm",-2004000608),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"overlay-props","overlay-props",-608958470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(outside_cancel_QMARK_)){
logseq.shui.dialog.core.close_BANG_.cljs$core$IFn$_invoke$arity$0();

return promesa.core.reject_BANG_(deferred,null);
} else {
return null;
}
})], null),new cljs.core.Keyword(null,"footer","footer",1606445390),footer], 0)));
} else {
return null;
}
});
var comp__47252__auto__ = (function() { 
var logseq$shui$dialog$core$confirm_inner__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__49639 = cljs.core.first(args__47253__auto__);
var G__49640 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__49639,G__49640) : io.factorhouse.hsx.core.obj_get.call(null,G__49639,G__49640));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"confirm-inner","confirm-inner",931137196,null),args__47253__auto__),logseq$shui$dialog$core$confirm_inner,args__47253__auto__,null);
}
};
var logseq$shui$dialog$core$confirm_inner = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__49743__i = 0, G__49743__a = new Array(arguments.length -  0);
while (G__49743__i < G__49743__a.length) {G__49743__a[G__49743__i] = arguments[G__49743__i + 0]; ++G__49743__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__49743__a,0,null);
} 
return logseq$shui$dialog$core$confirm_inner__delegate.call(this,args__47253__auto__);};
logseq$shui$dialog$core$confirm_inner.cljs$lang$maxFixedArity = 0;
logseq$shui$dialog$core$confirm_inner.cljs$lang$applyTo = (function (arglist__49744){
var args__47253__auto__ = cljs.core.seq(arglist__49744);
return logseq$shui$dialog$core$confirm_inner__delegate(args__47253__auto__);
});
logseq$shui$dialog$core$confirm_inner.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$dialog$core$confirm_inner__delegate;
return logseq$shui$dialog$core$confirm_inner;
})()
;
var memo_comp__47254__auto__ = (function (){var G__49641 = comp__47252__auto__;
var G__49642 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__49641,G__49642) : io.factorhouse.hsx.core.react_memo.call(null,G__49641,G__49642));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"confirm-inner");

return comp__47252__auto__;
})();
logseq.shui.dialog.core.render_dialog = (function logseq$shui$dialog$core$render_dialog(config){
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config);
var alert_QMARK_ = new cljs.core.Keyword(null,"alert?","alert?",-446067642).cljs$core$IFn$_invoke$arity$1(config);
var config__$1 = logseq.shui.dialog.core.interpret_vals.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"footer","footer",1606445390)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], 0));
var G__49648 = alert_QMARK_;
var G__49648__$1 = (((G__49648 instanceof cljs.core.Keyword))?G__49648.fqn:null);
switch (G__49648__$1) {
case "default":
return logseq.shui.dialog.core.alert_inner(config__$1);

break;
case "confirm":
return logseq.shui.dialog.core.confirm_inner(config__$1);

break;
default:
return logseq.shui.dialog.core.dialog_inner(config__$1);

}
});
logseq.shui.dialog.core.render_dialogs = (function logseq$shui$dialog$core$render_dialogs(configs){
var temp__5825__auto__ = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,configs));
if(temp__5825__auto__){
var configs__$1 = temp__5825__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(logseq.shui.dialog.core.render_dialog,configs__$1));
} else {
return null;
}
});
logseq.shui.dialog.core.install_dialogs = (function (){var render_fn__47251__auto__ = (function logseq$shui$dialog$core$install_dialogs(){
var vec__49656 = (logseq.shui.util.use_atom.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.util.use_atom.cljs$core$IFn$_invoke$arity$1(logseq.shui.dialog.core._STAR_dialogs) : logseq.shui.util.use_atom.call(null,logseq.shui.dialog.core._STAR_dialogs));
var dialogs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49656,(0),null);
var _set_dialogs_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49656,(1),null);
return logseq.shui.dialog.core.render_dialogs(dialogs);
});
var comp__47252__auto__ = (function() { 
var logseq$shui$dialog$core$install_dialogs__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__49663 = cljs.core.first(args__47253__auto__);
var G__49664 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__49663,G__49664) : io.factorhouse.hsx.core.obj_get.call(null,G__49663,G__49664));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"install-dialogs","install-dialogs",-1420011452,null),args__47253__auto__),logseq$shui$dialog$core$install_dialogs,args__47253__auto__,null);
}
};
var logseq$shui$dialog$core$install_dialogs = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__49754__i = 0, G__49754__a = new Array(arguments.length -  0);
while (G__49754__i < G__49754__a.length) {G__49754__a[G__49754__i] = arguments[G__49754__i + 0]; ++G__49754__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__49754__a,0,null);
} 
return logseq$shui$dialog$core$install_dialogs__delegate.call(this,args__47253__auto__);};
logseq$shui$dialog$core$install_dialogs.cljs$lang$maxFixedArity = 0;
logseq$shui$dialog$core$install_dialogs.cljs$lang$applyTo = (function (arglist__49755){
var args__47253__auto__ = cljs.core.seq(arglist__49755);
return logseq$shui$dialog$core$install_dialogs__delegate(args__47253__auto__);
});
logseq$shui$dialog$core$install_dialogs.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$dialog$core$install_dialogs__delegate;
return logseq$shui$dialog$core$install_dialogs;
})()
;
var memo_comp__47254__auto__ = (function (){var G__49665 = comp__47252__auto__;
var G__49666 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__49665,G__49666) : io.factorhouse.hsx.core.react_memo.call(null,G__49665,G__49666));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"install-dialogs");

return comp__47252__auto__;
})();

//# sourceMappingURL=logseq.shui.dialog.core.js.map
