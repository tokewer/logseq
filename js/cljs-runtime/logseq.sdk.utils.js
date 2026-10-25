goog.provide('logseq.sdk.utils');
goog.scope(function(){
  logseq.sdk.utils.goog$module$goog$object = goog.module.get('goog.object');
});
logseq.sdk.utils.keep_json_keyword_QMARK_ = (function logseq$sdk$utils$keep_json_keyword_QMARK_(k){
var G__79732 = cljs.core.namespace(k);
var G__79732__$1 = (((G__79732 == null))?null:cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["block",null,"db",null,"file",null], null), null),G__79732));
if((G__79732__$1 == null)){
return null;
} else {
return cljs.core.not(G__79732__$1);
}
});
logseq.sdk.utils.remove_hidden_properties = logseq.api.db_based.util.remove_hidden_properties;
logseq.sdk.utils.kw_tag = "___kw___";
logseq.sdk.utils.encode_kw = (function logseq$sdk$utils$encode_kw(v){
if((v instanceof cljs.core.Keyword)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.sdk.utils.kw_tag)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5823__auto__ = cljs.core.namespace(v);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(v)));
} else {
return cljs.core.name(v);
}
})()));
} else {
return v;
}
});
logseq.sdk.utils.normalize_keyword_for_json = (function logseq$sdk$utils$normalize_keyword_for_json(var_args){
var G__79736 = arguments.length;
switch (G__79736) {
case 1:
return logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1 = (function (input){
return logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$2(input,true);
}));

(logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$2 = (function (input,camel_case_QMARK_){
if(cljs.core.truth_(input)){
var pid = (function (){var G__79737 = logseq.sdk.utils.goog$module$goog$object.get(window,"$$callerPluginID");
return G__79737;
})();
var plugin = (function (){var and__5140__auto__ = pid;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.handler.plugin.get_plugin_inst(pid);
} else {
return and__5140__auto__;
}
})();
var runtime = (function (){var G__79738 = plugin;
var G__79738__$1 = (((G__79738 == null))?null:logseq.sdk.utils.goog$module$goog$object.get(G__79738,"sdk"));
if((G__79738__$1 == null)){
return null;
} else {
return logseq.sdk.utils.goog$module$goog$object.get(G__79738__$1,"runtime");
}
})();
var cljs_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("cljs",runtime);
return clojure.walk.prewalk((function (a){
if(((cljs_QMARK_) && ((a instanceof cljs.core.Keyword)))){
return logseq.sdk.utils.encode_kw(a);
} else {
if((a instanceof cljs.core.Keyword)){
if(cljs.core.truth_(logseq.sdk.utils.keep_json_keyword_QMARK_(a))){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a));
} else {
var G__79741 = cljs.core.name(a);
if(cljs.core.truth_(camel_case_QMARK_)){
return camel_snake_kebab.core.__GT_camelCase(G__79741);
} else {
return G__79741;
}
}
} else {
if(cljs.core.uuid_QMARK_(a)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a));
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.map_QMARK_(a);
if(and__5140__auto__){
var and__5140__auto____$1 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(a);
if(cljs.core.truth_(and__5140__auto____$1)){
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(a);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
var G__79742 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(a,new cljs.core.Keyword("block","content","block/content",-161885195),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(a),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","full-title","block/full-title",-383789516),(function (){var or__5142__auto__ = logseq.db.frontend.content.recur_replace_uuid_in_block_title.cljs$core$IFn$_invoke$arity$1(a);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(a);
}
})()], 0));
return (logseq.sdk.utils.remove_hidden_properties.cljs$core$IFn$_invoke$arity$1 ? logseq.sdk.utils.remove_hidden_properties.cljs$core$IFn$_invoke$arity$1(G__79742) : logseq.sdk.utils.remove_hidden_properties.call(null,G__79742));
} else {
return a;

}
}
}
}
}),input);
} else {
return null;
}
}));

(logseq.sdk.utils.normalize_keyword_for_json.cljs$lang$maxFixedArity = 2);

