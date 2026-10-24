goog.provide('frontend.modules.outliner.pipeline');
frontend.modules.outliner.pipeline.update_editing_block_title_if_changed_BANG_ = (function frontend$modules$outliner$pipeline$update_editing_block_title_if_changed_BANG_(blocks){
var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block());
if(cljs.core.truth_(temp__5825__auto__)){
var editing_block_uuid = temp__5825__auto__;
var temp__5825__auto____$1 = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks,editing_block_uuid));
if(cljs.core.truth_(temp__5825__auto____$1)){
var title = temp__5825__auto____$1;
var editing_title = frontend.state.get_edit_content();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim((function (){var or__5142__auto__ = editing_title;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})()),clojure.string.trim(title))){
return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$1(title);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
frontend.modules.outliner.pipeline.current_page_deleted_QMARK_ = (function frontend$modules$outliner$pipeline$current_page_deleted_QMARK_(current_page,deleted){
var and__5140__auto__ = current_page;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.some((function (p1__93583_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_page,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__93583_SHARP_)));
}),cljs.core.keys(deleted));
} else {
return and__5140__auto__;
}
});
frontend.modules.outliner.pipeline.current_page_recycled_QMARK_ = (function frontend$modules$outliner$pipeline$current_page_recycled_QMARK_(current_page,blocks){
var and__5140__auto__ = current_page;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.some((function (p__93584){
var vec__93585 = p__93584;
var block_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93585,(0),null);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93585,(1),null);
var and__5140__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_page,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_uuid)));
if(and__5140__auto____$1){
return (logseq.db.recycled_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.recycled_QMARK_.cljs$core$IFn$_invoke$arity$1(block) : logseq.db.recycled_QMARK_.call(null,block));
} else {
return and__5140__auto____$1;
}
}),blocks);
} else {
return and__5140__auto__;
}
});
frontend.modules.outliner.pipeline.publish_plugin_hook_BANG_ = (function frontend$modules$outliner$pipeline$publish_plugin_hook_BANG_(tx_meta,p__93588){
var map__93589 = p__93588;
var map__93589__$1 = cljs.core.__destructure_map(map__93589);
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93589__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var deleted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93589__$1,new cljs.core.Keyword(null,"deleted","deleted",-510100639));
if(cljs.core.truth_((function (){var and__5140__auto__ = frontend.state.lsp_enabled_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.seq(blocks)) && ((cljs.core.count(blocks) <= (1000))));
} else {
return and__5140__auto__;
}
})())){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","hook-db-tx","plugin/hook-db-tx",1065547419),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.vec(cljs.core.vals(blocks)),new cljs.core.Keyword(null,"deleted-block-uuids","deleted-block-uuids",-1589082500),cljs.core.set(cljs.core.keys(deleted)),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null)], null));
} else {
return null;
}
});
frontend.modules.outliner.pipeline.invoke_hooks = (function frontend$modules$outliner$pipeline$invoke_hooks(p__93590){
var map__93591 = p__93590;
var map__93591__$1 = cljs.core.__destructure_map(map__93591);
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93591__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679));
var tx_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93591__$1,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194));
var delta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93591__$1,new cljs.core.Keyword(null,"delta","delta",108939957));
if(cljs.core.truth_(delta)){
frontend.db.subs.apply_delta_BANG_(delta);
} else {
}

var map__93592 = tx_meta;
var map__93592__$1 = cljs.core.__destructure_map(map__93592);
var initial_pages_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93592__$1,new cljs.core.Keyword(null,"initial-pages?","initial-pages?",1229670725));
var end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93592__$1,new cljs.core.Keyword(null,"end?","end?",-1423391609));
var current_page = frontend.state.get_current_page();
var blocks = new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(delta);
var deleted = new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(delta);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(repo,frontend.state.get_current_repo())){
var deleted_ids_93593 = cljs.core.not_empty(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.vals(deleted)));
var recycled_ids_93594 = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (block){
if(cljs.core.truth_((function (){var and__5140__auto__ = (logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1(block) : logseq.db.page_QMARK_.call(null,block));
if(cljs.core.truth_(and__5140__auto__)){
return (logseq.db.recycled_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.recycled_QMARK_.cljs$core$IFn$_invoke$arity$1(block) : logseq.db.recycled_QMARK_.call(null,block));
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
} else {
return null;
}
}),cljs.core.vals(blocks));
if(cljs.core.truth_(deleted_ids_93593)){
frontend.state.sidebar_remove_deleted_block_BANG_(deleted_ids_93593);
} else {
}

var temp__5825__auto___93595 = cljs.core.not_empty(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(deleted_ids_93593,recycled_ids_93594));
if(cljs.core.truth_(temp__5825__auto___93595)){
var removed_page_ids_93596 = temp__5825__auto___93595;
frontend.state.remove_pages_from_recent_BANG_(removed_page_ids_93596);
} else {
}

if(cljs.core.truth_((function (){var or__5142__auto__ = frontend.modules.outliner.pipeline.current_page_deleted_QMARK_(current_page,deleted);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto__ = cljs.core.not(initial_pages_QMARK_);
if(and__5140__auto__){
return frontend.modules.outliner.pipeline.current_page_recycled_QMARK_(current_page,blocks);
} else {
return and__5140__auto__;
}
}
})())){
frontend.handler.route.redirect_to_previous_BANG_();
} else {
}

if(cljs.core.truth_(initial_pages_QMARK_)){
if(cljs.core.truth_(end_QMARK_)){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("init","commands","init/commands",315507426)], null));

frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0();
} else {
}
} else {
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(tx_meta),new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-template","apply-template",169070311),new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450).cljs$core$IFn$_invoke$arity$1(tx_meta))))){
frontend.modules.outliner.pipeline.update_editing_block_title_if_changed_BANG_(blocks);
} else {
}

frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","start-pos","editor/start-pos",-40843537),null);

if(cljs.core.truth_(new cljs.core.Keyword("graph","importing","graph/importing",1647644617).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()))){
} else {
frontend.modules.outliner.pipeline.publish_plugin_hook_BANG_(tx_meta,delta);
}

}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450).cljs$core$IFn$_invoke$arity$1(tx_meta),new cljs.core.Keyword(null,"delete-page","delete-page",-1371381770))){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","deleted","page/deleted",-523428622),new cljs.core.Keyword(null,"deleted-page","deleted-page",-665410015).cljs$core$IFn$_invoke$arity$1(tx_meta),tx_meta], null));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450).cljs$core$IFn$_invoke$arity$1(tx_meta),new cljs.core.Keyword(null,"rename-page","rename-page",-2094129371))){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","renamed","page/renamed",-1655115736),repo,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(tx_meta)], null));
} else {
return null;
}
});

//# sourceMappingURL=frontend.modules.outliner.pipeline.js.map
