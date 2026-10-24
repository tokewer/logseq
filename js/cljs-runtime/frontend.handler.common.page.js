goog.provide('frontend.handler.common.page');
/**
 * Tags might have multiple words
 */
frontend.handler.common.page.wrap_tags = (function frontend$handler$common$page$wrap_tags(title){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(title,/ #/);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" #",cljs.core.cons(cljs.core.first(parts),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (s){
if(((clojure.string.includes_QMARK_(s," ")) && ((!(logseq.common.util.page_ref.page_ref_QMARK_(s)))))){
return logseq.common.util.page_ref.__GT_page_ref(s);
} else {
return s;
}
}),cljs.core.rest(parts))));
});
frontend.handler.common.page.find_page_add_button = (function frontend$handler$common$page$find_page_add_button(page_id){
if(cljs.core.truth_(page_id)){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__67304_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_id)),dommy.core.attr(p1__67304_SHARP_,"parentblockid"));
}),dommy.utils.__GT_Array(document.getElementsByClassName("block-add-button"))));
} else {
return null;
}
});
frontend.handler.common.page.edit_page_BANG_ = (function frontend$handler$common$page$edit_page_BANG_(page){
var edit_BANG_ = (function frontend$handler$common$page$edit_page_BANG__$_edit_BANG_(){
var temp__5823__auto__ = frontend.handler.common.page.find_page_add_button(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page));
if(cljs.core.truth_(temp__5823__auto__)){
var block_add_button = temp__5823__auto__;
return block_add_button.click();
} else {
if(cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page))){
return frontend.handler.editor.api_insert_new_block_BANG_("",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"container-id","container-id",1274665684),new cljs.core.Keyword(null,"unknown-container","unknown-container",1739831473)], null));
} else {
return null;
}
}
});
var poll_BANG_ = (function frontend$handler$common$page$edit_page_BANG__$_poll_BANG_(remaining_ms){
if(cljs.core.truth_(frontend.handler.common.page.find_page_add_button(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page)))){
return edit_BANG_();
} else {
if((remaining_ms > (0))){
return setTimeout((function (){
return frontend$handler$common$page$edit_page_BANG__$_poll_BANG_((remaining_ms - (100)));
}),(100));
} else {
return edit_BANG_();
}
}
});
return poll_BANG_((5000));
});
frontend.handler.common.page.page_lookup_ref = (function frontend$handler$common$page$page_lookup_ref(page_id_or_title){
if(cljs.core.uuid_QMARK_(page_id_or_title)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),page_id_or_title], null);
} else {
if(logseq.common.util.uuid_string_QMARK_(page_id_or_title)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.uuid(page_id_or_title)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),logseq.common.util.page_name_sanity_lc(page_id_or_title)], null);

}
}
});
frontend.handler.common.page._LT_page_for_edit = (function frontend$handler$common$page$_LT_page_for_edit(page_id_or_title){
if(cljs.core.map_QMARK_(page_id_or_title)){
return promesa.core.resolved(page_id_or_title);
} else {
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null),frontend.handler.common.page.page_lookup_ref(page_id_or_title)], 0));
} else {
return null;
}
}
});
frontend.handler.common.page.page_for_create_selector = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("logseq.property","deleted-at","logseq.property/deleted-at",685213751),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","title","block/title",710445684)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
frontend.handler.common.page._LT_page_for_create = (function frontend$handler$common$page$_LT_page_for_create(page_id_or_title){
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,frontend.handler.common.page.page_for_create_selector,frontend.handler.common.page.page_lookup_ref(page_id_or_title)], 0));
} else {
return null;
}
});
frontend.handler.common.page.edit_page_when_present_BANG_ = (function frontend$handler$common$page$edit_page_when_present_BANG_(page_id_or_title){
var poll_BANG_ = (function frontend$handler$common$page$edit_page_when_present_BANG__$_poll_BANG_(remaining_ms){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.common.page._LT_page_for_edit(page_id_or_title)),(function (page){
return promesa.protocols._promise((cljs.core.truth_(page)?frontend.handler.common.page.edit_page_BANG_(page):(((remaining_ms > (0)))?setTimeout((function (){
return frontend$handler$common$page$edit_page_when_present_BANG__$_poll_BANG_((remaining_ms - (100)));
}),(100)):null)));
}));
}));
});
return poll_BANG_((5000));
});
frontend.handler.common.page._LT_create_BANG_ = (function frontend$handler$common$page$_LT_create_BANG_(var_args){
var G__67310 = arguments.length;
switch (G__67310) {
case 1:
return frontend.handler.common.page._LT_create_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.common.page._LT_create_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.common.page._LT_create_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (title){
return frontend.handler.common.page._LT_create_BANG_.cljs$core$IFn$_invoke$arity$2(title,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.handler.common.page._LT_create_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (title,p__67312){
var map__67313 = p__67312;
var map__67313__$1 = cljs.core.__destructure_map(map__67313);
var options = map__67313__$1;
var redirect_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67313__$1,new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),true);
var today_journal_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67313__$1,new cljs.core.Keyword(null,"today-journal?","today-journal?",-388258460));
var class_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67313__$1,new cljs.core.Keyword(null,"class?","class?",385834571));
var edit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67313__$1,new cljs.core.Keyword(null,"edit?","edit?",-842131310),true);
if(typeof title === 'string'){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(((clojure.string.includes_QMARK_(title," #"))?frontend.handler.common.page.wrap_tags(title):title)),(function (title__$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.editor.wrap_parse_block(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","title","block/title",710445684),title__$1], null))),(function (parsed_result){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.seq(new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(parsed_result))),(function (has_tags_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(has_tags_QMARK_)?(function (){var G__67314 = cljs.core.first(logseq.common.util.split_first((""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.util.page_ref.left_brackets)),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(parsed_result)));
if((G__67314 == null)){
return null;
} else {
return clojure.string.trim(G__67314);
}
})():title__$1)),(function (title_SINGLEQUOTE_){
return promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = has_tags_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (title_SINGLEQUOTE_ == null);
} else {
return and__5140__auto__;
}
})())?frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page.validation","name-no-hash","page.validation/name-no-hash",867711017)], 0)),new cljs.core.Keyword(null,"error","error",-978969032)):(cljs.core.truth_((function (){var and__5140__auto__ = has_tags_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(logseq.db.private_create_page_tag_QMARK_,new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(parsed_result)));
} else {
return and__5140__auto__;
}
})())?frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.interpolate_rich_text_node.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page.validation","cant-set-built-in-tags","page.validation/cant-set-built-in-tags",1562340345)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.context.i18n.locale_join_rich_text_node(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__67306_SHARP_){
if(cljs.core.truth_((logseq.db.private_create_page_tag_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.private_create_page_tag_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__67306_SHARP_) : logseq.db.private_create_page_tag_QMARK_.call(null,p1__67306_SHARP_)))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(p1__67306_SHARP_)], 0));
} else {
return null;
}
}),new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(parsed_result)))], null)),new cljs.core.Keyword(null,"error","error",-978969032)):((clojure.string.blank_QMARK_(title_SINGLEQUOTE_))?null:promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_((function (){var or__5142__auto__ = class_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.seq(new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(options));
}
})())?null:frontend.handler.common.page._LT_page_for_create(title_SINGLEQUOTE_))),(function (existing_page){
return promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = existing_page;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not((logseq.db.recycled_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.recycled_QMARK_.cljs$core$IFn$_invoke$arity$1(existing_page) : logseq.db.recycled_QMARK_.call(null,existing_page)));
} else {
return and__5140__auto__;
}
})())?(function (){
if(cljs.core.truth_(redirect_QMARK_)){
frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(existing_page));

if(cljs.core.truth_((function (){var and__5140__auto__ = edit_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(today_journal_QMARK_);
} else {
return and__5140__auto__;
}
})())){
setTimeout((function (){
return frontend.handler.common.page.edit_page_BANG_(existing_page);
}),(100));
} else {
}
} else {
}

