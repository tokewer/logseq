goog.provide('logseq.common.graph_registry');
logseq.common.graph_registry.db_version_prefix = "logseq_db_";
logseq.common.graph_registry.present_string_QMARK_ = (function logseq$common$graph_registry$present_string_QMARK_(s){
return ((typeof s === 'string') && ((!(clojure.string.blank_QMARK_(s)))));
});
logseq.common.graph_registry.normalize_entry = (function logseq$common$graph_registry$normalize_entry(entry){
var local_graph_id = new cljs.core.Keyword(null,"local-graph-id","local-graph-id",-1284410817).cljs$core$IFn$_invoke$arity$1(entry);
var graph_id = (function (){var or__5142__auto__ = ((logseq.common.graph_registry.present_string_QMARK_(new cljs.core.Keyword(null,"graph-id","graph-id",-205404489).cljs$core$IFn$_invoke$arity$1(entry)))?new cljs.core.Keyword(null,"graph-id","graph-id",-205404489).cljs$core$IFn$_invoke$arity$1(entry):null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(logseq.common.graph_registry.present_string_QMARK_(local_graph_id)){
return local_graph_id;
} else {
return null;
}
}
})();
if(cljs.core.truth_(graph_id)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Missing graph identity",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entry","entry",505168823),entry], null));
}

var G__65352 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entry,new cljs.core.Keyword(null,"graph-id","graph-id",-205404489),graph_id),new cljs.core.Keyword(null,"rtc-graph-id","rtc-graph-id",1979739675));
var G__65352__$1 = ((typeof new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1(entry) === 'string')?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__65352,new cljs.core.Keyword(null,"repo","repo",-1999060679),clojure.string.trim):G__65352);
if(typeof new cljs.core.Keyword(null,"graph-name","graph-name",416773857).cljs$core$IFn$_invoke$arity$1(entry) === 'string'){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__65352__$1,new cljs.core.Keyword(null,"graph-name","graph-name",416773857),clojure.string.trim);
} else {
return G__65352__$1;
}
});
logseq.common.graph_registry.upsert_entry = (function logseq$common$graph_registry$upsert_entry(registry,entry){
var entry_SINGLEQUOTE_ = logseq.common.graph_registry.normalize_entry(entry);
return cljs.core.vec(cljs.core.cons(entry_SINGLEQUOTE_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__65354_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"graph-id","graph-id",-205404489).cljs$core$IFn$_invoke$arity$1(entry_SINGLEQUOTE_),new cljs.core.Keyword(null,"graph-id","graph-id",-205404489).cljs$core$IFn$_invoke$arity$1(p1__65354_SHARP_))) || (((((logseq.common.graph_registry.present_string_QMARK_(new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1(entry_SINGLEQUOTE_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1(entry_SINGLEQUOTE_),new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1(p1__65354_SHARP_))))) || (((logseq.common.graph_registry.present_string_QMARK_(new cljs.core.Keyword(null,"local-graph-id","local-graph-id",-1284410817).cljs$core$IFn$_invoke$arity$1(entry_SINGLEQUOTE_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local-graph-id","local-graph-id",-1284410817).cljs$core$IFn$_invoke$arity$1(entry_SINGLEQUOTE_),new cljs.core.Keyword(null,"local-graph-id","local-graph-id",-1284410817).cljs$core$IFn$_invoke$arity$1(p1__65354_SHARP_))))))));
}),(function (){var or__5142__auto__ = registry;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})())));
});
logseq.common.graph_registry.normalize_comparable = (function logseq$common$graph_registry$normalize_comparable(s){
var G__65356 = s;
var G__65356__$1 = (((G__65356 == null))?null:(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65356)));
var G__65356__$2 = (((G__65356__$1 == null))?null:clojure.string.trim(G__65356__$1));
if((G__65356__$2 == null)){
return null;
} else {
return clojure.string.lower_case(G__65356__$2);
}
});
logseq.common.graph_registry.canonical_repo = (function logseq$common$graph_registry$canonical_repo(s){
if(cljs.core.seq(s)){
var trimmed = clojure.string.trim((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
var stripped = (function (){var name_SINGLEQUOTE_ = trimmed;
while(true){
if(clojure.string.starts_with_QMARK_(name_SINGLEQUOTE_,logseq.common.graph_registry.db_version_prefix)){
var G__65383 = clojure.string.trim(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(name_SINGLEQUOTE_,((logseq.common.graph_registry.db_version_prefix).length)));
name_SINGLEQUOTE_ = G__65383;
continue;
} else {
return name_SINGLEQUOTE_;
}
break;
}
})();
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.graph_registry.db_version_prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(stripped));
} else {
return null;
}
});
logseq.common.graph_registry.identifier_match_QMARK_ = (function logseq$common$graph_registry$identifier_match_QMARK_(entry,graph_identifier){
var identifier = logseq.common.graph_registry.normalize_comparable(graph_identifier);
var repo = logseq.common.graph_registry.normalize_comparable(new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1(entry));
var graph_name = logseq.common.graph_registry.normalize_comparable(new cljs.core.Keyword(null,"graph-name","graph-name",416773857).cljs$core$IFn$_invoke$arity$1(entry));
var graph_id = logseq.common.graph_registry.normalize_comparable(new cljs.core.Keyword(null,"graph-id","graph-id",-205404489).cljs$core$IFn$_invoke$arity$1(entry));
var canonical_repo_name = logseq.common.graph_registry.normalize_comparable(logseq.common.graph_registry.canonical_repo(graph_identifier));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(identifier,repo)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(identifier,graph_name)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(identifier,graph_id)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(canonical_repo_name,repo)))))));
});
logseq.common.graph_registry.resolve_target = (function logseq$common$graph_registry$resolve_target(registry,p__65374){
var map__65375 = p__65374;
var map__65375__$1 = cljs.core.__destructure_map(map__65375);
var graph_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65375__$1,new cljs.core.Keyword(null,"graph-id","graph-id",-205404489));
var graph_identifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65375__$1,new cljs.core.Keyword(null,"graph-identifier","graph-identifier",-1698375724));
if(logseq.common.graph_registry.present_string_QMARK_(graph_id)){
return cljs.core.some((function (p1__65369_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(graph_id,new cljs.core.Keyword(null,"graph-id","graph-id",-205404489).cljs$core$IFn$_invoke$arity$1(p1__65369_SHARP_))){
return p1__65369_SHARP_;
} else {
return null;
}
}),registry);
} else {
if(logseq.common.graph_registry.present_string_QMARK_(graph_identifier)){
return cljs.core.some((function (p1__65370_SHARP_){
if(logseq.common.graph_registry.identifier_match_QMARK_(p1__65370_SHARP_,graph_identifier)){
return p1__65370_SHARP_;
} else {
return null;
}
}),registry);
} else {
return null;

}
}
});

//# sourceMappingURL=logseq.common.graph_registry.js.map
