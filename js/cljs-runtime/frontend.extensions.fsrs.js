goog.provide('frontend.extensions.fsrs');
frontend.commands.register_slash_command((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor.slash","cloze","editor.slash/cloze",-1566543801)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),"{{cloze }}",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),(2)], null)], null)], null),null,new cljs.core.Keyword("icon","brackets-contain","icon/brackets-contain",631286456)], null);
}));
frontend.extensions.fsrs.instant__GT_inst_ms = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.inst_ms,tick.core.inst);
frontend.extensions.fsrs.inst_ms__GT_instant = (function frontend$extensions$fsrs$inst_ms__GT_instant(ms){
return tick.core.instant.cljs$core$IFn$_invoke$arity$1((new Date(ms)));
});
/**
 * Convert card-map to value stored in property
 */
frontend.extensions.fsrs.fsrs_card_map__GT_property_fsrs_state = (function frontend$extensions$fsrs$fsrs_card_map__GT_property_fsrs_state(fsrs_card_map){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(fsrs_card_map,new cljs.core.Keyword(null,"last-repeat","last-repeat",-1968073113),frontend.extensions.fsrs.instant__GT_inst_ms),new cljs.core.Keyword(null,"due","due",-1754731313),frontend.extensions.fsrs.instant__GT_inst_ms);
});
/**
 * opposite version of `fsrs-card->property-fsrs-state`
 */
frontend.extensions.fsrs.property_fsrs_state__GT_fsrs_card_map = (function frontend$extensions$fsrs$property_fsrs_state__GT_fsrs_card_map(prop_fsrs_state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(prop_fsrs_state,new cljs.core.Keyword(null,"last-repeat","last-repeat",-1968073113),frontend.extensions.fsrs.inst_ms__GT_instant),new cljs.core.Keyword(null,"due","due",-1754731313),frontend.extensions.fsrs.inst_ms__GT_instant);
});
frontend.extensions.fsrs.tag_ident = (function frontend$extensions$fsrs$tag_ident(tag){
if((tag instanceof cljs.core.Keyword)){
return tag;
} else {
if(cljs.core.map_QMARK_(tag)){
return new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(tag);
} else {
return null;

}
}
});
frontend.extensions.fsrs.tag_extends = (function frontend$extensions$fsrs$tag_extends(tag){
if(cljs.core.map_QMARK_(tag)){
var extends$ = new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803).cljs$core$IFn$_invoke$arity$1(tag);
if(cljs.core.sequential_QMARK_(extends$)){
return extends$;
} else {
if((!((extends$ == null)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [extends$], null);
} else {
return null;

}
}
} else {
return null;
}
});
/**
 * True when `tag` is Card or any ancestor in :logseq.property.class/extends is Card.
 *   Matches worker `get-structured-children` of :logseq.class/Card.
 */
frontend.extensions.fsrs.tag_or_extends_card_QMARK_ = (function frontend$extensions$fsrs$tag_or_extends_card_QMARK_(tag){
var tags = (new cljs.core.List(null,tag,null,(1),null));
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
var temp__5825__auto__ = cljs.core.first(tags);
if(cljs.core.truth_(temp__5825__auto__)){
var current = temp__5825__auto__;
var ident = frontend.extensions.fsrs.tag_ident(current);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.class","Card","logseq.class/Card",-1358281109),ident)){
return true;
} else {
if(cljs.core.contains_QMARK_(seen,ident)){
var G__53276 = cljs.core.rest(tags);
var G__53277 = seen;
tags = G__53276;
seen = G__53277;
continue;
} else {
var G__53278 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(tags),frontend.extensions.fsrs.tag_extends(current));
var G__53279 = (function (){var G__53180 = seen;
if(cljs.core.truth_(ident)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__53180,ident);
} else {
return G__53180;
}
})();
tags = G__53278;
seen = G__53279;
continue;

}
}
} else {
return null;
}
break;
}
});
frontend.extensions.fsrs.card_block_QMARK_ = (function frontend$extensions$fsrs$card_block_QMARK_(block){
return cljs.core.boolean$(cljs.core.some(frontend.extensions.fsrs.tag_or_extends_card_QMARK_,new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(block)));
});
/**
 * fsrs card-map for a block already known to be a card.
 *   Return default card-map if `:logseq.property.fsrs/state` or `:logseq.property.fsrs/due` is nil
 */
frontend.extensions.fsrs.block__GT_card_map = (function frontend$extensions$fsrs$block__GT_card_map(block_entity){
var fsrs_state = new cljs.core.Keyword("logseq.property.fsrs","state","logseq.property.fsrs/state",-1165165087).cljs$core$IFn$_invoke$arity$1(block_entity);
var fsrs_due = new cljs.core.Keyword("logseq.property.fsrs","due","logseq.property.fsrs/due",-1089080549).cljs$core$IFn$_invoke$arity$1(block_entity);
var return_default_card_map_QMARK_ = cljs.core.not((function (){var and__5140__auto__ = fsrs_state;
if(cljs.core.truth_(and__5140__auto__)){
return fsrs_due;
} else {
return and__5140__auto__;
}
})());
if(return_default_card_map_QMARK_){
var temp__5823__auto__ = (function (){var G__53181 = new cljs.core.Keyword("block","created-at","block/created-at",1440015).cljs$core$IFn$_invoke$arity$1(block_entity);
var G__53181__$1 = (((G__53181 == null))?null:(new Date(G__53181)));
if((G__53181__$1 == null)){
return null;
} else {
return tick.core.instant.cljs$core$IFn$_invoke$arity$1(G__53181__$1);
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var block_created_at = temp__5823__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(open_spaced_repetition.cljc_fsrs.core.new_card_BANG_(),new cljs.core.Keyword(null,"last-repeat","last-repeat",-1968073113),block_created_at,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"due","due",-1754731313),block_created_at], 0));
} else {
return open_spaced_repetition.cljc_fsrs.core.new_card_BANG_();
}
} else {
return frontend.extensions.fsrs.property_fsrs_state__GT_fsrs_card_map(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fsrs_state,new cljs.core.Keyword(null,"due","due",-1754731313),fsrs_due));
}
});
/**
 * Return nil if block is not #Card and does not have a tag that extends Card.
 */
