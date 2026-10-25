goog.provide('frontend.components.header');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
frontend.components.header.home_button = (function (){var render_fn__31744__auto__ = (function frontend$components$header$home_button(){
return frontend.ui.tooltip(logseq.shui.ui.button_ghost_icon(new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(frontend.mobile.util.native_iphone_QMARK_())){
frontend.state.set_left_sidebar_open_BANG_(false);
} else {
}

return frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$0();
})], null)),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nav","home","nav/home",-74456664)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"trigger-props","trigger-props",1619401213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-child","as-child",1364710342),true], null)], null));
});
var comp__31745__auto__ = (function() { 
var frontend$components$header$home_button__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47644 = cljs.core.first(args__31746__auto__);
var G__47645 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47644,G__47645) : io.factorhouse.hsx.core.obj_get.call(null,G__47644,G__47645));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"home-button","home-button",640607689,null),args__31746__auto__),frontend$components$header$home_button,args__31746__auto__,null);
}
};
var frontend$components$header$home_button = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47813__i = 0, G__47813__a = new Array(arguments.length -  0);
while (G__47813__i < G__47813__a.length) {G__47813__a[G__47813__i] = arguments[G__47813__i + 0]; ++G__47813__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47813__a,0,null);
} 
return frontend$components$header$home_button__delegate.call(this,args__31746__auto__);};
frontend$components$header$home_button.cljs$lang$maxFixedArity = 0;
frontend$components$header$home_button.cljs$lang$applyTo = (function (arglist__47814){
var args__31746__auto__ = cljs.core.seq(arglist__47814);
return frontend$components$header$home_button__delegate(args__31746__auto__);
});
frontend$components$header$home_button.cljs$core$IFn$_invoke$arity$variadic = frontend$components$header$home_button__delegate;
return frontend$components$header$home_button;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47646 = comp__31745__auto__;
var G__47647 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47646,G__47647) : io.factorhouse.hsx.core.react_memo.call(null,G__47646,G__47647));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"home-button");

return comp__31745__auto__;
})();
frontend.components.header.current_local_uploadable_graph = (function frontend$components$header$current_local_uploadable_graph(db_rtc_uuid){
var current_repo = frontend.state.get_current_repo();
return cljs.core.some((function (p__47648){
var map__47649 = p__47648;
var map__47649__$1 = cljs.core.__destructure_map(map__47649);
var graph = map__47649__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47649__$1,new cljs.core.Keyword(null,"url","url",276297046));
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_repo,url);
if(and__5140__auto__){
return frontend.components.repo.local_uploadable_graph_QMARK_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(graph,new cljs.core.Keyword(null,"rtc-graph?","rtc-graph?",-203036448),cljs.core.boolean$(db_rtc_uuid)));
} else {
return and__5140__auto__;
}
})())){
return graph;
} else {
return null;
}
}),frontend.state.get_repos());
});
frontend.components.header._LT_load_rtc_graph_uuid = (function frontend$components$header$_LT_load_rtc_graph_uuid(repo,db_worker_ready_QMARK_){
if(cljs.core.truth_((function (){var and__5140__auto__ = repo;
if(cljs.core.truth_(and__5140__auto__)){
return db_worker_ready_QMARK_;
} else {
return and__5140__auto__;
}
})())){
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-rtc-graph-uuid","thread-api/get-rtc-graph-uuid",-249168913),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo], 0));
} else {
return null;
}
});
frontend.components.header.use_db_rtc_uuid = (function frontend$components$header$use_db_rtc_uuid(repo){
var vec__47650 = logseq.shui.hooks.use_state(null);
var db_rtc_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47650,(0),null);
var set_db_rtc_uuid_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47650,(1),null);
var db_worker_ready_QMARK_ = logseq.shui.hooks.use_atom_value(frontend.state.db_worker_ready_QMARK_);
logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5823__auto__ = frontend.components.header._LT_load_rtc_graph_uuid(repo,db_worker_ready_QMARK_);
if(cljs.core.truth_(temp__5823__auto__)){
var rtc_graph_uuid_request = temp__5823__auto__;
var cancelled_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(rtc_graph_uuid_request,(function (graph_uuid){
if(cljs.core.truth_(cljs.core.deref(cancelled_QMARK_))){
return null;
} else {
return (set_db_rtc_uuid_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_db_rtc_uuid_BANG_.cljs$core$IFn$_invoke$arity$1(graph_uuid) : set_db_rtc_uuid_BANG_.call(null,graph_uuid));
}
})),(function (_){
return null;
}));

return (function (){
return cljs.core.reset_BANG_(cancelled_QMARK_,true);
});
} else {
(set_db_rtc_uuid_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_db_rtc_uuid_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_db_rtc_uuid_BANG_.call(null,null));

return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,db_worker_ready_QMARK_], null));

return db_rtc_uuid;
});
frontend.components.header.current_remote_rtc_graph = (function frontend$components$header$current_remote_rtc_graph(current_repo,rtc_graphs){
return cljs.core.some((function (p1__47653_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_repo,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__47653_SHARP_))){
return p1__47653_SHARP_;
} else {
return null;
}
}),rtc_graphs);
});
frontend.components.header.rtc_indicator_visible_QMARK_ = (function frontend$components$header$rtc_indicator_visible_QMARK_(p__47654){
var map__47655 = p__47654;
var map__47655__$1 = cljs.core.__destructure_map(map__47655);
var current_repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47655__$1,new cljs.core.Keyword(null,"current-repo","current-repo",134812359));
var rtc_graphs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47655__$1,new cljs.core.Keyword(null,"rtc-graphs","rtc-graphs",-234997247));
var db_rtc_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47655__$1,new cljs.core.Keyword(null,"db-rtc-uuid","db-rtc-uuid",-1267582951));
var rtc_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47655__$1,new cljs.core.Keyword(null,"rtc-state","rtc-state",1931374921));
var logged_in_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47655__$1,new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089));
var rtc_group_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47655__$1,new cljs.core.Keyword(null,"rtc-group?","rtc-group?",2043094498));
var remote_graph = frontend.components.header.current_remote_rtc_graph(current_repo,rtc_graphs);
var remote_graph_uuid = (function (){var G__47656 = new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531).cljs$core$IFn$_invoke$arity$1(remote_graph);
if((G__47656 == null)){
return null;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47656));
}
})();
var state_graph_uuid = (function (){var G__47657 = new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522).cljs$core$IFn$_invoke$arity$1(rtc_state);
if((G__47657 == null)){
return null;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47657));
}
})();
var and__5140__auto__ = current_repo;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = logged_in_QMARK_;
if(cljs.core.truth_(and__5140__auto____$1)){
var and__5140__auto____$2 = rtc_group_QMARK_;
if(cljs.core.truth_(and__5140__auto____$2)){
var and__5140__auto____$3 = remote_graph;
if(cljs.core.truth_(and__5140__auto____$3)){
var or__5142__auto__ = db_rtc_uuid;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return ((cljs.core.seq(state_graph_uuid)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state_graph_uuid,remote_graph_uuid)));
}
} else {
return and__5140__auto____$3;
}
} else {
return and__5140__auto____$2;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
});
frontend.components.header.local_graph_sync_button = (function frontend$components$header$local_graph_sync_button(graph){
return frontend.ui.tooltip(logseq.shui.ui.button_ghost_icon(new cljs.core.Keyword(null,"cloud","cloud",-1976521303),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"local-graph-sync-btn",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.components.repo.upload_local_graph_with_confirm_BANG_(graph);
})], null)),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","use-sync-beta","graph/use-sync-beta",433246085)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"trigger-props","trigger-props",1619401213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-child","as-child",1364710342),true], null)], null));
});
frontend.components.header.rtc_collaborators = (function (){var render_fn__31744__auto__ = (function frontend$components$header$rtc_collaborators(){
var rtc_graph_id = frontend.components.header.use_db_rtc_uuid(frontend.state.get_current_repo());
var config = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415)], null));
var online_users = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rtc","state","rtc/state",-1988572624),new cljs.core.Keyword(null,"online-users","online-users",-747563810)], null));
if(cljs.core.truth_(rtc_graph_id)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rtc-collaborators.flex.gap-1.text-sm.bg-gray-01.items-center","div.rtc-collaborators.flex.gap-1.text-sm.bg-gray-01.items-center",751577578),logseq.shui.ui.button_ghost_icon(new cljs.core.Keyword(null,"user-plus","user-plus",-196932293),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__47658 = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-2.-mb-8","div.p-2.-mb-8",-765782485),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-3xl.-mt-2.-ml-2","h1.text-3xl.-mt-2.-ml-2",-1960111444),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("collaboration","members","collaboration/members",359531667)], 0))], null),frontend.components.settings.settings_collaboration()], null);
});
var G__47659 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"rtc-collaborators","rtc-collaborators",680405025)], null);
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2(G__47658,G__47659) : logseq.shui.ui.dialog_open_BANG_.call(null,G__47658,G__47659));
})], null)),((cljs.core.seq(online_users))?(function (){var iter__5628__auto__ = (function frontend$components$header$rtc_collaborators_$_iter__47660(s__47661){
return (new cljs.core.LazySeq(null,(function (){
var s__47661__$1 = s__47661;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__47661__$1);
if(temp__5825__auto__){
var s__47661__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47661__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__47661__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__47663 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__47662 = (0);
while(true){
if((i__47662 < size__5627__auto__)){
var map__47664 = cljs.core._nth(c__5626__auto__,i__47662);
var map__47664__$1 = cljs.core.__destructure_map(map__47664);
var user_email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47664__$1,new cljs.core.Keyword("user","email","user/email",1419686391));
var user_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47664__$1,new cljs.core.Keyword("user","name","user/name",1848814598));
var user_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47664__$1,new cljs.core.Keyword("user","uuid","user/uuid",2146253734));
if(cljs.core.truth_(user_name)){
var key = (""+"rtc-user-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = user_uuid;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = user_email;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return user_name;
}
}
})()));
cljs.core.chunk_append(b__47663,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),frontend.components.avatar.user_avatar(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-5 h-5",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-region","app-region",-1412948438),"no-drag"], null),new cljs.core.Keyword(null,"title","title",636505583),frontend.util.email.display_email(user_email,config),new cljs.core.Keyword(null,"name","name",1843675177),user_name,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),user_uuid,new cljs.core.Keyword(null,"fallback-props","fallback-props",722648746),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(11)], null)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__47815 = (i__47662 + (1));
i__47662 = G__47815;
continue;
} else {
var G__47816 = (i__47662 + (1));
i__47662 = G__47816;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47663),frontend$components$header$rtc_collaborators_$_iter__47660(cljs.core.chunk_rest(s__47661__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47663),null);
}
} else {
var map__47665 = cljs.core.first(s__47661__$2);
var map__47665__$1 = cljs.core.__destructure_map(map__47665);
var user_email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47665__$1,new cljs.core.Keyword("user","email","user/email",1419686391));
var user_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47665__$1,new cljs.core.Keyword("user","name","user/name",1848814598));
var user_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47665__$1,new cljs.core.Keyword("user","uuid","user/uuid",2146253734));
if(cljs.core.truth_(user_name)){
var key = (""+"rtc-user-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = user_uuid;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = user_email;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return user_name;
}
}
})()));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),frontend.components.avatar.user_avatar(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-5 h-5",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-region","app-region",-1412948438),"no-drag"], null),new cljs.core.Keyword(null,"title","title",636505583),frontend.util.email.display_email(user_email,config),new cljs.core.Keyword(null,"name","name",1843675177),user_name,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),user_uuid,new cljs.core.Keyword(null,"fallback-props","fallback-props",722648746),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(11)], null)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),frontend$components$header$rtc_collaborators_$_iter__47660(cljs.core.rest(s__47661__$2)));
} else {
var G__47817 = cljs.core.rest(s__47661__$2);
s__47661__$1 = G__47817;
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
return iter__5628__auto__(online_users);
})():null)], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$header$rtc_collaborators__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47666 = cljs.core.first(args__31746__auto__);
var G__47667 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47666,G__47667) : io.factorhouse.hsx.core.obj_get.call(null,G__47666,G__47667));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"rtc-collaborators","rtc-collaborators",-1974030744,null),args__31746__auto__),frontend$components$header$rtc_collaborators,args__31746__auto__,null);
}
};
var frontend$components$header$rtc_collaborators = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47818__i = 0, G__47818__a = new Array(arguments.length -  0);
while (G__47818__i < G__47818__a.length) {G__47818__a[G__47818__i] = arguments[G__47818__i + 0]; ++G__47818__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47818__a,0,null);
} 
return frontend$components$header$rtc_collaborators__delegate.call(this,args__31746__auto__);};
frontend$components$header$rtc_collaborators.cljs$lang$maxFixedArity = 0;
frontend$components$header$rtc_collaborators.cljs$lang$applyTo = (function (arglist__47819){
var args__31746__auto__ = cljs.core.seq(arglist__47819);
return frontend$components$header$rtc_collaborators__delegate(args__31746__auto__);
});
frontend$components$header$rtc_collaborators.cljs$core$IFn$_invoke$arity$variadic = frontend$components$header$rtc_collaborators__delegate;
return frontend$components$header$rtc_collaborators;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47668 = comp__31745__auto__;
var G__47669 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47668,G__47669) : io.factorhouse.hsx.core.react_memo.call(null,G__47668,G__47669));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"rtc-collaborators");

