goog.provide('tick.core');
goog.scope(function(){
  tick.core.goog$module$goog$object = goog.module.get('goog.object');
});
time_literals.read_write.print_time_literals_clj_BANG_();

time_literals.read_write.print_time_literals_cljs_BANG_();
tick.core.parse_int = (function tick$core$parse_int(x){
return Number(x);
});
(tick.protocols.IParseable["string"] = true);

(tick.protocols.parse["string"] = (function (s){
var pred__90030 = cljs.core.re_matches;
var expr__90031 = s;
var temp__5823__auto__ = (function (){var G__90034 = /(\d{1,2})\s*(am|pm)/;
var G__90035 = expr__90031;
return (pred__90030.cljs$core$IFn$_invoke$arity$2 ? pred__90030.cljs$core$IFn$_invoke$arity$2(G__90034,G__90035) : pred__90030.call(null,G__90034,G__90035));
})();
if(cljs.core.truth_(temp__5823__auto__)){
var p__5582__auto__ = temp__5823__auto__;
return (function (p__90036){
var vec__90037 = p__90036;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90037,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90037,(1),null);
var ap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90037,(2),null);
return cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$2((function (){var G__90045 = tick.core.parse_int(h);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("pm",ap)){
return (G__90045 + (12));
} else {
return G__90045;
}
})(),(0));
})(p__5582__auto__);
} else {
var temp__5823__auto____$1 = (function (){var G__90046 = /(\d{1,2})/;
var G__90047 = expr__90031;
return (pred__90030.cljs$core$IFn$_invoke$arity$2 ? pred__90030.cljs$core$IFn$_invoke$arity$2(G__90046,G__90047) : pred__90030.call(null,G__90046,G__90047));
})();
if(cljs.core.truth_(temp__5823__auto____$1)){
var p__5582__auto__ = temp__5823__auto____$1;
return (function (p__90048){
var vec__90049 = p__90048;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90049,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90049,(1),null);
return cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$2(tick.core.parse_int(h),(0));
})(p__5582__auto__);
} else {
var temp__5823__auto____$2 = (function (){var G__90052 = /\d{2}:\d{2}\S*/;
var G__90053 = expr__90031;
return (pred__90030.cljs$core$IFn$_invoke$arity$2 ? pred__90030.cljs$core$IFn$_invoke$arity$2(G__90052,G__90053) : pred__90030.call(null,G__90052,G__90053));
})();
if(cljs.core.truth_(temp__5823__auto____$2)){
var p__5582__auto__ = temp__5823__auto____$2;
return (function (s__$1){
return cljc.java_time.local_time.parse.cljs$core$IFn$_invoke$arity$1(s__$1);
})(p__5582__auto__);
} else {
var temp__5823__auto____$3 = (function (){var G__90054 = /(\d{1,2}):(\d{2})/;
var G__90055 = expr__90031;
return (pred__90030.cljs$core$IFn$_invoke$arity$2 ? pred__90030.cljs$core$IFn$_invoke$arity$2(G__90054,G__90055) : pred__90030.call(null,G__90054,G__90055));
})();
if(cljs.core.truth_(temp__5823__auto____$3)){
var p__5582__auto__ = temp__5823__auto____$3;
return (function (p__90060){
var vec__90061 = p__90060;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90061,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90061,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90061,(2),null);
return cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$2(tick.core.parse_int(h),tick.core.parse_int(m));
})(p__5582__auto__);
} else {
var temp__5823__auto____$4 = (function (){var G__90064 = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,9})?Z/;
var G__90065 = expr__90031;
return (pred__90030.cljs$core$IFn$_invoke$arity$2 ? pred__90030.cljs$core$IFn$_invoke$arity$2(G__90064,G__90065) : pred__90030.call(null,G__90064,G__90065));
})();
if(cljs.core.truth_(temp__5823__auto____$4)){
var p__5582__auto__ = temp__5823__auto____$4;
return (function (s__$1){
return cljc.java_time.instant.parse(s__$1);
})(p__5582__auto__);
} else {
var temp__5823__auto____$5 = (function (){var G__90066 = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,9})?[+-]\d{2}:\d{2}/;
var G__90067 = expr__90031;
return (pred__90030.cljs$core$IFn$_invoke$arity$2 ? pred__90030.cljs$core$IFn$_invoke$arity$2(G__90066,G__90067) : pred__90030.call(null,G__90066,G__90067));
})();
if(cljs.core.truth_(temp__5823__auto____$5)){
var p__5582__auto__ = temp__5823__auto____$5;
return (function (s__$1){
return cljc.java_time.offset_date_time.parse.cljs$core$IFn$_invoke$arity$1(s__$1);
})(p__5582__auto__);
} else {
var temp__5823__auto____$6 = (function (){var G__90069 = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,9})?(?:[+-]\d{2}:\d{2}|Z)\[\w+\/\w+\]/;
var G__90070 = expr__90031;
return (pred__90030.cljs$core$IFn$_invoke$arity$2 ? pred__90030.cljs$core$IFn$_invoke$arity$2(G__90069,G__90070) : pred__90030.call(null,G__90069,G__90070));
})();
if(cljs.core.truth_(temp__5823__auto____$6)){
var p__5582__auto__ = temp__5823__auto____$6;
return (function (s__$1){
return cljc.java_time.zoned_date_time.parse.cljs$core$IFn$_invoke$arity$1(s__$1);
})(p__5582__auto__);
} else {
var temp__5823__auto____$7 = (function (){var G__90071 = /\d{4}-\d{2}-\d{2}T\S*/;
var G__90072 = expr__90031;
return (pred__90030.cljs$core$IFn$_invoke$arity$2 ? pred__90030.cljs$core$IFn$_invoke$arity$2(G__90071,G__90072) : pred__90030.call(null,G__90071,G__90072));
})();
if(cljs.core.truth_(temp__5823__auto____$7)){
var p__5582__auto__ = temp__5823__auto____$7;
return (function (s__$1){
return cljc.java_time.local_date_time.parse.cljs$core$IFn$_invoke$arity$1(s__$1);
})(p__5582__auto__);
} else {
var temp__5823__auto____$8 = (function (){var G__90073 = /\d{4}-\d{2}-\d{2}/;
var G__90074 = expr__90031;
return (pred__90030.cljs$core$IFn$_invoke$arity$2 ? pred__90030.cljs$core$IFn$_invoke$arity$2(G__90073,G__90074) : pred__90030.call(null,G__90073,G__90074));
})();
if(cljs.core.truth_(temp__5823__auto____$8)){
var p__5582__auto__ = temp__5823__auto____$8;
return (function (s__$1){
return cljc.java_time.local_date.parse.cljs$core$IFn$_invoke$arity$1(s__$1);
})(p__5582__auto__);
} else {
var temp__5823__auto____$9 = (function (){var G__90077 = /\d{4}-\d{2}/;
var G__90078 = expr__90031;
return (pred__90030.cljs$core$IFn$_invoke$arity$2 ? pred__90030.cljs$core$IFn$_invoke$arity$2(G__90077,G__90078) : pred__90030.call(null,G__90077,G__90078));
})();
if(cljs.core.truth_(temp__5823__auto____$9)){
var p__5582__auto__ = temp__5823__auto____$9;
return (function (s__$1){
return cljc.java_time.year_month.parse.cljs$core$IFn$_invoke$arity$1(s__$1);
})(p__5582__auto__);
} else {
var temp__5823__auto____$10 = (function (){var G__90079 = /\d{4}/;
var G__90080 = expr__90031;
return (pred__90030.cljs$core$IFn$_invoke$arity$2 ? pred__90030.cljs$core$IFn$_invoke$arity$2(G__90079,G__90080) : pred__90030.call(null,G__90079,G__90080));
})();
if(cljs.core.truth_(temp__5823__auto____$10)){
var p__5582__auto__ = temp__5823__auto____$10;
return (function (s__$1){
return cljc.java_time.year.parse.cljs$core$IFn$_invoke$arity$1(s__$1);
})(p__5582__auto__);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unparseable time string",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),s], null));
}
}
}
}
}
}
}
}
}
}
}
}));
tick.core._STAR_clock_STAR_ = cljc.java_time.clock.system_default_zone();
/**
 * same as (t/instant)
 */
tick.core.now = (function tick$core$now(){
return cljc.java_time.instant.now.cljs$core$IFn$_invoke$arity$1(tick.core._STAR_clock_STAR_);
});
/**
 * same as (t/date)
 */
tick.core.today = (function tick$core$today(){
return cljc.java_time.local_date.now.cljs$core$IFn$_invoke$arity$1(tick.core._STAR_clock_STAR_);
});
/**
 * Constant for the 1970-01-01T00:00:00Z epoch instant
 */
tick.core.epoch = (function tick$core$epoch(){
return cljc.java_time.instant.epoch;
});
tick.core.midnight = (function tick$core$midnight(var_args){
var G__90082 = arguments.length;
switch (G__90082) {
case 0:
return tick.core.midnight.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.midnight.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.midnight.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljc.java_time.local_time.midnight;
}));

(tick.core.midnight.cljs$core$IFn$_invoke$arity$1 = (function (date){
return tick.protocols.at(date,cljc.java_time.local_time.midnight);
}));

(tick.core.midnight.cljs$lang$maxFixedArity = 1);

tick.core.noon = (function tick$core$noon(var_args){
var G__90084 = arguments.length;
switch (G__90084) {
case 0:
return tick.core.noon.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.noon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.noon.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljc.java_time.local_time.noon;
}));

(tick.core.noon.cljs$core$IFn$_invoke$arity$1 = (function (date){
return tick.protocols.at(date,cljc.java_time.local_time.noon);
}));

(tick.core.noon.cljs$lang$maxFixedArity = 1);

/**
 * en locale specific and borderline deprecated.
 *   consider writing your own regex or use a formatter. For example:
 * 
 *   (-> (t/formatter "EEE")
 *    (cljc.java-time.format.date-time-formatter/parse "Tue")
 *    (cljc.java-time.day-of-week/from))
 *   
 */
tick.core.parse_day = (function tick$core$parse_day(input){
var pred__90085 = cljs.core.re_matches;
var expr__90086 = clojure.string.lower_case(input);
if(cljs.core.truth_((function (){var G__90088 = /^(mon)(day)?$/;
var G__90089 = expr__90086;
return (pred__90085.cljs$core$IFn$_invoke$arity$2 ? pred__90085.cljs$core$IFn$_invoke$arity$2(G__90088,G__90089) : pred__90085.call(null,G__90088,G__90089));
})())){
return cljc.java_time.day_of_week.monday;
} else {
if(cljs.core.truth_((function (){var G__90090 = /^(tue)(s|sday)?$/;
var G__90091 = expr__90086;
return (pred__90085.cljs$core$IFn$_invoke$arity$2 ? pred__90085.cljs$core$IFn$_invoke$arity$2(G__90090,G__90091) : pred__90085.call(null,G__90090,G__90091));
})())){
return cljc.java_time.day_of_week.tuesday;
} else {
if(cljs.core.truth_((function (){var G__90092 = /^(wed)(s|nesday)?$/;
var G__90093 = expr__90086;
return (pred__90085.cljs$core$IFn$_invoke$arity$2 ? pred__90085.cljs$core$IFn$_invoke$arity$2(G__90092,G__90093) : pred__90085.call(null,G__90092,G__90093));
})())){
return cljc.java_time.day_of_week.wednesday;
} else {
if(cljs.core.truth_((function (){var G__90094 = /^(thur)(s|sday)?$/;
var G__90095 = expr__90086;
return (pred__90085.cljs$core$IFn$_invoke$arity$2 ? pred__90085.cljs$core$IFn$_invoke$arity$2(G__90094,G__90095) : pred__90085.call(null,G__90094,G__90095));
})())){
return cljc.java_time.day_of_week.thursday;
} else {
if(cljs.core.truth_((function (){var G__90096 = /^(fri)(day)?$/;
var G__90097 = expr__90086;
return (pred__90085.cljs$core$IFn$_invoke$arity$2 ? pred__90085.cljs$core$IFn$_invoke$arity$2(G__90096,G__90097) : pred__90085.call(null,G__90096,G__90097));
})())){
return cljc.java_time.day_of_week.friday;
} else {
if(cljs.core.truth_((function (){var G__90098 = /^(sat)(urday)?$/;
var G__90099 = expr__90086;
return (pred__90085.cljs$core$IFn$_invoke$arity$2 ? pred__90085.cljs$core$IFn$_invoke$arity$2(G__90098,G__90099) : pred__90085.call(null,G__90098,G__90099));
})())){
return cljc.java_time.day_of_week.saturday;
} else {
if(cljs.core.truth_((function (){var G__90100 = /^(sun)(day)?$/;
var G__90101 = expr__90086;
return (pred__90085.cljs$core$IFn$_invoke$arity$2 ? pred__90085.cljs$core$IFn$_invoke$arity$2(G__90100,G__90101) : pred__90085.call(null,G__90100,G__90101));
})())){
return cljc.java_time.day_of_week.sunday;
} else {
return null;
}
}
}
}
}
}
}
});
/**
 * en locale specific and borderline deprecated. Consider writing your
 * own regex or use a formatter. For example:
 * 
 * (-> (t/formatter "MMM")
 *     (cljc.java-time.format.date-time-formatter/parse "Jan")
 *     (cljc.java-time.month/from))
 * 
 */
