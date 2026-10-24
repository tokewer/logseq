goog.provide('no.en.core');
no.en.core.port_number = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"amqp","amqp",-994422895),(5672),new cljs.core.Keyword(null,"http","http",382524695),(80),new cljs.core.Keyword(null,"https","https",-1983909665),(443),new cljs.core.Keyword(null,"mysql","mysql",-1431590210),(3306),new cljs.core.Keyword(null,"postgresql","postgresql",-1568339962),(5432),new cljs.core.Keyword(null,"rabbitmq","rabbitmq",1046897371),(5672),new cljs.core.Keyword(null,"zookeeper","zookeeper",17281735),(2181)], null);
no.en.core.url_regex = /([^:]+):\/\/(([^:]+):([^@\/]+)@)?(([^:\/]+)(:([0-9]+))?((\/[^?#]*)(\?([^#]*))?)?)(\#(.*))?/;
/**
 * Split the string `s` by the regex `pattern`.
 */
no.en.core.split_by_regex = (function no$en$core$split_by_regex(s,pattern){
if(cljs.core.sequential_QMARK_(s)){
return s;
} else {
if((!(clojure.string.blank_QMARK_(s)))){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,pattern);
} else {
return null;
}
}
});
/**
 * Split the string `s` by comma.
 */
no.en.core.split_by_comma = (function no$en$core$split_by_comma(s){
return no.en.core.split_by_regex(s,/\s*,\s*/);
});
/**
 * Returns `bytes` as an UTF-8 encoded string.
 */
no.en.core.utf8_string = (function no$en$core$utf8_string(bytes){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("utf8-string not implemented yet",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bytes","bytes",1175866680),bytes], null));
});
/**
 * Returns `s` as a Base64 encoded string.
 */
no.en.core.base64_encode = (function no$en$core$base64_encode(bytes){
if(cljs.core.truth_(bytes)){
return goog.crypt.base64.encodeString(bytes,false);
} else {
return null;
}
});
/**
 * Returns `s` as a Base64 decoded string.
 */
no.en.core.base64_decode = (function no$en$core$base64_decode(s){
if(cljs.core.truth_(s)){
return goog.crypt.base64.decodeString(s,false);
} else {
return null;
}
});
/**
 * Removes all map entries where the value of the entry is empty.
 */
no.en.core.compact_map = (function no$en$core$compact_map(m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,k){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);
if((((v == null)) || (((((cljs.core.map_QMARK_(v)) || (cljs.core.sequential_QMARK_(v)))) && (cljs.core.empty_QMARK_(v)))))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),m,cljs.core.keys(m));
});
/**
 * Returns `s` as an URL encoded string.
 */
no.en.core.url_encode = (function no$en$core$url_encode(var_args){
var args__5882__auto__ = [];
var len__5876__auto___56497 = arguments.length;
var i__5877__auto___56498 = (0);
while(true){
if((i__5877__auto___56498 < len__5876__auto___56497)){
args__5882__auto__.push((arguments[i__5877__auto___56498]));

var G__56499 = (i__5877__auto___56498 + (1));
i__5877__auto___56498 = G__56499;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return no.en.core.url_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(no.en.core.url_encode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__56333){
var vec__56334 = p__56333;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56334,(0),null);
if(cljs.core.truth_(s)){
return clojure.string.replace(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s))),"*","%2A");
} else {
return null;
}
}));

(no.en.core.url_encode.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(no.en.core.url_encode.cljs$lang$applyTo = (function (seq56327){
var G__56328 = cljs.core.first(seq56327);
var seq56327__$1 = cljs.core.next(seq56327);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56328,seq56327__$1);
}));

/**
 * Returns `s` as an URL decoded string.
 */
