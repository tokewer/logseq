goog.provide('malli.transform');
malli.transform._STAR_max_compile_depth_STAR_ = (10);
/**
 * Utility function to convert input into an interceptor. Works with functions,
 *   map and sequence of those.
 */
malli.transform._interceptor = (function malli$transform$_interceptor(_QMARK_interceptor,schema,options){
if(cljs.core.fn_QMARK_(_QMARK_interceptor)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enter","enter",1792452624),_QMARK_interceptor], null);
} else {
if(((cljs.core.map_QMARK_(_QMARK_interceptor)) && (cljs.core.contains_QMARK_(_QMARK_interceptor,new cljs.core.Keyword(null,"compile","compile",608186429))))){
var compiled = new cljs.core.Keyword("malli.transform","compiled","malli.transform/compiled",-1910053091).cljs$core$IFn$_invoke$arity$2(options,(0));
var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword("malli.transform","compiled","malli.transform/compiled",-1910053091),(compiled + (1)));
if((compiled >= malli.transform._STAR_max_compile_depth_STAR_)){
malli.core._fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli.transform","too-deep-compilation","malli.transform/too-deep-compilation",-1157462070),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"this","this",-611633625),_QMARK_interceptor,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema,new cljs.core.Keyword(null,"options","options",99638489),options__$1], null));
} else {
}

var temp__5825__auto__ = (function (){var G__79375 = (function (){var fexpr__79378 = new cljs.core.Keyword(null,"compile","compile",608186429).cljs$core$IFn$_invoke$arity$1(_QMARK_interceptor);
return (fexpr__79378.cljs$core$IFn$_invoke$arity$2 ? fexpr__79378.cljs$core$IFn$_invoke$arity$2(schema,options__$1) : fexpr__79378.call(null,schema,options__$1));
})();
var G__79376 = schema;
var G__79377 = options__$1;
return (malli.transform._interceptor.cljs$core$IFn$_invoke$arity$3 ? malli.transform._interceptor.cljs$core$IFn$_invoke$arity$3(G__79375,G__79376,G__79377) : malli.transform._interceptor.call(null,G__79375,G__79376,G__79377));
})();
if(cljs.core.truth_(temp__5825__auto__)){
var interceptor = temp__5825__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_QMARK_interceptor,new cljs.core.Keyword(null,"compile","compile",608186429)),interceptor], 0));
} else {
return null;
}
} else {
if(((cljs.core.map_QMARK_(_QMARK_interceptor)) && (((cljs.core.contains_QMARK_(_QMARK_interceptor,new cljs.core.Keyword(null,"enter","enter",1792452624))) || (cljs.core.contains_QMARK_(_QMARK_interceptor,new cljs.core.Keyword(null,"leave","leave",1022579443))))))){
return _QMARK_interceptor;
} else {
if(cljs.core.coll_QMARK_(_QMARK_interceptor)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p__79379,p__79380){
var map__79381 = p__79379;
var map__79381__$1 = cljs.core.__destructure_map(map__79381);
var enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79381__$1,new cljs.core.Keyword(null,"enter","enter",1792452624));
var leave = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79381__$1,new cljs.core.Keyword(null,"leave","leave",1022579443));
var map__79382 = p__79380;
var map__79382__$1 = cljs.core.__destructure_map(map__79382);
var new_enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79382__$1,new cljs.core.Keyword(null,"enter","enter",1792452624));
var new_leave = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79382__$1,new cljs.core.Keyword(null,"leave","leave",1022579443));
var enter__$1 = (cljs.core.truth_((function (){var and__5140__auto__ = enter;
if(cljs.core.truth_(and__5140__auto__)){
return new_enter;
} else {
return and__5140__auto__;
}
})())?(function (p1__79372_SHARP_){
var G__79383 = (enter.cljs$core$IFn$_invoke$arity$1 ? enter.cljs$core$IFn$_invoke$arity$1(p1__79372_SHARP_) : enter.call(null,p1__79372_SHARP_));
return (new_enter.cljs$core$IFn$_invoke$arity$1 ? new_enter.cljs$core$IFn$_invoke$arity$1(G__79383) : new_enter.call(null,G__79383));
}):(function (){var or__5142__auto__ = enter;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new_enter;
}
})());
var leave__$1 = (cljs.core.truth_((function (){var and__5140__auto__ = leave;
if(cljs.core.truth_(and__5140__auto__)){
return new_leave;
} else {
return and__5140__auto__;
}
})())?(function (p1__79373_SHARP_){
var G__79384 = (new_leave.cljs$core$IFn$_invoke$arity$1 ? new_leave.cljs$core$IFn$_invoke$arity$1(p1__79373_SHARP_) : new_leave.call(null,p1__79373_SHARP_));
return (leave.cljs$core$IFn$_invoke$arity$1 ? leave.cljs$core$IFn$_invoke$arity$1(G__79384) : leave.call(null,G__79384));
}):(function (){var or__5142__auto__ = leave;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new_leave;
}
})());
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enter","enter",1792452624),enter__$1,new cljs.core.Keyword(null,"leave","leave",1022579443),leave__$1], null);
}),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__79374_SHARP_){
return (malli.transform._interceptor.cljs$core$IFn$_invoke$arity$3 ? malli.transform._interceptor.cljs$core$IFn$_invoke$arity$3(p1__79374_SHARP_,schema,options) : malli.transform._interceptor.call(null,p1__79374_SHARP_,schema,options));
}),_QMARK_interceptor));
} else {
if((_QMARK_interceptor == null)){
return null;
} else {
if(cljs.core.ifn_QMARK_(_QMARK_interceptor)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enter","enter",1792452624),_QMARK_interceptor], null);
} else {
return malli.core._fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli.transform","invalid-transformer","malli.transform/invalid-transformer",-1717093616),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),_QMARK_interceptor], null));

}
}
}
}
}
}
});
malli.transform._safe = (function malli$transform$_safe(f){
return (function (p1__79385_SHARP_){
try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__79385_SHARP_) : f.call(null,p1__79385_SHARP_));
}catch (e79386){if((e79386 instanceof Error)){
var _ = e79386;
return p1__79385_SHARP_;
} else {
throw e79386;

}
}});
});
malli.transform._string__GT_long = (function malli$transform$_string__GT_long(x){
if(typeof x === 'string'){
try{var x_SINGLEQUOTE_ = (cljs.core.truth_(cljs.core.re_find(/\D/,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(x,(1))))?NaN:parseInt(x,(10)));
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return x;
} else {
if((x_SINGLEQUOTE_ > Number.MAX_SAFE_INTEGER)){
return x;
} else {
if((x_SINGLEQUOTE_ < Number.MIN_SAFE_INTEGER)){
return x;
} else {
return x_SINGLEQUOTE_;

}
}
}
}catch (e79388){if((e79388 instanceof Error)){
var _ = e79388;
return x;
} else {
throw e79388;

}
}} else {
return x;
}
});
malli.transform.parse_float = (function malli$transform$parse_float(s){
return cljs.core.parse_double(s);
});
malli.transform._string__GT_float = (function malli$transform$_string__GT_float(x){
if(typeof x === 'string'){
var or__5142__auto__ = malli.transform.parse_float(x);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return x;
}
} else {
return x;
}
});
malli.transform._string__GT_double = (function malli$transform$_string__GT_double(x){
if(typeof x === 'string'){
var or__5142__auto__ = cljs.core.parse_double(x);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return x;
}
} else {
return x;
}
});
malli.transform._number__GT_float = (function malli$transform$_number__GT_float(x){
if(typeof x === 'number'){
return x;
} else {
return x;
}
});
malli.transform._number__GT_double = (function malli$transform$_number__GT_double(x){
if(typeof x === 'number'){
return x;
} else {
return x;
}
});
malli.transform._number__GT_long = (function malli$transform$_number__GT_long(x){
if(cljs.core.integer_QMARK_(x)){
return x;
} else {
if(((typeof x === 'number') && ((x === cljs.math.round(x))))){
return cljs.math.round(x);
} else {
return x;

}
}
});
malli.transform._string__GT_keyword = (function malli$transform$_string__GT_keyword(x){
if(typeof x === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
});
malli.transform._string__GT_boolean = (function malli$transform$_string__GT_boolean(x){
if(typeof x === 'string'){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",x)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("false",x)){
return false;
} else {
return x;

}
}
} else {
return x;
}
});
malli.transform.uuid_re = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
malli.transform._string__GT_uuid = (function malli$transform$_string__GT_uuid(x){
if(typeof x === 'string'){
var temp__5823__auto__ = cljs.core.re_matches(malli.transform.uuid_re,x);
if(cljs.core.truth_(temp__5823__auto__)){
var x__$1 = temp__5823__auto__;
return cljs.core.uuid(x__$1);
} else {
return x;
}
} else {
return x;
}
});
malli.transform._string__GT_date = (function malli$transform$_string__GT_date(x){
if(typeof x === 'string'){
try{return (new Date(goog.date.UtcDateTime.fromIsoString(x).getTime()));
}catch (e79391){if((e79391 instanceof Error)){
var _ = e79391;
return x;
} else {
throw e79391;

}
}} else {
return x;
}
});
malli.transform._string__GT_symbol = (function malli$transform$_string__GT_symbol(x){
if(typeof x === 'string'){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
});
malli.transform._string__GT_nil = (function malli$transform$_string__GT_nil(x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",x)){
return null;
} else {
return x;
}
});
malli.transform._any__GT_string = (function malli$transform$_any__GT_string(x){
if((x == null)){
return null;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
}
});
malli.transform._any__GT_any = (function malli$transform$_any__GT_any(x){
return x;
});
malli.transform._date__GT_string = (function malli$transform$_date__GT_string(x){
if(cljs.core.inst_QMARK_(x)){
try{return x.toISOString();
}catch (e79392){if((e79392 instanceof Error)){
var _ = e79392;
return x;
} else {
throw e79392;

}
}} else {
return x;
}
});
malli.transform._transform_map_keys = (function malli$transform$_transform_map_keys(var_args){
var G__79396 = arguments.length;
switch (G__79396) {
case 1:
return malli.transform._transform_map_keys.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.transform._transform_map_keys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.transform._transform_map_keys.cljs$core$IFn$_invoke$arity$1 = (function (f){
var xform = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__79397){
var vec__79398 = p__79397;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79398,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79398,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v], null);
}));
return (function (p1__79393_SHARP_){
var G__79401 = p1__79393_SHARP_;
if(cljs.core.map_QMARK_(p1__79393_SHARP_)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(p1__79393_SHARP_),xform,G__79401);
} else {
return G__79401;
}
});
}));