return comp__31745__auto__;
})();
frontend.components.header.left_menu_button = (function (){var render_fn__31744__auto__ = (function frontend$components$header$left_menu_button(p__47670){
var map__47671 = p__47670;
var map__47671__$1 = cljs.core.__destructure_map(map__47671);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47671__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return frontend.ui.with_shortcut(new cljs.core.Keyword("ui","toggle-left-sidebar","ui/toggle-left-sidebar",-468835605),"bottom",logseq.shui.ui.button_ghost_icon(new cljs.core.Keyword(null,"menu-2","menu-2",-758429341),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"left-menu",new cljs.core.Keyword(null,"class","class",-2030961996),"cp__header-left-menu",new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null)),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("header","toggle-left-sidebar","header/toggle-left-sidebar",-1152332042)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"trigger-props","trigger-props",1619401213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"left-menu"], null)], null));
});
var comp__31745__auto__ = (function() { 
var frontend$components$header$left_menu_button__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47672 = cljs.core.first(args__31746__auto__);
var G__47673 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47672,G__47673) : io.factorhouse.hsx.core.obj_get.call(null,G__47672,G__47673));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"left-menu-button","left-menu-button",-2029367623,null),args__31746__auto__),frontend$components$header$left_menu_button,args__31746__auto__,null);
}
};
var frontend$components$header$left_menu_button = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47820__i = 0, G__47820__a = new Array(arguments.length -  0);
while (G__47820__i < G__47820__a.length) {G__47820__a[G__47820__i] = arguments[G__47820__i + 0]; ++G__47820__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47820__a,0,null);
} 
return frontend$components$header$left_menu_button__delegate.call(this,args__31746__auto__);};
frontend$components$header$left_menu_button.cljs$lang$maxFixedArity = 0;
frontend$components$header$left_menu_button.cljs$lang$applyTo = (function (arglist__47821){
var args__31746__auto__ = cljs.core.seq(arglist__47821);
return frontend$components$header$left_menu_button__delegate(args__31746__auto__);
});
frontend$components$header$left_menu_button.cljs$core$IFn$_invoke$arity$variadic = frontend$components$header$left_menu_button__delegate;
return frontend$components$header$left_menu_button;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47674 = comp__31745__auto__;
var G__47675 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47674,G__47675) : io.factorhouse.hsx.core.react_memo.call(null,G__47674,G__47675));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"left-menu-button");

return comp__31745__auto__;
})();
frontend.components.header.bug_report_url = (function frontend$components$header$bug_report_url(){
var ua = navigator.userAgent;
var safe_ua = clojure.string.replace(ua,/[^_\/a-zA-Z0-9\.\(\)]+/," ");
var installed_plugins = frontend.state.get_state(new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034));
var platform = (""+"App Version: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.version.version)+"\n"+"Git Revision: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.version.revision())+"\n"+"Platform: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(safe_ua)+"\n"+"Language: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(navigator.language)+"\n"+"Plugins: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47680){
var vec__47681 = p__47680;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47681,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47681,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(v))+")");
}),installed_plugins))));
return (""+"https://github.com/logseq/db-test/issues/new?"+"title=&"+"template=bug_report.yaml&"+"labels=from:in-app&"+"platform="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(platform)));
});
frontend.components.header.stop_event_BANG_ = (function frontend$components$header$stop_event_BANG_(e){
e.preventDefault();

return e.stopPropagation();
});
frontend.components.header.toolbar_dots_menu_content = (function (){var render_fn__31744__auto__ = (function frontend$components$header$toolbar_dots_menu_content(p__47684,page,favorited_QMARK_,recycle_page_QMARK_){
var map__47685 = p__47684;
var map__47685__$1 = cljs.core.__destructure_map(map__47685);
var current_repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47685__$1,new cljs.core.Keyword(null,"current-repo","current-repo",134812359));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47685__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var db_restoring_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","restoring?","db/restoring?",-1653366233)], null));
var working_page_QMARK_ = cljs.core.not(db_restoring_QMARK_);
var page_menu = (cljs.core.truth_(page)?(cljs.core.truth_((function (){var and__5140__auto__ = working_page_QMARK_;
if(and__5140__auto__){
return frontend.util.entity.page_QMARK_(page);
} else {
return and__5140__auto__;
}
})())?frontend.components.page_menu.page_menu(page,favorited_QMARK_):((frontend.config.publishing_QMARK_)?null:(function (){var block_id_str = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(favorited_QMARK_)?(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("page","unfavorite","page/unfavorite",578994300)) : t.call(null,new cljs.core.Keyword("page","unfavorite","page/unfavorite",578994300))):(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("page","add-to-favorites","page/add-to-favorites",-641181093)) : t.call(null,new cljs.core.Keyword("page","add-to-favorites","page/add-to-favorites",-641181093)))),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(favorited_QMARK_)){
return frontend.handler.page._LT_unfavorite_page_BANG_(block_id_str);
} else {
return frontend.handler.page._LT_favorite_page_BANG_(block_id_str);
}
})], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("publish","dialog-title","publish/dialog-title",2004923898)) : t.call(null,new cljs.core.Keyword("publish","dialog-title","publish/dialog-title",2004923898))),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__47686 = (function (){
return frontend.components.page_menu.publish_page_dialog(page);
});
var G__47687 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-auto max-w-md"], null);
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$2(G__47686,G__47687) : logseq.shui.ui.dialog_open_BANG_.call(null,G__47686,G__47687));
})], null)], null)], null);
})())):null);
var page_menu_and_hr = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(page_menu,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hr","hr",1377740067),true], null)], null));
var login_QMARK_ = (function (){var and__5140__auto__ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("auth","id-token","auth/id-token",-332149946)], null));
if(cljs.core.truth_(and__5140__auto__)){
return frontend.handler.user.logged_in_QMARK_();
} else {
return and__5140__auto__;
}
})();
var items = (function (){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(page_menu_and_hr,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(frontend.state.enable_editing_QMARK_())?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nav","settings","nav/settings",1557080534)) : t.call(null,new cljs.core.Keyword("nav","settings","nav/settings",1557080534))),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.state.open_settings_BANG_], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon("settings")], null):null),(cljs.core.truth_(frontend.config.lsp_enabled_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nav","plugins","nav/plugins",1900047380)) : t.call(null,new cljs.core.Keyword("nav","plugins","nav/plugins",1900047380))),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.plugin.goto_plugins_dashboard_BANG_();
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon("apps")], null):null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nav","appearance","nav/appearance",-216210757)) : t.call(null,new cljs.core.Keyword("nav","appearance","nav/appearance",-216210757))),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","toggle-appearance","ui/toggle-appearance",1527686942)], null));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon("color-swatch")], null),(cljs.core.truth_(recycle_page_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("storage.recycle","title","storage.recycle/title",-1988135985)) : t.call(null,new cljs.core.Keyword("storage.recycle","title","storage.recycle/title",-1988135985))),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.page.open_recycle_BANG_], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon("trash")], null):null),(cljs.core.truth_(current_repo)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("export","graph","export/graph",297159273)) : t.call(null,new cljs.core.Keyword("export","graph","export/graph",297159273))),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.components.export$.export$) : logseq.shui.ui.dialog_open_BANG_.call(null,frontend.components.export$.export$));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon("database-export")], null):null),(cljs.core.truth_((function (){var and__5140__auto__ = current_repo;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.state.enable_editing_QMARK_();
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("import","title","import/title",1984896332)) : t.call(null,new cljs.core.Keyword("import","title","import/title",1984896332))),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"import","import",-1399500709))], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon("file-upload")], null):null),((frontend.config.publishing_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ui","toggle-theme","ui/toggle-theme",-91905800)) : t.call(null,new cljs.core.Keyword("ui","toggle-theme","ui/toggle-theme",-91905800))),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.toggle_theme_BANG_();
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon("bulb")], null):null),(cljs.core.truth_((function (){var or__5142__auto__ = frontend.config.publishing_QMARK_;
if(or__5142__auto__){
return or__5142__auto__;
} else {
return login_QMARK_;
}
})())?null:new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ui","login","ui/login",55212987)) : t.call(null,new cljs.core.Keyword("ui","login","ui/login",55212987))),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","login","user/login",51503538)], null));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon("user")], null)),(cljs.core.truth_(login_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hr","hr",1377740067),true], null):null),(cljs.core.truth_(login_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.flex-col.relative.group.pt-1.w-full","span.flex.flex-col.relative.group.pt-1.w-full",243573534),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b.leading-none","b.leading-none",-836005278),frontend.handler.user.username()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.opacity-70","small.opacity-70",-476663833),frontend.components.email.email_address(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"email","email",1415816706),frontend.handler.user.email()], null))], null),frontend.ui.tooltip((function (){var G__47688 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"class","class",-2030961996),"absolute right-1 top-3 h-auto w-auto min-w-0 border-0 bg-transparent p-0 text-red-rx-09 opacity-0 group-hover:opacity-100",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ui","logout","ui/logout",1418560917)) : t.call(null,new cljs.core.Keyword("ui","logout","ui/logout",1418560917))),new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),frontend.components.header.stop_event_BANG_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.components.header.stop_event_BANG_(e);

frontend.handler.user.logout();

return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.popup_hide_BANG_.call(null));
})], null);
var G__47689 = frontend.ui.icon("logout");
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__47688,G__47689) : logseq.shui.ui.button.call(null,G__47688,G__47689));
})(),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ui","logout","ui/logout",1418560917)) : t.call(null,new cljs.core.Keyword("ui","logout","ui/logout",1418560917))))], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),(function (e){
return e.preventDefault();
}),new cljs.core.Keyword(null,"class","class",-2030961996),"w-full"], null)], null):null)], null)));
});
return frontend.ui.tooltip(logseq.shui.ui.button_ghost_icon(new cljs.core.Keyword(null,"dots","dots",714343900),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"toolbar-dots-btn",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var G__47690 = e.currentTarget;
var G__47691 = (function (p__47693){
var map__47694 = p__47693;
var map__47694__$1 = cljs.core.__destructure_map(map__47694);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47694__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var iter__5628__auto__ = (function frontend$components$header$toolbar_dots_menu_content_$_iter__47695(s__47696){
return (new cljs.core.LazySeq(null,(function (){
var s__47696__$1 = s__47696;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__47696__$1);
if(temp__5825__auto__){
var s__47696__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47696__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__47696__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__47698 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__47697 = (0);
while(true){
if((i__47697 < size__5627__auto__)){
var vec__47699 = cljs.core._nth(c__5626__auto__,i__47697);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47699,(0),null);
var map__47702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47699,(1),null);
var map__47702__$1 = cljs.core.__destructure_map(map__47702);
var hr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47702__$1,new cljs.core.Keyword(null,"hr","hr",1377740067));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47702__$1,new cljs.core.Keyword(null,"item","item",249373802));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47702__$1,new cljs.core.Keyword(null,"title","title",636505583));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47702__$1,new cljs.core.Keyword(null,"options","options",99638489));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47702__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
cljs.core.chunk_append(b__47698,(function (){var on_click_SINGLEQUOTE_ = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(options);
var href = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(options);
var key = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(hr)?"separator-":"item-"))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx));
}
})();
if(cljs.core.truth_(hr)){
return module$node_modules$react$index.cloneElement((function (){var G__47703 = cljs.core.PersistentArrayMap.EMPTY;
return (logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$1(G__47703) : logseq.shui.ui.dropdown_menu_separator.call(null,G__47703));
})(),({"key": (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key))}));
} else {
return module$node_modules$react$index.cloneElement((function (){var G__47704 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__47697,on_click_SINGLEQUOTE_,href,key,vec__47699,idx,map__47702,map__47702__$1,hr,item,title,options,icon,c__5626__auto__,size__5627__auto__,b__47698,s__47696__$2,temp__5825__auto__,map__47694,map__47694__$1,id,G__47690,db_restoring_QMARK_,working_page_QMARK_,page_menu,page_menu_and_hr,login_QMARK_,items,map__47685,map__47685__$1,current_repo,t){
return (function (e__$1){
if(cljs.core.truth_(on_click_SINGLEQUOTE_)){
if((on_click_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? on_click_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(e__$1) : on_click_SINGLEQUOTE_.call(null,e__$1)) === false){
return null;
} else {
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(id) : logseq.shui.ui.popup_hide_BANG_.call(null,id));
}
} else {
return null;
}
});})(i__47697,on_click_SINGLEQUOTE_,href,key,vec__47699,idx,map__47702,map__47702__$1,hr,item,title,options,icon,c__5626__auto__,size__5627__auto__,b__47698,s__47696__$2,temp__5825__auto__,map__47694,map__47694__$1,id,G__47690,db_restoring_QMARK_,working_page_QMARK_,page_menu,page_menu_and_hr,login_QMARK_,items,map__47685,map__47685__$1,current_repo,t))
);
var G__47705 = (function (){var or__5142__auto__ = item;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.truth_(href)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.items-center.w-full","a.flex.items-center.w-full",578384940),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__47697,or__5142__auto__,G__47704,on_click_SINGLEQUOTE_,href,key,vec__47699,idx,map__47702,map__47702__$1,hr,item,title,options,icon,c__5626__auto__,size__5627__auto__,b__47698,s__47696__$2,temp__5825__auto__,map__47694,map__47694__$1,id,G__47690,db_restoring_QMARK_,working_page_QMARK_,page_menu,page_menu_and_hr,login_QMARK_,items,map__47685,map__47685__$1,current_repo,t){
return (function (){
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(id) : logseq.shui.ui.popup_hide_BANG_.call(null,id));
});})(i__47697,or__5142__auto__,G__47704,on_click_SINGLEQUOTE_,href,key,vec__47699,idx,map__47702,map__47702__$1,hr,item,title,options,icon,c__5626__auto__,size__5627__auto__,b__47698,s__47696__$2,temp__5825__auto__,map__47694,map__47694__$1,id,G__47690,db_restoring_QMARK_,working_page_QMARK_,page_menu,page_menu_and_hr,login_QMARK_,items,map__47685,map__47685__$1,current_repo,t))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"inherit"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1.w-full","span.flex.items-center.gap-1.w-full",1802139938),icon,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),title], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1.w-full","span.flex.items-center.gap-1.w-full",1802139938),icon,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),title], null)], null);
}
}
})();
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__47704,G__47705) : logseq.shui.ui.dropdown_menu_item.call(null,G__47704,G__47705));
})(),({"key": (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key))}));
}
})());