tick.core.parse_month = (function tick$core$parse_month(input){
var pred__90102 = cljs.core.re_matches;
var expr__90103 = clojure.string.lower_case(input);
if(cljs.core.truth_((function (){var G__90105 = /^(jan)(uary)?$/;
var G__90106 = expr__90103;
return (pred__90102.cljs$core$IFn$_invoke$arity$2 ? pred__90102.cljs$core$IFn$_invoke$arity$2(G__90105,G__90106) : pred__90102.call(null,G__90105,G__90106));
})())){
return cljc.java_time.month.january;
} else {
if(cljs.core.truth_((function (){var G__90107 = /^(feb)(ruary)?$/;
var G__90108 = expr__90103;
return (pred__90102.cljs$core$IFn$_invoke$arity$2 ? pred__90102.cljs$core$IFn$_invoke$arity$2(G__90107,G__90108) : pred__90102.call(null,G__90107,G__90108));
})())){
return cljc.java_time.month.february;
} else {
if(cljs.core.truth_((function (){var G__90109 = /^(mar)(ch)?$/;
var G__90110 = expr__90103;
return (pred__90102.cljs$core$IFn$_invoke$arity$2 ? pred__90102.cljs$core$IFn$_invoke$arity$2(G__90109,G__90110) : pred__90102.call(null,G__90109,G__90110));
})())){
return cljc.java_time.month.march;
} else {
if(cljs.core.truth_((function (){var G__90111 = /^(apr)(il)?$/;
var G__90112 = expr__90103;
return (pred__90102.cljs$core$IFn$_invoke$arity$2 ? pred__90102.cljs$core$IFn$_invoke$arity$2(G__90111,G__90112) : pred__90102.call(null,G__90111,G__90112));
})())){
return cljc.java_time.month.april;
} else {
if(cljs.core.truth_((function (){var G__90113 = /^may$/;
var G__90114 = expr__90103;
return (pred__90102.cljs$core$IFn$_invoke$arity$2 ? pred__90102.cljs$core$IFn$_invoke$arity$2(G__90113,G__90114) : pred__90102.call(null,G__90113,G__90114));
})())){
return cljc.java_time.month.may;
} else {
if(cljs.core.truth_((function (){var G__90115 = /^(jun)(e)?$/;
var G__90116 = expr__90103;
return (pred__90102.cljs$core$IFn$_invoke$arity$2 ? pred__90102.cljs$core$IFn$_invoke$arity$2(G__90115,G__90116) : pred__90102.call(null,G__90115,G__90116));
})())){
return cljc.java_time.month.june;
} else {
if(cljs.core.truth_((function (){var G__90117 = /^(jul)(y)?$/;
var G__90118 = expr__90103;
return (pred__90102.cljs$core$IFn$_invoke$arity$2 ? pred__90102.cljs$core$IFn$_invoke$arity$2(G__90117,G__90118) : pred__90102.call(null,G__90117,G__90118));
})())){
return cljc.java_time.month.july;
} else {
if(cljs.core.truth_((function (){var G__90119 = /^(aug)(ust)?$/;
var G__90120 = expr__90103;
return (pred__90102.cljs$core$IFn$_invoke$arity$2 ? pred__90102.cljs$core$IFn$_invoke$arity$2(G__90119,G__90120) : pred__90102.call(null,G__90119,G__90120));
})())){
return cljc.java_time.month.august;
} else {
if(cljs.core.truth_((function (){var G__90121 = /^(sep)(tember)?$/;
var G__90122 = expr__90103;
return (pred__90102.cljs$core$IFn$_invoke$arity$2 ? pred__90102.cljs$core$IFn$_invoke$arity$2(G__90121,G__90122) : pred__90102.call(null,G__90121,G__90122));
})())){
return cljc.java_time.month.september;
} else {
if(cljs.core.truth_((function (){var G__90123 = /^(oct)(ober)?$/;
var G__90124 = expr__90103;
return (pred__90102.cljs$core$IFn$_invoke$arity$2 ? pred__90102.cljs$core$IFn$_invoke$arity$2(G__90123,G__90124) : pred__90102.call(null,G__90123,G__90124));
})())){
return cljc.java_time.month.october;
} else {
if(cljs.core.truth_((function (){var G__90125 = /^(nov)(ember)?$/;
var G__90126 = expr__90103;
return (pred__90102.cljs$core$IFn$_invoke$arity$2 ? pred__90102.cljs$core$IFn$_invoke$arity$2(G__90125,G__90126) : pred__90102.call(null,G__90125,G__90126));
})())){
return cljc.java_time.month.november;
} else {
if(cljs.core.truth_((function (){var G__90127 = /^(dec)(ember)?$/;
var G__90128 = expr__90103;
return (pred__90102.cljs$core$IFn$_invoke$arity$2 ? pred__90102.cljs$core$IFn$_invoke$arity$2(G__90127,G__90128) : pred__90102.call(null,G__90127,G__90128));
})())){
return cljc.java_time.month.december;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
});
tick.core.new_time = (function tick$core$new_time(var_args){
var G__90130 = arguments.length;
switch (G__90130) {
case 0:
return tick.core.new_time.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return tick.core.new_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tick.core.new_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return tick.core.new_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.new_time.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.protocols.time(tick.core.now());
}));

(tick.core.new_time.cljs$core$IFn$_invoke$arity$2 = (function (hour,minute){
return cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$2(hour,minute);
}));

(tick.core.new_time.cljs$core$IFn$_invoke$arity$3 = (function (hour,minute,second){
return cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$3(hour,minute,second);
}));

(tick.core.new_time.cljs$core$IFn$_invoke$arity$4 = (function (hour,minute,second,nano){
return cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$4(hour,minute,second,nano);
}));

(tick.core.new_time.cljs$lang$maxFixedArity = 4);

tick.core.new_date = (function tick$core$new_date(var_args){
var G__90132 = arguments.length;
switch (G__90132) {
case 0:
return tick.core.new_date.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return tick.core.new_date.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return tick.core.new_date.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return tick.core.new_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.new_date.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.today();
}));

(tick.core.new_date.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day_of_month){
return cljc.java_time.local_date.of(year,month,day_of_month);
}));

(tick.core.new_date.cljs$core$IFn$_invoke$arity$2 = (function (year,day_of_year){
return cljc.java_time.local_date.of_year_day(year,day_of_year);
}));

(tick.core.new_date.cljs$core$IFn$_invoke$arity$1 = (function (epoch_day){
return cljc.java_time.local_date.of_epoch_day(epoch_day);
}));

(tick.core.new_date.cljs$lang$maxFixedArity = 3);

tick.core.new_year_month = (function tick$core$new_year_month(var_args){
var G__90134 = arguments.length;
switch (G__90134) {
case 0:
return tick.core.new_year_month.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return tick.core.new_year_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.new_year_month.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljc.java_time.year_month.now.cljs$core$IFn$_invoke$arity$0();
}));

(tick.core.new_year_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljc.java_time.year_month.of(year,month);
}));

(tick.core.new_year_month.cljs$lang$maxFixedArity = 2);

/**
 * Return the current zone, which can be overridden by the *clock* dynamic var
 */
tick.core.current_zone = (function tick$core$current_zone(){
var temp__5823__auto__ = tick.core._STAR_clock_STAR_;
if(cljs.core.truth_(temp__5823__auto__)){
var clk = temp__5823__auto__;
return cljc.java_time.clock.get_zone(clk);
} else {
return cljc.java_time.zone_id.system_default();
}
});
tick.core.zone = (function tick$core$zone(var_args){
var G__90136 = arguments.length;
switch (G__90136) {
case 0:
return tick.core.zone.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.zone.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.zone.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.current_zone();
}));

(tick.core.zone.cljs$core$IFn$_invoke$arity$1 = (function (z){
return tick.protocols.zone(z);
}));

(tick.core.zone.cljs$lang$maxFixedArity = 1);

tick.core.zone_offset = (function tick$core$zone_offset(var_args){
var G__90138 = arguments.length;
switch (G__90138) {
case 1:
return tick.core.zone_offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.core.zone_offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tick.core.zone_offset.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.zone_offset.cljs$core$IFn$_invoke$arity$1 = (function (offset){
return tick.protocols.zone_offset(offset);
}));

(tick.core.zone_offset.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
return cljc.java_time.zone_offset.of_hours_minutes(hours,minutes);
}));

(tick.core.zone_offset.cljs$core$IFn$_invoke$arity$3 = (function (hours,minutes,seconds){
return cljc.java_time.zone_offset.of_hours_minutes_seconds(hours,minutes,seconds);
}));

(tick.core.zone_offset.cljs$lang$maxFixedArity = 3);

(tick.protocols.IConversion["function"] = true);

(tick.protocols.inst["function"] = (function (f){
return tick.protocols.inst((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}));

(tick.protocols.instant["function"] = (function (f){
return tick.protocols.instant((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}));

(tick.protocols.offset_date_time["function"] = (function (f){
return tick.protocols.offset_date_time((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}));

(tick.protocols.zoned_date_time["function"] = (function (f){
return tick.protocols.zoned_date_time((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}));

(java.time.Instant.prototype.tick$protocols$IConversion$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Instant.prototype.tick$protocols$IConversion$inst$arity$1 = (function (i){
var i__$1 = this;
return (new Date(cljc.java_time.instant.to_epoch_milli(i__$1)));
}));

(java.time.Instant.prototype.tick$protocols$IConversion$instant$arity$1 = (function (i){
var i__$1 = this;
return i__$1;
}));

(java.time.Instant.prototype.tick$protocols$IConversion$offset_date_time$arity$1 = (function (i){
var i__$1 = this;
return cljc.java_time.offset_date_time.of_instant(i__$1,tick.core.current_zone());
}));

(java.time.Instant.prototype.tick$protocols$IConversion$zoned_date_time$arity$1 = (function (i){
var i__$1 = this;
return cljc.java_time.zoned_date_time.of_instant.cljs$core$IFn$_invoke$arity$2(i__$1,tick.core.current_zone());
}));

(tick.protocols.IConversion["string"] = true);

(tick.protocols.inst["string"] = (function (s){
return tick.protocols.inst(tick.protocols.instant(s));
}));

(tick.protocols.instant["string"] = (function (s){
return cljc.java_time.instant.parse(s);
}));

(tick.protocols.offset_date_time["string"] = (function (s){
return cljc.java_time.offset_date_time.parse.cljs$core$IFn$_invoke$arity$1(s);
}));

(tick.protocols.zoned_date_time["string"] = (function (s){
return cljc.java_time.zoned_date_time.parse.cljs$core$IFn$_invoke$arity$1(s);
}));

(tick.protocols.IConversion["number"] = true);

(tick.protocols.instant["number"] = (function (n){
return cljc.java_time.instant.of_epoch_milli(n);
}));

(java.time.LocalDateTime.prototype.tick$protocols$IConversion$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDateTime.prototype.tick$protocols$IConversion$inst$arity$1 = (function (ldt){
var ldt__$1 = this;
return tick.protocols.inst(tick.protocols.zoned_date_time(ldt__$1));
}));

(java.time.LocalDateTime.prototype.tick$protocols$IConversion$instant$arity$1 = (function (ldt){
var ldt__$1 = this;
return tick.protocols.instant(tick.protocols.zoned_date_time(ldt__$1));
}));

(java.time.LocalDateTime.prototype.tick$protocols$IConversion$offset_date_time$arity$1 = (function (ldt){
var ldt__$1 = this;
return cljc.java_time.local_date_time.at_offset(ldt__$1,cljc.java_time.zone_id.get_rules(tick.core.current_zone()).offset(ldt__$1));
}));

(java.time.LocalDateTime.prototype.tick$protocols$IConversion$zoned_date_time$arity$1 = (function (ldt){
var ldt__$1 = this;
return cljc.java_time.local_date_time.at_zone(ldt__$1,tick.core.current_zone());
}));

(Date.prototype.tick$protocols$IConversion$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.tick$protocols$IConversion$inst$arity$1 = (function (d){
var d__$1 = this;
return d__$1;
}));

(Date.prototype.tick$protocols$IConversion$instant$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.instant.of_epoch_milli(d__$1.getTime());
}));

(Date.prototype.tick$protocols$IConversion$zoned_date_time$arity$1 = (function (d){
var d__$1 = this;
return tick.protocols.zoned_date_time(tick.protocols.instant(d__$1));
}));

(Date.prototype.tick$protocols$IConversion$offset_date_time$arity$1 = (function (d){
var d__$1 = this;
return tick.protocols.offset_date_time(tick.protocols.instant(d__$1));
}));

(java.time.OffsetDateTime.prototype.tick$protocols$IConversion$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.OffsetDateTime.prototype.tick$protocols$IConversion$inst$arity$1 = (function (odt){
var odt__$1 = this;
return tick.protocols.inst(tick.protocols.instant(odt__$1));
}));

(java.time.OffsetDateTime.prototype.tick$protocols$IConversion$instant$arity$1 = (function (odt){
var odt__$1 = this;
return cljc.java_time.offset_date_time.to_instant(odt__$1);
}));

(java.time.OffsetDateTime.prototype.tick$protocols$IConversion$offset_date_time$arity$1 = (function (odt){
var odt__$1 = this;
return odt__$1;
}));

(java.time.OffsetDateTime.prototype.tick$protocols$IConversion$zoned_date_time$arity$1 = (function (odt){
var odt__$1 = this;
return cljc.java_time.offset_date_time.to_zoned_date_time(odt__$1);
}));

(java.time.ZonedDateTime.prototype.tick$protocols$IConversion$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.ZonedDateTime.prototype.tick$protocols$IConversion$inst$arity$1 = (function (zdt){
var zdt__$1 = this;
return tick.protocols.inst(tick.protocols.instant(zdt__$1));
}));

(java.time.ZonedDateTime.prototype.tick$protocols$IConversion$instant$arity$1 = (function (zdt){
var zdt__$1 = this;
return cljc.java_time.zoned_date_time.to_instant(zdt__$1);
}));

(java.time.ZonedDateTime.prototype.tick$protocols$IConversion$offset_date_time$arity$1 = (function (zdt){
var zdt__$1 = this;
return cljc.java_time.zoned_date_time.to_offset_date_time(zdt__$1);
}));

(java.time.ZonedDateTime.prototype.tick$protocols$IConversion$zoned_date_time$arity$1 = (function (zdt){
var zdt__$1 = this;
return zdt__$1;
}));
(java.time.YearMonth.prototype.tick$protocols$IExtraction$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.YearMonth.prototype.tick$protocols$IExtraction$year_month$arity$1 = (function (ym){
var ym__$1 = this;
return ym__$1;
}));

(java.time.YearMonth.prototype.tick$protocols$IExtraction$month$arity$1 = (function (ym){
var ym__$1 = this;
return cljc.java_time.year_month.get_month(ym__$1);
}));

(java.time.YearMonth.prototype.tick$protocols$IExtraction$year$arity$1 = (function (ym){
var ym__$1 = this;
return tick.protocols.year(cljc.java_time.year_month.get_year(ym__$1));
}));

(java.time.Year.prototype.tick$protocols$IExtraction$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Year.prototype.tick$protocols$IExtraction$year$arity$1 = (function (y){
var y__$1 = this;
return y__$1;
}));

(java.time.Year.prototype.tick$protocols$IExtraction$int$arity$1 = (function (y){
var y__$1 = this;
return cljc.java_time.year.get_value(y__$1);
}));

(java.time.ZonedDateTime.prototype.tick$protocols$IExtraction$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.ZonedDateTime.prototype.tick$protocols$IExtraction$time$arity$1 = (function (zdt){
var zdt__$1 = this;
return cljc.java_time.zoned_date_time.to_local_time(zdt__$1);
}));

(java.time.ZonedDateTime.prototype.tick$protocols$IExtraction$date$arity$1 = (function (zdt){
var zdt__$1 = this;
return cljc.java_time.zoned_date_time.to_local_date(zdt__$1);
}));

(java.time.ZonedDateTime.prototype.tick$protocols$IExtraction$date_time$arity$1 = (function (zdt){
var zdt__$1 = this;
return cljc.java_time.zoned_date_time.to_local_date_time(zdt__$1);
}));

(java.time.ZonedDateTime.prototype.tick$protocols$IExtraction$nanosecond$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.zoned_date_time.get(t__$1,cljc.java_time.temporal.chrono_field.nano_of_second);
}));

(java.time.ZonedDateTime.prototype.tick$protocols$IExtraction$microsecond$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.zoned_date_time.get(t__$1,cljc.java_time.temporal.chrono_field.micro_of_second);
}));

(java.time.ZonedDateTime.prototype.tick$protocols$IExtraction$millisecond$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.zoned_date_time.get(t__$1,cljc.java_time.temporal.chrono_field.milli_of_second);
}));

(java.time.ZonedDateTime.prototype.tick$protocols$IExtraction$second$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.zoned_date_time.get_second(t__$1);
}));

(java.time.ZonedDateTime.prototype.tick$protocols$IExtraction$minute$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.zoned_date_time.get_minute(t__$1);
}));

(java.time.ZonedDateTime.prototype.tick$protocols$IExtraction$hour$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.zoned_date_time.get_hour(t__$1);
}));

(java.time.ZonedDateTime.prototype.tick$protocols$IExtraction$day_of_week$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.zoned_date_time.get_day_of_week(t__$1);
}));

(java.time.ZonedDateTime.prototype.tick$protocols$IExtraction$day_of_month$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.zoned_date_time.get_day_of_month(t__$1);
}));

(java.time.ZonedDateTime.prototype.tick$protocols$IExtraction$month$arity$1 = (function (zdt){
var zdt__$1 = this;
return cljc.java_time.zoned_date_time.get_month(zdt__$1);
}));

(java.time.ZonedDateTime.prototype.tick$protocols$IExtraction$year$arity$1 = (function (zdt){
var zdt__$1 = this;
return tick.protocols.year(cljc.java_time.zoned_date_time.get_year(zdt__$1));
}));

(java.time.ZonedDateTime.prototype.tick$protocols$IExtraction$zone$arity$1 = (function (zdt){
var zdt__$1 = this;
return cljc.java_time.zoned_date_time.get_zone(zdt__$1);
}));

(java.time.ZonedDateTime.prototype.tick$protocols$IExtraction$zone_offset$arity$1 = (function (zdt){
var zdt__$1 = this;
return cljc.java_time.zoned_date_time.get_offset(zdt__$1);
}));

(java.time.Instant.prototype.tick$protocols$IExtraction$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Instant.prototype.tick$protocols$IExtraction$time$arity$1 = (function (i){
var i__$1 = this;
return tick.protocols.time(tick.protocols.zoned_date_time(i__$1));
}));

(java.time.Instant.prototype.tick$protocols$IExtraction$date$arity$1 = (function (i){
var i__$1 = this;
return tick.protocols.date(tick.protocols.zoned_date_time(i__$1));
}));

(java.time.Instant.prototype.tick$protocols$IExtraction$date_time$arity$1 = (function (i){
var i__$1 = this;
return tick.protocols.date_time(tick.protocols.zoned_date_time(i__$1));
}));

(java.time.Instant.prototype.tick$protocols$IExtraction$nanosecond$arity$1 = (function (t){
var t__$1 = this;
return tick.protocols.nanosecond(tick.protocols.zoned_date_time(t__$1));
}));

(java.time.Instant.prototype.tick$protocols$IExtraction$microsecond$arity$1 = (function (t){
var t__$1 = this;
return tick.protocols.microsecond(tick.protocols.zoned_date_time(t__$1));
}));

(java.time.Instant.prototype.tick$protocols$IExtraction$millisecond$arity$1 = (function (t){
var t__$1 = this;
return tick.protocols.millisecond(tick.protocols.zoned_date_time(t__$1));
}));

(java.time.Instant.prototype.tick$protocols$IExtraction$second$arity$1 = (function (t){
var t__$1 = this;
return tick.protocols.second(tick.protocols.zoned_date_time(t__$1));
}));

(java.time.Instant.prototype.tick$protocols$IExtraction$minute$arity$1 = (function (t){
var t__$1 = this;
return tick.protocols.minute(tick.protocols.zoned_date_time(t__$1));
}));

(java.time.Instant.prototype.tick$protocols$IExtraction$hour$arity$1 = (function (t){
var t__$1 = this;
return tick.protocols.hour(tick.protocols.zoned_date_time(t__$1));
}));

(java.time.Instant.prototype.tick$protocols$IExtraction$day_of_week$arity$1 = (function (i){
var i__$1 = this;
return tick.protocols.day_of_week(tick.protocols.date(i__$1));
}));

(java.time.Instant.prototype.tick$protocols$IExtraction$day_of_month$arity$1 = (function (i){
var i__$1 = this;
return tick.protocols.day_of_month(tick.protocols.date(i__$1));
}));

(java.time.Instant.prototype.tick$protocols$IExtraction$int$arity$1 = (function (i){
var i__$1 = this;
return cljc.java_time.instant.get_nano(i__$1);
}));

(java.time.Instant.prototype.tick$protocols$IExtraction$long$arity$1 = (function (i){
var i__$1 = this;
return cljc.java_time.instant.get_epoch_second(i__$1);
}));

(java.time.Instant.prototype.tick$protocols$IExtraction$month$arity$1 = (function (i){
var i__$1 = this;
return tick.protocols.month(tick.protocols.date(i__$1));
}));

(java.time.Instant.prototype.tick$protocols$IExtraction$year$arity$1 = (function (i){
var i__$1 = this;
return tick.protocols.year(tick.protocols.date(i__$1));
}));

(java.time.Instant.prototype.tick$protocols$IExtraction$year_month$arity$1 = (function (i){
var i__$1 = this;
return tick.protocols.year_month(tick.protocols.date(i__$1));
}));

(java.time.Instant.prototype.tick$protocols$IExtraction$zone$arity$1 = (function (_i){
var _i__$1 = this;
return cljc.java_time.zone_id.of.cljs$core$IFn$_invoke$arity$1("UTC");
}));

(java.time.Instant.prototype.tick$protocols$IExtraction$zone_offset$arity$1 = (function (_i){
var _i__$1 = this;
return cljc.java_time.zone_offset.utc;
}));

(tick.protocols.IExtraction["object"] = true);

(tick.protocols.int$["object"] = (function (v){
return tick.core.parse_int(v);
}));

(tick.protocols.long$["object"] = (function (v){
return tick.core.parse_int(v);
}));

(Date.prototype.tick$protocols$IExtraction$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.tick$protocols$IExtraction$date$arity$1 = (function (d){
var d__$1 = this;
return tick.protocols.date(tick.protocols.zoned_date_time(tick.protocols.instant(d__$1)));
}));

(Date.prototype.tick$protocols$IExtraction$date_time$arity$1 = (function (d){
var d__$1 = this;
return tick.protocols.date_time(tick.protocols.instant(d__$1));
}));

(Date.prototype.tick$protocols$IExtraction$year_month$arity$1 = (function (d){
var d__$1 = this;
return tick.protocols.year_month(tick.protocols.date(d__$1));
}));

(Date.prototype.tick$protocols$IExtraction$year$arity$1 = (function (d){
var d__$1 = this;
return tick.protocols.year(tick.protocols.date(d__$1));
}));

(java.time.ZoneId.prototype.tick$protocols$IExtraction$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.ZoneId.prototype.tick$protocols$IExtraction$zone$arity$1 = (function (z){
var z__$1 = this;
return z__$1;
}));

(java.time.LocalDate.prototype.tick$protocols$IExtraction$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDate.prototype.tick$protocols$IExtraction$date$arity$1 = (function (d){
var d__$1 = this;
return d__$1;
}));

(java.time.LocalDate.prototype.tick$protocols$IExtraction$day_of_week$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.local_date.get_day_of_week(d__$1);
}));

(java.time.LocalDate.prototype.tick$protocols$IExtraction$day_of_month$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.local_date.get_day_of_month(d__$1);
}));

(java.time.LocalDate.prototype.tick$protocols$IExtraction$month$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.month.from(d__$1);
}));

(java.time.LocalDate.prototype.tick$protocols$IExtraction$year_month$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.year_month.of(cljc.java_time.local_date.get_year(d__$1),cljc.java_time.local_date.get_month_value(d__$1));
}));

(java.time.LocalDate.prototype.tick$protocols$IExtraction$year$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.year.of(cljc.java_time.local_date.get_year(d__$1));
}));

(tick.protocols.IExtraction["number"] = true);

(tick.protocols.day_of_week["number"] = (function (n){
return cljc.java_time.day_of_week.of(n);
}));

(tick.protocols.month["number"] = (function (n){
return cljc.java_time.month.of(n);
}));

(tick.protocols.year["number"] = (function (n){
return cljc.java_time.year.of(n);
}));

(tick.protocols.zone_offset["number"] = (function (s){
return cljc.java_time.zone_offset.of_hours(s);
}));

(java.time.ZoneOffset.prototype.tick$protocols$IExtraction$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.ZoneOffset.prototype.tick$protocols$IExtraction$zone_offset$arity$1 = (function (z){
var z__$1 = this;
return z__$1;
}));

(java.time.ZoneOffset.prototype.tick$protocols$IExtraction$zone$arity$1 = (function (z){
var z__$1 = this;
return z__$1;
}));

(tick.protocols.IExtraction["string"] = true);

(tick.protocols.time["string"] = (function (s){
return cljc.java_time.local_time.parse.cljs$core$IFn$_invoke$arity$1(s);
}));

(tick.protocols.date["string"] = (function (s){
return cljc.java_time.local_date.parse.cljs$core$IFn$_invoke$arity$1(s);
}));

(tick.protocols.date_time["string"] = (function (s){
return cljc.java_time.local_date_time.parse.cljs$core$IFn$_invoke$arity$1(s);
}));

(tick.protocols.day_of_week["string"] = (function (s){
var or__5142__auto__ = tick.core.parse_day(s);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return tick.protocols.day_of_week(tick.protocols.date(s));
}
}));

(tick.protocols.day_of_month["string"] = (function (s){
return tick.protocols.day_of_month(tick.protocols.date(s));
}));

(tick.protocols.month["string"] = (function (s){
var or__5142__auto__ = tick.core.parse_month(s);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return tick.protocols.month(tick.protocols.date(s));
}
}));

(tick.protocols.year["string"] = (function (s){
return cljc.java_time.year.parse.cljs$core$IFn$_invoke$arity$1(s);
}));

(tick.protocols.year_month["string"] = (function (s){
return cljc.java_time.year_month.parse.cljs$core$IFn$_invoke$arity$1(s);
}));

(tick.protocols.zone["string"] = (function (s){
return cljc.java_time.zone_id.of.cljs$core$IFn$_invoke$arity$1(s);
}));

(tick.protocols.zone_offset["string"] = (function (s){
return cljc.java_time.zone_offset.of.cljs$core$IFn$_invoke$arity$1(s);
}));

(tick.protocols.int$["string"] = (function (s){
return cljc.java_time.instant.get_nano(tick.protocols.instant(s));
}));

(tick.protocols.long$["string"] = (function (s){
return cljc.java_time.instant.get_epoch_second(tick.protocols.instant(s));
}));

(tick.protocols.IExtraction["function"] = true);

