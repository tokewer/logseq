goog.provide('logseq.api.app');
logseq.api.app.get_state_from_store = (function logseq$api$app$get_state_from_store(path){
var temp__5825__auto__ = ((typeof path === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null):cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(path));
if(cljs.core.truth_(temp__5825__auto__)){
var path__$1 = temp__5825__auto__;
var G__48111 = path__$1;
var G__48111__$1 = (((G__48111 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48109_SHARP_){
if(clojure.string.starts_with_QMARK_(p1__48109_SHARP_,"@")){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__48109_SHARP_,(1));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__48109_SHARP_);
}
}),G__48111));
var G__48111__$2 = (((G__48111__$1 == null))?null:cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0(),G__48111__$1));
var G__48111__$3 = (((G__48111__$2 == null))?null:(function (p1__48110_SHARP_){
if(frontend.util.atom_QMARK_(p1__48110_SHARP_)){
return cljs.core.deref(p1__48110_SHARP_);
} else {
return p1__48110_SHARP_;
}
})(G__48111__$2));
var G__48111__$4 = (((G__48111__$3 == null))?null:logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1(G__48111__$3));
if((G__48111__$4 == null)){
return null;
} else {
return cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(G__48111__$4);
}
} else {
return null;
}
});
logseq.api.app.set_state_from_store = (function logseq$api$app$set_state_from_store(path,value){
var temp__5825__auto__ = ((typeof path === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null):cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(path));
if(cljs.core.truth_(temp__5825__auto__)){
var path__$1 = temp__5825__auto__;
var G__48114 = path__$1;
var G__48114__$1 = (((G__48114 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48112_SHARP_){
if(clojure.string.starts_with_QMARK_(p1__48112_SHARP_,"@")){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__48112_SHARP_,(1));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__48112_SHARP_);
}
}),G__48114));
var G__48114__$2 = (((G__48114__$1 == null))?null:cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,G__48114__$1));
if((G__48114__$2 == null)){
return null;
} else {
return (function (p1__48113_SHARP_){
return frontend.state.set_state_BANG_(p1__48113_SHARP_,cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(value));
})(G__48114__$2);
}
} else {
return null;
}
});
logseq.api.app.get_app_info = (function logseq$api$app$get_app_info(){
return cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"version","version",425292698),frontend.version.version,new cljs.core.Keyword(null,"supportDb","supportDb",-1562326338),true], null)));
});
logseq.api.app.get_user_configs = (function logseq$api$app$get_user_configs(){
return cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"current-graph","current-graph",1546435330),new cljs.core.Keyword(null,"preferred-start-of-week","preferred-start-of-week",-662727035),new cljs.core.Keyword(null,"preferred-theme-mode","preferred-theme-mode",959815621),new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017),new cljs.core.Keyword(null,"enabled-flashcards","enabled-flashcards",2032664407),new cljs.core.Keyword(null,"preferred-date-format","preferred-date-format",459860922),new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword(null,"show-brackets","show-brackets",-860247746),new cljs.core.Keyword(null,"preferred-format","preferred-format",-1784393121)],[frontend.state.get_current_repo(),frontend.state.get_start_of_week(),new cljs.core.Keyword("ui","theme","ui/theme",-1247877132).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()),new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()),frontend.state.enable_flashcards_QMARK_.cljs$core$IFn$_invoke$arity$0(),frontend.state.get_date_formatter(),frontend.state.get_me(),frontend.state.show_brackets_QMARK_(),frontend.state.get_preferred_format()])));
});
/**
 * @param {...*} var_args
 */
