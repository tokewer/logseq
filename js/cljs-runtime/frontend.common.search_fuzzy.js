goog.provide('frontend.common.search_fuzzy');
var module$node_modules$remove_accents$index=shadow.js.require("module$node_modules$remove_accents$index", {});
var module$node_modules$tiny_pinyin$dist$index=shadow.js.require("module$node_modules$tiny_pinyin$dist$index", {});
frontend.common.search_fuzzy.MAX_STRING_LENGTH = 1000.0;
frontend.common.search_fuzzy.clean_str = (function frontend$common$search_fuzzy$clean_str(s){
return clojure.string.lower_case(clojure.string.replace(clojure.string.lower_case(s),/[\[ \\\/_\]\(\)]+/,""));
});
frontend.common.search_fuzzy.char_array = (function frontend$common$search_fuzzy$char_array(s){
return cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(s));
});
frontend.common.search_fuzzy.remove_accents = (function frontend$common$search_fuzzy$remove_accents(s){
var temp__5823__auto__ = module$node_modules$remove_accents$index.remove;
if(cljs.core.truth_(temp__5823__auto__)){
var remove_fn = temp__5823__auto__;
return (remove_fn.cljs$core$IFn$_invoke$arity$1 ? remove_fn.cljs$core$IFn$_invoke$arity$1(s) : remove_fn.call(null,s));
} else {
return module$node_modules$remove_accents$index(s);
}
});
frontend.common.search_fuzzy.str_len_distance = (function frontend$common$search_fuzzy$str_len_distance(s1,s2){
var c1 = cljs.core.count(s1);
var c2 = cljs.core.count(s2);
var maxed = cljs.core.max.cljs$core$IFn$_invoke$arity$2(c1,c2);
var mined = cljs.core.min.cljs$core$IFn$_invoke$arity$2(c1,c2);
return ((1) - ((maxed - mined) / maxed));
});
/**
 * Normalize string for searching (loose)
 */