frontend.extensions.fsrs.get_card_map = (function frontend$extensions$fsrs$get_card_map(block_entity){
if(frontend.extensions.fsrs.card_block_QMARK_(block_entity)){
return frontend.extensions.fsrs.block__GT_card_map(block_entity);
} else {
return null;
}
});
frontend.extensions.fsrs.repeat_card_BANG_ = (function frontend$extensions$fsrs$repeat_card_BANG_(repo,block_id,rating){
var eid = ((cljs.core.uuid_QMARK_(block_id))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null):block_id);
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null)], null),eid], 0))),(function (block_entity){
return promesa.protocols._promise((function (){var temp__5825__auto__ = frontend.extensions.fsrs.get_card_map(block_entity);
if(cljs.core.truth_(temp__5825__auto__)){
var card_map = temp__5825__auto__;
var next_card_map = open_spaced_repetition.cljc_fsrs.core.repeat_card_BANG_.cljs$core$IFn$_invoke$arity$2(card_map,rating);
var prop_card_map = frontend.extensions.fsrs.fsrs_card_map__GT_property_fsrs_state(next_card_map);
var prop_fsrs_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(prop_card_map,new cljs.core.Keyword(null,"due","due",-1754731313)),new cljs.core.Keyword("logseq","last-rating","logseq/last-rating",952769713),rating);
var prop_fsrs_due = new cljs.core.Keyword(null,"due","due",-1754731313).cljs$core$IFn$_invoke$arity$1(prop_card_map);
return frontend.handler.property.set_block_properties_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block_entity),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.property.fsrs","state","logseq.property.fsrs/state",-1165165087),prop_fsrs_state,new cljs.core.Keyword("logseq.property.fsrs","due","logseq.property.fsrs/due",-1089080549),prop_fsrs_due], null));
} else {
return null;
}
})());
}));
}));
});
/**
 * Persist a rating and refresh the sidebar due-cards counter.
 */
frontend.extensions.fsrs.rate_card_BANG_ = (function frontend$extensions$fsrs$rate_card_BANG_(repo,block_id,rating){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.extensions.fsrs.repeat_card_BANG_(repo,block_id,rating)),(function (___21901__auto__){
return promesa.protocols._promise((frontend.extensions.fsrs.update_due_cards_count_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.extensions.fsrs.update_due_cards_count_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.extensions.fsrs.update_due_cards_count_BANG_.call(null)));
}));
}));
});
frontend.extensions.fsrs._LT_get_due_card_block_ids = (function frontend$extensions$fsrs$_LT_get_due_card_block_ids(repo,cards_id){
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-fsrs-due-card-block-ids","thread-api/get-fsrs-due-card-block-ids",1742108326),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,cards_id], 0));
});
/**
 * Block uuids of all cards in the scope of `cards-id`, whether due or not.
 */
