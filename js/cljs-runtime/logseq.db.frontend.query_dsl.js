goog.provide('logseq.db.frontend.query_dsl');
logseq.db.frontend.query_dsl.tag_placeholder = "~~~tag-placeholder~~~";
logseq.db.frontend.query_dsl.pre_transform = (function logseq$db$frontend$query_dsl$pre_transform(s){
if(logseq.common.util.wrapped_by_quotes_QMARK_(s)){
return s;
} else {
var quoted_page_ref = (function (p__81600){
var vec__81601 = p__81600;
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81601,(0),null);
var page_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81601,(1),null);
if((!((page_name == null)))){
var page_name_SINGLEQUOTE_ = clojure.string.replace(page_name,"#",logseq.db.frontend.query_dsl.tag_placeholder);
return (""+"\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.util.page_ref.left_brackets)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_name_SINGLEQUOTE_)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.util.page_ref.right_brackets)+"\"");
} else {
return match;
}
});
var G__81604 = s;
var G__81604__$1 = (((G__81604 == null))?null:clojure.string.replace(G__81604,/\"(?:\\.|[^\"\\])*\"|\[\[(.*?)\]\]/,quoted_page_ref));
var G__81604__$2 = (((G__81604__$1 == null))?null:clojure.string.replace(G__81604__$1,/\(between ([^\)]+)\)/,(function (p__81605){
var vec__81606 = p__81605;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81606,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81606,(1),null);
return logseq.common.util.format.cljs$core$IFn$_invoke$arity$variadic("(between %s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (value){
if(cljs.core.truth_((function (){var or__5142__auto__ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["-",null,"+",null], null), null),cljs.core.first(value));
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto__ = logseq.common.util.safe_re_find(/\d/,cljs.core.first(value));
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.some((function (p1__81598_SHARP_){
return clojure.string.ends_with_QMARK_(value,p1__81598_SHARP_);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","m","d","h","min"], null));
} else {
return and__5140__auto__;
}
}
})())){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(value));
} else {
return value;
}
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,clojure.string.split.cljs$core$IFn$_invoke$arity$2(x,/ /))))], 0));
})));
var G__81604__$3 = (((G__81604__$2 == null))?null:clojure.string.replace(G__81604__$2,/\"[^\"]+\"/,(function (p1__81599_SHARP_){
return clojure.string.replace(p1__81599_SHARP_,"#",logseq.db.frontend.query_dsl.tag_placeholder);
})));
var G__81604__$4 = (((G__81604__$3 == null))?null:clojure.string.replace(G__81604__$3," #"," #tag "));
var G__81604__$5 = (((G__81604__$4 == null))?null:clojure.string.replace(G__81604__$4,/^#/,"#tag "));
if((G__81604__$5 == null)){
return null;
} else {
return clojure.string.replace(G__81604__$5,logseq.db.frontend.query_dsl.tag_placeholder,"#");
}
}
});
logseq.db.frontend.query_dsl.simplify_query = (function logseq$db$frontend$query_dsl$simplify_query(query){
if(typeof query === 'string'){
return query;
} else {
return clojure.walk.postwalk((function (form){
if(((cljs.core.coll_QMARK_(form)) && (((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"and","and",668631710,null),null,new cljs.core.Symbol(null,"or","or",1876275696,null),null], null), null),cljs.core.first(form))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(form))))))){
return cljs.core.second(form);
} else {
return form;
}
}),query);
}
});
logseq.db.frontend.query_dsl.get_timestamp_property = (function logseq$db$frontend$query_dsl$get_timestamp_property(form){
var property_name = cljs.core.second(form);
if((((property_name instanceof cljs.core.Keyword)) || ((((property_name instanceof cljs.core.Symbol)) || (typeof property_name === 'string'))))){
var property = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(clojure.string.lower_case(cljs.core.name(property_name)),"_","-"));
if(cljs.core.truth_(logseq.db.frontend.property.property_QMARK_(property))){
return property;
} else {
var G__81622 = property;
var G__81622__$1 = (((G__81622 instanceof cljs.core.Keyword))?G__81622.fqn:null);
switch (G__81622__$1) {
case "created-at":
return new cljs.core.Keyword("block","created-at","block/created-at",1440015);

break;
case "updated-at":
return new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551);

break;
default:
return null;

}
}
} else {
return null;
}
});
logseq.db.frontend.query_dsl.custom_readers = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"readers","readers",-2118263030),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"tag","tag",350170304,null),logseq.common.util.page_ref.__GT_page_ref], null)], null);

//# sourceMappingURL=logseq.db.frontend.query_dsl.js.map
