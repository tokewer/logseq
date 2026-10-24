goog.provide('frontend.date');
goog.scope(function(){
  frontend.date.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$chrono_node$dist$cjs$index=shadow.js.require("module$node_modules$chrono_node$dist$cjs$index", {});
frontend.date.custom_formatter = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ssZZ");
frontend.date.custom_formatter_2 = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd-HH-mm-ss");
frontend.date.mmm_do_yyyy_formatter = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("MMM do, yyyy");
frontend.date.yyyy_MM_dd_HH_mm_formatter = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd HH:mm");
frontend.date.iso_parser = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSSS'Z'");
frontend.date.nld_parse = (function frontend$date$nld_parse(s){
if(typeof s === 'string'){
var fexpr__56122 = frontend.date.goog$module$goog$object.get(module$node_modules$chrono_node$dist$cjs$index,"parseDate");
return (fexpr__56122.cljs$core$IFn$_invoke$arity$1 ? fexpr__56122.cljs$core$IFn$_invoke$arity$1(s) : fexpr__56122.call(null,s));
} else {
return null;
}
});
frontend.date.journal_title_formatters = (function frontend$date$journal_title_formatters(){
return logseq.common.date.journal_title_formatters(frontend.state.get_date_formatter());
});
frontend.date.get_date_time_string = (function frontend$date$get_date_time_string(var_args){
var G__56126 = arguments.length;
switch (G__56126) {
case 0:
return frontend.date.get_date_time_string.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__5901__auto__ = [];
var len__5876__auto___56146 = arguments.length;
var i__5877__auto___56147 = (0);
while(true){
if((i__5877__auto___56147 < len__5876__auto___56146)){
args_arr__5901__auto__.push((arguments[i__5877__auto___56147]));

var G__56148 = (i__5877__auto___56147 + (1));
i__5877__auto___56147 = G__56148;
continue;
} else {
}
break;
}

var argseq__5902__auto__ = ((((1) < args_arr__5901__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5901__auto__.slice((1)),(0),null)):null);
return frontend.date.get_date_time_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5902__auto__);

}
});

(frontend.date.get_date_time_string.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.date.get_date_time_string(cljs_time.core.now());
}));

(frontend.date.get_date_time_string.cljs$core$IFn$_invoke$arity$variadic = (function (date_time,p__56127){
var map__56129 = p__56127;
var map__56129__$1 = cljs.core.__destructure_map(map__56129);
var formatter_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56129__$1,new cljs.core.Keyword(null,"formatter-str","formatter-str",-710541591));
return cljs_time.format.unparse((cljs.core.truth_(formatter_str)?cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(formatter_str):frontend.date.custom_formatter),date_time);
}));

/** @this {Function} */
(frontend.date.get_date_time_string.cljs$lang$applyTo = (function (seq56124){
var G__56125 = cljs.core.first(seq56124);
var seq56124__$1 = cljs.core.next(seq56124);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56125,seq56124__$1);
}));

(frontend.date.get_date_time_string.cljs$lang$maxFixedArity = (1));

frontend.date.get_date_time_string_2 = (function frontend$date$get_date_time_string_2(var_args){
var G__56131 = arguments.length;
switch (G__56131) {
case 0:
return frontend.date.get_date_time_string_2.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.date.get_date_time_string_2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.date.get_date_time_string_2.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.date.get_date_time_string_2.cljs$core$IFn$_invoke$arity$1(cljs_time.local.local_now());
}));

(frontend.date.get_date_time_string_2.cljs$core$IFn$_invoke$arity$1 = (function (date_time){
return cljs_time.format.unparse(frontend.date.custom_formatter_2,date_time);
}));

(frontend.date.get_date_time_string_2.cljs$lang$maxFixedArity = 1);

frontend.date.journal_name = (function frontend$date$journal_name(var_args){
var G__56133 = arguments.length;
switch (G__56133) {
case 0:
return frontend.date.journal_name.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.date.journal_name.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.date.journal_name.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.date.journal_name.cljs$core$IFn$_invoke$arity$1(cljs_time.local.local_now());
}));