(tick.protocols.time["function"] = (function (f){
return tick.protocols.time((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}));

(tick.protocols.date["function"] = (function (f){
return tick.protocols.date((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}));

(tick.protocols.date_time["function"] = (function (f){
return tick.protocols.date_time((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}));

(tick.protocols.nanosecond["function"] = (function (f){
return tick.protocols.nanosecond((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}));

(tick.protocols.microsecond["function"] = (function (f){
return tick.protocols.microsecond((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}));

(tick.protocols.millisecond["function"] = (function (f){
return tick.protocols.millisecond((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}));

(tick.protocols.second["function"] = (function (f){
return tick.protocols.second((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}));

(tick.protocols.minute["function"] = (function (f){
return tick.protocols.minute((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}));

(tick.protocols.hour["function"] = (function (f){
return tick.protocols.hour((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}));

(tick.protocols.day_of_week["function"] = (function (f){
return tick.protocols.day_of_week((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}));

(tick.protocols.day_of_month["function"] = (function (f){
return tick.protocols.day_of_month((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}));

(tick.protocols.int$["function"] = (function (f){
return tick.protocols.int$((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}));

(tick.protocols.long$["function"] = (function (f){
return tick.protocols.long$((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}));

(tick.protocols.month["function"] = (function (f){
return tick.protocols.month((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}));

(tick.protocols.year["function"] = (function (f){
return tick.protocols.year((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}));

(tick.protocols.year_month["function"] = (function (f){
return tick.protocols.year_month((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}));

(tick.protocols.zone["function"] = (function (f){
return tick.protocols.zone((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}));

(tick.protocols.zone_offset["function"] = (function (f){
return tick.protocols.zone_offset((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}));

(java.time.LocalTime.prototype.tick$protocols$IExtraction$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalTime.prototype.tick$protocols$IExtraction$time$arity$1 = (function (t){
var t__$1 = this;
return t__$1;
}));

(java.time.LocalTime.prototype.tick$protocols$IExtraction$nanosecond$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_time.get(t__$1,cljc.java_time.temporal.chrono_field.nano_of_second);
}));

(java.time.LocalTime.prototype.tick$protocols$IExtraction$microsecond$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_time.get(t__$1,cljc.java_time.temporal.chrono_field.micro_of_second);
}));

(java.time.LocalTime.prototype.tick$protocols$IExtraction$millisecond$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_time.get(t__$1,cljc.java_time.temporal.chrono_field.milli_of_second);
}));

(java.time.LocalTime.prototype.tick$protocols$IExtraction$second$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_time.get_second(t__$1);
}));

(java.time.LocalTime.prototype.tick$protocols$IExtraction$minute$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_time.get_minute(t__$1);
}));

(java.time.LocalTime.prototype.tick$protocols$IExtraction$hour$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_time.get_hour(t__$1);
}));

(java.time.OffsetDateTime.prototype.tick$protocols$IExtraction$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.OffsetDateTime.prototype.tick$protocols$IExtraction$time$arity$1 = (function (odt){
var odt__$1 = this;
return cljc.java_time.offset_date_time.to_local_time(odt__$1);
}));

(java.time.OffsetDateTime.prototype.tick$protocols$IExtraction$date$arity$1 = (function (odt){
var odt__$1 = this;
return cljc.java_time.offset_date_time.to_local_date(odt__$1);
}));

(java.time.OffsetDateTime.prototype.tick$protocols$IExtraction$date_time$arity$1 = (function (odt){
var odt__$1 = this;
return cljc.java_time.offset_date_time.to_local_date_time(odt__$1);
}));

(java.time.OffsetDateTime.prototype.tick$protocols$IExtraction$nanosecond$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.offset_date_time.get(t__$1,cljc.java_time.temporal.chrono_field.nano_of_second);
}));

(java.time.OffsetDateTime.prototype.tick$protocols$IExtraction$microsecond$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.offset_date_time.get(t__$1,cljc.java_time.temporal.chrono_field.micro_of_second);
}));

(java.time.OffsetDateTime.prototype.tick$protocols$IExtraction$millisecond$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.offset_date_time.get(t__$1,cljc.java_time.temporal.chrono_field.milli_of_second);
}));

(java.time.OffsetDateTime.prototype.tick$protocols$IExtraction$second$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.offset_date_time.get_second(t__$1);
}));

(java.time.OffsetDateTime.prototype.tick$protocols$IExtraction$minute$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.offset_date_time.get_minute(t__$1);
}));

(java.time.OffsetDateTime.prototype.tick$protocols$IExtraction$hour$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.offset_date_time.get_hour(t__$1);
}));

(java.time.OffsetDateTime.prototype.tick$protocols$IExtraction$day_of_week$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.offset_date_time.get_day_of_week(t__$1);
}));

(java.time.OffsetDateTime.prototype.tick$protocols$IExtraction$day_of_month$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.offset_date_time.get_day_of_month(t__$1);
}));

(java.time.OffsetDateTime.prototype.tick$protocols$IExtraction$month$arity$1 = (function (zdt){
var zdt__$1 = this;
return cljc.java_time.offset_date_time.get_month(zdt__$1);
}));

(java.time.OffsetDateTime.prototype.tick$protocols$IExtraction$year$arity$1 = (function (odt){
var odt__$1 = this;
return tick.protocols.year(cljc.java_time.offset_date_time.get_year(odt__$1));
}));

(java.time.OffsetDateTime.prototype.tick$protocols$IExtraction$zone_offset$arity$1 = (function (odt){
var odt__$1 = this;
return cljc.java_time.offset_date_time.get_offset(odt__$1);
}));

(java.time.LocalDateTime.prototype.tick$protocols$IExtraction$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDateTime.prototype.tick$protocols$IExtraction$time$arity$1 = (function (dt){
var dt__$1 = this;
return cljc.java_time.local_date_time.to_local_time(dt__$1);
}));

(java.time.LocalDateTime.prototype.tick$protocols$IExtraction$date$arity$1 = (function (dt){
var dt__$1 = this;
return cljc.java_time.local_date_time.to_local_date(dt__$1);
}));

(java.time.LocalDateTime.prototype.tick$protocols$IExtraction$date_time$arity$1 = (function (ldt){
var ldt__$1 = this;
return ldt__$1;
}));

(java.time.LocalDateTime.prototype.tick$protocols$IExtraction$second$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_date_time.get_second(t__$1);
}));

(java.time.LocalDateTime.prototype.tick$protocols$IExtraction$minute$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_date_time.get_minute(t__$1);
}));

(java.time.LocalDateTime.prototype.tick$protocols$IExtraction$hour$arity$1 = (function (t){
var t__$1 = this;
return cljc.java_time.local_date_time.get_hour(t__$1);
}));

(java.time.LocalDateTime.prototype.tick$protocols$IExtraction$day_of_week$arity$1 = (function (dt){
var dt__$1 = this;
return tick.protocols.day_of_week(tick.protocols.date(dt__$1));
}));

(java.time.LocalDateTime.prototype.tick$protocols$IExtraction$day_of_month$arity$1 = (function (dt){
var dt__$1 = this;
return tick.protocols.day_of_month(tick.protocols.date(dt__$1));
}));

(java.time.LocalDateTime.prototype.tick$protocols$IExtraction$year_month$arity$1 = (function (dt){
var dt__$1 = this;
return tick.protocols.year_month(tick.protocols.date(dt__$1));
}));

(java.time.LocalDateTime.prototype.tick$protocols$IExtraction$month$arity$1 = (function (dt){
var dt__$1 = this;
return cljc.java_time.local_date_time.get_month(dt__$1);
}));

(java.time.LocalDateTime.prototype.tick$protocols$IExtraction$year$arity$1 = (function (dt){
var dt__$1 = this;
return tick.protocols.year(tick.protocols.date(dt__$1));
}));

(java.time.Month.prototype.tick$protocols$IExtraction$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Month.prototype.tick$protocols$IExtraction$int$arity$1 = (function (m){
var m__$1 = this;
return cljc.java_time.month.get_value(m__$1);
}));

(java.time.DayOfWeek.prototype.tick$protocols$IExtraction$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.DayOfWeek.prototype.tick$protocols$IExtraction$int$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.day_of_week.get_value(d__$1);
}));

(java.time.DayOfWeek.prototype.tick$protocols$IExtraction$day_of_week$arity$1 = (function (d){
var d__$1 = this;
return d__$1;
}));
/**
 * keyword to chrono-field
 */
tick.core.field_map = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"proleptic-month","proleptic-month",-746961920),new cljs.core.Keyword(null,"aligned-week-of-month","aligned-week-of-month",-1988230912),new cljs.core.Keyword(null,"clock-hour-of-ampm","clock-hour-of-ampm",-268394751),new cljs.core.Keyword(null,"epoch-day","epoch-day",-1151217791),new cljs.core.Keyword(null,"nano-of-second","nano-of-second",-1642935645),new cljs.core.Keyword(null,"aligned-week-of-year","aligned-week-of-year",70378276),new cljs.core.Keyword(null,"era","era",1165135812),new cljs.core.Keyword(null,"offset-seconds","offset-seconds",-695890139),new cljs.core.Keyword(null,"micro-of-day","micro-of-day",-1255932121),new cljs.core.Keyword(null,"minute-of-day","minute-of-day",558111464),new cljs.core.Keyword(null,"day-of-week","day-of-week",1639326729),new cljs.core.Keyword(null,"ampm-of-day","ampm-of-day",-284051414),new cljs.core.Keyword(null,"clock-hour-of-day","clock-hour-of-day",370314698),new cljs.core.Keyword(null,"hour-of-day","hour-of-day",2086777099),new cljs.core.Keyword(null,"month-of-year","month-of-year",760756492),new cljs.core.Keyword(null,"milli-of-second","milli-of-second",-1422144788),new cljs.core.Keyword(null,"instant-seconds","instant-seconds",1032794797),new cljs.core.Keyword(null,"micro-of-second","micro-of-second",1805992110),new cljs.core.Keyword(null,"aligned-day-of-week-in-month","aligned-day-of-week-in-month",-452127505),new cljs.core.Keyword(null,"day-of-month","day-of-month",-1096650288),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"day-of-year","day-of-year",478600113),new cljs.core.Keyword(null,"year-of-era","year-of-era",682445876),new cljs.core.Keyword(null,"nano-of-day","nano-of-day",525361845),new cljs.core.Keyword(null,"hour-of-ampm","hour-of-ampm",1171096469),new cljs.core.Keyword(null,"second-of-minute","second-of-minute",222734326),new cljs.core.Keyword(null,"aligned-day-of-week-in-year","aligned-day-of-week-in-year",-931066377),new cljs.core.Keyword(null,"second-of-day","second-of-day",806277913),new cljs.core.Keyword(null,"milli-of-day","milli-of-day",-2024730021),new cljs.core.Keyword(null,"minute-of-hour","minute-of-hour",1903220478)],[cljc.java_time.temporal.chrono_field.proleptic_month,cljc.java_time.temporal.chrono_field.aligned_week_of_month,cljc.java_time.temporal.chrono_field.clock_hour_of_ampm,cljc.java_time.temporal.chrono_field.epoch_day,cljc.java_time.temporal.chrono_field.nano_of_second,cljc.java_time.temporal.chrono_field.aligned_week_of_year,cljc.java_time.temporal.chrono_field.era,cljc.java_time.temporal.chrono_field.offset_seconds,cljc.java_time.temporal.chrono_field.micro_of_day,cljc.java_time.temporal.chrono_field.minute_of_day,cljc.java_time.temporal.chrono_field.day_of_week,cljc.java_time.temporal.chrono_field.ampm_of_day,cljc.java_time.temporal.chrono_field.clock_hour_of_day,cljc.java_time.temporal.chrono_field.hour_of_day,cljc.java_time.temporal.chrono_field.month_of_year,cljc.java_time.temporal.chrono_field.milli_of_second,cljc.java_time.temporal.chrono_field.instant_seconds,cljc.java_time.temporal.chrono_field.micro_of_second,cljc.java_time.temporal.chrono_field.aligned_day_of_week_in_month,cljc.java_time.temporal.chrono_field.day_of_month,cljc.java_time.temporal.chrono_field.year,cljc.java_time.temporal.chrono_field.day_of_year,cljc.java_time.temporal.chrono_field.year_of_era,cljc.java_time.temporal.chrono_field.nano_of_day,cljc.java_time.temporal.chrono_field.hour_of_ampm,cljc.java_time.temporal.chrono_field.second_of_minute,cljc.java_time.temporal.chrono_field.aligned_day_of_week_in_year,cljc.java_time.temporal.chrono_field.second_of_day,cljc.java_time.temporal.chrono_field.milli_of_day,cljc.java_time.temporal.chrono_field.minute_of_hour]);
tick.core.fields_map = (function tick$core$fields_map(t){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__90139){
var vec__90140 = p__90139;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90140,(0),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90140,(1),null);
var cf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tick.core.field_map,k);
if(cljs.core.truth_(cljc.java_time.temporal.temporal.is_supported(t,cf))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljc.java_time.temporal.temporal.get_long(t,cf)], null);
} else {
return null;
}
}),tick.core.field_map));
});

/**
* @constructor
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.ILookup}
*/
tick.core.FieldsLookup = (function (t){
this.t = t;
this.cljs$lang$protocol_mask$partition0$ = 8388864;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(tick.core.FieldsLookup.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.seq(tick.core.fields_map(self__.t));
}));

(tick.core.FieldsLookup.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,fld){
var self__ = this;
var ___$1 = this;
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tick.core.field_map,fld);
if(cljs.core.truth_(temp__5825__auto__)){
var f = temp__5825__auto__;
return cljc.java_time.temporal.temporal.get_long(self__.t,f);
} else {
return null;
}
}));

(tick.core.FieldsLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,fld,notfound){
var self__ = this;
var ___$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tick.core.field_map,fld);
if(cljs.core.truth_(temp__5823__auto__)){
var f = temp__5823__auto__;
try{return cljc.java_time.temporal.temporal.get_long(self__.t,f);
}catch (e90143){if((e90143 instanceof Error)){
var _e = e90143;
return notfound;
} else {
throw e90143;

}
}} else {
return notfound;
}
}));

(tick.core.FieldsLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null)], null);
}));

(tick.core.FieldsLookup.cljs$lang$type = true);

(tick.core.FieldsLookup.cljs$lang$ctorStr = "tick.core/FieldsLookup");

(tick.core.FieldsLookup.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"tick.core/FieldsLookup");
}));

/**
 * Positional factory function for tick.core/FieldsLookup.
 */
tick.core.__GT_FieldsLookup = (function tick$core$__GT_FieldsLookup(t){
return (new tick.core.FieldsLookup(t));
});

tick.core.fields = (function tick$core$fields(t){
return tick.core.__GT_FieldsLookup(t);
});
/**
 * Adjust a temporal with an adjuster or field
 */
tick.core.with$ = (function tick$core$with(var_args){
var G__90145 = arguments.length;
switch (G__90145) {
case 2:
return tick.core.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tick.core.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.with$.cljs$core$IFn$_invoke$arity$2 = (function (t,adj){
return cljc.java_time.temporal.temporal.with$.cljs$core$IFn$_invoke$arity$2(t,adj);
}));

(tick.core.with$.cljs$core$IFn$_invoke$arity$3 = (function (t,fld,new_value){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tick.core.field_map,fld);
if(cljs.core.truth_(temp__5825__auto__)){
var f = temp__5825__auto__;
return cljc.java_time.temporal.temporal.with$.cljs$core$IFn$_invoke$arity$3(t,f,new_value);
} else {
return null;
}
}));

(tick.core.with$.cljs$lang$maxFixedArity = 3);

tick.core.day_of_week_in_month = (function tick$core$day_of_week_in_month(var_args){
var G__90147 = arguments.length;
switch (G__90147) {
case 2:
return tick.core.day_of_week_in_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tick.core.day_of_week_in_month.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.day_of_week_in_month.cljs$core$IFn$_invoke$arity$2 = (function (ordinal,day_of_week){
return cljc.java_time.temporal.temporal_adjusters.day_of_week_in_month(ordinal,tick.protocols.day_of_week(day_of_week));
}));

(tick.core.day_of_week_in_month.cljs$core$IFn$_invoke$arity$3 = (function (t,ordinal,day_of_week){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.day_of_week_in_month.cljs$core$IFn$_invoke$arity$2(ordinal,day_of_week));
}));

(tick.core.day_of_week_in_month.cljs$lang$maxFixedArity = 3);

tick.core.first_day_of_month = (function tick$core$first_day_of_month(var_args){
var G__90149 = arguments.length;
switch (G__90149) {
case 0:
return tick.core.first_day_of_month.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.first_day_of_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.first_day_of_month.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljc.java_time.temporal.temporal_adjusters.first_day_of_month();
}));

(tick.core.first_day_of_month.cljs$core$IFn$_invoke$arity$1 = (function (t){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.first_day_of_month.cljs$core$IFn$_invoke$arity$0());
}));

(tick.core.first_day_of_month.cljs$lang$maxFixedArity = 1);

tick.core.first_day_of_next_month = (function tick$core$first_day_of_next_month(var_args){
var G__90151 = arguments.length;
switch (G__90151) {
case 0:
return tick.core.first_day_of_next_month.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.first_day_of_next_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.first_day_of_next_month.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljc.java_time.temporal.temporal_adjusters.first_day_of_next_month();
}));

(tick.core.first_day_of_next_month.cljs$core$IFn$_invoke$arity$1 = (function (t){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.first_day_of_next_month.cljs$core$IFn$_invoke$arity$0());
}));

(tick.core.first_day_of_next_month.cljs$lang$maxFixedArity = 1);

tick.core.first_day_of_next_year = (function tick$core$first_day_of_next_year(var_args){
var G__90153 = arguments.length;
switch (G__90153) {
case 0:
return tick.core.first_day_of_next_year.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.first_day_of_next_year.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.first_day_of_next_year.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljc.java_time.temporal.temporal_adjusters.first_day_of_next_year();
}));

(tick.core.first_day_of_next_year.cljs$core$IFn$_invoke$arity$1 = (function (t){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.first_day_of_next_year.cljs$core$IFn$_invoke$arity$0());
}));

(tick.core.first_day_of_next_year.cljs$lang$maxFixedArity = 1);

tick.core.first_day_of_year = (function tick$core$first_day_of_year(var_args){
var G__90155 = arguments.length;
switch (G__90155) {
case 0:
return tick.core.first_day_of_year.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.first_day_of_year.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.first_day_of_year.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljc.java_time.temporal.temporal_adjusters.first_day_of_year();
}));

(tick.core.first_day_of_year.cljs$core$IFn$_invoke$arity$1 = (function (t){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.first_day_of_year.cljs$core$IFn$_invoke$arity$0());
}));

(tick.core.first_day_of_year.cljs$lang$maxFixedArity = 1);

tick.core.first_in_month = (function tick$core$first_in_month(var_args){
var G__90157 = arguments.length;
switch (G__90157) {
case 1:
return tick.core.first_in_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.core.first_in_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.first_in_month.cljs$core$IFn$_invoke$arity$1 = (function (day_of_week){
return cljc.java_time.temporal.temporal_adjusters.first_in_month(tick.protocols.day_of_week(day_of_week));
}));

(tick.core.first_in_month.cljs$core$IFn$_invoke$arity$2 = (function (t,day_of_week){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.first_in_month.cljs$core$IFn$_invoke$arity$1(day_of_week));
}));

(tick.core.first_in_month.cljs$lang$maxFixedArity = 2);

tick.core.last_day_of_month = (function tick$core$last_day_of_month(var_args){
var G__90159 = arguments.length;
switch (G__90159) {
case 0:
return tick.core.last_day_of_month.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.last_day_of_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.last_day_of_month.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljc.java_time.temporal.temporal_adjusters.last_day_of_month();
}));

(tick.core.last_day_of_month.cljs$core$IFn$_invoke$arity$1 = (function (t){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.last_day_of_month.cljs$core$IFn$_invoke$arity$0());
}));

(tick.core.last_day_of_month.cljs$lang$maxFixedArity = 1);

tick.core.last_day_of_year = (function tick$core$last_day_of_year(var_args){
var G__90161 = arguments.length;
switch (G__90161) {
case 0:
return tick.core.last_day_of_year.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.last_day_of_year.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.last_day_of_year.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljc.java_time.temporal.temporal_adjusters.last_day_of_year();
}));

(tick.core.last_day_of_year.cljs$core$IFn$_invoke$arity$1 = (function (t){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.last_day_of_year.cljs$core$IFn$_invoke$arity$0());
}));

(tick.core.last_day_of_year.cljs$lang$maxFixedArity = 1);

