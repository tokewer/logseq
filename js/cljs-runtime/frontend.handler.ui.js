goog.provide('frontend.handler.ui');
goog.scope(function(){
  frontend.handler.ui.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.handler.ui._STAR_left_sidebar_resized_at = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(Date.now());
frontend.handler.ui._STAR_right_sidebar_resized_at = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(Date.now());
frontend.handler.ui._LT_invoke_db_worker = frontend.state._LT_invoke_db_worker;
frontend.handler.ui.persist_right_sidebar_width_BANG_ = (function frontend$handler$ui$persist_right_sidebar_width_BANG_(width){
frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","sidebar-width","ui/sidebar-width",929889300),width);

return frontend.storage.set("ls-right-sidebar-width",width);
});
frontend.handler.ui.restore_right_sidebar_width_BANG_ = (function frontend$handler$ui$restore_right_sidebar_width_BANG_(){
var temp__5825__auto__ = frontend.storage.get("ls-right-sidebar-width");
if(cljs.core.truth_(temp__5825__auto__)){
var width = temp__5825__auto__;
return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","sidebar-width","ui/sidebar-width",929889300),width);
} else {
return null;
}
});
frontend.handler.ui.close_left_sidebar_BANG_ = (function frontend$handler$ui$close_left_sidebar_BANG_(){
var temp__5825__auto__ = goog.dom.getElement("close-left-bar");
if(cljs.core.truth_(temp__5825__auto__)){
var elem = temp__5825__auto__;
return elem.click();
} else {
return null;
}
});
frontend.handler.ui.toggle_right_sidebar_BANG_ = (function frontend$handler$ui$toggle_right_sidebar_BANG_(){
if(cljs.core.truth_(new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()))){
} else {
frontend.handler.ui.restore_right_sidebar_width_BANG_();
}

return frontend.state.toggle_sidebar_open_QMARK__BANG_();
});
frontend.handler.ui.persist_right_sidebar_state_BANG_ = (function frontend$handler$ui$persist_right_sidebar_state_BANG_(){
var sidebar_open_QMARK_ = new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0());
var data = (cljs.core.truth_(sidebar_open_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()),new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),new cljs.core.Keyword("ui","sidebar-collapsed-blocks","ui/sidebar-collapsed-blocks",395046921).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()),new cljs.core.Keyword(null,"open?","open?",1238443125),true], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));
return frontend.storage.set("ls-right-sidebar-state",data);
});
frontend.handler.ui.restore_right_sidebar_state_BANG_ = (function frontend$handler$ui$restore_right_sidebar_state_BANG_(){
var temp__5825__auto__ = frontend.storage.get("ls-right-sidebar-state");
if(cljs.core.truth_(temp__5825__auto__)){
var data_SINGLEQUOTE_ = temp__5825__auto__;
var map__63423 = data_SINGLEQUOTE_;
var map__63423__$1 = cljs.core.__destructure_map(map__63423);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63423__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var collapsed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63423__$1,new cljs.core.Keyword(null,"collapsed","collapsed",-628494523));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63423__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
if(cljs.core.truth_(open_QMARK_)){
frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887),open_QMARK_);

frontend.state.set_state_BANG_(new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475),blocks);

frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","sidebar-collapsed-blocks","ui/sidebar-collapsed-blocks",395046921),collapsed);