frontend.common.search_fuzzy.search_normalize = (function frontend$common$search_fuzzy$search_normalize(var_args){
var args__5882__auto__ = [];
var len__5876__auto___60684 = arguments.length;
var i__5877__auto___60685 = (0);
while(true){
if((i__5877__auto___60685 < len__5876__auto___60684)){
args__5882__auto__.push((arguments[i__5877__auto___60685]));

var G__60686 = (i__5877__auto___60685 + (1));
i__5877__auto___60685 = G__60686;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return frontend.common.search_fuzzy.search_normalize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(frontend.common.search_fuzzy.search_normalize.cljs$core$IFn$_invoke$arity$variadic = (function (s,remove_accents_QMARK_,p__60606){
var map__60607 = p__60606;
var map__60607__$1 = cljs.core.__destructure_map(map__60607);
var lower_case_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60607__$1,new cljs.core.Keyword(null,"lower-case?","lower-case?",1004419207),true);
if(cljs.core.truth_(s)){
var s_SINGLEQUOTE_ = (cljs.core.truth_(lower_case_QMARK_)?clojure.string.lower_case(s):s);
var normalize_str = s_SINGLEQUOTE_.normalize("NFKC");
if(cljs.core.truth_(remove_accents_QMARK_)){
return frontend.common.search_fuzzy.remove_accents(normalize_str);
} else {
return normalize_str;
}
} else {
return null;
}
}));

(frontend.common.search_fuzzy.search_normalize.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.common.search_fuzzy.search_normalize.cljs$lang$applyTo = (function (seq60598){
var G__60599 = cljs.core.first(seq60598);
var seq60598__$1 = cljs.core.next(seq60598);
var G__60600 = cljs.core.first(seq60598__$1);
var seq60598__$2 = cljs.core.next(seq60598__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60599,G__60600,seq60598__$2);
}));

frontend.common.search_fuzzy.score = (function frontend$common$search_fuzzy$score(oquery,ostr){
var query = frontend.common.search_fuzzy.search_normalize(frontend.common.search_fuzzy.clean_str(oquery),true);
var original_s = frontend.common.search_fuzzy.search_normalize(frontend.common.search_fuzzy.clean_str(ostr),true);
var q = cljs.core.seq(frontend.common.search_fuzzy.char_array(query));
var s = cljs.core.seq(frontend.common.search_fuzzy.char_array(original_s));
var mult = (1);
var idx = frontend.common.search_fuzzy.MAX_STRING_LENGTH;
var score_SINGLEQUOTE_ = (0);
while(true){
if(cljs.core.empty_QMARK_(q)){
return (((score_SINGLEQUOTE_ + frontend.common.search_fuzzy.str_len_distance(query,original_s)) + ((clojure.string.starts_with_QMARK_(original_s,query))?(frontend.common.search_fuzzy.MAX_STRING_LENGTH + (10)):((((0) <= original_s.indexOf(query)))?frontend.common.search_fuzzy.MAX_STRING_LENGTH:((((0) <= original_s.indexOf(query)))?(frontend.common.search_fuzzy.MAX_STRING_LENGTH - 0.1):(0)
)))) + ((cljs.core.empty_QMARK_(s))?(1):(0)));
} else {
if(cljs.core.empty_QMARK_(s)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(q),cljs.core.first(s))){
var G__60689 = cljs.core.rest(q);
var G__60690 = cljs.core.rest(s);
var G__60691 = (mult + (1));
var G__60692 = (idx - (1));
var G__60693 = (mult + score_SINGLEQUOTE_);
q = G__60689;
s = G__60690;
mult = G__60691;
idx = G__60692;
score_SINGLEQUOTE_ = G__60693;
continue;
} else {
var G__60694 = q;
var G__60695 = cljs.core.rest(s);
var G__60696 = (1);
var G__60697 = (idx - (1));
var G__60698 = (score_SINGLEQUOTE_ - 0.1);
q = G__60694;
s = G__60695;
mult = G__60696;
idx = G__60697;
score_SINGLEQUOTE_ = G__60698;
continue;
}

}
}
break;
}
});
frontend.common.search_fuzzy.fuzzy_search = (function frontend$common$search_fuzzy$fuzzy_search(var_args){
var args__5882__auto__ = [];
var len__5876__auto___60699 = arguments.length;
var i__5877__auto___60700 = (0);
while(true){
if((i__5877__auto___60700 < len__5876__auto___60699)){
args__5882__auto__.push((arguments[i__5877__auto___60700]));

var G__60701 = (i__5877__auto___60700 + (1));
i__5877__auto___60700 = G__60701;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return frontend.common.search_fuzzy.fuzzy_search.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(frontend.common.search_fuzzy.fuzzy_search.cljs$core$IFn$_invoke$arity$variadic = (function (data,query,p__60623){
var map__60624 = p__60623;
var map__60624__$1 = cljs.core.__destructure_map(map__60624);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60624__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),(20));
var extract_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60624__$1,new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.take.cljs$core$IFn$_invoke$arity$2(limit,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,cljs.core.compare),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60615_SHARP_){
return ((0) < new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(p1__60615_SHARP_));
}),(function (){var iter__5628__auto__ = (function frontend$common$search_fuzzy$iter__60628(s__60629){
return (new cljs.core.LazySeq(null,(function (){
var s__60629__$1 = s__60629;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__60629__$1);
if(temp__5825__auto__){
var s__60629__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60629__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__60629__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__60631 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__60630 = (0);
while(true){
if((i__60630 < size__5627__auto__)){
var item = cljs.core._nth(c__5626__auto__,i__60630);
cljs.core.chunk_append(b__60631,(function (){var s = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(extract_fn)?(extract_fn.cljs$core$IFn$_invoke$arity$1 ? extract_fn.cljs$core$IFn$_invoke$arity$1(item) : extract_fn.call(null,item)):item)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),item,new cljs.core.Keyword(null,"score","score",-1963588780),frontend.common.search_fuzzy.score(query,s)], null);
})());

var G__60702 = (i__60630 + (1));
i__60630 = G__60702;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60631),frontend$common$search_fuzzy$iter__60628(cljs.core.chunk_rest(s__60629__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60631),null);
}
} else {
var item = cljs.core.first(s__60629__$2);
return cljs.core.cons((function (){var s = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(extract_fn)?(extract_fn.cljs$core$IFn$_invoke$arity$1 ? extract_fn.cljs$core$IFn$_invoke$arity$1(item) : extract_fn.call(null,item)):item)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),item,new cljs.core.Keyword(null,"score","score",-1963588780),frontend.common.search_fuzzy.score(query,s)], null);
})(),frontend$common$search_fuzzy$iter__60628(cljs.core.rest(s__60629__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(data);
})()))));
}));

