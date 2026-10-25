goog.provide('frontend.handler.block');
frontend.handler.block.select_block_BANG_ = (function frontend$handler$block$select_block_BANG_(block_uuid){
var blocks = frontend.util.get_blocks_by_id(block_uuid);
if(cljs.core.seq(blocks)){
return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(blocks);
} else {
return null;
}
});
frontend.handler.block.attach_order_list_state = (function frontend$handler$block$attach_order_list_state(config,block){
var type = (frontend.handler.property.util.lookup.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.property.util.lookup.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword("logseq.property","order-list-type","logseq.property/order-list-type",607817111)) : frontend.handler.property.util.lookup.call(null,block,new cljs.core.Keyword("logseq.property","order-list-type","logseq.property/order-list-type",607817111)));
var own_order_list_type = (function (){var G__63679 = type;
var G__63679__$1 = (((G__63679 == null))?null:(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63679)));
if((G__63679__$1 == null)){
return null;
} else {
return clojure.string.lower_case(G__63679__$1);
}
})();
var own_order_list_index = new cljs.core.Keyword("block.temp","order-list-index","block.temp/order-list-index",-162286957).cljs$core$IFn$_invoke$arity$1(block);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"own-order-list-type","own-order-list-type",507157714),own_order_list_type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"own-order-list-index","own-order-list-index",2051635079),own_order_list_index,new cljs.core.Keyword(null,"own-order-number-list?","own-order-number-list?",2048042976),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(own_order_list_type,"number")], 0));
});
frontend.handler.block.text_range_by_lst_fst_line = (function frontend$handler$block$text_range_by_lst_fst_line(content,p__63680){
var vec__63681 = p__63680;
var direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63681,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63681,(1),null);
var G__63684 = direction;
var G__63684__$1 = (((G__63684 instanceof cljs.core.Keyword))?G__63684.fqn:null);
switch (G__63684__$1) {
case "up":
var last_new_line = (function (){var or__5142__auto__ = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(content,"\n");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (-1);
}
})();
var end = ((last_new_line + pos) + (1));
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(0),end);

break;
case "down":
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3((function (){var or__5142__auto__ = cljs.core.first(clojure.string.split_lines(content));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})(),(0),pos);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63684__$1))));

}
});
frontend.handler.block.mark_last_input_time_BANG_ = (function frontend$handler$block$mark_last_input_time_BANG_(repo){
if(cljs.core.truth_(repo)){
return frontend.state.set_editor_last_input_time_BANG_(repo,(frontend.util.time_ms.cljs$core$IFn$_invoke$arity$0 ? frontend.util.time_ms.cljs$core$IFn$_invoke$arity$0() : frontend.util.time_ms.call(null)));
} else {
return null;
}
});
frontend.handler.block.edit_block_aux = (function frontend$handler$block$edit_block_aux(repo,block,content,text_range,p__63685){
var map__63686 = p__63685;
var map__63686__$1 = cljs.core.__destructure_map(map__63686);
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63686__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63686__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63686__$1,new cljs.core.Keyword(null,"event","event",301435442));
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63686__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
if(cljs.core.truth_(block)){
var container_id_63723__$1 = (function (){var or__5142__auto__ = container_id;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = frontend.state.get_current_editor_container_id();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword(null,"unknown-container","unknown-container",1739831473);
}
}
})();
frontend.state.set_editing_BANG_.cljs$core$IFn$_invoke$arity$variadic((""+"edit-block-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))),content,block,text_range,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id_63723__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"pos","pos",-864607220),pos], null)], 0));

return frontend.handler.block.mark_last_input_time_BANG_(repo);
} else {
return null;
}
});
/**
 * Multiple pages/objects may have the same `:block/title`.
 * Notice: this doesn't prevent for pages/objects that have the same tag or created by different clients.
 */