tick.core.last_in_month = (function tick$core$last_in_month(var_args){
var G__90163 = arguments.length;
switch (G__90163) {
case 1:
return tick.core.last_in_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.core.last_in_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.last_in_month.cljs$core$IFn$_invoke$arity$1 = (function (day_of_week){
return cljc.java_time.temporal.temporal_adjusters.last_in_month(tick.protocols.day_of_week(day_of_week));
}));

(tick.core.last_in_month.cljs$core$IFn$_invoke$arity$2 = (function (t,day_of_week){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.last_in_month.cljs$core$IFn$_invoke$arity$1(day_of_week));
}));

(tick.core.last_in_month.cljs$lang$maxFixedArity = 2);

tick.core.next = (function tick$core$next(var_args){
var G__90165 = arguments.length;
switch (G__90165) {
case 1:
return tick.core.next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.core.next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.next.cljs$core$IFn$_invoke$arity$1 = (function (day_of_week){
return cljc.java_time.temporal.temporal_adjusters.next(tick.protocols.day_of_week(day_of_week));
}));

(tick.core.next.cljs$core$IFn$_invoke$arity$2 = (function (t,day_of_week){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.next.cljs$core$IFn$_invoke$arity$1(day_of_week));
}));

(tick.core.next.cljs$lang$maxFixedArity = 2);

tick.core.next_or_same = (function tick$core$next_or_same(var_args){
var G__90167 = arguments.length;
switch (G__90167) {
case 1:
return tick.core.next_or_same.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.core.next_or_same.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.next_or_same.cljs$core$IFn$_invoke$arity$1 = (function (day_of_week){
return cljc.java_time.temporal.temporal_adjusters.next_or_same(tick.protocols.day_of_week(day_of_week));
}));

(tick.core.next_or_same.cljs$core$IFn$_invoke$arity$2 = (function (t,day_of_week){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.next_or_same.cljs$core$IFn$_invoke$arity$1(day_of_week));
}));

(tick.core.next_or_same.cljs$lang$maxFixedArity = 2);

tick.core.previous = (function tick$core$previous(var_args){
var G__90169 = arguments.length;
switch (G__90169) {
case 1:
return tick.core.previous.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.core.previous.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.previous.cljs$core$IFn$_invoke$arity$1 = (function (day_of_week){
return cljc.java_time.temporal.temporal_adjusters.previous(tick.protocols.day_of_week(day_of_week));
}));

(tick.core.previous.cljs$core$IFn$_invoke$arity$2 = (function (t,day_of_week){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.previous.cljs$core$IFn$_invoke$arity$1(day_of_week));
}));

(tick.core.previous.cljs$lang$maxFixedArity = 2);

tick.core.previous_or_same = (function tick$core$previous_or_same(var_args){
var G__90171 = arguments.length;
switch (G__90171) {
case 1:
return tick.core.previous_or_same.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.core.previous_or_same.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.previous_or_same.cljs$core$IFn$_invoke$arity$1 = (function (day_of_week){
return cljc.java_time.temporal.temporal_adjusters.previous_or_same(tick.protocols.day_of_week(day_of_week));
}));

(tick.core.previous_or_same.cljs$core$IFn$_invoke$arity$2 = (function (t,day_of_week){
return tick.core.with$.cljs$core$IFn$_invoke$arity$2(t,tick.core.previous_or_same.cljs$core$IFn$_invoke$arity$1(day_of_week));
}));

(tick.core.previous_or_same.cljs$lang$maxFixedArity = 2);

/**
 * keyword to chrono-unit
 */
tick.core.unit_map = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"nanos","nanos",-1777059258),new cljs.core.Keyword(null,"forever","forever",2103455015),new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"half-days","half-days",-534088147),new cljs.core.Keyword(null,"micros","micros",420024622),new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"centuries","centuries",-306410384),new cljs.core.Keyword(null,"decades","decades",-2105076367),new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"years","years",-1298579689),new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"eras","eras",1406613306),new cljs.core.Keyword(null,"millennia","millennia",2120675355),new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"millis","millis",-1338288387)],[cljc.java_time.temporal.chrono_unit.nanos,cljc.java_time.temporal.chrono_unit.forever,cljc.java_time.temporal.chrono_unit.months,cljc.java_time.temporal.chrono_unit.days,cljc.java_time.temporal.chrono_unit.half_days,cljc.java_time.temporal.chrono_unit.micros,cljc.java_time.temporal.chrono_unit.seconds,cljc.java_time.temporal.chrono_unit.centuries,cljc.java_time.temporal.chrono_unit.decades,cljc.java_time.temporal.chrono_unit.hours,cljc.java_time.temporal.chrono_unit.years,cljc.java_time.temporal.chrono_unit.minutes,cljc.java_time.temporal.chrono_unit.eras,cljc.java_time.temporal.chrono_unit.millennia,cljc.java_time.temporal.chrono_unit.weeks,cljc.java_time.temporal.chrono_unit.millis]);
tick.core.reverse_unit_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,tick.core.unit_map)));
/**
 * the units contained within TemporalAmount x.
 *   
 *   Seconds and nanos for Duration.
 *   Years, months, days for Period
 *   
 */
tick.core.units = (function tick$core$units(x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5628__auto__ = (function tick$core$units_$_iter__90172(s__90173){
return (new cljs.core.LazySeq(null,(function (){
var s__90173__$1 = s__90173;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__90173__$1);
if(temp__5825__auto__){
var s__90173__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__90173__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__90173__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__90175 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__90174 = (0);
while(true){
if((i__90174 < size__5627__auto__)){
var tu = cljs.core._nth(c__5626__auto__,i__90174);
var k = (tick.core.reverse_unit_map.cljs$core$IFn$_invoke$arity$1 ? tick.core.reverse_unit_map.cljs$core$IFn$_invoke$arity$1(tu) : tick.core.reverse_unit_map.call(null,tu));
if(cljs.core.truth_(k)){
cljs.core.chunk_append(b__90175,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljc.java_time.temporal.temporal_amount.get(x,tu)], null));

var G__90370 = (i__90174 + (1));
i__90174 = G__90370;
continue;
} else {
var G__90371 = (i__90174 + (1));
i__90174 = G__90371;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__90175),tick$core$units_$_iter__90172(cljs.core.chunk_rest(s__90173__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__90175),null);
}
} else {
var tu = cljs.core.first(s__90173__$2);
var k = (tick.core.reverse_unit_map.cljs$core$IFn$_invoke$arity$1 ? tick.core.reverse_unit_map.cljs$core$IFn$_invoke$arity$1(tu) : tick.core.reverse_unit_map.call(null,tu));
if(cljs.core.truth_(k)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljc.java_time.temporal.temporal_amount.get(x,tu)], null),tick$core$units_$_iter__90172(cljs.core.rest(s__90173__$2)));
} else {
var G__90373 = cljs.core.rest(s__90173__$2);
s__90173__$1 = G__90373;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljc.java_time.temporal.temporal_amount.get_units(x));
})());
});
(java.time.Instant.prototype.tick$protocols$ITruncate$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Instant.prototype.tick$protocols$ITruncate$truncate$arity$2 = (function (x,u){
var x__$1 = this;
return cljc.java_time.instant.truncated_to(x__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$2(tick.core.unit_map,u));
}));

(java.time.LocalDateTime.prototype.tick$protocols$ITruncate$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDateTime.prototype.tick$protocols$ITruncate$truncate$arity$2 = (function (x,u){
var x__$1 = this;
return cljc.java_time.local_date_time.truncated_to(x__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$2(tick.core.unit_map,u));
}));

(java.time.ZonedDateTime.prototype.tick$protocols$ITruncate$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.ZonedDateTime.prototype.tick$protocols$ITruncate$truncate$arity$2 = (function (x,u){
var x__$1 = this;
return cljc.java_time.zoned_date_time.truncated_to(x__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$2(tick.core.unit_map,u));
}));

(java.time.OffsetDateTime.prototype.tick$protocols$ITruncate$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.OffsetDateTime.prototype.tick$protocols$ITruncate$truncate$arity$2 = (function (x,u){
var x__$1 = this;
return cljc.java_time.offset_date_time.truncated_to(x__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$2(tick.core.unit_map,u));
}));

(java.time.LocalTime.prototype.tick$protocols$ITruncate$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalTime.prototype.tick$protocols$ITruncate$truncate$arity$2 = (function (x,u){
var x__$1 = this;
return cljc.java_time.local_time.truncated_to(x__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$2(tick.core.unit_map,u));
}));
/**
 * Returns a copy of x truncated to the specified unit.
 */
tick.core.truncate = (function tick$core$truncate(x,u){
if(cljs.core.contains_QMARK_(tick.core.unit_map,u)){
} else {
throw (new Error("Assert failed: (contains? unit-map u)"));
}

return tick.protocols.truncate(x,u);
});
(java.time.Duration.prototype.tick$protocols$IConversion$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Duration.prototype.tick$protocols$IConversion$instant$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.instant.of_epoch_milli(tick.protocols.millis(d__$1));
}));

(java.time.Duration.prototype.tick$protocols$IConversion$inst$arity$1 = (function (d){
var d__$1 = this;
return tick.protocols.inst(tick.protocols.instant(d__$1));
}));
(java.time.Duration.prototype.tick$protocols$ITimeLength$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Duration.prototype.tick$protocols$ITimeLength$nanos$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.duration.to_nanos(d__$1);
}));

(java.time.Duration.prototype.tick$protocols$ITimeLength$micros$arity$1 = (function (d){
var d__$1 = this;
return (tick.protocols.nanos(d__$1) / (1000));
}));

(java.time.Duration.prototype.tick$protocols$ITimeLength$millis$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.duration.to_millis(d__$1);
}));

(java.time.Duration.prototype.tick$protocols$ITimeLength$seconds$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.duration.get_seconds(d__$1);
}));

(java.time.Duration.prototype.tick$protocols$ITimeLength$minutes$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.duration.to_minutes(d__$1);
}));

(java.time.Duration.prototype.tick$protocols$ITimeLength$hours$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.duration.to_hours(d__$1);
}));

(java.time.Duration.prototype.tick$protocols$ITimeLength$days$arity$1 = (function (d){
var d__$1 = this;
return cljc.java_time.duration.to_days(d__$1);
}));

(java.time.Period.prototype.tick$protocols$ITimeLength$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Period.prototype.tick$protocols$ITimeLength$days$arity$1 = (function (p){
var p__$1 = this;
return cljc.java_time.period.get_days(p__$1);
}));

(java.time.Period.prototype.tick$protocols$ITimeLength$months$arity$1 = (function (p){
var p__$1 = this;
return cljc.java_time.period.get_months(p__$1);
}));

(java.time.Period.prototype.tick$protocols$ITimeLength$years$arity$1 = (function (p){
var p__$1 = this;
return cljc.java_time.period.get_years(p__$1);
}));
tick.core.new_duration = (function tick$core$new_duration(n,u){
if(cljs.core.contains_QMARK_(tick.core.unit_map,u)){
} else {
throw (new Error("Assert failed: (contains? unit-map u)"));
}

var unit = (tick.core.unit_map.cljs$core$IFn$_invoke$arity$1 ? tick.core.unit_map.cljs$core$IFn$_invoke$arity$1(u) : tick.core.unit_map.call(null,u));
return cljc.java_time.duration.of(n,unit);
});
tick.core.new_period = (function tick$core$new_period(n,u){
var G__90176 = u;
var G__90176__$1 = (((G__90176 instanceof cljs.core.Keyword))?G__90176.fqn:null);
switch (G__90176__$1) {
case "days":
return cljc.java_time.period.of_days(n);

break;
case "weeks":
return cljc.java_time.period.of_weeks(n);

break;
case "months":
return cljc.java_time.period.of_months(n);

break;
case "years":
return cljc.java_time.period.of_years(n);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__90176__$1))));

}
});
/**
 * Takes a java.lang.Long n and returns a duration of n nanoseconds.
 */
tick.core.of_nanos = (function tick$core$of_nanos(n){
return tick.core.new_duration(n,new cljs.core.Keyword(null,"nanos","nanos",-1777059258));
});
/**
 * Takes a java.lang.Long n and returns a duration of n micros.
 */
tick.core.of_micros = (function tick$core$of_micros(n){
return tick.core.new_duration(n,new cljs.core.Keyword(null,"micros","micros",420024622));
});
/**
 * Takes a java.lang.Long n and returns a duration of n micros.
 */
tick.core.of_millis = (function tick$core$of_millis(n){
return tick.core.new_duration(n,new cljs.core.Keyword(null,"millis","millis",-1338288387));
});
/**
 * Takes a java.lang.Long n and returns a duration of n seconds.
 */
tick.core.of_seconds = (function tick$core$of_seconds(n){
return tick.core.new_duration(n,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
});
/**
 * Takes a java.lang.Long n and returns a duration of n minutes.
 */
tick.core.of_minutes = (function tick$core$of_minutes(n){
return tick.core.new_duration(n,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
});
/**
 * Takes a java.lang.Long n and returns a duration of n hours.
 */
tick.core.of_hours = (function tick$core$of_hours(n){
return tick.core.new_duration(n,new cljs.core.Keyword(null,"hours","hours",58380855));
});
/**
 * Takes a java.lang.Long n and returns a period of n days.
 */
tick.core.of_days = (function tick$core$of_days(n){
return tick.core.new_period(n,new cljs.core.Keyword(null,"days","days",-1394072564));
});
/**
 * Takes a java.lang.Long n and returns a period of n months.
 */
tick.core.of_months = (function tick$core$of_months(n){
return tick.core.new_period(n,new cljs.core.Keyword(null,"months","months",-45571637));
});
/**
 * Takes a java.lang.Long n and returns a period of n years.
 */
tick.core.of_years = (function tick$core$of_years(n){
return tick.core.new_period(n,new cljs.core.Keyword(null,"years","years",-1298579689));
});
(java.time.Duration.prototype.tick$protocols$IExtraction$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Duration.prototype.tick$protocols$IExtraction$zone_offset$arity$1 = (function (_d){
var _d__$1 = this;
return cljc.java_time.zone_offset.of_total_seconds(tick.core.new_duration((1),new cljs.core.Keyword(null,"seconds","seconds",-445266194)));
}));
tick.core.current_clock = (function tick$core$current_clock(){
return tick.core._STAR_clock_STAR_;
});
(java.time.Instant.prototype.tick$protocols$IClock$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Instant.prototype.tick$protocols$IClock$clock$arity$1 = (function (i){
var i__$1 = this;
return cljc.java_time.clock.fixed(i__$1,tick.core.current_zone());
}));

(java.time.ZonedDateTime.prototype.tick$protocols$IClock$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.ZonedDateTime.prototype.tick$protocols$IClock$clock$arity$1 = (function (zdt){
var zdt__$1 = this;
return cljc.java_time.clock.fixed(cljc.java_time.zoned_date_time.to_instant(zdt__$1),cljc.java_time.zoned_date_time.get_zone(zdt__$1));
}));

(java.time.LocalDateTime.prototype.tick$protocols$IClock$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDateTime.prototype.tick$protocols$IClock$clock$arity$1 = (function (o){
var o__$1 = this;
return tick.protocols.clock(tick.protocols.zoned_date_time(o__$1));
}));

(java.time.OffsetDateTime.prototype.tick$protocols$IClock$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.OffsetDateTime.prototype.tick$protocols$IClock$clock$arity$1 = (function (zdt){
var zdt__$1 = this;
return cljc.java_time.clock.fixed(cljc.java_time.offset_date_time.to_instant(zdt__$1),cljc.java_time.offset_date_time.get_offset(zdt__$1));
}));

(java.time.Clock.prototype.tick$protocols$IClock$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Clock.prototype.tick$protocols$IClock$clock$arity$1 = (function (clk){
var clk__$1 = this;
return clk__$1;
}));

(java.time.ZoneId.prototype.tick$protocols$IClock$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.ZoneId.prototype.tick$protocols$IClock$clock$arity$1 = (function (z){
var z__$1 = this;
return cljc.java_time.clock.system(z__$1);
}));
/**
 * Obtains a clock that returns instants from the specified clock truncated to the nearest occurrence of the specified duration.
 */
tick.core.tick_resolution = (function tick$core$tick_resolution(var_args){
var G__90178 = arguments.length;
switch (G__90178) {
case 1:
return tick.core.tick_resolution.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.core.tick_resolution.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.tick_resolution.cljs$core$IFn$_invoke$arity$1 = (function (clk){
return tick.core.tick_resolution.cljs$core$IFn$_invoke$arity$2(clk,tick.core.new_duration((1),new cljs.core.Keyword(null,"seconds","seconds",-445266194)));
}));

(tick.core.tick_resolution.cljs$core$IFn$_invoke$arity$2 = (function (clk,dur){
return cljc.java_time.clock.tick(clk,dur);
}));

(tick.core.tick_resolution.cljs$lang$maxFixedArity = 2);

(java.time.Clock.prototype.tick$protocols$IConversion$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Clock.prototype.tick$protocols$IConversion$instant$arity$1 = (function (clk){
var clk__$1 = this;
return cljc.java_time.clock.instant(clk__$1);
}));
(java.time.Clock.prototype.tick$protocols$IExtraction$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Clock.prototype.tick$protocols$IExtraction$zone$arity$1 = (function (clk){
var clk__$1 = this;
return cljc.java_time.clock.get_zone(clk__$1);
}));
(java.time.Clock.prototype.tick$protocols$ITimeReify$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Clock.prototype.tick$protocols$ITimeReify$in$arity$2 = (function (clk,zone){
var clk__$1 = this;
return cljc.java_time.clock.with_zone(clk__$1,tick.protocols.zone(zone));
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {tick.protocols.IClock}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
tick.core.AtomicClock = (function (_STAR_clock,__meta,__extmap,__hash){
this._STAR_clock = _STAR_clock;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(tick.core.AtomicClock.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(tick.core.AtomicClock.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k90180,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__90184 = k90180;
var G__90184__$1 = (((G__90184 instanceof cljs.core.Keyword))?G__90184.fqn:null);
switch (G__90184__$1) {
case "*clock":
return self__._STAR_clock;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k90180,else__5451__auto__);

}
}));

(tick.core.AtomicClock.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__90185){
var vec__90186 = p__90185;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90186,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90186,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(tick.core.AtomicClock.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#tick.core.AtomicClock{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"*clock","*clock",-1520020371),self__._STAR_clock],null))], null),self__.__extmap));
}));

(tick.core.AtomicClock.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__90179){
var self__ = this;
var G__90179__$1 = this;
return (new cljs.core.RecordIter((0),G__90179__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*clock","*clock",-1520020371)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(tick.core.AtomicClock.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(tick.core.AtomicClock.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new tick.core.AtomicClock(self__._STAR_clock,self__.__meta,self__.__extmap,self__.__hash));
}));

(tick.core.AtomicClock.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(tick.core.AtomicClock.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (1122898333 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(tick.core.AtomicClock.prototype.tick$protocols$IClock$ = cljs.core.PROTOCOL_SENTINEL);

(tick.core.AtomicClock.prototype.tick$protocols$IClock$clock$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__._STAR_clock);
}));

(tick.core.AtomicClock.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this90181,other90182){
var self__ = this;
var this90181__$1 = this;
return (((!((other90182 == null)))) && ((((this90181__$1.constructor === other90182.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this90181__$1._STAR_clock,other90182._STAR_clock)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this90181__$1.__extmap,other90182.__extmap)))))));
}));

(tick.core.AtomicClock.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*clock","*clock",-1520020371),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new tick.core.AtomicClock(self__._STAR_clock,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(tick.core.AtomicClock.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k90180){
var self__ = this;
var this__5455__auto____$1 = this;
var G__90189 = k90180;
var G__90189__$1 = (((G__90189 instanceof cljs.core.Keyword))?G__90189.fqn:null);
switch (G__90189__$1) {
case "*clock":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k90180);

}
}));

(tick.core.AtomicClock.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__90179){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__90190 = cljs.core.keyword_identical_QMARK_;
var expr__90191 = k__5457__auto__;
if(cljs.core.truth_((pred__90190.cljs$core$IFn$_invoke$arity$2 ? pred__90190.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*clock","*clock",-1520020371),expr__90191) : pred__90190.call(null,new cljs.core.Keyword(null,"*clock","*clock",-1520020371),expr__90191)))){
return (new tick.core.AtomicClock(G__90179,self__.__meta,self__.__extmap,null));
} else {
return (new tick.core.AtomicClock(self__._STAR_clock,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__90179),null));
}
}));

(tick.core.AtomicClock.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"*clock","*clock",-1520020371),self__._STAR_clock,null))], null),self__.__extmap));
}));

(tick.core.AtomicClock.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__90179){
var self__ = this;
var this__5447__auto____$1 = this;
return (new tick.core.AtomicClock(self__._STAR_clock,G__90179,self__.__extmap,self__.__hash));
}));

(tick.core.AtomicClock.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(tick.core.AtomicClock.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return tick.protocols.instant(cljs.core.deref(self__._STAR_clock));
}));

(tick.core.AtomicClock.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*clock","*clock",120511156,null)], null);
}));

(tick.core.AtomicClock.cljs$lang$type = true);

(tick.core.AtomicClock.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"tick.core/AtomicClock",null,(1),null));
}));

(tick.core.AtomicClock.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"tick.core/AtomicClock");
}));

/**
 * Positional factory function for tick.core/AtomicClock.
 */
tick.core.__GT_AtomicClock = (function tick$core$__GT_AtomicClock(_STAR_clock){
return (new tick.core.AtomicClock(_STAR_clock,null,null,null));
});

/**
 * Factory function for tick.core/AtomicClock, taking a map of keywords to field values.
 */
