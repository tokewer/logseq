goog.provide('frontend.context.i18n');
frontend.context.i18n.dicts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.dicts.dicts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tongue","fallback","tongue/fallback",1378320181),new cljs.core.Keyword(null,"en","en",88457073)], null)], 0));
frontend.context.i18n.translate = tongue.core.build_translate(frontend.context.i18n.dicts);
frontend.context.i18n.preferred_locale = (function frontend$context$i18n$preferred_locale(){
var or__5142__auto__ = (function (){var G__51657 = new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0());
if((G__51657 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__51657);
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"en","en",88457073);
}
});
frontend.context.i18n.locale_tag = (function frontend$context$i18n$locale_tag(language){
return cljs.core.name((function (){var or__5142__auto__ = (function (){var G__51660 = language;
if((G__51660 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__51660);
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"en","en",88457073);
}
})());
});
frontend.context.i18n.placeholder_pattern = /\{(\d+)\}/;
frontend.context.i18n.placeholder_split_pattern = /\{\d+\}/;
frontend.context.i18n.sentence_link_pattern = /\{\{([^}]+)\}\}/;
frontend.context.i18n.sentence_keyed_link_pattern = /\$([a-zA-Z_-]+)\{\{([^}]+)\}\}/;
frontend.context.i18n.rich_text_separator_by_locale = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ar","ar",-2093907980),"\u060C ",new cljs.core.Keyword(null,"fa","fa",484981183),"\u060C ",new cljs.core.Keyword(null,"ja","ja",-1704765727),"\u3001",new cljs.core.Keyword(null,"zh-CN","zh-CN",870973321),"\uFF0C",new cljs.core.Keyword(null,"zh-Hant","zh-Hant",1224284424),"\uFF0C"], null);
/**
 * tongue translator built against the raw locale dicts without any fallback.
 *   Returns a '{Missing key ...}' string for keys absent in the requested locale.
 */
frontend.context.i18n.translate_strict = tongue.core.build_translate(frontend.dicts.dicts);
/**
 * Translate using the user's current locale without English fallback for
 *   missing keys — returns nil when the key has no translation in the current
 *   locale. If translation throws (e.g. malformed value format), falls back to
 *   English and logs the error; that is distinct from a missing-key nil return.
 *   Callers that need a guaranteed string should use t.
 */
frontend.context.i18n.t_locale = (function frontend$context$i18n$t_locale(var_args){
var args__5882__auto__ = [];
var len__5876__auto___52094 = arguments.length;
var i__5877__auto___52095 = (0);
while(true){
if((i__5877__auto___52095 < len__5876__auto___52094)){
args__5882__auto__.push((arguments[i__5877__auto___52095]));

var G__52096 = (i__5877__auto___52095 + (1));
i__5877__auto___52095 = G__52096;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return frontend.context.i18n.t_locale.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(frontend.context.i18n.t_locale.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var lang = frontend.context.i18n.preferred_locale();
var result = (function (){try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.translate_strict,lang,args);
}catch (e51676){var e = e51676;
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.context.i18n",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"failed-translation","failed-translation",-790554549),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arguments","arguments",-1182834456),args,new cljs.core.Keyword(null,"lang","lang",-1819677104),lang], null),new cljs.core.Keyword(null,"line","line",212345235),60], null)),null);
} else {
}

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capture-error","capture-error",583122432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),e,new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"failed-translation","failed-translation",-790554549),new cljs.core.Keyword(null,"arguments","arguments",-1182834456),args,new cljs.core.Keyword(null,"lang","lang",-1819677104),lang], null)], null)], null));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.translate,new cljs.core.Keyword(null,"en","en",88457073),args);
}})();
if(clojure.string.starts_with_QMARK_((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(result)),"{Missing key")){
return null;
} else {
return result;
}
}));

(frontend.context.i18n.t_locale.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.context.i18n.t_locale.cljs$lang$applyTo = (function (seq51665){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51665));
}));

/**
 * Translate using English locale, ignoring user preference.
 * Useful for user-facing text that also requires output to the console.
 */