return frontend.handler.ui.restore_right_sidebar_width_BANG_();
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.ui.toggle_contents_BANG_ = (function frontend$handler$ui$toggle_contents_BANG_(){
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var current_repo = temp__5825__auto__;
var id = "contents";
if(cljs.core.truth_(frontend.state.sidebar_block_exists_QMARK_(id))){
return frontend.state.sidebar_remove_block_BANG_(id);
} else {
return frontend.state.sidebar_add_block_BANG_(current_repo,id,new cljs.core.Keyword(null,"contents","contents",-1567174023));
}
} else {
return null;
}
});
frontend.handler.ui.toggle_help_BANG_ = (function frontend$handler$ui$toggle_help_BANG_(){
return frontend.state.toggle_BANG_(new cljs.core.Keyword("ui","help-open?","ui/help-open?",-1862197612));
});
frontend.handler.ui.toggle_settings_modal_BANG_ = (function frontend$handler$ui$toggle_settings_modal_BANG_(){
if(cljs.core.truth_(new cljs.core.Keyword("srs","mode?","srs/mode?",-258295984).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()))){
return null;
} else {
return frontend.state.toggle_settings_BANG_();
}
});
frontend.handler.ui.re_render_root_BANG_ = (function frontend$handler$ui$re_render_root_BANG_(var_args){
var G__63425 = arguments.length;
switch (G__63425) {
case 0:
return frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (_opts){
return null;
}));

(frontend.handler.ui.re_render_root_BANG_.cljs$lang$maxFixedArity = 1);

frontend.handler.ui.highlight_element_BANG_ = (function frontend$handler$ui$highlight_element_BANG_(fragment){
var id = (function (){var and__5140__auto__ = (cljs.core.count(fragment) > (36));
if(and__5140__auto__){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fragment,(cljs.core.count(fragment) - (36)));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = id;
if(cljs.core.truth_(and__5140__auto__)){
return (frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1(id) : frontend.util.uuid_string_QMARK_.call(null,id));
} else {
return and__5140__auto__;
}
})())){
var elements = frontend.util.get_blocks_by_id(id);
if(cljs.core.truth_(cljs.core.first(elements))){
frontend.util.scroll_to_element(frontend.handler.ui.goog$module$goog$object.get(cljs.core.first(elements),"id"));
} else {
}

return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(elements);
} else {
var temp__5825__auto__ = goog.dom.getElement(fragment);
if(cljs.core.truth_(temp__5825__auto__)){
var element = temp__5825__auto__;
frontend.util.scroll_to_element(fragment);

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(element,"block-highlight");

return setTimeout((function (){
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(element,"block-highlight");
}),(4000));
} else {
return null;
}
}
});
frontend.handler.ui._LT_get_file_content = (function frontend$handler$ui$_LT_get_file_content(repo,path){
return frontend.state._LT_invoke_db_worker_when_ready.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-file-content","thread-api/get-file-content",-718755763),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,path], 0));
});
frontend.handler.ui._LT_pull_anchor_block = (function frontend$handler$ui$_LT_pull_anchor_block(repo,anchor_id){
var G__63426 = new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100);
var G__63427 = repo;
var G__63428 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null);
var G__63429 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),anchor_id], null);
return (frontend.handler.ui._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$4 ? frontend.handler.ui._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$4(G__63426,G__63427,G__63428,G__63429) : frontend.handler.ui._LT_invoke_db_worker.call(null,G__63426,G__63427,G__63428,G__63429));
});
frontend.handler.ui._LT_get_block_parents = (function frontend$handler$ui$_LT_get_block_parents(repo,db_id){
return (frontend.handler.ui._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$4 ? frontend.handler.ui._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("thread-api","get-block-parents","thread-api/get-block-parents",-1793488563),repo,db_id,(100)) : frontend.handler.ui._LT_invoke_db_worker.call(null,new cljs.core.Keyword("thread-api","get-block-parents","thread-api/get-block-parents",-1793488563),repo,db_id,(100)));
});
/**
 * Expands a collapsed ancestor so an anchor target inside it can render.
 * Mirrors editor's expand without depending on handler.editor.
 */
frontend.handler.ui.expand_collapsed_ancestor_BANG_ = (function frontend$handler$ui$expand_collapsed_ancestor_BANG_(parent){
var uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(parent);
if(cljs.core.truth_((function (){var and__5140__auto__ = uuid;
if(cljs.core.truth_(and__5140__auto__)){
var or__5142__auto__ = new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(parent);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.state.get_block_collapsed.cljs$core$IFn$_invoke$arity$1(uuid);
}
} else {
return and__5140__auto__;
}
})())){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
return frontend.modules.outliner.op.collapse_expand_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [uuid], null),false);
} else {
var _STAR_outliner_ops_STAR__orig_val__63430 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__63431 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__63431);

