goog.provide('frontend.common.reaction');
/**
 * Summarize reactions for display.
 */
frontend.common.reaction.summarize = (function frontend$common$reaction$summarize(reactions,current_user_id){
var reaction_by_current_user_QMARK_ = (function (reaction){
var user = new cljs.core.Keyword("logseq.property","created-by-ref","logseq.property/created-by-ref",854433908).cljs$core$IFn$_invoke$arity$1(reaction);
if(cljs.core.map_QMARK_(user)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_user_id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(user))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_user_id,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(user))));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_user_id,user);
}
});
var reaction_username = (function (reaction){
var user = new cljs.core.Keyword("logseq.property","created-by-ref","logseq.property/created-by-ref",854433908).cljs$core$IFn$_invoke$arity$1(reaction);
if(cljs.core.map_QMARK_(user)){
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(user);
} else {
return null;
}
});
var summary = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,reaction){
var emoji_id = new cljs.core.Keyword("logseq.property.reaction","emoji-id","logseq.property.reaction/emoji-id",-987758645).cljs$core$IFn$_invoke$arity$1(reaction);
var username = reaction_username(reaction);
if(typeof emoji_id === 'string'){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3((function (){var G__69768 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emoji_id,new cljs.core.Keyword(null,"count","count",2139924085)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
if(typeof username === 'string'){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__69768,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emoji_id,new cljs.core.Keyword(null,"usernames","usernames",-1647337722)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),username);
} else {
return G__69768;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emoji_id,new cljs.core.Keyword(null,"reacted-by-me?","reacted-by-me?",959143032)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__69760_SHARP_){
var or__5142__auto__ = p1__69760_SHARP_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return reaction_by_current_user_QMARK_(reaction);
}
}),false));
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,reactions);
return cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,new cljs.core.Keyword(null,"count","count",2139924085)),new cljs.core.Keyword(null,"emoji-id","emoji-id",-1329581482)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__69771){
var vec__69772 = p__69771;
var emoji_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69772,(0),null);
var map__69775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69772,(1),null);
var map__69775__$1 = cljs.core.__destructure_map(map__69775);
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69775__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var reacted_by_me_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69775__$1,new cljs.core.Keyword(null,"reacted-by-me?","reacted-by-me?",959143032));
var usernames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69775__$1,new cljs.core.Keyword(null,"usernames","usernames",-1647337722));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"emoji-id","emoji-id",-1329581482),emoji_id,new cljs.core.Keyword(null,"count","count",2139924085),count,new cljs.core.Keyword(null,"reacted-by-me?","reacted-by-me?",959143032),cljs.core.boolean$(reacted_by_me_QMARK_),new cljs.core.Keyword(null,"usernames","usernames",-1647337722),((cljs.core.seq(usernames))?cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(usernames)):null)], null);
}),summary)));
});

//# sourceMappingURL=frontend.common.reaction.js.map