var G__47822 = (i__47697 + (1));
i__47697 = G__47822;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47698),frontend$components$header$toolbar_dots_menu_content_$_iter__47695(cljs.core.chunk_rest(s__47696__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47698),null);
}
} else {
var vec__47706 = cljs.core.first(s__47696__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47706,(0),null);
var map__47709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47706,(1),null);
var map__47709__$1 = cljs.core.__destructure_map(map__47709);
var hr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47709__$1,new cljs.core.Keyword(null,"hr","hr",1377740067));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47709__$1,new cljs.core.Keyword(null,"item","item",249373802));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47709__$1,new cljs.core.Keyword(null,"title","title",636505583));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47709__$1,new cljs.core.Keyword(null,"options","options",99638489));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47709__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
return cljs.core.cons((function (){var on_click_SINGLEQUOTE_ = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(options);
var href = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(options);
var key = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(hr)?"separator-":"item-"))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx));
}
})();
if(cljs.core.truth_(hr)){
return module$node_modules$react$index.cloneElement((function (){var G__47710 = cljs.core.PersistentArrayMap.EMPTY;
return (logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dropdown_menu_separator.cljs$core$IFn$_invoke$arity$1(G__47710) : logseq.shui.ui.dropdown_menu_separator.call(null,G__47710));
})(),({"key": (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key))}));
} else {
return module$node_modules$react$index.cloneElement((function (){var G__47711 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (on_click_SINGLEQUOTE_,href,key,vec__47706,idx,map__47709,map__47709__$1,hr,item,title,options,icon,s__47696__$2,temp__5825__auto__,map__47694,map__47694__$1,id,G__47690,db_restoring_QMARK_,working_page_QMARK_,page_menu,page_menu_and_hr,login_QMARK_,items,map__47685,map__47685__$1,current_repo,t){
return (function (e__$1){
if(cljs.core.truth_(on_click_SINGLEQUOTE_)){
if((on_click_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? on_click_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(e__$1) : on_click_SINGLEQUOTE_.call(null,e__$1)) === false){
return null;
} else {
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(id) : logseq.shui.ui.popup_hide_BANG_.call(null,id));
}
} else {
return null;
}
});})(on_click_SINGLEQUOTE_,href,key,vec__47706,idx,map__47709,map__47709__$1,hr,item,title,options,icon,s__47696__$2,temp__5825__auto__,map__47694,map__47694__$1,id,G__47690,db_restoring_QMARK_,working_page_QMARK_,page_menu,page_menu_and_hr,login_QMARK_,items,map__47685,map__47685__$1,current_repo,t))
);
var G__47712 = (function (){var or__5142__auto__ = item;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.truth_(href)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.items-center.w-full","a.flex.items-center.w-full",578384940),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (or__5142__auto__,G__47711,on_click_SINGLEQUOTE_,href,key,vec__47706,idx,map__47709,map__47709__$1,hr,item,title,options,icon,s__47696__$2,temp__5825__auto__,map__47694,map__47694__$1,id,G__47690,db_restoring_QMARK_,working_page_QMARK_,page_menu,page_menu_and_hr,login_QMARK_,items,map__47685,map__47685__$1,current_repo,t){
return (function (){
return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(id) : logseq.shui.ui.popup_hide_BANG_.call(null,id));
});})(or__5142__auto__,G__47711,on_click_SINGLEQUOTE_,href,key,vec__47706,idx,map__47709,map__47709__$1,hr,item,title,options,icon,s__47696__$2,temp__5825__auto__,map__47694,map__47694__$1,id,G__47690,db_restoring_QMARK_,working_page_QMARK_,page_menu,page_menu_and_hr,login_QMARK_,items,map__47685,map__47685__$1,current_repo,t))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"inherit"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1.w-full","span.flex.items-center.gap-1.w-full",1802139938),icon,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),title], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1.w-full","span.flex.items-center.gap-1.w-full",1802139938),icon,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),title], null)], null);
}
}
})();
return (logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_item.cljs$core$IFn$_invoke$arity$2(G__47711,G__47712) : logseq.shui.ui.dropdown_menu_item.call(null,G__47711,G__47712));
})(),({"key": (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key))}));
}
})(),frontend$components$header$toolbar_dots_menu_content_$_iter__47695(cljs.core.rest(s__47696__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,items()));
});
var G__47692 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"align","align",1964212802),"end",new cljs.core.Keyword(null,"as-dropdown?","as-dropdown?",-37553558),true,new cljs.core.Keyword(null,"focus-trigger?","focus-trigger?",799847826),false,new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-64",new cljs.core.Keyword(null,"align-offset","align-offset",894421035),(-32)], null)], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__47690,G__47691,G__47692) : logseq.shui.ui.popup_show_BANG_.call(null,G__47690,G__47691,G__47692));
})], null)),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("header","more","header/more",1258535361)) : t.call(null,new cljs.core.Keyword("header","more","header/more",1258535361))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"trigger-props","trigger-props",1619401213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-child","as-child",1364710342),true], null)], null));
});
var comp__31745__auto__ = (function() { 
var frontend$components$header$toolbar_dots_menu_content__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47713 = cljs.core.first(args__31746__auto__);
var G__47714 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47713,G__47714) : io.factorhouse.hsx.core.obj_get.call(null,G__47713,G__47714));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"toolbar-dots-menu-content","toolbar-dots-menu-content",-1946603937,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$header$toolbar_dots_menu_content,args__31746__auto__,null);
}
};
var frontend$components$header$toolbar_dots_menu_content = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47823__i = 0, G__47823__a = new Array(arguments.length -  0);
while (G__47823__i < G__47823__a.length) {G__47823__a[G__47823__i] = arguments[G__47823__i + 0]; ++G__47823__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47823__a,0,null);
} 
return frontend$components$header$toolbar_dots_menu_content__delegate.call(this,args__31746__auto__);};
frontend$components$header$toolbar_dots_menu_content.cljs$lang$maxFixedArity = 0;
frontend$components$header$toolbar_dots_menu_content.cljs$lang$applyTo = (function (arglist__47824){
var args__31746__auto__ = cljs.core.seq(arglist__47824);
return frontend$components$header$toolbar_dots_menu_content__delegate(args__31746__auto__);
});
frontend$components$header$toolbar_dots_menu_content.cljs$core$IFn$_invoke$arity$variadic = frontend$components$header$toolbar_dots_menu_content__delegate;
return frontend$components$header$toolbar_dots_menu_content;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47715 = comp__31745__auto__;
var G__47716 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47715,G__47716) : io.factorhouse.hsx.core.react_memo.call(null,G__47715,G__47716));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"toolbar-dots-menu-content");

