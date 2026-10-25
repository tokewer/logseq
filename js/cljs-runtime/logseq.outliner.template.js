goog.provide('logseq.outliner.template');
logseq.outliner.template.template_re = /<%([^%].*?)%>/;
logseq.outliner.template.current_time = (function logseq$outliner$template$current_time(){
var d = (new Date());
var locale = (function (){var G__59678 = globalThis;
var G__59678__$1 = (((G__59678 == null))?null:(G__59678["navigator"]));
if((G__59678__$1 == null)){
return null;
} else {
return (G__59678__$1["language"]);
}
})();
return d.toLocaleTimeString(locale,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hour","hour",-555989214),"2-digit",new cljs.core.Keyword(null,"minute","minute",-642875969),"2-digit",new cljs.core.Keyword(null,"hourCycle","hourCycle",-1723448226),"h23"], null)));
});
logseq.outliner.template.date_with_day_offset = (function logseq$outliner$template$date_with_day_offset(offset_days){
var d = (new Date());
d.setHours((0),(0),(0),(0));

d.setDate((d.getDate() + offset_days));

return d;
});
logseq.outliner.template.date__GT_journal_day = (function logseq$outliner$template$date__GT_journal_day(date){
var year = date.getFullYear();
var month = (date.getMonth() + (1));
var day = date.getDate();
var month_SINGLEQUOTE_ = (((month < (10)))?(""+"0"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)):(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)));
var day_SINGLEQUOTE_ = (((day < (10)))?(""+"0"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)):(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)));
return parseInt((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(month_SINGLEQUOTE_)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(day_SINGLEQUOTE_)),(10));
});
logseq.outliner.template.journal_variable_offsets = new cljs.core.PersistentArrayMap(null, 3, ["today",(0),"yesterday",(-1),"tomorrow",(1)], null);
logseq.outliner.template.journal_title = (function logseq$outliner$template$journal_title(db,offset_days){
var journal_day = logseq.outliner.template.date__GT_journal_day(logseq.outliner.template.date_with_day_offset(offset_days));
var or__5142__auto__ = (function (){var G__59686 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?journal-day","?journal-day",2147417007,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),new cljs.core.Symbol(null,"?journal-day","?journal-day",2147417007,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null)], null);
var G__59687 = db;
var G__59688 = journal_day;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__59686,G__59687,G__59688) : datascript.core.q.call(null,G__59686,G__59687,G__59688));
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(journal_day));
}
});
logseq.outliner.template.journal_page = (function logseq$outliner$template$journal_page(db,offset_days){
var journal_day = logseq.outliner.template.date__GT_journal_day(logseq.outliner.template.date_with_day_offset(offset_days));
var temp__5825__auto__ = (function (){var G__59702 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?journal-day","?journal-day",2147417007,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),new cljs.core.Symbol(null,"?journal-day","?journal-day",2147417007,null)], null)], null);
var G__59703 = db;
var G__59704 = journal_day;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__59702,G__59703,G__59704) : datascript.core.q.call(null,G__59702,G__59703,G__59704));
})();
if(cljs.core.truth_(temp__5825__auto__)){
var page_id = temp__5825__auto__;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,page_id) : datascript.core.entity.call(null,db,page_id));
} else {
return null;
}
});
logseq.outliner.template.journal_page_or_title = (function logseq$outliner$template$journal_page_or_title(db,offset_days){
var or__5142__auto__ = logseq.outliner.template.journal_page(db,offset_days);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.outliner.template.journal_title(db,offset_days);
}
});
logseq.outliner.template.target_page = (function logseq$outliner$template$target_page(target){
if(cljs.core.truth_((logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1(target) : logseq.db.page_QMARK_.call(null,target)))){
return target;
} else {
return new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(target);

}
});
logseq.outliner.template.page_ref_for = (function logseq$outliner$template$page_ref_for(page_or_title){
return logseq.common.util.page_ref.__GT_page_ref((function (){var temp__5823__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page_or_title);
if(cljs.core.truth_(temp__5823__auto__)){
var page_uuid = temp__5823__auto__;
return page_uuid;
} else {
return page_or_title;
}
})());
});
logseq.outliner.template.dynamic_template_matches = (function logseq$outliner$template$dynamic_template_matches(content){
if(typeof content === 'string'){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(clojure.string.lower_case,clojure.string.trim,cljs.core.second),cljs.core.re_seq(logseq.outliner.template.template_re,content));
} else {
return null;
}
});
logseq.outliner.template.block_template_contents = (function logseq$outliner$template$block_template_contents(block){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","raw-title","block/raw-title",1833669090).cljs$core$IFn$_invoke$arity$1(block)], null),((cljs.core.map_QMARK_(new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708).cljs$core$IFn$_invoke$arity$1(block)))?cljs.core.vals(new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708).cljs$core$IFn$_invoke$arity$1(block)):null));
});
logseq.outliner.template.dynamic_template_journal_days = (function logseq$outliner$template$dynamic_template_journal_days(blocks){
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59735_SHARP_){
return logseq.outliner.template.date__GT_journal_day(logseq.outliner.template.date_with_day_offset(p1__59735_SHARP_));
}),cljs.core.keep.cljs$core$IFn$_invoke$arity$2(logseq.outliner.template.journal_variable_offsets,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(logseq.outliner.template.dynamic_template_matches,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(logseq.outliner.template.block_template_contents,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([blocks], 0))], 0))))));
});
logseq.outliner.template.variable_rules = (function logseq$outliner$template$variable_rules(db,target){
var today = logseq.outliner.template.journal_page_or_title(db,(0));
var current_page = (function (){var or__5142__auto__ = logseq.outliner.template.target_page(target);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return today;
}
})();
return new cljs.core.PersistentArrayMap(null, 5, ["today",logseq.outliner.template.page_ref_for(today),"yesterday",logseq.outliner.template.page_ref_for(logseq.outliner.template.journal_page_or_title(db,(-1))),"tomorrow",logseq.outliner.template.page_ref_for(logseq.outliner.template.journal_page_or_title(db,(1))),"time",logseq.outliner.template.current_time(),"current page",logseq.outliner.template.page_ref_for(current_page)], null);
});
logseq.outliner.template.resolve_string = (function logseq$outliner$template$resolve_string(content,rules){
return clojure.string.replace(content,logseq.outliner.template.template_re,(function (p__59740){
var vec__59741 = p__59740;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59741,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59741,(1),null);
var match_SINGLEQUOTE_ = clojure.string.trim(match);
var lowered = clojure.string.lower_case(match_SINGLEQUOTE_);
if(clojure.string.blank_QMARK_(match_SINGLEQUOTE_)){
return "";
} else {
if(cljs.core.contains_QMARK_(rules,lowered)){
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(rules,lowered);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
} else {
return match_SINGLEQUOTE_;

}
}
}));
});
logseq.outliner.template.normalize_block = (function logseq$outliner$template$normalize_block(block){
var G__59751 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,block);
if(cljs.core.truth_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59751,new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block));
} else {
return G__59751;
}
});
logseq.outliner.template.resolve_field = (function logseq$outliner$template$resolve_field(value,rules){
if(typeof value === 'string'){
return logseq.outliner.template.resolve_string(value,rules);
} else {
return value;
}
});
logseq.outliner.template.resolve_properties_text_values = (function logseq$outliner$template$resolve_properties_text_values(value,rules){
if(cljs.core.map_QMARK_(value)){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,logseq.outliner.template.resolve_field(v,rules));
}),cljs.core.PersistentArrayMap.EMPTY,value);
} else {
return value;
}
});
logseq.outliner.template.resolve_block = (function logseq$outliner$template$resolve_block(block,rules){
var G__59753 = block;
var G__59753__$1 = ((cljs.core.contains_QMARK_(block,new cljs.core.Keyword("block","title","block/title",710445684)))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__59753,new cljs.core.Keyword("block","title","block/title",710445684),logseq.outliner.template.resolve_field,rules):G__59753);
var G__59753__$2 = ((cljs.core.contains_QMARK_(block,new cljs.core.Keyword("block","raw-title","block/raw-title",1833669090)))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__59753__$1,new cljs.core.Keyword("block","raw-title","block/raw-title",1833669090),logseq.outliner.template.resolve_field,rules):G__59753__$1);
if(cljs.core.contains_QMARK_(block,new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__59753__$2,new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708),logseq.outliner.template.resolve_properties_text_values,rules);
} else {
return G__59753__$2;
}
});
logseq.outliner.template.resolve_dynamic_template_blocks = (function logseq$outliner$template$resolve_dynamic_template_blocks(db,target,blocks){
var rules = logseq.outliner.template.variable_rules(db,target);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (block){
return logseq.outliner.template.resolve_block(logseq.outliner.template.normalize_block(block),rules);
}),blocks);
});

//# sourceMappingURL=logseq.outliner.template.js.map