try{frontend.modules.outliner.op.collapse_expand_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [uuid], null),false);

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"collapse-expand-blocks","collapse-expand-blocks",-868833367)], null));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__63430);
}}
})()),(function (___27434__auto__){
return promesa.protocols._promise(frontend.state.set_collapsed_block_BANG_.cljs$core$IFn$_invoke$arity$2(uuid,false));
}));
}));
} else {
return null;
}
});
/**
 * Polls until the anchor block's row is mounted (lazy children mount
 * asynchronously), then scrolls to it and highlights it.
 */
frontend.handler.ui.wait_for_anchor_element_BANG_ = (function frontend$handler$ui$wait_for_anchor_element_BANG_(anchor,attempt){
var id = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(anchor,(9));
if((((!((typeof document !== 'undefined')))) || (cljs.core.seq(frontend.util.get_blocks_by_id(id))))){
return frontend.handler.ui.highlight_element_BANG_(anchor);
} else {
if((attempt < (120))){
return setTimeout((function (){
var G__63432 = anchor;
var G__63433 = (attempt + (1));
return (frontend.handler.ui.wait_for_anchor_element_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.ui.wait_for_anchor_element_BANG_.cljs$core$IFn$_invoke$arity$2(G__63432,G__63433) : frontend.handler.ui.wait_for_anchor_element_BANG_.call(null,G__63432,G__63433));
}),(50));
} else {
return null;
}
}
});
frontend.handler.ui.add_style_if_exists_BANG_ = (function frontend$handler$ui$add_style_if_exists_BANG_(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = frontend.state.get_custom_css_link();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return frontend.handler.ui._LT_get_file_content(repo,"logseq/custom.css");
} else {
return null;
}
}
})()),(function (style){
return promesa.protocols._promise((cljs.core.truth_(style)?promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.assets._LT_expand_assets_links_for_db_graph(style)),(function (style__$1){
return promesa.protocols._promise(frontend.util.add_style_BANG_(style__$1));
}));
})):null));
}));
}));
});
frontend.handler.ui.reset_custom_css_BANG_ = (function frontend$handler$ui$reset_custom_css_BANG_(){
var temp__5825__auto___63504 = goog.dom.getElement("logseq-custom-theme-id");
if(cljs.core.truth_(temp__5825__auto___63504)){
var el_style_63505 = temp__5825__auto___63504;
dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1(el_style_63505);
} else {
}

return frontend.handler.ui.add_style_if_exists_BANG_();
});
frontend.handler.ui._STAR_js_execed = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
frontend.handler.ui.exec_js_if_exists__AMPERSAND__allowed_BANG_ = (function frontend$handler$ui$exec_js_if_exists__AMPERSAND__allowed_BANG_(t){
var temp__5825__auto__ = (function (){var or__5142__auto__ = frontend.state.get_custom_js_link();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.config.get_custom_js_path.cljs$core$IFn$_invoke$arity$0();
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var href = temp__5825__auto__;
var k = (""+"ls-js-allowed-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(href));
var execed = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.handler.ui._STAR_js_execed,cljs.core.conj,href);
});
var execed_QMARK_ = cljs.core.contains_QMARK_(cljs.core.deref(frontend.handler.ui._STAR_js_execed),href);
var ask_allow = (function (){
var r = confirm((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("plugin","custom-js-alert","plugin/custom-js-alert",-1359208866)) : t.call(null,new cljs.core.Keyword("plugin","custom-js-alert","plugin/custom-js-alert",-1359208866))));
if(cljs.core.truth_(r)){
frontend.storage.set(k,Date.now());
} else {
frontend.storage.set(k,false);
}

return r;
});
var allowed_BANG_ = frontend.storage.get(k);
var should_ask_QMARK_ = (((allowed_BANG_ == null)) || (((Date.now() - allowed_BANG_) > (604800000))));
var exec_fn = (function (p1__63434_SHARP_){
var temp__5825__auto____$1 = (function (){var and__5140__auto__ = p1__63434_SHARP_;
if(cljs.core.truth_(and__5140__auto__)){
return clojure.string.trim(p1__63434_SHARP_);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto____$1)){
var scripts = temp__5825__auto____$1;
if(clojure.string.blank_QMARK_(scripts)){
return null;
} else {
if(cljs.core.truth_((function (){var or__5142__auto__ = (!(should_ask_QMARK_));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return ask_allow();
}
})())){
try{eval(scripts);

return execed();
}catch (e63435){var e = e63435;
return console.error("[custom js]",e);
}} else {
return null;
}
}
} else {
return null;
}
});
if((((!(execed_QMARK_))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(false,allowed_BANG_)))){
if(clojure.string.starts_with_QMARK_(href,"http")){
if(cljs.core.truth_((function (){var or__5142__auto__ = (!(should_ask_QMARK_));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return ask_allow();
}
})())){
return frontend.loader.load.cljs$core$IFn$_invoke$arity$2(href,(function (){
console.log("[custom js]",href);

return execed();
}));
} else {
return null;
}
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var temp__5825__auto____$1 = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto____$1)){
var repo = temp__5825__auto____$1;
return frontend.handler.ui._LT_get_file_content(repo,href);
} else {
return null;
}
})()),(function (script){
return promesa.protocols._promise((cljs.core.truth_(script)?exec_fn(script):null));
}));
}));

}
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.ui.toggle_wide_mode_BANG_ = (function frontend$handler$ui$toggle_wide_mode_BANG_(){
frontend.storage.set(new cljs.core.Keyword("ui","wide-mode","ui/wide-mode",2105536944),cljs.core.not(frontend.state.get_wide_mode_QMARK_()));

return frontend.state.toggle_wide_mode_BANG_();
});
/**
 * Reorder matched if grouped
 */
