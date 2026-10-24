goog.provide('logseq.common.path');
logseq.common.path.safe_decode_uri_component = (function logseq$common$path$safe_decode_uri_component(uri){
try{return decodeURIComponent(uri).normalize("NFC");
}catch (e51022){var _ = e51022;
console.error("decode-uri-component-failed",uri);

return uri;
}});
logseq.common.path.is_file_url_QMARK_ = (function logseq$common$path$is_file_url_QMARK_(s){
return ((typeof s === 'string') && (((clojure.string.starts_with_QMARK_(s,"memory://")) || (((clojure.string.starts_with_QMARK_(s,"assets://")) || (clojure.string.starts_with_QMARK_(s,"file://")))))));
});
/**
 * File name of a path or URL.
 * Returns nil when it's a directory that ends with '/'.
 */
logseq.common.path.filename = (function logseq$common$path$filename(path){
var fname = ((clojure.string.ends_with_QMARK_(path,"/"))?null:cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//)));
if(((cljs.core.seq(fname)) && (logseq.common.path.is_file_url_QMARK_(path)))){
return logseq.common.path.safe_decode_uri_component(fname);
} else {
return fname;
}
});
/**
 * Split file name into stem and extension, for both path and URL
 */
logseq.common.path.split_ext = (function logseq$common$path$split_ext(path){
var fname = logseq.common.path.filename(path);
var pos = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(fname,".");
if((!((((pos == null)) || ((pos === (0))))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fname,(0),pos),clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fname,(pos + (1))))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fname,""], null);
}
});
/**
 * File name without extension
 */
logseq.common.path.file_stem = (function logseq$common$path$file_stem(path){
return cljs.core.first(logseq.common.path.split_ext(path));
});
/**
 * File extension, lowercased
 */
logseq.common.path.file_ext = (function logseq$common$path$file_ext(path){
return cljs.core.second(logseq.common.path.split_ext(path));
});
/**
 * Joins the given path segments into a single path, handling relative paths,
 *   '..' and '.' normalization.
 */
logseq.common.path.path_join_internal = (function logseq$common$path$path_join_internal(var_args){
var args__5882__auto__ = [];
var len__5876__auto___51064 = arguments.length;
var i__5877__auto___51065 = (0);
while(true){
if((i__5877__auto___51065 < len__5876__auto___51064)){
args__5882__auto__.push((arguments[i__5877__auto___51065]));

var G__51066 = (i__5877__auto___51065 + (1));
i__5877__auto___51065 = G__51066;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return logseq.common.path.path_join_internal.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(logseq.common.path.path_join_internal.cljs$core$IFn$_invoke$arity$variadic = (function (segments){
var segments__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,segments);
var segments__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51024_SHARP_){
return clojure.string.replace(p1__51024_SHARP_,/[\/\\]+/,"/");
}),segments__$1);
var split_fn = (function (s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,"/")){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
} else {
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\//);
}
});
var join_fn = (function (segs){
var G__51026 = segs;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,G__51026)){
return ".";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),G__51026)){
return "/";
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",segs);

}
}
});
return join_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,segment){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",segment)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segment], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("..",segment)){
var G__51027 = cljs.core.last(acc);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("..",G__51027)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,segment);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",G__51027)){
return acc;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__51027)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".."], null);
} else {
return cljs.core.pop(acc);

}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",segment)){
return acc;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,segment);

}
}
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(split_fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,segments__$2)], 0))));
}));

(logseq.common.path.path_join_internal.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(logseq.common.path.path_join_internal.cljs$lang$applyTo = (function (seq51025){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51025));
}));

/**
 * Joins the given URI path segments into a single path, handling relative paths,
 *   '..' and '.' normalization.
 */