(malli.transform._transform_map_keys.cljs$core$IFn$_invoke$arity$2 = (function (ks,f){
var xform = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__79402){
var vec__79403 = p__79402;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79403,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79403,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__79406 = k;
if(cljs.core.contains_QMARK_(ks,k)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__79406) : f.call(null,G__79406));
} else {
return G__79406;
}
})(),v], null);
}));
return (function (p1__79394_SHARP_){
var G__79407 = p1__79394_SHARP_;
if(cljs.core.map_QMARK_(p1__79394_SHARP_)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(p1__79394_SHARP_),xform,G__79407);
} else {
return G__79407;
}
});
}));

(malli.transform._transform_map_keys.cljs$lang$maxFixedArity = 2);

malli.transform._transform_if_valid = (function malli$transform$_transform_if_valid(f,schema){
var validator = malli.core._validator(schema);
return (function (x){
var out = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.truth_((validator.cljs$core$IFn$_invoke$arity$1 ? validator.cljs$core$IFn$_invoke$arity$1(out) : validator.call(null,out)))){
return out;
} else {
return x;
}
});
});
malli.transform._sequential__GT_set = (function malli$transform$_sequential__GT_set(x){
if(cljs.core.set_QMARK_(x)){
return x;
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.set(x);
} else {
return x;

}
}
});
malli.transform._sequential__GT_vector = (function malli$transform$_sequential__GT_vector(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.vec(x);
} else {
return x;

}
}
});
malli.transform._sequential_or_set__GT_vector = (function malli$transform$_sequential_or_set__GT_vector(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
if(cljs.core.set_QMARK_(x)){
return cljs.core.vec(x);
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.vec(x);
} else {
return x;

}
}
}
});
malli.transform._sequential_or_set__GT_seq = (function malli$transform$_sequential_or_set__GT_seq(x){
if(cljs.core.vector_QMARK_(x)){
return cljs.core.seq(x);
} else {
if(cljs.core.set_QMARK_(x)){
return cljs.core.seq(x);
} else {
return x;

}
}
});
malli.transform._infer_child_compiler = (function malli$transform$_infer_child_compiler(x_coders){
return (function (schema,_){
var G__79408 = schema;
var G__79408__$1 = (((G__79408 == null))?null:malli.core.children.cljs$core$IFn$_invoke$arity$1(G__79408));
var G__79408__$2 = (((G__79408__$1 == null))?null:malli.core._infer(G__79408__$1));
if((G__79408__$2 == null)){
return null;
} else {
return (x_coders.cljs$core$IFn$_invoke$arity$1 ? x_coders.cljs$core$IFn$_invoke$arity$1(G__79408__$2) : x_coders.call(null,G__79408__$2));
}
});
});
malli.transform._add_child_compilers = (function malli$transform$_add_child_compilers(x_coders){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(x_coders,new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),malli.transform._infer_child_compiler(x_coders)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),malli.transform._infer_child_compiler(x_coders)], null)], 0));
});
malli.transform._base_json_decoders = (function malli$transform$_base_json_decoders(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"qualified-symbol","qualified-symbol",-665513695),new cljs.core.Symbol(null,"simple-keyword?","simple-keyword?",-367134735,null),new cljs.core.Keyword(null,"double","double",884886883),new cljs.core.Symbol(null,"uuid?","uuid?",400077689,null),new cljs.core.Symbol(null,"inst?","inst?",1614698981,null),new cljs.core.Symbol(null,"simple-ident?","simple-ident?",194189851,null),new cljs.core.Symbol(null,"int?","int?",1799729645,null),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Symbol(null,"float?","float?",673884616,null),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Symbol(null,"ident?","ident?",-2061359468,null),new cljs.core.Keyword(null,"qualified-keyword","qualified-keyword",736041675),new cljs.core.Symbol(null,"neg-int?","neg-int?",-1610409390,null),new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),new cljs.core.Symbol(null,"qualified-ident?","qualified-ident?",-928894763,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"simple-symbol?","simple-symbol?",1408454822,null),new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Symbol(null,"qualified-keyword?","qualified-keyword?",375456001,null),new cljs.core.Symbol(null,"qualified-symbol?","qualified-symbol?",98763807,null),new cljs.core.Symbol(null,"nat-int?","nat-int?",-1879663400,null),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Symbol(null,"double?","double?",-2146564276,null),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)],[malli.transform._string__GT_symbol,malli.transform._string__GT_keyword,malli.transform._number__GT_double,malli.transform._string__GT_uuid,malli.transform._string__GT_date,malli.transform._string__GT_keyword,malli.transform._number__GT_long,malli.transform._number__GT_long,malli.transform._number__GT_float,malli.transform._number__GT_float,malli.transform._string__GT_symbol,malli.transform._string__GT_keyword,malli.transform._string__GT_keyword,malli.transform._number__GT_long,malli.transform._string__GT_symbol,malli.transform._string__GT_keyword,malli.transform._string__GT_keyword,malli.transform._string__GT_symbol,malli.transform._number__GT_long,malli.transform._number__GT_long,malli.transform._string__GT_keyword,malli.transform._string__GT_keyword,malli.transform._string__GT_symbol,malli.transform._number__GT_long,malli.transform._string__GT_uuid,malli.transform._sequential__GT_set,malli.transform._number__GT_double,malli.transform._number__GT_long]);
});
malli.transform._json_decoders = (function malli$transform$_json_decoders(){
return malli.transform._add_child_compilers(malli.transform._base_json_decoders());
});
malli.transform._base_json_encoders = (function malli$transform$_base_json_encoders(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"qualified-symbol","qualified-symbol",-665513695),new cljs.core.Symbol(null,"simple-keyword?","simple-keyword?",-367134735,null),new cljs.core.Symbol(null,"uuid?","uuid?",400077689,null),new cljs.core.Symbol(null,"inst?","inst?",1614698981,null),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"qualified-keyword","qualified-keyword",736041675),new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"simple-symbol?","simple-symbol?",1408454822,null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Symbol(null,"qualified-keyword?","qualified-keyword?",375456001,null),new cljs.core.Symbol(null,"qualified-symbol?","qualified-symbol?",98763807,null),new cljs.core.Keyword(null,"uuid","uuid",-2145095719)],[malli.transform._any__GT_string,malli.core._keyword__GT_string,malli.transform._any__GT_string,malli.transform._date__GT_string,malli.transform._any__GT_string,malli.core._keyword__GT_string,malli.transform._any__GT_string,malli.core._keyword__GT_string,malli.transform._any__GT_string,malli.core._keyword__GT_string,malli.core._keyword__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string]);
});
malli.transform._json_encoders = (function malli$transform$_json_encoders(){
return malli.transform._add_child_compilers(malli.transform._base_json_encoders());
});
malli.transform._string_decoders = (function malli$transform$_string_decoders(){
return malli.transform._add_child_compilers(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([malli.transform._base_json_decoders(),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"true?","true?",-1600332395,null),new cljs.core.Keyword(null,"<=","<=",-395636158),new cljs.core.Keyword(null,"double","double",884886883),new cljs.core.Keyword(null,"not=","not=",-173995323),new cljs.core.Symbol(null,"int?","int?",1799729645,null),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Symbol(null,"float?","float?",673884616,null),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Symbol(null,"false?","false?",-1522377573,null),new cljs.core.Symbol(null,"neg-int?","neg-int?",-1610409390,null),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,">=",">=",-623615505),new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"nat-int?","nat-int?",-1879663400,null),new cljs.core.Symbol(null,"boolean?","boolean?",1790940868,null),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),new cljs.core.Symbol(null,"double?","double?",-2146564276,null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"<","<",-646864291),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)],[malli.transform._string__GT_boolean,malli.transform._string__GT_long,malli.transform._string__GT_double,malli.transform._string__GT_long,malli.transform._string__GT_long,malli.transform._string__GT_long,malli.transform._string__GT_long,malli.transform._string__GT_float,malli.transform._string__GT_float,malli.transform._string__GT_boolean,malli.transform._string__GT_long,malli.transform._sequential__GT_vector,malli.transform._string__GT_long,malli.transform._string__GT_long,malli.transform._transform_map_keys.cljs$core$IFn$_invoke$arity$1(malli.core._keyword__GT_string),malli.transform._string__GT_long,malli.transform._string__GT_long,malli.transform._string__GT_boolean,malli.transform._string__GT_double,malli.transform._string__GT_double,malli.transform._string__GT_boolean,malli.transform._string__GT_long,malli.transform._string__GT_long])], 0)));
});
malli.transform._string_encoders = (function malli$transform$_string_encoders(){
return malli.transform._add_child_compilers(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([malli.transform._base_json_encoders(),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"<=","<=",-395636158),new cljs.core.Keyword(null,"double","double",884886883),new cljs.core.Keyword(null,"not=","not=",-173995323),new cljs.core.Symbol(null,"int?","int?",1799729645,null),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Symbol(null,"neg-int?","neg-int?",-1610409390,null),new cljs.core.Keyword(null,">=",">=",-623615505),new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"nat-int?","nat-int?",-1879663400,null),new cljs.core.Symbol(null,"double","double",-1769548886,null),new cljs.core.Keyword(null,"<","<",-646864291),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)],[malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string])], 0)));
});

