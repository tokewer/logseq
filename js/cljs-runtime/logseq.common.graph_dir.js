goog.provide('logseq.common.graph_dir');
logseq.common.graph_dir.encode_graph_dir_name = (function logseq$common$graph_dir$encode_graph_dir_name(graph_name){
var encoded = encodeURIComponent(clojure.string.trim((function (){var or__5142__auto__ = graph_name;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})()));
return clojure.string.replace(clojure.string.replace(clojure.string.replace(encoded,"%20"," "),"~","%7E"),"%","~");
});
logseq.common.graph_dir.decode_graph_dir_name = (function logseq$common$graph_dir$decode_graph_dir_name(dir_name){
if(((typeof dir_name === 'string') && (((clojure.string.includes_QMARK_(dir_name,"++")) || (clojure.string.includes_QMARK_(dir_name,"+3A+")))))){
return null;
} else {
if((!((dir_name == null)))){
try{var decoded = decodeURIComponent(clojure.string.replace(dir_name,"~","%"));
var trimmed = clojure.string.trim(decoded);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(decoded,trimmed)){
return cljs.core.not_empty(trimmed);
} else {
return null;
}
}catch (e51017){var _ = e51017;
return null;
}} else {
return null;
}
}
});
logseq.common.graph_dir.legacy_dir_pattern = /(?:\+\+|\+3A\+|%)/;
logseq.common.graph_dir.decode_legacy_graph_dir_name = (function logseq$common$graph_dir$decode_legacy_graph_dir_name(dir_name){
if(cljs.core.truth_((function (){var and__5140__auto__ = typeof dir_name === 'string';
if(and__5140__auto__){
return cljs.core.re_find(logseq.common.graph_dir.legacy_dir_pattern,dir_name);
} else {
return and__5140__auto__;
}
})())){
var compat_name = clojure.string.replace(clojure.string.replace(dir_name,"+3A+",":"),"++","/");
try{var decoded = clojure.string.trim(decodeURIComponent(compat_name));
if(cljs.core.seq(decoded)){
return decoded;
} else {
return null;
}
}catch (e51020){var _ = e51020;
return null;
}} else {
return null;
}
});
logseq.common.graph_dir.repo__GT_graph_dir_key = (function logseq$common$graph_dir$repo__GT_graph_dir_key(repo){
var G__51021 = repo;
var G__51021__$1 = (((G__51021 == null))?null:logseq.common.config.strip_leading_db_version_prefix(G__51021));
if((G__51021__$1 == null)){
return null;
} else {
return cljs.core.not_empty(G__51021__$1);
}
});
/**
 * Return the canonical value used for repo identity comparison.
 * 
 *   Repo identity comparison is based on the graph directory key, so `demo` and
 *   `logseq_db_demo` identify the same graph. Use this helper, or `same-repo?`,
 *   whenever code needs to decide whether two repo names represent the same graph.
 */
logseq.common.graph_dir.repo_identity = (function logseq$common$graph_dir$repo_identity(repo){
return logseq.common.graph_dir.repo__GT_graph_dir_key(repo);
});
/**
 * Return true when two repo names identify the same graph.
 */
logseq.common.graph_dir.same_repo_QMARK_ = (function logseq$common$graph_dir$same_repo_QMARK_(a,b){
var a_SINGLEQUOTE_ = logseq.common.graph_dir.repo_identity(a);
var b_SINGLEQUOTE_ = logseq.common.graph_dir.repo_identity(b);
return (((!((a_SINGLEQUOTE_ == null)))) && ((((!((b_SINGLEQUOTE_ == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a_SINGLEQUOTE_,b_SINGLEQUOTE_)))));
});
logseq.common.graph_dir.graph_dir_key__GT_encoded_dir_name = (function logseq$common$graph_dir$graph_dir_key__GT_encoded_dir_name(graph_dir_key){
if((!((graph_dir_key == null)))){
return logseq.common.graph_dir.encode_graph_dir_name(graph_dir_key);
} else {
return null;
}
});
logseq.common.graph_dir.repo__GT_encoded_graph_dir_name = (function logseq$common$graph_dir$repo__GT_encoded_graph_dir_name(repo){
var G__51023 = repo;
var G__51023__$1 = (((G__51023 == null))?null:logseq.common.graph_dir.repo__GT_graph_dir_key(G__51023));
if((G__51023__$1 == null)){
return null;
} else {
return logseq.common.graph_dir.graph_dir_key__GT_encoded_dir_name(G__51023__$1);
}
});
logseq.common.graph_dir.decode_canonical_graph_dir_key = (function logseq$common$graph_dir$decode_canonical_graph_dir_key(encoded_graph_dir_key){
var decoded = logseq.common.graph_dir.decode_graph_dir_name(encoded_graph_dir_key);
if(((cljs.core.seq(decoded)) && ((!(clojure.string.starts_with_QMARK_(decoded,logseq.common.config.db_version_prefix)))))){
return decoded;
} else {
return null;
}
});

//# sourceMappingURL=logseq.common.graph_dir.js.map