frontend.context.i18n.t_en = (function frontend$context$i18n$t_en(var_args){
var args__5882__auto__ = [];
var len__5876__auto___52097 = arguments.length;
var i__5877__auto___52098 = (0);
while(true){
if((i__5877__auto___52098 < len__5876__auto___52097)){
args__5882__auto__.push((arguments[i__5877__auto___52098]));

var G__52099 = (i__5877__auto___52098 + (1));
i__5877__auto___52098 = G__52099;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return frontend.context.i18n.t_en.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(frontend.context.i18n.t_en.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.translate,new cljs.core.Keyword(null,"en","en",88457073),args);
}));

(frontend.context.i18n.t_en.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.context.i18n.t_en.cljs$lang$applyTo = (function (seq51711){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51711));
}));

frontend.context.i18n.t = (function frontend$context$i18n$t(var_args){
var args__5882__auto__ = [];
var len__5876__auto___52102 = arguments.length;
var i__5877__auto___52103 = (0);
while(true){
if((i__5877__auto___52103 < len__5876__auto___52102)){
args__5882__auto__.push((arguments[i__5877__auto___52103]));

var G__52105 = (i__5877__auto___52103 + (1));
i__5877__auto___52103 = G__52105;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var preferred_language = frontend.context.i18n.preferred_locale();
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.translate,preferred_language,args);
}catch (e51741){var e = e51741;
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.context.i18n",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"failed-translation","failed-translation",-790554549),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arguments","arguments",-1182834456),args,new cljs.core.Keyword(null,"lang","lang",-1819677104),preferred_language], null),new cljs.core.Keyword(null,"line","line",212345235),81], null)),null);
} else {
}

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capture-error","capture-error",583122432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),e,new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"failed-translation","failed-translation",-790554549),new cljs.core.Keyword(null,"arguments","arguments",-1182834456),args,new cljs.core.Keyword(null,"lang","lang",-1819677104),preferred_language], null)], null)], null));

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(preferred_language,new cljs.core.Keyword(null,"en","en",88457073))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.translate,new cljs.core.Keyword(null,"en","en",88457073),args);
} else {
return null;
}
}}));

(frontend.context.i18n.t.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.context.i18n.t.cljs$lang$applyTo = (function (seq51725){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51725));
}));

frontend.context.i18n.tt = (function frontend$context$i18n$tt(var_args){
var args__5882__auto__ = [];
var len__5876__auto___52108 = arguments.length;
var i__5877__auto___52110 = (0);
while(true){
if((i__5877__auto___52110 < len__5876__auto___52108)){
args__5882__auto__.push((arguments[i__5877__auto___52110]));

var G__52111 = (i__5877__auto___52110 + (1));
i__5877__auto___52110 = G__52111;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return frontend.context.i18n.tt.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(frontend.context.i18n.tt.cljs$core$IFn$_invoke$arity$variadic = (function (keys){
var G__51757 = medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p1__51752_SHARP_){
return (!(clojure.string.starts_with_QMARK_(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__51752_SHARP_], 0)),"{Missing key")));
}),keys);
if((G__51757 == null)){
return null;
} else {
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__51757], 0));
}
}));

(frontend.context.i18n.tt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.context.i18n.tt.cljs$lang$applyTo = (function (seq51754){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51754));
}));

/**
 * Append `text` to `acc`, replacing newline characters with `[:br]` nodes.
 */
frontend.context.i18n.append_line_break_fragments = (function frontend$context$i18n$append_line_break_fragments(acc,text){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$3(text,/\r?\n/,(-1));
var last_idx = (cljs.core.count(parts) - (1));
return cljs.core.reduce_kv((function (acc__$1,idx,part){
var G__51791 = acc__$1;
var G__51791__$1 = (((!(cljs.core.empty_QMARK_(part))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__51791,part):G__51791);
if((idx < last_idx)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__51791__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null));
} else {
return G__51791__$1;
}
}),acc,parts);
});
frontend.context.i18n.append_rich_text_fragment = (function frontend$context$i18n$append_rich_text_fragment(acc,fragment,replace_newlines_QMARK_){
if(typeof fragment === 'string'){
if(cljs.core.truth_(replace_newlines_QMARK_)){
return frontend.context.i18n.append_line_break_fragments(acc,fragment);
} else {
if(cljs.core.empty_QMARK_(fragment)){
return acc;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,fragment);
}
}
} else {
if((fragment == null)){
return acc;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,fragment);

}
}
});
/**
 * Interpolate a translated template while allowing replacements to be hiccup
 * nodes or other non-string values.
 * 
 * When `replace-newlines?` is true, newline characters in string fragments are
 * replaced with `[:br]` nodes.
 */
