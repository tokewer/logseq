goog.provide('instaparse.combinators_source');
instaparse.combinators_source.Epsilon = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"epsilon","epsilon",-730158570)], null);
/**
 * Optional, i.e., parser?
 */
instaparse.combinators_source.opt = (function instaparse$combinators_source$opt(parser){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parser,instaparse.combinators_source.Epsilon)){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null);
}
});
/**
 * One or more, i.e., parser+
 */
instaparse.combinators_source.plus = (function instaparse$combinators_source$plus(parser){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parser,instaparse.combinators_source.Epsilon)){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"plus","plus",211540661),new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null);
}
});
/**
 * Zero or more, i.e., parser*
 */
instaparse.combinators_source.star = (function instaparse$combinators_source$star(parser){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parser,instaparse.combinators_source.Epsilon)){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"star","star",279424429),new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null);
}
});
/**
 * Between m and n repetitions
 */
instaparse.combinators_source.rep = (function instaparse$combinators_source$rep(m,n,parser){
if((m <= n)){
} else {
throw (new Error("Assert failed: (<= m n)"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parser,instaparse.combinators_source.Epsilon)){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"rep","rep",-1226820564),new cljs.core.Keyword(null,"parser","parser",-1543495310),parser,new cljs.core.Keyword(null,"min","min",444991522),m,new cljs.core.Keyword(null,"max","max",61366548),n], null);
}
});
/**
 * Alternation, i.e., parser1 | parser2 | parser3 | ...
 */
instaparse.combinators_source.alt = (function instaparse$combinators_source$alt(var_args){
var args__5882__auto__ = [];
var len__5876__auto___103248 = arguments.length;
var i__5877__auto___103249 = (0);
while(true){
if((i__5877__auto___103249 < len__5876__auto___103248)){
args__5882__auto__.push((arguments[i__5877__auto___103249]));

var G__103250 = (i__5877__auto___103249 + (1));
i__5877__auto___103249 = G__103250;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic = (function (parsers){
if(cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,instaparse.combinators_source.Epsilon),parsers)){
return instaparse.combinators_source.Epsilon;
} else {
if(instaparse.reduction.singleton_QMARK_(parsers)){
return cljs.core.first(parsers);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"parsers","parsers",-804353827),parsers], null);

}
}
}));

(instaparse.combinators_source.alt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.combinators_source.alt.cljs$lang$applyTo = (function (seq103111){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq103111));
}));

instaparse.combinators_source.ord2 = (function instaparse$combinators_source$ord2(parser1,parser2){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"ord","ord",1142548323),new cljs.core.Keyword(null,"parser1","parser1",-439601422),parser1,new cljs.core.Keyword(null,"parser2","parser2",1013754688),parser2], null);
});
/**
 * Ordered choice, i.e., parser1 / parser2
 */
instaparse.combinators_source.ord = (function instaparse$combinators_source$ord(var_args){
var G__103137 = arguments.length;
switch (G__103137) {
case 0:
return instaparse.combinators_source.ord.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__5901__auto__ = [];
var len__5876__auto___103255 = arguments.length;
var i__5877__auto___103256 = (0);
while(true){
if((i__5877__auto___103256 < len__5876__auto___103255)){
args_arr__5901__auto__.push((arguments[i__5877__auto___103256]));

var G__103257 = (i__5877__auto___103256 + (1));
i__5877__auto___103256 = G__103257;
continue;
} else {
}
break;
}

var argseq__5902__auto__ = ((((1) < args_arr__5901__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5901__auto__.slice((1)),(0),null)):null);
return instaparse.combinators_source.ord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5902__auto__);

}
});

(instaparse.combinators_source.ord.cljs$core$IFn$_invoke$arity$0 = (function (){
return instaparse.combinators_source.Epsilon;
}));

(instaparse.combinators_source.ord.cljs$core$IFn$_invoke$arity$variadic = (function (parser1,parsers){
var parsers__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parser1,instaparse.combinators_source.Epsilon))?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([instaparse.combinators_source.Epsilon]),parsers):parsers);
if(cljs.core.seq(parsers__$1)){
return instaparse.combinators_source.ord2(parser1,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.ord,parsers__$1));
} else {
return parser1;
}
}));