frontend.extensions.fsrs._LT_get_card_block_ids = (function frontend$extensions$fsrs$_LT_get_card_block_ids(repo,cards_id){
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-fsrs-card-block-ids","thread-api/get-fsrs-card-block-ids",-1910833735),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,cards_id], 0));
});
frontend.extensions.fsrs.global_cards_id_QMARK_ = (function frontend$extensions$fsrs$global_cards_id_QMARK_(cards_id){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"global","global",93595047),null,"global",null], null), null),cards_id);
});
frontend.extensions.fsrs.selected_cards_title = (function frontend$extensions$fsrs$selected_cards_title(all_cards,cards_id){
var or__5142__auto__ = cljs.core.some((function (card){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(card),cards_id)){
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(card);
} else {
return null;
}
}),all_cards);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core.some((function (card){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(card),new cljs.core.Keyword(null,"global","global",93595047))){
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(card);
} else {
return null;
}
}),all_cards);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("flashcard","all-cards","flashcard/all-cards",-1889764491)], 0));
}
}
});
frontend.extensions.fsrs._LT_create_cards_block_BANG_ = (function frontend$extensions$fsrs$_LT_create_cards_block_BANG_(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_today_journal_title(frontend.state.get_current_repo())),(function (today_page_title){
return promesa.protocols._promise(frontend.handler.editor.api_insert_new_block_BANG_("",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"page","page",849072397),today_page_title,new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.class","Cards","logseq.class/Cards",-1284265167),null], null), null)], null),new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),false,new cljs.core.Keyword(null,"end?","end?",-1423391609),true], null)));
}));
}));
});
frontend.extensions.fsrs.btn_with_shortcut = (function frontend$extensions$fsrs$btn_with_shortcut(p__53182){
var map__53183 = p__53182;
var map__53183__$1 = cljs.core.__destructure_map(map__53183);
var shortcut = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53183__$1,new cljs.core.Keyword(null,"shortcut","shortcut",-431647697));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53183__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var btn_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53183__$1,new cljs.core.Keyword(null,"btn-text","btn-text",1312481577));
var due = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53183__$1,new cljs.core.Keyword(null,"due","due",-1754731313));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53183__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53183__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var show_due_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53183__$1,new cljs.core.Keyword(null,"show-due?","show-due?",-1489125991),true);
var mobile_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53183__$1,new cljs.core.Keyword(null,"mobile?","mobile?",1358664528));
var bg_class = (function (){var G__53184 = id;
switch (G__53184) {
case "card-again":
return "primary-red";

break;
case "card-hard":
return "primary-purple";

break;
case "card-good":
return "primary-logseq";

break;
case "card-easy":
return "primary-green";

break;
default:
return null;

}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.gap-2","div.flex.flex-row.items-center.gap-2",212596841),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(mobile_QMARK_)?"w-full":null)], null),(function (){var G__53185 = (function (){var G__53187 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),false,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(mobile_QMARK_)?"!w-full !min-h-[48px] !px-4 !py-3 rounded-xl text-base justify-center ":"!px-2 !py-1 "))+"bg-primary/5 hover:bg-primary/10\n        border-primary opacity-90 hover:opacity-100 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(bg_class)),new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
return frontend.util.stop_propagation(e);
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
return setTimeout((function (){
return (on_click.cljs$core$IFn$_invoke$arity$0 ? on_click.cljs$core$IFn$_invoke$arity$0() : on_click.call(null));
}),(10));
})], null);
if(cljs.core.not(mobile_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53187,new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("flashcard","shortcut-tooltip","flashcard/shortcut-tooltip",713082603),shortcut], 0)));
} else {
return G__53187;
}
})();
var G__53186 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.gap-1","div.flex.flex-row.items-center.gap-1",-1023433319),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),btn_text], null),(cljs.core.truth_((function (){var or__5142__auto__ = mobile_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.util.sm_breakpoint_QMARK_();
}
})())?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.scale-90","span.scale-90",1153506075),logseq.shui.ui.shortcut(shortcut)], null))], null);
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__53185,G__53186) : logseq.shui.ui.button.call(null,G__53185,G__53186));
})(),(cljs.core.truth_((function (){var and__5140__auto__ = show_due_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return due;
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.opacity-50","div.text-sm.opacity-50",829333122),frontend.util.human_time.cljs$core$IFn$_invoke$arity$variadic(due,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ago?","ago?",1414384824),false], null)], 0))], null):null)], null);
});
frontend.extensions.fsrs.has_cloze_QMARK_ = (function frontend$extensions$fsrs$has_cloze_QMARK_(block){
return clojure.string.includes_QMARK_(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block),"{{cloze ");
});
frontend.extensions.fsrs.phase__GT_next_phase = (function frontend$extensions$fsrs$phase__GT_next_phase(block,phase){
var cloze_QMARK_ = frontend.extensions.fsrs.has_cloze_QMARK_(block);
var G__53188 = phase;
var G__53188__$1 = (((G__53188 instanceof cljs.core.Keyword))?G__53188.fqn:null);
switch (G__53188__$1) {
case "init":
if(cloze_QMARK_){
return new cljs.core.Keyword(null,"show-cloze","show-cloze",-1276602675);
} else {
return new cljs.core.Keyword(null,"show-answer","show-answer",876509201);
}

break;
case "show-cloze":
if(cloze_QMARK_){
return new cljs.core.Keyword(null,"show-answer","show-answer",876509201);
} else {
return new cljs.core.Keyword(null,"init","init",-1875481434);
}

break;
case "show-answer":
return new cljs.core.Keyword(null,"init","init",-1875481434);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53188__$1))));

}
});
frontend.extensions.fsrs.ratings = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"again","again",1312602037),new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"good","good",511701169),new cljs.core.Keyword(null,"easy","easy",315769928)], null);
frontend.extensions.fsrs.rating__GT_shortcut = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"again","again",1312602037),"1",new cljs.core.Keyword(null,"hard","hard",2068420191),"2",new cljs.core.Keyword(null,"good","good",511701169),"3",new cljs.core.Keyword(null,"easy","easy",315769928),"4"], null);
frontend.extensions.fsrs.rating_key = (function frontend$extensions$fsrs$rating_key(rating){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("flashcard.rating",cljs.core.name(rating));
});
frontend.extensions.fsrs.rating_desc_key = (function frontend$extensions$fsrs$rating_desc_key(rating){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("flashcard.rating",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(rating))+"-desc"));
});
frontend.extensions.fsrs.rating_label = (function frontend$extensions$fsrs$rating_label(rating){
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.extensions.fsrs.rating_key(rating)], 0));
});
frontend.extensions.fsrs.rating_btns = (function frontend$extensions$fsrs$rating_btns(repo,block,_STAR_card_index,_STAR_phase,opts){
var block_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.gap-8.flex-wrap","div.flex.flex-row.items-center.gap-8.flex-wrap",-1342542990),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"mobile?","mobile?",1358664528).cljs$core$IFn$_invoke$arity$1(opts))?"ls-mobile-card-rating-buttons":null)], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (rating){
var card_map = frontend.extensions.fsrs.get_card_map(block);
var due = (cljs.core.truth_(card_map)?new cljs.core.Keyword(null,"due","due",-1754731313).cljs$core$IFn$_invoke$arity$1(open_spaced_repetition.cljc_fsrs.core.repeat_card_BANG_.cljs$core$IFn$_invoke$arity$2(card_map,rating)):null);
return frontend.extensions.fsrs.btn_with_shortcut(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"btn-text","btn-text",1312481577),frontend.extensions.fsrs.rating_label(rating),new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),(frontend.extensions.fsrs.rating__GT_shortcut.cljs$core$IFn$_invoke$arity$1 ? frontend.extensions.fsrs.rating__GT_shortcut.cljs$core$IFn$_invoke$arity$1(rating) : frontend.extensions.fsrs.rating__GT_shortcut.call(null,rating)),new cljs.core.Keyword(null,"due","due",-1754731313),due,new cljs.core.Keyword(null,"show-due?","show-due?",-1489125991),cljs.core.not(new cljs.core.Keyword(null,"mobile?","mobile?",1358664528).cljs$core$IFn$_invoke$arity$1(opts)),new cljs.core.Keyword(null,"mobile?","mobile?",1358664528),new cljs.core.Keyword(null,"mobile?","mobile?",1358664528).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"id","id",-1388402092),(""+"card-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(rating))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.extensions.fsrs.rate_card_BANG_(repo,block_id,rating);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_card_index,cljs.core.inc);

return cljs.core.reset_BANG_(_STAR_phase,new cljs.core.Keyword(null,"init","init",-1875481434));
})], null));
}),frontend.extensions.fsrs.ratings),(cljs.core.truth_(new cljs.core.Keyword(null,"mobile?","mobile?",1358664528).cljs$core$IFn$_invoke$arity$1(opts))?null:(function (){var G__53189 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),"!px-0 text-muted-foreground !h-4",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var G__53191 = e.target;
var G__53192 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4.max-w-lg","div.p-4.max-w-lg",1345462591),(function (){var iter__5628__auto__ = (function frontend$extensions$fsrs$rating_btns_$_iter__53194(s__53195){
return (new cljs.core.LazySeq(null,(function (){
var s__53195__$1 = s__53195;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__53195__$1);
if(temp__5825__auto__){
var s__53195__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53195__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__53195__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__53197 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__53196 = (0);
while(true){
if((i__53196 < size__5627__auto__)){
var rating = cljs.core._nth(c__5626__auto__,i__53196);
cljs.core.chunk_append(b__53197,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dl","dl",-2140151713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dt","dt",-368444759),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.extensions.fsrs.rating_key(rating)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dd","dd",-1340437629),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.extensions.fsrs.rating_desc_key(rating)], 0))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(rating)], null)));

var G__53282 = (i__53196 + (1));
i__53196 = G__53282;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53197),frontend$extensions$fsrs$rating_btns_$_iter__53194(cljs.core.chunk_rest(s__53195__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53197),null);
}
} else {
var rating = cljs.core.first(s__53195__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dl","dl",-2140151713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dt","dt",-368444759),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.extensions.fsrs.rating_key(rating)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dd","dd",-1340437629),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.extensions.fsrs.rating_desc_key(rating)], 0))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(rating)], null)),frontend$extensions$fsrs$rating_btns_$_iter__53194(cljs.core.rest(s__53195__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(frontend.extensions.fsrs.ratings);
})()], null);
});
var G__53193 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align","align",1964212802),"start"], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__53191,G__53192,G__53193) : logseq.shui.ui.popup_show_BANG_.call(null,G__53191,G__53192,G__53193));
})], null);
var G__53190 = frontend.ui.icon("info-circle");
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__53189,G__53190) : logseq.shui.ui.button.call(null,G__53189,G__53190));
})())], null);
});
frontend.extensions.fsrs.card_view = (function (){var render_fn__31744__auto__ = (function frontend$extensions$fsrs$card_view(repo,block_id,_STAR_card_index,_STAR_phase,opts){
var _STAR_block = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,block_id], null));
var vec__53198 = logseq.shui.hooks.use_atom(_STAR_block);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53198,(0),null);
var vec__53201 = logseq.shui.hooks.use_atom(_STAR_phase);
var phase = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53201,(0),null);
var vec__53204 = logseq.shui.hooks.use_atom(_STAR_card_index);
var _card_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53204,(0),null);
logseq.shui.hooks.use_effect_BANG_((function (){
cljs.core.reset_BANG_(_STAR_block,null);

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,block_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),true], null)], 0))),(function (result){
return promesa.protocols._promise(cljs.core.reset_BANG_(_STAR_block,result));
}));
}));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,block_id], null));

