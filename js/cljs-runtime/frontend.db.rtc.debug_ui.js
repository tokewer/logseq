goog.provide('frontend.db.rtc.debug_ui');
if((typeof frontend !== 'undefined') && (typeof frontend.db !== 'undefined') && (typeof frontend.db.rtc !== 'undefined') && (typeof frontend.db.rtc.debug_ui !== 'undefined') && (typeof frontend.db.rtc.debug_ui.debug_state !== 'undefined')){
} else {
frontend.db.rtc.debug_ui.debug_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(frontend.state.get_state(new cljs.core.Keyword("rtc","state","rtc/state",-1988572624)));
}
frontend.db.rtc.debug_ui.stop = (function frontend$db$rtc$debug_ui$stop(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.sync._LT_rtc_stop_BANG_()),(function (___27434__auto__){
return promesa.protocols._promise(cljs.core.reset_BANG_(frontend.db.rtc.debug_ui.debug_state,null));
}));
}));
});
frontend.db.rtc.debug_ui.rtc_debug_ui = (function (){var render_fn__47251__auto__ = (function frontend$db$rtc$debug_ui$rtc_debug_ui(){
var vec__97571 = logseq.shui.hooks.use_atom(frontend.db.rtc.debug_ui.debug_state);
var debug_state_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97571,(0),null);
var vec__97574 = logseq.shui.hooks.use_state(null);
var rtc_logs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97574,(0),null);
var set_rtc_logs_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97574,(1),null);
var vec__97577 = logseq.shui.hooks.use_state(null);
var keys_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97577,(0),null);
var set_keys_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97577,(1),null);
var vec__97580 = logseq.shui.hooks.use_state(null);
var current_page_blocks_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97580,(0),null);
var set_current_page_blocks_count_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97580,(1),null);
var rtc_state = new cljs.core.Keyword(null,"rtc-state","rtc-state",1931374921).cljs$core$IFn$_invoke$arity$1(debug_state_STAR_);
logseq.shui.hooks.use_effect_BANG_((function (){
var logs_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var watch_key = new cljs.core.Keyword("frontend.db.rtc.debug-ui","sub-logs","frontend.db.rtc.debug-ui/sub-logs",715639481);
cljs.core.add_watch(frontend.handler.db_based.rtc_flows.rtc_log,watch_key,(function (_,___$1,___$2,log){
var logs = (cljs.core.truth_(log)?cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(logs_STAR_),log)):cljs.core.deref(logs_STAR_));
cljs.core.reset_BANG_(logs_STAR_,logs);

return (set_rtc_logs_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_rtc_logs_BANG_.cljs$core$IFn$_invoke$arity$1(logs) : set_rtc_logs_BANG_.call(null,logs));
}));

return (function (){
return cljs.core.remove_watch(frontend.handler.db_based.rtc_flows.rtc_log,watch_key);
});
}),cljs.core.PersistentVector.EMPTY);

logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5823__auto___97638 = frontend.state.get_current_page();
if(cljs.core.truth_(temp__5823__auto___97638)){
var page_97639 = temp__5823__auto___97638;
promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","q","thread-api/q",-245089616),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"?block","?block",1541466123,null)),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Symbol(null,"?page","?page",-1343187612,null)], null)], null),page_97639], null)], 0))),(function (blocks_count){
return promesa.protocols._promise((set_current_page_blocks_count_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_page_blocks_count_BANG_.cljs$core$IFn$_invoke$arity$1(blocks_count) : set_current_page_blocks_count_BANG_.call(null,blocks_count)));
}));
}));
} else {
(set_current_page_blocks_count_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_page_blocks_count_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_current_page_blocks_count_BANG_.call(null,null));
}

return null;
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.state.get_current_page()], null));