/** @this {Function} */
(instaparse.combinators_source.ord.cljs$lang$applyTo = (function (seq103134){
var G__103135 = cljs.core.first(seq103134);
var seq103134__$1 = cljs.core.next(seq103134);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__103135,seq103134__$1);
}));

(instaparse.combinators_source.ord.cljs$lang$maxFixedArity = (1));

/**
 * Concatenation, i.e., parser1 parser2 ...
 */
instaparse.combinators_source.cat = (function instaparse$combinators_source$cat(var_args){
var args__5882__auto__ = [];
var len__5876__auto___103259 = arguments.length;
var i__5877__auto___103261 = (0);
while(true){
if((i__5877__auto___103261 < len__5876__auto___103259)){
args__5882__auto__.push((arguments[i__5877__auto___103261]));

var G__103262 = (i__5877__auto___103261 + (1));
i__5877__auto___103261 = G__103262;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic = (function (parsers){
if(cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,instaparse.combinators_source.Epsilon),parsers)){
return instaparse.combinators_source.Epsilon;
} else {
var parsers__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([instaparse.combinators_source.Epsilon]),parsers);
if(instaparse.reduction.singleton_QMARK_(parsers__$1)){
return cljs.core.first(parsers__$1);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),parsers__$1], null);
}
}
}));

(instaparse.combinators_source.cat.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.combinators_source.cat.cljs$lang$applyTo = (function (seq103148){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq103148));
}));

/**
 * Create a string terminal out of s
 */
instaparse.combinators_source.string = (function instaparse$combinators_source$string(s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,"")){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),s], null);
}
});
/**
 * Create a case-insensitive string terminal out of s
 */
instaparse.combinators_source.string_ci = (function instaparse$combinators_source$string_ci(s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,"")){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string-ci","string-ci",374631805),new cljs.core.Keyword(null,"string","string",-1989541586),s], null);
}
});
/**
 * Matches a Unicode code point or a range of code points
 */
instaparse.combinators_source.unicode_char = (function instaparse$combinators_source$unicode_char(var_args){
var G__103150 = arguments.length;
switch (G__103150) {
case 1:
return instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$1 = (function (code_point){
return instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$2(code_point,code_point);
}));

(instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$2 = (function (lo,hi){
if((lo <= hi)){
} else {
throw (new Error((""+"Assert failed: "+"Character range minimum must be less than or equal the maximum"+"\n"+"(<= lo hi)")));
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"lo","lo",-931799889),lo,new cljs.core.Keyword(null,"hi","hi",-1821422114),hi], null);
}));

(instaparse.combinators_source.unicode_char.cljs$lang$maxFixedArity = 2);

/**
 * JavaScript regexes have no .lookingAt method, so in cljs we just
 *   add a '^' character to the front of the regex.
 */
instaparse.combinators_source.add_beginning_constraint = (function instaparse$combinators_source$add_beginning_constraint(r){
if(cljs.core.regexp_QMARK_(r)){
return (new RegExp((""+"^"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r.source)),instaparse.util.regexp_flags(r)));
} else {
return r;
}
});
/**
 * Create a regexp terminal out of regular expression r
 */
instaparse.combinators_source.regexp = (function instaparse$combinators_source$regexp(r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,"")){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"regexp","regexp",-541372782),new cljs.core.Keyword(null,"regexp","regexp",-541372782),instaparse.combinators_source.add_beginning_constraint(cljs.core.re_pattern(r))], null);
}
});
/**
 * Refers to a non-terminal defined by the grammar map
 */
instaparse.combinators_source.nt = (function instaparse$combinators_source$nt(s){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),s], null);
});
/**
 * Lookahead, i.e., &parser
 */
instaparse.combinators_source.look = (function instaparse$combinators_source$look(parser){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"look","look",-539441433),new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null);
});
/**
 * Negative lookahead, i.e., !parser
 */
instaparse.combinators_source.neg = (function instaparse$combinators_source$neg(parser){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"neg","neg",1800032960),new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null);
});
/**
 * Hide the result of parser, i.e., <parser>
 */
instaparse.combinators_source.hide = (function instaparse$combinators_source$hide(parser){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,new cljs.core.Keyword(null,"hide","hide",-596913169),true);
});
/**
 * Hide the tag associated with this rule.  
 *   Wrap this combinator around the entire right-hand side.
 */