return comp__31745__auto__;
})();
frontend.components.header.toolbar_dots_menu_page = (function (){var render_fn__31744__auto__ = (function frontend$components$header$toolbar_dots_menu_page(opts,page_uuid,recycle_page_QMARK_){
var page = frontend.db.hooks.use_block(page_uuid);
var favorited_QMARK_ = frontend.db.hooks.use_resource(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"favorite-status","favorite-status",259358769),page_uuid], null));
return frontend.components.header.toolbar_dots_menu_content(opts,page,favorited_QMARK_,recycle_page_QMARK_);
});
var comp__31745__auto__ = (function() { 
var frontend$components$header$toolbar_dots_menu_page__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47717 = cljs.core.first(args__31746__auto__);
var G__47718 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47717,G__47718) : io.factorhouse.hsx.core.obj_get.call(null,G__47717,G__47718));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"toolbar-dots-menu-page","toolbar-dots-menu-page",735232176,null),args__31746__auto__),frontend$components$header$toolbar_dots_menu_page,args__31746__auto__,null);
}
};
var frontend$components$header$toolbar_dots_menu_page = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47825__i = 0, G__47825__a = new Array(arguments.length -  0);
while (G__47825__i < G__47825__a.length) {G__47825__a[G__47825__i] = arguments[G__47825__i + 0]; ++G__47825__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47825__a,0,null);
} 
return frontend$components$header$toolbar_dots_menu_page__delegate.call(this,args__31746__auto__);};
frontend$components$header$toolbar_dots_menu_page.cljs$lang$maxFixedArity = 0;
frontend$components$header$toolbar_dots_menu_page.cljs$lang$applyTo = (function (arglist__47826){
var args__31746__auto__ = cljs.core.seq(arglist__47826);
return frontend$components$header$toolbar_dots_menu_page__delegate(args__31746__auto__);
});
frontend$components$header$toolbar_dots_menu_page.cljs$core$IFn$_invoke$arity$variadic = frontend$components$header$toolbar_dots_menu_page__delegate;
return frontend$components$header$toolbar_dots_menu_page;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47719 = comp__31745__auto__;
var G__47720 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47719,G__47720) : io.factorhouse.hsx.core.react_memo.call(null,G__47719,G__47720));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"toolbar-dots-menu-page");

return comp__31745__auto__;
})();
frontend.components.header.toolbar_dots_menu_lookup = (function (){var render_fn__31744__auto__ = (function frontend$components$header$toolbar_dots_menu_lookup(opts,page_lookup,recycle_page_QMARK_){
var page_uuid = frontend.db.hooks.use_resource(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-identity","page-identity",-899314184),page_lookup], null));
if(cljs.core.truth_(page_uuid)){
return frontend.components.header.toolbar_dots_menu_page(opts,page_uuid,recycle_page_QMARK_);
} else {
return frontend.components.header.toolbar_dots_menu_content(opts,null,false,recycle_page_QMARK_);
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$header$toolbar_dots_menu_lookup__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47721 = cljs.core.first(args__31746__auto__);
var G__47722 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47721,G__47722) : io.factorhouse.hsx.core.obj_get.call(null,G__47721,G__47722));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"toolbar-dots-menu-lookup","toolbar-dots-menu-lookup",-1318134373,null),args__31746__auto__),frontend$components$header$toolbar_dots_menu_lookup,args__31746__auto__,null);
}
};
var frontend$components$header$toolbar_dots_menu_lookup = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47827__i = 0, G__47827__a = new Array(arguments.length -  0);
while (G__47827__i < G__47827__a.length) {G__47827__a[G__47827__i] = arguments[G__47827__i + 0]; ++G__47827__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47827__a,0,null);
} 
return frontend$components$header$toolbar_dots_menu_lookup__delegate.call(this,args__31746__auto__);};
frontend$components$header$toolbar_dots_menu_lookup.cljs$lang$maxFixedArity = 0;
frontend$components$header$toolbar_dots_menu_lookup.cljs$lang$applyTo = (function (arglist__47828){
var args__31746__auto__ = cljs.core.seq(arglist__47828);
return frontend$components$header$toolbar_dots_menu_lookup__delegate(args__31746__auto__);
});
frontend$components$header$toolbar_dots_menu_lookup.cljs$core$IFn$_invoke$arity$variadic = frontend$components$header$toolbar_dots_menu_lookup__delegate;
return frontend$components$header$toolbar_dots_menu_lookup;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47723 = comp__31745__auto__;
var G__47724 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47723,G__47724) : io.factorhouse.hsx.core.react_memo.call(null,G__47723,G__47724));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"toolbar-dots-menu-lookup");

return comp__31745__auto__;
})();
frontend.components.header.toolbar_dots_menu_ready = (function (){var render_fn__31744__auto__ = (function frontend$components$header$toolbar_dots_menu_ready(opts){
var _route_match = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-match","route-match",-1450985937)], null));
var current_page = frontend.components.right_sidebar.get_current_page();
var page_lookup = (cljs.core.truth_(current_page)?(cljs.core.truth_((frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1(current_page) : frontend.util.uuid_string_QMARK_.call(null,current_page)))?cljs.core.uuid(current_page):current_page):null);
var recycle_page_uuid = frontend.db.hooks.use_resource(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-identity","page-identity",-899314184),logseq.common.config.recycle_page_name], null));
var recycle_page_QMARK_ = (!((recycle_page_uuid == null)));
if(cljs.core.truth_(page_lookup)){
return frontend.components.header.toolbar_dots_menu_lookup(opts,page_lookup,recycle_page_QMARK_);
} else {
return frontend.components.header.toolbar_dots_menu_content(opts,null,false,recycle_page_QMARK_);
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$header$toolbar_dots_menu_ready__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47725 = cljs.core.first(args__31746__auto__);
var G__47726 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47725,G__47726) : io.factorhouse.hsx.core.obj_get.call(null,G__47725,G__47726));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"toolbar-dots-menu-ready","toolbar-dots-menu-ready",1251456958,null),args__31746__auto__),frontend$components$header$toolbar_dots_menu_ready,args__31746__auto__,null);
}
};
var frontend$components$header$toolbar_dots_menu_ready = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47829__i = 0, G__47829__a = new Array(arguments.length -  0);
while (G__47829__i < G__47829__a.length) {G__47829__a[G__47829__i] = arguments[G__47829__i + 0]; ++G__47829__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47829__a,0,null);
} 
return frontend$components$header$toolbar_dots_menu_ready__delegate.call(this,args__31746__auto__);};
frontend$components$header$toolbar_dots_menu_ready.cljs$lang$maxFixedArity = 0;
frontend$components$header$toolbar_dots_menu_ready.cljs$lang$applyTo = (function (arglist__47830){
var args__31746__auto__ = cljs.core.seq(arglist__47830);
return frontend$components$header$toolbar_dots_menu_ready__delegate(args__31746__auto__);
});
frontend$components$header$toolbar_dots_menu_ready.cljs$core$IFn$_invoke$arity$variadic = frontend$components$header$toolbar_dots_menu_ready__delegate;
return frontend$components$header$toolbar_dots_menu_ready;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47727 = comp__31745__auto__;
var G__47728 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47727,G__47728) : io.factorhouse.hsx.core.react_memo.call(null,G__47727,G__47728));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"toolbar-dots-menu-ready");

return comp__31745__auto__;
})();
frontend.components.header.toolbar_dots_menu = (function (){var render_fn__31744__auto__ = (function frontend$components$header$toolbar_dots_menu(opts){
var db_restoring_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","restoring?","db/restoring?",-1653366233)], null));
if(cljs.core.truth_(db_restoring_QMARK_)){
return frontend.components.header.toolbar_dots_menu_content(opts,null,false,false);
} else {
return frontend.components.header.toolbar_dots_menu_ready(opts);
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$header$toolbar_dots_menu__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47729 = cljs.core.first(args__31746__auto__);
var G__47730 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47729,G__47730) : io.factorhouse.hsx.core.obj_get.call(null,G__47729,G__47730));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"toolbar-dots-menu","toolbar-dots-menu",-968273577,null),args__31746__auto__),frontend$components$header$toolbar_dots_menu,args__31746__auto__,null);
}
};
var frontend$components$header$toolbar_dots_menu = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47831__i = 0, G__47831__a = new Array(arguments.length -  0);
while (G__47831__i < G__47831__a.length) {G__47831__a[G__47831__i] = arguments[G__47831__i + 0]; ++G__47831__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47831__a,0,null);
} 
return frontend$components$header$toolbar_dots_menu__delegate.call(this,args__31746__auto__);};
frontend$components$header$toolbar_dots_menu.cljs$lang$maxFixedArity = 0;
frontend$components$header$toolbar_dots_menu.cljs$lang$applyTo = (function (arglist__47832){
var args__31746__auto__ = cljs.core.seq(arglist__47832);
return frontend$components$header$toolbar_dots_menu__delegate(args__31746__auto__);
});
frontend$components$header$toolbar_dots_menu.cljs$core$IFn$_invoke$arity$variadic = frontend$components$header$toolbar_dots_menu__delegate;
return frontend$components$header$toolbar_dots_menu;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47731 = comp__31745__auto__;
var G__47732 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47731,G__47732) : io.factorhouse.hsx.core.react_memo.call(null,G__47731,G__47732));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"toolbar-dots-menu");

return comp__31745__auto__;
})();
frontend.components.header.back_and_forward = (function (){var render_fn__31744__auto__ = (function frontend$components$header$back_and_forward(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row","div.flex.flex-row",209103675),frontend.ui.with_shortcut(new cljs.core.Keyword("go","backward","go/backward",554039684),"bottom",logseq.shui.ui.button_ghost_icon(new cljs.core.Keyword(null,"arrow-left","arrow-left",588569792),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return window.history.back();
}),new cljs.core.Keyword(null,"class","class",-2030961996),"it navigation nav-left"], null)),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("header","go-back","header/go-back",852769152)], 0))),frontend.ui.with_shortcut(new cljs.core.Keyword("go","forward","go/forward",-557348207),"bottom",logseq.shui.ui.button_ghost_icon(new cljs.core.Keyword(null,"arrow-right","arrow-right",1734868482),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return window.history.forward();
}),new cljs.core.Keyword(null,"class","class",-2030961996),"it navigation nav-right"], null)),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("header","go-forward","header/go-forward",-788133303)], 0)))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$header$back_and_forward__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47733 = cljs.core.first(args__31746__auto__);
var G__47734 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47733,G__47734) : io.factorhouse.hsx.core.obj_get.call(null,G__47733,G__47734));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"back-and-forward","back-and-forward",1938169132,null),args__31746__auto__),frontend$components$header$back_and_forward,args__31746__auto__,null);
}
};
var frontend$components$header$back_and_forward = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47833__i = 0, G__47833__a = new Array(arguments.length -  0);
while (G__47833__i < G__47833__a.length) {G__47833__a[G__47833__i] = arguments[G__47833__i + 0]; ++G__47833__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47833__a,0,null);
} 
return frontend$components$header$back_and_forward__delegate.call(this,args__31746__auto__);};
frontend$components$header$back_and_forward.cljs$lang$maxFixedArity = 0;
frontend$components$header$back_and_forward.cljs$lang$applyTo = (function (arglist__47834){
var args__31746__auto__ = cljs.core.seq(arglist__47834);
return frontend$components$header$back_and_forward__delegate(args__31746__auto__);
});
frontend$components$header$back_and_forward.cljs$core$IFn$_invoke$arity$variadic = frontend$components$header$back_and_forward__delegate;
return frontend$components$header$back_and_forward;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47735 = comp__31745__auto__;
var G__47736 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47735,G__47736) : io.factorhouse.hsx.core.react_memo.call(null,G__47735,G__47736));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"back-and-forward");