frontend.handler.block.block_unique_title = (function frontend$handler$block$block_unique_title(var_args){
var args__5882__auto__ = [];
var len__5876__auto___63724 = arguments.length;
var i__5877__auto___63725 = (0);
while(true){
if((i__5877__auto___63725 < len__5876__auto___63724)){
args__5882__auto__.push((arguments[i__5877__auto___63725]));

var G__63726 = (i__5877__auto___63725 + (1));
i__5877__auto___63725 = G__63726;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.handler.block.block_unique_title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.handler.block.block_unique_title.cljs$core$IFn$_invoke$arity$variadic = (function (block,p__63689){
var map__63690 = p__63689;
var map__63690__$1 = cljs.core.__destructure_map(map__63690);
var opts = map__63690__$1;
return logseq.db.frontend.block_title.block_unique_title(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(opts),block,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"db","db",993250759)));
}));

(frontend.handler.block.block_unique_title.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.handler.block.block_unique_title.cljs$lang$applyTo = (function (seq63687){
var G__63688 = cljs.core.first(seq63687);
var seq63687__$1 = cljs.core.next(seq63687);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63688,seq63687__$1);
}));

/**
 * Used for select item
 */
frontend.handler.block.block_title_with_icon = (function frontend$handler$block$block_title_with_icon(block,title,icon_cp){
var temp__5823__auto__ = new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5823__auto__)){
var icon = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.gap-1","div.flex.flex-row.items-center.gap-1",-1023433319),(function (){var G__63691 = icon;
var G__63692 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null);
return (icon_cp.cljs$core$IFn$_invoke$arity$2 ? icon_cp.cljs$core$IFn$_invoke$arity$2(G__63691,G__63692) : icon_cp.call(null,G__63691,G__63692));
})(),title], null);
} else {
var or__5142__auto__ = title;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block);
}
}
});
frontend.handler.block.edit_loaded_block_BANG_ = (function frontend$handler$block$edit_loaded_block_BANG_(repo,block,pos,p__63693){
var map__63694 = p__63693;
var map__63694__$1 = cljs.core.__destructure_map(map__63694);
var opts = map__63694__$1;
var custom_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63694__$1,new cljs.core.Keyword(null,"custom-content","custom-content",-8240001));
var tail_len = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63694__$1,new cljs.core.Keyword(null,"tail-len","tail-len",699304522));
var save_code_editor_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63694__$1,new cljs.core.Keyword(null,"save-code-editor?","save-code-editor?",-419078411));
if(cljs.core.truth_((logseq.db.recycled_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.recycled_QMARK_.cljs$core$IFn$_invoke$arity$1(block) : logseq.db.recycled_QMARK_.call(null,block)))){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("storage.recycle","readonly","storage.recycle/readonly",-95866230)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));
} else {
if(cljs.core.truth_(save_code_editor_QMARK_)){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","save-code-editor","editor/save-code-editor",-1356475475)], null));
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block()))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"save-current-block?","save-current-block?",-1892646594).cljs$core$IFn$_invoke$arity$2(opts,true))){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","save-current-block","editor/save-current-block",1864275336)], null));
} else {
}

frontend.state.clear_edit_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear-editing-block?","clear-editing-block?",901540541),false], null)], 0));
} else {
}

var content = (function (){var or__5142__auto__ = custom_content;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return "";
}
}
})();
var content_length = cljs.core.count(content);
var text_range = ((cljs.core.vector_QMARK_(pos))?frontend.handler.block.text_range_by_lst_fst_line(content,pos):(((((tail_len > (0))) && ((content_length >= tail_len))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(0),(content_length - tail_len)):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"max","max",61366548),pos)) || ((content_length <= pos))))?content:cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(0),pos)
)));
frontend.state.clear_selection_BANG_();

