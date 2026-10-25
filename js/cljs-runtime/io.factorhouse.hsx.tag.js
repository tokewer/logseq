goog.provide('io.factorhouse.hsx.tag');
goog.scope(function(){
  io.factorhouse.hsx.tag.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Regular expression that parses a CSS-style id and class
 *           from a tag name.
 */
io.factorhouse.hsx.tag.re_tag = /([^\s\.#]+)((?:[#\.][^\s\.#]+)*)/;
/**
 * Regular expression that parses each id or class segment from a tag name suffix.
 */
io.factorhouse.hsx.tag.re_tag_segment = /([#\.])([^\s\.#]+)/;
if((typeof io !== 'undefined') && (typeof io.factorhouse !== 'undefined') && (typeof io.factorhouse.hsx !== 'undefined') && (typeof io.factorhouse.hsx.tag !== 'undefined') && (typeof io.factorhouse.hsx.tag.tag_name_cache !== 'undefined')){
} else {
io.factorhouse.hsx.tag.tag_name_cache = ({});
}
io.factorhouse.hsx.tag.cache_get = (function io$factorhouse$hsx$tag$cache_get(o,k){
var v = io.factorhouse.hsx.tag.goog$module$goog$object.get(o,k);
if((void 0 === v)){
return null;
} else {
return v;
}
});
io.factorhouse.hsx.tag.parse_tag = (function io$factorhouse$hsx$tag$parse_tag(hiccup_tag){
var tag_name = clojure.string.replace(cljs.core.name(hiccup_tag),".#","#");
var tag_name__$1 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["#",null,".",null], null), null),cljs.core.first(tag_name)))?(""+"div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_name)):tag_name);
var vec__47206 = cljs.core.next(cljs.core.re_matches(io.factorhouse.hsx.tag.re_tag,tag_name__$1));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47206,(0),null);
var suffix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47206,(1),null);
var segments = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,cljs.core.re_seq(io.factorhouse.hsx.tag.re_tag_segment,(function (){var or__5142__auto__ = suffix;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})()));
var id = cljs.core.some((function (p__47209){
var vec__47210 = p__47209;
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47210,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47210,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,"#")){
return value;
} else {
return null;
}
}),segments);
var className = cljs.core.not_empty(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__47213){
var vec__47214 = p__47213;
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47214,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47214,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,".")){
return value;
} else {
return null;
}
}),segments)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"className","className",-1983287057),className], null);
});
io.factorhouse.hsx.tag.cached_parse = (function io$factorhouse$hsx$tag$cached_parse(hiccup_tag){
var temp__5827__auto__ = io.factorhouse.hsx.tag.cache_get(io.factorhouse.hsx.tag.tag_name_cache,hiccup_tag);
if((temp__5827__auto__ == null)){
var v = io.factorhouse.hsx.tag.parse_tag(hiccup_tag);
io.factorhouse.hsx.tag.goog$module$goog$object.set(io.factorhouse.hsx.tag.tag_name_cache,hiccup_tag,v);

return v;
} else {
var s = temp__5827__auto__;
return s;
}
});

//# sourceMappingURL=io.factorhouse.hsx.tag.js.map
