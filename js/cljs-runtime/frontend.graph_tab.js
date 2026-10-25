goog.provide('frontend.graph_tab');
goog.scope(function(){
  frontend.graph_tab.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.graph_tab.graph_id_key = "ls-tab-graph-id";
frontend.graph_tab.repo_key = "ls-tab-repo";
frontend.graph_tab.session_storage = (function frontend$graph_tab$session_storage(){
return frontend.graph_tab.goog$module$goog$object.get(globalThis,"sessionStorage");
});
frontend.graph_tab.get_tab_graph_id = (function frontend$graph_tab$get_tab_graph_id(){
var temp__5825__auto__ = frontend.graph_tab.session_storage();
if(cljs.core.truth_(temp__5825__auto__)){
var storage = temp__5825__auto__;
var graph_id = storage.getItem(frontend.graph_tab.graph_id_key);
if(clojure.string.blank_QMARK_(graph_id)){
return null;
} else {
return graph_id;
}
} else {
return null;
}
});
frontend.graph_tab.get_tab_repo = (function frontend$graph_tab$get_tab_repo(){
var temp__5825__auto__ = frontend.graph_tab.session_storage();
if(cljs.core.truth_(temp__5825__auto__)){
var storage = temp__5825__auto__;
var repo = storage.getItem(frontend.graph_tab.repo_key);
if(clojure.string.blank_QMARK_(repo)){
return null;
} else {
return repo;
}
} else {
return null;
}
});
frontend.graph_tab.get_tab_graph = (function frontend$graph_tab$get_tab_graph(){
var repo = frontend.graph_tab.get_tab_repo();
var graph_id = frontend.graph_tab.get_tab_graph_id();
if(cljs.core.truth_((function (){var or__5142__auto__ = repo;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return graph_id;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"graph-id","graph-id",-205404489),graph_id], null);
} else {
return null;
}
});
frontend.graph_tab.set_tab_graph_BANG_ = (function frontend$graph_tab$set_tab_graph_BANG_(repo,graph_id){
var temp__5825__auto__ = frontend.graph_tab.session_storage();
if(cljs.core.truth_(temp__5825__auto__)){
var storage = temp__5825__auto__;
if(clojure.string.blank_QMARK_(repo)){
} else {
storage.setItem(frontend.graph_tab.repo_key,repo);
}

if(clojure.string.blank_QMARK_(graph_id)){
return null;
} else {
return storage.setItem(frontend.graph_tab.graph_id_key,graph_id);
}
} else {
return null;
}
});

//# sourceMappingURL=frontend.graph_tab.js.map
