goog.provide('frontend.util.url');
frontend.util.url.LSP_SCHEME = "logseq";
frontend.util.url.encode = encodeURI;
frontend.util.url.encode_param = encodeURIComponent;
frontend.util.url.get_local_repo_identifier = (function frontend$util$url$get_local_repo_identifier(repo){
var repo_name = frontend.util.repo.get_repo_name(repo);
return frontend.util.repo.get_short_repo_name(repo_name);
});
/**
 * Get Logseq protocol URL, w/o param (v0.1).
 * host: set to `nil` for local graph
 * protocol?: if true, returns URL with protocol prefix
 */
frontend.util.url.get_repo_id_url = (function frontend$util$url$get_repo_id_url(var_args){
var G__67346 = arguments.length;
switch (G__67346) {
case 3:
return frontend.util.url.get_repo_id_url.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return frontend.util.url.get_repo_id_url.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.util.url.get_repo_id_url.cljs$core$IFn$_invoke$arity$3 = (function (host,action,repo_identifier){
return frontend.util.url.get_repo_id_url.cljs$core$IFn$_invoke$arity$4(host,action,repo_identifier,true);
}));

(frontend.util.url.get_repo_id_url.cljs$core$IFn$_invoke$arity$4 = (function (host,action,repo_identifier,protocol_QMARK_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(protocol_QMARK_)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.url.LSP_SCHEME)+"://"):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(host)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(host)+"/"):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((frontend.util.url.encode.cljs$core$IFn$_invoke$arity$1 ? frontend.util.url.encode.cljs$core$IFn$_invoke$arity$1(repo_identifier) : frontend.util.url.encode.call(null,repo_identifier))));
}));

(frontend.util.url.get_repo_id_url.cljs$lang$maxFixedArity = 4);

/**
 * The URL represents an graph, for example:
 * logseq://graph/abc
 * Ensure repo is valid before hand.
 * host: set to `nil` for local graph
 * protocol?: if true, returns URL with protocol prefix
 */