(frontend.common.search_fuzzy.fuzzy_search.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.common.search_fuzzy.fuzzy_search.cljs$lang$applyTo = (function (seq60616){
var G__60617 = cljs.core.first(seq60616);
var seq60616__$1 = cljs.core.next(seq60616);
var G__60618 = cljs.core.first(seq60616__$1);
var seq60616__$2 = cljs.core.next(seq60616__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60617,G__60618,seq60616__$2);
}));

/**
 * Like fuzzy-search but scores each item against multiple extract-fns,
 *   taking the best score. Extract-fns that return nil or blank strings are
 *   skipped — no score is computed for those fields.
 */
frontend.common.search_fuzzy.fuzzy_search_multi = (function frontend$common$search_fuzzy$fuzzy_search_multi(var_args){
var args__5882__auto__ = [];
var len__5876__auto___60705 = arguments.length;
var i__5877__auto___60706 = (0);
while(true){
if((i__5877__auto___60706 < len__5876__auto___60705)){
args__5882__auto__.push((arguments[i__5877__auto___60706]));

var G__60707 = (i__5877__auto___60706 + (1));
i__5877__auto___60706 = G__60707;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return frontend.common.search_fuzzy.fuzzy_search_multi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(frontend.common.search_fuzzy.fuzzy_search_multi.cljs$core$IFn$_invoke$arity$variadic = (function (data,query,p__60659){
var map__60660 = p__60659;
var map__60660__$1 = cljs.core.__destructure_map(map__60660);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60660__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),(20));
var extract_fns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60660__$1,new cljs.core.Keyword(null,"extract-fns","extract-fns",-1056675676));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.take.cljs$core$IFn$_invoke$arity$2(limit,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,cljs.core.compare),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60644_SHARP_){
return ((0) < new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(p1__60644_SHARP_));
}),(function (){var iter__5628__auto__ = (function frontend$common$search_fuzzy$iter__60661(s__60662){
return (new cljs.core.LazySeq(null,(function (){
var s__60662__$1 = s__60662;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__60662__$1);
if(temp__5825__auto__){
var s__60662__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60662__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__60662__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__60664 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__60663 = (0);
while(true){
if((i__60663 < size__5627__auto__)){
var item = cljs.core._nth(c__5626__auto__,i__60663);
cljs.core.chunk_append(b__60664,(function (){var strings = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__60663,item,c__5626__auto__,size__5627__auto__,b__60664,s__60662__$2,temp__5825__auto__,map__60660,map__60660__$1,limit,extract_fns){
return (function (f){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(item) : f.call(null,item))));
});})(i__60663,item,c__5626__auto__,size__5627__auto__,b__60664,s__60662__$2,temp__5825__auto__,map__60660,map__60660__$1,limit,extract_fns))
,extract_fns));
var best_score = ((cljs.core.seq(strings))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__60663,strings,item,c__5626__auto__,size__5627__auto__,b__60664,s__60662__$2,temp__5825__auto__,map__60660,map__60660__$1,limit,extract_fns){
return (function (p1__60645_SHARP_){
return frontend.common.search_fuzzy.score(query,p1__60645_SHARP_);
});})(i__60663,strings,item,c__5626__auto__,size__5627__auto__,b__60664,s__60662__$2,temp__5825__auto__,map__60660,map__60660__$1,limit,extract_fns))
,strings)):(0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),item,new cljs.core.Keyword(null,"score","score",-1963588780),best_score], null);
})());

var G__60708 = (i__60663 + (1));
i__60663 = G__60708;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60664),frontend$common$search_fuzzy$iter__60661(cljs.core.chunk_rest(s__60662__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60664),null);
}
} else {
var item = cljs.core.first(s__60662__$2);
return cljs.core.cons((function (){var strings = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (item,s__60662__$2,temp__5825__auto__,map__60660,map__60660__$1,limit,extract_fns){
return (function (f){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(item) : f.call(null,item))));
});})(item,s__60662__$2,temp__5825__auto__,map__60660,map__60660__$1,limit,extract_fns))
,extract_fns));
var best_score = ((cljs.core.seq(strings))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (strings,item,s__60662__$2,temp__5825__auto__,map__60660,map__60660__$1,limit,extract_fns){
return (function (p1__60645_SHARP_){
return frontend.common.search_fuzzy.score(query,p1__60645_SHARP_);
});})(strings,item,s__60662__$2,temp__5825__auto__,map__60660,map__60660__$1,limit,extract_fns))
,strings)):(0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),item,new cljs.core.Keyword(null,"score","score",-1963588780),best_score], null);
})(),frontend$common$search_fuzzy$iter__60661(cljs.core.rest(s__60662__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(data);
})()))));
}));

