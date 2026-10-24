goog.provide('cljs_time.local');
/**
 * Map of local formatters for parsing and printing.
 */
cljs_time.local._STAR_local_formatters_STAR_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56024){
var vec__56025 = p__56024;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56025,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56025,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f)),new cljs.core.Keyword("fmt","formatter","fmt/formatter",-483947944)))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser","parser",-1543495310)], null),(function (p1__56023_SHARP_){
return cljs_time.core.to_default_time_zone(p1__56023_SHARP_);
})):f)], null);
}),cljs_time.format.formatters));
/**
 * Returns a DateTime for the current instant in the default time zone.
 */
cljs_time.local.local_now = (function cljs_time$local$local_now(){
return cljs_time.core.time_now();
});

/**
 * @interface
 */
cljs_time.local.ILocalCoerce = function(){};

var cljs_time$local$ILocalCoerce$to_local_date_time$dyn_56055 = (function (obj){
var x__5498__auto__ = (((obj == null))?null:obj);
var m__5499__auto__ = (cljs_time.local.to_local_date_time[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__5499__auto__.call(null,obj));
} else {
var m__5497__auto__ = (cljs_time.local.to_local_date_time["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__5497__auto__.call(null,obj));
} else {
throw cljs.core.missing_protocol("ILocalCoerce.to-local-date-time",obj);
}
}
});
/**
 * convert `obj` to a local goog.date
 *                           DateTime instance retaining time fields.
 */
cljs_time.local.to_local_date_time = (function cljs_time$local$to_local_date_time(obj){
if((((!((obj == null)))) && ((!((obj.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1 == null)))))){
return obj.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1(obj);
} else {
return cljs_time$local$ILocalCoerce$to_local_date_time$dyn_56055(obj);
}
});

/**
 * Coerce to date-time in the default time zone retaining time fields.
 */
cljs_time.local.as_local_date_time_from_time_zone = (function cljs_time$local$as_local_date_time_from_time_zone(obj){
return cljs_time.coerce.to_local_date_time(cljs_time.coerce.to_date_time(obj));
});
/**
 * Coerce to date-time in the default time zone.
 */
cljs_time.local.as_local_date_time_to_time_zone = (function cljs_time$local$as_local_date_time_to_time_zone(obj){
return cljs_time.core.to_default_time_zone(cljs_time.coerce.to_date_time(obj));
});
/**
 * Return local DateTime instance from string using
 *   formatters in *local-formatters*, returning first
 *   which parses.
 */
cljs_time.local.from_local_string = (function cljs_time$local$from_local_string(s){
return cljs.core.first((function (){var iter__5628__auto__ = (function cljs_time$local$from_local_string_$_iter__56038(s__56039){
return (new cljs.core.LazySeq(null,(function (){
var s__56039__$1 = s__56039;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__56039__$1);
if(temp__5825__auto__){
var s__56039__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56039__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__56039__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__56041 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__56040 = (0);
while(true){
if((i__56040 < size__5627__auto__)){
var f = cljs.core._nth(c__5626__auto__,i__56040);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e56045){if((e56045 instanceof Error)){
var _ = e56045;
return null;
} else {
throw e56045;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__56041,d);

var G__56057 = (i__56040 + (1));
i__56040 = G__56057;
continue;
} else {
var G__56058 = (i__56040 + (1));
i__56040 = G__56058;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56041),cljs_time$local$from_local_string_$_iter__56038(cljs.core.chunk_rest(s__56039__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56041),null);
}
} else {
var f = cljs.core.first(s__56039__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e56050){if((e56050 instanceof Error)){
var _ = e56050;
return null;
} else {
throw e56050;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$local$from_local_string_$_iter__56038(cljs.core.rest(s__56039__$2)));
} else {
var G__56059 = cljs.core.rest(s__56039__$2);
s__56039__$1 = G__56059;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.vals(cljs_time.local._STAR_local_formatters_STAR_));
})());
});
(cljs_time.local.ILocalCoerce["null"] = true);

(cljs_time.local.to_local_date_time["null"] = (function (_){
return null;
}));

(Date.prototype.cljs_time$local$ILocalCoerce$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.local.as_local_date_time_from_time_zone(cljs_time.coerce.to_date_time(date__$1));
}));

(goog.date.DateTime.prototype.cljs_time$local$ILocalCoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.DateTime.prototype.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return cljs_time.local.as_local_date_time_from_time_zone(date_time__$1);
}));

(cljs_time.local.ILocalCoerce["number"] = true);

(cljs_time.local.to_local_date_time["number"] = (function (long$){
return cljs_time.local.as_local_date_time_from_time_zone(long$);
}));

(cljs_time.local.ILocalCoerce["string"] = true);

(cljs_time.local.to_local_date_time["string"] = (function (string){
return cljs_time.local.from_local_string(string);
}));
/**
 * Format obj as local time using the local formatter corresponding
 *   to format-key.
 */
cljs_time.local.format_local_time = (function cljs_time$local$format_local_time(obj,format_key){
var temp__5825__auto__ = cljs_time.local.to_local_date_time(obj);
if(cljs.core.truth_(temp__5825__auto__)){
var dt = temp__5825__auto__;
var temp__5825__auto____$1 = (format_key.cljs$core$IFn$_invoke$arity$1 ? format_key.cljs$core$IFn$_invoke$arity$1(cljs_time.local._STAR_local_formatters_STAR_) : format_key.call(null,cljs_time.local._STAR_local_formatters_STAR_));
if(cljs.core.truth_(temp__5825__auto____$1)){
var fmt = temp__5825__auto____$1;
return cljs_time.format.unparse(fmt,dt);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=cljs_time.local.js.map