frontend.context.i18n.interpolate_rich_text = (function frontend$context$i18n$interpolate_rich_text(var_args){
var G__51856 = arguments.length;
switch (G__51856) {
case 2:
return frontend.context.i18n.interpolate_rich_text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.context.i18n.interpolate_rich_text.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.context.i18n.interpolate_rich_text.cljs$core$IFn$_invoke$arity$2 = (function (template,replacements){
return frontend.context.i18n.interpolate_rich_text.cljs$core$IFn$_invoke$arity$3(template,replacements,false);
}));

(frontend.context.i18n.interpolate_rich_text.cljs$core$IFn$_invoke$arity$3 = (function (template,replacements,replace_newlines_QMARK_){
if((!(typeof template === 'string'))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [template], null);
} else {
var segments = clojure.string.split.cljs$core$IFn$_invoke$arity$2(template,frontend.context.i18n.placeholder_split_pattern);
var placeholder_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.re_seq(frontend.context.i18n.placeholder_pattern,template));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__51880){
var vec__51881 = p__51880;
var segment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51881,(0),null);
var placeholder_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51881,(1),null);
var acc_SINGLEQUOTE_ = frontend.context.i18n.append_rich_text_fragment(acc,segment,replace_newlines_QMARK_);
if(cljs.core.not(placeholder_id)){
return acc_SINGLEQUOTE_;
} else {
var idx = (parseInt(placeholder_id,(10)) - (1));
var replacement = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(replacements,idx,null);
if((replacement == null)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_SINGLEQUOTE_,(""+"{"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(placeholder_id)+"}"));
} else {
return frontend.context.i18n.append_rich_text_fragment(acc_SINGLEQUOTE_,replacement,replace_newlines_QMARK_);
}
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,segments,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(placeholder_ids,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}
}));

(frontend.context.i18n.interpolate_rich_text.cljs$lang$maxFixedArity = 3);

/**
 * Interpolate a translated template and wrap the fragments in a fragment node.
 * 
 * When `replace-newlines?` is true, newline characters in string fragments are
 * replaced with `[:br]` nodes.
 */
frontend.context.i18n.interpolate_rich_text_node = (function frontend$context$i18n$interpolate_rich_text_node(var_args){
var G__51894 = arguments.length;
switch (G__51894) {
case 2:
return frontend.context.i18n.interpolate_rich_text_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.context.i18n.interpolate_rich_text_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.context.i18n.interpolate_rich_text_node.cljs$core$IFn$_invoke$arity$2 = (function (template,replacements){
return frontend.context.i18n.interpolate_rich_text_node.cljs$core$IFn$_invoke$arity$3(template,replacements,false);
}));

(frontend.context.i18n.interpolate_rich_text_node.cljs$core$IFn$_invoke$arity$3 = (function (template,replacements,replace_newlines_QMARK_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),frontend.context.i18n.interpolate_rich_text.cljs$core$IFn$_invoke$arity$3(template,replacements,replace_newlines_QMARK_));
}));

(frontend.context.i18n.interpolate_rich_text_node.cljs$lang$maxFixedArity = 3);

/**
 * Replace newline characters in a string or rich-text string fragments with
 * `[:br]` nodes.
 */
frontend.context.i18n.replace_newlines_with_br = (function frontend$context$i18n$replace_newlines_with_br(fragments){
var fragments_SINGLEQUOTE_ = ((typeof fragments === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fragments], null):fragments);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,fragment){
if(typeof fragment === 'string'){
return frontend.context.i18n.append_line_break_fragments(acc,fragment);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,fragment);
}
}),cljs.core.PersistentVector.EMPTY,fragments_SINGLEQUOTE_);
});
/**
 * Join rich-text fragments with a locale-aware separator.
 */