if(cljs.core.truth_(block)){
var next_phase = frontend.extensions.fsrs.phase__GT_next_phase(block,phase);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-card.content.flex.flex-col.overflow-hidden","div.ls-card.content.flex.flex-col.overflow-hidden",-966066524),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"mobile?","mobile?",1358664528).cljs$core$IFn$_invoke$arity$1(opts))?"ls-mobile-card":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-card-scroll.flex-1.min-h-0.overflow-y-auto.overflow-x-hidden","div.ls-card-scroll.flex-1.min-h-0.overflow-y-auto.overflow-x-hidden",-1333457175),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-4.ml-2.opacity-70.text-sm","div.mb-4.ml-2.opacity-70.text-sm",-1922039193),frontend.components.block.breadcrumb.breadcrumb(cljs.core.PersistentArrayMap.EMPTY,repo,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block","block",664686210),block], null))], null),(function (){var option = (function (){var G__53207 = phase;
var G__53207__$1 = (((G__53207 instanceof cljs.core.Keyword))?G__53207.fqn:null);
switch (G__53207__$1) {
case "init":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-children?","hide-children?",-2104598603),true], null);

break;
case "show-cloze":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-cloze?","show-cloze?",1773680872),true,new cljs.core.Keyword(null,"hide-children?","hide-children?",-2104598603),true], null);

break;
default:
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-cloze?","show-cloze?",1773680872),true,new cljs.core.Keyword(null,"ignore-block-collapsed?","ignore-block-collapsed?",1690042331),true], null);

}
})();
return frontend.components.block.blocks_container(option,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-8.pb-2.shrink-0","div.mt-8.pb-2.shrink-0",-785192146),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"mobile?","mobile?",1358664528).cljs$core$IFn$_invoke$arity$1(opts))?"ls-mobile-card-actions":null)], null),((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-cloze","show-cloze",-1276602675),null,new cljs.core.Keyword(null,"show-answer","show-answer",876509201),null], null), null),next_phase))?frontend.extensions.fsrs.btn_with_shortcut(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"btn-text","btn-text",1312481577),(function (){var G__53208 = next_phase;
var G__53208__$1 = (((G__53208 instanceof cljs.core.Keyword))?G__53208.fqn:null);
switch (G__53208__$1) {
case "show-answer":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("flashcard.review","show-answers","flashcard.review/show-answers",1731228235)], 0));

break;
case "show-cloze":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("flashcard.review","show-clozes","flashcard.review/show-clozes",-331718895)], 0));

break;
case "init":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("flashcard.review","hide-answers","flashcard.review/hide-answers",-1750187732)], 0));

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53208__$1))));

}
})(),new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),"s",new cljs.core.Keyword(null,"mobile?","mobile?",1358664528),new cljs.core.Keyword(null,"mobile?","mobile?",1358664528).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"id","id",-1388402092),"card-answers",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_phase,(function (phase__$1){
return frontend.extensions.fsrs.phase__GT_next_phase(block,phase__$1);
}));
})], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-center","div.flex.justify-center",-491420122),frontend.extensions.fsrs.rating_btns(repo,block,_STAR_card_index,_STAR_phase,opts)], null))], null)], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$fsrs$card_view__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__53209 = cljs.core.first(args__31746__auto__);
var G__53210 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__53209,G__53210) : io.factorhouse.hsx.core.obj_get.call(null,G__53209,G__53210));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"card-view","card-view",686197786,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"private","private",-558947994),true], null)),args__31746__auto__),frontend$extensions$fsrs$card_view,args__31746__auto__,null);
}
};
var frontend$extensions$fsrs$card_view = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__53285__i = 0, G__53285__a = new Array(arguments.length -  0);
while (G__53285__i < G__53285__a.length) {G__53285__a[G__53285__i] = arguments[G__53285__i + 0]; ++G__53285__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__53285__a,0,null);
} 
return frontend$extensions$fsrs$card_view__delegate.call(this,args__31746__auto__);};
frontend$extensions$fsrs$card_view.cljs$lang$maxFixedArity = 0;
frontend$extensions$fsrs$card_view.cljs$lang$applyTo = (function (arglist__53286){
var args__31746__auto__ = cljs.core.seq(arglist__53286);
return frontend$extensions$fsrs$card_view__delegate(args__31746__auto__);
});
frontend$extensions$fsrs$card_view.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$fsrs$card_view__delegate;
return frontend$extensions$fsrs$card_view;
})()
;
var memo_comp__31747__auto__ = (function (){var G__53211 = comp__31745__auto__;
var G__53212 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__53211,G__53212) : io.factorhouse.hsx.core.react_memo.call(null,G__53211,G__53212));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"card-view");

