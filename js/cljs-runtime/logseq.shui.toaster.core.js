goog.provide('logseq.shui.toaster.core');
if((typeof logseq !== 'undefined') && (typeof logseq.shui !== 'undefined') && (typeof logseq.shui.toaster !== 'undefined') && (typeof logseq.shui.toaster.core !== 'undefined') && (typeof logseq.shui.toaster.core.Toaster !== 'undefined')){
} else {
logseq.shui.toaster.core.Toaster = logseq.shui.util.ui_wrap("Toaster");
}
if((typeof logseq !== 'undefined') && (typeof logseq.shui !== 'undefined') && (typeof logseq.shui.toaster !== 'undefined') && (typeof logseq.shui.toaster.core !== 'undefined') && (typeof logseq.shui.toaster.core._STAR_toast !== 'undefined')){
} else {
logseq.shui.toaster.core._STAR_toast = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof logseq !== 'undefined') && (typeof logseq.shui !== 'undefined') && (typeof logseq.shui.toaster !== 'undefined') && (typeof logseq.shui.toaster.core !== 'undefined') && (typeof logseq.shui.toaster.core._STAR_pending_toasts !== 'undefined')){
} else {
logseq.shui.toaster.core._STAR_pending_toasts = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
logseq.shui.toaster.core.gen_id = (function logseq$shui$toaster$core$gen_id(){
var fexpr__50600 = logseq.shui.util.ui_get("genToastId");
return (fexpr__50600.cljs$core$IFn$_invoke$arity$0 ? fexpr__50600.cljs$core$IFn$_invoke$arity$0() : fexpr__50600.call(null));
});
logseq.shui.toaster.core.use_toast = (function logseq$shui$toaster$core$use_toast(){
var temp__5825__auto__ = logseq.shui.util.ui_get("useToast");
if(cljs.core.truth_(temp__5825__auto__)){
var use_toast_SINGLEQUOTE_ = temp__5825__auto__;
var js_toast = (use_toast_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$0 ? use_toast_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$0() : use_toast_SINGLEQUOTE_.call(null));
var toast_fn_BANG_ = js_toast.toast;
var dismiss_BANG_ = js_toast.dismiss;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (s){
var s__$1 = cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(s);
return (toast_fn_BANG_.cljs$core$IFn$_invoke$arity$1 ? toast_fn_BANG_.cljs$core$IFn$_invoke$arity$1(s__$1) : toast_fn_BANG_.call(null,s__$1));
}),dismiss_BANG_], null);
} else {
return null;
}
});
logseq.shui.toaster.core.update_html_props = (function logseq$shui$toaster$core$update_html_props(v){
return cljs.core.update_keys(v,(function (p1__50604_SHARP_){
var G__50605 = p1__50604_SHARP_;
var G__50605__$1 = (((G__50605 instanceof cljs.core.Keyword))?G__50605.fqn:null);
switch (G__50605__$1) {
case "class":
return new cljs.core.Keyword(null,"className","className",-1983287057);

break;
case "for":
return new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720);

break;
case "on-dismiss":
return new cljs.core.Keyword(null,"onDismiss","onDismiss",1209514337);

break;
case "on-open-change":
return new cljs.core.Keyword(null,"onOpenChange","onOpenChange",-675762944);

break;
default:
return p1__50604_SHARP_;

}
}));
});
logseq.shui.toaster.core.interpret_vals = (function logseq$shui$toaster$core$interpret_vals(var_args){
var args__5882__auto__ = [];
var len__5876__auto___50675 = arguments.length;
var i__5877__auto___50676 = (0);
while(true){
if((i__5877__auto___50676 < len__5876__auto___50675)){
args__5882__auto__.push((arguments[i__5877__auto___50676]));

var G__50678 = (i__5877__auto___50676 + (1));
i__5877__auto___50676 = G__50678;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return logseq.shui.toaster.core.interpret_vals.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(logseq.shui.toaster.core.interpret_vals.cljs$core$IFn$_invoke$arity$variadic = (function (config,ks,args){
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

(logseq.shui.toaster.core.interpret_vals.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(logseq.shui.toaster.core.interpret_vals.cljs$lang$applyTo = (function (seq50606){
var G__50607 = cljs.core.first(seq50606);
var seq50606__$1 = cljs.core.next(seq50606);
var G__50608 = cljs.core.first(seq50606__$1);
var seq50606__$2 = cljs.core.next(seq50606__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50607,G__50608,seq50606__$2);
}));

logseq.shui.toaster.core.toast_BANG_ = (function logseq$shui$toaster$core$toast_BANG_(var_args){
var G__50617 = arguments.length;
switch (G__50617) {
case 1:
return logseq.shui.toaster.core.toast_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return logseq.shui.toaster.core.toast_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return logseq.shui.toaster.core.toast_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.shui.toaster.core.toast_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (content_or_config){
return logseq.shui.toaster.core.toast_BANG_.cljs$core$IFn$_invoke$arity$3(content_or_config,new cljs.core.Keyword(null,"default","default",-1987822328),null);
}));

(logseq.shui.toaster.core.toast_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (content_or_config,status){
return logseq.shui.toaster.core.toast_BANG_.cljs$core$IFn$_invoke$arity$3(content_or_config,status,null);
}));

(logseq.shui.toaster.core.toast_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content_or_config,status,opts){
var temp__5823__auto__ = cljs.core.deref(logseq.shui.toaster.core._STAR_toast);
if(cljs.core.truth_(temp__5823__auto__)){
var map__50624 = temp__5823__auto__;
var map__50624__$1 = cljs.core.__destructure_map(map__50624);
var toast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50624__$1,new cljs.core.Keyword(null,"toast","toast",68598129));
var dismiss = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50624__$1,new cljs.core.Keyword(null,"dismiss","dismiss",412569545));
var config = ((cljs.core.map_QMARK_(content_or_config))?content_or_config:cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),content_or_config], null),((cljs.core.map_QMARK_(status))?status:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),status], null))], 0)));
var config__$1 = logseq.shui.toaster.core.update_html_props(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config,opts], 0)));
var id = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.shui.toaster.core.gen_id();
}
})();
var config__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config__$1,new cljs.core.Keyword(null,"id","id",-1388402092),id);
var config__$3 = logseq.shui.toaster.core.interpret_vals.cljs$core$IFn$_invoke$arity$variadic(config__$2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"icon","icon",1679606541)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"dismiss!","dismiss!",-2130034104),(function (){
return (dismiss.cljs$core$IFn$_invoke$arity$1 ? dismiss.cljs$core$IFn$_invoke$arity$1(id) : dismiss.call(null,id));
}),new cljs.core.Keyword(null,"update!","update!",-1453508586),(function (p1__50612_SHARP_){
return logseq.shui.toaster.core.toast_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__50612_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092),id));
})], null)], 0));
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((function (){var G__50625 = cljs.core.clj__GT_js(config__$3);
return (toast.cljs$core$IFn$_invoke$arity$1 ? toast.cljs$core$IFn$_invoke$arity$1(G__50625) : toast.call(null,G__50625));
})());
} else {
var config = ((cljs.core.map_QMARK_(content_or_config))?content_or_config:cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),content_or_config], null),((cljs.core.map_QMARK_(status))?status:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),status], null))], 0)));
var config__$1 = logseq.shui.toaster.core.update_html_props(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config,opts], 0)));
var id = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.shui.toaster.core.gen_id();
}
})();
var config__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config__$1,new cljs.core.Keyword(null,"id","id",-1388402092),id);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(logseq.shui.toaster.core._STAR_pending_toasts,cljs.core.conj,config__$2);