frontend.context.i18n.locale_join_rich_text = (function frontend$context$i18n$locale_join_rich_text(fragments){
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.rich_text_separator_by_locale,frontend.context.i18n.preferred_locale(),", ");
var fragments_SINGLEQUOTE_ = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,fragments));
return cljs.core.vec(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(separator,fragments_SINGLEQUOTE_));
});
/**
 * Join rich-text fragments with a locale-aware separator and wrap them in a
 * fragment node.
 */
frontend.context.i18n.locale_join_rich_text_node = (function frontend$context$i18n$locale_join_rich_text_node(fragments){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),frontend.context.i18n.locale_join_rich_text(fragments));
});
/**
 * Format a number using Intl.NumberFormat with the application locale.
 */
frontend.context.i18n.locale_format_number = (function frontend$context$i18n$locale_format_number(var_args){
var G__51939 = arguments.length;
switch (G__51939) {
case 1:
return frontend.context.i18n.locale_format_number.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.context.i18n.locale_format_number.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.context.i18n.locale_format_number.cljs$core$IFn$_invoke$arity$1 = (function (n){
return frontend.context.i18n.locale_format_number.cljs$core$IFn$_invoke$arity$2(n,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.context.i18n.locale_format_number.cljs$core$IFn$_invoke$arity$2 = (function (n,opts){
var tag = frontend.context.i18n.locale_tag(new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()));
return (new Intl.NumberFormat(tag,cljs.core.clj__GT_js(opts))).format(n);
}));

(frontend.context.i18n.locale_format_number.cljs$lang$maxFixedArity = 2);

/**
 * Format a js/Date using Intl.DateTimeFormat with the application locale.
 */
frontend.context.i18n.locale_format_date = (function frontend$context$i18n$locale_format_date(var_args){
var G__51944 = arguments.length;
switch (G__51944) {
case 1:
return frontend.context.i18n.locale_format_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.context.i18n.locale_format_date.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.context.i18n.locale_format_date.cljs$core$IFn$_invoke$arity$1 = (function (d){
return frontend.context.i18n.locale_format_date.cljs$core$IFn$_invoke$arity$2(d,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"year","year",335913393),"numeric",new cljs.core.Keyword(null,"month","month",-1960248533),"short",new cljs.core.Keyword(null,"day","day",-274800446),"numeric"], null));
}));

(frontend.context.i18n.locale_format_date.cljs$core$IFn$_invoke$arity$2 = (function (d,opts){
var tag = frontend.context.i18n.locale_tag(new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()));
return (new Intl.DateTimeFormat(tag,cljs.core.clj__GT_js(opts))).format(d);
}));

(frontend.context.i18n.locale_format_date.cljs$lang$maxFixedArity = 2);

/**
 * Format a js/Date as time string using Intl.DateTimeFormat with the
 * application locale.
 */
frontend.context.i18n.locale_format_time = (function frontend$context$i18n$locale_format_time(d){
return frontend.context.i18n.locale_format_date.cljs$core$IFn$_invoke$arity$2(d,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hour","hour",-555989214),"2-digit",new cljs.core.Keyword(null,"minute","minute",-642875969),"2-digit",new cljs.core.Keyword(null,"hourCycle","hourCycle",-1723448226),"h23"], null));
});
/**
 * Split `template` into segments for sentence link interpolation.
 * When `keyed?` is true, matches $key{{text}} patterns; otherwise matches {{text}}.
 */
frontend.context.i18n.split_by_sentence_links = (function frontend$context$i18n$split_by_sentence_links(template,keyed_QMARK_){
var pat = (cljs.core.truth_(keyed_QMARK_)?frontend.context.i18n.sentence_keyed_link_pattern:frontend.context.i18n.sentence_link_pattern);
var remaining = template;
var result = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5823__auto__ = cljs.core.first(cljs.core.re_seq(pat,remaining));
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
var full_match = cljs.core.first(m);
var idx = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(remaining,full_match);
var before = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(remaining,(0),idx);
var after = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remaining,(idx + cljs.core.count(full_match)));
var G__52127 = after;
var G__52128 = (cljs.core.truth_(keyed_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),before,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.second(m)),new cljs.core.Keyword(null,"link-text","link-text",224432076),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(2))], null)):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),before,new cljs.core.Keyword(null,"link-text","link-text",224432076),cljs.core.second(m)], null)));
remaining = G__52127;
result = G__52128;
continue;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),remaining], null));
}
break;
}
});
/**
 * Interpolate a translated complete-sentence template that may contain:
 * - Numeric placeholders {1}, {2}, etc. (text substitution via :placeholders)
 * - Link placeholders {{display text}} or $key{{display text}} (via :links)
 * 
 * :placeholders — vector of strings substituted for {1}, {2}, etc. in order
 * :links        — either:
 *   - vector of link-attrs maps, applied to each {{text}} in sequence
 *   - map of keyword->link-attrs, applied to each $key{{text}} by key
 * 
 * Returns a [:<> ...] hiccup fragment.
 */