logseq.api.app.get_current_graph_configs = (function() { 
var logseq$api$app$get_current_graph_configs__delegate = function (keys){
var G__48116 = frontend.state.get_config.cljs$core$IFn$_invoke$arity$0();
var G__48116__$1 = (((G__48116 == null))?null:(function (p1__48115_SHARP_){
if(cljs.core.seq(keys)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__48115_SHARP_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,keys));
} else {
return p1__48115_SHARP_;
}
})(G__48116));
if((G__48116__$1 == null)){
return null;
} else {
return cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(G__48116__$1);
}
};
var logseq$api$app$get_current_graph_configs = function (var_args){
var keys = null;
if (arguments.length > 0) {
var G__48135__i = 0, G__48135__a = new Array(arguments.length -  0);
while (G__48135__i < G__48135__a.length) {G__48135__a[G__48135__i] = arguments[G__48135__i + 0]; ++G__48135__i;}
  keys = new cljs.core.IndexedSeq(G__48135__a,0,null);
} 
return logseq$api$app$get_current_graph_configs__delegate.call(this,keys);};
logseq$api$app$get_current_graph_configs.cljs$lang$maxFixedArity = 0;
logseq$api$app$get_current_graph_configs.cljs$lang$applyTo = (function (arglist__48136){
var keys = cljs.core.seq(arglist__48136);
return logseq$api$app$get_current_graph_configs__delegate(keys);
});
logseq$api$app$get_current_graph_configs.cljs$core$IFn$_invoke$arity$variadic = logseq$api$app$get_current_graph_configs__delegate;
return logseq$api$app$get_current_graph_configs;
})()
;
logseq.api.app.set_current_graph_configs = (function logseq$api$app$set_current_graph_configs(configs){
var temp__5825__auto__ = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(configs);
if(cljs.core.truth_(temp__5825__auto__)){
var configs__$1 = temp__5825__auto__;
if(cljs.core.map_QMARK_(configs__$1)){
var seq__48117 = cljs.core.seq(configs__$1);
var chunk__48118 = null;
var count__48119 = (0);
var i__48120 = (0);
while(true){
if((i__48120 < count__48119)){
var vec__48127 = chunk__48118.cljs$core$IIndexed$_nth$arity$2(null,i__48120);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48127,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48127,(1),null);
frontend.handler.config.set_config_BANG_(k,v);


var G__48137 = seq__48117;
var G__48138 = chunk__48118;
var G__48139 = count__48119;
var G__48140 = (i__48120 + (1));
seq__48117 = G__48137;
chunk__48118 = G__48138;
count__48119 = G__48139;
i__48120 = G__48140;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__48117);
if(temp__5825__auto____$1){
var seq__48117__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__48117__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__48117__$1);
var G__48141 = cljs.core.chunk_rest(seq__48117__$1);
var G__48142 = c__5673__auto__;
var G__48143 = cljs.core.count(c__5673__auto__);
var G__48144 = (0);
seq__48117 = G__48141;
chunk__48118 = G__48142;
count__48119 = G__48143;
i__48120 = G__48144;
continue;
} else {
var vec__48130 = cljs.core.first(seq__48117__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48130,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48130,(1),null);
frontend.handler.config.set_config_BANG_(k,v);


var G__48145 = cljs.core.next(seq__48117__$1);
var G__48146 = null;
var G__48147 = (0);
var G__48148 = (0);
seq__48117 = G__48145;
chunk__48118 = G__48146;
count__48119 = G__48147;
i__48120 = G__48148;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
});
logseq.api.app.get_current_graph_favorites = (function logseq$api$app$get_current_graph_favorites(){
return logseq.api.db_based.get_favorites();
});
logseq.api.app.get_current_graph_recent = (function logseq$api$app$get_current_graph_recent(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.recent.get_recent_pages()),(function (recent_pages){
return promesa.protocols._promise((function (){var G__48133 = recent_pages;
var G__48133__$1 = (((G__48133 == null))?null:logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1(G__48133));
if((G__48133__$1 == null)){
return null;
} else {
return cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(G__48133__$1);
}
})());
}));
}));
});
logseq.api.app.get_current_graph = (function logseq$api$app$get_current_graph(){
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.config.demo_repo,repo)){
return null;
} else {
return cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),repo,new cljs.core.Keyword(null,"name","name",1843675177),(frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1(repo) : frontend.util.node_path.basename.call(null,repo)),new cljs.core.Keyword(null,"path","path",-188191168),frontend.config.get_repo_dir(repo)], null));
}
} else {
return null;
}
});
logseq.api.app.show_themes = (function logseq$api$app$show_themes(){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","show-themes-modal","modal/show-themes-modal",238725999)], null));
});
logseq.api.app.set_theme_mode = (function logseq$api$app$set_theme_mode(mode){
return frontend.state.set_theme_mode_BANG_.cljs$core$IFn$_invoke$arity$1(mode);
});
logseq.api.app.relaunch = (function logseq$api$app$relaunch(){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["relaunchApp"], 0));
});
logseq.api.app.quit = (function logseq$api$app$quit(){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["quitApp"], 0));
});
logseq.api.app.open_external_link = (function logseq$api$app$open_external_link(url){
if(cljs.core.truth_(cljs.core.re_find(/https?:\/\//,url))){
return apis.openExternal(url);
} else {
return null;
}
});
/**
 * @param {...*} var_args
 */
logseq.api.app.invoke_external_command = (function() { 
var logseq$api$app$invoke_external_command__delegate = function (type,args){
var temp__5825__auto__ = (function (){var and__5140__auto__ = clojure.string.starts_with_QMARK_(type,"logseq.");
if(and__5140__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.util.safe_lower_case(clojure.string.replace(type,/^logseq./,"")));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
var temp__5825__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.handler.command_palette.get_commands_unique(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"action","action",-811238024)], null));
if(cljs.core.truth_(temp__5825__auto____$1)){
var action = temp__5825__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(frontend.handler.plugin.hook_lifecycle_fn_BANG_,id,action,args);
} else {
return null;
}
} else {
return null;
}
};
var logseq$api$app$invoke_external_command = function (type,var_args){
var args = null;
if (arguments.length > 1) {
var G__48149__i = 0, G__48149__a = new Array(arguments.length -  1);
while (G__48149__i < G__48149__a.length) {G__48149__a[G__48149__i] = arguments[G__48149__i + 1]; ++G__48149__i;}
  args = new cljs.core.IndexedSeq(G__48149__a,0,null);
} 
return logseq$api$app$invoke_external_command__delegate.call(this,type,args);};
logseq$api$app$invoke_external_command.cljs$lang$maxFixedArity = 1;
logseq$api$app$invoke_external_command.cljs$lang$applyTo = (function (arglist__48150){
var type = cljs.core.first(arglist__48150);
var args = cljs.core.rest(arglist__48150);
return logseq$api$app$invoke_external_command__delegate(type,args);
});
logseq$api$app$invoke_external_command.cljs$core$IFn$_invoke$arity$variadic = logseq$api$app$invoke_external_command__delegate;
return logseq$api$app$invoke_external_command;
})()
;
logseq.api.app.set_left_sidebar_visible = (function logseq$api$app$set_left_sidebar_visible(flag){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(flag,"toggle")){
frontend.state.toggle_left_sidebar_BANG_();
} else {
frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","left-sidebar-open?","ui/left-sidebar-open?",899579728),cljs.core.boolean$(flag));
}

return null;
});
logseq.api.app.set_right_sidebar_visible = (function logseq$api$app$set_right_sidebar_visible(flag){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(flag,"toggle")){
frontend.state.toggle_sidebar_open_QMARK__BANG_();
} else {
frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887),cljs.core.boolean$(flag));
}