tick.core.map__GT_AtomicClock = (function tick$core$map__GT_AtomicClock(G__90183){
var extmap__5490__auto__ = (function (){var G__90193 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__90183,new cljs.core.Keyword(null,"*clock","*clock",-1520020371));
if(cljs.core.record_QMARK_(G__90183)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__90193);
} else {
return G__90193;
}
})();
return (new tick.core.AtomicClock(new cljs.core.Keyword(null,"*clock","*clock",-1520020371).cljs$core$IFn$_invoke$arity$1(G__90183),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

/**
 * construct atomic clock
 */
tick.core.atom = (function tick$core$atom(var_args){
var G__90195 = arguments.length;
switch (G__90195) {
case 1:
return tick.core.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return tick.core.atom.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.atom.cljs$core$IFn$_invoke$arity$1 = (function (clk){
return tick.core.__GT_AtomicClock(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(clk));
}));

(tick.core.atom.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.atom.cljs$core$IFn$_invoke$arity$1(tick.core.current_clock());
}));

(tick.core.atom.cljs$lang$maxFixedArity = 1);

/**
 * swap! on atomic clock 'at' 
 */
tick.core.swap_BANG_ = (function tick$core$swap_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___90380 = arguments.length;
var i__5877__auto___90381 = (0);
while(true){
if((i__5877__auto___90381 < len__5876__auto___90380)){
args__5882__auto__.push((arguments[i__5877__auto___90381]));

var G__90382 = (i__5877__auto___90381 + (1));
i__5877__auto___90381 = G__90382;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return tick.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(tick.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (at,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,new cljs.core.Keyword(null,"*clock","*clock",-1520020371).cljs$core$IFn$_invoke$arity$1(at),f,args);
}));

(tick.core.swap_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tick.core.swap_BANG_.cljs$lang$applyTo = (function (seq90196){
var G__90197 = cljs.core.first(seq90196);
var seq90196__$1 = cljs.core.next(seq90196);
var G__90198 = cljs.core.first(seq90196__$1);
var seq90196__$2 = cljs.core.next(seq90196__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__90197,G__90198,seq90196__$2);
}));

/**
 * swap-vals! on atomic clock 'at' 
 */
tick.core.swap_vals_BANG_ = (function tick$core$swap_vals_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___90383 = arguments.length;
var i__5877__auto___90384 = (0);
while(true){
if((i__5877__auto___90384 < len__5876__auto___90383)){
args__5882__auto__.push((arguments[i__5877__auto___90384]));

var G__90385 = (i__5877__auto___90384 + (1));
i__5877__auto___90384 = G__90385;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return tick.core.swap_vals_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(tick.core.swap_vals_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (at,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_vals_BANG_,new cljs.core.Keyword(null,"*clock","*clock",-1520020371).cljs$core$IFn$_invoke$arity$1(at),f,args);
}));

(tick.core.swap_vals_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tick.core.swap_vals_BANG_.cljs$lang$applyTo = (function (seq90199){
var G__90200 = cljs.core.first(seq90199);
var seq90199__$1 = cljs.core.next(seq90199);
var G__90201 = cljs.core.first(seq90199__$1);
var seq90199__$2 = cljs.core.next(seq90199__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__90200,G__90201,seq90199__$2);
}));

/**
 * cas on atomic clock 'at' 
 */
tick.core.compare_and_set_BANG_ = (function tick$core$compare_and_set_BANG_(at,oldval,newval){
return cljs.core.compare_and_set_BANG_(new cljs.core.Keyword(null,"*clock","*clock",-1520020371).cljs$core$IFn$_invoke$arity$1(at),oldval,newval);
});
/**
 * reset! on atomic clock 'at' 
 */
tick.core.reset_BANG_ = (function tick$core$reset_BANG_(at,newval){
return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"*clock","*clock",-1520020371).cljs$core$IFn$_invoke$arity$1(at),newval);
});
/**
 * reset-vals! on atomic clock 'at' 
 */
tick.core.reset_vals_BANG_ = (function tick$core$reset_vals_BANG_(at,newval){
return cljs.core.reset_vals_BANG_(new cljs.core.Keyword(null,"*clock","*clock",-1520020371).cljs$core$IFn$_invoke$arity$1(at),newval);
});
(java.time.Duration.prototype.tick$protocols$ITimeArithmetic$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Duration.prototype.tick$protocols$ITimeArithmetic$_PLUS_$arity$2 = (function (t,d){
var t__$1 = this;
return cljc.java_time.duration.plus.cljs$core$IFn$_invoke$arity$2(t__$1,d);
}));

(java.time.Duration.prototype.tick$protocols$ITimeArithmetic$_$arity$2 = (function (t,d){
var t__$1 = this;
return cljc.java_time.duration.minus.cljs$core$IFn$_invoke$arity$2(t__$1,d);
}));

(java.time.Period.prototype.tick$protocols$ITimeArithmetic$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Period.prototype.tick$protocols$ITimeArithmetic$_PLUS_$arity$2 = (function (t,d){
var t__$1 = this;
return cljc.java_time.period.plus(t__$1,d);
}));

(java.time.Period.prototype.tick$protocols$ITimeArithmetic$_$arity$2 = (function (t,d){
var t__$1 = this;
return cljc.java_time.period.minus(t__$1,d);
}));
/**
 * Return the duration as a negative duration
 */
tick.core.negated = (function tick$core$negated(d){
return cljc.java_time.duration.negated(d);
});
/**
 * Sum amounts of time
 */
tick.core._PLUS_ = (function tick$core$_PLUS_(var_args){
var G__90205 = arguments.length;
switch (G__90205) {
case 0:
return tick.core._PLUS_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core._PLUS_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5901__auto__ = [];
var len__5876__auto___90387 = arguments.length;
var i__5877__auto___90388 = (0);
while(true){
if((i__5877__auto___90388 < len__5876__auto___90387)){
args_arr__5901__auto__.push((arguments[i__5877__auto___90388]));

var G__90389 = (i__5877__auto___90388 + (1));
i__5877__auto___90388 = G__90389;
continue;
} else {
}
break;
}

var argseq__5902__auto__ = ((((1) < args_arr__5901__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5901__auto__.slice((1)),(0),null)):null);
return tick.core._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5902__auto__);

}
});

(tick.core._PLUS_.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljc.java_time.duration.zero;
}));

(tick.core._PLUS_.cljs$core$IFn$_invoke$arity$1 = (function (arg){
return arg;
}));

(tick.core._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (arg,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.protocols._PLUS_,arg,args);
}));

/** @this {Function} */
(tick.core._PLUS_.cljs$lang$applyTo = (function (seq90203){
var G__90204 = cljs.core.first(seq90203);
var seq90203__$1 = cljs.core.next(seq90203);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__90204,seq90203__$1);
}));

(tick.core._PLUS_.cljs$lang$maxFixedArity = (1));

/**
 * Subtract amounts of time.
 */
tick.core._ = (function tick$core$_(var_args){
var G__90209 = arguments.length;
switch (G__90209) {
case 0:
return tick.core._.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core._.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5901__auto__ = [];
var len__5876__auto___90391 = arguments.length;
var i__5877__auto___90392 = (0);
while(true){
if((i__5877__auto___90392 < len__5876__auto___90391)){
args_arr__5901__auto__.push((arguments[i__5877__auto___90392]));

var G__90393 = (i__5877__auto___90392 + (1));
i__5877__auto___90392 = G__90393;
continue;
} else {
}
break;
}

var argseq__5902__auto__ = ((((1) < args_arr__5901__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5901__auto__.slice((1)),(0),null)):null);
return tick.core._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5902__auto__);

}
});

(tick.core._.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljc.java_time.duration.zero;
}));

(tick.core._.cljs$core$IFn$_invoke$arity$1 = (function (arg){
return tick.core.negated(arg);
}));

(tick.core._.cljs$core$IFn$_invoke$arity$variadic = (function (arg,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.protocols._,arg,args);
}));

/** @this {Function} */
(tick.core._.cljs$lang$applyTo = (function (seq90207){
var G__90208 = cljs.core.first(seq90207);
var seq90207__$1 = cljs.core.next(seq90207);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__90208,seq90207__$1);
}));

(tick.core._.cljs$lang$maxFixedArity = (1));

(java.time.YearMonth.prototype.tick$protocols$ITimeShift$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.YearMonth.prototype.tick$protocols$ITimeShift$forward_number$arity$2 = (function (t,n){
var t__$1 = this;
return cljc.java_time.year_month.plus_months(t__$1,n);
}));

(java.time.YearMonth.prototype.tick$protocols$ITimeShift$backward_number$arity$2 = (function (t,n){
var t__$1 = this;
return cljc.java_time.year_month.minus_months(t__$1,n);
}));

(java.time.YearMonth.prototype.tick$protocols$ITimeShift$forward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return cljc.java_time.year_month.plus.cljs$core$IFn$_invoke$arity$2(t__$1,d);
}));

(java.time.YearMonth.prototype.tick$protocols$ITimeShift$backward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return cljc.java_time.year_month.minus.cljs$core$IFn$_invoke$arity$2(t__$1,d);
}));

(java.time.Year.prototype.tick$protocols$ITimeShift$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Year.prototype.tick$protocols$ITimeShift$forward_number$arity$2 = (function (t,n){
var t__$1 = this;
return cljc.java_time.year.plus_years(t__$1,n);
}));

(java.time.Year.prototype.tick$protocols$ITimeShift$backward_number$arity$2 = (function (t,n){
var t__$1 = this;
return cljc.java_time.year.minus_years(t__$1,n);
}));

(java.time.Year.prototype.tick$protocols$ITimeShift$forward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return cljc.java_time.year.plus.cljs$core$IFn$_invoke$arity$2(t__$1,d);
}));

(java.time.Year.prototype.tick$protocols$ITimeShift$backward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return cljc.java_time.year.minus.cljs$core$IFn$_invoke$arity$2(t__$1,d);
}));

(java.time.ZonedDateTime.prototype.tick$protocols$ITimeShift$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.ZonedDateTime.prototype.tick$protocols$ITimeShift$forward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return cljc.java_time.zoned_date_time.plus.cljs$core$IFn$_invoke$arity$2(t__$1,d);
}));

(java.time.ZonedDateTime.prototype.tick$protocols$ITimeShift$backward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return cljc.java_time.zoned_date_time.minus.cljs$core$IFn$_invoke$arity$2(t__$1,d);
}));

(java.time.Instant.prototype.tick$protocols$ITimeShift$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Instant.prototype.tick$protocols$ITimeShift$forward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return cljc.java_time.instant.plus.cljs$core$IFn$_invoke$arity$2(t__$1,d);
}));

(java.time.Instant.prototype.tick$protocols$ITimeShift$backward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return cljc.java_time.instant.minus.cljs$core$IFn$_invoke$arity$2(t__$1,d);
}));

(Date.prototype.tick$protocols$ITimeShift$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.tick$protocols$ITimeShift$forward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return tick.protocols.inst(tick.protocols.forward_duration(tick.protocols.instant(t__$1),d));
}));

(Date.prototype.tick$protocols$ITimeShift$backward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return tick.protocols.inst(tick.protocols.backward_duration(tick.protocols.instant(t__$1),d));
}));

(java.time.LocalDate.prototype.tick$protocols$ITimeShift$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDate.prototype.tick$protocols$ITimeShift$forward_number$arity$2 = (function (t,n){
var t__$1 = this;
return cljc.java_time.local_date.plus_days(t__$1,n);
}));

(java.time.LocalDate.prototype.tick$protocols$ITimeShift$backward_number$arity$2 = (function (t,n){
var t__$1 = this;
return cljc.java_time.local_date.minus_days(t__$1,n);
}));

(java.time.LocalDate.prototype.tick$protocols$ITimeShift$forward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return cljc.java_time.local_date.plus.cljs$core$IFn$_invoke$arity$2(t__$1,d);
}));

(java.time.LocalDate.prototype.tick$protocols$ITimeShift$backward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return cljc.java_time.local_date.minus.cljs$core$IFn$_invoke$arity$2(t__$1,d);
}));

(java.time.LocalTime.prototype.tick$protocols$ITimeShift$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalTime.prototype.tick$protocols$ITimeShift$forward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return cljc.java_time.local_time.plus.cljs$core$IFn$_invoke$arity$2(t__$1,d);
}));

(java.time.LocalTime.prototype.tick$protocols$ITimeShift$backward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return cljc.java_time.local_time.minus.cljs$core$IFn$_invoke$arity$2(t__$1,d);
}));

(java.time.OffsetDateTime.prototype.tick$protocols$ITimeShift$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.OffsetDateTime.prototype.tick$protocols$ITimeShift$forward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return cljc.java_time.offset_date_time.plus.cljs$core$IFn$_invoke$arity$2(t__$1,d);
}));

(java.time.OffsetDateTime.prototype.tick$protocols$ITimeShift$backward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return cljc.java_time.offset_date_time.minus.cljs$core$IFn$_invoke$arity$2(t__$1,d);
}));

(java.time.LocalDateTime.prototype.tick$protocols$ITimeShift$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDateTime.prototype.tick$protocols$ITimeShift$forward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return cljc.java_time.local_date_time.plus.cljs$core$IFn$_invoke$arity$2(t__$1,d);
}));

(java.time.LocalDateTime.prototype.tick$protocols$ITimeShift$backward_duration$arity$2 = (function (t,d){
var t__$1 = this;
return cljc.java_time.local_date_time.minus.cljs$core$IFn$_invoke$arity$2(t__$1,d);
}));

(java.time.Clock.prototype.tick$protocols$ITimeShift$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Clock.prototype.tick$protocols$ITimeShift$forward_duration$arity$2 = (function (clk,d){
var clk__$1 = this;
return cljc.java_time.clock.offset(clk__$1,d);
}));

(java.time.Clock.prototype.tick$protocols$ITimeShift$backward_duration$arity$2 = (function (clk,d){
var clk__$1 = this;
return cljc.java_time.clock.offset(clk__$1,tick.core.negated(d));
}));
/**
 * shift Temporal forward
 */
tick.core._GT__GT_ = (function tick$core$_GT__GT_(t,n_or_d){
if(typeof n_or_d === 'number'){
return tick.protocols.forward_number(t,n_or_d);
} else {
return tick.protocols.forward_duration(t,n_or_d);
}
});
/**
 * shift Temporal backward
 */
tick.core._LT__LT_ = (function tick$core$_LT__LT_(t,n_or_d){
if(typeof n_or_d === 'number'){
return tick.protocols.backward_number(t,n_or_d);
} else {
return tick.protocols.backward_duration(t,n_or_d);
}
});
(java.time.Instant.prototype.tick$protocols$ITimeRangeable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Instant.prototype.tick$protocols$ITimeRangeable$range$arity$1 = (function (from){
var from__$1 = this;
return cljs.core.iterate((function (p1__90210_SHARP_){
return cljc.java_time.instant.plus_seconds(p1__90210_SHARP_,(1));
}),from__$1);
}));

(java.time.Instant.prototype.tick$protocols$ITimeRangeable$range$arity$2 = (function (from,to){
var from__$1 = this;
var G__90215 = cljs.core.iterate((function (p1__90211_SHARP_){
return cljc.java_time.instant.plus_seconds(p1__90211_SHARP_,(1));
}),from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__90212_SHARP_){
return tick.protocols._LT_(p1__90212_SHARP_,to);
}),G__90215);
} else {
return G__90215;
}
}));

(java.time.Instant.prototype.tick$protocols$ITimeRangeable$range$arity$3 = (function (from,to,step){
var from__$1 = this;
var G__90216 = cljs.core.iterate((function (p1__90213_SHARP_){
return cljc.java_time.instant.plus.cljs$core$IFn$_invoke$arity$2(p1__90213_SHARP_,step);
}),from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__90214_SHARP_){
return tick.protocols._LT_(p1__90214_SHARP_,to);
}),G__90216);
} else {
return G__90216;
}
}));
(java.time.ZonedDateTime.prototype.tick$protocols$ITimeRangeable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.ZonedDateTime.prototype.tick$protocols$ITimeRangeable$range$arity$1 = (function (from){
var from__$1 = this;
return cljs.core.iterate((function (p1__90217_SHARP_){
return cljc.java_time.zoned_date_time.plus_seconds(p1__90217_SHARP_,(1));
}),from__$1);
}));

(java.time.ZonedDateTime.prototype.tick$protocols$ITimeRangeable$range$arity$2 = (function (from,to){
var from__$1 = this;
var G__90222 = cljs.core.iterate((function (p1__90218_SHARP_){
return cljc.java_time.zoned_date_time.plus_seconds(p1__90218_SHARP_,(1));
}),from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__90219_SHARP_){
return tick.protocols._LT_(p1__90219_SHARP_,to);
}),G__90222);
} else {
return G__90222;
}
}));

(java.time.ZonedDateTime.prototype.tick$protocols$ITimeRangeable$range$arity$3 = (function (from,to,step){
var from__$1 = this;
var G__90223 = cljs.core.iterate((function (p1__90220_SHARP_){
return cljc.java_time.zoned_date_time.plus.cljs$core$IFn$_invoke$arity$2(p1__90220_SHARP_,step);
}),from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__90221_SHARP_){
return tick.protocols._LT_(p1__90221_SHARP_,to);
}),G__90223);
} else {
return G__90223;
}
}));
(java.time.LocalDate.prototype.tick$protocols$ITimeRangeable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDate.prototype.tick$protocols$ITimeRangeable$range$arity$1 = (function (from){
var from__$1 = this;
return cljs.core.iterate((function (p1__90224_SHARP_){
return cljc.java_time.local_date.plus_days(p1__90224_SHARP_,(1));
}),from__$1);
}));

(java.time.LocalDate.prototype.tick$protocols$ITimeRangeable$range$arity$2 = (function (from,to){
var from__$1 = this;
var G__90229 = cljs.core.iterate((function (p1__90225_SHARP_){
return cljc.java_time.local_date.plus_days(p1__90225_SHARP_,(1));
}),from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__90226_SHARP_){
return tick.protocols._LT_(p1__90226_SHARP_,to);
}),G__90229);
} else {
return G__90229;
}
}));

(java.time.LocalDate.prototype.tick$protocols$ITimeRangeable$range$arity$3 = (function (from,to,step){
var from__$1 = this;
var G__90230 = cljs.core.iterate((function (p1__90227_SHARP_){
return cljc.java_time.local_date.plus.cljs$core$IFn$_invoke$arity$2(p1__90227_SHARP_,step);
}),from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__90228_SHARP_){
return tick.protocols._LT_(p1__90228_SHARP_,to);
}),G__90230);
} else {
return G__90230;
}
}));
tick.core.inc = (function tick$core$inc(t){
return tick.protocols.forward_number(t,(1));
});
tick.core.dec = (function tick$core$dec(t){
return tick.protocols.backward_number(t,(1));
});
tick.core.tomorrow = (function tick$core$tomorrow(){
return tick.protocols.forward_number(tick.core.today(),(1));
});
tick.core.yesterday = (function tick$core$yesterday(){
return tick.protocols.backward_number(tick.core.today(),(1));
});
(java.time.LocalDateTime.prototype.tick$protocols$ITimeRangeable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDateTime.prototype.tick$protocols$ITimeRangeable$range$arity$1 = (function (from){
var from__$1 = this;
return cljs.core.iterate((function (p1__90231_SHARP_){
return cljc.java_time.local_date_time.plus_seconds(p1__90231_SHARP_,(1));
}),from__$1);
}));

(java.time.LocalDateTime.prototype.tick$protocols$ITimeRangeable$range$arity$2 = (function (from,to){
var from__$1 = this;
var G__90236 = cljs.core.iterate((function (p1__90232_SHARP_){
return cljc.java_time.local_date_time.plus_seconds(p1__90232_SHARP_,(1));
}),from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__90233_SHARP_){
return tick.protocols._LT_(p1__90233_SHARP_,to);
}),G__90236);
} else {
return G__90236;
}
}));

(java.time.LocalDateTime.prototype.tick$protocols$ITimeRangeable$range$arity$3 = (function (from,to,step){
var from__$1 = this;
var G__90237 = cljs.core.iterate((function (p1__90234_SHARP_){
return cljc.java_time.local_date_time.plus.cljs$core$IFn$_invoke$arity$2(p1__90234_SHARP_,step);
}),from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__90235_SHARP_){
return tick.protocols._LT_(p1__90235_SHARP_,to);
}),G__90237);
} else {
return G__90237;
}
}));
(java.time.YearMonth.prototype.tick$protocols$ITimeRangeable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.YearMonth.prototype.tick$protocols$ITimeRangeable$range$arity$1 = (function (from){
var from__$1 = this;
return cljs.core.iterate((function (p1__90238_SHARP_){
return cljc.java_time.year_month.plus_months(p1__90238_SHARP_,(1));
}),from__$1);
}));

(java.time.YearMonth.prototype.tick$protocols$ITimeRangeable$range$arity$2 = (function (from,to){
var from__$1 = this;
var G__90243 = cljs.core.iterate((function (p1__90239_SHARP_){
return cljc.java_time.year_month.plus_months(p1__90239_SHARP_,(1));
}),from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__90240_SHARP_){
return tick.protocols._LT_(p1__90240_SHARP_,to);
}),G__90243);
} else {
return G__90243;
}
}));

(java.time.YearMonth.prototype.tick$protocols$ITimeRangeable$range$arity$3 = (function (from,to,step){
var from__$1 = this;
var G__90244 = cljs.core.iterate((function (p1__90241_SHARP_){
return cljc.java_time.year_month.plus.cljs$core$IFn$_invoke$arity$2(p1__90241_SHARP_,step);
}),from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__90242_SHARP_){
return tick.protocols._LT_(p1__90242_SHARP_,to);
}),G__90244);
} else {
return G__90244;
}
}));
(java.time.Year.prototype.tick$protocols$ITimeRangeable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Year.prototype.tick$protocols$ITimeRangeable$range$arity$1 = (function (from){
var from__$1 = this;
return cljs.core.iterate((function (p1__90245_SHARP_){
return cljc.java_time.year.plus_years(p1__90245_SHARP_,(1));
}),from__$1);
}));

(java.time.Year.prototype.tick$protocols$ITimeRangeable$range$arity$2 = (function (from,to){
var from__$1 = this;
var G__90250 = cljs.core.iterate((function (p1__90246_SHARP_){
return cljc.java_time.year.plus_years(p1__90246_SHARP_,(1));
}),from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__90247_SHARP_){
return tick.protocols._LT_(p1__90247_SHARP_,to);
}),G__90250);
} else {
return G__90250;
}
}));