return comp__31745__auto__;
})();
frontend.components.header.updater_tips_new_version = (function (){var render_fn__31744__auto__ = (function frontend$components$header$updater_tips_new_version(t){
var vec__47737 = logseq.shui.hooks.use_state(null);
var downloaded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47737,(0),null);
var set_downloaded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47737,(1),null);
var _ = logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(electron.ipc.invoke("get-downloaded-update"),(function (args){
if(cljs.core.truth_(args)){
var args__$1 = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(args);
(set_downloaded.cljs$core$IFn$_invoke$arity$1 ? set_downloaded.cljs$core$IFn$_invoke$arity$1(args__$1) : set_downloaded.call(null,args__$1));

return frontend.state.set_state_BANG_(new cljs.core.Keyword("electron","auto-updater-downloaded","electron/auto-updater-downloaded",760067750),args__$1);
} else {
return null;
}
})),(function (_){
return null;
}));

var channel = "auto-updater-downloaded";
var callback = (function (_,args){
console.debug("[new-version downloaded] args:",args);

var args_47835__$1 = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(args);
(set_downloaded.cljs$core$IFn$_invoke$arity$1 ? set_downloaded.cljs$core$IFn$_invoke$arity$1(args_47835__$1) : set_downloaded.call(null,args_47835__$1));

frontend.state.set_state_BANG_(new cljs.core.Keyword("electron","auto-updater-downloaded","electron/auto-updater-downloaded",760067750),args_47835__$1);

return null;
});
apis.addListener(channel,callback);

return (function (){
return apis.removeListener(channel,callback);
});
} else {
return null;
}
}),cljs.core.PersistentVector.EMPTY);
if(cljs.core.truth_(downloaded)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__header-tips","div.cp__header-tips",-1410043626),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("updater","update-ready-to-install","updater/update-ready-to-install",704979512)) : t.call(null,new cljs.core.Keyword("updater","update-ready-to-install","updater/update-ready-to-install",704979512))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.restart.ml-2","a.restart.ml-2",-482220742),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.quit_and_install_new_version_BANG_();
})], null),frontend.components.svg.reload.cljs$core$IFn$_invoke$arity$1((16)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("updater","quit-and-install","updater/quit-and-install",-1112335838)) : t.call(null,new cljs.core.Keyword("updater","quit-and-install","updater/quit-and-install",-1112335838)))], null)], null)], null)], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$header$updater_tips_new_version__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47740 = cljs.core.first(args__31746__auto__);
var G__47741 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47740,G__47741) : io.factorhouse.hsx.core.obj_get.call(null,G__47740,G__47741));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"updater-tips-new-version","updater-tips-new-version",-948751898,null),args__31746__auto__),frontend$components$header$updater_tips_new_version,args__31746__auto__,null);
}
};
var frontend$components$header$updater_tips_new_version = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47836__i = 0, G__47836__a = new Array(arguments.length -  0);
while (G__47836__i < G__47836__a.length) {G__47836__a[G__47836__i] = arguments[G__47836__i + 0]; ++G__47836__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47836__a,0,null);
} 
return frontend$components$header$updater_tips_new_version__delegate.call(this,args__31746__auto__);};
frontend$components$header$updater_tips_new_version.cljs$lang$maxFixedArity = 0;
frontend$components$header$updater_tips_new_version.cljs$lang$applyTo = (function (arglist__47837){
var args__31746__auto__ = cljs.core.seq(arglist__47837);
return frontend$components$header$updater_tips_new_version__delegate(args__31746__auto__);
});
frontend$components$header$updater_tips_new_version.cljs$core$IFn$_invoke$arity$variadic = frontend$components$header$updater_tips_new_version__delegate;
return frontend$components$header$updater_tips_new_version;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47742 = comp__31745__auto__;
var G__47743 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47742,G__47743) : io.factorhouse.hsx.core.react_memo.call(null,G__47742,G__47743));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"updater-tips-new-version");

return comp__31745__auto__;
})();
frontend.components.header.clear_recent_highlight_BANG_ = (function frontend$components$header$clear_recent_highlight_BANG_(){
var nodes = dommy.utils.__GT_Array(document.getElementsByClassName("recent-block"));
if(cljs.core.seq(nodes)){
var seq__47744 = cljs.core.seq(nodes);
var chunk__47745 = null;
var count__47746 = (0);
var i__47747 = (0);
while(true){
if((i__47747 < count__47746)){
var node = chunk__47745.cljs$core$IIndexed$_nth$arity$2(null,i__47747);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(node,"recent-block");


var G__47838 = seq__47744;
var G__47839 = chunk__47745;
var G__47840 = count__47746;
var G__47841 = (i__47747 + (1));
seq__47744 = G__47838;
chunk__47745 = G__47839;
count__47746 = G__47840;
i__47747 = G__47841;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__47744);
if(temp__5825__auto__){
var seq__47744__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47744__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__47744__$1);
var G__47842 = cljs.core.chunk_rest(seq__47744__$1);
var G__47843 = c__5673__auto__;
var G__47844 = cljs.core.count(c__5673__auto__);
var G__47845 = (0);
seq__47744 = G__47842;
chunk__47745 = G__47843;
count__47746 = G__47844;
i__47747 = G__47845;
continue;
} else {
var node = cljs.core.first(seq__47744__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(node,"recent-block");


var G__47846 = cljs.core.next(seq__47744__$1);
var G__47847 = null;
var G__47848 = (0);
var G__47849 = (0);
seq__47744 = G__47846;
chunk__47745 = G__47847;
count__47746 = G__47848;
i__47747 = G__47849;
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
});
frontend.components.header.recent_slider_inner = (function (){var render_fn__31744__auto__ = (function frontend$components$header$recent_slider_inner(){
var vec__47749 = logseq.shui.hooks.use_state(frontend.state.get_highlight_recent_days());
var recent_days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47749,(0),null);
var set_recent_days_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47749,(1),null);
var vec__47752 = logseq.shui.hooks.use_state(null);
var thumb_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47752,(0),null);
var set_thumb_ref_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47752,(1),null);
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(thumb_ref)){
return thumb_ref.focus();
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thumb_ref], null));

logseq.shui.hooks.use_effect_BANG_((function (){
var all_nodes_47850 = dommy.utils.__GT_Array(document.getElementsByClassName("ls-block"));
var node_ids_47851 = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__47748_SHARP_){
var G__47755 = dommy.core.attr(p1__47748_SHARP_,"blockid");
if((G__47755 == null)){
return null;
} else {
return cljs.core.uuid(G__47755);
}
}),all_nodes_47850));
promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_blocks.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),node_ids_47851,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (results){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__47756){
var map__47757 = p__47756;
var map__47757__$1 = cljs.core.__destructure_map(map__47757);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47757__$1,new cljs.core.Keyword(null,"block","block",664686210));
var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,block], null);
} else {
return null;
}
}),results))),(function (id__GT_block){
return promesa.protocols._mcat(promesa.protocols._promise((function (node){
var id = (function (){var G__47758 = dommy.core.attr(node,"blockid");
if((G__47758 == null)){
return null;
} else {
return cljs.core.uuid(G__47758);
}
})();
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(id__GT_block,id);
if(cljs.core.truth_(block)){
return cljs_time.core.after_QMARK_(cljs_time.coerce.from_long(new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551).cljs$core$IFn$_invoke$arity$1(block)),cljs_time.core.ago(cljs_time.core.days.cljs$core$IFn$_invoke$arity$1(recent_days)));
} else {
return null;
}
})),(function (recent_node){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(recent_node,all_nodes_47850)),(function (recent_nodes){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(recent_node,all_nodes_47850)),(function (old_nodes){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core.seq(recent_nodes))?(function (){var seq__47759 = cljs.core.seq(recent_nodes);
var chunk__47760 = null;
var count__47761 = (0);
var i__47762 = (0);
while(true){
if((i__47762 < count__47761)){
var node = chunk__47760.cljs$core$IIndexed$_nth$arity$2(null,i__47762);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(node,"recent-block");


var G__47852 = seq__47759;
var G__47853 = chunk__47760;
var G__47854 = count__47761;
var G__47855 = (i__47762 + (1));
seq__47759 = G__47852;
chunk__47760 = G__47853;
count__47761 = G__47854;
i__47762 = G__47855;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__47759);
if(temp__5825__auto__){
var seq__47759__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47759__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__47759__$1);
var G__47856 = cljs.core.chunk_rest(seq__47759__$1);
var G__47857 = c__5673__auto__;
var G__47858 = cljs.core.count(c__5673__auto__);
var G__47859 = (0);
seq__47759 = G__47856;
chunk__47760 = G__47857;
count__47761 = G__47858;
i__47762 = G__47859;
continue;
} else {
var node = cljs.core.first(seq__47759__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(node,"recent-block");


var G__47860 = cljs.core.next(seq__47759__$1);
var G__47861 = null;
var G__47862 = (0);
var G__47863 = (0);
seq__47759 = G__47860;
chunk__47760 = G__47861;
count__47761 = G__47862;
i__47762 = G__47863;
continue;
}
} else {
return null;
}
}
break;
}
})():null)),(function (___21901__auto__){
return promesa.protocols._promise(((cljs.core.seq(old_nodes))?(function (){var seq__47763 = cljs.core.seq(old_nodes);
var chunk__47764 = null;
var count__47765 = (0);
var i__47766 = (0);
while(true){
if((i__47766 < count__47765)){
var node = chunk__47764.cljs$core$IIndexed$_nth$arity$2(null,i__47766);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(node,"recent-block");


var G__47864 = seq__47763;
var G__47865 = chunk__47764;
var G__47866 = count__47765;
var G__47867 = (i__47766 + (1));
seq__47763 = G__47864;
chunk__47764 = G__47865;
count__47765 = G__47866;
i__47766 = G__47867;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__47763);
if(temp__5825__auto__){
var seq__47763__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47763__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__47763__$1);
var G__47868 = cljs.core.chunk_rest(seq__47763__$1);
var G__47869 = c__5673__auto__;
var G__47870 = cljs.core.count(c__5673__auto__);
var G__47871 = (0);
seq__47763 = G__47868;
chunk__47764 = G__47869;
count__47765 = G__47870;
i__47766 = G__47871;
continue;
} else {
var node = cljs.core.first(seq__47763__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(node,"recent-block");


var G__47872 = cljs.core.next(seq__47763__$1);
var G__47873 = null;
var G__47874 = (0);
var G__47875 = (0);
seq__47763 = G__47872;
chunk__47764 = G__47873;
count__47765 = G__47874;
i__47766 = G__47875;
continue;
}
} else {
return null;
}
}
break;
}
})():null));
}));
}));
}));
}));
}));
}));
}));