no.en.core.url_decode = (function no$en$core$url_decode(var_args){
var args__5882__auto__ = [];
var len__5876__auto___56500 = arguments.length;
var i__5877__auto___56502 = (0);
while(true){
if((i__5877__auto___56502 < len__5876__auto___56500)){
args__5882__auto__.push((arguments[i__5877__auto___56502]));

var G__56503 = (i__5877__auto___56502 + (1));
i__5877__auto___56502 = G__56503;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return no.en.core.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(no.en.core.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__56341){
var vec__56342 = p__56341;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56342,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
}));

(no.en.core.url_decode.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(no.en.core.url_decode.cljs$lang$applyTo = (function (seq56338){
var G__56339 = cljs.core.first(seq56338);
var seq56338__$1 = cljs.core.next(seq56338);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56339,seq56338__$1);
}));

/**
 * Try to URL decode the string `s`.
 */
no.en.core.try_url_decode = (function no$en$core$try_url_decode(var_args){
var args__5882__auto__ = [];
var len__5876__auto___56509 = arguments.length;
var i__5877__auto___56510 = (0);
while(true){
if((i__5877__auto___56510 < len__5876__auto___56509)){
args__5882__auto__.push((arguments[i__5877__auto___56510]));

var G__56511 = (i__5877__auto___56510 + (1));
i__5877__auto___56510 = G__56511;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return no.en.core.try_url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(no.en.core.try_url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__56354){
var vec__56355 = p__56354;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56355,(0),null);
try{return no.en.core.url_decode.cljs$core$IFn$_invoke$arity$variadic(s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([encoding], 0));
}catch (e56358){if((e56358 instanceof Error)){
var _ = e56358;
return s;
} else {
throw e56358;

}
}}));

(no.en.core.try_url_decode.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(no.en.core.try_url_decode.cljs$lang$applyTo = (function (seq56350){
var G__56351 = cljs.core.first(seq56350);
var seq56350__$1 = cljs.core.next(seq56350);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56351,seq56350__$1);
}));

no.en.core.pow = (function no$en$core$pow(n,x){
return Math.pow(n,x);
});
no.en.core.byte_scale = cljs.core.PersistentHashMap.fromArrays(["T","K","G","M","Y","Z","E","B","P"],[no.en.core.pow((1024),(4)),no.en.core.pow((1024),(1)),no.en.core.pow((1024),(3)),no.en.core.pow((1024),(2)),no.en.core.pow((1024),(8)),no.en.core.pow((1024),(7)),no.en.core.pow((1024),(6)),no.en.core.pow((1024),(0)),no.en.core.pow((1024),(5))]);
no.en.core.apply_unit = (function no$en$core$apply_unit(number,unit){
if(typeof unit === 'string'){
var G__56370 = clojure.string.upper_case(unit);
switch (G__56370) {
case "M":
return (number * (1000000));

break;
case "B":
return (number * (1000000000));

break;
default:
return number;

}
} else {
return number;
}
});
no.en.core.parse_number = (function no$en$core$parse_number(s,parse_fn){
var temp__5823__auto__ = cljs.core.re_matches(/\s*([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)(M|B)?.*/,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
if(cljs.core.truth_(temp__5823__auto__)){
var matches = temp__5823__auto__;
var number = (function (){var G__56385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(1));
return (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(G__56385) : parse_fn.call(null,G__56385));
})();
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(3));
if(cljs.core.not(isNaN(number))){
return no.en.core.apply_unit(number,unit);
} else {
return null;
}
} else {
return null;
}
});
no.en.core.parse_bytes = (function no$en$core$parse_bytes(s){
var temp__5823__auto__ = cljs.core.re_matches(/\s*([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)(B|K|M|G|T|P|E|Z|Y)?.*/,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
if(cljs.core.truth_(temp__5823__auto__)){
var matches = temp__5823__auto__;
var number = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(1)));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(3));
return cljs.core.long$((cljs.core.long$(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(1)))))) * cljs.core.get.cljs$core$IFn$_invoke$arity$3(no.en.core.byte_scale,clojure.string.upper_case((function (){var or__5142__auto__ = unit;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})()),(1))));
} else {
return null;
}
});
/**
 * Parse `s` as a integer number.
 */
no.en.core.parse_integer = (function no$en$core$parse_integer(s){
return no.en.core.parse_number(s,(function (p1__56389_SHARP_){
return parseInt(p1__56389_SHARP_);
}));
});
/**
 * Parse `s` as a long number.
 */
no.en.core.parse_long = (function no$en$core$parse_long(s){
return no.en.core.parse_number(s,(function (p1__56392_SHARP_){
return parseInt(p1__56392_SHARP_);
}));
});
/**
 * Parse `s` as a double number.
 */
no.en.core.parse_double = (function no$en$core$parse_double(s){
return no.en.core.parse_number(s,(function (p1__56393_SHARP_){
return parseFloat(p1__56393_SHARP_);
}));
});
/**
 * Parse `s` as a float number.
 */
no.en.core.parse_float = (function no$en$core$parse_float(s){
return no.en.core.parse_number(s,(function (p1__56394_SHARP_){
return parseFloat(p1__56394_SHARP_);
}));
});
/**
 * Format the map `m` into a query parameter string.
 */
no.en.core.format_query_params = (function no$en$core$format_query_params(m){
var params = clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56398_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("=",p1__56398_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56397_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[no.en.core.url_encode(cljs.core.name(cljs.core.first(p1__56397_SHARP_))),no.en.core.url_encode(cljs.core.second(p1__56397_SHARP_))],null));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56396_SHARP_){
return clojure.string.blank_QMARK_((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__56396_SHARP_))));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.seq(m))))));
if((!(clojure.string.blank_QMARK_(params)))){
return params;
} else {
return null;
}
});
/**
 * Format the Ring map as an url.
 */