/**
* @constructor
 * @implements {malli.core.Transformer}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.transform.t_malli$transform79412 = (function (_QMARK_transformers,__GT_data,__GT_eval,__GT_chain,chain,chain_SINGLEQUOTE_,meta79413){
this._QMARK_transformers = _QMARK_transformers;
this.__GT_data = __GT_data;
this.__GT_eval = __GT_eval;
this.__GT_chain = __GT_chain;
this.chain = chain;
this.chain_SINGLEQUOTE_ = chain_SINGLEQUOTE_;
this.meta79413 = meta79413;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.transform.t_malli$transform79412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_79414,meta79413__$1){
var self__ = this;
var _79414__$1 = this;
return (new malli.transform.t_malli$transform79412(self__._QMARK_transformers,self__.__GT_data,self__.__GT_eval,self__.__GT_chain,self__.chain,self__.chain_SINGLEQUOTE_,meta79413__$1));
}));

(malli.transform.t_malli$transform79412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_79414){
var self__ = this;
var _79414__$1 = this;
return self__.meta79413;
}));

(malli.transform.t_malli$transform79412.prototype.malli$core$Transformer$ = cljs.core.PROTOCOL_SENTINEL);

(malli.transform.t_malli$transform79412.prototype.malli$core$Transformer$_transformer_chain$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.chain;
}));

(malli.transform.t_malli$transform79412.prototype.malli$core$Transformer$_value_transformer$arity$4 = (function (_,schema,method,options){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__79415){
var map__79416 = p__79415;
var map__79416__$1 = cljs.core.__destructure_map(map__79416);
var map__79417 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79416__$1,method);
var map__79417__$1 = cljs.core.__destructure_map(map__79417);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79417__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var qname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79417__$1,new cljs.core.Keyword(null,"qname","qname",-1983612179));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79417__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79417__$1,new cljs.core.Keyword(null,"transformers","transformers",-734201565));
var options__$1 = (function (){var or__5142__auto__ = options;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return malli.core.options.cljs$core$IFn$_invoke$arity$1(schema);
}
})();
var from = (function (properties){
var or__5142__auto__ = (cljs.core.truth_(name)?(function (){var G__79418 = properties;
var G__79418__$1 = (((G__79418 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__79418,method));
var G__79418__$2 = (((G__79418__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__79418__$1,name));
if((G__79418__$2 == null)){
return null;
} else {
return (self__.__GT_eval.cljs$core$IFn$_invoke$arity$2 ? self__.__GT_eval.cljs$core$IFn$_invoke$arity$2(G__79418__$2,options__$1) : self__.__GT_eval.call(null,G__79418__$2,options__$1));
}
})():null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.truth_(qname)){
var G__79419 = properties;
var G__79419__$1 = (((G__79419 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__79419,qname));
if((G__79419__$1 == null)){
return null;
} else {
return (self__.__GT_eval.cljs$core$IFn$_invoke$arity$2 ? self__.__GT_eval.cljs$core$IFn$_invoke$arity$2(G__79419__$1,options__$1) : self__.__GT_eval.call(null,G__79419__$1,options__$1));
}
} else {
return null;
}
}
});
var temp__5823__auto__ = (function (){var or__5142__auto__ = from(malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = from(malli.core.type_properties.cljs$core$IFn$_invoke$arity$1(schema));
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(transformers,malli.core.type.cljs$core$IFn$_invoke$arity$1(schema));
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return default$;
}
}
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var _QMARK_interceptor = temp__5823__auto__;
var interceptor = malli.transform._interceptor(_QMARK_interceptor,schema,options__$1);
if((acc == null)){
return interceptor;
} else {
return malli.transform._interceptor(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,interceptor], null),schema,options__$1);
}
} else {
return acc;
}
}),null,self__.chain_SINGLEQUOTE_);
}));

(malli.transform.t_malli$transform79412.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?transformers","?transformers",1611212010,null),new cljs.core.Symbol(null,"->data","->data",912474639,null),new cljs.core.Symbol(null,"->eval","->eval",1090195269,null),new cljs.core.Symbol(null,"->chain","->chain",923961567,null),new cljs.core.Symbol(null,"chain","chain",1656162556,null),new cljs.core.Symbol(null,"chain'","chain'",-156051191,null),new cljs.core.Symbol(null,"meta79413","meta79413",230997113,null)], null);
}));

(malli.transform.t_malli$transform79412.cljs$lang$type = true);

(malli.transform.t_malli$transform79412.cljs$lang$ctorStr = "malli.transform/t_malli$transform79412");

(malli.transform.t_malli$transform79412.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"malli.transform/t_malli$transform79412");
}));

/**
 * Positional factory function for malli.transform/t_malli$transform79412.
 */