logseq.sdk.utils.ref_value__GT_ids = (function logseq$sdk$utils$ref_value__GT_ids(value){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.map_QMARK_(value);
if(and__5140__auto__){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(value);
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(value);
} else {
if(cljs.core.map_QMARK_(value)){
return cljs.core.update_vals(value,logseq.sdk.utils.ref_value__GT_ids);
} else {
if(cljs.core.vector_QMARK_(value)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(logseq.sdk.utils.ref_value__GT_ids,value);
} else {
if(cljs.core.set_QMARK_(value)){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(logseq.sdk.utils.ref_value__GT_ids,value));
} else {
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(logseq.sdk.utils.ref_value__GT_ids,value);
} else {
return value;

}
}
}
}
}
});
logseq.sdk.utils.property_refs__GT_ids = (function logseq$sdk$utils$property_refs__GT_ids(result){
return clojure.walk.postwalk((function (value){
if(cljs.core.map_QMARK_(value)){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(cljs.core.truth_((function (){var and__5140__auto__ = (k instanceof cljs.core.Keyword);
if(and__5140__auto__){
var or__5142__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","tags","block/tags",1814948340),k);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return logseq.sdk.utils.keep_json_keyword_QMARK_(k);
}
} else {
return and__5140__auto__;
}
})())?logseq.sdk.utils.ref_value__GT_ids(v):v));
}),cljs.core.empty(value),value);
} else {
return value;
}
}),result);
});
logseq.sdk.utils.uuid_or_throw_error = (function logseq$sdk$utils$uuid_or_throw_error(s){
if(cljs.core.uuid_QMARK_(s)){
return s;
} else {
if(cljs.core.truth_((frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1(s) : frontend.util.uuid_string_QMARK_.call(null,s)))){
return cljs.core.uuid(s);
} else {
throw (new Error((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)+" is not a valid UUID string.")));

}
}
});
logseq.sdk.utils.jsx__GT_clj = (function logseq$sdk$utils$jsx__GT_clj(obj){
if(cljs.core.truth_(goog.isObject(obj))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,k){
var v = logseq.sdk.utils.goog$module$goog$object.get(obj,k);
var k__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(camel_snake_kebab.core.__GT_kebab_case(k));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("function",goog.typeOf(v))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k__$1,v);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k__$1,(logseq.sdk.utils.jsx__GT_clj.cljs$core$IFn$_invoke$arity$1 ? logseq.sdk.utils.jsx__GT_clj.cljs$core$IFn$_invoke$arity$1(v) : logseq.sdk.utils.jsx__GT_clj.call(null,v)));
}
}),cljs.core.PersistentArrayMap.EMPTY,logseq.sdk.utils.goog$module$goog$object.getKeys(obj));
} else {
return obj;
}
});
logseq.sdk.utils.result__GT_js = (function logseq$sdk$utils$result__GT_js(result){
return cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1(logseq.sdk.utils.property_refs__GT_ids(result)));
});
logseq.sdk.utils.to_clj = cljs_bean.core.__GT_clj;
goog.exportSymbol('logseq.sdk.utils.to_clj', logseq.sdk.utils.to_clj);
logseq.sdk.utils.jsx_to_clj = logseq.sdk.utils.jsx__GT_clj;
goog.exportSymbol('logseq.sdk.utils.jsx_to_clj', logseq.sdk.utils.jsx_to_clj);
logseq.sdk.utils.to_js = cljs_bean.core.__GT_js;
goog.exportSymbol('logseq.sdk.utils.to_js', logseq.sdk.utils.to_js);
logseq.sdk.utils.to_keyword = cljs.core.keyword;
goog.exportSymbol('logseq.sdk.utils.to_keyword', logseq.sdk.utils.to_keyword);
logseq.sdk.utils.to_symbol = cljs.core.symbol;
goog.exportSymbol('logseq.sdk.utils.to_symbol', logseq.sdk.utils.to_symbol);

//# sourceMappingURL=logseq.sdk.utils.js.map