return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var temp__5825__auto__ = e.target.closest(".ui__button");
if(cljs.core.truth_(temp__5825__auto__)){
var btn = temp__5825__auto__;
btn.setAttribute("disabled","true");

return setTimeout((function (){
return btn.removeAttribute("disabled");
}),(2000));
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.gap-2.flex-wrap.items-center.pb-3","div.flex.gap-2.flex-wrap.items-center.pb-3",-1331210645),(function (){var G__97596 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.sync._LT_get_remote_graphs()),(function (graph_list){
return promesa.protocols._promise(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.db.rtc.debug_ui.debug_state,cljs.core.assoc,new cljs.core.Keyword(null,"remote-graphs","remote-graphs",2118658259),graph_list));
}));
}));
})], null);
var G__97597 = logseq.shui.ui.tabler_icon("download");
var G__97598 = "graph-list";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__97596,G__97597,G__97598) : logseq.shui.ui.button.call(null,G__97596,G__97597,G__97598));
})(),(function (){var G__97603 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.user._LT_upload_user_avatar("TEST_AVATAR");
})], null);
var G__97604 = logseq.shui.ui.tabler_icon("upload");
var G__97605 = "upload-test-avatar";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__97603,G__97604,G__97605) : logseq.shui.ui.button.call(null,G__97603,G__97604,G__97605));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pb-4","div.pb-4",1384937722),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.select-text","pre.select-text",896223886),(function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__97606_97640 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__97607_97641 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__97608_97642 = true;
var _STAR_print_fn_STAR__temp_val__97609_97643 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__97608_97642);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__97609_97643);

try{fipp.edn.pprint.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),new cljs.core.Keyword(null,"blocks-count","blocks-count",1937660069),new cljs.core.Keyword(null,"rtc-logs","rtc-logs",-1442626393),new cljs.core.Keyword(null,"rtc-state","rtc-state",1931374921),new cljs.core.Keyword(null,"local-tx","local-tx",1729212201),new cljs.core.Keyword(null,"schema-version","schema-version",1117939594),new cljs.core.Keyword(null,"remote-profile?","remote-profile?",-1314795473),new cljs.core.Keyword(null,"auto-push?","auto-push?",674534960),new cljs.core.Keyword(null,"remote-graphs","remote-graphs",2118658259),new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"pending-block-update-count","pending-block-update-count",-1976854184),new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Keyword(null,"online-users","online-users",-747563810)],[frontend.handler.user.user_uuid(),current_page_blocks_count,rtc_logs,rtc_state,new cljs.core.Keyword(null,"local-tx","local-tx",1729212201).cljs$core$IFn$_invoke$arity$1(debug_state_STAR_),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app","app",-560961707),logseq.db.frontend.schema.schema_version__GT_string(logseq.db.frontend.schema.version),new cljs.core.Keyword(null,"local-graph","local-graph",1197953641),new cljs.core.Keyword(null,"local-graph-schema-version","local-graph-schema-version",-211621207).cljs$core$IFn$_invoke$arity$1(debug_state_STAR_),new cljs.core.Keyword(null,"remote-graph","remote-graph",-2082736629),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"remote-graph-schema-version","remote-graph-schema-version",-1202898069).cljs$core$IFn$_invoke$arity$1(debug_state_STAR_)))], null),new cljs.core.Keyword(null,"remote-profile?","remote-profile?",-1314795473).cljs$core$IFn$_invoke$arity$1(debug_state_STAR_),new cljs.core.Keyword(null,"auto-push?","auto-push?",674534960).cljs$core$IFn$_invoke$arity$1(debug_state_STAR_),new cljs.core.Keyword(null,"remote-graphs","remote-graphs",2118658259).cljs$core$IFn$_invoke$arity$1(debug_state_STAR_),new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522).cljs$core$IFn$_invoke$arity$1(debug_state_STAR_),new cljs.core.Keyword(null,"unpushed-block-update-count","unpushed-block-update-count",-387210371).cljs$core$IFn$_invoke$arity$1(debug_state_STAR_),frontend.state.get_current_page(),new cljs.core.Keyword(null,"online-users","online-users",-747563810).cljs$core$IFn$_invoke$arity$1(debug_state_STAR_)]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(20)], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__97607_97641);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__97606_97640);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.my-2.flex.gap-2","div.my-2.flex.gap-2",1245451),(function (){var G__97616 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),"text-green-rx-09 border-green-rx-10 hover:text-green-rx-10",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.db_based.sync._LT_rtc_start_BANG_(frontend.state.get_current_repo());
})], null);
var G__97617 = logseq.shui.ui.tabler_icon("player-play");
var G__97618 = "start";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__97616,G__97617,G__97618) : logseq.shui.ui.button.call(null,G__97616,G__97617,G__97618));
})(),(function (){var G__97621 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"class","class",-2030961996),"text-red-rx-09 border-red-rx-08 hover:text-red-rx-10",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.db.rtc.debug_ui.stop();
})], null);
var G__97622 = logseq.shui.ui.tabler_icon("player-stop");
var G__97623 = "stop";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__97621,G__97622,G__97623) : logseq.shui.ui.button.call(null,G__97621,G__97622,G__97623));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.my-2","hr.my-2",930024796)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pb-2.flex.flex-row.items-center.gap-2","div.pb-2.flex.flex-row.items-center.gap-2",1599211997),(function (){var G__97624 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
var temp__5825__auto__ = frontend.handler.user.user_uuid();
if(cljs.core.truth_(temp__5825__auto__)){
var user_uuid = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-user-rsa-key-pair","thread-api/get-user-rsa-key-pair",939231991),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_auth_id_token(),user_uuid], 0))),(function (user_rsa_key_pair){
return promesa.protocols._promise((set_keys_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_keys_state_BANG_.cljs$core$IFn$_invoke$arity$1(user_rsa_key_pair) : set_keys_state_BANG_.call(null,user_rsa_key_pair)));
}));
}));
} else {
return null;
}
})], null);
var G__97625 = logseq.shui.ui.tabler_icon("refresh");
var G__97626 = "keys-state";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__97624,G__97625,G__97626) : logseq.shui.ui.button.call(null,G__97624,G__97625,G__97626));
})(),(function (){var G__97627 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
var temp__5825__auto__ = frontend.state.get_auth_id_token();
if(cljs.core.truth_(temp__5825__auto__)){
var token = temp__5825__auto__;
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","init-user-rsa-key-pair","thread-api/init-user-rsa-key-pair",1301682444),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([token,frontend.handler.user.user_uuid()], 0)),(function (error){
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.db.rtc.debug-ui",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-user-rsa-key-pair","init-user-rsa-key-pair",-2042531619),error,new cljs.core.Keyword(null,"line","line",212345235),130], null)),null);
} else {
return null;
}
}));
} else {
return null;
}
})], null);
var G__97628 = logseq.shui.ui.tabler_icon("upload");
var G__97629 = "init upload user rsa-key-pair";
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__97627,G__97628,G__97629) : logseq.shui.ui.button.call(null,G__97627,G__97628,G__97629));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pb-1","div.pb-1",-1651406429),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.select-text","pre.select-text",896223886),(function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__97630_97644 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__97631_97645 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__97632_97646 = true;
var _STAR_print_fn_STAR__temp_val__97633_97647 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__97632_97646);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__97633_97647);