malli.transform.__GT_t_malli$transform79412 = (function malli$transform$__GT_t_malli$transform79412(_QMARK_transformers,__GT_data,__GT_eval,__GT_chain,chain,chain_SINGLEQUOTE_,meta79413){
return (new malli.transform.t_malli$transform79412(_QMARK_transformers,__GT_data,__GT_eval,__GT_chain,chain,chain_SINGLEQUOTE_,meta79413));
});


/**
 * Compose a number of transformers. Takes a sequence of Transformer objects or transformer maps.
 * Returns a Transformer object.
 * 
 * A transformer map has the shape
 * {:name <keyword>
 *  :decoders <map from schema to function>
 *  :encoders <map from schema to function>}
 */
malli.transform.transformer = (function malli$transform$transformer(var_args){
var args__5882__auto__ = [];
var len__5876__auto___79457 = arguments.length;
var i__5877__auto___79458 = (0);
while(true){
if((i__5877__auto___79458 < len__5876__auto___79457)){
args__5882__auto__.push((arguments[i__5877__auto___79458]));

var G__79459 = (i__5877__auto___79458 + (1));
i__5877__auto___79458 = G__79459;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_transformers){
var __GT_data = (function (ts,default$,name,key){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"transformers","transformers",-734201565),ts,new cljs.core.Keyword(null,"default","default",-1987822328),default$,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"qname","qname",-1983612179),(cljs.core.truth_((function (){var and__5140__auto__ = name;
if(cljs.core.truth_(and__5140__auto__)){
return (!(cljs.core.qualified_keyword_QMARK_(name)));
} else {
return and__5140__auto__;
}
})())?cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(key,cljs.core.name(name)):null)], null);
});
var __GT_eval = (function (x,options){
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv((function (x__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x__$1,k,malli.core.eval.cljs$core$IFn$_invoke$arity$2(v,options));
}),x,x);
} else {
return malli.core.eval.cljs$core$IFn$_invoke$arity$1(x);
}
});
var __GT_chain = malli.core._comp.cljs$core$IFn$_invoke$arity$2(malli.core._transformer_chain,malli.core._into_transformer);
var chain = cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__79409_SHARP_){
if(cljs.core.map_QMARK_(p1__79409_SHARP_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__79409_SHARP_], null);
} else {
return __GT_chain(p1__79409_SHARP_);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,_QMARK_transformers)], 0)));
var chain_SINGLEQUOTE_ = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__79410_SHARP_){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__79410_SHARP_);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"decode","decode",-1306165281),__GT_data(new cljs.core.Keyword(null,"decoders","decoders",1132818244).cljs$core$IFn$_invoke$arity$1(p1__79410_SHARP_),new cljs.core.Keyword(null,"default-decoder","default-decoder",808357161).cljs$core$IFn$_invoke$arity$1(p1__79410_SHARP_),name,"decode"),new cljs.core.Keyword(null,"encode","encode",-1753429702),__GT_data(new cljs.core.Keyword(null,"encoders","encoders",-111722908).cljs$core$IFn$_invoke$arity$1(p1__79410_SHARP_),new cljs.core.Keyword(null,"default-encoder","default-encoder",117541207).cljs$core$IFn$_invoke$arity$1(p1__79410_SHARP_),name,"encode")], null);
}),chain);
if(cljs.core.seq(chain)){
return (new malli.transform.t_malli$transform79412(_QMARK_transformers,__GT_data,__GT_eval,__GT_chain,chain,chain_SINGLEQUOTE_,cljs.core.PersistentArrayMap.EMPTY));
} else {
return null;
}
}));