frontend.util.url.get_logseq_graph_url = (function frontend$util$url$get_logseq_graph_url(var_args){
var G__67348 = arguments.length;
switch (G__67348) {
case 2:
return frontend.util.url.get_logseq_graph_url.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.util.url.get_logseq_graph_url.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.util.url.get_logseq_graph_url.cljs$core$IFn$_invoke$arity$2 = (function (host,repo){
return frontend.util.url.get_logseq_graph_url.cljs$core$IFn$_invoke$arity$3(host,repo,true);
}));

(frontend.util.url.get_logseq_graph_url.cljs$core$IFn$_invoke$arity$3 = (function (host,repo,protocol_QMARK_){
var repo_identifier = (cljs.core.truth_(host)?repo:frontend.util.url.get_local_repo_identifier(repo));
return frontend.util.url.get_repo_id_url.cljs$core$IFn$_invoke$arity$4(host,"graph",repo_identifier,protocol_QMARK_);
}));

(frontend.util.url.get_logseq_graph_url.cljs$lang$maxFixedArity = 3);

/**
 * The URL represents an entity in graph with uuid, for example:
 * logseq://graph/abc?block-id=<uuid>
 * Ensure repo and uuid are valid before hand.
 * host: set to `nil` for local graph
 * protocol?: if true, returns URL with protocol prefix
 */
frontend.util.url.get_logseq_graph_uuid_url = (function frontend$util$url$get_logseq_graph_uuid_url(var_args){
var G__67350 = arguments.length;
switch (G__67350) {
case 3:
return frontend.util.url.get_logseq_graph_uuid_url.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return frontend.util.url.get_logseq_graph_uuid_url.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.util.url.get_logseq_graph_uuid_url.cljs$core$IFn$_invoke$arity$3 = (function (host,repo,uuid){
return frontend.util.url.get_logseq_graph_uuid_url.cljs$core$IFn$_invoke$arity$4(host,repo,uuid,true);
}));

(frontend.util.url.get_logseq_graph_uuid_url.cljs$core$IFn$_invoke$arity$4 = (function (host,repo,uuid,protocol_QMARK_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.url.get_logseq_graph_url.cljs$core$IFn$_invoke$arity$3(host,repo,protocol_QMARK_))+"?block-id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid));
}));

(frontend.util.url.get_logseq_graph_uuid_url.cljs$lang$maxFixedArity = 4);

frontend.util.url.strip_trailing_slash = (function frontend$util$url$strip_trailing_slash(s){
return clojure.string.replace(s,/\/+$/,"");
});
frontend.util.url.present_url_part_QMARK_ = (function frontend$util$url$present_url_part_QMARK_(v){
return ((typeof v === 'string') && ((!(clojure.string.blank_QMARK_(v)))));
});
frontend.util.url.required_url_part_BANG_ = (function frontend$util$url$required_url_part_BANG_(k,v){
if(frontend.util.url.present_url_part_QMARK_(v)){
} else {
throw (new Error((""+"Missing "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)))));
}

return v;
});
/**
 * Canonical web URL for a page. Page routes must always carry `graph-id`.
 */
frontend.util.url.get_logseq_web_page_url = (function frontend$util$url$get_logseq_web_page_url(app_base_url,graph_id,page_id){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.url.strip_trailing_slash(frontend.util.url.required_url_part_BANG_(new cljs.core.Keyword(null,"app-base-url","app-base-url",-11959296),app_base_url)))+"/page/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__67353 = frontend.util.url.required_url_part_BANG_(new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id);
return (frontend.util.url.encode_param.cljs$core$IFn$_invoke$arity$1 ? frontend.util.url.encode_param.cljs$core$IFn$_invoke$arity$1(G__67353) : frontend.util.url.encode_param.call(null,G__67353));
})())+"?graph-id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__67354 = frontend.util.url.required_url_part_BANG_(new cljs.core.Keyword(null,"graph-id","graph-id",-205404489),graph_id);
return (frontend.util.url.encode_param.cljs$core$IFn$_invoke$arity$1 ? frontend.util.url.encode_param.cljs$core$IFn$_invoke$arity$1(G__67354) : frontend.util.url.encode_param.call(null,G__67354));
})()));
});
/**
 * Canonical web URL for a block. Block routes must always carry `graph-id`.
 */
frontend.util.url.get_logseq_web_block_url = (function frontend$util$url$get_logseq_web_block_url(app_base_url,graph_id,block_id){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.url.strip_trailing_slash(frontend.util.url.required_url_part_BANG_(new cljs.core.Keyword(null,"app-base-url","app-base-url",-11959296),app_base_url)))+"/block/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__67357 = frontend.util.url.required_url_part_BANG_(new cljs.core.Keyword(null,"block-id","block-id",-70582834),block_id);
return (frontend.util.url.encode_param.cljs$core$IFn$_invoke$arity$1 ? frontend.util.url.encode_param.cljs$core$IFn$_invoke$arity$1(G__67357) : frontend.util.url.encode_param.call(null,G__67357));
})())+"?graph-id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__67358 = frontend.util.url.required_url_part_BANG_(new cljs.core.Keyword(null,"graph-id","graph-id",-205404489),graph_id);
return (frontend.util.url.encode_param.cljs$core$IFn$_invoke$arity$1 ? frontend.util.url.encode_param.cljs$core$IFn$_invoke$arity$1(G__67358) : frontend.util.url.encode_param.call(null,G__67358));
})()));
});
/**
 * URL to put on the clipboard for a page or block.
 * 
 *   Prefer the canonical web URL when `graph-id` is known. Local-only graphs have
 *   no shareable web identity, so fall back to a desktop `logseq://` URL. Returns
 *   nil when neither identity is available.
 */