instaparse.combinators_source.hide_tag = (function instaparse$combinators_source$hide_tag(parser){
return instaparse.reduction.red(parser,instaparse.reduction.raw_non_terminal_reduction);
});
/**
 * Tests whether parser was created with hide-tag combinator
 */
instaparse.combinators_source.hidden_tag_QMARK_ = (function instaparse$combinators_source$hidden_tag_QMARK_(parser){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(parser),instaparse.reduction.raw_non_terminal_reduction);
});
/**
 * Recursively undoes the effect of hide on one parser
 */
instaparse.combinators_source.unhide_content = (function instaparse$combinators_source$unhide_content(parser){
var parser__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$1(parser))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(parser,new cljs.core.Keyword(null,"hide","hide",-596913169)):parser);
if(cljs.core.truth_(new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(parser__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310),(function (){var G__103166 = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(parser__$1);
return (instaparse.combinators_source.unhide_content.cljs$core$IFn$_invoke$arity$1 ? instaparse.combinators_source.unhide_content.cljs$core$IFn$_invoke$arity$1(G__103166) : instaparse.combinators_source.unhide_content.call(null,G__103166));
})());
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(parser__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser__$1,new cljs.core.Keyword(null,"parsers","parsers",-804353827),cljs.core.map.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.unhide_content,new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(parser__$1)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser__$1),new cljs.core.Keyword(null,"ord","ord",1142548323))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parser__$1,new cljs.core.Keyword(null,"parser1","parser1",-439601422),(function (){var G__103167 = new cljs.core.Keyword(null,"parser1","parser1",-439601422).cljs$core$IFn$_invoke$arity$1(parser__$1);
return (instaparse.combinators_source.unhide_content.cljs$core$IFn$_invoke$arity$1 ? instaparse.combinators_source.unhide_content.cljs$core$IFn$_invoke$arity$1(G__103167) : instaparse.combinators_source.unhide_content.call(null,G__103167));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parser2","parser2",1013754688),(function (){var G__103168 = new cljs.core.Keyword(null,"parser2","parser2",1013754688).cljs$core$IFn$_invoke$arity$1(parser__$1);
return (instaparse.combinators_source.unhide_content.cljs$core$IFn$_invoke$arity$1 ? instaparse.combinators_source.unhide_content.cljs$core$IFn$_invoke$arity$1(G__103168) : instaparse.combinators_source.unhide_content.call(null,G__103168));
})()], 0));
} else {
return parser__$1;

}
}
}
});
/**
 * Recursively undoes the effect of hide on all parsers in the grammar
 */
instaparse.combinators_source.unhide_all_content = (function instaparse$combinators_source$unhide_all_content(grammar){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5628__auto__ = (function instaparse$combinators_source$unhide_all_content_$_iter__103169(s__103170){
return (new cljs.core.LazySeq(null,(function (){
var s__103170__$1 = s__103170;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__103170__$1);
if(temp__5825__auto__){
var s__103170__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__103170__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__103170__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__103172 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__103171 = (0);
while(true){
if((i__103171 < size__5627__auto__)){
var vec__103173 = cljs.core._nth(c__5626__auto__,i__103171);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103173,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103173,(1),null);
cljs.core.chunk_append(b__103172,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,instaparse.combinators_source.unhide_content(v)], null));

var G__103274 = (i__103171 + (1));
i__103171 = G__103274;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__103172),instaparse$combinators_source$unhide_all_content_$_iter__103169(cljs.core.chunk_rest(s__103170__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__103172),null);
}
} else {
var vec__103179 = cljs.core.first(s__103170__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103179,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103179,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,instaparse.combinators_source.unhide_content(v)], null),instaparse$combinators_source$unhide_all_content_$_iter__103169(cljs.core.rest(s__103170__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(grammar);
})());
});
/**
 * Recursively undoes the effect of hide-tag
 */
instaparse.combinators_source.unhide_tags = (function instaparse$combinators_source$unhide_tags(reduction_type,grammar){
var temp__5823__auto__ = (instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1 ? instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1(reduction_type) : instaparse.reduction.reduction_types.call(null,reduction_type));
if(cljs.core.truth_(temp__5823__auto__)){
var reduction = temp__5823__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5628__auto__ = (function instaparse$combinators_source$unhide_tags_$_iter__103184(s__103185){
return (new cljs.core.LazySeq(null,(function (){
var s__103185__$1 = s__103185;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__103185__$1);
if(temp__5825__auto__){
var s__103185__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__103185__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__103185__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__103187 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__103186 = (0);
while(true){
if((i__103186 < size__5627__auto__)){
var vec__103190 = cljs.core._nth(c__5626__auto__,i__103186);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103190,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103190,(1),null);
cljs.core.chunk_append(b__103187,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"red","red",-969428204),(reduction.cljs$core$IFn$_invoke$arity$1 ? reduction.cljs$core$IFn$_invoke$arity$1(k) : reduction.call(null,k)))], null));

var G__103275 = (i__103186 + (1));
i__103186 = G__103275;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__103187),instaparse$combinators_source$unhide_tags_$_iter__103184(cljs.core.chunk_rest(s__103185__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__103187),null);
}
} else {
var vec__103193 = cljs.core.first(s__103185__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103193,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103193,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"red","red",-969428204),(reduction.cljs$core$IFn$_invoke$arity$1 ? reduction.cljs$core$IFn$_invoke$arity$1(k) : reduction.call(null,k)))], null),instaparse$combinators_source$unhide_tags_$_iter__103184(cljs.core.rest(s__103185__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(grammar);
})());
} else {
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid output format ",reduction_type,". Use :enlive or :hiccup."], 0));
}
});
/**
 * Recursively undoes the effect of both hide and hide-tag
 */