return comp__31745__auto__;
})();
frontend.extensions.fsrs.cards_view = (function (){var render_fn__31744__auto__ = (function frontend$extensions$fsrs$cards_view(initial_cards_id,opts_STAR_){
var repo = frontend.state.get_current_repo();
var opts = (function (){var or__5142__auto__ = opts_STAR_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var mobile_QMARK_ = new cljs.core.Keyword(null,"mobile?","mobile?",1358664528).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cards_id = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = initial_cards_id;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"global","global",93595047);
}
})());
}),cljs.core.PersistentVector.EMPTY);
var vec__53213 = logseq.shui.hooks.use_atom(_STAR_cards_id);
var cards_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53213,(0),null);
var _STAR_cards_list = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword("block","title","block/title",710445684),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("flashcard","all-cards","flashcard/all-cards",-1889764491)], 0))], null)], null));
}),cljs.core.PersistentVector.EMPTY);
var vec__53216 = logseq.shui.hooks.use_atom(_STAR_cards_list);
var cards_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53216,(0),null);
var all_cards = (function (){var or__5142__auto__ = cards_list;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword("block","title","block/title",710445684),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("flashcard","all-cards","flashcard/all-cards",-1889764491)], 0))], null)], null);
}
})();
var _STAR_block_ids = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}),cljs.core.PersistentVector.EMPTY);
var vec__53219 = logseq.shui.hooks.use_atom(_STAR_block_ids);
var block_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53219,(0),null);
var _STAR_all_block_ids = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}),cljs.core.PersistentVector.EMPTY);
var vec__53222 = logseq.shui.hooks.use_atom(_STAR_all_block_ids);
var all_block_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53222,(0),null);
var _STAR_loading_QMARK_ = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}),cljs.core.PersistentVector.EMPTY);
var vec__53225 = logseq.shui.hooks.use_atom(_STAR_loading_QMARK_);
var loading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53225,(0),null);
var _STAR_card_index = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}),cljs.core.PersistentVector.EMPTY);
var vec__53228 = logseq.shui.hooks.use_atom(_STAR_card_index);
var card_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53228,(0),null);
var _STAR_phase = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434));
}),cljs.core.PersistentVector.EMPTY);
var practice_again_BANG_ = (function (){
cljs.core.reset_BANG_(_STAR_card_index,(0));

cljs.core.reset_BANG_(_STAR_phase,new cljs.core.Keyword(null,"init","init",-1875481434));

return cljs.core.reset_BANG_(_STAR_block_ids,all_block_ids);
});
var progress_label = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.min.cljs$core$IFn$_invoke$arity$2((card_index + (1)),cljs.core.count(block_ids)))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(block_ids)));
var select_card_BANG_ = (function (v){
cljs.core.reset_BANG_(_STAR_cards_id,v);

var cards_id_SINGLEQUOTE_ = ((frontend.extensions.fsrs.global_cards_id_QMARK_(v))?null:v);
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.extensions.fsrs._LT_get_due_card_block_ids(repo,cards_id_SINGLEQUOTE_)),(function (result){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.extensions.fsrs._LT_get_card_block_ids(repo,cards_id_SINGLEQUOTE_)),(function (all_result){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.reset_BANG_(_STAR_card_index,(0))),(function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.reset_BANG_(_STAR_phase,new cljs.core.Keyword(null,"init","init",-1875481434))),(function (___21901__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.reset_BANG_(_STAR_all_block_ids,all_result)),(function (___21901__auto____$2){
return promesa.protocols._promise(cljs.core.reset_BANG_(_STAR_block_ids,result));
}));
}));
}));
}));
}));
}));
});
frontend.modules.shortcut.core.use_shortcut_handler_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shortcut.handler","cards","shortcut.handler/cards",-979698196),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cards-id","cards-id",1343142365),initial_cards_id,new cljs.core.Keyword(null,"opts","opts",155075701),opts], null));

logseq.shui.hooks.use_effect_BANG_((function (){
cljs.core.reset_BANG_(_STAR_loading_QMARK_,true);

promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null),new cljs.core.Keyword("logseq.class","Cards","logseq.class/Cards",-1284265167)], 0))),(function (cards_class){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.extensions.fsrs._LT_get_due_card_block_ids(repo,initial_cards_id)),(function (result){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.extensions.fsrs._LT_get_card_block_ids(repo,initial_cards_id)),(function (all_result){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.reset_BANG_(_STAR_all_block_ids,all_result)),(function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.reset_BANG_(_STAR_block_ids,result)),(function (___21901__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.reset_BANG_(_STAR_loading_QMARK_,false)),(function (___21901__auto____$2){
return promesa.protocols._promise((function (){var temp__5825__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cards_class);
if(cljs.core.truth_(temp__5825__auto__)){
var cards_class_id = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_tag_objects(repo,cards_class_id)),(function (cards){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
if((!(clojure.string.blank_QMARK_(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block))))){
return block;
} else {
var temp__5825__auto____$1 = new cljs.core.Keyword("logseq.property","query-id","logseq.property/query-id",-1763590126).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5825__auto____$1)){
var query_block_id = temp__5825__auto____$1;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,query_block_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (query_block){
return promesa.protocols._promise(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","title","block/title",710445684),logseq.db.frontend.content.recur_replace_uuid_in_block_title.cljs$core$IFn$_invoke$arity$1(query_block)));
}));
}));
} else {
return null;
}
}
}),cards))),(function (cards__$1){
return promesa.protocols._promise(cljs.core.reset_BANG_(_STAR_cards_list,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword("block","title","block/title",710445684),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("flashcard","all-cards","flashcard/all-cards",-1889764491)], 0))], null)], null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (card){
return clojure.string.blank_QMARK_(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(card));
}),cards__$1))));
}));
}));
}));
} else {
return null;
}
})());
}));
}));
}));
}));
}));
}));
}));

return (function (){
var temp__5825__auto___53287 = new cljs.core.Keyword(null,"on-header-change","on-header-change",1174302062).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5825__auto___53287)){
var on_header_change_53288 = temp__5825__auto___53287;
(on_header_change_53288.cljs$core$IFn$_invoke$arity$1 ? on_header_change_53288.cljs$core$IFn$_invoke$arity$1(null) : on_header_change_53288.call(null,null));
} else {
}