frontend.handler.ui.reorder_matched = (function frontend$handler$ui$reorder_matched(state){
var matched = new cljs.core.Keyword(null,"matched","matched",-975207164).cljs$core$IFn$_invoke$arity$1(state);
var grouped_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"grouped?","grouped?",531080948)], null));
if(cljs.core.truth_(grouped_QMARK_)){
var _STAR_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var inc_idx = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_idx,cljs.core.inc);
});
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__5628__auto__ = (function frontend$handler$ui$reorder_matched_$_iter__63436(s__63437){
return (new cljs.core.LazySeq(null,(function (){
var s__63437__$1 = s__63437;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__63437__$1);
if(temp__5825__auto__){
var s__63437__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63437__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__63437__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__63439 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__63438 = (0);
while(true){
if((i__63438 < size__5627__auto__)){
var vec__63440 = cljs.core._nth(c__5626__auto__,i__63438);
var _group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63440,(0),null);
var matched__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63440,(1),null);
cljs.core.chunk_append(b__63439,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__63438,vec__63440,_group,matched__$1,c__5626__auto__,size__5627__auto__,b__63439,s__63437__$2,temp__5825__auto__,_STAR_idx,inc_idx,matched,grouped_QMARK_){
return (function (item){
inc_idx();

return item;
});})(i__63438,vec__63440,_group,matched__$1,c__5626__auto__,size__5627__auto__,b__63439,s__63437__$2,temp__5825__auto__,_STAR_idx,inc_idx,matched,grouped_QMARK_))
,matched__$1)));

var G__63509 = (i__63438 + (1));
i__63438 = G__63509;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63439),frontend$handler$ui$reorder_matched_$_iter__63436(cljs.core.chunk_rest(s__63437__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63439),null);
}
} else {
var vec__63443 = cljs.core.first(s__63437__$2);
var _group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63443,(0),null);
var matched__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63443,(1),null);
return cljs.core.cons(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__63443,_group,matched__$1,s__63437__$2,temp__5825__auto__,_STAR_idx,inc_idx,matched,grouped_QMARK_){
return (function (item){
inc_idx();

return item;
});})(vec__63443,_group,matched__$1,s__63437__$2,temp__5825__auto__,_STAR_idx,inc_idx,matched,grouped_QMARK_))
,matched__$1)),frontend$handler$ui$reorder_matched_$_iter__63436(cljs.core.rest(s__63437__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.group_by(new cljs.core.Keyword(null,"group","group",582596132),matched));
})());
} else {
return matched;
}
});
/**
 * Returns the `.ui__ac-group-name` immediately above `element`, if any.
 * 
 *   Slash-command groups render that heading as the previous sibling of the
 *   focused item's `.menu-link-wrap`.
 */
