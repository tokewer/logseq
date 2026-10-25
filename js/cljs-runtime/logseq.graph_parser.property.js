goog.provide('logseq.graph_parser.property');
/**
 * Property delimiter for markdown mode
 */
logseq.graph_parser.property.colons = "::";
/**
 * Property delimiter for org mode
 */
logseq.graph_parser.property.colons_org = (function logseq$graph_parser$property$colons_org(property){
return (""+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(property)+":");
});
logseq.graph_parser.property.properties_ast_QMARK_ = (function logseq$graph_parser$property$properties_ast_QMARK_(block){
return ((cljs.core.vector_QMARK_(block)) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Property_Drawer",null,"Properties",null], null), null),cljs.core.first(block))));
});
logseq.graph_parser.property.valid_property_name_QMARK_ = (function logseq$graph_parser$property$valid_property_name_QMARK_(s){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

return ((logseq.common.util.valid_edn_keyword_QMARK_(s)) && (((cljs.core.not(cljs.core.re_find(/[\"|^|(|)|{|}]+/,s))) && (cljs.core.not(cljs.core.re_find(/^:#/,s))))));
});
/**
 * Properties used by logseq that user can edit and that can have linkable property values
 */
logseq.graph_parser.property.editable_linkable_built_in_properties = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tags","tags",1771418977),null,new cljs.core.Keyword(null,"alias","alias",-2039751630),null,new cljs.core.Keyword(null,"aliases","aliases",1346874714),null], null), null);
/**
 * Properties used by logseq that user can edit
 */
logseq.graph_parser.property.editable_built_in_properties = (function logseq$graph_parser$property$editable_built_in_properties(){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"template-including-parent","template-including-parent",1449989665),null,new cljs.core.Keyword(null,"filetags","filetags",-1157605850),null,new cljs.core.Keyword(null,"filters","filters",974726919),null,new cljs.core.Keyword(null,"public","public",1566243851),null,new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"icon","icon",1679606541),null,new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"exclude-from-graph-view","exclude-from-graph-view",-1509369969),null,new cljs.core.Keyword("logseq.query","nlp-date","logseq.query/nlp-date",-145078221),null,new cljs.core.Keyword(null,"macro","macro",-867863404),null], null), null),logseq.graph_parser.property.editable_linkable_built_in_properties);
});
/**
 * Properties used by logseq that user can't edit or see
 */
logseq.graph_parser.property.hidden_built_in_properties = (function logseq$graph_parser$property$hidden_built_in_properties(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 29, [new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336),null,new cljs.core.Keyword(null,"last_modified_at","last_modified_at",-1069251263),null,new cljs.core.Keyword(null,"query-sort-by","query-sort-by",488160033),null,new cljs.core.Keyword(null,"logseq.order-list-type","logseq.order-list-type",-1819806366),null,new cljs.core.Keyword(null,"query-table","query-table",2095143554),null,new cljs.core.Keyword(null,"doing","doing",-3342172),null,new cljs.core.Keyword(null,"done","done",-889844188),null,new cljs.core.Keyword(null,"logseq.macro-arguments","logseq.macro-arguments",-655551868),null,new cljs.core.Keyword(null,"hl-type","hl-type",992471876),null,new cljs.core.Keyword(null,"now","now",-1650525531),null,new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),null,new cljs.core.Keyword(null,"later","later",961723974),null,new cljs.core.Keyword(null,"hl-value","hl-value",-755264538),null,new cljs.core.Keyword(null,"hl-stamp","hl-stamp",-695479513),null,new cljs.core.Keyword(null,"custom-id","custom-id",-615733336),null,new cljs.core.Keyword(null,"hl-page","hl-page",949012424),null,new cljs.core.Keyword(null,"ls-type","ls-type",1383834313),null,new cljs.core.Keyword(null,"background_color","background_color",-1953390743),null,new cljs.core.Keyword(null,"last-modified-at","last-modified-at",478765450),null,new cljs.core.Keyword(null,"background-color","background-color",570434026),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"todo","todo",-1046442570),null,new cljs.core.Keyword(null,"query-sort-desc","query-sort-desc",123730008),null,new cljs.core.Keyword(null,"query-properties","query-properties",-953532199),null,new cljs.core.Keyword(null,"logseq.macro-name","logseq.macro-name",1789949403),null,new cljs.core.Keyword(null,"created-at","created-at",-89248644),null,new cljs.core.Keyword(null,"hl-color","hl-color",1100781725),null,new cljs.core.Keyword(null,"created_at","created_at",1484050750),null,new cljs.core.Keyword(null,"heading","heading",-1312171873),null], null), null);
});
/**
 * Types for built-in properties. Built-in properties whose values are to be
 *   parsed by gp-text/parse-non-string-property-value should be added here
 */
