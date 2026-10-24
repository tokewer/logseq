goog.provide('logseq.common.plural');
if((typeof logseq !== 'undefined') && (typeof logseq.common !== 'undefined') && (typeof logseq.common.plural !== 'undefined') && (typeof logseq.common.plural.plural_rules !== 'undefined')){
} else {
logseq.common.plural.plural_rules = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof logseq !== 'undefined') && (typeof logseq.common !== 'undefined') && (typeof logseq.common.plural !== 'undefined') && (typeof logseq.common.plural.singular_rules !== 'undefined')){
} else {
logseq.common.plural.singular_rules = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof logseq !== 'undefined') && (typeof logseq.common !== 'undefined') && (typeof logseq.common.plural !== 'undefined') && (typeof logseq.common.plural.uncountables !== 'undefined')){
} else {
logseq.common.plural.uncountables = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof logseq !== 'undefined') && (typeof logseq.common !== 'undefined') && (typeof logseq.common.plural !== 'undefined') && (typeof logseq.common.plural.irregular_plurals !== 'undefined')){
} else {
logseq.common.plural.irregular_plurals = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof logseq !== 'undefined') && (typeof logseq.common !== 'undefined') && (typeof logseq.common.plural !== 'undefined') && (typeof logseq.common.plural.irregular_singles !== 'undefined')){
} else {
logseq.common.plural.irregular_singles = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * If rule is a string, compile to case-insensitive regexp that matches the whole string.
 * Else keep it (assumed to be js/RegExp).
 */
logseq.common.plural.sanitize_rule = (function logseq$common$plural$sanitize_rule(rule){
if(typeof rule === 'string'){
return (new RegExp((""+"^"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rule)+"$"),"i"));
} else {
return rule;
}
});
/**
 * Replicate casing of `word` onto `token`.
 */
logseq.common.plural.restore_case = (function logseq$common$plural$restore_case(word,token){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(word,token)){
return token;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(word,clojure.string.lower_case(word))){
return clojure.string.lower_case(token);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(word,clojure.string.upper_case(word))){
return clojure.string.upper_case(token);
} else {
if(((cljs.core.seq(word)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(word,(0),(1)),clojure.string.upper_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(word,(0),(1))))))){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token,(0),(1))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(token,(1)))));
} else {
return clojure.string.lower_case(token);

}
}
}
}
});
/**
 * Replace $1..$12 etc in `s` using JS replace args (match, g1, g2 ...).
 */
logseq.common.plural.interpolate = (function logseq$common$plural$interpolate(s,js_args){
return s.replace((new RegExp("\\$(\\d{1,2})","g")),(function (_,idx){
var i = parseInt(idx,(10));
var v = (js_args[i]);
var or__5142__auto__ = v;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
}));
});
/**
 * Apply a [re repl] rule to word with casing restoration (matches JS behavior).
 */
logseq.common.plural.replace_with_rule = (function logseq$common$plural$replace_with_rule(word,p__41246){
var vec__41248 = p__41246;
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41248,(0),null);
var repl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41248,(1),null);
return word.replace(re,(function() { 
var G__41413__delegate = function (args){
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(0));
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(cljs.core.count(args) - (2)));
var js_args = cljs.core.to_array(args);
var result = logseq.common.plural.interpolate(repl,js_args);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(match,"")){
return logseq.common.plural.restore_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(word,(offset - (1)),offset),result);
} else {
return logseq.common.plural.restore_case(match,result);
}
};
var G__41413 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41414__i = 0, G__41414__a = new Array(arguments.length -  0);
while (G__41414__i < G__41414__a.length) {G__41414__a[G__41414__i] = arguments[G__41414__i + 0]; ++G__41414__i;}
  args = new cljs.core.IndexedSeq(G__41414__a,0,null);
} 
return G__41413__delegate.call(this,args);};
G__41413.cljs$lang$maxFixedArity = 0;
G__41413.cljs$lang$applyTo = (function (arglist__41415){
var args = cljs.core.seq(arglist__41415);
return G__41413__delegate(args);
});
G__41413.cljs$core$IFn$_invoke$arity$variadic = G__41413__delegate;
return G__41413;
})()
);
});
/**
 * Return sanitized `word` based on `token` and `rules`.
 */
