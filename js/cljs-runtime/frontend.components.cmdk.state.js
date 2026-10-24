goog.provide('frontend.components.cmdk.state');
frontend.components.cmdk.state.cmdk_last_search_storage_key = new cljs.core.Keyword(null,"ls-cmdk-last-search","ls-cmdk-last-search",451922643);
frontend.components.cmdk.state.cmdk_empty_repo_key = "__no-repo__";
frontend.components.cmdk.state.repo_storage_key = (function frontend$components$cmdk$state$repo_storage_key(repo){
var or__5142__auto__ = repo;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.components.cmdk.state.cmdk_empty_repo_key;
}
});
frontend.components.cmdk.state.default_cmdk_context_QMARK_ = (function frontend$components$cmdk$state$default_cmdk_context_QMARK_(opts,search_mode,_search_args){
return ((cljs.core.not(new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672).cljs$core$IFn$_invoke$arity$1(opts))) && ((((new cljs.core.Keyword(null,"initial-input","initial-input",1864686534).cljs$core$IFn$_invoke$arity$1(opts) == null)) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,new cljs.core.Keyword(null,"global","global",93595047),null], null), null),search_mode)))));
});
frontend.components.cmdk.state.load_last_cmdk_search = (function frontend$components$cmdk$state$load_last_cmdk_search(repo){
try{var saved = frontend.storage.get(frontend.components.cmdk.state.cmdk_last_search_storage_key);
var entry = ((cljs.core.map_QMARK_(saved))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(saved,frontend.components.cmdk.state.repo_storage_key(repo)):null);
if(cljs.core.map_QMARK_(entry)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),((typeof new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(entry) === 'string')?new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(entry):""),new cljs.core.Keyword(null,"filter-group","filter-group",869589094),(((new cljs.core.Keyword(null,"filter-group","filter-group",869589094).cljs$core$IFn$_invoke$arity$1(entry) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"filter-group","filter-group",869589094).cljs$core$IFn$_invoke$arity$1(entry):null)], null);
} else {
return null;
}
}catch (e94299){var _e = e94299;
return null;
}});
frontend.components.cmdk.state.save_last_cmdk_search_BANG_ = (function frontend$components$cmdk$state$save_last_cmdk_search_BANG_(repo,query,filter_group){
try{var saved = frontend.storage.get(frontend.components.cmdk.state.cmdk_last_search_storage_key);
var saved__$1 = ((cljs.core.map_QMARK_(saved))?saved:cljs.core.PersistentArrayMap.EMPTY);
var value = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),((typeof query === 'string')?query:""),new cljs.core.Keyword(null,"filter-group","filter-group",869589094),(((filter_group instanceof cljs.core.Keyword))?filter_group:null),new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336),Date.now()], null);
return frontend.storage.set(frontend.components.cmdk.state.cmdk_last_search_storage_key,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(saved__$1,frontend.components.cmdk.state.repo_storage_key(repo),value));
}catch (e94300){var _e = e94300;
return null;
}});
frontend.components.cmdk.state.consume_open_search_sidebar_keydown_BANG_ = (function frontend$components$cmdk$state$consume_open_search_sidebar_keydown_BANG_(event,open_search_BANG_){
if(cljs.core.truth_((function (){var and__5140__auto__ = frontend.util.meta_key_QMARK_(event);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",event.key);
} else {
return and__5140__auto__;
}
})())){
frontend.util.stop(event);

(open_search_BANG_.cljs$core$IFn$_invoke$arity$0 ? open_search_BANG_.cljs$core$IFn$_invoke$arity$0() : open_search_BANG_.call(null));

return true;
} else {
return null;
}
});
frontend.components.cmdk.state.explicit_mode_filter_group = (function frontend$components$cmdk$state$explicit_mode_filter_group(opts,search_mode){
if(cljs.core.truth_((function (){var and__5140__auto__ = search_mode;
if(cljs.core.truth_(and__5140__auto__)){
return (((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"global","global",93595047),null,new cljs.core.Keyword(null,"graph","graph",1558099509),null], null), null),search_mode)))) && (cljs.core.not(new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672).cljs$core$IFn$_invoke$arity$1(opts))));
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"group","group",582596132),search_mode], null);
} else {
return null;
}
});
frontend.components.cmdk.state.build_initial_cmdk_search = (function frontend$components$cmdk$state$build_initial_cmdk_search(opts,search_mode,search_args,repo){
if((!((new cljs.core.Keyword(null,"initial-input","initial-input",1864686534).cljs$core$IFn$_invoke$arity$1(opts) == null)))){
var filter_group = frontend.components.cmdk.state.explicit_mode_filter_group(opts,search_mode);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"initial-input","initial-input",1864686534).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"filter","filter",-948537934),filter_group], null);
} else {
var saved = ((frontend.components.cmdk.state.default_cmdk_context_QMARK_(opts,search_mode,search_args))?frontend.components.cmdk.state.load_last_cmdk_search(repo):null);
var filter_group = (function (){var or__5142__auto__ = (((new cljs.core.Keyword(null,"filter-group","filter-group",869589094).cljs$core$IFn$_invoke$arity$1(saved) instanceof cljs.core.Keyword))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"filter-group","filter-group",869589094).cljs$core$IFn$_invoke$arity$1(saved)], null):null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.components.cmdk.state.explicit_mode_filter_group(opts,search_mode);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(saved);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"filter","filter",-948537934),filter_group], null);
}
});
frontend.components.cmdk.state.persist_last_cmdk_search_BANG_ = (function frontend$components$cmdk$state$persist_last_cmdk_search_BANG_(opts,search_mode,search_args,repo,input,filter_state){
if(frontend.components.cmdk.state.default_cmdk_context_QMARK_(opts,search_mode,search_args)){
return frontend.components.cmdk.state.save_last_cmdk_search_BANG_(repo,input,new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(filter_state));
} else {
return null;
}
});
frontend.components.cmdk.state.cmdk_block_search_options = (function frontend$components$cmdk$state$cmdk_block_search_options(p__94301){
var map__94302 = p__94301;
var map__94302__$1 = cljs.core.__destructure_map(map__94302);
var filter_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94302__$1,new cljs.core.Keyword(null,"filter-group","filter-group",869589094));
var dev_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94302__$1,new cljs.core.Keyword(null,"dev?","dev?",-613971064));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94302__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var page_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94302__$1,new cljs.core.Keyword(null,"page-uuid","page-uuid",1152600915));
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94302__$1,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296));
var nodes_limit = (cljs.core.truth_(expanded_QMARK_)?(100):(10));
var nodes_base = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"limit","limit",-1355822363),nodes_limit,new cljs.core.Keyword(null,"search-limit","search-limit",301495639),(100),new cljs.core.Keyword(null,"dev?","dev?",-613971064),dev_QMARK_,new cljs.core.Keyword(null,"built-in?","built-in?",2078421512),true,new cljs.core.Keyword(null,"enable-snippet?","enable-snippet?",-692858749),true,new cljs.core.Keyword(null,"include-breadcrumb?","include-breadcrumb?",1524429524),true,new cljs.core.Keyword(null,"include-matched-count?","include-matched-count?",-578604772),true], null);
var G__94303 = filter_group;
var G__94303__$1 = (((G__94303 instanceof cljs.core.Keyword))?G__94303.fqn:null);
switch (G__94303__$1) {
case "codes":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(nodes_base,new cljs.core.Keyword(null,"limit","limit",-1355822363),(20),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"search-limit","search-limit",301495639),(300),new cljs.core.Keyword(null,"code-only?","code-only?",-1636110447),true], 0));

break;
case "current-page":
var G__94304 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"limit","limit",-1355822363),nodes_limit,new cljs.core.Keyword(null,"search-limit","search-limit",301495639),(100),new cljs.core.Keyword(null,"enable-snippet?","enable-snippet?",-692858749),true,new cljs.core.Keyword(null,"include-breadcrumb?","include-breadcrumb?",1524429524),true,new cljs.core.Keyword(null,"include-matched-count?","include-matched-count?",-578604772),true], null);
if(cljs.core.truth_(page_uuid)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__94304,new cljs.core.Keyword(null,"page","page",849072397),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_uuid)));
} else {
return G__94304;
}

break;
default:
var G__94305 = nodes_base;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),null], null), null),action)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__94305,new cljs.core.Keyword(null,"page-only?","page-only?",654695800),true);
} else {
return G__94305;
}

}
});

//# sourceMappingURL=frontend.components.cmdk.state.js.map