return null;
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recent_days], null));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.recent-slider.flex.flex-row.gap-1.items-center","div.recent-slider.flex.flex-row.gap-1.items-center",-1476875866),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-[32%]"], null),(function (){var G__47767 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative flex w-full touch-none select-none items-center ",new cljs.core.Keyword(null,"default-value","default-value",232220170),[(3),(100)],new cljs.core.Keyword(null,"on-value-change","on-value-change",-621835289),(function (result){
var G__47770_47876 = cljs.core.first(result);
(set_recent_days_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_recent_days_BANG_.cljs$core$IFn$_invoke$arity$1(G__47770_47876) : set_recent_days_BANG_.call(null,G__47770_47876));

return frontend.state.set_highlight_recent_days_BANG_(cljs.core.first(result));
}),new cljs.core.Keyword(null,"minStepsBetweenThumbs","minStepsBetweenThumbs",-1562725313),(1)], null);
var G__47768 = (function (){var G__47771 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative h-2 w-full grow overflow-hidden rounded-full bg-secondary"], null);
return (logseq.shui.ui.slider_track.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.slider_track.cljs$core$IFn$_invoke$arity$1(G__47771) : logseq.shui.ui.slider_track.call(null,G__47771));
})();
var G__47769 = (function (){var G__47772 = (function (){var G__47773 = (function (){var G__47775 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-child","as-child",1364710342),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return e.preventDefault();
})], null);
var G__47776 = (function (){var G__47777 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),set_thumb_ref_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),"block h-4 w-4 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none"], null);
return (logseq.shui.ui.slider_thumb.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.slider_thumb.cljs$core$IFn$_invoke$arity$1(G__47777) : logseq.shui.ui.slider_thumb.call(null,G__47777));
})();
return (logseq.shui.ui.tooltip_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.tooltip_trigger.cljs$core$IFn$_invoke$arity$2(G__47775,G__47776) : logseq.shui.ui.tooltip_trigger.call(null,G__47775,G__47776));
})();
var G__47774 = (function (){var G__47778 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onPointerDownOutside","onPointerDownOutside",404933036),(function (e){
return e.preventDefault();
})], null);
var G__47779 = (((recent_days === (0)))?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("header","highlight-recent-blocks","header/highlight-recent-blocks",419318154)], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("header","highlight-recent-blocks-days-ago","header/highlight-recent-blocks-days-ago",1509420861),recent_days], 0)));
return (logseq.shui.ui.tooltip_content.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.tooltip_content.cljs$core$IFn$_invoke$arity$2(G__47778,G__47779) : logseq.shui.ui.tooltip_content.call(null,G__47778,G__47779));
})();
return (logseq.shui.ui.tooltip.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.tooltip.cljs$core$IFn$_invoke$arity$2(G__47773,G__47774) : logseq.shui.ui.tooltip.call(null,G__47773,G__47774));
})();
return (logseq.shui.ui.tooltip_provider.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.tooltip_provider.cljs$core$IFn$_invoke$arity$1(G__47772) : logseq.shui.ui.tooltip_provider.call(null,G__47772));
})();
return (logseq.shui.ui.slider.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.slider.cljs$core$IFn$_invoke$arity$3(G__47767,G__47768,G__47769) : logseq.shui.ui.slider.call(null,G__47767,G__47768,G__47769));
})(),(function (){var G__47780 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("header","quit-highlight-recent-blocks","header/quit-highlight-recent-blocks",-1222903794)], 0)),new cljs.core.Keyword(null,"class","class",-2030961996),"opacity-50 hover:opacity-100",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.toggle_highlight_recent_blocks_BANG_();
})], null);
var G__47781 = frontend.ui.icon("x",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(16)], null));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__47780,G__47781) : logseq.shui.ui.button.call(null,G__47780,G__47781));
})()], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$header$recent_slider_inner__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47782 = cljs.core.first(args__31746__auto__);
var G__47783 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47782,G__47783) : io.factorhouse.hsx.core.obj_get.call(null,G__47782,G__47783));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"recent-slider-inner","recent-slider-inner",316439292,null),args__31746__auto__),frontend$components$header$recent_slider_inner,args__31746__auto__,null);
}
};
var frontend$components$header$recent_slider_inner = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47877__i = 0, G__47877__a = new Array(arguments.length -  0);
while (G__47877__i < G__47877__a.length) {G__47877__a[G__47877__i] = arguments[G__47877__i + 0]; ++G__47877__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47877__a,0,null);
} 
return frontend$components$header$recent_slider_inner__delegate.call(this,args__31746__auto__);};
frontend$components$header$recent_slider_inner.cljs$lang$maxFixedArity = 0;
frontend$components$header$recent_slider_inner.cljs$lang$applyTo = (function (arglist__47878){
var args__31746__auto__ = cljs.core.seq(arglist__47878);
return frontend$components$header$recent_slider_inner__delegate(args__31746__auto__);
});
frontend$components$header$recent_slider_inner.cljs$core$IFn$_invoke$arity$variadic = frontend$components$header$recent_slider_inner__delegate;
return frontend$components$header$recent_slider_inner;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47784 = comp__31745__auto__;
var G__47785 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47784,G__47785) : io.factorhouse.hsx.core.react_memo.call(null,G__47784,G__47785));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"recent-slider-inner");

return comp__31745__auto__;
})();
frontend.components.header.recent_slider = (function (){var render_fn__31744__auto__ = (function frontend$components$header$recent_slider(){
var highlight_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","toggle-highlight-recent-blocks?","ui/toggle-highlight-recent-blocks?",261743188)], null));
logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(highlight_QMARK_)){
return null;
} else {
return frontend.components.header.clear_recent_highlight_BANG_();
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [highlight_QMARK_], null));

if(cljs.core.truth_(highlight_QMARK_)){
return frontend.components.header.recent_slider_inner();
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$header$recent_slider__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47786 = cljs.core.first(args__31746__auto__);
var G__47787 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47786,G__47787) : io.factorhouse.hsx.core.obj_get.call(null,G__47786,G__47787));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"recent-slider","recent-slider",-2052093475,null),args__31746__auto__),frontend$components$header$recent_slider,args__31746__auto__,null);
}
};
var frontend$components$header$recent_slider = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47879__i = 0, G__47879__a = new Array(arguments.length -  0);
while (G__47879__i < G__47879__a.length) {G__47879__a[G__47879__i] = arguments[G__47879__i + 0]; ++G__47879__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47879__a,0,null);
} 
return frontend$components$header$recent_slider__delegate.call(this,args__31746__auto__);};
frontend$components$header$recent_slider.cljs$lang$maxFixedArity = 0;
frontend$components$header$recent_slider.cljs$lang$applyTo = (function (arglist__47880){
var args__31746__auto__ = cljs.core.seq(arglist__47880);
return frontend$components$header$recent_slider__delegate(args__31746__auto__);
});
frontend$components$header$recent_slider.cljs$core$IFn$_invoke$arity$variadic = frontend$components$header$recent_slider__delegate;
return frontend$components$header$recent_slider;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47788 = comp__31745__auto__;
var G__47789 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47788,G__47789) : io.factorhouse.hsx.core.react_memo.call(null,G__47788,G__47789));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"recent-slider");

return comp__31745__auto__;
})();
frontend.components.header.ready_block_breadcrumb = (function (){var render_fn__31744__auto__ = (function frontend$components$header$ready_block_breadcrumb(page_uuid){
var page = frontend.db.hooks.use_block(page_uuid);
var breadcrumb_data = frontend.db.hooks.use_resource(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block-breadcrumb","block-breadcrumb",1527541786),page_uuid,(16)], null));
var page_with_breadcrumb = (cljs.core.truth_((function (){var and__5140__auto__ = page;
if(cljs.core.truth_(and__5140__auto__)){
return breadcrumb_data;
} else {
return and__5140__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(page,new cljs.core.Keyword("block.temp","breadcrumb","block.temp/breadcrumb",598913897),frontend.components.block.breadcrumb_model.resource_ancestors(breadcrumb_data),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.temp","breadcrumb-ref-titles","block.temp/breadcrumb-ref-titles",-797162198),new cljs.core.Keyword(null,"ref-titles","ref-titles",1814381807).cljs$core$IFn$_invoke$arity$1(breadcrumb_data)], 0)):null);
if(cljs.core.truth_((function (){var and__5140__auto__ = page_with_breadcrumb;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = frontend.util.entity.page_QMARK_(page_with_breadcrumb);
if(cljs.core.truth_(and__5140__auto____$1)){
return new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(page_with_breadcrumb);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-block-breadcrumb","div.ls-block-breadcrumb",1488939900),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm","div.text-sm",1753784969),frontend.components.block.breadcrumb.breadcrumb(cljs.core.PersistentArrayMap.EMPTY,frontend.state.get_current_repo(),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page_with_breadcrumb),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header?","header?",-106649173),true,new cljs.core.Keyword(null,"block","block",664686210),page_with_breadcrumb], null))], null)], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$header$ready_block_breadcrumb__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47790 = cljs.core.first(args__31746__auto__);
var G__47791 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47790,G__47791) : io.factorhouse.hsx.core.obj_get.call(null,G__47790,G__47791));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"ready-block-breadcrumb","ready-block-breadcrumb",-339848794,null),args__31746__auto__),frontend$components$header$ready_block_breadcrumb,args__31746__auto__,null);
}
};
var frontend$components$header$ready_block_breadcrumb = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47881__i = 0, G__47881__a = new Array(arguments.length -  0);
while (G__47881__i < G__47881__a.length) {G__47881__a[G__47881__i] = arguments[G__47881__i + 0]; ++G__47881__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47881__a,0,null);
} 
return frontend$components$header$ready_block_breadcrumb__delegate.call(this,args__31746__auto__);};
frontend$components$header$ready_block_breadcrumb.cljs$lang$maxFixedArity = 0;
frontend$components$header$ready_block_breadcrumb.cljs$lang$applyTo = (function (arglist__47882){
var args__31746__auto__ = cljs.core.seq(arglist__47882);
return frontend$components$header$ready_block_breadcrumb__delegate(args__31746__auto__);
});
frontend$components$header$ready_block_breadcrumb.cljs$core$IFn$_invoke$arity$variadic = frontend$components$header$ready_block_breadcrumb__delegate;
return frontend$components$header$ready_block_breadcrumb;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47792 = comp__31745__auto__;
var G__47793 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47792,G__47793) : io.factorhouse.hsx.core.react_memo.call(null,G__47792,G__47793));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"ready-block-breadcrumb");

return comp__31745__auto__;
})();
frontend.components.header.block_breadcrumb = (function (){var render_fn__31744__auto__ = (function frontend$components$header$block_breadcrumb(page_name){
var db_restoring_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","restoring?","db/restoring?",-1653366233)], null));
if(cljs.core.truth_((function (){var and__5140__auto__ = db_restoring_QMARK_ === false;
if(and__5140__auto__){
var and__5140__auto____$1 = page_name;
if(cljs.core.truth_(and__5140__auto____$1)){
return logseq.common.util.uuid_string_QMARK_(page_name);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return frontend.components.header.ready_block_breadcrumb(cljs.core.uuid(page_name));
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$header$block_breadcrumb__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47794 = cljs.core.first(args__31746__auto__);
var G__47795 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47794,G__47795) : io.factorhouse.hsx.core.obj_get.call(null,G__47794,G__47795));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"block-breadcrumb","block-breadcrumb",-1126893983,null),args__31746__auto__),frontend$components$header$block_breadcrumb,args__31746__auto__,null);
}
};
var frontend$components$header$block_breadcrumb = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47883__i = 0, G__47883__a = new Array(arguments.length -  0);
while (G__47883__i < G__47883__a.length) {G__47883__a[G__47883__i] = arguments[G__47883__i + 0]; ++G__47883__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47883__a,0,null);
} 
return frontend$components$header$block_breadcrumb__delegate.call(this,args__31746__auto__);};
frontend$components$header$block_breadcrumb.cljs$lang$maxFixedArity = 0;
frontend$components$header$block_breadcrumb.cljs$lang$applyTo = (function (arglist__47884){
var args__31746__auto__ = cljs.core.seq(arglist__47884);
return frontend$components$header$block_breadcrumb__delegate(args__31746__auto__);
});
frontend$components$header$block_breadcrumb.cljs$core$IFn$_invoke$arity$variadic = frontend$components$header$block_breadcrumb__delegate;
return frontend$components$header$block_breadcrumb;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47796 = comp__31745__auto__;
var G__47797 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47796,G__47797) : io.factorhouse.hsx.core.react_memo.call(null,G__47796,G__47797));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"block-breadcrumb");