var temp__5825__auto___53289 = new cljs.core.Keyword(null,"on-selector-change","on-selector-change",-1830684867).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5825__auto___53289)){
var on_selector_change_53290 = temp__5825__auto___53289;
(on_selector_change_53290.cljs$core$IFn$_invoke$arity$1 ? on_selector_change_53290.cljs$core$IFn$_invoke$arity$1(null) : on_selector_change_53290.call(null,null));
} else {
}

return (frontend.extensions.fsrs.update_due_cards_count.cljs$core$IFn$_invoke$arity$0 ? frontend.extensions.fsrs.update_due_cards_count.cljs$core$IFn$_invoke$arity$0() : frontend.extensions.fsrs.update_due_cards_count.call(null));
});
}),cljs.core.PersistentVector.EMPTY);

if(loading_QMARK_ === false){
if(cljs.core.truth_(mobile_QMARK_)){
var temp__5825__auto___53291 = new cljs.core.Keyword(null,"on-header-change","on-header-change",1174302062).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5825__auto___53291)){
var on_header_change_53292 = temp__5825__auto___53291;
var G__53231_53293 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.extensions.fsrs.selected_cards_title(all_cards,cards_id),new cljs.core.Keyword(null,"progress","progress",244323547),progress_label], null);
(on_header_change_53292.cljs$core$IFn$_invoke$arity$1 ? on_header_change_53292.cljs$core$IFn$_invoke$arity$1(G__53231_53293) : on_header_change_53292.call(null,G__53231_53293));
} else {
}

var temp__5825__auto___53294 = new cljs.core.Keyword(null,"on-selector-change","on-selector-change",-1830684867).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5825__auto___53294)){
var on_selector_change_53295 = temp__5825__auto___53294;
var G__53232_53296 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cards","cards",169174038),all_cards,new cljs.core.Keyword(null,"cards-id","cards-id",1343142365),cards_id,new cljs.core.Keyword(null,"select-card!","select-card!",751973552),select_card_BANG_], null);
(on_selector_change_53295.cljs$core$IFn$_invoke$arity$1 ? on_selector_change_53295.cljs$core$IFn$_invoke$arity$1(G__53232_53296) : on_selector_change_53295.call(null,G__53232_53296));
} else {
}
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#cards-modal.flex.flex-col.gap-8.flex-1.min-h-0","div#cards-modal.flex.flex-col.gap-8.flex-1.min-h-0",-150764849),(cljs.core.truth_(mobile_QMARK_)?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.gap-2","div.flex.flex-row.items-center.gap-2",212596841),(function (){var G__53233 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-value-change","on-value-change",-621835289),select_card_BANG_,new cljs.core.Keyword(null,"default-value","default-value",232220170),cards_id], null);
var G__53234 = (function (){var G__53236 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"!px-2 !py-0 !h-8 w-64"], null);
var G__53237 = (function (){var G__53238 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("flashcard","select-cards","flashcard/select-cards",1098849347)], 0))], null);
return (logseq.shui.ui.select_value.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.select_value.cljs$core$IFn$_invoke$arity$1(G__53238) : logseq.shui.ui.select_value.call(null,G__53238));
})();
return (logseq.shui.ui.select_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_trigger.cljs$core$IFn$_invoke$arity$2(G__53236,G__53237) : logseq.shui.ui.select_trigger.call(null,G__53236,G__53237));
})();
var G__53235 = (function (){var G__53239 = (function (){var G__53240 = (function (){var iter__5628__auto__ = (function frontend$extensions$fsrs$cards_view_$_iter__53241(s__53242){
return (new cljs.core.LazySeq(null,(function (){
var s__53242__$1 = s__53242;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__53242__$1);
if(temp__5825__auto__){
var s__53242__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53242__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__53242__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__53244 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__53243 = (0);
while(true){
if((i__53243 < size__5627__auto__)){
var card_entity = cljs.core._nth(c__5626__auto__,i__53243);
cljs.core.chunk_append(b__53244,(function (){var G__53245 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(card_entity)], null);
var G__53246 = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(card_entity);
return (logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2(G__53245,G__53246) : logseq.shui.ui.select_item.call(null,G__53245,G__53246));
})());

var G__53297 = (i__53243 + (1));
i__53243 = G__53297;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53244),frontend$extensions$fsrs$cards_view_$_iter__53241(cljs.core.chunk_rest(s__53242__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53244),null);
}
} else {
var card_entity = cljs.core.first(s__53242__$2);
return cljs.core.cons((function (){var G__53247 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(card_entity)], null);
var G__53248 = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(card_entity);
return (logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.select_item.cljs$core$IFn$_invoke$arity$2(G__53247,G__53248) : logseq.shui.ui.select_item.call(null,G__53247,G__53248));
})(),frontend$extensions$fsrs$cards_view_$_iter__53241(cljs.core.rest(s__53242__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(all_cards);
})();
return (logseq.shui.ui.select_group.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.select_group.cljs$core$IFn$_invoke$arity$1(G__53240) : logseq.shui.ui.select_group.call(null,G__53240));
})();
return (logseq.shui.ui.select_content.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.select_content.cljs$core$IFn$_invoke$arity$1(G__53239) : logseq.shui.ui.select_content.call(null,G__53239));
})();
return (logseq.shui.ui.select.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.select.cljs$core$IFn$_invoke$arity$3(G__53233,G__53234,G__53235) : logseq.shui.ui.select.call(null,G__53233,G__53234,G__53235));
})(),(function (){var G__53249 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"id","id",-1388402092),"ls-cards-add",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("flashcard","add-query","flashcard/add-query",974275772)], 0)),new cljs.core.Keyword(null,"class","class",-2030961996),"!px-1 text-muted-foreground",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.extensions.fsrs._LT_create_cards_block_BANG_()),(function (saved_block){
return promesa.protocols._mcat(promesa.protocols._promise((logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dialog_close_BANG_.call(null))),(function (___21901__auto__){
return promesa.protocols._promise((cljs.core.truth_(saved_block)?frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(saved_block),cljs.core.PersistentArrayMap.EMPTY):null));
}));
}));
}));
})], null);
var G__53250 = frontend.ui.icon("plus");
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__53249,G__53250) : logseq.shui.ui.button.call(null,G__53249,G__53250));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.opacity-50.whitespace-nowrap","span.text-sm.opacity-50.whitespace-nowrap",1692629419),progress_label], null)], null)),(function (){var block_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(block_ids,card_index,null);
if(cljs.core.truth_(block_id)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.flex-1.min-h-0","div.flex.flex-col.flex-1.min-h-0",-2061717785),cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.extensions.fsrs.card_view,repo,block_id,_STAR_card_index,_STAR_phase,opts], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"card-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id))], null))], null);
} else {
if(cljs.core.empty_QMARK_(block_ids)){
if(cljs.core.empty_QMARK_(all_block_ids)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-card.content.ml-2","div.ls-card.content.ml-2",571092505),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.font-medium","h2.font-medium",-613933304),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("flashcard.empty","title","flashcard.empty/title",-728995058)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("flashcard.empty","desc","flashcard.empty/desc",1285748897),"#Card"], 0))], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-card.content.ml-2","div.ls-card.content.ml-2",571092505),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.font-medium","h2.font-medium",-613933304),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("flashcard.empty","no-due-title","flashcard.empty/no-due-title",-1857315925)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("flashcard.empty","no-due-desc","flashcard.empty/no-due-desc",-407481892)], 0))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-4","div.mt-4",-1531088843),(function (){var G__53251 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"id","id",-1388402092),"card-practice-again",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
return practice_again_BANG_();
})], null);
var G__53252 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("flashcard.review","practice-again","flashcard.review/practice-again",240123557)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__53251,G__53252) : logseq.shui.ui.button.call(null,G__53251,G__53252));
})()], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-card.content.ml-2","div.ls-card.content.ml-2",571092505),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("flashcard.review","finished","flashcard.review/finished",-1876688393)], 0))], null),((cljs.core.seq(all_block_ids))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-4","div.mt-4",-1531088843),(function (){var G__53253 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"id","id",-1388402092),"card-practice-again",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
return practice_again_BANG_();
})], null);
var G__53254 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("flashcard.review","practice-again","flashcard.review/practice-again",240123557)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__53253,G__53254) : logseq.shui.ui.button.call(null,G__53253,G__53254));
})()], null):null)], null);

}
}
})()], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$fsrs$cards_view__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__53255 = cljs.core.first(args__31746__auto__);
var G__53256 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__53255,G__53256) : io.factorhouse.hsx.core.obj_get.call(null,G__53255,G__53256));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(cljs.core.with_meta(new cljs.core.Symbol(null,"cards-view","cards-view",818051098,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("large-vars","cleanup-todo","large-vars/cleanup-todo",345662050),true], null)),args__31746__auto__),frontend$extensions$fsrs$cards_view,args__31746__auto__,null);
}
};
var frontend$extensions$fsrs$cards_view = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__53298__i = 0, G__53298__a = new Array(arguments.length -  0);
while (G__53298__i < G__53298__a.length) {G__53298__a[G__53298__i] = arguments[G__53298__i + 0]; ++G__53298__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__53298__a,0,null);
} 
return frontend$extensions$fsrs$cards_view__delegate.call(this,args__31746__auto__);};
frontend$extensions$fsrs$cards_view.cljs$lang$maxFixedArity = 0;
frontend$extensions$fsrs$cards_view.cljs$lang$applyTo = (function (arglist__53299){
var args__31746__auto__ = cljs.core.seq(arglist__53299);
return frontend$extensions$fsrs$cards_view__delegate(args__31746__auto__);
});
frontend$extensions$fsrs$cards_view.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$fsrs$cards_view__delegate;
return frontend$extensions$fsrs$cards_view;
})()
;
var memo_comp__31747__auto__ = (function (){var G__53257 = comp__31745__auto__;
var G__53258 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__53257,G__53258) : io.factorhouse.hsx.core.react_memo.call(null,G__53257,G__53258));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"cards-view");