(malli.transform.transformer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.transform.transformer.cljs$lang$applyTo = (function (seq79411){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq79411));
}));

malli.transform.json_transformer = (function malli$transform$json_transformer(var_args){
var G__79421 = arguments.length;
switch (G__79421) {
case 0:
return malli.transform.json_transformer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.transform.json_transformer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.transform.json_transformer.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.transform.json_transformer.cljs$core$IFn$_invoke$arity$1(null);
}));

(malli.transform.json_transformer.cljs$core$IFn$_invoke$arity$1 = (function (p__79422){
var map__79423 = p__79422;
var map__79423__$1 = cljs.core.__destructure_map(map__79423);
var json_vectors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79423__$1,new cljs.core.Keyword("malli.transform","json-vectors","malli.transform/json-vectors",-1108071835));
var keywordize_map_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79423__$1,new cljs.core.Keyword("malli.transform","keywordize-map-keys","malli.transform/keywordize-map-keys",158196822));
var map_of_key_decoders = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__79423__$1,new cljs.core.Keyword("malli.transform","map-of-key-decoders","malli.transform/map-of-key-decoders",-1029175759),malli.transform._string_decoders());
return malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoders","decoders",1132818244),(function (){var G__79424 = (function (){var G__79425 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(malli.transform._json_decoders(),new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),(function (schema,_){
var key_schema = (function (){var G__79426 = schema;
var G__79426__$1 = (((G__79426 == null))?null:malli.core.children.cljs$core$IFn$_invoke$arity$1(G__79426));
if((G__79426__$1 == null)){
return null;
} else {
return cljs.core.first(G__79426__$1);
}
})();
var or__5142__auto__ = (function (){var G__79427 = key_schema;
var G__79427__$1 = (((G__79427 == null))?null:malli.core.type.cljs$core$IFn$_invoke$arity$1(G__79427));
var G__79427__$2 = (((G__79427__$1 == null))?null:(map_of_key_decoders.cljs$core$IFn$_invoke$arity$1 ? map_of_key_decoders.cljs$core$IFn$_invoke$arity$1(G__79427__$1) : map_of_key_decoders.call(null,G__79427__$1)));
var G__79427__$3 = (((G__79427__$2 == null))?null:malli.transform._interceptor(G__79427__$2,schema,cljs.core.PersistentArrayMap.EMPTY));
var G__79427__$4 = (((G__79427__$3 == null))?null:malli.core._intercepting.cljs$core$IFn$_invoke$arity$1(G__79427__$3));
var G__79427__$5 = (((G__79427__$4 == null))?null:malli.core._comp.cljs$core$IFn$_invoke$arity$2(G__79427__$4,malli.core._keyword__GT_string));
var G__79427__$6 = (((G__79427__$5 == null))?null:malli.transform._transform_if_valid(G__79427__$5,key_schema));
if((G__79427__$6 == null)){
return null;
} else {
return malli.transform._transform_map_keys.cljs$core$IFn$_invoke$arity$1(G__79427__$6);
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return malli.transform._transform_map_keys.cljs$core$IFn$_invoke$arity$1(malli.core._keyword__GT_string);
}
})], null));
if(cljs.core.truth_(keywordize_map_keys)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79425,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),(function (schema,_){
var keyword_keys = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,malli.util.keys(schema))));
return malli.transform._transform_map_keys.cljs$core$IFn$_invoke$arity$2(keyword_keys,malli.transform._string__GT_keyword);
})], null));
} else {
return G__79425;
}
})();
if(cljs.core.truth_(json_vectors)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79424,new cljs.core.Keyword(null,"vector","vector",1902966158),malli.transform._sequential__GT_vector);
} else {
return G__79424;
}
})(),new cljs.core.Keyword(null,"encoders","encoders",-111722908),malli.transform._json_encoders()], null)], 0));
}));