frontend.context.i18n.interpolate_sentence = (function frontend$context$i18n$interpolate_sentence(var_args){
var args__5882__auto__ = [];
var len__5876__auto___52129 = arguments.length;
var i__5877__auto___52130 = (0);
while(true){
if((i__5877__auto___52130 < len__5876__auto___52129)){
args__5882__auto__.push((arguments[i__5877__auto___52130]));

var G__52131 = (i__5877__auto___52130 + (1));
i__5877__auto___52130 = G__52131;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.context.i18n.interpolate_sentence.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.context.i18n.interpolate_sentence.cljs$core$IFn$_invoke$arity$variadic = (function (template,p__52044){
var map__52045 = p__52044;
var map__52045__$1 = cljs.core.__destructure_map(map__52045);
var placeholders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52045__$1,new cljs.core.Keyword(null,"placeholders","placeholders",1819747205));
var links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52045__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var template_SINGLEQUOTE_ = ((cljs.core.seq(placeholders))?(function (){var t = template;
var idx = (1);
var remaining = placeholders;
while(true){
if(cljs.core.empty_QMARK_(remaining)){
return t;
} else {
var G__52134 = clojure.string.replace(t,(""+"{"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)+"}"),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(remaining))));
var G__52135 = (idx + (1));
var G__52136 = cljs.core.rest(remaining);
t = G__52134;
idx = G__52135;
remaining = G__52136;
continue;
}
break;
}
})():template);
var keyed_QMARK_ = cljs.core.map_QMARK_(links);
var segments = frontend.context.i18n.split_by_sentence_links(template_SINGLEQUOTE_,keyed_QMARK_);
var link_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var fragments = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__52065){
var map__52066 = p__52065;
var map__52066__$1 = cljs.core.__destructure_map(map__52066);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52066__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52066__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var link_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52066__$1,new cljs.core.Keyword(null,"link-text","link-text",224432076));
var acc_SINGLEQUOTE_ = ((cljs.core.empty_QMARK_(text))?acc:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,text));
if(cljs.core.truth_(link_text)){
var attrs = ((keyed_QMARK_)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(links,key):cljs.core.nth.cljs$core$IFn$_invoke$arity$3(links,cljs.core.deref(link_idx),null));
if(keyed_QMARK_){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(link_idx,cljs.core.inc);
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),attrs,link_text], null));
} else {
return acc_SINGLEQUOTE_;
}
}),cljs.core.PersistentVector.EMPTY,segments);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),fragments);
}));

(frontend.context.i18n.interpolate_sentence.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.context.i18n.interpolate_sentence.cljs$lang$applyTo = (function (seq52002){
var G__52003 = cljs.core.first(seq52002);
var seq52002__$1 = cljs.core.next(seq52002);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52003,seq52002__$1);
}));

frontend.context.i18n.fetch_local_language = (function frontend$context$i18n$fetch_local_language(){
return window.navigator.language;
});
frontend.context.i18n.start = (function frontend$context$i18n$start(){
var preferred_language = new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0());
if((preferred_language == null)){
return frontend.state.set_preferred_language_BANG_(frontend.context.i18n.fetch_local_language());
} else {
return null;
}
});

//# sourceMappingURL=frontend.context.i18n.js.map