return new cljs.core.PersistentArrayMap(null, 1, ["id",id], null);
}
}));

(logseq.shui.toaster.core.toast_BANG_.cljs$lang$maxFixedArity = 3);

logseq.shui.toaster.core.dismiss_BANG_ = (function logseq$shui$toaster$core$dismiss_BANG_(var_args){
var G__50634 = arguments.length;
switch (G__50634) {
case 0:
return logseq.shui.toaster.core.dismiss_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return logseq.shui.toaster.core.dismiss_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.shui.toaster.core.dismiss_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return logseq.shui.toaster.core.dismiss_BANG_.cljs$core$IFn$_invoke$arity$1(null);
}));

(logseq.shui.toaster.core.dismiss_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (id){
if(cljs.core.truth_(id)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(logseq.shui.toaster.core._STAR_pending_toasts,(function (pending_toasts){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50632_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__50632_SHARP_));
}),pending_toasts));
}));
} else {
cljs.core.reset_BANG_(logseq.shui.toaster.core._STAR_pending_toasts,cljs.core.PersistentVector.EMPTY);
}

var temp__5825__auto__ = cljs.core.deref(logseq.shui.toaster.core._STAR_toast);
if(cljs.core.truth_(temp__5825__auto__)){
var map__50637 = temp__5825__auto__;
var map__50637__$1 = cljs.core.__destructure_map(map__50637);
var dismiss = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50637__$1,new cljs.core.Keyword(null,"dismiss","dismiss",412569545));
return (dismiss.cljs$core$IFn$_invoke$arity$0 ? dismiss.cljs$core$IFn$_invoke$arity$0() : dismiss.call(null));
} else {
return null;
}
}));