logseq.common.path.uri_path_join_internal = (function logseq$common$path$uri_path_join_internal(var_args){
var args__5882__auto__ = [];
var len__5876__auto___51067 = arguments.length;
var i__5877__auto___51068 = (0);
while(true){
if((i__5877__auto___51068 < len__5876__auto___51067)){
args__5882__auto__.push((arguments[i__5877__auto___51068]));

var G__51069 = (i__5877__auto___51068 + (1));
i__5877__auto___51068 = G__51069;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return logseq.common.path.uri_path_join_internal.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(logseq.common.path.uri_path_join_internal.cljs$core$IFn$_invoke$arity$variadic = (function (segments){
var segments__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,segments);
var segments__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51028_SHARP_){
return clojure.string.replace(p1__51028_SHARP_,/[\/\\]+/,"/");
}),segments__$1);
var split_fn = (function (s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,"/")){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
} else {
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\//);
}
});
var join_fn = (function (segs){
var G__51035 = segs;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,G__51035)){
return ".";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),G__51035)){
return "/";
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",segs);

}
}
});
return join_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,segment){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",segment)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segment], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("..",segment)){
var G__51037 = cljs.core.last(acc);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("..",G__51037)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,segment);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",G__51037)){
return acc;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__51037)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".."], null);
} else {
return cljs.core.pop(acc);

}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",segment)){
return acc;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,segment);

}
}
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51029_SHARP_){
return encodeURIComponent(p1__51029_SHARP_);
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(split_fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,segments__$2)], 0)))));
}));

(logseq.common.path.uri_path_join_internal.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(logseq.common.path.uri_path_join_internal.cljs$lang$applyTo = (function (seq51030){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51030));
}));

logseq.common.path.preserve_file_url_win_drive = (function logseq$common$path$preserve_file_url_win_drive(scheme,encoded_path){
var G__51041 = encoded_path;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(scheme,"file:")){
return clojure.string.replace(G__51041,/^\/([a-zA-Z])%3[Aa](?=\/|$)/,"/$1:");
} else {
return G__51041;
}
});
/**
 * Segments are not URL-encoded
 */
logseq.common.path.url_join = (function logseq$common$path$url_join(var_args){
var args__5882__auto__ = [];
var len__5876__auto___51070 = arguments.length;
var i__5877__auto___51071 = (0);
while(true){
if((i__5877__auto___51071 < len__5876__auto___51070)){
args__5882__auto__.push((arguments[i__5877__auto___51071]));

var G__51072 = (i__5877__auto___51071 + (1));
i__5877__auto___51071 = G__51072;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return logseq.common.path.url_join.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(logseq.common.path.url_join.cljs$core$IFn$_invoke$arity$variadic = (function (base_url,segments){
var custom_scheme = cljs.core.re_find(/^[a-zA-Z0-9_+\-\.]+:\/\//,base_url);
var custom_scheme_QMARK_ = (function (){var and__5140__auto__ = custom_scheme;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(custom_scheme,"file://");
} else {
return and__5140__auto__;
}
})();
var base_url__$1 = (function (){var G__51048 = base_url;
if(cljs.core.truth_(custom_scheme_QMARK_)){
return clojure.string.replace_first(G__51048,custom_scheme,"file://");
} else {
return G__51048;
}
})();
var url = (function (){try{return (new URL(logseq.common.path.safe_decode_uri_component(base_url__$1)));
}catch (e51049){var e = e51049;
console.error("Failed to construct URL in url-join:",base_url__$1,e);

return (new URL("file:///"));
}})();
var scheme = (cljs.core.truth_(custom_scheme_QMARK_)?clojure.string.replace(custom_scheme,"//",""):url.protocol);
var path = url.pathname;
var domain = (function (){var or__5142__auto__ = cljs.core.not_empty(url.host);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.truth_((function (){var or__5142__auto____$1 = custom_scheme_QMARK_;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return clojure.string.starts_with_QMARK_(path,"/");
}
})())){
return "";
} else {
return "/";
}
}
})();
var encoded_new_path = logseq.common.path.preserve_file_url_win_drive(scheme,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(logseq.common.path.uri_path_join_internal,path,segments));
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(scheme)+"//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(domain)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encoded_new_path));
}));

(logseq.common.path.url_join.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(logseq.common.path.url_join.cljs$lang$applyTo = (function (seq51044){
var G__51045 = cljs.core.first(seq51044);
var seq51044__$1 = cljs.core.next(seq51044);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51045,seq51044__$1);
}));

/**
 * Join path segments, or URL base and path segments
 */
logseq.common.path.path_join = (function logseq$common$path$path_join(var_args){
var args__5882__auto__ = [];
var len__5876__auto___51073 = arguments.length;
var i__5877__auto___51074 = (0);
while(true){
if((i__5877__auto___51074 < len__5876__auto___51073)){
args__5882__auto__.push((arguments[i__5877__auto___51074]));

var G__51075 = (i__5877__auto___51074 + (1));
i__5877__auto___51074 = G__51075;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic = (function (base,segments){
if(logseq.common.path.is_file_url_QMARK_(base)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(logseq.common.path.url_join,base,segments);
} else {
var rejoined_path = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(logseq.common.path.path_join_internal,base,segments);
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not_empty(base);
if(cljs.core.truth_(and__5140__auto__)){
return clojure.string.starts_with_QMARK_(base,"//");
} else {
return and__5140__auto__;
}
})())){
return (""+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rejoined_path));
} else {
return rejoined_path;
}
}
}));