frontend.handler.ui.auto_complete_group_heading = (function frontend$handler$ui$auto_complete_group_heading(element){
var temp__5825__auto__ = (function (){var G__63446 = element;
var G__63446__$1 = (((G__63446 == null))?null:G__63446.parentElement);
if((G__63446__$1 == null)){
return null;
} else {
return G__63446__$1.previousElementSibling;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var heading = temp__5825__auto__;
if(cljs.core.truth_((function (){var G__63447 = heading;
var G__63447__$1 = (((G__63447 == null))?null:G__63447.classList);
if((G__63447__$1 == null)){
return null;
} else {
return G__63447__$1.contains("ui__ac-group-name");
}
})())){
return heading;
} else {
return null;
}
} else {
return null;
}
});
/**
 * Builds focused-item geometry from `container` and `element` DOM nodes.
 * 
 *   `item-top` is in container scroll coordinates so callers can compute a
 *   corrected `scrollTop` without depending on `offsetParent`.
 * 
 *   When the focused item starts a group, `item-top` includes the group heading
 *   so arrowing back to the first command also reveals the label above it.
 */
frontend.handler.ui.auto_complete_scroll_geometry = (function frontend$handler$ui$auto_complete_scroll_geometry(container,element){
if(cljs.core.truth_((function (){var and__5140__auto__ = container;
if(cljs.core.truth_(and__5140__auto__)){
return element;
} else {
return and__5140__auto__;
}
})())){
var container_rect = container.getBoundingClientRect();
var element_rect = element.getBoundingClientRect();
var heading = frontend.handler.ui.auto_complete_group_heading(element);
var heading_rect = (cljs.core.truth_(heading)?heading.getBoundingClientRect():null);
var scroll_top = container.scrollTop;
var container_top = container_rect.top;
var element_top = (scroll_top + (element_rect.top - container_top));
var cluster_top = (cljs.core.truth_(heading_rect)?(scroll_top + (heading_rect.top - container_top)):element_top);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),scroll_top,new cljs.core.Keyword(null,"viewport-height","viewport-height",1948518883),container.clientHeight,new cljs.core.Keyword(null,"item-top","item-top",615206077),cluster_top,new cljs.core.Keyword(null,"item-height","item-height",1808364479),((element_top + element_rect.height) - cluster_top)], null);
} else {
return null;
}
});
/**
 * Returns a `scrollTop` that keeps the focused item inside the viewport.
 */
frontend.handler.ui.auto_complete_keep_visible_scroll_top = (function frontend$handler$ui$auto_complete_keep_visible_scroll_top(p__63448){
var map__63449 = p__63448;
var map__63449__$1 = cljs.core.__destructure_map(map__63449);
var scroll_top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63449__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100));
var viewport_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63449__$1,new cljs.core.Keyword(null,"viewport-height","viewport-height",1948518883));
var item_top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63449__$1,new cljs.core.Keyword(null,"item-top","item-top",615206077));
var item_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63449__$1,new cljs.core.Keyword(null,"item-height","item-height",1808364479));
var item_bottom = (item_top + item_height);
var viewport_bottom = (scroll_top + viewport_height);
if((item_top < scroll_top)){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),item_top);
} else {
if((item_bottom > viewport_bottom)){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),(item_bottom - viewport_height));
} else {
return scroll_top;

}
}
});
/**
 * Keeps the highlighted auto-complete item visible in `#ui__ac-inner`.
 * 
 *   Slash-command and search popups scroll that inner list, not the popover
 *   wrapper. Arrow up/down used to set `scrollTop` on `#ui__ac`'s parent, so
 *   the chosen row could move out of view.
 */