return existing_page;
})()
:promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__67316 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(options,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.concat,new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(parsed_result));
if((new cljs.core.Keyword(null,"split-namespace?","split-namespace?",-1035468161).cljs$core$IFn$_invoke$arity$1(options) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67316,new cljs.core.Keyword(null,"split-namespace?","split-namespace?",-1035468161),true);
} else {
return G__67316;
}
})()),(function (options_SINGLEQUOTE_){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
return frontend.modules.outliner.op.create_page_BANG_(title_SINGLEQUOTE_,options_SINGLEQUOTE_);
} else {
var _STAR_outliner_ops_STAR__orig_val__67318 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__67319 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__67319);

try{frontend.modules.outliner.op.create_page_BANG_(title_SINGLEQUOTE_,options_SINGLEQUOTE_);

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"create-page","create-page",-1352656443)], null));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__67318);
}}
})()),(function (p__67320){
var vec__67321 = p__67320;
var _page_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67321,(0),null);
var page_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67321,(1),null);
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.common.page._LT_page_for_create((function (){var or__5142__auto__ = page_uuid;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return title_SINGLEQUOTE_;
}
})())),(function (page){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(redirect_QMARK_)?(function (){
frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(page_uuid);

if(cljs.core.truth_((function (){var and__5140__auto__ = edit_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(today_journal_QMARK_);
} else {
return and__5140__auto__;
}
})())){
return setTimeout((function (){
var G__67324 = page;
if((G__67324 == null)){
return null;
} else {
return frontend.handler.common.page.edit_page_BANG_(G__67324);
}
}),(100));
} else {
return null;
}
})()
:null)),(function (___27434__auto__){
return promesa.protocols._promise(page);
}));
}));
}));
}));
}))));
}));
})))
)));
}));
}));
}));
}));
}));
} else {
return null;
}
}));