logseq.common.plural.sanitize_word = (function logseq$common$plural$sanitize_word(token,word,rules){
if((((cljs.core.count(token) === (0))) || (cljs.core.contains_QMARK_(cljs.core.deref(logseq.common.plural.uncountables),token)))){
return word;
} else {
var rs = rules;
var n = cljs.core.count(rs);
var i = (n - (1));
while(true){
if((i < (0))){
return word;
} else {
var vec__41251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rs,i);
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41251,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41251,(1),null);
var rule = vec__41251;
if(cljs.core.truth_(re.test(word))){
return logseq.common.plural.replace_with_rule(word,rule);
} else {
var G__41416 = (i - (1));
i = G__41416;
continue;
}
}
break;
}

}
});
/**
 * Build a word transformer (plural or singular).
 */
logseq.common.plural.replace_word_fn = (function logseq$common$plural$replace_word_fn(replace_map_atom,keep_map_atom,rules_atom){
return (function (word){
var token = clojure.string.lower_case(word);
var keep_map = cljs.core.deref(keep_map_atom);
var replace_map = cljs.core.deref(replace_map_atom);
var rules = cljs.core.deref(rules_atom);
if(cljs.core.contains_QMARK_(keep_map,token)){
return logseq.common.plural.restore_case(word,token);
} else {
if(cljs.core.contains_QMARK_(replace_map,token)){
return logseq.common.plural.restore_case(word,cljs.core.get.cljs$core$IFn$_invoke$arity$2(replace_map,token));
} else {
return logseq.common.plural.sanitize_word(token,word,rules);

}
}
});
});
/**
 * Build a predicate for whether word is plural/singular (mirrors JS `checkWord`).
 */
logseq.common.plural.check_word_fn = (function logseq$common$plural$check_word_fn(replace_map_atom,keep_map_atom,rules_atom){
return (function (word){
var token = clojure.string.lower_case(word);
var keep_map = cljs.core.deref(keep_map_atom);
var replace_map = cljs.core.deref(replace_map_atom);
var rules = cljs.core.deref(rules_atom);
if(cljs.core.contains_QMARK_(keep_map,token)){
return true;
} else {
if(cljs.core.contains_QMARK_(replace_map,token)){
return false;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(logseq.common.plural.sanitize_word(token,token,rules),token);

}
}
});
});
logseq.common.plural.plural = logseq.common.plural.replace_word_fn(logseq.common.plural.irregular_singles,logseq.common.plural.irregular_plurals,logseq.common.plural.plural_rules);
logseq.common.plural.singular = logseq.common.plural.replace_word_fn(logseq.common.plural.irregular_plurals,logseq.common.plural.irregular_singles,logseq.common.plural.singular_rules);
logseq.common.plural.is_plural_QMARK_ = logseq.common.plural.check_word_fn(logseq.common.plural.irregular_singles,logseq.common.plural.irregular_plurals,logseq.common.plural.plural_rules);
logseq.common.plural.is_singular_QMARK_ = logseq.common.plural.check_word_fn(logseq.common.plural.irregular_plurals,logseq.common.plural.irregular_singles,logseq.common.plural.singular_rules);
/**
 * Pluralize or singularize based on count. If inclusive, prefix with count.
 */