return null;
});
logseq.api.app.clear_right_sidebar_blocks = (function logseq$api$app$clear_right_sidebar_blocks(opts){
frontend.state.clear_sidebar_blocks_BANG_();

var temp__5825__auto___48151 = (function (){var and__5140__auto__ = opts;
if(cljs.core.truth_(and__5140__auto__)){
return cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto___48151)){
var opts_48152__$1 = temp__5825__auto___48151;
var and__5140__auto___48153 = new cljs.core.Keyword(null,"close","close",1835149582).cljs$core$IFn$_invoke$arity$1(opts_48152__$1);
if(cljs.core.truth_(and__5140__auto___48153)){
frontend.state.hide_right_sidebar_BANG_();
} else {
}
} else {
}

return null;
});
logseq.api.app.push_state = (function logseq$api$app$push_state(k,params,query){
var k__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var page_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k__$1,new cljs.core.Keyword(null,"page","page",849072397));
var params__$1 = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(params);
var query__$1 = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(query);
if(page_QMARK_){
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(params__$1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"anchor","anchor",1549638489).cljs$core$IFn$_invoke$arity$1(query__$1),new cljs.core.Keyword(null,"push","push",799791267),true], null));
} else {
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$3(k__$1,params__$1,query__$1);
}
});
logseq.api.app.replace_state = (function logseq$api$app$replace_state(k,params,query){
var k__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var page_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k__$1,new cljs.core.Keyword(null,"page","page",849072397));
var params__$1 = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(params);
var query__$1 = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(query);
var temp__5823__auto__ = (function (){var and__5140__auto__ = page_QMARK_;
if(and__5140__auto__){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(params__$1);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var page_name = temp__5823__auto__;
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$2(page_name,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"anchor","anchor",1549638489).cljs$core$IFn$_invoke$arity$1(query__$1),new cljs.core.Keyword(null,"push","push",799791267),false], null));
} else {
return reitit.frontend.easy.replace_state.cljs$core$IFn$_invoke$arity$3(k__$1,params__$1,query__$1);
}
});
logseq.api.app.get_current_route = (function logseq$api$app$get_current_route(){
var G__48134 = frontend.state.get_route_match();
var G__48134__$1 = (((G__48134 == null))?null:cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__48134,new cljs.core.Keyword(null,"data","data",-232669377)));
if((G__48134__$1 == null)){
return null;
} else {
return cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(G__48134__$1);
}
});

//# sourceMappingURL=logseq.api.app.js.map