(logseq.common.path.path_join.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(logseq.common.path.path_join.cljs$lang$applyTo = (function (seq51050){
var G__51051 = cljs.core.first(seq51050);
var seq51050__$1 = cljs.core.next(seq51050);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51051,seq51050__$1);
}));

/**
 * Prepend protocol to path. Handle UNC path. aka. path-to-url
 * 
 * protocol is one of file: http: https: assets:
 */
logseq.common.path.prepend_protocol = (function logseq$common$path$prepend_protocol(protocol,path){
if(clojure.string.starts_with_QMARK_(path,protocol)){
console.error("BUG: should not prepend protocol to path with protocol",protocol,path);

return path;
} else {
if(clojure.string.starts_with_QMARK_(path,"//")){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path));
} else {
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol)+"//"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));

}
}
});
/**
 * Normalize path using path-join, break into segment and re-join
 */
logseq.common.path.path_normalize_internal = (function logseq$common$path$path_normalize_internal(path){
return logseq.common.path.path_join(path);
});
logseq.common.path.url_normalize = (function logseq$common$path$url_normalize(origin_url){
var url = (function (){try{return (new URL(logseq.common.path.safe_decode_uri_component(origin_url)));
}catch (e51057){var e = e51057;
console.error("Failed to construct URL in url-normalize:",origin_url,e);

return null;
}})();
var scheme = (cljs.core.truth_(url)?url.protocol:null);
var domain = (cljs.core.truth_(url)?(function (){var or__5142__auto__ = cljs.core.not_empty(url.host);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "/";
}
})():null);
var path = (cljs.core.truth_(url)?url.pathname:null);
var encoded_new_path = (cljs.core.truth_(url)?logseq.common.path.preserve_file_url_win_drive(scheme,logseq.common.path.uri_path_join_internal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0))):null);
if(cljs.core.truth_(url)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(scheme)+"//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(domain)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encoded_new_path));
} else {
return origin_url;
}
});
/**
 * Normalize path or URL
 */
logseq.common.path.path_normalize = (function logseq$common$path$path_normalize(path){
return ((logseq.common.path.is_file_url_QMARK_(path))?logseq.common.path.url_normalize(path):logseq.common.path.path_normalize_internal(path)).normalize("NFC");
});
/**
 * Extract path part of a URL, decoded.
 * 
 * The reverse operation is (path-join protocol:// path)
 */