(malli.transform.json_transformer.cljs$lang$maxFixedArity = 1);

malli.transform.string_transformer = (function malli$transform$string_transformer(){
return malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"decoders","decoders",1132818244),malli.transform._string_decoders(),new cljs.core.Keyword(null,"encoders","encoders",-111722908),malli.transform._string_encoders()], null)], 0));
});
malli.transform.strip_extra_keys_transformer = (function malli$transform$strip_extra_keys_transformer(var_args){
var G__79430 = arguments.length;
switch (G__79430) {
case 0:
return malli.transform.strip_extra_keys_transformer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.transform.strip_extra_keys_transformer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.transform.strip_extra_keys_transformer.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.transform.strip_extra_keys_transformer.cljs$core$IFn$_invoke$arity$1(null);
}));

(malli.transform.strip_extra_keys_transformer.cljs$core$IFn$_invoke$arity$1 = (function (p__79431){
var map__79432 = p__79431;
var map__79432__$1 = cljs.core.__destructure_map(map__79432);
var accept = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__79432__$1,new cljs.core.Keyword(null,"accept","accept",1874130431),malli.core._comp.cljs$core$IFn$_invoke$arity$3((function (p1__79428_SHARP_){
return (((p1__79428_SHARP_ == null)) || (p1__79428_SHARP_ === true));
}),new cljs.core.Keyword(null,"closed","closed",-919675359),malli.core.properties));
var strip_map = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),(function (schema,_){
var default_schema = malli.core.default_schema.cljs$core$IFn$_invoke$arity$1(schema);
var ks = (function (){var G__79433 = schema;
var G__79433__$1 = (((G__79433 == null))?null:malli.core.explicit_keys.cljs$core$IFn$_invoke$arity$1(G__79433));
if((G__79433__$1 == null)){
return null;
} else {
return cljs.core.set(G__79433__$1);
}
})();
var G__79434 = null;
if(cljs.core.truth_((accept.cljs$core$IFn$_invoke$arity$1 ? accept.cljs$core$IFn$_invoke$arity$1(schema) : accept.call(null,schema)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79434,new cljs.core.Keyword(null,"enter","enter",1792452624),(function (x){
if(((cljs.core.map_QMARK_(x)) && (cljs.core.not(default_schema)))){
return cljs.core.reduce_kv((function (acc,k,___$1){
if(cljs.core.not((ks.cljs$core$IFn$_invoke$arity$1 ? ks.cljs$core$IFn$_invoke$arity$1(k) : ks.call(null,k)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
}),x,x);
} else {
return x;
}
}));
} else {
return G__79434;
}
})], null);
var strip_map_of = (function (stage){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),(function (schema,options){
var entry_schema = malli.core.into_schema.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"tuple","tuple",-472667284),null,malli.core.children.cljs$core$IFn$_invoke$arity$1(schema),options);
var valid_QMARK_ = malli.core.validator.cljs$core$IFn$_invoke$arity$2(entry_schema,options);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([stage,(function (x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,entry){
if(cljs.core.truth_((valid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? valid_QMARK_.cljs$core$IFn$_invoke$arity$1(entry) : valid_QMARK_.call(null,entry)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,acc,entry);
} else {
return acc;
}
}),cljs.core.empty(x),x);
})]);
})], null);
});
return malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"decoders","decoders",1132818244),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"map","map",1371690461),strip_map,new cljs.core.Keyword(null,"map-of","map-of",1189682355),strip_map_of(new cljs.core.Keyword(null,"leave","leave",1022579443))], null),new cljs.core.Keyword(null,"encoders","encoders",-111722908),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"map","map",1371690461),strip_map,new cljs.core.Keyword(null,"map-of","map-of",1189682355),strip_map_of(new cljs.core.Keyword(null,"enter","enter",1792452624))], null)], null)], 0));
}));