frontend.handler.ui.auto_complete_scroll_into_view_BANG_ = (function frontend$handler$ui$auto_complete_scroll_into_view_BANG_(idx){
var temp__5825__auto__ = goog.dom.getElement((""+"ac-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)));
if(cljs.core.truth_(temp__5825__auto__)){
var element = temp__5825__auto__;
var temp__5825__auto____$1 = goog.dom.getElement("ui__ac-inner");
if(cljs.core.truth_(temp__5825__auto____$1)){
var container = temp__5825__auto____$1;
var temp__5825__auto____$2 = frontend.handler.ui.auto_complete_scroll_geometry(container,element);
if(cljs.core.truth_(temp__5825__auto____$2)){
var geometry = temp__5825__auto____$2;
return (container.scrollTop = frontend.handler.ui.auto_complete_keep_visible_scroll_top(geometry));
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
frontend.handler.ui.auto_complete_prev = (function frontend$handler$ui$auto_complete_prev(state,e){
var current_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.ui","current-idx","frontend.ui/current-idx",441919612));
var matched = frontend.handler.ui.reorder_matched(state);
frontend.util.stop(e);

if((cljs.core.deref(current_idx) >= (1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current_idx,cljs.core.dec);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(current_idx),(0))){
cljs.core.reset_BANG_(current_idx,(cljs.core.count(matched) - (1)));
} else {

}
}

return frontend.handler.ui.auto_complete_scroll_into_view_BANG_(cljs.core.deref(current_idx));
});
frontend.handler.ui.auto_complete_next = (function frontend$handler$ui$auto_complete_next(state,e){
var current_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.ui","current-idx","frontend.ui/current-idx",441919612));
var matched = frontend.handler.ui.reorder_matched(state);
frontend.util.stop(e);

var total_63515 = cljs.core.count(matched);
if((cljs.core.deref(current_idx) >= (total_63515 - (1)))){
cljs.core.reset_BANG_(current_idx,(0));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current_idx,cljs.core.inc);
}

return frontend.handler.ui.auto_complete_scroll_into_view_BANG_(cljs.core.deref(current_idx));
});
frontend.handler.ui.auto_complete_complete = (function frontend$handler$ui$auto_complete_complete(state,e){
var map__63452 = new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(state);
var map__63452__$1 = cljs.core.__destructure_map(map__63452);
var on_chosen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63452__$1,new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900));
var on_enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63452__$1,new cljs.core.Keyword(null,"on-enter","on-enter",-928988216));
var matched = frontend.handler.ui.reorder_matched(state);
var current_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.ui","current-idx","frontend.ui/current-idx",441919612));
frontend.util.stop(e);

if(((cljs.core.seq(matched)) && ((cljs.core.count(matched) > cljs.core.deref(current_idx))))){
var G__63454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matched,cljs.core.deref(current_idx));
var G__63455 = e;
return (on_chosen.cljs$core$IFn$_invoke$arity$2 ? on_chosen.cljs$core$IFn$_invoke$arity$2(G__63454,G__63455) : on_chosen.call(null,G__63454,G__63455));
} else {
var and__5140__auto__ = on_enter;
if(cljs.core.truth_(and__5140__auto__)){
return (on_enter.cljs$core$IFn$_invoke$arity$1 ? on_enter.cljs$core$IFn$_invoke$arity$1(state) : on_enter.call(null,state));
} else {
return and__5140__auto__;
}
}
});
frontend.handler.ui.auto_complete_shift_complete = (function frontend$handler$ui$auto_complete_shift_complete(state,e){
var map__63460 = new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(state);
var map__63460__$1 = cljs.core.__destructure_map(map__63460);
var on_chosen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63460__$1,new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900));
var on_shift_chosen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63460__$1,new cljs.core.Keyword(null,"on-shift-chosen","on-shift-chosen",-310778328));
var on_enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63460__$1,new cljs.core.Keyword(null,"on-enter","on-enter",-928988216));
var matched = frontend.handler.ui.reorder_matched(state);
var current_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.ui","current-idx","frontend.ui/current-idx",441919612));
frontend.util.stop(e);