instaparse.combinators_source.unhide_all = (function instaparse$combinators_source$unhide_all(reduction_type,grammar){
var temp__5823__auto__ = (instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1 ? instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1(reduction_type) : instaparse.reduction.reduction_types.call(null,reduction_type));
if(cljs.core.truth_(temp__5823__auto__)){
var reduction = temp__5823__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5628__auto__ = (function instaparse$combinators_source$unhide_all_$_iter__103204(s__103205){
return (new cljs.core.LazySeq(null,(function (){
var s__103205__$1 = s__103205;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__103205__$1);
if(temp__5825__auto__){
var s__103205__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__103205__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__103205__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__103207 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__103206 = (0);
while(true){
if((i__103206 < size__5627__auto__)){
var vec__103208 = cljs.core._nth(c__5626__auto__,i__103206);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103208,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103208,(1),null);
cljs.core.chunk_append(b__103207,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(instaparse.combinators_source.unhide_content(v),new cljs.core.Keyword(null,"red","red",-969428204),(reduction.cljs$core$IFn$_invoke$arity$1 ? reduction.cljs$core$IFn$_invoke$arity$1(k) : reduction.call(null,k)))], null));

var G__103279 = (i__103206 + (1));
i__103206 = G__103279;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__103207),instaparse$combinators_source$unhide_all_$_iter__103204(cljs.core.chunk_rest(s__103205__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__103207),null);
}
} else {
var vec__103211 = cljs.core.first(s__103205__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103211,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103211,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(instaparse.combinators_source.unhide_content(v),new cljs.core.Keyword(null,"red","red",-969428204),(reduction.cljs$core$IFn$_invoke$arity$1 ? reduction.cljs$core$IFn$_invoke$arity$1(k) : reduction.call(null,k)))], null),instaparse$combinators_source$unhide_all_$_iter__103204(cljs.core.rest(s__103205__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(grammar);
})());
} else {
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid output format ",reduction_type,". Use :enlive or :hiccup."], 0));
}
});
instaparse.combinators_source.auto_whitespace_parser = (function instaparse$combinators_source$auto_whitespace_parser(parser,ws_parser){
var G__103218 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser);
var G__103218__$1 = (((G__103218 instanceof cljs.core.Keyword))?G__103218.fqn:null);
switch (G__103218__$1) {
case "nt":
case "epsilon":
return parser;

break;
case "opt":
case "plus":
case "star":
case "rep":
case "look":
case "neg":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parser,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser","parser",-1543495310)], null),instaparse.combinators_source.auto_whitespace_parser,ws_parser);

break;
case "alt":
case "cat":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,new cljs.core.Keyword(null,"parsers","parsers",-804353827),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__103214_SHARP_){
return (instaparse.combinators_source.auto_whitespace_parser.cljs$core$IFn$_invoke$arity$2 ? instaparse.combinators_source.auto_whitespace_parser.cljs$core$IFn$_invoke$arity$2(p1__103214_SHARP_,ws_parser) : instaparse.combinators_source.auto_whitespace_parser.call(null,p1__103214_SHARP_,ws_parser));
}),new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(parser)));