(frontend.date.journal_name.cljs$core$IFn$_invoke$arity$1 = (function (date){
var formatter = frontend.state.get_date_formatter();
try{return logseq.common.util.date_time.format(date,formatter);
}catch (e56134){var e = e56134;
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.date",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parse-journal-date","parse-journal-date",-1090640805),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"Failed to parse date to journal name.",new cljs.core.Keyword(null,"date","date",-1463434462),date,new cljs.core.Keyword(null,"format","format",-1306924766),formatter], null),new cljs.core.Keyword(null,"line","line",212345235),53], null)),null);
} else {
}

throw e;
}}));

(frontend.date.journal_name.cljs$lang$maxFixedArity = 1);

frontend.date.start_of_day = (function frontend$date$start_of_day(date){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(date),cljs_time.core.month(date),cljs_time.core.day(date));
});
frontend.date.today = (function frontend$date$today(){
return frontend.date.journal_name.cljs$core$IFn$_invoke$arity$0();
});
frontend.date.today_journal_day = (function frontend$date$today_journal_day(){
return logseq.common.util.date_time.date__GT_int((new Date()));
});
frontend.date.today_name = (function frontend$date$today_name(){
return cljs_time.format.unparse(frontend.date.mmm_do_yyyy_formatter,cljs_time.core.today());
});
frontend.date.tomorrow = (function frontend$date$tomorrow(){
return frontend.date.journal_name.cljs$core$IFn$_invoke$arity$1(cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(frontend.date.start_of_day(cljs_time.local.local_now()),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1))));
});
frontend.date.yesterday = (function frontend$date$yesterday(){
return frontend.date.journal_name.cljs$core$IFn$_invoke$arity$1(cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(frontend.date.start_of_day(cljs_time.local.local_now()),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1))));
});
frontend.date.get_current_time = (function frontend$date$get_current_time(){
return frontend.context.i18n.locale_format_time((new Date()));
});
frontend.date.valid_journal_title_QMARK_ = (function frontend$date$valid_journal_title_QMARK_(title){
return logseq.common.date.valid_journal_title_QMARK_(title,frontend.state.get_date_formatter());
});
frontend.date.journal_title__GT_ = (function frontend$date$journal_title__GT_(var_args){
var G__56136 = arguments.length;
switch (G__56136) {
case 2:
return frontend.date.journal_title__GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.date.journal_title__GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.date.journal_title__GT_.cljs$core$IFn$_invoke$arity$2 = (function (journal_title,then_fn){
return frontend.date.journal_title__GT_.cljs$core$IFn$_invoke$arity$3(journal_title,then_fn,logseq.common.util.date_time.safe_journal_title_formatters(frontend.state.get_date_formatter()));
}));

(frontend.date.journal_title__GT_.cljs$core$IFn$_invoke$arity$3 = (function (journal_title,then_fn,formatters){
return logseq.common.util.date_time.journal_title__GT_(journal_title,then_fn,formatters);
}));

(frontend.date.journal_title__GT_.cljs$lang$maxFixedArity = 3);

frontend.date.journal_title__GT_int = (function frontend$date$journal_title__GT_int(journal_title){
return logseq.common.util.date_time.journal_title__GT_int(journal_title,logseq.common.util.date_time.safe_journal_title_formatters(frontend.state.get_date_formatter()));
});
frontend.date.journal_day__GT_utc_ms = logseq.common.util.date_time.journal_day__GT_ms;
frontend.date.journal_day__GT_local_ms = logseq.common.util.date_time.journal_day__GT_local_ms;
frontend.date.journal_day_local_range_ms = logseq.common.util.date_time.journal_day_local_range_ms;
frontend.date.journal_title__GT_long = (function frontend$date$journal_title__GT_long(journal_title){
return frontend.date.journal_title__GT_.cljs$core$IFn$_invoke$arity$2(journal_title,(function (p1__56137_SHARP_){
return cljs_time.coerce.to_long(p1__56137_SHARP_);
}));
});
frontend.date.int__GT_local_time_2 = (function frontend$date$int__GT_local_time_2(n){
return cljs_time.format.unparse(frontend.date.yyyy_MM_dd_HH_mm_formatter,cljs_time.core.to_default_time_zone(cljs_time.coerce.from_long(n)));
});
frontend.date.parse_iso = (function frontend$date$parse_iso(string){
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(frontend.date.iso_parser,string);
});
frontend.date.js_date__GT_journal_title = (function frontend$date$js_date__GT_journal_title(date){
return frontend.date.journal_name.cljs$core$IFn$_invoke$arity$1(cljs_time.core.to_default_time_zone(date));
});
frontend.date.js_date__GT_goog_date = (function frontend$date$js_date__GT_goog_date(d){
if(cljs.core.truth_((function (){var G__56138 = d;
if((G__56138 == null)){
return null;
} else {
return (G__56138 instanceof Date);
}
})())){
return (new goog.date.Date(d.getFullYear(),d.getMonth(),d.getDate()));
} else {
return d;

}
});
frontend.date.nlp_pages = cljs.core.PersistentVector.fromArray(["Today","Tomorrow","Yesterday","Next week","This week","Last week","Next month","This month","Last month","Next year","This year","Last year","Last Monday","Last Tuesday","Last Wednesday","Last Thursday","Last Friday","Last Saturday","Last Sunday","This Monday","This Tuesday","This Wednesday","This Thursday","This Friday","This Saturday","This Sunday","Next Monday","Next Tuesday","Next Wednesday","Next Thursday","Next Friday","Next Saturday","Next Sunday"], true);
/**
 * Derives a :date.nlp/* i18n key from an English NLP page string.
 *   Example: "Last Monday" -> :date.nlp/last-monday
 */
frontend.date.nlp_page__GT_i18n_key = (function frontend$date$nlp_page__GT_i18n_key(s){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("date.nlp",clojure.string.replace(clojure.string.lower_case(s)," ","-"));
});
/**
 * Wraps a collection of English display strings, returning a seq of maps with
 *   {:block/title <translated-label> :nlp-original-title <english-string>
 * ...extra}.
 *   key-fn derives an i18n keyword from each English string.
 *   t-fn is the translation function (frontend.context.i18n/t).
 */
frontend.date.with_i18n_titles = (function frontend$date$with_i18n_titles(items,key_fn,t_fn,extra){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (en){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([extra,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","title","block/title",710445684),(function (){var G__56139 = (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(en) : key_fn.call(null,en));
return (t_fn.cljs$core$IFn$_invoke$arity$1 ? t_fn.cljs$core$IFn$_invoke$arity$1(G__56139) : t_fn.call(null,G__56139));
})(),new cljs.core.Keyword(null,"nlp-original-title","nlp-original-title",2141342504),en], null)], 0));
}),items);
});
/**
 * Returns nlp-pages as a seq of maps with translated :block/title labels.
 *   :nlp-original-title preserves the English string for chrono-node NLP parsing.
 *   Accepts optional keyword args merged into every output map.
 */
frontend.date.nlp_pages_i18n = (function frontend$date$nlp_pages_i18n(var_args){
var args__5882__auto__ = [];
var len__5876__auto___56157 = arguments.length;
var i__5877__auto___56158 = (0);
while(true){
if((i__5877__auto___56158 < len__5876__auto___56157)){
args__5882__auto__.push((arguments[i__5877__auto___56158]));

var G__56160 = (i__5877__auto___56158 + (1));
i__5877__auto___56158 = G__56160;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return frontend.date.nlp_pages_i18n.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(frontend.date.nlp_pages_i18n.cljs$core$IFn$_invoke$arity$variadic = (function (p__56141){
var map__56142 = p__56141;
var map__56142__$1 = cljs.core.__destructure_map(map__56142);
var extra = map__56142__$1;
return frontend.date.with_i18n_titles(frontend.date.nlp_pages,frontend.date.nlp_page__GT_i18n_key,frontend.context.i18n.t,extra);
}));

(frontend.date.nlp_pages_i18n.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.date.nlp_pages_i18n.cljs$lang$applyTo = (function (seq56140){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56140));
}));


//# sourceMappingURL=frontend.date.js.map