try{fipp.edn.pprint.cljs$core$IFn$_invoke$arity$2(keys_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(20)], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__97631_97645);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__97630_97644);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})()], null)], null)], null)], null);
});
var comp__47252__auto__ = (function() { 
var frontend$db$rtc$debug_ui$rtc_debug_ui__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__97634 = cljs.core.first(args__47253__auto__);
var G__97635 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__97634,G__97635) : io.factorhouse.hsx.core.obj_get.call(null,G__97634,G__97635));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"rtc-debug-ui","rtc-debug-ui",-50842004,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__47253__auto__),frontend$db$rtc$debug_ui$rtc_debug_ui,args__47253__auto__,null);
}
};
var frontend$db$rtc$debug_ui$rtc_debug_ui = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__97648__i = 0, G__97648__a = new Array(arguments.length -  0);
while (G__97648__i < G__97648__a.length) {G__97648__a[G__97648__i] = arguments[G__97648__i + 0]; ++G__97648__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__97648__a,0,null);
} 
return frontend$db$rtc$debug_ui$rtc_debug_ui__delegate.call(this,args__47253__auto__);};
frontend$db$rtc$debug_ui$rtc_debug_ui.cljs$lang$maxFixedArity = 0;
frontend$db$rtc$debug_ui$rtc_debug_ui.cljs$lang$applyTo = (function (arglist__97649){
var args__47253__auto__ = cljs.core.seq(arglist__97649);
return frontend$db$rtc$debug_ui$rtc_debug_ui__delegate(args__47253__auto__);
});
frontend$db$rtc$debug_ui$rtc_debug_ui.cljs$core$IFn$_invoke$arity$variadic = frontend$db$rtc$debug_ui$rtc_debug_ui__delegate;
return frontend$db$rtc$debug_ui$rtc_debug_ui;
})()
;
var memo_comp__47254__auto__ = (function (){var G__97636 = comp__47252__auto__;
var G__97637 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__97636,G__97637) : io.factorhouse.hsx.core.react_memo.call(null,G__97636,G__97637));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"rtc-debug-ui");

return comp__47252__auto__;
})();

//# sourceMappingURL=frontend.db.rtc.debug_ui.js.map