(frontend.handler.common.page._LT_create_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.common.page._LT_db_favorited_QMARK_ = (function frontend$handler$common$page$_LT_db_favorited_QMARK_(page_block_uuid){
if(cljs.core.uuid_QMARK_(page_block_uuid)){
} else {
throw (new Error("Assert failed: (uuid? page-block-uuid)"));
}

var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","favorited-page?","thread-api/favorited-page?",-347892359),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,page_block_uuid], 0));
} else {
return null;
}
});
frontend.handler.common.page._LT_db_favorite_page_BANG_ = (function frontend$handler$common$page$_LT_db_favorite_page_BANG_(page_block_uuid){
if(cljs.core.uuid_QMARK_(page_block_uuid)){
} else {
throw (new Error("Assert failed: (uuid? page-block-uuid)"));
}

var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","set-page-favorite","thread-api/set-page-favorite",-1676432614),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,page_block_uuid,true], 0));
} else {
return null;
}
});
frontend.handler.common.page._LT_db_unfavorite_page_BANG_ = (function frontend$handler$common$page$_LT_db_unfavorite_page_BANG_(page_block_uuid){
if(cljs.core.uuid_QMARK_(page_block_uuid)){
} else {
throw (new Error("Assert failed: (uuid? page-block-uuid)"));
}

var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","set-page-favorite","thread-api/set-page-favorite",-1676432614),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,page_block_uuid,false], 0));
} else {
return null;
}
});
frontend.handler.common.page.delete_page_opts = (function frontend$handler$common$page$delete_page_opts(){
var temp__5823__auto__ = frontend.handler.user.user_uuid();
if(cljs.core.truth_(temp__5823__auto__)){
var user_uuid = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"deleted-by-uuid","deleted-by-uuid",2008786548),cljs.core.uuid(user_uuid)], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
 * Deletes a page. If delete is successful calls ok-handler. Otherwise calls error-handler
 * if given. Note that error-handler is being called in addition to error messages that worker
 * already provides
 */
frontend.handler.common.page._LT_delete_BANG_ = (function frontend$handler$common$page$_LT_delete_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___67334 = arguments.length;
var i__5877__auto___67335 = (0);
while(true){
if((i__5877__auto___67335 < len__5876__auto___67334)){
args__5882__auto__.push((arguments[i__5877__auto___67335]));

var G__67336 = (i__5877__auto___67335 + (1));
i__5877__auto___67335 = G__67336;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return frontend.handler.common.page._LT_delete_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(frontend.handler.common.page._LT_delete_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (page_uuid_or_name,ok_handler,p__67328){
var map__67329 = p__67328;
var map__67329__$1 = cljs.core.__destructure_map(map__67329);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67329__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
if(cljs.core.truth_(page_uuid_or_name)){
if(((cljs.core.uuid_QMARK_(page_uuid_or_name)) || (typeof page_uuid_or_name === 'string'))){
} else {
throw (new Error("Assert failed: (or (uuid? page-uuid-or-name) (string? page-uuid-or-name))"));
}

if(cljs.core.truth_(cljs.core.deref(frontend.state._STAR_db_worker))){
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","title","block/title",710445684)], null),frontend.handler.common.page.page_lookup_ref(page_uuid_or_name)], 0))),(function (page){
return promesa.protocols._promise((function (){var temp__5825__auto____$1 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(temp__5825__auto____$1)){
var page_uuid = temp__5825__auto____$1;
var default_home = frontend.state.get_default_home();
var home_page_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(default_home));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(((home_page_QMARK_)?promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.config.set_config_BANG_(new cljs.core.Keyword(null,"default-home","default-home",171104159),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(default_home,new cljs.core.Keyword(null,"page","page",849072397)))),(function (___27434__auto__){
return promesa.protocols._promise(frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings.features","home-default-page-update-success","settings.features/home-default-page-update-success",200808565)], 0)),new cljs.core.Keyword(null,"success","success",1890645906)));
}));
})):null)),(function (___27434__auto__){
return promesa.protocols._promise(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","apply-outliner-ops","thread-api/apply-outliner-ops",654139693),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-page","delete-page",-1371381770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_uuid,frontend.handler.common.page.delete_page_opts()], null)], null)], null),null], 0))),(function (res){
return promesa.protocols._promise((cljs.core.truth_(res)?(cljs.core.truth_(ok_handler)?(ok_handler.cljs$core$IFn$_invoke$arity$0 ? ok_handler.cljs$core$IFn$_invoke$arity$0() : ok_handler.call(null)):null):(cljs.core.truth_(error_handler)?(error_handler.cljs$core$IFn$_invoke$arity$0 ? error_handler.cljs$core$IFn$_invoke$arity$0() : error_handler.call(null)):null)));
}));
})),(function (error){
return console.error(error);
})));
}));
}));
} else {
return null;
}
})());
}));
}));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}));