logseq.common.plural.pluralize = (function logseq$common$plural$pluralize(var_args){
var G__41266 = arguments.length;
switch (G__41266) {
case 2:
return logseq.common.plural.pluralize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return logseq.common.plural.pluralize.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.common.plural.pluralize.cljs$core$IFn$_invoke$arity$2 = (function (word,item_count){
return logseq.common.plural.pluralize.cljs$core$IFn$_invoke$arity$3(word,item_count,false);
}));

(logseq.common.plural.pluralize.cljs$core$IFn$_invoke$arity$3 = (function (word,item_count,inclusive){
var pluralized = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item_count,(1)))?logseq.common.plural.singular(word):logseq.common.plural.plural(word));
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(inclusive)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_count)+" "):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pluralized));
}));

(logseq.common.plural.pluralize.cljs$lang$maxFixedArity = 3);

logseq.common.plural.add_plural_rule_BANG_ = (function logseq$common$plural$add_plural_rule_BANG_(rule,replacement){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(logseq.common.plural.plural_rules,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.common.plural.sanitize_rule(rule),replacement], null));
});
logseq.common.plural.add_singular_rule_BANG_ = (function logseq$common$plural$add_singular_rule_BANG_(rule,replacement){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(logseq.common.plural.singular_rules,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.common.plural.sanitize_rule(rule),replacement], null));
});
/**
 * If word is string => mark as uncountable.
 * If regexp => add plural+singular passthrough rules ($0).
 */
logseq.common.plural.add_uncountable_rule_BANG_ = (function logseq$common$plural$add_uncountable_rule_BANG_(word){
if(typeof word === 'string'){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(logseq.common.plural.uncountables,cljs.core.assoc,clojure.string.lower_case(word),true);
} else {
logseq.common.plural.add_plural_rule_BANG_(word,"$0");

return logseq.common.plural.add_singular_rule_BANG_(word,"$0");
}
});
logseq.common.plural.add_irregular_rule_BANG_ = (function logseq$common$plural$add_irregular_rule_BANG_(single,plural_word){
var p = clojure.string.lower_case(plural_word);
var s = clojure.string.lower_case(single);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(logseq.common.plural.irregular_singles,cljs.core.assoc,s,p);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(logseq.common.plural.irregular_plurals,cljs.core.assoc,p,s);
});
logseq.common.plural.init_irregulars_BANG_ = (function logseq$common$plural$init_irregulars_BANG_(){
var seq__41288 = cljs.core.seq(cljs.core.PersistentVector.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","we"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["me","us"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["he","they"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["she","they"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["them","them"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["myself","ourselves"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["yourself","yourselves"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["itself","themselves"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["herself","themselves"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["himself","themselves"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["themself","themselves"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["is","are"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["was","were"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["has","have"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["this","these"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["that","those"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["my","our"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["its","their"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["his","their"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["her","their"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["echo","echoes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dingo","dingoes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["volcano","volcanoes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tornado","tornadoes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["torpedo","torpedoes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["genus","genera"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["viscus","viscera"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stigma","stigmata"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stoma","stomata"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dogma","dogmata"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lemma","lemmata"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["schema","schemata"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["anathema","anathemata"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ox","oxen"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["axe","axes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["die","dice"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["yes","yeses"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foot","feet"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["eave","eaves"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goose","geese"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tooth","teeth"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["quiz","quizzes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["human","humans"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["proof","proofs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["carve","carves"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["valve","valves"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["looey","looies"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["thief","thieves"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["groove","grooves"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pickaxe","pickaxes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["passerby","passersby"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["canvas","canvases"], null)], true));
var chunk__41289 = null;
var count__41290 = (0);
var i__41291 = (0);
while(true){
if((i__41291 < count__41290)){
var vec__41306 = chunk__41289.cljs$core$IIndexed$_nth$arity$2(null,i__41291);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41306,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41306,(1),null);
logseq.common.plural.add_irregular_rule_BANG_(s,p);


var G__41418 = seq__41288;
var G__41419 = chunk__41289;
var G__41420 = count__41290;
var G__41421 = (i__41291 + (1));
seq__41288 = G__41418;
chunk__41289 = G__41419;
count__41290 = G__41420;
i__41291 = G__41421;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__41288);
if(temp__5825__auto__){
var seq__41288__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41288__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__41288__$1);
var G__41422 = cljs.core.chunk_rest(seq__41288__$1);
var G__41423 = c__5673__auto__;
var G__41424 = cljs.core.count(c__5673__auto__);
var G__41425 = (0);
seq__41288 = G__41422;
chunk__41289 = G__41423;
count__41290 = G__41424;
i__41291 = G__41425;
continue;
} else {
var vec__41313 = cljs.core.first(seq__41288__$1);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41313,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41313,(1),null);
logseq.common.plural.add_irregular_rule_BANG_(s,p);


var G__41426 = cljs.core.next(seq__41288__$1);
var G__41427 = null;
var G__41428 = (0);
var G__41429 = (0);
seq__41288 = G__41426;
chunk__41289 = G__41427;
count__41290 = G__41428;
i__41291 = G__41429;
continue;
}
} else {
return null;
}
}
break;
}
});
logseq.common.plural.init_plural_rules_BANG_ = (function logseq$common$plural$init_plural_rules_BANG_(){
var seq__41320 = cljs.core.seq(new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("s?$","i")),"s"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("[^\\u0000-\\u007F]$","i")),"$0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("([^aeiou]ese)$","i")),"$1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("(ax|test)is$","i")),"$1es"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("(alias|[^aou]us|t[lm]as|gas|ris)$","i")),"$1es"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("(e[mn]u)s?$","i")),"$1s"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$","i")),"$1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$","i")),"$1i"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("(alumn|alg|vertebr)(?:a|ae)$","i")),"$1ae"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("(seraph|cherub)(?:im)?$","i")),"$1im"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("(her|at|gr)o$","i")),"$1oes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$","i")),"$1a"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$","i")),"$1a"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("sis$","i")),"ses"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$","i")),"$1$2ves"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("([^aeiouy]|qu)y$","i")),"$1ies"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("([^ch][ieo][ln])ey$","i")),"$1ies"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("(x|ch|ss|sh|zz)$","i")),"$1es"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$","i")),"$1ices"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("\\b((?:tit)?m|l)(?:ice|ouse)$","i")),"$1ice"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("(pe)(?:rson|ople)$","i")),"$1ople"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("(child)(?:ren)?$","i")),"$1ren"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("eaux$","i")),"$0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("m[ae]n$","i")),"men"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["thou","you"], null)], null));
var chunk__41321 = null;
var count__41322 = (0);
var i__41323 = (0);
while(true){
if((i__41323 < count__41322)){
var vec__41347 = chunk__41321.cljs$core$IIndexed$_nth$arity$2(null,i__41323);
var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41347,(0),null);
var repl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41347,(1),null);
logseq.common.plural.add_plural_rule_BANG_(rule,repl);


