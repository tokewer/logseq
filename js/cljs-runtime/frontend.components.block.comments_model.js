goog.provide('frontend.components.block.comments_model');
goog.scope(function(){
  frontend.components.block.comments_model.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.components.block.comments_model.comments_tag_ident = new cljs.core.Keyword("logseq.class","Comments","logseq.class/Comments",255691615);
frontend.components.block.comments_model.comment_tag_ident = new cljs.core.Keyword("logseq.class","Comment","logseq.class/Comment",132306954);
frontend.components.block.comments_model.comments_blocks_property = new cljs.core.Keyword("logseq.property.comments","blocks","logseq.property.comments/blocks",2143956109);
frontend.components.block.comments_model.tagged_with_QMARK_ = (function frontend$components$block$comments_model$tagged_with_QMARK_(block,tag_ident){
return cljs.core.boolean$(cljs.core.some((function (tag){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_ident,(((tag instanceof cljs.core.Keyword))?tag:new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(tag)));
}),new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(block)));
});
frontend.components.block.comments_model.comments_area_QMARK_ = (function frontend$components$block$comments_model$comments_area_QMARK_(block){
return frontend.components.block.comments_model.tagged_with_QMARK_(block,frontend.components.block.comments_model.comments_tag_ident);
});
frontend.components.block.comments_model.tagged_comment_block_QMARK_ = (function frontend$components$block$comments_model$tagged_comment_block_QMARK_(block){
return frontend.components.block.comments_model.tagged_with_QMARK_(block,frontend.components.block.comments_model.comment_tag_ident);
});
frontend.components.block.comments_model.comment_block_QMARK_ = (function frontend$components$block$comments_model$comment_block_QMARK_(block){
return ((frontend.components.block.comments_model.tagged_comment_block_QMARK_(block)) || (frontend.components.block.comments_model.comments_area_QMARK_(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block))));
});
frontend.components.block.comments_model.protected_comment_block_QMARK_ = (function frontend$components$block$comments_model$protected_comment_block_QMARK_(block){
return ((frontend.components.block.comments_model.comments_area_QMARK_(block)) || (frontend.components.block.comments_model.comment_block_QMARK_(block)));
});
frontend.components.block.comments_model.move_source_allowed_QMARK_ = (function frontend$components$block$comments_model$move_source_allowed_QMARK_(block,sibling_QMARK_){
var and__5140__auto__ = (!(frontend.components.block.comments_model.comment_block_QMARK_(block)));
if(and__5140__auto__){
var or__5142__auto__ = sibling_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (!(frontend.components.block.comments_model.comments_area_QMARK_(block)));
}
} else {
return and__5140__auto__;
}
});
frontend.components.block.comments_model.move_target_allowed_QMARK_ = (function frontend$components$block$comments_model$move_target_allowed_QMARK_(target_block,sibling_QMARK_){
var and__5140__auto__ = (!(frontend.components.block.comments_model.comment_block_QMARK_(target_block)));
if(and__5140__auto__){
var or__5142__auto__ = sibling_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (!(frontend.components.block.comments_model.comments_area_QMARK_(target_block)));
}
} else {
return and__5140__auto__;
}
});
frontend.components.block.comments_model.move_allowed_QMARK_ = (function frontend$components$block$comments_model$move_allowed_QMARK_(var_args){
var G__63589 = arguments.length;
switch (G__63589) {
case 2:
return frontend.components.block.comments_model.move_allowed_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.components.block.comments_model.move_allowed_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.components.block.comments_model.move_allowed_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (blocks,target_block){
return frontend.components.block.comments_model.move_allowed_QMARK_.cljs$core$IFn$_invoke$arity$3(blocks,target_block,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.components.block.comments_model.move_allowed_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (blocks,target_block,p__63590){
var map__63591 = p__63590;
var map__63591__$1 = cljs.core.__destructure_map(map__63591);
var sibling_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63591__$1,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060));
return cljs.core.boolean$((function (){var and__5140__auto__ = cljs.core.seq(blocks);
if(and__5140__auto__){
var and__5140__auto____$1 = target_block;
if(cljs.core.truth_(and__5140__auto____$1)){
var and__5140__auto____$2 = cljs.core.every_QMARK_((function (p1__63587_SHARP_){
return frontend.components.block.comments_model.move_source_allowed_QMARK_(p1__63587_SHARP_,sibling_QMARK_);
}),blocks);
if(and__5140__auto____$2){
return frontend.components.block.comments_model.move_target_allowed_QMARK_(target_block,sibling_QMARK_);
} else {
return and__5140__auto____$2;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})());
}));

(frontend.components.block.comments_model.move_allowed_QMARK_.cljs$lang$maxFixedArity = 3);

frontend.components.block.comments_model.comment_target_blocks = (function frontend$components$block$comments_model$comment_target_blocks(blocks){
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(frontend.components.block.comments_model.protected_comment_block_QMARK_,blocks)));
});
frontend.components.block.comments_model.range_comments_area_QMARK_ = (function frontend$components$block$comments_model$range_comments_area_QMARK_(block){
return cljs.core.boolean$(((frontend.components.block.comments_model.comments_area_QMARK_(block)) && (cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,frontend.components.block.comments_model.comments_blocks_property)))));
});
frontend.components.block.comments_model.comment_thread_target_blocks = (function frontend$components$block$comments_model$comment_thread_target_blocks(comments_area){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","deleted-at","logseq.property/deleted-at",685213751),cljs.core.get.cljs$core$IFn$_invoke$arity$2(comments_area,frontend.components.block.comments_model.comments_blocks_property)));
});
frontend.components.block.comments_model.comment_thread_targets_toggle_visible_QMARK_ = (function frontend$components$block$comments_model$comment_thread_targets_toggle_visible_QMARK_(comments_area){
return (cljs.core.count(frontend.components.block.comments_model.comment_thread_target_blocks(comments_area)) > (1));
});
frontend.components.block.comments_model.show_comment_thread_targets_QMARK_ = (function frontend$components$block$comments_model$show_comment_thread_targets_QMARK_(comments_area,targets_open_QMARK_){
return cljs.core.boolean$((function (){var and__5140__auto__ = targets_open_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.components.block.comments_model.comment_thread_targets_toggle_visible_QMARK_(comments_area);
} else {
return and__5140__auto__;
}
})());
});
frontend.components.block.comments_model.comment_thread_click_action = (function frontend$components$block$comments_model$comment_thread_click_action(comments_area_visible_QMARK_){
if(cljs.core.truth_(comments_area_visible_QMARK_)){
return new cljs.core.Keyword(null,"focus-comments-area","focus-comments-area",1995733443);
} else {
return new cljs.core.Keyword(null,"show-inline-comments","show-inline-comments",-1968695915);
}
});
frontend.components.block.comments_model.next_inline_comment_thread = (function frontend$components$block$comments_model$next_inline_comment_thread(current_inline_thread,target_block_uuid,comments_area_uuid){
var next_thread = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target-block-uuid","target-block-uuid",1683909942),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(target_block_uuid)),new cljs.core.Keyword(null,"comments-area-uuid","comments-area-uuid",-576841479),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(comments_area_uuid))], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_inline_thread,next_thread)){
return null;
} else {
return next_thread;
}
});
frontend.components.block.comments_model.inline_comment_container_id = (function frontend$components$block$comments_model$inline_comment_container_id(container_id){
if(cljs.core.int_QMARK_(container_id)){
return container_id;
} else {
return new cljs.core.Keyword(null,"unknown-container","unknown-container",1739831473);
}
});
frontend.components.block.comments_model.author_initials = (function frontend$components$block$comments_model$author_initials(author){
var author__$1 = clojure.string.trim((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(author)));
if(clojure.string.blank_QMARK_(author__$1)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("me",clojure.string.lower_case(author__$1))){
return "ME";
} else {
return clojure.string.upper_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(author__$1,(0),(1)));
}
}
});
frontend.components.block.comments_model.created_by_title = (function frontend$components$block$comments_model$created_by_title(block){
var G__63651 = new cljs.core.Keyword("logseq.property","created-by-ref","logseq.property/created-by-ref",854433908).cljs$core$IFn$_invoke$arity$1(block);
var G__63651__$1 = (((G__63651 == null))?null:new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(G__63651));
var G__63651__$2 = (((G__63651__$1 == null))?null:clojure.string.trim(G__63651__$1));
if((G__63651__$2 == null)){
return null;
} else {
return cljs.core.not_empty(G__63651__$2);
}
});
frontend.components.block.comments_model.created_by_avatar_src = (function frontend$components$block$comments_model$created_by_avatar_src(block){
var G__63652 = new cljs.core.Keyword("logseq.property","created-by-ref","logseq.property/created-by-ref",854433908).cljs$core$IFn$_invoke$arity$1(block);
var G__63652__$1 = (((G__63652 == null))?null:new cljs.core.Keyword("logseq.property.user","avatar","logseq.property.user/avatar",-416548858).cljs$core$IFn$_invoke$arity$1(G__63652));
var G__63652__$2 = (((G__63652__$1 == null))?null:clojure.string.trim(G__63652__$1));
if((G__63652__$2 == null)){
return null;
} else {
return cljs.core.not_empty(G__63652__$2);
}
});
frontend.components.block.comments_model.uuid_string = (function frontend$components$block$comments_model$uuid_string(value){
if(cljs.core.uuid_QMARK_(value)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
} else {
if(typeof value === 'string'){
return cljs.core.not_empty(value);
} else {
return null;

}
}
});
frontend.components.block.comments_model.created_by_uuid = (function frontend$components$block$comments_model$created_by_uuid(block){
var G__63653 = new cljs.core.Keyword("logseq.property","created-by-ref","logseq.property/created-by-ref",854433908).cljs$core$IFn$_invoke$arity$1(block);
var G__63653__$1 = (((G__63653 == null))?null:new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(G__63653));
if((G__63653__$1 == null)){
return null;
} else {
return frontend.components.block.comments_model.uuid_string(G__63653__$1);
}
});
frontend.components.block.comments_model.comment_row = (function frontend$components$block$comments_model$comment_row(block){
var author = frontend.components.block.comments_model.created_by_title(block);
var avatar_src = frontend.components.block.comments_model.created_by_avatar_src(block);
var author_uuid = frontend.components.block.comments_model.created_by_uuid(block);
var created_at = new cljs.core.Keyword("block","created-at","block/created-at",1440015).cljs$core$IFn$_invoke$arity$1(block);
var updated_at = new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551).cljs$core$IFn$_invoke$arity$1(block);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"author","author",2111686192),author,new cljs.core.Keyword(null,"avatar","avatar",-1607499307),frontend.components.block.comments_model.author_initials(author),new cljs.core.Keyword(null,"avatar-src","avatar-src",2143818962),avatar_src,new cljs.core.Keyword(null,"author-uuid","author-uuid",371566491),author_uuid,new cljs.core.Keyword(null,"body","body",-2049205669),clojure.string.trim((function (){var or__5142__auto__ = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})()),new cljs.core.Keyword(null,"created-at","created-at",-89248644),created_at,new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336),updated_at,new cljs.core.Keyword(null,"edited?","edited?",1327972333),cljs.core.boolean$(((typeof created_at === 'number') && (((typeof updated_at === 'number') && ((updated_at > created_at))))))], null);
});
frontend.components.block.comments_model.comment_author_visible_QMARK_ = (function frontend$components$block$comments_model$comment_author_visible_QMARK_(current_user_uuid){
return cljs.core.boolean$(frontend.components.block.comments_model.uuid_string(current_user_uuid));
});
frontend.components.block.comments_model.collapsed_comments_label = (function frontend$components$block$comments_model$collapsed_comments_label(summary){
if(cljs.core.truth_(summary)){
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.comments","collapsed-summary","block.comments/collapsed-summary",232033569),new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(summary),new cljs.core.Keyword(null,"latest-author","latest-author",-1906519395).cljs$core$IFn$_invoke$arity$1(summary)], 0));
} else {
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.comments","label","block.comments/label",178653285)], 0));
}
});
frontend.components.block.comments_model.comments_area_title = (function frontend$components$block$comments_model$comments_area_title(comments_area){
var or__5142__auto__ = (function (){var G__63654 = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(comments_area);
var G__63654__$1 = (((G__63654 == null))?null:clojure.string.trim(G__63654));
if((G__63654__$1 == null)){
return null;
} else {
return cljs.core.not_empty(G__63654__$1);
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.comments","label","block.comments/label",178653285)], 0));
}
});
frontend.components.block.comments_model.same_local_day_QMARK_ = (function frontend$components$block$comments_model$same_local_day_QMARK_(a,b){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a.getFullYear(),b.getFullYear())) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a.getMonth(),b.getMonth())) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a.getDate(),b.getDate())))));
});
frontend.components.block.comments_model.yesterday_QMARK_ = (function frontend$components$block$comments_model$yesterday_QMARK_(date,now){
var yesterday = (new Date(now.getFullYear(),now.getMonth(),(now.getDate() - (1))));
return frontend.components.block.comments_model.same_local_day_QMARK_(date,yesterday);
});
frontend.components.block.comments_model.comment_time = (function frontend$components$block$comments_model$comment_time(date){
return date.toLocaleTimeString(undefined,({"hour": "numeric", "minute": "2-digit"}));
});
frontend.components.block.comments_model.comment_date = (function frontend$components$block$comments_model$comment_date(date){
return date.toLocaleDateString(undefined,({"year": "numeric", "month": "short", "day": "numeric"}));
});
frontend.components.block.comments_model.comment_time_label = (function frontend$components$block$comments_model$comment_time_label(var_args){
var G__63656 = arguments.length;
switch (G__63656) {
case 1:
return frontend.components.block.comments_model.comment_time_label.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.components.block.comments_model.comment_time_label.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.components.block.comments_model.comment_time_label.cljs$core$IFn$_invoke$arity$1 = (function (created_at){
return frontend.components.block.comments_model.comment_time_label.cljs$core$IFn$_invoke$arity$2(created_at,(new Date()));
}));

(frontend.components.block.comments_model.comment_time_label.cljs$core$IFn$_invoke$arity$2 = (function (created_at,now){
if(typeof created_at === 'number'){
var date = (new Date(created_at));
var time = frontend.components.block.comments_model.comment_time(date);
if(frontend.components.block.comments_model.same_local_day_QMARK_(date,now)){
return time;
} else {
if(frontend.components.block.comments_model.yesterday_QMARK_(date,now)){
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.comments","yesterday-at","block.comments/yesterday-at",-1833395451),time], 0));
} else {
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.comments","date-at-time","block.comments/date-at-time",778659113),frontend.components.block.comments_model.comment_date(date),time], 0));

}
}
} else {
return null;
}
}));

(frontend.components.block.comments_model.comment_time_label.cljs$lang$maxFixedArity = 2);

frontend.components.block.comments_model.comment_draft_block = (function frontend$components$block$comments_model$comment_draft_block(comments_block,draft_uuid,draft){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),draft_uuid,new cljs.core.Keyword("block","title","block/title",710445684),(function (){var or__5142__auto__ = draft;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(comments_block),new cljs.core.Keyword("block","parent","block/parent",-918309064),comments_block], null);
});
frontend.components.block.comments_model.submittable_comment_content = (function frontend$components$block$comments_model$submittable_comment_content(draft){
return cljs.core.not_empty(clojure.string.trim((function (){var or__5142__auto__ = draft;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})()));
});
frontend.components.block.comments_model.comment_draft_storage_key = (function frontend$components$block$comments_model$comment_draft_storage_key(comments_block){
var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(comments_block);
if(cljs.core.truth_(temp__5825__auto__)){
var comments_uuid = temp__5825__auto__;
return (""+"comments-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(comments_uuid)+"-draft");
} else {
return null;
}
});
frontend.components.block.comments_model.local_storage = (function frontend$components$block$comments_model$local_storage(){
return frontend.components.block.comments_model.goog$module$goog$object.get(globalThis,"localStorage");
});
frontend.components.block.comments_model.saved_comment_draft = (function frontend$components$block$comments_model$saved_comment_draft(comments_block){
var temp__5825__auto__ = frontend.components.block.comments_model.comment_draft_storage_key(comments_block);
if(cljs.core.truth_(temp__5825__auto__)){
var key = temp__5825__auto__;
var G__63657 = frontend.components.block.comments_model.local_storage();
if((G__63657 == null)){
return null;
} else {
return G__63657.getItem(key);
}
} else {
return null;
}
});
frontend.components.block.comments_model.clear_comment_draft_BANG_ = (function frontend$components$block$comments_model$clear_comment_draft_BANG_(comments_block){
var temp__5825__auto__ = frontend.components.block.comments_model.comment_draft_storage_key(comments_block);
if(cljs.core.truth_(temp__5825__auto__)){
var key = temp__5825__auto__;
var G__63658 = frontend.components.block.comments_model.local_storage();
if((G__63658 == null)){
return null;
} else {
return G__63658.removeItem(key);
}
} else {
return null;
}
});
frontend.components.block.comments_model.save_comment_draft_BANG_ = (function frontend$components$block$comments_model$save_comment_draft_BANG_(comments_block,draft){
if((!(clojure.string.blank_QMARK_((function (){var or__5142__auto__ = draft;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})())))){
var temp__5825__auto__ = frontend.components.block.comments_model.comment_draft_storage_key(comments_block);
if(cljs.core.truth_(temp__5825__auto__)){
var key = temp__5825__auto__;
var G__63659 = frontend.components.block.comments_model.local_storage();
if((G__63659 == null)){
return null;
} else {
return G__63659.setItem(key,draft);
}
} else {
return null;
}
} else {
return frontend.components.block.comments_model.clear_comment_draft_BANG_(comments_block);
}
});
frontend.components.block.comments_model.comments_block_current_page_QMARK_ = (function frontend$components$block$comments_model$comments_block_current_page_QMARK_(comments_block,current_page){
return cljs.core.boolean$((function (){var and__5140__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(comments_block);
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = current_page;
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(comments_block))),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_page)));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})());
});
frontend.components.block.comments_model.comment_owned_by_QMARK_ = (function frontend$components$block$comments_model$comment_owned_by_QMARK_(block,current_user_uuid){
var created_by = frontend.components.block.comments_model.created_by_uuid(block);
var current_user = frontend.components.block.comments_model.uuid_string(current_user_uuid);
return cljs.core.boolean$((cljs.core.truth_(created_by)?(function (){var and__5140__auto__ = current_user;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(created_by,current_user);
} else {
return and__5140__auto__;
}
})():(current_user == null)));
});
frontend.components.block.comments_model.comment_actions = (function frontend$components$block$comments_model$comment_actions(block,current_user_uuid){
var G__63660 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reaction","reaction",490869788)], null);
if(frontend.components.block.comments_model.comment_owned_by_QMARK_(block,current_user_uuid)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__63660,new cljs.core.Keyword(null,"edit","edit",-1641834166),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"delete","delete",-1768633620)], 0));
} else {
return G__63660;
}
});
frontend.components.block.comments_model.comment_edit_cursor_position = (function frontend$components$block$comments_model$comment_edit_cursor_position(body){
return cljs.core.count((function (){var or__5142__auto__ = body;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})());
});
frontend.components.block.comments_model.comment_submit_shortcut_QMARK_ = (function frontend$components$block$comments_model$comment_submit_shortcut_QMARK_(var_args){
var G__63662 = arguments.length;
switch (G__63662) {
case 1:
return frontend.components.block.comments_model.comment_submit_shortcut_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.components.block.comments_model.comment_submit_shortcut_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.components.block.comments_model.comment_submit_shortcut_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (event){
return frontend.components.block.comments_model.comment_submit_shortcut_QMARK_.cljs$core$IFn$_invoke$arity$2(event,null);
}));

(frontend.components.block.comments_model.comment_submit_shortcut_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (event,editor_action){
return cljs.core.boolean$((((editor_action == null)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",frontend.components.block.comments_model.goog$module$goog$object.get(event,"key"))) && (((cljs.core.not(frontend.util.native_event_is_composing_QMARK_(event))) && ((!(frontend.components.block.comments_model.goog$module$goog$object.get(event,"shiftKey") === true)))))))));
}));

(frontend.components.block.comments_model.comment_submit_shortcut_QMARK_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=frontend.components.block.comments_model.js.map