(frontend.handler.common.page._LT_delete_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.handler.common.page._LT_delete_BANG_.cljs$lang$applyTo = (function (seq67325){
var G__67326 = cljs.core.first(seq67325);
var seq67325__$1 = cljs.core.next(seq67325);
var G__67327 = cljs.core.first(seq67325__$1);
var seq67325__$2 = cljs.core.next(seq67325__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67326,G__67327,seq67325__$2);
}));

frontend.handler.common.page.after_page_deleted_BANG_ = (function frontend$handler$common$page$after_page_deleted_BANG_(page_name){
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null),frontend.handler.common.page.page_lookup_ref(page_name)], 0))),(function (page){
return promesa.protocols._promise((function (){var temp__5825__auto____$1 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(temp__5825__auto____$1)){
var page_block_uuid = temp__5825__auto____$1;
return frontend.handler.common.page._LT_db_unfavorite_page_BANG_(page_block_uuid);
} else {
return null;
}
})());
}));
}));
} else {
return null;
}
});
frontend.handler.common.page.after_page_renamed_BANG_ = (function frontend$handler$common$page$after_page_renamed_BANG_(repo,p__67330){
var map__67331 = p__67330;
var map__67331__$1 = cljs.core.__destructure_map(map__67331);
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67331__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var old_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67331__$1,new cljs.core.Keyword(null,"old-name","old-name",1289683869));
var new_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67331__$1,new cljs.core.Keyword(null,"new-name","new-name",1288355058));
var old_page_name = logseq.common.util.page_name_sanity_lc(old_name);
var redirect_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__67332 = frontend.state.get_current_page();
if((G__67332 == null)){
return null;
} else {
return logseq.common.util.page_name_sanity_lc(G__67332);
}
})(),logseq.common.util.page_name_sanity_lc(old_page_name));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(((redirect_QMARK_)?promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null),page_id], 0))),(function (page){
return promesa.protocols._promise((function (){var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(temp__5825__auto__)){
var page_uuid = temp__5825__auto__;
return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"push","push",799791267),false,new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_uuid))], null)], null));
} else {
return null;
}
})());
}));
})):null)),(function (___27434__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var home = cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"default-home","default-home",171104159),cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_page_name,logseq.common.util.page_name_sanity_lc(cljs.core.get.cljs$core$IFn$_invoke$arity$3(home,new cljs.core.Keyword(null,"page","page",849072397),"")))){
return frontend.handler.config.set_config_BANG_(new cljs.core.Keyword(null,"default-home","default-home",171104159),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(home,new cljs.core.Keyword(null,"page","page",849072397),new_name));
} else {
return null;
}
})()),(function (___27434__auto____$1){
return promesa.protocols._promise(frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0());
}));
}));
}));
});

//# sourceMappingURL=frontend.handler.common.page.js.map