(logseq.shui.toaster.core.dismiss_BANG_.cljs$lang$maxFixedArity = 1);

logseq.shui.toaster.core.install_toaster = (function (){var render_fn__47251__auto__ = (function logseq$shui$toaster$core$install_toaster(){
var js_toast = (function (){var fexpr__50640 = logseq.shui.util.ui_get("useToast");
return (fexpr__50640.cljs$core$IFn$_invoke$arity$0 ? fexpr__50640.cljs$core$IFn$_invoke$arity$0() : fexpr__50640.call(null));
})();
logseq.shui.hooks.use_effect_BANG_((function (){
var toast_api_50690 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toast","toast",68598129),js_toast.toast,new cljs.core.Keyword(null,"dismiss","dismiss",412569545),js_toast.dismiss,new cljs.core.Keyword(null,"update","update",1045576396),js_toast.update], null);
cljs.core.reset_BANG_(logseq.shui.toaster.core._STAR_toast,toast_api_50690);

var seq__50645_50691 = cljs.core.seq(cljs.core.deref(logseq.shui.toaster.core._STAR_pending_toasts));
var chunk__50646_50692 = null;
var count__50647_50693 = (0);
var i__50648_50694 = (0);
while(true){
if((i__50648_50694 < count__50647_50693)){
var config_50695 = chunk__50646_50692.cljs$core$IIndexed$_nth$arity$2(null,i__50648_50694);
var id_50696 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config_50695);
var config_50697__$1 = logseq.shui.toaster.core.interpret_vals.cljs$core$IFn$_invoke$arity$variadic(config_50695,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"icon","icon",1679606541)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id_50696,new cljs.core.Keyword(null,"dismiss!","dismiss!",-2130034104),((function (seq__50645_50691,chunk__50646_50692,count__50647_50693,i__50648_50694,id_50696,config_50695,toast_api_50690,js_toast){
return (function (){
var fexpr__50655 = new cljs.core.Keyword(null,"dismiss","dismiss",412569545).cljs$core$IFn$_invoke$arity$1(toast_api_50690);
return (fexpr__50655.cljs$core$IFn$_invoke$arity$1 ? fexpr__50655.cljs$core$IFn$_invoke$arity$1(id_50696) : fexpr__50655.call(null,id_50696));
});})(seq__50645_50691,chunk__50646_50692,count__50647_50693,i__50648_50694,id_50696,config_50695,toast_api_50690,js_toast))
,new cljs.core.Keyword(null,"update!","update!",-1453508586),((function (seq__50645_50691,chunk__50646_50692,count__50647_50693,i__50648_50694,id_50696,config_50695,toast_api_50690,js_toast){
return (function (p1__50638_SHARP_){
return logseq.shui.toaster.core.toast_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__50638_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092),id_50696));
});})(seq__50645_50691,chunk__50646_50692,count__50647_50693,i__50648_50694,id_50696,config_50695,toast_api_50690,js_toast))
], null)], 0));
var G__50657_50698 = cljs.core.clj__GT_js(config_50697__$1);
var fexpr__50656_50699 = new cljs.core.Keyword(null,"toast","toast",68598129).cljs$core$IFn$_invoke$arity$1(toast_api_50690);
(fexpr__50656_50699.cljs$core$IFn$_invoke$arity$1 ? fexpr__50656_50699.cljs$core$IFn$_invoke$arity$1(G__50657_50698) : fexpr__50656_50699.call(null,G__50657_50698));