frontend.util.url.entity_url_for_copy = (function frontend$util$url$entity_url_for_copy(app_base_url,graph_id,repo,entity_id,kind){
if(frontend.util.url.present_url_part_QMARK_(graph_id)){
var G__67359 = kind;
var G__67359__$1 = (((G__67359 instanceof cljs.core.Keyword))?G__67359.fqn:null);
switch (G__67359__$1) {
case "page":
return frontend.util.url.get_logseq_web_page_url(app_base_url,graph_id,entity_id);

break;
case "block":
return frontend.util.url.get_logseq_web_block_url(app_base_url,graph_id,entity_id);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67359__$1))));

}
} else {
if(frontend.util.url.present_url_part_QMARK_(repo)){
return frontend.util.url.get_logseq_graph_uuid_url.cljs$core$IFn$_invoke$arity$3(null,repo,entity_id);
} else {
return null;
}
}
});
frontend.util.url.route_from_path_parts = (function frontend$util$url$route_from_path_parts(path_parts){
var G__67360 = cljs.core.first(path_parts);
switch (G__67360) {
case "page":
var temp__5825__auto__ = cljs.core.second(path_parts);
if(cljs.core.truth_(temp__5825__auto__)){
var page_id = temp__5825__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"page-id","page-id",-872941168),decodeURIComponent(page_id)], null);
} else {
return null;
}

break;
case "block":
var temp__5825__auto__ = cljs.core.second(path_parts);
if(cljs.core.truth_(temp__5825__auto__)){
var block_id = temp__5825__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"block-id","block-id",-70582834),decodeURIComponent(block_id)], null);
} else {
return null;
}

break;
default:
return null;

}
});
frontend.util.url.path_parts = (function frontend$util$url$path_parts(path){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//)));
});
frontend.util.url.hash_route_url = (function frontend$util$url$hash_route_url(parsed_url){
var hash = parsed_url.hash;
if(clojure.string.starts_with_QMARK_(hash,"#/")){
return (new URL(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(hash,(1)),"https://logseq.com"));
} else {
return null;
}
});
frontend.util.url.parse_web_url_target = (function frontend$util$url$parse_web_url_target(url){
var parsed_url = (new URL(url,"https://logseq.com"));
var hash_url = frontend.util.url.hash_route_url(parsed_url);
var graph_id = (function (){var or__5142__auto__ = (function (){var G__67361 = hash_url;
var G__67361__$1 = (((G__67361 == null))?null:G__67361.searchParams);
if((G__67361__$1 == null)){
return null;
} else {
return G__67361__$1.get("graph-id");
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return parsed_url.searchParams.get("graph-id");
}
})();
var graph_identifier = ((clojure.string.blank_QMARK_(graph_id))?(function (){var or__5142__auto__ = (function (){var G__67362 = hash_url;
var G__67362__$1 = (((G__67362 == null))?null:G__67362.searchParams);
if((G__67362__$1 == null)){
return null;
} else {
return G__67362__$1.get("graph");
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return parsed_url.searchParams.get("graph");
}
})():null);
var route = (function (){var or__5142__auto__ = (function (){var G__67363 = hash_url;
var G__67363__$1 = (((G__67363 == null))?null:G__67363.pathname);
var G__67363__$2 = (((G__67363__$1 == null))?null:frontend.util.url.path_parts(G__67363__$1));
if((G__67363__$2 == null)){
return null;
} else {
return frontend.util.url.route_from_path_parts(G__67363__$2);
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.util.url.route_from_path_parts(frontend.util.url.path_parts(parsed_url.pathname));
}
})();
var G__67364 = cljs.core.PersistentArrayMap.EMPTY;
var G__67364__$1 = (((!(clojure.string.blank_QMARK_(graph_id))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67364,new cljs.core.Keyword(null,"graph-id","graph-id",-205404489),graph_id):G__67364);
var G__67364__$2 = (((!(clojure.string.blank_QMARK_(graph_identifier))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67364__$1,new cljs.core.Keyword(null,"graph-identifier","graph-identifier",-1698375724),graph_identifier):G__67364__$1);
if(cljs.core.truth_(route)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67364__$2,new cljs.core.Keyword(null,"route","route",329891309),route);
} else {
return G__67364__$2;
}
});

//# sourceMappingURL=frontend.util.url.js.map