no.en.core.format_url = (function no$en$core$format_url(m){
if((!(cljs.core.empty_QMARK_(m)))){
var query_params = new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(m);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(m))?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(m)))+"://"):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var map__56410 = m;
var map__56410__$1 = cljs.core.__destructure_map(map__56410);
var username = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56410__$1,new cljs.core.Keyword(null,"username","username",1605666410));
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56410__$1,new cljs.core.Keyword(null,"password","password",417022471));
if(cljs.core.truth_(username)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(username)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(password)?(""+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(password)):null))+"@");
} else {
return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"server-name","server-name",-1012104295).cljs$core$IFn$_invoke$arity$1(m))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"server-port","server-port",663745648).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var port = temp__5823__auto__;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(port,(function (){var G__56416 = new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(m);
return (no.en.core.port_number.cljs$core$IFn$_invoke$arity$1 ? no.en.core.port_number.cljs$core$IFn$_invoke$arity$1(G__56416) : no.en.core.port_number.call(null,G__56416));
})())))){
return (""+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(port));
} else {
return null;
}
} else {
return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(m) == null)) && ((!(cljs.core.empty_QMARK_(query_params))))))?"/":new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(m)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(query_params))))?(""+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.format_query_params(query_params))):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(clojure.string.blank_QMARK_(new cljs.core.Keyword(null,"fragment","fragment",826775688).cljs$core$IFn$_invoke$arity$1(m)))))?(""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fragment","fragment",826775688).cljs$core$IFn$_invoke$arity$1(m))):null)));
} else {
return null;
}
});
/**
 * Return the formatted `url` without password as a string.
 */
no.en.core.public_url = (function no$en$core$public_url(url){
return no.en.core.format_url(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(url,new cljs.core.Keyword(null,"password","password",417022471)));
});
/**
 * Parse `s` as a percentage.
 */
no.en.core.parse_percent = (function no$en$core$parse_percent(s){
return no.en.core.parse_double(clojure.string.replace(s,"%",""));
});
/**
 * Quote the special characters in `s` that are used in regular expressions.
 */
no.en.core.pattern_quote = (function no$en$core$pattern_quote(s){
return clojure.string.replace(cljs.core.name(s),/([\[\]\^\$\|\(\)\\\+\*\?\{\}\=\!.])/,"\\\\$1");
});
/**
 * Returns the first string that separates the components in `s`.
 */
no.en.core.separator = (function no$en$core$separator(s){
var temp__5823__auto__ = cljs.core.re_matches(/([a-z0-9_-]+)([^a-z0-9_-]+).*/i,s);
if(cljs.core.truth_(temp__5823__auto__)){
var matches = temp__5823__auto__;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(2));
} else {
return null;
}
});
/**
 * Parse the query parameter string `s` and return a map.
 */
no.en.core.parse_query_params = (function no$en$core$parse_query_params(s){
if(cljs.core.truth_(s)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__56430_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__56430_SHARP_)),cljs.core.second(p1__56430_SHARP_)],null));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56429_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(p1__56429_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56428_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__56428_SHARP_,/=/);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.try_url_decode(s))),/&/)))], 0)));
} else {
return null;
}
});
/**
 * Parse the url `s` and return a Ring compatible map.
 */
no.en.core.parse_url = (function no$en$core$parse_url(s){
var temp__5823__auto__ = cljs.core.re_matches(no.en.core.url_regex,no.en.core.try_url_decode((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s))));
if(cljs.core.truth_(temp__5823__auto__)){
var matches = temp__5823__auto__;
var scheme = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(1)));
return no.en.core.compact_map(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"fragment","fragment",826775688),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"server-port","server-port",663745648),new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),new cljs.core.Keyword(null,"scheme","scheme",90199613)],[cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(14)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(3)),(function (){var or__5142__auto__ = no.en.core.parse_integer(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(8)));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (no.en.core.port_number.cljs$core$IFn$_invoke$arity$1 ? no.en.core.port_number.cljs$core$IFn$_invoke$arity$1(scheme) : no.en.core.port_number.call(null,scheme));
}
})(),no.en.core.parse_query_params(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(12))),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(12)),scheme]));
} else {
return null;
}
});
/**
 * Executes thunk. If an exception is thrown, will retry. At most n retries
 *   are done. If still some exception is thrown it is bubbled upwards in
 *   the call chain.
 */