return comp__31745__auto__;
})();
frontend.components.header.search_index_progress = (function (){var render_fn__31744__auto__ = (function frontend$components$header$search_index_progress(){
var current_repo = frontend.state.get_current_repo();
var map__47798 = (function (){var or__5142__auto__ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("search","index-build","search/index-build",-900651803)], null));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var map__47798__$1 = cljs.core.__destructure_map(map__47798);
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47798__$1,new cljs.core.Keyword(null,"visible?","visible?",2129863715));
var running_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47798__$1,new cljs.core.Keyword(null,"running?","running?",-257884763));
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47798__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47798__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var progress_SINGLEQUOTE_ = cljs.core.min.cljs$core$IFn$_invoke$arity$2(cljs.core.max.cljs$core$IFn$_invoke$arity$2((function (){var or__5142__auto__ = progress;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})(),(0)),(100));
if(cljs.core.truth_((function (){var and__5140__auto__ = (function (){var or__5142__auto__ = visible_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return running_QMARK_;
}
})();
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(repo,current_repo);
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-index-progress","div.search-index-progress",-591729315),frontend.ui.loading.cljs$core$IFn$_invoke$arity$1(""),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.search-index-progress__text","span.search-index-progress__text",1737209001),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("search","index-progress","search/index-progress",2986450),progress_SINGLEQUOTE_], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-index-progress__bar","div.search-index-progress__bar",1479122899),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-index-progress__bar-fill","div.search-index-progress__bar-fill",-2020658253),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(progress_SINGLEQUOTE_)+"%")], null)], null)], null)], null)], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$header$search_index_progress__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47799 = cljs.core.first(args__31746__auto__);
var G__47800 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47799,G__47800) : io.factorhouse.hsx.core.obj_get.call(null,G__47799,G__47800));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"search-index-progress","search-index-progress",-1142247931,null),args__31746__auto__),frontend$components$header$search_index_progress,args__31746__auto__,null);
}
};
var frontend$components$header$search_index_progress = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47885__i = 0, G__47885__a = new Array(arguments.length -  0);
while (G__47885__i < G__47885__a.length) {G__47885__a[G__47885__i] = arguments[G__47885__i + 0]; ++G__47885__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47885__a,0,null);
} 
return frontend$components$header$search_index_progress__delegate.call(this,args__31746__auto__);};
frontend$components$header$search_index_progress.cljs$lang$maxFixedArity = 0;
frontend$components$header$search_index_progress.cljs$lang$applyTo = (function (arglist__47886){
var args__31746__auto__ = cljs.core.seq(arglist__47886);
return frontend$components$header$search_index_progress__delegate(args__31746__auto__);
});
frontend$components$header$search_index_progress.cljs$core$IFn$_invoke$arity$variadic = frontend$components$header$search_index_progress__delegate;
return frontend$components$header$search_index_progress;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47801 = comp__31745__auto__;
var G__47802 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47801,G__47802) : io.factorhouse.hsx.core.react_memo.call(null,G__47801,G__47802));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"search-index-progress");

return comp__31745__auto__;
})();

// --- Logseq Native Backup Status Indicator Component ---
frontend.components.header.BackupStatusIndicatorComponent = function(props) {
  var React = shadow.js.require("module$node_modules$react$index", {});
  var currentRepo = props.currentRepo;
  var stateTuple = React.useState({
    status: 'idle',
    lastSavedTime: '',
    targetPath: 'F:\\新学习资料分站\\数据\\随笔便签' + (currentRepo ? ('\\' + currentRepo + '\\db.sqlite') : '')
  });
  var compState = stateTuple[0];
  var setCompState = stateTuple[1];

  React.useEffect(function() {
    var mounted = true;
    // Initial fetch config from local server if available
    try {
      fetch('/api/storage/config')
        .then(function(res) { return res.ok ? res.json() : null; })
        .then(function(data) {
          if (!mounted || !data || !data.ok) return;
          var tDir = data.target_dir || 'F:\\新学习资料分站\\数据\\随笔便签';
          var p = tDir + (currentRepo ? ('\\' + currentRepo + '\\db.sqlite') : '');
          var tTime = (data.last_saved && data.last_saved.time) ? data.last_saved.time.split(' ')[1] : '';
          setCompState(function(prev) {
            return Object.assign({}, prev, {
              targetPath: p,
              lastSavedTime: prev.lastSavedTime || tTime
            });
          });
        })
        .catch(function() {});
    } catch(e) {}

    var timer = setInterval(function() {
      if (!mounted) return;
      if (window.logseqAutoSave) {
        var st = window.logseqAutoSave.getState(currentRepo);
        if (st) {
          setCompState(function(prev) {
            return Object.assign({}, prev, {
              status: st.status || 'idle',
              lastSavedTime: st['last-saved-time'] || prev.lastSavedTime
            });
          });
        }
      }
    }, 1000);

    return function() {
      mounted = false;
      clearInterval(timer);
    };
  }, [currentRepo]);

  if (!currentRepo) return null;

  var status = compState.status || 'idle';
  var timeStr = compState.lastSavedTime || '刚刚';
  var tooltip = status === 'saving' ? '正在自动持久化数据至本地磁盘...' :
                status === 'dirty' ? '有改动待保存 (停止输入1秒后自动写入本地，或按 Ctrl+S)' :
                status === 'error' ? '本地持久化异常，点击查看详情并重试' :
                ('已备份至本地磁盘 (上次保存: ' + timeStr + ')');

  return React.createElement('button', {
    type: 'button',
    tabIndex: 0,
    id: 'backup-status-indicator-btn',
    'data-button': 'icon',
    className: 'ui__button inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm gap-1 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none hover:bg-secondary/70 hover:text-secondary-foreground active:opacity-80 as-ghost box-content h-6 w-6 p-1 overflow-hidden relative ' +
      (status === 'saving' ? 'text-blue-500' :
       status === 'dirty' ? 'text-amber-500' :
       status === 'error' ? 'text-red-500' :
       'text-emerald-600 dark:text-emerald-400 opacity-80 hover:opacity-100'),
    title: tooltip,
    onClick: function(e) {
      if (!window.logseq || !window.logseq.shui || !window.logseq.shui.ui || !window.logseq.shui.ui.popup_show_BANG_) return;
      window.logseq.shui.ui.popup_show_BANG_(
        e.currentTarget,
        function(popup) {
          return React.createElement('div', {
            className: 'p-3 flex flex-col gap-2.5 text-sm select-none',
            style: { minWidth: '280px', maxWidth: '340px' }
          }, [
            // 标题与状态徽标
            React.createElement('div', {
              key: 'header',
              className: 'flex items-center justify-between border-b border-border/60 pb-2'
            }, [
              React.createElement('div', {
                key: 'title',
                className: 'flex items-center gap-1.5 font-semibold text-sm text-foreground'
              }, [
                React.createElement('span', { key: 'i' }, '💾'),
                React.createElement('span', { key: 't' }, '本地数据备份状态')
              ]),
              React.createElement('span', {
                key: 'badge',
                className: 'text-xs px-2 py-0.5 rounded-full font-medium ' +
                  (status === 'saving' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' :
                   status === 'dirty' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300' :
                   status === 'error' ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300' :
                   'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300')
              }, (status === 'saving' ? '正在写入...' :
                  status === 'dirty' ? '待保存' :
                  status === 'error' ? '写入失败' :
                  '已完全备份'))
            ]),

            // 信息清单
            React.createElement('div', {
              key: 'info',
              className: 'flex flex-col gap-1.5 text-xs text-foreground/80 py-0.5'
            }, [
              React.createElement('div', { key: 'mode', className: 'flex justify-between items-center' }, [
                React.createElement('span', { className: 'opacity-70' }, '存储模式:'),
                React.createElement('span', { className: 'font-mono text-emerald-600 dark:text-emerald-400 font-medium' }, '物理磁盘直存 (原子写入)')
              ]),
              React.createElement('div', { key: 'repo', className: 'flex justify-between items-center' }, [
                React.createElement('span', { className: 'opacity-70' }, '当前图谱:'),
                React.createElement('span', { className: 'font-semibold text-foreground' }, currentRepo)
              ]),
              React.createElement('div', { key: 'time', className: 'flex justify-between items-center' }, [
                React.createElement('span', { className: 'opacity-70' }, '最近备份时间:'),
                React.createElement('span', { className: 'font-mono' }, timeStr)
              ]),
              React.createElement('div', { key: 'backups', className: 'flex justify-between items-center' }, [
                React.createElement('span', { className: 'opacity-70' }, '历史备份镜像:'),
                React.createElement('span', { className: 'font-mono' }, 'backups/ (自动保留10份)')
              ]),
              compState.targetPath ? React.createElement('div', {
                key: 'path',
                className: 'mt-1 p-1.5 rounded bg-secondary/50 font-mono text-[11px] break-all border border-border/40 select-all'
              }, compState.targetPath) : null
            ]),

            // 立即备份按钮
            React.createElement('div', {
              key: 'actions',
              className: 'border-t border-border/60 pt-2 flex flex-col gap-1.5'
            }, [
              React.createElement('button', {
                key: 'save-btn',
                type: 'button',
                className: 'w-full py-1.5 px-3 rounded-md bg-primary text-primary-foreground text-xs font-medium cursor-pointer flex items-center justify-center gap-1.5 shadow-sm hover:opacity-90 active:scale-[0.98] transition-all',
                onClick: function() {
                  if (window.frontend && window.frontend.handler && window.frontend.handler.auto_save) {
                    window.frontend.handler.auto_save.flush_save_BANG_(currentRepo);
                  }
                  if (window.frontend && window.frontend.handler && window.frontend.handler.notification) {
                    window.frontend.handler.notification.show_BANG_('已立即持久化并生成最新历史备份快照！', window.cljs.core.Keyword.find('success'));
                  }
                  if (window.logseq && window.logseq.shui && window.logseq.shui.ui && window.logseq.shui.ui.popup_hide_BANG_) {
                    window.logseq.shui.ui.popup_hide_BANG_(popup.id);
                  }
                }
              }, [
                React.createElement('span', { key: 'label' }, '💾 立即备份当前内容 (Ctrl+S)')
              ])
            ])
          ]);
        },
        new window.cljs.core.PersistentArrayMap(null, 3, [
          new window.cljs.core.Keyword(null, 'align', 'align', 548485), 'end',
          new window.cljs.core.Keyword(null, 'as-dropdown?', 'as-dropdown?', -15494294), true,
          new window.cljs.core.Keyword(null, 'content-props', 'content-props', -15494296),
          new window.cljs.core.PersistentArrayMap(null, 1, [
            new window.cljs.core.Keyword(null, 'class', 'class', -15494297), 'w-72'
          ], null)
        ], null)
      );
    }
  }, [
    React.createElement('span', {
      key: 'icon-wrap',
      className: 'ui__icon ti relative flex items-center justify-center'
    }, [
      React.createElement('svg', {
        key: 'svg',
        xmlns: 'http://www.w3.org/2000/svg',
        width: 18,
        height: 18,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        className: 'tabler-icon tabler-icon-database'
      }, [
        React.createElement('path', { key: 'p1', d: 'M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0' }),
        React.createElement('path', { key: 'p2', d: 'M4 6v6a8 3 0 0 0 16 0v-6' }),
        React.createElement('path', { key: 'p3', d: 'M4 12v6a8 3 0 0 0 16 0v-6' })
      ]),
      // 状态圆点
      React.createElement('span', {
        key: 'dot',
        className: 'absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full ' +
          (status === 'saving' ? 'bg-blue-500 animate-spin' :
           status === 'dirty' ? 'bg-amber-500 animate-pulse' :
           status === 'error' ? 'bg-red-500' :
           'bg-emerald-500'),
        style: { boxShadow: status === 'idle' ? '0 0 4px rgba(16, 185, 129, 0.7)' : 'none' }
      })
    ])
  ]);
};

