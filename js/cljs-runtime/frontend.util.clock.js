goog.provide('frontend.util.clock');
/**
 * A function that returns the values for easier testing.
 * Always in the order [days, hours, minutes, seconds]
 */
frontend.util.clock.s__GT_dhms_util = (function frontend$util$clock$s__GT_dhms_util(seconds){
var days = cljs.core.quot(cljs.core.quot(seconds,(3600)),(24));
var n = cljs.core.mod(seconds,((24) * (3600)));
var hours = cljs.core.quot(n,(3600));
var n__$1 = cljs.core.mod(n,(3600));
var minutes = cljs.core.quot(n__$1,(60));
var secs = cljs.core.mod(n__$1,(60));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [days,hours,minutes,secs], null);
});
frontend.util.clock.seconds__GT_days_COLON_hours_COLON_minutes_COLON_seconds = (function frontend$util$clock$seconds__GT_days_COLON_hours_COLON_minutes_COLON_seconds(seconds){
var vec__77808 = frontend.util.clock.s__GT_dhms_util(seconds);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77808,(0),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77808,(1),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77808,(2),null);
var seconds__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77808,(3),null);
if((days > (0))){
var G__77812 = "%s%s";
var G__77813 = (((days === (0)))?"":(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(days)+"d"));
var G__77814 = (((hours === (0)))?"":(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hours)+"h"));
return (frontend.util.format.cljs$core$IFn$_invoke$arity$3 ? frontend.util.format.cljs$core$IFn$_invoke$arity$3(G__77812,G__77813,G__77814) : frontend.util.format.call(null,G__77812,G__77813,G__77814));
} else {
if((minutes > (0))){
var G__77817 = "%s%s";
var G__77818 = (((hours === (0)))?"":(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hours)+"h"));
var G__77819 = (((minutes === (0)))?"":(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(minutes)+"m"));
return (frontend.util.format.cljs$core$IFn$_invoke$arity$3 ? frontend.util.format.cljs$core$IFn$_invoke$arity$3(G__77817,G__77818,G__77819) : frontend.util.format.call(null,G__77817,G__77818,G__77819));
} else {
if((seconds__$1 > (0))){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(seconds__$1)+"s");
} else {
return "";
}

}
}
});

//# sourceMappingURL=frontend.util.clock.js.map