if(((cljs.core.seq(matched)) && ((cljs.core.count(matched) > cljs.core.deref(current_idx))))){
var G__63462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matched,cljs.core.deref(current_idx));
var G__63463 = false;
var fexpr__63461 = (function (){var or__5142__auto__ = on_shift_chosen;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return on_chosen;
}
})();
return (fexpr__63461.cljs$core$IFn$_invoke$arity$2 ? fexpr__63461.cljs$core$IFn$_invoke$arity$2(G__63462,G__63463) : fexpr__63461.call(null,G__63462,G__63463));
} else {
var and__5140__auto__ = on_enter;
if(cljs.core.truth_(and__5140__auto__)){
return (on_enter.cljs$core$IFn$_invoke$arity$1 ? on_enter.cljs$core$IFn$_invoke$arity$1(state) : on_enter.call(null,state));
} else {
return and__5140__auto__;
}
}
});
frontend.handler.ui.toggle_cards_BANG_ = (function frontend$handler$ui$toggle_cards_BANG_(){
if(cljs.core.truth_(logseq.shui.dialog.core.get_dialog(new cljs.core.Keyword(null,"srs","srs",1327991978)))){
return (logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dialog_close_BANG_.call(null));
} else {
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","show-cards","modal/show-cards",1918730906)], null));
}
});
/**
 * Open a new Electron window or web tab.
 */