return comp__31745__auto__;
})();
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.fsrs !== 'undefined') && (typeof frontend.extensions.fsrs._STAR_last_update_due_cards_count_canceler !== 'undefined')){
} else {
frontend.extensions.fsrs._STAR_last_update_due_cards_count_canceler = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.extensions.fsrs.update_due_cards_count_BANG_ = (function frontend$extensions$fsrs$update_due_cards_count_BANG_(){
var repo = frontend.state.get_current_repo();
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.extensions.fsrs._LT_get_due_card_block_ids(repo,null)),(function (due_cards){
return promesa.protocols._promise(frontend.state.set_state_BANG_(new cljs.core.Keyword("srs","cards-due-count","srs/cards-due-count",950004746),cljs.core.count(due_cards)));
}));
}));
});
frontend.extensions.fsrs.update_due_cards_count = (function frontend$extensions$fsrs$update_due_cards_count(){
var temp__5825__auto___53300 = cljs.core.deref(frontend.extensions.fsrs._STAR_last_update_due_cards_count_canceler);
if(cljs.core.truth_(temp__5825__auto___53300)){
var canceler_53301 = temp__5825__auto___53300;
(canceler_53301.cljs$core$IFn$_invoke$arity$0 ? canceler_53301.cljs$core$IFn$_invoke$arity$0() : canceler_53301.call(null));

cljs.core.reset_BANG_(frontend.extensions.fsrs._STAR_last_update_due_cards_count_canceler,null);
} else {
}

frontend.extensions.fsrs.update_due_cards_count_BANG_();

var interval_id = setInterval(frontend.extensions.fsrs.update_due_cards_count_BANG_,((3600) * (1000)));
var canceler = (function (){
return clearInterval(interval_id);
});
cljs.core.reset_BANG_(frontend.extensions.fsrs._STAR_last_update_due_cards_count_canceler,canceler);

return null;
});
frontend.extensions.fsrs._LT_get_operating_blocks = (function frontend$extensions$fsrs$_LT_get_operating_blocks(block_ids){
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53259_SHARP_){
return frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,p1__53259_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0));
}),block_ids))),(function (blocks){
return promesa.protocols._promise((function (){var G__53260 = blocks;
var G__53260__$1 = (((G__53260 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,G__53260));
var G__53260__$2 = (((G__53260__$1 == null))?null:cljs.core.seq(G__53260__$1));
var G__53260__$3 = (((G__53260__$2 == null))?null:frontend.handler.block.get_top_level_blocks(G__53260__$2));
if((G__53260__$3 == null)){
return null;
} else {
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(frontend.util.entity.property_QMARK_,G__53260__$3);
}
})());
}));
}));
} else {
return null;
}
});
frontend.extensions.fsrs.batch_make_cards_BANG_ = (function frontend$extensions$fsrs$batch_make_cards_BANG_(var_args){
var G__53262 = arguments.length;
switch (G__53262) {
case 0:
return frontend.extensions.fsrs.batch_make_cards_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.extensions.fsrs.batch_make_cards_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.extensions.fsrs.batch_make_cards_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.extensions.fsrs.batch_make_cards_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.state.get_selection_block_ids());
}));