frontend.components.header.backup_status_indicator = function frontend$components$header$backup_status_indicator(current_repo) {
  var React = shadow.js.require("module$node_modules$react$index", {});
  return React.createElement(frontend.components.header.BackupStatusIndicatorComponent, {
    key: 'backup-status-indicator-' + (current_repo || 'default'),
    currentRepo: current_repo
  });
};

frontend.components.header.header_aux = (function (){var render_fn__31744__auto__ = (function frontend$components$header$header_aux(p__47803){
var map__47804 = p__47803;
var map__47804__$1 = cljs.core.__destructure_map(map__47804);
var current_repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47804__$1,new cljs.core.Keyword(null,"current-repo","current-repo",134812359));
var default_home = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47804__$1,new cljs.core.Keyword(null,"default-home","default-home",171104159));
var new_block_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47804__$1,new cljs.core.Keyword(null,"new-block-mode","new-block-mode",1189333509));
var electron_mac_QMARK_ = (function (){var and__5140__auto__ = frontend.util.mac_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.util.electron_QMARK_();
} else {
return and__5140__auto__;
}
})();
var rtc_graphs = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rtc","graphs","rtc/graphs",-1584628267)], null));
var rtc_state = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rtc","state","rtc/state",-1988572624)], null));
var db_rtc_uuid = frontend.components.header.use_db_rtc_uuid(current_repo);
var default_home_page = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(frontend.state.config_for_repo(frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415)], null)),frontend.state.get_current_repo()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default-home","default-home",171104159),new cljs.core.Keyword(null,"page","page",849072397)], null),"");
var left_menu = frontend.components.header.left_menu_button(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.set_left_sidebar_open_BANG_(cljs.core.not(frontend.state.get_state(new cljs.core.Keyword("ui","left-sidebar-open?","ui/left-sidebar-open?",899579728))));
})], null));
var custom_home_page_QMARK_ = ((frontend.state.custom_home_page_QMARK_()) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(default_home_page,frontend.state.get_current_page())));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__header.drag-region#head","div.cp__header.drag-region#head",872226376),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"electron-mac","electron-mac",776021658),electron_mac_QMARK_,new cljs.core.Keyword(null,"native-ios","native-ios",1665559494),frontend.mobile.util.native_ios_QMARK_(),new cljs.core.Keyword(null,"native-android","native-android",1622968152),frontend.mobile.util.native_android_QMARK_()], null)], null)),new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),(function (e){
var temp__5825__auto__ = e.target;
if(cljs.core.truth_(temp__5825__auto__)){
var target = temp__5825__auto__;
if(cljs.core.truth_((function (){var and__5140__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5140__auto__)){
return target.classList.contains("drag-region");
} else {
return and__5140__auto__;
}
})())){
return window.apis.toggleMaxOrMinActiveWindow();
} else {
if(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())){
return frontend.util.scroll_to_top.cljs$core$IFn$_invoke$arity$1(true);
} else {
return null;
}
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(50)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.l.flex.items-center.drag-region","div.l.flex.items-center.drag-region",502170463),left_menu,(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())?((((frontend.state.home_QMARK_()) || (custom_home_page_QMARK_)))?null:frontend.ui.with_shortcut(new cljs.core.Keyword("go","backward","go/backward",554039684),"bottom",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.it.navigation.nav-left.button.icon.opacity-70","button.it.navigation.nav-left.button.icon.opacity-70",1759216793),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return window.history.back();
})], null),frontend.ui.icon("chevron-left",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(26)], null))], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("header","go-back","header/go-back",852769152)], 0)))):(cljs.core.truth_(current_repo)?frontend.ui.with_shortcut(new cljs.core.Keyword("go","search","go/search",1564957958),"right",logseq.shui.ui.button_ghost_icon(new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"search-button",new cljs.core.Keyword(null,"data-keep-selection","data-keep-selection",-2035432191),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_((function (){var or__5142__auto__ = frontend.mobile.util.native_android_QMARK_();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.mobile.util.native_iphone_QMARK_();
}
})())){
frontend.state.set_left_sidebar_open_BANG_(false);
} else {
}

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("go","search","go/search",1564957958)], null));
})], null)),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nav","search","nav/search",1564786881)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"trigger-props","trigger-props",1619401213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"search-button"], null)], null)):null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.r.flex.drag-region.justify-between.items-center.gap-2.overflow-x-hidden.w-full","div.r.flex.drag-region.justify-between.items-center.gap-2.overflow-x-hidden.w-full",-1905710476),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-1","div.flex.flex-1",-1659764687),frontend.components.header.block_breadcrumb(frontend.state.get_current_page())], null),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),(cljs.core.truth_(frontend.components.header.rtc_indicator_visible_QMARK_(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"current-repo","current-repo",134812359),current_repo,new cljs.core.Keyword(null,"rtc-graphs","rtc-graphs",-234997247),rtc_graphs,new cljs.core.Keyword(null,"db-rtc-uuid","db-rtc-uuid",-1267582951),db_rtc_uuid,new cljs.core.Keyword(null,"rtc-state","rtc-state",1931374921),rtc_state,new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089),frontend.handler.user.logged_in_QMARK_(),new cljs.core.Keyword(null,"rtc-group?","rtc-group?",2043094498),frontend.handler.user.rtc_group_QMARK_()], null)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),frontend.components.header.recent_slider(),cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.header.rtc_collaborators], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"collab-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_repo))], null)),frontend.components.rtc.indicator.indicator()], null):null),(cljs.core.truth_(frontend.handler.user.logged_in_QMARK_())?frontend.components.rtc.indicator.downloading_detail():null),(cljs.core.truth_(frontend.handler.user.logged_in_QMARK_())?frontend.components.rtc.indicator.uploading_detail():null),frontend.components.header.search_index_progress(),(function (){var temp__5825__auto__ = frontend.components.header.current_local_uploadable_graph(db_rtc_uuid);
if(cljs.core.truth_(temp__5825__auto__)){
var graph = temp__5825__auto__;
return frontend.components.header.local_graph_sync_button(graph);
} else {
return null;
}
})(),((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_route(),new cljs.core.Keyword(null,"home","home",-74557309))) && ((!(custom_home_page_QMARK_)))))?frontend.components.header.home_button():null),(cljs.core.truth_(frontend.config.lsp_enabled_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),frontend.components.plugins.hook_ui_items(new cljs.core.Keyword(null,"toolbar","toolbar",-1172789065)),frontend.components.plugins.updates_notifications()], null):null),((frontend.state.feature_http_server_enabled_QMARK_())?frontend.components.server.server_indicator(frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","server","electron/server",1484164422)], null))):null),(cljs.core.truth_((function (){var or__5142__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.util.web_platform_QMARK_;
}
})())?frontend.components.header.back_and_forward():null),(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())?null:(new_block_mode.cljs$core$IFn$_invoke$arity$0 ? new_block_mode.cljs$core$IFn$_invoke$arity$0() : new_block_mode.call(null))),((frontend.config.publishing_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-sm.font-medium.button","a.text-sm.font-medium.button",-309892050),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"graph","graph",1558099509))], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nav","graph","nav/graph",1552998074)], 0))], null):null),frontend.components.header.toolbar_dots_menu(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t","t",-1397832519),frontend.context.i18n.t,new cljs.core.Keyword(null,"current-repo","current-repo",134812359),current_repo,new cljs.core.Keyword(null,"default-home","default-home",171104159),default_home], null)),frontend.components.right_sidebar.toggle(),frontend.components.header.updater_tips_new_version(frontend.context.i18n.t)], null)], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$header$header_aux__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47805 = cljs.core.first(args__31746__auto__);
var G__47806 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47805,G__47806) : io.factorhouse.hsx.core.obj_get.call(null,G__47805,G__47806));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"header-aux","header-aux",875297812,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$components$header$header_aux,args__31746__auto__,null);
}
};
var frontend$components$header$header_aux = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47887__i = 0, G__47887__a = new Array(arguments.length -  0);
while (G__47887__i < G__47887__a.length) {G__47887__a[G__47887__i] = arguments[G__47887__i + 0]; ++G__47887__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47887__a,0,null);
} 
return frontend$components$header$header_aux__delegate.call(this,args__31746__auto__);};
frontend$components$header$header_aux.cljs$lang$maxFixedArity = 0;
frontend$components$header$header_aux.cljs$lang$applyTo = (function (arglist__47888){
var args__31746__auto__ = cljs.core.seq(arglist__47888);
return frontend$components$header$header_aux__delegate(args__31746__auto__);
});
frontend$components$header$header_aux.cljs$core$IFn$_invoke$arity$variadic = frontend$components$header$header_aux__delegate;
return frontend$components$header$header_aux;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47807 = comp__31745__auto__;
var G__47808 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47807,G__47808) : io.factorhouse.hsx.core.react_memo.call(null,G__47807,G__47808));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"header-aux");

return comp__31745__auto__;
})();
frontend.components.header.header = (function (){var render_fn__31744__auto__ = (function frontend$components$header$header(opts){
var _user_groups = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","info","user/info",-345834271),new cljs.core.Keyword(null,"UserGroups","UserGroups",1693861388)], null));
var _rtc_running_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rtc","state","rtc/state",-1988572624),new cljs.core.Keyword(null,"rtc-lock","rtc-lock",1338966560)], null));
return frontend.components.header.header_aux(opts);
});
var comp__31745__auto__ = (function() { 
var frontend$components$header$header__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47809 = cljs.core.first(args__31746__auto__);
var G__47810 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47809,G__47810) : io.factorhouse.hsx.core.obj_get.call(null,G__47809,G__47810));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"header","header",1759972661,null),args__31746__auto__),frontend$components$header$header,args__31746__auto__,null);
}
};
var frontend$components$header$header = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47889__i = 0, G__47889__a = new Array(arguments.length -  0);
while (G__47889__i < G__47889__a.length) {G__47889__a[G__47889__i] = arguments[G__47889__i + 0]; ++G__47889__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47889__a,0,null);
} 
return frontend$components$header$header__delegate.call(this,args__31746__auto__);};
frontend$components$header$header.cljs$lang$maxFixedArity = 0;
frontend$components$header$header.cljs$lang$applyTo = (function (arglist__47890){
var args__31746__auto__ = cljs.core.seq(arglist__47890);
return frontend$components$header$header__delegate(args__31746__auto__);
});
frontend$components$header$header.cljs$core$IFn$_invoke$arity$variadic = frontend$components$header$header__delegate;
return frontend$components$header$header;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47811 = comp__31745__auto__;
var G__47812 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47811,G__47812) : io.factorhouse.hsx.core.react_memo.call(null,G__47811,G__47812));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"header");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.header.js.map