logseq.graph_parser.property.built_in_property_types = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336),new cljs.core.Keyword(null,"last_modified_at","last_modified_at",-1069251263),new cljs.core.Keyword(null,"template-including-parent","template-including-parent",1449989665),new cljs.core.Keyword(null,"query-table","query-table",2095143554),new cljs.core.Keyword(null,"doing","doing",-3342172),new cljs.core.Keyword(null,"done","done",-889844188),new cljs.core.Keyword(null,"now","now",-1650525531),new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),new cljs.core.Keyword(null,"later","later",961723974),new cljs.core.Keyword(null,"hl-stamp","hl-stamp",-695479513),new cljs.core.Keyword(null,"hl-page","hl-page",949012424),new cljs.core.Keyword(null,"last-modified-at","last-modified-at",478765450),new cljs.core.Keyword(null,"public","public",1566243851),new cljs.core.Keyword(null,"exclude-from-graph-view","exclude-from-graph-view",-1509369969),new cljs.core.Keyword("logseq.query","nlp-date","logseq.query/nlp-date",-145078221),new cljs.core.Keyword(null,"todo","todo",-1046442570),new cljs.core.Keyword(null,"query-sort-desc","query-sort-desc",123730008),new cljs.core.Keyword(null,"created-at","created-at",-89248644),new cljs.core.Keyword(null,"created_at","created_at",1484050750),new cljs.core.Keyword(null,"heading","heading",-1312171873)],[new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)]);
if(clojure.set.subset_QMARK_(cljs.core.set(cljs.core.keys(logseq.graph_parser.property.built_in_property_types)),clojure.set.union.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.property.hidden_built_in_properties(),logseq.graph_parser.property.editable_built_in_properties()))){
} else {
throw (new Error((""+"Assert failed: "+"Keys of built-in-property-types must be valid built-in properties"+"\n"+"(set/subset? (set (keys built-in-property-types)) (set/union (hidden-built-in-properties) (editable-built-in-properties)))")));
}
/**
 * Properties whose values will not be parsed by gp-text/parse-property
 */
logseq.graph_parser.property.unparsed_built_in_properties = (function logseq$graph_parser$property$unparsed_built_in_properties(){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic(clojure.set.union.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.property.hidden_built_in_properties(),logseq.graph_parser.property.editable_built_in_properties()),logseq.graph_parser.property.editable_linkable_built_in_properties,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.set(cljs.core.keys(logseq.graph_parser.property.built_in_property_types))], 0));
});
if((typeof logseq !== 'undefined') && (typeof logseq.graph_parser !== 'undefined') && (typeof logseq.graph_parser.property !== 'undefined') && (typeof logseq.graph_parser.property.properties_start !== 'undefined')){
} else {
logseq.graph_parser.property.properties_start = ":PROPERTIES:";
}
if((typeof logseq !== 'undefined') && (typeof logseq.graph_parser !== 'undefined') && (typeof logseq.graph_parser.property !== 'undefined') && (typeof logseq.graph_parser.property.properties_end !== 'undefined')){
} else {
logseq.graph_parser.property.properties_end = ":END:";
}
if((typeof logseq !== 'undefined') && (typeof logseq.graph_parser !== 'undefined') && (typeof logseq.graph_parser.property !== 'undefined') && (typeof logseq.graph_parser.property.properties_end_pattern !== 'undefined')){
} else {
logseq.graph_parser.property.properties_end_pattern = cljs.core.re_pattern(goog.string.format("%s[\t\r ]*\n|(%s\\s*$)",logseq.graph_parser.property.properties_end,logseq.graph_parser.property.properties_end));
}
logseq.graph_parser.property.contains_properties_QMARK_ = (function logseq$graph_parser$property$contains_properties_QMARK_(content){
if(cljs.core.truth_(content)){
var and__5140__auto__ = clojure.string.includes_QMARK_(content,logseq.graph_parser.property.properties_start);
if(and__5140__auto__){
return cljs.core.re_find(logseq.graph_parser.property.properties_end_pattern,content);
} else {
return and__5140__auto__;
}
} else {
return null;
}
});
/**
 * New syntax: key:: value
 */