return frontend.handler.block.edit_block_aux(repo,block,content,text_range,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"pos","pos",-864607220),pos));
}
});
frontend.handler.block.edit_block_BANG_ = (function frontend$handler$block$edit_block_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___63727 = arguments.length;
var i__5877__auto___63728 = (0);
while(true){
if((i__5877__auto___63728 < len__5876__auto___63727)){
args__5882__auto__.push((arguments[i__5877__auto___63728]));

var G__63729 = (i__5877__auto___63728 + (1));
i__5877__auto___63728 = G__63729;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return frontend.handler.block.edit_block_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(frontend.handler.block.edit_block_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (block,pos,p__63698){
var map__63699 = p__63698;
var map__63699__$1 = cljs.core.__destructure_map(map__63699);
var opts = map__63699__$1;
var _container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63699__$1,new cljs.core.Keyword(null,"_container-id","_container-id",942697967));
var tail_len = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63699__$1,new cljs.core.Keyword(null,"tail-len","tail-len",699304522),(0));
var save_code_editor_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63699__$1,new cljs.core.Keyword(null,"save-code-editor?","save-code-editor?",-419078411),true);
var skip_load_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63699__$1,new cljs.core.Keyword(null,"skip-load?","skip-load?",1029467451));
if(cljs.core.truth_((function (){var and__5140__auto__ = (!(frontend.config.publishing_QMARK_));
if(and__5140__auto__){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
} else {
return and__5140__auto__;
}
})())){
var repo = frontend.state.get_current_repo();
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"tail-len","tail-len",699304522),tail_len,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"save-code-editor?","save-code-editor?",-419078411),save_code_editor_QMARK_], 0));
if(cljs.core.truth_(skip_load_QMARK_)){
return frontend.handler.block.edit_loaded_block_BANG_(repo,block,pos,opts__$1);
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (loaded_block){
return promesa.protocols._promise((function (){var map__63700 = frontend.db.subs.block_snapshot(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
var map__63700__$1 = cljs.core.__destructure_map(map__63700);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63700__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63700__$1,new cljs.core.Keyword(null,"value","value",305978217));
return frontend.handler.block.edit_loaded_block_BANG_(repo,(function (){var or__5142__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ready","ready",1086465795),status))?value:null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = loaded_block;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return block;
}
}
})(),pos,opts__$1);
})());
}));
}));
}
} else {
return null;
}
}));

(frontend.handler.block.edit_block_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.handler.block.edit_block_BANG_.cljs$lang$applyTo = (function (seq63695){
var G__63696 = cljs.core.first(seq63695);
var seq63695__$1 = cljs.core.next(seq63695);
var G__63697 = cljs.core.first(seq63695__$1);
var seq63695__$2 = cljs.core.next(seq63695__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63696,G__63697,seq63695__$2);
}));

/**
 * Read the original (linking) block off a rendered `ls-block` node.
 *   A block rendered through :block/link carries the linked block's uuid as
 *   `blockid` and the linking block's own uuid as `originalblockid`.
 */