(malli.transform.strip_extra_keys_transformer.cljs$lang$maxFixedArity = 1);

malli.transform.key_transformer = (function malli$transform$key_transformer(p__79435){
var map__79436 = p__79435;
var map__79436__$1 = cljs.core.__destructure_map(map__79436);
var decode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79436__$1,new cljs.core.Keyword(null,"decode","decode",-1306165281));
var encode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79436__$1,new cljs.core.Keyword(null,"encode","encode",-1753429702));
var types = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__79436__$1,new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),null], null), null));
var transform = (function (f,stage){
if(cljs.core.truth_(f)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([stage,malli.transform._transform_map_keys.cljs$core$IFn$_invoke$arity$1(f)]);
} else {
return null;
}
});
return malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.set_QMARK_(types))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"decoders","decoders",1132818244),cljs.core.zipmap(types,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(transform(decode,new cljs.core.Keyword(null,"enter","enter",1792452624)))),new cljs.core.Keyword(null,"encoders","encoders",-111722908),cljs.core.zipmap(types,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(transform(encode,new cljs.core.Keyword(null,"leave","leave",1022579443))))], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),types))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-decoder","default-decoder",808357161),transform(decode,new cljs.core.Keyword(null,"enter","enter",1792452624)),new cljs.core.Keyword(null,"default-encoder","default-encoder",117541207),transform(encode,new cljs.core.Keyword(null,"leave","leave",1022579443))], null):null))], 0));
});
malli.transform.default_value_transformer = (function malli$transform$default_value_transformer(var_args){
var G__79439 = arguments.length;
switch (G__79439) {
case 0:
return malli.transform.default_value_transformer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.transform.default_value_transformer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.transform.default_value_transformer.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.transform.default_value_transformer.cljs$core$IFn$_invoke$arity$1(null);
}));