no.en.core.with_retries_STAR_ = (function no$en$core$with_retries_STAR_(n,thunk){
var n__$1 = n;
while(true){
var temp__5823__auto__ = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null))], null);
}catch (e56453){if((e56453 instanceof Error)){
var e = e56453;
if((n__$1 === (0))){
throw e;
} else {
return null;
}
} else {
throw e56453;

}
}})();
if(cljs.core.truth_(temp__5823__auto__)){
var result = temp__5823__auto__;
return (result.cljs$core$IFn$_invoke$arity$1 ? result.cljs$core$IFn$_invoke$arity$1((0)) : result.call(null,(0)));
} else {
var G__56534 = (n__$1 - (1));
n__$1 = G__56534;
continue;
}
break;
}
});
no.en.core.editable_QMARK_ = (function no$en$core$editable_QMARK_(coll){
if((!((coll == null)))){
if((((coll.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === coll.cljs$core$IEditableCollection$)))){
return true;
} else {
if((!coll.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,coll);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,coll);
}
});
no.en.core.reduce_map = (function no$en$core$reduce_map(f,coll){
if(no.en.core.editable_QMARK_(coll)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc_BANG_) : f.call(null,cljs.core.assoc_BANG_)),cljs.core.transient$(cljs.core.empty(coll)),coll));
} else {
return cljs.core.reduce_kv((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc) : f.call(null,cljs.core.assoc)),cljs.core.empty(coll),coll);
}
});
/**
 * Maps a function over the keys of an associative collection.
 */
no.en.core.map_keys = (function no$en$core$map_keys(f,coll){
return no.en.core.reduce_map((function (xf){
return (function (m,k,v){
var G__56467 = m;
var G__56468 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k));
var G__56469 = v;
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(G__56467,G__56468,G__56469) : xf.call(null,G__56467,G__56468,G__56469));
});
}),coll);
});
/**
 * Maps a function over the values of an associative collection.
 */
no.en.core.map_vals = (function no$en$core$map_vals(f,coll){
return no.en.core.reduce_map((function (xf){
return (function (m,k,v){
var G__56473 = m;
var G__56474 = k;
var G__56475 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(G__56473,G__56474,G__56475) : xf.call(null,G__56473,G__56474,G__56475));
});
}),coll);
});
/**
 * Like merge, but merges maps recursively.
 */
no.en.core.deep_merge = (function no$en$core$deep_merge(var_args){
var args__5882__auto__ = [];
var len__5876__auto___56535 = arguments.length;
var i__5877__auto___56536 = (0);
while(true){
if((i__5877__auto___56536 < len__5876__auto___56535)){
args__5882__auto__.push((arguments[i__5877__auto___56536]));

var G__56537 = (i__5877__auto___56536 + (1));
i__5877__auto___56536 = G__56537;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return no.en.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(no.en.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,maps)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,no.en.core.deep_merge,maps);
} else {
return cljs.core.last(maps);
}
}));

(no.en.core.deep_merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(no.en.core.deep_merge.cljs$lang$applyTo = (function (seq56480){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56480));
}));

/**
 * Like merge-with, but merges maps recursively, applying the given fn
 *   only when there's a non-map at a particular level.
 */
no.en.core.deep_merge_with = (function no$en$core$deep_merge_with(var_args){
var args__5882__auto__ = [];
var len__5876__auto___56538 = arguments.length;
var i__5877__auto___56539 = (0);
while(true){
if((i__5877__auto___56539 < len__5876__auto___56538)){
args__5882__auto__.push((arguments[i__5877__auto___56539]));

var G__56540 = (i__5877__auto___56539 + (1));
i__5877__auto___56539 = G__56540;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return no.en.core.deep_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(no.en.core.deep_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function() { 
var no$en$core$m__delegate = function (maps__$1){
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,maps__$1)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,no$en$core$m,maps__$1);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,maps__$1);
}
};
var no$en$core$m = function (var_args){
var maps__$1 = null;
if (arguments.length > 0) {
var G__56541__i = 0, G__56541__a = new Array(arguments.length -  0);
while (G__56541__i < G__56541__a.length) {G__56541__a[G__56541__i] = arguments[G__56541__i + 0]; ++G__56541__i;}
  maps__$1 = new cljs.core.IndexedSeq(G__56541__a,0,null);
} 
return no$en$core$m__delegate.call(this,maps__$1);};
no$en$core$m.cljs$lang$maxFixedArity = 0;
no$en$core$m.cljs$lang$applyTo = (function (arglist__56542){
var maps__$1 = cljs.core.seq(arglist__56542);
return no$en$core$m__delegate(maps__$1);
});
no$en$core$m.cljs$core$IFn$_invoke$arity$variadic = no$en$core$m__delegate;
return no$en$core$m;
})()
,maps);
}));

(no.en.core.deep_merge_with.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(no.en.core.deep_merge_with.cljs$lang$applyTo = (function (seq56485){
var G__56486 = cljs.core.first(seq56485);
var seq56485__$1 = cljs.core.next(seq56485);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56486,seq56485__$1);
}));


//# sourceMappingURL=no.en.core.js.map