frontend.handler.block.node_original_block = (function frontend$handler$block$node_original_block(node){
var temp__5825__auto__ = (function (){var G__63701 = node;
var G__63701__$1 = (((G__63701 == null))?null:dommy.core.attr(G__63701,"originalblockid"));
if((G__63701__$1 == null)){
return null;
} else {
return cljs.core.uuid(G__63701__$1);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
} else {
return null;
}
});
frontend.handler.block.get_original_block_by_dom = (function frontend$handler$block$get_original_block_by_dom(node){
var G__63702 = node;
var G__63702__$1 = (((G__63702 == null))?null:G__63702.parentNode);
var G__63702__$2 = (((G__63702__$1 == null))?null:frontend.util.rec_get_node(G__63702__$1,"ls-block"));
if((G__63702__$2 == null)){
return null;
} else {
return frontend.handler.block.node_original_block(G__63702__$2);
}
});
frontend.handler.block.selected_original_blocks_by_id = (function frontend$handler$block$selected_original_blocks_by_id(nodes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,node){
var temp__5823__auto__ = (function (){var G__63703 = dommy.core.attr(node,"blockid");
if((G__63703 == null)){
return null;
} else {
return cljs.core.uuid(G__63703);
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var block_id = temp__5823__auto__;
if(cljs.core.contains_QMARK_(result,block_id)){
return result;
} else {
var temp__5823__auto____$1 = frontend.handler.block.node_original_block(node);
if(cljs.core.truth_(temp__5823__auto____$1)){
var original_block = temp__5823__auto____$1;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,block_id,original_block);
} else {
return result;
}
}
} else {
return result;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,nodes));
});
/**
 * Get only the top level blocks and their original blocks.
 */
frontend.handler.block.get_top_level_blocks = (function frontend$handler$block$get_top_level_blocks(blocks){
if(cljs.core.seq(blocks)){
} else {
throw (new Error("Assert failed: (seq blocks)"));
}

var level_blocks = logseq.outliner.core.blocks_with_level(blocks);
var selected_ids = cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),blocks));
var editing_block_id = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block());
var input = frontend.state.get_input();
var editing_original_block = (cljs.core.truth_(input)?frontend.handler.block.get_original_block_by_dom(input):null);
var selected_original_blocks = frontend.handler.block.selected_original_blocks_by_id(frontend.state.get_selection_blocks());
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
var block_id = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b);
var original = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"original-block","original-block",1808045862).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = input;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(block_id,editing_block_id);
} else {
return and__5140__auto__;
}
})())){
return editing_original_block;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(selected_original_blocks,block_id);
}
}
})();
var or__5142__auto__ = original;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return b;
}
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__63704_SHARP_){
var G__63705 = p1__63704_SHARP_;
var G__63706 = (function (parent){
return cljs.core.contains_QMARK_(selected_ids,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent));
});
return (logseq.db.some_parent.cljs$core$IFn$_invoke$arity$2 ? logseq.db.some_parent.cljs$core$IFn$_invoke$arity$2(G__63705,G__63706) : logseq.db.some_parent.call(null,G__63705,G__63706));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(b));
}),level_blocks)));
});
frontend.handler.block.get_current_editing_original_block = (function frontend$handler$block$get_current_editing_original_block(){
var temp__5825__auto__ = frontend.state.get_input();
if(cljs.core.truth_(temp__5825__auto__)){
var input = temp__5825__auto__;
return frontend.handler.block.get_original_block_by_dom(frontend.util.rec_get_node(input,"ls-block"));
} else {
return null;
}
});
frontend.handler.block.get_first_block_original = (function frontend$handler$block$get_first_block_original(){
var or__5142__auto__ = frontend.handler.block.get_current_editing_original_block();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var temp__5825__auto__ = (function (){var G__63707 = cljs.core.first(frontend.state.get_selection_blocks());
return G__63707;
})();
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
return frontend.handler.block.get_original_block_by_dom(node);
} else {
return null;
}
}
});
frontend.handler.block.outliner_tx_meta = (function frontend$handler$block$outliner_tx_meta(var_args){
var G__63709 = arguments.length;
switch (G__63709) {
case 1:
return frontend.handler.block.outliner_tx_meta.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.block.outliner_tx_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.block.outliner_tx_meta.cljs$core$IFn$_invoke$arity$1 = (function (block){
return frontend.handler.block.outliner_tx_meta.cljs$core$IFn$_invoke$arity$2(block,null);
}));

(frontend.handler.block.outliner_tx_meta.cljs$core$IFn$_invoke$arity$2 = (function (block,_config){
var page = new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block);
var page_id = (function (){var or__5142__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = page;
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return frontend.state.get_current_page();
}
}
}
})();
if(cljs.core.truth_(page_id)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","page-id","ui/page-id",-872945956),page_id], null);
} else {
return null;
}
}));

(frontend.handler.block.outliner_tx_meta.cljs$lang$maxFixedArity = 2);

