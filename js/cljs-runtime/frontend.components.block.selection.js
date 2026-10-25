goog.provide('frontend.components.block.selection');
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.block !== 'undefined') && (typeof frontend.components.block.selection !== 'undefined') && (typeof frontend.components.block.selection._STAR_pointer_is_down_QMARK_ !== 'undefined')){
} else {
frontend.components.block.selection._STAR_pointer_is_down_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
frontend.components.block.selection.set_pointer_down_BANG_ = (function frontend$components$block$selection$set_pointer_down_BANG_(){
return cljs.core.reset_BANG_(frontend.components.block.selection._STAR_pointer_is_down_QMARK_,true);
});
frontend.components.block.selection.clear_pointer_down_BANG_ = (function frontend$components$block$selection$clear_pointer_down_BANG_(var_args){
var G__63738 = arguments.length;
switch (G__63738) {
case 0:
return frontend.components.block.selection.clear_pointer_down_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.components.block.selection.clear_pointer_down_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.components.block.selection.clear_pointer_down_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.reset_BANG_(frontend.components.block.selection._STAR_pointer_is_down_QMARK_,false);
}));

(frontend.components.block.selection.clear_pointer_down_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (_){
return frontend.components.block.selection.clear_pointer_down_BANG_.cljs$core$IFn$_invoke$arity$0();
}));

(frontend.components.block.selection.clear_pointer_down_BANG_.cljs$lang$maxFixedArity = 1);

frontend.components.block.selection.pointer_down_QMARK_ = (function frontend$components$block$selection$pointer_down_QMARK_(){
return cljs.core.deref(frontend.components.block.selection._STAR_pointer_is_down_QMARK_) === true;
});
frontend.components.block.selection.select_on_hover_QMARK_ = (function frontend$components$block$selection$select_on_hover_QMARK_(p__63739){
var map__63740 = p__63739;
var map__63740__$1 = cljs.core.__destructure_map(map__63740);
var last_client_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63740__$1,new cljs.core.Keyword(null,"last-client-y","last-client-y",574644122));
var client_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63740__$1,new cljs.core.Keyword(null,"client-y","client-y",1123764704));
var dragging_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63740__$1,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410));
var editing_same_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63740__$1,new cljs.core.Keyword(null,"editing-same-block?","editing-same-block?",22530794));
var active_selection_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63740__$1,new cljs.core.Keyword(null,"active-selection?","active-selection?",589915933));
var virtualized_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63740__$1,new cljs.core.Keyword(null,"virtualized?","virtualized?",285216968));
var and__5140__auto__ = (function (){var or__5142__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(last_client_y,client_y);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto__ = active_selection_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(virtualized_QMARK_);
} else {
return and__5140__auto__;
}
}
})();
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.not(dragging_QMARK_)) && (cljs.core.not(editing_same_block_QMARK_)));
} else {
return and__5140__auto__;
}
});
frontend.components.block.selection.block_id_range = (function frontend$components$block$selection$block_id_range(block_ids,start_block_id,end_block_id){
var block_ids__$1 = cljs.core.vec(block_ids);
var start_idx = block_ids__$1.indexOf(start_block_id);
var end_idx = block_ids__$1.indexOf(end_block_id);
if(((((0) <= start_idx)) && (((0) <= end_idx)))){
var direction = (((start_idx > end_idx))?new cljs.core.Keyword(null,"up","up",-269712113):new cljs.core.Keyword(null,"down","down",1565245570));
var from_idx = cljs.core.min.cljs$core$IFn$_invoke$arity$2(start_idx,end_idx);
var to_idx = (cljs.core.max.cljs$core$IFn$_invoke$arity$2(start_idx,end_idx) + (1));
var ids = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(block_ids__$1,from_idx,to_idx);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"block-ids","block-ids",557945592),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"up","up",-269712113)))?cljs.core.vec(cljs.core.reverse(ids)):ids)], null);
} else {
return null;
}
});
frontend.components.block.selection.virtual_range_boundary_id = (function frontend$components$block$selection$virtual_range_boundary_id(block_ids,direction,start_index,end_index){
var G__63741 = direction;
var G__63741__$1 = (((G__63741 instanceof cljs.core.Keyword))?G__63741.fqn:null);
switch (G__63741__$1) {
case "down":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(block_ids,end_index);

break;
case "up":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(block_ids,start_index);

break;
default:
return null;

}
});
frontend.components.block.selection.unselected_block_ids = (function frontend$components$block$selection$unselected_block_ids(selected_block_ids,block_ids){
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(selected_block_ids),block_ids)));
});

//# sourceMappingURL=frontend.components.block.selection.js.map
