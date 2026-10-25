goog.provide('frontend.handler.notification');
frontend.handler.notification.toast_id = (function frontend$handler$notification$toast_id(uid){
var G__52270 = uid;
if((G__52270 == null)){
return null;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52270));
}
});
frontend.handler.notification.status_icon = (function frontend$handler$notification$status_icon(status){
return logseq.shui.ui.tabler_icon((function (){var G__52271 = status;
var G__52271__$1 = (((G__52271 instanceof cljs.core.Keyword))?G__52271.fqn:null);
switch (G__52271__$1) {
case "success":
return "circle-check";

break;
case "warning":
return "alert-circle";

break;
case "error":
return "circle-x";

break;
default:
return "info-circle";

}
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"ui__toast-status-icon "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(status))),new cljs.core.Keyword(null,"size","size",1098693007),(20)], null));
});
frontend.handler.notification.clear_BANG_ = (function frontend$handler$notification$clear_BANG_(uid){
var G__52272 = frontend.handler.notification.toast_id(uid);
return (logseq.shui.ui.toast_dismiss_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.toast_dismiss_BANG_.cljs$core$IFn$_invoke$arity$1(G__52272) : logseq.shui.ui.toast_dismiss_BANG_.call(null,G__52272));
});
frontend.handler.notification.clear_all_BANG_ = (function frontend$handler$notification$clear_all_BANG_(){
return (logseq.shui.ui.toast_dismiss_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.toast_dismiss_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.toast_dismiss_BANG_.call(null));
});
/**
 * status: :info/:warning/:error/:success
 */
frontend.handler.notification.show_BANG_ = (function frontend$handler$notification$show_BANG_(var_args){
var G__52274 = arguments.length;
switch (G__52274) {
case 1:
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (content){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$6(content,new cljs.core.Keyword(null,"info","info",-317069002),true,null,(2000),null);
}));

(frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (content,status){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$6(content,status,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"error","error",-978969032)),null,(1500),null);
}));

(frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,status,clear_QMARK_){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$6(content,status,clear_QMARK_,null,(2000),null);
}));

(frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (content,status,clear_QMARK_,uid){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$6(content,status,clear_QMARK_,uid,(2000),null);
}));

(frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (content,status,clear_QMARK_,uid,timeout){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$6(content,status,clear_QMARK_,uid,timeout,null);
}));

(frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (content,status,clear_QMARK_,uid,timeout,close_cb){
if((status instanceof cljs.core.Keyword)){
} else {
throw (new Error((""+"Assert failed: "+"status should be a keyword"+"\n"+"(keyword? status)")));
}

var uid__$1 = (function (){var or__5142__auto__ = uid;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.util.unique_id());
}
})();
var auto_dismiss_QMARK_ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"error","error",-978969032))) && ((!(clear_QMARK_ === false))));
var G__52275_52278 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),frontend.handler.notification.toast_id(uid__$1),new cljs.core.Keyword(null,"description","description",-1428560544),content,new cljs.core.Keyword(null,"variant","variant",-424354234),status,new cljs.core.Keyword(null,"duration","duration",1444101068),((auto_dismiss_QMARK_)?(function (){var or__5142__auto__ = timeout;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (2000);
}
})():(0)),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.handler.notification.status_icon(status),new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395),(function (_id){
if(cljs.core.fn_QMARK_(close_cb)){
return (close_cb.cljs$core$IFn$_invoke$arity$1 ? close_cb.cljs$core$IFn$_invoke$arity$1(uid__$1) : close_cb.call(null,uid__$1));
} else {
return null;
}
})], null);
(logseq.shui.ui.toast_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.toast_BANG_.cljs$core$IFn$_invoke$arity$1(G__52275_52278) : logseq.shui.ui.toast_BANG_.call(null,G__52275_52278));

return uid__$1;
}));

(frontend.handler.notification.show_BANG_.cljs$lang$maxFixedArity = 6);


//# sourceMappingURL=frontend.handler.notification.js.map