frontend.handler.ui.open_new_window_or_tab_BANG_ = (function frontend$handler$ui$open_new_window_or_tab_BANG_(target){
if(cljs.core.truth_(target)){
var map__63467 = ((cljs.core.map_QMARK_(target))?target:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"repo","repo",-1999060679),target], null));
var map__63467__$1 = cljs.core.__destructure_map(map__63467);
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63467__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679));
var graph_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63467__$1,new cljs.core.Keyword(null,"graph-id","graph-id",-205404489));
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["openNewWindow",repo], 0));
} else {
if(cljs.core.seq(graph_id)){
} else {
throw (new Error("Missing graph id"));
}

return window.open((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var location__$1 = window.location;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location__$1.origin)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location__$1.pathname));
})())+"#/?graph-id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(graph_id))),"_blank");
}
} else {
return null;
}
});
frontend.handler.ui.toggle_show_empty_hidden_properties_BANG_ = (function frontend$handler$ui$toggle_show_empty_hidden_properties_BANG_(){
var editing_block = frontend.state.get_edit_block();
var selected_ids = frontend.state.get_selection_block_ids();
var block_ids = (cljs.core.truth_(editing_block)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(selected_ids,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(editing_block)):selected_ids);
var map__63472 = frontend.state.get_state(new cljs.core.Keyword("ui","show-empty-and-hidden-properties?","ui/show-empty-and-hidden-properties?",1338368380));
var map__63472__$1 = cljs.core.__destructure_map(map__63472);
var ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63472__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63472__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63472__$1,new cljs.core.Keyword(null,"show?","show?",1543842127));
if(cljs.core.seq(block_ids)){
var block_ids_SINGLEQUOTE_ = cljs.core.set(block_ids);
return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","show-empty-and-hidden-properties?","ui/show-empty-and-hidden-properties?",1338368380),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"ids","ids",-998535796),block_ids_SINGLEQUOTE_,new cljs.core.Keyword(null,"show?","show?",1543842127),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"global","global",93595047)))?true:((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ids,block_ids_SINGLEQUOTE_))?true:cljs.core.not(show_QMARK_)
))], null));
} else {
return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","show-empty-and-hidden-properties?","ui/show-empty-and-hidden-properties?",1338368380),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"show?","show?",1543842127),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"block","block",664686210)))?true:cljs.core.not(show_QMARK_))], null));
}
});
frontend.handler.ui.scroll_to_anchor_block = (function frontend$handler$ui$scroll_to_anchor_block(ref,rows,gallery_QMARK_){
if(cljs.core.truth_(ref)){
var anchor = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.get_route_match(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"anchor","anchor",1549638489)], null));
var anchor_id = (cljs.core.truth_((function (){var and__5140__auto__ = anchor;
if(cljs.core.truth_(and__5140__auto__)){
return clojure.string.starts_with_QMARK_(anchor,"ls-block-");
} else {
return and__5140__auto__;
}
})())?(function (){var id = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(anchor,(9));
if(cljs.core.truth_((frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.util.uuid_string_QMARK_.cljs$core$IFn$_invoke$arity$1(id) : frontend.util.uuid_string_QMARK_.call(null,id)))){
return cljs.core.uuid(id);
} else {
return null;
}
})():null);
if(cljs.core.truth_((function (){var and__5140__auto__ = ref;
if(cljs.core.truth_(and__5140__auto__)){
return anchor_id;
} else {
return and__5140__auto__;
}
})())){
var block_ids = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
if(cljs.core.uuid_QMARK_(row)){
return row;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(row);
}
}),rows);
var find_idx = (function (anchor_id__$1){
var idx = block_ids.indexOf(anchor_id__$1);
if((idx > (0))){
return idx;
} else {
return null;
}
});
var scroll_to_idx_BANG_ = (function (idx){
return setTimeout((function (){
ref.scrollToIndex(({"index": idx}));

return frontend.handler.ui.wait_for_anchor_element_BANG_(anchor,(0));
}),(cljs.core.truth_(gallery_QMARK_)?(100):(0)));
});
var temp__5823__auto__ = find_idx(anchor_id);
if(cljs.core.truth_(temp__5823__auto__)){
var idx = temp__5823__auto__;
return scroll_to_idx_BANG_(idx);
} else {
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.ui._LT_pull_anchor_block(repo,anchor_id)),(function (block){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var temp__5825__auto____$1 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5825__auto____$1)){
var db_id = temp__5825__auto____$1;
return frontend.handler.ui._LT_get_block_parents(repo,db_id);
} else {
return null;
}
})()),(function (parents){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var seq__63483 = cljs.core.seq(parents);
var chunk__63484 = null;
var count__63485 = (0);
var i__63486 = (0);
while(true){
if((i__63486 < count__63485)){
var parent = chunk__63484.cljs$core$IIndexed$_nth$arity$2(null,i__63486);
if(cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(parent))){
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","anchor-mount","ui/anchor-mount",1065207909),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(parent)], null),true);

frontend.handler.ui.expand_collapsed_ancestor_BANG_(parent);
} else {
}


var G__63527 = seq__63483;
var G__63528 = chunk__63484;
var G__63529 = count__63485;
var G__63530 = (i__63486 + (1));
seq__63483 = G__63527;
chunk__63484 = G__63528;
count__63485 = G__63529;
i__63486 = G__63530;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__63483);
if(temp__5825__auto____$1){
var seq__63483__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__63483__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__63483__$1);
var G__63531 = cljs.core.chunk_rest(seq__63483__$1);
var G__63532 = c__5673__auto__;
var G__63533 = cljs.core.count(c__5673__auto__);
var G__63534 = (0);
seq__63483 = G__63531;
chunk__63484 = G__63532;
count__63485 = G__63533;
i__63486 = G__63534;
continue;
} else {
var parent = cljs.core.first(seq__63483__$1);
if(cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(parent))){
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","anchor-mount","ui/anchor-mount",1065207909),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(parent)], null),true);

frontend.handler.ui.expand_collapsed_ancestor_BANG_(parent);
} else {
}


var G__63536 = cljs.core.next(seq__63483__$1);
var G__63537 = null;
var G__63538 = (0);
var G__63539 = (0);
seq__63483 = G__63536;
chunk__63484 = G__63537;
count__63485 = G__63538;
i__63486 = G__63539;
continue;
}
} else {
return null;
}
}
break;
}
})()),(function (___27434__auto__){
return promesa.protocols._promise((function (){var temp__5825__auto____$1 = cljs.core.some(find_idx,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),parents));
if(cljs.core.truth_(temp__5825__auto____$1)){
var idx = temp__5825__auto____$1;
return scroll_to_idx_BANG_(idx);
} else {
return null;
}
})());
}));
}));
}));
}));
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=frontend.handler.ui.js.map