break;
case "ord":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parser,new cljs.core.Keyword(null,"parser1","parser1",-439601422),(function (){var G__103221 = new cljs.core.Keyword(null,"parser1","parser1",-439601422).cljs$core$IFn$_invoke$arity$1(parser);
var G__103222 = ws_parser;
return (instaparse.combinators_source.auto_whitespace_parser.cljs$core$IFn$_invoke$arity$2 ? instaparse.combinators_source.auto_whitespace_parser.cljs$core$IFn$_invoke$arity$2(G__103221,G__103222) : instaparse.combinators_source.auto_whitespace_parser.call(null,G__103221,G__103222));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parser2","parser2",1013754688),(function (){var G__103225 = new cljs.core.Keyword(null,"parser2","parser2",1013754688).cljs$core$IFn$_invoke$arity$1(parser);
var G__103226 = ws_parser;
return (instaparse.combinators_source.auto_whitespace_parser.cljs$core$IFn$_invoke$arity$2 ? instaparse.combinators_source.auto_whitespace_parser.cljs$core$IFn$_invoke$arity$2(G__103225,G__103226) : instaparse.combinators_source.auto_whitespace_parser.call(null,G__103225,G__103226));
})()], 0));

break;
case "string":
case "string-ci":
case "regexp":
if(cljs.core.truth_(new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(parser))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ws_parser,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(parser,new cljs.core.Keyword(null,"red","red",-969428204))], 0)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(parser));
} else {
return instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ws_parser,parser], 0));
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__103218__$1))));

}
});
instaparse.combinators_source.auto_whitespace = (function instaparse$combinators_source$auto_whitespace(grammar,start,grammar_ws,start_ws){
var ws_parser = instaparse.combinators_source.hide(instaparse.combinators_source.opt(instaparse.combinators_source.nt(start_ws)));
var grammar_ws__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(grammar_ws,start_ws,instaparse.combinators_source.hide_tag((grammar_ws.cljs$core$IFn$_invoke$arity$1 ? grammar_ws.cljs$core$IFn$_invoke$arity$1(start_ws) : grammar_ws.call(null,start_ws))));
var modified_grammar = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5628__auto__ = (function instaparse$combinators_source$auto_whitespace_$_iter__103227(s__103228){
return (new cljs.core.LazySeq(null,(function (){
var s__103228__$1 = s__103228;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__103228__$1);
if(temp__5825__auto__){
var s__103228__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__103228__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__103228__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__103230 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__103229 = (0);
while(true){
if((i__103229 < size__5627__auto__)){
var vec__103239 = cljs.core._nth(c__5626__auto__,i__103229);
var nt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103239,(0),null);
var parser = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103239,(1),null);
cljs.core.chunk_append(b__103230,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nt,instaparse.combinators_source.auto_whitespace_parser(parser,ws_parser)], null));

var G__103285 = (i__103229 + (1));
i__103229 = G__103285;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__103230),instaparse$combinators_source$auto_whitespace_$_iter__103227(cljs.core.chunk_rest(s__103228__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__103230),null);
}
} else {
var vec__103242 = cljs.core.first(s__103228__$2);
var nt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103242,(0),null);
var parser = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103242,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nt,instaparse.combinators_source.auto_whitespace_parser(parser,ws_parser)], null),instaparse$combinators_source$auto_whitespace_$_iter__103227(cljs.core.rest(s__103228__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(grammar);
})());
var final_grammar = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(modified_grammar,start,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((modified_grammar.cljs$core$IFn$_invoke$arity$1 ? modified_grammar.cljs$core$IFn$_invoke$arity$1(start) : modified_grammar.call(null,start)),new cljs.core.Keyword(null,"red","red",-969428204)),ws_parser], 0)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1((modified_grammar.cljs$core$IFn$_invoke$arity$1 ? modified_grammar.cljs$core$IFn$_invoke$arity$1(start) : modified_grammar.call(null,start)))));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([final_grammar,grammar_ws__$1], 0));
});

//# sourceMappingURL=instaparse.combinators_source.js.map