var G__50700 = seq__50645_50691;
var G__50701 = chunk__50646_50692;
var G__50702 = count__50647_50693;
var G__50703 = (i__50648_50694 + (1));
seq__50645_50691 = G__50700;
chunk__50646_50692 = G__50701;
count__50647_50693 = G__50702;
i__50648_50694 = G__50703;
continue;
} else {
var temp__5825__auto___50704 = cljs.core.seq(seq__50645_50691);
if(temp__5825__auto___50704){
var seq__50645_50705__$1 = temp__5825__auto___50704;
if(cljs.core.chunked_seq_QMARK_(seq__50645_50705__$1)){
var c__5673__auto___50706 = cljs.core.chunk_first(seq__50645_50705__$1);
var G__50707 = cljs.core.chunk_rest(seq__50645_50705__$1);
var G__50708 = c__5673__auto___50706;
var G__50709 = cljs.core.count(c__5673__auto___50706);
var G__50710 = (0);
seq__50645_50691 = G__50707;
chunk__50646_50692 = G__50708;
count__50647_50693 = G__50709;
i__50648_50694 = G__50710;
continue;
} else {
var config_50711 = cljs.core.first(seq__50645_50705__$1);
var id_50712 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config_50711);
var config_50713__$1 = logseq.shui.toaster.core.interpret_vals.cljs$core$IFn$_invoke$arity$variadic(config_50711,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"icon","icon",1679606541)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id_50712,new cljs.core.Keyword(null,"dismiss!","dismiss!",-2130034104),((function (seq__50645_50691,chunk__50646_50692,count__50647_50693,i__50648_50694,id_50712,config_50711,seq__50645_50705__$1,temp__5825__auto___50704,toast_api_50690,js_toast){
return (function (){
var fexpr__50662 = new cljs.core.Keyword(null,"dismiss","dismiss",412569545).cljs$core$IFn$_invoke$arity$1(toast_api_50690);
return (fexpr__50662.cljs$core$IFn$_invoke$arity$1 ? fexpr__50662.cljs$core$IFn$_invoke$arity$1(id_50712) : fexpr__50662.call(null,id_50712));
});})(seq__50645_50691,chunk__50646_50692,count__50647_50693,i__50648_50694,id_50712,config_50711,seq__50645_50705__$1,temp__5825__auto___50704,toast_api_50690,js_toast))
,new cljs.core.Keyword(null,"update!","update!",-1453508586),((function (seq__50645_50691,chunk__50646_50692,count__50647_50693,i__50648_50694,id_50712,config_50711,seq__50645_50705__$1,temp__5825__auto___50704,toast_api_50690,js_toast){
return (function (p1__50638_SHARP_){
return logseq.shui.toaster.core.toast_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__50638_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092),id_50712));
});})(seq__50645_50691,chunk__50646_50692,count__50647_50693,i__50648_50694,id_50712,config_50711,seq__50645_50705__$1,temp__5825__auto___50704,toast_api_50690,js_toast))
], null)], 0));
var G__50664_50721 = cljs.core.clj__GT_js(config_50713__$1);
var fexpr__50663_50722 = new cljs.core.Keyword(null,"toast","toast",68598129).cljs$core$IFn$_invoke$arity$1(toast_api_50690);
(fexpr__50663_50722.cljs$core$IFn$_invoke$arity$1 ? fexpr__50663_50722.cljs$core$IFn$_invoke$arity$1(G__50664_50721) : fexpr__50663_50722.call(null,G__50664_50721));


var G__50723 = cljs.core.next(seq__50645_50705__$1);
var G__50724 = null;
var G__50725 = (0);
var G__50726 = (0);
seq__50645_50691 = G__50723;
chunk__50646_50692 = G__50724;
count__50647_50693 = G__50725;
i__50648_50694 = G__50726;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(logseq.shui.toaster.core._STAR_pending_toasts,cljs.core.PersistentVector.EMPTY);

return (function (){
return cljs.core.List.EMPTY;
});
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(logseq.shui.toaster.core.Toaster.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.toaster.core.Toaster.cljs$core$IFn$_invoke$arity$0() : logseq.shui.toaster.core.Toaster.call(null))], null);
});
var comp__47252__auto__ = (function() { 
var logseq$shui$toaster$core$install_toaster__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__50668 = cljs.core.first(args__47253__auto__);
var G__50669 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__50668,G__50669) : io.factorhouse.hsx.core.obj_get.call(null,G__50668,G__50669));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"install-toaster","install-toaster",-940043499,null),args__47253__auto__),logseq$shui$toaster$core$install_toaster,args__47253__auto__,null);
}
};
var logseq$shui$toaster$core$install_toaster = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__50727__i = 0, G__50727__a = new Array(arguments.length -  0);
while (G__50727__i < G__50727__a.length) {G__50727__a[G__50727__i] = arguments[G__50727__i + 0]; ++G__50727__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__50727__a,0,null);
} 
return logseq$shui$toaster$core$install_toaster__delegate.call(this,args__47253__auto__);};
logseq$shui$toaster$core$install_toaster.cljs$lang$maxFixedArity = 0;
logseq$shui$toaster$core$install_toaster.cljs$lang$applyTo = (function (arglist__50728){
var args__47253__auto__ = cljs.core.seq(arglist__50728);
return logseq$shui$toaster$core$install_toaster__delegate(args__47253__auto__);
});
logseq$shui$toaster$core$install_toaster.cljs$core$IFn$_invoke$arity$variadic = logseq$shui$toaster$core$install_toaster__delegate;
return logseq$shui$toaster$core$install_toaster;
})()
;
var memo_comp__47254__auto__ = (function (){var G__50670 = comp__47252__auto__;
var G__50671 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__50670,G__50671) : io.factorhouse.hsx.core.react_memo.call(null,G__50670,G__50671));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"install-toaster");

return comp__47252__auto__;
})();

//# sourceMappingURL=logseq.shui.toaster.core.js.map