var G__41430 = seq__41320;
var G__41431 = chunk__41321;
var G__41432 = count__41322;
var G__41433 = (i__41323 + (1));
seq__41320 = G__41430;
chunk__41321 = G__41431;
count__41322 = G__41432;
i__41323 = G__41433;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__41320);
if(temp__5825__auto__){
var seq__41320__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41320__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__41320__$1);
var G__41434 = cljs.core.chunk_rest(seq__41320__$1);
var G__41435 = c__5673__auto__;
var G__41436 = cljs.core.count(c__5673__auto__);
var G__41437 = (0);
seq__41320 = G__41434;
chunk__41321 = G__41435;
count__41322 = G__41436;
i__41323 = G__41437;
continue;
} else {
var vec__41354 = cljs.core.first(seq__41320__$1);
var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41354,(0),null);
var repl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41354,(1),null);
logseq.common.plural.add_plural_rule_BANG_(rule,repl);


var G__41438 = cljs.core.next(seq__41320__$1);
var G__41439 = null;
var G__41440 = (0);
var G__41441 = (0);
seq__41320 = G__41438;
chunk__41321 = G__41439;
count__41322 = G__41440;
i__41323 = G__41441;
continue;
}
} else {
return null;
}
}
break;
}
});
logseq.common.plural.init_singular_rules_BANG_ = (function logseq$common$plural$init_singular_rules_BANG_(){
var seq__41362 = cljs.core.seq(new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("s$","i")),""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("(ss)$","i")),"$1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("(wi|kni|(?:after|half|high|low|mid|non|night|[^\\w]|^)li)ves$","i")),"$1fe"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("(ar|(?:wo|[ae])l|[eo][ao])ves$","i")),"$1f"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("ies$","i")),"y"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("(dg|ss|ois|lk|ok|wn|mb|th|ch|ec|oal|is|ck|ix|sser|ts|wb)ies$","i")),"$1ie"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("\\b(l|(?:neck|cross|hog|aun)?t|coll|faer|food|gen|goon|group|hipp|junk|vegg|(?:pork)?p|charl|calor|cut)ies$","i")),"$1ie"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("\\b(mon|smil)ies$","i")),"$1ey"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("\\b((?:tit)?m|l)ice$","i")),"$1ouse"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("(seraph|cherub)im$","i")),"$1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$","i")),"$1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$","i")),"$1sis"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("(movie|twelve|abuse|e[mn]u)s$","i")),"$1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("(test)(?:is|es)$","i")),"$1is"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$","i")),"$1us"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$","i")),"$1um"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$","i")),"$1on"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("(alumn|alg|vertebr)ae$","i")),"$1a"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("(cod|mur|sil|vert|ind)ices$","i")),"$1ex"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("(matr|append)ices$","i")),"$1ix"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("(pe)(rson|ople)$","i")),"$1rson"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("(child)ren$","i")),"$1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("(eau)x?$","i")),"$1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("men$","i")),"man"], null)], null));
var chunk__41363 = null;
var count__41364 = (0);
var i__41365 = (0);
while(true){
if((i__41365 < count__41364)){
var vec__41380 = chunk__41363.cljs$core$IIndexed$_nth$arity$2(null,i__41365);
var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41380,(0),null);
var repl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41380,(1),null);
logseq.common.plural.add_singular_rule_BANG_(rule,repl);