var _STAR_timeout_63731 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
frontend.handler.block.indent_outdent_blocks_BANG_ = (function frontend$handler$block$indent_outdent_blocks_BANG_(var_args){
var G__63711 = arguments.length;
switch (G__63711) {
case 3:
return frontend.handler.block.indent_outdent_blocks_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return frontend.handler.block.indent_outdent_blocks_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.block.indent_outdent_blocks_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (blocks,indent_QMARK_,save_current_block){
return frontend.handler.block.indent_outdent_blocks_BANG_.cljs$core$IFn$_invoke$arity$4(blocks,indent_QMARK_,save_current_block,null);
}));

(frontend.handler.block.indent_outdent_blocks_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (blocks,indent_QMARK_,save_current_block,edit_block_fn){
var temp__5825__auto___63733 = _STAR_timeout_63731;
if(cljs.core.truth_(temp__5825__auto___63733)){
var timeout_63734 = temp__5825__auto___63733;
clearTimeout(timeout_63734);
} else {
}

if(cljs.core.seq(blocks)){
var blocks_container = (function (){var temp__5825__auto__ = cljs.core.first(frontend.state.get_selection_blocks());
if(cljs.core.truth_(temp__5825__auto__)){
var first_selected_node = temp__5825__auto__;
return frontend.util.rec_get_blocks_container(first_selected_node);
} else {
return null;
}
})();
var blocks_SINGLEQUOTE_ = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(frontend.components.block.comments_model.protected_comment_block_QMARK_,frontend.handler.block.get_top_level_blocks(blocks));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core.seq(blocks_SINGLEQUOTE_))?(function (){var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
if(cljs.core.truth_(save_current_block)){
(save_current_block.cljs$core$IFn$_invoke$arity$0 ? save_current_block.cljs$core$IFn$_invoke$arity$0() : save_current_block.call(null));
} else {
}

return frontend.modules.outliner.op.indent_outdent_blocks_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.handler.block.get_top_level_blocks(blocks_SINGLEQUOTE_),indent_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parent-original","parent-original",1770143972),frontend.handler.block.get_first_block_original(),new cljs.core.Keyword(null,"logical-outdenting?","logical-outdenting?",538240839),frontend.state.logical_outdenting_QMARK_()], null)], 0));
} else {
var _STAR_outliner_ops_STAR__orig_val__63712 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__63713 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__63713);

try{if(cljs.core.truth_(save_current_block)){
(save_current_block.cljs$core$IFn$_invoke$arity$0 ? save_current_block.cljs$core$IFn$_invoke$arity$0() : save_current_block.call(null));
} else {
}

frontend.modules.outliner.op.indent_outdent_blocks_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.handler.block.get_top_level_blocks(blocks_SINGLEQUOTE_),indent_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parent-original","parent-original",1770143972),frontend.handler.block.get_first_block_original(),new cljs.core.Keyword(null,"logical-outdenting?","logical-outdenting?",538240839),frontend.state.logical_outdenting_QMARK_()], null)], 0));

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,(function (){var G__63714 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),new cljs.core.Keyword(null,"source-outliner-op","source-outliner-op",725708356),new cljs.core.Keyword(null,"indent-outdent","indent-outdent",874329747)], null),frontend.handler.block.outliner_tx_meta.cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks_SINGLEQUOTE_))], 0));
if(cljs.core.truth_(edit_block_fn)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63714,new cljs.core.Keyword("editor","edit-block-fn","editor/edit-block-fn",-42933801),edit_block_fn);
} else {
return G__63714;
}
})());
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__63712);
}}
})():null)),(function (___27434__auto__){
return promesa.protocols._promise((cljs.core.truth_(blocks_container)?cljs.core.reset_BANG_(_STAR_timeout_63731,setTimeout((function (){
return frontend.state.set_selection_blocks_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.utils.__GT_Array(blocks_container.querySelectorAll(".ls-block.selected")),new cljs.core.Keyword(null,"down","down",1565245570));
}),(100))):null));
}));
}));
} else {
return null;
}
}));

(frontend.handler.block.indent_outdent_blocks_BANG_.cljs$lang$maxFixedArity = 4);