(java.time.Year.prototype.tick$protocols$ITimeRangeable$range$arity$3 = (function (from,to,step){
var from__$1 = this;
var G__90251 = cljs.core.iterate((function (p1__90248_SHARP_){
return cljc.java_time.year.plus.cljs$core$IFn$_invoke$arity$2(p1__90248_SHARP_,step);
}),from__$1);
if(cljs.core.truth_(to)){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__90249_SHARP_){
return tick.protocols._LT_(p1__90249_SHARP_,to);
}),G__90251);
} else {
return G__90251;
}
}));
(tick.protocols.IDivisibleDuration["number"] = true);

(tick.protocols.divide_duration["number"] = (function (n,duration){
return cljc.java_time.duration.divided_by(duration,n);
}));

(java.time.Duration.prototype.tick$protocols$IDivisibleDuration$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Duration.prototype.tick$protocols$IDivisibleDuration$divide_duration$arity$2 = (function (divisor,duration){
var divisor__$1 = this;
return (cljc.java_time.duration.get_seconds(duration) / cljc.java_time.duration.get_seconds(divisor__$1));
}));
(java.time.Duration.prototype.tick$protocols$IDivisible$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Duration.prototype.tick$protocols$IDivisible$divide$arity$2 = (function (d,x){
var d__$1 = this;
return tick.protocols.divide_duration(x,d__$1);
}));
/**
 * for the 2-arity version, find the temporal-amount between v1 and v2, 
 * or for the 3-arity version the amount of 'unit' between v1 and v2
 */
tick.core.between = (function tick$core$between(var_args){
var G__90253 = arguments.length;
switch (G__90253) {
case 2:
return tick.core.between.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tick.core.between.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.between.cljs$core$IFn$_invoke$arity$2 = (function (v1,v2){
return tick.protocols.between(v1,v2);
}));

(tick.core.between.cljs$core$IFn$_invoke$arity$3 = (function (v1,v2,unit){
if(cljs.core.contains_QMARK_(tick.core.unit_map,unit)){
} else {
throw (new Error("Assert failed: (contains? unit-map unit)"));
}

return cljc.java_time.temporal.chrono_unit.between(cljs.core.get.cljs$core$IFn$_invoke$arity$2(tick.core.unit_map,unit),v1,v2);
}));

(tick.core.between.cljs$lang$maxFixedArity = 3);

/**
 * the beginning of the range of ITimeSpan v or v
 */
tick.core.beginning = (function tick$core$beginning(v){
return tick.protocols.beginning(v);
});
/**
 * the end of the range of ITimeSpan v or v
 */
tick.core.end = (function tick$core$end(v){
return tick.protocols.end(v);
});
/**
 * return Duration or Period (whichever appropriate based on type) contained within the range of ITimeSpan x
 */
tick.core.duration = (function tick$core$duration(x){
return tick.core.between.cljs$core$IFn$_invoke$arity$2(tick.core.beginning(x),tick.core.end(x));
});
(java.time.LocalDate.prototype.tick$protocols$IBetween$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDate.prototype.tick$protocols$IBetween$between$arity$2 = (function (v1,v2){
var v1__$1 = this;
return cljc.java_time.period.between(v1__$1,tick.protocols.date(v2));
}));

(java.time.LocalTime.prototype.tick$protocols$IBetween$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalTime.prototype.tick$protocols$IBetween$between$arity$2 = (function (v1,v2){
var v1__$1 = this;
return cljc.java_time.duration.between(v1__$1,tick.protocols.time(v2));
}));

(java.time.ZonedDateTime.prototype.tick$protocols$IBetween$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.ZonedDateTime.prototype.tick$protocols$IBetween$between$arity$2 = (function (v1,v2){
var v1__$1 = this;
return cljc.java_time.duration.between(v1__$1,tick.protocols.zoned_date_time(v2));
}));

(java.time.LocalDateTime.prototype.tick$protocols$IBetween$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDateTime.prototype.tick$protocols$IBetween$between$arity$2 = (function (v1,v2){
var v1__$1 = this;
return cljc.java_time.duration.between(v1__$1,tick.protocols.date_time(v2));
}));

(java.time.Instant.prototype.tick$protocols$IBetween$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Instant.prototype.tick$protocols$IBetween$between$arity$2 = (function (v1,v2){
var v1__$1 = this;
return cljc.java_time.duration.between(v1__$1,tick.protocols.instant(v2));
}));

(java.time.OffsetDateTime.prototype.tick$protocols$IBetween$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.OffsetDateTime.prototype.tick$protocols$IBetween$between$arity$2 = (function (v1,v2){
var v1__$1 = this;
return cljc.java_time.duration.between(v1__$1,tick.protocols.offset_date_time(v2));
}));

(Date.prototype.tick$protocols$IBetween$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.tick$protocols$IBetween$between$arity$2 = (function (x,y){
var x__$1 = this;
return tick.protocols.between(tick.protocols.instant(x__$1),tick.protocols.instant(y));
}));
(java.time.LocalDate.prototype.tick$protocols$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDate.prototype.tick$protocols$ITimeSpan$beginning$arity$1 = (function (date){
var date__$1 = this;
return cljc.java_time.local_date.at_start_of_day.cljs$core$IFn$_invoke$arity$1(date__$1);
}));

(java.time.LocalDate.prototype.tick$protocols$ITimeSpan$end$arity$1 = (function (date){
var date__$1 = this;
return cljc.java_time.local_date.at_start_of_day.cljs$core$IFn$_invoke$arity$1(tick.core.inc(date__$1));
}));

(java.time.Year.prototype.tick$protocols$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Year.prototype.tick$protocols$ITimeSpan$beginning$arity$1 = (function (year){
var year__$1 = this;
return tick.core.beginning(cljc.java_time.year.at_month(year__$1,(1)));
}));

(java.time.Year.prototype.tick$protocols$ITimeSpan$end$arity$1 = (function (year){
var year__$1 = this;
return tick.core.beginning(cljc.java_time.year.at_month(tick.core.inc(year__$1),(1)));
}));

(java.time.YearMonth.prototype.tick$protocols$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.YearMonth.prototype.tick$protocols$ITimeSpan$beginning$arity$1 = (function (ym){
var ym__$1 = this;
return tick.core.beginning(cljc.java_time.year_month.at_day(ym__$1,(1)));
}));

(java.time.YearMonth.prototype.tick$protocols$ITimeSpan$end$arity$1 = (function (ym){
var ym__$1 = this;
return tick.core.beginning(cljc.java_time.year_month.at_day(tick.core.inc(ym__$1),(1)));
}));
/**
 * pre v0.7, ITimeSpan was extended as per this body. run this function to create those extensions.
 *   
 *   ITimeSpan is implemented by default on types with a natural beginning and end
 */
tick.core.backward_compatible_time_span_extensions = (function tick$core$backward_compatible_time_span_extensions(){
(java.time.Instant.prototype.tick$protocols$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Instant.prototype.tick$protocols$ITimeSpan$beginning$arity$1 = (function (i){
var i__$1 = this;
return i__$1;
}));

(java.time.Instant.prototype.tick$protocols$ITimeSpan$end$arity$1 = (function (i){
var i__$1 = this;
return i__$1;
}));

(java.time.ZonedDateTime.prototype.tick$protocols$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.ZonedDateTime.prototype.tick$protocols$ITimeSpan$beginning$arity$1 = (function (i){
var i__$1 = this;
return i__$1;
}));

(java.time.ZonedDateTime.prototype.tick$protocols$ITimeSpan$end$arity$1 = (function (i){
var i__$1 = this;
return i__$1;
}));

(java.time.OffsetDateTime.prototype.tick$protocols$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.OffsetDateTime.prototype.tick$protocols$ITimeSpan$beginning$arity$1 = (function (i){
var i__$1 = this;
return i__$1;
}));

(java.time.OffsetDateTime.prototype.tick$protocols$ITimeSpan$end$arity$1 = (function (i){
var i__$1 = this;
return i__$1;
}));

(Date.prototype.tick$protocols$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.tick$protocols$ITimeSpan$beginning$arity$1 = (function (i){
var i__$1 = this;
return tick.protocols.instant(i__$1);
}));

(Date.prototype.tick$protocols$ITimeSpan$end$arity$1 = (function (i){
var i__$1 = this;
return tick.protocols.instant(i__$1);
}));

(java.time.LocalDateTime.prototype.tick$protocols$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDateTime.prototype.tick$protocols$ITimeSpan$beginning$arity$1 = (function (x){
var x__$1 = this;
return x__$1;
}));

(java.time.LocalDateTime.prototype.tick$protocols$ITimeSpan$end$arity$1 = (function (x){
var x__$1 = this;
return x__$1;
}));

(java.time.LocalTime.prototype.tick$protocols$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalTime.prototype.tick$protocols$ITimeSpan$beginning$arity$1 = (function (x){
var x__$1 = this;
return x__$1;
}));

(java.time.LocalTime.prototype.tick$protocols$ITimeSpan$end$arity$1 = (function (x){
var x__$1 = this;
return x__$1;
}));

(tick.protocols.ITimeSpan["null"] = true);

(tick.protocols.beginning["null"] = (function (_){
return null;
}));

return (tick.protocols.end["null"] = (function (_){
return null;
}));
});
(java.time.LocalTime.prototype.tick$protocols$ITimeReify$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalTime.prototype.tick$protocols$ITimeReify$on$arity$2 = (function (t,d){
var t__$1 = this;
return cljc.java_time.local_time.at_date(t__$1,tick.protocols.date(d));
}));

(java.time.OffsetTime.prototype.tick$protocols$ITimeReify$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.OffsetTime.prototype.tick$protocols$ITimeReify$on$arity$2 = (function (t,date){
var t__$1 = this;
return cljc.java_time.offset_time.at_date(t__$1,tick.protocols.date(date));
}));

(java.time.LocalDate.prototype.tick$protocols$ITimeReify$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDate.prototype.tick$protocols$ITimeReify$at$arity$2 = (function (date,t){
var date__$1 = this;
return cljc.java_time.local_date.at_time.cljs$core$IFn$_invoke$arity$2(date__$1,tick.protocols.time(t));
}));

(java.time.LocalDateTime.prototype.tick$protocols$ITimeReify$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDateTime.prototype.tick$protocols$ITimeReify$in$arity$2 = (function (ldt,z){
var ldt__$1 = this;
return cljc.java_time.local_date_time.at_zone(ldt__$1,tick.protocols.zone(z));
}));

(java.time.LocalDateTime.prototype.tick$protocols$ITimeReify$offset_by$arity$2 = (function (ldt,offset){
var ldt__$1 = this;
return cljc.java_time.local_date_time.at_offset(ldt__$1,tick.protocols.zone_offset(offset));
}));

(java.time.Instant.prototype.tick$protocols$ITimeReify$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Instant.prototype.tick$protocols$ITimeReify$in$arity$2 = (function (t,z){
var t__$1 = this;
return cljc.java_time.instant.at_zone(t__$1,tick.protocols.zone(z));
}));

(java.time.Instant.prototype.tick$protocols$ITimeReify$offset_by$arity$2 = (function (t,offset){
var t__$1 = this;
return cljc.java_time.instant.at_offset(t__$1,tick.protocols.zone_offset(offset));
}));

(java.time.OffsetDateTime.prototype.tick$protocols$ITimeReify$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.OffsetDateTime.prototype.tick$protocols$ITimeReify$in$arity$2 = (function (t,z){
var t__$1 = this;
return cljc.java_time.offset_date_time.at_zone_same_instant(t__$1,tick.protocols.zone(z));
}));

(java.time.ZonedDateTime.prototype.tick$protocols$ITimeReify$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.ZonedDateTime.prototype.tick$protocols$ITimeReify$in$arity$2 = (function (t,z){
var t__$1 = this;
return cljc.java_time.zoned_date_time.with_zone_same_instant(t__$1,tick.protocols.zone(z));
}));

(Date.prototype.tick$protocols$ITimeReify$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.tick$protocols$ITimeReify$in$arity$2 = (function (t,z){
var t__$1 = this;
return tick.protocols.in$(tick.protocols.instant(t__$1),tick.protocols.zone(z));
}));
(Date.prototype.tick$protocols$ILocalTime$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.tick$protocols$ILocalTime$local_QMARK_$arity$1 = (function (_d){
var _d__$1 = this;
return false;
}));

(java.time.Instant.prototype.tick$protocols$ILocalTime$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Instant.prototype.tick$protocols$ILocalTime$local_QMARK_$arity$1 = (function (_i){
var _i__$1 = this;
return false;
}));

(java.time.LocalDateTime.prototype.tick$protocols$ILocalTime$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDateTime.prototype.tick$protocols$ILocalTime$local_QMARK_$arity$1 = (function (_i){
var _i__$1 = this;
return true;
}));

(java.time.LocalTime.prototype.tick$protocols$ILocalTime$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalTime.prototype.tick$protocols$ILocalTime$local_QMARK_$arity$1 = (function (_i){
var _i__$1 = this;
return true;
}));

(tick.protocols.ILocalTime["null"] = true);

(tick.protocols.local_QMARK_["null"] = (function (_){
return null;
}));
(java.time.LocalTime.prototype.tick$protocols$MinMax$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalTime.prototype.tick$protocols$MinMax$min_of_type$arity$1 = (function (_){
var ___$1 = this;
return cljc.java_time.local_time.min;
}));

(java.time.LocalTime.prototype.tick$protocols$MinMax$max_of_type$arity$1 = (function (_){
var ___$1 = this;
return cljc.java_time.local_time.max;
}));

(java.time.LocalDate.prototype.tick$protocols$MinMax$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDate.prototype.tick$protocols$MinMax$min_of_type$arity$1 = (function (_){
var ___$1 = this;
return cljc.java_time.local_date.min;
}));

(java.time.LocalDate.prototype.tick$protocols$MinMax$max_of_type$arity$1 = (function (_){
var ___$1 = this;
return cljc.java_time.local_date.max;
}));

(java.time.LocalDateTime.prototype.tick$protocols$MinMax$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDateTime.prototype.tick$protocols$MinMax$min_of_type$arity$1 = (function (_){
var ___$1 = this;
return cljc.java_time.local_date_time.min;
}));

(java.time.LocalDateTime.prototype.tick$protocols$MinMax$max_of_type$arity$1 = (function (_){
var ___$1 = this;
return cljc.java_time.local_date_time.max;
}));

(java.time.Instant.prototype.tick$protocols$MinMax$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Instant.prototype.tick$protocols$MinMax$min_of_type$arity$1 = (function (_){
var ___$1 = this;
return cljc.java_time.instant.min;
}));

(java.time.Instant.prototype.tick$protocols$MinMax$max_of_type$arity$1 = (function (_){
var ___$1 = this;
return cljc.java_time.instant.max;
}));

(tick.protocols.MinMax["null"] = true);

(tick.protocols.min_of_type["null"] = (function (_){
return cljc.java_time.instant.min;
}));

(tick.protocols.max_of_type["null"] = (function (_){
return cljc.java_time.instant.max;
}));
/**
 * current instant shifted back by duration 'dur'
 */
tick.core.ago = (function tick$core$ago(dur){
return tick.protocols.backward_duration(tick.core.now(),dur);
});
/**
 * current instant shifted forward by duration 'dur'
 */
tick.core.hence = (function tick$core$hence(dur){
return tick.protocols.forward_duration(tick.core.now(),dur);
});
tick.core.midnight_QMARK_ = (function tick$core$midnight_QMARK_(t){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljc.java_time.local_time.midnight,tick.protocols.time(t));
});
/**
 * true if v is a clock?
 */
tick.core.clock_QMARK_ = (function tick$core$clock_QMARK_(v){
return cljc.java_time.extn.predicates.clock_QMARK_(v);
});
/**
 * true if v is a day-of-week?
 */
tick.core.day_of_week_QMARK_ = (function tick$core$day_of_week_QMARK_(v){
return cljc.java_time.extn.predicates.day_of_week_QMARK_(v);
});
/**
 * true if v is a duration?
 */
tick.core.duration_QMARK_ = (function tick$core$duration_QMARK_(v){
return cljc.java_time.extn.predicates.duration_QMARK_(v);
});
/**
 * true if v is a instant?
 */
tick.core.instant_QMARK_ = (function tick$core$instant_QMARK_(v){
return cljc.java_time.extn.predicates.instant_QMARK_(v);
});
/**
 * true if v is a date?
 */
tick.core.date_QMARK_ = (function tick$core$date_QMARK_(v){
return cljc.java_time.extn.predicates.local_date_QMARK_(v);
});
/**
 * true if v is a date-time?
 */
tick.core.date_time_QMARK_ = (function tick$core$date_time_QMARK_(v){
return cljc.java_time.extn.predicates.local_date_time_QMARK_(v);
});
/**
 * true if v is a time?
 */
tick.core.time_QMARK_ = (function tick$core$time_QMARK_(v){
return cljc.java_time.extn.predicates.local_time_QMARK_(v);
});
/**
 * true if v is a month?
 */
tick.core.month_QMARK_ = (function tick$core$month_QMARK_(v){
return cljc.java_time.extn.predicates.month_QMARK_(v);
});
/**
 * true if v is a offset-date-time?
 */
tick.core.offset_date_time_QMARK_ = (function tick$core$offset_date_time_QMARK_(v){
return cljc.java_time.extn.predicates.offset_date_time_QMARK_(v);
});
/**
 * true if v is a period?
 */
tick.core.period_QMARK_ = (function tick$core$period_QMARK_(v){
return cljc.java_time.extn.predicates.period_QMARK_(v);
});
/**
 * true if v is a year?
 */
tick.core.year_QMARK_ = (function tick$core$year_QMARK_(v){
return cljc.java_time.extn.predicates.year_QMARK_(v);
});
/**
 * true if v is a year-month?
 */
tick.core.year_month_QMARK_ = (function tick$core$year_month_QMARK_(v){
return cljc.java_time.extn.predicates.year_month_QMARK_(v);
});
/**
 * true if v is a zone?
 */
tick.core.zone_QMARK_ = (function tick$core$zone_QMARK_(v){
return cljc.java_time.extn.predicates.zone_id_QMARK_(v);
});
/**
 * true if v is a zone-offset?
 */
tick.core.zone_offset_QMARK_ = (function tick$core$zone_offset_QMARK_(v){
return cljc.java_time.extn.predicates.zone_offset_QMARK_(v);
});
/**
 * true if v is a zoned-date-time?
 */
tick.core.zoned_date_time_QMARK_ = (function tick$core$zoned_date_time_QMARK_(v){
return cljc.java_time.extn.predicates.zoned_date_time_QMARK_(v);
});
/**
 * true if v is a interval?
 */
tick.core.interval_QMARK_ = (function tick$core$interval_QMARK_(v){
if((!((v == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === v.tick$protocols$ITimeSpan$)))){
return true;
} else {
if((!v.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(tick.protocols.ITimeSpan,v);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(tick.protocols.ITimeSpan,v);
}
});
tick.core.MONDAY = cljc.java_time.day_of_week.monday;
tick.core.TUESDAY = cljc.java_time.day_of_week.tuesday;
tick.core.WEDNESDAY = cljc.java_time.day_of_week.wednesday;
tick.core.THURSDAY = cljc.java_time.day_of_week.thursday;
tick.core.FRIDAY = cljc.java_time.day_of_week.friday;
tick.core.SATURDAY = cljc.java_time.day_of_week.saturday;
tick.core.SUNDAY = cljc.java_time.day_of_week.sunday;
tick.core.JANUARY = cljc.java_time.month.january;
tick.core.FEBRUARY = cljc.java_time.month.february;
tick.core.MARCH = cljc.java_time.month.march;
tick.core.APRIL = cljc.java_time.month.april;
tick.core.MAY = cljc.java_time.month.may;
tick.core.JUNE = cljc.java_time.month.june;
tick.core.JULY = cljc.java_time.month.july;
tick.core.AUGUST = cljc.java_time.month.august;
tick.core.SEPTEMBER = cljc.java_time.month.september;
tick.core.OCTOBER = cljc.java_time.month.october;
tick.core.NOVEMBER = cljc.java_time.month.november;
tick.core.DECEMBER = cljc.java_time.month.december;
tick.core.UTC = tick.core.zone.cljs$core$IFn$_invoke$arity$1("UTC");
/**
 * return e.g Instant/MIN given and Instant
 */
tick.core.min_of_type = tick.protocols.min_of_type;
/**
 * return e.g Instant/MAX given and Instant
 */
tick.core.max_of_type = tick.protocols.max_of_type;
/**
 * Returns a lazy seq of times from start (inclusive) to end (exclusive, nil means forever), by step, where start defaults to 0, step to 1, and end to infinity.
 */
tick.core.range = tick.protocols.range;
tick.core.int$ = (function tick$core$int(arg){
return tick.protocols.int$(arg);
});
tick.core.long$ = (function tick$core$long(arg){
return tick.protocols.long$(arg);
});
/**
 * Set time be ON a date
 */
tick.core.on = (function tick$core$on(t,d){
return tick.protocols.on(t,d);
});
/**
 * Set date to be AT a time
 */
tick.core.at = (function tick$core$at(d,t){
return tick.protocols.at(d,t);
});
/**
 * Set a date-time to be in a time-zone
 */
tick.core.in$ = (function tick$core$in(ldt,z){
return tick.protocols.in$(ldt,z);
});
/**
 * Set a date-time to be offset by an amount
 */
tick.core.offset_by = (function tick$core$offset_by(ldt,offset){
return tick.protocols.offset_by(ldt,offset);
});
tick.core.date = (function tick$core$date(var_args){
var G__90256 = arguments.length;
switch (G__90256) {
case 0:
return tick.core.date.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.date.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.today();
}));

(tick.core.date.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.protocols.date(v);
}));

(tick.core.date.cljs$lang$maxFixedArity = 1);

tick.core.inst = (function tick$core$inst(var_args){
var G__90258 = arguments.length;
switch (G__90258) {
case 0:
return tick.core.inst.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.inst.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.inst.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.protocols.inst(tick.core.now());
}));

(tick.core.inst.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.protocols.inst(v);
}));