(frontend.common.search_fuzzy.fuzzy_search_multi.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.common.search_fuzzy.fuzzy_search_multi.cljs$lang$applyTo = (function (seq60648){
var G__60649 = cljs.core.first(seq60648);
var seq60648__$1 = cljs.core.next(seq60648);
var G__60650 = cljs.core.first(seq60648__$1);
var seq60648__$2 = cljs.core.next(seq60648__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60649,G__60650,seq60648__$2);
}));

/**
 * True for characters in the CJK Unified Ideographs blocks
 *   used by Simplified Chinese.
 */
frontend.common.search_fuzzy.zh_simplified_char_QMARK_ = (function frontend$common$search_fuzzy$zh_simplified_char_QMARK_(c){
var code = c.charCodeAt((0));
return (((((code >= (19968))) && ((code <= (40959))))) || ((((code >= (13312))) && ((code <= (19903))))));
});
/**
 * Return the lowercase pinyin initial letter for a single Chinese character.
 */
frontend.common.search_fuzzy.zh_initial = (function frontend$common$search_fuzzy$zh_initial(c){
return clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(module$node_modules$tiny_pinyin$dist$index.convertToPinyin(c,"",false),(0),(1)));
});
/**
 * Strip punctuation and symbols from a non-Chinese text segment, split on
 *   whitespace, and collect the first character of each resulting word.
 *   Numbers are treated as words — '12345' contributes '1'; '1 23 45'
 *   contributes '1', '2', '4'.
 */
frontend.common.search_fuzzy.segment__GT_initials = (function frontend$common$search_fuzzy$segment__GT_initials(seg){
if(cljs.core.seq(seg)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60680_SHARP_){
return clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__60680_SHARP_,(0),(1)));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,(function (p1__60679_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__60679_SHARP_,/\s+/);
})(clojure.string.replace(seg,/[^a-zA-Z0-9 ]/,""))));
} else {
return null;
}
});
/**
 * Derive a compact initial-letter string from mixed Chinese/English text for
 *   Simplified-Chinese prefix search (pinyin-style). Processes Simplified
 *   Chinese only — other CJK scripts are treated as non-Chinese segments.
 * 
 *   Rules:
 *   - Each Simplified Chinese character maps to the first letter of its pinyin.
 *   - Non-Chinese text is stripped of punctuation, split on whitespace, and
 *  contributes the first character of each resulting word.
 *   - Numbers follow word rules: '12345' → '1'; '1 23 45' → '1', '2', '4'.
 * 
 *   Examples:
 *  '设置' → 'sz'
 *  '删除块' → 'sck'
 *  '新建页面' → 'xjym'
 *  '插入 block embed' → 'crbe'
 *  '导出为 PDF' → 'dcwp'
 *  '今日日志' → 'jrrz'
 */
frontend.common.search_fuzzy.hanzi__GT_initials = (function frontend$common$search_fuzzy$hanzi__GT_initials(s){
if(typeof s === 'string'){
var cs = cljs.core.seq(s);
var seg = cljs.core.PersistentVector.EMPTY;
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(cs)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,frontend.common.search_fuzzy.segment__GT_initials(clojure.string.join.cljs$core$IFn$_invoke$arity$1(seg))));
} else {
if(frontend.common.search_fuzzy.zh_simplified_char_QMARK_((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cs))))){
var seg_initials = frontend.common.search_fuzzy.segment__GT_initials(clojure.string.join.cljs$core$IFn$_invoke$arity$1(seg));
var init = frontend.common.search_fuzzy.zh_initial((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cs))));
var G__60715 = cljs.core.rest(cs);
var G__60716 = cljs.core.PersistentVector.EMPTY;
var G__60717 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,seg_initials),init);
cs = G__60715;
seg = G__60716;
result = G__60717;
continue;
} else {
var G__60718 = cljs.core.rest(cs);
var G__60719 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seg,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cs))));
var G__60720 = result;
cs = G__60718;
seg = G__60719;
result = G__60720;
continue;

}
}
break;
}
} else {
return null;
}
});

//# sourceMappingURL=frontend.common.search_fuzzy.js.map