frontend.handler.block._STAR_swipe = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
frontend.handler.block._STAR_swiped_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
frontend.handler.block._STAR_touch_start = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
frontend.handler.block.touch_event = (function frontend$handler$block$touch_event(event){
var or__5142__auto__ = event.event_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return event;
}
});
frontend.handler.block.on_touch_start = (function frontend$handler$block$on_touch_start(event,uuid){
frontend.util.stop_propagation(event);

var input = frontend.state.get_input();
var input_id = frontend.state.get_edit_input_id();
var selection_type = document.getSelection().type;
cljs.core.reset_BANG_(frontend.handler.block._STAR_touch_start,Date.now());

if(cljs.core.truth_((function (){var and__5140__auto__ = input;
if(cljs.core.truth_(and__5140__auto__)){
return clojure.string.ends_with_QMARK_(input_id,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)));
} else {
return and__5140__auto__;
}
})())){
} else {
frontend.state.clear_edit_BANG_();
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selection_type,"Range")){
var temp__5825__auto__ = event.targetTouches;
if(cljs.core.truth_(temp__5825__auto__)){
var touches = temp__5825__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(touches.length,(1))){
var touch = (touches[(0)]);
var x = touch.clientX;
var y = touch.clientY;
return cljs.core.reset_BANG_(frontend.handler.block._STAR_swipe,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x0","x0",410843387),x,new cljs.core.Keyword(null,"y0","y0",111454807),y,new cljs.core.Keyword(null,"xi","xi",-163483319),x,new cljs.core.Keyword(null,"yi","yi",-1352135633),y,new cljs.core.Keyword(null,"tx","tx",466630418),x,new cljs.core.Keyword(null,"ty","ty",158290825),y,new cljs.core.Keyword(null,"direction","direction",-633359395),null], null));
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
frontend.handler.block.on_touch_move = (function frontend$handler$block$on_touch_move(touch_event_STAR_){
var event = frontend.handler.block.touch_event(touch_event_STAR_);
var temp__5825__auto__ = event.targetTouches;
if(cljs.core.truth_(temp__5825__auto__)){
var touches = temp__5825__auto__;
var selection_type = document.getSelection().type;
var target = event.target;
var block_container = frontend.util.rec_get_node(target,"ls-block");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selection_type,"Range")){
return null;
} else {
if(((cljs.core.not(frontend.state.editing_QMARK_())) || (((Date.now() - cljs.core.deref(frontend.handler.block._STAR_touch_start)) < (600))))){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(touches.length,(1));
if(and__5140__auto__){
return cljs.core.deref(frontend.handler.block._STAR_swipe);
} else {
return and__5140__auto__;
}
})())){
var map__63717 = cljs.core.deref(frontend.handler.block._STAR_swipe);
var map__63717__$1 = cljs.core.__destructure_map(map__63717);
var x0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63717__$1,new cljs.core.Keyword(null,"x0","x0",410843387));
var xi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63717__$1,new cljs.core.Keyword(null,"xi","xi",-163483319));
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63717__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var touch = (touches[(0)]);
var tx = touch.clientX;
var ty = touch.clientY;
var direction__$1 = (((direction == null))?(((tx > x0))?new cljs.core.Keyword(null,"right","right",-452581833):new cljs.core.Keyword(null,"left","left",-399115937)):direction);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.handler.block._STAR_swipe,(function (p1__63715_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__63715_SHARP_,new cljs.core.Keyword(null,"tx","tx",466630418),tx),new cljs.core.Keyword(null,"ty","ty",158290825),ty),new cljs.core.Keyword(null,"xi","xi",-163483319),tx),new cljs.core.Keyword(null,"yi","yi",-1352135633),ty),new cljs.core.Keyword(null,"direction","direction",-633359395),direction__$1);
}));

if((((xi - x0) * (tx - xi)) < (0))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.handler.block._STAR_swipe,(function (p1__63716_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__63716_SHARP_,new cljs.core.Keyword(null,"x0","x0",410843387),tx),new cljs.core.Keyword(null,"y0","y0",111454807),ty);
}));
} else {
}