(frontend.extensions.fsrs.batch_make_cards_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (block_ids){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.extensions.fsrs._LT_get_operating_blocks(block_ids)),(function (blocks){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null),new cljs.core.Keyword("logseq.class","Card","logseq.class/Card",-1358281109)], 0))),(function (card_class){
return promesa.protocols._promise((function (){var temp__5825__auto__ = cljs.core.not_empty(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),blocks));
if(cljs.core.truth_(temp__5825__auto__)){
var block_ids__$1 = temp__5825__auto__;
return frontend.handler.property.batch_set_block_property_BANG_(block_ids__$1,new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(card_class));
} else {
return null;
}
})());
}));
}));
}));
}));

(frontend.extensions.fsrs.batch_make_cards_BANG_.cljs$lang$maxFixedArity = 1);

frontend.extensions.fsrs.cloze_cue_separator = "\\\\";
/**
 * Parse the cloze content, and return [answer cue].
 */
frontend.extensions.fsrs.cloze_parse = (function frontend$extensions$fsrs$cloze_parse(content){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$3(content,frontend.extensions.fsrs.cloze_cue_separator,(-1));
if((cljs.core.count(parts) <= (1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [content,null], null);
} else {
var cue = clojure.string.trim(cljs.core.last(parts));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.trimr(clojure.string.join.cljs$core$IFn$_invoke$arity$2(frontend.extensions.fsrs.cloze_cue_separator,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parts))),cue], null);
}
});
frontend.extensions.fsrs.cloze_macro_show = (function (){var render_fn__31744__auto__ = (function frontend$extensions$fsrs$cloze_macro_show(config,options){
var shown_QMARK__STAR_ = logseq.shui.hooks.use_memo((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"show-cloze?","show-cloze?",1773680872).cljs$core$IFn$_invoke$arity$1(config));
}),cljs.core.PersistentVector.EMPTY);
var vec__53264 = logseq.shui.hooks.use_atom(shown_QMARK__STAR_);
var shown_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53264,(0),null);
var toggle_BANG_ = (function (e){
var target = e.target;
var inner_a = (((target instanceof Element))?target.closest("a"):null);
if((((inner_a == null)) || (cljs.core.not(e.currentTarget.contains(inner_a))))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shown_QMARK__STAR_,cljs.core.not);
} else {
return null;
}
});
var toggle_key_BANG_ = (function (p1__53263_SHARP_){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["Space",null,"Spacebar",null," ",null,"Enter",null], null), null),p1__53263_SHARP_.key)){
frontend.util.stop(p1__53263_SHARP_);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shown_QMARK__STAR_,cljs.core.not);
} else {
return null;
}
});
var vec__53267 = frontend.extensions.fsrs.cloze_parse(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(options)));
var answer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53267,(0),null);
var cue = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53267,(1),null);
var attrs = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"role","role",-736691072),"button",new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(0),new cljs.core.Keyword(null,"aria-pressed","aria-pressed",-1749058631),shown_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle_BANG_,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),toggle_key_BANG_], null);
if(cljs.core.truth_((function (){var or__5142__auto__ = shown_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"show-cloze?","show-cloze?",1773680872).cljs$core$IFn$_invoke$arity$1(config);
}
})())){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cloze-revealed","span.cloze-revealed",-399735737),attrs,"[",frontend.components.block.inline_title(config,answer),"]"], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cloze","span.cloze",-705516600),attrs,((clojure.string.blank_QMARK_(cue))?"[...]":(""+"("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cue)+")"))], null);
}
});
var comp__31745__auto__ = (function() { 
var frontend$extensions$fsrs$cloze_macro_show__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__53270 = cljs.core.first(args__31746__auto__);
var G__53271 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__53270,G__53271) : io.factorhouse.hsx.core.obj_get.call(null,G__53270,G__53271));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"cloze-macro-show","cloze-macro-show",-1281499949,null),args__31746__auto__),frontend$extensions$fsrs$cloze_macro_show,args__31746__auto__,null);
}
};
var frontend$extensions$fsrs$cloze_macro_show = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__53303__i = 0, G__53303__a = new Array(arguments.length -  0);
while (G__53303__i < G__53303__a.length) {G__53303__a[G__53303__i] = arguments[G__53303__i + 0]; ++G__53303__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__53303__a,0,null);
} 
return frontend$extensions$fsrs$cloze_macro_show__delegate.call(this,args__31746__auto__);};
frontend$extensions$fsrs$cloze_macro_show.cljs$lang$maxFixedArity = 0;
frontend$extensions$fsrs$cloze_macro_show.cljs$lang$applyTo = (function (arglist__53304){
var args__31746__auto__ = cljs.core.seq(arglist__53304);
return frontend$extensions$fsrs$cloze_macro_show__delegate(args__31746__auto__);
});
frontend$extensions$fsrs$cloze_macro_show.cljs$core$IFn$_invoke$arity$variadic = frontend$extensions$fsrs$cloze_macro_show__delegate;
return frontend$extensions$fsrs$cloze_macro_show;
})()
;
var memo_comp__31747__auto__ = (function (){var G__53272 = comp__31745__auto__;
var G__53273 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__53272,G__53273) : io.factorhouse.hsx.core.react_memo.call(null,G__53272,G__53273));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"cloze-macro-show");

return comp__31745__auto__;
})();
/**
 * cloze syntax: {{cloze: ...}}
 */
frontend.extensions.fsrs.cloze_macro_name = "cloze";
frontend.components.macro.register(frontend.extensions.fsrs.cloze_macro_name,frontend.extensions.fsrs.cloze_macro_show);

//# sourceMappingURL=frontend.extensions.fsrs.js.map