logseq.graph_parser.property.__GT_new_properties = (function logseq$graph_parser$property$__GT_new_properties(content){
if(cljs.core.truth_(logseq.graph_parser.property.contains_properties_QMARK_(content))){
var lines = clojure.string.split_lines(content);
var start_idx = lines.indexOf(logseq.graph_parser.property.properties_start);
var end_idx = lines.indexOf(logseq.graph_parser.property.properties_end);
if((((start_idx >= (0))) && ((((end_idx > (0))) && ((end_idx > start_idx)))))){
var before = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(lines,(0),start_idx);
var middle = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (text){
var vec__58887 = logseq.common.util.split_first(":",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(text,(1)));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58887,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58887,(1),null);
if(cljs.core.truth_((function (){var and__5140__auto__ = k;
if(cljs.core.truth_(and__5140__auto__)){
return v;
} else {
return and__5140__auto__;
}
})())){
var k__$1 = clojure.string.replace(k,"_","-");
var compare_k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(k__$1));
var k__$2 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"custom-id","custom-id",-615733336),null,new cljs.core.Keyword(null,"custom_id","custom_id",834948303),null,new cljs.core.Keyword(null,"id","id",-1388402092),null], null), null),compare_k))?"id":k__$1);
var k__$3 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-modified-at","last-modified-at",478765450),null], null), null),compare_k))?"updated-at":k__$2);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__$3)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.property.colons)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.trim(v)));
} else {
return text;
}
}),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(lines,(start_idx + (1)),end_idx));
var after = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(lines,(end_idx + (1)));
var lines__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(before,middle,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([after], 0));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",lines__$1);
} else {
return content;
}
} else {
return content;
}
});
logseq.graph_parser.property.simplified_property_QMARK_ = (function logseq$graph_parser$property$simplified_property_QMARK_(line){
return cljs.core.boolean$((function (){var and__5140__auto__ = typeof line === 'string';
if(and__5140__auto__){
return cljs.core.re_find(cljs.core.re_pattern((""+"^\\s?[^ ]+"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.property.colons))),line);
} else {
return and__5140__auto__;
}
})());
});
/**
 * Removes block properties from `content`, using the parsed `marker` to locate fenced titles.
 */