var map__63718 = cljs.core.deref(frontend.handler.block._STAR_swipe);
var map__63718__$1 = cljs.core.__destructure_map(map__63718);
var x0__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63718__$1,new cljs.core.Keyword(null,"x0","x0",410843387));
var y0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63718__$1,new cljs.core.Keyword(null,"y0","y0",111454807));
var dx = (tx - x0__$1);
var dy = (ty - y0);
if(cljs.core.truth_((function (){var and__5140__auto__ = (Math.abs(dy) < (30));
if(and__5140__auto__){
var and__5140__auto____$1 = (Math.abs(dx) > (10));
if(and__5140__auto____$1){
return direction__$1;
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
touch_event_STAR_.preventDefault();

var left = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction__$1,new cljs.core.Keyword(null,"right","right",-452581833)))?(((dx >= (0)))?cljs.core.min.cljs$core$IFn$_invoke$arity$2(dx,(48)):cljs.core.max.cljs$core$IFn$_invoke$arity$2(dx,(0))):(((dx <= (0)))?(- cljs.core.min.cljs$core$IFn$_invoke$arity$2(Math.abs(dx),(48))):cljs.core.min.cljs$core$IFn$_invoke$arity$2(dx,(48))));
cljs.core.reset_BANG_(frontend.handler.block._STAR_swiped_QMARK_,true);

return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(block_container,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"transform","transform",1381301764),(frontend.util.format.cljs$core$IFn$_invoke$arity$2 ? frontend.util.format.cljs$core$IFn$_invoke$arity$2("translateX(%dpx)",left) : frontend.util.format.call(null,"translateX(%dpx)",left))], 0));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.block !== 'undefined') && (typeof frontend.handler.block._STAR_swipe_timeout !== 'undefined')){
} else {
frontend.handler.block._STAR_swipe_timeout = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.handler.block.on_touch_end = (function frontend$handler$block$on_touch_end(event){
var temp__5825__auto___63735 = cljs.core.deref(frontend.handler.block._STAR_swipe_timeout);
if(cljs.core.truth_(temp__5825__auto___63735)){
var timeout_63736 = temp__5825__auto___63735;
clearTimeout(timeout_63736);
} else {
}

frontend.util.stop_propagation(event);

if(cljs.core.truth_(cljs.core.deref(frontend.handler.block._STAR_swipe))){
var target = event.target;
var swiped_QMARK_ = cljs.core.deref(frontend.handler.block._STAR_swiped_QMARK_);
var map__63719 = cljs.core.deref(frontend.handler.block._STAR_swipe);
var map__63719__$1 = cljs.core.__destructure_map(map__63719);
var x0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63719__$1,new cljs.core.Keyword(null,"x0","x0",410843387));
var y0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63719__$1,new cljs.core.Keyword(null,"y0","y0",111454807));
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63719__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var ty = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63719__$1,new cljs.core.Keyword(null,"ty","ty",158290825));
var dy = (ty - y0);
var dx = (tx - x0);
var block_container = frontend.util.rec_get_node(target,"ls-block");
var select_QMARK_ = (((Math.abs(dx) > Math.abs(dy))) && ((Math.abs(dx) > (10))));
try{if(cljs.core.truth_((function (){var or__5142__auto__ = select_QMARK_;
if(or__5142__auto__){
return or__5142__auto__;
} else {
return swiped_QMARK_;
}
})())){
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(block_container,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"transform","transform",1381301764),"translateX(0)"], 0));

if(select_QMARK_){
if(cljs.core.contains_QMARK_(cljs.core.set(frontend.state.get_selection_block_ids()),(function (){var G__63721 = block_container.getAttribute("blockid");
if((G__63721 == null)){
return null;
} else {
return cljs.core.uuid(G__63721);
}
})())){
frontend.state.drop_selection_block_BANG_(block_container);
} else {
frontend.state.clear_edit_BANG_();

frontend.state.conj_selection_block_BANG_.cljs$core$IFn$_invoke$arity$2(block_container,null);
}

if(cljs.core.seq(frontend.state.get_selection_blocks())){
frontend.state.set_state_BANG_(new cljs.core.Keyword("mobile","show-action-bar?","mobile/show-action-bar?",-1280463440),true);
} else {
if(cljs.core.truth_(new cljs.core.Keyword("mobile","show-action-bar?","mobile/show-action-bar?",-1280463440).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()))){
frontend.state.set_state_BANG_(new cljs.core.Keyword("mobile","show-action-bar?","mobile/show-action-bar?",-1280463440),false);
} else {
}
}

return frontend.mobile.haptics.haptics.cljs$core$IFn$_invoke$arity$0();
} else {
return null;
}
} else {
return null;
}
}catch (e63720){var e = e63720;
return console.error(e);
}finally {cljs.core.reset_BANG_(frontend.handler.block._STAR_swipe_timeout,setTimeout((function (){
return cljs.core.reset_BANG_(frontend.handler.block._STAR_swiped_QMARK_,false);
}),(50)));

cljs.core.reset_BANG_(frontend.handler.block._STAR_swipe,null);

cljs.core.reset_BANG_(frontend.handler.block._STAR_touch_start,null);
}} else {
return null;
}
});
frontend.handler.block.on_touch_cancel = (function frontend$handler$block$on_touch_cancel(e){
cljs.core.reset_BANG_(frontend.handler.block._STAR_swipe,null);

cljs.core.reset_BANG_(frontend.handler.block._STAR_swiped_QMARK_,null);

cljs.core.reset_BANG_(frontend.handler.block._STAR_touch_start,null);

var target = e.target;
var block_container = frontend.util.rec_get_node(target,"ls-block");
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(block_container,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"transform","transform",1381301764),"translateX(0)"], 0));
});

//# sourceMappingURL=frontend.handler.block.js.map
