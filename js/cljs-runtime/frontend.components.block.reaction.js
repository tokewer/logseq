goog.provide('frontend.components.block.reaction');
frontend.components.block.reaction.loaded_block_reactions = (function (){var render_fn__31744__auto__ = (function frontend$components$block$reaction$loaded_block_reactions(block){
var block_uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
var current_user_uuid = (function (){var G__43572 = frontend.handler.user.user_uuid();
if((G__43572 == null)){
return null;
} else {
return cljs.core.uuid(G__43572);
}
})();
var summary = frontend.db.hooks.use_resource(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block-reactions","block-reactions",76584951),block_uuid,current_user_uuid], null));
var read_only_QMARK_ = frontend.config.publishing_QMARK_;
var on_pick = (function (popup_id,emoji){
frontend.handler.reaction.toggle_reaction_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(emoji));

return (logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.popup_hide_BANG_.cljs$core$IFn$_invoke$arity$1(popup_id) : logseq.shui.ui.popup_hide_BANG_.call(null,popup_id));
});
var open_picker_BANG_ = (function (e){
frontend.util.stop(e);

var G__43573 = e.target;
var G__43574 = (function (p__43576){
var map__43577 = p__43576;
var map__43577__$1 = cljs.core.__destructure_map(map__43577);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43577__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return frontend.components.icon.icon_search(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (_emoji_event,emoji,_keep_popup_QMARK_){
return on_pick(id,emoji);
}),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emoji","emoji",1031230144),"Emojis"], null)], null),new cljs.core.Keyword(null,"default-tab","default-tab",-566872037),new cljs.core.Keyword(null,"emoji","emoji",1031230144),new cljs.core.Keyword(null,"show-used?","show-used?",4329186),true,new cljs.core.Keyword(null,"icon-value","icon-value",-510636889),null], null));
});
var G__43575 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ls-icon-picker"], null)], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__43573,G__43574,G__43575) : logseq.shui.ui.popup_show_BANG_.call(null,G__43573,G__43574,G__43575));
});
if(cljs.core.seq(summary)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-block-reactions.flex.flex-row.flex-wrap.items-center.mt-1","div.ls-block-reactions.flex.flex-row.flex-wrap.items-center.mt-1",-1662529770),(function (){var iter__5628__auto__ = (function frontend$components$block$reaction$loaded_block_reactions_$_iter__43578(s__43579){
return (new cljs.core.LazySeq(null,(function (){
var s__43579__$1 = s__43579;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__43579__$1);
if(temp__5825__auto__){
var s__43579__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43579__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__43579__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__43581 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__43580 = (0);
while(true){
if((i__43580 < size__5627__auto__)){
var map__43582 = cljs.core._nth(c__5626__auto__,i__43580);
var map__43582__$1 = cljs.core.__destructure_map(map__43582);
var emoji_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43582__$1,new cljs.core.Keyword(null,"emoji-id","emoji-id",-1329581482));
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43582__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var reacted_by_me_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43582__$1,new cljs.core.Keyword(null,"reacted-by-me?","reacted-by-me?",959143032));
var usernames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43582__$1,new cljs.core.Keyword(null,"usernames","usernames",-1647337722));
cljs.core.chunk_append(b__43581,(function (){var btn_classes = frontend.util.classnames(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["px-2 py-0 h-6 text-xs rounded-full",(cljs.core.truth_(reacted_by_me_QMARK_)?"bg-accent/10 text-foreground":null)], null));
var title = clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",usernames);
var btn = (function (){var G__43583 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"key","key",-1516042587),(""+"reaction-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emoji_id)),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),btn_classes,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__43580,btn_classes,title,map__43582,map__43582__$1,emoji_id,count,reacted_by_me_QMARK_,usernames,c__5626__auto__,size__5627__auto__,b__43581,s__43579__$2,temp__5825__auto__,block_uuid,current_user_uuid,summary,read_only_QMARK_,on_pick,open_picker_BANG_){
return (function (e){
if(read_only_QMARK_){
return null;
} else {
frontend.util.stop(e);

return frontend.handler.reaction.toggle_reaction_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),emoji_id);
}
});})(i__43580,btn_classes,title,map__43582,map__43582__$1,emoji_id,count,reacted_by_me_QMARK_,usernames,c__5626__auto__,size__5627__auto__,b__43581,s__43579__$2,temp__5825__auto__,block_uuid,current_user_uuid,summary,read_only_QMARK_,on_pick,open_picker_BANG_))
], null);
var G__43584 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.leading-none","span.text-sm.leading-none",312732246),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em-emoji","em-emoji",1985182592),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),emoji_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),(1)], null)], null)], null)], null);
var G__43585 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),count], null);
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__43583,G__43584,G__43585) : logseq.shui.ui.button.call(null,G__43583,G__43584,G__43585));
})();
return frontend.ui.tooltip(btn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),title], null));
})());