logseq.graph_parser.property.remove_properties = (function logseq$graph_parser$property$remove_properties(var_args){
var G__58897 = arguments.length;
switch (G__58897) {
case 2:
return logseq.graph_parser.property.remove_properties.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return logseq.graph_parser.property.remove_properties.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.graph_parser.property.remove_properties.cljs$core$IFn$_invoke$arity$2 = (function (format,content){
return logseq.graph_parser.property.remove_properties.cljs$core$IFn$_invoke$arity$3(format,content,null);
}));

(logseq.graph_parser.property.remove_properties.cljs$core$IFn$_invoke$arity$3 = (function (format,content,marker){
if(cljs.core.truth_(logseq.graph_parser.property.contains_properties_QMARK_(content))){
var lines = clojure.string.split_lines(content);
var vec__58899 = cljs.core.split_with((function (p1__58893_SHARP_){
return (!(clojure.string.starts_with_QMARK_(clojure.string.upper_case(clojure.string.triml(p1__58893_SHARP_)),logseq.graph_parser.property.properties_start)));
}),lines);
var title_lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58899,(0),null);
var properties_AMPERSAND_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58899,(1),null);
var body = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__58894_SHARP_){
return (((!(clojure.string.starts_with_QMARK_(clojure.string.upper_case(clojure.string.trim(p1__58894_SHARP_)),logseq.graph_parser.property.properties_end)))) || (clojure.string.blank_QMARK_(p1__58894_SHARP_)));
}),properties_AMPERSAND_body);
var body__$1 = ((((cljs.core.seq(body)) && (clojure.string.starts_with_QMARK_(clojure.string.upper_case(clojure.string.triml(cljs.core.first(body))),logseq.graph_parser.property.properties_end))))?(function (){var line = clojure.string.replace(cljs.core.first(body),/:END:\s?/i,"");
if(clojure.string.blank_QMARK_(line)){
return cljs.core.rest(body);
} else {
return cljs.core.cons(line,cljs.core.rest(body));
}
})():body);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(title_lines,body__$1));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"org","org",1495985))){
var lines = clojure.string.split_lines(content);
var fence_line = (function (){var G__58904 = (function (){var G__58905 = cljs.core.first(lines);
if((G__58905 == null)){
return null;
} else {
return clojure.string.trim(G__58905);
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = marker;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.seq(lines);
} else {
return and__5140__auto__;
}
})())){
return clojure.string.replace_first(G__58904,cljs.core.re_pattern((""+"^"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.util.escape_regex_chars(marker))+"\\s+")),"");
} else {
return G__58904;
}
})();
var fence = (function (){var G__58907 = fence_line;
if((G__58907 == null)){
return null;
} else {
return cljs.core.re_find(/^(?:```|\$\$)/,G__58907);
}
})();
var closing = (cljs.core.truth_(fence)?cljs.core.some((function (p__58910){
var vec__58911 = p__58910;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58911,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58911,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),fence)){
return i;
} else {
return null;
}
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.rest(lines))):null);
var lines__$1 = (cljs.core.truth_(closing)?(function (){var vec__58914 = cljs.core.split_at(((2) + closing),lines);
var fenced = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58914,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58914,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fenced,cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.property.simplified_property_QMARK_,after));
})():((logseq.graph_parser.property.simplified_property_QMARK_(cljs.core.first(lines)))?cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.property.simplified_property_QMARK_,lines):cljs.core.cons(cljs.core.first(lines),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.property.simplified_property_QMARK_,cljs.core.rest(lines)))
));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",lines__$1);
} else {
return content;

}
}
}));

(logseq.graph_parser.property.remove_properties.cljs$lang$maxFixedArity = 3);

logseq.graph_parser.property.remove_logbook = (function logseq$graph_parser$property$remove_logbook(content){
if(typeof content === 'string'){
var lines = clojure.string.split_lines(content);
var vec__58918 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__58921,line){
var vec__58922 = p__58921;
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58922,(0),null);
var in_logbook_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58922,(1),null);
var trimmed = clojure.string.trim(line);
var upper = clojure.string.upper_case(trimmed);
if(clojure.string.starts_with_QMARK_(upper,":LOGBOOK:")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,true], null);
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = in_logbook_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return clojure.string.starts_with_QMARK_(upper,":END:");
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,false], null);
} else {
if(cljs.core.truth_(in_logbook_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,true], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,line),in_logbook_QMARK_], null);

}
}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,false], null),lines);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58918,(0),null);
var _in_logbook_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58918,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",result);
} else {
return null;
}
});
logseq.graph_parser.property.remove_deadline_scheduled = (function logseq$graph_parser$property$remove_deadline_scheduled(content){
if(typeof content === 'string'){
var lines = clojure.string.split_lines(content);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(lines))){
return content;
} else {
var first_line = cljs.core.first(lines);
var rest_lines = cljs.core.rest(lines);
var rest_lines__$1 = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (line){
var upper = clojure.string.upper_case(clojure.string.triml(line));
if(((clojure.string.starts_with_QMARK_(upper,"DEADLINE: ")) || (clojure.string.starts_with_QMARK_(upper,"SCHEDULED: ")))){
var cleaned = clojure.string.trim(clojure.string.replace(line,/(?:^|\s)(DEADLINE|SCHEDULED):\s+<[^>]*>/i,""));
if(clojure.string.blank_QMARK_(cleaned)){
return null;
} else {
return cleaned;
}
} else {
return line;
}
}),rest_lines);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cons(first_line,rest_lines__$1));
}
} else {
return null;
}
});

//# sourceMappingURL=logseq.graph_parser.property.js.map