logseq.common.path.url_to_path = (function logseq$common$path$url_to_path(original_url){
if(logseq.common.path.is_file_url_QMARK_(original_url)){
var temp__5823__auto__ = (function (){try{return (new URL(clojure.string.replace(logseq.common.path.safe_decode_uri_component(original_url),"assets://","file://")));
}catch (e51058){var e = e51058;
console.error("Failed to construct URL in url-to-path:",original_url,e);

return null;
}})();
if(cljs.core.truth_(temp__5823__auto__)){
var url = temp__5823__auto__;
var path = url.pathname;
var host = url.host;
var path__$1 = ((clojure.string.starts_with_QMARK_(path,"///"))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path,(2)):path);
var path__$2 = clojure.string.replace(path__$1,"/logseq__colon/",":/");
var path__$3 = (cljs.core.truth_(cljs.core.re_find(/^\/[a-zA-Z]:/i,path__$2))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path__$2,(1)):path__$2);
if(clojure.string.blank_QMARK_(host)){
return path__$3;
} else {
return (""+"//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(host)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$3));
}
} else {
return original_url;
}
} else {
return original_url;
}
});
/**
 * Converts a file URL to a local filesystem path.
 */
logseq.common.path.file_url_or_path__GT_path = (function logseq$common$path$file_url_or_path__GT_path(s){
if(logseq.common.path.is_file_url_QMARK_(s)){
return logseq.common.path.url_to_path(s);
} else {
return s;
}
});
/**
 * Trim dir prefix from path
 */
logseq.common.path.trim_dir_prefix = (function logseq$common$path$trim_dir_prefix(base_path,sub_path){
var base_path__$1 = logseq.common.path.path_normalize(base_path);
var sub_path__$1 = logseq.common.path.path_normalize(sub_path);
var is_url_QMARK_ = logseq.common.path.is_file_url_QMARK_(base_path__$1);
if(clojure.string.starts_with_QMARK_(sub_path__$1,base_path__$1)){
if(is_url_QMARK_){
return logseq.common.path.safe_decode_uri_component(clojure.string.replace(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(sub_path__$1,cljs.core.count(base_path__$1)),/^\/+/,""));
} else {
return clojure.string.replace(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(sub_path__$1,cljs.core.count(base_path__$1)),/^\/+/,"");
}
} else {
console.error("unhandled trim-base",base_path__$1,sub_path__$1);

return null;
}
});
/**
 * Parent, containing directory
 */
logseq.common.path.parent = (function logseq$common$path$parent(path){
if(clojure.string.includes_QMARK_(path,"/")){
return logseq.common.path.path_normalize((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/.."));
} else {
return null;
}
});
logseq.common.path.basename = (function logseq$common$path$basename(path){
var path__$1 = clojure.string.replace(path,/\/+$/,"");
return logseq.common.path.filename(path__$1);
});
/**
 * Whether path `p` is absolute.
 */
logseq.common.path.absolute_QMARK_ = (function logseq$common$path$absolute_QMARK_(p){
var p__$1 = logseq.common.path.path_normalize(p);
return cljs.core.boolean$((function (){var or__5142__auto__ = logseq.common.path.is_file_url_QMARK_(p__$1);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = clojure.string.starts_with_QMARK_(p__$1,"/");
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
return cljs.core.re_find(/^[a-zA-Z]:[\/\\]/,p__$1);
}
}
})());
});
/**
 * Whether path `p` is a protocol URL.
 * 
 * This is a loose check, it only checks if there is a valid protocol prefix.
 */
logseq.common.path.protocol_url_QMARK_ = (function logseq$common$path$protocol_url_QMARK_(p){
return cljs.core.boolean$((function (){var and__5140__auto__ = cljs.core.re_find(/^[a-zA-Z0-9_+\-\.]{2,}:/,p);
if(cljs.core.truth_(and__5140__auto__)){
return (!(clojure.string.includes_QMARK_(p," ")));
} else {
return and__5140__auto__;
}
})());
});

//# sourceMappingURL=logseq.common.path.js.map
