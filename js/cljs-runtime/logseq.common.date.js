goog.provide('logseq.common.date');
if((typeof logseq !== 'undefined') && (typeof logseq.common !== 'undefined') && (typeof logseq.common.date !== 'undefined') && (typeof logseq.common.date.built_in_journal_title_formatters !== 'undefined')){
} else {
logseq.common.date.built_in_journal_title_formatters = (new cljs.core.List(null,"do MMM yyyy",(new cljs.core.List(null,"do MMMM yyyy",(new cljs.core.List(null,"MMM do, yyyy",(new cljs.core.List(null,"MMMM do, yyyy",(new cljs.core.List(null,"E, dd-MM-yyyy",(new cljs.core.List(null,"E, dd.MM.yyyy",(new cljs.core.List(null,"E, MM/dd/yyyy",(new cljs.core.List(null,"E, yyyy/MM/dd",(new cljs.core.List(null,"EEE, dd-MM-yyyy",(new cljs.core.List(null,"EEE, dd.MM.yyyy",(new cljs.core.List(null,"EEE, MM/dd/yyyy",(new cljs.core.List(null,"EEE, yyyy/MM/dd",(new cljs.core.List(null,"EEEE, dd-MM-yyyy",(new cljs.core.List(null,"EEEE, dd.MM.yyyy",(new cljs.core.List(null,"EEEE, MM/dd/yyyy",(new cljs.core.List(null,"EEEE, yyyy/MM/dd",(new cljs.core.List(null,"dd-MM-yyyy",(new cljs.core.List(null,"MM/dd/yyyy",(new cljs.core.List(null,"MM-dd-yyyy",(new cljs.core.List(null,"MM_dd_yyyy",(new cljs.core.List(null,"yyyy/MM/dd",(new cljs.core.List(null,"yyyy-MM-dd",(new cljs.core.List(null,"yyyy-MM-dd EEE",(new cljs.core.List(null,"yyyy-MM-dd EEEE",(new cljs.core.List(null,"yyyy_MM_dd",(new cljs.core.List(null,"yyyyMMdd",(new cljs.core.List(null,"yyyy\u5E74MM\u6708dd\u65E5",null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(7),null)),(8),null)),(9),null)),(10),null)),(11),null)),(12),null)),(13),null)),(14),null)),(15),null)),(16),null)),(17),null)),(18),null)),(19),null)),(20),null)),(21),null)),(22),null)),(23),null)),(24),null)),(25),null)),(26),null)),(27),null));
}
if((typeof logseq !== 'undefined') && (typeof logseq.common !== 'undefined') && (typeof logseq.common.date !== 'undefined') && (typeof logseq.common.date.slash_journal_title_formatters !== 'undefined')){
} else {
logseq.common.date.slash_journal_title_formatters = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56119_SHARP_){
return clojure.string.includes_QMARK_(p1__56119_SHARP_,"/");
}),logseq.common.date.built_in_journal_title_formatters);
}
logseq.common.date.journal_title_formatters = (function logseq$common$date$journal_title_formatters(date_formatter){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(date_formatter,logseq.common.date.built_in_journal_title_formatters));
});
/**
 * Given raw date string, return a normalized date string at best effort.
 * Warning: this is a function with heavy cost (likely 50ms). Use with caution
 */
logseq.common.date.normalize_date = (function logseq$common$date$normalize_date(s,date_formatter){
return cljs.core.some((function (formatter){
try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(formatter),s);
}catch (e56120){var _e = e56120;
return false;
}}),logseq.common.date.journal_title_formatters(date_formatter));
});
/**
 * Normalize journal title at best effort. Return nil if title is not a valid date.
 * Return goog.date.Date.
 * 
 * Return format: 20220812T000000
 */
logseq.common.date.normalize_journal_title = (function logseq$common$date$normalize_journal_title(title,date_formatter){
var and__5140__auto__ = title;
if(cljs.core.truth_(and__5140__auto__)){
return logseq.common.date.normalize_date(logseq.common.util.capitalize_all(title),date_formatter);
} else {
return and__5140__auto__;
}
});
/**
 * This is a loose rule, requires double check by journal-title->custom-format.
 * 
 * BUG: This also accepts strings like 3/4/5 as journal titles
 */
logseq.common.date.valid_journal_title_QMARK_ = (function logseq$common$date$valid_journal_title_QMARK_(title,date_formatter){
return cljs.core.boolean$(logseq.common.date.normalize_journal_title(title,date_formatter));
});
logseq.common.date.valid_journal_title_with_slash_QMARK_ = (function logseq$common$date$valid_journal_title_with_slash_QMARK_(title){
return cljs.core.some((function (p1__56121_SHARP_){
return logseq.common.date.valid_journal_title_QMARK_(title,p1__56121_SHARP_);
}),logseq.common.date.slash_journal_title_formatters);
});

//# sourceMappingURL=logseq.common.date.js.map