var G__41442 = seq__41362;
var G__41443 = chunk__41363;
var G__41444 = count__41364;
var G__41445 = (i__41365 + (1));
seq__41362 = G__41442;
chunk__41363 = G__41443;
count__41364 = G__41444;
i__41365 = G__41445;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__41362);
if(temp__5825__auto__){
var seq__41362__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41362__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__41362__$1);
var G__41447 = cljs.core.chunk_rest(seq__41362__$1);
var G__41448 = c__5673__auto__;
var G__41449 = cljs.core.count(c__5673__auto__);
var G__41450 = (0);
seq__41362 = G__41447;
chunk__41363 = G__41448;
count__41364 = G__41449;
i__41365 = G__41450;
continue;
} else {
var vec__41387 = cljs.core.first(seq__41362__$1);
var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41387,(0),null);
var repl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41387,(1),null);
logseq.common.plural.add_singular_rule_BANG_(rule,repl);


var G__41451 = cljs.core.next(seq__41362__$1);
var G__41452 = null;
var G__41453 = (0);
var G__41454 = (0);
seq__41362 = G__41451;
chunk__41363 = G__41452;
count__41364 = G__41453;
i__41365 = G__41454;
continue;
}
} else {
return null;
}
}
break;
}
});
logseq.common.plural.init_uncountables_BANG_ = (function logseq$common$plural$init_uncountables_BANG_(){
var seq__41394_41456 = cljs.core.seq(cljs.core.PersistentVector.fromArray(["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you"], true));
var chunk__41395_41457 = null;
var count__41396_41458 = (0);
var i__41397_41459 = (0);
while(true){
if((i__41397_41459 < count__41396_41458)){
var w_41460 = chunk__41395_41457.cljs$core$IIndexed$_nth$arity$2(null,i__41397_41459);
logseq.common.plural.add_uncountable_rule_BANG_(w_41460);


var G__41461 = seq__41394_41456;
var G__41462 = chunk__41395_41457;
var G__41463 = count__41396_41458;
var G__41464 = (i__41397_41459 + (1));
seq__41394_41456 = G__41461;
chunk__41395_41457 = G__41462;
count__41396_41458 = G__41463;
i__41397_41459 = G__41464;
continue;
} else {
var temp__5825__auto___41465 = cljs.core.seq(seq__41394_41456);
if(temp__5825__auto___41465){
var seq__41394_41466__$1 = temp__5825__auto___41465;
if(cljs.core.chunked_seq_QMARK_(seq__41394_41466__$1)){
var c__5673__auto___41467 = cljs.core.chunk_first(seq__41394_41466__$1);
var G__41468 = cljs.core.chunk_rest(seq__41394_41466__$1);
var G__41469 = c__5673__auto___41467;
var G__41470 = cljs.core.count(c__5673__auto___41467);
var G__41471 = (0);
seq__41394_41456 = G__41468;
chunk__41395_41457 = G__41469;
count__41396_41458 = G__41470;
i__41397_41459 = G__41471;
continue;
} else {
var w_41472 = cljs.core.first(seq__41394_41466__$1);
logseq.common.plural.add_uncountable_rule_BANG_(w_41472);


var G__41473 = cljs.core.next(seq__41394_41466__$1);
var G__41474 = null;
var G__41475 = (0);
var G__41476 = (0);
seq__41394_41456 = G__41473;
chunk__41395_41457 = G__41474;
count__41396_41458 = G__41475;
i__41397_41459 = G__41476;
continue;
}
} else {
}
}
break;
}

var seq__41402 = cljs.core.seq(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new RegExp("pok[e\u00E9]mon$","i")),(new RegExp("[^aeiou]ese$","i")),(new RegExp("deer$","i")),(new RegExp("fish$","i")),(new RegExp("measles$","i")),(new RegExp("o[iu]s$","i")),(new RegExp("pox$","i")),(new RegExp("sheep$","i"))], null));
var chunk__41403 = null;
var count__41404 = (0);
var i__41405 = (0);
while(true){
if((i__41405 < count__41404)){
var re = chunk__41403.cljs$core$IIndexed$_nth$arity$2(null,i__41405);
logseq.common.plural.add_uncountable_rule_BANG_(re);


var G__41477 = seq__41402;
var G__41478 = chunk__41403;
var G__41479 = count__41404;
var G__41480 = (i__41405 + (1));
seq__41402 = G__41477;
chunk__41403 = G__41478;
count__41404 = G__41479;
i__41405 = G__41480;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__41402);
if(temp__5825__auto__){
var seq__41402__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41402__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__41402__$1);
var G__41481 = cljs.core.chunk_rest(seq__41402__$1);
var G__41482 = c__5673__auto__;
var G__41483 = cljs.core.count(c__5673__auto__);
var G__41484 = (0);
seq__41402 = G__41481;
chunk__41403 = G__41482;
count__41404 = G__41483;
i__41405 = G__41484;
continue;
} else {
var re = cljs.core.first(seq__41402__$1);
logseq.common.plural.add_uncountable_rule_BANG_(re);


var G__41485 = cljs.core.next(seq__41402__$1);
var G__41486 = null;
var G__41487 = (0);
var G__41488 = (0);
seq__41402 = G__41485;
chunk__41403 = G__41486;
count__41404 = G__41487;
i__41405 = G__41488;
continue;
}
} else {
return null;
}
}
break;
}
});
logseq.common.plural.init_irregulars_BANG_();
logseq.common.plural.init_plural_rules_BANG_();
logseq.common.plural.init_singular_rules_BANG_();
logseq.common.plural.init_uncountables_BANG_();

//# sourceMappingURL=logseq.common.plural.js.map