(tick.core.inst.cljs$lang$maxFixedArity = 1);

tick.core.instant = (function tick$core$instant(var_args){
var G__90260 = arguments.length;
switch (G__90260) {
case 0:
return tick.core.instant.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.instant.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.instant.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.protocols.instant(tick.core.now());
}));

(tick.core.instant.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.protocols.instant(v);
}));

(tick.core.instant.cljs$lang$maxFixedArity = 1);

tick.core.date_time = (function tick$core$date_time(var_args){
var G__90262 = arguments.length;
switch (G__90262) {
case 0:
return tick.core.date_time.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.date_time.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.protocols.date_time(tick.core.now());
}));

(tick.core.date_time.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.protocols.date_time(v);
}));

(tick.core.date_time.cljs$lang$maxFixedArity = 1);

tick.core.offset_date_time = (function tick$core$offset_date_time(var_args){
var G__90264 = arguments.length;
switch (G__90264) {
case 0:
return tick.core.offset_date_time.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.offset_date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.offset_date_time.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.protocols.offset_date_time(tick.core.now());
}));

(tick.core.offset_date_time.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.protocols.offset_date_time(v);
}));

(tick.core.offset_date_time.cljs$lang$maxFixedArity = 1);

tick.core.zoned_date_time = (function tick$core$zoned_date_time(var_args){
var G__90266 = arguments.length;
switch (G__90266) {
case 0:
return tick.core.zoned_date_time.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.zoned_date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.zoned_date_time.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.protocols.zoned_date_time(tick.core.now());
}));

(tick.core.zoned_date_time.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.protocols.zoned_date_time(v);
}));

(tick.core.zoned_date_time.cljs$lang$maxFixedArity = 1);

(java.time.YearMonth.prototype.tick$protocols$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.YearMonth.prototype.tick$protocols$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return cljc.java_time.year_month.is_before(x__$1,y);
}));

(java.time.YearMonth.prototype.tick$protocols$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(cljc.java_time.year_month.is_after(x__$1,y));
}));

(java.time.YearMonth.prototype.tick$protocols$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return cljc.java_time.year_month.is_after(x__$1,y);
}));

(java.time.YearMonth.prototype.tick$protocols$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(cljc.java_time.year_month.is_before(x__$1,y));
}));

(java.time.YearMonth.prototype.tick$protocols$ITimeComparison$_EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,y);
}));

(java.time.Year.prototype.tick$protocols$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Year.prototype.tick$protocols$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return cljc.java_time.year.is_before(x__$1,y);
}));

(java.time.Year.prototype.tick$protocols$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(cljc.java_time.year.is_after(x__$1,y));
}));

(java.time.Year.prototype.tick$protocols$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return cljc.java_time.year.is_after(x__$1,y);
}));

(java.time.Year.prototype.tick$protocols$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(cljc.java_time.year.is_before(x__$1,y));
}));

(java.time.Year.prototype.tick$protocols$ITimeComparison$_EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,y);
}));

(java.time.ZonedDateTime.prototype.tick$protocols$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.ZonedDateTime.prototype.tick$protocols$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return cljc.java_time.zoned_date_time.is_before(x__$1,tick.core.zoned_date_time.cljs$core$IFn$_invoke$arity$1(y));
}));

(java.time.ZonedDateTime.prototype.tick$protocols$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(cljc.java_time.zoned_date_time.is_after(x__$1,tick.core.zoned_date_time.cljs$core$IFn$_invoke$arity$1(y)));
}));

(java.time.ZonedDateTime.prototype.tick$protocols$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return cljc.java_time.zoned_date_time.is_after(x__$1,tick.core.zoned_date_time.cljs$core$IFn$_invoke$arity$1(y));
}));

(java.time.ZonedDateTime.prototype.tick$protocols$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(cljc.java_time.zoned_date_time.is_before(x__$1,tick.core.zoned_date_time.cljs$core$IFn$_invoke$arity$1(y)));
}));

(java.time.ZonedDateTime.prototype.tick$protocols$ITimeComparison$_EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljc.java_time.zoned_date_time.is_equal(x__$1,tick.core.zoned_date_time.cljs$core$IFn$_invoke$arity$1(y));
}));

(java.time.Instant.prototype.tick$protocols$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Instant.prototype.tick$protocols$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return cljc.java_time.instant.is_before(x__$1,tick.core.instant.cljs$core$IFn$_invoke$arity$1(y));
}));

(java.time.Instant.prototype.tick$protocols$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(cljc.java_time.instant.is_after(x__$1,tick.core.instant.cljs$core$IFn$_invoke$arity$1(y)));
}));

(java.time.Instant.prototype.tick$protocols$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return cljc.java_time.instant.is_after(x__$1,tick.core.instant.cljs$core$IFn$_invoke$arity$1(y));
}));

(java.time.Instant.prototype.tick$protocols$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(cljc.java_time.instant.is_before(x__$1,tick.core.instant.cljs$core$IFn$_invoke$arity$1(y)));
}));

(java.time.Instant.prototype.tick$protocols$ITimeComparison$_EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,tick.protocols.instant(y));
}));

(Date.prototype.tick$protocols$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.tick$protocols$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return (cljs.core.compare(x__$1,tick.core.inst.cljs$core$IFn$_invoke$arity$1(y)) < (0));
}));

(Date.prototype.tick$protocols$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return (!((cljs.core.compare(x__$1,tick.core.inst.cljs$core$IFn$_invoke$arity$1(y)) > (0))));
}));

(Date.prototype.tick$protocols$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return (cljs.core.compare(x__$1,tick.core.inst.cljs$core$IFn$_invoke$arity$1(y)) > (0));
}));

(Date.prototype.tick$protocols$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return (!((cljs.core.compare(x__$1,tick.core.inst.cljs$core$IFn$_invoke$arity$1(y)) < (0))));
}));

(Date.prototype.tick$protocols$ITimeComparison$_EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,tick.protocols.inst(y));
}));

(java.time.LocalDate.prototype.tick$protocols$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDate.prototype.tick$protocols$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return cljc.java_time.local_date.is_before(x__$1,y);
}));

(java.time.LocalDate.prototype.tick$protocols$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(cljc.java_time.local_date.is_after(x__$1,y));
}));

(java.time.LocalDate.prototype.tick$protocols$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return cljc.java_time.local_date.is_after(x__$1,y);
}));

(java.time.LocalDate.prototype.tick$protocols$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(cljc.java_time.local_date.is_before(x__$1,y));
}));

(java.time.LocalDate.prototype.tick$protocols$ITimeComparison$_EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,y);
}));

(java.time.LocalTime.prototype.tick$protocols$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalTime.prototype.tick$protocols$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return cljc.java_time.local_time.is_before(x__$1,y);
}));

(java.time.LocalTime.prototype.tick$protocols$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(cljc.java_time.local_time.is_after(x__$1,y));
}));

(java.time.LocalTime.prototype.tick$protocols$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return cljc.java_time.local_time.is_after(x__$1,y);
}));

(java.time.LocalTime.prototype.tick$protocols$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(cljc.java_time.local_time.is_before(x__$1,y));
}));

(java.time.LocalTime.prototype.tick$protocols$ITimeComparison$_EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,y);
}));

(java.time.OffsetDateTime.prototype.tick$protocols$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.OffsetDateTime.prototype.tick$protocols$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return cljc.java_time.offset_date_time.is_before(x__$1,tick.core.offset_date_time.cljs$core$IFn$_invoke$arity$1(y));
}));

(java.time.OffsetDateTime.prototype.tick$protocols$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(cljc.java_time.offset_date_time.is_after(x__$1,tick.core.offset_date_time.cljs$core$IFn$_invoke$arity$1(y)));
}));

(java.time.OffsetDateTime.prototype.tick$protocols$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return cljc.java_time.offset_date_time.is_after(x__$1,tick.core.offset_date_time.cljs$core$IFn$_invoke$arity$1(y));
}));

(java.time.OffsetDateTime.prototype.tick$protocols$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(cljc.java_time.offset_date_time.is_before(x__$1,tick.core.offset_date_time.cljs$core$IFn$_invoke$arity$1(y)));
}));

(java.time.OffsetDateTime.prototype.tick$protocols$ITimeComparison$_EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljc.java_time.offset_date_time.is_equal(x__$1,tick.core.offset_date_time.cljs$core$IFn$_invoke$arity$1(y));
}));

(java.time.LocalDateTime.prototype.tick$protocols$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDateTime.prototype.tick$protocols$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return cljc.java_time.local_date_time.is_before(x__$1,y);
}));

(java.time.LocalDateTime.prototype.tick$protocols$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(cljc.java_time.local_date_time.is_after(x__$1,y));
}));

(java.time.LocalDateTime.prototype.tick$protocols$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return cljc.java_time.local_date_time.is_after(x__$1,y);
}));

(java.time.LocalDateTime.prototype.tick$protocols$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.not(cljc.java_time.local_date_time.is_before(x__$1,y));
}));

(java.time.LocalDateTime.prototype.tick$protocols$ITimeComparison$_EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,y);
}));

(java.time.Duration.prototype.tick$protocols$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Duration.prototype.tick$protocols$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return (cljc.java_time.duration.compare_to(x__$1,y) < (0));
}));

(java.time.Duration.prototype.tick$protocols$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,y)) || ((cljc.java_time.duration.compare_to(x__$1,y) < (0))));
}));

(java.time.Duration.prototype.tick$protocols$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return (cljc.java_time.duration.compare_to(x__$1,y) > (0));
}));

(java.time.Duration.prototype.tick$protocols$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,y)) || ((cljc.java_time.duration.compare_to(x__$1,y) > (0))));
}));

(java.time.Duration.prototype.tick$protocols$ITimeComparison$_EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,y);
}));
/**
 * extract nanosecond from t
 */
tick.core.nanosecond = (function tick$core$nanosecond(t){
return tick.protocols.nanosecond(t);
});
/**
 * extract microsecond from t
 */
tick.core.microsecond = (function tick$core$microsecond(t){
return tick.protocols.microsecond(t);
});
/**
 * extract millisecond from t
 */
tick.core.millisecond = (function tick$core$millisecond(t){
return tick.protocols.millisecond(t);
});
/**
 * extract second from t
 */
tick.core.second = (function tick$core$second(t){
return tick.protocols.second(t);
});
/**
 * extract minute from t
 */
tick.core.minute = (function tick$core$minute(t){
return tick.protocols.minute(t);
});
/**
 * extract hour from t
 */
tick.core.hour = (function tick$core$hour(t){
return tick.protocols.hour(t);
});
/**
 * extract time from v
 */
tick.core.time = (function tick$core$time(var_args){
var G__90268 = arguments.length;
switch (G__90268) {
case 0:
return tick.core.time.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.protocols.time(tick.core.now());
}));

(tick.core.time.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.protocols.time(v);
}));

(tick.core.time.cljs$lang$maxFixedArity = 1);

/**
 * extract day-of-week from v
 */
tick.core.day_of_week = (function tick$core$day_of_week(var_args){
var G__90270 = arguments.length;
switch (G__90270) {
case 0:
return tick.core.day_of_week.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.day_of_week.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.day_of_week.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.protocols.day_of_week(tick.core.today());
}));

(tick.core.day_of_week.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.protocols.day_of_week(v);
}));

(tick.core.day_of_week.cljs$lang$maxFixedArity = 1);

/**
 * extract day-of-month from v
 */
tick.core.day_of_month = (function tick$core$day_of_month(var_args){
var G__90272 = arguments.length;
switch (G__90272) {
case 0:
return tick.core.day_of_month.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.day_of_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.day_of_month.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.protocols.day_of_month(tick.core.today());
}));

(tick.core.day_of_month.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.protocols.day_of_month(v);
}));

(tick.core.day_of_month.cljs$lang$maxFixedArity = 1);

/**
 * extract month from v
 */
tick.core.month = (function tick$core$month(var_args){
var G__90274 = arguments.length;
switch (G__90274) {
case 0:
return tick.core.month.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.month.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.protocols.month(tick.core.today());
}));

(tick.core.month.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.protocols.month(v);
}));

(tick.core.month.cljs$lang$maxFixedArity = 1);

/**
 * extract year from v
 */
tick.core.year = (function tick$core$year(var_args){
var G__90276 = arguments.length;
switch (G__90276) {
case 0:
return tick.core.year.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.year.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.year.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.protocols.year(tick.core.today());
}));

(tick.core.year.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.protocols.year(v);
}));

(tick.core.year.cljs$lang$maxFixedArity = 1);

/**
 * extract year-month from v
 */
tick.core.year_month = (function tick$core$year_month(var_args){
var G__90278 = arguments.length;
switch (G__90278) {
case 0:
return tick.core.year_month.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.year_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.year_month.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.protocols.year_month(tick.core.today());
}));

(tick.core.year_month.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.protocols.year_month(v);
}));

(tick.core.year_month.cljs$lang$maxFixedArity = 1);

/**
 * return i as a clock
 */
tick.core.clock = (function tick$core$clock(var_args){
var G__90280 = arguments.length;
switch (G__90280) {
case 0:
return tick.core.clock.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.core.clock.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.clock.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.current_clock();
}));

(tick.core.clock.cljs$core$IFn$_invoke$arity$1 = (function (i){
return tick.protocols.clock(i);
}));

(tick.core.clock.cljs$lang$maxFixedArity = 1);

tick.core.predefined_formatters = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"iso-zoned-date-time","iso-zoned-date-time",-1626338878),cljc.java_time.format.date_time_formatter.iso_zoned_date_time,new cljs.core.Keyword(null,"iso-offset-date-time","iso-offset-date-time",-47990863),cljc.java_time.format.date_time_formatter.iso_offset_date_time,new cljs.core.Keyword(null,"iso-local-time","iso-local-time",-1676599821),cljc.java_time.format.date_time_formatter.iso_local_time,new cljs.core.Keyword(null,"iso-local-date-time","iso-local-date-time",-1669236935),cljc.java_time.format.date_time_formatter.iso_local_date_time,new cljs.core.Keyword(null,"iso-local-date","iso-local-date",571187900),cljc.java_time.format.date_time_formatter.iso_local_date,new cljs.core.Keyword(null,"iso-instant","iso-instant",1024383901),cljc.java_time.format.date_time_formatter.iso_instant], null);
/**
 * Constructs a DateTimeFormatter out of either a
 * 
 *   * format string - "yyyy/MM/dd" "yyy HH:mm" etc.
 *   or
 *   * formatter name - :iso-instant :iso-local-date etc
 * 
 *   and a Locale, which is optional.
 */
tick.core.formatter = (function tick$core$formatter(var_args){
var G__90282 = arguments.length;
switch (G__90282) {
case 1:
return tick.core.formatter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.core.formatter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.formatter.cljs$core$IFn$_invoke$arity$1 = (function (fmt){
return tick.core.formatter.cljs$core$IFn$_invoke$arity$2(fmt,(function (){try{var G__90284 = tick.core.goog$module$goog$object.get(JSJodaLocale,"Locale");
if((G__90284 == null)){
return null;
} else {
return tick.core.goog$module$goog$object.get(G__90284,"US");
}
}catch (e90283){if((e90283 instanceof Error)){
var _e = e90283;
return null;
} else {
throw e90283;

}
}})());
}));

(tick.core.formatter.cljs$core$IFn$_invoke$arity$2 = (function (fmt,locale){
var fmt__$1 = (((fmt instanceof java.time.format.DateTimeFormatter))?fmt:((typeof fmt === 'string')?(((locale == null))?(function(){throw (new Error((""+"Locale is nil, try adding a require '[tick.locale-en-us]")))})():cljc.java_time.format.date_time_formatter.with_locale(cljc.java_time.format.date_time_formatter.of_pattern.cljs$core$IFn$_invoke$arity$1(fmt),locale)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(tick.core.predefined_formatters,fmt)
));
return fmt__$1;
}));

(tick.core.formatter.cljs$lang$maxFixedArity = 2);

/**
 * Formats the given time entity as a string.
 *   Accepts something that can be converted to a `DateTimeFormatter` as a first
 *   argument. Given one argument uses the default format.
 */
tick.core.format = (function tick$core$format(var_args){
var G__90286 = arguments.length;
switch (G__90286) {
case 1:
return tick.core.format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.core.format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.format.cljs$core$IFn$_invoke$arity$1 = (function (o){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(o));
}));

(tick.core.format.cljs$core$IFn$_invoke$arity$2 = (function (fmt,o){
return cljc.java_time.format.date_time_formatter.format(tick.core.formatter.cljs$core$IFn$_invoke$arity$1(fmt),o);
}));

(tick.core.format.cljs$lang$maxFixedArity = 2);

/**
 * Same as clojure.core/=, but works on dates, rather than numbers.
 *   can compare different types, e.g. Instant vs ZonedDateTime
 *   
 */
tick.core._EQ_ = (function tick$core$_EQ_(var_args){
var G__90291 = arguments.length;
switch (G__90291) {
case 1:
return tick.core._EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.core._EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5901__auto__ = [];
var len__5876__auto___90414 = arguments.length;
var i__5877__auto___90415 = (0);
while(true){
if((i__5877__auto___90415 < len__5876__auto___90414)){
args_arr__5901__auto__.push((arguments[i__5877__auto___90415]));

var G__90416 = (i__5877__auto___90415 + (1));
i__5877__auto___90415 = G__90416;
continue;
} else {
}
break;
}

var argseq__5902__auto__ = ((((2) < args_arr__5901__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5901__auto__.slice((2)),(0),null)):null);
return tick.core._EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5902__auto__);

}
});

(tick.core._EQ_.cljs$core$IFn$_invoke$arity$1 = (function (_x){
return true;
}));

(tick.core._EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return tick.protocols._EQ_(x,y);
}));

(tick.core._EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(tick.protocols._EQ_(x,y))){
if(cljs.core.next(more)){
var G__90417 = y;
var G__90418 = cljs.core.first(more);
var G__90419 = cljs.core.next(more);
x = G__90417;
y = G__90418;
more = G__90419;
continue;
} else {
return tick.protocols._EQ_(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
}));

/** @this {Function} */
(tick.core._EQ_.cljs$lang$applyTo = (function (seq90288){
var G__90289 = cljs.core.first(seq90288);
var seq90288__$1 = cljs.core.next(seq90288);
var G__90290 = cljs.core.first(seq90288__$1);
var seq90288__$2 = cljs.core.next(seq90288__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__90289,G__90290,seq90288__$2);
}));

(tick.core._EQ_.cljs$lang$maxFixedArity = (2));

/**
 * Same as clojure.core/<, but works on dates, rather than numbers
 */
tick.core._LT_ = (function tick$core$_LT_(var_args){
var G__90296 = arguments.length;
switch (G__90296) {
case 1:
return tick.core._LT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.core._LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5901__auto__ = [];
var len__5876__auto___90421 = arguments.length;
var i__5877__auto___90422 = (0);
while(true){
if((i__5877__auto___90422 < len__5876__auto___90421)){
args_arr__5901__auto__.push((arguments[i__5877__auto___90422]));

var G__90423 = (i__5877__auto___90422 + (1));
i__5877__auto___90422 = G__90423;
continue;
} else {
}
break;
}

var argseq__5902__auto__ = ((((2) < args_arr__5901__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5901__auto__.slice((2)),(0),null)):null);
return tick.core._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5902__auto__);

}
});

(tick.core._LT_.cljs$core$IFn$_invoke$arity$1 = (function (_x){
return true;
}));

(tick.core._LT_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return tick.protocols._LT_(x,y);
}));

(tick.core._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(tick.protocols._LT_(x,y))){
if(cljs.core.next(more)){
var G__90425 = y;
var G__90426 = cljs.core.first(more);
var G__90427 = cljs.core.next(more);
x = G__90425;
y = G__90426;
more = G__90427;
continue;
} else {
return tick.protocols._LT_(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
}));

/** @this {Function} */
(tick.core._LT_.cljs$lang$applyTo = (function (seq90293){
var G__90294 = cljs.core.first(seq90293);
var seq90293__$1 = cljs.core.next(seq90293);
var G__90295 = cljs.core.first(seq90293__$1);
var seq90293__$2 = cljs.core.next(seq90293__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__90294,G__90295,seq90293__$2);
}));

(tick.core._LT_.cljs$lang$maxFixedArity = (2));

