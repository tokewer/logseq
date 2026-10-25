goog.provide('frontend.handler.common');
goog.scope(function(){
  frontend.handler.common.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.handler.common.copy_to_clipboard_without_id_property_BANG_ = (function frontend$handler$common$copy_to_clipboard_without_id_property_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___63752 = arguments.length;
var i__5877__auto___63753 = (0);
while(true){
if((i__5877__auto___63753 < len__5876__auto___63752)){
args__5882__auto__.push((arguments[i__5877__auto___63753]));

var G__63754 = (i__5877__auto___63753 + (1));
i__5877__auto___63753 = G__63754;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((4) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((4)),(0),null)):null);
return frontend.handler.common.copy_to_clipboard_without_id_property_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5883__auto__);
});

(frontend.handler.common.copy_to_clipboard_without_id_property_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (repo,raw_text,html,blocks,p__63749){
var map__63750 = p__63749;
var map__63750__$1 = cljs.core.__destructure_map(map__63750);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63750__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var blocks_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","title","block/title",710445684),(function (){var or__5142__auto__ = new cljs.core.Keyword("block","raw-title","block/raw-title",1833669090).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block);
}
})());
}),blocks);
return frontend.util.copy_to_clipboard_BANG_.cljs$core$IFn$_invoke$arity$variadic(raw_text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"html","html",-998796897),html,new cljs.core.Keyword(null,"graph","graph",1558099509),repo,new cljs.core.Keyword(null,"blocks","blocks",-610462153),blocks_SINGLEQUOTE_,new cljs.core.Keyword(null,"op","op",-1882987955),op], 0));
}));

(frontend.handler.common.copy_to_clipboard_without_id_property_BANG_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(frontend.handler.common.copy_to_clipboard_without_id_property_BANG_.cljs$lang$applyTo = (function (seq63744){
var G__63745 = cljs.core.first(seq63744);
var seq63744__$1 = cljs.core.next(seq63744);
var G__63746 = cljs.core.first(seq63744__$1);
var seq63744__$2 = cljs.core.next(seq63744__$1);
var G__63747 = cljs.core.first(seq63744__$2);
var seq63744__$3 = cljs.core.next(seq63744__$2);
var G__63748 = cljs.core.first(seq63744__$3);
var seq63744__$4 = cljs.core.next(seq63744__$3);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63745,G__63746,G__63747,G__63748,seq63744__$4);
}));

frontend.handler.common.safe_read_string = (function frontend$handler$common$safe_read_string(content,error_message_or_handler){
try{return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(content);
}catch (e63751){var e = e63751;
console.error(e);

if(cljs.core.fn_QMARK_(error_message_or_handler)){
(error_message_or_handler.cljs$core$IFn$_invoke$arity$1 ? error_message_or_handler.cljs$core$IFn$_invoke$arity$1(e) : error_message_or_handler.call(null,e));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error_message_or_handler], 0));
}

return cljs.core.PersistentArrayMap.EMPTY;
}});
frontend.handler.common.listen_to_scroll_BANG_ = (function frontend$handler$common$listen_to_scroll_BANG_(element){
var _STAR_scroll_timer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var on_scroll = (function (){
if(cljs.core.truth_(cljs.core.deref(_STAR_scroll_timer))){
clearTimeout(cljs.core.deref(_STAR_scroll_timer));
} else {
}

frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","scrolling?","ui/scrolling?",-365025943),true);

return cljs.core.reset_BANG_(_STAR_scroll_timer,setTimeout((function (){
frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","scrolling?","ui/scrolling?",-365025943),false);

frontend.state.save_scroll_position_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.util.scroll_top.cljs$core$IFn$_invoke$arity$0());

return frontend.state.save_main_container_position_BANG_(frontend.handler.common.goog$module$goog$object.get(frontend.util.app_scroll_container_node.cljs$core$IFn$_invoke$arity$0(),"scrollTop"));
}),(150)));
});
var debounced_on_scroll = goog.functions.debounce(on_scroll,(100));
return element.addEventListener("scroll",debounced_on_scroll,false);
});

//# sourceMappingURL=frontend.handler.common.js.map