var G__43608 = (i__43580 + (1));
i__43580 = G__43608;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43581),frontend$components$block$reaction$loaded_block_reactions_$_iter__43578(cljs.core.chunk_rest(s__43579__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43581),null);
}
} else {
var map__43590 = cljs.core.first(s__43579__$2);
var map__43590__$1 = cljs.core.__destructure_map(map__43590);
var emoji_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43590__$1,new cljs.core.Keyword(null,"emoji-id","emoji-id",-1329581482));
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43590__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var reacted_by_me_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43590__$1,new cljs.core.Keyword(null,"reacted-by-me?","reacted-by-me?",959143032));
var usernames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43590__$1,new cljs.core.Keyword(null,"usernames","usernames",-1647337722));
return cljs.core.cons((function (){var btn_classes = frontend.util.classnames(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["px-2 py-0 h-6 text-xs rounded-full",(cljs.core.truth_(reacted_by_me_QMARK_)?"bg-accent/10 text-foreground":null)], null));
var title = clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",usernames);
var btn = (function (){var G__43594 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"key","key",-1516042587),(""+"reaction-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emoji_id)),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),btn_classes,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (btn_classes,title,map__43590,map__43590__$1,emoji_id,count,reacted_by_me_QMARK_,usernames,s__43579__$2,temp__5825__auto__,block_uuid,current_user_uuid,summary,read_only_QMARK_,on_pick,open_picker_BANG_){
return (function (e){
if(read_only_QMARK_){
return null;
} else {
frontend.util.stop(e);

return frontend.handler.reaction.toggle_reaction_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),emoji_id);
}
});})(btn_classes,title,map__43590,map__43590__$1,emoji_id,count,reacted_by_me_QMARK_,usernames,s__43579__$2,temp__5825__auto__,block_uuid,current_user_uuid,summary,read_only_QMARK_,on_pick,open_picker_BANG_))
], null);
var G__43595 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.leading-none","span.text-sm.leading-none",312732246),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em-emoji","em-emoji",1985182592),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),emoji_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),(1)], null)], null)], null)], null);
var G__43596 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),count], null);
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$3(G__43594,G__43595,G__43596) : logseq.shui.ui.button.call(null,G__43594,G__43595,G__43596));
})();
return frontend.ui.tooltip(btn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),title], null));
})(),frontend$components$block$reaction$loaded_block_reactions_$_iter__43578(cljs.core.rest(s__43579__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(summary);
})(),((read_only_QMARK_)?null:(function (){var G__43598 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),"px-1 py-0 h-6 text-muted-foreground hover:text-foreground",new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("command.editor","add-reaction","command.editor/add-reaction",31898964)], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),open_picker_BANG_,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
return frontend.util.stop(e);
})], null);
var G__43599 = frontend.ui.icon("plus",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__43598,G__43599) : logseq.shui.ui.button.call(null,G__43598,G__43599));
})())], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$block$reaction$loaded_block_reactions__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__43600 = cljs.core.first(args__31746__auto__);
var G__43601 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__43600,G__43601) : io.factorhouse.hsx.core.obj_get.call(null,G__43600,G__43601));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"loaded-block-reactions","loaded-block-reactions",-152407873,null),args__31746__auto__),frontend$components$block$reaction$loaded_block_reactions,args__31746__auto__,null);
}
};
var frontend$components$block$reaction$loaded_block_reactions = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__43617__i = 0, G__43617__a = new Array(arguments.length -  0);
while (G__43617__i < G__43617__a.length) {G__43617__a[G__43617__i] = arguments[G__43617__i + 0]; ++G__43617__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__43617__a,0,null);
} 
return frontend$components$block$reaction$loaded_block_reactions__delegate.call(this,args__31746__auto__);};
frontend$components$block$reaction$loaded_block_reactions.cljs$lang$maxFixedArity = 0;
frontend$components$block$reaction$loaded_block_reactions.cljs$lang$applyTo = (function (arglist__43618){
var args__31746__auto__ = cljs.core.seq(arglist__43618);
return frontend$components$block$reaction$loaded_block_reactions__delegate(args__31746__auto__);
});
frontend$components$block$reaction$loaded_block_reactions.cljs$core$IFn$_invoke$arity$variadic = frontend$components$block$reaction$loaded_block_reactions__delegate;
return frontend$components$block$reaction$loaded_block_reactions;
})()
;
var memo_comp__31747__auto__ = (function (){var G__43602 = comp__31745__auto__;
var G__43603 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__43602,G__43603) : io.factorhouse.hsx.core.react_memo.call(null,G__43602,G__43603));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"loaded-block-reactions");

return comp__31745__auto__;
})();
frontend.components.block.reaction.block_reactions = (function frontend$components$block$reaction$block_reactions(block){
if(cljs.core.uuid_QMARK_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))){
return frontend.components.block.reaction.loaded_block_reactions(block);
} else {
return null;
}
});

//# sourceMappingURL=frontend.components.block.reaction.js.map