/**
 * Same as clojure.core/<=, but works on dates, rather than numbers
 */
tick.core._LT__EQ_ = (function tick$core$_LT__EQ_(var_args){
var G__90301 = arguments.length;
switch (G__90301) {
case 1:
return tick.core._LT__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.core._LT__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5901__auto__ = [];
var len__5876__auto___90430 = arguments.length;
var i__5877__auto___90431 = (0);
while(true){
if((i__5877__auto___90431 < len__5876__auto___90430)){
args_arr__5901__auto__.push((arguments[i__5877__auto___90431]));

var G__90433 = (i__5877__auto___90431 + (1));
i__5877__auto___90431 = G__90433;
continue;
} else {
}
break;
}

var argseq__5902__auto__ = ((((2) < args_arr__5901__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5901__auto__.slice((2)),(0),null)):null);
return tick.core._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5902__auto__);

}
});

(tick.core._LT__EQ_.cljs$core$IFn$_invoke$arity$1 = (function (_x){
return true;
}));

(tick.core._LT__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return tick.protocols._LT__EQ_(x,y);
}));

(tick.core._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(tick.protocols._LT__EQ_(x,y))){
if(cljs.core.next(more)){
var G__90437 = y;
var G__90438 = cljs.core.first(more);
var G__90439 = cljs.core.next(more);
x = G__90437;
y = G__90438;
more = G__90439;
continue;
} else {
return tick.protocols._LT__EQ_(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
}));

/** @this {Function} */
(tick.core._LT__EQ_.cljs$lang$applyTo = (function (seq90298){
var G__90299 = cljs.core.first(seq90298);
var seq90298__$1 = cljs.core.next(seq90298);
var G__90300 = cljs.core.first(seq90298__$1);
var seq90298__$2 = cljs.core.next(seq90298__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__90299,G__90300,seq90298__$2);
}));

(tick.core._LT__EQ_.cljs$lang$maxFixedArity = (2));

/**
 * Same as clojure.core/>, but works on dates, rather than numbers
 */
tick.core._GT_ = (function tick$core$_GT_(var_args){
var G__90306 = arguments.length;
switch (G__90306) {
case 1:
return tick.core._GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.core._GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5901__auto__ = [];
var len__5876__auto___90441 = arguments.length;
var i__5877__auto___90442 = (0);
while(true){
if((i__5877__auto___90442 < len__5876__auto___90441)){
args_arr__5901__auto__.push((arguments[i__5877__auto___90442]));

var G__90443 = (i__5877__auto___90442 + (1));
i__5877__auto___90442 = G__90443;
continue;
} else {
}
break;
}

var argseq__5902__auto__ = ((((2) < args_arr__5901__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5901__auto__.slice((2)),(0),null)):null);
return tick.core._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5902__auto__);

}
});

(tick.core._GT_.cljs$core$IFn$_invoke$arity$1 = (function (_x){
return true;
}));

(tick.core._GT_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return tick.protocols._GT_(x,y);
}));

(tick.core._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(tick.protocols._GT_(x,y))){
if(cljs.core.next(more)){
var G__90444 = y;
var G__90445 = cljs.core.first(more);
var G__90446 = cljs.core.next(more);
x = G__90444;
y = G__90445;
more = G__90446;
continue;
} else {
return tick.protocols._GT_(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
}));

/** @this {Function} */
(tick.core._GT_.cljs$lang$applyTo = (function (seq90303){
var G__90304 = cljs.core.first(seq90303);
var seq90303__$1 = cljs.core.next(seq90303);
var G__90305 = cljs.core.first(seq90303__$1);
var seq90303__$2 = cljs.core.next(seq90303__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__90304,G__90305,seq90303__$2);
}));

(tick.core._GT_.cljs$lang$maxFixedArity = (2));

/**
 * Same as clojure.core/>=, but works on dates, rather than numbers
 */
tick.core._GT__EQ_ = (function tick$core$_GT__EQ_(var_args){
var G__90311 = arguments.length;
switch (G__90311) {
case 1:
return tick.core._GT__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.core._GT__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5901__auto__ = [];
var len__5876__auto___90448 = arguments.length;
var i__5877__auto___90449 = (0);
while(true){
if((i__5877__auto___90449 < len__5876__auto___90448)){
args_arr__5901__auto__.push((arguments[i__5877__auto___90449]));

var G__90450 = (i__5877__auto___90449 + (1));
i__5877__auto___90449 = G__90450;
continue;
} else {
}
break;
}

var argseq__5902__auto__ = ((((2) < args_arr__5901__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5901__auto__.slice((2)),(0),null)):null);
return tick.core._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5902__auto__);

}
});

(tick.core._GT__EQ_.cljs$core$IFn$_invoke$arity$1 = (function (_x){
return true;
}));

(tick.core._GT__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return tick.protocols._GT__EQ_(x,y);
}));

(tick.core._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(tick.protocols._GT__EQ_(x,y))){
if(cljs.core.next(more)){
var G__90451 = y;
var G__90452 = cljs.core.first(more);
var G__90453 = cljs.core.next(more);
x = G__90451;
y = G__90452;
more = G__90453;
continue;
} else {
return tick.protocols._GT__EQ_(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
}));

/** @this {Function} */
(tick.core._GT__EQ_.cljs$lang$applyTo = (function (seq90308){
var G__90309 = cljs.core.first(seq90308);
var seq90308__$1 = cljs.core.next(seq90308);
var G__90310 = cljs.core.first(seq90308__$1);
var seq90308__$2 = cljs.core.next(seq90308__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__90309,G__90310,seq90308__$2);
}));

(tick.core._GT__EQ_.cljs$lang$maxFixedArity = (2));

/**
 * the greater of x and y
 */
tick.core.greater = (function tick$core$greater(x,y){
if(cljs.core.truth_(tick.core._GT_.cljs$core$IFn$_invoke$arity$2(x,y))){
return x;
} else {
return y;
}
});
/**
 * for the 2-arity ver, Does containing-interval wholly contain the given contained-interval?
 *   
 *   for the 3-arity, does the event lie within the span of time described by start and end
 */
tick.core.coincident_QMARK_ = (function tick$core$coincident_QMARK_(var_args){
var G__90313 = arguments.length;
switch (G__90313) {
case 2:
return tick.core.coincident_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tick.core.coincident_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tick.core.coincident_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (containing_interval,contained_interval){
var and__5140__auto__ = tick.core._LT__EQ_.cljs$core$IFn$_invoke$arity$2(tick.core.beginning(containing_interval),tick.core.beginning(contained_interval));
if(cljs.core.truth_(and__5140__auto__)){
return tick.core._GT__EQ_.cljs$core$IFn$_invoke$arity$2(tick.core.end(containing_interval),tick.core.end(contained_interval));
} else {
return and__5140__auto__;
}
}));

(tick.core.coincident_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (start,end,event){
var and__5140__auto__ = tick.core._LT__EQ_.cljs$core$IFn$_invoke$arity$2(start,event);
if(cljs.core.truth_(and__5140__auto__)){
return tick.core._GT__EQ_.cljs$core$IFn$_invoke$arity$2(end,event);
} else {
return and__5140__auto__;
}
}));

(tick.core.coincident_QMARK_.cljs$lang$maxFixedArity = 3);

/**
 * Find the latest of the given arguments. Callers should ensure that no
 *   argument is nil.
 */
tick.core.max = (function tick$core$max(var_args){
var args__5882__auto__ = [];
var len__5876__auto___90456 = arguments.length;
var i__5877__auto___90457 = (0);
while(true){
if((i__5877__auto___90457 < len__5876__auto___90456)){
args__5882__auto__.push((arguments[i__5877__auto___90457]));

var G__90458 = (i__5877__auto___90457 + (1));
i__5877__auto___90457 = G__90458;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return tick.core.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(tick.core.max.cljs$core$IFn$_invoke$arity$variadic = (function (arg,args){
if(cljs.core.every_QMARK_(cljs.core.some_QMARK_,cljs.core.cons(arg,args))){
} else {
throw (new Error("Assert failed: (every? some? (cons arg args))"));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.core.greater,arg,args);
}));

(tick.core.max.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tick.core.max.cljs$lang$applyTo = (function (seq90314){
var G__90315 = cljs.core.first(seq90314);
var seq90314__$1 = cljs.core.next(seq90314);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__90315,seq90314__$1);
}));

/**
 * the lesser of x and y
 */
tick.core.lesser = (function tick$core$lesser(x,y){
if(cljs.core.truth_(tick.core._LT_.cljs$core$IFn$_invoke$arity$2(x,y))){
return x;
} else {
return y;
}
});
/**
 * Find the earliest of the given arguments. Callers should ensure that no
 *   argument is nil.
 */
tick.core.min = (function tick$core$min(var_args){
var args__5882__auto__ = [];
var len__5876__auto___90459 = arguments.length;
var i__5877__auto___90460 = (0);
while(true){
if((i__5877__auto___90460 < len__5876__auto___90459)){
args__5882__auto__.push((arguments[i__5877__auto___90460]));

var G__90461 = (i__5877__auto___90460 + (1));
i__5877__auto___90460 = G__90461;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return tick.core.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(tick.core.min.cljs$core$IFn$_invoke$arity$variadic = (function (arg,args){
if(cljs.core.every_QMARK_(cljs.core.some_QMARK_,cljs.core.cons(arg,args))){
} else {
throw (new Error("Assert failed: (every? some? (cons arg args))"));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.core.lesser,arg,args);
}));

(tick.core.min.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tick.core.min.cljs$lang$applyTo = (function (seq90316){
var G__90317 = cljs.core.first(seq90316);
var seq90316__$1 = cljs.core.next(seq90316);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__90317,seq90316__$1);
}));

/**
 * Same as clojure.core/max-key, but works on dates, rather than numbers
 */
tick.core.max_key = (function tick$core$max_key(var_args){
var G__90323 = arguments.length;
switch (G__90323) {
case 2:
return tick.core.max_key.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tick.core.max_key.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5901__auto__ = [];
var len__5876__auto___90463 = arguments.length;
var i__5877__auto___90464 = (0);
while(true){
if((i__5877__auto___90464 < len__5876__auto___90463)){
args_arr__5901__auto__.push((arguments[i__5877__auto___90464]));

var G__90465 = (i__5877__auto___90464 + (1));
i__5877__auto___90464 = G__90465;
continue;
} else {
}
break;
}

var argseq__5902__auto__ = ((((3) < args_arr__5901__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5901__auto__.slice((3)),(0),null)):null);
return tick.core.max_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5902__auto__);

}
});

(tick.core.max_key.cljs$core$IFn$_invoke$arity$2 = (function (_k,x){
return x;
}));

(tick.core.max_key.cljs$core$IFn$_invoke$arity$3 = (function (k,x,y){
if(cljs.core.truth_(tick.core._GT_.cljs$core$IFn$_invoke$arity$2((k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(x) : k.call(null,x)),(k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(y) : k.call(null,y))))){
return x;
} else {
return y;
}
}));

(tick.core.max_key.cljs$core$IFn$_invoke$arity$variadic = (function (k,x,y,more){
var kx = (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(x) : k.call(null,x));
var ky = (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(y) : k.call(null,y));
var vec__90324 = (cljs.core.truth_(tick.core._GT_.cljs$core$IFn$_invoke$arity$2(kx,ky))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,kx], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,ky], null));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90324,(0),null);
var kv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90324,(1),null);
var v__$1 = v;
var kv__$1 = kv;
var more__$1 = more;
while(true){
if(cljs.core.truth_(more__$1)){
var w = cljs.core.first(more__$1);
var kw = (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(w) : k.call(null,w));
if(cljs.core.truth_(tick.core._GT__EQ_.cljs$core$IFn$_invoke$arity$2(kw,kv__$1))){
var G__90466 = w;
var G__90467 = kw;
var G__90468 = cljs.core.next(more__$1);
v__$1 = G__90466;
kv__$1 = G__90467;
more__$1 = G__90468;
continue;
} else {
var G__90469 = v__$1;
var G__90470 = kv__$1;
var G__90471 = cljs.core.next(more__$1);
v__$1 = G__90469;
kv__$1 = G__90470;
more__$1 = G__90471;
continue;
}
} else {
return v__$1;
}
break;
}
}));

/** @this {Function} */
(tick.core.max_key.cljs$lang$applyTo = (function (seq90319){
var G__90320 = cljs.core.first(seq90319);
var seq90319__$1 = cljs.core.next(seq90319);
var G__90321 = cljs.core.first(seq90319__$1);
var seq90319__$2 = cljs.core.next(seq90319__$1);
var G__90322 = cljs.core.first(seq90319__$2);
var seq90319__$3 = cljs.core.next(seq90319__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__90320,G__90321,G__90322,seq90319__$3);
}));

(tick.core.max_key.cljs$lang$maxFixedArity = (3));

/**
 * Same as clojure.core/min-key, but works on dates, rather than numbers
 */
tick.core.min_key = (function tick$core$min_key(var_args){
var G__90332 = arguments.length;
switch (G__90332) {
case 2:
return tick.core.min_key.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tick.core.min_key.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5901__auto__ = [];
var len__5876__auto___90473 = arguments.length;
var i__5877__auto___90474 = (0);
while(true){
if((i__5877__auto___90474 < len__5876__auto___90473)){
args_arr__5901__auto__.push((arguments[i__5877__auto___90474]));

var G__90475 = (i__5877__auto___90474 + (1));
i__5877__auto___90474 = G__90475;
continue;
} else {
}
break;
}

var argseq__5902__auto__ = ((((3) < args_arr__5901__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5901__auto__.slice((3)),(0),null)):null);
return tick.core.min_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5902__auto__);

}
});

(tick.core.min_key.cljs$core$IFn$_invoke$arity$2 = (function (_k,x){
return x;
}));

(tick.core.min_key.cljs$core$IFn$_invoke$arity$3 = (function (k,x,y){
if(cljs.core.truth_(tick.core._LT_.cljs$core$IFn$_invoke$arity$2((k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(x) : k.call(null,x)),(k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(y) : k.call(null,y))))){
return x;
} else {
return y;
}
}));

(tick.core.min_key.cljs$core$IFn$_invoke$arity$variadic = (function (k,x,y,more){
var kx = (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(x) : k.call(null,x));
var ky = (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(y) : k.call(null,y));
var vec__90333 = (cljs.core.truth_(tick.core._LT_.cljs$core$IFn$_invoke$arity$2(kx,ky))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,kx], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,ky], null));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90333,(0),null);
var kv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90333,(1),null);
var v__$1 = v;
var kv__$1 = kv;
var more__$1 = more;
while(true){
if(cljs.core.truth_(more__$1)){
var w = cljs.core.first(more__$1);
var kw = (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(w) : k.call(null,w));
if(cljs.core.truth_(tick.core._LT__EQ_.cljs$core$IFn$_invoke$arity$2(kw,kv__$1))){
var G__90485 = w;
var G__90486 = kw;
var G__90487 = cljs.core.next(more__$1);
v__$1 = G__90485;
kv__$1 = G__90486;
more__$1 = G__90487;
continue;
} else {
var G__90488 = v__$1;
var G__90489 = kv__$1;
var G__90490 = cljs.core.next(more__$1);
v__$1 = G__90488;
kv__$1 = G__90489;
more__$1 = G__90490;
continue;
}
} else {
return v__$1;
}
break;
}
}));

/** @this {Function} */
(tick.core.min_key.cljs$lang$applyTo = (function (seq90328){
var G__90329 = cljs.core.first(seq90328);
var seq90328__$1 = cljs.core.next(seq90328);
var G__90330 = cljs.core.first(seq90328__$1);
var seq90328__$2 = cljs.core.next(seq90328__$1);
var G__90331 = cljs.core.first(seq90328__$2);
var seq90328__$3 = cljs.core.next(seq90328__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__90329,G__90330,G__90331,seq90328__$3);
}));

(tick.core.min_key.cljs$lang$maxFixedArity = (3));

tick.core.beginning_composite = (function tick$core$beginning_composite(m){
var map__90336 = m;
var map__90336__$1 = cljs.core.__destructure_map(map__90336);
var beginning = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90336__$1,new cljs.core.Keyword("tick","beginning","tick/beginning",82659968));
var intervals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90336__$1,new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314));
if(cljs.core.truth_(intervals)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tick.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("tick","beginning","tick/beginning",82659968),intervals));
} else {
return beginning;
}
});
tick.core.end_composite = (function tick$core$end_composite(m){
var map__90337 = m;
var map__90337__$1 = cljs.core.__destructure_map(map__90337);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90337__$1,new cljs.core.Keyword("tick","end","tick/end",-269896517));
var intervals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90337__$1,new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314));
if(cljs.core.truth_(intervals)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tick.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("tick","end","tick/end",-269896517),intervals));
} else {
return end;
}
});
(cljs.core.PersistentArrayMap.prototype.tick$protocols$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.tick$protocols$ITimeSpan$beginning$arity$1 = (function (m){
var m__$1 = this;
return tick.core.beginning_composite(m__$1);
}));

(cljs.core.PersistentArrayMap.prototype.tick$protocols$ITimeSpan$end$arity$1 = (function (m){
var m__$1 = this;
return tick.core.end_composite(m__$1);
}));
(cljs.core.PersistentHashMap.prototype.tick$protocols$ITimeSpan$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.tick$protocols$ITimeSpan$beginning$arity$1 = (function (m){
var m__$1 = this;
return tick.core.beginning_composite(m__$1);
}));

(cljs.core.PersistentHashMap.prototype.tick$protocols$ITimeSpan$end$arity$1 = (function (m){
var m__$1 = this;
return tick.core.end_composite(m__$1);
}));
/**
 * extract nanos from 'v'
 */
tick.core.nanos = (function tick$core$nanos(v){
return tick.protocols.nanos(v);
});
/**
 * extract micros from 'v'
 */
tick.core.micros = (function tick$core$micros(v){
return tick.protocols.micros(v);
});
/**
 * extract millis from 'v'
 */
tick.core.millis = (function tick$core$millis(v){
return tick.protocols.millis(v);
});
/**
 * extract seconds from 'v'
 */
tick.core.seconds = (function tick$core$seconds(v){
return tick.protocols.seconds(v);
});
/**
 * extract minutes from 'v'
 */
tick.core.minutes = (function tick$core$minutes(v){
return tick.protocols.minutes(v);
});
/**
 * extract hours from 'v'
 */
tick.core.hours = (function tick$core$hours(v){
return tick.protocols.hours(v);
});
/**
 * extract days from 'v'
 */
tick.core.days = (function tick$core$days(v){
return tick.protocols.days(v);
});
/**
 * extract months from 'v'
 */
tick.core.months = (function tick$core$months(v){
return tick.protocols.months(v);
});
/**
 * extract years from 'v'
 */
tick.core.years = (function tick$core$years(v){
return tick.protocols.years(v);
});
/**
 * divide TemporalAmount t by divisor, which is a unit e.g. :hours or a TemporalAmount
 */
tick.core.divide = (function tick$core$divide(t,divisor){
return tick.protocols.divide(t,divisor);
});
/**
 * to parse an iso-formatted date, use (t/date "2020..") instead
 */
tick.core.parse_date = (function tick$core$parse_date(date_str,formatter){
return cljc.java_time.local_date.parse.cljs$core$IFn$_invoke$arity$2(date_str,formatter);
});
/**
 * to parse an iso-formatted date-time, use (t/date-time "2020..") instead
 */
tick.core.parse_date_time = (function tick$core$parse_date_time(date_str,formatter){
return cljc.java_time.local_date_time.parse.cljs$core$IFn$_invoke$arity$2(date_str,formatter);
});
/**
 * to parse an iso-formatted time, use (t/time "20:20..") instead
 */
tick.core.parse_time = (function tick$core$parse_time(date_str,formatter){
return cljc.java_time.local_time.parse.cljs$core$IFn$_invoke$arity$2(date_str,formatter);
});
/**
 * to parse an iso-formatted offset-date-time, use (t/offset-date-time "2020..") instead
 */
tick.core.parse_offset_date_time = (function tick$core$parse_offset_date_time(date_str,formatter){
return cljc.java_time.offset_date_time.parse.cljs$core$IFn$_invoke$arity$2(date_str,formatter);
});
/**
 * to parse an iso-formatted year, use (t/year "2020") instead
 */
tick.core.parse_year = (function tick$core$parse_year(date_str,formatter){
return cljc.java_time.year.parse.cljs$core$IFn$_invoke$arity$2(date_str,formatter);
});
/**
 * to parse an iso-formatted year-month, use (t/year-month "2020..") instead
 */
tick.core.parse_year_month = (function tick$core$parse_year_month(date_str,formatter){
return cljc.java_time.year_month.parse.cljs$core$IFn$_invoke$arity$2(date_str,formatter);
});
/**
 * to parse an iso-formatted zoned-date-time, use (t/zoned-date-time "2020..") instead
 */
tick.core.parse_zoned_date_time = (function tick$core$parse_zoned_date_time(date_str,formatter){
return cljc.java_time.zoned_date_time.parse.cljs$core$IFn$_invoke$arity$2(date_str,formatter);
});

//# sourceMappingURL=tick.core.js.map
