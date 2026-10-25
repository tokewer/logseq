goog.provide('io.factorhouse.hsx.props');
goog.scope(function(){
  io.factorhouse.hsx.props.goog$module$goog$object = goog.module.get('goog.object');
});
io.factorhouse.hsx.props.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
io.factorhouse.hsx.props.capitalize = (function io$factorhouse$hsx$props$capitalize(s){
if((cljs.core.count(s) < (2))){
return clojure.string.upper_case(s);
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1))));
}
});
io.factorhouse.hsx.props.dash_to_prop_name = (function io$factorhouse$hsx$props$dash_to_prop_name(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name(dashed);
var vec__47203 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(name_str,/-/);
var seq__47204 = cljs.core.seq(vec__47203);
var first__47205 = cljs.core.first(seq__47204);
var seq__47204__$1 = cljs.core.next(seq__47204);
var start = first__47205;
var parts = seq__47204__$1;
if(cljs.core.truth_((io.factorhouse.hsx.props.dont_camel_case.cljs$core$IFn$_invoke$arity$1 ? io.factorhouse.hsx.props.dont_camel_case.cljs$core$IFn$_invoke$arity$1(start) : io.factorhouse.hsx.props.dont_camel_case.call(null,start)))){
return name_str;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,start,cljs.core.map.cljs$core$IFn$_invoke$arity$2(io.factorhouse.hsx.props.capitalize,parts));
}
}
});
io.factorhouse.hsx.props.named_QMARK_ = (function io$factorhouse$hsx$props$named_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)));
});
io.factorhouse.hsx.props.prop_name_cache = ({"class": "className", "for": "htmlFor", "charset": "charSet"});
io.factorhouse.hsx.props.cache_get = (function io$factorhouse$hsx$props$cache_get(o,k){
var v = io.factorhouse.hsx.props.goog$module$goog$object.get(o,k);
if((void 0 === v)){
return null;
} else {
return v;
}
});
io.factorhouse.hsx.props.cached_prop_name = (function io$factorhouse$hsx$props$cached_prop_name(k){
if(io.factorhouse.hsx.props.named_QMARK_(k)){
var temp__5827__auto__ = io.factorhouse.hsx.props.cache_get(io.factorhouse.hsx.props.prop_name_cache,cljs.core.name(k));
if((temp__5827__auto__ == null)){
var v = io.factorhouse.hsx.props.dash_to_prop_name(k);
io.factorhouse.hsx.props.goog$module$goog$object.set(io.factorhouse.hsx.props.prop_name_cache,cljs.core.name(k),v);

return v;
} else {
var k_SINGLEQUOTE_ = temp__5827__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
io.factorhouse.hsx.props.convert_class = (function io$factorhouse$hsx$props$convert_class(klass){
var classes = ((typeof klass === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass], null):klass);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes);
});
io.factorhouse.hsx.props.kv_conv = (function io$factorhouse$hsx$props$kv_conv(o,k,v){
var prop_name = io.factorhouse.hsx.props.cached_prop_name(k);
var prop_value = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prop_name,"className"))?io.factorhouse.hsx.props.convert_class(v):(io.factorhouse.hsx.props.convert_prop_value.cljs$core$IFn$_invoke$arity$1 ? io.factorhouse.hsx.props.convert_prop_value.cljs$core$IFn$_invoke$arity$1(v) : io.factorhouse.hsx.props.convert_prop_value.call(null,v)));
var G__47217 = o;
io.factorhouse.hsx.props.goog$module$goog$object.set(G__47217,prop_name,prop_value);

return G__47217;
});
io.factorhouse.hsx.props.convert_prop_value = (function io$factorhouse$hsx$props$convert_prop_value(x){
if(cljs.core.object_QMARK_(x)){
return x;
} else {
if(io.factorhouse.hsx.props.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(io.factorhouse.hsx.props.kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.clj__GT_js(x);
} else {
if(cljs.core.ifn_QMARK_(x)){
return (function() { 
var G__47218__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(x,args);
};
var G__47218 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47219__i = 0, G__47219__a = new Array(arguments.length -  0);
while (G__47219__i < G__47219__a.length) {G__47219__a[G__47219__i] = arguments[G__47219__i + 0]; ++G__47219__i;}
  args = new cljs.core.IndexedSeq(G__47219__a,0,null);
} 
return G__47218__delegate.call(this,args);};
G__47218.cljs$lang$maxFixedArity = 0;
G__47218.cljs$lang$applyTo = (function (arglist__47220){
var args = cljs.core.seq(arglist__47220);
return G__47218__delegate(args);
});
G__47218.cljs$core$IFn$_invoke$arity$variadic = G__47218__delegate;
return G__47218;
})()
;
} else {
return cljs.core.clj__GT_js(x);

}
}
}
}
}
});
io.factorhouse.hsx.props.hsx_props__GT_react_props = (function io$factorhouse$hsx$props$hsx_props__GT_react_props(props){
if(cljs.core.map_QMARK_(props)){
return cljs.core.reduce_kv(io.factorhouse.hsx.props.kv_conv,({}),props);
} else {
if(cljs.core.object_QMARK_(props)){
return props;
} else {
return null;

}
}
});
io.factorhouse.hsx.props.shallow_js__GT_cljs = (function io$factorhouse$hsx$props$shallow_js__GT_cljs(x){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,k){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(r,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),io.factorhouse.hsx.props.goog$module$goog$object.get(x,k));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),cljs.core.js_keys(x)));
});

//# sourceMappingURL=io.factorhouse.hsx.props.js.map