(malli.transform.default_value_transformer.cljs$core$IFn$_invoke$arity$1 = (function (p__79440){
var map__79441 = p__79440;
var map__79441__$1 = cljs.core.__destructure_map(map__79441);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__79441__$1,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"default","default",-1987822328));
var default_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__79441__$1,new cljs.core.Keyword(null,"default-fn","default-fn",-473729550),(function (_,x){
return x;
}));
var defaults = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79441__$1,new cljs.core.Keyword(null,"defaults","defaults",976027214));
var add_optional_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79441__$1,new cljs.core.Keyword("malli.transform","add-optional-keys","malli.transform/add-optional-keys",964281447));
var get_default = (function (schema,more_props){
var or__5142__auto__ = (function (){var G__79442 = schema;
var G__79442__$1 = (((G__79442 == null))?null:malli.core.properties.cljs$core$IFn$_invoke$arity$1(G__79442));
var G__79442__$2 = (((G__79442__$1 == null))?null:new cljs.core.Keyword("default","fn","default/fn",503756453).cljs$core$IFn$_invoke$arity$1(G__79442__$1));
if((G__79442__$2 == null)){
return null;
} else {
return malli.core.eval.cljs$core$IFn$_invoke$arity$1(G__79442__$2);
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (function (){var G__79443 = more_props;
var G__79443__$1 = (((G__79443 == null))?null:new cljs.core.Keyword("default","fn","default/fn",503756453).cljs$core$IFn$_invoke$arity$1(G__79443));
if((G__79443__$1 == null)){
return null;
} else {
return malli.core.eval.cljs$core$IFn$_invoke$arity$1(G__79443__$1);
}
})();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var temp__5827__auto__ = (function (){var or__5142__auto____$2 = (function (){var G__79444 = schema;
var G__79444__$1 = (((G__79444 == null))?null:malli.core.properties.cljs$core$IFn$_invoke$arity$1(G__79444));
if((G__79444__$1 == null)){
return null;
} else {
return cljs.core.find(G__79444__$1,key);
}
})();
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
var G__79445 = more_props;
if((G__79445 == null)){
return null;
} else {
return cljs.core.find(G__79445,key);
}
}
})();
if((temp__5827__auto__ == null)){
var G__79446 = schema;
var G__79446__$1 = (((G__79446 == null))?null:malli.core.type.cljs$core$IFn$_invoke$arity$1(G__79446));
var G__79446__$2 = (((G__79446__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(defaults,G__79446__$1));
if((G__79446__$2 == null)){
return null;
} else {
return (function (p1__79437_SHARP_){
return cljs.core.constantly((p1__79437_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__79437_SHARP_.cljs$core$IFn$_invoke$arity$1(schema) : p1__79437_SHARP_.call(null,schema)));
})(G__79446__$2);
}
} else {
var e = temp__5827__auto__;
return cljs.core.constantly(cljs.core.val(e));
}
}
}
});
var set_default = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),(function (schema,_){
var temp__5829__auto__ = get_default(schema,null);
if((temp__5829__auto__ == null)){
return null;
} else {
var f = temp__5829__auto__;
return (function (x){
if((x == null)){
var G__79447 = schema;
var G__79448 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
return (default_fn.cljs$core$IFn$_invoke$arity$2 ? default_fn.cljs$core$IFn$_invoke$arity$2(G__79447,G__79448) : default_fn.call(null,G__79447,G__79448));
} else {
return x;
}
});
}
})], null);
var add_defaults = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),(function (schema,_){
var defaults__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p__79449){
var vec__79450 = p__79449;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79450,(0),null);
var map__79453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79450,(1),null);
var map__79453__$1 = cljs.core.__destructure_map(map__79453);
var p = map__79453__$1;
var optional = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79453__$1,new cljs.core.Keyword(null,"optional","optional",2053951509));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79450,(2),null);
if(cljs.core.truth_((function (){var or__5142__auto__ = cljs.core.not(optional);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return add_optional_keys;
}
})())){
var temp__5829__auto__ = (function (){var or__5142__auto__ = get_default(v,p);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(malli.core._ref_schema_QMARK_(v)){
return get_default(malli.core._deref(v),p);
} else {
return null;
}
}
})();
if((temp__5829__auto__ == null)){
return null;
} else {
var f = temp__5829__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){
var G__79454 = schema;
var G__79455 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
return (default_fn.cljs$core$IFn$_invoke$arity$2 ? default_fn.cljs$core$IFn$_invoke$arity$2(G__79454,G__79455) : default_fn.call(null,G__79454,G__79455));
})], null);
}
} else {
return null;
}
})),malli.core.children.cljs$core$IFn$_invoke$arity$1(schema));
if(cljs.core.seq(defaults__$1)){
return (function (x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv((function (acc,k,f){
if((!(cljs.core.contains_QMARK_(x,k)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
} else {
return acc;
}
}),x,defaults__$1);
} else {
return x;
}
});
} else {
return null;
}
})], null);
return malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-decoder","default-decoder",808357161),set_default,new cljs.core.Keyword(null,"default-encoder","default-encoder",117541207),set_default], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"decoders","decoders",1132818244),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),add_defaults], null),new cljs.core.Keyword(null,"encoders","encoders",-111722908),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),add_defaults], null)], null)], 0));
}));

(malli.transform.default_value_transformer.cljs$lang$maxFixedArity = 1);

malli.transform.collection_transformer = (function malli$transform$collection_transformer(){
var coders = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vector","vector",1902966158),malli.transform._sequential_or_set__GT_vector,new cljs.core.Keyword(null,"sequential","sequential",-1082983960),malli.transform._sequential_or_set__GT_seq,new cljs.core.Keyword(null,"set","set",304602554),malli.transform._sequential__GT_set,new cljs.core.Keyword(null,"tuple","tuple",-472667284),malli.transform._sequential__GT_vector], null);
return malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"decoders","decoders",1132818244),coders,new cljs.core.Keyword(null,"encoders","encoders",-111722908),coders], null)], 0));
});

//# sourceMappingURL=malli.transform.js.map
